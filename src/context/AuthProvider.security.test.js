import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('AuthProvider resolves authorization role from server-backed state', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './AuthProvider.jsx'), 'utf8');

    assert.match(source, /const resolvedRole = statusResult\?\.isAdmin \? 'admin' : \(serverRole \|\| user\?\.role \|\| 'student'\);/);
    assert.doesNotMatch(source, /claimedRole \|\| serverRole/);
});