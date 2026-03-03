/**
 * WCH12 | Topic 6: Energetics | Subtopic 2
 * Standard enthalpy definitions
 */

export const note_chemistry_1_2_6_2 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'State and apply the standard definitions of: enthalpy of combustion, enthalpy of formation, enthalpy of neutralisation, and enthalpy of atomisation. Understand standard conditions (298 K, 100 kPa) and the standard state of substances.'
    }
  },
  // ── STANDARD CONDITIONS ───────────────────────────────────────────────
  {
    id: 'h-standard',
    type: 'heading',
    data: {
      text: 'Standard Conditions',
      level: 2
    },
    terms: ['Standard conditions']
  }, {
    id: 'p-standard',
    type: "list",
    data: {
      style: "unordered",
      items: ["Standard enthalpy changes are measured under standard conditions.", "The standard symbol is \u2296 (or \xB0).", "All standard enthalpy values are quoted per mole of a specified substance."]
    },
    terms: ['Standard conditions']
  }, {
    id: 'callout-standard-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Standard Conditions',
      text: 'Temperature: 298 K (25°C)\nPressure: 100 kPa (1 bar)\nConcentration: 1 mol dm⁻³ (for solutions)\nSubstances in their standard states (most stable physical form at 298 K and 100 kPa)\n\nExamples of standard states:\n  Carbon → graphite (not diamond)\n  Bromine → liquid Br₂(l)\n  Oxygen → O₂(g)\n  Sodium → Na(s)'
    },
    terms: ['Standard conditions']
  }, {
    id: 'callout-standard-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Standard Conditions ≠ STP',
      text: 'Standard conditions for thermodynamics = 298 K and 100 kPa.\nThis is DIFFERENT from standard temperature and pressure (STP) used in gas calculations = 273 K and 100 kPa.\nDo not confuse the two.'
    },
    terms: ['Standard conditions']
  },
  // ── ENTHALPY OF COMBUSTION ────────────────────────────────────────────
  {
    id: 'h-combustion',
    type: 'heading',
    data: {
      text: 'Standard Enthalpy of Combustion (ΔH°꜀)',
      level: 2
    },
    terms: ['Enthalpy of combustion']
  }, {
    id: 'callout-combustion-def',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Definition — Standard Enthalpy of Combustion',
      text: 'The standard enthalpy of combustion (ΔH°꜀) is the enthalpy change when ONE MOLE of a substance is completely burned in excess oxygen under standard conditions, with all reactants and products in their standard states.\n\nΔH°꜀ is always NEGATIVE (combustion is always exothermic).'
    },
    terms: ['Enthalpy of combustion']
  }, {
    id: 'callout-combustion-example',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Example — Combustion of Methane',
      text: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)     ΔH°꜀ = −890 kJ mol⁻¹\n\nKey points:\n• ONE mole of CH₄ is burned (the substance being combusted)\n• Excess O₂ ensures COMPLETE combustion\n• H₂O must be liquid — not gas (standard state at 298 K)\n• CO₂ must be the only carbon product (not CO)'
    },
    terms: ['Enthalpy of combustion']
  },
  // ── ENTHALPY OF FORMATION ─────────────────────────────────────────────
  {
    id: 'h-formation',
    type: 'heading',
    data: {
      text: 'Standard Enthalpy of Formation (ΔH°f)',
      level: 2
    },
    terms: ['Enthalpy of formation']
  }, {
    id: 'callout-formation-def',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Definition — Standard Enthalpy of Formation',
      text: 'The standard enthalpy of formation (ΔH°f) is the enthalpy change when ONE MOLE of a compound is formed from its constituent elements in their standard states under standard conditions.\n\nBy definition: ΔH°f of any element in its standard state = 0 kJ mol⁻¹'
    },
    terms: ['Enthalpy of formation']
  }, {
    id: 'callout-formation-example',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Example — Formation of Water',
      text: 'H₂(g) + ½O₂(g) → H₂O(l)     ΔH°f = −286 kJ mol⁻¹\n\nKey points:\n• ONE mole of PRODUCT (H₂O) is formed\n• Elements in standard states: H₂(g), O₂(g)\n• Fractions are allowed in equations for formation (½O₂)\n• ΔH°f[H₂(g)] = 0   and   ΔH°f[O₂(g)] = 0  (elements in standard state)\n\nFormation of CO₂:\n  C(graphite) + O₂(g) → CO₂(g)     ΔH°f = −394 kJ mol⁻¹\n  Note: graphite, NOT diamond, is the standard state of carbon.'
    },
    terms: ['Enthalpy of formation']
  },
  // ── ENTHALPY OF NEUTRALISATION ────────────────────────────────────────
  {
    id: 'h-neutralisation',
    type: 'heading',
    data: {
      text: 'Standard Enthalpy of Neutralisation (ΔH°n)',
      level: 2
    },
    terms: ['Enthalpy of neutralisation']
  }, {
    id: 'callout-neutralisation-def',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Definition — Standard Enthalpy of Neutralisation',
      text: 'The standard enthalpy of neutralisation (ΔH°n) is the enthalpy change when ONE MOLE of water is formed by the reaction of an acid with an alkali under standard conditions.\n\nFor strong acid + strong alkali:\n  H⁺(aq) + OH⁻(aq) → H₂O(l)     ΔH°n ≈ −57.1 kJ mol⁻¹\n\nΔH°n is always NEGATIVE (neutralisation is always exothermic).'
    },
    terms: ['Enthalpy of neutralisation']
  }, {
    id: 'callout-neutralisation-note',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Strong vs Weak Acid Neutralisation',
      text: 'Strong acid + strong alkali: ΔH°n ≈ −57.1 kJ mol⁻¹\n  (e.g. HCl + NaOH → NaCl + H₂O)\n\nWeak acid or weak alkali: |ΔH°n| < 57.1 kJ mol⁻¹\n  Reason: energy is needed to fully dissociate the weak acid/alkali, so less energy is released overall.\n  (e.g. CH₃COOH + NaOH → ΔH°n ≈ −56.1 kJ mol⁻¹)'
    },
    terms: ['Enthalpy of neutralisation']
  },
  // ── ENTHALPY OF ATOMISATION ───────────────────────────────────────────
  {
    id: 'h-atomisation',
    type: 'heading',
    data: {
      text: 'Standard Enthalpy of Atomisation (ΔH°at)',
      level: 2
    },
    terms: ['Enthalpy of atomisation']
  }, {
    id: 'callout-atomisation-def',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Definition — Standard Enthalpy of Atomisation',
      text: 'The standard enthalpy of atomisation (ΔH°at) is the enthalpy change when ONE MOLE of gaseous atoms is formed from an element in its standard state under standard conditions.\n\nΔH°at is always POSITIVE (energy is required to break bonds and form gaseous atoms).\n\nExamples:\n  Na(s) → Na(g)              ΔH°at = +107 kJ mol⁻¹\n  ½Cl₂(g) → Cl(g)            ΔH°at = +122 kJ mol⁻¹\n  C(graphite) → C(g)          ΔH°at = +715 kJ mol⁻¹'
    },
    terms: ['Enthalpy of atomisation']
  }, {
    id: 'callout-atomisation-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Atomisation — ONE mole of ATOMS',
      text: 'The definition specifies ONE mole of GASEOUS ATOMS — not one mole of the element.\n\nFor diatomic elements (H₂, Cl₂, O₂ etc.) this means starting with ½ mole of the diatomic molecule:\n  ½H₂(g) → H(g)     ΔH°at = +218 kJ mol⁻¹\n  (NOT: H₂(g) → 2H(g) — that gives 2 mol of atoms)\n\nDo not confuse ΔH°at with bond dissociation enthalpy (though they are related for diatomic elements).'
    },
    terms: ['Enthalpy of atomisation']
  },
  // ── COMPARISON TABLE ──────────────────────────────────────────────────
  {
    id: 'h-summary-table',
    type: 'heading',
    data: {
      text: 'Comparison of Standard Enthalpy Definitions',
      level: 2
    },
    terms: []
  }, {
    id: 'table-definitions',
    type: 'comparisonTable',
    data: {
      caption: 'Standard enthalpy definitions — key comparison',
      headers: ['Type', 'Symbol', 'Definition (ONE mole of...)', 'Sign', 'Standard state of elements?'],
      rows: [['Combustion', 'ΔH°꜀', 'Substance burned in excess O₂', 'Always −ve', 'Yes (reactants and products)'], ['Formation', 'ΔH°f', 'Compound formed from elements', '+ or − ve', 'Yes (elements → compound)'], ['Neutralisation', 'ΔH°n', 'Water formed (acid + alkali)', 'Always −ve', 'N/A (aqueous)'], ['Atomisation', 'ΔH°at', 'Gaseous atoms formed from element', 'Always +ve', 'Yes (element → atoms)']]
    },
    terms: []
  },
  // ── WRITING EQUATIONS ─────────────────────────────────────────────────
  {
    id: 'h-equations',
    type: 'heading',
    data: {
      text: 'Writing Thermochemical Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-equations-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Thermochemical Equations',
      text: 'Always include:\n  ✓ State symbols (s), (l), (g), (aq) — examiners will deduct marks if missing\n  ✓ Fractions are allowed (e.g. ½O₂) to ensure exactly 1 mole of the specified substance\n  ✓ The value and sign of ΔH with units kJ mol⁻¹\n\nFor combustion: products must be CO₂(g) and H₂O(l) — NOT H₂O(g)\nFor formation: elements must be in their standard states (e.g. C as graphite)\nFor neutralisation: state symbols must show aqueous solutions: H⁺(aq) + OH⁻(aq) → H₂O(l)'
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
        text: 'Standard conditions: 298 K, 100 kPa, substances in standard states',
        checked: false
      }, {
        text: 'ΔH°꜀: 1 mol substance burned in excess O₂; always negative; H₂O(l) not H₂O(g)',
        checked: false
      }, {
        text: 'ΔH°f: 1 mol compound formed from elements in standard states; elements have ΔH°f = 0',
        checked: false
      }, {
        text: 'ΔH°n: 1 mol water formed from acid + alkali; always negative',
        checked: false
      }, {
        text: 'ΔH°at: 1 mol gaseous atoms formed from element; always positive; use ½ mol for diatomics',
        checked: false
      }, {
        text: 'Always include state symbols in thermochemical equations',
        checked: false
      }, {
        text: 'Fractions in equations are acceptable for standard enthalpy equations',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Standard enthalpy changes are measured at 298 K and 100 kPa with substances in standard states. ΔH°꜀ (combustion, always −ve): 1 mol substance burned in excess O₂. ΔH°f (formation, ±): 1 mol compound from elements. ΔH°n (neutralisation, always −ve): 1 mol H₂O formed from acid + alkali. ΔH°at (atomisation, always +ve): 1 mol gaseous atoms from element. State symbols are mandatory in all thermochemical equations.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-standard-key',
      prompt: 'State the standard conditions used for thermochemical measurements.'
    }, {
      id: 'cue-2',
      blockId: 'callout-combustion-def',
      prompt: 'Define standard enthalpy of combustion. What sign does it always have and why?'
    }, {
      id: 'cue-3',
      blockId: 'callout-formation-def',
      prompt: 'Define standard enthalpy of formation. What is the ΔH°f of an element in its standard state?'
    }, {
      id: 'cue-4',
      blockId: 'callout-neutralisation-def',
      prompt: 'Define standard enthalpy of neutralisation. Why is |ΔH°n| smaller for a weak acid than a strong acid?'
    }, {
      id: 'cue-5',
      blockId: 'callout-atomisation-def',
      prompt: 'Define standard enthalpy of atomisation. Why is it always positive? Write the equation for the atomisation of chlorine.'
    }, {
      id: 'cue-6',
      blockId: 'callout-atomisation-warning',
      prompt: 'Write the thermochemical equation for the atomisation of H₂. Why is ½H₂ used rather than H₂?'
    }],
    summaryText: 'Standard conditions, ΔH°꜀ combustion, ΔH°f formation, ΔH°n neutralisation, ΔH°at atomisation.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — standard enthalpy definitions, standard conditions, thermochemical equations',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Standard enthalpy', 'WCH12']
  }]
};