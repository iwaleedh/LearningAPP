/**
 * WCH12 | Topic 6: Energetics | Subtopic 4
 * Hess's Law cycles
 */

export const note_chemistry_1_2_6_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: "State Hess's Law and use it to construct enthalpy cycles. Calculate enthalpy changes using: (i) enthalpy of formation data, (ii) enthalpy of combustion data. Draw and label Hess's Law diagrams correctly."
    }
  },
  // ── HESS'S LAW ────────────────────────────────────────────────────────
  {
    id: 'h-hess',
    type: 'heading',
    data: {
      text: "Hess's Law",
      level: 2
    },
    terms: ["Hess's Law"]
  }, {
    id: 'callout-hess-def',
    type: 'callout',
    data: {
      style: 'key',
      title: "💡 Hess's Law",
      text: "The total enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same.\n\nThis means: ΔH(route 1) = ΔH(route 2)\n\nHess's Law is a consequence of the law of conservation of energy."
    },
    terms: ["Hess's Law"]
  }, {
    id: 'p-hess',
    type: "list",
    data: {
      style: "unordered",
      items: ["g.", "enthalpy of formation of carbon compounds), by constructing an enthalpy cycle using values that can be measured."]
    },
    terms: ["Hess's Law"]
  }, {
    id: 'svg-hess-basic',
    type: 'svg',
    data: {
      caption: "Hess's Law — two routes from reactants to products give the same total ΔH",
      svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess's Law basic cycle">
  <defs>
    <marker id="arr-h1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
    <marker id="arr-h2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
    <marker id="arr-h3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Reactants box -->
  <rect x="10" y="55" width="110" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="65" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Reactants</text>

  <!-- Products box -->
  <rect x="300" y="55" width="110" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="355" y="79" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Products</text>

  <!-- Intermediate box -->
  <rect x="155" y="115" width="110" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="210" y="132" text-anchor="middle" font-size="10" fill="#14532d">Intermediate</text>
  <text x="210" y="146" text-anchor="middle" font-size="10" fill="#14532d">compounds</text>

  <!-- Route 1: direct arrow -->
  <line x1="120" y1="75" x2="298" y2="75" stroke="#6366f1" stroke-width="2" marker-end="url(#arr-h1)"/>
  <text x="210" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">ΔH₁ (Route 1)</text>

  <!-- Route 2a: reactants → intermediate -->
  <line x1="90" y1="95" x2="168" y2="113" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr-h2)"/>
  <text x="110" y="115" font-size="9" fill="#dc2626">ΔH₂</text>

  <!-- Route 2b: intermediate → products -->
  <line x1="252" y1="113" x2="330" y2="95" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr-h3)"/>
  <text x="290" y="115" font-size="9" fill="#dc2626">ΔH₃</text>

  <!-- Route 2 label -->
  <text x="210" y="155" text-anchor="middle" font-size="9" fill="#dc2626">Route 2: ΔH₁ = ΔH₂ + ΔH₃</text>

  <!-- Hess's Law statement -->
  <text x="210" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">ΔH₁ = ΔH₂ + ΔH₃  (Hess's Law)</text>
</svg>`
    },
    terms: ["Hess's Law"]
  },
  // ── USING FORMATION ENTHALPIES ────────────────────────────────────────
  {
    id: 'h-formation',
    type: 'heading',
    data: {
      text: 'Hess Cycle Using Enthalpies of Formation',
      level: 2
    },
    terms: ["Hess's Law", 'Enthalpy of formation']
  }, {
    id: 'p-formation',
    type: "list",
    data: {
      style: "unordered",
      items: ["When enthalpies of formation (\u0394H\xB0f) are known for all species, the enthalpy of reaction can be calculated using Hess's Law.", "The cycle goes via the elements in their standard states."]
    },
    terms: ['Enthalpy of formation']
  }, {
    id: 'callout-formation-formula',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Formation Cycle Formula',
      text: 'ΔH°reaction = Σ ΔH°f (products) − Σ ΔH°f (reactants)\n\nRemember:\n  • Multiply each ΔH°f by the stoichiometric coefficient in the equation\n  • ΔH°f of elements in standard states = 0\n  • The cycle goes: reactants → elements → products'
    },
    terms: ["Hess's Law", 'Enthalpy of formation']
  }, {
    id: 'svg-hess-formation',
    type: 'svg',
    data: {
      caption: "Hess cycle using enthalpies of formation — route via elements in standard states",
      svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess cycle using formation enthalpies">
  <defs>
    <marker id="af1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
    <marker id="af2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
    <marker id="af3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Reactants -->
  <rect x="10" y="20" width="130" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="75" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Reactants</text>
  <text x="75" y="52" text-anchor="middle" font-size="9" fill="#3730a3">A + B</text>

  <!-- Products -->
  <rect x="320" y="20" width="130" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="385" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Products</text>
  <text x="385" y="52" text-anchor="middle" font-size="9" fill="#3730a3">C + D</text>

  <!-- Elements -->
  <rect x="155" y="120" width="150" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="230" y="138" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Elements</text>
  <text x="230" y="152" text-anchor="middle" font-size="9" fill="#92400e">(standard states)</text>

  <!-- Route 1: direct ΔH°rxn -->
  <line x1="140" y1="40" x2="318" y2="40" stroke="#6366f1" stroke-width="2" marker-end="url(#af1)"/>
  <text x="230" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#6366f1">ΔH°rxn</text>

  <!-- Route 2a: reactants ← elements (reverse of ΔH°f reactants) -->
  <line x1="155" y1="128" x2="88" y2="62" stroke="#dc2626" stroke-width="1.5" marker-end="url(#af2)"/>
  <text x="100" y="103" font-size="9" fill="#dc2626" text-anchor="middle">−ΣΔH°f</text>
  <text x="100" y="114" font-size="9" fill="#dc2626" text-anchor="middle">(reactants)</text>

  <!-- Route 2b: elements → products (ΔH°f products) -->
  <line x1="305" y1="128" x2="372" y2="62" stroke="#16a34a" stroke-width="1.5" marker-end="url(#af3)"/>
  <text x="360" y="103" font-size="9" fill="#16a34a" text-anchor="middle">+ΣΔH°f</text>
  <text x="360" y="114" font-size="9" fill="#16a34a" text-anchor="middle">(products)</text>

  <text x="230" y="162" text-anchor="middle" font-size="9" fill="#374151">ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)</text>
</svg>`
    },
    terms: ["Hess's Law", 'Enthalpy of formation']
  }, {
    id: 'callout-we-formation',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Using Formation Enthalpies',
      text: 'Calculate ΔH°rxn for:  CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)\n\nGiven: ΔH°f / kJ mol⁻¹:\n  CH₄(g) = −74    CO₂(g) = −394    H₂O(l) = −286    O₂(g) = 0\n\n─────────────────────────────────────────\nΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)\n\nProducts: [1×(−394)] + [2×(−286)] = −394 + (−572) = −966 kJ\nReactants: [1×(−74)] + [2×0]      = −74 kJ\n\nΔH°rxn = −966 − (−74) = −966 + 74 = −892 kJ mol⁻¹\n\n∴ ΔH°rxn = −892 kJ mol⁻¹'
    },
    terms: ["Hess's Law", 'Enthalpy of formation']
  },
  // ── USING COMBUSTION ENTHALPIES ───────────────────────────────────────
  {
    id: 'h-combustion',
    type: 'heading',
    data: {
      text: 'Hess Cycle Using Enthalpies of Combustion',
      level: 2
    },
    terms: ["Hess's Law", 'Enthalpy of combustion']
  }, {
    id: 'p-combustion',
    type: "list",
    data: {
      style: "unordered",
      items: ["When enthalpies of combustion (\u0394H\xB0\uA700) are known, the cycle goes via the combustion products (CO\u2082 and H\u2082O).", "The direction of arrows is reversed compared to the formation cycle \u2014 reactants and products both point DOWN to the combustion products."]
    },
    terms: ['Enthalpy of combustion']
  }, {
    id: 'callout-combustion-formula',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Combustion Cycle Formula',
      text: 'ΔH°reaction = Σ ΔH°꜀ (reactants) − Σ ΔH°꜀ (products)\n\nNote: this is the OPPOSITE to the formation formula!\n  • Arrows from reactants AND products point DOWN to CO₂ + H₂O\n  • To go from products → CO₂+H₂O you use the combustion enthalpies directly\n  • To go from CO₂+H₂O → reactants you REVERSE the arrow (subtract)'
    },
    terms: ["Hess's Law", 'Enthalpy of combustion']
  }, {
    id: 'svg-hess-combustion',
    type: 'svg',
    data: {
      caption: "Hess cycle using enthalpies of combustion — route via CO₂ and H₂O",
      svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess cycle using combustion enthalpies">
  <defs>
    <marker id="ac1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
    <marker id="ac2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/>
    </marker>
    <marker id="ac3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- Reactants -->
  <rect x="10" y="20" width="130" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="75" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Reactants</text>
  <text x="75" y="52" text-anchor="middle" font-size="9" fill="#3730a3">A + B</text>

  <!-- Products -->
  <rect x="320" y="20" width="130" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="385" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">Products</text>
  <text x="385" y="52" text-anchor="middle" font-size="9" fill="#3730a3">C + D</text>

  <!-- CO2 + H2O box -->
  <rect x="140" y="120" width="180" height="40" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="230" y="138" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">CO₂(g) + H₂O(l)</text>
  <text x="230" y="152" text-anchor="middle" font-size="9" fill="#9d174d">(combustion products)</text>

  <!-- Route 1: direct ΔH°rxn -->
  <line x1="140" y1="40" x2="318" y2="40" stroke="#6366f1" stroke-width="2" marker-end="url(#ac1)"/>
  <text x="230" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#6366f1">ΔH°rxn</text>

  <!-- Route 2a: reactants → CO2+H2O (ΔH°c reactants) -->
  <line x1="88" y1="62" x2="168" y2="118" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ac2)"/>
  <text x="98" y="100" font-size="9" fill="#dc2626" text-anchor="middle">ΣΔH°꜀</text>
  <text x="98" y="111" font-size="9" fill="#dc2626" text-anchor="middle">(reactants)</text>

  <!-- Route 2b: products → CO2+H2O reversed (ΔH°c products, reversed) -->
  <line x1="372" y1="62" x2="322" y2="118" stroke="#16a34a" stroke-width="1.5" marker-end="url(#ac3)"/>
  <text x="370" y="100" font-size="9" fill="#16a34a" text-anchor="middle">−ΣΔH°꜀</text>
  <text x="370" y="111" font-size="9" fill="#16a34a" text-anchor="middle">(products)</text>

  <text x="230" y="165" text-anchor="middle" font-size="9" fill="#374151">ΔH°rxn = ΣΔH°꜀(reactants) − ΣΔH°꜀(products)</text>
</svg>`
    },
    terms: ["Hess's Law", 'Enthalpy of combustion']
  }, {
    id: 'callout-we-combustion',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Using Combustion Enthalpies',
      text: 'Calculate ΔH°f for propane (C₃H₈) using enthalpies of combustion.\n\nEquation: 3C(graphite) + 4H₂(g) → C₃H₈(g)\n\nGiven ΔH°꜀ / kJ mol⁻¹:\n  C(graphite) = −394    H₂(g) = −286    C₃H₈(g) = −2220\n\n─────────────────────────────────────────\nΔH°rxn = ΣΔH°꜀(reactants) − ΣΔH°꜀(products)\n\nReactants: [3×(−394)] + [4×(−286)] = −1182 + (−1144) = −2326 kJ\nProducts:  [1×(−2220)] = −2220 kJ\n\nΔH°f(C₃H₈) = −2326 − (−2220) = −2326 + 2220 = −106 kJ mol⁻¹\n\n∴ ΔH°f(C₃H₈) = −106 kJ mol⁻¹'
    },
    terms: ["Hess's Law", 'Enthalpy of combustion']
  },
  // ── COMPARISON TABLE ──────────────────────────────────────────────────
  {
    id: 'table-comparison',
    type: 'comparisonTable',
    data: {
      caption: "Formation vs combustion Hess cycle — key differences",
      headers: ['Feature', 'Formation cycle', 'Combustion cycle'],
      rows: [['Intermediate', 'Elements in standard states', 'CO₂(g) + H₂O(l)'], ['Arrow direction (reactants)', 'Reactants ← Elements (reversed ΔH°f)', 'Reactants → CO₂+H₂O (use ΔH°꜀)'], ['Arrow direction (products)', 'Elements → Products (use ΔH°f)', 'Products ← CO₂+H₂O (reversed ΔH°꜀)'], ['Formula', 'ΔH°rxn = ΣΔH°f(P) − ΣΔH°f(R)', 'ΔH°rxn = ΣΔH°꜀(R) − ΣΔH°꜀(P)'], ['When to use', 'Formation enthalpies given in data', 'Combustion enthalpies given in data']]
    },
    terms: []
  }, {
    id: 'callout-hess-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Drawing Hess Cycles',
      text: 'Always draw the full Hess cycle diagram — marks are awarded for:\n  ✓ Correct boxes for reactants, products and intermediate\n  ✓ Arrows in the correct direction\n  ✓ Correct label on each arrow (ΔH°f or ΔH°꜀ with correct sign/stoichiometry)\n  ✓ Final calculation with correct arithmetic\n\nMemory trick for the formulas:\n  Formation: Products Minus Reactants  (PMR)\n  Combustion: Reactants Minus Products  (RMP)\n  — they are opposite to each other!'
    },
    terms: []
  }, {
    id: 'callout-hess-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Common Mistakes in Hess Cycles',
      text: 'Forgetting to multiply ΔH°f or ΔH°꜀ by the stoichiometric coefficient.\nUsing ΔH°f(elements) ≠ 0 — it is always exactly zero.\nMixing up the formation and combustion formulas — they are OPPOSITES.\nNot reversing the sign when reversing an arrow.'
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
        text: "Hess's Law: ΔH is independent of route — state this in answers if asked to justify",
        checked: false
      }, {
        text: 'Formation cycle: ΔH°rxn = ΣΔH°f(products) − ΣΔH°f(reactants)',
        checked: false
      }, {
        text: 'Combustion cycle: ΔH°rxn = ΣΔH°꜀(reactants) − ΣΔH°꜀(products)',
        checked: false
      }, {
        text: 'Multiply each ΔH by its stoichiometric coefficient',
        checked: false
      }, {
        text: 'ΔH°f of any element in its standard state = 0',
        checked: false
      }, {
        text: 'Draw the full cycle with labelled arrows — do not just use the formula',
        checked: false
      }, {
        text: 'Reversing an arrow reverses the sign of ΔH',
        checked: false
      }]
    }
  },
  // ── SUMMARY ───────────────────────────────────────────────────────────
  {
    id: 'summary',
    type: 'summary',
    data: {
      text: "Hess's Law states ΔH is independent of the reaction route. Formation cycles go via elements (ΔH°rxn = ΣΔH°f(P) − ΣΔH°f(R)). Combustion cycles go via CO₂ and H₂O (ΔH°rxn = ΣΔH°꜀(R) − ΣΔH°꜀(P)). Always multiply ΔH values by stoichiometric coefficients and draw the full cycle diagram."
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-hess-def',
      prompt: "State Hess's Law. What principle does it follow from?"
    }, {
      id: 'cue-2',
      blockId: 'callout-formation-formula',
      prompt: 'State the formula for calculating ΔH°rxn using standard enthalpies of formation.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we-formation',
      prompt: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Use ΔH°f data to calculate ΔH°rxn. (ΔH°f: CH₄=−74, CO₂=−394, H₂O=−286 kJ mol⁻¹)'
    }, {
      id: 'cue-4',
      blockId: 'callout-combustion-formula',
      prompt: 'State the formula for calculating ΔH°rxn using standard enthalpies of combustion. How does it differ from the formation formula?'
    }, {
      id: 'cue-5',
      blockId: 'callout-we-combustion',
      prompt: '3C + 4H₂ → C₃H₈. Use ΔH°꜀ data to find ΔH°f(C₃H₈). (ΔH°꜀: C=−394, H₂=−286, C₃H₈=−2220 kJ mol⁻¹)'
    }],
    summaryText: "Hess's Law, formation and combustion Hess cycles, formulas and worked examples.",
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry WCH12 Specification',
    detail: "Topic 6: Energetics — Hess's Law, formation and combustion enthalpy cycles",
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ["Energetics", "Hess's Law", 'WCH12']
  }]
};