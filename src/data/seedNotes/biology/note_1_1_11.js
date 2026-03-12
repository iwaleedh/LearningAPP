export const note_biology_1_1_11 = {
  blocks: [
    {
      id: 'obj-cp1',
      type: 'objective',
      data: {
        text: 'Carry out and describe food tests for: reducing sugars (Benedict\'s test), non-reducing sugars (acid hydrolysis + Benedict\'s), starch (iodine test), proteins (Biuret test), and lipids (emulsion test). Evaluate sources of error and control variables.',
      },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Overview — Food Tests', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Core Practical 1 requires testing unknown food samples for five biological molecules: reducing sugars, non-reducing sugars (sucrose), starch, proteins, and lipids. Each test uses a specific reagent that gives a characteristic colour change when the target molecule is present. A positive control (known sample containing the molecule) and a negative control (distilled water) must be included to validate results.',
      },
    },
    {
      id: 'h-benedicts',
      type: 'heading',
      data: { text: 'Test 1 — Reducing Sugars (Benedict\'s Test)', level: 2 },
    },
    {
      id: 'p-benedicts-principle',
      type: 'paragraph',
      data: {
        text: 'Reducing sugars are monosaccharides (e.g. glucose, fructose, galactose) and some disaccharides (e.g. maltose, lactose) that have a free aldehyde or ketone group capable of reducing Cu²⁺ ions in Benedict\'s reagent. The reduction creates Cu⁺ ions that form brick-red copper(I) oxide (Cu₂O) precipitate. Benedict\'s reagent is blue (contains CuSO₄ in alkaline sodium citrate solution).',
      },
    },
    {
      id: 'table-benedicts-method',
      type: 'comparisonTable',
      data: {
        caption: 'Benedict\'s test method',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Add 2 cm³ of food solution to a test tube', 'Provides sample to test'],
          ['2', 'Add 2 cm³ of Benedict\'s reagent (blue)', 'Contains Cu²⁺ ions'],
          ['3', 'Heat in a water bath at 80–95 °C for 5 min', 'Heat provides activation energy for the redox reaction'],
          ['4', 'Observe colour through blue → green → yellow → orange → brick-red', 'More precipitate = more reducing sugar present'],
          ['5', 'Compare to positive control (glucose solution) and negative control (distilled water)', 'Validates reagent and technique'],
        ],
      },
    },
    {
      id: 'callout-benedicts-semi',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Semi-Quantitative Use of Benedict\'s',
        text: 'By preparing a series of known glucose concentrations (e.g. 0, 5, 10, 15, 20 mmol dm⁻³) — a calibration range — you can estimate the concentration of an unknown glucose solution. Use a colorimeter to measure absorbance (orange filter) of filtered supernatant: higher absorbance = less Cu²⁺ remaining = more glucose. Plot calibration curve (absorbance vs. concentration) to read off unknown.',
      },
    },
    {
      id: 'h-non-reducing',
      type: 'heading',
      data: { text: 'Test 2 — Non-Reducing Sugars (Sucrose)', level: 2 },
    },
    {
      id: 'p-non-reducing-principle',
      type: 'paragraph',
      data: {
        text: 'Sucrose (and other non-reducing sugars such as trehalose) have no free carbonyl group and will NOT give a positive Benedict\'s test result. To test for sucrose, it must first be hydrolysed by boiling in dilute hydrochloric acid (HCl). This breaks the glycosidic bond producing two monosaccharides (glucose + fructose) which can then reduce Benedict\'s reagent.',
      },
    },
    {
      id: 'table-non-reducing-method',
      type: 'comparisonTable',
      data: {
        caption: 'Non-reducing sugar test method',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Test original sample with Benedict\'s — should give negative (blue = no reducing sugar)', 'Confirm no reducing sugars already present'],
          ['2', 'Add 2 cm³ food solution + 1 cm³ dilute HCl (1 mol dm⁻³)', 'HCl hydrolyses glycosidic bonds'],
          ['3', 'Boil in water bath for 5 min', 'Provides energy for acid hydrolysis of sucrose → glucose + fructose'],
          ['4', 'Neutralise with sodium hydrogencarbonate until fizzing stops (pH ~7)', 'Benedict\'s only works at alkaline pH — must neutralise the acid'],
          ['5', 'Add 2 cm³ Benedict\'s reagent and heat at 80–95 °C for 5 min', 'Tests for reducing sugars now present from hydrolysis'],
          ['6', 'Positive result = colour change to brick-red', 'Confirms non-reducing sugar was present'],
        ],
      },
    },
    {
      id: 'h-iodine',
      type: 'heading',
      data: { text: 'Test 3 — Starch (Iodine Test)', level: 2 },
    },
    {
      id: 'p-iodine-principle',
      type: 'paragraph',
      data: {
        text: 'Starch forms a complex with iodine–potassium iodide solution (I₂/KI), turning from orange-brown to blue-black. The amylose helix in starch traps the I₃⁻ ion, causing this colour change. The test is performed at room temperature and requires no heat. If no starch is present, the iodine solution stays orange-brown.',
      },
    },
    {
      id: 'table-iodine-method',
      type: 'comparisonTable',
      data: {
        caption: 'Iodine test method',
        headers: ['Step', 'Action'],
        rows: [
          ['1', 'Place a few drops of food solution on a spotting tile (or in a test tube)'],
          ['2', 'Add 2–3 drops of iodine solution (orange-brown)'],
          ['3', 'Positive: blue-black colour immediately; Negative: remains orange-brown'],
        ],
      },
    },
    {
      id: 'callout-key-iodine-note',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Iodine Test — Key Points',
        text: '• Can be done continuously during a starch hydrolysis experiment by amylase — the disappearance of blue-black indicates starch has been digested.\n• Hot starch gives a negative result (temperature disrupts helix–iodine complex) — let sample cool before testing.\n• Glycogen also gives a positive (reddish-brown) result because it has some helical regions, but less intense than starch.',
      },
    },
    {
      id: 'h-biuret',
      type: 'heading',
      data: { text: 'Test 4 — Proteins (Biuret Test)', level: 2 },
    },
    {
      id: 'p-biuret-principle',
      type: 'paragraph',
      data: {
        text: 'The Biuret reagent detects peptide bonds. In alkaline solution, Cu²⁺ ions form a purple chelate complex with nitrogen atoms in peptide bonds (–CO–NH–). The colour change is from blue to purple/violet. The test therefore detects proteins AND peptide fragments (any chain with ≥ 2 peptide bonds), but NOT individual amino acids (no peptide bonds).',
      },
    },
    {
      id: 'table-biuret-method',
      type: 'comparisonTable',
      data: {
        caption: 'Biuret test method',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Add 2 cm³ food solution to test tube', 'Sample'],
          ['2', 'Add 2 cm³ sodium hydroxide (NaOH) solution (1 mol dm⁻³)', 'Provides alkaline conditions needed for Cu²⁺ chelation'],
          ['3', 'Add 5 drops of copper sulfate solution (1% CuSO₄)', 'Provides Cu²⁺ ions'],
          ['4', 'Mix and observe at room temperature (no heating needed)', 'Colour develops in 1–5 min'],
          ['5', 'Positive: purple/violet; Negative: blue', 'Purple = Cu²⁺ chelated to peptide bonds'],
        ],
      },
    },
    {
      id: 'callout-warning-biuret',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Biuret Reagent Order Matters',
        text: 'Always add NaOH FIRST, then CuSO₄. Adding CuSO₄ to an acidic or neutral solution precipitates Cu(OH)₂ (blue precipitate) which prevents the test working. If you add NaOH after, the Cu(OH)₂ can sometimes obscure a positive result. The test tube should go: sample → NaOH → CuSO₄.',
      },
    },
    {
      id: 'h-emulsion',
      type: 'heading',
      data: { text: 'Test 5 — Lipids (Emulsion Test)', level: 2 },
    },
    {
      id: 'p-emulsion-principle',
      type: 'paragraph',
      data: {
        text: 'Lipids dissolve in ethanol (soluble) but are insoluble in water. If an ethanol extract of a lipid-containing food is poured into water, the lipid comes out of solution and forms a white milky emulsion. The ethanol disperses lipids into tiny droplets that scatter light, giving the white cloudy appearance. No lipid present = mixture stays clear.',
      },
    },
    {
      id: 'table-emulsion-method',
      type: 'comparisonTable',
      data: {
        caption: 'Emulsion test method',
        headers: ['Step', 'Action', 'Why'],
        rows: [
          ['1', 'Add food sample to 2 cm³ of ethanol in a test tube', 'Dissolves lipids if present'],
          ['2', 'Shake thoroughly to mix', 'Ensures lipid dissolves in ethanol'],
          ['3', 'Pour supernatant into test tube containing 2 cm³ of distilled water', 'Water is poor solvent for lipids'],
          ['4', 'Positive: white milky emulsion; Negative: clear solution', 'Milky emulsion = lipid droplets formed'],
        ],
      },
    },
    {
      id: 'h-risk-assessment',
      type: 'heading',
      data: { text: 'Risk Assessment', level: 2 },
    },
    {
      id: 'table-hazards',
      type: 'comparisonTable',
      data: {
        caption: 'Hazards in Core Practical 1',
        headers: ['Hazard', 'Risk', 'Control measure'],
        rows: [
          ['Hot water bath (80–95 °C)', 'Scalds; glass breakage', 'Use tongs to hold test tubes; keep face away from tubes; ensure tubes not sealed'],
          ['NaOH (sodium hydroxide)', 'Corrosive; skin/eye damage', 'Wear goggles; if spilt on skin, wash immediately with running water'],
          ['HCl (hydrochloric acid)', 'Corrosive; eye/skin damage', 'Wear goggles; handle carefully; use fume cupboard if concentrated'],
          ['Iodine solution', 'Irritant; stains skin', 'Wear gloves; avoid contact with clothing and skin'],
          ['Ethanol', 'Highly flammable', 'No naked flames in lab; use water bath to heat if needed; store away from heat sources'],
        ],
      },
    },
    {
      id: 'h-controls',
      type: 'heading',
      data: { text: 'Controls and Reliability', level: 2 },
    },
    {
      id: 'p-controls',
      type: 'paragraph',
      data: {
        text: 'For each test, always include: (1) a positive control — a known-concentration solution of the molecule being tested, to confirm the reagent is working; (2) a negative control — distilled water, to confirm a negative result is not caused by the reagent itself. Repeat each test at least 3 times and calculate an average to increase reliability. Ensure fair testing: use the same volume of sample, same volume of reagent, same heating time and temperature.',
      },
    },
    {
      id: 'table-summary-tests',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of all food tests',
        headers: ['Molecule', 'Reagent', 'Positive result', 'Negative result', 'Notes'],
        rows: [
          ['Reducing sugars', 'Benedict\'s (blue, alkaline CuSO₄)', 'Green → yellow → orange → brick-red precipitate', 'Blue (no change)', 'Heat in water bath at ~85 °C for 5 min'],
          ['Non-reducing sugars (sucrose)', 'HCl hydrolysis then Benedict\'s', 'Brick-red precipitate (after hydrolysis + neutralisation)', 'Blue', 'Must neutralise with NaHCO₃ before adding Benedict\'s'],
          ['Starch', 'Iodine solution (brown)', 'Blue-black', 'Orange-brown', 'Room temperature; hot starch may give false negative'],
          ['Proteins', 'Biuret (NaOH then CuSO₄)', 'Purple/violet', 'Blue', 'No heat; NaOH before CuSO₄'],
          ['Lipids', 'Ethanol emulsion test', 'White milky emulsion in water', 'Clear/colourless', 'No heat; ethanol is flammable'],
        ],
      },
    },
    {
      id: 'checklist-cp1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the method for each of the 5 food tests including reagents used', checked: false },
          { text: 'State the positive and negative result for each test', checked: false },
          { text: 'Explain the chemical principle behind Benedict\'s test (reducting Cu²⁺ → Cu⁺)', checked: false },
          { text: 'Explain why sucrose must be hydrolysed with acid before using Benedict\'s', checked: false },
          { text: 'Explain why NaOH must be added before CuSO₄ in Biuret test', checked: false },
          { text: 'Name two hazards in this practical and explain control measures', checked: false },
          { text: 'Explain the role of positive and negative controls in this practical', checked: false },
          { text: 'Describe how a colorimeter can be used to make Benedict\'s test semi-quantitative', checked: false },
        ],
      },
    },
    {
      id: 'summary-cp1',
      type: 'summary',
      data: {
        text: 'Five food tests: (1) Benedict\'s → reducing sugars → brick-red precipitate at 85 °C. (2) Acid hydrolysis + Benedict\'s → non-reducing sugars (sucrose); must neutralise HCl before adding Benedict\'s. (3) Iodine → starch → blue-black (room temp). (4) Biuret (NaOH then CuSO₄) → proteins → purple (detects peptide bonds; NaOH before CuSO₄). (5) Emulsion test (ethanol then water) → lipids → white milky emulsion. Always use positive and negative controls. Benedict\'s can be made semi-quantitative using a colorimeter and calibration curve. Main hazards: hot water bath, NaOH, HCl, flammable ethanol.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-summary-tests', prompt: 'List the 5 food tests. For each, state the reagent and the positive result.' },
      { id: 'cue-2', blockId: 'p-benedicts-principle', prompt: 'Explain the chemistry of Benedict\'s test. Why does the colour change from blue to brick-red?' },
      { id: 'cue-3', blockId: 'table-non-reducing-method', prompt: 'Describe the full method for testing a food sample for non-reducing sugars. Why must the acid be neutralised?' },
      { id: 'cue-4', blockId: 'callout-warning-biuret', prompt: 'In the Biuret test, why must NaOH be added BEFORE CuSO₄?' },
      { id: 'cue-5', blockId: 'p-controls', prompt: 'Explain the purpose of (a) a positive control and (b) a negative control in food testing.' },
    ],
    summaryText: 'Five food tests: Benedict\'s (reducing sugars, brick-red), iodine (starch, blue-black), Biuret (protein, purple — NaOH first!), emulsion (lipids, white milky), acid hydrolysis + Benedict\'s (non-reducing sugars). Always use positive/negative controls. Benedict\'s is semi-quantitative with colorimeter. Hazards: hot water, NaOH, HCl, ethanol (flammable).',
    ready: false,
  },
  evidence: [],
};
