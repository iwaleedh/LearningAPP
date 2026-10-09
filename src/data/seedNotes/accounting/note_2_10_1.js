/**
 * Seed note: Accounting · Unit 2 · Topic 10 · Subtopic 1
 * "Budget preparation process"
 */

export const note_accounting_2_10_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Prepare sales, production, purchases and cash budgets and explain the role of the principal budget factor."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "The Principal Budget Factor",
        "level": 2
      }
    },
    {
      "id": "p-pbf",
      "type": "paragraph",
      "data": {
        "text": "The <strong>principal (limiting) budget factor</strong> is the factor that restricts activity — usually sales demand, but sometimes labour, materials or machine capacity. Its budget is prepared first and all others follow from it."
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Order of Preparation",
        "level": 2
      }
    },
    {
      "id": "list-order",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Sales budget"
          },
          {
            "text": "Production budget (units)"
          },
          {
            "text": "Materials usage and purchases budgets"
          },
          {
            "text": "Labour and overhead budgets"
          },
          {
            "text": "Cash budget"
          },
          {
            "text": "Budgeted statement of profit or loss and statement of financial position (master budget)"
          }
        ]
      }
    },
    {
      "id": "key-production",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Production Budget",
        "text": "Production = Sales + Closing inventory of finished goods − Opening inventory of finished goods"
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Production Budget",
        "text": "Sales: 2 000 units. Opening inventory 300 units. Closing inventory required: 20% of next month's sales of 2 500 = 500 units.\nProduction = 2 000 + 500 − 300 = 2 200 units"
      }
    },
    {
      "id": "h-cash",
      "type": "heading",
      "data": {
        "text": "Cash Budget",
        "level": 2
      }
    },
    {
      "id": "p-cash",
      "type": "paragraph",
      "data": {
        "text": "A cash budget records <strong>receipts and payments in the month the cash moves</strong>, not when the sale or expense occurs. Depreciation is excluded because it is not a cash flow."
      }
    },
    {
      "id": "worked-receipts",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Cash Receipts from Credit Sales",
        "text": "Sales: Jan £40 000, Feb £50 000, Mar £60 000. 30% cash sales; 70% on credit received the following month.\nMarch receipts = 30% × 60 000 + 70% × 50 000 = 18 000 + 35 000 = £53 000"
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Laying Out the Cash Budget",
        "text": "Use columns for each month: total receipts, total payments, net cash flow, opening balance, closing balance. The closing balance of one month is the opening balance of the next."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Identify the principal budget factor",
            "checked": false
          },
          {
            "text": "Prepare a production budget",
            "checked": false
          },
          {
            "text": "Calculate monthly receipts and payments for a cash budget",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Start with the principal budget factor (usually sales), then production (sales + closing − opening inventory), materials, labour and the cash budget, which records cash when it is received or paid and excludes depreciation."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Start with the principal budget factor (usually sales), then production (sales + closing − opening inventory), materials, labour and the cash budget, which records cash when it is received or paid and excludes depreciation.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-pbf",
        "prompt": "What is the principal budget factor and why is it budgeted first?",
        "answer": "The factor that limits activity (often sales demand); all other budgets depend on it."
      },
      {
        "id": "cue-2",
        "blockId": "key-production",
        "prompt": "State the formula for the production budget.",
        "answer": "Sales + closing inventory − opening inventory."
      },
      {
        "id": "cue-3",
        "blockId": "worked-receipts",
        "prompt": "March sales £60 000, Feb £50 000; 30% cash, 70% credit received next month. What are March receipts?",
        "answer": "£53 000."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_10_1;
