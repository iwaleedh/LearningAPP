export const note_biology_1_2_15 = {
  "blocks": [
    {
      "id": "obj-16",
      "type": "objective",
      "data": {
        "text": "Explain the mechanism of cystic fibrosis based on a mutated CFTR protein."
      }
    },
    {
      "id": "h-cftr",
      "type": "heading",
      "data": {
        "text": "The Normal CFTR Protein",
        "level": 2
      }
    },
    {
      "id": "p-cftr",
      "type": "paragraph",
      "data": {
        "text": "The CFTR protein is a channel protein found in the cell membranes of epithelial cells (e.g., in the lungs and digestive tract). It actively pumps chloride ions (Cl-) OUT of cells and into the mucus."
      }
    },
    {
      "id": "p-osmosis-cf",
      "type": "paragraph",
      "data": {
        "text": "Because chloride ions move into the mucus, it lowers the water potential of the mucus. Water then follows by osmosis from the cells into the mucus, keeping it thin and runny."
      }
    },
    {
      "id": "h-mutated",
      "type": "heading",
      "data": {
        "text": "Mutated CFTR in Cystic Fibrosis",
        "level": 2
      }
    },
    {
      "id": "p-mutated",
      "type": "paragraph",
      "data": {
        "text": "In a person with CF, a mutation causes the CFTR protein to be defective or absent. Chloride ions cannot be pumped out of the cells. As a result, water does not move into the mucus by osmosis, leaving the mucus extraordinarily thick and sticky."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-15-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='60' width='260' height='20' fill='#1e293b'/><rect x='140' y='50' width='20' height='40' fill='#38a169'/><text x='142' y='45' font-size='10'>CFTR</text><circle cx='80' cy='120' r='5' fill='#3182ce'/><circle cx='100' cy='110' r='5' fill='#3182ce'/><path d='M145,100 L145,30' stroke='#333' stroke-width='2' stroke-dasharray='4' marker-end='url(#arrow)'/><text x='155' y='20' font-size='12' font-weight='bold' fill='#2b6cb0'>Cl⁻</text><text x='30' y='25' font-size='10'>Thin Watery Mucus (Normal)</text></svg>",
            "caption": "Normal CFTR Function"
        }
    },
    {
        "id": "svg-diag-1-2-15-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='60' width='260' height='20' fill='#1e293b'/><rect x='140' y='50' width='20' height='40' fill='#e53e3e'/><line x1='130' y1='40' x2='170' y2='100' stroke='black' stroke-width='3'/><line x1='170' y1='40' x2='130' y2='100' stroke='black' stroke-width='3'/><text x='125' y='45' font-size='10' fill='#c53030'>Mutated</text><text x='160' y='125' font-size='12' font-weight='bold' fill='#2b6cb0'>Cl⁻ trapped inside</text><rect x='20' y='10' width='260' height='30' fill='#44370a' opacity='0.7'/><text x='30' y='30' font-size='10' font-weight='bold' fill='#b7791f'>Thick Sticky Mucus (No water diffusion)</text></svg>",
            "caption": "Mutated CFTR (Cystic Fibrosis)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-cftr",
        "prompt": "What is the function of a normal CFTR protein?"
      },
      {
        "id": "cue-2",
        "blockId": "p-mutated",
        "prompt": "How does a defective CFTR channel result in thick mucus?"
      }
    ],
    "summaryText": "The CFTR channel normally pumps chloride ions into mucus, causing water to follow via osmosis, keeping it thin. In CF, the defective channel prevents this, resulting in thick, sticky mucus.",
    "ready": true
  },
  "evidence": []
};
