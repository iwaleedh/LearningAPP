/**
 * Seed note: Physics · Unit 6 · Topic 6A · Subtopic 2
 * "Complex experimental procedures and evaluation"
 */

export const note_physics_6_6A_2 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Write a full plan for an unfamiliar investigation, including method, control of variables, safety and analysis, and evaluate the conclusions."
      }
    },
    {
      "id": "h-1",
      "type": "heading",
      "data": {
        "text": "Structure of a Full Plan",
        "level": 2
      }
    },
    {
      "id": "list-plan",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          {
            "text": "<strong>Aim and relationship</strong> to be tested, with the equation where relevant."
          },
          {
            "text": "<strong>Variables</strong>: independent, dependent and controls, with how each control is kept constant."
          },
          {
            "text": "<strong>Apparatus and method</strong>: a labelled diagram and step-by-step procedure, including the range and number of readings."
          },
          {
            "text": "<strong>Measurements</strong>: instruments with their resolution and techniques to reduce uncertainty."
          },
          {
            "text": "<strong>Analysis</strong>: the graph to plot and how the constant is found from it."
          },
          {
            "text": "<strong>Safety</strong>: specific hazards and precautions."
          }
        ]
      }
    },
    {
      "id": "worked-plan",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Planning Example: Specific Heat Capacity",
        "text": "Aim: find c for an aluminium block using E = mcΔθ.\nIndependent: time of heating; dependent: temperature rise; controls: heater power (constant V and I), mass of block, insulation.\nMethod: insulate block; record V and I; record temperature every 30 s for 10 min.\nAnalysis: plot θ against t; gradient = P ÷ (mc) → c = P ÷ (m × gradient).\nSafety: block becomes hot — allow to cool before handling; keep water away from mains."
      }
    },
    {
      "id": "h-evaluate",
      "type": "heading",
      "data": {
        "text": "Evaluating Conclusions",
        "level": 2
      }
    },
    {
      "id": "list-evaluate",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          {
            "text": "Does the graph support the expected relationship (straight line through the origin, correct gradient)?"
          },
          {
            "text": "Is the percentage difference from the accepted value within the percentage uncertainty?"
          },
          {
            "text": "Which measurement contributes the largest uncertainty? Improve that first."
          },
          {
            "text": "Are there systematic effects, e.g. heat losses making c too large?"
          }
        ]
      }
    },
    {
      "id": "key-largest",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Largest Uncertainty First",
        "text": "Compare the percentage uncertainties of each measured quantity. Effort should target the largest — improving an already small uncertainty has little effect on the final result."
      }
    },
    {
      "id": "callout-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Validity",
        "text": "A conclusion is valid only if the experiment tested what it claimed to test with variables properly controlled. Mention uncontrolled variables when judging validity."
      }
    },
    {
      "id": "chk-1",
      "type": "checklist",
      "data": {
        "items": [
          {
            "text": "Write a structured plan for an unfamiliar experiment",
            "checked": false
          },
          {
            "text": "Explain how the result is found from a graph",
            "checked": false
          },
          {
            "text": "Evaluate a conclusion using uncertainties and systematic effects",
            "checked": false
          }
        ]
      }
    },
    {
      "id": "sum-final",
      "type": "summary",
      "data": {
        "text": "A full plan states the aim, variables and controls, method and range, instruments, analysis by graph and safety. Evaluate by checking the graph, comparing percentage difference with uncertainty, targeting the largest uncertainty and considering systematic effects and validity."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "ready": true,
    "summaryText": "A full plan states the aim, variables and controls, method and range, instruments, analysis by graph and safety. Evaluate by checking the graph, comparing percentage difference with uncertainty, targeting the largest uncertainty and considering systematic effects and validity.",
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-plan",
        "prompt": "List the main sections of a full experimental plan.",
        "answer": "Aim, variables, apparatus and method, measurements and uncertainty, analysis (graph), safety."
      },
      {
        "id": "cue-2",
        "blockId": "worked-plan",
        "prompt": "Heat losses occur when measuring specific heat capacity. Will the value of c be too high or too low?",
        "answer": "Too high — less of the supplied energy heats the block, so the temperature rise is smaller."
      },
      {
        "id": "cue-3",
        "blockId": "key-largest",
        "prompt": "Which uncertainty should be reduced first when improving an experiment?",
        "answer": "The largest percentage uncertainty."
      }
    ]
  },
  "evidence": []
};

export default note_physics_6_6A_2;
