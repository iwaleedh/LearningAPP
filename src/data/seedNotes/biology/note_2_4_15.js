export const note_biology_2_4_15 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-core-prac-8',
      data: {
        text: 'Understand tensile strength testing of plant fibres and calculation of Young\'s modulus.',
      },
    },
    {
      type: 'heading',
      id: 'h-core-prac-8',
      data: { text: 'Core Practical 8: Tensile Strength of Plant Fibres', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-8',
      data: {
        text: 'Core Practical 8 involves testing the mechanical properties of plant fibres by applying increasing tension until breaking, measuring breaking force and extension, and calculating Young\'s modulus (stiffness). Aims: (1) measure tensile strength (breaking force per unit area), (2) calculate Young\'s modulus, (3) compare natural (flax, hemp) and synthetic (polyester, nylon) fibres.',
      },
    },
    {
      type: 'heading',
      id: 'h-method-8',
      data: { text: 'Method', level: 2 },
    },
    {
      type: 'list',
      id: 'list-method-8',
      data: {
        style: 'numbered',
        items: [
          'Prepare fibres: extract individual fibres from plant stems (flax, hemp) using retting (soaking) and mechanical processing, or use commercial fibres. Measure fibre diameter using a micrometer screw gauge (measure several points to account for variation)',
          'Set up apparatus: clamp fibre horizontally at both ends using a tensile testing machine (or improvised apparatus: clamp one end in a fixed support, other end in a load holder)',
          'Apply load: add masses gradually (e.g. 50g, 100g, 200g at a time) to the load holder. Record the extending ruler or electronic displacement sensor reading at each mass',
          'Measure extension: as mass increases, the fibre stretches. Record the total extension (Δx) at each load',
          'Record breaking point: continue adding mass until the fibre breaks. Record the breaking mass (total mass applied when fibre breaks)',
          'Calculate tensile strength: stress = breaking force / cross-sectional area. Breaking force (N) = breaking mass (kg) × 9.81 (g). Cross-sectional area = π × (diameter/2)². Tensile strength (MPa) = stress / 10⁶',
          'Calculate Young\'s modulus: E = stress / strain = (breaking force / area) / (extension / original length). Use data before breaking (in elastic region, typically first 50–70% of extension)',
        ],
      },
    },
    {
      type: 'equation',
      id: 'eq-youngs-8',
      data: {
        html: 'Young\'s modulus (E) = <span class="nb-frac"><span class="nb-num">Stress</span><span class="nb-den">Strain</span></span> = <span class="nb-frac"><span class="nb-num">Force / Area</span><span class="nb-den">Extension / Original Length</span></span>',
        caption: 'Young\'s modulus calculation from tensile test data.',
      },
    },
    {
      type: 'heading',
      id: 'h-worked-8',
      data: { text: 'Worked Example: Young\'s Modulus Calculation', level: 2 },
    },
    {
      type: 'callout',
      id: 'callout-worked-8',
      data: {
        style: 'worked',
        title: 'Tensile Test Calculation',
        text: 'Flax fibre: diameter 20 μm = 0.00002 m; original length 100 mm = 0.1 m. At breaking load (1 kg = 9.81 N): extension 5 mm = 0.005 m. Cross-sectional area = π × (0.00001)² = 3.14 × 10⁻¹⁰ m². Stress = 9.81 / (3.14 × 10⁻¹⁰) = 3.1 × 10¹⁰ Pa = 31,000 MPa. Strain = 0.005 / 0.1 = 0.05. Young\'s modulus = 31,000 / 0.05 = 620,000 MPa = 620 GPa. (Flax typical: 50–70 GPa, so this calculation is approximate; actual value depends on fibre quality.)',
      },
    },
    {
      type: 'heading',
      id: 'h-graph-analysis',
      data: { text: 'Stress-Strain Graph Analysis', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-graph',
      data: {
        text: 'Plotting stress (vertical axis) against strain (horizontal axis) produces a stress-strain curve. The gradient of the initial linear region (elastic deformation, where fibre returns to original length after load removal) equals Young\'s modulus. A steep gradient indicates high stiffness (high modulus); a shallow gradient indicates flexibility (low modulus). Beyond the elastic region, the curve typically flattens (plastic deformation, permanent stretching) until breaking. For plant fibres like flax, the elastic region is substantial; for synthetic fibres like polyester, elasticity is often greater (lower modulus, more stretchy).',
      },
    },
    {
      type: 'heading',
      id: 'h-safety',
      data: { text: 'Safety Considerations', level: 2 },
    },
    {
      type: 'list',
      id: 'list-safety',
      data: {
        style: 'bullet',
        items: [
          'Clamp fibres securely to prevent slipping and sudden release of load',
          'Add masses gradually to prevent sudden jerking',
          'Wear eye protection in case fibre breaks suddenly and snaps',
          'Do not stand directly in line with the fibre during testing',
          'Ensure clamping mechanism is stable and cannot tip',
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why must plant tissue sections be very thin (1–3 cells thick) for microscopy? Light must pass through the section; if too thick, overlapping cells create an uninterpretable image and insufficient light reaches the eyepiece. Thin sections also allow stains to penetrate evenly and individual cell walls, vacuoles, and organelles to be distinguished.",
        apply: "A student uses a stage micrometer to calibrate the eyepiece: one division = 5 μm at ×400. A xylem vessel appears 8 eyepiece divisions wide. Calculate: (a) the actual diameter of the vessel, (b) the image diameter at ×100 magnification if the student switches objectives.",
        analyze: "Compare the information obtainable from a transverse section stained with phloroglucinol versus a longitudinal section stained with toluidine blue. What features of xylem and phloem can be seen in each orientation? Which is better for measuring vessel diameter?",
        evaluate: "Evaluate the sources of error in preparing and interpreting hand-cut plant tissue sections. Consider: variation in section thickness, incomplete stain penetration, cell distortion during cutting, and observer bias in identifying cell types. Which source of error has the greatest impact on reliability?",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-prac-8',
      data: {
        items: [
          { text: 'Can measure fibre diameter with micrometer', checked: false },
          { text: 'Can set up tensile testing apparatus and apply load gradually', checked: false },
          { text: 'Can record breaking force and extension', checked: false },
          { text: 'Can calculate tensile strength (force/area)', checked: false },
          { text: 'Can calculate Young\'s modulus from stress-strain data', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-prac-8',
      data: {
        text: 'Core Practical 8: measure fibre diameter (micrometer), clamp horizontally, apply increasing masses, record extension at each load, measure breaking mass. Calculations: tensile strength = breaking force (N) / cross-sectional area (m²) in MPa. Young\'s modulus = stress/strain = (force/area) / (extension/original length) in GPa. Stress-strain graph: plot stress vs. strain; gradient of elastic region = Young\'s modulus. Steep gradient = stiff (high modulus, e.g. flax ~50–70 GPa); shallow = flexible (low modulus, e.g. polyester ~2–5 GPa). Safety: secure clamps, gradual loading, eye protection, stable apparatus.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method-8',
        prompt: 'Describe the method for testing tensile strength of a plant fibre.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-youngs-8',
        prompt: 'Write the formula for Young\'s modulus and explain its units.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked-8',
        prompt: 'Calculate Young\'s modulus: fibre breaks at 2 kg (19.62 N), diameter 25 μm, original length 100 mm, extension 10 mm.',
      },
      {
        id: 'cue-4',
        blockId: 'p-graph',
        prompt: 'Describe a stress-strain graph and how Young\'s modulus is determined from it.',
      },
    ],
    summaryText: 'Method: measure fibre diameter (micrometer), clamp at both ends, apply increasing masses (record extension with ruler or displacement sensor at each), continue until breaking. Record breaking mass (kg) and total extension (mm). Tensile strength = breaking force (N) / area (m²), where force = mass × 9.81. Area = π × (diameter/2)². Young\'s modulus E = stress/strain = (force/area) / (extension/length), units GPa. Stress-strain graph: plot stress vs. strain; elastic region (linear) has gradient = E. Steep gradient = stiff (flax ~50–70 GPa), shallow = flexible (polyester ~2–5 GPa). Plant fibres stronger than synthetics (high tensile strength) but lower modulus varies. Safety: secure clamps, gradual loading, eye protection, stable apparatus.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mechanical Testing of Biomaterials',
      detail: 'Tensile testing quantifies fibre mechanical properties (strength, stiffness), enabling comparison of natural and synthetic materials for engineering and sustainability applications.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['plant fibres', 'mechanical testing', 'biomaterials'],
    },
  ],
};
