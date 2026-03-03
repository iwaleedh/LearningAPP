import test from 'node:test';
import assert from 'node:assert/strict';
import {
    buildValidNoteIdSet,
    getObjectiveForNote,
    validateObjectiveKeyMap,
} from './noteObjectives/index.js';

test('objective key validator returns no invalid keys for scaffold datasets', () => {
    const errors = validateObjectiveKeyMap();
    assert.equal(errors.length, 0);
});

test('valid note id set contains known syllabus subtopics', () => {
    const ids = buildValidNoteIdSet();
    assert.ok(ids.has('note:chemistry:1:1:0'));
    assert.ok(ids.has('note:biology:1:1:0'));
});

test('objective lookup falls back to generated prompt', () => {
    const objective = getObjectiveForNote({
        subject: 'physics',
        noteId: 'note:physics:1:1:0',
        subtopicTitle: 'SUVAT equations in 1D motion',
    });

    assert.match(objective, /SUVAT equations in 1D motion/);
});
