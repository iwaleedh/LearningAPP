/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 4
 * "Errors not affecting trial-balance agreement"
 */

export const note_accounting_1_2_4 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Identify and describe the six types of error that do not affect trial-balance agreement, journal the corrections, and assess their impact on profit.'
            }
        },
        {
            id: 'h-six',
            type: 'heading',
            data: { text: 'The Six Hidden Errors — Recap', level: 2 }
        },
        {
            id: 'tbl-errors',
            type: 'comparisonTable',
            data: {
                caption: 'Errors that do not disturb TB balance',
                headers: ['Error', 'Why TB stays balanced', 'Effect on profit?'],
                rows: [
                    ['Omission', 'Both DR and CR are missing — totals unchanged.', 'May or may not affect profit (depends on account).'],
                    ['Commission', 'Correct entry, wrong account (same category) — totals still equal.', 'No direct profit effect (both accounts same type).'],
                    ['Principle', 'Correct entry, wrong account (different category) — totals still equal.', 'Yes — expense vs asset reclassification changes profit.'],
                    ['Original entry', 'Same wrong figure used for both sides.', 'May affect profit if wrong amount in revenue/expense.'],
                    ['Reversal', 'DR and CR exist but are swapped — totals still equal.', 'Net error is twice the amount; may affect profit.'],
                    ['Compensating', 'Equal and opposite errors cancel out.', 'May affect profit if errors are in revenue/expense accounts.']
                ]
            }
        },
        {
            id: 'h-correction',
            type: 'heading',
            data: { text: 'Correcting Journal Entries', level: 2 }
        },
        {
            id: 'p-correction',
            type: 'paragraph',
            data: {
                text: 'To correct these errors, prepare a <strong>journal</strong> that (a) reverses the incorrect entry and (b) records the correct entry. Provide a narrative (explanation) for each journal.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Error of Principle — Correction',
                text: 'Error: Machine purchase of £5 000 posted to Repairs & Maintenance account.\n\nCorrection journal:\n  DR  Machinery (NCA)          5 000\n  CR  Repairs & Maintenance    5 000\n  Narrative: To correct error of principle — reclassify machine purchase from expense to NCA.\n\nProfit effect: profit is understated by £5 000 (expense overstated). After correction, profit increases by £5 000.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Error of Reversal — Correction',
                text: 'Error: £300 cash received from customer recorded as DR Cash, CR — wait — reversed: DR Sales, CR Cash.\n\nOriginal (wrong): DR Sales £300 / CR Cash £300.\nNet effect: Cash and Sales both understated by £300 each (Cash should be DR, Sales should be CR).\n\nCorrection:\n  DR  Cash        600  (to remove wrong CR £300 + correct DR £300)\n  CR  Sales       600  (to remove wrong DR £300 + correct CR £300)\n  Or equivalently: reverse original and post correctly (two-step approach).'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Identify the type of error from a description', checked: false },
                    { text: 'Write the journal entry to correct an error of principle', checked: false },
                    { text: 'Write the journal entry to correct an error of commission', checked: false },
                    { text: 'State whether each error type affects profit', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'The six hidden errors (OPCPOR) keep TB balanced. Corrections require journal entries: reverse the incorrect entry, then make the correct posting. Errors of principle and original entry typically distort profit. Errors of commission alone do not affect profit.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-errors', prompt: 'Name the six errors that do not affect trial balance agreement.' },
            { id: 'cue-2', blockId: 'tbl-errors', prompt: 'Which two hidden error types are most likely to affect profit? Why?' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'Write the correcting journal for a machine purchase posted to Repairs account.' }
        ],
        summaryText: 'Six hidden errors (OPCPOR) do not break TB. Errors of principle and original entry typically distort profit. Correction: reverse wrong entry, make correct entry.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_4;
