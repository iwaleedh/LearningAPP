/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 9
 * "Capital vs revenue expenditure"
 */

export const note_accounting_1_1_9 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Distinguish capital expenditure from revenue expenditure, explain how each is treated in the financial statements, and evaluate the consequences of misclassification.'
            }
        },
        {
            id: 'h-cap',
            type: 'heading',
            data: { text: 'Capital Expenditure', level: 2 }
        },
        {
            id: 'p-cap',
            type: 'paragraph',
            data: {
                text: '<strong>Capital expenditure (CapEx)</strong> is spending on <em>non-current assets</em> — assets that will generate benefits over <strong>more than one accounting period</strong>. CapEx creates or enhances a long-term asset and is <strong>capitalised</strong> on the statement of financial position (SFP).'
            }
        },
        {
            id: 'list-capex',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Purchase of a new machine, vehicle, building or land.' },
                    { text: 'Installation and delivery costs of a new asset.' },
                    { text: 'Legal fees on buying property.' },
                    { text: 'Improvements that extend asset life or increase capacity (e.g. adding a new floor to a building).' }
                ]
            }
        },
        {
            id: 'h-rev',
            type: 'heading',
            data: { text: 'Revenue Expenditure', level: 2 }
        },
        {
            id: 'p-rev',
            type: 'paragraph',
            data: {
                text: '<strong>Revenue expenditure (RevEx)</strong> is spending on the <em>day-to-day running</em> of the business that will benefit only the <strong>current period</strong>. It is charged as an <strong>expense</strong> in the income statement.'
            }
        },
        {
            id: 'list-revex',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Wages, rent, insurance, utilities.' },
                    { text: 'Repairs and maintenance that <em>maintain</em> (not improve) an asset.' },
                    { text: 'Purchase of inventory for resale.' },
                    { text: 'Interest on loans.' }
                ]
            }
        },
        {
            id: 'tbl-compare',
            type: 'comparisonTable',
            data: {
                caption: 'Capital vs revenue expenditure — summary',
                headers: ['Feature', 'Capital Expenditure', 'Revenue Expenditure'],
                rows: [
                    ['Benefit period', 'More than one year', 'Current year only'],
                    ['Financial statement', 'Statement of financial position (asset)', 'Income statement (expense)'],
                    ['Effect on profit', 'Reduces profit via depreciation (spread over years)', 'Reduces profit immediately'],
                    ['Effect on tax', 'Capital allowances over time', 'Full deduction in year incurred'],
                    ['Examples', 'Purchase of equipment, buildings', 'Wages, rent, repairs, consumables']
                ]
            }
        },
        {
            id: 'h-misclass',
            type: 'heading',
            data: { text: 'Consequences of Misclassification', level: 2 }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Misclassification Effects',
                text: 'A £20 000 machine purchase is incorrectly treated as revenue expenditure.\n\nIS effect: Profits understated by £20 000 (or by depreciation if capitalised).\nSFP effect: Assets understated by £20 000.\nTax effect: Incorrect tax calculation.\nInvestor impact: Users think the business is less profitable and has fewer assets.\n\nConversely, treating a repair as capital expenditure OVERSTATES profit.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Test — Capital or Revenue?',
                text: 'Ask: Does this expenditure <em>create or improve</em> a long-term asset, or does it merely <em>maintain or repair</em> something? Create/improve → CapEx. Maintain/repair → RevEx. Borderline cases (e.g. repainting a factory) require professional judgement.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Define capital expenditure and revenue expenditure', checked: false },
                    { text: 'Give two examples of each type', checked: false },
                    { text: 'State how each type appears in the financial statements', checked: false },
                    { text: 'Explain the effect on profit if revenue expenditure is incorrectly capitalised', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Capital expenditure creates or enhances long-term assets and is shown on the SFP, with cost spread via depreciation. Revenue expenditure covers day-to-day running and is expensed immediately in the IS. Misclassification distorts profit, asset values and tax calculations. The key test: does the spending create lasting benefit beyond one year?'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-cap', prompt: 'Define capital expenditure and state where it appears in the accounts.' },
            { id: 'cue-2', blockId: 'p-rev', prompt: 'Define revenue expenditure and state where it appears in the accounts.' },
            { id: 'cue-3', blockId: 'h-misclass', prompt: 'What happens to profit if a CapEx item is treated as RevEx?' },
            { id: 'cue-4', blockId: 'callout-tip-1', prompt: 'State the key test for deciding whether spending is capital or revenue.' }
        ],
        summaryText: 'CapEx → SFP asset + depreciation. RevEx → IS expense in current period. Misclassification distorts profit, asset values and tax.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_9;
