import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { getSubjectLabel, subjectNoteCounts } from '../../data/syllabusIndex.js';
import { getReadProgressSnapshot } from '../../hooks/useNoteReadStatus.js';
import { getNote, listNotesBySubject } from './noteStore.js';

const PAGE_MARGIN = 48;
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_MARGIN * 2;

function downloadBytes(bytes, filename) {
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

function wrapText(text, font, size, maxWidth) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (words.length === 0) return [''];

    const lines = [];
    let current = words[0];

    for (let i = 1; i < words.length; i += 1) {
        const candidate = `${current} ${words[i]}`;
        if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
            current = candidate;
        } else {
            lines.push(current);
            current = words[i];
        }
    }

    lines.push(current);
    return lines;
}

function collectTextValues(value, output) {
    if (typeof value === 'string') {
        const trimmed = value.replace(/\s+/g, ' ').trim();
        if (trimmed) output.push(trimmed);
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

function extractBlockText(block) {
    const values = [];
    collectTextValues(block?.data, values);
    return values.join(' ');
}

function buildNoteParagraphs(note) {
    const paragraphs = [];

    if (note.breadcrumbs) {
        if (Array.isArray(note.breadcrumbs)) {
            paragraphs.push(note.breadcrumbs.join(' > '));
        } else {
            paragraphs.push(String(note.breadcrumbs));
        }
    }

    for (const block of note.blocks || []) {
        const text = extractBlockText(block);
        if (!text) continue;

        if (block.type === 'heading') {
            paragraphs.push(text.toUpperCase());
            continue;
        }

        paragraphs.push(text);
    }

    if (note.recall?.summaryText) {
        paragraphs.push(`Recall summary: ${note.recall.summaryText}`);
    }

    return paragraphs;
}

async function loadAllSavedNotes() {
    const subjectKeys = Object.keys(subjectNoteCounts);
    const noteHeadersBySubject = await Promise.all(
        subjectKeys.map(async (subject) => {
            const headers = await listNotesBySubject(subject);
            return headers.map((header) => ({ subject, noteId: header.noteId }));
        }),
    );

    const uniqueRefs = new Map();
    noteHeadersBySubject.flat().forEach((entry) => {
        uniqueRefs.set(entry.noteId, entry);
    });

    const notes = await Promise.all(
        [...uniqueRefs.values()].map(async ({ subject, noteId }) => {
            const note = await getNote(noteId);
            return note ? { ...note, subject } : null;
        }),
    );

    return notes
        .filter(Boolean)
        .sort((a, b) => String(b.lastEditedAt).localeCompare(String(a.lastEditedAt)));
}

function createPage(pdfDoc, regularFont) {
    let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let cursorY = PAGE_HEIGHT - PAGE_MARGIN;

    const ensureSpace = (heightNeeded = 20) => {
        if (cursorY - heightNeeded >= PAGE_MARGIN) {
            return currentPage;
        }

        currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        cursorY = PAGE_HEIGHT - PAGE_MARGIN;
        return currentPage;
    };

    const drawLine = (text, options = {}) => {
        const {
            size = 11,
            color = rgb(0.1, 0.1, 0.1),
            font = regularFont,
            gap = 4,
        } = options;

        const page = ensureSpace(size + gap + 2);
        page.drawText(text, {
            x: PAGE_MARGIN,
            y: cursorY,
            size,
            font,
            color,
            maxWidth: CONTENT_WIDTH,
        });
        cursorY -= size + gap;
        return currentPage;
    };

    const drawParagraph = (text, options = {}) => {
        const {
            size = 11,
            color = rgb(0.15, 0.15, 0.15),
            font = regularFont,
            lineHeight = size + 4,
            paragraphGap = 10,
        } = options;

        const lines = wrapText(text, font, size, CONTENT_WIDTH);
        lines.forEach((line) => {
            const page = ensureSpace(lineHeight + 2);
            page.drawText(line, {
                x: PAGE_MARGIN,
                y: cursorY,
                size,
                font,
                color,
            });
            cursorY -= lineHeight;
        });

        cursorY -= paragraphGap;
        return currentPage;
    };

    return { drawLine, drawParagraph };
}

export async function exportNotesAsPdf() {
    const notes = await loadAllSavedNotes();

    if (notes.length === 0) {
        throw new Error('No saved notes are available to export yet.');
    }

    const readProgress = await getReadProgressSnapshot();
    const readIds = new Set(readProgress.readNoteIds);
    const totalRead = readProgress.totalRead;
    const pdfDoc = await PDFDocument.create();
    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const { drawLine, drawParagraph } = createPage(pdfDoc, regularFont);

    drawLine('Living Textbook Notes Export', {
        size: 22,
        font: boldFont,
        color: rgb(0.15, 0.27, 0.6),
        gap: 14,
    });
    drawParagraph(
        `Export generated on ${new Date().toLocaleString()}. This file includes ${notes.length} saved note${notes.length === 1 ? '' : 's'} and ${totalRead} marked-as-read note${totalRead === 1 ? '' : 's'}.`,
        { size: 12, color: rgb(0.28, 0.33, 0.42) },
    );

    for (const note of notes) {
        drawLine(note.subtopicTitle || note.topicTitle || note.noteId, {
            size: 16,
            font: boldFont,
            color: rgb(0.11, 0.16, 0.28),
            gap: 8,
        });
        drawParagraph(
            `${getSubjectLabel(note.subject)} • Confidence ${note.confidenceScore}/5 • ${readIds.has(note.noteId) ? 'Marked read' : 'Unread'} • Last edited ${new Date(note.lastEditedAt).toLocaleString()}`,
            { size: 10, color: rgb(0.37, 0.44, 0.54), paragraphGap: 8 },
        );

        const paragraphs = buildNoteParagraphs(note);
        if (paragraphs.length === 0) {
            drawParagraph('No text content available for this note yet.', {
                size: 11,
                color: rgb(0.45, 0.5, 0.58),
            });
        } else {
            paragraphs.forEach((paragraph) => {
                drawParagraph(paragraph);
            });
        }

        drawParagraph(' ', { size: 6, paragraphGap: 12 });
    }

    const bytes = await pdfDoc.save();
    const dateLabel = new Date().toISOString().slice(0, 10);
    downloadBytes(bytes, `living-textbook-notes-${dateLabel}.pdf`);

    return {
        notesExported: notes.length,
        readCount: totalRead,
    };
}
