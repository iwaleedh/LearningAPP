import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  effectiveAccountStatus,
  getAuthenticatedIdentity,
  getUserRecordById,
  isAdminEmail,
  requireAdmin,
  requireAuthenticatedUserId,
} from "./authHelpers";

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
        role: "student",
        email: identity.email ?? null,
        isAdmin: isAdminEmail(identity.email),
      };
    }
    return {
      accountStatus: effectiveAccountStatus(user),
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
