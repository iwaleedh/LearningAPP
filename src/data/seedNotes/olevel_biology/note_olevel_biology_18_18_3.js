export const note_olevel_biology_18_18_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/18 Variation And Selection/18-1-4-selective-breeding.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define selective breeding, describe the process with examples, and evaluate its advantages and disadvantages compared to natural selection.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Selective Breeding?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition',
        text: '<strong>Selective breeding</strong> (artificial selection) is the process by which humans deliberately choose organisms with desirable characteristics to breed together, selecting offspring with the best traits over many generations. It is used in agriculture, animal husbandry, and horticulture to improve species for human use.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Steps of Selective Breeding', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Identify the desired trait</strong> — e.g. high milk yield in cows, disease resistance in wheat, friendly temperament in dogs.' },
          { text: '<strong>Choose parents with the desired characteristics</strong> — select individuals from the existing population that best show the trait.' },
          { text: '<strong>Breed the selected parents</strong> — allow them to reproduce, producing a new generation of offspring.' },
          { text: '<strong>Select the best offspring</strong> — from the offspring, choose those that best display the desired trait.' },
          { text: '<strong>Repeat over many generations</strong> — continue selecting and breeding. Over time, the desired characteristic becomes more pronounced in the population.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Examples of Selective Breeding', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Examples',
        text: '<strong>Cattle (Friesians):</strong> Bred for high milk yield. Females producing the most milk are selected and bred with bulls from high-yield lines. Over generations, average milk yield dramatically increased.<br/><br/><strong>Wheat (e.g. Norman Borlaug\'s semi-dwarf wheat):</strong> Bred for high grain yield, disease resistance, and short sturdy stems (to prevent lodging/falling over). Formed the basis of the Green Revolution, massively increasing global food supply.<br/><br/><strong>Dogs:</strong> All domestic dog breeds were selectively bred from wolves. Different breeds selected for specific traits — greyhounds for speed, border collies for herding instinct, labradors for gentle temperament.<br/><br/><strong>Roses and crop plants:</strong> Bred for larger flowers, larger fruit size (e.g. strawberries), or pest resistance.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Advantages and Disadvantages', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of selective breeding',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Improved crop yields — more food produced per hectare', 'Reduced genetic diversity — alleles lost from gene pool'],
          ['Disease-resistant varieties reduce crop loss', 'Inbreeding — closely related organisms more likely to share recessive disease alleles'],
          ['Livestock produce more meat, milk, eggs', 'Inbreeding depression — reduced health and fertility'],
          ['Useful medicines/traits produced (e.g. disease-resistant animals)', 'Animals may suffer — e.g. fast-growing broiler chickens develop leg problems'],
          ['Faster than waiting for natural selection', 'Cannot undo changes easily once genetic diversity lost']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Selective Breeding vs Natural Selection', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Selective breeding compared to natural selection',
        headers: ['Feature', 'Selective Breeding', 'Natural Selection'],
        rows: [
          ['Who selects?', 'Humans', 'The environment / survival pressures'],
          ['Goal', 'Human benefit (yield, traits)', 'Survival and reproduction in the wild'],
          ['Speed', 'Relatively fast (decades)', 'Very slow (thousands to millions of years)'],
          ['Genetic diversity', 'Decreases (narrows gene pool)', 'Maintains or increases over time'],
          ['Outcome', 'Improved traits for human use', 'Better adaptation to environment']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Selective breeding process over three generations to increase milk yield in cattle',
        svg: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Generation 1 -->
  <rect x="10" y="20" width="130" height="160" rx="8" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="75" y="38" text-anchor="middle" font-weight="bold" font-size="10" fill="#713f12">Generation 1</text>
  <!-- Cows with varying sizes (milk yield) -->
  <ellipse cx="45" cy="80" rx="22" ry="15" fill="#532407" stroke="#ea580c" stroke-width="1.2"/>
  <text x="45" y="84" text-anchor="middle" font-size="8" fill="#431407">Low</text>
  <ellipse cx="95" cy="75" rx="26" ry="18" fill="#44370a" stroke="#ca8a04" stroke-width="2"/>
  <text x="95" y="79" text-anchor="middle" font-size="8" fill="#713f12" font-weight="bold">HIGH</text>
  <ellipse cx="50" cy="130" rx="20" ry="13" fill="#532407" stroke="#ea580c" stroke-width="1.2"/>
  <text x="50" y="134" text-anchor="middle" font-size="8" fill="#431407">Med</text>
  <ellipse cx="100" cy="128" rx="23" ry="15" fill="#532407" stroke="#ea580c" stroke-width="1.2"/>
  <text x="100" y="132" text-anchor="middle" font-size="8" fill="#431407">Low</text>
  <text x="75" y="170" text-anchor="middle" font-size="9" fill="#4b5563">Select best &#x2714;</text>

  <!-- Arrow 1 -->
  <line x1="145" y1="100" x2="165" y2="100" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1"/>
    </marker>
  </defs>
  <text x="155" y="94" text-anchor="middle" font-size="8" fill="#6366f1">Breed</text>

  <!-- Generation 2 -->
  <rect x="170" y="20" width="130" height="160" rx="8" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="235" y="38" text-anchor="middle" font-weight="bold" font-size="10" fill="#713f12">Generation 2</text>
  <ellipse cx="205" cy="80" rx="25" ry="17" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="205" y="84" text-anchor="middle" font-size="8" fill="#713f12">High</text>
  <ellipse cx="260" cy="75" rx="27" ry="19" fill="#44370a" stroke="#ca8a04" stroke-width="2"/>
  <text x="260" y="79" text-anchor="middle" font-size="8" fill="#713f12" font-weight="bold">BEST</text>
  <ellipse cx="210" cy="130" rx="24" ry="16" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="210" y="134" text-anchor="middle" font-size="8" fill="#713f12">High</text>
  <ellipse cx="260" cy="128" rx="22" ry="14" fill="#532407" stroke="#ea580c" stroke-width="1.2"/>
  <text x="260" y="132" text-anchor="middle" font-size="8" fill="#431407">Med</text>
  <text x="235" y="170" text-anchor="middle" font-size="9" fill="#4b5563">Select best &#x2714;</text>

  <!-- Arrow 2 -->
  <line x1="305" y1="100" x2="325" y2="100" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="315" y="94" text-anchor="middle" font-size="8" fill="#6366f1">Breed</text>

  <!-- Generation 3 -->
  <rect x="330" y="20" width="130" height="160" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="395" y="38" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">Generation 3+</text>
  <ellipse cx="365" cy="78" rx="28" ry="20" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="365" y="82" text-anchor="middle" font-size="8" fill="#14532d" font-weight="bold">HIGH</text>
  <ellipse cx="425" cy="73" rx="30" ry="21" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="425" y="77" text-anchor="middle" font-size="8" fill="#14532d" font-weight="bold">HIGH</text>
  <ellipse cx="368" cy="130" rx="27" ry="19" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="368" y="134" text-anchor="middle" font-size="8" fill="#14532d" font-weight="bold">HIGH</text>
  <ellipse cx="425" cy="128" rx="28" ry="20" fill="#0a2e1a" stroke="#16a34a" stroke-width="2"/>
  <text x="425" y="132" text-anchor="middle" font-size="8" fill="#14532d" font-weight="bold">HIGH</text>
  <text x="395" y="170" text-anchor="middle" font-size="9" fill="#14532d">All high yield</text>
</svg>`
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Ethical Considerations',
        text: 'Selective breeding raises ethical concerns:<br/><br/>• Animals bred purely for production may suffer — e.g. broiler chickens grow so fast their legs cannot support their weight.<br/>• Highly inbred dog breeds suffer from hereditary diseases (e.g. hip dysplasia in German Shepherds, breathing problems in Bulldogs).<br/>• Reduction in genetic diversity leaves populations vulnerable to new diseases — if all plants are genetically similar, one pathogen could wipe out an entire crop.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Selective breeding is the process where humans choose organisms with desired traits to breed over many generations. It is used to improve crops (yield, disease resistance) and livestock (meat, milk, eggs). It operates faster than natural selection but reduces genetic diversity and can cause inbreeding problems.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Selective breeding: humans choose best organisms to breed over generations. Improves yield/traits but reduces genetic diversity and can cause inbreeding.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define selective breeding.',
        answer: 'Humans deliberately choose organisms with desirable characteristics to breed together, selecting offspring with the best traits over many generations.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Outline the steps of selective breeding.',
        answer: '1. Identify desired trait. 2. Select parents with that trait. 3. Breed them. 4. Select best offspring. 5. Repeat over many generations.'
      },
      {
        id: 'cue-3',
        blockId: 'call-2',
        prompt: 'Give two examples of selective breeding in agriculture and state the trait selected for.',
        answer: 'Cattle bred for high milk yield (e.g. Friesians); wheat bred for high grain yield and disease resistance (semi-dwarf varieties in the Green Revolution).'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'State two disadvantages of selective breeding.',
        answer: 'Reduced genetic diversity (narrows the gene pool) and inbreeding (closely related individuals share recessive disease alleles, leading to inbreeding depression).'
      },
      {
        id: 'cue-5',
        blockId: 'tbl-2',
        prompt: 'How does selective breeding differ from natural selection in terms of who selects and the timescale involved?',
        answer: 'In selective breeding, humans do the selecting (for human benefit) over decades. In natural selection, the environment selects (organisms best adapted to survive) over thousands to millions of years.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_18_18_3;
