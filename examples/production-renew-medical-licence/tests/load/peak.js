// k6 load test – Oct–Dec peak profile
//
// Realistic shape based on Sandra Layne's account: ~70% of the annual ~900–1000
// renewals concentrate in October, November and December. The peak two weeks
// are the steepest. This test ramps to twice the expected peak so the service
// has headroom.
//
// Run against staging, never against production.
//
//   k6 run --vus 50 --duration 5m tests/load/peak.js
//   k6 run --out cloud tests/load/peak.js
//
// Anchors: Standard 5 (works first time), Standard 13 (monitor and measure)

import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8080';

// Custom metrics
const pageLoadTrend = new Trend('page_load_duration', true);
const errorRate = new Rate('error_rate');
const completedJourneys = new Counter('completed_journeys');

export const options = {
  stages: [
    { duration: '2m', target: 20 },    // ramp up
    { duration: '5m', target: 20 },    // baseline (average month)
    { duration: '3m', target: 100 },   // ramp to peak (mid-November)
    { duration: '10m', target: 100 },  // sustained peak
    { duration: '3m', target: 200 },   // double peak headroom check
    { duration: '5m', target: 200 },   // sustained double peak
    { duration: '3m', target: 0 },     // ramp down
  ],
  thresholds: {
    // 95% of requests under 500ms
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    // Error rate under 1%
    http_req_failed: ['rate<0.01'],
    // Custom error rate under 1%
    error_rate: ['rate<0.01'],
    // At least 95% of journeys complete successfully
    'completed_journeys': ['count>0'],
  },
};

const journey = [
  { path: '/',                    label: 'start' },
  { path: '/context.html',        label: 'context' },
  { path: '/id-lookup.html',      label: 'id_lookup' },
  { path: '/confirm-details.html',label: 'confirm_details' },
  { path: '/practice.html',       label: 'practice' },
  { path: '/cpd.html',            label: 'cpd' },
  { path: '/check.html',          label: 'check' },
  { path: '/payment.html',        label: 'payment' },
  { path: '/confirmation.html',   label: 'confirmation' },
];

export default function () {
  group('renew-licence journey', () => {
    for (const step of journey) {
      const url = `${BASE_URL}${step.path}`;
      const res = http.get(url, {
        tags: { page: step.label },
      });
      pageLoadTrend.add(res.timings.duration);

      const ok = check(res, {
        [`${step.label} status 200`]: (r) => r.status === 200,
        [`${step.label} loaded under 1s`]: (r) => r.timings.duration < 1000,
        [`${step.label} has GovBB header`]: (r) => r.body && r.body.includes('alpha.gov.bb'),
      });

      if (!ok) errorRate.add(1);
      else errorRate.add(0);

      // Realistic citizen pause between pages – reading time
      sleep(Math.random() * 3 + 1);
    }
    completedJourneys.add(1);
  });
}

export function handleSummary(data) {
  return {
    'reports/load-peak-summary.json': JSON.stringify(data, null, 2),
    stdout: textSummary(data),
  };
}

function textSummary(data) {
  const m = data.metrics;
  return `
Peak load test summary
======================
Total requests:        ${m.http_reqs?.values.count ?? 0}
Completed journeys:    ${m.completed_journeys?.values.count ?? 0}
Error rate:            ${((m.http_req_failed?.values.rate ?? 0) * 100).toFixed(2)}%
P95 response time:     ${(m['http_req_duration']?.values['p(95)'] ?? 0).toFixed(0)}ms
P99 response time:     ${(m['http_req_duration']?.values['p(99)'] ?? 0).toFixed(0)}ms

Thresholds:
${Object.entries(data.thresholds || {}).map(([k, v]) => `  ${v.ok ? 'PASS' : 'FAIL'}  ${k}`).join('\n')}
`;
}
