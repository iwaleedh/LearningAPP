/**
 * Seed note: Accounting · Unit 1 · Topic 2 · Subtopic 8
 * "Control-account corrections"
 */

export const note_accounting_1_2_8 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Reconcile the sales or purchases ledger control account to the list of individual balances, identify and correct errors in both, and produce an updated control account.'
            }
        },
        {
            id: 'h-why',
            type: 'heading',
            data: { text: 'Why Differences Arise', level: 2 }
        },
        {
            id: 'tbl-reasons',
            type: 'comparisonTable',
            data: {
                caption: 'Common reasons for control account vs list of balances differences',
                headers: ['Location of Error', 'Description', 'Where to Correct'],
                rows: [
                    ['Control account (CA)', 'Error in totalling the day books before posting to CA.', 'Adjust the control account.'],
                    ['Control account (CA)', 'Transaction included in day book but omitted from CA.', 'Add/deduct in CA.'],
                    ['Individual ledger', 'Mis-posting in an individual debtor/creditor account.', 'Adjust the list of balances.'],
                    ['Both', 'Transaction in wrong subsidiary ledger account (error of commission).', 'No change to either CA or total.'],
                    ['Individual ledger', 'Balance carried down incorrectly for one account.', 'Adjust the list.']
                ]
            }
        },
        {
            id: 'h-process',
            type: 'heading',
            data: { text: 'Reconciliation Process', level: 2 }
        },
        {
            id: 'list-process',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Start with the balance per the control account and the total per the list of balances.' },
                    { text: 'For each error: decide whether it affects the CA, the list, or both.' },
                    { text: 'Adjust the CA balance and/or the list total accordingly.' },
                    { text: 'Both figures should now agree.' }
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'SLCA Reconciliation — Worked Example',
                text: 'SLCA balance per CA: £9 200. List of debtor balances: £8 850.\n\nErrors found:\n(1) Credit sales day book understated by £200 → CA understated.\n    Adjust CA: +200\n(2) One debtor balance £450 shown as £540 on list → list overstated.\n    Adjust list: −90\n(3) Discount allowed £60 entered in individual accounts but not in CA.\n    Adjust CA: −60\n(4) Error of commission — amount posted to wrong debtor account → no adjustment needed to either CA or list total.\n\nRevised CA = 9 200 + 200 − 60 = 9 340\nRevised list = 8 850 − 90 + correction for further items... check: does 9 340 = 9 340? Verify all errors cleared.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Principle',
                text: 'An error of commission (posting to wrong debtor) affects the split within the list but NOT the control account total. So it adjusts neither CA balance nor the list total — it is irrelevant to the reconciliation.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Identify whether an error affects the CA, the list, or both', checked: false },
                    { text: 'Reconstruct the CA with corrections to reach a revised balance', checked: false },
                    { text: 'Adjust the list of balances to agree with the revised CA', checked: false },
                    { text: 'Explain why an error of commission does not affect the reconciliation', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Control account reconciliation: adjust CA for errors in day-book totals or CA postings; adjust list for errors in individual ledger accounts. Errors of commission within the subsidiary ledger do not change either total. Both figures must agree after all corrections.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-reasons', prompt: 'Name two reasons why the control account balance may differ from the list of individual balances.' },
            { id: 'cue-2', blockId: 'list-process', prompt: 'State the four steps in a control account reconciliation.' },
            { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'Does an error of commission in the subsidiary ledger affect the control account reconciliation totals?' }
        ],
        summaryText: 'Control account reconciliation: adjust CA for day-book/CA errors; adjust list for individual account errors. Errors of commission do not change either total.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_2_8;
