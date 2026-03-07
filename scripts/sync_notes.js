import { DbConnection } from '../src/spacetime/index.js';
import { seedNotes } from '../src/data/seedNotes/index.js';

const SPACETIMEDB_URI = process.env.VITE_SPACETIMEDB_URI || 'https://maincloud.spacetimedb.com';
const SPACETIMEDB_MODULE = process.env.VITE_SPACETIMEDB_MODULE || 'spacetime-backend-otpgp';

const builder = DbConnection.builder()
    .withUri(SPACETIMEDB_URI)
    .withDatabaseName(SPACETIMEDB_MODULE);

builder.onConnect(async (conn, identity) => {
    console.log('Connected to SpacetimeDB with identity:', identity.toHexString());

    const keysToSync = Object.keys(seedNotes);
    console.log(`Syncing ${keysToSync.length} notes...`);

    let successCount = 0;
    for (const key of keysToSync) {
        const note = seedNotes[key];
        if (note) {
            const parts = key.split(':');
            try {
                conn.reducers.upsertNote({
                    noteId: `note:${key}`,
                    subject: parts[0],
                    topicTitle: 'Topic ' + parts[2],
                    subtopicTitle: 'Topic ' + parts[2],
                    breadcrumbs: JSON.stringify([]),
                    contentJson: JSON.stringify({
                        blocks: note.blocks || [],
                        recall: note.recall || { enabled: true, cues: [] },
                        evidence: note.evidence || [],
                        mentions: note.mentions || [],
                    }),
                    confidenceScore: 3,
                    estimatedReadMinutes: 5
                });
                successCount++;
            } catch (err) {
                console.error(`Failed to sync ${key}:`, err);
            }
        }
    }

    console.log(`Successfully queued ${successCount} notes for sync! Waiting 2 seconds then exiting...`);
    setTimeout(() => {
        process.exit(0);
    }, 2000);
});

builder.onConnectError((err) => {
    console.error('Connection failed:', err);
    process.exit(1);
});

builder.build();
