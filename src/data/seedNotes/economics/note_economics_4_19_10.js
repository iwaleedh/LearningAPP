export const note_economics_4_19_10 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the mechanisms of tariffs, quotas, and non-tariff barriers as tools of trade protection, and analyse their economic effects on consumers, producers and government.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Tariffs, Quotas and Non-Tariff Barriers', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Key Definitions', text: '<strong>Tariff</strong>: a tax on imported goods, raising their domestic price. Generates government revenue; reduces import quantity; protects domestic producers.<br/><br/><strong>Quota</strong>: a quantitative limit on imports. No revenue for government unless import licences are auctioned. The quota rent (price premium due to scarcity) may be captured by foreign exporters.<br/><br/><strong>Non-tariff barrier (NTB)</strong>: any restriction other than a tariff — subsidies, technical standards, sanitary regulations, procurement rules, voluntary export restraints (VERs).' } },
    { id: 'h-2', type: 'heading', data: { text: 'Welfare Effects of a Tariff', level: 2 } },
    { id: 'list-tariff', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumer surplus loss</strong>: domestic price rises → consumers pay more and buy less imported goods.' }, { text: '<strong>Producer surplus gain</strong>: domestic producers expand output at the higher price.' }, { text: '<strong>Government revenue</strong>: tariff revenue = tariff rate × quantity imported.' }, { text: '<strong>Deadweight loss</strong>: two triangles — one from domestic overproduction at higher cost; one from consumer under-consumption. Net welfare loss even if government gains revenue.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Tariff vs Quota Comparison', level: 2 } },
    { id: 'tbl-compare', type: 'comparisonTable', data: { caption: 'Tariff vs Quota: Key Differences', headers: ['Criterion', 'Tariff', 'Quota'], rows: [['Revenue', 'Government receives tariff revenue', 'No govt revenue unless licences auctioned; foreign exporters may capture "quota rent"'], ['Flexibility', 'Import volume adjusts with demand shifts', 'Strict ceiling regardless of domestic demand'], ['Transparency', 'Price effect visible in import price', 'Quantity limit less visible to consumers'], ['WTO legality', 'Permitted; bound rates listed', 'More restricted; often illegal or require negotiations']] } },
    { id: 'h-4', type: 'heading', data: { text: 'Non-Tariff Barriers (NTBs)', level: 2 } },
    { id: 'list-ntb', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Subsidies</strong>: direct government payments or tax breaks to domestic producers; reduce their cost relative to imports. E.g. EU Common Agricultural Policy farm subsidies.' }, { text: '<strong>Technical standards and regulations</strong>: safety, hygiene, labelling requirements that imports must meet — can be used as hidden protection. E.g. US standards blocking EU beef exports.' }, { text: '<strong>Voluntary Export Restraints (VERs)</strong>: exporting country agrees to limit exports — politically negotiated. The restraint protects domestic producers while avoiding WTO violation. E.g. Japan limiting US car exports 1981.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Tariff: tax on imports → raises price, generates revenue, deadweight loss. Quota: quantitative limit → no government revenue; quota rent may go to exporters. NTBs: subsidies, technical standards, VERs — increasingly dominant as tariffs fall. All create welfare losses for domestic consumers.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Compare tariffs vs quotas rigorously: tariffs generate tax revenue but cause welfare loss through deadweight; quotas create scarcity rents for license holders and offer no government revenue. Exams test whether you explain why countries choose differently."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Make sure you can contrast floating exchange rates (determined purely by market forces) with managed systems (central bank intervention to keep the rate within a bounds)."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Tariff: tax on imports, raises price, generates government revenue, creates deadweight loss. Quota: quantity limit, no revenue (quota rent goes to exporters). NTBs: subsidies, standards, VERs — harder to see and harder to negotiate away.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-compare', prompt: 'Compare the economic effects of a tariff and a quota.', answer: 'Both raise the domestic price of imports and protect domestic producers, reducing consumer surplus and causing a deadweight loss. Key difference: tariff generates government revenue (tariff rate × import volume); quota transfers the price premium (quota rent) to the holders of import licences — if these are foreigners, revenue leaves the country. A tariff allows import volume to respond to demand shifts; a quota enforces a rigid ceiling. Tariffs are also more transparent than quotas.' },
    ]
  },
  evidence: [], mentions: []
};
