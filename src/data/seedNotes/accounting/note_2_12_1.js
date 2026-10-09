/**
 * Seed note: Accounting · Unit 2 · Topic 12 · Subtopic 1
 * "Internal rate of return"
 */

export const note_accounting_2_12_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Estimate the internal rate of return (IRR) by interpolation and interpret it against the cost of capital."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "What is IRR?",
        "level": 2
      }
    },
    {
      "id": "p-irr",
      "type": "paragraph",
      "data": {
        "text": "The <strong>internal rate of return</strong> is the discount rate at which a project's NPV is exactly zero. It represents the project's own percentage return."
      }
    },
    {
      "id": "key-rule",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Decision Rule",
        "text": "Accept the project if IRR is greater than the cost of capital; reject if it is lower."
      }
    },
    {
      "id": "h-interp",
      "type": "heading",
      "data": {
        "text": "Estimating IRR by Interpolation",
        "level": 2
      }
    },
    {
      "id": "list-steps",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Calculate the NPV at a low discount rate to get a positive NPV."
          },
          {
            "text": "Calculate the NPV at a higher rate to get a negative NPV."
          },
          {
            "text": "Interpolate: IRR = L + [NPV at L ÷ (NPV at L − NPV at H)] × (H − L)"
          }
        ]
      }
    },
    {
      "id": "worked-irr",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Interpolation",
        "text": "NPV at 8% = +£2 400; NPV at 12% = −£1 600\nIRR = 8% + [2 400 ÷ (2 400 − (−1 600))] × (12% − 8%)\n    = 8% + (2 400 ÷ 4 000) × 4% = 8% + 2.4% = 10.4%\nIf the cost of capital is 9%, accept (10.4% > 9%)."
      }
    },
    {
      "id": "tbl-eval",
      "type": "comparisonTable",
      "data": {
        "caption": "Evaluating IRR",
        "headers": [
          "Advantages",
          "Disadvantages"
        ],
        "rows": [
          [
            "Uses the time value of money and all cash flows",
            "Interpolation only gives an approximation"
          ],
          [
            "A percentage is easy to compare with the cost of capital",
            "Does not show the size of the return in £"
          ],
          [
            "No need to know the exact cost of capital to calculate it",
            "Can rank projects differently from NPV; NPV is preferred for mutually exclusive projects"
          ]
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Check the Signs",
        "text": "Subtracting a negative NPV in the denominator means adding: 2 400 − (−1 600) = 4 000. This is the most common arithmetic slip."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Define IRR",
            "checked": false
          },
          {
            "text": "Estimate IRR by interpolation",
            "checked": false
          },
          {
            "text": "Compare IRR with NPV",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "IRR is the discount rate giving zero NPV, estimated by interpolating between a positive and a negative NPV. Accept if IRR exceeds the cost of capital; NPV is preferred when ranking mutually exclusive projects."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "IRR is the discount rate giving zero NPV, estimated by interpolating between a positive and a negative NPV. Accept if IRR exceeds the cost of capital; NPV is preferred when ranking mutually exclusive projects.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-irr",
        "prompt": "Define the internal rate of return.",
        "answer": "The discount rate at which NPV equals zero."
      },
      {
        "id": "cue-2",
        "blockId": "worked-irr",
        "prompt": "NPV at 8% is +£2 400 and at 12% is −£1 600. Estimate the IRR.",
        "answer": "10.4%."
      },
      {
        "id": "cue-3",
        "blockId": "key-rule",
        "prompt": "When should a project be accepted using IRR?",
        "answer": "When IRR exceeds the cost of capital."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_12_1;
