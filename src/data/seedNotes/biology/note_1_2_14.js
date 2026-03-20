export const note_biology_1_2_14 = {
  "blocks": [
    {
      "id": "obj-15",
      "type": "objective",
      "data": {
        "text": "Understand the nature of the genetic code and the effects of mutations."
      }
    },
    {
      "id": "h-code",
      "type": "heading",
      "data": {
        "text": "The Genetic Code",
        "level": 2
      }
    },
    {
      "id": "list-code",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Triplet: Three bases (one codon) code for one amino acid.",
          "Non-overlapping: Each base is read only once in its specific codon.",
          "Degenerate: More than one codon can code for the same amino acid (there are 64 codons but only 20 amino acids)."
        ]
      }
    },
    {
      "id": "h-mutations",
      "type": "heading",
      "data": {
        "text": "Gene Mutations",
        "level": 2
      }
    },
    {
      "id": "p-mut",
      "type": "paragraph",
      "data": {
        "text": "A mutation is a random change in the DNA base sequence. Types include substitution, insertion, and deletion."
      }
    },
    {
      "id": "p-effect",
      "type": "paragraph",
      "data": {
        "text": "Insertions and deletions cause a \"frameshift\", altering all subsequent codons. This drastically changes the amino acid sequence, leading to non-functional proteins. Due to the degenerate nature of the code, a substitution mutation might code for the same amino acid (a silent mutation) and have no effect."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-14-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 120' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='60' height='30' fill='#1c3a64' stroke='#3182ce'/><text x='65' y='60' font-weight='bold'>A U G</text><rect x='120' y='40' width='60' height='30' fill='#0e4a56' stroke='#38a169'/><text x='135' y='60' font-weight='bold'>C C G</text><rect x='180' y='40' width='60' height='30' fill='#3d1212' stroke='#e53e3e'/><text x='195' y='60' font-weight='bold'>U A A</text><text x='65' y='90' font-size='10'>Codon 1</text><text x='135' y='90' font-size='10'>Codon 2</text><text x='195' y='90' font-size='10'>Codon 3</text><text x='55' y='20' font-size='10'>(Non-Overlapping & Degenerate)</text></svg>",
            "caption": "The Triplet Code"
        }
    },
    {
        "id": "svg-diag-1-2-14-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><text x='20' y='40' font-size='12'>Normal: ... A T G / G G C / A A A ...</text><polyline points='110,50 110,70 140,70' fill='none' stroke='#e53e3e' stroke-width='2' marker-end='url(#arrow)'/><text x='150' y='75' font-size='10' fill='#c53030'>Deletion of 'T'</text><text x='20' y='110' font-size='12'>Mutant: ... A G G / G C A / A A ...</text><text x='20' y='140' font-size='10' font-weight='bold'>Effect: Entire reading frame shifts downstream!</text></svg>",
            "caption": "Frameshift Mutation"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-code",
        "prompt": "What does \"degenerate genetic code\" mean?"
      },
      {
        "id": "cue-2",
        "blockId": "p-effect",
        "prompt": "Why are deletion mutations usually more severe than substitution mutations?"
      }
    ],
    "summaryText": "The genetic code is triplet, non-overlapping, and degenerate. Mutations alter the base sequence; insertions/deletions cause frameshifts that severely alter the resulting protein.",
    "ready": true
  },
  "evidence": []
};
