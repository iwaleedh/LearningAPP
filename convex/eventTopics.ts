export const EVENT_TOPICS = {
  NOTE_UPDATED: "note:updated",
  NOTE_DELETED: "note:deleted",
  SESSION_ENDED: "session:ended",
  USER_REGISTERED: "user:registered",
  CLASS_ENDED: "class:ended",
  EXTERNAL_NOTIFICATION: "external:notification",
  EXTERNAL_STATUS_UPDATE: "external:status_update",
  EXTERNAL_DATA_SYNC: "external:data_sync",
  ADMIN_BROADCAST: "admin:broadcast",
  ADMIN_ANNOUNCEMENT: "admin:announcement",
  DEBUG_PING: "debug:ping",
} as const;

export const INTERNAL_EVENT_TOPICS = new Set<string>([
  EVENT_TOPICS.NOTE_UPDATED,
  EVENT_TOPICS.NOTE_DELETED,
  EVENT_TOPICS.SESSION_ENDED,
  EVENT_TOPICS.USER_REGISTERED,
  EVENT_TOPICS.CLASS_ENDED,
]);

export const WEBHOOK_EVENT_TOPICS = new Set<string>([
  EVENT_TOPICS.EXTERNAL_NOTIFICATION,
  EVENT_TOPICS.EXTERNAL_STATUS_UPDATE,
  EVENT_TOPICS.EXTERNAL_DATA_SYNC,
]);

export const PUBLIC_EVENT_TOPICS = new Set<string>([
  EVENT_TOPICS.ADMIN_BROADCAST,
  EVENT_TOPICS.ADMIN_ANNOUNCEMENT,
  EVENT_TOPICS.DEBUG_PING,
]);

export const KNOWN_EVENT_TOPICS = new Set<string>([
  ...INTERNAL_EVENT_TOPICS,
  ...WEBHOOK_EVENT_TOPICS,
  ...PUBLIC_EVENT_TOPICS,
]);

export function isKnownEventTopic(topic: string) {
  return KNOWN_EVENT_TOPICS.has(topic);
}