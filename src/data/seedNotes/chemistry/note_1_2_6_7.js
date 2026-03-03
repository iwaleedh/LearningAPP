/**
 * WCH12 | Topic 6: Energetics | Subtopic 7
 * Bond enthalpy and reactivity
 */

export const note_chemistry_1_2_6_7 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Use bond enthalpy data to explain trends in reactivity of halogens and halogenoalkanes. Relate bond strength to bond length and bond order. Explain why stronger bonds lead to lower reactivity.'
    }
  },
  // ── BOND STRENGTH AND REACTIVITY ──────────────────────────────────────
  {
    id: 'h-reactivity',
    type: 'heading',
    data: {
      text: 'Bond Strength and Reactivity',
      level: 2
    },
    terms: ['Bond enthalpy', 'Reactivity']
  }, {
    id: 'p-reactivity',
    type: "list",
    data: {
      style: "unordered",
      items: ["The strength of a covalent bond is directly related to its bond enthalpy \u2014 the stronger the bond, the higher its bond enthalpy, and the more energy required to break it.", "Stronger bonds are harder to break, so substances with stronger bonds are generally less reactive.", "This principle explains many trends in organic and inorganic chemistry."]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-reactivity-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Bond Strength → Reactivity',
      text: 'Higher bond enthalpy → stronger bond → harder to break → LESS reactive\nLower bond enthalpy → weaker bond → easier to break → MORE reactive\n\nBond strength also relates to:\n  • Bond length: shorter bonds are stronger (higher bond enthalpy)\n  • Bond order: double bonds > single bonds; triple bonds > double bonds'
    },
    terms: ['Bond enthalpy']
  },
  // ── BOND LENGTH AND BOND ORDER ────────────────────────────────────────
  {
    id: 'h-length',
    type: 'heading',
    data: {
      text: 'Bond Length, Bond Order and Bond Enthalpy',
      level: 2
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'table-bond-order',
    type: 'comparisonTable',
    data: {
      caption: 'Relationship between bond order, bond length and bond enthalpy for carbon bonds',
      headers: ['Bond', 'Bond order', 'Bond length (nm)', 'Bond enthalpy (kJ mol⁻¹)', 'Relative strength'],
      rows: [['C–C', '1 (single)', '0.154', '+347', 'Weakest'], ['C=C', '2 (double)', '0.134', '+612', 'Medium'], ['C≡C', '3 (triple)', '0.120', '+838', 'Strongest']]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-length-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Bond Order Trend',
      text: 'As bond order increases:\n  Bond length DECREASES (atoms pulled closer together)\n  Bond enthalpy INCREASES (more electron density between atoms → stronger bond)\n\nTriple > Double > Single bond strength\nTriple < Double < Single bond length'
    },
    terms: ['Bond enthalpy']
  },
  // ── HALOGEN REACTIVITY ────────────────────────────────────────────────
  {
    id: 'h-halogens',
    type: 'heading',
    data: {
      text: 'Reactivity of Halogens — X–X Bond Enthalpies',
      level: 2
    },
    terms: ['Bond enthalpy', 'Halogen']
  }, {
    id: 'p-halogens',
    type: "list",
    data: {
      style: "unordered",
      items: ["The reactivity of the halogens (Group 17) decreases down the group: F\u2082 > Cl\u2082 > Br\u2082 > I\u2082.", "This can be partly explained by the X\u2013X bond enthalpies \u2014 the weaker the X\u2013X bond, the easier it is to break and initiate reactions."]
    },
    terms: ['Bond enthalpy', 'Halogen']
  }, {
    id: 'table-halogens',
    type: 'comparisonTable',
    data: {
      caption: 'X–X bond enthalpies for the halogens (Group 17)',
      headers: ['Halogen', 'Bond', 'Bond enthalpy (kJ mol⁻¹)', 'Bond length (nm)', 'Reactivity'],
      rows: [['Fluorine', 'F–F', '+158', '0.142', 'Most reactive'], ['Chlorine', 'Cl–Cl', '+243', '0.199', 'Very reactive'], ['Bromine', 'Br–Br', '+193', '0.228', 'Moderately reactive'], ['Iodine', 'I–I', '+151', '0.267', 'Least reactive']]
    },
    terms: ['Bond enthalpy', 'Halogen']
  }, {
    id: 'callout-halogens-note',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Note on Fluorine',
      text: 'Fluorine has a surprisingly LOW F–F bond enthalpy (+158 kJ mol⁻¹) — lower than Cl–Cl — yet it is the most reactive halogen.\n\nThis is because fluorine\'s high reactivity is primarily due to the very strong bonds it forms with other elements (e.g. H–F = +568 kJ mol⁻¹), not just because the F–F bond is weak.\n\nThe overall thermodynamics (ΔH of reaction) must be considered, not just the bond being broken.'
    },
    terms: ['Bond enthalpy', 'Halogen']
  },
  // ── C–X BOND ENTHALPIES AND HALOGENOALKANE REACTIVITY ────────────────
  {
    id: 'h-halogenoalkanes',
    type: 'heading',
    data: {
      text: 'C–X Bond Enthalpies and Halogenoalkane Reactivity',
      level: 2
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'p-halogenoalkanes',
    type: "list",
    data: {
      style: "unordered",
      items: ["In halogenoalkanes (R\u2013X), the C\u2013X bond must be broken during nucleophilic substitution reactions.", "The reactivity of halogenoalkanes in these reactions follows the order: R\u2013I > R\u2013Br > R\u2013Cl > R\u2013F.", "This trend is explained by the C\u2013X bond enthalpies."]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'table-cx',
    type: 'comparisonTable',
    data: {
      caption: 'C–X bond enthalpies and halogenoalkane reactivity in nucleophilic substitution',
      headers: ['Bond', 'Bond enthalpy (kJ mol⁻¹)', 'Bond length (nm)', 'Ease of breaking', 'Reactivity in substitution'],
      rows: [['C–F', '+484', '0.138', 'Very hard', 'Least reactive'], ['C–Cl', '+346', '0.177', 'Moderate', 'Moderately reactive'], ['C–Br', '+290', '0.193', 'Easier', 'More reactive'], ['C–I', '+228', '0.214', 'Easiest', 'Most reactive']]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-cx-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Explaining Halogenoalkane Reactivity',
      text: 'Down the group (F → I):\n  Atomic radius increases → bond length increases → bond enthalpy DECREASES\n  Weaker C–X bond → easier to break → more reactive in nucleophilic substitution\n\nC–F bond (484 kJ mol⁻¹) is very strong → fluoroalkanes are very unreactive\nC–I bond (228 kJ mol⁻¹) is weak → iodoalkanes react readily'
    },
    terms: ['Bond enthalpy']
  },
  // ── N–H AND O–H: HYDROGEN BONDING RELEVANCE ──────────────────────────
  {
    id: 'h-nh-oh',
    type: 'heading',
    data: {
      text: 'Bond Enthalpy and Relative Stability',
      level: 2
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'p-stability',
    type: "list",
    data: {
      style: "unordered",
      items: ["Bond enthalpy data can also be used to compare the stability of molecules.", "A molecule with very high bond enthalpies is thermodynamically stable \u2014 a large amount of energy is needed to decompose it.", "For example, N\u2082 has a very strong triple bond (N\u2261N = +945 kJ mol\u207B\xB9), making it very unreactive (hence its use as an inert atmosphere)."]
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'table-stability',
    type: 'comparisonTable',
    data: {
      caption: 'High bond enthalpies — thermodynamically stable molecules',
      headers: ['Molecule', 'Key bond', 'Bond enthalpy (kJ mol⁻¹)', 'Why stable / implication'],
      rows: [['N₂', 'N≡N', '+945', 'Very high energy to break — used as inert gas in industry'], ['HF', 'H–F', '+568', 'Very strong H–F bond — HF(aq) is a weak acid despite being a "hydrogen halide"'], ['CO', 'C≡O', '+1077', 'Strongest bond in simple diatomic molecules'], ['H₂O', 'O–H', '+464', 'Strong O–H bonds — water is stable and requires high energy to decompose']]
    },
    terms: ['Bond enthalpy']
  },
  // ── USING BOND ENTHALPIES TO COMPARE ΔH ──────────────────────────────
  {
    id: 'h-compare',
    type: 'heading',
    data: {
      text: 'Using Bond Enthalpy to Predict Reactivity',
      level: 2
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-we-compare',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Comparing Halogenation of Alkanes',
      text: 'Compare the enthalpy changes for chlorination and bromination of methane:\n  CH₄ + Cl₂ → CH₃Cl + HCl\n  CH₄ + Br₂ → CH₃Br + HBr\n\nBond enthalpies (kJ mol⁻¹): C–H=413, Cl–Cl=243, C–Cl=346, H–Cl=432, Br–Br=193, C–Br=290, H–Br=366\n\n─────────────────────────────────────────\nChlorination:\n  Broken: C–H (413) + Cl–Cl (243) = 656 kJ\n  Formed: C–Cl (346) + H–Cl (432) = 778 kJ\n  ΔH = 656 − 778 = −122 kJ mol⁻¹\n\nBromination:\n  Broken: C–H (413) + Br–Br (193) = 606 kJ\n  Formed: C–Br (290) + H–Br (366) = 656 kJ\n  ΔH = 606 − 656 = −50 kJ mol⁻¹\n\nChlorination is more exothermic (ΔH more negative) → thermodynamically more favourable.\nBromination is less exothermic → less thermodynamically favourable.'
    },
    terms: ['Bond enthalpy']
  }, {
    id: 'callout-reactivity-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Reactivity Questions',
      text: 'When asked to use bond enthalpies to explain reactivity:\n  1. Identify the bond(s) being broken in the rate-determining step\n  2. State the bond enthalpy value(s)\n  3. Explain: "lower bond enthalpy → weaker bond → easier to break → more reactive"\n\nDo NOT just say "the bond is weaker" — always link to the bond enthalpy value and explain the consequence for reactivity.\n\nAlso remember: reactivity depends on both the bonds broken AND formed. A reaction may be fast despite a strong bond being broken if very strong bonds are formed (large negative ΔH).'
    },
    terms: []
  }, {
    id: 'callout-reactivity-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Thermodynamic vs Kinetic Stability',
      text: 'A molecule can be thermodynamically stable (high bond enthalpies, large positive ΔH of decomposition) but kinetically unstable (low activation energy for decomposition).\n\nConversely, a reaction may be thermodynamically very favourable (very negative ΔH) but kinetically slow if the activation energy is high.\n\nBond enthalpies tell us about thermodynamic stability, not kinetics.'
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
        text: 'Higher bond enthalpy → stronger bond → harder to break → less reactive',
        checked: false
      }, {
        text: 'Bond length increases → bond enthalpy decreases (down a group)',
        checked: false
      }, {
        text: 'Bond order increases → bond length decreases → bond enthalpy increases',
        checked: false
      }, {
        text: 'C–X bond enthalpies: C–F > C–Cl > C–Br > C–I → reactivity: R–I > R–Br > R–Cl > R–F',
        checked: false
      }, {
        text: 'N≡N (+945 kJ mol⁻¹) — very strong → N₂ very unreactive',
        checked: false
      }, {
        text: 'F₂ most reactive halogen despite low F–F bond enthalpy — due to very strong bonds formed',
        checked: false
      }, {
        text: 'Distinguish thermodynamic stability (bond enthalpy) from kinetic stability (Eₐ)',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Bond enthalpy determines bond strength and reactivity. Higher bond enthalpy → stronger, shorter bond → less reactive. Bond order increase gives shorter, stronger bonds. Down Group 17, C–X bond enthalpy decreases (C–F > C–Cl > C–Br > C–I), so halogenoalkane reactivity in substitution increases: R–I > R–Br > R–Cl > R–F. Bond enthalpy predicts thermodynamic stability; kinetic stability also depends on activation energy.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-reactivity-key',
      prompt: 'How does bond enthalpy relate to reactivity? What else does bond strength relate to (bond length, bond order)?'
    }, {
      id: 'cue-2',
      blockId: 'table-halogens',
      prompt: 'State the X–X bond enthalpies for Cl₂, Br₂ and I₂. How does this explain the reactivity trend down Group 17?'
    }, {
      id: 'cue-3',
      blockId: 'table-cx',
      prompt: 'State the C–X bond enthalpies for C–F, C–Cl, C–Br and C–I. Explain why iodoalkanes are more reactive than fluoroalkanes in nucleophilic substitution.'
    }, {
      id: 'cue-4',
      blockId: 'callout-we-compare',
      prompt: 'Using bond enthalpies, compare the enthalpy changes for chlorination and bromination of methane. Which is more thermodynamically favourable and why?'
    }, {
      id: 'cue-5',
      blockId: 'callout-reactivity-warning',
      prompt: 'Distinguish between thermodynamic stability and kinetic stability. Give an example where a reaction is thermodynamically favourable but kinetically slow.'
    }],
    summaryText: 'Bond enthalpy and reactivity, halogen X–X bonds, C–X bonds, thermodynamic vs kinetic stability.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: 'Topic 6: Energetics — bond enthalpy and reactivity, halogen trends, C–X bond enthalpies',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['Energetics', 'Bond enthalpy', 'Reactivity', 'WCH12']
  }]
};