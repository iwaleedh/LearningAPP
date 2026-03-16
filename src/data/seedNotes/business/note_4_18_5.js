export const note_business_4_18_5 = {
  pdfPath: '/notes/business/business-4-18.pdf',
  blocks: [
    {
      id: 'obj-4-18-5',
      type: 'objective',
      data: { text: 'Assess the factors that influence a business’s decision on where to locate its production facilities globally.' }
    },
    {
      id: 'h-loc',
      type: 'heading',
      data: { text: 'Global Production Location Assessment', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Deciding where to physically manufacture goods or base service operations is a critical strategic decision heavily influenced by cost, skills, infrastructure, and trade blocs.' }
    },
    {
      id: 'h-factors',
      type: 'heading',
      data: { text: 'Key Location Factors', level: 3 }
    },
    {
      id: 'list-factors',
      type: 'list',
      data: { style: 'bullet', items: [
        { text: '<strong>Costs of production:</strong> Labor wage rates, land costs, energy costs, and taxation. (e.g., shifting manufacturing to Vietnam to minimize wage bills).' },
        { text: '<strong>Skills and availability of labor:</strong> Need for technical expertise or highly educated workforces (e.g., locating R&D in Silicon Valley or software development in Bangalore).' },
        { text: '<strong>Infrastructure:</strong> Need for high-quality transport hubs, ports, and reliable power.' },
        { text: '<strong>Location in a trading bloc:</strong> Locating a factory within the EU or USMCA to avoid tariffs and quotas when selling to member nations.' },
        { text: '<strong>Government incentives:</strong> Grants, tax breaks, or subsidies offered to attract foreign direct investment (FDI).' },
        { text: '<strong>Return on Investment (ROI):</strong> Ensuring the initial capital expenditure of location setup yields sufficient long-term profit.' }
      ]}
    },
    {
      id: 'tbl-loc',
      type: 'comparisonTable',
      data: {
        caption: 'Cost vs Quality Locations',
        headers: ['Location Strategy', 'Primary Motive', 'Typical Example'],
        rows: [
          ['Low-Cost Manufacturing', 'Minimizing unit costs via cheap labor', 'Garment factories in Bangladesh'],
          ['Skill-Intensive Clustering', 'Access to high-tech, educated labor', 'Pharmaceutical labs in Switzerland or UK']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: { style: 'tip', title: 'Trade-offs', text: 'Often there is a trade-off. A country with extremely low labor costs might suffer from poor infrastructure or political instability, demanding higher contingency costs overall.' }
    },
    {
      id: 'sum-4-18-5',
      type: 'summary',
      data: { text: 'Selecting a global production location requires balancing quantitative factors (costs, ROI, taxes) against qualitative factors (skills, infrastructure, political climate).' }
    },
    {
      id: 'enr-svg-loc',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
    </marker>
  </defs>
  <rect x="190" y="14" width="220" height="52" rx="8" fill="#6366f1" stroke="#4338ca" stroke-width="2"/>
  <text x="300" y="37" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Where to produce?</text>
  <text x="300" y="55" text-anchor="middle" font-size="11" fill="#c7d2fe">Production location decision</text>
  <line x1="240" y1="66" x2="148" y2="128" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="360" y1="66" x2="452" y2="128" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <circle cx="130" cy="167" r="52" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
  <text x="130" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="white">Domestic</text>
  <text x="130" y="178" text-anchor="middle" font-size="11" fill="#bfdbfe">Production</text>
  <circle cx="470" cy="167" r="52" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
  <text x="470" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="white">Offshore</text>
  <text x="470" y="178" text-anchor="middle" font-size="11" fill="#fed7aa">Production</text>
  <line x1="130" y1="219" x2="130" y2="262" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="470" y1="219" x2="470" y2="262" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="18" y="265" width="224" height="100" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="130" y="284" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Domestic Characteristics</text>
  <text x="130" y="300" text-anchor="middle" font-size="10" fill="#166534">&#8226; Higher labour costs</text>
  <text x="130" y="316" text-anchor="middle" font-size="10" fill="#166534">&#8226; Known regulations</text>
  <text x="130" y="332" text-anchor="middle" font-size="10" fill="#166534">&#8226; No language barrier</text>
  <text x="130" y="348" text-anchor="middle" font-size="10" fill="#166534">&#8226; Quick to market</text>
  <rect x="358" y="265" width="224" height="100" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <text x="470" y="284" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">Offshore Characteristics</text>
  <text x="470" y="300" text-anchor="middle" font-size="10" fill="#9a3412">&#8226; Lower labour costs</text>
  <text x="470" y="316" text-anchor="middle" font-size="10" fill="#9a3412">&#8226; Different regulations/risks</text>
  <text x="470" y="332" text-anchor="middle" font-size="10" fill="#9a3412">&#8226; Language/culture barriers</text>
  <text x="470" y="348" text-anchor="middle" font-size="10" fill="#9a3412">&#8226; Longer lead times</text>
</svg>`,
        caption: 'Production location decision tree: domestic vs offshore key characteristics'
      }
    },
    {
      id: 'enr-callout-we-loc',
      type: 'callout',
      data: { style: 'worked', title: 'Case Study: Nissan Sunderland', text: 'Nissan chose the UK (1986) for English language, skilled workforce, EU single market access (pre-Brexit), and government incentives. The plant produced 35% of all Nissan cars sold in Europe. Post-Brexit, Nissan had to renegotiate its supply chain — tariffs potentially adding \u00a3100m/year in cost. This shows how a production location decision is deeply tied to geopolitical context.' }
    },
    {
      id: 'enr-callout-tip-loc',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip: Production Location vs Market Location', text: 'A firm may <strong>produce</strong> in Vietnam but <strong>sell</strong> in Europe — these are separate decisions. When assessing production location, consider: labour costs + skill levels, infrastructure quality, legal/IP protection, political stability, proximity to suppliers, and government incentives.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Global location decisions balance labor costs, required skills, infrastructure quality, and access to trading blocs to maximize ROI.',
    cues: [
      { id: 'cue-1', blockId: 'list-factors', prompt: 'How does being inside a trading bloc influence production location?', answer: 'A business can bypass tariffs and quotas, allowing free and cheaper movement of goods to member nations.' },
      { id: 'cue-2', blockId: 'list-factors', prompt: 'State two labor-related factors influencing location choice.', answer: '1) Labor wage costs.\n2) The specific skills and availability of the workforce.' },
      { id: 'cue-3', blockId: 'list-factors', prompt: 'Why might government incentives attract production facilities?', answer: 'Tax breaks or grants lower the initial capital setup costs and improve the overall Return on Investment (ROI).' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'What is a common trade-off when locating in a low-wage country?', answer: 'Trading off cheap labor against potentially poor infrastructure, lower skill levels, or political instability.' }
    ]
  },
  evidence: [],
  mentions: []
};