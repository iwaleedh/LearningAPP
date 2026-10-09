/**
 * Seed note: Physics · Unit 3 · Topic 3A · Subtopic 2
 * "Uncertainty and error analysis"
 */

export const note_physics_3_3A_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Estimate absolute and percentage uncertainties, combine them in calculations, and compare experimental results with accepted values."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Absolute and Percentage Uncertainty",
        "level": 2
      }
    },
    {
      "id": "p-uncertainty",
      "type": "paragraph",
      "data": {
        "text": "The <strong>absolute uncertainty</strong> is the range within which the true value is likely to lie, e.g. 25.0 ± 0.1 cm. The <strong>percentage uncertainty</strong> = (absolute uncertainty ÷ measured value) × 100%."
      }
    },
    {
      "id": "list-estimate",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Single reading from a scale: uncertainty ≈ ± half the smallest division (or ± the resolution of a digital instrument)."
          },
          {
            "text": "Length found from two readings on a rule: uncertainty ≈ ± one division (two half-divisions)."
          },
          {
            "text": "Repeated readings: uncertainty ≈ ± half the range of the readings."
          }
        ]
      }
    },
    {
      "id": "h-combine",
      "type": "heading",
      "data": {
        "text": "Combining Uncertainties",
        "level": 2
      }
    },
    {
      "id": "tbl-rules",
      "type": "comparisonTable",
      "data": {
        "caption": "Rules for combining uncertainties",
        "headers": [
          "Operation",
          "Rule"
        ],
        "rows": [
          [
            "Adding or subtracting quantities",
            "Add the absolute uncertainties"
          ],
          [
            "Multiplying or dividing quantities",
            "Add the percentage uncertainties"
          ],
          [
            "Raising to a power n",
            "Multiply the percentage uncertainty by n"
          ]
        ]
      }
    },
    {
      "id": "worked-sphere",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Density of a Sphere",
        "text": "Mass m = 45.0 ± 0.1 g → 0.22%\nDiameter d = 2.20 ± 0.01 cm → 0.45%\nVolume ∝ d³ → 3 × 0.45% = 1.36%\nDensity = m ÷ V → total uncertainty = 0.22% + 1.36% ≈ 1.6%"
      }
    },
    {
      "id": "h-compare",
      "type": "heading",
      "data": {
        "text": "Comparing With an Accepted Value",
        "level": 2
      }
    },
    {
      "id": "p-compare",
      "type": "paragraph",
      "data": {
        "text": "Percentage difference = |experimental value − accepted value| ÷ accepted value × 100%. If the percentage difference is <strong>smaller than the percentage uncertainty</strong>, the result is consistent with the accepted value."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Significant Figures",
        "text": "Quote a final answer to the same number of significant figures as the least precise raw data, and give uncertainties to one (or at most two) significant figures."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Estimate the uncertainty in a reading",
            "checked": false
          },
          {
            "text": "Combine uncertainties for sums, products and powers",
            "checked": false
          },
          {
            "text": "Judge whether a result agrees with an accepted value",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Uncertainty can be absolute or percentage. Add absolute uncertainties for sums and differences, add percentage uncertainties for products and quotients, and multiply by n for powers. A result agrees with the accepted value if the percentage difference is within the percentage uncertainty."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Uncertainty can be absolute or percentage. Add absolute uncertainties for sums and differences, add percentage uncertainties for products and quotients, and multiply by n for powers. A result agrees with the accepted value if the percentage difference is within the percentage uncertainty.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-uncertainty",
        "prompt": "How is percentage uncertainty calculated?",
        "answer": "Absolute uncertainty ÷ measured value × 100%."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-rules",
        "prompt": "How are uncertainties combined when quantities are multiplied, and when a quantity is cubed?",
        "answer": "Add percentage uncertainties; for a cube multiply the percentage uncertainty by 3."
      },
      {
        "id": "cue-3",
        "blockId": "p-compare",
        "prompt": "When is an experimental result consistent with an accepted value?",
        "answer": "When the percentage difference is smaller than the percentage uncertainty."
      }
    ]
  },
  "evidence": []
};

export default note_physics_3_3A_2;
