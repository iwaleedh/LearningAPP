export const note_olevel_biology_19_19_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/19 Organisms And Their Environment/19-1-2-food-chains-and-food-webs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of food chains and food webs, interpret trophic levels, and explain the effects of changes in population size on other organisms in a food web.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Food Chains', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Food Chain Structure',
        text: 'A <strong>food chain</strong> shows the feeding relationships between organisms and the direction of energy flow. Arrows point from the organism being eaten to the one eating it — the arrows represent the direction of <strong>energy transfer</strong>.<br/><br/><strong>Example:</strong><br/>Grass → Rabbit → Fox → Eagle<br/><br/>• <strong>Grass</strong> = Producer (trophic level 1)<br/>• <strong>Rabbit</strong> = Primary consumer (trophic level 2)<br/>• <strong>Fox</strong> = Secondary consumer (trophic level 3)<br/>• <strong>Eagle</strong> = Tertiary consumer (trophic level 4)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Food Webs', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'A <strong>food web</strong> is a network of interconnected food chains within an ecosystem. Most organisms eat more than one type of food and are eaten by more than one predator, so a food web is a more realistic model of feeding relationships than a single food chain.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'An example food web showing interconnected feeding relationships in a grassland ecosystem',
        svg: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-weight="bold" font-size="13" fill="#334155">Grassland Food Web</text>

  <!-- Producer: Grass -->
  <rect x="195" y="235" width="110" height="32" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="250" y="256" text-anchor="middle" font-weight="bold" font-size="11" fill="#14532d">Grass (Producer)</text>

  <!-- Primary consumers -->
  <rect x="50" y="165" width="90" height="30" rx="6" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="95" y="184" text-anchor="middle" font-size="11" fill="#14532d">Rabbit</text>

  <rect x="195" y="165" width="110" height="30" rx="6" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="250" y="184" text-anchor="middle" font-size="11" fill="#14532d">Grasshopper</text>

  <rect x="360" y="165" width="90" height="30" rx="6" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="405" y="184" text-anchor="middle" font-size="11" fill="#14532d">Vole</text>

  <!-- Secondary consumers -->
  <rect x="50" y="95" width="90" height="30" rx="6" fill="#2d2d72" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="95" y="114" text-anchor="middle" font-size="11" fill="#3730a3">Fox</text>

  <rect x="205" y="95" width="90" height="30" rx="6" fill="#2d2d72" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="250" y="114" text-anchor="middle" font-size="11" fill="#3730a3">Frog</text>

  <rect x="355" y="95" width="100" height="30" rx="6" fill="#2d2d72" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="405" y="114" text-anchor="middle" font-size="11" fill="#3730a3">Weasel</text>

  <!-- Tertiary consumer -->
  <rect x="195" y="30" width="110" height="32" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="250" y="50" text-anchor="middle" font-weight="bold" font-size="11" fill="#991b1b">Hawk (top)</text>

  <!-- Arrows: Grass to primary consumers -->
  <line x1="200" y1="235" x2="140" y2="195" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="250" y1="235" x2="250" y2="195" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="300" y1="235" x2="360" y2="195" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrowFW)"/>

  <!-- Arrows: Primary to secondary consumers -->
  <line x1="95" y1="165" x2="95" y2="125" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="120" y1="165" x2="210" y2="125" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="250" y1="165" x2="250" y2="125" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="380" y1="165" x2="130" y2="125" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="390" y1="165" x2="390" y2="125" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowFW)"/>

  <!-- Arrows: Secondary to Hawk -->
  <line x1="120" y1="95" x2="205" y2="62" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="250" y1="95" x2="250" y2="62" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrowFW)"/>
  <line x1="390" y1="95" x2="300" y2="62" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrowFW)"/>

  <defs>
    <marker id="arrowFW" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- Trophic level labels -->
  <text x="10" y="255" font-size="9" fill="#64748b">TL 1</text>
  <text x="10" y="185" font-size="9" fill="#64748b">TL 2</text>
  <text x="10" y="115" font-size="9" fill="#64748b">TL 3</text>
  <text x="10" y="50" font-size="9" fill="#64748b">TL 4</text>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects of Removing a Species', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Predator-Prey Relationships and Population Changes',
        text: 'Removing or reducing one species affects others in the food web:<br/><br/><strong>If foxes (predator) are removed:</strong><br/>→ Rabbit population increases (less predation)<br/>→ Grass decreases (more rabbits eating it)<br/><br/><strong>If grasshoppers (prey) are removed:</strong><br/>→ Frogs have less food → frog population decreases<br/>→ Hawk population may also decrease<br/>→ Grass may increase (less grazing)<br/><br/>These knock-on effects through the food web are called <strong>trophic cascades</strong>.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Trophic Levels Summary', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Trophic levels and their roles',
        headers: ['Trophic Level', 'Name', 'Feeding Role', 'Example'],
        rows: [
          ['1', 'Producer', 'Makes own food via photosynthesis', 'Grass, algae, trees'],
          ['2', 'Primary consumer', 'Eats producers (herbivore)', 'Rabbit, grasshopper, caterpillar'],
          ['3', 'Secondary consumer', 'Eats primary consumers', 'Fox, frog, small fish'],
          ['4', 'Tertiary consumer', 'Eats secondary consumers', 'Hawk, shark, eagle'],
          ['Any', 'Decomposer', 'Breaks down dead organic matter', 'Bacteria, fungi']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Food chains show linear feeding relationships with arrows indicating the direction of energy transfer. Food webs show interconnected food chains more realistically. Changing one population affects others through the web. Trophic levels define position in the feeding hierarchy: producer → primary → secondary → tertiary consumer.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Food chains: arrows show energy flow from eaten to eater. Food webs: network of chains. Removing one species has knock-on effects throughout the web.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'In a food chain, what do the arrows represent?',
        answer: 'The direction of energy flow — pointing from the organism being eaten towards the one eating it.'
      },
      {
        id: 'cue-2',
        blockId: 'svg-1',
        prompt: 'What is a food web, and why is it a better model than a single food chain?',
        answer: 'A food web is a network of interconnected food chains. It is more realistic because most organisms eat more than one type of food and have more than one predator.'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'If the fox population in a food web is greatly reduced, predict what would happen to the rabbit and grass populations.',
        answer: 'Rabbit population would increase (less predation). Grass population would decrease (more rabbits grazing).'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'What is the trophic level of a primary consumer, and what does it feed on?',
        answer: 'Trophic level 2. It feeds on producers (plants/algae).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_19_19_1;
