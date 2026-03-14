export const note_biology_1_1_11 = {
  "blocks": [
    {
      "id": "obj-cp1",
      "type": "objective",
      "data": {
        "text": "Understand Core Practical 1: Using qualitative reagents to test for the presence of biological molecules."
      }
    },
    {
      "id": "h-tests",
      "type": "heading",
      "data": {
        "text": "Food Tests Summary",
        "level": 2
      }
    },
    {
      "id": "list-tests",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Starch: Add Iodine solution (in potassium iodide). Positive result = turns from orange-brown to blue-black.",
          "Reducing Sugars (e.g. glucose): Add Benedict's reagent and heat in a water bath (80°C). Positive result = turns from blue to a brick-red precipitate. The extent of color change (blue -> green -> yellow -> orange -> brick-red) indicates roughly how much sugar is present.",
          "Non-Reducing Sugars (e.g. sucrose): First, test with Benedict's (it stays blue). Boil a fresh sample with dilute HCl to hydrolyse the glycosidic bonds. Neutralise with sodium hydrogen carbonate, then re-test with Benedict's. Positive result = now turns brick-red.",
          "Proteins: Add Biuret reagent (sodium hydroxide and dilute copper(II) sulfate). Positive result = turns from blue to purple/lilac.",
          "Lipids (Emulsion Test): Add ethanol to the sample and shake vigorously to dissolve the lipid, then pour into water. Positive result = a milky-white emulsion forms."
        ]
      }
    },
    {
      "id": "callout-qualitative",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Qualitative vs Semi-Quantitative",
        "text": "These tests are qualitative (they tell you 'if' it is there). Benedict's can be considered semi-quantitative because the progression of color can help estimate concentration, and you could filter and weigh the precipitate for a more reliable measure."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-11-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 250 150' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='50' width='40' height='80' fill='#4299e1' opacity='0.7' rx='5'/><text x='75' y='145' font-size='12'>Negative</text><rect x='140' y='50' width='40' height='80' fill='#805ad5' opacity='0.9' rx='5'/><text x='145' y='145' font-size='12'>Positive</text><text x='50' y='30' font-size='12' font-weight='bold'>Biuret: Light Blue → Purple</text></svg>",
            "caption": "Biuret Test for Proteins"
        }
    },
    {
        "id": "svg-diag-1-1-11-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 250 150' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='50' width='40' height='80' fill='#ed8936' opacity='0.7' rx='5'/><text x='75' y='145' font-size='12'>Negative</text><rect x='140' y='50' width='40' height='80' fill='#1a202c' opacity='0.9' rx='5'/><text x='145' y='145' font-size='12'>Positive</text><text x='35' y='30' font-size='12' font-weight='bold'>Iodine: Orange-Brown → Blue/Black</text></svg>",
            "caption": "Iodine Test for Starch"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-tests",
        "prompt": "Describe the test for reducing sugars and the positive result."
      },
      {
        "id": "cue-2",
        "blockId": "list-tests",
        "prompt": "What extra steps are needed to test for a non-reducing sugar?"
      },
      {
        "id": "cue-3",
        "blockId": "list-tests",
        "prompt": "How do you perform the emulsion test for lipids?"
      }
    ],
    "summaryText": "Use Iodine for starch (blue-black), Benedict's with heat for reducing sugars (brick-red precipitate), Biuret for proteins (purple), and Ethanol/Water for lipids (milky emulsion).",
    "ready": true
  },
  "evidence": []
};
