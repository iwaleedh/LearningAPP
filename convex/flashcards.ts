import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAuthenticatedUserId, requireMatchingUserId } from "./authHelpers";

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
    const ownerUserId = await requireMatchingUserId(ctx, args.ownerUserId);
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
    const ownerUserId = await requireAuthenticatedUserId(ctx);
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
    const currentUserId = await requireMatchingUserId(ctx, args.ownerUserId);
    const cards = args.subject
      ? await ctx.db
          .query("flashcards")
          .withIndex("by_subject", (idx) => idx.eq("subject", args.subject!.toLowerCase()))
          .collect()
      : await ctx.db.query("flashcards").collect();
    return cards.filter((c) => c.ownerUserId === currentUserId);
  },
});
