import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ACCESS_EXPIRED_NOTICE_KEY,
  clearAccessExpiredNotice,
  formatAccessDueDateExact,
  formatRemainingTime,
  getAccessSummaryStorageKey,
  readAccessExpiredNotice,
  writeAccessExpiredNotice,
} from './accessWindow.js';

test('formatAccessDueDateExact returns a stable UTC timestamp', () => {
  assert.equal(
    formatAccessDueDateExact(Date.parse('2026-04-06T12:34:56.789Z')),
    '2026-04-06T12:34:56.789Z',
  );
  assert.equal(formatAccessDueDateExact(null), 'Not set');
});

test('formatRemainingTime renders compact human-readable durations', () => {
  assert.equal(formatRemainingTime(90_000), '1m 30s');
  assert.equal(formatRemainingTime(3_661_000), '1h 1m 1s');
  assert.equal(formatRemainingTime(172_800_000), '2d 0h 0m');
});

test('getAccessSummaryStorageKey returns a stable per-session key', () => {
  assert.equal(getAccessSummaryStorageKey('sess_1', 12345), 'lt_access_summary_seen:sess_1:12345');
  assert.equal(getAccessSummaryStorageKey('', 12345), null);
});

test('expired access notices round-trip through storage helpers', () => {
  const storage = new Map();
  const mockStorage = {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, value); },
    removeItem(key) { storage.delete(key); },
  };

  writeAccessExpiredNotice({ type: 'expired', accessExpiresAt: 10 }, mockStorage);
  assert.deepEqual(readAccessExpiredNotice(mockStorage), { type: 'expired', accessExpiresAt: 10 });
  clearAccessExpiredNotice(mockStorage);
  assert.equal(mockStorage.getItem(ACCESS_EXPIRED_NOTICE_KEY), null);
});
