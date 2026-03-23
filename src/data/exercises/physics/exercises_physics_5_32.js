export const exercises_physics_5_32 = [
  // ==========================================
  // MULTIPLE CHOICE QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-32-mcq-1",
    type: "mcq",
    topic: "Conditions for SHM",
    question: "Which of the following encapsulates the fundamental conditions required for an object to perform Simple Harmonic Motion (SHM)?",
    options: [
      "Acceleration is proportional to velocity.",
      "Acceleration is directly proportional to displacement, and acts in the same direction.",
      "Acceleration is directly proportional to displacement, and is always directed towards the equilibrium position.",
      "Restoring force is constant throughout the entire oscillation."
    ],
    answer: "Acceleration is directly proportional to displacement, and is always directed towards the equilibrium position.",
    explanation: "SHM is mathematically defined by a = -ω²x. The displacement 'x' provides the direct proportionality, and the negative sign '-' ensures the acceleration always points back to the centre (equilibrium)."
  },
  {
    id: "physics-5-32-mcq-2",
    type: "mcq",
    topic: "Trampoline non-SHM",
    question: "Why is a person bouncing up and down on a trampoline NOT considered an example of true Simple Harmonic Motion?",
    options: [
      "Because the trampoline springs are too stiff.",
      "Because gravitational acceleration is constant and independent of the person's displacement when they are entirely in the air.",
      "Because the person possesses terminal velocity.",
      "Because the period of the bounce relies heavily on the person's mass."
    ],
    answer: "Because gravitational acceleration is constant and independent of the person's displacement when they are entirely in the air.",
    explanation: "For SHM, the restoring force must scale proportionally with displacement (F = -kx). While airborne, the restoring force on the jumper is exclusively their weight (mg), which is completely constant, regardless of how high they are."
  },
  {
    id: "physics-5-32-mcq-3",
    type: "mcq",
    topic: "Isochronous Property",
    question: "Which phenomenon is commonly described as the 'isochronous property' of an SHM oscillator?",
    options: [
      "The oscillator's speed remains constant throughout the cycle.",
      "The period (T) of the oscillation takes exactly 1 second.",
      "The period (T) of oscillation is completely independent of the amplitude (A).",
      "The kinetic energy is exactly identical to the potential energy continually."
    ],
    answer: "The period (T) of oscillation is completely independent of the amplitude (A).",
    explanation: "Isochronous means 'equal time'. A pendulum taking a massive swing will complete the cycle in the exact same time as a tiny swing, provided the angle stays relatively small."
  },
  {
    id: "physics-5-32-mcq-4",
    type: "mcq",
    topic: "Displacement equation usage",
    question: "An object performing SHM starts its timer (t=0) when released from its maximum positive displacement. Which equation models its displacement against time?",
    options: [
      "x = A sin(ωt)",
      "x = A cos(ωt)",
      "x = -A sin(ωt)",
      "x = -A cos(ωt)"
    ],
    answer: "x = A cos(ωt)",
    explanation: "At t=0, cos(0) = 1, giving x = A, perfectly matching the release from max positive displacement. A sine wave would begin at x = 0 (equilibrium)."
  },
  {
    id: "physics-5-32-mcq-5",
    type: "mcq",
    topic: "Phase Relationships",
    question: "If drafting graphs for displacement (x) and velocity (v) over time in SHM, what is the precise phase difference between the two waves?",
    options: [
      "v leads x by π/4 (45°)",
      "v leads x by π/2 (90°)",
      "x leads v by π/2 (90°)",
      "They are entirely in antiphase (180°)"
    ],
    answer: "v leads x by π/2 (90°)",
    explanation: "Velocity is the negative inverse-derivative of position in SHM. When x generates a cosine wave, v generates an inverted sine wave. Visually, the v-curve sits π/2 radians ahead of the x-curve."
  },
  {
    id: "physics-5-32-mcq-6",
    type: "mcq",
    topic: "Maximum Values location",
    question: "At which specific position does an oscillating mass reach its maximum absolute acceleration |a_max|?",
    options: [
      "Exactly at the equilibrium node (x=0).",
      "Halfway between equilibrium and the edge.",
      "At the extremes of the oscillation amplitudes (x = ±A).",
      "At time t = T/4, regardless of position."
    ],
    answer: "At the extremes of the oscillation amplitudes (x = ±A).",
    explanation: "Since a = -ω²x, acceleration is directly proportional to displacement. It therefore reaches absolute peak intensity at the furthest possible stretching points: ±A."
  },
  {
    id: "physics-5-32-mcq-7",
    type: "mcq",
    topic: "Period dependencies",
    question: "If a simple pendulum and a mass-spring system are moved from Earth to the surface of the Moon, what happens to their respective periods (T)?",
    options: [
      "Both periods double.",
      "Only the mass-spring's period expands.",
      "Only the pendulum's period expands, adapting to weaker gravity.",
      "Both oscillators begin swinging significantly faster (shorter T)."
    ],
    answer: "Only the pendulum's period expands, adapting to weaker gravity.",
    explanation: "The pendulum relies on 'g' (T = 2π√(l/g)), so weaker gravity yields a slower return and longer T. The mass-spring formula (T = 2π√(m/k)) possesses zero gravitational variables, meaning it oscillates identically on the Moon."
  },
  {
    id: "physics-5-32-mcq-8",
    type: "mcq",
    topic: "Pendulum approximations",
    question: "Deriving the SHM equation for a simple pendulum relies on a critical mathematical assumption. What is it?",
    options: [
      "The mass of the bob must exceed string mass by a factor of 10.",
      "Air resistance must operate in a vacuum.",
      "The initial displacement angle (θ) is extremely large.",
      "The angular displacement (θ) is sufficiently small, meaning sin(θ) ≈ θ."
    ],
    answer: "The angular displacement (θ) is sufficiently small, meaning sin(θ) ≈ θ.",
    explanation: "Pendulums only strictly execute SHM for swing arcs below roughly 15°. Beyond this, restoring force sin(θ) deviates from purely linear 'x', breaking the direct proportionality rule."
  },
  {
    id: "physics-5-32-mcq-9",
    type: "mcq",
    topic: "Energy in SHM",
    question: "In an ideal undamped SHM system, which statement accurately reflects the behavior of Total Mechanical Energy?",
    options: [
      "It alternates massively in a sinusoidal pattern with a frequency of 2f.",
      "It remains absolutely constant whilst Kinetic and Potential halves swap seamlessly.",
      "It steadily drains away into thermal friction.",
      "It is directly proportional to the velocity squared at any point."
    ],
    answer: "It remains absolutely constant whilst Kinetic and Potential halves swap seamlessly.",
    explanation: "An ideal oscillating mechanism loses zero energy. At the edges, energy is 100% Potential. At equilibrium, it hits 100% Kinetic. Summing them (PE+KE) outputs a rigidly flat horizontal continuous line: ½mω²A²."
  },
  {
    id: "physics-5-32-mcq-10",
    type: "mcq",
    topic: "Velocity vs displacement",
    question: "Which geometric shape is formed when plotting Velocity (v) on the y-axis against Displacement (x) on the x-axis for an SHM oscillator?",
    options: [
      "A straight line with negative gradient.",
      "A uniform hyperbola.",
      "A perfectly proportioned ellipse.",
      "A parabolic trough."
    ],
    answer: "A perfectly proportioned ellipse.",
    explanation: "The identity mapping mapping squared velocity and squared displacement constructs the mathematical equation for an ellipse tracing circularly out to V_max vertically and A horizontally."
  },
  {
    id: "physics-5-32-mcq-11",
    type: "mcq",
    topic: "Modifying Period",
    question: "To actively double the time period (T) of an oscillating mass-spring system, what modification must be performed?",
    options: [
      "Quadruple the spring constant (k).",
      "Quadruple the mass of the suspended object (m).",
      "Double the initial displacement amplitude.",
      "Halve the mass."
    ],
    answer: "Quadruple the mass of the suspended object (m).",
    explanation: "Since T = 2π√(m/k), mass dictates period via a square root. To force 'T' to double (2T), you must insert a factor of 4 inside the square root mechanism. √(4m) = 2√m."
  },
  {
    id: "physics-5-32-mcq-12",
    type: "mcq",
    topic: "Acceleration graphing",
    question: "When plotting an Acceleration (a) against Displacement (x) graph, what key physical parameter is intrinsically represented by the gradient?",
    options: [
      "-ω ( negative circular frequency)",
      "-ω² (negative angular frequency squared)",
      "ω² (positive angular frequency squared)",
      "T² (Period squared)"
    ],
    answer: "-ω² (negative angular frequency squared)",
    explanation: "Plotting 'a' on the Y-axis and 'x' on the X-axis fits flawlessly onto a straight line through the origin, conforming to y=mx. Given a = -ω²x, the gradient 'm' is strictly -ω²."
  },
  {
    id: "physics-5-32-mcq-13",
    type: "mcq",
    topic: "Measuring g from a Pendulum",
    question: "To accurately calculate the Earth's gravity 'g' using a pendulum experiment, one plots the square of the Period (T²) against Length (l). How is 'g' then isolated?",
    options: [
      "g = gradient × 2π",
      "g = 4π² × gradient",
      "g = 4π² / gradient",
      "g = gradient / 4π²"
    ],
    answer: "g = 4π² / gradient",
    explanation: "Starting from T = 2π√(l/g), square everything to get T² = (4π²/g) * l. Plotting T² over l produces a gradient = 4π²/g. Re-arranging mechanically isolates g = 4π² / gradient."
  },
  {
    id: "physics-5-32-mcq-14",
    type: "mcq",
    topic: "Damping classifications",
    question: "A heavy pendulum swaying inside thick syrup manages to eventually return straight to its equilibrium centre without ever crossing over to the other side, doing so rapidly. Which damping state is predominantly acting?",
    options: [
      "Under-damped (Light)",
      "Critically damped",
      "Over-damped (Heavy)",
      "Undamped"
    ],
    answer: "Critically damped",
    explanation: "Critical damping describes the explicit threshold where the restoring resistance allows the system to perfectly glide back to equilibrium in the absolutely minimal time legally possible, without generating a single oscillation overshoot."
  },
  {
    id: "physics-5-32-mcq-15",
    type: "mcq",
    topic: "Energy amplitudes",
    question: "Because Energy Total = ½mω²A², if you actively pull a mass-spring system down twice as far (doubling the amplitude), by what factor does the stored mechanical energy increase?",
    options: [
      "2",
      "4",
      "√2",
      "Remains constant"
    ],
    answer: "4",
    explanation: "Total Energy scales proportionally to the Amplitude squared (A²). Doubling the distance sets up (2A)², resulting in a factor of 4 times the original total retained energy."
  },

  // ==========================================
  // FILL-IN-THE-BLANK QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-32-fitb-1",
    type: "fill_in_the_blank",
    topic: "SHM Formula",
    question: "The definitive mathematical condition proving SHM states that acceleration is strictly analogous to negative displacement explicitly through the square of angular [BLANK]. (a = -ω²x)",
    answer: "frequency",
    hints: ["ω represents angular...", "Measured in rad/s"],
    explanation: "The constant of proportionality interconnecting negative displacement strictly to acceleration is the square of the angular frequency."
  },
  {
    id: "physics-5-32-fitb-2",
    type: "fill_in_the_blank",
    topic: "Force vectors",
    question: "Inside SHM, the internal [BLANK] force perpetually acts directly towards pulling the structure back to its origin baseline.",
    answer: "restoring",
    hints: ["Bringing things back", "Fixing displacement"],
    explanation: "No matter where the mass is thrown, a 'restoring' force violently exists specifically to drag the oscillator back against the pull, attempting equilibrium."
  },
  {
    id: "physics-5-32-fitb-3",
    type: "fill_in_the_blank",
    topic: "Amplitude independence",
    question: "The time required to fulfill one massive swing compared to one tiny swing is identically uniform, a feature categorised globally as the [BLANK] property of SHM.",
    answer: "isochronous",
    hints: ["Equal time", "Iso- prefix means equal"],
    explanation: "Isochronous physically details why grandfather clocks keep staggeringly accurate time mechanically regardless of the weight losing momentum slowly over the week."
  },
  {
    id: "physics-5-32-fitb-4",
    type: "fill_in_the_blank",
    topic: "Mass-spring variable",
    question: "For a hooked mass-spring oscillator, T = 2π√(m/k), clarifying that period solely reacts to changes inside inserted mass and the spring metric labeled as '[BLANK] constant'.",
    answer: "spring",
    hints: ["The stiffness value", "Hooke's metric 'k'"],
    explanation: "A deeply rigid spring boasting a massive spring constant rapidly violently drives the mass back via F=-kx, shrinking the oscillation cycle period significantly."
  },
  {
    id: "physics-5-32-fitb-5",
    type: "fill_in_the_blank",
    topic: "Sine vs Cosine graphing",
    question: "An experiment timing a pendulum only starts the timer precisely as the bob whistles smoothly through the dead-center passing point. The graph generated matches the mathematical [BLANK] wave form naturally.",
    answer: "sine",
    hints: ["Starts at 0, goes to 1", "Not cosine"],
    explanation: "Since the timer triggered specifically at equilibrium (x=0), the displacement curve begins plotting from 0 up into amplitude, mirroring x = A sin(ωt)."
  },
  {
    id: "physics-5-32-fitb-6",
    type: "fill_in_the_blank",
    topic: "Phase leads",
    question: "Oscillatory mechanics dictate that velocity graphs inherently lead frontward against displacement graphs precisely by an artificial quarter-cycle interval equivalent to [BLANK] over 2 radians.",
    answer: "pi",
    hints: ["π", "90 degrees"],
    explanation: "Differentiating sin/cos introduces a strict 90 degree forward drift (or π/2 offset), pushing all velocity crests into occurring physically a quarter-cycle ahead."
  },
  {
    id: "physics-5-32-fitb-7",
    type: "fill_in_the_blank",
    topic: "Antiphase identity",
    question: "Because multiplying displacement by a minus reverses the wave polarity entirely, Acceleration perfectly sits locked in [BLANK] to displacement continuously.",
    answer: "antiphase",
    hints: ["180 degrees backwards", "Opposite phase"],
    explanation: "Whatever displacement does, acceleration explicitly mirrors backwards completely. 180° out of alignment creates mathematical 'antiphase'."
  },
  {
    id: "physics-5-32-fitb-8",
    type: "fill_in_the_blank",
    topic: "Maximum speed node",
    question: "The absolute maximum momentum and [BLANK] of an oscillator fires immediately as the mass physically crosses through the neutral equilibrium position x=0.",
    answer: "velocity",
    hints: ["Speed with direction", "v"],
    explanation: "At the moment the spring runs out of stored Potential Energy (x=0), the kinetic energy hits its maximal threshold ceiling, transferring to sheer velocity."
  },
  {
    id: "physics-5-32-fitb-9",
    type: "fill_in_the_blank",
    topic: "Zero nodes",
    question: "At the exact peak of an oscillation rim (+A), the instant physical velocity momentarily flatlines strictly at [BLANK] while turning backwards.",
    answer: "zero",
    hints: ["0", "Stopping instantly"],
    explanation: "Reaching the boundary, the body runs completely out of velocity, halts momentarily in midair (v=0), before ripping back in the alternate direction due to maximal acceleration."
  },
  {
    id: "physics-5-32-fitb-10",
    type: "fill_in_the_blank",
    topic: "Pendulum dependencies",
    question: "Calculating T = 2π√(l/g) highlights that dropping a heavier, denser metal bob upon a pendulum actually grants [BLANK] effect mathematically onto its overall cycle length.",
    answer: "no",
    hints: ["Zero", "Does nothing"],
    explanation: "Because gravity operates uniformly on all mass accelerating it uniformly downwards, substituting a highly massive tungsten bob keeps identical swing timing to a wooden bob."
  },
  {
    id: "physics-5-32-fitb-11",
    type: "fill_in_the_blank",
    topic: "Calculator modes trap",
    question: "Before calculating instantaneous displacement like x = 0.05 cos(3.14 * 0.2), students must rigidly switch their calculator settings deeply into [BLANK] mode.",
    answer: "radians",
    hints: ["Not degrees", "rad"],
    explanation: "Angular velocity (ω = 2π/T) parses naturally in rad/s. Leaving the handheld processor computing purely in Degrees churns completely bizarre incorrect displacement coordinates."
  },
  {
    id: "physics-5-32-fitb-12",
    type: "fill_in_the_blank",
    topic: "Energy splitting",
    question: "At any randomly sampled halfway orbital point, the system actively distributes its Total Energy simultaneously into both [BLANK] energy processing heavily alongside Potential energy.",
    answer: "kinetic",
    hints: ["Moving energy", "KE"],
    explanation: "The constant total energy sum slices dynamically. Part of it registers into structural strain/height (PE) while the remainder actively operates as moving-mass velocity (KE)."
  },
  {
    id: "physics-5-32-fitb-13",
    type: "fill_in_the_blank",
    topic: "Damped envelopes",
    question: "Adding 'Light' damping friction to an oscillation actively compresses down the peaks slowly creating an amplitude [BLANK] that decays continuously exponentially over time.",
    answer: "envelope",
    hints: ["The wrapping shape bridging the peaks", "Postal casing analogy"],
    explanation: "Tracing a connecting dotted line smoothly connecting all diminishing velocity crests visually sketches a restrictive boundary decaying curve designated practically as an Amplitude Envelope."
  },
  {
    id: "physics-5-32-fitb-14",
    type: "fill_in_the_blank",
    topic: "Pendulum Error trapping",
    question: "When measuring a string experimentally, failing to calculate length straight straight connecting the pivot deeply to the mechanical [BLANK] of the spherical bob introduces heavy baseline error.",
    answer: "centre",
    hints: ["Middle point of the mass", "Center line"],
    explanation: "Measuring specifically to the hook or to the upper lip of the bob breaks Newtonian mechanics because the exact centre-of-mass provides the exact functioning pivot-radius mathematically."
  },
  {
    id: "physics-5-32-fitb-15",
    type: "fill_in_the_blank",
    topic: "Critical setup",
    question: "Car suspensions deliberately employ dense oil shocks uniquely engineered to apply [BLANK] damping, forcefully halting bounce oscillations instantly post-bump smoothly rather than heavily over-damping them.",
    answer: "critical",
    hints: ["The perfect fast return line", "Not under, not over"],
    explanation: "Finding the sweet spot known formally as critical damping safely guarantees comfort returning immediately to horizontal rather than a nauseating bouncy oscillation structure extending."
  },

  // ==========================================
  // DRAG AND DROP QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-32-dnd-1",
    type: "drag_and_drop",
    topic: "Equations for SHM",
    question: "Sort the structural mapping elements correctly to their respective variable.",
    categories: ["x (Displacement)", "v (Velocity)", "a (Acceleration)"],
    items: [
      { text: "= A cos(ωt)", category: "x (Displacement)" },
      { text: "Graph creates a standard Cosine shape", category: "x (Displacement)" },
      { text: "= -Aω sin(ωt)", category: "v (Velocity)" },
      { text: "Max value output happens exactly at equilibrium", category: "v (Velocity)" },
      { text: "= -Aω² cos(ωt)", category: "a (Acceleration)" },
      { text: "Operates permanently in antiphase to displacement", category: "a (Acceleration)" }
    ]
  },
  {
    id: "physics-5-32-dnd-2",
    type: "drag_and_drop",
    topic: "Locating Maximas",
    question: "Categorize when the oscillator physically triggers its maximum output states.",
    categories: ["Maximized at Equilibrium", "Maximized at the Extremes"],
    items: [
      { text: "Kinetic Energy", category: "Maximized at Equilibrium" },
      { text: "Instantaneous Velocity (v)", category: "Maximized at Equilibrium" },
      { text: "Potential Energy", category: "Maximized at the Extremes" },
      { text: "Acceleration (a)", category: "Maximized at the Extremes" },
      { text: "Restoring Force", category: "Maximized at the Extremes" }
    ]
  },
  {
    id: "physics-5-32-dnd-3",
    type: "drag_and_drop",
    topic: "Pendulum vs Mass-Spring Constants",
    question: "Drop the traits into the correct mechanical Oscillator bin.",
    categories: ["Simple Pendulum", "Mass-Spring System"],
    items: [
      { text: "Period hinges on Gravity field strength", category: "Simple Pendulum" },
      { text: "T = 2π√(l/g)", category: "Simple Pendulum" },
      { text: "Period expands when taking a trip to the Moon", category: "Simple Pendulum" },
      { text: "Period relies heavily on the 'k' stiffness", category: "Mass-Spring System" },
      { text: "Mass variable actively shifts the frequency", category: "Mass-Spring System" },
      { text: "Oscillates exactly identically whether terrestrial or in deep orbit", category: "Mass-Spring System" }
    ]
  },
  {
    id: "physics-5-32-dnd-4",
    type: "drag_and_drop",
    topic: "Damping Visualizations",
    question: "Identify the displacement-time curves tracing from different damper setups releasing an object from Amplitude A.",
    categories: ["Lightly Damped", "Critically Damped", "Over-damped"],
    items: [
      { text: "Graph loops repetitively above and below zero, slowly shrinking in height over hours.", category: "Lightly Damped" },
      { text: "Graph rips straight back hitting zero almost instantly, locking flatline without bouncing.", category: "Critically Damped" },
      { text: "Graph groans slowly down toward zero taking minutes to slide flat across the baseline.", category: "Over-damped" }
    ]
  },
  {
    id: "physics-5-32-dnd-5",
    type: "drag_and_drop",
    topic: "Angular Frequency mappings",
    question: "Sort the structural relationships connecting to angular frequency (ω).",
    categories: ["Definitions", "Formulas mapping to ω"],
    items: [
      { text: "Measured strictly in Radians per Second", category: "Definitions" },
      { text: "Scalar translation bridging frequency into circular math", category: "Definitions" },
      { text: "= 2πf", category: "Formulas mapping to ω" },
      { text: "= 2π / T", category: "Formulas mapping to ω" },
      { text: "= √(k/m)", category: "Formulas mapping to ω" }
    ]
  },
  {
    id: "physics-5-32-dnd-6",
    type: "drag_and_drop",
    topic: "Modifying Variables",
    question: "You want a mass-spring system to shake TWICE as fast natively (Frequency x2). Match what action accomplishes or fails this.",
    categories: ["Will Double the Frequency", "Will Halve the Frequency", "Absolutely No Effect"],
    items: [
      { text: "Dividing the hanging Mass block by 4", category: "Will Double the Frequency" }, // sqrt(1/4m) -> bottom -> doubled freq
      { text: "Multiplying the spring rigidity (k) by 4", category: "Will Double the Frequency" },
      { text: "Multiplying the suspended mass by 4", category: "Will Halve the Frequency" },
      { text: "Doubling the initial release distance (Amplitude)", category: "Absolutely No Effect" },
      { text: "Relocating the whole rig to Jupiter", category: "Absolutely No Effect" }
    ]
  },
  {
    id: "physics-5-32-dnd-7",
    type: "drag_and_drop",
    topic: "Acceleration vs Displacement Gradients",
    question: "Match the features of the 'a vs -x' plotted graph.",
    categories: ["Graph Shape", "Gradient meaning", "Intercepts"],
    items: [
      { text: "Perfectly straight uniform line", category: "Graph Shape" },
      { text: "Follows mathematical format y = -mx", category: "Graph Shape" },
      { text: "Numerically equals exactly -ω²", category: "Gradient meaning" },
      { text: "Originates locking directly through coordinates (0,0)", category: "Intercepts" }
    ]
  },
  {
    id: "physics-5-32-dnd-8",
    type: "drag_and_drop",
    topic: "Energy equations in SHM",
    question: "Sort the energetic component polynomials to their role.",
    categories: ["Kinetic Energy (Intermediate)", "Potential Energy (Intermediate)", "Total Mechanical Engine"],
    items: [
      { text: "= ½mω²(A² - x²)", category: "Kinetic Energy (Intermediate)" },
      { text: "= ½v² combined heavily locally", category: "Kinetic Energy (Intermediate)" },
      { text: "= ½mω²x²", category: "Potential Energy (Intermediate)" },
      { text: "= ½kx²", category: "Potential Energy (Intermediate)" },
      { text: "= ½mω²A²", category: "Total Mechanical Engine" },
      { text: "Forms an isolated horizontal constant trace", category: "Total Mechanical Engine" }
    ]
  },
  {
    id: "physics-5-32-dnd-9",
    type: "drag_and_drop",
    topic: "Determining Sine vs Cosine usage",
    question: "Identify which initial starter condition mandates which equation function format for Displacement 'x'.",
    categories: ["Use Sine : x = A sin(ωt)", "Use Cosine : x = A cos(ωt)"],
    items: [
      { text: "The stopwatch begins recording specifically as the bob passes across equilibrium natively", category: "Use Sine : x = A sin(ωt)" },
      { text: "Starts measuring directly at point x = 0", category: "Use Sine : x = A sin(ωt)" },
      { text: "The system runs starting from the moment a hand releases a stretched spring block", category: "Use Cosine : x = A cos(ωt)" },
      { text: "Starts measuring loaded up at exact point x = A", category: "Use Cosine : x = A cos(ωt)" }
    ]
  },
  {
    id: "physics-5-32-dnd-10",
    type: "drag_and_drop",
    topic: "Phase Angle Displacements",
    question: "Map out the exact phase shifts mapping the harmonic waveforms locally.",
    categories: ["Out of Phase by π/2", "Out of Phase by π"],
    items: [
      { text: "Relationship positioning Velocity directly against Displacement", category: "Out of Phase by π/2" },
      { text: "Relationship positioning Acceleration natively tracking against Velocity", category: "Out of Phase by π/2" },
      { text: "Relationship reflecting Acceleration strictly against Displacement", category: "Out of Phase by π" },
      { text: "Antiphase behavior", category: "Out of Phase by π" }
    ]
  },

  // ==========================================
  // SEQUENCE QUESTIONS (8)
  // ==========================================
  {
    id: "physics-5-32-seq-1",
    type: "sequence",
    topic: "Deriving Mass-Spring SHM Formula",
    question: "Order the algebraic procedure tracking how Newton's laws generate the Mass-Spring oscillation Period equation.",
    steps: [
      "Define standard Hooke's Law for spring tension: F = -kx",
      "Substitute Newton's Second Law creating mass parity: ma = -kx",
      "Mathematically isolate acceleration output: a = -(k/m)x",
      "Directly juxtapose and compare this specific format to the generalized defining SHM boundary rule: a = -ω²x",
      "Conclude functionally that ω² equals identically k/m (giving ω = √(k/m))",
      "Substitute the internal frequency variable ω = 2π/T to synthesize final form: T = 2π√(m/k)"
    ]
  },
  {
    id: "physics-5-32-seq-2",
    type: "sequence",
    topic: "Experimental Pendulum Gravity Calculation",
    question: "Chronologically structure the physical lab method for flawlessly pinpointing empirical 'g' off a classroom pendulum.",
    steps: [
      "Rig a weighted pendulum ball attaching it heavily via a rigid clamp acting against a metre ruler",
      "Deliberately disturb the pendulum swinging it via a tightly miniature angle (measuring safely below 15 degrees)",
      "Activate a digital light-gate timing purely 20 collective continuous oscillations to heavily minimize localized reaction-time defects",
      "Square the extracted time Period generating T², and systematically plot these inputs spanning across various measured length (l) ranges",
      "Measure the graphed straight-line positive gradient intercepting strictly out from origin (0,0)",
      "Process the final physical formula isolating gravity mechanics: g = 4π² / mathematical gradient"
    ]
  },
  {
    id: "physics-5-32-seq-3",
    type: "sequence",
    topic: "Graphing the Velocity Waveform",
    question: "Trace the generation of a full cyclic Velocity waveform sequentially starting from a spring released from (+A) stretching point.",
    steps: [
      "At time t=0 natively spanning from max displacement: system holds completely zero velocity (v=0)",
      "Sinking toward a quarter cycle (t=T/4 passing baseline): system rips hitting maximum negative velocity down-traveling (-Aω)",
      "Sliding into the trough (t=T/2 compressing upward max): system physically halts flat against origin again (v=0)",
      "Snapping out from the trough actively jumping up (t=3T/4): system strikes baseline blasting upwards reaching positive maximum velocity (+Aω)"
    ]
  },
  {
    id: "physics-5-32-seq-4",
    type: "sequence",
    topic: "Energy Phase shift timeline",
    question: "Walk through the harmonic energy exchanges sequentially as a pendulum tracks one clean half-oscillation across the board starting dropped from left.",
    steps: [
      "Bob raised up to far left angle release boundary holding literally 100% total systemic Potential Energy storage limit.",
      "Bob sweeps falling gradually converting metric-height storage shedding linearly into Kinetic Energy building forward speed.",
      "Bob shatters crossing exactly dead center equilibrium burning carrying zero Potential Energy, but holding 100% maximum Kinetic momentum.",
      "Bob battles bleeding out momentum driving ascending up the right side converting kinetic heat forcibly transferring deeply back into Potential height metrics.",
      "Bob physically bottoms out hanging frozen far right corner achieving exactly restored 100% original Potential Energy state limits."
    ]
  },

  // ==========================================
  // KEYWORD MATCHING QUESTIONS (5)
  // ==========================================
  {
    id: "physics-5-32-key-1",
    type: "keyword",
    topic: "Conditions for explicit SHM",
    question: "What physical conditions absolutely must be met forcefully for oscillation physics to be legally categorized as true Simple Harmonic Motion?",
    keywords: [
      "acceleration",
      "proportional",
      "displacement",
      "direction",
      "opposite",
      "equilibrium"
    ],
    sampleAnswer: "To formally classify as SHM, a system must natively exhibit an operational acceleration natively strictly proportional heavily explicitly alongside its displacement distance. Simultaneously, this acceleration generation vector must rigidly aim consistently backward facing the opposite direction pointing endlessly directly inward pulling returning to equilibrium position."
  },
  {
    id: "physics-5-32-key-2",
    type: "keyword",
    topic: "Isochronous nature",
    question: "Discuss the mechanics outlining exactly why tweaking the swinging Amplitude of a pendulum actively generates no measurable variance impacting its Period.",
    keywords: [
      "independent",
      "isochronous",
      "distance",
      "restoring force",
      "compensates",
      "time"
    ],
    sampleAnswer: "Possessing an isochronous property indicates period mapping is functionally deeply independent structurally bypassing amplitude modifiers entirely. Bumping amplitude forces the particle to travel significantly further distance mechanically, but it generates an equally massive boosting restoring force internally that massively amplifies velocity, meaning it artificially compensates executing the loop across precisely identical time requirements."
  },
  {
    id: "physics-5-32-key-3",
    type: "keyword",
    topic: "Phasor Diagram utility",
    question: "How do Physicists systematically utilize circular Phasor visuals attempting successfully to physically derive the equations acting mathematically behind SHM?",
    keywords: [
      "projection",
      "circular",
      "motion",
      "diameter",
      "shadow",
      "sine"
    ],
    sampleAnswer: "Tracing specifically a spinning dot performing uniform smooth circular rotational motion, physicists capture actively analyzing projecting its lateral 'shadow' structurally straight across a fixed mathematical diameter bridging. This 2D projection heavily automatically generates naturally oscillating mechanics carving perfectly matched sine curve functions."
  },
  {
    id: "physics-5-32-key-4",
    type: "keyword",
    topic: "Pendulum Angle error",
    question: "Highlight the specific defect compromising calculations if attempting calculating simple pendulums forced heavily pushed swinging extensively beyond 15 degrees.",
    keywords: [
      "approximation",
      "small angle",
      "sine",
      "linear",
      "deviates",
      "proportionality"
    ],
    sampleAnswer: "Derivational formulas heavily anchor relying blindly off the small angle mathematical approximation substituting practically equating strictly rad angles directly masking sin(θ) ≈ θ. Overstepping the 15-degree perimeter severely deviates mathematically forcing breaking losing rigid linear restoring force proportionality inherently destroying exact precision SHM."
  },
  {
    id: "physics-5-32-key-5",
    type: "keyword",
    topic: "Damping differences",
    question: "Distinguish deeply segregating Light and Critical Damping implementations tracking car hardware systems mapping structural results mechanically.",
    keywords: [
      "decay",
      "oscillations",
      "exponentially",
      "critical",
      "minimal",
      "fastest return"
    ],
    sampleAnswer: "Light damping slowly drains mechanics continually permitting repeating bouncing oscillations that simply naturally decay trailing exponentially spanning heavy time sinks. Critical damping manipulates resistance mathematically clamping generating the absolute mathematically fastest return timeline back toward flatline neutralizing the vehicle flawlessly missing zero trailing bouncy oscillations completely."
  },

  // ==========================================
  // FLASHCARDS (10)
  // ==========================================
  {
    id: "physics-5-32-fc-1",
    type: "flashcard",
    topic: "Defining equation limit",
    front: "What serves as the absolute defining mathematical function encapsulating Simple Harmonic Motion globally?",
    back: "a = -ω²x"
  },
  {
    id: "physics-5-32-fc-2",
    type: "flashcard",
    topic: "Graph traits",
    front: "If manually drawing out an Acceleration vs Displacement plotting graph, what exact shape materializes prominently?",
    back: "A purely straight rigid diagonal sequence piercing forcefully navigating tracking deeply through origin (0,0) bearing a notably steep negative dropping gradient mirroring -ω²."
  },
  {
    id: "physics-5-32-fc-3",
    type: "flashcard",
    topic: "Velocity derivation",
    front: "How do you swiftly calculate manually mapping maximum possible velocity (v_max) structurally utilizing angular variables natively?",
    back: "v_max = ωA (taking angular frequency explicitly multiplying out absolute amplitude stretch limiting factors)."
  },
  {
    id: "physics-5-32-fc-4",
    type: "flashcard",
    topic: "Energy bounds",
    front: "When analyzing positional states explicitly, exactly precisely where does the system completely empty its internal Kinetic Energy bounds dropping reading definitively 0 Joules locally?",
    back: "Reaching the absolute furthest mathematical stretching point designated identically natively reading hitting extreme turning Amplitude crests (x = +A and functionally x = -A)."
  },
  {
    id: "physics-5-32-fc-5",
    type: "flashcard",
    topic: "Phase shifts",
    front: "Quantify identifying precisely evaluating mapping out the exact numerical phase differential disconnecting functionally spacing Acceleration waveforms tracking identically against Displacement matrices constantly.",
    back: "Technically measuring strictly completely 180 Degrees specifically out forming deeply functional pi (π) radians strictly pushing acting totally creating continuous unyielding structural antiphase boundaries."
  },
  {
    id: "physics-5-32-fc-6",
    type: "flashcard",
    topic: "Mass-spring formula",
    front: "Write calculating establishing isolating cleanly setting up structurally rendering calculating exactly parsing setting standard identifying Mass-Spring cyclical Time Period limits formally.",
    back: "T = 2π√(m/k)"
  },
  {
    id: "physics-5-32-fc-7",
    type: "flashcard",
    topic: "Pendulum Formula",
    front: "Write isolating structuring the standard cyclical parsing boundary equation generating limits defining Pendulum Time Period tracking limits structurally.",
    back: "T = 2π√(l/g)"
  },
  {
    id: "physics-5-32-fc-8",
    type: "flashcard",
    topic: "Total Energy formula",
    front: "Detail structuring isolating determining formulating creating producing exactly outlining tracking expressing formatting structuring Total Mechanical Systemic continuous Energy constant mapping formally.",
    back: "Total Energy = ½mω²A²"
  },
  {
    id: "physics-5-32-fc-9",
    type: "flashcard",
    topic: "Instant velocity extraction",
    front: "What specific geometric elliptical mapping formula natively outputs instantaneously reading explicit arbitrary velocity plotting matching exactly tracing specifically identifying any random given displacement tracker (x) location continuously?",
    back: "v = ±ω√(A² - x²)"
  },
  {
    id: "physics-5-32-fc-10",
    type: "flashcard",
    topic: "Damping classifications limits",
    front: "What designates delineating separating accurately identifying naming precisely labeling identifying explicitly characterizing specifically classifying describing determining tracking naming defining heavy shock dampers successfully completely halting movement immediately lacking completely registering explicitly creating producing any repetitive bouncy looping traces structurally?",
    back: "Functioning officially executing explicitly creating tracking designating structural Critical Damping."
  }
];
