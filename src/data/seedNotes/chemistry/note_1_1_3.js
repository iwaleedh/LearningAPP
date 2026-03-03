/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 3
 * "Relative mass calculations"
 * Source: wch11-1.pdf — Spec refs: 1.4(i), 1.4(ii), 1.4(iii)
 */

export const note_chemistry_1_1_3 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Understand relative atomic mass (Aᵣ) based on the ¹²C scale; calculate relative molecular mass (Mᵣ) and relative formula mass from atomic masses; understand molar mass (g mol⁻¹) and parts per million (ppm).'
    },
    terms: []
  },
  // ── ATOMIC MASS UNIT ──────────────────────────────────────────────────
  {
    id: 'h-amu',
    type: 'heading',
    data: {
      text: 'Atomic Mass Unit & the ¹²C Scale',
      level: 2
    },
    terms: []
  }, {
    id: 'p-amu',
    type: "list",
    data: {
      style: "unordered",
      items: ["Measuring the actual mass of a single atom in grams would give an impractically tiny number.", "Instead, chemists use the atomic mass unit (amu) as a standard.", "One amu is defined as exactly 1/12 of the mass of one carbon-12 atom.", "All relative masses are measured on this scale \u2014 they are dimensionless ratios with no units."]
    },
    terms: ['Relative atomic mass']
  },
  // ── RELATIVE ATOMIC MASS ──────────────────────────────────────────────
  {
    id: 'h-ar',
    type: 'heading',
    data: {
      text: 'Relative Atomic Mass (Aᵣ)',
      level: 2
    },
    terms: []
  }, {
    id: 'keybox-ar',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Definition — Relative Atomic Mass (Aᵣ)',
      text: 'Aᵣ is the weighted average mass of an atom of an element, divided by 1/12 of the mass of a carbon-12 atom.\n\nIt accounts for all naturally occurring isotopes of the element and their percentage abundances.\nAᵣ is dimensionless (no units).'
    },
    terms: ['Relative atomic mass']
  }, {
    id: 'eq-ar',
    type: 'equation',
    data: {
      html: 'A<sub>r</sub> = <span class="nb-frac"><span class="nb-num">weighted mean mass of one atom of the element</span><span class="nb-den">¹⁄₁₂ × mass of one <sup>12</sup>C atom</span></span>',
      caption: 'Definition of relative atomic mass — based on the ¹²C scale'
    },
    terms: ['Relative atomic mass']
  }, {
    id: 'eq-ar-calc',
    type: 'equation',
    data: {
      html: 'A<sub>r</sub> = <span class="nb-frac"><span class="nb-num">∑ (isotope mass × % abundance)</span><span class="nb-den">100</span></span>',
      caption: 'Calculating Aᵣ from isotopic masses and their percentage abundances'
    },
    terms: ['Relative atomic mass']
  },
  // ── WORKED EXAMPLE Ar ─────────────────────────────────────────────────
  {
    id: 'callout-ar-cl',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Aᵣ of Chlorine',
      text: 'Chlorine exists as two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%).\n\nAᵣ(Cl) = (35 × 75 + 37 × 25) ÷ 100\n       = (2625 + 925) ÷ 100\n       = 3550 ÷ 100\n       = 35.5\n\nNote: Aᵣ is not a whole number because it is a weighted average of two isotopes.'
    },
    terms: ['Relative atomic mass']
  },
  // ── MASS SPECTROMETRY ─────────────────────────────────────────────────
  {
    id: 'h-ms',
    type: 'heading',
    data: {
      text: 'Mass Spectrometry and Relative Atomic Mass',
      level: 2
    },
    terms: ['Mass spectrometry', 'Relative atomic mass']
  }, {
    id: 'p-ms',
    type: "list",
    data: {
      style: "unordered",
      items: ["A mass spectrometer is used to measure the mass and relative abundance of isotopes in a sample.", "The mass spectrum shows peaks at each isotope mass \u2014 the x-axis gives the mass/charge ratio (m/z) and the y-axis gives relative abundance (%).", "The relative atomic mass is calculated from this data."]
    },
    terms: ['Mass spectrometry']
  }, {
    id: 'keybox-ms',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Calculating Aᵣ from a Mass Spectrum',
      text: 'Aᵣ = Σ (isotope mass × relative abundance) ÷ Σ (relative abundance)\n\nOR if abundances are given as percentages:\nAᵣ = Σ (isotope mass × % abundance) ÷ 100\n\nThe relative abundance values are read directly from the peak heights (or areas) on the mass spectrum.'
    },
    terms: ['Relative atomic mass', 'Mass spectrometry']
  }, {
    id: 'callout-ms-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 1 — Aᵣ from % Abundance',
      text: 'A mass spectrum of boron shows two isotopes:\n  ¹⁰B: 20% abundance\n  ¹¹B: 80% abundance\n\nCalculate the relative atomic mass of boron.\n\nAᵣ(B) = (10 × 20 + 11 × 80) ÷ 100\n       = (200 + 880) ÷ 100\n       = 1080 ÷ 100\n       = 10.8\n\n∴ Aᵣ(B) = 10.8'
    },
    terms: ['Relative atomic mass']
  }, {
    id: 'callout-ms-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: '✏️ Worked Example 2 — Aᵣ from Relative Abundance (not %)',
      text: 'A mass spectrum of neon shows three isotopes:\n  ²⁰Ne: relative abundance 909\n  ²¹Ne: relative abundance 0.3\n  ²²Ne: relative abundance 88.5\n\nCalculate the relative atomic mass of neon.\n\nSum of abundances = 909 + 0.3 + 88.5 = 997.8\n\nAᵣ(Ne) = (20 × 909 + 21 × 0.3 + 22 × 88.5) ÷ 997.8\n        = (18180 + 6.3 + 1947) ÷ 997.8\n        = 20133.3 ÷ 997.8\n        = 20.2  (3 s.f.)\n\n∴ Aᵣ(Ne) = 20.2'
    },
    terms: ['Relative atomic mass']
  }, {
    id: 'svg-ms',
    type: 'svg',
    data: {
      caption: 'A simplified mass spectrum for chlorine — two isotopes at m/z = 35 and 37',
      svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mass spectrum for chlorine">
  <!-- Axes -->
  <line x1="60" y1="20" x2="60" y2="160" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="160" x2="380" y2="160" stroke="#374151" stroke-width="2"/>

  <!-- Y-axis label -->
  <text x="12" y="95" font-size="10" fill="#374151" transform="rotate(-90,12,95)" text-anchor="middle">Relative Abundance (%)</text>

  <!-- X-axis label -->
  <text x="220" y="185" font-size="10" fill="#374151" text-anchor="middle">Mass / Charge ratio (m/z)</text>

  <!-- Y-axis ticks -->
  <text x="52" y="163" font-size="9" fill="#6b7280" text-anchor="end">0</text>
  <text x="52" y="110" font-size="9" fill="#6b7280" text-anchor="end">50</text>
  <text x="52" y="57" font-size="9" fill="#6b7280" text-anchor="end">100</text>
  <line x1="57" y1="107" x2="63" y2="107" stroke="#374151" stroke-width="1"/>
  <line x1="57" y1="54" x2="63" y2="54" stroke="#374151" stroke-width="1"/>

  <!-- Peak at m/z=35 (75% abundance) height = 0.75*120 = 90px from bottom => y=160-90=70 -->
  <rect x="130" y="70" width="30" height="90" fill="#6366f1" opacity="0.85" rx="2"/>
  <text x="145" y="65" font-size="10" font-weight="bold" fill="#4338ca" text-anchor="middle">75%</text>
  <text x="145" y="175" font-size="10" fill="#374151" text-anchor="middle">35</text>

  <!-- Peak at m/z=37 (25% abundance) height = 0.25*120 = 30px from bottom => y=160-30=130 -->
  <rect x="240" y="130" width="30" height="30" fill="#6366f1" opacity="0.85" rx="2"/>
  <text x="255" y="125" font-size="10" font-weight="bold" fill="#4338ca" text-anchor="middle">25%</text>
  <text x="255" y="175" font-size="10" fill="#374151" text-anchor="middle">37</text>

  <!-- Title -->
  <text x="220" y="15" font-size="12" font-weight="bold" fill="#1f2937" text-anchor="middle">Mass Spectrum of Chlorine</text>
</svg>`
    },
    terms: ['Mass spectrometry']
  }, {
    id: 'callout-ms-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Reading Mass Spectra',
      text: 'In the exam the mass spectrum may give:\n  (a) Percentage abundances — use: Aᵣ = Σ(mass × %) ÷ 100\n  (b) Relative abundances (not %) — use: Aᵣ = Σ(mass × abundance) ÷ Σ(abundance)\n\nBoth methods give the same answer. Always check which type is given.\nShow full working — marks are awarded for the calculation, not just the answer.'
    },
    terms: []
  },
  // ── RELATIVE ISOTOPIC MASS ────────────────────────────────────────────
  {
    id: 'h-isotopic',
    type: 'heading',
    data: {
      text: 'Relative Isotopic Mass',
      level: 3
    },
    terms: []
  }, {
    id: 'p-isotopic',
    type: "list",
    data: {
      style: "unordered",
      items: ["Relative isotopic mass is the mass of one atom of a specific isotope divided by 1/12 of the mass of a carbon-12 atom.", "For example, the relative isotopic mass of \xB3\u2075Cl is 35 and that of \xB3\u2077Cl is 37.", "These are used to calculate A\u1D63."]
    },
    terms: ['Relative atomic mass']
  },
  // ── RELATIVE MOLECULAR MASS ───────────────────────────────────────────
  {
    id: 'h-mr',
    type: 'heading',
    data: {
      text: 'Relative Molecular Mass (Mᵣ)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-mr',
    type: "list",
    data: {
      style: "unordered",
      items: ["Relative molecular mass (M\u1D63) is the sum of the relative atomic masses of all atoms in one molecule of a substance.", "It is dimensionless.", "For ionic compounds or giant-covalent structures, where discrete molecules do not exist, the equivalent term is relative formula mass \u2014 calculated in the same way from the formula unit."]
    },
    terms: ['Relative molecular mass', 'Relative formula mass']
  }, {
    id: 'keybox-mr',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Mᵣ vs Relative Formula Mass',
      text: 'Mᵣ → use for covalent molecules (e.g. H₂O, CO₂, H₂SO₄)\nRelative formula mass → use for ionic/giant structures (e.g. NaCl, CaCO₃)\nBoth are calculated the same way — sum of all Aᵣ values in the formula.'
    },
    terms: ['Relative molecular mass', 'Relative formula mass']
  }, {
    id: 'callout-mr-we',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Mᵣ of H₂SO₄',
      text: 'Aᵣ values: H = 1, S = 32, O = 16\n\nMᵣ(H₂SO₄) = (2 × 1) + 32 + (4 × 16)\n           = 2 + 32 + 64\n           = 98'
    },
    terms: ['Relative molecular mass']
  }, {
    id: 'callout-mr-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Relative Formula Mass of Ca(NO₃)₂',
      text: 'Aᵣ values: Ca = 40, N = 14, O = 16\n\nMᵣ(Ca(NO₃)₂) = 40 + 2(14 + 3 × 16)\n             = 40 + 2(14 + 48)\n             = 40 + 2(62)\n             = 40 + 124\n             = 164\n\nNote: The bracket means × 2 applies to everything inside.'
    },
    terms: ['Relative formula mass']
  },
  // ── SVG: Mr calculation diagram ───────────────────────────────────────
  {
    id: 'svg-mr',
    type: 'svg',
    data: {
      caption: 'How to calculate Mᵣ for H₂SO₄',
      svg: `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing Mᵣ calculation for sulfuric acid H2SO4">
  <text x="200" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="#111" font-family="serif">H₂SO₄</text>
  <!-- H2 -->
  <rect x="20" y="40" width="80" height="50" rx="7" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">2 × H</text>
  <text x="60" y="80" text-anchor="middle" font-size="12" fill="#1e40af">2 × 1 = 2</text>
  <!-- S -->
  <rect x="160" y="40" width="80" height="50" rx="7" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="200" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="#9d174d">1 × S</text>
  <text x="200" y="80" text-anchor="middle" font-size="12" fill="#9d174d">1 × 32 = 32</text>
  <!-- O4 -->
  <rect x="300" y="40" width="80" height="50" rx="7" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="340" y="62" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">4 × O</text>
  <text x="340" y="80" text-anchor="middle" font-size="12" fill="#14532d">4 × 16 = 64</text>
  <!-- total -->
  <rect x="100" y="120" width="200" height="40" rx="7" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="200" y="137" text-anchor="middle" font-size="12" fill="#92400e">Total Mᵣ =</text>
  <text x="200" y="153" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">2 + 32 + 64 = 98</text>
  <!-- Lines -->
  <line x1="60"  y1="90" x2="160" y2="120" stroke="#ca8a04" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="200" y1="90" x2="200" y2="120" stroke="#ca8a04" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="340" y1="90" x2="240" y2="120" stroke="#ca8a04" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`
    },
    terms: ['Relative molecular mass']
  },
  // ── MOLAR MASS ────────────────────────────────────────────────────────
  {
    id: 'h-molar',
    type: 'heading',
    data: {
      text: 'Molar Mass (M)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-molar',
    type: "list",
    data: {
      style: "unordered",
      items: ["Molar mass is the mass of one mole of a substance in g mol\u207B\xB9.", "It is numerically equal to the relative molecular (or formula) mass but carries units of g mol\u207B\xB9.", "For example, M\u1D63(H\u2082SO\u2084) = 98, so M(H\u2082SO\u2084) = 98 g mol\u207B\xB9.", "This relationship is exact by the definition of the mole."]
    },
    terms: ['Molar mass', 'Relative molecular mass']
  }, {
    id: 'table-mass-compare',
    type: 'comparisonTable',
    data: {
      caption: 'Comparing relative mass quantities',
      headers: ['Quantity', 'Symbol', 'Units', 'Example'],
      rows: [['Relative atomic mass', 'Aᵣ', 'None (dimensionless)', 'Aᵣ(Cl) = 35.5'], ['Relative molecular mass', 'Mᵣ', 'None (dimensionless)', 'Mᵣ(H₂SO₄) = 98'], ['Relative formula mass', 'Mᵣ', 'None (dimensionless)', 'Mᵣ(NaCl) = 58.5'], ['Molar mass', 'M', 'g mol⁻¹', 'M(H₂SO₄) = 98 g mol⁻¹']]
    },
    terms: ['Molar mass', 'Relative atomic mass', 'Relative molecular mass']
  },
  // ── PARTS PER MILLION (ppm) ───────────────────────────────────────────
  {
    id: 'h-ppm',
    type: 'heading',
    data: {
      text: 'Parts Per Million (ppm)',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ppm',
    type: "list",
    data: {
      style: "unordered",
      items: ["Parts per million (ppm) is used for very low concentrations, such as pollutants in air or water.", "\"Per cent\" means out of 100; \"parts per million\" means out of 1 000 000.", "One ppm is equivalent to 1 mg of solute per kg of solvent (or 1 mg/L in dilute aqueous solutions).", "Parts per billion (ppb) and parts per trillion (ppt) are used for even lower concentrations."]
    },
    terms: ['Parts per million']
  }, {
    id: 'keybox-ppm',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Formulae — ppm',
      text: 'For solutions (by mass):\nppm = (mass of solute / mass of solution) × 1 000 000\n\nFor gases in air (by volume):\nppm = (volume of gas / volume of air) × 1 000 000'
    },
    terms: ['Parts per million']
  }, {
    id: 'eq-ppm-sol',
    type: 'equation',
    data: {
      html: 'ppm = <span class="nb-frac"><span class="nb-num">mass of solute (g)</span><span class="nb-den">mass of solution (g)</span></span> × 10<sup>6</sup>',
      caption: 'Concentration in ppm — for dissolved substances'
    },
    terms: ['Parts per million']
  }, {
    id: 'eq-ppm-gas',
    type: 'equation',
    data: {
      html: 'ppm = <span class="nb-frac"><span class="nb-num">volume of gas (dm³)</span><span class="nb-den">volume of air (dm³)</span></span> × 10<sup>6</sup>',
      caption: 'Concentration in ppm — for gases in air'
    },
    terms: ['Parts per million']
  }, {
    id: 'callout-ppm-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 1 — ppm in Solution',
      text: 'A solution contains 0.176 g of solute dissolved in 750 g of solvent. What is the concentration in ppm?\n\nppm = (0.176 / 750) × 1 000 000 = 234.67 ppm\n\n(meaning: 234.67 g of solute dissolved in 1 000 000 g of solvent)'
    },
    terms: ['Parts per million']
  }, {
    id: 'callout-ppm-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 2 — ppm in Air (Gas)',
      text: 'Some nitrogen dioxide gas, with a volume of 1.5 dm³, mixes with 10 000 dm³ of air. What is the concentration in ppm?\n\nppm = (1.5 / 10 000) × 1 000 000 = 150 ppm'
    },
    terms: ['Parts per million']
  }, {
    id: 'callout-ppm-we3',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example 3 — Finding Mass from ppm',
      text: 'A sample of river water contains phosphate ions at 17 ppm. What is the mass of phosphate ions in 500 g of water?\n\nppm = (mass / mass of solution) × 10⁶\n17 = (mass / 500) × 10⁶\nmass = 17 × 500 / 10⁶ = 8.5 × 10⁻³ g = 8.5 mg'
    },
    terms: ['Parts per million']
  },
  // ── EXAM CHECKLIST ────────────────────────────────────────────────────
  {
    id: 'h-tips',
    type: 'heading',
    data: {
      text: 'Exam Tips & Common Mistakes',
      level: 2
    },
    terms: []
  }, {
    id: 'checklist-tips',
    type: 'checklist',
    data: {
      items: [{
        text: 'Aᵣ and Mᵣ are dimensionless — they have NO units',
        checked: false
      }, {
        text: 'Molar mass M has units g mol⁻¹ (same number as Mᵣ)',
        checked: false
      }, {
        text: 'Watch brackets: Ca(NO₃)₂ — the 2 multiplies everything inside the bracket',
        checked: false
      }, {
        text: 'Use "relative formula mass" for ionic compounds, not "relative molecular mass"',
        checked: false
      }, {
        text: 'Aᵣ is a weighted average — it is rarely a whole number',
        checked: false
      }, {
        text: 'For ppm (solution): divide mass of solute by mass of solution × 10⁶',
        checked: false
      }, {
        text: 'For ppm (gas): divide volume of gas by volume of air × 10⁶',
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
      text: 'Understand: Aᵣ is a weighted average — it is never a whole number for elements with multiple naturally occurring isotopes. The ¹²C scale was chosen as a universal reference so that all atomic masses could be compared on the same basis. Molar mass gives the practical link: Aᵣ (dimensionless) becomes M in g mol⁻¹.\n\nApply: An element has two isotopes: one at mass 63 (69.2%) and one at mass 65 (30.8%). Calculate Aᵣ and identify the element. Then calculate the mass of 0.25 mol of this element.\n\nAnalyze: Why is the Aᵣ of chlorine (35.5) closer to 35 than to 37? Use the concept of weighted averages and the abundance data (75%/25%) to explain quantitatively.\n\nEvaluate: A student says "ppm is just a percentage with more zeros." Assess this claim. In what types of measurement is ppm more appropriate than percentage, and why?'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Relative atomic mass (Aᵣ) is the weighted average mass of an atom relative to 1/12 of carbon-12. Mᵣ is the sum of all Aᵣ values in a molecule; relative formula mass applies to ionic/giant structures. Both are dimensionless. Molar mass equals Mᵣ numerically but has units g mol⁻¹. Parts per million expresses very low concentrations: (mass of solute / mass of solution) × 10⁶ for solutions, or (volume gas / volume air) × 10⁶ for gases.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'keybox-ar',
      prompt: 'Define relative atomic mass. What scale is it based on?'
    }, {
      id: 'cue-2',
      blockId: 'callout-ar-cl',
      prompt: 'Calculate Aᵣ of chlorine given ³⁵Cl (75%) and ³⁷Cl (25%).'
    }, {
      id: 'cue-3',
      blockId: 'callout-mr-we',
      prompt: 'Calculate Mᵣ of H₂SO₄ using Aᵣ: H=1, S=32, O=16.'
    }, {
      id: 'cue-4',
      blockId: 'callout-mr-we2',
      prompt: 'Calculate relative formula mass of Ca(NO₃)₂. What does the bracket mean?'
    }, {
      id: 'cue-5',
      blockId: 'keybox-ppm',
      prompt: 'State the formula for ppm in solution and in gases.'
    }, {
      id: 'cue-ms1',
      blockId: 'h-ms',
      prompt: 'How is a mass spectrum used to calculate relative atomic mass? State the formula.'
    }, {
      id: 'cue-ms2',
      blockId: 'callout-ms-we1',
      prompt: 'Boron has two isotopes: ¹⁰B (20%) and ¹¹B (80%). Calculate the relative atomic mass of boron.'
    }],
    summaryText: 'Relative atomic mass (Aᵣ) is the weighted average mass of an atom relative to 1/12 of carbon-12. Mᵣ is the sum of all Aᵣ values in a molecule; relative formula mass applies to ionic/giant structures. Both are dimensionless. Molar mass equals Mᵣ numerically but has units g mol⁻¹. Parts per million expresses very low concentrations: (mass of solute / mass of solution) × 10⁶ for solutions, or (volume gas / volume air) × 10⁶ for gases.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Section 1C: Relative masses, Aᵣ, Mᵣ, molar mass, ppm worked examples (WE1–WE4 pages 29–30).',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['Ar', 'Mr', 'molar mass', 'ppm']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objective 1.4(i–iv)',
    detail: 'Definitions and calculations for Aᵣ, Mᵣ, molar mass, and ppm.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};