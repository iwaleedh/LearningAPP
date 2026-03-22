export const note_economics_4_19_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the assumptions and real-world limitations of the comparative advantage model, explaining when the predicted gains from trade may not materialise.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Limitations of Comparative Advantage', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Assumptions That May Not Hold', level: 2 } },
    { id: 'list-assume', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Factor immobility</strong>: theory assumes factors move seamlessly between sectors. In reality, structural unemployment arises when labour cannot quickly retrain for comparative-advantage industries.' }, { text: '<strong>No transport costs</strong>: real-world freight, insurance, and logistics costs reduce or may eliminate comparative advantage gains.' }, { text: '<strong>Constant costs</strong>: Ricardo assumes constant opportunity costs; in practice increasing costs (diminishing returns) may halt full specialisation before it is optimal.' }, { text: '<strong>No externalities</strong>: comparative advantage ignores negative externalities (pollution, carbon from shipping) that reduce net social benefit.' }, { text: '<strong>Static model</strong>: comparative advantage is calculated at a point in time; comparative advantage can change as technologies evolve (South Korea shifted from textiles to semiconductors).' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Further Critique', level: 2 } },
    { id: 'list-further', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Infant-industry argument</strong>: new industries may have future comparative advantage but cannot survive international competition now — protection can allow learning-by-doing until competitive. (Counter: protection tends to become permanent.)' }, { text: '<strong>Terms of trade distribution</strong>: absolute gains may exist, but distribution between countries depends on bargaining power; developing economies with inelastic export demand may receive poor terms.' }, { text: '<strong>Deindustrialisation risk</strong>: over-specialisation in primary commodities or simple manufacturing leaves countries vulnerable if comparative advantage shifts or commodity prices fall.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Evaluation', text: 'The strongest evaluation point is the <strong>dynamic vs static</strong> distinction: comparative advantage theory is powerful in a static world but nations like Japan and South Korea deliberately <em>created</em> new comparative advantages through industrial policy rather than simply following existing factor endowments.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Comparative advantage limits: factor immobility, transport costs, constant costs assumption, ignores externalities, static model. Infant-industry argument supports temporary protection. Terms of trade distribution may be unequal. Dynamic comparative advantage can be built through industrial policy.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't ignore transport costs, immobility of factors, and increasing returns to scale when discussing comparative advantage limitations. Real exam scenarios (Brexit, nearshoring) require you to explain when traditional trade theory fails."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Limits of comparative advantage: factor immobility (structural unemployment), transport costs, no externalities, static assumption. Infant-industry argument allows for protection. Distribution of gains depends on terms of trade and bargaining power.',
    cues: [
      { id: 'cue-1', blockId: 'list-assume', prompt: 'State four assumptions of comparative advantage that may not hold in the real world.', answer: '(1) Factor mobility: assumes labour shifts sectors easily — in reality structural unemployment arises. (2) No transport costs: freight reduces actual gains. (3) Constant opportunity costs: increasing costs may halt full specialisation. (4) No externalities: ignores pollution. Also: static model — comparative advantage changes as technology evolves.' },
      { id: 'cue-2', blockId: 'list-further', prompt: 'Explain the infant-industry argument as a limit to comparative advantage theory.', answer: 'A country may have future comparative advantage in an industry but the infant firm cannot yet compete with established foreign producers. Temporary protection allows learning-by-doing and economies of scale until the industry becomes competitive. Critique: protection tends to become permanent, encouraging inefficiency and rent-seeking. East Asian countries (Japan, South Korea) used this approach successfully.' },
    ]
  },
  evidence: [], mentions: []
};
