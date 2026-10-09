/**
 * Seed note: Accounting · Unit 2 · Topic 15 · Subtopic 1
 * "Accounting software workflows"
 */

export const note_accounting_2_15_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Describe how computerised accounting systems process transactions and evaluate their benefits and drawbacks compared with manual systems."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "From Transaction to Financial Statements",
        "level": 2
      }
    },
    {
      "id": "list-workflow",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "A source document (invoice, receipt) is entered once into the system."
          },
          {
            "text": "The software posts the double entry automatically to the relevant ledgers."
          },
          {
            "text": "Sales and purchases ledgers and control accounts update at the same time."
          },
          {
            "text": "Trial balance, aged receivables reports and financial statements are produced on demand."
          }
        ]
      }
    },
    {
      "id": "key-single",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Single Entry, Double Posting",
        "text": "Because each entry posts both debit and credit automatically, the trial balance always agrees arithmetically. Errors of principle, omission or original entry, however, are still possible."
      }
    },
    {
      "id": "tbl-compare",
      "type": "comparisonTable",
      "data": {
        "caption": "Computerised vs manual systems",
        "headers": [
          "Benefits",
          "Drawbacks"
        ],
        "rows": [
          [
            "Speed and accuracy of calculations",
            "Set-up, licence and training costs"
          ],
          [
            "Up-to-date reports at any time (e.g. aged receivables)",
            "Risk of data loss, viruses or hacking"
          ],
          [
            "Integration with banking, payroll and tax returns",
            "Errors in input are processed automatically (\"garbage in, garbage out\")"
          ],
          [
            "Audit trail of who entered each transaction",
            "Dependence on the system; downtime halts work"
          ]
        ]
      }
    },
    {
      "id": "h-controls",
      "type": "heading",
      "data": {
        "text": "Controls in a Computerised System",
        "level": 2
      }
    },
    {
      "id": "list-controls",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Passwords and user access levels"
          },
          {
            "text": "Regular backups stored off-site or in the cloud"
          },
          {
            "text": "Input validation checks (e.g. dates, account codes)"
          },
          {
            "text": "Segregation of duties so no one person controls a whole transaction"
          },
          {
            "text": "Reviewing exception and audit-trail reports"
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Exam Focus",
        "text": "When recommending software, balance the efficiency gains against cost and security risk for the specific business — a sole trader with few transactions may not need a complex package."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Describe the flow of data in an accounting system",
            "checked": false
          },
          {
            "text": "Explain why the trial balance always balances in software",
            "checked": false
          },
          {
            "text": "Evaluate computerised systems and suggest controls",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Accounting software posts double entries automatically from a single input, keeping ledgers and reports up to date. It is fast and integrated but costly and vulnerable to input errors and data risks, so access controls, backups and validation are essential."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Accounting software posts double entries automatically from a single input, keeping ledgers and reports up to date. It is fast and integrated but costly and vulnerable to input errors and data risks, so access controls, backups and validation are essential.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-workflow",
        "prompt": "Outline how a transaction flows through accounting software.",
        "answer": "Entered once → double entry posted automatically → ledgers and control accounts update → reports and statements produced on demand."
      },
      {
        "id": "cue-2",
        "blockId": "key-single",
        "prompt": "Which errors can still occur in computerised accounting?",
        "answer": "Errors of principle, omission and original entry (wrong input)."
      },
      {
        "id": "cue-3",
        "blockId": "list-controls",
        "prompt": "Name three controls for a computerised accounting system.",
        "answer": "E.g. passwords/access levels, backups, input validation, segregation of duties, audit-trail review."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_15_1;
