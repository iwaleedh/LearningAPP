import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('useNoteReadStatus hydrates from readProgress query and migrates local read cache', () => {
    const source = fs.readFileSync(path.resolve(__dirname, './useNoteReadStatus.js'), 'utf8');

    assert.match(source, /useQuery\(api\.readProgress\.getMyReadProgressSummary\)/);
    assert.match(source, /useMutation\(api\.readProgress\.bulkSyncReadProgress\)/);
    assert.match(source, /useMutation\(api\.readProgress\.markNoteRead\)/);
    assert.match(source, /useMutation\(api\.readProgress\.markNoteUnread\)/);
    assert.match(source, /readStatesJson: JSON\.stringify\(toBulkSyncPayload\(localSummary\)\)/);
});

test('settings and note export use the server-backed read progress APIs', () => {
    const settingsSource = fs.readFileSync(path.resolve(__dirname, '../pages/SettingsPage.jsx'), 'utf8');
    const exportSource = fs.readFileSync(path.resolve(__dirname, '../services/notes/noteExport.js'), 'utf8');

    assert.match(settingsSource, /useMutation\(api\.readProgress\.resetMyReadProgress\)/);
    assert.match(settingsSource, /clearLocalReadProgress\(\)/);
    assert.match(exportSource, /getReadProgressSnapshot\(\)/);
});