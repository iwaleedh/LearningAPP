/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 9
 * "Partner admission and retirement"
 */

export const note_accounting_1_3_9 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Account for the admission of a new partner and the retirement of an existing partner, including goodwill revaluation and the adjustment of capital accounts.'
            }
        },
        {
            id: 'h-goodwill',
            type: 'heading',
            data: { text: 'Goodwill', level: 2 }
        },
        {
            id: 'p-goodwill',
            type: 'paragraph',
            data: {
                text: '<strong>Goodwill</strong> is the premium attached to the reputation and customer base of the business. When a partner joins or leaves, goodwill must be <em>valued and accounted for</em> to ensure existing partners are fairly compensated for the goodwill they helped create.'
            }
        },
        {
            id: 'h-admission',
            type: 'heading',
            data: { text: 'Admission of a New Partner', level: 2 }
        },
        {
            id: 'list-admission',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Raise goodwill</strong>: DR Goodwill / CR Partners\' capital accounts (in old PSR).' },
                    { text: '<strong>New partner pays in capital</strong>: DR Cash / CR New partner\'s capital account.' },
                    { text: '<strong>Write off goodwill</strong>: DR Partners\' capital accounts (in new PSR) / CR Goodwill.' },
                    { text: 'If goodwill is <em>retained</em> on the SFP, only steps 1 and 2 are needed.' }
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Admission — Worked Example',
                text: 'Partners A and B share 60:40. Goodwill £10 000. New partner C joins; new PSR A:B:C = 5:3:2. C pays capital £8 000.\n\nStep 1 — Raise goodwill (old PSR 60:40):\n  DR Goodwill  10 000\n  CR Capital A  6 000 (60%)\n  CR Capital B  4 000 (40%)\n\nStep 2 — C pays in:\n  DR Cash   8 000 → CR Capital C  8 000\n\nStep 3 — Write off goodwill (new PSR 5:3:2):\n  DR Capital A  5 000 (50%)\n  DR Capital B  3 000 (30%)\n  DR Capital C  2 000 (20%)\n  CR Goodwill  10 000\n\nNet effect on A: +6 000 − 5 000 = +1 000 (gain)\nNet effect on B: +4 000 − 3 000 = +1 000 (gain)\nC bears 2 000 of goodwill via capital deduction.'
            }
        },
        {
            id: 'h-retire',
            type: 'heading',
            data: { text: 'Retirement of a Partner', level: 2 }
        },
        {
            id: 'p-retire',
            type: 'paragraph',
            data: {
                text: 'When a partner retires: (1) raise goodwill in old PSR; (2) remaining partners write off goodwill in new PSR; (3) revalue assets if required; (4) calculate the retiring partner\'s total due (capital + current + goodwill share); (5) settle by cash, loan or deferred payment.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'If goodwill is NOT written off',
                text: 'Some questions state goodwill remains on the SFP. In that case, do NOT complete the write-off step. The goodwill asset stays, and the old partners\' capital accounts have already been credited in the old PSR — no further entries.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Raise goodwill in the old PSR and then write it off in the new PSR', checked: false },
                    { text: 'Calculate each partner\'s revised capital after admission of a new partner', checked: false },
                    { text: 'Calculate the total amount due to a retiring partner', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Admission: raise goodwill (old PSR), introduce new capital, write off goodwill (new PSR). Retirement: raise goodwill (old PSR), write off (new PSR), calculate retiring partner\'s total entitlement. Goodwill must be raised and then written off unless told otherwise.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'h-goodwill', prompt: 'Why must goodwill be accounted for when a partner joins or leaves?' },
            { id: 'cue-2', blockId: 'list-admission', prompt: 'State the three steps in raising and writing off goodwill on admission of a new partner.' },
            { id: 'cue-3', blockId: 'callout-we-1', prompt: 'Partners A:B share 60:40; new PSR A:B:C = 5:3:2; goodwill = £10 000. What is the net effect on A\'s capital?' }
        ],
        summaryText: 'Admission: raise goodwill old PSR → write off new PSR. Retirement: same process, then settle retiring partner\'s entitlement. Net effect rewards existing partners for goodwill created.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_9;
