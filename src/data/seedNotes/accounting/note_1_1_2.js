/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 2
 * "Books of account and prime entry"
 */

export const note_accounting_1_1_2 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Describe the books of prime entry used to record business transactions, and explain double-entry bookkeeping including the accounting equation.'
            }
        },
        {
            id: 'h-bpe',
            type: 'heading',
            data: { text: 'Books of Prime Entry', level: 2 }
        },
        {
            id: 'p-bpe-intro',
            type: 'paragraph',
            data: {
                text: '<strong>Books of prime entry</strong> (also called <em>daybooks</em> or <em>journals</em>) are the first place where a business transaction is recorded before it is posted to the ledger accounts. They act as a chronological diary of transactions.'
            }
        },
        {
            id: 'tbl-books',
            type: 'comparisonTable',
            data: {
                caption: 'Main books of prime entry',
                headers: ['Book', 'Records', 'Source Document'],
                rows: [
                    ['Sales day book (SDB)', 'Credit sales to customers', 'Sales invoices'],
                    ['Purchases day book (PDB)', 'Credit purchases from suppliers', 'Purchase invoices'],
                    ['Sales returns day book (SRDB)', 'Goods returned by customers', 'Credit notes issued'],
                    ['Purchases returns day book (PRDB)', 'Goods returned to suppliers', 'Credit notes received'],
                    ['Cash book', 'All cash and bank receipts & payments', 'Bank statements, receipts'],
                    ['Petty cash book', 'Small cash payments (imprest system)', 'Petty cash vouchers'],
                    ['General (journal)', 'Non-routine entries (corrections, opening entries, depreciation)', 'Narrative journal entry']
                ]
            }
        },
        {
            id: 'h-deentry',
            type: 'heading',
            data: { text: 'Double-Entry Bookkeeping', level: 2 }
        },
        {
            id: 'p-deentry',
            type: 'paragraph',
            data: {
                text: 'Every transaction affects <strong>two accounts</strong>. For every <em>debit</em> entry there must be an equal and opposite <em>credit</em> entry. This maintains the <strong>accounting equation</strong>:'
            }
        },
        {
            id: 'eq-accounting',
            type: 'equation',
            data: {
                html: 'Assets = Capital + Liabilities',
                caption: 'The fundamental accounting equation'
            }
        },
        {
            id: 'h-debit-credit',
            type: 'heading',
            data: { text: 'Debit and Credit Rules', level: 2 }
        },
        {
            id: 'tbl-dr-cr',
            type: 'comparisonTable',
            data: {
                caption: 'Rules for debits and credits',
                headers: ['Account Type', 'Increases with', 'Decreases with', 'Normal Balance'],
                rows: [
                    ['Asset', 'Debit', 'Credit', 'Debit'],
                    ['Liability', 'Credit', 'Debit', 'Credit'],
                    ['Capital / Equity', 'Credit', 'Debit', 'Credit'],
                    ['Revenue / Income', 'Credit', 'Debit', 'Credit'],
                    ['Expense', 'Debit', 'Credit', 'Debit']
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Posting a Credit Sale',
                text: 'A business sells goods on credit for £500 to Customer A.\n\nStep 1 — Record in Sales Day Book: £500, Customer A\nStep 2 — Post to ledgers:\n  DR  Trade receivables (Customer A)  £500\n  CR  Sales revenue                   £500\n\nThe receivable (asset) increases; sales revenue (income) increases.'
            }
        },
        {
            id: 'h-ledgers',
            type: 'heading',
            data: { text: 'The Ledger System', level: 2 }
        },
        {
            id: 'list-ledgers',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Sales ledger</strong> — individual accounts for each credit customer (trade receivables).' },
                    { text: '<strong>Purchases ledger</strong> — individual accounts for each credit supplier (trade payables).' },
                    { text: '<strong>General (nominal) ledger</strong> — all other accounts (assets, expenses, capital, income). The main ledger.' },
                    { text: '<strong>Private ledger</strong> — sensitive accounts (capital, drawings) sometimes kept separately.' }
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip — DEAD CLIC Mnemonic',
                text: 'Remember which entries are debits and credits:\n<strong>DEAD CLIC</strong>\nDebits: Expenses, Assets, Drawings\nCredits: Liabilities, Income, Capital'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Name five books of prime entry and the transactions each records', checked: false },
                    { text: 'State the accounting equation', checked: false },
                    { text: 'Explain the double-entry rule for a credit sale', checked: false },
                    { text: 'State which ledger holds trade receivables accounts', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Books of prime entry (SDB, PDB, cash book, journal etc.) record transactions before posting to ledger accounts. Double-entry bookkeeping ensures every transaction has an equal debit and credit, maintaining the equation Assets = Capital + Liabilities. Asset and expense increases are debits; liability, capital and income increases are credits.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-books', prompt: 'Name four books of prime entry and describe what each records.' },
            { id: 'cue-2', blockId: 'eq-accounting', prompt: 'State the accounting equation.' },
            { id: 'cue-3', blockId: 'tbl-dr-cr', prompt: 'Which type of account has a normal debit balance?' },
            { id: 'cue-4', blockId: 'callout-we-1', prompt: 'Describe the double-entry for a £500 credit sale.' }
        ],
        summaryText: 'Books of prime entry record transactions chronologically before posting to ledgers. Double-entry ensures Assets = Capital + Liabilities via equal debits and credits.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_2;
