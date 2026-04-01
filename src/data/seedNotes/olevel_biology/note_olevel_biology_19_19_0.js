export const note_olevel_biology_19_19_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/19 Organisms And Their Environment/19-1-1-energy-flow-in-ecosystems.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how energy flows through ecosystems, explain why energy is lost at each trophic level, and interpret pyramids of numbers, biomass, and energy.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Feeding Roles in an Ecosystem', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Producers, Consumers and Decomposers',
        text: '<strong>Producers:</strong> Photosynthetic organisms (plants, algae, phytoplankton) that convert sunlight energy into organic compounds (glucose). They form the base of all food chains.<br/><br/><strong>Primary consumers:</strong> Herbivores that eat producers (e.g. rabbits, caterpillars, deer).<br/><br/><strong>Secondary consumers:</strong> Carnivores or omnivores that eat primary consumers (e.g. foxes, frogs, small fish).<br/><br/><strong>Tertiary consumers:</strong> Carnivores that eat secondary consumers (e.g. hawks, sharks, lions).<br/><br/><strong>Decomposers:</strong> Bacteria and fungi that break down dead organic matter, releasing minerals back into the soil and CO₂ into the air.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Energy Entry and Loss', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Energy enters an ecosystem through <strong>photosynthesis</strong>. Sunlight is captured by producers and stored as chemical energy in organic molecules. However, at each trophic level (feeding level), <strong>most energy is lost</strong> and is not available to the next level.' }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How is Energy Lost at Each Trophic Level?',
        text: '• <strong>Respiration:</strong> Most of the energy an organism takes in is used for cellular respiration to power life processes. This energy is released as <strong>heat</strong> and lost to the environment.<br/>• <strong>Excretion and egestion:</strong> Some energy is lost in urine and faeces — these are not fully digested and not passed on to the next consumer.<br/>• <strong>Movement:</strong> Energy used in movement is released as heat.<br/>• <strong>Inedible parts:</strong> Bones, shells, hair — not eaten, so energy in these parts is not transferred.<br/><br/>On average, only about <strong>10%</strong> of the energy at one trophic level is transferred to the next.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Why Food Chains Are Short', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'Because only ~10% of energy is transferred between each trophic level, by the 4th or 5th link there is so little energy remaining that it cannot support another consumer population. This is why food chains rarely have more than <strong>4–5 links</strong>.' }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Ecological Pyramids', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of ecological pyramids',
        headers: ['Pyramid Type', 'What it shows', 'Always pyramid-shaped?', 'Notes'],
        rows: [
          ['Pyramid of numbers', 'Number of individuals at each trophic level', 'No — can be inverted (e.g. one tree supports many insects)', 'Simplest but least informative'],
          ['Pyramid of biomass', 'Total dry mass of all organisms at each trophic level', 'Usually yes (except aquatic with fast-reproducing phytoplankton)', 'More meaningful than numbers'],
          ['Pyramid of energy', 'Energy stored at each trophic level (kJ/m²/year)', 'Always pyramid-shaped', 'Most accurate representation of energy flow']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Energy flow through a food chain: only ~10% of energy passes to the next trophic level; the rest is lost as heat from respiration',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Sun -->
  <circle cx="50" cy="50" r="28" fill="#44370a" stroke="#d97706" stroke-width="2"/>
  <text x="50" y="44" text-anchor="middle" font-weight="bold" font-size="10" fill="#78350f">Sun</text>
  <text x="50" y="57" text-anchor="middle" font-size="9" fill="#78350f">100%</text>
  <!-- Arrow sun to producer -->
  <line x1="80" y1="50" x2="115" y2="50" stroke="#d97706" stroke-width="2" marker-end="url(#arrowE)"/>
  <defs>
    <marker id="arrowE" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Producer -->
  <rect x="120" y="30" width="80" height="40" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="160" y="50" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">Producer</text>
  <text x="160" y="62" text-anchor="middle" font-size="9" fill="#14532d">1000 kJ</text>

  <!-- Heat loss from producer -->
  <line x1="160" y1="30" x2="160" y2="10" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="162" y="8" font-size="9" fill="#ef4444">~900 kJ heat</text>

  <!-- Arrow to primary consumer -->
  <line x1="200" y1="50" x2="235" y2="50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowE)"/>
  <text x="217" y="45" text-anchor="middle" font-size="9" fill="#3b82f6">10%</text>

  <!-- Primary consumer -->
  <rect x="240" y="30" width="80" height="40" rx="6" fill="#2d2d72" stroke="#3b82f6" stroke-width="2"/>
  <text x="280" y="47" text-anchor="middle" font-weight="bold" font-size="10" fill="#3730a3">1° Consumer</text>
  <text x="280" y="62" text-anchor="middle" font-size="9" fill="#3730a3">100 kJ</text>

  <!-- Heat loss from 1° consumer -->
  <line x1="280" y1="30" x2="280" y2="10" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="282" y="8" font-size="9" fill="#ef4444">~90 kJ heat</text>

  <!-- Arrow to secondary consumer -->
  <line x1="320" y1="50" x2="355" y2="50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowE)"/>
  <text x="337" y="45" text-anchor="middle" font-size="9" fill="#3b82f6">10%</text>

  <!-- Secondary consumer -->
  <rect x="360" y="30" width="80" height="40" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="400" y="47" text-anchor="middle" font-weight="bold" font-size="10" fill="#991b1b">2° Consumer</text>
  <text x="400" y="62" text-anchor="middle" font-size="9" fill="#991b1b">10 kJ</text>

  <!-- Heat loss from 2° consumer -->
  <line x1="400" y1="30" x2="400" y2="10" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="402" y="8" font-size="9" fill="#ef4444">~9 kJ heat</text>

  <!-- Pyramid of biomass below -->
  <text x="250" y="110" text-anchor="middle" font-weight="bold" font-size="12" fill="#334155">Pyramid of Biomass</text>
  <!-- Producer bar -->
  <rect x="80" y="120" width="340" height="28" rx="4" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="250" y="139" text-anchor="middle" font-size="10" fill="#14532d" font-weight="bold">Producers (largest biomass)</text>
  <!-- Primary consumer bar -->
  <rect x="130" y="152" width="240" height="24" rx="4" fill="#2d2d72" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="250" y="168" text-anchor="middle" font-size="10" fill="#3730a3">Primary consumers</text>
  <!-- Secondary consumer bar -->
  <rect x="170" y="180" width="160" height="22" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
  <text x="250" y="195" text-anchor="middle" font-size="10" fill="#991b1b">Secondary consumers</text>
  <!-- Tertiary consumer bar -->
  <rect x="205" y="206" width="90" height="20" rx="4" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="250" y="220" text-anchor="middle" font-size="9" fill="#78350f">Tertiary consumers</text>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Energy enters ecosystems via photosynthesis by producers. At each trophic level, most energy (~90%) is lost as heat through respiration, excretion, and egestion. Only ~10% is transferred to the next level, which is why food chains have at most 4–5 links. Pyramids of energy are always pyramid-shaped; pyramids of numbers can be inverted.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Energy enters via photosynthesis. ~10% transferred per trophic level; rest lost as heat. Pyramids: energy always pyramid-shaped; numbers can invert.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-2',
        prompt: 'State three ways energy is lost between trophic levels.',
        answer: 'Respiration (heat), excretion/egestion (faeces and urine), and inedible parts (e.g. bones, shells) not consumed.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Why do food chains rarely have more than four or five links?',
        answer: 'Only ~10% of energy is transferred at each trophic level. After 4–5 links, so little energy remains that it cannot support another consumer population.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Which type of ecological pyramid is always pyramid-shaped, and why?',
        answer: 'The pyramid of energy, because energy is always lost as you move up trophic levels — the total energy available always decreases.'
      },
      {
        id: 'cue-4',
        blockId: 'call-1',
        prompt: 'What is the role of decomposers in an ecosystem?',
        answer: 'Decomposers (bacteria and fungi) break down dead organic matter, releasing minerals back into the soil and CO₂ into the air, making nutrients available for producers.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_19_19_0;
