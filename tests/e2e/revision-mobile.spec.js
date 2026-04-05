import { test, expect } from '@playwright/test';

const debugSession = {
  role: 'student',
  userId: 'debug_student_revision_mobile',
  username: 'Revision QA',
};

const flashcards = [
  {
    cardId: 'card:test:1',
    subject: 'chemistry',
    sourceNoteId: 'note:chemistry:1:1:0',
    sourceLabel: 'Formulae & Amount',
    front: 'What is Avogadro constant?',
    back: '6.02 × 10^23 mol^-1',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    cardId: 'card:test:2',
    subject: 'chemistry',
    sourceNoteId: 'note:chemistry:1:1:1',
    sourceLabel: 'The Mole',
    front: 'Define molar mass.',
    back: 'Mass per mole of a substance.',
    createdAt: '2026-01-02T00:00:00.000Z',
  },
];

async function seedDebugSession(page) {
  await page.addInitScript((session) => {
    window.sessionStorage.setItem('lt_dev_auth_session', JSON.stringify(session));
  }, debugSession);
}

async function seedGuestFlashcards(page) {
  await page.goto('/');
  await page.evaluate(async (cards) => {
    const DB_NAME = 'lt-guest-study-data';
    const DB_VERSION = 1;
    const openDb = await new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('guestNotes')) db.createObjectStore('guestNotes', { keyPath: 'noteId' });
        if (!db.objectStoreNames.contains('guestFlashcards')) db.createObjectStore('guestFlashcards', { keyPath: 'cardId' });
        if (!db.objectStoreNames.contains('guestNoteAssets')) db.createObjectStore('guestNoteAssets', { keyPath: 'assetId' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    await new Promise((resolve, reject) => {
      const tx = openDb.transaction('guestFlashcards', 'readwrite');
      const store = tx.objectStore('guestFlashcards');
      store.clear();
      for (const card of cards) {
        store.put(card);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    localStorage.removeItem('lt_flashcard_status');
    localStorage.removeItem('lt_flashcard_known');
    localStorage.removeItem('lt_flashcard_learning');
  }, flashcards);
}

test.describe('past papers and flashcards mobile QA', () => {
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

  test('past papers exposes mobile subject/filter controls and reachable paper actions', async ({ page }) => {
    await page.goto('/past-papers');

    const subjectSelect = page.locator('#pastpaper-subject-select');
    await expect(subjectSelect).toBeVisible();
    await expect(page.locator('.pastpaper-subject-buttons')).toBeHidden();

    await expect(page.locator('.pastpaper-filter-select').first()).toBeVisible();
    await expect(page.locator('.pastpaper-filter-select-wide')).toBeVisible();

    const firstSession = page.locator('.past-paper-session-header').first();
    await firstSession.click();

    const firstPaper = page.locator('.past-paper-item-header').first();
    await firstPaper.click();

    const firstAction = page.locator('.past-paper-item-actions .pastpaper-action-btn').first();
    await expect(firstAction).toBeVisible();

    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(pageOverflow).toBeLessThanOrEqual(1);

    const actionBox = await firstAction.boundingBox();
    expect(actionBox?.height ?? 0).toBeGreaterThanOrEqual(44);
  });

  test('flashcards keeps the card viewer and mobile controls reachable', async ({ page }) => {
    await seedGuestFlashcards(page);
    await page.goto('/flashcards');

    const card = page.locator('.flashcard-wrapper');
    await expect(card).toBeVisible();
    await expect(page.locator('.flashcard-source-link')).toBeVisible();

    const controls = page.locator('.flashcard-controls .btn');
    await expect(controls).toHaveCount(4);

    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(pageOverflow).toBeLessThanOrEqual(1);

    const knownButton = page.getByRole('button', { name: /mark as known/i });
    const knownBox = await knownButton.boundingBox();
    expect(knownBox?.height ?? 0).toBeGreaterThanOrEqual(44);

    await card.click();
    await expect(page.locator('.flashcard.flipped')).toBeVisible();

    await knownButton.click();
    await expect(page.locator('.flashcard-counter')).toContainText('2 / 2');
  });
});