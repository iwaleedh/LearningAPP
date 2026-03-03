import test from 'node:test';
import assert from 'node:assert/strict';
import {
    createDraftStorageKey,
    normalizeDraftValue,
    readDraftFromStorage,
    writeDraftToStorage,
} from './useDraftAutosave.js';

test('createDraftStorageKey builds route-scoped keys', () => {
    assert.equal(createDraftStorageKey('advanced', 'long-answer'), 'draft:advanced:long-answer');
});

test('normalizeDraftValue enforces max length', () => {
    assert.equal(normalizeDraftValue('abcdef', 4), 'abcd');
    assert.equal(normalizeDraftValue(null, 4), '');
});

test('readDraftFromStorage and writeDraftToStorage handle success/error paths', () => {
    const storage = new Map();
    const adapter = {
        getItem(key) { return storage.has(key) ? storage.get(key) : null; },
        setItem(key, value) { storage.set(key, value); },
    };

    const writeResult = writeDraftToStorage(adapter, 'draft:key', 'hello');
    assert.equal(writeResult.ok, true);
    assert.equal(readDraftFromStorage(adapter, 'draft:key', ''), 'hello');
    assert.equal(readDraftFromStorage(adapter, 'draft:missing', 'fallback'), 'fallback');

    const failingAdapter = {
        getItem() { return null; },
        setItem() {
            const error = new Error('quota');
            error.name = 'QuotaExceededError';
            throw error;
        },
    };

    const failure = writeDraftToStorage(failingAdapter, 'draft:key', 'hello');
    assert.equal(failure.ok, false);
    assert.match(failure.message, /Storage quota exceeded/);
});
