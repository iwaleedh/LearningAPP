import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_dashboard_mobile',
  username: 'Dashboard QA',
};

const seededMistakes = [
  {
    id: 'm:test:1',
    topic: 'Formulae & Amount',
    question: 'What is the formula for amount of substance?',
    yourAnswer: 'mass x molar mass',
    correctAnswer: 'mass / molar mass',
    attempts: 2,
    lastAttempt: '2026-01-01T00:00:00.000Z',
  },
];

async function seedDebugSession(page) {
  await page.addInitScript((session) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, debugSession);
}

async function seedMistakes(page) {
  await page.goto('/');
  await page.evaluate((mistakes) => {
    localStorage.setItem('lt_mistakes', JSON.stringify(mistakes));
  }, seededMistakes);
}

test.describe('dashboard and utility pages mobile QA', () => {
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
    await seedMistakes(page);
  });

  test('home page renders mobile dashboard cards without provider errors or overflow', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.welcome-banner')).toBeVisible();
    await expect(page.locator('.stats-grid .stat-card')).toHaveCount(4);
    await expect(page.locator('.actions-grid .action-card')).toHaveCount(4);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);

    const actionButton = page.locator('.welcome-actions .btn').first();
    const box = await actionButton.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  });

  test('progress page stays readable on phones and renders its core modules', async ({ page }) => {
    await page.goto('/progress');

    await expect(page.locator('.progress-page-title')).toBeVisible();
    await expect(page.locator('.progress-overview')).toBeVisible();
    await expect(page.locator('.badge-system')).toBeVisible();
    await expect(page.locator('.leaderboard')).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('mistake bank stacks review content and keeps controls reachable on phones', async ({ page }) => {
    await page.goto('/mistakes');

    await expect(page.locator('.mistake-card')).toHaveCount(1);
    const clearAll = page.getByRole('button', { name: /clear all/i });
    await expect(clearAll).toBeVisible();

    const mastered = page.getByRole('button', { name: /mark as mastered/i });
    const masteredBox = await mastered.boundingBox();
    expect(masteredBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('settings page renders mobile controls without provider errors', async ({ page }) => {
    await page.goto('/settings');

    await expect(page.locator('.settings-profile-card')).toBeVisible();
    await expect(page.locator('.toggle-switch')).toBeVisible();

    const resetButton = page.getByRole('button', { name: /reset/i }).first();
    const box = await resetButton.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});