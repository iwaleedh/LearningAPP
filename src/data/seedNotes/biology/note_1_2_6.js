export const note_biology_1_2_6 = {
  "blocks": [
    {
      "id": "obj-7",
      "type": "objective",
      "data": {
        "text": "Understand osmosis in terms of water potential."
      }
    },
    {
      "id": "h-osmosis",
      "type": "heading",
      "data": {
        "text": "Osmosis",
        "level": 2
      }
    },
    {
      "id": "p-osmosis",
      "type": "paragraph",
      "data": {
        "text": "Osmosis is a specific type of diffusion: the net movement of water molecules from a region of higher (less negative) water potential to a region of lower (more negative) water potential, across a partially permeable membrane."
      }
    },
    {
      "id": "h-water-pot",
      "type": "heading",
      "data": {
        "text": "Water Potential",
        "level": 2
      }
    },
    {
      "id": "p-water-pot",
      "type": "paragraph",
      "data": {
        "text": "Pure pure water has a water potential of zero. Adding solutes lowers the water potential, making it more negative. Therefore, water moves towards solutions with higher solute concentrations."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-6-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><text x='50' y='30' font-size='12' font-weight='bold'>Ψ (Psi) = Water Potential</text><rect x='40' y='50' width='100' height='60' fill='#ebf8ff' stroke='#4299e1'/><text x='50' y='85' font-size='12'>Ψ ≈ 0 (Pure)</text><rect x='160' y='50' width='100' height='60' fill='#bee3f8' stroke='#2b6cb0'/><text x='165' y='85' font-size='12'>Ψ < 0 (More Solute)</text><path d='M110,120 Q150,140 190,120' fill='none' stroke='#c53030' stroke-width='3' marker-end='url(#arrow)'/><text x='110' y='145' font-size='10'>Water flows to lower Ψ</text></svg>",
            "caption": "Water Potential Concept"
        }
    },
    {
        "id": "svg-diag-1-2-6-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='80' height='100' fill='none' stroke='#38a169' stroke-width='4'/><rect x='45' y='35' width='70' height='90' fill='#c6f6d5' stroke='#2f855a' stroke-width='2'/><text x='45' y='20' font-size='10'>Turgid (Dilute Solute)</text><rect x='180' y='30' width='80' height='100' fill='none' stroke='#38a169' stroke-width='4'/><polygon points='190,40 250,50 240,110 200,120' fill='#c6f6d5' stroke='#2f855a' stroke-width='2'/><text x='180' y='20' font-size='10'>Plasmolysed (Conc. Solute)</text></svg>",
            "caption": "Plasmolysis in Plant Cell"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-osmosis",
        "prompt": "Define osmosis in terms of water potential."
      },
      {
        "id": "cue-2",
        "blockId": "p-water-pot",
        "prompt": "What happens to the water potential of pure water when you add a solute?"
      }
    ],
    "summaryText": "Osmosis is the net movement of water from a higher to a lower water potential across a partially permeable membrane. Pure water has the highest potential (zero); solutes make it negative.",
    "ready": true
  },
  "evidence": []
};
