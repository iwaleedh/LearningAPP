export const note_physics_5_30_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Explain the random and spontaneous nature of nuclear decay; interpret count rate data including background correction; calculate <strong>decay constant</strong> λ from <strong>half-life</strong> T₁/₂; apply N = N₀e⁻λt and A = A₀e⁻λt; explain what activity and <strong>decay constant</strong> mean" } },
    { id: 'head-1', type: 'heading', data: { text: "The Random & Spontaneous Nature of Nuclear Decay", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Radioactive decay</strong> is both random and spontaneous." },
      { text: "Random means that it is impossible to predict which individual nucleus will decay next, or when — the decay of any given nucleus is a matter of probability, unaffected by temperature, pressure, chemical state, or any external conditions." },
      { text: "Spontaneous means that the decay happens without any external trigger — a nucleus is intrinsically unstable and will decay on its own timescale." },
      { text: "These two properties have important experimental consequences: count rates fluctuate even from a constant source, and the average decay rate follows a precise mathematical law." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Activity and <strong>Decay Constant</strong> The activity A of a radioactive sample is the number of disintegrations per second (unit: becquerel, Bq; 1 Bq = 1 decay per second)" },
      { text: "The <strong>decay constant</strong> λ is the probability per unit time that any one nucleus will decay (unit: s⁻¹)" },
      { text: "The activity is related to the number of undecayed nuclei N by: A = λN." },
      { text: "Since both N and A decrease exponentially with time: N = N₀ e⁻λt and A = A₀ e⁻λt, where N₀ and A₀ are the initial values at t = 0." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle"><strong>Radioactive Decay</strong>: N vs t (Exponential)</text><line x1="30" y1="140" x2="375" y2="140" stroke="#212529" stroke-width="2"/><line x1="30" y1="140" x2="30" y2="25" stroke="#212529" stroke-width="2"/><text x="205" y="155" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Time t</text><text x="14" y="88" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 14,88)">N (or A)</text><path d="M 30 30 Q 80 45 130 72 Q 180 95 230 110 Q 280 122 375 136" stroke="#339af0" stroke-width="2.5" fill="none"/><line x1="30" y1="30" x2="375" y2="30" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,2"/><text x="12" y="33" font-family="sans-serif" font-size="8" fill="#868e96">N&#8320;</text><line x1="113" y1="30" x2="113" y2="75" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="30" y1="75" x2="113" y2="75" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="3,2"/><text x="12" y="78" font-family="sans-serif" font-size="8" fill="#c92a2a">N&#8320;/2</text><text x="113" y="152" font-family="sans-serif" font-size="8" fill="#c92a2a" text-anchor="middle">T&#189;</text><line x1="196" y1="30" x2="196" y2="105" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="30" y1="105" x2="196" y2="105" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="3,2"/><text x="12" y="108" font-family="sans-serif" font-size="8" fill="#c92a2a">N&#8320;/4</text><text x="196" y="152" font-family="sans-serif" font-size="8" fill="#c92a2a" text-anchor="middle">2T&#189;</text></svg>', caption: 'Exponential decay: N (or A) halves every <strong>half-life</strong> T₁/₂. After n half-lives: N = N₀/2ⁿ.' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "The <strong>Half-Life</strong> The <strong>half-life</strong> T₁/₂ is the time taken for the number of undecayed nuclei (or the activity) to fall to half its original value." },
      { text: "It is related to the <strong>decay constant</strong> by: T₁/₂ = ln 2 / λ = 0.693 / λ." },
      { text: "After n half-lives, the number remaining is N = N₀ × (1/2)ⁿ = N₀ / 2ⁿ." },
      { text: "Half-lives range from nanoseconds (for very unstable nuclei) to billions of years (e.g. uranium-238: T₁/₂ ≈ 4.5 × 10⁹ years)" },
      { text: "The <strong>half-life</strong> is constant and independent of N — it does not depend on how many atoms are present." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Evidence for Random Nature Statistical fluctuations in count rate are direct evidence for the random nature of decay." },
      { text: "Even with a constant source, successive readings of count rate differ." },
      { text: "The spread of values follows a Poisson distribution." },
      { text: "Larger counts have smaller percentage uncertainty (the percentage uncertainty in a count N is approximately 100/√N %)" },
      { text: "To reduce statistical uncertainty: count for longer (increase total counts N)" },
      { text: "Background radiation also fluctuates randomly — it must be subtracted: corrected count rate = raw count rate − background count rate." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Linearising: ln A vs t</text><line x1="30" y1="140" x2="375" y2="140" stroke="#212529" stroke-width="2"/><line x1="30" y1="140" x2="30" y2="28" stroke="#212529" stroke-width="2"/><text x="205" y="155" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Time t / s</text><text x="14" y="85" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 14,85)">ln A</text><line x1="30" y1="32" x2="370" y2="138" stroke="#fa5252" stroke-width="2.5"/><circle cx="70" cy="45" r="4" fill="#fa5252"/><circle cx="130" cy="62" r="4" fill="#fa5252"/><circle cx="200" cy="82" r="4" fill="#fa5252"/><circle cx="280" cy="105" r="4" fill="#fa5252"/><circle cx="340" cy="122" r="4" fill="#fa5252"/><text x="250" y="52" font-family="sans-serif" font-size="9" fill="#c92a2a">gradient = &#8722;&#955;</text><text x="250" y="64" font-family="sans-serif" font-size="9" fill="#c92a2a">y-intercept = ln A&#8320;</text><text x="200" y="155" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">ln A = ln A&#8320; &#8722; &#955;t &#8594; straight line confirms exponential decay</text></svg>', caption: 'Plot ln A vs t: gradient = −λ; y-intercept = ln A₀. Confirms exponential form; gives <strong>decay constant</strong> λ directly.' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Examples Example 1: Carbon-14 has T₁/₂ = 5730 years." },
      { text: "Find λ. λ = ln 2 / T₁/₂ = 0.693 / (5730 × 365.25 × 24 × 3600) = 0.693 / (1.807 × 10¹¹) = 3.83 × 10⁻¹² s⁻¹." },
      { text: "Example 2: A source has initial activity A₀ = 8000 Bq and T₁/₂ = 2 hours." },
      { text: "Find the activity after 6 hours." },
      { text: "Number of half-lives: n = 6/2 = 3." },
      { text: "A = A₀/2³ = 8000/8 = 1000 Bq." },
      { text: "Alternatively: A = A₀e⁻λt where λ = ln2/T₁/₂ = 0.693/(2×3600) = 9.63×10⁻⁵ s⁻¹; A = 8000 × e⁻(9.63×10⁻⁵ × 6×3600) = 8000 × e⁻²·⁰⁸ ≈ 8000 × 0.125 = 1000 Bq. ✓." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Practical Implications of Randomness The random nature of decay means that measurements of count rate have inherent statistical uncertainty." },
      { text: "This is not a flaw in the apparatus but a fundamental property of quantum mechanics." },
      { text: "In practice: never record a single count from a radioactive source — always record total counts over a timed period and divide to get count rate; always measure background first (same counting time, no source); always subtract background before doing calculations." },
      { text: "A count of N has an uncertainty of ±√N (standard deviation of Poisson distribution)." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Equations', text: 'N = N₀ e⁻λt. A = A₀ e⁻λt. A = λN. T₁/₂ = ln 2/λ = 0.693/λ. After n half-lives: N = N₀/2ⁿ. Linearise: ln A = ln A₀ − λt → gradient = −λ. Statistical uncertainty in count N: ±√N. Background must always be subtracted.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Explain what is meant by the random and spontaneous nature of <strong>radioactive decay</strong>, and how statistical fluctuations in count rate are evidence for randomness", checked: false },
      { text: "Apply A = A₀e⁻λt and T₁/₂ = ln2/λ to calculate <strong>decay constant</strong>, activity, or time elapsed", checked: false },
      { text: "Describe how to linearise decay data by plotting ln A vs t and explain how to find λ from the graph", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Radioactive decay</strong> is random (unpredictable which nucleus next) and spontaneous (no trigger needed). A = λN; N = N₀e⁻λt; A = A₀e⁻λt. <strong>Half-life</strong>: T₁/₂ = ln2/λ; after n half-lives N = N₀/2ⁿ. Linearise: plot ln A vs t → gradient = −λ; y-intercept = ln A₀. Statistical uncertainty: ±√N in a count of N. Always subtract background count rate. Count for longer to reduce % uncertainty." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#212529" text-anchor="middle">Remaining Quantity After Each <strong>Half-Life</strong></text><rect x="60" y="40" width="70" height="120" fill="#339af0" rx="3"/><rect x="160" y="100" width="70" height="60" fill="#74c0fc" rx="3"/><rect x="260" y="130" width="70" height="30" fill="#a5d8ff" rx="3"/><text font-family="sans-serif" font-size="10" fill="#495057"><tspan x="95" y="175" text-anchor="middle">t = 0</tspan><tspan x="195" y="175" text-anchor="middle">t = T&#189;</tspan><tspan x="295" y="175" text-anchor="middle">t = 2T&#189;</tspan><tspan x="95" y="35" text-anchor="middle" fill="#1971c2">N&#8320;</tspan><tspan x="195" y="95" text-anchor="middle" fill="#1971c2">N&#8320;/2</tspan><tspan x="295" y="125" text-anchor="middle" fill="#1971c2">N&#8320;/4</tspan></text></svg>', caption: 'Bar chart: quantity remaining halves at each <strong>half-life</strong>. At t = 2T½ only N₀/4 remains.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked: Using N = N₀e⁻λt', text: 'Given: λ = 2.0 × 10⁻³ s⁻¹, N₀ = 5.0 × 10¹⁸, t = 400 s.<br>λt = 2.0 × 10⁻³ × 400 = 0.80.<br>N = N₀ e⁻λt = 5.0 × 10¹⁸ × e⁻⁰·⁸⁰ = 5.0 × 10¹⁸ × 0.449.<br>N ≈ 2.2 × 10¹⁸ nuclei.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Unit Consistency', text: 'Always convert T₁/₂ to seconds before computing λ = ln 2 / T₁/₂. Use λ (s⁻¹) and t (s) — the exponent λt must be dimensionless.<br>For whole-number half-lives, N = N₀/2ⁿ is quicker than the exponential form.<br>Remember to subtract background count rate before any λ or T₁/₂ calculation.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: 'What does it mean to say <strong>radioactive decay</strong> is (a) random and (b) spontaneous? How do fluctuations in count rate demonstrate randomness?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Write the relationship between <strong>half-life</strong> T₁/₂ and <strong>decay constant</strong> λ. A source has T₁/₂ = 2 hours. What is λ in s⁻¹?' },
    { id: 'cue-3', blockId: 'para-5', prompt: 'How do you linearise the <strong>radioactive decay</strong> equation A = A₀e⁻λt? What do the gradient and y-intercept of the resulting graph represent?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
