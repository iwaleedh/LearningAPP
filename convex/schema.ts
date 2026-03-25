import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    username: v.string(),
    role: v.string(), // 'student' | 'teacher'
    createdAt: v.number(),
  }).index("by_userId", ["userId"]),

  notes: defineTable({
    noteId: v.string(),
    ownerUserId: v.string(),
    subject: v.string(),
    title: v.string(),
    subtopicTitle: v.string(),
    breadcrumbs: v.string(), // JSON string
    contentJson: v.string(), // JSON string
    confidenceScore: v.number(),
    estimatedReadMinutes: v.number(),
    createdAt: v.number(),
    lastEditedAt: v.number(),
  })
    .index("by_noteId", ["noteId"])
    .index("by_owner", ["ownerUserId"])
    .index("by_subject", ["subject"]),

  flashcards: defineTable({
    cardId: v.string(),
    ownerUserId: v.string(),
    subject: v.string(),
    sourceNoteId: v.string(),
    sourceLabel: v.string(),
    front: v.string(),
    back: v.string(),
    createdAt: v.number(),
  })
    .index("by_cardId", ["cardId"])
    .index("by_owner", ["ownerUserId"])
    .index("by_subject", ["subject"]),

  noteAssets: defineTable({
    assetId: v.string(),
    noteId: v.string(),
    ownerUserId: v.string(),
    assetType: v.string(),
    data: v.string(),
    createdAt: v.number(),
  })
    .index("by_assetId", ["assetId"])
    .index("by_noteId", ["noteId"]),

  liveSessions: defineTable({
    hostUserId: v.string(),
    paperId: v.string(),
    title: v.string(),
    status: v.string(), // 'active' | 'ended'
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_host", ["hostUserId"]),

  sessionParticipants: defineTable({
    sessionId: v.string(), // string ID — references liveSessions or liveClassSessions
    userId: v.string(),
    role: v.string(), // 'host' | 'editor' | 'viewer'
    joinedAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_user", ["userId"]),

  sessionInvites: defineTable({
    sessionId: v.string(), // string ID — references liveSessions or liveClassSessions
    fromUserId: v.string(),
    toUsername: v.string(),
    status: v.string(), // 'pending' | 'accepted' | 'declined'
    createdAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_toUsername", ["toUsername"])
    .index("by_status", ["status"]),

  annotationStrokes: defineTable({
    sessionId: v.string(), // string ID (liveSessions _id or liveClassSessions _id)
    pageNumber: v.number(),
    userId: v.string(),
    fabricObjectJson: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_user", ["userId"]),

  liveClassSessions: defineTable({
    hostUserId: v.string(),
    title: v.string(),
    backgroundType: v.string(), // 'white' | 'lined' | 'grid' | 'dotted' | 'yellow'
    status: v.string(), // 'active' | 'ended'
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_host", ["hostUserId"]),

  liveClassCursors: defineTable({
    classId: v.id("liveClassSessions"),
    userId: v.string(),
    x: v.number(),
    y: v.number(),
    tool: v.string(), // 'pointer' | 'laser'
    mode: v.string(), // 'dot' | 'trail'
    updatedAt: v.number(),
  })
    .index("by_class", ["classId"])
    .index("by_user_class", ["userId", "classId"]),

  handRaises: defineTable({
    classId: v.id("liveClassSessions"),
    studentUserId: v.string(),
    status: v.string(), // 'raised' | 'acknowledged'
    raisedAt: v.number(),
  })
    .index("by_class", ["classId"])
    .index("by_status_class", ["status", "classId"]),

  classTimers: defineTable({
    classId: v.id("liveClassSessions"),
    mode: v.string(), // 'stopwatch' | 'countdown'
    state: v.string(), // 'stopped' | 'running' | 'paused'
    elapsedMs: v.number(),
    targetMs: v.number(),
    startedAt: v.number(),
  }).index("by_class", ["classId"]),
});
