import { getSubjectLabel } from '../../data/syllabusIndex.js';

export function buildNoteId({ subject, unitId, topicId, subtopicIndex }) {
    return `note:${String(subject).toLowerCase()}:${unitId}:${topicId}:${subtopicIndex}`;
}

export function deriveConfidenceBand(score) {
    const value = Number(score);
    if (value <= 2) return 'red';
    if (value === 3) return 'amber';
    return 'green';
}

export function estimateReadMinutes(text, wpm = 200) {
    const value = String(text || '').trim();
    if (!value) return 0;
    const words = value.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / Math.max(80, wpm)));
}

export function parseQualificationCode(qualification = '') {
    const fromParens = String(qualification).match(/\(([^)]+)\)/);
    if (fromParens) return fromParens[1].trim();

    const fromToken = String(qualification).match(/\b([XYW][A-Z]{2}\d{2})\b/i);
    return fromToken ? fromToken[1].toUpperCase() : '';
}

export function resolveNoteContext({ subject, unitId, topicId, subtopicIndex }, syllabus) {
    let normalizedSubject = String(subject || 'chemistry').toLowerCase();
    if (normalizedSubject === 'math') normalizedSubject = 'mathematics';
    const unit = syllabus?.units?.find((item) => String(item.id) === String(unitId));
    const topic = unit?.topics?.find((item) => String(item.id) === String(topicId));
    const index = Number(subtopicIndex);
    const safeIndex = Number.isFinite(index) ? index : 0;
    const subtopicTitle = topic?.subtopics?.[safeIndex] || '';

    const qualificationCode = parseQualificationCode(syllabus?.qualification || '');
    const unitCode = unit?.code || '';
    const noteId = buildNoteId({
        subject: normalizedSubject,
        unitId: unit?.id ?? unitId,
        topicId: topic?.id ?? topicId,
        subtopicIndex: safeIndex,
    });

    return {
        noteId,
        subject: normalizedSubject,
        subjectLabel: getSubjectLabel(normalizedSubject),
        qualificationCode,
        unitCode,
        unitId: unit?.id ?? unitId,
        topicId: topic?.id ?? topicId,
        subtopicIndex: safeIndex,
        unitTitle: unit?.title || '',
        topicTitle: topic?.title || '',
        subtopicTitle,
        breadcrumbs: buildBreadcrumbs({
            subject: normalizedSubject,
            unitTitle: unit?.title || '',
            topicId: topic?.id ?? topicId,
            subtopicTitle,
        }),
    };
}

export function buildBreadcrumbs({ subject, unitTitle, topicId, subtopicTitle }) {
    const subjectLabel = getSubjectLabel(subject);
    const topicPart = `Topic ${topicId}`;
    return `A-Level > ${subjectLabel} > ${unitTitle} > ${topicPart} > ${subtopicTitle}`;
}
