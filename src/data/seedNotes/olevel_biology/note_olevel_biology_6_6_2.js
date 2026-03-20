export const note_olevel_biology_6_6_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/6 Plant Nutrition/6-3-1-factors-affecting-rate-of-photosynthesis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain how light intensity, carbon dioxide concentration, and temperature affect the rate of photosynthesis; interpret rate graphs; describe the concept of limiting factors; and explain the compensation point.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Limiting Factor?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Concept: Limiting Factor',
        text: 'A <strong>limiting factor</strong> is the factor that is present at the lowest (or least favourable) level and therefore limits (controls) the rate of photosynthesis. Even if all other conditions are ideal, the rate of photosynthesis cannot increase above what the limiting factor allows.<br/><br/>The three main limiting factors for photosynthesis are:<br/>1. <strong>Light intensity</strong><br/>2. <strong>Carbon dioxide (CO₂) concentration</strong><br/>3. <strong>Temperature</strong>'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'At any given moment, only one factor is the limiting factor — the one that is most scarce relative to what the plant needs. For example, if light intensity is low but CO₂ is plentiful, increasing CO₂ will have no effect. The rate will only increase if light intensity is increased. This is the principle of limiting factors.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effect of Light Intensity', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'As <strong>light intensity</strong> increases, the rate of photosynthesis increases proportionally, because light energy is needed to power the reactions. As light intensity continues to increase, the rate eventually <strong>plateaus</strong> — this is because another factor (CO₂ or temperature) has become limiting. Further increases in light intensity alone have no effect.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effect of CO₂ Concentration', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Carbon dioxide is a raw material (reactant) in photosynthesis. As <strong>CO₂ concentration</strong> increases, the rate of photosynthesis increases because more substrate is available for the Calvin cycle (CO₂ fixation). Again, the rate plateaus when another factor (light or temperature) becomes limiting. In most outdoor environments, CO₂ concentration (~0.04%) is often a limiting factor.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Effect of Temperature', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Photosynthesis is controlled by <strong>enzymes</strong> (e.g. RuBisCO in the Calvin cycle). As temperature increases from 0°C, the rate of photosynthesis increases because molecules have more kinetic energy and enzyme-catalysed reactions proceed faster. The optimum temperature for most plants is around <strong>25–35°C</strong>. Above the optimum, enzymes in the chloroplast begin to denature, causing the rate to fall sharply. Below optimum, enzymes are inactivated but not denatured.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Graphs showing the effect of light intensity, CO₂ concentration, and temperature on the rate of photosynthesis',
        svg: `<svg viewBox="0 0 540 310" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="10">
  <rect width="540" height="310" fill="#0a2e1a" rx="12"/>
  <text x="270" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#14532d">Factors Affecting Rate of Photosynthesis</text>

  <!-- ======================== Graph 1: Light Intensity ======================== -->
  <text x="90" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">1. Light Intensity</text>
  <!-- Axes -->
  <line x1="30" y1="250" x2="165" y2="250" stroke="#374151" stroke-width="1.5"/>
  <line x1="30" y1="250" x2="30" y2="55" stroke="#374151" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="97" y="268" text-anchor="middle" font-size="9" fill="#374151">Light intensity</text>
  <text x="12" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,12,155)">Rate of photosynthesis</text>
  <!-- Curve: rises then plateaus -->
  <path d="M 30,248 C 45,220 60,160 80,115 C 95,85 110,72 125,68 C 140,66 155,66 165,66" stroke="#d97706" stroke-width="2.5" fill="none"/>
  <!-- Plateau annotation -->
  <line x1="30" y1="66" x2="165" y2="66" stroke="#d97706" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="167" y="70" font-size="8" fill="#d97706">Plateau</text>
  <!-- Limiting factor annotation -->
  <text x="140" y="90" font-size="8" fill="#374151">CO₂ or temp</text>
  <text x="140" y="100" font-size="8" fill="#374151">now limiting</text>
  <!-- Two lines: high CO2 vs low CO2 -->
  <path d="M 30,248 C 45,235 60,205 75,185 C 85,175 100,168 115,165 C 130,164 145,164 165,164" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
  <text x="97" y="158" text-anchor="middle" font-size="8" fill="#374151">Low CO₂</text>
  <text x="97" y="82" text-anchor="middle" font-size="8" fill="#d97706">High CO₂</text>

  <!-- ======================== Graph 2: CO2 Concentration ======================== -->
  <text x="275" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#3b82f6">2. CO₂ Concentration</text>
  <!-- Axes -->
  <line x1="215" y1="250" x2="345" y2="250" stroke="#374151" stroke-width="1.5"/>
  <line x1="215" y1="250" x2="215" y2="55" stroke="#374151" stroke-width="1.5"/>
  <text x="280" y="268" text-anchor="middle" font-size="9" fill="#374151">CO₂ concentration</text>
  <text x="198" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,198,155)">Rate of photosynthesis</text>
  <!-- Curve: rises then plateaus — two conditions (high and low light) -->
  <!-- High light -->
  <path d="M 215,248 C 230,225 245,170 262,125 C 275,100 288,85 300,82 C 315,80 330,80 345,80" stroke="#3b82f6" stroke-width="2.5" fill="none"/>
  <text x="320" y="73" font-size="8" fill="#3b82f6">High light</text>
  <!-- Low light -->
  <path d="M 215,248 C 230,238 245,215 260,200 C 272,192 285,188 300,187 C 315,186 330,186 345,186" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
  <text x="320" y="180" font-size="8" fill="#374151">Low light</text>
  <!-- Plateau dashed -->
  <line x1="215" y1="80" x2="345" y2="80" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="348" y="84" font-size="8" fill="#3b82f6">Max</text>
  <!-- Annotation -->
  <text x="280" y="110" text-anchor="middle" font-size="8" fill="#374151">Light or temp</text>
  <text x="280" y="120" text-anchor="middle" font-size="8" fill="#374151">now limiting</text>

  <!-- ======================== Graph 3: Temperature ======================== -->
  <text x="455" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">3. Temperature</text>
  <!-- Axes -->
  <line x1="395" y1="250" x2="520" y2="250" stroke="#374151" stroke-width="1.5"/>
  <line x1="395" y1="250" x2="395" y2="55" stroke="#374151" stroke-width="1.5"/>
  <text x="457" y="268" text-anchor="middle" font-size="9" fill="#374151">Temperature (°C)</text>
  <text x="378" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,378,155)">Rate of photosynthesis</text>
  <!-- Curve: rises to optimum then falls -->
  <path d="M 395,248 C 408,240 415,210 425,170 C 432,148 437,120 445,95 C 450,80 455,70 460,68 C 465,68 470,75 478,110 C 486,150 498,210 515,248" stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <!-- Optimum line -->
  <line x1="460" y1="68" x2="460" y2="250" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="460" y="260" text-anchor="middle" font-size="8" fill="#dc2626">~30°C</text>
  <text x="440" y="58" font-size="8" fill="#dc2626">Optimum</text>
  <!-- Denaturation label -->
  <text x="496" y="165" font-size="8" fill="#dc2626">Enzymes</text>
  <text x="496" y="175" font-size="8" fill="#dc2626">denature</text>
  <!-- x-axis ticks -->
  <text x="395" y="260" text-anchor="middle" font-size="8" fill="#374151">0</text>
  <text x="430" y="260" text-anchor="middle" font-size="8" fill="#374151">15</text>
  <text x="460" y="260" text-anchor="middle" font-size="8" fill="#374151">30</text>
  <text x="490" y="260" text-anchor="middle" font-size="8" fill="#374151">45</text>
  <text x="515" y="260" text-anchor="middle" font-size="8" fill="#374151">55</text>

  <!-- Bottom legend -->
  <text x="270" y="295" text-anchor="middle" font-size="9" fill="#374151">At any moment, the factor present at its least favourable level is the <tspan font-weight="bold">limiting factor</tspan></text>
</svg>`
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of limiting factors and their effects on photosynthesis',
        headers: ['Factor', 'How increasing it affects rate', 'Why rate plateaus', 'Relevance in practice'],
        rows: [
          ['Light intensity', 'Rate increases proportionally', 'CO₂ or temperature becomes limiting', 'On dull days or in shade, light is often the limiting factor'],
          ['CO₂ concentration', 'Rate increases', 'Light or temperature becomes limiting', 'Outdoors CO₂ is ~0.04%; in greenhouses it can be increased to boost growth'],
          ['Temperature', 'Rate increases up to optimum (~25–35°C)', 'Enzyme denaturation above optimum causes rate to fall', 'Greenhouse heating can boost crop yield in temperate climates']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'The Compensation Point', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Term: Compensation Point',
        text: 'The <strong>compensation point</strong> is the light intensity at which the rate of <strong>photosynthesis equals the rate of respiration</strong>. At this point, the net gas exchange is zero — all CO₂ produced by respiration is used in photosynthesis, and all O₂ produced by photosynthesis is used in respiration.<br/><br/>• <strong>Below the compensation point:</strong> Respiration rate > Photosynthesis rate → net CO₂ release<br/>• <strong>Above the compensation point:</strong> Photosynthesis rate > Respiration rate → net O₂ release (net carbon gain for the plant)'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Practical Application — Greenhouses',
        text: 'Commercial greenhouses maximise crop photosynthesis by controlling all three limiting factors:<br/>• <strong>Light:</strong> Artificial lighting (LEDs) to extend the photoperiod<br/>• <strong>CO₂:</strong> Injecting CO₂ gas to increase concentration above ambient (~0.04%)<br/>• <strong>Temperature:</strong> Heating to maintain optimum growing temperature (~25°C)<br/><br/>This increases crop yield and growth rate — explaining why it is economically worthwhile.'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Rate of photosynthesis graphs that show CO₂ or light: the curve should <strong>plateau</strong>, never decrease (unlike temperature graphs which show a bell shape with a fall after the optimum).<br/>• A plant always <strong>respires</strong> — even in bright light. The apparent (net) rate of photosynthesis measured is photosynthesis minus respiration.<br/>• Temperature acts differently to CO₂ and light — very high temperatures <strong>reduce</strong> the rate due to enzyme denaturation. CO₂ and light do not denature enzymes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The rate of photosynthesis is limited by whichever factor is at its least favourable level — the limiting factor. Increasing light intensity, CO₂ concentration, or temperature (up to the optimum) all increase the rate. The rate plateaus when another factor becomes limiting. Above the optimum temperature, enzymes denature and the rate falls. The compensation point is where photosynthesis rate equals respiration rate — no net gas exchange occurs.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Limiting factors: light, CO₂, temperature. Rate plateaus when another factor limits. Above optimum temp, enzymes denature. Compensation point: photosynthesis rate = respiration rate.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define the term "limiting factor" in the context of photosynthesis.',
        answer: 'A limiting factor is the factor present at the lowest or least favourable level that controls (limits) the rate of photosynthesis. Even if all other conditions are optimal, the rate cannot increase unless the limiting factor is increased.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Describe the relationship between light intensity and rate of photosynthesis.',
        answer: 'As light intensity increases, the rate of photosynthesis increases proportionally (light provides energy for the reactions). The rate then plateaus when another factor (CO₂ or temperature) becomes limiting. Increasing light further has no effect once the plateau is reached.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'Why does the rate of photosynthesis decrease at temperatures above the optimum?',
        answer: 'Above the optimum temperature, the enzymes involved in photosynthesis (e.g. in the Calvin cycle) denature — their active sites change shape permanently. Substrates can no longer bind, so the enzyme-controlled reactions slow down and the overall rate of photosynthesis falls.'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Define the compensation point and explain what happens above and below it.',
        answer: 'The compensation point is the light intensity at which the rate of photosynthesis equals the rate of respiration — no net gas exchange. Below it: respiration exceeds photosynthesis, so net CO₂ is released. Above it: photosynthesis exceeds respiration, so net O₂ is released and the plant gains organic matter.'
      },
      {
        id: 'cue-5',
        blockId: 'call-3',
        prompt: 'State THREE ways in which a greenhouse can be used to maximise crop yield.',
        answer: '1. Artificial lighting to increase light intensity and extend the photoperiod. 2. Adding CO₂ gas to increase CO₂ concentration. 3. Heating to maintain the optimum temperature for photosynthesis (~25°C).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_6_6_2;
