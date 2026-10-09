/**
 * Seed note: Accounting · Unit 2 · Topic 8 · Subtopic 2
 * "Dividend yield"
 */

export const note_accounting_2_8_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret dividend per share, dividend yield and dividend cover."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Returns to Shareholders",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Shareholders receive returns through <strong>dividends</strong> and through <strong>capital growth</strong> in the share price. Dividend ratios measure the income element."
      }
    },
    {
      "id": "tbl-div",
      "type": "comparisonTable",
      "data": {
        "caption": "Dividend ratios",
        "headers": [
          "Ratio",
          "Formula",
          "Shows"
        ],
        "rows": [
          [
            "Dividend per share (DPS)",
            "Ordinary dividends ÷ Number of ordinary shares",
            "Cash paid per share"
          ],
          [
            "Dividend yield",
            "DPS ÷ Market price per share × 100",
            "Income return on the current share price"
          ],
          [
            "Dividend cover",
            "Profit for ordinary shareholders ÷ Ordinary dividends",
            "How many times profit covers the dividend"
          ]
        ]
      }
    },
    {
      "id": "worked-div",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Calculating Dividend Ratios",
        "text": "Ordinary dividends £240 000; 3 000 000 shares; share price £2.00; profit for ordinary shareholders £720 000\n\nDPS = 240 000 ÷ 3 000 000 = 8p\nDividend yield = 8 ÷ 200 × 100 = 4%\nDividend cover = 720 000 ÷ 240 000 = 3 times"
      }
    },
    {
      "id": "h-interpret",
      "type": "heading",
      "data": {
        "text": "Interpretation",
        "level": 2
      }
    },
    {
      "id": "list-interpret",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "A <strong>high yield</strong> attracts income-seeking investors but may mean the share price has fallen because the market doubts the dividend can be maintained."
          },
          {
            "text": "A <strong>high dividend cover</strong> means much profit is retained for reinvestment and the dividend is safe; a cover below 1 means the dividend is being paid partly from past reserves."
          },
          {
            "text": "Growth companies often pay low dividends, preferring to reinvest profits."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Compare With Alternatives",
        "text": "Investors compare dividend yield with interest rates on savings or bonds; if bank interest rises, share prices may fall to push yields up."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate DPS, dividend yield and dividend cover",
            "checked": false
          },
          {
            "text": "Interpret a high and a low dividend yield",
            "checked": false
          },
          {
            "text": "Explain the significance of dividend cover",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "DPS = dividends ÷ shares; dividend yield = DPS ÷ share price × 100; dividend cover = profit for ordinary shareholders ÷ ordinary dividends. A high yield may signal value or risk; cover shows how safe the dividend is."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "DPS = dividends ÷ shares; dividend yield = DPS ÷ share price × 100; dividend cover = profit for ordinary shareholders ÷ ordinary dividends. A high yield may signal value or risk; cover shows how safe the dividend is.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-div",
        "prompt": "State the formula for dividend yield.",
        "answer": "Dividend per share ÷ market price per share × 100."
      },
      {
        "id": "cue-2",
        "blockId": "worked-div",
        "prompt": "DPS 8p, share price £2.00. Calculate the dividend yield.",
        "answer": "4%."
      },
      {
        "id": "cue-3",
        "blockId": "list-interpret",
        "prompt": "What does a dividend cover below 1 indicate?",
        "answer": "The dividend exceeds current profit and is partly paid from past reserves — it may be unsustainable."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_8_2;
