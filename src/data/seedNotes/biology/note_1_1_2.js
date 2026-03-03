export const note_biology_1_1_2 = {
  blocks: [
    {
      id: 'obj-lipids',
      type: 'objective',
      data: {
        text: 'Understand the structure of triglycerides and phospholipids, their formation via ester bonds, and their biological roles in organisms.'
      }
    },
    {
      id: 'h-triglycerides',
      type: 'heading',
      data: {
        text: 'Triglyceride Structure and Formation',
        level: 2
      }
    },
    {
      id: 'p-triglyceride-def',
      type: 'paragraph',
      data: {
        text: 'A triglyceride consists of one glycerol molecule bonded to three fatty acid chains. Glycerol is a three-carbon alcohol (C₃H₈O₃) with three −OH groups. Fatty acids are long hydrocarbon chains (typically 12–20 carbons) with a carboxyl group (−COOH) at one end. A triglyceride forms when each −OH group of glycerol undergoes a condensation reaction with the carboxyl group of a fatty acid, creating three ester bonds and releasing three water molecules. The ester bond is formed between the carbon of the carboxyl group and the oxygen of the glycerol −OH group.'
      }
    },
    {
      id: 'eq-ester-bond',
      type: 'equation',
      data: {
        html: 'Glycerol + 3 Fatty Acids → Triglyceride + 3 H₂O (via ester bond formation)',
        caption: 'Condensation reaction forming a triglyceride'
      }
    },
    {
      id: 'h-fatty-acids',
      type: 'heading',
      data: {
        text: 'Saturated and Unsaturated Fatty Acids',
        level: 2
      }
    },
    {
      id: 'p-saturated',
      type: 'paragraph',
      data: {
        text: 'Saturated fatty acids contain only single C−C bonds in the hydrocarbon chain. Every carbon (except the terminal ones) is bonded to two hydrogen atoms, making the molecule "saturated" with hydrogen. Examples include palmitic acid (C₁₆) and stearic acid (C₁₈). Saturated fatty acids have straight chains, allowing tight packing in the hydrophobic core of cells and storage tissues. This packing increases melting point, so saturated fats are typically solid at room temperature (e.g. butter, lard). At higher temperatures, they can cause membrane fluidity issues and are associated with increased blood cholesterol and CVD risk.'
      }
    },
    {
      id: 'p-unsaturated',
      type: 'paragraph',
      data: {
        text: 'Unsaturated fatty acids contain one or more C=C double bonds in the hydrocarbon chain. Each double bond removes two hydrogen atoms, creating a "kink" in the chain at that point. The number and position of double bonds determine the degree of unsaturation. Monounsaturated fatty acids have one double bond (e.g. oleic acid in olive oil); polyunsaturated fatty acids have two or more (e.g. linoleic acid in vegetable oils). The kinks prevent tight packing, lowering melting point—unsaturated fats are typically liquid at room temperature (oils). The most common configuration is cis, where both hydrogens are on the same side of the double bond. Trans fats (rare in nature) have hydrogens on opposite sides, straighter chains, and harmful health effects.'
      }
    },
    {
      id: 'table-fatty-acids',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Bonds', 'Shape', 'Melting Point', 'Health Impact'],
        rows: [
          ['Saturated', 'Single C−C only', 'Straight chains', 'High (solid)', 'Raises LDL cholesterol; CVD risk'],
          ['Cis-unsaturated', 'C=C with kinks', 'Kinked chains', 'Low (liquid/oil)', 'Lowers LDL; beneficial'],
          ['Trans-unsaturated', 'C=C straight', 'Straight (rare)', 'High (solid)', 'Raises LDL; very harmful; avoid']
        ],
        caption: 'Fatty acid types and properties'
      }
    },
    {
      id: 'h-phospholipids',
      type: 'heading',
      data: {
        text: 'Phospholipid Structure and Membrane Role',
        level: 2
      }
    },
    {
      id: 'p-phospholipid-def',
      type: 'paragraph',
      data: {
        text: 'A phospholipid has the same basic structure as a triglyceride but with one key difference: the third fatty acid is replaced by a phosphate group (PO₄³⁻) attached to a small polar group (e.g. choline in phosphatidylcholine). The result is a molecule with a hydrophilic (water-loving) phosphate-containing head and two hydrophobic (water-fearing) fatty acid tails. This amphipathic structure makes phospholipids ideal membrane components. In aqueous solutions, phospholipids spontaneously arrange into bilayers: the hydrophilic heads face the aqueous environment (inside and outside the cell), while the hydrophobic tails cluster in the middle, away from water.'
      }
    },
    {
      id: 'p-bilayer',
      type: 'paragraph',
      data: {
        text: 'The phospholipid bilayer forms the basic structure of all cell membranes, providing both a barrier to polar molecules and a hydrophobic environment for proteins and other lipids. The fatty acid tails remain fluid and flexible due to kinks in unsaturated chains, allowing lipids and proteins to move laterally within the membrane. This fluidity is essential for protein function, membrane fusion, and cellular processes like endocytosis and exocytosis. The degree of saturation and presence of cholesterol regulate membrane fluidity: saturated fats and cholesterol increase rigidity, while unsaturated fats increase fluidity.'
      }
    },
    {
      id: 'h-cholesterol',
      type: 'heading',
      data: {
        text: 'Cholesterol in Membranes',
        level: 2
      }
    },
    {
      id: 'p-cholesterol',
      type: 'paragraph',
      data: {
        text: 'Cholesterol is a steroid lipid (four fused carbon rings) found in animal cell membranes. Although often demonised for its role in CVD when present in excess, cholesterol is essential for membrane structure and function. It inserts between phospholipids, its hydroxyl group (−OH) hydrogen bonding with phospholipid heads and its ring system interacting with fatty acid tails. This fills gaps in the bilayer, reducing permeability to small molecules and stabilising membrane structure across temperature ranges. At higher temperatures, cholesterol restricts fatty acid movement, maintaining membrane integrity. At lower temperatures, it prevents tight packing that would reduce fluidity. Cholesterol also serves as a precursor for steroid hormones (testosterone, oestrogen) and vitamin D synthesis.'
      }
    },
    {
      id: 'callout-key-phospholipid',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Amphipathic Nature',
        text: 'Phospholipids have hydrophilic (polar) heads and hydrophobic (non-polar) tails. This dual nature causes them to form bilayers in water, with heads facing out and tails tucked inside—the fundamental structure of cell membranes.'
      }
    },
    {
      id: 'callout-tip-saturated',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Remembering Saturated vs Unsaturated',
        text: 'Saturated = full of H atoms, straight chain, solid. Unsaturated = missing some H atoms (double bonds instead), kinked chain, liquid oil. The kinks prevent packing and keep it fluid.'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Triglycerides are insoluble in water because their structure is entirely hydrophobic—the long hydrocarbon chains of fatty acids have no polar groups to interact with water molecules. This hydrophobic nature makes triglycerides ideal for long-term energy storage because they pack densely (yielding more energy per gram than carbohydrates) and do not attract water that would add weight.',
        apply: 'A triglyceride contains three 18-carbon saturated fatty acids. Calculate the number of C-H bonds available for oxidation and compare the energy yield (per gram) with that of glucose.',
        analyze: 'Compare the structure and function of triglycerides and phospholipids. Explain why phospholipids form bilayers spontaneously in aqueous environments.',
        evaluate: 'Evaluate the claim that saturated fats are always harmful to health. Consider their structural roles, energy density, and the evidence on cardiovascular risk.'
      },
      terms: []
    },
    {
      id: 'checklist-lipids',
      type: 'checklist',
      data: {
        items: [
          { text: 'Triglycerides form via three ester bonds between glycerol and three fatty acids', checked: false },
          { text: 'Saturated fats have straight chains and are solid at room temperature', checked: false },
          { text: 'Unsaturated fats have C=C double bonds and kinks; liquid at room temperature', checked: false },
          { text: 'Phospholipids are amphipathic: hydrophilic heads, hydrophobic tails', checked: false },
          { text: 'Cholesterol regulates membrane fluidity and serves as a hormone precursor', checked: false }
        ]
      }
    },
    {
      id: 'summary-lipids',
      type: 'summary',
      data: {
        text: 'Triglycerides (glycerol + 3 fatty acids via ester bonds) are energy storage molecules. Saturated fatty acids are straight, solid, and increase cholesterol; unsaturated acids are kinked, liquid, and healthier. Phospholipids (glycerol + 2 fatty acids + phosphate) form bilayer membranes with hydrophilic heads and hydrophobic tails. Cholesterol fills membrane gaps and is a hormone precursor. All lipids are hydrophobic and play crucial roles in energy storage and membrane structure.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-triglyceride-def',
        prompt: 'What is a triglyceride and how does it form from glycerol and fatty acids?'
      },
      {
        id: 'cue-2',
        blockId: 'p-saturated',
        prompt: 'What makes a fatty acid saturated? Why are saturated fats solid at room temperature?'
      },
      {
        id: 'cue-3',
        blockId: 'p-unsaturated',
        prompt: 'How do unsaturated fatty acids differ from saturated? What is a cis bond?'
      },
      {
        id: 'cue-4',
        blockId: 'p-phospholipid-def',
        prompt: 'Describe the structure of a phospholipid. Why is it amphipathic?'
      },
      {
        id: 'cue-5',
        blockId: 'p-cholesterol',
        prompt: 'How does cholesterol affect membrane fluidity and what are its other roles?'
      }
    ],
    summaryText: 'Triglycerides = glycerol + 3 fatty acids via ester bonds (energy storage). Saturated fatty acids: straight, solid, raise cholesterol. Unsaturated: kinked, liquid, healthier. Phospholipids: glycerol + 2 FA + phosphate; amphipathic; form bilayer membranes. Cholesterol: steroid; regulates membrane fluidity; hormone precursor.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Lipid Structure and Function in A-Level Biology',
      detail: 'Detailed coverage of triglycerides, phospholipids, and their roles in membranes and energy storage.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['lipids', 'triglycerides', 'phospholipids', 'cholesterol', 'membranes', 'fatty-acids']
    }
  ]
};
