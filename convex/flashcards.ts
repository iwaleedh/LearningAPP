import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireApprovedAuthenticatedUserId, requireApprovedMatchingUserId } from "./authHelpers";

const FLASHCARD_PROGRESS_STATES = new Set(["known", "learning"]);
const MAX_FLASHCARD_PROGRESS_UPSERT = 500;

function normalizeFlashcardProgressStatus(status: string) {
  const normalized = String(status || "").trim().toLowerCase();
  if (!FLASHCARD_PROGRESS_STATES.has(normalized)) {
    throw new Error("Flashcard progress status must be 'known' or 'learning'.");
  }
  return normalized as "known" | "learning";
}

async function requireOwnedFlashcard(ctx: any, ownerUserId: string, cardId: string) {
  const card = await ctx.db
    .query("flashcards")
    .withIndex("by_cardId", (q: any) => q.eq("cardId", cardId))
    .filter((q: any) => q.eq(q.field("ownerUserId"), ownerUserId))
    .first();

  if (!card) {
    throw new Error("Flashcard not found for the current user.");
  }

  return card;
}

async function upsertFlashcardProgress(ctx: any, ownerUserId: string, cardId: string, status: "known" | "learning") {
  await requireOwnedFlashcard(ctx, ownerUserId, cardId);

  const now = Date.now();

  // D11: Collect ALL rows for (ownerUserId, cardId). In normal operation there
  // should be at most one. If duplicates exist (e.g. from a multi-tab race),
  // keep the most recently updated row and delete the rest (self-healing).
  const allRows = await ctx.db
    .query("flashcardProgress")
    .withIndex("by_owner_card", (q: any) => q.eq("ownerUserId", ownerUserId).eq("cardId", cardId))
    .collect();

  if (allRows.length > 1) {
    // Sort descending by updatedAt so index 0 is the most recent.
    allRows.sort((a: any, b: any) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
    for (const stale of allRows.slice(1)) {
      await ctx.db.delete(stale._id);
    }
    console.warn(`[flashcardProgress] Repaired ${allRows.length - 1} duplicate row(s) for cardId=${cardId} owner=${ownerUserId}`);
  }

  const existing = allRows[0] ?? null;

  if (existing) {
    await ctx.db.patch(existing._id, {
      status,
      lastReviewedAt: now,
      updatedAt: now,
      reviewCount: Math.max(0, Number(existing.reviewCount || 0)) + 1,
    });
    return existing._id;
  }

  return await ctx.db.insert("flashcardProgress", {
    ownerUserId,
    cardId,
    status,
    firstReviewedAt: now,
    lastReviewedAt: now,
    updatedAt: now,
    reviewCount: 1,
  });
}

export const saveFlashcard = mutation({
  args: {
    cardId: v.string(),
    ownerUserId: v.optional(v.string()),
    subject: v.string(),
    sourceNoteId: v.string(),
    sourceLabel: v.string(),
    front: v.string(),
    back: v.string(),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireApprovedMatchingUserId(ctx, args.ownerUserId);
    const existing = await ctx.db
      .query("flashcards")
      .withIndex("by_cardId", (q) => q.eq("cardId", args.cardId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        subject: args.subject,
        sourceNoteId: args.sourceNoteId,
        sourceLabel: args.sourceLabel,
        front: args.front,
        back: args.back,
      });
      return existing._id;
    }
    return await ctx.db.insert("flashcards", {
      cardId: args.cardId,
      ownerUserId,
      subject: args.subject,
      sourceNoteId: args.sourceNoteId,
      sourceLabel: args.sourceLabel,
      front: args.front,
      back: args.back,
      createdAt: Date.now(),
    });
  },
});

export const deleteFlashcard = mutation({
  args: { cardId: v.string() },
  handler: async (ctx, { cardId }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const card = await ctx.db
      .query("flashcards")
      .withIndex("by_cardId", (q) => q.eq("cardId", cardId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    if (card) await ctx.db.delete(card._id);
  },
});

export const listFlashcards = query({
  args: { ownerUserId: v.optional(v.string()), subject: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const currentUserId = await requireApprovedMatchingUserId(ctx, args.ownerUserId);
    const cards = args.subject
      ? await ctx.db
          .query("flashcards")
          .withIndex("by_subject", (idx) => idx.eq("subject", args.subject!.toLowerCase()))
          .collect()
      : await ctx.db.query("flashcards").collect();
    return cards.filter((c) => c.ownerUserId === currentUserId);
  },
});

export const listFlashcardProgress = query({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    return await ctx.db
      .query("flashcardProgress")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();
  },
});

export const setFlashcardProgress = mutation({
  args: {
    cardId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, { cardId, status }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    return await upsertFlashcardProgress(ctx, ownerUserId, cardId, normalizeFlashcardProgressStatus(status));
  },
});

export const bulkUpsertFlashcardProgress = mutation({
  args: {
    statusesJson: v.string(),
  },
  handler: async (ctx, { statusesJson }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(statusesJson);
    } catch {
      throw new Error("Flashcard progress payload must be valid JSON.");
    }

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Flashcard progress payload must be an object map.");
    }

    const entries = Object.entries(parsed);
    if (entries.length > MAX_FLASHCARD_PROGRESS_UPSERT) {
      throw new Error(`Flashcard progress payload exceeds ${MAX_FLASHCARD_PROGRESS_UPSERT} items.`);
    }

    const updatedIds = [];
    for (const [cardId, rawStatus] of entries) {
      updatedIds.push(
        await upsertFlashcardProgress(ctx, ownerUserId, cardId, normalizeFlashcardProgressStatus(String(rawStatus))),
      );
    }

    return updatedIds;
  },
});

export const resetFlashcardProgress = mutation({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("flashcardProgress")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    for (const row of rows) {
      await ctx.db.delete(row._id);
    }

    return { deleted: rows.length };
  },
});
