const fs = require('fs');
const path = require('path');

const data = {
  "note_2_6_0": `export const note_business_2_6_0 = {
  id: '2.6.0',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand the purpose and importance of a business plan.' } },
    { type: 'heading', id: 'h-1', data: { text: 'What is a Business Plan?', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'A business plan is a formal, written document that sets out the details of a proposed business. It outlines the business\\'s goals, strategies for achieving them, and the timeframe within which these goals are to be met.' } },
    { type: 'heading', id: 'h-2', data: { text: 'The Purpose of a Business Plan', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'To secure external finance (e.g., from banks or investors).' },
      { text: 'To ensure realistic goal setting and clear direction.' },
      { text: 'To highlight potential problems and risks early on.' },
      { text: 'To act as a benchmark against which actual performance can be measured.' },
      { text: 'To understand the target market and competitors through thorough research.' }
    ]} },
    { type: 'callout', id: 'tip-1', data: { style: 'tip', title: 'Why it matters', text: 'Without a clear business plan, acquiring a bank loan is almost impossible for an entrepreneur, as banks need to see evidence of how the loan will be repaid.' } },
    { type: 'heading', id: 'h-3', data: { text: 'Benefits vs Limitations', level: 3 } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Benefits and Limitations of Business Planning',
      headers: ['Benefits', 'Limitations'],
      rows: [
        ['Provides a clear strategy and focus', 'Can be time-consuming and expensive to produce'],
        ['Helps secure funding from lenders/investors', 'Forecasts are only estimates; reality may differ greatly'],
        ['Helps identify risks and mitigate them', 'May restrict flexibility if managers rigidly stick to the plan'],
        ['Acts as a motivational tool for the team', 'An inaccurate or overly optimistic plan can lead to failure']
      ]
    }},
    { type: 'summary', id: 'sum-1', data: { text: 'A business plan is essential for giving a business direction and acquiring finance, but its effectiveness depends heavily on the accuracy of the underlying market research and forecasts.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A business plan maps out a company’s future route and secures finance, though it cannot guarantee success.',
    cues: [
      { id: 'cue-1', blockId: 'h-2', prompt: 'Give three main purposes of a business plan.', answer: '1. Secure finance. 2. Set clear direction/goals. 3. Identify potential risks early.' },
      { id: 'cue-2', blockId: 'ct-1', prompt: 'State one limitation of relying heavily on a business plan.', answer: 'Forecasts are just estimates and might be inaccurate; sticking too rigidly to a plan can reduce flexibility.' },
      { id: 'cue-3', blockId: 'p-1', prompt: 'Define a business plan.', answer: 'A formal document outlining the details of a business, its goals, strategies, and timeframe for achievement.' },
      { id: 'cue-4', blockId: 'ct-1', prompt: 'How does a business plan act as a benchmark?', answer: 'It sets targets and forecasts that actual performance can be measured against to check if the business is on track.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_1": `export const note_business_2_6_1 = {
  id: '2.6.1',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Examine the key contents and sections of a typical business plan.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Key Contents of a Business Plan', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'A comprehensive business plan needs to cover several key sections to provide a complete picture of the enterprise and its prospects.' } },
    { type: 'list', id: 'l-1', data: { style: 'numbered', items: [
      { text: 'Executive Summary: A brief overview of the plan.' },
      { text: 'Business Details: Information on the business name, product/service, and legal structure.' },
      { text: 'Market Research: Analysis of the target market, customers, and competitors.' },
      { text: 'Marketing Strategy: The 4Ps (Product, Price, Place, Promotion).' },
      { text: 'Human Resources: Details of the management team and personnel required.' },
      { text: 'Financial Forecasts: Cash flow forecasts, projected profit/loss, and start-up costs.' }
    ]} },
    { type: 'callout', id: 'key-1', data: { style: 'key', title: 'The Executive Summary', text: 'The executive summary is arguably the most important section. Investors often read this first; if it isn\\'t compelling, they may not read the rest of the plan.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Why These Contents are Included', level: 3 } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Purpose of Specific Sections',
      headers: ['Section', 'Purpose'],
      rows: [
        ['Market Research', 'Proves there is demand for the product and identifies competitor threats.'],
        ['Personnel / HR', 'Shows investors that the team has the necessary skills and experience to succeed.'],
        ['Financial Forecasts', 'Estimates when the business will become profitable and how much funding is needed.']
      ]
    }},
    { type: 'summary', id: 'sum-1', data: { text: 'A well-structured business plan covers all operational, marketing, financial, and HR aspects, allowing investors to evaluate the viability of the business model comprehensively.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A business plan comprises sections like the executive summary, market research, marketing, HR, and financial forecasts.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'List four standard sections found in a business plan.', answer: 'Executive summary, Market research, Marketing strategy, Financial forecasts.' },
      { id: 'cue-2', blockId: 'key-1', prompt: 'Why is the executive summary crucial?', answer: 'It is the first part read by investors; a weak summary might mean the rest of the plan is ignored.' },
      { id: 'cue-3', blockId: 'ct-1', prompt: 'What is the purpose of the financial forecasts section?', answer: 'To estimate profitability, outline start-up costs, and show how much funding is required.' },
      { id: 'cue-4', blockId: 'ct-1', prompt: 'Why include personnel/HR details in the plan?', answer: 'To demonstrate to investors that the management team has the right experience and skills to make the business successful.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_2": `export const note_business_2_6_2 = {
  id: '2.6.2',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Evaluate the various internal sources of finance available to a business.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Internal Sources of Finance', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'Internal finance is money raised from within the business itself. It is often the cheapest and most accessible form of finance since it does not involve third parties.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Types of Internal Finance', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Retained Profit: Profit kept within the business after paying tax and dividends to reinvest.' },
      { text: 'Sale of Assets: Selling unwanted or unneeded items owned by the business (e.g., old machinery, land).' },
      { text: 'Working Capital/Improved Credit Control: Reducing stock levels or chasing up debtors to free up cash.' },
      { text: 'Owners Capital: Personal savings invested by the founder.' }
    ]} },
    { type: 'heading', id: 'h-3', data: { text: 'Evaluating Internal Finance', level: 3 } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Pros and Cons of Internal Finance',
      headers: ['Source', 'Advantages', 'Disadvantages'],
      rows: [
        ['Retained Profit', 'No interest to pay; doesn\\'t dilute control.', 'May upset shareholders (lower dividends); finite amount available.'],
        ['Sale of Assets', 'Frees up capital tied in dormant assets.', 'Takes time to sell; might get a low price; asset no longer available for use.'],
        ['Owner Capital', 'Shows commitment; no interest.', 'Risk of losing personal savings; funds usually limited.']
      ]
    }},
    { type: 'callout', id: 'warn-1', data: { style: 'warning', title: 'Opportunity Cost', text: 'Using retained profits has an opportunity cost—the business loses the interest it could have earned if the money was left in the bank, or the shareholders might be unhappy with smaller dividends.' } },
    { type: 'summary', id: 'sum-1', data: { text: 'Internal finance methods like retained profit and selling assets are cost-effective as they avoid interest charges, but they are limited in scale and may have significant opportunity costs.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Internal finance (retained profit, selling assets, owner\\'s savings) avoids interest but is limited in quantity.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'What is retained profit?', answer: 'Profit kept in the business to reinvest, rather than being distributed as dividends to shareholders.' },
      { id: 'cue-2', blockId: 'ct-1', prompt: 'State one disadvantage of using the sale of assets for finance.', answer: 'It can take a long time to find a buyer, and the business loses the future use of that asset.' },
      { id: 'cue-3', blockId: 'warn-1', prompt: 'What is the opportunity cost of using retained profit?', answer: 'The loss of potential bank interest, or the dissatisfaction of shareholders receiving lower dividends.' },
      { id: 'cue-4', blockId: 'p-1', prompt: 'Why is internal finance often preferred over external finance?', answer: 'It usually incurs no interest charges and does not result in a loss of ownership or control.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_3": `export const note_business_2_6_3 = {
  id: '2.6.3',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Explore the different external sources of finance and their implications.' } },
    { type: 'heading', id: 'h-1', data: { text: 'External Sources of Finance', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'External finance involves raising capital from individuals, organisations, or institutions outside the business. It is usually required when internal sources are insufficient.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Common Types of External Finance', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Bank Loans: A fixed amount borrowed for a set period, repaid with interest.' },
      { text: 'Overdrafts: An arrangement to withdraw more money than is in the account. Good for short-term cash flow.' },
      { text: 'Venture Capital: Wealthy investors who provide capital in return for an equity stake.' },
      { text: 'Share Capital: Selling shares in the business (LTDs and PLCs only).' },
      { text: 'Crowdfunding: Raising small amounts of money from a large number of people online.' },
      { text: 'Leasing/Hire Purchase: Paying monthly to use an asset rather than buying it outright.' }
    ]} },
    { type: 'callout', id: 'worked-1', data: { style: 'worked', title: 'Example: Overdraft vs Loan', text: 'If a business needs £5,000 for just two weeks to pay suppliers before customers pay them, an overdraft is best. If they need £50,000 to buy new machinery over 5 years, a bank loan is better.' } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Comparing External Sources',
      headers: ['Source', 'Pros', 'Cons'],
      rows: [
        ['Bank Loan', 'Guaranteed amount; retain full ownership.', 'Must pay interest; requires collateral/security.'],
        ['Share Capital', 'No interest to pay; doesn\\'t have to be repaid.', 'Dilutes ownership/control; dividends expected.'],
        ['Venture Capital', 'Brings expertise and large sums.', 'Loss of significant equity/control.'],
        ['Crowdfunding', 'Acts as market research; no loss of equity (unless equity-based).', 'If target isn\\'t met, funds may be returned; ideas can be stolen.']
      ]
    }},
    { type: 'summary', id: 'sum-1', data: { text: 'External finance provides the necessary capital for major growth and survival, but often comes with the cost of interest payments or a loss of equity and control.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'External finance (loans, shares, venture capital) brings in significant funds but costs interest or equity.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'What is a bank overdraft and what is it best used for?', answer: 'A short-term facility allowing an account to go negative. Best used for short-term cash flow problems.' },
      { id: 'cue-2', blockId: 'ct-1', prompt: 'What is the main drawback of issuing share capital?', answer: 'It dilutes the ownership and control of the original owners, and dividends are expected.' },
      { id: 'cue-3', blockId: 'l-1', prompt: 'Define venture capital.', answer: 'Investment from wealthy individuals/firms who provide capital and expertise in exchange for an equity stake in high-growth businesses.' },
      { id: 'cue-4', blockId: 'worked-1', prompt: 'Why use a loan instead of an overdraft for buying machinery?', answer: 'Machinery is a long-term asset needing a large sum repaid over years; an overdraft has higher interest rates and is intended for short-term needs.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_4": `export const note_business_2_6_4 = {
  id: '2.6.4',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Assess how a business chooses the most suitable method of finance.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Choosing the Right Source of Finance', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'The suitability of any source of finance depends on several variables. A business must carefully match its needs to the characteristics of the finance available.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Key Factors Influencing the Choice', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Time Period: Short-term needs (e.g. paying bills) require short-term finance (overdrafts). Long-term needs (e.g. buildings) require long-term finance (mortgages/shares).' },
      { text: 'Amount Needed: Large amounts may necessitate selling shares or taking venture capital, whereas small amounts might be covered by retained profit.' },
      { text: 'Legal Structure: Sole traders cannot issue shares, so they rely on loans and personal savings. PLCs can easily raise vast sums via the stock market.' },
      { text: 'Risk and Gearing: Firms already heavily in debt will struggle to get further bank loans and might have to seek equity finance.' },
      { text: 'Desire to Retain Control: Owners wanting full control will avoid issuing shares or venture capital and prefer debt (loans).' }
    ]} },
    { type: 'callout', id: 'key-1', data: { style: 'key', title: 'The Matching Principle', text: 'The lifespan of the asset being purchased should match the duration of the finance. Do not take a 5-year loan to buy raw materials; do not use a short-term overdraft to buy a factory.' } },
    { type: 'summary', id: 'sum-1', data: { text: 'Selecting the most suitable finance requires balancing the amount needed, the time frame, the cost, and the owner\\'s desire to retain control.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Suitable finance depends on the amount, time frame, business structure, and willingness to give up control.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'How does business structure affect the choice of finance?', answer: 'Sole traders and partnerships cannot issue shares, whereas Ltds and PLCs can use share capital.' },
      { id: 'cue-2', blockId: 'key-1', prompt: 'What is the matching principle in finance?', answer: 'The duration of the finance should match the lifespan of the asset it is used to buy (e.g., long-term loan for a building).' },
      { id: 'cue-3', blockId: 'l-1', prompt: 'Why might an owner choose a bank loan over venture capital?', answer: 'To avoid giving up equity and losing partial control/ownership of the business.' },
      { id: 'cue-4', blockId: 'l-1', prompt: 'What form of finance is best for a temporary cash shortage?', answer: 'A bank overdraft.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_5": `export const note_business_2_6_5 = {
  id: '2.6.5',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Analyse the various legal structures of a business.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Business Legal Forms', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'The legal structure of a business dictates who is responsible for its debts, how tax is paid, and who controls the decision-making. The simplest forms are Sole Traders and Partnerships, while Private Limited Companies (Ltd) and Public Limited Companies (plc) offer corporate structures.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Sole Traders and Partnerships', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Sole Trader: One owner. Complete control, keeps all profit, quick to set up. However, has unlimited liability and heavy workload.' },
      { text: 'Partnership: 2 or more owners. Shared workload and more capital. However, profits are shared, disputes can arise, and partners usually have unlimited liability.' }
    ]} },
    { type: 'heading', id: 'h-3', data: { text: 'Incorporated Businesses', level: 3 } },
    { type: 'paragraph', id: 'p-2', data: { text: 'Incorporation means the business has a separate legal identity from its owners. This grants limited liability to the shareholders.' } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Ltd vs PLC',
      headers: ['Feature', 'Private Limited Company (Ltd)', 'Public Limited Company (plc)'],
      rows: [
        ['Share sales', 'Can only sell shares privately to friends/family/investors.', 'Can sell shares publicly on the stock exchange.'],
        ['Capital Raising', 'Limited by private network.', 'Vast capital potential from the general public.'],
        ['Control', 'Founders usually retain control easily.', 'Risk of hostile takeover if external investors buy >50% of shares.'],
        ['Financial Privacy', 'Financial accounts deposited but not heavily publicised.', 'Financial accounts heavily scrutinised and fully public.']
      ]
    }},
    { type: 'summary', id: 'sum-1', data: { text: 'The choice of legal structure involves a trade-off between simplicity/control (Sole Trader) and the ability to raise capital with limited risk (Ltd/plc).' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Firms can be set up as sole traders, partnerships, Ltds, or plcs, affecting liability, control, and capital potential.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'State one advantage and one disadvantage of a sole trader.', answer: 'Adv: Keeps all profits/full control. Disadv: Unlimited liability/heavy workload.' },
      { id: 'cue-2', blockId: 'ct-1', prompt: 'What is the main difference between an Ltd and a plc?', answer: 'A plc can sell shares to the general public on the stock exchange, whereas an Ltd can only sell shares privately.' },
      { id: 'cue-3', blockId: 'p-2', prompt: 'What does incorporation mean?', answer: 'The business has a separate legal identity from its owners, providing limited liability.' },
      { id: 'cue-4', blockId: 'l-1', prompt: 'Why might someone form a partnership rather than being a sole trader?', answer: 'To share the workload, bring in more capital, and share expertise.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_6": `export const note_business_2_6_6 = {
  id: '2.6.6',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand Franchises, Social Enterprises, and other alternative business forms.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Franchising', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'A franchise occurs when a business (the franchisor) gives another business (the franchisee) the right to supply its product/service and use its branding, usually in return for an initial fee and a percentage of the revenue (royalties).' } },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'Franchising from the Franchisee Perspektive',
      headers: ['Pros for Franchisee', 'Cons for Franchisee'],
      rows: [
        ['Lower risk due to an established brand', 'Must pay initial start-up fees and ongoing royalties'],
        ['Training and support provided by franchisor', 'Strict rules on how to run the business (loss of autonomy)'],
        ['National marketing campaigns provided', 'Franchisor decisions (e.g., pricing) are forced upon you']
      ]
    }},
    { type: 'heading', id: 'h-2', data: { text: 'Social Enterprises', level: 2 } },
    { type: 'paragraph', id: 'p-2', data: { text: 'A social enterprise is a business that trades for an environmental or social purpose. They generate profit, but instead of paying dividends to shareholders, the majority of the profit is reinvested back into the social mission.' } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'NOT a charity: They do not rely primarily on donations; they sell goods/services.' },
      { text: 'Aims to benefit society (e.g., providing clean water, employing disadvantaged people).' },
      { text: 'Benefits from excellent PR and highly motivated staff who believe in the cause.' },
      { text: 'Example: The Big Issue, Divine Chocolate.' }
    ]} },
    { type: 'summary', id: 'sum-1', data: { text: 'Franchises offer a lower-risk route to starting a business by buying into established branding, whilst social enterprises focus on prioritising social or environmental impacts alongside profit-making.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Franchises buy rights to use an established brand. Social enterprises trade for a social/environmental purpose.',
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'Define a franchise.', answer: 'An agreement where a franchisee buys the right to use the brand name and products of a franchisor.' },
      { id: 'cue-2', blockId: 'ct-1', prompt: 'State two disadvantages of operating as a franchisee.', answer: '1. Must pay ongoing royalties. 2. Lack of independence/strict rules set by franchisor.' },
      { id: 'cue-3', blockId: 'p-2', prompt: 'How does a social enterprise differ from a charity?', answer: 'A social enterprise sells goods/services to generate profit, rather than relying purely on donations, and reinvests that profit into a social cause.' },
      { id: 'cue-4', blockId: 'l-1', prompt: 'Give one advantage of being a social enterprise.', answer: 'Excellent PR/brand image, and highly motivated employees who care about the mission.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_7": `export const note_business_2_6_7 = {
  id: '2.6.7',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Analyse the transition from a Private Limited Company (Ltd) to a Public Limited Company (plc).' } },
    { type: 'heading', id: 'h-1', data: { text: 'Moving from Ltd to PLC', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'When a successful Private Limited Company (Ltd) wishes to undergo massive expansion, it may choose to "go public" and become a Public Limited Company (plc) by floating on the stock market. This process is called an Initial Public Offering (IPO).' } },
    { type: 'heading', id: 'h-2', data: { text: 'Advantages of Becoming a PLC', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Access to immense amounts of capital by selling shares to the global public.' },
      { text: 'Massive boost in brand profile and prestige.' },
      { text: 'Easier to secure bank loans due to perceived lower risk and larger asset base.' },
      { text: 'Allows original founders/investors to sell their shares and realise huge personal wealth.' }
    ]} },
    { type: 'heading', id: 'h-3', data: { text: 'Disadvantages of Becoming a PLC', level: 3 } },
    { type: 'list', id: 'l-2', data: { style: 'bullet', items: [
      { text: 'Loss of Control: Anyone can buy shares, leading to huge pressure from institutional investors and the risk of hostile takeovers.' },
      { text: 'Short-termism: Stock market investors demand immediate, regular dividends, pressuring the board to prioritise short-term profits over long-term strategy.' },
      { text: 'Loss of Privacy: Financial records must be rigorously audited and published for competitors and the public to see.' },
      { text: 'Expense: The IPO process involves expensive investment bankers, lawyers, and marketing fees.' }
    ]} },
    { type: 'callout', id: 'warn-1', data: { style: 'warning', title: 'The Divorce of Ownership and Control', text: 'In a plc, the owners (shareholders) are completely separated from the managers (directors). This can lead to conflicts if directors pursue growth or perks while shareholders only want high dividends.' } },
    { type: 'summary', id: 'sum-1', data: { text: 'Transitioning from an Ltd to a plc provides massive capital for expansion but exposes the business to public scrutiny, short-term pressures, and the threat of hostile takeovers.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Floating on the stock market (Ltd to plc) raises vast capital but causes a divorce of ownership and control, and invites hostile takeovers.',
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'What is an IPO?', answer: 'Initial Public Offering: the process of an Ltd becoming a plc and selling shares on the stock market for the first time.' },
      { id: 'cue-2', blockId: 'l-1', prompt: 'State two benefits of becoming a plc.', answer: '1. Access to massive sums of capital. 2. Raised brand profile/prestige.' },
      { id: 'cue-3', blockId: 'l-2', prompt: 'What is the risk of "loss of control" in a plc?', answer: 'Competitors or external groups can buy majority shares in a hostile takeover.' },
      { id: 'cue-4', blockId: 'warn-1', prompt: 'What is the divorce of ownership and control?', answer: 'The situation where the shareholders own the firm but directors run it on a daily basis, often leading to conflicting objectives.' }
    ]
  },
  evidence: [],
  mentions: []
};`,
  "note_2_6_8": `export const note_business_2_6_8 = {
  id: '2.6.8',
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Contrast Limited and Unlimited Liability and its impact on business risk.' } },
    { type: 'heading', id: 'h-1', data: { text: 'Limited and Unlimited Liability', level: 2 } },
    { type: 'paragraph', id: 'p-1', data: { text: 'The concept of liability is critical to anyone starting a business, as it dictates the level of personal financial risk they are exposed to if the business fails.' } },
    { type: 'heading', id: 'h-2', data: { text: 'Unlimited Liability', level: 3 } },
    { type: 'list', id: 'l-1', data: { style: 'bullet', items: [
      { text: 'Targeted entities: Sole traders and standard partnerships.' },
      { text: 'Definition: The law sees the business and the owner as one entity. There is no legal separation.' },
      { text: 'Consequence: If the business goes bankrupt, the owner is personally responsible for all debts. They may lose personal assets, such as their house and car, to pay off creditors.' }
    ]} },
    { type: 'heading', id: 'h-3', data: { text: 'Limited Liability', level: 3 } },
    { type: 'list', id: 'l-2', data: { style: 'bullet', items: [
      { text: 'Targeted entities: Private Limited Companies (Ltd) and Public Limited Companies (plc).' },
      { text: 'Definition: The business is \\"incorporated,\\" giving it a separate legal identity from the shareholders.' },
      { text: 'Consequence: The owners (shareholders) are only liable for the amount they invested in their shares. Personal assets are protected.' }
    ]} },
    { type: 'comparisonTable', id: 'ct-1', data: {
      caption: 'The Impact of Liability',
      headers: ['Factor', 'Unlimited Liability', 'Limited Liability'],
      rows: [
        ['Personal Risk', 'Extremely high (can lose house).', 'Low (only lose what was invested).'],
        ['Ease of Raising Equity', 'Impossible to sell shares.', 'Easier, as investors are protected from losing personal assets.'],
        ['Cost of Setup', 'Free and simple (no formal legal setup).', 'Requires legal paperwork (incorporation) and fees.']
      ]
    }},
    { type: 'callout', id: 'key-1', data: { style: 'key', title: 'Why it matters for investment', text: 'Without limited liability, the stock market could not function. Nobody would buy shares in a company like Apple if it meant they could be personally sued if Apple went bankrupt.' } },
    { type: 'summary', id: 'sum-1', data: { text: 'Limited liability protects owners\\' personal wealth, encouraging entrepreneurship and investment, whereas unlimited liability leaves owners fully exposed to business debts.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Unlimited liability risks personal assets; limited liability confines risk to the amount invested.',
    cues: [
      { id: 'cue-1', blockId: 'l-1', prompt: 'What does unlimited liability mean?', answer: 'The owners are personally responsible for all business debts and may lose personal assets if the business fails.' },
      { id: 'cue-2', blockId: 'l-2', prompt: 'What does limited liability mean?', answer: 'Owners are financially protected; they can only lose the amount they originally invested in the business.' },
      { id: 'cue-3', blockId: 'ct-1', prompt: 'Which business structures have unlimited liability?', answer: 'Sole traders and partnerships.' },
      { id: 'cue-4', blockId: 'key-1', prompt: 'Why is limited liability important for investors?', answer: 'It removes personal financial risk, making investors much more willing to inject capital into businesses.' }
    ]
  },
  evidence: [],
  mentions: []
};`
};

for (const [key, body] of Object.entries(data)) {
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'seedNotes', 'business', \`\${key}.js\`), body);
  console.log(\`Written \${key}.js\`);
}