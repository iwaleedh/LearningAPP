export const exercises_physics_1_5 = {
    mcq: [
        // Work
        {
            id: 'mcq-1-5-1',
            stem: 'What is the definition of work done by a force?',
            options: [
                'Force multiplied by velocity',
                'Force multiplied by displacement in the direction of the force',
                'Mass multiplied by acceleration',
                'Energy transferred divided by time'
            ],
            correctAnswer: 1,
            rationale: 'Work done is defined as the product of the force and the displacement moved in the direction of the force (W = Fs).',
            topic: 'Work',
        },
        {
            id: 'mcq-1-5-2',
            stem: 'A person pushes a wall with a force of 500 N for 10 seconds. The wall does not move. How much work is done on the wall?',
            options: ['0 J', '50 J', '500 J', '5000 J'],
            correctAnswer: 0,
            rationale: 'Work requires both force and displacement. Since the wall does not move, displacement is 0, so work done is 0 J.',
            topic: 'Work',
        },
        {
            id: 'mcq-1-5-3',
            stem: 'A block is pulled along a horizontal surface by a force of 40 N acting at an angle of 30° above the horizontal. If the block moves 5.0 m, what is the work done by the force?',
            options: ['100 J', '173 J', '200 J', '230 J'],
            correctAnswer: 1,
            rationale: 'Work = Fs cos θ = 40 × 5.0 × cos(30°) = 200 × 0.866 ≈ 173 J.',
            topic: 'Work',
        },
        {
            id: 'mcq-1-5-4',
            stem: 'When a force is applied perpendicular to the direction of motion of an object, the work done by that force is:',
            options: ['Maximum', 'Negative', 'Zero', 'Equal to kinetic energy'],
            correctAnswer: 2,
            rationale: 'If force is perpendicular to displacement (θ = 90°), cos 90° = 0, so W = 0 J. No energy is transferred by that force.',
            topic: 'Work',
        },
        // Kinetic Energy
        {
            id: 'mcq-1-5-5',
            stem: 'A car of mass 1000 kg is travelling at 20 m/s. What is its kinetic energy?',
            options: ['10 kJ', '20 kJ', '200 kJ', '400 kJ'],
            correctAnswer: 2,
            rationale: 'KE = ½mv² = 0.5 × 1000 × (20)² = 500 × 400 = 200,000 J = 200 kJ.',
            topic: 'Kinetic Energy',
        },
        {
            id: 'mcq-1-5-6',
            stem: 'If the speed of an object is doubled, its kinetic energy will:',
            options: ['Halve', 'Double', 'Quadruple', 'Increase by a factor of 8'],
            correctAnswer: 2,
            rationale: 'Kinetic energy is proportional to the square of the speed (KE ∝ v²). Doubling speed means the new KE is 2² = 4 times the original.',
            topic: 'Kinetic Energy',
        },
        {
            id: 'mcq-1-5-7',
            stem: 'Which statement about kinetic energy is correct?',
            options: [
                'It is a vector quantity',
                'It can be negative',
                'It depends on the velocity vector direction',
                'It depends only on speed and mass'
            ],
            correctAnswer: 3,
            rationale: 'Kinetic energy is a scalar quantity (½mv²) dependent on speed (magnitude of velocity), not direction. It cannot be negative.',
            topic: 'Kinetic Energy',
        },
        {
            id: 'mcq-1-5-8',
            stem: 'A body travelling at 10 m/s has a kinetic energy of 100 J. If its speed increases to 30 m/s, what is its new kinetic energy?',
            options: ['300 J', '600 J', '900 J', '2700 J'],
            correctAnswer: 2,
            rationale: 'Speed has tripled (10 to 30), so KE increases by a factor of 3² = 9. 100 J × 9 = 900 J.',
            topic: 'Kinetic Energy',
        },
        // Gravitational Potential Energy
        {
            id: 'mcq-1-5-9',
            stem: 'Gravitational potential energy depends on the chosen reference level. What does this mean?',
            options: [
                'GPE is always zero everywhere',
                'Absolute GPE is meaningless; only changes in GPE (Δmgh) matter',
                'Gravity changes depending on the reference level',
                'Mass changes with height'
            ],
            correctAnswer: 1,
            rationale: 'The absolute value of GPE depends on where you define h=0. In calculations, only the change in height (and thus change in GPE) matters.',
            topic: 'Gravitational Potential Energy',
        },
        {
            id: 'mcq-1-5-10',
            stem: 'A 2.0 kg mass is lifted vertically by 3.0 m in a uniform gravitational field (g = 9.81 N/kg). What is the gain in GPE?',
            options: ['6.0 J', '19.6 J', '58.9 J', '117 J'],
            correctAnswer: 2,
            rationale: 'GPE = mgh = 2.0 × 9.81 × 3.0 = 58.86 ≈ 58.9 J.',
            topic: 'Gravitational Potential Energy',
        },
        {
            id: 'mcq-1-5-11',
            stem: 'Which of the following objects has the greatest gravitational potential energy relative to the ground?',
            options: [
                'A 1 kg mass at 10 m height',
                'A 2 kg mass at 6 m height',
                'A 5 kg mass at 2 m height',
                'A 10 kg mass on the ground'
            ],
            correctAnswer: 1,
            rationale: 'Calculate m×h for each: (1×10=10), (2×6=12), (5×2=10), (10×0=0). The 2 kg mass at 6 m has the most GPE.',
            topic: 'Gravitational Potential Energy',
        },
        // Conservation of Energy
        {
            id: 'mcq-1-5-12',
            stem: 'A ball of mass 0.5 kg is dropped from rest from a height of 5.0 m. Ignoring air resistance, what is its kinetic energy just before hitting the ground? (Use g = 9.81 N/kg)',
            options: ['2.5 J', '12.3 J', '24.5 J', '49.1 J'],
            correctAnswer: 2,
            rationale: 'By conservation of energy, KE gained = GPE lost = mgh = 0.5 × 9.81 × 5.0 = 24.525 ≈ 24.5 J.',
            topic: 'Conservation of Energy',
        },
        {
            id: 'mcq-1-5-13',
            stem: 'A pendulum bob is released from a height h above its lowest point. At the lowest point of its swing, which statement is true?',
            options: [
                'It has maximum GPE and minimum KE',
                'It has maximum KE and minimum GPE',
                'Its KE is zero',
                'Its GPE and KE are equal'
            ],
            correctAnswer: 1,
            rationale: 'At the lowest point, it has lost the maximum GPE and converted it completely into KE, so KE is at its maximum.',
            topic: 'Conservation of Energy',
        },
        {
            id: 'mcq-1-5-14',
            stem: 'When friction acts on a moving object sliding down a slope, the energy conservation equation becomes:',
            options: [
                'mgh = ½mv²',
                '½mv² = mgh + W_friction',
                'mgh = ½mv² + W_friction',
                'W_friction = mgh + ½mv²'
            ],
            correctAnswer: 2,
            rationale: 'Total initial energy (GPE) equals the final energy (KE) plus the energy dissipated as heat by friction (W_friction).',
            topic: 'Conservation of Energy',
        },
        {
            id: 'mcq-1-5-15',
            stem: 'An object is thrown vertically upwards. As it rises:',
            options: [
                'Its kinetic energy increases and GPE decreases',
                'Both KE and GPE decrease',
                'Its kinetic energy decreases and GPE increases',
                'Neither KE nor GPE changes'
            ],
            correctAnswer: 2,
            rationale: 'As it rises, it loses speed (KE decreases) and gains height (GPE increases), conserving total mechanical energy.',
            topic: 'Conservation of Energy',
        },
        // Power
        {
            id: 'mcq-1-5-16',
            stem: 'Power is defined as:',
            options: [
                'Total energy transferred',
                'Force multiplied by velocity squared',
                'Work done divided by distance',
                'Rate of doing work'
            ],
            correctAnswer: 3,
            rationale: 'Power is the rate at which energy is transferred or the rate of doing work (P = W/t).',
            topic: 'Power',
        },
        {
            id: 'mcq-1-5-17',
            stem: 'A motor lifts a 200 kg load vertically by 15 m in 30 seconds. What is the useful power output? (g = 9.81 N/kg)',
            options: ['98.1 W', '300 W', '981 W', '2940 W'],
            correctAnswer: 2,
            rationale: 'Work done = mgh = 200 × 9.81 × 15 = 29430 J. Power = W/t = 29430 / 30 = 981 W.',
            topic: 'Power',
        },
        {
            id: 'mcq-1-5-18',
            stem: 'A car is travelling at a constant speed of 25 m/s against a total resistive force of 800 N. What is the power of the engine?',
            options: ['32 W', '3.2 kW', '20 kW', '200 kW'],
            correctAnswer: 2,
            rationale: 'Since speed is constant, P = Fv = 800 × 25 = 20,000 W = 20 kW.',
            topic: 'Power',
        },
        {
            id: 'mcq-1-5-19',
            stem: '1 kilowatt-hour (kWh) is a unit of:',
            options: ['Power', 'Force', 'Energy', 'Time'],
            correctAnswer: 2,
            rationale: '1 kWh = 1 kW × 1 hour = 1000 J/s × 3600 s = 3.6 × 10⁶ J, which is a unit of energy.',
            topic: 'Power',
        },
        // Efficiency
        {
            id: 'mcq-1-5-20',
            stem: 'The efficiency of a system is defined as:',
            options: [
                'Total energy input / Useful energy output',
                'Useful energy output / Total energy input',
                'Wasted energy / Total energy input',
                'Useful energy output × Total energy input'
            ],
            correctAnswer: 1,
            rationale: 'Efficiency = useful energy output / total energy input (or useful power / total power).',
            topic: 'Efficiency',
        },
        {
            id: 'mcq-1-5-21',
            stem: 'Why can no real mechanical system have an efficiency of 100%?',
            options: [
                'Because energy is always created',
                'Because power input is always too low',
                'Because some energy is always dissipated as heat or sound due to friction and resistance',
                'Because kinetic energy is always conserved'
            ],
            correctAnswer: 2,
            rationale: 'In real systems, friction and electrical resistance cause some input energy to be wasted as heat and sound, so useful output is always less than total input.',
            topic: 'Efficiency',
        },
        {
            id: 'mcq-1-5-22',
            stem: 'An electric motor has an input power of 500 W and an efficiency of 75%. What is the useful mechanical power output?',
            options: ['125 W', '375 W', '500 W', '667 W'],
            correctAnswer: 1,
            rationale: 'Useful power = Efficiency × Input power = 0.75 × 500 = 375 W.',
            topic: 'Efficiency',
        },
        {
            id: 'mcq-1-5-23',
            stem: 'In a Sankey diagram representing an energy transfer, the width of an arrow represents:',
            options: [
                'The temperature generated',
                'The efficiency of the device',
                'The speed of energy transfer',
                'The amount of energy'
            ],
            correctAnswer: 3,
            rationale: 'In a Sankey diagram, arrow widths are proportional to the amount of energy (or power) being transferred or wasted.',
            topic: 'Efficiency',
        },
        {
            id: 'mcq-1-5-24',
            stem: 'How can the efficiency of a machine with moving parts be improved?',
            options: [
                'By increasing the input power',
                'By lubricating the moving parts to reduce friction',
                'By running the machine for a longer time',
                'By making the machine larger'
            ],
            correctAnswer: 1,
            rationale: 'Lubricating moving parts reduces resistive frictional forces, meaning less energy is wasted as heat, thereby improving efficiency.',
            topic: 'Efficiency',
        }
    ],

    fillblank: [
        {
            id: 'fb-1-5-1',
            stem: 'Complete the sentence about work done.',
            template: 'Work done is defined as the product of __BLANK__ and the __BLANK__ in the direction of the force.',
            blanks: [
                { answer: 'force' },
                { answer: 'displacement' }
            ],
            rationale: 'Work = Force × displacement (W = Fs).',
        },
        {
            id: 'fb-1-5-2',
            stem: 'Complete the standard unit for work and energy.',
            template: 'The SI unit for work done and energy is the __BLANK__, which is equivalent to one Newton __BLANK__.',
            blanks: [
                { answer: 'joule' },
                { answer: 'metre' }
            ],
            rationale: '1 Joule (J) is the work done by a force of 1 N acting over a distance of 1 m (N m).',
        },
        {
            id: 'fb-1-5-3',
            stem: 'Fill in the equation for a force at an angle.',
            template: 'When a force acts at an angle θ to the horizontal displacement, Work = Fs __BLANK__ θ.',
            blanks: [
                { answer: 'cos' }
            ],
            rationale: 'The component of force parallel to the displacement is F cos θ. Therefore, W = Fs cos θ.',
        },
        {
            id: 'fb-1-5-4',
            stem: 'Complete the kinetic energy formula.',
            template: 'Kinetic Energy (KE) = ½ × m × __BLANK__.',
            blanks: [
                { answer: 'v²' }
            ],
            rationale: 'KE = ½mv². Ensure to square the speed.',
        },
        {
            id: 'fb-1-5-5',
            stem: 'Complete the sentence on GPE.',
            template: 'Gravitational potential energy depends on mass, gravitational field strength, and __BLANK__ above a reference level.',
            blanks: [
                { answer: 'height' }
            ],
            rationale: 'GPE = mgh, requiring a height above an arbitrary reference zero point.',
        },
        {
            id: 'fb-1-5-6',
            stem: 'State the conservation of energy principle in falling.',
            template: 'For an object falling without air resistance, the __BLANK__ lost is equal to the __BLANK__ gained.',
            blanks: [
                { answer: 'GPE' },
                { answer: 'kinetic energy' }
            ],
            rationale: 'Energy is conserved, so mgh lost transforms fully into ½mv² gained if no friction acts.',
        },
        {
            id: 'fb-1-5-7',
            stem: 'Complete the definition of power.',
            template: 'Power is defined as the __BLANK__ of doing work, or the work done divided by __BLANK__.',
            blanks: [
                { answer: 'rate' },
                { answer: 'time' }
            ],
            rationale: 'Power is the rate of energy transfer (P = W/t).',
        },
        {
            id: 'fb-1-5-8',
            stem: 'Fill in the alternative power equation.',
            template: 'For a constant force F moving an object at a constant speed v, power P = __BLANK__ × __BLANK__.',
            blanks: [
                { answer: 'F' },
                { answer: 'v' }
            ],
            rationale: 'P = W/t = (Fs)/t. Since s/t = v, this simplifies to P = Fv.',
        },
        {
            id: 'fb-1-5-9',
            stem: 'Identify the unit of power.',
            template: 'The SI unit of power is the __BLANK__, where 1 W = 1 __BLANK__ per second.',
            blanks: [
                { answer: 'watt' },
                { answer: 'joule' }
            ],
            rationale: '1 Watt (W) = 1 Joule per second (J/s).',
        },
        {
            id: 'fb-1-5-10',
            stem: 'Complete the efficiency equation.',
            template: 'Efficiency = __BLANK__ energy output / __BLANK__ energy input.',
            blanks: [
                { answer: 'useful' },
                { answer: 'total' }
            ],
            rationale: 'Efficiency measures how much of the total input energy is converted into useful output.',
        },
        {
            id: 'fb-1-5-11',
            stem: 'State where wasted energy usually goes.',
            template: 'In mechanical devices, wasted energy is typically transferred to the surroundings as __BLANK__ due to __BLANK__.',
            blanks: [
                { answer: 'heat' },
                { answer: 'friction' }
            ],
            rationale: 'Friction between moving parts generates heat, which diffuses into the surroundings.',
        },
        {
            id: 'fb-1-5-12',
            stem: 'Complete the Sankey diagram description.',
            template: 'In a Sankey diagram, the __BLANK__ of the arrow represents the amount of __BLANK__.',
            blanks: [
                { answer: 'width' },
                { answer: 'energy' }
            ],
            rationale: 'Arrow widths in a Sankey diagram are drawn to scale to represent energy values.',
        }
    ],

    dragdrop: [
        {
            id: 'dd-1-5-1',
            stem: 'Classify whether the work done by the described force is positive, negative, or zero.',
            categories: ['Positive Work', 'Negative Work', 'Zero Work'],
            items: [
                { text: 'A person pushing a car forward', category: 'Positive Work' },
                { text: 'Friction acting on a sliding box', category: 'Negative Work' },
                { text: 'Gravity acting on a satellite in circular orbit', category: 'Zero Work' },
                { text: 'Air resistance on a falling skydiver', category: 'Negative Work' },
                { text: 'Tension pulling a lift upwards', category: 'Positive Work' },
                { text: 'Pushing against a rigid, unmoving brick wall', category: 'Zero Work' }
            ],
        },
        {
            id: 'dd-1-5-2',
            stem: 'Match the derived equations to their appropriate physics concept.',
            categories: ['Kinetic Energy', 'Gravitational Potential Energy', 'Power', 'Efficiency'],
            items: [
                { text: '½mv²', category: 'Kinetic Energy' },
                { text: 'mgh', category: 'Gravitational Potential Energy' },
                { text: 'Fv', category: 'Power' },
                { text: 'W/t', category: 'Power' },
                { text: 'Useful Out / Total In', category: 'Efficiency' }
            ],
        },
        {
            id: 'dd-1-5-3',
            stem: 'Sort the following examples based on their typical power outputs into increasing order.',
            categories: ['Smallest (~5W)', 'Medium (~300W)', 'Large (~60kW)', 'Largest (~1GW)'],
            items: [
                { text: 'Phone charger', category: 'Smallest (~5W)' },
                { text: 'Professional cyclist climbing', category: 'Medium (~300W)' },
                { text: 'Family car engine', category: 'Large (~60kW)' },
                { text: 'Nuclear power station', category: 'Largest (~1GW)' }
            ],
        },
        {
            id: 'dd-1-5-4',
            stem: 'Match the energy transformation scenario to its energy equation.',
            categories: ['mgh = ½mv²', 'mgh = ½mv² + W_friction', '½kx² = ½mv²', 'P_in × time = mgh'],
            items: [
                { text: 'Dropping a ball in a vacuum', category: 'mgh = ½mv²' },
                { text: 'A block sliding down a rough ramp', category: 'mgh = ½mv² + W_friction' },
                { text: 'A spring firing a ball horizontally', category: '½kx² = ½mv²' },
                { text: 'An electric motor lifting a mass vertically', category: 'P_in × time = mgh' }
            ],
        },
        {
            id: 'dd-1-5-5',
            stem: 'Classify these ways to improve mechanical or electrical device efficiency.',
            categories: ['Reduce Friction', 'Reduce Air Resistance', 'Reduce Electrical Loss'],
            items: [
                { text: 'Lubricating gears with oil', category: 'Reduce Friction' },
                { text: 'Streamlining the body of a car', category: 'Reduce Air Resistance' },
                { text: 'Using thicker copper wires', category: 'Reduce Electrical Loss' },
                { text: 'Using ball bearings in wheels', category: 'Reduce Friction' }
            ],
        }
    ],

    sequence: [
        {
            id: 'seq-1-5-1',
            stem: 'Order the steps to derive the equation for kinetic energy (KE = ½mv²) from the definition of work:',
            steps: [
                'Start with the definition of work done: W = Fs',
                'Substitute Newton\'s second law (F = ma) to get W = mas',
                'Recall the kinematic equation: v² = u² + 2as',
                'Assume the object starts from rest, so u = 0, meaning v² = 2as',
                'Rearrange to get as = v²/2',
                'Substitute into the work equation: W = m(v²/2) = ½mv²'
            ],
        },
        {
            id: 'seq-1-5-2',
            stem: 'Order the steps to calculate the speed of a falling object, assuming no air resistance:',
            steps: [
                'Identify the height h from which the object falls',
                'Recall the formula for GPE lost: ΔE_p = mgh',
                'State conservation of energy: GPE lost = KE gained',
                'Equate the equations: mgh = ½mv²',
                'Cancel the mass m from both sides: gh = ½v²',
                'Rearrange to solve for velocity: v = √(2gh)'
            ],
        },
        {
            id: 'seq-1-5-3',
            stem: 'Order the energy transformations occurring in a coal power station from start to finish:',
            steps: [
                'Chemical potential energy in coal',
                'Thermal energy from burning',
                'Kinetic energy of expanding steam',
                'Kinetic energy of spinning turbine',
                'Electrical energy generated in the generator'
            ],
        },
        {
            id: 'seq-1-5-4',
            stem: 'Order the steps to calculate the useful power output of an engine lifting a mass up a slope:',
            steps: [
                'Identify the mass m, slope length s, and vertical height h',
                'Calculate the work done against gravity: W = mgh',
                'If there is friction, calculate work done against friction: W_f = F_friction × s',
                'Find total useful work: W_total = mgh + W_f',
                'Note the time t taken to climb the slope',
                'Divide total work by time: P = W_total / t'
            ],
        },
        {
            id: 'seq-1-5-5',
            stem: 'Order the procedure to draw a Sankey diagram for a simple device:',
            steps: [
                'Identify the total input energy and all output energy forms',
                'Choose an appropriate scale (e.g., 1 square = 10 J)',
                'Draw a wide arrow on the left representing the input energy based on the scale',
                'Split the arrow; draw a forward-pointing branch for useful output energy',
                'Draw a downward-pointing branch for wasted energy (heat/sound)',
                'Ensure the widths of the output branches add up to the width of the input branch'
            ],
        }
    ],

    keyword: [
        {
            id: 'kw-1-5-1',
            stem: 'Define work done and state its SI unit. [2 marks]',
            marks: 2,
            keywords: ['force', 'displacement', 'direction', 'joule'],
            modelAnswer: 'Work done is the product of a force and the displacement moved in the direction of the force. Its SI unit is the joule (J).',
        },
        {
            id: 'kw-1-5-2',
            stem: 'A child pushes a toy car with a force F at an angle θ to the horizontal ground. State the formula for the work done as the car moves a distance s. [1 mark]',
            marks: 1,
            keywords: ['W', 'Fs', 'cos'],
            modelAnswer: 'W = Fs cos θ.',
        },
        {
            id: 'kw-1-5-3',
            stem: 'Explain why a centripetal force doing uniform circular motion does zero work on the object. [2 marks]',
            marks: 2,
            keywords: ['perpendicular', 'displacement', 'cos 90', 'zero'],
            modelAnswer: 'The centripetal force is always directed towards the centre, which is perpendicular (at 90°) to the direction of motion/displacement at any point. Since W = Fs cos 90°, and cos 90° = 0, the work done is zero.',
        },
        {
            id: 'kw-1-5-4',
            stem: 'Define kinetic energy and state the equation. [2 marks]',
            marks: 2,
            keywords: ['motion', 'speed', 'velocity', '½mv²'],
            modelAnswer: 'Kinetic energy is the energy an object possesses due to its motion. The equation is KE = ½mv².',
        },
        {
            id: 'kw-1-5-5',
            stem: 'State the principle of conservation of energy. [2 marks]',
            marks: 2,
            keywords: ['created', 'destroyed', 'transferred', 'total', 'constant'],
            modelAnswer: 'The principle of conservation of energy states that energy cannot be created or destroyed, only transferred from one form to another. Therefore, the total energy of a closed system remains constant.',
        },
        {
            id: 'kw-1-5-6',
            stem: 'A box of mass m slides down a rough ramp of vertical height h. Its velocity at the bottom is v. Write an energy equation linking m, h, v, and the work done against friction, W. [2 marks]',
            marks: 2,
            keywords: ['mgh', '½mv²', 'W'],
            modelAnswer: 'The initial gravitational potential energy equals the final kinetic energy plus the work done against friction: mgh = ½mv² + W.',
        },
        {
            id: 'kw-1-5-7',
            stem: 'Define power and give two equations used to calculate it in mechanics. [3 marks]',
            marks: 3,
            keywords: ['rate', 'work', 'energy transfer', 'W/t', 'Fv'],
            modelAnswer: 'Power is the rate of doing work, or the rate of energy transfer. It can be calculated using P = W/t (Work / time), or P = Fv (Force × velocity for a constant force).',
        },
        {
            id: 'kw-1-5-8',
            stem: 'Define efficiency and explain why a motor is never 100% efficient. [2 marks]',
            marks: 2,
            keywords: ['useful output', 'total input', 'heat', 'friction', 'wasted'],
            modelAnswer: 'Efficiency is the ratio of useful energy output to total energy input. A motor is never 100% efficient because some energy is always wasted and dissipated into the surroundings as heat due to internal friction between moving parts.',
        }
    ],

    flashcards: [
        {
            id: 'fc-1-5-1',
            front: 'What is the definition of work done?',
            back: 'Work done is the energy transferred when a force moves an object through a displacement. W = Fs (force × displacement in the direction of the force).',
            topic: 'Work',
        },
        {
            id: 'fc-1-5-2',
            front: 'What is the unit of work and what is it equivalent to in SI base units?',
            back: 'Unit: Joule (J). 1 J = 1 Newton metre (N m) = 1 kg m² s⁻².',
            topic: 'Work',
        },
        {
            id: 'fc-1-5-3',
            front: 'What is the formula for work done when the force acts at an angle θ to the horizontal displacement?',
            back: 'W = Fs cos θ.\nHere, F cos θ is the component of force acting parallel to the displacement.',
            topic: 'Work',
        },
        {
            id: 'fc-1-5-4',
            front: 'If a resultant force acts on an object at 90° to its direction of motion, how much work is done?',
            back: 'Zero work is done. Because cos(90°) = 0, no energy is transferred (e.g., centripetal force).',
            topic: 'Work',
        },
        {
            id: 'fc-1-5-5',
            front: 'What is the formula for Kinetic Energy?',
            back: 'KE = ½mv²\nWhere m is mass (kg) and v is speed (m/s).',
            topic: 'Kinetic Energy',
        },
        {
            id: 'fc-1-5-6',
            front: 'Is kinetic energy a scalar or a vector?',
            back: 'Scalar. It has magnitude but no direction, and it is always positive regardless of the direction of velocity.',
            topic: 'Kinetic Energy',
        },
        {
            id: 'fc-1-5-7',
            front: 'What is the formula for Gravitational Potential Energy?',
            back: 'ΔGPE = mgΔh\nWhere m is mass, g is 9.81 N/kg, and Δh is the change in vertical height.',
            topic: 'Gravitational Potential Energy',
        },
        {
            id: 'fc-1-5-8',
            front: 'What does the principle of conservation of energy state?',
            back: 'Energy cannot be created or destroyed, only transferred from one store to another. Total energy of a closed system remains constant.',
            topic: 'Conservation of Energy',
        },
        {
            id: 'fc-1-5-9',
            front: 'When an object falls in a vacuum, what energy conversion takes place?',
            back: 'Gravitational potential energy is transferred entirely to kinetic energy.\nmgh = ½mv².',
            topic: 'Conservation of Energy',
        },
        {
            id: 'fc-1-5-10',
            front: 'What is the energy equation for an object sliding down a rough slope?',
            back: 'GPE lost = KE gained + Work done against friction\nmgh = ½mv² + (Friction × distance).',
            topic: 'Conservation of Energy',
        },
        {
            id: 'fc-1-5-11',
            front: 'Define Power and state its unit.',
            back: 'Power is the rate of energy transfer or rate of doing work.\nP = W / t. \nUnit: Watt (W), equivalent to 1 Joule per second (J/s).',
            topic: 'Power',
        },
        {
            id: 'fc-1-5-12',
            front: 'What is the alternative formula for Power when an object is pushed at a constant speed?',
            back: 'P = Fv\n(Power = Force × velocity). Derived from P = W/t = (Fs)/t.',
            topic: 'Power',
        },
        {
            id: 'fc-1-5-13',
            front: 'What does a power of 1 kilowatt (1 kW) mean?',
            back: 'It means 1000 Joules of energy are transferred every second.',
            topic: 'Power',
        },
        {
            id: 'fc-1-5-14',
            front: 'What is the formula for Efficiency?',
            back: 'Efficiency = (Useful energy output) / (Total energy input)\nOr: (Useful power output) / (Total power input).\nMultiply by 100 for percentage.',
            topic: 'Efficiency',
        },
        {
            id: 'fc-1-5-15',
            front: 'Why is efficiency always less than 100%?',
            back: 'Because in any real process, some energy is dissipated to the surroundings as wasted heat or sound due to friction or electrical resistance.',
            topic: 'Efficiency',
        },
        {
            id: 'fc-1-5-16',
            front: 'What does a Sankey diagram show?',
            back: 'It is a visual representation of energy transfers. The width of each arrow is drawn to scale to represent the amount/proportion of energy transferred.',
            topic: 'Efficiency',
        }
    ]
};
