export const note_biology_1_1_1 = {
  blocks: [
    {
      id: 'obj-carbs',
      type: 'objective',
      data: {
        text: 'Understand carbohydrate structure, including monosaccharides, glycosidic bonds, disaccharides, and polysaccharides (starch, glycogen, cellulose).'
      }
    },
    {
      id: 'h-monosac',
      type: 'heading',
      data: {
        text: 'Monosaccharides',
        level: 2
      }
    },
    {
      id: 'p-monosac-def',
      type: 'paragraph',
      data: {
        text: 'Monosaccharides are simple sugars with the general formula (CH₂O)ₙ, where n = 3 or more. Glucose (C₆H₁₂O₆) is the most important monosaccharide in biology. It exists in two isomeric forms: α-glucose and β-glucose, which differ in the orientation of the −OH group on carbon atom 1 (the anomeric carbon). In α-glucose, the −OH group on C1 points below the plane of the ring; in β-glucose, it points above. Glucose is the primary substrate for cellular respiration and the building block of polysaccharides. Fructose is a ketose (5-carbon sugar) found in fruit and honey, while galactose is another aldose found in milk as part of lactose.'
      }
    },
    {
      id: 'callout-key-isomers',
      type: 'callout',
      data: {
        style: 'key',
        title: 'α and β Glucose',
        text: 'Only differ in orientation of −OH on C1. This small difference determines which polysaccharides they form and how organisms can digest them.'
      }
    },
    {
      id: 'h-glycosidic',
      type: 'heading',
      data: {
        text: 'Glycosidic Bond Formation',
        level: 2
      }
    },
    {
      id: 'p-glycosidic-cond',
      type: 'paragraph',
      data: {
        text: 'A glycosidic bond forms via a condensation reaction between two monosaccharides, joining them with the release of one water molecule. The −OH group on C1 of one glucose reacts with the −OH group on C4 of another glucose, forming a C−O−C linkage. The position of this bond is described using the notation 1,4-glycosidic bond. If the reactants are α-glucose molecules, an α-1,4-glycosidic bond forms; if β-glucose molecules react, a β-1,4-glycosidic bond forms. The type of glycosidic bond (α or β) determines the properties and biological role of the resulting polysaccharide. Breaking a glycosidic bond requires hydrolysis—the addition of water.'
      }
    },
    {
      id: 'eq-condensation',
      type: 'equation',
      data: {
        html: 'C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O (via glycosidic bond formation)',
        caption: 'Condensation reaction forming a disaccharide'
      }
    },
    {
      id: 'h-disac',
      type: 'heading',
      data: {
        text: 'Disaccharides',
        level: 2
      }
    },
    {
      id: 'p-disac-types',
      type: 'paragraph',
      data: {
        text: 'Disaccharides are formed from two monosaccharides joined by a glycosidic bond. Maltose is formed from two α-glucose molecules joined by an α-1,4-glycosidic bond. It is produced during starch digestion and is a reducing sugar (can be oxidised, turning Benedict\'s reagent blue to brick-red). Sucrose is formed from α-glucose and fructose joined by an α-1,2-glycosidic bond. It is non-reducing (the glycosidic bond involves the anomeric carbons of both sugars, preventing the reducing end from being available). Sucrose is transported in plants and is table sugar. Lactose is formed from β-galactose and α-glucose joined by a β-1,4-glycosidic bond and is found in milk.'
      }
    },
    {
      id: 'table-disac',
      type: 'comparisonTable',
      data: {
        headers: ['Disaccharide', 'Monomers', 'Bond Type', 'Reducing?', 'Source/Role'],
        rows: [
          ['Maltose', 'α-glucose + α-glucose', 'α-1,4', 'Yes', 'Starch digestion product'],
          ['Sucrose', 'α-glucose + fructose', 'α-1,2', 'No', 'Plant transport, table sugar'],
          ['Lactose', 'β-galactose + α-glucose', 'β-1,4', 'Yes', 'Mammalian milk']
        ],
        caption: 'Disaccharides and their properties'
      }
    },
    {
      id: 'h-polysac',
      type: 'heading',
      data: {
        text: 'Polysaccharides',
        level: 2
      }
    },
    {
      id: 'p-starch',
      type: 'paragraph',
      data: {
        text: 'Starch is a plant storage polysaccharide composed of α-glucose units. It has two components: amylose (15–20%) and amylopectin (80–85%). Amylose is a linear polymer of α-glucose joined by α-1,4-glycosidic bonds, forming a helix stabilised by hydrogen bonds. Amylopectin is branched, with α-1,4 bonds in the main chain and α-1,6 bonds at branch points (approximately every 25 glucose units). This branched structure makes starch less soluble than amylose and provides more α-1,4 bonds for enzyme attack, enabling rapid glucose release. Starch is not a reducing sugar due to the large number of glycosidic bonds. It can be detected by the iodine test (turns blue-black).'
      }
    },
    {
      id: 'p-glycogen',
      type: 'paragraph',
      data: {
        text: 'Glycogen is the animal storage polysaccharide, composed of α-glucose units. It is structurally similar to amylopectin but more heavily branched (α-1,6 bonds approximately every 8–12 glucose units). This greater branching allows rapid glucose mobilisation during the fight-or-flight response, as more terminal glucose units are available for enzyme action. Glycogen is stored primarily in the liver and skeletal muscles. Unlike starch, glycogen is only present in significant quantities after feeding and is rapidly depleted with exercise.'
      }
    },
    {
      id: 'p-cellulose',
      type: 'paragraph',
      data: {
        text: 'Cellulose is a plant structural polysaccharide composed of β-glucose units joined by β-1,4-glycosidic bonds. The β-linkages cause alternate glucose units to rotate 180° relative to each other, resulting in a straight, extended chain. Neighbouring chains form hydrogen bonds, creating a strong, insoluble, crystalline structure. This makes cellulose ideal for cell wall construction, providing mechanical support. Mammals cannot digest cellulose because they lack the enzyme cellulase; however, herbivores have cellulose-digesting bacteria in their guts. The β-linkages explain why cellulose cannot be digested by amylase (which only breaks α-linkages).'
      }
    },
    {
      id: 'callout-worked-polysac',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Comparing Starch, Glycogen, and Cellulose',
        text: 'Starch: α-glucose, α-1,4 bonds (linear amylose + branched amylopectin), soluble, storage, plant. Glycogen: α-glucose, α-1,4 + heavily branched α-1,6, more branched than starch, storage, animal. Cellulose: β-glucose, β-1,4 bonds, straight chains with H-bonds, insoluble, structural, plant cell walls.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'α-glucose polymers (starch) form helical structures because the α-1,4-glycosidic bonds curve the chain; β-glucose polymers (cellulose) form straight chains because the β-1,4-glycosidic bonds alternate the orientation of consecutive glucose units. This structural difference arises from the position of the glycosidic bond relative to the ring orientation of each glucose.',
        apply: 'A polysaccharide sample contains 1000 glucose monomers. How many glycosidic bonds were formed during its synthesis, and how many water molecules were released?',
        analyze: 'Compare the structure of amylose, amylopectin, and glycogen. Explain how their branching patterns relate to their functions in energy storage.',
        evaluate: 'Evaluate whether cellulose or chitin is the more effective structural polysaccharide, considering tensile strength, biodegradability, and biological distribution.'
      },
      terms: []
    },
    {
      id: 'checklist-carbs',
      type: 'checklist',
      data: {
        items: [
          { text: 'α and β glucose differ only in the orientation of the −OH group on C1', checked: false },
          { text: 'Glycosidic bonds form via condensation and are broken by hydrolysis', checked: false },
          { text: 'Maltose is reducing (two α-glucose); sucrose is non-reducing (α-glucose + fructose)', checked: false },
          { text: 'Starch is branched amylopectin + linear amylose for plant storage', checked: false },
          { text: 'Cellulose is β-glucose with β-1,4 bonds, forming straight, strong chains for structural support', checked: false }
        ]
      }
    },
    {
      id: 'summary-carbs',
      type: 'summary',
      data: {
        text: 'Carbohydrates are built from monosaccharides (glucose, fructose, galactose) joined by glycosidic bonds formed via condensation. Disaccharides (maltose, sucrose, lactose) result from two monosaccharides. Polysaccharides are polymers: starch (α-glucose, plant storage), glycogen (α-glucose, heavily branched, animal storage), and cellulose (β-glucose, structural, indigestible by mammals). The type of glucose (α or β) and branching determine solubility and function.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-monosac-def',
        prompt: 'What is the difference between α-glucose and β-glucose?'
      },
      {
        id: 'cue-2',
        blockId: 'p-glycosidic-cond',
        prompt: 'How does a glycosidic bond form? What is released?'
      },
      {
        id: 'cue-3',
        blockId: 'p-disac-types',
        prompt: 'Which disaccharides are reducing and which are not? Why?'
      },
      {
        id: 'cue-4',
        blockId: 'p-starch',
        prompt: 'Describe amylose and amylopectin. Why is the branching in amylopectin significant?'
      },
      {
        id: 'cue-5',
        blockId: 'p-cellulose',
        prompt: 'Why can\'t mammals digest cellulose despite it being made of glucose?'
      }
    ],
    summaryText: 'Monosaccharides (glucose α/β, fructose, galactose) are joined by glycosidic bonds via condensation. Disaccharides: maltose (α+α, reducing), sucrose (α-glc+fru, non-reducing), lactose (β-gal+α-glc). Polysaccharides: starch (α, plant storage, amylose+amylopectin), glycogen (α, heavily branched, animal), cellulose (β, structural, indigestible).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Carbohydrate Structure and Function',
      detail: 'Comprehensive review of monosaccharides, disaccharides, and polysaccharides in A-Level biology.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['carbohydrates', 'glucose', 'glycosidic-bonds', 'starch', 'glycogen', 'cellulose']
    }
  ]
};
