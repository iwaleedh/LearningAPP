/**
 * slideCoverage.js
 *
 * Guarantees that important technical content in a seed note's blocks[] is
 * never omitted when a custom `presentationSlides[]` override is in use.
 *
 * ── Problem ──────────────────────────────────────────────────────────────────
 * When a note exports `presentationSlides`, PresentationPage skips the normal
 * blocksToSlides() pipeline entirely. Any equations, diagrams, tables, worked
 * examples, checklists, or summaries that exist in the note's blocks[] but
 * are not manually included in presentationSlides will be silently absent from
 * the presentation.
 *
 * ── Mechanism ────────────────────────────────────────────────────────────────
 * 1. getSupplementalBlocks(seedNote)
 *    Returns the blocks that should become supplemental slides (appended after
 *    the custom deck).
 *
 * 2. buildSupplementalSlides(blocks, subject, meta)
 *    Converts those blocks into slide objects via blocksToSlides(), strips the
 *    auto-generated cover slide, and tags each with isSupplemental: true.
 *
 * ── Authoring opt-out / control ──────────────────────────────────────────────
 * Add a top-level field to the seed note export:
 *
 *   supplementalBlockTypes: false
 *     → disables all supplemental slides for this note
 *
 *   supplementalBlockTypes: ['equation', 'svg']
 *     → enables only the listed block types as supplements
 *
 * If the field is absent, the DEFAULT_SUPPLEMENT_TYPES list below applies.
 */

import { blocksToSlides } from '../components/presentation/slideEngine.js';

// ── Defaults ──────────────────────────────────────────────────────────────────

/**
 * Block types that are always supplemented by default.
 * These carry high-density knowledge that must appear in every presentation.
 */
const DEFAULT_SUPPLEMENT_TYPES = new Set([
  'equation',        // Formulae and mathematical expressions
  'comparisonTable', // Data tables and comparisons
  'svg',             // Diagrams and visual concepts
  'checklist',       // Exam-readiness checklist
  'summary',         // End-of-subtopic summary
]);

/**
 * Callout styles supplemented by default.
 * 'worked' examples are always included because they show step-by-step reasoning.
 * 'key' callouts are NOT included by default because bento cards usually cover them.
 */
const DEFAULT_SUPPLEMENT_CALLOUT_STYLES = new Set(['worked']);

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Returns the blocks from seedNote.blocks[] that should be converted into
 * supplemental slides and appended after the custom presentationSlides[] deck.
 *
 * @param {object} seedNote - The full seed note export object
 * @returns {Array} blocks to supplement
 */
export function getSupplementalBlocks(seedNote) {
  const { blocks = [], supplementalBlockTypes } = seedNote;
  if (!blocks.length) return [];

  // Author explicitly disabled supplemental slides for this note
  if (supplementalBlockTypes === false) return [];

  // Author specified a custom list of types
  const types = Array.isArray(supplementalBlockTypes)
    ? new Set(supplementalBlockTypes)
    : DEFAULT_SUPPLEMENT_TYPES;

  // If author specified custom types, do not auto-include callouts (they handle it)
  const calloutStyles = Array.isArray(supplementalBlockTypes)
    ? new Set()
    : DEFAULT_SUPPLEMENT_CALLOUT_STYLES;

  return blocks.filter(b => {
    if (b.type === 'callout') return calloutStyles.has(b.data?.style);
    return types.has(b.type);
  });
}

/**
 * Converts supplemental blocks into presentation slide objects.
 * Always strips the auto-generated cover slide that blocksToSlides() prepends,
 * and marks each slide with isSupplemental: true.
 *
 * @param {Array}  supplementalBlocks - from getSupplementalBlocks()
 * @param {string} subject            - e.g. 'chemistry'
 * @param {object} meta               - { unitTitle, topicTitle, subtopicTitle }
 * @returns {Array} supplemental slide objects ready for PresentationPage
 */
export function buildSupplementalSlides(supplementalBlocks, subject, meta) {
  if (!supplementalBlocks.length) return [];

  const allSlides = blocksToSlides(supplementalBlocks, subject, meta);

  // blocksToSlides() always creates a cover slide as allSlides[0] — drop it
  return allSlides
    .filter(s => s.layout !== 'cover')
    .map((s, i) => ({ ...s, id: `slide-supp-${i}`, isSupplemental: true }));
}
