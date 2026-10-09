import { test, expect } from '@playwright/test';
import { seedDevAuthSession } from './support/browserSeeds.js';
import { createDebugSession } from '../support/testSeeds.js';

const debugSession = createDebugSession({
  role: 'student',
  userId: 'debug_student_study_mobile',
  username: 'Study Flow QA',
});

test.describe('chapter and exercise mobile QA', () => {
  test.setTimeout(120000);

  test.use({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });

  test.beforeEach(async ({ page }) => {
    await seedDevAuthSession(page, debugSession);
  });

  test('chapter outline keeps topic navigation and open-note links reachable on phones', async ({ page }) => {
    await page.goto('/chapters?subject=chemistry');

    await expect(page.getByText('Loading syllabus...')).toBeHidden({ timeout: 90000 });
    await expect(page.locator('.page-title')).toBeVisible();
    await expect(page.locator('.outline-unit').first()).toBeVisible();

    const firstTopic = page.locator('.outline-topic-header').first();
    await firstTopic.click();

    const firstSubtopicLink = page.getByRole('link', { name: /Open note for/i }).first();
    await expect(firstSubtopicLink).toBeVisible();

    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(pageOverflow).toBeLessThanOrEqual(1);

    const linkBox = await firstSubtopicLink.boundingBox();
    expect(linkBox?.height ?? 0).toBeGreaterThanOrEqual(44);
  });

  test('practice flow goes subject, topic, then a keyboard-activatable mode', async ({ page }) => {
    await page.goto('/exercises');

    await page.getByRole('button', { name: 'Chemistry', exact: true }).click();
    const firstTopic = page.locator('.exercise-topic-row:not([disabled])').first();
    await expect(firstTopic).toBeVisible({ timeout: 90000 });
    await firstTopic.click();

    await expect(page.locator('.exercise-type-card.interactive').first()).toBeVisible({ timeout: 30000 });
    const firstMode = page.locator('.exercise-type-card.interactive').first();
    await firstMode.focus();
    await page.keyboard.press('Enter');

    await expect(page.locator('.exercise-mode-title')).toBeVisible();
    await expect(page.locator('.exercise-back-link')).toBeVisible();
  });
});
