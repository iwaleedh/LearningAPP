export const note_economics_1_6_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain maximum and minimum price controls, analyse their effects on market equilibrium (shortages, surpluses, and black markets), and evaluate their use.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Maximum Prices (Price Ceilings)', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Maximum Price Definition', text: 'A <strong>maximum price</strong> (price ceiling) is set <strong>below</strong> the free-market equilibrium price. It makes it illegal to charge above the maximum.<br/><br/>Purpose: make essential goods affordable (e.g. rent controls, fuel price caps, wartime price controls).<br/>Effect: <strong>shortage</strong> — quantity demanded exceeds quantity supplied at the capped price.' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Shortage</strong>: at the low price, consumers demand more than suppliers are willing to provide.' }, { text: '<strong>Rationing</strong>: since price cannot allocate the good, other mechanisms emerge (queuing, lottery, relationship-based).' }, { text: '<strong>Black markets</strong>: some sellers and buyers trade illegally above the cap; black market price may exceed the original free-market price.' }, { text: '<strong>Quality deterioration</strong>: producers reduce quality to cut costs while holding price at the ceiling.' }, { text: '<strong>Under-investment</strong>: low regulated rents reduce incentive for landlords to build new housing or maintain existing stock.' }] }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Minimum Prices (Price Floors)', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Minimum Price Definition', text: 'A <strong>minimum price</strong> (price floor) is set <strong>above</strong> the free-market equilibrium price. It makes it illegal to charge below the minimum.<br/><br/>Purpose: protect producers\' incomes (agricultural price supports), protect workers (minimum wage).<br/>Effect: <strong>surplus</strong> — quantity supplied exceeds quantity demanded at the floor price.' }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Price controls: key effects', headers: ['Control type', 'Level', 'Cause', 'Main effect', 'Examples'], rows: [['Maximum price (ceiling)', 'Below equilibrium', 'Protect consumers from high prices', 'Shortage; black markets', 'EU energy price caps; rent controls; fuel rationing'], ['Minimum price (floor)', 'Above equilibrium', 'Protect producers\' / workers\' income', 'Surplus; excess supply', 'National Minimum Wage; EU agricultural support prices; minimum unit alcohol pricing']] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Evaluation of Price Controls', level: 2 }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'warning', title: 'Limitations', text: '<strong>Maximum prices</strong>: cause shortages; black markets may emerge; quality falls; under-investment in supply (especially housing); administrative cost of enforcement.<br/><strong>Minimum prices</strong>: cause surpluses (government may need to buy up surplus at significant cost); distorts comparative advantage; higher minimum wage may cause unemployment if PED of labour demand is elastic.' }, terms: [] },
    { id: 'call-4', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Effectiveness', text: 'Effectiveness of a price floor (e.g. minimum wage) depends on:<br/>• How much above equilibrium it is set<br/>• Elasticity of labour demand (elastic → more unemployment)<br/>• Enforcement quality<br/>Always discuss unintended consequences in evaluation.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Maximum prices below equilibrium cause shortages and black markets. Minimum prices above equilibrium cause surpluses. Both can achieve policy goals but create allocative inefficiency and unintended consequences.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Maximum prices: cause shortages; black markets may emerge; quality falls; under-investment in supply (especially housing); administrative cost of enforcement.\nMinimum prices: cause surpluses (government may need to buy up surplus at significant cost); distorts comparative advantage; higher minimum wage may cause unemployment if PED of labour demand is elastic."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Effectiveness of a price floor (e.g. minimum wage) depends on:\n\u2022 How much above equilibrium it is set\n\u2022 Elasticity of labour demand (elastic \u2192 more unemployment)\n\u2022 Enforcement quality\nAlways discuss unintended consequences in evaluation."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Price ceiling (below equilibrium) → shortage. Price floor (above equilibrium) → surplus.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is a maximum price and what is its main effect on the market?', answer: 'A price ceiling set below equilibrium. Main effect: shortage — quantity demanded exceeds quantity supplied.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why might rent controls lead to a black market?', answer: 'If rents are capped below market rate, excess demand exists. Some landlords/tenants trade at illegal prices above the cap to clear the market.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'What is a price floor and what surplus does it create?', answer: 'A minimum price above equilibrium. Quantity supplied > quantity demanded at that price — creating an unsold surplus.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'Why might a minimum wage cause unemployment?', answer: 'At the above-equilibrium minimum wage, quantity of labour supplied exceeds quantity demanded. Firms hire fewer workers, causing unemployment — the size of which depends on the elasticity of labour demand.' },
    ]
  },
  evidence: [],
  mentions: []
};
