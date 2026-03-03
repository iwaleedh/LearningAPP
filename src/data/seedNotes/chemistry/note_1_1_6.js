/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 6
 * "Stoichiometric mass and volume"
 * Source: wch11-1.pdf — Spec refs: 1.7, 1.8(i)(ii)(iii)
 */

export const note_chemistry_1_1_6 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Use chemical equations to calculate reacting masses and volumes of gases; apply mole ratios from balanced equations; use molar volume (24 dm³ at r.t.p.) and the ideal gas equation pV = nRT.'
    },
    terms: []
  },
  // ── MOLE RATIOS ───────────────────────────────────────────────────────
  {
    id: 'h-ratios',
    type: 'heading',
    data: {
      text: 'Mole Ratios from Balanced Equations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ratios',
    type: "list",
    data: {
      style: "unordered",
      items: ["The coefficients in a balanced equation give the stoichiometric (mole) ratios between all substances.", "For example, in 2Mg + O\u2082 \u2192 2MgO, the ratio Mg:O\u2082:MgO = 2:1:2.", "002 mol of Mg."]
    },
    terms: []
  }, {
    id: 'keybox-method',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Steps — Reacting Mass Calculation',
      text: '1. Write and balance the chemical equation\n2. Identify the known substance and calculate its moles: n = m ÷ M\n3. Use the mole ratio from the equation to find moles of unknown\n4. Convert moles of unknown to mass: m = n × M (or volume: V = n × 24)\n5. Include units and round to appropriate significant figures'
    },
    terms: []
  },
  // ── ANIMATED FLOW ─────────────────────────────────────────────────────
  {
    id: 'svg-reacting-flow',
    type: 'svg',
    data: {
      caption: 'Stoichiometry calculation flow — mass to mass',
      svg: `<svg viewBox="0 0 560 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four step flow: known mass to known moles to unknown moles to unknown mass">
  <defs>
    <marker id="arrS" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/>
    </marker>
  </defs>
  <rect x="5"   y="25" width="120" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="65"  y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Known mass</text>
  <text x="65"  y="63" text-anchor="middle" font-size="9" fill="#92400e">(grams)</text>

  <rect x="155" y="25" width="120" height="50" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="215" y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Known moles</text>
  <text x="215" y="63" text-anchor="middle" font-size="9" fill="#3730a3">n = m ÷ M</text>

  <rect x="305" y="25" width="120" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="365" y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">Unknown moles</text>
  <text x="365" y="63" text-anchor="middle" font-size="9" fill="#14532d">use mole ratio</text>

  <rect x="455" y="25" width="100" height="50" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="505" y="47" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">Unknown</text>
  <text x="505" y="63" text-anchor="middle" font-size="9" fill="#9d174d">mass or volume</text>

  <line x1="125" y1="50" x2="153" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrS)"/>
  <text x="139" y="44" text-anchor="middle" font-size="8" fill="#4338ca">÷M</text>
  <line x1="275" y1="50" x2="303" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrS)"/>
  <text x="289" y="44" text-anchor="middle" font-size="8" fill="#4338ca">ratio</text>
  <line x1="425" y1="50" x2="453" y2="50" stroke="#6366f1" stroke-width="2" marker-end="url(#arrS)"/>
  <text x="439" y="44" text-anchor="middle" font-size="8" fill="#4338ca">×M or ×24</text>
</svg>`
    },
    terms: []
  },
  // ── WORKED EXAMPLES: REACTING MASSES ─────────────────────────────────
  {
    id: 'h-we-mass',
    type: 'heading',
    data: {
      text: 'Worked Examples — Reacting Masses',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — Fe + S → FeS',
      text: 'Calculate the mass of FeS formed when 14 g of Fe reacts with excess sulfur.\n\nEquation: Fe + S → FeS  (ratio 1:1:1)\nM(Fe) = 56 g mol⁻¹;  M(FeS) = 56 + 32 = 88 g mol⁻¹\nn(Fe) = 14 ÷ 56 = 0.25 mol\nn(FeS) = 0.25 mol  (1:1 ratio)\nm(FeS) = 0.25 × 88 = 22 g'
    },
    terms: []
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — SO₃ + H₂O → H₂SO₄ (from PDF p.13)',
      text: 'What mass of SO₃ is needed to form 75 g of H₂SO₄?\n\nEquation: SO₃ + H₂O → H₂SO₄  (ratio 1:1:1)\nM(H₂SO₄) = 98 g mol⁻¹;  M(SO₃) = 80 g mol⁻¹\nn(H₂SO₄) = 75 ÷ 98 = 0.765 mol\nn(SO₃) = 0.765 mol  (1:1 ratio)\nm(SO₃) = 0.765 × 80 = 61.2 g'
    },
    terms: []
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Lead nitrate + sulfuric acid (from PDF p.15)',
      text: 'What mass of PbSO₄ is produced from 10 g of Pb(NO₃)₂?\n\nPb(NO₃)₂(aq) + H₂SO₄(aq) → PbSO₄(s) + 2HNO₃(aq)\nM(Pb(NO₃)₂) = 207 + 2(14 + 48) = 331.2 g mol⁻¹\nM(PbSO₄) = 207 + 32 + 64 = 303.3 g mol⁻¹\nn(Pb(NO₃)₂) = 10 ÷ 331.2 = 0.03019 mol\nn(PbSO₄) = 0.03019 mol  (1:1 ratio)\nm(PbSO₄) = 0.03019 × 303.3 = 9.17 g'
    },
    terms: []
  },
  // ── LIMITING REAGENT ──────────────────────────────────────────────────
  {
    id: 'h-limiting',
    type: 'heading',
    data: {
      text: 'Limiting Reagent and Excess Reagent',
      level: 2
    },
    terms: ['Limiting reagent', 'Excess reagent']
  }, {
    id: 'p-limiting',
    type: "list",
    data: {
      style: "unordered",
      items: ["In most reactions, one reactant is completely used up before the others.", "The reactant that runs out first is called the limiting reagent (or limiting reactant) \u2014 it determines the maximum amount of product that can be formed.", "The other reactants are said to be in excess."]
    },
    terms: ['Limiting reagent', 'Excess reagent']
  }, {
    id: 'callout-limiting-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Identifying the Limiting Reagent',
      text: 'Method — divide moles of each reactant by its stoichiometric coefficient:\n\n  For  aA  +  bB  →  products\n  Calculate:  n(A) ÷ a   and   n(B) ÷ b\n\n  The SMALLER value → that reactant is the LIMITING reagent\n  The LARGER value  → that reactant is in EXCESS\n\nAlways base your yield calculation on the LIMITING reagent.'
    },
    terms: ['Limiting reagent']
  }, {
    id: 'callout-we-limiting1',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Identifying the Limiting Reagent',
      text: 'N₂(g)  +  3H₂(g)  →  2NH₃(g)\n\n4.0 mol of N₂ is mixed with 9.0 mol of H₂.\nWhich is the limiting reagent? What is the maximum moles of NH₃ produced?\n\n─────────────────────────────────────────\nStep 1 — Divide moles by stoichiometric coefficient:\n  N₂:  4.0 ÷ 1 = 4.0\n  H₂:  9.0 ÷ 3 = 3.0  ← smaller value → H₂ is the LIMITING reagent\n\nStep 2 — Calculate moles of NH₃ from limiting reagent (H₂):\n  Mole ratio H₂ : NH₃ = 3 : 2\n  n(NH₃) = 9.0 × (2 ÷ 3) = 6.0 mol\n\nStep 3 — Calculate excess N₂ remaining:\n  N₂ used = 9.0 × (1 ÷ 3) = 3.0 mol\n  N₂ remaining = 4.0 − 3.0 = 1.0 mol in excess\n\n∴ H₂ is the limiting reagent. Maximum NH₃ = 6.0 mol. N₂ has 1.0 mol in excess.'
    },
    terms: ['Limiting reagent']
  }, {
    id: 'callout-we-limiting2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example — Mass Calculation with Limiting Reagent',
      text: '2Al(s)  +  3Cl₂(g)  →  2AlCl₃(s)\n\n5.40 g of Al is reacted with 14.2 g of Cl₂.\nCalculate the mass of AlCl₃ formed.\n\n─────────────────────────────────────────\nStep 1 — Find moles of each reactant:\n  M(Al) = 27 g mol⁻¹   → n(Al) = 5.40 ÷ 27 = 0.200 mol\n  M(Cl₂) = 71 g mol⁻¹  → n(Cl₂) = 14.2 ÷ 71 = 0.200 mol\n\nStep 2 — Identify limiting reagent (divide by coefficient):\n  Al:  0.200 ÷ 2 = 0.100\n  Cl₂: 0.200 ÷ 3 = 0.0667  ← smaller → Cl₂ is the LIMITING reagent\n\nStep 3 — Find moles of AlCl₃ from Cl₂:\n  Mole ratio Cl₂ : AlCl₃ = 3 : 2\n  n(AlCl₃) = 0.200 × (2 ÷ 3) = 0.1333 mol\n\nStep 4 — Find mass of AlCl₃:\n  M(AlCl₃) = 27 + 3(35.5) = 133.5 g mol⁻¹\n  m(AlCl₃) = 0.1333 × 133.5 = 17.8 g  (3 s.f.)\n\n∴ 17.8 g of AlCl₃ is formed.'
    },
    terms: ['Limiting reagent']
  }, {
    id: 'callout-limiting-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Limiting Reagent Questions',
      text: 'Limiting reagent questions are very common in Edexcel IAL exams.\nKey steps to always show:\n  1. Calculate moles of BOTH reactants\n  2. Divide each by its stoichiometric coefficient\n  3. State clearly which is the limiting reagent and why\n  4. Base all further calculations on the limiting reagent\n\nIf the question asks for "excess", calculate how much of the excess reagent is left over after reaction.'
    },
    terms: []
  },
  // ── MOLAR VOLUME OF GASES ─────────────────────────────────────────────
  {
    id: 'h-vol',
    type: 'heading',
    data: {
      text: 'Molar Volume of Gases',
      level: 2
    },
    terms: []
  }, {
    id: 'p-vol',
    type: "list",
    data: {
      style: "unordered",
      items: ["), one mole of any ideal gas occupies 24 dm\xB3 (24 000 cm\xB3).", "This is Avogadro's Law: equal volumes of gases at the same temperature and pressure contain equal numbers of molecules."]
    },
    terms: ['Molar volume']
  }, {
    id: 'table-conditions',
    type: 'comparisonTable',
    data: {
      caption: 'Molar volume at different conditions',
      headers: ['Condition', 'Temperature', 'Pressure', 'Molar Volume'],
      rows: [['r.t.p. (room temp & pressure)', '25 °C (298 K)', '100 kPa', '24 dm³ mol⁻¹'], ['s.t.p. (standard temp & pressure)', '0 °C (273 K)', '101 kPa', '22.4 dm³ mol⁻¹']]
    },
    terms: ['Molar volume']
  }, {
    id: 'eq-vol',
    type: 'equation',
    data: {
      html: 'n = <span class="nb-frac"><span class="nb-num">V (dm³)</span><span class="nb-den">24</span></span>&emsp;&emsp;V = n × 24',
      caption: 'At r.t.p. Use 22.4 dm³ if conditions are s.t.p.'
    },
    terms: ['Molar volume']
  }, {
    id: 'callout-we4',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 4 — Volume of CO₂ from CaCO₃',
      text: 'Calculate the volume of CO₂ produced (at r.t.p.) when 10 g of CaCO₃ reacts with excess HCl.\n\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\nM(CaCO₃) = 100 g mol⁻¹\nn(CaCO₃) = 10 ÷ 100 = 0.10 mol\nn(CO₂) = 0.10 mol  (1:1 ratio)\nV(CO₂) = 0.10 × 24 = 2.4 dm³'
    },
    terms: ['Molar volume']
  },
  // ── IDEAL GAS EQUATION ────────────────────────────────────────────────
  {
    id: 'h-ideal',
    type: 'heading',
    data: {
      text: 'The Ideal Gas Equation',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ideal',
    type: "list",
    data: {
      style: "unordered",
      items: ["For gases at non-standard conditions, or when high precision is required, we use the ideal gas equation.", "It can also be used to find the molar mass of a gas if its mass, pressure, volume and temperature are known."]
    },
    terms: ['Ideal gas equation']
  }, {
    id: 'keybox-ideal',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Formula — Ideal Gas Equation',
      text: 'pV = nRT\n\np = pressure (Pa)     V = volume (m³)\nn = moles (mol)       R = 8.31 J mol⁻¹ K⁻¹\nT = temperature (K)   [T(K) = T(°C) + 273]\n\nRearranged: n = pV ÷ RT  |  M = m ÷ n (to find molar mass)'
    },
    terms: ['Ideal gas equation']
  }, {
    id: 'table-conversions',
    type: 'comparisonTable',
    data: {
      caption: 'Unit conversions for ideal gas equation',
      headers: ['Convert from', 'Convert to', 'How'],
      rows: [['kPa', 'Pa', '× 10³'], ['cm³', 'm³', '÷ 10⁶'], ['dm³', 'm³', '÷ 10³'], ['°C', 'K', '+ 273']]
    },
    terms: ['Ideal gas equation']
  }, {
    id: 'callout-we5',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 5 — Finding molar mass using pV = nRT (from PDF p.25)',
      text: 'A 0.280 g sample of a gas has a volume of 58.5 cm³ at 120 kPa and 70 °C. Find the molar mass.\n\nConvert: V = 58.5 ÷ 10⁶ = 5.85 × 10⁻⁵ m³\n         p = 120 × 10³ = 120 000 Pa\n         T = 70 + 273 = 343 K\n\nn = pV ÷ RT = (120 000 × 5.85 × 10⁻⁵) ÷ (8.31 × 343)\n  = 7.02 ÷ 2850.3\n  = 2.46 × 10⁻³ mol\n\nM = m ÷ n = 0.280 ÷ 2.46 × 10⁻³ = 113.8 g mol⁻¹'
    },
    terms: ['Ideal gas equation']
  },
  // ── DETERMINING FORMULA FROM GAS DATA ────────────────────────────────
  {
    id: 'h-formula-gas',
    type: 'heading',
    data: {
      text: 'Using pV = nRT to Determine Molecular Formula',
      level: 2
    },
    terms: []
  }, {
    id: 'p-formula-gas',
    type: "list",
    data: {
      style: "unordered",
      items: ["If a gas sample has a known percentage composition, you can: (1) use pV = nRT to find the molar mass, (2) use the percentage composition to find the empirical formula, (3) divide the molar mass by the empirical formula mass to find n, (4) multiply the empirical formula by n to get the molecular formula."]
    },
    terms: ['Ideal gas equation', 'Molecular formula']
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Always balance the equation before calculating',
        checked: false
      }, {
        text: 'Identify the mole ratio from equation coefficients',
        checked: false
      }, {
        text: 'Use n = m ÷ M to convert mass → moles',
        checked: false
      }, {
        text: 'Use molar volume 24 dm³ mol⁻¹ at r.t.p. (not s.t.p. unless specified)',
        checked: false
      }, {
        text: 'For pV = nRT: convert to Pa, m³ and K before calculating',
        checked: false
      }, {
        text: 'Show all working including units at every step',
        checked: false
      }, {
        text: 'Round only at the final step — keep intermediate values to 4 s.f.',
        checked: false
      }]
    },
    terms: []
  },
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  // ── SUMMARY ───────────────────────────────────────────────────────────
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: The limiting reagent concept explains why reactions do not always consume all reactants — only the one that runs out first determines how much product forms. The ideal gas equation (pV = nRT) extends mole calculations beyond standard conditions by accounting for temperature and pressure.\n\nApply: 5.4 g of Al is burned in 4.8 g of O₂. Using 4Al + 3O₂ → 2Al₂O₃, identify the limiting reagent and calculate the mass of Al₂O₃ produced.\n\nAnalyze: In the reaction N₂ + 3H₂ → 2NH₃, explain why doubling the mass of N₂ does not double the mass of NH₃ produced if H₂ remains the same. How does the concept of limiting reagent explain this?\n\nEvaluate: A student argues that using pV = nRT at r.t.p. should always give a more accurate answer than using molar volume = 24 dm³. Assess this statement — when would using 24 dm³ be perfectly acceptable, and when would pV = nRT be necessary?'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Stoichiometric calculations use mole ratios from balanced equations. Convert mass to moles (n = m ÷ M), apply the mole ratio, then convert back to mass or volume. At r.t.p., 1 mol of any gas = 24 dm³. The ideal gas equation pV = nRT handles non-standard conditions and can determine molar mass. Always convert units: Pa, m³, K before using pV = nRT.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'keybox-method',
      prompt: 'State the 5 steps for a reacting mass calculation.'
    }, {
      id: 'cue-2',
      blockId: 'callout-we1',
      prompt: 'Calculate the mass of FeS formed from 14 g of Fe. (Fe + S → FeS)'
    }, {
      id: 'cue-3',
      blockId: 'eq-vol',
      prompt: 'State the molar volume at r.t.p. and write the equation for n from volume.'
    }, {
      id: 'cue-4',
      blockId: 'keybox-ideal',
      prompt: 'State the ideal gas equation and all its variables with units.'
    }, {
      id: 'cue-5',
      blockId: 'table-conversions',
      prompt: 'How do you convert kPa → Pa, cm³ → m³, and °C → K?'
    }, {
      id: 'cue-limiting1',
      blockId: 'h-limiting',
      prompt: 'Define limiting reagent. How do you identify which reactant is limiting?'
    }, {
      id: 'cue-limiting2',
      blockId: 'callout-we-limiting1',
      prompt: 'N₂ + 3H₂ → 2NH₃. 4 mol N₂ and 9 mol H₂ are mixed. Which is the limiting reagent and how many moles of NH₃ are produced?'
    }],
    summaryText: 'Stoichiometric calculations use mole ratios from balanced equations. Convert mass to moles, apply the mole ratio, then convert back. At r.t.p., 1 mol gas = 24 dm³. The ideal gas equation pV = nRT handles non-standard conditions. Always convert to Pa, m³ and K.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section 1C: Reacting masses WE1–WE4; Section 1D: Ideal gas equation WE1–WE2; exercises 6, 9.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['stoichiometry', 'molar volume', 'ideal gas']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objectives 1.7, 1.8',
    detail: 'Reacting masses; gas volumes; ideal gas equation.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};