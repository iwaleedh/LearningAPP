export const note_biology_1_2_1 = {
  "blocks": [
    {
      "id": "obj-2",
      "type": "objective",
      "data": {
        "text": "Describe the structure of alveoli and how they are adapted for rapid gas exchange in the lungs."
      }
    },
    {
      "id": "h-alveoli",
      "type": "heading",
      "data": {
        "text": "Structure of the Alveoli",
        "level": 2
      }
    },
    {
      "id": "p-alveoli",
      "type": "paragraph",
      "data": {
        "text": "The alveoli are tiny air sacs at the end of the bronchioles in the lungs. They are the site of gas exchange between the air and the blood."
      }
    },
    {
      "id": "h-adaptations",
      "type": "heading",
      "data": {
        "text": "Adaptations for Efficient Gas Exchange",
        "level": 2
      }
    },
    {
      "id": "list-adapt",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Large Surface Area: Millions of spherical alveoli provide a massive surface area.",
          "Short Diffusion Distance: Alveolar walls and the surrounding capillary walls are each only one cell thick (made of squamous epithelium).",
          "Steep Concentration Gradient: Continuous blood flow removes oxygenated blood and brings deoxygenated blood, while ventilation refreshes the air.",
          "Moist Lining: Gases dissolve in the fluid lining the alveoli before diffusing across."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-1-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><path d='M150,50 C180,50 200,80 200,120 C200,160 170,180 150,180 C130,180 100,160 100,120 C100,80 120,50 150,50' fill='#3d1212' stroke='#fc8181' stroke-width='2'/><path d='M80,120 C80,170 120,195 150,195 C180,195 220,170 220,120 C220,70 190,40 150,40' fill='none' stroke='#c53030' stroke-width='6'/><text x='115' y='110' font-size='10' fill='#e53e3e'>O₂ → Blood</text><text x='115' y='140' font-size='10' fill='#3182ce'>CO₂ ← Blood</text><text x='40' y='25' font-size='10'>Capillary Network</text><line x1='90' y1='30' x2='120' y2='60' stroke='#333' stroke-width='1'/></svg>",
            "caption": "Alveolus Structure"
        }
    },
    {
        "id": "svg-diag-1-2-1-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 120' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='250' height='30' fill='#1e293b' rx='15'/><circle cx='80' cy='65' r='10' fill='#3182ce'/><text x='70' y='95' font-size='10'>Deoxygenated</text><circle cx='175' cy='65' r='10' fill='#fc8181'/><circle cx='270' cy='65' r='10' fill='#e53e3e'/><text x='255' y='95' font-size='10'>Oxygenated</text><text x='170' y='35' font-size='14' font-weight='bold' fill='#c53030'>↓ O₂ In</text><text x='100' y='35' font-size='14' font-weight='bold' fill='#3182ce'>↑ CO₂ Out</text></svg>",
            "caption": "Gas Exchange Gradient"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-adapt",
        "prompt": "List three adaptations of alveoli for gas exchange."
      },
      {
        "id": "cue-2",
        "blockId": "list-adapt",
        "prompt": "How is a steep concentration gradient maintained in the alveoli?"
      }
    ],
    "summaryText": "Alveoli are adapted for gas exchange via a massive surface area, walls one cell thick for a short diffusion distance, and maintenance of steep gradients by ventilation and blood flow.",
    "ready": true
  },
  "evidence": []
};
