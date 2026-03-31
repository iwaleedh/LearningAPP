import test from "node:test";
import assert from "node:assert/strict";

import { getUser, registerUser, getAllUsers } from "./users";
import { getNote } from "./notes";
import { listFlashcards, deleteFlashcard } from "./flashcards";
import { getAssetsByNote, deleteNoteAsset } from "./assets";
import { updateStroke, deleteStroke } from "./strokes";
import { joinSession, getActiveSessions } from "./sessions";
import { respondToInvite, getMyPendingInvites } from "./invites";
import {
  getLiveClassById,
  joinLiveClass,
  createLiveClass,
  endLiveClass,
  setAutoAccept,
} from "./liveclass";
import {
  requestJoin,
  getJoinRequests,
  getStudentJoinStatus,
  updateStudentNote,
  getStudentNote,
  getStudentName,
} from "./joinRequests";
import { raiseHand, getHandRaisesByClass } from "./handraises";
import { queryLogs } from "./logs";
import { getNotesWithAuthors, getPlatformOverview } from "./gateway";
import { createMockConvexCtx } from "./testUtils";

const getUserHandler = (getUser as any)._handler as (ctx: any, args: any) => Promise<any>;
const registerUserHandler = (registerUser as any)._handler as (ctx: any, args: any) => Promise<any>;
const getAllUsersHandler = (getAllUsers as any)._handler as (ctx: any, args: any) => Promise<any>;
const getNoteHandler = (getNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const listFlashcardsHandler = (listFlashcards as any)._handler as (ctx: any, args: any) => Promise<any>;
const deleteFlashcardHandler = (deleteFlashcard as any)._handler as (ctx: any, args: any) => Promise<any>;
const getAssetsByNoteHandler = (getAssetsByNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const deleteNoteAssetHandler = (deleteNoteAsset as any)._handler as (ctx: any, args: any) => Promise<any>;
const updateStrokeHandler = (updateStroke as any)._handler as (ctx: any, args: any) => Promise<any>;
const deleteStrokeHandler = (deleteStroke as any)._handler as (ctx: any, args: any) => Promise<any>;
const joinSessionHandler = (joinSession as any)._handler as (ctx: any, args: any) => Promise<any>;
const getActiveSessionsHandler = (getActiveSessions as any)._handler as (ctx: any, args: any) => Promise<any>;
const respondToInviteHandler = (respondToInvite as any)._handler as (ctx: any, args: any) => Promise<any>;
const getMyPendingInvitesHandler = (getMyPendingInvites as any)._handler as (ctx: any, args: any) => Promise<any>;
const getLiveClassByIdHandler = (getLiveClassById as any)._handler as (ctx: any, args: any) => Promise<any>;
const joinLiveClassHandler = (joinLiveClass as any)._handler as (ctx: any, args: any) => Promise<any>;
const createLiveClassHandler = (createLiveClass as any)._handler as (ctx: any, args: any) => Promise<any>;
const endLiveClassHandler = (endLiveClass as any)._handler as (ctx: any, args: any) => Promise<any>;
const setAutoAcceptHandler = (setAutoAccept as any)._handler as (ctx: any, args: any) => Promise<any>;
const requestJoinHandler = (requestJoin as any)._handler as (ctx: any, args: any) => Promise<any>;
const getJoinRequestsHandler = (getJoinRequests as any)._handler as (ctx: any, args: any) => Promise<any>;
const getStudentJoinStatusHandler = (getStudentJoinStatus as any)._handler as (ctx: any, args: any) => Promise<any>;
const updateStudentNoteHandler = (updateStudentNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const getStudentNoteHandler = (getStudentNote as any)._handler as (ctx: any, args: any) => Promise<any>;
const getStudentNameHandler = (getStudentName as any)._handler as (ctx: any, args: any) => Promise<any>;
const raiseHandHandler = (raiseHand as any)._handler as (ctx: any, args: any) => Promise<any>;
const getHandRaisesByClassHandler = (getHandRaisesByClass as any)._handler as (ctx: any, args: any) => Promise<any>;
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

test("updateStroke rejects a non-owner participant who is not host or teacher", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "participant_bbb",
      role: "student",
    },
    tables: {
      liveSessions: [
        {
          _id: "session:1",
          hostUserId: "host_aaaaaa",
          paperId: "paper-1",
          title: "Paper",
          status: "active",
          createdAt: 1,
        },
      ],
      sessionParticipants: [
        {
          _id: "sessionParticipants:host",
          sessionId: "session:1",
          userId: "host_aaaaaa",
          role: "host",
          joinedAt: 1,
        },
        {
          _id: "sessionParticipants:participant",
          sessionId: "session:1",
          userId: "participant_bbb",
          role: "editor",
          joinedAt: 2,
        },
      ],
      annotationStrokes: [
        {
          _id: "stroke:1",
          sessionId: "session:1",
          pageNumber: 1,
          userId: "owner_cccccc",
          fabricObjectJson: "{\"kind\":\"old\"}",
          createdAt: 1,
          updatedAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () =>
      updateStrokeHandler(ctx, {
        strokeId: "stroke:1",
        fabricObjectJson: "{\"kind\":\"new\"}",
      }),
    /Teacher or host access required\./
  );

  assert.equal(tables.annotationStrokes[0]?.fabricObjectJson, "{\"kind\":\"old\"}");
});

test("deleteStroke allows the host to remove another participant's stroke", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "host_aaaaaa",
      role: "student",
    },
    tables: {
      liveSessions: [
        {
          _id: "session:1",
          hostUserId: "host_aaaaaa",
          paperId: "paper-1",
          title: "Paper",
          status: "active",
          createdAt: 1,
        },
      ],
      sessionParticipants: [
        {
          _id: "sessionParticipants:host",
          sessionId: "session:1",
          userId: "host_aaaaaa",
          role: "host",
          joinedAt: 1,
        },
      ],
      annotationStrokes: [
        {
          _id: "stroke:1",
          sessionId: "session:1",
          pageNumber: 1,
          userId: "owner_cccccc",
          fabricObjectJson: "{\"kind\":\"old\"}",
          createdAt: 1,
          updatedAt: 1,
        },
      ],
    },
  });

  await deleteStrokeHandler(ctx, { strokeId: "stroke:1" });

  assert.equal(tables.annotationStrokes.length, 0);
});

test("joinSession rejects a signed-in user who has not been admitted", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      liveSessions: [
        {
          _id: "session:1",
          hostUserId: "host_aaaaaa",
          paperId: "paper-1",
          title: "Paper",
          status: "active",
          createdAt: 1,
        },
      ],
      sessionParticipants: [
        {
          _id: "sessionParticipants:host",
          sessionId: "session:1",
          userId: "host_aaaaaa",
          role: "host",
          joinedAt: 1,
        },
      ],
      users: [
        {
          _id: "users:student",
          userId: "student_bbbbbb",
          username: "Student",
          role: "student",
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => joinSessionHandler(ctx, { sessionId: "session:1", userId: undefined }),
    /You do not have access to this session\./
  );

  assert.equal(tables.sessionParticipants.length, 1);
});

test("respondToInvite rejects a user when the invite is addressed to someone else", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:me",
          userId: "student_bbbbbb",
          username: "Me",
          role: "student",
          createdAt: 1,
        },
      ],
      sessionInvites: [
        {
          _id: "invite:1",
          sessionId: "session:1",
          fromUserId: "host_aaaaaa",
          toUserId: "student_other",
          toUsername: "Other",
          status: "pending",
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => respondToInviteHandler(ctx, { inviteId: "invite:1", accept: true, userId: undefined }),
    /This invite is not addressed to you\./
  );

  assert.equal(tables.sessionInvites[0]?.status, "pending");
});

test("respondToInvite accepts a live class invite and joins as a viewer", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:me",
          userId: "student_bbbbbb",
          username: "Me",
          role: "student",
          createdAt: 1,
        },
      ],
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_aaaaaa",
          title: "Live Class",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: false,
          createdAt: 1,
        },
      ],
      sessionInvites: [
        {
          _id: "invite:1",
          sessionId: "liveClassSessions:1",
          fromUserId: "teacher_aaaaaa",
          toUserId: "student_bbbbbb",
          toUsername: "Me",
          status: "pending",
          createdAt: 1,
        },
      ],
    },
  });

  await respondToInviteHandler(ctx, { inviteId: "invite:1", accept: true, userId: undefined });

  assert.equal(tables.sessionInvites[0]?.status, "accepted");
  assert.deepEqual(tables.sessionParticipants[0], {
    _id: tables.sessionParticipants[0]?._id,
    sessionId: "liveClassSessions:1",
    userId: "student_bbbbbb",
    role: "viewer",
    joinedAt: tables.sessionParticipants[0]?.joinedAt,
  });
});

test("getMyPendingInvites returns both user-targeted and legacy username-targeted invites", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:me",
          userId: "student_bbbbbb",
          username: "Me",
          role: "student",
          createdAt: 1,
        },
        {
          _id: "users:teacher",
          userId: "teacher_aaaaaa",
          username: "Teacher",
          role: "teacher",
          avatarUrl: "https://example.com/teacher.png",
          createdAt: 1,
        },
      ],
      sessionInvites: [
        {
          _id: "invite:1",
          sessionId: "session:1",
          fromUserId: "teacher_aaaaaa",
          toUserId: "student_bbbbbb",
          toUsername: "Me",
          status: "pending",
          createdAt: 1,
        },
        {
          _id: "invite:2",
          sessionId: "session:2",
          fromUserId: "teacher_aaaaaa",
          toUsername: "Me",
          status: "pending",
          createdAt: 2,
        },
        {
          _id: "invite:3",
          sessionId: "session:3",
          fromUserId: "teacher_aaaaaa",
          toUserId: "someone_else",
          toUsername: "Other",
          status: "pending",
          createdAt: 3,
        },
      ],
    },
  });

  const invites = await getMyPendingInvitesHandler(ctx, { toUsername: undefined });

  assert.equal(invites.length, 2);
  assert.deepEqual(
    invites.map((invite: any) => String(invite._id)).sort(),
    ["invite:1", "invite:2"]
  );
  assert.equal(invites[0]?.fromUsername, "Teacher");
});

test("getMyPendingInvites rejects requests for another username", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      users: [
        {
          _id: "users:me",
          userId: "student_bbbbbb",
          username: "Me",
          role: "student",
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => getMyPendingInvitesHandler(ctx, { toUsername: "Other" }),
    /You can only view your own invites\./
  );
});

test("getLiveClassById returns only the preview for a user without admission", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
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
    },
  });

  const result = await getLiveClassByIdHandler(ctx, { classId: "liveClassSessions:1" });

  assert.deepEqual(result, {
    _id: "liveClassSessions:1",
    title: "Exam Clinic",
    status: "active",
  });
});

test("joinLiveClass allows a student with an accepted join request", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Student",
          tempId: "temp-1",
          requesterUserId: "student_bbbbbb",
          status: "accepted",
          requestedAt: 1,
        },
      ],
    },
  });

  await joinLiveClassHandler(ctx, { classId: "liveClassSessions:1", userId: undefined });

  assert.deepEqual(tables.sessionParticipants[0], {
    _id: tables.sessionParticipants[0]?._id,
    sessionId: "liveClassSessions:1",
    userId: "student_bbbbbb",
    role: "viewer",
    joinedAt: tables.sessionParticipants[0]?.joinedAt,
  });
});

test("createLiveClass rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
  });

  await assert.rejects(
    () =>
      createLiveClassHandler(ctx, {
        hostUserId: undefined,
        title: "Exam Clinic",
        backgroundType: "grid",
      }),
    /Teacher access required\./
  );
});

test("createLiveClass rejects creating a class for another host", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "teacher_aaaaaa",
      role: "teacher",
    },
  });

  await assert.rejects(
    () =>
      createLiveClassHandler(ctx, {
        hostUserId: "teacher_other",
        title: "Exam Clinic",
        backgroundType: "grid",
      }),
    /Not authorized to create a class for another host\./
  );
});

test("endLiveClass allows a teacher to end another host's class", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "teacher_admin",
      role: "teacher",
    },
    tables: {
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_host",
          title: "Exam Clinic",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: false,
          createdAt: 1,
        },
      ],
    },
  });

  await endLiveClassHandler(ctx, { classId: "liveClassSessions:1" });

  assert.equal(tables.liveClassSessions[0]?.status, "ended");
});

test("setAutoAccept rejects a non-host participant", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_viewer",
      role: "student",
    },
    tables: {
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_host",
          title: "Exam Clinic",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: false,
          createdAt: 1,
        },
      ],
      sessionParticipants: [
        {
          _id: "sessionParticipants:1",
          sessionId: "liveClassSessions:1",
          userId: "student_viewer",
          role: "viewer",
          joinedAt: 2,
        },
      ],
    },
  });

  await assert.rejects(
    () => setAutoAcceptHandler(ctx, { classId: "liveClassSessions:1", autoAccept: true }),
    /Teacher or host access required\./
  );

  assert.equal(tables.liveClassSessions[0]?.autoAccept, false);
});

test("raiseHand rejects a student who is not admitted to the class", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_intruder",
      role: "student",
    },
    tables: {
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_host",
          title: "Exam Clinic",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: false,
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => raiseHandHandler(ctx, { classId: "liveClassSessions:1", studentUserId: undefined }),
    /You do not have access to this session\./
  );

  assert.equal(tables.handRaises?.length ?? 0, 0);
});

test("getHandRaisesByClass rejects a viewer participant", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_viewer",
      role: "student",
    },
    tables: {
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_host",
          title: "Exam Clinic",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: false,
          createdAt: 1,
        },
      ],
      sessionParticipants: [
        {
          _id: "sessionParticipants:1",
          sessionId: "liveClassSessions:1",
          userId: "student_viewer",
          role: "viewer",
          joinedAt: 2,
        },
      ],
      handRaises: [
        {
          _id: "handRaises:1",
          classId: "liveClassSessions:1",
          studentUserId: "student_other",
          status: "raised",
          raisedAt: 3,
        },
      ],
    },
  });

  await assert.rejects(
    () => getHandRaisesByClassHandler(ctx, { classId: "liveClassSessions:1" }),
    /Teacher or host access required\./
  );
});

test("queryLogs rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_aaaaaa",
      role: "student",
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
  });

  await assert.rejects(() => getPlatformOverviewHandler(ctx, {}), /Teacher access required\./);
});

test("getActiveSessions rejects a student caller", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      liveSessions: [
        {
          _id: "liveSessions:1",
          hostUserId: "teacher_aaaaaa",
          paperId: "paper-1",
          title: "Paper",
          status: "active",
          createdAt: 1,
        },
      ],
    },
  });

  await assert.rejects(() => getActiveSessionsHandler(ctx, {}), /Teacher access required\./);
});

test("getJoinRequests allows the host to inspect requests for their class", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "teacher_aaaaaa",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Student One",
          tempId: "temp-1",
          requesterUserId: "student_one",
          status: "pending",
          requestedAt: 1,
        },
        {
          _id: "join:2",
          sessionId: "liveClassSessions:1",
          studentName: "Student Two",
          tempId: "temp-2",
          requesterUserId: "student_two",
          status: "accepted",
          requestedAt: 2,
        },
      ],
    },
  });

  const requests = await getJoinRequestsHandler(ctx, { sessionId: "liveClassSessions:1" });

  assert.equal(requests.length, 2);
  assert.equal(requests[0]?.studentName, "Student One");
  assert.equal(requests[1]?.studentName, "Student Two");
});

test("updateStudentNote rejects an unrelated student for another learner's request", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_intruder",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Owner",
          tempId: "temp-1",
          requesterUserId: "student_owner",
          status: "accepted",
          requestedAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () =>
      updateStudentNoteHandler(ctx, {
        sessionId: "liveClassSessions:1",
        tempId: "temp-1",
        noteContent: "stolen note",
      }),
    /Teacher or host access required\./
  );

  assert.equal(tables.studentNotes?.length ?? 0, 0);
});

test("getStudentNote lets the host read a legacy request note without requester identity", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "teacher_aaaaaa",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Legacy Student",
          tempId: "temp-1",
          status: "accepted",
          requestedAt: 1,
        },
      ],
      studentNotes: [
        {
          _id: "studentNotes:1",
          sessionId: "liveClassSessions:1",
          tempId: "temp-1",
          noteContent: "host-visible note",
          updatedAt: 2,
        },
      ],
    },
  });

  const note = await getStudentNoteHandler(ctx, {
    sessionId: "liveClassSessions:1",
    tempId: "temp-1",
  });

  assert.equal(note?.noteContent, "host-visible note");
});

test("getStudentName rejects an unrelated student for a legacy request without requester identity", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_intruder",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Legacy Student",
          tempId: "temp-1",
          status: "accepted",
          requestedAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => getStudentNameHandler(ctx, { sessionId: "liveClassSessions:1", tempId: "temp-1" }),
    /Teacher or host access required\./
  );
});

test("getStudentJoinStatus rejects an unrelated student for a legacy request without requester identity", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_intruder",
      role: "student",
    },
    tables: {
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
      classJoinRequests: [
        {
          _id: "join:1",
          sessionId: "liveClassSessions:1",
          studentName: "Legacy Student",
          tempId: "temp-1",
          status: "pending",
          requestedAt: 1,
        },
      ],
    },
  });

  await assert.rejects(
    () => getStudentJoinStatusHandler(ctx, { requestId: "join:1" }),
    /Teacher or host access required\./
  );
});

test("requestJoin auto-accepts when the class is configured for automatic admission", async () => {
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_bbbbbb",
      role: "student",
    },
    tables: {
      liveClassSessions: [
        {
          _id: "liveClassSessions:1",
          hostUserId: "teacher_aaaaaa",
          title: "Exam Clinic",
          backgroundType: "grid",
          status: "active",
          joinCode: "ABC123",
          autoAccept: true,
          createdAt: 1,
        },
      ],
    },
  });

  await requestJoinHandler(ctx, {
    sessionId: "liveClassSessions:1",
    studentName: "Student",
    tempId: "temp-1",
  });

  assert.equal(tables.classJoinRequests[0]?.status, "accepted");
  assert.equal(tables.classJoinRequests[0]?.requesterUserId, "student_bbbbbb");
});
