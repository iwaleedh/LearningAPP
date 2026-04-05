import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_note_desktop',
  username: 'Note Desktop QA',
};

const notePath = '/notes/chemistry/1/1/0';
const nextNotePath = '/notes/chemistry/1/1/1';

async function seedDebugSession(page) {
  await page.addInitScript(({ session }) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, { session: debugSession });
}

async function enterFullscreen(page) {
  const trigger = page.getByRole('button', { name: 'Enter fullscreen note view' });
  await expect(trigger).toBeVisible();
  await trigger.click();
  await expect(page.locator('.note-page--fullscreen')).toBeVisible();
  await expect(page.getByRole('toolbar', { name: 'Fullscreen note reading controls' })).toBeVisible();
}

test.describe('NotePage desktop fullscreen reading QA', () => {
  test.use({
    viewport: { width: 1440, height: 960 },
    screen: { width: 1440, height: 960 },
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

  test('desktop fullscreen hides app chrome and promotes the note shell', async ({ page }) => {
    await enterFullscreen(page);

    const fullscreenLayout = await page.evaluate(() => {
      const mainContent = document.getElementById('main-content');
      const header = document.querySelector('.app-header');
      const sidebar = document.querySelector('.app-sidebar');
      if (!(mainContent instanceof HTMLElement) || !(header instanceof HTMLElement) || !(sidebar instanceof HTMLElement)) {
        return null;
      }

      return {
        pageShellFullscreen: mainContent.classList.contains('page-content--note-fullscreen'),
        rootFullscreen: document.documentElement.classList.contains('note-fullscreen-active'),
        headerDisplay: window.getComputedStyle(header).display,
        sidebarDisplay: window.getComputedStyle(sidebar).display,
      };
    });

    expect(fullscreenLayout).not.toBeNull();
    expect(fullscreenLayout.pageShellFullscreen).toBe(true);
    expect(fullscreenLayout.rootFullscreen).toBe(true);
    expect(fullscreenLayout.headerDisplay).toBe('none');
    expect(fullscreenLayout.sidebarDisplay).toBe('none');
    await expect(page.locator('.note-toc')).toHaveCount(0);
    await expect(page.locator('.annotate-canvas-overlay')).toHaveCount(0);
  });

  test('desktop fullscreen keeps the reading surface maximized', async ({ page }) => {
    await enterFullscreen(page);

    const fullscreenView = await page.evaluate(() => {
      const body = document.querySelector('.note-body');
      const scrollArea = document.querySelector('.note-scroll-area');
      if (!(body instanceof HTMLElement) || !(scrollArea instanceof HTMLElement)) {
        return null;
      }

      return {
        bodyMarginTop: window.getComputedStyle(body).marginTop,
        bodyMarginLeft: window.getComputedStyle(body).marginLeft,
        scrollBorderWidth: window.getComputedStyle(scrollArea).borderTopWidth,
        scrollRadius: window.getComputedStyle(scrollArea).borderTopLeftRadius,
      };
    });

    expect(fullscreenView).not.toBeNull();
    expect(fullscreenView.bodyMarginTop).toBe('0px');
    expect(fullscreenView.bodyMarginLeft).toBe('0px');
    expect(fullscreenView.scrollBorderWidth).toBe('0px');
    expect(fullscreenView.scrollRadius).toBe('0px');
  });

  test('desktop section controls, keyboard next-note navigation, and escape exit work in fullscreen', async ({ page }) => {
    await enterFullscreen(page);

    await page.locator('.note-scroll-area').evaluate((element) => {
      element.scrollTop = 24;
      element.dispatchEvent(new Event('scroll'));
    });
    await expect.poll(() => page.getByRole('button', { name: 'Next section' }).isEnabled()).toBe(true);

    const initialScrollTop = await page.locator('.note-scroll-area').evaluate((element) => element.scrollTop);
    await page.getByRole('button', { name: 'Next section' }).click();
    await expect.poll(() => page.locator('.note-scroll-area').evaluate((element) => element.scrollTop)).toBeGreaterThan(initialScrollTop);

    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(new RegExp(`${nextNotePath}$`));
    await expect(page.locator('.note-page--fullscreen')).toBeVisible();
    await expect(page.getByRole('toolbar', { name: 'Fullscreen note reading controls' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('.note-page--fullscreen')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Enter fullscreen note view' })).toBeVisible();
  });
});
