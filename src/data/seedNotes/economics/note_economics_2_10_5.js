export const note_economics_2_10_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define and calculate MPC, MPS, MPT, and MPM, understand their relationship, and explain how each affects the size of the multiplier.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'MPC, MPS, MPT and MPM', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'When households receive an additional unit of income (ΔY), they divide it between <strong>consumption</strong>, <strong>saving</strong>, <strong>taxation</strong>, and <strong>spending on imports</strong>. The marginal propensities measure the fraction of extra income allocated to each use. These concepts are central to understanding the size of the multiplier.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Marginal Propensity to Consume (MPC)', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>MPC</strong> is the proportion of additional income that households <strong>spend on domestic consumption</strong>. A higher MPC means households spend a larger fraction of extra income, leading to a larger multiplier.' }] } },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'MPC = \\frac{\\Delta C}{\\Delta Y}',
        caption: 'Marginal Propensity to Consume'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Marginal Propensity to Save (MPS)', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>MPS</strong> is the proportion of additional income that households <strong>save</strong> (do not spend). A higher MPS means more income leaks out of the circular flow as saving, reducing the multiplier.' }] } },
    {
      id: 'equation-2',
      type: 'equation',
      data: {
        latex: 'MPS = \\frac{\\Delta S}{\\Delta Y}',
        caption: 'Marginal Propensity to Save'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Marginal Propensity to Tax (MPT)', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>MPT</strong> is the proportion of additional income taken in <strong>taxation</strong> (income tax, NI contributions, VAT on spending). A higher MPT means more leaks to the government, reducing the multiplier. A progressive income tax system automatically raises MPT as income rises.' }] } },
    {
      id: 'equation-3',
      type: 'equation',
      data: {
        latex: 'MPT = \\frac{\\Delta T}{\\Delta Y}',
        caption: 'Marginal Propensity to Tax'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Marginal Propensity to Import (MPM)', level: 3 }
    },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>MPM</strong> is the proportion of additional income spent on <strong>imports</strong>. Spending on imports leaks out of the domestic circular flow (income goes to foreign producers). A higher MPM reduces the multiplier, which is why more open economies tend to have smaller multipliers.' }] } },
    {
      id: 'equation-4',
      type: 'equation',
      data: {
        latex: 'MPM = \\frac{\\Delta M}{\\Delta Y}',
        caption: 'Marginal Propensity to Import'
      }
    },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: 'The Adding-Up Constraint', level: 3 }
    },
    {
      id: 'equation-5',
      type: 'equation',
      data: {
        latex: 'MPC + MPS + MPT + MPM = 1',
        caption: 'All additional income must be allocated somewhere (adding-up constraint)'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of Marginal Propensities',
        headers: ['Concept', 'Definition', 'Formula', 'Effect on multiplier'],
        rows: [
          ['MPC', 'Fraction of extra income spent on domestic goods', 'ΔC / ΔY', 'Higher MPC → larger multiplier'],
          ['MPS', 'Fraction of extra income saved', 'ΔS / ΔY', 'Higher MPS → smaller multiplier'],
          ['MPT', 'Fraction of extra income paid in tax', 'ΔT / ΔY', 'Higher MPT → smaller multiplier'],
          ['MPM', 'Fraction of extra income spent on imports', 'ΔM / ΔY', 'Higher MPM → smaller multiplier']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The <strong>Marginal Propensity to Withdraw (MPW)</strong> = MPS + MPT + MPM = 1 − MPC. The open economy multiplier is k = 1/MPW. The higher the MPW, the smaller the multiplier.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'MPC, MPS, MPT, and MPM all sum to 1; MPC measures spending on domestic goods; MPS, MPT, MPM are withdrawals — higher withdrawals mean a smaller multiplier.',
    cues: [
      { id: 'cue-1', blockId: 'equation-1', prompt: 'Write the formula for MPC.', answer: 'MPC = ΔC / ΔY (change in consumption divided by change in income).' },
      { id: 'cue-2', blockId: 'equation-5', prompt: 'State the adding-up constraint for the four marginal propensities.', answer: 'MPC + MPS + MPT + MPM = 1.' },
      { id: 'cue-3', blockId: 'para-5', prompt: 'Why does a higher MPM reduce the multiplier?', answer: 'Spending on imports leaks out of the domestic circular flow to foreign producers, so less income remains to be re-spent domestically.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Which marginal propensity, if increased, makes the multiplier larger?', answer: 'A higher MPC (marginal propensity to consume domestic goods) increases the multiplier, because more of each income round is re-spent domestically.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_5;
