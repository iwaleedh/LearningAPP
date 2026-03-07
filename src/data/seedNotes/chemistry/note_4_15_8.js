export const note_chemistry_4_15_8 = {
  blocks: [
    // ── Objective ──────────────────────────────────────────────────────────
    {
      id: 'obj-nmr',
      type: 'objective',
      data: {
        text: 'Interpret ¹³C NMR and ¹H NMR spectra to identify carbon/proton environments, chemical shifts, integration ratios, and splitting patterns. Apply the n+1 rule to predict or explain splitting. Determine molecular structures from NMR data (IAL IA2, Topic 15e).'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 1 — WHAT IS NMR?
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-what-is-nmr',
      type: 'heading',
      data: { text: 'What is NMR Spectroscopy?', level: 2 }
    },
    {
      id: 'list-nmr-overview',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>NMR = Nuclear Magnetic Resonance</strong> — a spectroscopic technique that identifies the chemical environments of specific atoms (¹³C or ¹H) in a molecule',
          'Provides detailed structural information — used alongside IR spectroscopy and mass spectrometry',
          'Medical application: the same technology is used in <strong>MRI (Magnetic Resonance Imaging)</strong> machines',
          '<strong>Principle:</strong> nuclei with an odd number of nucleons (protons + neutrons) have a residual spin, creating a tiny magnetic field — these nuclei behave like microscopic magnets',
          'In an external magnetic field, these nuclei can either <em>align with</em> or <em>oppose</em> the field, creating two energy states',
          'When the nuclei absorb electromagnetic radiation (radio-frequency), they flip between energy states — different nuclei absorb at different frequencies, producing a detectable signal',
          'Each unique chemical environment gives a distinct signal — this information is displayed as a <strong>spectrum</strong>',
          '<strong>Note:</strong> You do NOT need to know the mechanism of NMR for the exam — focus on interpreting the spectrum'
        ]
      }
    },

    // ── Applications callout ─────────────────────────────────────────────
    {
      id: 'callout-nmr-uses',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 NMR in Context',
        text: 'NMR is particularly powerful for organic structure determination:\n• ¹³C NMR → identifies number of different carbon environments → reveals carbon skeleton\n• ¹H NMR → identifies number of different proton environments, integration (ratio of H atoms), and splitting patterns (neighbours)\n• Used together with IR (functional groups) and MS (Mr, fragmentation) for full structure determination'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 2 — THE NMR SPECTRUM & STANDARD CONDITIONS
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-spectrum-conditions',
      type: 'heading',
      data: { text: 'The NMR Spectrum, Solvent & Reference Standard', level: 2 }
    },
    {
      id: 'list-spectrum-features',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Output:</strong> a horizontal baseline with vertical peaks (signals) — visualised as a spectrum',
          '<strong>y-axis:</strong> absorption (intensity of signal)',
          '<strong>x-axis:</strong> chemical shift (δ) measured in <strong>ppm</strong> (parts per million)',
          '<strong>NMR convention:</strong> δ increases from right to left — high δ values (downfield) are on the LEFT; low δ values (upfield) are on the RIGHT',
          '<strong>Downfield (high δ):</strong> proton/carbon is deshielded — electron density around nucleus is reduced → absorbs at higher field',
          '<strong>Upfield (low δ):</strong> proton/carbon is shielded — higher electron density around nucleus'
        ]
      }
    },

    // ── NMR Spectrum concept SVG ─────────────────────────────────────────
    {
      id: 'svg-nmr-spectrum-concept',
      type: 'svg',
      data: {
        caption: 'NMR spectrum concept: δ axis goes from high values (left, downfield/deshielded) to 0 (right, upfield/shielded). TMS reference peak is at δ = 0.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 195" font-family="Arial,sans-serif">
  <rect width="560" height="195" fill="#f8f9fa" rx="8"/>
  <text x="280" y="20" font-size="13" fill="#222" font-weight="bold" text-anchor="middle">NMR Spectrum — Chemical Shift (δ) Axis</text>
  <!-- Y axis -->
  <line x1="52" y1="32" x2="52" y2="148" stroke="#444" stroke-width="2"/>
  <!-- Baseline -->
  <line x1="52" y1="148" x2="520" y2="148" stroke="#444" stroke-width="2"/>
  <!-- Arrow on x-axis -->
  <polygon points="520,144 520,152 528,148" fill="#444"/>
  <!-- Y axis label -->
  <text x="19" y="100" font-size="10" fill="#555" transform="rotate(-90,19,100)" text-anchor="middle">Absorption</text>
  <text x="52" y="29" font-size="10" fill="#555">↑</text>
  <!-- x-axis labels: 200 left → 0 right -->
  <text x="60" y="163" font-size="9.5" fill="#555" text-anchor="middle">200</text>
  <text x="130" y="163" font-size="9.5" fill="#555" text-anchor="middle">160</text>
  <text x="210" y="163" font-size="9.5" fill="#555" text-anchor="middle">120</text>
  <text x="290" y="163" font-size="9.5" fill="#555" text-anchor="middle">80</text>
  <text x="370" y="163" font-size="9.5" fill="#555" text-anchor="middle">40</text>
  <text x="445" y="163" font-size="9.5" fill="#555" text-anchor="middle">5</text>
  <text x="510" y="163" font-size="9.5" fill="#555" text-anchor="middle">0</text>
  <!-- tick marks -->
  <line x1="130" y1="146" x2="130" y2="151" stroke="#555" stroke-width="1"/>
  <line x1="210" y1="146" x2="210" y2="151" stroke="#555" stroke-width="1"/>
  <line x1="290" y1="146" x2="290" y2="151" stroke="#555" stroke-width="1"/>
  <line x1="370" y1="146" x2="370" y2="151" stroke="#555" stroke-width="1"/>
  <line x1="445" y1="146" x2="445" y2="151" stroke="#555" stroke-width="1"/>
  <line x1="510" y1="146" x2="510" y2="151" stroke="#555" stroke-width="1"/>
  <!-- δ (ppm) label -->
  <text x="280" y="177" font-size="11" fill="#333" text-anchor="middle">δ / ppm</text>
  <!-- Downfield / Upfield arrows -->
  <text x="52" y="188" font-size="10" fill="#cc3333">← Downfield (deshielded)</text>
  <text x="370" y="188" font-size="10" fill="#3355bb">Upfield (shielded) →</text>
  <!-- TMS reference peak at δ≈0 -->
  <rect x="507" y="58" width="7" height="90" fill="#aaa" rx="1"/>
  <text x="510" y="53" font-size="8.5" fill="#777" text-anchor="middle">TMS</text>
  <text x="510" y="44" font-size="8.5" fill="#777" text-anchor="middle">δ=0</text>
  <!-- Sample peak: C=O aldehyde/ketone near 200 ppm -->
  <rect x="57" y="68" width="9" height="80" fill="#e05050" rx="1"/>
  <text x="61" y="62" font-size="8" fill="#e05050" text-anchor="middle">C=O</text>
  <!-- Sample peak: C=C alkene near 130 ppm -->
  <rect x="204" y="80" width="9" height="68" fill="#e08020" rx="1"/>
  <text x="208" y="74" font-size="8" fill="#e08020" text-anchor="middle">C=C</text>
  <!-- Sample peak: C-O alcohol near 65 ppm -->
  <rect x="318" y="102" width="9" height="46" fill="#22aa44" rx="1"/>
  <text x="322" y="96" font-size="8" fill="#22aa44" text-anchor="middle">C–O</text>
  <!-- Sample peak: C-C alkane near 25 ppm -->
  <rect x="393" y="112" width="9" height="36" fill="#3355cc" rx="1"/>
  <text x="397" y="106" font-size="8" fill="#3355cc" text-anchor="middle">C–C</text>
</svg>`
      }
    },

    // ── Solvent and TMS ──────────────────────────────────────────────────
    {
      id: 'h-solvent-tms',
      type: 'heading',
      data: { text: 'Solvent (CDCl₃) and Reference Standard (TMS)', level: 3 }
    },
    {
      id: 'list-solvent-tms',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Sample preparation:</strong> compound is dissolved in a solvent before NMR analysis',
          '<strong>Problem with ordinary solvents:</strong> water, ethanol, hexane etc. all contain C and H — these would give signals that interfere with the spectrum',
          '<strong>Solution:</strong> use <strong>CDCl₃</strong> (deuterated chloroform) — the D (deuterium) is a heavy isotope of hydrogen (mass number 2 instead of 1) and does NOT give a ¹H NMR signal',
          'The small CDCl₃ carbon signal is distinctive and is automatically removed by the NMR spectrometer',
          '<strong>Reference standard = TMS</strong> (tetramethylsilane, Si(CH₃)₄ — silicon bonded to four methyl groups)',
          'All C and H atoms in TMS are <em>identical</em> → gives one very strong, sharp signal at <strong>δ = 0 ppm</strong>',
          'TMS is chemically unreactive, so it does not react with the sample',
          'All other signals in the sample are measured relative to TMS — this is why we call it <strong>chemical shift</strong>'
        ]
      }
    },
    {
      id: 'callout-tms-key',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Why TMS is the Perfect Reference',
        text: 'Si(CH₃)₄ has:\n• 12 identical protons + 4 identical carbons → ONE strong signal for each spectrum type\n• Signal at δ = 0 → all sample peaks appear at higher δ (positive values)\n• Chemically inert → no interference with sample\n• Low boiling point → easily removed after experiment'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 3 — ¹³C NMR SPECTROSCOPY
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-c13-nmr',
      type: 'heading',
      data: { text: '¹³C NMR Spectroscopy', level: 2 }
    },
    {
      id: 'list-c13-principles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Measures the chemical environments of <strong>carbon-13 atoms</strong> in a molecule',
          'Spectrum: a horizontal baseline with vertical peaks — each peak corresponds to a different carbon environment',
          '<strong>Number of peaks = number of different carbon environments</strong> (NOT necessarily the number of carbon atoms)',
          'Carbons are in the same environment if they are bonded to exactly the same types of atoms/groups',
          '<strong>Position (chemical shift δ):</strong> reveals the type of carbon environment (compare to data book table)',
          '<strong>Peak height:</strong> proportional to the number of carbons in that environment — if two carbons are identical, their combined peak is taller'
        ]
      }
    },

    // ── ¹³C chemical shift table ─────────────────────────────────────────
    {
      id: 'h-c13-shifts',
      type: 'heading',
      data: { text: '¹³C Chemical Shift Table (Data Book, Page 8)', level: 3 }
    },
    {
      id: 'table-c13-shifts',
      type: 'comparisonTable',
      data: {
        headers: ['Carbon environment', 'δ / ppm', 'Example compound'],
        rows: [
          ['<strong>C–C</strong> (alkane / alkyl)', '5–60', 'CH₃CH₂CH₃'],
          ['<strong>C–N</strong>', '35–62', '(CH₃)₃N'],
          ['<strong>C–O</strong> (alcohol, ether)', '50–80', 'CH₃CH₂OH (C attached to OH)'],
          ['<strong>C=C</strong> (alkene)', '120–140', 'CH₂=CH₂'],
          ['<strong>COO</strong> (ester or carboxylic acid)', '160–185', 'CH₃COOH'],
          ['<strong>C=O</strong> (aldehyde or ketone)', '190–220', 'CH₃CHO, CH₃COCH₃']
        ],
        caption: '¹³C NMR chemical shift ranges — from Edexcel data book p.8. Carbonyl C=O (aldehyde/ketone) has the highest shift.'
      }
    },

    // ── ¹³C Chemical Shift Range Map (SVG) ───────────────────────────────
    {
      id: 'svg-c13-shift-map',
      type: 'svg',
      data: {
        caption: '¹³C NMR chemical shift map — colour-coded horizontal bars show the δ range for each type of carbon environment. δ axis runs from 0 (right) to 220 (left), following NMR convention.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" font-family="Arial,sans-serif">
  <rect width="560" height="240" fill="#f8f9fa" rx="8"/>
  <text x="280" y="20" font-size="13" fill="#222" font-weight="bold" text-anchor="middle">¹³C NMR Chemical Shift Map</text>
  <!-- Scale: 0 ppm at x=500, 220 ppm at x=60 → scale=440/220=2px per ppm -->
  <!-- x(ppm) = 500 - ppm*2 -->
  <!-- Axis line -->
  <line x1="60" y1="210" x2="508" y2="210" stroke="#444" stroke-width="2"/>
  <polygon points="508,206 508,214 516,210" fill="#444"/>
  <!-- Axis tick marks and labels -->
  <line x1="60" y1="208" x2="60" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="60" y="225" font-size="9.5" fill="#444" text-anchor="middle">220</text>
  <line x1="140" y1="208" x2="140" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="140" y="225" font-size="9.5" fill="#444" text-anchor="middle">180</text>
  <line x1="220" y1="208" x2="220" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="220" y="225" font-size="9.5" fill="#444" text-anchor="middle">140</text>
  <line x1="300" y1="208" x2="300" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="300" y="225" font-size="9.5" fill="#444" text-anchor="middle">100</text>
  <line x1="380" y1="208" x2="380" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="380" y="225" font-size="9.5" fill="#444" text-anchor="middle">60</text>
  <line x1="460" y1="208" x2="460" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="460" y="225" font-size="9.5" fill="#444" text-anchor="middle">20</text>
  <line x1="500" y1="208" x2="500" y2="214" stroke="#444" stroke-width="1.5"/>
  <text x="500" y="225" font-size="9.5" fill="#444" text-anchor="middle">0</text>
  <!-- Axis label -->
  <text x="280" y="238" font-size="10" fill="#333" text-anchor="middle">δ / ppm →</text>
  <!-- Row 1: C=O aldehyde/ketone 190-220 → x=500-190*2=120 to x=500-220*2=60 -->
  <rect x="60" y="36" width="60" height="22" fill="#e05050" rx="3"/>
  <text x="90" y="52" font-size="9" fill="white" text-anchor="middle" font-weight="bold">190–220</text>
  <text x="30" y="51" font-size="9.5" fill="#333" text-anchor="middle">C=O</text>
  <text x="30" y="63" font-size="8.5" fill="#555" text-anchor="middle">ald/ket</text>
  <!-- Row 2: COO ester/acid 160-185 → x=500-185*2=130 to x=500-160*2=180 -->
  <rect x="130" y="68" width="50" height="22" fill="#e06820" rx="3"/>
  <text x="155" y="84" font-size="9" fill="white" text-anchor="middle" font-weight="bold">160–185</text>
  <text x="30" y="83" font-size="9.5" fill="#333" text-anchor="middle">COO</text>
  <text x="30" y="95" font-size="8.5" fill="#555" text-anchor="middle">ester/acid</text>
  <!-- Row 3: C=C alkene 120-140 → x=500-140*2=220 to x=500-120*2=260 -->
  <rect x="220" y="100" width="40" height="22" fill="#e0aa00" rx="3"/>
  <text x="240" y="116" font-size="9" fill="white" text-anchor="middle" font-weight="bold">120–140</text>
  <text x="30" y="115" font-size="9.5" fill="#333" text-anchor="middle">C=C</text>
  <text x="30" y="127" font-size="8.5" fill="#555" text-anchor="middle">alkene</text>
  <!-- Row 4: C-O alcohol 50-80 → x=500-80*2=340 to x=500-50*2=400 -->
  <rect x="340" y="132" width="60" height="22" fill="#22aa44" rx="3"/>
  <text x="370" y="148" font-size="9" fill="white" text-anchor="middle" font-weight="bold">50–80</text>
  <text x="30" y="147" font-size="9.5" fill="#333" text-anchor="middle">C–O</text>
  <text x="30" y="159" font-size="8.5" fill="#555" text-anchor="middle">alcohol</text>
  <!-- Row 5: C-N 35-62 → x=500-62*2=376 to x=500-35*2=430 -->
  <rect x="376" y="164" width="54" height="22" fill="#6644bb" rx="3"/>
  <text x="403" y="180" font-size="9" fill="white" text-anchor="middle" font-weight="bold">35–62</text>
  <text x="30" y="179" font-size="9.5" fill="#333" text-anchor="middle">C–N</text>
  <!-- Row 6: C-C alkane 5-60 → x=500-60*2=380 to x=500-5*2=490 -->
  <rect x="380" y="196" width="110" height="0" fill="none"/>
  <rect x="380" y="187" width="110" height="0" fill="none"/>
  <!-- Actually draw it properly -->
  <rect x="380" y="188" width="110" height="17" fill="#3355cc" rx="3" opacity="0.85"/>
  <text x="435" y="201" font-size="9" fill="white" text-anchor="middle" font-weight="bold">5–60</text>
  <text x="30" y="200" font-size="9.5" fill="#333" text-anchor="middle">C–C</text>
  <text x="30" y="212" font-size="8.5" fill="#555" text-anchor="middle">alkane</text>
</svg>`
      }
    },

    // ── Counting carbon environments ────────────────────────────────────
    {
      id: 'h-c13-environments',
      type: 'heading',
      data: { text: 'Counting Carbon Environments', level: 3 }
    },
    {
      id: 'callout-c13-environments',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 When Are Two Carbons in the Same Environment?',
        text: 'Two carbon atoms are in the SAME environment if they are connected to exactly the same atoms/groups.\n\nExamples:\n• Propan-2-ol: CH₃–CHOH–CH₃ → both CH₃ groups are identical (each bonded to CHOH on one side only) → 2 environments total\n• Propan-1-ol: CH₃–CH₂–CH₂OH → all three carbons are different → 3 environments\n• Symmetrical molecules always have fewer environments — look for a mirror plane'
      }
    },

    // ── Worked Example 1: propan-1-ol ────────────────────────────────────
    {
      id: 'callout-c13-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 1 — ¹³C NMR of Propan-1-ol (CH₃CH₂CH₂OH)',
        text: 'Step 1: Label each carbon.\n  Carbon A = CH₃ (bonded to CH₂ only)\n  Carbon B = middle CH₂ (bonded to CH₃ and CH₂OH)\n  Carbon C = CH₂OH (bonded to CH₂ and OH)\n\nStep 2: Each carbon is in a DIFFERENT environment → 3 peaks\n\nStep 3: Assign peaks using chemical shift table:\n  • Carbon C (bonded to OH): C–O type → δ ≈ 50–80 → peak at ~65 ppm ✓\n  • Carbons A and B: C–C alkane type → δ = 5–60 → peaks at ~10 ppm and ~25 ppm\n  • B is closer to the C–OH carbon → slightly higher δ than A (~25 ppm)\n  • A (furthest from OH) → lowest δ (~10 ppm)\n\nPeak ratio: 1:1:1 (all peaks same height — one carbon per environment)'
      }
    },

    // ── Worked Example 2: propan-2-ol ────────────────────────────────────
    {
      id: 'callout-c13-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 2 — ¹³C NMR of Propan-2-ol (CH₃CHOHCH₃)',
        text: 'Step 1: Identify environments.\n  Carbons A = both CH₃ groups — IDENTICAL (both bonded to CHOH, nothing else)\n  Carbon B = CHOH (central carbon — bonded to two CH₃ groups and OH)\n\nStep 2: Only 2 environments → 2 peaks\n\nStep 3: Assign peaks:\n  • Carbon B (C–OH): δ ≈ 50–80 → peak at ~65 ppm\n  • Carbons A (two identical CH₃): C–C type → δ = 5–60 → peak at ~25 ppm\n\nPeak height ratio: A:B = 2:1 — peak A is TALLER because 2 carbons share that environment\n\n⚠️ KEY POINT: Peak height in ¹³C NMR is proportional to the number of carbons in that environment.'
      }
    },

    // ── Worked Example 3: structure identification ────────────────────────
    {
      id: 'callout-c13-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 3 — Identifying a Compound from ¹³C NMR',
        text: 'A compound with molecular formula C₃H₆O shows 3 peaks in ¹³C NMR:\n  • Peak 1: δ ≈ 200 ppm\n  • Peaks 2 and 3: δ ≈ 10 and 30 ppm\n\nIs it structure A (propanal, CH₃CH₂CHO) or structure B (prop-1-en-1-ol, CH₂=CHCH₂OH)?\n\nStep 1: Peak at δ > 190 ppm = C=O (aldehyde or ketone) → rules out C–O alcohol (~50–80) and C=C alkene (~120–140)\nStep 2: No peak in 120–140 range → no C=C → NOT the enol structure B\nStep 3: Three peaks all at low δ (5–60) and one at ~200 ppm → matches propanal exactly:\n  • C=O carbon (CHO) at ~200 ppm\n  • CH₂ carbon at ~30 ppm (adjacent to carbonyl)\n  • CH₃ carbon at ~10 ppm\n\nAnswer: Structure A (propanal) ✓'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 4 — ¹H NMR: LOW RESOLUTION
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-1h-nmr',
      type: 'heading',
      data: { text: '¹H Proton NMR Spectroscopy', level: 2 }
    },
    {
      id: 'list-1h-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Also written as <strong>¹H NMR</strong> — measures the chemical environments of <strong>hydrogen (proton) atoms</strong>',
          'Two forms: <strong>low resolution</strong> (shows peaks only) and <strong>high resolution</strong> (shows splitting patterns within each peak)',
          'Same solvent (CDCl₃) and reference standard (TMS at δ = 0) as ¹³C NMR',
          'TMS provides a strong reference signal because all 12 protons are identical'
        ]
      }
    },

    {
      id: 'h-1h-lr',
      type: 'heading',
      data: { text: 'Low Resolution ¹H NMR', level: 3 }
    },
    {
      id: 'list-1h-lr',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Spectrum: horizontal baseline with vertical peaks — each peak = one proton environment',
          '<strong>Number of peaks = number of different proton environments</strong> (NOT the number of H atoms)',
          '<strong>Position (δ) = chemical shift</strong> — indicates what the proton is attached to (compare to data book table)',
          '<strong>Peak AREA = relative number of hydrogen atoms</strong> in that environment (NOT peak height, unlike ¹³C NMR)',
          '<strong>Integration trace:</strong> a stepped line overlaid on the spectrum — the height of each step is proportional to the number of H atoms; steps are measured and compared to give the ratio',
          'e.g. steps of heights 2:1:2:3 → ratio of H atoms in each environment is 2:1:2:3'
        ]
      }
    },

    // ── Integration trace SVG ─────────────────────────────────────────────
    {
      id: 'svg-integration-trace',
      type: 'svg',
      data: {
        caption: 'Integration trace in ¹H NMR: the stepped line rises at each peak. The height of each step is proportional to the number of H atoms in that environment. Here the ratio is 3:2:1 (e.g. CH₃ : CH₂ : CHO).',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210" font-family="Arial,sans-serif">
  <rect width="520" height="210" fill="#f8f9fa" rx="8"/>
  <text x="260" y="20" font-size="12.5" fill="#222" font-weight="bold" text-anchor="middle">¹H NMR Integration Trace</text>
  <!-- Axes -->
  <line x1="50" y1="155" x2="490" y2="155" stroke="#444" stroke-width="2"/>
  <line x1="50" y1="35" x2="50" y2="158" stroke="#444" stroke-width="2"/>
  <!-- Y label -->
  <text x="18" y="100" font-size="10" fill="#555" transform="rotate(-90,18,100)" text-anchor="middle">Absorption</text>
  <!-- x-axis ticks and label -->
  <text x="270" y="172" font-size="10.5" fill="#333" text-anchor="middle">δ / ppm  (high →  low)</text>
  <!-- NMR Peaks (simplified): peak A at left ~δ9, peak B middle ~δ2.5, peak C right ~δ1 -->
  <!-- Peak C (CH₃, area 3) at far right: δ≈1 -->
  <rect x="400" y="100" width="14" height="55" fill="#3355cc" rx="1"/>
  <text x="407" y="94" font-size="9" fill="#3355cc" text-anchor="middle">δ ~1</text>
  <!-- Peak B (CH₂, area 2) middle -->
  <rect x="260" y="110" width="14" height="45" fill="#22aa44" rx="1"/>
  <text x="267" y="104" font-size="9" fill="#22aa44" text-anchor="middle">δ ~2.5</text>
  <!-- Peak A (CHO, area 1) at far left: δ≈9 -->
  <rect x="100" y="125" width="14" height="30" fill="#e05050" rx="1"/>
  <text x="107" y="119" font-size="9" fill="#e05050" text-anchor="middle">δ ~9</text>
  <!-- Integration trace line -->
  <!-- Starts at y=185, flat, rises at peak A by small step (×1), flat, rises at B (×2), flat, rises at C (×3) -->
  <polyline points="70,185 95,185 95,175 120,175 120,175 240,175 240,157 285,157 285,157 380,157 380,127 430,127 430,127 480,127"
    stroke="#cc6600" stroke-width="2.5" fill="none" stroke-dasharray="none"/>
  <!-- Step height annotations -->
  <!-- Step at A: 175→175 to 175 (height=10) -->
  <line x1="88" y1="175" x2="88" y2="185" stroke="#cc6600" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="78" y="182" font-size="9" fill="#cc6600" text-anchor="middle">×1</text>
  <!-- Step at B: 175→157 (height=18) -->
  <line x1="253" y1="157" x2="253" y2="175" stroke="#cc6600" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="240" y="168" font-size="9" fill="#cc6600" text-anchor="middle">×2</text>
  <!-- Step at C: 157→127 (height=30) -->
  <line x1="423" y1="127" x2="423" y2="157" stroke="#cc6600" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="436" y="144" font-size="9" fill="#cc6600" text-anchor="middle">×3</text>
  <!-- Legend -->
  <text x="260" y="200" font-size="9.5" fill="#cc6600" text-anchor="middle">Integration trace (orange stepped line) — step heights in ratio 1 : 2 : 3</text>
  <text x="407" y="187" font-size="8.5" fill="#555" text-anchor="middle">CH₃</text>
  <text x="267" y="187" font-size="8.5" fill="#555" text-anchor="middle">CH₂</text>
  <text x="107" y="187" font-size="8.5" fill="#555" text-anchor="middle">CHO</text>
</svg>`
      }
    },

    // ── ¹H Chemical shift table ──────────────────────────────────────────
    {
      id: 'h-1h-shifts',
      type: 'heading',
      data: { text: '¹H NMR Chemical Shift Table (Data Book, Page 8)', level: 3 }
    },
    {
      id: 'table-1h-shifts',
      type: 'comparisonTable',
      data: {
        headers: ['Proton environment', 'δ / ppm', 'Notes'],
        rows: [
          ['<strong>R–CH₃, R–CH₂–R</strong> (alkyl)', '0.1–1.9', 'Shielded — only C and H nearby'],
          ['<strong>C=C–H</strong> adjacent CH; C–N–H', '1.8–3.0', 'Slightly deshielded by double bond / N'],
          ['<strong>N–CH₃</strong>, C–N–H (amine)', '2.0–3.0', 'N deshields adjacent H'],
          ['<strong>O–CH₃, O–CH₂</strong> (ester/ether)', '2.8–4.2', 'O strongly deshields adjacent H'],
          ['<strong>C=C–H</strong> (alkene)', '4.5–6.5', 'Effect of C=C π electrons'],
          ['<strong>Ar–H</strong> (aromatic)', '6.5–8.0', 'Strong deshielding by aromatic ring'],
          ['<strong>CHO</strong> (aldehyde)', '9.4–10.0', 'Very deshielded by C=O'],
          ['<strong>COOH</strong> (carboxylic acid)', '11.0–12.0', 'Most downfield — H bonding + C=O effect']
        ],
        caption: '¹H NMR chemical shift table (data book p.8). Note: O–H and N–H signals are broad and variable; they may not always appear at a consistent δ.'
      }
    },

    // ── Worked Example 4: butanal ─────────────────────────────────────────
    {
      id: 'callout-1h-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 4 — ¹H NMR (Low Resolution) of Butanal (CH₃CH₂CH₂CHO)',
        text: 'Step 1: Label environments.\n  A = CH₃ (3H), B = middle CH₂ (2H), C = CH₂ adjacent to CHO (2H), D = CHO (1H)\n\nStep 2: 4 environments → 4 peaks\n\nStep 3: Determine shifts and assign peaks:\n  • D (CHO): δ ≈ 9.4–10.0 → only 1H → assign to peak at ~10 ppm ✓\n  • A (CH₃): δ ≈ 0–2 ppm (alkyl) → 3H → largest integration → peak at ~0.9 ppm\n  • B (CH₂, next to CH₃): δ ≈ 0–2 ppm (alkyl) → 2H → peak around ~1.7 ppm\n  • C (CH₂, next to CHO): slightly higher δ due to adjacent aldehyde → δ ≈ 2.4 ppm → 2H\n\nIntegration ratio: A:B:C:D = 3:2:2:1'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 5 — ¹H NMR: HIGH RESOLUTION & SPLITTING PATTERNS
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-1h-hr',
      type: 'heading',
      data: { text: 'High Resolution ¹H NMR — Splitting Patterns', level: 2 }
    },
    {
      id: 'list-hr-principles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'High resolution ¹H NMR has all the same features as low resolution PLUS <strong>splitting patterns</strong>',
          'Each peak is split into <strong>sub-peaks</strong> grouped closely together (called a multiplet)',
          '<strong>Cause of splitting:</strong> protons on <em>adjacent</em> carbons interfere with each other (spin-spin coupling)',
          'The protons in one environment are affected by the protons on <strong>neighbouring (adjacent) carbon atoms</strong>',
          '<strong>The n+1 rule:</strong> if the adjacent carbon has <em>n</em> protons, the peak is split into <em>n+1</em> sub-peaks',
          'Chemical shift of the peak does NOT change — only the shape changes (split into sub-peaks)',
          '<strong>OH groups are always singlets</strong> — the O atom has no H atoms to cause coupling'
        ]
      }
    },

    // ── n+1 rule callout ─────────────────────────────────────────────────
    {
      id: 'callout-n-plus-one',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 The n+1 Rule',
        text: 'If the adjacent carbon(s) bear n equivalent protons, the signal is split into:\n\n  n + 1 = number of sub-peaks\n\nExamples:\n• n = 0 → singlet (1 peak) — no adjacent H\n• n = 1 → doublet (2 peaks) — 1 adjacent H\n• n = 2 → triplet (3 peaks) — 2 adjacent H\n• n = 3 → quartet (4 peaks) — 3 adjacent H\n• n = 4 → quintet (5 peaks) — 4 adjacent H\n\n⚠️ "Adjacent" means on the NEIGHBOURING CARBON — not on the same carbon, and not two carbons away.'
      }
    },

    // ── Splitting patterns table ─────────────────────────────────────────
    {
      id: 'table-splitting-patterns',
      type: 'comparisonTable',
      data: {
        headers: ['Name', 'n adjacent H', 'Number of sub-peaks', 'Relative peak heights', 'Appearance'],
        rows: [
          ['<strong>Singlet</strong>', '0', '1', '1', 'One single peak'],
          ['<strong>Doublet</strong>', '1', '2', '1:1', 'Two equal peaks'],
          ['<strong>Triplet</strong>', '2', '3', '1:2:1', 'Three peaks, middle tallest'],
          ['<strong>Quartet</strong>', '3', '4', '1:3:3:1', 'Four peaks, middle two tallest'],
          ['<strong>Quintet</strong>', '4', '5', '1:4:6:4:1', 'Five peaks, middle tallest'],
          ['<strong>Multiplet</strong>', 'mixed', 'complex', 'complex', 'Complex overlapping pattern']
        ],
        caption: 'n+1 splitting pattern names and relative sub-peak heights. Must know singlet → quartet; quintet is also required for IA2.'
      }
    },

    // ── Splitting patterns visual SVG ─────────────────────────────────────
    {
      id: 'svg-splitting-patterns',
      type: 'svg',
      data: {
        caption: 'Visual representation of splitting patterns: singlet (no adjacent H), doublet (1 adjacent H), triplet (2), quartet (3), and quintet (4). Heights within each pattern reflect the relative peak ratios.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" font-family="Arial,sans-serif">
  <rect width="560" height="220" fill="#f8f9fa" rx="8"/>
  <text x="280" y="18" font-size="13" fill="#222" font-weight="bold" text-anchor="middle">¹H NMR Splitting Patterns (n+1 Rule)</text>
  <!-- Column headers and baselines -->
  <!-- Column positions at x: 50, 162, 274, 386, 498 (width 90 each) -->
  <!-- Baselines at y=175 -->
  <line x1="26" y1="175" x2="110" y2="175" stroke="#aaa" stroke-width="1.5"/>
  <line x1="134" y1="175" x2="224" y2="175" stroke="#aaa" stroke-width="1.5"/>
  <line x1="245" y1="175" x2="335" y2="175" stroke="#aaa" stroke-width="1.5"/>
  <line x1="355" y1="175" x2="445" y2="175" stroke="#aaa" stroke-width="1.5"/>
  <line x1="462" y1="175" x2="548" y2="175" stroke="#aaa" stroke-width="1.5"/>
  <!-- === SINGLET (n=0) centered at x=68 === -->
  <rect x="64" y="95" width="8" height="80" fill="#3355cc" rx="1"/>
  <text x="68" y="87" font-size="9" fill="#3355cc" text-anchor="middle">1</text>
  <text x="68" y="192" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Singlet</text>
  <text x="68" y="204" font-size="9" fill="#666" text-anchor="middle">n = 0</text>
  <text x="68" y="215" font-size="8.5" fill="#888" text-anchor="middle">(1 peak)</text>
  <!-- === DOUBLET (n=1) centered at x=179: 2 peaks 1:1 === -->
  <rect x="172" y="135" width="7" height="40" fill="#22aa44" rx="1"/>
  <rect x="183" y="135" width="7" height="40" fill="#22aa44" rx="1"/>
  <text x="175.5" y="129" font-size="9" fill="#22aa44" text-anchor="middle">1</text>
  <text x="186.5" y="129" font-size="9" fill="#22aa44" text-anchor="middle">1</text>
  <text x="179" y="192" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Doublet</text>
  <text x="179" y="204" font-size="9" fill="#666" text-anchor="middle">n = 1</text>
  <text x="179" y="215" font-size="8.5" fill="#888" text-anchor="middle">(2 peaks)</text>
  <!-- === TRIPLET (n=2) centered at x=290: 3 peaks 1:2:1 === -->
  <rect x="279" y="155" width="7" height="20" fill="#e08020" rx="1"/>
  <rect x="289" y="115" width="7" height="60" fill="#e08020" rx="1"/>
  <rect x="299" y="155" width="7" height="20" fill="#e08020" rx="1"/>
  <text x="282.5" y="150" font-size="8" fill="#e08020" text-anchor="middle">1</text>
  <text x="292.5" y="109" font-size="8" fill="#e08020" text-anchor="middle">2</text>
  <text x="302.5" y="150" font-size="8" fill="#e08020" text-anchor="middle">1</text>
  <text x="290" y="192" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Triplet</text>
  <text x="290" y="204" font-size="9" fill="#666" text-anchor="middle">n = 2</text>
  <text x="290" y="215" font-size="8.5" fill="#888" text-anchor="middle">(3 peaks)</text>
  <!-- === QUARTET (n=3) centered at x=400: 4 peaks 1:3:3:1 === -->
  <rect x="381" y="162" width="7" height="13" fill="#aa2299" rx="1"/>
  <rect x="391" y="127" width="7" height="48" fill="#aa2299" rx="1"/>
  <rect x="401" y="127" width="7" height="48" fill="#aa2299" rx="1"/>
  <rect x="411" y="162" width="7" height="13" fill="#aa2299" rx="1"/>
  <text x="384.5" y="157" font-size="8" fill="#aa2299" text-anchor="middle">1</text>
  <text x="394.5" y="121" font-size="8" fill="#aa2299" text-anchor="middle">3</text>
  <text x="404.5" y="121" font-size="8" fill="#aa2299" text-anchor="middle">3</text>
  <text x="414.5" y="157" font-size="8" fill="#aa2299" text-anchor="middle">1</text>
  <text x="400" y="192" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Quartet</text>
  <text x="400" y="204" font-size="9" fill="#666" text-anchor="middle">n = 3</text>
  <text x="400" y="215" font-size="8.5" fill="#888" text-anchor="middle">(4 peaks)</text>
  <!-- === QUINTET (n=4) centered at x=505: 5 peaks 1:4:6:4:1 === -->
  <rect x="476" y="169" width="6" height="6" fill="#cc3333" rx="1"/>
  <rect x="485" y="143" width="6" height="32" fill="#cc3333" rx="1"/>
  <rect x="494" y="127" width="6" height="48" fill="#cc3333" rx="1"/>
  <rect x="503" y="143" width="6" height="32" fill="#cc3333" rx="1"/>
  <rect x="512" y="169" width="6" height="6" fill="#cc3333" rx="1"/>
  <text x="479" y="163" font-size="7.5" fill="#cc3333" text-anchor="middle">1</text>
  <text x="488" y="137" font-size="7.5" fill="#cc3333" text-anchor="middle">4</text>
  <text x="497" y="120" font-size="7.5" fill="#cc3333" text-anchor="middle">6</text>
  <text x="506" y="137" font-size="7.5" fill="#cc3333" text-anchor="middle">4</text>
  <text x="515" y="163" font-size="7.5" fill="#cc3333" text-anchor="middle">1</text>
  <text x="506" y="192" font-size="11" fill="#333" text-anchor="middle" font-weight="bold">Quintet</text>
  <text x="506" y="204" font-size="9" fill="#666" text-anchor="middle">n = 4</text>
  <text x="506" y="215" font-size="8.5" fill="#888" text-anchor="middle">(5 peaks)</text>
</svg>`
      }
    },

    // ── OH singlet warning ────────────────────────────────────────────────
    {
      id: 'callout-oh-singlet',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ OH Groups Are ALWAYS Singlets',
        text: 'The O–H proton in an alcohol, carboxylic acid, or phenol does NOT split neighbouring protons and is NOT split by them.\n\nWhy? The oxygen atom has no H atoms on an adjacent carbon — there are no neighbours to cause coupling.\n\nExamples:\n• Alcohol –OH: singlet\n• Carboxylic acid –COOH: singlet (at δ ~11–12 ppm)\n• Water: singlet\n\nThis is especially important for exam questions about compounds like 4-hydroxybutanoic acid or other hydroxy compounds — the OH always gives a singlet.'
      }
    },

    // ── HR Worked Example: butanone ──────────────────────────────────────
    {
      id: 'callout-hr-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 5 — High Resolution ¹H NMR of Butanone (CH₃COCH₂CH₃)',
        text: 'Step 1: Label environments.\n  A = CH₃ (left of C=O, 3H) — adjacent carbon is C=O (no H)\n  B = CH₂ (right of C=O, 2H) — adjacent is CH₃ environment C (3H)\n  C = CH₃ (far right, 3H) — adjacent is CH₂ environment B (2H)\n\nStep 2: Count adjacent H for each using n+1 rule.\n  A: adjacent C=O has 0 H → n=0 → SINGLET\n  B: adjacent C (environment C) has 3 H → n=3 → QUARTET\n  C: adjacent C (environment B) has 2 H → n=2 → TRIPLET\n\nStep 3: Chemical shifts (data book).\n  A: CH₃ next to C=O (ketone) → δ ≈ 2.1 ppm\n  B: CH₂ next to C=O → δ ≈ 2.4 ppm\n  C: CH₃ (alkyl, far from C=O) → δ ≈ 1.0 ppm\n\nSummary:\n  Environment A: δ ≈ 2.1, area=3, SINGLET\n  Environment B: δ ≈ 2.4, area=2, QUARTET\n  Environment C: δ ≈ 1.0, area=3, TRIPLET'
      }
    },

    // ── HR Worked Example: methyl propanoate ─────────────────────────────
    {
      id: 'callout-hr-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 6 — High Resolution ¹H NMR of Methyl Propanoate (CH₃CH₂COOCH₃)',
        text: 'Structure: CH₃–CH₂–C(=O)–O–CH₃\n  A = CH₃ (far left, 3H)\n  B = CH₂ (2H, between CH₃ and ester C=O)\n  C = OCH₃ (right of ester O, 3H)\n\nStep 1: Explicitly state — "There are 3 hydrogen environments."\n\nStep 2: Apply n+1 to each.\n  A: adjacent is CH₂ (2H) → n=2 → TRIPLET; δ ≈ 1.0–1.9 ppm (alkyl CH₃)\n  B: adjacent is CH₃ (3H) on left, and ester O on right (no H) → n=3 → QUARTET; δ ≈ 1.8–3.0 ppm (C=O adjacent)\n  C: adjacent is ester O (no H) → n=0 → SINGLET; δ ≈ 2.8–4.2 ppm (O–CH₃)\n\nSummary:\n  A: triplet, area=3, δ ≈ 1.2 ppm\n  B: quartet, area=2, δ ≈ 2.3 ppm\n  C: singlet, area=3, δ ≈ 3.7 ppm\n\n⚠️ Exam tip: Always explicitly state the number of environments before assigning peaks — examiners like annotated structural diagrams labelled A, B, C...'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 6 — STRUCTURE DETERMINATION FROM NMR
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-structure-determination',
      type: 'heading',
      data: { text: 'Determining Structure from NMR Data', level: 2 }
    },
    {
      id: 'list-structure-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Count the peaks</strong> → number of different H environments (high-res ¹H NMR)',
          '<strong>Read integration</strong> (peak areas) → ratio of H atoms per environment → deduce CH₃ (3H), CH₂ (2H), CH (1H) etc.',
          '<strong>Read chemical shifts</strong> → use data book table to identify what each proton is attached to',
          '<strong>Read splitting patterns</strong> → use n+1 rule backwards to determine how many H are on the adjacent carbon',
          '<strong>Piece together fragments</strong> → combine chemical environments into a connected structure',
          '<strong>Cross-check with molecular formula</strong> → total H, total C and O must match; degree of unsaturation confirms C=O or ring'
        ]
      }
    },

    // ── Structure determination flowchart ────────────────────────────────
    {
      id: 'svg-structure-strategy',
      type: 'svg',
      data: {
        caption: 'Step-by-step strategy for determining molecular structure from ¹H NMR data.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 310" font-family="Arial,sans-serif">
  <rect width="520" height="310" fill="#f8f9fa" rx="8"/>
  <text x="260" y="22" font-size="13" fill="#222" font-weight="bold" text-anchor="middle">Structure Determination from ¹H NMR — Strategy</text>
  <!-- Step boxes -->
  <!-- Step 1 -->
  <rect x="30" y="35" width="460" height="40" fill="#e8eeff" rx="6" stroke="#3355cc" stroke-width="1.5"/>
  <text x="55" y="52" font-size="11" fill="#222" font-weight="bold">Step 1</text>
  <text x="55" y="67" font-size="10.5" fill="#333">Count peaks → number of different H environments</text>
  <!-- Arrow -->
  <line x1="260" y1="75" x2="260" y2="88" stroke="#888" stroke-width="1.5"/>
  <polygon points="255,88 265,88 260,95" fill="#888"/>
  <!-- Step 2 -->
  <rect x="30" y="95" width="460" height="40" fill="#e8fff0" rx="6" stroke="#22aa44" stroke-width="1.5"/>
  <text x="55" y="112" font-size="11" fill="#222" font-weight="bold">Step 2</text>
  <text x="55" y="127" font-size="10.5" fill="#333">Read integration (area) → ratio of H atoms per environment → name fragments</text>
  <!-- Arrow -->
  <line x1="260" y1="135" x2="260" y2="148" stroke="#888" stroke-width="1.5"/>
  <polygon points="255,148 265,148 260,155" fill="#888"/>
  <!-- Step 3 -->
  <rect x="30" y="155" width="460" height="40" fill="#fff8e0" rx="6" stroke="#e08020" stroke-width="1.5"/>
  <text x="55" y="172" font-size="11" fill="#222" font-weight="bold">Step 3</text>
  <text x="55" y="187" font-size="10.5" fill="#333">Check chemical shifts (δ) → match to data book → identify functional group neighbourhood</text>
  <!-- Arrow -->
  <line x1="260" y1="195" x2="260" y2="208" stroke="#888" stroke-width="1.5"/>
  <polygon points="255,208 265,208 260,215" fill="#888"/>
  <!-- Step 4 -->
  <rect x="30" y="215" width="460" height="40" fill="#fce8ff" rx="6" stroke="#aa2299" stroke-width="1.5"/>
  <text x="55" y="232" font-size="11" fill="#222" font-weight="bold">Step 4</text>
  <text x="55" y="247" font-size="10.5" fill="#333">Apply n+1 rule to splitting patterns → deduce number of H on adjacent carbon</text>
  <!-- Arrow -->
  <line x1="260" y1="255" x2="260" y2="268" stroke="#888" stroke-width="1.5"/>
  <polygon points="255,268 265,268 260,275" fill="#888"/>
  <!-- Step 5 -->
  <rect x="30" y="275" width="460" height="28" fill="#ffe8e8" rx="6" stroke="#cc3333" stroke-width="1.5"/>
  <text x="55" y="291" font-size="11" fill="#222" font-weight="bold">Step 5</text>
  <text x="55" y="299" font-size="10.5" fill="#333">Assemble fragments → propose structure → verify against molecular formula ✓</text>
</svg>`
      }
    },

    // ── Structure determination worked example ────────────────────────────
    {
      id: 'callout-structure-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked Example 7 — Determine Structure from ¹H NMR (Molecular Formula C₄H₈O₂)',
        text: 'Spectrum shows 3 peaks:\n  Peak A: quartet, area=2, δ=4.1 ppm\n  Peak B: singlet, area=3, δ=2.0 ppm\n  Peak C: triplet, area=3, δ=1.3 ppm\n\n─── STEP 1: Count environments ───\n  3 peaks → 3 H environments\n\n─── STEP 2: Integration ───\n  A=2H (CH₂), B=3H (CH₃), C=3H (CH₃) → total 8H ✓ matches C₄H₈O₂\n\n─── STEP 3: Chemical shifts ───\n  A (δ=4.1): O–CH₂ of ester/alcohol (2.8–4.2) → CH₂ bonded to oxygen\n  B (δ=2.0): CH₃ adjacent to C=O/carbonyl (1.7–3.0) → CH₃CO–\n  C (δ=1.3): CH₃ alkyl (0.1–1.9) → simple alkyl CH₃\n\n─── STEP 4: Splitting patterns ───\n  A = quartet → adjacent C has 3H → bonded to CH₃ (environment C)\n  B = singlet → no adjacent H → bonded to C=O (no H on carbonyl carbon)\n  C = triplet → adjacent C has 2H → bonded to CH₂ (environment A)\n\n─── STEP 5: Assemble ───\n  B is CH₃–C=O\n  C is CH₃– bonded to A\n  A is –CH₂–O– (bonded to both B-adjacent-carbonyl-O and C)\n  → Structure: CH₃–C(=O)–O–CH₂–CH₃ = ETHYL ETHANOATE ✓\n  Molecular formula: C₄H₈O₂ ✓'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 7 — COMPARISON: ¹³C vs ¹H NMR
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Comparing ¹³C and ¹H NMR', level: 2 }
    },
    {
      id: 'table-c13-vs-1h',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', '¹³C NMR', '¹H NMR'],
        rows: [
          ['Nuclei detected', 'Carbon-13 (¹³C)', 'Proton hydrogen (¹H)'],
          ['Number of peaks', 'Number of C environments', 'Number of H environments'],
          ['Peak height/area', 'Height ∝ number of C in that environment', 'Area ∝ number of H in that environment'],
          ['Integration trace', 'NOT used', 'Used — step heights give H ratios'],
          ['Splitting patterns', 'NOT used (¹³C is rare, no coupling)', 'Used in high resolution — n+1 rule'],
          ['δ range', '0–220 ppm', '0–12 ppm'],
          ['Reference', 'TMS (δ=0)', 'TMS (δ=0)'],
          ['Solvent', 'CDCl₃ (deuterated)', 'CDCl₃ (deuterated)']
        ],
        caption: 'Key differences between ¹³C and ¹H NMR spectroscopy. Both use the same standard conditions (CDCl₃ solvent, TMS reference at δ=0).'
      }
    },

    // ── Combining NMR with other techniques ──────────────────────────────
    {
      id: 'h-nmr-with-other',
      type: 'heading',
      data: { text: 'Using NMR alongside IR and Mass Spectrometry', level: 3 }
    },
    {
      id: 'list-combining-techniques',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Mass Spectrum (MS):</strong> gives Mr (molecular mass) from M⁺ peak; fragmentation identifies functional groups',
          '<strong>Infrared (IR):</strong> identifies functional groups (C=O, O–H, N–H, C–O peaks)',
          '<strong>¹³C NMR:</strong> reveals the carbon skeleton — how many unique C environments and what types',
          '<strong>¹H NMR:</strong> reveals number of H environments, integration (H count), and connectivity (splitting)',
          'Together, these four techniques allow unambiguous determination of the structure of an organic compound',
          'Exam strategy: use MS for Mr and formula; IR for functional groups; ¹³C NMR for carbon count; ¹H NMR for H environments and coupling'
        ]
      }
    },

    // ── Practical/exam tips ───────────────────────────────────────────────
    {
      id: 'callout-exam-tips',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 Exam Tips for NMR Questions',
        text: '• Always draw and annotate a structural diagram — label environments A, B, C etc. — examiners award marks for annotated diagrams\n• When explaining splitting: state the pattern name, the number of adjacent H, and invoke the n+1 rule explicitly (e.g. "quartet because there are 3 H on the adjacent carbon; n+1 = 4")\n• OH environments are ALWAYS singlets — never forget this\n• When comparing two spectra, look for differences in number of peaks, integration ratios, and splitting patterns\n• For ¹³C, if two carbons are identical (symmetrical molecule) there will be fewer peaks than carbon atoms'
      }
    },

    // ── Checklist ─────────────────────────────────────────────────────────
    {
      id: 'checklist-nmr',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain why CDCl₃ is used as the NMR solvent', checked: false },
          { text: 'I can explain why TMS is the reference standard (δ = 0)', checked: false },
          { text: 'I can determine the number of ¹³C environments from a structure', checked: false },
          { text: 'I can use the ¹³C chemical shift table to assign peaks to environments', checked: false },
          { text: 'I understand that peak height in ¹³C NMR is proportional to the number of carbons in that environment', checked: false },
          { text: 'I can determine the number of ¹H environments and interpret integration ratios', checked: false },
          { text: 'I can use the ¹H chemical shift table to assign proton environments', checked: false },
          { text: 'I can apply the n+1 rule to predict splitting patterns', checked: false },
          { text: 'I know singlet/doublet/triplet/quartet/quintet names and their peak ratios', checked: false },
          { text: 'I know that OH groups always give singlets', checked: false },
          { text: 'I can determine a structure from combined NMR data (integration + shift + splitting)', checked: false },
          { text: 'I can compare two NMR spectra and identify similarities and differences', checked: false }
        ]
      }
    },

    // ── Summary ─────────────────────────────────────────────────────────
    {
      id: 'summary-nmr',
      type: 'summary',
      data: {
        text: '¹³C NMR: peaks = number of carbon environments; position (δ, ppm) from data book; peak height ∝ carbons per environment. ¹H NMR: peaks = H environments; area (integration) = relative H count; high resolution adds splitting — apply n+1 rule (n adjacent H → n+1 sub-peaks). Singlet=0, doublet=1, triplet=2, quartet=3, quintet=4 adjacent H. OH groups always singlets. Both spectra use CDCl₃ solvent and TMS reference (δ=0). Combine with IR (functional groups) and MS (Mr) for full structure determination.'
      }
    }
  ],

  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-solvent-tms',
        blockId: 'list-solvent-tms',
        prompt: 'Why is CDCl₃ used as the NMR solvent, and what is TMS? Why is TMS chosen as the reference standard?'
      },
      {
        id: 'cue-c13-environments',
        blockId: 'callout-c13-environments',
        prompt: 'Propan-2-ol (CH₃CHOHCH₃) gives only 2 peaks in its ¹³C NMR. Why? What would the peak height ratio be, and why?'
      },
      {
        id: 'cue-n-plus-one',
        blockId: 'callout-n-plus-one',
        prompt: 'State the n+1 rule and give the names for when n = 0, 1, 2, and 3. What are the relative sub-peak heights for a quartet?'
      },
      {
        id: 'cue-oh-singlet',
        blockId: 'callout-oh-singlet',
        prompt: 'Why do O–H protons always appear as singlets in ¹H NMR? Give two examples of functional groups where this applies.'
      },
      {
        id: 'cue-1h-vs-13c',
        blockId: 'table-c13-vs-1h',
        prompt: 'State TWO differences between ¹³C NMR and ¹H NMR in terms of what information each provides about peak height/area and splitting.'
      },
      {
        id: 'cue-structure-strategy',
        blockId: 'callout-structure-worked',
        prompt: 'A ¹H NMR shows: quartet (δ=4.1, area=2), singlet (δ=2.0, area=3), triplet (δ=1.3, area=3). The molecular formula is C₄H₈O₂. Identify the compound and explain your reasoning.'
      }
    ],
    summaryText: 'NMR spectroscopy uses CDCl₃ solvent and TMS (δ=0) as reference. ¹³C NMR: peaks = carbon environments; height ∝ number of equivalent carbons; use data book shifts (alkane 5–60, alkene 120–140, C=O 190–220 ppm). ¹H NMR: peaks = H environments; integration = relative H count; high resolution → n+1 splitting (singlet=0, doublet=1, triplet=2, quartet=3 adjacent H); OH always singlet. Combine with IR and MS for full structure determination.',
    ready: false
  },

  evidence: [
    {
      id: 'ev-1',
      title: 'Edexcel IAL Chemistry Data Book — NMR Chemical Shift Tables',
      detail: 'Page 8 of the Edexcel data book contains the ¹³C and ¹H NMR chemical shift tables referenced throughout this topic.',
      year: '2024',
      source: 'Pearson Edexcel IAL Chemistry Data Booklet',
      tags: ['nmr', 'data-book', 'chemical-shift']
    },
    {
      id: 'ev-2',
      title: 'n+1 Rule for Spin-Spin Coupling',
      detail: 'The n+1 rule is a simplification of quantum mechanical spin-spin coupling. For equivalent adjacent protons, the signal splits into n+1 sub-peaks with relative intensities given by Pascal\'s triangle coefficients.',
      year: '2023',
      source: 'Edexcel IA2 Chemistry Topic 15e',
      tags: ['nmr', 'splitting', 'n-plus-one', 'spin-spin-coupling']
    }
  ]
};
