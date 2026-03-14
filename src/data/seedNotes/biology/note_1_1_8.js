export const note_biology_1_1_8 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Understand the process of atherosclerosis, blood clotting machinery, and their role in cardiovascular disease."
      }
    },
    {
      "id": "h-athero",
      "type": "heading",
      "data": {
        "text": "Atherosclerosis",
        "level": 2
      }
    },
    {
      "id": "p-ath1",
      "type": "paragraph",
      "data": {
        "text": "Atherosclerosis is the hardening of arteries due to the build-up of plaque (atheroma). It narrows the arterial lumen, raising blood pressure and restricting blood flow to tissues. It is triggered by damage to the endothelium."
      }
    },
    {
      "id": "list-ath-stages",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Endothelial damage: The single cell layer of the artery is damaged (e.g. by high blood pressure, toxins from smoke).",
          "Inflammatory response: White blood cells (macrophages) leave the blood vessel and migrate into the artery wall along with cholesterol from the blood, building up as a fatty deposit.",
          "Plaque formation: Calcium salts and fibrous tissue build up around the fatty deposit, forming a hard plaque called an atheroma.",
          "Loss of elasticity: The artery wall loses its elasticity and the lumen is narrowed, which further increases blood pressure, leading to a positive feedback loop."
        ]
      }
    },
    {
      "id": "h-clot",
      "type": "heading",
      "data": {
        "text": "Blood Clotting (Thrombosis)",
        "level": 2
      }
    },
    {
      "id": "p-clot intro",
      "type": "paragraph",
      "data": {
        "text": "Blood clots form to seal wounds, prevent blood loss, and block entry of pathogens. If a clot forms inside an atheroma-narrowed blood vessel, it can completely block the vessel (coronary thrombosis), causing a stroke or myocardial infarction."
      }
    },
    {
      "id": "list-clotting",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Damage triggers: Damaged exposed collagen or damaged platelets release the enzyme thromboplastin.",
          "Thromboplastin converts: With calcium ions and vitamin K, thromboplastin converts the soluble plasma protein prothrombin into the active enzyme thrombin.",
          "Thrombin converts: Thrombin then catalyses the conversion of the soluble plasma protein fibrinogen into the insoluble protein fibrin.",
          "Fibrin mesh: Fibrin fibres form a mesh that traps red blood cells and platelets, forming a solid clot."
        ]
      }
    },
    {
      "id": "callout-risk",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Risk Factors for CVD",
        "text": "Genetics, age, gender (men are at higher risk due to lack of oestrogen which lowers LDL), high blood pressure, high LDL cholesterol diets, smoking, and physical inactivity all increase the risk of atherosclerosis and CVD."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-8-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 450 120' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='40' width='100' height='40' fill='#fff5f5' stroke='#e53e3e'/><rect x='150' y='40' width='100' height='40' fill='#fff5f5' stroke='#e53e3e'/><path d='M160,80 Q200,55 240,80' fill='#faf089'/><rect x='280' y='40' width='100' height='40' fill='#fff5f5' stroke='#e53e3e'/><path d='M290,80 Q330,30 370,80' fill='#ecc94b' stroke='#b7791f' stroke-width='2'/><text x='35' y='100' font-size='10' font-weight='bold'>Normal Artery</text><text x='165' y='100' font-size='10' font-weight='bold'>Fatty Streak</text><text x='285' y='100' font-size='10' font-weight='bold'>Plaque (Atheroma)</text><text x='290' y='25' font-size='9' fill='#c53030'>Narrowed Lumen</text></svg>",
            "caption": "Atherosclerosis Progression"
        }
    },
    {
        "id": "svg-diag-1-1-8-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='80' height='30' fill='#e2e8f0' rx='4'/><text x='25' y='40' font-size='10'>Tissue Damage</text><text x='110' y='40'>→</text><rect x='130' y='20' width='100' height='30' fill='#fbd38d' rx='4'/><text x='135' y='40' font-size='10' font-weight='bold'>Thromboplastin</text><line x1='180' y1='50' x2='180' y2='80' stroke='#333' stroke-width='2'/><text x='190' y='65' font-size='9'>+ Calcium + Vit K</text><text x='70' y='95' font-size='11'>Prothrombin</text><text x='155' y='95'>→</text><rect x='180' y='75' width='80' height='30' fill='#90cdf4' rx='4'/><text x='195' y='95' font-size='11' font-weight='bold'>Thrombin</text><line x1='220' y1='105' x2='220' y2='130' stroke='#333' stroke-width='2'/><text x='110' y='145' font-size='11'>Fibrinogen (Soluble)</text><text x='225' y='145'>→</text><rect x='250' y='125' width='120' height='30' fill='#feb2b2' rx='4'/><text x='260' y='145' font-size='11' font-weight='bold' fill='#9b2c2c'>Fibrin (Insoluble Net)</text></svg>",
            "caption": "Blood Clotting Cascade"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-ath-stages",
        "prompt": "Describe the stages in the development of atherosclerosis."
      },
      {
        "id": "cue-2",
        "blockId": "list-clotting",
        "prompt": "Outline the cascade of reactions that leads to blood clotting."
      },
      {
        "id": "cue-3",
        "blockId": "p-clot intro",
        "prompt": "How can an atheroma lead to a myocardial infarction?"
      }
    ],
    "summaryText": "Atherosclerosis involves endothelial damage, cholesterol deposition, and hard plaque formation. The clotting cascade relies on thromboplastin converting prothrombin to thrombin, which converts fibrinogen to fibrin.",
    "ready": true
  },
  "evidence": []
};
