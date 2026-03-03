export const note_biology_4_6_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand decomposition processes by saprotrophic microorganisms, conditions affecting decomposition rate, and the role of microbes in carbon and nitrogen cycling.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Decomposition and Nutrient Cycling', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Decomposition is the breakdown of dead organic matter (plants, animals, faeces) into simpler molecules. Saprotrophic microorganisms (bacteria and fungi) drive this process, playing a critical role in ecosystem health and nutrient cycling. Without decomposers, dead organic matter would accumulate and nutrients would be locked away from living organisms.'
      },
      terms: []
    },
    {
      id: 'h-sapro-mech',
      type: 'heading',
      data: { text: 'Saprotrophic Nutrition Mechanism', level: 2 },
      terms: []
    },
    {
      id: 'p-sapro-mech-1',
      type: 'paragraph',
      data: {
        text: 'Saprotrophic bacteria and fungi (saprophytes) feed on dead organic matter through extracellular digestion. They secrete powerful hydrolytic enzymes (exoenzymes) that break down complex polymers into smaller molecules that can be absorbed.'
      },
      terms: []
    },
    {
      id: 'list-sapro-enzymes',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Cellulases: Break down cellulose (plant cell walls) into glucose.',
          'Amylases: Break down starch (plant storage) into glucose.',
          'Proteases: Break down proteins into amino acids.',
          'Lipases: Break down fats (lipids) into glycerol and fatty acids.',
          'Nucleases: Break down nucleic acids into nucleotides and bases.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-sapro',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Saprotrophic Decomposition Steps',
        text: 'Dead matter → secreted exoenzymes → extracellular breakdown into small molecules → absorption by microorganism → intracellular respiration → energy and biosynthesis. Example: Dead leaf contains cellulose (insoluble) → fungal cellulase → glucose (soluble) → fungus absorbs glucose → uses for growth and respiration.'
      },
      terms: []
    },
    {
      id: 'h-conditions',
      type: 'heading',
      data: { text: 'Factors Affecting Decomposition Rate', level: 2 },
      terms: []
    },
    {
      id: 'p-conditions-intro',
      type: 'paragraph',
      data: {
        text: 'Decomposition rate varies with environmental conditions. Microorganisms are highly dependent on temperature, moisture, oxygen, and pH.'
      },
      terms: []
    },
    {
      id: 'list-conditions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Temperature: Higher temperature increases enzyme activity and microbial metabolic rate (Q₁₀ ≈ 2, doubling rate for every 10degreesC rise). Optimal temperature ~25–35degreesC for most saprophytes. Cold slows decomposition (permafrost in tundra preserves mammoth carcasses for millennia). Heat above 50degreesC denatures microbial enzymes.',
          'Moisture: Microorganisms require water for metabolism and enzyme activity. Decomposition is slowest in dry environments (deserts, mummified remains). Excessive moisture (waterlogging) can reduce oxygen availability and slow aerobic decomposition.',
          'Oxygen: Most saprophytic decomposition is aerobic (fast, releases CO₂). Anaerobic decomposition (without oxygen) occurs in waterlogged soils, marshes, and anaerobic digesters; produces methane (CH₄) instead of CO₂.',
          'pH: Most bacteria prefer neutral pH (~7); fungi prefer slightly acidic pH (~5–6). Acidic forest soils with high fungal activity decompose faster than neutral soils.',
          'Nutrient availability: Carbon-rich but nitrogen-poor material (e.g. straw, sawdust) decomposes slowly. Balanced C:N ratio (~25:1) promotes rapid decomposition.'
        ]
      },
      terms: []
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        headers: ['Factor', 'Optimal Condition', 'Effect on Decomposition', 'Example Impact'],
        rows: [
          ['Temperature', '25–35degreesC (mesophilic)', 'Higher temp → faster; Q₁₀ ≈ 2', 'Compost pile (37degreesC) decomposes faster than forest floor (15degreesC)'],
          ['Moisture', 'Moist (60–80% water content)', 'Required for microbial activity; excess causes anaerobiosis', 'Rainforest (wet) vs desert (dry) decomposition rates differ 100×'],
          ['Oxygen', 'Aerobic (O₂ present)', 'Aerobic >> anaerobic rate; produces CO₂ vs CH₄', 'Composting aerates to speed decomposition; bogs lack O₂, preserve peat'],
          ['pH', 'Neutral to slightly acidic (pH 5–7)', 'Bacteria prefer neutral; fungi prefer acidic', 'Acidic soils decompose faster (more fungal activity)'],
          ['C:N ratio', 'Balanced ~25:1', 'Nitrogen-poor materials decompose slowly', 'Fresh grass (low C:N) decomposes faster than dry straw (high C:N)']
        ],
        caption: 'Factors affecting decomposition rate in microorganisms'
      },
      terms: []
    },
    {
      id: 'h-carbon-cycle',
      type: 'heading',
      data: { text: 'Carbon Cycle and Decomposition', level: 2 },
      terms: []
    },
    {
      id: 'p-carbon-cycle-1',
      type: 'paragraph',
      data: {
        text: 'The carbon cycle describes the movement of carbon between the atmosphere, living organisms, and the geosphere. Decomposition is a critical step: it releases carbon fixed during photosynthesis back into the atmosphere as CO₂.'
      },
      terms: []
    },
    {
      id: 'list-carbon-cycle',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Fixation (photosynthesis): Green plants fix CO₂ from the atmosphere into organic compounds (glucose, cellulose, proteins).',
          'Respiration (release): Plants and animals respire, releasing CO₂ back to the atmosphere.',
          'Decomposition (mineralisation): Dead organic matter is broken down by saprotrophs; carbon is mineralised (converted to inorganic form, CO₂) and released to the atmosphere.',
          'Combustion: Burning fossil fuels (coal, oil, gas) releases ancient carbon as CO₂, accelerating carbon cycle.',
          'Fossilisation: In anaerobic conditions, organic matter may be buried and converted to fossil fuels (coal, petroleum) rather than decomposed. This sequesters carbon for geological timescales.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-carbon',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg"><defs><style>.box { fill: #f0fdf4; stroke: #16a34a; stroke-width: 2; } .arrow { stroke: #333; stroke-width: 2; fill: none; } .label { font-size: 12px; font-weight: bold; } .process { font-size: 10px; font-style: italic; }</style><defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#333"/></marker></defs></defs><text x="250" y="25" text-anchor="middle" class="label">CARBON CYCLE</text><circle cx="100" cy="80" r="50" fill="#87ceeb" stroke="#333" stroke-width="2"/><text x="100" y="85" text-anchor="middle" class="label">Atmosphere</text><text x="100" y="100" text-anchor="middle" style="font-size: 11px;">CO₂</text><rect class="box" x="280" y="50" width="120" height="60" rx="5"/><text x="340" y="75" text-anchor="middle" class="label">Plants</text><text x="340" y="92" text-anchor="middle" style="font-size: 10px;">(Photosynthesis)</text><path class="arrow" d="M 150 80 L 280 80" marker-end="url(#arrowhead)"/><text x="210" y="75" class="process">Fixation</text><path class="arrow" d="M 340 110 L 180 150" marker-end="url(#arrowhead)"/><text x="260" y="125" class="process">Plant respiration</text><rect class="box" x="30" y="180" width="120" height="60" rx="5"/><text x="90" y="205" text-anchor="middle" class="label">Dead Organic</text><text x="90" y="225" text-anchor="middle" class="label">Matter</text><path class="arrow" d="M 90 110 L 90 180" marker-end="url(#arrowhead)"/><text x="60" y="150" class="process">Shedding</text><path class="arrow" d="M 150 210 L 100 80" marker-end="url(#arrowhead)"/><text x="140" y="140" class="process">Decomposition</text><text x="140" y="160" class="process">(Mineralisation)</text><rect class="box" x="280" y="180" width="120" height="60" rx="5"/><text x="340" y="205" text-anchor="middle" class="label">Animals</text><text x="340" y="225" text-anchor="middle" style="font-size: 10px;">(Respiration, Decay)</text><path class="arrow" d="M 340 110 L 340 180" marker-end="url(#arrowhead)"/><text x="360" y="150" class="process">Feeding</text><path class="arrow" d="M 280 210 L 150 210" marker-end="url(#arrowhead)"/><text x="210" y="225" class="process">Decomposition</text></svg>',
        caption: 'Carbon cycle: fixation (photosynthesis) → respiration → decomposition (mineralisation) → CO₂ release'
      },
      terms: []
    },
    {
      id: 'h-nitrogen-cycle',
      type: 'heading',
      data: { text: 'Nitrogen Cycle and Decomposition Link', level: 2 },
      terms: []
    },
    {
      id: 'p-nitrogen-cycle-1',
      type: 'paragraph',
      data: {
        text: 'The nitrogen cycle is the cycling of nitrogen through the biosphere. Decomposition plays a critical role: saprotrophic bacteria break down dead proteins and nucleic acids, releasing inorganic nitrogen (ammonia, NO₃⁻) that plants can reabsorb.'
      },
      terms: []
    },
    {
      id: 'list-nitrogen-cycle',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Nitrogen fixation: Atmospheric N₂ (inert) is fixed by nitrogen-fixing bacteria (Azotobacter, Rhizobium) into ammonia (NH₃), which can be incorporated into organic compounds.',
          'Ammonification (decomposition): Saprotrophic bacteria break down dead proteins and nucleic acids, releasing ammonia (NH₃) and ammonium (NH₄+).',
          'Nitrification: Nitrifying bacteria (Nitrosomonas, Nitrobacter) oxidise ammonia → nitrite (NO₂⁻) → nitrate (NO₃⁻). Plants absorb NO₃⁻.',
          'Denitrification: Denitrifying bacteria reduce NO₃⁻ back to N₂ (gas), returning nitrogen to the atmosphere. This closes the cycle but also removes bioavailable nitrogen.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-nitrogen',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nitrogen Cycle and Microbes',
        text: 'Decomposition (ammonification) releases NH₃ from dead organic matter. Nitrifying bacteria convert NH₃ → NO₃⁻ (plant-available form). Nitrogen-fixing bacteria capture N₂ from atmosphere. Denitrifying bacteria release N₂ back to atmosphere. Saprotrophs are essential for cycling nitrogen through ecosystems.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Saprotrophic microbes secrete exoenzymes (amylase, protease, cellulase, lipase) to break down dead matter extracellularly, then absorb small molecules. Decomposition rate depends on temperature (Q₁₀ ≈ 2), moisture, O₂ (aerobic faster), pH, and C:N ratio. Decomposition releases carbon as CO₂ (carbon cycle) and nitrogen as ammonia (nitrogen cycle), making nutrients available to living organisms.',
        apply: 'A compost pile with fresh grass (C:N ~15:1) and dry straw (C:N ~100:1) is created. Which decomposes faster and why? How would adding nitrogen-rich manure speed decomposition? (Balanced C:N ~25:1 is optimal)',
        analyze: 'Why does anaerobic decomposition in swamps produce methane (CH₄) instead of carbon dioxide (CO₂)? Compare electron acceptors in aerobic vs anaerobic respiration.',
        evaluate: 'Permafrost soils in the Arctic contain vast amounts of organic matter. Climate warming melts permafrost → increased decomposition → increased CO₂/CH₄ release → positive feedback. How could this affect global warming? Why is it a concern?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain saprotrophic nutrition and extracellular digestion', checked: false },
          { text: 'I can name five types of exoenzymes and what they digest', checked: false },
          { text: 'I understand how temperature affects decomposition (Q₁₀)', checked: false },
          { text: 'I know why moisture is essential for microbial decomposition', checked: false },
          { text: 'I understand aerobic vs anaerobic decomposition products', checked: false },
          { text: 'I can explain the role of pH and C:N ratio in decomposition', checked: false },
          { text: 'I can describe the carbon cycle and decomposition\'s role', checked: false },
          { text: 'I understand the nitrogen cycle and ammonification', checked: false },
          { text: 'I know what nitrification and denitrification are', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Saprotrophic bacteria and fungi decompose dead matter via extracellular exoenzymes (amylase, protease, cellulase, lipase) that break down polymers. Decomposition rate increases with temperature (Q₁₀ ≈ 2), moisture, aerobic conditions (O₂), slightly acidic pH, and balanced C:N ~25:1. Carbon cycle: photosynthesis (fixation) → respiration/decomposition (mineralisation) → CO₂ release. Nitrogen cycle: fixation (N₂ → NH₃) → decomposition/ammonification (organic N → NH₃) → nitrification (NH₃ → NO₃⁻) → plant uptake → denitrification (NO₃⁻ → N₂). Saprotrophs are essential for nutrient cycling.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-sapro-enzymes', prompt: 'Name five exoenzymes secreted by saprotrophs and what each digests.' },
      { id: 'cue-2', blockId: 'list-conditions', prompt: 'How does temperature affect decomposition rate? What is Q₁₀?' },
      { id: 'cue-3', blockId: 'p-carbon-cycle-1', prompt: 'Describe the carbon cycle and decomposition\'s role in mineralisation.' },
      { id: 'cue-4', blockId: 'list-nitrogen-cycle', prompt: 'Explain nitrogen fixation, ammonification, nitrification, and denitrification.' },
      { id: 'cue-5', blockId: 'callout-nitrogen', prompt: 'Why is ammonification (decomposition) essential for the nitrogen cycle?' }
    ],
    summaryText: 'Exoenzymes: amylase (starch), cellulase (cellulose), protease (protein), lipase (fats). Decomposition factors: temperature (Q₁₀≈2, higher=faster), moisture (required), O₂ (aerobic>anaerobic), pH (neutral-acidic), C:N ~25:1 (optimal). Carbon cycle: fixation → respiration/decomposition (CO₂). Nitrogen cycle: fixation (N₂→NH₃) → ammonification (organic N→NH₃) → nitrification (NH₃→NO₃⁻) → plant uptake → denitrification (NO₃⁻→N₂).',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Microbial Ecology and Nutrient Cycling', detail: 'Paul EA. Soil Microbiology, Ecology, and Biochemistry (4th ed.). Academic Press', year: '2015', source: 'Academic Press', tags: ['decomposition', 'saprotrophs', 'carbon cycle', 'nitrogen cycle'] }
  ]
};
