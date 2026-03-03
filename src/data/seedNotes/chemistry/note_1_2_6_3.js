/**
 * WCH12 | Topic 6: Energetics | Subtopic 3
 * Experimental enthalpy calculations
 */

export const note_chemistry_1_2_6_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Calculate enthalpy changes from experimental data using q = mcΔT and ΔH = −q/n. Apply corrections for heat loss, incomplete combustion, and density assumptions. Evaluate sources of error in calorimetry experiments.'
    }
  },
  // ── TYPES OF CALORIMETRY ──────────────────────────────────────────────
  {
    id: 'h-types',
    type: 'heading',
    data: {
      text: 'Types of Calorimetry Experiment',
      level: 2
    },
    terms: ['Calorimetry']
  }, {
    id: 'table-types',
    type: 'comparisonTable',
    data: {
      caption: 'Common calorimetry experiments at A-level',
      headers: ['Experiment type', 'What is heated', 'Typical apparatus', 'Example'],
      rows: [['Solution calorimetry', 'The reaction solution in a cup/beaker', 'Polystyrene cup, thermometer, lid', 'Neutralisation, displacement, dissolving'], ['Combustion calorimetry', 'Water in a calorimeter above a burner', 'Spirit lamp, copper can, thermometer', 'Enthalpy of combustion of alcohols'], ['Bomb calorimetry', 'Water surrounding a sealed vessel', 'Bomb calorimeter (not at A-level)', 'Precise combustion values']]
    },
    terms: ['Calorimetry']
  },
  // ── SOLUTION CALORIMETRY ──────────────────────────────────────────────
  {
    id: 'h-solution',
    type: 'heading',
    data: {
      text: 'Solution Calorimetry — Full Method',
      level: 2
    },
    terms: ['Calorimetry']
  }, {
    id: 'p-solution',
    type: "list",
    data: {
      style: "unordered",
      items: ["In solution calorimetry, a reaction occurs in an insulated container (polystyrene cup).", "The heat released or absorbed changes the temperature of the solution.", "We measure \u0394T and use q = mc\u0394T to find the heat energy, then convert to \u0394H per mole."]
    },
    terms: ['Calorimetry']
  }, {
    id: 'callout-solution-method',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 5-Step Calculation Method (Solution Calorimetry)',
      text: 'Step 1 — Find ΔT: ΔT = T_final − T_initial\nStep 2 — Find mass of solution: m = total volume (cm³) × density\n          Assume density = 1 g cm⁻³ for dilute solutions\nStep 3 — Calculate heat energy: q = mcΔT  (use c = 4.18 J g⁻¹ K⁻¹)\nStep 4 — Find moles of limiting reagent: n = c × V  or  n = m ÷ M\nStep 5 — Calculate ΔH per mole: ΔH = −q ÷ n  (convert J → kJ by ÷ 1000)'
    },
    terms: ['Calorimetry', 'Enthalpy change']
  }, {
    id: 'callout-we-solution',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Enthalpy of Neutralisation',
      text: '50.0 cm³ of 2.00 mol dm⁻³ HCl is added to 50.0 cm³ of 2.00 mol dm⁻³ NaOH in a polystyrene cup.\nThe temperature rises from 19.5°C to 32.3°C.\nCalculate the enthalpy of neutralisation.\n\n─────────────────────────────────────────\nStep 1 — ΔT = 32.3 − 19.5 = 12.8°C = 12.8 K\n\nStep 2 — m = (50.0 + 50.0) × 1 = 100.0 g\n\nStep 3 — q = mcΔT = 100.0 × 4.18 × 12.8 = 5350 J\n\nStep 4 — n(HCl) = 2.00 × (50.0 ÷ 1000) = 0.100 mol\n          (HCl : H₂O = 1 : 1, so n(H₂O) = 0.100 mol)\n\nStep 5 — ΔH = −5350 ÷ 0.100 = −53 500 J mol⁻¹ = −53.5 kJ mol⁻¹\n\n∴ ΔH°n = −53.5 kJ mol⁻¹\n   (Literature value: −57.1 kJ mol⁻¹ — lower due to heat loss)'
    },
    terms: ['Enthalpy of neutralisation', 'Calorimetry']
  },
  // ── COMBUSTION CALORIMETRY ────────────────────────────────────────────
  {
    id: 'h-combustion',
    type: 'heading',
    data: {
      text: 'Combustion Calorimetry — Spirit Lamp Method',
      level: 2
    },
    terms: ['Enthalpy of combustion', 'Calorimetry']
  }, {
    id: 'p-combustion',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "an alcohol), a spirit lamp burns the fuel beneath a known mass of water in a copper calorimeter.", "The temperature rise of the water and the mass of fuel burned are recorded."]
    },
    terms: ['Enthalpy of combustion']
  }, {
    id: 'svg-combustion',
    type: 'svg',
    data: {
      caption: 'Spirit lamp combustion calorimetry setup',
      svg: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Combustion calorimetry apparatus">
  <!-- Copper can -->
  <rect x="110" y="60" width="120" height="80" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="170" y="100" text-anchor="middle" font-size="10" fill="#92400e">Water</text>
  <text x="170" y="113" text-anchor="middle" font-size="9" fill="#92400e">mass = m g</text>
  <!-- Can label -->
  <text x="170" y="52" text-anchor="middle" font-size="9" fill="#d97706">Copper calorimeter</text>

  <!-- Thermometer -->
  <rect x="163" y="25" width="8" height="50" rx="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
  <ellipse cx="167" cy="75" rx="6" ry="6" fill="#dc2626"/>
  <text x="183" y="35" font-size="9" fill="#374151">Thermometer</text>

  <!-- Spirit lamp -->
  <rect x="140" y="158" width="60" height="30" rx="4" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="162" y="148" width="16" height="14" rx="2" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <!-- Flame -->
  <ellipse cx="170" cy="145" rx="8" ry="12" fill="#f97316" opacity="0.8"/>
  <ellipse cx="170" cy="143" rx="4" ry="7" fill="#fbbf24" opacity="0.9"/>
  <text x="170" y="185" text-anchor="middle" font-size="9" fill="#92400e">Spirit lamp</text>
  <text x="170" y="196" text-anchor="middle" font-size="8" fill="#92400e">(fuel = alcohol)</text>

  <!-- Draught shield suggestion -->
  <rect x="95" y="55" width="150" height="140" rx="4" fill="none" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="240" y="90" font-size="8" fill="#6b7280">draught</text>
  <text x="240" y="100" font-size="8" fill="#6b7280">shield</text>

  <!-- Labels left -->
  <text x="10" y="100" font-size="9" fill="#374151">ΔT measured</text>
  <line x1="60" y1="98" x2="108" y2="98" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="10" y="168" font-size="9" fill="#374151">Δm(fuel)</text>
  <text x="10" y="179" font-size="9" fill="#374151">weighed</text>
  <line x1="58" y1="172" x2="138" y2="172" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`
    },
    terms: ['Enthalpy of combustion', 'Calorimetry']
  }, {
    id: 'callout-combustion-method',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 5-Step Method (Combustion Calorimetry)',
      text: 'Step 1 — ΔT = T_final − T_initial  (temperature rise of water)\nStep 2 — m = mass of water in calorimeter (g)\nStep 3 — q = mcΔT  (c = 4.18 J g⁻¹ K⁻¹)\nStep 4 — Find moles of fuel burned: Δm(fuel) in g; M from formula\n          n(fuel) = Δm ÷ M\nStep 5 — ΔH°꜀ = −q ÷ n  (in J mol⁻¹, then ÷ 1000 for kJ mol⁻¹)'
    },
    terms: ['Enthalpy of combustion']
  }, {
    id: 'callout-we-combustion',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Enthalpy of Combustion of Ethanol',
      text: '200 g of water was heated using a spirit lamp containing ethanol (C₂H₅OH, M = 46 g mol⁻¹).\nMass of lamp before: 183.62 g   After: 182.94 g\nTemperature of water before: 18.5°C   After: 32.7°C\n\n─────────────────────────────────────────\nStep 1 — ΔT = 32.7 − 18.5 = 14.2 K\n\nStep 2 — m(water) = 200 g\n\nStep 3 — q = 200 × 4.18 × 14.2 = 11 871 J\n\nStep 4 — Δm(fuel) = 183.62 − 182.94 = 0.68 g\n          n(ethanol) = 0.68 ÷ 46 = 0.01478 mol\n\nStep 5 — ΔH°꜀ = −11 871 ÷ 0.01478 = −803 400 J mol⁻¹\n                             = −803 kJ mol⁻¹  (3 s.f.)\n\n∴ ΔH°꜀(ethanol) = −803 kJ mol⁻¹\n   (Literature value: −1371 kJ mol⁻¹ — experimental value is much lower due to heat losses)'
    },
    terms: ['Enthalpy of combustion']
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
      caption: 'Sources of error in calorimetry and how to reduce them',
      headers: ['Source of error', 'Effect on result', 'Improvement'],
      rows: [['Heat loss to surroundings', 'q too small → ΔH too small (less negative)', 'Insulate cup/calorimeter; use a draught shield; extrapolate temperature-time graph'], ['Incomplete combustion', 'q too small → ΔH too small', 'Ensure sufficient oxygen supply; use a cleaner flame; check for soot'], ['Evaporation of fuel before burning', 'Mass loss overstated → n too large → ΔH too small', 'Cap the spirit lamp quickly; weigh immediately before and after'], ['Specific heat capacity assumption', 'Small error in q', 'Use actual c of solution if known; c ≈ 4.18 for dilute solutions'], ['Density assumption (1 g cm⁻³)', 'Small error in m', 'Weigh the solution directly rather than assuming from volume'], ['Thermometer not stirred', 'ΔT not representative', 'Stir continuously; use a data logger']]
    },
    terms: []
  }, {
    id: 'callout-errors-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Evaluating Calorimetry',
      text: 'Experimental ΔH values are almost always LESS negative than the literature value.\nThe most common reasons (in order of importance for exam answers):\n  1. Heat loss to surroundings (most significant)\n  2. Incomplete combustion (for combustion experiments)\n  3. Evaporation of fuel before burning (for spirit lamp)\n\nWhen asked "suggest why the experimental value differs from the literature value", always start with heat loss.'
    },
    terms: []
  },
  // ── TEMPERATURE-TIME GRAPH EXTRAPOLATION ─────────────────────────────
  {
    id: 'h-extrapolation',
    type: 'heading',
    data: {
      text: 'Temperature–Time Graph and Extrapolation',
      level: 2
    },
    terms: []
  }, {
    id: 'p-extrapolation',
    type: "list",
    data: {
      style: "unordered",
      items: ["In a more accurate calorimetry experiment, temperature is recorded every minute before and after the reaction.", "The temperature\u2013time graph is extrapolated back to the moment of mixing to find the \"true\" \u0394T that would have occurred with no heat loss to the surroundings."]
    },
    terms: []
  }, {
    id: 'svg-extrapolation',
    type: 'svg',
    data: {
      caption: 'Temperature–time graph with extrapolation to correct for heat loss',
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature-time graph with extrapolation">
  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="170" stroke="#374151" stroke-width="2"/>
  <line x1="50" y1="170" x2="380" y2="170" stroke="#374151" stroke-width="2"/>
  <text x="18" y="100" font-size="10" fill="#374151" transform="rotate(-90,18,100)" text-anchor="middle">Temperature (°C)</text>
  <text x="215" y="190" font-size="10" fill="#374151" text-anchor="middle">Time (min) →</text>

  <!-- Before reaction: flat line -->
  <line x1="55" y1="140" x2="160" y2="140" stroke="#3b82f6" stroke-width="2"/>
  <!-- Mixing point -->
  <circle cx="160" cy="140" r="4" fill="#374151"/>
  <text x="160" y="183" font-size="8" fill="#374151" text-anchor="middle">mixing</text>
  <line x1="160" y1="170" x2="160" y2="145" stroke="#374151" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- After reaction: rise then slow cooling -->
  <path d="M160,140 Q180,55 210,52 Q270,50 370,70" fill="none" stroke="#dc2626" stroke-width="2"/>

  <!-- Extrapolation line (dashed, extends the cooling curve back) -->
  <path d="M160,62 Q200,53 210,52 Q270,50 370,70" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Show extrapolated T_max -->
  <circle cx="160" cy="62" r="4" fill="#dc2626"/>
  <line x1="50" y1="62" x2="160" y2="62" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="44" y="65" font-size="8" fill="#dc2626" text-anchor="end">T_max</text>

  <!-- ΔT arrow -->
  <line x1="380" y1="140" x2="380" y2="66" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="385" y="106" font-size="10" font-weight="bold" fill="#16a34a">ΔT</text>
  <line x1="50" y1="140" x2="380" y2="140" stroke="#6b7280" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- Labels -->
  <text x="90" y="132" font-size="9" fill="#3b82f6">Before mixing</text>
  <text x="240" y="42" font-size="9" fill="#dc2626">After mixing</text>
  <text x="200" y="80" font-size="8" fill="#9ca3af">extrapolated</text>
</svg>`
    },
    terms: []
  }, {
    id: 'callout-extrapolation-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 How to Extrapolate',
      text: '1. Plot temperature vs time\n2. Draw a best-fit line through the cooling section (after the peak)\n3. Extrapolate this line back to the time of mixing\n4. Read off the extrapolated maximum temperature\n5. ΔT = T_extrapolated_max − T_initial\n\nThis corrects for heat loss that occurred during and after the reaction.'
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
        text: 'q = mcΔT — m in g, c = 4.18 J g⁻¹ K⁻¹, ΔT = T_final − T_initial',
        checked: false
      }, {
        text: 'ΔH = −q ÷ n — divide by moles, ÷ 1000 for kJ mol⁻¹',
        checked: false
      }, {
        text: 'Solution calorimetry: m = total volume × density (assume 1 g cm⁻³)',
        checked: false
      }, {
        text: 'Combustion: n = Δm(fuel) ÷ M(fuel)',
        checked: false
      }, {
        text: 'Experimental ΔH is usually less negative than literature — main reason: heat loss',
        checked: false
      }, {
        text: 'Extrapolation of temperature-time graph corrects for heat loss during reaction',
        checked: false
      }, {
        text: 'Apply correct sign: temperature rises → exothermic → ΔH negative',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Experimental enthalpy is calculated using q = mcΔT then ΔH = −q/n. Solution calorimetry measures heat in the solution (polystyrene cup); combustion calorimetry measures heat in water above a spirit lamp. Experimental values are always less negative than literature values — mainly due to heat loss to surroundings. Extrapolation of a temperature–time graph corrects for heat loss.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-solution-method',
      prompt: 'State the 5-step method for calculating enthalpy change from solution calorimetry data.'
    }, {
      id: 'cue-2',
      blockId: 'callout-we-solution',
      prompt: '50 cm³ of 2 mol dm⁻³ HCl + 50 cm³ NaOH; temperature rises from 19.5 to 32.3°C. Calculate ΔH°n.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we-combustion',
      prompt: '200 g water heated by ethanol spirit lamp; 0.68 g ethanol burned; ΔT = 14.2°C. Calculate ΔH°꜀(ethanol).'
    }, {
      id: 'cue-4',
      blockId: 'h-errors',
      prompt: 'Give THREE sources of error in a spirit lamp combustion calorimetry experiment and how to reduce each.'
    }, {
      id: 'cue-5',
      blockId: 'h-extrapolation',
      prompt: 'Why is the temperature–time graph extrapolated? How does this improve the accuracy of ΔH?'
    }],
    summaryText: 'Calorimetry calculations, solution and combustion methods, sources of error, extrapolation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — experimental enthalpy calculations, calorimetry, sources of error',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Calorimetry', 'WCH12']
  }]
};