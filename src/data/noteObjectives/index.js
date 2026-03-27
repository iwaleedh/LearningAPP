import { syllabusesBySubject } from '../syllabusCatalog.js';
import { accountingObjectives } from './accountingObjectives.js';
import { biologyObjectives } from './biologyObjectives.js';
import { businessObjectives } from './businessObjectives.js';
import { chemistryObjectives } from './chemistryObjectives.js';
import { economicsObjectives } from './economicsObjectives.js';
import { mathematicsObjectives } from './mathematicsObjectives.js';
import { physicsObjectives } from './physicsObjectives.js';

export const noteObjectivesBySubject = {
    chemistry: chemistryObjectives,
    biology: biologyObjectives,
    physics: physicsObjectives,
    math: mathematicsObjectives,
    mathematics: mathematicsObjectives,
    business: businessObjectives,
    economics: economicsObjectives,
    accounting: accountingObjectives,
};

export function getObjectiveForNote({ subject, noteId, subtopicTitle }) {
    const key = String(subject || '').toLowerCase();
    const map = noteObjectivesBySubject[key] || {};

    if (map[noteId]) return map[noteId];
    if (subtopicTitle) return `Explain and apply: ${subtopicTitle}.`;
    return 'Explain the key learning objective for this subtopic.';
}

export function hasObjectiveForNote({ subject, noteId }) {
    const key = String(subject || '').toLowerCase();
    const map = noteObjectivesBySubject[key] || {};
    return Boolean(map[noteId]);
}

export function buildValidNoteIdSet() {
    const valid = new Set();

    Object.entries(syllabusesBySubject).forEach(([subject, syllabus]) => {
        const normalized = String(subject).toLowerCase();

        syllabus.units.forEach((unit) => {
            unit.topics.forEach((topic) => {
                topic.subtopics.forEach((_, subtopicIndex) => {
                    valid.add(`note:${normalized}:${unit.id}:${topic.id}:${subtopicIndex}`);
                });
            });
        });
    });

    return valid;
}

export function validateObjectiveKeyMap(objectiveMap = noteObjectivesBySubject) {
    const validIds = buildValidNoteIdSet();
    const errors = [];

    Object.entries(objectiveMap).forEach(([subject, map]) => {
        Object.keys(map || {}).forEach((noteId) => {
            if (!validIds.has(noteId)) {
                errors.push({ subject, noteId });
            }
        });
    });

    return errors;
}
