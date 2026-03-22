export const note_economics_2_11_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how innovation and productivity improvements drive long-run economic growth, including new growth theory.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Innovation and Productivity', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Labour productivity</strong>: output per worker per hour. Productivity growth allows more output from the same inputs → shifts LRAS rightward.' }, { text: '<strong>Total Factor Productivity (TFP)</strong>: output growth unexplained by growth in labour/capital inputs — attributed to technological progress and improved efficiency.' }, { text: '<strong>Innovation</strong>: development of new products, processes, or business models. Schumpeter\'s "creative destruction" — old industries displaced by new ones.' }, { text: '<strong>R&D spending</strong>: investment in research produces knowledge with positive externalities (non-rival, partially non-excludable) — justifies public funding.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'New Growth Theory (Endogenous Growth)', level: 2 } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Endogenous Growth Theory', text: 'Associated with Paul Romer. Claims long-run growth is driven by <strong>deliberate R&D and human capital investment</strong> — unlike traditional theory where technology is exogenous (given from outside the economy).<br/>Knowledge has increasing returns and positive externalities → government subsidies to R&D are justified.' } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Productivity gap: many countries have significant productivity differences — UK productivity is ~15–20% below US and German levels.' }, { text: 'Sources of productivity improvement: automation, AI, better management practices, education quality, digital infrastructure.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Innovation and productivity growth drive LRAS shifts. Endogenous growth theory: R&D generates knowledge with positive externalities → government should subsidise R&D.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Link innovation explicitly to productivity improvements. Innovation shifts the AS curve rightward by raising output per unit of input (labour, capital). Distinguish R&D spending (input) from productivity gains (output). Use Solow's framework: sustained growth requires technological progress, not just capital accumulation."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Productivity = output/worker. Innovation shifts LRAS. Endogenous growth theory: deliberate R&D/human capital → sustained growth with positive externalities.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What is Total Factor Productivity (TFP) and why does it matter for growth?', answer: 'TFP is the portion of output growth not explained by growth in labour or capital — it captures efficiency and technological progress. TFP growth is a key source of long-run GDP growth since it allows more output from existing resources.' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'What is endogenous growth theory and who is it associated with?', answer: 'Endogenous (new) growth theory, associated with Paul Romer, argues that long-run growth is driven by deliberate investment in R&D and human capital. Knowledge has increasing returns and positive externalities — unlike traditional neoclassical models where technology is exogenous.' },
    ]
  },
  evidence: [], mentions: []
};
