import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('admin route is wrapped with RequireRole admin guard', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './App.jsx'), 'utf8');

    assert.match(source, /path="\/admin"/);
    assert.match(source, /<RequireRole allowedRoles=\{\['admin'\]\} reason="open the admin dashboard">/);
  });