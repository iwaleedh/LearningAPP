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

export function fileFingerprint(file) {
    return `${file.name}::${file.size}::${file.lastModified}`;
}

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
