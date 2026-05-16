/**
 * Error states – validation, missing data, broken navigation
 *
 * The error pattern is GovBB's: error summary at top of page linking to each
 * invalid field, plus inline error next to each invalid field, with
 * aria-invalid="true" and aria-describedby. Page title prefixed "Error: ...".
 *
 * Anchors: Standard 3 (everyone can use it), Standard 5 (works first time)
 */

import { test, expect } from '@playwright/test';

test.describe('Error states are accessible and actionable', () => {
  test('Trident ID lookup rejects an invalid format', async ({ page }) => {
    await page.goto('/id-lookup.html');

    // Submit an invalid Trident ID
    await page.getByLabel(/Trident ID number/i).fill('not-a-real-id');
    await page.getByRole('button', { name: 'Continue' }).click();

    // The browser's built-in validation should block submission (HTML5 pattern attribute)
    // In production, the server-side handler returns the page with an error summary
    // and inline error. For the static site we assert that the pattern attribute is set.
    const input = page.getByLabel(/Trident ID number/i);
    await expect(input).toHaveAttribute('pattern', '^\\d{6}-\\d{4}$');
    await expect(input).toHaveAttribute('required', '');
    await expect(input).toHaveAttribute('aria-describedby', /trident-id-hint/);

    // Production note: the server-rendered error state would add aria-invalid="true"
    // and update the page title to "Error: What's your Trident ID?".
  });

  test('Context page requires a selection', async ({ page }) => {
    await page.goto('/context.html');

    // One option is checked by default in this prototype (Barbados-resident);
    // production may default-unset depending on policy. Assert the input exists.
    const required = page.getByRole('radio', { name: /actively practising/i });
    await expect(required).toHaveAttribute('required', '');
  });

  test('The Trident ID hint is associated with the input via aria-describedby', async ({ page }) => {
    await page.goto('/id-lookup.html');
    const input = page.getByLabel(/Trident ID number/i);
    const describedBy = await input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    if (describedBy) {
      const hint = page.locator(`#${describedBy}`);
      await expect(hint).toBeVisible();
      await expect(hint).toHaveText(/12-digit number/);
    }
  });

  test('Every page has a back link from the second page onwards', async ({ page }) => {
    const pages = ['context.html', 'id-lookup.html', 'confirm-details.html', 'practice.html', 'cpd.html', 'check.html', 'payment.html'];
    for (const p of pages) {
      await page.goto(`/${p}`);
      await expect(page.getByRole('link', { name: 'Back' })).toBeVisible();
    }
  });

  test('Index page does not have a back link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Back' })).toHaveCount(0);
  });

  test('Confirmation page has no Back link – submission is committed', async ({ page }) => {
    await page.goto('/confirmation.html');
    await expect(page.getByRole('link', { name: 'Back' })).toHaveCount(0);
  });
});
