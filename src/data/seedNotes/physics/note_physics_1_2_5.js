export const note_physics_1_2_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Find the resultant of two or more vectors using the triangle/parallelogram method, Pythagoras' theorem, and trigonometry; verify results using components" } },
    { id: 'head-1', type: 'heading', data: { text: "Finding the Resultant Vector", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "The resultant of two or more vectors is the single <strong>vector</strong> that has the same effect as all the original vectors combined." },
      { text: "Finding the resultant is essential when dealing with multiple forces acting on an object, or when combining <strong>velocity</strong> components." },
      { text: "Two graphical methods (triangle and parallelogram) and a component method are all used at A-Level." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "The Triangle Method (Tip-to-Tail) To add two vectors A and B using the triangle method: (1) Draw <strong>vector</strong> A as an arrow, to scale, in the correct direction." },
      { text: "(2) From the tip (arrowhead) of A, draw <strong>vector</strong> B to scale in its correct direction." },
      { text: "(3) The resultant R is drawn from the tail of A to the tip of B." },
      { text: "The magnitude and direction of R can be found by measurement (scale drawing) or by calculation." },
      { text: "For vectors at right angles, use Pythagoras." },
      { text: "For vectors at other angles, use the cosine rule." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Triangle Method (Tip-to-Tail)</text><line x1="40" y1="130" x2="180" y2="130" stroke="#339af0" stroke-width="3"/><polygon points="180,130 168,125 168,135" fill="#339af0"/><text x="110" y="122" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">A</text><line x1="180" y1="130" x2="280" y2="60" stroke="#40c057" stroke-width="3"/><polygon points="280,60 271,70 280,71" fill="#40c057"/><text x="240" y="82" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2b8a3e" text-anchor="middle">B</text><line x1="40" y1="130" x2="280" y2="60" stroke="#fa5252" stroke-width="3" stroke-dasharray="7,4"/><polygon points="280,60 265,62 268,72" fill="#fa5252"/><text x="148" y="78" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c92a2a" text-anchor="middle">R = A + B</text><text x="200" y="165" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Draw A then B tip-to-tail. Resultant R goes from tail of A to tip of B.</text></svg>', caption: 'Triangle (tip-to-tail) method: the resultant joins the tail of the first vector to the tip of the last' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "The Parallelogram Method To add two vectors A and B using the parallelogram method: (1) Draw both vectors A and B from the same starting point (tail-to-tail)" },
      { text: "(2) Complete the parallelogram by drawing lines parallel to A and B." },
      { text: "(3) The resultant R is the diagonal of the parallelogram from the common starting point." },
      { text: "The parallelogram method is useful when two forces act on a single point and you want to visualise the resultant directly." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Parallelogram Method</text><line x1="80" y1="140" x2="220" y2="140" stroke="#339af0" stroke-width="3"/><polygon points="220,140 208,135 208,145" fill="#339af0"/><text x="150" y="132" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">A</text><line x1="80" y1="140" x2="150" y2="65" stroke="#40c057" stroke-width="3"/><polygon points="150,65 145,78 154,77" fill="#40c057"/><text x="100" y="97" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2b8a3e" text-anchor="middle">B</text><line x1="220" y1="140" x2="290" y2="65" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="150" y1="65" x2="290" y2="65" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="80" y1="140" x2="290" y2="65" stroke="#fa5252" stroke-width="3"/><polygon points="290,65 275,68 279,77" fill="#fa5252"/><text x="198" y="93" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c92a2a" text-anchor="middle">R</text><text x="200" y="165" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Both vectors from same point; diagonal of parallelogram = resultant</text></svg>', caption: 'Parallelogram method: draw both vectors from the same point; the diagonal is the resultant' } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Vectors at Right Angles When two vectors are perpendicular (at 90° to each other), the resultant can be found quickly using Pythagoras: |R| = sqrt(A² + B²)" },
      { text: "The direction is found using trigonometry: tan θ = B/A (where θ is the angle the resultant makes with A)" },
      { text: "This is the most common case in A-Level problems." },
      { text: "Example: a horizontal <strong>velocity</strong> of 6 m/s and a vertical <strong>velocity</strong> of 8 m/s give a resultant speed of sqrt(6² + 8²) = sqrt(100) = 10 m/s at an angle of arctan(8/6) = 53° above the horizontal." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Using Components to Find the Resultant The most reliable method for adding multiple vectors is to resolve each into horizontal (x) and vertical (y) components, sum all the x-components, and sum all the y-components, then recombine using Pythagoras." },
      { text: "Step-by-step: (1) For each <strong>vector</strong>, calculate Fx = F cosθ and Fy = F sinθ." },
      { text: "(2) Sum the x-components: ΣFx = F1x + F2x + F3x + .." },
      { text: "(3) Sum the y-components: ΣFy = F1y + F2y + F3y + .." },
      { text: "(4) Resultant magnitude: R = sqrt((ΣFx)² + (ΣFy)²)" },
      { text: "(5) Resultant direction: θ = arctan(ΣFy / ΣFx)." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Component Method: Step by Step</text><rect x="15" y="32" width="85" height="125" rx="5" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="57" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">Step 1</text><text x="57" y="68" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Resolve each</text><text x="57" y="82" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">vector into</text><text x="57" y="96" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Fx and Fy</text><rect x="113" y="32" width="85" height="125" rx="5" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="155" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Step 2</text><text x="155" y="68" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">Sum all</text><text x="155" y="82" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">x-components</text><text x="155" y="96" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">&#931;Fx</text><rect x="211" y="32" width="85" height="125" rx="5" fill="#44370a" stroke="#fab005" stroke-width="2"/><text x="253" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700" text-anchor="middle">Step 3</text><text x="253" y="68" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">Sum all</text><text x="253" y="82" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">y-components</text><text x="253" y="96" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">&#931;Fy</text><rect x="309" y="32" width="80" height="125" rx="5" fill="#3d1212" stroke="#fa5252" stroke-width="2"/><text x="349" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a" text-anchor="middle">Step 4</text><text x="349" y="68" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">R = sqrt(</text><text x="349" y="82" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">&#931;Fx&#178; + &#931;Fy&#178;)</text><text x="349" y="98" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">&#952; = arctan(</text><text x="349" y="112" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">&#931;Fy/&#931;Fx)</text></svg>', caption: 'Four-step component method for finding the resultant of any number of vectors' } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example Two forces act on a point: F1 = 30 N at 0° (horizontal right) and F2 = 40 N at 90° (vertical upward)" },
      { text: "Find the resultant. ΣFx = 30 + 0 = 30 N. ΣFy = 0 + 40 = 40 N." },
      { text: "Resultant: R = sqrt(30² + 40²) = sqrt(900 + 1600) = sqrt(2500) = 50 N." },
      { text: "Direction: θ = arctan(40/30) = arctan(1.33) = 53.1° above the horizontal." },
      { text: "Result: 50 N at 53.1° above horizontal." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Subtracting Vectors To subtract <strong>vector</strong> B from <strong>vector</strong> A (i.e. find A - B), add the negative of B." },
      { text: "The negative of a <strong>vector</strong> has the same magnitude but the opposite direction." },
      { text: "So A - B = A + (-B)" },
      { text: "This is important for problems involving changes in <strong>velocity</strong>: Δv = v2 - v1 = v2 + (-v1)" },
      { text: "The change in <strong>velocity</strong> is itself a <strong>vector</strong>, and it must be found by the same tip-to-tail or component method." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formulae', text: 'For perpendicular vectors: |R| = sqrt(A² + B²); θ = arctan(B/A). For multiple vectors: ΣFx = sum of all x-components; ΣFy = sum of all y-components; R = sqrt(ΣFx² + ΣFy²).' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Use the triangle (tip-to-tail) method to add two vectors graphically", checked: false },
      { text: "Find the resultant of two perpendicular vectors using Pythagoras and arctan", checked: false },
      { text: "Use the component method to find the resultant of two or more vectors at arbitrary angles", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "The resultant <strong>vector</strong> is the single equivalent of all vectors combined. Methods: triangle (tip-to-tail), parallelogram (diagonal), or components. For perpendicular vectors: R = sqrt(A\u00b2 + B\u00b2), \u03b8 = arctan(B/A). For general vectors: resolve all into x and y, sum the components, then recombine with Pythagoras." } },
    { id: 'enr-callout-1', type: 'callout', data: { style: 'worked', title: 'Worked Example \u2014 Stopping Distance', text: 'Car at u = 30 m/s; reaction time = 0.7 s; deceleration = 8 m/s\u00b2.<br><br><strong>Thinking distance</strong> = u \u00d7 t<sub>r</sub> = 30 \u00d7 0.7 = <strong>21 m</strong><br><strong>Braking distance</strong>: v\u00b2 = u\u00b2 + 2as \u2192 0 = 900 + 2(\u22128)s \u2192 s = 900 \u00f7 16 = <strong>56.25 m</strong><br><strong>Total stopping distance</strong> = 21 + 56.25 = <strong>77.25 m</strong><br><br>At 70 mph (\u223131 m/s) the Highway Code quotes a stopping distance of \u223196 m \u2014 consistent with this calculation.' } },
    { id: 'enr-callout-2', type: 'callout', data: { style: 'worked', title: 'Worked Example \u2014 ABS Braking System', text: '<strong>ABS (Anti-lock Braking System)</strong> detects when a wheel locks (stops rotating while the car moves forward) and automatically releases and re-applies the brake up to \u223115 times per second.<br><br><strong>Physics:</strong> kinetic <strong>friction</strong> &lt; static <strong>friction</strong>. A locked (sliding) wheel operates with the smaller kinetic <strong>friction</strong> <strong>force</strong>. ABS keeps each wheel just at the rolling grip limit, maintaining the larger static <strong>friction</strong> throughout braking. This maximises deceleration and preserves steering control, reducing braking distance by up to 20%.' } },
    { id: 'enr-callout-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip \u2014 How Distance Scales with Speed', text: '<strong>Thinking distance</strong> \u221d v (linear): double speed \u2192 double thinking distance.<br><strong>Braking distance</strong> \u221d v\u00b2 (from v\u00b2 = 2as): double speed \u2192 <em>four times</em> the braking distance.<br><br>This is why speed limits so dramatically reduce accidents: at 60 mph a car does not stop in twice the distance of one at 30 mph \u2014 braking distance is 4\u00d7 greater. Reaction time increases with tiredness, alcohol, drugs, and distractions.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Stopping Distance Scales with Speed",
        text: "Thinking distance \u221d v (linear): double speed \u2192 double thinking distance. Braking distance \u221d v\u00b2 (from v\u00b2 = u\u00b2 + 2as): double speed \u2192 four times braking distance. Speed limits reduce accidents dramatically because braking distance is not proportional to speed \u2014 it's proportional to speed squared."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Misconception: Speed and Distance",
        text: "A car at 60 mph does not stop in twice the distance of one at 30 mph due to braking distance scaling with v\u00b2. Stopping distance increases as v\u00b2 is much faster than linear increase. Reaction time also increases with tiredness, alcohol, and distractions."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Describe the triangle (tip-to-tail) method for adding two vectors.' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'Two perpendicular forces are 6 N and 8 N. Find the resultant magnitude and direction.' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'Describe the four-step component method for finding the resultant of multiple vectors.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
