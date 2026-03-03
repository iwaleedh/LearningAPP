/**
 * WCH12 | Topic 6: Energetics | Subtopic 0
 * Enthalpy change and sign convention
 */

export const note_chemistry_1_2_6_0 = {
  blocks: [
  // ── OBJECTIVE ─────────────────────────────────────────────────────────
  {
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define enthalpy change (ΔH) and apply the sign convention for exothermic and endothermic reactions. Understand the system and surroundings. Calculate heat energy using q = mcΔT.'
    }
  },
  // ── ENTHALPY & ENTHALPY CHANGE ────────────────────────────────────────
  {
    id: 'h-enthalpy',
    type: 'heading',
    data: {
      text: 'Enthalpy and Enthalpy Change',
      level: 2
    },
    terms: ['Enthalpy', 'Enthalpy change']
  }, {
    id: 'p-enthalpy',
    type: "list",
    data: {
      style: "unordered",
      items: ["Enthalpy (H) is the heat content of a chemical system at constant pressure.", "We cannot measure absolute enthalpy directly, but we can measure the change in enthalpy (\u0394H) during a reaction.", "The enthalpy change is the heat energy transferred to or from the surroundings at constant pressure."]
    },
    terms: ['Enthalpy', 'Enthalpy change']
  }, {
    id: 'callout-system',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 System vs Surroundings',
      text: 'System — the reacting chemicals (reactants and products)\nSurroundings — everything else: the solution, container, air, thermometer\n\nDuring a reaction, energy is transferred between the system and surroundings.\nΔH is always measured from the SYSTEM\'s perspective.'
    },
    terms: ['Enthalpy change']
  },
  // ── SIGN CONVENTION ───────────────────────────────────────────────────
  {
    id: 'h-sign',
    type: 'heading',
    data: {
      text: 'Sign Convention for ΔH',
      level: 2
    },
    terms: ['Exothermic', 'Endothermic']
  }, {
    id: 'table-sign',
    type: 'comparisonTable',
    data: {
      caption: 'Sign convention — always from the system\'s perspective',
      headers: ['Type', 'ΔH sign', 'Energy transfer', 'Temperature change', 'Example'],
      rows: [['Exothermic', 'Negative (−)', 'System → Surroundings', 'Surroundings get HOTTER', 'Combustion, neutralisation, respiration'], ['Endothermic', 'Positive (+)', 'Surroundings → System', 'Surroundings get COLDER', 'Thermal decomposition, dissolving NH₄NO₃']]
    },
    terms: ['Exothermic', 'Endothermic']
  }, {
    id: 'callout-sign-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Memory Aid — Sign Convention',
      text: 'Exothermic: EXits heat → surroundings warm up → ΔH is NEGATIVE\nEndothermic: ENters heat (absorbs from surroundings) → surroundings cool → ΔH is POSITIVE\n\nThink of the SYSTEM losing energy (−) or gaining energy (+).'
    },
    terms: ['Exothermic', 'Endothermic']
  }, {
    id: 'callout-sign-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Common Mistake — Sign of ΔH',
      text: 'Students often confuse the temperature change with the sign of ΔH.\n\nIn an EXOTHERMIC reaction the surroundings get HOTTER — but ΔH is NEGATIVE (the system loses energy).\nIn an ENDOTHERMIC reaction the surroundings get COLDER — but ΔH is POSITIVE (the system gains energy).\n\nAlways think about the SYSTEM, not the thermometer reading.'
    },
    terms: ['Exothermic', 'Endothermic']
  },
  // ── SVG: EXOTHERMIC vs ENDOTHERMIC ───────────────────────────────────
  {
    id: 'svg-sign',
    type: 'svg',
    data: {
      caption: 'Energy level diagrams showing exothermic (left) and endothermic (right) reactions',
      svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exothermic and endothermic energy diagrams">
  <!-- LEFT: Exothermic -->
  <text x="130" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Exothermic (ΔH &lt; 0)</text>
  <!-- Reactants level -->
  <line x1="30" y1="50" x2="120" y2="50" stroke="#374151" stroke-width="2"/>
  <text x="75" y="44" text-anchor="middle" font-size="10" fill="#374151">Reactants</text>
  <!-- Products level (lower) -->
  <line x1="140" y1="130" x2="230" y2="130" stroke="#374151" stroke-width="2"/>
  <text x="185" y="148" text-anchor="middle" font-size="10" fill="#374151">Products</text>
  <!-- ΔH arrow (downward, red) -->
  <defs>
    <marker id="arr-down" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
    <marker id="arr-up" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,8 L8,4 L0,0 Z" fill="#16a34a"/>
    </marker>
  </defs>
  <line x1="120" y1="50" x2="120" y2="126" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr-down)"/>
  <text x="126" y="92" font-size="11" font-weight="bold" fill="#dc2626">ΔH = −ve</text>
  <!-- Reaction coordinate axis -->
  <line x1="20" y1="170" x2="240" y2="170" stroke="#9ca3af" stroke-width="1.5"/>
  <text x="130" y="185" text-anchor="middle" font-size="9" fill="#6b7280">Reaction coordinate →</text>
  <!-- Curve through transition state -->
  <path d="M75,50 Q130,20 185,130" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- DIVIDER -->
  <line x1="265" y1="10" x2="265" y2="175" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- RIGHT: Endothermic -->
  <text x="390" y="18" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Endothermic (ΔH &gt; 0)</text>
  <!-- Reactants level (lower) -->
  <line x1="280" y1="130" x2="370" y2="130" stroke="#374151" stroke-width="2"/>
  <text x="325" y="148" text-anchor="middle" font-size="10" fill="#374151">Reactants</text>
  <!-- Products level (higher) -->
  <line x1="390" y1="50" x2="480" y2="50" stroke="#374151" stroke-width="2"/>
  <text x="435" y="44" text-anchor="middle" font-size="10" fill="#374151">Products</text>
  <!-- ΔH arrow (upward, green) -->
  <line x1="370" y1="128" x2="370" y2="54" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr-up)"/>
  <text x="376" y="92" font-size="11" font-weight="bold" fill="#16a34a">ΔH = +ve</text>
  <!-- Reaction coordinate axis -->
  <line x1="270" y1="170" x2="490" y2="170" stroke="#9ca3af" stroke-width="1.5"/>
  <text x="380" y="185" text-anchor="middle" font-size="9" fill="#6b7280">Reaction coordinate →</text>
  <!-- Curve -->
  <path d="M325,130 Q380,160 435,50" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,2"/>
</svg>`
    },
    terms: ['Exothermic', 'Endothermic', 'Enthalpy change']
  },
  // ── HEAT ENERGY CALCULATION ───────────────────────────────────────────
  {
    id: 'h-qmcdt',
    type: 'heading',
    data: {
      text: 'Calculating Heat Energy: q = mcΔT',
      level: 2
    },
    terms: ['Specific heat capacity']
  }, {
    id: 'p-qmcdt',
    type: "list",
    data: {
      style: "unordered",
      items: ["In calorimetry experiments, the heat energy transferred to or from the surroundings (usually water or a solution) is calculated using the equation q = mc\u0394T.", "This assumes all heat is absorbed by the solution and none is lost to the environment."]
    },
    terms: ['Specific heat capacity']
  }, {
    id: 'eq-qmcdt',
    type: 'equation',
    data: {
      html: 'q = m c ΔT',
      caption: 'q = heat energy (J) | m = mass of solution (g) | c = specific heat capacity (J g⁻¹ K⁻¹) | ΔT = temperature change (K or °C)'
    }
  }, {
    id: 'callout-c-water',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Specific Heat Capacity of Water',
      text: 'c(water) = 4.18 J g⁻¹ K⁻¹\n\nThis value is given in the Edexcel data booklet.\nFor dilute aqueous solutions, assume c = 4.18 J g⁻¹ K⁻¹ (same as water).\nFor mass, assume density of solution = 1 g cm⁻³ (so 25 cm³ = 25 g).'
    },
    terms: ['Specific heat capacity']
  }, {
    id: 'callout-we-qmcdt',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Calculating Heat Energy',
      text: '50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH.\nThe temperature rises from 21.5°C to 27.9°C.\nCalculate the heat energy released.\n\n─────────────────────────────────────────\nm = 50.0 + 50.0 = 100.0 g  (assume density = 1 g cm⁻³)\nc = 4.18 J g⁻¹ K⁻¹\nΔT = 27.9 − 21.5 = 6.4°C = 6.4 K\n\nq = mcΔT = 100.0 × 4.18 × 6.4\n  = 2675 J\n  = 2.68 kJ  (3 s.f.)\n\n∴ Heat energy released = 2.68 kJ'
    },
    terms: ['Specific heat capacity', 'Enthalpy change']
  },
  // ── CONVERTING q TO ΔH ────────────────────────────────────────────────
  {
    id: 'h-convert',
    type: 'heading',
    data: {
      text: 'Converting q to ΔH (per mole)',
      level: 3
    },
    terms: ['Enthalpy change']
  }, {
    id: 'p-convert',
    type: "list",
    data: {
      style: "unordered",
      items: ["q gives the heat transferred for the quantities used in the experiment.", "Enthalpy change (\u0394H) is always quoted per mole of a specified substance.", "To find \u0394H, divide q by the number of moles used \u2014 and apply the correct sign."]
    },
    terms: ['Enthalpy change']
  }, {
    id: 'eq-deltaH',
    type: 'equation',
    data: {
      html: 'ΔH = <span class="nb-frac"><span class="nb-num">−q</span><span class="nb-den">n</span></span>   (kJ mol<sup>−1</sup>)',
      caption: 'Negative sign: exothermic reaction releases heat to surroundings, so system loses energy (ΔH < 0). Convert q from J to kJ by ÷1000.'
    }
  }, {
    id: 'callout-we-deltaH',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Finding ΔH per mole',
      text: 'Using the previous example (q = 2675 J):\n\nn(HCl) = c × V = 1.00 × (50.0 ÷ 1000) = 0.0500 mol\n\nΔH = −q ÷ n = −2675 ÷ 0.0500\n   = −53 500 J mol⁻¹\n   = −53.5 kJ mol⁻¹\n\n∴ ΔH = −53.5 kJ mol⁻¹  (negative → exothermic)\n\nNote: the literature value for neutralisation is −57.1 kJ mol⁻¹\nDifference is due to heat loss to the surroundings.'
    },
    terms: ['Enthalpy change']
  }, {
    id: 'callout-tip-sign',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Applying the Sign',
      text: 'If the temperature RISES → surroundings gained heat → reaction is exothermic → ΔH is NEGATIVE\nIf the temperature FALLS → surroundings lost heat → reaction is endothermic → ΔH is POSITIVE\n\nIn the formula ΔH = −q/n, the minus sign automatically applies the correct sign:\n  • Temperature rises → ΔT positive → q positive → −q/n = NEGATIVE ΔH ✓\n  • Temperature falls → ΔT negative → q negative → −q/n = POSITIVE ΔH ✓'
    },
    terms: ['Exothermic', 'Endothermic']
  },
  // ── UNITS ─────────────────────────────────────────────────────────────
  {
    id: 'table-units',
    type: 'comparisonTable',
    data: {
      caption: 'Key quantities and units in enthalpy calculations',
      headers: ['Quantity', 'Symbol', 'Unit', 'Notes'],
      rows: [['Heat energy', 'q', 'J or kJ', 'Divide by 1000 to convert J → kJ'], ['Mass', 'm', 'g', 'Use g, not kg, when c = 4.18 J g⁻¹ K⁻¹'], ['Specific heat capacity', 'c', 'J g⁻¹ K⁻¹', '4.18 for water/dilute solutions'], ['Temperature change', 'ΔT', 'K (= °C change)', 'ΔT in K = ΔT in °C'], ['Enthalpy change', 'ΔH', 'kJ mol⁻¹', 'Always per mole of specified substance'], ['Moles', 'n', 'mol', 'Of the limiting or specified reactant']]
    },
    terms: ['Enthalpy change', 'Specific heat capacity']
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
        text: 'Exothermic: ΔH is negative; surroundings warm up',
        checked: false
      }, {
        text: 'Endothermic: ΔH is positive; surroundings cool down',
        checked: false
      }, {
        text: 'q = mcΔT — mass in g, c = 4.18 J g⁻¹ K⁻¹ for aqueous solutions',
        checked: false
      }, {
        text: 'ΔH = −q ÷ n — divide by moles, apply negative sign, convert J → kJ',
        checked: false
      }, {
        text: 'Always specify which substance the ΔH is per mole of',
        checked: false
      }, {
        text: 'Assume density of solution = 1 g cm⁻³ unless told otherwise',
        checked: false
      }]
    },
    terms: []
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Enthalpy change (ΔH) measures heat transferred at constant pressure from the system\'s perspective. Exothermic reactions release energy to surroundings (ΔH < 0, temperature rises). Endothermic reactions absorb energy from surroundings (ΔH > 0, temperature falls). Heat energy is calculated using q = mcΔT; enthalpy change per mole is ΔH = −q/n in kJ mol⁻¹.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'h-sign',
      prompt: 'What is the sign of ΔH for an exothermic reaction? What happens to the temperature of the surroundings?'
    }, {
      id: 'cue-2',
      blockId: 'h-sign',
      prompt: 'What is the sign of ΔH for an endothermic reaction? Give one example.'
    }, {
      id: 'cue-3',
      blockId: 'eq-qmcdt',
      prompt: 'State the equation for heat energy. What does each symbol represent and what are the units?'
    }, {
      id: 'cue-4',
      blockId: 'callout-c-water',
      prompt: 'What is the specific heat capacity of water? What assumptions do we make about aqueous solutions in calorimetry?'
    }, {
      id: 'cue-5',
      blockId: 'eq-deltaH',
      prompt: 'How do you convert q (heat energy) to ΔH (kJ mol⁻¹)? Why is there a negative sign?'
    }, {
      id: 'cue-6',
      blockId: 'callout-we-deltaH',
      prompt: '50 cm³ of 1.00 mol dm⁻³ HCl + 50 cm³ NaOH, temperature rises 6.4°C. Calculate q and ΔH per mole.'
    }],
    summaryText: 'Enthalpy change, sign convention, q = mcΔT, ΔH = −q/n.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — enthalpy changes, exothermic and endothermic reactions, q = mcΔT',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Enthalpy', 'WCH12']
  }]
};