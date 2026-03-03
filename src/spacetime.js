import { DbConnection } from './spacetime/index';

const SPACETIMEDB_URI = import.meta.env.VITE_SPACETIMEDB_URI || 'http://localhost:3000';
const SPACETIMEDB_MODULE = import.meta.env.VITE_SPACETIMEDB_MODULE || 'spacetime-backend-otpgp';

export let client = null;
let currentIdentity = null;
let connectionCallbacks = [];

export async function initSpacetimeDB() {
    if (client) return client;

    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('spacetime-token') || undefined;

        const builder = DbConnection.builder()
            .withUri(SPACETIMEDB_URI)
            .withModuleName(SPACETIMEDB_MODULE);

        if (token) {
            builder.withToken(token);
        }

        builder.onConnect((conn, identity, tokenStr) => {
            console.log('SpacetimeDB Connected!', { identity, token: tokenStr });

            if (tokenStr) {
                localStorage.setItem('spacetime-token', tokenStr);
            }

            client = conn;
            currentIdentity = identity;

            // Subscribe to public tables we care about
            conn.subscriptionBuilder()
                .onApplied(() => {
                    console.log('SpacetimeDB Subscription Applied!');
                    resolve(client);
                    connectionCallbacks.forEach(cb => cb(client, currentIdentity));
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
