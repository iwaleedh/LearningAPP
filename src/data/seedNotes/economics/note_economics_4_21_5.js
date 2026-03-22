export const note_economics_4_21_5 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain the key drivers of rising inequality within countries, including skill-biased technological change, globalisation, declining union power, and returns to capital vs labour.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Drivers of Within-Country Inequality', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Income inequality within most advanced economies increased significantly from the 1980s to the 2010s. The UK Gini coefficient rose from ~0.26 in 1979 to ~0.36 by the early 1990s. Multiple structural factors drove this trend, often reinforcing each other. Understanding these drivers is essential for designing effective policy responses.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Skill-Biased Technological Change (SBTC)', level: 3 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Advances in computing, automation, and artificial intelligence <strong>complement</strong> high-skilled workers (raising their productivity and wages) while <strong>substituting</strong> for routine middle-skilled workers (cashiers, bank tellers, assembly workers). This "hollowing out" of middle-skill jobs creates a polarised labour market — growing demand and wages at the top and bottom (non-routine cognitive and manual jobs) with a shrinking middle. The "college wage premium" — the extra earnings from higher education — has risen substantially since the 1980s.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Globalisation', level: 3 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Trade integration with low-wage developing countries has: (1) reduced demand for low-skilled labour in advanced economies (import competition); (2) enabled capital owners to threaten to offshore production, weakening workers\' bargaining power; (3) increased returns to capital (mobile) relative to labour (less mobile). The Heckscher-Ohlin model predicts trade between capital-abundant rich countries and labour-abundant poor countries should raise returns to capital and lower wages for low-skilled labour in rich countries — consistent with observed trends.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Declining Trade Union Power', level: 3 }
    },
    {
      id: 'para-4',
      type: 'paragraph',
      data: {
        text: 'Trade union membership in the UK fell from ~50% of workers in 1980 to ~23% by 2022. Unions compress wage distributions by pushing up wages for low-paid members and through collective bargaining that covers non-members. The decline of unions removed upward wage pressure at the bottom of the distribution while leaving executive pay unrestricted — contributing to a widening pay ratio between top and bottom. Factors behind union decline: deindustrialisation, legislation (Thatcher anti-union laws), and the growth of self-employment and gig work.'
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Returns to Capital vs Labour (Labour Share)', level: 3 }
    },
    {
      id: 'para-5',
      type: 'paragraph',
      data: {
        text: 'The <strong>labour share of national income</strong> — the proportion of GDP going to wages rather than profits — has fallen in most advanced economies since the 1970s. Capital owners have captured a growing share of output. This matters for inequality because capital income is far more concentrated at the top of the distribution than labour income. Causes include: increased capital intensity of production, monopoly power (allowing supernormal profits), and declining worker bargaining power.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Drivers of Within-Country Inequality',
        headers: ['Driver', 'Mechanism', 'Evidence'],
        rows: [
          ['Skill-biased technological change', 'Technology complements skilled workers, substitutes routine middle-skilled jobs — polarises labour market', 'College wage premium doubled in US since 1980; hollowing out of middle-skill employment'],
          ['Globalisation (trade)', 'Import competition reduces low-skill wages; capital mobility weakens labour bargaining', 'Autor, Dorn, Hanson: "China Shock" reduced US manufacturing wages in affected regions'],
          ['Declining trade unions', 'Less collective bargaining; bottom wages squeezed; top pay unchecked', 'UK union density fell from 50% (1980) to 23% (2022); rising CEO-to-worker pay ratios'],
          ['Returns to capital > labour', 'Falling labour share as capital captures more of output; concentrated capital ownership', 'Labour share in OECD fell ~5pp from 1970s to 2010s; corporate profit margins at historical highs'],
          ['Financial sector expansion (financialisation)', 'Very high pay in finance; asset price inflation benefits wealth holders', 'Financial sector wages rose 50-60% faster than economy-wide wages 1980-2008']
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "Connect drivers to macroeconomic trends. Skill-biased tech change raises returns to high-education workers \u2014 examiners reward you for linking this to the college premium. Globalisation shifts wages: capital and high-skill labour gain, while unskilled workers in developed economies lose. Declining unions reduce wage-bargaining power. Always evaluate the relative magnitudes \u2014 which driver is most significant?"
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Students blame globalisation uniformly as 'causing inequality' without nuance. Globalisation raises inequality between countries (convergence) but within countries depends on skill distribution. Also, claims like 'declining unions cause inequality' need qualification: unions raise wages for members but may exclude others. Distinguish between correlation and causation; Edexcel expects critical appraisal of evidence."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Within-country inequality rose due to skill-biased technological change (complementing skilled workers), globalisation (weakening low-skilled labour), declining union power (compressing less wage structure), and falling labour share (capital capturing more output).',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-2',
        prompt: 'Explain skill-biased technological change and its effect on wage inequality.',
        answer: 'SBTC means technology complements high-skilled workers (raising their productivity and wages) while substituting for routine middle-skilled workers (automation). This polarises the labour market — growing demand at the top and bottom, shrinking middle. The college wage premium has risen substantially, widening income inequality.'
      },
      {
        id: 'cue-2',
        blockId: 'para-4',
        prompt: 'How has declining trade union membership contributed to rising inequality?',
        answer: 'Unions compress wage distributions by bargaining for higher wages for lower-paid members. UK union density fell from 50% (1980) to 23% (2022), removing upward wage pressure at the bottom while leaving executive pay unchecked — widening the pay ratio between top and bottom earners.'
      },
      {
        id: 'cue-3',
        blockId: 'para-5',
        prompt: 'Why does a falling labour share of national income worsen income inequality?',
        answer: 'Capital income (profits, dividends, capital gains) is far more concentrated at the top of the income distribution than labour income (wages). If capital captures a larger share of GDP, income distribution becomes more skewed towards the wealthy. The labour share fell ~5 percentage points in OECD countries from the 1970s to 2010s.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_4_21_5;
