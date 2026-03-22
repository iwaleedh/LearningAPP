export const note_biology_1_2_10 = {
  "blocks": [
    {
      "id": "obj-11",
      "type": "objective",
      "data": {
        "text": "Understand mechanisms of enzyme inhibition: competitive and non-competitive."
      }
    },
    {
      "id": "h-inhibition",
      "type": "heading",
      "data": {
        "text": "Enzyme Inhibition",
        "level": 2
      }
    },
    {
      "id": "list-inhib",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Competitive Inhibitors: Have a similar shape to the substrate. They bind directly to the active site, blocking the substrate from entering. Their effect can be overcome by increasing substrate concentration.",
          "Non-Competitive Inhibitors: Bind to the enzyme at an allosteric site (away from the active site). This causes the tertiary structure of the active site to change shape, so the substrate can no longer bind. Increasing substrate concentration does NOT overcome this."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-10-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M40,100 L40,60 L70,60 L80,80 L100,80 L110,60 L140,60 L140,100 Z' fill='#1e293b' stroke='#4a5568'/><rect x='65' y='30' width='50' height='30' fill='#fc8181' rx='5'/><polygon points='75,60 85,80 95,80 105,60' fill='#fc8181'/><text x='55' y='20' font-size='10' fill='#c53030'>Inhibitor blocks Active Site</text><polygon points='160,40 170,60 180,60 190,40 205,15 145,15' fill='#48bb78'/><text x='150' y='75' font-size='10' fill='#2f855a'>Substrate</text><path d='M170,30 L110,30' stroke='#333' stroke-width='2' stroke-dasharray='4' marker-end='url(#arrow)'/></svg>",
            "caption": "Competitive Inhibition"
        }
    },
    {
        "id": "svg-diag-1-2-10-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M40,100 L40,60 L80,60 L90,75 L110,60 L140,60 L140,100 L110,100 L100,115 L80,100 Z' fill='#1e293b' stroke='#4a5568'/><circle cx='95' cy='110' r='10' fill='#fc8181'/><text x='15' y='140' font-size='10' fill='#c53030'>Inhibitor at Allosteric Site</text><polygon points='160,40 170,60 200,60 210,40 230,15 145,15' fill='#48bb78'/><text x='155' y='75' font-size='10'>Substrate doesn't fit</text><text x='70' y='45' font-size='10' font-style='italic'>Shape Changed!</text></svg>",
            "caption": "Non-Competitive Inhibition"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Inhibition Types",
        "text": "Competitive inhibitors bind to the active site (can be overcome by increasing substrate concentration). Non-competitive inhibitors bind to an allosteric site, permanently altering the active site's specific 3D shape."
      }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Inhibition Types",
        "text": "Competitive inhibitors bind to the active site (can be overcome by increasing substrate concentration). Non-competitive inhibitors bind to an allosteric site, permanently altering the active site's specific 3D shape."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-inhib",
        "prompt": "Which type of inhibitor binds to an allosteric site?"
      },
      {
        "id": "cue-2",
        "blockId": "list-inhib",
        "prompt": "Can you overcome competitive inhibition by adding more substrate?"
      }
    ],
    "summaryText": "Competitive inhibitors block the active site (can be overcome by more substrate). Non-competitive inhibitors bind elsewhere, changing the active site shape permanently (cannot be overcome).",
    "ready": true
  },
  "evidence": []
};
