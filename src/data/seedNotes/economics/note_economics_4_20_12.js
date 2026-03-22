export const note_economics_4_20_12 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Evaluate policy options for improving international competitiveness, including devaluation, supply-side reforms, wage restraint, and industrial policy.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Policies to Improve Competitiveness', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'International competitiveness can be improved through policies targeting either price or non-price factors. Short-run policies typically work through price mechanisms (exchange rate, wage restraint), while long-run policies build non-price competitiveness (productivity, innovation, skills). A comprehensive competitiveness strategy requires a mix of both.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Devaluation / Depreciation (Short Run)', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Devaluing or allowing depreciation of the currency reduces export prices in foreign currency terms, providing an immediate competitiveness boost. The effect is rapid but temporary — if depreciation causes domestic inflation (cost-push), the real exchange rate may return to its original level over time, eroding the competitiveness gain. Repeated devaluation without structural reform creates inflationary expectations and reduces credibility.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Supply-Side Policies (Long Run)', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Supply-side policies improve long-run productive potential and competitiveness: <strong>Education and skills investment</strong> (higher human capital → higher productivity → lower RULC); <strong>R&D support and innovation policy</strong> (higher quality products improve non-price competitiveness); <strong>Infrastructure investment</strong> (roads, broadband, energy → lower business costs); <strong>Deregulation and competition policy</strong> (competitive markets drive efficiency). These work over decades but address structural competitiveness fundamentals.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Wage Restraint', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Keeping wage growth below productivity growth reduces unit labour costs and improves price competitiveness. Germany\'s Hartz reforms (2003-05) moderated wages relative to competitors, significantly reducing German RULCs and underpinning the subsequent export boom. However, wage restraint risks suppressing domestic demand, increasing inequality, and reducing workers\' living standards. It also requires coordination between government, employers, and trade unions.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Industrial Policy', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: '<strong>Industrial policy</strong> involves government targeting specific sectors for development. Active forms include direct subsidies, preferential finance, and protection for strategic export industries (South Korea\'s chaebol model, Japan\'s MITI). More market-friendly forms include R&D tax credits, export promotion agencies, and cluster policies (Silicon Valley, Cambridge tech cluster). The risk is government failure — picking losers rather than winners. Successful industrial policy requires clear strategy, effective institutions, and an exit mechanism.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Competitiveness Policies: Comparison',
        headers: ['Policy', 'Mechanism', 'Time Horizon', 'Key Limitation'],
        rows: [
          ['Depreciation / devaluation', 'Reduces export price in foreign currency; raises import prices domestically', 'Short run (months)', 'Inflation erodes real gains; may trigger retaliation; cannot devalue in a monetary union'],
          ['Education and skills', 'Higher human capital raises productivity and product quality', 'Very long run (10-20 years)', 'Extremely slow; uncertain returns; brain drain in developing countries'],
          ['R&D subsidies / innovation', 'Improves product quality; creates new export products', 'Long run (5-15 years)', 'Uncertain returns; public subsidy may crowd out private R&D; spillovers may benefit competitors'],
          ['Wage restraint', 'Reduces unit labour costs; improves price competitiveness', 'Medium run (3-7 years)', 'Suppresses domestic demand; increases inequality; requires wage coordination'],
          ['Industrial policy', 'Targets resources to high-growth export sectors', 'Medium/long run', 'Government failure; rent-seeking; WTO rules restrict subsidies']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Context Matters',
        text: 'The optimal policy mix depends on context. For a country in a monetary union (Eurozone) that cannot devalue, internal devaluation (wage restraint, productivity reform) is the only price competitiveness tool. For a country with a floating rate, depreciation is available but must be combined with supply-side reform to achieve lasting gains.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't conflate short-term competitiveness boosts with sustainable improvements. Currency depreciation helps temporarily, but if inflation erodes gains, competitiveness returns to baseline. Only structural reforms (education, infrastructure) create durable advantages."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Competitiveness can be improved short-run through depreciation or wage restraint (price competitiveness) and long-run through supply-side policies and industrial policy (non-price competitiveness); monetary union members cannot devalue and must use internal adjustment.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Why is devaluation only a short-run solution to competitiveness problems?',
        answer: 'Depreciation causes cost-push inflation as import prices rise. This gradually erodes the real exchange rate back towards its original level, eliminating the price competitiveness gain. Without structural reform, repeated devaluations just generate inflation without lasting competitiveness improvement.'
      },
      {
        id: 'cue-2',
        blockId: 'para-4',
        prompt: 'How did Germany use wage restraint to improve competitiveness, and what were the trade-offs?',
        answer: 'Germany\'s Hartz reforms (2003-05) moderated wage growth below productivity growth, significantly reducing relative unit labour costs and underpinning a major export boom. Trade-offs: suppressed domestic demand, increased inequality, and German workers\' real wages stagnated for years.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Why is supply-side reform considered the most sustainable approach to improving competitiveness?',
        answer: 'Supply-side reforms (education, R&D, infrastructure) improve underlying productivity and product quality — the fundamental determinants of non-price competitiveness. Unlike depreciation, they do not create inflation, and unlike wage restraint, they raise living standards. However they take 10-20 years to work.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_20_12;
