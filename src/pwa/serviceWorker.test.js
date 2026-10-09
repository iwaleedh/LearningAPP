import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../../public/sw.js', import.meta.url), 'utf8');

function createWorker({ fetch, caches }) {
    const handlers = {};
    runInNewContext(source, {
        self: {
            location: { href: 'https://study.test/app/sw.js', origin: 'https://study.test' },
            addEventListener(type, handler) { handlers[type] = handler; },
        },
        fetch, caches, URL, Response,
    });
    return (url, { method = 'GET', mode = 'cors' } = {}) => {
        let response;
        const pending = [];
        handlers.fetch({
            request: { url, method, mode },
            respondWith(promise) { response = promise; },
            waitUntil(promise) { pending.push(promise); },
        });
        return { response, pending };
    };
}

test('offline code requests return cached content or a valid error response', async () => {
    const cached = new Response('cached module');
    const worker = createWorker({
        fetch: async () => { throw new Error('offline'); },
        caches: { match: async (request) => request?.url?.endsWith('/cached.js') ? cached : undefined },
    });
    assert.equal(await (await worker('https://study.test/app/cached.js').response).text(), 'cached module');
    assert.equal((await worker('https://study.test/app/missing.js').response).type, 'error');
    assert.equal((await worker('https://study.test/app/notes', { mode: 'navigate' }).response).type, 'error');
});

test('cache write failures do not break network responses and writes have an extended lifetime', async () => {
    const worker = createWorker({
        fetch: async () => new Response('fresh module'),
        caches: { open: async () => ({ put: async () => { throw new Error('quota'); } }) },
    });
    const event = worker('https://study.test/app/module.js');
    assert.equal(await (await event.response).text(), 'fresh module');
    assert.equal(event.pending.length, 1);
    await Promise.all(event.pending);
});

test('worker does not intercept third-party scripts, POST requests, or cache HTTP errors', async () => {
    let writes = 0;
    const worker = createWorker({
        fetch: async () => new Response('missing', { status: 404 }),
        caches: { open: async () => { writes++; } },
    });
    assert.equal(worker('https://other.test/file.js').response, undefined);
    assert.equal(worker('https://study.test/file.js', { method: 'POST' }).response, undefined);
    assert.equal((await worker('https://study.test/missing.js').response).status, 404);
    assert.equal(writes, 0);
});
