import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('BadgeSystem reads projected server metrics without trusting local activity counters', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './BadgeSystem.jsx'), 'utf8');

    assert.match(source, /callQuery\(api\.badgeMetrics\.getMyBadgeMetrics\)/);
    assert.match(source, /exercisesCompleted: serverMetrics\?\.exercisesCompleted \?\? 0/);
    assert.match(source, /perfectScores: serverMetrics\?\.perfectScores \?\? 0/);
    assert.match(source, /papersCompleted: serverMetrics\?\.papersCompleted \?\? 0/);
    assert.doesNotMatch(source, /getExercisesDone|getPapersViewed|getPerfectScores|getFastCompletions/);
});