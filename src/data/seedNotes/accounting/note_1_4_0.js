/**
 * Seed note: Accounting · Unit 1 · Topic 4 · Subtopic 0
 * "FIFO, LIFO and NRV methods"
 */

export const note_accounting_1_4_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Value closing inventory using FIFO and AVCO, explain why LIFO is not permitted under IAS 2, and apply the lower of cost and net realisable value rule."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Why Inventory Valuation Matters",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Closing inventory is deducted in the cost of sales calculation, so its value directly affects <strong>gross profit</strong> and the <strong>current assets</strong> on the statement of financial position. When identical items are bought at different prices, a business needs a consistent method for deciding which cost each unit carries."
      }
    },
    {
      "id": "h-methods",
      "type": "heading",
      "data": {
        "text": "The Main Cost Methods",
        "level": 2
      }
    },
    {
      "id": "tbl-methods",
      "type": "comparisonTable",
      "data": {
        "caption": "Inventory cost-flow methods",
        "headers": [
          "Method",
          "Assumption",
          "Closing inventory valued at",
          "Allowed under IAS 2?"
        ],
        "rows": [
          [
            "FIFO (first in, first out)",
            "Oldest items are issued first",
            "Most recent purchase prices",
            "Yes"
          ],
          [
            "AVCO (weighted average cost)",
            "Each issue is at the average cost of units held",
            "A recalculated average after each purchase",
            "Yes"
          ],
          [
            "LIFO (last in, first out)",
            "Newest items are issued first",
            "Oldest purchase prices",
            "No — prohibited"
          ]
        ]
      }
    },
    {
      "id": "warn-lifo",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "LIFO and IAS 2",
        "text": "IAS 2 <em>Inventories</em> does <strong>not</strong> permit LIFO. In rising prices LIFO charges the newest (highest) costs to cost of sales and leaves out-of-date costs in the statement of financial position, which understates both profit and the asset. You may still be asked to <em>calculate</em> LIFO to compare methods."
      }
    },
    {
      "id": "worked-fifo",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "FIFO — Worked Example",
        "text": "Opening inventory: 100 units @ £4\n1 March: bought 200 units @ £5\n10 March: sold 180 units\n20 March: bought 100 units @ £6\n\nIssue on 10 March (FIFO): 100 @ £4 + 80 @ £5 = £800\nClosing inventory: 120 @ £5 + 100 @ £6 = £600 + £600 = £1 200"
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "AVCO — Same Data",
        "text": "After 1 March: 300 units costing £400 + £1 000 = £1 400 → average £4.667\n10 March issue: 180 × £4.667 = £840; left 120 units = £560\n20 March: + 100 @ £6 = £600 → 220 units costing £1 160 → average £5.273\nClosing inventory (AVCO) = £1 160"
      }
    },
    {
      "id": "h-nrv",
      "type": "heading",
      "data": {
        "text": "Lower of Cost and Net Realisable Value",
        "level": 2
      }
    },
    {
      "id": "p-nrv",
      "type": "paragraph",
      "data": {
        "text": "IAS 2 requires inventory to be valued at the <strong>lower of cost and net realisable value (NRV)</strong>. NRV is the expected selling price <em>less</em> any costs to complete and sell the item. This applies the <strong>prudence</strong> concept: losses are recognised as soon as they are foreseen."
      }
    },
    {
      "id": "callout-2",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "NRV Adjustment",
        "text": "A batch of damaged goods cost £2 500. It can be sold for £2 200 after £400 of repairs.\nNRV = £2 200 − £400 = £1 800\nLower of cost (£2 500) and NRV (£1 800) → value at £1 800\nThe £700 write-down reduces closing inventory and therefore reduces gross profit."
      }
    },
    {
      "id": "callout-3",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Compare Item by Item",
        "text": "Apply the cost/NRV comparison to each item or group of similar items separately — not to the inventory total — otherwise gains on one line hide losses on another."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Value closing inventory using FIFO and AVCO",
            "checked": false
          },
          {
            "text": "Explain why LIFO is prohibited by IAS 2",
            "checked": false
          },
          {
            "text": "Calculate NRV and apply the lower of cost and NRV rule",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Inventory is valued using FIFO or AVCO (LIFO is prohibited by IAS 2). Each item is then valued at the lower of cost and net realisable value (selling price less costs to complete and sell), applying prudence."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Inventory is valued using FIFO or AVCO (LIFO is prohibited by IAS 2). Each item is then valued at the lower of cost and net realisable value (selling price less costs to complete and sell), applying prudence.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-methods",
        "prompt": "In a period of rising prices, which method gives the highest closing inventory: FIFO, AVCO or LIFO?",
        "answer": "FIFO — closing inventory is valued at the most recent (highest) prices."
      },
      {
        "id": "cue-2",
        "blockId": "warn-lifo",
        "prompt": "Why does IAS 2 prohibit LIFO?",
        "answer": "It leaves out-of-date costs in the statement of financial position and does not reflect the actual flow of goods, understating the asset (and profit when prices rise)."
      },
      {
        "id": "cue-3",
        "blockId": "p-nrv",
        "prompt": "Define net realisable value and state the IAS 2 valuation rule.",
        "answer": "NRV = expected selling price − costs to complete and sell. Inventory is valued at the lower of cost and NRV."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_4_0;
