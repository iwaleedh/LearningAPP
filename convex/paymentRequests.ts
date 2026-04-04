import { internalMutation, mutation, query, type MutationCtx } from "./_generated/server";
import type { Id } from "./_generated/dataModel";
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

const MAX_SUBMISSION_KEY_LENGTH = 128;
const MAX_PAYMENT_FILENAME_LENGTH = 255;
const MAX_PAYMENT_MIME_LENGTH = 100;
const MAX_PAYMENT_FILE_SIZE = 10 * 1024 * 1024;
const PAYMENT_UPLOAD_INTENT_WINDOW_MS = 15 * 60 * 1000;
const PAYMENT_UPLOAD_INTENT_CONSUMED_RETENTION_MS = 24 * 60 * 60 * 1000;
const PAYMENT_UPLOAD_INTENT_CLEANUP_BATCH_SIZE = 200;

function normalizePaymentMimeType(mimeType: string) {
  const normalized = requireTrimmedValue(mimeType, "mimeType", MAX_PAYMENT_MIME_LENGTH).toLowerCase();
  return normalized === "image/jpg" ? "image/jpeg" : normalized;
}

function isAllowedPaymentMimeType(mimeType: string) {
  return mimeType === "application/pdf" || mimeType.startsWith("image/");
}

function requireTrimmedValue(value: string, fieldName: string, maxLength: number) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    throw new Error(`${fieldName} is required.`);
  }
  if (normalized.length > maxLength) {
    throw new Error(`${fieldName} exceeds ${maxLength} characters.`);
  }
  return normalized;
}

function normalizeUploadedFileName(fileName: string) {
  const baseName = requireTrimmedValue(fileName, "fileName", MAX_PAYMENT_FILENAME_LENGTH)
    .split(/[\\/]/)
    .pop();
  if (!baseName) {
    throw new Error("fileName is required.");
  }
  return baseName;
}

async function deleteStorageFileQuietly(ctx: MutationCtx, storageId: Id<"_storage">) {
  try {
    await ctx.storage.delete(storageId);
  } catch {
    // Ignore cleanup failures so the original validation error is preserved.
  }
}

async function validatePaymentUpload(
  ctx: MutationCtx,
  storageId: Id<"_storage">,
  submittedMimeType: string,
) {
  const metadata = await ctx.storage.getMetadata(storageId);
  if (!metadata) {
    throw new Error("Uploaded payment slip could not be found. Please upload it again.");
  }

  if (metadata.size <= 0) {
    throw new Error("Uploaded payment slip is empty.");
  }

  if (metadata.size > MAX_PAYMENT_FILE_SIZE) {
    throw new Error("Payment slips must be 10MB or smaller.");
  }

  const uploadedMimeType = normalizePaymentMimeType(metadata.contentType ?? "");
  if (!isAllowedPaymentMimeType(uploadedMimeType)) {
    throw new Error("Uploaded payment slip must be an image or PDF.");
  }

  if (uploadedMimeType !== submittedMimeType) {
    throw new Error("Uploaded payment slip type does not match the submitted file.");
  }
}

async function getPaymentUploadIntent(ctx: MutationCtx, userId: string, submissionKey: string) {
  return await ctx.db
    .query("paymentUploadIntents" as any)
    .withIndex("by_user_submission", (q) => q.eq("userId", userId))
    .filter((q) => q.eq(q.field("submissionKey"), submissionKey))
    .first();
}

async function upsertPaymentUploadIntent(
  ctx: MutationCtx,
  userId: string,
  submissionKey: string,
  mimeType: string,
) {
  const now = Date.now();
  const existing = await getPaymentUploadIntent(ctx, userId, submissionKey);
  const patch = {
    mimeType,
    status: "pending" as const,
    issuedAt: now,
    expiresAt: now + PAYMENT_UPLOAD_INTENT_WINDOW_MS,
    consumedAt: undefined,
    storageId: undefined,
  };

  if (existing) {
    await ctx.db.patch(existing._id, patch);
    return existing._id;
  }

  return await ctx.db.insert("paymentUploadIntents" as any, {
    userId,
    submissionKey,
    ...patch,
  });
}

async function consumePaymentUploadIntent(
  ctx: MutationCtx,
  uploadIntentId: string,
  storageId: Id<"_storage">,
) {
  await ctx.db.patch(uploadIntentId as any, {
    status: "consumed",
    consumedAt: Date.now(),
    storageId,
  });
}

export const cleanupStalePaymentUploadIntents = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const consumedCutoff = now - PAYMENT_UPLOAD_INTENT_CONSUMED_RETENTION_MS;

    const expiredPending = await ctx.db
      .query("paymentUploadIntents" as any)
      .withIndex("by_expiresAt")
      .filter((q) => q.and(
        q.lt(q.field("expiresAt"), now),
        q.eq(q.field("status"), "pending"),
      ))
      .take(PAYMENT_UPLOAD_INTENT_CLEANUP_BATCH_SIZE);

    const staleConsumed = await ctx.db
      .query("paymentUploadIntents" as any)
      .withIndex("by_status", (q) => q.eq("status", "consumed"))
      .filter((q) => q.lt(q.field("consumedAt"), consumedCutoff))
      .take(PAYMENT_UPLOAD_INTENT_CLEANUP_BATCH_SIZE);

    for (const intent of [...expiredPending, ...staleConsumed]) {
      await ctx.db.delete(intent._id);
    }

    return {
      deletedExpired: expiredPending.length,
      deletedConsumed: staleConsumed.length,
    };
  },
});

/**
 * Generate a short-lived Convex storage upload URL for a specific payment submission.
 */
export const generateUploadUrl = mutation({
  args: {
    submissionKey: v.string(),
    mimeType: v.string(),
  },
  handler: async (ctx, { submissionKey, mimeType }) => {
    const userId = await requireAuthenticatedUserId(ctx);
    const normalizedSubmissionKey = requireTrimmedValue(submissionKey, "Submission key", MAX_SUBMISSION_KEY_LENGTH);
    const normalizedMimeType = normalizePaymentMimeType(mimeType);
    if (!isAllowedPaymentMimeType(normalizedMimeType)) {
      throw new Error("Payment slip must be an image or PDF.");
    }

    await upsertPaymentUploadIntent(ctx, userId, normalizedSubmissionKey, normalizedMimeType);
    return await ctx.storage.generateUploadUrl();
  },
});

/**
 * Save a payment request after the file has been uploaded to Convex storage.
 * Rejects if the user already has a non-rejected active request.
 */
export const submitPaymentRequest = mutation({
  args: {
    submissionKey: v.string(),
    plan:      v.string(),
    amount:    v.number(),
    storageId: v.id("_storage"),
    fileName:  v.string(),
    mimeType:  v.string(),
  },
  handler: async (ctx, { submissionKey, plan, amount, storageId, fileName, mimeType }) => {
    const userId = await requireAuthenticatedUserId(ctx);
    let keepUploadedFile = false;

    try {
      const normalizedSubmissionKey = requireTrimmedValue(submissionKey, "Submission key", MAX_SUBMISSION_KEY_LENGTH);
      const normalizedFileName = normalizeUploadedFileName(fileName);
      const normalisedMimeType = normalizePaymentMimeType(mimeType);

      const normalised = plan.trim().toLowerCase();
      const expectedAmount = PLAN_AMOUNTS[normalised];
      if (!expectedAmount) {
        throw new Error("Plan must be 'monthly' or 'annual'.");
      }

      if (amount !== expectedAmount) {
        throw new Error("Submitted amount does not match the selected plan.");
      }

      if (!isAllowedPaymentMimeType(normalisedMimeType)) {
        throw new Error("Payment slip must be an image or PDF.");
      }

      // Prevent duplicate active submissions
      const existing = await ctx.db
        .query("paymentRequests")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .collect();

      const duplicate = existing.find((r) => r.submissionKey === normalizedSubmissionKey);
      if (duplicate) {
        await deleteStorageFileQuietly(ctx, storageId);
        return duplicate._id;
      }

      const active = existing.find((r) => r.status === "pending");
      if (active) {
        throw new Error("You already have a payment request under review.");
      }

      const uploadIntent = await getPaymentUploadIntent(ctx, userId, normalizedSubmissionKey);
      if (!uploadIntent || uploadIntent.status !== "pending" || uploadIntent.expiresAt < Date.now()) {
        throw new Error("Upload session expired. Please upload your payment slip again.");
      }

      if (uploadIntent.mimeType !== normalisedMimeType) {
        throw new Error("Upload session does not match the selected file. Please upload your payment slip again.");
      }

      await validatePaymentUpload(ctx, storageId, normalisedMimeType);

      const requestId = await ctx.db.insert("paymentRequests", {
        userId,
        submissionKey: normalizedSubmissionKey,
        plan: normalised as 'monthly' | 'annual',  // validated above: PLAN_AMOUNTS[normalised]
        amount: expectedAmount,
        storageId,
        fileName: normalizedFileName,
        mimeType: normalisedMimeType,
        status: "pending",
        submittedAt: Date.now(),
      });

      await ctx.db.insert("auditLogs", {
        actorId: userId,
        action: "SUBMIT_PAYMENT_REQUEST",
        targetId: String(requestId),
        details: JSON.stringify({ plan: normalised, amount: expectedAmount, fileName: normalizedFileName }),
        timestamp: Date.now(),
      });

      await consumePaymentUploadIntent(ctx, String(uploadIntent._id), storageId);

      keepUploadedFile = true;
      return requestId;
    } catch (error) {
      if (!keepUploadedFile) {
        await deleteStorageFileQuietly(ctx, storageId);
      }
      throw error;
    }
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
          .withIndex("by_status", (q) => q.eq("status", status as 'pending' | 'approved' | 'rejected'))
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

    let entitlementId: string | null = null;
    if (norm === "approved") {
      const user = await getUserRecordById(ctx, req.userId);
      if (!user) {
        throw new Error("Cannot approve payment request before the user account is fully registered.");
      }

      const existingEntitlement = await ctx.db
        .query("paymentEntitlements")
        .withIndex("by_request", (q) => q.eq("requestId", requestId))
        .first();

      if (existingEntitlement) {
        await ctx.db.patch(existingEntitlement._id, {
          plan: req.plan,
          amount: req.amount,
          status: "active",
          grantedAt: Date.now(),
          grantedBy: adminUserId,
          revokedAt: undefined,
          revokedBy: undefined,
        });
        entitlementId = String(existingEntitlement._id);
      } else {
        entitlementId = String(await ctx.db.insert("paymentEntitlements", {
          requestId,
          userId: req.userId,
          plan: req.plan,
          amount: req.amount,
          status: "active",
          grantedAt: Date.now(),
          grantedBy: adminUserId,
        }));
      }

      await ctx.db.patch(user._id, {
        accountStatus:   "approved",
        statusUpdatedAt: Date.now(),
      });
    }

    await ctx.db.patch(requestId, {
      status:        norm as 'approved' | 'rejected',  // validated above
      reviewedAt:    Date.now(),
      reviewedBy:    adminUserId,
      adminNotes:    adminNotes ?? undefined,
      // D10: Record the entitlementId so consistency checks can detect orphaned
      // approvals (approved requests where the entitlement row is missing).
      ...(entitlementId ? { entitlementId: entitlementId as any } : {}),
    });

    await ctx.db.insert("auditLogs", {
      actorId: adminUserId,
      action: norm === "approved" ? "APPROVE_PAYMENT_REQUEST" : "REJECT_PAYMENT_REQUEST",
      targetId: String(requestId),
      details: JSON.stringify({
        userId: req.userId,
        plan: req.plan,
        amount: req.amount,
        entitlementId,
        adminNotes: adminNotes ?? null,
      }),
      timestamp: Date.now(),
    });

    if (norm === "rejected") {
      await deleteStorageFileQuietly(ctx, req.storageId);
    }
  },
});
