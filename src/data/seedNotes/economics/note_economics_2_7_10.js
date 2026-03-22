export const note_economics_2_7_10 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Explain the causes of inflation (demand-pull and cost-push) and deflation, apply the quantity theory of money, and compare demand-pull vs cost-push using diagrams and policy responses.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Causes of Inflation and Deflation', level: 2 }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Demand-Pull Inflation', level: 3 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Demand-Pull Inflation',
        text: 'Occurs when <strong>Aggregate Demand (AD) rises faster than Aggregate Supply (AS)</strong>, creating excess demand in the economy.<br/><br/>"Too much money chasing too few goods."<br/><br/>As the economy approaches full capacity, bottlenecks cause prices to rise. Typically associated with a boom, low unemployment, and high consumer confidence.'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Causes: low interest rates, tax cuts, increased government spending, rising house prices (wealth effect), consumer and business optimism' },
          { text: 'On AD/AS diagram: AD shifts right → price level rises → real output rises (if economy below full capacity) → pure price rise at full capacity' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Cost-Push Inflation', level: 3 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cost-Push Inflation',
        text: 'Occurs when <strong>production costs rise</strong>, causing firms to reduce supply (AS shifts left). Prices rise while real output falls — this combination is called <strong>stagflation</strong>.<br/><br/>Causes: rising wages (above productivity growth), oil/energy price spikes, raw material price rises, imported inflation (currency depreciation).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Quantity Theory of Money', level: 3 }
    },
    {
      id: 'eq-1',
      type: 'equation',
      data: {
        latex: 'MV = PT',
        caption: 'Fisher\'s Quantity Theory of Money: M = money supply, V = velocity of circulation, P = price level, T = volume of transactions'
      }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'If V and T are assumed constant (monetarist assumption), then an increase in M directly causes a proportional increase in P. This is the basis for the monetarist argument that <strong>inflation is always a monetary phenomenon</strong> — excessive money supply growth causes inflation.' }] } },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Causes of Deflation', level: 3 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Falling AD</strong>: recession, loss of confidence, credit crunch → demand-deficient deflation (dangerous)' },
          { text: '<strong>Rising AS</strong>: technology improvements, supply chain efficiency, globalisation lowering costs → benign deflation' },
          { text: '<strong>Falling commodity prices</strong>: oil glut, falling raw material prices reduce production costs globally' },
          { text: '<strong>Currency appreciation</strong>: makes imports cheaper, reducing CPI' }
        ]
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Demand-pull vs cost-push inflation',
        headers: ['Feature', 'Demand-Pull', 'Cost-Push'],
        rows: [
          ['Cause', 'Excess demand (AD rises too fast)', 'Rising input costs (wages, oil, materials)'],
          ['AD/AS diagram', 'AD shifts right → P rises, Y rises', 'SRAS shifts left → P rises, Y falls'],
          ['Effect on output', 'Output rises (if spare capacity)', 'Output falls (stagflation)'],
          ['Associated with', 'Booms, low unemployment', 'Supply shocks, stagflation'],
          ['Policy response', 'Tighten monetary policy (raise interest rates), fiscal restraint', 'Difficult: tightening worsens unemployment; supply-side policies needed'],
          ['Example', 'UK 2021–22 post-pandemic demand surge', 'UK 2022 energy price spike after Russia-Ukraine war']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Demand-pull inflation: AD exceeds AS — price and output both rise. Cost-push inflation: AS falls — price rises but output falls (stagflation). MV = PT: excess money growth causes inflation.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Always categorize the causes into demand-pull (outward shift of AD) and cost-push (inward shift of SRAS) inflation. Ensure your diagrams correctly match the cause you are explaining."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Demand-pull: excess AD raises prices and output. Cost-push: rising costs shift AS left → stagflation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'What is demand-pull inflation?',
        answer: 'Inflation caused when aggregate demand rises faster than aggregate supply — excess demand pushes prices up ("too much money chasing too few goods").'
      },
      {
        id: 'cue-2',
        blockId: 'call-2',
        prompt: 'What is stagflation and which type of inflation causes it?',
        answer: 'Stagflation is when prices rise while output falls — caused by cost-push inflation, where rising input costs shift SRAS left.'
      },
      {
        id: 'cue-3',
        blockId: 'eq-1',
        prompt: 'What does MV = PT represent?',
        answer: 'Fisher\'s Quantity Theory of Money: M = money supply, V = velocity, P = price level, T = transactions. If V and T are constant, rising M causes proportional rise in P.'
      },
      {
        id: 'cue-4',
        blockId: 'list-2',
        prompt: 'What is the difference between demand-deficient deflation and benign deflation?',
        answer: 'Demand-deficient deflation is caused by falling AD (dangerous — triggers spending delays and debt spirals). Benign deflation is caused by rising productivity/technology (good — output rises as prices fall).'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_7_10;
