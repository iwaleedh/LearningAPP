import test from 'node:test';
import assert from 'node:assert/strict';

import {
  bulkSyncReadProgress,
  getMyReadProgressSummary,
  markNoteRead,
  markNoteUnread,
  resetMyReadProgress,
} from './readProgress';
import { createMockConvexCtx } from './testUtils';

const getMyReadProgressSummaryHandler = (getMyReadProgressSummary as any)._handler as (ctx: any, args: any) => Promise<any>;
const markNoteReadHandler = (markNoteRead as any)._handler as (ctx: any, args: any) => Promise<any>;
const markNoteUnreadHandler = (markNoteUnread as any)._handler as (ctx: any, args: any) => Promise<any>;
const bulkSyncReadProgressHandler = (bulkSyncReadProgress as any)._handler as (ctx: any, args: any) => Promise<any>;
const resetMyReadProgressHandler = (resetMyReadProgress as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildApprovedCtx() {
  return createMockConvexCtx({
    identity: { subject: 'student_reader', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_reader',
        userId: 'student_reader',
        username: 'Reader',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
      studyAttempts: [{
        _id: 'studyAttempts:1',
        ownerUserId: 'student_reader',
        sourceType: 'exercise',
        activityType: 'mcq',
        subject: 'chemistry',
        questionKey: 'chemistry:mcq:1',
        prompt: 'Question',
        scorePercent: 100,
        activityDateKey: '2026-04-01',
        createdAt: Date.parse('2026-04-01T10:00:00.000Z'),
      }],
    },
  });
}

test('markNoteRead and summary expose read ids plus merged activity dates', async () => {
  const { ctx, tables } = buildApprovedCtx();

  await markNoteReadHandler(ctx, {
    noteId: 'note:chemistry:1:1:0',
    readAt: '2026-04-02T12:00:00.000Z',
    localDateKey: '2026-04-02',
  });

  assert.equal(tables.noteReadProgress.length, 1);
  assert.equal(tables.noteReadProgress[0]?.localDateKey, '2026-04-02');

  const summary = await getMyReadProgressSummaryHandler(ctx, {});
  assert.deepEqual(summary.readNoteIds, ['note:chemistry:1:1:0']);
  assert.equal(summary.readAtByNoteId['note:chemistry:1:1:0'], '2026-04-02T12:00:00.000Z');
  assert.equal(summary.totalRead, 1);
  assert.equal(summary.activityByDate['2026-04-01'], 1);
  assert.equal(summary.activityByDate['2026-04-02'], 1);
});

test('bulkSyncReadProgress migrates local read states and markNoteUnread/reset clear them', async () => {
  const { ctx, tables } = buildApprovedCtx();

  await bulkSyncReadProgressHandler(ctx, {
    readStatesJson: JSON.stringify([
      {
        noteId: 'note:physics:1:1:0',
        readAt: '2026-04-03T08:00:00.000Z',
        localDateKey: '2026-04-03',
      },
      {
        noteId: 'note:chemistry:1:1:1',
        readAt: '2026-04-03T09:00:00.000Z',
        localDateKey: '2026-04-03',
      },
    ]),
  });

  assert.equal(tables.noteReadProgress.length, 2);

  await markNoteUnreadHandler(ctx, { noteId: 'note:physics:1:1:0' });
  assert.equal(tables.noteReadProgress.length, 1);

  const result = await resetMyReadProgressHandler(ctx, {});
  assert.deepEqual(result, { deleted: 1 });
  assert.equal(tables.noteReadProgress.length, 0);
});

test('read progress rejects invalid local date keys', async () => {
  const { ctx } = buildApprovedCtx();

  await assert.rejects(
    () => markNoteReadHandler(ctx, {
      noteId: 'note:chemistry:1:1:0',
      readAt: '2026-04-02T12:00:00.000Z',
      localDateKey: '04/02/2026',
    }),
    /YYYY-MM-DD/
  );
});