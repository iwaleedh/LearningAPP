export const note_business_2_10_0 = {
  pdfPath: '/notes/business/wbs12-10.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how inflation affects business costs, prices, wages and competitiveness, and distinguish between its effects on exporters and importers.' }
    },
    {
      id: 'h-inflation-def',
      type: 'heading',
      data: { text: 'What Is Inflation?', level: 2 }
    },
    {
      id: 'p-inflation-def',
      type: 'paragraph',
      data: { text: '<b>Inflation</b> is a sustained rise in the general price level of goods and services over time. In the UK it is most commonly measured by the <b>Consumer Prices Index (CPI)</b>, which tracks the average change in prices paid by households for a basket of goods and services. The Bank of England targets 2% CPI inflation. When inflation rises above this, it creates uncertainty and can harm business planning.' }
    },
    {
      id: 'callout-key-cpi',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition',
        text: '<b>CPI:</b> A measure of the average change in prices of a representative basket of consumer goods and services, used to measure inflation in the UK.'
      }
    },
    {
      id: 'h-cost-effects',
      type: 'heading',
      data: { text: 'Effect on Business Costs', level: 2 }
    },
    {
      id: 'p-cost-effects',
      type: 'paragraph',
      data: { text: 'Rising inflation increases the costs faced by firms. Raw material and component prices rise, pushing up the <b>cost of production</b>. Firms must then decide whether to absorb the extra cost (reducing profit margins) or pass it on to consumers through higher prices (risking a fall in demand). The ability to do so depends on the <b>price elasticity of demand (PED)</b> — firms selling inelastic products can pass costs on; those selling elastic products absorb them.' }
    },
    {
      id: 'list-cost-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Raw materials:</b> commodity prices (oil, metals, food) rise with inflation → higher input costs.' },
          { text: '<b>Energy:</b> higher energy prices increase overheads, especially for manufacturers.' },
          { text: '<b>Rent:</b> commercial rents may be index-linked, rising automatically with CPI.' },
          { text: '<b>Wages:</b> workers demand pay rises to maintain real purchasing power, raising labour costs.' }
        ]
      }
    },
    {
      id: 'h-wage-price',
      type: 'heading',
      data: { text: 'The Wage–Price Spiral', level: 2 }
    },
    {
      id: 'p-wage-price',
      type: 'paragraph',
      data: { text: 'The <b>wage–price spiral</b> is a self-reinforcing cycle: rising prices lead workers to demand higher wages → higher wages raise production costs for firms → firms raise prices further to protect margins → inflation accelerates further. Labour-intensive industries (retail, hospitality) are especially exposed because labour is their largest cost.' }
    },
    {
      id: 'h-exporters-importers',
      type: 'heading',
      data: { text: 'Exporters vs Importers', level: 2 }
    },
    {
      id: 'p-exporters',
      type: 'paragraph',
      data: { text: 'High UK inflation makes British goods more expensive relative to foreign competitors, reducing the price competitiveness of UK <b>exporters</b>. Foreign buyers seek cheaper alternatives so export volumes may fall. <b>Importers</b> benefit if only UK domestic costs are rising: foreign goods become relatively cheaper, allowing firms to switch to imported inputs and reduce costs.' }
    },
    {
      id: 'table-exporters-importers',
      type: 'comparisonTable',
      data: {
        caption: 'Impact of High Domestic Inflation on UK Firms',
        headers: ['Type of Firm', 'Effect', 'Consequence'],
        rows: [
          ['Exporter (sells abroad)', 'UK goods more expensive for foreign buyers', 'Loss of competitiveness → lower export revenue'],
          ['Importer (buys from abroad)', 'UK domestic costs rise; imported goods relatively cheaper', 'May switch to cheaper imported inputs → lower costs'],
          ['Domestic-only firm', 'Higher input and labour costs', 'Profit margin squeeze unless prices raised']
        ]
      }
    },
    {
      id: 'h-planning',
      type: 'heading',
      data: { text: 'Impact on Business Planning', level: 2 }
    },
    {
      id: 'p-planning',
      type: 'paragraph',
      data: { text: 'Uncertainty over future prices makes long-term planning harder. Budgeting becomes unreliable and firms may require larger contingency funds. Investment may be deferred because the real return on capital is eroded by unexpected inflation. Fixed-term contracts become risky if costs rise mid-contract.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Distinguish between the <b>effect on costs</b> (supply-side: raw materials, wages) and the <b>effect on demand</b> (consumer purchasing power falls in real terms → lower sales). High evaluation marks come from analysing both sides and linking PED to whether costs can be passed on.'
      }
    },
    {      id: 'enr-t10a-svg-pestle',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 320' font-family='Arial,sans-serif'><rect width='380' height='320' fill='#f8f9ff' rx='8'/><text x='190' y='18' text-anchor='middle' font-size='13' font-weight='bold' fill='#1e293b'>PESTLE Analysis</text><polygon points='190,35 310,100 310,230 190,295 70,230 70,100' fill='none' stroke='#6366f1' stroke-width='2'/><rect x='155' y='38' width='70' height='40' rx='5' fill='#6366f1'/><text x='190' y='56' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>P</text><text x='190' y='70' text-anchor='middle' font-size='9' fill='white'>Political</text><rect x='300' y='100' width='72' height='40' rx='5' fill='#8b5cf6'/><text x='336' y='118' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>E</text><text x='336' y='132' text-anchor='middle' font-size='9' fill='white'>Economic</text><rect x='300' y='190' width='72' height='40' rx='5' fill='#3b82f6'/><text x='336' y='208' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>S</text><text x='336' y='222' text-anchor='middle' font-size='9' fill='white'>Social</text><rect x='155' y='248' width='70' height='40' rx='5' fill='#10b981'/><text x='190' y='266' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>T</text><text x='190' y='280' text-anchor='middle' font-size='9' fill='white'>Technology</text><rect x='10' y='190' width='72' height='40' rx='5' fill='#f59e0b'/><text x='46' y='208' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>L</text><text x='46' y='222' text-anchor='middle' font-size='9' fill='white'>Legal</text><rect x='10' y='100' width='72' height='40' rx='5' fill='#ef4444'/><text x='46' y='118' text-anchor='middle' font-size='10' font-weight='bold' fill='white'>E</text><text x='46' y='132' text-anchor='middle' font-size='9' fill='white'>Environment</text></svg>",
        caption: 'PESTLE: six external macro-environment factors affecting business decisions'
      }
    },
    {
      id: 'enr-t10a-h-pestle',
      type: 'heading',
      data: { text: 'Inflation in the PESTLE Framework', level: 2 }
    },
    {
      id: 'enr-t10a-p-pestle',
      type: 'paragraph',
      data: { text: '<b>PESTLE analysis</b> is a strategic framework used to identify and assess six categories of external macro-environment factors: Political, Economic, Social, Technological, Legal and Environmental. Inflation falls under the <b>Economic</b> category alongside interest rates, exchange rates and unemployment. Businesses use PESTLE to anticipate threats (e.g. rising costs) and opportunities (e.g. weaker competitors during high inflation) so they can adapt their strategy proactively rather than reacting to surprises.' }
    },
    {
      id: 'enr-t10a-p-deflation',
      type: 'paragraph',
      data: { text: '<b>Deflation</b> is a sustained fall in the general price level. While it may sound beneficial for consumers, it is dangerous for businesses: firms earn lower revenues per unit sold, profit margins shrink and businesses may delay investment expecting prices to fall further. Debt burdens increase in real terms because the debt stays fixed while prices fall. The UK experienced mild deflation in 2015 (CPI −0.1%). Deflationary spirals — as seen in Japan from the 1990s — can cause prolonged economic stagnation.' }
    },
    {
      id: 'enr-t10a-callout-brand-0',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real-World Example: Centrica & Shrinkflation',
        text: 'During the 2021\u20132023 UK energy crisis, Centrica (British Gas) faced a surge in wholesale gas costs driven by post-COVID supply shocks and the Ukraine war — household energy bills rose over 80% in a single year. Meanwhile, supermarkets used <b>shrinkflation</b> — quietly reducing product sizes (e.g. Cadbury Crunchie from 40g to 32g) while keeping prices stable — to disguise the cost impact on consumers. Both strategies illustrate how firms with inelastic demand protect margins during sustained inflation rather than fully absorbing cost increases.'
      }
    },
    {
      id: 'enr-t10a-callout-student-0',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student-Relatable: Your Streaming Subscriptions',
        text: 'Think about Netflix: its UK subscription price rose from £5.99/month (2016) to £17.99/month (2024) — a 200% increase over eight years. This reflects rising production costs (inflation in content spend) and Netflix\u2019s ability to pass costs on because switching is moderately costly. However, when rivals like Disney+ and Amazon Prime also raised prices simultaneously, consumers began cancelling. This mirrors the <b>wage\u2013price spiral</b>: as costs rise across the sector, all firms raise prices, reducing real consumer purchasing power and eventually dampening demand.'
      }
    },
    {      id: 'sum-1',
      type: 'summary',
      data: { text: 'Inflation raises business costs (materials, labour, energy) and erodes profit margins unless prices are raised. The wage–price spiral accelerates inflation in labour-intensive sectors. High domestic inflation reduces UK exporters\' competitiveness but can benefit importers. Business planning becomes harder due to cost uncertainty. A firm\'s ability to respond depends on its price elasticity of demand and market power.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Inflation raises costs, squeezes margins, harms exporters\' competitiveness, and makes business planning harder. Wage–price spiral can self-reinforce. Firms with inelastic demand can pass costs on; others absorb them.',
    cues: [
      { id: 'cue-1', blockId: 'p-inflation-def', prompt: 'What is inflation and how is it measured in the UK?', answer: 'Inflation is a sustained rise in the general price level, measured by the Consumer Prices Index (CPI). The Bank of England targets ~2% CPI inflation.' },
      { id: 'cue-2', blockId: 'list-cost-effects', prompt: 'Name THREE ways inflation directly increases business costs.', answer: 'Raw material prices rise; energy bills increase; workers demand higher wages to maintain real purchasing power; index-linked rents rise automatically.' },
      { id: 'cue-3', blockId: 'h-wage-price', prompt: 'Explain the wage–price spiral.', answer: 'Rising prices → workers demand higher wages → higher labour costs → firms raise prices → cycle repeats, accelerating inflation.' },
      { id: 'cue-4', blockId: 'h-exporters-importers', prompt: 'How does domestic inflation affect UK exporters?', answer: 'UK goods become more expensive relative to foreign competitors. Foreign buyers may switch to cheaper alternatives, reducing UK export volumes and revenue.' },
      { id: 'cue-5', blockId: 'h-planning', prompt: 'Why does inflation make long-term planning harder for firms?', answer: 'Future input costs are unpredictable, making budgets unreliable. Firms may defer investment as the real return is eroded by unexpected inflation.' },
      { id: 'cue-6', blockId: 'callout-tip', prompt: 'Does high inflation always reduce a firm\'s profits? Justify your answer.', answer: 'Not necessarily. Firms with price-inelastic demand can pass higher costs to consumers with little loss in volume. Profits fall mainly for firms with elastic demand who cannot raise prices without losing customers.' }
    ]
  },
  evidence: [],
  mentions: []
};
