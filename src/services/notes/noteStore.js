import { deriveConfidenceBand, estimateReadMinutes } from './noteContext.js';
import { extractMentionsFromDoc } from './mentionGraph.js';
import { getClient, getCurrentUserId, api, callMutation, callQuery } from '../../convex-client.js';

export function getStorageCapabilities() {
    return {
        indexedDbAvailable: false,
        usingMemoryFallback: false,
        message: 'Using Convex',
    };
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
    } catch (e) {
        console.error('Failed to parse note content', row.noteId, e);
        return null;
    }
}

export async function getNote(noteId) {
    const client = getClient();
    if (!client) return null;

    try {
        const row = await callQuery(api.notes.getNote, { noteId });
        if (!row) return null;
        return mapConvexNoteRow(row);
    } catch (e) {
        console.error('getNote failed:', e);
        return null;
    }
}

export async function upsertNote(noteDoc) {
    const normalized = normalizeNoteDocument({
        ...noteDoc,
        lastEditedAt: new Date().toISOString(),
    });

    const contentJson = JSON.stringify({
        blocks: normalized.blocks,
        recall: normalized.recall,
        evidence: normalized.evidence,
        mentions: normalized.mentions,
    });

    const breadcrumbsStr = JSON.stringify(normalized.breadcrumbs || []);
    const userId = getCurrentUserId();
    if (!userId) return;

    await callMutation(api.notes.upsertNote, {
        noteId: normalized.noteId,
        ownerUserId: userId,
        subject: normalized.subject || '',
        title: normalized.topicTitle || '',
        subtopicTitle: normalized.subtopicTitle || '',
        breadcrumbs: breadcrumbsStr,
        contentJson,
        confidenceScore: normalized.confidenceScore,
        estimatedReadMinutes: Math.floor(normalized.estimatedReadMinutes || 0),
    });
}

export async function listNotesBySubject(subject) {
    const key = String(subject).toLowerCase();
    const client = getClient();
    if (!client) return [];

    try {
        const rows = await callQuery(api.notes.listNotesBySubject, { subject: key });
        if (!rows) return [];

        const notes = rows
            .map(row => mapConvexNoteRow(row))
            .filter(Boolean);

        notes.sort((a, b) => String(b.lastEditedAt).localeCompare(String(a.lastEditedAt)));
        return notes.map((item) => toHeader(item));
    } catch (e) {
        console.error('listNotesBySubject failed:', e);
        return [];
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

export async function saveFlashcard(card) {
    const cardId = card.cardId || `card:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    const front = String(card.front || '').trim();
    const back = String(card.back || '').trim();
    const subject = String(card.subject || '').toLowerCase();
    const sourceNoteId = String(card.sourceNoteId || '');
    const sourceLabel = String(card.sourceLabel || '');
    const userId = getCurrentUserId();
    if (!userId) return;

    await callMutation(api.flashcards.saveFlashcard, {
        cardId,
        ownerUserId: userId,
        subject,
        sourceNoteId,
        sourceLabel,
        front,
        back,
    });
}

export async function listFlashcards(filters = {}) {
    const client = getClient();
    if (!client) return [];

    try {
        const rows = await callQuery(api.flashcards.listFlashcards, {
            subject: filters.subject ? String(filters.subject).toLowerCase() : undefined,
            ownerUserId: undefined,
        });
        if (!rows) return [];

        let cards = rows.map(row => mapConvexFlashcardRow(row));

        if (filters.sourceNoteId) {
            cards = cards.filter(item => item.sourceNoteId === String(filters.sourceNoteId));
        }

        return cards.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    } catch (e) {
        console.error('listFlashcards failed:', e);
        return [];
    }
}

export async function saveNoteAsset(asset) {
    const assetId = asset.assetId || `asset:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    const noteId = String(asset.noteId || '');
    const type = String(asset.type || '');
    const data = asset.data || '';
    const userId = getCurrentUserId();
    if (!userId) return assetId;

    await callMutation(api.assets.saveNoteAsset, {
        assetId,
        noteId,
        ownerUserId: userId,
        assetType: type,
        data,
    });

    return assetId;
}

export async function deleteNote(noteId) {
    await callMutation(api.notes.deleteNote, { noteId: String(noteId) });
}

export async function deleteFlashcard(cardId) {
    await callMutation(api.flashcards.deleteFlashcard, { cardId: String(cardId) });
}

export function __resetMemoryStoreForTests() {
    // No-op for Convex tests
}
