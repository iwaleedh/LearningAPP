import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_note_mobile',
  username: 'Note Mobile QA',
};

const notePath = '/notes/chemistry/1/1/0';
const nextNotePath = '/notes/chemistry/1/1/1';

async function seedDebugSession(page) {
  await page.addInitScript(({ session }) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, { session: debugSession });
}

async function openMoreMenu(page) {
  const trigger = page.getByRole('button', { name: 'More actions' });
  await expect(trigger).toBeVisible();
  await trigger.click();
  await expect(page.getByRole('menu', { name: 'More note actions' })).toBeVisible();
}

async function enterFullscreen(page) {
  await openMoreMenu(page);
  await page.getByRole('menuitem', { name: 'Enter fullscreen note view' }).click({ force: true });
  await expect(page.locator('.note-page--fullscreen')).toBeVisible();
  await expect(page.getByRole('toolbar', { name: 'Fullscreen note reading controls' })).toBeVisible();
}

test.describe('NotePage mobile fullscreen reading QA', () => {
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
    await page.goto(notePath);
    await page.evaluate(() => {
      window.localStorage.removeItem('LT_NOTE_FULLSCREEN');
    });
    await page.reload();
    await expect(page.locator('.note-toolbar')).toBeVisible();
    await expect(page.locator('.note-study-content')).toBeVisible();
  });

  test('overflow menu exposes contents and recall on phone', async ({ page }) => {
    await openMoreMenu(page);
    await page.getByRole('menuitem', { name: /Contents/i }).evaluate((element) => element.click());

    const tocDialog = page.getByRole('dialog', { name: 'Contents' });
    await expect(tocDialog).toBeVisible();
    await expect(tocDialog.locator('.note-toc-link').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(tocDialog).toBeHidden();

    await openMoreMenu(page);
    await page.getByRole('menuitem', { name: /Recall/i }).evaluate((element) => element.click());

    const recallDialog = page.getByRole('dialog', { name: /Recall Mode/i });
    await expect(recallDialog).toBeVisible();
    await expect(recallDialog.locator('.recall-dot').first()).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(recallDialog).toBeHidden();
  });

  test('fullscreen persists across reload, hides shell chrome, and exits predictably', async ({ page }) => {
    await enterFullscreen(page);
    await expect(page.locator('html')).toHaveClass(/note-fullscreen-active/);

    const fullscreenLayout = await page.evaluate(() => {
      const mainContent = document.getElementById('main-content');
      const header = document.querySelector('.app-header');
      const sidebar = document.querySelector('.app-sidebar');
      const scrollArea = document.querySelector('.note-scroll-area');
      if (!(mainContent instanceof HTMLElement) || !(header instanceof HTMLElement) || !(sidebar instanceof HTMLElement) || !(scrollArea instanceof HTMLElement)) {
        return null;
      }

      return {
        pageShellFullscreen: mainContent.classList.contains('page-content--note-fullscreen'),
        headerDisplay: window.getComputedStyle(header).display,
        sidebarDisplay: window.getComputedStyle(sidebar).display,
        scrollBorderWidth: window.getComputedStyle(scrollArea).borderTopWidth,
        scrollRadius: window.getComputedStyle(scrollArea).borderTopLeftRadius,
      };
    });

    expect(fullscreenLayout).not.toBeNull();
    expect(fullscreenLayout.pageShellFullscreen).toBe(true);
    expect(fullscreenLayout.headerDisplay).toBe('none');
    expect(fullscreenLayout.sidebarDisplay).toBe('none');
    expect(fullscreenLayout.scrollBorderWidth).toBe('0px');
    expect(fullscreenLayout.scrollRadius).toBe('0px');
    await expect(page.locator('.annotate-canvas-overlay')).toHaveCount(0);

    await page.reload();
    await expect(page.locator('.note-page--fullscreen')).toBeVisible();
    await expect(page.getByRole('toolbar', { name: 'Fullscreen note reading controls' })).toBeVisible();
    await page.getByRole('button', { name: 'Exit fullscreen note view' }).click();
    await expect(page.locator('.note-page--fullscreen')).toHaveCount(0);
    await expect(page.locator('html')).not.toHaveClass(/note-fullscreen-active/);
  });

  test('mobile fullscreen keeps the reading surface maximized', async ({ page }) => {
    await enterFullscreen(page);

    const fullscreenView = await page.evaluate(() => {
      const body = document.querySelector('.note-body');
      const scrollArea = document.querySelector('.note-scroll-area');
      const noteContent = document.querySelector('.note-study-content');
      if (!(body instanceof HTMLElement) || !(scrollArea instanceof HTMLElement) || !(noteContent instanceof HTMLElement)) {
        return null;
      }

      return {
        bodyMarginTop: window.getComputedStyle(body).marginTop,
        bodyMarginLeft: window.getComputedStyle(body).marginLeft,
        scrollBorderWidth: window.getComputedStyle(scrollArea).borderTopWidth,
        scrollRadius: window.getComputedStyle(scrollArea).borderTopLeftRadius,
        contentTop: noteContent.getBoundingClientRect().top,
      };
    });

    expect(fullscreenView).not.toBeNull();
    expect(fullscreenView.bodyMarginTop).toBe('0px');
    expect(fullscreenView.bodyMarginLeft).toBe('0px');
    expect(fullscreenView.scrollBorderWidth).toBe('0px');
    expect(fullscreenView.scrollRadius).toBe('0px');
    expect(fullscreenView.contentTop).toBeLessThan(140);
    await expect(page.locator('.annotate-canvas-overlay')).toHaveCount(0);
  });

  test('mobile fullscreen next-note controls work from the reading toolbar', async ({ page }) => {
    await enterFullscreen(page);

    await page.getByRole('button', { name: 'Next note' }).click();
    await expect(page).toHaveURL(new RegExp(`${nextNotePath}$`));
    await expect(page.locator('.note-page--fullscreen')).toBeVisible();
    await expect(page.getByRole('toolbar', { name: 'Fullscreen note reading controls' })).toBeVisible();
  });
});