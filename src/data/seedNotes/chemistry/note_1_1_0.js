/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 0
 * "Atomic and formula terms"
 * Source: wch11-1.pdf — Centre for Higher Secondary Education, Dept of Chemistry
 * Spec refs: 1.1
 */

export const note_chemistry_1_1_0 = {
  blocks: [{
    id: 'objective-block',
    type: 'objective',
    data: {
      text: 'Know the terms atom, element, ion, molecule, compound, empirical formula and molecular formula; describe subatomic particles and their properties; use nuclide notation.'
    },
    terms: []
  },
  // ── ATOM ──────────────────────────────────────────────────────────────
  {
    id: 'h-atom',
    type: 'heading',
    data: {
      text: 'Atom',
      level: 2
    },
    terms: []
  }, {
    id: 'p-atom',
    type: "list",
    data: {
      style: "unordered",
      items: ["An atom is the smallest, electrically neutral particle of an element that can take part in a chemical change.", "Every atom has a dense central nucleus containing protons and neutrons (nucleons), surrounded by electrons arranged in definite energy levels called shells.", "An atom gets its chemical properties from the number and arrangement of its electrons."]
    },
    terms: ['Atom', 'Nucleon', 'Proton', 'Neutron', 'Electron']
  },
  // Subatomic particle table
  {
    id: 'h-subatomic',
    type: 'heading',
    data: {
      text: 'Subatomic Particles',
      level: 3
    },
    terms: []
  }, {
    id: 'table-particles',
    type: 'comparisonTable',
    data: {
      caption: 'Properties of the three subatomic particles',
      headers: ['Particle', 'Symbol', 'Location', 'Charge / C', 'Relative Charge', 'Mass / g', 'Relative Mass'],
      rows: [['Proton', 'p', 'Nucleus', '+1.60 × 10⁻¹⁹', '+1', '1.67 × 10⁻²⁴', '1'], ['Neutron', 'n', 'Nucleus', '0', '0', '1.67 × 10⁻²⁴', '1'], ['Electron', 'e⁻', 'Shells / orbitals', '−1.60 × 10⁻¹⁹', '−1', '9.11 × 10⁻²⁸', '1/1840 ≈ 0']]
    },
    terms: ['Proton', 'Neutron', 'Electron']
  }, {
    id: 'p-negligible',
    type: "list",
    data: {
      style: "unordered",
      items: ["The mass of electrons is negligible; therefore the mass of an atom is determined almost entirely by the mass of its nucleons (protons + neutrons)."]
    },
    terms: ['Nucleon']
  },
  // SVG: Atom diagram
  {
    id: 'svg-atom',
    type: 'svg',
    data: {
      caption: 'Structure of a helium-4 atom (not to scale)',
      svg: `<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a helium atom showing nucleus with two protons and two neutrons, and two electrons orbiting in a shell">
  <defs>
    <radialGradient id="nucGrad" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#b45309"/>
    </radialGradient>
  </defs>
  <!-- Electron shell -->
  <ellipse cx="130" cy="110" rx="110" ry="65" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.7"/>
  <ellipse cx="130" cy="110" rx="65" ry="110" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.7"/>
  <!-- Nucleus -->
  <circle cx="130" cy="110" r="28" fill="url(#nucGrad)" opacity="0.95"/>
  <text x="130" y="104" text-anchor="middle" font-size="9" fill="white" font-weight="bold">2p</text>
  <text x="130" y="118" text-anchor="middle" font-size="9" fill="white" font-weight="bold">2n</text>
  <!-- Electrons -->
  <circle cx="240" cy="110" r="8" fill="#6366f1"/>
  <text x="240" y="114" text-anchor="middle" font-size="9" fill="white" font-weight="bold">e⁻</text>
  <circle cx="20" cy="110" r="8" fill="#6366f1"/>
  <text x="20" y="114" text-anchor="middle" font-size="9" fill="white" font-weight="bold">e⁻</text>
  <!-- Labels -->
  <text x="130" y="16" text-anchor="middle" font-size="12" fill="var(--color-text-primary,#111)" font-weight="bold">Helium-4 Atom</text>
  <text x="130" y="210" text-anchor="middle" font-size="10" fill="var(--color-text-secondary,#555)">Electron shell (orbit)</text>
  <text x="165" y="113" font-size="9" fill="var(--color-text-secondary,#555)">Nucleus</text>
</svg>`
    },
    terms: ['Atom', 'Nucleus']
  },
  // Nuclide notation
  {
    id: 'h-notation',
    type: 'heading',
    data: {
      text: 'Nuclide Notation',
      level: 3
    },
    terms: []
  }, {
    id: 'p-notation',
    type: "list",
    data: {
      style: "unordered",
      items: ["Atoms are represented using nuclide notation: the mass number (A) \u2014 the total number of protons and neutrons \u2014 is written as a superscript, and the atomic (proton) number (Z) is written as a subscript before the element symbol.", "The number of neutrons = A \u2212 Z.", "In a neutral atom, the number of electrons equals the number of protons."]
    },
    terms: ['Mass number', 'Atomic number', 'Proton number']
  }, {
    id: 'svg-notation',
    type: 'svg',
    data: {
      caption: 'Nuclide notation for carbon-12',
      svg: `<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nuclide notation diagram showing mass number 12 top left, atomic number 6 bottom left and C symbol for carbon">
  <text x="60" y="68" font-size="54" font-weight="bold" fill="var(--color-text-primary,#111)" font-family="serif">C</text>
  <text x="30" y="48" font-size="28" font-weight="bold" fill="#2563eb">12</text>
  <text x="30" y="85" font-size="22" font-weight="bold" fill="#dc2626">6</text>
  <!-- Arrows and labels -->
  <line x1="100" y1="38" x2="150" y2="28" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="158" y="32" font-size="11" fill="#2563eb">Mass number (A) = protons + neutrons = 12</text>
  <line x1="100" y1="78" x2="150" y2="88" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr2)"/>
  <text x="158" y="92" font-size="11" fill="#dc2626">Atomic number (Z) = protons = 6</text>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/>
    </marker>
    <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`
    },
    terms: ['Mass number', 'Atomic number']
  },
  // ── ISOTOPES ──────────────────────────────────────────────────────────
  {
    id: 'h-isotopes',
    type: 'heading',
    data: {
      text: 'Isotopes',
      level: 2
    },
    terms: ['Isotope']
  }, {
    id: 'p-isotopes',
    type: "list",
    data: {
      style: "unordered",
      items: ["Isotopes are atoms of the same element that have the same number of protons (same atomic number Z) but different numbers of neutrons (different mass numbers A).", "Because they have the same electron configuration, isotopes have identical chemical properties.", "However, their physical properties differ slightly \u2014 for example, they have different masses, densities, and boiling points."]
    },
    terms: ['Isotope']
  }, {
    id: 'table-isotopes',
    type: 'comparisonTable',
    data: {
      caption: 'Common isotope pairs — same element, different mass number',
      headers: ['Element', 'Isotope 1', 'Isotope 2', 'Protons', 'Neutrons differ by'],
      rows: [['Carbon', '¹²C (12 − 6 = 6 neutrons)', '¹³C (13 − 6 = 7 neutrons)', '6', '1'], ['Chlorine', '³⁵Cl (35 − 17 = 18 neutrons)', '³⁷Cl (37 − 17 = 20 neutrons)', '17', '2'], ['Hydrogen', '¹H (protium, 0 neutrons)', '²H (deuterium, 1 neutron)', '1', '1'], ['Uranium', '²³⁵U', '²³⁸U', '92', '3']]
    },
    terms: ['Isotope']
  }, {
    id: 'callout-isotopes-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Isotopes — Key Points',
      text: 'Same element → same atomic number (Z) → same number of protons\nDifferent mass number (A) → different number of neutrons\n\nSame chemical properties (same electron arrangement)\nDifferent physical properties (different mass, density, melting/boiling point)\n\nNumber of neutrons = A − Z'
    },
    terms: ['Isotope']
  }, {
    id: 'callout-isotopes-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: '⚠️ Common Mistake — Isotopes vs Ions',
      text: 'Isotopes differ in neutron number (same element, different A).\nIons differ in electron number (same element, different charge).\n\nDo NOT confuse: ³⁵Cl and ³⁷Cl are isotopes.  Cl and Cl⁻ are an atom and its ion.'
    },
    terms: ['Isotope', 'Ion']
  },
  // ── ELEMENT ───────────────────────────────────────────────────────────
  {
    id: 'h-element',
    type: 'heading',
    data: {
      text: 'Element',
      level: 2
    },
    terms: []
  }, {
    id: 'p-element',
    type: "list",
    data: {
      style: "unordered",
      items: ["An element is a pure substance made up of only one type of atom.", "It is chemically the simplest substance and cannot be broken down by physical or chemical means.", "All atoms of an element contain the same number of protons.", "g.", "g.", "oxygen O\u2082, nitrogen N\u2082).", "Each element has its own characteristic properties and is represented by a chemical symbol."]
    },
    terms: ['Element']
  },
  // ── MOLECULE ──────────────────────────────────────────────────────────
  {
    id: 'h-molecule',
    type: 'heading',
    data: {
      text: 'Molecule',
      level: 2
    },
    terms: []
  }, {
    id: 'p-molecule',
    type: "list",
    data: {
      style: "unordered",
      items: ["A molecule is the smallest, electrically neutral particle of an element or compound that can exist independently.", "g.", "g.", "H\u2082O, CO\u2082, CH\u2084).", "Diatomic elements \u2014 hydrogen, oxygen, nitrogen, fluorine, chlorine, bromine and iodine \u2014 do not exist as free atoms under normal conditions; they pair up to form molecules."]
    },
    terms: ['Molecule']
  }, {
    id: 'keybox-diatomics',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — The Seven Diatomic Elements',
      text: 'H₂ · O₂ · N₂ · F₂ · Cl₂ · Br₂ · I₂\nMemory tip: "Have No Fear Of Ice Cold Beer"'
    },
    terms: ['Molecule']
  },
  // ── COMPOUND ──────────────────────────────────────────────────────────
  {
    id: 'h-compound',
    type: 'heading',
    data: {
      text: 'Compound',
      level: 2
    },
    terms: []
  }, {
    id: 'p-compound',
    type: "list",
    data: {
      style: "unordered",
      items: ["A compound is a pure substance formed when two or more different elements are chemically combined in fixed proportions.", "Compounds have different properties from the elements they are made from.", "A compound can only be separated into its elements by chemical means.", "Examples: water (H\u2082O), sodium chloride (NaCl), sulfuric acid (H\u2082SO\u2084)."]
    },
    terms: ['Compound']
  },
  // ── ION ───────────────────────────────────────────────────────────────
  {
    id: 'h-ion',
    type: 'heading',
    data: {
      text: 'Ion',
      level: 2
    },
    terms: []
  }, {
    id: 'p-ion',
    type: "list",
    data: {
      style: "unordered",
      items: ["An ion is an atom or group of atoms that carries an electrical charge due to the loss or gain of electrons.", "A positive ion (cation) has fewer electrons than protons \u2014 it is formed by removing electrons from a neutral atom.", "A negative ion (anion) has more electrons than protons \u2014 it is formed by adding electrons to a neutral atom."]
    },
    terms: ['Ion', 'Cation', 'Anion']
  }, {
    id: 'table-ions',
    type: 'comparisonTable',
    data: {
      caption: 'Cations vs Anions',
      headers: ['Type', 'Charge', 'How formed', 'Example'],
      rows: [['Cation (positive ion)', 'Positive (+)', 'Loss of electrons', 'Na⁺: 11 protons, 10 electrons'], ['Anion (negative ion)', 'Negative (−)', 'Gain of electrons', 'Cl⁻: 17 protons, 18 electrons']]
    },
    terms: ['Ion', 'Cation', 'Anion']
  }, {
    id: 'keybox-ion',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key Idea — Ion Formation',
      text: 'Losing electrons → positive ion (cation)\nGaining electrons → negative ion (anion)\n"LEO the lion says GER" — Loss of Electrons = Oxidation; Gain of Electrons = Reduction'
    },
    terms: ['Ion', 'Cation', 'Anion']
  },
  // ── EMPIRICAL vs MOLECULAR FORMULA ────────────────────────────────────
  {
    id: 'h-formulae',
    type: 'heading',
    data: {
      text: 'Empirical Formula vs Molecular Formula',
      level: 2
    },
    terms: []
  }, {
    id: 'p-formulae',
    type: "list",
    data: {
      style: "unordered",
      items: ["The empirical formula gives the simplest whole-number ratio of atoms of each element in a compound.", "The molecular formula gives the actual number of atoms of each element in one molecule.", "The molecular formula is always a whole-number multiple (n) of the empirical formula.", "For ionic compounds and giant-covalent structures, only the empirical formula is used (as the formula unit), since discrete molecules do not exist."]
    },
    terms: ['Empirical formula', 'Molecular formula', 'Formula unit']
  }, {
    id: 'table-formulae',
    type: 'comparisonTable',
    data: {
      caption: 'Empirical vs molecular formula examples',
      headers: ['Compound', 'Molecular Formula', 'Empirical Formula', 'Multiplier n'],
      rows: [['Glucose', 'C₆H₁₂O₆', 'CH₂O', '6'], ['Hydrogen peroxide', 'H₂O₂', 'HO', '2'], ['Ethene', 'C₂H₄', 'CH₂', '2'], ['Benzene', 'C₆H₆', 'CH', '6'], ['Water', 'H₂O', 'H₂O', '1 (same)'], ['NaCl (ionic)', '—', 'NaCl', 'formula unit only']]
    },
    terms: ['Empirical formula', 'Molecular formula']
  }, {
    id: 'eq-n',
    type: 'equation',
    data: {
      html: 'n = M<sub>r</sub>(molecular) / M<sub>r</sub>(empirical)',
      caption: 'Finding n — the whole-number multiplier to convert empirical → molecular formula'
    },
    terms: ['Empirical formula', 'Molecular formula']
  },
  // ── SUMMARY TABLE — all terms at a glance ─────────────────────────────
  {
    id: 'h-summary-table',
    type: 'heading',
    data: {
      text: 'Summary — Key Terms at a Glance',
      level: 2
    },
    terms: []
  }, {
    id: 'table-summary',
    type: 'comparisonTable',
    data: {
      caption: 'Specification 1.1 — term definitions',
      headers: ['Term', 'Definition', 'Example'],
      rows: [['Atom', 'Smallest neutral particle of an element', '¹²₆C, ²³₁₁Na'], ['Element', 'Pure substance with one type of atom', 'Oxygen (O), Gold (Au)'], ['Ion', 'Charged atom or group of atoms', 'Na⁺, Cl⁻, SO₄²⁻'], ['Molecule', 'Smallest neutral particle of element or compound', 'H₂O, O₂, CO₂'], ['Compound', 'Two or more elements chemically combined', 'H₂O, NaCl, H₂SO₄'], ['Empirical formula', 'Simplest whole-number atom ratio', 'CH₂O (glucose)'], ['Molecular formula', 'Actual atom count per molecule', 'C₆H₁₂O₆ (glucose)']]
    },
    terms: []
  },
  // ── EXAM CHECKLIST ─────────────────────────────────────────────────────
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
        text: 'A = nucleon number (top); Z = proton number (bottom) in nuclide notation',
        checked: false
      }, {
        text: 'Neutrons = A − Z (not given directly)',
        checked: false
      }, {
        text: 'Neutral atom: number of electrons = number of protons',
        checked: false
      }, {
        text: 'Cation: fewer electrons than protons (positive). Anion: more electrons than protons (negative)',
        checked: false
      }, {
        text: 'Use "empirical formula" for ionic/giant structures; "molecular formula" for covalent molecules only',
        checked: false
      }, {
        text: 'The seven diatomic elements: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂',
        checked: false
      }, {
        text: 'Relative masses and charges are dimensionless ratios — no units',
        checked: false
      }]
    },
    terms: []
  },
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  // ── SUMMARY ────────────────────────────────────────────────────────────
  // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Isotopes have the same number of protons (same element, same chemical properties) but different numbers of neutrons — this changes only the mass, not the chemistry. The empirical formula strips away complexity to reveal the simplest ratio, while the molecular formula reveals the true scale of the molecule.\n\nApply: A sample contains 0.5 mol of Fe₂O₃. How many individual iron atoms are present? (Hint: each formula unit contains 2 Fe atoms, so multiply moles × 2 × L.)\n\nAnalyze: Two unknown substances both have the empirical formula CH₂O. One is methanal (M = 30), the other is glucose (M = 180). How does the molecular formula distinguish them? What structural information is lost in the empirical formula?\n\nEvaluate: A student claims "isotopes are different elements because they have different masses." Critique this statement using the definition of an element and the role of protons in determining identity.'
    },
    terms: []
  },
  {
    id: 'summary-block',
    type: 'summary',
    data: {
      text: 'Atoms are the smallest neutral particles of elements, containing protons and neutrons in a nucleus surrounded by electrons in shells. Elements contain only one type of atom; compounds are chemically combined elements. Ions are charged atoms formed by electron loss (cations) or gain (anions). Molecules are the smallest neutral particles of elements or compounds. Empirical formulae give the simplest atom ratio; molecular formulae give the actual count per molecule.'
    },
    terms: []
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-particles',
      prompt: 'State the relative mass and charge of a proton, neutron and electron.'
    }, {
      id: 'cue-2',
      blockId: 'p-ion',
      prompt: 'Distinguish between a cation and an anion. How is each formed?'
    }, {
      id: 'cue-3',
      blockId: 'svg-notation',
      prompt: 'In ¹²₆C, what does each number represent? How many neutrons does it have?'
    }, {
      id: 'cue-4',
      blockId: 'table-formulae',
      prompt: 'Give the empirical formula of glucose (C₆H₁₂O₆). Explain how you derived it.'
    }, {
      id: 'cue-5',
      blockId: 'p-molecule',
      prompt: 'Name the seven diatomic elements and explain why they do not exist as single atoms.'
    }, {
      id: 'cue-isotope',
      blockId: 'h-isotopes',
      prompt: 'Define isotopes. How do they differ from each other and what properties are the same?'
    }],
    summaryText: 'Atoms are the smallest neutral particles of elements, containing protons and neutrons in a nucleus surrounded by electrons in shells. Elements contain only one type of atom; compounds are chemically combined elements. Ions are charged atoms formed by electron loss (cations) or gain (anions). Molecules are the smallest neutral particles of elements or compounds. Empirical formulae give the simplest atom ratio; molecular formulae give the actual count per molecule.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'CHSE Dept of Chemistry — Topic 1 Notes (wch11-1.pdf)',
    detail: 'Primary source: definitions of atom, element, ion, molecule, compound; subatomic particle table; nuclide notation.',
    year: '2023',
    source: 'Centre for Higher Secondary Education',
    tags: ['atom', 'ion', 'element', 'molecule']
  }, {
    id: 'ev-2',
    title: 'Pearson Edexcel IAL Chemistry Spec — Objective 1.1',
    detail: 'Specification requirement: know the key terms for Topic 1.',
    year: '2024',
    source: 'Pearson Edexcel',
    tags: ['specification']
  }]
};