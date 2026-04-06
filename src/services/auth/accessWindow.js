export const ACCESS_EXPIRED_NOTICE_KEY = 'lt_access_expired_notice';

export function formatAccessDueDate(timestamp, locale = undefined) {
  if (!timestamp) return 'Not set';
  return new Date(timestamp).toLocaleString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatAccessDueDateExact(timestamp) {
  if (!timestamp) return 'Not set';
  return new Date(timestamp).toISOString();
}

export function formatRemainingTime(remainingMs) {
  const clamped = Math.max(0, Number(remainingMs) || 0);
  const totalSeconds = Math.floor(clamped / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  }
  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

export function getAccessSummaryStorageKey(sessionId, accessExpiresAt) {
  if (!sessionId || !accessExpiresAt) return null;
  return `lt_access_summary_seen:${sessionId}:${accessExpiresAt}`;
}

export function readAccessExpiredNotice(storage = typeof window !== 'undefined' ? window.sessionStorage : null) {
  if (!storage) return null;
  try {
    const raw = storage.getItem(ACCESS_EXPIRED_NOTICE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.type !== 'expired') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeAccessExpiredNotice(notice, storage = typeof window !== 'undefined' ? window.sessionStorage : null) {
  if (!storage) return;
  storage.setItem(ACCESS_EXPIRED_NOTICE_KEY, JSON.stringify(notice));
}

export function clearAccessExpiredNotice(storage = typeof window !== 'undefined' ? window.sessionStorage : null) {
  if (!storage) return;
  storage.removeItem(ACCESS_EXPIRED_NOTICE_KEY);
}
