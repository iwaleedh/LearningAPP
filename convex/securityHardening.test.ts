import test from "node:test";
import assert from "node:assert/strict";

import { recordAttempt } from "./studyAttempts";
import { getSessionByStringId } from "./sessions";
import { getCurrentUserRole } from "./authHelpers";
import { internalPublish, publish } from "./eventBus";
import { validateEventPayload } from "./eventSchemas";
import { EVENT_TOPICS } from "./eventTopics";
import { createMockConvexCtx } from "./testUtils";

const recordAttemptHandler = (recordAttempt as any)._handler as (ctx: any, args: any) => Promise<any>;
const getSessionByStringIdHandler = (getSessionByStringId as any)._handler as (ctx: any, args: any) => Promise<any>;
const internalPublishHandler = (internalPublish as any)._handler as (ctx: any, args: any) => Promise<any>;
const publishHandler = (publish as any)._handler as (ctx: any, args: any) => Promise<any>;

test("recordAttempt clamps scorePercent and durationSeconds server-side", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: { subject: "student_aaaaaa", role: "student" },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
    },
  });

  await recordAttemptHandler(ctx, {
    sourceType: "exercise",
    activityType: "keyword",
    subject: "chemistry",
    questionKey: "kw-1",
    prompt: "Define ionic bonding",
    scorePercent: 999,
    durationSeconds: -5,
  });

  assert.equal(tables.studyAttempts[0]?.scorePercent, 100);
  assert.equal(tables.studyAttempts[0]?.durationSeconds, 0);
});

test("recordAttempt rejects non-finite scorePercent", async () => {
  const { ctx } = createMockConvexCtx({
    identity: { subject: "student_aaaaaa", role: "student" },
    tables: {
      users: [{ _id: "users:student_aaaaaa_nan", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
    },
  });

  await assert.rejects(
    () => recordAttemptHandler(ctx, {
      sourceType: "exercise",
      activityType: "keyword",
      subject: "chemistry",
      questionKey: "kw-1",
      prompt: "Define ionic bonding",
      scorePercent: Number.NaN,
    }),
    /scorePercent must be a finite number\./
  );
});

test("getCurrentUserRole ignores JWT role claims and trusts the database", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "user_123",
      role: "teacher",
      appRole: "teacher",
      publicMetadata: { role: "teacher" },
    },
    tables: {
      users: [{
        _id: "users:1",
        userId: "user_123",
        username: "Student",
        role: "student",
        createdAt: 1,
      }],
    },
  });

  const role = await getCurrentUserRole(ctx as any);
  assert.equal(role, "student");
});

test("getSessionByStringId rejects an unrelated teacher for a session they do not host or join", async () => {
  const { ctx } = createMockConvexCtx({
    identity: { subject: "teacher_intruder", role: "teacher" },
    tables: {
      users: [{
        _id: "users:teacher",
        userId: "teacher_intruder",
        username: "Intruder",
        role: "teacher",
        createdAt: 1,
      }],
      liveSessions: [{
        _id: "session:1",
        hostUserId: "host_aaaaaa",
        paperId: "paper-1",
        title: "Paper",
        status: "active",
        createdAt: 1,
      }],
      sessionParticipants: [{
        _id: "sessionParticipants:host",
        sessionId: "session:1",
        userId: "host_aaaaaa",
        role: "host",
        joinedAt: 1,
      }],
    },
  });

  await assert.rejects(
    () => getSessionByStringIdHandler(ctx, { sessionId: "session:1" }),
    /You do not have access to this session\./
  );
});

test("getSessionByStringId still allows an admitted participant", async () => {
  const { ctx } = createMockConvexCtx({
    identity: { subject: "student_bbbbbb", role: "student" },
    tables: {
      users: [{ _id: "users:student_bbbbbb", userId: "student_bbbbbb", username: "Student", role: "student", createdAt: 1 }],
      liveSessions: [{
        _id: "session:1",
        hostUserId: "host_aaaaaa",
        paperId: "paper-1",
        title: "Paper",
        status: "active",
        createdAt: 1,
      }],
      sessionParticipants: [{
        _id: "sessionParticipants:participant",
        sessionId: "session:1",
        userId: "student_bbbbbb",
        role: "editor",
        joinedAt: 1,
      }],
    },
  });

  const result = await getSessionByStringIdHandler(ctx, { sessionId: "session:1" });
  assert.equal(result?._id, "session:1");
});

test("validateEventPayload rejects malformed webhook payloads", () => {
  assert.throws(
    () => validateEventPayload(EVENT_TOPICS.EXTERNAL_NOTIFICATION, { title: "Alert" }),
    /notificationId/
  );
});

test("internalPublish rejects unknown topics and stores validated internal payloads", async () => {
  const { ctx, tables } = createMockConvexCtx({ identity: null });

  await assert.rejects(
    () => internalPublishHandler(ctx, {
      topic: "evil:topic",
      payload: JSON.stringify({ any: "thing" }),
    }),
    /not allowed for internal publishing/
  );

  await internalPublishHandler(ctx, {
    topic: EVENT_TOPICS.USER_REGISTERED,
    payload: JSON.stringify({ userId: "user_1", username: "Alice" }),
  });

  assert.equal(tables.events.length, 1);
  assert.equal(tables.events[0]?.topic, EVENT_TOPICS.USER_REGISTERED);
  assert.deepEqual(JSON.parse(tables.events[0]?.payload), {
    userId: "user_1",
    username: "Alice",
  });
});

test("publish only allows public topics and validates JSON payload shape", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: { subject: "teacher_1", role: "teacher" },
    tables: {
      users: [{
        _id: "users:teacher",
        userId: "teacher_1",
        username: "Teacher",
        role: "teacher",
        createdAt: 1,
      }],
    },
  });

  await assert.rejects(
    () => publishHandler(ctx, {
      topic: EVENT_TOPICS.SESSION_ENDED,
      payload: JSON.stringify({ sessionId: "session:1", hostUserId: "teacher_1" }),
    }),
    /not allowed for client publishing/
  );

  await publishHandler(ctx, {
    topic: EVENT_TOPICS.ADMIN_BROADCAST,
    payload: JSON.stringify({ message: "Scheduled maintenance", urgent: true }),
  });

  assert.equal(tables.events.length, 1);
  assert.equal(tables.events[0]?.topic, EVENT_TOPICS.ADMIN_BROADCAST);
});