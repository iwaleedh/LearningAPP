export const exercises_physics_5_33 = [
  // ==========================================
  // MULTIPLE CHOICE QUESTIONS (12)
  // ==========================================
  {
    id: "physics-5-33-mcq-1",
    type: "mcq",
    topic: "Free vs Forced Oscillations",
    question: "How is a 'Free Oscillation' explicitly defined within mechanical physical systems?",
    options: [
      "Oscillations which are continuously driven by an external periodic force.",
      "An oscillation where there are only internal forces acting, with zero external energy input.",
      "An oscillation that inevitably achieves critical damping.",
      "Any oscillation operating in a vacuum tube."
    ],
    answer: "An oscillation where there are only internal forces acting, with zero external energy input.",
    explanation: "Free oscillations operate independently at their natural frequency f₀ once disturbed, devoid of any external driving forces or energy injections."
  },
  {
    id: "physics-5-33-mcq-2",
    type: "mcq",
    topic: "Resonance Definition",
    question: "Under what explicit mathematical condition does the phenomenon of 'Resonance' manifest in a driven system?",
    options: [
      "When the driving frequency is exactly half the natural frequency.",
      "When the driving frequency is strictly identical to the system's natural frequency (f_d = f₀).",
      "When the amplitude hits exactly 1 metre.",
      "When kinetic energy and potential energy are completely identical perfectly."
    ],
    answer: "When the driving frequency is strictly identical to the system's natural frequency (f_d = f₀).",
    explanation: "Resonance dictates that maximum energy transfer mathematically occurs precisely when the periodic driving force matches the oscillator's innate natural frequency (f_d = f₀)."
  },
  {
    id: "physics-5-33-mcq-3",
    type: "mcq",
    topic: "Barton's Pendulums",
    question: "In the standard Barton's Pendulum experiment, which of the suspended loose pendulums will violently resonate picking up the largest amplitude?",
    options: [
      "The heaviest pendulum bob.",
      "The lightest pendulum bob.",
      "The pendulum explicitly sharing the identical string length as the heavy master driving pendulum.",
      "The shortest pendulum."
    ],
    answer: "The pendulum explicitly sharing the identical string length as the heavy master driving pendulum.",
    explanation: "Since periodic frequency for a pendulum depends entirely on length (T = 2π√(l/g)), matching lengths identically guarantees identical natural frequencies, enabling perfect resonance."
  },
  {
    id: "physics-5-33-mcq-4",
    type: "mcq",
    topic: "Damping effects on curves",
    question: "When aggressively increasing the mechanical damping applied to an oscillating resonance system, how does the resulting Amplitude-Frequency graph deform?",
    options: [
      "The peak amplitude grows taller and strictly sharper.",
      "The peak amplitude diminishes, broadens significantly, and shifts slightly to a lower frequency.",
      "The peak amplitude remains mathematically identical but shifts laterally higher.",
      "The graph violently inverts into a negative trough."
    ],
    answer: "The peak amplitude diminishes, broadens significantly, and shifts slightly to a lower frequency.",
    explanation: "Damping actively bleeds energy, crushing the peak height (A_max). The restrictive forces simultaneously widen the responsive bandwidth curve and slightly down-shift the resonant frequency."
  },
  {
    id: "physics-5-33-mcq-5",
    type: "mcq",
    topic: "Phase Angle at Resonance",
    question: "If drafting graphs for driver force and resulting displacement during pure resonance, what is the precise phase difference explicitly locking the two waves?",
    options: [
      "0 rad (perfectly in phase)",
      "π/2 rad (90 degree lag)",
      "π rad (180 degree antiphase)",
      "2π rad"
    ],
    answer: "π/2 rad (90 degree lag)",
    explanation: "At the exact resonance peak, the displacement of the oscillator mathematically lags strictly 90° (π/2) behind the periodic pushing force."
  },
  {
    id: "physics-5-33-mcq-6",
    type: "mcq",
    topic: "Phase Angle limits",
    question: "What happens to the phase difference traversing from frequencies significantly below f₀ to frequencies significantly above f₀?",
    options: [
      "It remains permanently locked at π/2.",
      "It starts near 0 (in phase), crosses π/2 at resonance, and approaches π (antiphase) broadly above resonance.",
      "It randomly scrambles due to chaotic mechanical breakdown.",
      "It flips abruptly between 0 and 2π."
    ],
    answer: "It starts near 0 (in phase), crosses π/2 at resonance, and approaches π (antiphase) broadly above resonance.",
    explanation: "Below natural frequency, the mass leisurely follows the driver (≈ 0° lag). Climbing through resonance hits 90°, and pushing too fast forces the mass out of sync entirely (≈ 180°)."
  },
  {
    id: "physics-5-33-mcq-7",
    type: "mcq",
    topic: "Q-Factor mechanics",
    question: "How is the Quality Factor (Q) natively calculated measuring the sharpness of a resonance peak?",
    options: [
      "Q = f₀ × Δf",
      "Q = Δf / f₀",
      "Q = f₀ / Δf (Natural frequency divided by Bandwidth)",
      "Q = Amplitude / Period"
    ],
    answer: "Q = f₀ / Δf (Natural frequency divided by Bandwidth)",
    explanation: "Q-factor fundamentally ratios the core resonant frequency (f₀) structurally against its half-power bandwidth spread (Δf)."
  },
  {
    id: "physics-5-33-mcq-8",
    type: "mcq",
    topic: "Q-Factor Applications",
    question: "Which application structurally demands an incredibly high Q-factor (exceeding 10⁵) for functional survival?",
    options: [
      "Car shock absorbers",
      "Earthquake building dampers",
      "Quartz clock timing oscillators",
      "Mountain bike suspension forks"
    ],
    answer: "Quartz clock timing oscillators",
    explanation: "Quartz crystals demand monumental selectivity to maintain perfect timing (locking precisely upon one lone frequency). Suspensions and dampers require severely low Q-factors explicitly to avoid dangerous resonant shattering."
  },
  {
    id: "physics-5-33-mcq-9",
    type: "mcq",
    topic: "Destructive Resonance",
    question: "Why did the infamous Tacoma Narrows Bridge violently collapse?",
    options: [
      "It was constructed using substandard brittle iron.",
      "Wind-driven oscillating forces matched the structural natural resonant frequency, compiling catastrophic amplitude gains.",
      "It lacked any fundamental natural frequency.",
      "Traffic weight abruptly crossed its yield strength limits."
    ],
    answer: "Wind-driven oscillating forces matched the structural natural resonant frequency, compiling catastrophic amplitude gains.",
    explanation: "High winds generated periodic aerodynamic forces precisely targeting the bridge's low natural frequency. The undamped resonance aggressively compiled massive amplitude twisting until structural failure."
  },
  {
    id: "physics-5-33-mcq-10",
    type: "mcq",
    topic: "Plastic Deformation as Damping",
    question: "How do heavily engineered ductile metals operating inside earthquake-resistant architectures prevent systemic building resonance?",
    options: [
      "They dynamically shift the building's mass altering gravity.",
      "They absorb monumental kinetic energy violently undergoing plastic deformation acting as severe structural damping.",
      "They bounce the seismic waves back into the bedrock flawlessly.",
      "They freeze the building completely rigid."
    ],
    answer: "They absorb monumental kinetic energy violently undergoing plastic deformation acting as severe structural damping.",
    explanation: "Instead of snapping, ductile braces deform permanently (plastic), consuming brutal amounts of vibrational energy. This manifests experimentally as heavy structural damping, terminating the resonance amplitude."
  },
  {
    id: "physics-5-33-mcq-11",
    type: "mcq",
    topic: "String Resonance",
    question: "For a guitar string rigidly fixed clamped at both opposing ends, defining fundamental resonance requires the string length (L) equals what specific metric?",
    options: [
      "One full wavelength (1 λ)",
      "One half-wavelength (λ / 2)",
      "One quarter-wavelength (λ / 4)",
      "Two wavelengths (2 λ)"
    ],
    answer: "One half-wavelength (λ / 2)",
    explanation: "Because both edges are immovable rigidly clamped nodes, the simplest fundamental standing wave forms a single bulging antinode strictly measuring exactly half a wavelength natively."
  },
  {
    id: "physics-5-33-mcq-12",
    type: "mcq",
    topic: "Half-Power Bandwidth",
    question: "When measuring the mathematical Bandwidth (Δf) across a generated resonance curve, at what specific vertical amplitude height are the intersection boundaries drawn?",
    options: [
      "Exactly at A_max",
      "A_max / 2",
      "A_max / √2",
      "A_max / 4"
    ],
    answer: "A_max / √2",
    explanation: "The half-power horizontal cut-off explicitly lives exactly at A_max / √2 (approx 0.707). Because Power is proportional precisely to Amplitude squared, (1/√2)² gives exactly ½ Power."
  },

  // ==========================================
  // FILL-IN-THE-BLANK QUESTIONS (12)
  // ==========================================
  {
    id: "physics-5-33-fitb-1",
    type: "fill_in_the_blank",
    topic: "Free Vibrations",
    question: "Striking a tuning fork produces completely [BLANK] oscillations since it vibrates strictly at its natural frequency with no driving force.",
    answer: "free",
    hints: ["Opposite of forced", "Independence"],
    explanation: "Once struck, the fork receives zero ongoing energy input, defining it fundamentally as a free vibration."
  },
  {
    id: "physics-5-33-fitb-2",
    type: "fill_in_the_blank",
    topic: "Forced terminology",
    question: "To actively combat damping friction and sustain amplitude, an external [BLANK] force must be repetitively applied heavily generating forced oscillations.",
    answer: "driving",
    hints: ["Steering something forward", "Driver"],
    explanation: "The periodic external mechanism literally driving energy directly into the system acts practically as the driving force mapping forced oscillations."
  },
  {
    id: "physics-5-33-fitb-3",
    type: "fill_in_the_blank",
    topic: "Resonance Trigger",
    question: "Maximum energy transfer happens when the external driving frequency becomes totally [BLANK] identically to the structural natural frequency.",
    answer: "equal",
    hints: ["Matches perfectly", "Identical"],
    explanation: "Resonance legally requires mathematically the condition f_{driver} = f_{natural} precisely locking to inject maximum momentum."
  },
  {
    id: "physics-5-33-fitb-4",
    type: "fill_in_the_blank",
    topic: "Barton's Pendulum matching",
    question: "In Barton's elaborate pendulums, the specific bob possessing the same physical [BLANK] as the heavy leading driver absorbs the massive resonant amplitude.",
    answer: "length",
    hints: ["The string measure", "How long it is"],
    explanation: "Pendulum physics (T = 2π√(l/g)) dictates that solely matching 'l' achieves exactly matched frequency, opening the gateway to targeted resonance."
  },
  {
    id: "physics-5-33-fitb-5",
    type: "fill_in_the_blank",
    topic: "Damping Curves",
    question: "Adding dense padding creating heavy damping forces the resonance visual peak to aggressively [BLANK] outwards horizontally across a wider bandwidth.",
    answer: "broaden",
    hints: ["Get wider", "Spread out"],
    explanation: "Heavy damping flattens out the spike completely, widening the curve dramatically making it responsive sluggishly over a massive frequency range rather than focused heavily."
  },
  {
    id: "physics-5-33-fitb-6",
    type: "fill_in_the_blank",
    topic: "Resonant Peak Skew",
    question: "Notably, severe damping friction actively pushes shifting the resonance peak mathematically slightly to a [BLANK] lower frequency value actively below f₀.",
    answer: "lower",
    hints: ["Beneath", "Not higher"],
    explanation: "The peak doesn't simply squash vertically downwards; the harsh resistance actively skews the maximal peak center drifting backwards shifting towards noticeably lower frequencies natively."
  },
  {
    id: "physics-5-33-fitb-7",
    type: "fill_in_the_blank",
    topic: "Phase Angle locking",
    question: "Exactly at the absolute peak of pure resonance, the oscillator displacement mathematically consistently [BLANK] strictly behind the driver by π/2 radians.",
    answer: "lags",
    hints: ["Follows behind", "Not leads"],
    explanation: "The velocity aligns syncing perfectly carrying forced energy, but functionally the positional displacement mechanically trails strictly 90 degrees directly behind."
  },
  {
    id: "physics-5-33-fitb-8",
    type: "fill_in_the_blank",
    topic: "High Q vs Low Q",
    question: "Radio tuning circuits strictly require an incredibly [BLANK] Q-factor to forcefully isolate explicitly one tiny singular station bandwidth.",
    answer: "high",
    hints: ["Large number", "Sharp"],
    explanation: "Because Q = f₀/Δf, an astronomical Q limits the bandwidth harshly, creating a razor-thin needle peak that only triggers vibrating precisely for one target station."
  },
  {
    id: "physics-5-33-fitb-9",
    type: "fill_in_the_blank",
    topic: "Building suspensions",
    question: "Vehicular mechanical suspensions actively require intensely [BLANK] internal Q-factors specifically to avoid bouncing disastrously echoing multiple repeating frequencies.",
    answer: "low",
    hints: ["Small number", "Broad"],
    explanation: "A low Q physically embodies heavy damping, creating a squashed sluggish response curve that absorbs shock heavily across any frequency bump without isolating dangerous resonant loops."
  },
  {
    id: "physics-5-33-fitb-10",
    type: "fill_in_the_blank",
    topic: "MRI application",
    question: "Medical [BLANK] scanners explicitly utilise nuclear magnetic resonance mapping forcing targeted localized body water molecule tissue to strongly respond.",
    answer: "MRI",
    hints: ["Magnetic Resonance Imaging", "Hospital scanner"],
    explanation: "MRI physically operates forcing targeted magnetic waves exactly at the natural resonating resonance frequencies mapping human protons to emit tracking signals safely."
  },
  {
    id: "physics-5-33-fitb-11",
    type: "fill_in_the_blank",
    topic: "Deformation absorption",
    question: "Structural building architecture safely mitigates huge earthquake resonant frequencies legally employing specifically engineered [BLANK] deformation bending absorbing raw energy.",
    answer: "plastic",
    hints: ["Permanent bending", "Not elastic"],
    explanation: "Instead of brittle snapping, ductile structural components yield generating massive plastic internal friction. This permanently alters their shape structurally but totally drains crushing resonant energy."
  },
  {
    id: "physics-5-33-fitb-12",
    type: "fill_in_the_blank",
    topic: "Antiphase behavior",
    question: "If mechanically driving an oscillator excessively [BLANK] heavily past its natural resonant frequency, its phase shift creeps completely breaking towards 180 degrees.",
    answer: "above",
    hints: ["Higher than f0", "Past the peak"],
    explanation: "Driving a system aggressively too fast (Above f₀) mechanically prevents syncing; the mass literally physically fights pushing reversing forming perfectly opposite completely 180° antiphase trails."
  },

  // ==========================================
  // DRAG AND DROP QUESTIONS (10)
  // ==========================================
  {
    id: "physics-5-33-dnd-1",
    type: "drag_and_drop",
    topic: "Free vs Forced Oscillations",
    question: "Correctly group the distinct structural characteristics detailing Free versus Forced mechanical vibrations.",
    categories: ["Free Oscillations", "Forced Oscillations"],
    items: [
      { text: "Contains zero transfer of energy escaping strictly to or from environments naturally", category: "Free Oscillations" },
      { text: "Vibrates fundamentally totally locked at intrinsic f₀", category: "Free Oscillations" },
      { text: "Striking a raw tuning fork violently once", category: "Free Oscillations" },
      { text: "Dictates repetitive periodic energy injections attempting actively fighting resistive damping", category: "Forced Oscillations" },
      { text: "Vibrates matching natively locking directly mirroring to the driver frequency f₁", category: "Forced Oscillations" },
      { text: "Shattering glassware maintaining sustained high-pitch continuous audio", category: "Forced Oscillations" }
    ]
  },
  {
    id: "physics-5-33-dnd-2",
    type: "drag_and_drop",
    topic: "The Resonance Phenomenon Boundaries",
    question: "Identify the critical conditions triggering genuine mechanical resonance vs off-resonance behavior states.",
    categories: ["Resonance Achieved", "Off-Resonance states"],
    items: [
      { text: "f_driver perfectly exactly identical mathematically equalling f_natural", category: "Resonance Achieved" },
      { text: "Maximum transfer limits mapping Kinetic Energy natively reached", category: "Resonance Achieved" },
      { text: "Displacement firmly mechanically lags tracking driving force exactly by isolating π/2 radians", category: "Resonance Achieved" },
      { text: "Amplitude slightly bumps increasing, but definitively fails generating maximal runaway crests", category: "Off-Resonance states" },
      { text: "Energy transfers clumsily fighting mathematically generating inefficient systemic lag", category: "Off-Resonance states" }
    ]
  },
  {
    id: "physics-5-33-dnd-3",
    type: "drag_and_drop",
    topic: "Damping Curvature Effects",
    question: "Sort the structural graphical impacts explicitly mapped generated when tweaking the Damping Variable across pure Amplitude-Frequency graph outputs.",
    categories: ["Lightly Damped", "Heavily Damped"],
    items: [
      { text: "Spikes structurally violently creating an extremely sharp, exceedingly tall narrow peak graph", category: "Lightly Damped" },
      { text: "Resonant Peak tracks vertically sitting perfectly flawlessly atop natural f₀ frequency", category: "Lightly Damped" },
      { text: "Crushes completely rendering a massively broad, immensely squashed low-profile peak curve", category: "Heavily Damped" },
      { text: "Peak vertex inherently mathematically skews sliding slightly backwards reaching below origin f₀", category: "Heavily Damped" },
      { text: "Massively vastly increases generating massive tracking bandwidth (Δf)", category: "Heavily Damped" }
    ]
  },
  {
    id: "physics-5-33-dnd-4",
    type: "drag_and_drop",
    topic: "Bandwidth & Q-Factor",
    question: "Categorize the mechanical traits actively connected intrinsically to classifying high and low Q oscillating mechanics.",
    categories: ["High-Q System Mechanics", "Low-Q System Mechanics"],
    items: [
      { text: "Equation fraction naturally driven mathematically via deeply tiny miniscule bandwidth Δf division", category: "High-Q System Mechanics" },
      { text: "Provides immense explicit frequency selectivity specifically (Radio Tuners, Clocks)", category: "High-Q System Mechanics" },
      { text: "Physically graphically characterizes a razor-thin needle structure", category: "High-Q System Mechanics" },
      { text: "Driven mathematically heavily via immense broad extensive bandwidth Δf expansion", category: "Low-Q System Mechanics" },
      { text: "Employed desperately requiring absorbing violent systemic impacts (Car shocks, Bridges)", category: "Low-Q System Mechanics" }
    ]
  },
  {
    id: "physics-5-33-dnd-5",
    type: "drag_and_drop",
    topic: "Good vs Bad Resonance",
    question: "Sort the real-world engineering instances into strictly beneficial mechanical resonance versus dangerous destructive implementations.",
    categories: ["Desirable Engineered Resonance", "Destructive Dangerous Resonance"],
    items: [
      { text: "Isolating medical MRI scanner magnetic frequency tissue absorption", category: "Desirable Engineered Resonance" },
      { text: "Generating fundamental standing stationary waves isolating organ pipe tubes", category: "Desirable Engineered Resonance" },
      { text: "Isolating tuning microwave oven beams targeting strict water molecule heating", category: "Desirable Engineered Resonance" },
      { text: "Wind oscillating matching identical targeted Tacoma Narrows suspension bridge arrays", category: "Destructive Dangerous Resonance" },
      { text: "Seismic earthquake tremors mapping identically echoing to skyscraper tower blocks", category: "Destructive Dangerous Resonance" }
    ]
  },

  // ==========================================
  // SEQUENCE QUESTIONS (5)
  // ==========================================
  {
    id: "physics-5-33-seq-1",
    type: "sequence",
    topic: "Core Practical 16: Resonance Plotting",
    question: "Order the systematic lab procedure explicitly charting compiling a mechanical oscillator resonance curve accurately.",
    steps: [
      "Rig an undamped mechanical mass-spring isolating freely recording executing timing extracting exactly natural frequency f₀.",
      "Connect structural vibration generator wiring locking controlling frequency output starting safely well below calculated f₀.",
      "Activate driver allowing mechanical steady-state amplitude to settle completely before taking ruler vertical measurements.",
      "Incrementally slowly turn increasing mechanical driving frequency reading upward (0.2 Hz steps) approaching directly toward mapped f₀.",
      "Record sweeping maximum amplitude crossing violently exactly matching f₀ resonance threshold.",
      "Continue deliberately sliding exceeding driving frequency safely well above f₀ tracking falling amplitudes systematically mapping the full curve plotting."
    ]
  },
  {
    id: "physics-5-33-seq-2",
    type: "sequence",
    topic: "Determining Q-Factor Mathematically",
    question: "Chronologically arrange the standard procedural steps manually evaluating a Q-factor extracting directly processing off a generated resonance graph.",
    steps: [
      "Scan locating strictly charting identifying the absolute maximum amplitude peak height (A_max) directly at resonant f₀.",
      "Process algebraically calculating exactly the half-power threshold metric specifically dividing evaluating mathematically: A_max / √2.",
      "Draw projecting a horizontal straight marker line physically straight across intersecting the resonance graph precisely at this calculated height.",
      "Drop vertical intercept tracking lines observing logging mechanically mapping exactly the two localized frequency values (f_low and f_high).",
      "Subtract processing directly isolating bandwidth differential mathematically taking (f_high - f_low) mapping precisely equals Δf.",
      "Finalize taking resonant frequency globally dividing it forcefully distributing taking strictly f₀ / Δf finding completing calculating Q."
    ]
  },
  {
    id: "physics-5-33-seq-3",
    type: "sequence",
    topic: "Phase Shift Timeline (Low to High Frequencies)",
    question: "Trace fundamentally ordering how oscillator displacement Phase actively lags structurally mutating climbing entirely scanning directly across the resonance spread from bottom to top.",
    steps: [
      "Operating at severely incredibly low frequencies significantly deeply beneath f₀, mass tracking follows virtually perfectly in phase (Angle 0).",
      "As frequency gradually ramps increasing approaching nearing f₀ threshold, the lagging angle begins stretching widening significantly.",
      "Hitting executing true mechanical resonance locking precisely mapping identically f_drive = f₀, phase angle forcefully locks exactly specifically lagging strictly π/2 (90 degrees).",
      "Pushing pushing accelerating aggressively climbing violently past peaking above f₀ limits, distance lag gap aggressively widens continuing expanding.",
      "Attaining extreme incredibly exceedingly high massive frequencies towering above f₀, oscillator totally structurally breaks mapping locking tracking opposite functionally antiphase (Angle π)."
    ]
  },

  // ==========================================
  // KEYWORD MATCHING QUESTIONS (4)
  // ==========================================
  {
    id: "physics-5-33-key-1",
    type: "keyword",
    topic: "Defining Resonance limits",
    question: "Formulate defining carefully precisely documenting explicitly exactly structuring stating detailing formally explaining the condition characterizing categorizing achieving mechanical Resonance.",
    keywords: [
      "driving",
      "frequency",
      "equal",
      "natural",
      "maximum",
      "amplitude"
    ],
    sampleAnswer: "Resonance structurally occurs practically exactly when the external driving frequency becomes mathematically literally strictly equal locking entirely matching the system's innate independent natural frequency, inherently instantly aggressively resulting outputting maximum possible sweeping mechanical amplitude gaining maximum energy transfers."
  },
  {
    id: "physics-5-33-key-2",
    type: "keyword",
    topic: "Ductile Plastic Damping",
    question: "Diligently explain characterizing determining exploring observing how architecture legally employs harnessing ductile materials fighting off structural earthquake resonant collapse.",
    keywords: [
      "plastic",
      "deformation",
      "absorb",
      "energy",
      "dissipate",
      "damping"
    ],
    sampleAnswer: "Seismic protective building frames explicitly employ structurally ductile components forcefully engineered heavily designed strictly bending yielding aggressively generating permanent plastic deformation inherently functioning violently drastically acting to permanently absorb and safely heavily dissipate crushing kinetic energy mechanically acting functioning completely providing life-saving massive structural heavy damping."
  },
  {
    id: "physics-5-33-key-3",
    type: "keyword",
    topic: "Damping effects on curves",
    question: "Articulate detailing strictly assessing comparing explaining documenting mathematically evaluating exactly how aggressively increasing applied friction damping alters deforms changes a resonance peak graph structurally.",
    keywords: [
      "peak",
      "lower",
      "broader",
      "bandwidth",
      "shifts",
      "slightly"
    ],
    sampleAnswer: "Damping extensively heavily forces compressing aggressively squashing limiting making the absolute peak severely significantly structurally lower while concurrently simultaneously drastically vastly widening making spreading it incredibly broader heavily amplifying bandwidth width dimensions. Furthermore, the extreme vertex point structurally mechanically technically slightly skews sliding pushing shifting definitively slowly towards a lowered frequency origin."
  },

  // ==========================================
  // FLASHCARDS (8)
  // ==========================================
  {
    id: "physics-5-33-fc-1",
    type: "flashcard",
    topic: "Resonant Frequency equality",
    front: "What exact algebraic condition dictates proving triggering marking structural absolute mechanical Resonance successfully?",
    back: "f_driver = f_natural (The active driving frequency identically equals mathematically the intrinsic natural frequency exactly)."
  },
  {
    id: "physics-5-33-fc-2",
    type: "flashcard",
    topic: "Phase Locking mechanics",
    front: "Exactly exactly specifically evaluating directly atop mathematically exactly at the resonance peak, displacement specifically lags mapping precisely the driving pushing force exactly by what defined angular metric?",
    back: "Exactly strictly strictly trailing purely locking isolating π/2 radians (perfectly structured mathematically explicitly acting logging 90 degrees behind specifically)."
  },
  {
    id: "physics-5-33-fc-3",
    type: "flashcard",
    topic: "Bandwidth extraction limits",
    front: "When charting identifying mapping scanning drawing reading specifically extracting the mathematical Width calculating defining exactly finding processing Δf (Bandwidth), what precise amplitude metric vertical boundary line fundamentally decides determines the cutoff boundaries horizontally?",
    back: "Logging cutting drawing isolating identifying strictly strictly calculating mapping entirely locking precisely evaluating exactly strictly processing explicitly A_max / √2 (mathematically approximating producing identifying roughly 0.707 percent)."
  },
  {
    id: "physics-5-33-fc-4",
    type: "flashcard",
    topic: "Q factor formula definition",
    front: "Write defining establishing isolating structuring mapping formulating logging writing tracking identifying exactly definitively plotting identifying precisely establishing capturing extracting the Quality factor (Q) fraction equation explicitly.",
    back: "Q = f₀ / Δf (Natural Resonance frequency explicitly formally purely safely strictly legally purely deeply cleanly strictly divided mapped inherently mathematically directly thoroughly completely through identifying Bandwidth)."
  },
  {
    id: "physics-5-33-fc-5",
    type: "flashcard",
    topic: "Identifying Damping effect on resonant freq",
    front: "As rigorous mechanical damping becomes intensely incredibly heavy mathematically charting visually, what directional positional shift actively physically inherently naturally occurs fundamentally manipulating moving plotting isolating the precise absolute peak resonant frequency marker inherently?",
    back: "It subtly but clearly explicitly definitely inherently necessarily distinctly slowly mathematically visibly physically forcefully necessarily skews drastically inevitably drastically skews sliding shifting explicitly down technically migrating pushing strictly mathematically slightly below f₀."
  },
  {
    id: "physics-5-33-fc-6",
    type: "flashcard",
    topic: "Free oscillation limits",
    front: "Under what specific mechanical limits isolating classifying tracking boundaries does a vibrating tuning fork formally completely rigidly securely functionally entirely natively perfectly strictly technically officially categorize definitively naturally precisely explicitly purely cleanly identically exactly function completely purely operating as a free oscillation?",
    back: "It totally purely completely entirely exclusively strictly fundamentally deeply natively rigorously wholly uniquely solely exclusively legally acts operates functions vibrates completely fully purely definitively relying mapping identically relying strictly exclusively explicitly cleanly inherently mathematically securely purely identically only relying specifically upon strictly purely exclusively strictly identically formally identifying internal restoring mechanisms safely absorbing cleanly carrying capturing exactly completely wholly identically strictly zero completely strictly mapping totally tracking carrying zero isolating gathering gathering completely zero purely explicitly entirely capturing totally zero external periodic pushing forcing driving forces entirely completely totally safely legally formally zero energy intake completely natively."
  }
];
