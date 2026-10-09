/**
 * Seed note: Chemistry · Unit 6 · Topic 6A · Subtopic 0
 * "Unit 4 and 5 practical methods"
 */

export const note_chemistry_6_6A_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Describe the key practical techniques from Units 4 and 5: measuring rates, determining Ka by titration, redox titrations, and preparing and purifying organic solids."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Rates of Reaction",
        "level": 2
      }
    },
    {
      "id": "list-rates",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "<strong>Continuous monitoring</strong>: measure a property over time — gas volume (gas syringe), mass loss, or colour change (colorimeter) — and find the rate from the gradient of a tangent."
          },
          {
            "text": "<strong>Initial rates / clock reactions</strong>: e.g. the iodine clock; time how long a fixed amount of product takes to form. Rate ∝ 1/time."
          },
          {
            "text": "Vary one concentration at a time to find the order with respect to each reactant."
          }
        ]
      }
    },
    {
      "id": "h-acid",
      "type": "heading",
      "data": {
        "text": "Acid–Base Methods",
        "level": 2
      }
    },
    {
      "id": "p-ka",
      "type": "paragraph",
      "data": {
        "text": "To find <strong>Ka</strong> of a weak acid, titrate it with NaOH while recording pH, or half-neutralise a measured volume. At half-neutralisation [HA] = [A⁻], so <strong>pH = pKa</strong>. A calibrated pH meter is needed; calibrate with buffer solutions of known pH."
      }
    },
    {
      "id": "h-redox",
      "type": "heading",
      "data": {
        "text": "Redox Titrations",
        "level": 2
      }
    },
    {
      "id": "tbl-redox",
      "type": "comparisonTable",
      "data": {
        "caption": "Common redox titrations",
        "headers": [
          "Titration",
          "Key reaction",
          "End point"
        ],
        "rows": [
          [
            "Potassium manganate(VII) with Fe²⁺",
            "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
            "First permanent pale pink colour (self-indicating)"
          ],
          [
            "Iodine–thiosulfate",
            "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
            "Add starch near the end (blue-black) → colourless"
          ]
        ]
      }
    },
    {
      "id": "warn-acid",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Acidify With Sulfuric Acid",
        "text": "Use dilute sulfuric acid in manganate(VII) titrations. Hydrochloric acid would be oxidised to chlorine, using up extra MnO₄⁻ and giving a titre that is too large."
      }
    },
    {
      "id": "h-organic",
      "type": "heading",
      "data": {
        "text": "Organic Preparations",
        "level": 2
      }
    },
    {
      "id": "list-organic",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "Heat under reflux to allow the reaction to go to completion without losing volatile substances."
          },
          {
            "text": "Isolate the crude solid by filtration under reduced pressure."
          },
          {
            "text": "Purify by recrystallisation: dissolve in minimum hot solvent, filter hot, cool, filter, wash with cold solvent and dry."
          },
          {
            "text": "Check purity by melting point — a pure solid melts sharply at the data-book value."
          }
        ]
      }
    },
    {
      "id": "callout-tip-1",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Apparatus Calibration Often Overlooked",
        "text": "In Unit 4/5 practical work, students frequently forget to calibrate instruments such as pH meters, thermometers, and gas syringes before use. Examiners specifically mark apparatus errors in method descriptions and error evaluation."
      }
    },
    {
      "id": "callout-tip-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Record Initial Observations Before Reaction",
        "text": "Always note the initial colour, temperature, and physical state (solid/liquid/gas) of ALL reactants before mixing. Examiners expect detailed descriptions of the reaction sequence and final observations — omitting initial state is a common error costing marks."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Describe continuous-monitoring and initial-rate methods",
            "checked": false
          },
          {
            "text": "Explain how pH = pKa at half-neutralisation",
            "checked": false
          },
          {
            "text": "Describe manganate(VII) and iodine–thiosulfate titrations",
            "checked": false
          },
          {
            "text": "Outline recrystallisation and melting-point checks",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Key WCH14/15 methods: continuous monitoring and clock reactions for rates; pH titrations and half-neutralisation (pH = pKa) for Ka; self-indicating manganate(VII) and starch-indicated iodine–thiosulfate titrations; reflux, filtration, recrystallisation and melting point for organic solids."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Key WCH14/15 methods: continuous monitoring and clock reactions for rates; pH titrations and half-neutralisation (pH = pKa) for Ka; self-indicating manganate(VII) and starch-indicated iodine–thiosulfate titrations; reflux, filtration, recrystallisation and melting point for organic solids.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-ka",
        "prompt": "Why does pH equal pKa at half-neutralisation of a weak acid?",
        "answer": "[HA] = [A⁻], so the ratio in Ka = [H⁺][A⁻]/[HA] cancels and Ka = [H⁺]."
      },
      {
        "id": "cue-2",
        "blockId": "warn-acid",
        "prompt": "Why is hydrochloric acid not used to acidify manganate(VII) titrations?",
        "answer": "Cl⁻ is oxidised to chlorine by MnO₄⁻, increasing the titre."
      },
      {
        "id": "cue-3",
        "blockId": "list-organic",
        "prompt": "Outline the steps of recrystallisation.",
        "answer": "Dissolve in minimum hot solvent, filter hot, cool to crystallise, filter under reduced pressure, wash with cold solvent, dry."
      }
    ]
  },
  "evidence": []
};

export default note_chemistry_6_6A_0;
