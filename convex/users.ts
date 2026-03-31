import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import {
  getAuthenticatedIdentity,
  getCurrentUserRole,
  getUserRecordById,
  getRoleFromIdentity,
  isAdminEmail,
  isTeacherUserId,
  requireAuthenticatedUserId,
  requireMatchingUserId,
  requireTeacher,
} from "./authHelpers";

function normalizeUsernameInput(username: string | undefined | null) {
  return String(username ?? "").trim();
}

async function resolveCanonicalUsername(
  ctx: Parameters<typeof getUserRecordById>[0],
  requestedUsername: string,
  currentUserId: string,
) {
  const fallbackUsername = `user_${currentUserId.slice(-6)}`;
  const baseUsername = normalizeUsernameInput(requestedUsername) || fallbackUsername;
  const normalizedBase = baseUsername.toLowerCase();
  const users = await ctx.db.query("users").collect();
  const conflictingUser = users.find(
    (user) => user.userId !== currentUserId && user.username.trim().toLowerCase() === normalizedBase
  );

  if (!conflictingUser) {
    return baseUsername;
  }

  const suffix = currentUserId.slice(-6).toLowerCase();
  const maxBaseLength = Math.max(3, 40 - suffix.length - 1);
  const truncatedBase = baseUsername.slice(0, maxBaseLength).trim() || fallbackUsername;
  return `${truncatedBase}_${suffix}`;
}

function toPublicUserSummary(user: {
  userId: string;
  username: string;
  role: string;
  avatarUrl?: string;
}) {
  return {
    userId: user.userId,
    username: user.username,
    role: user.role,
    avatarUrl: user.avatarUrl,
  };
}

export const registerUser = mutation({
  args: {
    userId: v.optional(v.string()),
    username: v.string(),
    email: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
  },
  handler: async (ctx, { userId, username, email, avatarUrl }) => {
    const authenticatedUserId = await requireMatchingUserId(ctx, userId);
    const identity = await getAuthenticatedIdentity(ctx);
    const claimedRole = getRoleFromIdentity(identity);
    const canonicalUsername = await resolveCanonicalUsername(ctx, username, authenticatedUserId);
    const existing = await getUserRecordById(ctx, authenticatedUserId);
    if (existing) {
      await ctx.db.patch(existing._id, {
        username: canonicalUsername,
        email,
        avatarUrl,
        ...(claimedRole ? { role: claimedRole } : {}),
      });
      return existing._id;
    }

    const id = await ctx.db.insert("users", {
      userId: authenticatedUserId,
      username: canonicalUsername,
      role: claimedRole ?? "student",
      email,
      avatarUrl,
      accountStatus: isAdminEmail(email) ? "approved" : "pending",
      statusUpdatedAt: Date.now(),
      createdAt: Date.now(),
    });

    // Pub/Sub: publish user:registered event for fan-out
    await ctx.scheduler.runAfter(0, internal.eventBus.internalPublish, {
      topic: "user:registered",
      payload: JSON.stringify({ userId: authenticatedUserId, username }),
    });

    return id;
  },
});

export const updateUser = mutation({
  args: {
    userId: v.optional(v.string()),
    username: v.optional(v.string()),
    email: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
  },
  handler: async (ctx, { userId, username, email, avatarUrl }) => {
    const authenticatedUserId = await requireMatchingUserId(ctx, userId);
    const identity = await getAuthenticatedIdentity(ctx);
    const claimedRole = getRoleFromIdentity(identity);
    const user = await getUserRecordById(ctx, authenticatedUserId);
    if (!user) return;
    const patch: Record<string, string> = {};
    if (username !== undefined) {
      patch.username = await resolveCanonicalUsername(ctx, username, authenticatedUserId);
    }
    if (email !== undefined) patch.email = email;
    if (avatarUrl !== undefined) patch.avatarUrl = avatarUrl;
    if (claimedRole) patch.role = claimedRole;
    await ctx.db.patch(user._id, patch);
  },
});

export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const currentUserId = await requireAuthenticatedUserId(ctx);
    if (currentUserId !== userId && !(await isTeacherUserId(ctx, currentUserId))) {
      return null;
    }
    const user = await getUserRecordById(ctx, userId);
    if (!user) return null;
    if (currentUserId === userId) {
      return user;
    }
    return toPublicUserSummary(user);
  },
});

export const getAllUsers = query({
  args: {},
  handler: async (ctx) => {
    await requireTeacher(ctx);
    const users = await ctx.db.query("users").collect();
    return users.map((user) => toPublicUserSummary(user));
  },
});

export const searchUsers = query({
  args: {
    search: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { search, limit }) => {
    const currentUserId = await requireAuthenticatedUserId(ctx);
    const term = search.trim().toLowerCase();
    if (term.length < 2) {
      return [];
    }

    const maxResults = Math.min(Math.max(limit || 8, 1), 20);
    const users = await ctx.db.query("users").collect();

    return users
      .filter((user) => user.userId !== currentUserId)
      .filter((user) => user.username.toLowerCase().includes(term))
      .sort((a, b) => {
        const aStarts = a.username.toLowerCase().startsWith(term) ? 0 : 1;
        const bStarts = b.username.toLowerCase().startsWith(term) ? 0 : 1;
        if (aStarts !== bStarts) {
          return aStarts - bStarts;
        }
        return a.username.localeCompare(b.username);
      })
      .slice(0, maxResults)
      .map((user) => toPublicUserSummary(user));
  },
});

export const setTeacherRole = mutation({
  args: { userId: v.string(), role: v.string() },
  handler: async (_ctx, _args) => {
    throw new Error("Teacher role changes must be provisioned outside the client.");
  },
});

export const getMyRole = query({
  args: { userId: v.optional(v.string()) },
  handler: async (ctx, { userId }) => {
    await requireMatchingUserId(ctx, userId);
    return await getCurrentUserRole(ctx);
  },
});
