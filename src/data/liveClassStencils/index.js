import chemistryStencils from './chemistryStencils.js';
import physicsStencils from './physicsStencils.js';
import biologyStencils from './biologyStencils.js';
import mathematicsStencils from './mathematicsStencils.js';
import businessStencils from './businessStencils.js';

/** All stencils grouped by subject key */
export const stencilsBySubject = {
  chemistry: chemistryStencils,
  physics: physicsStencils,
  biology: biologyStencils,
  mathematics: mathematicsStencils,
  business: businessStencils,
};

/** Flat array of every stencil */
export const allStencils = [
  ...chemistryStencils,
  ...physicsStencils,
  ...biologyStencils,
  ...mathematicsStencils,
  ...businessStencils,
];

/** Get stencils for a given subject (returns empty array if unknown) */
export function getStencilsForSubject(subject) {
  return stencilsBySubject[subject] || [];
}

/** Get unique category names within a subject's stencils */
export function getStencilCategories(subject) {
  const stencils = getStencilsForSubject(subject);
  return [...new Set(stencils.map(s => s.category))];
}
