export const note_economics_2_9_3 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Compare and contrast the Keynesian and Classical models of Long-Run Aggregate Supply, explain their different shapes, and evaluate the policy implications of each.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Keynesian vs Classical Long-Run Aggregate Supply', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The shape of the <strong>Long-Run Aggregate Supply (LRAS)</strong> curve is one of the most important theoretical debates in macroeconomics. The <strong>classical (neo-classical)</strong> and <strong>Keynesian</strong> schools of thought make fundamentally different predictions about how the economy behaves in the long run, with profound implications for economic policy.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Classical LRAS', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Classical economists argue that <strong>factor markets (especially the labour market) are fully flexible</strong> in the long run. If the economy is below full employment, wages fall, making labour cheaper, encouraging firms to hire more workers until full employment is restored. Therefore, the economy <strong>always self-corrects</strong> back to full-employment output (Y<sub>f</sub>).' }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The classical LRAS is a <strong>vertical line at Y<sub>f</sub></strong>. Changes in the price level do not affect long-run real output. Only supply-side factors (labour, capital, technology, institutions) determine Y<sub>f</sub>. A higher price level simply means the same output is sold at higher prices — no more real output is produced.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Keynesian LRAS', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'Keynesians reject the idea that markets automatically clear in a reasonable timeframe. They argue that <strong>wages are sticky downwards</strong> — workers resist pay cuts, so recessions can be persistent. The Keynesian LRAS is therefore <strong>reverse-L (or hockey-stick) shaped</strong>:<br/>• <strong>Horizontal section</strong>: With significant spare capacity (e.g. high unemployment), firms can increase output without raising prices — the price level is stable.<br/>• <strong>Upward-sloping section</strong>: As the economy approaches full capacity, bottlenecks appear, costs rise, and prices begin to increase.<br/>• <strong>Vertical section</strong>: At full employment output, the economy cannot produce any more regardless of the price level.' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Classical LRAS (vertical) vs Keynesian LRAS (reverse-L)',
        svg: '<svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="560" height="400" fill="#0f172a"/><text x="280" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Classical vs Keynesian LRAS</text><!-- Left panel: Classical --><text x="130" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Classical Model</text><line x1="40" y1="360" x2="230" y2="360" stroke="#334155" stroke-width="2"/><line x1="40" y1="360" x2="40" y2="60" stroke="#334155" stroke-width="2"/><text x="135" y="380" text-anchor="middle" fill="#334155" font-size="11">Real Output (Y)</text><text x="12" y="215" fill="#334155" font-size="10" transform="rotate(-90,12,215)">Price Level</text><line x1="150" y1="360" x2="150" y2="68" stroke="#1d4ed8" stroke-width="3"/><text x="156" y="64" fill="#1d4ed8" font-size="12">LRAS</text><text x="144" y="375" fill="#1d4ed8" font-size="11">Yf</text><!-- Right panel: Keynesian --><text x="410" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0891b2">Keynesian Model</text><line x1="300" y1="360" x2="530" y2="360" stroke="#334155" stroke-width="2"/><line x1="300" y1="360" x2="300" y2="60" stroke="#334155" stroke-width="2"/><text x="415" y="380" text-anchor="middle" fill="#334155" font-size="11">Real Output (Y)</text><text x="272" y="215" fill="#334155" font-size="10" transform="rotate(-90,272,215)">Price Level</text><!-- Keynesian LRAS: horizontal then vertical --><line x1="308" y1="300" x2="440" y2="300" stroke="#0891b2" stroke-width="3"/><line x1="440" y1="300" x2="440" y2="68" stroke="#0891b2" stroke-width="3"/><text x="446" y="64" fill="#0891b2" font-size="12">LRAS</text><text x="434" y="375" fill="#0891b2" font-size="11">Yf</text><text x="350" y="320" fill="#0891b2" font-size="10">spare capacity</text><text x="445" y="180" fill="#0891b2" font-size="10" transform="rotate(-90,445,180)">full capacity</text></svg>'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Classical vs Keynesian LRAS: Key Differences',
        headers: ['Feature', 'Classical Model', 'Keynesian Model'],
        rows: [
          ['Shape of LRAS', 'Vertical at Yf', 'Reverse-L (horizontal then vertical)'],
          ['Labour market assumption', 'Fully flexible wages', 'Wages are sticky downwards'],
          ['Self-correction mechanism', 'Economy always returns to Yf automatically', 'Markets may fail to clear; prolonged recessions possible'],
          ['Role of AD policy', 'Only affects price level, not real output in LR', 'Effective when there is spare capacity (horizontal section)'],
          ['What determines output', 'Supply-side factors only', 'Both AD (with spare capacity) and supply-side'],
          ['Policy implication', 'Fiscal/monetary policy is ineffective long-run; focus on LRAS shifts', 'Government intervention justified in recessions']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Policy Implications', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Classical view:</strong> Fiscal or monetary stimulus only creates inflation (price level rises with no increase in real output). The correct policy is to shift LRAS rightward through supply-side reforms (education, deregulation, privatisation).' },
          { text: '<strong>Keynesian view:</strong> When the economy is on the horizontal section of LRAS (significant spare capacity), government spending and other AD stimulus can raise real output <strong>without causing inflation</strong>. Active demand management is justified.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Exam Essentials',
        text: 'The 2008 financial crisis reignited this debate. Keynesians argued for fiscal stimulus; classical economists feared deficits and inflation. In practice, most central banks and governments followed a broadly Keynesian approach in the short run (QE, fiscal stimulus) while pursuing supply-side reforms in the medium term.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Ensure you draw the correct LRAS curve. Classical is perfectly inelastic at full employment, assuming wages and prices are fully flexible. Keynesian has a horizontal section indicating mass unemployment and sticky downward wages."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Classical LRAS is vertical at Yf (flexible markets, self-correcting); Keynesian LRAS is reverse-L (sticky wages, spare capacity means AD policy can raise output without inflation).',
    cues: [
      { id: 'cue-1', blockId: 'para-3', prompt: 'Why is the classical LRAS vertical?', answer: 'Because factor markets are fully flexible in the long run; the economy always self-corrects to Yf, so price level changes do not affect real output.' },
      { id: 'cue-2', blockId: 'para-4', prompt: 'Describe the three sections of the Keynesian LRAS.', answer: 'Horizontal (spare capacity — output rises without price increases), upward-sloping (approaching full employment), vertical (at full employment output Yf).' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What is the classical view on the effectiveness of fiscal policy?', answer: 'In the long run, fiscal stimulus only raises the price level, not real output — it is ineffective for increasing Y beyond Yf.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'When does the Keynesian model say AD policy can raise real output?', answer: 'When the economy is on the horizontal section of the LRAS — i.e. when there is significant spare capacity (high unemployment, output below Yf).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_9_3;
