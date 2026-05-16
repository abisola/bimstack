/**
 * Abroad context path – doctor renewing from an overseas rotation
 *
 * Tests the journey when the doctor picks "I'm working abroad temporarily" on
 * the context page. The note about overseas CPD and the address-override
 * should be discoverable.
 *
 * Anchors: Standard 3 (everyone can use it), Standard 1 (meet user needs)
 */

import { test, expect } from '@playwright/test';

test.describe('Doctor on an overseas rotation renews their licence', () => {
  test('abroad context reveals the abroad-specific guidance and address-override', async ({ page }) => {
    // Reach the context page
    await page.goto('/');
    await page.getByRole('link', { name: 'Start now' }).click();

    // Pick abroad
    await page.getByRole('radio', { name: /working abroad temporarily/i }).check();

    // The abroad note becomes visible (via the :has selector)
    await expect(page.getByRole('region', { name: /Note for renewing from abroad/i })).toBeVisible();
    await expect(page.getByText(/CPD from your overseas rotation counts/)).toBeVisible();

    // The other two notes do not show
    await expect(page.getByRole('region', { name: /Note for in-Barbados renewal/i })).not.toBeVisible();
    await expect(page.getByRole('region', { name: /Note for retired or occasional/i })).not.toBeVisible();

    // Continue and progress as normal
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/id-lookup\.html/);

    await page.getByLabel(/Trident ID number/i).fill('750814-9384');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Confirm details page – the address-override CTA is discoverable
    await expect(page).toHaveURL(/confirm-details\.html/);
    await expect(page.getByRole('link', { name: /Use a different address/i })).toBeVisible();

    // The "Something not right?" alt-options block also has a category-update path
    await expect(page.getByRole('link', { name: /My registration category is wrong/i })).toBeVisible();
  });

  test('occasional context surfaces the restricted-category warning', async ({ page }) => {
    await page.goto('/context.html');
    await page.getByRole('radio', { name: /retired or only practising occasionally/i }).check();
    const note = page.getByRole('region', { name: /Note for retired or occasional/i });
    await expect(note).toBeVisible();
    await expect(note.getByText(/restricted/)).toBeVisible();
    await expect(note.getByText(/246-535-7400/)).toBeVisible();
  });

  test('CPD page calls out specialty-college obligations for specialists', async ({ page }) => {
    await page.goto('/cpd.html');
    const specialistCallout = page.getByRole('region', { name: /Notice for specialists/i });
    await expect(specialistCallout).toBeVisible();
    await expect(specialistCallout.getByText(/MRCPCH, MRCP, MRCS/)).toBeVisible();
    await expect(specialistCallout.getByText(/doesn't automatically meet your College's requirement/)).toBeVisible();
  });
});
