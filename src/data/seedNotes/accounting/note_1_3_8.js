/**
 * Seed note: Accounting · Unit 1 · Topic 3 · Subtopic 8
 * "Partnership Act Section 24 rules"
 */

export const note_accounting_1_3_8 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'State the default provisions of the Partnership Act 1890 Section 24, explain when they apply, and contrast them with a formal partnership agreement.'
            }
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'When Section 24 Applies', level: 2 }
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: {
                text: 'If a partnership has <strong>no written agreement</strong> (or the agreement is silent on a particular matter), the <strong>Partnership Act 1890 Section 24</strong> provides the default rules. Exam questions often present a dispute between partners and ask how it would be resolved under the Act.'
            }
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Key Default Rules Under Section 24', level: 2 }
        },
        {
            id: 'tbl-rules',
            type: 'comparisonTable',
            data: {
                caption: 'Partnership Act 1890 s.24 default provisions',
                headers: ['Issue', 'Default Rule (s.24)', 'Exam Trigger Phrase'],
                rows: [
                    ['Profit-sharing ratio', 'Profits and losses shared equally.', '"no agreement" or "equally"'],
                    ['Partner salaries', 'No partner is entitled to a salary.', '"no salary entitlement"'],
                    ['Interest on capital', 'No interest is payable on capital.', '"no interest on capital"'],
                    ['Interest on drawings', 'No interest is charged on drawings.', '"no interest on drawings"'],
                    ['Interest on loans to firm', 'Interest @ 5% p.a. on any loan made by a partner to the firm.', '"5% on loans"'],
                    ['Management rights', 'Every partner may take part in management.', '"equal management"'],
                    ['New partners', 'Cannot be admitted without consent of all existing partners.', '"unanimous consent"']
                ]
            }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Critical Defaults to Memorise',
                text: '1. Profits and losses: <strong>EQUAL</strong>.\n2. Salaries: <strong>NONE</strong>.\n3. Interest on capital: <strong>NONE</strong>.\n4. Interest on drawings: <strong>NONE</strong>.\n5. Interest on partner loans: <strong>5% per annum</strong>.'
            }
        },
        {
            id: 'h-contrast',
            type: 'heading',
            data: { text: 'Partnership Agreement vs Section 24', level: 2 }
        },
        {
            id: 'p-contrast',
            type: 'paragraph',
            data: {
                text: 'A <strong>partnership agreement</strong> (deed of partnership) can override any of the Section 24 defaults. For example, partners may agree to different profit-sharing ratios, to pay salaries, or to pay interest on capitals at a specified rate. The agreement is legally binding between the partners.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State the default profit-sharing rule under s.24', checked: false },
                    { text: 'State four other default rules of s.24', checked: false },
                    { text: 'Explain when s.24 applies vs a written partnership agreement', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'Section 24 defaults: profits equally; no salaries; no interest on capital; no interest on drawings; 5% on partner loans. These apply only when there is no contrary agreement. A deed of partnership can override all defaults.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-rules', prompt: 'State the Section 24 default for profit sharing, salaries and interest on capital.' },
            { id: 'cue-2', blockId: 'tbl-rules', prompt: 'What rate of interest does Section 24 provide on a partner\'s loan to the firm?' },
            { id: 'cue-3', blockId: 'p-contrast', prompt: 'When does the Partnership Act Section 24 apply, and when does it NOT?' }
        ],
        summaryText: 'S.24 defaults: equal profits, no salaries, no IoC, no IoD, 5% on partner loans. Applies when no written agreement. Partnership deed can override all defaults.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_3_8;
