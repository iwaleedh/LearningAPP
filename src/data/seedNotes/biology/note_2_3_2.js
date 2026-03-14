export const note_biology_2_3_2 = {
  "blocks": [
    {
      "id": "obj-3",
      "type": "objective",
      "data": {
        "text": "Explain the process of cell fractionation and ultracentrifugation."
      }
    },
    {
      "id": "h-frac",
      "type": "heading",
      "data": {
        "text": "Cell Fractionation",
        "level": 2
      }
    },
    {
      "id": "p-frac",
      "type": "paragraph",
      "data": {
        "text": "Cell fractionation is the process where cells are broken up and the different organelles they contain are separated out based on their mass and density."
      }
    },
    {
      "id": "list-homogenisation",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Homogenisation: Cells are broken open using a blender (homogeniser). This breaks the cell surface membrane, releasing organelles.",
          "Preparation of Solution: The tissue is placed in a cold, isotonic, and buffered solution. Cold reduces enzyme activity; isotonic prevents osmotic damage (bursting or shrinking); buffered maintains a constant pH so proteins/enzymes do not denature.",
          "Filtration: The resulting homogenate is filtered through a gauze to separate large cell debris or unbroken cells, leaving a filtrate containing only organelles.",
          "Ultracentrifugation: The filtrate is spun in a centrifuge at sequentially higher speeds to separate organelles by mass."
        ]
      }
    },
    {
      "id": "h-ultra",
      "type": "heading",
      "data": {
        "text": "Order of Separation",
        "level": 3
      }
    },
    {
      "id": "p-ultra",
      "type": "paragraph",
      "data": {
        "text": "The heaviest organelles are forced to the bottom forming a pellet, whilst the lighter organelles remain suspended in the fluid above (supernatant). The supernatant is drawn off and spun again at higher speeds."
      }
    },
    {
      "id": "list-order",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "1. Lowest speed: Nuclei form the pellet.",
          "2. Medium speed: Mitochondria (and chloroplasts in plants) form the next pellet.",
          "3. High speed: Lysosomes and endoplasmic reticulum.",
          "4. Highest speed: Ribosomes form the final pellet."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-2-3-2-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='50' width='60' height='60' fill='#c6f6d5'/><text x='20' y='130' font-size='10'>1. Tissue</text><path d='M90,80 L120,80' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><path d='M130,50 L130,110 L170,110 L170,50 Z' fill='#edf2f7' stroke='#718096'/><circle cx='150' cy='80' r='5' fill='#4a5568'/><text x='110' y='140' font-size='10'>2. Homogenisation</text><text x='110' y='155' font-size='10' fill='#c53030'>(Ice-cold, Isotonic, Buffer)</text><path d='M180,80 L210,80' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><rect x='230' y='40' width='40' height='80' rx='5' fill='#ebf8ff' stroke='#3182ce'/><rect x='230' y='100' width='40' height='20' fill='#2b6cb0'/><text x='220' y='140' font-size='10'>3. Centrifugation</text><text x='220' y='155' font-size='10' fill='#2b6cb0'>(Nuclei sink first)</text></svg>",
            "caption": "Cell Fractionation Process"
        }
    },
    {
        "id": "svg-diag-2-3-2-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-weight='bold' font-size='12'>Speed increases to precipitate smaller organelles:</text><rect x='30' y='60' width='30' height='60' fill='#fed7d7' stroke='#e53e3e'/><rect x='30' y='100' width='30' height='20' fill='#c53030'/><text x='20' y='135' font-size='10'>Low Speed</text><text x='15' y='150' font-size='10' fill='#c53030'>Nuclei Pellet</text><path d='M75,90 L115,90' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><rect x='130' y='60' width='30' height='60' fill='#fefcbf' stroke='#d69e2e'/><rect x='130' y='110' width='30' height='10' fill='#b7791f'/><text x='115' y='135' font-size='10'>Medium Speed</text><text x='105' y='150' font-size='10' fill='#b7791f'>Mitochondria Pellet</text><path d='M175,90 L215,90' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/><rect x='230' y='60' width='30' height='60' fill='#c6f6d5' stroke='#38a169'/><rect x='230' y='115' width='30' height='5' fill='#2f855a'/><text x='220' y='135' font-size='10'>High Speed</text><text x='215' y='150' font-size='10' fill='#2f855a'>Ribosomes Pellet</text></svg>",
            "caption": "Differential Centrifugation Speeds"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-homogenisation",
        "prompt": "Why must the solution be cold, isotonic, and buffered during homogenisation?"
      },
      {
        "id": "cue-2",
        "blockId": "list-order",
        "prompt": "Which organelle forms the first pellet during ultracentrifugation, and why?"
      }
    ],
    "summaryText": "Cell fractionation requires a cold, isotonic, buffered solution. After homogenisation and filtration, ultracentrifugation separates organelles by mass (nuclei > mitochondria > lysosomes > ribosomes).",
    "ready": true
  },
  "evidence": []
};
