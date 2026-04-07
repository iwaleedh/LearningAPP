import { test, expect } from '@playwright/test';
import { seedAccessExpiredNotice } from './support/browserSeeds.js';
import { SEEDED_ACCESS_EXPIRED_NOTICE } from '../support/testSeeds.js';

test.describe('access window landing flow', () => {
  test('expired notice appears on landing and can open the auth modal', async ({ page }) => {
    await seedAccessExpiredNotice(page, SEEDED_ACCESS_EXPIRED_NOTICE);

    await page.goto('/');

    await expect(page.locator('.landing-access-notice')).toBeVisible();
    await expect(page.locator('.landing-access-notice')).toContainText(/access expired/i);

    const renewButton = page.getByRole('button', { name: /renew access/i });
    await renewButton.click();

    await expect(page.getByRole('dialog', { name: 'Study Smart' })).toBeVisible();
  });
});