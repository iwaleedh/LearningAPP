export const note_physics_1_1_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Present physical data clearly using graphs, tables, and written conclusions; use significant figures appropriately" } },
    { id: 'head-1', type: 'heading', data: { text: "Scientific Communication", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: 'Scientific communication is the process of presenting findings <strong>clearly, accurately, and concisely</strong>.' },
      { text: 'The aim is that others can <strong>understand, evaluate, and reproduce</strong> the work.' },
      { text: 'In physics this includes: <strong>drawing graphs</strong>, constructing <strong>data tables</strong>, quoting results with appropriate <strong>significant figures</strong> and units, and writing clear conclusions.' }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: 'The number of significant figures reflects the <strong>precision</strong> of the measurement.' },
      { text: '<strong>Rule 1:</strong> All non-zero digits are significant.' },
      { text: '<strong>Rule 2:</strong> Zeros between non-zero digits are significant.' },
      { text: '<strong>Rule 3:</strong> Trailing zeros after a decimal point are significant.' },
      { text: '<strong>Rule 4:</strong> Leading zeros are NOT significant.' },
      { text: 'Quote a result to the same sig figs as the <strong>least precise</strong> measurement used.' }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="160" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Significant Figures Examples</text><rect x="20" y="35" width="170" height="100" rx="4" fill="#d3f9d8" stroke="#40c057" stroke-width="2"/><text x="105" y="55" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2b8a3e" text-anchor="middle">3 significant figures</text><text x="105" y="73" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">4.56 (3 s.f.)</text><text x="105" y="90" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">0.00456 (3 s.f.)</text><text x="105" y="107" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">4560 (could be 3 or 4)</text><text x="105" y="124" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">Use 4.56 x 10&#179; for 3 s.f.</text><rect x="210" y="35" width="170" height="100" rx="4" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="295" y="55" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c92a2a" text-anchor="middle">Common Mistakes</text><text x="295" y="73" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Too many: 9.81 x 3.2 = 31.392</text><text x="295" y="90" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Correct: 31 (2 s.f.)</text><text x="295" y="107" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Units missing: 31 (should</text><text x="295" y="122" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">be 31 m/s&#178; or 31 N)</text></svg>', caption: 'Significant figures examples and common mistakes' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: 'A <strong>title</strong> describing what is plotted.' },
      { text: '<strong>Labelled axes</strong> with quantity name AND unit — e.g. <strong>Force</strong> / N, not just F.' },
      { text: 'A suitable <strong>scale</strong> that uses most of the graph paper; do not start at 0 unnecessarily.' },
      { text: 'Plot data as <strong>crosses (×)</strong>, not dots.' },
      { text: 'Draw a <strong>best-fit line</strong> (straight or smooth curve) — never join the dots.' },
      { text: 'Add <strong>error bars</strong> when uncertainties are known.' }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="220" fill="#f8f9fa"/><line x1="55" y1="185" x2="360" y2="185" stroke="#212529" stroke-width="2"/><line x1="55" y1="185" x2="55" y2="25" stroke="#212529" stroke-width="2"/><text x="207" y="210" font-family="sans-serif" font-size="12" fill="#212529" text-anchor="middle">Time t / s</text><text x="22" y="107" font-family="sans-serif" font-size="12" fill="#212529" text-anchor="middle" transform="rotate(-90 22,107)">Velocity v / m/s</text><line x1="70" y1="170" x2="340" y2="60" stroke="#339af0" stroke-width="2.5"/><text x="90" y="168" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="130" y="148" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="178" y="128" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="228" y="105" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="278" y="85" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="318" y="65" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="200" y="15" font-family="sans-serif" font-size="12" font-weight="bold" fill="#212529" text-anchor="middle">Good Graph: Title, Axes Labelled, Best-fit Line, Crosses</text><rect x="245" y="130" width="100" height="45" rx="4" fill="#fff3bf" stroke="#fab005" stroke-width="1.5"/><text x="295" y="148" font-family="sans-serif" font-size="10" font-weight="bold" fill="#e67700" text-anchor="middle">Gradient = rise/run</text><text x="295" y="163" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">= &#916;v / &#916;t = acceleration</text></svg>', caption: 'A well-drawn graph: title, labelled axes with units, crosses for data points, best-fit line' } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: '<strong>Gradient</strong> = rise / run = (y₂ − y₁) / (x₂ − x₁).' },
      { text: 'Always choose two points on the <strong>line itself</strong> (not data points), far apart.' },
      { text: 'Always include <strong>units</strong> with the gradient.' },
      { text: 'The <strong>y-intercept</strong> often has physical meaning — e.g. an initial value or offset.' }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: 'Column headers with <strong>quantity name and unit</strong> — e.g. Time / s.' },
      { text: 'Consistent number of <strong>decimal places</strong> within each column.' },
      { text: 'Repeated measurements in separate columns with a <strong>mean column</strong>.' },
      { text: '<strong>Uncertainty columns</strong> where appropriate.' },
      { text: 'Never alter raw data — process it in a <strong>separate column</strong>.' }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: 'State whether the hypothesis was <strong>supported</strong> by the data.' },
      { text: 'Cite specific <strong>numerical evidence</strong> (not just "the graph shows a line").' },
      { text: 'Quantify the relationship — e.g. "v is proportional to t with gradient = 2.0 m/s²".' },
      { text: 'Compare with accepted values using <strong>percentage difference</strong>.' },
      { text: 'Identify sources of error and suggest <strong>improvements</strong>.' }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="160" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Structure of a Good Conclusion</text><rect x="15" y="35" width="80" height="100" rx="6" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="55" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1864ab" text-anchor="middle">State</text><text x="55" y="73" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">result with</text><text x="55" y="87" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">evidence</text><rect x="110" y="35" width="80" height="100" rx="6" fill="#d3f9d8" stroke="#40c057" stroke-width="2"/><text x="150" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Compare</text><text x="150" y="73" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">with</text><text x="150" y="87" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">accepted</text><text x="150" y="101" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">value</text><rect x="205" y="35" width="80" height="100" rx="6" fill="#fff3bf" stroke="#fab005" stroke-width="2"/><text x="245" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#e67700" text-anchor="middle">Identify</text><text x="245" y="73" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">errors and</text><text x="245" y="87" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">limitations</text><rect x="300" y="35" width="80" height="100" rx="6" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="340" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c92a2a" text-anchor="middle">Suggest</text><text x="340" y="73" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">improvements</text></svg>', caption: 'Four elements of a well-structured scientific conclusion' } },
    { id: 'callout-pct', type: 'callout', data: { style: 'key', title: 'Percentage Difference', text: '• <strong>% difference = |experimental − theoretical| / theoretical × 100%</strong>\n• Below 5% → good agreement\n• Large % difference → likely <strong>systematic error</strong>' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Quote a calculated value to an appropriate number of significant figures", checked: false },
      { text: "Draw a correctly labelled graph with a best-fit line and calculate its gradient", checked: false },
      { text: "Write a conclusion that cites numerical evidence and quantifies the relationship found", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Scientific communication requires significant figures matched to data precision, well-labelled graphs (title, axes with units, best-fit line, error bars), and conclusions that cite evidence, compare with accepted values, and identify sources of error." } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'What is a significant figure? How many s.f. should a result be quoted to?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'List five features of a well-drawn physics graph' },
    { id: 'cue-3', blockId: 'para-8', prompt: 'How do you calculate the percentage difference between an experimental and theoretical value?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
