export const note_biology_1_1_4 = {
  blocks: [
    {
      id: 'obj-mol-tests',
      type: 'objective',
      data: {
        text: 'Describe and explain the biochemical tests used to identify carbohydrates (reducing sugars, starch), proteins and lipids in food and solution samples. Understand the principle and expected results of each test.',
      },
    },
    {
      id: 'h-reducing-sugar',
      type: 'heading',
      data: { text: "Benedict's Test for Reducing Sugars", level: 2 },
    },
    {
      id: 'p-benedicts-principle',
      type: 'paragraph',
      data: {
        text: "Reducing sugars are sugars that can donate electrons (act as reducing agents). All monosaccharides (glucose, fructose, galactose) and some disaccharides (maltose, lactose) are reducing sugars. Sucrose is a non-reducing sugar. Benedict's reagent is an alkaline solution of copper(II) sulfate (blue). Reducing sugars reduce Cu²⁺ ions to Cu⁺ ions, forming an insoluble precipitate.",
      },
    },
    {
      id: 'table-benedicts',
      type: 'comparisonTable',
      data: {
        caption: "Benedict's test procedure and results",
        headers: ['Step', 'Detail'],
        rows: [
          ['Reagent', "Benedict's reagent (copper sulfate + sodium carbonate + sodium citrate — alkaline blue solution)"],
          ['Procedure', 'Add sample to Benedict\'s reagent; heat in a water bath at ~80°C for 2-3 minutes'],
          ['Positive result', 'Colour change from BLUE → GREEN → YELLOW → ORANGE → BRICK RED precipitate (Cu₂O) depending on sugar concentration'],
          ['Negative result', 'Solution remains blue — no reducing sugar present'],
          ['Quantitative use', 'Greater brick-red precipitate = higher reducing sugar concentration; can be quantified by filtering and weighing precipitate'],
        ],
      },
    },
    {
      id: 'callout-tip-non-reducing',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Testing for Non-Reducing Sugars (e.g. Sucrose)',
        text: 'Step 1: Test the original sample with Benedict\'s — if negative (stays blue), sucrose may be present. Step 2: Hydrolyse a new sample by boiling with dilute hydrochloric acid (to break glycosidic bonds: sucrose → glucose + fructose). Step 3: Neutralise with sodium hydrogencarbonate. Step 4: Repeat Benedict\'s test. Positive result NOW → non-reducing sugar was present in original sample.',
      },
    },
    {
      id: 'h-starch',
      type: 'heading',
      data: { text: 'Iodine Test for Starch', level: 2 },
    },
    {
      id: 'p-iodine-principle',
      type: 'paragraph',
      data: {
        text: 'Iodine (dissolved as iodine–potassium iodide solution, I₂/KI) is orange-brown in colour. Starch molecules have a coiled helix structure; iodine molecules fit into the centre of the amylose helix, forming a starch–iodine complex that absorbs light at ~620 nm, appearing blue-black.',
      },
    },
    {
      id: 'table-iodine',
      type: 'comparisonTable',
      data: {
        caption: 'Iodine test procedure and results',
        headers: ['Step', 'Detail'],
        rows: [
          ['Reagent', 'Iodine dissolved in potassium iodide solution (I₂/KI) — orange-brown colour'],
          ['Procedure', 'Add a few drops to the sample (can be done at room temperature)'],
          ['Positive result', 'BLUE-BLACK colour — starch present'],
          ['Negative result', 'Solution remains orange-brown — no starch'],
          ['Important note', 'Iodine test is not suitable for hot or strongly reducing conditions (false negatives); test at room temperature on solid or solution samples'],
        ],
      },
    },
    {
      id: 'h-protein',
      type: 'heading',
      data: { text: 'Biuret Test for Proteins', level: 2 },
    },
    {
      id: 'p-biuret-principle',
      type: 'paragraph',
      data: {
        text: 'The Biuret test detects peptide bonds (–CO–NH–) in proteins. In alkaline conditions, copper(II) ions (Cu²⁺) form coordination complexes with nitrogen atoms of two or more peptide bonds, producing a purple/violet colour. The test detects dipeptides and larger polypeptides, but NOT individual amino acids (which have only one peptide bond... actually free amino acids have NO peptide bonds, so Biuret only detects bonds in chains of 2+ amino acids).',
      },
    },
    {
      id: 'table-biuret',
      type: 'comparisonTable',
      data: {
        caption: 'Biuret test procedure and results',
        headers: ['Step', 'Detail'],
        rows: [
          ['Reagents', 'Step 1: Add sodium hydroxide (NaOH) solution to make alkaline. Step 2: Add a few drops of copper sulfate (CuSO₄) solution'],
          ['Procedure', 'Mix gently and observe colour change (no heating needed)'],
          ['Positive result', 'PURPLE / VIOLET colour — peptide bonds (protein) present'],
          ['Negative result', 'Solution remains BLUE (colour of dilute copper sulfate) — no protein'],
          ['Important note', 'Also detects dipeptides; does NOT detect free amino acids'],
        ],
      },
    },
    {
      id: 'h-lipid',
      type: 'heading',
      data: { text: 'Emulsion Test for Lipids', level: 2 },
    },
    {
      id: 'p-emulsion-principle',
      type: 'paragraph',
      data: {
        text: 'Lipids are non-polar and do not dissolve in water, but dissolve in non-polar solvents like ethanol. The emulsion test exploits this: lipids dissolve in ethanol but when water is added, the lipid comes out of solution as tiny droplets — an emulsion — which scatter light and appear milky white.',
      },
    },
    {
      id: 'table-emulsion',
      type: 'comparisonTable',
      data: {
        caption: 'Emulsion test (ethanol test) procedure and results',
        headers: ['Step', 'Detail'],
        rows: [
          ['Reagents', 'Absolute ethanol (and water)'],
          ['Procedure', 'Step 1: Add excess ethanol to the sample and shake vigorously — lipid dissolves in ethanol. Step 2: Pour the ethanol extract into water in a separate tube'],
          ['Positive result', 'MILKY WHITE EMULSION / CLOUDINESS — lipid present (droplets scatter light)'],
          ['Negative result', 'Clear solution — no lipid'],
          ['Important note', 'Ethanol negative control: adding pure ethanol to water produces no cloudiness'],
        ],
      },
    },
    {
      id: 'table-all-tests-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of all four food tests',
        headers: ['Test', 'Tests for', 'Reagent(s)', 'Positive result', 'Control (negative result)'],
        rows: [
          ["Benedict's", 'Reducing sugars (glucose, fructose, maltose, lactose)', "Benedict's reagent + heating", 'Brick-red precipitate', 'Blue (no change)'],
          ['Iodine (I₂/KI)', 'Starch', 'I₂/KI solution', 'Blue-black', 'Orange-brown (no change)'],
          ['Biuret', 'Proteins (peptide bonds)', 'NaOH + CuSO₄', 'Purple / violet', 'Blue'],
          ['Emulsion', 'Lipids', 'Ethanol then water', 'Milky white emulsion', 'Clear'],
        ],
      },
    },
    {
      id: 'callout-we-food-test',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identifying Molecules in a Food Sample',
        text: 'A student tests a food sample and finds: Benedict\'s = blue (negative), Iodine = blue-black (positive), Biuret = purple (positive), Emulsion = cloudy white (positive).\n\nConclusions:\n• No reducing sugars present\n• Starch present\n• Protein present\n• Lipid present\n\nThe student then acid-hydrolyses the sample and repeats Benedict\'s test → brick red → non-reducing sugars (sucrose) were also present.',
      },
    },
    {
      id: 'callout-key-controls',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Controls in Food Tests',
        text: 'Always run a negative control (distilled water) alongside the test sample to confirm reagent is working. A positive control (known glucose for Benedict\'s, known starch for iodine, etc.) confirms the test reagent can give a positive result. Controls allow you to identify false positives/negatives due to reagent or technique errors.',
      },
    },
    {
      id: 'h-semiquant',
      type: 'heading',
      data: {
        text: 'Semi-quantitative Food Tests and Colorimetry',
        level: 2
      }
    },
    {
      id: 'p-semiquant-principle',
      type: 'paragraph',
      data: {
        text: 'The qualitative food tests above only give a yes/no result. Semi-quantitative tests allow an estimate of concentration by comparing the colour intensity of a test sample against a calibration curve. A colorimeter measures the absorbance of light through a solution. For Benedict\'s test, the precipitate turns orange/brick-red — a blue filter is used in the colorimeter (blue light is absorbed strongly by orange solutions). Higher absorbance = more precipitate = higher reducing sugar concentration. A calibration curve (absorbance vs known glucose concentration) is plotted first, then the unknown sample\'s absorbance is used to read off its concentration.'
      }
    },
    {
      id: 'callout-worked-serial-dilution',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Serial Dilution Procedure',
        text: 'To prepare a range of known glucose concentrations for a calibration curve:\n1. Prepare a stock solution of known concentration (e.g. 1% glucose).\n2. Take 5 cm³ of stock + 5 cm³ distilled water → 0.5% solution (1:2 dilution).\n3. Take 5 cm³ of this + 5 cm³ distilled water → 0.25% (1:4 dilution).\n4. Repeat to give a range: 1.0%, 0.5%, 0.25%, 0.125% + 0% (distilled water as blank).\n5. Add equal volumes of Benedict\'s to each tube; heat all in a water bath at 80 °C for 5 minutes.\n6. Cool, then use the colorimeter (blue filter) to measure absorbance of each tube.\n7. Plot absorbance (y-axis) vs glucose concentration (x-axis) → calibration curve.\n8. Measure the unknown sample in the same way; use the graph to read off its concentration.'
      }
    },
    {
      id: 'callout-tip-colorimeter',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Colorimeter Filter Rule',
        text: 'Choose the COMPLEMENTARY colour filter to the solution. The orange/brick-red Benedict\'s precipitate is best measured with a BLUE filter (blue is the complement of orange) because the blue light is absorbed most strongly by the orange product. The more precipitate, the greater the absorbance. This is also called selecting the filter of maximum absorption.'
      }
    },
    {
      id: 'checklist-mol-tests',
      type: 'checklist',
      data: {
        items: [
          { text: "State the reagent and expected positive/negative result for Benedict's test", checked: false },
          { text: 'Explain the principle of why reducing sugars give a colour change with copper salts', checked: false },
          { text: 'Describe how to test for a non-reducing sugar (include hydrolysis step)', checked: false },
          { text: 'State the reagent and expected result for the iodine-starch test', checked: false },
          { text: 'State the reagents and expected result for the Biuret test', checked: false },
          { text: 'Describe the emulsion test for lipids including both steps', checked: false },
          { text: 'Explain why a control is necessary in each food test', checked: false },
          { text: 'Describe how to carry out a serial dilution to make a concentration range', checked: false },
          { text: 'Explain the principle of colorimetry and why a blue filter is used for Benedict\'s precipitate', checked: false },
          { text: 'Describe how to use a calibration curve to estimate an unknown sugar concentration', checked: false },
        ],
      },
    },
    {
      id: 'summary-mol-tests',
      type: 'summary',
      data: {
        text: "Four key food tests: (1) Benedict's (Cu²⁺, heat) → brick-red precipitate for reducing sugars; non-reducing sugars need HCl hydrolysis first. (2) Iodine/KI → blue-black for starch (I₂ enters amylose helix). (3) Biuret (NaOH + CuSO₄) → purple for proteins (Cu²⁺ complexes with peptide bonds). (4) Emulsion (ethanol then water) → milky white cloudiness for lipids. Always use positive and negative controls.",
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-benedicts', prompt: "What reagent and conditions are used in Benedict's test? What is the positive result and what does it indicate?" },
      { id: 'cue-2', blockId: 'callout-tip-non-reducing', prompt: 'How would you modify the Benedict\'s test to detect a non-reducing sugar like sucrose? Why is the extra step needed?' },
      { id: 'cue-3', blockId: 'table-biuret', prompt: 'Describe the Biuret test: reagents, procedure, positive result, and what the test detects at the molecular level.' },
      { id: 'cue-4', blockId: 'table-emulsion', prompt: 'Describe the emulsion test for lipids. Why does adding ethanol extract to water produce a milky result if lipid is present?' },
      { id: 'cue-5', blockId: 'callout-key-controls', prompt: 'Why are controls needed in food tests? What are positive and negative controls used for?' },
    ],
    summaryText: "Benedict's: Cu²⁺, heat → brick-red = reducing sugars. Iodine: blue-black = starch. Biuret: NaOH + CuSO₄ → purple = protein (peptide bonds). Emulsion: ethanol→water → milky white = lipids. Non-reducing sugar test: acid hydrolysis → neutralise → Benedict's. Always run controls!",
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: "Benedict's test for reducing sugars", detail: "Stanley Benedict developed his reagent in 1908 as an improvement on Fehling's solution. The copper reduction test is still widely used in clinical and biochemistry laboratories to detect glycosuria (glucose in urine) in diabetic screening.", year: '1908', source: 'Benedict SR, J Biol Chem', tags: ['food tests', 'biochemistry'] },
  ],
};
