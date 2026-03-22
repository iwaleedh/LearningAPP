export const note_economics_4_21_6 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the drivers of income inequality between countries, including colonial legacy, geography, institutional quality, terms of trade, technology gaps, and FDI patterns.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Drivers of Inequality Between Countries', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Despite significant convergence since 1990 — primarily driven by China and other East Asian economies — large income gaps persist between countries. Per capita GNI in the USA ($65,000+ PPP) is over 100 times higher than in the Democratic Republic of Congo (~$600 PPP). Understanding why some countries remain poor while others are rich requires examining historical, geographic, institutional, and trade factors.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Drivers of Between-Country Inequality',
        headers: ['Driver', 'Mechanism', 'Evidence / Example'],
        rows: [
          ['Colonial legacy', 'Colonial extraction of resources; imposed extractive institutions; borders ignoring ethnic groups; slave trade; suppressed industrialisation', 'Acemoglu, Johnson, Robinson: former colonies with extractive institutions have lower growth; sub-Saharan Africa; Haiti'],
          ['Geography (landlocked, tropical)', 'Higher transport costs (landlocked); tropical disease burden reduces labour productivity; difficult agriculture', 'Sachs: tropical countries grow 1-2% slower; landlocked developing countries face 50% higher trade costs'],
          ['Institutional quality', 'Weak rule of law, insecure property rights, corruption → reduced investment, capital flight, lower productivity', 'Transparency International CPI: countries with high corruption have significantly lower GDP per capita; North vs South Korea'],
          ['Commodity terms of trade', 'Prebisch-Singer: commodity prices fall relative to manufactures long-run → commodity exporters face deteriorating ToT', 'Agricultural commodity prices fell ~2% p.a. in real terms 1900-1990; resource curse in oil exporters (Nigeria)'],
          ['Technology gaps', 'Developing countries have less access to frontier technologies; lower R&D; limited absorptive capacity', 'TFP differences account for most of cross-country income gaps (Hall and Jones 1999)'],
          ['FDI flows bypass poorest', 'FDI concentrates in middle-income countries with better infrastructure; least-developed countries get less than 2% of global FDI', 'Sub-Saharan Africa receives <5% of global FDI despite high poverty; OECD countries attract most FDI']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Colonial Legacy', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Acemoglu, Johnson, and Robinson (2001) argued that colonial institutions have persistent effects on development. Colonies where Europeans settled and built inclusive institutions (USA, Canada, Australia) are richer today. Colonies where Europeans extracted resources using forced labour and built extractive institutions (Belgian Congo, much of Latin America) are poorer. This "reversal of fortune" framework shows colonial institutions explain a significant part of cross-country income differences today, centuries later.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Resource Curse', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Paradoxically, countries abundant in natural resources often perform worse than resource-poor countries — the <strong>resource curse</strong>. Mechanisms include: Dutch disease (resource boom appreciates the exchange rate, crowding out manufacturing); corruption and rent-seeking (resource revenues enrich elites without broad development); volatility (commodity price swings destabilise government revenues); conflict over resource control. Nigeria, Angola, and the DRC are often cited despite vast oil and mineral wealth.'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Institutions vs Geography',
        text: 'A classic debate in development economics is whether geography or institutions explain cross-country income differences. Sachs emphasises geography (tropical disease, transport costs). Acemoglu et al emphasise institutions (colonial legacy, property rights, rule of law). The exam-style answer: both matter — geography shapes initial conditions; institutions determine whether advantages are exploited or resources squandered.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Examiners reward historical and institutional depth. Explain persistent effects: colonial extractive institutions (e.g. no property rights, monopolies) remain embedded in governance; geography constrains trade (landlocked nations pay high shipping costs); technology gaps compound (poor countries cannot develop high-value manufacturing). Use examples: Sub-Saharan Africa vs East Asia divergence over 60 years."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students treat these drivers as one-off barriers rather than self-reinforcing traps. Poor institutions \u2192 low FDI inflow \u2192 technology stagnation \u2192 continued poverty. Don't say 'colonial legacy explains everything' \u2014 explain mechanisms. Also avoid geographic determinism ('geography is destiny'). Development is possible despite geography (Singapore example), so institutions and policy matter more. Cite evidence, not just theory."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Never confuse the fiscal deficit (the annual shortfall in government revenue compared to spending) with the national debt (the total accumulated outstanding borrowing)."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Between-country inequality reflects colonial legacy (extractive institutions), geography (landlocked, tropical disease), institutional quality (rule of law, property rights), commodity ToT trends (Prebisch-Singer), technology gaps, and FDI bypassing the poorest countries.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'tbl-1',
        prompt: 'Explain the Prebisch-Singer hypothesis and its implication for commodity exporters.',
        answer: 'Prebisch-Singer argues that commodity prices fall relative to manufactured goods prices over the long run (by ~2% p.a. historically). This means commodity-exporting developing countries face a secular deterioration in their terms of trade, requiring ever more exports to buy the same manufactured imports — undermining development.'
      },
      {
        id: 'cue-2',
        blockId: 'para-2',
        prompt: 'Explain Acemoglu, Johnson and Robinson\'s institutions hypothesis for cross-country income inequality.',
        answer: 'AJR (2001) argued that colonial institutions have persistent effects. Where Europeans settled and built inclusive institutions (property rights, rule of law), countries are rich today. Where Europeans built extractive institutions (forced labour, extraction of resources), countries are poor today. This "reversal of fortune" suggests institutions explain a large part of cross-country income differences.'
      },
      {
        id: 'cue-3',
        blockId: 'para-3',
        prompt: 'What is the resource curse and what mechanisms drive it?',
        answer: 'The resource curse is the paradox that natural resource abundance often correlates with poor development outcomes. Mechanisms: Dutch disease (resource boom appreciates exchange rate, crowding out manufacturing); corruption and rent-seeking (elites capture resource revenues); commodity price volatility destabilises government revenues; conflict over resource control.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_6;
