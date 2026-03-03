/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 7
 * "Percentage yield and atom economy"
 * Source: wch11-1.pdf — Spec refs: 1.9
 */

export const note_chemistry_1_1_7 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Calculate percentage yield and percentage atom economy (by mass) in laboratory and industrial processes; explain why high atom economy is important for sustainable chemistry.'
    },
    terms: []
  },
  // ── PERCENTAGE YIELD ──────────────────────────────────────────────────
  {
    id: 'h-yield',
    type: 'heading',
    data: {
      text: 'Percentage Yield',
      level: 2
    },
    terms: []
  }, {
    id: 'p-yield',
    type: "list",
    data: {
      style: "unordered",
      items: ["In practice, the actual amount of product obtained is almost always less than the theoretical maximum calculated from the balanced equation.", "Percentage yield compares the actual mass obtained to the theoretical maximum."]
    },
    terms: ['Percentage yield']
  }, {
    id: 'keybox-yield',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Formula — Percentage Yield',
      text: '% yield = (actual yield / theoretical yield) × 100\n\nTheoretical yield = calculated from balanced equation using stoichiometry\nActual yield = mass of product actually obtained in the experiment\n% yield is always ≤ 100%'
    },
    terms: ['Percentage yield']
  }, {
    id: 'eq-yield',
    type: 'equation',
    data: {
      html: '% yield = <span class="nb-frac"><span class="nb-num">actual yield (g)</span><span class="nb-den">theoretical yield (g)</span></span> × 100',
      caption: 'Percentage yield formula'
    },
    terms: ['Percentage yield']
  },
  // ── REASONS FOR LESS THAN 100% ────────────────────────────────────────
  {
    id: 'h-reasons',
    type: 'heading',
    data: {
      text: 'Why is Actual Yield Always Less Than 100%?',
      level: 2
    },
    terms: []
  }, {
    id: 'list-reasons',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Reversible reactions: equilibrium is not reached to completion, so some reactants remain unchanged', 'Side reactions: reactants may form unwanted by-products instead of the desired product', 'Losses during transfer and filtration: product left on filter paper, glassware or spilled', 'Incomplete reaction: not all reactants converted due to kinetic or equilibrium factors', 'Decomposition: product may decompose under reaction conditions', 'Impure reactants: crude starting materials reduce the effective amount of reactant available']
    },
    terms: ['Percentage yield']
  },
  // ── WORKED EXAMPLES: YIELD ────────────────────────────────────────────
  {
    id: 'h-we-yield',
    type: 'heading',
    data: {
      text: 'Worked Examples — Percentage Yield',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — Simple % yield',
      text: 'A reaction has a theoretical yield of 10 g. In practice, 7.2 g was obtained.\n\n% yield = (7.2 / 10) × 100 = 72%'
    },
    terms: ['Percentage yield']
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — % yield from Fe₂O₃ + CO (from PDF p.21)',
      text: '25 g of Fe₂O₃ reacted with CO and produced 10 g of Fe.\nFe₂O₃ + 3CO → 2Fe + 3CO₂\n\nM(Fe₂O₃) = 2(56) + 3(16) = 160 g mol⁻¹;  M(Fe) = 56 g mol⁻¹\nn(Fe₂O₃) = 25 ÷ 160 = 0.156 mol\nTheoretical n(Fe) = 0.156 × 2 = 0.313 mol  (ratio 1:2)\nTheoretical m(Fe) = 0.313 × 56 = 17.5 g\n\n% yield = (10 / 17.5) × 100 = 57.1%'
    },
    terms: ['Percentage yield']
  },
  // ── ATOM ECONOMY ──────────────────────────────────────────────────────
  {
    id: 'h-ae',
    type: 'heading',
    data: {
      text: 'Atom Economy',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ae',
    type: "list",
    data: {
      style: "unordered",
      items: ["Atom economy measures how efficiently the atoms of the reactants end up in the desired product.", "Unlike percentage yield, atom economy is a theoretical value \u2014 it depends only on the balanced equation, not on laboratory conditions.", "A reaction with 100% atom economy produces no waste by-products at all."]
    },
    terms: ['Atom economy']
  }, {
    id: 'keybox-ae',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Formula — Atom Economy',
      text: '% atom economy = (molar mass of desired product / sum of molar masses of ALL products) × 100\n\nNote: Use the balanced equation. Sum ALL products — both desired and unwanted.'
    },
    terms: ['Atom economy']
  }, {
    id: 'eq-ae',
    type: 'equation',
    data: {
      html: '% atom economy = <span class="nb-frac"><span class="nb-num">M<sub>r</sub>(desired product)</span><span class="nb-den">∑ M<sub>r</sub>(all products)</span></span> × 100',
      caption: 'Atom economy formula (Spec 1.9)'
    },
    terms: ['Atom economy']
  },
  // ── SVG: Atom Economy visual ──────────────────────────────────────────
  {
    id: 'svg-ae',
    type: 'svg',
    data: {
      caption: 'Atom economy — addition (100%) vs substitution (low %)',
      svg: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of atom economy for addition and substitution reactions">
  <!-- Addition reaction -->
  <rect x="10" y="10" width="240" height="170" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="130" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Addition Reaction</text>
  <text x="130" y="52" text-anchor="middle" font-size="11" fill="#166534">C₂H₄ + H₂ → C₂H₆</text>
  <text x="130" y="74" text-anchor="middle" font-size="10" fill="#166534">All atoms → ONE product</text>
  <!-- Atom economy bar: 100% -->
  <rect x="30"  y="88" width="200" height="28" rx="5" fill="#86efac"/>
  <text x="130" y="107" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">100% → Desired Product (C₂H₆)</text>
  <text x="130" y="140" text-anchor="middle" font-size="16" font-weight="bold" fill="#15803d">Atom Economy = 100%</text>
  <text x="130" y="162" text-anchor="middle" font-size="10" fill="#166534">No waste. All atoms used.</text>

  <!-- Substitution reaction -->
  <rect x="290" y="10" width="240" height="170" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="410" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">Substitution Reaction</text>
  <text x="410" y="52" text-anchor="middle" font-size="10" fill="#b91c1c">C₂H₅Br + NaCl → C₂H₅Cl + NaBr</text>
  <text x="410" y="72" text-anchor="middle" font-size="10" fill="#b91c1c">Two products — only one desired</text>
  <!-- Bar split -->
  <rect x="310" y="86" width="125" height="28" rx="5" fill="#86efac"/>
  <rect x="435" y="86" width="75"  height="28" rx="5" fill="#fca5a5"/>
  <text x="372" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">C₂H₅Cl (64.5)</text>
  <text x="472" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">NaBr (103)</text>
  <text x="410" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#b91c1c">Atom Economy ≈ 38.5%</text>
  <text x="410" y="162" text-anchor="middle" font-size="10" fill="#b91c1c">61.5% wasted as NaBr</text>
</svg>`
    },
    terms: ['Atom economy']
  },
  // ── WORKED EXAMPLES: ATOM ECONOMY ─────────────────────────────────────
  {
    id: 'h-we-ae',
    type: 'heading',
    data: {
      text: 'Worked Examples — Atom Economy',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-ae1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Hydrogen from coal (from PDF p.20)',
      text: 'C(s) + 2H₂O(g) → CO₂(g) + 2H₂(g)\nDesired product: H₂\n\nMᵣ(2H₂) = 2 × 2 = 4\nMᵣ(CO₂) = 44;  Mᵣ(2H₂) = 4\nSum of all products = 44 + 4 = 48\n\n% atom economy = (4 / 48) × 100 = 8.33%\n\nVery low — most mass ends up as CO₂ waste.'
    },
    terms: ['Atom economy']
  }, {
    id: 'callout-ae2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 4 — Hydrazine rocket fuel (from PDF p.21)',
      text: '2NH₃ + NaOCl → N₂H₄ + NaCl + H₂O\nDesired product: N₂H₄ (Mᵣ = 32)\n\nSum of all product Mᵣ: N₂H₄ (32) + NaCl (58.5) + H₂O (18) = 108.5\n\n% atom economy = (32 / 108.5) × 100 = 29.5%'
    },
    terms: ['Atom economy']
  }, {
    id: 'callout-ae3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 5 — Haber process (100% atom economy)',
      text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\nDesired product: NH₃\n\nOnly ONE product formed → all atoms go to NH₃\nMᵣ(2NH₃) = 2 × 17 = 34\nSum of all products = 34\n\n% atom economy = (34 / 34) × 100 = 100%'
    },
    terms: ['Atom economy']
  },
  // ── COMPARISON TABLE ──────────────────────────────────────────────────
  {
    id: 'h-compare',
    type: 'heading',
    data: {
      text: 'Percentage Yield vs Atom Economy — Comparison',
      level: 2
    },
    terms: []
  }, {
    id: 'table-compare',
    type: 'comparisonTable',
    data: {
      caption: 'Key differences between % yield and atom economy',
      headers: ['Aspect', 'Percentage Yield', 'Atom Economy'],
      rows: [['Definition', 'Actual mass ÷ theoretical mass × 100', 'Mᵣ desired ÷ Mᵣ all products × 100'], ['Type', 'Experimental / practical measure', 'Theoretical / design measure'], ['Can be improved?', 'Yes — by optimising conditions', 'No — fixed by choice of reaction'], ['Addition rxns', 'Variable (depends on conditions)', '100% — no waste by-products'], ['Substitution rxns', 'Variable (depends on conditions)', 'Low — leaves displaced group as waste'], ['Both important?', 'Yes — both affect efficiency and cost', 'Yes — both affect sustainability']]
    },
    terms: ['Percentage yield', 'Atom economy']
  },
  // ── SUSTAINABILITY ────────────────────────────────────────────────────
  {
    id: 'h-green',
    type: 'heading',
    data: {
      text: 'Why High Atom Economy Matters (Green Chemistry)',
      level: 2
    },
    terms: []
  }, {
    id: 'list-green',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Reduced waste: fewer by-products to dispose of → less environmental impact', 'Lower cost: less raw material wasted as unwanted products → cheaper production', 'Compliance: environmental legislation requires minimising waste streams', 'Sustainability: makes best use of finite natural resources', 'Low atom economy → more raw materials needed for same amount of product → higher cost and more waste']
    },
    terms: ['Atom economy']
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
        text: '% yield = (actual / theoretical) × 100 — always ≤ 100%',
        checked: false
      }, {
        text: 'Theoretical yield: calculate using balanced equation and stoichiometry',
        checked: false
      }, {
        text: 'Atom economy uses Mᵣ of ALL products in the denominator',
        checked: false
      }, {
        text: 'Addition reactions always have 100% atom economy (one product only)',
        checked: false
      }, {
        text: 'Atom economy is a theoretical value — does not depend on conditions',
        checked: false
      }, {
        text: '% yield is a practical value — affected by conditions, equipment, purity',
        checked: false
      }, {
        text: 'Know four reasons why actual yield < 100%',
        checked: false
      }, {
        text: 'Can explain industrial importance of high atom economy',
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
      text: 'Understand: Percentage yield and atom economy measure two fundamentally different things. Yield reflects practical efficiency (how well you performed the experiment); atom economy reflects design efficiency (how inherently wasteful the reaction pathway is). A reaction can have 100% yield but low atom economy — meaning all the product formed, but most of it is unwanted.\n\nApply: The Haber process (N₂ + 3H₂ → 2NH₃) has 100% atom economy but only ~15% yield at equilibrium. Calculate the actual mass of NH₃ from 28 g of N₂ at 15% yield.\n\nAnalyze: Compare the atom economy of making ethanol by (a) fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ vs (b) hydration: C₂H₄ + H₂O → C₂H₅OH. Which is more atom-efficient and why?\n\nEvaluate: A pharmaceutical company achieves 95% yield but only 12% atom economy. Should they prioritise improving yield or redesigning the synthesis route? Justify your reasoning considering cost, waste, and environmental impact.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Percentage yield = (actual ÷ theoretical) × 100%; always less than 100% due to reversible reactions, side reactions, losses and impurities. Atom economy = (Mᵣ desired product ÷ Mᵣ all products) × 100%; a theoretical measure fixed by the equation. Addition reactions give 100% atom economy; substitution reactions give lower values. High atom economy reduces waste and cost, supporting green chemistry and sustainability.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-yield',
      prompt: 'State the percentage yield formula. What is meant by theoretical yield?'
    }, {
      id: 'cue-2',
      blockId: 'list-reasons',
      prompt: 'Name four reasons why actual yield is less than 100%.'
    }, {
      id: 'cue-3',
      blockId: 'eq-ae',
      prompt: 'State the atom economy formula. What goes in the denominator?'
    }, {
      id: 'cue-4',
      blockId: 'callout-ae1',
      prompt: 'Calculate the atom economy for: C + 2H₂O → CO₂ + 2H₂ (desired: H₂).'
    }, {
      id: 'cue-5',
      blockId: 'table-compare',
      prompt: 'What is the key difference between % yield and atom economy?'
    }, {
      id: 'cue-6',
      blockId: 'list-green',
      prompt: 'Give two reasons why high atom economy is important in industry.'
    }],
    summaryText: 'Percentage yield = (actual ÷ theoretical) × 100%. Atom economy = (Mᵣ desired ÷ Mᵣ all products) × 100%. Yield is practical; atom economy is theoretical. Addition reactions → 100% atom economy. High atom economy reduces waste and cost.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section on % yield and atom economy; worked examples WE1–WE2 (p.20–21); exercise 7.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['percentage yield', 'atom economy', 'green chemistry']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objective 1.9',
    detail: 'Calculate % yield and % atom economy using chemical equations and experimental results.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};
export default note_chemistry_1_1_7;