export const note_olevel_physics_2_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/2 Thermal Physics/2-3-5-consequences-of-thermal-energy-transfer.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain the greenhouse effect and global warming; describe how sea breezes arise from differential heating of land and sea; describe the design of a vacuum flask and explain how each feature reduces heat transfer.'
      }
    },
    {
      id: 'h-greenhouse',
      type: 'heading',
      data: { text: 'The Greenhouse Effect and Global Warming', level: 2 }
    },
    {
      id: 'p-greenhouse',
      type: 'paragraph',
      data: {
        text: 'The <strong>greenhouse effect</strong> is a natural process that keeps Earth warm enough to support life. Solar radiation (mainly visible light and UV) passes through the atmosphere and is absorbed by Earth\'s surface. The surface warms and re-emits this energy as <strong>infrared radiation</strong> (longer wavelengths). Greenhouse gases in the atmosphere — including CO₂, CH₄ (methane), H₂O vapour, and N₂O — absorb this outgoing IR and re-radiate it in all directions, including back toward Earth. This keeps Earth\'s surface about 33 °C warmer than it would otherwise be.'
      }
    },
    {
      id: 'p-enhanced',
      type: 'paragraph',
      data: {
        text: 'Human activities (burning fossil fuels, deforestation, agriculture) increase the concentration of greenhouse gases, <strong>enhancing the greenhouse effect</strong> and causing <em>global warming</em>. This leads to rising sea levels, more extreme weather events, and disruption of ecosystems.'
      }
    },
    {
      id: 'list-ghg',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>CO₂ (carbon dioxide)</strong> — released by burning fossil fuels and deforestation.' },
          { text: '<strong>CH₄ (methane)</strong> — released by landfill, livestock digestion, rice paddies.' },
          { text: '<strong>H₂O (water vapour)</strong> — the most abundant greenhouse gas, but naturally regulated by the water cycle.' },
          { text: '<strong>N₂O (nitrous oxide)</strong> — released by fertilisers and combustion.' }
        ]
      }
    },
    {
      id: 'h-seabreeze',
      type: 'heading',
      data: { text: 'Sea and Land Breezes', level: 2 }
    },
    {
      id: 'p-seabreeze',
      type: 'paragraph',
      data: {
        text: 'Land and sea have very different specific heat capacities. Land (rock, soil) has a much <strong>lower SHC than water</strong>, so it heats up and cools down much more quickly than the sea for the same energy input.'
      }
    },
    {
      id: 'tbl-seabreeze',
      type: 'comparisonTable',
      data: {
        caption: 'Sea breeze vs land breeze — mechanism',
        headers: ['Time', 'Situation', 'Convection outcome', 'Wind direction'],
        rows: [
          ['Daytime', 'Land heats faster than sea → air over land is warmer', 'Warm coastal air rises; cool sea air flows in to replace it', 'Sea breeze: sea → land'],
          ['Night-time', 'Land cools faster than sea → air over sea is now warmer', 'Warm air over sea rises; cool land air flows out to sea', 'Land breeze: land → sea']
        ]
      }
    },
    {
      id: 'h-flask',
      type: 'heading',
      data: { text: 'The Vacuum Flask (Thermos Flask)', level: 2 }
    },
    {
      id: 'p-flask',
      type: 'paragraph',
      data: {
        text: 'A <strong>vacuum flask</strong> (Thermos) is designed to minimise all three mechanisms of heat transfer, keeping hot drinks hot and cold drinks cold for many hours.'
      }
    },
    {
      id: 'svg-flask',
      type: 'svg',
      data: {
        caption: 'Cross-section of a vacuum flask showing heat-reducing features',
        svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Outer glass wall -->
  <path d="M80,30 L80,240 Q80,270 150,270 Q220,270 220,240 L220,30 Z" fill="#1c3a64" stroke="#8898b8" stroke-width="2.5"/>

  <!-- Vacuum gap (white / hatched) -->
  <path d="M95,35 L95,235 Q95,255 150,255 Q205,255 205,235 L205,35 Z" fill="#1e293b" stroke="#aab8cc" stroke-width="1.5"/>
  <!-- Vacuum hatching -->
  <line x1="95" y1="60" x2="115" y2="40" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="95" y1="90" x2="130" y2="55" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="95" y1="120" x2="145" y2="70" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="95" y1="150" x2="160" y2="85" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="105" y1="175" x2="175" y2="105" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="118" y1="198" x2="190" y2="126" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="136" y1="218" x2="205" y2="149" stroke="#ccddee" stroke-width="0.8"/>
  <line x1="160" y1="232" x2="205" y2="187" stroke="#ccddee" stroke-width="0.8"/>

  <!-- Inner glass wall (silvered) -->
  <path d="M108,38 L108,232 Q108,248 150,248 Q192,248 192,232 L192,38 Z" fill="#1c3a64" stroke="#aaccee" stroke-width="2"/>
  <!-- Silver sheen on inner wall -->
  <path d="M108,38 L108,232" stroke="silver" stroke-width="3" opacity="0.6"/>
  <path d="M192,38 L192,232" stroke="silver" stroke-width="3" opacity="0.6"/>

  <!-- Contents (liquid) -->
  <path d="M112,42 L112,230 Q112,244 150,244 Q188,244 188,230 L188,42 Z" fill="#532407" opacity="0.7"/>
  <text x="130" y="145" fill="#bb7700" font-size="12" font-weight="bold">Hot liquid</text>

  <!-- Stopper -->
  <rect x="105" y="20" width="90" height="25" rx="6" fill="#8888aa" stroke="#555588" stroke-width="1.5"/>
  <text x="120" y="37" fill="#1e293b" font-size="11">Stopper</text>

  <!-- Annotation lines and labels (right side) -->
  <!-- Silvered walls -->
  <line x1="210" y1="120" x2="260" y2="100" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="262" y="103" fill="#336699" font-size="10">Silvered walls</text>
  <text x="262" y="114" fill="#336699" font-size="10">(reduce radiation)</text>

  <!-- Vacuum gap -->
  <line x1="205" y1="160" x2="260" y2="145" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="262" y="148" fill="#556677" font-size="10">Vacuum gap</text>
  <text x="262" y="159" fill="#556677" font-size="10">(eliminates conduction</text>
  <text x="262" y="170" fill="#556677" font-size="10"> &amp; convection)</text>

  <!-- Stopper annotation (left side) -->
  <line x1="105" y1="32" x2="60" y2="32" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="5" y="28" fill="#553355" font-size="10">Stopper</text>
  <text x="5" y="39" fill="#553355" font-size="10">(reduces</text>
  <text x="5" y="50" fill="#553355" font-size="10">conduction)</text>

  <!-- Outer casing annotation -->
  <line x1="80" y1="180" x2="40" y2="180" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="3" y="178" fill="#445566" font-size="10">Outer glass</text>
  <text x="3" y="189" fill="#445566" font-size="10">casing</text>
</svg>`
      }
    },
    {
      id: 'tbl-flask',
      type: 'comparisonTable',
      data: {
        caption: 'How each vacuum flask feature reduces heat transfer',
        headers: ['Feature', 'Heat transfer reduced', 'How it works'],
        rows: [
          ['Vacuum between double glass walls', 'Conduction AND convection', 'No particles in vacuum — neither conduction nor convection can occur'],
          ['Silvered (mirror) inner walls', 'Radiation', 'Shiny surface reflects infrared radiation back; reduces emission from inner wall'],
          ['Glass construction (poor conductor)', 'Conduction through walls', 'Glass has low thermal conductivity; limits conduction through the glass itself'],
          ['Tight-fitting stopper / cap', 'Conduction and convection', 'Prevents warm air from rising out the top; reduces conduction through the neck']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Vacuum Flask Questions',
        text: 'When asked how the vacuum flask reduces heat loss, identify the specific mechanism for each feature: vacuum → no conduction/convection; silvered walls → reduced radiation; stopper → reduced conduction/convection through neck. Award marks require linking the feature to the mechanism it eliminates.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The greenhouse effect: Earth absorbs solar radiation and re-emits IR; greenhouse gases (CO₂, CH₄) absorb and re-radiate this IR, warming the surface. Enhanced greenhouse effect → global warming. Sea breeze: land heats faster → warm air rises → cool sea air flows in. Vacuum flask: vacuum (eliminates conduction + convection), silvered walls (reduce radiation), stopper (reduces conduction).'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Greenhouse effect: solar in, IR re-emitted, absorbed by CO₂/CH₄; sea breeze via convection; vacuum flask — vacuum + silver + stopper = minimum heat transfer.',
    cues: [
      { id: 'cue-1', blockId: 'p-greenhouse', prompt: 'Explain the greenhouse effect, stating which types of radiation are involved and the role of greenhouse gases.' },
      { id: 'cue-2', blockId: 'tbl-seabreeze', prompt: 'Explain why a sea breeze blows from sea to land during the day, referring to specific heat capacity and convection.' },
      { id: 'cue-3', blockId: 'tbl-flask', prompt: 'Explain how the vacuum in a thermos flask reduces heat loss. Which mechanisms of heat transfer does the vacuum eliminate, and why?' },
      { id: 'cue-4', blockId: 'tbl-flask', prompt: 'What is the purpose of the silvered walls in a vacuum flask? Which method of heat transfer do they reduce?' }
    ]
  },
  evidence: []
};
