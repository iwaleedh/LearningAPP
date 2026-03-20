export const note_biology_1_2_13 = {
  "blocks": [
    {
      "id": "obj-14",
      "type": "objective",
      "data": {
        "text": "Describe the processes of transcription and translation in protein synthesis."
      }
    },
    {
      "id": "h-transcription",
      "type": "heading",
      "data": {
        "text": "Transcription (in the Nucleus)",
        "level": 2
      }
    },
    {
      "id": "list-trans",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "RNA Polymerase binds to DNA and unwinds a specific gene.",
          "Free RNA nucleotides base-pair with the exposed template (antisense) strand (A binds to U, C to G).",
          "RNA Polymerase joins the RNA nucleotides forming a strand of mRNA.",
          "The mRNA detaches and leaves the nucleus through a nuclear pore."
        ]
      }
    },
    {
      "id": "h-translation",
      "type": "heading",
      "data": {
        "text": "Translation (at the Ribosome)",
        "level": 2
      }
    },
    {
      "id": "list-transl",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "mRNA attaches to a ribosome in the cytoplasm.",
          "tRNA molecules bring specific amino acids to the ribosome. Each tRNA has an anticodon that is complementary to an mRNA codon.",
          "The ribosome moves along the mRNA, matching tRNA anticodons to mRNA codons via hydrogen bonds.",
          "Peptide bonds form between adjacent amino acids, building the polypeptide chain until a stop codon is reached."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-13-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M30,80 L120,80 L160,40 L280,40' fill='none' stroke='#2b6cb0' stroke-width='3'/><path d='M150,110 L280,110' fill='none' stroke='#2b6cb0' stroke-width='3'/><path d='M140,70 L280,70' fill='none' stroke='#e53e3e' stroke-width='3'/><rect x='110' y='30' width='80' height='90' fill='#0a2e1a' opacity='0.6' rx='10'/><text x='115' y='20' font-size='10'>RNA Polymerase</text><text x='290' y='75' font-size='10' fill='#c53030'>mRNA</text></svg>",
            "caption": "Transcription (DNA to mRNA)"
        }
    },
    {
        "id": "svg-diag-1-2-13-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='90' width='250' height='10' fill='#e53e3e'/><ellipse cx='150' cy='100' rx='60' ry='30' fill='#1e293b' stroke='#a0aec0'/><text x='125' y='125' font-size='12'>Ribosome</text><path d='M130,50 L140,70 L150,50 Z' fill='#f6ad55'/><circle cx='140' cy='30' r='10' fill='#9f7aea'/><text x='155' y='35' font-size='10'>Amino Acid</text><text x='60' y='115' font-size='10' fill='#c53030'>mRNA</text><text x='100' y='65' font-size='10'>tRNA</text></svg>",
            "caption": "Translation (tRNA & Ribosome)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-trans",
        "prompt": "Which enzyme produces mRNA during transcription?"
      },
      {
        "id": "cue-2",
        "blockId": "list-transl",
        "prompt": "What is the role of tRNA in translation?"
      }
    ],
    "summaryText": "Transcription copies a DNA gene into mRNA using RNA polymerase. Translation occurs at the ribosome, where tRNA anticodons match mRNA codons to assemble a specific amino acid sequence.",
    "ready": true
  },
  "evidence": []
};
