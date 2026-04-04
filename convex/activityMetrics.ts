import { query } from "./_generated/server";
import { requireApprovedAuthenticatedUserId } from "./authHelpers";

export const getMyActivityMetrics = query({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const attempts = await ctx.db
      .query("studyAttempts")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    return {
      exercisesDone: attempts.filter((attempt) => attempt.sourceType === "exercise").length,
      papersViewed: attempts.filter(
        (attempt) => attempt.sourceType === "pastpaper" && attempt.activityType !== "completed_session",
      ).length,
      updatedAt: attempts.reduce((latest, attempt) => Math.max(latest, Number(attempt.createdAt || 0)), 0),
    };
  },
});