// IGCSE Accounting Syllabus (Cambridge CIE 0452 / Edexcel 4AC1)

export const accountingSyllabus = {
    qualification: 'IGCSE Accounting',
    source: 'Cambridge CIE 0452 / Edexcel 4AC1',
    qualificationCode: 'IGACC',
    units: [
        {
            id: 1,
            code: 'IGACC1',
            title: 'Unit 1: The Accounting System',
            topics: [
                {
                    id: 1,
                    title: 'Fundamentals of Accounting',
                    subtopics: [
                        { index: 0, title: 'Role and purpose of accounting' },
                        { index: 1, title: 'Users of accounting information' },
                        { index: 2, title: 'Books of account and prime entry' },
                        { index: 3, title: 'End-of-period adjustments' },
                        { index: 4, title: 'Allowance for irrecoverable debts' },
                        { index: 5, title: 'ICT in transaction recording' }
                    ]
                },
                {
                    id: 2,
                    title: 'Sources and Recording',
                    subtopics: [
                        { index: 0, title: 'Control Procedures' },
                        { index: 1, title: 'Error-correction journal entries' },
                        { index: 2, title: 'Suspense accounts' },
                        { index: 3, title: 'Control-account corrections' }
                    ]
                },
                {
                    id: 3,
                    title: 'Financial Statements of Sole Traders',
                    subtopics: [
                        { index: 0, title: 'Sole trader statement of profit or loss' },
                        { index: 1, title: 'Sole trader statement of financial position' },
                        { index: 2, title: 'Incomplete-record conversion' }
                    ]
                },
                {
                    id: 4,
                    title: 'Accounting for Inventory',
                    subtopics: [
                        { index: 0, title: 'FIFO, LIFO and NRV methods' },
                        { index: 1, title: 'Inventory Valuation Differences' },
                        { index: 2, title: 'Perpetual vs periodic inventory valuation' }
                    ]
                },
                {
                    id: 5,
                    title: 'Reporting and Interpretation',
                    subtopics: [
                        { index: 0, title: 'Profitability ratios' },
                        { index: 1, title: 'Liquidity ratios' },
                        { index: 2, title: 'Asset-use ratios' }
                    ]
                },
                {
                    id: 6,
                    title: 'Ethical and Social Accounting',
                    subtopics: [
                        { index: 0, title: 'Corporate Social Responsibility' },
                        { index: 1, title: 'Ethics in Accounting' },
                        { index: 2, title: 'Sustainability Reporting' }
                    ]
                }
            ]
        },
        {
            id: 2,
            code: 'IGACC2',
            title: 'Unit 2: Financial Reporting & Decision Making',
            topics: [
                {
                    id: 7,
                    title: 'Company Accounts: IAS 1',
                    subtopics: [
                        { index: 0, title: 'IAS 1 company financial statements' },
                        { index: 1, title: 'Share issue journal entries' },
                        { index: 2, title: 'Rights and bonus issues' }
                    ]
                },
                {
                    id: 8,
                    title: 'Earnings per Share',
                    subtopics: [
                        { index: 0, title: 'Earnings per share calculation' },
                        { index: 1, title: 'Price/earnings ratio' },
                        { index: 2, title: 'Dividend yield' }
                    ]
                },
                {
                    id: 9,
                    title: 'Statement of Cash Flows: IAS 7',
                    subtopics: [
                        { index: 0, title: 'IAS 7 statement of cash flows' },
                        { index: 1, title: 'Operating, investing and financing sections' }
                    ]
                },
                {
                    id: 10,
                    title: 'Budgeting and Control',
                    subtopics: [
                        { index: 0, title: 'Budgeting for planning and control' },
                        { index: 1, title: 'Budget preparation process' },
                        { index: 2, title: 'Flexible budgets' }
                    ]
                },
                {
                    id: 11,
                    title: 'Accounting Standards',
                    subtopics: [
                        { index: 0, title: 'Purpose of standards' },
                        { index: 1, title: 'Use of International Accounting Standards' }
                    ]
                },
                {
                    id: 12,
                    title: 'Investment Appraisal',
                    subtopics: [
                        { index: 0, title: 'Net present value' },
                        { index: 1, title: 'Internal rate of return' },
                        { index: 2, title: 'Payback period' }
                    ]
                },
                {
                    id: 13,
                    title: 'Break-even Analysis',
                    subtopics: [
                        { index: 0, title: 'Cost classifications for break-even' },
                        { index: 1, title: 'Contribution and break-even point' },
                        { index: 2, title: 'Margin of safety' }
                    ]
                },
                {
                    id: 14,
                    title: 'Marginal and Absorption Costing',
                    subtopics: [
                        { index: 0, title: 'Marginal vs Absorption Concepts' },
                        { index: 1, title: 'Profit Statement Comparison' }
                    ]
                },
                {
                    id: 15,
                    title: 'Spreadsheet Applications',
                    subtopics: [
                        { index: 0, title: 'Spreadsheet use in budgeting' },
                        { index: 1, title: 'Accounting software workflows' }
                    ]
                }
            ]
        }
    ]
};

export function getAccountingSyllabus() {
    return accountingSyllabus;
}
