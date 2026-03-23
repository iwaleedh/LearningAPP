/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 0
 * "Trial balance purpose"
 */

export const note_accounting_1_2_0 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the purpose of a trial balance, describe how it is extracted, and identify what it proves and does not prove about the accounting records.'
            }
        },
        {
            id: 'h-purpose',
            type: 'heading',
            data: { text: 'Purpose of the Trial Balance', level: 2 }
        },
        {
            id: 'p-purpose',
            type: 'paragraph',
            data: {
                text: 'A <strong>trial balance</strong> is a listing of all ledger account balances at a given date, split into debit and credit columns. Its primary purpose is to <strong>check the arithmetical accuracy</strong> of the double-entry bookkeeping: if all entries have been made correctly, total debits must equal total credits.'
            }
        },
        {
            id: 'list-purpose',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Acts as a check on double-entry: DR total = CR total.' },
                    { text: 'Provides a convenient list of balances from which to prepare the financial statements (IS and SFP).' },
                    { text: 'Helps identify certain types of bookkeeping error (see next subtopic for limitations).' }
                ]
            }
        },
        {
            id: 'h-format',
            type: 'heading',
            data: { text: 'Extracting a Trial Balance', level: 2 }
        },
        {
            id: 'p-format',
            type: 'paragraph',
            data: {
                text: 'Balance each ledger account (carry down the net balance). List every account name, then place the balance in the <strong>debit column</strong> if it is a debit balance, or the <strong>credit column</strong> if it is a credit balance.'
            }
        },
        {
            id: 'tbl-rules',
            type: 'comparisonTable',
            data: {
                caption: 'Which column? — normal balance rules',
                headers: ['Account Type', 'Normal Balance', 'Column'],
                rows: [
                    ['Assets (NCA, inventory, cash, receivables)', 'Debit', 'DR column'],
                    ['Liabilities (payables, loans, bank overdraft)', 'Credit', 'CR column'],
                    ['Capital / equity', 'Credit', 'CR column'],
                    ['Revenue / income', 'Credit', 'CR column'],
                    ['Expenses', 'Debit', 'DR column'],
                    ['Drawings', 'Debit', 'DR column'],
                    ['Accumulated depreciation (contra-asset)', 'Credit', 'CR column'],
                    ['Allowance for irrecoverable debts (contra)', 'Credit', 'CR column']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What the TB Proves',
                text: 'A balanced trial balance proves that for every debit there is an equal and opposite credit — i.e. the <em>arithmetic</em> of the double-entry system is correct. It does NOT prove that transactions were recorded in the correct accounts or that all transactions were recorded at all.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the primary purpose of the trial balance', checked: false },
                    { text: 'List the two columns and state which balances go in each', checked: false },
                    { text: 'Explain what a balanced TB does and does not prove', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'The trial balance lists all ledger balances in DR and CR columns. A balanced TB (DR total = CR total) confirms arithmetical accuracy of the double-entry records. It does not prove freedom from all errors — only those that cause an imbalance are revealed.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-purpose', prompt: 'State two purposes of extracting a trial balance.' },
            { id: 'cue-2', blockId: 'tbl-rules', prompt: 'Which column do assets normally appear in? Which column do liabilities appear in?' },
            { id: 'cue-3', blockId: 'callout-key-1', prompt: 'What does a balanced trial balance prove and NOT prove?' }
        ],
        summaryText: 'Trial balance: lists all ledger balances; DR = CR proves arithmetic accuracy only. Does not detect all errors.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_0;
