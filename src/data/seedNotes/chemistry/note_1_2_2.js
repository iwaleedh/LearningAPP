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
  <rect x="5" y="30" width="110" height="60" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="55" text-anchor="middle" font-weight="bold" fill="#1e40af">1. Vaporisation</text>
  <text x="60" y="72" text-anchor="middle" fill="#1e40af" font-size="10">Sample → gas</text>

  <rect x="135" y="30" width="110" height="60" rx="8" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="190" y="55" text-anchor="middle" font-weight="bold" fill="#5b21b6">2. Ionisation</text>
  <text x="190" y="72" text-anchor="middle" fill="#5b21b6" font-size="10">e⁻ gun → M⁺(g)</text>

  <rect x="265" y="30" width="110" height="60" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="320" y="55" text-anchor="middle" font-weight="bold" fill="#15803d">3. Acceleration</text>
  <text x="320" y="72" text-anchor="middle" fill="#15803d" font-size="10">Electric field</text>

  <rect x="395" y="30" width="110" height="60" rx="8" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="450" y="55" text-anchor="middle" font-weight="bold" fill="#92400e">4. Deflection</text>
  <text x="450" y="72" text-anchor="middle" fill="#92400e" font-size="10">Magnetic field</text>

  <rect x="525" y="30" width="110" height="60" rx="8" fill="#4a1040" stroke="#db2777" stroke-width="1.5"/>
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
      id: 'list-mass-spec-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Operates under a <strong>high vacuum</strong> — prevents ions from colliding with air molecules and being deflected off course.',
          'Separates ions by their <strong>mass-to-charge (m/z) ratio</strong>.',
          'Two main instrument designs: <strong>magnetic sector</strong> (uses a magnetic field to deflect ions by m/z) and <strong>time of flight (TOF)</strong> (measures flight time down a drift tube — lighter ions arrive first).',
          'Sample must be vaporised first; solid and liquid samples are heated to produce a gaseous beam before entering the ionisation chamber.'
        ]
      },
      terms: ['Vacuum', 'Mass spectrometer']
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Vaporisation:</strong> The sample is introduced and heated to produce gaseous atoms or molecules.',
          '<strong>Ionisation (Electron Gun):</strong> The gas is bombarded by a stream of high-energy electrons from an electron gun. This knocks one or more electrons off the sample atoms to form positive ions (predominantly 1+ ions). Ions must be positive so they can be accelerated and deflected.',
          '<strong>Acceleration:</strong> The positive ions are pulled through a series of negatively charged acceleration plates (using a high voltage) to form a tightly focused, fast-moving beam.',
          '<strong>Deflection (Magnetic Field):</strong> The ion beam passes through a varying magnetic field. The field deflects the ions based on their <em>m/z</em> ratio. Lighter ions (smaller mass) and more highly charged ions (e.g. 2+) are deflected more. By slowly varying the magnetic field strength, ions of different <em>m/z</em> values are systematically steered toward the detector.',
          '<strong>Detection (Electron Exchange):</strong> When the focused beam of positive ions strikes the metal detector plate, each ion gains an electron to neutralise its charge. This removal of electrons from the plate creates a measurable electric current in the connecting wire. The size of the current is directly proportional to the abundance of that specific <em>m/z</em> isotope.'
        ]
      },
      terms: ['Mass spectrometer', 'Ionisation', 'Detection']
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
      id: 'list-spectrum',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Each peak on the mass spectrum represents a different <strong>isotope</strong> of the element.',
          'Peak position (m/z value) gives the <strong>relative isotopic mass</strong> of that isotope.',
          'Peak height is directly proportional to the <strong>relative abundance</strong> of that isotope.',
          '<strong>Base peak</strong> — the tallest peak on the spectrum; assigned a relative intensity of <strong>100%</strong>. All other peaks are expressed as a percentage of the base peak height.',
          'Aᵣ is calculated as a weighted average: Σ(isotopic mass × % abundance) ÷ 100.'
        ]
      },
      terms: ['Base peak', 'Relative isotopic mass']
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
      id: 'callout-ar-boron',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Relative Abundance without Percentages (Boron)',
        text: 'Sometimes the y-axis shows raw <strong>relative abundance</strong> instead of percentages. The method is the same, but you divide by the <em>total</em> abundance rather than 100.<br/><br/><strong>Q: Boron shows two peaks: m/z 10 (relative abundance 23) and m/z 11 (relative abundance 100). Calculate Aᵣ.</strong><br/><br/>Total abundance = 23 + 100 = 123<br/><br/>Aᵣ = (10 × 23 + 11 × 100) / 123<br/>= (230 + 1100) / 123<br/>= 1330 / 123<br/>= <strong>10.8</strong> (3 s.f.)'
      },
      terms: []
    },
    {
      id: 'callout-ar-zirconium',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Multiple Isotopes (Zirconium)',
        text: '<strong>Q: A sample of Zirconium (Zr) has five isotopes with the following percentage abundances: ⁹⁰Zr (51.5%), ⁹¹Zr (11.2%), ⁹²Zr (17.1%), ⁹⁴Zr (17.4%), and ⁹⁶Zr (2.8%). Calculate its Aᵣ.</strong><br/><br/>Aᵣ is the sum of (mass × abundance) for all isotopes, divided by 100.<br/><br/>Aᵣ = [(51.5 × 90) + (11.2 × 91) + (17.1 × 92) + (17.4 × 94) + (2.8 × 96)] / 100<br/>= (4635 + 1019.2 + 1573.2 + 1635.6 + 268.8) / 100<br/>= 9131.8 / 100<br/>= <strong>91.3</strong> (3 s.f.)'
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
        svg: `<svg viewBox="0 0 360 215" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Axes -->
  <line x1="45" y1="10" x2="45" y2="165" stroke="#334155" stroke-width="1.5"/>
  <line x1="45" y1="165" x2="340" y2="165" stroke="#334155" stroke-width="1.5"/>

  <!-- Y-axis label -->
  <text x="12" y="90" text-anchor="middle" fill="#64748b" font-size="10" transform="rotate(-90,12,90)">Relative intensity</text>
  <!-- X-axis label -->
  <text x="192" y="210" text-anchor="middle" fill="#64748b" font-size="10">m/z</text>

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
        title: 'Why Diatomic Elements Show Extra Peaks (Fragmentation)',
        text: 'Elements like chlorine exist as <strong>diatomic molecules</strong> (Cl₂). When Cl₂ enters the ionisation chamber, an electron is knocked off to form a <strong>molecular ion</strong> (Cl₂⁺):<br/><br/>Cl₂(g) + e⁻ → Cl₂⁺(g) + 2e⁻<br/><br/>These Cl₂⁺ ions are not completely stable. Some of them fall apart (<strong>fragmentation</strong>) to give a chlorine atom and a Cl⁺ ion:<br/><br/>Cl₂⁺(g) → Cl⁺(g) + Cl(g)<br/><br/>The neutral Cl atom gets lost in the machine, but the Cl⁺ and Cl₂⁺ ions are both accelerated and detected. This means the spectrum shows peaks for:<br/>1. <strong>Fragment ions</strong> (individual isotopic atoms, e.g., ³⁵Cl⁺ and ³⁷Cl⁺ at <em>m/z</em> 35 and 37)<br/>2. <strong>Molecular ions</strong> (unfragmented molecules, e.g., ³⁵Cl³⁵Cl⁺, ³⁵Cl³⁷Cl⁺, ³⁷Cl³⁷Cl⁺) at higher <em>m/z</em> values<br/><br/>For Cl₂, the three molecular ion peaks appear at <strong>m/z = 70, 72 and 74</strong>.'
      },
      terms: ['Diatomic mass spectrum', 'Fragmentation']
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
        text: 'If an atom loses <strong>two</strong> electrons during ionisation, it forms an M²⁺ ion with charge <em>z</em> = 2.<br/><br/><em>m/z</em> = mass / charge = mass / 2<br/><br/><strong>Example:</strong> ⁷⁹Br²⁺ → <em>m/z</em> = 79/2 = <strong>39.5</strong><br/>Compare ⁷⁹Br⁺ → <em>m/z</em> = 79/1 = 79<br/><br/>Because their <em>m/z</em> is halved, 2+ ions are <strong>deflected twice as much</strong> by the magnetic field as their 1+ counterparts.<br/><br/>The 2+ ion appears at <em>half the m/z value</em> of the equivalent 1+ ion. On the spectrum, it would appear as a peak at a fractional (non-integer) <em>m/z</em> value, which is a tell-tale sign of a doubly charged ion.'
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
    },
    {
      id: 'svg-ms-ar-pipeline',
      type: 'svg',
      data: {
        caption: 'Cross-topic pipeline: from TOF mass spectrometer stages (this note) to reading a spectrum and calculating Aᵣ from isotope abundances (links to Isotopes & Relative Atomic Mass).',
        svg: `<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <defs>
    <marker id="arr-v" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M1,0 L3,5 L5,0 Z" fill="#6366f1"/></marker>
    <marker id="arr-h" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7 Z" fill="#374151"/></marker>
  </defs>
  <rect x="8" y="8" width="172" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="8" y="8" width="172" height="28" rx="8" fill="#6366f1" fill-opacity="0.5"/>
  <rect x="8" y="26" width="172" height="10" fill="#6366f1" fill-opacity="0.5"/>
  <text x="94" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">TOF Stages</text>
  <rect x="18" y="46" width="152" height="32" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="94" y="59" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">① Vaporise</text>
  <text x="94" y="71" text-anchor="middle" font-size="9" fill="#374151">Sample converted to gas phase</text>
  <line x1="94" y1="78" x2="94" y2="90" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-v)"/>
  <rect x="18" y="90" width="152" height="32" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="94" y="103" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">② Ionise</text>
  <text x="94" y="115" text-anchor="middle" font-size="9" fill="#374151">EI or ESI → M⁺ ions formed</text>
  <line x1="94" y1="122" x2="94" y2="134" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-v)"/>
  <rect x="18" y="134" width="152" height="32" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="94" y="147" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">③ Accelerate</text>
  <text x="94" y="159" text-anchor="middle" font-size="9" fill="#374151">Electric field → same KE</text>
  <line x1="94" y1="166" x2="94" y2="178" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-v)"/>
  <rect x="18" y="178" width="152" height="32" rx="5" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="94" y="191" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">④ Drift / Deflect</text>
  <text x="94" y="203" text-anchor="middle" font-size="9" fill="#374151">Lighter ions arrive faster</text>
  <line x1="94" y1="210" x2="94" y2="222" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr-v)"/>
  <rect x="18" y="222" width="152" height="32" rx="5" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="94" y="235" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">⑤ Detect &amp; Process</text>
  <text x="94" y="247" text-anchor="middle" font-size="9" fill="#374151">t → m/z → spectrum + Aᵣ</text>
  <line x1="188" y1="150" x2="208" y2="150" stroke="#374151" stroke-width="2.5" marker-end="url(#arr-h)"/>
  <rect x="212" y="8" width="196" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="212" y="8" width="196" height="28" rx="8" fill="#78350f" fill-opacity="0.5"/>
  <rect x="212" y="26" width="196" height="10" fill="#78350f" fill-opacity="0.5"/>
  <text x="310" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Mass Spectrum: Neon</text>
  <line x1="245" y1="42" x2="245" y2="202" stroke="#374151" stroke-width="1.5"/>
  <line x1="245" y1="202" x2="392" y2="202" stroke="#374151" stroke-width="1.5"/>
  <text x="243" y="200" text-anchor="end" font-size="8" fill="#6b7280">0</text>
  <text x="243" y="165" text-anchor="end" font-size="8" fill="#6b7280">50</text>
  <text x="243" y="128" text-anchor="end" font-size="8" fill="#6b7280">100</text>
  <line x1="245" y1="165" x2="392" y2="165" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="245" y1="128" x2="392" y2="128" stroke="#f1f5f9" stroke-width="1"/>
  <text x="310" y="218" text-anchor="middle" font-size="9" fill="#374151">m/z</text>
  <rect x="263" y="57" width="22" height="145" fill="#6366f1" opacity="0.65"/>
  <text x="274" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#3730a3">90.5%</text>
  <text x="274" y="214" text-anchor="middle" font-size="9" fill="#374151" font-weight="bold">20</text>
  <rect x="308" y="199" width="22" height="3" fill="#6366f1" opacity="0.65"/>
  <text x="319" y="193" text-anchor="middle" font-size="8" fill="#3730a3">0.3%</text>
  <text x="319" y="214" text-anchor="middle" font-size="9" fill="#374151" font-weight="bold">21</text>
  <rect x="356" y="184" width="22" height="18" fill="#6366f1" opacity="0.65"/>
  <text x="367" y="179" text-anchor="middle" font-size="9" font-weight="bold" fill="#3730a3">9.2%</text>
  <text x="367" y="214" text-anchor="middle" font-size="9" fill="#374151" font-weight="bold">22</text>
  <text x="310" y="234" text-anchor="middle" font-size="9" fill="#374151">Base peak = tallest bar (m/z 20)</text>
  <text x="310" y="248" text-anchor="middle" font-size="9" fill="#6b7280">Rel. intensity = height relative to base peak</text>
  <text x="310" y="263" text-anchor="middle" font-size="9" fill="#6b7280">²⁰Ne · ²¹Ne · ²²Ne are 3 stable isotopes</text>
  <line x1="416" y1="150" x2="436" y2="150" stroke="#374151" stroke-width="2.5" marker-end="url(#arr-h)"/>
  <rect x="440" y="8" width="172" height="284" rx="8" fill="#0f172a" stroke="#e5e7eb" stroke-width="1"/>
  <rect x="440" y="8" width="172" height="28" rx="8" fill="#065f46" fill-opacity="0.5"/>
  <rect x="440" y="26" width="172" height="10" fill="#065f46" fill-opacity="0.5"/>
  <text x="526" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Aᵣ Calculation</text>
  <rect x="450" y="42" width="152" height="40" rx="5" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="526" y="56" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Aᵣ = Σ(mass × abundance)</text>
  <text x="526" y="70" text-anchor="middle" font-size="10" fill="#065f46">            Σ(abundances)</text>
  <text x="450" y="98" font-size="10" font-weight="bold" fill="#374151">Worked: Neon</text>
  <line x1="450" y1="103" x2="602" y2="103" stroke="#e2e8f0" stroke-width="1"/>
  <text x="450" y="118" font-size="9" fill="#374151">= (20×90.5) + (21×0.3) + (22×9.2)</text>
  <text x="450" y="132" font-size="9" fill="#374151">        90.5 + 0.3 + 9.2</text>
  <line x1="450" y1="138" x2="602" y2="138" stroke="#e2e8f0" stroke-width="1"/>
  <text x="450" y="153" font-size="9" fill="#374151">= 1810 + 6.3 + 202.4</text>
  <text x="450" y="167" font-size="9" fill="#374151">         100</text>
  <line x1="450" y1="173" x2="602" y2="173" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="450" y="178" width="152" height="24" rx="4" fill="#0a2e1a"/>
  <text x="526" y="194" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Aᵣ(Ne) = 20.2</text>
  <rect x="450" y="210" width="152" height="36" rx="5" fill="#44370a"/>
  <text x="526" y="223" text-anchor="middle" font-size="9" font-weight="bold" fill="#713f12">Check: Aᵣ must lie between</text>
  <text x="526" y="235" text-anchor="middle" font-size="9" fill="#713f12">lightest (20) and heaviest (22)</text>
  <text x="526" y="247" text-anchor="middle" font-size="9" fill="#065f46">✓ 20.2 is within range</text>
  <text x="526" y="270" text-anchor="middle" font-size="9" fill="#6b7280">If %s given: divide by 100 first</text>
  <text x="526" y="283" text-anchor="middle" font-size="9" fill="#6b7280">OR use % directly if ÷100 cancels</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'checklist-1-2-2',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the five stages of a mass spectrometer in order (vaporise → ionise → accelerate → deflect/drift → detect)', checked: false },
          { text: 'Compare EI and ESI ionisation: write the equations and state which is used for large organic molecules', checked: false },
          { text: 'Use t = d × √(m / 2KE) to calculate the time of flight of an ion, converting molar mass to kg per atom', checked: false },
          { text: 'Explain what m/z represents and calculate Aᵣ from % abundances and from raw relative abundances', checked: false },
          { text: 'Identify the base peak and explain what relative intensity means', checked: false },
          { text: 'Explain why Cl₂ shows five peaks (m/z 35, 37, 70, 72, 74) and assign species to each', checked: false },
          { text: 'Calculate the 9:6:1 ratio for Cl₂ and the 1:2:1 ratio for Br₂ using the probability method', checked: false },
          { text: 'Explain how a 2+ ion changes the observed m/z value and give an example', checked: false },
          { text: 'Explain how high-resolution mass spectrometry distinguishes molecules with the same nominal mass (e.g. C₃H₈ vs CO₂)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Mass spectrometer stages: vaporise → ionise → accelerate → deflect/drift → detect; high vacuum throughout. EI ionisation: X(g) + e⁻ → X⁺(g) + 2e⁻. ESI: X(l) + H⁺ → XH⁺(g) (peak at mass + 1). TOF equation: t = d√(m / 2KE); lighter ions travel faster and arrive first. Each m/z peak = one isotope; peak height ∝ abundance; tallest peak = base peak (100%). Aᵣ = Σ(mass × % abundance) ÷ 100. Diatomic elements show both fragment ion peaks and molecular ion peaks: Cl₂ gives peaks at m/z 35, 37, 70, 72, 74 — molecular ions in ratio 9:6:1. Br₂ molecular ions (158, 160, 162) in ratio 1:2:1. 2+ ions appear at half the m/z of equivalent 1+ ions (fractional m/z). High-resolution mass spectrometry measures exact mass to 5 d.p., distinguishing molecules with the same nominal mass.'
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
      { id: 'c-calc-abundance', blockId: 'callout-ar-boron', prompt: 'How do you calculate Aᵣ if you are given raw relative abundances instead of percentages?' },
      { id: 'c3', blockId: 'callout-cl2-peaks', prompt: 'Explain the fragmentation of Cl₂ in a mass spectrometer. What causes the peaks at m/z = 35, 37, 70, 72 and 74?' },
      { id: 'c4', blockId: 'callout-cl2-ratio', prompt: 'Given that ³⁵Cl = 75% and ³⁷Cl = 25%, show that the molecular ion peaks of Cl₂ are in the ratio 9:6:1.' },
      { id: 'c5', blockId: 'callout-br2-ratio', prompt: 'Explain why the Br₂ molecular ion peaks appear in a 1:2:1 ratio.' },
      { id: 'c6', blockId: 'callout-2plus', prompt: 'A ⁸¹Br ion loses two electrons. What m/z value would it show on the mass spectrum?' },
      { id: 'c7', blockId: 'callout-pq-spec1', prompt: 'Bromine has isotopes: ⁷⁹Br (47%) and ⁸¹Br (53%). (a) Calculate Aᵣ. (b) Identify the three molecular ion peaks. (c) State their peak height ratio.' },
      { id: 'c8', blockId: 'callout-high-res-intro', prompt: 'Explain how high-resolution mass spectrometry can distinguish between propane (C₃H₈) and carbon dioxide (CO₂).' }
    ],
    summaryText: 'Mass spec stages: vaporise → ionise → accelerate → drift/deflect → detect. Ionisation: EI (electron gun, X → X⁺ + 2e⁻). ESI (high voltage needle + solvent, X + H⁺ → XH⁺). TOF calculation: t = d × √(m / 2KE) where m is mass in kg. m/z for z=1 equals isotopic mass. Aᵣ is weighted average of isotopic masses. Diatomic spectra (Cl₂): fragmentation yields atomic ions (35, 37) and molecular unfragmented ions (70,72,74) in 9:6:1 ratio. High-res measures to 5 d.p.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_2;