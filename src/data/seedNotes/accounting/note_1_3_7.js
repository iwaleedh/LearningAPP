/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 7
 * "Partners' current and capital accounts"
 */

export const note_accounting_1_3_7 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare partners\' capital and current accounts, understand the distinction between the two, and show how closing balances flow onto the SFP.'
            }
        },
        {
            id: 'h-capital',
            type: 'heading',
            data: { text: 'Capital Accounts', level: 2 }
        },
        {
            id: 'p-capital',
            type: 'paragraph',
            data: {
                text: 'The <strong>capital account</strong> records the permanent investment made by each partner. It is normally <em>fixed</em> and only changes when: additional capital is introduced; capital is withdrawn (agreed reduction); or on admission/retirement of a partner. Interest on capital is calculated on this balance.'
            }
        },
        {
            id: 'h-current',
            type: 'heading',
            data: { text: 'Current Accounts', level: 2 }
        },
        {
            id: 'p-current',
            type: 'paragraph',
            data: {
                text: 'The <strong>current account</strong> records the <em>fluctuating</em> balance: profit shares, salaries, interest on capital added each year; drawings, interest on drawings deducted. A credit balance means the partnership owes the partner; a <strong>debit balance</strong> means the partner owes the partnership (a liability for the partner).'
            }
        },
        {
            id: 'tbl-current',
            type: 'comparisonTable',
            data: {
                caption: 'Current account — typical entries',
                headers: ['DR (charged to partner)', 'CR (credited to partner)'],
                rows: [
                    ['Drawings', 'Opening credit balance'],
                    ['Interest on drawings', 'Salary allocation'],
                    ['Opening debit balance', 'Interest on capital'],
                    ['', 'Share of residual profit'],
                    ['Closing credit balance c/d', 'Closing debit balance c/d']
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Current Account — Worked Example',
                text: 'Partner A: Opening current a/c balance (CR) £1 200.\nAllocations from appropriation: salary £6 000; interest on capital £1 000; PSR share £13 500.\nDrawings during year: £18 000. Interest on drawings: £400.\n\n  DR side:  Drawings 18 000 | Interest on drawings 400 | Closing bal c/d (if CR)\n  CR side:  Opening b/d 1 200 | Salary 6 000 | IoC 1 000 | PSR share 13 500\n\n  Total CR = 1 200 + 6 000 + 1 000 + 13 500 = 21 700\n  Total DR before closing = 18 000 + 400 = 18 400\n  Closing balance (CR) = 21 700 − 18 400 = £3 300'
            }
        },
        {
            id: 'h-sfp',
            type: 'heading',
            data: { text: 'SFP Presentation', level: 2 }
        },
        {
            id: 'p-sfp',
            type: 'paragraph',
            data: {
                text: 'On the SFP, the partners\' equity section shows <em>both</em> capital and current accounts:'
            }
        },
        {
            id: 'tbl-sfp',
            type: 'comparisonTable',
            data: {
                caption: 'Partners\' equity section of SFP',
                headers: ['', 'Partner A £', 'Partner B £', 'Total £'],
                rows: [
                    ['Capital accounts', '20 000', '10 000', '30 000'],
                    ['Current accounts', '3 300', '(800)', '2 500'],
                    ['Total equity', '23 300', '9 200', '32 500']
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'List all items on the debit and credit sides of a partner\'s current account', checked: false },
                    { text: 'Calculate the closing balance of a partner\'s current account', checked: false },
                    { text: 'Present the partners\' equity section of the SFP', checked: false },
                    { text: 'Distinguish between capital account and current account', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Capital account: fixed, records permanent investment. Current account: fluctuating — DR drawings and interest on drawings; CR salary, interest on capital, profit share. SFP shows both accounts per partner. A debit balance on current account is a liability for that partner.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-capital', prompt: 'When does a partner\'s capital account change in a fixed capital arrangement?' },
            { id: 'cue-2', blockId: 'tbl-current', prompt: 'Name three items that appear on the debit side of a partner\'s current account.' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'Calculate Partner A\'s closing current account balance from the data given.' }
        ],
        summaryText: 'Capital account: fixed; current account: fluctuating (CR profit/salary/IoC; DR drawings/IoD). SFP shows capital + current per partner.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_7;
