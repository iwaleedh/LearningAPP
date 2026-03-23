export const exercises_physics_1_2 = {
  mcq: [
    {
      id: "mcq-1",
      topic: "Equations of Motion",
      stem: "Which of the following conditions must be met for the four standard SUVAT equations to apply to the motion of an object?",
      options: [
        "The object must travel at a constant velocity.",
        "The object must experience a constant acceleration.",
        "The object must be accelerating from rest.",
        "The object must be in freefall with air resistance acting on it."
      ],
      answer: 1,
      rationale: "The SUVAT equations map uniform motion, so they only apply when the acceleration of the object is constant and non-zero. Air resistance causes acceleration to change over time, violating this rule."
    },
    {
      id: "mcq-2",
      topic: "Equations of Motion",
      stem: "A car accelerates from rest along a straight road at a constant rate of 2.5 m/s². What equation is most appropriate to find the distance covered after 6.0 s?",
      options: [
        "v = u + at",
        "v² = u² + 2as",
        "s = ut + ½at²",
        "s = ½(u + v)t"
      ],
      answer: 2,
      rationale: "We are given u=0, a=2.5, t=6, and we want to find s. Therefore, the equation missing v evaluates the distance without finding the final velocity first."
    },
    {
      id: "mcq-3",
      topic: "Equations of Motion",
      stem: "A train travelling at 30 m/s decelerates to rest at a rate of 1.5 m/s². Which SUVAT equation should be used to find the stopping distance?",
      options: [
        "v = u + at",
        "s = ut + ½at²",
        "v² = u² + 2as",
        "s = ½(u + v)t"
      ],
      answer: 2,
      rationale: "Given u=30, v=0, a=-1.5, finding s meaning we don't have or need time t. The equation v² = u² + 2as is the only one omitting t."
    },
    {
      id: "mcq-4",
      topic: "Motion Graphs",
      stem: "Which property of a displacement-time (s-t) graph gives you the instantaneous velocity of an object?",
      options: [
        "The area under the graph",
        "The y-intercept",
        "The gradient of the graph",
        "The x-intercept"
      ],
      answer: 2,
      rationale: "On an s-t graph, the gradient (Δs/Δt) is the definition of velocity. Area under an s-t graph has no physical meaning."
    },
    {
      id: "mcq-5",
      topic: "Motion Graphs",
      stem: "If a velocity-time graph shows a horizontal line at v = 15 m/s, what does this indicate about the object's acceleration?",
      options: [
        "It is 15 m/s²",
        "It is constantly increasing",
        "It is 0 m/s²",
        "It is negative"
      ],
      answer: 2,
      rationale: "A horizontal v-t graph means velocity is not changing. Since acceleration is the gradient of a v-t graph, a zero gradient means zero acceleration."
    },
    {
      id: "mcq-6",
      topic: "Motion Graphs",
      stem: "What physical quantity does the area under an acceleration-time graph represent?",
      options: [
        "Instantaneous acceleration",
        "Change in displacement",
        "Instantaneous velocity",
        "Change in velocity"
      ],
      answer: 3,
      rationale: "Because acceleration is the rate of change of velocity (a = Δv/Δt), multiplying a by Δt (the area) yields the change in velocity, Δv."
    },
    {
      id: "mcq-7",
      topic: "Properties of Motion Graphs",
      stem: "On a displacement-time graph, what does a curve that gets progressively steeper indicate?",
      options: [
        "Increasing velocity (acceleration)",
        "Constant velocity",
        "Decreasing velocity (deceleration)",
        "Zero velocity"
      ],
      answer: 0,
      rationale: "Since the gradient of an s-t graph equals velocity, a gradient that gets steeper (higher value) means the velocity is increasing, which requires positive acceleration."
    },
    {
      id: "mcq-8",
      topic: "Properties of Motion Graphs",
      stem: "How can you manually calculate the instantaneous acceleration from a curve on a velocity-time graph?",
      options: [
        "Divide the curve's y-value by its x-value at that point.",
        "Calculate the area under the curve up to that point.",
        "Count the squares below the curve.",
        "Draw a tangent to the curve at that point and calculate its gradient."
      ],
      answer: 3,
      rationale: "Instantaneous rate of change on any curved graph requires drawing a tangent at the point of interest and measuring the rise/run of that straight-line tangent."
    },
    {
      id: "mcq-9",
      topic: "Properties of Motion Graphs",
      stem: "If a velocity-time graph line crosses the time axis into the negative v region, what happens to the area bounded below the axis?",
      options: [
        "It represents positive distance.",
        "It represents negative displacement (motion in reverse).",
        "It represents infinite velocity.",
        "It is subtracted from the gradient."
      ],
      answer: 1,
      rationale: "The area under a v-t graph gives displacement. Areas below the time axis represent negative displacement, signifying the object is returning towards or past its origin."
    },
    {
      id: "mcq-10",
      topic: "Scalars & Vectors",
      stem: "Which of the following pairings correctly matches a scalar quantity with its corresponding vector quantity?",
      options: [
        "Mass and Density",
        "Distance and Displacement",
        "Speed and Acceleration",
        "Force and Energy"
      ],
      answer: 1,
      rationale: "Distance is a scalar (path length) and its direct vector equivalent is displacement (straight-line distance in a specific direction)."
    },
    {
      id: "mcq-11",
      topic: "Scalars & Vectors",
      stem: "An athlete runs exactly one lap around a 400 m circular track, finishing at the exact starting line. What is their total distance and displacement, respectively?",
      options: [
        "Distance: 400 m, Displacement: 400 m",
        "Distance: 0 m, Displacement: 400 m",
        "Distance: 400 m, Displacement: 0 m",
        "Distance: 0 m, Displacement: 0 m"
      ],
      answer: 2,
      rationale: "Distance is the scalar path covered (400 m). Displacement is the vector from start to finish. Since they ended where they began, the straight-line displacement is zero."
    },
    {
      id: "mcq-12",
      topic: "Scalars & Vectors",
      stem: "Why does a car moving at a steady speed of 20 m/s in a perfect circle experience an acceleration?",
      options: [
        "Because scalar quantities cannot be constant on curves.",
        "Because the speed is changing microscopically.",
        "Because distance is continuously increasing.",
        "Because the direction of the velocity vector is constantly changing."
      ],
      answer: 3,
      rationale: "Velocity is a vector. If direction changes, velocity changes. Acceleration is the rate of change of velocity, so an unchanging speed but changing direction still produces acceleration."
    },
    {
      id: "mcq-13",
      topic: "Resolving Vectors",
      stem: "A force F is applied at an angle θ above the horizontal. Which equation gives the vertical component of the force?",
      options: [
        "F cos θ",
        "F sin θ",
        "m g cos θ",
        "F tan θ"
      ],
      answer: 1,
      rationale: "Since θ is to the horizontal, the vertical component is the side opposite the angle, giving F_y = F sin θ."
    },
    {
      id: "mcq-14",
      topic: "Resolving Vectors",
      stem: "A block of weight W rests on a frictionless slope inclined at angle α to the horizontal. What is the component of the weight acting parallel to (down) the slope?",
      options: [
        "W cos α",
        "W tan α",
        "W / sin α",
        "W sin α"
      ],
      answer: 3,
      rationale: "The weight component parallel to the slope is always W sin α (or mg sin α), which causes down-slope acceleration."
    },
    {
      id: "mcq-15",
      topic: "Resolving Vectors",
      stem: "When resolving a vector into perpendicular components, what mathematical check can be used to verify the original magnitude F?",
      options: [
        "F = Fx + Fy",
        "F = Fx - Fy",
        "F² = Fx² + Fy²",
        "Fx = Fy tan θ"
      ],
      answer: 2,
      rationale: "Because the components are perpendicular, Pythagoras' theorem (F² = Fx² + Fy²) must hold true, verifying the magnitude."
    },
    {
      id: "mcq-16",
      topic: "Finding the Resultant Vector",
      stem: "When drawing the resultant of two vectors using the tip-to-tail (triangle) method, the resultant arrow should be drawn:",
      options: [
        "From the tip of the first to the tip of the second vector.",
        "From the tail of the second to the tail of the first vector.",
        "From the tail of the first to the tip of the second vector.",
        "Between the two parallel lines drawn from the points."
      ],
      answer: 2,
      rationale: "In the tip-to-tail method, the resultant vector bridges the gap starting from the very first tail and ending at the very last arrowhead."
    },
    {
      id: "mcq-17",
      topic: "Finding the Resultant Vector",
      stem: "Two perpendicular forces act on a single point: 5.0 N horizontally and 12.0 N vertically. What is the magnitude of the resultant force?",
      options: [
        "7.0 N",
        "17.0 N",
        "13.0 N",
        "60.0 N"
      ],
      answer: 2,
      rationale: "R = sqrt(5² + 12²) = sqrt(25 + 144) = sqrt(169) = 13.0 N."
    },
    {
      id: "mcq-18",
      topic: "Finding the Resultant Vector",
      stem: "If you want to subtract vector B from vector A to find (A - B), what is the correct graphical procedure?",
      options: [
        "Draw B starting from the tail of A.",
        "Divide vector A by vector B.",
        "Add the negative of B to A, where -B has same magnitude but opposite direction.",
        "Erase vector B from vector A."
      ],
      answer: 2,
      rationale: "Vector subtraction is just vector addition of a reversed vector: A - B is equivalent to A + (-B)."
    },
    {
      id: "mcq-19",
      topic: "Projectiles",
      stem: "What is the primary assumption made regarding the horizontal motion of an ideal projectile (ignoring air resistance)?",
      options: [
        "The horizontal acceleration is 9.81 m/s².",
        "The horizontal velocity increases linearly.",
        "The horizontal velocity is zero at the peak height.",
        "The horizontal acceleration is zero."
      ],
      answer: 3,
      rationale: "Without air resistance, there are no horizontal forces, so ax = 0 and horizontal velocity remains constant."
    },
    {
      id: "mcq-20",
      topic: "Projectiles",
      stem: "A ball is launched horizontally off a cliff. Which factor determines the time it takes for the ball to hit the ground?",
      options: [
        "Its horizontal launch velocity.",
        "The mass of the ball.",
        "The height of the cliff.",
        "The angle of the horizontal push."
      ],
      answer: 2,
      rationale: "Vertical and horizontal motions are independent. For a horizontal launch, time is determined entirely by vertical freefall distance: t = sqrt(2h/g)."
    },
    {
      id: "mcq-21",
      topic: "Projectiles",
      stem: "At the maximum height of its parabolic path, the vertical velocity of a projectile is:",
      options: [
        "Equal to its horizontal velocity.",
        "Maximum.",
        "Zero.",
        "Negative."
      ],
      answer: 2,
      rationale: "At the peak, the object stops travelling upward and begins falling downward, meaning its instantaneous vertical velocity component must be exactly zero."
    },
    {
      id: "mcq-22",
      topic: "Forces as Vectors",
      stem: "When drawing a free-body diagram for a book resting on a table, which is a correct rule?",
      options: [
        "Draw the force the book exerts on the table.",
        "Draw only the forces that the surroundings exert on the book.",
        "Include the velocity vector of the book alongside the forces.",
        "Ensure all arrows point towards the centre of the object."
      ],
      answer: 1,
      rationale: "Free-body diagrams isolate one object and show ONLY the external forces acting ON that object. Do not include forces the object exerts on other things."
    },
    {
      id: "mcq-23",
      topic: "Forces as Vectors",
      stem: "An object is stated to be in equilibrium. Which mathematical condition must be satisfied regarding horizontal and vertical forces?",
      options: [
        "The sum of horizontal forces must equal the sum of vertical forces.",
        "ΣFx = 0 and ΣFy = 0.",
        "The resultant force must be 9.81 N.",
        "Only the vertical forces need to cancel out."
      ],
      answer: 1,
      rationale: "Equilibrium means the net resultant force is zero in all dimensions, so the sum of resolved components along both the x-axis and y-axis must independently equal zero."
    },
    {
      id: "mcq-24",
      topic: "Forces as Vectors",
      stem: "Car A is travelling north at 30 m/s. Car B is travelling south at 20 m/s on the opposite side of the road. What is the speed of Car A relative to Car B?",
      options: [
        "10 m/s",
        "20 m/s",
        "30 m/s",
        "50 m/s"
      ],
      answer: 3,
      rationale: "Since they are moving in opposite directions, their relative closing speed is the sum of magnitudes: 30 + 20 = 50 m/s."
    }
  ],

  fillblank: [
    {
      id: "fb-1",
      topic: "Equations of Motion",
      stem: "The kinematic SUVAT equations describe the motion of an object only if it is moving with a _ acceleration.",
      blanks: [
        { id: "blank1", text: "constant", accepts: ["constant", "uniform", "steady"] }
      ],
      rationale: "If acceleration changes over time, the assumptions linking velocity and displacement in the SUVAT derivations break down."
    },
    {
      id: "fb-2",
      topic: "Equations of Motion",
      stem: "Freefall is motion determined only by gravity, where the uniform acceleration is equal to approximately _ m/s².",
      blanks: [
        { id: "b1", text: "9.81", accepts: ["9.81", "9.8"] }
      ],
      rationale: "On Earth, g = 9.81 m/s²."
    },
    {
      id: "fb-3",
      topic: "Motion Graphs",
      stem: "On a displacement-time graph, the _ of the line equals the velocity.",
      blanks: [
        { id: "b1", text: "gradient", accepts: ["gradient", "slope"] }
      ],
      rationale: "Velocity is the rate of change of displacement, which visually equates to the gradient of the s-t graph."
    },
    {
      id: "fb-4",
      topic: "Motion Graphs",
      stem: "To find the displacement from a velocity-time graph, you must calculate the _ between the plotted line and the time axis.",
      blanks: [
        { id: "b1", text: "area", accepts: ["area", "area under"] }
      ],
      rationale: "Displacement is the integral of velocity over time, which graph-wise corresponds to the area."
    },
    {
      id: "fb-5",
      topic: "Properties of Motion Graphs",
      stem: "To calculate instantaneous acceleration on a curved velocity-time graph, one must draw a _ at that specific point.",
      blanks: [
        { id: "b1", text: "tangent", accepts: ["tangent", "tangent line"] }
      ],
      rationale: "A tangent straight line touches the curve at exactly one point with an identical gradient."
    },
    {
      id: "fb-6",
      topic: "Properties of Motion Graphs",
      stem: "An object is decelerating uniformly. On a velocity-time graph, this produces a straight line with a _ gradient.",
      blanks: [
        { id: "b1", text: "negative", accepts: ["negative", "downward"] }
      ],
      rationale: "Deceleration denotes a reduction in velocity over time, which mathematically generates a negative gradient ratio."
    },
    {
      id: "fb-7",
      topic: "Scalars & Vectors",
      stem: "A physical quantity that has both magnitude and _ is known as a vector.",
      blanks: [
        { id: "b1", text: "direction", accepts: ["direction"] }
      ],
      rationale: "Direction distinguishes vectors like velocity from pure scalars like speed."
    },
    {
      id: "fb-8",
      topic: "Scalars & Vectors",
      stem: "If you walk 10 m East and 10 m West back to your origin, your total distance is 20 m but your net _ is 0 m.",
      blanks: [
        { id: "b1", text: "displacement", accepts: ["displacement"] }
      ],
      rationale: "Displacement is a vector pointing from the start to the endpoints in a straight line, which cancels here."
    },
    {
      id: "fb-9",
      topic: "Resolving Vectors",
      stem: "When a force F is resolved into components, the horizontal component is given by F × _ θ if θ is the angle to the horizontal.",
      blanks: [
        { id: "b1", text: "cos", accepts: ["cos", "cosine"] }
      ],
      rationale: "The side adjacent to the given angle resolves using the cosine function in right-triangle trigonometry."
    },
    {
      id: "fb-10",
      topic: "Resolving Vectors",
      stem: "For a block resting on a slope of angle α, the normal reaction force balances the weight component calculated as mg × _ α.",
      blanks: [
        { id: "b1", text: "cos", accepts: ["cos", "cosine"] }
      ],
      rationale: "The component perpendicular to an inclined plane rests adjacent to the tilt angle."
    },
    {
      id: "fb-11",
      topic: "Finding the Resultant Vector",
      stem: "When two mutually perpendicular vectors A and B are added, the magnitude of the resultant is found using _ theorem.",
      blanks: [
        { id: "b1", text: "Pythagoras", accepts: ["Pythagoras", "Pythagoras'", "pythagorean"] }
      ],
      rationale: "Right-angled vector addition resolves via a² + b² = c²."
    },
    {
      id: "fb-12",
      topic: "Finding the Resultant Vector",
      stem: "Two method graphs for adding vectors geometrically are the triangle tip-to-tail method and the _ method.",
      blanks: [
        { id: "b1", text: "parallelogram", accepts: ["parallelogram"] }
      ],
      rationale: "The parallelogram method attaches vector tails together and uses the diagonal as the resultant."
    },
    {
      id: "fb-13",
      topic: "Projectiles",
      stem: "In projectile motion ignoring air resistance, the horizontal velocity remains _, while vertical velocity changes constantly.",
      blanks: [
        { id: "b1", text: "constant", accepts: ["constant", "unchanged", "steady", "uniform"] }
      ],
      rationale: "The only force acting is gravity vertically, so horizontal acceleration ax = 0."
    },
    {
      id: "fb-14",
      topic: "Projectiles",
      stem: "If a ball is launched horizontally from a cliff, its initial vertical velocity uy equals _ m/s.",
      blanks: [
        { id: "b1", text: "0", accepts: ["0", "zero"] }
      ],
      rationale: "A strictly horizontal launch angle (0 degrees) means sin(0) = 0."
    },
    {
      id: "fb-15",
      topic: "Forces as Vectors",
      stem: "A diagram showing a single object and all the forces exerted outwardly upon it is called a _-body diagram.",
      blanks: [
        { id: "b1", text: "free", accepts: ["free"] }
      ],
      rationale: "Free-body diagrams isolate structures to allow clear vector addition and resolving."
    },
    {
      id: "fb-16",
      topic: "Forces as Vectors",
      stem: "An object is in _ when the resultant force on it is strictly zero in all directions.",
      blanks: [
        { id: "b1", text: "equilibrium", accepts: ["equilibrium"] }
      ],
      rationale: "If the forces sum to zero, a = 0, leaving the object stationary or at constant velocity."
    }
  ],

  dragdrop: [
    {
      id: "dd-1",
      topic: "Scalars & Vectors",
      stem: "Categorise the physical quantities as either vector or scalar.",
      categories: [
        { id: "cat-vector", title: "Vector" },
        { id: "cat-scalar", title: "Scalar" }
      ],
      items: [
        { id: "i1", text: "Velocity", categoryId: "cat-vector" },
        { id: "i2", text: "Displacement", categoryId: "cat-vector" },
        { id: "i3", text: "Weight", categoryId: "cat-vector" },
        { id: "i4", text: "Acceleration", categoryId: "cat-vector" },
        { id: "i5", text: "Speed", categoryId: "cat-scalar" },
        { id: "i6", text: "Distance", categoryId: "cat-scalar" },
        { id: "i7", text: "Mass", categoryId: "cat-scalar" },
        { id: "i8", text: "Energy", categoryId: "cat-scalar" }
      ],
      rationale: "Vectors require a direction to be fully defined; scalars rely strictly on magnitude numericals."
    },
    {
      id: "dd-2",
      topic: "Motion Graphs",
      stem: "Match the motion graph property to the physical quantity it calculates.",
      categories: [
        { id: "cat-vel", title: "Velocity" },
        { id: "cat-acc", title: "Acceleration" },
        { id: "cat-disp", title: "Displacement" }
      ],
      items: [
        { id: "i1", text: "Gradient of s-t graph", categoryId: "cat-vel" },
        { id: "i2", text: "Gradient of v-t graph", categoryId: "cat-acc" },
        { id: "i3", text: "Area under v-t graph", categoryId: "cat-disp" }
      ],
      rationale: "Differentiating position provides velocity. Differentiating velocity gives acceleration. Integrating velocity yields displacement area."
    },
    {
      id: "dd-3",
      topic: "Resolving Vectors",
      stem: "Sort the analytical quantities for an object of weight W resting on a frictionless slope inclined at angle α.",
      categories: [
        { id: "cat-para", title: "Parallel to Slope" },
        { id: "cat-perp", title: "Perpendicular to Slope" }
      ],
      items: [
        { id: "i1", text: "W sin α", categoryId: "cat-para" },
        { id: "i2", text: "Frictionless Sliding Force", categoryId: "cat-para" },
        { id: "i3", text: "Direction of Acceleration", categoryId: "cat-para" },
        { id: "i4", text: "W cos α", categoryId: "cat-perp" },
        { id: "i5", text: "Normal Reaction N", categoryId: "cat-perp" }
      ],
      rationale: "The parallel sliding component aligns with sine, while the cosine aligns with the perpendicular normal axis."
    },
    {
      id: "dd-4",
      topic: "Projectiles",
      stem: "Categorise the projectile variables by horizontal or vertical planes.",
      categories: [
        { id: "cat-horz", title: "Horizontal (x)" },
        { id: "cat-vert", title: "Vertical (y)" }
      ],
      items: [
        { id: "i1", text: "u cos θ", categoryId: "cat-horz" },
        { id: "i2", text: "a = 0 m/s²", categoryId: "cat-horz" },
        { id: "i3", text: "Range R", categoryId: "cat-horz" },
        { id: "i4", text: "u sin θ", categoryId: "cat-vert" },
        { id: "i5", text: "a = -9.81 m/s²", categoryId: "cat-vert" },
        { id: "i6", text: "Maximum Height H", categoryId: "cat-vert" }
      ],
      rationale: "Projectiles undergo gravity vertically and drift consistently horizontally."
    },
    {
      id: "dd-5",
      topic: "Motion Graphs",
      stem: "Match the type of v-t graph to its corresponding motion state.",
      categories: [
        { id: "cat-1", title: "Constant Velocity" },
        { id: "cat-2", title: "Uniform Acceleration" },
        { id: "cat-3", title: "Changing Acceleration" }
      ],
      items: [
        { id: "i1", text: "Horizontal Line", categoryId: "cat-1" },
        { id: "i2", text: "Gradient = 0", categoryId: "cat-1" },
        { id: "i3", text: "Straight Sloped Line", categoryId: "cat-2" },
        { id: "i4", text: "Constant Positive Gradient", categoryId: "cat-2" },
        { id: "i5", text: "Curved Line", categoryId: "cat-3" },
        { id: "i6", text: "Tangent changes steepness", categoryId: "cat-3" }
      ],
      rationale: "Linear gradients imply uniformity, curves imply varying forces/accelerations."
    },
    {
      id: "dd-6",
      topic: "Equations of Motion",
      stem: "Match the SUVAT equation to the variable it naturally omits.",
      categories: [
        { id: "cat-s", title: "Omits Displacement (s)" },
        { id: "cat-v", title: "Omits Final Velocity (v)" },
        { id: "cat-t", title: "Omits Time (t)" }
      ],
      items: [
        { id: "i1", text: "v = u + at", categoryId: "cat-s" },
        { id: "i2", text: "s = ut + ½at²", categoryId: "cat-v" },
        { id: "i3", text: "v² = u² + 2as", categoryId: "cat-t" }
      ],
      rationale: "Each formula handles 4 of the 5 variables, omitting one."
    },
    {
      id: "dd-7",
      topic: "Forces as Vectors",
      stem: "Group the forces typically drawn on a free-body diagram under their acting conditions.",
      categories: [
        { id: "cat-w", title: "Always Downward" },
        { id: "cat-n", title: "Perpendicular to Surface" },
        { id: "cat-f", title: "Parallel to Surface" }
      ],
      items: [
        { id: "i1", text: "Weight", categoryId: "cat-w" },
        { id: "i2", text: "mg", categoryId: "cat-w" },
        { id: "i3", text: "Normal Reaction", categoryId: "cat-n" },
        { id: "i4", text: "Contact Force", categoryId: "cat-n" },
        { id: "i5", text: "Friction", categoryId: "cat-f" },
        { id: "i6", text: "Viscous Drag", categoryId: "cat-f" }
      ],
      rationale: "Understanding geometric orientations is vital for assigning cos/sin roles."
    },
    {
      id: "dd-8",
      topic: "Finding the Resultant Vector",
      stem: "Which mathematical method is appropriate for uniting these types of vectors?",
      categories: [
        { id: "cat-1", title: "Pythagoras Theorem" },
        { id: "cat-2", title: "Simple Addition" },
        { id: "cat-3", title: "Trigonometry Component Method" }
      ],
      items: [
        { id: "i1", text: "Two forces at 90°", categoryId: "cat-1" },
        { id: "i2", text: "Horizontal & Vertical velocities", categoryId: "cat-1" },
        { id: "i3", text: "Vectors along same line", categoryId: "cat-2" },
        { id: "i4", text: "Scalar magnitudes like mass", categoryId: "cat-2" },
        { id: "i5", text: "Forces acting at 45° and 60°", categoryId: "cat-3" },
        { id: "i6", text: "Three arbitrary angled forces", categoryId: "cat-3" }
      ],
      rationale: "Pythagoras is restricted to 90 degrees; arbitrary angles require decomposition into components."
    }
  ],

  sequence: [
    {
      id: "seq-1",
      topic: "Finding the Resultant Vector",
      stem: "Order the geometric steps for drawing vectors via the Triangle (tip-to-tail) method.",
      steps: [
        "Select a suitable scale.",
        "Draw arrow A indicating correct direction and proportional length.",
        "From the arrowhead of A, initiate the tail of arrow B.",
        "Draw arrow B in its respective direction.",
        "Form the resultant by connecting the tail of A directly to the tip of B.",
        "Measure the length and angle of the resultant."
      ],
      rationale: "Head-to-tail methods rely on chaining arrows end-to-end to trace the sequence of motion or force."
    },
    {
      id: "seq-2",
      topic: "Finding the Resultant Vector",
      stem: "Arrange the mathematical steps for the analytical Vector Component Method.",
      steps: [
        "Resolve all individual vectors into horizontal x-components (Fcosθ).",
        "Resolve all individual vectors into vertical y-components (Fsinθ).",
        "Sum all horizontal components algebraically (ΣFx).",
        "Sum all vertical components algebraically (ΣFy).",
        "Combine absolute totals using Pythagoras: sqrt(ΣFx² + ΣFy²).",
        "Calculate directional angle using arctan(ΣFy / ΣFx)."
      ],
      rationale: "Breaking vectors down allows orthogonal (x/y) algebraic addition prior to recombining the result."
    },
    {
      id: "seq-3",
      topic: "Properties of Motion Graphs",
      stem: "Put the steps in order for calculating instantaneous acceleration from a curved velocity-time graph.",
      steps: [
        "Identify the time t of interest on the x-axis.",
        "Plot a dot exactly on the curve at that moment.",
        "Lay a perfectly straight edge gently touching only that singular dot.",
        "Draw a long tangent line escaping across the grid.",
        "Select two widely separated, readable coordinate points on the tangent.",
        "Calculate the gradient by dividing the Δy rise by the Δx run."
      ],
      rationale: "Curved data demands tangent extraction to find an instantaneous gradient rate."
    },
    {
      id: "seq-4",
      topic: "Equations of Motion",
      stem: "Arrange the recommended workflow for employing SUVAT equations reliably.",
      steps: [
        "Establish a fixed positive spatial direction convention (e.g. up = +).",
        "List out all known boundary condition variables with correct +/- signs.",
        "Determine clearly which variable constitutes the unknown target.",
        "Cross-reference to locate the single SUVAT equation linking the 4 variables.",
        "Substitute numerical inputs into the algebraic template.",
        "Solve algebraically for the final metric unknown."
      ],
      rationale: "Without strict sign assignment and variable inventory, choosing the right formula guarantees errors."
    },
    {
      id: "seq-5",
      topic: "Projectiles",
      stem: "Order the logical sequence to evaluate the maximum height of a cannonball launched at an angle.",
      steps: [
        "Identify the launch velocity vector u and angle θ.",
        "Resolve the initial vector to extract vertical start velocity uy = u sin θ.",
        "Acknowledge vertical gravity acceleration a = -9.81 m/s².",
        "Note that at the peak apogee, instantaneous vertical velocity vy = 0.",
        "Slot values into v² = u² + 2as.",
        "Rearrange to solve height: s = H = (uy)² / (2g)."
      ],
      rationale: "Max height queries hinge on resolving vertical speeds and invoking the vy=0 peak boundary."
    },
    {
      id: "seq-6",
      topic: "Forces as Vectors",
      stem: "Order the steps to verify if an object under 3 divergent strings rests in equilibrium.",
      steps: [
        "Sketch a rough free-body diagram showing all three tension vectors.",
        "Overlay x and y orthogonal axes on the object's centre.",
        "Resolve all strings to distinct Fx (cos) and Fy (sin) quantities.",
        "Sum the Fx totals to confirm if they cancel to perfectly 0.",
        "Sum the Fy totals independently.",
        "Conclude equilibrium only if both ΣFx and ΣFy strictly equal 0."
      ],
      rationale: "Equilibrium proof necessitates absolute verification of zero net force on both simultaneous 2D axes."
    }
  ],

  keyword: [
    {
      id: "kw-1",
      topic: "Scalars & Vectors",
      stem: "A car travels perfectly around a complete roundabout at a steady 15 m/s. Explain why the car travels at constant speed, yet experiences a non-zero, continuously changing velocity.",
      keywords: ["direction", "vector", "magnitude", "changing"],
      rationale: "While the magnitude (speed) is constant, velocity is a vector possessing direction. Driving in a circle continuously alters pointing direction, altering the velocity vector entirely."
    },
    {
      id: "kw-2",
      topic: "Projectiles",
      stem: "Why does an artillery shell launched sideways off a cliff hit the sea surface at the exact same moment as a bullet dropped vertically from the same height? Assume air resistance is absent.",
      keywords: ["independent", "vertical", "gravity", "horizontal"],
      rationale: "Newtonian kinematics splits spatial dimensions purely independently; gravity accelerates both vertically at an identical -9.81 m/s² irrespective of sideways drifting."
    },
    {
      id: "kw-3",
      topic: "Motion Graphs",
      stem: "You possess a detailed velocity-time graph tracking an elevator plunging downwards. Explain explicitly how to extract its absolute peak descent acceleration.",
      keywords: ["gradient", "steepest", "tangent", "slope"],
      rationale: "Acceleration corresponds to the v-t graph's gradient. To find peak acceleration, one hunts for the steepest section of the curve, applying a tangent slope calculation."
    },
    {
      id: "kw-4",
      topic: "Forces as Vectors",
      stem: "Define 'equilibrium' physically referencing a free-body diagram and net forces.",
      keywords: ["zero", "resultant", "sum", "components"],
      rationale: "Equilibrium implies absolute balance where the summation of all individual geometric forces generates a resultant net magnitude of exactly zero in any chosen component axis."
    },
    {
      id: "kw-5",
      topic: "Projectiles",
      stem: "If air resistance is reintroduced to a projectile's flight, outline the fundamental aerodynamic reason why the motion is no longer a perfect parabola shape.",
      keywords: ["drag", "acceleration", "horizontal", "velocity"],
      rationale: "Real projectiles suffer drag proportional to v². This generates unexpected decel forces horizontally (ax ≠ 0) and vertically, breaking the symmetric SUVAT constant acceleration rule."
    },
    {
      id: "kw-6",
      topic: "Resolving Vectors",
      stem: "If investigating an ice cube sliding down a smooth roof tilted at 22°, why do physicists mathematically split gravity's weight force into two unusual components, rather than normal horizontal/vertical?",
      keywords: ["parallel", "perpendicular", "slope", "normal"],
      rationale: "Aligning axes parallel and perpendicular to the slope means the 'normal' axis zeroes out (N = Wcosθ), leaving just Wsinθ causing acceleration purely parallel."
    },
    {
      id: "kw-7",
      topic: "Equations of Motion",
      stem: "Explain why it is critical a student assigns a firm 'upward is positive' direction before entering values into the SUVAT equation v = u + at for a ball tossed straight up.",
      keywords: ["signs", "vector", "gravity", "negative", "opposite"],
      rationale: "Because u, v, s, and a are vectors, they conflict if not given consistent +/- polarity relative to an axis. Gravity opposes the upward toss, so a must adopt a strict negative 9.81."
    },
    {
      id: "kw-8",
      topic: "Motion Graphs",
      stem: "How can the total distance travelled by a vehicle be mathematically deduced if its velocity-time graph dips below the horizontal time axis?",
      keywords: ["area", "absolute", "below", "positive", "sum"],
      rationale: "Displacement cancels negative areas, but true Distance travelled treats area below the axis as positive magnitude, requiring summation of the absolute individual areas."
    }
  ],

  flashcards: [
    {
      id: "fc-1",
      topic: "Scalars & Vectors",
      front: "What distinguishes a vector from a scalar?",
      back: "A scalar has magnitude only. A vector has both magnitude and direction."
    },
    {
      id: "fc-2",
      topic: "Scalars & Vectors",
      front: "List four classic examples of vector quantities.",
      back: "Displacement, Velocity, Acceleration, Force (also Momentum, Weight)."
    },
    {
      id: "fc-3",
      topic: "Scalars & Vectors",
      front: "List four classic examples of scalar quantities.",
      back: "Distance, Speed, Mass, Energy (also Time, Temperature)."
    },
    {
      id: "fc-4",
      topic: "Equations of Motion",
      front: "What is the SUVAT equation omitting displacement (s)?",
      back: "v = u + at"
    },
    {
      id: "fc-5",
      topic: "Equations of Motion",
      front: "What is the SUVAT equation omitting final velocity (v)?",
      back: "s = ut + ½at²"
    },
    {
      id: "fc-6",
      topic: "Equations of Motion",
      front: "What is the SUVAT equation omitting time (t)?",
      back: "v² = u² + 2as"
    },
    {
      id: "fc-7",
      topic: "Equations of Motion",
      front: "What critical assumption must hold true to use SUVAT formulas?",
      back: "The acceleration must be uniform (constant in magnitude and direction)."
    },
    {
      id: "fc-8",
      topic: "Motion Graphs",
      front: "What does the gradient of a displacement-time (s-t) graph give?",
      back: "Instantaneous velocity."
    },
    {
      id: "fc-9",
      topic: "Motion Graphs",
      front: "What does the gradient of a velocity-time (v-t) graph give?",
      back: "Instantaneous acceleration."
    },
    {
      id: "fc-10",
      topic: "Motion Graphs",
      front: "What does the area under a velocity-time (v-t) graph give?",
      back: "Displacement."
    },
    {
      id: "fc-11",
      topic: "Motion Graphs",
      front: "What does the area under an acceleration-time (a-t) graph give?",
      back: "Change in velocity (Δv)."
    },
    {
      id: "fc-12",
      topic: "Properties of Motion Graphs",
      front: "What does a curved line signify on a displacement-time graph?",
      back: "Velocity is changing (acceleration or deceleration)."
    },
    {
      id: "fc-13",
      topic: "Properties of Motion Graphs",
      front: "How do you calculate the instantaneous gradient on a curve?",
      back: "Draw a straight tangent touching only that point, and calculate its rise/run gradient."
    },
    {
      id: "fc-14",
      topic: "Resolving Vectors",
      front: "Given Force F at angle θ to horizontal, what is the horizontal component?",
      back: "Fx = F cos θ"
    },
    {
      id: "fc-15",
      topic: "Resolving Vectors",
      front: "Given Force F at angle θ to horizontal, what is the vertical component?",
      back: "Fy = F sin θ"
    },
    {
      id: "fc-16",
      topic: "Resolving Vectors",
      front: "For a mass m on a slope angled at α, what is the weight component sliding it down the incline?",
      back: "mg sin α"
    },
    {
      id: "fc-17",
      topic: "Finding the Resultant Vector",
      front: "How do you find the magnitude resultant R of perpendicular vectors A and B?",
      back: "Pythagoras' theorem: R = sqrt(A² + B²)"
    },
    {
      id: "fc-18",
      topic: "Finding the Resultant Vector",
      front: "How do you subtract vector B from vector A?",
      back: "Add the negative inverse vector of B to A: A + (-B). Reverse B's arrow, apply head-to-tail."
    },
    {
      id: "fc-19",
      topic: "Projectiles",
      front: "What is the horizontal acceleration of a free projectile with zero air resistance?",
      back: "0 m/s² (horizontal velocity is perfectly constant)."
    },
    {
      id: "fc-20",
      topic: "Projectiles",
      front: "What is the instantaneous vertical velocity at the peak height of a projectile's flight?",
      back: "0 m/s."
    },
    {
      id: "fc-21",
      topic: "Projectiles",
      front: "What connects/bridges the equations for the independent horizontal and vertical motions of a projectile?",
      back: "Time (t) is identical for both axes."
    },
    {
      id: "fc-22",
      topic: "Forces as Vectors",
      front: "What defines an object in translational equilibrium?",
      back: "The resultant (net) force is exactly zero. (ΣFx = 0 and ΣFy = 0)."
    },
    {
      id: "fc-23",
      topic: "Forces as Vectors",
      front: "What forces should NOT be drawn on a Free-Body Diagram?",
      back: "Forces that the object itself exerts outwardly onto its surroundings. Only inward forces acting ON the object are shown."
    },
    {
      id: "fc-24",
      topic: "Forces as Vectors",
      front: "If Car A moves right at 20m/s and Car B moves left at 15m/s, what is the relative closing speed?",
      back: "35 m/s. Relative speeds add up when tracking opposite collisions."
    }
  ]
};
