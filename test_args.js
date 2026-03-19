/* global process */
import { DbConnection } from './src/spacetime/index.js';

const SPACETIMEDB_URI = 'https://maincloud.spacetimedb.com';
const SPACETIMEDB_MODULE = 'spacetime-backend-otpgp';

const builder = DbConnection.builder()
    .withUri(SPACETIMEDB_URI)
    .withDatabaseName(SPACETIMEDB_MODULE);

builder.onConnect((conn, identity) => {
    console.log("Connected as", identity.toHexString());

    // Test both formats
    try {
        console.log("Testing object arguments...");
        conn.reducers.registerUser({ username: "test_obj" });
        console.log("Object arguments ACCEPTED by SDK");
    } catch (e) {
        console.log("Object arguments FAILED SDK verification:", e.message);
    }

    try {
        console.log("Testing positional arguments...");
        conn.reducers.registerUser("test_pos");
        console.log("Positional arguments ACCEPTED by SDK");
    } catch (e) {
        console.log("Positional arguments FAILED SDK verification:", e.message);
    }

    setTimeout(() => process.exit(0), 1000);
});

builder.onConnectError(err => console.error(err));
builder.build();
