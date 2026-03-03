import test from 'node:test';
import assert from 'node:assert/strict';
import {
    __resetMemoryStoreForTests,
    getNote,
    listFlashcards,
    listNotesBySubject,
    saveFlashcard,
    upsertNote,
} from './noteStore.js';

test('note store persists and lists note headers via memory fallback', async () => {
    __resetMemoryStoreForTests();

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
    __resetMemoryStoreForTests();

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
