import test from "node:test";
import assert from "node:assert/strict";

import { addStroke, updateStroke } from "./strokes";
import { createMockConvexCtx } from "./testUtils";

const addStrokeHandler = (addStroke as any)._handler as (ctx: any, args: any) => Promise<any>;
const updateStrokeHandler = (updateStroke as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildStrokeCtx() {
  return createMockConvexCtx({
    identity: { subject: "student_artist", role: "student" },
    tables: {
      users: [{
        _id: "users:student_artist",
        userId: "student_artist",
        username: "Artist",
        role: "student",
        accountStatus: "approved",
        createdAt: 1,
      }],
      liveSessions: [{
        _id: "session:1",
        hostUserId: "student_artist",
        paperId: "paper-1",
        title: "Paper",
        status: "active",
        createdAt: 1,
      }],
      sessionParticipants: [{
        _id: "sessionParticipants:host",
        sessionId: "session:1",
        userId: "student_artist",
        role: "host",
        joinedAt: 1,
      }],
      annotationStrokes: [{
        _id: "stroke:1",
        sessionId: "session:1",
        pageNumber: 1,
        userId: "student_artist",
        fabricObjectJson: JSON.stringify({ type: "path", data: { strokeClientId: "client-1" } }),
        createdAt: 1,
        updatedAt: 1,
      }],
    },
  });
}

test("addStroke rejects invalid page numbers before insert", async () => {
  const { ctx, tables } = buildStrokeCtx();

  await assert.rejects(
    () => addStrokeHandler(ctx, {
      sessionId: "session:1",
      pageNumber: 0,
      userId: undefined,
      fabricObjectJson: "{",
    }),
    /pageNumber must be an integer between 1 and 10000\./
  );

  assert.equal(tables.annotationStrokes.length, 1);
});

test("addStroke rejects malformed JSON payloads before insert", async () => {
  const { ctx, tables } = buildStrokeCtx();

  await assert.rejects(
    () => addStrokeHandler(ctx, {
      sessionId: "session:1",
      pageNumber: 1,
      userId: undefined,
      fabricObjectJson: "{",
    }),
    /fabricObjectJson must be valid JSON\./
  );

  assert.equal(tables.annotationStrokes.length, 1);
});

test("addStroke rejects oversized stroke payloads before insert", async () => {
  const { ctx, tables } = buildStrokeCtx();
  const oversized = JSON.stringify({ type: "path", payload: "x".repeat(140000) });

  await assert.rejects(
    () => addStrokeHandler(ctx, {
      sessionId: "session:1",
      pageNumber: 1,
      userId: undefined,
      fabricObjectJson: oversized,
    }),
    /fabricObjectJson exceeds 131072 bytes\./
  );

  assert.equal(tables.annotationStrokes.length, 1);
});

test("addStroke and updateStroke normalize valid object JSON before persistence", async () => {
  const { ctx, tables } = buildStrokeCtx();

  await addStrokeHandler(ctx, {
    sessionId: "session:1",
    pageNumber: 2,
    userId: undefined,
    fabricObjectJson: '{  "type": "path", "data": { "strokeClientId": "client-2" } }',
  });

  await updateStrokeHandler(ctx, {
    strokeId: "stroke:1",
    fabricObjectJson: '{"type":"path","data":{"strokeClientId":"client-1","revised":true}}',
  });

  assert.deepEqual(JSON.parse(tables.annotationStrokes[1]?.fabricObjectJson), {
    type: "path",
    data: { strokeClientId: "client-2" },
  });
  assert.deepEqual(JSON.parse(tables.annotationStrokes[0]?.fabricObjectJson), {
    type: "path",
    data: { strokeClientId: "client-1", revised: true },
  });
});

test("updateStroke rejects non-object JSON payloads", async () => {
  const { ctx, tables } = buildStrokeCtx();

  await assert.rejects(
    () => updateStrokeHandler(ctx, {
      strokeId: "stroke:1",
      fabricObjectJson: '"primitive"',
    }),
    /fabricObjectJson must serialize an object\./
  );

  assert.deepEqual(JSON.parse(tables.annotationStrokes[0]?.fabricObjectJson), {
    type: "path",
    data: { strokeClientId: "client-1" },
  });
});