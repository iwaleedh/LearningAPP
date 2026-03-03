/**
 * WCH12 | Topic 6: Energetics | Subtopic 5
 * Core Practical 2: Enthalpy change of a reaction
 */

export const note_chemistry_1_2_6_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe and evaluate Core Practical 2: measuring the enthalpy change of a reaction in solution using a polystyrene cup calorimeter. Record and process data, calculate ΔH, identify sources of error and suggest improvements.'
    }
  },
  // ── AIM ───────────────────────────────────────────────────────────────
  {
    id: 'h-aim',
    type: 'heading',
    data: {
      text: 'Aim',
      level: 2
    },
    terms: []
  }, {
    id: 'p-aim',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "the reaction of zinc with copper sulfate solution, or the neutralisation of HCl with NaOH) using a polystyrene cup calorimeter, and to calculate the enthalpy change per mole."]
    },
    terms: ['Calorimetry', 'Enthalpy change']
  },
  // ── APPARATUS ─────────────────────────────────────────────────────────
  {
    id: 'h-apparatus',
    type: 'heading',
    data: {
      text: 'Apparatus',
      level: 2
    },
    terms: []
  }, {
    id: 'list-apparatus',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Polystyrene cup (with lid) — acts as insulated calorimeter', 'Thermometer (±0.1°C or digital temperature probe)', 'Measuring cylinder or volumetric pipette (25.0 cm³)', 'Balance (±0.01 g) — for solid reactant', 'Stirring rod or magnetic stirrer', 'Stopwatch — for temperature-time readings', 'Spatula and weighing boat']
    },
    terms: []
  }, {
    id: 'svg-apparatus',
    type: 'svg',
    data: {
      caption: 'Polystyrene cup calorimeter setup for Core Practical 2',
      svg: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polystyrene cup calorimeter apparatus">
  <!-- Outer beaker (support) -->
  <rect x="80" y="90" width="160" height="100" rx="5" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>

  <!-- Polystyrene cup (inner) -->
  <rect x="100" y="80" width="120" height="110" rx="6" fill="#fff" stroke="#374151" stroke-width="2"/>

  <!-- Lid -->
  <rect x="96" y="72" width="128" height="12" rx="4" fill="#e5e7eb" stroke="#374151" stroke-width="1.5"/>
  <text x="160" y="82" text-anchor="middle" font-size="8" fill="#374151">lid</text>

  <!-- Solution inside cup -->
  <rect x="101" y="110" width="118" height="79" rx="4" fill="#bfdbfe" opacity="0.6"/>
  <text x="160" y="148" text-anchor="middle" font-size="10" fill="#1e40af">Solution</text>
  <text x="160" y="162" text-anchor="middle" font-size="9" fill="#1e40af">(reaction mixture)</text>

  <!-- Thermometer through lid -->
  <rect x="154" y="20" width="8" height="60" rx="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.2"/>
  <ellipse cx="158" cy="80" rx="5" ry="5" fill="#dc2626"/>
  <text x="175" y="35" font-size="9" fill="#374151">Thermometer</text>
  <line x1="174" y1="33" x2="163" y2="38" stroke="#9ca3af" stroke-width="1"/>

  <!-- Stirring rod through lid -->
  <line x1="185" y1="75" x2="185" y2="170" stroke="#374151" stroke-width="2"/>
  <text x="210" y="78" font-size="9" fill="#374151">Stirring rod</text>
  <line x1="208" y1="76" x2="188" y2="76" stroke="#9ca3af" stroke-width="1"/>

  <!-- Labels -->
  <text x="160" y="100" text-anchor="middle" font-size="9" fill="#374151">Polystyrene cup</text>
  <text x="40" y="140" font-size="9" fill="#6b7280" text-anchor="middle">Beaker</text>
  <text x="40" y="150" font-size="9" fill="#6b7280" text-anchor="middle">(support)</text>

  <!-- Title -->
  <text x="160" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Core Practical 2 Apparatus</text>
</svg>`
    },
    terms: []
  },
  // ── METHOD ────────────────────────────────────────────────────────────
  {
    id: 'h-method',
    type: 'heading',
    data: {
      text: 'Method — Example: Zn(s) + CuSO₄(aq)',
      level: 2
    },
    terms: []
  }, {
    id: 'list-method',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Measure 25.0 cm³ of 0.200 mol dm⁻³ CuSO₄(aq) using a pipette and transfer to a polystyrene cup.', 'Place the lid on the cup. Insert a thermometer and stirring rod through the holes in the lid.', 'Record the temperature every minute for 3 minutes to establish a stable initial temperature.', 'Accurately weigh approximately 1.00 g of zinc powder and record the exact mass.', 'At exactly 3 minutes, add all the zinc powder through the lid as quickly as possible.', 'Stir continuously and record the temperature every minute for a further 5 minutes.', 'Note the maximum temperature reached.', 'Repeat the experiment to obtain concordant results.']
    },
    terms: []
  },
  // ── RESULTS TABLE ─────────────────────────────────────────────────────
  {
    id: 'h-results',
    type: 'heading',
    data: {
      text: 'Results Table',
      level: 2
    },
    terms: []
  }, {
    id: 'table-results',
    type: 'comparisonTable',
    data: {
      caption: 'Example results for Zn(s) + CuSO₄(aq) experiment',
      headers: ['Time (min)', 'Temperature (°C)', 'Notes'],
      rows: [['0', '21.5', 'Before addition'], ['1', '21.5', 'Before addition'], ['2', '21.5', 'Before addition'], ['3', '21.5 → add Zn', 'Zinc added at t = 3 min'], ['4', '28.3', 'After addition'], ['5', '32.6', 'Rising'], ['6', '34.1', 'Near maximum'], ['7', '33.8', 'Cooling begins'], ['8', '33.2', 'Cooling']]
    },
    terms: []
  }, {
    id: 'callout-results-note',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Reading Maximum Temperature',
      text: 'The maximum temperature is not necessarily the highest recorded value — it should be determined by extrapolating the cooling section of the temperature-time graph back to the time of addition.\n\nThis corrects for heat loss that occurred during the temperature rise.'
    },
    terms: []
  },
  // ── CALCULATION ───────────────────────────────────────────────────────
  {
    id: 'h-calculation',
    type: 'heading',
    data: {
      text: 'Calculation',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-we-cp2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Calculation — Zn + CuSO₄',
      text: 'Equation: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)\n\nData: V(CuSO₄) = 25.0 cm³, c(CuSO₄) = 0.200 mol dm⁻³\n      m(Zn) added = 1.00 g  (Zn is in excess — CuSO₄ is limiting)\n      T_initial = 21.5°C, T_max = 34.2°C (from extrapolation)\n\n─────────────────────────────────────────\nStep 1 — ΔT = 34.2 − 21.5 = 12.7 K\n\nStep 2 — m(solution) = 25.0 × 1 = 25.0 g\n          (assume density = 1 g cm⁻³; ignore mass of solid added)\n\nStep 3 — q = mcΔT = 25.0 × 4.18 × 12.7 = 1327 J\n\nStep 4 — n(CuSO₄) = 0.200 × (25.0 ÷ 1000) = 5.00 × 10⁻³ mol\n          (CuSO₄ is the limiting reagent — mole ratio 1:1 with Zn)\n\nStep 5 — ΔH = −q ÷ n = −1327 ÷ 5.00 × 10⁻³\n             = −265 400 J mol⁻¹\n             = −265 kJ mol⁻¹  (3 s.f.)\n\n∴ ΔH = −265 kJ mol⁻¹  (exothermic)'
    },
    terms: ['Enthalpy change', 'Calorimetry']
  },
  // ── SOURCES OF ERROR ──────────────────────────────────────────────────
  {
    id: 'h-errors',
    type: 'heading',
    data: {
      text: 'Sources of Error and Improvements',
      level: 2
    },
    terms: []
  }, {
    id: 'table-errors',
    type: 'comparisonTable',
    data: {
      caption: 'Core Practical 2 — sources of error, effect and improvement',
      headers: ['Source of error', 'Effect on ΔH', 'Improvement'],
      rows: [['Heat loss through cup and lid', 'q too small → |ΔH| too small', 'Use polystyrene cup with lid; place inside a beaker for extra insulation; extrapolate T-t graph'], ['Heat absorbed by cup/thermometer', 'q too small → |ΔH| too small', 'Use a data logger (low heat capacity probe); account for heat capacity of calorimeter'], ['Zinc powder not weighed precisely', 'n inaccurate → ΔH inaccurate', 'Weigh on a 4 d.p. balance; record mass to ±0.01 g'], ['Not all zinc reacts (impure sample)', 'n(Zn) overestimated', 'Use excess CuSO₄ so Zn is limiting; or use pure Zn foil'], ['Temperature not read at exact maximum', 'ΔT may be underestimated', 'Use a data logger; extrapolate temperature-time graph'], ['Density assumption (1 g cm⁻³)', 'Small error in mass', 'Weigh solution before and after reaction']]
    },
    terms: []
  },
  // ── SAFETY ────────────────────────────────────────────────────────────
  {
    id: 'h-safety',
    type: 'heading',
    data: {
      text: 'Safety',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-safety',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Safety Considerations',
      text: 'CuSO₄(aq): Harmful if swallowed; irritant to skin and eyes. Wear safety goggles and gloves.\nZinc powder: Flammable; keep away from naked flames. Fine dust can irritate the lungs — avoid inhaling.\nGeneral: Wear lab coat and safety goggles throughout. Mop up spills immediately.'
    },
    terms: []
  },
  // ── EVALUATION ────────────────────────────────────────────────────────
  {
    id: 'h-evaluation',
    type: 'heading',
    data: {
      text: 'Evaluation',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-evaluation',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 What Examiners Expect in an Evaluation',
      text: 'When asked to evaluate the experiment, include:\n  1. Named source of error (e.g. heat loss to surroundings)\n  2. Direction of effect (makes |ΔH| too small or too large)\n  3. Named improvement (e.g. use a data logger; extrapolate T-t graph)\n\nAlso consider:\n  • Systematic errors (e.g. always losing heat) → affect accuracy\n  • Random errors (e.g. reading thermometer) → affect precision\n  • Repeating the experiment improves reliability'
    },
    terms: []
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Know the apparatus: polystyrene cup, lid, thermometer, stirring rod',
        checked: false
      }, {
        text: 'Record baseline temperature for 3 minutes before adding reactant',
        checked: false
      }, {
        text: 'Identify the limiting reagent — base n on this',
        checked: false
      }, {
        text: 'Assume density of solution = 1 g cm⁻³; use total volume for mass',
        checked: false
      }, {
        text: 'Extrapolate T-t graph to find true T_max, correcting for heat loss',
        checked: false
      }, {
        text: 'Heat loss to surroundings is always the main source of error — always mention it',
        checked: false
      }, {
        text: 'State direction of effect: heat loss makes |ΔH| smaller (less negative)',
        checked: false
      }, {
        text: 'Suggest specific improvement with reason (not just "be more careful")',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Core Practical 2 measures ΔH of a reaction in solution using a polystyrene cup calorimeter. Record temperature every minute before and after mixing; extrapolate the cooling curve to find T_max. Calculate q = mcΔT and ΔH = −q/n using the limiting reagent. The main source of error is heat loss to surroundings, making |ΔH| smaller than the true value. Improvements include better insulation, data logger, and graph extrapolation.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'h-apparatus',
      prompt: 'List the key pieces of apparatus needed for Core Practical 2. Why is a polystyrene cup used instead of a glass beaker?'
    }, {
      id: 'cue-2',
      blockId: 'h-method',
      prompt: 'Describe the method for Core Practical 2 (Zn + CuSO₄). Why is the temperature recorded for 3 minutes before adding the zinc?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we-cp2',
      prompt: '25 cm³ of 0.200 mol dm⁻³ CuSO₄ reacts with excess Zn; T rises from 21.5 to 34.2°C. Calculate ΔH.'
    }, {
      id: 'cue-4',
      blockId: 'h-errors',
      prompt: 'Give TWO sources of error in Core Practical 2. For each: state the effect on ΔH and suggest an improvement.'
    }, {
      id: 'cue-5',
      blockId: 'callout-evaluation',
      prompt: 'What three things must you include when evaluating a calorimetry experiment in an exam?'
    }],
    summaryText: 'Core Practical 2: polystyrene cup calorimetry, method, calculation, errors, improvements.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Core Practical 2: Measurement of enthalpy change using a polystyrene cup calorimeter',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Core Practical', 'Calorimetry', 'WCH12']
  }]
};