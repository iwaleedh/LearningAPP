/**
 * Seed note: Accounting · Unit 2 · Topic 11 · Subtopic 1
 * "Use of International Accounting Standards"
 */

export const note_accounting_2_11_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Describe the role of the IASB and apply key international standards: IAS 2, IAS 16, IAS 37 and IAS 10."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Who Sets the Standards?",
        "level": 2
      }
    },
    {
      "id": "p-iasb",
      "type": "paragraph",
      "data": {
        "text": "The <strong>International Accounting Standards Board (IASB)</strong> issues International Financial Reporting Standards (IFRS) and maintains the older International Accounting Standards (IAS). Many countries require listed companies to use them, so investors can compare companies across borders."
      }
    },
    {
      "id": "h-key",
      "type": "heading",
      "data": {
        "text": "Key Standards to Know",
        "level": 2
      }
    },
    {
      "id": "tbl-standards",
      "type": "comparisonTable",
      "data": {
        "caption": "Selected standards",
        "headers": [
          "Standard",
          "Topic",
          "Key requirement"
        ],
        "rows": [
          [
            "IAS 2",
            "Inventories",
            "Lower of cost and net realisable value; FIFO or weighted average (no LIFO)"
          ],
          [
            "IAS 16",
            "Property, plant and equipment",
            "Initial cost includes costs to bring the asset into use; depreciate over useful life; revaluation allowed"
          ],
          [
            "IAS 37",
            "Provisions and contingencies",
            "Provide for probable obligations that can be reliably measured; disclose possible ones"
          ],
          [
            "IAS 10",
            "Events after the reporting period",
            "Adjust for events giving evidence of conditions at the year end; disclose non-adjusting events"
          ]
        ]
      }
    },
    {
      "id": "worked-ias16",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "IAS 16 — Cost of an Asset",
        "text": "Machine price £40 000; delivery £1 500; installation £2 500; staff training £1 000; first-year insurance £600.\nCapitalised cost = 40 000 + 1 500 + 2 500 = £44 000\nTraining and insurance are revenue expenses."
      }
    },
    {
      "id": "worked-ias10",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "IAS 10 — Adjusting or Not?",
        "text": "After the year end a major customer goes into liquidation; the debt existed at the year end → adjusting event: write off the receivable.\nA fire destroys a warehouse after the year end → non-adjusting: disclose in the notes if material."
      }
    },
    {
      "id": "key-ias37",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "IAS 37 Provisions",
        "text": "Recognise a provision when there is a present obligation from a past event, an outflow is probable, and the amount can be reliably estimated. A <em>contingent liability</em> (possible obligation) is disclosed, not recognised."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Apply, Don't Just Name",
        "text": "Exam questions reward applying the standard to the scenario — state the requirement, then show the accounting effect on the statements."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain the role of the IASB",
            "checked": false
          },
          {
            "text": "Apply IAS 2, IAS 16, IAS 37 and IAS 10 to scenarios",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "The IASB issues IFRS/IAS so accounts are comparable internationally. Key standards: IAS 2 inventories (lower of cost and NRV), IAS 16 PPE (capitalise costs to bring into use), IAS 37 provisions (probable, measurable obligations) and IAS 10 events after the reporting period."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "The IASB issues IFRS/IAS so accounts are comparable internationally. Key standards: IAS 2 inventories (lower of cost and NRV), IAS 16 PPE (capitalise costs to bring into use), IAS 37 provisions (probable, measurable obligations) and IAS 10 events after the reporting period.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "worked-ias16",
        "prompt": "Which costs are capitalised under IAS 16: price, delivery, installation, training, insurance?",
        "answer": "Price, delivery and installation; training and insurance are expensed."
      },
      {
        "id": "cue-2",
        "blockId": "key-ias37",
        "prompt": "State the three conditions for recognising a provision under IAS 37.",
        "answer": "Present obligation from a past event, probable outflow, reliable estimate."
      },
      {
        "id": "cue-3",
        "blockId": "worked-ias10",
        "prompt": "Is a fire destroying a warehouse after the year end an adjusting event?",
        "answer": "No — it is non-adjusting; disclose in the notes if material."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_2_11_1;
