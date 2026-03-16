export const note_olevel_biology_12_12_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/12 Respiration/12-1-2-anaerobic-respiration.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define anaerobic respiration; write equations for animals and yeast; explain oxygen debt; compare aerobic and anaerobic respiration; describe applications in fermentation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Anaerobic Respiration?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Anaerobic respiration</strong> is the release of energy from <strong>glucose without the use of oxygen</strong>. It occurs in the <strong>cytoplasm</strong> (not mitochondria) and produces far <strong>less ATP</strong> than aerobic respiration. It is used as a short-term emergency energy supply when oxygen is unavailable — for example, during intense exercise.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Equations for Anaerobic Respiration', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Anaerobic Respiration — Animals (and humans)',
        text: '<strong>Word equation:</strong><br/>glucose → lactic acid (+ small amount of energy)<br/><br/>Lactic acid builds up in muscles, causing fatigue and the \'burning\' sensation during intense exercise.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Anaerobic Respiration — Yeast and Plants',
        text: '<strong>Word equation:</strong><br/>glucose → ethanol + carbon dioxide (+ small amount of energy)<br/><br/>This is also called <strong>fermentation</strong>. Yeast produces ethanol and CO₂ when oxygen is absent.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Oxygen Debt', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'During intense exercise, muscles respire anaerobically and produce <strong>lactic acid</strong>. After exercise, the body must use <strong>extra oxygen</strong> to oxidise the accumulated lactic acid to carbon dioxide and water. This extra oxygen needed is called the <strong>oxygen debt</strong> (or EPOC — excess post-exercise oxygen consumption). This is why you continue to breathe heavily after stopping vigorous activity.' }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Oxygen Debt',
        text: 'Oxygen debt = the extra oxygen needed <strong>after</strong> exercise to break down lactic acid. It is repaid by continued heavy breathing. Do <strong>not</strong> say oxygen debt occurs <strong>during</strong> exercise — it is repaid afterwards.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Aerobic vs Anaerobic Respiration', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of aerobic and anaerobic respiration',
        headers: ['Feature', 'Aerobic', 'Anaerobic'],
        rows: [
          ['Oxygen required?', 'Yes', 'No'],
          ['Products (animals)', 'CO₂ + H₂O', 'Lactic acid'],
          ['Products (yeast/plants)', 'CO₂ + H₂O', 'Ethanol + CO₂'],
          ['Energy (ATP) released', 'Large amount (~38 ATP)', 'Small amount (~2 ATP)'],
          ['Location in cell', 'Mitochondria', 'Cytoplasm'],
          ['Duration of use', 'Long-term, sustainable', 'Short-term only']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Applications of Anaerobic Respiration', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Bread making</strong> — yeast ferments sugars in dough; CO₂ causes bread to rise; ethanol evaporates during baking' },
          { text: '<strong>Beer and wine production</strong> — yeast ferments glucose (from barley/grapes) producing ethanol and CO₂' },
          { text: '<strong>Yoghurt and cheese</strong> — bacteria ferment lactose in milk to lactic acid, which curdles the milk' },
          { text: '<strong>Muscle fatigue</strong> — lactic acid build-up in muscles during sprint events; explains why athletes slow down' },
          { text: '<strong>Biogas production</strong> — anaerobic bacteria break down organic waste to produce methane gas (a fuel)' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Aerobic vs anaerobic respiration pathways from glucose',
        svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13">
  <!-- Glucose box -->
  <rect x="205" y="20" width="150" height="44" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="280" y="37" text-anchor="middle" font-weight="bold" fill="#7a4a00">GLUCOSE</text>
  <text x="280" y="54" text-anchor="middle" font-size="11" fill="#7a4a00">C₆H₁₂O₆</text>

  <!-- Fork arrows -->
  <line x1="210" y1="64" x2="120" y2="110" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="350" y1="64" x2="440" y2="110" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>

  <!-- No O2 label -->
  <text x="130" y="100" text-anchor="middle" fill="#dc2626" font-size="11">No O₂</text>
  <!-- O2 label -->
  <text x="430" y="100" text-anchor="middle" fill="#16a34a" font-size="11">With O₂</text>

  <!-- Anaerobic box -->
  <rect x="20" y="115" width="200" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="135" text-anchor="middle" font-weight="bold" fill="#991b1b">ANAEROBIC</text>
  <text x="120" y="152" text-anchor="middle" fill="#991b1b" font-size="11">Animals: lactic acid</text>
  <text x="120" y="168" text-anchor="middle" fill="#991b1b" font-size="11">Yeast: ethanol + CO₂</text>
  <text x="120" y="184" text-anchor="middle" fill="#991b1b" font-size="11">~2 ATP released</text>

  <!-- Aerobic box -->
  <rect x="340" y="115" width="200" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="440" y="135" text-anchor="middle" font-weight="bold" fill="#14532d">AEROBIC</text>
  <text x="440" y="152" text-anchor="middle" fill="#14532d" font-size="11">CO₂ + H₂O</text>
  <text x="440" y="168" text-anchor="middle" fill="#14532d" font-size="11">~38 ATP released</text>
  <text x="440" y="184" text-anchor="middle" fill="#14532d" font-size="11">In mitochondria</text>

  <!-- Oxygen debt arrow -->
  <path d="M120 195 Q120 250 280 260 Q380 268 340 220" fill="none" stroke="#9333ea" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrP)"/>
  <text x="200" y="272" text-anchor="middle" fill="#9333ea" font-size="11">Oxygen debt — lactic acid oxidised</text>

  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#555"/>
    </marker>
    <marker id="arrP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#9333ea"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Anaerobic respiration releases energy from glucose WITHOUT oxygen. In animals: glucose → lactic acid. In yeast: glucose → ethanol + CO₂. Produces only ~2 ATP vs ~38 ATP aerobically. Oxygen debt is the extra oxygen needed after exercise to remove lactic acid. Used in fermentation (bread, beer, wine).' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Anaerobic respiration: no oxygen; animals → lactic acid; yeast → ethanol + CO₂. Less ATP than aerobic.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Write the word equation for anaerobic respiration in humans.', answer: 'Glucose → lactic acid (+ energy).' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Write the word equation for anaerobic respiration in yeast.', answer: 'Glucose → ethanol + carbon dioxide (+ energy).' },
      { id: 'cue-3', blockId: 'para-2', prompt: 'What is meant by \'oxygen debt\'?', answer: 'The extra oxygen needed after exercise to oxidise accumulated lactic acid back to carbon dioxide and water.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Give two differences between aerobic and anaerobic respiration.', answer: 'Aerobic requires oxygen / anaerobic does not. Aerobic releases more ATP (~38) / anaerobic releases less (~2). Aerobic occurs in mitochondria / anaerobic in cytoplasm (any two).' },
      { id: 'cue-5', blockId: 'list-1', prompt: 'Give two uses of anaerobic fermentation by yeast in industry.', answer: 'Bread making (CO₂ makes dough rise) and beer/wine production (ethanol is produced).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_12_12_1;
