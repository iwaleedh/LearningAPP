import { deriveConfidenceBand, estimateReadMinutes } from './noteContext.js';
import { extractMentionsFromDoc } from './mentionGraph.js';
import { getClient } from '../../spacetime.js';
import { tables, reducers } from '../../spacetime/index.js';

export function getStorageCapabilities() {
    return {
        indexedDbAvailable: false,
        usingMemoryFallback: false,
        message: 'Using SpacetimeDB',
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

// Map SpacetimeDB row back to local app format
function mapSpacetimeNoteRow(row) {
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
            createdAt: new Date(Number(row.createdAt) * 1000).toISOString(),
            lastEditedAt: new Date(Number(row.lastEditedAt) * 1000).toISOString(),
            ownerIdentity: row.ownerIdentity.toHexString(),
        });
    } catch (e) {
        console.error('Failed to parse note content', row.noteId, e);
        return null;
    }
}

export async function getNote(noteId) {
    const client = getClient();
    if (!client) return null;

    // Using simple iteration since primary key queries map to normal array finds
    const row = Array.from(tables.note.iter()).find(n => n.noteId === noteId);
    if (!row) return null;

    return mapSpacetimeNoteRow(row);
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

    reducers.upsertNote(
        normalized.noteId,
        normalized.subject || '',
        normalized.topicTitle || '',
        normalized.subtopicTitle || '',
        breadcrumbsStr,
        contentJson,
        normalized.confidenceScore,
        normalized.estimatedReadMinutes || 0
    );
}

export async function listNotesBySubject(subject) {
    const key = String(subject).toLowerCase();

    const notes = [];
    for (const row of tables.note.iter()) {
        if (row.subject.toLowerCase() === key) {
            const parsed = mapSpacetimeNoteRow(row);
            if (parsed) notes.push(parsed);
        }
    }

    notes.sort((a, b) => String(b.lastEditedAt).localeCompare(String(a.lastEditedAt)));
    return notes.map((item) => toHeader(item));
}

// Map SpacetimeDB Flashcard row back to app format
function mapSpacetimeFlashcardRow(row) {
    return {
        cardId: row.cardId,
        subject: row.subject,
        sourceNoteId: row.sourceNoteId,
        sourceLabel: row.sourceLabel,
        front: row.front,
        back: row.back,
        createdAt: new Date(Number(row.createdAt) * 1000).toISOString(),
        ownerIdentity: row.ownerIdentity.toHexString(),
    };
}

export async function saveFlashcard(card) {
    const cardId = card.cardId || `card:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    const front = String(card.front || '').trim();
    const back = String(card.back || '').trim();
    const subject = String(card.subject || '').toLowerCase();
    const sourceNoteId = String(card.sourceNoteId || '');
    const sourceLabel = String(card.sourceLabel || '');

    reducers.saveFlashcard(
        cardId,
        subject,
        sourceNoteId,
        sourceLabel,
        front,
        back
    );
}

export async function listFlashcards(filters = {}) {
    let cards = [];
    for (const row of tables.flashcard.iter()) {
        cards.push(mapSpacetimeFlashcardRow(row));
    }

    const filtered = cards.filter((item) => {
        if (filters.subject && item.subject.toLowerCase() !== String(filters.subject).toLowerCase()) return false;
        if (filters.sourceNoteId && item.sourceNoteId !== String(filters.sourceNoteId)) return false;
        return true;
    });

    return filtered.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

export async function saveNoteAsset(asset) {
    const assetId = asset.assetId || `asset:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    const noteId = String(asset.noteId || '');
    const type = String(asset.type || '');
    const data = asset.data || '';

    reducers.saveNoteAsset(
        assetId,
        noteId,
        type,
        data
    );

    return assetId;
}

export function __resetMemoryStoreForTests() {
    // No-op for SpacetimeDB tests
}
