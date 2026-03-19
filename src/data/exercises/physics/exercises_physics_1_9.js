export const exercises_physics_1_9 = {
    mcq: [
        // Density
        {
            id: 'mcq-t6-1',
            stem: 'Which of the following is the correct definition of density?',
            options: ['Mass per unit area', 'Mass per unit volume', 'Volume per unit mass', 'Weight per unit volume'],
            correctAnswer: 1,
            rationale: 'Density is mass per unit volume. The equation is ρ = m/V, where ρ is density, m is mass, and V is volume. It determines whether an object floats or sinks in a fluid.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-2',
            stem: 'An object has mass 50 g and volume 20 cm³. What is its density?',
            options: ['0.4 g/cm³', '2.5 g/cm³', '1000 kg/m³', '0.0025 g/mm³'],
            correctAnswer: 1,
            rationale: 'Density = mass/volume = 50 g / 20 cm³ = 2.5 g/cm³. Note: 1 cm³ = 1 × 10⁻⁶ m³ = 10⁻⁶ m³.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-3',
            stem: 'Which statement about density units is CORRECT?',
            options: ['kg/m² is a density unit', 'kg/m³ is a density unit', 'g/cm³ is a density unit', 'N/m³ is a density unit'],
            correctAnswer: 2,
            rationale: 'Density units are mass/volume. Common units include kg/m³, g/cm³, and kg/dm³. kg/m² is area (not density), and N/m³ is not a standard unit (N is force).',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-4',
            stem: 'Objects made from which material typically have the LOWEST density?',
            options: ['Steel', 'Aluminium', 'Lead', 'Polystyrene foam'],
            correctAnswer: 3,
            rationale: 'Polystyrene foam has a very low density (~30 kg/m³ or 0.03 g/cm³), which is why it floats easily and is used for packaging. Lead (~11,340 kg/m³) has the highest density among common materials.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-5',
            stem: 'A gas has mass 2.5 g and occupies 500 cm³ at STP. What is its density?',
            options: ['0.005 g/cm³', '200 kg/m³', '0.02 g/cm³', '5 g/cm³'],
            correctAnswer: 0,
            rationale: 'Density = 2.5 g / 500 cm³ = 0.005 g/cm³. Converting to SI: 0.005 g/cm³ × (1 kg/1000 g) × (10⁶ cm³/m³) = 5 kg/m³. Gases are much less dense than solids.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-6',
            stem: 'Why is a hot air balloon able to lift off?',
            options: ['The balloon has less mass than the surrounding air', 'The heated air inside is less dense than outside', 'The hot air creates an upward force', 'Both A and B are correct'],
            correctAnswer: 1,
            rationale: 'A hot air balloon rises because the heated air inside is less dense (lower mass per volume) than the cooler surrounding air. The lower density of the heated air creates a smaller weight (W = mg) than the upthrust from the surrounding air, resulting in a net upward force.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-7',
            stem: 'What determines whether an object will float in a fluid?',
            options: ['Its shape', 'Its colour', 'Comparison of its density to the fluid density', 'Its mass alone'],
            correctAnswer: 2,
            rationale: 'An object floats if its density is less than the fluid density, sinks if greater, and is neutrally buoyant if equal. Shape and colour do not determine floating — only the relative densities matter.',
            topic: 'Density'
        },
        {
            id: 'mcq-t6-8',
            stem: 'Which has a higher density: 1 kg of steel or 1 kg of water?',
            options: ['Steel', 'Water', 'They are equal', 'It depends on temperature'],
            correctAnswer: 0,
            rationale: 'Steel has a density of approximately 7870 kg/m³, while water has a density of 1000 kg/m³. Steel is about 7.9 times denser than water, which is why steel sinks.',
            topic: 'Density'
        },

        // Upthrust
        {
            id: 'mcq-t6-9',
            stem: 'What is Archimedes\' Principle?',
            options: ['Weight of object equals weight of fluid displaced', 'Upthrust equals weight of fluid displaced', 'Upthrust equals weight of object', 'Upthrust equals buoyant force minus weight'],
            correctAnswer: 1,
            rationale: 'Archimedes\' Principle states that an object submerged in a fluid experiences an upward buoyant force (upthrust) equal to the weight of the fluid displaced by the object. Upthrust = ρ_fluid × V_submerged × g.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-10',
            stem: 'When does an object float in a fluid?',
            options: ['When upthrust equals weight', 'When upthrust is greater than weight', 'When upthrust is less than weight', 'Always, regardless of forces'],
            correctAnswer: 0,
            rationale: 'An object floats when the upthrust equals its weight (net force = zero). It sinks when upthrust is less than weight (net force downward). If upthrust equals weight but the object is not fully submerged, it can be in neutral equilibrium at any depth.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-11',
            stem: 'A ship is made of steel. Why does it float?',
            options: ['Steel is less dense than water', 'The hull displaces enough water volume', 'The engines provide upward thrust', 'Steel becomes less dense in water'],
            correctAnswer: 1,
            rationale: 'Steel (7870 kg/m³) is denser than water (1000 kg/m³), so a solid steel block would sink. However, ships are shaped to displace an enormous volume of water. The upthrust from this displaced water equals the ship\'s weight, allowing it to float.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-12',
            stem: 'At sea level (P₀ = 100 kPa), what is the pressure at 20 m depth in water (ρ = 1000 kg/m³)?',
            options: ['100 kPa', '200 kPa', '294 kPa', '1000 kPa'],
            correctAnswer: 2,
            rationale: 'Using P = P₀ + ρgh: P = 100,000 + 1000 × 9.81 × 20 = 296,000 Pa = 296 kPa. This is why submarines experience much greater pressure at depth.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-13',
            stem: 'What fraction of an iceberg is above water when it floats with 10% submerged?',
            options: ['10%', '20%', '50%', '90%'],
            correctAnswer: 3,
            rationale: 'If 10% of the iceberg volume is submerged, then 90% is above water. Since ice (917 kg/m³) is less dense than seawater (1025 kg/m³), approximately 90% floats above the surface.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-14',
            stem: 'An ice cube floats in water. Which statement is TRUE about the upthrust?',
            options: ['Upthrust equals the weight of the ice', 'Upthrust equals the weight of displaced water', 'Upthrust equals the weight of the water above the ice', 'Upthrust is zero'],
            correctAnswer: 1,
            rationale: 'By Archimedes\' Principle, upthrust equals the weight of the displaced fluid (water), NOT the weight of the floating object (ice). Since the ice displaces water equal to its weight, upthrust = weight of displaced water.',
            topic: 'Upthrust'
        },
        {
            id: 'mcq-t6-15',
            stem: 'What happens to a steel ship if its hull melts into a solid block?',
            options: ['It floats higher', 'It sinks deeper', 'It stays at the same level', 'It becomes neutral at any depth'],
            correctAnswer: 1,
            rationale: 'If the hull were melted into a solid block, it would have a small volume, displacing much less water. The upthrust would be insufficient to equal the weight, so the ship would sink deeper or settle on the bottom.',
            topic: 'Upthrust'
        },

        // Viscous Drag
        {
            id: 'mcq-t6-16',
            stem: 'What is viscous drag?',
            options: ['A force that supports motion', 'A resistive force that opposes motion through a fluid', 'The buoyant force on floating objects', 'The force of gravity on falling objects'],
            correctAnswer: 1,
            rationale: 'Viscous drag (or fluid resistance) is a resistive force that opposes an object\'s motion through a fluid. It arises from internal friction between fluid layers moving at different speeds.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-17',
            stem: 'What is the symbol and SI unit for dynamic viscosity?',
            options: ['μ, Pa s', 'η, Pa s', 'η, N/m²'],
            correctAnswer: 2,
            rationale: 'Dynamic viscosity is represented by the Greek letter eta (η). Its SI unit is Pascal-seconds (Pa s), which equals N s/m².',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-18',
            stem: 'Which statement about terminal velocity is CORRECT?',
            options: ['Velocity is zero at terminal velocity', 'Acceleration is maximum at terminal velocity', 'Net force is zero at terminal velocity', 'Drag force is maximum at terminal velocity'],
            correctAnswer: 2,
            rationale: 'At terminal velocity, the resistive forces balance the weight: net force = zero. This means acceleration is zero (Newton\'s First Law), and velocity remains constant.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-19',
            stem: 'According to Stokes\' Law, how does drag force depend on velocity?',
            options: ['Drag is inversely proportional to velocity', 'Drag is directly proportional to velocity', 'Drag is proportional to velocity squared', 'Drag is independent of velocity'],
            correctAnswer: 1,
            rationale: 'Stokes\' Law states that for small spheres in laminar flow, drag force F = 6πηrv is directly proportional to velocity (not velocity squared). Quadratic drag (∝v²) applies to turbulent flow at higher speeds.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-20',
            stem: 'Which factors INCREASE viscous drag according to Stokes\' Law?',
            options: ['Smaller object radius', 'Lower fluid viscosity', 'Slower object velocity', 'Lower object density'],
            correctAnswer: 2,
            rationale: 'From Stokes\' Law F = 6πηrv, drag increases if: (1) viscosity η is higher, (2) object radius r is larger, or (3) object velocity v is greater. Larger radius and higher viscosity both increase drag.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-21',
            stem: 'Why is a parachute used when skydiving?',
            options: ['To increase gravitational force', 'To reduce weight', 'To increase upthrust', 'To reduce air resistance'],
            correctAnswer: 3,
            rationale: 'A parachute increases drag force (air resistance) by presenting a large cross-sectional area. From Stokes\' Law, larger area increases drag, which reduces terminal velocity, making the fall safer and slower.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-22',
            stem: 'What type of flow is assumed for Stokes\' Law to apply?',
            options: ['Turbulent flow', 'Laminar flow', 'Compressible flow', 'Steady flow'],
            correctAnswer: 1,
            rationale: 'Stokes\' Law F = 6πηrv assumes laminar flow — smooth, non-turbulent fluid motion around the sphere. For turbulent flow at higher Reynolds numbers, the law does not apply and drag becomes proportional to v².',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-23',
            stem: 'How does the velocity-time graph for a falling sphere behave?',
            options: ['Linear increase forever', 'Exponential decay', 'Increases then levels off', 'Decreases to zero'],
            correctAnswer: 2,
            rationale: 'Initially, velocity increases as drag force builds up. Eventually, drag + upthrust = weight, net force becomes zero, and velocity becomes constant (terminal velocity). The graph asymptotes to this terminal velocity.',
            topic: 'Viscous Drag'
        },
        {
            id: 'mcq-t6-24',
            stem: 'In the ball-bearing experiment, what is plotted on the axes to find viscosity?',
            options: ['v_t on y-axis, r on x-axis', 'v_t on y-axis, r² on x-axis', 'v_t on y-axis, 1/r on x-axis'],
            correctAnswer: 2,
            rationale: 'Terminal velocity v_t is plotted against r² on the x-axis. This gives a straight line through the origin. The gradient = 2(ρ_ball - ρ_fluid)g / (9η), from which viscosity η can be calculated.',
            topic: 'Viscous Drag'
        },

        // Core Practical 4: Viscosity
        {
            id: 'mcq-t6-25',
            stem: 'What is the independent variable in the viscosity experiment?',
            options: ['Time of fall', 'Diameter of ball bearing', 'Terminal velocity v_t', 'Type of fluid'],
            correctAnswer: 1,
            rationale: 'The independent variable is the radius of the ball bearing. By using different sized balls and measuring their terminal velocities, the relationship v_t ∝ r² can be established to find viscosity.',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'mcq-t6-26',
            stem: 'Why are rubber bands placed on the measuring cylinder?',
            options: ['To mark the volume', 'To ensure terminal velocity before timing', 'To secure the cylinder', 'To measure ball diameter'],
            correctAnswer: 1,
            rationale: 'Rubber bands at equal intervals (e.g., every 5 cm) mark timing sections below where terminal velocity has been reached. Timing between two equal sections that give the same time confirms terminal velocity has been achieved.',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'mcq-t6-27',
            stem: 'What is a systematic error in the viscosity experiment?',
            options: ['Temperature changes during the experiment', 'Variability in release technique', 'Ball not reaching terminal velocity before timing', 'Fluctuations in timer readings'],
            correctAnswer: 2,
            rationale: 'If the ball is still accelerating when timing begins, terminal velocity has not been reached, giving falsely high values. Using lower rubber bands for timing and comparing times between equal intervals ensures terminal velocity has been reached before measurement.',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'mcq-t6-28',
            stem: 'Why is temperature a critical control variable in viscosity experiments?',
            options: ['Temperature affects ball density', 'Temperature changes fluid volume', 'Viscosity changes significantly with temperature', 'Temperature affects air resistance'],
            correctAnswer: 2,
            rationale: 'Viscosity decreases significantly with increasing temperature. If the fluid warms up during the experiment, measured viscosity will be lower than the true value at constant temperature. Temperature must be controlled or measurements must be taken rapidly.',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'mcq-t6-29',
            stem: 'In the viscosity equation η = 2r²(ρ_ball - ρ_fluid)g / (9v_t), what does the gradient of the v_t vs r² graph equal?',
            options: ['(ρ_ball - ρ_fluid)g / (9η)', '2(ρ_ball - ρ_fluid)g / (9η)', '2η / (ρ_ball - ρ_fluid)g', '(ρ_ball - ρ_fluid)g / 9'],
            correctAnswer: 1,
            rationale: 'The graph of v_t against r² gives a straight line with gradient = 2(ρ_ball - ρ_fluid)g / (9η). Rearranging: 9η = 2(ρ_ball - ρ_fluid)g / gradient, so η = 2(ρ_ball - ρ_fluid)g / (9 × gradient).',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'mcq-t6-30',
            stem: 'Why are light gates preferred over manual timing for viscosity measurements?',
            options: ['They eliminate human reaction time', 'They increase ball terminal velocity', 'They measure ball diameter directly', 'They reduce wall effects on the ball'],
            correctAnswer: 0,
            rationale: 'Light gates start and stop a timer electronically when the ball passes through, eliminating human reaction time errors. They give more precise timing and allow reliable measurement of terminal velocity across different ball sizes.',
            topic: 'Core Practical 4: Investigating Viscosity'
        }
    ],

    fillblank: [
        {
            id: 'fb-t6-1',
            stem: 'Density is defined as __BLANK__ per unit __BLANK__.',
            template: 'Density is defined as __BLANK__ per unit __BLANK__.',
            blanks: [
                { answer: 'mass' },
                { answer: 'volume' }
            ],
            rationale: 'The definition of density is mass per unit volume. Equation: ρ = m/V.'
        },
        {
            id: 'fb-t6-2',
            stem: 'The symbol for density is the Greek letter __BLANK__.',
            template: 'The symbol for density is the Greek letter __BLANK__.',
            blanks: [
                { answer: 'rho' }
            ],
            rationale: 'Density is represented by the Greek letter rho (ρ).'
        },
        {
            id: 'fb-t6-3',
            stem: 'A 500 g object occupies 100 cm³. Its density is __BLANK__ g/cm³.',
            template: 'A 500 g object occupies 100 cm³. Its density is __BLANK__ g/cm³.',
            blanks: [
                { answer: '5' }
            ],
            rationale: 'Density = mass/volume = 500 g / 100 cm³ = 5 g/cm³.'
        },
        {
            id: 'fb-t6-4',
            stem: 'To convert cm³ to m³, multiply by __BLANK__ to the power of __BLANK__.',
            template: 'To convert cm³ to m³, multiply by __BLANK__ to the power of __BLANK__.',
            blanks: [
                { answer: '10^-6' },
                { answer: '3' }
            ],
            rationale: '1 cm³ = 10⁻⁶ m³ = (10⁻³)³ = 10⁻⁹ m³. To convert: multiply by 10⁻⁶ to the power of 3 (cube).'
        },
        {
            id: 'fb-t6-5',
            stem: 'Water has a density of approximately __BLANK__ kg/m³.',
            template: 'Water has a density of approximately __BLANK__ kg/m³.',
            blanks: [
                { answer: '1000' }
            ],
            rationale: 'Water at 4°C has a density of 1000 kg/m³ (or 1 g/cm³).'
        },
        {
            id: 'fb-t6-6',
            stem: 'Archimedes\' Principle states that upthrust equals the __BLANK__ of the fluid __BLANK__.',
            template: 'Archimedes\' Principle states that upthrust equals the __BLANK__ of the fluid __BLANK__.',
            blanks: [
                { answer: 'weight' },
                { answer: 'displaced' }
            ],
            rationale: 'Upthrust = weight of displaced fluid = ρ_fluid × V_submerged × g.'
        },
        {
            id: 'fb-t6-7',
            stem: 'An object floats when upthrust __BLANK__ its weight.',
            template: 'An object floats when upthrust __BLANK__ its weight.',
            blanks: [
                { answer: 'equals' }
            ],
            rationale: 'Floating condition: upthrust = weight (net force = 0). If upthrust > weight, object rises; if upthrust < weight, object sinks.'
        },
        {
            id: 'fb-t6-8',
            stem: 'Upthrust can be calculated by finding the __BLANK__ of the __BLANK__ object.',
            template: 'Upthrust can be calculated by finding the __BLANK__ of the __BLANK__ object.',
            blanks: [
                { answer: 'volume' },
                { answer: 'submerged' }
            ],
            rationale: 'Upthrust = ρ_fluid × V_submerged × g. The volume of the submerged portion equals the volume of displaced fluid.'
        },
        {
            id: 'fb-t6-9',
            stem: 'At sea level, atmospheric pressure is approximately __BLANK__ kPa.',
            template: 'At sea level, atmospheric pressure is approximately __BLANK__ kPa.',
            blanks: [
                { answer: '100' }
            ],
            rationale: 'Standard atmospheric pressure at sea level is approximately 100 kPa (actually 101.3 kPa).'
        },
        {
            id: 'fb-t6-10',
            stem: 'The SI unit of dynamic viscosity is __BLANK__.',
            template: 'The SI unit of dynamic viscosity is __BLANK__.',
            blanks: [
                { answer: 'Pa s' }
            ],
            rationale: 'Dynamic viscosity η has SI units of Pascal-seconds (Pa s), which equals N s/m².'
        },
        {
            id: 'fb-t6-11',
            stem: 'Viscous drag is a resistive force that opposes __BLANK__ through a __BLANK__.',
            template: 'Viscous drag is a resistive force that opposes __BLANK__ through a __BLANK__.',
            blanks: [
                { answer: 'motion' },
                { answer: 'fluid' }
            ],
            rationale: 'Viscous drag (fluid resistance) opposes motion through a fluid arising from internal friction between fluid layers.'
        },
        {
            id: 'fb-t6-12',
            stem: 'At terminal velocity, the three forces are: weight (down), upthrust (__BLANK__), and viscous drag (__BLANK__).',
            template: 'At terminal velocity, the three forces are: weight (down), upthrust (__BLANK__), and viscous drag (__BLANK__).',
            blanks: [
                { answer: 'up' },
                { answer: 'up' }
            ],
            rationale: 'At terminal velocity, forces balance: weight downward, upthrust upward, and drag upward. Net force = 0.'
        },
        {
            id: 'fb-t6-13',
            stem: 'Stokes\' Law for laminar flow is F = __BLANK__πηrv.',
            template: 'Stokes\' Law for laminar flow is F = __BLANK__πηrv.',
            blanks: [
                { answer: '6' }
            ],
            rationale: 'Stokes\' Law: F = 6πηrv, where F is drag force, η is viscosity, r is sphere radius, and v is velocity.'
        },
        {
            id: 'fb-t6-14',
            stem: 'In the viscosity experiment, terminal velocity is plotted against __BLANK__ on the x-axis.',
            template: 'In the viscosity experiment, terminal velocity is plotted against __BLANK__ on the x-axis.',
            blanks: [
                { answer: 'r²' }
            ],
            rationale: 'v_t is plotted against r² (radius squared) to give a straight line through origin, from which viscosity can be determined.'
        },
        {
            id: 'fb-t6-15',
            stem: 'The gradient of the v_t vs r² graph equals 2(__BLANK__)g divided by 9η.',
            template: 'The gradient of the v_t vs r² graph equals 2(__BLANK__)g divided by 9η.',
            blanks: [
                { answer: 'ρ_ball - ρ_fluid' }
            ],
            rationale: 'Gradient = 2(ρ_ball - ρ_fluid)g / (9η), so η = 2(ρ_ball - ρ_fluid)g / (9 × gradient).'
        }
    ],

    dragdrop: [
        {
            id: 'dd-t6-1',
            stem: 'Categorise these quantities as scalar or vector.',
            categories: ['Scalar', 'Vector'],
            items: [
                { text: 'Mass', category: 'Scalar' },
                { text: 'Volume', category: 'Scalar' },
                { text: 'Density', category: 'Scalar' },
                { text: 'Weight', category: 'Vector' },
                { text: 'Velocity', category: 'Vector' },
                { text: 'Acceleration', category: 'Vector' },
                { text: 'Upthrust', category: 'Vector' },
                { text: 'Drag force', category: 'Vector' }
            ]
        },
        {
            id: 'dd-t6-2',
            stem: 'Sort these materials by relative density.',
            categories: ['High Density (> water)', 'Medium Density (~water)', 'Low Density (< water)'],
            items: [
                { text: 'Lead (7870 kg/m³)', category: 'High Density (> water)' },
                { text: 'Steel (7870 kg/m³)', category: 'High Density (> water)' },
                { text: 'Water (1000 kg/m³)', category: 'Medium Density (~water)' },
                { text: 'Ice (917 kg/m³)', category: 'Low Density (< water)' },
                { text: 'Polystyrene foam (30 kg/m³)', category: 'Low Density (< water)' },
                { text: 'Air (1.2 kg/m³)', category: 'Low Density (< water)' },
                { text: 'Aluminium (2700 kg/m³)', category: 'High Density (> water)' }
            ]
        },
        {
            id: 'dd-t6-3',
            stem: 'Classify these statements about floating and sinking.',
            categories: ['True', 'False'],
            items: [
                { text: 'Float if ρ_object < ρ_fluid', category: 'True' },
                { text: 'Sink if ρ_object > ρ_fluid', category: 'True' },
                { text: 'Float if ρ_object = ρ_fluid', category: 'True' },
                { text: 'Shape determines floating', category: 'False' },
                { text: 'Mass alone determines floating', category: 'False' },
                { text: 'Denser objects always float', category: 'False' }
            ]
        },
        {
            id: 'dd-t6-4',
            stem: 'Sort these forces on a falling sphere.',
            categories: ['Acts Downward', 'Acts Upward', 'Variable Direction'],
            items: [
                { text: 'Weight (mg)', category: 'Acts Downward' },
                { text: 'Upthrust (Archimedes)', category: 'Acts Upward' },
                { text: 'Viscous drag (Stokes)', category: 'Acts Upward' },
                { text: 'Net force at start', category: 'Variable Direction' },
                { text: 'Net force at terminal velocity', category: 'Variable Direction (zero)' },
                { text: 'Resultant force during acceleration', category: 'Variable Direction (down)' },
                { text: 'Resultant force at terminal velocity', category: 'Variable Direction (zero)' }
            ]
        },
        {
            id: 'dd-t6-5',
            stem: 'Categorise these viscosity experiment variables.',
            categories: ['Independent Variable', 'Dependent Variable', 'Control Variable'],
            items: [
                { text: 'Radius of ball bearing (r)', category: 'Independent Variable' },
                { text: 'Terminal velocity (v_t)', category: 'Dependent Variable' },
                { text: 'Fluid type and temperature', category: 'Control Variable' },
                { text: 'Volume of fluid in cylinder', category: 'Control Variable' },
                { text: 'Height of rubber bands', category: 'Control Variable' },
                { text: 'Mass of ball bearing', category: 'Control Variable' }
            ]
        },
        {
            id: 'dd-t6-6',
            stem: 'Sort these by Stokes\' Law applicability.',
            categories: ['Stokes\' Law Applies', 'Stokes\' Law Does NOT Apply'],
            items: [
                { text: 'Small steel ball in oil (laminar)', category: 'Stokes\' Law Applies' },
                { text: 'Skydiver in air (turbulent)', category: 'Stokes\' Law Does NOT Apply' },
                { text: 'Large ship in water (turbulent)', category: 'Stokes\' Law Does NOT Apply' },
                { text: 'Car at high speed (turbulent)', category: 'Stokes\' Law Does NOT Apply' },
                { text: 'Tiny ball bearing in glycerol (laminar)', category: 'Stokes\' Law Applies' }
            ]
        },
        {
            id: 'dd-t6-7',
            stem: 'Categorise these factors affecting viscous drag.',
            categories: ['Increases Drag', 'Decreases Drag', 'Does Not Affect Drag'],
            items: [
                { text: 'Higher fluid viscosity (η)', category: 'Increases Drag' },
                { text: 'Larger sphere radius (r)', category: 'Increases Drag' },
                { text: 'Higher object velocity (v)', category: 'Increases Drag' },
                { text: 'Smaller sphere density', category: 'Does Not Affect Drag' },
                { text: 'Higher fluid density (ρ_fluid)', category: 'Does Not Affect Drag' },
                { text: 'Streamlined shape', category: 'Decreases Drag' }
            ]
        },
        {
            id: 'dd-t6-8',
            stem: 'Sort these pressure values from highest to lowest.',
            categories: ['High Pressure (> 200 kPa)', 'Medium Pressure (100-200 kPa)', 'Low Pressure (< 100 kPa)'],
            items: [
                { text: 'At 20 m depth in water (294 kPa)', category: 'High Pressure (> 200 kPa)' },
                { text: 'At 10 m depth in water (198 kPa)', category: 'Medium Pressure (100-200 kPa)' },
                { text: 'Sea level atmospheric pressure (100 kPa)', category: 'Low Pressure (< 100 kPa)' },
                { text: 'At 5 m depth in water (149 kPa)', category: 'Medium Pressure (100-200 kPa)' },
                { text: 'At 2 m depth in water (120 kPa)', category: 'Low Pressure (< 100 kPa)' }
            ]
        },
        {
            id: 'dd-t6-9',
            stem: 'Classify these experimental techniques.',
            categories: ['Reduces Systematic Error', 'Increases Accuracy', 'No Effect'],
            items: [
                { text: 'Use lower rubber bands for timing', category: 'Reduces Systematic Error' },
                { text: 'Light gates for electronic timing', category: 'Increases Accuracy' },
                { text: 'Repeat measurements and take mean', category: 'Reduces Random Error' },
                { text: 'Widen cylinder to reduce wall effects', category: 'Reduces Systematic Error' },
                { text: 'Drop ball centrally', category: 'Reduces Systematic Error' },
                { text: 'Control temperature precisely', category: 'Increases Accuracy' }
            ]
        },
        {
            id: 'dd-t6-10',
            stem: 'Sort these objects by whether they float or sink in water.',
            categories: ['Floats in Water', 'Sinks in Water'],
            items: [
                { text: 'Wood block (density ~700 kg/m³)', category: 'Floats in Water' },
                { text: 'Ice cube (917 kg/m³)', category: 'Floats in Water' },
                { text: 'Plastic bottle (density ~950 kg/m³)', category: 'Sinks in Water' },
                { text: 'Steel nail (7870 kg/m³)', category: 'Sinks in Water' },
                { text: 'Aluminium can (2700 kg/m³)', category: 'Sinks in Water' },
                { text: 'Steel ship (floats by hull shape)', category: 'Floats in Water' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-t6-1',
            stem: 'Put the steps to calculate density in the correct order:',
            steps: [
                'Measure the mass of the object',
                'Measure or calculate the volume of the object',
                'Divide mass by volume',
                'Express density with appropriate units'
            ]
        },
        {
            id: 'seq-t6-2',
            stem: 'Arrange the steps for applying Archimedes\' Principle to find upthrust:',
            steps: [
                'Find the volume of the submerged object',
                'Identify the density of the displaced fluid',
                'Calculate weight of displaced fluid: W = ρ_fluid × V_submerged × g',
                'Upthrust equals weight of displaced fluid'
            ]
        },
        {
            id: 'seq-t6-3',
            stem: 'Order the steps to determine if an object will float:',
            steps: [
                'Calculate density of the object',
                'Compare object density to fluid density',
                'If ρ_object < ρ_fluid: object floats',
                'If ρ_object > ρ_fluid: object sinks',
                'If ρ_object = ρ_fluid: neutral buoyancy at any depth'
            ]
        },
        {
            id: 'seq-t6-4',
            stem: 'Put the stages of motion for a falling sphere in order:',
            steps: [
                'Object released: weight > upthrust, net force downward, accelerates',
                'Velocity increases: drag force increases, net force decreases',
                'Approaching terminal: drag + upthrust approaches weight',
                'Terminal velocity reached: drag + upthrust = weight, net force zero',
                'Constant velocity: acceleration zero, velocity remains constant'
            ]
        },
        {
            id: 'seq-t6-5',
            stem: 'Arrange the ball-bearing viscosity experiment procedure:',
            steps: [
                'Set up cylinder with viscous fluid and rubber band markers',
                'Measure diameter of ball bearing using vernier calipers',
                'Drop ball centrally into fluid and time fall between bands',
                'Repeat for different ball sizes and calculate terminal velocities',
                'Plot v_t against r² and determine gradient',
                'Calculate viscosity from gradient and known densities'
            ]
        },
        {
            id: 'seq-t6-6',
            stem: 'Put the steps to calculate pressure at depth in order:',
            steps: [
                'Identify atmospheric pressure at surface (P₀)',
                'Calculate pressure increase due to fluid column: ρgh',
                'Add to surface pressure: P = P₀ + ρgh',
                'Convert to desired units (Pa, kPa, or atm)'
            ]
        },
        {
            id: 'seq-t6-7',
            stem: 'Order the factors that affect viscous drag from smallest to largest effect:',
            steps: [
                'Fluid viscosity η (directly proportional to drag)',
                'Sphere radius r (directly proportional to drag)',
                'Object velocity v (directly proportional to drag)',
                'Fluid density (no direct effect on Stokes\' drag)',
                'Sphere density (no direct effect on Stokes\' drag)',
                'Cross-sectional area (affects turbulent flow)'
            ]
        },
        {
            id: 'seq-t6-8',
            stem: 'Arrange the steps to derive viscosity from the ball-bearing experiment:',
            steps: [
                'Measure terminal velocity v_t for different ball radii r',
                'Plot graph of v_t against r² (should be straight line through origin)',
                'Calculate gradient of the line',
                'Use equation: η = 2(ρ_ball - ρ_fluid)g / (9 × gradient)',
                'Convert η to appropriate units (Pa s)'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-t6-1',
            stem: 'Define density and give its equation and units. [2 marks]',
            marks: 2,
            keywords: ['mass per unit volume', 'rho', 'ρ = m/V', 'kg/m³', 'g/cm³'],
            modelAnswer: 'Density ρ is defined as mass per unit volume. The equation is ρ = m/V, where ρ is density, m is mass in kg, and V is volume in m³. Common units include kg/m³ and g/cm³.'
        },
        {
            id: 'kw-t6-2',
            stem: 'Explain Archimedes\' Principle. [3 marks]',
            marks: 3,
            keywords: ['Archimedes', 'upthrust', 'weight of displaced fluid', 'ρ_fluid × V_submerged × g', 'float', 'sink'],
            modelAnswer: 'Archimedes\' Principle states that an object submerged in a fluid experiences an upward buoyant force (upthrust) equal to the weight of the fluid displaced. Upthrust = ρ_fluid × V_submerged × g. An object floats when upthrust equals its weight, sinks when upthrust is less than weight, and is neutrally buoyant at any depth if equal.'
        },
        {
            id: 'kw-t6-3',
            stem: 'A 200 cm³ paving slab has mass 73 kg. Calculate its density in kg/m³. [3 marks]',
            marks: 3,
            keywords: ['density', 'mass/volume', '200 cm³ to m³', '10^-6', '365 kg/m³'],
            modelAnswer: 'Volume = 200 cm³ = 200 × 10⁻⁶ m³ = 2 × 10⁻⁴ m³ = 2 × 10⁻⁴ m³. Density ρ = m/V = 73 kg / (2 × 10⁻⁴ m³) = 36.5 × 10³ kg/m³ = 36500 kg/m³ ≈ 36.5 kg/m³.'
        },
        {
            id: 'kw-t6-4',
            stem: 'Explain why a steel ship floats despite steel being denser than water. [3 marks]',
            marks: 3,
            keywords: ['hull shape', 'displace enormous volume', 'upthrust equals weight', 'steel denser', '7870 kg/m³'],
            modelAnswer: 'Steel has density ~7870 kg/m³, which is denser than water (1000 kg/m³), so a solid block of steel would sink. However, ships have hollow hulls shaped to displace an enormous volume of water. The upthrust from this displaced water equals the ship\'s weight, allowing it to float despite the material density.'
        },
        {
            id: 'kw-t6-5',
            stem: 'Calculate the pressure at 15 m depth in seawater (ρ = 1025 kg/m³, g = 9.81 m/s²). [3 marks]',
            marks: 3,
            keywords: ['pressure', 'P = P₀ + ρgh', '100 kPa', '1000 × 9.81 × 15', '247 kPa'],
            modelAnswer: 'P = P₀ + ρgh = 100,000 + (1025 × 9.81 × 15) = 100,000 + 150,879 = 250,879 Pa ≈ 251 kPa. This is why submarines must withstand extreme pressures at depth.'
        },
        {
            id: 'kw-t6-6',
            stem: 'State Stokes\' Law and explain what each variable represents. [3 marks]',
            marks: 3,
            keywords: ['F = 6πηrv', 'drag force', 'viscosity', 'radius', 'velocity', 'laminar flow'],
            modelAnswer: 'Stokes\' Law: F = 6πηrv, where F is the viscous drag force (N), η is dynamic viscosity (Pa s), r is the sphere radius (m), and v is the velocity (m/s). This applies to small spheres in laminar flow conditions.'
        },
        {
            id: 'kw-t6-7',
            stem: 'Explain terminal velocity and the condition for it to occur. [3 marks]',
            marks: 3,
            keywords: ['terminal velocity', 'net force zero', 'drag plus upthrust equals weight', 'constant velocity', 'W = U + F_drag'],
            modelAnswer: 'Terminal velocity is reached when the viscous drag force plus upthrust equals the object\'s weight, so net force is zero. At this point, acceleration is zero and the object falls at constant velocity. The velocity-time graph asymptotes to this terminal velocity.'
        },
        {
            id: 'kw-t6-8',
            stem: 'A steel ball (ρ = 7870 kg/m³, r = 1 mm) falls through oil (ρ_fluid = 900 kg/m³). Calculate its terminal velocity using Stokes\' Law. [4 marks]',
            marks: 4,
            keywords: ['v_t = 2r²(ρ_ball - ρ_fluid)g / (9η)', '0.001 m', '2(7870 - 900)', '2 × 9.81 / 9η'],
            modelAnswer: 'Using Stokes\' Law for terminal velocity: v_t = 2r²(ρ_ball - ρ_fluid)g / (9η). Substituting: v_t = 2 × (0.001 m)² × (7870 - 900) × 9.81 / (9η) = (2 × 10⁻⁶ × 6970 × 9.81) / (9η) = (0.137 × 10⁻⁴ m²) / η = 1.37 × 10⁻⁴ m² / η.'
        },
        {
            id: 'kw-t6-9',
            stem: 'Describe the ball-bearing method for measuring viscosity, including apparatus and how terminal velocity is confirmed. [4 marks]',
            marks: 4,
            keywords: ['cylinder', 'rubber bands', 'vernier calipers', 'terminal velocity', 'equal time intervals', 'light gates'],
            modelAnswer: 'Apparatus: tall measuring cylinder filled with viscous fluid, rubber bands at equal intervals for timing marks. Ball bearing diameter measured with vernier calipers. Ball dropped centrally and timed between bands. Terminal velocity confirmed by comparing times between equal intervals (if same, terminal velocity reached). Use light gates for electronic timing to reduce human reaction time error.'
        },
        {
            id: 'kw-t6-10',
            stem: 'Identify two sources of error in the viscosity experiment and suggest how each can be reduced. [4 marks]',
            marks: 4,
            keywords: ['systematic error', 'ball not reaching terminal velocity', 'wall effects', 'temperature change', 'random error', 'reaction time', 'light gates'],
            modelAnswer: '(1) Systematic: ball not reaching terminal velocity before timing begins — use lower rubber bands and compare equal intervals. (2) Wall effects: widen cylinder or drop ball centrally. (3) Temperature change: conduct experiment at constant temperature or take measurements rapidly. (4) Random error: human reaction time with manual timing — use light gates for electronic timing.'
        },
        {
            id: 'kw-t6-11',
            stem: 'Explain how the v_t vs r² graph is used to find viscosity and what the gradient represents. [3 marks]',
            marks: 3,
            keywords: ['v_t vs r²', 'straight line through origin', 'gradient = 2(ρ_ball - ρ_fluid)g / (9η)', 'η = 2(ρ_ball - ρ_fluid)g / (9 × gradient)'],
            modelAnswer: 'Terminal velocity v_t is plotted against r² (radius squared) on the x-axis, giving a straight line through the origin. The gradient = 2(ρ_ball - ρ_fluid)g / (9η). Rearranging: η = 2(ρ_ball - ρ_fluid)g / (9 × gradient), allowing viscosity to be calculated from the graph slope.'
        },
        {
            id: 'kw-t6-12',
            stem: 'Explain why viscosity decreases with increasing temperature. [2 marks]',
            marks: 2,
            keywords: ['temperature', 'intermolecular forces', 'kinetic energy', 'less resistance to flow', 'decreases'],
            modelAnswer: 'Viscosity decreases with increasing temperature because the molecules in a fluid have more kinetic energy and move more freely at higher temperatures. This reduces the internal friction between fluid layers, offering less resistance to flow.'
        }
    ],

    flashcards: [
        // Density
        {
            id: 'fc-t6-1',
            front: 'Define density and give its equation.',
            back: 'Density ρ is mass per unit volume. Equation: ρ = m/V, where ρ is density (kg/m³ or g/cm³), m is mass (kg or g), and V is volume (m³ or cm³).',
            topic: 'Density'
        },
        {
            id: 'fc-t6-2',
            front: 'What are the SI units of density?',
            back: 'Common SI units include kg/m³ and g/cm³. 1 kg/m³ = 0.001 g/cm³. Water has density of approximately 1000 kg/m³ (or 1 g/cm³).',
            topic: 'Density'
        },
        {
            id: 'fc-t6-3',
            front: 'State Archimedes\' Principle.',
            back: 'Archimedes\' Principle: An object submerged in a fluid experiences an upward buoyant force (upthrust) equal to the weight of the fluid displaced. Upthrust = ρ_fluid × V_submerged × g. Used to explain why ships float and how submarines work.',
            topic: 'Upthrust'
        },
        {
            id: 'fc-t6-4',
            front: 'When does an object float in a fluid?',
            back: 'An object floats if its density is less than the fluid density (ρ_object < ρ_fluid). It sinks if ρ_object > ρ_fluid. If equal, the object can be in neutral equilibrium at any depth. Floating condition: upthrust = weight.',
            topic: 'Upthrust'
        },
        {
            id: 'fc-t6-5',
            front: 'Why does a steel ship float?',
            back: 'Steel is denser than water, so a solid block would sink. Ships float because their hollow hulls displace an enormous volume of water. The upthrust from this displaced water equals the ship\'s weight, allowing it to float despite the material density.',
            topic: 'Upthrust'
        },
        {
            id: 'fc-t6-6',
            front: 'What are approximate densities of water, steel, ice, and air?',
            back: 'Water: 1000 kg/m³ (or 1 g/cm³). Steel: ~7870 kg/m³ (or 7.87 g/cm³). Ice: 917 kg/m³ (or 0.917 g/cm³). Air: ~1.2 kg/m³ (or 0.0012 g/cm³).',
            topic: 'Density'
        },
        {
            id: 'fc-t6-7',
            front: 'Calculate pressure at depth using P = P₀ + ρgh.',
            back: 'Atmospheric pressure at sea level P₀ ≈ 100 kPa. Pressure at depth h: P = P₀ + ρ_fluid × g × h. Example: 20 m in water: 100,000 + 1000 × 9.81 × 20 = 296,000 Pa ≈ 296 kPa. This is why submarines experience extreme crushing pressures.',
            topic: 'Upthrust'
        },
        {
            id: 'fc-t6-8',
            front: 'What fraction of an iceberg is above water?',
            back: 'Since ice (917 kg/m³) is less dense than seawater (1025 kg/m³), about 90% of an iceberg floats above water. Only ~10% is submerged, with upthrust supporting the weight of the entire iceberg.',
            topic: 'Upthrust'
        },

        // Viscous Drag
        {
            id: 'fc-t6-9',
            front: 'What is viscous drag?',
            back: 'Viscous drag (or fluid resistance) is a resistive force that opposes an object\'s motion through a fluid. It arises from internal friction between fluid layers moving at different speeds. Represented by the Greek letter eta (η), unit: Pa s.',
            topic: 'Viscous Drag'
        },
        {
            id: 'fc-t6-10',
            front: 'State Stokes\' Law for small spheres in laminar flow.',
            back: 'Stokes\' Law: F = 6πηrv, where F is viscous drag force, η is dynamic viscosity (Pa s), r is sphere radius (m), and v is velocity (m/s). Applies to small spheres in laminar flow. Drag is directly proportional to velocity, radius, and viscosity.',
            topic: 'Viscous Drag'
        },
        {
            id: 'fc-t6-11',
            front: 'What is terminal velocity?',
            back: 'Terminal velocity is the constant speed reached when the resistive forces (drag + upthrust) balance the weight. At terminal velocity, net force = 0, acceleration = 0, and the object falls at constant velocity. The velocity-time graph asymptotes to this terminal value.',
            topic: 'Viscous Drag'
        },
        {
            id: 'fc-t6-12',
            front: 'What factors affect viscous drag according to Stokes\' Law?',
            back: 'From F = 6πηrv, drag increases with: (1) higher viscosity η, (2) larger sphere radius r, (3) higher object velocity v. Fluid density affects upthrust, not the viscous drag from Stokes\' Law.',
            topic: 'Viscous Drag'
        },
        {
            id: 'fc-t6-13',
            front: 'When does Stokes\' Law NOT apply?',
            back: 'Stokes\' Law does NOT apply for: (1) large objects (high Reynolds number), (2) high speeds (turbulent flow), (3) rough or non-spherical objects, or (4) fluids that are not in laminar flow. In these cases, drag is proportional to v² (quadratic), not v.',
            topic: 'Viscous Drag'
        },
        {
            id: 'fc-t6-14',
            front: 'How is viscosity measured using the ball-bearing method?',
            back: 'Method: Drop ball bearings of different radii through viscous fluid, time fall between rubber bands to measure terminal velocity. Plot v_t vs r²: gradient = 2(ρ_ball - ρ_fluid)g / (9η), then η = 2(ρ_ball - ρ_fluid)g / (9 × gradient). Units: Pa s. Control: fluid temperature, ensure terminal velocity reached.',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'fc-t6-15',
            front: 'What are systematic and random errors in viscosity experiments?',
            back: 'Systematic errors: ball not reaching terminal velocity before timing (use lower rubber bands), wall effects (ball hits cylinder wall — widen cylinder). Random errors: reaction time with manual stopwatch (use light gates), imperfect spheres (check with calipers), temperature changes (control or rapid measurement).',
            topic: 'Core Practical 4: Investigating Viscosity'
        },
        {
            id: 'fc-t6-16',
            front: 'Why do cars use streamlined shapes?',
            back: 'At everyday speeds, flow is turbulent and drag ∝ v² (quadratic), not ∝ v (Stokes). Streamlined shapes reduce the cross-sectional area facing the fluid, significantly reducing drag and improving fuel efficiency at high speeds.',
            topic: 'Viscous Drag'
        }
    ]
};
