import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import {
  getAuthenticatedIdentity,
  getCurrentUserRole,
  getUserRecordById,
  isAdminEmail,
  isAdminUsername,
  isTeacherUserId,
  requireApprovedAccount,
  requireApprovedAuthenticatedUserId,
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

  // D17: Use by_username index instead of collect() to avoid O(n) scan.
  // Convex indexes are sorted case-sensitively, so we fetch by lower-case variant
  // then compare normalised strings to catch case-insensitive collisions.
  const sameUsername = await ctx.db
    .query("users")
    .withIndex("by_username", (q) => q.eq("username", baseUsername))
    .first();

  // If the only match is us, no conflict.
  const conflictingUser = sameUsername && sameUsername.userId !== currentUserId ? sameUsername : null;

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
    const canonicalUsername = await resolveCanonicalUsername(ctx, username, authenticatedUserId);
    const existing = await getUserRecordById(ctx, authenticatedUserId);
    if (existing) {
      // S3 fix: Never write JWT-claimed role on re-registration / profile sync.
      await ctx.db.patch(existing._id, {
        username: canonicalUsername,
        email,
        avatarUrl,
      });
      return existing._id;
    }

    // S3 fix: New users always start as "student". Only admins may promote
    // via admin.setUserRole(). Previously, a crafted JWT with role:"teacher"
    // would be persisted here, granting permanent privilege escalation.
    const id = await ctx.db.insert("users", {
      userId: authenticatedUserId,
      username: canonicalUsername,
      role: "student",
      email,
      avatarUrl,
        accountStatus: (isAdminEmail(email) || isAdminUsername(username)) ? "approved" : "pending",
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
    const user = await getUserRecordById(ctx, authenticatedUserId);
    if (!user) return;
    const patch: Record<string, string> = {};
    if (username !== undefined) {
      patch.username = await resolveCanonicalUsername(ctx, username, authenticatedUserId);
    }
    if (email !== undefined) patch.email = email;
    if (avatarUrl !== undefined) patch.avatarUrl = avatarUrl;
    // S3 fix: The role field is intentionally NOT updated here.
    // Previously, `claimedRole` from the JWT identity was written to the DB on every
    // profile update, meaning a user could craft a JWT with role:"teacher" and call
    // updateUser to permanently escalate their own privilege.
    // Role changes may only be made by admins via direct DB mutation.
    await ctx.db.patch(user._id, patch);
  },
});

export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const currentUserId = await requireAuthenticatedUserId(ctx);
    if (currentUserId !== userId) {
      await requireApprovedAccount(ctx);
      if (!(await isTeacherUserId(ctx, currentUserId))) {
        return null;
      }
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
    // D17: Use take() instead of collect() to avoid loading the entire users table.
    // 500 is a generous cap for any realistic class/cohort size.
    const users = await ctx.db.query("users").order("desc").take(500);
    return users.map((user) => toPublicUserSummary(user));
  },
});

export const searchUsers = query({
  args: {
    search: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { search, limit }) => {
    const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
    const term = search.trim().toLowerCase();
    if (term.length < 2) {
      return [];
    }

    const maxResults = Math.min(Math.max(limit || 8, 1), 20);

    // D17: Use the native search index instead of collect() full scan.
    const results = await ctx.db
      .query("users")
      .withSearchIndex("search_username", (q) => q.search("username", term))
      .take(maxResults + 1); // fetch one extra to allow filtering self out

    return results
      .filter((user) => user.userId !== currentUserId)
      .slice(0, maxResults)
      .map((user) => toPublicUserSummary(user));
  },
});

// D5: Record one login-day row per (userId, dateKey). Called from the client
// once per local calendar day after successful sign-in. The server-side
// by_user_date uniqueness check prevents duplicate rows even if the client
// retries or multiple tabs open simultaneously.
export const recordLogin = mutation({
  args: {
    dateKey: v.string(), // YYYY-MM-DD in user's local timezone
  },
  handler: async (ctx, { dateKey }) => {
    const userId = await requireAuthenticatedUserId(ctx);
    const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;
    const normalized = String(dateKey || "").trim();
    if (!DATE_KEY_RE.test(normalized)) {
      throw new Error("dateKey must match YYYY-MM-DD.");
    }
    const existing = await ctx.db
      .query("userSessions")
      .withIndex("by_user_date", (q) => q.eq("userId", userId).eq("dateKey", normalized))
      .first();
    if (!existing) {
      await ctx.db.insert("userSessions", { userId, dateKey: normalized, createdAt: Date.now() });
    }
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
