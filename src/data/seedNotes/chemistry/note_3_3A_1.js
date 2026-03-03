export const note_chemistry_3_3A_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Write a detailed practical plan including aim, hypothesis, method, variables, risk assessment and required apparatus; apply risk control to practical chemistry.' },
    },
    {
      id: 'h-planning',
      type: 'heading',
      data: { text: 'Planning a Practical — Structure', level: 2 },
    },
    {
      id: 'p-planning',
      type: 'paragraph',
      data: { text: 'A well-written practical plan covers every stage from aim to safety. In WCH13, you may be asked to plan an experiment you have not seen before, applying principles from WCH11/WCH12 content.' },
    },
    {
      id: 'list-plan-structure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Aim:</strong> State clearly what you are trying to determine or demonstrate (e.g. "To determine the enthalpy of neutralisation of HCl with NaOH").',
          '<strong>Hypothesis/prediction:</strong> State what you expect to happen and why, based on theory.',
          '<strong>Variables:</strong> Identify independent (what you change), dependent (what you measure), and control variables (what you keep constant).',
          '<strong>Apparatus and materials:</strong> List all equipment with quantities and concentrations; include precision of measuring instruments.',
          '<strong>Method:</strong> Write a numbered step-by-step procedure; include quantities, timings, and how to record results.',
          '<strong>Risk assessment:</strong> Identify hazards, assess risk, and state specific control measures.',
          '<strong>Data collection table:</strong> Set up a results table with correct headings, units and appropriate number of decimal places.',
          '<strong>Repeats:</strong> State that the experiment should be repeated (usually 3 times) to check reproducibility and calculate a mean.',
        ],
      },
    },
    {
      id: 'h-variables',
      type: 'heading',
      data: { text: 'Variables — Independent, Dependent and Control', level: 2 },
    },
    {
      id: 'table-variables',
      type: 'comparisonTable',
      data: {
        caption: 'Types of variables in a practical investigation',
        headers: ['Variable type', 'Definition', 'Example (titration experiment)'],
        rows: [
          ['Independent', 'The variable you deliberately change', 'Concentration of acid (varied across experiments)'],
          ['Dependent', 'The variable you measure in response', 'Volume of alkali needed to neutralise the acid'],
          ['Control', 'Variables kept constant to ensure a fair test', 'Temperature, volume of acid, type of indicator, speed of addition'],
        ],
      },
    },
    {
      id: 'h-fair-test',
      type: 'heading',
      data: { text: 'Ensuring a Fair Test', level: 2 },
    },
    {
      id: 'list-fair',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Only change ONE variable at a time (the independent variable).',
          'Keep all other variables constant (control variables).',
          'Use the same apparatus throughout; calibrate instruments before use.',
          'Perform at least 3 repeats and calculate a mean; identify and exclude anomalous results.',
          'Use a control experiment (blank) where appropriate.',
        ],
      },
    },
    {
      id: 'h-risk',
      type: 'heading',
      data: { text: 'Risk Assessment in Practical Planning', level: 2 },
    },
    {
      id: 'p-risk',
      type: 'paragraph',
      data: { text: 'Every practical plan must include a risk assessment. This should be specific — not just "wear goggles" but identifying each hazard and its specific control measure.' },
    },
    {
      id: 'table-risk-template',
      type: 'comparisonTable',
      data: {
        caption: 'Risk assessment template',
        headers: ['Chemical/operation', 'Hazard', 'Risk (severity × likelihood)', 'Control measure'],
        rows: [
          ['Concentrated HCl (2 mol dm⁻³)', 'Corrosive; irritant fumes', 'Medium — causes skin/eye burns', 'Wear nitrile gloves and safety goggles; use in fume cupboard'],
          ['NaOH solution', 'Corrosive (irritant at low conc.)', 'Low-medium', 'Wear goggles; wash skin immediately if contact'],
          ['Ethanol (organic solvent)', 'Highly flammable', 'High near ignition sources', 'No naked flames; use water bath; keep container sealed'],
          ['Bromine water', 'Toxic, irritant, corrosive', 'Medium', 'Fume cupboard; nitrile gloves; goggles; small quantities'],
          ['Heating liquids', 'Bumping, burns', 'Medium', 'Anti-bumping granules; heat slowly; use water bath'],
        ],
      },
    },
    {
      id: 'h-planning-titration',
      type: 'heading',
      data: { text: 'Worked Example — Planning a Titration', level: 2 },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Plan: Determine the concentration of an unknown HCl solution by titration with 0.100 mol dm⁻³ NaOH',
        text: 'Aim: To find the concentration of HCl by acid-base titration.\n\nVariables:\n• Independent: none (single unknown)\n• Dependent: volume of NaOH to neutralise 25.0 cm³ HCl\n• Control: volume of HCl (25.0 cm³), indicator type, same burette\n\nApparatus: burette (50 cm³, ±0.05 cm³), pipette (25 cm³, ±0.06 cm³), conical flask, white tile, phenolphthalein indicator, 0.100 mol dm⁻³ NaOH\n\nMethod:\n1. Rinse and fill burette with NaOH; record initial reading.\n2. Pipette exactly 25.0 cm³ HCl into conical flask.\n3. Add 3 drops of phenolphthalein indicator.\n4. Add NaOH dropwise near endpoint; swirl continuously.\n5. Record final burette reading when colour changes from colourless → pale pink (permanent).\n6. Repeat until two titres agree within 0.10 cm³; calculate mean titre.\n\nRisk: NaOH corrosive → wear goggles and gloves.',
      },
    },
    {
      id: 'h-standard',
      type: 'heading',
      data: { text: 'Preparing a Standard Solution', level: 2 },
    },
    {
      id: 'list-standard',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Calculate the mass of solute needed: mass = concentration (mol dm⁻³) × volume (dm³) × Mr.',
          'Weigh the solid accurately on an analytical balance (±0.001 g).',
          'Dissolve in a small volume of distilled water in a beaker; stir until fully dissolved.',
          'Transfer quantitatively to a volumetric flask (rinse beaker 3× with distilled water, adding rinsings to flask).',
          'Make up to the graduation mark with distilled water — add dropwise near the mark using a dropping pipette.',
          'Stopper and invert 10–15 times to mix thoroughly.',
          'Label the flask with concentration, solute, date and your name.',
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• When writing a plan, use numbered steps — examiners look for a logical sequence.\n• State specific quantities (e.g. "25.0 cm³ of 0.100 mol dm⁻³ NaOH") — vague plans lose marks.\n• Always include repeats and a mean in your plan.\n• For risk assessment: name the specific hazard (e.g. "corrosive") AND the specific control measure (e.g. "nitrile gloves and safety goggles") — not just "be careful".',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Not identifying control variables — examiners expect you to state what must be kept constant.\n• Vague method steps (e.g. "heat the mixture") — always state temperature, time, or how to know when the step is complete.\n• Risk assessment with only generic measures (e.g. "wear goggles") without linking to a specific hazard.',
      },
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write a practical plan with aim, variables, apparatus, method, and risk assessment.', checked: false },
          { text: 'I can distinguish independent, dependent and control variables.', checked: false },
          { text: 'I can write a specific risk assessment linking hazard to control measure.', checked: false },
          { text: 'I can describe how to prepare a standard solution accurately.', checked: false },
          { text: 'I know the importance of repeats and calculating a mean in practical work.', checked: false },
        ],
      },
    },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: A practical plan must be detailed enough for another scientist to reproduce the experiment and obtain comparable results. This reproducibility is fundamental to the scientific method.\n\nApply: Write a practical plan to determine the enthalpy of neutralisation of HCl and NaOH, including aim, hypothesis, apparatus list, method, variables (IV, DV, CV), and risk assessment.\n\nAnalyze: Why must control variables be identified and controlled? What happens to the validity of conclusions if a key variable is not controlled?\n\nEvaluate: A student\'s plan uses "add some acid to the beaker." Critique this instruction. How should it be improved to ensure reproducibility and reliability?'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'A practical plan must include: aim, hypothesis, variables (independent/dependent/control), apparatus (with precision), step-by-step method (numbered, specific), risk assessment (hazard → control), results table, and repeats. Control variables ensure a fair test. Standard solutions: calculate mass → dissolve → transfer quantitatively → make up to mark in volumetric flask.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-plan-structure', prompt: 'List the 8 components that should appear in a full practical plan.' },
      { id: 'cue-2', blockId: 'table-variables', prompt: 'Define independent, dependent and control variables with an example.' },
      { id: 'cue-3', blockId: 'callout-worked', prompt: 'Outline the key steps in planning a titration to find the concentration of an unknown acid.' },
      { id: 'cue-4', blockId: 'list-standard', prompt: 'Describe how to prepare a standard solution in a volumetric flask.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What makes a risk assessment specific enough to gain full marks?' },
    ],
    summaryText: 'Plan: aim, hypothesis, variables (IV/DV/CV), apparatus+precision, numbered method, risk assessment, results table, repeats. Standard solution: calculate mass → dissolve → transfer to volumetric flask → make to mark. Risk: name hazard + specific control measure.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH13 Specification', detail: 'Practical planning and risk control are core assessed skills in WCH13.', year: '2018', source: 'Pearson Edexcel', tags: ['practical planning', 'risk assessment', 'WCH13'] },
  ],
};
