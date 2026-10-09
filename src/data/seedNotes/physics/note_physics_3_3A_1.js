/**
 * Seed note: Physics · Unit 3 · Topic 3A · Subtopic 1
 * "Analysing results and evaluating experiments"
 */

export const note_physics_3_3A_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Plot graphs correctly, determine gradients and intercepts, and evaluate experiments by identifying sources of error and suggesting improvements."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Plotting a Good Graph",
        "level": 2
      }
    },
    {
      "id": "list-graph",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Independent variable on the x-axis, dependent on the y-axis, with labelled axes and units."
          },
          {
            "text": "Choose scales so the plotted points cover <strong>at least half the grid</strong> in each direction; avoid awkward scales such as multiples of 3."
          },
          {
            "text": "Plot points accurately (to within half a small square) with small crosses."
          },
          {
            "text": "Draw a single straight line or smooth curve of best fit — not dot-to-dot."
          }
        ]
      }
    },
    {
      "id": "h-gradient",
      "type": "heading",
      "data": {
        "text": "Gradients and Intercepts",
        "level": 2
      }
    },
    {
      "id": "p-gradient",
      "type": "paragraph",
      "data": {
        "text": "Use a <strong>large triangle</strong> (at least half the length of the line) to find the gradient, reading points that lie on the line, not data points. The gradient has units of y-unit ÷ x-unit."
      }
    },
    {
      "id": "worked-gradient",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Using the Gradient",
        "text": "For a simple pendulum T² = (4π²/g) l, so a graph of T² against l is a straight line through the origin with gradient 4π²/g.\nGradient from graph = 4.02 s² m⁻¹\ng = 4π² ÷ 4.02 = 9.82 m s⁻²"
      }
    },
    {
      "id": "h-evaluate",
      "type": "heading",
      "data": {
        "text": "Evaluating the Experiment",
        "level": 2
      }
    },
    {
      "id": "tbl-errors",
      "type": "comparisonTable",
      "data": {
        "caption": "Random vs systematic errors",
        "headers": [
          "",
          "Random error",
          "Systematic error"
        ],
        "rows": [
          [
            "Effect",
            "Readings scatter either side of the true value",
            "All readings shifted in the same direction"
          ],
          [
            "Examples",
            "Reaction time, fluctuating readings",
            "Zero error, incorrectly calibrated meter, parallax in the same direction"
          ],
          [
            "Reduced by",
            "Repeating and averaging; larger measurements",
            "Correcting zero errors, calibrating, improving technique"
          ],
          [
            "On a graph",
            "Points scatter about the line",
            "Line has an unexpected intercept"
          ]
        ]
      }
    },
    {
      "id": "tip-improve",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Specific Improvements",
        "text": "Vague answers such as \"be more careful\" score nothing. Give a specific improvement linked to a specific error, e.g. \"use a light gate and data logger to remove reaction-time error\"."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Plot a graph with suitable scales and a line of best fit",
            "checked": false
          },
          {
            "text": "Calculate a gradient using a large triangle",
            "checked": false
          },
          {
            "text": "Distinguish random and systematic errors and suggest improvements",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Plot graphs with labelled axes, sensible scales covering at least half the grid, and a best-fit line; find gradients with a large triangle. Random errors cause scatter and are reduced by repeats; systematic errors shift all readings and show as unexpected intercepts."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Plot graphs with labelled axes, sensible scales covering at least half the grid, and a best-fit line; find gradients with a large triangle. Random errors cause scatter and are reduced by repeats; systematic errors shift all readings and show as unexpected intercepts.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-gradient",
        "prompt": "How should you measure the gradient of a best-fit line?",
        "answer": "Use a large triangle (at least half the line) with points read from the line, not from the data."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-errors",
        "prompt": "How would a zero error show up on a straight-line graph that should pass through the origin?",
        "answer": "As a non-zero intercept — it is a systematic error."
      },
      {
        "id": "cue-3",
        "blockId": "tip-improve",
        "prompt": "Suggest a specific improvement to reduce reaction-time error in timing.",
        "answer": "Use light gates with a data logger (or time more oscillations)."
      }
    ]
  },
  "evidence": []
};

export default note_physics_3_3A_1;
