import { query } from "./_generated/server";
import { requireApprovedAuthenticatedUserId } from "./authHelpers";

const EMPTY_BADGE_METRICS = {
  exercisesCompleted: 0,
  papersCompleted: 0,
  perfectScores: 0,
  fastCompletions: 0,
  // D5: Real login-day count from userSessions (distinct calendar days).
  loginCount: 0,
  updatedAt: 0,
};

export const getMyBadgeMetrics = query({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);

    const [projection, sessionRows] = await Promise.all([
      ctx.db
        .query("badgeMetricProjections")
        .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
        .first(),
      // D5: Count distinct study days — each row represents one unique dateKey.
      ctx.db
        .query("userSessions")
        .withIndex("by_user", (q) => q.eq("userId", ownerUserId))
        .collect(),
    ]);

    const loginCount = sessionRows.length;

    if (!projection) {
      return { ...EMPTY_BADGE_METRICS, loginCount };
    }

    return {
      exercisesCompleted: projection.exercisesCompleted,
      papersCompleted: projection.papersCompleted,
      perfectScores: projection.perfectScores,
      fastCompletions: projection.fastCompletions,
      loginCount,
      updatedAt: projection.updatedAt,
    };
  },
});