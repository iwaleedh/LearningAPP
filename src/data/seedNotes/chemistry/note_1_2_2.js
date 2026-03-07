/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 2
 * "Mass spectrometry"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.2
 */
export const note_chemistry_1_2_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Understand how a mass spectrometer works. Interpret mass spectra to determine isotopic masses, percentage abundances, and relative molecular masses.' },
      terms: []
    },
    {
      id: 'h-spec',
      type: 'heading',
      data: { text: 'How a Mass Spectrometer Works', level: 2 },
      terms: []
    },
    {
      id: 'svg-mass-spec',
      type: 'svg',
      data: {
        caption: 'Figure 1: The five stages of a mass spectrometer',
        svg: `<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <!-- Stage boxes -->
  <rect x="5" y="30" width="110" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="55" text-anchor="middle" font-weight="bold" fill="#1e40af">1. Vaporisation</text>
  <text x="60" y="72" text-anchor="middle" fill="#1e40af" font-size="10">Sample → gas</text>

  <rect x="135" y="30" width="110" height="60" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="190" y="55" text-anchor="middle" font-weight="bold" fill="#5b21b6">2. Ionisation</text>
  <text x="190" y="72" text-anchor="middle" fill="#5b21b6" font-size="10">e⁻ gun → M⁺(g)</text>

  <rect x="265" y="30" width="110" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="320" y="55" text-anchor="middle" font-weight="bold" fill="#15803d">3. Acceleration</text>
  <text x="320" y="72" text-anchor="middle" fill="#15803d" font-size="10">Electric field</text>

  <rect x="395" y="30" width="110" height="60" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="450" y="55" text-anchor="middle" font-weight="bold" fill="#92400e">4. Deflection</text>
  <text x="450" y="72" text-anchor="middle" fill="#92400e" font-size="10">Magnetic field</text>

  <rect x="525" y="30" width="110" height="60" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="580" y="55" text-anchor="middle" font-weight="bold" fill="#be185d">5. Detection</text>
  <text x="580" y="72" text-anchor="middle" fill="#be185d" font-size="10">Current recorded</text>

  <!-- Arrows -->
  <line x1="115" y1="60" x2="133" y2="60" stroke="#64748b" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="245" y1="60" x2="263" y2="60" stroke="#64748b" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="375" y1="60" x2="393" y2="60" stroke="#64748b" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="505" y1="60" x2="523" y2="60" stroke="#64748b" stroke-width="2" marker-end="url(#arr)"/>

  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
    </marker>
  </defs>

  <!-- Labels top -->
  <text x="60" y="20" text-anchor="middle" fill="#64748b" font-size="10">High vacuum</text>
  <text x="450" y="20" text-anchor="middle" fill="#64748b" font-size="10">Low m/z = more deflected</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          '<strong>Vaporisation:</strong> The sample is vaporised to produce gaseous atoms or molecules.',
          '<strong>Ionisation:</strong> The sample is ionised to form positive ions (so they can be accelerated and detected).',
          '<strong>Acceleration:</strong> The positive ions are accelerated through an electric field (high voltage) so they all have the same kinetic energy.',
          '<strong>Flight Tube (Deflection/Drift):</strong> Ions travel through a vacuum. Lighter ions move faster and reach the detector first.',
          '<strong>Detection:</strong> Ions strike a detector and gain an electron, which produces a small electric current. The size of the current is proportional to the abundance of the isotope.'
        ]
      },
      terms: ['Mass spectrometer', 'Ionisation']
    },
    {
      id: 'h-ionisation-methods',
      type: 'heading',
      data: { text: 'Two Methods of Ionisation', level: 2 },
      terms: []
    },
    {
      id: 'table-ionisation',
      type: 'comparisonTable',
      data: {
        caption: 'Electron Impact vs Electrospray Ionisation',
        headers: ['Feature', 'Electron Impact (EI)', 'Electrospray Ionisation (ESI)'],
        rows: [
          ['<strong>Method</strong>', 'High energy electrons are fired at the sample from an electron gun.', 'Sample dissolved in a volatile solvent and forced through a fine hypodermic needle connected to a positive high voltage terminal.'],
          ['<strong>Equation</strong>', 'X(g) + e⁻ → X⁺(g) + 2e⁻<br/>(knocks off one electron)', 'X(l) + H⁺ → XH⁺(g)<br/>(gains a proton from the solvent)'],
          ['<strong>Resulting Mass</strong>', 'm/z of the peak is the <strong>exact mass</strong> of the original molecule/isotope.', 'm/z of the peak is <strong>mass + 1</strong> (because of the added H⁺).'],
          ['<strong>Best For</strong>', 'Elements and small molecules.', 'Larger organic molecules (softer method, prevents fragmentation).']
        ]
      },
      terms: ['Electron impact', 'Electrospray ionisation']
    },
    {
      id: 'h-tof',
      type: 'heading',
      data: { text: 'Time of Flight (TOF) Calculations', level: 2 },
      terms: []
    },
    {
      id: 'callout-tof',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The TOF Equations',
        text: "During acceleration, all ions are given the <strong>same kinetic energy (KE)</strong>.<br/><br/><strong>1. Kinetic Energy:</strong> KE = ½mv²<br/><strong>2. Velocity:</strong> v = d / t<br/><br/>If we substitute v into the KE equation:<br/>KE = ½m(d/t)²<br/><br/>Rearranging for time (t):<br/>t² = m(d²) / 2KE<br/><strong>t = d × √(m / 2KE)</strong><br/><br/><em>Important Unit Conversions for Physics/Maths in Chemistry:</em><br/>• Mass (m) must be in <strong>kg per atom</strong>. To find this: (Molar Mass / 1000) / Avogadro's Constant (6.022 × 10²³).<br/>• Distance (d) in meters (m).<br/>• Time (t) in seconds (s).<br/>• KE in Joules (J)."
      },
      terms: ['Time of flight', 'Kinetic energy']
    },
    {
      id: 'callout-tof-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: TOF Calculation',
        text: '<strong>Q: A ⁵²Cr⁺ ion travels down a 1.50 m flight tube. The kinetic energy given to all ions is 1.00 × 10⁻¹⁵ J. Calculate the time of flight of the ion.</strong><br/><br/><strong>Step 1: Mass of one ion in kg</strong><br/>Mass of 1 mole of Cr-52 = 52 g = 0.052 kg<br/>Mass of 1 ion (m) = 0.052 / (6.022 × 10²³) = 8.635 × 10⁻²⁶ kg<br/><br/><strong>Step 2: Apply the formula</strong><br/>t = d × √(m / 2KE)<br/>t = 1.50 × √(8.635 × 10⁻²⁶ / (2 × 1.00 × 10⁻¹⁵))<br/>t = 1.50 × √(4.3175 × 10⁻¹¹)<br/>t = 1.50 × 6.57 × 10⁻⁶<br/><strong>t = 9.86 × 10⁻⁶ s</strong>'
      },
      terms: []
    },
    {
      id: 'callout-mz',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The m/z ratio',
        text: 'The x-axis of a mass spectrum is the <strong>m/z ratio</strong> (mass divided by ionic charge). For singly charged ions (z = 1, the most common case), m/z = mass number of the isotope.'
      },
      terms: ['m/z ratio']
    },
    {
      id: 'h-spectrum',
      type: 'heading',
      data: { text: 'Interpreting a Mass Spectrum of an Element', level: 2 },
      terms: []
    },
    {
      id: 'p-spectrum',
      type: 'paragraph',
      data: { text: 'Each peak on the mass spectrum of an element represents a different isotope. The position (m/z) gives the relative isotopic mass, and the <strong>height of the peak</strong> is directly proportional to the relative abundance of that isotope.' },
      terms: []
    },
    {
      id: 'callout-ar-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Aᵣ from a Mass Spectrum',
        text: '<strong>Q: A mass spectrum of copper shows peaks at m/z 63 (63%) and m/z 65 (37%). Calculate Aᵣ for Cu.</strong><br/><br/>Aᵣ = (63 × 63 + 65 × 37) / 100<br/>= (3969 + 2405) / 100<br/>= 6374 / 100<br/>= <strong>63.7</strong>'
      },
      terms: []
    },
    {
      id: 'h-diatomic',
      type: 'heading',
      data: { text: 'Mass Spectra of Diatomic Elements (Cl₂, Br₂)', level: 2 },
      terms: []
    },
    {
      id: 'svg-cl2-spectrum',
      type: 'svg',
      data: {
        caption: 'Figure 2: Mass spectrum of Cl₂ showing molecular ion peaks at m/z 70, 72, 74 (ratio 9:6:1)',
        svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Axes -->
  <line x1="45" y1="10" x2="45" y2="165" stroke="#334155" stroke-width="1.5"/>
  <line x1="45" y1="165" x2="340" y2="165" stroke="#334155" stroke-width="1.5"/>

  <!-- Y-axis label -->
  <text x="12" y="90" text-anchor="middle" fill="#64748b" font-size="10" transform="rotate(-90,12,90)">Relative intensity</text>
  <!-- X-axis label -->
  <text x="192" y="192" text-anchor="middle" fill="#64748b" font-size="10">m/z</text>

  <!-- Y ticks -->
  <line x1="40" y1="165" x2="45" y2="165" stroke="#94a3b8"/>
  <line x1="40" y1="105" x2="45" y2="105" stroke="#94a3b8"/>
  <line x1="40" y1="45" x2="45" y2="45" stroke="#94a3b8"/>
  <text x="38" y="168" text-anchor="end" fill="#64748b" font-size="9">0</text>
  <text x="38" y="108" text-anchor="end" fill="#64748b" font-size="9">50</text>
  <text x="38" y="48" text-anchor="end" fill="#64748b" font-size="9">100</text>

  <!-- Bars: heights scaled so 9 = full height = 120px -->
  <!-- m/z 70: ³⁵Cl-³⁵Cl  height 120 (9 units) -->
  <rect x="85" y="45" width="40" height="120" fill="#3b82f6" opacity="0.85" rx="2"/>
  <text x="105" y="40" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">9</text>
  <text x="105" y="180" text-anchor="middle" fill="#334155">70</text>
  <text x="105" y="192" text-anchor="middle" fill="#64748b" font-size="9">³⁵Cl-³⁵Cl</text>

  <!-- m/z 72: ³⁵Cl-³⁷Cl  height 80 (6 units) -->
  <rect x="160" y="85" width="40" height="80" fill="#7c3aed" opacity="0.85" rx="2"/>
  <text x="180" y="80" text-anchor="middle" fill="#5b21b6" font-weight="bold" font-size="10">6</text>
  <text x="180" y="180" text-anchor="middle" fill="#334155">72</text>
  <text x="180" y="192" text-anchor="middle" fill="#64748b" font-size="9">³⁵Cl-³⁷Cl</text>

  <!-- m/z 74: ³⁷Cl-³⁷Cl  height ~13 (1 unit) -->
  <rect x="235" y="152" width="40" height="13" fill="#dc2626" opacity="0.85" rx="2"/>
  <text x="255" y="148" text-anchor="middle" fill="#b91c1c" font-weight="bold" font-size="10">1</text>
  <text x="255" y="180" text-anchor="middle" fill="#334155">74</text>
  <text x="255" y="192" text-anchor="middle" fill="#64748b" font-size="9">³⁷Cl-³⁷Cl</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-diatomic-intro',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Diatomic Elements Show Extra Peaks',
        text: 'Elements like Cl and Br exist as <strong>diatomic molecules</strong> (Cl₂, Br₂). When the molecule is ionised in the mass spectrometer, the <strong>whole molecule</strong> can be detected, not just individual atoms. This means the spectrum shows peaks for:<br/>1. Individual isotopic atoms (e.g., ³⁵Cl and ³⁷Cl at m/z 35 and 37)<br/>2. Molecular ion combinations (e.g., ³⁵Cl³⁵Cl⁺, ³⁵Cl³⁷Cl⁺, ³⁷Cl³⁷Cl⁺) at higher m/z values<br/><br/>For Cl₂, the three molecular ion peaks appear at <strong>m/z = 70, 72 and 74</strong>.'
      },
      terms: ['Diatomic mass spectrum']
    },
    {
      id: 'callout-cl2-peaks',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cl₂ — Identifying the Five Peaks',
        text: '<strong>Atomic peaks:</strong><br/>m/z = 35 → ³⁵Cl⁺<br/>m/z = 37 → ³⁷Cl⁺<br/><br/><strong>Molecular ion peaks (from diatomic Cl₂):</strong><br/>m/z = 70 → ³⁵Cl – ³⁵Cl (both atoms are Cl-35)<br/>m/z = 72 → ³⁵Cl – ³⁷Cl (one of each; can be picked either way)<br/>m/z = 74 → ³⁷Cl – ³⁷Cl (both atoms are Cl-37)'
      },
      terms: []
    },
    {
      id: 'h-peak-ratio',
      type: 'heading',
      data: { text: 'Calculating Peak Height Ratios (Probability Method)', level: 2 },
      terms: []
    },
    {
      id: 'callout-cl2-ratio',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Cl₂ Peak Height Ratio: 9 : 6 : 1',
        text: '<strong>Chlorine: ³⁵Cl = 75% (chance = 3/4), ³⁷Cl = 25% (chance = 1/4)</strong><br/><br/>Chance of getting ³⁵Cl–³⁵Cl (m/z 70):<br/>= 3/4 × 3/4 = <strong>9/16</strong><br/><br/>Chance of getting ³⁵Cl–³⁷Cl (m/z 72):<br/>= 3/4 × 1/4 = 3/16, but can pick in either order (35–37 or 37–35), so × 2 = <strong>6/16</strong><br/><br/>Chance of getting ³⁷Cl–³⁷Cl (m/z 74):<br/>= 1/4 × 1/4 = <strong>1/16</strong><br/><br/>Peak height ratio (70 : 72 : 74) = 9 : 6 : 1<br/><br/><em>Remember: The "mixed" combination (72) is multiplied by 2 because the two isotopes can be chosen in either order.</em>'
      },
      terms: []
    },
    {
      id: 'callout-br2-ratio',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Br₂ Peak Height Ratio: 1 : 2 : 1',
        text: '<strong>Bromine: ⁷⁹Br ≈ 50% (chance = 1/2), ⁸¹Br ≈ 50% (chance = 1/2)</strong><br/><br/>Chance of ⁷⁹Br–⁷⁹Br (m/z 158): 1/2 × 1/2 = <strong>1/4</strong><br/>Chance of ⁷⁹Br–⁸¹Br (m/z 160): 1/2 × 1/2 × 2 (either order) = <strong>2/4 = 1/2</strong><br/>Chance of ⁸¹Br–⁸¹Br (m/z 162): 1/2 × 1/2 = <strong>1/4</strong><br/><br/>Peak height ratio (158 : 160 : 162) = 1 : 2 : 1<br/><br/><em>When two isotopes have equal abundance (50:50), the molecular ion peaks are always in ratio 1:2:1.</em>'
      },
      terms: []
    },
    {
      id: 'h-2plus',
      type: 'heading',
      data: { text: 'Effect of Doubly Charged Ions (2+) on m/z', level: 2 },
      terms: []
    },
    {
      id: 'callout-2plus',
      type: 'callout',
      data: {
        style: 'key',
        title: '2+ Ions and the m/z Value',
        text: 'If an atom loses <strong>two</strong> electrons during ionisation, it forms an M²⁺ ion with charge z = 2.<br/><br/>m/z = mass / charge = mass / 2<br/><br/><strong>Example:</strong> ⁷⁹Br²⁺ → m/z = 79/2 = <strong>39.5</strong><br/>Compare ⁷⁹Br⁺ → m/z = 79/1 = 79<br/><br/>The 2+ ion appears at <em>half the m/z value</em> of the equivalent 1+ ion. On the spectrum it would appear as a peak at a fractional (non-integer) m/z value, which is a tell-tale sign of a doubly charged ion.'
      },
      terms: []
    },
    {
      id: 'h-practice-spec',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-spec1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Bromine Mass Spectrum (Past Paper Style)',
        text: '<strong>Question:</strong> A sample of bromine gas was analysed by mass spectrometry. The mass spectrum showed peaks at m/z = 79 (47%) and m/z = 81 (53%).<br/>(a) Calculate the relative atomic mass of bromine.<br/>(b) Identify the species responsible for peaks at m/z 158, 160 and 162.<br/>(c) State the ratio of the heights of these three peaks.<br/>(d) If a bromine ion were detected with a 2+ charge, what m/z value would ⁷⁹Br²⁺ show?<br/><br/><strong>(a) Relative atomic mass:</strong><br/>Aᵣ = (47 × 79 + 53 × 81) / 100<br/>= (3713 + 4293) / 100 = 8006 / 100 = <strong>80.1</strong><br/><br/><strong>(b) Species for molecular ion peaks:</strong><br/>m/z 158 → ⁷⁹Br–⁷⁹Br⁺ (both Br-79)<br/>m/z 160 → ⁷⁹Br–⁸¹Br⁺ (one of each)<br/>m/z 162 → ⁸¹Br–⁸¹Br⁺ (both Br-81)<br/><br/><strong>(c) Peak height ratio:</strong><br/>Since ⁷⁹Br ≈ ⁸¹Br ≈ 50%, ratio ≈ <strong>1 : 2 : 1</strong><br/>For exact values (47/53 split): ratio = 47²: 2(47)(53): 53² = 2209 : 4982 : 2809 ≈ <strong>approximately 1 : 2 : 1</strong><br/><br/><strong>(d) m/z for ⁷⁹Br²⁺:</strong><br/>m/z = 79/2 = <strong>39.5</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-spec2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Drawing a Cl₂ Mass Spectrum',
        text: '<strong>Question:</strong> Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Sketch the mass spectrum of Cl₂ gas, showing peak positions and relative heights.<br/><br/><strong>Peaks to draw:</strong><br/>1. m/z = 35 (³⁵Cl⁺) — height proportional to 75<br/>2. m/z = 37 (³⁷Cl⁺) — height proportional to 25<br/>3. m/z = 70 (³⁵Cl₂⁺) — height ratio 9 (tallest molecular peak)<br/>4. m/z = 72 (³⁵Cl³⁷Cl⁺) — height ratio 6<br/>5. m/z = 74 (³⁷Cl₂⁺) — height ratio 1 (shortest molecular peak)<br/><br/><strong>Exam tip:</strong> Use a ruler. The examiner checks that 70 is the tallest, 72 is ~2/3 its height, and 74 is ~1/9 its height. Get these ratios correct for full marks.'
      },
      terms: []
    },
    {
      id: 'h-high-res',
      type: 'heading',
      data: { text: 'High Resolution Mass Spectrometry', level: 2 },
      terms: []
    },
    {
      id: 'callout-high-res-intro',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Precision to 5 Decimal Places',
        text: 'Some molecules have the exact same <strong>nominal mass</strong> (mass to 1 d.p.), making them impossible to distinguish on a standard mass spectrum.<br/><br/><strong>High resolution mass spectrometers</strong> measure mass to <strong>3-5 decimal places</strong>, allowing us to differentiate them.<br/><br/><strong>Precise Isotopic Masses:</strong><br/>• ¹H = 1.00794<br/>• ¹²C = 12.00000<br/>• ¹⁴N = 14.00307<br/>• ¹⁶O = 15.99491'
      },
      terms: ['High resolution mass spectrometry']
    },
    {
      id: 'callout-high-res-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Propane vs Carbon Dioxide',
        text: '<strong>Q: How could high resolution mass spectrometry prove that a sample of propane gas (C₃H₈) was contaminated with carbon dioxide (CO₂)?</strong><br/><br/><strong>1. Low Resolution (1 d.p.):</strong><br/>C₃H₈ = (3×12.0) + (8×1.0) = 44.0<br/>CO₂ = 12.0 + (2×16.0) = 44.0<br/><em>They appear as the exact same single peak at m/z = 44.0!</em><br/><br/><strong>2. High Resolution (5 d.p.):</strong><br/>C₃H₈ = 3(12.00000) + 8(1.00794) = <strong>44.06352</strong><br/>CO₂ = 12.00000 + 2(15.99491) = <strong>43.98982</strong><br/><br/><strong>Conclusion:</strong> Two separate, distinct peaks will be seen at the precise m/z values, successfully distinguishing the substances.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'list-stages', prompt: 'List the five stages in a mass spectrometer in order: vaporisation → ? → ? → ? → detection.' },
      { id: 'c-ei-esi', blockId: 'table-ionisation', prompt: 'Compare Electron Impact (EI) and Electrospray Ionisation (ESI). Include the equations for each.' },
      { id: 'c-tof', blockId: 'callout-tof', prompt: 'State the equation for Kinetic Energy and Velocity, and combine them to make Time (t) the subject.' },
      { id: 'c2', blockId: 'callout-mz', prompt: 'What does the m/z ratio represent in a mass spectrum? For a singly-charged ion, what does m/z equal?' },
      { id: 'c3', blockId: 'callout-cl2-peaks', prompt: 'Explain what causes the peaks at m/z = 70, 72 and 74 in the mass spectrum of Cl₂ gas.' },
      { id: 'c4', blockId: 'callout-cl2-ratio', prompt: 'Given that ³⁵Cl = 75% and ³⁷Cl = 25%, show that the molecular ion peaks of Cl₂ are in the ratio 9:6:1.' },
      { id: 'c5', blockId: 'callout-br2-ratio', prompt: 'Explain why the Br₂ molecular ion peaks appear in a 1:2:1 ratio.' },
      { id: 'c6', blockId: 'callout-2plus', prompt: 'A ⁸¹Br ion loses two electrons. What m/z value would it show on the mass spectrum?' },
      { id: 'c7', blockId: 'callout-pq-spec1', prompt: 'Bromine has isotopes: ⁷⁹Br (47%) and ⁸¹Br (53%). (a) Calculate Aᵣ. (b) Identify the three molecular ion peaks. (c) State their peak height ratio.' },
      { id: 'c8', blockId: 'callout-high-res-intro', prompt: 'Explain how high-resolution mass spectrometry can distinguish between propane (C₃H₈) and carbon dioxide (CO₂).' }
    ],
    summaryText: 'Mass spec stages: vaporise → ionise → accelerate → drift/deflect → detect. Ionisation: EI uses electron gun (X → X⁺ + 2e⁻) for atoms/small molecules. ESI uses high voltage needle + solvent to add H⁺ (X + H⁺ → XH⁺) for large molecules. TOF calculation: t = d × √(m / 2KE) where m is mass in kg. m/z for z=1: m/z = isotopic mass. Diatomic spectra (Cl₂): peaks at 70,72,74 in 9:6:1 ratio. (Br₂): 1:2:1 ratio. High resolution measures to 5 d.p. to distinguish molecules with the same nominal Mr.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_2;