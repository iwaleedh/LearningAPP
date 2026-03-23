/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 1
 * "Sole trader statement of financial position"
 */

export const note_accounting_1_3_1 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a statement of financial position (balance sheet) for a sole trader, showing non-current assets, current assets, current liabilities, long-term liabilities and capital.'
            }
        },
        {
            id: 'h-structure',
            type: 'heading',
            data: { text: 'SFP Layout', level: 2 }
        },
        {
            id: 'tbl-sfp',
            type: 'comparisonTable',
            data: {
                caption: 'Statement of financial position — format',
                headers: ['Section', 'Items', '£'],
                rows: [
                    ['Non-Current Assets', 'Land, buildings, equipment, vehicles (at NBV)', 'X'],
                    ['Current Assets', 'Inventory, trade receivables (net), prepayments, bank, cash', 'X'],
                    ['Total Assets', 'NCA + CA', 'X'],
                    ['Current Liabilities', 'Trade payables, accruals, bank overdraft', '(X)'],
                    ['Net Current Assets (Working Capital)', 'CA − CL', 'X'],
                    ['Non-Current Liabilities', 'Long-term loans, mortgages', '(X)'],
                    ['Net Assets', 'Total Assets − All Liabilities', 'X'],
                    ['Capital — Opening balance', '', 'X'],
                    ['+ Profit for year', '', 'X'],
                    ['− Drawings', '', '(X)'],
                    ['Capital — Closing balance', '= Net Assets', 'X']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Accounting Equation (SFP)',
                text: 'Assets = Liabilities + Capital\nEquivalently: Net Assets = Capital\n\nA correctly prepared SFP will always balance: Net Assets = Total Capital.'
            }
        },
        {
            id: 'h-nca',
            type: 'heading',
            data: { text: 'Non-Current Assets Presentation', level: 2 }
        },
        {
            id: 'tbl-nca',
            type: 'comparisonTable',
            data: {
                caption: 'NCA section within SFP',
                headers: ['', 'Cost £', 'Acc Dep £', 'NBV £'],
                rows: [
                    ['Premises', '100 000', '0', '100 000'],
                    ['Vehicles', '24 000', '15 000', '9 000'],
                    ['Equipment', '12 000', '4 000', '8 000'],
                    ['Total NCA', '136 000', '19 000', '117 000']
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Common Exam Mistakes',
                text: '1. Forgetting to deduct the allowance for irrecoverable debts from trade receivables.\n2. Including drawings as an expense (it should reduce capital only).\n3. Mixing up current and non-current liabilities (a bank overdraft is current; a long-term loan is non-current).'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Prepare the NCA section showing Cost, Acc Dep and NBV', checked: false },
                    { text: 'Classify assets as current or non-current correctly', checked: false },
                    { text: 'Show the capital section with opening balance, profit and drawings', checked: false },
                    { text: 'Confirm Net Assets = Closing Capital', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'SFP: NCA (NBV) + CA − CL = Net Current Assets; less NCL = Net Assets = Capital. Capital section: opening + profit − drawings = closing capital. Present NCA at Cost less Accumulated Depreciation.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-key-1', prompt: 'State the accounting equation as it applies to the SFP.' },
            { id: 'cue-2', blockId: 'tbl-sfp', prompt: 'List the five main sections of the SFP in order.' },
            { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'How are trade receivables presented on the SFP when an allowance for irrecoverable debts exists?' }
        ],
        summaryText: 'SFP: NCA (Cost − Acc Dep) + CA − CL − NCL = Net Assets = Capital (opening + profit − drawings).',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_1;
