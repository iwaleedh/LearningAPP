/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 1
 * "Isotopes and relative atomic mass"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.2
 */
export const note_chemistry_1_2_1 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Calculate relative atomic mass (Ar) from isotope mass data and percentage abundances. Understand relative isotopic mass.' },
      terms: []
    },
    {
      id: 'h-isotopic',
      type: 'heading',
      data: { text: 'Relative Isotopic Mass', level: 2 },
      terms: []
    },
    {
      id: 'callout-isotopic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Relative Isotopic Mass',
        text: 'The <strong>relative isotopic mass</strong> is the mass of one atom of an isotope compared to ¹⁄₁₂ of the mass of one atom of ¹²C.<br/><br/>Note: Values are very close to the mass number (e.g., ¹²C = exactly 12; ¹³C ≈ 13.003 etc.), but not exact because of nuclear binding energy.'
      },
      terms: ['Relative isotopic mass']
    },
    {
      id: 'list-isotopic-detail',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The <strong>relative isotopic mass</strong> is the mass of one atom of a specific isotope relative to ¹⁄₁₂ of the mass of one atom of carbon-12.',
          'Carbon-12 (¹²C) is the international standard for relative mass measurements — its relative isotopic mass is <strong>exactly 12</strong>.',
          'Relative isotopic masses are <em>dimensionless</em> (they have no units) because they are ratios.',
          'Relative isotopic mass values are very close to, but not exactly equal to, the mass number — the slight difference arises from the <strong>nuclear binding energy</strong> (mass defect) that holds the nucleus together.',
          'Measured by a <strong>mass spectrometer</strong>: each isotope is deflected by a different amount in the magnetic field due to its different mass/charge ratio (m/z), producing separate peaks in the mass spectrum.',
          'The <strong>height (or area)</strong> of each peak is proportional to the <strong>relative abundance</strong> of that isotope.'
        ]
      },
      terms: []
    },
    {
      id: 'h-ar',
      type: 'heading',
      data: { text: 'Calculating Relative Atomic Mass (Aᵣ)', level: 2 },
      terms: []
    },
    {
      id: 'callout-ar',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Formula for Aᵣ from isotopic data',
        text: 'Aᵣ = Σ (relative isotopic mass × % abundance) / 100<br/><br/>Or using fractional abundances:<br/>Aᵣ = Σ (relative isotopic mass × fractional abundance)'
      },
      terms: ['Relative atomic mass']
    },
    {
      id: 'eq-ar',
      type: 'equation',
      data: {
        html: 'Aᵣ = <span class="nb-frac"><span class="nb-num">Σ (isotopic mass × % abundance)</span><span class="nb-den">100</span></span>',
        caption: 'Relative atomic mass formula — divide the sum by 100 when using percentage abundances, or multiply directly when using fractional abundances (which already sum to 1).'
      },
      terms: []
    },
    {
      id: 'callout-12c-standard',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Carbon-12 Standard',
        text: 'All relative masses are measured on a scale where <strong>¹²C = exactly 12</strong>.<br/><br/><strong>Why ¹²C?</strong><br/>• Carbon is abundant and stable, making it a practical reference.<br/>• Chosen by international agreement (IUPAC) in 1961, replacing the older oxygen-16 standard.<br/>• ¹²C has a relative isotopic mass of <em>exactly</em> 12 by definition — not an approximation.<br/><br/>All other relative atomic and isotopic masses are expressed as multiples of ¹⁄₁₂ the mass of a ¹²C atom.'
      },
      terms: []
    },
    {
      id: 'callout-ar-not-whole',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Relative Atomic Mass is Usually Not a Whole Number',
        text: 'There are two reasons why Aᵣ values are typically non-integers:<br/><br/><strong>1. Multiple isotopes:</strong> Most elements have two or more naturally occurring isotopes. Aᵣ is the <em>weighted average</em> of their masses, accounting for their relative abundances — so the result falls between two whole numbers (e.g. Cl = 35.5).<br/><br/><strong>2. Nuclear binding energy (mass defect):</strong> Even a single isotope does not have a mass that is exactly a whole number, because some mass is converted to binding energy that holds the nucleus together (E = mc²). This is why ¹²C is defined as exactly 12, but other isotopes are not exactly their mass number (e.g., ¹H ≈ 1.00794, not exactly 1).<br/><br/><em>For Edexcel IAL calculations, you will normally use the mass number as the relative isotopic mass (e.g., ³⁵Cl = 35) unless a more precise value is given in the question.</em>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Chlorine',
        text: 'Isotopes of chlorine: ³⁵Cl (75.5%) and ³⁷Cl (24.5%)<br/><br/>Aᵣ(Cl) = (35 × 75.5 + 37 × 24.5) / 100<br/>= (2642.5 + 906.5) / 100<br/>= 3549 / 100<br/>= <strong>35.5</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Neon (three isotopes)',
        text: 'Isotopes of neon: ²⁰Ne (90.92%), ²¹Ne (0.26%), ²²Ne (8.82%)<br/><br/>Aᵣ(Ne) = (20 × 90.92 + 21 × 0.26 + 22 × 8.82) / 100<br/>= (1818.4 + 5.46 + 194.04) / 100<br/>= 2017.9 / 100<br/>= <strong>20.2</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Find abundance from Aᵣ (Algebraic Method)',
        text: '<strong>Q: Boron has two isotopes: ¹⁰B and ¹¹B. Aᵣ = 10.8. Find % abundance of each.</strong><br/><br/>Let x = % abundance of ¹⁰B. Then (100 − x) = % of ¹¹B.<br/><br/>10x + 11(100 − x) = 10.8 × 100<br/>10x + 1100 − 11x = 1080<br/>−x = −20<br/>x = 20%<br/><br/>∴ ¹⁰B = <strong>20%</strong>, ¹¹B = <strong>80%</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4: The Shortcut Method for Two Isotopes',
        text: 'When there are exactly two isotopes, you can use a faster fractional shortcut instead of algebra:<br/><br/><strong>% of heavier isotope = (Aᵣ − lighter mass) / (heavier mass − lighter mass) × 100</strong><br/><br/><em>Example using Chlorine (Aᵣ = 35.5, isotopes 35 and 37):</em><br/>% of ³⁷Cl (heavier) = (35.5 − 35) / (37 − 35) × 100<br/>% of ³⁷Cl = 0.5 / 2 × 100 = <strong>25%</strong><br/>Therefore, % of ³⁵Cl = 100 − 25 = <strong>75%</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ar-worked5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5: Copper (Reverse Problem)',
        text: '<strong>Q: Copper has two isotopes, ⁶³Cu and ⁶⁵Cu. Aᵣ(Cu) = 63.5. Calculate the % abundance of each isotope.</strong><br/><br/><strong>Method 1 — Algebra:</strong><br/>Let x = % abundance of ⁶³Cu → (100 − x) = % of ⁶⁵Cu<br/><br/>63x + 65(100 − x) = 63.5 × 100<br/>63x + 6500 − 65x = 6350<br/>−2x = −150<br/>x = 75<br/><br/>∴ ⁶³Cu = <strong>75%</strong>, ⁶⁵Cu = <strong>25%</strong><br/><br/><strong>Method 2 — Shortcut:</strong><br/>% of ⁶⁵Cu (heavier) = (63.5 − 63) / (65 − 63) × 100 = 0.5/2 × 100 = <strong>25%</strong><br/>∴ ⁶³Cu = <strong>75%</strong>'
      },
      terms: []
    },
    {
      id: 'h-definitions',
      type: 'heading',
      data: { text: 'Comparing Relative Mass Definitions', level: 2 },
      terms: []
    },
    {
      id: 'table-rel-masses',
      type: 'comparisonTable',
      data: {
        caption: 'Relative mass definitions at a glance',
        headers: ['Term', 'Symbol', 'Definition', 'Example'],
        rows: [
          ['<strong>Relative isotopic mass</strong>', '—', 'Mass of one atom of a specific isotope relative to ¹⁄₁₂ the mass of one ¹²C atom', '³⁵Cl ≈ 34.97'],
          ['<strong>Relative atomic mass</strong>', 'Aᵣ', 'Weighted average mass of an atom of an element relative to ¹⁄₁₂ the mass of one ¹²C atom; takes into account all naturally occurring isotopes and their abundances', 'Aᵣ(Cl) = 35.5'],
          ['<strong>Relative molecular mass</strong>', 'Mᵣ', 'Sum of the relative atomic masses of all atoms in a molecule', 'Mᵣ(Cl₂) = 35.5 × 2 = 71'],
          ['<strong>Relative formula mass</strong>', 'Mᵣ', 'Used for ionic compounds — sum of Aᵣ values of all ions in the formula unit', 'Mᵣ(NaCl) = 23 + 35.5 = 58.5']
        ]
      },
      terms: ['Relative molecular mass', 'Relative formula mass']
    },
    {
      id: 'callout-exam-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips for Aᵣ Calculations',
        text: '• <strong>Show all working</strong> — marks can be awarded for the correct method even if the final answer is wrong.<br/>• <strong>Do not round intermediate values</strong> — carry full decimal precision until the final answer, then round to an appropriate number of significant figures (usually 3–4 s.f.).<br/>• <strong>Check abundances sum to 100%</strong> (or 1 if using fractions) before starting — this is also a useful self-check at the end of a reverse problem.<br/>• <strong>Aᵣ is always between the lightest and heaviest isotope masses</strong> — if your answer falls outside this range, you have made an error.<br/>• The Aᵣ of monoisotopic elements (e.g. ³¹P, ¹²⁷I, ⁵⁹Co, ¹⁹F) is very close to the mass number because there is effectively only one isotope.'
      },
      terms: []
    },
    {
      id: 'svg-particles-nuclide',
      type: 'svg',
      data: {
        caption: 'Cross-topic reference: subatomic particle properties (from atomic structure) and nuclide notation — the foundation for understanding isotopes and Aᵣ calculations.',
        svg: `<svg viewBox="0 0 580 262" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <line x1="290" y1="8" x2="290" y2="254" stroke="#e5e7eb" stroke-width="1.5"/>
  <rect x="8" y="8" width="274" height="246" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="8" y="8" width="274" height="30" rx="8" fill="#6366f1" fill-opacity="0.5"/>
  <rect x="8" y="28" width="274" height="10" fill="#6366f1" fill-opacity="0.5"/>
  <text x="145" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Subatomic Particles</text>
  <text x="36" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b7280">Particle</text>
  <text x="118" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b7280">Rel. mass</text>
  <text x="188" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b7280">Charge</text>
  <text x="255" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b7280">Location</text>
  <line x1="16" y1="59" x2="274" y2="59" stroke="#e2e8f0" stroke-width="1"/>
  <circle cx="22" cy="76" r="8" fill="#3b82f6"/>
  <text x="22" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#1c3a64">p+</text>
  <text x="54" y="80" font-size="11" fill="#1e3a8a" font-weight="bold">Proton</text>
  <text x="118" y="80" text-anchor="middle" font-size="11" fill="#374151">1</text>
  <text x="188" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">+1</text>
  <text x="255" y="80" text-anchor="middle" font-size="10" fill="#374151">Nucleus</text>
  <line x1="16" y1="87" x2="274" y2="87" stroke="#f1f5f9" stroke-width="1"/>
  <circle cx="22" cy="103" r="8" fill="#64748b"/>
  <text x="22" y="107" text-anchor="middle" font-size="8" font-weight="bold" fill="#1c3a64">n</text>
  <text x="54" y="107" font-size="11" fill="#374151" font-weight="bold">Neutron</text>
  <text x="118" y="107" text-anchor="middle" font-size="11" fill="#374151">1</text>
  <text x="188" y="107" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">0</text>
  <text x="255" y="107" text-anchor="middle" font-size="10" fill="#374151">Nucleus</text>
  <line x1="16" y1="114" x2="274" y2="114" stroke="#f1f5f9" stroke-width="1"/>
  <circle cx="22" cy="130" r="8" fill="#ef4444"/>
  <text x="22" y="134" text-anchor="middle" font-size="8" font-weight="bold" fill="#1c3a64">e-</text>
  <text x="54" y="134" font-size="11" fill="#991b1b" font-weight="bold">Electron</text>
  <text x="118" y="134" text-anchor="middle" font-size="10" fill="#374151">~1/1836</text>
  <text x="188" y="134" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">-1</text>
  <text x="255" y="134" text-anchor="middle" font-size="10" fill="#374151">Shells</text>
  <rect x="16" y="146" width="260" height="30" rx="5" fill="#44370a"/>
  <text x="146" y="159" text-anchor="middle" font-size="10" fill="#713f12" font-weight="bold">Nucleus holds &gt;99.9% of atom's mass</text>
  <text x="146" y="172" text-anchor="middle" font-size="9" fill="#92400e">Atoms are mostly empty space</text>
  <rect x="16" y="184" width="260" height="24" rx="5" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="146" y="193" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Key formula:</text>
  <text x="146" y="204" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Neutrons = A - Z</text>
  <rect x="8" y="215" width="274" height="1" fill="#1e293b"/>
  <text x="146" y="232" text-anchor="middle" font-size="10" fill="#4b5563">In a neutral atom: electrons = protons = Z</text>
  <text x="146" y="246" text-anchor="middle" font-size="10" fill="#4b5563">Ion: electrons = Z - (ionic charge)</text>
  <rect x="298" y="8" width="274" height="246" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="298" y="8" width="274" height="30" rx="8" fill="#065f46" fill-opacity="0.5"/>
  <rect x="298" y="28" width="274" height="10" fill="#065f46" fill-opacity="0.5"/>
  <text x="435" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Nuclide Notation</text>
  <text x="354" y="76" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">35</text>
  <text x="376" y="100" font-size="44" font-weight="bold" fill="#374151">Cl</text>
  <text x="354" y="116" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">17</text>
  <defs>
    <marker id="arr-b" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#1d4ed8"/></marker>
    <marker id="arr-r" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#dc2626"/></marker>
  </defs>
  <line x1="414" y1="78" x2="366" y2="73" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-b)"/>
  <text x="418" y="70" font-size="10" fill="#1d4ed8" font-weight="bold">A = mass number</text>
  <text x="418" y="82" font-size="9" fill="#6b7280">(protons + neutrons)</text>
  <line x1="414" y1="112" x2="366" y2="112" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arr-r)"/>
  <text x="418" y="108" font-size="10" fill="#dc2626" font-weight="bold">Z = atomic number</text>
  <text x="418" y="120" font-size="9" fill="#6b7280">(protons only)</text>
  <line x1="308" y1="130" x2="564" y2="130" stroke="#e2e8f0" stroke-width="1"/>
  <text x="435" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Isotopes: same Z, different A</text>
  <rect x="308" y="155" width="120" height="68" rx="6" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="334" y="176" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">35</text>
  <text x="350" y="196" font-size="32" font-weight="bold" fill="#374151">Cl</text>
  <text x="334" y="213" font-size="16" font-weight="bold" fill="#dc2626" text-anchor="middle">17</text>
  <text x="367" y="172" font-size="9" fill="#374151">18 neutrons</text>
  <text x="367" y="184" font-size="9" fill="#374151">75.5% abundant</text>
  <rect x="450" y="155" width="120" height="68" rx="6" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="476" y="176" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">37</text>
  <text x="492" y="196" font-size="32" font-weight="bold" fill="#374151">Cl</text>
  <text x="476" y="213" font-size="16" font-weight="bold" fill="#dc2626" text-anchor="middle">17</text>
  <text x="509" y="172" font-size="9" fill="#374151">20 neutrons</text>
  <text x="509" y="184" font-size="9" fill="#374151">24.5% abundant</text>
  <text x="435" y="238" text-anchor="middle" font-size="10" fill="#6b7280" font-style="italic">Both have Z=17: same element, different masses</text>
  <text x="435" y="250" text-anchor="middle" font-size="10" fill="#6b7280" font-style="italic">Ar = (35 x 75.5 + 37 x 24.5) / 100 = 35.5</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'checklist-1-2-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define relative isotopic mass and state the standard used (¹⁄₁₂ mass of ¹²C)', checked: false },
          { text: 'Define relative atomic mass (Aᵣ) as the weighted average mass taking all natural isotopes into account', checked: false },
          { text: 'Use the formula Aᵣ = Σ(isotopic mass × % abundance) ÷ 100 to calculate Aᵣ from isotope data', checked: false },
          { text: 'Solve reverse problems: given Aᵣ and two isotopic masses, find the % abundance of each isotope using algebra or the shortcut method', checked: false },
          { text: 'Explain why Aᵣ is usually not a whole number (weighted average of multiple isotopes; nuclear binding energy for individual isotopes)', checked: false },
          { text: 'Distinguish between relative isotopic mass, relative atomic mass (Aᵣ), relative molecular mass (Mᵣ) and relative formula mass', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'All relative masses are measured on the ¹²C = 12 scale. Relative isotopic mass = mass of one isotope atom relative to ¹⁄₁₂ ¹²C. Relative atomic mass (Aᵣ) = weighted average of all isotopic masses × their % abundances ÷ 100. Aᵣ is not a whole number because most elements have multiple isotopes with different abundances (weighted average), and nuclear binding energy means no individual isotope has a mass exactly equal to its mass number. Reverse problems: set up x and (100−x) algebra or use the 2-isotope shortcut % heavier = (Aᵣ − lighter)/(heavier − lighter) × 100. Check: abundances must sum to 100%; Aᵣ must lie between lightest and heaviest isotope mass.' }
    }
  ],

  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-ar', prompt: 'Write the formula for calculating Aᵣ from isotopic masses and percentage abundances.' },
      { id: 'c2', blockId: 'callout-ar-worked1', prompt: 'Calculate Aᵣ for chlorine: ³⁵Cl (75.5%) and ³⁷Cl (24.5%).' },
      { id: 'c3', blockId: 'callout-ar-worked3', prompt: 'Copper has two isotopes: ⁶³Cu and ⁶⁵Cu. Aᵣ = 63.5. Calculate the percentage abundance of ⁶³Cu.' },
      { id: 'c4', blockId: 'callout-ar-worked4', prompt: 'State the shortcut formula for finding the percentage of the heavier isotope when there are only two isotopes.' },
      { id: 'c5', blockId: 'callout-ar-not-whole', prompt: 'Give two reasons why the relative atomic mass of most elements is not a whole number.' },
      { id: 'c6', blockId: 'callout-12c-standard', prompt: 'What is the standard used for relative atomic mass measurements? Why is ¹²C = exactly 12?' }
    ],
    summaryText: 'Relative isotopic mass = mass of one isotope atom relative to ¹⁄₁₂ ¹²C (which is exactly 12 by definition). Aᵣ = Σ(isotopic mass × % abundance)/100 — a weighted average. Not a whole number because of multiple isotopes (weighted average) and nuclear binding energy. Reverse problems: use x/(100−x) algebra OR 2-isotope shortcut % heavier = (Aᵣ − lighter)/(heavier − lighter) × 100. Aᵣ = relative atomic mass (all isotopes averaged); Mᵣ = sum of Aᵣ values in a molecule/formula unit.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_1;