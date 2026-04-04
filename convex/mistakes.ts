import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireApprovedAuthenticatedUserId } from "./authHelpers";

const MAX_MISTAKES = 200;

function requireNonEmptyString(value: string, fieldName: string) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    throw new Error(`${fieldName} is required.`);
  }
  return normalized;
}

function optionalString(value?: string, fallback = "") {
  const normalized = String(value || "").trim();
  return normalized || fallback;
}

function validateIsoTimestamp(value?: string, fieldName = "timestamp") {
  const normalized = String(value || "").trim();
  if (!normalized || Number.isNaN(new Date(normalized).getTime())) {
    throw new Error(`${fieldName} must be a valid ISO timestamp.`);
  }
  return normalized;
}

function normalizeMistakeInput(args: {
  questionKey?: string;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  topic?: string;
  subject?: string;
  attempts?: number;
  firstAttemptAt?: string;
  lastAttemptAt?: string;
}) {
  const question = requireNonEmptyString(args.question, "question");
  const questionKey = optionalString(args.questionKey);
  const subject = optionalString(args.subject).toLowerCase();
  const topic = optionalString(args.topic, "General");
  const firstAttemptAt = args.firstAttemptAt
    ? validateIsoTimestamp(args.firstAttemptAt, "firstAttemptAt")
    : new Date().toISOString();
  const lastAttemptAt = args.lastAttemptAt
    ? validateIsoTimestamp(args.lastAttemptAt, "lastAttemptAt")
    : firstAttemptAt;
  const attempts = Math.max(1, Math.round(Number(args.attempts || 1)));

  return {
    mistakeKey: (questionKey || `${subject}|${topic}|${question}`).toLowerCase(),
    questionKey: questionKey || undefined,
    question,
    yourAnswer: optionalString(args.yourAnswer),
    correctAnswer: optionalString(args.correctAnswer),
    topic,
    subject,
    attempts,
    firstAttemptAt,
    lastAttemptAt,
  };
}

async function trimOwnerMistakes(ctx: any, ownerUserId: string) {
  const rows = await ctx.db
    .query("mistakes")
    .withIndex("by_owner", (q: any) => q.eq("ownerUserId", ownerUserId))
    .collect();

  if (rows.length <= MAX_MISTAKES) {
    return;
  }

  const overflow = rows
    .slice()
    .sort((left: any, right: any) => String(left.lastAttemptAt).localeCompare(String(right.lastAttemptAt)))
    .slice(0, rows.length - MAX_MISTAKES);

  for (const row of overflow) {
    await ctx.db.delete(row._id);
  }
}

async function upsertMistake(ctx: any, ownerUserId: string, args: {
  questionKey?: string;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  topic?: string;
  subject?: string;
  attempts?: number;
  firstAttemptAt?: string;
  lastAttemptAt?: string;
}) {
  const normalized = normalizeMistakeInput(args);
  const now = Date.now();
  const existing = await ctx.db
    .query("mistakes")
    .withIndex("by_owner_key", (q: any) => q.eq("ownerUserId", ownerUserId).eq("mistakeKey", normalized.mistakeKey))
    .first();

  if (existing) {
    await ctx.db.patch(existing._id, {
      yourAnswer: normalized.yourAnswer,
      correctAnswer: normalized.correctAnswer,
      topic: normalized.topic,
      subject: normalized.subject,
      attempts: Math.max(1, Number(existing.attempts || 1)) + normalized.attempts,
      lastAttemptAt: normalized.lastAttemptAt,
      updatedAt: now,
    });
    return existing._id;
  }

  const mistakeId = await ctx.db.insert("mistakes", {
    ownerUserId,
    mistakeKey: normalized.mistakeKey,
    questionKey: normalized.questionKey,
    question: normalized.question,
    yourAnswer: normalized.yourAnswer,
    correctAnswer: normalized.correctAnswer,
    topic: normalized.topic,
    subject: normalized.subject,
    attempts: normalized.attempts,
    firstAttemptAt: normalized.firstAttemptAt,
    lastAttemptAt: normalized.lastAttemptAt,
    updatedAt: now,
  });

  await trimOwnerMistakes(ctx, ownerUserId);
  return mistakeId;
}

export const listMyMistakes = query({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("mistakes")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    return rows
      .slice()
      .sort((left: any, right: any) => String(right.lastAttemptAt).localeCompare(String(left.lastAttemptAt)))
      .map((row: any) => ({
        id: String(row._id),
        questionKey: row.questionKey,
        question: row.question,
        yourAnswer: row.yourAnswer,
        correctAnswer: row.correctAnswer,
        topic: row.topic,
        subject: row.subject,
        attempts: row.attempts,
        firstAttemptAt: row.firstAttemptAt,
        lastAttempt: row.lastAttemptAt,
      }));
  },
});

export const saveMistake = mutation({
  args: {
    questionKey: v.optional(v.string()),
    question: v.string(),
    yourAnswer: v.string(),
    correctAnswer: v.string(),
    topic: v.optional(v.string()),
    subject: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    return await upsertMistake(ctx, ownerUserId, args);
  },
});

export const bulkSyncMistakes = mutation({
  args: {
    mistakesJson: v.string(),
  },
  handler: async (ctx, { mistakesJson }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);

    let parsed: unknown;
    try {
      parsed = JSON.parse(mistakesJson);
    } catch {
      throw new Error("mistakesJson must be valid JSON.");
    }

    if (!Array.isArray(parsed)) {
      throw new Error("mistakesJson must be an array.");
    }
    if (parsed.length > MAX_MISTAKES) {
      throw new Error(`mistakesJson exceeds ${MAX_MISTAKES} items.`);
    }

    const syncedIds = [];
    for (const entry of parsed) {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("Each mistake entry must be an object.");
      }
      syncedIds.push(await upsertMistake(ctx, ownerUserId, entry as any));
    }

    return syncedIds;
  },
});

export const removeMistake = mutation({
  args: {
    mistakeId: v.id("mistakes"),
  },
  handler: async (ctx, { mistakeId }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const row = await ctx.db.get(mistakeId);
    if (!row || row.ownerUserId !== ownerUserId) {
      throw new Error("Mistake not found for the current user.");
    }

    await ctx.db.delete(mistakeId);
    return { removed: true };
  },
});

export const clearMyMistakes = mutation({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("mistakes")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    for (const row of rows) {
      await ctx.db.delete(row._id);
    }

    return { deleted: rows.length };
  },
});