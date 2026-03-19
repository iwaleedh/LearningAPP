export const exercises_physics_4_16 = {

    // ─────────────────────────────────────────────────────────────────────────
    // MCQ  ·  30 items
    // ─────────────────────────────────────────────────────────────────────────
    mcq: [
        // ── Impulse ──────────────────────────────────────────────────────────
        {
            id: 'mcq-t16-1',
            stem: 'A force of 20 N acts on an object for 0.5 s. What is the impulse delivered to the object?',
            options: ['10 N s', '40 N s', '0.025 N s', '25 N s'],
            correctAnswer: 0,
            rationale: 'Impulse = FΔt = 20 × 0.5 = 10 N s. Option B would require multiplying instead of the correct operation; options C and D arise from arithmetic errors.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'mcq-t16-2',
            stem: 'Which of the following physical quantities is equal to impulse?',
            options: ['Change in kinetic energy', 'Change in momentum', 'Work done', 'Change in velocity'],
            correctAnswer: 1,
            rationale: 'Impulse = FΔt = Δp (change in momentum). It is NOT equal to the change in KE (which is work done), nor to change in velocity alone.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'mcq-t16-3',
            stem: 'What does the area under a force-time graph represent?',
            options: ['Work done', 'Power', 'Impulse', 'Kinetic energy'],
            correctAnswer: 2,
            rationale: 'Area under a force-time graph = ∫F dt = FΔt = impulse. The area under a force-displacement graph gives work done; area under power-time gives energy.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'mcq-t16-4',
            stem: 'A 2 kg ball changes velocity from 3 m/s to 7 m/s in the same direction. What is the magnitude of the impulse on the ball?',
            options: ['4 N s', '8 N s', '20 N s', '14 N s'],
            correctAnswer: 1,
            rationale: 'Impulse = Δp = mΔv = 2 × (7 − 3) = 2 × 4 = 8 N s. Option A forgets the mass factor; option C uses initial+final velocity; option D multiplies mass by final velocity only.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'mcq-t16-5',
            stem: 'Newton\'s second law expressed in terms of momentum states that the net force equals:',
            options: ['Total momentum of the system', 'Rate of change of momentum', 'Product of mass and displacement', 'Change in kinetic energy per unit time'],
            correctAnswer: 1,
            rationale: 'F = Δp/Δt — net force equals the rate of change of momentum. This form is more general than F = ma as it applies even when mass varies.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'mcq-t16-6',
            stem: 'A 0.5 kg object moving at 4 m/s receives an impulse of 3 N s in the direction of motion. What is its final speed?',
            options: ['7 m/s', '6 m/s', '10 m/s', '14 m/s'],
            correctAnswer: 2,
            rationale: 'p_initial = 0.5 × 4 = 2 N s. p_final = 2 + 3 = 5 N s. v = 5/0.5 = 10 m/s. Option A adds the impulse directly to the speed (ignoring mass); option B is a common arithmetic slip.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },

        // ── Core Practical 9 ─────────────────────────────────────────────────
        {
            id: 'mcq-t16-7',
            stem: 'In Core Practical 9 (Investigating Impulse), which instrument is used to measure the force exerted during the collision?',
            options: ['Ammeter', 'Force sensor connected to a data logger', 'Galvanometer', 'Calibrated spring balance (static)'],
            correctAnswer: 1,
            rationale: 'A force sensor (load cell) connected to a data logger records the force as a function of time during the collision, producing the force-time graph needed to calculate impulse.',
            topic: 'Core Practical 9: Investigating Impulse',
        },
        {
            id: 'mcq-t16-8',
            stem: 'In Core Practical 9, the area under the force-time curve is calculated and compared to which other experimental quantity?',
            options: ['Change in kinetic energy of the trolley', 'Change in potential energy', 'Change in momentum of the trolley', 'Work done by friction'],
            correctAnswer: 2,
            rationale: 'The area under the force-time graph gives the impulse (FΔt), which should equal the change in momentum (mΔv) of the trolley. This is the key relationship being verified.',
            topic: 'Core Practical 9: Investigating Impulse',
        },
        {
            id: 'mcq-t16-9',
            stem: 'In CP9, a light gate is used. How is the trolley\'s velocity calculated from the light gate data?',
            options: [
                'By timing how long the trolley takes to travel between two light gates',
                'By dividing the length of the interrupt card by the time it blocks the light beam',
                'By measuring the mass and the kinetic energy',
                'By reading force directly from the light gate',
            ],
            correctAnswer: 1,
            rationale: 'The interrupt card of known length (e.g. 10 cm) passes through the light gate. The datalogger records the time the beam is blocked. Speed = card length ÷ blocking time.',
            topic: 'Core Practical 9: Investigating Impulse',
        },
        {
            id: 'mcq-t16-10',
            stem: 'Which statement best describes the purpose of Core Practical 9?',
            options: [
                'To show that kinetic energy is conserved in a collision',
                'To verify that impulse (FΔt) equals the change in momentum of the trolley',
                'To show that momentum is not conserved when friction acts',
                'To measure the coefficient of restitution of a rubber ball',
            ],
            correctAnswer: 1,
            rationale: 'CP9 aims to verify the impulse-momentum theorem: impulse = FΔt = Δp. Students measure the area under the F-t graph and compare it to the measured change in momentum.',
            topic: 'Core Practical 9: Investigating Impulse',
        },

        // ── Applying Conservation of Linear Momentum ─────────────────────────
        {
            id: 'mcq-t16-11',
            stem: 'A 3 kg trolley moving at 5 m/s collides with a stationary 2 kg trolley. They move together after the collision. What is their combined velocity?',
            options: ['7.5 m/s', '3 m/s', '5 m/s', '2 m/s'],
            correctAnswer: 1,
            rationale: 'p_before = 3 × 5 = 15 kg m/s. Total mass after = 5 kg. v = 15/5 = 3 m/s. Option A uses only the first mass; option C is the original speed of trolley A.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'mcq-t16-12',
            stem: 'Under what condition is linear momentum conserved in a system of interacting objects?',
            options: [
                'Only when there is no friction between objects',
                'When the net external force on the system is zero',
                'Only when the collision is elastic',
                'Only when kinetic energy is also conserved',
            ],
            correctAnswer: 1,
            rationale: 'Momentum is conserved whenever the net external force on the system is zero (isolated system). This applies regardless of friction between objects, and to both elastic and inelastic collisions.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'mcq-t16-13',
            stem: 'A 5 kg trolley moving at 2 m/s east collides with a 3 kg trolley moving at 4 m/s west. They stick together. Taking east as positive, what is their combined velocity after the collision?',
            options: ['0.25 m/s east', '0.25 m/s west', '1.75 m/s west', '2.0 m/s east'],
            correctAnswer: 1,
            rationale: 'p_before = 5(+2) + 3(−4) = 10 − 12 = −2 kg m/s. Total mass = 8 kg. v = −2/8 = −0.25 m/s, i.e. 0.25 m/s west (negative direction).',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'mcq-t16-14',
            stem: 'Two ice skaters push off from rest. Skater A (mass 60 kg) moves away at 3 m/s east. What is the speed of skater B (mass 80 kg)?',
            options: ['2.25 m/s west', '2.25 m/s east', '3 m/s west', '4 m/s west'],
            correctAnswer: 0,
            rationale: 'Total initial momentum = 0. 60(3) + 80(v_B) = 0 → v_B = −180/80 = −2.25 m/s. The negative sign means westward. v_B = 2.25 m/s west.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'mcq-t16-15',
            stem: 'A rocket expels 2 kg of exhaust gas per second at an exhaust speed of 500 m/s relative to the rocket. What thrust force does this produce?',
            options: ['250 N', '500 N', '1000 N', '2000 N'],
            correctAnswer: 2,
            rationale: 'Thrust = Δp/Δt = (mass expelled per second) × (exhaust speed) = 2 × 500 = 1000 N. This follows directly from F = Δp/Δt applied to the expelled mass.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'mcq-t16-16',
            stem: 'Which of the following statements about an isolated system is correct?',
            options: [
                'The total kinetic energy is always constant',
                'The total linear momentum is always constant',
                'The total mechanical energy continuously increases',
                'Individual object velocities remain unchanged',
            ],
            correctAnswer: 1,
            rationale: 'In an isolated system (no net external force), total linear momentum is always conserved. Total KE is conserved only in elastic collisions. Total mechanical energy can decrease (inelastic collisions).',
            topic: 'Applying Conservation of Linear Momentum',
        },

        // ── Core Practical 10 ────────────────────────────────────────────────
        {
            id: 'mcq-t16-17',
            stem: 'In Core Practical 10 (Investigating Collisions using ICT), the motion sensors and data logger are primarily used to:',
            options: [
                'Measure the force-time profile during the collision',
                'Record the velocities of each trolley before and after the collision to verify conservation of momentum',
                'Measure the temperature rise due to friction',
                'Determine the coefficient of friction between the trolleys and track',
            ],
            correctAnswer: 1,
            rationale: 'CP10 uses ICT (motion sensors + data logger) to precisely measure trolley velocities before and after a collision, then checks whether total momentum is conserved.',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },
        {
            id: 'mcq-t16-18',
            stem: 'In CP10, why is it important to ensure the track is carefully levelled before the experiment?',
            options: [
                'To reduce air resistance between trolleys',
                'To eliminate the component of gravity along the track, keeping horizontal momentum isolated',
                'To ensure the data logger functions correctly',
                'To guarantee an elastic collision occurs',
            ],
            correctAnswer: 1,
            rationale: 'If the track is tilted, gravity has a component along the track — an external force that would change the system\'s momentum. Levelling removes this, creating a truly isolated system horizontally.',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },
        {
            id: 'mcq-t16-19',
            stem: 'In CP10, the uncertainty in trolley mass is 2% and the uncertainty in trolley velocity is 3%. What is the percentage uncertainty in the calculated momentum?',
            options: ['1%', '5%', '6%', '3%'],
            correctAnswer: 1,
            rationale: 'For p = mv, percentage uncertainty in p = % uncertainty in m + % uncertainty in v = 2% + 3% = 5%. Uncertainties in products are added (not combined in quadrature for this level).',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },
        {
            id: 'mcq-t16-20',
            stem: 'In CP10, two trolleys are connected with velcro so they stick together on impact. This type of collision is:',
            options: ['Elastic', 'Super-elastic', 'Perfectly inelastic', 'Nuclear'],
            correctAnswer: 2,
            rationale: 'When two objects stick together after collision they have a common final velocity — this is a perfectly inelastic collision. Maximum KE is lost (consistent with the velcro absorbing energy).',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },

        // ── Elastic & Inelastic Collisions ────────────────────────────────────
        {
            id: 'mcq-t16-21',
            stem: 'In a perfectly elastic head-on collision between two equal masses where one is initially at rest, what happens after the collision?',
            options: [
                'Both objects move together with half the original speed',
                'The originally moving object stops; the stationary one moves away at the original speed',
                'Both objects reverse direction',
                'Neither object moves',
            ],
            correctAnswer: 1,
            rationale: 'For elastic collision between equal masses (m and m, u and 0): v₁ = 0, v₂ = u. The momentum and KE are both completely transferred to the second object.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'mcq-t16-22',
            stem: 'Which of the following is conserved in an inelastic collision but NOT necessarily in an elastic collision?',
            options: [
                'Kinetic energy only',
                'Momentum only',
                'Both momentum and kinetic energy',
                'Neither momentum nor kinetic energy',
            ],
            correctAnswer: 1,
            rationale: 'Momentum is conserved in ALL collisions (elastic and inelastic) provided no net external force acts. Kinetic energy is only conserved in elastic collisions. So momentum is the quantity conserved in an inelastic collision.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'mcq-t16-23',
            stem: 'The statement "the relative speed of approach equals the relative speed of separation" applies to:',
            options: [
                'All collisions between any two objects',
                'Perfectly inelastic collisions only',
                'Elastic collisions only',
                'Explosions only',
            ],
            correctAnswer: 2,
            rationale: 'This is the defining property of elastic collisions (equivalent to conservation of KE + momentum). In inelastic collisions the relative speed of separation is less than the relative speed of approach.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'mcq-t16-24',
            stem: 'A 4 kg object moving at 6 m/s has a perfectly elastic collision with a stationary 12 kg object. What is the velocity of the 4 kg object after the collision?',
            options: ['6 m/s forward', '3 m/s backward', '1.5 m/s forward', '4.5 m/s forward'],
            correctAnswer: 1,
            rationale: 'v₁ = ((m₁ − m₂)/(m₁ + m₂)) × u₁ = ((4 − 12)/16) × 6 = (−8/16) × 6 = −3 m/s. The negative sign means it bounces back at 3 m/s.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'mcq-t16-25',
            stem: 'In an inelastic collision, some kinetic energy is converted to other forms. Which of the following correctly names those forms?',
            options: [
                'Nuclear energy',
                'Gravitational potential energy only',
                'Thermal energy, sound, and deformation (strain) energy',
                'Electromagnetic radiation only',
            ],
            correctAnswer: 2,
            rationale: 'During an inelastic collision, KE is converted to thermal energy (heat), sound waves, and energy stored in deformation (plastic deformation / crumpling). None of the other options are typical of everyday collisions.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'mcq-t16-26',
            stem: 'A 2 kg ball moving at 5 m/s has a perfectly elastic head-on collision with a stationary 8 kg ball. How much kinetic energy does the 8 kg ball have after the collision?',
            options: ['25 J', '16 J', '9 J', '12.5 J'],
            correctAnswer: 1,
            rationale: 'v₂ = (2m₁/(m₁+m₂)) × u₁ = (4/10) × 5 = 2 m/s. KE₈ = ½ × 8 × 4 = 16 J. Check: v₁ = ((2−8)/10) × 5 = −3 m/s, KE₂ = ½ × 2 × 9 = 9 J. Total = 9 + 16 = 25 J = initial KE ✓',
            topic: 'Elastic & Inelastic Collisions',
        },

        // ── Energy-Momentum Relation ──────────────────────────────────────────
        {
            id: 'mcq-t16-27',
            stem: 'An object has momentum p = 6 kg m/s and mass 2 kg. What is its kinetic energy?',
            options: ['3 J', '6 J', '9 J', '18 J'],
            correctAnswer: 2,
            rationale: 'KE = p²/(2m) = 36/(2 × 2) = 36/4 = 9 J. Option A divides by 2m without squaring p; option D multiplies rather than divides.',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
        {
            id: 'mcq-t16-28',
            stem: 'Which formula correctly gives the kinetic energy of a non-relativistic object in terms of its momentum p and mass m?',
            options: ['KE = p/(2m)', 'KE = p²/(2m)', 'KE = 2p/m', 'KE = p²m'],
            correctAnswer: 1,
            rationale: 'Starting from KE = ½mv² and p = mv: KE = ½m(p/m)² = p²/(2m). This is the standard non-relativistic energy-momentum relation.',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
        {
            id: 'mcq-t16-29',
            stem: 'A particle has kinetic energy 50 J and mass 4 kg. What is its momentum?',
            options: ['10 kg m/s', '25 kg m/s', '20 kg m/s', '12.5 kg m/s'],
            correctAnswer: 2,
            rationale: 'p² = 2mKE = 2 × 4 × 50 = 400. p = √400 = 20 kg m/s. Option A is √(KE/2) carelessly; option B is ½mv without squaring correctly.',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
        {
            id: 'mcq-t16-30',
            stem: 'The relativistic energy-momentum relation is E² = p²c² + m²c⁴. For a photon (rest mass = 0), which expression gives its energy?',
            options: ['E = mc²', 'E = pc', 'E = p²/(2m)', 'E = pc/2'],
            correctAnswer: 1,
            rationale: 'Setting m = 0: E² = p²c², so E = pc. This is why photons have momentum p = E/c despite having zero rest mass. Option A applies to rest energy of massive particles.',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FILL-BLANK  ·  15 items
    // ─────────────────────────────────────────────────────────────────────────
    fillblank: [
        {
            id: 'fb-t16-1',
            stem: 'Complete the following definition of impulse.',
            template: 'Impulse is defined as the product of the resultant force and the __BLANK__ over which it acts, and it equals the __BLANK__ in momentum.',
            blanks: [
                { answer: 'time interval' },
                { answer: 'change' },
            ],
            rationale: 'Impulse = FΔt = Δp. The two key facts: it involves a time interval, and it equals the change in momentum.',
        },
        {
            id: 'fb-t16-2',
            stem: 'State the SI unit of impulse.',
            template: 'The SI unit of impulse is the __BLANK__, which is equivalent to kg m/s.',
            blanks: [
                { answer: 'newton second' },
            ],
            rationale: 'Impulse = FΔt; unit = N × s = N s. Since F = ma, N = kg m s⁻², so N s = kg m s⁻¹ — the same unit as momentum.',
        },
        {
            id: 'fb-t16-3',
            stem: 'Calculate the impulse from the given values.',
            template: 'A force of 15 N acts for 0.4 s. The impulse delivered is __BLANK__ N s.',
            blanks: [
                { answer: '6' },
            ],
            rationale: 'Impulse = FΔt = 15 × 0.4 = 6 N s.',
        },
        {
            id: 'fb-t16-4',
            stem: 'Complete the statement about isolated systems.',
            template: 'In an isolated system where no net external force acts, the total linear momentum is __BLANK__.',
            blanks: [
                { answer: 'conserved' },
            ],
            rationale: 'Conservation of linear momentum: total momentum remains constant when the net external force on the system is zero.',
        },
        {
            id: 'fb-t16-5',
            stem: 'Calculate the final velocity using conservation of momentum.',
            template: 'A 4 kg trolley moving at 3 m/s collides and sticks to a stationary 2 kg trolley. Their combined velocity is __BLANK__ m/s.',
            blanks: [
                { answer: '2' },
            ],
            rationale: 'p_before = 4 × 3 = 12 kg m/s. Total mass = 6 kg. v = 12/6 = 2 m/s.',
        },
        {
            id: 'fb-t16-6',
            stem: 'Complete the statement about elastic collisions.',
            template: 'In an elastic collision, both __BLANK__ and kinetic energy are conserved.',
            blanks: [
                { answer: 'momentum' },
            ],
            rationale: 'An elastic collision is defined by the conservation of both total linear momentum and total kinetic energy.',
        },
        {
            id: 'fb-t16-7',
            stem: 'Complete the definition of a perfectly inelastic collision.',
            template: 'In a perfectly inelastic collision, the two objects __BLANK__ after impact, moving with a common final velocity.',
            blanks: [
                { answer: 'stick together' },
            ],
            rationale: 'Perfectly inelastic collisions result in the objects joining together. This maximises kinetic energy loss while still conserving momentum.',
        },
        {
            id: 'fb-t16-8',
            stem: 'Complete the non-relativistic energy-momentum formula.',
            template: 'The kinetic energy of an object in terms of its momentum p and mass m is KE = __BLANK__.',
            blanks: [
                { answer: 'p²/(2m)' },
            ],
            rationale: 'Derived from KE = ½mv² and p = mv: KE = ½m(p/m)² = p²/(2m).',
        },
        {
            id: 'fb-t16-9',
            stem: 'Identify what the area under a force-time graph represents.',
            template: 'The area under a force-time graph represents the __BLANK__ delivered to the object.',
            blanks: [
                { answer: 'impulse' },
            ],
            rationale: 'Area = ∫F dt = FΔt (for constant force) = impulse. This is the key feature used in Core Practical 9.',
        },
        {
            id: 'fb-t16-10',
            stem: 'Complete Newton\'s second law written in terms of momentum.',
            template: 'Newton\'s second law can be written as F = Δp / __BLANK__, where Δp is the change in momentum.',
            blanks: [
                { answer: 'Δt' },
            ],
            rationale: 'F = Δp/Δt expresses Newton\'s second law more generally than F = ma, since it is valid even when mass changes over time.',
        },
        {
            id: 'fb-t16-11',
            stem: 'Identify the instrument used in CP9 to record force over time.',
            template: 'In Core Practical 9, a __BLANK__ connected to a data logger is used to record the force exerted during the collision.',
            blanks: [
                { answer: 'force sensor' },
            ],
            rationale: 'The force sensor (load cell) samples force at high frequency during the collision interval and sends data to the logger, producing the force-time graph.',
        },
        {
            id: 'fb-t16-12',
            stem: 'State the outcome using the elastic collision result for equal masses.',
            template: 'In a head-on elastic collision between identical masses where one is initially at rest, the moving object __BLANK__ and the stationary one moves away at the original speed.',
            blanks: [
                { answer: 'stops' },
            ],
            rationale: 'For m₁ = m₂: v₁ = ((m₁−m₂)/(m₁+m₂))u = 0, so the first object stops completely. Total KE and momentum are both transferred to the second object.',
        },
        {
            id: 'fb-t16-13',
            stem: 'State what motion sensors measure in CP10.',
            template: 'In Core Practical 10, motion sensors are used to measure the __BLANK__ of each trolley before and after the collision.',
            blanks: [
                { answer: 'velocity' },
            ],
            rationale: 'Velocity (both magnitude and direction) must be measured before and after to calculate momentum. The data logger records the time-position data from which velocity is derived.',
        },
        {
            id: 'fb-t16-14',
            stem: 'Calculate kinetic energy using the energy-momentum relation.',
            template: 'A 3 kg object has momentum 12 kg m/s. Its kinetic energy is __BLANK__ J.',
            blanks: [
                { answer: '24' },
            ],
            rationale: 'KE = p²/(2m) = 144/(2 × 3) = 144/6 = 24 J.',
        },
        {
            id: 'fb-t16-15',
            stem: 'Complete the condition required for conservation of linear momentum.',
            template: 'The condition for linear momentum to be conserved is that the net __BLANK__ force on the system must be zero.',
            blanks: [
                { answer: 'external' },
            ],
            rationale: 'Internal forces (e.g. forces between colliding objects) are action-reaction pairs that cancel. Only a net external force changes the total momentum of the system.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // DRAG-DROP  ·  10 items
    // ─────────────────────────────────────────────────────────────────────────
    dragdrop: [
        {
            id: 'dd-t16-1',
            stem: 'Classify each collision scenario as Elastic or Inelastic.',
            categories: ['Elastic', 'Inelastic'],
            items: [
                { text: 'Two identical billiard balls — the moving one stops dead and the stationary one moves away at the original speed.', category: 'Elastic' },
                { text: 'Two trolleys connected by velcro collide and travel together.', category: 'Inelastic' },
                { text: 'A neutron scatters off a stationary proton and they both move separately with total KE conserved.', category: 'Elastic' },
                { text: 'A clay ball is thrown at a stationary clay block and they stick together.', category: 'Inelastic' },
                { text: 'A rubber Superball dropped onto a hard floor bounces back to almost the same height.', category: 'Elastic' },
                { text: 'Two railway wagons couple together on impact.', category: 'Inelastic' },
                { text: 'A steel ball bearing hits a row of identical balls and ejects only the last one at the original speed.', category: 'Elastic' },
                { text: 'Two cars collide and crumple together, remaining joined.', category: 'Inelastic' },
            ],
        },
        {
            id: 'dd-t16-2',
            stem: 'Sort each quantity into whether it is conserved in ALL collisions or ONLY in elastic collisions.',
            categories: ['Conserved in all collisions', 'Conserved only in elastic collisions'],
            items: [
                { text: 'Total linear momentum', category: 'Conserved in all collisions' },
                { text: 'Total kinetic energy', category: 'Conserved only in elastic collisions' },
                { text: 'Total relativistic energy of the system', category: 'Conserved in all collisions' },
                { text: 'Relative speed of approach = relative speed of separation', category: 'Conserved only in elastic collisions' },
                { text: 'Total vector momentum of isolated system', category: 'Conserved in all collisions' },
                { text: 'The sum of kinetic energies of all objects', category: 'Conserved only in elastic collisions' },
            ],
        },
        {
            id: 'dd-t16-3',
            stem: 'Match each physical quantity to its correct SI unit.',
            categories: ['N s', 'J', 'kg', 'm/s'],
            items: [
                { text: 'Impulse', category: 'N s' },
                { text: 'Momentum', category: 'N s' },
                { text: 'Kinetic energy', category: 'J' },
                { text: 'Mass', category: 'kg' },
                { text: 'Speed', category: 'm/s' },
                { text: 'Change in momentum', category: 'N s' },
            ],
        },
        {
            id: 'dd-t16-4',
            stem: 'Classify each scenario as either an Explosion (objects push apart from rest or near-rest) or a Collision (objects impact each other).',
            categories: ['Explosion', 'Collision'],
            items: [
                { text: 'A rifle fires a bullet — the rifle recoils backwards.', category: 'Explosion' },
                { text: 'Two trolleys with a compressed spring between them are released from rest.', category: 'Explosion' },
                { text: 'A stationary artillery shell splits into two fragments.', category: 'Explosion' },
                { text: 'A cricket ball strikes a stationary target and bounces off.', category: 'Collision' },
                { text: 'Two ice skaters initially at rest push off each other.', category: 'Explosion' },
                { text: 'A football hits the crossbar and changes direction.', category: 'Collision' },
                { text: 'A moving trolley strikes a stationary one and they separate.', category: 'Collision' },
            ],
        },
        {
            id: 'dd-t16-5',
            stem: 'Classify each statement as specifically describing Impulse or Momentum.',
            categories: ['Impulse', 'Momentum'],
            items: [
                { text: 'Equals F × Δt', category: 'Impulse' },
                { text: 'Equals mass × velocity (mv)', category: 'Momentum' },
                { text: 'Equals the area under a force-time graph', category: 'Impulse' },
                { text: 'Is conserved in all isolated collisions', category: 'Momentum' },
                { text: 'Equals the change in momentum of an object', category: 'Impulse' },
                { text: 'Describes the quantity of motion an object possesses', category: 'Momentum' },
            ],
        },
        {
            id: 'dd-t16-6',
            stem: 'Sort each step of Core Practical 9 into the correct phase of the experiment.',
            categories: ['Setup', 'Data Collection', 'Analysis'],
            items: [
                { text: 'Attach the force sensor securely to a fixed support at the end of the track.', category: 'Setup' },
                { text: 'Measure the mass of the trolley using a digital balance.', category: 'Setup' },
                { text: 'Position the light gate and connect it to the data logger.', category: 'Setup' },
                { text: 'Release the trolley and allow it to collide with the force sensor.', category: 'Data Collection' },
                { text: 'Record the force-time graph displayed by the data logger.', category: 'Data Collection' },
                { text: 'Calculate the area under the force-time graph to find impulse.', category: 'Analysis' },
                { text: 'Compare the calculated impulse with mv − mu.', category: 'Analysis' },
            ],
        },
        {
            id: 'dd-t16-7',
            stem: 'Sort each application into those best addressed using the Impulse form of Newton\'s second law (F = Δp/Δt) or the Traditional form (F = ma).',
            categories: ['Impulse form F = Δp/Δt', 'Traditional form F = ma'],
            items: [
                { text: 'Calculating the thrust force from a rocket that expels mass continuously.', category: 'Impulse form F = Δp/Δt' },
                { text: 'Finding the acceleration of a constant-mass block on a frictionless slope.', category: 'Traditional form F = ma' },
                { text: 'Determining the average braking force from a car\'s change in momentum over a stopping time.', category: 'Impulse form F = Δp/Δt' },
                { text: 'Calculating the net force needed to accelerate a fixed-mass vehicle at 2 m/s².', category: 'Traditional form F = ma' },
                { text: 'Analysing the average force during a bat-ball impact that lasts 5 ms.', category: 'Impulse form F = Δp/Δt' },
                { text: 'Finding the gravitational force on a stationary object of known mass.', category: 'Traditional form F = ma' },
            ],
        },
        {
            id: 'dd-t16-8',
            stem: 'Sort each formula into those that calculate Kinetic Energy or Momentum.',
            categories: ['Kinetic Energy formula', 'Momentum formula'],
            items: [
                { text: '½mv²', category: 'Kinetic Energy formula' },
                { text: 'mv', category: 'Momentum formula' },
                { text: 'p²/(2m)', category: 'Kinetic Energy formula' },
                { text: '√(2m × KE)', category: 'Momentum formula' },
                { text: '½m(v² − u²)', category: 'Kinetic Energy formula' },
                { text: 'm₁v₁ + m₂v₂ (total momentum of two objects)', category: 'Momentum formula' },
            ],
        },
        {
            id: 'dd-t16-9',
            stem: 'In Core Practical 10, sort each measurement into those that ARE needed to verify conservation of momentum or those that are NOT sufficient on their own.',
            categories: ['Needed to verify conservation', 'Not sufficient on its own'],
            items: [
                { text: 'Mass of trolley A before collision', category: 'Needed to verify conservation' },
                { text: 'Mass of trolley B before collision', category: 'Needed to verify conservation' },
                { text: 'Velocity of trolley A before the collision', category: 'Needed to verify conservation' },
                { text: 'Velocity of both trolleys after the collision', category: 'Needed to verify conservation' },
                { text: 'Temperature rise of the trolleys during impact', category: 'Not sufficient on its own' },
                { text: 'Colour/material of the trolleys', category: 'Not sufficient on its own' },
            ],
        },
        {
            id: 'dd-t16-10',
            stem: 'Classify each statement about the Energy-Momentum relation KE = p²/(2m) as True or False.',
            categories: ['True', 'False'],
            items: [
                { text: 'KE = p²/(2m) applies at non-relativistic speeds.', category: 'True' },
                { text: 'Doubling the momentum at constant mass quadruples the kinetic energy.', category: 'True' },
                { text: 'An object at rest can have a non-zero momentum.', category: 'False' },
                { text: 'For the same momentum, a more massive object has more kinetic energy.', category: 'False' },
                { text: 'Halving the mass at constant momentum doubles the kinetic energy.', category: 'True' },
                { text: 'Momentum is a scalar quantity.', category: 'False' },
                { text: 'Both momentum and impulse have units of N s.', category: 'True' },
                { text: 'In an elastic collision, momentum is conserved but kinetic energy is not.', category: 'False' },
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // SEQUENCE  ·  8 items  (steps listed in CORRECT order)
    // ─────────────────────────────────────────────────────────────────────────
    sequence: [
        {
            id: 'seq-t16-1',
            stem: 'Put these steps for solving a 1D conservation of momentum problem in the correct order:',
            steps: [
                'Identify all objects involved and write down their masses.',
                'Define a positive direction and assign signed velocities to each object.',
                'Write the conservation equation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.',
                'Apply any additional constraint (e.g. elastic: KE conserved; perfectly inelastic: v₁ = v₂).',
                'Solve the resulting equation(s) for the unknown velocity or velocities.',
                'Check the answer by verifying that total momentum is the same before and after.',
            ],
        },
        {
            id: 'seq-t16-2',
            stem: 'Place the steps of Core Practical 9 (Investigating Impulse) in the correct experimental order:',
            steps: [
                'Level the track and attach the force sensor securely at one end.',
                'Measure the mass of the trolley with a digital balance.',
                'Fit the interrupt card to the trolley and set up the light gate connected to the data logger.',
                'Release the trolley from rest and allow it to collide with the force sensor.',
                'Record the force-time graph from the data logger and note the trolley\'s change in velocity from the light gate.',
                'Calculate the impulse (area under F-t graph) and compare it with the measured change in momentum mΔv.',
            ],
        },
        {
            id: 'seq-t16-3',
            stem: 'Arrange the steps to calculate kinetic energy using the energy-momentum relation KE = p²/(2m):',
            steps: [
                'Determine or measure the momentum of the object using p = mv.',
                'Square the momentum value to obtain p².',
                'Calculate 2m (twice the mass of the object).',
                'Divide p² by 2m to obtain the kinetic energy.',
                'State the result with the correct unit (joules, J).',
            ],
        },
        {
            id: 'seq-t16-4',
            stem: 'Put these steps for finding the average impact force from a force-time graph in the correct order:',
            steps: [
                'Mark the baseline (zero-force level) on the force-time graph.',
                'Identify the time interval Δt during which the force acts above the baseline.',
                'Calculate the area under the force-time curve to find the impulse (use counting squares or integration).',
                'Divide the impulse by the time interval Δt to find the average force.',
                'State the direction of the force and check it is consistent with the observed change in velocity.',
            ],
        },
        {
            id: 'seq-t16-5',
            stem: 'Place the steps of Core Practical 10 (Investigating Collisions using ICT) in the correct order:',
            steps: [
                'Set up two trolleys on a level, low-friction track and attach motion sensors.',
                'Measure and record the mass of each trolley.',
                'Set trolley A moving at a measured initial velocity; record it with the motion sensor.',
                'Allow trolley A to collide with stationary trolley B; record the velocities of both trolleys immediately after the collision.',
                'Calculate the total momentum before the collision (p_total = m_A × u_A).',
                'Calculate the total momentum after the collision and compare the two values to check conservation.',
            ],
        },
        {
            id: 'seq-t16-6',
            stem: 'Arrange the steps to determine whether a collision is elastic using the relative speed test:',
            steps: [
                'Record the velocity of each object before the collision (u₁ and u₂).',
                'Calculate the relative speed of approach: (u₁ − u₂) (using a consistent sign convention).',
                'Record the velocity of each object after the collision (v₁ and v₂).',
                'Calculate the relative speed of separation: (v₂ − v₁).',
                'If relative speed of approach equals relative speed of separation, conclude the collision is elastic.',
            ],
        },
        {
            id: 'seq-t16-7',
            stem: 'Place these steps for solving an explosion problem (two objects initially at rest) in the correct order:',
            steps: [
                'Establish that the total initial momentum of the system is zero.',
                'Write the conservation equation: 0 = m₁v₁ + m₂v₂.',
                'Rearrange to: m₁v₁ = −m₂v₂ (the two momenta are equal and opposite).',
                'Substitute the known mass and velocity of the first object.',
                'Solve for the unknown speed of the second object and state its direction (opposite to the first).',
            ],
        },
        {
            id: 'seq-t16-8',
            stem: 'Put these steps for applying F = Δp/Δt to find the average force during a collision in the correct order:',
            steps: [
                'Calculate the initial momentum of the object: p₁ = mu.',
                'Calculate the final momentum, using the correct sign if the direction reverses: p₂ = mv.',
                'Find the change in momentum: Δp = p₂ − p₁.',
                'Determine the duration of the impact Δt (from the data logger or force-time graph).',
                'Calculate the average force: F = Δp / Δt and state its direction.',
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // KEYWORD  ·  12 items
    // ─────────────────────────────────────────────────────────────────────────
    keyword: [
        {
            id: 'kw-t16-1',
            stem: 'Explain what is meant by the impulse of a force. [2 marks]',
            marks: 2,
            keywords: ['force', 'time', 'FΔt', 'change in momentum', 'N s', 'vector'],
            modelAnswer: 'Impulse is the product of the resultant force and the time interval over which it acts (= FΔt). It is equal to the change in momentum of the object and is measured in N s. Impulse is a vector quantity.',
        },
        {
            id: 'kw-t16-2',
            stem: 'State the principle of conservation of linear momentum. [2 marks]',
            marks: 2,
            keywords: ['total momentum', 'isolated system', 'no external force', 'constant', 'conserved'],
            modelAnswer: 'The total linear momentum of an isolated system remains constant, provided no net external force acts on the system (i.e. the total momentum before any interaction equals the total momentum after).',
        },
        {
            id: 'kw-t16-3',
            stem: 'A 0.15 kg ball moving at 20 m/s strikes a wall and rebounds at 12 m/s. The collision lasts 0.05 s. Calculate the magnitude of the average force on the ball during the collision. [3 marks]',
            marks: 3,
            keywords: ['Δp', '0.15', 'change in momentum', '4.8', '0.05', '96 N'],
            modelAnswer: 'Taking the initial direction as positive: Δp = m(v − u) = 0.15(−12 − 20) = 0.15 × (−32) = −4.8 N s. F = Δp/Δt = −4.8/0.05 = −96 N. The magnitude of the average force on the ball is 96 N (directed away from the wall).',
        },
        {
            id: 'kw-t16-4',
            stem: 'Distinguish between an elastic collision and an inelastic collision. [3 marks]',
            marks: 3,
            keywords: ['momentum conserved', 'kinetic energy', 'elastic KE conserved', 'inelastic KE not conserved', 'heat', 'deformation', 'sound'],
            modelAnswer: 'In both types of collision, total linear momentum is conserved. In an elastic collision, total kinetic energy is also conserved. In an inelastic collision, kinetic energy is not conserved — some is converted to thermal energy, sound, or deformation (strain) energy. In a perfectly inelastic collision the objects stick together.',
        },
        {
            id: 'kw-t16-5',
            stem: 'A 2 kg trolley moving at 3 m/s collides with a stationary 4 kg trolley. They stick together. Calculate (i) their combined velocity after the collision and (ii) the kinetic energy lost. [4 marks]',
            marks: 4,
            keywords: ['6 kg m/s', '6 kg', '1 m/s', '9 J', '3 J', '6 J lost'],
            modelAnswer: '(i) p_before = 2 × 3 = 6 kg m/s. (2 + 4)v = 6 → v = 1 m/s. (ii) KE_before = ½ × 2 × 3² = 9 J. KE_after = ½ × 6 × 1² = 3 J. KE lost = 9 − 3 = 6 J.',
        },
        {
            id: 'kw-t16-6',
            stem: 'State one advantage of expressing Newton\'s second law as F = Δp/Δt rather than as F = ma. [1 mark]',
            marks: 1,
            keywords: ['variable mass', 'changing mass', 'rocket', 'more general'],
            modelAnswer: 'The form F = Δp/Δt is more general because it applies even when the mass of the object is changing (e.g. a rocket burning fuel). F = ma is only valid for constant mass.',
        },
        {
            id: 'kw-t16-7',
            stem: 'Describe how Core Practical 9 verifies that impulse equals the change in momentum. [3 marks]',
            marks: 3,
            keywords: ['force sensor', 'force-time graph', 'area', 'impulse', 'light gate', 'change in momentum', 'compare'],
            modelAnswer: 'A trolley of measured mass collides with a force sensor while a light gate measures its velocity before and after. The data logger records the force-time graph during the collision. The area under the graph (impulse = FΔt) is calculated, and the change in momentum (mΔv) is calculated from the light gate data. The two values are compared — agreement verifies impulse = Δp.',
        },
        {
            id: 'kw-t16-8',
            stem: 'A particle of mass 0.5 kg has kinetic energy 8 J. Calculate its momentum. [2 marks]',
            marks: 2,
            keywords: ['p² = 2mKE', '2 × 0.5 × 8', 'p² = 8', '2.83 kg m/s', '√8'],
            modelAnswer: 'Using KE = p²/(2m): p² = 2mKE = 2 × 0.5 × 8 = 8. p = √8 = 2√2 ≈ 2.83 kg m/s.',
        },
        {
            id: 'kw-t16-9',
            stem: 'Explain why the total kinetic energy after a collision can never exceed the total kinetic energy before the collision. [3 marks]',
            marks: 3,
            keywords: ['energy conservation', 'cannot create energy', 'internal energy', 'thermal', 'deformation', 'first law'],
            modelAnswer: 'The total energy of a closed system must be conserved (first law of thermodynamics). During a collision, some kinetic energy can be converted into other forms such as thermal energy, sound, or deformation energy. However, energy cannot be created from nothing, so the final kinetic energy can never exceed the initial kinetic energy.',
        },
        {
            id: 'kw-t16-10',
            stem: 'Compare the outcomes of a head-on elastic collision and a perfectly inelastic collision between two equal masses, where one mass is initially at rest. [4 marks]',
            marks: 4,
            keywords: ['elastic: first stops', 'second moves at u', 'KE conserved', 'perfectly inelastic: stick together', 'u/2', 'KE halved', 'KE lost'],
            modelAnswer: 'Elastic: the moving mass stops (v₁ = 0) and the stationary mass moves away at the original speed u (v₂ = u). All KE is conserved. Perfectly inelastic: both masses stick together and share a common velocity u/2. KE_after = ½(2m)(u/2)² = ¼mu², which is half the original KE ½mu² — so 50% of the KE is lost.',
        },
        {
            id: 'kw-t16-11',
            stem: 'State two sources of error in Core Practical 10 (Investigating Collisions using ICT) and suggest an improvement for each. [4 marks]',
            marks: 4,
            keywords: ['friction', 'tilted track', 'velocity measurement', 'light gates', 'mass measurement', 'systematic error', 'data logger', 'level track'],
            modelAnswer: '1. Friction on the track acts as an external force, reducing momentum — improvement: use an air track to eliminate friction, or compensate by tilting the track slightly. 2. Uncertainty in velocity measurement from motion sensors — improvement: use light gates with an interrupt card for more precise and repeatable velocity readings.',
        },
        {
            id: 'kw-t16-12',
            stem: 'Show that the non-relativistic kinetic energy can be written as KE = p²/(2m). [2 marks]',
            marks: 2,
            keywords: ['KE = ½mv²', 'p = mv', 'p² = m²v²', 'p²/2m = ½mv²', 'derive'],
            modelAnswer: 'Start with KE = ½mv² and the definition p = mv, so v = p/m. Substituting: KE = ½m(p/m)² = ½m × p²/m² = p²/(2m). ✓',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FLASHCARDS  ·  25 items
    // ─────────────────────────────────────────────────────────────────────────
    flashcards: [
        // ── Impulse ──────────────────────────────────────────────────────────
        {
            id: 'fc-t16-1',
            front: 'State the formula for impulse in terms of force F and time interval Δt.',
            back: 'Impulse = F × Δt\nUnits: N s (equivalent to kg m/s)\nImpulse is a vector quantity in the direction of the force.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'fc-t16-2',
            front: 'What does the area under a force-time graph represent?',
            back: 'The impulse delivered to the object.\nArea = ∫F dt = FΔt (for constant force)\nThis equals the change in momentum of the object.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'fc-t16-3',
            front: 'State the impulse-momentum theorem.',
            back: 'Impulse = Change in momentum\nFΔt = Δp = mv − mu\nThe impulse delivered to an object equals its change in momentum.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'fc-t16-4',
            front: 'Show that N s and kg m/s are equivalent units for impulse/momentum.',
            back: 'F has units N = kg m s⁻²\nMultiplying by time: N × s = kg m s⁻² × s = kg m s⁻¹\nSo 1 N s = 1 kg m s⁻¹ ✓',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },
        {
            id: 'fc-t16-5',
            front: 'Express Newton\'s second law in terms of momentum and state why this form is more general.',
            back: 'F = Δp/Δt (net force = rate of change of momentum)\nMore general than F = ma because it applies even when mass is changing (e.g. rocket expelling fuel). F = ma assumes constant mass.',
            topic: 'Impulse (Impulse = FΔt = Δp)',
        },

        // ── Core Practical 9 ─────────────────────────────────────────────────
        {
            id: 'fc-t16-6',
            front: 'What relationship does Core Practical 9 verify?',
            back: 'It verifies the impulse-momentum theorem:\nImpulse (area under F-t graph) = change in momentum (mΔv)\nThe force sensor records F-t; a light gate measures velocity change.',
            topic: 'Core Practical 9: Investigating Impulse',
        },
        {
            id: 'fc-t16-7',
            front: 'How is the trolley\'s velocity determined using a light gate in CP9?',
            back: 'An interrupt card of known length (e.g. 10 cm) is attached to the trolley.\nAs the card passes through the gate, the beam is blocked for a time t.\nVelocity = length of card ÷ time blocked.',
            topic: 'Core Practical 9: Investigating Impulse',
        },
        {
            id: 'fc-t16-8',
            front: 'How is impulse measured in Core Practical 9?',
            back: 'A force sensor connected to a data logger records force vs time during the collision.\nImpulse = area under the force-time graph (found by counting squares or numerical integration).\nThis is compared to the trolley\'s change in momentum.',
            topic: 'Core Practical 9: Investigating Impulse',
        },

        // ── Applying Conservation of Linear Momentum ─────────────────────────
        {
            id: 'fc-t16-9',
            front: 'State the principle of conservation of linear momentum.',
            back: 'The total linear momentum of an isolated system is constant.\nCondition: no net external force acts on the system.\nApplies to ALL types of collision (elastic and inelastic) and to explosions.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'fc-t16-10',
            front: 'Write the conservation of momentum equation for two objects colliding in 1D.',
            back: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\nwhere u = initial velocity, v = final velocity.\nSigns must be consistent — choose a positive direction first.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'fc-t16-11',
            front: 'A 3 kg trolley at 4 m/s collides and sticks to a stationary 1 kg trolley. Find the final velocity.',
            back: 'p_before = 3 × 4 = 12 kg m/s\np_after = (3 + 1)v = 4v\n4v = 12 → v = 3 m/s\nFinal velocity = 3 m/s (same direction as the initial motion).',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'fc-t16-12',
            front: 'Two ice skaters (50 kg and 70 kg) push off from rest. The 50 kg skater moves at 2.1 m/s. Find the speed of the 70 kg skater.',
            back: 'Initial total momentum = 0\n50 × 2.1 + 70 × v₂ = 0\n105 + 70v₂ = 0\nv₂ = −105/70 = −1.5 m/s\nThe 70 kg skater moves at 1.5 m/s in the opposite direction.',
            topic: 'Applying Conservation of Linear Momentum',
        },
        {
            id: 'fc-t16-13',
            front: 'When is linear momentum NOT conserved in a collision?',
            back: 'When a net external force acts on the system during the interaction.\nExamples: friction from a surface not accounted for, gravity with a vertical component, an applied external force.\nInternal forces (between colliding objects) cancel as Newton\'s 3rd Law pairs — they do not change total momentum.',
            topic: 'Applying Conservation of Linear Momentum',
        },

        // ── Core Practical 10 ────────────────────────────────────────────────
        {
            id: 'fc-t16-14',
            front: 'What does Core Practical 10 aim to verify?',
            back: 'CP10 verifies conservation of linear momentum in 1D collisions.\nICT tools (motion sensors, data logger) record trolley velocities before and after.\nTotal momentum before is calculated and compared to total momentum after.',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },
        {
            id: 'fc-t16-15',
            front: 'Why must the track be carefully levelled in Core Practical 10?',
            back: 'If the track is tilted, gravity has a component along the track — this is a net external force that changes the system\'s total momentum.\nA level track eliminates this so the system is truly isolated horizontally.',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },
        {
            id: 'fc-t16-16',
            front: 'What quantities are measured before and after the collision in CP10?',
            back: 'Before: velocity of trolley A (and velocity of trolley B if it is moving).\nAfter: velocities of both trolleys A and B.\nWith the measured masses, these allow total momentum before and after to be calculated and compared.',
            topic: 'Core Practical 10: Investigating Collisions using ICT',
        },

        // ── Elastic & Inelastic Collisions ────────────────────────────────────
        {
            id: 'fc-t16-17',
            front: 'What quantities are conserved in an elastic collision?',
            back: '• Total linear momentum is conserved.\n• Total kinetic energy is conserved.\nAlso: relative speed of approach = relative speed of separation.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'fc-t16-18',
            front: 'What quantities are conserved in an inelastic collision?',
            back: '• Total linear momentum is conserved.\n• Total kinetic energy is NOT conserved — some is converted to thermal energy, sound, or deformation.\nFor a perfectly inelastic collision, KE loss is maximised and the objects move together.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'fc-t16-19',
            front: 'What happens in a perfectly inelastic collision?',
            back: 'The two objects stick together after impact and move with a single common velocity.\nMomentum is still conserved: (m₁+m₂)v = m₁u₁ + m₂u₂\nKinetic energy loss is the maximum possible for a given set of initial conditions.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'fc-t16-20',
            front: 'State the relative speed rule for elastic collisions.',
            back: 'Relative speed of approach = Relative speed of separation\n(u₁ − u₂) = (v₂ − v₁)\nThis is equivalent to conservation of KE combined with conservation of momentum, and is a useful quick test for elasticity.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'fc-t16-21',
            front: 'What happens in a head-on elastic collision between two equal masses, one of which is initially at rest?',
            back: 'The moving object comes to a complete stop (v₁ = 0).\nThe stationary object moves away with the full original speed of the first (v₂ = u₁).\nAll momentum and all kinetic energy are transferred to the second object.',
            topic: 'Elastic & Inelastic Collisions',
        },
        {
            id: 'fc-t16-22',
            front: 'Can total kinetic energy ever increase as a result of a collision? Explain.',
            back: 'No. Energy cannot be created from nothing (first law of thermodynamics).\nSome KE may be converted to thermal energy, sound, or deformation energy, so KE after ≤ KE before.\nKE after = KE before only for elastic collisions; KE after < KE before for all other collisions.',
            topic: 'Elastic & Inelastic Collisions',
        },

        // ── Energy-Momentum Relation ──────────────────────────────────────────
        {
            id: 'fc-t16-23',
            front: 'State the non-relativistic energy-momentum relation for kinetic energy.',
            back: 'KE = p²/(2m)\nwhere p = momentum (kg m/s) and m = mass (kg).\nDerived from KE = ½mv² and p = mv.\nValid for non-relativistic speeds (v ≪ c).',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
        {
            id: 'fc-t16-24',
            front: 'A particle has momentum 10 kg m/s and mass 2 kg. Calculate its kinetic energy.',
            back: 'KE = p²/(2m)\n= (10)²/(2 × 2)\n= 100/4\n= 25 J',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
        {
            id: 'fc-t16-25',
            front: 'State the relativistic energy-momentum relation and give the result for a photon.',
            back: 'E² = p²c² + m²c⁴\nFor a photon (rest mass m = 0):\nE² = p²c²  →  E = pc\nThis shows photons carry momentum p = E/c despite having zero rest mass.',
            topic: 'Energy-Momentum Relation (E² = p²c² + m²c⁴; non-relativistic: E = p²/2m)',
        },
    ],
};
