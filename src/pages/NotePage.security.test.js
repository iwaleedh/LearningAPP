import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('NotePage mounts student tools inside the active note view with note-scoped ids', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './NotePage.jsx'), 'utf8');

    assert.match(source, /import Highlighter from '\.\.\/components\/student\/Highlighter\.jsx';/);
    assert.match(source, /import StickyNotes from '\.\.\/components\/student\/StickyNotes\.jsx';/);
    assert.match(source, /import ExportPDF from '\.\.\/components\/student\/ExportPDF\.jsx';/);
    assert.match(source, /<Highlighter[\s\S]*chapterId=\{noteId\}[\s\S]*contentSelector="\.note-study-content"/);
    assert.match(source, /<StickyNotes[\s\S]*chapterId=\{noteId\}/);
    assert.match(source, /<ExportPDF[\s\S]*chapterId=\{noteId\}[\s\S]*chapterTitle=\{context\.subtopicTitle \|\| context\.topicTitle \|\| 'Chapter'\}/);
    assert.match(source, /<div className="note-study-content chapter-body">/);
});