export const note_economics_4_19_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between absolute and comparative advantage, calculate opportunity costs from production data, and explain how comparative advantage generates mutual gains from trade.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Absolute vs Comparative Advantage', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Absolute Advantage', text: '<strong>Absolute advantage</strong> (Adam Smith, 1776): a country has absolute advantage if it can produce more of a good with a given quantity of resources than another country. Trade is beneficial when each country has absolute advantage in different goods.' } },
    { id: 'callout-key2', type: 'callout', data: { style: 'key', title: 'Comparative Advantage', text: '<strong>Comparative advantage</strong> (David Ricardo, 1817): a country has comparative advantage if it can produce a good at a lower <em>opportunity cost</em> than another country — even if it has absolute advantage in everything. Trade generates mutual gains whenever opportunity costs differ.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Worked Example', level: 2 } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Calculating Comparative Advantage', text: 'Country A: 1 unit of labour → 10 wheat OR 5 cloth<br/>Country B: 1 unit of labour → 6 wheat OR 3 cloth<br/><br/><strong>Opportunity cost of cloth:</strong><br/>Country A: 10/5 = 2 wheat foregone per unit of cloth<br/>Country B: 6/3 = 2 wheat foregone per unit of cloth<br/><br/>Here opportunity costs are equal — no comparative advantage and no gains from trade. Change Country B to 4 cloth:<br/><br/>Country B: 6/4 = 1.5 wheat per cloth<br/>Country A: 10/5 = 2 wheat per cloth<br/><br/><strong>Country B has comparative advantage in cloth</strong> (lower opportunity cost = 1.5 < 2).<br/><strong>Country A has comparative advantage in wheat</strong>.' } },
    { id: 'h-3', type: 'heading', data: { text: 'Gains from Trade', level: 2 } },
    { id: 'list-gains', type: 'list', data: { style: 'bullet', items: [{ text: 'Both countries <strong>gain from trade</strong> if they specialise according to comparative advantage and exchange at a terms of trade between the two domestic opportunity cost ratios.' }, { text: 'Total world output of both goods <strong>rises</strong> compared to self-sufficiency, even if one country is absolutely more efficient at everything.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Key Exam Logic', text: 'Comparative advantage is about <em>relative</em> not absolute efficiency. A super-productive country still gains from trade by concentrating on its <em>best</em> comparative activity and importing others — because switching labour from the comparative advantage sector has an opportunity cost even for the "better" country.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Absolute advantage: produce more per unit of resources. Comparative advantage: lower opportunity cost — determines trade patterns. Ricardo: both countries gain by specialising in comparative advantage goods and trading, even if one country is absolutely better at everything.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "In comparative advantage calculations, always show opportunity costs explicitly\u2014don't just claim 'Country A has lower prices.' Examiners test whether you can derive specialisation patterns systematically. One numerical error loses the entire chain of reasoning."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When assessing the impacts of poverty, highlight the cycle of poverty and how poor health and education lead to low human capital, restricting future economic growth."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Absolute advantage: more output per resource. Comparative advantage (Ricardo): lower opportunity cost. Countries gain from trade by specialising in comparative advantage goods; gains exist even when one country is absolutely better at everything.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key2', prompt: 'Explain the difference between absolute and comparative advantage.', answer: 'Absolute advantage (Adam Smith): a country produces more of a good per unit of resource than another. Comparative advantage (Ricardo): a country produces a good at lower opportunity cost. Comparative advantage determines trade patterns — both countries gain from trade if opportunity costs differ, even if one country has absolute advantage in all goods.' },
      { id: 'cue-2', blockId: 'callout-worked', prompt: 'How do you identify comparative advantage from a production data table?', answer: 'Calculate the opportunity cost of each good in each country: divide units of good A that could be produced by units of good B that are sacrificed. Country with the lowest opportunity cost of a good has comparative advantage in it. A country has comparative advantage in ONE good and comparative disadvantage in the other (assuming 2 goods, 2 countries).' },
    ]
  },
  evidence: [], mentions: []
};
