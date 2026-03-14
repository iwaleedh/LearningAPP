export const note_biology_1_2_11 = {
  "blocks": [
    {
      "id": "obj-12",
      "type": "objective",
      "data": {
        "text": "Describe the structure of DNA and RNA, including mononucleotides and polynucleotides."
      }
    },
    {
      "id": "h-structure",
      "type": "heading",
      "data": {
        "text": "Nucleotide Structure",
        "level": 2
      }
    },
    {
      "id": "p-nuc",
      "type": "paragraph",
      "data": {
        "text": "Both DNA and RNA are polymers made of mononucleotide monomers. A mononucleotide consists of three parts joined by condensation reactions: a pentose sugar, a phosphate group, and a nitrogenous base."
      }
    },
    {
      "id": "h-dna-rna",
      "type": "heading",
      "data": {
        "text": "DNA vs RNA",
        "level": 3
      }
    },
    {
      "id": "list-dna-rna",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "DNA: Pentose sugar is deoxyribose. Bases are Adenine (A), Thymine (T), Cytosine (C), Guanine (G). It is double-stranded.",
          "RNA: Pentose sugar is ribose. Bases are Adenine (A), Uracil (U), Cytosine (C), Guanine (G). It is single-stranded."
        ]
      }
    },
    {
      "id": "h-bonds",
      "type": "heading",
      "data": {
        "text": "Phosphodiester Bonds",
        "level": 2
      }
    },
    {
      "id": "p-bonds",
      "type": "paragraph",
      "data": {
        "text": "Nucleotides join via condensation reactions between the phosphate of one and the sugar of another, forming a strong phosphodiester bond to create a sugar-phosphate backbone."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-11-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='50' r='20' fill='#fbd38d' stroke='#dd6b20'/><text x='45' y='90' font-size='10'>Phosphate</text><polygon points='110,40 140,40 150,70 125,90 100,70' fill='#ebf8ff' stroke='#3182ce'/><text x='105' y='110' font-size='10'>Pentose Sugar</text><rect x='170' y='30' width='60' height='30' fill='#fed7d7' stroke='#e53e3e'/><text x='175' y='80' font-size='10'>Nitrogenous Base</text><line x1='90' y1='50' x2='105' y2='50' stroke='#333' stroke-width='2'/><line x1='145' y1='45' x2='170' y2='45' stroke='#333' stroke-width='2'/></svg>",
            "caption": "Nucleotide Structure"
        }
    },
    {
        "id": "svg-diag-1-2-11-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,20 C100,20 100,130 150,130 C200,130 200,20 250,20' fill='none' stroke='#2b6cb0' stroke-width='4'/><path d='M50,130 C100,130 100,20 150,20 C200,20 200,130 250,130' fill='none' stroke='#2b6cb0' stroke-width='4'/><line x1='65' y1='40' x2='65' y2='110' stroke='#e53e3e' stroke-width='3'/><line x1='120' y1='75' x2='120' y2='75' stroke='#e53e3e' stroke-width='3'/><line x1='210' y1='40' x2='210' y2='110' stroke='#e53e3e' stroke-width='3'/><text x='270' y='50' font-size='10'>A-T (2 H-bonds)</text><text x='270' y='70' font-size='10'>C-G (3 H-bonds)</text></svg>",
            "caption": "DNA Double Helix & Pairing"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-nuc",
        "prompt": "What are the three components of a mononucleotide?"
      },
      {
        "id": "cue-2",
        "blockId": "list-dna-rna",
        "prompt": "State two differences between DNA and RNA nucleotides."
      }
    ],
    "summaryText": "Nucleotides consist of a pentose sugar, phosphate, and base. DNA has deoxyribose and Thymine; RNA has ribose and Uracil. They polymerize via phosphodiester bonds.",
    "ready": true
  },
  "evidence": []
};
