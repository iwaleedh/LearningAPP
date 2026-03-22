export const note_biology_1_1_6 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Understand the structure and function of blood vessels: arteries, veins, and capillaries, and how they relate to their functions."
      }
    },
    {
      "id": "h-vessels",
      "type": "heading",
      "data": {
        "text": "Blood Vessels",
        "level": 2
      }
    },
    {
      "id": "list-arteries",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Arteries: Carry blood away from the heart at high pressure.",
          "Thick wall: Withstands high pressure without bursting.",
          "Elastic tissue: Stretches during systole and recoils during diastole to maintain pressure and smooth out blood flow.",
          "Smooth muscle: Can contract or relax to control blood flow.",
          "Narrow lumen: Maintains high blood pressure."
        ]
      }
    },
    {
      "id": "list-veins",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Veins: Carry blood towards the heart at low pressure.",
          "Wide lumen: Reduces resistance to blood flow.",
          "Thin walls: Little elastic or muscle tissue as pressure is low.",
          "Valves: Prevent the backflow of blood.",
          "Skeletal muscle contraction: Helps compress veins and push blood towards the heart."
        ]
      }
    },
    {
      "id": "list-caps",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Capillaries: Site of metabolic exchange between blood and cells.",
          "One cell thick wall (squamous endothelium): Provides a short diffusion distance.",
          "Narrow lumen: Forces red blood cells to squeeze through, slowing blood flow to allow more time for exchange and reducing diffusion distance.",
          "Large total cross-sectional area: Slows down velocity of blood flow to maximize exchange time."
        ]
      }
    },
    {
      "id": "callout-compare",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Structure-Function Relationship",
        "text": "Arteries need elastic tissue to maintain high pressure via recoil. Veins need valves due to low pressure. Capillaries need an extremely short diffusion path."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-6-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='70' r='40' fill='#7f1d1d' stroke='#c53030' stroke-width='12'/><circle cx='80' cy='70' r='18' fill='#1e293b'/><text x='55' y='135' font-size='12' font-weight='bold'>Artery</text><text x='20' y='15' font-size='10' fill='#c53030'>Thick Muscle/Elastic Wall</text><circle cx='250' cy='70' r='45' fill='#1c3a64' stroke='#3182ce' stroke-width='4'/><circle cx='250' cy='70' r='35' fill='#1e293b'/><text x='235' y='135' font-size='12' font-weight='bold'>Vein</text><text x='200' y='15' font-size='10' fill='#3182ce'>Thin Wall, Large Lumen</text><path d='M240,55 L250,70 L260,55' fill='none' stroke='#2b6cb0' stroke-width='2'/><text x='240' y='45' font-size='10'>Valve</text></svg>",
            "caption": "Artery vs Vein Structure"
        }
    },
    {
        "id": "svg-diag-1-1-6-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 120' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='20' fill='#7f1d1d' stroke='#e53e3e' stroke-dasharray='4,4'/><circle cx='100' cy='60' r='6' fill='#c53030'/><circle cx='140' cy='60' r='6' fill='#c53030'/><circle cx='180' cy='60' r='6' fill='#4a5568'/><circle cx='220' cy='60' r='6' fill='#4a5568'/><text x='80' y='30' font-size='10' fill='#c53030'>O₂ & Nutrients Out</text><path d='M100,45 L90,20' stroke='#333' stroke-width='1.5' fill='none'/><path d='M140,45 L150,20' stroke='#333' stroke-width='1.5' fill='none'/><text x='160' y='100' font-size='10' fill='#4a5568'>CO₂ & Waste In</text><path d='M180,75 L170,95' stroke='#333' stroke-width='1.5' fill='none'/><path d='M220,75 L230,95' stroke='#333' stroke-width='1.5' fill='none'/><text x='10' y='65' font-size='10'>From Artery</text><text x='260' y='65' font-size='10'>To Vein</text></svg>",
            "caption": "Capillary Network"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Comparing Blood Vessels",
        "text": "When comparing arteries and veins, refer to the thickness of the muscle and elastic layers in the wall, not the overall wall thickness. You need to link the thick elastic tissue in arteries to maintaining high pressure through elastic recoil."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-arteries",
        "prompt": "How does elastic tissue in arteries maintain blood pressure?"
      },
      {
        "id": "cue-2",
        "blockId": "list-veins",
        "prompt": "Why do veins contain valves?"
      },
      {
        "id": "cue-3",
        "blockId": "list-caps",
        "prompt": "How are capillaries adapted for rapid diffusion?"
      }
    ],
    "summaryText": "Arteries withstand high pressure with thick walls and elastic tissue. Veins have valves to prevent backflow of low-pressure blood. Capillaries have walls one-cell thick to minimize diffusion paths.",
    "ready": true
  },
  "evidence": []
};
