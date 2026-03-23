/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 0
 * "Role and purpose of accounting"
 */

export const note_accounting_1_1_0 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Explain the role and purpose of accounting in business, and describe the qualities that make accounting information useful.'
            }
        },
        {
            id: 'h-role',
            type: 'heading',
            data: { text: 'What is Accounting?', level: 2 }
        },
        {
            id: 'p-def',
            type: 'paragraph',
            data: {
                text: '<strong>Accounting</strong> is the process of <em>identifying, measuring, recording, and communicating</em> financial information about an organisation so that users can make informed economic decisions. It converts raw financial data into structured reports that reveal profitability, liquidity, and financial position.'
            }
        },
        {
            id: 'h-purpose',
            type: 'heading',
            data: { text: 'Core Purposes of Accounting', level: 2 }
        },
        {
            id: 'list-purposes',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Stewardship</strong> — ensuring owners\' resources are used properly and not misappropriated by managers.' },
                    { text: '<strong>Decision-making</strong> — providing financial data so owners, managers and investors can make well-informed choices.' },
                    { text: '<strong>Control</strong> — setting budgets, monitoring performance and correcting deviations from plan.' },
                    { text: '<strong>Planning</strong> — forecasting future cash flows, revenues and costs.' },
                    { text: '<strong>Legal compliance</strong> — meeting tax, Companies Act and regulatory reporting requirements.' }
                ]
            }
        },
        {
            id: 'h-qualities',
            type: 'heading',
            data: { text: 'Qualities of Useful Accounting Information', level: 2 }
        },
        {
            id: 'p-qualities-intro',
            type: 'paragraph',
            data: {
                text: 'For accounting information to be genuinely useful it must possess certain qualitative characteristics. These are often grouped under <strong>relevance</strong> and <strong>faithful representation</strong>.'
            }
        },
        {
            id: 'tbl-qualities',
            type: 'comparisonTable',
            data: {
                caption: 'Key qualitative characteristics of accounting information',
                headers: ['Quality', 'Meaning', 'Example'],
                rows: [
                    ['Relevance', 'Capable of influencing a decision', 'Current-year profit affects dividend decision'],
                    ['Reliability / Faithful representation', 'Free from material error and bias', 'Verified invoices, not estimates'],
                    ['Comparability', 'Consistent across periods and entities', 'Same depreciation method each year'],
                    ['Understandability', 'Presented clearly for intended users', 'Labelled financial statements'],
                    ['Timeliness', 'Available before it loses decision-making value', 'Monthly management accounts'],
                    ['Materiality', 'Significant enough to affect decisions', 'Large bad debt disclosed separately']
                ]
            }
        },
        {
            id: 'h-financial-v-management',
            type: 'heading',
            data: { text: 'Financial Accounting vs Management Accounting', level: 2 }
        },
        {
            id: 'tbl-fa-ma',
            type: 'comparisonTable',
            data: {
                caption: 'Distinguishing financial and management accounting',
                headers: ['Feature', 'Financial Accounting', 'Management Accounting'],
                rows: [
                    ['Audience', 'External (shareholders, HMRC)', 'Internal (managers)'],
                    ['Legal requirement', 'Yes (Companies Act)', 'No'],
                    ['Time focus', 'Historic (past results)', 'Forward-looking (budgets)'],
                    ['Format', 'Standardised (IFRS/IAS)', 'Flexible to management needs'],
                    ['Frequency', 'Annual (at minimum)', 'Monthly, weekly or ad hoc']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Definition',
                text: '<strong>Accounting</strong> — the process of identifying, measuring, recording, and communicating financial information to enable informed decisions by stakeholders.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Questions often ask you to <em>evaluate</em> accounting information. Always refer to qualitative characteristics (relevance, reliability, comparability) and link them to the specific context given in the question.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the five core purposes of accounting', checked: false },
                    { text: 'List four qualitative characteristics and give an example of each', checked: false },
                    { text: 'Distinguish between financial accounting and management accounting', checked: false },
                    { text: 'Explain what is meant by stewardship in accounting', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Accounting identifies, measures, records and communicates financial data for stewardship, decision-making, control, planning and legal compliance. Useful information must be relevant, reliable, comparable, understandable and timely. Financial accounting serves external users and is legally required; management accounting serves internal users for planning and control.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'list-purposes', prompt: 'Name four core purposes of accounting.' },
            { id: 'cue-2', blockId: 'tbl-qualities', prompt: 'What six qualitative characteristics make accounting information useful?' },
            { id: 'cue-3', blockId: 'tbl-fa-ma', prompt: 'Give three differences between financial and management accounting.' },
            { id: 'cue-4', blockId: 'p-def', prompt: 'Write a definition of accounting in your own words.' }
        ],
        summaryText: 'Accounting records and communicates financial information to support stewardship, decision-making and control. Useful information is relevant, reliable, comparable, understandable and timely.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_0;
