import { test, expect } from '@playwright/test';
import { seedDevAuthSession, seedGuestFlashcards } from './support/browserSeeds.js';
import { SEEDED_FLASHCARDS, createDebugSession } from '../support/testSeeds.js';

const debugSession = createDebugSession({
  role: 'student',
  userId: 'debug_student_revision_mobile',
  username: 'Revision QA',
});

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
    await seedDevAuthSession(page, debugSession);
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
    expect(actionBox?.height ?? 0).toBeGreaterThanOrEqual(43.5);
  });

  test('flashcards keeps the card viewer and mobile controls reachable', async ({ page }) => {
    await seedGuestFlashcards(page, SEEDED_FLASHCARDS);
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