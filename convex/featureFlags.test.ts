import test from 'node:test';
import assert from 'node:assert/strict';
import { getAllFlags, getFlag, setFlag } from './featureFlags';
import { createMockConvexCtx } from './testUtils';

const list = (getAllFlags as any)._handler;
const get = (getFlag as any)._handler;
const set = (setFlag as any)._handler;

test('retired flags stay hidden and disabled even when old records enable them', async () => {
  const { ctx } = createMockConvexCtx({ identity: null, tables: {
    featureFlags: [
      { _id: 'flags:live', key: 'liveClass', enabled: true },
      { _id: 'flags:notes', key: 'notes', enabled: false },
    ],
  } });
  const flags = await list(ctx, {});
  assert.equal(flags.some((flag: any) => flag.key === 'liveClass'), false);
  assert.equal(flags.find((flag: any) => flag.key === 'notes').enabled, false);
  assert.equal(await get(ctx, { key: 'liveClass' }), false);
  assert.equal(await get(ctx, { key: 'exercises' }), true);
});

test('admins can update study flags but cannot restore retired features', async () => {
  const { ctx, tables } = createMockConvexCtx({ identity: { subject: 'admin', preferredUsername: 'admin' } });
  await assert.rejects(() => set(ctx, { key: 'liveClass', enabled: true }), /Unknown feature flag/);
  await set(ctx, { key: 'notes', enabled: false });
  assert.equal(await get(ctx, { key: 'notes' }), false);
  assert.equal(tables.featureFlags.length, 1);
});
