/**
 * Seed note: Chemistry · Unit 6 · Topic 6A · Subtopic 5
 * "Practical reasoning in new contexts"
 */

export const note_chemistry_6_6A_5 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Apply practical knowledge to unfamiliar experiments: interpret observations, explain anomalous results, and suggest modifications to methods."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Thinking Like an Examiner",
        "level": 2
      }
    },
    {
      "id": "p-approach",
      "type": "paragraph",
      "data": {
        "text": "Unit 6 questions often describe an experiment you have not done. The skills are the same: identify what is being measured, what could go wrong, and how the method could be improved. Link every answer to <strong>chemistry principles</strong>."
      }
    },
    {
      "id": "h-anomalous",
      "type": "heading",
      "data": {
        "text": "Explaining Anomalous Results",
        "level": 2
      }
    },
    {
      "id": "list-anomalous",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "A titre much larger than the others: overshooting the end point, or an air bubble in the burette tip."
          },
          {
            "text": "A lower yield than expected: incomplete reaction, losses on transfer or filtration, or a reversible reaction reaching equilibrium."
          },
          {
            "text": "A melting point that is low and over a wide range: the product is impure or still wet."
          },
          {
            "text": "A temperature rise smaller than expected: heat loss to the surroundings or incomplete reaction."
          }
        ]
      }
    },
    {
      "id": "worked-modify",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Suggesting a Modification",
        "text": "Context: the rate of a reaction is followed by timing the disappearance of a cross under a flask, but the end point is hard to judge.\nImprovement: use a colorimeter (or light sensor and data logger) to measure absorbance against time — this removes the subjective judgement and gives continuous data."
      }
    },
    {
      "id": "h-reasoning",
      "type": "heading",
      "data": {
        "text": "Common Reasoning Points",
        "level": 2
      }
    },
    {
      "id": "tbl-reasoning",
      "type": "comparisonTable",
      "data": {
        "caption": "Typical \"explain why\" questions",
        "headers": [
          "Question",
          "Reasoning"
        ],
        "rows": [
          [
            "Why rinse the burette with the solution to be used?",
            "Water left inside would dilute the solution, increasing the titre"
          ],
          [
            "Why use a white tile?",
            "Makes the colour change at the end point easier to see"
          ],
          [
            "Why heat under reflux?",
            "Volatile reactants/products condense and return, so the reaction can go to completion"
          ],
          [
            "Why use the minimum volume of hot solvent in recrystallisation?",
            "So the solution is saturated and maximum crystals form on cooling"
          ],
          [
            "Why stop heating before dryness when evaporating?",
            "To avoid decomposition and spitting; allows crystals to form slowly"
          ]
        ]
      }
    },
    {
      "id": "tip-specific",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Be Specific",
        "text": "Avoid generic answers like \"human error\". Name the precise error and its direction, e.g. \"heat loss makes the temperature rise smaller, so ΔH is less exothermic than the data-book value\"."
      }
    },
    {
      "id": "callout-tip-1",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "New Contexts Require Explicit Justification — Do Not Assume Knowledge Transfer",
        "text": "When applying a technique to a new scenario, spell out the logical link. Do NOT write 'use the same method as for compound A'. Instead, write: 'Compound C is also an aldehyde, so testing with Tollens reagent is appropriate because [mechanism/reason].' Examiners expect evidence that you have reasoned, not just copied."
      }
    },
    {
      "id": "callout-tip-2",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Use Analogies to Justify Equipment and Procedure Changes in New Contexts",
        "text": "If a practical is adapted (e.g., using a different starting material or temperature), explain why you chose the modified conditions by relating them to similar worked examples: 'Because X was insoluble in water, I heated the reaction mixture, similar to the preparation of Y in Core Practical Z.' This demonstrates critical thinking."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Explain anomalous results in titrations, yields and melting points",
            "checked": false
          },
          {
            "text": "Suggest a specific improvement to an unfamiliar method",
            "checked": false
          },
          {
            "text": "Justify routine practical steps using chemistry",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "Apply familiar practical principles to unfamiliar contexts: explain anomalies precisely (overshooting, losses, impurity, heat loss), justify routine steps (rinsing, reflux, minimum hot solvent), and suggest specific instrumental improvements."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "Apply familiar practical principles to unfamiliar contexts: explain anomalies precisely (overshooting, losses, impurity, heat loss), justify routine steps (rinsing, reflux, minimum hot solvent), and suggest specific instrumental improvements.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-anomalous",
        "prompt": "A product melts below the data-book value over a wide range. What does this indicate?",
        "answer": "The product is impure (or still wet)."
      },
      {
        "id": "cue-2",
        "blockId": "tbl-reasoning",
        "prompt": "Why is a burette rinsed with the solution it will contain rather than water?",
        "answer": "Residual water would dilute the solution and make the titre larger."
      },
      {
        "id": "cue-3",
        "blockId": "worked-modify",
        "prompt": "Suggest how to improve a \"disappearing cross\" rate experiment.",
        "answer": "Use a colorimeter or light sensor with a data logger to remove subjective judgement of the end point."
      }
    ]
  },
  "evidence": []
};

export default note_chemistry_6_6A_5;
