export const note_biology_2_3_9 = {
  "blocks": [
    {
      "id": "obj-3",
      "type": "objective",
      "data": {
        "text": "Understand epigenetics: DNA methylation and histone acetylation."
      }
    },
    {
      "id": "h-epi",
      "type": "heading",
      "data": {
        "text": "Epigenetics",
        "level": 2
      }
    },
    {
      "id": "p-epi",
      "type": "paragraph",
      "data": {
        "text": "Epigenetics involves heritable changes in gene function/expression without changing the underlying DNA base sequence. It is caused by environmental factors attaching chemical \"tags\" (epigenetic markers) to DNA or histone proteins."
      }
    },
    {
      "id": "h-meth",
      "type": "heading",
      "data": {
        "text": "DNA Methylation",
        "level": 3
      }
    },
    {
      "id": "p-meth",
      "type": "paragraph",
      "data": {
        "text": "Methyl groups (-CH3) are attached directly to DNA, usually at CpG sites (where a cytosine is next to a guanine). Increased methylation changes the DNA structure such that transcription factors and RNA polymerase cannot bind to the promoter region. Therefore, the gene is switched OFF (repressed)."
      }
    },
    {
      "id": "h-acet",
      "type": "heading",
      "data": {
        "text": "Histone Acetylation",
        "level": 3
      }
    },
    {
      "id": "p-acet",
      "type": "paragraph",
      "data": {
        "text": "DNA is wrapped around histones to form chromatin. Acetyl groups can be added to histone tails. Increased acetylation causes the chromatin to become less tightly packed, making it easier for transcription factors and RNA polymerase to bind to the DNA. Decreased acetylation packs the chromatin tightly, switching genes OFF."
      }
    }
  ,
    {
        "id": "svg-diag-2-3-9-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,80 Q100,50 150,80 T250,80' fill='none' stroke='#3182ce' stroke-width='4'/><path d='M50,100 Q100,70 150,100 T250,100' fill='none' stroke='#3182ce' stroke-width='4'/><circle cx='80' cy='65' r='6' fill='#e53e3e'/><circle cx='100' cy='55' r='6' fill='#e53e3e'/><circle cx='200' cy='95' r='6' fill='#e53e3e'/><text x='10' y='40' font-size='10' font-weight='bold' fill='#c53030'>Methyl groups (CH₃) attached</text><rect x='110' y='20' width='40' height='30' fill='#78350f' opacity='0.8'/><line x1='130' y1='50' x2='110' y2='65' stroke='black' stroke-width='2'/><line x1='110' y1='50' x2='130' y2='65' stroke='black' stroke-width='2'/><text x='160' y='35' font-size='10'>TF cannot bind!</text><text x='30' y='140' font-size='12' font-weight='bold'>Effect: Gene is switched OFF (Silenced)</text></svg>",
            "caption": "DNA Methylation (Gene Silencing)"
        }
    },
    {
        "id": "svg-diag-2-3-9-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='80' r='20' fill='#a0aec0'/><circle cx='120' cy='80' r='20' fill='#a0aec0'/><circle cx='100' cy='100' r='20' fill='#a0aec0'/><circle cx='120' cy='100' r='20' fill='#a0aec0'/><path d='M50,90 Q110,30 170,90' fill='none' stroke='#3182ce' stroke-width='3'/><text x='60' y='40' font-size='10'>Tightly Packed (Unacetylated)</text><circle cx='250' cy='80' r='15' fill='#a0aec0'/><circle cx='300' cy='90' r='15' fill='#a0aec0'/><path d='M230,80 Q250,50 270,90 T320,80' fill='none' stroke='#3182ce' stroke-width='3'/><rect x='245' y='60' width='10' height='10' fill='#48bb78'/><rect x='295' y='70' width='10' height='10' fill='#48bb78'/><text x='255' y='55' font-size='8' fill='#2f855a'>Acetylation</text><text x='230' y='140' font-size='10' fill='#2f855a'>Loose Chromatin (Gene ON)</text></svg>",
            "caption": "Histone Acetylation (Gene Activation)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-meth",
        "prompt": "What effect does increased DNA methylation have on a gene?"
      },
      {
        "id": "cue-2",
        "blockId": "p-acet",
        "prompt": "How does increased histone acetylation increase gene transcription?"
      }
    ],
    "summaryText": "Epigenetic tags control gene expression without altering the DNA code. Increased DNA methylation represses a gene. Increased histone acetylation loosens chromatin, making it easier to transcribe the gene.",
    "ready": true
  },
  "evidence": []
};
