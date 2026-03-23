/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 5
 * "Incomplete-record conversion"
 */

export const note_accounting_1_3_5 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Reconstruct financial statements from incomplete records using the accounting equation, mark-up and margin, control accounts and a statement of affairs.'
            }
        },
        {
            id: 'h-statement',
            type: 'heading',
            data: { text: 'Statement of Affairs', level: 2 }
        },
        {
            id: 'p-statement',
            type: 'paragraph',
            data: {
                text: 'When formal records are unavailable, prepare a <strong>statement of affairs</strong> (a simple balance sheet) at the start and end of the period using known asset and liability figures. The difference in <strong>net assets</strong> equals profit (plus drawings, minus additional capital).'
            }
        },
        {
            id: 'eq-1',
            type: 'equation',
            data: {
                html: 'Profit = Closing Capital − Opening Capital + Drawings − Capital Introduced',
                caption: 'Profit from incomplete records'
            }
        },
        {
            id: 'h-markup',
            type: 'heading',
            data: { text: 'Mark-Up and Gross Profit Margin', level: 2 }
        },
        {
            id: 'tbl-margin',
            type: 'comparisonTable',
            data: {
                caption: 'Mark-up vs margin',
                headers: ['', 'Mark-Up', 'Gross Profit Margin'],
                rows: [
                    ['Base for %', 'Cost of Sales', 'Revenue'],
                    ['Formula', '(GP ÷ CoS) × 100', '(GP ÷ Revenue) × 100'],
                    ['Example (GP £20, CoS £80, Rev £100)', '20/80 = 25%', '20/100 = 20%']
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Using Mark-Up to Find Missing CoS',
                text: 'Revenue = £120 000. Business uses a 50% mark-up on cost.\n\n  50% mark-up: GP = 50% × CoS → Revenue = CoS + GP = CoS + 0.5×CoS = 1.5×CoS\n  CoS = 120 000 ÷ 1.5 = £80 000\n  Gross Profit = 120 000 − 80 000 = £40 000'
            }
        },
        {
            id: 'h-control',
            type: 'heading',
            data: { text: 'Reconstructing Figures via Control Accounts', level: 2 }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Finding Credit Sales from SLCA',
                text: 'Opening debtors: £4 200. Cash from debtors: £38 600. Closing debtors: £5 100.\n\nSLCA:\n  DR: Opening 4 200 + Credit sales (?) = CR: Cash 38 600 + Closing 5 100 = 43 700\n  Credit Sales = 43 700 − 4 200 = £39 500'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Step-by-Step Approach',
                text: '1. Prepare an opening statement of affairs to find opening capital.\n2. Use SLCA/PLCA to find missing sales or purchases.\n3. Use mark-up/margin to find missing CoS or revenue.\n4. Prepare a full IS and SFP.\n5. Verify closing capital using the profit formula.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Prepare a statement of affairs to find opening capital', checked: false },
                    { text: 'Use mark-up or margin to reconstruct missing CoS or revenue', checked: false },
                    { text: 'Use a control account to find missing sales or purchases figures', checked: false },
                    { text: 'Apply the profit formula and check it is consistent with IS profit', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Incomplete records: prepare statement of affairs (opening and closing) to derive capital. Profit = closing − opening capital + drawings. Use mark-up/margin to fill CoS/revenue gaps. Use control accounts (SLCA/PLCA) to reconstruct credit transactions.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'eq-1', prompt: 'State the formula for profit from incomplete records.' },
            { id: 'cue-2', blockId: 'tbl-margin', prompt: 'Distinguish mark-up from gross profit margin.' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'If revenue is £120 000 and mark-up is 50%, calculate cost of sales.' },
            { id: 'cue-4', blockId: 'h-control', prompt: 'How can the SLCA be used to find missing credit sales?' }
        ],
        summaryText: 'Incomplete records: profit = closing − opening capital + drawings. Use mark-up/margin for missing figures; use control accounts to reconstruct credit sales/purchases.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_5;
