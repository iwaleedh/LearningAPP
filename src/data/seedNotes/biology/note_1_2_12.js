export const note_biology_1_2_12 = {
  "blocks": [
    {
      "id": "obj-13",
      "type": "objective",
      "data": {
        "text": "Understand the process of semi-conservative DNA replication."
      }
    },
    {
      "id": "h-semi",
      "type": "heading",
      "data": {
        "text": "Semi-Conservative Replication",
        "level": 2
      }
    },
    {
      "id": "p-semi",
      "type": "paragraph",
      "data": {
        "text": "DNA replicates semi-conservatively, meaning each new DNA double helix consists of one original (parent) strand and one newly synthesised strand."
      }
    },
    {
      "id": "list-process",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "DNA Helicase breaks the hydrogen bonds between complementary bases, unwinding the double helix.",
          "Both exposed strands act as templates. Free DNA nucleotides align with their complementary bases (A with T, C with G) via hydrogen bonding.",
          "DNA Polymerase joins the adjacent aligned nucleotides together via condensation reactions, forming phosphodiester bonds to create the new sugar-phosphate backbone."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-2-12-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,60 L150,60 L200,20 L270,20' fill='none' stroke='#3182ce' stroke-width='3'/><path d='M50,90 L150,90 L200,130 L270,130' fill='none' stroke='#3182ce' stroke-width='3'/><line x1='70' y1='60' x2='70' y2='90' stroke='#e53e3e' stroke-width='2'/><line x1='110' y1='60' x2='110' y2='90' stroke='#e53e3e' stroke-width='2'/><polygon points='140,55 170,75 140,95' fill='#f6ad55' stroke='#dd6b20'/><text x='130' y='115' font-size='10' font-weight='bold'>Helicase (Unwinding)</text></svg>",
            "caption": "DNA Helicase Action"
        }
    },
    {
        "id": "svg-diag-1-2-12-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,40 L150,40' fill='none' stroke='#3182ce' stroke-width='4'/><path d='M50,60 L150,60' fill='none' stroke='#e53e3e' stroke-width='4'/><path d='M200,40 L300,40' fill='none' stroke='#e53e3e' stroke-width='4'/><path d='M200,60 L300,60' fill='none' stroke='#3182ce' stroke-width='4'/><text x='70' y='90' font-size='12'>Helix 1</text><text x='220' y='90' font-size='12'>Helix 2</text><text x='110' y='130' font-size='10' font-weight='bold'>1 Original Strand (Blue), 1 New Strand (Red)</text></svg>",
            "caption": "Semi-Conservative Result"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-semi",
        "prompt": "What does \"semi-conservative\" replication mean?"
      },
      {
        "id": "cue-2",
        "blockId": "list-process",
        "prompt": "What is the role of DNA helicase?"
      },
      {
        "id": "cue-3",
        "blockId": "list-process",
        "prompt": "What is the role of DNA polymerase?"
      }
    ],
    "summaryText": "In DNA replication, Helicase unzips the strands, free nucleotides align complementarily, and Polymerase joins them. Each new DNA molecule has one old strand and one new strand.",
    "ready": true
  },
  "evidence": []
};
