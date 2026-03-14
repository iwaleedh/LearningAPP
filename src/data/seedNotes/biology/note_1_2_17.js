export const note_biology_1_2_17 = {
  "blocks": [
    {
      "id": "obj-18",
      "type": "objective",
      "data": {
        "text": "Understand Core Practical 3: Investigate membrane structure/permeability using beetroot."
      }
    },
    {
      "id": "h-beetroot",
      "type": "heading",
      "data": {
        "text": "Beetroot Cell Permeability",
        "level": 2
      }
    },
    {
      "id": "p-beet",
      "type": "paragraph",
      "data": {
        "text": "Beetroot cells contain a dark red pigment called betalain held within the vacuole. If the cell surface and vacuole membranes are damaged, the pigment leaks out. Testing membrane permeability involves measuring how much pigment leaks under different conditions (like temperature or ethanol concentration)."
      }
    },
    {
      "id": "list-method",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Cut equal-sized cylinders of beetroot using a cork borer. Rinse them thoroughly to wash away pigment from cells damaged during cutting.",
          "Place the cylinders into test tubes of water in water baths at different temperatures (e.g., 20°C, 30°C, 40°C, 50°C, 60°C) for a set time.",
          "Remove the beetroot cylinders, leaving just the colored liquid.",
          "Use a colorimeter (set to a blue/green filter) to measure the percentage transmission or absorbance of light through each liquid sample."
        ]
      }
    },
    {
      "id": "callout-result",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Expected Results",
        "text": "As temperature increases above 40-50°C, the membrane phospholipids gain kinetic energy and spread apart. Membrane proteins denature, creating holes. This drastically increases permeability, leading to massive pigment leakage (high absorbance, low transmission)."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-17-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 160' xmlns='http://www.w3.org/2000/svg'><path d='M100,40 L100,140 C100,160 140,160 140,140 L140,40' fill='none' stroke='#4a5568' stroke-width='2'/><rect x='105' y='110' width='30' height='30' fill='#805ad5' stroke='#44337a'/><path d='M100,80 Q120,85 140,80' fill='none' stroke='#3182ce' stroke-width='1'/><text x='160' y='125' font-size='10'>Beetroot Cylinder</text><text x='160' y='90' font-size='10'>Water Bath Setup</text><text x='40' y='30' font-size='10' font-weight='bold'>Test Temp vs Permeability</text></svg>",
            "caption": "Beetroot Practical Setup"
        }
    },
    {
        "id": "svg-diag-1-2-17-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='120' x2='250' y2='120' stroke='#333' stroke-width='2'/><line x1='50' y1='120' x2='50' y2='30' stroke='#333' stroke-width='2'/><path d='M50,110 C100,100 150,90 200,30' fill='none' stroke='#c53030' stroke-width='3'/><text x='20' y='80' font-size='10' transform='rotate(270 20,80)'>Absorbance</text><text x='110' y='140' font-size='10'>Temperature (°C)</text><text x='210' y='40' font-size='10' fill='#c53030'>Membrane Denatured</text></svg>",
            "caption": "Colorimeter Result (Permeability)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-method",
        "prompt": "Why must you rinse the beetroot cylinders before the experiment?"
      },
      {
        "id": "cue-2",
        "blockId": "callout-result",
        "prompt": "Why does a high temperature damage the membrane?"
      }
    ],
    "summaryText": "Increased temperature denatures membrane proteins and increases phospholipid kinetic energy, damaging the membrane. This causes beetroot pigment to leak, increasing fluid absorbance in a colorimeter.",
    "ready": true
  },
  "evidence": []
};
