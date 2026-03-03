import test from 'node:test';
import assert from 'node:assert/strict';
import { gradeTheoryAnswer } from './gradingClient.js';

test('gradeTheoryAnswer is deterministic for rubric keywords', async () => {
    const answer = [
        'Metallic bonding has positive ions in layers.',
        'A sea of delocalized electrons can flow and carry charge.',
        'The layers can slide so the metal is malleable.',
    ].join(' ');

    const first = await gradeTheoryAnswer({ question: 'q', answer, markScheme: 'm' }, { latencyMs: 0 });
    const second = await gradeTheoryAnswer({ question: 'q', answer, markScheme: 'm' }, { latencyMs: 0 });

    assert.equal(first.score, 6);
    assert.equal(first.maxScore, 6);
    assert.equal(first.percentage, 100);
    assert.deepEqual(first, second);
    assert.equal(first.provider, 'mock');
});

test('gradeTheoryAnswer rejects empty answers', async () => {
    await assert.rejects(
        () => gradeTheoryAnswer({ question: 'q', answer: '   ' }, { latencyMs: 0 }),
        /Answer text is required/
    );
});
