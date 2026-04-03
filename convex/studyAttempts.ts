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

    // S2: Reject non-finite numbers (NaN, Infinity) then clamp to sane bounds.
    // scorePercent must be 0–100; durationSeconds must be non-negative.
    // Full server-side answer verification is not feasible for frontend-graded
    // exercises, but this prevents leaderboard inflation via manipulated payloads.
    if (args.scorePercent !== undefined && !Number.isFinite(args.scorePercent)) {
      throw new Error("scorePercent must be a finite number.");
    }
    if (args.durationSeconds !== undefined && !Number.isFinite(args.durationSeconds)) {
      throw new Error("durationSeconds must be a finite number.");
    }
    const scorePercent = args.scorePercent !== undefined
      ? Math.max(0, Math.min(100, args.scorePercent))
      : undefined;
    const durationSeconds = args.durationSeconds !== undefined
      ? Math.max(0, args.durationSeconds)
      : undefined;

    // Validate sourceType at runtime then cast to the schema union.
    const VALID_SOURCE = ['exercise', 'pastpaper'] as const;
    type SourceType = typeof VALID_SOURCE[number];
    if (!VALID_SOURCE.includes(args.sourceType as SourceType)) {
      throw new Error(`Invalid sourceType '${args.sourceType}'. Must be 'exercise' or 'pastpaper'.`);
    }

    // S2: Validate activityType against known enum to prevent junk data.
    const VALID_ACTIVITY = [
      'mcq', 'drag-drop', 'fill-blank', 'sequence', 'keyword', 'flashcards',
      'completed_session', 'view_question', 'view_marking',
      'download_question', 'download_marking',
    ] as const;
    if (!VALID_ACTIVITY.includes(args.activityType as typeof VALID_ACTIVITY[number])) {
      throw new Error(`Invalid activityType '${args.activityType}'.`);
    }

    return await ctx.db.insert("studyAttempts", {
      ownerUserId,
      sourceType: args.sourceType as SourceType,
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
      scorePercent,
      confidence: args.confidence,
      durationSeconds,
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
