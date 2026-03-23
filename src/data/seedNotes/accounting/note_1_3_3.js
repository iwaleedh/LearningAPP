/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 3
 * "Provisions and irrecoverable debts"
 */

export const note_accounting_1_3_3 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Calculate and record irrecoverable (bad) debts and the allowance for irrecoverable debts, show their impact on the IS and SFP, and explain the prudence concept.'
            }
        },
        {
            id: 'h-bad',
            type: 'heading',
            data: { text: 'Irrecoverable Debts (Bad Debts)', level: 2 }
        },
        {
            id: 'p-bad',
            type: 'paragraph',
            data: {
                text: 'A debt is <strong>irrecoverable (bad)</strong> when there is no reasonable expectation of receiving payment. The debt is <em>written off</em> by debiting Bad Debts Expense and crediting the customer\'s account.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Writing Off a Bad Debt',
                text: 'Customer Smith owes £750; business decides the debt is irrecoverable.\n\n  DR  Irrecoverable Debts (IS expense)  750\n  CR  Sales Ledger — Smith              750\n\nIS: Irrecoverable debts expense £750 reduces profit.\nSFP: Trade receivables reduced by £750.'
            }
        },
        {
            id: 'h-allow',
            type: 'heading',
            data: { text: 'Allowance for Irrecoverable Debts', level: 2 }
        },
        {
            id: 'p-allow',
            type: 'paragraph',
            data: {
                text: 'The <strong>allowance (provision)</strong> anticipates future bad debts without identifying the specific customer. It is created by debiting an expense and crediting an allowance account. The allowance is deducted from receivables on the SFP.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Creating and Adjusting the Allowance',
                text: 'Year 1: Trade receivables £40 000; create 3% allowance.\n  Allowance needed = £1 200.\n  DR  Allowance for IRD Expense  1 200\n  CR  Allowance for IRD Account  1 200\n\nYear 2: Trade receivables £45 000; maintain 3% allowance.\n  Allowance needed = £1 350. Existing allowance £1 200.\n  Increase = £150.\n  DR  Allowance for IRD Expense    150\n  CR  Allowance for IRD Account    150\n\nYear 3: Trade receivables £38 000; allowance = 3% = £1 140. Existing £1 350.\n  Reduction = £210.\n  DR  Allowance for IRD Account    210\n  CR  Allowance for IRD Expense    210  (reduces expense — increases profit)'
            }
        },
        {
            id: 'tbl-sfp',
            type: 'comparisonTable',
            data: {
                caption: 'SFP presentation of receivables with allowance',
                headers: ['Item', '£'],
                rows: [
                    ['Trade receivables (gross)', '45 000'],
                    ['Less: Allowance for irrecoverable debts', '(1 350)'],
                    ['Trade receivables (net)', '43 650']
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Prudence Link',
                text: 'The allowance for irrecoverable debts is an application of the <em>prudence concept</em>: recognise potential losses as soon as they are anticipated, even before they are confirmed.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Write the journal entry to write off a bad debt', checked: false },
                    { text: 'Calculate the allowance at a given percentage of receivables', checked: false },
                    { text: 'Calculate the increase or decrease in allowance and the IS charge', checked: false },
                    { text: 'Present net trade receivables on the SFP', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Bad debt write-off: DR Expense, CR Receivables. Allowance: DR Expense (increase) / CR Allowance. IS charge = change in allowance; SFP shows receivables net of allowance. Allowance applies the prudence concept by anticipating expected losses.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-we-1', prompt: 'State the double entry to write off an irrecoverable debt of £750.' },
            { id: 'cue-2', blockId: 'callout-we-2', prompt: 'If the required allowance falls from £1 350 to £1 140, what is the IS impact?' },
            { id: 'cue-3', blockId: 'tbl-sfp', prompt: 'How are trade receivables presented on the SFP when an allowance exists?' },
            { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'Which accounting concept underpins the allowance for irrecoverable debts?' }
        ],
        summaryText: 'Bad debt: DR Expense CR Receivables. Allowance: IS charge = change in allowance; SFP = receivables net of allowance. Prudence concept.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_3;
