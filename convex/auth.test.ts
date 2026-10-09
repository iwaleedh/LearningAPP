import test from "node:test";
import assert from "node:assert/strict";

import { getUser, registerUser, getAllUsers, searchUsers } from "./users";
import { getNote } from "./notes";
import { listFlashcards, deleteFlashcard } from "./flashcards";
import { getAssetsByNote, deleteNoteAsset } from "./assets";
import { queryLogs } from "./logs";
import { getNotesWithAuthors, getPlatformOverview } from "./gateway";
import { createMockConvexCtx } from "./testUtils";

const getUserHandler = (getUser as any)._handler as (ctx: any, args: any) => Promise<any>;
const registerUserHandler = (registerUser as any)._handler as (ctx: any, args: any) => Promise<any>;
const getAllUsersHandler = (getAllUsers as any)._handler as (ctx: any, args: any) => Promise<any>;
const searchUsersHandler = (searchUsers as any)._handler as (ctx: any, args: any) => Promise<any>;
const getNoteHandler = (getNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const listFlashcardsHandler = (listFlashcards as any)._handler as (ctx: any, args: any) => Promise<any>;
const deleteFlashcardHandler = (deleteFlashcard as any)._handler as (ctx: any, args: any) => Promise<any>;
const getAssetsByNoteHandler = (getAssetsByNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const deleteNoteAssetHandler = (deleteNoteAsset as any)._handler as (ctx: any, args: any) => Promise<any>;
const queryLogsHandler = (queryLogs as any)._handler as (ctx: any, args: any) => Promise<any>;
const getNotesWithAuthorsHandler = (getNotesWithAuthors as any)._handler as (ctx: any, args: any) => Promise<any>;
const getPlatformOverviewHandler = (getPlatformOverview as any)._handler as (ctx: any, args: any) => Promise<any>;

test("teacher getUser returns only the public summary for another user", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "teacher_aaaaaa",
      role: "teacher",
    },
    tables: {
      users: [
        {
          _id: "users:teacher",
          userId: "teacher_aaaaaa",
          username: "Teacher",
          role: "teacher",
          email: "teacher@example.com",
          createdAt: 1,
        },
        {
          _id: "users:student",
          userId: "student_bbbbbb",
          username: "Student",
          role: "student",
          email: "student@example.com",
          avatarUrl: "https://example.com/avatar.png",
          createdAt: 2,
        },
      ],
    },
  });

  const result = await getUserHandler(ctx, { userId: "student_bbbbbb" });

  assert.deepEqual(result, {
    userId: "student_bbbbbb",
    username: "Student",
    role: "student",
    avatarUrl: "https://example.com/avatar.png",
  });
});

test("student getUser cannot read another user's private record", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:one",
          userId: "student_aaaaaa",
          username: "Student One",
          role: "student",
          createdAt: 1,
        },
        {
          _id: "users:two",
          userId: "student_bbbbbb",
          username: "Student Two",
          role: "student",
          email: "two@example.com",
          createdAt: 2,
        },
      ],
    },
  });

  const result = await getUserHandler(ctx, { userId: "student_bbbbbb" });

  assert.equal(result, null);
});

test("pending student getUser cannot inspect another user's summary", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_pending",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:pending",
          userId: "student_pending",
          username: "Pending Student",
          role: "student",
          accountStatus: "pending",
          createdAt: 1,
        },
        {
          _id: "users:teacher",
          userId: "teacher_aaaaaa",
          username: "Teacher",
          role: "teacher",
          createdAt: 2,
        },
      ],
    },
  });

  await assert.rejects(
    () => getUserHandler(ctx, { userId: "teacher_aaaaaa" }),
    /Account pending approval\./
  );
});

test("searchUsers rejects a pending caller before exposing directory results", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_pending",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:pending",
          userId: "student_pending",
          username: "Pending Student",
          role: "student",
          accountStatus: "pending",
          createdAt: 1,
        },
        {
          _id: "users:teacher",
          userId: "teacher_aaaaaa",
          username: "Teacher Alpha",
          role: "teacher",
          createdAt: 2,
        },
      ],
    },
  });

  await assert.rejects(
    () => searchUsersHandler(ctx, { search: "teach", limit: 5 }),
    /Account pending approval\./
  );
});

test("getAllUsers rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:one",
          userId: "student_aaaaaa",
          username: "Student One",
          role: "student",
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(() => getAllUsersHandler(ctx, {}), /Teacher access required\./);
});

test("registerUser canonicalizes conflicting usernames and publishes registration", async () => {
  const { ctx, tables, schedulerCalls } = createMockConvexCtx({
    identity: {
      subject: "user_bbbbbb",
      role: "student",
      email: "new@example.com",
    },
    tables: {
      users: [
        {
          _id: "users:existing",
          userId: "user_aaaaaa",
          username: "Alice",
          role: "student",
          createdAt: 1,
        },
      ],
    },
  });

  const insertedId = await registerUserHandler(ctx, {
    username: "Alice",
    email: "new@example.com",
    avatarUrl: undefined,
    userId: undefined,
  });

  const insertedUser = tables.users.find((row) => row._id === insertedId);
  assert.ok(insertedUser);
  assert.equal(insertedUser?.username, "Alice_bbbbbb");
  assert.equal(insertedUser?.userId, "user_bbbbbb");
  assert.equal(insertedUser?.email, "new@example.com");
  assert.equal(insertedUser?.accountStatus, "approved");
  assert.equal(schedulerCalls.length, 1);
  assert.deepEqual(schedulerCalls[0]?.args, {
    topic: "user:registered",
    payload: JSON.stringify({ userId: "user_bbbbbb", username: "Alice" }),
  });
});

test("getNote returns only the current user's row for a shared note id", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
      notes: [
        {
          _id: "notes:mine",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_aaaaaa",
          subject: "chemistry",
          title: "Mine",
          subtopicTitle: "Topic",
          breadcrumbs: "A > B",
          contentJson: "{}",
          confidenceScore: 3,
          estimatedReadMinutes: 8,
          createdAt: 1,
          lastEditedAt: 2,
        },
        {
          _id: "notes:other",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_bbbbbb",
          subject: "chemistry",
          title: "Other",
          subtopicTitle: "Topic",
          breadcrumbs: "A > B",
          contentJson: "{}",
          confidenceScore: 2,
          estimatedReadMinutes: 6,
          createdAt: 1,
          lastEditedAt: 2,
        },
      ],
    },
  });

  const note = await getNoteHandler(ctx, { noteId: "note:chemistry:1:1:0" });

  assert.equal(note?._id, "notes:mine");
  assert.equal(note?.title, "Mine");
});

test("listFlashcards rejects requests for another owner user id", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
    },
  });

  await assert.rejects(
    () => listFlashcardsHandler(ctx, { ownerUserId: "student_bbbbbb", subject: undefined }),
    /Not authorized to act as another user\./
  );
});

test("deleteFlashcard leaves another user's card with the same card id untouched", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
      flashcards: [
        {
          _id: "flashcards:mine",
          cardId: "card-1",
          ownerUserId: "student_aaaaaa",
          subject: "chemistry",
          sourceNoteId: "note:chemistry:1:1:0",
          sourceLabel: "Mine",
          front: "Q1",
          back: "A1",
          createdAt: 1,
        },
        {
          _id: "flashcards:other",
          cardId: "card-1",
          ownerUserId: "student_bbbbbb",
          subject: "chemistry",
          sourceNoteId: "note:chemistry:1:1:0",
          sourceLabel: "Other",
          front: "Q2",
          back: "A2",
          createdAt: 2,
        },
      ],
    },
  });

  await deleteFlashcardHandler(ctx, { cardId: "card-1" });

  assert.equal(tables.flashcards.length, 1);
  assert.equal(tables.flashcards[0]?._id, "flashcards:other");
});

test("getAssetsByNote returns only the current user's assets for the note", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
      noteAssets: [
        {
          _id: "noteAssets:mine",
          assetId: "asset-1",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_aaaaaa",
          assetType: "image",
          data: "mine",
          createdAt: 1,
        },
        {
          _id: "noteAssets:other",
          assetId: "asset-2",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_bbbbbb",
          assetType: "image",
          data: "other",
          createdAt: 2,
        },
      ],
    },
  });

  const assets = await getAssetsByNoteHandler(ctx, { noteId: "note:chemistry:1:1:0" });

  assert.equal(assets.length, 1);
  assert.equal(assets[0]?._id, "noteAssets:mine");
});

test("deleteNoteAsset leaves another user's asset with the same asset id untouched", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
      noteAssets: [
        {
          _id: "noteAssets:mine",
          assetId: "asset-1",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_aaaaaa",
          assetType: "image",
          data: "mine",
          createdAt: 1,
        },
        {
          _id: "noteAssets:other",
          assetId: "asset-1",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_bbbbbb",
          assetType: "image",
          data: "other",
          createdAt: 2,
        },
      ],
    },
  });

  await deleteNoteAssetHandler(ctx, { assetId: "asset-1" });

  assert.equal(tables.noteAssets.length, 1);
  assert.equal(tables.noteAssets[0]?._id, "noteAssets:other");
});

test("queryLogs rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
    },
  });

  await assert.rejects(
    () => queryLogsHandler(ctx, { level: undefined, component: undefined, limit: undefined }),
    /Teacher access required\./
  );
});

test("getNotesWithAuthors returns only the current student's notes", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      notes: [
        {
          _id: "notes:mine",
          noteId: "note:chemistry:1:1:0",
          ownerUserId: "student_aaaaaa",
          subject: "chemistry",
          title: "Mine",
          subtopicTitle: "Topic",
          breadcrumbs: "A > B",
          contentJson: "{}",
          confidenceScore: 3,
          estimatedReadMinutes: 8,
          createdAt: 1,
          lastEditedAt: 10,
        },
        {
          _id: "notes:other",
          noteId: "note:chemistry:1:1:1",
          ownerUserId: "student_bbbbbb",
          subject: "chemistry",
          title: "Other",
          subtopicTitle: "Topic",
          breadcrumbs: "A > B",
          contentJson: "{}",
          confidenceScore: 2,
          estimatedReadMinutes: 6,
          createdAt: 2,
          lastEditedAt: 20,
        },
      ],
      users: [
        {
          _id: "users:mine",
          userId: "student_aaaaaa",
          username: "Me",
          role: "student",
          createdAt: 1,
        },
        {
          _id: "users:other",
          userId: "student_bbbbbb",
          username: "Other",
          role: "student",
          createdAt: 2,
        },
      ],
    },
  });

  const notes = await getNotesWithAuthorsHandler(ctx, { subject: "chemistry" });

  assert.equal(notes.length, 1);
  assert.equal(notes[0]?.noteId, "note:chemistry:1:1:0");
  assert.equal(notes[0]?.authorUsername, "Me");
});

test("getPlatformOverview rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
    },
    tables: {
      users: [{ _id: "users:student_aaaaaa", userId: "student_aaaaaa", username: "Student", role: "student", createdAt: 1 }],
    },
  });

  await assert.rejects(() => getPlatformOverviewHandler(ctx, {}), /Teacher access required\./);
});

test("getPlatformOverview allows the configured admin email", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
      role: "student",
    },
    tables: {
      users: [{
        _id: "users:admin_user",
        userId: "admin_user",
        username: "Admin",
        email: "iwaleedh@gmail.com",
        role: "student",
        accountStatus: "approved",
        createdAt: 1,
      }],
    },
  });

  await assert.doesNotReject(() => getPlatformOverviewHandler(ctx, {}));
});
