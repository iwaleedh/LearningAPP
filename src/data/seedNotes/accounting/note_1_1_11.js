/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 11
 * "Non-current asset disposals and NCA schedules"
 */

export const note_accounting_1_1_11 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Record the disposal of a non-current asset (including part-exchange), calculate profit or loss on disposal, and prepare a non-current asset schedule.'
            }
        },
        {
            id: 'h-disposal',
            type: 'heading',
            data: { text: 'Disposal of a Non-Current Asset', level: 2 }
        },
        {
            id: 'p-disposal',
            type: 'paragraph',
            data: {
                text: 'When a non-current asset is sold, scrapped or traded in, its cost and accumulated depreciation are removed from the books and the proceeds are recorded. The difference gives a <strong>profit or loss on disposal</strong>.'
            }
        },
        {
            id: 'list-disposal-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'DR Disposal Account with the <strong>cost</strong> of the asset. CR Asset Cost Account.' },
                    { text: 'DR Accumulated Depreciation Account with the <strong>accumulated depreciation</strong>. CR Disposal Account.' },
                    { text: 'DR Bank/Receivables Account with the <strong>proceeds</strong>. CR Disposal Account.' },
                    { text: 'Balance the Disposal Account: a debit balance = loss; a credit balance = profit — transfer to IS.' }
                ]
            }
        },
        {
            id: 'eq-1',
            type: 'equation',
            data: {
                html: 'Profit/(Loss) on disposal = Proceeds − Net Book Value',
                caption: 'Where NBV = Cost − Accumulated Depreciation at date of disposal'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Simple Disposal — Worked Example',
                text: 'Machine: Cost £8 000. Accumulated depreciation £5 000. Sold for £2 500.\n\nNBV at disposal = £8 000 − £5 000 = £3 000.\nProceeds = £2 500.\nLoss on disposal = £2 500 − £3 000 = (£500).\n\nDisposal Account:\n  DR Asset Cost    8 000 | CR Acc Dep        5 000\n                        | CR Bank           2 500\n                        | CR Loss (IS)        500\n                          ------                ------\n                   8 000                    8 000'
            }
        },
        {
            id: 'h-partex',
            type: 'heading',
            data: { text: 'Part-Exchange', level: 2 }
        },
        {
            id: 'p-partex',
            type: 'paragraph',
            data: {
                text: 'A part-exchange (trade-in) is treated as two transactions: (1) the old asset is disposed of at the <strong>part-exchange allowance</strong> (treated as proceeds), and (2) the new asset is purchased at its full cost, with payment split between the allowance and cash balance.'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Part-Exchange Worked Example',
                text: 'Old van: Cost £12 000, Acc dep £8 000, NBV £4 000.\nPart-exchange allowance = £3 000. New van cost £15 000, balance paid in cash £12 000.\n\nDisposal of old van:\n  Proceeds (part-ex) = £3 000, NBV = £4 000 → Loss = £1 000.\n\nNew van recorded at full cost:\n  DR Vehicles (new)  15 000\n  CR Disposal Account  3 000\n  CR Bank             12 000'
            }
        },
        {
            id: 'h-schedule',
            type: 'heading',
            data: { text: 'Non-Current Asset Schedule', level: 2 }
        },
        {
            id: 'p-schedule',
            type: 'paragraph',
            data: {
                text: 'Companies present NCA movements in a <strong>schedule (note to accounts)</strong> showing costs and depreciation separately. This provides transparency about additions, disposals and NBV.'
            }
        },
        {
            id: 'tbl-schedule',
            type: 'comparisonTable',
            data: {
                caption: 'NCA Schedule format',
                headers: ['', 'Cost £', 'Acc Dep £', 'NBV £'],
                rows: [
                    ['Opening balance', '50 000', '20 000', '30 000'],
                    ['Additions', '10 000', '—', '10 000'],
                    ['Disposals (at cost/acc dep)', '(8 000)', '(5 000)', '(3 000)'],
                    ['Charge for year', '—', '6 000', '(6 000)'],
                    ['Closing balance', '52 000', '21 000', '31 000']
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Write up a disposal account for a cash sale of a NCA', checked: false },
                    { text: 'Calculate profit or loss on disposal from cost, acc dep and proceeds', checked: false },
                    { text: 'Record a part-exchange transaction in the double-entry', checked: false },
                    { text: 'Prepare a NCA schedule for a business with additions and disposals', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Disposal removes cost and accumulated depreciation; proceeds credited; balance = profit (CR) or loss (DR) on disposal transferred to IS. Part-exchange treats the trade-in allowance as proceeds and records the new asset at full cost. NCA schedules show opening/closing cost and depreciation for each asset category.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-disposal-steps', prompt: 'State the four steps in writing up a disposal account.' },
            { id: 'cue-2', blockId: 'eq-1', prompt: 'State the formula for profit or loss on disposal.' },
            { id: 'cue-3', blockId: 'h-partex', prompt: 'How is a part-exchange allowance recorded in the disposal account?' },
            { id: 'cue-4', blockId: 'h-schedule', prompt: 'What does a non-current asset schedule show?' }
        ],
        summaryText: 'Disposal: remove cost and acc dep, record proceeds, balance = profit or loss on disposal. Part-exchange allowance = proceeds. NCA schedule shows movements in cost and depreciation.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_11;
