export const note_chemistry_5_18_1 = {
  blocks: [
    {
      id: 'obj-delocalized-pi',
      type: 'objective',
      data: {
        text: 'Understand the delocalised π system in benzene: sp² hybridisation of carbons, overlapping p orbitals, formation of bonding π molecular orbitals, electron delocalisation, and the resulting stabilisation energy'
      }
    },
    {
      id: 'h-sp2-hybridisation',
      type: 'heading',
      data: { text: 'sp² Hybridisation in Benzene', level: 2 }
    },
    {
      id: 'p-sp2-1',
      type: 'paragraph',
      data: {
        text: 'Each carbon atom in benzene is sp² hybridised. This means that three of the four valence electrons on carbon form sp² hybrid orbitals that are arranged trigonally in the plane of the ring, with bond angles of 120°. Three sp² orbitals form: one C−C σ bond with each neighbouring carbon, and one C−H σ bond with hydrogen.'
      }
    },
    {
      id: 'p-sp2-2',
      type: 'paragraph',
      data: {
        text: 'The fourth valence electron on each carbon occupies an unhybridised p orbital that is perpendicular to the plane of the hexagonal ring. This p orbital extends above and below the ring plane. It is these six p orbitals (one from each carbon) that interact to form the π system.'
      }
    },
    {
      id: 'callout-sp2-arrangement',
      type: 'callout',
      data: {
        style: 'key',
        title: 'sp² Geometry in Benzene',
        text: 'Each C is sp² hybridised: trigonal planar geometry with 120° bond angles. The remaining p orbital is perpendicular to the ring. This geometry is crucial for p orbital overlap.'
      }
    },
    { type: 'svg', id: 'svg-pi-orbitals', data: { caption: 'sp² Hybridisation and p-orbital Overlap in Benzene', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="auto"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;fill:#1e293b;font-size:14px;}.sigma{stroke:#1e293b;stroke-width:2;fill:none;}.porbital{fill:#3b82f6;fill-opacity:0.4;stroke:#2563eb;stroke-width:1.5;}</style><g transform="translate(150, 100)"><path class="sigma" d="M 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 L -26 -15 Z"/><path class="sigma" d="M 0 -30 L 0 -50 M 26 -15 L 43 -25 M 26 15 L 43 25 M 0 30 L 0 50 M -26 15 L -43 25 M -26 -15 L -43 -25"/><text x="0" y="70" text-anchor="middle" font-weight="bold">Six unoverlapped p-orbitals</text><ellipse cx="0" cy="-45" rx="8" ry="15" class="porbital"/><ellipse cx="0" cy="-15" rx="8" ry="15" class="porbital"/><ellipse cx="26" cy="-30" rx="8" ry="15" class="porbital"/><ellipse cx="26" cy="0" rx="8" ry="15" class="porbital"/><ellipse cx="26" cy="0" rx="8" ry="15" class="porbital"/><ellipse cx="26" cy="30" rx="8" ry="15" class="porbital"/><ellipse cx="0" cy="15" rx="8" ry="15" class="porbital"/><ellipse cx="0" cy="45" rx="8" ry="15" class="porbital"/><ellipse cx="-26" cy="0" rx="8" ry="15" class="porbital"/><ellipse cx="-26" cy="30" rx="8" ry="15" class="porbital"/><ellipse cx="-26" cy="-30" rx="8" ry="15" class="porbital"/><ellipse cx="-26" cy="0" rx="8" ry="15" class="porbital"/></g><path d="M 280 100 L 320 100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" /><text x="300" y="90" text-anchor="middle" font-size="12px" fill="#64748b">Sideways overlap</text><g transform="translate(450, 100)"><path class="sigma" d="M 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 L -26 -15 Z"/><path class="sigma" d="M 0 -30 L 0 -50 M 26 -15 L 43 -25 M 26 15 L 43 25 M 0 30 L 0 50 M -26 15 L -43 25 M -26 -15 L -43 -25"/><ellipse cx="0" cy="-25" rx="40" ry="15" fill="#10b981" fill-opacity="0.4" stroke="#059669" stroke-width="2" /><ellipse cx="0" cy="25" rx="40" ry="15" fill="#10b981" fill-opacity="0.4" stroke="#059669" stroke-width="2" /><text x="0" y="70" text-anchor="middle" font-weight="bold">Delocalised π System</text><text x="0" y="85" text-anchor="middle" font-size="12px" fill="#059669">(Electron density above &amp; below plane)</text></g></svg>' } },
    {
      id: 'h-p-orbital-overlap',
      type: 'heading',
      data: { text: 'Overlapping p Orbitals and π Electron Delocalisation', level: 2 }
    },
    {
      id: 'p-overlap-1',
      type: 'paragraph',
      data: {
        text: 'The six p orbitals on the six carbons can overlap sideways (laterally) to form molecular orbitals. In the simplest picture, these six p orbitals combine to create bonding and antibonding π molecular orbitals. The three bonding π MOs have lower energy than the original atomic p orbitals and can accommodate the six π electrons.'
      }
    },
    {
      id: 'p-overlap-2',
      type: 'paragraph',
      data: {
        text: 'Crucially, these π electrons are not confined between two adjacent carbon atoms (as in a C=C double bond). Instead, they occupy molecular orbitals that extend over all six carbon atoms in the ring. This is electron delocalisation. The electron density is spread evenly around the entire ring, creating a symmetric aromatic system.'
      }
    },
    {
      id: 'eq-molecular-orbitals',
      type: 'equation',
      data: {
        html: '6 atomic p orbitals combine to form 6 π molecular orbitals<br />3 bonding π MOs (filled, lower energy)<br />3 antibonding π MOs (empty, higher energy)<br />6 π electrons occupy the 3 bonding MOs'
      }
    },
    {
      id: 'h-stabilisation-energy',
      type: 'heading',
      data: { text: 'Stabilisation Energy (Resonance Energy)', level: 2 }
    },
    {
      id: 'p-stab-1',
      type: 'paragraph',
      data: {
        text: 'The delocalisation of π electrons gives benzene extra stability compared to a hypothetical Kekulé structure. This extra stability is quantified as the stabilisation energy or resonance energy. From the enthalpy of hydrogenation data, this is approximately 150 kJ/mol.'
      }
    },
    {
      id: 'p-stab-2',
      type: 'paragraph',
      data: {
        text: 'The energy of the three bonding π MOs is lower than expected for three isolated C=C double bonds. This lowering of energy (deeper "wells" in the MO diagram) is the source of the stabilisation. It means breaking the aromatic system requires more energy than breaking three localised double bonds would.'
      }
    },
    {
      id: 'callout-why-stable',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why Benzene is Stable: Worked Logic',
        text: 'Delocalisation spreads electron density over 6 carbons → lowers π MO energies → requires more energy to disrupt → higher activation energy for reactions → benzene reacts more slowly than expected for a C=C system. Actual ΔH(hydrogenation) = −208 kJ/mol vs predicted −360 kJ/mol for 3 double bonds. The 152 kJ/mol difference is the stabilisation energy.'
      }
    },
    {
      id: 'h-why-aromatic',
      type: 'heading',
      data: { text: 'Why Delocalisation Makes Benzene Aromatic', level: 3 }
    },
    {
      id: 'p-aromatic',
      type: 'paragraph',
      data: {
        text: 'Aromaticity is a consequence of delocalisation. When π electrons are delocalised around a ring, the molecule gains extra stability (lower energy), enhanced symmetry, and a unique set of chemical properties. Benzene has 6 π electrons, which fills the three bonding π MOs completely (Hückel 4n+2 rule: n=1, so 6 electrons is aromatic). This closed-shell arrangement contributes to exceptional stability.'
      }
    },
    {
      id: 'checklist-delocalisation',
      type: 'checklist',
      data: {
        items: [
          { text: 'Each C is sp² hybridised with p orbital perpendicular to ring', checked: false },
          { text: '6 p orbitals overlap to form bonding and antibonding π MOs', checked: false },
          { text: 'Electrons delocalised over all 6 carbons (not localised between pairs)', checked: false },
          { text: 'Delocalisation lowers π MO energies (stabilisation energy ≈ 150 kJ/mol)', checked: false },
          { text: 'Hückel 4n+2 rule: 6 electrons is aromatic (n=1)', checked: false }
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
        text: 'Understand: Each C in benzene is sp² hybridised with one unhybridised p orbital. These six p orbitals overlap laterally to form a delocalised π system above and below the ring.\n\nApply: Explain why benzene is planar and why all bond angles are 120°.\n\nAnalyze: Compare the stability of benzene with cyclohexene. Why is benzene\'s resonance energy (~150 kJ mol⁻¹) so significant?\n\nEvaluate: The molecular orbital model describes π bonding and antibonding MOs. Is this more useful than the "cloud" model for predicting reactivity?'
      },
      terms: []
    },
    {
      id: 'summary-delocal',
      type: 'summary',
      data: {
        text: 'Benzene\'s stability arises from sp² hybridisation, allowing six p orbitals to overlap and form a delocalised π system. The six π electrons occupy three bonding molecular orbitals that extend over all six carbons, lowering the total energy by ~150 kJ/mol (stabilisation energy). This delocalisation is the essence of aromaticity in benzene and explains its resistance to addition reactions.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Electrophilic Aromatic Substitution (EAS)",
        text: "Benzene's \u03c0-electrons attract electrophiles (E\u207a). Attack forms carbocation intermediate (arenium ion), preserving 4 \u03c0-electrons in ring. H\u207a removed to restore aromaticity & 6 \u03c0-electrons. Mechanism: \u03c0-electrons attack E\u207a, form sigma bond, lose H\u207a. Catalyst (AlCl\u2083) required to activate E\u207a (e.g., HNO\u2083 \u2192 NO\u2082\u207a)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-sp2-1', prompt: 'Describe the hybridisation and bonding arrangement of each carbon in benzene.' },
      { id: 'cue-2', blockId: 'p-overlap-2', prompt: 'How does delocalisation of π electrons in benzene differ from localisation in an alkene?' },
      { id: 'cue-3', blockId: 'p-stab-2', prompt: 'What is stabilisation energy, and why do delocalised electrons have lower energy?' },
      { id: 'cue-4', blockId: 'p-aromatic', prompt: 'Explain Hückel\'s 4n+2 rule in the context of benzene\'s aromaticity.' }
    ],
    summaryText: 'Each C is sp² hybridised with one p orbital perpendicular to the ring. Six p orbitals overlap to form three bonding π MOs holding all six electrons, delocalised over the entire ring. This delocalisation lowers energy by ~150 kJ/mol, making benzene aromatic (4n+2 rule: 6 electrons, n=1).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Benzene delocalised π system and aromaticity',
      detail: 'Molecular orbital diagrams showing bonding π MOs; X-ray diffraction confirming equal bond lengths; enthalpy data',
      year: '2023',
      source: 'chemguide.co.uk — benzene delocalised bonding and aromaticity',
      tags: ['delocalisation', 'MO diagram', 'aromaticity', 'stability']
    }
  ]
};
