import test from 'node:test';
import assert from 'node:assert/strict';

import { getMyActivityMetrics } from './activityMetrics';
import { createMockConvexCtx } from './testUtils';

const getMyActivityMetricsHandler = (getMyActivityMetrics as any)._handler as (ctx: any, args: any) => Promise<any>;

test('getMyActivityMetrics counts exercise attempts and past paper action views separately from completed sessions', async () => {
  const { ctx } = createMockConvexCtx({
    identity: { subject: 'student_metrics', role: 'student' },
    tables: {
      users: [{
        _id: 'users:student_metrics',
        userId: 'student_metrics',
        username: 'Metrics Student',
        role: 'student',
        accountStatus: 'approved',
        createdAt: 1,
      }],
      studyAttempts: [
        {
          _id: 'studyAttempts:1',
          ownerUserId: 'student_metrics',
          sourceType: 'exercise',
          activityType: 'mcq',
          subject: 'chemistry',
          questionKey: 'chemistry:1',
          prompt: 'Exercise',
          createdAt: 10,
        },
        {
          _id: 'studyAttempts:2',
          ownerUserId: 'student_metrics',
          sourceType: 'pastpaper',
          activityType: 'view_question',
          subject: 'chemistry',
          questionKey: 'paper:view',
          prompt: 'View paper',
          createdAt: 20,
        },
        {
          _id: 'studyAttempts:3',
          ownerUserId: 'student_metrics',
          sourceType: 'pastpaper',
          activityType: 'completed_session',
          subject: 'chemistry',
          questionKey: 'paper:done',
          prompt: 'Completed paper',
          createdAt: 30,
        },
      ],
    },
  });

  const summary = await getMyActivityMetricsHandler(ctx, {});
  assert.deepEqual(summary, {
    exercisesDone: 1,
    papersViewed: 1,
    updatedAt: 30,
  });
});