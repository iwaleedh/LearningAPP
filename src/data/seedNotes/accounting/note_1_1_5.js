/**
 * Seed note: Accounting · Unit 1 · Topic 1 · Subtopic 5
 * "ICT in transaction recording"
 */

export const note_accounting_1_1_5 = {
    blocks: [
        {
            id: 'obj-1',
            type: 'objective',
            data: {
                text: 'Evaluate the use of ICT in recording accounting transactions, including accounting software, spreadsheets and electronic point-of-sale systems.'
            }
        },
        {
            id: 'h-ict-overview',
            type: 'heading',
            data: { text: 'ICT in Accounting', level: 2 }
        },
        {
            id: 'p-ict-intro',
            type: 'paragraph',
            data: {
                text: 'Modern businesses use <strong>Information and Communications Technology (ICT)</strong> to record, process and report financial transactions. ICT systems range from simple spreadsheets to sophisticated accounting software packages integrated with stock management and EPOS terminals.'
            }
        },
        {
            id: 'h-software',
            type: 'heading',
            data: { text: 'Accounting Software Packages', level: 2 }
        },
        {
            id: 'p-software',
            type: 'paragraph',
            data: {
                text: 'Examples include Sage, QuickBooks, Xero, and FreeAgent. These automate the bookkeeping process: transactions entered once are automatically posted to all relevant ledger accounts, and financial statements can be generated instantly.'
            }
        },
        {
            id: 'tbl-advantages',
            type: 'comparisonTable',
            data: {
                caption: 'Advantages and disadvantages of accounting software',
                headers: ['Advantages', 'Disadvantages'],
                rows: [
                    ['Speed — processes large volumes of data instantly', 'High initial set-up and licensing cost'],
                    ['Accuracy — eliminates arithmetic errors', 'Staff training time and cost'],
                    ['Automatic double-entry — reduces posting errors', 'Data security risks (hacking, data loss)'],
                    ['Real-time reports — management can access up-to-date info', 'Over-reliance — errors in input go undetected (GIGO)'],
                    ['Automatic VAT/tax calculations', 'System failure can halt operations'],
                    ['Audit trail — records who entered each transaction', 'Less flexible than manual systems for some bespoke needs']
                ]
            }
        },
        {
            id: 'h-epos',
            type: 'heading',
            data: { text: 'Electronic Point-of-Sale (EPOS) Systems', level: 2 }
        },
        {
            id: 'p-epos',
            type: 'paragraph',
            data: {
                text: 'EPOS terminals (e.g. barcode scanners, card readers) record sales transactions automatically. Each sale updates <strong>inventory records</strong> in real time, triggers reorder levels, and feeds directly into the accounting system — eliminating the need for manual stock counts and sales records.'
            }
        },
        {
            id: 'h-spreadsheets',
            type: 'heading',
            data: { text: 'Spreadsheets', level: 2 }
        },
        {
            id: 'list-spreadsheets',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Uses</strong> — budgets, forecasts, ratio analysis, reconciliations, what-if modelling.' },
                    { text: '<strong>Advantages</strong> — flexible, cheap, widely understood, easy to update formulas.' },
                    { text: '<strong>Disadvantages</strong> — prone to formula errors, version control problems, no automatic audit trail, not suitable for large transaction volumes.' }
                ]
            }
        },
        {
            id: 'h-gigo',
            type: 'heading',
            data: { text: 'GIGO — Garbage In, Garbage Out', level: 2 }
        },
        {
            id: 'callout-key-1',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Concept — GIGO',
                text: '<strong>GIGO</strong>: ICT systems produce accurate output only if the <em>input data is correct</em>. Errors in data entry produce incorrect output regardless of how sophisticated the system is. Internal controls (authorisation, checking) remain essential.'
            }
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'When evaluating ICT in accounting, always balance advantages (speed, accuracy, audit trail) against disadvantages (cost, security, GIGO, staff training). Refer to the specific context given — a small business may not need full accounting software.'
            }
        },
        {
            id: 'chk-1',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State three advantages of accounting software over manual bookkeeping', checked: false },
                    { text: 'Explain what GIGO means and why controls are still needed', checked: false },
                    { text: 'Describe how an EPOS system links to accounting records', checked: false },
                    { text: 'State one advantage and one disadvantage of spreadsheets', checked: false }
                ]
            }
        },
        {
            id: 'sum-1',
            type: 'summary',
            data: {
                text: 'ICT (accounting software, EPOS, spreadsheets) speeds up transaction recording, reduces arithmetic errors, and provides real-time reporting. Disadvantages include cost, security risks, staff training and the GIGO problem — output quality depends entirely on accurate input. Controls and authorisation procedures remain essential even with automated systems.'
            }
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'tbl-advantages', prompt: 'Give three advantages of accounting software compared to manual systems.' },
            { id: 'cue-2', blockId: 'h-gigo', prompt: 'Explain GIGO and state why it means controls are still needed.' },
            { id: 'cue-3', blockId: 'p-epos', prompt: 'How does an EPOS terminal feed into the accounting system?' },
            { id: 'cue-4', blockId: 'list-spreadsheets', prompt: 'State two disadvantages of using a spreadsheet for accounting.' }
        ],
        summaryText: 'ICT improves speed and accuracy in accounting but brings security, cost and GIGO risks. Controls remain essential regardless of technology used.',
        ready: true
    },
    evidence: []
};

export default note_accounting_1_1_5;
