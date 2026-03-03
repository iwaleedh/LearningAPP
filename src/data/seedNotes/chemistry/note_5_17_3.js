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
      type: 'checklist',
      id: 'checklist-ligands',
      data: {
        items: [
          { text: 'Ligand = electron pair donor forming coordinate bond with metal ion', checked: false },
          { text: 'Monodentate (H₂O, NH₃, Cl⁻, CN⁻, SCN⁻) forms one bond', checked: false },
          { text: 'Bidentate (en, C₂O₄²⁻) forms two bonds and creates chelate ring', checked: false },
          { text: 'EDTA⁴⁻ is hexadentate, encapsulating the metal ion', checked: false },
          { text: 'Chelate effect: polydentate ligands form more stable complexes', checked: false }
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
