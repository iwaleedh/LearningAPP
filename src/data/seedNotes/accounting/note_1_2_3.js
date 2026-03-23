/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 3
 * "Errors affecting trial-balance agreement"
 */

export const note_accounting_1_2_3 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Identify errors that cause the trial balance to fail to agree, explain the role of the suspense account, and prepare journal entries to correct such errors.'
            }
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Errors That Break TB Agreement', level: 2 }
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'When total debits ≠ total credits, the difference is placed temporarily in a <strong>suspense account</strong> to restore balance while the error is located and corrected. These errors are detected by the trial balance.'
            }
        },
        {
            id: 'tbl-errors',
            type: 'comparisonTable',
            data: {
                caption: 'Errors causing TB imbalance',
                headers: ['Error', 'Description', 'Example'],
                rows: [
                    ['Single entry only', 'One side of a transaction omitted.', 'DR wages £400 — no corresponding CR.'],
                    ['Unequal amounts', 'Different figures posted on DR and CR.', 'DR £350 to bank; CR £530 to sales.'],
                    ['Casting (addition) error', 'Incorrect total of a ledger account.', 'Sales account total added as £4 700 instead of £4 200.'],
                    ['Transposition (one side only)', 'Digits transposed on one side only.', 'DR £64 posted as £64; CR correctly £46 on same entry.'],
                    ['Balance brought down incorrectly', 'Balance carried forward contains arithmetic mistake.', 'Opening debtors balance b/d as £2 400 should be £2 040.']
                ]
            }
        },
        {
            id: 'h-suspense',
            type: 'heading',
            data: { text: 'Role of the Suspense Account', level: 2 }
        },
        {
            id: 'p-suspense',
            type: 'paragraph',
            data: {
                text: 'The suspense account holds the <em>difference</em> between the two TB columns. If DR > CR, open a suspense account with a <strong>credit</strong> balance equal to the difference (and vice versa). Once the error is found and corrected, the suspense account is abolished (balance = zero).'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Opening the Suspense Account',
                text: 'TB: Total DR = £45 620; Total CR = £45 400. Difference = £220.\nCR side is lower → open suspense account with a CR balance of £220.\n\nDR col: 45 620\nCR col: 45 400 + Suspense 220 = 45 620 ✓'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Identify whether a given error causes TB imbalance', checked: false },
                    { text: 'State why a single entry causes an imbalance', checked: false },
                    { text: 'Open a suspense account from a given TB difference', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Errors that cause TB imbalance: single entry, unequal amounts, casting errors, one-sided transpositions. The suspense account receives the difference to restore TB balance while the error is investigated. Correcting entries reduce the suspense account to nil.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-errors', prompt: 'Name three types of error that cause the trial balance to disagree.' },
            { id: 'cue-2', blockId: 'h-suspense', prompt: 'What is the purpose of the suspense account?' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'If total debits exceed total credits by £220, what entry opens the suspense account?' }
        ],
        summaryText: 'TB imbalance errors: single entry, unequal amounts, casting errors. Difference → suspense account (CR if DR exceed; DR if CR exceed).',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_3;
