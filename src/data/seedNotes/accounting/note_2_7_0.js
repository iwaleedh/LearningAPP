/**
 * Seed note: Accounting · Unit 2 · Topic 7 · Subtopic 0
 * "IAS 1 company financial statements"
 */

export const note_accounting_2_7_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Prepare a limited company statement of profit or loss, statement of changes in equity and statement of financial position in IAS 1 format."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "The Set of Financial Statements",
        "level": 2
      }
    },
    {
      "id": "p-set",
      "type": "paragraph",
      "data": {
        "text": "IAS 1 <em>Presentation of Financial Statements</em> requires a complete set of statements: a <strong>statement of profit or loss</strong> (and other comprehensive income), a <strong>statement of changes in equity</strong>, a <strong>statement of financial position</strong>, a <strong>statement of cash flows</strong> and <strong>notes</strong>."
      }
    },
    {
      "id": "h-sopl",
      "type": "heading",
      "data": {
        "text": "Statement of Profit or Loss",
        "level": 2
      }
    },
    {
      "id": "list-sopl",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Revenue − Cost of sales = <strong>Gross profit</strong>"
          },
          {
            "text": "Less distribution costs and administrative expenses = <strong>Profit from operations</strong>"
          },
          {
            "text": "Less finance costs (e.g. debenture interest) = <strong>Profit before tax</strong>"
          },
          {
            "text": "Less tax = <strong>Profit for the year</strong>"
          }
        ]
      }
    },
    {
      "id": "key-dividends",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Dividends Are Not Expenses",
        "text": "Dividends are a distribution of profit to shareholders, so they appear in the <strong>statement of changes in equity</strong>, not in the statement of profit or loss. Debenture interest, however, <em>is</em> an expense (finance cost) because debenture holders are lenders."
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Statement of Changes in Equity",
        "level": 2
      }
    },
    {
      "id": "tbl-soce",
      "type": "comparisonTable",
      "data": {
        "caption": "Statement of changes in equity (extract)",
        "headers": [
          "",
          "Share capital £000",
          "Share premium £000",
          "Retained earnings £000",
          "Total £000"
        ],
        "rows": [
          [
            "Balance at start",
            "500",
            "50",
            "120",
            "670"
          ],
          [
            "Share issue",
            "100",
            "20",
            "—",
            "120"
          ],
          [
            "Profit for the year",
            "—",
            "—",
            "85",
            "85"
          ],
          [
            "Dividends paid",
            "—",
            "—",
            "(40)",
            "(40)"
          ],
          [
            "Balance at end",
            "600",
            "70",
            "165",
            "835"
          ]
        ]
      }
    },
    {
      "id": "h-3",
      "type": "heading",
      "data": {
        "text": "Statement of Financial Position",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Shows non-current assets, current assets, current liabilities (including tax payable and short-term borrowing) and non-current liabilities (e.g. debentures). Total assets less total liabilities equals <strong>equity</strong>: share capital, share premium, other reserves and retained earnings."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Common Errors",
        "text": "Do not include dividends paid in the statement of profit or loss; show tax owed at the year end as a current liability; classify debentures due in more than 12 months as non-current liabilities."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "List the components of a complete set of financial statements",
            "checked": false
          },
          {
            "text": "Lay out a statement of profit or loss to profit for the year",
            "checked": false
          },
          {
            "text": "Prepare a statement of changes in equity",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "IAS 1 requires a statement of profit or loss, statement of changes in equity, statement of financial position, statement of cash flows and notes. Debenture interest is a finance cost; dividends go through the statement of changes in equity."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "IAS 1 requires a statement of profit or loss, statement of changes in equity, statement of financial position, statement of cash flows and notes. Debenture interest is a finance cost; dividends go through the statement of changes in equity.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-set",
        "prompt": "Name the components of a complete set of financial statements under IAS 1.",
        "answer": "Statement of profit or loss (and OCI), statement of changes in equity, statement of financial position, statement of cash flows, notes."
      },
      {
        "id": "cue-2",
        "blockId": "key-dividends",
        "prompt": "Where are dividends shown, and why are they not an expense?",
        "answer": "In the statement of changes in equity — they are distributions of profit to owners, not costs of earning revenue."
      },
      {
        "id": "cue-3",
        "blockId": "tbl-soce",
        "prompt": "Retained earnings start at £120 000; profit is £85 000; dividends £40 000. What is closing retained earnings?",
        "answer": "£165 000."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_7_0;
