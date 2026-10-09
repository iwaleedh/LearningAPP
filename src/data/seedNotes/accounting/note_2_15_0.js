/**
 * Seed note: Accounting · Unit 2 · Topic 15 · Subtopic 0
 * "Spreadsheet use in budgeting"
 */

export const note_accounting_2_15_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Explain how spreadsheets support budgeting and what-if analysis, and evaluate their risks."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Why Use Spreadsheets for Budgets?",
        "level": 2
      }
    },
    {
      "id": "p-why",
      "type": "paragraph",
      "data": {
        "text": "Budgets contain many linked calculations — sales feed production, production feeds purchases, and all feed the cash budget. A <strong>spreadsheet</strong> links these with formulas so that one change updates every dependent figure automatically."
      }
    },
    {
      "id": "h-features",
      "type": "heading",
      "data": {
        "text": "Useful Features",
        "level": 2
      }
    },
    {
      "id": "list-features",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>Formulas and cell references</strong> — e.g. =B4*C4 for revenue, =SUM(B6:B12) for total payments."
          },
          {
            "text": "<strong>What-if (sensitivity) analysis</strong> — change one assumption, such as selling price or sales growth, and see the effect on profit and cash."
          },
          {
            "text": "<strong>Goal seek</strong> — find the input needed for a target, e.g. the sales volume needed to break even."
          },
          {
            "text": "<strong>Charts</strong> — present trends and budget vs actual comparisons clearly."
          },
          {
            "text": "<strong>Templates</strong> — reuse the same structure each year for consistency."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Linked Cash Budget",
        "text": "Cell C10 (closing balance for February) = C8 + C9 → opening balance + net cash flow\nCell D8 (opening balance for March) = C10\nIf January credit sales in cell B3 change, receipts, net cash flow and every later closing balance update automatically."
      }
    },
    {
      "id": "h-risks",
      "type": "heading",
      "data": {
        "text": "Risks",
        "level": 2
      }
    },
    {
      "id": "list-risks",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Formula errors (wrong cell reference, ranges that miss a row) can silently corrupt the whole budget."
          },
          {
            "text": "Results are only as good as the assumptions entered (\"garbage in, garbage out\")."
          },
          {
            "text": "Version control problems when several people edit copies."
          },
          {
            "text": "Data security and the risk of accidental overwriting or loss."
          }
        ]
      }
    },
    {
      "id": "tip-controls",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Controls",
        "text": "Protect formula cells, keep assumptions in a separate input area, include check totals (e.g. that the statement of financial position balances) and keep backups."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain the benefits of spreadsheets for budgeting",
            "checked": false
          },
          {
            "text": "Describe what-if analysis and goal seek",
            "checked": false
          },
          {
            "text": "Evaluate the risks of spreadsheet use and suggest controls",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Spreadsheets link budget calculations with formulas, enabling rapid what-if analysis, goal seek and charts. Risks include formula errors, poor assumptions and version control, reduced by protected cells, input areas, check totals and backups."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Spreadsheets link budget calculations with formulas, enabling rapid what-if analysis, goal seek and charts. Risks include formula errors, poor assumptions and version control, reduced by protected cells, input areas, check totals and backups.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-features",
        "prompt": "What is what-if analysis in a spreadsheet budget?",
        "answer": "Changing an assumption (e.g. price or volume) to see its effect on profit and cash."
      },
      {
        "id": "cue-2",
        "blockId": "list-risks",
        "prompt": "Give two risks of relying on spreadsheets for budgeting.",
        "answer": "E.g. formula errors, poor assumptions, version control problems, data loss or security."
      },
      {
        "id": "cue-3",
        "blockId": "tip-controls",
        "prompt": "Suggest two controls to reduce spreadsheet errors.",
        "answer": "E.g. protect formula cells, separate input area, check totals, backups."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_15_0;
