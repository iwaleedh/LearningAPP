export const note_chemistry_5_17_3 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-ligands',
      data: {
        text: 'Understand ligand structure and bonding; distinguish monodentate, bidentate, and polydentate ligands; explain the chelate effect and its role in complex stability.'
      }
    },
    {
      type: 'heading',
      id: 'h-ligand-definition',
      data: { text: 'Ligands and Coordinate Bonding', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-ligand-def',
      data: {
        text: 'A <strong>ligand</strong> is a molecule or ion that donates a pair of electrons to a central metal ion, forming a coordinate covalent bond (dative bond). The ligand acts as a Lewis base (electron pair donor), while the metal ion acts as a Lewis acid (electron pair acceptor). This electron pair is shared between the ligand and the metal, creating a coordinate bond. Ligands surround the central metal ion in a three-dimensional arrangement called a complex ion.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-coordinate-bond',
      data: {
        text: 'A coordinate bond (or dative bond) is formed when both electrons in the bond come from the same atom. In the case of metal complexes, the two electrons originate from a lone pair on the ligand. Once formed, the coordinate bond is identical in strength and character to a normal covalent bond. The distinction between a coordinate bond and a regular covalent bond exists only in the formation process, not in the final bonding.'
      }
    },
    {
      type: 'heading',
      id: 'h-coordination-number',
      data: { text: 'Coordination Number', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-coord-number-def',
      data: {
        text: 'The <strong>coordination number</strong> of a central metal ion is the total number of coordinate bonds formed with surrounding ligands. It equals the number of donor atoms directly bonded to the metal — <em>not</em> the number of ligand molecules (important for polydentate ligands). Common coordination numbers:<br/>' +
          '• <strong>CN = 6</strong>: Octahedral geometry — most common for transition metals (e.g. all hexaaqua [M(H₂O)₆]ⁿ⁺ ions)<br/>' +
          '• <strong>CN = 4</strong>: Tetrahedral or square planar geometry (e.g. [CuCl₄]²⁻ where large Cl⁻ prevents 6 from fitting)'
      }
    },
    {
      type: 'callout',
      id: 'callout-bonding-examples',
      data: {
        style: 'worked',
        title: 'Bonding in Specific Complexes — Worked Examples',
        text: '[Al(H₂O)₆]³⁺: Al³⁺ loses all 3-level electrons → all 3-level orbitals are empty. Hybridises 3s + 3p + 2×3d → 6 equal empty orbitals. Each H₂O donates one lone pair → CN = 6. The 3+ charge delocalises over the whole ion.\n\n[Fe(H₂O)₆]³⁺: Fe³⁺ = [Ar]3d⁵ (loses 4s² and one 3d). The five singly occupied 3d electrons are NOT used in bonding. Fe³⁺ uses hybridised 4s/4p/4d orbitals for 6 coordinate bonds → CN = 6.\n\n[CuCl₄]²⁻: Cu²⁺ = [Ar]3d⁹. Cl⁻ is larger than H₂O → only 4 Cl⁻ can fit around Cu²⁺. Cu²⁺ uses empty 4s/4p orbitals → CN = 4. Charge = 2+ + 4(1−) = 2−.'
      }
    },
    {
      type: 'heading',
      id: 'h-monodentate',
      data: { text: 'Monodentate Ligands', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-monodentate-def',
      data: {
        text: 'A <strong>monodentate ligand</strong> (meaning "one tooth") possesses only one lone pair of electrons available for donation to a metal ion, forming a single coordinate bond. Common monodentate ligands include:<br/>' +
        '• <strong>H₂O (water)</strong>: Oxygen has two lone pairs; one is used for coordination<br/>' +
        '• <strong>NH₃ (ammonia)</strong>: Nitrogen has one lone pair; used for coordination<br/>' +
        '• <strong>Cl⁻ (chloride ion)</strong>: Chlorine has three lone pairs; one is used<br/>' +
        '• <strong>CN⁻ (cyanide ion)</strong>: Carbon has a lone pair in the σ framework; strong field ligand<br/>' +
        '• <strong>SCN⁻ (thiocyanate ion)</strong>: Can donate through sulfur'
      }
    },
    {
      type: 'callout',
      id: 'callout-monodentate-examples',
      data: {
        style: 'key',
        title: 'Common Monodentate Ligands',
        text: 'H₂O, NH₃, Cl⁻, CN⁻, and SCN⁻ are the five ligands most commonly encountered in A-level chemistry. Each forms a single coordinate bond with the metal ion.'
      }
    },
    {
      type: 'heading',
      id: 'h-bidentate',
      data: { text: 'Bidentate Ligands', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-bidentate-def',
      data: {
        text: 'A <strong>bidentate ligand</strong> (meaning "two teeth") possesses two lone pairs of electrons on different atoms, allowing it to form two coordinate bonds with a metal ion simultaneously. The ligand essentially "grips" the metal ion at two points. Common bidentate ligands include:<br/>' +
        '• <strong>en (ethane-1,2-diamine, H₂N—CH₂—CH₂—NH₂)</strong>: Two nitrogen atoms, each with a lone pair. Forms very stable complexes.<br/>' +
        '• <strong>C₂O₄²⁻ (ethanedioate ion, —OOC—COO⁻)</strong>: Two oxygen lone pairs, found in the oxalate ligand.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-bidentate-chelation',
      data: {
        text: 'When a bidentate ligand coordinates to a metal ion, it wraps around the metal, creating a five- or six-membered ring (often called a chelate ring from the Greek "chele" meaning claw). This ring structure locks the ligand in place much more effectively than two separate monodentate ligands could achieve. The formation of chelate rings significantly increases the stability of the resulting complex.'
      }
    },
    { type: 'svg', id: 'svg-bidentate-chelation', data: { caption: 'Bidentate Chelation by 1,2-diaminoethane (en)', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="100%" height="auto"><defs><marker id="arrow-bond" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" /></marker></defs><style>text{font-family:sans-serif;font-size:16px;fill:#1e293b;text-anchor:middle;font-weight:bold;} .bond{stroke:#1e293b;stroke-width:2;} .coord{stroke:#8b5cf6;stroke-width:2;stroke-dasharray:4;fill:none} .lone-pair{fill:#8b5cf6;} .ring{fill:#e0e7ff;fill-opacity:0.6;stroke:none;}</style><path class="ring" d="M 200 40 L 130 90 L 130 150 L 270 150 L 270 90 Z" /><text x="200" y="45">M<tspan font-size="10px" dy="-10">n+</tspan></text><circle cx="200" cy="40" r="16" fill="none" stroke="#3b82f6" stroke-width="2" /><text x="130" y="90">NH₂</text><text x="270" y="90">H₂N</text><text x="130" y="160">CH₂</text><text x="270" y="160">CH₂</text><path class="bond" d="M 130 105 L 130 140" /><path class="bond" d="M 270 105 L 270 140" /><path class="bond" d="M 155 155 L 245 155" /><path class="coord" d="M 140 75 L 180 50" marker-end="url(#arrow-bond)" /><path class="coord" d="M 260 75 L 220 50" marker-end="url(#arrow-bond)" /><circle cx="140" cy="70" r="2" class="lone-pair" /><circle cx="146" cy="65" r="2" class="lone-pair" /><circle cx="260" cy="70" r="2" class="lone-pair" /><circle cx="254" cy="65" r="2" class="lone-pair" /><text x="200" y="180" font-size="12px" font-weight="normal">Five-membered chelate ring</text></svg>' } },
    {
      type: 'heading',
      id: 'h-quadridentate',
      data: { text: 'Quadridentate Ligands — Biological Importance', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-haem-def',
      data: {
        text: '<strong>Haem</strong> is a <strong>quadridentate ligand</strong> (four donor atoms). It is a porphyrin ring containing four nitrogen atoms arranged in a square, each donating a lone pair to a central Fe²⁺ ion. The remaining two coordination positions are used by:<br/>' +
          '• Position 5: nitrogen lone pair from the globin protein chain (permanent bond)<br/>' +
          '• Position 6: O₂ molecule (reversible) or H₂O (when not carrying oxygen)<br/>' +
          'Total CN = 6 (4 bonds from haem ring + 1 from globin + 1 from O₂/H₂O). This is how haemoglobin carries oxygen in the bloodstream.'
      }
    },
    {
      type: 'callout',
      id: 'callout-co-poisoning',
      data: {
        style: 'warning',
        title: '⚠️ Carbon Monoxide Poisoning',
        text: 'CO competes with O₂ for the sixth coordination site on Fe²⁺ in haemoglobin. Unlike O₂, CO binds irreversibly — forming a coordinate bond ~200× stronger than O₂. Once CO binds, that haemoglobin molecule permanently cannot carry oxygen. Even low concentrations are fatal because CO progressively deactivates haemoglobin molecules.\n\nTreatment: high-concentration O₂ therapy displaces CO by Le Chatelier\'s principle (mass action).'
      }
    },
    {
      type: 'heading',
      id: 'h-polydentate',
      data: { text: 'Polydentate Ligands and the Chelate Effect', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-polydentate-def',
      data: {
        text: 'A <strong>polydentate ligand</strong> can form three or more coordinate bonds with a metal ion. The most important example in A-level chemistry is:<br/>' +
        '• <strong>EDTA⁴⁻ (ethylenediaminetetraacetate)</strong>: A hexadentate ligand with six donor atoms (two nitrogens and four oxygens). EDTA can completely surround a metal ion with six coordinate bonds, entirely encapsulating it in the complex. EDTA is widely used in analytical chemistry and medicine (chelation therapy).'
      }
    },
    {
      type: 'heading',
      id: 'h-chelate-effect',
      data: { text: 'The Chelate Effect', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-chelate-effect-def',
      data: {
        text: 'The <strong>chelate effect</strong> is the observation that polydentate ligands form significantly more stable complexes than monodentate ligands, even when considering equivalent donor atoms. For example, a complex formed from a bidentate ligand is more stable than one formed from two separate monodentate ligands, despite the same number of electron pairs being donated.'
      }
    },
    {
      type: 'callout',
      id: 'callout-chelate-mechanism',
      data: {
        style: 'key',
        title: 'Why the Chelate Effect Occurs',
        text: 'The chelate effect arises from entropic considerations. When one polydentate ligand replaces multiple monodentate ligands, the total number of particles in solution decreases. This increase in entropy of the surroundings (fewer particles to order) drives the equilibrium towards complex formation. Additionally, chelation prevents dissociation because breaking one coordinate bond would not immediately release the ligand—the other bonds must break first.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-chelate-stability-example',
      data: {
        text: '<strong>Quantitative Example:</strong><br/>' +
        '[Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (moderate stability)<br/>' +
        '[Cu(H₂O)₆]²⁺ + 2en → [Cu(en)₂(H₂O)₂]²⁺ (much higher stability)<br/>' +
        'Despite en replacing only two NH₃ ligands, the en complex is significantly more stable. This is the chelate effect in action—the bidentate en ligand creates a more stable complex structure.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-edta-strength',
      data: {
        text: 'EDTA⁴⁻ forms exceptionally strong complexes with metal ions because it is hexadentate (six donor atoms) and completely surrounds the metal ion. The metal ion becomes trapped inside the EDTA coordination sphere, making dissociation extremely difficult. This property makes EDTA valuable in analytical chemistry (metal determination by titration) and in medicine (removal of heavy metals from the body).'
      }
    },
    {
      type: 'heading',
      id: 'h-denticity-comparison',
      data: { text: 'Comparing Ligand Types', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-denticity-summary',
      data: {
        text: '<strong>Monodentate:</strong> One coordinate bond per ligand (e.g., NH₃, Cl⁻)<br/>' +
        '<strong>Bidentate:</strong> Two coordinate bonds per ligand, forming chelate ring (e.g., en, C₂O₄²⁻)<br/>' +
        '<strong>Polydentate:</strong> Three or more coordinate bonds per ligand (e.g., EDTA⁴⁻ with six bonds)<br/>' +
        '<strong>General trend:</strong> As denticity increases, complex stability increases dramatically. Polydentate complexes are used when maximum stability is required.'
      }
    },
    {
      type: 'heading',
      id: 'h-naming',
      data: { text: 'Naming Complex Ions (IUPAC)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-naming-intro',
      data: {
        text: 'Complex ions are named in this order: <strong>(1) number prefix + ligand name</strong> for each type of ligand (listed alphabetically, ignoring number prefixes) → <strong>(2) metal name</strong> (with oxidation state in Roman numerals).'
      }
    },
    {
      type: 'comparisonTable',
      id: 'table-ligand-names',
      data: {
        headers: ['Ligand', 'Name used in complex'],
        rows: [
          ['H₂O', 'aqua'],
          ['NH₃', 'ammine (double-m — NOT "amine"!)'],
          ['OH⁻', 'hydroxo'],
          ['Cl⁻', 'chloro'],
          ['F⁻', 'fluoro'],
          ['CN⁻', 'cyano'],
          ['en (1,2-diaminoethane)', 'ethylenediamine'],
          ['C₂O₄²⁻ (oxalate)', 'oxalato']
        ],
        caption: 'Common ligand names in IUPAC nomenclature'
      }
    },
    {
      type: 'callout',
      id: 'callout-naming-rules',
      data: {
        style: 'key',
        title: 'Cationic vs Anionic Complexes — Metal Naming',
        text: 'CATIONIC complex (positive overall charge):\n• Metal uses normal name + Roman numeral oxidation state\n• [Cu(H₂O)₆]²⁺ = hexaaquacopper(II) ion\n• [Al(H₂O)₆]³⁺ = hexaaquaaluminium (Al always 3+ → no Roman numeral needed)\n\nANIONIC complex (negative overall charge):\n• Metal name takes the suffix "-ate"; some metals use Latin roots:\n  copper → cuprate; iron → ferrate; cobalt → cobaltate;\n  chromium → chromate; aluminium → aluminate; vanadium → vanadate\n• [CuCl₄]²⁻ = tetrachlorocuprate(II) ion\n• [Fe(CN)₆]⁴⁻ = hexacyanoferrate(II) ion\n• [Al(H₂O)₂(OH)₄]⁻ = diaquatetrahydroxoaluminate(III) ion\n\nOrder of naming ligands: alphabetical ignoring number prefix\n• [Cu(NH₃)₄(H₂O)₂]²⁺: ammine before aqua → tetraamminediaquacopper(II)'
      }
    },
    {
      type: 'callout',
      id: 'callout-naming-worked',
      data: {
        style: 'worked',
        title: 'Worked Example: Name a Complex and Verify Charge',
        text: 'Name [Cr(C₂O₄)₃]³⁻ and verify its charge:\n1. Ligand C₂O₄²⁻ = "oxalato"; three of them → "trioxalato"\n2. Cr in anionic complex → "chromate"; OS: x + 3(2−) = −3 → x = +3 → "chromate(III)"\n3. Full name: trioxalatochromate(III) ion\n4. Charge check: 3+ + 3×(2−) = −3 ✓\n\nName [Ni(en)₃]²⁺:\n1. en = "ethylenediamine"; three → "tris(ethylenediamine)"\n2. Ni²⁺ in cationic complex → "nickel(II)"\n3. Full name: tris(ethylenediamine)nickel(II) ion\n4. CN = 3 × 2 bonds per en = 6 (octahedral) ✓'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-ligands',
      data: {
        items: [
          { text: 'Ligand = molecule/ion with lone pair(s) donated to a metal ion via dative (coordinate) bond', checked: false },
          { text: 'Coordination number = number of coordinate bonds formed (not number of ligands)', checked: false },
          { text: 'Monodentate (H₂O, NH₃, Cl⁻, CN⁻, OH⁻): 1 bond; common hexaaqua ions have CN=6', checked: false },
          { text: 'Bidentate (en, C₂O₄²⁻): 2 bonds per ligand; creates chelate ring (5- or 6-membered)', checked: false },
          { text: 'Quadridentate: haem (4 N atoms in porphyrin ring, holds Fe²⁺)', checked: false },
          { text: 'Hexadentate: EDTA⁴⁻ — wraps entirely around metal using all 6 positions', checked: false },
          { text: 'Chelate effect: polydentate ligands form more stable complexes (entropy: more particles released)', checked: false },
          { text: 'CO binds irreversibly to Fe²⁺ in haemoglobin → prevents O₂ transport → CO poisoning', checked: false },
          { text: 'Naming: ligands alphabetically (aqua, ammine, chloro...) + metal(OS); anionic complex uses -ate suffix', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Ligands donate lone pairs to the metal ion via dative bonds. Monodentate ligands form one bond; bidentate (e.g. en, C₂O₄²⁻) form two; EDTA⁴⁻ is hexadentate.\n\nApply: Draw the structure of [Cu(NH₃)₄(H₂O)₂]²⁺. Identify the ligands and coordination number.\n\nAnalyze: The chelate effect makes polydentate ligand complexes more stable. Explain using entropy — why does replacing 6 H₂O with 3 en increase stability?\n\nEvaluate: EDTA is used to treat heavy metal poisoning. Explain how the chelate effect makes this effective.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-ligands',
      data: {
        text: 'Ligands are electron pair donors forming coordinate bonds with metal ions. Monodentate ligands (H₂O, NH₃, Cl⁻, CN⁻, SCN⁻) form one bond; bidentate ligands (en, C₂O₄²⁻) form two bonds creating chelate rings; polydentate ligands like EDTA⁴⁻ form multiple bonds. The chelate effect explains why polydentate ligands form significantly more stable complexes than equivalent monodentate ligands—entropy and ring stability favour polydentate coordination.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-ligand-definition',
        prompt: 'Define a ligand and explain what a coordinate bond is.'
      },
      {
        id: 'cue-2',
        blockId: 'p-monodentate-def',
        prompt: 'List five common monodentate ligands.'
      },
      {
        id: 'cue-3',
        blockId: 'p-bidentate-def',
        prompt: 'Name two bidentate ligands and explain what a chelate ring is.'
      },
      {
        id: 'cue-4',
        blockId: 'h-chelate-effect',
        prompt: 'What is the chelate effect and why do polydentate ligands form more stable complexes?'
      },
      {
        id: 'cue-5',
        blockId: 'p-edta-strength',
        prompt: 'Describe EDTA⁴⁻ as a ligand and explain its medical applications.'
      }
    ],
    summaryText: 'Ligands donate electron pairs to metal ions via coordinate bonds. Monodentate: H₂O, NH₃, Cl⁻, CN⁻, SCN⁻. Bidentate: en, C₂O₄²⁻ (form chelate rings). EDTA⁴⁻: hexadentate. Chelate effect: polydentate ligands form much more stable complexes due to entropy and ring strain prevention.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Metal Complex Stability and Chelation',
      detail: 'Chelation and the chelate effect are fundamental to understanding transition metal complex chemistry and are applied in analytical chemistry, medicine, and industrial processes.',
      year: '2023',
      source: 'A-Level Chemistry Coordination Chemistry',
      tags: ['ligands', 'chelate', 'complex-stability']
    }
  ]
};
