/**
 * Seed note: Accounting · Unit 2 · Topic 13 · Subtopic 1
 * "Contribution and break-even point"
 */

export const note_accounting_2_13_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate contribution per unit, the break-even point, and the output needed for a target profit."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Contribution",
        "level": 2
      }
    },
    {
      "id": "p-contribution",
      "type": "paragraph",
      "data": {
        "text": "<strong>Contribution</strong> = Selling price − Variable cost. Each unit sold contributes this amount towards covering fixed costs; once fixed costs are covered, contribution becomes profit."
      }
    },
    {
      "id": "key-formulae",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Key Formulae",
        "text": "Break-even point (units) = Fixed costs ÷ Contribution per unit\nBreak-even revenue = Break-even units × Selling price (or Fixed costs ÷ C/S ratio)\nC/S ratio = Contribution per unit ÷ Selling price\nUnits for target profit = (Fixed costs + Target profit) ÷ Contribution per unit"
      }
    },
    {
      "id": "worked-be",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Break-even Calculation",
        "text": "Selling price £25; variable cost £15; fixed costs £60 000\nContribution per unit = £10\nBreak-even = 60 000 ÷ 10 = 6 000 units (revenue £150 000)\nTarget profit £20 000: (60 000 + 20 000) ÷ 10 = 8 000 units"
      }
    },
    {
      "id": "h-chart",
      "type": "heading",
      "data": {
        "text": "Break-even Charts",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "A break-even chart plots revenue and total cost against output. Fixed cost is a horizontal line; total cost starts at the fixed cost and rises with variable cost; the break-even point is where the revenue and total cost lines cross. The area beyond it is profit; before it, loss."
      }
    },
    {
      "id": "warn-assumptions",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Assumptions",
        "text": "Break-even analysis assumes a constant selling price and variable cost per unit, fixed costs that do not change, all output is sold, and a single product (or a constant sales mix). In reality bulk discounts and price cuts break these assumptions."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "What-If Analysis",
        "text": "Raising the selling price or cutting variable cost increases contribution and lowers the break-even point; higher fixed costs raise it."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate contribution and C/S ratio",
            "checked": false
          },
          {
            "text": "Calculate break-even in units and revenue",
            "checked": false
          },
          {
            "text": "Calculate output for a target profit",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Contribution = price − variable cost. Break-even units = fixed costs ÷ contribution per unit; target profit units = (fixed costs + profit) ÷ contribution per unit. Break-even relies on simplifying assumptions about prices and costs."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Contribution = price − variable cost. Break-even units = fixed costs ÷ contribution per unit; target profit units = (fixed costs + profit) ÷ contribution per unit. Break-even relies on simplifying assumptions about prices and costs.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-contribution",
        "prompt": "Define contribution.",
        "answer": "Selling price minus variable cost (per unit or in total)."
      },
      {
        "id": "cue-2",
        "blockId": "worked-be",
        "prompt": "Price £25, variable cost £15, fixed costs £60 000. Calculate the break-even point.",
        "answer": "6 000 units (£150 000 revenue)."
      },
      {
        "id": "cue-3",
        "blockId": "warn-assumptions",
        "prompt": "State two assumptions of break-even analysis.",
        "answer": "E.g. constant price and variable cost per unit, constant fixed costs, all output sold, single product."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_13_1;
