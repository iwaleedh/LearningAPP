import test from 'node:test';
import assert from 'node:assert/strict';

import {
  bulkUpsertFlashcardProgress,
  resetFlashcardProgress,
  setFlashcardProgress,
} from './flashcards';
import { createMockConvexCtx } from './testUtils';

const setFlashcardProgressHandler = (setFlashcardProgress as any)._handler as (ctx: any, args: any) => Promise<any>;
const bulkUpsertFlashcardProgressHandler = (bulkUpsertFlashcardProgress as any)._handler as (ctx: any, args: any) => Promise<any>;
const resetFlashcardProgressHandler = (resetFlashcardProgress as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildFlashcardCtx() {
  return createMockConvexCtx({
    identity: { subject: 'student_flashcards', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_flashcards',
        userId: 'student_flashcards',
        username: 'Flash Student',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
      flashcards: [{
        _id: 'flashcards:1',
        cardId: 'card:chem:1',
        ownerUserId: 'student_flashcards',
        subject: 'chemistry',
        sourceNoteId: 'note:chemistry:1:1:0',
        sourceLabel: 'Atoms',
        front: 'What is an atom?',
        back: 'The smallest part of an element.',
        createdAt: 1,
      }],
    },
  });
}

test('setFlashcardProgress upserts a single status and increments review count on repeat updates', async () => {
  const { ctx, tables } = buildFlashcardCtx();

  await setFlashcardProgressHandler(ctx, { cardId: 'card:chem:1', status: 'known' });
  await setFlashcardProgressHandler(ctx, { cardId: 'card:chem:1', status: 'learning' });

  assert.equal(tables.flashcardProgress.length, 1);
  assert.equal(tables.flashcardProgress[0]?.status, 'learning');
  assert.equal(tables.flashcardProgress[0]?.reviewCount, 2);
});

test('bulkUpsertFlashcardProgress migrates legacy status maps and resetFlashcardProgress clears them', async () => {
  const { ctx, tables } = buildFlashcardCtx();

  await bulkUpsertFlashcardProgressHandler(ctx, {
    statusesJson: JSON.stringify({ 'card:chem:1': 'known' }),
  });

  assert.equal(tables.flashcardProgress.length, 1);
  assert.equal(tables.flashcardProgress[0]?.status, 'known');

  const result = await resetFlashcardProgressHandler(ctx, {});
  assert.deepEqual(result, { deleted: 1 });
  assert.equal(tables.flashcardProgress.length, 0);
});

test('setFlashcardProgress rejects progress writes for cards not owned by the current user', async () => {
  const { ctx } = createMockConvexCtx({
    identity: { subject: 'student_flashcards', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_flashcards',
        userId: 'student_flashcards',
        username: 'Flash Student',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
      flashcards: [{
        _id: 'flashcards:foreign',
        cardId: 'card:foreign:1',
        ownerUserId: 'someone_else',
        subject: 'chemistry',
        sourceNoteId: 'note:chemistry:1:1:0',
        sourceLabel: 'Atoms',
        front: 'Foreign card',
        back: 'No access',
        createdAt: 1,
      }],
    },
  });

  await assert.rejects(
    () => setFlashcardProgressHandler(ctx, { cardId: 'card:foreign:1', status: 'known' }),
    /Flashcard not found/
  );
});