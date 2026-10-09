/**
 * Seed note: Accounting · Unit 2 · Topic 7 · Subtopic 2
 * "Rights and bonus issues"
 */

export const note_accounting_2_7_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Distinguish between rights issues and bonus issues, record each with journal entries, and explain their effects on equity and share price."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Rights Issues",
        "level": 2
      }
    },
    {
      "id": "p-rights",
      "type": "paragraph",
      "data": {
        "text": "A <strong>rights issue</strong> offers existing shareholders new shares in proportion to their holding (e.g. 1 for 4), usually at a discount to market price. It <strong>raises cash</strong>. It is recorded like any share issue for cash."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Rights Issue Entry",
        "text": "400 000 £1 shares in issue. Rights issue 1 for 4 at £1.60, fully taken up.\nNew shares = 100 000; cash = £160 000\n\nDr Bank                  £160 000\n    Cr Share capital            £100 000\n    Cr Share premium            £60 000"
      }
    },
    {
      "id": "h-bonus",
      "type": "heading",
      "data": {
        "text": "Bonus Issues",
        "level": 2
      }
    },
    {
      "id": "p-bonus",
      "type": "paragraph",
      "data": {
        "text": "A <strong>bonus (capitalisation) issue</strong> gives existing shareholders free shares by converting reserves into share capital. <strong>No cash is received</strong> and total equity is unchanged — only its composition changes."
      }
    },
    {
      "id": "worked-bonus",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Bonus Issue Entry",
        "text": "500 000 £1 shares in issue. Bonus issue 1 for 5, using share premium (£60 000) first and then retained earnings.\nBonus shares = 100 000 → £100 000\n\nDr Share premium          £60 000\nDr Retained earnings      £40 000\n    Cr Share capital            £100 000"
      }
    },
    {
      "id": "tbl-compare",
      "type": "comparisonTable",
      "data": {
        "caption": "Rights vs bonus issue",
        "headers": [
          "",
          "Rights issue",
          "Bonus issue"
        ],
        "rows": [
          [
            "Cash raised",
            "Yes",
            "No"
          ],
          [
            "Total equity",
            "Increases",
            "Unchanged"
          ],
          [
            "Number of shares",
            "Increases",
            "Increases"
          ],
          [
            "Market price per share",
            "Usually falls slightly (issued at a discount)",
            "Falls in proportion to the extra shares"
          ],
          [
            "Main purpose",
            "Raise finance from existing owners",
            "Make shares more marketable; reflect retained profits in capital"
          ]
        ]
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Which Reserves?",
        "text": "Bonus issues normally use non-distributable reserves (share premium, revaluation reserve) first, preserving retained earnings for future dividends."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Record a rights issue",
            "checked": false
          },
          {
            "text": "Record a bonus issue from reserves",
            "checked": false
          },
          {
            "text": "Compare the effects of rights and bonus issues",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "A rights issue sells new shares to existing shareholders for cash (Dr Bank, Cr Share capital and premium). A bonus issue converts reserves into share capital (Dr Reserves, Cr Share capital) with no cash and no change in total equity."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "A rights issue sells new shares to existing shareholders for cash (Dr Bank, Cr Share capital and premium). A bonus issue converts reserves into share capital (Dr Reserves, Cr Share capital) with no cash and no change in total equity.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-rights",
        "prompt": "What is a rights issue and does it raise cash?",
        "answer": "An offer of new shares to existing shareholders in proportion to their holdings, usually at a discount — yes, it raises cash."
      },
      {
        "id": "cue-2",
        "blockId": "p-bonus",
        "prompt": "What happens to total equity in a bonus issue?",
        "answer": "It is unchanged — reserves are converted into share capital and no cash is received."
      },
      {
        "id": "cue-3",
        "blockId": "worked-bonus",
        "prompt": "Record a £100 000 bonus issue using £60 000 share premium and the rest from retained earnings.",
        "answer": "Dr Share premium £60 000; Dr Retained earnings £40 000; Cr Share capital £100 000."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_7_2;
