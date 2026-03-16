export const note_business_3_11_6 = {
  pdfPath: '/notes/business/wbs13-11.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Conduct and interpret a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats). Distinguish internal from external factors. Apply SWOT to strategic decision-making, including converting weaknesses and managing threats.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What Is SWOT Analysis?', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>SWOT analysis</b> is a strategic audit tool that evaluates a business\'s current position by identifying <b>internal</b> factors (Strengths and Weaknesses) and <b>external</b> factors (Opportunities and Threats). It provides a structured snapshot that informs strategic planning.' }
    },
    {
      id: 'tbl-swot',
      type: 'comparisonTable',
      data: {
        caption: 'SWOT framework — internal vs external, positive vs negative',
        headers: ['', 'Helpful (Positive)', 'Harmful (Negative)'],
        rows: [
          ['<b>Internal (within the business)</b>', '✅ Strengths', '⚠️ Weaknesses'],
          ['<b>External (outside the business)</b>', '🌟 Opportunities', '❌ Threats']
        ]
      }
    },
    {
      id: 'h-sw',
      type: 'heading',
      data: { text: 'Strengths and Weaknesses (Internal)', level: 2 }
    },
    {
      id: 'p-sw',
      type: 'paragraph',
      data: { text: '<b>Strengths</b> are internal capabilities that give the business a competitive advantage. <b>Weaknesses</b> are internal limitations that put the business at a disadvantage relative to competitors. Both are within management\'s control to address.' }
    },
    {
      id: 'list-sw-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Strengths examples:</b> Strong brand recognition (Apple), loyal customer base, low-cost operations (Aldi), skilled workforce, patent-protected products, strong cash reserves.' },
          { text: '<b>Weaknesses examples:</b> High debt levels, narrow product range, over-reliance on one supplier, ageing technology, poor staff morale, weak digital presence.' }
        ]
      }
    },
    {
      id: 'h-ot',
      type: 'heading',
      data: { text: 'Opportunities and Threats (External)', level: 2 }
    },
    {
      id: 'p-ot',
      type: 'paragraph',
      data: { text: '<b>Opportunities</b> are external conditions that the business could exploit to grow or improve performance. <b>Threats</b> are external factors that could harm the business. Both exist in the macro environment (PESTLE) and competitive environment (Five Forces).' }
    },
    {
      id: 'list-ot-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Opportunities examples:</b> Growing consumer demand for sustainable products, competitor\'s product recall creating market gap, new trade agreements opening export markets, emerging technologies enabling cost reductions.' },
          { text: '<b>Threats examples:</b> New low-cost competitor entering market, rising raw material costs, tighter government regulation, changing consumer preferences, economic recession reducing consumer spending.' }
        ]
      }
    },
    {
      id: 'h-convert',
      type: 'heading',
      data: { text: 'SWOT Strategy: Converting and Matching', level: 2 }
    },
    {
      id: 'p-convert',
      type: 'paragraph',
      data: { text: 'A <b>SWOT analysis is only useful if it leads to action</b>. The most valuable strategic exercise is to match the SWOT factors to formulate strategic options:' }
    },
    {
      id: 'list-tows',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>SO (Strength–Opportunity):</b> Use strengths to exploit opportunities. e.g. Strong R&D capability (S) + growing EV market (O) → invest in electric vehicle line.' },
          { text: '<b>WO (Weakness–Opportunity):</b> Overcome weaknesses by exploiting opportunities. e.g. Weak digital presence (W) + growing e-commerce market (O) → invest in digital platform.' },
          { text: '<b>ST (Strength–Threat):</b> Use strengths to mitigate threats. e.g. Strong brand loyalty (S) + new competitor (T) → increase customer engagement programmes.' },
          { text: '<b>WT (Weakness–Threat):</b> Defensive — minimise weaknesses and avoid threats. e.g. High debt (W) + rising interest rates (T) → prioritise debt reduction before expansion.' }
        ]
      }
    },
    {
      id: 'callout-key-convert',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Converting Weaknesses into Strengths',
        text: 'Weaknesses are not permanent — they can be addressed strategically:<br>• <b>Weak digital presence</b> → invest in e-commerce and social media marketing.<br>• <b>Over-reliance on one supplier</b> → diversify supplier base or vertically integrate.<br>• <b>Ageing product range</b> → increase R&D spending or acquire innovative rivals.<br>• <b>High staff turnover</b> → introduce performance incentives and improve working conditions.'
      }
    },
    {
      id: 'h-eval',
      type: 'heading',
      data: { text: 'Evaluating SWOT Analysis', level: 2 }
    },
    {
      id: 'tbl-eval',
      type: 'comparisonTable',
      data: {
        caption: 'Benefits and limitations of SWOT analysis',
        headers: ['Benefits', 'Limitations'],
        rows: [
          ['Simple and low cost to conduct', 'Can become a superficial list if not rigorously researched'],
          ['Provides a structured overview for strategic discussion', 'Factors are not weighted — all points appear equally important'],
          ['Applicable to any business or strategic decision', 'Static snapshot — environment changes quickly'],
          ['Identifies strategic fit between capabilities and environment', 'Subjectivity — managers may list strengths that are actually weaknesses (self-flattery bias)'],
          ['Foundation for more advanced tools (TOWS matrix)', 'Does not indicate what to do — only describes the situation']
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — SWOT for Nike',
        text: '<b>Strengths:</b> Global brand recognition, extensive sponsorship portfolio, strong digital sales platform, proprietary technology (Air, Flyknit).<br><b>Weaknesses:</b> Heavy reliance on Asian manufacturing (supply chain risk), premium pricing excludes some segments, past controversies over labour practices.<br><b>Opportunities:</b> Growing athleisure trend, direct-to-consumer growth, expansion in emerging markets (India, Africa).<br><b>Threats:</b> Rising competition from Adidas and new entrants (e.g. Lululemon), counterfeit products, trade tariffs affecting production costs.<br><br><b>SO strategy:</b> Use strong digital platform (S) to capture direct-to-consumer sales in emerging markets (O).<br><b>WT strategy:</b> Reduce manufacturing dependence on single Asian countries (W) to mitigate trade tariff threats (T).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'SWOT analysis evaluates <b>Strengths</b> and <b>Weaknesses</b> (internal) alongside <b>Opportunities</b> and <b>Threats</b> (external). The real value lies in the strategic response: SO, WO, ST, and WT strategies derived from matching factors (TOWS matrix). Weaknesses can be converted to strengths through targeted investment. SWOT\'s main limitations are subjectivity, lack of weighting, and being a static snapshot that does not prescribe action.' }
    },
    {
      id: 'enr-h-swot-viz',
      type: 'heading',
      data: { text: 'SWOT Grid \u2014 Visual Overview', level: 2 }
    },
    {
      id: 'enr-svg-swot',
      type: 'svg',
      data: {
        svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 340' font-family='Arial,sans-serif'><rect width='400' height='340' fill='#f9fafb' rx='8'/><text x='200' y='26' text-anchor='middle' font-size='14' font-weight='bold' fill='#1f2937'>SWOT Analysis Grid</text><rect x='20' y='38' width='175' height='135' fill='#d1fae5' stroke='#10b981' stroke-width='2' rx='4'/><text x='107' y='66' text-anchor='middle' font-size='15' font-weight='bold' fill='#065f46'>S \u2014 Strengths</text><text x='107' y='84' text-anchor='middle' font-size='9' fill='#065f46'>Internal - Positive</text><text x='30' y='104' font-size='9' fill='#374151'>Strong brand recognition</text><text x='30' y='120' font-size='9' fill='#374151'>Loyal customer base</text><text x='30' y='136' font-size='9' fill='#374151'>Patents and unique technology</text><text x='30' y='152' font-size='9' fill='#374151'>Skilled workforce and IP</text><rect x='205' y='38' width='175' height='135' fill='#fee2e2' stroke='#ef4444' stroke-width='2' rx='4'/><text x='292' y='66' text-anchor='middle' font-size='15' font-weight='bold' fill='#b91c1c'>W \u2014 Weaknesses</text><text x='292' y='84' text-anchor='middle' font-size='9' fill='#b91c1c'>Internal - Negative</text><text x='215' y='104' font-size='9' fill='#374151'>High debt levels</text><text x='215' y='120' font-size='9' fill='#374151'>Narrow product range</text><text x='215' y='136' font-size='9' fill='#374151'>Over-reliance on one supplier</text><text x='215' y='152' font-size='9' fill='#374151'>Poor digital presence</text><rect x='20' y='183' width='175' height='135' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='4'/><text x='107' y='211' text-anchor='middle' font-size='15' font-weight='bold' fill='#1d4ed8'>O \u2014 Opportunities</text><text x='107' y='229' text-anchor='middle' font-size='9' fill='#1d4ed8'>External - Positive</text><text x='30' y='249' font-size='9' fill='#374151'>Growing emerging markets</text><text x='30' y='265' font-size='9' fill='#374151'>New technology adoption</text><text x='30' y='281' font-size='9' fill='#374151'>Competitor product recall</text><text x='30' y='297' font-size='9' fill='#374151'>Shifting consumer trends</text><rect x='205' y='183' width='175' height='135' fill='#ffedd5' stroke='#f97316' stroke-width='2' rx='4'/><text x='292' y='211' text-anchor='middle' font-size='15' font-weight='bold' fill='#c2410c'>T \u2014 Threats</text><text x='292' y='229' text-anchor='middle' font-size='9' fill='#c2410c'>External - Negative</text><text x='215' y='249' font-size='9' fill='#374151'>New market entrants</text><text x='215' y='265' font-size='9' fill='#374151'>Economic recession</text><text x='215' y='281' font-size='9' fill='#374151'>Rising raw material costs</text><text x='215' y='297' font-size='9' fill='#374151'>Tighter regulation</text><text x='200' y='330' text-anchor='middle' font-size='9' fill='#6b7280'>S and W are INTERNAL. O and T are EXTERNAL.</text></svg>",
        caption: 'SWOT Grid: Strengths (green), Weaknesses (red), Opportunities (blue), Threats (orange)'
      }
    },
    {
      id: 'enr-callout-worked-amazon',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example \u2014 SWOT for Amazon (2024)',
        text: "<b>Strengths:</b> World-class logistics network; dominant cloud platform (AWS generates ~70% of Amazon's operating profit); Prime ecosystem creating high switching costs; vast customer data enabling personalisation.<br><br><b>Weaknesses:</b> Thin margins in retail; labour relations issues and high warehouse staff turnover; heavy dependence on third-party sellers increasing quality control risk.<br><br><b>Opportunities:</b> Rapid growth in AI services (Amazon Bedrock); healthcare expansion (One Medical acquisition); global e-commerce penetration in underpenetrated markets including India and SE Asia.<br><br><b>Threats:</b> Regulatory antitrust investigations in the EU and US; intensifying competition from Alibaba and Temu; potential data privacy legislation limiting advertising targeting.<br><br><b>SO strategy:</b> Use AWS cloud dominance (S) to commercialise AI products for enterprise clients (O) \u2014 e.g., Amazon Bedrock.<br><b>WT strategy:</b> Improve labour practices and warehouse automation (W) to reduce reputational and regulatory risk (T) before forced legislative change."
      }
    },
    {
      id: 'enr-callout-tip-swot',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip \u2014 Making SWOT Evaluative',
        text: 'A SWOT list alone earns low marks. To reach the top band: <b>(1) Prioritise</b> \u2014 identify the most significant factors for this specific business context. <b>(2) Cross-reference</b> \u2014 show how a Strength addresses a Threat (ST) or a Weakness amplifies a Threat (WT danger). <b>(3) Recommend action</b> \u2014 "The most urgent priority is converting the weak digital presence into a strength by investing in e-commerce before the online growth opportunity closes." <b>(4) Acknowledge limitations</b> \u2014 SWOT is a static snapshot; the environment changes before strategy is fully implemented.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SWOT: Strengths & Weaknesses (internal), Opportunities & Threats (external). Strategic actions: SO (use strengths for opportunities), WO (fix weaknesses via opportunities), ST (use strengths vs threats), WT (defensive). Weaknesses can be converted to strengths.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-swot', prompt: 'How does SWOT classify factors — by origin (internal/external) and by impact (positive/negative)?', answer: 'Internal positive = Strengths. Internal negative = Weaknesses. External positive = Opportunities. External negative = Threats.' },
      { id: 'cue-2', blockId: 'list-sw-examples', prompt: 'Give two examples each of a business Strength and a Weakness.', answer: 'Strengths: strong brand recognition, loyal customer base, low-cost operations, patent-protected products. Weaknesses: high debt, narrow product range, over-reliance on one supplier, poor digital presence.' },
      { id: 'cue-3', blockId: 'list-tows', prompt: 'Explain the SO, WO, ST, and WT strategic responses in a TOWS analysis.', answer: 'SO: use strengths to exploit opportunities. WO: overcome weaknesses by exploiting opportunities. ST: use strengths to mitigate threats. WT: defensive — minimise weaknesses and avoid threats.' },
      { id: 'cue-4', blockId: 'callout-key-convert', prompt: 'Give two examples of how a business can convert a weakness into a strength.', answer: 'Weak digital presence → invest in e-commerce. Over-reliance on one supplier → diversify supply base or vertically integrate. High staff turnover → introduce incentives and improve conditions.' },
      { id: 'cue-5', blockId: 'tbl-eval', prompt: 'State two limitations of SWOT analysis as a strategic tool.', answer: 'Factors are not weighted so all appear equally important. It is a static snapshot. It does not indicate what action to take. It is prone to subjectivity and self-flattery bias by managers.' },
      { id: 'cue-6', blockId: 'callout-worked', prompt: 'Using Nike as an example, describe one SO strategy and one WT strategy derived from a SWOT analysis.', answer: 'SO: use strong digital platform (strength) to capture direct-to-consumer sales in emerging markets (opportunity). WT: reduce dependence on single Asian manufacturing countries (weakness) to mitigate trade tariff threats (threat).' }
    ]
  },
  evidence: [],
  mentions: []
};
