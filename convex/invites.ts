import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  getUserRecordById,
  getCurrentUsername,
  getHostedSessionByStringId,
  requireAuthenticatedUserId,
  requireHostedSessionHostOrTeacher,
  requireMatchingUserId,
} from "./authHelpers";

async function enrichInvites(
  ctx: Parameters<typeof getHostedSessionByStringId>[0],
  invites: Array<{
    _id: unknown;
    sessionId: string;
    fromUserId: string;
    toUserId?: string;
    toUsername: string;
    status: string;
    createdAt: number;
  }>
) {
  const uniqueUserIds = [...new Set(invites.map((invite) => invite.fromUserId).filter(Boolean))];
  const users = await Promise.all(uniqueUserIds.map((userId) => getUserRecordById(ctx, userId)));
  const userMap = new Map(users.filter(Boolean).map((user) => [user!.userId, user!]));

  return invites.map((invite) => {
    const fromUser = userMap.get(invite.fromUserId);
    return {
      ...invite,
      fromUsername: fromUser?.username,
      fromAvatarUrl: fromUser?.avatarUrl,
    };
  });
}

export const inviteToSession = mutation({
  args: {
    sessionId: v.string(),
    fromUserId: v.optional(v.string()),
    toUserId: v.optional(v.string()),
    toUsername: v.string(),
  },
  handler: async (ctx, args) => {
    const fromUserId = await requireMatchingUserId(ctx, args.fromUserId);
    await requireHostedSessionHostOrTeacher(ctx, args.sessionId);
    let resolvedToUserId = args.toUserId;
    if (!resolvedToUserId) {
      const targetUser = await ctx.db
        .query("users")
        .collect()
        .then((users) => users.find((user) => user.username === args.toUsername) || null);
      resolvedToUserId = targetUser?.userId;
    }
    return await ctx.db.insert("sessionInvites", {
      sessionId: args.sessionId,
      fromUserId,
      toUserId: resolvedToUserId,
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
    userId: v.optional(v.string()),
  },
  handler: async (ctx, { inviteId, accept, userId }) => {
    const currentUserId = await requireMatchingUserId(ctx, userId);
    const invite = await ctx.db.get(inviteId);
    if (!invite || invite.status !== "pending") return;
    const currentUsername = await getCurrentUsername(ctx);
    const matchesTargetUser =
      (invite.toUserId && invite.toUserId === currentUserId) ||
      (!invite.toUserId && invite.toUsername === currentUsername);
    if (!matchesTargetUser) {
      throw new Error("This invite is not addressed to you.");
    }

    await ctx.db.patch(inviteId, {
      status: accept ? "accepted" : "declined",
    });
    if (accept) {
      const session = await getHostedSessionByStringId(ctx, invite.sessionId);
      if (!session) {
        throw new Error("Session not found.");
      }
      const role = "backgroundType" in session ? "viewer" : "editor";
      // Auto-join the session
      const existing = await ctx.db
        .query("sessionParticipants")
        .withIndex("by_session", (q) => q.eq("sessionId", invite.sessionId))
        .filter((q) => q.eq(q.field("userId"), currentUserId))
        .first();
      if (!existing) {
        await ctx.db.insert("sessionParticipants", {
          sessionId: invite.sessionId,
          userId: currentUserId,
          role,
          joinedAt: Date.now(),
        });
      }
    }
  },
});

export const getMyPendingInvites = query({
  args: { toUsername: v.optional(v.string()) },
  handler: async (ctx, { toUsername }) => {
    const currentUserId = await requireAuthenticatedUserId(ctx);
    const currentUsername = await getCurrentUsername(ctx);
    if (toUsername && toUsername !== currentUsername) {
      throw new Error("You can only view your own invites.");
    }
    const invitesByUserId = await ctx.db
      .query("sessionInvites")
      .withIndex("by_toUserId", (q) => q.eq("toUserId", currentUserId))
      .filter((q) => q.eq(q.field("status"), "pending"))
      .collect();
    const invitesByUsername = await ctx.db
      .query("sessionInvites")
      .withIndex("by_toUsername", (q) => q.eq("toUsername", currentUsername))
      .filter((q) => q.eq(q.field("status"), "pending"))
      .collect();
    const inviteMap = new Map();
    for (const invite of [...invitesByUserId, ...invitesByUsername]) {
      inviteMap.set(String(invite._id), invite);
    }
    const invites = [...inviteMap.values()];
    return await enrichInvites(ctx, invites);
  },
});

export const getInvitesBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    await requireHostedSessionHostOrTeacher(ctx, sessionId);
    const invites = await ctx.db
      .query("sessionInvites")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .collect();
    return await enrichInvites(ctx, invites);
  },
});
