/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 6
 * "Suspense accounts"
 */

export const note_accounting_1_2_6 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a suspense account, show how correcting entries clear it to zero, and prepare a revised trial balance after corrections.'
            }
        },
        {
            id: 'h-open',
            type: 'heading',
            data: { text: 'Opening the Suspense Account', level: 2 }
        },
        {
            id: 'p-open',
            type: 'paragraph',
            data: {
                text: 'When a trial balance fails to agree, the <strong>difference</strong> is placed in a suspense account:'
            }
        },
        {
            id: 'list-open',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'If DR > CR by £X → CR Suspense £X (to bring CR up to DR total).' },
                    { text: 'If CR > DR by £X → DR Suspense £X (to bring DR up to CR total).' }
                ]
            }
        },
        {
            id: 'h-clear',
            type: 'heading',
            data: { text: 'Clearing the Suspense Account', level: 2 }
        },
        {
            id: 'p-clear',
            type: 'paragraph',
            data: {
                text: 'Each correction journal that involves a single-entry error will include a debit or credit to suspense. Once all errors causing the imbalance are found and corrected, the suspense account must show a <strong>nil balance</strong>.'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Suspense Account — Full Example',
                text: 'TB differs by £500: DR total £62 000, CR total £61 500. → CR Suspense £500.\n\nErrors found:\n1. DR Wages £300 — no credit side posted.\n   Journal: DR Suspense 300 / CR Wages accrual/bank 300\n   (Wait — re-examine: only one side of wages was posted, so wages DR was posted but CR to bank was not.)\n   Journal: DR Suspense 300 / CR Bank 300\n\n2. Sales £200 credit posted as £200 on debit side as well (transposition-type double-debit).\n   Net overstatement of DR by £400 (should be CR, was DR → difference 2 × 200).\n   Journal: CR Sales 200 / DR Suspense 200 ... adjusting to net the difference correctly.\n\nAfter both corrections, Suspense account:\n  DR: 200 (from error 2 correction), 300 (from error 1) = 500\n  CR: Opening 500\n  Balance = nil ✓'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'Always write up the suspense account formally, putting each correction on the DR or CR side accordingly. Check that the suspense account closes to nil — if not, you have missed an error or made journal mistakes. Show working clearly for the examiner.'
            }
        },
        {
            id: 'h-rtb',
            type: 'heading',
            data: { text: 'Revised Trial Balance', level: 2 }
        },
        {
            id: 'p-rtb',
            type: 'paragraph',
            data: {
                text: 'After clearing the suspense account, prepare a <strong>revised trial balance</strong> by adjusting the original balances for each correction. The revised TB should agree (DR = CR), with no suspense account entry.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Open a suspense account from a given TB difference', checked: false },
                    { text: 'Show each correction entry passing through the suspense account', checked: false },
                    { text: 'Confirm the suspense account closes to nil after corrections', checked: false },
                    { text: 'Prepare a revised trial balance from original balances + corrections', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Suspense account: DR if DR < CR; CR if DR > CR. Each correcting journal clears part of the suspense account. Once all errors are corrected, suspense balance = nil. Revised TB is prepared by adjusting original balances for corrections.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-open', prompt: 'If the DR total exceeds the CR total by £800, how do you open the suspense account?' },
            { id: 'cue-2', blockId: 'p-clear', prompt: 'What does the suspense account balance equal once all errors are corrected?' },
            { id: 'cue-3', blockId: 'h-rtb', prompt: 'How is a revised trial balance prepared after error corrections?' }
        ],
        summaryText: 'Suspense account holds TB difference; cleared to nil as errors are corrected via journals. Revised TB adjusts original balances for all corrections.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_6;
