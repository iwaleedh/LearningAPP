export const note_biology_1_2_5 = {
  "blocks": [
    {
      "id": "obj-6",
      "type": "objective",
      "data": {
        "text": "Explain active transport, exocytosis, and endocytosis."
      }
    },
    {
      "id": "h-active",
      "type": "heading",
      "data": {
        "text": "Active Transport",
        "level": 2
      }
    },
    {
      "id": "p-active",
      "type": "paragraph",
      "data": {
        "text": "Active transport moves substances AGAINST their concentration gradient (from low to high). It requires energy in the form of ATP from respiration and specific carrier proteins (pumps)."
      }
    },
    {
      "id": "h-bulk",
      "type": "heading",
      "data": {
        "text": "Bulk Transport (Endo/Exocytosis)",
        "level": 2
      }
    },
    {
      "id": "list-bulk",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Endocytosis: The cell membrane engulfs bulk materials or large particles, pinching off to form a vesicle inside the cell (requires ATP).",
          "Exocytosis: Vesicles containing substances (like enzymes or hormones) pinch off from the Golgi, move to the cell membrane, fuse with it, and release their contents outside (requires ATP)."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-5-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='60' width='200' height='30' fill='#edf2f7'/><rect x='135' y='50' width='30' height='50' fill='#ed8936' rx='5'/><circle cx='150' cy='130' r='6' fill='#38a169'/><path d='M150,110 L150,30' stroke='#e53e3e' stroke-width='2' marker-end='url(#arrow)'/><circle cx='150' cy='20' r='6' fill='#38a169'/><text x='160' y='85' font-size='10' font-weight='bold' fill='#c53030'>ATP</text><text x='30' y='140' font-size='10'>Against Concentration Gradient</text></svg>",
            "caption": "Active Transport (ATP)"
        }
    },
    {
        "id": "svg-diag-1-2-5-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M20,100 C60,100 80,60 120,60 C160,60 180,100 220,100' fill='none' stroke='#4a5568' stroke-width='4'/><circle cx='120' cy='40' r='20' fill='none' stroke='#3182ce' stroke-width='2'/><circle cx='120' cy='40' r='5' fill='#e53e3e'/><path d='M120,80 L120,50' stroke='#333' stroke-width='1.5' marker-end='url(#arrow)'/><text x='75' y='130' font-size='10'>Exocytosis (Out)</text><path d='M220,100 C260,100 280,140 320,140' fill='none' stroke='#4a5568' stroke-width='4'/><circle cx='270' cy='120' r='15' fill='none' stroke='#3182ce' stroke-dasharray='4'/><circle cx='270' cy='120' r='5' fill='#38a169'/><path d='M270,70 L270,100' stroke='#333' stroke-width='1.5' marker-end='url(#arrow)'/><text x='230' y='155' font-size='10'>Endocytosis (In)</text></svg>",
            "caption": "Exocytosis vs Endocytosis"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-active",
        "prompt": "State two requirements for active transport."
      },
      {
        "id": "cue-2",
        "blockId": "list-bulk",
        "prompt": "Describe the process of exocytosis."
      }
    ],
    "summaryText": "Active transport moves substances against their gradient using ATP and carrier proteins. Bulk transport (endo/exocytosis) moves large amounts of material via membrane vesicles and also requires ATP.",
    "ready": true
  },
  "evidence": []
};
