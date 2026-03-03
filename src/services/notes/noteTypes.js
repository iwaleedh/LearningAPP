/**
 * @typedef {'objective'|'paragraph'|'heading'|'list'|'checklist'|'quote'|'equation'|'comparisonTable'|'code'|'summary'} NoteBlockType
 */

/**
 * @typedef {Object} NoteBlock
 * @property {string} id
 * @property {NoteBlockType} type
 * @property {Object} data
 * @property {string[]} [terms]
 */

/**
 * @typedef {Object} EvidenceItem
 * @property {string} id
 * @property {string} title
 * @property {string} detail
 * @property {string} year
 * @property {string} source
 * @property {string[]} tags
 */

/**
 * @typedef {Object} CuePrompt
 * @property {string} id
 * @property {string} blockId
 * @property {string} prompt
 */

/**
 * @typedef {Object} RecallData
 * @property {boolean} enabled
 * @property {CuePrompt[]} cues
 * @property {string} summaryText
 * @property {boolean} ready
 */

/**
 * @typedef {Object} MentionRef
 * @property {string} fromBlockId
 * @property {string} targetNoteId
 */

/**
 * @typedef {Object} NoteDocument
 * @property {string} noteId
 * @property {string} subject
 * @property {string} qualificationCode
 * @property {string} unitCode
 * @property {number|string} unitId
 * @property {number|string} topicId
 * @property {number} subtopicIndex
 * @property {string} unitTitle
 * @property {string} topicTitle
 * @property {string} subtopicTitle
 * @property {string} breadcrumbs
 * @property {number} confidenceScore
 * @property {'red'|'amber'|'green'} confidenceBand
 * @property {number|null} estimatedReadMinutesOverride
 * @property {number} estimatedReadMinutes
 * @property {NoteBlock[]} blocks
 * @property {RecallData} recall
 * @property {EvidenceItem[]} evidence
 * @property {MentionRef[]} mentions
 * @property {string} createdAt
 * @property {string} lastEditedAt
 */

/**
 * @typedef {Object} NoteHeader
 * @property {string} noteId
 * @property {string} subject
 * @property {string} title
 * @property {string} breadcrumbs
 * @property {number} confidenceScore
 * @property {'red'|'amber'|'green'} confidenceBand
 * @property {number} estimatedReadMinutes
 * @property {string} lastEditedAt
 * @property {string} firstSnippet
 */

/**
 * @typedef {Object} Flashcard
 * @property {string} cardId
 * @property {string} front
 * @property {string} back
 * @property {string} subject
 * @property {string} sourceNoteId
 * @property {string} sourceLabel
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Summary50State
 * @property {number} words
 * @property {boolean} isExact
 */
