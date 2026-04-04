import test from "node:test";
import assert from "node:assert/strict";

import { cleanupStalePaymentUploadIntents, generateUploadUrl, reviewPaymentRequest, submitPaymentRequest } from "./paymentRequests";
import { createMockConvexCtx } from "./testUtils";

const cleanupStalePaymentUploadIntentsHandler = (cleanupStalePaymentUploadIntents as any)._handler as (ctx: any) => Promise<any>;
const generateUploadUrlHandler = (generateUploadUrl as any)._handler as (ctx: any, args: any) => Promise<any>;
const reviewPaymentRequestHandler = (reviewPaymentRequest as any)._handler as (ctx: any, args: any) => Promise<any>;
const submitPaymentRequestHandler = (submitPaymentRequest as any)._handler as (ctx: any, args: any) => Promise<any>;
const MAX_PAYMENT_FILE_SIZE = 10 * 1024 * 1024;

function buildPaymentCtx({ tables = {}, storageFiles = {} }: { tables?: Record<string, any[]>; storageFiles?: Record<string, any> } = {}) {
  return createMockConvexCtx({
    identity: { subject: "student_payer", role: "student" },
    tables: {
      users: [{
        _id: "users:student_payer",
        userId: "student_payer",
        username: "Payer",
        role: "student",
        createdAt: 1,
      }],
      ...tables,
    },
    storageFiles: {
      "_storage:1": { contentType: "application/pdf", size: 1024 },
      "_storage:2": { contentType: "application/pdf", size: 1024 },
      ...storageFiles,
    },
  });
}

async function issueUploadIntent(ctx: any, submissionKey: string, mimeType = "application/pdf") {
  return await generateUploadUrlHandler(ctx, { submissionKey, mimeType });
}

test("generateUploadUrl records a scoped upload intent and rejects invalid types", async () => {
  const { ctx, tables } = buildPaymentCtx();

  const uploadUrl = await generateUploadUrlHandler(ctx, {
    submissionKey: "submission-intent-1",
    mimeType: "image/jpg",
  });

  assert.equal(uploadUrl, "https://storage.local/upload");
  assert.equal(tables.paymentUploadIntents.length, 1);
  assert.equal(tables.paymentUploadIntents[0]?.submissionKey, "submission-intent-1");
  assert.equal(tables.paymentUploadIntents[0]?.mimeType, "image/jpeg");
  assert.equal(tables.paymentUploadIntents[0]?.status, "pending");

  await assert.rejects(
    () => generateUploadUrlHandler(ctx, {
      submissionKey: "submission-intent-2",
      mimeType: "text/plain",
    }),
    /Payment slip must be an image or PDF\./
  );
});

test("submitPaymentRequest canonicalizes file names and returns existing duplicate submissions", async () => {
  const { ctx, tables, deletedStorageIds } = buildPaymentCtx();

  await issueUploadIntent(ctx, "submission-1");

  const firstId = await submitPaymentRequestHandler(ctx, {
    submissionKey: "submission-1",
    plan: "monthly",
    amount: 100,
    storageId: "_storage:1",
    fileName: "C:/fakepath/receipt.pdf",
    mimeType: "application/pdf",
  });

  await issueUploadIntent(ctx, "submission-1");

  const duplicateId = await submitPaymentRequestHandler(ctx, {
    submissionKey: "submission-1",
    plan: "monthly",
    amount: 100,
    storageId: "_storage:2",
    fileName: "ignored.pdf",
    mimeType: "application/pdf",
  });

  assert.equal(firstId, duplicateId);
  assert.equal(tables.paymentRequests.length, 1);
  assert.equal(tables.paymentRequests[0]?.fileName, "receipt.pdf");
  assert.ok(deletedStorageIds.has("_storage:2"));
});

test("submitPaymentRequest rejects oversized submission keys and file names", async () => {
  const { ctx, tables } = buildPaymentCtx();

  await assert.rejects(
    () => submitPaymentRequestHandler(ctx, {
      submissionKey: "x".repeat(129),
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Submission key exceeds 128 characters\./
  );

  await assert.rejects(
    () => submitPaymentRequestHandler(ctx, {
      submissionKey: "submission-2",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "r".repeat(256),
      mimeType: "application/pdf",
    }),
    /fileName exceeds 255 characters\./
  );

  assert.equal(tables.paymentRequests?.length ?? 0, 0);
});

test("submitPaymentRequest rejects invalid mime types and mismatched amounts", async () => {
  const { ctx, tables } = buildPaymentCtx();

  await assert.rejects(
    () => submitPaymentRequestHandler(ctx, {
      submissionKey: "submission-3",
      plan: "monthly",
      amount: 999,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "text/plain",
    }),
    /Submitted amount does not match the selected plan\./
  );

  await assert.rejects(
    () => submitPaymentRequestHandler(ctx, {
      submissionKey: "submission-4",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "text/plain",
    }),
    /Payment slip must be an image or PDF\./
  );

  assert.equal(tables.paymentRequests?.length ?? 0, 0);
});

test("submitPaymentRequest rejects missing or oversized uploaded blobs and cleans them up", async () => {
  const missingUpload = buildPaymentCtx({
    storageFiles: {
      "_storage:1": undefined,
    },
  });

  await issueUploadIntent(missingUpload.ctx, "submission-5");

  await assert.rejects(
    () => submitPaymentRequestHandler(missingUpload.ctx, {
      submissionKey: "submission-5",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Uploaded payment slip could not be found\. Please upload it again\./
  );

  const oversizedUpload = buildPaymentCtx({
    storageFiles: {
      "_storage:1": { contentType: "application/pdf", size: MAX_PAYMENT_FILE_SIZE + 1 },
    },
  });

  await issueUploadIntent(oversizedUpload.ctx, "submission-6");

  await assert.rejects(
    () => submitPaymentRequestHandler(oversizedUpload.ctx, {
      submissionKey: "submission-6",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Payment slips must be 10MB or smaller\./
  );

  assert.ok(oversizedUpload.deletedStorageIds.has("_storage:1"));
});

test("submitPaymentRequest rejects uploaded blob type mismatches and active pending uploads", async () => {
  const mismatchedUpload = buildPaymentCtx({
    storageFiles: {
      "_storage:1": { contentType: "image/png", size: 1024 },
    },
  });

  await issueUploadIntent(mismatchedUpload.ctx, "submission-7");

  await assert.rejects(
    () => submitPaymentRequestHandler(mismatchedUpload.ctx, {
      submissionKey: "submission-7",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Uploaded payment slip type does not match the submitted file\./
  );

  assert.ok(mismatchedUpload.deletedStorageIds.has("_storage:1"));

  const activePending = buildPaymentCtx({
    tables: {
      paymentRequests: [{
        _id: "paymentRequests:1",
        userId: "student_payer",
        submissionKey: "existing-submission",
        plan: "monthly",
        amount: 100,
        storageId: "_storage:existing",
        fileName: "existing.pdf",
        mimeType: "application/pdf",
        status: "pending",
        submittedAt: 1,
      }],
    },
  });

  await assert.rejects(
    () => submitPaymentRequestHandler(activePending.ctx, {
      submissionKey: "submission-8",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /You already have a payment request under review\./
  );

  assert.ok(activePending.deletedStorageIds.has("_storage:1"));
});

test("submitPaymentRequest rejects missing or expired upload intents", async () => {
  const { ctx } = buildPaymentCtx();

  await assert.rejects(
    () => submitPaymentRequestHandler(ctx, {
      submissionKey: "submission-9",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Upload session expired\. Please upload your payment slip again\./
  );

  const expiredIntent = buildPaymentCtx({
    tables: {
      paymentUploadIntents: [{
        _id: "paymentUploadIntents:1",
        userId: "student_payer",
        submissionKey: "submission-10",
        mimeType: "application/pdf",
        status: "pending",
        issuedAt: 1,
        expiresAt: 1,
      }],
    },
  });

  await assert.rejects(
    () => submitPaymentRequestHandler(expiredIntent.ctx, {
      submissionKey: "submission-10",
      plan: "monthly",
      amount: 100,
      storageId: "_storage:1",
      fileName: "receipt.pdf",
      mimeType: "application/pdf",
    }),
    /Upload session expired\. Please upload your payment slip again\./
  );
});

test("cleanupStalePaymentUploadIntents removes expired pending and old consumed intents only", async () => {
  const now = Date.now();
  const { ctx, tables } = buildPaymentCtx({
    tables: {
      paymentUploadIntents: [
        {
          _id: "paymentUploadIntents:expired",
          userId: "student_payer",
          submissionKey: "expired",
          mimeType: "application/pdf",
          status: "pending",
          issuedAt: now - 20 * 60 * 1000,
          expiresAt: now - 5 * 60 * 1000,
        },
        {
          _id: "paymentUploadIntents:active",
          userId: "student_payer",
          submissionKey: "active",
          mimeType: "application/pdf",
          status: "pending",
          issuedAt: now,
          expiresAt: now + 5 * 60 * 1000,
        },
        {
          _id: "paymentUploadIntents:consumed-old",
          userId: "student_payer",
          submissionKey: "consumed-old",
          mimeType: "application/pdf",
          status: "consumed",
          issuedAt: now - 3 * 24 * 60 * 60 * 1000,
          expiresAt: now - 3 * 24 * 60 * 60 * 1000,
          consumedAt: now - 2 * 24 * 60 * 60 * 1000,
          storageId: "_storage:1",
        },
        {
          _id: "paymentUploadIntents:consumed-recent",
          userId: "student_payer",
          submissionKey: "consumed-recent",
          mimeType: "application/pdf",
          status: "consumed",
          issuedAt: now - 60 * 1000,
          expiresAt: now - 30 * 1000,
          consumedAt: now - 5 * 60 * 1000,
          storageId: "_storage:2",
        },
      ],
    },
  });

  const result = await cleanupStalePaymentUploadIntentsHandler(ctx);

  assert.deepEqual(result, {
    deletedExpired: 1,
    deletedConsumed: 1,
  });
  assert.deepEqual(
    tables.paymentUploadIntents.map((intent) => intent._id).sort(),
    ["paymentUploadIntents:active", "paymentUploadIntents:consumed-recent"],
  );
});

test("reviewPaymentRequest deletes rejected receipt blobs but preserves approved ones", async () => {
  const rejectedCtx = createMockConvexCtx({
    identity: { subject: "admin_user", email: "iwaleedh@gmail.com" },
    tables: {
      paymentRequests: [{
        _id: "paymentRequests:reject-me",
        userId: "student_payer",
        submissionKey: "submission-reject",
        plan: "monthly",
        amount: 100,
        storageId: "_storage:reject-me",
        fileName: "reject.pdf",
        mimeType: "application/pdf",
        status: "pending",
        submittedAt: 1,
      }],
    },
    storageFiles: {
      "_storage:reject-me": { contentType: "application/pdf", size: 1024 },
    },
  });

  await reviewPaymentRequestHandler(rejectedCtx.ctx, {
    requestId: "paymentRequests:reject-me",
    decision: "rejected",
    adminNotes: "Unreadable receipt",
  });

  assert.equal(rejectedCtx.tables.paymentRequests[0]?.status, "rejected");
  assert.ok(rejectedCtx.deletedStorageIds.has("_storage:reject-me"));

  const approvedCtx = createMockConvexCtx({
    identity: { subject: "admin_user", email: "iwaleedh@gmail.com" },
    tables: {
      users: [{
        _id: "users:student_payer",
        userId: "student_payer",
        username: "Payer",
        email: "payer@example.com",
        role: "student",
        accountStatus: "pending",
        createdAt: 1,
      }],
      paymentRequests: [{
        _id: "paymentRequests:approve-me",
        userId: "student_payer",
        submissionKey: "submission-approve",
        plan: "monthly",
        amount: 100,
        storageId: "_storage:approve-me",
        fileName: "approve.pdf",
        mimeType: "application/pdf",
        status: "pending",
        submittedAt: 1,
      }],
    },
    storageFiles: {
      "_storage:approve-me": { contentType: "application/pdf", size: 1024 },
    },
  });

  await reviewPaymentRequestHandler(approvedCtx.ctx, {
    requestId: "paymentRequests:approve-me",
    decision: "approved",
    adminNotes: "Looks good",
  });

  assert.equal(approvedCtx.tables.paymentRequests[0]?.status, "approved");
  assert.equal(approvedCtx.deletedStorageIds.has("_storage:approve-me"), false);
});