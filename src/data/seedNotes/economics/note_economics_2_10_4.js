export const note_economics_2_10_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and explain the multiplier process — how an initial injection into the circular flow leads to a magnified final change in national income.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Multiplier Process', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>multiplier</strong> is the ratio of the final change in national income (real GDP) to the initial injection that caused it. An initial injection into the circular flow does not just raise income by its own amount — it triggers a <strong>chain of subsequent spending rounds</strong> that each add to national income. The total (cumulative) increase in national income is therefore <strong>greater</strong> than the original injection.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Multiplier Concept',
        text: 'If the government spends an extra £1 billion, national income ultimately rises by more than £1 billion. The <strong>multiplier (k)</strong> tells us by how much: if k = 4, then national income rises by £4 billion.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Multiplier Process: Step by Step', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The process works through successive <strong>rounds of spending</strong>. Each time income is received, a fraction is <strong>withdrawn</strong> (saved, taxed, or spent on imports) and the remainder is <strong>spent on domestic goods</strong>, creating new income for someone else. The process continues with each round smaller than the last, until the additional spending rounds approach zero.' }] } },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Government Spending Multiplier',
        text: '<strong>Assume:</strong> Government increases spending by £100m. MPC = 0.8 (households spend 80p of every £1 of extra income on domestic output).<br/><br/><strong>Round 1:</strong> G rises by £100m → income of workers in affected industries rises by £100m<br/><strong>Round 2:</strong> They spend 80% → £80m new income for other producers<br/><strong>Round 3:</strong> Those producers spend 80% → £64m new income<br/><strong>Round 4:</strong> £51.2m<br/><strong>Round 5:</strong> £40.96m<br/>...<br/><strong>Total:</strong> £100m + £80m + £64m + £51.2m + ... = £100m × (1 ÷ (1 − 0.8)) = £100m × 5 = <strong>£500m</strong><br/><br/>The multiplier k = 1/(1 − MPC) = 1/0.2 = <strong>5</strong>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why the Process Dies Out', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'Each spending round is smaller than the previous one because a fraction of each increase in income is <strong>withdrawn</strong> from the circular flow through saving, taxation, and imports. The larger the proportion withdrawn (the higher the MPW = MPS + MPT + MPM), the faster the multiplier process dies out, and the <strong>smaller</strong> the final multiplier.' }] } },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'k = \\frac{\\Delta Y}{\\Delta J} = \\frac{1}{1 - MPC} = \\frac{1}{MPW}',
        caption: 'The simple multiplier formula (k = multiplier, MPW = marginal propensity to withdraw)'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The multiplier works in <strong>both directions</strong>. A withdrawal (e.g. a tax rise) triggers a <strong>downward</strong> multiplier process — national income falls by more than the initial withdrawal. A rise in taxes of £100m with a multiplier of 3 reduces national income by £300m.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Calculating the multiplier from macroeconomic data without understanding the rounds process. The multiplier is not simply \u0394Y \u00f7 \u0394I; it depends on the MPC and leakage rates. In exam questions, show each round of spending to demonstrate understanding of the mechanism, not just the final numerical answer."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The multiplier process means an initial injection leads to a larger total rise in national income through successive spending rounds; the process dies out as withdrawals (S+T+M) reduce each round.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'Define the multiplier in your own words.', answer: 'The ratio of the final change in national income to the initial injection that caused it; a single injection creates a chain of spending rounds, so the total income increase exceeds the original injection.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'If MPC = 0.8 and government spending rises by £100m, what is the total rise in national income?', answer: '£500m (multiplier k = 1/(1-0.8) = 5; £100m × 5 = £500m).' },
      { id: 'cue-3', blockId: 'para-3', prompt: 'Why does the multiplier process eventually die out?', answer: 'Each round, a fraction is withdrawn (saved, taxed, or spent on imports) rather than re-spent, so each successive spending round is smaller than the last.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'Does the multiplier work in reverse?', answer: 'Yes. A withdrawal (e.g. tax rise) triggers a downward multiplier, reducing national income by more than the initial withdrawal.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_4;
