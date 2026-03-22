export const note_biology_1_2_8 = {
  "blocks": [
    {
      "id": "obj-9",
      "type": "objective",
      "data": {
        "text": "Explain the secondary, tertiary, and quaternary levels of protein structure."
      }
    },
    {
      "id": "h-structure",
      "type": "heading",
      "data": {
        "text": "Levels of Protein Structure",
        "level": 2
      }
    },
    {
      "id": "list-levels",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Primary: The specific sequence of amino acids in a polypeptide chain, determined by genes.",
          "Secondary: Hydrogen bonds form between the oxygen of the carboxyl group and hydrogen of the amine group, causing the chain to fold into an alpha-helix or fold into a beta-pleated sheet.",
          "Tertiary: Further folding into a complex, specific 3D shape. Maintained by bonds between the R-groups: Hydrogen bonds, weak van der Waals forces, Ionic bonds, and strong covalent Disulfide bridges (between cysteine R-groups).",
          "Quaternary: A protein consisting of more than one polypeptide chain joined together (e.g., Haemoglobin has 4 chains). May include non-protein prosthetic groups."
        ]
      }
    },
    {
      "id": "h-globular",
      "type": "heading",
      "data": {
        "text": "Globular vs Fibrous Proteins",
        "level": 2
      }
    },
    {
      "id": "p-globular",
      "type": "paragraph",
      "data": {
        "text": "Globular proteins (e.g., enzymes, haemoglobin) are spherical, compact, and soluble in water because hydrophobic R-groups face inward and hydrophilic ones outward. Fibrous proteins (e.g., collagen, keratin) form long, insoluble, strong structural strands."
      }
    }
  ,
    {
        "id": "svg-diag-1-2-8-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M40,20 Q60,130 80,20 T120,20 T160,20' fill='none' stroke='#9f7aea' stroke-width='5'/><text x='70' y='140' font-size='12'>α-Helix</text><polyline points='220,100 240,30 260,100 280,30 300,100' fill='none' stroke='#f6ad55' stroke-width='5'/><text x='220' y='140' font-size='12'>β-Pleated Sheet</text><text x='110' y='15' font-size='10' fill='#718096'>(Hydrogen Bonds)</text></svg>",
            "caption": "Secondary Structure"
        }
    },
    {
        "id": "svg-diag-1-2-8-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M50,100 Q80,20 150,70 T250,50' fill='none' stroke='#4a5568' stroke-width='4'/><line x1='80' y1='50' x2='120' y2='80' stroke='#e53e3e' stroke-width='4'/><text x='65' y='45' font-size='10' fill='#c53030'>Disulfide Bridge</text><line x1='160' y1='80' x2='190' y2='60' stroke='#3182ce' stroke-width='2' stroke-dasharray='4'/><text x='160' y='100' font-size='10' fill='#2b6cb0'>Ionic Bond</text><line x1='210' y1='55' x2='230' y2='90' stroke='#38a169' stroke-width='2' stroke-dasharray='2'/><text x='200' y='110' font-size='10' fill='#2f855a'>Hydrogen Bond</text></svg>",
            "caption": "Tertiary Structure Bonds"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Tertiary Bonds",
        "text": "When listing bonds maintaining tertiary structure, be specific: state hydrogen bonds, ionic bonds, and disulfide bridges (which only form between cysteine R-groups)."
      }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Tertiary Bonds",
        "text": "When listing bonds maintaining tertiary structure, be specific: state hydrogen bonds, ionic bonds, and disulfide bridges (which only form between cysteine R-groups)."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-levels",
        "prompt": "Name the four types of bonds/forces that hold the tertiary 3D structure together."
      },
      {
        "id": "cue-2",
        "blockId": "p-globular",
        "prompt": "Explain why globular proteins are soluble in water."
      }
    ],
    "summaryText": "Protein structure progresses from primary sequence to secondary (alpha/beta shapes), to specific complex 3D tertiary shapes held by various R-group bonds, and sometimes quaternary structures of multiple chains.",
    "ready": true
  },
  "evidence": []
};
