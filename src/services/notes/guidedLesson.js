/** Prepare small reading steps without changing equations or scientific wording. */
export function plainText(html = '') {
    return String(html).replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

// Split only at sentence/paragraph boundaries. Reopen formatting tags so a
// definition in <strong> or a formula with <sub> remains valid in every chunk.
export function splitReadingHtml(html = '', targetWords = 65) {
    const chunks = [];
    const stack = [];
    let current = '';
    let words = 0;
    const flush = () => {
        if (!plainText(current)) return;
        chunks.push(current.trim() + [...stack].reverse().map(tag => `</${tag.name}>`).join(''));
        current = stack.map(tag => tag.markup).join('');
        words = 0;
    };
    for (const token of String(html).match(/<[^>]*>|[^<]+/g) || []) {
        if (token.startsWith('<')) {
            const closing = token.match(/^<\/([\w-]+)/);
            const opening = token.match(/^<([\w-]+)/);
            current += token;
            if (closing) {
                const index = stack.map(tag => tag.name).lastIndexOf(closing[1].toLowerCase());
                if (index >= 0) stack.splice(index);
            } else if (opening && !/\/\s*>$/.test(token) && !['br', 'hr', 'img', 'input', 'wbr'].includes(opening[1].toLowerCase())) {
                stack.push({ name: opening[1].toLowerCase(), markup: token });
            } else if (/^<br\b/i.test(token) && words >= targetWords / 2) flush();
        } else {
            for (const part of token.match(/\S+\s*|\s+/g) || []) {
                current += part;
                if (part.trim()) words++;
                if (words >= targetWords && /[.!?][”'")]?\s*$/.test(part)) flush();
                else if (words >= targetWords / 2 && /[\r\n]/.test(part)) flush();
            }
        }
    }
    flush();
    return chunks.length ? chunks : [String(html)];
}

function chunkBlock(block) {
    const data = block.data || {};
    if (['paragraph', 'summary', 'callout'].includes(block.type)) {
        return splitReadingHtml(data.text).map(text => ({ ...block, data: { ...data, text } }));
    }
    if (['list', 'checklist'].includes(block.type) && data.items?.length > 3) {
        const chunks = [];
        for (let i = 0; i < data.items.length; i += 3) chunks.push({ ...block, data: { ...data, items: data.items.slice(i, i + 3) } });
        return chunks;
    }
    if (block.type === 'comparisonTable' && data.rows?.length > 2) {
        return data.rows.map(row => ({ ...block, type: 'list', guidedTitle: plainText(row[0]), data: {
            style: 'bullet', items: [
                ...row.map((cell, i) => `<strong>${data.headers?.[i] || `Column ${i + 1}`}</strong>: ${cell ?? ''}`),
                ...(data.caption ? [`<em>${data.caption}</em>`] : []),
            ],
        } }));
    }
    return [block];
}

// Use the source itself as the explanation. Never invent a subject answer or
// attach a whole-note answer to a question about an unrelated reading step.
function buildStepSupport(block) {
    const data = block.data || {};
    if (block.type === 'equation') return {
        instruction: 'Read the formula. Notice its symbols and units before using it.',
        check: data.html ? { prompt: 'Can you write this formula without looking? Then compare it below.', answer: data.html } : null,
    };
    if (block.type === 'svg') return {
        instruction: 'Look at the picture first. Then read the labels one at a time.',
        check: data.caption ? { prompt: 'What does this diagram show? Describe it in your own words.', answer: data.caption } : null,
    };
    if (['list', 'checklist'].includes(block.type)) return {
        instruction: 'Read one point at a time. Pause between points.',
        check: data.items?.length ? {
            prompt: 'Can you recall one of these points? Then check the list.',
            answer: `<ul>${data.items.map(item => `<li>${typeof item === 'string' ? item : item.text}</li>`).join('')}</ul>`,
        } : null,
    };
    if (block.type === 'callout' && data.style === 'worked') return {
        instruction: 'Follow one line at a time. Then try following the example again without looking.',
        check: data.text ? { prompt: 'Can you explain one step in this example? Compare it with the worked steps.', answer: data.text } : null,
    };
    if (['paragraph', 'summary', 'callout', 'quote'].includes(block.type)) return {
        instruction: 'Read this short explanation. Pause and say its main idea in your own words.',
        check: data.text ? { prompt: 'What is one idea you can explain from this step?', answer: data.text } : null,
    };
    if (block.type === 'comparisonTable') return { instruction: 'Compare one row at a time. Look for a similarity or a difference.', check: null };
    return { instruction: 'Take your time with this step. You can go back whenever you need to.', check: null };
}

export function buildGuidedLesson(note, { title = 'This topic' } = {}) {
    if (note?.guidedLesson?.steps?.length) return { ...note.guidedLesson, authored: true };
    const steps = [];
    let heading = title;
    let headingId = '';
    const usedCues = new Set();
    const details = [];
    for (const block of note?.blocks || []) {
        if (block.type === 'objective') continue;
        if (block.type === 'heading') {
            heading = plainText(block.data?.text) || heading;
            headingId = block.id;
            continue;
        }
        if (block.type === 'deeper') { details.push(block); continue; }
        for (const [index, part] of chunkBlock(block).entries()) {
            const id = `learn-${block.id || steps.length}-${index}`;
            const support = buildStepSupport(part);
            const cue = note.recall?.cues?.find(c => (c.blockId === block.id || c.blockId === headingId) && c.answer && !usedCues.has(c.id));
            if (cue && index === 0) usedCues.add(cue.id);
            steps.push({
                id,
                title: part.guidedTitle || (block.type === 'callout' ? plainText(block.data?.title) || heading : heading),
                sourceBlockIds: [block.id],
                kind: block.type === 'callout' && block.data?.style === 'worked' ? 'example' : block.type === 'summary' ? 'remember' : 'learn',
                blocks: [{ ...part, id: `${id}-content` }],
                instruction: support.instruction,
                check: cue && index === 0 ? { prompt: cue.prompt, answer: cue.answer } : support.check,
            });
        }
    }
    const review = note?.recall?.summaryText || note?.blocks?.find(block => block.type === 'summary')?.data?.text;
    if (review && steps.length) steps.push({
        id: 'lesson-review', title: 'Bring the ideas together', kind: 'remember', blocks: [],
        check: { prompt: 'What are the main ideas from this topic? Try saying them in your own words.', answer: review },
    });
    return {
        authored: false,
        goal: plainText(note?.blocks?.find(block => block.type === 'objective')?.data?.text) || `Build your understanding of ${title.toLowerCase()}.`,
        start: 'Read one small part. You can pause, go back, or open an example whenever you need it.',
        steps,
        details,
    };
}

export function lessonStorageKey(noteId) { return `lt_lesson:${noteId}`; }

export function readLessonProgress(noteId, steps, storage) {
    try {
        const saved = JSON.parse((storage || globalThis.localStorage)?.getItem(lessonStorageKey(noteId)) || 'null');
        const ids = new Set(steps.map(step => step.id));
        return {
            index: Math.max(0, steps.findIndex(step => step.id === saved?.currentStep)),
            completed: Array.isArray(saved?.completed) ? saved.completed.filter(id => ids.has(id)) : [],
        };
    } catch { return { index: 0, completed: [] }; }
}

export function writeLessonProgress(noteId, stepId, completed, storage) {
    try { (storage || globalThis.localStorage)?.setItem(lessonStorageKey(noteId), JSON.stringify({ currentStep: stepId, completed: [...completed] })); }
    catch { /* A lesson still works when device storage is full or unavailable. */ }
}
