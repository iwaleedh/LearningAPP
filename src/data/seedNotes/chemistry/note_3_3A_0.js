export const note_chemistry_3_3A_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe the apparatus, methods and techniques used in the core practicals from WCH11 (Units 1–2); explain the purpose of each step in standard laboratory procedures.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'WCH13 — Practical Skills Overview', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'WCH13 is the practical skills paper for Pearson Edexcel IAL Chemistry. It assesses your ability to plan, perform, analyse and evaluate experiments drawn from the content of WCH11 and WCH12. This note covers the key practical methods you must know from Units 1 and 2.' },
    },
    {
      id: 'h-cp1',
      type: 'heading',
      data: { text: 'Core Practical 1 — Molar Volume of a Gas (WCH11)', level: 2 },
    },
    {
      id: 'callout-key-cp1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Practical 1: Mg + HCl → H₂ (gas syringe method)',
        text: 'Aim: Measure the volume of H₂ produced when a known mass of Mg reacts with excess HCl, then calculate the molar volume of H₂ at room temperature and pressure (r.t.p.).',
      },
    },
    {
      id: 'list-cp1-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Weigh a strip of magnesium ribbon accurately using a balance (record to ±0.001 g).',
          'Set up a conical flask fitted with a bung and delivery tube connected to a gas syringe (or inverted measuring cylinder over water).',
          'Add excess dilute HCl to the flask.',
          'Quickly insert the Mg and seal with the bung.',
          'Record the volume of gas collected when reaction is complete (gas syringe reading).',
          'Record temperature and pressure (atmospheric) of the room.',
        ],
      },
    },
    {
      id: 'eq-cp1',
      type: 'equation',
      data: {
        html: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)',
        caption: 'Reaction for Core Practical 1.',
      },
    },
    {
      id: 'callout-cp1-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'CP1 Calculation',
        text: 'Moles of Mg = mass / Mr = mass / 24.3\nMoles of H₂ = moles of Mg (1:1 ratio)\nMolar volume = volume of H₂ / moles of H₂\n\nExpected answer: ~24,000 cm³ mol⁻¹ (or 24 dm³ mol⁻¹) at r.t.p.',
      },
    },
    {
      id: 'table-cp1-errors',
      type: 'comparisonTable',
      data: {
        caption: 'CP1 — Sources of error and improvements',
        headers: ['Source of error', 'Effect on result', 'Improvement'],
        rows: [
          ['Gas escapes before bung is sealed', 'Volume of H₂ measured too low → molar volume too low', 'Pre-weigh Mg; seal flask immediately before adding Mg'],
          ['Gas syringe sticks/has friction', 'Volume reading inaccurate', 'Check syringe moves freely before experiment; lubricate if needed'],
          ['Mg ribbon has oxide layer (MgO)', 'Less Mg reacts → volume too low', 'Clean ribbon with sandpaper before weighing'],
          ['Temperature/pressure not at r.t.p.', 'Volume differs from 24 dm³ mol⁻¹', 'Record T and P; use ideal gas law to correct volume to r.t.p.'],
          ['HCl not in excess', 'Not all Mg reacts → volume too low', 'Use a large excess of HCl (check: Mg dissolves completely)'],
        ],
      },
    },
    {
      id: 'h-cp2',
      type: 'heading',
      data: { text: 'Core Practical 2 — Enthalpy Change (WCH12)', level: 2 },
    },
    {
      id: 'callout-key-cp2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Core Practical 2: Enthalpy of Neutralisation / Displacement',
        text: 'Aim: Measure the temperature change when an acid reacts with a base (or a metal with a salt solution) and calculate the enthalpy change using q = mcΔT.',
      },
    },
    {
      id: 'list-cp2-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Measure a known volume of solution (e.g. 25 cm³ of HCl) into a polystyrene cup (insulated calorimeter).',
          'Record the initial temperature of both solutions.',
          'Add the second reagent (e.g. NaOH solution or metal powder) and stir.',
          'Record the maximum (or minimum for endothermic) temperature reached.',
          'Calculate ΔT = T_final − T_initial.',
          'Calculate q = mcΔT (m = mass of solution in g, c = 4.18 J g⁻¹ K⁻¹ for dilute aqueous solutions).',
          'Calculate moles of limiting reagent and then ΔH = −q / moles (in kJ mol⁻¹).',
        ],
      },
    },
    {
      id: 'table-cp2-errors',
      type: 'comparisonTable',
      data: {
        caption: 'CP2 — Sources of error and improvements',
        headers: ['Source of error', 'Effect', 'Improvement'],
        rows: [
          ['Heat loss to surroundings', 'ΔT measured too small → ΔH too small', 'Use polystyrene cup + lid; lag the cup; extrapolate cooling curve to find true T_max'],
          ['Not using a lid', 'Heat lost by evaporation', 'Always use a lid with a hole for thermometer'],
          ['Thermometer reading error', 'ΔT inaccurate', 'Use a calibrated digital thermometer; record to 0.1 °C'],
          ['Assuming c = 4.18 J g⁻¹ K⁻¹ for all solutions', 'Error in q calculation', 'Acceptable for dilute aqueous solutions; note as assumption'],
          ['Assuming density = 1.00 g cm⁻³', 'Mass calculated incorrectly', 'Weigh the solution directly; note as assumption for dilute solutions'],
        ],
      },
    },
    {
      id: 'h-techniques',
      type: 'heading',
      data: { text: 'Key Practical Techniques — Units 1 & 2', level: 2 },
    },
    {
      id: 'table-techniques',
      type: 'comparisonTable',
      data: {
        caption: 'Essential practical techniques for WCH11/WCH12',
        headers: ['Technique', 'Purpose', 'Key points'],
        rows: [
          ['Weighing by difference', 'Accurate mass of solid transferred', 'Weigh bottle+solid before and after transfer; difference = mass transferred'],
          ['Pipette (25 cm³)', 'Accurate fixed volume of liquid', 'Use with pipette filler; rinse with solution being measured; fill to bottom of meniscus'],
          ['Burette', 'Accurate variable volume in titrations', 'Rinse with solution; fill above 0.00 cm³; read bottom of meniscus to ±0.05 cm³'],
          ['Volumetric flask', 'Accurate preparation of standard solution', 'Dissolve solid, transfer to flask, make up to mark with distilled water, invert to mix'],
          ['Gas syringe', 'Measure gas volume', 'Check for leaks; read after reaction complete and gas cooled to room temp'],
          ['Water bath', 'Controlled heating without naked flame', 'Essential for flammable organic solvents; set to required temperature'],
          ['Reflux condenser', 'Heat organic reaction without losing volatile reactants', 'Water flows through outer jacket; vapour condenses and returns to flask'],
          ['Distillation', 'Separate liquid products by boiling point', 'Thermometer at side arm; collect fraction over correct temperature range'],
        ],
      },
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus and Their Precision', level: 2 },
    },
    {
      id: 'table-apparatus',
      type: 'comparisonTable',
      data: {
        caption: 'Common apparatus and typical precision',
        headers: ['Apparatus', 'Typical precision', 'Use'],
        rows: [
          ['Analytical balance', '±0.001 g', 'Accurate mass of solids'],
          ['Burette (50 cm³)', '±0.05 cm³ per reading (±0.10 cm³ total)', 'Titration volumes'],
          ['Pipette (25 cm³)', '±0.06 cm³', 'Fixed accurate volumes'],
          ['Volumetric flask (250 cm³)', '±0.30 cm³', 'Preparing standard solutions'],
          ['Measuring cylinder (100 cm³)', '±0.5 cm³', 'Approximate volumes'],
          ['Thermometer (mercury/alcohol)', '±0.5 °C', 'Temperature measurement'],
          ['Digital thermometer', '±0.1 °C', 'More precise temperature'],
          ['Gas syringe (100 cm³)', '±0.5 cm³', 'Gas volume measurement'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always state the apparatus and its precision when describing a method.\n• "Use a pipette" is better than "use a measuring cylinder" for accurate volumes — know which apparatus gives greater precision.\n• For CP1: always state that HCl must be in excess to ensure all Mg reacts.\n• For CP2: always mention heat loss as a source of error and the polystyrene cup as a control measure.',
      },
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the method for CP1 (molar volume of H₂ from Mg + HCl).', checked: false },
          { text: 'I can describe the method for CP2 (enthalpy change by calorimetry).', checked: false },
          { text: 'I can identify sources of error in each CP and suggest improvements.', checked: false },
          { text: 'I know the precision of burette, pipette, balance and gas syringe.', checked: false },
          { text: 'I can describe when to use a water bath, reflux condenser, or distillation apparatus.', checked: false },
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
        text: 'Understand: Core practical skills are not just procedural steps — each step has a scientific rationale. Understanding WHY you do something (e.g. rinsing a burette with the solution to be used) prevents systematic errors.\n\nApply: In Core Practical 1 (molar volume), the gas syringe must be airtight. Explain what would happen to the calculated molar volume if there was a small leak.\n\nAnalyze: Compare the gas syringe method with water displacement for collecting gases. For which gases is water displacement unsuitable, and why?\n\nEvaluate: A student says "following the method exactly guarantees accurate results." Evaluate this claim, considering the difference between precision and accuracy, and the role of systematic vs random errors.'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'CP1 (Mg + HCl → H₂): gas syringe measures H₂ volume → molar volume ≈ 24 dm³ mol⁻¹. Errors: gas escape, oxide layer, syringe friction. CP2 (calorimetry): q = mcΔT in polystyrene cup → ΔH = −q/moles. Errors: heat loss, no lid. Key techniques: pipette (±0.06 cm³), burette (±0.05 cm³/reading), analytical balance (±0.001 g), gas syringe (±0.5 cm³).' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-cp1-method', prompt: 'Describe the method for CP1 (molar volume of H₂). What must be ensured about the HCl?' },
      { id: 'cue-2', blockId: 'table-cp1-errors', prompt: 'State two sources of error in CP1 and how to reduce each.' },
      { id: 'cue-3', blockId: 'list-cp2-method', prompt: 'Describe the key steps in CP2 (enthalpy by calorimetry). What formula is used?' },
      { id: 'cue-4', blockId: 'table-apparatus', prompt: 'State the precision of a burette, pipette and analytical balance.' },
      { id: 'cue-5', blockId: 'table-techniques', prompt: 'Why is a water bath used instead of a Bunsen burner for organic reactions?' },
    ],
    summaryText: 'CP1: Mg+HCl→H₂; gas syringe; molar volume ≈24 dm³ mol⁻¹; errors: gas escape, oxide layer. CP2: q=mcΔT; polystyrene cup; ΔH=−q/n; errors: heat loss. Burette ±0.05 cm³; pipette ±0.06 cm³; balance ±0.001 g.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH13 Specification', detail: 'WCH13 assesses practical skills from WCH11 and WCH12 core practicals.', year: '2018', source: 'Pearson Edexcel', tags: ['core practicals', 'WCH13', 'practical methods'] },
  ],
};
