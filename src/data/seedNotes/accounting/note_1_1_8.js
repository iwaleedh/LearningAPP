/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 8
 * "Use of International Accounting Standards"
 */

export const note_accounting_1_1_8 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the purpose of International Accounting Standards (IAS), identify key standards relevant to IAL Accounting, and discuss the advantages and limitations of standardisation.'
            }
        },
        {
            id: 'h-ias-intro',
            type: 'heading',
            data: { text: 'What Are International Accounting Standards?', level: 2 }
        },
        {
            id: 'p-ias-intro',
            type: 'paragraph',
            data: {
                text: '<strong>International Accounting Standards (IAS)</strong> and <strong>International Financial Reporting Standards (IFRS)</strong> are rules issued by the <em>International Accounting Standards Board (IASB)</em> that specify how financial transactions should be recognised, measured and disclosed. They aim to make financial statements <strong>consistent, comparable and transparent</strong> across countries.'
            }
        },
        {
            id: 'h-purpose',
            type: 'heading',
            data: { text: 'Purpose of IAS/IFRS', level: 2 }
        },
        {
            id: 'list-purpose',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Enable investors to <strong>compare</strong> companies across different countries on a like-for-like basis.' },
                    { text: 'Improve <strong>transparency</strong> — users can understand what accounting policies have been applied.' },
                    { text: 'Reduce <strong>creative accounting</strong> by providing specific rules that limit management discretion.' },
                    { text: 'Lower the cost of <strong>cross-border capital raising</strong> since accounts need not be restated for foreign investors.' }
                ]
            }
        },
        {
            id: 'h-key-standards',
            type: 'heading',
            data: { text: 'Key Standards in IAL Accounting', level: 2 }
        },
        {
            id: 'tbl-standards',
            type: 'comparisonTable',
            data: {
                caption: 'Key IAS/IFRS standards relevant to IAL Accounting',
                headers: ['Standard', 'Topic Covered', 'Key Requirement'],
                rows: [
                    ['IAS 1', 'Presentation of Financial Statements', 'Format of statement of profit or loss, SFP, equity; requires fair presentation'],
                    ['IAS 2', 'Inventories', 'Value at lower of cost and net realisable value (NRV); no LIFO allowed'],
                    ['IAS 7', 'Statement of Cash Flows', 'Requires separate operating, investing and financing sections'],
                    ['IAS 16', 'Property, Plant and Equipment', 'Depreciation over useful life; revaluation model allowed'],
                    ['IAS 37', 'Provisions, Contingent Liabilities', 'Recognise provisions only when present obligation + probable outflow'],
                    ['IAS 38', 'Intangible Assets', 'Capitalise only if future economic benefits probable; no internally generated goodwill'],
                    ['IFRS 15', 'Revenue from Contracts', 'Recognise revenue when (or as) performance obligation satisfied']
                ]
            }
        },
        {
            id: 'h-advantages',
            type: 'heading',
            data: { text: 'Advantages of Using IAS/IFRS', level: 2 }
        },
        {
            id: 'list-adv',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'International <strong>comparability</strong> — investors can compare UK and overseas companies.' },
                    { text: 'Reduced <strong>window dressing</strong> — specific rules limit manipulation.' },
                    { text: '<strong>Credibility</strong> — companies following IAS attract global investors and lenders.' },
                    { text: 'Easier <strong>cross-border mergers and acquisitions</strong>.' }
                ]
            }
        },
        {
            id: 'h-limitations',
            type: 'heading',
            data: { text: 'Limitations of Standardisation', level: 2 }
        },
        {
            id: 'list-limits',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Complexity</strong> — IAS/IFRS are detailed and costly to implement, especially for SMEs.' },
                    { text: '<strong>Professional judgement</strong> — many standards still require estimates (e.g. useful life, NRV), so subjectivity remains.' },
                    { text: '<strong>Not universally adopted</strong> — the USA uses GAAP rather than IFRS.' },
                    { text: '<strong>Frequent changes</strong> — keeping up with amendments is costly.' }
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'IAS 2 — Inventory (Exam-Relevant)',
                text: 'IAS 2 requires inventory to be valued at the <em>lower of cost and net realisable value (NRV)</em>. Cost includes purchase price plus import duties and transport. NRV = estimated selling price − costs of completion and sale. LIFO is prohibited.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'You need to know IAS 1 (presentation), IAS 2 (inventories) and IAS 7 (cash flows) in detail. For others, a general awareness of their purpose is sufficient. Always state the standard number when applying a rule in a question.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Explain why IAS/IFRS were introduced', checked: false },
                    { text: 'State three key standards and what each covers', checked: false },
                    { text: 'Describe the IAS 2 rule for inventory valuation', checked: false },
                    { text: 'Give two limitations of international accounting standards', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'IAS/IFRS issued by the IASB standardise how transactions are recognised, measured and disclosed globally. Key standards include IAS 1 (presentation), IAS 2 (inventory at lower of cost/NRV), IAS 7 (cash flows) and IAS 16 (PPE depreciation). Standardisation improves comparability and reduces manipulation, but implementation is costly and some professional judgement remains.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-ias-intro', prompt: 'Who issues IAS/IFRS and what is their purpose?' },
            { id: 'cue-2', blockId: 'tbl-standards', prompt: 'What does IAS 2 say about inventory valuation?' },
            { id: 'cue-3', blockId: 'list-adv', prompt: 'Give three advantages of using international accounting standards.' },
            { id: 'cue-4', blockId: 'list-limits', prompt: 'State two limitations of IAS/IFRS.' }
        ],
        summaryText: 'IAS/IFRS from the IASB standardise accounting globally. IAS 2: inventory at lower of cost/NRV. IAS 7: cash flows. Benefits: comparability, credibility. Limitations: complexity, cost, remaining judgement.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_8;
