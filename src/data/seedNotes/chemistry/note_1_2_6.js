export const note_chemistry_1_2_6 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the shapes of s and p atomic orbitals; understand that each orbital holds a maximum of two electrons with opposite spins; explain sub-shells and their energy ordering.'
    }
  }, {
    id: 'h-orbital',
    type: 'heading',
    data: {
      text: 'What is an Atomic Orbital?',
      level: 2
    }
  }, {
    id: 'p-orbital',
    type: "list",
    data: {
      style: "unordered",
      items: ["An atomic orbital is a region of space around the nucleus where there is a high probability (\u226590%) of finding an electron.", "Orbitals are not fixed paths \u2014 they are probability distributions described by wave functions.", "Each orbital can hold a maximum of two electrons, which must have opposite spins (Pauli exclusion principle)."]
    }
  }, {
    id: 'callout-key-pauli',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Pauli Exclusion Principle',
      text: 'No two electrons in the same atom can have the same set of quantum numbers. In practice: each orbital holds a maximum of 2 electrons, and they must have opposite spins (↑↓).'
    }
  }, {
    id: 'h-shells',
    type: 'heading',
    data: {
      text: 'Shells, Sub-shells and Orbitals',
      level: 2
    }
  }, {
    id: 'p-shells',
    type: "list",
    data: {
      style: "unordered",
      items: ["Electrons are arranged in principal energy levels called shells (n = 1, 2, 3 \u2026).", "Each shell is divided into sub-shells labelled s, p, d, f.", "Each sub-shell contains a fixed number of orbitals, and each orbital holds 2 electrons."]
    }
  }, {
    id: 'table-subshells',
    type: 'comparisonTable',
    data: {
      caption: 'Sub-shells, number of orbitals and maximum electrons',
      headers: ['Sub-shell', 'Number of orbitals', 'Max electrons', 'Shape'],
      rows: [['s', '1', '2', 'Spherical'], ['p', '3', '6', 'Dumbbell (3 orientations: px, py, pz)'], ['d', '5', '10', 'Complex (4-lobed + 1 ring)'], ['f', '7', '14', 'Very complex']]
    }
  }, {
    id: 'h-s-orbital',
    type: 'heading',
    data: {
      text: 's Orbitals',
      level: 2
    }
  }, {
    id: 'p-s-orbital',
    type: "list",
    data: {
      style: "unordered",
      items: ["An s orbital is spherically symmetric \u2014 the electron density is equal in all directions from the nucleus.", "Each principal shell has exactly one s orbital.", "The 1s orbital (n=1) is closest to the nucleus and has the lowest energy.", "The 2s orbital (n=2) is larger and has a slightly higher energy, with a spherical node inside it."]
    }
  }, {
    id: 'svg-orbitals',
    type: 'svg',
    data: {
      caption: 'Shapes of s orbital (left) and one p orbital (right)',
      svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- s orbital — sphere -->
  <circle cx="90" cy="90" r="60" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="2"/>
  <circle cx="90" cy="90" r="4" fill="#4f46e5"/>
  <text x="90" y="170" text-anchor="middle" fill="#4f46e5" font-size="12" font-weight="600">s orbital</text>
  <text x="90" y="184" text-anchor="middle" fill="#6b7280" font-size="10">Spherically symmetric</text>

  <!-- p orbital — two lobes -->
  <!-- Top lobe -->
  <ellipse cx="280" cy="48" rx="28" ry="42" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="2"/>
  <!-- Bottom lobe -->
  <ellipse cx="280" cy="132" rx="28" ry="42" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
  <!-- nucleus -->
  <circle cx="280" cy="90" r="4" fill="#374151"/>
  <!-- axis line -->
  <line x1="280" y1="10" x2="280" y2="170" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="316" y="48" fill="#ef4444" font-size="10">+</text>
  <text x="316" y="132" fill="#10b981" font-size="10">−</text>
  <text x="280" y="184" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">p orbital (pz)</text>
  <text x="280" y="198" text-anchor="middle" fill="#6b7280" font-size="10">Two lobes, opposite phase</text>
</svg>`
    }
  }, {
    id: 'h-p-orbital',
    type: 'heading',
    data: {
      text: 'p Orbitals',
      level: 2
    }
  }, {
    id: 'p-p-orbital',
    type: "list",
    data: {
      style: "unordered",
      items: ["p orbitals have a dumbbell shape with two lobes of electron density on either side of the nucleus, separated by a nodal plane where the probability of finding an electron is zero.", "There are three p orbitals in each p sub-shell, oriented at 90\xB0 to each other along the x, y, and z axes (px, py, pz).", "All three have equal energy (they are degenerate)."]
    }
  }, {
    id: 'callout-key-hunds',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Hund\'s Rule',
      text: 'When filling orbitals of equal energy (degenerate orbitals, e.g. the three 2p orbitals), electrons occupy separate orbitals with parallel spins before pairing up.\n\nCorrect: 2p has ↑_ ↑_ ↑_ for 3 electrons\nIncorrect: 2p has ↑↓ ↑_ __ (would pair before filling all orbitals)'
    }
  }, {
    id: 'h-energy',
    type: 'heading',
    data: {
      text: 'Energy Order of Sub-shells',
      level: 2
    }
  }, {
    id: 'p-energy',
    type: "list",
    data: {
      style: "unordered",
      items: ["Within a given principal shell, sub-shell energies increase in the order s < p < d < f.", "Electrons always fill the lowest available energy sub-shell first (Aufbau principle)."]
    }
  }, {
    id: 'list-filling',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p', 'Note: 4s fills before 3d because 4s has lower energy than 3d for atoms with Z ≤ 20', 'After filling 3d, the order resumes: 4p → 5s → 4d → 5p → 6s → 4f …']
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — orbital box diagrams',
      text: 'Draw each orbital as a box [ ] and each electron as an arrow ↑ or ↓.\nFill sub-shells using Aufbau (lowest energy first) and Hund\'s rule (one electron per orbital before pairing).\nExample for carbon (Z=6): 1s[↑↓] 2s[↑↓] 2p[↑][↑][ ]'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define an atomic orbital',
        checked: false
      }, {
        text: 'State the maximum number of electrons per orbital',
        checked: false
      }, {
        text: 'Describe the shape of an s orbital',
        checked: false
      }, {
        text: 'Describe the shape of a p orbital and state how many p orbitals exist per sub-shell',
        checked: false
      }, {
        text: 'Apply Hund\'s rule and the Aufbau principle to fill orbitals',
        checked: false
      }, {
        text: 'State the energy order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p',
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
      text: 'Understand: s orbitals are spherical; p orbitals are dumbbell-shaped. Each orbital holds max 2 electrons with opposite spins.\n\nApply: Draw shapes of 1s, 2s, and 2p orbitals. Why is 2s larger than 1s?\n\nAnalyze: Why can a p subshell hold 6 electrons while s holds only 2? Relate to number of orbitals and Pauli exclusion.\n\nEvaluate: "Electrons orbit the nucleus like planets orbit the sun." Critique using electron probability density and the uncertainty principle.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'An orbital is a region of ≥90% electron probability. Max 2 electrons per orbital (opposite spins — Pauli). s orbitals: spherical, 1 per sub-shell. p orbitals: dumbbell-shaped, 3 per sub-shell (px, py, pz), degenerate. Filling order (Aufbau): 1s 2s 2p 3s 3p 4s 3d 4p. Hund\'s rule: fill degenerate orbitals singly before pairing.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'p-orbital',
      prompt: 'What is an atomic orbital? How many electrons can it hold?'
    }, {
      id: 'cue-2',
      blockId: 'svg-orbitals',
      prompt: 'Describe the shapes of s and p orbitals.'
    }, {
      id: 'cue-3',
      blockId: 'callout-key-hunds',
      prompt: 'State Hund\'s rule and show the correct filling of the 2p sub-shell for nitrogen (3 electrons in 2p).'
    }, {
      id: 'cue-4',
      blockId: 'list-filling',
      prompt: 'Write the sub-shell filling order from 1s to 4p.'
    }, {
      id: 'cue-5',
      blockId: 'table-subshells',
      prompt: 'How many orbitals are in an s, p and d sub-shell? What is the maximum number of electrons each holds?'
    }],
    summaryText: 'Orbital = region of ≥90% probability, max 2 electrons (opposite spins). s = sphere; p = dumbbell (3 orientations). Aufbau: 1s 2s 2p 3s 3p 4s 3d 4p. Hund\'s: fill singly before pairing.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 2',
    detail: 's and p orbitals, Aufbau principle, Hund\'s rule',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['orbitals', 'electron configuration']
  }]
};