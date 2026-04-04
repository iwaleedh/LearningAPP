import test from 'node:test';
import assert from 'node:assert/strict';

import {
    buildExportHtml,
    parseStoredHighlights,
    parseStoredStickyNotes,
} from './exportPdfUtils.js';

test('parseStoredHighlights drops invalid entries and replaces unsafe colors', () => {
    const highlights = parseStoredHighlights(JSON.stringify([
        {
            text: 'Safe text',
            color: '#ffcc00',
            colorName: 'yellow',
            createdAt: '2026-04-03T12:00:00.000Z',
        },
        {
            text: 'Breakout',
            color: '#fff;position:absolute',
            colorName: 'bad',
            createdAt: 'invalid',
        },
        null,
        { text: '' },
    ]));

    assert.equal(highlights.length, 2);
    assert.equal(highlights[0].color, '#ffcc00');
    assert.equal(highlights[1].color, '#facc15');
    assert.equal(highlights[1].createdAt, 'Unknown time');
});

test('parseStoredStickyNotes ignores malformed JSON and normalizes empty notes', () => {
    assert.deepEqual(parseStoredStickyNotes('{'), []);
    assert.deepEqual(
        parseStoredStickyNotes(JSON.stringify([{ content: '   ' }, { content: 'Remember this' }])),
        [{ content: '(empty note)' }, { content: 'Remember this' }]
    );
});

test('buildExportHtml escapes user content and includes restrictive CSP', () => {
    const html = buildExportHtml({
        chapterTitle: '<script>alert(1)</script>',
        highlights: [{
            text: '<img src=x onerror="alert(1)">',
            color: '#ffaa00',
            colorName: 'amber',
            createdAt: '2026-04-03 12:00:00',
        }],
        notes: [{ content: '<svg onload="alert(2)"></svg>' }],
        generatedAt: new Date('2026-04-03T00:00:00.000Z'),
    });

    assert.match(html, /Content-Security-Policy/);
    assert.ok(!html.includes('<script>alert(1)</script>'));
    assert.ok(!html.includes('<img src=x onerror="alert(1)">'));
    assert.ok(!html.includes('<svg onload="alert(2)"></svg>'));
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.match(html, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
    assert.match(html, /&lt;svg onload=&quot;alert\(2\)&quot;&gt;&lt;\/svg&gt;/);
    assert.match(html, /style="background:#ffaa00"/);
});