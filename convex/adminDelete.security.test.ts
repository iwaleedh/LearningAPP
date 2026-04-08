import test from "node:test";
import assert from "node:assert/strict";

import { deleteUser } from "./admin";
import { createMockConvexCtx } from "./testUtils";

const deleteUserHandler = (deleteUser as any)._handler as (ctx: any, args: { userId: string }) => Promise<void>;

test("deleteUser rejects attempts to delete admin accounts", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "admin_actor",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:admin-target",
        userId: "admin_target",
        username: "admin",
        role: "admin",
        email: "other@example.com",
        accountStatus: "approved",
        createdAt: 1,
      }],
      paymentRequests: [],
      authSessions: [],
      paymentUploadIntents: [],
      auditLogs: [],
    },
  });

  await assert.rejects(
    () => deleteUserHandler(ctx, { userId: "admin_target" }),
    /Admin accounts cannot be deleted\./
  );
});

test("deleteUser removes a normal user and associated records", async () => {
  const { ctx, tables, deletedStorageIds } = createMockConvexCtx({
    identity: {
      subject: "admin_actor",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:student-target",
        userId: "student_target",
        username: "Target Student",
        role: "student",
        email: "target@example.com",
        accountStatus: "approved",
        createdAt: 1,
      }],
      paymentRequests: [{
        _id: "paymentRequests:1",
        userId: "student_target",
        storageId: "_storage:delete-me",
      }],
      authSessions: [{
        _id: "authSessions:1",
        userId: "student_target",
        sessionId: "sess_1",
        provider: "clerk",
        sessionVersion: 1,
        createdAt: 1,
        lastSeenAt: 1,
      }],
      paymentUploadIntents: [{
        _id: "paymentUploadIntents:1",
        userId: "student_target",
        submissionKey: "submission-1",
        mimeType: "application/pdf",
        status: "pending",
        createdAt: 1,
        expiresAt: 2,
      }],
      auditLogs: [],
    },
    storageFiles: {
      "_storage:delete-me": {
        contentType: "application/pdf",
        size: 1024,
      },
    },
  });

  await deleteUserHandler(ctx, { userId: "student_target" });

  assert.deepEqual(tables.users, []);
  assert.deepEqual(tables.paymentRequests, []);
  assert.deepEqual(tables.authSessions, []);
  assert.deepEqual(tables.paymentUploadIntents, []);
  assert.equal(deletedStorageIds.has("_storage:delete-me"), true);
  assert.equal(tables.auditLogs.length, 1);
  assert.equal(tables.auditLogs[0]?.action, "DELETE_USER");
  assert.equal(tables.auditLogs[0]?.targetId, "student_target");
});