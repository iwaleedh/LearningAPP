export const note_biology_4_6_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand methods for measuring microbial growth, including haemocytometer, viable plate count, turbidimetry, and direct microscopy, with calculation of CFU/cm³ and recognition of advantages and limitations of each method.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Overview of Microbial Growth Measurement', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Measuring microbial growth is essential in biotechnology, food science, medicine, and environmental monitoring. There are four main methods: haemocytometer (total cell count), viable plate count (colony-forming units), turbidimetry (optical density), and direct microscopy. Each has specific advantages and limitations depending on the application.'
      },
      terms: []
    },
    {
      id: 'h-haem',
      type: 'heading',
      data: { text: 'Haemocytometer: Total Cell Count', level: 2 },
      terms: []
    },
    {
      id: 'p-haem-1',
      type: 'paragraph',
      data: {
        text: 'A haemocytometer is a specialised microscope slide with a chamber of known depth (usually 0.1 mm) divided into a grid of small squares. A diluted suspension of microorganisms is pipetted into the chamber and examined under a light microscope at high magnification (×400 or ×1000).'
      },
      terms: []
    },
    {
      id: 'p-haem-2',
      type: 'paragraph',
      data: {
        text: 'Cells are counted in specific squares of the grid. The total cell concentration is calculated using the chamber volume and dilution factor. This method counts both living and dead cells, providing a total cell count (TCC).'
      },
      terms: []
    },
    {
      id: 'eq-haem',
      type: 'equation',
      data: {
        html: 'Total cells/cm<sup>3</sup> = (cells counted × dilution factor) ÷ chamber volume'
      },
      terms: []
    },
    {
      id: 'callout-haem-adv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantages of Haemocytometer',
        text: 'Quick method; relatively inexpensive; counts both living and dead cells; gives absolute numbers; useful for dilute samples.'
      },
      terms: []
    },
    {
      id: 'callout-haem-lim',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Haemocytometer',
        text: 'Requires dilute suspension (cells must be clearly visible and countable); observer bias; unsuitable for very dense or very dilute cultures; does not distinguish viable from non-viable cells.'
      },
      terms: []
    },
    {
      id: 'h-vpc',
      type: 'heading',
      data: { text: 'Viable Plate Count: Serial Dilution and Colony Counting', level: 2 },
      terms: []
    },
    {
      id: 'p-vpc-1',
      type: 'paragraph',
      data: {
        text: 'The viable plate count method measures the number of living (viable) cells capable of forming colonies. A serial dilution is prepared by successively diluting the original culture by a factor of 10 (10⁻¹, 10⁻², 10⁻³, etc.). Each dilution is plated onto nutrient agar, incubated, and colonies are counted.'
      },
      terms: []
    },
    {
      id: 'p-vpc-2',
      type: 'paragraph',
      data: {
        text: 'Plates with 30–300 colonies are selected as they provide statistically reliable counts. Fewer than 30 colonies risk sampling error; more than 300 colonies become difficult to count accurately. Each colony is assumed to have originated from a single viable cell (or cell aggregate).'
      },
      terms: []
    },
    {
      id: 'eq-vpc',
      type: 'equation',
      data: {
        html: 'CFU/cm<sup>3</sup> = (mean colony count) × (dilution factor)'
      },
      terms: []
    },
    {
      id: 'ex-vpc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Viable Plate Count',
        text: 'A 10⁻⁶ dilution of a bacterial culture is plated. After incubation, the plate shows 150 colonies.\n\nCFU/cm³ = 150 × 10⁶ = 1.5 × 10⁸ CFU/cm³\n\nThis means the original culture contained 1.5 × 10⁸ colony-forming units per cm³.'
      },
      terms: []
    },
    {
      id: 'callout-vpc-adv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantages of Viable Plate Count',
        text: 'Measures only viable (living) cells; provides absolute numbers (CFU); relatively inexpensive; applicable to most bacteria and fungi; standard method in clinical and food microbiology.'
      },
      terms: []
    },
    {
      id: 'callout-vpc-lim',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Viable Plate Count',
        text: 'Time-consuming (48–72h incubation required); some viable cells may not form colonies under lab conditions (viable but non-culturable, VBNC); clumped cells give artificially low counts; requires appropriate growth medium and conditions.'
      },
      terms: []
    },
    {
      id: 'h-turb',
      type: 'heading',
      data: { text: 'Turbidimetry: Optical Density Measurement', level: 2 },
      terms: []
    },
    {
      id: 'p-turb-1',
      type: 'paragraph',
      data: {
        text: 'Turbidimetry measures the absorbance (optical density, OD) of light passing through a bacterial suspension. As cell density increases, the suspension becomes cloudier and absorbs more light. OD is measured at a standard wavelength, typically 600 nm (OD₆₀₀), using a spectrophotometer.'
      },
      terms: []
    },
    {
      id: 'eq-turb',
      type: 'equation',
      data: {
        html: 'Absorbance (OD) ∝ cell density (biomass)'
      },
      terms: []
    },
    {
      id: 'callout-turb-adv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantages of Turbidimetry',
        text: 'Very rapid; non-destructive; suitable for monitoring growth in real time; useful for cultures with very high cell density; inexpensive equipment available; no dilutions required.'
      },
      terms: []
    },
    {
      id: 'callout-turb-lim',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Turbidimetry',
        text: 'Does not distinguish between viable and dead cells; cannot be used for very dilute cultures (detection limit ~10⁶ cells/cm³); affected by cell size and shape; requires calibration against viable counts; may be affected by crystal formation or precipitate in medium.'
      },
      terms: []
    },
    {
      id: 'h-micro',
      type: 'heading',
      data: { text: 'Direct Microscopy', level: 2 },
      terms: []
    },
    {
      id: 'p-micro',
      type: 'paragraph',
      data: {
        text: 'Direct microscopy involves examining a Gram-stained or unstained smear of microorganisms under a light microscope at high magnification. Cells are counted in multiple fields of view and an average is calculated. This method is quick and counts both viable and non-viable cells.'
      },
      terms: []
    },
    {
      id: 'callout-micro-adv',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Advantages of Direct Microscopy',
        text: 'Very rapid; can visualise cell morphology; allows identification of cell types; relatively inexpensive; provides information on cell size and arrangement.'
      },
      terms: []
    },
    {
      id: 'callout-micro-lim',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of Direct Microscopy',
        text: 'Observer bias and subjectivity; very dilute samples require preconcentration; cannot distinguish viable from dead cells; only suitable for relatively high cell densities (>10⁶ cells/cm³); difficult with small organisms (viruses); labour-intensive and requires skill.'
      },
      terms: []
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Method', 'Viable/Total', 'Speed', 'Cost', 'Suitable for Dilute Samples'],
        rows: [
          ['Haemocytometer', 'Total cell count', 'Rapid (minutes)', 'Low', 'Yes, if sufficient cells present'],
          ['Viable plate count', 'Only viable cells', 'Slow (48–72h)', 'Low-moderate', 'Yes, excellent for dilute'],
          ['Turbidimetry', 'Total cell density', 'Very rapid (minutes)', 'Moderate-high', 'No (detection limit ~10⁶)'],
          ['Direct microscopy', 'Total cell count', 'Rapid (minutes)', 'Low', 'No (requires preconcentration)']
        ],
        caption: 'Comparison of microbial growth measurement methods'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'All four methods measure different aspects of microbial populations: haemocytometer and direct microscopy count total cells (living + dead), while viable plate count counts only living cells capable of reproduction. Turbidimetry measures biomass as a proxy for cell number. The choice of method depends on whether you need viable counts, speed, or measurement of dilute cultures.',
        apply: 'If a 10⁻⁵ dilution yields 80 colonies on a plate, what was the original CFU/cm³? (Answer: 80 × 10⁵ = 8 × 10⁶ CFU/cm³). If the same culture measured OD₆₀₀ = 0.5, and OD 0.1 = 10⁷ cells/cm³, estimate total cell count.',
        analyze: 'Why would the viable plate count always be lower than the haemocytometer count for the same sample? What microorganisms might exist in the viable but non-culturable (VBNC) state?',
        evaluate: 'A food company needs to test milk safety. Would serial dilution and plate counting be better than turbidimetry? Justify your choice considering practical, cost, and regulatory factors.'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain the principle and procedure of the haemocytometer method', checked: false },
          { text: 'I can calculate total cell concentration using haemocytometer data', checked: false },
          { text: 'I understand what CFU means and why serial dilution is necessary', checked: false },
          { text: 'I can calculate CFU/cm³ from colony counts', checked: false },
          { text: 'I know why plates with 30–300 colonies are selected', checked: false },
          { text: 'I can explain the principle of turbidimetry (OD ∝ cell density)', checked: false },
          { text: 'I understand the limitations of turbidimetry for very dilute or very dense cultures', checked: false },
          { text: 'I can compare the advantages and limitations of all four methods', checked: false },
          { text: 'I can select the most appropriate method for a given scenario', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Four main methods measure microbial growth. Haemocytometer and direct microscopy count total cells microscopically. Viable plate count measures viable cells via serial dilution and colony counting (CFU/cm³ = colony count × dilution factor). Turbidimetry measures optical density (absorbance ∝ cell density) rapidly. Each method has trade-offs: viability vs. speed vs. detection limit. Selection depends on the application and whether living cells matter.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-haem', prompt: 'What does a haemocytometer measure, and what is the standard chamber depth?' },
      { id: 'cue-2', blockId: 'eq-vpc', prompt: 'Write the formula for calculating CFU/cm³ from a viable plate count.' },
      { id: 'cue-3', blockId: 'h-turb', prompt: 'What does turbidimetry measure and what is the standard wavelength used?' },
      { id: 'cue-4', blockId: 'callout-vpc-lim', prompt: 'Why do viable plate counts take longer than other methods?' },
      { id: 'cue-5', blockId: 'tbl-compare', prompt: 'Which method is best for detecting very dilute cultures and why?' }
    ],
    summaryText: 'Haemocytometer: total cells, quick, chamber depth 0.1 mm. Viable plate count: CFU/cm³ = count × dilution factor, 48–72h, measures only viable cells. Turbidimetry: OD at 600 nm, very rapid, cannot detect very dilute cultures. Direct microscopy: total cells, rapid, observer-dependent.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Viable Plate Count Standard', detail: 'ISO 7218:2007 Microbiology of food and animal feeding stuffs – General requirements and guidance for microbiological examinations', year: '2007', source: 'ISO', tags: ['viable plate count', 'standard', 'methodology'] }
  ]
};
