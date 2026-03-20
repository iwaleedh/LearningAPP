export const note_biology_2_3_6 = {
  "blocks": [
    {
      "id": "obj-7",
      "type": "objective",
      "data": {
        "text": "Understand the process of fertilisation in mammals, particularly the acrosome and cortical reactions."
      }
    },
    {
      "id": "h-fert",
      "type": "heading",
      "data": {
        "text": "Mammalian Fertilisation",
        "level": 2
      }
    },
    {
      "id": "p-fert",
      "type": "paragraph",
      "data": {
        "text": "Fertilisation is the fusion of the haploid sperm nucleus with the haploid egg nucleus to form a diploid zygote."
      }
    },
    {
      "id": "h-acro",
      "type": "heading",
      "data": {
        "text": "1. The Acrosome Reaction",
        "level": 3
      }
    },
    {
      "id": "list-acro",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "The sperm reaches the egg surface and binds to receptors on the zona pellucida (jelly-like layer outside the egg membrane).",
          "The acrosome (a large lysosome in the sperm head) swells and fuses with the sperm cell surface membrane.",
          "Digestive enzymes are released from the acrosome by exocytosis.",
          "These enzymes digest a pathway through the zona pellucida allowing the sperm to reach the egg membrane."
        ]
      }
    },
    {
      "id": "h-cortical",
      "type": "heading",
      "data": {
        "text": "2. Cellular Fusion and The Cortical Reaction",
        "level": 3
      }
    },
    {
      "id": "list-cortical",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "The sperm cell membrane fuses with the egg cell membrane.",
          "The sperm nucleus enters the egg cytoplasm.",
          "This triggers the Cortical Reaction: Cortical granules within the egg move to and fuse with the egg cell membrane.",
          "They release their contents (enzymes) into the zona pellucida by exocytosis.",
          "These chemicals cause the zona pellucida to harden, preventing polyspermy (entry of additional sperm).",
          "Finally, the sperm and egg nuclei fuse to form a diploid zygote."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-2-3-6-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M250,150 A100,100 0 0,0 250,50' fill='none' stroke='#f56565' stroke-width='10'/><text x='270' y='110' font-size='12' fill='#c53030'>Zona Pellucida</text><path d='M120,100 C150,80 180,100 150,120' fill='#1c3a64' stroke='#3182ce'/><circle cx='140' cy='100' r='5' fill='#2b6cb0'/><path d='M160,100 L240,100' fill='none' stroke='#38a169' stroke-width='2' stroke-dasharray='4' marker-end='url(#arrow)'/><ellipse cx='180' cy='100' rx='10' ry='5' fill='#44370a' stroke='#d69e2e'/><text x='100' y='70' font-size='10' fill='#2b6cb0'>Sperm Head</text><text x='140' y='135' font-size='10' fill='#b7791f'>Enzymes Digest Jelly</text></svg>",
            "caption": "Acrosome Reaction"
        }
    },
    {
        "id": "svg-diag-2-3-6-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M150,150 A100,100 0 0,0 150,50' fill='none' stroke='#cbd5e0' stroke-width='10'/><path d='M140,150 A90,90 0 0,0 140,60' fill='none' stroke='#fc8181' stroke-width='4'/><circle cx='120' cy='80' r='6' fill='#ed8936'/><circle cx='110' cy='100' r='6' fill='#ed8936'/><circle cx='125' cy='120' r='6' fill='#ed8936'/><text x='20' y='70' font-size='10' fill='#dd6b20'>Cortical Granules</text><path d='M120,80 L145,80' stroke='#333' stroke-width='1' marker-end='url(#arrow)'/><text x='160' y='110' font-size='10'>Granules fuse with membrane,</text><text x='160' y='125' font-size='10'>harden the Zona Pellucida,</text><text x='160' y='140' font-size='10' font-weight='bold' fill='#e53e3e'>Prevent extra sperm entry!</text></svg>",
            "caption": "Cortical Reaction (Block to Polyspermy)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-acro",
        "prompt": "What is the role of the acrosome reaction?"
      },
      {
        "id": "cue-2",
        "blockId": "list-cortical",
        "prompt": "How does the cortical reaction prevent polyspermy?"
      }
    ],
    "summaryText": "During fertilisation, the acrosome reaction releases enzymes that digest the zona pellucida. Once the sperm enters, the cortical reaction hardens the zona pellucida to prevent polyspermy, followed by fusion of the nuclei.",
    "ready": true
  },
  "evidence": []
};
