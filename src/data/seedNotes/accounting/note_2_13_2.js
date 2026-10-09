/**
 * Seed note: Accounting · Unit 2 · Topic 13 · Subtopic 2
 * "Margin of safety"
 */

export const note_accounting_2_13_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret the margin of safety and use it to assess risk."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "How Far Can Sales Fall?",
        "level": 2
      }
    },
    {
      "id": "p-mos",
      "type": "paragraph",
      "data": {
        "text": "The <strong>margin of safety</strong> is the amount by which budgeted or actual sales exceed break-even sales. It shows how far sales could fall before the business makes a loss."
      }
    },
    {
      "id": "key-mos",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Formulae",
        "text": "Margin of safety (units) = Budgeted sales − Break-even sales\nMargin of safety (%) = Margin of safety ÷ Budgeted sales × 100"
      }
    },
    {
      "id": "worked-mos",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Margin of Safety",
        "text": "Break-even 6 000 units; budgeted sales 8 000 units; price £25\nMargin of safety = 2 000 units (£50 000)\nAs a percentage = 2 000 ÷ 8 000 × 100 = 25%\nSales could fall by 25% before a loss is made."
      }
    },
    {
      "id": "h-interpret",
      "type": "heading",
      "data": {
        "text": "Interpreting the Margin",
        "level": 2
      }
    },
    {
      "id": "list-interpret",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "A <strong>large</strong> margin of safety means low risk — the business can absorb a drop in demand."
          },
          {
            "text": "A <strong>small</strong> margin of safety means a small fall in sales would cause a loss."
          },
          {
            "text": "Businesses with high fixed costs (high operating gearing) usually have higher break-even points and smaller margins of safety."
          }
        ]
      }
    },
    {
      "id": "p-profit",
      "type": "paragraph",
      "data": {
        "text": "Profit can also be found directly: <strong>Profit = Margin of safety (units) × Contribution per unit</strong>. In the example: 2 000 × £10 = £20 000."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Improving the Margin",
        "text": "Increase sales volume, raise the price (if demand allows), cut variable costs or reduce fixed costs — each lowers break-even or raises sales."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate margin of safety in units, revenue and percentage",
            "checked": false
          },
          {
            "text": "Interpret the margin of safety",
            "checked": false
          },
          {
            "text": "Calculate profit from the margin of safety",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Margin of safety = budgeted sales − break-even sales (also as % of budgeted sales). A larger margin means lower risk; profit = margin of safety units × contribution per unit."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Margin of safety = budgeted sales − break-even sales (also as % of budgeted sales). A larger margin means lower risk; profit = margin of safety units × contribution per unit.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-mos",
        "prompt": "Define margin of safety.",
        "answer": "The amount by which budgeted/actual sales exceed break-even sales."
      },
      {
        "id": "cue-2",
        "blockId": "worked-mos",
        "prompt": "Break-even 6 000 units, budgeted sales 8 000. Calculate the margin of safety as a percentage.",
        "answer": "25%."
      },
      {
        "id": "cue-3",
        "blockId": "p-profit",
        "prompt": "How can profit be calculated from the margin of safety?",
        "answer": "Margin of safety (units) × contribution per unit."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_13_2;
