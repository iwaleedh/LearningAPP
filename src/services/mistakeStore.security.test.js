import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('mistakeStore syncs signed-in mistakes through Convex with legacy migration support', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './mistakeStore.js'), 'utf8');

    assert.match(source, /api\.mistakes\.saveMistake/);
    assert.match(source, /api\.mistakes\.listMyMistakes/);
    assert.match(source, /api\.mistakes\.bulkSyncMistakes/);
    assert.match(source, /api\.mistakes\.removeMistake/);
    assert.match(source, /api\.mistakes\.clearMyMistakes/);
    assert.match(source, /getCurrentIdentityMode\(\) === 'authenticated'/);
});