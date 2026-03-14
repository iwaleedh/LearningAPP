export const note_biology_1_2_4 = {
  "blocks": [
    {
      "id": "obj-5",
      "type": "objective",
      "data": {
        "text": "Explain the mechanisms of simple diffusion, facilitated diffusion, and osmosis."
      }
    },
    {
      "id": "h-diffusion",
      "type": "heading",
      "data": {
        "text": "Simple Diffusion",
        "level": 2
      }
    },
    {
      "id": "p-diff",
      "type": "paragraph",
      "data": {
        "text": "The net movement of particles from an area of higher concentration to an area of lower concentration (down the gradient). It is a passive process (requires no ATP). Small, non-polar molecules (like O2, CO2) diffuse simply through the phospholipid bilayer."
      }
    },
    {
      "id": "h-fac",
      "type": "heading",
      "data": {
        "text": "Facilitated Diffusion",
        "level": 2
      }
    },
    {
      "id": "p-fac",
      "type": "paragraph",
      "data": {
        "text": "Large or polar molecules (like glucose, ions) cannot cross the hydrophobic bilayer easily. They require specific transmembrane proteins: channel proteins (pores for ions) or carrier proteins (which change shape when a specific molecule binds). This is also passive, moving down a gradient."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-4-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='70' width='300' height='20' fill='#edf2f7' stroke='#cbd5e0'/><circle cx='60' cy='20' r='6' fill='#e53e3e'/><circle cx='80' cy='40' r='6' fill='#e53e3e'/><circle cx='70' cy='120' r='6' fill='#e53e3e'/><path d='M70,50 L70,100' stroke='#333' stroke-width='2' stroke-dasharray='3' marker-end='url(#arrow)'/><text x='40' y='140' font-size='10'>Simple Diffusion (Non-polar)</text><rect x='200' y='60' width='30' height='40' fill='#4299e1' rx='5'/><polygon points='205,30 225,30 215,50' fill='#38a169'/><polygon points='215,110 205,130 225,130' fill='#38a169'/><path d='M215,40 L215,100' stroke='#333' stroke-width='1.5' stroke-dasharray='2' marker-end='url(#arrow)'/><text x='170' y='140' font-size='10'>Facilitated Diffusion (Protein)</text></svg>",
            "caption": "Simple vs Facilitated Diffusion"
        }
    },
    {
        "id": "svg-diag-1-2-4-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='200' height='80' fill='#ebf8ff' stroke='#4299e1'/><line x1='150' y1='40' x2='150' y2='120' stroke='#2b6cb0' stroke-dasharray='5' stroke-width='3'/><circle cx='80' cy='60' r='4' fill='#333'/><circle cx='100' cy='80' r='4' fill='#333'/><circle cx='70' cy='100' r='4' fill='#333'/><circle cx='200' cy='60' r='8' fill='#e53e3e'/><circle cx='230' cy='90' r='8' fill='#e53e3e'/><circle cx='180' cy='100' r='8' fill='#e53e3e'/><path d='M115,70 Q150,50 185,70' fill='none' stroke='#3182ce' stroke-width='3' marker-end='url(#arrow)'/><text x='55' y='140' font-size='10'>Low Solute (High H₂O)</text><text x='160' y='140' font-size='10'>High Solute (Low H₂O)</text></svg>",
            "caption": "Osmosis Gradient"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-diff",
        "prompt": "Which types of molecules can cross the membrane via simple diffusion?"
      },
      {
        "id": "cue-2",
        "blockId": "p-fac",
        "prompt": "What is the difference between simple and facilitated diffusion?"
      }
    ],
    "summaryText": "Simple diffusion moves small non-polar molecules down a gradient passively. Facilitated diffusion uses channel or carrier proteins to move large or polar molecules down a gradient passively.",
    "ready": true
  },
  "evidence": []
};
