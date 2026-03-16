export const note_olevel_business_4_4_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Business/Operations Management/economies-and-diseconomies-of-scale.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define economies and diseconomies of scale, classify internal and external economies of scale, explain why unit costs fall and then rise as a business grows, and identify the optimal scale of production.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Economies and Diseconomies of Scale', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<b>Economies of scale</b> are the cost advantages that a business gains as it increases its scale of production. As output grows, the average (unit) cost of production falls. This happens because fixed costs are spread over more units and because larger businesses gain advantages in purchasing, technology, finance, and specialisation. However, beyond a certain size, average costs can start to rise — this is called <b>diseconomies of scale</b>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Internal Economies of Scale', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<b>Internal economies of scale</b> arise from the growth of the firm itself — they are advantages the business creates through its own expansion. There are five main types:'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Purchasing (buying) economies</b> — Large firms buy raw materials and components in bulk and can negotiate lower prices per unit from suppliers. A supermarket chain buying millions of units can demand far lower prices than a small independent shop.' },
          { text: '<b>Technical economies</b> — Large firms can afford specialist, expensive machinery and production lines that are more efficient per unit of output. A small firm cannot afford to invest in a fully automated production line, but a large manufacturer can, driving down unit costs significantly.' },
          { text: '<b>Financial economies</b> — Large, established firms are seen as lower risk by banks and investors, so they can borrow money at lower interest rates. They also have access to a wider range of financial instruments (bonds, equity markets).' },
          { text: '<b>Managerial economies</b> — Large firms can employ specialist managers (marketing director, finance director, HR manager) rather than one person doing everything. Specialists are more efficient and productive in their area than generalists.' },
          { text: '<b>Risk-bearing (diversification) economies</b> — Large firms can spread risk across multiple products, markets, or geographies. If one product fails, the firm survives because others remain profitable. A small firm with a single product is far more vulnerable to market changes.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'External Economies of Scale', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<b>External economies of scale</b> arise from the growth of the industry as a whole (not from any individual firm\'s growth). They benefit all firms operating in a concentrated geographical area or industry cluster. Examples include: <ul><li><b>Skilled labour pool</b> — When many firms in the same industry locate in one area (e.g. Silicon Valley for tech, Detroit for car manufacturing), a pool of trained, skilled workers develops locally, reducing recruitment and training costs for all firms.</li><li><b>Proximity of specialist suppliers</b> — Clusters of firms in the same industry attract specialist suppliers and support services (e.g. component manufacturers, logistics firms, specialist legal advisors), reducing transaction and supply chain costs.</li><li><b>Shared infrastructure</b> — Governments and local authorities invest in roads, ports, and utilities to serve major industrial clusters, benefiting all firms in the area.</li><li><b>Knowledge spillovers</b> — Ideas, innovations, and best practices spread more easily when similar firms are geographically close, benefiting the industry collectively.</li></ul>'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Diseconomies of Scale', level: 2 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<b>Diseconomies of scale</b> occur when a business grows beyond its optimal size and average costs begin to <b>rise</b>. They result from the difficulties of managing and coordinating a very large organisation. Key causes include:'
      }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Communication problems</b> — As a firm grows, communication channels become longer and more complex. Messages are distorted as they pass through multiple management layers (Chinese whispers effect). Decisions are slower and information less accurate.' },
          { text: '<b>Lack of worker motivation</b> — Workers in very large organisations often feel like a small cog in a big machine — anonymous and undervalued. This leads to lower morale, higher absenteeism, and reduced productivity.' },
          { text: '<b>Management coordination difficulties</b> — Coordinating thousands of workers, dozens of departments, and multiple sites becomes increasingly difficult and expensive. Bureaucracy grows, slowing decision-making.' },
          { text: '<b>Loss of control and identity</b> — Senior management become distant from day-to-day operations and from customers. Poor decisions are made because managers lack ground-level knowledge.' }
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'The Long-Run Average Cost Curve', level: 2 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'The relationship between scale and unit costs is typically shown as a U-shaped long-run average cost (LRAC) curve. As output grows, economies of scale push average costs down. At the <b>optimal scale</b> (the minimum efficient scale), average costs are at their lowest. Beyond this point, diseconomies of scale cause average costs to rise again.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">
  <rect width="480" height="280" fill="#f8fafc" rx="8"/>
  <!-- Axes -->
  <line x1="55" y1="240" x2="440" y2="240" stroke="#334155" stroke-width="2"/>
  <line x1="55" y1="240" x2="55" y2="30" stroke="#334155" stroke-width="2"/>
  <text x="248" y="265" text-anchor="middle" font-size="12" fill="#334155">Output</text>
  <text x="18" y="140" text-anchor="middle" font-size="12" fill="#334155" transform="rotate(-90,18,140)">Average Cost</text>
  <!-- U-shaped LRAC curve approximated with a path -->
  <path d="M 80,200 C 130,140 180,100 240,95 C 300,90 330,100 380,160 C 400,180 420,200 440,220"
        fill="none" stroke="#6366f1" stroke-width="3"/>
  <!-- Minimum point marker -->
  <circle cx="245" cy="94" r="5" fill="#10b981"/>
  <!-- Region labels -->
  <text x="155" y="75" text-anchor="middle" font-size="11" fill="#10b981">Economies</text>
  <text x="155" y="88" text-anchor="middle" font-size="11" fill="#10b981">of Scale</text>
  <text x="350" y="115" text-anchor="middle" font-size="11" fill="#ef4444">Diseconomies</text>
  <text x="350" y="128" text-anchor="middle" font-size="11" fill="#ef4444">of Scale</text>
  <!-- Vertical dashed line at optimum -->
  <line x1="245" y1="94" x2="245" y2="240" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="245" y="253" text-anchor="middle" font-size="10" fill="#10b981">Optimal scale</text>
  <!-- Arrow labels -->
  <text x="130" y="200" text-anchor="middle" font-size="10" fill="#6366f1">↓ Unit cost falling</text>
  <text x="360" y="175" text-anchor="middle" font-size="10" fill="#ef4444">↑ Unit cost rising</text>
  <!-- Title -->
  <text x="248" y="22" text-anchor="middle" font-size="13" font-weight="600" fill="#1e293b">Long-Run Average Cost Curve (LRAC)</text>
  <text x="435" y="238" font-size="10" fill="#6366f1">LRAC</text>
</svg>`,
        caption: 'The U-shaped LRAC curve: economies of scale lower unit costs as output grows; diseconomies of scale raise unit costs beyond the optimal scale.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Economies vs Diseconomies of Scale',
        headers: ['Economies of Scale', 'Diseconomies of Scale'],
        rows: [
          ['Purchasing economies — bulk buying discounts', 'Communication problems — distortion over long chains'],
          ['Technical economies — efficient specialist machinery', 'Worker demotivation — feeling anonymous and insignificant'],
          ['Financial economies — cheaper borrowing', 'Management coordination difficulties — bureaucracy'],
          ['Managerial economies — specialist departments', 'Loss of control — senior management distant from reality'],
          ['Risk-bearing economies — diversification across products/markets', 'Slower decision-making — multiple approval layers']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Economies of scale reduce average costs as output grows. Internal economies include purchasing, technical, financial, managerial, and risk-bearing. External economies come from industry clusters (skilled labour, specialist suppliers). Diseconomies of scale raise average costs beyond the optimal scale due to communication problems, management difficulties, and worker demotivation. The LRAC curve is U-shaped, with the lowest average cost at the optimal (minimum efficient) scale.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Economies of scale reduce unit costs as firms grow (purchasing, technical, financial, managerial, risk-bearing). External economies come from industry clusters. Diseconomies of scale raise unit costs beyond optimal size (communication, motivation, management problems).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-1',
        prompt: 'Name the five types of internal economies of scale.',
        answer: 'Purchasing (bulk buying), technical (specialist machinery), financial (lower borrowing costs), managerial (specialist departments), risk-bearing (diversification).'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'What are external economies of scale? Give two examples.',
        answer: 'External economies arise from industry growth, not a single firm\'s growth. Examples: a skilled labour pool in an industry cluster, specialist suppliers attracted by the concentration of firms.'
      },
      {
        id: 'cue-3',
        blockId: 'list-2',
        prompt: 'Give three causes of diseconomies of scale.',
        answer: 'Any three of: communication problems (messages distorted over long chains), lack of worker motivation (feeling anonymous), management coordination difficulties (bureaucracy), loss of control by senior management.'
      },
      {
        id: 'cue-4',
        blockId: 'para-5',
        prompt: 'What does the U-shaped LRAC curve show?',
        answer: 'The LRAC curve shows that average costs fall as output grows (economies of scale), reach a minimum at the optimal scale, then rise again (diseconomies of scale) as the firm becomes too large to manage efficiently.'
      },
      {
        id: 'cue-5',
        blockId: 'para-1',
        prompt: 'What is the difference between economies of scale and diseconomies of scale?',
        answer: 'Economies of scale reduce average costs as output grows (benefits of size). Diseconomies of scale increase average costs when a firm grows beyond its optimal size (costs of being too large).'
      }
    ]
  },
  evidence: [],
  mentions: []
};
