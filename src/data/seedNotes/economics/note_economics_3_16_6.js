export const note_economics_3_16_6 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how wages are determined in non-competitive labour markets, including bilateral monopoly, and evaluate the role of trade unions.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Wage Setting in Non-Competitive Markets', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Trade Union (Monopoly Supplier of Labour)', text: 'A <strong>trade union</strong> acts as a monopoly supplier of labour — it restricts supply and bargains collectively to set W above the competitive rate.<br/>Effect: wage rises above W* but employment may fall (depending on demand elasticity).' } },
    { id: 'list-union', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Union power</strong> depends on: % of workforce unionised, ability to strike, essentiality of labour, inelastic labour demand.' }, { text: '<strong>Collective bargaining</strong>: union negotiates wages and conditions for all members simultaneously — more power than individual bargaining.' }, { text: '<strong>Closed shop</strong> (now illegal in UK): all workers must join the union → 100% union coverage → maximum bargaining power.' }, { text: 'UK union membership declined from ~50% (1979) to ~23% (2023) after Thatcher-era reforms.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Monopsonist Employer', level: 2 } },
    { id: 'list-mono', type: 'list', data: { style: 'bullet', items: [{ text: 'Single dominant employer → sets wages below competitive rate, hires below competitive employment.' }, { text: '<strong>MLC > ALC</strong> → hires where MRP = MLC → wage and employment below competitive level.' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Bilateral Monopoly', level: 2 } },
    { id: 'callout-key2', type: 'callout', data: { style: 'key', title: 'Bilateral Monopoly', text: '<strong>Bilateral monopoly</strong>: monopoly union (seller) faces monopsonist employer (buyer).<br/>Outcome is indeterminate — depends on relative bargaining power of union vs employer.<br/>The wage settles somewhere between the union\'s ideal (highest) and the monopsonist\'s ideal (lowest).' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'A key evaluation: <strong>minimum wage can raise wages AND employment simultaneously in a monopsonist market</strong> — the standard anti-minimum wage argument (unemployment) does not apply under monopsony. This distinguishes non-competitive from competitive labour markets.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Non-competitive wage setting: trade unions bargain above W*; monopsonists pay below W*. Bilateral monopoly: outcome between both extremes, set by relative bargaining power. Minimum wages can correct monopsony exploitation.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Monopsony power does not automatically lead to lower wages and employment. If monopsonists operate with increasing labour supply costs, they may employ similar quantities but still pay below MRP. Distinguish between monopsony power and actual wage/employment outcomes."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "When discussing non-competitive labour markets, the Monopsony diagram is crucial. Show that the Marginal Cost of Labour (MCL) lies above the Average Cost of Labour (ACL) because to hire an extra worker, you must raise the wage for all."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Trade union = monopoly labour supplier → pushes W above equilibrium, may reduce employment. Monopsonist → pays W below competitive rate. Bilateral monopoly = indeterminate outcome. Min wage can raise wages+employment in monopsony.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'How does a trade union affect wages and employment in a labour market?', answer: 'A trade union acts as a monopoly supplier of labour, restricting supply and collectively bargaining for wages above the competitive equilibrium. This raises wages but may reduce employment (movement up the demand curve). The extent of employment loss depends on price elasticity of labour demand — more inelastic demand means smaller employment falls.' },
      { id: 'cue-2', blockId: 'callout-key2', prompt: 'What is bilateral monopoly and why is the outcome indeterminate?', answer: 'Bilateral monopoly is when a monopoly union (single seller of labour) faces a monopsonist employer (single buyer). The union wants the highest possible wage; the monopsonist wants the lowest. The actual wage depends on the relative strength, negotiating skill, and threats available to each party — economic theory cannot predict a unique equilibrium.' },
    ]
  },
  evidence: [], mentions: []
};
