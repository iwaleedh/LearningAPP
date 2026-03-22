export const note_biology_1_1_7 = {
  "blocks": [
    {
      "id": "obj-fluids",
      "type": "objective",
      "data": {
        "text": "Understand the formation of tissue fluid and its relationship to blood plasma and lymph."
      }
    },
    {
      "id": "h-tissue",
      "type": "heading",
      "data": {
        "text": "Blood Plasma and Tissue Fluid",
        "level": 2
      }
    },
    {
      "id": "p-plasma",
      "type": "paragraph",
      "data": {
        "text": "Blood plasma is the liquid component of blood, carrying dissolved glucose, oxygen, amino acids, mineral ions, and plasma proteins. When plasma is forced out of capillaries into the surrounding spaces, it forms tissue fluid, which bathes the cells."
      }
    },
    {
      "id": "h-formation",
      "type": "heading",
      "data": {
        "text": "Formation of Tissue Fluid",
        "level": 2
      }
    },
    {
      "id": "list-pressures",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Arterial End: Blood entering the capillary bed has a high hydrostatic pressure from the heart's contraction. This outward pressure is greater than the inward oncotic pressure (osmotic pull of plasma proteins). Therefore, fluid is forced out of the pores in the capillary walls.",
          "Filtration: Small molecules (water, oxygen, glucose) are pushed out forming tissue fluid. Large molecules like plasma proteins and red blood cells are too large to pass through and remain in the blood.",
          "Venous End: At the venule end, the hydrostatic pressure has dropped significantly. The oncotic pressure (created by the retained plasma proteins) is now higher than the hydrostatic pressure, drawing water back into the capillary by osmosis."
        ]
      }
    },
    {
      "id": "h-lymph",
      "type": "heading",
      "data": {
        "text": "The Lymphatic System",
        "level": 2
      }
    },
    {
      "id": "p-lymph",
      "type": "paragraph",
      "data": {
        "text": "Not all tissue fluid is reabsorbed at the venous end. The excess (about 10%) drains into blind-ended lymph capillaries, becoming lymph. Lymph eventually returns to the blood circulatory system via the thoracic duct."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-7-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='70' width='300' height='40' fill='#3d1212' stroke='#e53e3e'/><text x='60' y='95' font-size='12'>Arterial End</text><text x='270' y='95' font-size='12'>Venous End</text><path d='M100,65 Q120,30 150,50' fill='none' stroke='#3182ce' stroke-width='2' marker-end='url(#arrow)'/><path d='M250,50 Q280,30 300,65' fill='none' stroke='#3182ce' stroke-width='2' marker-end='url(#arrow)'/><text x='80' y='25' font-size='10' font-weight='bold'>High Hydrostatic Pressure</text><text x='80' y='40' font-size='10'>(Fluid forced out)</text><text x='230' y='25' font-size='10' font-weight='bold'>High Oncotic Pull</text><text x='230' y='40' font-size='10'>(Fluid drawn in)</text><circle cx='200' cy='30' r='15' fill='#0a2e1a' stroke='#2f855a'/><circle cx='230' cy='45' r='15' fill='#0a2e1a' stroke='#2f855a'/><circle cx='170' cy='45' r='15' fill='#0a2e1a' stroke='#2f855a'/><text x='188' y='35' font-size='10'>Cells</text></svg>",
            "caption": "Formation of Tissue Fluid"
        }
    },
    {
        "id": "svg-diag-1-1-7-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 140' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='70' width='200' height='30' fill='#3d1212' stroke='#e53e3e'/><circle cx='120' cy='40' r='10' fill='#1e293b'/><circle cx='150' cy='40' r='10' fill='#1e293b'/><path d='M180,45 Q240,45 280,70' fill='none' stroke='#48bb78' stroke-width='12' stroke-dasharray='8,4'/><text x='200' y='30' font-size='12' fill='#2f855a' font-weight='bold'>Lymphatic Vessel</text><text x='60' y='120' font-size='10'>Excess Tissue Fluid drains into Lymph</text><path d='M100,50 L180,50' stroke='#333' stroke-width='1' marker-end='url(#arrow)'/></svg>",
            "caption": "Lymphatic Drainage"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Hydrostatic vs. Oncotic Pressure",
        "text": "A classic mistake is confusing hydrostatic and oncotic pressure. State clearly that at the arterial end of a capillary, the hydrostatic pressure from the heart is greater than the oncotic pressure (osmotic pull), forcing plasma and small molecules out to form tissue fluid."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-pressures",
        "prompt": "Why is fluid forced out at the arterial end of a capillary?"
      },
      {
        "id": "cue-2",
        "blockId": "list-pressures",
        "prompt": "What molecules remain in the blood during the formation of tissue fluid?"
      },
      {
        "id": "cue-3",
        "blockId": "p-lymph",
        "prompt": "What happens to excess tissue fluid that is not reabsorbed into the capillaries?"
      }
    ],
    "summaryText": "Tissue fluid is formed when hydrostatic pressure overcomes oncotic pressure at the capillary's arterial end. Reabsorption occurs at the venous end where oncotic pressure is higher. Excess fluid becomes lymph.",
    "ready": true
  },
  "evidence": []
};
