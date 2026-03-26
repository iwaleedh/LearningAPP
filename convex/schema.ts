import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(),       // Clerk user_xxx ID (or anon UUID for legacy)
    username: v.string(),
    role: v.string(),         // 'student' | 'teacher'
    email: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
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
    joinCode: v.optional(v.string()), // 6-char uppercase alphanumeric (optional for legacy docs)
    autoAccept: v.optional(v.boolean()), // if true, admit students automatically (optional for legacy docs)
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_host", ["hostUserId"]),

  classJoinRequests: defineTable({
    sessionId: v.string(),
    studentName: v.string(),
    tempId: v.string(), // client-generated UUID, unique per student tab
    status: v.string(), // 'pending' | 'accepted' | 'rejected'
    requestedAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_tempId", ["tempId"]),

  studentNotes: defineTable({
    sessionId: v.string(),
    tempId: v.string(),
    noteContent: v.string(),
    updatedAt: v.number(),
  })
    .index("by_session_tempId", ["sessionId", "tempId"]),

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

  // ── Pub/Sub Event Bus ───────────────────────────────────────────
  events: defineTable({
    topic: v.string(),       // e.g. "note:updated", "session:ended", "user:registered"
    payload: v.string(),     // JSON-serialised event data
    status: v.string(),      // "pending" | "processed" | "failed"
    publishedAt: v.number(),
    processedAt: v.number(), // 0 until processed
  })
    .index("by_topic", ["topic"])
    .index("by_status", ["status"]),

  // ── Centralized Logging ─────────────────────────────────────────
  logs: defineTable({
    level: v.string(),       // "debug" | "info" | "warn" | "error"
    message: v.string(),
    component: v.string(),   // e.g. "noteStore", "liveClassSync", "eventHandler:note:updated"
    userId: v.string(),
    sessionId: v.string(),
    metadata: v.string(),    // JSON-serialised extra context
    timestamp: v.number(),
  })
    .index("by_level", ["level"])
    .index("by_component", ["component"])
    .index("by_timestamp", ["timestamp"]),
});
