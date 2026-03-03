export const note_biology_1_1_10 = {
  blocks: [
    {
      id: 'obj-sugar-test',
      type: 'objective',
      data: {
        text: 'Understand the biochemical principles and practical techniques for testing reducing sugars, non-reducing sugars, starch, protein, and lipids in biological samples.'
      }
    },
    {
      id: 'h-benedict-test',
      type: 'heading',
      data: {
        text: 'Benedict\'s Test for Reducing Sugars',
        level: 2
      }
    },
    {
      id: 'p-benedict-principle',
      type: 'paragraph',
      data: {
        text: 'Reducing sugars are those with a free or potentially free aldehyde or ketone group at the anomeric carbon. This includes monosaccharides (glucose, fructose, galactose) and some disaccharides (maltose, lactose). The free carbonyl group can be oxidised, making these sugars reducing agents. Benedict\'s reagent contains Cu²⁺ ions (from copper sulphate, CuSO₄) in an alkaline medium. Reducing sugars reduce Cu²⁺ to Cu⁺, which precipitates as brick-red copper(I) oxide (Cu₂O). The sugar itself is oxidised to a carboxylic acid. The test is semi-quantitative: a small amount of sugar produces a slight yellow or orange colour; moderate amounts produce an orange or brick-red precipitate; large amounts (>5% solution) produce a bright brick-red precipitate.'
      }
    },
    {
      id: 'p-benedict-procedure',
      type: 'paragraph',
      data: {
        text: 'Procedure: (1) Add 2 mL of the sugar solution to a test tube. (2) Add 2 mL of Benedict\'s reagent. (3) Heat in a water bath at 50–65°C for 2 minutes (or boil). (4) Observe colour change. Positive result: blue solution turns to brick-red precipitate. Negative result: solution remains blue. Common reducing sugars tested: glucose (positive), fructose (positive), maltose (positive), lactose (positive), sucrose (negative—no free anomeric carbon). Controls: positive control (glucose solution) should turn brick-red; negative control (distilled water) should remain blue.'
      }
    },
    {
      id: 'p-non-reducing',
      type: 'paragraph',
      data: {
        text: 'Non-reducing sugars (e.g. sucrose) do not give a positive Benedict\'s test because both anomeric carbons are involved in the glycosidic bond, so no free carbonyl group is available. To test for non-reducing sugars, the sample must be hydrolysed first: add dilute HCl to the sugar solution, heat gently, then neutralise with sodium bicarbonate (NaHCO₃) or sodium hydroxide (NaOH). This breaks the glycosidic bond, releasing glucose and fructose monomers. Repeat Benedict\'s test on the hydrolysed solution; if positive (brick-red), non-reducing sugar was present. The principle is that hydrolysis converts the non-reducing disaccharide into reducing monosaccharides.'
      }
    },
    {
      id: 'h-iodine-test',
      type: 'heading',
      data: {
        text: 'Iodine Test for Starch',
        level: 2
      }
    },
    {
      id: 'p-iodine-principle',
      type: 'paragraph',
      data: {
        text: 'Starch contains helical amylose chains that form a complex with iodine molecules. Iodine (I₂) fits inside the amylose helix, forming a blue-black iodine-starch complex. The intensity of colour indicates starch amount: high starch concentration gives a dark blue-black colour; lower concentrations appear lighter blue. Cellulose (β-glucose polymer) does not form a helix and does not bind iodine significantly, so cellulose does not change colour. Reducing sugars and other polysaccharides (glycogen, at high concentration) may produce a brown or burgundy colour rather than blue-black. The iodine test is specific for starch due to the unique helical structure of amylose.'
      }
    },
    {
      id: 'p-iodine-procedure',
      type: 'paragraph',
      data: {
        text: 'Procedure: (1) Add a few drops of iodine solution (I₂/KI in water) to the sample. (2) Observe colour change. Positive result: brown/orange iodine solution turns blue-black immediately. Negative result: colour remains brown/orange (or slightly yellow). Cool the solution if hot; the complex is more stable at lower temperature. Common samples: potato starch (strongly positive, very dark blue-black), bread (positive, blue-black), honey (negative, remains brown), glucose solution (negative, remains brown). Note: glycogen also gives a brown-red colour, not blue-black, so iodine test can distinguish starch from glycogen.'
      }
    },
    {
      id: 'h-biuret-test',
      type: 'heading',
      data: {
        text: 'Biuret Test for Protein',
        level: 2
      }
    },
    {
      id: 'p-biuret-principle',
      type: 'paragraph',
      data: {
        text: 'The biuret test detects peptide bonds (−CO−NH−) and is used to identify proteins and peptides. The test uses copper sulphate (CuSO₄) in an alkaline medium (sodium hydroxide, NaOH). Cu²⁺ ions form a complex with the nitrogen atoms of peptide bonds (the carbonyl oxygen and the amide nitrogen coordinate to the copper ion). This copper-peptide complex is purple/violet. The test requires at least two adjacent peptide bonds, so dipeptides and longer chains are positive; single amino acids and urea do not react. Biuret (H₂N−CO−NH−CO−NH₂) itself is positive, giving the test its name.'
      }
    },
    {
      id: 'p-biuret-procedure',
      type: 'paragraph',
      data: {
        text: 'Procedure: (1) Add 2 mL of the protein sample to a test tube. (2) Add 2 mL of biuret reagent (made fresh: 1% CuSO₄ + 2% NaOH). (3) Mix gently. (4) Observe colour change. Positive result: colourless or pale blue solution turns violet or purple within 1–2 minutes. Negative result: remains blue (excess copper, no protein-bound copper complex). Common samples: egg white (positive, purple), milk (positive, purple), glucose solution (negative, blue). The reaction is fairly specific for proteins; false positives are rare. Intensity of colour can estimate protein concentration roughly.'
      }
    },
    {
      id: 'h-emulsion-test',
      type: 'heading',
      data: {
        text: 'Emulsion Test for Lipids',
        level: 2
      }
    },
    {
      id: 'p-emulsion-principle',
      type: 'paragraph',
      data: {
        text: 'Lipids (fats, oils, and waxes) are hydrophobic and insoluble in water. When lipids are shaken with ethanol (a less polar organic solvent), they dissolve, forming a clear solution. If this ethanolic lipid solution is then added to water, the lipid precipitates as a white/milky emulsion. The emulsion consists of tiny lipid droplets suspended in water. The white colour is due to light scattering by the numerous droplets, similar to how milk appears white (milk contains lipid droplets of fat). Non-lipid substances (sugars, proteins) remain water-soluble and do not form an emulsion.'
      }
    },
    {
      id: 'p-emulsion-procedure',
      type: 'paragraph',
      data: {
        text: 'Procedure: (1) Add 2 mL of the sample (or tissue extract) to a test tube. (2) Add 2 mL of ethanol and mix well. The lipids will dissolve. (3) Add 2 mL of distilled water and mix. (4) Observe: if lipids present, a white/cloudy emulsion forms. No emulsion (remains clear) indicates no lipids. Alternative (Sudan III/IV stain): add 2 mL of Sudan stain (lipid-soluble dye) to the sample; lipids dissolve the dye and become orange-red; the stained droplets settle at the bottom. The Sudan method is more specific, but the emulsion test is simpler and requires no stain.'
      }
    },
    {
      id: 'table-biochemical-tests',
      type: 'comparisonTable',
      data: {
        headers: ['Biochemical', 'Test Reagent', 'Principle', 'Positive Result', 'Negative Result'],
        rows: [
          ['Reducing sugar', 'Benedict\'s reagent (Cu²⁺ alkaline)', 'Reducing group oxidises Cu²⁺ to Cu⁺', 'Brick-red precipitate', 'Blue solution'],
          ['Starch', 'Iodine (I₂/KI)', 'I₂ complex with amylose helix', 'Blue-black colour', 'Brown/orange (iodine colour)'],
          ['Protein', 'Biuret reagent (Cu²⁺ + NaOH)', 'Cu²⁺ complex with peptide bonds', 'Purple/violet colour', 'Blue solution'],
          ['Lipid', 'Ethanol then water (or Sudan stain)', 'Lipids precipitate in water as emulsion', 'White/milky emulsion or orange-red (Sudan)', 'Clear solution or colourless (Sudan)']
        ],
        caption: 'Summary of biochemical tests for biological molecules'
      }
    },
    {
      id: 'h-practical-considerations',
      type: 'heading',
      data: {
        text: 'Practical Considerations and Controls',
        level: 2
      }
    },
    {
      id: 'p-controls',
      type: 'paragraph',
      data: {
        text: 'Proper experimental design requires positive and negative controls for each test. Positive controls: glucose (reducing sugar—positive Benedict\'s), starch solution (positive iodine), egg white (positive biuret), olive oil (positive emulsion). Negative controls: distilled water (should be negative for all tests), sucrose (negative Benedict\'s—non-reducing). Controls validate that the reagents are working correctly and establish a baseline for colour interpretation. Testing unknown samples without controls makes results ambiguous. Quantification can be semi-quantitative (colour intensity scale: trace, weak, moderate, strong) or quantitative using a colorimeter to measure absorbance. Colorimetry allows absorbance values to be compared against a standard curve.'
      }
    },
    {
      id: 'p-safety',
      type: 'paragraph',
      data: {
        text: 'Safety considerations: Benedict\'s reagent and heated test tubes pose burn hazards; always use test tube holders and handle carefully. Iodine is toxic if ingested and can stain skin; wear gloves. Ethanol is flammable and volatile; avoid open flames. Sodium hydroxide (in biuret reagent) is corrosive; avoid skin contact. Wear safety goggles throughout. Dispose of chemical waste appropriately per school protocol. Keep work surfaces clean and dry.'
      }
    },
    {
      id: 'callout-worked-benedict',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Benedict\'s Test Procedure Example',
        text: 'Sample: 2 mL glucose solution. Add 2 mL Benedict\'s reagent (blue). Heat at 60°C. Colour changes: blue → yellow (mild reducing) → orange (moderate) → brick-red precipitate (strong reducing). Note: must heat; colour change is slow at room temperature. Cool slightly before reading.'
      }
    },
    {
      id: 'callout-tip-sucrose',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Sucrose is Not a Reducing Sugar',
        text: 'Sucrose = α-glucose + fructose, joined via α-1,2 bond (both anomeric carbons involved). No free carbonyl group → negative Benedict\'s. But after HCl hydrolysis (breaking the bond), you get free glucose + fructose (both have free carbonyls) → positive Benedict\'s. This is how to detect non-reducing sugars!'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Benedict\'s reagent works by oxidation-reduction: the Cu²⁺ ions (blue) in the reagent accept electrons from the aldehyde or ketone group of reducing sugars. When Cu²⁺ is reduced to Cu⁺, it can no longer remain soluble and precipitates as brick-red copper(I) oxide (Cu₂O). The colour change is proportional to the amount of reducing sugar present.',
        apply: 'A student tests four solutions: pure glucose, sucrose, starch, and egg albumen with Benedict\'s reagent. Predict the result for each and explain why sucrose gives a negative result despite being a carbohydrate.',
        analyze: 'Compare the specificity and sensitivity of the Benedict\'s test, iodine test, and biuret test. Which is most quantitative, and how could you make Benedict\'s test semi-quantitative?',
        evaluate: 'Evaluate the reliability of food tests as diagnostic tools for nutritional content. Consider false positives, false negatives, the effect of processing, and whether colorimetry improves accuracy.'
      },
      terms: []
    },
    {
      id: 'checklist-tests',
      type: 'checklist',
      data: {
        items: [
          { text: 'Benedict\'s test detects reducing sugars (free or potentially free carbonyl group); requires heating', checked: false },
          { text: 'Non-reducing sugars (sucrose) test negative until hydrolysed with HCl, then test positive', checked: false },
          { text: 'Iodine test detects starch (blue-black); cellulose and glycogen are negative or brown-red', checked: false },
          { text: 'Biuret test detects protein (peptide bonds); requires alkaline copper sulphate; produces purple colour', checked: false },
          { text: 'Emulsion test detects lipids; ethanol dissolves, then water precipitates as white emulsion', checked: false }
        ]
      }
    },
    {
      id: 'summary-tests',
      type: 'summary',
      data: {
        text: 'Biochemical tests are rapid, semi-quantitative assays for biological molecules. Benedict\'s test (Cu²⁺, heat) detects reducing sugars; hydrolysis required for non-reducing sugars. Iodine test (I₂) detects starch (blue-black colour). Biuret test (Cu²⁺, NaOH) detects protein (purple colour). Emulsion test (ethanol + water) detects lipids (white emulsion). All require proper controls and safety precautions. Results are semi-quantitative by colour intensity or quantitative by colorimetry/absorbance.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-benedict-principle',
        prompt: 'Explain the principle of Benedict\'s test. What chemical change occurs and what colour indicates a positive result?'
      },
      {
        id: 'cue-2',
        blockId: 'p-non-reducing',
        prompt: 'Why is sucrose negative in Benedict\'s test? How do you test for non-reducing sugars?'
      },
      {
        id: 'cue-3',
        blockId: 'p-iodine-principle',
        prompt: 'Why does starch give a blue-black colour with iodine but cellulose does not?'
      },
      {
        id: 'cue-4',
        blockId: 'p-biuret-principle',
        prompt: 'What does the biuret test detect? What is the mechanism and colour change?'
      },
      {
        id: 'cue-5',
        blockId: 'p-emulsion-principle',
        prompt: 'Explain how the emulsion test detects lipids. Why is an emulsion white/milky?'
      }
    ],
    summaryText: 'Benedict\'s (Cu²⁺, heat): reducing sugars (glucose, maltose, lactose) → brick-red precipitate. Non-reducing (sucrose) negative; hydrolyse with HCl first. Iodine: starch → blue-black (amylose helix); cellulose negative. Biuret (Cu²⁺, NaOH): protein (peptide bonds) → purple. Emulsion (ethanol then water): lipids → white emulsion. All semi-quantitative by colour; colorimetry for quantification. Proper controls essential.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 1: Biochemical Tests',
      detail: 'Detailed protocols and principles for reducing sugar, starch, protein, and lipid tests.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['practical', 'benedict-test', 'iodine-test', 'biuret-test', 'emulsion-test', 'biochemical-tests']
    }
  ]
};
