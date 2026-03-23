/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 5
 * "Error-correction journal entries"
 */

export const note_accounting_1_2_5 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare journal entries to correct all types of accounting error, including those requiring use of a suspense account, and provide appropriate narratives.'
            }
        },
        {
            id: 'h-journal',
            type: 'heading',
            data: { text: 'The Correction Journal', level: 2 }
        },
        {
            id: 'p-journal',
            type: 'paragraph',
            data: {
                text: 'The <strong>journal</strong> is the book of prime entry for corrections, year-end adjustments and any entry not recorded in another day book. Each entry must include: date, accounts debited and credited, amounts, and a <strong>narrative</strong> explaining the correction.'
            }
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method for Correcting Errors', level: 2 }
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Identify what was posted (the incorrect entry).' },
                    { text: 'Identify what should have been posted (the correct entry).' },
                    { text: 'Write a journal to reverse the wrong entry and record the correct one — or combine into a net journal.' }
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Error of Omission — Correction',
                text: 'Error: A purchase of goods on credit from Patel Ltd for £1 200 was completely omitted.\n\n  DR  Purchases           1 200\n  CR  Patel Ltd (payable) 1 200\n  Narrative: To record omitted credit purchase from Patel Ltd.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Error Requiring Suspense Account',
                text: 'Error: Depreciation of £800 was posted correctly to DR Depreciation Expense, but the CR to Accumulated Depreciation was omitted (single-entry error).\n\nTB imbalance: £800 difference → suspense account has a credit balance of £800.\n\nCorrecting journal:\n  DR  Suspense Account      800\n  CR  Accumulated Depreciation 800\n  Narrative: To correct single-entry — credit side of depreciation omitted; clear suspense account.'
            }
        },
        {
            id: 'callout-we-3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Error of Commission — Correction',
                text: 'Error: £350 electricity bill correctly posted on credit side to Bank, but debited to Gas account instead of Electricity account.\n\n  DR  Electricity Expense   350\n  CR  Gas Expense           350\n  Narrative: To correct error of commission — electricity cost posted to Gas account.'
            }
        },
        {
            id: 'tbl-summary',
            type: 'comparisonTable',
            data: {
                caption: 'Correction journal — examples summary',
                headers: ['Error Type', 'Uses Suspense?', 'Net Journal Effect'],
                rows: [
                    ['Omission', 'No', 'Post the missing entry in full'],
                    ['Commission', 'No', 'Reverse wrong account; post to correct account'],
                    ['Principle', 'No', 'Reverse wrong account type; post to correct type'],
                    ['Original entry', 'No', 'Reverse at wrong amount; post at correct amount'],
                    ['Reversal', 'No', 'Double the correction (net effect = 2× original)'],
                    ['Single-entry (one side only)', 'Yes', 'Dr/Cr Suspense to complete the missing side']
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Write a journal (with narrative) to correct an error of omission', checked: false },
                    { text: 'Write a journal involving the suspense account for a single-entry error', checked: false },
                    { text: 'Correct an error of reversal (remembering the net journal is double the amount)', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Correction journals: state DR and CR, amounts, and a narrative. For errors not disturbing TB: no suspense needed. For errors disturbing TB: one side goes to/from suspense. Always test: after the correction, is suspense nil and is the TB balanced?'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-method', prompt: 'State the three-step method for preparing a correction journal entry.' },
            { id: 'cue-2', blockId: 'callout-we-2', prompt: 'When correcting a single-entry error, which account is used on one side?' },
            { id: 'cue-3', blockId: 'tbl-summary', prompt: 'Which error type requires double the original amount in the correction journal?' },
            { id: 'cue-4', blockId: 'p-journal', prompt: 'Name the four components every journal entry must include.' }
        ],
        summaryText: 'Correction journals: identify wrong entry → reverse → post correctly. Single-entry errors use suspense. Reversal errors need 2× the amount. Always include a narrative.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_5;
