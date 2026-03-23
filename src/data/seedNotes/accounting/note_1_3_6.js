/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 6
 * "Partnership appropriation accounts"
 */

export const note_accounting_1_3_6 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a partnership appropriation account, dividing profit between partners after salaries, interest on capital and the profit-sharing ratio.'
            }
        },
        {
            id: 'h-approp',
            type: 'heading',
            data: { text: 'The Appropriation Account', level: 2 }
        },
        {
            id: 'p-approp',
            type: 'paragraph',
            data: {
                text: 'After calculating net profit in the income statement, any remaining profit is distributed between partners via the <strong>appropriation account</strong>. Distributions are made in a defined order:'
            }
        },
        {
            id: 'list-order',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Interest on capital</strong> — rewarding partners for the capital they have invested.' },
                    { text: '<strong>Salaries</strong> — a fixed allocation to a partner who works in the business (not the same as an employee wage).' },
                    { text: '<strong>Interest on drawings</strong> — a deduction from profit-sharing to penalise early withdrawal of funds.' },
                    { text: '<strong>Residual profit</strong> — shared in the profit-sharing ratio (PSR).' }
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Appropriation Account — Worked Example',
                text: 'Partners A and B. Net profit £30 000.\nPartner A: capital £20 000, salary £6 000. Partner B: capital £10 000.\nInterest on capital: 5% p.a. PSR: A 60%, B 40%.\n\n  Net Profit                           30 000\n  Less: Interest on capital\n    A: 5% × 20 000 = 1 000\n    B: 5% × 10 000 =   500             (1 500)\n  Less: Partner salary — A             (6 000)\n  Residual profit                      22 500\n\n  Share of residual:\n    A: 60% × 22 500 = 13 500\n    B: 40% × 22 500 =  9 000\n\n  Total to A = 1 000 + 6 000 + 13 500 = 20 500\n  Total to B =   500 +     0 +  9 000 =  9 500'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Loss in Residual',
                text: 'If total salaries and interest on capital exceed net profit, the residual is a <em>loss</em> shared in the PSR. Each partner still receives their salary and interest but then bears a share of the negative residual. A partner may end up with a negative allocation (reducing their current account).'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Prepare an appropriation account with salaries, interest on capital and PSR', checked: false },
                    { text: 'Calculate each partner\'s total share of profit', checked: false },
                    { text: 'Handle a scenario where the residual profit is negative', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Appropriation account: Net Profit − Interest on Capital − Partner Salaries ± Interest on Drawings = Residual profit (shared in PSR). Partners receive interest, salary and PSR share. If residual is negative, it is deducted in PSR, potentially giving an overall negative allocation.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-order', prompt: 'List the four steps in order for distributing partnership profit via the appropriation account.' },
            { id: 'cue-2', blockId: 'callout-we-1', prompt: 'Partners A and B, net profit £30 000, interest on capital £1 500, salary to A £6 000, PSR 60:40. Calculate residual profit and each partner\'s total share.' },
            { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'What happens when total salaries and interest on capital exceed net profit?' }
        ],
        summaryText: 'Appropriation: Net Profit − IoC − Salaries ± IoD = Residual profit shared in PSR. Partners credited with IoC + salary + PSR share.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_6;
