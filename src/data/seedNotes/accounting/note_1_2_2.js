/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 2
 * "Receivables and payables control accounts"
 */

export const note_accounting_1_2_2 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the purpose of control accounts, prepare sales and purchases ledger control accounts, and reconcile the control account balance to the list of individual ledger balances.'
            }
        },
        {
            id: 'h-purpose',
            type: 'heading',
            data: { text: 'Purpose of Control Accounts', level: 2 }
        },
        {
            id: 'p-purpose',
            type: 'paragraph',
            data: {
                text: 'A <strong>control account</strong> is a summary account in the general ledger. It records the <em>total</em> of all transactions in the sales (receivables) or purchases (payables) ledger. The control account balance should equal the <strong>total of all individual debtor or creditor balances</strong>. Any difference reveals an error.'
            }
        },
        {
            id: 'h-slca',
            type: 'heading',
            data: { text: 'Sales Ledger Control Account (SLCA)', level: 2 }
        },
        {
            id: 'tbl-slca',
            type: 'comparisonTable',
            data: {
                caption: 'SLCA — debit and credit entries',
                headers: ['DR side', 'CR side'],
                rows: [
                    ['Opening debit balances', 'Opening credit balances (overpayments)'],
                    ['Credit sales (from sales day book)', 'Cash and cheques received from customers'],
                    ['Dishonoured cheques returned', 'Sales returns (from returns inward day book)'],
                    ['Interest charged on overdue accounts', 'Discounts allowed'],
                    ['', 'Irrecoverable debts written off'],
                    ['', 'Contra entries (set off against PLCA)'],
                    ['Closing credit balances c/d', 'Closing debit balances c/d']
                ]
            }
        },
        {
            id: 'h-plca',
            type: 'heading',
            data: { text: 'Purchases Ledger Control Account (PLCA)', level: 2 }
        },
        {
            id: 'tbl-plca',
            type: 'comparisonTable',
            data: {
                caption: 'PLCA — debit and credit entries',
                headers: ['DR side', 'CR side'],
                rows: [
                    ['Opening debit balances (overpayments)', 'Opening credit balances'],
                    ['Cash and cheques paid to suppliers', 'Credit purchases (from purchases day book)'],
                    ['Purchases returns (returns outward)', 'Interest charged by suppliers'],
                    ['Discounts received', ''],
                    ['Contra entries (set off against SLCA)', ''],
                    ['Closing credit balances c/d', 'Closing debit balances c/d']
                ]
            }
        },
        {
            id: 'h-reconcile',
            type: 'heading',
            data: { text: 'Reconciliation', level: 2 }
        },
        {
            id: 'p-reconcile',
            type: 'paragraph',
            data: {
                text: 'The <strong>control account balance</strong> is compared to the <strong>sum of individual ledger balances</strong> (list of debtors/creditors). Differences arise from: errors in the individual ledger (undetected), errors in the control account, or omitted entries.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'SLCA Worked Example',
                text: 'Opening debtors: £8 200. Credit sales: £42 000. Cash received: £39 500. Discounts allowed: £600. Returns: £1 400. Bad debt: £200.\n\nSLCA:\n  DR: Opening 8 200 + Credit sales 42 000 = 50 200\n  CR: Cash 39 500 + Discounts 600 + Returns 1 400 + Bad debt 200 = 41 700\n\n  Closing balance (debit) = 50 200 − 41 700 = £8 500'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the purpose of a control account', checked: false },
                    { text: 'List 5 debit entries and 5 credit entries in the SLCA', checked: false },
                    { text: 'Prepare a SLCA from given data and calculate the closing balance', checked: false },
                    { text: 'Explain what a difference between control account and list of balances indicates', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Control accounts summarise totals from subsidiary ledgers. SLCA: DR = credit sales; CR = receipts, discounts allowed, returns, bad debts. PLCA: CR = credit purchases; DR = payments, discounts received, returns. Closing balance should match total of individual ledger balances — any difference indicates an error.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-purpose', prompt: 'What is the purpose of a control account?' },
            { id: 'cue-2', blockId: 'tbl-slca', prompt: 'Name three items that appear on the debit side of the SLCA.' },
            { id: 'cue-3', blockId: 'tbl-slca', prompt: 'Name three items that appear on the credit side of the SLCA.' },
            { id: 'cue-4', blockId: 'h-reconcile', prompt: 'What does a difference between the control account and list of individual balances reveal?' }
        ],
        summaryText: 'Control accounts summarise subsidiary ledger totals. SLCA DR = credit sales; CR = cash received, discounts allowed, returns, bad debts. Balance = total individual debtors.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_2;
