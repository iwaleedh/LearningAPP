/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 10
 * "Club and non-profit organisations"
 */

export const note_accounting_1_3_10 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a receipts and payments account and an income and expenditure account for a club or non-profit organisation, including subscriptions, accumulated fund, and the treatment of donations and life membership.'
            }
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Non-Profit Organisations', level: 2 }
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'Clubs, societies and charities are <strong>non-profit organisations</strong> (NPOs). Their aim is not to make profit but to provide benefits to members. Instead of a sole trader\'s capital account, their equity is called the <strong>accumulated fund</strong>. Instead of a profit and loss account, they prepare an <strong>income and expenditure (I&amp;E) account</strong>, which produces a <em>surplus</em> (income &gt; expenditure) or <em>deficit</em> (expenditure &gt; income).'
            }
        },
        {
            id: 'h-rp',
            type: 'heading',
            data: { text: 'Receipts and Payments Account', level: 2 }
        },
        {
            id: 'p-rp',
            type: 'paragraph',
            data: {
                text: 'The <strong>receipts and payments account</strong> is a simple <em>cash book summary</em> for the period. It records all cash and bank receipts on the debit side and all payments on the credit side. It does NOT apply the accruals concept — it is purely cash-based.'
            }
        },
        {
            id: 'tbl-rp-ie',
            type: 'comparisonTable',
            data: {
                caption: 'Receipts & Payments vs Income & Expenditure',
                headers: ['Feature', 'Receipts & Payments', 'Income & Expenditure'],
                rows: [
                    ['Basis', 'Cash basis', 'Accruals basis'],
                    ['Accruals/prepayments', 'Ignored', 'Applied'],
                    ['Capital items', 'Included', 'Excluded (depreciation instead)'],
                    ['Opening/closing balances', 'Cash/bank balances', 'Accumulated fund'],
                    ['Result', 'Closing cash balance', 'Surplus or deficit']
                ]
            }
        },
        {
            id: 'h-ie',
            type: 'heading',
            data: { text: 'Income and Expenditure Account', level: 2 }
        },
        {
            id: 'p-ie',
            type: 'paragraph',
            data: {
                text: 'Prepared on the accruals basis. Only <em>revenue</em> items are included. Capital expenditure appears on the SFP (as non-current assets) and is charged via depreciation in the I&amp;E account.'
            }
        },
        {
            id: 'h-subs',
            type: 'heading',
            data: { text: 'Subscriptions', level: 2 }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Subscriptions Ledger — Worked Example',
                text: 'Cash received for subscriptions: £4 200\nOwing b/f (arrears): £300\nOwing c/f (arrears): £200\nPrepaid b/f: £100\nPrepaid c/f: £150\n\nSubscriptions Account:\n  DR  Opening arrears    300   CR  Opening prepaid  100\n  DR  Cash              4 200  CR  I&E (income)     4 350\n  DR  Closing prepaid    150   CR  Closing arrears   200\n  Totals = 4 650 = 4 650\n\nIncome for I&E = £4 350   (4 200 + 300 − 100 − 200 + 150)'
            }
        },
        {
            id: 'h-life',
            type: 'heading',
            data: { text: 'Life Membership and Donations', level: 2 }
        },
        {
            id: 'list-life',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Life membership:</strong> lump-sum fee received in full. Usually credited to a <em>life membership fund</em> and a portion released to income each year over the expected membership life.' },
                    { text: '<strong>Donations (general):</strong> credited to the I&amp;E account as income.' },
                    { text: '<strong>Donations (specific purpose):</strong> held in a separate fund on the SFP until spent — NOT income until used for the specified purpose.' }
                ]
            }
        },
        {
            id: 'h-accfund',
            type: 'heading',
            data: { text: 'Accumulated Fund', level: 2 }
        },
        {
            id: 'p-accfund',
            type: 'paragraph',
            data: {
                text: 'The accumulated fund is the NPO\'s equivalent of capital. Opening accumulated fund = opening net assets. Each period: Accumulated Fund + Surplus (or − Deficit) = Closing accumulated fund. If no opening figure is given, prepare a <em>statement of affairs</em> at the start of the period to calculate it.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Distinguish between the receipts & payments account and income & expenditure account', checked: false },
                    { text: 'Adjust subscription cash receipts for accruals and prepayments', checked: false },
                    { text: 'Calculate the opening accumulated fund from a statement of affairs', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'NPOs use an income and expenditure account (accruals basis) instead of profit and loss, and an accumulated fund instead of capital. Receipts and payments is a cash summary. Subscriptions must be adjusted for accruals/prepayments to find the I&E income figure.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'h-intro', prompt: 'What replaces "capital" and "profit/loss account" in a non-profit organisation?' },
            { id: 'cue-2', blockId: 'tbl-rp-ie', prompt: 'State TWO differences between a receipts and payments account and an income and expenditure account.' },
            { id: 'cue-3', blockId: 'h-subs', prompt: 'Cash subscriptions received = £4 200; arrears b/f £300; arrears c/f £200; prepaid b/f £100; prepaid c/f £150. What is the income for the I&E account?' }
        ],
        summaryText: 'Clubs use I&E account (accruals) and accumulated fund. R&P is cash-only summary. Adjust subscriptions for accruals/prepayments. Life membership spread over time; specific donations held in fund until used.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_10;
