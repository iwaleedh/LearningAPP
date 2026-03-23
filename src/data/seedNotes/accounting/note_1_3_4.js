/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 4
 * "Departmental accounts"
 */

export const note_accounting_1_3_4 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Prepare departmental income statements, allocate and apportion shared overheads, calculate departmental gross and net profit, and evaluate the performance of each department.'
            }
        },
        {
            id: 'h-purpose',
            type: 'heading',
            data: { text: 'Purpose of Departmental Accounts', level: 2 }
        },
        {
            id: 'p-purpose',
            type: 'paragraph',
            data: {
                text: 'Departmental accounts divide a business into separate trading or service departments, producing individual income statements. This enables managers to identify profitable and loss-making departments, set targets, and make decisions about pricing, staffing or discontinuing departments.'
            }
        },
        {
            id: 'h-alloc',
            type: 'heading',
            data: { text: 'Allocating and Apportioning Overheads', level: 2 }
        },
        {
            id: 'p-alloc',
            type: 'paragraph',
            data: {
                text: '<strong>Directly allocatable</strong> costs (e.g. a departmental supervisor\'s wage) go directly to that department. <strong>Shared overheads</strong> must be <em>apportioned</em> on a fair basis, for example:'
            }
        },
        {
            id: 'tbl-basis',
            type: 'comparisonTable',
            data: {
                caption: 'Common apportionment bases',
                headers: ['Overhead', 'Apportionment Basis'],
                rows: [
                    ['Rent and rates', 'Floor area (m²)'],
                    ['Insurance of building', 'Floor area (m²)'],
                    ['Light and heat', 'Floor area (m²)'],
                    ['Depreciation of equipment', 'Value of equipment in each dept'],
                    ['Staff canteen costs', 'Number of employees'],
                    ['Advertising (general)', 'Revenue or number of sales transactions']
                ]
            }
        },
        {
            id: 'callout-we-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Departmental IS — Worked Example',
                text: 'Two departments: A and B.\nRevenue: A £60 000; B £40 000.\nCoS: A £35 000; B £22 000.\nDirect wages: A £8 000; B £5 000.\nRent £6 000 — Floor area: A 400 m², B 200 m² (total 600 m²).\n\n  Rent apportionment:\n  A = (400/600) × 6 000 = £4 000\n  B = (200/600) × 6 000 = £2 000\n\n  Dept A: GP = 60 000 − 35 000 = 25 000\n          NP = 25 000 − 8 000 − 4 000 = £13 000\n  Dept B: GP = 40 000 − 22 000 = 18 000\n          NP = 18 000 − 5 000 − 2 000 = £11 000'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Interpreting departmental results',
                text: 'Even a department with a positive gross profit can show a net loss once overheads are apportioned. Before closing a loss-making department, consider: (1) whether shared overheads would still continue; (2) whether the department attracts customers who buy from other departments (footfall effect).'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Calculate gross profit and net profit for each department', checked: false },
                    { text: 'Apportion a shared overhead using an appropriate basis', checked: false },
                    { text: 'Evaluate whether to close a loss-making department', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Departmental accounts split revenue and costs by department. Direct costs go to the relevant department; shared overheads are apportioned on a fair basis (floor area, headcount, etc.). Departmental NP allows performance comparison, but decisions to close departments must consider fixed cost behaviour and interdependencies.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-purpose', prompt: 'State two advantages of preparing departmental accounts.' },
            { id: 'cue-2', blockId: 'tbl-basis', prompt: 'On what basis is rent typically apportioned between departments?' },
            { id: 'cue-3', blockId: 'callout-tip-1', prompt: 'A department shows a net loss. Give two reasons why closing it may not be the best decision.' }
        ],
        summaryText: 'Departmental accounts show GP and NP per department. Shared overheads apportioned on fair basis (floor area, headcount). Closing a loss-maker requires caution on fixed costs and interdependencies.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_4;
