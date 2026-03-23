/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 2
 * "Accrual and prepayment adjustments"
 */

export const note_accounting_1_3_2 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare income-statement adjustments for accruals and prepayments, show their treatment on the SFP and in ledger accounts, and explain the underlying accruals concept.'
            }
        },
        {
            id: 'h-concept',
            type: 'heading',
            data: { text: 'Accruals Concept', level: 2 }
        },
        {
            id: 'p-concept',
            type: 'paragraph',
            data: {
                text: 'Under the <strong>accruals (matching) concept</strong>, expenses and income must be recognised in the period they are <em>earned or incurred</em>, not when cash is received or paid. This requires end-of-period adjustments.'
            }
        },
        {
            id: 'h-accruals',
            type: 'heading',
            data: { text: 'Accruals (Accrued Expenses)', level: 2 }
        },
        {
            id: 'p-accruals',
            type: 'paragraph',
            data: {
                text: 'An <strong>accrual</strong> is an expense incurred but <em>not yet paid</em> at the year end. It must be added to the expense in the IS and shown as a <strong>current liability</strong> on the SFP.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Accrual — Worked Example',
                text: 'Electricity paid during year: £3 600. Bill received for final quarter but unpaid: £480.\n\nIS: Electricity expense = 3 600 + 480 = £4 080.\nSFP (current liability): Accrued expenses = £480.\n\nLedger account:\n  DR Electricity  3 600 (cash paid)\n  DR Electricity    480 (accrual)\n  CR Bank         3 600\n  CR Accruals       480'
            }
        },
        {
            id: 'h-prepays',
            type: 'heading',
            data: { text: 'Prepayments (Prepaid Expenses)', level: 2 }
        },
        {
            id: 'p-prepays',
            type: 'paragraph',
            data: {
                text: 'A <strong>prepayment</strong> is an expense paid in advance that relates to a <em>future period</em>. It is deducted from the expense in the IS and shown as a <strong>current asset</strong> on the SFP.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prepayment — Worked Example',
                text: 'Annual insurance premium paid: £2 400 covering 1 Jan – 31 Dec.\nYear end: 31 October. Prepayment = 2/12 × £2 400 = £400.\n\nIS: Insurance expense = 2 400 − 400 = £2 000.\nSFP (current asset): Prepayments = £400.'
            }
        },
        {
            id: 'tbl-compare',
            type: 'comparisonTable',
            data: {
                caption: 'Accrual vs prepayment — summary',
                headers: ['', 'Accrual', 'Prepayment'],
                rows: [
                    ['IS adjustment', '+ (add to expense)', '− (deduct from expense)'],
                    ['SFP position', 'Current liability', 'Current asset'],
                    ['Definition', 'Expense incurred, not yet paid', 'Expense paid, not yet incurred'],
                    ['Example', 'Unpaid electricity bill', 'Insurance paid in advance']
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Calculate an accrual and apply it to the IS and SFP', checked: false },
                    { text: 'Calculate a prepayment and apply it to the IS and SFP', checked: false },
                    { text: 'Prepare an expense ledger account showing the closing accrual or prepayment', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Accruals: expense incurred not yet paid → add to IS expense; show as current liability on SFP. Prepayments: expense paid in advance → deduct from IS expense; show as current asset on SFP. Both stem from the accruals concept: match costs to the period in which they are incurred.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-concept', prompt: 'State the accruals concept.' },
            { id: 'cue-2', blockId: 'tbl-compare', prompt: 'Where does an accrual appear on the SFP? Where does a prepayment appear?' },
            { id: 'cue-3', blockId: 'callout-we-2', prompt: 'Annual insurance £2 400 paid; year ends 2 months before the policy expires. Calculate the prepayment.' }
        ],
        summaryText: 'Accrual = expense incurred but unpaid → +IS expense, current liability. Prepayment = paid but future period → −IS expense, current asset.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_2;
