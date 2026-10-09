/**
 * Seed note: Accounting · Unit 2 · Topic 10 · Subtopic 2
 * "Flexible budgets"
 */

export const note_accounting_2_10_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Prepare a flexible budget, calculate variances against it, and explain why flexing gives a fairer comparison than a fixed budget."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Fixed vs Flexible Budgets",
        "level": 2
      }
    },
    {
      "id": "p-flex",
      "type": "paragraph",
      "data": {
        "text": "A <strong>fixed budget</strong> is set for one planned level of activity. If actual output differs, comparing actual costs with the fixed budget is misleading — variable costs are bound to differ. A <strong>flexible budget</strong> recalculates the budget for the <strong>actual level of activity</strong>."
      }
    },
    {
      "id": "key-flex",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "How to Flex",
        "text": "Variable costs and revenue: budgeted amount per unit × actual units.\nFixed costs: unchanged from the original budget.\nSemi-variable costs: split into fixed and variable elements first."
      }
    },
    {
      "id": "worked-flex",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Flexing a Budget",
        "text": "Original budget for 10 000 units: revenue £200 000; materials £60 000; labour £40 000; fixed overheads £50 000.\nActual output 12 000 units: revenue £236 000; materials £75 000; labour £46 000; fixed overheads £52 000.\n\nFlexed budget (12 000 units): revenue £240 000; materials £72 000; labour £48 000; fixed £50 000\n\nVariances:\nRevenue 236 000 vs 240 000 → £4 000 Adverse\nMaterials 75 000 vs 72 000 → £3 000 Adverse\nLabour 46 000 vs 48 000 → £2 000 Favourable\nFixed overheads 52 000 vs 50 000 → £2 000 Adverse"
      }
    },
    {
      "id": "h-variances",
      "type": "heading",
      "data": {
        "text": "Favourable and Adverse Variances",
        "level": 2
      }
    },
    {
      "id": "list-variances",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>Favourable (F)</strong>: actual profit is higher than budgeted — revenue above budget or costs below budget."
          },
          {
            "text": "<strong>Adverse (A)</strong>: actual profit is lower than budgeted — revenue below budget or costs above budget."
          }
        ]
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Variances should be investigated, not just reported: an adverse materials variance might be caused by higher prices, wastage or poor-quality materials; a favourable labour variance might come from efficiency or from using cheaper, less skilled staff."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Interrelated Variances",
        "text": "Variances can be linked: buying cheaper materials (favourable price) can cause more wastage (adverse usage). Mention possible links in evaluation answers."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain why a flexible budget is fairer",
            "checked": false
          },
          {
            "text": "Flex a budget to actual output",
            "checked": false
          },
          {
            "text": "Calculate and label variances F or A",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "A flexible budget restates revenue and variable costs for actual output while keeping fixed costs constant. Comparing actual with the flexed budget gives meaningful favourable and adverse variances to investigate."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "A flexible budget restates revenue and variable costs for actual output while keeping fixed costs constant. Comparing actual with the flexed budget gives meaningful favourable and adverse variances to investigate.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-flex",
        "prompt": "Why is comparing actual costs with a fixed budget misleading when output changes?",
        "answer": "Variable costs naturally change with output, so differences reflect volume rather than efficiency."
      },
      {
        "id": "cue-2",
        "blockId": "key-flex",
        "prompt": "How are fixed and variable costs treated when flexing a budget?",
        "answer": "Variable costs and revenue are recalculated for actual units; fixed costs stay at the original budget."
      },
      {
        "id": "cue-3",
        "blockId": "worked-flex",
        "prompt": "Budgeted materials are £6 per unit; actual output 12 000 units; actual materials £75 000. Calculate the variance.",
        "answer": "Flexed £72 000; variance £3 000 adverse."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_10_2;
