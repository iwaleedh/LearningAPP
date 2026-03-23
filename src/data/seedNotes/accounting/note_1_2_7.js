/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 7
 * "Revised profit statements"
 */

export const note_accounting_1_2_7 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a statement of revised profit by adjusting original profit for errors, distinguishing between errors that affect profit and those that do not.'
            }
        },
        {
            id: 'h-affect',
            type: 'heading',
            data: { text: 'Errors That Affect Profit', level: 2 }
        },
        {
            id: 'p-affect',
            type: 'paragraph',
            data: {
                text: 'Only errors involving <strong>income or expense</strong> accounts affect the profit figure. Errors that only affect balance-sheet accounts (assets, liabilities, capital) do not change profit.'
            }
        },
        {
            id: 'tbl-impact',
            type: 'comparisonTable',
            data: {
                caption: 'Effect of common errors on profit',
                headers: ['Error', 'Correction Effect', 'Profit Adjustment'],
                rows: [
                    ['Expense omitted', 'Add expense', 'Decrease profit'],
                    ['Revenue omitted', 'Add income', 'Increase profit'],
                    ['Expense overstated (wrong amount)', 'Reduce expense', 'Increase profit'],
                    ['Revenue understated (wrong amount)', 'Increase income', 'Increase profit'],
                    ['Capital expenditure posted as revenue expense', 'Remove expense; add to asset', 'Increase profit'],
                    ['Commission error (expense to expense)', 'No net change', 'No effect']
                ]
            }
        },
        {
            id: 'h-statement',
            type: 'heading',
            data: { text: 'Preparing the Revised Profit Statement', level: 2 }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Revised Profit Statement — Worked Example',
                text: 'Original profit: £12 400\n\nErrors found and their IS impact:\n(1) Rent of £600 omitted entirely → overstates profit.\n    Adjustment: (600)  [decrease profit]\n(2) Machine £3 000 posted to Repairs → understates profit.\n    Adjustment: +3 000  [increase profit, as expense removed]\n(3) Sales discount £150 understated (error of original entry).\n    Actual discount allowed = £300; recorded as £150.\n    Adjustment: (150)  [extra expense]\n(4) Error of commission: Electricity posted to Gas — no IS effect.\n    Adjustment: nil\n\nRevised profit:\n  Original          12 400\n  Add (2) CapEx      3 000\n  Less (1) Rent       (600)\n  Less (3) Discount   (150)\n  Revised profit   14 650'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'Work through each error in turn. Ask: "Does this correction increase or decrease an income/expense account?" If yes → it affects profit. State your reasoning. Errors of commission (wrong expense account) and asset-to-asset mispostings never affect profit.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Identify which errors affect profit and which do not', checked: false },
                    { text: 'Prepare a revised profit statement from original profit + adjustments', checked: false },
                    { text: 'Explain why an error of commission does not change profit', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Revised profit = original profit ± corrections to income and expense accounts only. Errors affecting only asset/liability accounts are ignored in this statement. Capital expenditure treated as revenue (error of principle) is a common exam item that increases profit on correction.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-affect', prompt: 'What type of accounts must an error involve in order to affect profit?' },
            { id: 'cue-2', blockId: 'tbl-impact', prompt: 'A capital expenditure item was posted to an expense account. What is the effect on profit, and how is it corrected?' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'An expense was omitted. Does this increase or decrease profit in the correction?' }
        ],
        summaryText: 'Revised profit adjusts for income/expense corrections only. Asset-to-asset or liability-to-liability errors do not affect profit. Error of principle typically increases profit on correction.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_7;
