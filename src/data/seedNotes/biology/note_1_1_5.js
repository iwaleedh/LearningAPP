export const note_biology_1_1_5 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Understand the structure of the human heart, the double circulatory system, and the events of the cardiac cycle."
      }
    },
    {
      "id": "h-double",
      "type": "heading",
      "data": {
        "text": "The Need for a Circulatory System",
        "level": 2
      }
    },
    {
      "id": "p-need",
      "type": "paragraph",
      "data": {
        "text": "Large organisms have a small surface area to volume ratio, meaning diffusion distances are too great to rely on simple diffusion. A mass transport system is required to bring substances quickly from exchange sites and maintain diffusion gradients."
      }
    },
    {
      "id": "h-double-circ",
      "type": "heading",
      "data": {
        "text": "Double Circulatory System",
        "level": 3
      }
    },
    {
      "id": "p-double",
      "type": "paragraph",
      "data": {
        "text": "Mammals have a double circulatory system: blood passes through the heart twice for every circuit. It consists of the pulmonary circulation (lungs) and the systemic circulation (body). This allows blood to be pumped at a higher pressure to the body after being oxygenated."
      }
    },
    {
      "id": "h-heart",
      "type": "heading",
      "data": {
        "text": "Structure of the Heart",
        "level": 2
      }
    },
    {
      "id": "list-heart",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Atria (superior): receive blood from veins.",
          "Ventricles (inferior): pump blood into arteries. The left ventricle has thicker muscular walls to pump blood at high pressure around the whole body.",
          "Atrioventricular (AV) valves: separate atria from ventricles, preventing backflow.",
          "Semilunar (SL) valves: separate ventricles from pulmonary artery/aorta.",
          "Septum: muscular wall preventing mixing of oxygenated and deoxygenated blood."
        ]
      }
    },
    {
      "id": "h-cycle",
      "type": "heading",
      "data": {
        "text": "The Cardiac Cycle",
        "level": 2
      }
    },
    {
      "id": "list-cycle",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Atrial Systole: Atria contract, pressure increases. AV valves open, pushing blood into ventricles.",
          "Ventricular Systole: Ventricles contract from base up. Pressure exceeds atria, snapping AV valves shut. Pressure exceeds arteries, forcing SL valves open so blood is ejected.",
          "Diastole: Both atria and ventricles relax. Higher pressure in arteries snaps SL valves shut. Blood passively fills atria and ventricles."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-1-5-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 250 200' xmlns='http://www.w3.org/2000/svg'><ellipse cx='125' cy='30' rx='40' ry='20' fill='#7f1d1d' stroke='#e53e3e'/><text x='110' y='35' font-size='12'>Lungs</text><rect x='100' y='80' width='50' height='50' fill='#f56565' stroke='#c53030' rx='5'/><text x='110' y='110' font-size='12' fill='#1e293b'>Heart</text><ellipse cx='125' cy='170' rx='50' ry='20' fill='#1e293b' stroke='#4a5568'/><text x='110' y='175' font-size='12'>Body</text><path d='M100,30 Q50,55 100,90' fill='none' stroke='#4299e1' stroke-width='3'/><path d='M150,90 Q200,55 150,30' fill='none' stroke='#e53e3e' stroke-width='3'/><path d='M100,110 Q50,140 100,170' fill='none' stroke='#e53e3e' stroke-width='3'/><path d='M150,170 Q200,140 150,110' fill='none' stroke='#4299e1' stroke-width='3'/><text x='20' y='75' font-size='8' fill='#4299e1'>Pulmonary Artery</text><text x='180' y='75' font-size='8' fill='#e53e3e'>Pulmonary Vein</text><text x='30' y='145' font-size='8' fill='#e53e3e'>Aorta</text><text x='170' y='145' font-size='8' fill='#4299e1'>Vena Cava</text></svg>",
            "caption": "Double Circulatory System"
        }
    },
    {
        "id": "svg-diag-1-1-5-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='30' fill='#7f1d1d' stroke='#c53030' stroke-width='2'/><text x='40' y='110' font-size='10'>Atrial Systole</text><line x1='100' y1='60' x2='130' y2='60' stroke='#333' stroke-width='2'/><circle cx='170' cy='60' r='30' fill='#f56565' stroke='#9b2c2c' stroke-width='3'/><text x='140' y='110' font-size='10'>Ventricular Systole</text><line x1='210' y1='60' x2='240' y2='60' stroke='#333' stroke-width='2'/><circle cx='280' cy='60' r='30' fill='#3d1212' stroke='#e53e3e' stroke-width='1'/><text x='265' y='110' font-size='10'>Diastole</text><path d='M40,55 Q60,40 80,55' fill='none' stroke='#c53030' stroke-width='2'/><path d='M150,65 Q170,80 190,65' fill='none' stroke='#9b2c2c' stroke-width='2'/></svg>",
            "caption": "Cardiac Cycle Sequence"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Ventricular Systole",
        "text": "Make sure to clearly sequence the events in the cardiac cycle. When writing about ventricular systole, state that the ventricles contract from the apex upwards, increasing pressure above that of the atria to close the AV valves and above that of the arteries to open the semi-lunar valves."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-double",
        "prompt": "What is the advantage of a double circulatory system?"
      },
      {
        "id": "cue-2",
        "blockId": "list-heart",
        "prompt": "Why is the left ventricular wall thicker than the right?"
      },
      {
        "id": "cue-3",
        "blockId": "list-cycle",
        "prompt": "Explain the pressure changes that cause the AV valves to close."
      }
    ],
    "summaryText": "The double circulatory system maintains high systemic pressure. The heart relies on coordinated systole and diastole to move blood from high to low pressure, dictating the opening and closing of valves.",
    "ready": true
  },
  "evidence": []
};
