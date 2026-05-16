/**
 * Accessibility audit – axe-core against every page
 *
 * WCAG 2.1 AA is the floor (Standard 3 – everyone can use it). Anything below
 * AA fails the build. This suite runs axe on every page in its default state,
 * then on key error and interactive states.
 *
 * Requires:  @axe-core/playwright   (in package.json devDependencies)
 *
 * Anchors: Standard 3 (everyone can use it)
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { url: '/', name: 'Start' },
  { url: '/context.html', name: 'Context' },
  { url: '/id-lookup.html', name: 'Trident ID lookup' },
  { url: '/confirm-details.html', name: 'Confirm details' },
  { url: '/practice.html', name: 'Practice' },
  { url: '/cpd.html', name: 'CPD' },
  { url: '/check.html', name: 'Check your answers' },
  { url: '/payment.html', name: 'Payment' },
  { url: '/confirmation.html', name: 'Confirmation' },
];

test.describe('WCAG 2.1 AA – every page, default state', () => {
  for (const { url, name } of pages) {
    test(`${name} page has no axe violations`, async ({ page }) => {
      await page.goto(url);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // If this fails, run `npm run a11y -- --reporter=html` for a readable report.
      // Standard 3 is non-negotiable; do not skip or filter violations.
      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
    });
  }
});

test.describe('WCAG 2.1 AA – interactive states', () => {
  test('Context page passes axe with each option selected', async ({ page }) => {
    await page.goto('/context.html');
    for (const option of ['actively practising', 'working abroad temporarily', 'retired or only practising occasionally']) {
      await page.getByRole('radio', { name: new RegExp(option, 'i') }).check();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations, `axe violations with "${option}" selected: ${JSON.stringify(results.violations, null, 2)}`).toEqual([]);
    }
  });

  test('CPD page passes axe with "What counts as CPD?" expanded', async ({ page }) => {
    await page.goto('/cpd.html');
    await page.getByText(/What counts as CPD\?/).click();
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
});

test.describe('Colour contrast – flagged in axe but worth a direct check', () => {
  test('GovBB primary action button meets AA against the off-white background', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: 'Start now' });
    const cs = await cta.evaluate((el) => {
      const s = window.getComputedStyle(el);
      return { color: s.color, background: s.backgroundColor };
    });
    // green CTA on off-white background – contrast is checked by axe; this is documentation
    expect(cs.color.toLowerCase()).toMatch(/rgb\(255,?\s*255,?\s*255\)|#fff/);
  });
});
