/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 3
 * "End-of-period adjustments"
 */

export const note_accounting_1_1_3 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Identify the main end-of-period adjustments, explain accruals and prepayments, and prepare journal entries and adjusted accounts.'
            }
        },
        {
            id: 'h-adjust',
            type: 'heading',
            data: { text: 'Why Are End-of-Period Adjustments Needed?', level: 2 }
        },
        {
            id: 'p-adjust-intro',
            type: 'paragraph',
            data: {
                text: 'Financial statements are prepared on the <strong>accruals basis</strong> — revenue and expenses are recognised in the period they are <em>earned or incurred</em>, not when cash is received or paid. This requires adjustments to the trial balance before drawing up the final accounts.'
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
                text: 'An <strong>accrual</strong> is an expense that has been <em>incurred</em> in the accounting period but has <em>not yet been paid or invoiced</em> by the year end. It must be added to the expense in the income statement and shown as a <strong>current liability</strong> on the statement of financial position (SFP).'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Accrual',
                text: 'Rent is £12 000 per year, paid quarterly. At 31 Dec, only 3 quarters (£9 000) have been paid.\n\nAccrual = £12 000 − £9 000 = £3 000\n\nIncome statement: show rent expense = £12 000\nSFP (current liabilities): accrued expenses = £3 000\n\nJournal:\n  DR  Rent expense      £3 000\n  CR  Accruals (liability)  £3 000'
            }
        },
        {
            id: 'h-prepayments',
            type: 'heading',
            data: { text: 'Prepayments (Prepaid Expenses)', level: 2 }
        },
        {
            id: 'p-prepay',
            type: 'paragraph',
            data: {
                text: 'A <strong>prepayment</strong> is an expense that has been <em>paid in advance</em> — cash has been paid but the benefit relates to the <em>next</em> accounting period. The prepaid portion is deducted from the expense in the income statement and shown as a <strong>current asset</strong> on the SFP.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Prepayment',
                text: 'Insurance for 12 months (1 Oct – 30 Sep) costs £4 800. Year end is 31 Dec.\n\nPortion already paid but relating to next period: Jan–Sep (9 months)\nPrepayment = £4 800 × 9/12 = £3 600\n\nIncome statement: insurance expense = £4 800 − £3 600 = £1 200\nSFP (current assets): prepayments = £3 600\n\nJournal:\n  DR  Prepayments (asset)  £3 600\n  CR  Insurance expense    £3 600'
            }
        },
        {
            id: 'h-other-adj',
            type: 'heading',
            data: { text: 'Other End-of-Period Adjustments', level: 2 }
        },
        {
            id: 'tbl-adj',
            type: 'comparisonTable',
            data: {
                caption: 'Summary of end-of-period adjustments',
                headers: ['Adjustment', 'Income Statement Effect', 'SFP Effect'],
                rows: [
                    ['Accrued expense', 'Increase expense', 'Add current liability'],
                    ['Prepaid expense', 'Reduce expense', 'Add current asset'],
                    ['Accrued income', 'Increase income', 'Add current asset'],
                    ['Deferred (unearned) income', 'Reduce income', 'Add current liability'],
                    ['Depreciation', 'Increase expense (IS)', 'Reduce carrying value of NCA (SFP)'],
                    ['Bad debt write-off', 'Increase expense', 'Reduce receivables'],
                    ['Allowance for receivables', 'Increase/reduce expense', 'Reduce receivables (net)'],
                    ['Closing inventory', 'Cost of sales calculation', 'Add current asset']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Rule — Accruals Concept',
                text: 'Match revenues and expenses to the period in which they are <em>earned or incurred</em>, regardless of cash movement. This is the accruals (matching) concept.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'For each adjustment, ask: (1) Is the expense/income for THIS period? (2) Has cash actually moved? Mismatch → adjustment needed. Always state both the IS effect and the SFP effect.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Define accruals concept in one sentence', checked: false },
                    { text: 'Calculate an accrual and state how it appears on IS and SFP', checked: false },
                    { text: 'Calculate a prepayment and state how it appears on IS and SFP', checked: false },
                    { text: 'Write the journal entry for an accrued expense', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'End-of-period adjustments apply the accruals concept: expenses and revenues are matched to the period they relate to. Accruals are unpaid expenses (add to expense; current liability on SFP). Prepayments are pre-paid future expenses (reduce expense; current asset on SFP). Other adjustments include depreciation, bad debts and inventory valuation.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-accruals', prompt: 'Define an accrual and state where it appears on the SFP.' },
            { id: 'cue-2', blockId: 'p-prepay', prompt: 'Define a prepayment and state where it appears on the SFP.' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'Rent is £12 000 pa; £9 000 paid so far. Calculate the accrual and write the journal entry.' },
            { id: 'cue-4', blockId: 'tbl-adj', prompt: 'How does closing inventory affect the IS and SFP?' }
        ],
        summaryText: 'Accruals (unpaid expenses) and prepayments (pre-paid expenses) adjust the trial balance so that the IS and SFP reflect the accruals concept.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_3;
