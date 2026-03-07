import { Identity } from 'spacetimedb';
import { DbConnection } from './spacetime/index.js';

const SPACETIMEDB_URI = import.meta.env.VITE_SPACETIMEDB_URI || 'http://localhost:3000';
const SPACETIMEDB_MODULE = import.meta.env.VITE_SPACETIMEDB_MODULE || 'spacetime-backend-dev';

export let client = null;
let currentIdentity = null;
let connectionCallbacks = [];
let hasRequestedRegistration = false;
let isInitialized = false;

export async function initSpacetimeDB() {
    if (client) return client;

    return new Promise((resolve, reject) => {
        const tokenKey = `spacetime-token-${SPACETIMEDB_URI}`;
        const token = localStorage.getItem(tokenKey) || undefined;

        const builder = DbConnection.builder()
            .withUri(SPACETIMEDB_URI)
            .withDatabaseName(SPACETIMEDB_MODULE);

        if (token) {
            builder.withToken(token);
        }

        builder.onConnect((conn, identity, tokenStr) => {
            console.log('SpacetimeDB Connected!', { identity, token: tokenStr });

            if (tokenStr) {
                localStorage.setItem(`spacetime-token-${SPACETIMEDB_URI}`, tokenStr);
            }

            client = conn;
            currentIdentity = identity;

            // Subscribe to public tables we care about
            conn.subscriptionBuilder()
                .onApplied(() => {
                    // Auto-register user if they don't exist
                    const user = Array.from(client.db.user.iter()).find(
                        u => u.identity.toHexString() === identity.toHexString()
                    );

                    if (!user && !hasRequestedRegistration) {
                        hasRequestedRegistration = true;
                        const randomUsername = 'user_' + identity.toHexString().substring(0, 6) + '_' + Date.now();
                        console.log('Registering new user:', randomUsername);
                        client.reducers.registerUser({ username: randomUsername });
                    } else if (user) {
                        hasRequestedRegistration = true; // prevent future triggers if user was found
                    }

                    if (!isInitialized) {
                        isInitialized = true;
                        resolve(client);
                        connectionCallbacks.forEach(cb => cb(client, currentIdentity));
                        connectionCallbacks = [];
                    }
                })
                .subscribe([
                    "SELECT * FROM user",
                    "SELECT * FROM note",
                    "SELECT * FROM flashcard",
                    "SELECT * FROM note_asset"
                ]);
        });

        builder.onConnectError((err) => {
            console.error('SpacetimeDB Connect Error:', err);
            reject(err);
        });

        builder.onDisconnect(() => {
            console.log('SpacetimeDB Disconnected!');
        });

        builder.build();
    });
}

export function onSpacetimeDBReady(callback) {
    if (client && currentIdentity) {
        callback(client, currentIdentity);
    } else {
        connectionCallbacks.push(callback);
    }
}

export function getCurrentIdentity() {
    return currentIdentity;
}

export function getClient() {
    return client;
}
