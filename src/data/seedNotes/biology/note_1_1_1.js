export const note_biology_1_1_1 = {
  "blocks": [
    {
      "id": "obj-carbs",
      "type": "objective",
      "data": {
        "text": "Describe the structure of monosaccharides, disaccharides, and polysaccharides, and the formation of glycosidic bonds."
      }
    },
    {
      "id": "h-mono",
      "type": "heading",
      "data": {
        "text": "Monosaccharides",
        "level": 2
      }
    },
    {
      "id": "p-mono",
      "type": "paragraph",
      "data": {
        "text": "Monosaccharides are simple sugars with the general formula (CH2O)n. They provide quick energy and act as monomers for larger carbohydrates. Key examples include glucose, galactose, and fructose."
      }
    },
    {
      "id": "p-glucose",
      "type": "paragraph",
      "data": {
        "text": "Glucose is a hexose sugar (6 carbons) and comes in two isomers: alpha-glucose (hydroxyl group on carbon 1 points DOWN) and beta-glucose (hydroxyl group on carbon 1 points UP)."
      }
    },
    {
      "id": "h-bonds",
      "type": "heading",
      "data": {
        "text": "Glycosidic Bonds",
        "level": 2
      }
    },
    {
      "id": "p-bonds",
      "type": "paragraph",
      "data": {
        "text": "Monosaccharides are joined together via condensation reactions, which release a molecule of water and form a strong covalent glycosidic bond. This can be broken down by adding water in a hydrolysis reaction."
      }
    },
    {
      "id": "h-poly",
      "type": "heading",
      "data": {
        "text": "Polysaccharides",
        "level": 2
      }
    },
    {
      "id": "list-poly",
      "type": "list",
      "data": {
        "style": "bullet",
        "items": [
          "Starch: The main energy storage in plants. Made of alpha-glucose. Consists of amylose (unbranched, 1,4-glycosidic bonds, coiled) and amylopectin (branched, 1,4 and 1,6-glycosidic bonds). Highly compact and insoluble.",
          "Glycogen: The main energy storage in animals. Made of alpha-glucose with highly branched 1,4 and 1,6-glycosidic bonds. Can be rapidly hydrolysed to release glucose.",
          "Cellulose: Structural component of plant cell walls. Made of straight, unbranched chains of beta-glucose joined by 1,4-glycosidic bonds. Alternate molecules are inverted, allowing hydrogen bonds to cross-link chains into strong microfibrils."
        ]
      }
    }
  ,
    {
        "id": "svg-diag-1-1-1-0",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 300 120' xmlns='http://www.w3.org/2000/svg'><polygon points='50,20 80,40 80,80 50,100 20,80 20,40' fill='#0f172a' stroke='#2b6cb0' stroke-width='2'/><text x='25' y='115' font-size='10' font-family='sans-serif'>OH (down)</text><text x='35' y='65' font-weight='bold' font-family='sans-serif' font-size='12'>α-glucose</text><polygon points='200,20 230,40 230,80 200,100 170,80 170,40' fill='#0f172a' stroke='#2b6cb0' stroke-width='2'/><text x='175' y='15' font-size='10' font-family='sans-serif'>OH (up)</text><text x='185' y='65' font-weight='bold' font-family='sans-serif' font-size='12'>β-glucose</text></svg>",
            "caption": "Alpha vs Beta Glucose"
        }
    },
    {
        "id": "svg-diag-1-1-1-1",
        "type": "svg",
        "data": {
            "svg": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><path d='M50,50 L80,50' stroke='#333' stroke-width='3'/><text x='55' y='45' font-size='12'>OH</text><text x='100' y='55' font-weight='bold'>+</text><text x='125' y='45' font-size='12'>HO</text><path d='M140,50 L170,50' stroke='#333' stroke-width='3'/><text x='190' y='55' font-weight='bold'>→</text><path d='M220,50 L250,50' stroke='#333' stroke-width='3'/><text x='255' y='55' font-weight='bold' fill='#c53030'>O</text><path d='M275,50 L305,50' stroke='#333' stroke-width='3'/><text x='320' y='55' font-weight='bold'>+ H₂O</text><rect x='45' y='25' width='130' height='45' fill='none' stroke='#3182ce' stroke-dasharray='4' rx='5'/><text x='55' y='85' fill='#3182ce' font-size='10' font-weight='bold'>Condensation</text></svg>",
            "caption": "Glycosidic Bond Formation"
        }
    }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Glycosidic Bonds",
        "text": "Students often confuse the glycosidic bonds in glycogen and cellulose. Remember that glycogen has both 1,4 and 1,6 glycosidic bonds allowing rapid hydrolysis, while cellulose only has 1,4 bonds forming straight unbranched chains."
      }
    }  ,
    {
      "id": "callout-injected-1",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Relating Structure to Function",
        "text": "When describing properties of starch or glycogen, always link structure to function: state that they are highly branched for rapid release of glucose, or compact so a large amount of energy can be stored in a small space."
      }
    }
  ],
  "recall": {
    "enabled": true,
    "cues": [
      {
        "id": "cue-1",
        "blockId": "p-glucose",
        "prompt": "What is the structural difference between alpha and beta glucose?"
      },
      {
        "id": "cue-2",
        "blockId": "p-bonds",
        "prompt": "What type of reaction breaks a glycosidic bond?"
      },
      {
        "id": "cue-3",
        "blockId": "list-poly",
        "prompt": "Describe the structure of starch and how it relates to its function."
      }
    ],
    "summaryText": "Carbohydrates are formed from monosaccharide monomers joined by glycosidic bonds via condensation reactions. Starch and glycogen are branched alpha-glucose storage molecules, while cellulose provides structural support using beta-glucose.",
    "ready": true
  },
  "evidence": []
};
