export const note_economics_2_9_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between movements along the SRAS curve and shifts of the SRAS curve, and identify the key causes of each.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'AS Shifts vs Movements Along the Curve', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Understanding the difference between a <strong>movement along</strong> the SRAS curve and a <strong>shift of</strong> the SRAS curve is essential for accurate AD-AS analysis. The distinction mirrors the same concept in microeconomics: movement vs. shift of a supply curve.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Movement Along the SRAS Curve', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>movement along the SRAS curve</strong> occurs when the <strong>price level changes</strong> — this is what the curve itself represents. If the price level rises, firms move up the SRAS curve, increasing real output supplied. If the price level falls, firms move down the SRAS curve. No new curve is drawn; the economy simply moves to a different point on the existing SRAS.' }] } },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cause of Movement Along SRAS',
        text: '<strong>Only a change in the price level</strong> causes a movement along the SRAS curve. This is typically triggered by a shift in Aggregate Demand (AD).'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Shifts of the SRAS Curve', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>shift of the SRAS curve</strong> occurs when firms are willing to supply a different quantity at <strong>every price level</strong>, due to a change in the conditions of supply. A <strong>leftward shift</strong> (decrease in SRAS) means lower output at each price level — this represents a <strong>cost-push</strong> supply shock. A <strong>rightward shift</strong> (increase in SRAS) means higher output at each price level, typically driven by improvements in productivity or falls in input costs.' }] } },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Causes of SRAS Shifts', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Change in wage rates:</strong> Higher wages → higher production costs → SRAS shifts left (cost-push). Lower wages → SRAS shifts right.' },
          { text: '<strong>Change in raw material costs:</strong> A rise in oil prices raises energy and transport costs for all firms → SRAS shifts left. A fall in commodity prices → SRAS shifts right.' },
          { text: '<strong>Change in productivity:</strong> Higher productivity (output per worker) reduces unit costs → SRAS shifts right.' },
          { text: '<strong>Exchange rate change:</strong> A depreciation raises import costs (raw materials, components) → SRAS shifts left. Appreciation → SRAS shifts right.' },
          { text: '<strong>Indirect taxes:</strong> An increase in VAT or duties raises production costs → SRAS shifts left.' },
          { text: '<strong>Government regulations:</strong> New compliance costs (environmental, health and safety) → SRAS shifts left. Deregulation → SRAS shifts right.' },
          { text: '<strong>Subsidies to firms:</strong> Reduce unit costs → SRAS shifts right.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'SRAS shifting left (cost-push shock) and right (supply-side improvement)',
        svg: '<svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13"><rect width="520" height="400" fill="#0f172a"/><text x="260" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Shifts of the SRAS Curve</text><!-- Axes --><line x1="60" y1="360" x2="480" y2="360" stroke="#334155" stroke-width="2"/><line x1="60" y1="360" x2="60" y2="30" stroke="#334155" stroke-width="2"/><text x="270" y="390" text-anchor="middle" fill="#334155" font-size="13">Real Output (Y)</text><text x="18" y="200" text-anchor="middle" fill="#334155" font-size="13" transform="rotate(-90,18,200)">Price Level (P)</text><!-- Original SRAS --><line x1="100" y1="320" x2="420" y2="80" stroke="#0891b2" stroke-width="2.5"/><text x="425" y="78" fill="#0891b2" font-size="12">SRAS₀</text><!-- SRAS Left (cost push) --><line x1="70" y1="310" x2="330" y2="70" stroke="#dc2626" stroke-width="2.5"/><text x="335" y="68" fill="#dc2626" font-size="12">SRAS₁</text><text x="335" y="84" fill="#dc2626" font-size="11">(cost push)</text><!-- SRAS Right (improvement) --><line x1="160" y1="340" x2="470" y2="100" stroke="#16a34a" stroke-width="2.5"/><text x="472" y="98" fill="#16a34a" font-size="12">SRAS₂</text><text x="425" y="113" fill="#16a34a" font-size="11">(improvement)</text><!-- Arrows --><text x="130" y="175" fill="#dc2626" font-size="20">&#8592;</text><text x="300" y="200" fill="#16a34a" font-size="20">&#8594;</text></svg>'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do NOT confuse a movement along SRAS (caused only by a price level change) with a shift of SRAS (caused by cost or productivity changes). In an exam, explicitly state whether you are shifting the curve or moving along it.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Oil Price Shock',
        text: 'In 2022, oil prices surged following geopolitical tensions. This raised energy costs for all UK producers. The SRAS curve shifted <strong>leftward</strong> — firms could only supply the same output at a higher price level, or less output at the same price level. The result: higher inflation AND lower real output (stagflation).'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'A movement along SRAS is caused only by a price level change; a shift of SRAS is caused by changes in input costs, productivity, exchange rates, taxes, or regulations.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'What causes a movement along the SRAS curve?', answer: 'A change in the price level (only). This is typically triggered by a shift in AD.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'What does a leftward shift of SRAS represent?', answer: 'A decrease in aggregate supply — firms supply less at each price level. This is a cost-push supply shock.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Give three causes of a leftward shift in SRAS.', answer: 'Rising wage rates, higher oil/raw material prices, currency depreciation (raising import costs), or new indirect taxes/regulations.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'How does improved productivity shift the SRAS curve?', answer: 'Higher productivity lowers unit costs, so firms can supply more at each price level — SRAS shifts right.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_9_1;
