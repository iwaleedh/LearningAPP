export const note_chemistry_1_3_4 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Explain how ionic radius and ionic charge affect the strength of ionic bonding and the melting point of ionic compounds; compare melting points of different ionic compounds.'
    }
  }, {
    id: 'h-strength',
    type: 'heading',
    data: {
      text: 'Factors Affecting Ionic Bond Strength',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["The strength of an ionic bond (and the lattice energy of an ionic compound) depends on two key factors: the charge on the ions and the size (radius) of the ions.", "These are summarised by Coulomb's Law: the force between two charged species is proportional to the product of their charges and inversely proportional to the square of the distance between them."]
    }
  }, {
    id: 'eq-coulomb',
    type: 'equation',
    data: {
      html: 'F ∝ <span class="nb-frac"><span class="nb-num">Q₁ × Q₂</span><span class="nb-den">r²</span></span>',
      caption: 'Coulomb\'s Law — F = electrostatic force, Q = ionic charges, r = distance between ion centres (sum of ionic radii)'
    }
  }, {
    id: 'h-charge',
    type: 'heading',
    data: {
      text: '1. Effect of Ionic Charge',
      level: 2
    }
  }, {
    id: 'p-charge',
    type: "list",
    data: {
      style: "unordered",
      items: ["Higher ionic charges result in stronger electrostatic attraction between ions \u2192 higher lattice energy \u2192 higher melting point.", "For example, MgO (Mg\xB2\u207A and O\xB2\u207B) has a much higher melting point than NaCl (Na\u207A and Cl\u207B) because the ions in MgO carry double the charge."]
    }
  }, {
    id: 'table-charge',
    type: 'comparisonTable',
    data: {
      caption: 'Effect of charge on melting point',
      headers: ['Compound', 'Cation', 'Anion', 'Charge product (Q₁×Q₂)', 'Melting point / °C'],
      rows: [['NaCl', 'Na⁺ (+1)', 'Cl⁻ (−1)', '1 × 1 = 1', '801'], ['MgO', 'Mg²⁺ (+2)', 'O²⁻ (−2)', '2 × 2 = 4', '2852'], ['NaF', 'Na⁺ (+1)', 'F⁻ (−1)', '1 × 1 = 1', '993'], ['MgF₂', 'Mg²⁺ (+2)', 'F⁻ (−1)', '2 × 1 = 2', '1263']]
    }
  }, {
    id: 'h-radius',
    type: 'heading',
    data: {
      text: '2. Effect of Ionic Radius',
      level: 2
    }
  }, {
    id: 'p-radius',
    type: "list",
    data: {
      style: "unordered",
      items: ["Smaller ions can get closer together, reducing the distance r between ion centres.", "A smaller r means a stronger electrostatic force \u2192 stronger ionic bond \u2192 higher melting point.", "Conversely, larger ions are further apart, leading to weaker forces and lower melting points."]
    }
  }, {
    id: 'table-radius',
    type: 'comparisonTable',
    data: {
      caption: 'Effect of ionic radius on melting point (all 1+/1− compounds)',
      headers: ['Compound', 'Cation radius / pm', 'Anion radius / pm', 'Melting point / °C'],
      rows: [['LiF', '76', '133', '848'], ['LiCl', '76', '181', '605'], ['NaCl', '102', '181', '801'], ['KCl', '138', '181', '770'], ['KBr', '138', '196', '734'], ['KI', '138', '220', '681']]
    }
  }, {
    id: 'p-radius2',
    type: "list",
    data: {
      style: "unordered",
      items: ["Going down Group 1 (Li \u2192 K), the cation radius increases \u2192 ions are further apart \u2192 weaker forces \u2192 lower melting point.", "Going down Group 17 (F \u2192 I), the anion radius also increases \u2192 lower melting points.", "Both trends are consistent with Coulomb's Law."]
    }
  }, {
    id: 'h-ionic-radius-trends',
    type: 'heading',
    data: {
      text: 'Trends in Ionic Radius',
      level: 2
    }
  }, {
    id: 'list-radius-trends',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Down a group: ionic radius increases (more electron shells)', 'Across a period (isoelectronic ions): radius decreases as nuclear charge increases (e.g. O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ — all have 10 electrons)', 'Cations are smaller than the parent atom (lost electrons → less shielding, nucleus pulls remaining electrons closer)', 'Anions are larger than the parent atom (gained electrons → more repulsion, electrons spread out)']
    }
  }, {
    id: 'callout-key',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Key comparison — NaCl vs MgO',
      text: 'NaCl: Na⁺ (1+), Cl⁻ (1−) → charge product = 1. Melting point 801°C.\nMgO: Mg²⁺ (2+), O²⁻ (2−) → charge product = 4. Melting point 2852°C.\n\nMgO has a much higher mp because:\n1. Higher ionic charges → much stronger electrostatic attraction\n2. Smaller ionic radii (Mg²⁺ smaller than Na⁺; O²⁻ smaller than Cl⁻) → ions closer together → stronger forces'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam tip — always give two reasons for melting point differences',
      text: 'When comparing melting points of two ionic compounds, consider BOTH charge AND radius:\n1. State which has larger charge product (if different)\n2. State which has smaller ionic radii (if relevant)\nAlways conclude: "stronger electrostatic attraction → more energy to break lattice → higher melting point."'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'State the two factors that affect ionic bond strength',
        checked: false
      }, {
        text: 'Explain why MgO has a higher melting point than NaCl',
        checked: false
      }, {
        text: 'Explain the trend in melting point going down Group 1 halides',
        checked: false
      }, {
        text: 'Explain why cations are smaller and anions are larger than their parent atoms',
        checked: false
      }, {
        text: 'Compare ionic radii of isoelectronic ions across a period',
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
      text: 'Understand: Ionic bond strength depends on charge and radius — F ∝ q₁q₂/r² (Coulomb\'s law). Smaller, more charged ions form stronger lattices.\n\nApply: Predict which has higher m.p.: NaCl or MgO. Justify using charges and radii.\n\nAnalyze: Why does LiF have higher m.p. than LiI? Quantify the effect of anion size on lattice energy.\n\nEvaluate: Be compounds show significant covalent character despite Be²⁺ being highly charged. Explain using Fajans\' rules.'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Ionic bond strength ∝ charge / r². Higher charge → stronger forces → higher mp (MgO > NaCl). Smaller ions → closer together → stronger forces (LiF > KI). Cations smaller than parent atom; anions larger. Isoelectronic series: radius decreases with increasing nuclear charge (O²⁻ > F⁻ > Na⁺ > Mg²⁺).'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-coulomb',
      prompt: 'State Coulomb\'s Law and explain what each symbol means in the context of ionic bonding.'
    }, {
      id: 'cue-2',
      blockId: 'table-charge',
      prompt: 'Why does MgO have a much higher melting point than NaCl?'
    }, {
      id: 'cue-3',
      blockId: 'table-radius',
      prompt: 'Why does LiF have a higher melting point than KI, given both are 1+/1− compounds?'
    }, {
      id: 'cue-4',
      blockId: 'list-radius-trends',
      prompt: 'Why is a cation smaller than its parent atom? Why is an anion larger?'
    }, {
      id: 'cue-5',
      blockId: 'list-radius-trends',
      prompt: 'Place in order of decreasing ionic radius: Na⁺, Mg²⁺, O²⁻, F⁻, Al³⁺.'
    }],
    summaryText: 'Bond strength ∝ Q₁Q₂/r². Higher charge → stronger (MgO > NaCl). Smaller radius → stronger (LiF > KI). Cation < parent atom. Anion > parent atom. Isoelectronic: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL Chemistry Specification — Topic 3',
    detail: 'Ionic size, charge and lattice strength',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['ionic bonding', 'ionic radius', 'melting point']
  }]
};