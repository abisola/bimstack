// k6 soak test – sustained moderate load over 8 hours
//
// Surfaces problems that don't appear in short tests:
//   - Memory leaks
//   - Connection pool exhaustion
//   - Gradual response-time degradation
//   - File-descriptor leaks
//   - Cache eviction patterns under sustained pressure
//
// Run overnight against staging. Real Bajan peak volumes don't require this
// scale, but a clean 8-hour soak gives confidence for live operations.
//
//   k6 run tests/load/soak.js
//
// Anchors: Standard 5 (works first time), Standard 8 (sustainable)

import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8080';

export const options = {
  stages: [
    { duration: '10m', target: 25 },   // ramp up
    { duration: '7h', target: 25 },    // sustained
    { duration: '10m', target: 0 },    // ramp down
  ],
  thresholds: {
    // Slightly more lenient than peak – the goal is no drift over time
    http_req_duration: ['p(95)<700'],
    http_req_failed: ['rate<0.005'],   // 0.5% error budget over 8 hours
  },
};

export default function () {
  const journey = ['/', '/context.html', '/id-lookup.html', '/confirm-details.html', '/practice.html', '/cpd.html', '/check.html', '/payment.html', '/confirmation.html'];
  const path = journey[Math.floor(Math.random() * journey.length)];
  const res = http.get(`${BASE_URL}${path}`);
  check(res, {
    'status 200': (r) => r.status === 200,
    'loaded under 1s': (r) => r.timings.duration < 1000,
  });
  // Random pause 5–15 seconds to simulate realistic distribution
  sleep(Math.random() * 10 + 5);
}
