import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    username: v.string(),
    role: v.union(v.literal('student'), v.literal('teacher'), v.literal('admin')),
    email: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    // D15: enum-validated accountStatus — rejects any value not in this union.
    accountStatus: v.optional(v.union(
      v.literal('pending'),
      v.literal('approved'),
      v.literal('blocked'),
    )),
    firstSignInAt: v.optional(v.number()),
    lastSignInAt: v.optional(v.number()),
    trialStartedAt: v.optional(v.number()),
    trialExpiresAt: v.optional(v.number()),
    accessWindowStartedAt: v.optional(v.number()),
    accessDurationMonths: v.optional(v.union(v.literal(1), v.literal(12))),
    accessExpiresAt: v.optional(v.number()),
    accessRevokedAt: v.optional(v.number()),
    accessRevokedReason: v.optional(v.string()),
    sessionVersion: v.optional(v.number()),
    lastAuthProvider: v.optional(v.string()),
    lastAuthSessionId: v.optional(v.string()),
    lastLoginEventId: v.optional(v.id("loginEvents")),
    statusUpdatedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    // D17: btree index for O(log n) exact-match username lookup (used by resolveCanonicalUsername).
    .index("by_username", ["username"])
    .index("by_accountStatus", ["accountStatus"])
    .index("by_accessExpiresAt", ["accessExpiresAt"])
    // D17: full-text search index for the searchUsers query.
    .searchIndex("search_username", { searchField: "username" }),

  authSessions: defineTable({
    userId: v.string(),
    sessionId: v.string(),
    provider: v.string(),
    sessionVersion: v.number(),
    userAgent: v.optional(v.string()),
    createdAt: v.number(),
    lastSeenAt: v.number(),
    revokedAt: v.optional(v.number()),
    revokeReason: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_user_session", ["userId", "sessionId"]),

  loginEvents: defineTable({
    userId: v.string(),
    sessionId: v.optional(v.string()),
    provider: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    eventType: v.union(v.literal("sign_in"), v.literal("access_selected")),
    occurredAt: v.number(),
    accessDurationMonths: v.optional(v.union(v.literal(1), v.literal(12))),
    accessExpiresAt: v.optional(v.number()),
    userAgent: v.optional(v.string()),
    ipAddress: v.optional(v.string()),
    emailDeliveryStatus: v.optional(v.union(v.literal("pending"), v.literal("sent"), v.literal("failed"))),
    emailRetryCount: v.optional(v.number()),
    emailLastAttemptAt: v.optional(v.number()),
    emailLastError: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_session", ["sessionId"])
    .index("by_emailDeliveryStatus", ["emailDeliveryStatus"])
    .index("by_createdAt", ["createdAt"]),

  emailDeliveryAttempts: defineTable({
    loginEventId: v.id("loginEvents"),
    userId: v.string(),
    provider: v.string(),
    traceId: v.string(),
    status: v.union(
      v.literal("started"),
      v.literal("sent"),
      v.literal("failed"),
      v.literal("skipped"),
    ),
    attemptNumber: v.number(),
    recipientMasked: v.optional(v.string()),
    messageId: v.optional(v.string()),
    httpStatus: v.optional(v.number()),
    errorMessage: v.optional(v.string()),
    durationMs: v.optional(v.number()),
    startedAt: v.number(),
    completedAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_loginEvent", ["loginEventId"])
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"])
    .index("by_traceId", ["traceId"]),

  cronRuns: defineTable({
    jobName: v.string(),
    traceId: v.string(),
    status: v.union(
      v.literal("started"),
      v.literal("succeeded"),
      v.literal("failed"),
    ),
    startedAt: v.number(),
    completedAt: v.optional(v.number()),
    durationMs: v.optional(v.number()),
    resultJson: v.optional(v.string()),
    errorMessage: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_jobName", ["jobName"])
    .index("by_status", ["status"])
    .index("by_startedAt", ["startedAt"])
    .index("by_traceId", ["traceId"]),

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

  studyAttempts: defineTable({
    ownerUserId: v.string(),
    // D15: enum-validated source and activity types.
    sourceType: v.union(v.literal('exercise'), v.literal('pastpaper')),
    activityType: v.string(), // open-ended: 'mcq', 'keyword', 'view_question', etc.
    subject: v.string(),
    unitId: v.optional(v.number()),
    topicId: v.optional(v.number()),
    questionKey: v.string(),
    prompt: v.string(),
    topic: v.optional(v.string()),
    paperId: v.optional(v.string()),
    paperTitle: v.optional(v.string()),
    correct: v.optional(v.boolean()),
    scorePercent: v.optional(v.number()),
    confidence: v.optional(v.string()),
    durationSeconds: v.optional(v.number()),
    activityDateKey: v.optional(v.string()),
    metadataJson: v.optional(v.string()),
    // D1: Client-generated idempotency key — prevents double-submit on retry/re-click.
    clientAttemptId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_subject", ["subject"])
    .index("by_sourceType", ["sourceType"])
    .index("by_questionKey", ["questionKey"])
    // D1: Composite index for O(log n) dedup check on (ownerUserId, clientAttemptId).
    .index("by_owner_client_attempt", ["ownerUserId", "clientAttemptId"]),

  badgeMetricEvents: defineTable({
    ownerUserId: v.string(),
    studyAttemptId: v.id("studyAttempts"),
    sourceType: v.union(v.literal('exercise'), v.literal('pastpaper')),
    activityType: v.string(),
    questionKey: v.string(),
    subject: v.string(),
    deltaJson: v.string(),
    metadataJson: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_attempt", ["studyAttemptId"]),

  badgeMetricProjections: defineTable({
    ownerUserId: v.string(),
    exercisesCompleted: v.number(),
    papersCompleted: v.number(),
    perfectScores: v.number(),
    fastCompletions: v.number(),
    updatedAt: v.number(),
  }).index("by_owner", ["ownerUserId"]),

  activityMetricProjections: defineTable({
    ownerUserId: v.string(),
    exercisesDone: v.number(),
    papersViewed: v.number(),
    updatedAt: v.number(),
  }).index("by_owner", ["ownerUserId"]),

  // D5: One row per (userId, dateKey) — tracks unique study days for real
  // login/activity-day counts used by badge criteria. Deduped at insert time.
  userSessions: defineTable({
    userId: v.string(),
    dateKey: v.string(), // YYYY-MM-DD (local date in user's timezone)
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_date", ["userId", "dateKey"]),

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

  flashcardProgress: defineTable({
    ownerUserId: v.string(),
    cardId: v.string(),
    status: v.union(v.literal('known'), v.literal('learning')),
    firstReviewedAt: v.number(),
    lastReviewedAt: v.number(),
    updatedAt: v.number(),
    reviewCount: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_owner_card", ["ownerUserId", "cardId"]),

  noteReadProgress: defineTable({
    ownerUserId: v.string(),
    noteId: v.string(),
    readAt: v.string(),
    localDateKey: v.string(),
    updatedAt: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_owner_note", ["ownerUserId", "noteId"]),

  mistakes: defineTable({
    ownerUserId: v.string(),
    mistakeKey: v.string(),
    questionKey: v.optional(v.string()),
    question: v.string(),
    yourAnswer: v.string(),
    correctAnswer: v.string(),
    topic: v.string(),
    subject: v.string(),
    attempts: v.number(),
    firstAttemptAt: v.string(),
    lastAttemptAt: v.string(),
    updatedAt: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_owner_key", ["ownerUserId", "mistakeKey"]),

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
    status: v.union(v.literal('active'), v.literal('ended')), // D15
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_host", ["hostUserId"]),

  sessionParticipants: defineTable({
    sessionId: v.string(),
    userId: v.string(),
    role: v.union(v.literal('host'), v.literal('editor'), v.literal('viewer')), // D15
    joinedAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_user", ["userId"]),

  sessionInvites: defineTable({
    sessionId: v.string(),
    fromUserId: v.string(),
    toUserId: v.optional(v.string()),
    toUsername: v.string(),
    status: v.union(v.literal('pending'), v.literal('accepted'), v.literal('declined')), // D15
    createdAt: v.number(),
  })
    .index("by_session", ["sessionId"])
    .index("by_toUserId", ["toUserId"])
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
    backgroundType: v.union( // D15
      v.literal('white'), v.literal('lined'), v.literal('grid'),
      v.literal('dotted'), v.literal('yellow'),
    ),
    status: v.union(v.literal('active'), v.literal('ended')), // D15
    joinCode: v.optional(v.string()),
    autoAccept: v.optional(v.boolean()),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_host", ["hostUserId"]),

  classJoinRequests: defineTable({
    sessionId: v.string(),
    studentName: v.string(),
    tempId: v.string(),
    requesterUserId: v.optional(v.string()),
    status: v.union(v.literal('pending'), v.literal('accepted'), v.literal('rejected')), // D15
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
    accumulatedElapsedMs: v.optional(v.number()),
    anchorStartedAt: v.optional(v.number()),
    version: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
    updatedBy: v.optional(v.string()),
  }).index("by_class", ["classId"]),

  // H-11: Persistent poll storage for Live Classroom
  liveClassPolls: defineTable({
    classId: v.id("liveClassSessions"),
    creatorUserId: v.string(),
    question: v.string(),
    type: v.union(v.literal('mcq'), v.literal('truefalse'), v.literal('freetext')),
    options: v.array(v.string()),
    correctIndex: v.number(), // -1 if no correct answer
    status: v.union(v.literal('active'), v.literal('closed')),
    createdAt: v.number(),
  })
    .index("by_class", ["classId"])
    .index("by_class_status", ["classId", "status"]),

  liveClassPollResponses: defineTable({
    pollId: v.id("liveClassPolls"),
    classId: v.id("liveClassSessions"),
    respondentUserId: v.string(),
    selectedIndex: v.optional(v.number()),
    text: v.optional(v.string()),
    submittedAt: v.number(),
  })
    .index("by_poll", ["pollId"])
    .index("by_poll_respondent", ["pollId", "respondentUserId"]),

  // ── Pub/Sub Event Bus ───────────────────────────────────────────
  events: defineTable({
    topic: v.string(),
    payload: v.string(),
    status: v.union(v.literal('pending'), v.literal('processed'), v.literal('failed')), // D15
    publishedAt: v.number(),
    processedAt: v.number(),
  })
    .index("by_topic", ["topic"])
    .index("by_status", ["status"]),

  // ── Payment Requests ────────────────────────────────────────────
  paymentRequests: defineTable({
    userId:      v.string(),
    submissionKey: v.optional(v.string()),
    plan:        v.union(v.literal('monthly'), v.literal('annual')), // D15
    amount:      v.number(),
    storageId:   v.id("_storage"),
    fileName:    v.string(),
    mimeType:    v.string(),
    status:      v.union(v.literal('pending'), v.literal('approved'), v.literal('rejected')), // D15
    submittedAt: v.number(),
    reviewedAt:  v.optional(v.number()),
    reviewedBy:  v.optional(v.string()),
    adminNotes:  v.optional(v.string()),
    // D10: Populated on approval so consistency checks can detect orphaned approvals.
    entitlementId: v.optional(v.id("paymentEntitlements")),
  })
    .index("by_userId", ["userId"])
    .index("by_user_submission", ["userId", "submissionKey"])
    .index("by_status", ["status"]),

  paymentUploadIntents: defineTable({
    userId: v.string(),
    submissionKey: v.string(),
    mimeType: v.string(),
    status: v.union(v.literal('pending'), v.literal('consumed')),
    issuedAt: v.number(),
    expiresAt: v.number(),
    consumedAt: v.optional(v.number()),
    storageId: v.optional(v.id("_storage")),
  })
    .index("by_user_submission", ["userId", "submissionKey"])
    .index("by_expiresAt", ["expiresAt"])
    .index("by_status", ["status"]),

  paymentEntitlements: defineTable({
    requestId: v.id("paymentRequests"),
    userId: v.string(),
    plan: v.union(v.literal('monthly'), v.literal('annual')),
    amount: v.number(),
    status: v.union(v.literal('active'), v.literal('revoked')),
    grantedAt: v.number(),
    grantedBy: v.string(),
    revokedAt: v.optional(v.number()),
    revokedBy: v.optional(v.string()),
  })
    .index("by_request", ["requestId"])
    .index("by_user", ["userId"])
    .index("by_status", ["status"]),

  // ── Feature Flags ───────────────────────────────────────────────
  featureFlags: defineTable({
    key: v.string(),          // e.g. "flashcards", "pastPapers", "liveClass"
    enabled: v.boolean(),
    label: v.string(),        // display name
    description: v.string(),
    owner: v.string(),
    purpose: v.string(),
    sunsetDate: v.optional(v.string()),
    updatedAt: v.number(),
    updatedBy: v.string(),    // admin userId
  }).index("by_key", ["key"]),

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

  clientTelemetry: defineTable({
    ownerUserId: v.string(),
    eventType: v.union(
      v.literal("route_view"),
      v.literal("note_view"),
      v.literal("fullscreen_enter"),
      v.literal("recall_open"),
    ),
    route: v.string(),
    noteId: v.optional(v.string()),
    subject: v.optional(v.string()),
    metadataJson: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_owner", ["ownerUserId"])
    .index("by_eventType", ["eventType"])
    .index("by_route", ["route"])
    .index("by_createdAt", ["createdAt"]),

  // ── Audit Logs ──────────────────────────────────────────────────
  auditLogs: defineTable({
    actorId: v.string(),
    action: v.string(),
    targetId: v.optional(v.string()),
    details: v.optional(v.string()),
    timestamp: v.number(),
  })
    .index("by_actor", ["actorId"])
    .index("by_action", ["action"])
    .index("by_target", ["targetId"]),

  adminActionReceipts: defineTable({
    actorId: v.string(),
    action: v.string(),
    targetId: v.optional(v.string()),
    idempotencyKey: v.string(),
    responseJson: v.string(),
    createdAt: v.number(),
  })
    .index("by_actor_action_key", ["actorId", "action", "idempotencyKey"])
    .index("by_target", ["targetId"]),
});
