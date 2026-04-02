import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAuthenticatedUserId } from "./authHelpers";

export const recordAttempt = mutation({
  args: {
    sourceType: v.string(),
    activityType: v.string(),
    subject: v.string(),
    unitId: v.optional(v.number()),
    topicId: v.optional(v.number()),
    questionKey: v.string(),
    prompt: v.string(),
    topic: v.optional(v.string()),
    paperId: v.optional(v.string()),
    paperTitle: v.optional(v.string()),
    correct: v.optional(v.boolean()),
    scorePercent: v.optional(v.number()),
    confidence: v.optional(v.string()),
    durationSeconds: v.optional(v.number()),
    metadataJson: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireAuthenticatedUserId(ctx);
    const now = Date.now();

    return await ctx.db.insert("studyAttempts", {
      ownerUserId,
      sourceType: args.sourceType,
      activityType: args.activityType,
      subject: args.subject,
      unitId: args.unitId,
      topicId: args.topicId,
      questionKey: args.questionKey,
      prompt: args.prompt,
      topic: args.topic,
      paperId: args.paperId,
      paperTitle: args.paperTitle,
      correct: args.correct,
      scorePercent: args.scorePercent,
      confidence: args.confidence,
      durationSeconds: args.durationSeconds,
      metadataJson: args.metadataJson,
      createdAt: now,
    });
  },
});

export const listMyPastPaperSessions = query({
  args: {
    subject: v.optional(v.string()),
  },
  handler: async (ctx, { subject }) => {
    const ownerUserId = await requireAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("studyAttempts")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    return rows
      .filter((row) => row.sourceType === "pastpaper")
      .filter((row) => row.activityType === "completed_session")
      .filter((row) => !subject || row.subject === subject)
      .sort((a, b) => a.createdAt - b.createdAt)
      .map((row, index) => ({
        id: String(row._id),
        label: row.paperTitle || `Attempt ${index + 1}`,
        percentage: row.scorePercent || 0,
        durationSeconds: row.durationSeconds || 0,
        confidence: row.confidence || "",
        paperId: row.paperId || "",
        unit: row.topic || "",
        topicScores: row.topic ? { [row.topic]: row.scorePercent || 0 } : undefined,
        createdAt: row.createdAt,
      }));
  },
});
