import { DbConnection } from './src/spacetime/index.js';

const SPACETIMEDB_URI = 'https://maincloud.spacetimedb.com';
const SPACETIMEDB_MODULE = 'spacetime-backend-otpgp';

const builder = DbConnection.builder()
    .withUri(SPACETIMEDB_URI)
    .withDatabaseName(SPACETIMEDB_MODULE);

builder.onConnect((conn, identity, tokenStr) => {
    console.log("Connected as", identity.toHexString());

    // Auto-register first if needed
    const user = Array.from(conn.db.user.iter()).find(
        u => u.identity.toHexString() === identity.toHexString()
    );

    if (!user) {
        console.log("Registering temp_script user...");
        conn.reducers.registerUser("temp_script_" + Date.now());
    }

    // Wait a brief moment for registration to process before saving note
    setTimeout(() => {
        console.log("Saving chemistry:1:4:0 note...");
        conn.reducers.upsertNote(
            "note:chemistry:1:4:0",
            "chemistry",
            "Test Topic",
            "Test Subtopic",
            "[]",
            JSON.stringify({
                blocks: [{ id: "test-override", type: "paragraph", data: { text: "THIS IS THE DATABASE OVERRIDE!" } }],
                recall: { enabled: true, cues: [] }
            }),
            3,
            5
        );
        console.log("Save dispatched.");
        // Give it a moment to send across websocket
        setTimeout(() => process.exit(0), 2000);
    }, 1500);
});

builder.onConnectError(err => console.error(err));
builder.build();
