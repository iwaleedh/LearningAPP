/**
 * Seed note: Accounting · Unit 2 · Topic 14 · Subtopic 1
 * "Profit Statement Comparison"
 */

export const note_accounting_2_14_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Prepare profit statements under marginal and absorption costing and reconcile the difference in profit."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Why Profits Differ",
        "level": 2
      }
    },
    {
      "id": "p-why",
      "type": "paragraph",
      "data": {
        "text": "When inventory levels change, the two methods report different profits because absorption costing carries some fixed overhead forward in closing inventory, whereas marginal costing charges all fixed overhead in the period."
      }
    },
    {
      "id": "key-rule",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "The Rule",
        "text": "Inventory rising (production > sales): absorption profit is HIGHER.\nInventory falling (sales > production): marginal profit is HIGHER.\nNo change in inventory: profits are the SAME.\nDifference = Change in inventory (units) × Fixed overhead absorption rate per unit"
      }
    },
    {
      "id": "worked-statements",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Profit Statements",
        "text": "Price £30; variable cost £16; fixed production overhead £40 000 (OAR £4 on 10 000 units). Produced 10 000, sold 9 000, no opening inventory. Ignore non-production costs.\n\nMarginal: Revenue 270 000 − variable cost of sales (9 000 × 16) 144 000 = contribution 126 000 − fixed 40 000 = profit £86 000\nAbsorption: Revenue 270 000 − cost of sales (9 000 × 20) 180 000 = profit £90 000\nDifference £4 000 = 1 000 units × £4 OAR (inventory rose → absorption higher)"
      }
    },
    {
      "id": "h-implications",
      "type": "heading",
      "data": {
        "text": "Implications",
        "level": 2
      }
    },
    {
      "id": "list-implications",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Managers judged on absorption profit could increase profit by over-producing and building inventory — a risk of dysfunctional behaviour."
          },
          {
            "text": "Marginal costing profit moves with sales volume, which many managers find easier to understand."
          },
          {
            "text": "Over the long run, when all inventory is sold, total profit under both methods is the same."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Reconciliation Layout",
        "text": "Start with marginal profit, add (or deduct) the fixed overhead carried forward in the increase (or released by the decrease) in inventory, to reach absorption profit."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Prepare marginal and absorption profit statements",
            "checked": false
          },
          {
            "text": "Explain why profits differ when inventory changes",
            "checked": false
          },
          {
            "text": "Reconcile the two profit figures",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "When inventory rises, absorption costing reports higher profit; when it falls, marginal costing reports higher profit. The difference equals the change in inventory units × fixed OAR per unit."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "When inventory rises, absorption costing reports higher profit; when it falls, marginal costing reports higher profit. The difference equals the change in inventory units × fixed OAR per unit.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "key-rule",
        "prompt": "Production exceeds sales. Which method shows higher profit?",
        "answer": "Absorption costing — some fixed overhead is carried forward in closing inventory."
      },
      {
        "id": "cue-2",
        "blockId": "worked-statements",
        "prompt": "Inventory rises by 1 000 units and the OAR is £4. What is the difference between the two profits?",
        "answer": "£4 000, with absorption profit higher."
      },
      {
        "id": "cue-3",
        "blockId": "list-implications",
        "prompt": "Why might absorption costing encourage over-production?",
        "answer": "Building inventory defers fixed overheads, increasing reported profit for the period."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_14_1;
