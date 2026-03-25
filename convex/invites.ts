import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const inviteToSession = mutation({
  args: {
    sessionId: v.string(),
    fromUserId: v.string(),
    toUsername: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("sessionInvites", {
      sessionId: args.sessionId,
      fromUserId: args.fromUserId,
      toUsername: args.toUsername,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const respondToInvite = mutation({
  args: {
    inviteId: v.id("sessionInvites"),
    accept: v.boolean(),
    userId: v.string(),
  },
  handler: async (ctx, { inviteId, accept, userId }) => {
    const invite = await ctx.db.get(inviteId);
    if (!invite || invite.status !== "pending") return;
    await ctx.db.patch(inviteId, {
      status: accept ? "accepted" : "declined",
    });
    if (accept) {
      // Auto-join the session
      const existing = await ctx.db
        .query("sessionParticipants")
        .withIndex("by_session", (q) => q.eq("sessionId", invite.sessionId))
        .filter((q) => q.eq(q.field("userId"), userId))
        .first();
      if (!existing) {
        await ctx.db.insert("sessionParticipants", {
          sessionId: invite.sessionId,
          userId,
          role: "editor",
          joinedAt: Date.now(),
        });
      }
    }
  },
});

export const getMyPendingInvites = query({
  args: { toUsername: v.string() },
  handler: async (ctx, { toUsername }) => {
    return await ctx.db
      .query("sessionInvites")
      .withIndex("by_toUsername", (q) => q.eq("toUsername", toUsername))
      .filter((q) => q.eq(q.field("status"), "pending"))
      .collect();
  },
});

export const getInvitesBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db
      .query("sessionInvites")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .collect();
  },
});
