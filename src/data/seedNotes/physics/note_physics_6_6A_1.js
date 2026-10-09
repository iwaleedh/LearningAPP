/**
 * Seed note: Physics · Unit 6 · Topic 6A · Subtopic 1
 * "Data analysis, graphs and linearisation"
 */

export const note_physics_6_6A_1 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Linearise relationships to produce straight-line graphs, including logarithmic plots, and extract physical constants from gradients and intercepts."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Why Linearise?",
        "level": 2
      }
    },
    {
      "id": "p-why",
      "type": "paragraph",
      "data": {
        "text": "A straight-line graph makes it easy to test a relationship and find constants from the <strong>gradient</strong> and <strong>intercept</strong>. Rearrange the equation into the form <strong>y = mx + c</strong> and plot the matching quantities."
      }
    },
    {
      "id": "tbl-linear",
      "type": "comparisonTable",
      "data": {
        "caption": "Common linearisations",
        "headers": [
          "Relationship",
          "Plot y",
          "Against x",
          "Gradient",
          "Intercept"
        ],
        "rows": [
          [
            "T = 2π√(l/g)",
            "T²",
            "l",
            "4π²/g",
            "0"
          ],
          [
            "v² = u² + 2as",
            "v²",
            "s",
            "2a",
            "u²"
          ],
          [
            "V = ε − Ir",
            "V",
            "I",
            "−r",
            "ε"
          ],
          [
            "y = k xⁿ (power law)",
            "ln y",
            "ln x",
            "n",
            "ln k"
          ],
          [
            "N = N₀ e^(−λt) (exponential)",
            "ln N",
            "t",
            "−λ",
            "ln N₀"
          ]
        ]
      }
    },
    {
      "id": "h-log",
      "type": "heading",
      "data": {
        "text": "Logarithmic Graphs",
        "level": 2
      }
    },
    {
      "id": "p-log",
      "type": "paragraph",
      "data": {
        "text": "Taking natural logs of a power law y = kxⁿ gives <strong>ln y = n ln x + ln k</strong>: a straight line whose gradient is the power n. An exponential N = N₀e^(−λt) gives <strong>ln N = −λt + ln N₀</strong>, so the gradient is −λ. Log quantities have no units."
      }
    },
    {
      "id": "worked-decay",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Finding a Decay Constant",
        "text": "A graph of ln(count rate) against t (in s) has gradient −0.0231 s⁻¹.\nλ = 0.0231 s⁻¹\nHalf-life = ln 2 ÷ λ = 0.693 ÷ 0.0231 = 30 s"
      }
    },
    {
      "id": "h-gradient-unc",
      "type": "heading",
      "data": {
        "text": "Uncertainty in the Gradient",
        "level": 2
      }
    },
    {
      "id": "p-worst",
      "type": "paragraph",
      "data": {
        "text": "Draw error bars, then a <strong>line of best fit</strong> and a <strong>worst acceptable line</strong> that passes through all the error bars. Percentage uncertainty in the gradient = |best gradient − worst gradient| ÷ best gradient × 100%."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Check the Units",
        "text": "Gradient units come from the axes: a graph of T² (s²) against l (m) has gradient units s² m⁻¹. Use the units to check your expression for the constant."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Rearrange an equation into y = mx + c",
            "checked": false
          },
          {
            "text": "Use log graphs for power laws and exponentials",
            "checked": false
          },
          {
            "text": "Find the uncertainty in a gradient using a worst acceptable line",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Linearise by rearranging into y = mx + c, e.g. T² against l, or use logs: ln y against ln x gives the power n; ln N against t gives −λ. Find gradient uncertainty by comparing best-fit and worst acceptable lines through error bars."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Linearise by rearranging into y = mx + c, e.g. T² against l, or use logs: ln y against ln x gives the power n; ln N against t gives −λ. Find gradient uncertainty by comparing best-fit and worst acceptable lines through error bars.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "tbl-linear",
        "prompt": "What graph would you plot to find the e.m.f. and internal resistance of a cell, and what do the gradient and intercept give?",
        "answer": "V against I: gradient = −r, y-intercept = ε."
      },
      {
        "id": "cue-2",
        "blockId": "p-log",
        "prompt": "How do you find the power n in y = kxⁿ graphically?",
        "answer": "Plot ln y against ln x; the gradient is n (and the intercept is ln k)."
      },
      {
        "id": "cue-3",
        "blockId": "worked-decay",
        "prompt": "A ln N–t graph has gradient −0.0231 s⁻¹. Find the half-life.",
        "answer": "λ = 0.0231 s⁻¹, half-life = 0.693/0.0231 = 30 s."
      }
    ]
  },
  "evidence": []
};

export default note_physics_6_6A_1;
