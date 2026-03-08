/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 0
 * "Ionic bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.1
 */
export const note_chemistry_1_3_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Describe ionic bonding as the electrostatic attraction between oppositely charged ions. Draw dot-and-cross diagrams for ionic compounds.' },
      terms: []
    },
    {
      id: 'h-formation',
      type: 'heading',
      data: { text: 'Formation of Ions', level: 2 },
      terms: []
    },
    {
      id: 'p-formation',
      type: 'paragraph',
      data: { text: 'Ionic bonds form between a <strong>metal</strong> and a <strong>non-metal</strong>. The metal atom <strong>loses</strong> one or more outer electrons to form a positively charged ion (cation). The non-metal atom <strong>gains</strong> those electrons to form a negatively charged ion (anion). Both achieve a stable noble-gas electron configuration.' },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Ionic Bonding',
        text: '<strong>Ionic bonding</strong> is the strong electrostatic attraction between oppositely charged ions throughout a giant ionic lattice.<br/><br/>This is NOT a bond between two individual ions — it acts in all directions throughout the giant lattice structure.'
      },
      terms: ['Ionic bonding', 'Giant ionic lattice']
    },
    {
      id: 'h-dot',
      type: 'heading',
      data: { text: 'Dot-and-Cross Diagrams', level: 2 },
      terms: []
    },
    {
      id: 'list-dot-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Draw the electronic configurations of each atom (outer shell only is typical).',
          'Show electrons from different atoms using different symbols: dots (·) and crosses (×).',
          'Draw square brackets around the ion, with the charge shown outside.',
          'For a cation: draw the ion with the lost electrons <em>removed</em>.',
          'For an anion: draw the ion with the gained electrons <em>added</em>.'
        ]
      },
      terms: ['Dot-and-cross diagram']
    },
    {
      id: 'callout-nacl',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: NaCl (sodium chloride)',
        text: 'Na: [2,8,1] → Na⁺: [2,8] &nbsp; (loses 1 electron)<br/>Cl: [2,8,7] → Cl⁻: [2,8,8] &nbsp; (gains 1 electron)<br/><br/>Ions drawn with outer electrons shown as dots/crosses, surrounded by square brackets with charge outside:<br/>[Na]⁺ and [Cl]⁻<br/><br/>Both ions have noble gas (neon/argon) configurations.'
      },
      terms: []
    },
    {
      id: 'callout-mgcl2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: MgCl₂ (magnesium chloride)',
        text: 'Mg: [2,8,2] → Mg²⁺: [2,8]  (loses 2 electrons)<br/>2× Cl: [2,8,7] → 2× Cl⁻: [2,8,8]  (each gains 1 electron)<br/><br/>One magnesium atom donates one electron to EACH of two chlorine atoms.<br/>Formula: MgCl₂ (one Mg²⁺ for every two Cl⁻ ions).'
      },
      terms: []
    },
    {
      id: 'callout-polyatomic',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Compounds with polyatomic ions',
        text: 'Some ionic compounds contain polyatomic ions such as OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, NH₄⁺. In dot-and-cross diagrams, enclose the entire polyatomic ion in square brackets with the charge outside.<br/><br/>E.g. Ca(OH)₂: one Ca²⁺ ion and two [OH]⁻ ions.'
      },
      terms: ['Polyatomic ion']
    },
    {
      id: 'h-noble-gas-limit',
      type: 'heading',
      data: { text: 'Limitations: Not All Ions Have Noble Gas Configurations', level: 2 },
      terms: []
    },
    {
      id: 'callout-non-noble',
      type: 'callout',
      data: {
        style: 'key',
        title: 'When Atoms Do NOT Form Noble Gas Ions',
        text: 'At GCSE, you learned that atoms form ions to achieve a noble gas configuration. This is true for <strong>Groups 1, 2, and Al (Group 3)</strong> — their ions match the nearest noble gas. However, many common ions do NOT have noble gas electron configurations:<br/><br/><strong>Common non-noble-gas ions (transition metals + post-transition metals):</strong><br/>• <strong>Fe³⁺:</strong> [Ar]3d⁵ (not neon or argon)<br/>• <strong>Cu²⁺:</strong> [Ar]3d⁹<br/>• <strong>Zn²⁺:</strong> [Ar]3d¹⁰<br/>• <strong>Ag⁺:</strong> [Kr]4d¹⁰<br/>• <strong>Pb²⁺:</strong> [Xe]4f¹⁴5d¹⁰6s²<br/><br/>These atoms find it energetically favourable to lose outer s electrons (occasionally d electrons), but the energy cost of removing d electrons to reach a noble gas core is far too high.<br/><br/><strong>Rule:</strong> Ions form when it is <em>energetically favourable overall</em> for the whole lattice — not simply to achieve 8 outer electrons.'
      },
      terms: ['Noble gas configuration']
    },
    {
      id: 'callout-ion-energetics',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why Ca Forms Ca²⁺ (Not Ca⁺ or Ca³⁺) — Energetics',
        text: 'The charge an ion forms is determined by the overall energetics of forming the ionic compound (lattice enthalpy vs ionisation energies):<br/><br/>If calcium formed <strong>CaCl (Ca⁺Cl⁻)</strong>: lattice enthalpy would be smaller (lower charge) → overall ΔHf ≈ −171 kJ mol⁻¹<br/>If calcium formed <strong>CaCl₂ (Ca²⁺Cl₂⁻)</strong>: removing a 2nd electron costs more IE, but the higher charge gives a much larger lattice enthalpy → overall ΔHf ≈ −795 kJ mol⁻¹ (much more stable!)<br/>If calcium formed <strong>CaCl₃ (Ca³⁺)</strong>: the 3rd ionisation energy of Ca is enormous (4940 kJ mol⁻¹ — removing from an inner shell). No realistic lattice enthalpy could compensate → overall ΔHf ≈ +1341 kJ mol⁻¹ (unstable, would not form).<br/><br/><strong>Conclusion:</strong> Ca²⁺ is by far the most energetically stable option. Ion charge is determined by the overall energy balance, not just the "8-electron rule".'
      },
      terms: []
    },
    {
      id: 'h-polarization',
      type: 'heading',
      data: { text: 'Polarization of Ionic Bonds', level: 2 },
      terms: []
    },
    {
      id: 'callout-polarization',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Polarization — Distortion of the Anion',
        text: 'In an ideal ionic bond, both ions are perfectly spherical. However, a small, highly charged <strong>cation</strong> can attract the electron cloud of the <strong>anion</strong> towards itself, distorting it from a spherical shape to an oval shape. This is called <strong>polarization</strong>.<br/><br/>As the distortion increases, there is an increasing overlap of electron density between the cation and anion — the bond develops <strong>covalent character</strong>.<br/><br/><strong>Highest polarizing power (cation):</strong> small ionic radius AND high charge (e.g. Li⁺ vs Na⁺ — Li⁺ polarizes more)<br/><strong>Most easily polarized (anion):</strong> large ionic radius AND high charge (e.g. I⁻ is polarized more easily than F⁻)<br/><br/><em>Example: LiI has significant covalent character due to the combination of a small, high-charge-density Li⁺ and a large, easily polarized I⁻.</em>'
      },
      terms: ['Polarization', 'Polarizing power', 'Charge density', 'Covalent character']
    },
    {
      id: 'h-isoelectronic-radius',
      type: 'heading',
      data: { text: 'Ionic Radius Trends — Isoelectronic Ions', level: 2 },
      terms: []
    },
    {
      id: 'callout-isoelectronic-radius',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Isoelectronic Ions: Same Electrons, Different Protons',
        text: '<strong>Isoelectronic ions</strong> have the same number of electrons (same electron configuration) but different numbers of protons.<br/><br/><strong>Key rule:</strong> For isoelectronic ions, the MORE protons (higher nuclear charge), the SMALLER the ionic radius — because the same electrons are attracted more strongly to a larger nucleus.<br/><br/><strong>Example (all have 1s² 2s² 2p⁶ 3s² 3p⁶ — 18 electrons):</strong><br/>S²⁻ (16p) → Cl⁻ (17p) → K⁺ (19p) → Ca²⁺ (20p)<br/>Size: S²⁻ &gt; Cl⁻ &gt; K⁺ &gt; Ca²⁺ (radius decreasing as protons increase)<br/><br/><em>Exam MCQ twist: from the list Cl⁻, Ca²⁺, K⁺, S²⁻ — which has the smallest ionic radius? → Ca²⁺ (20 protons = most protons in this isoelectronic set)</em>'
      },
      terms: ['Isoelectronic', 'Ionic radius']
    },
    {
      id: 'h-evidence',
      type: 'heading',
      data: { text: 'Evidence for the Existence of Ions', level: 2 },
      terms: []
    },
    {
      id: 'callout-electrolysis',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Experiment: Electrolysis of Copper(II) Chromate(VI)',
        text: '<strong>Setup:</strong> Pass direct current through a solution of copper(II) chromate(VI) (green in colour).<br/><br/><strong>Ions present:</strong><br/>• Cu²⁺ (blue) — positive ion<br/>• CrO₄²⁻ (yellow) — negative ion<br/>When together, the colours mix to give green.<br/><br/><strong>Observation:</strong><br/>• Blue colour develops at the <strong>cathode</strong> (negative electrode) — Cu²⁺ is attracted to it<br/>• Yellow colour develops at the <strong>anode</strong> (positive electrode) — CrO₄²⁻ is attracted to it<br/><br/><strong>Conclusion:</strong> The separation of colours at different electrodes proves that the substance contains <em>ions with opposite charges</em> that can move independently. This would not happen with neutral atoms or molecules.'
      },
      terms: ['Electrolysis', 'Cathode', 'Anode']
    },
    {
      id: 'h-practice-ionic',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-ionic1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Smallest Ionic Radius (Jan 2017 MCQ)',
        text: '<strong>Question:</strong> Which of these ions has the smallest ionic radius? Cl⁻, Ca²⁺, K⁺, S²⁻<br/><br/><strong>Step 1 — Check electron arrangements:</strong><br/>S²⁻: 16 + 2 = 18 electrons → [2,8,8] ✓<br/>Cl⁻: 17 + 1 = 18 electrons → [2,8,8] ✓<br/>K⁺: 19 − 1 = 18 electrons → [2,8,8] ✓<br/>Ca²⁺: 20 − 2 = 18 electrons → [2,8,8] ✓<br/>All are isoelectronic!<br/><br/><strong>Step 2 — Compare proton count:</strong><br/>S²⁻ = 16p, Cl⁻ = 17p, K⁺ = 19p, Ca²⁺ = 20p<br/><br/><strong>Answer: Ca²⁺</strong> — highest proton count → strongest attraction on electrons → smallest radius.'
      },
      terms: []
    },
    {
      id: 'callout-pq-ionic2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Colour at Positive Electrode (Jan 2017 MCQ)',
        text: '<strong>Question:</strong> In the electrolysis of copper(II) chromate(VI) solution, what colour develops around the positive electrode (anode)?<br/><br/><strong>Reasoning:</strong><br/>The positive electrode (anode) attracts <em>negative ions</em>.<br/>CrO₄²⁻ is the negative ion → it migrates to the anode.<br/>CrO₄²⁻ is yellow in solution.<br/><br/><strong>Answer: Yellow</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ionic3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Dot-and-Cross for KCl (Jan 2017 Past Paper)',
        text: '<strong>Question:</strong> Draw a dot-and-cross diagram for potassium chloride (KCl), showing only the outer shell electrons.<br/><br/><strong>K atom:</strong> [2,8,8,1] → loses 1 electron → K⁺: [2,8,8]<br/>K⁺ outer shell is empty (the 4th shell is now gone). Draw K⁺ inside square brackets with charge +1.<br/><br/><strong>Cl atom:</strong> [2,8,7] → gains 1 electron → Cl⁻: [2,8,8]<br/>Draw Cl⁻ outer shell with 8 electrons (7 crosses + 1 dot from K), inside square brackets with charge −1.<br/><br/><strong>Rules at A-level:</strong><br/>• Use dots for one element and crosses for the other<br/>• Show square brackets with charge outside for EACH ion<br/>• Show only outer-shell electrons (inner shells omitted)<br/>• The transferred electron must appear as a dot in the Cl⁻ diagram'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define ionic bonding in full.' },
      { id: 'c2', blockId: 'list-dot-rules', prompt: 'State three rules for drawing a dot-and-cross diagram of an ionic compound.' },
      { id: 'c3', blockId: 'callout-mgcl2', prompt: 'Draw a dot-and-cross diagram for MgO (Mg loses 2 electrons; O gains 2 electrons).' },
      { id: 'c4', blockId: 'callout-polarization', prompt: 'What is polarization of an anion? State what type of cation has the highest polarizing power and why.' },
      { id: 'c5', blockId: 'callout-isoelectronic-radius', prompt: 'The ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ are all isoelectronic. Which has the smallest ionic radius? Explain.' },
      { id: 'c6', blockId: 'callout-non-noble', prompt: 'Give three examples of common ions that do NOT have a noble gas electron configuration, and explain why.' },
      { id: 'c7', blockId: 'callout-ion-energetics', prompt: 'Explain why calcium forms Ca²⁺ rather than Ca⁺ or Ca³⁺ in ionic compounds.' }
    ],
    summaryText: 'Ionic bonding = electrostatic attraction between oppositely charged ions in a giant lattice. Metal loses electrons (cation); non-metal gains (anion). Dot-and-cross: square brackets with charge outside. Not all ions have noble gas configurations — transition metals do not (e.g. Fe³⁺ [Ar]3d⁵). Ion charge is determined by overall energetics: Ca²⁺ preferred over Ca⁺ (too little lattice enthalpy) or Ca³⁺ (3rd IE too high). Polarization: small high-charge cation distorts large anion → covalent character. Isoelectronic: same e⁻ config, higher Z = smaller radius.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_0;