export const note_biology_1_2_0 = {
  "blocks": [
    {
      "id": "obj-1",
      "type": "objective",
      "data": {
        "text": "Understand the principles of gas exchange and how Fick's Law of diffusion applies to biological systems."
      }
    },
    {
      "id": "h-gas-exchange",
      "type": "heading",
      "data": {
        "text": "Gas Exchange Principles",
        "level": 2
      }
    },
    {
      "id": "p-1",
      "type": "paragraph",
      "data": {
        "text": "All organisms must exchange gases (like oxygen and carbon dioxide) with their environment to survive. In small, single-celled organisms, simple diffusion across the cell membrane is sufficient because the surface area to volume ratio is very large and the diffusion distance is very short."
      }
    },
    {
      "id": "h-ficks-law",
      "type": "heading",
      "data": {
        "text": "Fick's Law of Diffusion",
        "level": 2
      }
    },
    {
      "id": "p-ficks",
      "type": "paragraph",
      "data": {
        "text": "Fick's Law outlines the key variables that dictate the rate of diffusion across a surface:"
      }
    },
    {
      "id": "eq-ficks",
      "type": "equation",
      "data": {
        "html": "Rate of Diffusion &propto; <span class=\"nb-frac\"><span class=\"nb-num\">Surface Area &times; Concentration Difference</span><span class=\"nb-den\">Thickness of Membrane</span></span>"
      }
    },
    {
      "id": "list-ficks",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Surface Area: A larger surface area increases the rate of diffusion.",
          "Concentration Gradient: A steeper concentration difference increases the rate.",
          "Thickness (Diffusion Distance): A thinner surface (shorter distance) increases the rate."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-0-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-size='14' font-weight='bold'>Rate of Diffusion ∝</text><rect x='170' y='10' width='120' height='30' fill='#ebf8ff' stroke='#3182ce'/><text x='180' y='30' font-size='12'>Surface Area × ∆C</text><line x1='170' y1='45' x2='290' y2='45' stroke='#333' stroke-width='2'/><rect x='170' y='50' width='120' height='30' fill='#fff5f5' stroke='#e53e3e'/><text x='200' y='70' font-size='12'>Thickness</text><text x='20' y='90' font-size='10'>∆C = Concentration Difference</text><text x='20' y='110' font-size='10'>Large SA + Thin Surface = Fast Diffusion</text></svg>",
            "caption": "Fick's Law Variables"
        }
    },
    {
        "id": "svg-diag-1-2-0-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><path d='M30,30 L30,120 M70,30 L70,120' stroke='#a0aec0' stroke-width='2'/><circle cx='10' cy='75' r='5' fill='#e53e3e'/><path d='M20,75 L80,75' stroke='#e53e3e' stroke-width='2' stroke-dasharray='4' marker-end='url(#arrow)'/><text x='35' y='20' font-size='10'>Thin Path (Fast)</text><path d='M150,30 L150,120 M250,30 L250,120' stroke='#a0aec0' stroke-width='2'/><rect x='150' y='30' width='100' height='90' fill='#edf2f7'/><circle cx='130' cy='75' r='5' fill='#e53e3e'/><path d='M140,75 Q200,60 260,75' stroke='#e53e3e' stroke-width='2' stroke-dasharray='4' marker-end='url(#arrow)'/><text x='155' y='20' font-size='10'>Thick Path (Slow)</text></svg>",
            "caption": "Membrane Thickness Impact"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "eq-ficks",
        "prompt": "State the equation for Fick's Law."
      },
      {
        "id": "cue-2",
        "blockId": "list-ficks",
        "prompt": "According to Fick's Law, what three factors maximise diffusion?"
      }
    ],
    "summaryText": "Fick's Law states that the rate of diffusion is proportional to (Surface Area x Concentration Difference) / Thickness of Membrane.",
    "ready": true
  },
  "evidence": []
};
