/**
 * Seed note: Accounting · Unit 2 · Topic 7 · Subtopic 1
 * "Share issue journal entries"
 */

export const note_accounting_2_7_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Record the issue of ordinary shares at par and at a premium, including the share premium account."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Nominal Value and Share Premium",
        "level": 2
      }
    },
    {
      "id": "p-premium",
      "type": "paragraph",
      "data": {
        "text": "Every share has a <strong>nominal (par) value</strong>, e.g. £1. Shares are often issued for more than nominal value; the excess is the <strong>share premium</strong>. Share capital is credited with the nominal value only, and the premium is credited to the <strong>share premium account</strong> (a capital reserve that cannot be paid out as dividends)."
      }
    },
    {
      "id": "worked-premium",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Issue at a Premium",
        "text": "A company issues 200 000 ordinary shares of £1 each at £1.50, fully paid in cash.\n\nDr Bank                      £300 000\n    Cr Ordinary share capital      £200 000\n    Cr Share premium               £100 000"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Effect on the Statements",
        "level": 2
      }
    },
    {
      "id": "list-effect",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Bank (current asset) increases by the full cash received."
          },
          {
            "text": "Equity increases: share capital by the nominal value and share premium by the excess."
          },
          {
            "text": "Profit is <strong>not</strong> affected — issuing shares is a capital transaction, not income."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Ordinary vs Preference Shares",
        "text": "Ordinary shareholders own the company, vote, and receive variable dividends after preference shareholders. Preference shares carry a fixed dividend rate and usually no vote; under IAS 32, redeemable preference shares are classified as liabilities."
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Issue at Par",
        "text": "50 000 ordinary shares of £0.50 issued at £0.50 for cash.\nDr Bank £25 000\n    Cr Ordinary share capital £25 000\n(No premium arises.)"
      }
    },
    {
      "id": "tip-nominal",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Watch the Nominal Value",
        "text": "If shares have a nominal value of 50p and are issued at £2, the premium is £1.50 per share — not £1. Always subtract the nominal value from the issue price."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Record a share issue at par",
            "checked": false
          },
          {
            "text": "Record a share issue at a premium",
            "checked": false
          },
          {
            "text": "Explain why the share premium is not distributable",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Shares issued for cash: Dr Bank (total), Cr Share capital (nominal value), Cr Share premium (excess). Share premium is a non-distributable capital reserve and a share issue does not affect profit."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Shares issued for cash: Dr Bank (total), Cr Share capital (nominal value), Cr Share premium (excess). Share premium is a non-distributable capital reserve and a share issue does not affect profit.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "worked-premium",
        "prompt": "Record the issue of 200 000 £1 shares at £1.50 for cash.",
        "answer": "Dr Bank £300 000; Cr Share capital £200 000; Cr Share premium £100 000."
      },
      {
        "id": "cue-2",
        "blockId": "p-premium",
        "prompt": "What is the share premium account and can it be used for dividends?",
        "answer": "It records the excess of issue price over nominal value; it is a capital reserve and cannot be distributed as dividends."
      },
      {
        "id": "cue-3",
        "blockId": "tip-nominal",
        "prompt": "50p shares are issued at £2. What is the premium per share?",
        "answer": "£1.50."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_7_1;
