/**
 * Seed note: Accounting · Unit 2 · Topic 8 · Subtopic 0
 * "Earnings per share calculation"
 */

export const note_accounting_2_8_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate basic earnings per share (EPS), including the weighted average number of shares after a share issue during the year."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "What is EPS?",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "<strong>Earnings per share</strong> shows the profit attributable to each ordinary share. It allows investors to compare performance over time, independent of changes in the number of shares."
      }
    },
    {
      "id": "key-formula",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Formula",
        "text": "Basic EPS = Profit for the year attributable to ordinary shareholders ÷ Weighted average number of ordinary shares in issue\n\nProfit attributable to ordinary shareholders = profit after tax − preference dividends (for irredeemable preference shares)."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Simple EPS",
        "text": "Profit after tax £450 000; preference dividends £50 000; 2 000 000 ordinary shares in issue all year.\nEPS = (450 000 − 50 000) ÷ 2 000 000 = £0.20 = 20p per share"
      }
    },
    {
      "id": "h-weighted",
      "type": "heading",
      "data": {
        "text": "Shares Issued During the Year",
        "level": 2
      }
    },
    {
      "id": "p-weighted",
      "type": "paragraph",
      "data": {
        "text": "If shares are issued for cash part-way through the year, the new shares only contributed resources for part of the year, so they are <strong>time-weighted</strong>."
      }
    },
    {
      "id": "worked-weighted",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Weighted Average",
        "text": "1 January: 1 200 000 shares. 1 October: 400 000 shares issued for cash.\nWeighted average = 1 200 000 × 12/12 + 400 000 × 3/12 = 1 200 000 + 100 000 = 1 300 000\nProfit for ordinary shareholders £390 000 → EPS = 390 000 ÷ 1 300 000 = 30p"
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Bonus Issues Are Not Time-Weighted",
        "text": "A bonus issue brings in no new resources, so the bonus shares are treated as if they had always been in issue (and the prior-year EPS is restated). Only issues for cash are time-weighted."
      }
    },
    {
      "id": "callout-3",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Interpretation",
        "text": "A rising EPS usually signals improving performance, but compare it with the share price (P/E ratio) and check whether profit growth came from genuine trading or one-off items."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate basic EPS",
            "checked": false
          },
          {
            "text": "Deduct preference dividends from profit",
            "checked": false
          },
          {
            "text": "Calculate a weighted average number of shares",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Basic EPS = profit attributable to ordinary shareholders ÷ weighted average ordinary shares. Shares issued for cash are time-weighted; bonus shares are treated as in issue for the whole period."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Basic EPS = profit attributable to ordinary shareholders ÷ weighted average ordinary shares. Shares issued for cash are time-weighted; bonus shares are treated as in issue for the whole period.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "key-formula",
        "prompt": "State the formula for basic EPS.",
        "answer": "(Profit after tax − preference dividends) ÷ weighted average number of ordinary shares."
      },
      {
        "id": "cue-2",
        "blockId": "worked-weighted",
        "prompt": "1 200 000 shares at 1 Jan; 400 000 issued for cash on 1 Oct. What is the weighted average number of shares?",
        "answer": "1 300 000."
      },
      {
        "id": "cue-3",
        "blockId": "p-weighted",
        "prompt": "Why are shares issued for cash during the year time-weighted?",
        "answer": "They only provided resources to earn profit for part of the year."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_8_0;
