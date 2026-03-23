/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 10
 * "Depreciation — causes and methods"
 */

export const note_accounting_1_1_10 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the causes of depreciation, calculate depreciation using the straight-line and reducing-balance methods, and discuss the advantages and disadvantages of each method.'
            }
        },
        {
            id: 'h-causes',
            type: 'heading',
            data: { text: 'Causes of Depreciation', level: 2 }
        },
        {
            id: 'list-causes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Physical wear and tear</strong> — assets deteriorate through use (machinery, vehicles).' },
                    { text: '<strong>Obsolescence</strong> — better technology makes the asset outdated before it wears out (computers, software).' },
                    { text: '<strong>Passage of time</strong> — some assets expire regardless of use (leases, patents, copyrights).' },
                    { text: '<strong>Depletion</strong> — extracting a natural resource reduces its economic benefit (mines, quarries).' }
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Depreciation — Definition',
                text: 'Depreciation is the systematic allocation of the cost of a non-current asset over its <em>useful economic life</em>, in accordance with the accruals concept. It is NOT a fund of cash set aside to replace assets.'
            }
        },
        {
            id: 'h-sl',
            type: 'heading',
            data: { text: 'Straight-Line Method (SLM)', level: 2 }
        },
        {
            id: 'eq-sl',
            type: 'equation',
            data: {
                html: 'Annual Depreciation = <span class="nb-frac"><span class="nb-num">Cost − Residual Value</span><span class="nb-den">Useful Economic Life (years)</span></span>',
                caption: 'Straight-line depreciation formula'
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Straight-Line Worked Example',
                text: 'Cost = £10 000 | Residual value = £1 000 | Useful life = 3 years\n\nAnnual depreciation = (£10 000 − £1 000) ÷ 3 = £3 000 per year.\n\n         Cost    Depr    NBV\nYear 1:  10 000  3 000   7 000\nYear 2:   7 000  3 000   4 000\nYear 3:   4 000  3 000   1 000 (residual value)'
            }
        },
        {
            id: 'h-rb',
            type: 'heading',
            data: { text: 'Reducing-Balance Method (RBM)', level: 2 }
        },
        {
            id: 'eq-rb',
            type: 'equation',
            data: {
                html: 'Annual Depreciation = Net Book Value × Rate (%)',
                caption: 'Reducing-balance depreciation formula'
            }
        },
        {
            id: 'callout-we-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Reducing-Balance Worked Example',
                text: 'Cost = £10 000 | Rate = 40%\n\n         NBV (start)  Depr         NBV (end)\nYear 1:   10 000       4 000 (40%)  6 000\nYear 2:    6 000       2 400 (40%)  3 600\nYear 3:    3 600       1 440 (40%)  2 160\n\nNote: NBV never reaches zero under reducing-balance alone.'
            }
        },
        {
            id: 'tbl-compare',
            type: 'comparisonTable',
            data: {
                caption: 'Straight-line vs reducing-balance',
                headers: ['Feature', 'Straight-Line', 'Reducing-Balance'],
                rows: [
                    ['Annual charge', 'Equal / constant', 'Higher in early years, smaller later'],
                    ['Profit impact', 'Consistent reduction each year', 'Lower profits early, higher later'],
                    ['Best suited for', 'Assets used evenly (buildings, fixtures)', 'Assets losing value quickly early on (vehicles, technology)'],
                    ['NBV', 'Reaches residual value exactly', 'Approaches zero asymptotically'],
                    ['Complexity', 'Simple to calculate', 'Slightly more complex']
                ]
            }
        },
        {
            id: 'h-acc',
            type: 'heading',
            data: { text: 'Accumulated Depreciation Account', level: 2 }
        },
        {
            id: 'p-acc',
            type: 'paragraph',
            data: {
                text: 'Depreciation is recorded by <strong>debiting</strong> the Depreciation Expense account (IS) and <strong>crediting</strong> the Accumulated Depreciation account (SFP liability side). The asset appears at <strong>cost less accumulated depreciation</strong> = Net Book Value (NBV) on the SFP.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'List four causes of depreciation', checked: false },
                    { text: 'Apply the straight-line formula to a given example', checked: false },
                    { text: 'Apply the reducing-balance formula to a given example', checked: false },
                    { text: 'State two advantages and disadvantages of each method', checked: false },
                    { text: 'Show depreciation in the double-entry and on the SFP', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Depreciation allocates NCA cost over useful life (accruals concept). Causes: wear, obsolescence, passage of time, depletion. SLM gives equal annual charges — consistent but may not reflect actual value fall. RBM gives higher early charges — matches rapid early obsolescence. Both methods require cost, residual value and useful life estimates.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-causes', prompt: 'Name four causes of depreciation.' },
            { id: 'cue-2', blockId: 'eq-sl', prompt: 'State the straight-line depreciation formula.' },
            { id: 'cue-3', blockId: 'eq-rb', prompt: 'State the reducing-balance depreciation formula.' },
            { id: 'cue-4', blockId: 'tbl-compare', prompt: 'Give one advantage of reducing-balance over straight-line and vice versa.' }
        ],
        summaryText: 'Depreciation: SLM = (Cost − Residual) ÷ Life. RBM = NBV × Rate. SLM gives equal annual charges; RBM higher charge early.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_10;
