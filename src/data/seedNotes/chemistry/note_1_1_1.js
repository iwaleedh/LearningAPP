/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 1
 * "Mole concept and Avogadro constant"
 * Source: wch11-1.pdf — Spec refs: 1.2, 1.4(iii)
 */

export const note_chemistry_1_1_1 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Know that the mole (mol) is the unit for amount of substance; perform calculations using the Avogadro constant (L = 6.02 × 10²³ mol⁻¹); use molar mass (g mol⁻¹) and molar volume of gases (24 dm³ at r.t.p).'
    },
    terms: []
  },
  // ── WHY THE MOLE? ─────────────────────────────────────────────────────
  {
    id: 'h-why',
    type: 'heading',
    data: {
      text: 'Why Do Chemists Use the Mole?',
      level: 2
    },
    terms: []
  }, {
    id: 'p-why',
    type: "list",
    data: {
      style: "unordered",
      items: ["Atoms and molecules are far too small and light to count or weigh individually in a laboratory.", "Chemists need a bridge between the microscopic world of atoms and the macroscopic world of grams and litres.", ")."]
    },
    terms: ['Mole']
  },
  // ── DEFINITION OF THE MOLE ────────────────────────────────────────────
  {
    id: 'h-def',
    type: 'heading',
    data: {
      text: 'Definition of the Mole',
      level: 2
    },
    terms: []
  }, {
    id: 'keybox-mole',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — The Mole',
      text: 'The mole is the amount of substance that contains the same number of particles (atoms, ions, molecules, formula units or electrons) as there are carbon atoms in exactly 12 g of carbon-12.\n\nThat number is the Avogadro constant: L = 6.02 × 10²³ mol⁻¹'
    },
    terms: ['Mole', 'Avogadro constant']
  }, {
    id: 'eq-avogadro',
    type: 'equation',
    data: {
      html: 'L = 6.02 × 10<sup>23</sup> mol<sup>−1</sup>',
      caption: 'The Avogadro constant L (also written Nₐ)'
    },
    terms: ['Avogadro constant']
  }, {
    id: 'list-examples',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['6.02 × 10²³ helium atoms have a mass of 4 g (= 1 mol He)', '6.02 × 10²³ CO₂ molecules have a mass of 44 g (= 1 mol CO₂)', '6.02 × 10²³ NO₃⁻ ions have a mass of 62 g (= 1 mol NO₃⁻)']
    },
    terms: ['Mole']
  },
  // ── MOLAR MASS ────────────────────────────────────────────────────────
  {
    id: 'h-molar-mass',
    type: 'heading',
    data: {
      text: 'Molar Mass (M)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-molar-mass',
    type: "list",
    data: {
      style: "unordered",
      items: ["The molar mass of a substance is the mass of one mole of that substance, expressed in g mol\u207B\xB9.", "Numerically, the molar mass equals the relative formula mass (M\u1D63), but it has units of g mol\u207B\xB9.", "For example, water (H\u2082O) has M\u1D63 = 18, so M(H\u2082O) = 18 g mol\u207B\xB9.", "02 \xD7 10\xB2\xB3 water molecules."]
    },
    terms: ['Molar mass', 'Relative molecular mass']
  },
  // ── THE MOLE EQUATION ─────────────────────────────────────────────────
  {
    id: 'h-eq',
    type: 'heading',
    data: {
      text: 'The Mole Equation',
      level: 2
    },
    terms: []
  }, {
    id: 'eq-moles',
    type: 'equation',
    data: {
      html: 'n = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">M</span></span>&emsp;&emsp;m = n × M&emsp;&emsp;M = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">n</span></span>',
      caption: 'n = moles (mol) · m = mass (g) · M = molar mass (g mol⁻¹). Cover what you want to find.'
    },
    terms: ['Mole', 'Molar mass']
  }, {
    id: 'eq-particles',
    type: 'equation',
    data: {
      html: 'N = n × L&emsp;&emsp;n = <span class="nb-frac"><span class="nb-num">N</span><span class="nb-den">L</span></span>',
      caption: 'N = number of particles · L = Avogadro constant (6.02 × 10²³ mol⁻¹)'
    },
    terms: ['Mole', 'Avogadro constant']
  },
  // ── ANIMATED TRIANGLE ─────────────────────────────────────────────────
  {
    id: 'svg-triangle',
    type: 'svg',
    data: {
      caption: 'Mole triangle — cover the quantity you want to find',
      svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mole triangle showing mass at top, moles bottom left, molar mass bottom right">
  <defs>
    <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <!-- Triangle -->
  <polygon points="150,20 20,170 280,170" fill="url(#triGrad)" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Dividing line -->
  <line x1="85" y1="170" x2="215" y2="170" stroke="#6366f1" stroke-width="0" opacity="0"/>
  <line x1="150" y1="95" x2="20" y2="170" stroke="#6366f1" stroke-width="0" opacity="0"/>
  <line x1="150" y1="95" x2="280" y2="170" stroke="#6366f1" stroke-width="0" opacity="0"/>
  <!-- Horizontal divider -->
  <line x1="75" y1="115" x2="225" y2="115" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Vertical divider -->
  <line x1="150" y1="115" x2="150" y2="170" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Labels -->
  <text x="150" y="76" text-anchor="middle" font-size="15" font-weight="bold" fill="#111">m</text>
  <text x="150" y="91" text-anchor="middle" font-size="10" fill="#555">(mass / g)</text>
  <text x="80" y="150" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">n</text>
  <text x="80" y="164" text-anchor="middle" font-size="9" fill="#555">(moles)</text>
  <text x="220" y="150" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">M</text>
  <text x="220" y="164" text-anchor="middle" font-size="9" fill="#555">(molar mass)</text>
  <!-- Formula hints -->
  <text x="150" y="192" text-anchor="middle" font-size="10" fill="#374151">n = m ÷ M   |   m = n × M   |   M = m ÷ n</text>
</svg>`
    },
    terms: ['Mole', 'Molar mass']
  },
  // ── WORKED EXAMPLES ───────────────────────────────────────────────────
  {
    id: 'h-worked',
    type: 'heading',
    data: {
      text: 'Worked Examples',
      level: 2
    },
    terms: []
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — Finding number of molecules',
      text: 'How many water molecules are there in 1.25 g of water?\n\nStep 1: n(H₂O) = m ÷ M = 1.25 ÷ 18 = 0.0694 mol\nStep 2: N = n × L = 0.0694 × 6.02 × 10²³ = 4.18 × 10²² molecules'
    },
    terms: ['Mole']
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — Finding mass from moles',
      text: 'What is the mass of 0.25 mol of CO₂ (M = 44 g mol⁻¹)?\n\nm = n × M = 0.25 × 44 = 11 g'
    },
    terms: ['Mole']
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Finding moles from particles',
      text: 'How many moles is 3.011 × 10²³ atoms of Fe?\n\nn = N ÷ L = (3.011 × 10²³) ÷ (6.02 × 10²³) = 0.50 mol'
    },
    terms: ['Mole', 'Avogadro constant']
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
      items: ["The molar volume of a gas is the volume occupied by one mole of gas at a specified temperature and pressure.", ": 25 \xB0C, 100 kPa) the molar volume of any ideal gas is 24 dm\xB3 mol\u207B\xB9 (24 000 cm\xB3 mol\u207B\xB9).", "p."]
    },
    terms: ['Molar volume']
  }, {
    id: 'keybox-vol',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Molar Volume at r.t.p.',
      text: '1 mole of any gas = 24 dm³ at r.t.p. (room temperature and pressure)\n\nn (mol) = Volume (dm³) ÷ 24\nVolume (dm³) = n × 24'
    },
    terms: ['Molar volume']
  }, {
    id: 'eq-vol',
    type: 'equation',
    data: {
      html: 'n<sub>gas</sub> = <span class="nb-frac"><span class="nb-num">V (dm³)</span><span class="nb-den">24 dm³ mol<sup>−1</sup></span></span>',
      caption: 'Calculating moles of gas from volume at r.t.p.'
    },
    terms: ['Molar volume']
  },
  // ── ANIMATION: mole calculation steps ─────────────────────────────────
  {
    id: 'h-anim',
    type: 'heading',
    data: {
      text: 'Step-by-Step: Mole Calculation Flow',
      level: 2
    },
    terms: []
  }, {
    id: 'svg-flow',
    type: 'svg',
    data: {
      caption: 'Flow diagram — converting between mass, moles, particles and volume',
      svg: `<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram showing conversions between mass, moles, particles and gas volume">
  <defs>
    <marker id="arrowR" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
    <marker id="arrowL" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
  </defs>
  <!-- Boxes -->
  <rect x="10" y="45" width="100" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="60" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Mass</text>
  <text x="60" y="76" text-anchor="middle" font-size="9" fill="#92400e">(grams)</text>

  <rect x="200" y="45" width="100" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="250" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Moles</text>
  <text x="250" y="76" text-anchor="middle" font-size="9" fill="#3730a3">n (mol)</text>

  <rect x="390" y="10" width="120" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="450" y="26" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">Particles</text>
  <text x="450" y="42" text-anchor="middle" font-size="9" fill="#14532d">N = n × L</text>

  <rect x="390" y="80" width="120" height="40" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="450" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#831843">Gas Volume</text>
  <text x="450" y="112" text-anchor="middle" font-size="9" fill="#831843">V = n × 24 dm³</text>

  <!-- Arrows mass ↔ moles -->
  <line x1="110" y1="61" x2="198" y2="61" stroke="#6366f1" stroke-width="1.8" marker-end="url(#arrowR)"/>
  <text x="155" y="54" text-anchor="middle" font-size="8" fill="#4338ca">÷ M</text>
  <line x1="198" y1="70" x2="110" y2="70" stroke="#6366f1" stroke-width="1.8" marker-end="url(#arrowR)"/>
  <text x="155" y="82" text-anchor="middle" font-size="8" fill="#4338ca">× M</text>

  <!-- Arrows moles → particles -->
  <line x1="300" y1="58" x2="388" y2="30" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arrowR)"/>
  <text x="345" y="36" text-anchor="middle" font-size="8" fill="#15803d">× L</text>

  <!-- Arrows moles → gas volume -->
  <line x1="300" y1="72" x2="388" y2="98" stroke="#db2777" stroke-width="1.8" marker-end="url(#arrowR)"/>
  <text x="345" y="93" text-anchor="middle" font-size="8" fill="#9d174d">× 24</text>
</svg>`
    },
    terms: ['Mole', 'Molar mass', 'Avogadro constant', 'Molar volume']
  },
  // ── 3-STEP MOLE CALCULATION METHOD ───────────────────────────────────
  {
    id: 'h-3step',
    type: 'heading',
    data: {
      text: 'The 3-Step Method for Mole Calculations',
      level: 2
    },
    terms: []
  }, {
    id: 'p-3step-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["All mole calculations \u2014 no matter how complex \u2014 follow the same three steps.", "Memorise this method and apply it every time."]
    },
    terms: []
  }, {
    id: 'list-3steps',
    type: 'list',
    data: {
      style: 'numbered',
      items: ['Step 1 — Find the moles of the KNOWN substance   →   use n = m ÷ M  (or n = V ÷ 24 for a gas)', 'Step 2 — Find the moles of the UNKNOWN substance   →   use the mole ratio from the balanced equation', 'Step 3 — Calculate the final answer   →   convert moles back to mass (m = n × M), volume (V = n × 24), or number of particles (N = n × L)']
    },
    terms: ['Mole']
  }, {
    id: 'callout-3step-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Key Idea — Mole Ratio',
      text: 'The mole ratio comes directly from the balanced chemical equation.\n\nFor  a A  +  b B  →  c C\nIf you know moles of A, then: n(B) = n(A) × (b ÷ a)   and   n(C) = n(A) × (c ÷ a)\n\nAlways write the balanced equation first — the coefficients ARE the mole ratio.'
    },
    terms: ['Mole']
  },
  // ── 3-STEP WORKED EXAMPLE ─────────────────────────────────────────────
  {
    id: 'h-3step-example',
    type: 'heading',
    data: {
      text: 'Worked Example — Using the 3-Step Method',
      level: 3
    },
    terms: []
  }, {
    id: 'p-3step-question',
    type: "list",
    data: {
      style: "unordered",
      items: ["80 g of magnesium (Mg) is burned completely in excess oxygen?"]
    },
    terms: []
  }, {
    id: 'callout-we-3step',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Solution — 3-Step Method',
      text: 'Balanced equation:   2Mg  +  O₂  →  2MgO\nMole ratio:  Mg : MgO  =  2 : 2  =  1 : 1\n\n─────────────────────────────────────────\nStep 1 — Find moles of KNOWN (Mg)\n  M(Mg) = 24 g mol⁻¹\n  n(Mg) = m ÷ M = 4.80 ÷ 24 = 0.200 mol\n\n─────────────────────────────────────────\nStep 2 — Find moles of UNKNOWN (MgO) using mole ratio\n  Ratio Mg : MgO = 1 : 1\n  ∴ n(MgO) = 0.200 × (1 ÷ 1) = 0.200 mol\n\n─────────────────────────────────────────\nStep 3 — Calculate final answer (mass of MgO)\n  M(MgO) = 24 + 16 = 40 g mol⁻¹\n  m(MgO) = n × M = 0.200 × 40 = 8.00 g\n\n∴ 8.00 g of magnesium oxide is produced.'
    },
    terms: ['Mole', 'Molar mass']
  }, {
    id: 'svg-3step',
    type: 'svg',
    data: {
      caption: 'The 3-step method — a universal framework for all mole calculations',
      svg: `<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step mole calculation diagram">
  <defs>
    <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
  </defs>

  <!-- Step 1 box -->
  <rect x="10" y="40" width="148" height="80" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="84" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Step 1</text>
  <text x="84" y="79" text-anchor="middle" font-size="10" fill="#78350f">Find moles of</text>
  <text x="84" y="93" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">KNOWN substance</text>
  <text x="84" y="110" text-anchor="middle" font-size="9" fill="#92400e">n = m ÷ M  or  n = V ÷ 24</text>

  <!-- Arrow 1→2 -->
  <line x1="160" y1="80" x2="192" y2="80" stroke="#6366f1" stroke-width="2" marker-end="url(#arr3)"/>

  <!-- Step 2 box -->
  <rect x="194" y="40" width="148" height="80" rx="10" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text x="268" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Step 2</text>
  <text x="268" y="79" text-anchor="middle" font-size="10" fill="#1e1b4b">Find moles of</text>
  <text x="268" y="93" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e1b4b">UNKNOWN substance</text>
  <text x="268" y="110" text-anchor="middle" font-size="9" fill="#3730a3">× mole ratio from equation</text>

  <!-- Arrow 2→3 -->
  <line x1="344" y1="80" x2="376" y2="80" stroke="#6366f1" stroke-width="2" marker-end="url(#arr3)"/>

  <!-- Step 3 box -->
  <rect x="378" y="40" width="148" height="80" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="452" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">Step 3</text>
  <text x="452" y="79" text-anchor="middle" font-size="10" fill="#14532d">Calculate final answer</text>
  <text x="452" y="93" text-anchor="middle" font-size="9" fill="#14532d">mass: m = n × M</text>
  <text x="452" y="107" text-anchor="middle" font-size="9" fill="#14532d">volume: V = n × 24</text>
  <text x="452" y="121" text-anchor="middle" font-size="9" fill="#14532d">particles: N = n × L</text>

  <!-- Label above -->
  <text x="270" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#374151">Universal Mole Calculation Framework</text>
</svg>`
    },
    terms: ['Mole', 'Molar mass']
  }, {
    id: 'callout-tip-3step',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Always Show the 3 Steps',
      text: 'In the exam, always write out all three steps clearly, even if the mole ratio is 1:1.\nExaminers award marks for:\n  • Writing the balanced equation (or stating the mole ratio)\n  • Correctly finding n of the known substance\n  • Correctly applying the mole ratio\n  • Correct final answer with units\n\nNever skip steps — partial credit is available even if the final answer is wrong.'
    },
    terms: []
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Tips',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Always specify the formula when stating a mole: "1 mol O" ≠ "1 mol O₂"',
        checked: false
      }, {
        text: 'Molar mass has units g mol⁻¹; Mᵣ is dimensionless (no units)',
        checked: false
      }, {
        text: 'Avogadro constant L = 6.02 × 10²³ mol⁻¹ (given in data booklet)',
        checked: false
      }, {
        text: 'Molar volume at r.t.p. = 24 dm³ mol⁻¹',
        checked: false
      }, {
        text: 'Convert cm³ → dm³ by dividing by 1000 before using n = V ÷ 24',
        checked: false
      }, {
        text: 'Show working step-by-step: state n, M and equation used',
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
      text: 'Understand: The mole bridges the gap between single atoms (too small to weigh) and laboratory quantities (grams). Avogadro\'s constant is chosen so that 1 mol of ¹²C weighs exactly 12 g — this makes the numerical value of molar mass equal to the relative atomic/molecular mass.\n\nApply: 5.6 dm³ of an unknown gas at r.t.p. weighs 11 g. Calculate its molar mass. (Step 1: n = 5.6 ÷ 24 = 0.233 mol. Step 2: M = m ÷ n = 11 ÷ 0.233 = 47.2 g mol⁻¹ — this matches CO₂ + additional analysis.)\n\nAnalyze: When using the 3-step method, why must you always start from the substance whose amount you KNOW? What happens to the calculation if you start from the unknown?\n\nEvaluate: A student uses molar volume (24 dm³) for a gas at 0 °C and 100 kPa. Explain why this gives an incorrect answer and how temperature/pressure affect gas volume.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'A mole contains 6.02 × 10²³ elementary entities (atoms, ions, molecules, etc.) — the Avogadro constant. Molar mass equals the relative formula mass in g mol⁻¹. Use n = m ÷ M to convert between mass and moles; multiply moles by L to get number of particles. At r.t.p., one mole of any gas occupies 24 dm³.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'keybox-mole',
      prompt: 'Define the mole. What is the Avogadro constant?'
    }, {
      id: 'cue-2',
      blockId: 'eq-moles',
      prompt: 'Write the mole equation and rearrange to find mass and molar mass.'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'How many molecules are in 1.25 g of water?'
    }, {
      id: 'cue-4',
      blockId: 'keybox-vol',
      prompt: 'What is the molar volume of a gas at r.t.p.? State its value and units.'
    }, {
      id: 'cue-5',
      blockId: 'eq-particles',
      prompt: 'How do you convert moles to number of particles?'
    }, {
      id: 'cue-6',
      blockId: 'list-3steps',
      prompt: 'State the 3-step method for all mole calculations. What do you do in each step?'
    }, {
      id: 'cue-7',
      blockId: 'callout-we-3step',
      prompt: '4.80 g of Mg burns in excess O₂. Using the 3-step method, what mass of MgO is produced?'
    }],
    summaryText: 'A mole contains 6.02 × 10²³ elementary entities (atoms, ions, molecules, etc.) — the Avogadro constant. Molar mass equals the relative formula mass in g mol⁻¹. Use n = m ÷ M to convert between mass and moles; multiply moles by L to get number of particles. At r.t.p., one mole of any gas occupies 24 dm³.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Mole definition, Avogadro constant, molar mass, molar volume at r.t.p., worked example on water molecules.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['mole', 'Avogadro', 'molar mass']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objectives 1.2, 1.4(iii)',
    detail: 'Avogadro constant calculations; molar mass definition.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};