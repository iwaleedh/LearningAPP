export const note_economics_3_16_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the concept of derived demand for labour and analyse the factors that determine a firm\'s demand for labour.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Derived Demand for Labour', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Derived Demand', text: 'The demand for labour is <strong>derived demand</strong> — firms hire workers not for their own sake, but because labour is needed to produce goods and services for sale.<br/>Demand for labour rises when demand for the firm\'s output rises, and falls when output demand falls.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Marginal Revenue Product (MRP)', level: 2 } },
    { id: 'callout-key2', type: 'callout', data: { style: 'key', title: 'MRP — The Demand Curve for Labour', text: '<strong>Marginal Revenue Product (MRP)</strong> = Marginal Physical Product (MPP) × Marginal Revenue (MR).<br/>In a competitive output market: MRP = MPP × Price.<br/>The firm hires labour up to the point where <strong>MRP = Wage (W)</strong> — wage is the marginal cost of labour.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Downward-sloping MRP</strong>: because of diminishing marginal returns, each additional worker adds less to output (MPP falls) → MRP falls.' }, { text: '<strong>MRP curve IS the labour demand curve</strong> — it shows how much labour the firm demands at each wage rate.' }, { text: 'Profit-maximising condition: hire workers up to W = MRP.' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Shifts in Labour Demand', level: 2 } },
    { id: 'list-shifts', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Higher product demand</strong> → higher output price → higher MRP → demand for labour shifts right.' }, { text: '<strong>Productivity improvements</strong> → higher MPP at each labour level → higher MRP → labour demand shifts right.' }, { text: '<strong>Higher price of capital (substitutes)</strong> → firms substitute labour for capital → demand for labour rises.' }, { text: '<strong>Lower price of capital (complements)</strong> → if capital and labour are complements, cheaper capital may raise demand for both.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always tie labour demand back to the MRP framework: <strong>"Labour demand rises because MRP increases — either MPP rises (productivity) or output price rises (product demand)."</strong>' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour demand is derived from product demand. Firms hire to MRP = W. MRP curve is the labour demand curve (downward-sloping due to DMR). Shifts: product demand, productivity, capital substitutability/complementarity.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Derived demand for labour depends on the derived demand for the product being produced. If product demand falls, labour demand falls \u2014 this is key to explaining unemployment in declining industries."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Always state that the demand for labour is 'derived' from the demand for the goods and services that the labour produces. If demand for the product rises, the Marginal Revenue Product (MRP) of labour shifts outwards."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Derived demand: labour demanded to produce output. MRP = MPP × MR — firm hires to W = MRP. MRP curve is labour demand. Rises if output price or productivity increases.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key2', prompt: 'Define MRP and state the profit-maximising hiring condition.', answer: 'Marginal Revenue Product (MRP) = Marginal Physical Product × Marginal Revenue. A profit-maximising firm hires labour up to the point where MRP = W (wage), since wage is the marginal cost of labour. The MRP curve is the firm\'s labour demand curve.' },
      { id: 'cue-2', blockId: 'list-shifts', prompt: 'Give two reasons why a firm\'s demand for labour might increase.', answer: 'An increase in the price of the firm\'s output (raises MRP via higher MR) or an improvement in labour productivity (raises MRP via higher MPP). Also: a rise in the price of substitute capital inputs, or an increase in consumer demand for the product.' },
    ]
  },
  evidence: [], mentions: []
};
