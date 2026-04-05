import { test, expect } from '@playwright/test';

const teacherSession = {
  role: 'teacher',
  userId: 'debug_teacher_mobile_auth',
  username: 'Teacher QA',
};

const studentSession = {
  role: 'student',
  userId: 'debug_student_mobile_auth',
  username: 'Student QA',
};

async function seedAuthSession(page, session) {
  if (!session) {
    return;
  }

  await page.addInitScript((nextSession) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(nextSession));
  }, session ?? null);
}

test.describe('teacher and auth mobile QA', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });

  test('guest teacher route falls back to landing and debug teacher sign-in can reach the dashboard', async ({ page }) => {
    await seedAuthSession(page, null);
    await page.goto('/teacher');

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('.landing-page')).toBeVisible();

    const signInButton = page.getByRole('button', { name: /^sign in$/i });
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    const dialog = page.getByRole('dialog', { name: 'Living Textbook' });
    await expect(dialog).toBeVisible();

    const continueAsTeacher = dialog.getByRole('button', { name: /continue as teacher/i });
    const continueBox = await continueAsTeacher.boundingBox();
    expect(continueBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    await continueAsTeacher.click();
    await expect(page).toHaveURL(/\/$/);

    await page.goto('/teacher');
    await expect(page).toHaveURL(/\/teacher$/);
    await expect(page.locator('.teacher-dashboard-header')).toBeVisible();
  });

  test('teacher dashboard stays within the viewport and exposes mobile-first actions', async ({ page }) => {
    await seedAuthSession(page, teacherSession);
    await page.goto('/teacher');

    await expect(page.locator('.teacher-dashboard-header')).toBeVisible();
    await expect(page.locator('.teacher-stats-grid .teacher-stat-card')).toHaveCount(4);

    const startClass = page.getByRole('button', { name: /start live class/i });
    const startBox = await startClass.boundingBox();
    expect(startBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    const manageNotes = page.getByRole('button', { name: /manage notes/i });
    await manageNotes.click();
    await expect(page.locator('.teacher-note-textarea')).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('student teacher-route denial stays legible on mobile', async ({ page }) => {
    await seedAuthSession(page, studentSession);
    await page.goto('/teacher');

    await expect(page).toHaveURL(/\/settings#profile$/);
    await expect(page.locator('.settings-access-card')).toBeVisible();
    await expect(page.locator('.settings-access-card')).toContainText(/access limited/i);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('teacher monitor renders on mobile without overflow regressions', async ({ page }) => {
    await seedAuthSession(page, teacherSession);
    await page.goto('/teacher/monitor');

    await expect(page.locator('.teacher-monitor-header')).toBeVisible();
    await expect(page.locator('.teacher-badge')).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);

    const state = page.locator('.teacher-monitor-empty, .teacher-monitor-loading, .teacher-session-grid');
    await expect(state.first()).toBeVisible();
  });
});