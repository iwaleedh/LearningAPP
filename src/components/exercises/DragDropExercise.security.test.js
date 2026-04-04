import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('DragDropExercise emits durable itemId telemetry for placements', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './DragDropExercise.jsx'), 'utf8');

    assert.match(source, /function resolveDurableItemId\(item, originalIndex\)/);
    assert.match(source, /itemId: resolveDurableItemId\(item, originalIndex\)/);
    assert.match(source, /itemId: item\.itemId/);
    assert.match(source, /expectedCategory: item\.category/);
    assert.match(source, /placedCategory,/);
    assert.match(source, /placements,/);
});