export const note_economics_4_22_2 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the relationship between public spending share of GDP, economic growth, and Wagner\'s Law; evaluate the crowding-out debate.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Public Spending, GDP Share and Economic Effects', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Public spending as a share of GDP varies significantly across countries and over time. In advanced economies it typically ranges from 35-55% of GDP. Understanding what determines this share and how it affects economic performance is central to debates about the appropriate size of the state.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Wagner\'s Law', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Wagner\'s Law</strong> (Adolph Wagner, 1883) states that public spending rises as a share of GDP as economies develop. As per capita income rises, demand for public goods (infrastructure, social protection, education, regulation) grows more than proportionately — public goods are income-elastic. Industrialisation also creates externalities and market failures requiring government correction. Wagner\'s Law is broadly supported empirically: the UK\'s public spending share rose from ~10% of GDP in 1900 to ~40-45% today.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Cross-Country Variation', level: 3 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Public Spending as % of GDP: Country Comparison',
        headers: ['Country', 'Public Spending (% GDP, approx)', 'Key Features'],
        rows: [
          ['France', '~57-58%', 'Largest public sector among major economies; extensive social protection; high taxes'],
          ['Nordic countries (Sweden, Denmark)', '~50-52%', 'Very high spending; universal public services; funded by broad-based taxation'],
          ['Germany', '~45-47%', 'Social market economy; large social insurance system; moderate public investment'],
          ['UK', '~42-45%', 'Mixed system; NHS; large benefit system; significant austerity 2010-18'],
          ['USA', '~37-39%', 'Smaller state; limited social insurance; high defence; private healthcare dominates'],
          ['South Korea', '~30-32%', 'Rapidly developing; smaller welfare state; high private saving and education spending']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Crowding Out', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Crowding out</strong> occurs when government borrowing to finance public spending raises interest rates, reducing private sector investment. This is the main supply-side critique of large government: if government competes with the private sector for loanable funds, the cost of borrowing rises, deterring business investment that would have raised productive capacity. Financial crowding out is most likely when the economy is at or near full capacity and the central bank does not accommodate the fiscal expansion.'
      }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Counter-arguments: <strong>crowding in</strong> — public investment in infrastructure may raise the return to private investment by reducing costs. At the zero lower bound (when interest rates cannot fall further), government borrowing does not raise rates, so crowding out is negligible. Empirical evidence from post-2008 austerity suggests public spending cuts did not boost private investment to offset them — the multiplier on cuts was larger than predicted.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Crowding Out vs Crowding In',
        text: 'Always consider context when discussing crowding out. Crowding out is most likely at full employment with market interest rates responding to government borrowing. In a recession with a large output gap and interest rates at the floor, crowding out is minimal and government spending may "crowd in" private investment by raising demand and business confidence.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Wagner's Law states that public spending as % of GDP rises with development (industrialisation \u2192 urbanisation \u2192 demand for public goods). Show evidence: UK went from ~10% (1900) to ~40% (2020). Examiners reward you for linking spending growth to genuine demand (healthcare, education, pensions in ageing societies) rather than blaming bureaucracy. Evaluate whether high spend % harms growth \u2014 evidence is mixed; correlation \u2260 causation. Use data trends."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students assume 'higher spending share = slower growth' (right-wing assumption) or 'higher spending = faster growth' (left-wing assumption). Research shows no clear pattern \u2014 composition matters more than size. Also, don't just cite Wagner's Law as inevitable; it's a correlation driven by specific conditions (development stage, preferences). High-spend Scandinavia has strong growth; high-spend Southern Europe stagnates. Say: 'Spending composition and efficiency matter more than total % of GDP.'"
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Wagner\'s Law predicts public spending rises as a share of GDP with development; advanced economies range from 35-58% of GDP; crowding out occurs when government borrowing raises interest rates reducing private investment, but crowding in may occur when public infrastructure raises private returns.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'State Wagner\'s Law and explain the mechanism behind it.',
        answer: 'Wagner\'s Law states public spending rises as a share of GDP as economies develop. As per capita income rises, demand for public goods (infrastructure, education, social protection) grows more than proportionately — they are income-elastic. Industrialisation creates externalities and market failures requiring government correction, further expanding public activity.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Explain the crowding out mechanism and under what conditions it is most likely.',
        answer: 'Crowding out occurs when government borrowing to finance spending raises interest rates, reducing private sector investment. It is most likely when the economy is at or near full capacity (no spare resources) and when the central bank does not accommodate the fiscal expansion. It is least likely in recessions with large output gaps and interest rates at the lower bound.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_22_2;
