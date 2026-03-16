export const note_olevel_chemistry_5_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/5 Chemical Energetics/5-1-1-endothermic-and-exothermic-reactions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between exothermic and endothermic reactions, and represent them using energy profile diagrams.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Exothermic and Endothermic Reactions', level: 2 }
    },
    {
      id: 'call-exo',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Exothermic Reactions',
        text: '<strong>Exothermic reactions</strong> release energy (heat) to the surroundings.<br/>The temperature of the surroundings increases.<br/>Products have less energy than reactants.<br/><br/>Examples:<br/>• Combustion: CH₄ + 2O₂ → CO₂ + 2H₂O<br/>• Neutralisation: HCl + NaOH → NaCl + H₂O<br/>• Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O<br/>• Oxidation (rusting), hand warmers<br/>• Most displacement reactions'
      }
    },
    {
      id: 'call-endo',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Endothermic Reactions',
        text: '<strong>Endothermic reactions</strong> absorb energy (heat) from the surroundings.<br/>The temperature of the surroundings decreases.<br/>Products have more energy than reactants.<br/><br/>Examples:<br/>• Thermal decomposition: CaCO₃ → CaO + CO₂<br/>• Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂<br/>• Dissolving ammonium nitrate in water (cold packs)<br/>• Citric acid + sodium hydrogencarbonate'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Exothermic vs Endothermic',
        headers: ['Feature', 'Exothermic', 'Endothermic'],
        rows: [
          ['Energy transfer', 'Released to surroundings', 'Absorbed from surroundings'],
          ['Temperature change', 'Temperature rises', 'Temperature falls'],
          ['Energy of products', 'Less energy than reactants', 'More energy than reactants'],
          ['Energy profile', 'Products lower than reactants', 'Products higher than reactants'],
          ['ΔH sign', 'Negative (ΔH < 0)', 'Positive (ΔH > 0)']
        ]
      }
    },
    {
      id: 'call-profile',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Energy Profile Diagrams',
        text: 'Energy profile diagram shows energy on y-axis, reaction progress on x-axis.<br/><br/><strong>Exothermic:</strong> reactants higher → activation energy hump → products lower<br/>ΔH = energy of products − energy of reactants (negative value)<br/><br/><strong>Endothermic:</strong> reactants lower → activation energy hump → products higher<br/>ΔH = positive value<br/><br/><strong>Activation energy (Eₐ):</strong> the minimum energy needed to start the reaction (the "hump" height above reactants)'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When drawing energy profiles: always label the axes (Energy, Reaction progress), draw the hump for activation energy, label reactants, products, Eₐ, and ΔH. For exothermic: products are LOWER. For endothermic: products are HIGHER. ΔH arrow goes from reactants to products.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Exothermic: releases heat, temperature rises, ΔH negative, products lower in energy. Endothermic: absorbs heat, temperature falls, ΔH positive, products higher in energy. Both have activation energy (Eₐ).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Exothermic: heat released, T rises, ΔH−, products lower. Endothermic: heat absorbed, T falls, ΔH+, products higher.',
    cues: [
      { id: 'cue-1', blockId: 'call-exo', prompt: 'Give two examples of exothermic reactions.', answer: 'Combustion, neutralisation, respiration, oxidation/rusting, most displacement reactions.' },
      { id: 'cue-2', blockId: 'call-endo', prompt: 'Give two examples of endothermic reactions.', answer: 'Thermal decomposition of CaCO₃, photosynthesis, dissolving ammonium nitrate (cold packs).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What happens to the temperature of the surroundings in an exothermic reaction?', answer: 'Temperature of the surroundings increases — heat is released from the reaction to the surroundings.' }
    ]
  },
  evidence: [],
  mentions: []
};
