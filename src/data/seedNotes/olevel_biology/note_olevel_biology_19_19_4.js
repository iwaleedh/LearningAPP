export const note_olevel_biology_19_19_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/19 Organisms And Their Environment/19-5-1-population-dynamics.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain the factors that affect population size and describe predator-prey relationships and population growth curves.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Factors Affecting Population Size', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Population Size Formula',
        text: 'Population change = <strong>(Birth rate + Immigration) − (Death rate + Emigration)</strong><br/><br/>A population grows when birth rate + immigration > death rate + emigration.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Biotic and abiotic limiting factors for population growth',
        headers: ['Factor type', 'Factor', 'Effect on population'],
        rows: [
          ['Biotic', 'Food supply', 'Less food → starvation → population falls'],
          ['Biotic', 'Predation', 'More predators → more prey killed → prey population falls'],
          ['Biotic', 'Disease', 'Pathogens spread → increased death rate'],
          ['Biotic', 'Competition', 'For food/space → reduced survival and reproduction'],
          ['Abiotic', 'Temperature', 'Extreme temperatures reduce survival and reproduction'],
          ['Abiotic', 'Water availability', 'Drought reduces survival of plants and animals'],
          ['Abiotic', 'Light intensity', 'Affects plant growth and therefore food available to consumers']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Predator-Prey Relationships', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Predator and prey populations are <strong>interdependent</strong> and cycle together. When prey is abundant, predators have more food → predator population rises → more prey eaten → prey population falls → less food for predators → predator population falls → prey recovers. The populations oscillate out of phase.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Predator-prey population cycle (e.g. lynx and hare)',
        svg: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="520" height="280" fill="#f0fdf4" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">Predator-Prey Population Cycle</text>
  <!-- Axes -->
  <line x1="60" y1="230" x2="490" y2="230" stroke="#374151" stroke-width="2"/>
  <line x1="60" y1="230" x2="60" y2="40" stroke="#374151" stroke-width="2"/>
  <text x="275" y="255" text-anchor="middle" font-size="11" fill="#374151">Time</text>
  <text x="20" y="140" text-anchor="middle" font-size="11" fill="#374151" transform="rotate(-90,20,140)">Population size</text>
  <!-- Prey curve (green) - starts higher, leads -->
  <path d="M60,160 Q100,80 140,100 Q180,120 220,80 Q260,40 300,90 Q340,140 380,90 Q420,50 460,100 Q480,120 490,110" fill="none" stroke="#16a34a" stroke-width="3"/>
  <!-- Predator curve (red) - follows prey with lag -->
  <path d="M60,190 Q110,185 150,150 Q190,120 230,130 Q270,140 310,120 Q350,100 390,130 Q430,155 460,145 Q480,140 490,145" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8,4"/>
  <!-- Legend -->
  <line x1="70" y1="258" x2="100" y2="258" stroke="#16a34a" stroke-width="3"/>
  <text x="105" y="262" font-size="11" fill="#16a34a">Prey (e.g. hare)</text>
  <line x1="220" y1="258" x2="250" y2="258" stroke="#dc2626" stroke-width="3" stroke-dasharray="8,4"/>
  <text x="255" y="262" font-size="11" fill="#dc2626">Predator (e.g. lynx)</text>
  <!-- Annotation -->
  <text x="140" y="60" font-size="10" fill="#166534">Prey peak</text>
  <text x="175" y="165" font-size="10" fill="#dc2626">Predator</text>
  <text x="175" y="178" font-size="10" fill="#dc2626">peaks after</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Population Growth Curves', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'S-curve vs J-curve',
        text: '<strong>J-shaped (exponential) growth:</strong> Population grows rapidly with no limiting factors. Rare in nature — occurs when a species is introduced to a new environment with abundant resources.<br/><br/><strong>S-shaped (logistic) growth:</strong> Population grows rapidly at first, then slows as it approaches the <strong>carrying capacity</strong> (K) — the maximum population size the environment can sustain. Limiting factors prevent further growth.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Population size is determined by birth rate, death rate, immigration, and emigration. Limiting factors (food, predation, disease, space) control population growth. Predator and prey populations cycle together. Real populations show S-shaped growth approaching carrying capacity.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Population size: births + immigration vs deaths + emigration. Limiting factors: food, predators, disease, space. Predator-prey cycles oscillate out of phase. S-curve shows growth levelling at carrying capacity.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'State the four factors that affect population size.', answer: 'Birth rate, death rate, immigration, and emigration. Population grows when (birth rate + immigration) exceeds (death rate + emigration).' },
      { id: 'cue-2', blockId: 'para-1', prompt: 'Describe how predator and prey populations are linked.', answer: 'They cycle together: prey increases → predator increases (more food) → prey decreases (more eaten) → predator decreases (less food) → prey recovers. Predator population peaks after the prey peak.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'What is carrying capacity?', answer: 'The maximum population size that an environment can sustainably support, determined by limiting factors such as food, water, and space.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_19_19_4;
