export const note_biology_1_2_2 = {
  "blocks": [
    {
      "id": "obj-3",
      "type": "objective",
      "data": {
        "text": "Understand how lung diseases (like those caused by cystic fibrosis) affect gas exchange."
      }
    },
    {
      "id": "h-cf-lungs",
      "type": "heading",
      "data": {
        "text": "Cystic Fibrosis in the Lungs",
        "level": 2
      }
    },
    {
      "id": "p-cf-1",
      "type": "paragraph",
      "data": {
        "text": "Cystic fibrosis (CF) is a genetic disorder that causes the production of thick, sticky mucus. In the respiratory system, this thick mucus cannot be effectively swept away by cilia."
      }
    },
    {
      "id": "list-cf-effects",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Reduced Gas Exchange: The thick mucus blocks bronchioles, reducing the number of alveoli receiving fresh air. This lowers the surface area available and the concentration gradient.",
          "Increased Diffusion Distance: Thick mucus lining the respiratory tract increases the distance over which gases must diffuse.",
          "Infections: Bacteria get trapped in the sticky mucus. White blood cells fight the infection but die and break down, making the mucus even thicker and damaging lung tissue."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-2-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='40' width='100' height='60' rx='30' fill='#3d1212' stroke='#fc8181' stroke-width='4'/><text x='40' y='120' font-size='10'>Healthy (Clear)</text><rect x='180' y='40' width='100' height='60' rx='30' fill='#3d1212' stroke='#fc8181' stroke-width='4'/><ellipse cx='230' cy='70' rx='40' ry='20' fill='#44370a' opacity='0.8'/><text x='195' y='120' font-size='10'>Cystic Fibrosis</text><text x='190' y='135' font-size='10' fill='#b7791f'>(Thick Mucus Blockage)</text></svg>",
            "caption": "Healthy Airway vs CF Airway"
        }
    },
    {
        "id": "svg-diag-1-2-2-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='50' fill='#44370a' stroke='#b7791f'/><circle cx='100' cy='75' r='5' fill='#38a169'/><circle cx='130' cy='65' r='5' fill='#38a169'/><circle cx='180' cy='85' r='5' fill='#38a169'/><text x='60' y='40' font-size='12' font-weight='bold'>Thick Sticky Mucus</text><text x='60' y='20' font-size='10'>Cilia unable to beat away bacteria</text></svg>",
            "caption": "Trapped Pathogens in CF"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-cf-1",
        "prompt": "What physical characteristic of mucus is associated with cystic fibrosis?"
      },
      {
        "id": "cue-2",
        "blockId": "list-cf-effects",
        "prompt": "How does CF mucus directly reduce the rate of gas exchange (referencing Ficks Law)?"
      }
    ],
    "summaryText": "In CF, thick sticky mucus blocks airways, increasing diffusion distance, reducing the effective surface area, and harboring damaging bacterial infections.",
    "ready": true
  },
  "evidence": []
};
