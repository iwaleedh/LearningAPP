/**
 * Seed note: Accounting · Unit 1 · Topic 4 · Subtopic 2
 * "Perpetual vs periodic inventory valuation"
 */

export const note_accounting_1_4_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Distinguish between perpetual and periodic inventory systems and explain how each affects inventory valuation and control."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Two Ways to Track Inventory",
        "level": 2
      }
    },
    {
      "id": "tbl-systems",
      "type": "comparisonTable",
      "data": {
        "caption": "Perpetual and periodic systems",
        "headers": [
          "Feature",
          "Perpetual system",
          "Periodic system"
        ],
        "rows": [
          [
            "Recording",
            "Inventory records updated after every receipt and issue",
            "Inventory counted only at the end of the period"
          ],
          [
            "Cost of sales",
            "Known continuously",
            "Calculated at the year end: opening + purchases − closing"
          ],
          [
            "Valuation",
            "Running FIFO or AVCO valuation after each movement",
            "Method applied once to the year-end count"
          ],
          [
            "Control",
            "Book quantity can be compared with physical counts to reveal losses",
            "Losses are hidden inside cost of sales"
          ],
          [
            "Cost",
            "Higher — usually needs an inventory system or software",
            "Lower and simpler"
          ]
        ]
      }
    },
    {
      "id": "h-avco",
      "type": "heading",
      "data": {
        "text": "Perpetual Records and AVCO",
        "level": 2
      }
    },
    {
      "id": "p-avco",
      "type": "paragraph",
      "data": {
        "text": "In a perpetual system using AVCO, a new average cost is calculated <strong>after each purchase</strong>, and every issue is costed at the latest average. In a periodic system the average is usually calculated once for the whole period (total cost of goods available ÷ total units). The two approaches can therefore give slightly different closing inventory values."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Periodic Weighted Average",
        "text": "Opening: 100 @ £4 = £400; Purchases: 200 @ £5 = £1 000 and 100 @ £6 = £600\nGoods available: 400 units costing £2 000 → average £5.00\nClosing count: 220 units → closing inventory 220 × £5.00 = £1 100\n(The perpetual AVCO figure for the same data was £1 160.)"
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Stock Discrepancies",
        "level": 2
      }
    },
    {
      "id": "p-shrink",
      "type": "paragraph",
      "data": {
        "text": "Under a perpetual system the inventory record shows what <em>should</em> be in stock. A physical count that is lower reveals <strong>shrinkage</strong> (theft, damage, recording errors), which can be investigated and written off. This is a key advantage for internal control."
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Exam Technique",
        "text": "When asked to recommend a system, link your answer to the business: a supermarket with barcode scanning benefits from a perpetual system; a small business with few, low-value items may find a periodic count adequate."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Describe perpetual and periodic systems",
            "checked": false
          },
          {
            "text": "Explain why perpetual and periodic AVCO can differ",
            "checked": false
          },
          {
            "text": "Explain how perpetual records help detect inventory losses",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "A perpetual system updates inventory records after every movement, giving continuous cost of sales and strong control over shrinkage. A periodic system relies on a year-end count and calculates cost of sales as opening + purchases − closing."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "A perpetual system updates inventory records after every movement, giving continuous cost of sales and strong control over shrinkage. A periodic system relies on a year-end count and calculates cost of sales as opening + purchases − closing.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-systems",
        "prompt": "How is cost of sales found under a periodic inventory system?",
        "answer": "Opening inventory + purchases − closing inventory (counted at the year end)."
      },
      {
        "id": "cue-2",
        "blockId": "p-avco",
        "prompt": "Why can perpetual and periodic AVCO give different closing inventory values?",
        "answer": "Perpetual AVCO recalculates the average after every purchase and costs each issue at that point; periodic AVCO uses one average for the whole period."
      },
      {
        "id": "cue-3",
        "blockId": "p-shrink",
        "prompt": "What is the main control advantage of a perpetual inventory system?",
        "answer": "Book quantities can be compared with physical counts, revealing shrinkage such as theft or damage."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_4_2;
