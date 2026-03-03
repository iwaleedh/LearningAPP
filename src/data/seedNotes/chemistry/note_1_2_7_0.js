/**
 * WCH12 | Topic 7: Intermolecular Forces | Subtopic 0
 * London forces
 */

export const note_chemistry_1_2_7_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Define London (dispersion) forces and explain how they arise from temporary dipoles. Relate the strength of London forces to molecular size, surface area and boiling point trends.'
    }
  }, {
    id: 'h-london',
    type: 'heading',
    data: {
      text: 'London (Dispersion) Forces',
      level: 2
    },
    terms: ['London forces', 'Intermolecular forces']
  }, {
    id: 'p-london',
    type: "list",
    data: {
      style: "unordered",
      items: ["London dispersion forces (also called van der Waals forces or temporary dipole\u2013induced dipole forces) are the weakest type of intermolecular force.", "They exist between ALL molecules \u2014 polar or non-polar \u2014 and are the only intermolecular force in non-polar molecules such as noble gases, alkanes, and halogens."]
    },
    terms: ['London forces']
  }, {
    id: 'callout-mechanism-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 How London Forces Arise',
      text: 'Step 1 — At any instant, electrons are not evenly distributed around a molecule → a TEMPORARY (instantaneous) dipole forms\nStep 2 — This temporary dipole INDUCES a dipole in a neighbouring molecule\nStep 3 — The two dipoles attract each other (δ+ attracts δ−)\nStep 4 — These attractions are continuously forming and breaking\n\nResult: a net attractive force between the molecules'
    },
    terms: ['London forces']
  }, {
    id: 'svg-london',
    type: 'svg',
    data: {
      caption: 'London forces — temporary dipole on left induces a dipole in the neighbouring molecule',
      svg: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="London forces diagram">
  <defs>
    <marker id="al1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/>
    </marker>
  </defs>
  <!-- Molecule 1 (temporary dipole) -->
  <ellipse cx="105" cy="60" rx="90" ry="35" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="65" y="55" font-size="11" fill="#1e40af" font-weight="bold">δ−</text>
  <text x="120" y="55" font-size="11" fill="#1e40af" font-weight="bold">δ+</text>
  <text x="85" y="78" font-size="9" fill="#374151" text-anchor="middle">Temporary dipole</text>
  <!-- Molecule 2 (induced dipole) -->
  <ellipse cx="315" cy="60" rx="90" ry="35" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="270" y="55" font-size="11" fill="#14532d" font-weight="bold">δ−</text>
  <text x="335" y="55" font-size="11" fill="#14532d" font-weight="bold">δ+</text>
  <text x="315" y="78" font-size="9" fill="#374151" text-anchor="middle">Induced dipole</text>
  <!-- Attraction arrow -->
  <line x1="196" y1="55" x2="224" y2="55" stroke="#6366f1" stroke-width="2" marker-end="url(#al1)"/>
  <text x="210" y="48" font-size="9" fill="#6366f1" text-anchor="middle">attract</text>
  <!-- Labels -->
  <text x="105" y="108" font-size="9" fill="#6b7280" text-anchor="middle">Molecule A</text>
  <text x="315" y="108" font-size="9" fill="#6b7280" text-anchor="middle">Molecule B</text>
</svg>`
    },
    terms: ['London forces']
  }, {
    id: 'h-factors',
    type: 'heading',
    data: {
      text: 'Factors Affecting London Force Strength',
      level: 2
    },
    terms: ['London forces']
  }, {
    id: 'callout-factors-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 What Makes London Forces Stronger?',
      text: '1. More electrons → larger electron cloud → more polarisable → stronger temporary dipoles → stronger London forces\n2. Larger molecular surface area → more contact between molecules → more London forces act simultaneously → stronger overall attraction\n3. Higher molecular mass → more electrons → stronger London forces\n\nResult: boiling point increases with molecular size/mass for similar molecules'
    },
    terms: ['London forces']
  }, {
    id: 'table-bp',
    type: 'comparisonTable',
    data: {
      caption: 'Boiling points of noble gases — London forces increase with atomic number',
      headers: ['Noble gas', 'Electrons', 'Boiling point (°C)', 'Trend'],
      rows: [['He', '2', '−269', 'Weakest London forces'], ['Ne', '10', '−246', '↑'], ['Ar', '18', '−186', '↑'], ['Kr', '36', '−152', '↑'], ['Xe', '54', '−108', 'Strongest London forces']]
    },
    terms: ['London forces']
  }, {
    id: 'callout-branching-tip',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Branching Reduces London Forces',
      text: 'Branched chain alkanes have LOWER boiling points than their straight-chain isomers.\nReason: branching reduces surface area → fewer London forces → weaker intermolecular attraction → lower boiling point.\n\nExample: pentane (bp 36°C) > 2-methylbutane (bp 28°C) > 2,2-dimethylpropane (bp 10°C)'
    },
    terms: ['London forces']
  }, {
    id: 'h-checklist',
    type: 'heading',
    data: {
      text: 'Exam Checklist',
      level: 2
    }
  }, {
    id: 'checklist',
    type: 'checklist',
    data: {
      items: [{
        text: 'London forces exist between ALL molecules (polar and non-polar)',
        checked: false
      }, {
        text: 'Arise from temporary dipole → induced dipole',
        checked: false
      }, {
        text: 'Strength increases with: more electrons, larger surface area, higher Mr',
        checked: false
      }, {
        text: 'Branching reduces surface area → lower boiling point',
        checked: false
      }, {
        text: 'Only intermolecular force in non-polar molecules',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'London (dispersion) forces arise from temporary dipoles inducing dipoles in neighbouring molecules. They exist between all molecules and increase in strength with molecular size, electron count and surface area. Branching reduces surface area and therefore lowers boiling points.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-mechanism-key',
      prompt: 'Explain in 4 steps how London forces arise between non-polar molecules.'
    }, {
      id: 'cue-2',
      blockId: 'callout-factors-key',
      prompt: 'State THREE factors that increase the strength of London forces.'
    }, {
      id: 'cue-3',
      blockId: 'callout-branching-tip',
      prompt: 'Why does branching in alkanes lower the boiling point? Relate your answer to London forces.'
    }],
    summaryText: 'London forces: temporary dipole–induced dipole, strength factors, boiling point trends.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 7: Intermolecular Forces',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Intermolecular forces']
  }]
};