/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 0
 * Collision theory factors
 */

export const note_chemistry_1_2_9_0 = {
  blocks: [{
    id: 'obj',
    type: 'objective',
    data: {
      text: 'State and explain the factors that affect the rate of a chemical reaction using collision theory: concentration, pressure, temperature, surface area and catalysts.'
    }
  }, {
    id: 'h-collision',
    type: 'heading',
    data: {
      text: 'Collision Theory',
      level: 2
    },
    terms: ['Collision theory', 'Rate of reaction']
  }, {
    id: 'p-collision',
    type: "list",
    data: {
      style: "unordered",
      items: ["Collision theory states that for a reaction to occur, reactant particles must collide with sufficient energy (\u2265 activation energy) and with the correct orientation.", "The rate of reaction depends on the frequency of successful collisions."]
    }
  }, {
    id: 'callout-factors-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Factors Affecting Rate of Reaction',
      text: '1. Concentration (solutions): more particles per unit volume → more frequent collisions → faster rate\n2. Pressure (gases): higher pressure → particles closer together → more frequent collisions → faster rate\n3. Temperature: higher T → particles have more kinetic energy → more frequent collisions AND higher proportion with E ≥ Eₐ → much faster rate\n4. Surface area (solids): smaller particle size → greater surface area → more collisions per unit time → faster rate\n5. Catalyst: provides alternative pathway with lower Eₐ → greater proportion of particles with E ≥ Eₐ → faster rate'
    }
  }, {
    id: 'table-factors',
    type: 'comparisonTable',
    data: {
      caption: 'Summary of rate factors and collision theory explanations',
      headers: ['Factor', 'Change', 'Effect on collision frequency', 'Effect on rate'],
      rows: [['Concentration', 'Increase', 'Increases', 'Increases'], ['Pressure (gases)', 'Increase', 'Increases', 'Increases'], ['Temperature', 'Increase', 'Increases AND more collisions exceed Eₐ', 'Increases (significantly)'], ['Surface area', 'Increase (smaller particles)', 'Increases', 'Increases'], ['Catalyst', 'Add catalyst', 'No change in frequency', 'Increases (lowers Eₐ)']]
    }
  }, {
    id: 'callout-orientation-key',
    type: 'callout',
    data: {
      style: 'key',
      title: '💡 Orientation of Collision',
      text: 'Not all collisions lead to reaction — particles must collide with the correct orientation.\nExample: in the reaction H₂ + Cl₂ → 2HCl, the H–H and Cl–Cl bonds must be correctly positioned.\n\nThis is why even at high concentrations, only a fraction of collisions are successful.'
    }
  }, {
    id: 'callout-tip-explain',
    type: 'callout',
    data: {
      style: 'tip',
      title: '💬 Exam Tip — Full Explanation',
      text: 'A complete explanation of rate always needs THREE parts:\n  1. What changes (e.g. collision frequency increases)\n  2. Why (e.g. more particles per unit volume)\n  3. Consequence (e.g. more successful collisions per unit time → faster rate)\n\nFor temperature: also mention the proportion of particles with E ≥ Eₐ increases.'
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
        text: 'Successful collision: sufficient energy (≥ Eₐ) AND correct orientation',
        checked: false
      }, {
        text: 'Concentration/pressure ↑: more frequent collisions → rate ↑',
        checked: false
      }, {
        text: 'Temperature ↑: more frequent collisions AND more exceed Eₐ → rate ↑ significantly',
        checked: false
      }, {
        text: 'Surface area ↑: more collisions → rate ↑',
        checked: false
      }, {
        text: 'Catalyst: lowers Eₐ → greater proportion of particles react → rate ↑',
        checked: false
      }]
    }
  }, {
    id: 'summary',
    type: 'summary',
    data: {
      text: 'Collision theory: reactions occur when particles collide with sufficient energy (≥ Eₐ) and correct orientation. Rate increases with concentration, pressure, temperature and surface area. Catalysts increase rate by lowering activation energy without being consumed.'
    }
  }],
  recall: {
    enabled: true,
    cues: [{
      id: 'cue-1',
      blockId: 'callout-factors-key',
      prompt: 'State FIVE factors that affect reaction rate. For each, explain the effect using collision theory.'
    }, {
      id: 'cue-2',
      blockId: 'callout-orientation-key',
      prompt: 'Why does increasing concentration increase rate? Why don\'t all collisions lead to reaction?'
    }, {
      id: 'cue-3',
      blockId: 'callout-tip-explain',
      prompt: 'Give a full collision theory explanation for why increasing temperature increases reaction rate significantly.'
    }],
    summaryText: 'Collision theory, rate factors: concentration, pressure, temperature, surface area, catalyst.',
    ready: false
  },
  evidence: [{
    id: 'ev-1',
    title: 'Edexcel IAL WCH12 Spec',
    detail: 'Topic 9: Kinetics',
    year: '2018',
    source: 'Pearson Edexcel',
    tags: ['WCH12', 'Kinetics', 'Collision theory']
  }]
};