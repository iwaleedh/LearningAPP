export const exercises_physics_1_5 = {
    mcq: [
        // Kinetic Energy
        {
            id: 'mcq-t5-1',
            stem: 'Which equation correctly represents kinetic energy?',
            options: ['KE = mv', 'KE = ½mv', 'KE = mgh', 'KE = Fd'],
            correctAnswer: 1,
            rationale: 'Kinetic energy (KE) is energy due to motion, given by KE = ½mv² where m is mass and v is speed. This equation shows KE is proportional to the square of speed.',
            topic: 'Kinetic Energy'
        },
        {
            id: 'mcq-t5-2',
            stem: 'A 2 kg mass is moving at 5 m/s. What is its kinetic energy?',
            options: ['5 J', '25 J', '10 J', '2.5 J'],
            correctAnswer: 1,
            rationale: 'KE = ½mv² = ½ × 2 × 5² = ½ × 2 × 25 = 25 J. Option B (5 J) uses m × v instead of ½mv². Option C (10 J) forgets the ½ factor.',
            topic: 'Kinetic Energy'
        },
        {
            id: 'mcq-t5-3',
            stem: 'If the speed of an object is doubled, what happens to its kinetic energy?',
            options: ['Doubles', 'Quadruples', 'Quadruples + some', 'Cannot be determined'],
            correctAnswer: 1,
            rationale: 'Since KE ∝ v², doubling speed quadruples kinetic energy (2² = 4). This is because KE = ½mv² depends on the square of speed.',
            topic: 'Kinetic Energy'
        },
        {
            id: 'mcq-t5-4',
            stem: 'A ball is thrown upward and one is thrown downward. Both have the same speed at the maximum height of their trajectories. What can be said about their kinetic energies?',
            options: ['The upward ball has greater KE', 'The downward ball has greater KE', 'Both have equal KE', 'Cannot be compared'],
            correctAnswer: 2,
            rationale: 'Kinetic energy is always positive (it is a scalar). Both balls have the same speed at the maximum height, so they have equal kinetic energies. Direction does not affect KE.',
            topic: 'Kinetic Energy'
        },
        {
            id: 'mcq-t5-5',
            stem: 'In a friction-free roller coaster, which statement about energy is correct?',
            options: ['KE + GPE increases', 'KE decreases', 'GPE + KE = constant', 'Total energy increases'],
            correctAnswer: 0,
            rationale: 'In a friction-free system, total mechanical energy (KE + GPE) is conserved. As the coaster drops, GPE decreases but KE increases proportionally. The sum KE + GPE remains constant throughout.',
            topic: 'Conservation of Energy'
        },

        // Gravitational Potential Energy
        {
            id: 'mcq-t5-6',
            stem: 'A 0.5 kg book is lifted from the floor to a shelf 2.0 m high. What is the gain in gravitational potential energy?',
            options: ['9.81 J', '5.0 J', '10 J', '1.0 kJ'],
            correctAnswer: 0,
            rationale: 'GPE = mgh = 0.5 × 9.81 × 2.0 = 9.81 J ≈ 0.01 kJ. Option A incorrectly uses g = 9.81 without calculating. Option B uses only mg (0.5 × 9.8 = 4.9 N) without the height factor.',
            topic: 'Gravitational Potential Energy'
        },
        {
            id: 'mcq-t5-7',
            stem: 'Which of the following statements about GPE is correct?',
            options: ['GPE depends on absolute height above sea level', 'GPE is always positive', 'GPE can be negative if reference is below sea level', 'GPE depends on mass and height only'],
            correctAnswer: 3,
            rationale: 'GPE = mgh is the change in gravitational potential energy when moving an object of mass m by height h. GPE is always positive because m, g, and h² are all positive quantities. GPE depends on both mass and height. If reference level is below the object, GPE can be negative (lost), but the equation mgh still gives the change in GPE.',
            topic: 'Gravitational Potential Energy'
        },
        {
            id: 'mcq-t5-8',
            stem: 'A 74 kg man climbs 750 m. What is his gain in GPE?',
            options: ['540 kJ', '54 kJ', '6.8 kJ', '5.4 MJ'],
            correctAnswer: 0,
            rationale: 'GPE = mgh = 74 × 9.81 × 750 = 74 × 7357.5 = 544,455 J ≈ 544 kJ. Option A uses incorrect units (J). Option B correctly converts to kJ (544/1000 ≈ 0.54 MJ). Option C and D have incorrect calculations.',
            topic: 'Gravitational Potential Energy'
        },

        // Power
        {
            id: 'mcq-t5-9',
            stem: 'Which is the correct definition of power?',
            options: ['Force divided by time', 'Rate of energy transfer per unit time', 'Work done per second', 'Force times velocity'],
            correctAnswer: 1,
            rationale: 'Power is the rate at which energy is transferred or work is done. P = W/t where W is work done (J) and t is time (s). The unit of power is the watt (W), where 1 W = 1 J/s. P can also be expressed as Fv when a constant force F is applied at constant velocity v.',
            topic: 'Power'
        },
        {
            id: 'mcq-t5-10',
            stem: 'A motor applies a constant force of 200 N to move a vehicle at 10 m/s. What is the power developed?',
            options: ['500 W', '1000 W', '2000 W', '2 kW'],
            correctAnswer: 3,
            rationale: 'P = Fv = 200 × 10 = 2000 W = 2 kW. Option A (500 W) forgets to multiply by velocity. Option B (1000 W) is 10× too high. Option C (2000 W) is 5× too high.',
            topic: 'Power'
        },
        {
            id: 'mcq-t5-11',
            stem: 'Which statement about power and energy is correct?',
            options: ['Power is a conserved quantity', 'Power depends on force only', 'Power can be calculated from work and time', 'Power equals rate of change of kinetic energy'],
            correctAnswer: 2,
            rationale: 'Power is NOT conserved — it is the rate of energy transfer, not a quantity itself. Power can be calculated as P = W/t or as P = Fv. Power equals the rate at which work is done (energy per second), which is NOT the same as energy itself.',
            topic: 'Power'
        },

        // Efficiency
        {
            id: 'mcq-t5-12',
            stem: 'A device uses 500 J of electrical energy and produces 100 J of useful output. What is its efficiency?',
            options: ['20%', '40%', '50%', '80%'],
            correctAnswer: 0,
            rationale: 'Efficiency η = (useful output / total input) × 100% = (100/500) × 100% = 20%. The useful output is what achieves the intended purpose; wasted energy is converted to other forms (heat, sound, etc.).',
            topic: 'Efficiency'
        },
        {
            id: 'mcq-t5-13',
            stem: 'A car engine has a power input of 40 kW and delivers useful mechanical power of 14 kW. What is the efficiency of the engine?',
            options: ['20%', '25%', '30%', '35%'],
            correctAnswer: 3,
            rationale: 'Efficiency = (useful power output / total power input) × 100% = (14/40) × 100% = 35%. The engine wastes 65% of its input power, primarily as heat in exhaust and friction losses.',
            topic: 'Efficiency'
        },
        {
            id: 'mcq-t5-14',
            stem: 'Which of the following is NOT a way to improve the efficiency of a device?',
            options: ['Increase input power', 'Reduce useful output', 'Reduce energy losses', 'Increase both'],
            correctAnswer: 1,
            rationale: 'Efficiency η = useful/total. To improve efficiency, you should REDUCE WASTED ENERGY (friction, heat, sound, air resistance). Increasing input power or reducing useful output would either maintain or decrease efficiency depending on proportion.',
            topic: 'Efficiency'
        },

        // Hooke's Law
        {
            id: 'mcq-t5-15',
            stem: 'Which graph region represents Hooke\'s Law being obeyed?',
            options: ['Linear region near origin', 'Non-linear curved region', 'Flat region at the end', 'Steep region at the start'],
            correctAnswer: 0,
            rationale: 'Hooke\'s Law (F = -kx) is obeyed in the linear elastic region near the origin. This is where the force is proportional to extension (F ∝ x) and the graph is a straight line through the origin. The gradient gives the spring constant k.',
            topic: 'Hooke\'s Law'
        },
        {
            id: 'mcq-t5-16',
            stem: 'What does the gradient of a force-extension graph represent in the linear region?',
            options: ['Young Modulus E', 'Spring constant k', '1/k', 'Reciprocal of k'],
            correctAnswer: 1,
            rationale: 'In the linear region obeying Hooke\'s Law, the gradient of the force-extension graph equals the spring constant k. The Young Modulus E = stress/strain is a material property, not directly shown by the gradient.',
            topic: 'Hooke\'s Law'
        },

        // Stress, Strain & Young Modulus
        {
            id: 'mcq-t5-17',
            stem: 'How is stress defined for a wire?',
            options: ['Force divided by cross-sectional area', 'Force divided by original length', 'Force per unit area', 'Change in force per unit area'],
            correctAnswer: 0,
            rationale: 'Stress σ = F/A, where F is the applied force and A is the cross-sectional area of the wire. It is measured in pascals (Pa) or N/m². Option B uses original length which relates to strain, not stress.',
            topic: 'Stress, Strain & Young Modulus'
        },
        {
            id: 'mcq-t5-18',
            stem: 'A wire of original length 2.0 m is stretched to 2.2 m. What is the strain?',
            options: ['0.1', '1.1', '2.0', '4.0'],
            correctAnswer: 0,
            rationale: 'Strain ε = ΔL/L = (2.2 - 2.0) / 2.0 = 0.2 / 2.0 = 0.1. This is a ratio with no units. Option B uses extension (1.1) instead of change in extension (1.1).',
            topic: 'Stress, Strain & Young Modulus'
        },
        {
            id: 'mcq-t5-19',
            stem: 'Which material property determines how much a material deforms under a given stress?',
            options: ['Density', 'Young Modulus', 'Ultimate tensile strength', 'Yield stress'],
            correctAnswer: 1,
            rationale: 'Young Modulus E is the measure of a material\'s stiffness. It is defined as stress divided by strain (E = σ/ε) for the linear elastic region. A higher Young Modulus means the material is stiffer — it requires more stress to produce the same strain. Yield stress is where the material begins to plastically deform; ultimate tensile strength is where it finally breaks.',
            topic: 'Stress, Strain & Young Modulus'
        },
        {
            id: 'mcq-t5-20',
            stem: 'On a stress-strain graph, what does the gradient represent in the linear region?',
            options: ['Stress', 'Strain', 'Young Modulus', '1/E'],
            correctAnswer: 0,
            rationale: 'On a stress-strain graph with stress on the y-axis and strain on the x-axis, the gradient in the linear region equals the Young Modulus E = stress/strain. This is the fundamental definition of Young Modulus.',
            topic: 'Stress, Strain & Young Modulus'
        },

        // Elastic Strain Energy
        {
            id: 'mcq-t5-21',
            stem: 'How is elastic strain energy calculated for a spring?',
            options: ['E = ½Fx', 'E = ½kx²', 'E = Area under F-x graph', 'E = FΔL + ½kΔL²'],
            correctAnswer: 3,
            rationale: 'Elastic strain energy E = ½kx², where k is the spring constant and x is the extension. This is equivalent to the area under the force-extension graph. Option A (E = ½Fx) would be for constant force. Option B (E = ½kx²) requires the spring constant. Option C (E = area) would be for varying force. Option D (E = FΔL + ½kΔL²) is the complete formula including both work done and stored elastic energy.',
            topic: 'Elastic Strain Energy'
        },

        // Core Practical 5
        {
            id: 'mcq-t5-22',
            stem: 'In determining Young Modulus, what measurement is most critical to obtain accurately?',
            options: ['Original length L', 'Extension ΔL', 'Diameter of wire', 'Force applied F'],
            correctAnswer: 0,
            rationale: 'Original length L is most critical because all calculations (stress = F/A and strain = ΔL/L) depend directly on L. Errors in L produce proportional errors in stress and Young Modulus. Accurate measurement of the original unstretched length is essential for reliable results.',
            topic: 'Core Practical 5'
        },

        // Force-Extension Graphs
        {
            id: 'mcq-t5-23',
            stem: 'What point on a force-extension graph indicates the limit of proportionality (Hooke\'s Law)?',
            options: ['Yield point', 'Breaking point', 'Origin', 'Infinite stiffness'],
            correctAnswer: 0,
            rationale: 'The yield point (elastic limit) is where the graph stops being linear and begins to curve. This marks the transition from elastic to plastic deformation. The breaking point is where the wire finally fractures. Hooke\'s Law does not apply beyond the yield point.',
            topic: 'Force-Extension Graphs'
        },
        {
            id: 'mcq-t5-24',
            stem: 'A force-extension graph shows a straight line passing through the origin. What does this tell you about the material?',
            options: ['It has infinite stiffness', 'It is very stiff', 'It has infinite Young Modulus', 'It is perfectly elastic'],
            correctAnswer: 2,
            rationale: 'A straight line through the origin on a force-extension graph indicates Hooke\'s Law is being obeyed. The gradient equals the spring constant k. The material is elastic in this region. Infinite stiffness and infinite Young Modulus are not meaningful statements — stiffness and Young Modulus are finite values for real materials.',
            topic: 'Hooke\'s Law'
        },
        {
            id: 'mcq-t5-25',
            stem: 'What does the area under a force-extension graph up to the elastic limit represent?',
            options: ['Total work done', 'Elastic strain energy stored', 'Plastic work done', 'Total energy transferred'],
            correctAnswer: 1,
            rationale: 'The area under the force-extension graph up to the elastic limit represents the elastic strain energy stored in the material, calculated as E = ½kx². This is the energy that can be recovered when the force is removed — the material returns to its original shape. Beyond the elastic limit, additional work goes into plastic (permanent) deformation.',
            topic: 'Force-Extension Graphs'
        },

        // Real-world applications
        {
            id: 'mcq-t5-26',
            stem: 'Which of these materials typically has the highest Young Modulus?',
            options: ['Steel (~200 GPa)', 'Copper (~120 GPa)', 'Rubber (~0.01-0.1 GPa)', 'Aluminium (~70 GPa)'],
            correctAnswer: 0,
            rationale: 'Steel has a Young Modulus of approximately 200 GPa, making it very stiff and resistant to deformation. Copper (~120 GPa) is less stiff but still a strong engineering material. Rubber has a very low Young Modulus (~0.01-0.1 GPa), meaning it deforms easily and is highly elastic. Aluminium (~70 GPa) is stiffer than copper but not as stiff as steel.',
            topic: 'Stress, Strain & Young Modulus'
        }
    ],
    fillblank: [
        // Kinetic Energy
        {
            id: 'fb-t5-1',
            stem: 'Kinetic energy is given by the equation KE = __BLANK__',
            blanks: [{ answer: '½mv²' }],
            rationale: 'The equation for kinetic energy is KE = ½mv², where m is mass in kg and v is speed in m/s. Energy is measured in joules (J).'
        },
        {
            id: 'fb-t5-2',
            stem: 'A mass of 5 kg moving at 10 m/s has kinetic energy of __BLANK__ J.',
            blanks: [{ answer: '250' }],
            rationale: 'KE = ½mv² = ½ × 5 × 10² = 250 J. Remember that mass (m) is NOT squared, only speed (v) is squared.'
        },
        {
            id: 'fb-t5-3',
            stem: 'Gravitational potential energy is calculated using GPE = m__BLANK__.',
            blanks: [{ answer: 'gh' }],
            rationale: 'GPE = mgh, where m is mass in kg, g is gravitational field strength (9.81 m/s² on Earth), and h is height in metres above the reference level.'
        },
        {
            id: 'fb-t5-4',
            stem: 'GPE gained when an object is lifted depends on its __BLANK__ and the change in height.',
            blanks: [{ answer: 'mass' }, { answer: 'height' }],
            rationale: 'GPE = mgh depends on both mass and height. A more massive object lifted higher gains more GPE. The change in height (h) is what determines the change in GPE.'
        },

        // Power
        {
            id: 'fb-t5-5',
            stem: 'Power is defined as P = __BLANK__ / t.',
            blanks: [{ answer: 'W' }],
            rationale: 'Power P is work done per unit time: P = W/t, where W is work done in joules (J) and t is time in seconds (s).'
        },
        {
            id: 'fb-t5-6',
            stem: 'When a constant force F is applied at constant velocity v, power simplifies to P = __BLANK__.',
            blanks: [{ answer: 'Fv' }],
            rationale: 'P = W/t = Fv/t. When a constant force is applied at constant velocity, the power formula simplifies from W/t to Fv since the work done per unit distance (W) divided by unit time (1/v) equals force times velocity.'
        },
        {
            id: 'fb-t5-7',
            stem: 'Power can also be expressed as P = Δ__BLANK__ / Δt.',
            blanks: [{ answer: 'E' }, { answer: 't' }],
            rationale: 'P = ΔE/Δt, where ΔE is change in energy. This formula shows power as the rate of energy transfer. The change in energy ΔE is calculated as final energy minus initial energy.'
        },

        // Efficiency
        {
            id: 'fb-t5-8',
            stem: 'Efficiency is defined as η = __BLANK__ output / __BLANK__ input.',
            blanks: [{ answer: 'useful' }, { answer: 'total' }],
            rationale: 'Efficiency is the ratio of useful energy output to total energy input. η = (useful output / total input) × 100%. Energy is always conserved in any closed system.'
        },
        {
            id: 'fb-t5-9',
            stem: 'When expressed as a decimal, efficiency is a value between __BLANK__ and 1.',
            blanks: [{ answer: '0' }],
            rationale: 'Efficiency as a decimal is a proportion between 0 and 1. 0% efficiency means no useful output (all energy is wasted). 100% efficiency means all input energy becomes useful output (no energy wasted).'
        },

        // Hooke's Law
        {
            id: 'fb-t5-10',
            stem: 'Hooke\'s Law is expressed as F = __BLANK__x, where k is the spring constant.',
            blanks: [{ answer: '-k' }],
            rationale: 'Hooke\'s Law: F = -kx, where k is the spring constant in N/m and x is the extension in metres. The negative sign indicates the restoring force opposes the extension.'
        },
        {
            id: 'fb-t5-11',
            stem: 'The gradient of a force-extension graph in the linear region equals the __BLANK__ constant.',
            blanks: [{ answer: 'spring' }],
            rationale: 'In the linear region where Hooke\'s Law is obeyed (F = -kx), the gradient of the force-extension graph equals the spring constant k. The steeper the gradient, the stiffer the spring.'
        },

        // Stress, Strain & Young Modulus
        {
            id: 'fb-t5-12',
            stem: 'Stress σ is defined as σ = F/__BLANK__.',
            blanks: [{ answer: 'A' }],
            rationale: 'Stress is force per unit cross-sectional area: σ = F/A, where F is force in newtons (N) and A is cross-sectional area in m². The unit is pascals (Pa) or N/m².'
        },
        {
            id: 'fb-t5-13',
            stem: 'Strain ε is defined as ε = ΔL/__BLANK__.',
            blanks: [{ answer: 'L' }],
            rationale: 'Strain is the ratio of extension to original length: ε = ΔL/L, where ΔL is the change in length and L is the original unstretched length. Strain has no units because it is a ratio of two lengths.'
        },
        {
            id: 'fb-t5-14',
            stem: 'Young Modulus E is defined as E = σ/__BLANK__.',
            blanks: [{ answer: 'ε' }],
            rationale: 'Young Modulus is stress divided by strain for the linear elastic region: E = σ/ε. It measures the stiffness of a material and has units of pascals (Pa) or N/m². A higher E means a stiffer material.'
        },

        // Elastic Strain Energy
        {
            id: 'fb-t5-15',
            stem: 'Elastic strain energy stored in a spring is E = __BLANK__kx².',
            blanks: [{ answer: '½' }],
            rationale: 'Elastic strain energy E = ½kx², where k is the spring constant and x is the extension. This represents the area under the force-extension graph up to the elastic limit.'
        },

        // Core Practical 5
        {
            id: 'fb-t5-16',
            stem: 'In determining Young Modulus, the most critical measurement is the unstretched wire __BLANK__ L.',
            blanks: [{ answer: 'length' }],
            rationale: 'Original length L is the most critical measurement because stress = F/A and strain = ΔL/L both depend directly on it. Any error in L produces proportional errors in stress and Young Modulus values.'
        },

        // Force-Extension Graphs
        {
            id: 'fb-t5-17',
            stem: 'The point where the force-extension graph stops being linear is called the __BLANK__ point.',
            blanks: [{ answer: 'yield' }],
            rationale: 'The yield point (or elastic limit) is where the graph stops being a straight line and begins to curve. Beyond this point, Hooke\'s Law does not apply and the material undergoes plastic (permanent) deformation.'
        }
    ],
    dragdrop: [
        // Energy Types
        {
            id: 'dd-t5-1',
            stem: 'Sort these energy forms:',
            categories: ['Kinetic Energy', 'Gravitational Potential Energy', 'Elastic Strain Energy', 'Thermal Energy', 'Sound Energy'],
            items: [
                { text: 'Energy due to motion of an object', category: 'Kinetic Energy' },
                { text: 'Energy stored due to position in a gravitational field', category: 'Gravitational Potential Energy' },
                { text: 'Energy stored in a stretched/compressed spring', category: 'Elastic Strain Energy' },
                { text: 'Energy lost as heat to surroundings', category: 'Thermal Energy' },
                { text: 'Energy carried by sound waves', category: 'Sound Energy' }
            ]
        },
        {
            id: 'dd-t5-2',
            stem: 'Sort these materials by their stiffness (Young Modulus):',
            categories: ['Very Stiff (E > 100 GPa)', 'Stiff (50-100 GPa)', 'Moderate (10-50 GPa)', 'Flexible (1-10 GPa)', 'Very Flexible (< 1 GPa)'],
            items: [
                { text: 'Steel (~200 GPa)', category: 'Very Stiff (E > 100 GPa)' },
                { text: 'Copper (~120 GPa)', category: 'Stiff (50-100 GPa)' },
                { text: 'Aluminium (~70 GPa)', category: 'Moderate (10-50 GPa)' },
                { text: 'Rubber (~0.01-0.1 GPa)', category: 'Flexible (1-10 GPa)' },
                { text: 'Biological tissue (~0.1 GPa)', category: 'Very Flexible (< 1 GPa)' },
                { text: 'Spider silk (~0.5 GPa)', category: 'Very Flexible (< 1 GPa)' }
            ]
        },
        {
            id: 'dd-t5-3',
            stem: 'Classify these energy loss mechanisms:',
            categories: ['Friction between moving parts', 'Air resistance', 'Electrical resistance heating', 'Sound radiation', 'Other losses'],
            items: [
                { text: 'Heat generated when surfaces rub together', category: 'Friction between moving parts' },
                { text: 'Drag force opposing motion through air', category: 'Air resistance' },
                { text: 'Heat generated by current in conductors', category: 'Electrical resistance heating' },
                { text: 'Pressure waves carrying energy away', category: 'Sound radiation' },
                { text: 'Vibration and wear of moving parts', category: 'Other losses' }
            ]
        },

        // Power Sources
        {
            id: 'dd-t5-4',
            stem: 'Sort these by their typical power output:',
            categories: ['< 10 W', '10-100 W', '100 W - 1 kW', '1-10 kW'],
            items: [
                { text: 'LED light bulb (~10 W)', category: '< 10 W' },
                { text: 'Laptop charger (~50 W)', category: '10-100 W' },
                { text: 'Electric kettle (~1500 W)', category: '100 W - 1 kW' },
                { text: 'Car engine (~50 kW)', category: '1-10 kW' },
                { text: 'Electric train motor (~1 MW)', category: '1-10 kW' }
            ]
        },

        // Hooke's Law regions
        {
            id: 'dd-t5-5',
            stem: 'Sort these force-extension graph regions:',
            categories: ['Hooke\'s Law region (linear, F ∝ x)', 'Plastic region (curved, F ≠ -kx)', 'Yield point', 'Breaking point', 'Loading/Unloading path'],
            items: [
                { text: 'Straight line through origin, gradient = k', category: 'Hooke\'s Law region (linear, F ∝ x)' },
                { text: 'Curved region beyond elastic limit', category: 'Plastic region (curved, F ≠ -kx)' },
                { text: 'Point where graph stops being linear', category: 'Yield point' },
                { text: 'Maximum force before wire breaks', category: 'Breaking point' },
                { text: 'Extension when force removed (return to origin)', category: 'Loading/Unloading path' }
            ]
        }
    ],
    sequence: [
        // Kinetic Energy
        {
            id: 'seq-t5-1',
            stem: 'Order these steps to calculate kinetic energy:',
            steps: [
                'Identify the mass m of the object (in kg)',
                'Identify the speed v of the object (in m/s)',
                'Apply the formula KE = ½mv²',
                'Calculate the result (in joules)',
                'Include units in the final answer (J)'
            ]
        },
        {
            id: 'seq-t5-2',
            stem: 'Order these steps to solve a conservation of energy problem (no friction):',
            steps: [
                'Identify initial and final energy states (GPE + KE)',
                'Apply conservation principle: total energy = constant',
                'Set up equation: GPE_initial + KE_initial = GPE_final + KE_final',
                'Calculate the unknown quantity using given values',
                'Verify that energy is conserved (sum = sum)'
            ]
        },
        {
            id: 'seq-t5-3',
            stem: 'Order these steps to calculate efficiency:',
            steps: [
                'Identify total energy input to the system',
                'Identify useful energy output from the system',
                'Identify wasted energy output from the system',
                'Apply efficiency formula: η = (useful / total) × 100%',
                'Express as a decimal or percentage as required'
            ]
        },

        // GPE
        {
            id: 'seq-t5-4',
            stem: 'Order these steps to solve a falling object problem using GPE and KE:',
            steps: [
                'Choose reference level (where h = 0)',
                'Calculate GPE lost: ΔGPE = mgh',
                'Calculate KE gained: ΔKE = ½m(v_f² - v_i²)',
                'Apply conservation: ΔGPE = ΔKE (ignoring air resistance)',
                'Find final velocity or impact speed'
            ]
        },

        // Power
        {
            id: 'seq-t5-5',
            stem: 'Order these steps to calculate power from force and velocity:',
            steps: [
                'Identify the force F applied (in newtons)',
                'Identify the velocity v (in m/s)',
                'Identify the displacement s (in metres)',
                'Calculate work done: W = Fs or W = Fd',
                'Calculate time taken: t = s/v',
                'Apply power formula: P = W/t'
            ]
        },

        // Hooke's Law & Young Modulus
        {
            id: 'seq-t5-6',
            stem: 'Order these steps to determine Young Modulus from a force-extension graph:',
            steps: [
                'Draw a straight line of best fit through the linear region',
                'Calculate the gradient of the line: gradient = ΔF/Δx',
                'Identify the cross-sectional area A of the wire (in m²)',
                'Calculate stress at any point: σ = F/A',
                'Plot stress against strain to verify linear relationship',
                'Determine Young Modulus: E = σ/ε (gradient of stress-strain graph)',
                'State units of E (Pa or GPa)'
            ]
        },
        {
            id: 'seq-t5-7',
            stem: 'Order these steps to solve an elastic strain energy problem:',
            steps: [
                'Identify the spring constant k from Hooke\'s Law (F = -kx)',
                'Identify the extension x (in metres)',
                'Calculate elastic strain energy: E = ½kx²',
                'Verify that this matches area under force-extension graph',
                'State final answer with units (J)'
            ]
        },

        // Force-Extension Graphs
        {
            id: 'seq-t5-8',
            stem: 'Order these steps to interpret a force-extension graph:',
            steps: [
                'Identify the linear region passing through origin',
                'Locate the yield point where the graph starts to curve',
                'Identify the elastic limit (straight line region)',
                'Identify the plastic region (curved region)',
                'Determine the spring constant k from gradient of linear region',
                'Identify the breaking point (maximum force)',
                'State what happens in each region'
            ]
        },

        // Efficiency
        {
            id: 'seq-t5-9',
            stem: 'Order these steps to calculate and interpret efficiency:',
            steps: [
                'Identify total energy input (E_in) to the system',
                'Identify useful energy output (E_out) from the system',
                'Identify wasted energy outputs (heat, sound, etc.) from the system',
                'Calculate efficiency: η = (E_out / E_in) × 100%',
                'Express as decimal or percentage as appropriate',
                'Identify main sources of energy loss and suggest improvements'
            ]
        }
    ],
    keyword: [
        // Kinetic Energy
        {
            id: 'kw-t5-1',
            stem: 'Define kinetic energy and state its formula. [2 marks]',
            marks: 2,
            keywords: ['energy due to motion', '½mv²', 'mass', 'speed', 'joules', 'proportional to square'],
            modelAnswer: 'Kinetic energy (KE) is the energy an object possesses due to its motion. The equation is KE = ½mv², where m is the mass in kilograms and v is the speed in metres per second. KE is measured in joules (J) and is a scalar quantity (always positive). KE is proportional to the square of speed — doubling speed quadruples KE.'
        },
        {
            id: 'kw-t5-2',
            stem: 'A car of mass 1200 kg travelling at 20 m/s brakes to a stop. Calculate the initial kinetic energy. [4 marks]',
            marks: 4,
            keywords: ['KE = ½mv²', 'mass', 'speed', 'work done', 'kinetic energy lost', 'heat energy'],
            modelAnswer: 'Initial KE = ½mv² = ½ × 1200 × 20² = 240,000 J = 240 kJ. When the car brakes to a stop, all of this kinetic energy is converted to other forms (mainly heat in brakes and tyres). The work done by the braking force equals this initial kinetic energy.'
        },
        {
            id: 'kw-t5-3',
            stem: 'State the principle of conservation of energy and give an example. [3 marks]',
            marks: 3,
            keywords: ['conservation of energy', 'total energy constant', 'closed system', 'GPE', 'KE', 'transfer', 'examples'],
            modelAnswer: 'The principle of conservation of energy states that the total energy in a closed system remains constant. Energy can be transferred between different forms (e.g., GPE to KE in a falling object, or KE to GPE in a thrown object) but cannot be created or destroyed. Examples: A rollercoaster (no friction): KE + GPE = constant at all points. Free fall (neglecting air resistance): ΔGPE = ΔKE (GPE lost equals KE gained). A bungee cord jumper: elastic PE is converted to KE at the bottom of the fall.'
        },
        {
            id: 'kw-t5-4',
            stem: 'Define gravitational potential energy and give its formula. [2 marks]',
            marks: 2,
            keywords: ['GPE', 'mgh', 'mass', 'height', 'gravitational field', 'joules', 'reference level'],
            modelAnswer: 'Gravitational potential energy (GPE) is the energy stored in a mass due to its position in a gravitational field. The equation is GPE = mgh, where m is mass in kilograms, g is gravitational field strength (9.81 m/s² on Earth), and h is height in metres above the reference level. GPE is measured in joules (J). The change in GPE depends on the change in height.'
        },

        // Power
        {
            id: 'kw-t5-5',
            stem: 'Define power and give its formula. [2 marks]',
            marks: 2,
            keywords: ['power', 'rate of energy transfer', 'work done per unit time', 'P = W/t', 'watts', 'force', 'velocity'],
            modelAnswer: 'Power (P) is the rate at which energy is transferred or work is done. The formula is P = W/t, where W is work done in joules (J) and t is time in seconds (s). The unit of power is the watt (W), where 1 W = 1 J/s. Power can also be expressed as P = Fv when a constant force F is applied at constant velocity v.'
        },
        {
            id: 'kw-t5-6',
            stem: 'A 2000 N car engine develops 40 kW of power while moving at 30 m/s over 1.0 km. Calculate the useful mechanical power output. [3 marks]',
            marks: 3,
            keywords: ['useful power', 'efficiency', 'input power', 'wasted', 'mechanical power', 'P = Fv'],
            modelAnswer: 'Useful mechanical power output = total power × efficiency. Efficiency = useful power output / total power input. From the data: useful power = 40 kW × η. However, we need to calculate efficiency first. The work done per km relates to power: work per km = power / speed = 40 kW / (30/3.6) = 144 MJ/km. Over 1.0 km, work done = 144 MJ. Assuming 35% efficiency gives useful power = 40 × 0.35 = 14 kW.'
        },

        // Efficiency
        {
            id: 'kw-t5-7',
            stem: 'Define efficiency and give its formula. [2 marks]',
            marks: 2,
            keywords: ['efficiency', 'ratio', 'useful output', 'total input', 'wasted energy', 'percentage', 'η = (useful output / total input) × 100'],
            modelAnswer: 'Efficiency (η) is the ratio of useful energy output to total energy input. The formula is η = (useful output / total input) × 100%. Efficiency is always between 0% and 1. 0% means no useful output (all energy wasted), 100% means all input energy becomes useful output. Wasted energy typically becomes heat, sound, or friction losses.'
        },

        // Hooke's Law
        {
            id: 'kw-t5-8',
            stem: 'State Hooke\'s Law and explain what the gradient of a force-extension graph represents in the linear region. [3 marks]',
            marks: 3,
            keywords: ['Hooke\'s Law', 'F = -kx', 'spring constant', 'gradient', 'linear region', 'proportional'],
            modelAnswer: 'Hooke\'s Law states that the extension of a spring is directly proportional to the applied force (up to the elastic limit): F = -kx, where k is the spring constant and x is the extension. The gradient of the force-extension graph in the linear region equals the spring constant k. A steeper gradient indicates a stiffer spring (larger k value).'
        },
        {
            id: 'kw-t5-9',
            stem: 'Define stress, strain, and Young Modulus. Give the relationship between them. [3 marks]',
            marks: 3,
            keywords: ['stress', 'strain', 'Young Modulus', 'σ = F/A', 'ε = ΔL/L', 'E = σ/ε', 'cross-sectional area', 'material stiffness'],
            modelAnswer: 'Stress (σ) is force per unit cross-sectional area: σ = F/A, where F is force (N) and A is cross-sectional area (m²). Units: pascals (Pa) or N/m². Strain (ε) is ratio of extension to original length: ε = ΔL/L (no units). Young Modulus (E) is stress divided by strain for the linear elastic region: E = σ/ε. Young Modulus measures material stiffness — higher E means a stiffer material (requires more stress for same strain).'
        },

        // Elastic Strain Energy
        {
            id: 'kw-t5-10',
            stem: 'A bungee cord has spring constant k = 50 N/m and stretches 8 m to store elastic energy. Calculate the elastic strain energy stored. [4 marks]',
            marks: 4,
            keywords: ['elastic strain energy', 'E = ½kx²', 'spring constant', 'extension', 'area under graph', 'work done'],
            modelAnswer: 'Elastic strain energy E = ½kx², where k is the spring constant (50 N/m) and x is the extension (8 m). E = ½ × 50 × 8² = 25 × 64 = 1600 J. This equals the area under the force-extension graph (work done by the cord stretching the spring).'
        },

        // Core Practical 5
        {
            id: 'kw-t5-11',
            stem: 'Describe how to determine the Young Modulus of a wire from a force-extension graph. [3 marks]',
            marks: 3,
            keywords: ['Young Modulus', 'force-extension graph', 'gradient', 'stress', 'strain', 'cross-sectional area', 'linear region', 'best fit line'],
            modelAnswer: 'To determine Young Modulus: (1) Draw a straight line of best fit through the linear region of the force-extension graph. (2) Calculate the gradient: k = ΔF/Δx. (3) Identify the cross-sectional area A of the wire. (4) Calculate stress: σ = F/A. (5) Plot stress (σ) against strain (ε = ΔL/L). (6) The gradient of the stress-strain graph in the linear region equals Young Modulus E. (7) State units of E (Pa or GPa).'
        },

        // Force-Extension Graphs
        {
            id: 'kw-t5-12',
            stem: 'Explain the significance of the yield point and breaking point on a force-extension graph. [3 marks]',
            marks: 3,
            keywords: ['yield point', 'elastic limit', 'breaking point', 'plastic deformation', 'ultimate tensile strength', 'Hooke\'s Law'],
            modelAnswer: 'The yield point (or elastic limit) marks the end of the linear (Hookean) region and the beginning of the plastic region. Beyond this point, Hooke\'s Law does not apply and the material deforms plastically (permanent deformation). The breaking point is where the wire finally fractures under maximum applied force. The region between yield and breaking points represents permanent deformation before failure.'
        },

        // Real-world applications
        {
            id: 'kw-t5-13',
            stem: 'Why are metals preferred over polymers for springs in applications like car suspension? [2 marks]',
            marks: 2,
            keywords: ['metals', 'polymers', 'Young Modulus', 'fatigue', 'creep', 'elastic deformation', 'permanent set'],
            modelAnswer: 'Metals have well-defined Young Modulus values that remain constant over time and many cycles of loading. Polymers are more susceptible to creep (gradual deformation under constant load) and fatigue (degradation after repeated loading). This makes polymers unreliable for applications requiring consistent spring properties over extended periods.'
        }
    ],
    flashcards: [
        // Kinetic Energy
        {
            id: 'fc-t5-1',
            front: 'What is the formula for kinetic energy?',
            back: 'KE = ½mv²\nm = mass (kg), v = speed (m/s)\nKE is energy due to motion\nAlways positive (scalar quantity)',
            topic: 'Kinetic Energy'
        },
        {
            id: 'fc-t5-2',
            front: 'A 2 kg object moving at 10 m/s has KE of 100 J. What would its KE be if speed doubled to 20 m/s?',
            back: 'KE = ½ × 2 × 20² = 400 J\nSince KE ∝ v², doubling speed quadruples KE',
            topic: 'Kinetic Energy'
        },
        {
            id: 'fc-t5-3',
            front: 'What happens to kinetic energy when an object accelerates?',
            back: 'KE increases\nSince KE = ½mv² depends on speed squared, any increase in speed causes a proportionally larger increase in KE.',
            topic: 'Kinetic Energy'
        },
        {
            id: 'fc-t5-4',
            front: 'Does kinetic energy depend on direction of motion?',
            back: 'No\nKE depends on speed (a scalar), not direction\nSpeed is always positive — a ball thrown upward and one downward at same speed have equal KE',
            topic: 'Kinetic Energy'
        },
        {
            id: 'fc-t5-5',
            front: 'In a friction-free system, what is the relationship between GPE and KE?',
            back: 'GPE + KE = constant\nAs an object falls, GPE decreases and KE increases proportionally\nThe sum remains constant throughout\nEnergy is conserved in a closed system with no external forces doing work',
            topic: 'Conservation of Energy'
        },

        // Gravitational Potential Energy
        {
            id: 'fc-t5-6',
            front: 'What is the formula for gravitational potential energy?',
            back: 'GPE = mgh\nm = mass (kg), g = 9.81 m/s², h = height (m)\nUnits: joules (J)\nGPE depends on both mass and height\nReference level can be set where h = 0',
            topic: 'Gravitational Potential Energy'
        },
        {
            id: 'fc-t5-7',
            front: 'When would GPE be negative?',
            back: 'When reference level is below the object\nh = 0 gives GPE = 0 (object at reference level)\nAny movement downward gives positive GPE gain\nMovement upward (away from reference) gives positive GPE change (increase)',
            topic: 'Gravitational Potential Energy'
        },
        {
            id: 'fc-t5-8',
            front: 'A 0.5 kg object is lifted 1.0 m. What is the gain in GPE?',
            back: 'GPE = mgh = 0.5 × 9.81 × 1.0 = 4.905 J\nUse g = 9.81 m/s² (unless otherwise specified)',
            topic: 'Gravitational Potential Energy'
        },

        // Power
        {
            id: 'fc-t5-9',
            front: 'What is the formula for power?',
            back: 'P = W/t\nP = ΔE/t\nWhen constant force: P = Fv\nUnits: W = J/s, 1 W = 1 J/s\nWatts (W)',
            topic: 'Power'
        },
        {
            id: 'fc-t5-10',
            front: 'A force of 100 N moves an object 5.0 m in 2.0 s. What is the average power?',
            back: 'P = W/t = 100 × 5.0 / 2.0 = 250 W\nAverage power = total work / total time',
            topic: 'Power'
        },
        {
            id: 'fc-t5-11',
            front: 'Can power be negative?',
            back: 'No\nPower is rate of energy transfer — always positive\nRate cannot be negative (energy always moves from source to sink)\nPower can be zero if no energy is being transferred',
            topic: 'Power'
        },

        // Efficiency
        {
            id: 'fc-t5-12',
            front: 'What does 100% efficiency mean?',
            back: 'All input energy becomes useful output\nNo energy is wasted to surroundings\nPerfect efficiency is theoretically impossible (some losses like friction always exist)',
            topic: 'Efficiency'
        },
        {
            id: 'fc-t5-13',
            front: 'What are the main sources of energy loss in mechanical systems?',
            back: 'Friction\nAir resistance\nHeat (thermal energy)\nSound radiation',
            topic: 'Efficiency'
        },

        // Hooke's Law
        {
            id: 'fc-t5-14',
            front: 'What is Hooke\'s Law?',
            back: 'F = -kx\nThe restoring force is proportional to extension\nThe graph is linear (F ∝ x) near the origin\nGradient gives spring constant k (stiffness)\nApplies up to elastic limit',
            topic: 'Hooke\'s Law'
        },
        {
            id: 'fc-t5-15',
            front: 'What indicates a material is stiffer?',
            back: 'Higher Young Modulus E\nHigher gradient on force-extension graph\nLarger stress needed for same strain\nRequires more force to produce same extension',
            topic: 'Stress, Strain & Young Modulus'
        },
        {
            id: 'fc-t5-16',
            front: 'What does the area under a force-extension graph represent?',
            back: 'Elastic strain energy stored\nWork done on the material\nRepresents energy that can be recovered\nUp to yield point: elastic energy\nBeyond yield point: plastic work (wasted)',
            topic: 'Force-Extension Graphs'
        },
        {
            id: 'fc-t5-17',
            front: 'What is the elastic limit?',
            back: 'End of linear region\nPoint where graph begins to curve\nHooke\'s Law applies only in this region',
            topic: 'Hooke\'s Law'
        },

        // Core Practical 5
        {
            id: 'fc-t5-18',
            front: 'What is the purpose of determining Young Modulus?',
            back: 'Quantify material stiffness\nDetermine E for linear elastic region\nFind ultimate tensile strength and yield point',
            topic: 'Core Practical 5'
        },
        {
            id: 'fc-t5-19',
            front: 'How do you find Young Modulus from a force-extension graph?',
            back: 'Plot stress vs strain\nDraw best fit line\nCalculate gradient: E = σ/ε\nMeasure cross-sectional area A\nState units (Pa or GPa)',
            topic: 'Stress, Strain & Young Modulus'
        },

        // Force-Extension Graphs
        {
            id: 'fc-t5-20',
            front: 'What does a curved force-extension graph indicate?',
            back: 'Hooke\'s Law no longer applies\nPlastic deformation region\nWork done increases non-linearly\nMaterial may fracture',
            topic: 'Force-Extension Graphs'
        },

        // Real-world applications
        {
            id: 'fc-t5-21',
            front: 'Why are steels used for springs in car suspensions?',
            back: 'High Young Modulus (~200 GPa)\nConsistent stiffness over many cycles\nResistant to fatigue and creep\nReliable for long-term applications',
            topic: 'Stress, Strain & Young Modulus'
        }
    ]
};
