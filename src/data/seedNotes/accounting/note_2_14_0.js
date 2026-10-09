/**
 * Seed note: Accounting · Unit 2 · Topic 14 · Subtopic 0
 * "Marginal vs Absorption Concepts"
 */

export const note_accounting_2_14_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Explain marginal and absorption costing, calculate product cost under each, and state when each is used."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Two Ways to Cost a Product",
        "level": 2
      }
    },
    {
      "id": "tbl-compare",
      "type": "comparisonTable",
      "data": {
        "caption": "Marginal vs absorption costing",
        "headers": [
          "",
          "Marginal costing",
          "Absorption costing"
        ],
        "rows": [
          [
            "Product cost includes",
            "Variable production costs only",
            "Variable production costs + a share of fixed production overheads"
          ],
          [
            "Fixed production overheads",
            "Treated as a period cost — charged in full each period",
            "Absorbed into the cost of each unit"
          ],
          [
            "Inventory valuation",
            "At variable cost",
            "At full production cost (required by IAS 2 for external reporting)"
          ],
          [
            "Main use",
            "Internal decisions (break-even, special orders, make or buy)",
            "Financial statements and full-cost pricing"
          ]
        ]
      }
    },
    {
      "id": "h-oar",
      "type": "heading",
      "data": {
        "text": "Overhead Absorption Rate",
        "level": 2
      }
    },
    {
      "id": "key-oar",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Fixed Overhead Absorption Rate",
        "text": "OAR = Budgeted fixed production overheads ÷ Budgeted activity (units, labour hours or machine hours)"
      }
    },
    {
      "id": "worked-unit",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Unit Cost Under Each Method",
        "text": "Direct materials £8, direct labour £6, variable overheads £2 per unit. Budgeted fixed production overheads £40 000; budgeted output 10 000 units.\nOAR = £4 per unit\nMarginal cost per unit = 8 + 6 + 2 = £16\nAbsorption (full) cost per unit = 16 + 4 = £20"
      }
    },
    {
      "id": "p-under",
      "type": "paragraph",
      "data": {
        "text": "Under absorption costing, if actual overheads or output differ from budget, overheads are <strong>under- or over-absorbed</strong> and an adjustment is made in the statement of profit or loss."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Which Is Right?",
        "text": "Neither is \"right\" — marginal costing is better for short-term decisions because fixed costs do not change with the decision; absorption costing is required for external inventory valuation."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Distinguish marginal and absorption costing",
            "checked": false
          },
          {
            "text": "Calculate an overhead absorption rate",
            "checked": false
          },
          {
            "text": "Calculate unit cost under each method",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Marginal costing values products at variable cost and charges fixed overheads as period costs; absorption costing adds a share of fixed production overheads using an OAR. Marginal suits internal decisions; absorption is required for external inventory valuation."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Marginal costing values products at variable cost and charges fixed overheads as period costs; absorption costing adds a share of fixed production overheads using an OAR. Marginal suits internal decisions; absorption is required for external inventory valuation.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-compare",
        "prompt": "How are fixed production overheads treated in marginal costing?",
        "answer": "As a period cost charged in full against profit each period, not included in inventory."
      },
      {
        "id": "cue-2",
        "blockId": "worked-unit",
        "prompt": "Variable cost £16 per unit; fixed overheads £40 000 over 10 000 units. What is the absorption cost per unit?",
        "answer": "£20."
      },
      {
        "id": "cue-3",
        "blockId": "p-under",
        "prompt": "What causes under- or over-absorption of overheads?",
        "answer": "Actual overheads or actual activity differing from the budgeted figures used to set the OAR."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_14_0;
