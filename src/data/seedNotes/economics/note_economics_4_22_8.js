export const note_economics_4_22_8 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Distinguish between cyclical and structural fiscal deficits, explain why the distinction matters for policy, and evaluate methods of identifying each component.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Structural vs Cyclical Deficits', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'The overall fiscal deficit has two components: a <strong>cyclical</strong> component (caused automatically by the economic cycle) and a <strong>structural</strong> component (the underlying deficit that would remain even at full employment). Distinguishing between them is crucial for fiscal policy design — the appropriate policy response differs fundamentally depending on which type of deficit predominates.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Cyclical vs Structural Deficits',
        headers: ['Feature', 'Cyclical Deficit', 'Structural Deficit'],
        rows: [
          ['Cause', 'Economic downturn: lower tax revenues + higher automatic benefit spending', 'Fundamental mismatch between planned spending and revenues even at full employment'],
          ['Identification', 'Disappears when economy returns to potential output; moves with output gap', 'Persists even when economy is at full employment; present across all stages of cycle'],
          ['Policy response', 'Allow automatic stabilisers to work; no deliberate action needed', 'Requires deliberate policy: spending cuts, tax increases, or structural reforms'],
          ['UK example', 'UK deficit widened from 2.5% to 11.5% of GDP in 2008-10 as recession hit revenues', 'UK structural deficit estimated at ~4-5% of GDP in 2010 — required austerity to address'],
          ['OBR role', 'OBR estimates cyclically adjusted budget balance to separate structural from cyclical', 'OBR fiscal rules typically target cyclically adjusted current balance — structural deficit']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How Cyclical Deficits Arise: Automatic Stabilisers', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'When the economy enters recession: (1) incomes fall → income tax revenues fall automatically; (2) corporate profits fall → corporation tax revenues fall; (3) spending falls → VAT revenues fall; (4) unemployment rises → unemployment benefit payments rise; (5) in-work benefit claims rise. All these effects worsen the fiscal position automatically — without any policy change. These are the <strong>automatic stabilisers</strong>. They prevent the recession deepening further (by cushioning income falls) but create a cyclical deficit.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Structural Deficits: Causes and Persistence', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'A structural deficit reflects a permanent gap between planned spending and revenues. Causes include: ageing population commitments (pension spending rising faster than revenue growth); permanently lower trend growth (reducing the tax base); tax cuts not matched by spending cuts; or spending programmes added in boom years that create permanent obligations. The structural deficit cannot be solved by economic growth alone — it requires deliberate policy adjustment (spending cuts, tax rises, or structural reform to boost potential output).'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Practical Difficulty: Estimating the Output Gap',
        text: 'Separating structural from cyclical deficits requires estimating the output gap (actual GDP vs potential GDP). This is notoriously difficult in real time. The OBR and IMF have repeatedly revised their output gap estimates significantly after the fact. Policymakers who thought a deficit was cyclical (and waited for recovery) later discovered it was largely structural (requiring austerity). This uncertainty is a major source of fiscal policy error.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The structural/cyclical distinction is frequently tested. Key point: a cyclical deficit self-corrects as the economy recovers; a structural deficit requires deliberate policy action. The Osborne austerity programme (2010) was driven by the judgment that most of the UK deficit was structural, not cyclical — though this was contested by many economists who argued it was largely cyclical.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Distinguish cyclical (from recessions, automatic) vs structural (policy-driven, permanent). Examiners reward this because it explains why deficits sometimes are appropriate. UK cyclical deficit 2008\u20132010 was unavoidable (income fell, welfare rose automatically); structural deficits since 2010 reflect policy choices (low tax rates, spending commitments). Methods: estimate potential GDP via trend, compare actual to potential. If output gap shrinks, cyclical part should fall. Use data: 'UK structural deficit remained 2\u20133% even post-recovery, reflecting policy choices.'"
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume all deficits are equivalent. In reality, cyclical deficits reverse naturally as growth returns (no policy action needed); structural deficits persist and require tax hikes or spending cuts. Also, estimating structural deficits is hard \u2014 economists disagree on potential GDP. Don't say 'deficit is bad' without distinguishing type. Edexcel expects: 'Cyclical deficits are stabilizers; structural deficits require policy action if they're judged unsustainable.'"
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Examiner Tip",
        text: "Understand unconventional monetary policy, particularly Quantitative Easing (QE). Explain exactly how the central bank buying bonds aims to increase the money supply and lower long-term interest rates."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Cyclical deficits arise automatically from recession (lower revenues, higher benefits) and disappear as the economy recovers; structural deficits persist even at full employment and require deliberate policy; distinguishing them requires estimating the output gap — which is difficult in real time.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Distinguish between cyclical and structural fiscal deficits.',
        answer: 'Cyclical deficits are caused by economic downturns: lower tax revenues and higher automatic benefit spending. They disappear when the economy returns to full employment. Structural deficits persist even at full employment — they reflect a permanent gap between planned spending and revenues, requiring deliberate policy (spending cuts or tax rises) to address.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Explain how automatic stabilisers create a cyclical deficit during a recession.',
        answer: 'In a recession: incomes fall → income tax revenues fall; corporate profits fall → corporation tax falls; consumer spending falls → VAT falls; unemployment rises → benefit payments rise. All these worsen the fiscal position automatically without policy decisions, creating a cyclical deficit that stabilises the economy but increases borrowing.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'Why is it difficult to separate structural from cyclical deficits in practice?',
        answer: 'Doing so requires estimating the output gap (actual vs potential GDP), which is very difficult in real time. Output gap estimates are revised substantially after the fact. Policymakers who thought their deficit was cyclical later found it was structural, or vice versa. This uncertainty is a major source of fiscal policy error — applying austerity to a cyclical deficit deepens the recession unnecessarily.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_8;
