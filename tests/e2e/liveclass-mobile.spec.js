import { test, expect } from '@playwright/test';

const SESSION_ID = 'local_1775329403089_mobilee2e';
const JOIN_REQUEST_ID = 'local_join_1775329403089_mobilee2e';
const STUDENT_TEMP_ID = 'temp_mobile_student_e2e';

const teacherSession = {
  role: 'teacher',
  userId: 'debug_teacher_mobilee2e',
  username: 'Mobile Teacher',
};

const studentSession = {
  role: 'student',
  userId: 'debug_student_mobilee2e',
  username: 'Mobile Student',
};

function createLocalLiveStore() {
  return {
    sessions: {
      [SESSION_ID]: {
        _id: SESSION_ID,
        hostUserId: teacherSession.userId,
        title: 'Mobile QA Session',
        backgroundType: 'lined',
        status: 'active',
        joinCode: 'MOB123',
        autoAccept: false,
        createdAt: 1775329403089,
      },
    },
    joinRequests: {
      [JOIN_REQUEST_ID]: {
        _id: JOIN_REQUEST_ID,
        sessionId: SESSION_ID,
        studentName: studentSession.username,
        tempId: STUDENT_TEMP_ID,
        requesterUserId: studentSession.userId,
        status: 'accepted',
        requestedAt: 1775329404099,
      },
    },
    studentNotes: {
      [`${SESSION_ID}:${STUDENT_TEMP_ID}`]: {
        sessionId: SESSION_ID,
        tempId: STUDENT_TEMP_ID,
        noteContent: 'Existing mobile note',
        updatedAt: 1775329405099,
      },
    },
  };
}

async function seedLiveClassSession(page, { authSession, includeJoinState = false }) {
  const store = createLocalLiveStore();

  await page.addInitScript(
    ({ nextAuthSession, nextStore, nextSessionId, nextJoinRequestId, nextTempId, nextTheme, includeStudentJoinState }) => {
      window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(nextAuthSession));
      if (includeStudentJoinState) {
        window.sessionStorage.setItem(
          `lt_joinRequest_${nextSessionId}`,
          JSON.stringify({
            requestId: nextJoinRequestId,
            tempId: nextTempId,
            studentName: nextAuthSession.username,
          }),
        );
      }
      window.localStorage.setItem('lt_local_live_store_v1', JSON.stringify(nextStore));
      window.localStorage.setItem('lt-theme', nextTheme);
    },
    {
      nextAuthSession: authSession,
      nextStore: store,
      nextSessionId: SESSION_ID,
      nextJoinRequestId: JOIN_REQUEST_ID,
      nextTempId: STUDENT_TEMP_ID,
      nextTheme: 'dark',
      includeStudentJoinState: includeJoinState,
    },
  );
}

async function gotoLiveClass(page) {
  await page.goto(`/live/${SESSION_ID}`);
  await expect(page.getByText('Local')).toBeVisible();
}

async function dragSheetToDismiss(page, sheet) {
  const handle = sheet.locator('.lc-mobile-sheet-handle');
  await expect(handle).toBeVisible();

  const box = await handle.boundingBox();
  if (!box) {
    throw new Error('Expected mobile sheet handle to have a bounding box');
  }

  const startX = box.x + (box.width / 2);
  const startY = box.y + (box.height / 2);

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(startX, startY + 140, { steps: 8 });
  await page.mouse.up();
}

test.describe('live class mobile QA', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });

  test('teacher compact toolbar keeps core and secondary actions reachable', async ({ page }) => {
    await seedLiveClassSession(page, { authSession: teacherSession });
    await gotoLiveClass(page);

    const toolbar = page.getByRole('toolbar', { name: 'Whiteboard tools' });
    await expect(toolbar).toBeVisible();
    await expect(toolbar).toHaveClass(/lc-toolbar--compact/);

    await expect(page.getByRole('button', { name: /Shapes/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Color/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Size/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /More/i })).toBeVisible();

    await page.getByRole('button', { name: /Shapes/i }).click({ force: true });
    await expect(page.locator('.lc-shape-dropdown')).toBeVisible();
    await expect(page.locator('.lc-shape-dropdown button')).toHaveCount(8);
    await page.keyboard.press('Escape');

    await page.getByRole('button', { name: /Color/i }).click({ force: true });
    await expect(page.locator('#lc-color-grid-dropdown')).toBeVisible();
    await expect(page.locator('#lc-color-grid-dropdown button')).toHaveCount(40);
    await page.keyboard.press('Escape');

    await page.getByRole('button', { name: /Size/i }).click({ force: true });
    await expect(page.locator('#lc-width-dropdown')).toBeVisible();
    await expect(page.locator('#lc-width-dropdown button')).toHaveCount(7);
    await page.keyboard.press('Escape');

    await page.getByRole('button', { name: /More/i }).click({ force: true });
    const moreSheet = page.locator('.lc-toolbar-sheet');
    await expect(moreSheet).toBeVisible();
    await expect(moreSheet.getByText('More controls')).toBeVisible();
    await expect(moreSheet.getByText('Live Polls')).toBeVisible();
    await expect(moreSheet.getByText('Clear')).toBeVisible();

    const sheetRect = await moreSheet.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      };
    });

    expect(sheetRect.top).toBeGreaterThanOrEqual(0);
    expect(sheetRect.left).toBeGreaterThanOrEqual(0);
    expect(sheetRect.right).toBeLessThanOrEqual(390);
  });

  test('student mobile flow switches between board and canvas and opens notes sheet', async ({ page }) => {
    await seedLiveClassSession(page, { authSession: studentSession, includeJoinState: true });
    await gotoLiveClass(page);

    const switcher = page.locator('.lc-student-mobile-switcher');
    await expect(switcher).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Teacher Board' })).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tab', { name: 'My Canvas' })).toHaveAttribute('aria-selected', 'false');

    await expect(page.getByRole('toolbar', { name: 'Whiteboard tools' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Raise hand' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open my notes' })).toBeVisible();

    await page.getByRole('tab', { name: 'My Canvas' }).click();
    await expect(page.getByRole('tab', { name: 'My Canvas' })).toHaveAttribute('aria-selected', 'true');

    const toolbar = page.getByRole('toolbar', { name: 'Whiteboard tools' });
    await expect(toolbar).toBeVisible();
    await expect(toolbar).toHaveClass(/lc-toolbar--compact/);
    await expect(page.getByRole('button', { name: /Text/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /More/i })).toBeVisible();

    await page.getByRole('button', { name: 'Open my notes' }).click();
    const notesDialog = page.getByRole('dialog', { name: 'My notes' });
    await expect(notesDialog).toBeVisible();
    await expect(page.locator('.snp-textarea')).toHaveValue('Existing mobile note');
  });

  test('mobile sheets support Escape-close and drag-to-dismiss', async ({ page, context }) => {
    await seedLiveClassSession(page, { authSession: teacherSession });
    await gotoLiveClass(page);

    await page.getByRole('button', { name: /More/i }).click({ force: true });
    const moreSheet = page.getByRole('dialog', { name: 'More whiteboard tools' });
    await expect(moreSheet).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(moreSheet).toBeHidden();

    await page.getByRole('button', { name: /More/i }).click({ force: true });
    await expect(moreSheet).toBeVisible();
    await dragSheetToDismiss(page, moreSheet);
    await expect(moreSheet).toBeHidden();

    const studentPage = await context.newPage();
    await seedLiveClassSession(studentPage, { authSession: studentSession, includeJoinState: true });
    await gotoLiveClass(studentPage);

    await studentPage.getByRole('button', { name: 'Open my notes' }).click();
    const notesDialog = studentPage.getByRole('dialog', { name: 'My notes' });
    await expect(notesDialog).toBeVisible();
    await studentPage.keyboard.press('Escape');
    await expect(notesDialog).toBeHidden();

    await studentPage.getByRole('button', { name: 'Open my notes' }).click();
    await expect(notesDialog).toBeVisible();
    await dragSheetToDismiss(studentPage, notesDialog);
    await expect(notesDialog).toBeHidden();

    await studentPage.close();
  });
});