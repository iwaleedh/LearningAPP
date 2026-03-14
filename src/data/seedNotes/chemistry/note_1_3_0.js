/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 0
 * "Evidence for ionic species; ionic bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.1–3A.2
 */
export const note_chemistry_1_3_0 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'State and explain the experimental evidence for ionic species: electrolysis, electrical conductivity, brittleness, high melting points, solubility in polar solvents, and X-ray crystallography. Describe ionic bonding as the electrostatic attraction between oppositely charged ions, and draw dot-and-cross diagrams for ionic compounds including those with polyatomic ions.' },
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
      data: { text: 'Evidence for the Existence of Ionic Species', level: 2 },
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
      id: 'list-electrolysis-products',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Electrolysis of molten NaCl — further evidence:</strong> cathode: Na⁺(l) + e⁻ → Na(l) — sodium metal deposited; anode: 2Cl⁻(l) → Cl₂(g) + 2e⁻ — chlorine gas produced',
          'Elemental products at each electrode are the exact component elements of NaCl → proves the compound contains discrete Na⁺ and Cl⁻ ions',
          'Products are always derived from the ion with the corresponding sign of charge → conclusive proof of distinct charged species in the compound',
          'During electrolysis of molten Al₂O₃ (Hall–Héroult process): cathode → Al(l); anode → O₂(g) — again confirming Al³⁺ and O²⁻ ions'
        ]
      },
      terms: []
    },
    {
      id: 'h-conductivity-evidence',
      type: 'heading',
      data: { text: 'Electrical Conductivity as Evidence', level: 3 },
      terms: []
    },
    {
      id: 'table-conductivity',
      type: 'comparisonTable',
      data: {
        caption: 'Electrical conductivity in different states — ionic compound (NaCl) vs covalent molecular compound (sucrose)',
        headers: ['State', 'NaCl (ionic)', 'Sucrose C₁₂H₂₂O₁₁ (covalent)', 'Explanation'],
        rows: [
          ['Solid', 'Does NOT conduct', 'Does NOT conduct', 'NaCl: ions held in fixed lattice positions. Sucrose: no ions or free electrons'],
          ['Molten (liquid)', 'CONDUCTS', 'Does NOT conduct', 'NaCl: ions now free to move. Sucrose: still no ions present — molecules only'],
          ['Aqueous solution', 'CONDUCTS', 'Does NOT conduct', 'NaCl: ions free to move in water. Sucrose: dissolves as molecules, no ions formed']
        ]
      },
      terms: []
    },
    {
      id: 'list-conductivity-explain',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Solid state — no conduction:</strong> Ions are held in fixed positions in the 3D lattice by strong electrostatic attraction → ions cannot move → cannot carry charge',
          '<strong>Molten state — conducts:</strong> Sufficient thermal energy overcomes the lattice enthalpy; ions become free to move and migrate towards electrodes → current flows',
          '<strong>Aqueous solution — conducts:</strong> Polar water molecules hydrate the ions, separating them from the lattice → free ions in solution act as mobile charge carriers',
          'The contrast between the non-conducting solid and the conducting molten or aqueous states is strong evidence for the existence of discrete, charged ions that require mobility to conduct',
          '<strong>Non-ionic (covalent molecular) compounds:</strong> never conduct in any state — no ions and no free electrons; even when dissolved, molecules (not ions) are in solution — confirms ionic compounds are fundamentally different in nature'
        ]
      },
      terms: []
    },
    {
      id: 'h-brittleness-evidence',
      type: 'heading',
      data: { text: 'Brittleness as Evidence', level: 3 },
      terms: []
    },
    {
      id: 'callout-brittleness',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ionic Crystals Are Hard but Brittle',
        text: '• Ionic crystals are <strong>hard</strong> — strong electrostatic forces throughout the lattice resist deformation and scratching<br/>• Ionic crystals are <strong>brittle</strong> — they shatter along a cleavage plane when struck; this is direct evidence for the ionic lattice model<br/><br/><strong>Mechanism — why brittle:</strong><br/>When a mechanical stress is applied, one layer of ions slides relative to an adjacent layer by one ionic diameter. At this point, <strong>like charges become adjacent</strong> (Na⁺ next to Na⁺, Cl⁻ next to Cl⁻). The strong electrostatic repulsion between like-charged ions forces the crystal to split along the cleavage plane.<br/><br/><strong>Contrast with metals:</strong> In metals, identically charged cations are surrounded by delocalized electrons in an electron sea. Layer sliding does not create like-charge adjacency → metals are malleable (can be deformed without shattering), not brittle. This mechanistic difference confirms the alternating ⊕/⊖ ion arrangement in ionic lattices.<br/><br/><em>Exam mark: layer shift → like charges become adjacent → electrostatic repulsion → crystal cleaves along cleavage plane</em>'
      },
      terms: ['Brittle', 'Cleavage plane', 'Malleable']
    },
    {
      id: 'h-melting-evidence',
      type: 'heading',
      data: { text: 'High Melting Points as Evidence', level: 3 },
      terms: []
    },
    {
      id: 'list-melting-evidence',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Ionic compounds have <strong>high melting and boiling points</strong>: NaCl 801°C; MgO 2852°C; CaO 2613°C; CaCl₂ 772°C',
          'Indicates that very <strong>strong electrostatic (Coulombic) forces</strong> must be overcome in all directions to separate the ions — consistent with a lattice of charged species',
          'Forces are <strong>non-directional</strong> — act equally in all directions throughout the 3D lattice — enormous energy is required to break down the entire structure',
          'Higher ionic charges produce stronger lattices and higher melting points: MgO (Mg²⁺ and O²⁻, charge product = 4 at mp 2852°C) >> NaCl (Na⁺ and Cl⁻, charge product = 1 at mp 801°C) — consistent with Coulombic attraction between charged species',
          'Smaller ionic radii (higher charge density) further increase lattice strength and melting points (e.g. MgO < CaO in lattice strength)',
          '<strong>Comparison with molecular compounds:</strong> H₂O melts at 0°C; CO₂ sublimes at −78°C; C₆H₆ melts at 6°C — only weak London forces between neutral molecules → confirms ionic compounds involve fundamentally stronger charge-based forces'
        ]
      },
      terms: []
    },
    {
      id: 'h-solubility-evidence',
      type: 'heading',
      data: { text: 'Solubility in Polar Solvents as Evidence', level: 3 },
      terms: []
    },
    {
      id: 'list-solubility-evidence',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Many ionic compounds dissolve readily in <strong>polar solvents</strong> (e.g. water) but remain insoluble in <strong>non-polar solvents</strong> (e.g. hexane, cyclohexane)',
          '<strong>Mechanism — hydration:</strong> Water is a polar molecule; O carries δ− and H carries δ+. The δ− oxygen attracts cations; the δ+ hydrogen attracts anions → ions are surrounded by water dipoles — this is hydration (solvation)',
          'Energy released during hydration (hydration enthalpy) compensates for energy required to break the ionic lattice (lattice enthalpy) → compound dissolves in water',
          'Non-polar solvents have no δ+/δ− charges → cannot interact electrostatically with ions → no hydration energy provided → ionic compounds do not dissolve in non-polar solvents',
          'Selective dissolution in polar but not non-polar solvents is uniquely consistent with charged ionic species — neutral molecules do not show this same selectivity',
          '<strong>Exceptions:</strong> some ionic compounds are insoluble even in water (e.g. BaSO₄, AgCl, PbSO₄) — lattice enthalpy is too large to be offset by hydration enthalpy'
        ]
      },
      terms: ['Hydration', 'Hydration enthalpy', 'Lattice enthalpy']
    },
    {
      id: 'h-xray-evidence',
      type: 'heading',
      data: { text: 'X-ray Crystallography as Evidence', level: 3 },
      terms: []
    },
    {
      id: 'callout-xray',
      type: 'callout',
      data: {
        style: 'key',
        title: 'X-ray Diffraction and the NaCl Structure (Bragg, 1913)',
        text: '<strong>Technique:</strong> X-rays (wavelength ~100–250 pm, comparable to inter-ionic distances) are diffracted by the regular planes of ions in a crystal, producing a characteristic pattern of spots. Analysing the pattern reveals the precise 3D positions of ions in the lattice.<br/><br/><strong>What the diffraction pattern of NaCl reveals:</strong><br/>• Precise 3D positions of Na⁺ and Cl⁻ ions at regular, alternating lattice points in a face-centred cubic (rock salt) structure<br/>• <strong>Coordination number = 6</strong>: each Na⁺ is surrounded octahedrally by 6 Cl⁻ ions; each Cl⁻ is surrounded by 6 Na⁺ ions<br/>• Electron density maps show <em>spherical, discrete regions</em> of electron density centred on each ion — with minimal electron density between them → confirms discrete ions (not shared covalent electron clouds) are present<br/>• No discrete NaCl molecules: the entire crystal is one continuous giant ionic lattice<br/><br/><strong>The Bragg equation:</strong> nλ = 2d sinθ — links X-ray wavelength (λ), diffraction angle (θ) and inter-planar spacing (d).<br/><br/><strong>Historical significance:</strong> W. H. Bragg and W. L. Bragg (1913) solved the NaCl structure — the first crystal structure determined by X-ray diffraction — providing definitive physical proof of the ionic lattice model.'
      },
      terms: ['X-ray crystallography', 'Coordination number', 'Bragg equation']
    },
    {
      id: 'callout-evidence-all',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Edexcel Exam Summary — Six Pieces of Evidence for Ionic Species',
        text: '1. <strong>Electrolysis (coloured ions):</strong> Cu²⁺ (blue) → cathode; CrO₄²⁻ (yellow) → anode — colour separation proves oppositely charged, independently mobile ions<br/>2. <strong>Electrical conductivity:</strong> Solid → no conduction (ions fixed in lattice); molten or aqueous → conducts (ions free to move)<br/>3. <strong>Brittleness:</strong> Layer shift → like charges become adjacent → repulsion → crystal cleaves along cleavage plane<br/>4. <strong>High melting points:</strong> NaCl 801°C; MgO 2852°C — strong, non-directional Coulombic forces throughout giant lattice; higher charge → higher mp<br/>5. <strong>Solubility in polar solvents:</strong> Water (polar) hydrates ions (δ− O to cations, δ+ H to anions); insoluble in non-polar solvents (no hydration possible)<br/>6. <strong>X-ray crystallography:</strong> NaCl: 6:6 rock salt cubic lattice; discrete spherical electron density on each ion; no NaCl molecules — giant ionic lattice confirmed'
      },
      terms: []
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
    },
    {
      id: 'checklist-1-3-0',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the Cu²⁺/CrO₄²⁻ electrolysis experiment — which colour migrates to cathode and which to anode, and why', checked: false },
          { text: 'State electrode products in electrolysis of molten NaCl: cathode → Na(l); anode → Cl₂(g)', checked: false },
          { text: 'Explain why ionic solids do not conduct electricity (ions fixed in lattice positions)', checked: false },
          { text: 'Explain why molten and aqueous ionic compounds conduct electricity (ions free to move)', checked: false },
          { text: 'Explain ionic crystal brittleness: layer shift → like charges adjacent → electrostatic repulsion → crystal cleaves', checked: false },
          { text: 'State melting points of NaCl (801°C) and MgO (2852°C) as evidence; explain why higher charge gives higher mp', checked: false },
          { text: 'Explain selective solubility of ionic compounds: polar solvents hydrate ions; non-polar solvents cannot — therefore no dissolution', checked: false },
          { text: 'Describe what X-ray crystallography reveals about NaCl: 6:6 rock salt structure, discrete spherical electron density, no molecules', checked: false },
          { text: 'Define ionic bonding as electrostatic attraction between oppositely charged ions (non-directional, throughout a giant lattice)', checked: false },
          { text: 'Draw dot-and-cross diagrams for NaCl, MgCl₂, MgO and KCl showing square brackets and correct charges outside', checked: false },
          { text: 'Give three examples of transition metal ions without noble gas electronic configurations (e.g. Fe³⁺: [Ar]3d⁵)', checked: false },
          { text: 'Explain why Ca forms Ca²⁺ (not Ca⁺ or Ca³⁺) using ionisation energies and lattice enthalpy', checked: false },
          { text: 'Explain polarization of anions: small, high-charge cation distorts large anion → covalent character increases', checked: false },
          { text: 'Order isoelectronic ions (e.g. S²⁻, Cl⁻, K⁺, Ca²⁺) by ionic radius using proton count', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Evidence for ionic species: (1) Electrolysis — Cu²⁺ (blue) to cathode, CrO₄²⁻ (yellow) to anode; molten NaCl gives Na(l) at cathode and Cl₂(g) at anode. (2) Conductivity — solid: no conduction (ions fixed); molten or aqueous: conducts (ions mobile). (3) Brittleness — layer shift brings like charges adjacent → repulsion → crystal cleaves. (4) High mp — NaCl 801°C, MgO 2852°C; strong non-directional Coulombic forces in giant lattice; higher charge → higher mp. (5) Polar-solvent solubility — water hydrates ions (δ− O to cations, δ+ H to anions); insoluble in non-polar solvents. (6) X-ray crystallography — NaCl: 6:6 rock salt lattice, spherical discrete ion electron density, no molecules. Ionic bonding = electrostatic attraction between oppositely charged ions (non-directional, giant lattice). Not all ions have noble gas configs: Fe³⁺ [Ar]3d⁵, Cu²⁺ [Ar]3d⁹. Ca²⁺ preferred by energetics (IE₂ + large lattice enthalpy; IE₃ far too high). Polarization: small high-charge cation distorts large anion → covalent character. Isoelectronic ions: higher Z → smaller radius.'
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
      { id: 'c7', blockId: 'callout-ion-energetics', prompt: 'Explain why calcium forms Ca²⁺ rather than Ca⁺ or Ca³⁺ in ionic compounds.' },
      { id: 'c8', blockId: 'table-conductivity', prompt: 'Explain why ionic solids do not conduct electricity but molten ionic compounds do. Why do aqueous solutions of ionic compounds also conduct?' },
      { id: 'c9', blockId: 'callout-brittleness', prompt: 'Explain the brittleness of ionic crystals at the atomic level. Why are metals malleable while ionic crystals are brittle?' },
      { id: 'c10', blockId: 'callout-xray', prompt: 'What does X-ray crystallography reveal about the structure of NaCl? State the coordination number and describe the electron density pattern.' }
    ],
    summaryText: 'Evidence for ionic species: (1) Cu²⁺/CrO₄²⁻ electrolysis — blue to cathode, yellow to anode; (2) Conductivity — solid non-conducting, molten/aqueous conducts; (3) Brittleness — layer shift, like charges adjacent, repulsion; (4) High mp (NaCl 801°C, MgO 2852°C); (5) Polar-only solubility (hydration); (6) X-ray diffraction (NaCl: 6:6 lattice, discrete spherical ions). Ionic bond = electrostatic attraction in giant lattice. Not all ions noble gas config (Fe³⁺: [Ar]3d⁵). Ca²⁺ from energetics. Isoelectronic: higher Z → smaller radius.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_3_0;