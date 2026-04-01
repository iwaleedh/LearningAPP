export const note_olevel_biology_19_19_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/19 Organisms And Their Environment/19-4-1-nitrogen-cycle.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the nitrogen cycle including the roles of bacteria in nitrogen fixation, nitrification, denitrification, and decomposition.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why is Nitrogen Important?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Nitrogen is an essential element for making <strong>proteins</strong> and <strong>DNA</strong> in all living organisms. The atmosphere is 78% nitrogen gas (N₂), but plants <strong>cannot use N₂ directly</strong>. Nitrogen must first be converted into soluble <strong>nitrates (NO₃⁻)</strong> or <strong>ammonium ions (NH₄⁺)</strong> that plant roots can absorb.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Processes in the Nitrogen Cycle', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Processes and organisms in the nitrogen cycle',
        headers: ['Process', 'What happens', 'Carried out by'],
        rows: [
          ['Nitrogen fixation', 'N₂ gas converted to ammonium compounds (NH₄⁺)', 'Nitrogen-fixing bacteria (e.g. Rhizobium in root nodules; free-living Azotobacter); lightning'],
          ['Nitrification', 'Ammonium → nitrites → nitrates (NO₃⁻)', 'Nitrifying bacteria in soil'],
          ['Assimilation', 'Plants absorb nitrates and convert them to amino acids/proteins', 'Plants'],
          ['Decomposition', 'Dead organic matter broken down → ammonium compounds', 'Decomposers (bacteria and fungi)'],
          ['Denitrification', 'Nitrates → N₂ gas — returns nitrogen to atmosphere', 'Denitrifying bacteria (in waterlogged/anaerobic soil)']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'The nitrogen cycle — flow of nitrogen through the environment',
        svg: `<svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="520" height="360" fill="#1c3a64" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">The Nitrogen Cycle</text>
  <!-- Atmosphere -->
  <rect x="160" y="35" width="200" height="40" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="260" y="59" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Atmospheric N₂</text>
  <!-- Soil nitrates -->
  <rect x="160" y="200" width="200" height="40" rx="8" fill="#0a3020" stroke="#16a34a" stroke-width="2"/>
  <text x="260" y="224" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Nitrates in soil (NO₃⁻)</text>
  <!-- Ammonium -->
  <rect x="30" y="270" width="170" height="40" rx="8" fill="#44370a" stroke="#b45309" stroke-width="2"/>
  <text x="115" y="294" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Ammonium (NH₄⁺)</text>
  <!-- Plants -->
  <rect x="320" y="130" width="160" height="40" rx="8" fill="#0a2e1a" stroke="#059669" stroke-width="2"/>
  <text x="400" y="154" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Plant proteins</text>
  <!-- Arrows with labels -->
  <!-- N fixation: atmos → ammonium -->
  <line x1="170" y1="75" x2="115" y2="268" stroke="#1d4ed8" stroke-width="2" marker-end="url(#n1)"/>
  <text x="95" y="175" font-size="10" fill="#1d4ed8">Nitrogen fixation</text>
  <text x="95" y="188" font-size="10" fill="#1d4ed8">(Rhizobium/lightning)</text>
  <!-- Nitrification: ammonium → nitrates -->
  <line x1="200" y1="270" x2="220" y2="242" stroke="#16a34a" stroke-width="2" marker-end="url(#n2)"/>
  <text x="195" y="260" font-size="10" fill="#16a34a">Nitrification</text>
  <!-- Assimilation: nitrates → plants -->
  <line x1="320" y1="215" x2="360" y2="172" stroke="#059669" stroke-width="2" marker-end="url(#n3)"/>
  <text x="340" y="200" font-size="10" fill="#059669">Assimilation</text>
  <!-- Decomposition: plants → ammonium -->
  <line x1="320" y1="150" x2="200" y2="278" stroke="#b45309" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#n4)"/>
  <text x="220" y="230" font-size="10" fill="#b45309">Decomposition</text>
  <!-- Denitrification: nitrates → N2 -->
  <line x1="260" y1="200" x2="260" y2="77" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#n5)"/>
  <text x="268" y="150" font-size="10" fill="#ef4444">Denitrification</text>
  <!-- Feeding: plants eaten -->
  <text x="370" y="116" font-size="10" fill="#065f46">↑ Feeding</text>
  <defs>
    <marker id="n1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#1d4ed8"/></marker>
    <marker id="n2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#16a34a"/></marker>
    <marker id="n3" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#059669"/></marker>
    <marker id="n4" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#b45309"/></marker>
    <marker id="n5" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nitrogen Fixation — Root Nodules',
        text: '<strong>Rhizobium</strong> bacteria live in <strong>root nodules</strong> of leguminous plants (peas, beans, clover). They fix atmospheric N₂ into ammonium compounds. The plant provides carbohydrates for the bacteria; the bacteria provide fixed nitrogen for the plant — a <strong>mutualistic relationship</strong>.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: '<strong>Denitrification</strong> (nitrates → N₂) happens in <strong>waterlogged/anaerobic soil</strong> — this is bad for agriculture as it removes nitrogen from the soil. <strong>Nitrification</strong> (ammonium → nitrates) is the opposite process, carried out in well-aerated soil — this is beneficial to plants.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The nitrogen cycle converts atmospheric N₂ into usable nitrates via nitrogen fixation and nitrification (by bacteria), then plants assimilate nitrates into proteins. Decomposers return nitrogen to ammonium. Denitrifying bacteria return N₂ to the atmosphere.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Nitrogen cycle: fixation (N₂ → NH₄⁺, by Rhizobium/lightning) → nitrification (NH₄⁺ → NO₃⁻) → assimilation by plants → decomposition → denitrification (NO₃⁻ → N₂).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What is nitrogen fixation and which organisms carry it out?', answer: 'Nitrogen fixation is the conversion of atmospheric N₂ into ammonium compounds. Carried out by nitrogen-fixing bacteria (e.g. Rhizobium in root nodules) and by lightning.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What is the relationship between Rhizobium bacteria and leguminous plants?', answer: 'A mutualistic relationship: the bacteria fix nitrogen for the plant, while the plant supplies carbohydrates to the bacteria. Both benefit.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Under what conditions does denitrification occur, and why is it harmful to agriculture?', answer: 'Denitrification occurs in waterlogged (anaerobic) soil. It converts nitrates back to N₂ gas, removing nitrogen from the soil and reducing the nitrogen available to plants.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_19_19_3;
