/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 4
 * "Allowance for irrecoverable debts"
 */

export const note_accounting_1_1_4 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Distinguish between bad debts and an allowance for receivables, prepare the bad debts expense and allowance accounts, and show their effect on financial statements.'
            }
        },
        {
            id: 'h-bad',
            type: 'heading',
            data: { text: 'Bad Debts (Irrecoverable Debts)', level: 2 }
        },
        {
            id: 'p-bad',
            type: 'paragraph',
            data: {
                text: 'A <strong>bad debt</strong> (irrecoverable debt) is a trade receivable that is <em>definitely not going to be collected</em> — for example, because the customer has gone bankrupt. It must be <strong>written off</strong>: removed from receivables and charged as an expense in the income statement.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Writing Off a Bad Debt',
                text: 'A customer owes £800. They have gone into liquidation and will not pay.\n\nJournal:\n  DR  Bad debts expense        £800\n  CR  Trade receivables (Customer)  £800\n\nIS effect: Bad debts expense £800 (reduces profit)\nSFP effect: Trade receivables reduced by £800'
            }
        },
        {
            id: 'h-allowance',
            type: 'heading',
            data: { text: 'Allowance for Receivables (Provision for Doubtful Debts)', level: 2 }
        },
        {
            id: 'p-allowance',
            type: 'paragraph',
            data: {
                text: 'An <strong>allowance for receivables</strong> is an estimate of the amount of receivables that <em>may</em> not be collected. Unlike a bad debt write-off, the specific debt is not yet confirmed irrecoverable. This applies the <strong>prudence concept</strong> — anticipate losses but not gains.'
            }
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Specific vs General Allowance', level: 2 }
        },
        {
            id: 'list-types',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Specific allowance</strong> — set against a named customer where there is doubt about collection (e.g., customer in financial difficulty). More precise.' },
                    { text: '<strong>General allowance</strong> — a percentage of total trade receivables based on past experience of non-payment (e.g. 2% of all receivables).' }
                ]
            }
        },
        {
            id: 'h-accounting',
            type: 'heading',
            data: { text: 'Accounting for the Allowance', level: 2 }
        },
        {
            id: 'p-accounting',
            type: 'paragraph',
            data: {
                text: 'The allowance is maintained in an <strong>Allowance for Receivables account</strong>. Each year, only the <em>change</em> in the allowance is charged or credited to the income statement.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Creating and Adjusting Allowance',
                text: 'Year 1: Trade receivables = £40 000. Create a 3% general allowance.\nAllowance = £40 000 × 3% = £1 200\n\nJournal Year 1:\n  DR  Bad debts expense / Allowance increase  £1 200\n  CR  Allowance for receivables              £1 200\n\nYear 2: Receivables = £45 000. Maintain 3% allowance.\nRequired allowance = £1 350. Existing = £1 200. Increase = £150.\n\nJournal Year 2:\n  DR  Bad debts expense    £150\n  CR  Allowance for rec.   £150\n\nSFP presentation:\n  Trade receivables          £45 000\n  Less: Allowance            (£1 350)\n  Net receivables            £43 650'
            }
        },
        {
            id: 'tbl-compare',
            type: 'comparisonTable',
            data: {
                caption: 'Bad debt write-off vs allowance for receivables',
                headers: ['Feature', 'Bad Debt Write-Off', 'Allowance for Receivables'],
                rows: [
                    ['Certainty', 'Debt definitely not recoverable', 'Recovery uncertain/doubtful'],
                    ['IS effect', 'Full amount expensed', 'Only change in allowance expensed'],
                    ['SFP effect', 'Receivables reduced directly', 'Receivables shown net of allowance'],
                    ['Concept', 'Matching', 'Prudence']
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Always apply the allowance to receivables <em>after</em> removing confirmed bad debts. Never apply the allowance % to the bad debt itself. Show receivables net of allowance on the SFP.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Distinguish a bad debt from an allowance for receivables', checked: false },
                    { text: 'Write the journal entry to write off a £600 bad debt', checked: false },
                    { text: 'Calculate a 5% general allowance on receivables of £20 000', checked: false },
                    { text: 'Show how net receivables appear on the SFP', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'A bad debt is definitely irrecoverable and is written off by debiting bad debts expense and crediting receivables. An allowance for receivables is an estimate for debts that may be uncollected (prudence concept). The allowance is shown as a deduction from receivables on the SFP; only the change in the allowance affects the IS each year.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-bad', prompt: 'What is a bad debt and how is it recorded?' },
            { id: 'cue-2', blockId: 'p-allowance', prompt: 'Explain the purpose of an allowance for receivables and which accounting concept it applies.' },
            { id: 'cue-3', blockId: 'callout-we-2', prompt: 'Receivables = £40 000. Create a 3% allowance. State the journal entry.' },
            { id: 'cue-4', blockId: 'tbl-compare', prompt: 'Give two differences between a bad debt write-off and an allowance for receivables.' }
        ],
        summaryText: 'Bad debts are written off when definitely irrecoverable. An allowance estimates uncertain debts and is deducted from receivables on the SFP; only changes affect the IS.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_4;
