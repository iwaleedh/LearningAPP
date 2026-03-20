export const note_biology_2_3_1 = {
  "blocks": [
    {
      "id": "obj-2",
      "type": "objective",
      "data": {
        "text": "Understand the structure of a prokaryotic cell and distinguish it from a eukaryotic cell."
      }
    },
    {
      "id": "h-prok",
      "type": "heading",
      "data": {
        "text": "Prokaryotic Cells",
        "level": 2
      }
    },
    {
      "id": "p-prok",
      "type": "paragraph",
      "data": {
        "text": "Prokaryotic cells (like bacteria) are generally much smaller and simpler than eukaryotic cells. They lack a true membrane-bound nucleus and do not have membrane-bound organelles."
      }
    },
    {
      "id": "h-features",
      "type": "heading",
      "data": {
        "text": "Key Features",
        "level": 2
      }
    },
    {
      "id": "list-features",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Circular DNA: The main genetic material is a single circular loop of double-stranded DNA, free-floating in the cytoplasm.",
          "Plasmids: Small, extra rings of DNA carrying non-essential genes (e.g., antibiotic resistance).",
          "70S Ribosomes: Smaller than eukaryotic 80S ribosomes; site of protein synthesis.",
          "Cell Wall: Made of peptidoglycan (murein), preventing lysis and giving shape.",
          "Capsule (Slime Layer): Optional protective layer of polysaccharides outside the cell wall. Helps prevent dehydration and phagocytosis.",
          "Pili: Hair-like extensions helping cells attach to surfaces or each other.",
          "Flagella: Long, whip-like structures for motility (movement)."
        ]
      }
    },
    {
      "id": "callout-comp",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Prokaryotes vs Eukaryotes",
        "text": "Prokaryotes have 70S ribosomes, circular DNA not bound by histone proteins, and lack membrane-bound organelles like mitochondria or Golgi, whereas eukaryotes have 80S ribosomes, linear DNA wrapped around histones in a nucleus, and compartmentalised organelles."
      }
    }
  ,
    {
        "id": "svg-diag-2-3-1-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='100' rx='50' fill='#7f1d1d' stroke='#e53e3e' stroke-width='6'/><rect x='44' y='44' width='212' height='112' rx='56' fill='none' stroke='#c53030' stroke-width='4' stroke-dasharray='5'/><path d='M250,100 Q300,120 330,150' fill='none' stroke='#c53030' stroke-width='3'/><text x='280' y='130' font-size='10'>Flagellum</text><path d='M90,100 C110,80 130,120 150,100 C170,80 190,120 210,100' fill='none' stroke='#805ad5' stroke-width='2'/><text x='100' y='160' font-size='10' fill='#553c9a'>Circular DNA (Nucleoid)</text><circle cx='80' cy='70' r='8' fill='#3182ce'/><text x='65' y='60' font-size='10' fill='#2b6cb0'>Plasmid</text><text x='120' y='35' font-size='10' fill='#c53030'>Capsule / Slime Layer</text></svg>",
            "caption": "Prokaryotic Cell Structure (Bacterium)"
        }
    },
    {
        "id": "svg-diag-2-3-1-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='75' r='60' fill='#1c3a64' stroke='#3182ce' stroke-width='2'/><circle cx='100' cy='75' r='15' fill='#9f7aea'/><text x='65' y='20' font-size='12' font-weight='bold'>Eukaryote (~10-100µm)</text><text x='70' y='155' font-size='10'>80S Ribosomes</text><rect x='250' y='65' width='40' height='20' rx='10' fill='#7f1d1d' stroke='#e53e3e' stroke-width='2'/><text x='220' y='20' font-size='12' font-weight='bold'>Prokaryote (~1-5µm)</text><text x='230' y='110' font-size='10'>70S Ribosomes</text><line x1='15' y1='140' x2='185' y2='140' stroke='#333' marker-end='url(#arrow)' marker-start='url(#arrow)'/><line x1='230' y1='95' x2='290' y2='95' stroke='#333' marker-end='url(#arrow)' marker-start='url(#arrow)'/></svg>",
            "caption": "Eukaryote vs Prokaryote Size/Ribosomes"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-features",
        "prompt": "What is the prokaryotic cell wall made of?"
      },
      {
        "id": "cue-2",
        "blockId": "callout-comp",
        "prompt": "Name three differences between prokaryotic and eukaryotic cells."
      }
    ],
    "summaryText": "Prokaryotic cells have 70S ribosomes, circular DNA, peptidoglycan walls, and no membrane-bound organelles. Eukaryotes have 80S ribosomes, linear DNA in a nucleus, and membrane-bound organelles.",
    "ready": true
  },
  "evidence": []
};
