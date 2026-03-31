import { deriveConfidenceBand, estimateReadMinutes } from './noteContext.js';
import { extractMentionsFromDoc } from './mentionGraph.js';
import { getClient, getCurrentUserId, api, callMutation, callQuery } from '../../convex-client.js';
import { logger } from '../logger/logger.js';
import {
    __resetGuestDataStoreForTests,
    clearGuestData as clearPersistedGuestData,
    deleteGuestFlashcard,
    deleteGuestNote,
    deleteGuestNoteAsset,
    getAllGuestFlashcards,
    getAllGuestNoteAssets,
    getAllGuestNotes,
    getGuestDataSummary as getPersistedGuestDataSummary,
    getGuestNote,
    getGuestStoreCapabilities,
    listGuestFlashcards,
    listGuestNotesBySubject,
    saveGuestFlashcard,
    saveGuestNote,
    saveGuestNoteAsset,
} from './guestDataStore.js';

const log = logger.child({ component: 'noteStore' });

function isAuthError(error) {
    const message = String(error?.message || error || '').toLowerCase();
    return (
        message.includes('authentication required') ||
        message.includes('not authenticated') ||
        message.includes('not authorized') ||
        message.includes('teacher access required')
    );
}

export function getStorageCapabilities() {
    return getGuestStoreCapabilities();
}

function collectTextValues(value, output) {
    if (typeof value === 'string') {
        output.push(value);
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((item) => collectTextValues(item, output));
        return;
    }
    if (value && typeof value === 'object') {
        Object.values(value).forEach((item) => collectTextValues(item, output));
    }
}

function blocksToText(blocks) {
    return (blocks || []).map((block) => {
        const parts = [];
        collectTextValues(block?.data, parts);
        return parts.join(' ');
    }).join(' ');
}

function firstSnippet(blocks) {
    for (const block of blocks || []) {
        const text = blocksToText([block]).trim();
        if (text) return text.slice(0, 160);
    }
    return '';
}

function normalizeNoteDocument(noteDoc) {
    const now = new Date().toISOString();
    const blocks = Array.isArray(noteDoc.blocks) ? noteDoc.blocks : [];
    const recall = noteDoc.recall || { enabled: true, cues: [], summaryText: '', ready: false };

    const merged = {
        ...noteDoc,
        blocks,
        recall: {
            enabled: Boolean(recall.enabled),
            cues: Array.isArray(recall.cues) ? recall.cues : [],
            summaryText: String(recall.summaryText || ''),
            ready: Boolean(recall.ready),
        },
        evidence: Array.isArray(noteDoc.evidence) ? noteDoc.evidence : [],
        mentions: Array.isArray(noteDoc.mentions)
            ? noteDoc.mentions
            : extractMentionsFromDoc({ blocks }),
        confidenceScore: Math.min(5, Math.max(1, Number(noteDoc.confidenceScore || 3))),
        createdAt: noteDoc.createdAt || now,
        lastEditedAt: noteDoc.lastEditedAt || now,
    };

    merged.confidenceBand = deriveConfidenceBand(merged.confidenceScore);

    const computedRead = estimateReadMinutes(blocksToText(blocks));
    merged.estimatedReadMinutes = merged.estimatedReadMinutesOverride
        ? Number(merged.estimatedReadMinutesOverride)
        : computedRead;

    return merged;
}

function toHeader(note) {
    return {
        noteId: note.noteId,
        subject: note.subject,
        title: note.subtopicTitle || note.topicTitle || note.noteId,
        subtopicTitle: note.subtopicTitle || '',
        breadcrumbs: note.breadcrumbs,
        confidenceScore: note.confidenceScore,
        confidenceBand: note.confidenceBand,
        estimatedReadMinutes: note.estimatedReadMinutes,
        lastEditedAt: note.lastEditedAt,
        firstSnippet: firstSnippet(note.blocks),
    };
}

function buildNoteMutationArgs(noteDoc) {
    return {
        noteId: noteDoc.noteId,
        subject: noteDoc.subject || '',
        title: noteDoc.topicTitle || '',
        subtopicTitle: noteDoc.subtopicTitle || '',
        breadcrumbs: JSON.stringify(noteDoc.breadcrumbs || []),
        contentJson: JSON.stringify({
            blocks: noteDoc.blocks,
            recall: noteDoc.recall,
            evidence: noteDoc.evidence,
            mentions: noteDoc.mentions,
        }),
        confidenceScore: noteDoc.confidenceScore,
        estimatedReadMinutes: Math.floor(noteDoc.estimatedReadMinutes || 0),
    };
}

function buildFlashcardRecord(card) {
    return {
        cardId: card.cardId || `card:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
        subject: String(card.subject || '').toLowerCase(),
        sourceNoteId: String(card.sourceNoteId || ''),
        sourceLabel: String(card.sourceLabel || ''),
        front: String(card.front || '').trim(),
        back: String(card.back || '').trim(),
        createdAt: card.createdAt || new Date().toISOString(),
    };
}

function buildFlashcardMutationArgs(card) {
    return {
        cardId: card.cardId,
        subject: card.subject,
        sourceNoteId: card.sourceNoteId,
        sourceLabel: card.sourceLabel,
        front: card.front,
        back: card.back,
    };
}

function buildAssetRecord(asset) {
    return {
        assetId: asset.assetId || `asset:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`,
        noteId: String(asset.noteId || ''),
        type: String(asset.type || ''),
        data: asset.data || '',
        createdAt: asset.createdAt || new Date().toISOString(),
    };
}

function buildAssetMutationArgs(asset) {
    return {
        assetId: asset.assetId,
        noteId: asset.noteId,
        assetType: asset.type,
        data: asset.data,
    };
}

// Map Convex note row back to local app format
function mapConvexNoteRow(row) {
    try {
        const content = JSON.parse(row.contentJson);
        const breadcrumbs = JSON.parse(row.breadcrumbs || '[]');
        return normalizeNoteDocument({
            noteId: row.noteId,
            subject: row.subject,
            topicTitle: row.title,
            subtopicTitle: row.subtopicTitle || '',
            breadcrumbs,
            blocks: content.blocks || [],
            recall: content.recall || {},
            evidence: content.evidence || [],
            mentions: content.mentions || [],
            confidenceScore: row.confidenceScore,
            estimatedReadMinutesOverride: row.estimatedReadMinutes,
            createdAt: new Date(row.createdAt).toISOString(),
            lastEditedAt: new Date(row.lastEditedAt).toISOString(),
            ownerUserId: row.ownerUserId,
        });
    } catch (error) {
        log.error('Failed to parse note content', { noteId: row.noteId, error: error.message });
        return null;
    }
}

// Map Convex Flashcard row back to app format
function mapConvexFlashcardRow(row) {
    return {
        cardId: row.cardId,
        subject: row.subject,
        sourceNoteId: row.sourceNoteId,
        sourceLabel: row.sourceLabel,
        front: row.front,
        back: row.back,
        createdAt: new Date(row.createdAt).toISOString(),
        ownerUserId: row.ownerUserId,
    };
}

export async function getNote(noteId) {
    const client = getClient();
    if (!client) return await getGuestNote(noteId);

    try {
        const row = await callQuery(api.notes.getNote, { noteId });
        if (!row) return null;
        return mapConvexNoteRow(row);
    } catch (error) {
        log.error('getNote failed', { error: error.message });
        return await getGuestNote(noteId);
    }
}

export async function upsertNote(noteDoc) {
    const normalized = normalizeNoteDocument({
        ...noteDoc,
        lastEditedAt: new Date().toISOString(),
    });
    const mutationArgs = buildNoteMutationArgs(normalized);
    const userId = getCurrentUserId();
    const client = getClient();

    if (!userId || !client) {
        await saveGuestNote(normalized);
        return;
    }

    try {
        await callMutation(api.notes.upsertNote, mutationArgs);
    } catch (error) {
        if (isAuthError(error)) {
            await saveGuestNote(normalized);
            return;
        }
        throw error;
    }
}

export async function listNotesBySubject(subject) {
    const key = String(subject).toLowerCase();
    const client = getClient();
    const localResults = async () => {
        const results = await listGuestNotesBySubject(key);
        return results.map((note) => toHeader(note));
    };

    if (!client) {
        return await localResults();
    }

    try {
        const rows = await callQuery(api.notes.listNotesBySubject, { subject: key });
        if (!rows) return [];

        const notes = rows
            .map((row) => mapConvexNoteRow(row))
            .filter(Boolean);

        notes.sort((a, b) => String(b.lastEditedAt).localeCompare(String(a.lastEditedAt)));
        return notes.map((item) => toHeader(item));
    } catch (error) {
        log.error('listNotesBySubject failed', { error: error.message });
        return await localResults();
    }
}

export async function saveFlashcard(card) {
    const normalizedCard = buildFlashcardRecord(card);
    const userId = getCurrentUserId();
    const client = getClient();

    if (!userId || !client) {
        await saveGuestFlashcard(normalizedCard);
        return;
    }

    try {
        await callMutation(api.flashcards.saveFlashcard, buildFlashcardMutationArgs(normalizedCard));
    } catch (error) {
        if (isAuthError(error)) {
            await saveGuestFlashcard(normalizedCard);
            return;
        }
        throw error;
    }
}

export async function listFlashcards(filters = {}) {
    const client = getClient();
    const localCards = async () => {
        return await listGuestFlashcards(filters);
    };

    if (!client) {
        return await localCards();
    }

    try {
        const rows = await callQuery(api.flashcards.listFlashcards, {
            subject: filters.subject ? String(filters.subject).toLowerCase() : undefined,
        });
        if (!rows) return [];

        let cards = rows.map((row) => mapConvexFlashcardRow(row));
        if (filters.sourceNoteId) {
            cards = cards.filter((item) => item.sourceNoteId === String(filters.sourceNoteId));
        }

        return cards.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    } catch (error) {
        log.error('listFlashcards failed', { error: error.message });
        return await localCards();
    }
}

export async function saveNoteAsset(asset) {
    const normalizedAsset = buildAssetRecord(asset);
    const userId = getCurrentUserId();
    const client = getClient();

    if (!userId || !client) {
        await saveGuestNoteAsset(normalizedAsset);
        return normalizedAsset.assetId;
    }

    try {
        await callMutation(api.assets.saveNoteAsset, buildAssetMutationArgs(normalizedAsset));
    } catch (error) {
        if (isAuthError(error)) {
            await saveGuestNoteAsset(normalizedAsset);
            return normalizedAsset.assetId;
        }
        throw error;
    }

    return normalizedAsset.assetId;
}

export async function deleteNote(noteId) {
    const client = getClient();
    if (!client) {
        await deleteGuestNote(String(noteId));
        return;
    }

    try {
        await callMutation(api.notes.deleteNote, { noteId: String(noteId) });
    } catch (error) {
        if (isAuthError(error)) {
            await deleteGuestNote(String(noteId));
            return;
        }
        throw error;
    }
}

export async function deleteFlashcard(cardId) {
    const client = getClient();
    if (!client) {
        await deleteGuestFlashcard(String(cardId));
        return;
    }

    try {
        await callMutation(api.flashcards.deleteFlashcard, { cardId: String(cardId) });
    } catch (error) {
        if (isAuthError(error)) {
            await deleteGuestFlashcard(String(cardId));
            return;
        }
        throw error;
    }
}

export async function getGuestDataSummary() {
    return await getPersistedGuestDataSummary();
}

export async function clearGuestData() {
    await clearPersistedGuestData();
}

export async function importGuestDataToAccount() {
    const client = getClient();
    if (!client) {
        throw new Error('Sign in is required before importing guest data.');
    }

    const [notes, flashcards, assets] = await Promise.all([
        getAllGuestNotes(),
        getAllGuestFlashcards(),
        getAllGuestNoteAssets(),
    ]);

    const result = {
        notesImported: 0,
        flashcardsImported: 0,
        assetsImported: 0,
        errors: [],
    };

    for (const note of notes) {
        try {
            const normalizedNote = normalizeNoteDocument(note);
            await callMutation(api.notes.upsertNote, buildNoteMutationArgs(normalizedNote));
            await deleteGuestNote(normalizedNote.noteId);
            result.notesImported += 1;
        } catch (error) {
            result.errors.push(`Note ${note.noteId}: ${error?.message || error}`);
        }
    }

    for (const card of flashcards) {
        try {
            const normalizedCard = buildFlashcardRecord(card);
            await callMutation(api.flashcards.saveFlashcard, buildFlashcardMutationArgs(normalizedCard));
            await deleteGuestFlashcard(normalizedCard.cardId);
            result.flashcardsImported += 1;
        } catch (error) {
            result.errors.push(`Flashcard ${card.cardId}: ${error?.message || error}`);
        }
    }

    for (const asset of assets) {
        try {
            const normalizedAsset = buildAssetRecord(asset);
            await callMutation(api.assets.saveNoteAsset, buildAssetMutationArgs(normalizedAsset));
            await deleteGuestNoteAsset(normalizedAsset.assetId);
            result.assetsImported += 1;
        } catch (error) {
            result.errors.push(`Asset ${asset.assetId}: ${error?.message || error}`);
        }
    }

    return result;
}

export function __resetMemoryStoreForTests() {
    return __resetGuestDataStoreForTests();
}
