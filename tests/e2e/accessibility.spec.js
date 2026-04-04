import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_e2e',
  username: 'Debug Student',
};

async function seedDebugSession(page) {
  await page.addInitScript((session) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, debugSession);
}

test.describe('signed-in shell accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await seedDebugSession(page);
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Search (Command K)' })).toBeVisible();
  });

  test('skip link moves focus to main content', async ({ page }) => {
    await page.keyboard.press('Tab');

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skipLink).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(page.locator('main#main-content')).toBeFocused();
  });

  test('search dialog autofocuses the combobox immediately on open', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: 'Search (Command K)' });
    await searchButton.click();

    const dialog = page.locator('.search-modal[role="dialog"]');
    const input = page.locator('.search-modal [role="combobox"]');

    await expect(dialog).toBeVisible();
    await expect(input).toBeFocused();
  });

  test('search dialog traps keyboard focus inside the modal on Tab and Shift+Tab', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: 'Search (Command K)' });
    await searchButton.click();

    const dialog = page.locator('.search-modal[role="dialog"]');
    const input = page.locator('.search-modal [role="combobox"]');

    await expect(dialog).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(input).toBeFocused();
  });

  test('search dialog hides and blocks the background, then closes on Escape', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: 'Search (Command K)' });
    await searchButton.click();

    const dialog = page.locator('.search-modal[role="dialog"]');

    await expect(dialog).toBeVisible();
    await expect(page.locator('.app-layout')).toHaveAttribute('aria-hidden', 'true');
    await expect(page.locator('.app-layout')).toHaveClass(/app-layout--modal-blocked/);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(page.locator('.app-layout')).not.toHaveAttribute('aria-hidden', 'true');
    await expect(page.locator('.app-layout')).not.toHaveClass(/app-layout--modal-blocked/);
  });

  test('search combobox exposes results and arrow-key selection updates active option', async ({ page }) => {
    await page.getByRole('button', { name: 'Search (Command K)' }).click();

    const input = page.locator('.search-modal [role="combobox"]');
    await input.fill('atomic');

    const options = page.locator('#cmd-search-results [role="option"]');
    await expect(options.first()).toBeVisible({ timeout: 20000 });
    await expect(input).toHaveAttribute('aria-controls', 'cmd-search-results');

    await page.keyboard.press('ArrowDown');

    const selectedOptions = page.locator('#cmd-search-results [role="option"][aria-selected="true"]');
    await expect(selectedOptions).toHaveCount(1);
    await expect(input).toHaveAttribute('aria-activedescendant', /cmd-result-\d+/);
  });
});

test.describe('signed-out auth modal accessibility', () => {
  test('auth modal keeps keyboard focus inside and restores focus on Escape', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

    const openButton = page.getByRole('button', { name: 'Sign In' });
    await openButton.click();

    const dialog = page.locator('.auth-modal[role="dialog"]');
    const closeButton = page.getByRole('button', { name: 'Close sign-in dialog' });
    const debugInput = page.getByPlaceholder('Display name (optional)');

    await expect(dialog).toBeVisible();
    await expect(closeButton).toBeFocused();

    for (let index = 0; index < 6; index += 1) {
      await page.keyboard.press('Tab');
      const isInsideModal = await page.evaluate(() => Boolean(document.activeElement?.closest('.auth-modal')));
      expect(isInsideModal).toBe(true);
    }

    for (let index = 0; index < 3; index += 1) {
      await page.keyboard.press('Shift+Tab');
      const isInsideModal = await page.evaluate(() => Boolean(document.activeElement?.closest('.auth-modal')));
      expect(isInsideModal).toBe(true);
    }

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(openButton).toBeFocused();

    await context.close();
  });
});