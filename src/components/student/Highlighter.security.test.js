import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Highlighter scopes DOM traversal and selection handling to the provided content selector', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './Highlighter.jsx'), 'utf8');

    assert.match(source, /export default function Highlighter\(\{ chapterId = 'default', contentSelector = '\.chapter-body' \}\)/);
    assert.match(source, /function getHighlightRoot\(contentSelector\)/);
    assert.match(source, /document\.querySelector\(contentSelector\)/);
    assert.match(source, /root\.querySelectorAll\('\.user-highlight'\)/);
    assert.match(source, /root\.contains\(/);
});