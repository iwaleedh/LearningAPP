export const note_economics_4_23_11 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Analyse the effects of international migration on sending countries, distinguishing brain drain, remittances, and return migration effects in the short and long run.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Migration Effects on Development', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'International migration has complex and contested effects on the development of sending (origin) countries. The effects depend on: who emigrates (skill level), the volume and composition of remittances, the likelihood and nature of return migration, and the sector and region from which migrants depart. Migration effects can be simultaneously positive (remittances, diaspora networks) and negative (brain drain, labour shortages).'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Brain Drain', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: '<strong>Brain drain</strong> occurs when skilled and highly educated workers — doctors, engineers, nurses, scientists, teachers — emigrate permanently, depriving the origin country of high-productivity human capital. The fiscal dimension is particularly damaging: the origin country paid for the education of these workers (through subsidised schools and universities) but receives no return on this investment. The receiving country benefits from a human capital windfall at no cost. Africa loses an estimated 70,000 skilled professionals annually; many African countries have more nurses and doctors working abroad than at home.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Remittances', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: '<strong>Remittances</strong> — money sent home by migrants — are the largest and most stable source of external finance for many developing countries. Global remittances exceeded $800 billion in 2023 — more than three times total Official Development Assistance (foreign aid). For specific countries, remittances are economically critical: Tajikistan (50%+ of GDP), Tonga (44%), Nepal (26%), Philippines (9%). Key advantages over aid: directly received by families (no government intermediary to corrupt); counter-cyclical in host countries (migrants send more when origin country suffers shocks); flexible in use (families choose consumption, education, healthcare). Limitations: high transfer costs (average ~6.2% globally); can create dependency; used mainly for consumption rather than productive investment.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Return Migration', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: '<strong>Return migration</strong> — when migrants return permanently or temporarily to their origin country — can be significantly beneficial: returnees bring back skills acquired abroad, financial savings to invest, business networks, technological knowledge, and changed attitudes toward governance and entrepreneurship. Taiwan and South Korea\'s economic transformations were partly driven by return of US-educated engineers and scientists from their diaspora. Return migration is most beneficial when origin countries develop sufficient economic opportunities to attract returnees — a chicken-and-egg problem.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Migration Effects on Sending Countries: Short Run vs Long Run',
        headers: ['Effect', 'Short Run', 'Long Run'],
        rows: [
          ['Skilled labour loss (brain drain)', 'Immediate loss of skilled workforce; service gaps (healthcare, education)', 'Persistent if economic development insufficient to attract returnees; potential for "brain gain" if diaspora returns with more skills/capital'],
          ['Remittances', 'Immediate income support for families; increases household consumption, school enrolment, healthcare use', 'May create dependency; limited productive investment; vulnerable to migration policy changes in receiving countries'],
          ['Labour market effects', 'Reduced labour supply may raise wages for remaining workers', 'Long run: reduced productivity growth if skilled emigrants not replaced'],
          ['Diaspora networks', 'Immediate social connections to receiving country labour markets', 'Long run: trade networks, FDI channels, technology transfer, business partnerships'],
          ['Return migration', 'Minimal initially', 'Significant if origin country develops sufficiently: returnees bring capital, skills, and networks']
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Migration has negative effects (brain drain — loss of skilled workers educated at public expense) and positive effects (remittances — >$800bn globally, 3x foreign aid; return migration bringing skills and capital); net effect depends on migration composition, remittance use, and return rates.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Why is brain drain particularly costly for developing countries beyond the loss of skilled labour?',
        answer: 'The fiscal dimension: developing countries paid for the education of skilled workers through subsidised schools and universities, but receive no return on this investment when workers emigrate. The receiving country benefits from a human capital windfall at zero cost. Africa loses 70,000 skilled professionals annually — many countries have more nurses and doctors working abroad than at home.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Why are remittances considered more valuable than foreign aid as a development finance source?',
        answer: 'Remittances exceed $800bn globally — 3x total ODA. They are directly received by families (bypassing potentially corrupt governments); counter-cyclical (migrants send more when origin countries suffer shocks); flexible in use (families choose how to spend). No political conditionality attached. Downside: high transfer costs (~6.2% average) and used mainly for consumption rather than investment.'
      },
      {
        id: 'cue-3',
        blockId: 'para-4',
        prompt: 'How can return migration generate a "brain gain" for developing economies?',
        answer: 'Return migrants bring back skills acquired abroad, financial savings for investment, international business networks, technological knowledge, and new attitudes toward entrepreneurship and governance. Taiwan and South Korea\'s economic transformations were partly driven by return of US-educated engineers and scientists. The challenge is creating sufficient economic opportunities at home to attract returnees — a chicken-and-egg problem.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_23_11;
