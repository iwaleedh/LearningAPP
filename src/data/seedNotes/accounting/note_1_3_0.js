/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 0
 * "Sole trader statement of profit or loss"
 */

export const note_accounting_1_3_0 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a statement of profit or loss (income statement) for a sole trader, including adjustments for opening and closing inventory, and interpret the resulting figures.'
            }
        },
        {
            id: 'h-structure',
            type: 'heading',
            data: { text: 'Structure of the Income Statement', level: 2 }
        },
        {
            id: 'tbl-is',
            type: 'comparisonTable',
            data: {
                caption: 'Income statement format — sole trader',
                headers: ['Line', 'Calculation', '£'],
                rows: [
                    ['Revenue (Sales)', '', 'X'],
                    ['Less: Sales returns', '', '(X)'],
                    ['Net Revenue', '', 'X'],
                    ['Less: Cost of Sales', '', ''],
                    ['  Opening inventory', '+', 'X'],
                    ['  + Purchases', '+', 'X'],
                    ['  − Purchases returns', '−', '(X)'],
                    ['  − Closing inventory', '−', '(X)'],
                    ['Cost of Sales', '=', '(X)'],
                    ['Gross Profit', 'Net Revenue − CoS', 'X'],
                    ['Add: Other Income (e.g. rent received)', '', 'X'],
                    ['Less: Expenses (wages, rent, dep···)', '', '(X)'],
                    ['Profit for the Year (Net Profit)', '', 'X']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Cost of Sales Formula',
                text: 'Cost of Sales = Opening Inventory + Purchases − Purchases Returns − Closing Inventory.\n\nOr: CoS = Net Purchases + Opening Inventory − Closing Inventory.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Income Statement — Worked Example',
                text: 'Revenue: £80 000 | Sales returns: £2 000\nOpening inventory: £5 000 | Purchases: £45 000\nPurchases returns: £1 000 | Closing inventory: £6 500\nWages: £12 000 | Rent: £4 000 | Depreciation: £2 000\n\n  Net Revenue = 80 000 − 2 000 = 78 000\n  CoS = 5 000 + 45 000 − 1 000 − 6 500 = 42 500\n  Gross Profit = 78 000 − 42 500 = 35 500\n  Expenses = 12 000 + 4 000 + 2 000 = 18 000\n  Net Profit = 35 500 − 18 000 = £17 500'
            }
        },
        {
            id: 'h-terms',
            type: 'heading',
            data: { text: 'Key Terms', level: 2 }
        },
        {
            id: 'list-terms',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Gross profit</strong> — profit from trading before deducting overheads.' },
                    { text: '<strong>Net profit</strong> — profit after all overhead expenses.' },
                    { text: '<strong>Gross profit margin</strong> = (Gross profit ÷ Revenue) × 100.' },
                    { text: '<strong>Net profit margin</strong> = (Net profit ÷ Revenue) × 100.' }
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Calculate cost of sales from given data', checked: false },
                    { text: 'Prepare a full income statement in the correct format', checked: false },
                    { text: 'Distinguish gross profit from net profit', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'IS: Revenue − CoS = Gross Profit; Gross Profit + Other Income − Expenses = Net Profit. CoS includes opening inventory, purchases (net) less closing inventory. Always show returns separately and deduct before net revenue.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-key-1', prompt: 'State the cost of sales formula.' },
            { id: 'cue-2', blockId: 'tbl-is', prompt: 'List all three sections of the income statement in order.' },
            { id: 'cue-3', blockId: 'list-terms', prompt: 'Define gross profit and net profit.' }
        ],
        summaryText: 'IS: Revenue − CoS (open + purchases − returns − close) = Gross Profit; less expenses = Net Profit.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_0;
