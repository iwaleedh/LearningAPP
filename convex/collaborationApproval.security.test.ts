import test from "node:test";
import assert from "node:assert/strict";

import { createLiveSession } from "./sessions";
import { respondToInvite } from "./invites";
import { requestJoin } from "./joinRequests";
import { getNotesWithAuthors } from "./gateway";
import { createMockConvexCtx } from "./testUtils";

const createLiveSessionHandler = (createLiveSession as any)._handler as (ctx: any, args: any) => Promise<any>;
const respondToInviteHandler = (respondToInvite as any)._handler as (ctx: any, args: any) => Promise<any>;
const requestJoinHandler = (requestJoin as any)._handler as (ctx: any, args: any) => Promise<any>;
const getNotesWithAuthorsHandler = (getNotesWithAuthors as any)._handler as (ctx: any, args: any) => Promise<any>;

function createPendingCtx(tables = {}) {
  return createMockConvexCtx({
    identity: {
      subject: "student_pending",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:student_pending",
          userId: "student_pending",
          username: "Pending Student",
          role: "student",
          accountStatus: "pending",
          createdAt: 1,
        },
      ],
      ...tables,
    },
  });
}

test("createLiveSession rejects a pending account before opening collaboration", async () => {
  const { ctx, tables } = createPendingCtx();

  await assert.rejects(
    () => createLiveSessionHandler(ctx, { hostUserId: undefined, paperId: "paper-1", title: "Pending session" }),
    /Account pending approval\./
  );

  assert.equal(tables.liveSessions?.length ?? 0, 0);
  assert.equal(tables.sessionParticipants?.length ?? 0, 0);
});

test("respondToInvite rejects a pending account before joining a session", async () => {
  const { ctx, tables } = createPendingCtx({
    sessionInvites: [
      {
        _id: "invite:1",
        sessionId: "session:1",
        fromUserId: "host_aaaaaa",
        toUserId: "student_pending",
        toUsername: "Pending Student",
        status: "pending",
        createdAt: 1,
      },
    ],
    liveSessions: [
      {
        _id: "session:1",
        hostUserId: "host_aaaaaa",
        paperId: "paper-1",
        title: "Shared paper",
        status: "active",
        createdAt: 1,
      },
    ],
  });

  await assert.rejects(
    () => respondToInviteHandler(ctx, { inviteId: "invite:1", accept: true, userId: undefined }),
    /Account pending approval\./
  );

  assert.equal(tables.sessionInvites[0]?.status, "pending");
  assert.equal(tables.sessionParticipants?.length ?? 0, 0);
});

test("requestJoin rejects a pending account from entering a live class", async () => {
  const { ctx, tables } = createPendingCtx({
    liveClassSessions: [
      {
        _id: "liveClassSessions:1",
        hostUserId: "teacher_aaaaaa",
        title: "Exam Clinic",
        backgroundType: "grid",
        status: "active",
        joinCode: "ABC123",
        autoAccept: false,
        createdAt: 1,
      },
    ],
  });

  await assert.rejects(
    () => requestJoinHandler(ctx, { sessionId: "liveClassSessions:1", studentName: "Pending Student", tempId: "temp-1" }),
    /Account pending approval\./
  );

  assert.equal(tables.classJoinRequests?.length ?? 0, 0);
});

test("getNotesWithAuthors rejects a pending account instead of exposing protected notes", async () => {
  const { ctx } = createPendingCtx({
    notes: [
      {
        _id: "notes:1",
        noteId: "note:chemistry:1:1:0",
        ownerUserId: "student_pending",
        subject: "chemistry",
        title: "Atoms",
        lastEditedAt: 1,
      },
    ],
  });

  await assert.rejects(
    () => getNotesWithAuthorsHandler(ctx, { subject: "chemistry" }),
    /Account pending approval\./
  );
});