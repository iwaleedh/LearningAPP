/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 4
 * "Solution concentration calculations"
 * Source: wch11-1.pdf — Spec refs: 1.5
 */

export const note_chemistry_1_1_4 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Calculate the concentration of a solution in mol dm⁻³ and g dm⁻³; interconvert between concentration units; use c = n/V in calculations. Use titration data (volumes and concentrations) to calculate the unknown concentration of an acid or alkali.'
    },
    terms: []
  },
  // ── WHY CONCENTRATION? ────────────────────────────────────────────────
  {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Why Measure Concentration?',
      level: 2
    },
    terms: []
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Many chemical reactions occur in solution.", "To predict how much product forms or how much reactant is needed, chemists must know the concentration of each dissolved substance.", "Concentration tells us how much solute is packed into a given volume of solution."]
    },
    terms: ['Concentration']
  },
  // ── UNITS & DEFINITIONS ───────────────────────────────────────────────
  {
    id: 'h-units',
    type: 'heading',
    data: {
      text: 'Concentration Units',
      level: 2
    },
    terms: []
  }, {
    id: 'keybox-units',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Two Concentration Units',
      text: 'Molar concentration (molarity): mol dm⁻³\n → Number of moles of solute per dm³ of solution\n\nMass concentration: g dm⁻³\n → Mass of solute in grams per dm³ of solution\n\n1 litre = 1 dm³ = 1000 cm³'
    },
    terms: ['Concentration']
  }, {
    id: 'table-vol',
    type: 'comparisonTable',
    data: {
      caption: 'Volume unit conversions',
      headers: ['Unit', 'Equivalent', 'Conversion'],
      rows: [['1 dm³', '1 litre (L)', 'Base unit for concentration'], ['1000 cm³', '1 dm³', 'cm³ ÷ 1000 = dm³'], ['1 mL', '1 cm³', 'Used interchangeably']]
    },
    terms: []
  },
  // ── THE CONCENTRATION EQUATION ────────────────────────────────────────
  {
    id: 'h-eq',
    type: 'heading',
    data: {
      text: 'The Concentration Equation',
      level: 2
    },
    terms: []
  }, {
    id: 'eq-conc',
    type: 'equation',
    data: {
      html: 'c = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">V</span></span>&emsp;&emsp;n = c × V&emsp;&emsp;V = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">c</span></span>',
      caption: 'c = concentration (mol dm⁻³) · n = moles (mol) · V = volume (dm³)\nAlways convert cm³ → dm³ (÷ 1000) before using this equation.'
    },
    terms: ['Concentration']
  },
  // SVG concentration triangle
  {
    id: 'svg-ctriangle',
    type: 'svg',
    data: {
      caption: 'Concentration triangle — cover what you want to find',
      svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentration triangle showing n at top, c bottom left, V bottom right">
  <defs>
    <linearGradient id="cTriGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <polygon points="150,20 20,170 280,170" fill="url(#cTriGrad)" stroke="#06b6d4" stroke-width="2.5"/>
  <line x1="75" y1="115" x2="225" y2="115" stroke="#06b6d4" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="150" y1="115" x2="150" y2="170" stroke="#06b6d4" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="150" y="76" text-anchor="middle" font-size="16" font-weight="bold" fill="#111">n</text>
  <text x="150" y="91" text-anchor="middle" font-size="10" fill="#555">(moles / mol)</text>
  <text x="80" y="150" text-anchor="middle" font-size="16" font-weight="bold" fill="#0891b2">c</text>
  <text x="80" y="164" text-anchor="middle" font-size="9" fill="#555">(mol dm⁻³)</text>
  <text x="220" y="150" text-anchor="middle" font-size="16" font-weight="bold" fill="#7c3aed">V</text>
  <text x="220" y="164" text-anchor="middle" font-size="9" fill="#555">(dm³)</text>
  <text x="150" y="192" text-anchor="middle" font-size="10" fill="#374151">n = c × V  |  c = n ÷ V  |  V = n ÷ c</text>
</svg>`
    },
    terms: ['Concentration']
  },
  // ── INTERCONVERTING UNITS ─────────────────────────────────────────────
  {
    id: 'h-convert',
    type: 'heading',
    data: {
      text: 'Converting Between mol dm⁻³ and g dm⁻³',
      level: 2
    },
    terms: []
  }, {
    id: 'eq-convert',
    type: 'equation',
    data: {
      html: 'g dm<sup>−3</sup> = mol dm<sup>−3</sup> × M&emsp;&emsp;mol dm<sup>−3</sup> = <span class="nb-frac"><span class="nb-num">g dm<sup>−3</sup></span><span class="nb-den">M</span></span>',
      caption: 'M = molar mass (g mol⁻¹). Molar mass is the conversion factor between the two units.'
    },
    terms: ['Concentration', 'Molar mass']
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
      title: 'Worked Example 1 — Finding moles in a solution',
      text: 'How many moles of NaOH are in 250 cm³ of 0.100 mol dm⁻³ NaOH solution?\n\nStep 1: Convert volume: 250 ÷ 1000 = 0.250 dm³\nStep 2: n = c × V = 0.100 × 0.250 = 0.0250 mol'
    },
    terms: ['Concentration']
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — Finding concentration from mass',
      text: 'What is the molar concentration of a solution containing 4.00 g of NaOH in 500 cm³?\n\nM(NaOH) = 23 + 16 + 1 = 40 g mol⁻¹\nStep 1: n = m ÷ M = 4.00 ÷ 40 = 0.100 mol\nStep 2: V = 500 ÷ 1000 = 0.500 dm³\nStep 3: c = n ÷ V = 0.100 ÷ 0.500 = 0.200 mol dm⁻³'
    },
    terms: ['Concentration']
  }, {
    id: 'callout-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Need to make 0.150 mol dm⁻³ NaCl (500 cm³)',
      text: 'How many grams of NaCl are needed to make 500 cm³ of 0.150 mol dm⁻³ NaCl?\n\nM(NaCl) = 23 + 35.5 = 58.5 g mol⁻¹\nStep 1: V = 500 ÷ 1000 = 0.500 dm³\nStep 2: n = c × V = 0.150 × 0.500 = 0.0750 mol\nStep 3: m = n × M = 0.0750 × 58.5 = 4.39 g'
    },
    terms: ['Concentration']
  }, {
    id: 'callout-we4',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 4 — Converting mol dm⁻³ to g dm⁻³',
      text: 'Convert 0.500 mol dm⁻³ NaCl to g dm⁻³.\n\nM(NaCl) = 58.5 g mol⁻¹\ng dm⁻³ = mol dm⁻³ × M = 0.500 × 58.5 = 29.25 g dm⁻³'
    },
    terms: ['Concentration']
  },
  // ── MAKING A SOLUTION (SODIUM CHLORIDE EXAMPLE) ───────────────────────
  {
    id: 'h-make',
    type: 'heading',
    data: {
      text: 'Making a Solution of Known Concentration',
      level: 2
    },
    terms: []
  }, {
    id: 'p-make',
    type: "list",
    data: {
      style: "unordered",
      items: ["5 g of NaCl in about 500 cm\xB3 of water, then add more water to make the total volume up to exactly 1000 cm\xB3 (using a volumetric flask).", "5 g to 1000 cm\xB3 of water \u2014 that would give slightly more than 1 dm\xB3 of solution and a slightly lower concentration."]
    },
    terms: ['Concentration']
  }, {
    id: 'keybox-make',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Molarity',
      text: 'Molarity = Moles of solute ÷ Volume of solution (dm³)\n\nTo convert molarity to g dm⁻³: multiply by molar mass\nTo convert g dm⁻³ to molarity: divide by molar mass'
    },
    terms: ['Concentration']
  },
  // ── SVG: concentration step animation ────────────────────────────────
  {
    id: 'svg-conc-flow',
    type: 'svg',
    data: {
      caption: 'Flow for concentration calculations — mass ↔ moles ↔ concentration',
      svg: `<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram for concentration calculations">
  <defs>
    <marker id="arrC" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#0891b2"/>
    </marker>
  </defs>
  <rect x="10"  y="30" width="110" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="65"  y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Mass (g)</text>
  <text x="65"  y="68" text-anchor="middle" font-size="9"  fill="#92400e">m = n × M</text>

  <rect x="200" y="30" width="120" height="50" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="260" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">Moles (n)</text>
  <text x="260" y="68" text-anchor="middle" font-size="9"  fill="#3730a3">n = m ÷ M</text>

  <rect x="390" y="30" width="120" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="450" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#14532d">Concentration</text>
  <text x="450" y="68" text-anchor="middle" font-size="9"  fill="#14532d">c = n ÷ V</text>

  <line x1="120" y1="52" x2="198" y2="52" stroke="#0891b2" stroke-width="2" marker-end="url(#arrC)"/>
  <text x="160"  y="46" text-anchor="middle" font-size="8" fill="#0891b2">÷ M</text>
  <line x1="198" y1="62" x2="120" y2="62" stroke="#0891b2" stroke-width="2" marker-end="url(#arrC)"/>
  <text x="160"  y="76" text-anchor="middle" font-size="8" fill="#0891b2">× M</text>

  <line x1="320" y1="52" x2="388" y2="52" stroke="#16a34a" stroke-width="2" marker-end="url(#arrC)"/>
  <text x="355"  y="46" text-anchor="middle" font-size="8" fill="#16a34a">÷ V</text>
  <line x1="388" y1="62" x2="320" y2="62" stroke="#16a34a" stroke-width="2" marker-end="url(#arrC)"/>
  <text x="355"  y="76" text-anchor="middle" font-size="8" fill="#16a34a">× V</text>

  <text x="260"  y="16" text-anchor="middle" font-size="9" fill="#6b7280">Remember: V must be in dm³ (divide cm³ by 1000)</text>
</svg>`
    },
    terms: ['Concentration']
  },
  // ── TITRATION CALCULATIONS ────────────────────────────────────────────
  {
    id: 'h-titration',
    type: 'heading',
    data: {
      text: 'Titration Calculations',
      level: 2
    },
    terms: ['Titration']
  }, {
    id: 'p-titration',
    type: "list",
    data: {
      style: "unordered",
      items: ["A titration is a technique used to find the unknown concentration of a solution (the analyte) by reacting it with a solution of known concentration (the standard solution).", "A measured volume of one solution is placed in a conical flask; the other is added from a burette until the indicator changes colour at the end point.", "The volume added from the burette is called the titre."]
    },
    terms: ['Titration']
  }, {
    id: 'callout-titration-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 4-Step Titration Calculation Method',
      text: 'Step 1 — Find moles of the KNOWN solution:\n  n = c × V   (remember: V must be in dm³)\n\nStep 2 — Use the mole ratio from the balanced equation to find moles of UNKNOWN\n\nStep 3 — Find concentration of UNKNOWN:\n  c = n ÷ V\n\nStep 4 — Check units: answer in mol dm⁻³ (or g dm⁻³ if asked)'
    },
    terms: ['Titration', 'Concentration']
  }, {
    id: 'svg-titration',
    type: 'svg',
    data: {
      caption: 'Acid-base titration setup — burette delivers standard solution into conical flask',
      svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Titration apparatus diagram">
  <!-- Burette -->
  <rect x="140" y="10" width="22" height="110" rx="3" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="151" y="7" text-anchor="middle" font-size="9" fill="#1e40af">Burette</text>
  <!-- Graduation marks on burette -->
  <line x1="140" y1="30" x2="148" y2="30" stroke="#3b82f6" stroke-width="1"/>
  <line x1="140" y1="50" x2="148" y2="50" stroke="#3b82f6" stroke-width="1"/>
  <line x1="140" y1="70" x2="148" y2="70" stroke="#3b82f6" stroke-width="1"/>
  <line x1="140" y1="90" x2="148" y2="90" stroke="#3b82f6" stroke-width="1"/>
  <text x="136" y="33" font-size="7" fill="#3b82f6" text-anchor="end">0</text>
  <text x="136" y="93" font-size="7" fill="#3b82f6" text-anchor="end">25</text>
  <!-- Tap -->
  <rect x="136" y="118" width="30" height="8" rx="3" fill="#6366f1" stroke="#4338ca" stroke-width="1"/>
  <text x="151" y="125" text-anchor="middle" font-size="7" fill="white">tap</text>
  <!-- Liquid in burette -->
  <rect x="141" y="11" width="20" height="60" rx="2" fill="#bfdbfe" opacity="0.7"/>
  <!-- Drop from burette -->
  <ellipse cx="151" cy="134" rx="3" ry="4" fill="#3b82f6" opacity="0.8"/>
  <!-- Conical flask -->
  <polygon points="130,210 190,210 175,145 145,145" fill="#d1fae5" stroke="#16a34a" stroke-width="1.5"/>
  <rect x="145" y="135" width="30" height="12" rx="2" fill="#d1fae5" stroke="#16a34a" stroke-width="1.5"/>
  <text x="160" y="187" text-anchor="middle" font-size="8" fill="#14532d">Analyte</text>
  <text x="160" y="198" text-anchor="middle" font-size="7" fill="#14532d">(unknown conc.)</text>
  <!-- White tile -->
  <rect x="118" y="210" width="84" height="8" rx="2" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1"/>
  <text x="160" y="218" text-anchor="middle" font-size="7" fill="#6b7280">white tile</text>
  <!-- Labels -->
  <text x="220" y="40" font-size="9" fill="#374151">Standard solution</text>
  <text x="220" y="52" font-size="9" fill="#374151">(known conc.)</text>
  <line x1="163" y1="45" x2="218" y2="45" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="220" y="170" font-size="9" fill="#374151">Indicator</text>
  <text x="220" y="182" font-size="9" fill="#374151">changes colour</text>
  <text x="220" y="194" font-size="9" fill="#374151">at end point</text>
  <line x1="190" y1="180" x2="218" y2="180" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`
    },
    terms: ['Titration']
  }, {
    id: 'callout-we-tit1',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Find concentration of NaOH',
      text: '25.0 cm³ of NaOH solution required 18.40 cm³ of 0.100 mol dm⁻³ HCl to reach the end point.\nCalculate the concentration of the NaOH solution.\n\nEquation:  HCl(aq)  +  NaOH(aq)  →  NaCl(aq)  +  H₂O(l)\nMole ratio:  HCl : NaOH  =  1 : 1\n\n─────────────────────────────────────────\nStep 1 — Moles of HCl (known):\n  V(HCl) = 18.40 ÷ 1000 = 0.01840 dm³\n  n(HCl) = c × V = 0.100 × 0.01840 = 1.840 × 10⁻³ mol\n\nStep 2 — Moles of NaOH (mole ratio 1:1):\n  n(NaOH) = 1.840 × 10⁻³ mol\n\nStep 3 — Concentration of NaOH:\n  V(NaOH) = 25.0 ÷ 1000 = 0.0250 dm³\n  c(NaOH) = n ÷ V = 1.840 × 10⁻³ ÷ 0.0250 = 0.0736 mol dm⁻³\n\n∴ c(NaOH) = 0.0736 mol dm⁻³'
    },
    terms: ['Titration', 'Concentration']
  }, {
    id: 'callout-we-tit2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Different mole ratio (H₂SO₄ + NaOH)',
      text: '20.0 cm³ of H₂SO₄ solution required 24.00 cm³ of 0.200 mol dm⁻³ NaOH to reach the end point.\nCalculate the concentration of the H₂SO₄ solution.\n\nEquation:  H₂SO₄(aq)  +  2NaOH(aq)  →  Na₂SO₄(aq)  +  2H₂O(l)\nMole ratio:  H₂SO₄ : NaOH  =  1 : 2\n\n─────────────────────────────────────────\nStep 1 — Moles of NaOH (known):\n  V(NaOH) = 24.00 ÷ 1000 = 0.02400 dm³\n  n(NaOH) = 0.200 × 0.02400 = 4.800 × 10⁻³ mol\n\nStep 2 — Moles of H₂SO₄ (mole ratio 1:2):\n  n(H₂SO₄) = 4.800 × 10⁻³ ÷ 2 = 2.400 × 10⁻³ mol\n\nStep 3 — Concentration of H₂SO₄:\n  V(H₂SO₄) = 20.0 ÷ 1000 = 0.0200 dm³\n  c(H₂SO₄) = 2.400 × 10⁻³ ÷ 0.0200 = 0.120 mol dm⁻³\n\n∴ c(H₂SO₄) = 0.120 mol dm⁻³'
    },
    terms: ['Titration', 'Concentration']
  }, {
    id: 'table-titration',
    type: 'comparisonTable',
    data: {
      caption: 'Common acid-base titration equations and mole ratios',
      headers: ['Acid', 'Base', 'Equation', 'Mole ratio (acid:base)'],
      rows: [['HCl', 'NaOH', 'HCl + NaOH → NaCl + H₂O', '1 : 1'], ['HCl', 'Na₂CO₃', '2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂', '2 : 1'], ['H₂SO₄', 'NaOH', 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', '1 : 2'], ['H₂SO₄', 'KOH', 'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O', '1 : 2'], ['HNO₃', 'NaOH', 'HNO₃ + NaOH → NaNO₃ + H₂O', '1 : 1']]
    },
    terms: ['Titration']
  }, {
    id: 'callout-tit-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tips — Titration Calculations',
      text: 'Key things the examiner checks:\n  ✓ V converted to dm³ (÷ 1000) before using c = n/V\n  ✓ Balanced equation written and mole ratio stated\n  ✓ Mole ratio correctly applied (not always 1:1!)\n  ✓ Final answer to correct significant figures (usually 3 s.f.)\n  ✓ Units stated: mol dm⁻³\n\nAverage titre: use concordant titres (within 0.10 cm³ of each other).\nDo NOT include the rough titre in the average.'
    },
    terms: []
  }, {
    id: 'callout-tit-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Common Mistakes in Titration Calculations',
      text: 'Forgetting to ÷ 1000 to convert cm³ to dm³ — this gives answers 1000× too large!\nUsing the wrong mole ratio — always write the balanced equation first.\nAveraging the rough titre with the accurate titres.\nConfusing which solution is in the burette and which is in the flask.'
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
        text: 'Always convert cm³ → dm³ by dividing by 1000 before using c = n/V',
        checked: false
      }, {
        text: 'To find mass: use n = c × V first, then m = n × M',
        checked: false
      }, {
        text: 'Molar mass converts between mol dm⁻³ and g dm⁻³',
        checked: false
      }, {
        text: 'Titration: write the balanced equation and state the mole ratio first',
        checked: false
      }, {
        text: 'Titration: find moles of KNOWN, apply mole ratio, then find concentration of UNKNOWN',
        checked: false
      }, {
        text: 'Average titre: use only concordant titres (within 0.10 cm³) — exclude the rough',
        checked: false
      }, {
        text: 'Show all working: write V in dm³, state c and n clearly',
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
      text: 'Understand: Concentration tells us the "crowdedness" of solute particles in a given volume. A higher concentration means more particles per unit volume, leading to more frequent collisions and faster reactions. The distinction between mol dm⁻³ and g dm⁻³ matters because moles allow direct stoichiometric comparison, while mass does not.\n\nApply: You need to prepare 250 cm³ of 0.500 mol dm⁻³ K₂CO₃ (M = 138). Walk through each step: calculate moles needed, calculate mass needed, describe the practical steps using a balance and volumetric flask.\n\nAnalyze: In a titration, 25.0 cm³ of H₂SO₄ reacts with 20.0 cm³ of 0.200 mol dm⁻³ NaOH. If the student forgot that the mole ratio is 1:2 (not 1:1), how would their calculated concentration differ from the correct value? Quantify the error.\n\nEvaluate: Why is it essential to use concordant titre values rather than simply averaging all results? Discuss how using the rough titre would affect accuracy and reliability.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Solution concentration is measured in mol dm⁻³ (molarity) or g dm⁻³. Use c = n/V with volume in dm³ (divide cm³ by 1000). To find moles: n = c × V. To convert mol dm⁻³ to g dm⁻³, multiply by molar mass; divide to go the other way. Molarity equals moles of solute divided by volume of solution in dm³.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-conc',
      prompt: 'State the concentration equation. What units must V be in?'
    }, {
      id: 'cue-2',
      blockId: 'callout-we1',
      prompt: 'How many moles of NaOH are in 250 cm³ of 0.100 mol dm⁻³ solution?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we2',
      prompt: 'What is the concentration of 4.00 g NaOH dissolved in 500 cm³?'
    }, {
      id: 'cue-4',
      blockId: 'eq-convert',
      prompt: 'How do you convert mol dm⁻³ to g dm⁻³?'
    }, {
      id: 'cue-5',
      blockId: 'table-vol',
      prompt: 'How many cm³ are in 1 dm³?'
    }, {
      id: 'cue-6',
      blockId: 'callout-titration-key',
      prompt: 'State the 4-step method for a titration calculation.'
    }, {
      id: 'cue-7',
      blockId: 'callout-we-tit1',
      prompt: '25.0 cm³ NaOH required 18.40 cm³ of 0.100 mol dm⁻³ HCl. Calculate the concentration of NaOH.'
    }, {
      id: 'cue-8',
      blockId: 'callout-we-tit2',
      prompt: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. 20.0 cm³ H₂SO₄ reacts with 24.00 cm³ of 0.200 mol dm⁻³ NaOH. Find c(H₂SO₄).'
    }],
    summaryText: 'Solution concentration is measured in mol dm⁻³ (molarity) or g dm⁻³. Use c = n/V with volume in dm³ (divide cm³ by 1000). To find moles: n = c × V. To convert mol dm⁻³ to g dm⁻³, multiply by molar mass; divide to go the other way.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section 1E: Concentration in mol dm⁻³ and g dm⁻³; NaCl molarity example; Exercise 10.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['concentration', 'molarity', 'solution']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objective 1.5',
    detail: 'Calculate concentration in mol dm⁻³ and g dm⁻³.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};