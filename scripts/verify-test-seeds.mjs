import assert from 'node:assert/strict';

import {
  SEEDED_ADMIN_DASHBOARD_FIXTURE,
  FIXED_TEST_NOW,
  FIXED_TEST_NOW_ISO,
  SEEDED_ACCESS_EXPIRED_NOTICE,
  SEEDED_FLASHCARDS,
  SEEDED_MISTAKES,
  createDebugSession,
} from '../tests/support/testSeeds.js';

assert.equal(FIXED_TEST_NOW, Date.parse(FIXED_TEST_NOW_ISO));
assert.deepEqual(createDebugSession({ role: 'student', userId: 'seed_user', username: 'Seed User' }), {
  role: 'student',
  userId: 'seed_user',
  username: 'Seed User',
});
assert.equal(SEEDED_ACCESS_EXPIRED_NOTICE.type, 'expired');
assert.ok(Number.isFinite(SEEDED_ACCESS_EXPIRED_NOTICE.accessExpiresAt));
assert.ok(Array.isArray(SEEDED_MISTAKES) && SEEDED_MISTAKES.length > 0);
assert.ok(Array.isArray(SEEDED_FLASHCARDS) && SEEDED_FLASHCARDS.length > 0);
assert.ok(Array.isArray(SEEDED_ADMIN_DASHBOARD_FIXTURE.allUsers) && SEEDED_ADMIN_DASHBOARD_FIXTURE.allUsers.length > 0);
assert.equal(SEEDED_ADMIN_DASHBOARD_FIXTURE.observabilitySummary.status, 'degraded');

console.log('[test-seeds] Verified deterministic seed fixtures.');