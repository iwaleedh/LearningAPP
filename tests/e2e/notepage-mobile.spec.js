import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_note_mobile',
  username: 'Note Mobile QA',
};

const notePath = '/notes/chemistry/1/1/0';
const checklistNotePath = '/notes/chemistry/1/2/5';

async function seedDebugSession(page) {
  await page.addInitScript((session) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, debugSession);
}

test.describe('NotePage mobile QA', () => {
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
    await expect(page.locator('.note-toolbar')).toBeVisible();
    await expect(page.locator('.note-study-content')).toBeVisible();
  });

  test('toolbar actions stay reachable and toc opens as a mobile sheet', async ({ page }) => {
    const toolbar = page.locator('.note-toolbar');
    await expect(toolbar).toBeVisible();

    await expect(page.getByRole('button', { name: 'Toggle table of contents' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Toggle recall mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Back to .*chapters/i })).toBeVisible();

    await page.getByRole('button', { name: 'Toggle table of contents' }).click();

    const tocDialog = page.getByRole('dialog', { name: 'Contents' });
    await expect(tocDialog).toBeVisible();
    await expect(tocDialog.locator('.note-toc-link').first()).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(tocDialog).toBeHidden();
    await expect(page.getByRole('button', { name: 'Toggle table of contents' })).toBeFocused();
  });

  test('page avoids horizontal overflow and keeps visible controls touch sized', async ({ page }) => {
    const overflow = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth - window.innerWidth,
    }));

    expect(overflow.page).toBeLessThanOrEqual(1);

    const touchTargetViolations = await page.evaluate(() => {
      const selectors = [
        '.note-page button',
        '.note-page [role="menuitem"]',
        '.note-page [role="checkbox"]',
      ];

      return [...document.querySelectorAll(selectors.join(','))]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
        })
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            text: element.getAttribute('aria-label') || element.textContent?.trim() || element.className,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((item) => item.width < 44 || item.height < 44);
    });

    expect(touchTargetViolations).toEqual([]);
  });

  test('recall opens as a fullscreen mobile dialog with 44px cue navigation and restores focus', async ({ page }) => {
    const recallTrigger = page.getByRole('button', { name: 'Toggle recall mode' });
    await recallTrigger.click();

    const recallDialog = page.getByRole('dialog', { name: /Recall Mode/i });
    await expect(recallDialog).toBeVisible();

    const firstDot = recallDialog.locator('.recall-dot').first();
    await expect(firstDot).toBeVisible();

    const dotBox = await firstDot.boundingBox();
    expect(dotBox?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(dotBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    await page.keyboard.press('ArrowRight');
    await expect(recallDialog.locator('.recall-dot[aria-selected="true"]').first()).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(recallDialog).toBeHidden();
    await expect(recallTrigger).toBeFocused();
  });

  test('fullscreen reading mode persists across navigation and reload, then exits predictably', async ({ page }) => {
    await page.evaluate(() => {
      window.localStorage.removeItem('LT_NOTE_FULLSCREEN');
    });
    await page.reload();

    await expect(page.locator('.note-page--fullscreen')).toHaveCount(0);

    const enterFullscreen = page.getByRole('button', { name: 'Enter fullscreen reading mode' });
    await expect(enterFullscreen).toBeVisible();
    await enterFullscreen.click();

    await expect(page.locator('.note-page--fullscreen')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Exit fullscreen reading mode' })).toHaveAttribute('aria-pressed', 'true');

    await page.goto(checklistNotePath);
    await expect(page.locator('.note-page--fullscreen')).toBeVisible();
    await expect(page.locator('.note-study-content')).toBeVisible();

    await page.reload();
    await expect(page.locator('.note-page--fullscreen')).toBeVisible();

    const exitFullscreen = page.getByRole('button', { name: 'Exit fullscreen reading mode' });
    await expect(exitFullscreen).toBeVisible();
    await exitFullscreen.click();

    await expect(page.locator('.note-page--fullscreen')).toHaveCount(0);

    await page.reload();
    await expect(page.locator('.note-page--fullscreen')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Enter fullscreen reading mode' })).toBeVisible();
  });

  test('fullscreen toolbar matches the compact mobile visual baseline', async ({ page }) => {
    await page.getByRole('button', { name: 'Enter fullscreen reading mode' }).click();

    const toolbar = page.locator('.note-toolbar');
    await expect(toolbar).toBeVisible();

    await expect(toolbar).toHaveScreenshot('note-toolbar-fullscreen-mobile.png', {
      animations: 'disabled',
      caret: 'hide',
    });
  });

  test('topics open through the mobile sheet and checklist items support keyboard activation', async ({ page }) => {
    await page.goto(checklistNotePath);
    await expect(page.locator('.note-study-content')).toBeVisible();

    const topicsTrigger = page.getByRole('button', { name: 'Open topics' });
    await expect(topicsTrigger).toBeVisible();
    await topicsTrigger.focus();
    await page.keyboard.press('Enter');

    const topicsDialog = page.getByRole('dialog', { name: 'Topics' });
    await expect(topicsDialog).toBeVisible();
    await expect(topicsDialog.locator('.note-mobile-topic-link.active')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(topicsDialog).toBeHidden();
    await expect(topicsTrigger).toBeFocused();

    const checkbox = page.locator('[role="checkbox"]').first();
    await expect(checkbox).toBeVisible();
    const initialState = await checkbox.getAttribute('aria-checked');
    await checkbox.focus();
    await page.keyboard.press('Space');
    await expect(checkbox).toHaveAttribute('aria-checked', initialState === 'true' ? 'false' : 'true');
  });
});