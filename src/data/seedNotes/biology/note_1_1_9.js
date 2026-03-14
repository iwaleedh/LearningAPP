export const note_biology_1_1_9 = {
  "blocks": [
    {
      "id": "obj-cvd",
      "type": "objective",
      "data": {
        "text": "Analyse data on cardiovascular disease (CVD) risk factors and understand the difference between actual and perceived risk."
      }
    },
    {
      "id": "h-risk",
      "type": "heading",
      "data": {
        "text": "CVD Risk Factors",
        "level": 2
      }
    },
    {
      "id": "list-risk",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Genetics: Inherited alleles can predispose individuals to high blood pressure, poor cholesterol metabolism, or weak arteries.",
          "Age: Risk increases with age as arteries naturally lose some elasticity over time and plaque accumulates.",
          "Gender: Men are at a statistically higher risk than pre-menopausal women, as oestrogen appears to offer some protection by increasing HDL cholesterol.",
          "Diet: A diet high in saturated fat increases LDL cholesterol levels, accelerating atheroma formation. High salt intake increases blood pressure.",
          "High Blood Pressure: Damages the endothelium lining of arteries, sparking the inflammatory response that leads to atherosclerosis.",
          "Smoking: Carbon monoxide binds to haemoglobin reducing oxygen transport, while nicotine raises heart rate. Toxins in smoke also directly damage the artery endothelium.",
          "Inactivity: Lack of exercise is linked to higher blood pressure and increased obesity/BMI."
        ]
      }
    },
    {
      "id": "h-perception",
      "type": "heading",
      "data": {
        "text": "Actual vs Perceived Risk",
        "level": 2
      }
    },
    {
      "id": "p-perception",
      "type": "paragraph",
      "data": {
        "text": "Risk is the probability of an unwanted event occurring. However, people's perceived risk is often different from the actual statistical risk. People tend to overestimate risks of sudden, involuntary, or unfamiliar events (like plane crashes) and underestimate risks of familiar, voluntary, long-term lifestyle choices (like smoking or poor diet)."
      }
    },
    {
      "id": "callout-epi",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Epidemiological Studies",
        "text": "When analysing CVD data, remember that correlation does not mean causation. Two variables may rise together (correlation), but a direct experimental mechanism must be proven to claim one causes the other (causation)."
      }
    }
  ,
    {
        "id": "svg-diag-1-1-9-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='40' fill='#fed7d7' stroke='#c53030'/><text x='135' y='105' font-weight='bold'>CVD</text><line x1='150' y1='60' x2='150' y2='30' stroke='#333' stroke-width='2'/><text x='135' y='20' font-size='12'>Age / Sex</text><line x1='150' y1='140' x2='150' y2='170' stroke='#333' stroke-width='2'/><text x='130' y='185' font-size='12'>Genetics</text><line x1='110' y1='100' x2='80' y2='100' stroke='#333' stroke-width='2'/><text x='30' y='105' font-size='12'>Smoking</text><line x1='190' y1='100' x2='220' y2='100' stroke='#333' stroke-width='2'/><text x='230' y='95' font-size='12'>Diet / Obesity</text><text x='230' y='110' font-size='12'>(High LDL)</text></svg>",
            "caption": "CVD Risk Factors"
        }
    },
    {
        "id": "svg-diag-1-1-9-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M175,120 L125,50 L225,50 Z' fill='#e2e8f0' stroke='#4a5568' stroke-width='2'/><circle cx='175' cy='120' r='10' fill='#2d3748'/><rect x='105' y='20' width='40' height='30' fill='#4299e1' rx='2'/><text x='110' y='40' font-size='10' fill='white'>Actual</text><rect x='205' y='10' width='60' height='40' fill='#f56565' rx='2'/><text x='210' y='35' font-size='10' fill='white'>Perceived</text><text x='60' y='140' font-size='11' font-style='italic'>Affected by media, familiarity, and fear</text></svg>",
            "caption": "Actual vs Perceived Risk"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-risk",
        "prompt": "How does smoking increase the risk of CVD?"
      },
      {
        "id": "cue-2",
        "blockId": "list-risk",
        "prompt": "Explain why men are generally at a higher risk of CVD compared to pre-menopausal women."
      },
      {
        "id": "cue-3",
        "blockId": "p-perception",
        "prompt": "Give a reason why someone might underestimate their risk of developing CVD."
      }
    ],
    "summaryText": "CVD risk factors include genetics, age, gender, smoking, high blood pressure, and a high saturated fat diet. People often underestimate the risks of familiar, long-term lifestyle choices compared to their actual statistical probability.",
    "ready": true
  },
  "evidence": []
};
