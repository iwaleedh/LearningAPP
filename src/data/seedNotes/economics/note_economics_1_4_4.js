export const note_economics_1_4_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how an indirect tax shifts the supply curve, analyse how the tax burden is shared between consumers and producers, and calculate tax revenue and deadweight loss.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Indirect Tax Incidence', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Indirect Tax',
        text: 'An <strong>indirect tax</strong> is levied on the production or sale of a good (e.g. VAT, excise duty). It raises the producer\'s costs, shifting the supply curve <strong>upward/leftward</strong> by the amount of the tax. The tax creates a wedge between the consumer price and the producer price.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270"><rect width="320" height="270" fill="#0f172a"/><text x="160" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Indirect Tax: Supply Shift and Tax Wedge</text><!-- Axes --><line x1="45" y1="240" x2="300" y2="240" stroke="#334155" stroke-width="2"/><line x1="45" y1="240" x2="45" y2="30" stroke="#334155" stroke-width="2"/><text x="305" y="244" font-size="11" fill="#334155">Q</text><text x="33" y="28" font-size="11" fill="#334155">P</text><!-- Demand --><line x1="65" y1="55" x2="275" y2="215" stroke="#ef4444" stroke-width="2.5"/><text x="278" y="215" font-size="11" fill="#ef4444">D</text><!-- Original supply S1 --><line x1="65" y1="215" x2="270" y2="60" stroke="#6366f1" stroke-width="2"/><text x="272" y="60" font-size="11" fill="#6366f1">S₁</text><!-- Supply after tax S2 (shifted up by ~35) --><line x1="65" y1="180" x2="255" y2="40" stroke="#f59e0b" stroke-width="2.5"/><text x="257" y="40" font-size="11" fill="#f59e0b">S₂ (+ tax)</text><!-- Old equilibrium ~(167,135) --><circle cx="167" cy="135" r="3" fill="#6366f1"/><!-- New equilibrium ~(148,110) --><circle cx="148" cy="110" r="4" fill="#10b981"/><!-- Consumer price Pc (new equilibrium) --><line x1="45" y1="110" x2="148" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="113" font-size="9" fill="#f59e0b">Pc</text><!-- Old equilibrium price P0 --><line x1="45" y1="135" x2="167" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="138" font-size="9" fill="#6366f1">P₀</text><!-- Producer price Pp (Pc minus tax) --><line x1="45" y1="158" x2="148" y2="158" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="161" font-size="9" fill="#ef4444">Pp</text><!-- Tax wedge bracket --><line x1="155" y1="110" x2="155" y2="158" stroke="#334155" stroke-width="1.5"/><text x="160" y="138" font-size="9" fill="#334155">Tax</text><!-- New Q2 line --><line x1="148" y1="158" x2="148" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="142" y="252" font-size="9" fill="#10b981">Q₂</text><line x1="167" y1="135" x2="167" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="161" y="252" font-size="9" fill="#6366f1">Q₁</text></svg>',
        caption: 'Tax shifts S upward to S₂. Consumer pays Pc (higher); producer receives Pp (lower). Q falls from Q₁ to Q₂.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Tax Incidence and Burden', level: 3 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>tax incidence</strong> describes who ultimately bears the cost of the tax. The burden is shared between consumers (who pay a higher price) and producers (who receive a lower net price).' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        html: 'Consumer burden = Pc − P₀ &nbsp;&nbsp;|&nbsp;&nbsp; Producer burden = P₀ − Pp &nbsp;&nbsp;|&nbsp;&nbsp; Tax per unit = Pc − Pp',
        caption: 'The tax wedge is shared: consumer pays Pc, producer receives Pp, and Pc − Pp = tax per unit'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'How PED and PES affect who bears the tax burden',
        headers: ['Condition', 'Consumer bears more?', 'Producer bears more?', 'Reasoning'],
        rows: [
          ['Inelastic demand (PED low)', 'Yes', 'No', 'Consumers cannot easily switch away — price rises are absorbed'],
          ['Elastic demand (PED high)', 'No', 'Yes', 'Consumers switch away — producers must absorb more of tax'],
          ['Inelastic supply (PES low)', 'No', 'Yes', 'Producers cannot easily reduce quantity — they absorb more'],
          ['Elastic supply (PES high)', 'Yes', 'No', 'Producers can cut output quickly — price rises fall on consumers']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: '<strong>Tax revenue</strong> = (Pc − Pp) × Q₂. It appears as a rectangle on the diagram. The <strong>deadweight loss</strong> is the triangle between the old and new equilibrium quantities — it represents lost transactions and reduced welfare.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'An indirect tax shifts supply leftward, raising consumer price (Pc) and lowering producer price (Pp). The tax burden is split depending on PED and PES. Inelastic demand means consumers bear more; inelastic supply means producers bear more.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'How does an indirect tax affect the supply curve?', answer: 'It shifts the supply curve upward/leftward by the amount of the tax, raising the price consumers pay.' },
      { id: 'cue-2', blockId: 'eq-1', prompt: 'How is the tax burden shared between consumers and producers?', answer: 'Consumer burden = Pc − P₀ (price rise). Producer burden = P₀ − Pp (price fall to producer). Together they equal the tax per unit.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'If demand is very inelastic, who bears more of the tax burden?', answer: 'Consumers — they cannot easily switch to substitutes, so the price rise is largely absorbed by them.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'How do you calculate tax revenue on a supply and demand diagram?', answer: 'Tax revenue = (Pc − Pp) × Q₂ — the rectangle between the consumer price and producer price, up to the new quantity.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_4_4;
