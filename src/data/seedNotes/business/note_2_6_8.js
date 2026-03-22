export const note_business_2_6_8 = {
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Clearly distinguish between limited and unlimited liability, explain the legal principle of separate legal entity, and evaluate the implications of each liability type for business owners and investors.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Liability in Business', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Liability</b> refers to the legal responsibility of a business owner for the debts of the business. The type of liability is one of the most important distinctions between different legal forms of business — it determines how much personal financial risk an owner faces if the business fails.' }
    },
    {
      id: 'h-unlimited',
      type: 'heading',
      data: { text: 'Unlimited Liability', level: 2 }
    },
    {
      id: 'p-unlimited',
      type: 'paragraph',
      data: { text: 'With <b>unlimited liability</b>, there is <b>no legal distinction</b> between the owner and the business. The owner is personally responsible for <b>all</b> debts of the business, regardless of the amount. If the business cannot pay its debts, creditors can go after the owner\'s personal assets — their home, savings, car, and other possessions.' }
    },
    {
      id: 'list-unlimited-who',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Sole traders:</b> fully and personally liable for all business debts' },
          { text: '<b>Partnerships:</b> all general partners are jointly and severally liable (each partner can be pursued for the full amount of the debt, not just their share)' }
        ]
      }
    },
    {
      id: 'call-key-unlim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Terms',
        text: '<b>Joint and several liability:</b> each general partner can be held responsible for the full amount of a business\'s debts, even if caused by another partner\'s actions. Creditors can sue any individual partner for the whole debt.'
      }
    },
    {
      id: 'h-implications-unlim',
      type: 'heading',
      data: { text: 'Implications of Unlimited Liability', level: 3 }
    },
    {
      id: 'list-impl-unlim',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>High personal financial risk:</b> business failure can lead to bankruptcy and loss of personal assets including the family home' },
          { text: '<b>Discourages risk-taking:</b> owners may be reluctant to invest or expand aggressively, knowing personal losses are uncapped' },
          { text: '<b>Limits investment:</b> wealthy individuals are unlikely to invest large sums in a business where they could lose far more than they invested' },
          { text: '<b>Caution can be beneficial:</b> unlimited liability may make owners more careful and prudent in financial decision-making' }
        ]
      }
    },
    {
      id: 'h-limited',
      type: 'heading',
      data: { text: 'Limited Liability', level: 2 }
    },
    {
      id: 'p-limited',
      type: 'paragraph',
      data: { text: 'With <b>limited liability</b>, shareholders\'  (or members\') responsibility for the company\'s debts is limited to the <b>amount they invested</b> in the business. If the company fails and has £500,000 of debts, a shareholder who invested £10,000 will lose only £10,000 — their personal home and savings are protected.' }
    },
    {
      id: 'list-limited-who',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Private limited companies (Ltd):</b> shareholders have limited liability' },
          { text: '<b>Public limited companies (plc):</b> shareholders have limited liability' },
          { text: '<b>Limited Liability Partnerships (LLP):</b> partners have limited liability for other partners\' actions' }
        ]
      }
    },
    {
      id: 'h-sep-entity',
      type: 'heading',
      data: { text: 'Separate Legal Entity', level: 2 }
    },
    {
      id: 'p-sep-entity',
      type: 'paragraph',
      data: { text: 'The legal foundation of limited liability is the concept of a <b>separate legal entity</b>. When a company is incorporated, it becomes a distinct legal person in its own right — separate from its owners. This means:' }
    },
    {
      id: 'list-sep',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The company owns its own assets (not the shareholders)' },
          { text: 'The company enters its own contracts' },
          { text: 'The company can be sued in its own name' },
          { text: 'The company\'s debts are its own, not the shareholders\' personal debts' }
        ]
      }
    },
    {
      id: 'call-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Salomon Principle',
        text: 'Established in <b>Salomon v Salomon & Co Ltd (1897)</b> — a landmark UK case that confirmed a company is a separate legal entity from its owners, even if one person holds almost all shares. This principle underpins limited liability law globally.'
      }
    },
    {
      id: 'h-implications-lim',
      type: 'heading',
      data: { text: 'Implications of Limited Liability', level: 3 }
    },
    {
      id: 'list-impl-lim',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Encourages investment:</b> investors will commit capital knowing their personal losses are capped at their investment amount' },
          { text: '<b>Promotes entrepreneurship and risk-taking:</b> owners can pursue growth strategies without the fear of total personal financial ruin' },
          { text: '<b>Easier to raise capital:</b> large numbers of investors can participate knowing their downside is limited' },
          { text: '<b>May encourage excessive risk:</b> if owners know they cannot lose more than their investment, they may take on more risk than is socially optimal (moral hazard)' }
        ]
      }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Limited vs Unlimited Liability: Comparison',
        headers: ['Feature', 'Unlimited Liability', 'Limited Liability'],
        rows: [
          ['Applies to', 'Sole traders, general partnerships', 'Ltd, plc, LLP'],
          ['Personal asset risk', 'Yes — home, savings can be seized', 'No — capped at investment amount'],
          ['Separate legal entity', 'No (owner and business are the same)', 'Yes (company is its own legal person)'],
          ['Effect on investment', 'Discourages large outside investment', 'Encourages investment by reducing investor risk'],
          ['Risk-taking incentive', 'Owners cautious — stakes are personal', 'May encourage excessive risk (moral hazard)'],
          ['Setup complexity', 'Simple / no registration required', 'Must incorporate (Companies House)'],
          ['Finance options', 'Owner savings, bank loans only', 'Shares, debentures + debt finance']
        ]
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Aisha runs a sole trading bakery. She takes out a £40,000 bank loan. The business fails with £60,000 total debt. Aisha has unlimited liability — she is personally responsible for the full £60,000. The bank can pursue her personal savings and may force the sale of personal assets. Had Aisha incorporated as a Ltd and invested £5,000 of her own money, she would lose only £5,000, regardless of how large the business\'s debts were.'
      }
    },
    {
      id: 'call-key3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Limited Liability Matters for the Economy',
        text: 'Limited liability was one of the most important legal innovations of the 19th century. Without it, only wealthy individuals willing to risk their entire fortune could invest in businesses. Limited liability made it possible for millions of ordinary people to invest small amounts safely, enabling large-scale capital accumulation that funded the Industrial Revolution and modern corporations.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can define unlimited liability and state which legal forms carry it (sole trader, partnership)', checked: false },
          { text: 'I can define limited liability and state which legal forms carry it (Ltd, plc, LLP)', checked: false },
          { text: 'I can explain "separate legal entity" and what it means practically', checked: false },
          { text: 'I can explain the Salomon v Salomon (1897) principle and its significance', checked: false },
          { text: 'I can explain joint and several liability in a partnership', checked: false },
          { text: 'I can evaluate limited liability: encourages investment and risk-taking but may create moral hazard', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Unlimited liability</b> (sole traders, partnerships) means owners are personally responsible for all business debts — personal assets are at risk. <b>Limited liability</b> (Ltd, plc, LLP) protects owners beyond their investment because the company is a <b>separate legal entity</b>. The <b>Salomon principle (1897)</b> confirmed this separation in law. Limited liability encourages investment and entrepreneurship but may create moral hazard. In a general <b>partnership</b>, all partners face <b>joint and several liability</b> — each can be pursued individually for the full debt.' }
    },
    {
      id: 'enr-t6b-h8-finance',
      type: 'heading',
      data: { text: 'Finance Choices and Liability Status', level: 2 }
    },
    {
      id: 'enr-t6b-p8-finance',
      type: 'paragraph',
      data: { text: 'A business\'s liability status <b>directly determines what finance it can access</b>. Unlimited liability businesses (sole traders, partnerships) are seen as higher risk by lenders — they own no share capital and cannot issue equity. Their funding is mostly restricted to owner savings, bank loans, and overdrafts. Limited liability companies access a much wider universe: share issues, debentures, venture capital, equity crowdfunding, and business angels all become viable because investors know their maximum loss is capped at the amount they invested.' }
    },
    {
      id: 'enr-t6b-list8-finance',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Unlimited liability (sole trader/partnership):</b> owner savings, unsecured bank loans, overdraft, trade credit, grants — equity investment is unavailable as there are no shares to sell' },
          { text: '<b>Limited liability (Ltd/plc):</b> all of the above PLUS share issues, debentures, venture capital, business angels, equity crowdfunding, rights issues — a far wider range' },
          { text: '<b>Key matching principle:</b> match finance to purpose — long-term assets (equipment, premises) → long-term finance (mortgage, debenture, share issue); short-term working capital gaps → short-term finance (overdraft, trade credit)' }
        ]
      }
    },
    {
      id: 'enr-t6b-8-call-brand',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real World: Jamie Oliver\'s Italian — Limited Liability Protecting Operators',
        text: 'When <b>Jamie\'s Italian</b> collapsed in May 2019 with around £71.5m in debts, creditors pursued the companies that operated each restaurant — not the individual operators\' personal finances. Because each franchisee had incorporated their outlet as a <b>separate limited company</b>, operators\' personal assets (homes, savings) were legally shielded. Operators lost their franchise investment, but faced no personal insolvency proceedings. Had each operator been a sole trader running their restaurant, they would have been personally liable for every pound of the chain\'s debts — potentially losing their homes.'
      }
    },
    {
      id: 'enr-t6b-8-call-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student Perspective: Why BHS Shareholders Were Not Personally Bankrupt',
        text: 'When <b>BHS collapsed in 2016</b> with a <b>£571 million pension deficit</b>, employees faced devastating losses — but BHS\'s thousands of shareholders lost only their share investments, not their personal savings. The pension deficit was a debt of <b>BHS Ltd</b>, not a personal debt of its shareholders. This is limited liability working exactly as designed: ordinary investors can back large companies without risking their entire personal wealth. The legal controversy focused on director and owner decisions — not on shareholder personal liability.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Separate legal entity is the bedrock: companies are legal persons distinct from owners. This enables limited liability (shareholders' loss capped at investment), but sole traders/partnerships lack this protection. Always anchor liability discussion to this principle."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Confusing limited and unlimited liability without explaining implications. Unlimited liability means creditors can pursue personal assets; limited means they cannot. The real-world consequence is insurance, personal guarantees on loans, and risk exposure\u2014don't just state the definition."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Unlimited liability (sole traders/partnerships) exposes personal assets to business debts; limited liability (Ltd/plc) caps loss at investment amount because the company is a separate legal entity.',
    cues: [
      { id: 'cue-1', blockId: 'p-unlimited', prompt: 'Define unlimited liability and give an example of who it applies to.', answer: 'The owner is personally responsible for ALL business debts; personal assets (home, savings) can be seized. Applies to sole traders and general partnerships.' },
      { id: 'cue-2', blockId: 'p-limited', prompt: 'Define limited liability and explain what it means in practice.', answer: 'Shareholders can only lose the amount they invested in shares. If a company owes £500,000 and a shareholder invested £10,000, they lose only £10,000 — personal assets are protected.' },
      { id: 'cue-3', blockId: 'p-sep-entity', prompt: 'What is meant by a company being a separate legal entity?', answer: 'The company is legally distinct from its owners — it owns its own assets, enters its own contracts, and can be sued in its own name. Its debts are not the personal debts of shareholders.' },
      { id: 'cue-4', blockId: 'call-key2', prompt: 'What did the Salomon v Salomon case (1897) establish?', answer: 'That a company is a separate legal entity from its owners, even if one person controls nearly all the shares. This confirmed the principle of limited liability for incorporated companies.' },
      { id: 'cue-5', blockId: 'list-impl-lim', prompt: 'How does limited liability encourage entrepreneurship?', answer: 'By capping personal losses at the investment amount, it allows entrepreneurs to take on business risk without fearing total personal financial ruin, making it easier to attract outside investors too.' },
      { id: 'cue-6', blockId: 'call-key-unlim', prompt: 'What is joint and several liability in a partnership?', answer: 'Each general partner can be pursued by creditors for the full amount of the business\'s debts — not just their own share. If one partner cannot pay, another partner must cover the full liability.' }
    ]
  },
  evidence: [],
  mentions: []
};
