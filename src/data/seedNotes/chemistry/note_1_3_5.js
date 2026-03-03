export const note_chemistry_1_3_5 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain ionic polarisation using Fajans\' rules; describe how polarisation gives covalent character to ionic bonds and affects properties such as melting point and solubility.'
    }
  }, {
    id: 'h-polarisation',
    type: 'heading',
    data: {
      text: 'What is Ionic Polarisation?',
      level: 2
    }
  }, {
    id: 'p-polarisation',
    type: "list",
    data: {
      style: "unordered",
      items: ["In an ideal ionic compound, the electron charge cloud of the anion is perfectly spherical.", "In reality, the cation exerts an electrostatic pull on the electron cloud of the anion, distorting it towards the cation.", "This distortion is called polarisation.", "The greater the polarisation, the more the bond acquires covalent character \u2014 the electron density is shared rather than purely transferred."]
    }
  }, {
    id: 'callout-key-def',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key definitions',
      text: 'Polarising power: the ability of a cation to distort the electron cloud of an anion.\n→ High polarising power = small, highly charged cation (high charge density)\n\nPolarisability: the ease with which an anion\'s electron cloud can be distorted.\n→ High polarisability = large anion with diffuse outer electrons'
    }
  }, {
    id: 'h-fajans',
    type: 'heading',
    data: {
      text: 'Fajans\' Rules',
      level: 2
    }
  }, {
    id: 'p-fajans',
    type: "list",
    data: {
      style: "unordered",
      items: ["e.", "when a bond will have appreciable covalent character despite being nominally ionic."]
    }
  }, {
    id: 'list-fajans',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Small cation → high charge density → high polarising power → more covalent character', 'Highly charged cation (2+, 3+) → higher polarising power → more covalent character', 'Large anion → outer electrons further from nucleus, more diffuse → more polarisable → more covalent character', 'Highly charged anion → greater electron density, more polarisable → more covalent character']
    }
  }, {
    id: 'table-fajans',
    type: 'comparisonTable',
    data: {
      caption: 'Fajans\' rules — factors favouring covalent character',
      headers: ['Factor', 'Favours covalent character', 'Favours ionic character'],
      rows: [['Cation size', 'Small cation (high charge density)', 'Large cation'], ['Cation charge', 'High charge (2+, 3+)', 'Low charge (1+)'], ['Anion size', 'Large anion (polarisable)', 'Small anion'], ['Anion charge', 'High charge (2−, 3−)', 'Low charge (1−)']]
    }
  }, {
    id: 'h-examples',
    type: 'heading',
    data: {
      text: 'Comparing Covalent Character',
      level: 2
    }
  }, {
    id: 'callout-we1',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — AlCl₃ vs NaCl',
      text: 'AlCl₃: Al³⁺ is small (ionic radius 54 pm) and highly charged (3+) → very high polarising power → Cl⁻ electron cloud heavily distorted → significant covalent character. AlCl₃ is in fact largely covalent.\n\nNaCl: Na⁺ is larger (102 pm) and less charged (1+) → lower polarising power → minimal polarisation → predominantly ionic.'
    }
  }, {
    id: 'callout-we2',
    type: 'callout',
    data: {
      style: 'worked',
      title: 'Worked Example — AgI vs AgF',
      text: 'Both have Ag⁺ cation (same polarising power).\nI⁻ is much larger than F⁻ → I⁻ is more polarisable → AgI has more covalent character than AgF.\n\nEffect: AgI has lower melting point and is less soluble in water than expected for a "purely ionic" compound.'
    }
  }, {
    id: 'h-effects',
    type: 'heading',
    data: {
      text: 'Effect on Properties',
      level: 2
    }
  }, {
    id: 'list-effects',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['More covalent character → lower melting point (covalent bonds are directional, lattice energy reduced)', 'More covalent character → less soluble in water (less ionic, harder for water to hydrate)', 'More covalent character → more soluble in non-polar solvents', 'Intermediate cases: some compounds (e.g. AlCl₃, FeCl₃) behave more like covalent molecules than ionic solids']
    }
  }, {
    id: 'svg-polarisation',
    type: 'svg',
    data: {
      caption: 'Polarisation of an anion by a cation — the electron cloud distorts towards the cation',
      svg: `<svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Ideal ionic: spherical anion -->
  <circle cx="90" cy="80" r="40" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="90" cy="80" r="10" fill="#4f46e5"/>
  <text x="90" y="84" text-anchor="middle" fill="white" font-size="9">M⁺</text>
  <text x="90" y="136" text-anchor="middle" fill="#6b7280" font-size="10">Ideal ionic</text>
  <text x="90" y="148" text-anchor="middle" fill="#6b7280" font-size="10">(spherical anion)</text>
  <!-- Arrow -->
  <line x1="170" y1="80" x2="210" y2="80" stroke="#374151" stroke-width="1.5" marker-end="url(#arr4)"/>
  <text x="190" y="72" text-anchor="middle" fill="#374151" font-size="9">polarisation</text>
  <!-- Polarised: distorted anion -->
  <ellipse cx="310" cy="80" rx="50" ry="38" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="280" cy="80" r="10" fill="#4f46e5"/>
  <text x="280" y="84" text-anchor="middle" fill="white" font-size="9">M⁺</text>
  <text x="314" y="136" text-anchor="middle" fill="#6b7280" font-size="10">Polarised</text>
  <text x="314" y="148" text-anchor="middle" fill="#6b7280" font-size="10">(distorted anion → covalent character)</text>
  <defs>
    <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
  </defs>
</svg>`
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common mistake — polarisation vs polarity',
      text: 'Polarisation (Fajans\' rules) describes the distortion of the anion\'s electron cloud by the cation — it gives ionic bonds covalent character.\nPolarity (electronegativity difference) describes the uneven sharing of electrons in a covalent bond.\nThese are different concepts working in opposite directions: one makes ionic more covalent, the other describes asymmetry within covalent bonds.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'Define polarising power and polarisability',
        checked: false
      }, {
        text: 'State Fajans\' rules — what factors increase covalent character',
        checked: false
      }, {
        text: 'Explain why AlCl₃ has more covalent character than NaCl',
        checked: false
      }, {
        text: 'Explain why AgI has more covalent character than AgF',
        checked: false
      }, {
        text: 'Describe how increased polarisation affects melting point and solubility',
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
      text: 'Understand: Ionic polarisation occurs when a small, highly charged cation distorts a large anion\'s electron cloud, introducing covalent character (Fajans\' rules).\n\nApply: Predict which has greater covalent character: LiCl or NaCl. Explain using charge density.\n\nAnalyze: AlCl₃ has much lower m.p. than NaCl. Analyze how Al³⁺\'s polarising power causes significant covalent character.\n\nEvaluate: Is the ionic-covalent distinction a clear boundary or a continuous spectrum? Support with examples.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Polarisation: cation distorts anion electron cloud → covalent character. Fajans\' rules: covalent character increases with small/highly charged cation (high polarising power) and large/highly charged anion (high polarisability). More covalent character → lower mp, less soluble in water. Examples: AlCl₃ (Al³⁺ small + charged) > NaCl; AgI (I⁻ large) > AgF.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-key-def',
      prompt: 'Define polarising power and polarisability.'
    }, {
      id: 'cue-2',
      blockId: 'list-fajans',
      prompt: 'State Fajans\' rules — what four factors increase covalent character in an ionic compound?'
    }, {
      id: 'cue-3',
      blockId: 'callout-we1',
      prompt: 'Explain why AlCl₃ has more covalent character than NaCl.'
    }, {
      id: 'cue-4',
      blockId: 'callout-we2',
      prompt: 'Why does AgI have more covalent character than AgF?'
    }, {
      id: 'cue-5',
      blockId: 'list-effects',
      prompt: 'How does increased covalent character (from polarisation) affect the melting point of an ionic compound?'
    }],
    summaryText: 'Polarisation → covalent character. Fajans: small/high-charge cation (polarising power ↑) + large/high-charge anion (polarisability ↑) → more covalent. Effects: lower mp, less water-soluble. AlCl₃ > NaCl; AgI > AgF.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Ionic polarisation and Fajans\' rules',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'polarisation', 'Fajans rules']
  }]
};