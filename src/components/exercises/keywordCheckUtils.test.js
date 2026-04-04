import test from 'node:test';
import assert from 'node:assert/strict';

import { findKeywords, highlightKeywords, normalizeKeywords } from './keywordCheckUtils.js';

test('normalizeKeywords trims, deduplicates, and bounds keyword input', () => {
    const longKeyword = 'x'.repeat(201);
    assert.deepEqual(
        normalizeKeywords([' ATP ', 'atp', '', null, 'photosynthesis', longKeyword]),
        ['ATP', 'photosynthesis']
    );
});

test('findKeywords matches case-insensitively without regex execution risk', () => {
    const found = findKeywords('The pattern (a+)+$ appears with ATP.', ['(a+)+$', 'atp']);
    assert.deepEqual(found, ['(a+)+$', 'atp']);
});

test('highlightKeywords treats metacharacters literally', () => {
    const answer = 'Use (a+)+$ literally and mention ATP -> ADP.';
    const highlighted = highlightKeywords(answer, ['(a+)+$', 'ATP -> ADP']);

    assert.match(highlighted, /⟨\(a\+\)\+\$⟩/);
    assert.match(highlighted, /⟨ATP -> ADP⟩/);
});