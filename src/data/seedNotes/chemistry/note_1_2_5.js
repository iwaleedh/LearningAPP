/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 5
 * "Atomic model development"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.5
 */
export const note_chemistry_1_2_5 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe the development of the atomic model from Dalton to the wave-mechanical model, and explain the experimental evidence that led to each revision.' },
      terms: []
    },
    {
      id: 'h-timeline',
      type: 'heading',
      data: { text: 'Timeline of Atomic Models', level: 2 },
      terms: []
    },
    {
      id: 'list-timeline',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '1803 — Dalton: Solid indivisible spheres; no subatomic particles; compounds formed from fixed atom ratios',
          '1897 — Thomson: Discovered the electron via cathode ray tube; proposed plum pudding model (electrons embedded in positive sphere)',
          '1911 — Rutherford: Gold foil α-scattering experiment; proposed nuclear model — tiny dense positive nucleus with electrons orbiting in empty space',
          '1913 — Bohr: Electrons orbit in fixed circular energy levels (shells); energy is quantised; explains hydrogen line emission spectrum',
          '1920s+ — Wave-mechanical model: Electrons have wave-particle duality; orbitals are 95% probability regions; Schrödinger wave functions replace fixed orbits'
        ]
      },
      terms: []
    },
    {
      id: 'svg-atomic-timeline',
      type: 'svg',
      data: {
        caption: 'The evolution of the atomic model. Each discovery refined our understanding of subatomic particles and their arrangement.',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 280" font-family="system-ui,sans-serif"><rect width="800" height="280" fill="#0b0f1a" rx="12"/><line x1="50" y1="200" x2="750" y2="200" stroke="#3b82f6" stroke-width="4"/><circle cx="100" cy="200" r="8" fill="#f59e0b"/><circle cx="250" cy="200" r="8" fill="#f59e0b"/><circle cx="400" cy="200" r="8" fill="#f59e0b"/><circle cx="550" cy="200" r="8" fill="#f59e0b"/><circle cx="700" cy="200" r="8" fill="#f59e0b"/><text x="100" y="225" text-anchor="middle" font-size="14" font-weight="bold" fill="#f8fafc">1803</text><text x="100" y="245" text-anchor="middle" font-size="14" fill="#cbd5e1">Dalton</text><circle cx="100" cy="100" r="35" fill="#475569"/><text x="100" y="155" text-anchor="middle" font-size="12" fill="#9ca3af">Solid Sphere</text><text x="250" y="225" text-anchor="middle" font-size="14" font-weight="bold" fill="#f8fafc">1897</text><text x="250" y="245" text-anchor="middle" font-size="14" fill="#cbd5e1">Thomson</text><circle cx="250" cy="100" r="35" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="2"/><circle cx="235" cy="85" r="5" fill="#3b82f6"/><circle cx="265" cy="95" r="5" fill="#3b82f6"/><circle cx="245" cy="115" r="5" fill="#3b82f6"/><text x="250" y="95" text-anchor="middle" font-size="24" fill="#ef4444" opacity="0.5">+</text><text x="250" y="155" text-anchor="middle" font-size="12" fill="#9ca3af">Plum Pudding</text><text x="400" y="225" text-anchor="middle" font-size="14" font-weight="bold" fill="#f8fafc">1911</text><text x="400" y="245" text-anchor="middle" font-size="14" fill="#cbd5e1">Rutherford</text><ellipse cx="400" cy="100" rx="40" ry="12" fill="none" stroke="#64748b" stroke-width="1.5" transform="rotate(30 400 100)"/><ellipse cx="400" cy="100" rx="40" ry="12" fill="none" stroke="#64748b" stroke-width="1.5" transform="rotate(-30 400 100)"/><circle cx="400" cy="100" r="6" fill="#f59e0b"/><circle cx="370" cy="80" r="3" fill="#3b82f6"/><circle cx="430" cy="120" r="3" fill="#3b82f6"/><text x="400" y="155" text-anchor="middle" font-size="12" fill="#9ca3af">Nuclear Model</text><text x="550" y="225" text-anchor="middle" font-size="14" font-weight="bold" fill="#f8fafc">1913</text><text x="550" y="245" text-anchor="middle" font-size="14" fill="#cbd5e1">Bohr</text><circle cx="550" cy="100" r="7" fill="#f59e0b"/><circle cx="550" cy="100" r="20" fill="none" stroke="#64748b" stroke-width="1.5"/><circle cx="550" cy="100" r="35" fill="none" stroke="#64748b" stroke-width="1.5"/><circle cx="550" cy="80" r="3.5" fill="#3b82f6"/><circle cx="530" cy="125" r="3.5" fill="#3b82f6"/><circle cx="575" cy="125" r="3.5" fill="#3b82f6"/><text x="550" y="155" text-anchor="middle" font-size="12" fill="#9ca3af">Fixed Shells</text><text x="700" y="225" text-anchor="middle" font-size="14" font-weight="bold" fill="#f8fafc">1920s+</text><text x="700" y="245" text-anchor="middle" font-size="14" fill="#cbd5e1">Quantum / Wave</text><circle cx="700" cy="100" r="5" fill="#f59e0b"/><ellipse cx="700" cy="100" rx="15" ry="30" fill="#818cf8" fill-opacity="0.4" transform="rotate(45 700 100)"/><ellipse cx="700" cy="100" rx="15" ry="30" fill="#818cf8" fill-opacity="0.4" transform="rotate(-45 700 100)"/><circle cx="700" cy="100" r="20" fill="#818cf8" fill-opacity="0.2"/><text x="700" y="155" text-anchor="middle" font-size="12" fill="#9ca3af">Electron Cloud</text></svg>'
      },
      terms: []
    },
    {
      id: 'h-dalton',
      type: 'heading',
      data: { text: "Dalton's Atomic Theory (1803)", level: 2 },
      terms: []
    },
    {
      id: 'list-dalton',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'All matter is made of tiny, indivisible particles called atoms',
          'All atoms of the same element are identical in mass and properties',
          'Atoms of different elements have different masses and properties',
          'Compounds are formed by combining atoms of different elements in fixed, simple whole-number ratios',
          'Atoms cannot be created, destroyed, or subdivided in a chemical reaction — they are only rearranged',
          'Represented atoms as solid, featureless spheres with no internal structure'
        ]
      },
      terms: []
    },
    {
      id: 'callout-dalton-limit',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Limitation of Dalton's Model",
        text: "Dalton's model had no subatomic particles — it could not explain:<br/>• Electrical conductivity or electrolysis (no charged particles within the atom)<br/>• The existence of isotopes (atoms of the same element with different masses)<br/>• The fact that cathode rays (electrons) were emitted from all metals"
      },
      terms: []
    },
    {
      id: 'h-thomson',
      type: 'heading',
      data: { text: "Thomson's Plum Pudding Model (1897)", level: 2 },
      terms: []
    },
    {
      id: 'callout-thomson-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Cathode Ray Tube Experiment',
        text: '<strong>Apparatus:</strong> Sealed glass tube at very low pressure with metal electrodes at each end and a high voltage applied across them.<br/><br/><strong>Observation:</strong> A beam (cathode ray) travels from the cathode (−) to the anode (+); the beam is deflected by both electric and magnetic fields towards the positive plate.<br/><br/><strong>Conclusion:</strong> Cathode rays consist of negatively charged particles — later named <em>electrons</em>. Electrons were present in all metal cathodes tested regardless of the element, so electrons must be a universal component of all atoms. Thomson measured the charge-to-mass ratio (e/m) of these particles.'
      },
      terms: []
    },
    {
      id: 'list-thomson',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Proposed the "plum pudding" model: atom is a diffuse sphere of positive charge with negative electrons embedded throughout (like plums in a pudding)',
          'Overall atom is electrically neutral — the negative electrons balance the positive sphere',
          'First model to include subatomic particles (electrons)',
          'Explains why atoms can lose electrons (ionisation)',
          "Limitation: no nucleus — cannot explain Rutherford's large-angle α-particle deflections"
        ]
      },
      terms: []
    },
    {
      id: 'h-rutherford',
      type: 'heading',
      data: { text: "Rutherford's Nuclear Model (1911)", level: 2 },
      terms: []
    },
    {
      id: 'callout-rutherford-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'The Gold Foil (α-Particle Scattering) Experiment',
        text: '<strong>Apparatus:</strong> A radioactive source emitting α-particles (He²⁺; charge 2+, mass 4 u) directed at a very thin gold foil; a circular zinc sulfide (ZnS) detector screen surrounded the foil to detect where α-particles struck.<br/><br/><strong>Expected result (based on Thomson\'s plum pudding):</strong> All α-particles should pass straight through with at most very minor deflections — positive charge is too spread out to repel a fast α-particle strongly.<br/><br/><strong>Actual observations:</strong><br/>• Vast majority (~99%) passed straight through → atom is mostly empty space<br/>• A small fraction were deflected at large angles (> 90°) → a small concentrated region of positive charge inside the atom<br/>• Very few (~1 in 8000) bounced almost straight back (≈ 180°) → this positive region is extremely small and very dense<br/><br/><strong>Rutherford\'s conclusion:</strong> Atoms have a tiny, dense, positively charged <em>nucleus</em> at the centre surrounded by mostly empty space in which electrons orbit at relatively large distances.'
      },
      terms: []
    },
    {
      id: 'svg-rutherford',
      type: 'svg',
      data: {
        caption: "Rutherford's gold foil experiment — the three types of α-particle paths observed",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 310" font-family="sans-serif" font-size="12">
  <rect width="500" height="310" fill="#0f172a" rx="8"/>
  <text x="250" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a1a2e">Rutherford α-Particle Scattering Experiment</text>
  <!-- Detector screen arc (semicircle right of foil) -->
  <path d="M 300 150 m -120 0 a 120 120 0 1 1 240 0" fill="none" stroke="#888" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="436" y="88" text-anchor="middle" fill="#555" font-size="11">Detector</text>
  <text x="436" y="101" text-anchor="middle" fill="#555" font-size="11">screen (ZnS)</text>
  <!-- Gold foil -->
  <line x1="300" y1="62" x2="300" y2="238" stroke="#c8a000" stroke-width="5"/>
  <text x="300" y="54" text-anchor="middle" fill="#9a7800" font-size="11" font-weight="bold">Gold foil</text>
  <!-- Nucleus -->
  <circle cx="300" cy="150" r="6" fill="#e63946"/>
  <text x="314" y="147" fill="#e63946" font-size="10" font-weight="bold">nucleus</text>
  <!-- Alpha source box -->
  <rect x="50" y="136" width="62" height="28" rx="4" fill="#264653"/>
  <text x="81" y="154" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold">α source</text>
  <!-- Path 1: straight through (blue) -->
  <line x1="112" y1="150" x2="422" y2="150" stroke="#2196F3" stroke-width="2"/>
  <polygon points="422,150 412,145 412,155" fill="#2196F3"/>
  <text x="428" y="148" fill="#2196F3" font-size="11" font-weight="bold">①</text>
  <!-- Path 2: small deflection (green) -->
  <path d="M 112 132 L 297 144 L 390 105" fill="none" stroke="#4CAF50" stroke-width="2"/>
  <polygon points="390,105 380,109 383,119" fill="#4CAF50"/>
  <text x="394" y="102" fill="#4CAF50" font-size="11" font-weight="bold">②</text>
  <!-- Path 3: large deflection / bounce back (red) -->
  <path d="M 112 167 L 294 156 L 148 235" fill="none" stroke="#FF5722" stroke-width="2"/>
  <polygon points="148,235 157,226 163,236" fill="#FF5722"/>
  <text x="130" y="250" fill="#FF5722" font-size="11" font-weight="bold">③</text>
  <!-- Legend -->
  <rect x="25" y="265" width="450" height="40" rx="4" fill="#1e293b" stroke="#ddd"/>
  <line x1="37" y1="279" x2="60" y2="279" stroke="#2196F3" stroke-width="2"/>
  <text x="65" y="283" fill="#333" font-size="10">① Straight through (majority — empty space)</text>
  <line x1="37" y1="294" x2="60" y2="294" stroke="#4CAF50" stroke-width="2"/>
  <text x="65" y="298" fill="#333" font-size="10">② Small deflection</text>
  <line x1="230" y1="294" x2="253" y2="294" stroke="#FF5722" stroke-width="2"/>
  <text x="258" y="298" fill="#333" font-size="10">③ Large deflection / bounced back (~1 in 8000)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'table-observations',
      type: 'comparisonTable',
      data: {
        caption: "Rutherford's observations and their conclusions",
        headers: ['Observation', 'Conclusion'],
        rows: [
          ['Vast majority of α-particles pass straight through', 'Atom is mostly empty space'],
          ['Small fraction deflected at large angles (> 90°)', 'Small region of concentrated positive charge (nucleus) exists in the atom'],
          ['Very few (~1 in 8000) bounce back at ≈ 180°', 'Nucleus is extremely small and very dense (contains most of the atomic mass)']
        ]
      },
      terms: []
    },
    {
      id: 'callout-rutherford-limit',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Limitation of Rutherford's Model",
        text: 'Classical electromagnetism predicts that a charged particle moving in a curved orbit (an electron) must continuously emit electromagnetic radiation and lose energy, causing it to spiral into the nucleus within ≈ 10⁻¹¹ s.<br/>• This would make all atoms unstable — contradicting the existence of stable matter<br/>• Rutherford\'s model also gives no explanation for the discrete line emission spectrum of hydrogen<br/>• Bohr resolved the stability problem in 1913 by quantising electron energies'
      },
      terms: []
    },
    {
      id: 'h-bohr',
      type: 'heading',
      data: { text: "Bohr's Model (1913)", level: 2 },
      terms: []
    },
    {
      id: 'list-bohr',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Electrons orbit the nucleus in fixed circular paths called <strong>energy levels (shells)</strong>, each with a specific fixed energy — energy is quantised',
          'Electrons do <em>not</em> emit radiation while in these fixed orbits — atoms are stable in their ground state',
          'Electrons jump to a higher shell by <strong>absorbing</strong> a photon with exactly the right energy (ΔE = hf)',
          'Electrons emit a photon of specific energy (specific frequency/wavelength) when they <strong>fall back</strong> to a lower shell',
          'Each specific electron transition produces a specific wavelength → explains the <strong>discrete line emission spectrum</strong> of hydrogen',
          'Shells are labelled with principal quantum number n = 1, 2, 3, …; n = 1 is closest to the nucleus (lowest energy)'
        ]
      },
      terms: []
    },
    {
      id: 'callout-bohr-evidence',
      type: 'callout',
      data: {
        style: 'key',
        title: "Evidence: Hydrogen Line Emission Spectrum",
        text: 'When hydrogen gas is heated or subjected to an electric discharge, it emits light at only <strong>specific, discrete wavelengths</strong> — not a continuous spectrum.<br/><br/>• This is direct evidence that electron energy is <strong>quantised</strong>: electrons can only exist at discrete energy levels<br/>• Each spectral line corresponds to a specific electron transition (e.g. n = 3 → n = 2 gives the red line in the Balmer series)<br/>• A continuous spectrum would be observed if electrons could have any energy value<br/><br/>Successive ionisation energy data also supports discrete shells: large jumps in IE occur at shell boundaries (e.g. Na: IE₁ → IE₂ = break from n=3 → n=2)'
      },
      terms: []
    },
    {
      id: 'callout-bohr-limit',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Limitation of Bohr's Model",
        text: '<strong>Only accurate for hydrogen and hydrogen-like (one-electron) atoms:</strong><br/>• Cannot predict accurate spectra of multi-electron atoms<br/>• Cannot explain fine structure (splitting) of spectral lines<br/>• Treats electrons as particles in fixed circular orbits — incompatible with wave-particle duality<br/>• Conflicts with the Heisenberg uncertainty principle (cannot know both position and momentum precisely at once)<br/>→ The wave-mechanical model was developed to overcome these limitations'
      },
      terms: []
    },
    {
      id: 'h-wave',
      type: 'heading',
      data: { text: 'Wave-Mechanical (Modern Quantum) Model (1920s+)', level: 2 },
      terms: []
    },
    {
      id: 'list-wave',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>de Broglie (1924):</strong> Electrons have wave-particle duality — they behave both as particles and as waves (wavelength λ = h/mv)',
          '<strong>Heisenberg uncertainty principle:</strong> It is impossible to simultaneously know the precise position <em>and</em> precise momentum of an electron',
          '<strong>Schrödinger (1926):</strong> Replaced fixed orbits with mathematical wave functions (ψ) that describe the probability of finding an electron at any given point',
          'An <strong>atomic orbital</strong> is the region of space in which there is a <strong>95% probability</strong> of finding an electron',
          's orbitals are spherical; p orbitals are dumbbell-shaped (two lobes)',
          'Energy levels (shells) contain sub-shells (s, p, d, f); each sub-shell contains one or more orbitals',
          'Each orbital can hold a maximum of <strong>2 electrons</strong> with opposite spins (Pauli exclusion principle)',
          'This model accurately describes the electronic structure of all elements and explains the full periodic table'
        ]
      },
      terms: []
    },
    {
      id: 'callout-orbital-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition: Atomic Orbital',
        text: 'An <strong>atomic orbital</strong> is a region of space around the nucleus in which there is a <strong>95% probability of finding an electron</strong>.<br/><br/>• s orbital: spherical; one per s sub-shell; holds max 2 e⁻<br/>• p orbital: two-lobed dumbbell shape; three per p sub-shell (px, py, pz); holds max 6 e⁻ in total<br/>• The electron has no fixed position or orbit — it exists as a probability distribution'
      },
      terms: []
    },
    {
      id: 'table-model-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of atomic models in chronological order',
        headers: ['Scientist', 'Year', 'Key feature of model', 'Evidence / Reason revised'],
        rows: [
          ['Dalton', '1803', 'Solid indivisible spheres; no subatomic particles', 'Discovery of electron (Thomson, 1897) showed atoms have internal structure'],
          ['Thomson', '1897', 'Plum pudding: electrons embedded in positive sphere', "Rutherford's α-scattering (1911): large deflections require a nucleus"],
          ['Rutherford', '1911', 'Dense positive nucleus; electrons orbit in mostly empty space', 'Classical physics: orbiting electrons should spiral in; Bohr resolved with quantised shells'],
          ['Bohr', '1913', 'Electrons in fixed circular shells; quantised energy; ΔE = hf', 'Fails for multi-electron atoms; wave-particle duality; Heisenberg uncertainty principle'],
          ['Wave-mechanical', '1920s+', 'Orbitals = 95% probability regions; Schrödinger wave functions', 'Accurately explains spectra of all elements and full periodic table']
        ]
      },
      terms: []
    },
    {
      id: 'h-practice',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq1',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Practice Q1: Rutherford's Gold Foil Experiment Observations",
        text: "<strong>Question:</strong> Rutherford fired α-particles at a thin gold foil. Describe what was observed and explain what each observation tells us about atomic structure.<br/><br/><strong>① Most pass straight through:</strong> The atom is mostly empty space — the electron cloud is diffuse and offers negligible obstruction to the positively charged, fast-moving α-particles.<br/><br/><strong>② Small fraction deflected at large angles:</strong> There is a small concentrated region of positive charge inside the atom (the nucleus). When an α-particle passes close to the nucleus, the electrostatic repulsion between two positive charges deflects it strongly.<br/><br/><strong>③ Very few bounce back (≈ 180°):</strong> The nucleus is extremely small relative to the atom (nuclear radius ≈ 10⁻¹⁵ m; atomic radius ≈ 10⁻¹⁰ m) and extremely dense — it must contain most of the atom's mass, concentrating the electrostatic repulsion in a tiny volume."
      },
      terms: []
    },
    {
      id: 'callout-pq2',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Practice Q2: Bohr's Model and the Hydrogen Line Spectrum",
        text: "<strong>Question:</strong> Explain why hydrogen emits light at only specific wavelengths, and how Bohr's model accounts for this.<br/><br/><strong>Answer (point form):</strong><br/>• Hydrogen emits light at specific wavelengths only (line emission spectrum) because electrons can only exist at discrete energy levels — energy is quantised<br/>• When an electron absorbs energy, it is promoted from a lower shell (e.g. n = 1) to a higher shell (e.g. n = 3) — the atom is in an excited state<br/>• The excited electron spontaneously falls back to a lower shell and emits a photon: ΔE = hf<br/>• Each specific transition produces a specific frequency/wavelength of light → discrete spectral lines<br/>• If electron energies were not quantised, a continuous spectrum would be produced"
      },
      terms: []
    },
    {
      id: 'callout-pq3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Comparing Limitations of Three Models',
        text: "<strong>Question:</strong> State one limitation of (a) Thomson's, (b) Rutherford's, and (c) Bohr's model, and identify what evidence led to each being revised.<br/><br/><strong>(a) Thomson:</strong> No nucleus — cannot explain why α-particles are scattered at large angles. Disproved by Rutherford's α-scattering experiment (1911).<br/><br/><strong>(b) Rutherford:</strong> Classical physics predicts orbiting electrons should continuously radiate energy and spiral into nucleus → atoms should collapse. Resolved by Bohr's quantised fixed energy levels (1913).<br/><br/><strong>(c) Bohr:</strong> Only accurate for hydrogen; cannot explain spectra of multi-electron atoms or fine structure of spectral lines; incompatible with wave-particle duality and the Heisenberg uncertainty principle. Replaced by the wave-mechanical model."
      },
      terms: []
    },
    {
      id: 'checklist-1-2-5',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the key features of Dalton\'s atomic model and give one limitation', checked: false },
          { text: 'Describe the cathode ray tube experiment and state Thomson\'s conclusion', checked: false },
          { text: 'Describe the plum pudding model and explain why it was disproved', checked: false },
          { text: 'Describe Rutherford\'s gold foil experiment: apparatus, expected result, actual observations', checked: false },
          { text: 'State Rutherford\'s three conclusions from the gold foil observations (with atomic scale data)', checked: false },
          { text: 'Explain the limitation of Rutherford\'s model (electron spiral-in) and how Bohr resolved it', checked: false },
          { text: 'Describe Bohr\'s model: fixed circular shells, quantised energy, electron transitions (absorb/emit photons)', checked: false },
          { text: 'Explain how Bohr\'s model accounts for the hydrogen line emission spectrum', checked: false },
          { text: 'State two limitations of Bohr\'s model', checked: false },
          { text: 'Define an atomic orbital as a 95% probability region', checked: false },
          { text: 'State the key principles of the wave-mechanical model: de Broglie (wave-particle duality), Heisenberg (uncertainty), Schrödinger (wave functions)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Atomic model development (chronological): Dalton (1803) — solid indivisible spheres, no subatomic structure. Thomson (1897) — cathode ray tube discovered electrons; plum pudding model (e⁻ embedded in positive sphere). Rutherford (1911) — α-particle gold foil experiment; atom is mostly empty space; tiny dense positive nucleus; electrons orbit. Limitation: classical physics predicts electron spiral-in. Bohr (1913) — electrons in fixed circular shells (energy levels); energy quantised; electron transitions absorb/emit photons of specific energy ΔE = hf; explains H line emission spectrum. Limitation: only accurate for hydrogen. Wave-mechanical model (1920s+) — de Broglie: electrons have wave-particle duality; Heisenberg: cannot know position and momentum simultaneously; Schrödinger: wave functions → atomic orbitals; orbital = region of 95% probability of finding e⁻; s = spherical, p = dumbbell; max 2 e⁻ per orbital.'
      },
      terms: []
    }
  ],

  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-rutherford-exp', prompt: "Describe Rutherford's gold foil experiment. State the three key observations and the conclusion drawn from each." },
      { id: 'c2', blockId: 'callout-bohr-evidence', prompt: "What experimental evidence supports Bohr's model of fixed electron energy levels?" },
      { id: 'c3', blockId: 'callout-rutherford-limit', prompt: "What is the key limitation of Rutherford's nuclear model and how did Bohr address it?" },
      { id: 'c4', blockId: 'callout-orbital-def', prompt: "Define an atomic orbital. How does this differ from Bohr's fixed electron orbits?" },
      { id: 'c5', blockId: 'table-model-compare', prompt: "State the five atomic models in chronological order. For each, give the key feature and the evidence/reason it was revised." },
      { id: 'c6', blockId: 'callout-bohr-limit', prompt: "State two limitations of Bohr's atomic model." },
      { id: 'c7', blockId: 'list-wave', prompt: "State the contributions of de Broglie, Heisenberg, and Schrödinger to the wave-mechanical model." }
    ],
    summaryText: "Dalton: indivisible spheres. Thomson: plum pudding (e⁻ in positive sphere) — disproved by Rutherford. Rutherford: nuclear model — gold foil showed dense nucleus + mostly empty space; limitation: electrons should spiral in. Bohr: fixed shells + quantised energy → explains H line spectrum; limitation: only accurate for H. Wave-mechanical: atomic orbitals (95% probability regions); s (spherical), p (dumbbell); max 2 e⁻ per orbital; wave-particle duality + Heisenberg uncertainty principle.",
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_2_5;