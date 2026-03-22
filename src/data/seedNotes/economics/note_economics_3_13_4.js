export const note_economics_3_13_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define and distinguish between horizontal, vertical (forward and backward) and conglomerate integration; evaluate the motives for each type and regulatory concerns.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Vertical, Horizontal and Conglomerate Integration', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'When firms grow through <strong>mergers or acquisitions</strong>, the nature of the resulting combination determines the type of integration. The three main categories are <strong>horizontal</strong>, <strong>vertical</strong> and <strong>conglomerate</strong> integration. Each has distinct motives, effects on competition and regulatory implications.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Horizontal Integration', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Horizontal integration occurs when two firms at the <strong>same stage of production</strong> in the <strong>same industry</strong> merge or one acquires the other. For example, two supermarkets merging, or two car manufacturers combining.' }] } },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Motives</strong>: achieve economies of scale, eliminate a competitor, increase market power and pricing power' },
          { text: '<strong>Regulator concern</strong>: direct reduction in competition; most likely to be investigated by the Competition and Markets Authority (CMA)' },
          { text: '<strong>Example</strong>: Asda acquiring Sainsbury\'s (blocked by CMA in 2019)' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Vertical Integration', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'Vertical integration occurs when a firm expands along its <strong>supply chain</strong>. There are two directions:<br/><strong>Backward vertical integration</strong> — moving towards the raw material supplier stage.<br/><strong>Forward vertical integration</strong> — moving towards the final consumer stage.' }] } },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Backward motive</strong>: secure supply of inputs, control input quality, reduce costs by eliminating supplier profit margin' },
          { text: '<strong>Forward motive</strong>: control distribution/retail, access final customer, capture retail profit margin' },
          { text: '<strong>Example (backward)</strong>: a car manufacturer acquiring a steel supplier' },
          { text: '<strong>Example (forward)</strong>: a brewer acquiring a chain of pubs' },
          { text: '<strong>Regulator concern</strong>: may foreclose rivals\' access to supply or distribution (foreclosure effects)' }
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Conglomerate Integration', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'Conglomerate integration involves a firm merging with or acquiring a firm in an <strong>entirely unrelated industry</strong>. There is no supply-chain link between the two businesses.' }] } },
    {
      id: 'list-3',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Motives</strong>: diversify revenue streams, reduce risk, exploit a cash-rich position, access new growth markets' },
          { text: '<strong>Example</strong>: Berkshire Hathaway (insurance, railways, retail, utilities); Amazon acquiring Whole Foods (vertical, but moving into unrelated retail)' },
          { text: '<strong>Regulator concern</strong>: lower than for horizontal integration; cross-subsidisation may harm competition in individual markets' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of integration types',
        headers: ['Type', 'Definition', 'Motive', 'Example', 'Regulator Concern'],
        rows: [
          ['Horizontal', 'Same industry, same stage', 'Scale, market power, eliminate rival', 'Asda + Sainsbury\'s', 'High — direct competition reduction'],
          ['Backward vertical', 'Acquire supplier', 'Secure inputs, cut costs, control quality', 'Car maker + steel firm', 'Medium — input foreclosure'],
          ['Forward vertical', 'Acquire distributor/retailer', 'Control retail, capture margin', 'Brewer + pub chain', 'Medium — distribution foreclosure'],
          ['Conglomerate', 'Unrelated industry', 'Diversification, risk reduction', 'Berkshire Hathaway', 'Low — but cross-subsidisation risk']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Misconception',
        text: 'Students often confuse <strong>forward</strong> and <strong>backward</strong> vertical integration. Remember: backward = towards the raw material (upstream); forward = towards the final customer (downstream). Think of the supply chain flowing "forward" from raw materials to consumer.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Horizontal integration merges firms at the same production stage in the same industry — biggest competition concern. Vertical integration expands along the supply chain (backward = acquire supplier; forward = acquire distributor). Conglomerate integration combines unrelated businesses to diversify risk.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Use real-world examples to anchor definitions: horizontal (e.g. brewery mergers), vertical (e.g. brewery + pubs), conglomerate (e.g. brewing + insurance). This prevents confusing integration types under exam pressure and demonstrates depth of understanding."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Be precise when classifying integration. Dinguish clearly between backward vertical integration (taking over a supplier) and forward vertical integration (taking over a retailer/distributor) using real-world examples."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Horizontal = same stage; vertical = supply chain (backward/forward); conglomerate = unrelated industry.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'Define horizontal integration and give an example.', answer: 'Two firms at the same stage of production in the same industry merging. Example: two supermarkets merging.' },
      { id: 'cue-2', blockId: 'para-3', prompt: 'Distinguish between backward and forward vertical integration.', answer: 'Backward = acquiring a supplier (upstream). Forward = acquiring a distributor or retailer (downstream, towards the final consumer).' },
      { id: 'cue-3', blockId: 'list-3', prompt: 'Why might a firm pursue conglomerate integration?', answer: 'To diversify revenue streams and reduce risk by operating in multiple unrelated industries.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Which type of integration is most likely to attract regulatory scrutiny and why?', answer: 'Horizontal integration, because it directly reduces the number of competitors in the same market, raising prices and harming consumers.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_3_13_4;
