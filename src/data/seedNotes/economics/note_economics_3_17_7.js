export const note_economics_3_17_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the effects of minimum and maximum wage controls on wages, employment, and equity, with particular reference to monopsony and competitive labour markets.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Wage Controls', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Minimum Wage (Price Floor in Labour Market)', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'National Living Wage (NLW) — UK', text: 'UK NLW (2024–25): £11.44/hour for 21+; enforced by HMRC.<br/>Set above the market-clearing wage in low-skill sectors.' } },
    { id: 'list-min', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>In a competitive market</strong>: minimum wage above W* → <strong>excess supply of labour</strong> (Qs > Qd) → unemployment increases (standard neo-classical analysis).' }, { text: '<strong>In a monopsony</strong>: minimum wage set up to competitive rate can raise wages AND employment simultaneously — because the monopsonist was previously paying below the competitive rate.' }, { text: '<strong>Empirical evidence</strong> (Card and Krueger 1994; UK Low Pay Commission evidence): small minimum wage rises do not cause measurable unemployment in practice.' }, { text: 'Benefits: reduces poverty, narrows wage distribution, stimulates consumption (low-income workers have higher MPC), may boost productivity (efficiency wage theory).' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Maximum Wage (Price Ceiling in Labour Market)', level: 2 } },
    { id: 'list-max', type: 'list', data: { style: 'bullet', items: [{ text: 'Less common; sometimes discussed for executive pay.' }, { text: 'Maximum wage below W* → <strong>excess demand for labour</strong> (Qd > Qs) → labour shortages in high-skilled sectors.' }, { text: 'Risk: high-skilled workers leave for better-paying jurisdictions (e.g. NHS doctors emigrating).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'A top-scoring analysis: <strong>"In a competitive labour market, a minimum wage creates unemployment. But the low-wage sector is often characterised by monopsony (e.g. retail, care homes, fast food) — where minimum wage may actually increase both wages AND employment."</strong>' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Minimum wage: raises wages; may reduce employment in competitive markets (excess labour supply), but not in monopsony. Evidence suggests limited employment effects in practice. Maximum wage: causes labour shortages in high-skill sectors.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Minimum wage does not always cause unemployment \u2014 it depends on whether the binding minimum is set above, at, or only slightly above equilibrium wage. If labour supply is inelastic, employment may barely fall. Evaluate empirical elasticities, don't assume automatic job loss."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Minimum wage: standard → unemployment risk (excess labour supply). Monopsony → raises wages and employment. NLW (UK 2024–25): £11.44. Maximum wage: labour shortages, skilled emigration risk.',
    cues: [
      { id: 'cue-1', blockId: 'list-min', prompt: 'Why might a minimum wage increase employment in a monopsony labour market?', answer: 'In a monopsony, the employer sets wages below the competitive rate by exploiting market power (MLC > ALC → hires at MRP = MLC). A minimum wage set between the monopsony wage and the competitive wage forces up the wage — but the employer must now hire more workers to maximise profit (as MLC = minimum wage below the old MLC). Result: both wages and employment rise — unlike the competitive market case.' },
    ]
  },
  evidence: [], mentions: []
};
