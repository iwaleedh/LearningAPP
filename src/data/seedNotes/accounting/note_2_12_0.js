/**
 * Seed note: Accounting · Unit 2 · Topic 12 · Subtopic 0
 * "Net present value"
 */

export const note_accounting_2_12_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate net present value (NPV) using discount factors and use it to decide whether to accept an investment."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "The Time Value of Money",
        "level": 2
      }
    },
    {
      "id": "p-tvm",
      "type": "paragraph",
      "data": {
        "text": "£1 received today is worth more than £1 received in the future, because today's money could be invested to earn a return. <strong>Discounting</strong> converts future cash flows into their <strong>present value</strong> using the business's cost of capital."
      }
    },
    {
      "id": "key-npv",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "NPV Method",
        "text": "NPV = Total present value of net cash inflows − Initial investment\nPresent value = Cash flow × Discount factor for that year\nDecision: accept if NPV is positive; reject if negative. Between projects, choose the highest positive NPV."
      }
    },
    {
      "id": "worked-npv",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "NPV Calculation",
        "text": "Investment £50 000 now. Net cash inflows: Y1 £20 000, Y2 £22 000, Y3 £18 000. Cost of capital 10%.\nDiscount factors at 10%: Y1 0.909, Y2 0.826, Y3 0.751\n\nY0  (50 000) × 1.000 = (50 000)\nY1   20 000 × 0.909 =  18 180\nY2   22 000 × 0.826 =  18 172\nY3   18 000 × 0.751 =  13 518\nNPV = 49 870 − 50 000 = (130) → negative: reject at 10%"
      }
    },
    {
      "id": "h-eval",
      "type": "heading",
      "data": {
        "text": "Advantages and Disadvantages",
        "level": 2
      }
    },
    {
      "id": "tbl-eval",
      "type": "comparisonTable",
      "data": {
        "caption": "Evaluating NPV",
        "headers": [
          "Advantages",
          "Disadvantages"
        ],
        "rows": [
          [
            "Takes account of the time value of money",
            "Choosing the correct cost of capital is difficult"
          ],
          [
            "Uses all cash flows over the project's life",
            "Relies on forecasts that become less reliable further ahead"
          ],
          [
            "Gives a clear accept/reject decision in £",
            "Harder for non-financial managers to understand"
          ]
        ]
      }
    },
    {
      "id": "tip-cash",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Cash Flows, Not Profit",
        "text": "Use cash inflows and outflows only. Depreciation is not a cash flow, so do not deduct it; include any scrap (residual) value as an inflow in the final year."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain the time value of money",
            "checked": false
          },
          {
            "text": "Calculate NPV using discount factors",
            "checked": false
          },
          {
            "text": "Evaluate NPV as an appraisal method",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "NPV discounts future net cash inflows at the cost of capital and subtracts the initial investment. A positive NPV means the project earns more than the cost of capital and should be accepted; it uses all cash flows and the time value of money."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "NPV discounts future net cash inflows at the cost of capital and subtracts the initial investment. A positive NPV means the project earns more than the cost of capital and should be accepted; it uses all cash flows and the time value of money.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-tvm",
        "prompt": "Why is money received in the future worth less than money received today?",
        "answer": "Money today can be invested to earn a return (and inflation and risk reduce future value)."
      },
      {
        "id": "cue-2",
        "blockId": "key-npv",
        "prompt": "What is the NPV decision rule?",
        "answer": "Accept if NPV is positive; reject if negative; choose the highest positive NPV between projects."
      },
      {
        "id": "cue-3",
        "blockId": "tip-cash",
        "prompt": "Should depreciation be deducted when calculating NPV?",
        "answer": "No — it is not a cash flow."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_12_0;
