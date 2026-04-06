import test from 'node:test';
import assert from 'node:assert/strict';

import { DEV_ADMIN_FIXTURE_KEY, readAdminDevFixture } from './adminDevFixture.js';

function createStorage(initialValue) {
  const values = new Map();
  if (initialValue !== undefined) {
    values.set(DEV_ADMIN_FIXTURE_KEY, initialValue);
  }
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
  };
}

test('readAdminDevFixture ignores seeded fixtures outside development', () => {
  const storage = createStorage(JSON.stringify({ flags: [{ key: 'payments' }] }));
  assert.equal(readAdminDevFixture({ isDev: false, storage }), null);
});

test('readAdminDevFixture returns parsed fixtures during development', () => {
  const storage = createStorage(JSON.stringify({ paymentCounts: { pending: 1 } }));
  assert.deepEqual(readAdminDevFixture({ isDev: true, storage }), { paymentCounts: { pending: 1 } });
});

test('readAdminDevFixture discards malformed fixture payloads', () => {
  const storage = createStorage('{bad json');
  assert.equal(readAdminDevFixture({ isDev: true, storage }), null);
});