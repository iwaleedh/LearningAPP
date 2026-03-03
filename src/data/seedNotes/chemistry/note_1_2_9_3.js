/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 3
 * Maxwell-Boltzmann distribution
 */

export const note_chemistry_1_2_9_3 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'Sketch and interpret Maxwell-Boltzmann energy distribution curves. Explain the effect of temperature and catalysts on the distribution and on reaction rate.'
    }
  }, {
    id: 'h-mb',
    type: 'heading',
    data: {
      text: 'Maxwell-Boltzmann Distribution',
      level: 2
    },
    terms: ['Maxwell-Boltzmann distribution']
  }, {
    id: 'p-mb',
    type: "list",
    data: {
      style: "unordered",
      items: ["The Maxwell-Boltzmann distribution shows how the kinetic energies of particles in a gas (or in solution) are distributed at a given temperature.", "Not all particles have the same energy \u2014 there is a spread, with most particles having intermediate energies and only a few having very high or very low energies."]
    }
  }, {
    id: 'callout-mb-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Key Features of the Maxwell-Boltzmann Curve',
      text: '1. Starts at the origin (no particles have zero energy)\n2. Rises steeply to a peak (most probable energy)\n3. Falls gradually to the right (long tail — some particles have very high energy)\n4. Never touches the x-axis on the right (theoretically extends to infinity)\n5. Area under the curve = total number of particles (constant)\n6. Particles to the RIGHT of Eₐ can react — this is the shaded area'
    }
  }, {
    id: 'svg-mb',
    type: 'svg',
    data: {
      caption: 'Maxwell-Boltzmann distribution — shaded area shows particles with E ≥ Eₐ that can react',
      svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maxwell-Boltzmann distribution curve">
  <defs>
    <marker id="ambarr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#374151"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="40" y1="20" x2="40" y2="170" stroke="#374151" stroke-width="2"/>
  <line x1="40" y1="170" x2="400" y2="170" stroke="#374151" stroke-width="2" marker-end="url(#ambarr)"/>
  <text x="18" y="100" font-size="10" fill="#374151" transform="rotate(-90,18,100)" text-anchor="middle">Number of particles</text>
  <text x="220" y="190" font-size="10" fill="#374151" text-anchor="middle">Kinetic energy →</text>
  <!-- Maxwell-Boltzmann curve -->
  <path d="M40,170 Q80,168 120,90 Q160,40 190,32 Q220,28 250,35 Q300,55 340,100 Q370,130 395,165" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <!-- Shaded area beyond Ea -->
  <path d="M290,62 Q310,80 330,100 Q355,125 380,150 Q390,160 395,165 L395,170 L290,170 Z" fill="#fca5a5" opacity="0.5"/>
  <!-- Ea vertical line -->
  <line x1="290" y1="60" x2="290" y2="170" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="292" y="58" font-size="10" font-weight="bold" fill="#dc2626">Eₐ</text>
  <!-- Most probable energy -->
  <line x1="190" y1="32" x2="190" y2="170" stroke="#9ca3af" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="180" y="22" font-size="9" fill="#6b7280" text-anchor="middle">Most probable</text>
  <text x="180" y="30" font-size="9" fill="#6b7280" text-anchor="middle">energy</text>
  <!-- Shaded area label -->
  <text x="345" y="140" font-size="8" fill="#dc2626" text-anchor="middle">Particles</text>
  <text x="345" y="150" font-size="8" fill="#dc2626" text-anchor="middle">that react</text>
  <!-- Origin -->
  <text x="36" y="183" font-size="9" fill="#374151">O</text>
</svg>`
    }
  }, {
    id: 'callout-temp-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Effect of Temperature on the Distribution',
      text: 'At higher temperature:\n  • The peak SHIFTS to the RIGHT (higher most probable energy)\n  • The peak LOWERS (same number of particles, wider spread)\n  • The curve is BROADER and FLATTER\n  • Area under curve remains the SAME (same number of particles)\n  • The shaded area beyond Eₐ is MUCH LARGER → many more particles can react\n\nSmall increase in temperature → large increase in rate because the proportion with E ≥ Eₐ increases significantly.'
    }
  }, {
    id: 'callout-catalyst-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Effect of a Catalyst on the Distribution',
      text: 'A catalyst LOWERS Eₐ (moves the Eₐ line to the LEFT on the diagram).\n\nThe Maxwell-Boltzmann distribution curve is UNCHANGED (same temperature → same distribution).\n\nBut more particles now have energy ≥ the new lower Eₐ → larger shaded area → faster rate.\n\nNote: the distribution curve does NOT change — only Eₐ moves.'
    }
  }, {
    id: 'callout-tip-mb',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Drawing Maxwell-Boltzmann Curves',
      text: 'For higher temperature: draw a curve that is broader, lower peak, shifted right — but same area.\nFor a catalyst: draw the SAME curve but move the Eₐ line to the left.\n\nCommon mistakes:\n  ✗ Showing the higher-T curve touching the x-axis (it should not)\n  ✗ Showing the area under the higher-T curve as larger (must be the same)\n  ✗ Changing the curve shape when adding a catalyst (only Eₐ changes)'
    }
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
        text: 'Curve starts at origin; peaks; long right-hand tail; never touches x-axis',
        checked: false
      }, {
        text: 'Shaded area right of Eₐ = particles that can react',
        checked: false
      }, {
        text: 'Higher T: curve shifts right, lowers, broadens — same area under curve',
        checked: false
      }, {
        text: 'Higher T: much larger shaded area beyond Eₐ → much faster rate',
        checked: false
      }, {
        text: 'Catalyst: Eₐ moves left; curve unchanged; larger shaded area',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'The Maxwell-Boltzmann distribution shows kinetic energy distribution of particles. Particles with E ≥ Eₐ (shaded area) can react. Higher temperature shifts the curve right and broadens it — greatly increasing the proportion of particles that can react. A catalyst lowers Eₐ (moves the line left) without changing the distribution curve.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-mb-key',
      prompt: 'Describe the key features of a Maxwell-Boltzmann distribution curve. What does the shaded area represent?'
    }, {
      id: 'cue-2',
      blockId: 'callout-temp-key',
      prompt: 'How does the Maxwell-Boltzmann distribution change at higher temperature? Why does this increase the rate so significantly?'
    }, {
      id: 'cue-3',
      blockId: 'callout-catalyst-key',
      prompt: 'How does a catalyst affect the Maxwell-Boltzmann diagram? What changes and what stays the same?'
    }],
    summaryText: 'Maxwell-Boltzmann curve features, temperature effect, catalyst effect on Eₐ.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 9: Kinetics',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Kinetics', 'Maxwell-Boltzmann']
  }]
};