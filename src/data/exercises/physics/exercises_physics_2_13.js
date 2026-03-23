export const exercises_physics_2_13 = [
  // ==========================================
  // MULTIPLE CHOICE QUESTIONS
  // ==========================================
  {
    id: "phy-2-13-m-01",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Which of the following correctly describes the relationship between the intensity of a progressive wave and its amplitude?",
    options: [
      "Intensity is proportional to amplitude.",
      "Intensity is inversely proportional to amplitude.",
      "Intensity is proportional to the square of amplitude.",
      "Intensity is inversely proportional to the square of amplitude."
    ],
    correctAnswer: 2,
    explanation: "The intensity of a progressive wave is proportional to the square of its amplitude (I ∝ A²). If amplitude is doubled, intensity increases by a factor of 4."
  },
  {
    id: "phy-2-13-m-02",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "A point source emits spherical waves. If the distance from the source is tripled, the intensity of the wave becomes:",
    options: [
      "One-third of the original intensity.",
      "One-sixth of the original intensity.",
      "One-ninth of the original intensity.",
      "Three times the original intensity."
    ],
    correctAnswer: 2,
    explanation: "According to the inverse square law (I ∝ 1/r²), tripling the distance reduces the intensity to 1/(3²) = 1/9 of its original value."
  },
  {
    id: "phy-2-13-m-03",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "What happens to light when it travels from a less dense medium (like air) into a more dense medium (like glass)?",
    options: [
      "Its velocity increases and it bends away from the normal.",
      "Its velocity decreases and it bends towards the normal.",
      "Its velocity stays the same and it bends towards the normal.",
      "Its velocity decreases and it bends away from the normal."
    ],
    correctAnswer: 1,
    explanation: "In a more dense medium, the refractive index is higher, causing light to slow down and bend towards the normal."
  },
  {
    id: "phy-2-13-m-04",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "A light ray travels from water (n = 1.33) into glass (n = 1.50) with an angle of incidence of 30°. Which equation correctly applies Snell's Law to find the angle of refraction?",
    options: [
      "1.33 × sin(r) = 1.50 × sin(30°)",
      "1.33 × sin(30°) = 1.50 × sin(r)",
      "1.50 × sin(r) = 1.33 × sin(30°)",
      "sin(r) = (1.50 / 1.33) × sin(30°)"
    ],
    correctAnswer: 1,
    explanation: "Snell's law is n₁sinθ₁ = n₂sinθ₂. Hence, 1.33 × sin(30°) = 1.50 × sin(r)."
  },
  {
    id: "phy-2-13-m-05",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Which two conditions are necessary for Total Internal Reflection (TIR) to occur?",
    options: [
      "Travelling into a denser medium; angle of incidence < critical angle.",
      "Travelling into a denser medium; angle of incidence > critical angle.",
      "Travelling into a less dense medium; angle of incidence < critical angle.",
      "Travelling into a less dense medium; angle of incidence > critical angle."
    ],
    correctAnswer: 3,
    explanation: "TIR occurs when moving from a denser to a less dense medium (n₁ > n₂) and the angle of incidence is greater than the critical angle (i > C)."
  },
  {
    id: "phy-2-13-m-06",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "What is the formula to calculate the critical angle C for a continuous boundary between medium 1 and medium 2 (assuming n₁ > n₂)?",
    options: [
      "sin C = n₁ / n₂",
      "sin C = n₂ / n₁",
      "sin C = n₁ × n₂",
      "C = sin⁻¹(n₁ - n₂)"
    ],
    correctAnswer: 1,
    explanation: "At the critical angle, the angle of refraction is 90°. From Snell's Law: n₁sinC = n₂sin(90°), meaning sinC = n₂/n₁."
  },
  {
    id: "phy-2-13-m-07",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "In Core Practical 6 (Measuring Refractive Index), you plot a graph of sin(i) against sin(r). What does the gradient of this graph represent when light enters glass from air?",
    options: [
      "The critical angle of the glass",
      "The speed of light in the glass",
      "The refractive index of the glass",
      "The lens power of the glass block"
    ],
    correctAnswer: 2,
    explanation: "According to Snell's law, sin(i) / sin(r) = n. Since the experiment is in air (n≈1), the gradient of sin(i) against sin(r) is exactly the refractive index of the glass."
  },
  {
    id: "phy-2-13-m-08",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Which of the following correctly describes the unit and focal length sign for the power of a diverging lens?",
    options: [
      "Dioptres (D), positive focal length",
      "Dioptres (D), negative focal length",
      "Watts (W), positive focal length",
      "Metres⁻¹ (m⁻¹), positive focal length"
    ],
    correctAnswer: 1,
    explanation: "Lens power is measured in dioptres (D), which are equivalent to m⁻¹. A diverging lens has a negative focal length (f < 0), meaning its power is also negative."
  },
  {
    id: "phy-2-13-m-09",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Two thin lenses with powers +5.0 D and −2.0 D are placed in contact. What is the focal length of the combined system?",
    options: [
      "3.0 m",
      "0.33 m",
      "7.0 m",
      "0.14 m"
    ],
    correctAnswer: 1,
    explanation: "Powers add for thin lenses in contact: P_total = 5.0 + (-2.0) = +3.0 D. The combined focal length is f = 1/P = 1/3.0 = 0.33 m."
  },
  {
    id: "phy-2-13-m-10",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Which of the following statements about real images is ALWAYS true?",
    options: [
      "They are always upright.",
      "They cannot be projected onto a screen.",
      "They are formed where rays physically converge.",
      "They are formed by extending diverging rays backwards."
    ],
    correctAnswer: 2,
    explanation: "A real image forms where refracted rays physically converge, which makes it possible to project them onto a screen. They are generally inverted, not upright."
  },
  {
    id: "phy-2-13-m-11",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Under the real-is-positive sign convention, what does a negative image distance (v < 0) mean?",
    options: [
      "The image is real, inverted, and can be projected.",
      "The image is real, upright, and cannot be projected.",
      "The image is virtual, upright, and cannot be projected.",
      "The image is virtual, inverted, and can be projected."
    ],
    correctAnswer: 2,
    explanation: "In the real-is-positive convention, v < 0 indicates a virtual image, which is always upright and cannot be projected onto a screen."
  },
  {
    id: "phy-2-13-m-12",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "A converging lens (f = +10 cm) is used as a magnifying glass. Where must the object be placed to form a magnified, virtual image?",
    options: [
      "At exactly 10 cm from the lens.",
      "At a distance greater than 20 cm.",
      "At a distance less than 10 cm.",
      "Between 10 cm and 20 cm from the lens."
    ],
    correctAnswer: 2,
    explanation: "To form a virtual image (which acts as a magnifying glass), the object must be placed inside the focal length (u < f = 10 cm)."
  },
  {
    id: "phy-2-13-m-13",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Assuming a real object, what type of image does a diverging lens ALWAYS produce?",
    options: [
      "Virtual, upright, diminished",
      "Virtual, upright, magnified",
      "Real, inverted, diminished",
      "Real, inverted, magnified"
    ],
    correctAnswer: 0,
    explanation: "A diverging lens always produces a virtual, upright, and diminished image regardless of the object's position."
  },
  {
    id: "phy-2-13-m-14",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "If a lens has a linear magnification m = −2.5, which of the following fully describes the image?",
    options: [
      "Real, upright, and 2.5 times smaller than the object.",
      "Real, inverted, and 2.5 times larger than the object.",
      "Virtual, inverted, and 2.5 times larger than the object.",
      "Virtual, upright, and 2.5 times smaller than the object."
    ],
    correctAnswer: 1,
    explanation: "The negative sign of magnification (m = v/u where v > 0) means the image is real and inverted. |m| = 2.5 means it is 2.5 times the size of the object."
  },
  {
    id: "phy-2-13-m-15",
    type: "multiple_choice",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Plane polarised light of intensity I₀ passes through an analyser. The transmission axis of the analyser is at an angle of 60° to the plane of polarisation of the light. What is the transmitted intensity?",
    options: [
      "0.25 I₀",
      "0.50 I₀",
      "0.75 I₀",
      "0"
    ],
    correctAnswer: 0,
    explanation: "According to Malus's law, I = I₀ cos²θ. Since cos(60°) = 0.5, cos²(60°) = 0.25. Therefore, I = 0.25 I₀."
  },

  // ==========================================
  // FILL IN THE BLANK QUESTIONS
  // ==========================================
  {
    id: "phy-2-13-f-01",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "Wave intensity is defined as the [power] per unit [area].",
    explanation: "Intensity is power passing through a perpendicular unit area: I = P/A."
  },
  {
    id: "phy-2-13-f-02",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "According to the inverse [square] law, if the distance from a point source is doubled, the intensity becomes one-[fourth] of its original value.",
    explanation: "I ∝ 1/r², so doubling r results in 1/(2²) = 1/4 the intensity."
  },
  {
    id: "phy-2-13-f-03",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "When light enters a medium with a higher refractive index, its speed [decreases] and it refracts [towards] the normal.",
    explanation: "A higher refractive index means an optically denser material, slowing down light and causing it to bend towards the normal."
  },
  {
    id: "phy-2-13-f-04",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Total internal reflection can only occur if light travels from a [more] optically dense to a [less] optically dense medium.",
    explanation: "TIR requires light to be moving into a medium with a lower refractive index (e.g., glass to air) so it bends away from the normal, eventually reflecting internally."
  },
  {
    id: "phy-2-13-f-05",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "The formula for the sine of the critical angle when light travels from medium 1 to medium 2 (where n1 > n2) is sin(C) = [n2] / [n1].",
    explanation: "By Snell's Law, when r = 90°, n1 sin C = n2 sin 90°. Since sin 90° = 1, sin(C) = n2 / n1."
  },
  {
    id: "phy-2-13-f-06",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "To measure the refractive index of glass, a graph of [sin(i)] on the y-axis against [sin(r)] on the x-axis will yield a straight line passing through the origin.",
    explanation: "According to Snell's Law (n = sin i / sin r), graphing sin(i) vs sin(r) will produce a straight line where the gradient is n."
  },
  {
    id: "phy-2-13-f-07",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "The power of a lens is calculated as the reciprocal of its focal length in [metres] and is measured in [dioptres].",
    explanation: "Power is P = 1/f, requiring f to be in metres, producing the unit D (dioptres)."
  },
  {
    id: "phy-2-13-f-08",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "A converging lens has a [positive] focal length, while a [diverging] lens always has a negative focal length.",
    explanation: "By convention, a lens that converges light is assigned P > 0 and f > 0, while differing types like diverging are assigned P < 0 and f < 0."
  },
  {
    id: "phy-2-13-f-09",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "A combined lens system made of thin lenses in contact has a total power equal to the [sum] of their individual [powers].",
    explanation: "For thin lenses in contact, P_total = P₁ + P₂ + ... "
  },
  {
    id: "phy-2-13-f-10",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "A [real] image is formed when light rays physically converge, and it is always [inverted] relative to the object.",
    explanation: "Real images physically exist at a point where rays cross and they are upside-down."
  },
  {
    id: "phy-2-13-f-11",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "In the thin lens equation 1/v + 1/u = 1/f, using the real-is-[positive] convention, image distance 'v' is [negative] for a virtual image.",
    explanation: "Under the real-is-positive convention, standard objective distances (u) and real image distances (v) are positive, making virtual image distances negative."
  },
  {
    id: "phy-2-13-f-12",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Linear magnification for a lens is given by the ratio of the image height to the [object] height, which is also equal to the ratio of v to [u].",
    explanation: "Magnification formula: m = h_i / h_o = v / u."
  },
  {
    id: "phy-2-13-f-13",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "A [magnifying] glass is simply a converging lens where the object is placed [inside] the focal point, creating a virtual, upright, magnified image.",
    explanation: "When u < f for a converging lens, it does not physically converge to form a real image. Instead, extending rays backwards creates a large virtual image."
  },
  {
    id: "phy-2-13-f-14",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Malus's Law states that the transmitted intensity of plane-polarised light through an analyser is equal to I₀ multiplied by the [square] of the [cosine] of the angle between them.",
    explanation: "Malus's Law is expressed as I = I₀ cos²θ, linking the angle to intensity reduction."
  },
  {
    id: "phy-2-13-f-15",
    type: "fill_in_the_blank",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "Only [transverse] waves can undergo polarisation, which restricts the wave's oscillations to a single [plane].",
    explanation: "Longitudinal waves cannot be polarised because their oscillation is already parallel to the direction of propagation."
  },

  // ==========================================
  // DRAG AND DROP QUESTIONS
  // ==========================================
  {
    id: "phy-2-13-d-01",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "Drag the terms to correctly complete the definition of wave intensity.",
    text: "Intensity is defined as the amount of 1 passing through a unit 2 per unit time. For a point source, the intensity drops inversely proportional to the square of the 3.",
    targetZones: {
      "1": "energy",
      "2": "area",
      "3": "distance"
    },
    options: ["energy", "amplitude", "distance", "area", "wavelength"],
    explanation: "Intensity is power (or energy per unit time) per unit area. It obeys the inverse square law with distance."
  },
  {
    id: "phy-2-13-d-02",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Complete the sentence regarding light refraction moving into a denser medium.",
    text: "When light moves from air into glass, its speed 1 and its wavelength 2. The ray bends 3 the normal.",
    targetZones: {
      "1": "decreases",
      "2": "decreases",
      "3": "towards"
    },
    options: ["increases", "decreases", "towards", "away from"],
    explanation: "In an optically denser medium, both the speed and wavelength decrease while frequency remains constant, causing the light to bend towards the normal."
  },
  {
    id: "phy-2-13-d-03",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Drag the terms to outline the requirements for Total Internal Reflection.",
    text: "TIR happens only when light travels from a 1 dense medium to a 2 dense medium, and the angle of incidence is greater than the 3 angle.",
    targetZones: {
      "1": "more",
      "2": "less",
      "3": "critical"
    },
    options: ["more", "critical", "less", "refraction", "reflection"],
    explanation: "TIR strictly demands moving into a less dense medium (n₁ > n₂) with an incidence angle exceeding the critical angle."
  },
  {
    id: "phy-2-13-d-04",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Match the variables in an optical fibre.",
    text: "In an optical fibre, the 1 has a higher refractive index than the 2, ensuring that light is trapped inside via 3 internal reflection.",
    targetZones: {
      "1": "core",
      "2": "cladding",
      "3": "total"
    },
    options: ["cladding", "core", "total", "critical", "partial"],
    explanation: "The core is optically denser than the cladding to trap light through total internal reflection."
  },
  {
    id: "phy-2-13-d-05",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Drag terms to explain lens power relationships.",
    text: "The power of a lens is measured in 1. A lens with a short focal length has a 2 power. Converging lenses have 3 power values.",
    targetZones: {
      "1": "Dioptres",
      "2": "high",
      "3": "positive"
    },
    options: ["Dioptres", "high", "low", "positive", "negative"],
    explanation: "Lens power is in Dioptres (P=1/f). A smaller 'f' generates a larger 'P' (high power). Converging lenses always process positive values."
  },
  {
    id: "phy-2-13-d-06",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Distinguish between real and virtual images.",
    text: "A 1 image can be projected on a screen and is always 2. A virtual image forms where rays appear to meet and is always 3.",
    targetZones: {
      "1": "real",
      "2": "inverted",
      "3": "upright"
    },
    options: ["real", "upright", "virtual", "inverted"],
    explanation: "Real images are formed by physically converging rays (inverted). Virtual images cannot be projected (upright)."
  },
  {
    id: "phy-2-13-d-07",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Describe the image produced by a diverging lens.",
    text: "For a real object, a diverging lens ALWAYS produces an image that is 1, 2, and 3.",
    targetZones: {
      "1": "virtual",
      "2": "upright",
      "3": "diminished"
    },
    options: ["virtual", "real", "upright", "inverted", "magnified", "diminished"],
    explanation: "A diverging lens inevitably forms virtual, upright, and diminished images regardless of object position."
  },
  {
    id: "phy-2-13-d-08",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Apply the real-is-positive convention to the lens equation parameters.",
    text: "For a converging lens producing a real image: 'f' is 1, 'u' is 2, and 'v' is 3.",
    targetZones: {
      "1": "positive",
      "2": "positive",
      "3": "positive"
    },
    options: ["positive", "positive", "positive", "negative"],
    explanation: "In the real-is-positive convention, a converging focal length, a real object distance, and a real image distance are all mathematically positive."
  },
  {
    id: "phy-2-13-d-09",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "Drag to describe linear magnification.",
    text: "Linear magnification m is the ratio of image 1 to object 2. Alternatively, it is given by image 3 (v) over object 4 (u).",
    targetZones: {
      "1": "height",
      "2": "height",
      "3": "distance",
      "4": "distance"
    },
    options: ["height", "height", "distance", "distance", "power"],
    explanation: "Magnification is a ratio of physical dimensions: h_image / h_object or v / u."
  },
  {
    id: "phy-2-13-d-10",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Complete the statement regarding Malus's law.",
    text: "Malus's Law calculates transmitted 1 using the square of the 2 of the angle between the polariser and the 3.",
    targetZones: {
      "1": "intensity",
      "2": "cosine",
      "3": "analyser"
    },
    options: ["intensity", "sine", "cosine", "polariser", "analyser"],
    explanation: "Malus's Law applies to the analyser and the transmitted intensity, using the formula I = I₀ cos²θ."
  },
  {
    id: "phy-2-13-d-11",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Interpret magnification signs under real-is-positive.",
    text: "When m is 1, the image is real and inverted. When m is 2, the image is virtual and 3.",
    targetZones: {
      "1": "negative",
      "2": "positive",
      "3": "upright"
    },
    options: ["negative", "positive", "inverted", "upright"],
    explanation: "Negative v/u ratios indicate inverted (real) images. Positive magnification relates to upright (virtual) images."
  },
  {
    id: "phy-2-13-d-12",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Constructing ray diagrams for converging lenses.",
    text: "A ray parallel to the axis refracts through the far 1. A ray through the optical 2 is completely 3.",
    targetZones: {
      "1": "focal point",
      "2": "centre",
      "3": "undeviated"
    },
    options: ["focal point", "centre", "deviated", "undeviated"],
    explanation: "In ray diagrams, rays aligned through the optical centre pass straight through undeviated. Parallel rays move to the focal point F."
  },
  {
    id: "phy-2-13-d-13",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "What happens when unpolarised light passes through a polarising filter?",
    text: "The light becomes plane 1, and its intensity drops by 2 percent because all components perpendicular to the transmission 3 are absorbed.",
    targetZones: {
      "1": "polarised",
      "2": "fifty",
      "3": "axis"
    },
    options: ["polarised", "fifty", "twenty", "axis", "normal"],
    explanation: "Passing unpolarised light through one polariser removes half the intensity (50%), leaving it plane-polarised along that transmission axis."
  },
  {
    id: "phy-2-13-d-14",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Telescope properties via lens combinations.",
    text: "A telescope uses two lenses: an objective with a 1 focal length to gather light, and an eyepiece with a 2 focal length to function as a 3.",
    targetZones: {
      "1": "long",
      "2": "short",
      "3": "magnifier"
    },
    options: ["long", "short", "magnifier", "projector"],
    explanation: "Telescope objectives require long focal lengths to capture wide images. The eyepiece is simply a short focal length magnifying glass."
  },
  {
    id: "phy-2-13-d-15",
    type: "drag_and_drop",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Lens powers combination.",
    text: "Combining a +4.0 D lens and a -2.0 D lens yields a system power of 1 D, achieving a focal length of 2 metres, which means the system still 3 light.",
    targetZones: {
      "1": "+2.0",
      "2": "0.50",
      "3": "converges"
    },
    options: ["+2.0", "-2.0", "0.50", "2.0", "converges", "diverges"],
    explanation: "P_total = 4.0 - 2.0 = +2.0 D. Resulting f = 1 / 2.0 = 0.50 m. Since P > 0, the total system converges light."
  },

  // ==========================================
  // SEQUENCE QUESTIONS
  // ==========================================
  {
    id: "phy-2-13-s-01",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Order the steps involved in measuring the refractive index of a glass block (Core Practical 6).",
    steps: [
      "Place the glass block on paper and trace its outline.",
      "Draw a normal to the boundary and direct a light ray at an angle of incidence.",
      "Mark the path of the incident ray and the emergent ray on the other side.",
      "Remove the block and join the marks to reveal the refracted ray inside the block.",
      "Measure the angles of incidence (i) and refraction (r) using a protractor.",
      "Plot a graph of sin(i) against sin(r) to find the refractive index from the gradient."
    ],
    explanation: "These are the standard experimental steps for verifying Snell's Law with a semicircular or rectangular glass block."
  },
  {
    id: "phy-2-13-s-02",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Order the process of light passing through an optical fibre.",
    steps: [
      "Light enters the core of the optical fibre at an angle.",
      "The light travels through the denser core until it hits the boundary with the less dense cladding.",
      "The angle of incidence at the boundary exceeds the critical angle.",
      "Total Internal Reflection (TIR) occurs, preventing light from escaping.",
      "The light signals repeatedly reflect internally and exit down the length of the fibre."
    ],
    explanation: "An optical fibre exploits TIR by trapping light waves inside the dense core reflecting perfectly against the cladding."
  },
  {
    id: "phy-2-13-s-03",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "high",
    question: "Arrange the steps for calculating the distance of an object given a real image using the thin lens equation.",
    steps: [
      "Identify the focal length (f), noting it as positive for a converging lens.",
      "Identify the image distance (v), noting it as positive for a real image.",
      "Write down the lens equation: 1/v + 1/u = 1/f.",
      "Rearrange the equation to solve for the object term: 1/u = 1/f - 1/v.",
      "Calculate the value and take the reciprocal to find u."
    ],
    explanation: "In order to find the object distance 'u', the user must apply the sign convention to variables first, set up the lens equation, rearrange for 1/u, and solve."
  },
  {
    id: "phy-2-13-s-04",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Order the steps for constructing a ray diagram that forms a real image using a converging lens.",
    steps: [
      "Draw the principal axis and mark the optical centre and focal points (F) on both sides.",
      "Draw a vertical line to represent the object beyond 2F.",
      "Draw the first ray parallel to the principal axis, refracting through the far focal point (F).",
      "Draw the second ray passing straight through the optical centre undeviated.",
      "Locate the point where the refracted rays intersect to draw the top of the real, inverted image."
    ],
    explanation: "These are the standard steps for drawing converging lens ray diagrams."
  },
  {
    id: "phy-2-13-s-05",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Rank the image outputs from a Converging Lens starting from an object placed at Infinity, progressively moving closer into the Focal Point.",
    steps: [
      "Real, inverted, highly diminished image formed at F.",
      "Real, inverted, diminished image formed between F and 2F.",
      "Real, inverted, same-size image formed exactly at 2F.",
      "Real, inverted, magnified image formed beyond 2F.",
      "Virtual, upright, highly magnified image (magnifying glass setup)."
    ],
    explanation: "As you bring an object closer to a lens from infinity, its real image moves further away and grows larger, eventually switching to a virtual image when crossing the focal point."
  },
  {
    id: "phy-2-13-s-06",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Sequence the phenomena occurring when randomly polarised light passes through crossed polaroids.",
    steps: [
      "Unpolarised light (oscillating in all planes) approaches the first polariser.",
      "The first polariser absorbs components perpendicular to its axis, transmitting 50% of the intensity.",
      "The transmitted light is now plane-polarised, oscillating in a single plane.",
      "The plane-polarised light hits the second polariser (analyser), which is rotated 90 degrees.",
      "The analyser blocks the plane-polarised light completely, resulting in zero transmitted intensity."
    ],
    explanation: "This describes the core mechanism of crossed polaroids as quantified by Malus's Law."
  },
  {
    id: "phy-2-13-s-07",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Order the mathematical steps to solve: An optician combines a +5.0D and a -2.0D lens. Where does this system focus parallel rays?",
    steps: [
      "Identify the individual powers: P1 = +5.0 D and P2 = -2.0 D.",
      "Use the combination formula: P_total = P1 + P2.",
      "Calculate P_total = +5.0 - 2.0 = +3.0 D.",
      "Use the relationship between power and focal length: f = 1 / P_total.",
      "Calculate f = 1 / 3.0 = 0.33 m (or 33 cm)."
    ],
    explanation: "This follows the logical flow from identifying individual component powers, combining them, and converting the system power to focal length."
  },
  {
    id: "phy-2-13-s-08",
    type: "sequence",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Order the sequence of increasing refraction of light as the angle of incidence is increased inside a denser medium.",
    steps: [
      "A light ray hitting the boundary at a small angle mostly refracts out into the air.",
      "As the angle of incidence increases, the refracted ray bends further away from the normal.",
      "The angle of incidence reaches the critical angle, causing the refracted ray to skim the boundary (r = 90°).",
      "The angle of incidence slightly exceeds the critical angle.",
      "The light cannot refract out and undergoes total internal reflection."
    ],
    explanation: "This sequences the transition from normal refraction to the critical threshold, and finally into total internal reflection."
  },

  // ==========================================
  // KEYWORD MATCHING / TYPE
  // ==========================================
  {
    id: "phy-2-13-k-01",
    type: "keyword_matching",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    question: "Match the term with its correct definition regarding lenses.",
    matches: {
      "Focal length": "Distance from the optical centre to the focal point.",
      "Power": "Reciprocal of the focal length in metres (1/f).",
      "Dioptre": "The standard unit of lens power.",
      "Optical centre": "The point exactly in the middle of a thin lens."
    },
    explanation: "These are core definitions when discussing converging and diverging lenses."
  },
  {
    id: "phy-2-13-k-02",
    type: "keyword_matching",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Match the symbol with its meaning in the real-is-positive convention.",
    matches: {
      "Positive u": "Object distance for a real object.",
      "Positive v": "Image distance for a real image.",
      "Negative v": "Image distance for a virtual image.",
      "Negative f": "Focal length for a diverging lens."
    },
    explanation: "These match the standard sign conventions used alongside the lens equation 1/u + 1/v = 1/f."
  },
  {
    id: "phy-2-13-k-03",
    type: "keyword_matching",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Match the formula with the corresponding physical phenomenon.",
    matches: {
      "n1 sin(θ1) = n2 sin(θ2)": "Snell's Law of Refraction",
      "sin(C) = n2 / n1": "Critical Angle for TIR",
      "I = I₀ cos²θ": "Malus's Law for Polarisation",
      "I = P / 4πr²": "Inverse Square Law for Intensity"
    },
    explanation: "Matching the core Topic 13 mathematical formulas to their specific use cases."
  },
  {
    id: "phy-2-13-k-04",
    type: "keyword_matching",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    question: "Match the visual descriptions to their optical properties.",
    matches: {
      "Real, inverted, magnified image": "Object placed between F and 2F of a converging lens.",
      "Virtual, upright, magnified image": "Object placed inside F of a converging lens.",
      "Virtual, upright, diminished image": "Any image formed by a diverging lens.",
      "Real, inverted, exactly the same size": "Object placed exactly at 2F of a converging lens."
    },
    explanation: "This tests the geometric combinations of lenses according to their ray diagrams."
  },
  {
    id: "phy-2-13-k-05",
    type: "keyword_matching",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    question: "Match the variable changes to their effect on Intensity.",
    matches: {
      "Distance is doubled": "Intensity becomes 1/4",
      "Distance is tripled": "Intensity becomes 1/9",
      "Amplitude is doubled": "Intensity becomes 4x larger",
      "Polarised through 60-degree analyser": "Intensity becomes 1/4"
    },
    explanation: "Intensity is proportional to amplitude squared, inversely proportional to distance squared, and governed by Malus's Law (where cos(60) = 0.5, and 0.5^2 = 0.25)."
  },

  // ==========================================
  // FLASHCARDS
  // ==========================================
  {
    id: "phy-2-13-fc-01",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    front: "State the relationship between wave intensity and distance from a point source.",
    back: "Intensity follows an inverse square law: I ∝ 1/r²",
    explanation: "As spherical wavefronts spread, the energy covers an area (4πr²) that increases with the square of the distance."
  },
  {
    id: "phy-2-13-fc-02",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    front: "State Snell's Law in terms of refractive indices and angles.",
    back: "n₁ sin(θ₁) = n₂ sin(θ₂)",
    explanation: "This formula determines the refraction path when crossing boundaries. If medium 1 is air, this simplifies to sin(i) / sin(r) = n."
  },
  {
    id: "phy-2-13-fc-03",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    front: "What two conditions must be met for Total Internal Reflection to occur?",
    back: "1. Light must travel from a more dense to a less dense medium (n₁ > n₂).\n2. The angle of incidence must be greater than the critical angle (i > C).",
    explanation: "If light is travelling towards a denser medium, it continuously bends towards the normal and never achieves TIR."
  },
  {
    id: "phy-2-13-fc-04",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    front: "Determine the transmission angle (analyser angle) required to completely block initially polarised light.",
    back: "90 degrees (or π / 2 radians).",
    explanation: "According to Malus's Law: I = I₀ cos²θ. If θ = 90°, cos(90°) = 0, so intensity is absolutely zero (blocked)."
  },
  {
    id: "phy-2-13-fc-05",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    front: "How do you calculate the power of a lens? Give its units.",
    back: "Power P = 1 / f\nIt is measured in Dioptres (D), provided the focal length (f) is in metres.",
    explanation: "A lens with shorter focal length bends light more sharply, producing a higher numerical Power."
  },
  {
    id: "phy-2-13-fc-06",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    front: "State the real-is-positive thin lens equation.",
    back: "1/v + 1/u = 1/f",
    explanation: "In this convention: Real objects (u) and real images (v) have positive values. Virtual images carry negative values."
  },
  {
    id: "phy-2-13-fc-07",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    front: "How does the image formed by a diverging lens differ from a converging lens?",
    back: "A diverging lens *always* forms a virtual, upright, and diminished image regardless of object position (unlike converging lenses, which can form real/inverted images).",
    explanation: "Since diverging lenses bend rays outward, extensions must be drawn backward to find the apparent origin (virtual image)."
  },
  {
    id: "phy-2-13-fc-08",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "hard",
    front: "What is the consequence of placing a +3.0D and a -3.0D lens directly in contact?",
    back: "They cancel each other out identically (P_total = 0). They behave purely as a plane glass block with no net focusing capability.",
    explanation: "P_total = P₁ + P₂. Light is converged by the first and diverged by an identical sum in the second."
  },
  {
    id: "phy-2-13-fc-09",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "medium",
    front: "What is linear magnification?",
    back: "The ratio of image height to object height (h_i / h_o). It is also equal to the ratio of image distance over object distance (v / u).",
    explanation: "A linear magnification of magnitude greater than 1 means the image is visually larger than the original object."
  },
  {
    id: "phy-2-13-fc-10",
    type: "flashcards",
    topic: "Refraction, Reflection & Polarisation",
    difficulty: "easy",
    front: "Which type of waves can be plane polarised?",
    back: "Only Transverse waves.",
    explanation: "Longitudinal waves (like sound) oscillate parallel to motion and thus cannot be restricted to a single perpendicular polarisation plane."
  }
];
