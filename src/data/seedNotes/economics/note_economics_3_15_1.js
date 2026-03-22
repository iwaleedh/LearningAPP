export const note_economics_3_15_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate and interpret N-firm concentration ratios and the Herfindahl-Hirschman Index (HHI), and understand their limitations as measures of market power.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Concentration Ratio Calculations', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'A <strong>concentration ratio</strong> measures the degree to which a market is dominated by a small number of large firms. It is the most widely used indicator of market structure and competitive intensity.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'N-Firm Concentration Ratio', level: 2 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>N-firm concentration ratio (CRₙ)</strong> is calculated as the <strong>sum of the market shares of the top N firms</strong> in an industry. The most common is the <strong>CR4</strong> (top 4 firms) and <strong>CR5</strong>.' }] } },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: 'CR_N = s_1 + s_2 + s_3 + \\ldots + s_N',
        caption: 'where s₁, s₂, … sₙ are the market shares of the top N firms (expressed as percentages)'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Interpretation Benchmarks',
        text: 'CR4 > 60%: Oligopoly (concentrated market).<br/>CR1 > 25%: Dominant firm — may have significant market power (CMA threshold).<br/>CR4 < 40%: Competitive market with many significant players.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Worked Example: CR4 Calculation', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A market has 5 firms with the following market shares:<br/><br/>Firm A: 35% | Firm B: 22% | Firm C: 18% | Firm D: 14% | Firm E: 11%<br/><br/>CR4 = 35 + 22 + 18 + 14 = <strong>89%</strong><br/><br/>Interpretation: CR4 = 89% indicates a <strong>highly concentrated oligopoly</strong>. The top 4 firms control 89% of the market, leaving only 11% for all other competitors.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Herfindahl-Hirschman Index (HHI)', level: 2 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>HHI</strong> provides a more sophisticated measure of market concentration by squaring each firm\'s market share and summing the results. Squaring gives greater weight to larger firms, capturing the distribution of market power more accurately than a simple concentration ratio.' }] } },
    {
      id: 'eq-2',
      type: 'equation',
      data: {
        latex: 'HHI = \\sum_{i=1}^{n} s_i^2',
        caption: 'where sᵢ is the market share (%) of firm i; ranges from near 0 (perfect competition) to 10,000 (pure monopoly)'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'HHI interpretation thresholds (US DOJ / EU Commission guidelines)',
        headers: ['HHI Range', 'Market Structure', 'Regulatory Concern'],
        rows: [
          ['Below 1,000', 'Unconcentrated', 'Low — no action usually required'],
          ['1,000 – 1,800', 'Moderately concentrated', 'Moderate — mergers reviewed carefully'],
          ['Above 1,800', 'Highly concentrated', 'High — mergers likely challenged'],
          ['10,000', 'Pure monopoly', 'Maximum concern']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'HHI Worked Example (same market as above)',
        text: 'Firm A: 35% → 35² = 1,225<br/>Firm B: 22% → 22² = 484<br/>Firm C: 18% → 18² = 324<br/>Firm D: 14% → 14² = 196<br/>Firm E: 11% → 11² = 121<br/><br/>HHI = 1,225 + 484 + 324 + 196 + 121 = <strong>2,350</strong><br/><br/>Interpretation: HHI of 2,350 is <strong>highly concentrated</strong> — regulators would scrutinise any proposed merger between these firms.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Limitations of Concentration Ratios', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Geographic market definition</strong>: A nationally concentrated market may be locally competitive (e.g. supermarkets may have a national CR4 of 75% but local monopolies).' },
          { text: '<strong>Online markets</strong>: Digital platforms operate globally — a firm with 30% of the UK market may face intense competition from international rivals.' },
          { text: '<strong>Does not capture contestability</strong>: A concentrated market with low sunk costs may still behave competitively due to the threat of entry.' },
          { text: '<strong>Market definition problem</strong>: Results vary dramatically depending on how narrowly or broadly the market is defined (e.g. "cola" vs "soft drinks" vs "beverages").' },
          { text: '<strong>Static measure</strong>: Concentration ratios are a snapshot — they do not show trends in competition or market dynamics over time.' }
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "CR4 (or CR5) sums the market share of the 4 largest firms as a percentage. CR3 > 50% suggests oligopoly; CR1 < 25% suggests perfect competition. Use actual CR values from case studies to classify market structures\u2014examiners reward precise measurement over vague judgments."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "If asked to calculate an n-firm concentration ratio, just sum the market shares of the 'n' largest firms. Remember to state that a high concentration ratio signals an oligopolistic or monopolistic market structure."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'CR4 sums market shares of the top 4 firms; CR4 > 60% indicates oligopoly. HHI sums squared market shares — above 1,800 is highly concentrated. Both have limitations around market definition.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'How is the N-firm concentration ratio calculated?', answer: 'Sum of the market shares of the top N firms in the industry.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'What CR4 threshold indicates an oligopoly?', answer: 'CR4 greater than 60% indicates an oligopolistic market.' },
      { id: 'cue-3', blockId: 'eq-2', prompt: 'How is the HHI calculated?', answer: 'Sum of each firm\'s squared market share. Ranges from near 0 (competition) to 10,000 (monopoly).' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'What HHI level indicates a highly concentrated market?', answer: 'HHI above 1,800 is considered highly concentrated by regulators.' },
      { id: 'cue-5', blockId: 'list-1', prompt: 'Give two limitations of concentration ratios.', answer: 'Geographic market definition can distort results; online/global markets mean high national concentration does not imply limited competition.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_15_1;
