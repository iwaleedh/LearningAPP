/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 1
 * "Trial balance limitations"
 */

export const note_accounting_1_2_1 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Identify the six types of error that are NOT revealed by a balanced trial balance, and explain why each goes undetected.'
            }
        },
        {
            id: 'h-lim',
            type: 'heading',
            data: { text: 'Errors NOT Detected by the Trial Balance', level: 2 }
        },
        {
            id: 'p-lim',
            type: 'paragraph',
            data: {
                text: 'Because the trial balance only checks that total debits equal total credits, certain errors can exist without causing an imbalance. These are called <strong>errors of principle, omission, commission, compensation, original entry and reversal</strong>.'
            }
        },
        {
            id: 'tbl-errors',
            type: 'comparisonTable',
            data: {
                caption: 'Six errors not detected by the trial balance',
                headers: ['Error Type', 'Description', 'Example'],
                rows: [
                    ['Omission', 'A transaction is completely omitted from the books.', 'A sale of £500 is not recorded at all.'],
                    ['Commission', 'Correct amount, wrong account (of the same type).', 'Electricity bill debited to Gas account instead.'],
                    ['Principle', 'Correct amount, wrong account (of different type).', 'Capital expenditure posted to an expense account.'],
                    ['Original entry (error of figures)', 'Same wrong amount on both DR and CR sides.', '£540 sale recorded as £450 debit and £450 credit.'],
                    ['Reversal', 'DR and CR sides swapped.', 'Cash received debited to Sales, credited to Cash.'],
                    ['Compensating', 'Two separate errors cancel each other out.', 'Sales £200 understated; Purchases £200 understated — net effect zero.']
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Memory Aid — OPCPOR',
                text: 'Omission, Principle, Commission, Original entry, Reversal, Compensating — use "OPCPOR" or remember that none of these <em>break the DR = CR rule</em> and so the trial balance stays balanced despite the mistakes.'
            }
        },
        {
            id: 'h-detected',
            type: 'heading',
            data: { text: 'Errors the Trial Balance DOES Detect', level: 2 }
        },
        {
            id: 'list-detect',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Single entry — only one side of a transaction posted.' },
                    { text: 'Posting of wrong amount on one side (e.g. DR £500 but CR £50).' },
                    { text: 'Incorrect addition of a ledger account balance (casting error).' },
                    { text: 'Transposition error on only one side (e.g. £63 recorded as £36 on one side only).' }
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Name all six errors not revealed by the TB and give an example of each', checked: false },
                    { text: 'Explain why an error of commission does not break the TB balance', checked: false },
                    { text: 'Give two examples of errors the TB DOES detect', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Six errors go undetected: Omission, Commission, Principle, Original Entry, Reversal, Compensating. All keep DR = CR so the TB stays balanced. Errors the TB DOES catch include single entry, unequal amounts posted, and casting errors on one side only.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-errors', prompt: 'Name three types of error not detected by the trial balance.' },
            { id: 'cue-2', blockId: 'tbl-errors', prompt: 'What is an error of commission? Give an example.' },
            { id: 'cue-3', blockId: 'tbl-errors', prompt: 'What is an error of principle? How does it differ from an error of commission?' },
            { id: 'cue-4', blockId: 'list-detect', prompt: 'Give two errors that ARE detected by an imbalanced trial balance.' }
        ],
        summaryText: 'Six TB-hiding errors: Omission, Commission, Principle, Original Entry, Reversal, Compensating. TB only detects arithmetic inequality.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_1;
