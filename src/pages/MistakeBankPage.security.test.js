import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('MistakeBankPage loads and mutates mistakes via the async mistake store', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './MistakeBankPage.jsx'), 'utf8');

    assert.match(source, /useEffect\(\(\) => \{/);
    assert.match(source, /const rows = await listMistakes\(\);/);
    assert.match(source, /const removed = await removeMistake\(id\);/);
    assert.match(source, /const cleared = await clearMistakes\(\);/);
});