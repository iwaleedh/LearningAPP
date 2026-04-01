export const note_olevel_biology_18_18_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/18 Variation And Selection/18-1-1-variation-in-populations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the differences between continuous and discontinuous variation and explain their causes, including the roles of genes and the environment.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Variation?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Variation</strong> is the differences that exist between individuals of the same species. No two organisms (except identical twins) are genetically identical. Variation arises from two main sources: <strong>genetic causes</strong> and <strong>environmental causes</strong>.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Causes of Variation', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Genetic Causes of Variation',
        text: '<strong>Mutation:</strong> A random change in the DNA sequence. Mutations are the ultimate source of new alleles and new genetic variation.<br/><br/><strong>Sexual reproduction / meiosis:</strong> During meiosis, homologous chromosomes cross over and exchange segments (crossing over), and chromosomes are sorted randomly into gametes (independent assortment). Fertilisation then combines alleles from two different parents. This produces enormous genetic diversity in offspring.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Environmental Causes of Variation',
        text: 'The environment can alter how genes are expressed:<br/><br/>• <strong>Diet:</strong> Better nutrition leads to greater height and body mass.<br/>• <strong>Sunlight:</strong> UV exposure increases melanin production, darkening skin.<br/>• <strong>Exercise:</strong> Increases muscle mass and cardiovascular fitness.<br/>• <strong>Disease:</strong> Can stunt growth or alter development.<br/><br/>Most characteristics are influenced by <em>both</em> genes and the environment.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Types of Variation', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Continuous vs Discontinuous Variation',
        text: '<strong>Continuous variation:</strong> A range of values with no distinct groups — individuals grade into one another. Controlled by many genes (polygenic) plus environmental influences. Examples: height, mass, foot size, skin colour, intelligence.<br/><br/><strong>Discontinuous variation:</strong> Distinct, separate categories with no intermediate forms. Controlled by one or a few genes. Environmental influence is little or none. Examples: ABO blood group (A, B, AB, O), ability to roll tongue (can / cannot), sex (male / female), ability to taste PTC.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparing continuous and discontinuous variation',
        headers: ['Feature', 'Continuous', 'Discontinuous'],
        rows: [
          ['Nature of values', 'Range with no gaps', 'Distinct, separate categories'],
          ['Intermediate forms', 'Yes', 'No'],
          ['Genes involved', 'Many (polygenic)', 'One or few'],
          ['Environmental influence', 'Significant', 'Little or none'],
          ['Graph type', 'Normal distribution (bell curve)', 'Bar chart'],
          ['Examples', 'Height, mass, skin colour', 'Blood group, tongue rolling, sex']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Graphical Representation', level: 2 }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Graphs showing continuous variation (bell curve, left) and discontinuous variation (bar chart, right)',
        svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Continuous variation graph -->
  <rect x="10" y="10" width="230" height="180" rx="6" fill="#1c3a64" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="125" y="28" text-anchor="middle" font-weight="bold" font-size="11" fill="#3730a3">Continuous Variation</text>
  <!-- Axes -->
  <line x1="35" y1="160" x2="225" y2="160" stroke="#334155" stroke-width="1.5"/>
  <line x1="35" y1="40" x2="35" y2="160" stroke="#334155" stroke-width="1.5"/>
  <text x="130" y="178" text-anchor="middle" font-size="10" fill="#334155">Height (cm)</text>
  <text x="14" y="105" text-anchor="middle" font-size="10" fill="#334155" transform="rotate(-90,14,105)">Frequency</text>
  <!-- Bell curve path -->
  <path d="M45,158 Q70,155 85,130 Q100,90 130,50 Q160,90 175,130 Q190,155 215,158" fill="#2d2d72" fill-opacity="0.5" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>

  <!-- Discontinuous variation graph -->
  <rect x="275" y="10" width="230" height="180" rx="6" fill="#0a2e1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="390" y="28" text-anchor="middle" font-weight="bold" font-size="11" fill="#065f46">Discontinuous Variation</text>
  <!-- Axes -->
  <line x1="300" y1="160" x2="490" y2="160" stroke="#334155" stroke-width="1.5"/>
  <line x1="300" y1="40" x2="300" y2="160" stroke="#334155" stroke-width="1.5"/>
  <text x="395" y="178" text-anchor="middle" font-size="10" fill="#334155">Blood Group</text>
  <text x="280" y="105" text-anchor="middle" font-size="10" fill="#334155" transform="rotate(-90,280,105)">Frequency</text>
  <!-- Bars -->
  <rect x="315" y="90" width="30" height="70" fill="#065f46" stroke="#10b981" stroke-width="1"/>
  <rect x="355" y="70" width="30" height="90" fill="#065f46" stroke="#10b981" stroke-width="1"/>
  <rect x="395" y="110" width="30" height="50" fill="#065f46" stroke="#10b981" stroke-width="1"/>
  <rect x="435" y="120" width="30" height="40" fill="#065f46" stroke="#10b981" stroke-width="1"/>
  <text x="330" y="174" text-anchor="middle" font-size="10" fill="#334155">A</text>
  <text x="370" y="174" text-anchor="middle" font-size="10" fill="#334155">B</text>
  <text x="410" y="174" text-anchor="middle" font-size="10" fill="#334155">AB</text>
  <text x="450" y="174" text-anchor="middle" font-size="10" fill="#334155">O</text>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Variation is the differences between individuals of the same species. It arises from genetic causes (mutation and sexual reproduction) and environmental causes (diet, sunlight, exercise). Continuous variation shows a range of values and is displayed as a bell curve; discontinuous variation shows distinct categories and is displayed as a bar chart.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Continuous variation: range of values, many genes + environment (e.g. height). Discontinuous: distinct categories, few genes (e.g. ABO blood group).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-3',
        prompt: 'Distinguish between continuous and discontinuous variation, giving one example of each.',
        answer: 'Continuous: a range of values with no distinct categories, e.g. height. Discontinuous: distinct, separate categories with no intermediate forms, e.g. ABO blood groups.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'What type of graph is used to display continuous variation, and why?',
        answer: 'A normal distribution (bell curve), because values form a continuous range with most individuals near the mean and fewer at the extremes.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'State two genetic causes of variation.',
        answer: 'Mutation (random change in DNA) and sexual reproduction / meiosis (crossing over and independent assortment produce new combinations of alleles).'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Give two ways the environment can cause variation in an organism.',
        answer: 'Diet (e.g. better nutrition increases height/mass) and sunlight exposure (increases melanin, darkening skin colour).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_18_18_0;
