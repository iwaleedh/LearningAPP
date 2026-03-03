export const note_chemistry_1_2_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Know the charge, relative mass and location of protons, neutrons and electrons; understand how these determine the identity and properties of atoms.'
    }
  }, {
    id: 'h-particles',
    type: 'heading',
    data: {
      text: 'The Three Subatomic Particles',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["All atoms are made from three types of subatomic particle.", "Protons and neutrons reside in a tiny, dense nucleus at the centre of the atom.", "Electrons occupy a much larger region of space surrounding the nucleus, arranged in shells (energy levels)."]
    }
  }, {
    id: 'table-particles',
    type: 'comparisonTable',
    data: {
      caption: 'Properties of the three subatomic particles',
      headers: ['Particle', 'Symbol', 'Relative Mass', 'Relative Charge', 'Location'],
      rows: [['Proton', 'p⁺', '1', '+1', 'Nucleus'], ['Neutron', 'n⁰', '1', '0', 'Nucleus'], ['Electron', 'e⁻', '1/1836 ≈ 0', '−1', 'Shells around nucleus']]
    }
  }, {
    id: 'callout-mass',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Why electrons have negligible mass',
      text: 'The mass of an electron (9.11 × 10⁻³¹ kg) is about 1/1836 that of a proton. For the purposes of A-Level calculations, electron mass is taken as zero — so the mass of an atom is concentrated entirely in its nucleus.'
    }
  }, {
    id: 'h-charge',
    type: 'heading',
    data: {
      text: 'Charge and Neutrality',
      level: 2
    }
  }, {
    id: 'p-charge',
    type: "list",
    data: {
      style: "unordered",
      items: ["A neutral atom has equal numbers of protons and electrons, so the positive and negative charges cancel exactly.", "When electrons are gained or lost, the atom becomes a charged ion."]
    }
  }, {
    id: 'list-ions',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Loss of electrons → positive ion (cation), e.g. Na → Na⁺ (loses 1 e⁻)', 'Gain of electrons → negative ion (anion), e.g. Cl → Cl⁻ (gains 1 e⁻)', 'The nucleus (proton number) does NOT change when ions form']
    }
  }, {
    id: 'h-nucleus',
    type: 'heading',
    data: {
      text: 'The Nucleus',
      level: 2
    }
  }, {
    id: 'p-nucleus',
    type: "list",
    data: {
      style: "unordered",
      items: ["Despite containing the vast majority of the atom's mass, the nucleus is incredibly small \u2014 roughly 10\u207B\xB9\u2075 m in diameter compared with 10\u207B\xB9\u2070 m for the whole atom.", "This means the atom is mostly empty space.", "The strong nuclear force holds protons and neutrons (nucleons) together against electrostatic repulsion between the positively charged protons."]
    }
  }, {
    id: 'svg-atom',
    type: 'svg',
    data: {
      caption: 'Schematic of a helium atom (not to scale — the nucleus is ~100,000 times smaller than the atom)',
      svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- electron shell -->
  <circle cx="160" cy="110" r="90" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- nucleus -->
  <circle cx="160" cy="110" r="18" fill="#4f46e5"/>
  <text x="160" y="114" text-anchor="middle" fill="white" font-size="11" font-weight="bold">2p 2n</text>
  <!-- electrons -->
  <circle cx="70" cy="110" r="8" fill="#f59e0b"/>
  <text x="70" y="138" text-anchor="middle" fill="#92400e" font-size="10">e⁻</text>
  <circle cx="250" cy="110" r="8" fill="#f59e0b"/>
  <text x="250" y="138" text-anchor="middle" fill="#92400e" font-size="10">e⁻</text>
  <!-- labels -->
  <text x="160" y="22" text-anchor="middle" fill="#4f46e5" font-size="12" font-weight="600">Helium-4 atom</text>
  <text x="160" y="196" text-anchor="middle" fill="#6b7280" font-size="10">Electron shell (10⁻¹⁰ m)</text>
  <line x1="160" y1="92" x2="160" y2="45" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="164" y="42" fill="#4f46e5" font-size="10">Nucleus (10⁻¹⁵ m)</text>
</svg>`
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — Deducing particles in an ion',
      text: 'How many protons, neutrons and electrons does a Mg²⁺ ion have, given that magnesium has atomic number 12 and mass number 24?\n\nProtons = atomic number = 12\nNeutrons = mass number − atomic number = 24 − 12 = 12\nElectrons = protons − charge = 12 − 2 = 10\n\n∴ Mg²⁺ has 12 protons, 12 neutrons, 10 electrons.'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — charge on ions',
      text: 'Always subtract for positive ions and add for negative ions when working out electron count:\n  e⁻ = protons − charge (for cations)\n  e⁻ = protons + |charge| (for anions)'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'State the relative charge and mass of a proton, neutron and electron',
        checked: false
      }, {
        text: 'Explain why the mass of an atom is concentrated in the nucleus',
        checked: false
      }, {
        text: 'Explain why a neutral atom has no overall charge',
        checked: false
      }, {
        text: 'Calculate the number of protons, neutrons and electrons in an ion given atomic number, mass number and charge',
        checked: false
      }, {
        text: 'Describe the scale difference between nucleus size and atom size',
        checked: false
      }]
    }
  },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
  {
    id: 'bloom-understand',
    type: 'callout',
    data: {
      style: 'key',
      title: '🧠 Deeper Understanding — Why It Matters',
      text: 'Understand: Subatomic particles define an atom\'s identity (protons), mass (protons+neutrons), and chemical behaviour (electrons). The charge balance between protons and electrons determines whether a species is neutral or ionic.\n\nApply: An ion has 10 electrons, 11 protons and 12 neutrons. Identify the element, write its isotope notation, and state its charge.\n\nAnalyze: Why do isotopes of the same element have identical chemical properties but different physical properties?\n\nEvaluate: A student claims "atoms are mostly empty space." Use data on nuclear radius (~10⁻¹⁵ m) vs atomic radius (~10⁻¹⁰ m) to assess this claim.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Atoms contain protons (+1, mass 1) and neutrons (0, mass 1) in the nucleus, and electrons (−1, mass ≈ 0) in surrounding shells. Neutral atoms have equal protons and electrons. Ions form when electrons are gained or lost — the proton number never changes. The nucleus is ~100,000× smaller than the atom but holds almost all its mass.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'table-particles',
      prompt: 'What are the relative charge and mass of a proton, neutron and electron?'
    }, {
      id: 'cue-2',
      blockId: 'p-charge',
      prompt: 'Why does a neutral atom have no overall charge?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'How many electrons does a Mg²⁺ ion have if its atomic number is 12?'
    }, {
      id: 'cue-4',
      blockId: 'p-nucleus',
      prompt: 'How does the size of the nucleus compare to the size of the atom?'
    }, {
      id: 'cue-5',
      blockId: 'list-ions',
      prompt: 'What happens to the electron count when an atom forms a positive ion? A negative ion?'
    }],
    summaryText: 'Protons (+1, mass 1), neutrons (0, mass 1) — in nucleus. Electrons (−1, mass ≈ 0) — in shells. Neutral atom: protons = electrons. Ion: gained or lost electrons only. Nucleus is ~10⁻¹⁵ m; atom is ~10⁻¹⁰ m.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 'Subatomic particles: charge, mass, location',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['atomic structure', 'specification']
  }]
};