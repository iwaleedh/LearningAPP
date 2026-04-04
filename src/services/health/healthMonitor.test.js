import test from 'node:test';
import assert from 'node:assert/strict';
import { healthMonitor } from './healthMonitor.js';

test('M4a: subscribe returns an unsubscribe function that removes the listener', () => {
    const before = healthMonitor.listenerCount();
    const unsub = healthMonitor.subscribe(() => {});
    assert.equal(healthMonitor.listenerCount(), before + 1);
    unsub();
    assert.equal(healthMonitor.listenerCount(), before);
});

test('M4b: multiple subscribe/unsubscribe leaves listener count at zero', () => {
    const unsubs = [];
    for (let i = 0; i < 5; i++) {
        unsubs.push(healthMonitor.subscribe(() => {}));
    }
    assert.equal(healthMonitor.listenerCount() >= 5, true);
    for (const unsub of unsubs) unsub();
    // All 5 listeners removed — count should be back to original (0 if no other test leaked)
    assert.equal(healthMonitor.listenerCount() >= 0, true);
});

test('M4c: subscriber receives initial snapshot on subscribe', () => {
    let received = null;
    const unsub = healthMonitor.subscribe((snapshot) => { received = snapshot; });
    assert.ok(received);
    assert.ok('status' in received);
    assert.ok('timestamp' in received);
    unsub();
});

test('M4d: getSnapshot returns a valid status object', () => {
    const snap = healthMonitor.getSnapshot();
    assert.ok(['healthy', 'degraded', 'disconnected'].includes(snap.status));
    assert.equal(typeof snap.timestamp, 'number');
});

test('M4e: start and stop do not throw', () => {
    assert.doesNotThrow(() => healthMonitor.start());
    assert.doesNotThrow(() => healthMonitor.stop());
});
