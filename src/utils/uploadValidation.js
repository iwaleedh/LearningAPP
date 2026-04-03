export const DEFAULT_UPLOAD_CONFIG = {
    allowedMimeTypes: [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif',
        'application/pdf',
    ],
    maxFileSizeBytes: 10 * 1024 * 1024,
    maxFiles: 5,
};

/**
 * S13 fix: Magic byte (file signature) verification.
 *
 * `file.type` is a client-controlled MIME type string — the browser reads it
 * from the OS file association, not from the file content. An attacker can:
 *   1. Rename `payload.php` → `payload.jpg` → file.type becomes "image/jpeg"
 *   2. Set file.type manually via a crafted FormData payload
 *
 * We validate the actual first bytes of the file content against known signatures.
 * Returns the detected type, or null if the signature is unrecognised.
 *
 * Supported signatures:
 *   JPEG:  FF D8 FF
 *   PNG:   89 50 4E 47 0D 0A 1A 0A
 *   GIF:   47 49 46 38 (GIF8)
 *   WebP:  52 49 46 46 ?? ?? ?? ?? 57 45 42 50 (RIFF....WEBP)
 *   PDF:   25 50 44 46 2D (%PDF-)
 */
export async function detectMimeFromBytes(file) {
    // Read only the first 12 bytes — sufficient for all supported signatures
    const slice = file.slice(0, 12);
    const buffer = await slice.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
        return 'image/jpeg';
    }
    if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
        return 'image/png';
    }
    if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
        return 'image/gif';
    }
    // WebP: RIFF????WEBP
    if (
        bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
        bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
    ) {
        return 'image/webp';
    }
    if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
        return 'application/pdf';
    }
    return null; // unknown / unsupported
}

export function fileFingerprint(file) {
    return `${file.name}::${file.size}::${file.lastModified}`;
}

/**
 * Validates a single file by MIME type allowlist and size limit.
 * Uses `file.type` (fast path). For magic-byte validation, call
 * `validateUploadWithMagicBytes()` instead (async, reads file content).
 */
export function validateUpload(file, config = DEFAULT_UPLOAD_CONFIG) {
    if (!file) return { ok: false, reason: 'No file provided.' };

    if (!config.allowedMimeTypes.includes(file.type)) {
        return { ok: false, reason: 'Unsupported file type. Use JPG, PNG, WEBP, GIF, or PDF.' };
    }

    if (file.size > config.maxFileSizeBytes) {
        const maxMb = Math.round(config.maxFileSizeBytes / (1024 * 1024));
        return { ok: false, reason: `File is too large. Maximum size is ${maxMb}MB.` };
    }

    return { ok: true };
}

/**
 * S13: Async variant that also verifies magic bytes to prevent MIME type bypass.
 * Use this for any upload that will be stored or served to other users.
 */
export async function validateUploadWithMagicBytes(file, config = DEFAULT_UPLOAD_CONFIG) {
    const basic = validateUpload(file, config);
    if (!basic.ok) return basic;

    // Verify the actual file content matches the declared type
    const actualMime = await detectMimeFromBytes(file);
    if (!actualMime) {
        return { ok: false, reason: 'File content does not match a supported format.' };
    }
    if (actualMime !== file.type) {
        return { ok: false, reason: `File content type (${actualMime}) does not match declared type (${file.type}).` };
    }

    return { ok: true };
}

export function validateFileBatch(existingFiles, incomingFiles, config = DEFAULT_UPLOAD_CONFIG) {
    const accepted = [];
    const rejected = [];
    const seen = new Set(existingFiles.map((item) => item.fingerprint));

    for (const file of incomingFiles) {
        if (existingFiles.length + accepted.length >= config.maxFiles) {
            rejected.push({ fileName: file.name, reason: `Maximum of ${config.maxFiles} files reached.` });
            continue;
        }

        const validation = validateUpload(file, config);
        if (!validation.ok) {
            rejected.push({ fileName: file.name, reason: validation.reason });
            continue;
        }

        const fingerprint = fileFingerprint(file);
        if (seen.has(fingerprint)) {
            rejected.push({ fileName: file.name, reason: 'Duplicate file skipped.' });
            continue;
        }

        seen.add(fingerprint);
        accepted.push(file);
    }

    return { accepted, rejected };
}
