import test from 'node:test';
import assert from 'node:assert/strict';

import { bulkSyncMistakes, clearMyMistakes, listMyMistakes, removeMistake, saveMistake } from './mistakes';
import { createMockConvexCtx } from './testUtils';

const listMyMistakesHandler = (listMyMistakes as any)._handler as (ctx: any, args: any) => Promise<any>;
const saveMistakeHandler = (saveMistake as any)._handler as (ctx: any, args: any) => Promise<any>;
const bulkSyncMistakesHandler = (bulkSyncMistakes as any)._handler as (ctx: any, args: any) => Promise<any>;
const removeMistakeHandler = (removeMistake as any)._handler as (ctx: any, args: any) => Promise<any>;
const clearMyMistakesHandler = (clearMyMistakes as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildApprovedCtx() {
  return createMockConvexCtx({
    identity: { subject: 'student_mistakes', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_mistakes',
        userId: 'student_mistakes',
        username: 'Mistake Student',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
    },
  });
}

test('saveMistake upserts attempts for the same question key and lists normalized rows', async () => {
  const { ctx, tables } = buildApprovedCtx();

  await saveMistakeHandler(ctx, {
    questionKey: 'chemistry:1:1:mcq:q1',
    question: 'What is an atom?',
    yourAnswer: 'A molecule',
    correctAnswer: 'The smallest part of an element.',
    topic: 'Atomic structure',
    subject: 'chemistry',
  });
  await saveMistakeHandler(ctx, {
    questionKey: 'chemistry:1:1:mcq:q1',
    question: 'What is an atom?',
    yourAnswer: 'Still wrong',
    correctAnswer: 'The smallest part of an element.',
    topic: 'Atomic structure',
    subject: 'chemistry',
  });

  assert.equal(tables.mistakes.length, 1);
  assert.equal(tables.mistakes[0]?.attempts, 2);

  const rows = await listMyMistakesHandler(ctx, {});
  assert.equal(rows.length, 1);
  assert.equal(rows[0]?.questionKey, 'chemistry:1:1:mcq:q1');
  assert.equal(rows[0]?.lastAttempt, tables.mistakes[0]?.lastAttemptAt);
});

test('bulkSyncMistakes migrates legacy local rows and clearMyMistakes deletes them', async () => {
  const { ctx, tables } = buildApprovedCtx();

  await bulkSyncMistakesHandler(ctx, {
    mistakesJson: JSON.stringify([
      {
        question: 'Define isotope.',
        yourAnswer: 'Same electrons',
        correctAnswer: 'Same proton number, different neutron number.',
        topic: 'Atomic structure',
        subject: 'chemistry',
        attempts: 1,
        firstAttemptAt: '2026-04-03T10:00:00.000Z',
        lastAttemptAt: '2026-04-03T10:00:00.000Z',
      },
    ]),
  });

  assert.equal(tables.mistakes.length, 1);

  const result = await clearMyMistakesHandler(ctx, {});
  assert.deepEqual(result, { deleted: 1 });
  assert.equal(tables.mistakes.length, 0);
});

test('removeMistake rejects deleting another users row', async () => {
  const { ctx } = buildApprovedCtx();

  await assert.rejects(
    () => removeMistakeHandler(ctx, { mistakeId: 'mistakes:foreign' }),
    /Mistake not found/
  );
});