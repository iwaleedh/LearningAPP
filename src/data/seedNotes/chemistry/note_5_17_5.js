export const note_chemistry_5_17_5 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-colour',
      data: {
        text: 'Explain why transition metal complexes are coloured; understand d-orbital splitting by ligands (crystal field theory); use the spectrochemical series; predict how metal ion, oxidation state, ligand, and coordination number affect colour.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 1 — ELECTROMAGNETIC RADIATION
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-em-radiation',
      type: 'heading',
      data: { text: 'Electromagnetic Radiation & Properties of Light', level: 2 }
    },
    {
      id: 'list-em-waves',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Light and other forms of radiation travel as <strong>electromagnetic waves</strong>',
          '<strong>Wavelength (λ):</strong> The distance between two consecutive wave crests. Often measured in nanometres (nm = 10⁻⁹ m)',
          '<strong>Frequency (ν):</strong> The number of wave crests passing a point per second. Measured in Hertz (Hz) or s⁻¹',
          '<strong>Speed of light (c):</strong> All electromagnetic radiation travels at a constant speed in a vacuum (approx 3.00 × 10⁸ m s⁻¹)',
          'Wavelength and frequency are <strong>inversely proportional</strong>. Higher frequency means shorter wavelength'
        ]
      }
    },
    {
      id: 'callout-eq-wave',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Energy, Frequency, and Wavelength',
        text: 'The fundamental equations linking light properties and photon energy are:\n\n<div style="text-align: center; margin: 10px 0;"><strong>c = λν</strong>    and    <strong>E = hν</strong></div>\n\nCombining these gives the most useful form for linking energy gaps to wavelength:\n<div style="text-align: center; margin: 10px 0; font-size: 1.1em; font-weight: bold;">E = hc / λ</div>\n\nWhere:\n• <strong>E</strong> = Energy of a photon (Joules)\n• <strong>h</strong> = Planck\'s constant (6.63 × 10⁻³⁴ J s)\n• <strong>c</strong> = Speed of light (3.0 × 10⁸ m s⁻¹)\n• <strong>λ</strong> = Wavelength (in metres)\n• <strong>ν</strong> = Frequency (Hz or s⁻¹)'
      }
    },
    {
      id: 'table-visible-spectrum',
      type: 'comparisonTable',
      data: {
        headers: ['Region', 'Wavelength (approx) nm', 'Energy / Frequency'],
        rows: [
          ['<strong>Ultraviolet (UV)</strong>', '< 380 nm', 'Highest Energy / Highest Frequency'],
          ['<strong>Violet / Blue</strong>', '380 – 500 nm', 'High Energy'],
          ['<strong>Green / Yellow</strong>', '500 – 590 nm', 'Medium Energy'],
          ['<strong>Orange / Red</strong>', '590 – 740 nm', 'Low Energy'],
          ['<strong>Infrared (IR)</strong>', '> 740 nm', 'Lowest Energy / Lowest Frequency']
        ],
        caption: 'The visible spectrum lies roughly between 380 nm (violet) and 740 nm (red). Notice that violet/blue light has a shorter wavelength and therefore higher relative energy than red light.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // SECTION 2 — WHY ARE TRANSITION METALS COLOURED?
    // ════════════════════════════════════════════════════════════════════════
    {
      type: 'heading',
      id: 'h-why-coloured',
      data: { text: 'Why Transition Metal Complexes Are Coloured', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-colour-origin',
      data: {
        text: 'Transition metal complexes are typically coloured because of transitions between d-orbital energy levels. In an isolated transition metal ion, all five d-orbitals have the same energy (they are degenerate). However, when ligands approach and form coordinate bonds, the electric field created by the ligands perturbs the d-orbitals, causing them to split into different energy levels. Electrons can now absorb visible light photons to jump from a lower-energy d-orbital to a higher-energy d-orbital. The colour observed is the <strong>complementary colour</strong> to the light that is absorbed.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-complementary-colour',
      data: {
        text: 'The relationship between absorbed light and observed colour is given by the colour wheel. For example:<br/>' +
        '• If red light is absorbed, green light is transmitted → complex appears green<br/>' +
        '• If yellow light is absorbed, blue light is transmitted → complex appears blue<br/>' +
        '• If blue light is absorbed, orange/yellow light is transmitted → complex appears yellow<br/>' +
        'The wavelength of light absorbed depends on the size of the d-orbital energy gap, which is controlled by the nature of the ligand.'
      }
    },
    {
      type: 'callout',
      id: 'callout-colour-mechanism',
      data: {
        style: 'key',
        title: 'D-Orbital Splitting and Colour',
        text: 'Ligands create an electric field that splits d-orbitals into groups of different energies. Electrons absorb visible light photons (energy = hν) to jump between these levels. The energy gap (Δ) determines the wavelength absorbed (λ = c/ν). The colour observed is complementary to the colour absorbed.'
      }
    },
    {
      type: 'svg',
      id: 'svg-d-orbital-splitting',
      data: {
        svg: `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;font-size:11px">
  <text x="210" y="20" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e293b">D-Orbital Splitting in Octahedral Complex</text>
  <text x="80" y="50" text-anchor="middle" fill="#475569">Isolated ion</text>
  <text x="80" y="63" text-anchor="middle" font-size="9" fill="#64748b">(5 degenerate orbitals)</text>
  <line x1="30" y1="140" x2="125" y2="140" stroke="#475569" stroke-width="2"/>
  <line x1="30" y1="155" x2="125" y2="155" stroke="#475569" stroke-width="2"/>
  <line x1="30" y1="170" x2="125" y2="170" stroke="#475569" stroke-width="2"/>
  <line x1="30" y1="185" x2="125" y2="185" stroke="#475569" stroke-width="2"/>
  <line x1="30" y1="200" x2="125" y2="200" stroke="#475569" stroke-width="2"/>
  <text x="12" y="175" text-anchor="middle" font-size="9" fill="#64748b">d</text>
  <path d="M 148 170 L 185 170" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrowRight)"/>
  <text x="166" y="163" text-anchor="middle" font-size="9" fill="#94a3b8">6 ligands</text>
  <text x="166" y="177" text-anchor="middle" font-size="9" fill="#94a3b8">coordinate</text>
  <text x="310" y="50" text-anchor="middle" fill="#475569">In complex</text>
  <text x="310" y="63" text-anchor="middle" font-size="9" fill="#64748b">(orbitals split into 2 groups)</text>
  <text x="210" y="110" font-size="10" fill="#dc2626" font-weight="bold">eᵍ (2 orbitals — point at ligands)</text>
  <line x1="240" y1="120" x2="380" y2="120" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="240" y1="137" x2="380" y2="137" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M 395 128 L 395 210" stroke="#7c3aed" stroke-width="2" marker-start="url(#arrowUp)" marker-end="url(#arrowDown)"/>
  <text x="407" y="175" font-size="12" font-weight="bold" fill="#7c3aed">Δ</text>
  <path d="M 310 215 Q 310 165 310 128" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="5,3" marker-end="url(#arrowRight2)"/>
  <text x="325" y="178" font-size="9" fill="#f59e0b">hν</text>
  <text x="207" y="225" font-size="10" fill="#16a34a" font-weight="bold">t₂ᵍ (3 orbitals — point between ligands)</text>
  <line x1="240" y1="205" x2="380" y2="205" stroke="#16a34a" stroke-width="2.5"/>
  <line x1="240" y1="222" x2="380" y2="222" stroke="#16a34a" stroke-width="2.5"/>
  <line x1="240" y1="239" x2="380" y2="239" stroke="#16a34a" stroke-width="2.5"/>
  <text x="210" y="260" text-anchor="middle" font-size="9" fill="#64748b">Electron absorbs visible light (energy = Δ) to jump from t₂ᵍ to eᵍ</text>
  <defs>
    <marker id="arrowRight" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7 Z" fill="#94a3b8"/></marker>
    <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><path d="M1,7 L4,0 L7,7 Z" fill="#7c3aed"/></marker>
    <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto"><path d="M1,0 L4,8 L7,0 Z" fill="#7c3aed"/></marker>
    <marker id="arrowRight2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7 Z" fill="#f59e0b"/></marker>
  </defs>
</svg>`,
        caption: 'In an isolated ion all five d-orbitals are degenerate (same energy). When six ligands coordinate, they split the orbitals into two groups: eᵍ (2 orbitals, raised — point directly at ligands) and t₂ᵍ (3 orbitals, lowered — point between ligands). The energy gap Δ determines which wavelength of visible light is absorbed when an electron jumps from t₂ᵍ to eᵍ.'
      }
    },
    {
      type: 'heading',
      id: 'h-crystal-field-theory',
      data: { text: 'Crystal Field Theory (Qualitative)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-cft-intro',
      data: {
        text: '<strong>Crystal field theory</strong> (CFT) provides a model to explain how ligands affect d-orbital energies. In CFT, ligands are treated as point charges that create an electric field around the metal ion. This electric field repels electrons in the d-orbitals, but the effect is not uniform across all five orbitals. Some d-orbitals point directly at the ligands (high repulsion, higher energy) while others point between the ligands (lower repulsion, lower energy). This directional effect causes d-orbital splitting.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-octahedral-splitting',
      data: {
        text: 'In an <strong>octahedral complex</strong>, the six ligands approach along the x, y, and z axes. The d-orbitals that point along these axes (d<sub>z²</sub> and d<sub>x²−y²</sub>) experience greater repulsion and are raised to higher energy. The d-orbitals that point between the axes (d<sub>xy</sub>, d<sub>xz</sub>, d<sub>yz</sub>) experience less repulsion and are lowered in energy. This creates a splitting pattern with two higher-energy orbitals and three lower-energy orbitals, separated by an energy gap Δ<sub>o</sub> (delta octahedral).'
      }
    },
    {
      type: 'heading',
      id: 'h-spectrochemical-series',
      data: { text: 'The Spectrochemical Series', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-series-intro',
      data: {
        text: 'The <strong>spectrochemical series</strong> is an experimental ordering of ligands by their ability to split d-orbitals—that is, by the magnitude of Δ they produce. Ligands at the beginning of the series cause small d-orbital splitting (weak field ligands), while ligands at the end cause large splitting (strong field ligands). The series is empirically derived from spectroscopic measurements of transition metal complexes.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-series-order',
      data: {
        text: '<strong>Spectrochemical Series (weak field → strong field):</strong><br/>' +
        'I⁻ < Br⁻ < SCN⁻ < Cl⁻ < NO₃⁻ < F⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO<br/>' +
        '<strong>Mnemonic:</strong> "I Brought Small Chlorine, Nitrate Falls, Hydrate Never Ammoniated Enough, Numbers Never Caught Cyanide Completely" (or create your own!)<br/>' +
        '<br/><strong>Key points:</strong><br/>' +
        '• Halides (I⁻, Br⁻, Cl⁻, F⁻) are weak field<br/>' +
        '• H₂O is intermediate<br/>' +
        '• NH₃ is stronger field than H₂O<br/>' +
        '• CN⁻ is a very strong field ligand'
      }
    },
    {
      type: 'callout',
      id: 'callout-field-strength',
      data: {
        style: 'tip',
        title: 'Weak vs Strong Field Ligands',
        text: 'Weak field ligands: cause small Δ → colours are lighter, complexes are high-spin<br/>Strong field ligands: cause large Δ → colours are deeper, complexes are low-spin<br/>This affects not only colour but also magnetic properties and stability.'
      }
    },
    {
      type: 'callout',
      id: 'callout-colourless-ions',
      data: {
        style: 'warning',
        title: 'Why Some Complex Ions Are Colourless',
        text: 'A complex is colourless if no d-d electron transition is possible:\n• d⁰ ions (e.g. Sc³⁺, Ti⁴⁺): NO d electrons to promote → no visible light absorbed → colourless\n• d¹⁰ ions (e.g. Zn²⁺, Cu⁺): d orbitals completely filled → NO vacancies for an electron to jump into → colourless\n• Non-transition metals (e.g. Al³⁺, Ca²⁺): no d electrons at all → colourless\n\nThis is why Zn²⁺ and Al³⁺ complexes/precipitates are always white or colourless, regardless of ligand.'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-hexaaqua-colours',
      data: {
        headers: ['Ion', 'd configuration', 'Colour of [M(H₂O)₆]ⁿ⁺ solution'],
        rows: [
          ['Ti³⁺', 'd¹', 'Purple/violet'],
          ['V³⁺', 'd²', 'Green'],
          ['Cr³⁺', 'd³', 'Violet-grey (often seen as green due to Cl⁻ ligand contamination)'],
          ['Mn²⁺', 'd⁵', 'Very pale pink (almost colourless)'],
          ['Fe²⁺', 'd⁶', 'Pale green'],
          ['Fe³⁺', 'd⁵', 'True colour: very pale lilac; in solution: yellow/orange (from hydrolysis products)'],
          ['Co²⁺', 'd⁷', 'Pink'],
          ['Ni²⁺', 'd⁸', 'Green'],
          ['Cu²⁺', 'd⁹', 'Pale blue'],
          ['Zn²⁺', 'd¹⁰', 'Colourless (no d-d transitions possible)']
        ],
        caption: 'Approximate colours of common hexaaqua [M(H₂O)₆]ⁿ⁺ ions'
      }
    },
    {
      type: 'heading',
      id: 'h-factors-affecting-colour',
      data: { text: 'Factors Affecting Complex Colour', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-factor-metal',
      data: {
        text: '<strong>1. Identity of the metal ion:</strong> Different metals have different d-orbital splitting patterns. For example, Cr³⁺ complexes are often green, while Co²⁺ complexes are often pink. The same ligand coordinated to different metals can produce different colours.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-oxidation',
      data: {
        text: '<strong>2. Oxidation state of the metal:</strong> Increasing oxidation state increases the positive charge on the metal, which strengthens the electric field and increases Δ. This typically shifts the colour to shorter wavelengths. For example, [Fe(H₂O)₆]²⁺ is pale green, while [Fe(H₂O)₆]³⁺ is brown/yellow (higher oxidation state, larger Δ).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-ligand',
      data: {
        text: '<strong>3. Nature of the ligand:</strong> The position of the ligand in the spectrochemical series directly determines Δ. Weak field ligands produce small Δ (light colours), while strong field ligands produce large Δ (dark colours). [Cu(H₂O)₆]²⁺ (weak field H₂O) is pale blue, while [Cu(NH₃)₄(H₂O)₂]²⁺ (stronger field NH₃) is deep blue.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-factor-coordination',
      data: {
        text: '<strong>4. Coordination number:</strong> Different coordination geometries (octahedral vs tetrahedral) produce different d-orbital splitting patterns and thus different Δ values. The same metal and ligand in octahedral and tetrahedral geometries will have different colours. For example, [CuCl₄]²⁻ (tetrahedral) is yellow/green, while [Cu(H₂O)₆]²⁺ (octahedral) is pale blue.'
      }
    },
    {
      type: 'heading',
      id: 'h-colour-examples',
      data: { text: 'Worked Examples: Predicting Colour', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-example-copper',
      data: {
        text: '<strong>Example 1: Copper complexes</strong><br/>' +
        '[Cu(H₂O)₆]²⁺: Octahedral, weak field H₂O ligand, small Δ, absorbs red light → <strong>pale blue</strong> colour<br/>' +
        '[Cu(NH₃)₄(H₂O)₂]²⁺: Octahedral, stronger field NH₃ ligand, larger Δ, absorbs blue light → <strong>deep blue</strong> colour<br/>' +
        '[CuCl₄]²⁻: Tetrahedral, weak field Cl⁻ ligand, different splitting pattern → <strong>yellow/green</strong> colour<br/>' +
        '<strong>Conclusion:</strong> Stronger field ligands → larger Δ → deeper colour.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-example-iron',
      data: {
        text: '<strong>Example 2: Iron oxidation state effect</strong><br/>' +
        '[Fe(H₂O)₆]²⁺: Fe²⁺ (lower charge), smaller Δ → <strong>pale green</strong> colour<br/>' +
        '[Fe(H₂O)₆]³⁺: Fe³⁺ (higher charge), larger Δ → <strong>brown/yellow</strong> colour<br/>' +
        '<strong>Conclusion:</strong> Higher oxidation state → larger Δ → colour shifts to shorter wavelengths (lighter shade or different colour).'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-colour',
      data: {
        items: [
          { text: 'Colour arises from d-orbital splitting and electron transitions absorbing visible light', checked: false },
          { text: 'Observed colour is complementary to absorbed colour', checked: false },
          { text: 'Spectrochemical series orders ligands from weak field (I⁻) to strong field (CN⁻)', checked: false },
          { text: 'Stronger field ligands → larger Δ → deeper colour', checked: false },
          { text: 'Higher oxidation state → larger Δ → colour shifts', checked: false },
          { text: 'Different coordination number (4 vs 6) → different splitting → different colour', checked: false },
          { text: 'UV-Vis spectrometry measures absorbance (A = log₁₀(I₀/I))', checked: false },
          { text: 'Beer-Lambert Law (A = εcl) relates absorbance linearly to concentration for dilute solutions', checked: false },
          { text: 'Calibration curves (Absorbance vs Concentration) are used to find unknown concentrations', checked: false }
        ]
      }
    },
    // ════════════════════════════════════════════════════════════════════════
    // SECTION 4 — APPLICATION: COLORIMETRY AND UV-VISIBLE SPECTROSCOPY
    // ════════════════════════════════════════════════════════════════════════
    {
      type: 'heading',
      id: 'h-uv-vis-spectrometry',
      data: { text: 'Application: Colorimetry & UV-Visible Spectroscopy', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-uv-vis-intro',
      data: {
        text: 'The colour of transition metal complexes can be analysed quantitatively using a <strong>colorimeter</strong> or a <strong>UV-Vis Absorption Spectrometer</strong>. These instruments measure how much light of specific wavelengths is absorbed by a sample. By plotting absorbance against wavelength, we can find the exact energy gap (Δ) between d-orbitals. Furthermore, the amount of absorption at the peak wavelength depends on the concentration of the complex, allowing for quantitative analysis of dilute solutions.'
      }
    },
    {
      type: 'callout',
      id: 'callout-double-beam',
      data: {
        style: 'key',
        title: '⚙️ How a Double-Beam Spectrometer Works',
        text: '<strong>1. Light Source:</strong> A combination of a deuterium lamp (for UV) and a tungsten-halogen lamp (for visible light) provides a continuous spectrum (200 nm to 800 nm).<br/><br/><strong>2. Diffraction Grating:</strong> Splits the white light into individual wavelengths. A narrow slit allows only a tiny band of wavelengths through at a time.<br/><br/><strong>3. Rotating Disc & Beams:</strong> A rotating disc splits the monochromatic beam into two paths: one passing through the <strong>Sample Cell</strong> (containing the metal complex) and one through the <strong>Reference Cell</strong> (containing only the pure solvent).<br/><br/><strong>4. Detector:</strong> Compares the intensity of light passing through the reference (I₀) to the sample (I). The absorbance (A) is calculated using A = log₁₀(I₀/I). The reference cell ensures any stray absorption by the solvent or glass is cancelled out.'
      }
    },
    {
      type: 'heading',
      id: 'h-beer-lambert',
      data: { text: 'The Beer-Lambert Law & Concentration', level: 3 }
    },
    {
      id: 'eq-beer-lambert',
      type: 'equation',
      data: {
        html: 'A = ε c l',
        caption: 'The Beer-Lambert Law relates absorbance to concentration'
      }
    },
    {
      type: 'paragraph',
      id: 'p-beer-lambert',
      data: {
        text: 'The concentration of a coloured complex can be found using the <strong>Beer-Lambert Law</strong>. Here, <strong>A</strong> is the absorbance (log₁₀(I₀/I)), <strong>ε</strong> (epsilon) is the molar absorptivity (a constant indicating how strongly a compound absorbs light at a given wavelength), <strong>c</strong> is the concentration, and <strong>l</strong> is the path length of the sample cell (usually 1 cm).'
      }
    },
    {
      type: 'list',
      id: 'list-calibration-curve',
      data: {
        style: 'numbered',
        items: [
          '<strong>Select wavelength:</strong> Standard solutions are tested to find the wavelength of maximum absorbance (λ<sub>max</sub>). This wavelength is used for all future measurements.',
          '<strong>Make standard solutions:</strong> Prepare several solutions of the complex with accurately known concentrations.',
          '<strong>Measure absorbance:</strong> Measure the absorbance of each standard solution at the chosen wavelength using the same cuvette.',
          '<strong>Plot calibration curve:</strong> Plot Absorbance vs Concentration. The Beer-Lambert Law predicts a straight line through the origin for dilute solutions.',
          '<strong>Find unknown:</strong> Measure the absorbance of the unknown solution and interpolate its concentration directly from the calibration curve.'
        ]
      }
    },
    {
      type: 'callout',
      id: 'callout-identifying-compounds',
      data: {
        style: 'tip',
        title: '💬 Qualitative Analysis: Identifying Compounds',
        text: 'In addition to finding concentrations, UV-Vis spectra can be used to identify unknown organic or inorganic compounds. By comparing the <strong>λ<sub>max</sub></strong> and <strong>molar absorptivity (ε)</strong> values of an unknown sample against a database of known structural features (chromophores), chemists can deduce the presence of specific conjugated systems or transition metal environments within the molecule.'
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Colour arises from d-d transitions: ligands split d-orbitals, and electrons absorb specific wavelengths to jump between energy levels. The complementary colour is observed.\n\nApply: [Cu(H₂O)₆]²⁺ is pale blue. Replacing H₂O with NH₃ gives deep blue. Explain using the spectrochemical series.\n\nAnalyze: Why are Sc³⁺ (d⁰) and Zn²⁺ (d¹⁰) complexes colourless? Relate to d-d transitions.\n\nEvaluate: Crystal field theory explains colour but has limitations. Discuss cases where it fails (e.g. charge-transfer transitions).'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-colour',
      data: {
        text: 'Transition metal complexes are coloured because ligands split d-orbitals into different energy levels. Electrons absorb visible light (Δ = hν) to jump between levels; the observed colour is complementary to absorbed colour. The spectrochemical series (I⁻ to CN⁻) orders ligands by splitting power. Colour is affected by: (1) metal identity, (2) oxidation state (higher → larger Δ), (3) ligand type (stronger field → larger Δ), (4) coordination number (octahedral vs tetrahedral). [Cu(H₂O)₆]²⁺ is pale blue; [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue (stronger ligand, larger Δ).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-why-coloured',
        prompt: 'Why are transition metal complexes coloured? Explain the role of d-orbital splitting.'
      },
      {
        id: 'cue-2',
        blockId: 'p-complementary-colour',
        prompt: 'What is meant by "complementary colour"? Give two examples.'
      },
      {
        id: 'cue-3',
        blockId: 'p-series-order',
        prompt: 'State the spectrochemical series and explain what weak and strong field ligands are.'
      },
      {
        id: 'cue-4',
        blockId: 'p-factor-oxidation',
        prompt: 'How does the oxidation state of a metal ion affect the colour of its complexes?'
      },
      {
        id: 'cue-5',
        blockId: 'p-example-copper',
        prompt: 'Explain why [Cu(H₂O)₆]²⁺ is pale blue while [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue.'
      },
      {
        id: 'cue-6',
        blockId: 'callout-double-beam',
        prompt: 'Describe the main components of a double-beam UV-Vis spectrometer and the purpose of the reference cell.'
      },
      {
        id: 'cue-7',
        blockId: 'eq-beer-lambert',
        prompt: 'State the Beer-Lambert Law and define all of its terms. How is a calibration curve used to find an unknown concentration?'
      }
    ],
    summaryText: 'Transition metal complexes are coloured because ligands split d-orbitals; electrons absorb visible light to jump between levels; observed colour is complementary to absorbed. Spectrochemical series: I⁻ < Cl⁻ < H₂O < NH₃ < CN⁻. Four factors: (1) metal identity, (2) oxidation state (higher → larger Δ → deeper colour), (3) ligand (stronger field → larger Δ), (4) coordination number. UV-Vis spectrometry (A = log₁₀(I₀/I)) measures absorption peaks; using the Beer-Lambert Law (A = εcl), absorbance is plotted on a calibration curve to find unknown concentrations.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Crystal Field Theory and Spectroscopy',
      detail: 'Crystal field theory qualitatively explains the colours of transition metal complexes through d-orbital splitting. The spectrochemical series is empirically derived from UV-Vis spectroscopy.',
      year: '2023',
      source: 'A-Level Chemistry Coordination Chemistry',
      tags: ['colour', 'crystal-field-theory', 'spectrochemical-series']
    }
  ]
};
