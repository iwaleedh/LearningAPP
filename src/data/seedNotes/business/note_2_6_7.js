export const note_business_2_6_7 = {
  pdfPath: '/notes/business/wbs12-6.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand how and why a private limited company (Ltd) transitions to a public limited company (plc), including the process of flotation and the benefits and drawbacks of going public.' }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Ltd vs plc: Key Differences', level: 2 }
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: { text: 'Both a <b>private limited company (Ltd)</b> and a <b>public limited company (plc)</b> are incorporated businesses with limited liability. The critical difference is how they raise share capital: an Ltd can only sell shares <b>privately</b>, while a plc can offer shares to <b>the general public</b> via a stock exchange.' }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Ltd vs plc: Key Differences',
        headers: ['Feature', 'Private Ltd (Ltd)', 'Public Ltd (plc)'],
        rows: [
          ['Share sales', 'Privately to invited investors only', 'Publicly on a stock exchange'],
          ['Minimum share capital', 'No minimum', 'Significant minimum capital required'],
          ['Ownership', 'Often owner-managed; shares cannot be bought without consent', 'Shares traded freely; any investor can buy'],
          ['Disclosure', 'Accounts filed at Companies House', 'Full public disclosure; audited accounts; stock exchange rules'],
          ['Takeover risk', 'Low — shares tightly held', 'High — hostile takeover possible by buying shares on market'],
          ['Capital raising', 'Limited to private investors', 'Potentially unlimited via public share issue']
        ]
      }
    },
    {
      id: 'h-why',
      type: 'heading',
      data: { text: 'Why Would a Ltd Become a plc?', level: 2 }
    },
    {
      id: 'p-why',
      type: 'paragraph',
      data: { text: 'A growing business may reach a point where its capital needs exceed what private investors can provide. Becoming a <b>plc</b> through a stock market flotation (Initial Public Offering — <b>IPO</b>) allows the business to access <b>very large amounts of capital</b> from the general public and institutional investors.' }
    },
    {
      id: 'list-reasons',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Access to large capital:</b> selling shares to millions of investors can raise hundreds of millions for major expansion, R&D, or acquisitions' },
          { text: '<b>Enhanced credibility:</b> plc status signals scale, stability, and transparency — improves relationships with lenders, suppliers, and customers' },
          { text: '<b>Easier acquisitions:</b> a plc can use its own shares as currency to acquire other businesses' },
          { text: '<b>Allows original shareholders to cash out:</b> early investors and founders can sell their shares on the open market' },
          { text: '<b>Employee incentives:</b> share option schemes attract and retain talented staff' }
        ]
      }
    },
    {
      id: 'h-ipo',
      type: 'heading',
      data: { text: 'The Flotation Process (IPO)', level: 2 }
    },
    {
      id: 'list-ipo',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Appoint investment banks, solicitors, and accountants to manage the process' },
          { text: 'Prepare a <b>prospectus</b> — a detailed legal document inviting the public to buy shares; must include audited accounts, risk disclosures, and the intended use of funds' },
          { text: 'Agree an <b>issue price</b> for the shares (determined by the company\'s valuation)' },
          { text: 'Shares are listed on a stock exchange (e.g. the London Stock Exchange or NYSE)' },
          { text: 'Shares become publicly tradeable — the market determines their price going forward' }
        ]
      }
    },
    {
      id: 'h-rights',
      type: 'heading',
      data: { text: 'Rights Issues', level: 2 }
    },
    {
      id: 'p-rights',
      type: 'paragraph',
      data: { text: 'A <b>rights issue</b> is a method used by an <b>already-listed plc</b> to raise additional share capital from its <b>existing shareholders</b>. The company offers new shares to current shareholders in proportion to their existing holdings at a <b>discounted price</b> below the current market price. Rights issues are a key post-flotation method of raising equity capital — distinct from an IPO, they do not re-list the company but instead raise further funds after listing.' }
    },
    {
      id: 'call-key-rights',
      type: 'callout',
      data: {
        style: 'key',
        title: 'How a Rights Issue Works',
        text: 'A company offers a <b>1-for-4 rights issue</b> at 200p per share when the market price is 260p. Every shareholder holding 4 shares may buy 1 new share at the discounted 200p. Shareholders have three choices: (1) <b>Take up</b> the rights — buy the new shares at the discounted price; (2) <b>Sell the rights</b> on the open market to another investor; (3) <b>Let the rights lapse</b> — forfeiting the discount and being diluted as new shares are issued to others. Most rights issues are <b>underwritten</b> by investment banks, guaranteeing the company raises the target amount.'
      }
    },
    {
      id: 'list-rights-eval',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Advantage — for the company:</b> raises large additional equity capital; lower administrative and legal cost than a new IPO; company is already listed so no new listing process required' },
          { text: '<b>Advantage — for shareholders:</b> existing holders have first right to buy new shares at a discount, preventing immediate dilution if they participate; rights themselves have market value and can be sold' },
          { text: '<b>Disadvantage — dilution:</b> EPS (earnings per share) falls as the number of shares in issue increases; shareholders who cannot afford to subscribe are diluted' },
          { text: '<b>Disadvantage — market signal:</b> a rights issue may suggest the company urgently needs cash, particularly if unplanned — this can decrease the share price and alarm investors' },
          { text: '<b>Underwriting:</b> investment banks guarantee to buy any unsubscribed shares at the issue price, ensuring the company always receives the full funds — but this adds cost' }
        ]
      }
    },
    {
      id: 'table-ipo-rights',
      type: 'comparisonTable',
      data: {
        caption: 'IPO (Flotation) vs Rights Issue: Key Differences',
        headers: ['Feature', 'IPO / Flotation', 'Rights Issue'],
        rows: [
          ['Who buys shares?', 'General public and institutional investors', 'Existing shareholders in the first instance'],
          ['When used?', 'When a Ltd first lists / goes public', 'When an already-listed plc needs more capital'],
          ['Cost (relative)', 'Very high — prospectus, underwriting, listing fees', 'Lower — simpler process, no new stock exchange listing needed'],
          ['Impact on control', 'Original owners significantly diluted', 'Existing shareholders diluted only if they do not participate'],
          ['Market signal', 'Company is growing and going public', 'Can signal urgent capital need — may reduce share price'],
          ['Regulatory burden', 'Full prospectus, FCA approval, stock exchange compliance', 'Circular to shareholders; simpler disclosure requirements']
        ]
      }
    },
    {
      id: 'h-drawbacks',
      type: 'heading',
      data: { text: 'Drawbacks of Becoming a plc', level: 2 }
    },
    {
      id: 'list-drawbacks',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Loss of control:</b> original owners\' shareholding is diluted; institutional shareholders may demand influence over strategy' },
          { text: '<b>Hostile takeover risk:</b> any investor can buy shares on the open market; if a hostile party accumulates >50%, they can take control' },
          { text: '<b>High flotation costs:</b> legal fees, underwriting fees, prospectus preparation, and stock exchange listing fees can total millions' },
          { text: '<b>Short-termism:</b> public shareholders may pressure management to maximise short-term dividends at the expense of long-term investment' },
          { text: '<b>Transparency and scrutiny:</b> full accounts are publicly available; competitors, journalists, and activists can examine the business\'s performance and pay' }
        ]
      }
    },
    {
      id: 'call-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Trap',
        text: 'Do not assume that all businesses want to become a plc. Many successful family-owned Ltds deliberately stay private to retain control and avoid disclosure. The decision involves weighing capital-raising benefits against loss of control and increased scrutiny.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In evaluation questions, consider: How large is the capital need? Does the owner value control more than access to capital? What are the flotation costs relative to the funds being raised? Smaller businesses raising under £10m may find venture capital or private equity cheaper and less disruptive than a full stock exchange listing.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can state the key difference between a Ltd and a plc in raising share capital', checked: false },
          { text: 'I can explain the IPO (flotation) process in steps, including the prospectus', checked: false },
          { text: 'I can explain what a rights issue is and how the 3 shareholder choices work', checked: false },
          { text: 'I can compare an IPO and a rights issue (cost, who buys, when used)', checked: false },
          { text: 'I can evaluate drawbacks of flotation: loss of control, takeover risk, short-termism', checked: false },
          { text: 'I can explain why some Ltds choose to stay private', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'A Ltd becomes a plc through flotation (IPO), issuing shares to the public on a stock exchange. Benefits include access to very large capital, enhanced credibility, and easier acquisitions. Once listed, a plc can raise further equity via a <b>rights issue</b> — offering new shares to existing shareholders at a discount to market price. Drawbacks of flotation include loss of ownership control, hostile takeover risk, high flotation costs, short-termism, and full public disclosure. Not all growing businesses want to float — staying as a Ltd preserves privacy and control.' }
    },
    {
      id: 'enr-t6b-h7-crowdfund',
      type: 'heading',
      data: { text: 'Equity Crowdfunding: The Pre-IPO Middle Ground', level: 2 }
    },
    {
      id: 'enr-t6b-p7-crowdfund',
      type: 'paragraph',
      data: { text: 'Not every growing Ltd moves directly to a full stock exchange listing. <b>Equity crowdfunding</b> platforms such as Crowdcube and Seedrs allow an Ltd to issue shares to hundreds or thousands of small investors without the cost and disclosure burden of a full IPO. This creates an intermediate funding stage: the company raises millions, builds a loyal customer-investor base, and retains more privacy — only moving to a full IPO later if very large capital (£100m+) is needed. Early crowdfunding investors also benefit from the valuation uplift at a later IPO.' }
    },
    {
      id: 'enr-t6b-7-call-brand',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Real World: Monzo Raises £1m in 96 Seconds (2016)',
        text: 'In 2016, challenger bank <b>Monzo</b> launched an equity crowdfunding campaign on Crowdcube and raised <b>£1 million in just 96 seconds</b> — the fastest crowdfunding campaign in history at the time. Investors (many of them existing Monzo app users) received shares in the company. This turned customers into advocates: they recommended Monzo to friends because they had a direct financial stake in its growth. Monzo later raised at a <b>$5 billion valuation</b>, becoming one of Europe\'s most valuable fintech companies. The campaign showed that crowdfunding is not just a funding tool — it is a powerful <b>customer loyalty and marketing strategy</b>.'
      }
    },
    {
      id: 'enr-t6b-7-call-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Student Perspective: You Can Own Part of a plc',
        text: 'When a company floats on the stock exchange, anyone — including students — can buy shares. Apps like <b>Trading 212</b> or <b>Hargreaves Lansdown</b> let you invest from as little as £1 in fractional shares of listed companies. You then become a part-owner of that plc: entitled to dividends (a share of profits) and voting rights at the Annual General Meeting (AGM). This is the democratising power of the plc structure — it turns large corporations into assets that ordinary people can own a slice of, with limited liability protecting them from losing more than they invest.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A Ltd goes public via an IPO; once listed, a plc raises further capital via rights issues (discounted shares to existing shareholders). Both methods involve ownership dilution, with IPOs costing more but raising far larger sums.',
    cues: [
      { id: 'cue-1', blockId: 'p-compare', prompt: 'What is the key difference between a Ltd and a plc in terms of how they raise capital?', answer: 'A Ltd can only sell shares privately to invited investors; a plc can offer shares to the general public through a stock exchange.' },
      { id: 'cue-2', blockId: 'list-reasons', prompt: 'Give three reasons why a Ltd might choose to become a plc.', answer: 'Access to very large capital, enhanced credibility with stakeholders, and easier acquisitions using shares as currency.' },
      { id: 'cue-3', blockId: 'p-rights', prompt: 'What is a rights issue and how does it differ from an IPO?', answer: 'A rights issue offers new shares to existing shareholders at a discount — it is used by an already-listed plc to raise additional capital. Unlike an IPO, it does not list the company; it is cheaper and targeted at current shareholders.' },
      { id: 'cue-4', blockId: 'call-key-rights', prompt: 'What three choices does a shareholder have in a rights issue?', answer: '(1) Take up the rights and buy new shares at the discounted price; (2) Sell the rights on the open market; (3) Let the rights lapse and accept dilution of their holding.' },
      { id: 'cue-5', blockId: 'list-drawbacks', prompt: 'What is short-termism and why is it a risk for a plc?', answer: 'Short-termism occurs when public shareholders pressure management to maximise short-term dividends, discouraging long-term investment in R&D or expansion.' },
      { id: 'cue-6', blockId: 'call-warn', prompt: 'Why might a successful Ltd choose to remain private rather than float as a plc?', answer: 'To retain control and avoid ownership dilution; to avoid full public disclosure of accounts; and to escape hostile takeover risk.' }
    ]
  },
  evidence: [],
  mentions: []
};
