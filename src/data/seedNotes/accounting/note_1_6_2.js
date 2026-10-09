/**
 * Seed note: Accounting · Unit 1 · Topic 6 · Subtopic 2
 * "Sustainability Reporting"
 */

export const note_accounting_1_6_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Explain the purpose of sustainability reporting, describe the triple bottom line, and evaluate the usefulness of non-financial reporting."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Beyond Financial Statements",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "Traditional financial statements measure profit and financial position but ignore many effects of a business on society and the environment. <strong>Sustainability reporting</strong> discloses environmental, social and governance (ESG) performance alongside the financial results."
      }
    },
    {
      "id": "h-tbl",
      "type": "heading",
      "data": {
        "text": "The Triple Bottom Line",
        "level": 2
      }
    },
    {
      "id": "tbl-tbl",
      "type": "comparisonTable",
      "data": {
        "caption": "People, planet, profit",
        "headers": [
          "Dimension",
          "What is measured",
          "Example indicators"
        ],
        "rows": [
          [
            "Profit (economic)",
            "Financial performance and economic contribution",
            "Profit, taxes paid, local spending"
          ],
          [
            "People (social)",
            "Impact on employees and communities",
            "Staff turnover, accident rates, training hours, community investment"
          ],
          [
            "Planet (environmental)",
            "Impact on natural resources",
            "Carbon emissions, energy use, waste recycled, water consumption"
          ]
        ]
      }
    },
    {
      "id": "h-2",
      "type": "heading",
      "data": {
        "text": "Why Businesses Report",
        "level": 2
      }
    },
    {
      "id": "list-why",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Investors increasingly assess ESG risks when allocating capital."
          },
          {
            "text": "Customers and employees prefer responsible businesses."
          },
          {
            "text": "Regulators in many countries require climate-related disclosures from large companies."
          },
          {
            "text": "Measuring impacts helps management set targets and reduce costs such as energy use."
          }
        ]
      }
    },
    {
      "id": "h-limits",
      "type": "heading",
      "data": {
        "text": "Limitations",
        "level": 2
      }
    },
    {
      "id": "list-limits",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Indicators are often non-financial and hard to compare between companies."
          },
          {
            "text": "Reports may be selective or unaudited, creating a risk of greenwashing."
          },
          {
            "text": "Collecting the data adds cost."
          }
        ]
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Linking to Accounting",
        "text": "Sustainability issues can also affect the financial statements directly — for example, impairment of assets that will be stranded by climate regulation, or provisions for environmental clean-up costs."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain the triple bottom line",
            "checked": false
          },
          {
            "text": "Give reasons why companies publish sustainability reports",
            "checked": false
          },
          {
            "text": "Evaluate the limitations of sustainability reporting",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Sustainability reporting discloses environmental, social and governance performance using the triple bottom line of people, planet and profit. It meets investor and regulatory demands but can be hard to compare and may be selective."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Sustainability reporting discloses environmental, social and governance performance using the triple bottom line of people, planet and profit. It meets investor and regulatory demands but can be hard to compare and may be selective.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-tbl",
        "prompt": "What are the three elements of the triple bottom line?",
        "answer": "People (social), planet (environmental) and profit (economic)."
      },
      {
        "id": "cue-2",
        "blockId": "list-why",
        "prompt": "Give two reasons why a company publishes a sustainability report.",
        "answer": "E.g. investor ESG demands, customer/employee expectations, regulation, helps management reduce costs."
      },
      {
        "id": "cue-3",
        "blockId": "list-limits",
        "prompt": "State one limitation of sustainability reporting.",
        "answer": "E.g. hard to compare, may be selective or unaudited (greenwashing), costly to collect data."
      }
    ]
  },
  "evidence": []
};

export default note_accounting_1_6_2;
