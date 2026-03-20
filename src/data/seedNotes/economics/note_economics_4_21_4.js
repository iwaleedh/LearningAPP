export const note_economics_4_21_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Construct and interpret the Lorenz curve, calculate and interpret the Gini coefficient, and apply these tools to compare inequality across countries.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Lorenz Curve and Gini Coefficient', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Lorenz Curve', level: 3 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The <strong>Lorenz curve</strong> is a graphical representation of income (or wealth) distribution. The horizontal axis shows the cumulative percentage of the population ranked from poorest to richest; the vertical axis shows the cumulative percentage of total income (or wealth) they receive. The <strong>line of perfect equality</strong> (45-degree line) shows the hypothetical situation where everyone receives the same income — the bottom 20% receive 20% of income, the bottom 50% receive 50%, etc. The actual Lorenz curve bows below the line of equality — the further it bows, the more unequal the distribution.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="480" height="380" fill="#0f172a" rx="8"/><text x="240" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Lorenz Curve and Gini Coefficient</text><rect x="60" y="40" width="360" height="280" fill="#1e293b" stroke="#d1d5db" stroke-width="1"/><line x1="60" y1="320" x2="420" y2="40" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="6,4"/><text x="430" y="38" font-size="11" fill="#9ca3af">Line of perfect</text><text x="430" y="51" font-size="11" fill="#9ca3af">equality</text><path d="M60,320 Q160,310 240,265 Q320,220 420,40" stroke="#6366f1" stroke-width="2.5" fill="none"/><text x="240" y="360" text-anchor="middle" font-size="12" fill="#374151">Cumulative % of population (poorest to richest)</text><text x="15" y="185" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90,15,185)">Cumulative % of income</text><text x="60" y="335" text-anchor="middle" font-size="11" fill="#6b7280">0%</text><text x="420" y="335" text-anchor="middle" font-size="11" fill="#6b7280">100%</text><text x="48" y="324" text-anchor="end" font-size="11" fill="#6b7280">0%</text><text x="48" y="44" text-anchor="end" font-size="11" fill="#6b7280">100%</text><text x="200" y="230" font-size="12" font-weight="bold" fill="#6366f1">Lorenz Curve</text><text x="155" y="175" font-size="12" fill="#ef4444">A</text><text x="280" y="240" font-size="12" fill="#10b981">B</text><path d="M60,320 Q160,310 240,265 Q320,220 420,40 L60,40 Z" fill="#ef4444" fill-opacity="0.5"/><polygon points="60,320 420,40 60,40" fill="#10b981" fill-opacity="0.5"/><text x="240" y="285" text-anchor="middle" font-size="10" fill="#6366f1">Gini = A / (A + B)</text></svg>',
        caption: 'Lorenz Curve: area A between curve and equality line divided by total triangle area (A+B) = Gini coefficient'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Gini Coefficient', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <strong>Gini coefficient</strong> is a numerical summary of the Lorenz curve, ranging from 0 (perfect equality) to 1 (perfect inequality):'
      }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: 'Gini = \\frac{A}{A + B}',
        caption: 'Where A = area between line of equality and Lorenz curve; B = area below Lorenz curve'
      }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A Gini of 0 means perfect equality (Lorenz curve = line of equality; area A = 0). A Gini of 1 means one person receives all income (Lorenz curve hugs the bottom and right axes; area B = 0). In practice, all countries fall between these extremes. The Gini is often expressed as a percentage (e.g., Gini of 0.35 = 35).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'International Comparison of Gini Coefficients', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Gini Coefficients: Income Inequality Across Countries (approx.)',
        headers: ['Country / Region', 'Gini Coefficient', 'Level of Inequality'],
        rows: [
          ['Nordic countries (Denmark, Sweden, Finland)', '~0.25-0.29', 'Low — strong redistribution, universal services'],
          ['Germany', '~0.29-0.31', 'Low-moderate — social market economy'],
          ['UK', '~0.34-0.36', 'Moderate — higher than EU average; significant regional variation'],
          ['USA', '~0.39-0.41', 'Moderate-high — limited redistribution; large income disparities'],
          ['China', '~0.47-0.50', 'High — large rural-urban divide; rapid growth benefited urban areas more'],
          ['Brazil', '~0.50-0.53', 'High — legacy of colonial inequality; significant racial dimensions'],
          ['South Africa', '~0.63', 'Very high — legacy of apartheid; high unemployment; land inequality']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of the Gini',
        text: 'Different Lorenz curve shapes can produce the same Gini — it cannot distinguish where in the distribution inequality is concentrated. It is sensitive to the poverty line and income definition used. Cross-country comparisons are imperfect due to different data collection methods. The Gini also ignores wealth inequality and non-income dimensions of wellbeing.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'The Lorenz curve plots cumulative income share against cumulative population share; the Gini coefficient = area between curve and equality line / total triangle area; ranges 0 (perfect equality) to 1 (perfect inequality); Nordic countries ~0.25-0.29, UK ~0.35, Brazil ~0.52, South Africa ~0.63.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'What does the Lorenz curve show and what does the 45-degree line represent?',
        answer: 'The Lorenz curve plots cumulative income share (y-axis) against cumulative population share ranked from poorest to richest (x-axis). The 45-degree line of perfect equality represents the hypothetical case where everyone has equal income — the bottom x% of people receive exactly x% of income.'
      },
      {
        id: 'cue-2',
        blockId: 'eq-1',
        prompt: 'State the formula for the Gini coefficient and what values of 0 and 1 represent.',
        answer: 'Gini = A / (A + B), where A is the area between the line of equality and the Lorenz curve, and B is the area below the Lorenz curve. Gini = 0 means perfect equality (all incomes equal); Gini = 1 means perfect inequality (one person has all income).'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'Compare Gini coefficients for Nordic countries, the UK, and Brazil. What explains the differences?',
        answer: 'Nordic countries ~0.25-0.29 (low inequality — strong redistribution, universal services, compressed wage structures). UK ~0.35 (moderate). Brazil ~0.52 (high — colonial legacy of land inequality, racial dimensions, limited redistribution). The differences reflect redistribution systems, labour market institutions, and historical factors.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_4;
