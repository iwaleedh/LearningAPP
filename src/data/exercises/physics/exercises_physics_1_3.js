export const exercises_physics_1_3 = {
    mcq: [
        // Force & Acceleration
        {
            id: 'mcq-t3-1',
            stem: 'Which of the following statements correctly describes Newton\'s Second Law of Motion?',
            options: ['Force is directly proportional to velocity and in the same direction', 'Force is directly proportional to acceleration and in the same direction', 'Force is inversely proportional to mass', 'Acceleration is directly proportional to mass'],
            correctAnswer: 1,
            rationale: 'Newton\'s Second Law states that net force is directly proportional to acceleration, and acts in the same direction as acceleration. The correct statement is "Force is directly proportional to acceleration and in the same direction." The other options incorrectly describe the relationships.',
            topic: 'Force & Acceleration'
        },
        {
            id: 'mcq-t3-2',
            stem: 'A 5 kg object is acted on by a net force of 20 N. What is the acceleration?',
            options: ['4 m/s²', '25 m/s²', '100 m/s²', '0.25 m/s²'],
            correctAnswer: 0,
            rationale: 'Using F = ma: a = F/m = 20/5 = 4 m/s². The acceleration is directly proportional to force and inversely proportional to mass.',
            topic: 'Force & Acceleration'
        },
        {
            id: 'mcq-t3-3',
            stem: 'Which of the following is TRUE about the F in the equation F = ma?',
            options: ['It is any single force acting on the object', 'It is the resultant (net) force acting on the object', 'It is the maximum force acting on the object', 'It is the frictional force only'],
            correctAnswer: 1,
            rationale: 'The F in F = ma is always the resultant (net) force — the vector sum of all forces acting on the object, not any single force or maximum force.',
            topic: 'Force & Acceleration'
        },
        {
            id: 'mcq-t3-4',
            stem: 'A 3 kg box is pushed by a 18 N force while friction opposes with 6 N. What is the acceleration?',
            options: ['4 m/s²', '6 m/s²', '8 m/s²', '12 m/s²'],
            correctAnswer: 0,
            rationale: 'Resultant force = 18 - 6 = 12 N. Using F = ma: 12 = 3 × a, so a = 4 m/s².',
            topic: 'Force & Acceleration'
        },
        {
            id: 'mcq-t3-5',
            stem: 'When an object is in equilibrium, what is its acceleration?',
            options: ['Maximum possible acceleration', 'Zero m/s²', 'Equal to the net force', 'Depends on the mass of the object'],
            correctAnswer: 1,
            rationale: 'When in equilibrium, the resultant force is zero, and from F = ma, if F = 0, then a = 0 m/s². The object remains at rest or continues at constant velocity.',
            topic: 'Force & Acceleration'
        },

        // Mass, Weight & Gravitational Field Strength
        {
            id: 'mcq-t3-6',
            stem: 'Which quantity is a scalar and does NOT depend on location?',
            options: ['Weight', 'Mass', 'Gravitational force', 'Resultant force'],
            correctAnswer: 1,
            rationale: 'Mass is a scalar quantity that measures the amount of matter in an object. It is constant regardless of location — the same on Earth, Moon, Mars, or in space. Weight is a vector force that depends on gravitational field strength.',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'mcq-t3-7',
            stem: 'What is the weight of a 5 kg mass on Earth (g = 9.81 N/kg)?',
            options: ['5 N', '9.81 N', '49.05 N', '98.1 N'],
            correctAnswer: 2,
            rationale: 'Using W = mg: 5 kg × 9.81 N/kg = 49.05 N. Weight is a force measured in newtons.',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'mcq-t3-8',
            stem: 'Which statement about gravitational field strength g is CORRECT?',
            options: ['g is constant everywhere in the universe', 'g is the force per unit mass', 'g is measured in newtons', 'g only applies to objects on Earth'],
            correctAnswer: 1,
            rationale: 'Gravitational field strength g is defined as the force per unit mass acting on a test mass. Its units are N/kg or m/s², not newtons. It varies with location and planet.',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'mcq-t3-9',
            stem: 'A 10 kg object has a weight of 16 N. What is the value of g at this location?',
            options: ['1.6 m/s²', '1.6 N/kg', '16 m/s²', '160 N/kg'],
            correctAnswer: 1,
            rationale: 'Using W = mg, rearranged: g = W/m = 16/10 = 1.6 N/kg. Since 1 N/kg = 1 m/s², g = 1.6 m/s² (approximately the Moon\'s value).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'mcq-t3-10',
            stem: 'Which instrument would give the same reading for the same object on Earth and on the Moon?',
            options: ['Spring balance', 'Newton-meter', 'Digital force sensor', 'Beam balance'],
            correctAnswer: 3,
            rationale: 'A beam balance compares masses and works on the principle of balancing. Since both the object and the reference masses are equally affected by gravity, the reading is the same regardless of location. Spring balances measure force, which varies with gravitational field strength.',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },

        // Core Practical 1: Freefall
        {
            id: 'mcq-t3-11',
            stem: 'In the electromagnet-and-trapdoor method for measuring g, what is plotted on the x-axis?',
            options: ['Time t', 'Height h', 'Time squared t²', 'Force'],
            correctAnswer: 2,
            rationale: 'From h = ½gt², plotting h against t² gives a straight line through origin. The gradient equals g/2, making g = 2 × gradient. Plotting h against t would give a curve.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'mcq-t3-12',
            stem: 'What does the gradient of an h vs t² graph represent?',
            options: ['g', 'g/2', '2g', '1/g'],
            correctAnswer: 1,
            rationale: 'From the equation h = ½gt², comparing to y = mx, the gradient m = g/2. Therefore, g = 2 × gradient.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'mcq-t3-13',
            stem: 'Which is a systematic error in measuring g using the freefall method?',
            options: ['Parallax error in reading the ruler', 'Air resistance on the falling ball', 'Random timing variations', 'Human reaction time with manual stopwatch'],
            correctAnswer: 3,
            rationale: 'Human reaction time with manual stopwatch is a systematic error that consistently overestimates the time, causing g to be measured below 9.81 m/s². Using electronic timing eliminates this error.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'mcq-t3-14',
            stem: 'What type of graph is expected when plotting h against t² for freefall?',
            options: ['Parabolic curve through origin', 'Exponential decay', 'Straight line through origin', 'Horizontal line'],
            correctAnswer: 2,
            rationale: 'Since h is directly proportional to t² (h = ½gt²), the graph should be a straight line passing through the origin. A line through the origin confirms initial velocity is zero.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'mcq-t3-15',
            stem: 'Why is a dense metal ball used in freefall experiments rather than a light object?',
            options: ['To increase the measured weight', 'To minimise air resistance', 'To make timing easier', 'Because it falls faster'],
            correctAnswer: 1,
            rationale: 'Air resistance has less effect on dense, compact objects like metal balls. Light objects (e.g. feathers) are more affected by air resistance, which reduces the measured acceleration below g.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },

        // Newton's Third Law
        {
            id: 'mcq-t3-16',
            stem: 'Which of the following is NOT a property of a Newton Third Law force pair?',
            options: ['Equal in magnitude', 'Opposite in direction', 'Same type of force', 'Act on the same object'],
            correctAnswer: 3,
            rationale: 'A genuine Newton Third Law pair NEVER acts on the same object — the two forces always act on different objects (e.g., Earth pulls book, book pulls Earth). The three correct properties are: equal magnitude, opposite direction, same force type.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'mcq-t3-17',
            stem: 'When a book rests on a table, which pair of forces constitutes a Newton Third Law pair?',
            options: ['Weight W (Earth on book) and normal force N (table on book)', 'Weight W (Earth on book) and book pulling Earth', 'Normal force N (table on book) and book pushing table', 'Both weight and normal force act on the book'],
            correctAnswer: 1,
            rationale: 'The weight (Earth pulling book downward) and the book pulling Earth upward are the Newton Third Law pair — same type of force (gravitational), equal and opposite, acting on different objects. The normal force and weight are balanced forces, NOT a Third Law pair.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'mcq-t3-18',
            stem: 'Two skaters push on each other. Skater A (60 kg) accelerates at 2.0 m/s². What is the magnitude of the force each skater exerts?',
            options: ['120 N', '100 N', '150 N', '30 N'],
            correctAnswer: 0,
            rationale: 'For Skater A: F = ma = 60 × 2.0 = 120 N. By Newton\'s Third Law, both skaters exert 120 N on each other (equal and opposite). Skater B\'s acceleration would be 120/80 = 1.5 m/s².',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'mcq-t3-19',
            stem: 'How does a rocket generate thrust in the vacuum of space?',
            options: ['By pushing against expelled exhaust gases', 'By pushing against the surrounding air', 'By pushing against the Earth\'s surface', 'By using Earth\'s gravitational pull'],
            correctAnswer: 0,
            rationale: 'A rocket works by expelling exhaust gases downward. By Newton\'s Third Law, the gases exert an equal and opposite force upward on the rocket. This works in vacuum because the rocket pushes on the exhaust, not on air or ground.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'mcq-t3-20',
            stem: 'A swimmer moves through water by pushing backward on it. What provides the forward force on the swimmer?',
            options: ['The swimmer\'s muscles', 'The water pushing forward on the swimmer', 'Gravity pulling the swimmer', 'Friction from the pool wall'],
            correctAnswer: 1,
            rationale: 'The swimmer pushes backward on water (action). By Newton\'s Third Law, the water pushes forward on the swimmer\'s hands (reaction). This reaction force is what propels the swimmer forward.',
            topic: 'Newton\'s Third Law of Motion'
        },

        // Momentum
        {
            id: 'mcq-t3-21',
            stem: 'What is the SI unit of momentum?',
            options: ['kg/s', 'kg m/s', 'N m', 'J'],
            correctAnswer: 1,
            rationale: 'Momentum p = mv, so its unit is kg × m/s = kg m/s. This is equivalent to N s (newton-second).',
            topic: 'Momentum'
        },
        {
            id: 'mcq-t3-22',
            stem: 'Which statement about momentum is TRUE?',
            options: ['Momentum is a scalar quantity', 'Momentum direction is opposite to velocity', 'Momentum is a vector quantity with direction same as velocity', 'Momentum depends only on mass, not velocity'],
            correctAnswer: 2,
            rationale: 'Momentum is a vector quantity. Its direction is always the same as the direction of the velocity of the object. It depends on both mass AND velocity (p = mv).',
            topic: 'Momentum'
        },
        {
            id: 'mcq-t3-23',
            stem: 'A 1000 kg car moves at 20 m/s. What is its momentum?',
            options: ['20 kg m/s', '20 000 kg m/s', '200 kg m/s', '2000 kg m/s'],
            correctAnswer: 1,
            rationale: 'p = mv = 1000 kg × 20 m/s = 20 000 kg m/s. This illustrates how large mass or high velocity gives large momentum.',
            topic: 'Momentum'
        },
        {
            id: 'mcq-t3-24',
            stem: 'Which statement correctly describes impulse?',
            options: ['Impulse equals force divided by time', 'Impulse equals change in momentum', 'Impulse equals mass times acceleration', 'Impulse is a scalar quantity'],
            correctAnswer: 1,
            rationale: 'Impulse J = FΔt = Δp (change in momentum). The impulse-momentum theorem states that impulse equals the change in momentum of an object.',
            topic: 'Momentum'
        },
        {
            id: 'mcq-t3-25',
            stem: 'A 0.8 kg ball changes velocity from 12 m/s to 15 m/s in the opposite direction in 0.05 s. What is the average force?',
            options: ['216 N', '432 N', '21.6 N', '86.4 N'],
            correctAnswer: 1,
            rationale: 'Change in momentum = m(v - u) = 0.8 × [(-15) - 12] = 0.8 × (-27) = -21.6 kg m/s. Force F = Δp/Δt = -21.6/0.05 = -432 N. Magnitude is 432 N.',
            topic: 'Momentum'
        },

        // Conservation of Linear Momentum
        {
            id: 'mcq-t3-26',
            stem: 'What is the principle of conservation of linear momentum?',
            options: ['Momentum increases in collisions', 'Total momentum is conserved in a closed system with no external force', 'Momentum is only conserved in elastic collisions', 'Momentum is always conserved, regardless of external forces'],
            correctAnswer: 1,
            rationale: 'The principle states that in a closed system (no resultant external force), total momentum before an event equals total momentum after. External forces can change the total momentum of a system.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'mcq-t3-27',
            stem: 'In a perfectly inelastic collision, which quantities are conserved?',
            options: ['Both momentum and kinetic energy', 'Only momentum', 'Only kinetic energy', 'Neither momentum nor kinetic energy'],
            correctAnswer: 1,
            rationale: 'In any collision (elastic or inelastic), momentum is always conserved. In a perfectly inelastic collision, objects stick together and kinetic energy is NOT conserved (some becomes heat, sound, or deformation).',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'mcq-t3-28',
            stem: 'A 2 kg trolley moving at 3 m/s collides and sticks to a 3 kg trolley at rest. What is the velocity after collision?',
            options: ['3.0 m/s', '2.0 m/s', '1.2 m/s', '0.6 m/s'],
            correctAnswer: 2,
            rationale: 'Using conservation: (2 × 3) + (3 × 0) = (2 + 3) × v. 6 = 5v, so v = 1.2 m/s. The objects stick together (perfectly inelastic).',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'mcq-t3-29',
            stem: 'What distinguishes an elastic collision from an inelastic collision?',
            options: ['Elastic: objects stick together', 'Elastic: kinetic energy is conserved', 'Elastic: only momentum is conserved', 'Inelastic: no energy transfer occurs'],
            correctAnswer: 1,
            rationale: 'In an elastic collision, BOTH momentum AND kinetic energy are conserved (objects bounce apart). In an inelastic collision, momentum is conserved but kinetic energy is NOT (some becomes heat/sound).',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'mcq-t3-30',
            stem: 'A gun fires a bullet forward. Why does the gun recoil backward?',
            options: ['The trigger pushes the gun back', 'Conservation of momentum: total was zero, remains zero', 'Air resistance pushes the gun back', 'The bullet pulls on the gun after firing'],
            correctAnswer: 1,
            rationale: 'Before firing, total momentum = 0 (gun and bullet at rest). After firing, bullet moves forward with momentum mv. For total to remain zero, gun must move backward with equal and opposite momentum. This is an explosion from rest.',
            topic: 'Conservation of Linear Momentum'
        }
    ],

    fillblank: [
        {
            id: 'fb-t3-1',
            stem: 'Complete Newton\'s Second Law equation: __BLANK__ equals mass multiplied by __BLANK__.',
            template: 'Net force equals mass multiplied by __BLANK__.',
            blanks: [
                { answer: 'acceleration' }
            ],
            rationale: 'Newton\'s Second Law is F = ma, where F is the net force, m is mass, and a is acceleration.'
        },
        {
            id: 'fb-t3-2',
            stem: 'A free-body diagram shows all the __BLANK__ acting on a single object.',
            template: 'A free-body diagram shows all the __BLANK__ acting on a single object.',
            blanks: [
                { answer: 'forces' }
            ],
            rationale: 'A free-body diagram (FBD) shows all forces acting on one object, with arrows indicating direction and magnitude.'
        },
        {
            id: 'fb-t3-3',
            stem: 'Mass is a __BLANK__ quantity, while weight is a __BLANK__ quantity.',
            template: 'Mass is a __BLANK__ quantity, while weight is a __BLANK__ quantity.',
            blanks: [
                { answer: 'scalar' },
                { answer: 'vector' }
            ],
            rationale: 'Mass is a scalar (magnitude only, no direction). Weight is a vector (has both magnitude and direction, always downward toward centre of gravity).'
        },
        {
            id: 'fb-t3-4',
            stem: 'The equation for weight is W = __BLANK__ multiplied by __BLANK__.',
            template: 'The equation for weight is W = __BLANK__ multiplied by __BLANK__.',
            blanks: [
                { answer: 'm' },
                { answer: 'g' }
            ],
            rationale: 'Weight W = mg, where m is mass (kg) and g is gravitational field strength (N/kg or m/s²).'
        },
        {
            id: 'fb-t3-5',
            stem: 'On Earth, the gravitational field strength g equals __BLANK__ N/kg.',
            template: 'On Earth, the gravitational field strength g equals __BLANK__ N/kg.',
            blanks: [
                { answer: '9.81' }
            ],
            rationale: 'On Earth\'s surface, g = 9.81 N/kg, which is equivalent to 9.81 m/s² as the acceleration of free fall.'
        },
        {
            id: 'fb-t3-6',
            stem: 'In the freefall experiment, plotting __BLANK__ against t² gives a straight line through the origin.',
            template: 'In the freefall experiment, plotting __BLANK__ against t² gives a straight line through the origin.',
            blanks: [
                { answer: 'h' }
            ],
            rationale: 'From h = ½gt², plotting height h against t² gives a straight line. The gradient equals g/2.'
        },
        {
            id: 'fb-t3-7',
            stem: 'The gradient of an h vs t² graph equals __BLANK__ divided by 2.',
            template: 'The gradient of an h vs t² graph equals __BLANK__ divided by 2.',
            blanks: [
                { answer: 'g' }
            ],
            rationale: 'Since h = (g/2) × t², the gradient of the graph is g/2, so g = 2 × gradient.'
        },
        {
            id: 'fb-t3-8',
            stem: 'Newton\'s Third Law: If object A exerts a force on object B, then object B exerts an __BLANK__ and __BLANK__ force on object A.',
            template: 'Newton\'s Third Law: If object A exerts a force on object B, then object B exerts an __BLANK__ and __BLANK__ force on object A.',
            blanks: [
                { answer: 'equal' },
                { answer: 'opposite' }
            ],
            rationale: 'Newton\'s Third Law states that forces come in equal and opposite pairs acting on different objects.'
        },
        {
            id: 'fb-t3-9',
            stem: 'Momentum is defined as the product of __BLANK__ and __BLANK__.',
            template: 'Momentum is defined as the product of __BLANK__ and __BLANK__.',
            blanks: [
                { answer: 'mass' },
                { answer: 'velocity' }
            ],
            rationale: 'The momentum p = mv, where m is mass (kg) and v is velocity (m/s).'
        },
        {
            id: 'fb-t3-10',
            stem: 'The SI unit of momentum is __BLANK__ __BLANK__ per second.',
            template: 'The SI unit of momentum is __BLANK__ __BLANK__ per second.',
            blanks: [
                { answer: 'kilogram' },
                { answer: 'metres' }
            ],
            rationale: 'Momentum has units of kg m/s, equivalent to N s (newton-seconds).'
        },
        {
            id: 'fb-t3-11',
            stem: 'Impulse equals force multiplied by __BLANK__, and also equals the change in __BLANK__.',
            template: 'Impulse equals force multiplied by __BLANK__, and also equals the change in __BLANK__.',
            blanks: [
                { answer: 'time' },
                { answer: 'momentum' }
            ],
            rationale: 'Impulse J = FΔt = Δp (change in momentum). The unit is N s or kg m/s.'
        },
        {
            id: 'fb-t3-12',
            stem: 'Using Newton\'s Second Law in momentum form: F equals __BLANK__ change of momentum divided by change in __BLANK__.',
            template: 'Using Newton\'s Second Law in momentum form: F equals __BLANK__ change of momentum divided by change in __BLANK__.',
            blanks: [
                { answer: 'rate of' },
                { answer: 'time' }
            ],
            rationale: 'F = Δp/Δt, meaning force equals the rate of change of momentum with respect to time.'
        },
        {
            id: 'fb-t3-13',
            stem: 'In a closed system with no external force, total momentum before an event __BLANK__ total momentum after.',
            template: 'In a closed system with no external force, total momentum before an event __BLANK__ total momentum after.',
            blanks: [
                { answer: 'equals' }
            ],
            rationale: 'The principle of conservation of linear momentum: total p before = total p after, provided no net external force acts on the system.'
        },
        {
            id: 'fb-t3-14',
            stem: 'In an elastic collision, both momentum and __BLANK__ __BLANK__ are conserved.',
            template: 'In an elastic collision, both momentum and __BLANK__ __BLANK__ are conserved.',
            blanks: [
                { answer: 'kinetic' },
                { answer: 'energy' }
            ],
            rationale: 'Elastic collisions conserve both momentum AND kinetic energy. The objects bounce apart without energy loss to heat or sound.'
        },
        {
            id: 'fb-t3-15',
            stem: 'In a perfectly inelastic collision, the objects __BLANK__ together after collision.',
            template: 'In a perfectly inelastic collision, the objects __BLANK__ together after collision.',
            blanks: [
                { answer: 'stick' }
            ],
            rationale: 'In a perfectly inelastic collision, objects stick together and move as one combined mass with a common velocity.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-t3-1',
            stem: 'Sort the following quantities as either scalar or vector.',
            categories: ['Scalar', 'Vector'],
            items: [
                { text: 'Mass', category: 'Scalar' },
                { text: 'Weight', category: 'Vector' },
                { text: 'Momentum', category: 'Vector' },
                { text: 'Force', category: 'Vector' },
                { text: 'Speed', category: 'Scalar' },
                { text: 'Acceleration', category: 'Vector' },
                { text: 'Time', category: 'Scalar' },
                { text: 'Velocity', category: 'Vector' }
            ]
        },
        {
            id: 'dd-t3-2',
            stem: 'Categorise these types of forces.',
            categories: ['Contact Force', 'Non-Contact Force'],
            items: [
                { text: 'Normal reaction', category: 'Contact Force' },
                { text: 'Friction', category: 'Contact Force' },
                { text: 'Weight (gravitational)', category: 'Non-Contact Force' },
                { text: 'Tension', category: 'Contact Force' },
                { text: 'Electrostatic force', category: 'Non-Contact Force' },
                { text: 'Magnetic force', category: 'Non-Contact Force' }
            ]
        },
        {
            id: 'dd-t3-3',
            stem: 'Classify these collisions by type.',
            categories: ['Elastic Collision', 'Inelastic Collision'],
            items: [
                { text: 'Billiard balls colliding', category: 'Elastic Collision' },
                { text: 'Car crash with vehicles sticking', category: 'Inelastic Collision' },
                { text: 'Gas molecules bouncing', category: 'Elastic Collision' },
                { text: 'Two cars merging together', category: 'Inelastic Collision' },
                { text: 'Steel ball bearings colliding', category: 'Elastic Collision' },
                { text: 'Clay balls sticking on impact', category: 'Inelastic Collision' }
            ]
        },
        {
            id: 'dd-t3-4',
            stem: 'Sort the following Newton\'s Third Law force pairs as correct or incorrect.',
            categories: ['Correct Pair', 'Incorrect Pair'],
            items: [
                { text: 'Earth pulling book / Book pulling Earth', category: 'Correct Pair' },
                { text: 'Table pushing book / Book pushing table', category: 'Correct Pair' },
                { text: 'Weight of book / Normal force on book', category: 'Incorrect Pair' },
                { text: 'Swimmer pushing water / Water pushing swimmer', category: 'Correct Pair' },
                { text: 'Rocket pushing exhaust / Exhaust pushing rocket', category: 'Correct Pair' },
                { text: 'Gravity pulling person / Ground pushing person', category: 'Incorrect Pair' }
            ]
        },
        {
            id: 'dd-t3-5',
            stem: 'Categorise the units of measurement.',
            categories: ['Mass Unit', 'Force Unit', 'Momentum Unit'],
            items: [
                { text: 'kg', category: 'Mass Unit' },
                { text: 'N', category: 'Force Unit' },
                { text: 'kg m/s', category: 'Momentum Unit' },
                { text: 'N s', category: 'Momentum Unit' },
                { text: 'g', category: 'Force Unit' },
                { text: 'm/s²', category: 'Acceleration Unit' }
            ]
        },
        {
            id: 'dd-t3-6',
            stem: 'Classify these experimental errors in measuring g.',
            categories: ['Systematic Error', 'Random Error'],
            items: [
                { text: 'Human reaction time with stopwatch', category: 'Systematic Error' },
                { text: 'Air resistance on falling object', category: 'Systematic Error' },
                { text: 'Fluctuations in electronic timer', category: 'Random Error' },
                { text: 'Parallax in reading ruler', category: 'Systematic Error' },
                { text: 'Variability in release technique', category: 'Random Error' }
            ]
        },
        {
            id: 'dd-t3-7',
            stem: 'Sort these applications by how they use impulse.',
            categories: ['Increases Contact Time', 'Decreases Contact Time'],
            items: [
                { text: 'Airbag in car', category: 'Increases Contact Time' },
                { text: 'Crash mat in gym', category: 'Increases Contact Time' },
                { text: 'Crumple zone in vehicle', category: 'Increases Contact Time' },
                { text: 'Hard floor for landing', category: 'Decreases Contact Time' },
                { text: 'Padded helmet', category: 'Increases Contact Time' },
                { text: 'Concrete surface for running', category: 'Decreases Contact Time' }
            ]
        },
        {
            id: 'dd-t3-8',
            stem: 'Categorise the momentum values as larger or smaller.',
            categories: ['Larger Momentum', 'Smaller Momentum'],
            items: [
                { text: '1000 kg car at 20 m/s', category: 'Larger Momentum' },
                { text: '0.05 kg tennis ball at 60 m/s', category: 'Smaller Momentum' },
                { text: '10 kg bowling ball at 10 m/s', category: 'Larger Momentum' },
                { text: '0.2 kg cricket ball at 40 m/s', category: 'Smaller Momentum' },
                { text: '5 kg medicine ball at 8 m/s', category: 'Smaller Momentum' },
                { text: '2000 kg truck at 5 m/s', category: 'Larger Momentum' }
            ]
        },
        {
            id: 'dd-t3-9',
            stem: 'Classify these by whether they apply to Newton\'s Third Law.',
            categories: ['Applies to Third Law', 'Not Third Law'],
            items: [
                { text: 'Equal magnitude forces', category: 'Applies to Third Law' },
                { text: 'Opposite direction forces', category: 'Applies to Third Law' },
                { text: 'Same type of force', category: 'Applies to Third Law' },
                { text: 'Act on different objects', category: 'Applies to Third Law' },
                { text: 'Act on same object', category: 'Not Third Law' },
                { text: 'Balanced forces on one object', category: 'Not Third Law' }
            ]
        },
        {
            id: 'dd-t3-10',
            stem: 'Sort these by conservation properties.',
            categories: ['Always Conserved', 'Conditionally Conserved'],
            items: [
                { text: 'Momentum (in closed system)', category: 'Always Conserved' },
                { text: 'Mass (in closed system)', category: 'Always Conserved' },
                { text: 'Kinetic energy', category: 'Conditionally Conserved' },
                { text: 'Total energy', category: 'Always Conserved' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-t3-1',
            stem: 'Put the steps for applying Newton\'s Second Law in the correct order:',
            steps: [
                'Draw a free-body diagram showing all forces',
                'Find the resultant (net) force',
                'Identify the mass of the object',
                'Apply F = ma to find acceleration'
            ]
        },
        {
            id: 'seq-t3-2',
            stem: 'Order the steps for measuring g using the electromagnet method:',
            steps: [
                'Hold steel ball with electromagnet at known height',
                'Break circuit to release ball and start timer simultaneously',
                'Ball falls and lands on trapdoor, stopping timer',
                'Record time of fall for this height',
                'Repeat for different heights and plot h vs t²'
            ]
        },
        {
            id: 'seq-t3-3',
            stem: 'Arrange the steps to find tension in a connected objects problem:',
            steps: [
                'Treat both objects as one system to find total mass',
                'Apply F = ma to find common acceleration',
                'Consider individual object to find internal tension',
                'Use F = ma on one object with known forces and acceleration'
            ]
        },
        {
            id: 'seq-t3-4',
            stem: 'Put the steps to analyse a perfectly inelastic collision in order:',
            steps: [
                'Calculate total momentum before collision (sum of p = mv)',
                'Apply conservation: total momentum before = total momentum after',
                'Combine masses (m1 + m2) since objects stick together',
                'Solve for final velocity v = (m1u1 + m2u2) / (m1 + m2)'
            ]
        },
        {
            id: 'seq-t3-5',
            stem: 'Order the steps for determining weight on different planets:',
            steps: [
                'Identify the mass of the object (constant everywhere)',
                'Look up gravitational field strength g for the planet',
                'Apply W = mg using the planet\'s g value',
                'Calculate weight in newtons'
            ]
        },
        {
            id: 'seq-t3-6',
            stem: 'Arrange the steps for using impulse to calculate force:',
            steps: [
                'Calculate initial momentum (p = mu)',
                'Calculate final momentum (p = mv)',
                'Find change in momentum (Δp = mv - mu)',
                'Divide by time interval (F = Δp / Δt)'
            ]
        },
        {
            id: 'seq-t3-7',
            stem: 'Put the steps to identify a Newton Third Law pair in order:',
            steps: [
                'Identify the force and the two interacting objects',
                'Check that both forces are the same type',
                'Verify forces are equal in magnitude and opposite in direction',
                'Confirm forces act on different objects'
            ]
        },
        {
            id: 'seq-t3-8',
            stem: 'Order the steps for an explosion from rest analysis:',
            steps: [
                'Total initial momentum is zero (all at rest)',
                'Objects move apart with equal and opposite momenta',
                'Apply m1|v1| = m2|v2| (magnitudes equal)',
                'Lighter object has greater speed for same momentum'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-t3-1',
            stem: 'State Newton\'s Second Law of Motion in words. [2 marks]',
            marks: 2,
            keywords: ['net force', 'directly proportional', 'acceleration', 'same direction'],
            modelAnswer: 'Newton\'s Second Law states that the net force acting on an object is directly proportional to its acceleration, and acts in the same direction as the acceleration.'
        },
        {
            id: 'kw-t3-2',
            stem: 'Explain the difference between mass and weight. [3 marks]',
            marks: 3,
            keywords: ['mass', 'scalar', 'amount of matter', 'weight', 'vector', 'force', 'gravitational'],
            modelAnswer: 'Mass is a scalar quantity that measures the amount of matter in an object; it is constant regardless of location. Weight is a vector force; it is the gravitational pull on an object by a planet, given by W = mg, and varies with gravitational field strength.'
        },
        {
            id: 'kw-t3-3',
            stem: 'A 3 kg box on a rough surface is pushed with 18 N force. Friction is 6 N. Calculate the acceleration. [3 marks]',
            marks: 3,
            keywords: ['resultant', '12', '4', 'F = ma'],
            modelAnswer: 'Resultant force = 18 - 6 = 12 N. Using F = ma: 12 = 3 × a, so acceleration = 4 m/s².'
        },
        {
            id: 'kw-t3-4',
            stem: 'Describe the electromagnet-and-trapdoor method for measuring g. [3 marks]',
            marks: 3,
            keywords: ['electromagnet', 'steel ball', 'trapdoor', 'height', 'time', 'h = ½gt²'],
            modelAnswer: 'A steel ball is held at a known height by an electromagnet. The circuit is broken to release the ball and start a timer simultaneously. The ball falls and hits a trapdoor, stopping the timer. The relationship h = ½gt² is used; plotting h against t² gives a straight line where gradient = g/2.'
        },
        {
            id: 'kw-t3-5',
            stem: 'State Newton\'s Third Law and explain why normal force and weight on a book are NOT a Third Law pair. [3 marks]',
            marks: 3,
            keywords: ['equal', 'opposite', 'different objects', 'same type', 'same object'],
            modelAnswer: 'Newton\'s Third Law: if object A exerts a force on object B, then object B exerts an equal and opposite force on object A. The normal force (table on book) and weight (Earth on book) are NOT a Third Law pair because they act on the same object and are different types of force (contact vs gravitational).'
        },
        {
            id: 'kw-t3-6',
            stem: 'Define momentum and state its equation and unit. [2 marks]',
            marks: 2,
            keywords: ['product', 'mass', 'velocity', 'p = mv', 'kg m/s', 'vector'],
            modelAnswer: 'Momentum is a vector quantity defined as the product of mass and velocity. Equation: p = mv, where p is momentum in kg m/s, m is mass in kg, and v is velocity in m/s. It is a vector with direction same as velocity.'
        },
        {
            id: 'kw-t3-7',
            stem: 'A car of mass 1200 kg tows a trailer of mass 600 kg. The engine provides 3600 N driving force. Calculate the acceleration and the tension in the towbar. [4 marks]',
            marks: 4,
            keywords: ['total mass', '1800', '2', 'F = ma', 'tension', '1200'],
            modelAnswer: 'Total mass = 1200 + 600 = 1800 kg. Acceleration a = F/m = 3600/1800 = 2 m/s². Tension on trailer = m_trailer × a = 600 × 2 = 1200 N.'
        },
        {
            id: 'kw-t3-8',
            stem: 'Explain why a graph of h against t² is plotted to find g, not h against t. [2 marks]',
            marks: 2,
            keywords: ['straight line', 'h = ½gt²', 'proportional', 't²', 'gradient', 'g/2'],
            modelAnswer: 'The equation h = ½gt² shows that h is directly proportional to t², not t. Plotting h against t² gives a straight line through origin, where the gradient equals g/2, making g easy to determine. Plotting h against t would give a curve.'
        },
        {
            id: 'kw-t3-9',
            stem: 'Define impulse and state its relationship to momentum. [2 marks]',
            marks: 2,
            keywords: ['force', 'time', 'change in momentum', 'FΔt', 'Δp'],
            modelAnswer: 'Impulse is defined as the product of force and the time for which it acts: J = FΔt. The impulse-momentum theorem states that impulse equals the change in momentum: FΔt = Δp.'
        },
        {
            id: 'kw-t3-10',
            stem: 'A 0.5 kg ball moving at 10 m/s is struck and moves at 8 m/s in opposite direction after 0.04 s. Calculate the average force. [4 marks]',
            marks: 4,
            keywords: ['initial', 'final', 'change in momentum', '225', 'F = Δp/Δt', '5625'],
            modelAnswer: 'Initial momentum = 0.5 × 10 = 5 kg m/s. Final momentum = 0.5 × (-8) = -4 kg m/s. Change Δp = -4 - 5 = -9 kg m/s. Force F = Δp/Δt = -9/0.04 = -225 N. Magnitude = 225 N in opposite direction.'
        },
        {
            id: 'kw-t3-11',
            stem: 'Explain how crumple zones in cars reduce injury using the concept of impulse. [3 marks]',
            marks: 3,
            keywords: ['impulse', 'time', 'force', 'FΔt', 'reduce'],
            modelAnswer: 'In a crash, the change in momentum (Δp) is fixed. Crumple zones increase the collision time (Δt). Since F = Δp/Δt, a longer time reduces the average force on the occupants, reducing injury.'
        },
        {
            id: 'kw-t3-12',
            stem: 'A 2 kg trolley moving at 4 m/s collides with a 3 kg trolley at rest. They stick together. Calculate their velocity after the collision and state whether kinetic energy is conserved. [5 marks]',
            marks: 5,
            keywords: ['conservation', 'm1u1 + m2u2', '(m1 + m2)v', 'kinetic energy', 'not conserved'],
            modelAnswer: 'Total momentum before = (2 × 4) + (3 × 0) = 8 kg m/s. After collision: (2 + 3)v = 5v. 8 = 5v, so v = 1.6 m/s. KE before = ½ × 2 × 4² = 16 J. KE after = ½ × 5 × 1.6² = 6.4 J. KE is not conserved — this is an inelastic collision.'
        }
    ],

    flashcards: [
        // Force & Acceleration
        {
            id: 'fc-t3-1',
            front: 'State Newton\'s Second Law in equation form.',
            back: 'F = ma, where F is the resultant (net) force in newtons, m is mass in kilograms, and a is acceleration in m/s².',
            topic: 'Force & Acceleration'
        },
        {
            id: 'fc-t3-2',
            front: 'What does the F in F = ma represent?',
            back: 'F represents the resultant (net) force — the vector sum of all forces acting on the object, not any single force.',
            topic: 'Force & Acceleration'
        },
        {
            id: 'fc-t3-3',
            front: 'What is a free-body diagram?',
            back: 'A diagram showing all forces acting on a single object, drawn as arrows from the object, with lengths roughly proportional to force magnitudes and clearly labelled.',
            topic: 'Force & Acceleration'
        },
        {
            id: 'fc-t3-4',
            front: 'What condition exists when an object is in equilibrium?',
            back: 'The resultant (net) force is zero, so acceleration is zero. Object remains at rest or moves with constant velocity.',
            topic: 'Force & Acceleration'
        },

        // Mass, Weight & Gravitational Field Strength
        {
            id: 'fc-t3-5',
            front: 'What is mass and what are its properties?',
            back: 'Mass is a scalar quantity measuring the amount of matter in an object. It is measured in kilograms and is constant everywhere (same on Earth, Moon, Mars).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'fc-t3-6',
            front: 'What is weight and how is it calculated?',
            back: 'Weight is a vector force — the gravitational pull on an object by a planet. Equation: W = mg, where W is in newtons, m is mass in kg, and g is gravitational field strength in N/kg.',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'fc-t3-7',
            front: 'What is the value of g on Earth?',
            back: 'On Earth\'s surface, g = 9.81 N/kg, which is equivalent to 9.81 m/s² (the acceleration of free fall).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'fc-t3-8',
            front: 'Why does the same object have different weights on different planets?',
            back: 'Weight depends on gravitational field strength g, which varies with planet mass and radius. Mass is constant, but W = mg changes because g differs (Earth: 9.81, Moon: 1.6, Mars: 3.7 N/kg).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'fc-t3-9',
            front: 'Which instrument measures mass and which measures weight?',
            back: 'Mass is measured by a balance (comparing against known masses — works anywhere). Weight is measured by a spring balance or Newton-meter (measures force directly — varies with g).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },
        {
            id: 'fc-t3-10',
            front: 'What are the values of g on Moon, Mars, and Jupiter?',
            back: 'Moon: g = 1.6 m/s². Mars: g = 3.7 m/s². Jupiter: g = 24.8 m/s² (Jupiter has the strongest field due to its large mass).',
            topic: 'Mass, Weight & Gravitational Field Strength'
        },

        // Core Practical 1: Freefall
        {
            id: 'fc-t3-11',
            front: 'What is plotted on each axis in the freefall experiment to find g?',
            back: 'Plot height h on the y-axis and time squared (t²) on the x-axis. This gives a straight line through origin with gradient = g/2.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'fc-t3-12',
            front: 'What does the gradient of an h vs t² graph equal?',
            back: 'The gradient equals g/2. Therefore, g = 2 × gradient. This comes from the equation h = ½gt².',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'fc-t3-13',
            front: 'What are two systematic errors in measuring g?',
            back: '(1) Time delay between releasing ball and starting timer (reaction time). (2) Air resistance reducing measured acceleration below 9.81 m/s². Use electronic timing and dense balls to reduce these.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'fc-t3-14',
            front: 'What type of graph is expected when plotting h against t²?',
            back: 'A straight line through the origin. This confirms h is proportional to t² and that initial velocity is zero with no systematic time error.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },
        {
            id: 'fc-t3-15',
            front: 'How can random errors be reduced in the freefall experiment?',
            back: 'Repeat each height measurement at least three times and take a mean time. Discard anomalous results. Use electronic timers to reduce variability in timing.',
            topic: 'Core Practical 1: Acceleration of Freefall'
        },

        // Newton's Third Law
        {
            id: 'fc-t3-16',
            front: 'State Newton\'s Third Law of Motion.',
            back: 'If object A exerts a force on object B, then object B exerts an equal and opposite force on object A. Every action has an equal and opposite reaction.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'fc-t3-17',
            front: 'What are the four properties of a Newton Third Law force pair?',
            back: '(1) Equal in magnitude. (2) Opposite in direction. (3) Same type of force. (4) Act on different objects. If any property is missing, it is NOT a Third Law pair.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'fc-t3-18',
            front: 'Why are weight and normal force on a book NOT a Newton Third Law pair?',
            back: 'Weight (Earth on book, gravitational) and normal force (table on book, contact) are different types of force AND both act on the same object (the book). A genuine pair must be same force type and act on different objects.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'fc-t3-19',
            front: 'How does a rocket generate thrust in space?',
            back: 'The rocket engine expels hot exhaust gases downward. By Newton\'s Third Law, the gases exert an equal and opposite force upward on the rocket. This works in vacuum because the rocket only needs to push on the exhaust gases.',
            topic: 'Newton\'s Third Law of Motion'
        },
        {
            id: 'fc-t3-20',
            front: 'How does a swimmer propel themselves through water?',
            back: 'The swimmer pushes backward on the water with their hands. By Newton\'s Third Law, the water pushes forward on the swimmer\'s hands with equal force. This reaction force is what drives the swimmer forward.',
            topic: 'Newton\'s Third Law of Motion'
        },

        // Momentum
        {
            id: 'fc-t3-21',
            front: 'Define momentum and give its equation.',
            back: 'Momentum p is a vector quantity defined as the product of mass and velocity: p = mv. Unit: kg m/s or N s. Direction is same as velocity.',
            topic: 'Momentum'
        },
        {
            id: 'fc-t3-22',
            front: 'What is Newton\'s Second Law in terms of momentum?',
            back: 'Force equals the rate of change of momentum: F = Δp/Δt. This is Newton\'s original formulation and reduces to F = ma when mass is constant.',
            topic: 'Momentum'
        },
        {
            id: 'fc-t3-23',
            front: 'Define impulse and state its equation.',
            back: 'Impulse J is the product of force and time: J = FΔt. It equals the change in momentum: Δp. Unit: N s or kg m/s.',
            topic: 'Momentum'
        },
        {
            id: 'fc-t3-24',
            front: 'How does impulse relate to force-time graphs?',
            back: 'Impulse equals the area under a force-time graph. For a constant force, area = F × Δt. For a variable force, the area still gives total impulse.',
            topic: 'Momentum'
        },
        {
            id: 'fc-t3-25',
            front: 'How do safety features like crumple zones work?',
            back: 'They increase the collision time Δt. Since change in momentum Δp is fixed in a crash, F = Δp/Δt means a longer time gives a smaller average force on occupants, reducing injury.',
            topic: 'Momentum'
        },

        // Conservation of Linear Momentum
        {
            id: 'fc-t3-26',
            front: 'State the principle of conservation of linear momentum.',
            back: 'In a closed system with no net external force, total linear momentum before an event equals total linear momentum after: m1u1 + m2u2 = m1v1 + m2v2.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-27',
            front: 'What is an elastic collision?',
            back: 'A collision where both momentum AND kinetic energy are conserved. Objects bounce off each other without sticking. Examples: gas molecules, billiard balls, steel ball bearings.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-28',
            front: 'What is an inelastic collision?',
            back: 'A collision where momentum is conserved but kinetic energy is NOT. Some KE becomes heat, sound, or deformation. Objects may stick together (perfectly inelastic). Most real collisions are inelastic.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-29',
            front: 'What is a perfectly inelastic collision?',
            back: 'Objects stick together after collision and move as one combined mass. Use v = (m1u1 + m2u2) / (m1 + m2). Momentum conserved, KE not conserved.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-30',
            front: 'How does momentum conservation explain explosions from rest?',
            back: 'Before explosion, total momentum = 0 (all objects at rest). After explosion, objects move apart with equal and opposite momenta so total remains zero. Lighter object has greater speed: m1|v1| = m2|v2|.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-31',
            front: 'What is the conservation equation for a collision?',
            back: 'm1u1 + m2u2 = m1v1 + m2v2. Total momentum before = total momentum after. Must use consistent sign convention for directions.',
            topic: 'Conservation of Linear Momentum'
        },
        {
            id: 'fc-t3-32',
            front: 'How do you identify if a collision is elastic or inelastic?',
            back: 'Calculate total momentum before and after — should always be equal. Calculate total KE before and after. If equal → elastic collision. If KE after is less → inelastic collision.',
            topic: 'Conservation of Linear Momentum'
        }
    ]
};
