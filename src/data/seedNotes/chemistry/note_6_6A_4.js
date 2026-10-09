/**
 * Seed note: Chemistry · Unit 6 · Topic 6A · Subtopic 4
 * "Data handling and uncertainty"
 */

export const note_chemistry_6_6A_4 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Calculate measurement uncertainties for chemistry apparatus, combine them, and process titration and enthalpy data to an appropriate precision."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Apparatus Uncertainties",
        "level": 2
      }
    },
    {
      "id": "tbl-apparatus",
      "type": "comparisonTable",
      "data": {
        "caption": "Typical uncertainties",
        "headers": [
          "Apparatus",
          "Uncertainty per reading",
          "Notes"
        ],
        "rows": [
          [
            "Burette",
            "±0.05 cm³",
            "Titre uses two readings → ±0.10 cm³"
          ],
          [
            "Pipette (25.0 cm³, class B)",
            "±0.06 cm³",
            "Single measurement"
          ],
          [
            "Volumetric flask (250 cm³)",
            "±0.3 cm³",
            "Single measurement"
          ],
          [
            "Two-decimal balance",
            "±0.005 g",
            "Mass by difference uses two readings → ±0.01 g"
          ],
          [
            "Thermometer (1 °C divisions)",
            "±0.5 °C",
            "Temperature change uses two readings → ±1 °C"
          ]
        ]
      }
    },
    {
      "id": "key-percent",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Percentage Uncertainty",
        "text": "Percentage uncertainty = (total uncertainty ÷ measured value) × 100%.\nFor a final calculated result, add the percentage uncertainties of the measurements used."
      }
    },
    {
      "id": "worked-titration",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Titration Uncertainty",
        "text": "Titre = 24.40 cm³; burette uncertainty ±0.05 per reading → ±0.10 cm³\nPercentage uncertainty = 0.10 ÷ 24.40 × 100 = 0.41%\nPipette 25.0 ± 0.06 cm³ → 0.24%\nTotal ≈ 0.65% (plus any other measured quantities)"
      }
    },
    {
      "id": "h-titres",
      "type": "heading",
      "data": {
        "text": "Processing Titration Results",
        "level": 2
      }
    },
    {
      "id": "list-titres",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Record burette readings to <strong>two decimal places</strong>, ending in 0 or 5."
          },
          {
            "text": "Use only <strong>concordant titres</strong> (within 0.10 cm³ of each other) to calculate the mean; ignore the rough titre."
          },
          {
            "text": "Give the final answer to a number of significant figures consistent with the data (usually 3 or 4)."
          }
        ]
      }
    },
    {
      "id": "h-reduce",
      "type": "heading",
      "data": {
        "text": "Reducing Uncertainty",
        "level": 2
      }
    },
    {
      "id": "p-reduce",
      "type": "paragraph",
      "data": {
        "text": "Uncertainty is reduced by measuring <strong>larger quantities</strong> (a larger titre or a bigger temperature change), using more precise apparatus, or repeating to obtain concordant results. In enthalpy experiments, the largest error is often <strong>heat loss</strong> — a systematic error reduced by insulation and by extrapolating a temperature–time graph back to the time of mixing."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Systematic vs Random",
        "text": "Heat loss always makes ΔH less exothermic than the true value — it is systematic, so repeating does not remove it."
      }
    },
    {
      "id": "callout-tip-1",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Percentage Uncertainties Compound — Always State Absolute Uncertainties First",
        "text": "Students frequently forget that percentage uncertainties of individual measurements are added (not averaged) to give total percentage uncertainty. Read the uncertainty from apparatus (burette ±0.05 cm³), calculate percentage, write it clearly: 'Total ±X%' before calculating absolute uncertainty in final answer."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "State uncertainties of common apparatus",
            "checked": false
          },
          {
            "text": "Calculate the percentage uncertainty of a titre or temperature change",
            "checked": false
          },
          {
            "text": "Select concordant titres and quote results to appropriate significant figures",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Burette ±0.05 cm³ per reading (titre ±0.10), balance and thermometer uncertainties double for differences. Add percentage uncertainties for a final result, use concordant titres within 0.10 cm³, and reduce uncertainty by measuring larger quantities and minimising heat loss."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Burette ±0.05 cm³ per reading (titre ±0.10), balance and thermometer uncertainties double for differences. Add percentage uncertainties for a final result, use concordant titres within 0.10 cm³, and reduce uncertainty by measuring larger quantities and minimising heat loss.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-apparatus",
        "prompt": "What is the uncertainty in a titre from a burette read to ±0.05 cm³?",
        "answer": "±0.10 cm³ (two readings)."
      },
      {
        "id": "cue-2",
        "blockId": "worked-titration",
        "prompt": "Calculate the percentage uncertainty in a titre of 24.40 cm³.",
        "answer": "0.10 ÷ 24.40 × 100 = 0.41%."
      },
      {
        "id": "cue-3",
        "blockId": "p-reduce",
        "prompt": "How can the effect of heat loss be reduced in an enthalpy experiment?",
        "answer": "Insulate the container and extrapolate a temperature–time graph back to the time of mixing."
      }
    ]
  },
  "evidence": []
};

export default note_chemistry_6_6A_4;
