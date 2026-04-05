import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('FlashcardsPage syncs progress through Convex mutations and query-backed hydration', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './FlashcardsPage.jsx'), 'utf8');

    assert.match(source, /callQuery\(api\.flashcards\.listFlashcardProgress\)/);
    assert.match(source, /callMutation\(api\.flashcards\.setFlashcardProgress, \{ cardId: card\.id, status: nextStatus \}\)/);
    assert.match(source, /callMutation\(api\.flashcards\.bulkUpsertFlashcardProgress, \{ statusesJson: JSON\.stringify\(legacyStatus\) \}\)/);
    assert.match(source, /callMutation\(api\.flashcards\.resetFlashcardProgress\)/);
    assert.match(source, /persistLocalStatus\(next\)/);
});