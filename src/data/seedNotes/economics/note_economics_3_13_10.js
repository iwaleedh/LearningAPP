export const note_economics_3_13_10 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the principal-agent problem in firms, its causes, and mechanisms to align the interests of principals (shareholders) and agents (managers).' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Principal-Agent Problem', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: 'The <strong>principal-agent problem</strong> arises when one party (the <strong>principal</strong>) delegates decisions to another (the <strong>agent</strong>) whose interests diverge from the principal\'s.<br/>In firms: <strong>shareholders</strong> (principals) want profit maximisation; <strong>managers</strong> (agents) may prefer revenue maximisation, quiet life, or perks.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Why Interests Diverge', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Separation of ownership and control</strong> (Berle & Means): shareholders own the firm but managers control it — misaligned incentives.' }, { text: '<strong>Information asymmetry</strong>: managers have more information about firm performance than shareholders — can conceal underperformance.' }, { text: '<strong>Short-termism</strong>: managers focus on short-term metrics (bonuses, share price) → may underinvest in long-term R&D.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Solutions: Aligning Interests', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Performance-related pay</strong>: bonus linked to profits or shareholder return → aligns manager incentive with profit maximisation.' }, { text: '<strong>Share options</strong>: managers given the right to buy shares at a set price → benefit directly from rising share price.' }, { text: '<strong>Takeover threat</strong>: poor performance → share price falls → hostile takeover → managers replaced; reputational discipline.' }, { text: '<strong>Non-executive directors</strong>: independent board members monitor management on behalf of shareholders.' }, { text: '<strong>Transparency (corporate governance)</strong>: audit requirements, disclosure rules reduce information asymmetry.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Principal-agent problem: shareholders (principals) and managers (agents) have different interests due to separation of ownership and control. Solutions: performance pay, share options, takeover threat, governance.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Principal = shareholders (profit max). Agent = managers (may prefer revenue/quiet life). Solutions: performance pay, share options, NEDs, takeover threat.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What is the principal-agent problem?', answer: 'The principal-agent problem arises when an agent (manager) acts on behalf of a principal (shareholder) whose interests differ. Managers may prefer revenue maximisation, managerial perks, or risk avoidance over the profit maximisation that shareholders want.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'How do share options help solve the principal-agent problem?', answer: 'Share options allow managers to buy company shares at a pre-set price. If the share price rises (reflecting higher profits), managers benefit — this aligns managerial incentives with shareholder wealth maximisation, reducing the divergence of interests.' },
    ]
  },
  evidence: [], mentions: []
};
