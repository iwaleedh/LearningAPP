import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('timers use anchor-based elapsed time with version checks', () => {
  const source = fs.readFileSync(path.resolve(__dirname, './timers.ts'), 'utf8');

  assert.match(source, /expectedVersion: v\.optional\(v\.number\(\)\)/);
  assert.match(source, /const currentVersion = existingTimer\?\.version \?\? 0;/);
  assert.match(source, /throw new Error\(`Timer state is stale\. Expected version \$\{args\.expectedVersion\}, current version is \$\{currentVersion\}\.`\);/);
  assert.match(source, /accumulatedElapsedMs: nextElapsedMs/);
  assert.match(source, /anchorStartedAt: now/);
  assert.match(source, /version: currentVersion \+ 1/);
  assert.match(source, /return normalizeTimerRecord\(timer, Date\.now\(\)\);/);
});