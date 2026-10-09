// IGCSE Accounting Syllabus (Cambridge CIE 0452 / Edexcel 4AC1)

export const accountingSyllabus = {
    qualification: 'Pearson Edexcel International A Level Accounting',
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
                        'Role and purpose of accounting',
                        'Users of accounting information',
                        'Books of prime entry',
                        'Accruals and prepayments',
                        'Irrecoverable debts and allowance for doubtful debts',
                        'ICT in accounting',
                        'Accounting concepts: going concern, historic cost and prudence',
                        'Consistency and materiality',
                        'International Accounting Standards',
                        'Capital and revenue expenditure',
                        'Depreciation methods',
                        'Disposal of non-current assets',
                    ]
                },
                {
                    id: 2,
                    title: 'Trial Balance, Errors and Control Accounts',
                    subtopics: [
                        'Purpose of the trial balance',
                        'Errors not revealed by the trial balance',
                        'Control accounts',
                        'Errors that affect trial balance agreement',
                        'The six hidden errors: recap',
                        'Correction journal entries',
                        'Suspense accounts',
                        'Errors affecting profit',
                        'Control account reconciliation',
                    ]
                },
                {
                    id: 3,
                    title: 'Financial Statements',
                    subtopics: [
                        'Statement of profit or loss structure',
                        'Statement of financial position layout',
                        'Accruals and prepayments in final accounts',
                        'Irrecoverable debts in final accounts',
                        'Departmental accounts',
                        'Incomplete records and statements of affairs',
                        'Partnership appropriation accounts',
                        'Partnership capital and current accounts',
                        'Partnership Act 1890 (Section 24)',
                        'Goodwill on admission and retirement',
                        'Non-profit organisations',
                        'Manufacturing accounts',
                    ]
                },
                {
                    id: 4,
                    title: 'Accounting for Inventory',
                    subtopics: [
                        'FIFO, LIFO and NRV methods',
                        'Inventory Valuation Differences',
                        'Perpetual vs periodic inventory valuation'
                    ]
                },
                {
                    id: 5,
                    title: 'Reporting and Interpretation',
                    subtopics: [
                        'Profitability ratios',
                        'Liquidity ratios',
                        'Asset-use ratios'
                    ]
                },
                {
                    id: 6,
                    title: 'Ethical and Social Accounting',
                    subtopics: [
                        'Corporate Social Responsibility',
                        'Ethics in Accounting',
                        'Sustainability Reporting'
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
                        'IAS 1 company financial statements',
                        'Share issue journal entries',
                        'Rights and bonus issues'
                    ]
                },
                {
                    id: 8,
                    title: 'Earnings per Share',
                    subtopics: [
                        'Earnings per share calculation',
                        'Price/earnings ratio',
                        'Dividend yield'
                    ]
                },
                {
                    id: 9,
                    title: 'Statement of Cash Flows: IAS 7',
                    subtopics: [
                        'IAS 7 statement of cash flows',
                        'Operating, investing and financing sections'
                    ]
                },
                {
                    id: 10,
                    title: 'Budgeting and Control',
                    subtopics: [
                        'Budgeting for planning and control',
                        'Budget preparation process',
                        'Flexible budgets'
                    ]
                },
                {
                    id: 11,
                    title: 'Accounting Standards',
                    subtopics: [
                        'Purpose of standards',
                        'Use of International Accounting Standards'
                    ]
                },
                {
                    id: 12,
                    title: 'Investment Appraisal',
                    subtopics: [
                        'Net present value',
                        'Internal rate of return',
                        'Payback period'
                    ]
                },
                {
                    id: 13,
                    title: 'Break-even Analysis',
                    subtopics: [
                        'Cost classifications for break-even',
                        'Contribution and break-even point',
                        'Margin of safety'
                    ]
                },
                {
                    id: 14,
                    title: 'Marginal and Absorption Costing',
                    subtopics: [
                        'Marginal vs Absorption Concepts',
                        'Profit Statement Comparison'
                    ]
                },
                {
                    id: 15,
                    title: 'Spreadsheet Applications',
                    subtopics: [
                        'Spreadsheet use in budgeting',
                        'Accounting software workflows'
                    ]
                }
            ]
        }
    ]
};

export function getAccountingSyllabus() {
    return accountingSyllabus;
}
