/**
 * Seed note: Accounting · Unit 2 · Topic 13 · Subtopic 0
 * "Cost classifications for break-even"
 */

export const note_accounting_2_13_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Classify costs as fixed, variable or semi-variable and split semi-variable costs using the high-low method."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Cost Behaviour",
        "level": 2
      }
    },
    {
      "id": "tbl-costs",
      "type": "comparisonTable",
      "data": {
        "caption": "Types of cost",
        "headers": [
          "Type",
          "Behaviour as output rises",
          "Examples"
        ],
        "rows": [
          [
            "Fixed",
            "Total stays the same (within the relevant range); cost per unit falls",
            "Rent, salaries, insurance, depreciation"
          ],
          [
            "Variable",
            "Total rises in proportion to output; cost per unit constant",
            "Direct materials, direct labour paid per unit, sales commission"
          ],
          [
            "Semi-variable",
            "Has a fixed element plus a variable element",
            "Electricity standing charge plus usage; phone line rental plus calls"
          ]
        ]
      }
    },
    {
      "id": "key-range",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Relevant Range",
        "text": "Fixed costs are only fixed within a range of activity. Beyond capacity, extra premises or machines create a \"stepped\" fixed cost."
      }
    },
    {
      "id": "h-highlow",
      "type": "heading",
      "data": {
        "text": "The High-Low Method",
        "level": 2
      }
    },
    {
      "id": "list-highlow",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Take the highest and lowest activity levels and their total costs."
          },
          {
            "text": "Variable cost per unit = Change in cost ÷ Change in units."
          },
          {
            "text": "Fixed cost = Total cost at either level − (units × variable cost per unit)."
          }
        ]
      }
    },
    {
      "id": "worked-highlow",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "High-Low Example",
        "text": "Highest output 8 000 units, total cost £46 000\nLowest output 3 000 units, total cost £26 000\nVariable cost per unit = (46 000 − 26 000) ÷ (8 000 − 3 000) = £4\nFixed cost = 46 000 − 8 000 × £4 = £14 000\nCost at 6 000 units = 14 000 + 6 000 × £4 = £38 000"
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Limitations",
        "text": "The high-low method uses only two observations, which may be unusual; it assumes a straight-line relationship between cost and output."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Classify costs as fixed, variable or semi-variable",
            "checked": false
          },
          {
            "text": "Split a semi-variable cost using high-low",
            "checked": false
          },
          {
            "text": "Explain the relevant range",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Fixed costs stay constant in total within the relevant range; variable costs rise with output; semi-variable costs have both elements. The high-low method finds variable cost per unit from the change in cost ÷ change in units."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Fixed costs stay constant in total within the relevant range; variable costs rise with output; semi-variable costs have both elements. The high-low method finds variable cost per unit from the change in cost ÷ change in units.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-costs",
        "prompt": "What happens to fixed cost per unit as output rises?",
        "answer": "It falls, because the same total is spread over more units."
      },
      {
        "id": "cue-2",
        "blockId": "worked-highlow",
        "prompt": "Costs are £46 000 at 8 000 units and £26 000 at 3 000 units. Find variable cost per unit and fixed cost.",
        "answer": "£4 per unit; fixed cost £14 000."
      },
      {
        "id": "cue-3",
        "blockId": "key-range",
        "prompt": "What is the relevant range?",
        "answer": "The range of activity over which fixed costs remain fixed and cost behaviour assumptions hold."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_13_0;
