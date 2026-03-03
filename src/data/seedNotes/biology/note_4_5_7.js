export const note_biology_4_5_7 = {
  blocks: [
    {
      id: 'obj-practical11',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 11: chromatography of leaf pigments, including extraction, separation, Rf calculation, pigment identification, and experimental limitations.',
      },
    },
    {
      id: 'h-practical-overview',
      type: 'heading',
      data: {
        text: 'Core Practical 11: Chromatography of Photosynthetic Pigments',
        level: 2,
      },
    },
    {
      id: 'p-practical-intro',
      type: 'paragraph',
      data: {
        text: 'Core Practical 11 uses paper or thin-layer chromatography to separate and identify photosynthetic pigments from a leaf extract. This practical demonstrates the range of light-absorbing molecules in leaves, reveals the relative proportions of chlorophylls and carotenoids, and allows calculation of Rf values for pigment identification.',
      },
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: {
        text: 'Apparatus and Materials',
        level: 2,
      },
    },
    {
      id: 'list-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Fresh green leaves (spinach, ivy, or other herbaceous plant).',
          },
          {
            text: 'Organic solvent for extraction (ethanol, acetone, or propanone, 80% concentration recommended).',
          },
          {
            text: 'Mortar and pestle (ceramic or porcelain).',
          },
          {
            text: 'Sand (silicon carbide) to abrade leaf tissue.',
          },
          {
            text: 'Chromatography paper (Whatman No. 1 or equivalent) or TLC silica plates.',
          },
          {
            text: 'Solvent for the mobile phase (petroleum ether or hexane with acetone or ethanol, e.g. 80:20 or 90:10).',
          },
          {
            text: 'Chromatography tank or chamber with lid.',
          },
          {
            text: 'Capillary tubes (open-ended) for spotting.',
          },
          {
            text: 'Ruler with mm markings.',
          },
          {
            text: 'Pencil (not pen) for marking origin and solvent front.',
          },
        ],
      },
    },
    {
      id: 'h-method',
      type: 'heading',
      data: {
        text: 'Method',
        level: 2,
      },
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'Preparation of extract: Tear fresh leaves into small pieces. Place in a mortar with a small amount of sand and 5–10 mL of ice-cold 80% ethanol. Grind thoroughly for 1–2 minutes until the extract is dark green and leaves are fragmented.',
          },
          {
            text: 'Filtration: Decant the liquid extract into a test tube. (The residue can be discarded or filtered through filter paper for additional extract.)',
          },
          {
            text: 'Preparation of chromatography paper: Mark a faint pencil line 2 cm from the bottom of the paper (the origin). Mark two points on this line about 2 cm apart.',
          },
          {
            text: 'Spotting: Using a capillary tube, apply small drops of the leaf extract to one marked point, allowing each drop to dry before adding the next (build up 3–5 layers). The spot should be no more than 5 mm in diameter.',
          },
          {
            text: 'Solvent preparation: Pour the mobile phase into the chromatography tank to a depth of 0.5–1 cm. Ensure the solvent level is below the origin line.',
          },
          {
            text: 'Running the chromatogram: Carefully place the paper in the tank with the spotted end at the bottom. Cover the tank with a lid to create a saturated atmosphere. Do not disturb.',
          },
          {
            text: 'Observation: Allow the solvent to travel up the paper. Stop when the solvent front is 1–2 cm from the top (10–20 minutes typically). Immediately mark the solvent front position with a pencil.',
          },
          {
            text: 'Drying: Remove the paper and allow it to air-dry in a fume hood. The dried paper shows coloured bands of pigments (chlorophyll a: blue-green; chlorophyll b: yellow-green; carotenoid: orange-yellow; xanthophyll: yellow).',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Origin Placement',
        text: 'The origin line (starting point for pigments) must be above the solvent level in the tank, otherwise the extract will dissolve into the mobile phase before the separation process begins. This is a common mistake that ruins the chromatogram.',
      },
    },
    {
      id: 'h-rf-calculation',
      type: 'heading',
      data: {
        text: 'Rf Value Calculation and Pigment Identification',
        level: 2,
      },
    },
    {
      id: 'p-rf-intro',
      type: 'paragraph',
      data: {
        text: 'After the chromatogram dries, measure the distance each pigment spot has travelled from the origin and the total distance the solvent front has travelled. Calculate Rf values and compare them to reference values to identify each pigment.',
      },
    },
    {
      id: 'eq-rf-calc',
      type: 'equation',
      data: {
        html: 'Rf = <span class="nb-frac"><span class="nb-num">distance from origin to centre of pigment spot</span><span class="nb-den">distance from origin to solvent front</span></span>',
        caption: 'Rf value formula',
      },
    },
    {
      id: 'table-rf-reference',
      type: 'comparisonTable',
      data: {
        headers: ['Pigment', 'Colour', 'Typical Rf (petroleum ether:acetone 80:20)', 'Polarity'],
        rows: [
          ['Carotenoid', 'Orange-yellow', '0.95', 'Least polar (travels furthest)'],
          ['Xanthophyll', 'Yellow', '0.71', 'Low polarity'],
          ['Chlorophyll a', 'Blue-green', '0.58', 'Moderate polarity'],
          ['Chlorophyll b', 'Yellow-green', '0.40', 'Most polar (travels least)'],
        ],
        caption: 'Reference Rf values and pigment identification (typical values)',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example Rf Calculation',
        text: 'Solvent front distance from origin: 100 mm. Blue-green spot (chl a) is 58 mm from origin. Yellow-green spot (chl b) is 40 mm. Orange spot (carotenoid) is 95 mm. Rf values: chl a = 0.58, chl b = 0.40, carotenoid = 0.95. Compare to reference table: matches chlorophyll a, b, and carotenoid.',
      },
    },
    {
      id: 'h-limitations',
      type: 'heading',
      data: {
        text: 'Experimental Limitations',
        level: 2,
      },
    },
    {
      id: 'list-limitations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Pigment co-migration: If two pigments have very similar Rf values (e.g. in certain solvent systems), they may not fully separate, appearing as one band. This reduces the ability to identify individual pigments.',
          },
          {
            text: 'Solvent saturation: If the chromatography tank is not properly saturated with solvent vapour, the solvent front may run unevenly (uneven solvent front), distorting Rf values.',
          },
          {
            text: 'Spot size: If the initial spot is too large or too concentrated, pigments may not separate clearly, and Rf values become inaccurate.',
          },
          {
            text: 'Destructive method: Chromatography destroys the sample, so the same leaves cannot be used for repeated measurements. Multiple samples must be extracted separately.',
          },
          {
            text: 'Time variability: The time taken for the solvent to travel a fixed distance can vary with temperature, solvent age, and paper condition, affecting consistency between experiments.',
          },
          {
            text: 'Fading pigments: Some carotenoids and xanthophylls fade under light exposure during the experiment, making them harder to visualise and measure accurately.',
          },
        ],
      },
    },
    {
      id: 'h-improved-methods',
      type: 'heading',
      data: {
        text: 'Improved Methods',
        level: 2,
      },
    },
    {
      id: 'list-improvements',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          {
            text: 'Use TLC (thin-layer chromatography) instead of paper: TLC plates (silica or alumina) provide better separation resolution and can resolve pigments that co-migrate on paper.',
          },
          {
            text: 'Vary solvent systems: Using different mobile phase compositions (e.g. 90:10 petroleum ether:acetone vs 80:20) can help separate pigments with overlapping Rf values.',
          },
          {
            text: 'Two-dimensional chromatography: After the first separation, rotate the plate 90° and run a different solvent system to achieve better resolution.',
          },
          {
            text: 'High-performance liquid chromatography (HPLC): This instrumental method separates and quantifies pigments precisely, with better accuracy and shorter run times.',
          },
          {
            text: 'Spectrophotometry: Measure the absorption spectrum of the pigment extract directly using a spectrophotometer to identify peaks corresponding to each pigment (non-destructive).',
          },
          {
            text: 'Sample handling: Keep all materials in darkness or low light during extraction and running to minimise pigment degradation.',
          },
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Core Practical 11 extracts leaf pigments in organic solvent and separates them by paper or TLC chromatography. Pigments migrate at different rates based on polarity differences. Rf = distance pigment ÷ distance solvent front. Pigments are identified by comparing Rf values to reference tables. The method is limited by co-migration of similar pigments, solvent saturation variability, and destructive nature. TLC, multi-dimensional chromatography, and HPLC improve resolution and accuracy.',
        apply: 'A student obtains a chromatogram with four bands at Rf 0.95, 0.71, 0.58, and 0.40. Which pigments are these? If the student used a more polar solvent (e.g. 50:50 petroleum ether:acetone), predict how the Rf values would change.',
        analyze: 'Explain why chlorophyll b (more polar) has a lower Rf than chlorophyll a (less polar). What property of the solvent system determines the separation?',
        evaluate: 'The destructive nature of chromatography means you cannot measure the same leaf twice. Discuss whether this is a fundamental limitation of the method or whether non-destructive alternatives are always preferable.',
      },
      terms: [],
    },
    {
      id: 'checklist-practical11',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the extraction procedure for leaf pigments', checked: false },
          { text: 'I understand the principle of chromatographic separation', checked: false },
          { text: 'I can calculate Rf values and identify pigments from reference tables', checked: false },
          { text: 'I know the colours of the four main photosynthetic pigments', checked: false },
          { text: 'I can identify major sources of error in the chromatography method', checked: false },
          { text: 'I can suggest improvements such as TLC or HPLC', checked: false },
        ],
      },
    },
    {
      id: 'summary-practical11',
      type: 'summary',
      data: {
        text: 'Core Practical 11 separates photosynthetic pigments using paper or TLC chromatography. Leaves are ground in ethanol, the extract is spotted on paper, and the mobile phase (petroleum ether:acetone) carries pigments at different rates. Rf values identify pigments: carotenoid (Rf ~0.95), xanthophyll (~0.71), chlorophyll a (~0.58), chlorophyll b (~0.40). Limitations include co-migration, solvent saturation variability, and destructive sampling. Improvements: TLC (better resolution), two-dimensional chromatography, HPLC (quantitative), spectrophotometry (non-destructive).',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method',
        prompt: 'Describe the procedure for extracting leaf pigments and preparing them for chromatography. Why is ice-cold solvent used?',
      },
      {
        id: 'cue-2',
        blockId: 'eq-rf-calc',
        prompt: 'How is the Rf value calculated? What does a high Rf value indicate about a pigment\'s polarity?',
      },
      {
        id: 'cue-3',
        blockId: 'table-rf-reference',
        prompt: 'List the four main photosynthetic pigments in order of increasing Rf value. Which is most polar and which is least polar?',
      },
      {
        id: 'cue-4',
        blockId: 'list-limitations',
        prompt: 'Name three limitations of paper chromatography in this practical and explain how each affects results.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-worked1',
        prompt: 'Solvent front travels 80 mm; pigment spots are at 24, 32, 46, and 76 mm. Calculate their Rf values and identify them using the reference table.',
      },
    ],
    summaryText: 'Core Practical 11 extracts leaf pigments in ice-cold ethanol by grinding leaves with sand. The extract is spotted on chromatography paper, and petroleum ether:acetone mobile phase carries pigments at different rates. Rf = pigment distance ÷ solvent distance. Reference Rf values: carotenoid 0.95, xanthophyll 0.71, chlorophyll a 0.58, chlorophyll b 0.40. Limitations: co-migration, solvent saturation, destructive sampling. Improvements: TLC (better resolution), two-dimensional chromatography, HPLC (quantitative).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 11 Specification',
      detail: 'OCR A-Level Biology specifies paper or thin-layer chromatography as the method for separating and identifying photosynthetic pigments.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14), Core Practical 11',
      tags: ['practical', 'specification'],
    },
    {
      id: 'ev-2',
      title: 'Pigment Separation Science',
      detail: 'The separation of chlorophyll a and b depends on their subtle structural differences (methyl vs aldehyde group). This was historically important in establishing pigment structures.',
      year: '2023',
      source: 'Chemistry and biochemistry literature',
      tags: ['pigments', 'chemistry'],
    },
  ],
};
