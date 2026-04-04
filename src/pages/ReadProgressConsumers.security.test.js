import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function read(relativePath) {
    return fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
}

test('main progress consumers use useReadProgressSummary instead of local-only read helpers', () => {
    const home = read('./HomePage.jsx');
    const progress = read('./ProgressPage.jsx');
    const streak = read('../components/gamification/StreakTracker.jsx');
    const leaderboard = read('../components/gamification/Leaderboard.jsx');
    const badges = read('../components/gamification/BadgeSystem.jsx');

    assert.match(home, /useReadProgressSummary\(\)/);
    assert.match(progress, /useReadProgressSummary\(\)/);
    assert.match(streak, /useReadProgressSummary\(\)/);
    assert.match(leaderboard, /useReadProgressSummary\(\)/);
    assert.match(badges, /useReadProgressSummary\(\)/);
});