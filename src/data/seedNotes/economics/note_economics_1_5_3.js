export const note_economics_1_5_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and draw deadweight welfare loss and welfare gain triangles on externality diagrams, and explain what these areas represent for society.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Welfare Loss and Gain Diagrams', level: 2 },
      terms: []
    },
    {
      id: 'key-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Deadweight Welfare Loss (DWL)',
        text: '<strong>Deadweight welfare loss</strong> is the reduction in total social welfare caused by market failure. It is the triangular area on a supply/demand diagram between the <strong>market quantity</strong> and the <strong>social optimum quantity</strong>, bounded by the MSC and MSB curves. It represents transactions that could make society better off but do not occur in the free market.'
      },
      terms: []
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270"><rect width="320" height="270" fill="#f8f9fa"/><text x="160" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Deadweight Welfare Loss — Negative Externality</text><!-- Axes --><line x1="45" y1="240" x2="295" y2="240" stroke="#334155" stroke-width="2"/><line x1="45" y1="240" x2="45" y2="30" stroke="#334155" stroke-width="2"/><text x="300" y="244" font-size="10" fill="#334155">Q</text><text x="33" y="28" font-size="10" fill="#334155">P</text><!-- Demand = MSB --><line x1="65" y1="55" x2="265" y2="215" stroke="#ef4444" stroke-width="2"/><text x="268" y="213" font-size="10" fill="#ef4444">D=MSB</text><!-- MPC (supply) --><line x1="65" y1="215" x2="260" y2="75" stroke="#6366f1" stroke-width="2"/><text x="262" y="73" font-size="10" fill="#6366f1">MPC</text><!-- MSC --><line x1="65" y1="175" x2="255" y2="50" stroke="#f59e0b" stroke-width="2.5"/><text x="257" y="48" font-size="10" fill="#f59e0b">MSC</text><!-- Market equilibrium Qm (MPC = D) ~(165,135) --><circle cx="165" cy="135" r="4" fill="#6366f1"/><!-- Social optimum Q* (MSC = MSB) ~(143,112) --><circle cx="143" cy="112" r="4" fill="#10b981"/><!-- P* dashed --><line x1="45" y1="112" x2="143" y2="112" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/><text x="25" y="115" font-size="9" fill="#10b981">P*</text><!-- Pm dashed --><line x1="45" y1="135" x2="165" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="25" y="138" font-size="9" fill="#6366f1">Pm</text><!-- Q* vertical --><line x1="143" y1="112" x2="143" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="136" y="254" font-size="9" fill="#10b981">Q*</text><!-- Qm vertical --><line x1="165" y1="135" x2="165" y2="240" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><text x="158" y="254" font-size="9" fill="#6366f1">Qm</text><!-- DWL triangle shaded --><polygon points="143,112 165,135 143,135" fill="#ef4444" fill-opacity="0.4" stroke="#ef4444" stroke-width="1"/><text x="148" y="132" font-size="9" font-weight="bold" fill="#ef4444">DWL</text><!-- Annotations --><text x="100" y="160" font-size="9" fill="#334155">Overproduction</text><text x="100" y="172" font-size="9" fill="#334155">beyond Q*</text></svg>',
        caption: 'DWL (red triangle) = welfare lost from overproduction between Q* and Qm due to negative externality. MSC > MSB in this range.'
      },
      terms: []
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Welfare Loss from Underproduction (Positive Externality)', level: 3 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'For a <strong>positive externality</strong>, the market quantity Qm is <em>below</em> the social optimum Q*. The welfare loss triangle lies between Qm and Q*, bounded by MSB and MSC. It represents the <strong>unrealised social gains</strong> from transactions that would be worthwhile for society but do not occur.' }] } },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'DWL in negative vs positive externality contexts',
        headers: ['Externality type', 'Market outcome', 'Location of DWL triangle', 'What it represents'],
        rows: [
          ['Negative (production)', 'Qm > Q* (overproduction)', 'Between Q* and Qm, bounded by MSC above MSB', 'Cost of units produced where MSC > MSB'],
          ['Positive (consumption)', 'Qm < Q* (underproduction)', 'Between Qm and Q*, bounded by MSB above MSC', 'Unrealised benefit of units not produced/consumed']
        ]
      },
      terms: []
    },
    {
      id: 'tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Diagram Tips',
        text: '1. Label ALL curves: MPC, MSC, MPB/D, MSB.<br/>2. Mark BOTH equilibrium points: Qm (market) and Q* (social optimum).<br/>3. Shade the DWL triangle and label it clearly.<br/>4. State whether the market <em>over</em> or <em>under</em>produces relative to Q*.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Deadweight welfare loss is the triangular area representing wasted social welfare due to market failure. It sits between market quantity (Qm) and social optimum (Q*) and is bounded by the MSC and MSB curves.',
    cues: [
      { id: 'cue-1', blockId: 'key-1', prompt: 'Define deadweight welfare loss.', answer: 'The reduction in total social welfare due to market failure — the triangle between the market quantity and the social optimum, bounded by MSC and MSB.' },
      { id: 'cue-2', blockId: 'svg-1', prompt: 'Where is the DWL triangle for a negative production externality?', answer: 'Between Q* and Qm (the overproduction), bounded by MSC above and MSB below — representing units produced where MSC exceeds MSB.' },
      { id: 'cue-3', blockId: 'para-1', prompt: 'What does the DWL triangle represent in a positive externality context?', answer: 'Unrealised social gains — units of the good that would benefit society (MSB > MSC) but are not produced in the free market.' },
      { id: 'cue-4', blockId: 'tip-1', prompt: 'Name four things you must label on an externality diagram in an exam.', answer: 'MPC, MSC (or MSB/MPB), both equilibrium points (Qm and Q*), and the DWL triangle.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_5_3;
