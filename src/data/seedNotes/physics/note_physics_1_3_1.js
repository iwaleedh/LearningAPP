export const note_physics_1_3_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Distinguish between mass and weight; use W = mg; explain how gravitational field strength g varies with location" } },
    { id: 'head-1', type: 'heading', data: { text: "Mass, Weight & Gravitational Field Strength", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Mass</strong> and <strong>weight</strong> are two of the most frequently confused quantities in physics." },
      { text: "They are related but fundamentally different." },
      { text: "Getting this distinction right is essential for problems involving forces, free fall, and motion on other planets or the Moon." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Mass</strong> <strong>Mass</strong> is a <strong>scalar</strong> quantity." },
      { text: "It measures the amount of matter in an object." },
      { text: "<strong>Mass</strong> is measured in kilograms (kg)" },
      { text: "It does not depend on location — your <strong>mass</strong> is the same on Earth, on the Moon, in deep space, and everywhere else." },
      { text: "<strong>Mass</strong> is a measure of an object's inertia: the resistance to changes in motion." },
      { text: "A more massive object requires a greater <strong>force</strong> to produce the same <strong>acceleration</strong> (F = ma)" },
      { text: "<strong>Mass</strong> cannot be zero for a real object." }
    ] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Weight</strong> <strong>Weight</strong> is a <strong>force</strong>." },
      { text: "It is the gravitational pull exerted on an object by a planet (or any massive body)" },
      { text: "<strong>Weight</strong> is a <strong>vector</strong> quantity, always directed toward the centre of the gravitating body (i.e. downward on Earth)" },
      { text: "<strong>Weight</strong> is measured in newtons (N)" },
      { text: "The equation relating <strong>weight</strong> to <strong>mass</strong> is: W = mg, where W is <strong>weight</strong> (N), m is <strong>mass</strong> (kg), and g is the gravitational field strength (N/kg or m/s²)" },
      { text: "On Earth, g = 9.81 N/kg, so a 1 kg <strong>mass</strong> has a <strong>weight</strong> of 9.81 N." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Mass vs Weight</text><rect x="15" y="35" width="175" height="130" rx="6" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="103" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">MASS (m)</text><text x="103" y="75" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Scalar | Unit: kg</text><text x="103" y="93" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Amount of matter</text><text x="103" y="111" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Same everywhere</text><text x="103" y="129" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Measured with</text><text x="103" y="145" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">balance (inertia)</text><rect x="210" y="35" width="175" height="130" rx="6" fill="#3d1212" stroke="#fa5252" stroke-width="2"/><text x="298" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c92a2a" text-anchor="middle">WEIGHT (W)</text><text x="298" y="75" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Vector | Unit: N</text><text x="298" y="93" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Gravitational force</text><text x="298" y="111" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Depends on g</text><text x="298" y="129" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">W = mg</text><text x="298" y="145" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Measured by spring scale</text></svg>', caption: 'Mass (scalar, constant everywhere) vs Weight (vector force, W = mg, varies with location)' } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Gravitational Field Strength Gravitational field strength g is defined as the <strong>force</strong> per unit <strong>mass</strong> acting on a small test <strong>mass</strong> placed in the field: g = W/m (in N/kg)" },
      { text: "On Earth's surface, g = 9.81 N/kg." },
      { text: "Because of F = ma, g is also equal to the <strong>acceleration</strong> of free fall (the <strong>acceleration</strong> of any object falling freely under gravity alone), with value 9.81 m/s²" },
      { text: "The two units N/kg and m/s² are equivalent: 1 N/kg = 1 m/s²." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "How g Varies with Location Gravitational field strength is not constant everywhere: On the Earth's surface: g = 9.81 m/s² (varies slightly with latitude — slightly lower at the equator due to Earth's rotation and shape)" },
      { text: "At altitude: g decreases as you move further from Earth's centre (g is proportional to 1/r², where r is the distance from the centre of the planet)" },
      { text: "On other planets or the Moon: g depends on the <strong>mass</strong> and radius of the body." },
      { text: "Moon: g = 1.6 m/s²; Mars: g = 3.7 m/s²; Jupiter: g = 24.8 m/s²." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Gravitational Field Strength on Different Bodies</text><rect x="15" y="35" width="82" height="115" rx="5" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="56" y="57" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">Earth</text><text x="56" y="75" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">g = 9.81</text><text x="56" y="90" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">N/kg</text><rect x="110" y="35" width="82" height="115" rx="5" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="151" y="57" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Moon</text><text x="151" y="75" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">g = 1.6</text><text x="151" y="90" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">N/kg</text><rect x="205" y="35" width="82" height="115" rx="5" fill="#44370a" stroke="#fab005" stroke-width="2"/><text x="246" y="57" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700" text-anchor="middle">Mars</text><text x="246" y="75" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">g = 3.7</text><text x="246" y="90" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">N/kg</text><rect x="300" y="35" width="85" height="115" rx="5" fill="#3d1212" stroke="#fa5252" stroke-width="2"/><text x="343" y="57" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a" text-anchor="middle">Jupiter</text><text x="343" y="75" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">g = 24.8</text><text x="343" y="90" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">N/kg</text><text x="200" y="130" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">A 70 kg person would weigh:</text><text x="56" y="148" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">687 N</text><text x="151" y="148" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">112 N</text><text x="246" y="148" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">259 N</text><text x="343" y="148" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">1736 N</text></svg>', caption: 'Gravitational field strength and weight for a 70 kg person on Earth, Moon, Mars, and Jupiter' } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A Mars rover has a <strong>mass</strong> of 900 kg." },
      { text: "Calculate its <strong>weight</strong> (a) on Earth and (b) on Mars (g_Mars = 3.7 N/kg)" },
      { text: "(a) W_Earth = mg = 900 x 9.81 = 8829 N." },
      { text: "(b) W_Mars = mg_Mars = 900 x 3.7 = 3330 N." },
      { text: "The <strong>mass</strong> remains 900 kg in both cases." },
      { text: "The <strong>weight</strong> is much less on Mars because the gravitational field strength is lower." },
      { text: "This is why less fuel is needed to launch a spacecraft from Mars than from Earth." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Measuring <strong>Weight</strong> and <strong>Mass</strong> <strong>Mass</strong> is measured using a balance (comparing the object against known masses — this works in any gravitational field, even zero gravity)" },
      { text: "<strong>Weight</strong> is measured using a spring balance (or Newton-meter), which measures <strong>force</strong> directly." },
      { text: "A spring balance gives a different reading on the Moon than on Earth because the gravitational <strong>force</strong> is different." },
      { text: "A balance (comparing masses) gives the same reading anywhere because both sides are equally affected by gravity." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formula', text: 'W = mg (N = kg × N/kg). <strong>Mass</strong> is constant everywhere; <strong>weight</strong> changes with gravitational field strength g. On Earth, g = 9.81 N/kg = 9.81 m/s².' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State the difference between mass (scalar, constant) and weight (vector force, varies with g)", checked: false },
      { text: "Use W = mg to calculate weight given mass and gravitational field strength", checked: false },
      { text: "Explain why the same object has different weights on Earth and on the Moon", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Mass</strong> (kg) is the amount of matter — <strong>scalar</strong>, constant everywhere. <strong>Weight</strong> (N) is the gravitational <strong>force</strong> — <strong>vector</strong>, W = mg, depends on g. On Earth g = 9.81 N/kg. g varies with altitude and location (Moon: 1.6, Mars: 3.7, Jupiter: 24.8 N/kg). <strong>Mass</strong> is measured by a balance; <strong>weight</strong> by a spring scale." } },
    { id: 'enr-callout-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Block on a Slope', text: 'Block on a slope (angle θ): <strong>Weight</strong> component along slope = mg sinθ (down slope). Normal <strong>force</strong> N = mg cosθ (perpendicular to slope). <strong>Friction</strong> f = μN = μmg cosθ (up slope if moving down). Net <strong>force</strong> along slope = mg sinθ − μmg cosθ = mg(sinθ − μcosθ). Car tyre on 15° wet road (μ = 0.2): net <strong>force</strong>/kg = 9.8(sin15° − 0.2cos15°) = 9.8(0.259 − 0.193) = 0.65 N/kg → skids down.' } },
    { id: 'enr-callout-2', type: 'callout', data: { style: 'worked', title: 'Worked Example: Elevators and Apparent Weight', text: 'In an elevator accelerating upward at 2 m/s²: N = m(g + a) = 70 kg × (9.8 + 2) = 826 N (heavier feeling). Decelerating to stop going down: a is upward again → N > <strong>weight</strong>. At constant speed: N = mg = 70 × 9.8 = 686 N. That "stomach drop" feeling when going down is N < mg.' } },
    { id: 'enr-callout-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Solving Any Forces Problem', text: "For any forces problem — (1) draw free body diagram, (2) choose axes (along and perpendicular to motion or slope), (3) resolve all forces onto axes, (4) apply Newton's 2nd in each direction. Never sum forces as scalars if they are in different directions." } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Key Distinction: Mass vs Weight",
        text: "Mass (kg) is scalar, constant everywhere, amount of matter. Weight (N) is vector force, W = mg, depends on gravity. On Earth g = 9.81 N/kg. Same object has different weight on Moon (1.6 g) or Mars (3.7 g) but mass unchanged. Mass measured by balance; weight by spring scale."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Solving Any Forces Problem",
        text: "(1) Draw free-body diagram. (2) Choose axes (horizontal/vertical or along/perpendicular to slope). (3) Resolve all forces into components. (4) Apply Newton's 2nd in each direction separately. Never sum forces as scalars if they act in different directions."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'What is mass? Give two properties that distinguish it from weight.' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'State the equation for weight. What are the units of each quantity? What is g on Earth?' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'Why does weight change on different planets? What stays the same?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
