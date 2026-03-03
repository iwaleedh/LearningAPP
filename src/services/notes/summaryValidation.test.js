import test from 'node:test';
import assert from 'node:assert/strict';
import { countWords, isExact50Words } from './summaryValidation.js';

test('countWords counts trimmed words', () => {
    assert.equal(countWords(''), 0);
    assert.equal(countWords('  one   two three  '), 3);
});

test('isExact50Words enforces strict 50 rule', () => {
    const fortyNine = Array.from({ length: 49 }, (_v, i) => `w${i}`).join(' ');
    const fifty = Array.from({ length: 50 }, (_v, i) => `w${i}`).join(' ');
    const fiftyOne = Array.from({ length: 51 }, (_v, i) => `w${i}`).join(' ');

    assert.equal(isExact50Words(fortyNine), false);
    assert.equal(isExact50Words(fifty), true);
    assert.equal(isExact50Words(fiftyOne), false);
});
