/**
 * H-11: Convex mutations & queries for persistent Live Classroom polls.
 */
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireHostedSessionAccess, requireHostedSessionHostOrTeacher } from "./authHelpers";

const VALID_POLL_TYPES = new Set(["mcq", "truefalse", "freetext"]);

export const createPoll = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    question: v.string(),
    type: v.string(),
    options: v.array(v.string()),
    correctIndex: v.number(),
  },
  handler: async (ctx, args) => {
    const { currentUserId } = await requireHostedSessionHostOrTeacher(ctx, String(args.classId));

    if (!args.question.trim()) {
      throw new Error("Poll question cannot be empty.");
    }
    if (!VALID_POLL_TYPES.has(args.type)) {
      throw new Error("Poll type must be 'mcq', 'truefalse', or 'freetext'.");
    }

    // Close any existing active poll for this class
    const active = await ctx.db
      .query("liveClassPolls")
      .withIndex("by_class_status", (q) =>
        q.eq("classId", args.classId).eq("status", "active")
      )
      .collect();
    for (const poll of active) {
      await ctx.db.patch(poll._id, { status: "closed" });
    }

    const pollId = await ctx.db.insert("liveClassPolls", {
      classId: args.classId,
      creatorUserId: currentUserId,
      question: args.question.trim(),
      type: args.type as "mcq" | "truefalse" | "freetext",
      options: args.options,
      correctIndex: Number.isFinite(args.correctIndex) ? args.correctIndex : -1,
      status: "active",
      createdAt: Date.now(),
    });

    return pollId;
  },
});

export const closePoll = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    pollId: v.id("liveClassPolls"),
  },
  handler: async (ctx, args) => {
    await requireHostedSessionHostOrTeacher(ctx, String(args.classId));

    const poll = await ctx.db.get(args.pollId);
    if (!poll || String(poll.classId) !== String(args.classId)) {
      throw new Error("Poll not found.");
    }
    if (poll.status === "closed") return;

    await ctx.db.patch(args.pollId, { status: "closed" });
  },
});

export const submitResponse = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    pollId: v.id("liveClassPolls"),
    selectedIndex: v.optional(v.number()),
    text: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { currentUserId } = await requireHostedSessionAccess(ctx, String(args.classId));

    const poll = await ctx.db.get(args.pollId);
    if (!poll || poll.status !== "active") {
      throw new Error("Poll is not active.");
    }

    // Prevent duplicate responses
    const existing = await ctx.db
      .query("liveClassPollResponses")
      .withIndex("by_poll_respondent", (q) =>
        q.eq("pollId", args.pollId).eq("respondentUserId", currentUserId)
      )
      .first();
    if (existing) {
      throw new Error("Already responded to this poll.");
    }

    await ctx.db.insert("liveClassPollResponses", {
      pollId: args.pollId,
      classId: args.classId,
      respondentUserId: currentUserId,
      selectedIndex: args.selectedIndex,
      text: args.text,
      submittedAt: Date.now(),
    });
  },
});

export const getPollsByClass = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, args) => {
    await requireHostedSessionAccess(ctx, String(args.classId));

    const polls = await ctx.db
      .query("liveClassPolls")
      .withIndex("by_class", (q) => q.eq("classId", args.classId))
      .collect();

    // Attach responses to each poll
    const result = [];
    for (const poll of polls) {
      const responses = await ctx.db
        .query("liveClassPollResponses")
        .withIndex("by_poll", (q) => q.eq("pollId", poll._id))
        .collect();
      result.push({
        ...poll,
        id: String(poll._id),
        responses: responses.map((r) => ({
          id: String(r._id),
          pollId: String(r.pollId),
          identity: r.respondentUserId,
          selectedIndex: r.selectedIndex,
          text: r.text,
          submittedAt: r.submittedAt,
        })),
      });
    }

    return result;
  },
});
