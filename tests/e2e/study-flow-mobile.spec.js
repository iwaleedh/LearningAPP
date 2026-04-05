import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_study_mobile',
  username: 'Study Flow QA',
};

async function seedDebugSession(page) {
  await page.addInitScript((session) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, debugSession);
}

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
    await seedDebugSession(page);
  });

  test('chapter page keeps accordion navigation and open-note actions reachable on phones', async ({ page }) => {
    await page.goto('/chapters?subject=chemistry');

    await expect(page.getByText('Loading syllabus...')).toBeHidden({ timeout: 90000 });
    await expect(page.locator('.chapter-page-title')).toBeVisible();
    await expect(page.locator('.chapter-meta-boxes .meta-box')).toHaveCount(2);

    const firstTopic = page.locator('.chapter-topic-header').first();
    await firstTopic.click();

    const firstSubtopicButton = page.getByRole('link', { name: /Open note for/i }).first();
    await expect(firstSubtopicButton).toBeVisible();

    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(pageOverflow).toBeLessThanOrEqual(1);

    const buttonBox = await firstSubtopicButton.boundingBox();
    expect(buttonBox?.height ?? 0).toBeGreaterThanOrEqual(44);
    expect(buttonBox?.width ?? 0).toBeGreaterThanOrEqual(44);
  });

  test('exercise page exposes a mobile subject select and keyboard-activatable practice cards', async ({ page }) => {
    await page.goto('/exercises');

    const subjectSelect = page.locator('#exercise-subject-select');
    const topicSelect = page.locator('.exercise-topic-select');
    await expect(subjectSelect).toBeVisible();
    await expect(topicSelect).toBeVisible();
    await expect(topicSelect).toBeEnabled({ timeout: 90000 });

    await topicSelect.selectOption('1:1');
    await expect(page.locator('.exercise-type-card.interactive')).toHaveCount(6);

    const firstCard = page.locator('.exercise-type-card.interactive').first();
    await firstCard.focus();
    await page.keyboard.press('Enter');

    await expect(page.locator('.exercise-mode-title')).toBeVisible();
    await expect(page.locator('.exercise-back-btn')).toBeVisible();
    await expect(page.locator('.exercise-back-btn')).toHaveCSS('min-height', '44px');
  });
});