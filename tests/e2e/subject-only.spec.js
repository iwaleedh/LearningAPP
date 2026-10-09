import { test, expect } from '@playwright/test';
import { seedDevAuthSession } from './support/browserSeeds.js';
import { createDebugSession } from '../support/testSeeds.js';

test.beforeEach(async ({ page }) => {
  await seedDevAuthSession(page, createDebugSession({
    role: 'student', userId: 'debug_subject_only', username: 'Subject QA',
  }));
});

for (const width of [390, 1280]) {
  test(`study navigation remains available at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const sidebar = page.locator('.sidebar');
    if (width < 768) {
      await page.getByRole('button', { name: 'Open navigation menu' }).click();
    }
    for (const name of ['Dashboard', 'Notes', 'Exercises', 'Past Papers', 'Flashcards', 'Progress', 'Mistake Bank', 'Settings']) {
      await expect(sidebar.getByRole('link', { name, exact: true })).toBeVisible();
    }
    await expect(sidebar.getByText(/Live Class|Create Class|Join Class|Teacher Dashboard|Advanced/)).toHaveCount(0);
    await sidebar.getByRole('link', { name: 'Notes', exact: true }).click();
    await expect(page.locator('.chapter-page-title')).toBeVisible({ timeout: 90000 });
  });
}

test('retired classroom and infrastructure routes show the missing-page screen', async ({ page }) => {
  for (const path of ['/live/local_old', '/teacher', '/teacher/monitor', '/live-notes/old/student', '/my-notes/old/student', '/advanced', '/backend-architectures']) {
    await page.goto(path);
    await expect(page.getByRole('heading', { name: '404 — Page Not Found' })).toBeVisible();
  }
});
