export const note_business_4_17_1 = {
  pdfPath: '/notes/business/wbs14-17.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define GDP, GDP per capita and HDI; evaluate their usefulness as measures of economic development and living standards.' }
    },
    {
      id: 'h-gdp',
      type: 'heading',
      data: { text: 'Gross Domestic Product (GDP)', level: 2 }
    },
    {
      id: 'p-gdp',
      type: 'paragraph',
      data: { text: '<b>Gross Domestic Product (GDP)</b> is the total monetary value of all goods and services produced within a country\'s borders in a given year. It is the most widely used measure of the <b>size of an economy</b>. A rising GDP generally indicates economic growth, increased production, and rising employment.' }
    },
    {
      id: 'callout-gdp-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'GDP Formula',
        text: 'GDP = Consumer spending (C) + Investment (I) + Government spending (G) + Net exports (X − M). Rising GDP → economic growth. Falling GDP for two consecutive quarters → recession.'
      }
    },
    {
      id: 'list-gdp-use',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Compares economic size</b> between countries (e.g. China\'s GDP vs India\'s GDP)' },
          { text: '<b>Tracks economic growth</b> over time (% change in GDP year-on-year)' },
          { text: '<b>Used by investors</b> to assess market potential — large GDP = large market' },
          { text: '<b>Determines creditworthiness</b> — lenders use GDP size to assess repayment ability' }
        ]
      }
    },
    {
      id: 'h-gdppc',
      type: 'heading',
      data: { text: 'GDP Per Capita', level: 2 }
    },
    {
      id: 'p-gdppc',
      type: 'paragraph',
      data: { text: '<b>GDP per capita</b> is calculated by dividing a country\'s total GDP by its population. It measures the <b>average income per person</b> and is a better indicator of individual living standards than total GDP. A country may have a large GDP but if the population is also huge, the average person may still be poor.' }
    },
    {
      id: 'callout-gdppc-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'GDP Per Capita Formula',
        text: 'GDP per capita = Total GDP ÷ Population. Example: Country A GDP = $1 trillion, Population = 10 million → GDP per capita = $100,000. Country B GDP = $2 trillion, Population = 200 million → GDP per capita = $10,000. Country A has lower total GDP but higher living standards on average.'
      }
    },
    {
      id: 'list-gdppc-limits',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Ignores inequality</b> — a high average can mask extreme poverty for the majority' },
          { text: '<b>No account of quality of life</b> — does not capture health, education or happiness' },
          { text: '<b>Purchasing power varies</b> — $10,000 buys more in India than in the UK (PPP adjustments needed)' },
          { text: '<b>Informal economy excluded</b> — unrecorded transactions understate true living standards in developing nations' }
        ]
      }
    },
    {
      id: 'h-hdi',
      type: 'heading',
      data: { text: 'Human Development Index (HDI)', level: 2 }
    },
    {
      id: 'p-hdi',
      type: 'paragraph',
      data: { text: 'The <b>Human Development Index (HDI)</b> was developed by the United Nations Development Programme (UNDP) as a more comprehensive measure of living standards. HDI combines three dimensions of human development into a single index score between 0 and 1.' }
    },
    {
      id: 'list-hdi-components',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Health</b> — measured by life expectancy at birth' },
          { text: '<b>Education</b> — measured by mean years of schooling and expected years of schooling' },
          { text: '<b>Income</b> — measured by Gross National Income (GNI) per capita (PPP-adjusted)' }
        ]
      }
    },
    {
      id: 'p-hdi-bands',
      type: 'paragraph',
      data: { text: 'Countries are classified into four HDI bands: <b>Very High</b> (0.8–1.0, e.g. Norway 0.957, USA 0.926), <b>High</b> (0.7–0.79, e.g. Brazil 0.754), <b>Medium</b> (0.55–0.69, e.g. India 0.633), and <b>Low</b> (&lt;0.55, e.g. Niger 0.394).' }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing the Measures', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'GDP vs GDP per capita vs HDI — strengths and limitations',
        headers: ['Measure', 'What it shows', 'Key strength', 'Key limitation'],
        rows: [
          ['GDP', 'Total economic output', 'Easy to compare economy sizes', 'Ignores population size and income distribution'],
          ['GDP per capita', 'Average income per person', 'Better indicator of living standards', 'Ignores inequality and non-monetary wellbeing'],
          ['HDI', 'Multi-dimensional wellbeing', 'Captures health and education, not just income', 'Complex to calculate; some weighting is debatable']
        ]
      }
    },
    {
      id: 'callout-biz-link',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Business Application: Market Assessment',
        text: 'A UK fashion retailer evaluating entry into Vietnam (HDI 0.703, GDP per capita ~$3,700) vs Germany (HDI 0.942, GDP per capita ~$48,000). Germany offers wealthier consumers and greater spending power, but Vietnam offers faster GDP growth (~6% p.a.) and a growing middle class. The retailer must weigh purchasing power (GDP per capita) against growth opportunity and competitive intensity.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Examiners reward evaluation. Acknowledge that GDP and GDP per capita are useful but limited — they do not show inequality (Gini coefficient), environmental damage, or quality of public services. HDI is more rounded but still imperfect (ignores political freedom, gender equality). Use both to paint a fuller picture.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>GDP</b> = total value of goods/services produced in a country per year — measures economic size. <b>GDP per capita</b> = GDP ÷ population — measures average living standards. <b>HDI</b> = composite index of income + education + life expectancy — measures broader human development. HDI is more comprehensive but all three measures have limitations for capturing true living standards.' }
    },
    {
      id: 'enr-h-measures',
      type: 'heading',
      data: { text: 'Growth Indicators in Practice', level: 2 }
    },
    {
      id: 'enr-p-indicators',
      type: 'paragraph',
      data: { text: 'When <b>businesses evaluate new markets for expansion</b>, they look beyond a single figure. Key growth indicators used alongside GDP include: <b>GDP per capita</b> (living standards and purchasing power), <b>health</b> indicators (life expectancy, infant mortality, healthcare access — affect workforce quality), and <b>literacy rates</b> (percentage of adults who can read and write — affects workforce skill base). The <b>HDI</b> combines income, education and health into one holistic score, making it the most useful single indicator for assessing both market potential and workforce quality.' }
    },
    {
      id: 'enr-svg-hdi-scatter',
      type: 'svg',
      data: {
        caption: 'HDI vs GDP Per Capita — Conceptual Scatter Plot',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 340" font-family="Inter,sans-serif"><rect width="500" height="340" fill="#0f172a" rx="8"/><line x1="60" y1="280" x2="460" y2="280" stroke="#9ca3af" stroke-width="2"/><line x1="60" y1="280" x2="60" y2="30" stroke="#9ca3af" stroke-width="2"/><text x="250" y="320" text-anchor="middle" font-size="13" fill="#374151" font-weight="bold">GDP Per Capita →</text><text x="18" y="160" text-anchor="middle" font-size="13" fill="#374151" font-weight="bold" transform="rotate(-90,18,160)">HDI Score →</text><text x="56" y="295" font-size="10" fill="#6b7280">Low</text><text x="432" y="295" font-size="10" fill="#6b7280">High</text><text x="46" y="284" font-size="10" fill="#6b7280">Low</text><text x="46" y="56" font-size="10" fill="#6b7280">High</text><circle cx="400" cy="56" r="14" fill="#3b82f6" opacity="0.85"/><text x="418" y="46" font-size="12" fill="#1d4ed8" font-weight="bold">USA</text><text x="418" y="60" font-size="10" fill="#374151">High GDP, High HDI</text><circle cx="310" cy="130" r="14" fill="#f97316" opacity="0.85"/><text x="328" y="120" font-size="12" fill="#c2410c" font-weight="bold">China</text><text x="328" y="135" font-size="10" fill="#374151">High GDP, Med HDI</text><circle cx="195" cy="165" r="14" fill="#10b981" opacity="0.85"/><text x="213" y="155" font-size="12" fill="#065f46" font-weight="bold">India</text><text x="213" y="170" font-size="10" fill="#374151">Med GDP, Med HDI</text><circle cx="85" cy="250" r="14" fill="#ef4444" opacity="0.85"/><text x="103" y="240" font-size="12" fill="#991b1b" font-weight="bold">Somalia</text><text x="103" y="255" font-size="10" fill="#374151">Low GDP, Low HDI</text><line x1="82" y1="248" x2="398" y2="60" stroke="#d1d5db" stroke-width="1" stroke-dasharray="5,4"/><text x="290" y="200" font-size="10" fill="#9ca3af" font-style="italic">General positive correlation</text></svg>'
      }
    },
    {
      id: 'enr-callout-gdp-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Examiner Favourite: GDP vs GDP Per Capita',
        text: 'The examiner frequently tests your ability to <b>distinguish GDP from GDP per capita</b>. <b>GDP</b> tells you how big an economy is (total output). <b>GDP per capita</b> tells you how wealthy the average person is (GDP ÷ population). China\'s total GDP is the second largest in the world — but its GDP per capita (~$12,000) is far below the USA (~$76,000) because China has 1.4 billion people. Always specify which measure you mean in an exam answer and explain why the distinction matters for the business context.'
      }
    },
    {
      id: 'enr-callout-norway-qatar',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Real-World Application: Norway vs Qatar',
        text: '<b>Norway</b> (HDI ~0.961) and <b>Qatar</b> (HDI ~0.855) both have very high GDP per capita, but Norway ranks higher on HDI because it scores much better on education and health outcomes. Qatar\'s wealth is based largely on oil revenues with a smaller educated domestic workforce. This matters to businesses: Norway offers a highly skilled, educated workforce ideal for knowledge-intensive industries; Qatar offers capital and energy resources but workforce depth is more limited. <b>HDI helps distinguish the quality of human capital, not just financial wealth.</b>'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "GDP per capita is GDP \u00f7 population\u2014it gives average wealth per person, not total economic output. HDI adds health and education dimensions. Use these distinctions to explain why a country with high GDP but low HDI faces development challenges."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Candidates often assume higher GDP per capita = higher living standards. Ignore inequality, healthcare access, and education quality in your analysis. HDI explicitly checks your understanding of these non-monetary factors."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'GDP = total output. GDP per capita = GDP ÷ population (living standards). HDI = income + education + life expectancy.',
    cues: [
      { id: 'cue-1', blockId: 'p-gdp', prompt: 'Define GDP in the context of measuring economic performance.', answer: 'GDP is the total monetary value of all goods and services produced within a country\'s borders in a given year — the most common measure of an economy\'s size.' },
      { id: 'cue-2', blockId: 'callout-gdppc-formula', prompt: 'Why is GDP per capita considered a better measure of living standards than total GDP?', answer: 'It divides GDP by population, giving an average income per person. A large GDP can be misleading if a country has a huge population, as individual living standards may still be low.' },
      { id: 'cue-3', blockId: 'list-hdi-components', prompt: 'Name the three components of the Human Development Index (HDI).', answer: 'Health (life expectancy), Education (years of schooling), and Income (GNI per capita, PPP-adjusted).' },
      { id: 'cue-4', blockId: 'list-gdppc-limits', prompt: 'State two limitations of using GDP per capita to measure living standards.', answer: 'It ignores income inequality (a high average can mask widespread poverty) and does not capture non-monetary factors like health, education or environmental quality.' },
      { id: 'cue-5', blockId: 'table-compare', prompt: 'Why might a business analyst use HDI rather than GDP per capita when assessing a potential new market?', answer: 'HDI captures education levels (workforce skills) and health outcomes (worker productivity), giving a more holistic view of human capital quality alongside purchasing power.' }
    ]
  },
  evidence: [],
  mentions: []
};
