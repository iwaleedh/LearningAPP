export const exercises_physics_1_10 = {
    mcq: [
        // Hooke's Law
        {
            id: 'mcq-t10-1',
            stem: 'A spring extends by 4.0 cm when a force of 12 N is applied. What is the spring constant?',
            options: ['3.0 N/m', '48 N/m', '300 N/m', '3000 N/m'],
            correctAnswer: 2,
            rationale: 'Using F = kx: k = F/x = 12 / 0.040 = 300 N/m. Remember to convert cm to m (4.0 cm = 0.040 m).',
            topic: "Hooke's Law",
        },
        {
            id: 'mcq-t10-2',
            stem: "Hooke's Law states that:",
            options: [
                'Extension is inversely proportional to applied force',
                'Extension is directly proportional to applied force up to the limit of proportionality',
                'Stress is proportional to strain for all materials',
                'Force is constant regardless of extension'
            ],
            correctAnswer: 1,
            rationale: "Hooke's Law states that the extension is directly proportional to the applied force, but only up to the limit of proportionality. Beyond this point, the relationship is no longer linear.",
            topic: "Hooke's Law",
        },
        {
            id: 'mcq-t10-3',
            stem: 'What does the gradient of a force-extension graph represent?',
            options: ['Elastic strain energy', 'Young modulus', 'Spring constant k', 'Stress'],
            correctAnswer: 2,
            rationale: 'The gradient of a force-extension graph (ΔF/Δx) equals the spring constant k, measured in N/m. The steeper the gradient, the stiffer the spring.',
            topic: "Hooke's Law",
        },
        {
            id: 'mcq-t10-4',
            stem: 'The limit of proportionality on a force-extension graph is identified by:',
            options: [
                'The point where the line becomes horizontal',
                'The point where the line starts to curve',
                'The origin of the graph',
                'The breaking point of the material'
            ],
            correctAnswer: 1,
            rationale: 'The limit of proportionality is where the force-extension relationship stops being linear. On the graph, this is where the straight line starts to curve (typically flattening out).',
            topic: "Hooke's Law",
        },
        {
            id: 'mcq-t10-5',
            stem: 'Which statement about elastic limit and limit of proportionality is correct?',
            options: [
                'They are the same point',
                'Elastic limit always comes before limit of proportionality',
                'Elastic limit always comes after limit of proportionality',
                'There is no relationship between them'
            ],
            correctAnswer: 2,
            rationale: 'The elastic limit is always after (or at) the limit of proportionality. A material may still return to its original shape even when the force-extension relationship is no longer perfectly linear.',
            topic: "Hooke's Law",
        },

        // Stress, Strain & Young Modulus
        {
            id: 'mcq-t10-6',
            stem: 'What is the SI unit of tensile stress?',
            options: ['N', 'N/m', 'Pa (N/m²)', 'No units'],
            correctAnswer: 2,
            rationale: 'Stress = Force/Area = F/A, with units of N/m², which is defined as pascals (Pa). This is the same unit as pressure.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-7',
            stem: 'Why does strain have no units?',
            options: [
                'Because it is always very small',
                'Because it is a ratio of two lengths',
                'Because it is measured in degrees',
                'Because it depends on the material'
            ],
            correctAnswer: 1,
            rationale: 'Strain = ΔL/L, which is extension divided by original length. Since both are measured in metres, the units cancel out, making strain dimensionless.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-8',
            stem: 'A wire of cross-sectional area 2.0 × 10⁻⁶ m² is stretched by a force of 100 N. What is the tensile stress?',
            options: ['5.0 × 10⁷ Pa', '5.0 × 10⁸ Pa', '2.0 × 10⁻⁴ Pa', '5.0 × 10⁻⁸ Pa'],
            correctAnswer: 1,
            rationale: 'Stress = F/A = 100 / (2.0 × 10⁻⁶) = 50 × 10⁶ = 5.0 × 10⁷ Pa. Wait, that equals 5.0 × 10⁷ Pa (50 MPa). The answer is 5.0 × 10⁷ Pa.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-9',
            stem: 'A wire of length 2.0 m extends by 0.4 mm under load. What is the strain?',
            options: ['0.2', '0.002', '2.0 × 10⁻⁴', '5.0 × 10⁻⁴'],
            correctAnswer: 2,
            rationale: 'Strain = ΔL/L = (0.4 × 10⁻³) / 2.0 = 0.2 × 10⁻³ = 2.0 × 10⁻⁴. Remember to convert mm to metres.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-10',
            stem: 'The Young modulus is defined as:',
            options: [
                'Stress × strain',
                'Force / extension',
                'Stress / strain in the elastic region',
                'Strain / stress'
            ],
            correctAnswer: 2,
            rationale: 'Young modulus E = stress/strain, measured in the elastic region (up to the limit of proportionality). It describes the stiffness of a material.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-11',
            stem: 'Which material has the highest Young modulus?',
            options: ['Rubber', 'Bone', 'Steel', 'Copper'],
            correctAnswer: 2,
            rationale: 'Steel has a Young modulus of approximately 200 GPa, which is higher than copper (~130 GPa), bone (~20 GPa), and rubber (~0.01 GPa). Higher E means a stiffer material.',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'mcq-t10-12',
            stem: 'Why is the Young modulus more useful than the spring constant for comparing materials?',
            options: [
                'It is easier to measure',
                'It is independent of sample dimensions',
                'It has larger numerical values',
                'It only applies to springs'
            ],
            correctAnswer: 1,
            rationale: 'The Young modulus is a material property that does not depend on the size or shape of the sample. The spring constant k depends on both the material AND the dimensions of the particular sample.',
            topic: 'Stress, Strain & Young Modulus',
        },

        // Force-Extension Graphs
        {
            id: 'mcq-t10-13',
            stem: 'On a force-extension graph, the area under the curve represents:',
            options: [
                'The spring constant',
                'The Young modulus',
                'Work done (elastic strain energy)',
                'Breaking stress'
            ],
            correctAnswer: 2,
            rationale: 'The area under a force-extension graph equals the work done in stretching the material, which is stored as elastic strain energy (if the material is elastic).',
            topic: 'Force-Extension Graphs',
        },
        {
            id: 'mcq-t10-14',
            stem: 'What is elastic deformation?',
            options: [
                'Permanent change in shape after load removal',
                'Deformation where the material returns to its original shape when load is removed',
                'Deformation that occurs only in plastics',
                'Deformation beyond the breaking point'
            ],
            correctAnswer: 1,
            rationale: 'Elastic deformation is reversible — the material returns to its original shape when the deforming force is removed. This occurs below the elastic limit.',
            topic: 'Force-Extension Graphs',
        },
        {
            id: 'mcq-t10-15',
            stem: 'The yield point on a force-extension graph is where:',
            options: [
                'Hooke\'s law first applies',
                'The material breaks',
                'The material continues to stretch without additional force',
                'The spring constant is maximum'
            ],
            correctAnswer: 2,
            rationale: 'At the yield point, the material undergoes significant plastic deformation — it continues to stretch (more strain) even without additional force being applied.',
            topic: 'Force-Extension Graphs',
        },
        {
            id: 'mcq-t10-16',
            stem: 'Plastic deformation occurs:',
            options: [
                'Before the limit of proportionality',
                'Only in springs',
                'After the elastic limit, causing permanent deformation',
                'When the material returns to its original shape'
            ],
            correctAnswer: 2,
            rationale: 'Plastic deformation occurs after the elastic limit and causes permanent (irreversible) changes to the material\'s shape. The material will not return to its original dimensions.',
            topic: 'Force-Extension Graphs',
        },

        // Stress-Strain Graphs
        {
            id: 'mcq-t10-17',
            stem: 'On a stress-strain graph, what does the gradient of the linear region represent?',
            options: ['Breaking stress', 'Spring constant', 'Young modulus', 'Strain energy'],
            correctAnswer: 2,
            rationale: 'The gradient of the linear (elastic) region of a stress-strain graph equals the Young modulus E. A steeper gradient indicates a stiffer material.',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'mcq-t10-18',
            stem: 'What is breaking stress?',
            options: [
                'The stress at the yield point',
                'The maximum stress before plastic deformation',
                'The stress at which the material fractures',
                'The stress at the elastic limit'
            ],
            correctAnswer: 2,
            rationale: 'Breaking stress (or fracture stress) is the stress at which the material completely breaks or fractures. The atoms separate completely at this point.',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'mcq-t10-19',
            stem: 'A brittle material on a stress-strain graph would show:',
            options: [
                'A large plastic region before breaking',
                'No plastic region — it breaks soon after the elastic limit',
                'A curved elastic region',
                'Multiple yield points'
            ],
            correctAnswer: 1,
            rationale: 'Brittle materials like glass and ceramics show little or no plastic deformation. They break soon after the elastic limit without significant plastic flow.',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'mcq-t10-20',
            stem: 'A ductile material is characterised by:',
            options: [
                'Breaking without plastic deformation',
                'A very small elastic region',
                'A large plastic region allowing it to be drawn into wires',
                'Having no yield point'
            ],
            correctAnswer: 2,
            rationale: 'Ductile materials like copper and steel have a large plastic region, which allows them to be drawn into wires. They can undergo significant plastic deformation before fracture.',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'mcq-t10-21',
            stem: 'The toughness of a material is indicated by:',
            options: [
                'The gradient of the stress-strain graph',
                'The total area under the stress-strain curve',
                'The breaking stress only',
                'The strain at the elastic limit'
            ],
            correctAnswer: 1,
            rationale: 'Toughness is the energy absorbed per unit volume before fracture, which equals the total area under the stress-strain curve. Tough materials absorb lots of energy before breaking.',
            topic: 'Stress-Strain Graphs',
        },

        // Core Practical 5
        {
            id: 'mcq-t10-22',
            stem: 'In the Young modulus experiment, why is a long wire used?',
            options: [
                'To make the wire easier to handle',
                'To maximise the extension for easier measurement',
                'To reduce the mass needed',
                'To increase the cross-sectional area'
            ],
            correctAnswer: 1,
            rationale: 'Stiff materials like steel have very small extensions. Using a long wire (1-2 m) maximises ΔL, making it easier to measure accurately with a vernier scale or travelling microscope.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'mcq-t10-23',
            stem: 'In the Young modulus experiment, what instrument is used to measure the wire diameter?',
            options: ['Metre rule', 'Vernier caliper', 'Micrometer screw gauge', 'Travelling microscope'],
            correctAnswer: 2,
            rationale: 'A micrometer screw gauge is used because it provides the precision needed (typically 0.01 mm) for measuring thin wire diameters. Diameter uncertainty has a large effect since it is squared in the area calculation.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'mcq-t10-24',
            stem: 'How can you check that the elastic limit was not exceeded during the Young modulus experiment?',
            options: [
                'Measure the wire diameter before and after',
                'Compare loading and unloading curves — they should overlap',
                'Use a longer wire',
                'Add masses more slowly'
            ],
            correctAnswer: 1,
            rationale: 'If loading and unloading curves overlap, the wire remained in the elastic region throughout. If they don\'t overlap, the elastic limit was exceeded and permanent deformation occurred.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'mcq-t10-25',
            stem: 'In the Young modulus experiment, the independent variable is:',
            options: ['Extension ΔL', 'Applied force F', 'Wire length L', 'Wire diameter d'],
            correctAnswer: 1,
            rationale: 'The independent variable is what you change deliberately — the applied force F (by adding masses). The dependent variable is the extension ΔL that you measure.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'mcq-t10-26',
            stem: 'A common error in the Young modulus experiment is using diameter instead of radius. The correct formula for cross-sectional area is:',
            options: ['A = πd', 'A = πd²', 'A = π(d/2)² = πd²/4', 'A = 2πr'],
            correctAnswer: 2,
            rationale: 'Area = πr² = π(d/2)² = πd²/4. Using diameter directly without dividing by 2 first gives an area 4 times too large, leading to significant error.',
            topic: 'Core Practical 5: Young Modulus',
        },

        // Elastic Strain Energy
        {
            id: 'mcq-t10-27',
            stem: 'The elastic strain energy stored in a spring compressed by 0.10 m with k = 200 N/m is:',
            options: ['10 J', '2.0 J', '1.0 J', '20 J'],
            correctAnswer: 2,
            rationale: 'E_el = ½kx² = 0.5 × 200 × (0.10)² = 0.5 × 200 × 0.01 = 1.0 J.',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'mcq-t10-28',
            stem: 'For a material obeying Hooke\'s Law, elastic strain energy can be written as:',
            options: ['E = kx', 'E = ½kx² or ½Fx', 'E = Fx', 'E = kx²'],
            correctAnswer: 1,
            rationale: 'Both E_el = ½kx² and E_el = ½Fx are equivalent for Hookean materials, since F = kx at maximum extension. This equals the area of the triangle under the F-x graph.',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'mcq-t10-29',
            stem: 'What is hysteresis in the context of loading and unloading materials?',
            options: [
                'Loading and unloading curves being identical',
                'The unloading curve lying below the loading curve, forming a loop',
                'The material breaking during unloading',
                'Rapid oscillation of the material'
            ],
            correctAnswer: 1,
            rationale: 'Hysteresis occurs when the unloading curve differs from the loading curve. The enclosed loop area represents energy dissipated as heat during the loading-unloading cycle.',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'mcq-t10-30',
            stem: 'The area of a hysteresis loop on a force-extension graph represents:',
            options: [
                'Total strain energy stored',
                'Elastic potential energy',
                'Energy dissipated as heat per cycle',
                'Spring constant'
            ],
            correctAnswer: 2,
            rationale: 'The hysteresis loop area equals the energy lost as heat during one complete loading-unloading cycle. Not all stored energy is recovered due to internal friction.',
            topic: 'Elastic Strain Energy',
        },
    ],

    fillblank: [
        {
            id: 'fb-t10-1',
            stem: "Complete Hooke's Law equation.",
            template: "Hooke's Law states that F = __BLANK__ × Δx, where k is the __BLANK__ constant.",
            blanks: [
                { answer: 'k' },
                { answer: 'spring' },
            ],
            rationale: "Hooke's Law: F = kΔx, where k is the spring constant (N/m). The larger k, the stiffer the material.",
        },
        {
            id: 'fb-t10-2',
            stem: 'Complete the stress equation.',
            template: 'Tensile stress σ = __BLANK__ / __BLANK__, with units of __BLANK__.',
            blanks: [
                { answer: 'F' },
                { answer: 'A' },
                { answer: 'Pa' },
            ],
            rationale: 'Stress = Force/Area = F/A, measured in pascals (Pa) or N/m².',
        },
        {
            id: 'fb-t10-3',
            stem: 'Complete the strain equation.',
            template: 'Tensile strain ε = __BLANK__ / L, where ΔL is the extension. Strain has __BLANK__ units.',
            blanks: [
                { answer: 'ΔL' },
                { answer: 'no' },
            ],
            rationale: 'Strain = ΔL/L (extension/original length). It is dimensionless because both quantities are lengths.',
        },
        {
            id: 'fb-t10-4',
            stem: 'Complete the Young modulus equation.',
            template: 'Young modulus E = __BLANK__ / __BLANK__ = FL / (A × ΔL)',
            blanks: [
                { answer: 'stress' },
                { answer: 'strain' },
            ],
            rationale: 'Young modulus E = stress/strain = (F/A)/(ΔL/L) = FL/(AΔL). It measures material stiffness.',
        },
        {
            id: 'fb-t10-5',
            stem: 'Calculate the spring constant.',
            template: 'A spring extends by 0.020 m under a 50 N force. The spring constant k = __BLANK__ N/m.',
            blanks: [
                { answer: '2500' },
            ],
            rationale: 'k = F/x = 50/0.020 = 2500 N/m.',
        },
        {
            id: 'fb-t10-6',
            stem: 'Calculate strain from extension.',
            template: 'A 2.5 m wire extends by 0.50 mm. The strain = __BLANK__ × 10⁻⁴.',
            blanks: [
                { answer: '2.0' },
            ],
            rationale: 'Strain = ΔL/L = (0.50 × 10⁻³)/2.5 = 0.20 × 10⁻³ = 2.0 × 10⁻⁴.',
        },
        {
            id: 'fb-t10-7',
            stem: 'Identify the graph feature.',
            template: 'The __BLANK__ of proportionality is where the force-extension graph starts to curve.',
            blanks: [
                { answer: 'limit' },
            ],
            rationale: 'The limit of proportionality marks the end of the linear (Hooke\'s Law) region on the force-extension graph.',
        },
        {
            id: 'fb-t10-8',
            stem: 'Elastic strain energy formula.',
            template: 'Elastic strain energy E_el = __BLANK__ k x², which also equals the __BLANK__ under the force-extension graph.',
            blanks: [
                { answer: '½' },
                { answer: 'area' },
            ],
            rationale: 'E_el = ½kx² = ½Fx = area under the F-x graph. This is the work done in stretching.',
        },
        {
            id: 'fb-t10-9',
            stem: 'Complete the area calculation.',
            template: 'For a spring with k = 400 N/m extended by 0.050 m, E_el = __BLANK__ J.',
            blanks: [
                { answer: '0.50' },
            ],
            rationale: 'E_el = ½kx² = 0.5 × 400 × (0.050)² = 0.5 × 400 × 0.0025 = 0.50 J.',
        },
        {
            id: 'fb-t10-10',
            stem: 'Identify material properties.',
            template: 'A __BLANK__ material breaks without significant plastic deformation. A __BLANK__ material can be drawn into wires.',
            blanks: [
                { answer: 'brittle' },
                { answer: 'ductile' },
            ],
            rationale: 'Brittle materials (glass, ceramics) fracture with little plastic deformation. Ductile materials (copper, steel) have large plastic regions.',
        },
        {
            id: 'fb-t10-11',
            stem: 'Young modulus experiment variables.',
            template: 'In the Young modulus experiment, the independent variable is applied __BLANK__ and the dependent variable is __BLANK__.',
            blanks: [
                { answer: 'force' },
                { answer: 'extension' },
            ],
            rationale: 'We vary the force (by adding masses) and measure the resulting extension. Control variables include wire length and diameter.',
        },
        {
            id: 'fb-t10-12',
            stem: 'Complete the cross-sectional area formula.',
            template: 'For a wire of diameter d, cross-sectional area A = __BLANK__(d/2)² = __BLANK__d²/4.',
            blanks: [
                { answer: 'π' },
                { answer: 'π' },
            ],
            rationale: 'A = πr² = π(d/2)² = πd²/4. A common error is using d instead of r.',
        },
        {
            id: 'fb-t10-13',
            stem: 'Calculate Young modulus.',
            template: 'If stress = 4.0 × 10⁸ Pa and strain = 2.0 × 10⁻³, then Young modulus E = __BLANK__ GPa.',
            blanks: [
                { answer: '200' },
            ],
            rationale: 'E = stress/strain = (4.0 × 10⁸)/(2.0 × 10⁻³) = 2.0 × 10¹¹ Pa = 200 GPa.',
        },
        {
            id: 'fb-t10-14',
            stem: 'Identify hysteresis.',
            template: 'In a hysteresis loop, the unloading curve lies __BLANK__ the loading curve. The loop area represents energy lost as __BLANK__.',
            blanks: [
                { answer: 'below' },
                { answer: 'heat' },
            ],
            rationale: 'The unloading curve is below the loading curve. The enclosed area equals energy dissipated as heat per cycle.',
        },
        {
            id: 'fb-t10-15',
            stem: 'Compare spring combinations.',
            template: 'For springs in series, the effective spring constant is __BLANK__ than individual springs. For springs in parallel, it is __BLANK__.',
            blanks: [
                { answer: 'smaller' },
                { answer: 'larger' },
            ],
            rationale: 'Series: 1/k_eff = 1/k₁ + 1/k₂ (softer). Parallel: k_eff = k₁ + k₂ (stiffer).',
        },
    ],

    dragdrop: [
        {
            id: 'dd-t10-1',
            stem: 'Sort these materials by their Young modulus (lowest to highest).',
            categories: ['Lowest E', 'Medium E', 'Highest E'],
            items: [
                { text: 'Rubber (~0.01 GPa)', category: 'Lowest E' },
                { text: 'Bone (~20 GPa)', category: 'Lowest E' },
                { text: 'Aluminium (~70 GPa)', category: 'Medium E' },
                { text: 'Glass (~70 GPa)', category: 'Medium E' },
                { text: 'Copper (~130 GPa)', category: 'Medium E' },
                { text: 'Steel (~200 GPa)', category: 'Highest E' },
            ],
        },
        {
            id: 'dd-t10-2',
            stem: 'Classify these materials as brittle or ductile.',
            categories: ['Brittle', 'Ductile'],
            items: [
                { text: 'Glass', category: 'Brittle' },
                { text: 'Ceramic', category: 'Brittle' },
                { text: 'Cast iron', category: 'Brittle' },
                { text: 'Concrete', category: 'Brittle' },
                { text: 'Copper', category: 'Ductile' },
                { text: 'Steel', category: 'Ductile' },
                { text: 'Aluminium', category: 'Ductile' },
                { text: 'Gold', category: 'Ductile' },
            ],
        },
        {
            id: 'dd-t10-3',
            stem: 'Sort these points by their position on a stress-strain graph (from low to high strain).',
            categories: ['First', 'Second', 'Third', 'Fourth'],
            items: [
                { text: 'Limit of proportionality', category: 'First' },
                { text: 'Elastic limit', category: 'Second' },
                { text: 'Yield point', category: 'Third' },
                { text: 'Breaking stress', category: 'Fourth' },
            ],
        },
        {
            id: 'dd-t10-4',
            stem: 'Classify these quantities by whether they have units or are dimensionless.',
            categories: ['Has units (Pa)', 'Dimensionless'],
            items: [
                { text: 'Stress', category: 'Has units (Pa)' },
                { text: 'Young modulus', category: 'Has units (Pa)' },
                { text: 'Spring constant', category: 'Has units (Pa)' },
                { text: 'Strain', category: 'Dimensionless' },
                { text: 'Extension ratio', category: 'Dimensionless' },
            ],
        },
        {
            id: 'dd-t10-5',
            stem: 'Identify what each feature of a force-extension graph represents.',
            categories: ['Gradient', 'Area under curve', 'Point where curve starts'],
            items: [
                { text: 'Spring constant k', category: 'Gradient' },
                { text: 'Elastic strain energy', category: 'Area under curve' },
                { text: 'Limit of proportionality', category: 'Point where curve starts' },
                { text: 'Work done in stretching', category: 'Area under curve' },
                { text: 'Stiffness of spring', category: 'Gradient' },
            ],
        },
        {
            id: 'dd-t10-6',
            stem: 'Classify these descriptions as elastic or plastic deformation.',
            categories: ['Elastic deformation', 'Plastic deformation'],
            items: [
                { text: 'Material returns to original shape', category: 'Elastic deformation' },
                { text: 'Permanent change in shape', category: 'Plastic deformation' },
                { text: 'Occurs below elastic limit', category: 'Elastic deformation' },
                { text: 'Occurs above elastic limit', category: 'Plastic deformation' },
                { text: 'Energy fully recoverable', category: 'Elastic deformation' },
                { text: 'Energy dissipated as heat', category: 'Plastic deformation' },
            ],
        },
        {
            id: 'dd-t10-7',
            stem: 'Sort these by the type of graph they appear on.',
            categories: ['Force-extension graph', 'Stress-strain graph', 'Both graphs'],
            items: [
                { text: 'Gradient = spring constant k', category: 'Force-extension graph' },
                { text: 'Gradient = Young modulus E', category: 'Stress-strain graph' },
                { text: 'Elastic limit', category: 'Both graphs' },
                { text: 'Yield point', category: 'Both graphs' },
                { text: 'Area = work done', category: 'Force-extension graph' },
                { text: 'Breaking point', category: 'Both graphs' },
            ],
        },
        {
            id: 'dd-t10-8',
            stem: 'Classify these as properties of the sample or properties of the material.',
            categories: ['Sample property', 'Material property'],
            items: [
                { text: 'Spring constant k', category: 'Sample property' },
                { text: 'Young modulus E', category: 'Material property' },
                { text: 'Extension', category: 'Sample property' },
                { text: 'Stress', category: 'Sample property' },
                { text: 'Strain', category: 'Sample property' },
                { text: 'Breaking stress', category: 'Material property' },
            ],
        },
    ],

    sequence: [
        {
            id: 'seq-t10-1',
            stem: 'Put these steps of the Young modulus experiment in the correct order:',
            steps: [
                'Measure the original length L of the wire from clamp to marker',
                'Measure the diameter d at several points using a micrometer',
                'Calculate cross-sectional area A = π(d/2)²',
                'Add masses in equal increments and record extension ΔL',
                'Calculate stress = F/A and strain = ΔL/L for each reading',
                'Plot stress-strain graph; gradient = Young modulus E'
            ],
        },
        {
            id: 'seq-t10-2',
            stem: 'Order these points as they appear on a stress-strain curve (from low to high strain):',
            steps: [
                'Origin (zero stress, zero strain)',
                'Limit of proportionality',
                'Elastic limit',
                'Yield point',
                'Ultimate tensile stress',
                'Breaking stress (fracture)'
            ],
        },
        {
            id: 'seq-t10-3',
            stem: 'Order the steps to calculate elastic strain energy from a force-extension graph:',
            steps: [
                'Read the extension x from the x-axis',
                'Read the corresponding force F from the y-axis',
                'Verify the material is in the elastic (linear) region',
                'Calculate E_el = ½ × F × x',
                'Alternatively, calculate E_el = ½ × k × x²',
                'Check units are consistent (J for energy)'
            ],
        },
        {
            id: 'seq-t10-4',
            stem: 'Order these steps for measuring wire diameter in the Young modulus experiment:',
            steps: [
                'Zero the micrometer (check for zero error)',
                'Open the jaws and place the wire between them',
                'Tighten using the ratchet (not the thimble) until it clicks',
                'Read the main scale and thimble scale',
                'Record the reading to 0.01 mm precision',
                'Repeat at different positions and orientations, then calculate mean'
            ],
        },
        {
            id: 'seq-t10-5',
            stem: 'Order these steps to verify the elastic limit was not exceeded:',
            steps: [
                'Load the wire by adding masses incrementally',
                'Record extension at each mass',
                'Begin unloading by removing masses incrementally',
                'Record extension during unloading',
                'Plot both loading and unloading data on the same graph',
                'Check if the curves overlap — if yes, elastic limit was not exceeded'
            ],
        },
        {
            id: 'seq-t10-6',
            stem: 'Order the sequence of deformation when stretching a ductile material beyond its elastic limit:',
            steps: [
                'Linear elastic deformation (Hooke\'s Law region)',
                'Non-linear elastic deformation (still reversible)',
                'Yield point reached',
                'Plastic deformation begins (permanent)',
                'Strain hardening (material becomes stronger)',
                'Necking and fracture'
            ],
        },
        {
            id: 'seq-t10-7',
            stem: 'Order the procedure for finding Young modulus from a stress-strain graph:',
            steps: [
                'Plot stress (y-axis) against strain (x-axis)',
                'Identify the linear (straight-line) region',
                'Draw a best-fit straight line through the origin in this region',
                'Choose two points on the line far apart',
                'Calculate gradient = Δstress/Δstrain',
                'Gradient equals the Young modulus E'
            ],
        },
        {
            id: 'seq-t10-8',
            stem: 'Order the calculation steps to find Young modulus from raw measurements:',
            steps: [
                'Calculate cross-sectional area A = π(d/2)²',
                'Calculate force F = mg for each mass',
                'Calculate stress σ = F/A',
                'Calculate strain ε = ΔL/L',
                'Plot stress-strain graph',
                'Find gradient of linear region = E'
            ],
        },
    ],

    keyword: [
        {
            id: 'kw-t10-1',
            stem: "Define Hooke's Law. [2 marks]",
            marks: 2,
            keywords: ['extension', 'directly proportional', 'force', 'limit of proportionality'],
            modelAnswer: "Hooke's Law states that the extension of a material is directly proportional to the applied force, up to the limit of proportionality. This can be expressed as F = kΔx, where k is the spring constant.",
        },
        {
            id: 'kw-t10-2',
            stem: 'Define tensile stress and state its unit. [2 marks]',
            marks: 2,
            keywords: ['force', 'cross-sectional area', 'F/A', 'pascal', 'Pa', 'N/m²'],
            modelAnswer: 'Tensile stress is the force applied per unit cross-sectional area. It is calculated as σ = F/A and has units of pascals (Pa) or N/m².',
        },
        {
            id: 'kw-t10-3',
            stem: 'Define tensile strain and explain why it has no units. [2 marks]',
            marks: 2,
            keywords: ['extension', 'original length', 'ratio', 'ΔL/L', 'dimensionless', 'units cancel'],
            modelAnswer: 'Tensile strain is the extension divided by the original length (ε = ΔL/L). It has no units because it is a ratio of two lengths, so the metre units cancel out, making it dimensionless.',
        },
        {
            id: 'kw-t10-4',
            stem: 'Define the Young modulus and explain what it tells us about a material. [3 marks]',
            marks: 3,
            keywords: ['stress', 'strain', 'ratio', 'elastic region', 'stiffness', 'material property'],
            modelAnswer: 'The Young modulus E is the ratio of tensile stress to tensile strain in the elastic region (E = σ/ε). It is a material property that tells us about the stiffness of a material — a higher Young modulus means a stiffer material that is harder to deform.',
        },
        {
            id: 'kw-t10-5',
            stem: 'Explain the difference between elastic limit and limit of proportionality. [2 marks]',
            marks: 2,
            keywords: ['linear', 'proportional', 'returns to original', 'permanent', 'after'],
            modelAnswer: 'The limit of proportionality is where the force-extension relationship stops being linear (stops obeying Hooke\'s Law). The elastic limit is the maximum point after which the material will not return to its original shape. The elastic limit is always at or after the limit of proportionality.',
        },
        {
            id: 'kw-t10-6',
            stem: 'Describe the difference between elastic and plastic deformation. [2 marks]',
            marks: 2,
            keywords: ['returns to original', 'permanent', 'elastic limit', 'reversible', 'irreversible'],
            modelAnswer: 'Elastic deformation is reversible — the material returns to its original shape when the load is removed (occurs below elastic limit). Plastic deformation is permanent — the material does not return to its original shape after the load is removed (occurs above elastic limit).',
        },
        {
            id: 'kw-t10-7',
            stem: 'State the formula for elastic strain energy and explain what it represents. [2 marks]',
            marks: 2,
            keywords: ['½kx²', '½Fx', 'work done', 'stored', 'area under graph'],
            modelAnswer: 'Elastic strain energy E_el = ½kx² = ½Fx. It represents the work done in stretching a material, which is stored as potential energy and can be recovered when the material returns to its original shape. It equals the area under the force-extension graph.',
        },
        {
            id: 'kw-t10-8',
            stem: 'Explain what hysteresis is and what the area of the hysteresis loop represents. [2 marks]',
            marks: 2,
            keywords: ['loading', 'unloading', 'different paths', 'loop', 'energy', 'heat', 'dissipated'],
            modelAnswer: 'Hysteresis occurs when the loading and unloading curves of a material follow different paths, forming a loop. The area of this hysteresis loop represents the energy dissipated as heat during one complete loading-unloading cycle.',
        },
        {
            id: 'kw-t10-9',
            stem: 'Explain why a long wire is used in the Young modulus experiment. [2 marks]',
            marks: 2,
            keywords: ['extension', 'small', 'measure', 'maximise', 'stiff', 'easier'],
            modelAnswer: 'A long wire (1-2 m) is used to maximise the extension ΔL for a given force. Since stiff materials like steel have very small extensions, using a longer wire makes ΔL large enough to measure accurately with a vernier scale or travelling microscope.',
        },
        {
            id: 'kw-t10-10',
            stem: 'Describe how to check that the elastic limit was not exceeded in the Young modulus experiment. [2 marks]',
            marks: 2,
            keywords: ['loading', 'unloading', 'curves', 'overlap', 'same path', 'returns'],
            modelAnswer: 'Record extension both during loading (adding masses) and unloading (removing masses). If the loading and unloading curves overlap perfectly, the wire remained in the elastic region and the elastic limit was not exceeded. If they don\'t overlap, permanent deformation occurred.',
        },
        {
            id: 'kw-t10-11',
            stem: 'Distinguish between a brittle and a ductile material using stress-strain graph features. [3 marks]',
            marks: 3,
            keywords: ['plastic region', 'small', 'large', 'fracture', 'yield', 'curves'],
            modelAnswer: 'A brittle material (like glass) shows little or no plastic deformation — it fractures soon after the elastic limit with a small strain at break. A ductile material (like copper) has a large plastic region, showing significant plastic deformation before fracture, and has a clear yield point.',
        },
        {
            id: 'kw-t10-12',
            stem: 'State two sources of error in the Young modulus experiment and how each can be reduced. [4 marks]',
            marks: 4,
            keywords: ['diameter', 'micrometer', 'multiple readings', 'kinks', 'preload', 'parallax', 'vernier'],
            modelAnswer: 'Two sources of error: (1) Diameter measurement error — reduced by taking multiple micrometer readings at different positions and orientations, then using the mean. (2) Kinks in the wire — reduced by applying a small preload to straighten the wire before taking measurements. Other valid answers include parallax error (use set square) and small extensions (use longest possible wire and travelling microscope).',
        },
    ],

    flashcards: [
        // Hooke's Law
        {
            id: 'fc-t10-1',
            front: "State Hooke's Law equation.",
            back: "F = kΔx\n\nWhere F = force (N), k = spring constant (N/m), Δx = extension (m).\n\nValid up to the limit of proportionality.",
            topic: "Hooke's Law",
        },
        {
            id: 'fc-t10-2',
            front: 'What does the spring constant k represent?',
            back: "The spring constant k measures the stiffness of a material.\n\n• Larger k = stiffer material (harder to stretch)\n• Units: N/m\n• k = gradient of the force-extension graph",
            topic: "Hooke's Law",
        },
        {
            id: 'fc-t10-3',
            front: 'What is the limit of proportionality?',
            back: "The limit of proportionality is the point beyond which Hooke's Law is no longer true.\n\n• Extension is no longer proportional to force\n• Graph starts to curve (typically flattens)\n• Always before (or at) the elastic limit",
            topic: "Hooke's Law",
        },
        {
            id: 'fc-t10-4',
            front: 'What is the elastic limit?',
            back: 'The elastic limit is the maximum stress/extension a material can withstand and still return to its original shape when the load is removed.\n\n• Beyond this point = permanent deformation\n• Always at or after the limit of proportionality',
            topic: "Hooke's Law",
        },

        // Stress, Strain & Young Modulus
        {
            id: 'fc-t10-5',
            front: 'Define tensile stress and give its equation and units.',
            back: 'Tensile stress is force per unit cross-sectional area.\n\nσ = F/A\n\nUnits: pascals (Pa) or N/m²',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'fc-t10-6',
            front: 'Define tensile strain and explain why it has no units.',
            back: 'Tensile strain is the fractional change in length.\n\nε = ΔL/L\n\nNo units because it is a ratio of two lengths (metres cancel).',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'fc-t10-7',
            front: 'State the Young modulus equation in terms of F, A, L and ΔL.',
            back: 'E = σ/ε = (F/A)/(ΔL/L) = FL/(AΔL)\n\nYoung modulus = stress ÷ strain\n\nUnits: Pa (pascals)',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'fc-t10-8',
            front: 'Why is the Young modulus more useful than spring constant for comparing materials?',
            back: "The Young modulus E is a material property — it's independent of sample dimensions.\n\nThe spring constant k depends on:\n• The material AND\n• The sample's length and cross-section\n\nE allows comparison of stiffness regardless of size.",
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'fc-t10-9',
            front: 'Give typical Young modulus values for: steel, copper, rubber.',
            back: 'Steel: ~200 GPa (very stiff)\nCopper: ~130 GPa\nRubber: ~0.01 GPa (very flexible)\n\nSteel is about 20,000 times stiffer than rubber!',
            topic: 'Stress, Strain & Young Modulus',
        },
        {
            id: 'fc-t10-10',
            front: 'What does the gradient of a stress-strain graph represent?',
            back: 'Gradient = Young modulus E\n\n• Steeper gradient = stiffer material\n• Only true in the linear (elastic) region\n• Units of gradient: Pa',
            topic: 'Stress, Strain & Young Modulus',
        },

        // Force-Extension Graphs
        {
            id: 'fc-t10-11',
            front: 'What does the area under a force-extension graph represent?',
            back: 'Area under F-x graph = Work done = Elastic strain energy\n\nFor Hookean materials:\nE_el = ½Fx = ½kx²',
            topic: 'Force-Extension Graphs',
        },
        {
            id: 'fc-t10-12',
            front: 'What is the yield point?',
            back: 'The yield point is where the material:\n• Continues to stretch without additional force\n• Undergoes rapid plastic deformation\n• Atoms start to slide past each other\n\nBeyond the elastic limit.',
            topic: 'Force-Extension Graphs',
        },
        {
            id: 'fc-t10-13',
            front: 'Compare elastic and plastic deformation.',
            back: 'Elastic:\n• Reversible (returns to original)\n• Below elastic limit\n• Energy recoverable\n\nPlastic:\n• Permanent deformation\n• Above elastic limit\n• Energy dissipated as heat',
            topic: 'Force-Extension Graphs',
        },

        // Stress-Strain Graphs
        {
            id: 'fc-t10-14',
            front: 'What is breaking stress?',
            back: 'Breaking stress (fracture stress) is the stress at which the material completely breaks/fractures.\n\nAt this point, atoms separate completely.\n\nNot the same as ultimate tensile stress (UTS).',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'fc-t10-15',
            front: 'What characterises a brittle material on a stress-strain graph?',
            back: 'Brittle materials (glass, ceramic):\n• Little or no plastic region\n• Breaks soon after elastic limit\n• Small strain at fracture\n• No yield point',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'fc-t10-16',
            front: 'What characterises a ductile material?',
            back: 'Ductile materials (copper, steel):\n• Large plastic region\n• Can be drawn into wires\n• Clear yield point\n• Large strain before fracture\n• Curve continues after yield',
            topic: 'Stress-Strain Graphs',
        },
        {
            id: 'fc-t10-17',
            front: 'What does the total area under a stress-strain curve represent?',
            back: 'Total area = Toughness\n\nEnergy absorbed per unit volume before fracture.\n\nMaterials with large areas are tough (good for crash structures, helmets).',
            topic: 'Stress-Strain Graphs',
        },

        // Core Practical 5
        {
            id: 'fc-t10-18',
            front: 'In the Young modulus experiment, what are the independent and dependent variables?',
            back: 'Independent: Applied force F (varied by adding masses)\n\nDependent: Extension ΔL (measured for each force)\n\nControl: Wire length L, diameter d, temperature',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'fc-t10-19',
            front: 'Why is a micrometer used to measure wire diameter in the Young modulus experiment?',
            back: 'Micrometer precision: 0.01 mm\n\nDiameter uncertainty has large effect because:\n• Area A = πr² = π(d/2)²\n• d is squared, so error is doubled\n\nMust measure at multiple positions and orientations.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'fc-t10-20',
            front: 'State the correct formula for cross-sectional area of a wire.',
            back: 'A = πr² = π(d/2)² = πd²/4\n\nCommon error: using d instead of r gives area 4× too large.',
            topic: 'Core Practical 5: Young Modulus',
        },
        {
            id: 'fc-t10-21',
            front: 'How do you find Young modulus from the stress-strain graph?',
            back: '1. Plot stress (y) vs strain (x)\n2. Draw best-fit line through origin in linear region\n3. Gradient = Δσ/Δε = E\n\nUnits: Pa',
            topic: 'Core Practical 5: Young Modulus',
        },

        // Elastic Strain Energy
        {
            id: 'fc-t10-22',
            front: 'State the two forms of the elastic strain energy equation.',
            back: 'E_el = ½kx²\n\nOR\n\nE_el = ½Fx\n\nBoth valid for Hookean materials (since F = kx).\n\nUnits: joules (J)',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-23',
            front: 'What is hysteresis?',
            back: 'Hysteresis occurs when:\n• Loading and unloading curves differ\n• Unloading curve lies below loading curve\n• Forms a closed loop\n\nLoop area = energy lost as heat per cycle',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-24',
            front: 'What does the hysteresis loop area represent?',
            back: 'Hysteresis loop area = Energy dissipated as heat per loading-unloading cycle.\n\nCommon in rubber and inelastic materials.\n\nEnergy not fully recovered during unloading.',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-25',
            front: 'Give three applications of elastic strain energy.',
            back: '1. Bows/crossbows — energy stored in bent limbs\n2. Vehicle suspension — absorb road bumps\n3. Catapults/slingshots — stored energy released to projectile\n\nMore extension or larger k = more stored energy.',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-26',
            front: 'Compare springs in series vs parallel.',
            back: 'Series: 1/k_eff = 1/k₁ + 1/k₂\n• k_eff is smaller (softer)\n• Extensions add up\n\nParallel: k_eff = k₁ + k₂\n• k_eff is larger (stiffer)\n• Forces add up',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-27',
            front: 'For elastic materials, how do loading and unloading curves compare?',
            back: 'For perfectly elastic materials:\n• Loading and unloading curves are identical\n• Same straight line\n• All energy stored is recovered\n• No hysteresis loop',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-28',
            front: 'Calculate E_el for k = 500 N/m, x = 0.040 m.',
            back: 'E_el = ½kx²\n\n= 0.5 × 500 × (0.040)²\n= 0.5 × 500 × 0.0016\n= 0.40 J',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-29',
            front: 'A wire extends 1.2 mm under 60 N. Calculate elastic strain energy.',
            back: 'E_el = ½Fx\n\n= 0.5 × 60 × (1.2 × 10⁻³)\n= 0.5 × 60 × 0.0012\n= 0.036 J = 36 mJ',
            topic: 'Elastic Strain Energy',
        },
        {
            id: 'fc-t10-30',
            front: 'List key sources of error in the Young modulus practical.',
            back: '1. Diameter measurement — use micrometer, multiple readings\n2. Wire kinks — apply preload to straighten\n3. Parallax error — use set square\n4. Small extensions — use longest wire, travelling microscope\n5. Exceeding elastic limit — check loading/unloading overlap',
            topic: 'Core Practical 5: Young Modulus',
        },
    ],
};
