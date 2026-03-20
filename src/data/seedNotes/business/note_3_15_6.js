export const note_business_3_15_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse and calculate HR metrics including labour turnover, retention, and absenteeism rates.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Turnover', level: 2 } },
    { id: 'p-1', type: 'paragraph', data: { text: 'Labour turnover measures the rate at which employees leave a business over a given period. High turnover can be a sign of poor motivation or poor working conditions, and it incurs high recruitment and training costs.' } },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Turnover Formula', text: 'Labour Turnover (%) = (Number of staff leaving during year ÷ Average number of staff employed) × 100' } },
    { id: 'h-2', type: 'heading', data: { text: 'Retention Rate', level: 2 } },
    { id: 'p-2', type: 'paragraph', data: { text: 'Retention rate measures the ability of a business to keep its employees. A high retention rate indicates a stable, motivated workforce.' } },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'Retention Formula', text: 'Retention Rate (%) = (Number of staff staying for the whole year ÷ Number of staff at start of year) × 100' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [
      { text: '\**High Turnover Cons:\** High recruitment costs, loss of expertise, low team morale, reduced productivity during onboarding.' },
      { text: '\**High Turnover Pros:\** Brings in "fresh blood" and new ideas, easy way to reduce workforce size if demand drops.' }
    ] } },
    { id: 'h-2', type: 'heading', data: { text: 'Absenteeism', level: 2 } },
    { id: 'p-3', type: 'paragraph', data: { text: 'Absenteeism measures the rate at which staff are absent from work. Persistent, unscheduled absenteeism disrupts production schedules, forces the use of expensive agency cover, and stresses the remaining workforce.' } },
    { id: 'call-3', type: 'callout', data: { style: 'key', title: 'Absenteeism Formula', text: 'Absenteeism Rate (%) = (Number of staff absent ÷ Total number of staff) × 100 \nOR (Total days lost to absence ÷ Total possible working days) × 100' } },
    { id: 'tbl-1', type: 'comparisonTable', data: {
      caption: 'Causes & Solutions for HR Metrics',
      headers: ['Issue', 'Potential Causes', 'HR Strategies'],
      rows: [
        ['High Turnover', 'Poor pay, toxic culture, rigid hours', 'Better benefits, flexible working, career paths'],
        ['High Absenteeism', 'Stress, bullying, illness, lack of motivation', 'Wellness programs, strict disciplinary actions, job enrichment']
      ]
    } },
    { id: 'sum-1', type: 'summary', data: { text: 'Turnover, retention, and absenteeism are critical indicators of workforce morale and stability. Actively monitoring these metrics helps firms implement strategies to maintain productivity and minimize recruitment and absence costs.' } },
    {
      id: 'enr-svg-hr-metrics',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 280"><rect width="560" height="280" fill="#0f172a"/><text x="280" y="25" text-anchor="middle" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937">HR Metrics Dashboard</text><path d="M 80 200 A 70 70 0 0 1 220 200" fill="none" stroke="#e5e7eb" stroke-width="18"/><path d="M 80 200 A 70 70 0 0 1 220 200" fill="none" stroke="#dc2626" stroke-width="18" stroke-dasharray="183 220" stroke-dashoffset="0"/><circle cx="150" cy="170" r="0" fill="none"/><text x="150" y="175" text-anchor="middle" font-size="16" fill="#dc2626" font-family="sans-serif" font-weight="bold">75%</text><text x="150" y="195" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">Labour Turnover</text><text x="150" y="230" text-anchor="middle" font-size="9" fill="#9ca3af" font-family="sans-serif">McDonald's typical</text><path d="M 210 200 A 70 70 0 0 1 350 200" fill="none" stroke="#e5e7eb" stroke-width="18"/><path d="M 210 200 A 70 70 0 0 1 350 200" fill="none" stroke="#f59e0b" stroke-width="18" stroke-dasharray="66 220" stroke-dashoffset="0"/><text x="280" y="175" text-anchor="middle" font-size="16" fill="#d97706" font-family="sans-serif" font-weight="bold">4%</text><text x="280" y="195" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">Absenteeism Rate</text><text x="280" y="230" text-anchor="middle" font-size="9" fill="#9ca3af" font-family="sans-serif">UK average 3.4%</text><path d="M 340 200 A 70 70 0 0 1 480 200" fill="none" stroke="#e5e7eb" stroke-width="18"/><path d="M 340 200 A 70 70 0 0 1 480 200" fill="none" stroke="#10b981" stroke-width="18" stroke-dasharray="202 220" stroke-dashoffset="0"/><text x="410" y="175" text-anchor="middle" font-size="16" fill="#059669" font-family="sans-serif" font-weight="bold">92%</text><text x="410" y="195" text-anchor="middle" font-size="10" fill="#6b7280" font-family="sans-serif">Retention Rate</text><text x="410" y="230" text-anchor="middle" font-size="9" fill="#9ca3af" font-family="sans-serif">John Lewis target</text></svg>`,
        caption: 'HR metrics dashboard: high turnover (red) = costly; absenteeism (amber) = productivity drag; retention (green) = stability'
      }
    },
    {
      id: 'enr-callout-mcdonalds',
      type: 'callout',
      data: {
        style: 'worked',
        title: "McDonald's UK — labour turnover cost analysis",
        text: "McDonald's UK reports ~75% annual labour turnover. With ~135,000 UK employees, that's ~100,000 recruitment and training cycles per year. At approximately £1,000 per recruit, churn costs roughly £100 million per year. McDonald's mitigates this with standardised training programmes and flexible shift patterns that attract students and part-time workers."
      }
    },
    {
      id: 'enr-callout-tip-turnover',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam tip: labour turnover formula and context',
        text: 'Labour turnover = (Leavers ÷ Average workforce) × 100. High turnover is costly (recruitment, training, lost productivity, customer service impact) — but some turnover is healthy (prevents stagnation, brings fresh ideas). Retail and hospitality have structurally high turnover vs law and finance. Always compare to industry average before judging.'
      }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is the formula for Labour Turnover?', answer: '(Number of staff leaving during year ÷ Average number of staff) × 100' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'How is the Retention Rate calculated?', answer: '(Number of staff staying the whole year ÷ Number of staff at start of year) × 100' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What is a major cost associated with high labour turnover?', answer: 'High recruitment and training costs, along with lost productivity during onboarding.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'Provide one formula for measuring Absenteeism.', answer: '(Total days lost to absence ÷ Total possible working days) × 100' },
      { id: 'cue-5', blockId: 'list-1', prompt: 'Can high labour turnover occasionally be beneficial? Why?', answer: 'Yes, because it brings in new ideas ("fresh blood") and naturally reduces the workforce if the firm needs to downsize.' }
    ],
    summaryText: 'HR metrics like turnover, retention, and absenteeism allow firms to diagnose low morale and high staff costs.'
  }
};