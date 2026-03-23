/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 1
 * "Users of accounting information"
 */

export const note_accounting_1_1_1 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Identify the main users of accounting information, explain what information each user needs, and discuss the limitations of accounting data.'
            }
        },
        {
            id: 'h-users',
            type: 'heading',
            data: { text: 'Who Uses Accounting Information?', level: 2 }
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'Accounting information is produced for a wide range of <strong>stakeholders</strong> — people or groups with an interest in the financial performance and position of a business. Different users need different types of information for different purposes.'
            }
        },
        {
            id: 'tbl-users',
            type: 'comparisonTable',
            data: {
                caption: 'Users of accounting information and their needs',
                headers: ['User', 'Information Needed', 'Purpose'],
                rows: [
                    ['Owners / Shareholders', 'Profitability, dividend, EPS, share price', 'Assess return on investment; decide to hold/sell'],
                    ['Managers', 'Budgets, variance reports, cost analysis', 'Plan, control and make operational decisions'],
                    ['Employees / Trade unions', 'Wage trends, profit, business stability', 'Negotiate pay; assess job security'],
                    ['Creditors / Suppliers', 'Liquidity ratios, cash flow, credit history', 'Decide whether to extend credit'],
                    ['Lenders / Banks', 'Gearing, interest cover, asset values', 'Decide on loan approval and terms'],
                    ['Government / HMRC', 'Taxable profit, VAT records, payroll', 'Calculate tax liabilities; monitor compliance'],
                    ['Customers', 'Business stability, continuity', 'Assess whether supplier will continue operating'],
                    ['Competitors', 'Profitability, market share data', 'Benchmark performance; strategic planning'],
                    ['General public / Community', 'Environmental disclosures, social impact', 'Evaluate corporate social responsibility']
                ]
            }
        },
        {
            id: 'h-internal-external',
            type: 'heading',
            data: { text: 'Internal vs External Users', level: 2 }
        },
        {
            id: 'list-ie',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Internal users</strong> — managers, directors, employees. Have direct access to detailed management accounts and non-financial information.' },
                    { text: '<strong>External users</strong> — shareholders, creditors, HMRC, customers, competitors, community. Rely on published financial statements which are more restricted in detail.' }
                ]
            }
        },
        {
            id: 'h-limits',
            type: 'heading',
            data: { text: 'Limitations of Accounting Information', level: 2 }
        },
        {
            id: 'list-limits',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Historic cost basis</strong> — assets recorded at original cost, not current market value, making balance sheet values potentially misleading.' },
                    { text: '<strong>Subjectivity</strong> — estimates are required for depreciation, provisions and bad debts; different preparers may reach different figures.' },
                    { text: '<strong>Omits non-financial factors</strong> — staff morale, brand strength, management quality and market trends are not captured.' },
                    { text: '<strong>Time lag</strong> — annual accounts may be published months after the period end, reducing timeliness.' },
                    { text: '<strong>Window dressing</strong> — businesses may manipulate figures legally to present a more favourable picture.' },
                    { text: '<strong>Inflation</strong> — historic cost ignores the changing purchasing power of money over time.' }
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Distinction',
                text: '<strong>Internal users</strong> (managers) access detailed management accounts. <strong>External users</strong> (shareholders, HMRC) rely on published statutory financial statements.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'When evaluating whether accounting information meets a user\'s needs, always address: (1) what specific information the user needs, (2) whether the accounts provide it, and (3) any limitations (e.g. historic cost, time lag).'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Name six different user groups and state what each needs', checked: false },
                    { text: 'Distinguish between internal and external users', checked: false },
                    { text: 'State four limitations of accounting information', checked: false },
                    { text: 'Explain why historic cost values can be misleading', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Accounting information serves diverse stakeholders including owners, managers, employees, creditors, lenders, HMRC, customers, competitors and the public. Internal users have access to detailed management data; external users rely on published accounts. Limitations include historic cost, subjectivity, omission of non-financial factors, time lags and potential window dressing.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-users', prompt: 'Name five user groups and explain what information each needs from accounting records.' },
            { id: 'cue-2', blockId: 'h-internal-external', prompt: 'Distinguish between internal and external users of accounting information.' },
            { id: 'cue-3', blockId: 'list-limits', prompt: 'State four limitations of accounting information.' },
            { id: 'cue-4', blockId: 'p-intro', prompt: 'What is a stakeholder in the context of accounting?' }
        ],
        summaryText: 'Diverse stakeholders use accounting information for different purposes. Limitations include historic cost, subjectivity, non-financial omissions and time lags.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_1;
