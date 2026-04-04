import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('HomePage uses server-backed activity metrics for signed-in stats', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './HomePage.jsx'), 'utf8');

    assert.match(source, /useQuery\(api\.activityMetrics\.getMyActivityMetrics\)/);
    assert.match(source, /exercisesDone: badgeMetrics\?\.exercisesCompleted \?\? activityMetrics\?\.exercisesDone \?\? 0/);
    assert.match(source, /papersViewed: activityMetrics\?\.papersViewed \?\? 0/);
    assert.doesNotMatch(source, /getExercisesDone\(|getPapersViewed\(/);
});