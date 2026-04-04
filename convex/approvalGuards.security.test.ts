import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readLocal(file: string) {
  return fs.readFileSync(path.resolve(__dirname, file), 'utf8');
}

test('protected content modules use approved-account guards', () => {
  const notes = readLocal('./notes.ts');
  const flashcards = readLocal('./flashcards.ts');
  const assets = readLocal('./assets.ts');
  const attempts = readLocal('./studyAttempts.ts');
  const liveclass = readLocal('./liveclass.ts');
  const authHelpers = readLocal('./authHelpers.ts');

  assert.match(authHelpers, /export async function requireApprovedAuthenticatedUserId\(/);
  assert.match(authHelpers, /export async function requireApprovedMatchingUserId\(/);
  assert.match(notes, /requireApprovedAuthenticatedUserId|requireApprovedMatchingUserId/);
  assert.match(flashcards, /requireApprovedAuthenticatedUserId|requireApprovedMatchingUserId/);
  assert.match(assets, /requireApprovedAuthenticatedUserId|requireApprovedMatchingUserId/);
  assert.match(attempts, /requireApprovedAuthenticatedUserId/);
  assert.match(liveclass, /requireApprovedAuthenticatedUserId|requireApprovedMatchingUserId/);
});