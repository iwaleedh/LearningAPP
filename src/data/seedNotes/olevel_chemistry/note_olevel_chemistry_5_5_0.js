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
      id: 'svg-energy-profiles',
      type: 'svg',
      data: {
        caption: 'Energy profile diagrams for exothermic (left) and endothermic (right) reactions.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250">
    <defs>
        <style>
            .axis { stroke: var(--color-text); stroke-width: 2; fill: none; }
            .curve { stroke: var(--color-primary); stroke-width: 3; fill: none; }
            .level { stroke: var(--color-text); stroke-width: 2; }
            .text { font-family: var(--font-sans); font-size: 14px; fill: var(--color-text); }
            .text-sm { font-family: var(--font-sans); font-size: 12px; fill: var(--color-text); }
            .arrow { stroke: var(--color-text-secondary); stroke-width: 1.5; fill: none; }
            .dash { stroke: var(--color-text-secondary); stroke-width: 1.5; stroke-dasharray: 4,4; fill: none; }
        </style>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="var(--color-text-secondary)"/>
        </marker>
        <marker id="arrowhead-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
            <polygon points="6 0, 0 2, 6 4" fill="var(--color-text-secondary)"/>
        </marker>
    </defs>

    <!-- Exothermic Graph (Left) -->
    <g transform="translate(30, 20)">
        <line x1="20" y1="200" x2="270" y2="200" class="axis"/> <!-- x-axis -->
        <line x1="20" y1="20" x2="20" y2="200" class="axis"/> <!-- y-axis -->
        
        <text x="145" y="225" class="text" text-anchor="middle">Reaction progress</text>
        <text x="-110" y="5" class="text" transform="rotate(-90)" text-anchor="middle">Energy</text>
        
        <text x="145" y="10" class="text" text-anchor="middle" font-weight="bold">Exothermic</text>
        
        <!-- Reactants / Products Levels -->
        <line x1="30" y1="80" x2="90" y2="80" class="level"/>
        <text x="60" y="75" class="text-sm" text-anchor="middle">Reactants</text>
        
        <line x1="180" y1="160" x2="240" y2="160" class="level"/>
        <text x="210" y="175" class="text-sm" text-anchor="middle">Products</text>
        
        <!-- Curve -->
        <path d="M 90 80 C 130 80, 110 40, 140 40 C 170 40, 150 160, 180 160" class="curve"/>
        
        <!-- Dash lines -->
        <line x1="90" y1="80" x2="160" y2="80" class="dash"/>
        <line x1="140" y1="40" x2="160" y2="40" class="dash"/>
        <line x1="180" y1="160" x2="130" y2="160" class="dash"/>
        
        <!-- Ea Arrow -->
        <line x1="105" y1="80" x2="105" y2="42" class="arrow" marker-end="url(#arrowhead)"/>
        <text x="110" y="65" class="text-sm">Eₐ</text>
        
        <!-- dH Arrow -->
        <line x1="145" y1="80" x2="145" y2="158" class="arrow" marker-end="url(#arrowhead)"/>
        <text x="150" y="125" class="text-sm">ΔH (–)</text>
    </g>

    <!-- Endothermic Graph (Right) -->
    <g transform="translate(320, 20)">
        <line x1="20" y1="200" x2="270" y2="200" class="axis"/> <!-- x-axis -->
        <line x1="20" y1="20" x2="20" y2="200" class="axis"/> <!-- y-axis -->
        
        <text x="145" y="225" class="text" text-anchor="middle">Reaction progress</text>
        <text x="-110" y="5" class="text" transform="rotate(-90)" text-anchor="middle">Energy</text>
        
        <text x="145" y="10" class="text" text-anchor="middle" font-weight="bold">Endothermic</text>
        
        <!-- Reactants / Products Levels -->
        <line x1="30" y1="160" x2="90" y2="160" class="level"/>
        <text x="60" y="175" class="text-sm" text-anchor="middle">Reactants</text>
        
        <line x1="180" y1="80" x2="240" y2="80" class="level"/>
        <text x="210" y="75" class="text-sm" text-anchor="middle">Products</text>
        
        <!-- Curve -->
        <path d="M 90 160 C 130 160, 110 30, 140 30 C 170 30, 150 80, 180 80" class="curve"/>
        
        <!-- Dash lines -->
        <line x1="90" y1="160" x2="160" y2="160" class="dash"/>
        <line x1="140" y1="30" x2="160" y2="30" class="dash"/>
        <line x1="180" y1="80" x2="130" y2="80" class="dash"/>
        
        <!-- Ea Arrow -->
        <line x1="105" y1="160" x2="105" y2="32" class="arrow" marker-end="url(#arrowhead)"/>
        <text x="110" y="105" class="text-sm">Eₐ</text>
        
        <!-- dH Arrow -->
        <line x1="145" y1="160" x2="145" y2="82" class="arrow" marker-end="url(#arrowhead)"/>
        <text x="150" y="125" class="text-sm">ΔH (+)</text>
    </g>
</svg>`
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
