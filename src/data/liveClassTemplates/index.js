/**
 * Template aggregation — imports per-subject templates and exports lookup helpers.
 */
import chemistryTemplates from './chemistryTemplates.js';
import physicsTemplates from './physicsTemplates.js';
import biologyTemplates from './biologyTemplates.js';
import mathematicsTemplates from './mathematicsTemplates.js';
import businessTemplates from './businessTemplates.js';

export const templatesBySubject = {
  chemistry: chemistryTemplates,
  physics: physicsTemplates,
  biology: biologyTemplates,
  mathematics: mathematicsTemplates,
  business: businessTemplates,
};

/** Flat array of every template across all subjects */
export const allTemplates = Object.values(templatesBySubject).flat();

/** Get templates for a single subject (returns [] if unknown) */
export function getTemplatesForSubject(subject) {
  return templatesBySubject[subject] || [];
}

/** Get available subject keys that have templates */
export function getTemplateSubjects() {
  return Object.keys(templatesBySubject);
}
