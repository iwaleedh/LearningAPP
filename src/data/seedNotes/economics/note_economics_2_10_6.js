export const note_economics_2_10_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Derive and apply the simple and open-economy multiplier formulae, and solve numerical multiplier problems.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Multiplier Formulae', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>multiplier (k)</strong> can be expressed using different formulae depending on the complexity of the model. The simplest version assumes a closed economy with no government; the more realistic open-economy version includes all three withdrawal types.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Simple Multiplier (Closed Economy, No Government)', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'In the simplest model, the only withdrawal is <strong>saving</strong>. The fraction of income not spent on consumption is saved (MPS = 1 − MPC). The multiplier is therefore:' }] } },
    {
      id: 'equation-1',
      type: 'equation',
      data: {
        latex: 'k = \\frac{1}{1 - MPC} = \\frac{1}{MPS}',
        caption: 'Simple multiplier formula (closed economy, only saving as withdrawal)'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Simple Multiplier',
        text: 'MPC = 0.75<br/>MPS = 1 − 0.75 = 0.25<br/>k = 1 / MPS = 1 / 0.25 = <strong>4</strong><br/><br/>If investment rises by £200m:<br/>ΔY = k × ΔI = 4 × £200m = <strong>£800m</strong>'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Open-Economy Multiplier (With Government and Trade)', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'In an open economy with government, there are three withdrawals: saving (MPS), taxation (MPT), and imports (MPM). The <strong>Marginal Propensity to Withdraw (MPW)</strong> is their sum. The multiplier is:' }] } },
    {
      id: 'equation-2',
      type: 'equation',
      data: {
        latex: 'k = \\frac{1}{MPS + MPT + MPM} = \\frac{1}{MPW}',
        caption: 'Open-economy multiplier formula'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Open-Economy Multiplier',
        text: 'MPS = 0.1, MPT = 0.2, MPM = 0.2<br/>MPW = 0.1 + 0.2 + 0.2 = 0.5<br/>k = 1 / 0.5 = <strong>2</strong><br/><br/>If government spending rises by £50bn:<br/>ΔY = 2 × £50bn = <strong>£100bn</strong>'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Using the Multiplier Formula: ΔY = k × ΔJ', level: 3 }
    },
    {
      id: 'equation-3',
      type: 'equation',
      data: {
        latex: '\\Delta Y = k \\times \\Delta J',
        caption: 'Change in national income = multiplier × change in injection'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Multiplier Formula Comparison',
        headers: ['Model', 'Formula', 'Assumption', 'Typical value'],
        rows: [
          ['Simple (closed, no govt)', 'k = 1/MPS', 'Only saving leaks', '3–5'],
          ['Open economy', 'k = 1/(MPS+MPT+MPM)', 'All three withdrawals', '1.5–3'],
          ['Real world (UK)', 'k ≈ 1.3–1.7 (OBR estimate)', 'Complex economy with many withdrawals', '~1.5']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In Edexcel exams, you may be given MPC or MPS and asked to calculate the multiplier, or given the multiplier and asked to calculate ΔY from ΔJ. Always show your working: state the formula, substitute values, and calculate k, then ΔY = k × ΔJ.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Simple multiplier k = 1/MPS; open-economy multiplier k = 1/(MPS+MPT+MPM); ΔY = k × ΔJ. Higher withdrawals mean smaller k.',
    cues: [
      { id: 'cue-1', blockId: 'equation-1', prompt: 'State the simple multiplier formula.', answer: 'k = 1/(1−MPC) = 1/MPS.' },
      { id: 'cue-2', blockId: 'equation-2', prompt: 'State the open-economy multiplier formula.', answer: 'k = 1/(MPS + MPT + MPM) = 1/MPW.' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'If MPC = 0.75, what is the simple multiplier?', answer: 'MPS = 0.25; k = 1/0.25 = 4.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'If MPS=0.1, MPT=0.2, MPM=0.2, and G rises by £50bn, what is the total change in Y?', answer: 'MPW = 0.5; k = 2; ΔY = 2 × £50bn = £100bn.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_10_6;
