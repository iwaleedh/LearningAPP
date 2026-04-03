const MENTION_PATTERN = /@\[\[(note:[^\]]+)\]\]/g;

function walkTextValues(value, out) {
    if (typeof value === 'string') {
        out.push(value);
        return;
    }

    if (Array.isArray(value)) {
        value.forEach((item) => walkTextValues(item, out));
        return;
    }

    if (value && typeof value === 'object') {
        Object.values(value).forEach((item) => walkTextValues(item, out));
    }
}

function getBlockText(block) {
    const chunks = [];
    walkTextValues(block?.data, chunks);
    return chunks.join(' ');
}

export function extractMentionsFromDoc(editorDoc) {
    const blocks = Array.isArray(editorDoc?.blocks) ? editorDoc.blocks : [];
    const mentions = [];

    blocks.forEach((block) => {
        const text = getBlockText(block);
        let match;
        while ((match = MENTION_PATTERN.exec(text)) !== null) {
            mentions.push({
                fromBlockId: block.id,
                targetNoteId: match[1],
            });
        }
        MENTION_PATTERN.lastIndex = 0;
    });

    return mentions;
}

export function buildSubjectGraph(currentNoteId, subjectNotes) {
    const byId = new Map((subjectNotes || []).map((note) => [note.noteId, note]));
    const current = byId.get(currentNoteId);

    if (!current) {
        return {
            nodes: [],
            edges: [],
        };
    }

    const outgoing = Array.isArray(current.mentions)
        ? current.mentions
        : extractMentionsFromDoc({ blocks: current.blocks || [] });

    // D18: Use a visited set to guard against circular mention chains.
    // The graph is intentionally 1-hop only (current note → its direct mentions)
    // to keep it simple and avoid cycle risk. The visited guard ensures
    // correctness if this is ever extended to multi-hop traversal.
    const visited = new Set([currentNoteId]);

    const uniqueTargets = [...new Set(outgoing.map((item) => item.targetNoteId))]
        .filter((id) => byId.has(id) && !visited.has(id));

    // Mark all direct targets as visited (prevents duplicate nodes on re-entry).
    uniqueTargets.forEach((id) => visited.add(id));

    const nodes = [
        {
            noteId: current.noteId,
            label: current.subtopicTitle || current.title || current.noteId,
            center: true,
        },
        ...uniqueTargets.map((id) => {
            const note = byId.get(id);
            return {
                noteId: id,
                label: note.subtopicTitle || note.title || id,
                center: false,
            };
        }),
    ];

    const edges = uniqueTargets.map((id) => ({ from: currentNoteId, to: id }));

    return { nodes, edges };
}

export function stripMentionSyntax(text) {
    return String(text || '').replace(MENTION_PATTERN, (_m, noteId) => noteId);
}
