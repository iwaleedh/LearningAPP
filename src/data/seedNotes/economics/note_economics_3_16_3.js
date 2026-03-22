export const note_economics_3_16_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse factors that determine the price elasticity of supply of labour and explain its implications for wage and employment outcomes.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Supply Elasticity', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Price elasticity of supply of labour (PES_L)</strong> measures the responsiveness of the quantity of labour supplied to a change in the wage rate.<br/>PES_L = % change in quantity of labour supplied ÷ % change in wage rate.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Determinants of Labour Supply Elasticity', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Training and qualification requirements</strong> — long training periods make labour supply inelastic in the short run (e.g. surgeons, pilots). Quick-to-learn skills → elastic supply.' }, { text: '<strong>Geographical mobility</strong> — high mobility makes supply more elastic (workers can relocate to fill vacancies quickly).' }, { text: '<strong>Occupational mobility</strong> — transferable skills → more elastic supply; highly specialised skills → inelastic.' }, { text: '<strong>Time period</strong> — supply is more elastic in the long run (workers can retrain or relocate given time).' }, { text: '<strong>Size of the labour pool</strong> — large pool of unemployed or underemployed workers → elastic supply in that sector.' }] } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Elastic vs Inelastic Labour Supply — Examples', headers: ['Labour type', 'Elasticity', 'Reason'], rows: [['Unskilled/general labour', 'Elastic', 'Large pool, no specialist training required'], ['Brain surgeons', 'Inelastic', '10+ years training; cannot be quickly replaced'], ['Software developers', 'Moderately elastic', 'Training 3–4 years; strong demand internationally'], ['Domestic cleaners', 'Elastic', 'Low skills, large available supply'] ] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Inelastic labour supply matters for wage determination: if a shortage arises in an inelastic market (e.g. nurses), wages rise sharply with little supply response — this is why healthcare and teaching often face persistent shortages despite wage increases.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour supply elasticity depends on: training length, mobility, skill specificity, and time horizon. Inelastic supply → wage rises following demand shocks don\'t attract many new workers quickly (e.g. doctors). Elastic supply → small wage change brings many new workers.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Not all occupations have the same labour supply elasticity. Professional services often have inelastic supply (higher qualifications), while unskilled labour may have more elastic supply \u2014 always justify why supply is elastic or inelastic for a specific labour market."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "The elasticity of labour supply heavily depends on the skill level required. Unskilled jobs have a highly elastic supply as workers can easily switch, whereas professions requiring long training times (e.g. doctors) have very inelastic supply."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Labour supply is inelastic when: long training needed, low mobility, highly specialised skills, short run. Elastic when: low skills, large pool, geographically mobile, long run.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'State four factors that make the supply of labour inelastic.', answer: 'Long training/qualification requirements, low geographical mobility (workers unwilling to relocate), low occupational mobility (skills non-transferable), and the short-run time period (workers cannot change sectors quickly). Also: small size of the available labour pool.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Why is the supply of brain surgeons inelastic but the supply of cleaners is elastic?', answer: 'Brain surgeons require 10+ years of specialist medical training — supply cannot respond quickly to wage increases. Cleaners require little formal training, have large available pools of workers, and skills transfer easily — supply responds readily to wage changes.' },
    ]
  },
  evidence: [], mentions: []
};
