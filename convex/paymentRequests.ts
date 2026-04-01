import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  requireAdmin,
  requireAuthenticatedUserId,
  getUserRecordById,
} from "./authHelpers";

const PLAN_AMOUNTS: Record<string, number> = {
  monthly: 100,
  annual: 1000,
};

/**
 * Generate a short-lived Convex storage upload URL.
 * Any authenticated user can request this.
 */
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAuthenticatedUserId(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

/**
 * Save a payment request after the file has been uploaded to Convex storage.
 * Rejects if the user already has a non-rejected active request.
 */
export const submitPaymentRequest = mutation({
  args: {
    plan:      v.string(),
    amount:    v.number(),
    storageId: v.id("_storage"),
    fileName:  v.string(),
    mimeType:  v.string(),
  },
  handler: async (ctx, { plan, amount, storageId, fileName, mimeType }) => {
    const userId = await requireAuthenticatedUserId(ctx);

    const normalised = plan.trim().toLowerCase();
    const expectedAmount = PLAN_AMOUNTS[normalised];
    if (!expectedAmount) {
      throw new Error("Plan must be 'monthly' or 'annual'.");
    }

    if (amount !== expectedAmount) {
      throw new Error("Submitted amount does not match the selected plan.");
    }

    const normalisedMimeType = mimeType.trim().toLowerCase();
    const isAllowedMimeType = normalisedMimeType === "application/pdf"
      || normalisedMimeType.startsWith("image/");
    if (!isAllowedMimeType) {
      throw new Error("Payment slip must be an image or PDF.");
    }

    // Prevent duplicate active submissions
    const existing = await ctx.db
      .query("paymentRequests")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();

    const active = existing.find((r) => r.status === "pending");
    if (active) {
      throw new Error("You already have a payment request under review.");
    }

    await ctx.db.insert("paymentRequests", {
      userId,
      plan: normalised,
      amount: expectedAmount,
      storageId,
      fileName,
      mimeType: normalisedMimeType,
      status: "pending",
      submittedAt: Date.now(),
    });
  },
});

/**
 * Returns the calling user's most recent payment request (any status), or null.
 * Includes a temporary URL for the uploaded slip image/PDF.
 */
export const getMyPaymentRequest = query({
  args: {},
  handler: async (ctx) => {
    let userId: string;
    try {
      userId = await requireAuthenticatedUserId(ctx);
    } catch {
      return null;
    }

    const rows = await ctx.db
      .query("paymentRequests")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();

    if (rows.length === 0) return null;

    // Most recent first
    rows.sort((a, b) => b.submittedAt - a.submittedAt);
    const doc = rows[0];

    const slipUrl = await ctx.storage.getUrl(doc.storageId);

    return {
      _id:         doc._id,
      plan:        doc.plan,
      amount:      doc.amount,
      fileName:    doc.fileName,
      mimeType:    doc.mimeType,
      status:      doc.status,
      submittedAt: doc.submittedAt,
      reviewedAt:  doc.reviewedAt,
      adminNotes:  doc.adminNotes,
      slipUrl,
    };
  },
});

/**
 * Admin: list payment requests, optionally filtered by status.
 * Uses the by_status index when a status is provided (efficient).
 * Returns all requests newest-first when no status is given.
 */
export const listPaymentRequests = query({
  args: { status: v.optional(v.string()) },
  handler: async (ctx, { status }) => {
    await requireAdmin(ctx);

    const requests = status
      ? await ctx.db
          .query("paymentRequests")
          .withIndex("by_status", (q) => q.eq("status", status))
          .collect()
      : await ctx.db.query("paymentRequests").collect();

    const results = await Promise.all(
      requests.map(async (req) => {
        const user = await getUserRecordById(ctx, req.userId);
        const slipUrl = await ctx.storage.getUrl(req.storageId);
        return {
          _id:         req._id,
          userId:      req.userId,
          username:    user?.username ?? "Unknown",
          email:       user?.email ?? null,
          avatarUrl:   user?.avatarUrl ?? null,
          plan:        req.plan,
          amount:      req.amount,
          fileName:    req.fileName,
          mimeType:    req.mimeType,
          status:      req.status,
          submittedAt: req.submittedAt,
          reviewedAt:  req.reviewedAt,
          reviewedBy:  req.reviewedBy,
          adminNotes:  req.adminNotes,
          slipUrl,
        };
      })
    );

    results.sort((a, b) => b.submittedAt - a.submittedAt);
    return results;
  },
});

/**
 * Admin: return counts per status — used for header badges without
 * loading slip URLs or joining user records.
 */
export const getPaymentCounts = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);

    const [pending, approved, rejected] = await Promise.all([
      ctx.db.query("paymentRequests").withIndex("by_status", (q) => q.eq("status", "pending")).collect(),
      ctx.db.query("paymentRequests").withIndex("by_status", (q) => q.eq("status", "approved")).collect(),
      ctx.db.query("paymentRequests").withIndex("by_status", (q) => q.eq("status", "rejected")).collect(),
    ]);

    return {
      pending:  pending.length,
      approved: approved.length,
      rejected: rejected.length,
      total:    pending.length + approved.length + rejected.length,
    };
  },
});

/**
 * Admin: approve or reject a payment request.
 * Approving automatically sets the user's accountStatus to 'approved'.
 */
export const reviewPaymentRequest = mutation({
  args: {
    requestId:  v.id("paymentRequests"),
    decision:   v.string(), // 'approved' | 'rejected'
    adminNotes: v.optional(v.string()),
  },
  handler: async (ctx, { requestId, decision, adminNotes }) => {
    const adminUserId = await requireAdmin(ctx);

    const norm = decision.trim().toLowerCase();
    if (norm !== "approved" && norm !== "rejected") {
      throw new Error("Decision must be 'approved' or 'rejected'.");
    }

    const req = await ctx.db.get(requestId);
    if (!req) throw new Error("Payment request not found.");
    if (req.status !== "pending") {
      throw new Error(`This payment request has already been ${req.status}. Refresh and try again.`);
    }

    await ctx.db.patch(requestId, {
      status:     norm,
      reviewedAt: Date.now(),
      reviewedBy: adminUserId,
      adminNotes: adminNotes ?? undefined,
    });

    if (norm === "approved") {
      const user = await getUserRecordById(ctx, req.userId);
      if (user) {
        await ctx.db.patch(user._id, {
          accountStatus:   "approved",
          statusUpdatedAt: Date.now(),
        });
      }
    }
  },
});
