export const exercises_physics_5_31 = [
  // ==========================================
  // MULTIPLE CHOICE QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-31-mcq-1",
    type: "mcq",
    topic: "Gravitational Fields (Radial vs Uniform)",
    question: "Which of the following best describes the gravitational field lines close to the surface of the Earth?",
    options: [
      "They radiate outwards from the surface into space.",
      "They are parallel and equally spaced, indicating a uniform field.",
      "They spread out in a diverging pattern, indicating a weakening field.",
      "They loop back onto the surface like a magnetic dipole."
    ],
    answer: "They are parallel and equally spaced, indicating a uniform field.",
    explanation: "At large distances, the field is radial. However, very close to the surface of a massive body like Earth, the curvature is negligible, so the field lines are parallel, equally spaced, and point straight down. This denotes a uniform field where g ≈ 9.81 N/kg."
  },
  {
    id: "physics-5-31-mcq-2",
    type: "mcq",
    topic: "Inverse Square Law",
    question: "A spacecraft moves from a distance r from the centre of a planet to a distance 3r. How does the magnitude of the gravitational force it experiences change?",
    options: [
      "It decreases by a factor of 3",
      "It decreases by a factor of 6",
      "It decreases by a factor of 9",
      "It remains the same"
    ],
    answer: "It decreases by a factor of 9",
    explanation: "Newton's Law of Universal Gravitation follows an inverse-square law (F ∝ 1/r²). Therefore, if the distance triples, the force goes down by a factor of 3², which is 9."
  },
  {
    id: "physics-5-31-mcq-3",
    type: "mcq",
    topic: "Big G and Little g",
    question: "What is the key difference between G (Universal Gravitational Constant) and g (gravitational field strength)?",
    options: [
      "G varies depending on the planet you are on, while g is identical everywhere.",
      "G determines gravitational potential, while g determines gravitational force.",
      "g is a universal constant (6.67 × 10⁻¹¹), while G varies depending on the mass of the object.",
      "G is a constant throughout the universe, whereas g varies depending on the mass of the central body and the distance from it."
    ],
    answer: "G is a constant throughout the universe, whereas g varies depending on the mass of the central body and the distance from it.",
    explanation: "G = 6.67 × 10⁻¹¹ N m² kg⁻² is a universal constant. 'Little g' equals GM/r² and changes depending on your location, altitude, and which planet you orbit."
  },
  {
    id: "physics-5-31-mcq-4",
    type: "mcq",
    topic: "Gravitational Potential",
    question: "Why is gravitational potential ALWAYS defined as a negative value?",
    options: [
      "Because gravitational fields always point downwards on Earth.",
      "Because gravity is strictly an attractive force, so work must be done against it to move a mass to infinity (where V=0).",
      "Because gravitational fields behave oppositely to electric fields.",
      "Because standard scientific convention requires potentials to be negative numbers arbitrarily."
    ],
    answer: "Because gravity is strictly an attractive force, so work must be done against it to move a mass to infinity (where V=0).",
    explanation: "Infinity is set as the zero-reference for potential. Since gravity only attacks (pulls objects in), external work is required to push a mass 'up' to infinity. Therefore, any closer position must have less potential than zero, meaning negative values."
  },
  {
    id: "physics-5-31-mcq-5",
    type: "mcq",
    topic: "Inside the Earth",
    question: "Assuming Earth has a uniform density, what happens to the gravitational field strength (g) as you travel from the Earth's centre to its surface?",
    options: [
      "It remains constant at 9.81 N/kg.",
      "It decreases inversely proportional to r².",
      "It increases linearly, proportional to r.",
      "It increases exponentially."
    ],
    answer: "It increases linearly, proportional to r.",
    explanation: "Inside a uniform body, the mass 'beneath' you pulls you inward, while the mass 'above' you cancels out. The field strength rises linearly from 0 at the center (r=0) up to a maximum at the surface."
  },
  {
    id: "physics-5-31-mcq-6",
    type: "mcq",
    topic: "Comparison of Fields",
    question: "What is a fundamental difference between gravitational and electrostatic force fields?",
    options: [
      "Only electrostatic fields follow the inverse square law.",
      "Only gravitational fields possess equipotential surfaces.",
      "Gravitational forces are purely attractive, while electrostatic forces can be attractive or repulsive.",
      "Electrostatic force relies on mass, while gravity relies on charge."
    ],
    answer: "Gravitational forces are purely attractive, while electrostatic forces can be attractive or repulsive.",
    explanation: "Both fields follow a 1/r² law, have equipotential lines, and have potentials following 1/r. The main difference is gravity acts on strictly positive mass (attractive only), whereas electrostatics acts on ± charge."
  },
  {
    id: "physics-5-31-mcq-7",
    type: "mcq",
    topic: "Field Lines & Equipotentials",
    question: "What is the relationship between gravitational field lines and equipotential surfaces?",
    options: [
      "They are parallel to each other at all points.",
      "They are completely independent concepts that do not mechanically interact.",
      "They always intersect exactly at right angles (perpendicular).",
      "They curve in opposite directions."
    ],
    answer: "They always intersect exactly at right angles (perpendicular).",
    explanation: "By definition, an equipotential surface requires zero work to traverse. Moving exactly perpendicular to the field lines satisfies this, as no force component acts along the path."
  },
  {
    id: "physics-5-31-mcq-8",
    type: "mcq",
    topic: "Strength of Gravity vs Electric",
    question: "At subatomic scales (e.g., between two protons), approximately how many times stronger is the electrostatic force compared to the gravitational force?",
    options: [
      "They are roughly equal.",
      "Electricity is roughly 1,000 times stronger.",
      "Gravity is roughly 10³⁶ times stronger.",
      "Electricity is roughly 10³⁶ times stronger."
    ],
    answer: "Electricity is roughly 10³⁶ times stronger.",
    explanation: "Because G is extremely small compared to Coulomb's Constant k, and proton mass is tiny compared to elementary charge, the electrostatic repulsion between two protons exceeds gravitational attraction by a factor of ~10³⁶."
  },
  {
    id: "physics-5-31-mcq-9",
    type: "mcq",
    topic: "Calculating Work Done",
    question: "If the gravitational potential at point A is -60 MJ/kg and at point B is -40 MJ/kg, how much work is required to move a 2 kg satellite from A to B?",
    options: [
      "40 MJ",
      "-40 MJ",
      "-20 MJ",
      "100 MJ"
    ],
    answer: "40 MJ",
    explanation: "Work Done W = mΔV. Here, ΔV = V_final - V_initial = -40 - (-60) = +20 MJ/kg. Since the mass is 2 kg, the total work done is 2 kg * 20 MJ/kg = 40 MJ."
  },
  {
    id: "physics-5-31-mcq-10",
    type: "mcq",
    topic: "Orbital Speed Formula",
    question: "Which expression correctly defines the orbital speed 'v' of a satellite moving in a circular orbit of radius 'r' around a planet of mass 'M'?",
    options: [
      "v = GM/r²",
      "v = √(GM/r)",
      "v = √(2GM/r)",
      "v = GM/r"
    ],
    answer: "v = √(GM/r)",
    explanation: "Equating gravitational force to centripetal force: GMm/r² = mv²/r. Rearranging for v yields v = √(GM/r). Note: √(2GM/r) is the formula for escape velocity."
  },
  {
    id: "physics-5-31-mcq-11",
    type: "mcq",
    topic: "Escape Velocity",
    question: "The formula for escape velocity is v₀ = √(2GM/R). Does the required escape velocity depend on the mass of the rocket taking off?",
    options: [
      "Yes, heavier rockets require a much higher escape velocity.",
      "Yes, heavier rockets require a much lower escape velocity to penetrate the atmosphere.",
      "No, the escape velocity depends exclusively on the mass of the planet and the starting radius.",
      "No, it depends solely on the altitude, ignoring planetary mass."
    ],
    answer: "No, the escape velocity depends exclusively on the mass of the planet and the starting radius.",
    explanation: "Because the mass 'm' of the object cancels out when equating Kinetic Energy (1/2 mv²) to Gravitational Potential Energy (GMm/R), the escape speed is independent of the rocket's mass."
  },
  {
    id: "physics-5-31-mcq-12",
    type: "mcq",
    topic: "Altitude vs Radius error",
    question: "A test asks for the field strength 400 km above Earth's surface. What is the most common mistake made in calculations?",
    options: [
      "Using kilometres instead of metres.",
      "Forgetting to square the mass of the Earth.",
      "Using the altitude 'h' as the radius 'r', instead of adding it to the Earth's native radius.",
      "Multiplying by the mass of the satellite instead of dividing by it."
    ],
    answer: "Using the altitude 'h' as the radius 'r', instead of adding it to the Earth's native radius.",
    explanation: "Newton's laws measure distance purely centre-to-centre. You must always add the planet's radius (R) to the surface altitude (h) to obtain the true r."
  },
  {
    id: "physics-5-31-mcq-13",
    type: "mcq",
    topic: "Gradient of Potential Graph",
    question: "If you plot a graph of Gravitational Potential (V) against distance (r), what does the negative gradient (-dV/dr) of the curve represent?",
    options: [
      "The gravitational potential energy",
      "The mass of the central planet",
      "The gravitational field strength (g)",
      "The orbital velocity"
    ],
    answer: "The gravitational field strength (g)",
    explanation: "The rate of change of potential with respect to distance is equal to the gravitational field strength in the opposite direction: g = -dV/dr."
  },
  {
    id: "physics-5-31-mcq-14",
    type: "mcq",
    topic: "Units of Field Strength",
    question: " Gravitational field strength 'g' is typically measured in N kg⁻¹. What is the equivalent SI base unit string for this quantity?",
    options: [
      "m s⁻¹",
      "m s⁻²",
      "kg m s⁻²",
      "J kg⁻¹"
    ],
    answer: "m s⁻²",
    explanation: "Because F = ma, 1 Newton = 1 kg m s⁻². Therefore, N/kg = (kg m s⁻²) / kg = m s⁻². This proves that gravitational field strength is dimensionally identical to acceleration."
  },
  {
    id: "physics-5-31-mcq-15",
    type: "mcq",
    topic: "Comparing fields at large scales",
    question: "Why does the gravitational force dictate orbital mechanics and cosmic structures, even though the electrostatic force is ~10³⁶ times stronger?",
    options: [
      "Because gravitational fields spread out faster than electric fields in outer space.",
      "Because electric fields are blocked by dark matter.",
      "Because large cosmic bodies are generally electrically neutral, so vast amounts of positive mass add up while electric charges cancel out.",
      "Because the universal gravitational constant G becomes larger when separated by lightyears."
    ],
    answer: "Because large cosmic bodies are generally electrically neutral, so vast amounts of positive mass add up while electric charges cancel out.",
    explanation: "Atoms have equal numbers of protons and electrons, cancelling electrostatic forces at macroscopic scales. Mass, however, has no negative counterpart, so the gravitational pull cumulatively stacks up to enormous values."
  },

  // ==========================================
  // FILL-IN-THE-BLANK QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-31-fitb-1",
    type: "fill_in_the_blank",
    topic: "Gravitational Field Definition",
    question: "A gravitational field is defined as a region of space where any object with [BLANK] experiences an attractive force.",
    answer: "mass",
    hints: ["M-word", "The physical property that gravity acts upon"],
    explanation: "Only mass generates and feels gravitational fields, distinguishing it from electric fields which act on charge."
  },
  {
    id: "physics-5-31-fitb-2",
    type: "fill_in_the_blank",
    topic: "Radial vs Uniform",
    question: "While the gravitational field stretching into space is described as [BLANK], pointing exactly toward the central mass, the field near Earth's surface is approximated as uniform.",
    answer: "radial",
    hints: ["Like spokes on a wheel", "Radiating outward/inward"],
    explanation: "A radial field describes field lines that diverge outward from or converge directly inward to a central spherical mass."
  },
  {
    id: "physics-5-31-fitb-3",
    type: "fill_in_the_blank",
    topic: "Gravity as Inverse Square",
    question: "Newton's Law of Universal Gravitation is notoriously an [BLANK]-square law, meaning F scales proportionally to 1/r².",
    answer: "inverse",
    hints: ["Upside down", "Opposite structure"],
    explanation: "As distance increases, the force decreases exponentially depending on the square of the distance."
  },
  {
    id: "physics-5-31-fitb-4",
    type: "fill_in_the_blank",
    topic: "Zero reference of potential",
    question: "By pure convention, physicists define gravitational potential to be exactly zero at an [BLANK] distance from the mass.",
    answer: "infinite",
    hints: ["Never-ending", "Infinity"],
    explanation: "Because gravitational attraction fades with distance but technically extends forever, it only reaches a true mathematical zero at infinity."
  },
  {
    id: "physics-5-31-fitb-5",
    type: "fill_in_the_blank",
    topic: "Sign of Potential",
    question: "Because mass naturally pulls inward, work must be supplied to move mass outward. Consequently, gravitational potential everywhere is inherently [BLANK].",
    answer: "negative",
    hints: ["Below zero", "-ve"],
    explanation: "You must put energy into the system to escape gravity, bringing the potential slowly 'up' from a negative well to 0 at infinity."
  },
  {
    id: "physics-5-31-fitb-6",
    type: "fill_in_the_blank",
    topic: "Equipotential Surfaces",
    question: "Visualizing a gravitational field reveals that equipotential surfaces are always perfectly [BLANK] to the gravitational field lines.",
    answer: "perpendicular",
    hints: ["Intersecting at 90 degrees", "Normal / Orthogonal"],
    explanation: "Moving along an equipotential surface requires zero work, meaning you cannot act natively against or with the field lines."
  },
  {
    id: "physics-5-31-fitb-7",
    type: "fill_in_the_blank",
    topic: "Field strength graph",
    question: "Inside the Earth (assuming uniform density), the graph of gravitational field strength against distance 'r' produces a straight line because inside, g is [BLANK] to r.",
    answer: "proportional",
    hints: ["Linear mapping", "Directly..."],
    explanation: "Inside the planet, g ∝ r. It hits maximum at the crust (R), and then falls off via the 1/r² inverse square curve into space."
  },
  {
    id: "physics-5-31-fitb-8",
    type: "fill_in_the_blank",
    topic: "Electric Field Analogy",
    question: "Electrostatics operate through a formula known as [BLANK]'s Law, which mirrors Newton's Law of Gravitation almost perfectly in its 1/r² layout.",
    answer: "Coulomb",
    hints: ["F = kQq/r²", "Named after a French scientist"],
    explanation: "Coulomb recognized that the electrostatic force scales almost identically to gravity but using charge instead of mass."
  },
  {
    id: "physics-5-31-fitb-9",
    type: "fill_in_the_blank",
    topic: "Duality of Fields",
    question: "While gravitational fields are exclusively attractive, electrostatic force fields can be either attractive or [BLANK] depending on the signs of interacting charges.",
    answer: "repulsive",
    hints: ["Pushing away", "Likes repel"],
    explanation: "Mass has no 'negative' counterpart, prohibiting gravitational repulsion; however, opposite charges attract and like charges repel."
  },
  {
    id: "physics-5-31-fitb-10",
    type: "fill_in_the_blank",
    topic: "Radius mistake correction",
    question: "When deriving gravitational relationships for satellites, r universally represents the distance separating the absolute [BLANK] of the two massive bodies.",
    answer: "centres",
    hints: ["Middle point", "Center of mass"],
    explanation: "Students often mistakenly use the gap between planetary surfaces. The math strictly binds to the geometric center-point of the planet."
  },
  {
    id: "physics-5-31-fitb-11",
    type: "fill_in_the_blank",
    topic: "Orbital Speed Definition",
    question: "To calculate the speed of a satellite in orbit, one equates the gravitational formula to the equation for [BLANK] force: F = mv²/r.",
    answer: "centripetal",
    hints: ["Inward pointing force", "Keeps objects in circular motion"],
    explanation: "Gravity is the mechanism providing the essential centripetal inward tug that prevents a satellite flying off in a straight tangent."
  },
  {
    id: "physics-5-31-fitb-12",
    type: "fill_in_the_blank",
    topic: "Escape Velocity mechanics",
    question: "The launch speed theoretically required to fully escape a planet's gravity well without further thrust is dubbed the [BLANK] velocity.",
    answer: "escape",
    hints: ["Getting away", "v₀"],
    explanation: "It represents the kinetic energy strictly needed to match the planet's gravitational binding potential energy (1/2 mv² = GMm/R)."
  },
  {
    id: "physics-5-31-fitb-13",
    type: "fill_in_the_blank",
    topic: "Potential Difference link to Work",
    question: "Work Done in shifting a mass between two orbits equals the mass (m) multiplied by the gravitational [BLANK] difference (ΔV).",
    answer: "potential",
    hints: ["Voltage equivalent", "V_final - V_initial"],
    explanation: "Just as W = qΔV in electric fields, W = mΔV connects energy transfers inside gravitational fields."
  },
  {
    id: "physics-5-31-fitb-14",
    type: "fill_in_the_blank",
    topic: "Calculus Link",
    question: "Mathematically, the local gravitational field strength, g, is equal to the negative [BLANK] of the gravitational potential against distance (g = -dV/dr).",
    answer: "gradient",
    hints: ["Slope on a graph", "Derivative"],
    explanation: "This means steep 'slopes' of potential create massive forces, while flat plateaus of potential feature nearly zero gravity."
  },
  {
    id: "physics-5-31-fitb-15",
    type: "fill_in_the_blank",
    topic: "Comparing Constants",
    question: "Universal Gravitational Constant (G) is an incredibly small number (~10⁻¹¹), whereas Coulomb's Constant (k) is enormously [BLANK] (~10⁹).",
    answer: "large",
    hints: ["Huge", "Big"],
    explanation: "These extreme opposite scales explain why gravity feels so weak on an atomic microscopic basis compared to the dominant electrical repulsion/attraction."
  },

  // ==========================================
  // DRAG AND DROP QUESTIONS (15)
  // ==========================================
  {
    id: "physics-5-31-dnd-1",
    type: "drag_and_drop",
    topic: "Defining Equations",
    question: "Sort the appropriate algebraic formula to its target concept.",
    categories: ["F (Grav. Force)", "g (Field Strength)", "V_g (Potential)"],
    items: [
      { text: "= GMm / r²", category: "F (Grav. Force)" },
      { text: "= GM / r²", category: "g (Field Strength)" },
      { text: "= -GM / r", category: "V_g (Potential)" }
    ]
  },
  {
    id: "physics-5-31-dnd-2",
    type: "drag_and_drop",
    topic: "Electrostatic Equivalents",
    question: "Match the Electric version of the equation to its counterpart.",
    categories: ["F_e (Electric Force)", "E (Electric Field)", "V_e (Electric Potential)"],
    items: [
      { text: "= kQq / r²", category: "F_e (Electric Force)" },
      { text: "= kQ / r²", category: "E (Electric Field)" },
      { text: "= kQ / r", category: "V_e (Electric Potential)" }
    ]
  },
  {
    id: "physics-5-31-dnd-3",
    type: "drag_and_drop",
    topic: "Graphs of 'g' internally and externally",
    question: "If observing the graph of Field Strength (g) vs distance (r) from the core of a uniform planet:",
    categories: ["Inside the planet (r < R)", "At the surface (r = R)", "Outside the planet (r > R)"],
    items: [
      { text: "Linear straight line increasing from 0", category: "Inside the planet (r < R)" },
      { text: "g ∝ r", category: "Inside the planet (r < R)" },
      { text: "Maximum possible g value", category: "At the surface (r = R)" },
      { text: "Follows an inverse-square curve downwards", category: "Outside the planet (r > R)" },
      { text: "g ∝ 1/r²", category: "Outside the planet (r > R)" }
    ]
  },
  {
    id: "physics-5-31-dnd-4",
    type: "drag_and_drop",
    topic: "Comparing Forces",
    question: "Highlight the differences between gravitational force and electrostatic force grids.",
    categories: ["Gravitational", "Electrostatic", "Both"],
    items: [
      { text: "Source is Mass", category: "Gravitational" },
      { text: "Source is Charge", category: "Electrostatic" },
      { text: "Force scales via 1/r²", category: "Both" },
      { text: "Operates purely attractively", category: "Gravitational" },
      { text: "Can exhibit repulsion", category: "Electrostatic" },
      { text: "Uses principle of infinite zero reference", category: "Both" }
    ]
  },
  {
    id: "physics-5-31-dnd-5",
    type: "drag_and_drop",
    topic: "Signage conventions",
    question: "Do these definitions natively spit out Positive or Negative mathematics overall?",
    categories: ["Always Negative", "Positive or Negative depending on Source"],
    items: [
      { text: "Gravitational Potential V_g", category: "Always Negative" },
      { text: "Work done moving an orbit higher up", category: "Positive or Negative depending on Source" }, // +ve work to lift, could be anything for electric
      { text: "Electric Potential V_e around an electron", category: "Always Negative" },
      { text: "Electric Potential V_e around a bare proton", category: "Positive or Negative depending on Source" } // Actually, proton is always positive. Let's adjust to V_e general.
    ]
  },
  {
    id: "physics-5-31-dnd-6",
    type: "drag_and_drop",
    topic: "Orbital Mechanics",
    question: "Identify the formula linked to the orbital velocity state.",
    categories: ["Orbital Speed (v)", "Escape Velocity (v₀)"],
    items: [
      { text: "= √(GM/r)", category: "Orbital Speed (v)" },
      { text: "Equates Centripetal Force to Gravitational Force", category: "Orbital Speed (v)" },
      { text: "= √(2GM/R)", category: "Escape Velocity (v₀)" },
      { text: "Equates zero Kinetic Energy limit at infinite potential", category: "Escape Velocity (v₀)" }
    ]
  },
  {
    id: "physics-5-31-dnd-7",
    type: "drag_and_drop",
    topic: "Definitions of Constants",
    question: "Sort out Big G vs little g.",
    categories: ["Gravitational Constant (G)", "Gravitational Field Strength (g)"],
    items: [
      { text: "Value is roughly 9.81 on Earth", category: "Gravitational Field Strength (g)" },
      { text: "Measures force per unit mass (N/kg)", category: "Gravitational Field Strength (g)" },
      { text: "Value is exactly 6.67 × 10⁻¹¹ everywhere", category: "Gravitational Constant (G)" },
      { text: "Determined empirically by Henry Cavendish", category: "Gravitational Constant (G)" },
      { text: "Drops drastically at the orbit of the Moon", category: "Gravitational Field Strength (g)" }
    ]
  },
  {
    id: "physics-5-31-dnd-8",
    type: "drag_and_drop",
    topic: "Field Lines vs Equipotentials",
    question: "Categorize the mechanical traits to lines or surfaces.",
    categories: ["Field Lines", "Equipotential Surfaces"],
    items: [
      { text: "Feature directional arrows", category: "Field Lines" },
      { text: "Represent the acceleration vector for a test mass", category: "Field Lines" },
      { text: "Show regions where ΔV = 0", category: "Equipotential Surfaces" },
      { text: "Must intersect at exactly 90 degrees to forces", category: "Equipotential Surfaces" },
      { text: "Draw as concentric spheres around a point mass", category: "Equipotential Surfaces" }
    ]
  },
  {
    id: "physics-5-31-dnd-9",
    type: "drag_and_drop",
    topic: "Impact of Distance changes",
    question: "If the radius scale 'r' triples (3r)...",
    categories: ["Decreases to 1/3 (thirded)", "Decreases to 1/9 (ninth)"],
    items: [
      { text: "Gravitational force F", category: "Decreases to 1/9 (ninth)" },
      { text: "Gravitational field strength g", category: "Decreases to 1/9 (ninth)" },
      { text: "Magnitude of Gravitational Potential |V|", category: "Decreases to 1/3 (thirded)" }
    ]
  },
  {
    id: "physics-5-31-dnd-10",
    type: "drag_and_drop",
    topic: "Identifying Uniform vs Radial",
    question: "Identify the situation mapped out by the physics.",
    categories: ["Uniform Field", "Radial Field"],
    items: [
      { text: "Lines are perfectly parallel and evenly spaced", category: "Uniform Field" },
      { text: "Found on extremely localized scales, like an apple falling on Earth", category: "Uniform Field" },
      { text: "Lines converge tightly onto a centre point", category: "Radial Field" },
      { text: "Found wrapping entirely around moons and stars", category: "Radial Field" },
      { text: "Equation g = GM/r² governs its behavior outwards", category: "Radial Field" }
    ]
  },
  {
    id: "physics-5-31-dnd-11",
    type: "drag_and_drop",
    topic: "Potential V_g curve layout",
    question: "Recognize the markers of the V_g curve plotted against distance.",
    categories: ["Surface of Planet", "Low Orbit", "Mathematical Infinity"],
    items: [
      { text: "The lowest potential (Most deeply negative)", category: "Surface of Planet" },
      { text: "V_g approaches absolute zero exactly", category: "Mathematical Infinity" },
      { text: "Potential is negative but raising slightly", category: "Low Orbit" }
    ]
  },
  {
    id: "physics-5-31-dnd-12",
    type: "drag_and_drop",
    topic: "SI Unit Checks",
    question: "Map the exact SI components to the symbol.",
    categories: ["m s⁻²", "N m² kg⁻²", "J kg⁻¹"],
    items: [
      { text: "g", category: "m s⁻²" },
      { text: "G", category: "N m² kg⁻²" },
      { text: "V_g", category: "J kg⁻¹" }
    ]
  },
  {
    id: "physics-5-31-dnd-13",
    type: "drag_and_drop",
    topic: "Derivation building blocks",
    question: "Which basic Newtonian laws construct the circular satellite orbit equation?",
    categories: ["Right side (Centripetal)", "Left side (Gravitational)"],
    items: [
      { text: "mv²/r", category: "Right side (Centripetal)" },
      { text: "Originates from Newton's 2nd Law for objects moving in circles", category: "Right side (Centripetal)" },
      { text: "GMm/r²", category: "Left side (Gravitational)" },
      { text: "Originates from Universal Law of Gravitation", category: "Left side (Gravitational)" }
    ]
  },
  {
    id: "physics-5-31-dnd-14",
    type: "drag_and_drop",
    topic: "Force ratio facts",
    question: "Why does Gravity win the universe scale battle despite being structurally weak?",
    categories: ["Electric Force flaw", "Gravitational superiority"],
    items: [
      { text: "Universe is generally neutral overall", category: "Electric Force flaw" },
      { text: "Repulsive '+' clashes aggressively with attractive '-' rendering net zero", category: "Electric Force flaw" },
      { text: "No such thing as negative mass currently known", category: "Gravitational superiority" },
      { text: "Purely cumulative: The bigger the planet, the bigger the pull endlessly", category: "Gravitational superiority" }
    ]
  },
  {
    id: "physics-5-31-dnd-15",
    type: "drag_and_drop",
    topic: "Field direction",
    question: "Select the specific geometric direction of the field lines.",
    categories: ["Points Radially Inwards", "Points Radially Outwards"],
    items: [
      { text: "Gravitational field pulling towards a Star", category: "Points Radially Inwards" },
      { text: "Electric field pushing off a solitary Proton (+Q)", category: "Points Radially Outwards" },
      { text: "Electric field pulling towards an single Electron (-Q)", category: "Points Radially Inwards" }
    ]
  },

  // ==========================================
  // SEQUENCE QUESTIONS (8)
  // ==========================================
  {
    id: "physics-5-31-seq-1",
    type: "sequence",
    topic: "Deriving Orbital Speed",
    question: "Order the algebraic steps required to derive the formula for a satellite's circular orbital velocity (v).",
    steps: [
      "State Newton's Law of gravitation: F = GMm/r²",
      "State the required centripetal force for an orbit: F = mv²/r",
      "Equate the two forces together: GMm/r² = mv²/r",
      "Cancel the lower-case test mass 'm' and one 'r' on the denominator from both sides",
      "Observe the final equation v² = GM/r",
      "Square root both sides to achieve final form: v = √(GM/r)"
    ]
  },
  {
    id: "physics-5-31-seq-2",
    type: "sequence",
    topic: "Deriving Escape Velocity",
    question: "Order the steps showing how escape velocity v₀ is calculated using energy tracking.",
    steps: [
      "A rocket on the surface resting at radius R holds a deeply negative gravitational potential energy: E_p = -GMm/R",
      "To barely reach infinity (where total energy = 0), the rocket must be supplied with positive Kinetic Energy E_k = 1/2 mv₀²",
      "Establish the balance equation: 1/2 mv₀² - GMm/R = 0",
      "Rearrange to solve for the square of the launch string: v₀² = 2GM/R",
      "Square root to obtain the theoretical minimum required rocket speed: v₀ = √(2GM/R)"
    ]
  },
  {
    id: "physics-5-31-seq-3",
    type: "sequence",
    topic: "Gravitational Potential graphing trace",
    question: "Trace the value of Gravitational Potential (V_g) for a meteorite as it approaches Earth from deep space.",
    steps: [
      "Meteorite is billions of lightyears away, where V_g sits asymptomatically at mathematical maximum: 0 J/kg",
      "Meteorite approaches moon orbit; V_g falls slowly into negative values (-1 Mj/kg)",
      "Meteorite enters high atmosphere; V_g falls sharply following the -1/r plunging curve (-50 Mj/kg)",
      "Meteorite violently crashes into the surface, reaching the most massive negative potential possible (-62.5 Mj/kg)"
    ]
  },
  {
    id: "physics-5-31-seq-4",
    type: "sequence",
    topic: "Relative field drops",
    question: "Rank the values for gravitational field strength (g) generated by Earth from the Highest N/kg to the Weakest N/kg.",
    steps: [
      "Standing right at sea-level (r = 6371 km)",
      "An aeroplane cruising altitude",
      "The International Space Station (altitude 400km)",
      "A geostationary communications satellite (altitude ~36,000 km)",
      "The Moon's orbit trajectory"
    ]
  },
  {
    id: "physics-5-31-seq-5",
    type: "sequence",
    topic: "Comparing Relative Strength mathematically",
    question: "Order the algebraic sequence isolating the staggering 10³⁶ ratio separating Electric and Gravitational forcing between two protons.",
    steps: [
      "Map out the gravitational force F_g = G(m)²/r² using the proton mass",
      "Map out the electric force F_e = k(q)²/r² using the fundamental elementary charge",
      "Create a ratio division F_e / F_g",
      "Cross-cancel the arbitrary distance squared (r²) entirely from both formulas",
      "Substitute constants (G, k, m_p, e) to calculate the immense ~1.2 × 10³⁶ numerical output"
    ]
  },
  {
    id: "physics-5-31-seq-6",
    type: "sequence",
    topic: "Graphing g interiorly vs exteriorly",
    question: "Trace the curve of a 'g vs r' graph starting precisely from the core of the Earth acting outwards to deep space.",
    steps: [
      "At exactly r = 0, g is 0 N/kg due to canceling masses in all directions",
      "Moving through the mantle, g scales perfectly linearly upwards producing a straight positive gradient (g ∝ r)",
      "Piercing the Earths Crust, the graph peaks, hitting the surface maximum of g ~ 9.81 N/kg",
      "Travelling into open orbit, g falls off smoothly in an inverse square hyperbolic curve (g ∝ 1/r²)"
    ]
  },
  {
    id: "physics-5-31-seq-7",
    type: "sequence",
    topic: "Using the Work Done formula",
    question: "How do you correctly compute the work required to shift a 500kg probe from one orbit to a higher orbit?",
    steps: [
      "Find the radius r₁ for the initial orbit and r₂ for the final target orbit using planet centre coords",
      "Compute initial potential V₁ = -GM/r₁ and final V₂ = -GM/r₂",
      "Find the strict difference between them ΔV = V₂ - V₁ (Outputting a positive J/kg value)",
      "Multiply ΔV by the 500kg mass of the probe to yield final Energy input required in Joules"
    ]
  },
  {
    id: "physics-5-31-seq-8",
    type: "sequence",
    topic: "Equipotential visualization",
    question: "Imagine traveling outward through a gravitational field by flying completely across consecutive Equipotential Spheres.",
    steps: [
      "The tightest, most deeply negative spheres circle the planetary crust tightly packed together",
      "As you fly radially outward, the local field strength 'g' gets noticeably weaker",
      "Since g = -dV/dr, the physical gap to achieve identical ΔV jumps artificially expands",
      "The equipotential sphere rings space out further and wider into the void",
      "At extreme distances, you cross spheres boasting extremely light negative decimals trending to zero."
    ]
  },

  // ==========================================
  // KEYWORD MATCHING QUESTIONS (5)
  // ==========================================
  {
    id: "physics-5-31-key-1",
    type: "keyword",
    topic: "Potentials definition",
    question: "How is 'Gravitational Potential' precisely defined, and why must its sign explicitly remain negative?",
    keywords: [
      "work done",
      "infinity",
      "unit mass",
      "attractive",
      "against gravity",
      "zero"
    ],
    sampleAnswer: "Gravitational potential is defined as the work done per unit mass in bringing a test mass from infinity to a defined point. Because infinity is utilized as the zero reference, and gravity is a strictly attractive force meaning work is actually done against gravity when escaping, all potentials sitting below infinity must technically be negative."
  },
  {
    id: "physics-5-31-key-2",
    type: "keyword",
    topic: "Uniform vs Radial distinction",
    question: "Discuss the transition difference between charting the Earth's field on a localized human scale versus a planetary macro scale.",
    keywords: [
      "parallel",
      "uniform",
      "constant",
      "diverge",
      "radial",
      "centre"
    ],
    sampleAnswer: "On a localized scale near the surface, field lines point straight downwards parallel to one another natively, forming a uniform field where acceleration remains constant (9.81 m/s²). On a planetary scale spanning into space, lines diverge widely into a radial structure curving explicitly back towards the planet's geometric centre."
  },
  {
    id: "physics-5-31-key-3",
    type: "keyword",
    topic: "Comparison scaling",
    question: "Although electrical interactions output magnitudes 10³⁶ stronger than gravitation between individual particles, why doesn't electric force rule orbital galaxies?",
    keywords: [
      "macroscopic",
      "neutral",
      "balance",
      "attractive only",
      "cancel",
      "cumulative"
    ],
    sampleAnswer: "On macroscopic galactic scales, matter is predominantly electrically neutral, balancing massive quantities of protons to electrons which functionally cancel out localized electrostatic effects. Contrastingly, mass generates a purely attractive gravitational field without any 'negative mass' counterpart; consequently, it is permanently cumulative, growing unimaginably large forcefully."
  },
  {
    id: "physics-5-31-key-4",
    type: "keyword",
    topic: "Math Errors surrounding radius",
    question: "Highlight the chief trap students fall into regarding the orbital tracking variable 'r', such as a spaceship stationed 2,000 km overhead.",
    keywords: [
      "altitude",
      "surface",
      "radius of Earth",
      "add",
      "centre-to-centre",
      "square"
    ],
    sampleAnswer: "Students reliably mistake the supplied altitude (height above surface) for the operative mathematical radius 'r'. Newton's laws demand a pure centre-to-centre separation metrics. Therefore, students must physically add the radius of Earth to altitude before entering the inverse-square mechanic."
  },
  {
    id: "physics-5-31-key-5",
    type: "keyword",
    topic: "Relationships between fields and potentials",
    question: "Expose the calculus-derivative relationship connecting field strength (g) natively to potential (V) utilizing graphs.",
    keywords: [
      "gradient",
      "negative",
      "dV/dr",
      "slope",
      "steepness",
      "field lines"
    ],
    sampleAnswer: "Mathematically, governing field strength (g) is identical to taking the negative continuous gradient of the potential curve (g = -dV/dr). Visually mapping a potential vs distance graph, the sheer steepness or sheer slope directly informs us exactly how strong the gripping field lines pull."
  },

  // ==========================================
  // FLASHCARDS (10)
  // ==========================================
  {
    id: "physics-5-31-fc-1",
    type: "flashcard",
    topic: "Equations",
    front: "What is Newton's Law of Universal Gravitation equation?",
    back: "F = GM₁M₂ / r²"
  },
  {
    id: "physics-5-31-fc-2",
    type: "flashcard",
    topic: "Definitions",
    front: "Differentiate between Big G and Little g formally.",
    back: "'G' is the universal gravitational constant identical everywhere. 'g' is the localized gravitational field strength dependent entirely on planet mass and orbit height."
  },
  {
    id: "physics-5-31-fc-3",
    type: "flashcard",
    topic: "Field Characteristics",
    front: "What physical trajectory marks an 'Equipotential Surface'?",
    back: "A surface enveloping the field where Potential ΔV equals exactly zero, always cutting through active field lines perpendicularly."
  },
  {
    id: "physics-5-31-fc-4",
    type: "flashcard",
    topic: "Graph Shapes",
    front: "On a graph of 'g' vs 'r', how does the field perform perfectly INSIDE a uniform planet's core?",
    back: "It yields a straight-line positive increase originating from the zero intersection point (g ∝ r), maximizing only at the planetary crust."
  },
  {
    id: "physics-5-31-fc-5",
    type: "flashcard",
    topic: "Potentials",
    front: "Why mathematically is gravitational potential 'V' explicitly always represented carrying a negative (-) sign?",
    back: "Because 'V' reaches its strict zero baseline boundary infinitely far out in space, meaning any location closer to the gravitational source traps below zero, registering deeply negative fractions."
  },
  {
    id: "physics-5-31-fc-6",
    type: "flashcard",
    topic: "Units",
    front: "What are the core SI alternate dimensional units for Gravity Field Strength (N/kg)?",
    back: "m s⁻² (since N/kg converts down to acceleration via F=ma)."
  },
  {
    id: "physics-5-31-fc-7",
    type: "flashcard",
    topic: "Forces compare",
    front: "Which subatomic field hits magnitudes estimated to be roughly 10³⁶ times more powerful than Gravity?",
    back: "The Electrostatic Force Field (F = kQq/r²)."
  },
  {
    id: "physics-5-31-fc-8",
    type: "flashcard",
    topic: "Velocity derivations",
    front: "For a rapidly spinning satellite, how is 'v' derived structurally?",
    back: "We equate Newton's Pull against Newtonian Circular motion limits: GMm/r² = mv²/r, cleanly leaving v = √(GM/r)."
  },
  {
    id: "physics-5-31-fc-9",
    type: "flashcard",
    topic: "Escape conditions",
    front: "Which equation encapsulates 'Escape Velocity', securing absolute freedom from a planet's gravity well?",
    back: "v₀ = √(2GM/R)."
  },
  {
    id: "physics-5-31-fc-10",
    type: "flashcard",
    topic: "Field connections",
    front: "Write the neat differential mapping linking Field strength locally (g) to Potential fields laterally (V).",
    back: "g = - dV/dr (Field is the severe negative gradient of potentials)."
  }
];
