/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 6
 * "Going concern, prudence and accruals"
 */

export const note_accounting_1_1_6 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the going concern, prudence and accruals concepts and discuss their application and limitations in preparing financial statements.'
            }
        },
        {
            id: 'h-concepts',
            type: 'heading',
            data: { text: 'Accounting Concepts and Conventions', level: 2 }
        },
        {
            id: 'p-concepts-intro',
            type: 'paragraph',
            data: {
                text: '<strong>Accounting concepts</strong> (also called conventions or principles) provide the theoretical framework that guides how transactions are recorded and financial statements are prepared. They ensure consistency and comparability. Three fundamental concepts are <em>going concern</em>, <em>prudence</em>, and <em>accruals</em>.'
            }
        },
        {
            id: 'h-going',
            type: 'heading',
            data: { text: 'Going Concern', level: 2 }
        },
        {
            id: 'p-going',
            type: 'paragraph',
            data: {
                text: 'The <strong>going concern concept</strong> assumes the business will continue operating for the <em>foreseeable future</em> and has no intention or necessity to cease trading. This means assets are valued at <em>historic cost</em> rather than break-up (liquidation) value, and long-term liabilities are presented as such.'
            }
        },
        {
            id: 'callout-going',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Going Concern — Application & Implication',
                text: '<strong>If</strong> going concern applies: assets at historic/book value; long-term treatment of liabilities.\n<strong>If NOT</strong> going concern (e.g. winding up): assets revalued to net realisable value; all liabilities treated as current; extra disclosures required.'
            }
        },
        {
            id: 'h-prudence',
            type: 'heading',
            data: { text: 'Prudence (Conservatism)', level: 2 }
        },
        {
            id: 'p-prudence',
            type: 'paragraph',
            data: {
                text: 'The <strong>prudence concept</strong> requires that revenues and profits are recognised only when <em>reasonably certain</em>, while expenses and losses are recognised as soon as they are <em>foreseen</em>. This prevents over-stating assets or profits. "Anticipate losses, do not anticipate profits."'
            }
        },
        {
            id: 'list-prudence-examples',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Allowance for receivables</strong> — creating a provision for potential bad debts before they are confirmed.' },
                    { text: '<strong>Inventory at lower of cost and NRV</strong> — if NRV falls below cost, write inventory down immediately.' },
                    { text: '<strong>Contingent liabilities</strong> — disclosed if probable, even if not yet certain.' }
                ]
            }
        },
        {
            id: 'h-accruals',
            type: 'heading',
            data: { text: 'Accruals (Matching) Concept', level: 2 }
        },
        {
            id: 'p-accruals',
            type: 'paragraph',
            data: {
                text: 'The <strong>accruals concept</strong> states that revenues and expenses must be recognised in the period to which they <em>relate</em>, not when cash is received or paid. Also called the <strong>matching concept</strong> because expenses are matched against the revenues they generate in the same period.'
            }
        },
        {
            id: 'tbl-three',
            type: 'comparisonTable',
            data: {
                caption: 'Three fundamental concepts compared',
                headers: ['Concept', 'Core Principle', 'Practical Application'],
                rows: [
                    ['Going concern', 'Business will continue indefinitely', 'Assets at historical cost; long-term treatment'],
                    ['Prudence', 'Recognise losses early, gains only when certain', 'Allowance for doubtful debts; inventory at lower of cost/NRV'],
                    ['Accruals', 'Match revenue & expenses to the period earned/incurred', 'Accruals and prepayments adjustments']
                ]
            }
        },
        {
            id: 'h-limits',
            type: 'heading',
            data: { text: 'Limitations of These Concepts', level: 2 }
        },
        {
            id: 'list-limits',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Going concern</strong> — directors may incorrectly assume going concern when financial difficulties are imminent, misleading investors.' },
                    { text: '<strong>Prudence</strong> — excessive prudence can understate profits and asset values; may lead to manipulation (creating hidden reserves by over-provisioning).' },
                    { text: '<strong>Accruals</strong> — requires estimation (accruals, provisions), introducing subjectivity and potential for manipulation.' }
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'In evaluate/discuss questions about accounting concepts, always give both the advantage of applying the concept AND a limitation or conflict with another concept. For example, prudence can conflict with the true and fair view if overly distorted.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Define going concern and state its effect on asset valuation', checked: false },
                    { text: 'Define prudence and give two practical examples', checked: false },
                    { text: 'Define the accruals concept and explain its link to accruals/prepayments', checked: false },
                    { text: 'State one limitation of each concept', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Going concern assumes the business will continue, allowing historic cost valuation. Prudence requires anticipated losses to be recognised immediately; gains only when certain — e.g. allowances for receivables. The accruals concept matches revenues and expenses to the period they relate to, requiring adjustments for accruals and prepayments. Each concept has limitations including subjectivity and potential conflict with other principles.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-going', prompt: 'Define going concern. What happens if a business is NOT a going concern?' },
            { id: 'cue-2', blockId: 'p-prudence', prompt: 'Define prudence. Give two examples of prudence in practice.' },
            { id: 'cue-3', blockId: 'p-accruals', prompt: 'Explain the accruals concept and why it requires end-of-period adjustments.' },
            { id: 'cue-4', blockId: 'list-limits', prompt: 'Give one limitation of the prudence concept.' }
        ],
        summaryText: 'Going concern → historic cost valuation. Prudence → recognise losses early, not gains. Accruals → match income/expense to the period it relates to.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_6;
