import test from 'node:test';
import assert from 'node:assert/strict';

import { listNoteAssets, __resetMemoryStoreForTests } from './noteStore.js';
import {
    loadStudentHighlights,
    loadStudentStickyNotes,
    loadStudentToolExportData,
    saveStudentHighlights,
    saveStudentStickyNotes,
} from './studentToolAssets.js';

function createLocalStorageMock() {
    const store = new Map();
    return {
        getItem(key) {
            return store.has(key) ? store.get(key) : null;
        },
        setItem(key, value) {
            store.set(key, String(value));
        },
        removeItem(key) {
            store.delete(key);
        },
        clear() {
            store.clear();
        },
    };
}

test.beforeEach(async () => {
    globalThis.localStorage = createLocalStorageMock();
    await __resetMemoryStoreForTests();
});

test.afterEach(() => {
    delete globalThis.localStorage;
});

test('student tool assets migrate legacy localStorage into note assets', async () => {
    const noteId = 'note:chemistry:1:1:0';
    localStorage.setItem(`highlights_${noteId}`, JSON.stringify([
        {
            text: 'A mole links particles to measurable amounts.',
            color: 'rgba(250, 204, 21, 0.4)',
            colorName: 'Yellow',
            createdAt: '2026-04-03T12:00:00.000Z',
        },
    ]));
    localStorage.setItem(`stickynotes_${noteId}`, JSON.stringify([
        {
            content: 'Revise Avogadro constant.',
            color: '#fef3c7',
            x: 64,
            y: 92,
        },
    ]));

    const exportData = await loadStudentToolExportData(noteId);
    assert.equal(exportData.highlights.length, 1);
    assert.equal(exportData.notes.length, 1);
    assert.equal(localStorage.getItem(`highlights_${noteId}`), null);
    assert.equal(localStorage.getItem(`stickynotes_${noteId}`), null);

    const assets = await listNoteAssets(noteId);
    assert.equal(assets.length, 2);
});

test('student tool assets save and clear through the note asset store', async () => {
    const noteId = 'note:biology:2:3:1';

    await saveStudentHighlights(noteId, [
        {
            text: 'Water moves down a water potential gradient.',
            color: 'rgba(96, 165, 250, 0.4)',
            colorName: 'Blue',
            createdAt: '2026-04-03T10:00:00.000Z',
        },
    ]);
    await saveStudentStickyNotes(noteId, [
        {
            content: 'Compare turgid and flaccid cells.',
            color: '#dbeafe',
            x: 88,
            y: 120,
        },
    ]);

    const highlights = await loadStudentHighlights(noteId);
    const notes = await loadStudentStickyNotes(noteId);
    assert.equal(highlights.length, 1);
    assert.equal(notes.length, 1);

    await saveStudentHighlights(noteId, []);
    await saveStudentStickyNotes(noteId, []);

    const cleared = await loadStudentToolExportData(noteId);
    assert.equal(cleared.highlights.length, 0);
    assert.equal(cleared.notes.length, 0);
    assert.equal((await listNoteAssets(noteId)).length, 0);
});