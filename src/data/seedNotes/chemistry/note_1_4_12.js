export const note_chemistry_1_4_12 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Describe the mechanism of free-radical substitution of alkanes with halogens; write equations for initiation, propagation and termination steps.'
    }
  }, {
    id: 'h-intro',
    type: 'heading',
    data: {
      text: 'Free-Radical Substitution — Overview',
      level: 2
    }
  }, {
    id: 'p-intro',
    type: "list",
    data: {
      style: "unordered",
      items: ["Alkanes are relatively unreactive due to their strong, non-polar C\u2013H and C\u2013C \u03C3 bonds.", "However, in the presence of <strong>UV light</strong>, alkanes react with halogens (Cl\u2082 or Br\u2082) by <strong>free-radical substitution</strong> \u2014 a chain reaction in which hydrogen atoms are progressively replaced by halogen atoms."]
    }
  }, {
    id: 'callout-key-overview',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Overall Reaction (Chlorination of Methane)',
      text: 'CH₄ + Cl₂ → CH₃Cl + HCl (UV light required)\n\nThe reaction is a substitution because one H atom on methane is replaced by one Cl atom. It proceeds by a free-radical chain mechanism with three stages: initiation, propagation, termination.'
    }
  }, {
    id: 'h-stages',
    type: 'heading',
    data: {
      text: 'The Three Stages of the Chain Mechanism',
      level: 2
    }
  }, {
    id: 'h-initiation',
    type: 'heading',
    data: {
      text: 'Stage 1: Initiation',
      level: 3
    }
  }, {
    id: 'p-initiation',
    type: "list",
    data: {
      style: "unordered",
      items: ["UV light provides enough energy to break the Cl\u2013Cl bond by <strong>homolytic fission</strong>.", "Each chlorine atom receives one electron, forming two chlorine free radicals."]
    }
  }, {
    id: 'eq-initiation',
    type: 'equation',
    data: {
      html: 'Cl–Cl <span style="font-size:0.9em">→<sup>UV</sup></span> 2Cl•',
      caption: 'Initiation: homolytic fission of Cl₂ by UV light → 2 chlorine radicals. Uses fish-hook (single-headed) curly arrows.'
    }
  }, {
    id: 'callout-key-initiation',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Initiation — Key Points',
      text: '• Only the halogen–halogen bond is broken in initiation (not C–H).\n• Requires UV light (photolysis) — the reaction does NOT occur in the dark.\n• Produces the first free radicals to start the chain.\n• Fish-hook arrows: one from each end of the Cl–Cl bond, one to each Cl atom.'
    }
  }, {
    id: 'h-propagation',
    type: 'heading',
    data: {
      text: 'Stage 2: Propagation',
      level: 3
    }
  }, {
    id: 'p-propagation',
    type: "list",
    data: {
      style: "unordered",
      items: ["Propagation consists of two steps that repeat in a cycle, consuming reactants and regenerating a radical at each step.", "This is what makes it a <strong>chain reaction</strong> \u2014 one radical produces another."]
    }
  }, {
    id: 'eq-prop1',
    type: 'equation',
    data: {
      html: 'Cl• + CH₄ → HCl + CH₃•',
      caption: 'Propagation step 1: Cl• abstracts a H atom from methane → HCl + methyl radical.'
    }
  }, {
    id: 'eq-prop2',
    type: 'equation',
    data: {
      html: 'CH₃• + Cl₂ → CH₃Cl + Cl•',
      caption: 'Propagation step 2: methyl radical reacts with Cl₂ → chloromethane + Cl• (radical regenerated).'
    }
  }, {
    id: 'callout-key-propagation',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Propagation — Key Points',
      text: '• Two steps alternate in a cycle — the radical is regenerated at the end of each cycle.\n• Each cycle consumes one CH₄ and one Cl₂ and produces one CH₃Cl and one HCl.\n• The chain can repeat thousands of times before termination.\n• Both steps involve homolytic fission and radical formation — draw with fish-hook arrows.'
    }
  }, {
    id: 'h-termination',
    type: 'heading',
    data: {
      text: 'Stage 3: Termination',
      level: 3
    }
  }, {
    id: 'p-termination',
    type: "list",
    data: {
      style: "unordered",
      items: ["Termination occurs when two radicals collide and combine, eliminating a radical and ending the chain.", "There is no single termination step \u2014 any two radicals can combine."]
    }
  }, {
    id: 'list-termination',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['Cl• + Cl• → Cl₂ (recombination of two chlorine radicals)', 'CH₃• + CH₃• → C₂H₆ (ethane — explains small amounts of ethane as by-product)', 'CH₃• + Cl• → CH₃Cl (recombination of methyl and chlorine radicals)']
    }
  }, {
    id: 'callout-key-termination',
    type: 'callout',
    data: {
      style: 'key',
      title: 'Termination — Key Points',
      text: '• Two radicals combine → stable molecule (no unpaired electrons remain).\n• Termination uses full double-headed arrows going FROM each radical TO the new bond (since this is combination, not fission — electrons come together).\n• Formation of C₂H₆ (ethane) as a minor by-product is evidence for the presence of CH₃• radicals.'
    }
  }, {
    id: 'h-summary-mech',
    type: 'heading',
    data: {
      text: 'Summary of All Steps',
      level: 2
    }
  }, {
    id: 'table-mechanism',
    type: 'comparisonTable',
    data: {
      caption: 'Free-radical substitution of methane with chlorine — all steps',
      headers: ['Stage', 'Equation', 'Arrow type', 'Radicals consumed/produced'],
      rows: [['Initiation', 'Cl₂ → 2Cl• (UV)', 'Fish-hook from bond → each Cl', '0 consumed, 2 produced'], ['Propagation 1', 'Cl• + CH₄ → HCl + CH₃•', 'Fish-hook', '1 consumed (Cl•), 1 produced (CH₃•)'], ['Propagation 2', 'CH₃• + Cl₂ → CH₃Cl + Cl•', 'Fish-hook', '1 consumed (CH₃•), 1 produced (Cl•)'], ['Termination', 'Cl• + Cl• → Cl₂', 'Full or fish-hook (combination)', '2 consumed, 0 produced'], ['Termination', 'CH₃• + CH₃• → C₂H₆', 'Combination', '2 consumed, 0 produced'], ['Termination', 'CH₃• + Cl• → CH₃Cl', 'Combination', '2 consumed, 0 produced']]
    }
  }, {
    id: 'h-further',
    type: 'heading',
    data: {
      text: 'Further Substitution and Mixed Products',
      level: 2
    }
  }, {
    id: 'p-further',
    type: "list",
    data: {
      style: "unordered",
      items: ["The reaction does not stop at monosubstitution.", "CH\u2083Cl can react further with Cl\u2022 to give CH\u2082Cl\u2082 (dichloromethane), then CHCl\u2083 (chloroform/trichloromethane), then CCl\u2084 (tetrachloromethane).", "This gives a mixture of products, making the reaction poorly selective."]
    }
  }, {
    id: 'list-further',
    type: 'list',
    data: {
      style: 'bullet',
      items: ['CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane)', 'CH₃Cl + Cl₂ → CH₂Cl₂ + HCl (dichloromethane)', 'CH₂Cl₂ + Cl₂ → CHCl₃ + HCl (trichloromethane / chloroform)', 'CHCl₃ + Cl₂ → CCl₄ + HCl (tetrachloromethane)', 'Excess CH₄ (relative to Cl₂) favours monosubstitution.']
    }
  }, {
    id: 'h-bromine',
    type: 'heading',
    data: {
      text: 'Bromination vs Chlorination',
      level: 2
    }
  }, {
    id: 'table-br-cl',
    type: 'comparisonTable',
    data: {
      caption: 'Comparing chlorination and bromination of alkanes',
      headers: ['Property', 'Chlorination', 'Bromination'],
      rows: [['Halogen bond broken in initiation', 'Cl–Cl (243 kJ mol⁻¹)', 'Br–Br (193 kJ mol⁻¹)'], ['Rate of reaction', 'Faster', 'Slower'], ['Selectivity', 'Low — attacks any C–H bond', 'Higher — preferentially attacks weaker C–H bonds (3° > 2° > 1°)'], ['Thermodynamics', 'More exothermic overall', 'Less exothermic; propagation steps less exothermic'], ['Practical observation', 'Vigorous in UV light', 'Slower; more selective product mixture']]
    }
  }, {
    id: 'svg-mechanism',
    type: 'svg',
    data: {
      svg: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <text x="220" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#374151">Free-Radical Chain Mechanism</text>
  <!-- Initiation box -->
  <rect x="10" y="28" width="420" height="38" rx="5" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
  <text x="20" y="45" font-weight="bold" fill="#92400e" font-size="11">INITIATION</text>
  <text x="20" y="60" fill="#374151">Cl₂  →(UV)→  Cl•  +  Cl•</text>
  <!-- Propagation box -->
  <rect x="10" y="74" width="420" height="60" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="20" y="91" font-weight="bold" fill="#166534" font-size="11">PROPAGATION (repeats ~10,000×)</text>
  <text x="20" y="107" fill="#374151">Step 1:  Cl•  +  CH₄  →  HCl  +  CH₃•</text>
  <text x="20" y="125" fill="#374151">Step 2:  CH₃•  +  Cl₂  →  CH₃Cl  +  Cl•</text>
  <!-- Arrow showing cycle -->
  <path d="M 405 107 Q 425 116 405 125" fill="none" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/>
    </marker>
  </defs>
  <!-- Termination box -->
  <rect x="10" y="143" width="420" height="72" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="20" y="160" font-weight="bold" fill="#991b1b" font-size="11">TERMINATION (any two radicals combine)</text>
  <text x="20" y="176" fill="#374151">Cl•  +  Cl•  →  Cl₂</text>
  <text x="20" y="193" fill="#374151">CH₃•  +  CH₃•  →  C₂H₆  (by-product — evidence for CH₃•)</text>
  <text x="20" y="210" fill="#374151">CH₃•  +  Cl•  →  CH₃Cl</text>
  <!-- Key note -->
  <text x="220" y="240" text-anchor="middle" font-size="11" fill="#6b7280">Fish-hook arrows (↷) for all homolytic steps</text>
  <text x="220" y="254" text-anchor="middle" font-size="11" fill="#6b7280">UV light needed for initiation only</text>
</svg>`,
      caption: 'Free-radical chain mechanism: initiation (UV) → propagation (cycle) → termination (radicals combine).'
    }
  }, {
    id: 'callout-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: 'Exam Tips',
      text: '• Always write ALL three stages (initiation, propagation ×2 steps, termination) — marks are given for each.\n• Propagation steps must show the radical being regenerated — check both sides have one radical.\n• Evidence for CH₃• radicals: trace amounts of ethane (C₂H₆) found in products.\n• Use fish-hook (single-headed) arrows for ALL homolytic steps in the mechanism.\n• State that UV light (not just "light") is required for initiation.'
    }
  }, {
    id: 'callout-warning',
    type: 'callout',
    data: {
      style: 'warning',
      title: 'Common Mistakes',
      text: '• Writing only one propagation step — there must be TWO steps that together form the cycle.\n• Using full double-headed curly arrows for radical steps — must be fish-hook arrows.\n• Forgetting that the chain continues because a radical is regenerated in each propagation cycle.\n• Writing termination as a step involving a molecule (e.g. Cl₂ + CH₄) — termination is ONLY radical + radical.'
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'I can write the overall equation for chlorination of methane.',
        checked: false
      }, {
        text: 'I can write the initiation step with the correct arrow notation.',
        checked: false
      }, {
        text: 'I can write both propagation steps and verify a radical is regenerated.',
        checked: false
      }, {
        text: 'I can write three possible termination steps.',
        checked: false
      }, {
        text: 'I can explain why ethane is a by-product and what this tells us.',
        checked: false
      }, {
        text: 'I can explain why excess CH₄ favours monosubstitution.',
        checked: false
      }, {
        text: 'I can compare chlorination and bromination in terms of rate and selectivity.',
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
      text: 'Understand: Free-radical substitution: initiation (UV breaks X₂), propagation (chain reaction), termination (radicals combine). Explains mixture of products.\n\nApply: Write all three stages for bromination of methane. Why does excess CH₄ favour monosubstitution?\n\nAnalyze: Why is termination relatively rare? Relate to radical concentration vs molecule concentration.\n\nEvaluate: Why is free-radical substitution unsuitable for preparing pure monosubstituted products?'
    },
    terms: []
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Free-radical substitution of alkanes with halogens (UV light) proceeds via: Initiation — homolytic fission of X₂ → 2X•. Propagation — X• + RH → HX + R•; then R• + X₂ → RX + X• (cycle repeats ~10,000×). Termination — any two radicals combine. Fish-hook arrows throughout. Further substitution gives mixed products; excess alkane favours monosubstitution. Bromination is slower but more selective than chlorination.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'eq-initiation',
      prompt: 'Write the initiation step for chlorination of methane. What type of bond fission occurs?'
    }, {
      id: 'cue-2',
      blockId: 'eq-prop1',
      prompt: 'Write both propagation steps for chlorination of methane.'
    }, {
      id: 'cue-3',
      blockId: 'list-termination',
      prompt: 'Write three possible termination steps for chlorination of methane.'
    }, {
      id: 'cue-4',
      blockId: 'p-further',
      prompt: 'Why does chlorination of methane give a mixture of products? How can monosubstitution be favoured?'
    }, {
      id: 'cue-5',
      blockId: 'table-br-cl',
      prompt: 'Why is bromination of alkanes more selective than chlorination?'
    }],
    summaryText: 'Initiation: Cl₂ →(UV)→ 2Cl• (homolytic). Propagation: Cl• + CH₄ → HCl + CH₃•; CH₃• + Cl₂ → CH₃Cl + Cl•. Termination: 2 radicals → stable molecule. Fish-hook arrows. Excess CH₄ → monosubstitution. Br• more selective than Cl•.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel WCH11 Specification',
    detail: 'Free-radical substitution mechanism (initiation, propagation, termination) is required for Topic 4.',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['free radical', 'substitution', 'mechanism']
  }]
};