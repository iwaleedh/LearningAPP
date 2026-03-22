export const note_economics_3_16_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain geographical labour immobility, analyse its causes and effects on regional wage and employment disparities, and evaluate policy responses.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Geographical Labour Immobility', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Geographical immobility</strong> occurs when workers are unable or unwilling to move between regions or locations to take up job opportunities, despite wage differentials.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Causes of Geographical Immobility', level: 2 } },
    { id: 'list-causes', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Housing costs</strong> — high property prices in high-demand regions (e.g. London) prevent workers from affordable relocation, especially on lower incomes.' }, { text: '<strong>Family and social ties</strong> — workers reluctant to leave family networks, friends, or established communities.' }, { text: '<strong>Children\'s schooling</strong> — disrupting children\'s education acts as a barrier to relocation.' }, { text: '<strong>Regional cultural differences</strong> — language barriers (cross-country), unfamiliar environment.' }, { text: '<strong>Ownership of property</strong> — homeowners face mortgage and selling costs; renters are more mobile.' }, { text: '<strong>Information gaps</strong> — lack of awareness about job opportunities in other regions.' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Consequences', level: 2 } },
    { id: 'list-eff', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Regional unemployment</strong> — workers stuck in high-unemployment areas (e.g. former industrial towns in the North East, South Wales) cannot easily access southern jobs.' }, { text: '<strong>Regional wage disparities</strong> — wages remain higher in shortfall regions and lower in surplus regions, rather than equalising.' }, { text: '<strong>Skills mismatch</strong> — vacancies unfilled in booming areas; labour wasted in depressed regions.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Policy Responses', text: 'Government policies to increase geographical mobility:<br/>• <strong>Subsidised housing/rent allowances</strong> for workers relocating.<br/>• <strong>Investment in regional infrastructure</strong> (HS2, Levelling Up) to reduce regional disparities.<br/>• <strong>Job information services</strong> (Universal Jobmatch) to reduce information gaps.<br/>• <strong>Enterprise zones</strong> — attract firms to depressed regions instead of moving workers.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Geographical immobility: workers can\'t/won\'t move for jobs. Causes: housing costs, family ties, schooling disruption. Effects: regional wage gaps, structural unemployment. Policies: relocation subsidies, regional investment, enterprise zones.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Geographical immobility is not just about transport costs. High housing prices, family ties, regional identity, and reluctance to relocate create persistent regional unemployment differences \u2014 the immobility is structural, not just logistical."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Geographical immobility occurs when workers cannot easily move to where jobs are. Always link this to housing market disparities (high rent in cities) and strong family or social ties preventing migration."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Geographical labour immobility: workers unable/unwilling to relocate. Main barriers: housing costs, family ties. Effects: regional unemployment disparities, wage gaps persist. Policy: relocation help, regional investment.',
    cues: [
      { id: 'cue-1', blockId: 'list-causes', prompt: 'State three causes of geographical labour immobility.', answer: 'High housing costs in destination regions (especially London), strong family and social ties to home area, disruption to children\'s schooling on relocation, property ownership (costs of selling/buying), and lack of information about job opportunities in other regions.' },
      { id: 'cue-2', blockId: 'list-eff', prompt: 'How does geographical immobility lead to regional unemployment disparities?', answer: 'Workers in depressed high-unemployment areas (e.g. former industrial regions) cannot easily move to booming job-rich areas due to housing or family constraints. Labour markets fail to clear through mobility — wage differentials persist, vacancies remain unfilled in growth areas, and structural unemployment continues in decline areas.' },
    ]
  },
  evidence: [], mentions: []
};
