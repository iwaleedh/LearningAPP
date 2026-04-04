import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('ClassTimer derives elapsed time from anchor-based state and forwards expectedVersion', () => {
  const source = fs.readFileSync(path.resolve(__dirname, './ClassTimer.jsx'), 'utf8');

  assert.match(source, /function computeElapsedMs\(timerState, now = Date\.now\(\)\)/);
  assert.match(source, /timerState\?\.accumulatedElapsedMs \?\? timerState\?\.elapsedMs/);
  assert.match(source, /timerState\?\.anchorStartedAt \?\? timerState\?\.startedAt/);
  assert.match(source, /expectedVersion: version/);
  assert.match(source, /setLocalElapsed\(computeElapsedMs\(timerState\)\)/);
});