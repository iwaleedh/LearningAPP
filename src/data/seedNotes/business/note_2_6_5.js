export const note_business_2_6_5 = {
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Compare the four main legal forms of business — sole trader, partnership, private limited company (Ltd), and public limited company (plc) — across ownership, liability, finance, control, and continuity.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Business Legal Forms', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <b>legal form</b> of a business determines its legal identity, the liability of its owners, how it can raise finance, how profits are taxed, and the degree of control owners retain. Choosing the correct legal structure is a critical decision at start-up and during growth.' }
    },
    {
      id: 'h-sole',
      type: 'heading',
      data: { text: 'Sole Trader', level: 2 }
    },
    {
      id: 'p-sole',
      type: 'paragraph',
      data: { text: 'A <b>sole trader</b> is a business owned and run by one person. It is the <b>simplest and most common</b> form of business in most economies. There is no legal separation between the owner and the business.' }
    },
    {
      id: 'list-sole',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> easy and cheap to set up; full control over decisions; owner keeps all profits; minimal legal reporting requirements; privacy (accounts not publicly disclosed)' },
          { text: '<b>Disadvantages:</b> <b>unlimited liability</b> — personal assets at risk; limited access to finance (cannot issue shares); success depends on one person; no business continuity if owner dies or retires' }
        ]
      }
    },
    {
      id: 'h-partner',
      type: 'heading',
      data: { text: 'Partnership', level: 2 }
    },
    {
      id: 'p-partner',
      type: 'paragraph',
      data: { text: 'A <b>partnership</b> is a business owned by two or more people who share responsibilities and profits. A <b>Deed of Partnership</b> sets out profit-sharing ratios, roles, and procedures for disputes. <b>Limited Liability Partnerships (LLPs)</b> give some or all partners limited liability — common in professions like law and accountancy.' }
    },
    {
      id: 'list-partner',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> more capital available than sole trader; partners share skill sets and workload; easier continuity if one partner leaves (subject to Deed)' },
          { text: '<b>Disadvantages:</b> generally <b>unlimited liability</b> (unless LLP); profits shared; potential for dispute between partners; one partner can legally bind others' }
        ]
      }
    },
    {
      id: 'h-ltd',
      type: 'heading',
      data: { text: 'Private Limited Company (Ltd)', level: 2 }
    },
    {
      id: 'p-ltd',
      type: 'paragraph',
      data: { text: 'A <b>private limited company (Ltd)</b> is a separate legal entity from its owners (shareholders). Shareholders have <b>limited liability</b> — they can only lose the amount they paid for their shares. Shares can be sold privately but <b>cannot be advertised to the public</b>.' }
    },
    {
      id: 'list-ltd',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> limited liability protects shareholders; separate legal identity; can raise capital by selling shares privately; greater credibility with suppliers and lenders' },
          { text: '<b>Disadvantages:</b> more complex and costly to set up (must register at Companies House); annual accounts must be filed publicly; less flexible than sole trader; original owners lose some control as shareholders multiply' }
        ]
      }
    },
    {
      id: 'h-plc',
      type: 'heading',
      data: { text: 'Public Limited Company (plc)', level: 2 }
    },
    {
      id: 'p-plc',
      type: 'paragraph',
      data: { text: 'A <b>public limited company (plc)</b> can offer shares to the general public via a stock exchange. This allows it to raise very large amounts of capital but requires extensive disclosure and compliance with stock exchange regulations.' }
    },
    {
      id: 'list-plc',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantages:</b> access to very large capital sums; higher public profile and brand credibility; easier to grow through acquisitions (using shares as currency)' },
          { text: '<b>Disadvantages:</b> vulnerable to hostile takeovers; costly to float (legal, stock exchange fees); full public disclosure required; short-term shareholder pressure can conflict with long-term strategy' }
        ]
      }
    },
    {
      id: 'h-table',
      type: 'heading',
      data: { text: 'Comparison Table', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of Business Legal Forms',
        headers: ['Feature', 'Sole Trader', 'Partnership', 'Private Ltd (Ltd)', 'Public Ltd (plc)'],
        rows: [
          ['Owners', '1 owner', '2–20 partners', 'Shareholders (private)', 'Shareholders (public)'],
          ['Liability', 'Unlimited', 'Unlimited (unless LLP)', 'Limited', 'Limited'],
          ['Taxation', 'Income tax on profits', 'Income tax on share of profit', 'Corporation tax', 'Corporation tax'],
          ['Share capital', 'Not available', 'Not available', 'Private placement only', 'Stock exchange (IPO)'],
          ['Control', 'Full owner control', 'Shared between partners', 'Board of directors', 'Board (shareholder pressure)'],
          ['Setup cost', 'Very low', 'Low', 'Moderate (registration)', 'High (flotation costs)'],
          ['Continuity', 'Ends on death/retirement', 'Depends on Deed', 'Permanent legal entity', 'Permanent legal entity'],
          ['Accounts', 'Private', 'Private', 'Filed at Companies House', 'Fully public + audited']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In questions asking you to recommend a legal form, always consider: size and funding needs, how much control the owner wants to retain, liability concerns, and stage of business growth. An entrepreneur starting a small local business suits a sole trader; a rapidly growing tech firm needing £1m+ investment suits a private limited company or plc.'
      }
    },
    {
      id: 'call-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Incorporated vs Unincorporated',
        text: '<b>Incorporated</b> businesses (Ltd, plc) are registered at Companies House and become <b>separate legal entities</b> — the company owns its own assets and is responsible for its own debts. Shareholders have limited liability.<br><br><b>Unincorporated</b> businesses (sole traders, general partnerships) have <b>no legal separation</b> between owner and business — the owner IS the business for legal purposes, creating unlimited personal liability.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define sole trader, partnership, Ltd, and plc — giving one key feature of each', checked: false },
          { text: 'I can explain unlimited and limited liability and which legal forms each applies to', checked: false },
          { text: 'I can explain what a Deed of Partnership covers', checked: false },
          { text: 'I can state that Ltd and plc are incorporated (separate legal entities) while sole traders and partnerships are not', checked: false },
          { text: 'I can use the comparison table to contrast legal forms across liability, tax, finance, and control', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The four main legal forms are: <b>sole trader</b> (simplest, unlimited liability, full control — no separation from owner), <b>partnership</b> (shared resources and skills, generally unlimited liability, governed by Deed of Partnership), <b>private limited company — Ltd</b> (incorporated, limited liability, shares sold privately, separate legal entity), and <b>public limited company — plc</b> (shares publicly traded on stock exchange, maximum capital access, full disclosure). Ltd and plc are incorporated; sole traders and partnerships are unincorporated and carry personal liability risk.' }
    },
    {
      id: 'enr-t6b-h5-evolve',
      type: 'heading',
      data: { text: 'How Businesses Evolve Their Legal Form', level: 2 }
    },
    {
      id: 'enr-t6b-p5-evolve',
      type: 'paragraph',
      data: { text: 'Many businesses start as a <b>sole trader</b> because setup is free and instant, then <b>convert to a Ltd</b> once growth demands more capital, employees, or credibility. The conversion is triggered when: (1) the owner wants to protect personal assets from business risk, (2) outside investors want to buy equity, or (3) the business needs to raise significant finance beyond what a sole trader can access. Registering a company at Companies House costs as little as £12 and moves the owner from unlimited to limited liability.' }
    },
    {
      id: 'enr-t6b-5-call-brand',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real World: Dragon\'s Den — Why Sole Traders Can\'t Sell Equity',
        text: 'In BBC\'s <b>Dragon\'s Den</b>, entrepreneurs pitch to business angels who take an equity stake in exchange for investment. A sole trader <b>cannot issue shares</b> — there is no company to invest into. Every successful deal requires the entrepreneur to be incorporated as a <b>Ltd</b> so the Dragon can become a legal shareholder. Contestants who arrive as sole traders are routinely told to incorporate first. This highlights a key practical reason to become a Ltd: it makes the business <b>investment-ready</b>, even before any investment is needed.'
      }
    },
    {
      id: 'enr-t6b-5-call-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student Tip: Your First Business',
        text: 'Starting a side hustle selling things online or freelancing? You automatically become a <b>sole trader</b> — free and instant to set up. But if you take on any business debt (stock loan, equipment) or bring in a partner, unlimited liability becomes a real risk. Registering a <b>Ltd costs just £12</b> at Companies House and legally separates your personal savings from business debts. Most business-savvy students incorporate early — it\'s cheaper than you think and protects far more than you realise.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Use a comparison matrix: sole trader (easy, risky), partnership (shared liability, partnership dispute risk), Ltd (separate entity, heavy compliance), plc (flotation cost, scrutiny). Structuring comparisons this way demonstrates command of the topic."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming Ltd and plc differ only in size. The key distinction is trading purpose\u2014plc shares are publicly traded on stock exchange; Ltd shares are private. This affects capital access, regulation, and governance fundamentally."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Sole traders and partnerships are unincorporated with unlimited liability; Ltd and plc are incorporated with limited liability. Each form differs in ownership, finance options, control, and legal obligations.',
    cues: [
      { id: 'cue-1', blockId: 'p-sole', prompt: 'What is a sole trader and what is their main disadvantage?', answer: 'A business owned and run by one person with no legal separation from the owner. The main disadvantage is unlimited liability — the owner\'s personal assets can be seized to pay business debts.' },
      { id: 'cue-2', blockId: 'p-partner', prompt: 'What is a Deed of Partnership and what does it cover?', answer: 'A legal agreement between partners setting out profit-sharing ratios, roles and responsibilities, and procedures for resolving disputes or admitting new partners.' },
      { id: 'cue-3', blockId: 'p-ltd', prompt: 'What does it mean that a company is a separate legal entity?', answer: 'The company can own assets, enter contracts, and be sued in its own name, independently of its shareholders. Shareholders are only liable for the amount they invested.' },
      { id: 'cue-4', blockId: 'table-compare', prompt: 'Compare how a sole trader and a plc are taxed.', answer: 'A sole trader pays income tax on business profits. A plc pays corporation tax on company profits, and shareholders then pay income tax on dividends — a form of double taxation.' },
      { id: 'cue-5', blockId: 'list-plc', prompt: 'Give two disadvantages of being a plc compared to a Ltd.', answer: 'Vulnerable to hostile takeovers (shares are publicly available); full public disclosure of accounts and performance required; short-term shareholder pressure on management.' }
    ]
  },
  evidence: [],
  mentions: []
};
