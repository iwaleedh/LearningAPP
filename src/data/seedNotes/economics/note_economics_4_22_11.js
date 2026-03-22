export const note_economics_4_22_11 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the post-2008 macroeconomic policy response, including bank bailouts, fiscal stimulus, austerity, and unconventional monetary policy at the zero lower bound.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Post-2008 Policy Response', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The 2008 Global Financial Crisis triggered the most significant macroeconomic policy response since the Great Depression. Governments and central banks across the advanced world deployed an unprecedented range of instruments. The response evolved through several distinct phases: emergency crisis management (2008-09), fiscal stimulus (2009), fiscal consolidation/austerity (2010+), and unconventional monetary policy (2009 onwards).'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Post-2008 Policy Timeline: UK and Global',
        headers: ['Phase', 'Period', 'Key Policies', 'Outcomes'],
        rows: [
          ['Emergency bank bailouts', '2008', 'UK government part-nationalised RBS and Lloyds; TARP ($700bn) in US; global guarantees of interbank lending', 'Prevented systemic banking collapse; at peak UK government owned 80% of RBS; taxpayers exposed to £500bn+ in guarantees'],
          ['G20 Fiscal Stimulus', '2009', 'G20 leaders coordinated ~2% of GDP fiscal stimulus; UK VAT cut; US $787bn Recovery Act; China $585bn stimulus', 'Global recession shallower than Great Depression; avoided debt deflation spiral; deepened public debt across the world'],
          ['UK Coalition Austerity', '2010-2015', 'Spending cuts + some tax rises targeting £120bn consolidation; real-terms cuts to most departments except NHS and pensions', 'Deficit reduced from ~11% GDP to ~4%; growth disappointed (double-dip recession 2012); controversy over speed of consolidation'],
          ['Quantitative Easing (QE)', '2009-2021', 'Bank of England purchased £895bn gilts; US Fed $8.9 trillion QE; ECB €5 trillion+; zero/negative interest rates', 'Asset prices and housing prices rose; exchange rate effects; limited direct impact on bank lending in early years; wealth inequality arguably worsened'],
          ['Zero Lower Bound (ZLB)', '2009-2021', 'Bank Rate at 0.1-0.5% for 12+ years; ECB deposit rate negative (-0.5%); normal monetary policy tools ineffective', 'Required unconventional policies (QE, forward guidance); fiscal policy became more important as monetary space exhausted'],
          ['COVID-19 response', '2020-2021', 'UK furlough scheme (£70bn+); unprecedented £450bn borrowing in 2020-21; further QE; base rate cut to 0.1%', 'Unemployment peaked at 5% (vs predicted 11%+); sharp recovery; then surge in inflation 2022-23 requiring rate rises']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Austerity Debate', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The UK\'s shift to fiscal austerity in 2010 was controversial. Keynesians (including IMF economists, who initially supported austerity then revised their view) argued the fiscal multiplier was larger than thought (especially at the ZLB) — cutting spending reduced GDP more than expected, making deficit reduction self-defeating. Osborne\'s government argued the structural deficit was large, market confidence required consolidation, and the recession would have been worse without addressing the deficit. The multiplier vs confidence debate remains unresolved empirically.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'IMF Multiplier Revision 2012',
        text: 'In 2012, IMF economists Blanchard and Leigh published research showing fiscal multipliers in advanced economies were much larger than assumed (1.5-1.7 rather than 0.5). This meant austerity was reducing GDP by £1.50-1.70 for every £1 of fiscal consolidation — making deficit reduction much more painful and slower than expected. This forced a partial reassessment of austerity across the Eurozone, though UK policy was slower to adjust.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Show detailed knowledge of post-2008 policy: bank bail-outs (\u00a3137bn UK) preserved financial stability but raised moral hazard; fiscal stimulus (2008\u20132010) was temporary then austerity reversed it; QE (quantitative easing, \u00a3375bn UK) lowered yields and boosted asset prices but inequality rose. Examiners reward critical appraisal: 'Bail-outs prevented depression but created zombie banks; QE favoured asset-owners.' Use timeline and magnitudes. Reference Edexcel case studies if provided."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students simplify 2008 policy as 'just bail-outs and stimulus' without recognizing their contradictions. Bail-outs without resolution created long-term distortions; austerity after stimulus was premature (Keynesian logic says maintain support until recovery). QE risked inflation but inflation remained low due to weak demand. Don't polarize as 'right or wrong' \u2014 examiners expect you to weigh trade-offs. Say: 'Bail-outs necessary but lax regulation enabled excess risk-taking.'"
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Post-2008 response: bank bailouts (2008) prevented systemic collapse; G20 coordinated stimulus (2009) prevented second Great Depression; UK austerity (2010-15) reduced deficit but slowed growth; QE and zero interest rates (2009-2021) represented unprecedented monetary intervention; COVID triggered new wave of borrowing.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Why was the 2009 G20 fiscal stimulus significant and what was its outcome?',
        answer: 'G20 leaders coordinated a ~2% of GDP fiscal stimulus globally — unprecedented international coordination. It included UK VAT cuts, US $787bn Recovery Act, and China\'s $585bn infrastructure programme. The outcome was a shallower recession than the Great Depression (though still severe) and avoidance of debt deflation; at the cost of significantly higher public debt across advanced economies.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'What was the Keynesian critique of UK austerity from 2010?',
        answer: 'Keynesians argued fiscal multipliers at the zero lower bound were larger than the government assumed. Spending cuts reduced GDP by more than expected, making deficit reduction self-defeating — lower GDP meant lower tax revenues, partly offsetting the spending cuts. The double-dip recession of 2012 supported this critique. IMF economists revised multiplier estimates up to 1.5-1.7 in 2012.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_11;
