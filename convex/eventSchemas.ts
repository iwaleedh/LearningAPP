import { EVENT_TOPICS, KNOWN_EVENT_TOPICS } from "./eventTopics";

type JsonRecord = Record<string, unknown>;

function isObjectRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireObject(payload: unknown, topic: string): JsonRecord {
  if (!isObjectRecord(payload)) {
    throw new Error(`Payload for ${topic} must be a JSON object.`);
  }
  return payload;
}

function requireString(record: JsonRecord, key: string, topic: string) {
  const value = record[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Payload for ${topic} must include a non-empty string '${key}'.`);
  }
  return value.trim();
}

function optionalString(record: JsonRecord, key: string) {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    throw new Error(`Optional field '${key}' must be a string when provided.`);
  }
  const trimmed = value.trim();
  return trimmed || undefined;
}

function requireNestedObject(record: JsonRecord, key: string, topic: string) {
  const value = record[key];
  if (!isObjectRecord(value)) {
    throw new Error(`Payload for ${topic} must include an object '${key}'.`);
  }
  return value;
}

function optionalBoolean(record: JsonRecord, key: string) {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== "boolean") {
    throw new Error(`Optional field '${key}' must be a boolean when provided.`);
  }
  return value;
}

function optionalNumber(record: JsonRecord, key: string) {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Optional field '${key}' must be a finite number when provided.`);
  }
  return value;
}

function validateNotificationPayload(payload: unknown) {
  const topic = EVENT_TOPICS.EXTERNAL_NOTIFICATION;
  const record = requireObject(payload, topic);
  return {
    notificationId: requireString(record, "notificationId", topic),
    title: requireString(record, "title", topic),
    message: requireString(record, "message", topic),
    recipientUserId: optionalString(record, "recipientUserId"),
    severity: optionalString(record, "severity"),
  };
}

function validateStatusUpdatePayload(payload: unknown) {
  const topic = EVENT_TOPICS.EXTERNAL_STATUS_UPDATE;
  const record = requireObject(payload, topic);
  return {
    entityId: requireString(record, "entityId", topic),
    status: requireString(record, "status", topic),
    source: optionalString(record, "source"),
    updatedAt: optionalNumber(record, "updatedAt"),
  };
}

function validateDataSyncPayload(payload: unknown) {
  const topic = EVENT_TOPICS.EXTERNAL_DATA_SYNC;
  const record = requireObject(payload, topic);
  const operation = requireString(record, "operation", topic).toLowerCase();
  if (!["create", "update", "delete", "sync"].includes(operation)) {
    throw new Error(`Payload for ${topic} has unsupported operation '${operation}'.`);
  }
  return {
    entityType: requireString(record, "entityType", topic),
    entityId: requireString(record, "entityId", topic),
    operation,
    data: requireNestedObject(record, "data", topic),
  };
}

function validateNoteUpdatedPayload(payload: unknown) {
  const topic = EVENT_TOPICS.NOTE_UPDATED;
  const record = requireObject(payload, topic);
  return {
    noteId: requireString(record, "noteId", topic),
    subject: requireString(record, "subject", topic),
    userId: requireString(record, "userId", topic),
  };
}

function validateNoteDeletedPayload(payload: unknown) {
  const topic = EVENT_TOPICS.NOTE_DELETED;
  const record = requireObject(payload, topic);
  return {
    noteId: requireString(record, "noteId", topic),
    userId: requireString(record, "userId", topic),
  };
}

function validateSessionEndedPayload(payload: unknown) {
  const topic = EVENT_TOPICS.SESSION_ENDED;
  const record = requireObject(payload, topic);
  return {
    sessionId: requireString(record, "sessionId", topic),
    hostUserId: requireString(record, "hostUserId", topic),
  };
}

function validateUserRegisteredPayload(payload: unknown) {
  const topic = EVENT_TOPICS.USER_REGISTERED;
  const record = requireObject(payload, topic);
  return {
    userId: requireString(record, "userId", topic),
    username: requireString(record, "username", topic),
  };
}

function validateClassEndedPayload(payload: unknown) {
  const topic = EVENT_TOPICS.CLASS_ENDED;
  const record = requireObject(payload, topic);
  return {
    classId: requireString(record, "classId", topic),
    hostUserId: requireString(record, "hostUserId", topic),
  };
}

function validateAdminBroadcastPayload(payload: unknown) {
  const topic = EVENT_TOPICS.ADMIN_BROADCAST;
  const record = requireObject(payload, topic);
  return {
    message: requireString(record, "message", topic),
    audience: optionalString(record, "audience"),
    urgent: optionalBoolean(record, "urgent"),
  };
}

function validateAdminAnnouncementPayload(payload: unknown) {
  const topic = EVENT_TOPICS.ADMIN_ANNOUNCEMENT;
  const record = requireObject(payload, topic);
  return {
    title: requireString(record, "title", topic),
    body: requireString(record, "body", topic),
    audience: optionalString(record, "audience"),
  };
}

function validateDebugPingPayload(payload: unknown) {
  const topic = EVENT_TOPICS.DEBUG_PING;
  const record = requireObject(payload, topic);
  return {
    requestId: requireString(record, "requestId", topic),
    source: optionalString(record, "source"),
  };
}

const EVENT_PAYLOAD_VALIDATORS: Record<string, (payload: unknown) => JsonRecord> = {
  [EVENT_TOPICS.EXTERNAL_NOTIFICATION]: validateNotificationPayload,
  [EVENT_TOPICS.EXTERNAL_STATUS_UPDATE]: validateStatusUpdatePayload,
  [EVENT_TOPICS.EXTERNAL_DATA_SYNC]: validateDataSyncPayload,
  [EVENT_TOPICS.NOTE_UPDATED]: validateNoteUpdatedPayload,
  [EVENT_TOPICS.NOTE_DELETED]: validateNoteDeletedPayload,
  [EVENT_TOPICS.SESSION_ENDED]: validateSessionEndedPayload,
  [EVENT_TOPICS.USER_REGISTERED]: validateUserRegisteredPayload,
  [EVENT_TOPICS.CLASS_ENDED]: validateClassEndedPayload,
  [EVENT_TOPICS.ADMIN_BROADCAST]: validateAdminBroadcastPayload,
  [EVENT_TOPICS.ADMIN_ANNOUNCEMENT]: validateAdminAnnouncementPayload,
  [EVENT_TOPICS.DEBUG_PING]: validateDebugPingPayload,
};

export function validateEventPayload(topic: string, payload: unknown) {
  if (!KNOWN_EVENT_TOPICS.has(topic)) {
    throw new Error(`Unknown event topic '${topic}'.`);
  }

  const validator = EVENT_PAYLOAD_VALIDATORS[topic];
  if (!validator) {
    throw new Error(`No payload validator registered for topic '${topic}'.`);
  }

  return validator(payload);
}