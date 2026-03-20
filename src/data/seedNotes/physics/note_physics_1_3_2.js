export const note_physics_1_3_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe and evaluate a method to measure the acceleration due to gravity g using freefall; identify sources of error and suggest improvements" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 1: Investigating the Acceleration of Freefall", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "This core practical requires students to measure the <strong>acceleration</strong> due to gravity g by timing a freely falling object." },
      { text: "Two common methods are used: the ruler-drop reaction time method (used for simple estimation) and the electromagnet-and-light-gate method (used for a more precise determination)" },
      { text: "Understanding both methods, their variables, analysis, and limitations is required for the exam." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Method 1: Electromagnet and Trapdoor Timer In this method, a steel ball is held by an electromagnet." },
      { text: "The circuit is broken simultaneously to release the ball and start a timer." },
      { text: "The ball falls through a known height h and lands on a trapdoor, which breaks the circuit and stops the timer." },
      { text: "The time of fall t is recorded." },
      { text: "The experiment is repeated for different heights h." },
      { text: "The relationship h = ½gt² means that a graph of h against t² gives a straight line through the origin with gradient = g/2." },
      { text: "Therefore g = 2 × gradient." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="195" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Electromagnet Freefall Apparatus</text><rect x="160" y="35" width="40" height="20" rx="3" fill="#495057"/><text x="180" y="50" font-family="sans-serif" font-size="10" fill="#0f172a" text-anchor="middle">EM</text><circle cx="180" cy="70" r="8" fill="#fab005" stroke="#e67700" stroke-width="1.5"/><text x="200" y="68" font-family="sans-serif" font-size="10" fill="#e67700">ball</text><line x1="180" y1="78" x2="180" y2="145" stroke="#ced4da" stroke-width="1.5" stroke-dasharray="4,3"/><text x="195" y="112" font-family="sans-serif" font-size="11" fill="#495057">h</text><line x1="165" y1="112" x2="155" y2="112" stroke="#495057" stroke-width="1"/><line x1="165" y1="70" x2="155" y2="70" stroke="#495057" stroke-width="1"/><line x1="155" y1="70" x2="155" y2="112" stroke="#495057" stroke-width="1.5"/><rect x="150" y="145" width="60" height="18" rx="3" fill="#1e293b" stroke="#868e96" stroke-width="1.5"/><text x="180" y="158" font-family="sans-serif" font-size="10" fill="#212529" text-anchor="middle">trapdoor</text><rect x="255" y="60" width="120" height="65" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="1.5"/><text x="315" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">Analysis:</text><text x="315" y="93" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">h = &#189;gt&#178;</text><text x="315" y="108" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Plot h vs t&#178;</text><text x="315" y="122" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">gradient = g/2</text></svg>', caption: 'Electromagnet and trapdoor method: ball released and timed over measured height h' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Variables and Controls The independent variable is the height of fall h." },
      { text: "The dependent variable is the time of fall t." },
      { text: "Control variables: the ball must be released from rest (initial <strong>velocity</strong> = 0) in the same way each time; air resistance should be minimised (use a dense metal ball, not a light object)" },
      { text: "Equipment: electromagnet, steel ball bearing, electronic timer or data logger, metre ruler, trapdoor with switch." },
      { text: "Repeat each height at least three times and take a mean time to reduce the effect of random errors." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Graphical Analysis A graph of h (y-axis) against t² (x-axis) should give a straight line through the origin." },
      { text: "The gradient equals g/2 (from h = ½gt²)" },
      { text: "Therefore: g = 2 × gradient." },
      { text: "For example, if the gradient is 4.8 m/s², then g = 2 × 4.8 = 9.6 m/s²" },
      { text: "The percentage difference from the accepted value (9.81 m/s²) = |9.6 - 9.81| / 9.81 × 100% = 2.1%, which is reasonably good." },
      { text: "A graph through the origin confirms the initial <strong>velocity</strong> is zero and no systematic time error is present." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="195" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">h vs t&#178; Graph (Freefall)</text><line x1="55" y1="165" x2="365" y2="165" stroke="#212529" stroke-width="2"/><line x1="55" y1="165" x2="55" y2="30" stroke="#212529" stroke-width="2"/><text x="210" y="185" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">t&#178; / s&#178;</text><text x="25" y="100" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 25,100)">h / m</text><line x1="55" y1="165" x2="340" y2="50" stroke="#339af0" stroke-width="2.5"/><text x="74" y="161" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="118" y="142" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="178" y="114" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="244" y="86" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="310" y="57" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><line x1="190" y1="107" x2="340" y2="107" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="340" y1="107" x2="340" y2="50" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><text x="315" y="82" font-family="sans-serif" font-size="10" fill="#495057">rise</text><text x="263" y="120" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">run</text><rect x="50" y="22" width="160" height="25" rx="3" fill="#0a2e1a" stroke="#40c057" stroke-width="1.5"/><text x="130" y="39" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">gradient = g/2 &#8594; g = 2 x gradient</text></svg>', caption: 'h vs t² gives a straight line through the origin; gradient = g/2, so g = 2 × gradient' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Method 2: Light Gates Two light gates can be used to measure the time for a card of known length to pass through each gate." },
      { text: "The <strong>velocity</strong> at each gate is calculated (v = length of card / time taken to pass)" },
      { text: "Using v² = u² + 2as (where s is the distance between the gates and u and v are the velocities at each gate): g = (v² - u²) / (2s)" },
      { text: "This gives a single-point measurement of g rather than the slope method, but can be repeated at multiple heights." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error and Improvements Systematic errors: a time delay between releasing the ball and starting the timer (human reaction for manual methods); <strong>friction</strong> or air resistance reducing the measured g below 9.81 m/s²" },
      { text: "Random errors: variability in release technique; fluctuations in the electronic timer response." },
      { text: "Improvements: use an electronic timer or data logger to remove reaction time; use a dense, aerodynamic ball to minimise air resistance; measure height multiple times with a metre rule and take a mean; repeat each timing at least three times and discard anomalous results." }
    ] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Examiners often ask: "Why is a graph of h against t² plotted rather than h against t?" Answer: h = ½gt² means h is proportional to t², not t. Plotting h vs t² gives a straight line whose gradient = g/2, making g easy to extract. Plotting h vs t would give a curve.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the electromagnet-and-trapdoor method for measuring g, including apparatus and procedure", checked: false },
      { text: "Explain why a graph of h against t² is plotted, and how g is found from the gradient", checked: false },
      { text: "Identify two sources of systematic error in freefall experiments and suggest corrections", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Measure g by timing a ball falling through measured heights. Using h = ½gt², plot h (y-axis) against t² (x-axis): gradient = g/2, so g = 2 × gradient. Repeat measurements to reduce random errors. Systematic errors (air resistance, reaction time) cause g to be measured below 9.81 m/s². Use electronic timing and dense balls for best results." } },
    { id: 'enr-callout-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Lifting Engine (Dynamic Load)', text: 'Crane lifts 500 kg engine at constant <strong>acceleration</strong> 0.5 m/s² upward. T − mg = ma → T = m(g + a) = 500 × (9.8 + 0.5) = 5150 N. Compare to <strong>weight</strong> W = 500 × 9.8 = 4900 N. <strong>Tension</strong> is 5% greater than <strong>weight</strong>. Engineers design crane cables for dynamic loads (<strong>tension</strong> during <strong>acceleration</strong>), not just static <strong>weight</strong>.' } },
    { id: 'enr-callout-2', type: 'callout', data: { style: 'warning', title: "Common Mistake: Newton's 3rd Law Pairs", text: "The <strong>weight</strong> of a book on a table is NOT the 3rd law pair of the normal <strong>force</strong>. <strong>Weight</strong> is gravity pulling the book downward; its 3rd law pair is the book pulling the Earth upward with equal <strong>force</strong>. The normal <strong>force</strong>'s 3rd law pair is the book pushing down on the table surface." } },
    { id: 'enr-callout-3', type: 'callout', data: { style: 'tip', title: "Exam Tip: Identifying Newton's 3rd Law Pairs", text: "To identify Newton's 3rd Law pairs: (1) identify the interaction type (gravitational, contact, electromagnetic), (2) swap subject and object — 'Earth pulls book' → pair is 'book pulls Earth'. Pairs must act on DIFFERENT objects and must be the SAME TYPE of <strong>force</strong>." } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Describe the electromagnet-and-trapdoor method for measuring g. What is measured and how is it repeated?' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'What graph is plotted in the freefall experiment? What does the gradient equal? How is g found from it?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'Name two sources of error in the freefall experiment and suggest how each can be reduced.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
