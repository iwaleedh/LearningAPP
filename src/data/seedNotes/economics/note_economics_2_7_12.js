export const note_economics_2_7_12 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Classify the different types of unemployment, understand their causes, and identify the appropriate policy response for each type including NAIRU.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Unemployment', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of unemployment — cause and policy cure',
        headers: ['Type', 'Definition', 'Cause', 'Policy Response'],
        rows: [
          ['Frictional', 'Short-term unemployment between jobs as people search for new work', 'Normal job search process; always exists even at "full employment"', 'Improve job information (Universal Jobmatch); reduce search time; training for better matching'],
          ['Structural', 'Mismatch between skills of unemployed workers and skills demanded by employers; often linked to deindustrialisation or technological change', 'Decline of industries (e.g., coal, steel); automation displacing workers; geographical immobility', 'Retraining and reskilling; regional policy; relocation incentives; education reform'],
          ['Cyclical (demand-deficient)', 'Unemployment caused by insufficient aggregate demand during a recession — the most serious type', 'Recession; fall in consumer and business spending; tight monetary or fiscal policy', 'Expansionary fiscal policy (stimulus); expansionary monetary policy (lower interest rates); quantitative easing'],
          ['Seasonal', 'Unemployment that follows predictable patterns related to seasons of the year', 'Tourism jobs end in winter; harvest work ends in autumn; construction slows in winter', 'Diversify local economy; flexibility contracts; out-of-season tourism promotion'],
          ['Voluntary', 'Workers choose not to work at prevailing wage rates because benefits/reservation wage > offered wage', 'High relative benefits; minimum wage below reservation wage', 'Reduce benefits relative to wages; improve work incentives; Universal Credit design']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'NAIRU — Non-Accelerating Inflation Rate of Unemployment',
        text: '<strong>NAIRU</strong>: the rate of unemployment at which inflation is neither accelerating nor decelerating — the "natural rate of unemployment."<br/><br/>At NAIRU, the labour market is in equilibrium: only frictional and structural unemployment remain (no cyclical unemployment).<br/><br/>If unemployment falls below NAIRU, workers gain bargaining power, wages rise, costs increase → inflation accelerates.<br/><br/>NAIRU is sometimes called the <strong>natural rate of unemployment (NRU)</strong>.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Voluntary vs Involuntary Unemployment', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Voluntary unemployment</strong>: workers choose not to accept jobs at the prevailing wage (their reservation wage is higher than available wages) — includes frictional and some seasonal' },
          { text: '<strong>Involuntary unemployment</strong>: workers are willing to work at the prevailing wage but cannot find jobs — includes cyclical and structural unemployment' },
          { text: 'Classical economists argued most unemployment is voluntary (real wages above equilibrium due to unions/minimum wage)' },
          { text: 'Keynesians argued most unemployment is involuntary, caused by insufficient demand' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Match the type of unemployment to the correct policy: <strong>cyclical → demand management</strong> (fiscal/monetary); <strong>structural → supply-side</strong> (retraining, education); <strong>frictional → better information</strong>. Applying the wrong policy is a common error.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Five main types: frictional (job search), structural (skills mismatch), cyclical (low AD), seasonal, and voluntary. NAIRU is the minimum unemployment consistent with stable inflation. Each type requires different policy.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Match the type of unemployment to the correct policy: cyclical \u2192 demand management (fiscal/monetary); structural \u2192 supply-side (retraining, education); frictional \u2192 better information. Applying the wrong policy is a common error."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Frictional = job search; structural = skills mismatch; cyclical = low AD; NAIRU = natural rate (frictional + structural only).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'What causes structural unemployment?',
        answer: 'A mismatch between workers\' skills and those demanded by employers, often due to deindustrialisation, technological change, or geographical immobility.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'What is NAIRU?',
        answer: 'The Non-Accelerating Inflation Rate of Unemployment — the rate at which only frictional and structural unemployment exist and inflation is stable. Also called the natural rate of unemployment.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'What policy is appropriate for cyclical unemployment?',
        answer: 'Expansionary demand management — fiscal stimulus (increased government spending/tax cuts) or expansionary monetary policy (lower interest rates) to boost aggregate demand.'
      },
      {
        id: 'cue-4',
        blockId: 'list-1',
        prompt: 'What is the difference between voluntary and involuntary unemployment?',
        answer: 'Voluntary: workers choose not to work at the prevailing wage (reservation wage too high). Involuntary: workers want to work at prevailing wages but cannot find jobs.'
      },
      {
        id: 'cue-5',
        blockId: 'tbl-1',
        prompt: 'What type of unemployment is caused by the decline of traditional industries?',
        answer: 'Structural unemployment — the skills of former workers no longer match the needs of expanding sectors.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_12;
