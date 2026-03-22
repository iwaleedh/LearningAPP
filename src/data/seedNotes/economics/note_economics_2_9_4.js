export const note_economics_2_9_4 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify and explain the long-run determinants of Aggregate Supply and understand how supply-side policies can shift the LRAS curve rightward.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Long-Run Aggregate Supply: Determinants', level: 2 }
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>Long-Run Aggregate Supply (LRAS)</strong> represents the economy\'s <strong>productive capacity</strong> — the maximum real output it can sustain when all resources are fully and efficiently employed. Shifting LRAS to the right represents <strong>economic growth in productive potential</strong>. The determinants of LRAS are the same factors that drive long-run economic growth.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: '1. Quantity and Quality of Labour', level: 3 }
    },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: 'The size and skill level of the workforce directly determine productive capacity. <strong>Quantity</strong> depends on the working-age population, participation rates, retirement age, and net migration. <strong>Quality</strong> (human capital) depends on education levels, vocational training, and health. Improvements in either quantity or quality shift LRAS rightward.' }] } },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: '2. Quantity and Quality of Capital', level: 3 }
    },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: 'The capital stock — machinery, equipment, buildings, infrastructure — determines how productively labour can work. <strong>Gross investment</strong> adds to the capital stock; <strong>net investment</strong> increases it after depreciation. Higher-quality capital (new technology, automation) raises productivity and shifts LRAS rightward. Low investment means slower LRAS growth.' }] } },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: '3. Natural Resources', level: 3 }
    },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: 'Access to <strong>raw materials, land, energy resources, and mineral deposits</strong> affects productive capacity, particularly in resource-intensive economies. The discovery or development of new natural resources (e.g. North Sea oil for the UK) can significantly shift LRAS rightward. Resource depletion or environmental degradation can shift it leftward.' }] } },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: '4. Technology and Innovation', level: 3 }
    },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Technological progress</strong> is often seen as the most important long-run driver of economic growth. New technologies raise <strong>total factor productivity (TFP)</strong> — more output can be produced from the same inputs. R&D investment, patents, and the adoption of digital technologies all contribute to rightward LRAS shifts.' }] } },
    {
      id: 'h-6',
      type: 'heading',
      data: { text: '5. Institutional Factors', level: 3 }
    },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>quality of institutions</strong> — rule of law, property rights, contract enforcement, political stability, and absence of corruption — is a crucial determinant of productive capacity. Countries with strong institutions attract investment, encourage entrepreneurship, and enable long-run growth. Weak institutions (e.g. corruption, insecure property rights) reduce investment incentives and constrain LRAS.' }] } },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Labour quantity:</strong> Net migration, participation rates, retirement age → shifts LRAS' },
          { text: '<strong>Labour quality (human capital):</strong> Education, training, healthcare → shifts LRAS right' },
          { text: '<strong>Capital quantity:</strong> Gross investment exceeding depreciation → shifts LRAS right' },
          { text: '<strong>Capital quality:</strong> New technology, automation, digital infrastructure → shifts LRAS right' },
          { text: '<strong>Natural resources:</strong> Discovery of new resources, sustainable use → shifts LRAS right' },
          { text: '<strong>Technology/TFP:</strong> R&D, innovation, technology diffusion → shifts LRAS right' },
          { text: '<strong>Institutions:</strong> Strong rule of law, property rights, stable government → shifts LRAS right' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Supply-Side Policies and LRAS',
        text: 'Supply-side policies aim to target exactly these LRAS determinants. Education investment improves human capital; infrastructure spending raises capital quality; deregulation can boost investment and productivity. All aim to shift LRAS rightward — expanding potential output sustainably.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'LRAS Determinants: Factor, Effect, and Policy Example',
        headers: ['Factor', 'How it shifts LRAS', 'Supply-side policy example'],
        rows: [
          ['Labour quality', 'More skilled workforce → higher productivity', 'Investment in education and apprenticeships'],
          ['Labour quantity', 'Larger workforce → more potential output', 'Immigration policy, raising retirement age'],
          ['Capital quality', 'Better technology → more output per unit input', 'R&D tax credits, infrastructure investment'],
          ['Capital quantity', 'More machines and equipment', 'Low corporation tax to incentivise investment'],
          ['Natural resources', 'More inputs available', 'Resource management, exploration incentives'],
          ['Institutions', 'More investment, entrepreneurship', 'Anti-corruption laws, property rights reform']
        ]
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "LRAS shifts when there is a change in the quality or quantity of factors of production, or technological advancement. Remember that an outward shift in LRAS is non-inflationary growth."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'LRAS is determined by quantity/quality of labour and capital, natural resources, technology, and institutional quality — all targeted by supply-side policies to shift LRAS rightward.',
    cues: [
      { id: 'cue-1', blockId: 'para-2', prompt: 'How can improvements in human capital shift LRAS?', answer: 'Better education and training raise the quality of the labour force, increasing productivity and productive capacity — LRAS shifts right.' },
      { id: 'cue-2', blockId: 'para-5', prompt: 'Why is technology considered the most important LRAS determinant?', answer: 'Technological progress raises total factor productivity (TFP), meaning more output can be produced from the same inputs, enabling sustainable long-run growth.' },
      { id: 'cue-3', blockId: 'para-6', prompt: 'How do institutions affect LRAS?', answer: 'Strong rule of law, property rights, and contract enforcement attract investment and encourage entrepreneurship, expanding productive capacity.' },
      { id: 'cue-4', blockId: 'list-1', prompt: 'List four determinants of LRAS.', answer: 'Labour quantity/quality, capital quantity/quality, natural resources, technology/innovation, and institutional quality.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_2_9_4;
