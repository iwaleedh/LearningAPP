export const note_chemistry_1_3_10 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the metallic bonding model; explain how the structure of metals accounts for their physical properties including conductivity, malleability, ductility and high melting points.'
    }
  }, {
    id: 'h-metallic',
    type: 'heading',
    data: {
      text: 'The Metallic Bonding Model',
      level: 2
    }
  }, {
    id: 'p-metallic',
    type: "list",
    data: {
      style: "unordered",
      items: ["Metals consist of a giant lattice of positive metal ions (cations) surrounded by a \"sea\" of delocalised electrons.", "The outer shell electrons leave the individual metal atoms and become free to move throughout the entire metallic lattice.", "The metallic bond is the electrostatic attraction between the positive metal ions and the delocalised electrons."]
    }
  }, {
    id: 'callout-key-def',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Definition — metallic bond',
      text: 'A metallic bond is the electrostatic attraction between a lattice of positive metal ions and a delocalised sea of electrons. The bond is non-directional and acts throughout the whole structure.'
    }
  }, {
    id: 'svg-metallic',
    type: 'svg',
    data: {
      caption: 'Metallic bonding — positive ions in a lattice surrounded by delocalised electrons',
      svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Background electron sea -->
  <rect x="10" y="20" width="360" height="160" rx="12" fill="rgba(99,102,241,0.08)" stroke="#6366f1" stroke-width="1" stroke-dasharray="5,3"/>
  <!-- Metal cations in lattice -->
  <circle cx="70" cy="60" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="64" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="160" cy="60" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="160" y="64" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="250" cy="60" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="250" y="64" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="340" cy="60" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="340" y="64" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="70" cy="140" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="144" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="160" cy="140" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="160" y="144" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="250" cy="140" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="250" y="144" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <circle cx="340" cy="140" r="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="340" y="144" text-anchor="middle" fill="#1e40af" font-size="11" font-weight="bold">M⁺</text>
  <!-- Delocalised electrons -->
  <text x="115" y="103" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">e⁻</text>
  <text x="205" y="103" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">e⁻</text>
  <text x="295" y="103" text-anchor="middle" fill="#6366f1" font-size="14" font-weight="bold">e⁻</text>
  <text x="35" y="103" text-anchor="middle" fill="#6366f1" font-size="12">e⁻</text>
  <text x="355" y="103" text-anchor="middle" fill="#6366f1" font-size="12">e⁻</text>
  <!-- Label -->
  <text x="190" y="192" text-anchor="middle" fill="#6b7280" font-size="10">Delocalised electron sea surrounds lattice of M⁺ ions</text>
</svg>`
    }
  }, {
    id: 'h-factors',
    type: 'heading',
    data: {
      text: 'Factors Affecting Metallic Bond Strength',
      level: 2
    }
  }, {
    id: 'list-factors',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Number of delocalised electrons per atom — more electrons → stronger bond (e.g. Al, 3 delocalised e⁻, stronger than Na, 1 delocalised e⁻)', 'Ionic charge — higher charge on cation → stronger attraction to electron sea', 'Ionic radius — smaller ion → higher charge density → stronger bond', 'Across Period 3: Na (1e⁻) < Mg (2e⁻) < Al (3e⁻) → increasing mp and strength']
    }
  }, {
    id: 'table-mp',
    type: 'comparisonTable',
    data: {
      caption: 'Melting points of Period 3 metals',
      headers: ['Metal', 'Delocalised e⁻ per atom', 'Charge on ion', 'Melting point / K', 'Relative bond strength'],
      rows: [['Na', '1', '1+', '371', 'Weakest'], ['Mg', '2', '2+', '923', 'Intermediate'], ['Al', '3', '3+', '933', 'Strongest']]
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Describe the metallic bonding model (ion lattice + electron sea)',
        checked: false
      }, {
        text: 'Define a metallic bond',
        checked: false
      }, {
        text: 'State the two factors that affect metallic bond strength',
        checked: false
      }, {
        text: 'Explain why Al has a stronger metallic bond than Na',
        checked: false
      }, {
        text: 'Explain why metallic bond strength increases from Na to Al across Period 3',
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
      text: 'Understand: Metallic bonding involves cations in a sea of delocalised electrons, explaining conductivity and malleability.\n\nApply: Why is copper a better conductor than iron? Consider delocalised electrons and lattice regularity.\n\nAnalyze: Why are metals malleable while ionic compounds are brittle? Compare at the particle level.\n\nEvaluate: Explain how alloying disrupts the lattice and prevents layers from sliding, increasing hardness.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Metallic bond: electrostatic attraction between lattice of M⁺ ions and delocalised electron sea. Strength increases with: more delocalised electrons per atom, higher ionic charge, smaller ionic radius. Na (1e⁻, 1+) < Mg (2e⁻, 2+) < Al (3e⁻, 3+) in bond strength and melting point.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-def',
      prompt: 'Define a metallic bond.'
    }, {
      id: 'cue-2',
      blockId: 'p-metallic',
      prompt: 'Describe the structure of a metal in terms of ions and electrons.'
    }, {
      id: 'cue-3',
      blockId: 'list-factors',
      prompt: 'State two factors that affect the strength of a metallic bond.'
    }, {
      id: 'cue-4',
      blockId: 'table-mp',
      prompt: 'Why does aluminium have a higher melting point than sodium?'
    }, {
      id: 'cue-5',
      blockId: 'list-factors',
      prompt: 'Explain the trend in melting point from Na to Mg to Al across Period 3.'
    }],
    summaryText: 'Metallic bond: M⁺ lattice + delocalised e⁻ sea. Strength: more e⁻ per atom + higher charge + smaller radius. Na<Mg<Al in mp and strength.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Metallic bonding model',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['metallic bonding', 'structure']
  }]
};