/**
 * Seed note: Accounting · Unit 2 · Topic 9 · Subtopic 1
 * "Operating, investing and financing sections"
 */

export const note_accounting_2_9_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Classify cash flows into operating, investing and financing activities and complete a statement of cash flows reconciling to the change in cash."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "The Three Sections",
        "level": 2
      }
    },
    {
      "id": "tbl-sections",
      "type": "comparisonTable",
      "data": {
        "caption": "Classification of cash flows",
        "headers": [
          "Section",
          "Examples"
        ],
        "rows": [
          [
            "Operating activities",
            "Cash from trading (indirect method), interest paid, tax paid"
          ],
          [
            "Investing activities",
            "Purchase of property, plant and equipment; proceeds from sale of non-current assets; interest/dividends received"
          ],
          [
            "Financing activities",
            "Proceeds of share issues; issue or repayment of debentures and loans; dividends paid"
          ]
        ]
      }
    },
    {
      "id": "h-hidden",
      "type": "heading",
      "data": {
        "text": "Finding Hidden Figures",
        "level": 2
      }
    },
    {
      "id": "p-ppe",
      "type": "paragraph",
      "data": {
        "text": "Exam questions often require you to calculate cash flows from opening and closing statements of financial position. Use a non-current asset working: <strong>opening NBV + purchases − NBV of disposals − depreciation = closing NBV</strong>. Rearrange to find purchases."
      }
    },
    {
      "id": "worked-ppe",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "PPE Purchases Working",
        "text": "PPE NBV: opening £300 000, closing £360 000. Depreciation £45 000. Asset sold with NBV £15 000 for £18 000.\nPurchases = 360 000 − 300 000 + 45 000 + 15 000 = £120 000\nInvesting: Purchase of PPE (120 000); Proceeds from sale 18 000 → net (102 000)"
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Completing the Statement",
        "text": "Net cash from operating activities       87 000\nNet cash used in investing activities  (102 000)\nFinancing: share issue 50 000; debenture repaid (20 000); dividends paid (12 000) → 18 000\nNet increase in cash and cash equivalents   3 000\nCash at start 9 000 → cash at end 12 000 (agrees with the statement of financial position)"
      }
    },
    {
      "id": "key-check",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Reconciliation Check",
        "text": "The net change in cash must equal the difference between opening and closing cash and cash equivalents. If it does not, a figure has been omitted or misclassified."
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Interpreting the Statement",
        "text": "Healthy businesses usually generate positive operating cash flow that funds investment. Heavy reliance on financing inflows to cover operating outflows is a warning sign."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Classify cash flows into the three sections",
            "checked": false
          },
          {
            "text": "Calculate purchases of non-current assets from a working",
            "checked": false
          },
          {
            "text": "Reconcile the net change in cash",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Cash flows are classified as operating, investing (buying/selling non-current assets) and financing (shares, loans, dividends paid). Use asset workings to find hidden figures and reconcile the net change to opening and closing cash."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Cash flows are classified as operating, investing (buying/selling non-current assets) and financing (shares, loans, dividends paid). Use asset workings to find hidden figures and reconcile the net change to opening and closing cash.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-sections",
        "prompt": "In which section are dividends paid and share issue proceeds shown?",
        "answer": "Financing activities."
      },
      {
        "id": "cue-2",
        "blockId": "worked-ppe",
        "prompt": "Opening PPE £300k, closing £360k, depreciation £45k, disposal NBV £15k. Calculate purchases.",
        "answer": "£120 000."
      },
      {
        "id": "cue-3",
        "blockId": "key-check",
        "prompt": "How do you check that a statement of cash flows is correct?",
        "answer": "The net change in cash must equal the movement between opening and closing cash and cash equivalents."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_9_1;
