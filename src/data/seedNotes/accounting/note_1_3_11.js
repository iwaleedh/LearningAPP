/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 11
 * "Manufacturing accounts"
 */

export const note_accounting_1_3_11 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare a manufacturing account to calculate prime cost and the cost of production, and understand how to transfer finished goods to the trading account.'
            }
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Purpose of a Manufacturing Account', level: 2 }
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'A manufacturing account is prepared by businesses that <em>make</em> the goods they sell. It calculates the <strong>cost of production</strong> — the total cost of converting raw materials into finished goods — which is then transferred to the trading account as the cost of goods manufactured.'
            }
        },
        {
            id: 'h-costs',
            type: 'heading',
            data: { text: 'Cost Classification', level: 2 }
        },
        {
            id: 'tbl-costs',
            type: 'comparisonTable',
            data: {
                caption: 'Manufacturing Cost Classification',
                headers: ['Category', 'Examples', 'Notes'],
                rows: [
                    ['Direct materials', 'Raw materials used', 'Adjust for opening/closing RM stock'],
                    ['Direct labour', 'Factory workers\' wages', 'Directly traceable to each unit'],
                    ['Direct expenses', 'Royalties per unit', 'Rare but can appear in exams'],
                    ['Prime cost', 'DM + DL + DE', 'Subtotal of all direct costs'],
                    ['Factory overheads', 'Rent, power, supervision', 'Indirect — added after prime cost'],
                    ['Works cost', 'Prime cost + Overheads', 'Also called factory / manufacturing cost'],
                    ['WIP adjustment', '+ Opening WIP − Closing WIP', 'Adjusts for partly finished goods'],
                    ['Cost of production', 'Works cost ± WIP', 'Transferred to trading account']
                ]
            }
        },
        {
            id: 'h-format',
            type: 'heading',
            data: { text: 'Manufacturing Account Format', level: 2 }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Manufacturing Account — Worked Example (£)',
                text: '                                     £\nOpening raw materials               5 000\nAdd: Purchases of raw materials    40 000\nLess: Closing raw materials        (4 800)\nRaw materials consumed             40 200\n\nDirect labour                      25 000\nDirect expenses (royalties)         1 500\n─────────────────────────────────────────\nPRIME COST                         66 700\n\nFactory overheads:\n  Factory rent                      8 000\n  Machinery depreciation            3 000\n  Factory power                     2 500\n  Indirect labour (supervision)     4 000\nTotal overheads                    17 500\n─────────────────────────────────────────\nWORKS COST                         84 200\n\nAdd: Opening WIP                    6 000\nLess: Closing WIP                  (7 200)\n─────────────────────────────────────────\nCOST OF PRODUCTION                 83 000  ← transferred to trading account'
            }
        },
        {
            id: 'h-mfg-profit',
            type: 'heading',
            data: { text: 'Manufacturing Profit', level: 2 }
        },
        {
            id: 'p-mfg-profit',
            type: 'paragraph',
            data: {
                text: 'Some businesses transfer finished goods to the trading account at <strong>market value</strong> rather than cost. The difference between market value and cost is the <em>manufacturing profit</em>. This is credited to the manufacturing account and added to a <strong>manufacturing profit reserve</strong>, which is unrealised until the goods are sold.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam tip — Finished goods stock',
                text: 'In the trading account, the cost of goods sold uses the <em>transferred cost of production</em> as the cost of goods available, adjusted for opening and closing finished goods stock. Do not confuse finished goods stock with raw materials stock.'
            }
        },
        {
            id: 'h-sfp',
            type: 'heading',
            data: { text: 'Inventories on the SFP', level: 2 }
        },
        {
            id: 'list-sfp',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Raw materials stock</strong> — current asset valued at cost.' },
                    { text: '<strong>Work in progress (WIP)</strong> — current asset; partially completed goods at cost so far.' },
                    { text: '<strong>Finished goods stock</strong> — current asset; valued at lower of cost and net realisable value (IAS 2).' }
                ]
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Calculate prime cost from direct materials, direct labour and direct expenses', checked: false },
                    { text: 'Add factory overheads to arrive at works cost', checked: false },
                    { text: 'Adjust works cost for opening and closing WIP to get cost of production', checked: false },
                    { text: 'Identify the three types of inventory on a manufacturer\'s SFP', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Manufacturing account: Prime cost (DM + DL + DE) + Factory overheads = Works cost ± WIP = Cost of production. This is transferred to the trading account. Three inventory types: raw materials, WIP, finished goods. Manufacturing profit arises when goods are transferred at market value rather than cost.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'h-costs', prompt: 'What does "prime cost" consist of?' },
            { id: 'cue-2', blockId: 'h-format', prompt: 'State the formula for cost of production starting from works cost.' },
            { id: 'cue-3', blockId: 'h-mfg-profit', prompt: 'When does a manufacturing profit arise, and how is it treated?' }
        ],
        summaryText: 'Manufacturing account: Prime cost = DM + DL + DE. Works cost = Prime cost + Overheads. Cost of production = Works cost + Opening WIP − Closing WIP → transferred to trading account.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_11;
