import test from 'node:test';
import assert from 'node:assert/strict';
import {
    DEFAULT_UPLOAD_CONFIG,
    fileFingerprint,
    validateUpload,
    validateFileBatch,
} from './uploadValidation.js';

function fakeFile({
    name = 'file.png',
    size = 1024,
    type = 'image/png',
    lastModified = 1700000000000,
} = {}) {
    return { name, size, type, lastModified };
}

test('validateUpload rejects unsupported types and oversized files', () => {
    const invalidType = validateUpload(fakeFile({ type: 'text/plain' }));
    assert.equal(invalidType.ok, false);

    const oversized = validateUpload(fakeFile({ size: DEFAULT_UPLOAD_CONFIG.maxFileSizeBytes + 1 }));
    assert.equal(oversized.ok, false);

    const valid = validateUpload(fakeFile());
    assert.equal(valid.ok, true);
});

test('validateFileBatch enforces duplicates and max count', () => {
    const existing = [{
        id: '1',
        fingerprint: fileFingerprint(fakeFile({ name: 'existing.png' })),
    }];

    const incoming = [
        fakeFile({ name: 'existing.png' }),
        fakeFile({ name: 'new1.png', lastModified: 1700000000001 }),
        fakeFile({ name: 'new2.png', lastModified: 1700000000002 }),
        fakeFile({ name: 'new3.png', lastModified: 1700000000003 }),
        fakeFile({ name: 'new4.png', lastModified: 1700000000004 }),
        fakeFile({ name: 'new5.png', lastModified: 1700000000005 }),
    ];

    const { accepted, rejected } = validateFileBatch(existing, incoming, DEFAULT_UPLOAD_CONFIG);

    assert.equal(accepted.length, 4);
    assert.ok(rejected.length >= 2);
    assert.ok(rejected.some((item) => item.reason.includes('Duplicate')));
    assert.ok(rejected.some((item) => item.reason.includes('Maximum')));
});
