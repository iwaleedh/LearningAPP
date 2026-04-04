import test from 'node:test';
import assert from 'node:assert/strict';

import { recordAttempt } from './studyAttempts';
import { createMockConvexCtx } from './testUtils';

const recordAttemptHandler = (recordAttempt as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildApprovedStudentCtx() {
  return createMockConvexCtx({
    identity: { subject: 'student_approved', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_approved',
        userId: 'student_approved',
        username: 'Student Approved',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
    },
  });
}

test('recordAttempt stores structured drag-drop telemetry and projects exercise badge metrics', async () => {
  const { ctx, tables } = buildApprovedStudentCtx();

  await recordAttemptHandler(ctx, {
    sourceType: 'exercise',
    activityType: 'drag-drop',
    subject: 'chemistry',
    questionKey: 'chemistry:1:1:drag-drop:q1',
    prompt: 'Match the ions to their groups',
    scorePercent: 100,
    durationSeconds: 24,
    metadataJson: JSON.stringify({
      placements: [{
        itemId: 'drag:0:sodium',
        text: 'Na+',
        expectedCategory: 'Group 1',
        placedCategory: 'Group 1',
        correct: true,
      }],
      totalItems: 1,
      correctItems: 1,
    }),
  });

  assert.equal(tables.studyAttempts.length, 1);
  assert.deepEqual(JSON.parse(tables.studyAttempts[0]?.metadataJson), {
    placements: [{
      itemId: 'drag:0:sodium',
      text: 'Na+',
      expectedCategory: 'Group 1',
      placedCategory: 'Group 1',
      correct: true,
    }],
    totalItems: 1,
    correctItems: 1,
  });

  assert.equal(tables.badgeMetricEvents.length, 1);
  assert.deepEqual(JSON.parse(tables.badgeMetricEvents[0]?.deltaJson), {
    exercisesCompleted: 1,
    papersCompleted: 0,
    perfectScores: 0,
    fastCompletions: 0,
  });

  assert.equal(tables.badgeMetricProjections[0]?.exercisesCompleted, 1);
  assert.equal(tables.badgeMetricProjections[0]?.papersCompleted, 0);
});

test('recordAttempt rejects malformed drag-drop telemetry without durable item identifiers', async () => {
  const { ctx } = buildApprovedStudentCtx();

  await assert.rejects(
    () => recordAttemptHandler(ctx, {
      sourceType: 'exercise',
      activityType: 'drag-drop',
      subject: 'chemistry',
      questionKey: 'chemistry:1:1:drag-drop:q2',
      prompt: 'Sort the particles',
      metadataJson: JSON.stringify({
        placements: [{
          text: 'Electron',
          expectedCategory: 'Subatomic',
          placedCategory: 'Subatomic',
          correct: true,
        }],
      }),
    }),
    /itemId/
  );
});

test('recordAttempt projects perfect and fast-completion past-paper badge metrics', async () => {
  const { ctx, tables } = buildApprovedStudentCtx();

  await recordAttemptHandler(ctx, {
    sourceType: 'pastpaper',
    activityType: 'completed_session',
    subject: 'biology',
    questionKey: 'biology:paper:completed:1',
    prompt: 'Unit 1 Paper',
    scorePercent: 100,
    durationSeconds: 1800,
    metadataJson: JSON.stringify({
      month: 'January',
      year: '2026',
      totalMarks: 80,
      duration: '1 hour 30 minutes',
      type: 'Question Paper',
    }),
  });

  assert.equal(tables.badgeMetricProjections[0]?.papersCompleted, 1);
  assert.equal(tables.badgeMetricProjections[0]?.perfectScores, 1);
  assert.equal(tables.badgeMetricProjections[0]?.fastCompletions, 1);
});