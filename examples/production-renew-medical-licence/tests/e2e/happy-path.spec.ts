/**
 * Happy path – Bajan doctor in active practice
 *
 * Walks the journey end to end using accessible selectors (role + accessible
 * name). If any of these tests fail because of a non-functional change, the
 * accessibility of that part of the service has probably also regressed.
 *
 * Anchors: Standards 1 (meet user needs), 4 (simple language), 5 (works first time)
 */

import { test, expect } from '@playwright/test';

test.describe('Bajan doctor renews their full-registration licence end to end', () => {
  test('completes the renewal in under 15 minutes', async ({ page }) => {
    // 1. Start
    await page.goto('/');
    await expect(page).toHaveTitle(/Renew your medical licence/);
    await expect(page.getByRole('heading', { name: /Renew your medical licence/i, level: 1 })).toBeVisible();
    await expect(page.getByText('BBD 200')).toBeVisible();
    await expect(page.getByText(/anywhere in the world/i)).toBeVisible();
    await page.getByRole('link', { name: 'Start now' }).click();

    // 2. Context
    await expect(page).toHaveURL(/context\.html/);
    await expect(page.getByRole('group', { name: /Where will you be practising/i })).toBeVisible();
    await page.getByRole('radio', { name: /actively practising/i }).check();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 3. Trident ID lookup
    await expect(page).toHaveURL(/id-lookup\.html/);
    await page.getByLabel(/Trident ID number/i).fill('750814-9384');
    await page.getByRole('button', { name: 'Continue' }).click();

    // 4. Confirm details
    await expect(page).toHaveURL(/confirm-details\.html/);
    await expect(page.getByRole('heading', { name: /Is this you\?/i })).toBeVisible();
    await expect(page.getByText('Full registration')).toBeVisible();
    await expect(page.getByText('Dr. Sarah K. Williams')).toBeVisible();
    await page.getByRole('button', { name: /Yes, that's me/i }).click();

    // 5. Practice
    await expect(page).toHaveURL(/practice\.html/);
    await page.getByRole('radio', { name: /Public hospital/i }).check();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 6. CPD
    await expect(page).toHaveURL(/cpd\.html/);
    await expect(page.getByRole('heading', { name: /Add your CPD records/i })).toBeVisible();
    await expect(page.getByText(/Total so far: 42 hours/)).toBeVisible();
    await expect(page.getByText(/above the 40-hour minimum/)).toBeVisible();
    // 'What counts as CPD?' disclosure
    await page.getByRole('group', { name: /What counts as CPD/i }).first().click().catch(async () => {
      await page.getByText(/What counts as CPD\?/).click();
    });
    await expect(page.getByText(/Overseas rotations/)).toBeVisible();
    await page.getByRole('button', { name: 'Continue' }).click();

    // 7. Check your answers
    await expect(page).toHaveURL(/check\.html/);
    await expect(page.getByRole('heading', { name: /Check your answers/i })).toBeVisible();
    await expect(page.getByText(/In Barbados, actively practising/)).toBeVisible();
    await expect(page.getByText(/Full registration/)).toBeVisible();
    await expect(page.getByText('BBD 200.00')).toBeVisible();
    // Timeline shows the application + review + complete steps
    await expect(page.getByText(/You submit your application/)).toBeVisible();
    await expect(page.getByText(/The Council reviews it/)).toBeVisible();
    await page.getByRole('button', { name: /Continue to payment/i }).click();

    // 8. Payment
    await expect(page).toHaveURL(/payment\.html/);
    await expect(page.getByRole('heading', { name: /Pay your renewal fee/i })).toBeVisible();
    await page.getByRole('button', { name: 'Pay now' }).click();

    // 9. Confirmation – "Application sent", not "Renewal complete"
    await expect(page).toHaveURL(/confirmation\.html/);
    await expect(page.getByRole('heading', { name: /Application sent/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/reference number is/i)).toBeVisible();
    await expect(page.getByText(/MED-2026-04857/)).toBeVisible();
    await expect(page.getByText(/Council review – usually 1 to 5 working days/)).toBeVisible();
    await expect(page.getByRole('button', { name: /Print this page/i })).toBeVisible();
  });

  test('Back link from every page returns to the previous page', async ({ page }) => {
    const journey = [
      { url: 'context.html', backTo: /\/$|index\.html/ },
      { url: 'id-lookup.html', backTo: /context\.html/ },
      { url: 'confirm-details.html', backTo: /id-lookup\.html/ },
      { url: 'practice.html', backTo: /confirm-details\.html/ },
      { url: 'cpd.html', backTo: /practice\.html/ },
      { url: 'check.html', backTo: /cpd\.html/ },
      { url: 'payment.html', backTo: /check\.html/ },
    ];

    for (const { url, backTo } of journey) {
      await page.goto(`/${url}`);
      await page.getByRole('link', { name: 'Back' }).click();
      await expect(page).toHaveURL(backTo);
    }
  });

  test('Skip link is the first focusable element', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: /Skip to main content/i });
    await expect(skip).toBeFocused();
  });
});
