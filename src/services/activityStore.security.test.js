import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('activityStore refuses to trust local counters for authenticated users', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './activityStore.js'), 'utf8');

    assert.match(source, /import \{ getCurrentIdentityMode \} from '\.\.\/convex-client\.js';/);
    assert.match(source, /function isAuthenticatedIntent\(\) \{\s*return getCurrentIdentityMode\(\) === 'authenticated';\s*\}/);
    assert.match(source, /if \(isAuthenticatedIntent\(\)\) \{\s*return;\s*\}\s*try \{/s);
    assert.match(source, /export function getExercisesDone\(\) \{\s*if \(isAuthenticatedIntent\(\)\) \{\s*return 0;\s*\}/s);
    assert.match(source, /export function getPapersViewed\(\) \{\s*if \(isAuthenticatedIntent\(\)\) \{\s*return 0;\s*\}/s);
});