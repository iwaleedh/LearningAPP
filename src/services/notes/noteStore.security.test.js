import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('note store blocks guest fallback for authenticated intent', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './noteStore.js'), 'utf8');

    assert.match(source, /import \{ getClient, getCurrentIdentityMode, getCurrentUserId, api, callMutation, callQuery \} from '\.\.\/\.\.\/convex-client\.js';/);
    assert.match(source, /function isAuthenticatedIntent\(\) \{\s*return getCurrentIdentityMode\(\) === 'authenticated';\s*\}/);
    assert.match(source, /if \(isAuthError\(error\)\) \{\s*if \(isAuthenticatedIntent\(\)\) \{\s*throw buildAuthUnavailableError\('note save', error\);/s);
    assert.match(source, /if \(isAuthenticatedIntent\(\)\) \{\s*return \[\];\s*\}\s*return await localCards\(\);/s);
});