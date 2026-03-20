export const note_economics_2_9_0 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the concept of aggregate supply (AS), the shape of the SRAS and LRAS curves, and how the AD-AS model represents the macroeconomy.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Aggregate Supply: Concept and Curve', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Aggregate Supply (AS)</strong> is the total quantity of real output (real GDP) that all firms in an economy are willing and able to produce at each general price level, over a given time period. It is the supply-side counterpart to Aggregate Demand and together they determine the equilibrium price level and real output.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Short-Run Aggregate Supply (SRAS)', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'In the <strong>short run</strong>, at least one factor of production (typically labour wages or capital costs) is fixed. The SRAS curve slopes <strong>upward</strong> from left to right, reflecting that as the price level rises, firms are able to sell output at higher prices and are therefore willing to supply more. Profit margins increase because input costs (especially wages) are sticky in the short run.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why SRAS Slopes Upward',
        text: 'Higher price levels increase profit margins in the short run because wages and other input costs do not immediately adjust. Firms respond by expanding output. This is the <strong>sticky wages explanation</strong>.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Long-Run Aggregate Supply (LRAS) — Classical View', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'In the <strong>classical (neo-classical) model</strong>, the LRAS curve is a <strong>vertical line</strong> at the full-employment level of output (Y<sub>f</sub>). In the long run, all factor prices are fully flexible and adjust to changes in the price level, so output always returns to Y<sub>f</sub> regardless of the price level. Changes in the price level cannot permanently alter real output.' }] } },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Long-Run Aggregate Supply — Keynesian View', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>Keynesian model</strong> presents a reverse-L shaped (or hockey-stick shaped) LRAS. When there is significant spare capacity (below full employment), the curve is <strong>horizontal</strong> — output can increase without raising the price level. As the economy approaches full employment, the curve becomes <strong>upward-sloping</strong> and then <strong>vertical</strong> at capacity output. This shape has important policy implications (see Topic 9.3).' }] } },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'AD-AS diagram showing SRAS, classical LRAS (vertical), and AD',
        svg: '<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="500" height="400" fill="#0f172a"/><text x="250" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Aggregate Demand and Aggregate Supply</text><!-- Axes --><line x1="60" y1="360" x2="460" y2="360" stroke="#334155" stroke-width="2"/><line x1="60" y1="360" x2="60" y2="30" stroke="#334155" stroke-width="2"/><text x="255" y="390" text-anchor="middle" fill="#334155" font-size="13">Real Output (Y)</text><text x="18" y="200" text-anchor="middle" fill="#334155" font-size="13" transform="rotate(-90,18,200)">Price Level (P)</text><!-- LRAS classical --><line x1="300" y1="360" x2="300" y2="50" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="6,3"/><text x="308" y="45" fill="#7c3aed" font-size="12">LRAS</text><!-- SRAS --><line x1="80" y1="320" x2="420" y2="100" stroke="#0891b2" stroke-width="2.5"/><text x="425" y="98" fill="#0891b2" font-size="12">SRAS</text><!-- AD --><line x1="80" y1="120" x2="420" y2="330" stroke="#dc2626" stroke-width="2.5"/><text x="425" y="332" fill="#dc2626" font-size="12">AD</text><!-- Equilibrium --><circle cx="261" cy="200" r="5" fill="#1e293b"/><text x="245" y="192" fill="#1e293b" font-size="11">E</text><!-- Y labels --><text x="295" y="375" fill="#334155" font-size="11">Y*</text><text x="292" y="378" fill="#334155" font-size="9">(=Yf)</text><!-- P label --><line x1="60" y1="200" x2="70" y2="200" stroke="#334155" stroke-width="1"/><text x="45" y="204" fill="#334155" font-size="11">P*</text></svg>'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Key Definitions', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Aggregate Supply (AS):</strong> Total real output all firms are willing to supply at each price level.' },
          { text: '<strong>Short-Run AS (SRAS):</strong> Upward-sloping; at least one factor cost is fixed.' },
          { text: '<strong>Long-Run AS (LRAS):</strong> Determines the economy\'s productive capacity; shape depends on the economic model used.' },
          { text: '<strong>Full-employment output (Y<sub>f</sub>):</strong> The level of real GDP produced when all resources are fully and efficiently employed.' },
          { text: '<strong>Price level:</strong> The average level of prices in the economy (measured by CPI or GDP deflator).' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always label your AS diagrams clearly: SRAS slopes upward, classical LRAS is vertical at Yf. State whether you are using the classical or Keynesian model when discussing LRAS shape.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'AS is the total output firms supply at each price level; SRAS slopes upward (sticky wages), classical LRAS is vertical at Yf, and Keynesian LRAS is reverse-L shaped.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'Why does the SRAS curve slope upward?', answer: 'Because wages and input costs are sticky in the short run; higher prices raise profit margins, incentivising firms to produce more.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'What shape is the classical LRAS and why?', answer: 'Vertical at full-employment output (Yf) because all factor prices are flexible in the long run, so output always returns to Yf regardless of price level.' },
      { id: 'cue-3', blockId: 'para-4', prompt: 'Describe the shape of the Keynesian LRAS.', answer: 'Reverse-L (hockey-stick): horizontal with spare capacity, then upward-sloping and eventually vertical at full employment.' },
      { id: 'cue-4', blockId: 'para-1', prompt: 'Define aggregate supply.', answer: 'The total quantity of real output that all firms are willing and able to produce at each general price level over a given time period.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_9_0;
