export const note_economics_1_3_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate and interpret the price elasticity of supply (PES), explain what determines it, and sketch elastic vs inelastic supply curves.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Price Elasticity of Supply (PES)', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition',
        text: '<strong>Price Elasticity of Supply (PES)</strong> measures the responsiveness of quantity supplied to a change in the price of the good, ceteris paribus.'
      },
      terms: []
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'PES = <span class="nb-frac"><span class="nb-num">% change in quantity supplied</span><span class="nb-den">% change in price</span></span>',
        caption: 'PES formula — always positive for a normal supply curve'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Interpreting PES Values', level: 3 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'PES values and their meaning',
        headers: ['PES Value', 'Description', 'Curve Shape', 'Example'],
        rows: [
          ['PES = 0', 'Perfectly inelastic', 'Vertical', 'Antique painting — fixed stock'],
          ['0 < PES < 1', 'Inelastic', 'Steep upward slope', 'Agricultural produce (short run)'],
          ['PES = 1', 'Unit elastic', 'Straight line through origin', 'Theoretical'],
          ['PES > 1', 'Elastic', 'Shallow upward slope', 'Manufactured goods (long run)'],
          ['PES = ∞', 'Perfectly elastic', 'Horizontal', 'Commodity at world price']
        ]
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect width="360" height="260" fill="#0f172a"/><text x="180" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Elastic vs Inelastic Supply</text><!-- Left diagram axes --><line x1="40" y1="220" x2="160" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="220" x2="40" y2="40" stroke="#334155" stroke-width="1.5"/><text x="165" y="224" font-size="10" fill="#334155">Q</text><text x="30" y="38" font-size="10" fill="#334155">P</text><!-- Inelastic (steep) --><line x1="60" y1="200" x2="140" y2="60" stroke="#ef4444" stroke-width="2.5"/><text x="143" y="60" font-size="11" fill="#ef4444">S₁</text><text x="80" y="240" text-anchor="middle" font-size="10" fill="#ef4444">Inelastic (PES &lt; 1)</text><!-- Right diagram axes --><line x1="200" y1="220" x2="330" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="200" y1="220" x2="200" y2="40" stroke="#334155" stroke-width="1.5"/><text x="335" y="224" font-size="10" fill="#334155">Q</text><text x="190" y="38" font-size="10" fill="#334155">P</text><!-- Elastic (shallow) --><line x1="210" y1="200" x2="320" y2="90" stroke="#10b981" stroke-width="2.5"/><text x="323" y="90" font-size="11" fill="#10b981">S₂</text><text x="265" y="240" text-anchor="middle" font-size="10" fill="#10b981">Elastic (PES &gt; 1)</text></svg>',
        caption: 'Inelastic supply (steep) vs elastic supply (shallow) — same price change, different quantity response'
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Determinants of PES', level: 3 },
      terms: []
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Determinants of PES and their effect',
        headers: ['Determinant', 'Effect on PES', 'Reasoning'],
        rows: [
          ['Time period', 'Short run: inelastic; Long run: elastic', 'Firms can adjust inputs and capacity over time'],
          ['Spare capacity', 'More spare capacity → more elastic', 'Can increase output quickly without extra investment'],
          ['Storability', 'Storable goods → more elastic', 'Stock can be released quickly if price rises'],
          ['Factor mobility', 'High mobility → more elastic', 'Resources can be switched into production quickly'],
          ['Length of production process', 'Longer process → more inelastic', 'Cannot respond quickly to price changes']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: PES Geometry',
        text: 'Any straight-line supply curve passing through the <strong>origin</strong> has PES = 1. A supply curve cutting the <strong>price axis</strong> has PES > 1 (elastic). A supply curve cutting the <strong>quantity axis</strong> has PES < 1 (inelastic).'
      },
      terms: []
    },
    {
      id: 'worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Price of wheat rises from £200 to £240 per tonne (+20%). Quantity supplied rises from 500 to 540 tonnes (+8%).<br/><br/>PES = 8% ÷ 20% = <strong>0.4</strong><br/><br/>Interpretation: Supply is <strong>inelastic</strong> (PES < 1). A 20% price rise only induces an 8% increase in quantity supplied — typical of agricultural goods in the short run.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Any straight-line supply curve passing through the origin has PES = 1. A supply curve cutting the price axis has PES > 1 (elastic). A supply curve cutting the quantity axis has PES < 1 (inelastic)."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'PES measures how responsive quantity supplied is to a price change. PES > 1 is elastic, PES < 1 is inelastic. Key determinants: time period, spare capacity, storability, and factor mobility.',
    cues: [
      { id: 'cue-1', blockId: 'eq-1', prompt: 'Write the formula for Price Elasticity of Supply.', answer: 'PES = % change in quantity supplied ÷ % change in price.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What PES value indicates perfectly inelastic supply? What does the curve look like?', answer: 'PES = 0; the supply curve is vertical.' },
      { id: 'cue-3', blockId: 'tbl-2', prompt: 'Why is supply more elastic in the long run than the short run?', answer: 'In the long run, firms can adjust all factors of production and increase capacity, so they can respond more to price changes.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'What is the PES of a straight-line supply curve passing through the origin?', answer: 'PES = 1 (unit elastic).' },
      { id: 'cue-5', blockId: 'tbl-2', prompt: 'Why does spare capacity increase PES?', answer: 'Firms can increase output quickly without additional investment, so they can respond rapidly to a price rise.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_3_2;
