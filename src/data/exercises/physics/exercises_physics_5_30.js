export const exercises_physics_5_30 = [
  // ==========================================
  // MULTIPLE CHOICE QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-30-mcq-1",
    type: "mcq",
    topic: "Background Radiation",
    question: "In the UK, what is the single largest natural contributor to average background radiation exposure?",
    options: [
      "Cosmic rays from space",
      "Radon gas from rocks and soil",
      "Carbon-14 in food and drink",
      "Medical X-rays"
    ],
    answer: "Radon gas from rocks and soil",
    explanation: "Radon gas accounts for approximately 50% of the average background radiation dose in the UK. It is an alpha-emitting gas that seeps from uranium sequence elements in rocks like granite."
  },
  {
    id: "physics-5-30-mcq-2",
    type: "mcq",
    topic: "Radiation Properties",
    question: "Which type of ionising radiation has the highest penetrating power but the lowest ionising ability?",
    options: [
      "Alpha particle",
      "Beta-minus particle",
      "Beta-plus particle (positron)",
      "Gamma ray"
    ],
    answer: "Gamma ray",
    explanation: "Gamma rays are high-energy electromagnetic photons with zero charge and mass, making them highly penetrating (requiring thick lead or concrete to heavily attenuate) but weakly ionising compared to alpha and beta particles."
  },
  {
    id: "physics-5-30-mcq-3",
    type: "mcq",
    topic: "Magnetic Deflection",
    question: "A beam of mixed radiation passes through a magnetic field directed into the page. Which components of the beam will be deflected?",
    options: [
      "Only alpha particles",
      "Only beta particles",
      "Alpha and beta particles (in opposite directions)",
      "Gamma rays only"
    ],
    answer: "Alpha and beta particles (in opposite directions)",
    explanation: "Magnetic fields deflect moving charges (Fleming's Left Hand Rule). Alpha (+2e) and Beta (-1e or +1e) will deflect in opposite directions. Gamma rays have no charge and pass undeflected."
  },
  {
    id: "physics-5-30-mcq-4",
    type: "mcq",
    topic: "Alpha Decay Equation",
    question: "When a nucleus undergoes alpha decay, how do the mass number (A) and atomic number (Z) change?",
    options: [
      "A decreases by 2, Z decreases by 2",
      "A decreases by 4, Z decreases by 2",
      "A remains unchanged, Z decreases by 1",
      "A remains unchanged, Z increases by 1"
    ],
    answer: "A decreases by 4, Z decreases by 2",
    explanation: "An alpha particle is a helium nucleus (A=4, Z=2). By conservation of nucleon and proton numbers, the parent nucleus must lose 4 nucleons total, two of which are protons."
  },
  {
    id: "physics-5-30-mcq-5",
    type: "mcq",
    topic: "Beta-minus Decay Equation",
    question: "To perfectly balance a beta-minus (β⁻) decay equation, which particle must be emitted alongside the fast-moving electron?",
    options: [
      "Electron neutrino",
      "Electron antineutrino",
      "Proton",
      "Gamma photon"
    ],
    answer: "Electron antineutrino",
    explanation: "Beta-minus decay involves a neutron turning into a proton plus an electron (β⁻). To conserve lepton number and spin, an electron antineutrino (ν̄) must also be emitted."
  },
  {
    id: "physics-5-30-mcq-6",
    type: "mcq",
    topic: "Gamma Absorption",
    question: "In the exponential absorption formula I = I₀ e⁻μx, what does the constant μ represent?",
    options: [
      "The radioactive decay constant (s⁻¹)",
      "The linear absorption coefficient (m⁻¹)",
      "The background count rate",
      "The half-value thickness"
    ],
    answer: "The linear absorption coefficient (m⁻¹)",
    explanation: "μ is the linear absorption coefficient, representing how strongly the material absorbs gamma radiation per unit thickness. A dense metal like lead has a high μ."
  },
  {
    id: "physics-5-30-mcq-7",
    type: "mcq",
    topic: "Data Linearisation",
    question: "If you plot ln(Intensity) against the absorber thickness (x), what does the gradient of the resulting straight line represent?",
    options: [
      "μ",
      "-μ",
      "λ",
      "-λ"
    ],
    answer: "-μ",
    explanation: "Taking the natural logarithm of I = I₀ e⁻μx yields ln I = ln I₀ - μx. Thus, plotting ln I on the y-axis against x on the x-axis gives a straight line with a gradient of -μ."
  },
  {
    id: "physics-5-30-mcq-8",
    type: "mcq",
    topic: "Random vs Spontaneous",
    question: "What is meant by the assertion that radioactive decay is 'spontaneous'?",
    options: [
      "It is impossible to predict exactly when an individual nucleus will decay",
      "The decay cannot be induced, triggered, or affected by external conditions like temperature or pressure",
      "The decay follows an exponential probability law",
      "The decay occurs only within the strong nuclear force range"
    ],
    answer: "The decay cannot be induced, triggered, or affected by external conditions like temperature or pressure",
    explanation: "'Spontaneous' means happening without external cause or trigger. 'Random' means the exact timing for an individual nucleus is fundamentally unpredictable."
  },
  {
    id: "physics-5-30-mcq-9",
    type: "mcq",
    topic: "Decay Constant",
    question: "What is the definition of the decay constant (λ)?",
    options: [
      "The time taken for half the radioactive nuclei to decay",
      "The probability per unit time that any individual nucleus will decay",
      "The total number of disintegrations per second",
      "The number of undecayed nuclei remaining at time t"
    ],
    answer: "The probability per unit time that any individual nucleus will decay",
    explanation: "The decay constant λ governs the rate of decay. It essentially measures the probability that a single specific nucleus will decay within the next second (unit: s⁻¹)."
  },
  {
    id: "physics-5-30-mcq-10",
    type: "mcq",
    topic: "Half-Life Calculation",
    question: "If the decay constant λ of a radioisotope is 0.02 s⁻¹, what is its approximate half-life (T₁/₂)?",
    options: [
      "50 s",
      "35 s",
      "14 s",
      "0.1 s"
    ],
    answer: "35 s",
    explanation: "T₁/₂ = ln(2) / λ.  T₁/₂ ≈ 0.693 / 0.02 ≈ 34.65 seconds."
  },
  {
    id: "physics-5-30-mcq-11",
    type: "mcq",
    topic: "Mathematical Models",
    question: "A radioactive sample has an initial activity A₀. After exactly three half-lives have elapsed, what is its current activity A?",
    options: [
      "A₀ / 3",
      "A₀ / 6",
      "A₀ / 8",
      "A₀ / 9"
    ],
    answer: "A₀ / 8",
    explanation: "At each half-life, the activity halves. After 3 half-lives, it has halved 3 times: 1/2 × 1/2 × 1/2 = 1/8. Thus, A = A₀ / 8."
  },
  {
    id: "physics-5-30-mcq-12",
    type: "mcq",
    topic: "Experimental Practice",
    question: "When tracking the decay rate of a radioactive source with a GM tube, why must a reading be taken prior to introducing the source?",
    options: [
      "To measure the natural continuous background radiation in the room so it can be subtracted from later counts",
      "To calibrate the electronic timer inside the scaler",
      "To heat up the argon gas inside the GM tube to operating temperature",
      "To identify what type of alpha particles are present in the air"
    ],
    answer: "To measure the natural continuous background radiation in the room so it can be subtracted from later counts",
    explanation: "Background radiation is ever-present. If it is not subtracted, the final count rates will appear falsely high, causing errors in identifying the half-life or absorption coefficient."
  },
  {
    id: "physics-5-30-mcq-13",
    type: "mcq",
    topic: "Activity Definition",
    question: "The 'Activity' (A) of a radioactive source is expressed in Becquerels (Bq). What does 1 Bq represent?",
    options: [
      "1 ionisation event per second",
      "1 nuclear decay disintegration per second",
      "1 joule of energy deposited per kilogram per second",
      "The emission of 1 alpha particle per minute"
    ],
    answer: "1 nuclear decay disintegration per second",
    explanation: "Activity acts as the 'rate of decay'. Therefore 1 Bq strictly means 1 atomic nucleus is decaying per second on average."
  },
  {
    id: "physics-5-30-mcq-14",
    type: "mcq",
    topic: "Random Discrepancies",
    question: "Which of the following explains why a GM tube placed near a long-lived constant alpha source records 420 counts in one minute, but 406 counts in the next?",
    options: [
      "The source has reached its half-life almost instantly",
      "Nuclear decay is a fundamentally random process subject to statistical fluctuations",
      "The GM tube becomes temporarily saturated (dead time)",
      "A sudden drop in room temperature disrupted the strong nuclear force"
    ],
    answer: "Nuclear decay is a fundamentally random process subject to statistical fluctuations",
    explanation: "Because decay is fundamentally probabilistic, the actual number of events per minute will naturally fluctuate around the theoretical average."
  },
  {
    id: "physics-5-30-mcq-15",
    type: "mcq",
    topic: "Gamma Definition",
    question: "Compared to alpha and beta emissions, what accurately describes a gamma (γ) emission during radioactive decay?",
    options: [
      "The nucleus sheds 4 nucleons to stabilize",
      "A proton transforms into a neutron to lower total mass",
      "The nucleus transitions from an excited energetic state to a lower energy state without changing mass or atomic number",
      "An electron from the lowest shell is absorbed into the nucleus"
    ],
    answer: "The nucleus transitions from an excited energetic state to a lower energy state without changing mass or atomic number",
    explanation: "Gamma decay frequently follows an alpha or beta decay. The resulting 'daughter' nucleus is left in an excited state and releases a high-energy photon to settle into its ground state."
  },

  // ==========================================
  // FILL-IN-THE-BLANK QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-30-fitb-1",
    type: "fill_in_the_blank",
    topic: "Background Radiation Correcting",
    question: "When conducting experiments with a radioactive source, the [BLANK] count rate must always be measured first and subtracted from the raw readings.",
    answer: "background",
    hints: ["Ever-present environmental radiation", "Starts with B"],
    explanation: "Failing to subtract background counts is one of the most common reasons for experimental data failing to conform to exponential decay logs."
  },
  {
    id: "physics-5-30-fitb-2",
    type: "fill_in_the_blank",
    topic: "Linear Absorption Constant",
    question: "In the equation I = I₀e⁻μx, the symbol μ refers to the linear [BLANK] coefficient.",
    answer: "absorption",
    hints: ["Attenuating effect", "Starts with A"],
    explanation: "It indicates how effectively the specific material 'absorbs' the gamma radiation passing through it."
  },
  {
    id: "physics-5-30-fitb-3",
    type: "fill_in_the_blank",
    topic: "Spontaneous Decay",
    question: "Radioactive decay is described as [BLANK] because it occurs without any external trigger, wholly unaffected by temperature or pressure.",
    answer: "spontaneous",
    hints: ["Happens on its own", "S-word"],
    explanation: "Spontaneous means the decay process happens inherently based on the instability of the nucleus, regardless of external conditions."
  },
  {
    id: "physics-5-30-fitb-4",
    type: "fill_in_the_blank",
    topic: "Random Decay",
    question: "Radioactive decay is described as [BLANK] because it is fundamentally impossible to predict exactly when a specific individual nucleus will decay.",
    answer: "random",
    hints: ["Probabilistic", "Starts with R"],
    explanation: "We can only predict the statistical behavior of a large group of atoms via probabilities and half-lives, never a single nucleus."
  },
  {
    id: "physics-5-30-fitb-5",
    type: "fill_in_the_blank",
    topic: "Alpha Properties",
    question: "An alpha particle is equivalent to the nucleus of a [BLANK]-4 atom, containing 2 protons and 2 neutrons.",
    answer: "helium",
    hints: ["Noble gas", "He"],
    explanation: "The tightly bound 2-proton, 2-neutron configuration is extremely stable, making it a common ejection fragment for heavy unstable nuclei."
  },
  {
    id: "physics-5-30-fitb-6",
    type: "fill_in_the_blank",
    topic: "Beta Properties",
    question: "A beta-minus particle is a fast-moving [BLANK] ejected from the nucleus during a weak force mediated decay.",
    answer: "electron",
    hints: ["Negatively charged", "Orbits outside the atom usually"],
    explanation: "A neutron turns into a proton, emitting an electron (beta-minus particle) and an electron antineutrino."
  },
  {
    id: "physics-5-30-fitb-7",
    type: "fill_in_the_blank",
    topic: "Conservation Rules",
    question: "In a balanced nuclear equation, both the sum of the atomic numbers (Z) and the sum of the [BLANK] numbers (A) must be equal on both sides.",
    answer: "mass",
    hints: ["Top number", "Nucleon number"],
    explanation: "The total number of nucleons (protons + neutrons) must be conserved before and after the decay."
  },
  {
    id: "physics-5-30-fitb-8",
    type: "fill_in_the_blank",
    topic: "Half-Life",
    question: "The time required for half the radioactive nuclei in any given sample to undergo decay is termed the [BLANK].",
    answer: "half-life",
    hints: ["Contains a hyphen", "T₁/₂"],
    explanation: "The half-life characterizes the speed of decay and is inversely linked to the decay constant (t₁/₂ = ln2 / λ)."
  },
  {
    id: "physics-5-30-fitb-9",
    type: "fill_in_the_blank",
    topic: "Decay Constant Expression",
    question: "Because decay is exponential, a plot of ln(Activity) against time 't' will yield a straight line with a gradient equal to -[BLANK].",
    answer: "λ",
    hints: ["Greek letter lambda"],
    explanation: "From ln A = ln A₀ - λt, plotting ln A vs t results in a negative linear slope equal to the decay constant."
  },
  {
    id: "physics-5-30-fitb-10",
    type: "fill_in_the_blank",
    topic: "Radiation Unit",
    question: "The Activity of a sample is measured in [BLANK] (Bq), where 1 Bq equals 1 radioactive disintegration per second.",
    answer: "becquerels",
    hints: ["Named after a French physicist", "Bq"],
    explanation: "Unlike Sieverts which measure absorbed dose and biological damage, Becquerels strictly measure decay rate."
  },
  {
    id: "physics-5-30-fitb-11",
    type: "fill_in_the_blank",
    topic: "Carbon Dating",
    question: "All living organic matter contains a roughly constant proportion of the radioactive isotope [BLANK]-14 due to steady intake overriding decay.",
    answer: "carbon",
    hints: ["Element symbol C", "Basis of life"],
    explanation: "Background cosmic rays trigger C-14 production in the atmosphere. Plants take in CO₂, and animals eat plants, maintaining the steady ratio until they die."
  },
  {
    id: "physics-5-30-fitb-12",
    type: "fill_in_the_blank",
    topic: "Half-Value Thickness",
    question: "In the context of gamma absorption, the term x₁/₂ is known as the [BLANK]-value thickness, representing the lead depth needed to halve the gamma intensity.",
    answer: "half",
    hints: ["50% reduction", "Coupled with thickness"],
    explanation: "Mathematically parallel to half-life in time, the half-value thickness x₁/₂ = ln2 / μ in spatial depth."
  },
  {
    id: "physics-5-30-fitb-13",
    type: "fill_in_the_blank",
    topic: "Ionising Ability",
    question: "Because of its heavy mass and +2 charge, the [BLANK] particle is by far the most highly ionising form of the three main nuclear radiations.",
    answer: "alpha",
    hints: ["First Greek letter", "Helium nucleus"],
    explanation: "Its double positive charge rapidly pulls electrons away from nearby atoms, ionising them intensely but shedding its kinetic energy swiftly."
  },
  {
    id: "physics-5-30-fitb-14",
    type: "fill_in_the_blank",
    topic: "Exponential Growth/Decay",
    question: "In the mathematical formula N = N₀e⁻λt, 'e' stands for the base of the [BLANK] logarithm (Euler's number).",
    answer: "natural",
    hints: ["Related to 'ln'", "Not base 10"],
    explanation: "Because radioactive decay relates the rate of change directly to the current amount present, it naturally forms an exponent base-e function."
  },
  {
    id: "physics-5-30-fitb-15",
    type: "fill_in_the_blank",
    topic: "Statistical Uncertainties",
    question: "If an experimenter wants to decrease the percentage [BLANK] of their count reading, they should count over a much longer period of time to raise total N.",
    answer: "uncertainty",
    hints: ["Error bracket", "Due to randomness"],
    explanation: "A total count of N has an absolute uncertainty of approx ±√N. Thus, the percentage uncertainty (√N / N = 1/√N) shrinks as N grows larger."
  },

  // ==========================================
  // DRAG AND DROP QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-30-dnd-1",
    type: "drag_and_drop",
    topic: "Particle Properties",
    question: "Relate the particle to its structural composition.",
    categories: ["Alpha Particle", "Beta-minus Particle", "Gamma Photon"],
    items: [
      { text: "Helium-4 nucleus", category: "Alpha Particle" },
      { text: "High-energy electromagnetic wave", category: "Gamma Photon" },
      { text: "Fast-moving electron", category: "Beta-minus Particle" },
      { text: "Charge of +2e", category: "Alpha Particle" },
      { text: "Charge of -1e", category: "Beta-minus Particle" },
      { text: "No mass and zero charge", category: "Gamma Photon" }
    ]
  },
  {
    id: "physics-5-30-dnd-2",
    type: "drag_and_drop",
    topic: "Penetrating Power & Ionisation",
    question: "Sort the radiation interactions.",
    categories: ["Stopped by Paper", "Stopped by ~5mm Aluminium", "Stopped by thick Lead"],
    items: [
      { text: "Alpha (α)", category: "Stopped by Paper" },
      { text: "Beta (β)", category: "Stopped by ~5mm Aluminium" },
      { text: "Gamma (γ)", category: "Stopped by thick Lead" },
      { text: "Highest Ionising Ability", category: "Stopped by Paper" },
      { text: "Lowest Ionising Ability", category: "Stopped by thick Lead" }
    ]
  },
  {
    id: "physics-5-30-dnd-3",
    type: "drag_and_drop",
    topic: "Decay Rules (A and Z)",
    question: "How do A (mass number) and Z (atomic number) change out of the parent nucleus after the specific decay?",
    categories: ["A-4, Z-2", "A unchanged, Z+1", "A unchanged, Z-1", "A unchanged, Z unchanged"],
    items: [
      { text: "Alpha Decay", category: "A-4, Z-2" },
      { text: "Beta-minus Decay", category: "A unchanged, Z+1" },
      { text: "Beta-plus Decay (Positron)", category: "A unchanged, Z-1" },
      { text: "Gamma Decay", category: "A unchanged, Z unchanged" }
    ]
  },
  {
    id: "physics-5-30-dnd-4",
    type: "drag_and_drop",
    topic: "Background Sources",
    question: "Determine whether the UK background radiation source is naturally occurring or man-made.",
    categories: ["Natural Source", "Man-Made Source"],
    items: [
      { text: "Radon gas seeping from rocks", category: "Natural Source" },
      { text: "Cosmic rays from supernovae", category: "Natural Source" },
      { text: "Medical X-Rays and scans", category: "Man-Made Source" },
      { text: "Carbon-14 in our food and bodies", category: "Natural Source" },
      { text: "Fallout from past weapons testing", category: "Man-Made Source" },
      { text: "Nuclear power industry leaks", category: "Man-Made Source" }
    ]
  },
  {
    id: "physics-5-30-dnd-5",
    type: "drag_and_drop",
    topic: "Gamma Absorption Definitions",
    question: "Match the formula symbols used in Gamma Absorption (I = I₀ e⁻μx) to their meanings.",
    categories: ["I", "I₀", "μ", "x"],
    items: [
      { text: "Intensity measured after the absorber", category: "I" },
      { text: "Initial intensity with 0 mm absorber", category: "I₀" },
      { text: "Linear absorption coefficient", category: "μ" },
      { text: "Thickness of the absorber material", category: "x" }
    ]
  },
  {
    id: "physics-5-30-dnd-6",
    type: "drag_and_drop",
    topic: "Mathematical Models vs Reality",
    question: "Sort the statements comparing exponential mathematical predictions to real experimental counts.",
    categories: ["Mathematical Model (A = A₀e⁻λt)", "Real Experimental Readings"],
    items: [
      { text: "Will output an exact, continuously smooth curve", category: "Mathematical Model (A = A₀e⁻λt)" },
      { text: "Outputs fluctuating counts distributed by Poisson statistics", category: "Real Experimental Readings" },
      { text: "Reaches precisely A₀/2 after exactly one half-life", category: "Mathematical Model (A = A₀e⁻λt)" },
      { text: "Includes natural background radiation additions", category: "Real Experimental Readings" },
      { text: "Displays the random nature of nuclear decay explicitly", category: "Real Experimental Readings" }
    ]
  },
  {
    id: "physics-5-30-dnd-7",
    type: "drag_and_drop",
    topic: "Spontaneous vs Random Terms",
    question: "Attach the definition to its precise scientific term.",
    categories: ["Spontaneous", "Random"],
    items: [
      { text: "Unaffected by heating", category: "Spontaneous" },
      { text: "Cannot predict exactly WHICH nucleus will decay at t=3s", category: "Random" },
      { text: "Unaffected by pressurising the sample", category: "Spontaneous" },
      { text: "Count rate fluctuates unpredictably each passing minute", category: "Random" },
      { text: "Triggered internally by instability alone", category: "Spontaneous" }
    ]
  },
  {
    id: "physics-5-30-dnd-8",
    type: "drag_and_drop",
    topic: "Core Equations mapping",
    question: "Match the physics goal to its equation.",
    categories: ["Half-Life (t₁/₂)", "Activity (A)", "Number Remaining (N)", "Decay Constant (λ)"],
    items: [
      { text: "= ln(2) / λ", category: "Half-Life (t₁/₂)" },
      { text: "= λN", category: "Activity (A)" },
      { text: "= N₀ e⁻λt", category: "Number Remaining (N)" },
      { text: "= ln(2) / t₁/₂", category: "Decay Constant (λ)" }
    ]
  },
  {
    id: "physics-5-30-dnd-9",
    type: "drag_and_drop",
    topic: "Logarithmic graph linearization",
    question: "Sort the terms of the linearized decay graph equation: ln A = ln A₀ - λt",
    categories: ["Y-axis plotting", "Y-intercept", "Gradient (m)", "X-axis plotting"],
    items: [
      { text: "ln A", category: "Y-axis plotting" },
      { text: "Time t", category: "X-axis plotting" },
      { text: "ln A₀", category: "Y-intercept" },
      { text: "-λ", category: "Gradient (m)" }
    ]
  },
  {
    id: "physics-5-30-dnd-10",
    type: "drag_and_drop",
    topic: "Linearization mapping (Absorption)",
    question: "Sort the terms of the linearized absorption graph equation: ln I = ln I₀ - μx",
    categories: ["Y-axis", "Gradient", "Y-intercept", "X-axis"],
    items: [
      { text: "ln I", category: "Y-axis" },
      { text: "Absorber thickness (x)", category: "X-axis" },
      { text: "ln I₀", category: "Y-intercept" },
      { text: "-μ", category: "Gradient" }
    ]
  },
  {
    id: "physics-5-30-dnd-11",
    type: "drag_and_drop",
    topic: "Balancing Decays Practice",
    question: "Sort the missing product that correctly balances each nuclear reaction.",
    categories: ["⁴₂He", "⁰₋₁e + ν̄", "⁰₊₁e + ν", "γ"],
    items: [
      { text: "²³⁸₉₂U → ²³⁴₉₀Th + [ ? ]", category: "⁴₂He" },
      { text: "¹⁴₆C → ¹⁴₇N + [ ? ]", category: "⁰₋₁e + ν̄" },
      { text: "¹¹₆C → ¹¹₅B + [ ? ]", category: "⁰₊₁e + ν" },
      { text: "⁹⁹ᵐ₄₃Tc → ⁹⁹₄₃Tc + [ ? ]", category: "γ" } // metastable relaxation
    ]
  },
  {
    id: "physics-5-30-dnd-12",
    type: "drag_and_drop",
    topic: "Isotope Origins",
    question: "Where do these specific background isotopes generally originate from?",
    categories: ["Radon-222", "Carbon-14"],
    items: [
      { text: "Given off by decay of uranium in ground rocks", category: "Radon-222" },
      { text: "Forms inside lungs if inhaled as a hazard", category: "Radon-222" },
      { text: "Produced when cosmic rays hit the atmosphere", category: "Carbon-14" },
      { text: "Incorporated steadily into all living plants and animals", category: "Carbon-14" }
    ]
  },
  {
    id: "physics-5-30-dnd-13",
    type: "drag_and_drop",
    topic: "Units Check",
    question: "Match the physical quantities taught to their SI units.",
    categories: ["Bq", "s⁻¹", "m⁻¹", "s (or years)"],
    items: [
      { text: "Activity (A)", category: "Bq" },
      { text: "Decay Constant (λ)", category: "s⁻¹" },
      { text: "Linear Absorption Coefficient (μ)", category: "m⁻¹" },
      { text: "Half-Life (T₁/₂)", category: "s (or years)" }
    ]
  },
  {
    id: "physics-5-30-dnd-14",
    type: "drag_and_drop",
    topic: "Core Practical 15 Issues",
    question: "Match the typical experimental error to its practical solution.",
    categories: ["Measure C without source first", "Count for longer periods of time", "Use a lead collimator"],
    items: [
      { text: "Error: Background radiation inflates all count rates", category: "Measure C without source first" },
      { text: "Error: Statistical % fluctuation creates highly noisy data", category: "Count for longer periods of time" },
      { text: "Error: Gamma rays scatter off the desk and bypass the absorber into the tube", category: "Use a lead collimator" }
    ]
  },
  {
    id: "physics-5-30-dnd-15",
    type: "drag_and_drop",
    topic: "Half value thickness vs Half-life",
    question: "Identify the parallels between time-decay and spatial-absorption.",
    categories: ["Time Variable (t)", "Spatial Variable (x)"],
    items: [
      { text: "Time elapsed", category: "Time Variable (t)" },
      { text: "Thickness of Pb absorber", category: "Spatial Variable (x)" },
      { text: "Decay Constant (λ)", category: "Time Variable (t)" },
      { text: "Absorption Coefficient (μ)", category: "Spatial Variable (x)" },
      { text: "Half-Life (T₁/₂)", category: "Time Variable (t)" },
      { text: "Half-Value Thickness (x₁/₂)", category: "Spatial Variable (x)" }
    ]
  },

  // ==========================================
  // SEQUENCE QUESTIONS (8)
  // ==========================================
  {
    id: "physics-5-30-seq-1",
    type: "sequence",
    topic: "Core Practical: Gamma Absorption Method",
    question: "Order the steps for carrying out the Gamma Radiation Absorption practical (Core Practical 15).",
    steps: [
      "Ensure personal safety procedures are followed and place the Geiger-Muller tube a fixed distance from where the source will go",
      "Measure the background count rate (C_bg) over a period of 3-5 minutes without the source present",
      "Place the Gamma source in the secure setup and record the unshielded count rate C₀",
      "Insert plates of lead of known thickness 'x' one by one, measuring the count rate C for an extended duration at each thickness",
      "Subtract the C_bg from all measured count sums to calculate the pure source Intensity I",
      "Plot ln(I) against thickness x to obtain a straight line gradient"
    ]
  },
  {
    id: "physics-5-30-seq-2",
    type: "sequence",
    topic: "Balancing an Equation Method",
    question: "Order the logical steps to balance a complex nuclear decay equation to find an unknown daughter nucleus.",
    steps: [
      "Write out the symbols, mass numbers (A), and atomic numbers (Z) for the parent nucleus and emitted particle",
      "Form an algebraic conservation equation for the top mass numbers (Σ A left = Σ A right)",
      "Form an algebraic conservation equation for the bottom proton numbers (Σ Z left = Σ Z right)",
      "Calculate the missing 'A' and 'Z' required to satisfy both algebraic equalities",
      "Use the newly found Z value to look up the chemical element symbol in the periodic table",
      "Write the fully balanced daughter nucleus notation into the equation"
    ]
  },
  {
    id: "physics-5-30-seq-3",
    type: "sequence",
    topic: "Determining Half-Life via Graphical Data",
    question: "Order the steps to find the half-life from a spreadsheet of times 't' and raw count rates 'C'.",
    steps: [
      "Subtract the known background radiation count rate from all 'C' values to get Activity A",
      "Calculate the natural logarithm, ln(A), for each activity value",
      "Plot a scatter graph of ln(A) on the y-axis against time t on the x-axis",
      "Draw the best-fit straight line and calculate its negative gradient to obtain the decay constant λ",
      "Use the equation T₁/₂ = ln(2) / λ to calculate the final half-life in seconds"
    ]
  },
  {
    id: "physics-5-30-seq-4",
    type: "sequence",
    topic: "Nuclear Process scale",
    question: "Order these events by typical half-life timescale, from shortest-lived (fractions of a second) to longest-lived (billions of years).",
    steps: [
      "Highly unstable synthetic isotopes created in a particle accelerator",
      "Polonium-214 (fractions of a millisecond)",
      "Carbon-14 (approx 5,730 years)",
      "Uranium-238 (approx 4.5 billion years)"
    ]
  },
  {
    id: "physics-5-30-seq-5",
    type: "sequence",
    topic: "Penetrating Power Order",
    question: "Rank the radiation types from strongly absorbed (Shortest range in air) to weakly absorbed (Longest range in air).",
    steps: [
      "Alpha particles (stopped by 5 cm of air)",
      "Beta particles (stopped by approx 1 m of air)",
      "Gamma rays (follows inverse square law over km distances)"
    ]
  },
  {
    id: "physics-5-30-seq-6",
    type: "sequence",
    topic: "Ionising Ability Order",
    question: "Rank the radiation types from LEAST ionising internally, to MOST highly ionising.",
    steps: [
      "Gamma rays (zero charge, deposits sparse scattered energy)",
      "Beta particles (single negative charge, deflects lightweight electrons)",
      "Alpha particles (double positive charge + heavy mass, violently ionises surrounding tissue)"
    ]
  },
  {
    id: "physics-5-30-seq-7",
    type: "sequence",
    topic: "Beta-minus decay timeline events",
    question: "Trace the subatomic events during a spontaneous Beta-minus decay.",
    steps: [
      "An unstable neutron-rich nucleus randomly triggers a weak nuclear force interaction",
      "A down quark converts to an up quark, turning a neutron into a proton",
      "A fast-moving electron (β⁻ particle) and an electron antineutrino are generated to conserve charge and lepton numbers",
      "The beta particle and antineutrino are forcefully ejected from the nucleus",
      "The daughter nucleus remains with unchanged mass A but a higher atomic number Z (+1)"
    ]
  },
  {
    id: "physics-5-30-seq-8",
    type: "sequence",
    topic: "Solving for Nuclei remaining via lambda",
    question: "Order the computational steps to find the remaining Number of nuclei (N) using the equation N = N₀e⁻λt given T₁/₂ and time t.",
    steps: [
      "Ensure the time elapsed 't' and the half-life T₁/₂ are in matching time units (e.g. seconds)",
      "Calculate the decay constant λ by dividing ln(2) by T₁/₂",
      "Multiply -λ by the time passed 't' to obtain the negative decay exponent",
      "Use the natural exponential function (e^x) on the calculated exponent",
      "Multiply the resulting fraction scalar by the initial starting nuclei N₀"
    ]
  },

  // ==========================================
  // KEYWORD MATCHING QUESTIONS (5)
  // ==========================================
  {
    id: "physics-5-30-key-1",
    type: "keyword",
    topic: "Random Process Definitions",
    question: "Explain exactly what physicists mean when they define radioactive decay as both 'random' and 'spontaneous'.",
    keywords: [
      "unpredictable",
      "individual",
      "probability",
      "external",
      "temperature",
      "pressure"
    ],
    sampleAnswer: "Decay is random because it is fundamentally unpredictable exactly when any individual nucleus will undergo decay, ruled solely by probability. Decay is spontaneous because it occurs purely due to nuclear instability inside the atom, completely unaffected by external conditions such as temperature, pressure, or chemical bonding."
  },
  {
    id: "physics-5-30-key-2",
    type: "keyword",
    topic: "Background Subtracting",
    question: "Why is it mathematically critical to measure and subtract background radiation during half-life experiments?",
    keywords: [
      "constant",
      "environmental",
      "raw",
      "higher",
      "exponential",
      "level off"
    ],
    sampleAnswer: "Background radiation supplies a constant count rate to the detector from environmental sources. If this isn't subtracted from the raw count, the plot of activity will improperly level off above zero instead of demonstrating true exponential decay, severely corrupting the calculation of λ."
  },
  {
    id: "physics-5-30-key-3",
    type: "keyword",
    topic: "Gamma Practical Shielding",
    question: "In the Core Practical investigating gamma absorption, explain how the linear absorption coefficient μ is found via graphs.",
    keywords: [
      "ln",
      "intensity",
      "thickness",
      "straight line",
      "gradient",
      "negative"
    ],
    sampleAnswer: "By processing the equation I = I₀e^(-μx) with natural logs, we get ln(I) = ln(I₀) - μx. By plotting ln(I) on the y-axis against the absorber thickness x on the x-axis, the graph creates a straight line. The gradient (slope) of this line is strictly equal to the negative coefficient (-μ)."
  },
  {
    id: "physics-5-30-key-4",
    type: "keyword",
    topic: "Statistical Uncertainty",
    question: "Since decay is random, single counts contain uncertainty. How can a student demonstrably reduce the percentage uncertainty of their measurements?",
    keywords: [
      "longer",
      "time",
      "total",
      "increase",
      "Poisson",
      "root"
    ],
    sampleAnswer: "Due to Poisson statistics, a total measurement of N events holds an uncertainty of roughly root-N. To drastically reduce the percentage uncertainty (which acts as √N/N = 1/√N), the student must count events over a much longer time period to increase the overall total count."
  },
  {
    id: "physics-5-30-key-5",
    type: "keyword",
    topic: "Comparing Alpha and Gamma",
    question: "Compare and contrast the ionisation ability and penetrating power of alpha and gamma radiation.",
    keywords: [
      "heavy",
      "electrons",
      "ionise",
      "paper",
      "photon",
      "lead"
    ],
    sampleAnswer: "Alpha particles possess immense kinetic energy, a massive scale, and a +2 charge that pulls outer electrons swiftly, making them violently ionising but causing them to rapidly lose energy and be stopped by a mere sheet of paper. Gamma radiation consists of massless, uncharged photons which pass easily between atoms, making them poorly ionising but immensely penetrating, requiring thick lead to halt."
  },

  // ==========================================
  // FLASHCARDS (10)
  // ==========================================
  {
    id: "physics-5-30-fc-1",
    type: "flashcard",
    topic: "Definitions",
    front: "What is meant by the 'spontaneous' nature of decay?",
    back: "Decay happens entirely without any external trigger, and cannot be sped up, slowed down, or affected by changes in temperature or pressure."
  },
  {
    id: "physics-5-30-fc-2",
    type: "flashcard",
    topic: "Safety & Method",
    front: "What dominates the UK's natural background radiation budget?",
    back: "Radon gas seeping from rocks and soil (accounting for approximately 50%)."
  },
  {
    id: "physics-5-30-fc-3",
    type: "flashcard",
    topic: "Equations",
    front: "State the equation bridging Half-Life (T₁/₂) and Decay Constant (λ).",
    back: "T₁/₂ = ln(2) / λ ≈ 0.693 / λ"
  },
  {
    id: "physics-5-30-fc-4",
    type: "flashcard",
    topic: "Definitions",
    front: "Define 'Decay Constant' (λ).",
    back: "The statistical probability per unit time (seconds⁻¹) that any individual nucleus in a sample will undergo decay."
  },
  {
    id: "physics-5-30-fc-5",
    type: "flashcard",
    topic: "Particle rules",
    front: "How does the 'A' and 'Z' of a parent nucleus respond strictly to an Alpha decay?",
    back: "A (Mass Number) decreases by 4.\nZ (Atomic Number) decreases by 2."
  },
  {
    id: "physics-5-30-fc-6",
    type: "flashcard",
    topic: "Particle rules",
    front: "How does the 'A' and 'Z' of a parent nucleus respond strictly to a Beta-minus decay?",
    back: "A (Mass Number) stays absolutely the same.\nZ (Atomic Number) increases by 1."
  },
  {
    id: "physics-5-30-fc-7",
    type: "flashcard",
    topic: "Practical Labs",
    front: "How can you derive λ gracefully from an Activity vs Time graph?",
    back: "Do not use the curve. Instead, plot ln(A) against t to generate a straight line graph. The gradient (slope) of this graph will be –λ."
  },
  {
    id: "physics-5-30-fc-8",
    type: "flashcard",
    topic: "Practical Labs",
    front: "How do you minimize percentage uncertainty relating to standard radioactive randomness?",
    back: "Since uncertainty sits at √N for a count of N, measuring the count rate over much longer duration radically bloats N to shrink percentage errors."
  },
  {
    id: "physics-5-30-fc-9",
    type: "flashcard",
    topic: "Constants and Equations",
    front: "What are the common properties of a Gamma (γ) 'ray'?",
    back: "It is a high-energy electromagnetic wave (photon). It possesses precisely 0 mass and 0 charge. Thus, it is un-deflected by magnetic fields."
  },
  {
    id: "physics-5-30-fc-10",
    type: "flashcard",
    topic: "Formulas",
    front: "State the formula calculating Activity (A) utilizing present Nuclei (N).",
    back: "Activity (A) = Decay Constant (λ) × present Nuclei (N)"
  }
];
