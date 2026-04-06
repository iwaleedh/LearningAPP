import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import {
  effectiveAccountStatus,
  getAuthenticatedIdentity,
  resolveAccessStatus,
  getUserRecordById,
  isAdminEmail,
  requireAdmin,
  requireAuthenticatedUserId,
} from "./authHelpers";

const MAX_ADMIN_REASON_LENGTH = 240;
const MAX_IDEMPOTENCY_KEY_LENGTH = 120;
const MAX_ACCESS_EXTENSION_MS = 5 * 365 * 24 * 60 * 60 * 1000;
const MAX_PENDING_LOGIN_ALERT_RETRIES = 3;
const MAX_MANUAL_LOGIN_ALERT_RETRY_BATCH = 20;
const anyInternal = internal as any;

async function revokeAuthSessionsForUser(ctx: any, userId: string, reason: string, revokedAt: number) {
  const sessions = await ctx.db
    .query("authSessions")
    .withIndex("by_user", (q: any) => q.eq("userId", userId))
    .collect();

  for (const session of sessions) {
    if (session.revokedAt) continue;
    await ctx.db.patch(session._id, {
      revokedAt,
      revokeReason: reason,
    });
  }
}

function normalizeAdminReason(reason: string | undefined, fallback: string) {
  const normalized = String(reason || "").trim().replace(/[\r\n\t]+/g, " ");
  return (normalized || fallback).slice(0, MAX_ADMIN_REASON_LENGTH);
}

function normalizeIdempotencyKey(value: string | undefined) {
  const normalized = String(value || "").trim();
  return normalized ? normalized.slice(0, MAX_IDEMPOTENCY_KEY_LENGTH) : undefined;
}

async function findAdminActionReceipt(ctx: any, actorId: string, action: string, idempotencyKey: string) {
  return await ctx.db
    .query("adminActionReceipts")
    .withIndex("by_actor_action_key", (q: any) => q.eq("actorId", actorId).eq("action", action).eq("idempotencyKey", idempotencyKey))
    .first();
}

async function storeAdminActionReceipt(ctx: any, actorId: string, action: string, targetId: string | undefined, idempotencyKey: string | undefined, response: Record<string, unknown>) {
  if (!idempotencyKey) return;
  await ctx.db.insert("adminActionReceipts", {
    actorId,
    action,
    targetId,
    idempotencyKey,
    responseJson: JSON.stringify(response),
    createdAt: Date.now(),
  });
}

/**
 * Returns the calling user's account status + admin flag.
 * This query is allowed BEFORE approval (used by the pending page).
 */
export const getMyAccountStatus = query({
  args: {},
  handler: async (ctx) => {
    const identity = await getAuthenticatedIdentity(ctx);
    if (!identity?.subject) {
      return { accountStatus: null, role: "student", email: null, isAdmin: false };
    }
    const user = await getUserRecordById(ctx, identity.subject);
    if (!user) {
      return {
        accountStatus: "pending",
        accessStatus: "restricted",
        accessExpiresAt: null,
        accessDurationMonths: null,
        accessWindowStartedAt: null,
        firstSignInAt: null,
        lastSignInAt: null,
        role: "student",
        email: identity.email ?? null,
        isAdmin: isAdminEmail(identity.email),
      };
    }
    return {
      accountStatus: effectiveAccountStatus(user),
      accessStatus: resolveAccessStatus(user),
      accessExpiresAt: user.accessExpiresAt ?? null,
      accessDurationMonths: user.accessDurationMonths ?? null,
      accessWindowStartedAt: user.accessWindowStartedAt ?? null,
      firstSignInAt: user.firstSignInAt ?? null,
      lastSignInAt: user.lastSignInAt ?? null,
      role: user.role ?? "student",
      email: user.email ?? null,
      isAdmin: isAdminEmail(user.email) || isAdminEmail(identity.email),
    };
  },
});

/**
 * List users awaiting approval. Admin only.
 */
export const listPendingUsers = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const users = await ctx.db
      .query("users")
      .withIndex("by_accountStatus", (q) => q.eq("accountStatus", "pending"))
      .collect();
    return users.map((u) => ({
      _id: u._id,
      userId: u.userId,
      username: u.username,
      email: u.email,
      role: u.role,
      accountStatus: effectiveAccountStatus(u),
      accessStatus: resolveAccessStatus(u),
      accessExpiresAt: u.accessExpiresAt,
      accessDurationMonths: u.accessDurationMonths,
      firstSignInAt: u.firstSignInAt,
      lastSignInAt: u.lastSignInAt,
      avatarUrl: u.avatarUrl,
      createdAt: u.createdAt,
    }));
  },
});

/**
 * List all users with full details. Admin only.
 */
export const listAllUsersAdmin = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const users = await ctx.db.query("users").collect();
    return users.map((u) => ({
      _id: u._id,
      userId: u.userId,
      username: u.username,
      email: u.email,
      role: u.role,
      accountStatus: effectiveAccountStatus(u),
      accessStatus: resolveAccessStatus(u),
      accessExpiresAt: u.accessExpiresAt,
      accessDurationMonths: u.accessDurationMonths,
      firstSignInAt: u.firstSignInAt,
      lastSignInAt: u.lastSignInAt,
      avatarUrl: u.avatarUrl,
      createdAt: u.createdAt,
      statusUpdatedAt: u.statusUpdatedAt,
    }));
  },
});

/**
 * Approve a pending user. Admin only.
 */
export const approveUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const adminId = await requireAdmin(ctx);
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");
    await ctx.db.patch(user._id, {
      accountStatus: "approved",
      statusUpdatedAt: Date.now(),
    });
    await ctx.db.insert("auditLogs", {
      actorId: adminId, action: "APPROVE_USER", targetId: userId, timestamp: Date.now()
    });
  },
});

/**
 * Block a user. Admin only. Cannot block self.
 */
export const blockUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const adminUserId = await requireAdmin(ctx);
    if (adminUserId === userId) {
      throw new Error("Cannot block your own account.");
    }
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");
    await ctx.db.patch(user._id, {
      accountStatus: "blocked",
      statusUpdatedAt: Date.now(),
    });
    await ctx.db.insert("auditLogs", {
      actorId: adminUserId, action: "BLOCK_USER", targetId: userId, timestamp: Date.now()
    });
  },
});

/**
 * Unblock (re-approve) a blocked user. Admin only.
 */
export const unblockUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const adminId = await requireAdmin(ctx);
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");
    await ctx.db.patch(user._id, {
      accountStatus: "approved",
      statusUpdatedAt: Date.now(),
    });
    await ctx.db.insert("auditLogs", {
      actorId: adminId, action: "UNBLOCK_USER", targetId: userId, timestamp: Date.now()
    });
  },
});

/**
 * Set a user's role (student/teacher). Admin only.
 * Replaces the disabled setTeacherRole mutation.
 */
export const setUserRole = mutation({
  args: { userId: v.string(), role: v.string() },
  handler: async (ctx, { userId, role }) => {
    const adminId = await requireAdmin(ctx);
    const normalised = role.trim().toLowerCase();
    if (normalised !== "teacher" && normalised !== "student") {
      throw new Error("Role must be 'teacher' or 'student'.");
    }
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");
    await ctx.db.patch(user._id, { role: normalised });
    await ctx.db.insert("auditLogs", {
      actorId: adminId, action: "SET_ROLE", targetId: userId, details: JSON.stringify({ role: normalised }), timestamp: Date.now()
    });
  },
});

/**
 * Permanently delete a user record. Admin only. Cannot delete self.
 */
export const deleteUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const adminUserId = await requireAdmin(ctx);
    if (adminUserId === userId) {
      throw new Error("Cannot delete your own account.");
    }
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");

    const paymentRequests = await ctx.db
      .query("paymentRequests")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();

    for (const request of paymentRequests) {
      try {
        await ctx.storage.delete(request.storageId);
      } catch (error) {
        console.warn("Failed to delete payment slip from storage", {
          paymentRequestId: request._id,
          storageId: request.storageId,
          error,
        });
      }
      await ctx.db.delete(request._id);
    }

    await ctx.db.delete(user._id);
    await ctx.db.insert("auditLogs", {
      actorId: adminUserId, action: "DELETE_USER", targetId: userId, timestamp: Date.now()
    });
  },
});

export const revokeUserAccess = mutation({
  args: { userId: v.string(), reason: v.optional(v.string()) },
  handler: async (ctx, { userId, reason }) => {
    const adminUserId = await requireAdmin(ctx);
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");

    const now = Date.now();
    const revokeReason = reason?.trim() || "Access revoked by administrator.";

    await ctx.db.patch(user._id, {
      accessExpiresAt: now,
      accessRevokedAt: now,
      accessRevokedReason: revokeReason,
      sessionVersion: (user.sessionVersion ?? 1) + 1,
    });
    await revokeAuthSessionsForUser(ctx, userId, revokeReason, now);
    await ctx.db.insert("auditLogs", {
      actorId: adminUserId,
      action: "REVOKE_ACCESS",
      targetId: userId,
      details: JSON.stringify({ reason: revokeReason }),
      timestamp: now,
    });
  },
});

export const clearUserAccessWindow = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const adminUserId = await requireAdmin(ctx);
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");

    const now = Date.now();
    await ctx.db.patch(user._id, {
      accessWindowStartedAt: undefined,
      accessDurationMonths: undefined,
      accessExpiresAt: undefined,
      accessRevokedAt: undefined,
      accessRevokedReason: undefined,
      sessionVersion: (user.sessionVersion ?? 1) + 1,
    });
    await revokeAuthSessionsForUser(ctx, userId, "Access window reset by administrator.", now);
    await ctx.db.insert("auditLogs", {
      actorId: adminUserId,
      action: "CLEAR_ACCESS_WINDOW",
      targetId: userId,
      timestamp: now,
    });
  },
});

export const setUserAccessExpiry = mutation({
  args: {
    userId: v.string(),
    accessExpiresAt: v.number(),
    reason: v.optional(v.string()),
    idempotencyKey: v.optional(v.string()),
  },
  handler: async (ctx, { userId, accessExpiresAt, reason, idempotencyKey }) => {
    const adminUserId = await requireAdmin(ctx);
    const user = await getUserRecordById(ctx, userId);
    if (!user) throw new Error("User not found.");

    const normalizedIdempotencyKey = normalizeIdempotencyKey(idempotencyKey);
    if (normalizedIdempotencyKey) {
      const existingReceipt = await findAdminActionReceipt(ctx, adminUserId, "SET_ACCESS_EXPIRY", normalizedIdempotencyKey);
      if (existingReceipt?.responseJson) {
        return JSON.parse(existingReceipt.responseJson);
      }
    }

    const now = Date.now();
    if (!Number.isFinite(accessExpiresAt)) {
      throw new Error("accessExpiresAt must be a valid timestamp.");
    }
    if (accessExpiresAt <= now) {
      throw new Error("accessExpiresAt must be in the future.");
    }
    if (accessExpiresAt > now + MAX_ACCESS_EXTENSION_MS) {
      throw new Error("accessExpiresAt is too far in the future.");
    }

    const adminReason = normalizeAdminReason(reason, "Access expiry updated by administrator.");
    const nextSessionVersion = (user.sessionVersion ?? 1) + 1;

    await ctx.db.patch(user._id, {
      accessWindowStartedAt: now,
      accessDurationMonths: undefined,
      accessExpiresAt,
      accessRevokedAt: undefined,
      accessRevokedReason: undefined,
      sessionVersion: nextSessionVersion,
      statusUpdatedAt: now,
    });
    await revokeAuthSessionsForUser(ctx, userId, adminReason, now);

    const response = {
      userId,
      accountStatus: effectiveAccountStatus(user),
      accessStatus: resolveAccessStatus({
        ...user,
        accessExpiresAt,
        accessRevokedAt: undefined,
      }),
      accessExpiresAt,
      previousAccessExpiresAt: user.accessExpiresAt ?? null,
      sessionVersion: nextSessionVersion,
      appliedAt: now,
    };

    await ctx.db.insert("auditLogs", {
      actorId: adminUserId,
      action: "SET_ACCESS_EXPIRY",
      targetId: userId,
      details: JSON.stringify({
        previousAccessExpiresAt: user.accessExpiresAt ?? null,
        nextAccessExpiresAt: accessExpiresAt,
        reason: adminReason,
        idempotencyKey: normalizedIdempotencyKey,
      }),
      timestamp: now,
    });
    await storeAdminActionReceipt(ctx, adminUserId, "SET_ACCESS_EXPIRY", userId, normalizedIdempotencyKey, response);

    return response;
  },
});

export const listRecentLoginEvents = query({
  args: {
    userId: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { userId, limit }) => {
    await requireAdmin(ctx);
    const maxResults = Math.min(Math.max(limit || 25, 1), 100);
    const rows = userId
      ? await ctx.db
        .query("loginEvents")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .order("desc")
        .take(maxResults)
      : await ctx.db
        .query("loginEvents")
        .withIndex("by_createdAt")
        .order("desc")
        .take(maxResults);

    return rows;
  },
});

export const retryPendingLoginAlerts = mutation({
  args: {},
  handler: async (ctx) => {
    const adminUserId = await requireAdmin(ctx);
    const now = Date.now();
    const pending = await ctx.db
      .query("loginEvents")
      .withIndex("by_emailDeliveryStatus", (q) => q.eq("emailDeliveryStatus", "pending"))
      .order("desc")
      .take(MAX_MANUAL_LOGIN_ALERT_RETRY_BATCH);

    const retryable = pending.filter((event) => (event.emailRetryCount ?? 0) < MAX_PENDING_LOGIN_ALERT_RETRIES);
    for (const event of retryable) {
      await ctx.scheduler.runAfter(0, anyInternal.authNotifications.sendLoginAlert, {
        loginEventId: event._id,
      });
    }

    await ctx.db.insert("auditLogs", {
      actorId: adminUserId,
      action: "RETRY_PENDING_LOGIN_ALERTS",
      details: JSON.stringify({ queued: retryable.length }),
      timestamp: now,
    });

    return {
      queued: retryable.length,
      inspected: pending.length,
      queuedLoginEventIds: retryable.map((event) => event._id),
      queuedAt: now,
    };
  },
});
