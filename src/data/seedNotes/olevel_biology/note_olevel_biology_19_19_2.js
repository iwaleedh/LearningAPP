export const note_olevel_biology_19_19_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/19 Organisms And Their Environment/19-1-3-carbon-cycle.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the carbon cycle, naming the key processes that move carbon between organisms and the atmosphere, and explain the greenhouse effect and its link to climate change.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Carbon Cycling Matters', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Carbon</strong> is the backbone of all organic molecules — carbohydrates, lipids, proteins, and DNA. Carbon moves continuously between living organisms and the non-living environment (atmosphere and oceans) in the <strong>carbon cycle</strong>. This cycling ensures carbon is never used up.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Processes in the Carbon Cycle', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Processes That Move Carbon',
        text: '<strong>1. Photosynthesis</strong> — Plants, algae, and phytoplankton absorb CO₂ from the atmosphere and convert it into organic carbon compounds (glucose). This removes CO₂ from the air.<br/><br/><strong>2. Respiration</strong> — All living organisms (plants, animals, decomposers) release CO₂ back into the atmosphere as they break down organic compounds for energy.<br/><br/><strong>3. Feeding (consumption)</strong> — Animals eat plants (or other animals), transferring organic carbon through the food chain.<br/><br/><strong>4. Decomposition</strong> — Decomposers (bacteria and fungi) break down dead organisms and waste, releasing CO₂ through their respiration. This returns carbon to the atmosphere and nutrients to the soil.<br/><br/><strong>5. Combustion (burning)</strong> — Burning fossil fuels (coal, oil, gas) and wood releases CO₂ that was locked away for millions of years. This is a major source of increased atmospheric CO₂.<br/><br/><strong>6. Fossilisation</strong> — Dead organisms may be compressed over millions of years under high pressure to form fossil fuels (coal, oil, natural gas), locking carbon away.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'The carbon cycle showing key processes that move carbon between the atmosphere, living organisms, and fossil fuels',
        svg: `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- Atmosphere box -->
  <rect x="155" y="5" width="210" height="36" rx="8" fill="#0c4a6e" stroke="#0284c7" stroke-width="2"/>
  <text x="260" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0c4a6e">Atmosphere</text>
  <text x="260" y="35" text-anchor="middle" font-size="10" fill="#0c4a6e">(CO₂)</text>

  <!-- Plant box -->
  <rect x="30" y="90" width="110" height="38" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="85" y="107" text-anchor="middle" font-weight="bold" font-size="11" fill="#14532d">Plants / Algae</text>
  <text x="85" y="120" text-anchor="middle" font-size="9" fill="#14532d">(Producers)</text>

  <!-- Animal box -->
  <rect x="200" y="90" width="120" height="38" rx="6" fill="#2d2d72" stroke="#3b82f6" stroke-width="2"/>
  <text x="260" y="107" text-anchor="middle" font-weight="bold" font-size="11" fill="#3730a3">Animals</text>
  <text x="260" y="120" text-anchor="middle" font-size="9" fill="#3730a3">(Consumers)</text>

  <!-- Decomposers box -->
  <rect x="140" y="190" width="130" height="36" rx="6" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <text x="205" y="207" text-anchor="middle" font-weight="bold" font-size="11" fill="#78350f">Decomposers</text>
  <text x="205" y="220" text-anchor="middle" font-size="9" fill="#78350f">(bacteria/fungi)</text>

  <!-- Fossil fuels box -->
  <rect x="375" y="155" width="120" height="38" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
  <text x="435" y="172" text-anchor="middle" font-weight="bold" font-size="10" fill="#1e293b">Fossil Fuels</text>
  <text x="435" y="185" text-anchor="middle" font-size="9" fill="#1e293b">(coal, oil, gas)</text>

  <!-- Arrows -->
  <!-- Photosynthesis: atm → plant -->
  <line x1="165" y1="30" x2="105" y2="90" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arrowCC)"/>
  <text x="110" y="60" text-anchor="middle" font-size="9" fill="#16a34a">Photosynthesis</text>
  <text x="110" y="70" text-anchor="middle" font-size="9" fill="#16a34a">(CO₂ absorbed)</text>

  <!-- Plant respiration: plant → atm -->
  <line x1="90" y1="90" x2="175" y2="40" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowRed)"/>
  <text x="120" y="53" text-anchor="middle" font-size="9" fill="#ef4444">Respiration</text>

  <!-- Feeding: plant → animal -->
  <line x1="140" y1="109" x2="200" y2="109" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowCC)"/>
  <text x="172" y="103" text-anchor="middle" font-size="9" fill="#3b82f6">Feeding</text>

  <!-- Animal respiration: animal → atm -->
  <line x1="265" y1="90" x2="265" y2="41" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowRed)"/>
  <text x="290" y="70" font-size="9" fill="#ef4444">Respiration</text>

  <!-- Dead organisms → decomposers -->
  <line x1="85" y1="128" x2="155" y2="190" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrowCC)"/>
  <line x1="260" y1="128" x2="220" y2="190" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrowCC)"/>
  <text x="120" y="175" font-size="9" fill="#d97706">Death/</text>
  <text x="120" y="185" font-size="9" fill="#d97706">waste</text>

  <!-- Decomposers → atmosphere -->
  <line x1="205" y1="190" x2="230" y2="41" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowRed)"/>
  <text x="250" y="150" font-size="9" fill="#ef4444">Decomposition</text>
  <text x="250" y="162" font-size="9" fill="#ef4444">(respiration)</text>

  <!-- Dead organisms → fossil fuels (fossilisation) -->
  <line x1="310" y1="128" x2="380" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" marker-end="url(#arrowGray)"/>
  <text x="370" y="143" font-size="8" fill="#64748b">Fossilisation</text>
  <text x="365" y="153" font-size="8" fill="#64748b">(millions of years)</text>

  <!-- Combustion: fossil fuels → atmosphere -->
  <line x1="435" y1="155" x2="360" y2="41" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>
  <text x="435" y="110" font-size="9" fill="#ef4444" font-weight="bold">Combustion</text>
  <text x="430" y="122" font-size="9" fill="#ef4444">(burning fuels)</text>

  <defs>
    <marker id="arrowCC" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#3b82f6"/>
    </marker>
    <marker id="arrowRed" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrowGray" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#94a3b8"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Greenhouse Effect and Climate Change', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Increased CO₂ and Climate Change',
        text: 'The <strong>greenhouse effect</strong> is a natural process — greenhouse gases (CO₂, methane, water vapour) in the atmosphere trap heat radiated from Earth\'s surface, keeping the planet warm enough for life.<br/><br/><strong>Enhanced greenhouse effect:</strong> Burning fossil fuels and deforestation increases atmospheric CO₂. More CO₂ traps more heat → <strong>global warming</strong> → climate change.<br/><br/><strong>Consequences:</strong> Rising sea levels (melting ice), more extreme weather events, loss of habitats and biodiversity, disruption of agriculture.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of carbon cycle processes',
        headers: ['Process', 'Direction of Carbon Movement', 'Organisms Involved'],
        rows: [
          ['Photosynthesis', 'CO₂ from atmosphere → organic carbon in plants', 'Plants, algae, phytoplankton'],
          ['Respiration', 'Organic carbon → CO₂ back to atmosphere', 'All living organisms'],
          ['Feeding', 'Carbon transferred along food chain', 'Animals (consumers)'],
          ['Decomposition', 'Dead organic matter → CO₂ to atmosphere + minerals to soil', 'Bacteria and fungi'],
          ['Combustion', 'Fossil fuels/wood → CO₂ to atmosphere', 'Human activity'],
          ['Fossilisation', 'Dead organisms → locked in fossil fuels over millions of years', 'Geological processes']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The carbon cycle moves carbon between the atmosphere and living organisms. Photosynthesis removes CO₂; respiration, decomposition, and combustion return it. Burning fossil fuels increases atmospheric CO₂, enhancing the greenhouse effect and causing global warming and climate change.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Carbon cycle: photosynthesis removes CO₂; respiration/decomposition/combustion return it. Increased CO₂ from burning fuels → enhanced greenhouse effect → climate change.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Name four processes that return CO₂ to the atmosphere in the carbon cycle.',
        answer: 'Respiration (by all organisms), decomposition, combustion (burning fossil fuels/wood), and volcanic activity.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'How does carbon enter living organisms from the atmosphere?',
        answer: 'Through photosynthesis — plants and algae absorb CO₂ and convert it into organic carbon compounds such as glucose.'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'Explain how burning fossil fuels contributes to climate change.',
        answer: 'Burning fossil fuels releases CO₂ that was locked away for millions of years. This increases the concentration of CO₂ in the atmosphere, enhancing the greenhouse effect and trapping more heat, leading to global warming and climate change.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'What is the role of decomposers in the carbon cycle?',
        answer: 'Decomposers (bacteria and fungi) break down dead organic matter through respiration, releasing CO₂ back to the atmosphere and returning minerals to the soil.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_19_19_2;
