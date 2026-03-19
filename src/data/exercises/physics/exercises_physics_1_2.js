export const exercises_physics_1_2 = {
    mcq: [
        // Equations of Motion (SUVAT)
        {
            id: 'mcq-t2-1',
            stem: 'Which of the following is NOT a SUVAT equation?',
            options: ['v = u + at', 's = ut + ½at²', 'F = ma', 'v² = u² + 2as'],
            correctAnswer: 2,
            rationale: 'F = ma is Newton\'s Second Law, not a kinematic SUVAT equation. The four SUVAT equations are: v = u + at, s = ut + ½at², v² = u² + 2as, and s = ½(u + v)t.',
            topic: 'Equations of Motion'
        },
        {
            id: 'mcq-t2-2',
            stem: 'A car accelerates uniformly from rest. Which SUVAT equation would you use to find the distance travelled if you know the acceleration and time?',
            options: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 's = ½(u + v)t'],
            correctAnswer: 1,
            rationale: 's = ut + ½at² relates displacement, initial velocity, acceleration, and time. Since the car starts from rest (u = 0), this simplifies to s = ½at².',
            topic: 'Equations of Motion'
        },
        {
            id: 'mcq-t2-3',
            stem: 'An object is thrown vertically upward with initial velocity 20 m/s. Taking upward as positive, what is the acceleration?',
            options: ['+9.81 m/s²', '-9.81 m/s²', '+20 m/s²', '0 m/s²'],
            correctAnswer: 1,
            rationale: 'Gravity always acts downward. If upward is taken as positive, then acceleration a = -g = -9.81 m/s².',
            topic: 'Equations of Motion'
        },
        {
            id: 'mcq-t2-4',
            stem: 'A ball is thrown upward at 15 m/s. What is its velocity at the maximum height?',
            options: ['15 m/s', '0 m/s', '7.5 m/s', '30 m/s'],
            correctAnswer: 1,
            rationale: 'At maximum height, the vertical velocity becomes zero as gravity has decelerated the ball to stop its upward motion before it begins falling.',
            topic: 'Equations of Motion'
        },
        {
            id: 'mcq-t2-5',
            stem: 'Which equation would you use to find the final velocity if you know initial velocity, acceleration, and distance, but NOT time?',
            options: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 's = ½(u + v)t'],
            correctAnswer: 2,
            rationale: 'v² = u² + 2as relates v, u, a, and s without involving time t.',
            topic: 'Equations of Motion'
        },

        // Motion Graphs
        {
            id: 'mcq-t2-6',
            stem: 'On a displacement-time graph, what does the gradient represent?',
            options: ['Acceleration', 'Velocity', 'Displacement', 'Force'],
            correctAnswer: 1,
            rationale: 'The gradient of an s-t graph equals the instantaneous velocity at that point. A steeper positive gradient means faster motion in the positive direction.',
            topic: 'Motion Graphs'
        },
        {
            id: 'mcq-t2-7',
            stem: 'On a velocity-time graph, what does the gradient represent?',
            options: ['Displacement', 'Velocity', 'Acceleration', 'Force'],
            correctAnswer: 2,
            rationale: 'The gradient of a v-t graph gives the instantaneous acceleration. A positive gradient indicates acceleration; negative gradient indicates deceleration.',
            topic: 'Motion Graphs'
        },
        {
            id: 'mcq-t2-8',
            stem: 'What does the area under a velocity-time graph represent?',
            options: ['Acceleration', 'Velocity', 'Displacement', 'Force'],
            correctAnswer: 2,
            rationale: 'The area between a v-t graph and the time axis equals the displacement. Areas above the axis represent positive displacement; areas below represent negative displacement.',
            topic: 'Motion Graphs'
        },
        {
            id: 'mcq-t2-9',
            stem: 'A horizontal line on a velocity-time graph indicates:',
            options: ['Constant acceleration', 'Constant velocity', 'Constant displacement', 'Zero velocity'],
            correctAnswer: 1,
            rationale: 'A horizontal line on a v-t graph has zero gradient, which means acceleration is zero. This indicates the object is moving with constant velocity.',
            topic: 'Motion Graphs'
        },
        {
            id: 'mcq-t2-10',
            stem: 'A curved displacement-time graph indicates:',
            options: ['Uniform velocity', 'Changing velocity', 'Zero acceleration', 'Constant acceleration'],
            correctAnswer: 1,
            rationale: 'A curve on an s-t graph means the gradient is changing, which means velocity is changing (either accelerating or decelerating).',
            topic: 'Motion Graphs'
        },

        // Scalars & Vectors
        {
            id: 'mcq-t2-11',
            stem: 'Which of the following is a SCALAR quantity?',
            options: ['Displacement', 'Velocity', 'Force', 'Speed'],
            correctAnswer: 3,
            rationale: 'Speed is a scalar — it has magnitude only (how fast), without any direction. Displacement, velocity, and force are vectors with both magnitude and direction.',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'mcq-t2-12',
            stem: 'Which of the following is a VECTOR quantity?',
            options: ['Distance', 'Mass', 'Acceleration', 'Momentum'],
            correctAnswer: 2,
            rationale: 'Acceleration is a vector — it has both magnitude (e.g., 9.81 m/s²) and direction. Distance and mass are scalars.',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'mcq-t2-13',
            stem: 'A car travels around a circular track at a constant 30 m/s. Which statement is correct?',
            options: ['Its speed is changing', 'Its velocity is constant', 'Its acceleration is constant', 'Its displacement is zero'],
            correctAnswer: 2,
            rationale: 'Speed is constant at 30 m/s, so this is incorrect. Velocity is NOT constant — it continuously changes direction, even though the magnitude (speed) stays the same.',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'mcq-t2-14',
            stem: 'A person walks 300 m east, then 400 m north. What is their total displacement?',
            options: ['700 m', '500 m north-east', '500 m in a straight line', '500 m at 53° from east'],
            correctAnswer: 3,
            rationale: 'Using Pythagoras: displacement = sqrt(300² + 400²) = 500 m. The direction is arctan(400/300) = arctan(1.333) = 53° north of east.',
            topic: 'Scalars & Vectors'
        },

        // Resolving Vectors
        {
            id: 'mcq-t2-15',
            stem: 'A force of 50 N acts at 30° to the horizontal. What is its horizontal component?',
            options: ['25 N', '43 N', '50 N', '0 N'],
            correctAnswer: 0,
            rationale: 'Horizontal component = F cosθ = 50 × cos30° = 50 × 0.866 = 43.3 N ≈ 43 N.',
            topic: 'Resolving Vectors'
        },
        {
            id: 'mcq-t2-16',
            stem: 'A force of 100 N acts at 60° above the horizontal. What is its vertical component?',
            options: ['50 N', '87 N', '100 N', '0 N'],
            correctAnswer: 1,
            rationale: 'Vertical component = F sinθ = 100 × sin60° = 100 × 0.866 = 86.6 N ≈ 87 N.',
            topic: 'Resolving Vectors'
        },
        {
            id: 'mcq-t2-17',
            stem: 'On a slope inclined at 30°, what component of weight acts down the slope?',
            options: ['W cos 30°', 'W sin 30°', 'W tan 30°', 'W'],
            correctAnswer: 1,
            rationale: 'The component along the slope is W sinθ. This causes the object to accelerate down the slope. W cosθ acts perpendicular to the slope and is balanced by the normal reaction force.',
            topic: 'Resolving Vectors'
        },

        // Finding Resultant Vector
        {
            id: 'mcq-t2-18',
            stem: 'Two forces act on a point: 30 N east and 40 N north. What is the magnitude of the resultant?',
            options: ['70 N', '50 N', '10 N', '100 N'],
            correctAnswer: 1,
            rationale: 'Using Pythagoras: R = sqrt(30² + 40²) = sqrt(900 + 1600) = sqrt(2500) = 50 N.',
            topic: 'Finding the Resultant Vector'
        },
        {
            id: 'mcq-t2-19',
            stem: 'Two perpendicular velocities are 6 m/s east and 8 m/s north. What is the resultant speed?',
            options: ['14 m/s', '2 m/s', '10 m/s', '7 m/s'],
            correctAnswer: 2,
            rationale: 'Resultant speed = sqrt(6² + 8²) = sqrt(36 + 64) = sqrt(100) = 10 m/s.',
            topic: 'Finding the Resultant Vector'
        },
        {
            id: 'mcq-t2-20',
            stem: 'When using the parallelogram method to add vectors, what represents the resultant?',
            options: ['One of the sides', 'The diagonal', 'The longer side', 'The shorter diagonal'],
            correctAnswer: 1,
            rationale: 'In the parallelogram method, both vectors are drawn from the same starting point. The diagonal of the completed parallelogram represents the resultant vector.',
            topic: 'Finding the Resultant Vector'
        },

        // Projectiles
        {
            id: 'mcq-t2-21',
            stem: 'In projectile motion, what is the horizontal acceleration?',
            options: ['9.81 m/s²', '-9.81 m/s²', '0 m/s²', 'Depends on launch angle'],
            correctAnswer: 2,
            rationale: 'Ignoring air resistance, there is no horizontal force acting on a projectile. Therefore horizontal acceleration is zero, and horizontal velocity remains constant throughout the flight.',
            topic: 'Projectiles'
        },
        {
            id: 'mcq-t2-22',
            stem: 'A projectile is launched at 20 m/s at 30° above horizontal. What is its vertical component of initial velocity?',
            options: ['20 m/s', '17.3 m/s', '10 m/s', '0 m/s'],
            correctAnswer: 1,
            rationale: 'Vertical component = u sinθ = 20 × sin30° = 20 × 0.5 = 10 m/s.',
            topic: 'Projectiles'
        },
        {
            id: 'mcq-t2-23',
            stem: 'A projectile reaches its maximum height when:',
            options: ['Vertical displacement is maximum', 'Vertical velocity is zero', 'Horizontal velocity is zero', 'Acceleration is zero'],
            correctAnswer: 1,
            rationale: 'At maximum height, the projectile stops moving upward and is about to descend. The vertical velocity momentarily becomes zero at this instant.',
            topic: 'Projectiles'
        },
        {
            id: 'mcq-t2-24',
            stem: 'Which launch angle gives the maximum horizontal range for a projectile launched from and landing at the same level?',
            options: ['0°', '30°', '45°', '90°'],
            correctAnswer: 2,
            rationale: 'The range R = u²sin2θ/g is maximum when sin2θ is maximum. sin2θ is maximum when 2θ = 90°, meaning θ = 45°.',
            topic: 'Projectiles'
        },

        // Forces as Vectors
        {
            id: 'mcq-t2-25',
            stem: 'In a free-body diagram, forces are shown as arrows:',
            options: ['From surrounding objects', 'Acting ON the object of interest', 'Equal in magnitude always', 'Always pointing upward'],
            correctAnswer: 1,
            rationale: 'A free-body diagram shows only forces that act ON the object being analysed. Forces that the object exerts on other things are never included.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'mcq-t2-26',
            stem: 'For an object in equilibrium, which statement is correct?',
            options: ['Resultant force is non-zero', 'Object is accelerating', 'Sum of forces in any direction is zero', 'Velocity is constant but direction changes'],
            correctAnswer: 2,
            rationale: 'Equilibrium means the resultant (net) force is zero. This can happen when the object is stationary or moving at constant velocity with balanced forces.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'mcq-t2-27',
            stem: 'Three forces act on a point in equilibrium. They form:',
            options: ['An open triangle', 'A closed triangle', 'A straight line', 'A closed polygon'],
            correctAnswer: 1,
            rationale: 'For three forces in equilibrium, when drawn head-to-tail, they form a closed triangle. This is because the resultant of the three forces is zero, returning you to the starting point.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'mcq-t2-28',
            stem: 'A 5 kg box rests on a frictionless 30° slope. What is the normal reaction force?',
            options: ['24.5 N', '42.5 N', '49 N', '5 N'],
            correctAnswer: 1,
            rationale: 'Weight W = mg = 5 × 9.81 = 49.05 N. Normal force N = W cos30° = 49.05 × 0.866 = 42.5 N. This component balances the perpendicular component of weight.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'mcq-t2-29',
            stem: 'Car A moves at +30 m/s while Car B moves at -20 m/s (opposite directions). What is the velocity of A relative to B?',
            options: ['10 m/s', '50 m/s', '-10 m/s', '+30 m/s'],
            correctAnswer: 0,
            rationale: 'Relative velocity v_AB = v_A - v_B. With v_A = +30 m/s and v_B = -20 m/s: v_AB = 30 - (-20) = 30 + 20 = +50 m/s. Speeds add when objects move in opposite directions.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'mcq-t2-30',
            stem: 'When is the SUVAT equation v² = u² + 2as most useful?',
            options: ['When time is unknown', 'When displacement is unknown', 'When acceleration is unknown', 'When initial velocity is unknown'],
            correctAnswer: 0,
            rationale: 'The equation v² = u² + 2as does not include time t. It is the correct choice when you need to find final velocity given initial velocity, acceleration, and displacement.',
            topic: 'Equations of Motion'
        }
    ],
    fillblank: [
        // Equations of Motion
        {
            id: 'fb-t2-1',
            stem: 'Complete the SUVAT equation: v = __BLANK__ + at',
            blanks: [{ answer: 'u' }],
            rationale: 'The equation v = u + at relates final velocity to initial velocity, acceleration, and time. This is the first SUVAT equation.'
        },
        {
            id: 'fb-t2-2',
            stem: 'The SUVAT equation for displacement when initial velocity is zero is s = __BLANK__ × t²',
            blanks: [{ answer: '0.5' }],
            rationale: 'When u = 0, the equation s = ut + ½at² simplifies to s = ½at².'
        },
        {
            id: 'fb-t2-3',
            stem: 'For an object falling freely under gravity, acceleration a = __BLANK__ m/s² (taking downward as positive).',
            blanks: [{ answer: '9.81' }],
            rationale: 'The acceleration due to gravity on Earth is g = 9.81 m/s² downward. On some exam papers, g = 9.8 or g = 10 may be specified.'
        },
        {
            id: 'fb-t2-4',
            stem: 'A projectile has constant horizontal velocity vx = u cos__BLANK__',
            blanks: [{ answer: 'θ' }],
            rationale: 'The horizontal component of velocity is vx = u cosθ. This remains constant throughout the projectile\'s flight because there is no horizontal acceleration.'
        },
        {
            id: 'fb-t2-5',
            stem: 'The time of flight for a projectile launched from and landing at the same height is T = __BLANK__ × u sinθ / g',
            blanks: [{ answer: '2' }],
            rationale: 'Time of flight T = 2uy/g = 2u sinθ / g. This comes from setting vertical displacement y = 0 and solving for time.'
        },
        {
            id: 'fb-t2-6',
            stem: 'The horizontal range of a projectile is R = u² × sin__BLANK__θ / g',
            blanks: [{ answer: '2' }],
            rationale: 'Using the double-angle identity 2 sinθ cosθ = sin2θ, the range R = u cosθ × (2u sinθ/g) = u² sin2θ / g.'
        },
        {
            id: 'fb-t2-7',
            stem: 'At maximum height of a projectile, the vertical velocity is __BLANK__ m/s',
            blanks: [{ answer: '0' }],
            rationale: 'The projectile stops rising and begins falling at maximum height. At this instant, the vertical component of velocity is zero.'
        },

        // Motion Graphs
        {
            id: 'fb-t2-8',
            stem: 'On a displacement-time graph, the gradient equals __BLANK__',
            blanks: [{ answer: 'velocity' }],
            rationale: 'The gradient of an s-t graph at any point gives the instantaneous velocity. A positive gradient means motion in positive direction; negative gradient means return motion.'
        },
        {
            id: 'fb-t2-9',
            stem: 'On a velocity-time graph, the gradient equals __BLANK__',
            blanks: [{ answer: 'acceleration' }],
            rationale: 'The gradient of a v-t graph gives the instantaneous acceleration. This tells you how quickly velocity is changing.'
        },
        {
            id: 'fb-t2-10',
            stem: 'The area under a velocity-time graph equals __BLANK__',
            blanks: [{ answer: 'displacement' }],
            rationale: 'The area between a v-t graph and the time axis represents the total displacement. Areas above the axis are positive; areas below are negative.'
        },
        {
            id: 'fb-t2-11',
            stem: 'A curved velocity-time graph indicates __BLANK__ acceleration',
            blanks: [{ answer: 'changing' }],
            rationale: 'A straight line on a v-t graph means constant acceleration. A curve means acceleration is not constant — it is varying with time.'
        },

        // Scalars & Vectors
        {
            id: 'fb-t2-12',
            stem: 'A vector quantity has both __BLANK__ and direction.',
            blanks: [{ answer: 'magnitude' }],
            rationale: 'Vectors require both a size (magnitude) and a direction to be fully described. Examples include displacement, velocity, acceleration, force, momentum.'
        },
        {
            id: 'fb-t2-13',
            stem: 'Distance is a __BLANK__ quantity; displacement is a vector.',
            blanks: [{ answer: 'scalar' }],
            rationale: 'Distance is the total path length travelled and has no direction information, making it a scalar. Displacement is straight-line distance in a specified direction.'
        },
        {
            id: 'fb-t2-14',
            stem: 'When adding vectors, __BLANK__ must be taken into account.',
            blanks: [{ answer: 'direction' }],
            rationale: 'Vectors cannot be added by simply adding their magnitudes. Direction matters, so methods like tip-to-tail or parallelogram must be used.'
        },

        // Resolving Vectors
        {
            id: 'fb-t2-15',
            stem: 'The horizontal component of a vector at angle θ to the horizontal is Fx = F cos__BLANK__',
            blanks: [{ answer: 'θ' }],
            rationale: 'The component adjacent to the angle always uses cosine. This follows from the definition of cosine in a right triangle: cos θ = adjacent/hypotenuse.'
        },
        {
            id: 'fb-t2-16',
            stem: 'The vertical component of a vector at angle θ to the horizontal is Fy = F sin__BLANK__',
            blanks: [{ answer: 'θ' }],
            rationale: 'The component opposite to the angle always uses sine. This follows from the definition of sine in a right triangle: sin θ = opposite/hypotenuse.'
        },
        {
            id: 'fb-t2-17',
            stem: 'On a slope at angle α, the component of weight perpendicular to the slope is W cos__BLANK__',
            blanks: [{ answer: 'α' }],
            rationale: 'The component perpendicular to the slope is W cosα. This is balanced by the normal reaction force from the surface.'
        },

        // Finding Resultant Vector
        {
            id: 'fb-t2-18',
            stem: 'For two perpendicular vectors A and B, the resultant magnitude is |R| = __BLANK__',
            blanks: [{ answer: '√A² + B²' }],
            rationale: 'Pythagoras theorem gives the magnitude of the resultant when vectors are at 90° to each other: |R| = √(A² + B²).'
        },
        {
            id: 'fb-t2-19',
            stem: 'In the triangle method for adding vectors, the resultant is drawn from the __BLANK__ of the first vector to the tip of the second.',
            blanks: [{ answer: 'tail' }],
            rationale: 'In the tip-to-tail method, you draw the first vector, then start the second vector from the tip (arrowhead) of the first. The resultant goes from the tail of the first to the tip of the second.'
        },

        // Projectiles
        {
            id: 'fb-t2-20',
            stem: 'In projectile motion, horizontal and vertical motions are __BLANK__ of each other.',
            blanks: [{ answer: 'independent' }],
            rationale: 'The key principle of projectile motion is that horizontal and vertical components do not affect each other. This allows separate analysis using SUVAT equations for each direction.'
        },
        {
            id: 'fb-t2-21',
            stem: 'The vertical motion of a projectile has acceleration a = __BLANK__',
            blanks: [{ answer: '-g' }],
            rationale: 'Gravity acts downward. Taking upward as positive means acceleration a = -g = -9.81 m/s². Taking downward as positive means a = +g = +9.81 m/s².'
        },
        {
            id: 'fb-t2-22',
            stem: 'For a projectile launched at angle θ, the horizontal component of velocity is vx = __BLANK__',
            blanks: [{ answer: 'u cosθ' }],
            rationale: 'Horizontal velocity is constant throughout flight: vx = ux = u cosθ. There is no horizontal force (ignoring air resistance), so horizontal acceleration is zero.'
        },
        {
            id: 'fb-t2-23',
            stem: 'For a horizontally launched projectile (θ = 0°), the time of flight is t = __BLANK__',
            blanks: [{ answer: '√2h/g' }],
            rationale: 'When launched horizontally from height h, vertical motion gives t = √(2h/g). The horizontal range is then R = u × t.'
        },

        // Forces as Vectors
        {
            id: 'fb-t2-24',
            stem: 'For an object in equilibrium, the sum of horizontal force components is __BLANK__.',
            blanks: [{ answer: 'zero' }],
            rationale: 'Equilibrium means the resultant force is zero in every direction. Therefore, sum of all horizontal components = 0, and sum of all vertical components = 0.'
        },
        {
            id: 'fb-t2-25',
            stem: 'The normal reaction force N on a slope equals W cos__BLANK__',
            blanks: [{ answer: 'α' }],
            rationale: 'On a slope at angle α, the normal force balances the component of weight perpendicular to the slope: N = W cosα = mg cosα.'
        }
    ],
    dragdrop: [
        // Scalars & Vectors
        {
            id: 'dd-t2-1',
            stem: 'Sort the following quantities into Scalar or Vector:',
            categories: ['Scalars', 'Vectors'],
            items: [
                { text: 'Distance', category: 'Scalars' },
                { text: 'Speed', category: 'Scalars' },
                { text: 'Mass', category: 'Scalars' },
                { text: 'Energy', category: 'Scalars' },
                { text: 'Displacement', category: 'Vectors' },
                { text: 'Velocity', category: 'Vectors' },
                { text: 'Acceleration', category: 'Vectors' },
                { text: 'Force', category: 'Vectors' },
                { text: 'Momentum', category: 'Vectors' }
            ]
        },
        {
            id: 'dd-t2-2',
            stem: 'Classify these physical quantities:',
            categories: ['Magnitude only', 'Magnitude + Direction'],
            items: [
                { text: 'Temperature', category: 'Magnitude only' },
                { text: 'Time', category: 'Magnitude only' },
                { text: 'Power', category: 'Magnitude only' },
                { text: 'Pressure', category: 'Magnitude only' },
                { text: 'Weight', category: 'Magnitude + Direction' },
                { text: 'Electric field strength', category: 'Magnitude + Direction' },
                { text: 'Gravitational field strength', category: 'Magnitude + Direction' }
            ]
        },

        // Motion Graphs
        {
            id: 'dd-t2-3',
            stem: 'Sort the motion descriptions into the correct graph type:',
            categories: ['Displacement-Time Graph', 'Velocity-Time Graph', 'Acceleration-Time Graph'],
            items: [
                { text: 'Straight horizontal line', category: 'Velocity-Time Graph' },
                { text: 'Area under the curve', category: 'Velocity-Time Graph' },
                { text: 'Gradient represents speed', category: 'Displacement-Time Graph' },
                { text: 'Gradient represents acceleration', category: 'Acceleration-Time Graph' },
                { text: 'Curve showing changing velocity', category: 'Displacement-Time Graph' },
                { text: 'Horizontal line (a = 0)', category: 'Acceleration-Time Graph' }
            ]
        },
        {
            id: 'dd-t2-4',
            stem: 'Classify these s-t graph sections:',
            categories: ['Positive constant velocity', 'Stationary', 'Negative velocity', 'Changing velocity (accelerating)', 'Changing velocity (decelerating)'],
            items: [
                { text: 'Line sloping upward from left to right', category: 'Positive constant velocity' },
                { text: 'Horizontal line (flat)', category: 'Stationary' },
                { text: 'Line sloping downward from left to right', category: 'Negative velocity' },
                { text: 'Curve getting steeper', category: 'Changing velocity (accelerating)' },
                { text: 'Curve getting shallower', category: 'Changing velocity (decelerating)' }
            ]
        },
        {
            id: 'dd-t2-5',
            stem: 'Sort these v-t graph sections:',
            categories: ['Uniform acceleration (positive)', 'Uniform acceleration (negative)', 'Constant velocity', 'Changing acceleration'],
            items: [
                { text: 'Straight line sloping upward', category: 'Uniform acceleration (positive)' },
                { text: 'Straight line sloping downward', category: 'Uniform acceleration (negative)' },
                { text: 'Horizontal line', category: 'Constant velocity' },
                { text: 'Curved line', category: 'Changing acceleration' }
            ]
        },

        // Resolving Vectors & Inclined Planes
        {
            id: 'dd-t2-6',
            stem: 'Sort these vector components:',
            categories: ['Horizontal (Fx = F cosθ)', 'Vertical (Fy = F sinθ)', 'Perpendicular to surface (W cosα)', 'Parallel to slope (W sinα)'],
            items: [
                { text: '100 cos 30° = 86.6 N', category: 'Horizontal (Fx = F cosθ)' },
                { text: '100 sin 30° = 50 N', category: 'Vertical (Fy = F sinθ)' },
                { text: '49 N cos 25° = 44.4 N', category: 'Perpendicular to surface (W cosα)' },
                { text: '49 N sin 25° = 20.7 N', category: 'Parallel to slope (W sinα)' },
                { text: '80 cos 45° = 56.6 N', category: 'Horizontal (Fx = F cosθ)' },
                { text: '80 sin 45° = 56.6 N', category: 'Vertical (Fy = F sinθ)' }
            ]
        },
        {
            id: 'dd-t2-7',
            stem: 'Sort these inclined plane problems:',
            categories: ['Component along slope (mg sinα)', 'Component perpendicular (mg cosα)', 'Net force zero', 'Net force non-zero'],
            items: [
                { text: '5 kg on frictionless 30° slope: a = g sin 30° = 4.9 m/s²', category: 'Component along slope (mg sinα)' },
                { text: '3 kg on 20° slope: N = mg cos 20°', category: 'Component perpendicular (mg cosα)' },
                { text: 'Box on horizontal surface with friction: ΣFx = 0', category: 'Net force zero' },
                { text: 'Box sliding down slope with friction: F_net = mg sinα - f', category: 'Net force non-zero' },
                { text: 'Object accelerating up slope: F_applied > mg sinα', category: 'Net force non-zero' }
            ]
        },

        // Forces in Equilibrium
        {
            id: 'dd-t2-8',
            stem: 'Sort these force situations:',
            categories: ['Equilibrium (ΣF = 0)', 'Not in equilibrium (ΣF ≠ 0)'],
            items: [
                { text: 'Book resting on table', category: 'Equilibrium (ΣF = 0)' },
                { text: 'Car cruising at constant speed', category: 'Equilibrium (ΣF = 0)' },
                { text: 'Object falling under gravity only', category: 'Not in equilibrium (ΣF ≠ 0)' },
                { text: 'Rocket accelerating upward', category: 'Not in equilibrium (ΣF ≠ 0)' },
                { text: 'Car accelerating on level road', category: 'Not in equilibrium (ΣF ≠ 0)' },
                { text: 'Parachutist at terminal velocity', category: 'Equilibrium (ΣF = 0)' }
            ]
        }
    ],
    sequence: [
        // Equations of Motion
        {
            id: 'seq-t2-1',
            stem: 'Put these steps in the correct order for solving a SUVAT problem:',
            steps: [
                'Identify which variables are given (u, v, a, t, s)',
                'Identify the unknown variable',
                'Choose the SUVAT equation containing exactly the given and unknown variables',
                'Substitute values and solve for the unknown',
                'Check answer using another SUVAT equation if possible'
            ]
        },
        {
            id: 'seq-t2-2',
            stem: 'Order the steps for a ball thrown upward:',
            steps: [
                'Choose upward as the positive direction',
                'Assign initial velocity u as positive (+)',
                'Assign acceleration a as negative (-9.81 m/s²)',
                'Find time to reach maximum height (when v = 0) using v = u + at',
                'Find maximum height using s = ut + ½at²',
                'Find time to return to launch height (when s = 0)',
                'Calculate final velocity using v = u + at'
            ]
        },

        // Motion Graphs
        {
            id: 'seq-t2-3',
            stem: 'Order these steps for finding instantaneous acceleration from a curved v-t graph:',
            steps: [
                'Mark the point of interest on the curve',
                'Place a ruler so it touches the curve at only that single point',
                'Draw the tangent line extending in both directions',
                'Select two widely spaced points on the tangent line',
                'Calculate gradient = rise / run = Δv / Δt'
            ]
        },
        {
            id: 'seq-t2-4',
            stem: 'Order the steps for calculating displacement from area under a v-t graph:',
            steps: [
                'Identify the geometric shapes under the graph (triangles, rectangles, trapeziums)',
                'Calculate area of each shape using appropriate formula',
                'Add all positive areas above the time axis',
                'Subtract all negative areas below the time axis',
                'Sum to find net displacement with units (metres)'
            ]
        },

        // Resolving Vectors
        {
            id: 'seq-t2-5',
            stem: 'Order these steps to resolve a force F at angle θ:',
            steps: [
                'Measure angle θ from the horizontal',
                'Calculate horizontal component Fx = F cosθ',
                'Calculate vertical component Fy = F sinθ',
                'Check: Fx² + Fy² should equal F² (Pythagoras check)'
            ]
        },

        // Projectiles
        {
            id: 'seq-t2-6',
            stem: 'Order the steps to solve a projectile motion problem:',
            steps: [
                'Resolve initial velocity into horizontal and vertical components: ux = u cosθ, uy = u sinθ',
                'Analyse vertical motion: use SUVAT with a = -g (taking upward as positive)',
                'Find time of flight T = 2uy / g',
                'Find maximum height H = uy² / (2g)',
                'Find horizontal range R = ux × T',
                'State final answers with units'
            ]
        },

        // Forces as Vectors
        {
            id: 'seq-t2-7',
            stem: 'Order these steps to draw a correct free-body diagram:',
            steps: [
                'Draw only the object of interest, not its surroundings',
                'Show all forces acting ON that object as arrows',
                'Ensure arrows start from the object and point in the direction of the force',
                'Label each force clearly with magnitude and direction',
                'Do NOT show forces that the object exerts on other things'
            ]
        },
        {
            id: 'seq-t2-8',
            stem: 'Order these steps to solve an equilibrium problem using components:',
            steps: [
                'Resolve each force into horizontal and vertical components',
                'Set sum of horizontal components = 0 (ΣFx = 0)',
                'Set sum of vertical components = 0 (ΣFy = 0)',
                'Solve the equations simultaneously for unknown values',
                'Check that the calculated forces satisfy both equilibrium equations'
            ]
        }
    ],
    keyword: [
        // Equations of Motion
        {
            id: 'kw-t2-1',
            stem: 'Define acceleration. [2 marks]',
            marks: 2,
            keywords: ['rate of change', 'velocity', 'time', 'vector'],
            modelAnswer: 'Acceleration is the rate of change of velocity with respect to time. It is a vector quantity because it has both magnitude and direction. Unit: m/s².'
        },
        {
            id: 'kw-t2-2',
            stem: 'State the four SUVAT equations and explain when they apply. [3 marks]',
            marks: 3,
            keywords: ['constant acceleration', 'uniform', 'straight line', 'SUVAT'],
            modelAnswer: 'The four SUVAT equations are: (1) v = u + at, (2) s = ut + ½at², (3) v² = u² + 2as, (4) s = ½(u + v)t. They apply only when acceleration is constant. Each equation relates four of the five variables (s, u, v, a, t).'
        },
        {
            id: 'kw-t2-3',
            stem: 'Explain why an object moving in a circle at constant speed is still accelerating. [2 marks]',
            marks: 2,
            keywords: ['velocity', 'vector', 'direction', 'changing', 'centripetal'],
            modelAnswer: 'Velocity is a vector quantity with both magnitude and direction. Although the speed (magnitude) is constant, the direction continuously changes as the object moves around the circle. Since velocity is changing, there is acceleration directed toward the centre of the circle (centripetal acceleration).'
        },

        // Motion Graphs
        {
            id: 'kw-t2-4',
            stem: 'Describe the motion shown by a horizontal line on a velocity-time graph. [2 marks]',
            marks: 2,
            keywords: ['constant', 'velocity', 'zero', 'acceleration'],
            modelAnswer: 'A horizontal line on a v-t graph has zero gradient, which means acceleration is zero. This indicates the object is moving with constant velocity (steady speed in a fixed direction).'
        },
        {
            id: 'kw-t2-5',
            stem: 'Describe what the gradient of a displacement-time graph represents. [2 marks]',
            marks: 2,
            keywords: ['gradient', 'velocity', 'slope', 'rise', 'run'],
            modelAnswer: 'The gradient of a displacement-time graph equals the instantaneous velocity at that point. Gradient = Δs / Δt = rise / run. A positive gradient means motion in the positive direction; a negative gradient means motion in the opposite direction.'
        },
        {
            id: 'kw-t2-6',
            stem: 'Explain how you would find instantaneous acceleration from a curved v-t graph. [3 marks]',
            marks: 3,
            keywords: ['tangent', 'gradient', 'instantaneous', 'rise', 'run'],
            modelAnswer: 'To find instantaneous acceleration from a curved v-t graph: (1) Draw a tangent to the curve at the point of interest. The tangent should touch the curve at only that point and not cross it. (2) Extend the tangent line in both directions. (3) Select two widely spaced points on the tangent line. (4) Calculate gradient = rise / run = Δv / Δt. This gradient gives the instantaneous acceleration at that point.'
        },

        // Scalars & Vectors
        {
            id: 'kw-t2-7',
            stem: 'Distinguish between distance and displacement. Give a numerical example. [3 marks]',
            marks: 3,
            keywords: ['scalar', 'vector', 'magnitude', 'direction', 'path length', 'straight-line'],
            modelAnswer: 'Distance is a scalar quantity — it is the total path length travelled regardless of direction. Displacement is a vector — it is the straight-line distance from start to finish in a specified direction. Example: Walking 300 m east then 400 m north gives a total distance of 700 m but a displacement of 500 m N 37° E.'
        },
        {
            id: 'kw-t2-8',
            stem: 'Explain the difference between speed and velocity. [2 marks]',
            marks: 2,
            keywords: ['scalar', 'vector', 'magnitude', 'direction', 'rate of change'],
            modelAnswer: 'Speed is a scalar quantity defined as rate of change of distance with respect to time. Velocity is a vector quantity defined as rate of change of displacement with respect to time. Speed has only magnitude; velocity has both magnitude and direction. An object can have constant speed but changing velocity (e.g., circular motion).'
        },

        // Resolving Vectors
        {
            id: 'kw-t2-9',
            stem: 'A 60 N force acts at 40° above the horizontal. Calculate its horizontal and vertical components. [3 marks]',
            marks: 3,
            keywords: ['cos', 'sin', 'horizontal', 'vertical', 'adjacent', 'opposite'],
            modelAnswer: 'Horizontal component: Fx = F cosθ = 60 × cos40° = 60 × 0.766 = 45.96 N ≈ 46 N. Vertical component: Fy = F sinθ = 60 × sin40° = 60 × 0.643 = 38.57 N ≈ 39 N.'
        },
        {
            id: 'kw-t2-10',
            stem: 'A box of mass 4 kg rests on a 30° slope. Calculate the component of weight acting down the slope. [2 marks]',
            marks: 2,
            keywords: ['weight', 'mg', 'sin', 'along', 'slope', 'component'],
            modelAnswer: 'Weight W = mg = 4 × 9.81 = 39.24 N. Component down the slope = W sin30° = 39.24 × 0.5 = 19.62 N ≈ 20 N. This component causes the object to accelerate down the slope.'
        },

        // Finding Resultant Vector
        {
            id: 'kw-t2-11',
            stem: 'Two forces act on a point: 30 N east and 40 N north. Calculate the resultant force. [4 marks]',
            marks: 4,
            keywords: ['resultant', 'pythagoras', 'sqrt', 'horizontal', 'vertical', 'direction'],
            modelAnswer: 'Horizontal: ΣFx = 30 + 0 = 30 N. Vertical: ΣFy = 0 + 40 = 40 N. Resultant magnitude: R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N. Direction: θ = arctan(40/30) = arctan(1.33) = 53.1° north of east.'
        },
        {
            id: 'kw-t2-12',
            stem: 'Explain the triangle (tip-to-tail) method for adding two vectors. [3 marks]',
            marks: 3,
            keywords: ['tip', 'tail', 'resultant', 'arrow', 'measurement', 'scale'],
            modelAnswer: 'In the triangle method: (1) Draw the first vector to scale with correct direction. (2) From the tip of the first vector, draw the second vector to scale. (3) The resultant is drawn from the tail of the first vector to the tip of the second vector. (4) The magnitude and direction can be found by measuring the resultant arrow using the scale.'
        },

        // Projectiles
        {
            id: 'kw-t2-13',
            stem: 'A stone is thrown horizontally at 20 m/s from a cliff 45 m high. Calculate the time of flight and horizontal range. [4 marks]',
            marks: 4,
            keywords: ['horizontal', 'vertical', 'time of flight', 'range', 'sqrt', 'independent'],
            modelAnswer: 'Horizontal launch (θ = 0°): ux = 20 m/s, uy = 0. Vertical motion: time of flight from h = ½gt² gives t = √(2h/g) = √(2×45/9.81) = √(90/9.81) = √9.17 = 3.03 s. Range: R = ux × t = 20 × 3.03 = 60.6 m.'
        },
        {
            id: 'kw-t2-14',
            stem: 'Explain the independence of horizontal and vertical motion in projectile problems. [2 marks]',
            marks: 2,
            keywords: ['independent', 'horizontal', 'vertical', 'acceleration', 'zero', 'constant'],
            modelAnswer: 'In projectile motion (ignoring air resistance), horizontal and vertical components are completely independent. Horizontally: acceleration is zero, so horizontal velocity remains constant (ux = u cosθ). Vertically: acceleration is g downward, so vertical motion follows SUVAT with a = -g or +g. Time t is the bridge linking both motions through the equations.'
        },

        // Forces as Vectors
        {
            id: 'kw-t2-15',
            stem: 'Define equilibrium and explain how to recognise it in a force problem. [3 marks]',
            marks: 3,
            keywords: ['equilibrium', 'resultant', 'zero', 'sum', 'components', 'stationary', 'constant velocity'],
            modelAnswer: 'Equilibrium occurs when the resultant (net) force acting on an object is zero. This means the object is either stationary or moving at constant velocity with balanced forces. Mathematically: ΣFx = 0 and ΣFy = 0. The sum of all horizontal components and all vertical components must each equal zero.'
        }
    ],
    flashcards: [
        // Equations of Motion
        {
            id: 'fc-t2-1',
            front: 'What are the four SUVAT equations?',
            back: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as\ns = ½(u + v)t',
            topic: 'Equations of Motion'
        },
        {
            id: 'fc-t2-2',
            front: 'What is the value of acceleration due to gravity?',
            back: 'g = 9.81 m/s² on Earth\ng = 9.8 m/s² or g = 10 m/s² are sometimes used in exam papers\nDirection: always acts DOWNWARD',
            topic: 'Equations of Motion'
        },
        {
            id: 'fc-t2-3',
            front: 'When do SUVAT equations NOT apply?',
            back: 'When acceleration is NOT constant\nExamples: falling with air resistance, varying forces, circular motion',
            topic: 'Equations of Motion'
        },
        {
            id: 'fc-t2-4',
            front: 'A car accelerates from rest at 3 m/s² for 6 seconds. Calculate its final velocity.',
            back: 'v = u + at = 0 + (3 × 6) = 18 m/s',
            topic: 'Equations of Motion'
        },
        {
            id: 'fc-t2-5',
            front: 'A ball is thrown upward at 15 m/s. Taking upward as positive, what is its velocity at maximum height?',
            back: '0 m/s\nAt maximum height, vertical velocity is zero as gravity has decelerated the ball to stop before it falls.',
            topic: 'Equations of Motion'
        },

        // Motion Graphs
        {
            id: 'fc-t2-6',
            front: 'What does the gradient of a displacement-time graph represent?',
            back: 'Velocity\nThe gradient at any point equals the instantaneous velocity.',
            topic: 'Motion Graphs'
        },
        {
            id: 'fc-t2-7',
            front: 'What does the gradient of a velocity-time graph represent?',
            back: 'Acceleration\nThe gradient at any point equals the instantaneous acceleration.',
            topic: 'Motion Graphs'
        },
        {
            id: 'fc-t2-8',
            front: 'What does the area under a velocity-time graph represent?',
            back: 'Displacement\nThe area between the v-t graph and time axis equals the displacement. Areas above axis are positive; areas below are negative.',
            topic: 'Motion Graphs'
        },
        {
            id: 'fc-t2-9',
            front: 'What indicates constant velocity on a v-t graph?',
            back: 'A horizontal line\nA horizontal line has zero gradient, meaning zero acceleration and constant velocity.',
            topic: 'Motion Graphs'
        },
        {
            id: 'fc-t2-10',
            front: 'What indicates a curved displacement-time graph?',
            back: 'Changing velocity\nA curved s-t graph means the gradient (velocity) is changing — either accelerating or decelerating.',
            topic: 'Motion Graphs'
        },

        // Scalars & Vectors
        {
            id: 'fc-t2-11',
            front: 'What is the difference between a scalar and a vector?',
            back: 'Scalar: magnitude only\nVector: magnitude + direction\nA scalar is fully described by a number and a unit. A vector requires both a size (magnitude) and a direction to be fully described.',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'fc-t2-12',
            front: 'Give three examples of scalar quantities.',
            back: 'Distance, Speed, Mass, Temperature, Time, Energy, Power, Pressure',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'fc-t2-13',
            front: 'Give three examples of vector quantities.',
            back: 'Displacement, Velocity, Acceleration, Force, Momentum, Weight, Electric field strength',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'fc-t2-14',
            front: 'What is the relationship between distance and displacement?',
            back: 'Distance: total path length (scalar)\nDisplacement: straight-line from start to finish (vector)\nA circular journey: distance > displacement\nExample: 300 m east + 400 m north → distance = 700 m, displacement = 500 m',
            topic: 'Scalars & Vectors'
        },
        {
            id: 'fc-t2-15',
            front: 'A person walks 5 km north then 5 km south. What is their net displacement?',
            back: '0 m\nThey return to their starting point, so net displacement is zero (even though total distance travelled is 10 km).',
            topic: 'Scalars & Vectors'
        },

        // Resolving Vectors
        {
            id: 'fc-t2-16',
            front: 'How do you resolve a force F at angle θ into horizontal and vertical components?',
            back: 'Horizontal: Fx = F cosθ\nVertical: Fy = F sinθ\nThe component adjacent to the angle uses cosine; the component opposite the angle uses sine.',
            topic: 'Resolving Vectors'
        },
        {
            id: 'fc-t2-17',
            front: 'A 50 N force acts at 60° above horizontal. Calculate Fx and Fy.',
            back: 'Fx = 50 cos 60° = 50 × 0.5 = 25 N\nFy = 50 sin 60° = 50 × 0.866 = 43.3 N',
            topic: 'Resolving Vectors'
        },
        {
            id: 'fc-t2-18',
            front: 'What are the components of weight on a slope at angle α?',
            back: 'Along slope: W sinα\nPerpendicular to slope: W cosα\nThe component parallel to the slope causes acceleration down; the component perpendicular balances the normal reaction force.',
            topic: 'Resolving Vectors'
        },

        // Finding Resultant Vector
        {
            id: 'fc-t2-19',
            front: 'What is the parallelogram method for adding vectors?',
            back: 'Draw both vectors from the same starting point\nComplete the parallelogram\nThe resultant is the diagonal from the common starting point',
            topic: 'Finding the Resultant Vector'
        },
        {
            id: 'fc-t2-20',
            front: 'How do you find the resultant of two perpendicular vectors?',
            back: 'Magnitude: R = √(A² + B²)\nDirection: θ = arctan(B/A)\nUse Pythagoras for magnitude and trigonometry for direction.',
            topic: 'Finding the Resultant Vector'
        },

        // Projectiles
        {
            id: 'fc-t2-21',
            front: 'What are the horizontal and vertical accelerations in projectile motion?',
            back: 'Horizontal: ax = 0 (no force)\nVertical: ay = -g (gravity downward)\nHorizontal velocity remains constant; vertical motion is uniformly accelerated.',
            topic: 'Projectiles'
        },
        {
            id: 'fc-t2-22',
            front: 'What is the time of flight for a projectile launched at angle θ?',
            back: 'T = 2u sinθ / g\nDerived from setting vertical displacement y = 0 (landing at same height)\nThis gives total time for the parabolic trajectory.',
            topic: 'Projectiles'
        },
        {
            id: 'fc-t2-23',
            front: 'What is the time to reach maximum height in projectile motion?',
            back: 'tmax = u sinθ / g\nAt maximum height, vertical velocity vy = 0\nThis is half the total time of flight.',
            topic: 'Projectiles'
        },
        {
            id: 'fc-t2-24',
            front: 'What launch angle gives maximum range for a projectile?',
            back: '45°\nRange R = u² sin 2θ / g\nMaximum when sin 2θ = 1 (i.e., 2θ = 90°, so θ = 45°)\nApplies when launch and landing heights are the same.',
            topic: 'Projectiles'
        },

        // Forces as Vectors
        {
            id: 'fc-t2-25',
            front: 'What is a free-body diagram?',
            back: 'Diagram showing all forces acting ON a single object\nForces shown as arrows from the object\nRules: only show forces ON the object, not BY the object',
            topic: 'Forces as Vectors'
        },
        {
            id: 'fc-t2-26',
            front: 'What are the equilibrium conditions?',
            back: 'ΣFx = 0\nΣFy = 0\nThe sum of all horizontal force components equals zero, and the sum of all vertical force components equals zero.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'fc-t2-27',
            front: 'What is the normal reaction force on an inclined plane?',
            back: 'N = W cosα = mg cosα\nBalances the component of weight perpendicular to the slope.\nActs perpendicular to the contact surface.',
            topic: 'Forces as Vectors'
        },
        {
            id: 'fc-t2-28',
            front: 'How do you find relative velocity?',
            back: 'v_AB = v_A - v_B\nSame direction: |v_A - v_B| (difference)\nOpposite directions: |v_A| + |v_B| (sum)\nAlways define positive direction first.',
            topic: 'Forces as Vectors'
        }
    ]
};
