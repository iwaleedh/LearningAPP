import test from 'node:test';
import assert from 'node:assert/strict';
import {
    clearGuestData,
    __resetMemoryStoreForTests,
    deleteNoteAsset,
    getGuestDataSummary,
    getNote,
    listFlashcards,
    listNoteAssets,
    listNotesBySubject,
    saveNoteAsset,
    saveFlashcard,
    upsertNote,
} from './noteStore.js';

test('note store persists and lists note headers via memory fallback', async () => {
    await __resetMemoryStoreForTests();

    const noteDoc = {
        noteId: 'note:chemistry:1:1:0',
        subject: 'chemistry',
        qualificationCode: 'YCH11',
        unitCode: 'WCH11',
        unitId: 1,
        topicId: 1,
        subtopicIndex: 0,
        unitTitle: 'Unit',
        topicTitle: 'Topic',
        subtopicTitle: 'Subtopic',
        breadcrumbs: 'A-Level > Chemistry > Unit > Topic 1 > Subtopic',
        confidenceScore: 4,
        estimatedReadMinutesOverride: null,
        blocks: [
            { id: 'objective-block', type: 'objective', data: { text: 'Objective' } },
            { id: 'block-1', type: 'paragraph', data: { text: 'This is a note body.' } },
            { id: 'summary-block', type: 'summary', data: { text: '' } },
        ],
        recall: { enabled: true, cues: [], summaryText: '', ready: false },
        evidence: [],
        mentions: [],
    };

    await upsertNote(noteDoc);

    const fetched = await getNote(noteDoc.noteId);
    assert.ok(fetched);
    assert.equal(fetched.noteId, noteDoc.noteId);

    const headers = await listNotesBySubject('chemistry');
    assert.equal(headers.length, 1);
    assert.equal(headers[0].noteId, noteDoc.noteId);
    assert.match(headers[0].firstSnippet, /Objective|note body/i);
});

test('flashcard save/list keeps source note linkage', async () => {
    await __resetMemoryStoreForTests();

    await saveFlashcard({
        front: 'What is osmosis?',
        back: 'Movement of water across a partially permeable membrane.',
        subject: 'biology',
        sourceNoteId: 'note:biology:1:2:0',
        sourceLabel: 'Biology > Osmosis',
    });

    const cards = await listFlashcards({ subject: 'biology' });
    assert.equal(cards.length, 1);
    assert.equal(cards[0].sourceNoteId, 'note:biology:1:2:0');
});

test('guest data summary counts persisted local guest content and can be cleared', async () => {
    await __resetMemoryStoreForTests();

    await upsertNote({
        noteId: 'note:physics:1:1:0',
        subject: 'physics',
        topicTitle: 'Motion',
        subtopicTitle: 'Speed and velocity',
        breadcrumbs: ['A-Level', 'Physics'],
        confidenceScore: 3,
        blocks: [{ id: 'p-1', type: 'paragraph', data: { text: 'Guest note content' } }],
        recall: { enabled: true, cues: [], summaryText: '', ready: false },
        evidence: [],
        mentions: [],
    });

    await saveFlashcard({
        front: 'Define acceleration',
        back: 'Rate of change of velocity.',
        subject: 'physics',
        sourceNoteId: 'note:physics:1:1:0',
        sourceLabel: 'Physics > Motion',
    });

    await saveNoteAsset({
        noteId: 'note:physics:1:1:0',
        type: 'image',
        data: 'data:image/png;base64,abc',
    });

    const summary = await getGuestDataSummary();
    assert.equal(summary.notes, 1);
    assert.equal(summary.flashcards, 1);
    assert.equal(summary.assets, 1);
    assert.equal(summary.totalItems, 3);

    await clearGuestData();
    const cleared = await getGuestDataSummary();
    assert.equal(cleared.totalItems, 0);
});

test('note asset list and delete round-trip via guest fallback', async () => {
    await __resetMemoryStoreForTests();

    const assetId = await saveNoteAsset({
        noteId: 'note:chemistry:1:2:0',
        type: 'student_highlights',
        data: JSON.stringify([{ text: 'Moles link amounts of substance.' }]),
    });

    const assets = await listNoteAssets('note:chemistry:1:2:0');
    assert.equal(assets.length, 1);
    assert.equal(assets[0].assetId, assetId);
    assert.equal(assets[0].type, 'student_highlights');

    await deleteNoteAsset(assetId);
    const afterDelete = await listNoteAssets('note:chemistry:1:2:0');
    assert.equal(afterDelete.length, 0);
});
