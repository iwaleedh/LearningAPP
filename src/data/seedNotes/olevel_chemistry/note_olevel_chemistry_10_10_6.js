export const note_olevel_chemistry_10_10_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-2-3-reducing-the-effects-of-environmental-issues.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe acid rain, its causes, effects, and methods of reducing its impact, including catalytic converters and industrial solutions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Acid Rain', level: 2 }
    },
    {
      id: 'call-causes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Causes of Acid Rain',
        text: 'Normal rain is slightly acidic (pH ~5.6) due to dissolved CO₂ forming carbonic acid (H₂CO₃).<br/><br/><strong>Acid rain</strong> (pH < 5.6, sometimes as low as 3) is caused by:<br/><br/><strong>Sulfur dioxide (SO₂)</strong> from:<br/>• Burning fossil fuels containing sulfur impurities (especially coal)<br/>• Volcanic eruptions<br/>• Equation: SO₂ + H₂O → H₂SO₃ (sulfurous acid); oxidised further to H₂SO₄ (sulfuric acid)<br/><br/><strong>Nitrogen oxides (NOₓ)</strong> from:<br/>• High-temperature combustion in car engines (N₂ + O₂ → 2NO; 2NO + O₂ → 2NO₂)<br/>• NO₂ dissolves: 4NO₂ + O₂ + 2H₂O → 4HNO₃ (nitric acid)'
      }
    },
    {
      id: 'call-effects',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Effects of Acid Rain',
        text: '• Kills fish and aquatic life (lowers pH of lakes and rivers)<br/>• Damages and kills trees (acidifies soil, leaches nutrients)<br/>• Corrodes limestone and marble buildings and statues — CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂<br/>• Corrodes metal structures (bridges, etc.)<br/>• Can affect human respiratory health'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Solutions', level: 2 }
    },
    {
      id: 'call-solutions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Reducing acid rain',
        text: '<strong>Catalytic converters</strong> (vehicles):<br/>Remove CO, NO, and unburnt hydrocarbons from exhaust gases:<br/>2CO + 2NO → 2CO₂ + N₂ (platinum/rhodium catalyst)<br/><br/><strong>Desulfurisation of flue gases</strong> (power stations):<br/>SO₂ scrubbed out by reacting with calcium oxide or calcium carbonate:<br/>CaO + SO₂ → CaSO₃; or CaCO₃ + SO₂ → CaSO₃ + CO₂<br/>(Flue gas desulfurisation — FGD)<br/><br/><strong>Low-sulfur fuels:</strong> Use natural gas or remove sulfur from fuel before burning.<br/><br/><strong>Liming lakes:</strong> Adding CaCO₃ to affected lakes raises pH (neutralises acid), short-term fix.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acid rain caused by SO₂ (fossil fuel sulfur → H₂SO₄) and NOₓ (combustion → HNO₃). Effects: kills aquatic life, corrodes limestone buildings, damages forests. Solutions: catalytic converters, flue gas desulfurisation, low-sulfur fuels, liming lakes.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid rain: SO₂ → H₂SO₄; NOₓ → HNO₃. Kills fish/trees, corrodes limestone. Solutions: catalytic converters, flue gas desulfurisation.',
    cues: [
      { id: 'cue-1', blockId: 'call-causes', prompt: 'State two gases that cause acid rain, their sources, and the acids they form.', answer: 'SO₂ (burning sulfur-containing fossil fuels) → H₂SO₄ (sulfuric acid). NO₂ (high-temperature combustion in engines) → HNO₃ (nitric acid).' },
      { id: 'cue-2', blockId: 'call-effects', prompt: 'Describe how acid rain damages limestone buildings, with an equation.', answer: 'Acid rain (containing H₂SO₄) reacts with calcium carbonate in limestone/marble: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The stone dissolves and erodes.' },
      { id: 'cue-3', blockId: 'call-solutions', prompt: 'Explain how a catalytic converter reduces acid rain pollution.', answer: 'The catalytic converter (Pt/Rh catalyst) converts nitrogen monoxide and carbon monoxide to nitrogen and carbon dioxide: 2CO + 2NO → 2CO₂ + N₂. This removes NOₓ before it can form acid rain.' }
    ]
  },
  evidence: [],
  mentions: []
};
