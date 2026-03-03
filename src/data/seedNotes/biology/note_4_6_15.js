export const note_biology_4_6_15 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 13: measuring microbial growth rate using serial dilution, spread plate technique, incubation, colony counting, CFU calculation, and turbidity measurement.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Core Practical 13: Microbial Growth Rate Determination', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'This core practical involves culturing bacteria, measuring growth over time using plate counts and turbidity, and calculating the growth rate (doubling time). Students practice aseptic techniques, serial dilution, and data analysis essential for microbiology.'
      },
      terms: []
    },
    {
      id: 'h-method-overview',
      type: 'heading',
      data: { text: 'Practical Method Overview', level: 2 },
      terms: []
    },
    {
      id: 'list-overview',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare bacterial culture: Inoculate sterile nutrient broth with bacterial starter culture (e.g. E. coli, Bacillus). Incubate at 25degreesC (or 37degreesC for human pathogens) with gentle shaking (orbital shaker preferred).',
          'Measure turbidity: At regular intervals (e.g. every 30 minutes for 3–4 hours), measure optical density (OD₆₀₀) using a spectrophotometer. OD₆₀₀ is proportional to cell density.',
          'Serial dilution and plating: At selected time points, prepare serial dilutions (10⁻¹, 10⁻², 10⁻³, 10⁻⁴, 10⁻⁵, 10⁻⁶) of the culture.',
          'Spread plate: Plate appropriate dilutions onto nutrient agar using the spread plate method (spread 0.1 mL of diluted culture across agar surface with sterile L-shaped spreader). Use three replicates per dilution.',
          'Incubate plates: Incubate at 25degreesC for 48 hours (agar plates should be incubated inverted to prevent condensation dripping onto colonies).',
          'Count colonies: Count colonies on plates with 30–300 colonies. Plates with <30 or >300 colonies are unreliable (statistical significance and crowding issues).',
          'Calculate CFU/mL: CFU/mL = (average colony count) × (dilution factor) / (volume plated in mL). Example: 150 colonies on 10⁻⁶ plate, 0.1 mL plated: CFU/mL = 150 × 10⁶ / 0.1 = 1.5 × 10⁹.',
          'Plot growth curve: Plot ln(CFU/mL) or ln(OD₆₀₀) vs time on semi-log graph. Log phase appears as a straight line; slope = growth rate.'
        ]
      },
      terms: []
    },
    {
      id: 'h-serial-dilution',
      type: 'heading',
      data: { text: 'Serial Dilution Procedure', level: 2 },
      terms: []
    },
    {
      id: 'p-serial-dilution-1',
      type: 'paragraph',
      data: {
        text: 'Serial dilution is the stepwise dilution of a culture by factors of 10, creating a range of dilutions. This ensures plates have countable colony numbers (30–300 per plate).'
      },
      terms: []
    },
    {
      id: 'list-serial-dilution-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Start with 1 mL of culture in sterile tube → add to 9 mL sterile diluent (PBS, saline). Mix well. This is 10⁻¹ dilution.',
          'Take 1 mL of 10⁻¹ → add to 9 mL diluent → 10⁻² dilution.',
          'Repeat to 10⁻³, 10⁻⁴, 10⁻⁵, 10⁻⁶.',
          'Use aseptic technique throughout: flame inoculation loops, work near Bunsen burner flame to reduce air currents.',
          'Label all tubes clearly with dilution factor and date/time.'
        ]
      },
      terms: []
    },
    {
      id: 'h-spread-plate',
      type: 'heading',
      data: { text: 'Spread Plate Technique', level: 2 },
      terms: []
    },
    {
      id: 'p-spread-plate-1',
      type: 'paragraph',
      data: {
        text: 'The spread plate method distributes bacteria across the agar surface, resulting in isolated colonies that can be counted. Alternative to pour plate method (which risk pathogenic aerosol inhalation).'
      },
      terms: []
    },
    {
      id: 'list-spread-plate-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Prepare plates: Pour ~15 mL molten nutrient agar into sterile Petri dishes; allow to solidify at room temperature.',
          'Pipette: Using sterile pipette, dispense 0.1 mL of diluted culture onto the center of the agar plate.',
          'Spread: Using sterile L-shaped glass spreader (dipped briefly in 70% ethanol and allowed to cool against the agar edge), spread the inoculum evenly across the entire agar surface using smooth, overlapping strokes. Do not dig into the agar.',
          'Incubate: Invert plate (agar up, lid down) and incubate at 25degreesC (or appropriate temperature) for 48 hours.',
          'Replicates: Prepare three replicates of each dilution to ensure statistical validity.'
        ]
      },
      terms: []
    },
    {
      id: 'h-colony-counting',
      type: 'heading',
      data: { text: 'Colony Counting and CFU Calculation', level: 2 },
      terms: []
    },
    {
      id: 'p-colony-counting-1',
      type: 'paragraph',
      data: {
        text: 'After incubation, colonies are counted. Only plates with 30–300 colonies are used for statistical reliability. Fewer than 30 colonies risk sampling error; more than 300 colonies become too crowded to count accurately and individual colonies may coalesce.'
      },
      terms: []
    },
    {
      id: 'list-colony-counting-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Count colonies: Use a colony counter (automated image analysis or manual tally with marker pen).',
          'Select plates: Use plates with 30–300 colonies. Example: 10⁻⁶ dilution (50 colonies), 10⁻⁷ dilution (5 colonies—too few), 10⁻⁵ dilution (500 colonies—too many).',
          'Average replicates: Calculate mean colony count from three replicate plates.',
          'Calculate CFU/mL: CFU/mL = (mean colony count) × (dilution factor) ÷ (volume plated in mL).'
        ]
      },
      terms: []
    },
    {
      id: 'eq-cfu-calc',
      type: 'equation',
      data: {
        html: 'CFU/mL = (mean colony count) × (dilution factor) ÷ (volume plated in mL)<br>Example: 150 colonies, 10⁻⁶ dilution, 0.1 mL plated<br>CFU/mL = 150 × 10<sup>6</sup> ÷ 0.1 = 1.5 × 10<sup>9</sup> CFU/mL'
      },
      terms: []
    },
    {
      id: 'h-turbidimetry',
      type: 'heading',
      data: { text: 'Turbidity Measurement (OD₆₀₀)', level: 2 },
      terms: []
    },
    {
      id: 'p-turbidimetry-1',
      type: 'paragraph',
      data: {
        text: 'Turbidimetry (optical density measurement) is rapid and non-destructive. OD₆₀₀ is measured throughout the incubation period, allowing real-time monitoring of growth without plate counting delays.'
      },
      terms: []
    },
    {
      id: 'list-turbidimetry-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Blank: Prepare a cuvette filled with sterile broth (no bacteria); use as the blank (OD = 0 reference).',
          'Sample: Transfer 1 mL of culture to a clean cuvette.',
          'Measure: Place cuvette in spectrophotometer set to 600 nm wavelength. Record OD₆₀₀ reading.',
          'Repeat: Measure OD₆₀₀ at regular intervals (e.g. every 30 minutes) over the incubation period.',
          'Plot: Plot OD₆₀₀ (linear scale) or ln(OD₆₀₀) (semi-log) vs time. Log phase growth appears linear on semi-log graph.'
        ]
      },
      terms: []
    },
    {
      id: 'h-data-analysis',
      type: 'heading',
      data: { text: 'Data Analysis and Growth Curve', level: 2 },
      terms: []
    },
    {
      id: 'p-data-analysis-1',
      type: 'paragraph',
      data: {
        text: 'Growth data (CFU counts and OD readings) are plotted to visualise growth phases and calculate doubling time.'
      },
      terms: []
    },
    {
      id: 'list-data-analysis-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Plot semi-log graph: X-axis = time (minutes or hours); Y-axis = ln(CFU/mL) or ln(OD₆₀₀). Use natural logarithm.',
          'Identify phases: Lag phase (no growth, horizontal line), log phase (straight line—exponential growth), stationary phase (plateau).',
          'Calculate doubling time (generation time): Doubling time = time for population to double. On semi-log graph, log phase is linear: slope = ln(2) / doubling time. Doubling time = 0.693 / slope.',
          'Example: If the slope of the linear region (log phase) is 0.1 per minute, doubling time = 0.693 / 0.1 = 6.93 minutes ≈ 7 minutes.',
          'Report: Include graphs, calculations, and discussion of results. Compare CFU-based growth rate with OD-based growth rate.'
        ]
      },
      terms: []
    },
    {
      id: 'h-sources-of-error',
      type: 'heading',
      data: { text: 'Sources of Error', level: 2 },
      terms: []
    },
    {
      id: 'list-sources-of-error',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Satellite colonies: Small colonies that grow around larger ones in areas of low oxygen tension. Avoid counting as separate colonies.',
          'Clumped cells: Bacterial cells may stick together, forming a single colony from multiple cells. Mechanical disaggregation (vortexing) helps reduce clumping, but some clumping always occurs.',
          'Contamination: Fungal or bacterial contamination of culture or plates. Use aseptic technique throughout; inspect plates for contamination (unusual colony morphology).',
          'Incubation temperature: Variation in temperature affects growth rate. Use an incubator with consistent temperature control.',
          'Condensation: Water droplets on plate lids can drip onto agar, spreading colonies. Incubate plates inverted.',
          'Timing: Irregular measurement intervals or delays in processing samples affect accuracy. Maintain consistent timing.',
          'Pipetting error: Inaccurate pipette volumes skew CFU calculations. Calibrate pipettes; use appropriate pipette sizes (1–10 microL, 10–100 microL, 100–1000 microL).'
        ]
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Serial dilution allows creation of countable plate colonies (30–300). Spread plate distributes bacteria across agar surface. CFU/mL calculation: count × dilution factor ÷ volume. OD₆₀₀ measurement is rapid and proportional to cell density. Semi-log plot of CFU or OD vs time shows lag (no growth), log (exponential, linear on semi-log), and stationary phases. Doubling time calculated from log phase slope.',
        apply: 'A 10⁻⁴ dilution plate has 80 colonies (0.1 mL spread). Calculate CFU/mL. (80 × 10⁴ ÷ 0.1 = 8 × 10⁶ CFU/mL). If doubling time is 20 minutes, calculate population after 2 hours from initial 10⁶. (n = 120 min ÷ 20 = 6 generations; 10⁶ × 2⁶ = 64 × 10⁶)',
        analyze: 'Why are plates with >300 colonies unreliable? Why are plates with <30 colonies unreliable?',
        evaluate: 'A student finds that turbidimetry (OD₆₀₀) shows linear increase over 4 hours but plate counts show exponential growth for only 2 hours then plateau. Explain the discrepancy. (OD measures total cells including dead; plates count only viable cells; viable count plateaus as nutrient depletes or stress increases)'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can prepare a serial dilution with proper aseptic technique', checked: false },
          { text: 'I can perform the spread plate technique correctly', checked: false },
          { text: 'I understand why plates with 30–300 colonies are selected', checked: false },
          { text: 'I can calculate CFU/mL from colony counts', checked: false },
          { text: 'I can measure OD₆₀₀ using a spectrophotometer', checked: false },
          { text: 'I can identify lag, log, and stationary phases on a growth curve', checked: false },
          { text: 'I can calculate doubling time from a semi-log growth plot', checked: false },
          { text: 'I understand common sources of error in this practical', checked: false },
          { text: 'I can compare CFU-based and OD-based growth measurements', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Core Practical 13: Serial dilution (10⁻¹ to 10⁻⁶) → spread plate onto agar (0.1 mL per plate, 3 replicates) → incubate 25degreesC for 48h → count colonies (30–300 per plate) → calculate CFU/mL = count × dilution ÷ volume plated. Parallel turbidimetry: measure OD₆₀₀ at intervals (spectrophotometer, 600 nm). Semi-log plot of ln(CFU) or ln(OD) vs time shows growth phases. Doubling time = 0.693 / log phase slope. Sources of error: satellite colonies, clumping, contamination, temperature variation, incubation timing, pipetting accuracy.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-serial-dilution', prompt: 'Describe how to prepare serial dilutions from 10⁻¹ to 10⁻⁶.' },
      { id: 'cue-2', blockId: 'list-spread-plate-steps', prompt: 'Explain the spread plate technique step-by-step.' },
      { id: 'cue-3', blockId: 'eq-cfu-calc', prompt: 'Write the CFU/mL calculation formula and calculate for 150 colonies (10⁻⁶, 0.1 mL).' },
      { id: 'cue-4', blockId: 'list-turbidimetry-steps', prompt: 'Describe how to measure OD₆₀₀ using a spectrophotometer.' },
      { id: 'cue-5', blockId: 'list-data-analysis-steps', prompt: 'How do you calculate doubling time from a semi-log growth plot?' }
    ],
    summaryText: 'Serial dilution: 1 mL culture + 9 mL diluent → 10⁻¹, repeat to 10⁻⁶. Spread plate: 0.1 mL dilution on agar, spread with sterile L-spreader, 3 replicates. Incubate 25degreesC/48h (inverted). Count colonies: select plates 30–300; CFU/mL = count × dilution factor ÷ 0.1. OD₆₀₀: spectrophotometer, 600 nm, measure every 30 min. Semi-log plot: ln(CFU or OD) vs time. Doubling time = 0.693 / log phase slope. Errors: clumping, satellite colonies, contamination, temperature, timing.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Microbial Growth Measurement Methods', detail: 'ISO 7218:2007 Microbiology of food and animal feeding stuffs. General requirements and guidance for microbiological examinations', year: '2007', source: 'International Organization for Standardization', tags: ['microbial growth', 'plate counting', 'CFU', 'serial dilution'] }
  ]
};
