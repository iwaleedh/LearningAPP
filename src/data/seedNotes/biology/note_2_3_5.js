export const note_biology_2_3_5 = {
  "blocks": [
    {
      "id": "obj-6",
      "type": "objective",
      "data": {
        "text": "Explain the role of meiosis in producing genetic variation."
      }
    },
    {
      "id": "h-meiosis",
      "type": "heading",
      "data": {
        "text": "Meiosis",
        "level": 2
      }
    },
    {
      "id": "p-meiosis",
      "type": "paragraph",
      "data": {
        "text": "Meiosis is a type of cell division that produces four genetically different haploid gametes (sperm, egg) from one diploid parent cell. It involves two division stages: Meiosis I and Meiosis II."
      }
    },
    {
      "id": "p-variation",
      "type": "paragraph",
      "data": {
        "text": "Meiosis is critical for maintaining the correct chromosome number upon fertilization (diploid state restored) and creating genetic variation."
      }
    },
    {
      "id": "h-variation",
      "type": "heading",
      "data": {
        "text": "Sources of Genetic Variation",
        "level": 3
      }
    },
    {
      "id": "list-cross",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Crossing Over (Prophase I): Homologous chromosomes pair up to form bivalents. Chromatids twist around each other at points called chiasmata. Equal lengths of non-sister chromatids break and rejoin, exchanging alleles and creating new combinations of alleles.",
          "Independent Assortment (Metaphase I): Homologous chromosome pairs line up along the equator randomly. The paternal and maternal chromosomes of each pair can face either pole. This means any combination of maternal/paternal chromosomes can end up in the daughter cells."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-2-3-5-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,30 L50,110 M60,30 L60,110' stroke='#3182ce' stroke-width='6' stroke-linecap='round'/><path d='M80,30 L80,110 M90,30 L90,110' stroke='#e53e3e' stroke-width='6' stroke-linecap='round'/><text x='40' y='130' font-size='10'>Homologous Pair</text><path d='M180,30 L180,70 L190,90 L190,110' stroke='#3182ce' stroke-width='6' fill='none'/><path d='M190,30 L190,70 L180,90 L180,110' stroke='#e53e3e' stroke-width='6' fill='none'/><text x='150' y='130' font-size='10'>Chiasmata (Crossing Over)</text><path d='M260,30 L260,60 L260,110' stroke='#3182ce' stroke-width='6'/><path d='M270,30 L270,70' stroke='#3182ce' stroke-width='6'/><path d='M270,70 L270,110' stroke='#e53e3e' stroke-width='6'/><path d='M290,30 L290,70' stroke='#e53e3e' stroke-width='6'/><path d='M290,70 L290,110' stroke='#3182ce' stroke-width='6'/><path d='M300,30 L300,110' stroke='#e53e3e' stroke-width='6'/><text x='250' y='130' font-size='10' fill='#805ad5'>Recombinant Chromatids</text></svg>",
            "caption": "Meiosis: Crossing Over"
        }
    },
    {
        "id": "svg-diag-2-3-5-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='120' height='100' fill='#1e293b' rx='5'/><line x1='50' y1='30' x2='50' y2='60' stroke='#e53e3e' stroke-width='4'/><line x1='70' y1='30' x2='70' y2='60' stroke='#e53e3e' stroke-width='4'/><line x1='50' y1='80' x2='50' y2='100' stroke='#3182ce' stroke-width='4'/><line x1='70' y1='80' x2='70' y2='100' stroke='#3182ce' stroke-width='4'/><text x='40' y='140' font-size='10'>Option 1 (Red/Red, Blue/Blue)</text><rect x='180' y='20' width='120' height='100' fill='#1e293b' rx='5'/><line x1='210' y1='30' x2='210' y2='60' stroke='#e53e3e' stroke-width='4'/><line x1='230' y1='30' x2='230' y2='60' stroke='#3182ce' stroke-width='4'/><line x1='210' y1='80' x2='210' y2='100' stroke='#3182ce' stroke-width='4'/><line x1='230' y1='80' x2='230' y2='100' stroke='#e53e3e' stroke-width='4'/><text x='180' y='140' font-size='10'>Option 2 (Red/Blue, Blue/Red)</text></svg>",
            "caption": "Independent Assortment"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-meiosis",
        "prompt": "What is the end product of meiosis?"
      },
      {
        "id": "cue-2",
        "blockId": "list-cross",
        "prompt": "Explain how crossing over generates genetic variation."
      },
      {
        "id": "cue-3",
        "blockId": "list-cross",
        "prompt": "During which phase of meiosis does independent assortment occur?"
      }
    ],
    "summaryText": "Meiosis involves two divisions to produce four haploid gametes. It creates genetic variation through crossing over (exchange of alleles between homologous chromosomes) and independent assortment (random alignment of chromosome pairs).",
    "ready": true
  },
  "evidence": []
};
