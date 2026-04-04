import { getCurrentIdentityMode } from '../../convex-client.js';
import { deleteNoteAsset, listNoteAssets, saveNoteAsset } from './noteStore.js';

const HIGHLIGHT_STORAGE_PREFIX = 'highlights_';
const STICKY_STORAGE_PREFIX = 'stickynotes_';

export const STUDENT_HIGHLIGHTS_ASSET_TYPE = 'student_highlights';
export const STUDENT_STICKY_NOTES_ASSET_TYPE = 'student_sticky_notes';

function normalizeNoteId(noteId) {
    return String(noteId || 'default');
}

function buildDeterministicAssetId(noteId, assetType) {
    return `student-tool:${assetType}:${noteId}`;
}

function buildFallbackId(prefix, index) {
    return `${prefix}:${index}:${Math.random().toString(36).slice(2, 8)}`;
}

function getStorage() {
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
    if (typeof localStorage !== 'undefined') return localStorage;
    return null;
}

function readLegacyItem(key) {
    const storage = getStorage();
    if (!storage) return null;
    try {
        return storage.getItem(key);
    } catch {
        return null;
    }
}

function removeLegacyItem(key) {
    const storage = getStorage();
    if (!storage) return;
    try {
        storage.removeItem(key);
    } catch {
        return;
    }
}

function parseJsonArray(raw) {
    if (!raw) return [];

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return [];
    }

    return Array.isArray(parsed) ? parsed : [];
}

function normalizeTimestamp(value) {
    const iso = new Date(value || Date.now()).toISOString();
    return iso === 'Invalid Date' ? new Date().toISOString() : iso;
}

function normalizeColor(value, fallback) {
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function normalizeText(value) {
    return typeof value === 'string' ? value.trim() : '';
}

function normalizeCoordinate(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeHighlights(items) {
    return items
        .map((item, index) => {
            if (!item || typeof item !== 'object') return null;
            const text = normalizeText(item.text);
            if (!text) return null;

            return {
                id: typeof item.id === 'string' && item.id.trim() ? item.id.trim() : buildFallbackId('highlight', index),
                text,
                color: normalizeColor(item.color, 'rgba(250, 204, 21, 0.4)'),
                colorName: normalizeColor(item.colorName, 'Yellow'),
                createdAt: normalizeTimestamp(item.createdAt),
            };
        })
        .filter(Boolean);
}

function normalizeStickyNotes(items) {
    return items
        .map((item, index) => {
            if (!item || typeof item !== 'object') return null;
            return {
                id: typeof item.id === 'string' && item.id.trim() ? item.id.trim() : buildFallbackId('sticky', index),
                content: typeof item.content === 'string' ? item.content : '',
                color: normalizeColor(item.color, 'var(--sticky-yellow, #fef3c7)'),
                x: normalizeCoordinate(item.x, 40),
                y: normalizeCoordinate(item.y, 60),
            };
        })
        .filter(Boolean);
}

function getLegacyKeys(noteId) {
    return {
        highlights: `${HIGHLIGHT_STORAGE_PREFIX}${noteId}`,
        notes: `${STICKY_STORAGE_PREFIX}${noteId}`,
    };
}

function parseAssetData(asset, normalizer) {
    return normalizer(parseJsonArray(asset?.data));
}

async function loadAssetItems(noteId, assetType, normalizer) {
    const assets = await listNoteAssets(noteId, { type: assetType });
    const asset = assets[0] || null;
    if (!asset) {
        return { asset: null, items: [] };
    }

    return {
        asset,
        items: parseAssetData(asset, normalizer),
    };
}

async function persistAssetItems(noteId, assetType, items) {
    const normalizedNoteId = normalizeNoteId(noteId);
    if (items.length === 0) {
        await deleteNoteAsset(buildDeterministicAssetId(normalizedNoteId, assetType));
        return [];
    }

    await saveNoteAsset({
        assetId: buildDeterministicAssetId(normalizedNoteId, assetType),
        noteId: normalizedNoteId,
        type: assetType,
        data: JSON.stringify(items),
    });
    return items;
}

async function migrateLegacyItems({ noteId, legacyKey, items, save }) {
    if (items.length === 0) {
        return [];
    }

    await save(noteId, items);
    removeLegacyItem(legacyKey);
    return items;
}

async function loadOrMigrateItems({ noteId, assetType, normalizer, legacyKey, save }) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const { items } = await loadAssetItems(normalizedNoteId, assetType, normalizer);
    if (items.length > 0) {
        return items;
    }

    const legacyItems = normalizer(parseJsonArray(readLegacyItem(legacyKey)));
    if (legacyItems.length === 0) {
        return [];
    }

    try {
        return await migrateLegacyItems({
            noteId: normalizedNoteId,
            legacyKey,
            items: legacyItems,
            save,
        });
    } catch {
        if (getCurrentIdentityMode() === 'authenticated') {
            return [];
        }
        return legacyItems;
    }
}

export async function loadStudentHighlights(noteId) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const keys = getLegacyKeys(normalizedNoteId);
    return await loadOrMigrateItems({
        noteId: normalizedNoteId,
        assetType: STUDENT_HIGHLIGHTS_ASSET_TYPE,
        normalizer: normalizeHighlights,
        legacyKey: keys.highlights,
        save: saveStudentHighlights,
    });
}

export async function saveStudentHighlights(noteId, highlights) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const normalizedHighlights = normalizeHighlights(highlights);
    return await persistAssetItems(normalizedNoteId, STUDENT_HIGHLIGHTS_ASSET_TYPE, normalizedHighlights);
}

export async function loadStudentStickyNotes(noteId) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const keys = getLegacyKeys(normalizedNoteId);
    return await loadOrMigrateItems({
        noteId: normalizedNoteId,
        assetType: STUDENT_STICKY_NOTES_ASSET_TYPE,
        normalizer: normalizeStickyNotes,
        legacyKey: keys.notes,
        save: saveStudentStickyNotes,
    });
}

export async function saveStudentStickyNotes(noteId, notes) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const normalizedNotes = normalizeStickyNotes(notes);
    return await persistAssetItems(normalizedNoteId, STUDENT_STICKY_NOTES_ASSET_TYPE, normalizedNotes);
}

export async function loadStudentToolExportData(noteId) {
    const normalizedNoteId = normalizeNoteId(noteId);
    const [highlights, notes] = await Promise.all([
        loadStudentHighlights(normalizedNoteId),
        loadStudentStickyNotes(normalizedNoteId),
    ]);

    return {
        highlights,
        notes,
    };
}