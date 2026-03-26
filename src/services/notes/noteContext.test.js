import test from 'node:test';
import assert from 'node:assert/strict';
import {
    buildNoteId,
    buildBreadcrumbs,
    deriveConfidenceBand,
    estimateReadMinutes,
} from './noteContext.js';

test('buildNoteId returns stable keys', () => {
    assert.equal(
        buildNoteId({ subject: 'chemistry', unitId: 1, topicId: 2, subtopicIndex: 3 }),
        'note:chemistry:1:2:3'
    );
});

test('buildBreadcrumbs returns expected hierarchy', () => {
    const breadcrumbs = buildBreadcrumbs({
        subject: 'economics',
        unitTitle: 'Markets in action',
        topicId: 5,
        subtopicTitle: 'Market failure',
    });

    assert.equal(
        breadcrumbs,
        'A-Level > AL Economics > Markets in action > Topic 5 > Market failure'
    );
});

test('deriveConfidenceBand maps values correctly', () => {
    assert.equal(deriveConfidenceBand(1), 'red');
    assert.equal(deriveConfidenceBand(2), 'red');
    assert.equal(deriveConfidenceBand(3), 'amber');
    assert.equal(deriveConfidenceBand(4), 'green');
    assert.equal(deriveConfidenceBand(5), 'green');
});

test('estimateReadMinutes handles empty and long text', () => {
    assert.equal(estimateReadMinutes(''), 0);
    assert.equal(estimateReadMinutes('a '.repeat(20)), 1);
    assert.equal(estimateReadMinutes('a '.repeat(500)), 3);
});
