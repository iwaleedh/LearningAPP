import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSubjectGraph, extractMentionsFromDoc } from './mentionGraph.js';

test('extractMentionsFromDoc parses @[[note:...]] tokens', () => {
    const mentions = extractMentionsFromDoc({
        blocks: [
            { id: 'a', data: { text: 'See @[[note:chemistry:1:2:0]] and @[[note:chemistry:1:3:1]]' } },
            { id: 'b', data: { text: 'No mentions here' } },
        ],
    });

    assert.deepEqual(mentions, [
        { fromBlockId: 'a', targetNoteId: 'note:chemistry:1:2:0' },
        { fromBlockId: 'a', targetNoteId: 'note:chemistry:1:3:1' },
    ]);
});

test('buildSubjectGraph uses manual mentions only', () => {
    const graph = buildSubjectGraph('note:chemistry:1:1:0', [
        {
            noteId: 'note:chemistry:1:1:0',
            title: 'Current',
            mentions: [
                { fromBlockId: 'x', targetNoteId: 'note:chemistry:1:2:0' },
                { fromBlockId: 'x', targetNoteId: 'note:chemistry:1:2:0' },
            ],
        },
        { noteId: 'note:chemistry:1:2:0', title: 'Target A', mentions: [] },
        { noteId: 'note:chemistry:1:3:0', title: 'Target B', mentions: [] },
    ]);

    assert.equal(graph.nodes.length, 2);
    assert.equal(graph.edges.length, 1);
    assert.deepEqual(graph.edges[0], { from: 'note:chemistry:1:1:0', to: 'note:chemistry:1:2:0' });
});
