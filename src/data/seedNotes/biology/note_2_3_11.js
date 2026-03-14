export const note_biology_2_3_11 = {
  "blocks": [
    {
      "id": "obj-5",
      "type": "objective",
      "data": {
        "text": "Understand the concept of cloning and how it is achieved in plants and mammals."
      }
    },
    {
      "id": "h-clone",
      "type": "heading",
      "data": {
        "text": "Cloning",
        "level": 2
      }
    },
    {
      "id": "p-intro",
      "type": "paragraph",
      "data": {
        "text": "A clone is a genetically identical copy of a cell or an organism."
      }
    },
    {
      "id": "h-plant",
      "type": "heading",
      "data": {
        "text": "Plant Cloning (Tissue Culture)",
        "level": 3
      }
    },
    {
      "id": "list-plant",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "A small group of totipotent stem cells (explants) are taken from a plant (e.g., from the shoot/root tip).",
          "They are sterilised to kill any microorganisms.",
          "Placed on an agar medium containing nutrients (glucose, amino acids) and plant growth hormones (auxin).",
          "The explants divide by mitosis to form a mass of undifferentiated cells called a callus.",
          "The callus is subdivided and treated with hormone ratios that stimulate roots/shoots, eventually growing into a clone of the original plant."
        ]
      }
    },
    {
      "id": "h-mammal",
      "type": "heading",
      "data": {
        "text": "Mammalian Cloning (SCNT)",
        "level": 3
      }
    },
    {
      "id": "p-scnt",
      "type": "paragraph",
      "data": {
        "text": "Somatic Cell Nuclear Transfer (SCNT) was used to clone Dolly the sheep:"
      }
    },
    {
      "id": "list-mammal",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          "Remove the diploid nucleus from a somatic (body) cell of the animal to be cloned.",
          "Remove the haploid nucleus from a mature unfertilised egg cell (enucleation) of a donor female.",
          "Insert the somatic nucleus into the enucleated egg cell.",
          "Apply an electric shock to fuse them and stimulate the egg to begin dividing by mitosis (forming an embryo).",
          "Implant the embryo into the uterus of a surrogate mother to develop."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-2-3-11-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 450 150' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='20' fill='#ebf8ff' stroke='#3182ce'/><circle cx='50' cy='50' r='5' fill='#2b6cb0'/><text x='10' y='85' font-size='10'>Body Cell (Diploid)</text><circle cx='150' cy='50' r='20' fill='#fff5f5' stroke='#e53e3e'/><circle cx='150' cy='50' r='5' fill='#c53030'/><text x='120' y='85' font-size='10'>Egg Cell (Haploid)</text><line x1='145' y1='45' x2='155' y2='55' stroke='black' stroke-width='2'/><line x1='155' y1='45' x2='145' y2='55' stroke='black' stroke-width='2'/><text x='125' y='100' font-size='8'>Remove Nucleus</text><path d='M60,60 Q105,100 150,110' fill='none' stroke='#333' marker-end='url(#arrow)'/><path d='M150,120 L200,120' fill='none' stroke='#333' marker-end='url(#arrow)'/><circle cx='230' cy='120' r='20' fill='#fff5f5' stroke='#e53e3e'/><circle cx='230' cy='120' r='5' fill='#2b6cb0'/><text x='210' y='155' font-size='10'>Fused Cell (Cloned)</text><rect x='160' y='100' width='20' height='10' fill='#f6e05e'/><text x='155' y='95' font-size='8'>Electric shock</text></svg>",
            "caption": "Somatic Cell Nuclear Transfer (SCNT)"
        }
    },
    {
        "id": "svg-diag-2-3-11-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><path d='M30,80 C50,40 70,80 50,120' fill='#c6f6d5' stroke='#38a169'/><text x='20' y='140' font-size='10'>Plant Explant</text><path d='M70,80 L110,80' stroke='#333' marker-end='url(#arrow)'/><rect x='120' y='60' width='40' height='40' fill='#edf2f7'/><circle cx='140' cy='80' r='10' fill='#a0aec0'/><text x='125' y='115' font-size='10'>Callus</text><path d='M170,80 L210,80' stroke='#333' marker-end='url(#arrow)'/><path d='M230,100 L230,60 M220,70 L230,60 L240,70' fill='none' stroke='#38a169' stroke-width='2'/><line x1='220' y1='100' x2='240' y2='100' stroke='#333' stroke-width='2'/><text x='215' y='115' font-size='10'>Plantlet</text><text x='100' y='50' font-size='8' fill='#c53030'>Sterilise & Auxins/Cytokinins</text></svg>",
            "caption": "Plant Tissue Culture (Micropropagation)"
        }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "list-plant",
        "prompt": "What is a callus in plant tissue culture?"
      },
      {
        "id": "cue-2",
        "blockId": "list-mammal",
        "prompt": "What does SCNT stand for, and what are its key steps?"
      }
    ],
    "summaryText": "Cloning produces genetically identical offspring. In plants, totipotent explants form a callus in tissue culture. Mammal cloning relies on SCNT: inserting a somatic nucleus into an enucleated egg, shocking it, and implanting it.",
    "ready": true
  },
  "evidence": []
};
