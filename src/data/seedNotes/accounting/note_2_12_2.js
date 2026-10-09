/**
 * Seed note: Accounting · Unit 2 · Topic 12 · Subtopic 2
 * "Payback period"
 */

export const note_accounting_2_12_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate the payback period, including part-years, and evaluate payback as an investment appraisal method."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "How Quickly Is the Money Returned?",
        "level": 2
      }
    },
    {
      "id": "p-payback",
      "type": "paragraph",
      "data": {
        "text": "The <strong>payback period</strong> is the time it takes for cumulative net cash inflows to equal the initial investment. Shorter payback is preferred, especially when cash is scarce or the future is uncertain."
      }
    },
    {
      "id": "worked-payback",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Payback with a Part-Year",
        "text": "Investment £60 000. Net inflows: Y1 £15 000, Y2 £25 000, Y3 £30 000, Y4 £20 000.\nCumulative: Y1 15 000; Y2 40 000; Y3 70 000\nAfter Y2, £20 000 still to recover; Y3 inflow £30 000\nPayback = 2 years + (20 000 ÷ 30 000) × 12 months = 2 years 8 months"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Discounted Payback",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "A refinement uses discounted cash flows, so the payback reflects the time value of money. It is always longer than simple payback."
      }
    },
    {
      "id": "tbl-eval",
      "type": "comparisonTable",
      "data": {
        "caption": "Evaluating payback",
        "headers": [
          "Advantages",
          "Disadvantages"
        ],
        "rows": [
          [
            "Simple to calculate and understand",
            "Ignores cash flows after the payback point"
          ],
          [
            "Favours projects that return cash quickly — reduces risk",
            "Simple payback ignores the time value of money"
          ],
          [
            "Useful when liquidity is a priority",
            "Does not measure profitability or overall return"
          ]
        ]
      }
    },
    {
      "id": "key-together",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Using Methods Together",
        "text": "Businesses often use payback as an initial screen (e.g. \"must pay back within 3 years\") and then NPV or IRR to judge overall return. Non-financial factors — staff, environment, reputation, strategic fit — should also be considered."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Assumption",
        "text": "Payback part-year calculations assume cash flows arise evenly through the year; state this assumption in your answer."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate payback including part-years",
            "checked": false
          },
          {
            "text": "Explain discounted payback",
            "checked": false
          },
          {
            "text": "Evaluate payback alongside NPV and IRR",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Payback is the time for cumulative cash inflows to recover the investment. It is simple and favours liquidity and low risk but ignores later cash flows and (unless discounted) the time value of money; use it with NPV or IRR."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Payback is the time for cumulative cash inflows to recover the investment. It is simple and favours liquidity and low risk but ignores later cash flows and (unless discounted) the time value of money; use it with NPV or IRR.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "worked-payback",
        "prompt": "Investment £60 000; inflows £15k, £25k, £30k. Calculate the payback period.",
        "answer": "2 years 8 months."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-eval",
        "prompt": "Give the main weakness of the payback method.",
        "answer": "It ignores cash flows after payback (and simple payback ignores the time value of money)."
      },
      {
        "id": "cue-3",
        "blockId": "key-together",
        "prompt": "How is payback commonly used alongside NPV?",
        "answer": "As an initial screen for quick cash recovery, with NPV/IRR used to judge overall return."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_12_2;
