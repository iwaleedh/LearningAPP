export const note_economics_1_2_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the law of diminishing marginal utility, define total and marginal utility, and link the concept to the downward slope of the demand curve.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Utility and the Law of Diminishing Marginal Utility', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Key Definitions', text: '<strong>Utility</strong> is the satisfaction or benefit derived from consuming a good or service.<br/><strong>Total Utility (TU)</strong> is the total satisfaction from all units consumed.<br/><strong>Marginal Utility (MU)</strong> is the additional satisfaction from consuming one more unit.<br/>The <strong>Law of Diminishing Marginal Utility</strong> states that as consumption of a good increases (all else equal), the extra satisfaction from each additional unit <strong>falls</strong>.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Total and Marginal Utility — Numerical Example', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Utility from eating slices of pizza', headers: ['Units consumed', 'Total Utility (utils)', 'Marginal Utility (utils)'], rows: [['1', '10', '10'], ['2', '18', '8'], ['3', '24', '6'], ['4', '28', '4'], ['5', '30', '2'], ['6', '30', '0'], ['7', '28', '-2']] }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>TU rises</strong> as long as MU is positive; it peaks when MU = 0.' }, { text: '<strong>TU falls</strong> once MU becomes negative (over-consumption / disutility).' }, { text: '<strong>MU is the slope</strong> of the TU curve.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Link to the Demand Curve', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Why Demand Slopes Downward', text: 'Because MU <strong>declines</strong> with each extra unit, a rational consumer will only buy an additional unit if its <strong>price is lowered</strong> to match the reduced MU it provides. Therefore:<br/>• High MU (first units) → consumer willing to pay a <strong>high price</strong><br/>• Low MU (later units) → consumer only willing to pay a <strong>low price</strong><br/>This traces out a <strong>downward-sloping demand curve</strong>.' }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Cardinal vs Ordinal Utility', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Cardinal utility</strong>: assumes utility can be measured in exact numbers ("utils") — the approach used in DMU analysis.' }, { text: '<strong>Ordinal utility</strong>: more modern approach — consumers only need to <strong>rank</strong> preferences (A > B > C), not assign numerical values.' }, { text: 'Ordinal utility is considered more realistic; DMU analysis uses cardinal utility for simplicity in models.' }] }, terms: [] },
    { id: 'call-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Remember: MU = 0 at the <strong>point of satiation</strong> (maximum TU). Negative MU = <strong>disutility</strong>. For exam diagrams, TU is an inverted-U shape peaking when MU crosses zero.' }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Marginal utility falls with each extra unit consumed (law of DMU). TU peaks where MU = 0. Because MU declines, consumers pay less for additional units, explaining the downward-sloping demand curve.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Remember: MU = 0 at the point of satiation (maximum TU). Negative MU = disutility. For exam diagrams, TU is an inverted-U shape peaking when MU crosses zero."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Use the law of diminishing marginal utility to explain the downward-sloping demand curve. Examiners want to see you link the declining additional satisfaction from each extra unit consumed to the lower price consumers are willing to pay."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'DMU: each extra unit gives less satisfaction. This explains the downward-sloping demand curve.',
    cues: [
      { id: 'cue-1', blockId: 'h-1', prompt: 'State the Law of Diminishing Marginal Utility.', answer: 'As consumption of a good increases (ceteris paribus), the additional satisfaction from each extra unit eventually falls.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'When does Total Utility reach its maximum?', answer: 'When Marginal Utility equals zero (the point of satiation).' },
      { id: 'cue-3', blockId: 'h-3', prompt: 'How does the Law of DMU explain the downward slope of the demand curve?', answer: 'As MU falls with more units, consumers are only willing to pay lower prices for additional units, tracing a downward-sloping demand curve.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'Distinguish cardinal from ordinal utility.', answer: 'Cardinal utility assigns numerical values to satisfaction; ordinal utility only ranks preferences. Modern economics uses ordinal utility as more realistic.' },
    ]
  },
  evidence: [],
  mentions: []
};
