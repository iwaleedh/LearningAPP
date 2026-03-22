export const note_economics_2_7_13 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the economic and social effects of unemployment on individuals and the wider economy, and understand the concept of hysteresis.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Effects of Unemployment', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effects on Individuals', level: 3 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Loss of income</strong>: reduced standard of living; reliance on benefits; difficulty meeting mortgage/rent payments' },
          { text: '<strong>Skills atrophy</strong>: the longer out of work, the more human capital depreciates — skills become outdated' },
          { text: '<strong>Mental health</strong>: depression, anxiety, and low self-esteem strongly correlated with unemployment; suicide rates rise in recessions' },
          { text: '<strong>Social exclusion</strong>: loss of workplace social connections, reduced participation in society' },
          { text: '<strong>Reduced career prospects</strong>: long gaps in employment records stigmatise job seekers; employers may discriminate' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effects on the Economy', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Lost output</strong>: the economy operates below its productive potential — GDP is below the production possibility frontier' },
          { text: '<strong>Lost tax revenue</strong>: unemployed workers pay no income tax or National Insurance; lower consumer spending reduces VAT receipts' },
          { text: '<strong>Higher government spending</strong>: unemployment benefits, housing support, and other welfare payments increase' },
          { text: '<strong>Widening budget deficit</strong>: tax revenues fall and spending rises simultaneously (automatic stabiliser in reverse)' },
          { text: '<strong>Reduced consumption and AD</strong>: unemployed households cut spending → multiplier effect reduces national income further' },
          { text: '<strong>Brain drain</strong>: skilled workers may emigrate to find work, reducing human capital in the domestic economy' },
          { text: '<strong>Regional inequality</strong>: structural unemployment concentrated in former industrial areas exacerbates geographic inequality' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hysteresis',
        text: '<strong>Hysteresis</strong>: the idea that long-term unemployment becomes self-perpetuating — it raises the <strong>NAIRU</strong> permanently.<br/><br/>Mechanism: workers who are unemployed for extended periods lose skills, motivation, and employability. Employers become reluctant to hire them. They become effectively structurally unemployed even if the original cause was cyclical.<br/><br/>Policy implication: if demand management ends a recession slowly, cyclical unemployment can convert into structural unemployment — raising the natural rate permanently.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Short-run vs long-run effects of unemployment',
        headers: ['Dimension', 'Short-Run Effects', 'Long-Run Effects'],
        rows: [
          ['Individual income', 'Immediate income loss; reliance on benefits', 'Poverty trap; persistent lower lifetime earnings'],
          ['Skills', 'Minor depreciation', 'Significant human capital loss; hysteresis raises NAIRU'],
          ['Output', 'Below-potential GDP; lost current output', 'Lower productive capacity if capital investment falls too'],
          ['Government finances', 'Automatic stabilisers activated; deficit widens', 'Structural (not just cyclical) deficit if prolonged'],
          ['Social', 'Stress, mental health problems', 'Social exclusion, crime, family breakdown']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Unemployment causes loss of income and skills for individuals, and lost output, lower tax revenues, and higher welfare spending for the economy. Hysteresis means long-term unemployment can permanently raise the natural rate.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Evaluate the effects of unemployment on different economic agents: workers (lost skills/hysteresis), government (higher welfare spending, lower tax revenue), and firms (easier to recruit, downward pressure on wages)."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Unemployment: individual effects (income loss, mental health, skills atrophy); economy (lost output, lower taxes, higher spending). Hysteresis raises NAIRU long-term.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-2',
        prompt: 'Why does unemployment worsen government finances?',
        answer: 'Tax revenues fall (less income tax, NI, VAT) while government spending rises (unemployment benefits, housing support) — the budget deficit widens.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'What is hysteresis in the context of unemployment?',
        answer: 'Hysteresis is when long-term unemployment becomes self-perpetuating — workers lose skills and employability, raising the NAIRU permanently, so the economy\'s full-employment level deteriorates.'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Give two effects of unemployment on individuals.',
        answer: 'Loss of income; skills atrophy (human capital depreciates); mental health problems; social exclusion; reduced career prospects.'
      },
      {
        id: 'cue-4',
        blockId: 'list-2',
        prompt: 'What is meant by "lost output" due to unemployment?',
        answer: 'The economy operates below its productive potential — unemployed workers could be contributing to GDP but are not, so actual output is below the production possibility frontier.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_13;
