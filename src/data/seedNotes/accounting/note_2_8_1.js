/**
 * Seed note: Accounting · Unit 2 · Topic 8 · Subtopic 1
 * "Price/earnings ratio"
 */

export const note_accounting_2_8_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate and interpret the price/earnings (P/E) ratio and explain what it reveals about market expectations."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "The P/E Ratio",
        "level": 2
      }
    },
    {
      "id": "key-pe",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Formula",
        "text": "P/E ratio = Market price per ordinary share ÷ Earnings per share"
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "The P/E ratio shows how many years of current earnings an investor is paying for. It reflects the market's <strong>confidence in future growth</strong> and the perceived risk of the company."
      }
    },
    {
      "id": "worked-pe",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Calculating P/E",
        "text": "Share price £4.80; EPS 32p\nP/E = 480 ÷ 32 = 15 times\nInvestors are paying 15 times current annual earnings."
      }
    },
    {
      "id": "h-interpret",
      "type": "heading",
      "data": {
        "text": "Interpreting P/E",
        "level": 2
      }
    },
    {
      "id": "tbl-pe",
      "type": "comparisonTable",
      "data": {
        "caption": "High vs low P/E",
        "headers": [
          "High P/E",
          "Low P/E"
        ],
        "rows": [
          [
            "Market expects strong future earnings growth",
            "Market expects low growth or falling profits"
          ],
          [
            "Company seen as lower risk",
            "Company seen as higher risk"
          ],
          [
            "Shares may be overvalued if expectations are not met",
            "Shares may be undervalued — a possible buying opportunity"
          ]
        ]
      }
    },
    {
      "id": "p-compare",
      "type": "paragraph",
      "data": {
        "text": "Compare P/E ratios only between companies in the <strong>same industry</strong>; technology companies typically have higher P/E ratios than utilities because of different growth prospects."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Limitations",
        "text": "EPS is based on past (historic) profit while the share price looks to the future. One-off gains or losses distort EPS and therefore the P/E ratio."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Calculate the P/E ratio",
            "checked": false
          },
          {
            "text": "Explain what a high and a low P/E indicate",
            "checked": false
          },
          {
            "text": "State limitations of the P/E ratio",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "P/E = share price ÷ EPS. A high P/E reflects expectations of growth and low risk; a low P/E suggests low growth or high risk. Compare only within the same industry and beware distortions from one-off items."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "P/E = share price ÷ EPS. A high P/E reflects expectations of growth and low risk; a low P/E suggests low growth or high risk. Compare only within the same industry and beware distortions from one-off items.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "key-pe",
        "prompt": "State the formula for the P/E ratio.",
        "answer": "Market price per share ÷ earnings per share."
      },
      {
        "id": "cue-2",
        "blockId": "worked-pe",
        "prompt": "Share price £4.80, EPS 32p. Calculate the P/E ratio.",
        "answer": "15 times."
      },
      {
        "id": "cue-3",
        "blockId": "tbl-pe",
        "prompt": "What does a high P/E ratio suggest about market expectations?",
        "answer": "Investors expect strong future earnings growth and/or see the company as low risk."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_8_1;
