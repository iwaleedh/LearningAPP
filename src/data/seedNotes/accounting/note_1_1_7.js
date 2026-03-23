/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 7
 * "Consistency, materiality and historic cost"
 */

export const note_accounting_1_1_7 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the consistency, materiality and historic cost concepts, apply them to practical situations, and evaluate their limitations.'
            }
        },
        {
            id: 'h-consistency',
            type: 'heading',
            data: { text: 'Consistency Concept', level: 2 }
        },
        {
            id: 'p-consistency',
            type: 'paragraph',
            data: {
                text: 'The <strong>consistency concept</strong> requires that the <em>same accounting methods</em> are applied from one period to the next. For example, the same depreciation method must be used each year for a given asset. This ensures that financial statements are <strong>comparable over time</strong>.'
            }
        },
        {
            id: 'list-consistency',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Depreciation method</strong> — must not switch between straight-line and reducing balance without justification and disclosure.' },
                    { text: '<strong>Inventory valuation</strong> — FIFO or weighted average must be applied consistently.' },
                    { text: '<strong>Allowance percentage</strong> — same basis for calculating allowance for receivables each year.' }
                ]
            }
        },
        {
            id: 'callout-consistency',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Consistency — Key Point',
                text: 'Changing a method is permitted if there is a <em>good reason</em> (e.g. change in legislation, more relevant method). However, the change and its financial impact must be <strong>disclosed</strong> in the notes to the accounts.'
            }
        },
        {
            id: 'h-materiality',
            type: 'heading',
            data: { text: 'Materiality Concept', level: 2 }
        },
        {
            id: 'p-materiality',
            type: 'paragraph',
            data: {
                text: 'An item is <strong>material</strong> if its omission or misstatement could influence the economic decisions of users. <em>Immaterial</em> items may be treated in a simplified way. Materiality is relative — £500 is immaterial for a multinational but highly material for a small business.'
            }
        },
        {
            id: 'list-materiality-examples',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'A box of staples (£3) purchased for the office may be expensed immediately rather than treated as an asset.' },
                    { text: 'A £10 000 machine must be capitalised and depreciated over its life (material).' },
                    { text: 'An unusual expense of £50 000 on a large company\'s accounts may not be separately disclosed if it is ≤ 5% of revenue.' }
                ]
            }
        },
        {
            id: 'h-historic',
            type: 'heading',
            data: { text: 'Historic Cost Concept', level: 2 }
        },
        {
            id: 'p-historic',
            type: 'paragraph',
            data: {
                text: 'The <strong>historic cost concept</strong> requires that assets be recorded at their <em>original purchase price</em>, not their current market value. This provides an <strong>objective</strong>, verifiable figure that cannot be manipulated.'
            }
        },
        {
            id: 'tbl-historic',
            type: 'comparisonTable',
            data: {
                caption: 'Historic cost — advantages and disadvantages',
                headers: ['Advantages', 'Disadvantages'],
                rows: [
                    ['Objective and verifiable (supported by purchase documents)', 'Ignores inflation — understates current value of older assets'],
                    ['Simple and consistent to apply', 'Can mislead users about replacement cost and asset values'],
                    ['Does not require subjective valuations', 'Profits may be overstated if depreciation is based on old low cost'],
                    ['Audit trail available (invoice, receipt)', 'Non-current assets may be carried far below market value']
                ]
            }
        },
        {
            id: 'h-three-summary',
            type: 'heading',
            data: { text: 'Quick Summary of All Three Concepts', level: 2 }
        },
        {
            id: 'tbl-three',
            type: 'comparisonTable',
            data: {
                caption: 'Consistency, materiality and historic cost compared',
                headers: ['Concept', 'Meaning in One Sentence', 'Key Practical Example'],
                rows: [
                    ['Consistency', 'Use the same method each year', 'Same depreciation method throughout'],
                    ['Materiality', 'Only disclose/adjust significant items', 'Expense small items immediately; capitalise large ones'],
                    ['Historic cost', 'Record assets at original purchase price', 'Land still shown at 1995 purchase price in 2025']
                ]
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'These three concepts often appear in "evaluate" questions. For consistency: changes are allowed with disclosure. For materiality: what is immaterial for one business may be material for another. For historic cost: consider inflation and asset revaluation as alternative approaches.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Define the consistency concept and give one example', checked: false },
                    { text: 'Explain when changing an accounting method is acceptable', checked: false },
                    { text: 'Explain materiality and give one example of a material vs immaterial item', checked: false },
                    { text: 'State two disadvantages of the historic cost concept', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Consistency requires the same methods be used each period (changes allowed with disclosure). Materiality means only significant items need special treatment — immaterial items can be simplified. Historic cost records assets at original purchase price, giving objectivity but ignoring inflation and current values.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-consistency', prompt: 'Define the consistency concept. When is it acceptable to change method?' },
            { id: 'cue-2', blockId: 'p-materiality', prompt: 'What does materiality mean? Give an example of an immaterial item.' },
            { id: 'cue-3', blockId: 'p-historic', prompt: 'Define historic cost. State one advantage and one disadvantage.' },
            { id: 'cue-4', blockId: 'tbl-three', prompt: 'Give a practical example of each of the three concepts.' }
        ],
        summaryText: 'Consistency = same methods each year. Materiality = only significant items need detailed treatment. Historic cost = assets at original purchase price (objective but ignores inflation).',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_7;
