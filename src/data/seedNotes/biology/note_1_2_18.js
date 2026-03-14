export const note_biology_1_2_18 = {
  "blocks": [
    {
      "id": "obj-19",
      "type": "objective",
      "data": {
        "text": "Understand Core Practical 4: Investigate the effect of enzyme and substrate concentrations on the initial rate of reaction."
      }
    },
    {
      "id": "h-cp4",
      "type": "heading",
      "data": {
        "text": "Enzyme Rate Investigation",
        "level": 2
      }
    },
    {
      "id": "p-enz",
      "type": "paragraph",
      "data": {
        "text": "A common demonstration uses hydrogen peroxide (substrate) and catalase (enzyme from potato or yeast) to produce water and oxygen gas. Alternatively, you can use protease/pepsin breaking down milk protein, turning it from cloudy to clear."
      }
    },
    {
      "id": "list-invest",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Set up varying concentrations of the enzyme (or substrate) using serial dilutions.",
          "Add the substrate and enzyme together, immediately starting a stopwatch.",
          "Measure the volume of gas produced (via a gas syringe) every 10 seconds, or the time taken for a cross to become visible through a clear solution.",
          "Calculate the INITAL rate of reaction by drawing a tangent at t=0 on a volume-time graph."
        ]
      }
    },
    {
      "id": "callout-initial",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Why Initial Rate?",
        "text": "We must measure the initial rate of reaction because this is the only time we know the exact concentration of the substrate. As the reaction proceeds, substrate is used up, and its decreasing concentration becomes a limiting factor, slowing the rate down."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-18-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='130' x2='280' y2='130' stroke='#333' stroke-width='2'/><line x1='40' y1='130' x2='40' y2='20' stroke='#333' stroke-width='2'/><path d='M40,130 Q100,30 250,30' fill='none' stroke='#3182ce' stroke-width='3'/><line x1='40' y1='130' x2='90' y2='45' stroke='#e53e3e' stroke-width='2' stroke-dasharray='4'/><text x='10' y='90' font-size='10' transform='rotate(270 10,90)'>Product Formed</text><text x='130' y='145' font-size='10'>Time (s)</text><text x='100' y='60' font-size='10' fill='#c53030'>Initial Rate (Tangent)</text></svg>",
            "caption": "Enzyme Reaction Rate Graph"
        }
    },
    {
        "id": "svg-diag-1-2-18-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='130' x2='280' y2='130' stroke='#333' stroke-width='2'/><line x1='40' y1='130' x2='40' y2='20' stroke='#333' stroke-width='2'/><path d='M40,130 C100,90 150,40 250,40' fill='none' stroke='#38a169' stroke-width='3'/><text x='10' y='90' font-size='10' transform='rotate(270 10,90)'>Rate of Reaction</text><text x='110' y='145' font-size='10'>Substrate Concentration</text><text x='260' y='45' font-size='10' fill='#2f855a'>Vmax (Enzyme Limited)</text></svg>",
            "caption": "Substrate Concentration Effect"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-invest",
        "prompt": "How do you calculate the initial rate of reaction from a volume-time graph?"
      },
      {
        "id": "cue-2",
        "blockId": "callout-initial",
        "prompt": "Why is it important to measure the initial rate?"
      }
    ],
    "summaryText": "Initial reaction rates are calculated using tangents at t=0 before substrate depletion slows the reaction. Increasing enzyme or substrate concentration increases the rate until another factor limits it.",
    "ready": true
  },
  "evidence": []
};
