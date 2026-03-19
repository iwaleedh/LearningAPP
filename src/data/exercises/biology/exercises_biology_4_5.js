// AL Biology Topic 5: On the Wild Side (Unit 4, WBI14)
// Combined exercise set with all 6 exercise types
// ~100 questions total covering photosynthesis, ecosystems, climate change, evolution, and conservation

export const exercises_biology_4_5 = {
    mcq: [
        // Topic 0: Photosynthesis Overview
        {
            id: 'mcq-t5-1',
            stem: 'Which of the following correctly represents the overall balanced equation for photosynthesis?',
            options: [
                '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂',
                '6CO₂ + 12H₂O + light energy → C₆H₁₂O₆ + 6O₂ + 6H₂O',
                'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy',
                '6O₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6CO₂'
            ],
            correctAnswer: 0,
            rationale: 'The correct equation shows carbon dioxide and water, with light energy, producing glucose and oxygen. Option B shows an outdated form of the equation with water on both sides. Option C is the equation for respiration (reverse of photosynthesis). Option D has incorrect reactants and products.',
            topic: 'Photosynthesis Overview',
        },
        {
            id: 'mcq-t5-2',
            stem: 'Where in the chloroplast do the light-independent reactions (Calvin cycle) take place?',
            options: [
                'Thylakoid membranes',
                'Stroma',
                'Grana',
                'Outer envelope membrane'
            ],
            correctAnswer: 1,
            rationale: 'The stroma is the fluid-filled space surrounding the thylakoids where enzymes including RuBisCO are located, making it the site of the Calvin cycle. Light-dependent reactions occur in the thylakoid membranes (grana are stacks of thylakoids). The outer envelope controls entry and exit of substances.',
            topic: 'Photosynthesis Overview',
        },

        // Topic 1: Light-Dependent Reactions
        {
            id: 'mcq-t5-3',
            stem: 'What is the name of the process by which light energy splits water molecules in the light-dependent reactions?',
            options: [
                'Photoionisation',
                'Photophosphorylation',
                'Photolysis',
                'Photorespiration'
            ],
            correctAnswer: 2,
            rationale: 'Photolysis (light-splitting) is the process where water is split into protons, electrons, and oxygen. Photoionisation refers to light exciting electrons in chlorophyll. Photophosphorylation is ATP synthesis using light energy. Photorespiration is when RuBisCO binds oxygen instead of CO₂.',
            topic: 'Light-Dependent Reactions',
        },
        {
            id: 'mcq-t5-4',
            stem: 'During the light-dependent reactions, what is the role of the proton gradient generated across the thylakoid membrane?',
            options: [
                'To split water molecules during photolysis',
                'To drive ATP synthesis via ATP synthase as protons diffuse back into the stroma',
                'To excite electrons in Photosystem II',
                'To reduce NADP to NADPH directly'
            ],
            correctAnswer: 1,
            rationale: 'The proton gradient (higher concentration in thylakoid space than stroma) drives protons through ATP synthase, coupling the energy released to ATP formation (chemiosmosis). Photolysis is driven by light energy, not protons. Electron excitation is from light absorption. NADPH reduction uses electrons and protons, not the gradient itself.',
            topic: 'Light-Dependent Reactions',
        },

        // Topic 2: Calvin Cycle
        {
            id: 'mcq-t5-5',
            stem: 'In the Calvin cycle, what is the first stable product formed after CO₂ combines with RuBP?',
            options: [
                'Glyceraldehyde 3-phosphate (GALP)',
                'Ribulose bisphosphate (RuBP)',
                'Glycerate 3-phosphate (GP)',
                'A 6-carbon sugar'
            ],
            correctAnswer: 2,
            rationale: 'When CO₂ combines with 5-carbon RuBP, an unstable 6-carbon intermediate forms that immediately breaks down into two molecules of 3-carbon GP (glycerate 3-phosphate). GALP is produced later when GP is reduced. The 6-carbon intermediate is unstable and not a stable product.',
            topic: 'The Calvin Cycle',
        },
        {
            id: 'mcq-t5-6',
            stem: 'How many turns of the Calvin cycle are required to produce one molecule of glucose?',
            options: [
                '1 turn',
                '3 turns',
                '6 turns',
                '12 turns'
            ],
            correctAnswer: 2,
            rationale: 'Each turn of the Calvin cycle fixes one CO₂ molecule. Glucose has 6 carbons, so 6 turns (fixing 6 CO₂) are needed to produce enough GALP (2 molecules) to make one glucose molecule. The net gain is one carbon per turn, so 6 turns provide the 6 carbons needed.',
            topic: 'The Calvin Cycle',
        },

        // Topic 3: Limiting Factors
        {
            id: 'mcq-t5-7',
            stem: 'According to the law of limiting factors, what happens if light intensity is the limiting factor and CO₂ concentration is increased?',
            options: [
                'The rate of photosynthesis increases significantly',
                'The rate of photosynthesis decreases',
                'The rate of photosynthesis remains unchanged',
                'The rate of respiration increases to compensate'
            ],
            correctAnswer: 2,
            rationale: 'The law of limiting factors states that the rate is limited by the factor nearest to its minimum value. If light is limiting, increasing CO₂ will have no effect until light is no longer limiting. The rate remains unchanged because light still restricts the light-dependent reactions.',
            topic: 'Limiting Factors',
        },
        {
            id: 'mcq-t5-8',
            stem: 'Why does temperature have a greater effect on the Calvin cycle than on the light-dependent reactions?',
            options: [
                'The light-dependent reactions are not affected by temperature at all',
                'The Calvin cycle is enzyme-controlled (e.g., RuBisCO), whereas the light-dependent reactions are driven by light energy',
                'The Calvin cycle occurs in the thylakoid where temperatures are higher',
                'The light-dependent reactions use more ATP than the Calvin cycle'
            ],
            correctAnswer: 1,
            rationale: 'The Calvin cycle relies on enzyme-catalyzed reactions (like RuBisCO), which are temperature-sensitive. The light-dependent reactions are primarily driven by light energy exciting electrons, not enzyme kinetics. Temperature does affect the LDR slightly but much less than the enzyme-heavy Calvin cycle.',
            topic: 'Limiting Factors',
        },

        // Topic 4: Photosynthetic Pigments
        {
            id: 'mcq-t5-9',
            stem: 'What is the relationship between an absorption spectrum and an action spectrum?',
            options: [
                'They are identical graphs showing the same data',
                'The absorption spectrum shows wavelengths absorbed; the action spectrum shows the rate of photosynthesis at each wavelength, and they correlate closely',
                'The action spectrum shows wavelengths absorbed; the absorption spectrum shows photosynthesis rate',
                'There is no relationship between the two spectra'
            ],
            correctAnswer: 1,
            rationale: 'The absorption spectrum shows which wavelengths pigments absorb (peaks in blue and red). The action spectrum shows the actual rate of photosynthesis at different wavelengths. They correlate because wavelengths absorbed most strongly produce the highest photosynthesis rates, but they measure different things.',
            topic: 'Photosynthetic Pigments',
        },
        {
            id: 'mcq-t5-10',
            stem: 'In chromatography of leaf pigments, what does a higher Rf value indicate about a pigment?',
            options: [
                'The pigment has a higher molecular weight',
                'The pigment is more soluble in the solvent and travels further up the plate',
                'The pigment is more attracted to the stationary phase',
                'The pigment absorbs more light'
            ],
            correctAnswer: 1,
            rationale: 'Rf = distance moved by pigment / distance moved by solvent front. A higher Rf means the pigment traveled further, indicating greater solubility in the mobile phase (solvent) and/or lower affinity for the stationary phase. It is not directly related to molecular weight or light absorption.',
            topic: 'Photosynthetic Pigments',
        },

        // Topic 5: GPP and NPP
        {
            id: 'mcq-t5-11',
            stem: 'Which of the following equations correctly relates Net Primary Productivity (NPP), Gross Primary Productivity (GPP), and Respiration (R)?',
            options: [
                'NPP = GPP + R',
                'GPP = NPP - R',
                'NPP = GPP - R',
                'R = GPP + NPP'
            ],
            correctAnswer: 2,
            rationale: 'NPP = GPP - R. GPP is the total chemical energy produced by photosynthesis. Plants use some of this energy for respiration (R). The remaining energy available for growth and the next trophic level is NPP (GPP minus respiratory losses).',
            topic: 'GPP and NPP',
        },

        // Topic 6: Core Practical 10 - Photosynthesis Rate
        {
            id: 'mcq-t5-12',
            stem: 'In the photosynthesis practical using aquatic plants, why is sodium hydrogencarbonate added to the water?',
            options: [
                'To increase the pH of the water',
                'To provide an unlimited supply of carbon dioxide for photosynthesis',
                'To provide minerals for plant growth',
                'To prevent bacterial growth'
            ],
            correctAnswer: 1,
            rationale: 'Sodium hydrogencarbonate dissolves to release CO₂, ensuring carbon dioxide is not a limiting factor during the experiment. This allows the investigator to study the effect of another variable (like light intensity) without CO₂ availability affecting the results.',
            topic: 'Investigating Photosynthesis Rate',
        },
        {
            id: 'mcq-t5-13',
            stem: 'Why is a tank of water placed between the lamp and the aquatic plant in the photosynthesis practical?',
            options: [
                'To provide additional carbon dioxide',
                'To filter out harmful UV radiation',
                'To absorb heat from the lamp and prevent temperature from becoming a confounding variable',
                'To increase the humidity around the plant'
            ],
            correctAnswer: 2,
            rationale: 'The water tank acts as a heat shield, absorbing infrared radiation from the lamp. This prevents the lamp from heating the plant water, ensuring temperature remains constant. Without this, temperature would become a confounding variable when investigating light intensity.',
            topic: 'Investigating Photosynthesis Rate',
        },

        // Topic 7: Chromatography Method
        {
            id: 'mcq-t5-14',
            stem: 'In thin-layer chromatography of photosynthetic pigments, why must the origin line be drawn in pencil rather than pen?',
            options: [
                'Pencil marks are easier to see than ink',
                'Ink would dissolve in the solvent and interfere with the separation of pigments',
                'Pencil conducts electricity better than ink',
                'Ink would react with the pigments chemically'
            ],
            correctAnswer: 1,
            rationale: 'Pen ink contains dyes that would dissolve in the solvent and travel up the plate, mixing with and obscuring the plant pigments. Pencil graphite does not dissolve in organic solvents, so the origin line remains visible without interfering with the separation.',
            topic: 'Pigment Chromatography Method',
        },

        // Topic 8: ATP Structure and Function
        {
            id: 'mcq-t5-15',
            stem: 'Which of the following best explains why ATP is a better immediate energy source than glucose?',
            options: [
                'ATP contains more total energy than glucose',
                'ATP releases energy in small, manageable amounts in a single-step hydrolysis reaction',
                'ATP does not require enzymes for its breakdown',
                'ATP can be stored in large quantities in cells'
            ],
            correctAnswer: 1,
            rationale: 'Glucose contains too much energy; releasing it all at once would waste energy as heat and damage cells. ATP releases a small, manageable amount of energy instantly through a single hydrolysis reaction. ATP cannot be stored in large quantities (it is rapidly recycled), and it does require ATP hydrolase enzyme.',
            topic: 'Structure of ATP',
        },

        // Topic 9: Cyclic vs Non-Cyclic Photophosphorylation
        {
            id: 'mcq-t5-16',
            stem: 'What are the products of non-cyclic photophosphorylation?',
            options: [
                'ATP only',
                'ATP and reduced NADP only',
                'ATP, reduced NADP, and oxygen',
                'ATP and oxygen only'
            ],
            correctAnswer: 2,
            rationale: 'Non-cyclic photophosphorylation involves both PSI and PSII. Electrons from photolysis pass through both photosystems, producing ATP (via chemiosmosis), reduced NADP (from electrons and protons), and oxygen (from photolysis of water). Cyclic produces only ATP.',
            topic: 'Cyclic and Non-Cyclic Photophosphorylation',
        },

        // Topic 10: RuBisCO
        {
            id: 'mcq-t5-17',
            stem: 'Why is RuBisCO described as inefficient, and what is the consequence of this inefficiency?',
            options: [
                'It works too slowly and cannot distinguish between CO₂ and O₂, leading to photorespiration which wastes ATP and loses fixed carbon',
                'It requires too much ATP to function, reducing overall photosynthetic output',
                'It only works in low light conditions, limiting photosynthesis during the day',
                'It produces toxic byproducts that must be detoxified by the plant'
            ],
            correctAnswer: 0,
            rationale: 'RuBisCO catalyzes only ~3 reactions per second per active site (slow) and its active site cannot perfectly distinguish CO₂ from O₂. When O₂ binds instead of CO₂, photorespiration occurs, wasting ATP and releasing previously fixed CO₂, significantly reducing photosynthetic efficiency.',
            topic: 'RuBisCO',
        },
        {
            id: 'mcq-t5-18',
            stem: 'Why does photorespiration increase at high temperatures?',
            options: [
                'RuBisCO denatures at high temperatures',
                'Oxygen becomes relatively more soluble than CO₂ at higher temperatures, increasing the chance of O₂ binding to RuBisCO',
                'High temperatures damage the thylakoid membranes',
                'The Calvin cycle speeds up, using up all the RuBP'
            ],
            correctAnswer: 1,
            rationale: 'At higher temperatures, O₂ becomes relatively more soluble in water than CO₂. This increases the concentration of O₂ relative to CO₂ around RuBisCO, raising the probability that O₂ will bind to the active site instead of CO₂, causing photorespiration. RuBisCO does not denature at typical physiological temperatures.',
            topic: 'RuBisCO',
        },

        // Topic 11: Leaf Adaptations
        {
            id: 'mcq-t5-19',
            stem: 'How does the arrangement of palisade mesophyll cells maximize photosynthesis?',
            options: [
                'They are arranged horizontally to spread out and capture light from all angles',
                'They are packed with chloroplasts and arranged vertically to maximize light absorption as light passes through',
                'They contain large air spaces to allow rapid gas diffusion',
                'They have no chloroplasts to allow light to pass through to lower layers'
            ],
            correctAnswer: 1,
            rationale: 'Palisade mesophyll cells are densely packed with chloroplasts and arranged vertically (with their long axis perpendicular to the leaf surface). This columnar arrangement maximizes light absorption as light passes through multiple cells, each containing many chloroplasts.',
            topic: 'Structural Adaptations of the Leaf',
        },

        // Topic 12: Ecosystems
        {
            id: 'mcq-t5-20',
            stem: 'What is the difference between a population and a community in an ecosystem?',
            options: [
                'A population includes all living things; a community includes only plants',
                'A population is all organisms of one species in an area; a community is all populations of all interacting species in an area',
                'A community is one species; a population is multiple species',
                'A population includes abiotic factors; a community includes only biotic factors'
            ],
            correctAnswer: 1,
            rationale: 'A population refers to all organisms of a single species living in the same area at the same time. A community includes all populations of all different species that interact in a given area. Abiotic factors are part of the ecosystem but not the community.',
            topic: 'Ecosystems',
        },

        // Topic 13: Energy Transfer
        {
            id: 'mcq-t5-21',
            stem: 'Approximately what percentage of energy is transferred from one trophic level to the next, and why is this percentage so low?',
            options: [
                '50%; because half the energy is used for reproduction',
                '10%; because energy is lost as heat, in faeces, urine, and uneaten parts',
                '25%; because predators only eat a quarter of their prey',
                '90%; because energy transfer is highly efficient'
            ],
            correctAnswer: 1,
            rationale: 'Only about 10% of energy is transferred between trophic levels. Approximately 90% is lost through: heat released during respiration, energy in excretion (urine) and egestion (faeces/undigested material), and energy in uneaten parts (bones, fur, roots). This limits food chain length.',
            topic: 'Energy Transfer and Losses',
        },

        // Topic 14: Primary Productivity Calculations
        {
            id: 'mcq-t5-22',
            stem: 'A producer has a Gross Primary Productivity of 2000 kJ m⁻² yr⁻¹ and loses 800 kJ m⁻² yr⁻¹ through respiration. What is its Net Primary Productivity?',
            options: [
                '2800 kJ m⁻² yr⁻¹',
                '1200 kJ m⁻² yr⁻¹',
                '1600 kJ m⁻² yr⁻¹',
                '2000 kJ m⁻² yr⁻¹'
            ],
            correctAnswer: 1,
            rationale: 'NPP = GPP - R. Therefore: NPP = 2000 - 800 = 1200 kJ m⁻² yr⁻¹. This represents the energy available for plant growth and for the next trophic level after respiratory losses are accounted for.',
            topic: 'Primary Productivity Calculations',
        },

        // Topic 15: Carbon Cycle
        {
            id: 'mcq-t5-23',
            stem: 'What is the role of saprobiotic microorganisms (decomposers) in the carbon cycle?',
            options: [
                'They fix carbon dioxide into organic molecules through photosynthesis',
                'They release CO₂ from fossil fuels through combustion',
                'They secrete enzymes to digest dead organic matter and release CO₂ through their respiration',
                'They convert carbon into fossil fuels through fossilisation'
            ],
            correctAnswer: 2,
            rationale: 'Saprobionts (bacteria and fungi) secrete extracellular enzymes to digest dead organic matter and waste externally, then absorb the products. They release CO₂ through their own respiration, returning carbon to the atmosphere. Photosynthesis is done by producers, combustion by burning, and fossilisation is a geological process.',
            topic: 'The Carbon Cycle',
        },

        // Topic 16: Succession
        {
            id: 'mcq-t5-24',
            stem: 'What is the key difference between primary and secondary succession?',
            options: [
                'Primary succession occurs in water; secondary succession occurs on land',
                'Primary succession starts on bare ground with no soil; secondary succession occurs where soil is already present',
                'Primary succession involves animals only; secondary succession involves plants only',
                'Primary succession is faster than secondary succession'
            ],
            correctAnswer: 1,
            rationale: 'Primary succession begins on completely bare substrate (like bare rock after volcanic eruption) with no soil present. Secondary succession occurs where soil already exists (like after forest fire or abandoned farmland). Secondary succession is faster because soil and often seeds/spores are already present.',
            topic: 'Ecological Succession',
        },

        // Topic 17: Evidence for Climate Change
        {
            id: 'mcq-t5-25',
            stem: 'How do ice cores provide evidence for past atmospheric conditions and temperatures?',
            options: [
                'Ice cores contain frozen plant remains that can be carbon dated',
                'Air bubbles trapped in ice preserve ancient atmosphere; analyzing isotopic oxygen composition and CO₂ concentration reveals past temperatures and atmospheric composition',
                'The thickness of ice layers directly shows the temperature at the time',
                'Ice cores contain fossils of marine organisms'
            ],
            correctAnswer: 1,
            rationale: 'Ice cores trap air bubbles when snow falls and compresses into ice. These bubbles contain ancient atmosphere. Scientists analyze the isotopic composition of oxygen (different ratios indicate different temperatures) and measure CO₂ concentration, providing data up to 800,000 years old about past climate conditions.',
            topic: 'Evidence for Climate Change',
        },

        // Topic 18: Greenhouse Effect
        {
            id: 'mcq-t5-26',
            stem: 'What is phenology, and how is it affected by climate change?',
            options: [
                'Phenology is the study of plant anatomy; climate change affects leaf size',
                'Phenology is the study of seasonal timing in organisms; climate change causes events like flowering and migration to occur earlier',
                'Phenology is the study of genetics; climate change causes mutations',
                'Phenology is the study of population dynamics; climate change affects population size'
            ],
            correctAnswer: 1,
            rationale: 'Phenology is the study of the timing of seasonal biological events (flowering, migration, breeding). Climate change causes these events to occur earlier in the year as temperatures warm. This can cause life cycles to fall out of sync with interdependent species (e.g., pollinators, food sources).',
            topic: 'The Greenhouse Effect',
        },

        // Topic 19: Population Dynamics
        {
            id: 'mcq-t5-27',
            stem: 'What is the competitive exclusion principle?',
            options: [
                'Two species can never compete for the same resources',
                'Two species occupying identical niches cannot coexist indefinitely; one will outcompete the other',
                'Competition always leads to the extinction of both species',
                'Only closely related species can compete'
            ],
            correctAnswer: 1,
            rationale: 'The competitive exclusion principle states that two species cannot coexist indefinitely if they occupy exactly the same ecological niche. One species will inevitably be more efficient at using resources or reproducing, eventually outcompeting and excluding the other species from that habitat.',
            topic: 'Factors Determining Population Size',
        },

        // Topic 20: Core Practical 11 - Habitat Survey
        {
            id: 'mcq-t5-28',
            stem: 'When would a belt transect be more appropriate than random quadrat sampling?',
            options: [
                'When studying a uniform grassland with no environmental gradient',
                'When investigating how species distribution changes across an environmental gradient (e.g., from seashore to woodland)',
                'When the study area is very small',
                'When only one species is being studied'
            ],
            correctAnswer: 1,
            rationale: 'Belt transects are used for systematic sampling across environmental gradients where conditions change progressively (like light, moisture, or distance from shore). Random quadrats are better for uniform areas. Transects allow correlation of species abundance with changing abiotic factors along the gradient.',
            topic: 'Habitat Ecology Survey',
        },

        // Topic 21: Temperature and Enzyme Activity / Q10
        {
            id: 'mcq-t5-29',
            stem: 'If the rate of an enzyme-catalyzed reaction at 20°C is 50 units per minute, and the rate at 30°C is 100 units per minute, what is the Q10 value?',
            options: [
                '0.5',
                '2.0',
                '50',
                '1.5'
            ],
            correctAnswer: 1,
            rationale: 'Q10 = Rate at (T + 10)°C / Rate at T°C. Therefore: Q10 = 100 / 50 = 2.0. A Q10 of 2 indicates the reaction rate doubled when temperature increased by 10°C, which is typical for many enzyme-catalyzed reactions below their optimum temperature.',
            topic: 'Temperature and Enzyme Activity',
        },

        // Topic 22: Core Practical 12 - Temperature and Development
        {
            id: 'mcq-t5-30',
            stem: 'In an experiment investigating the effect of temperature on brine shrimp hatching, why is it important to control variables such as salinity and light intensity?',
            options: [
                'To make the experiment easier to conduct',
                'To ensure that any differences in hatching rate are due to temperature alone and not confounding variables',
                'Because brine shrimp cannot survive without these controls',
                'To reduce the cost of the experiment'
            ],
            correctAnswer: 1,
            rationale: 'Controlling variables ensures that temperature is the only independent variable affecting hatching rate (the dependent variable). If salinity or light varied between temperatures, these could become confounding variables, making it impossible to determine whether temperature or the other factors caused any observed differences.',
            topic: 'Temperature and Development',
        },
    ],

    fillblank: [
        {
            id: 'fb-t5-1',
            stem: 'Complete the following about photosynthesis.',
            template: 'The overall equation for photosynthesis is: 6CO₂ + 6H₂O + light energy → __BLANK__ + __BLANK__.',
            blanks: [
                { answer: 'C₆H₁₂O₆' },
                { answer: '6O₂' },
            ],
            rationale: 'Photosynthesis produces glucose (C₆H₁₂O₆) and oxygen (6O₂) from carbon dioxide, water, and light energy. The oxygen is released as a byproduct of photolysis.',
        },
        {
            id: 'fb-t5-2',
            stem: 'Complete the following about chloroplast structure.',
            template: 'The light-dependent reactions occur in the __BLANK__ membranes, while the light-independent reactions occur in the __BLANK__.',
            blanks: [
                { answer: 'thylakoid' },
                { answer: 'stroma' },
            ],
            rationale: 'Thylakoid membranes contain chlorophyll and are the site of light-dependent reactions. The stroma is the fluid-filled space containing enzymes like RuBisCO for the Calvin cycle.',
        },
        {
            id: 'fb-t5-3',
            stem: 'Complete the following about the light-dependent reactions.',
            template: 'Photolysis of water produces __BLANK__, electrons, and __BLANK__.',
            blanks: [
                { answer: 'protons' },
                { answer: 'oxygen' },
            ],
            rationale: 'Photolysis (light-splitting) of water: H₂O → 2H⁺ + 2e⁻ + ½O₂. The protons and electrons are used in the light-dependent reactions, while oxygen is released as a waste product.',
        },
        {
            id: 'fb-t5-4',
            stem: 'Complete the following about the Calvin cycle.',
            template: 'In the Calvin cycle, CO₂ combines with RuBP catalysed by the enzyme __BLANK__ to form an unstable 6-carbon compound that breaks down into two molecules of __BLANK__.',
            blanks: [
                { answer: 'RuBisCO' },
                { answer: 'GP' },
            ],
            rationale: 'RuBisCO (Ribulose Bisphosphate Carboxylase-Oxygenase) catalyses carbon fixation. GP (Glycerate 3-Phosphate) is a 3-carbon compound formed when the unstable 6-carbon intermediate breaks down.',
        },
        {
            id: 'fb-t5-5',
            stem: 'Complete the following about the Calvin cycle.',
            template: 'GP is reduced to GALP using __BLANK__ (for energy) and __BLANK__ (for hydrogen) from the light-dependent reactions.',
            blanks: [
                { answer: 'ATP' },
                { answer: 'NADPH' },
            ],
            rationale: 'The reduction of GP to GALP (Glyceraldehyde 3-Phosphate) requires energy from ATP and reducing power (hydrogen) from reduced NADP (NADPH), both produced in the light-dependent reactions.',
        },
        {
            id: 'fb-t5-6',
            stem: 'Complete the following about primary productivity.',
            template: 'The equation relating Net Primary Productivity to Gross Primary Productivity is: __BLANK__ = GPP - R.',
            blanks: [
                { answer: 'NPP' },
            ],
            rationale: 'NPP (Net Primary Productivity) is the energy available for plant growth and to the next trophic level, calculated by subtracting respiratory losses (R) from GPP (Gross Primary Productivity).',
        },
        {
            id: 'fb-t5-7',
            stem: 'Complete the following about ATP structure.',
            template: 'ATP consists of the nitrogenous base __BLANK__, the pentose sugar ribose, and three phosphate groups.',
            blanks: [
                { answer: 'adenine' },
            ],
            rationale: 'ATP (Adenosine Triphosphate) is a nucleotide derivative made of adenine, ribose, and three inorganic phosphate groups. The bonds between phosphates store energy.',
        },
        {
            id: 'fb-t5-8',
            stem: 'Complete the following about ATP function.',
            template: 'When ATP is hydrolysed, it releases energy and forms __BLANK__ and inorganic phosphate.',
            blanks: [
                { answer: 'ADP' },
            ],
            rationale: 'ATP hydrolysis (catalysed by ATP hydrolase) breaks the bond between the second and third phosphate, releasing energy and forming ADP (Adenosine Diphosphate) + Pi.',
        },
        {
            id: 'fb-t5-9',
            stem: 'Complete the following about the carbon cycle.',
            template: 'The process that removes CO₂ from the atmosphere and fixes it into organic molecules is called __BLANK__.',
            blanks: [
                { answer: 'photosynthesis' },
            ],
            rationale: 'Photosynthesis is the only biological process that removes carbon dioxide from the atmosphere, converting it into organic molecules like glucose in plants and algae.',
        },
        {
            id: 'fb-t5-10',
            stem: 'Complete the following about ecological succession.',
            template: 'The first species to colonise bare, hostile environments are called __BLANK__ species.',
            blanks: [
                { answer: 'pioneer' },
            ],
            rationale: 'Pioneer species (e.g., lichens on bare rock) are highly adapted to extreme abiotic conditions. Their decomposition adds organic matter, beginning soil formation for later species.',
        },
        {
            id: 'fb-t5-11',
            stem: 'Complete the following about ecological succession.',
            template: 'The stable, final community in ecological succession is called the __BLANK__ community.',
            blanks: [
                { answer: 'climax' },
            ],
            rationale: 'A climax community is the stable endpoint of succession (often mature woodland), remaining essentially unchanged unless disturbed by events like fire or human intervention.',
        },
        {
            id: 'fb-t5-12',
            stem: 'Complete the following about the temperature coefficient.',
            template: 'The Q10 formula is: Q10 = Rate at (T + 10)°C ÷ Rate at __BLANK__°C.',
            blanks: [
                { answer: 'T' },
            ],
            rationale: 'Q10 measures how much reaction rate changes for a 10°C temperature rise. For most enzyme-controlled reactions below optimum, Q10 ≈ 2 (rate doubles per 10°C increase).',
        },
        {
            id: 'fb-t5-13',
            stem: 'Complete the following about natural selection.',
            template: 'Evolution is the change in __BLANK__ frequencies in a population over time.',
            blanks: [
                { answer: 'allele' },
            ],
            rationale: 'Evolution occurs when allele frequencies change across generations. Natural selection increases the frequency of advantageous alleles that improve survival and reproduction.',
        },
        {
            id: 'fb-t5-14',
            stem: 'Complete the following about speciation.',
            template: '__BLANK__ speciation occurs when a geographical barrier separates a population, preventing gene flow.',
            blanks: [
                { answer: 'Allopatric' },
            ],
            rationale: 'Allopatric speciation requires geographic isolation (mountains, rivers, etc.) that prevents gene flow. Each population faces different selection pressures, eventually becoming reproductively isolated.',
        },
        {
            id: 'fb-t5-15',
            stem: 'Complete the following about energy transfer.',
            template: 'Approximately __BLANK__% of energy is lost at each trophic level, meaning only about 10% is transferred to the next level.',
            blanks: [
                { answer: '90' },
            ],
            rationale: 'Around 90% of energy is lost between trophic levels through heat (respiration), excretion, egestion, and uneaten parts. This explains why food chains rarely exceed 4-5 levels.',
        },
    ],

    dragdrop: [
        {
            id: 'dd-t5-1',
            stem: 'Sort these photosynthesis components by whether they occur in the light-dependent or light-independent (Calvin cycle) reactions.',
            categories: ['Light-Dependent', 'Light-Independent (Calvin Cycle)'],
            items: [
                { text: 'Photolysis of water', category: 'Light-Dependent' },
                { text: 'Carbon fixation by RuBisCO', category: 'Light-Independent (Calvin Cycle)' },
                { text: 'Photophosphorylation producing ATP', category: 'Light-Dependent' },
                { text: 'Reduction of GP to GALP using NADPH', category: 'Light-Independent (Calvin Cycle)' },
                { text: 'Photoionisation of chlorophyll', category: 'Light-Dependent' },
                { text: 'Regeneration of RuBP', category: 'Light-Independent (Calvin Cycle)' },
                { text: 'Production of oxygen as a by-product', category: 'Light-Dependent' },
                { text: 'Formation of GP from RuBP and CO₂', category: 'Light-Independent (Calvin Cycle)' },
            ],
        },
        {
            id: 'dd-t5-2',
            stem: 'Sort these photosynthesis components by their location within the chloroplast.',
            categories: ['Thylakoid Membranes', 'Stroma'],
            items: [
                { text: 'Light-dependent reactions', category: 'Thylakoid Membranes' },
                { text: 'Calvin cycle', category: 'Stroma' },
                { text: 'Photosynthetic pigments (chlorophyll)', category: 'Thylakoid Membranes' },
                { text: 'RuBisCO enzyme', category: 'Stroma' },
                { text: 'Electron transport chain', category: 'Thylakoid Membranes' },
                { text: 'Carbon fixation', category: 'Stroma' },
                { text: 'ATP synthesis via chemiosmosis', category: 'Thylakoid Membranes' },
                { text: 'Regeneration of RuBP', category: 'Stroma' },
            ],
        },
        {
            id: 'dd-t5-3',
            stem: 'Sort these organisms by their trophic level in a food chain.',
            categories: ['Producer', 'Primary Consumer', 'Secondary Consumer', 'Tertiary Consumer', 'Decomposer'],
            items: [
                { text: 'Grass (photosynthesises to make glucose)', category: 'Producer' },
                { text: 'Rabbit (eats grass)', category: 'Primary Consumer' },
                { text: 'Fox (eats rabbits)', category: 'Secondary Consumer' },
                { text: 'Eagle (eats foxes)', category: 'Tertiary Consumer' },
                { text: 'Fungi (breaks down dead organic matter)', category: 'Decomposer' },
                { text: 'Oak tree (autotroph)', category: 'Producer' },
                { text: 'Caterpillar (herbivore eating leaves)', category: 'Primary Consumer' },
                { text: 'Bacteria (saprobiont recycling nutrients)', category: 'Decomposer' },
            ],
        },
        {
            id: 'dd-t5-4',
            stem: 'Sort these processes by whether they remove CO₂ from the atmosphere or release CO₂ into the atmosphere.',
            categories: ['Removes CO₂ from Atmosphere', 'Releases CO₂ into Atmosphere'],
            items: [
                { text: 'Photosynthesis by plants', category: 'Removes CO₂ from Atmosphere' },
                { text: 'Aerobic respiration by organisms', category: 'Releases CO₂ into Atmosphere' },
                { text: 'Combustion of fossil fuels', category: 'Releases CO₂ into Atmosphere' },
                { text: 'Decomposition by saprobionts', category: 'Releases CO₂ into Atmosphere' },
                { text: 'Carbon fixation in the Calvin cycle', category: 'Removes CO₂ from Atmosphere' },
                { text: 'Burning of biomass', category: 'Releases CO₂ into Atmosphere' },
                { text: 'Algal photosynthesis in oceans', category: 'Removes CO₂ from Atmosphere' },
                { text: 'Respiration by soil microorganisms', category: 'Releases CO₂ into Atmosphere' },
            ],
        },
        {
            id: 'dd-t5-5',
            stem: 'Sort these characteristics by whether they describe primary succession or secondary succession.',
            categories: ['Primary Succession', 'Secondary Succession'],
            items: [
                { text: 'Starts on bare rock with no soil', category: 'Primary Succession' },
                { text: 'Starts on land where soil is already present', category: 'Secondary Succession' },
                { text: 'Begins after a forest fire', category: 'Secondary Succession' },
                { text: 'Colonised first by lichens (pioneer species)', category: 'Primary Succession' },
                { text: 'Occurs faster because seeds and spores remain', category: 'Secondary Succession' },
                { text: 'Begins on newly formed volcanic rock', category: 'Primary Succession' },
                { text: 'Follows agricultural clearance', category: 'Secondary Succession' },
                { text: 'Soil must be formed from weathered rock and organic matter', category: 'Primary Succession' },
            ],
        },
        {
            id: 'dd-t5-6',
            stem: 'Sort these adaptations by their type: anatomical, physiological, or behavioural.',
            categories: ['Anatomical', 'Physiological', 'Behavioural'],
            items: [
                { text: 'Whales having a thick layer of blubber', category: 'Anatomical' },
                { text: 'Bacteria producing antibiotic resistance', category: 'Physiological' },
                { text: 'Birds migrating to warmer climates in winter', category: 'Behavioural' },
                { text: 'Possums playing dead when threatened', category: 'Behavioural' },
                { text: 'Cacti having thick waxy cuticles', category: 'Anatomical' },
                { text: 'Hibernation lowering metabolic rate', category: 'Physiological' },
                { text: 'Camels having wide feet to walk on sand', category: 'Anatomical' },
                { text: 'Sweating to cool the body', category: 'Physiological' },
                { text: 'Courtship displays to attract mates', category: 'Behavioural' },
            ],
        },
        {
            id: 'dd-t5-7',
            stem: 'Sort these characteristics by whether they describe cyclic or non-cyclic photophosphorylation.',
            categories: ['Cyclic Photophosphorylation', 'Non-Cyclic Photophosphorylation'],
            items: [
                { text: 'Involves only Photosystem I (PSI)', category: 'Cyclic Photophosphorylation' },
                { text: 'Involves both PSI and PSII', category: 'Non-Cyclic Photophosphorylation' },
                { text: 'Produces ATP, NADPH, and O₂', category: 'Non-Cyclic Photophosphorylation' },
                { text: 'Produces ATP only', category: 'Cyclic Photophosphorylation' },
                { text: 'Electrons return to PSI after the ETC', category: 'Cyclic Photophosphorylation' },
                { text: 'Involves photolysis of water', category: 'Non-Cyclic Photophosphorylation' },
                { text: 'No oxygen is produced', category: 'Cyclic Photophosphorylation' },
                { text: 'Electrons ultimately reduce NADP', category: 'Non-Cyclic Photophosphorylation' },
            ],
        },
        {
            id: 'dd-t5-8',
            stem: 'Sort these energy losses by when they occur in an ecosystem: between trophic levels, or as part of plant productivity calculations.',
            categories: ['Between Trophic Levels', 'Plant Productivity (GPP to NPP)'],
            items: [
                { text: 'Heat released during aerobic respiration', category: 'Between Trophic Levels' },
                { text: 'Plant respiratory losses (R)', category: 'Plant Productivity (GPP to NPP)' },
                { text: 'Energy in faeces and urine', category: 'Between Trophic Levels' },
                { text: 'Energy used for plant cellular work', category: 'Plant Productivity (GPP to NPP)' },
                { text: 'Undigested material (e.g., cellulose, bones)', category: 'Between Trophic Levels' },
                { text: 'Energy in uneaten parts (roots, fur)', category: 'Between Trophic Levels' },
                { text: 'GPP minus respiration equals NPP', category: 'Plant Productivity (GPP to NPP)' },
                { text: 'Energy lost as heat during movement', category: 'Between Trophic Levels' },
            ],
        },
        {
            id: 'dd-t5-9',
            stem: 'Sort these types of evidence for climate change by the method used.',
            categories: ['Temperature Records', 'Peat Bogs', 'Dendrochronology', 'Ice Cores'],
            items: [
                { text: 'Thermometer measurements over 150 years', category: 'Temperature Records' },
                { text: 'Pollen grains preserved in acidic, anaerobic conditions', category: 'Peat Bogs' },
                { text: 'Tree ring thickness indicating growth conditions', category: 'Dendrochronology' },
                { text: 'Air bubbles trapped in ancient ice', category: 'Ice Cores' },
                { text: 'Direct measurement of rising global mean temperature', category: 'Temperature Records' },
                { text: 'Plant species identification to infer past climates', category: 'Peat Bogs' },
                { text: 'Ring width showing warmer/wetter years', category: 'Dendrochronology' },
                { text: 'Isotopic oxygen composition revealing past temperatures', category: 'Ice Cores' },
            ],
        },
        {
            id: 'dd-t5-10',
            stem: 'Sort these characteristics by whether they describe allopatric speciation or sympatric speciation.',
            categories: ['Allopatric Speciation', 'Sympatric Speciation'],
            items: [
                { text: 'Caused by geographical isolation', category: 'Allopatric Speciation' },
                { text: 'Occurs in the same geographic area', category: 'Sympatric Speciation' },
                { text: 'Physical barrier prevents gene flow', category: 'Allopatric Speciation' },
                { text: 'Polyploidy prevents successful meiosis', category: 'Sympatric Speciation' },
                { text: 'Populations face different selection pressures', category: 'Allopatric Speciation' },
                { text: 'Changes in courtship behavior cause isolation', category: 'Sympatric Speciation' },
                { text: 'Mountain range or river separates population', category: 'Allopatric Speciation' },
                { text: 'Different flowering times prevent gamete fusion', category: 'Sympatric Speciation' },
            ],
        },
    ],

    sequence: [
        {
            id: 'seq-t5-1',
            stem: 'Put these steps of the light-dependent reactions in the correct order:',
            steps: [
                'Light energy hits chlorophyll in Photosystem II, exciting electrons which leave the chlorophyll',
                'Excited electrons are passed down the electron transport chain via electron carriers',
                'Energy from electrons is used to pump protons (H⁺) from the stroma into the thylakoid space',
                'Protons diffuse back into the stroma through ATP synthase, forming ATP (photophosphorylation)',
                'Light splits water into protons, electrons, and oxygen (photolysis)',
                'Electrons from Photosystem I reduce NADP to form reduced NADP (NADPH)',
            ],
        },
        {
            id: 'seq-t5-2',
            stem: 'Put these stages of the Calvin cycle in the correct order:',
            steps: [
                'CO₂ diffuses into the stroma and combines with RuBP, catalysed by RuBisCO',
                'An unstable 6-carbon intermediate forms and immediately splits into two 3-carbon GP molecules',
                'GP is reduced to GALP using ATP and reduced NADP from the light-dependent reactions',
                'Five out of six GALP molecules are used to regenerate RuBP using more ATP',
                'One out of six GALP molecules exits the cycle to form glucose and other organic molecules',
            ],
        },
        {
            id: 'seq-t5-3',
            stem: 'Put these stages of primary succession in the correct order:',
            steps: [
                'Pioneer species (e.g., lichens) colonise bare, hostile environments like rock',
                'Pioneer species die and decompose, adding humus to form a basic soil',
                'The newly formed soil retains water and nutrients, making the environment less hostile',
                'New species with different competitive advantages colonise the area',
                'Biodiversity and biomass increase as new species outcompete pioneer species',
                'A stable climax community (e.g., mature woodland) is established',
            ],
        },
        {
            id: 'seq-t5-4',
            stem: 'Put these stages of secondary succession in the correct order:',
            steps: [
                'An existing community is disturbed (e.g., by fire or agricultural clearance) but soil remains',
                'Fast-growing pioneer species colonise using the existing soil and remaining seeds/spores',
                'Herbaceous plants and grasses establish, increasing organic matter in the soil',
                'Shrubs and small trees begin to grow, creating more complex habitats',
                'Larger trees establish and outcompete smaller plants for light',
                'A climax community forms, remaining stable unless disturbed',
            ],
        },
        {
            id: 'seq-t5-5',
            stem: 'Put these steps of the carbon cycle in the correct order, starting with atmospheric CO₂:',
            steps: [
                'CO₂ is removed from the atmosphere by photosynthesis and fixed into organic molecules in plants',
                'Carbon in organic molecules is passed along the food chain via feeding',
                'Organisms release CO₂ back to the atmosphere through respiration',
                'When organisms die, saprobiotic microorganisms decompose dead organic matter',
                'Decomposers release CO₂ through their own respiration',
                'Under certain conditions, dead organic matter forms fossil fuels over millions of years',
            ],
        },
        {
            id: 'seq-t5-6',
            stem: 'Put these steps of evolution by natural selection in the correct order:',
            steps: [
                'Random mutations introduce new alleles into a population, creating genetic variation',
                'A selection pressure (e.g., disease, predation, climate) creates a struggle for survival',
                'Individuals with advantageous alleles are better adapted and more likely to survive',
                'Survivors reproduce and pass the advantageous alleles to their offspring',
                'Over many generations, the frequency of the advantageous allele increases in the population',
            ],
        },
        {
            id: 'seq-t5-7',
            stem: 'Put these steps of allopatric speciation in the correct order:',
            steps: [
                'A geographical barrier (e.g., mountain range, river) separates a single population into two',
                'Gene flow between the two populations is prevented',
                'Each population experiences different environmental conditions and selection pressures',
                'Different alleles become advantageous in each population',
                'Natural selection causes allele frequencies to change differently in each population',
                'The populations become so genetically different they can no longer interbreed to produce fertile offspring',
            ],
        },
        {
            id: 'seq-t5-8',
            stem: 'Put these steps of energy flow through an ecosystem in the correct order:',
            steps: [
                'Light energy is absorbed by producers and converted to chemical energy via photosynthesis (GPP)',
                'Some chemical energy is used by plants for respiration (R)',
                'Net Primary Productivity (NPP) becomes available for plant growth and consumers',
                'Primary consumers ingest plant material, but only ~10% of energy is transferred',
                'Energy is lost at each trophic level via respiration, excretion, and uneaten parts',
                'Energy reaches higher trophic levels (secondary/tertiary consumers) with continued losses',
            ],
        },
    ],

    keyword: [
        {
            id: 'kw-t5-1',
            stem: 'Define gross primary productivity (GPP) and net primary productivity (NPP). [3 marks]',
            marks: 3,
            keywords: ['GPP', 'total rate', 'chemical energy', 'NPP', 'respiration', 'available'],
            modelAnswer: 'Gross primary productivity (GPP) is the total rate at which plants convert light energy into chemical energy (glucose) through photosynthesis in an ecosystem. Net primary productivity (NPP) is the remaining chemical energy after plant respiration losses are subtracted (NPP = GPP - R). NPP represents the energy available for plant growth and to the next trophic level.',
        },
        {
            id: 'kw-t5-2',
            stem: 'Explain the relationship between GPP, NPP and plant respiration (R). [2 marks]',
            marks: 2,
            keywords: ['NPP = GPP - R', 'respiration', 'subtracted', 'energy loss'],
            modelAnswer: 'The relationship is expressed as NPP = GPP - R. GPP represents the total chemical energy produced by photosynthesis. A significant portion of this energy is used by the plant for respiration (R) to power cellular activities. NPP is the remaining energy after these respiratory losses have been subtracted from GPP.',
        },
        {
            id: 'kw-t5-3',
            stem: 'Explain how light intensity acts as a limiting factor in photosynthesis. [3 marks]',
            marks: 3,
            keywords: ['light-dependent reactions', 'ATP', 'NADPH', 'rate', 'saturated', 'limiting'],
            modelAnswer: 'Light intensity limits the light-dependent reactions of photosynthesis. At low light intensities, less ATP and NADPH are produced, which restricts the rate of the Calvin cycle as GP cannot be reduced to GALP. As light intensity increases, the rate of photosynthesis increases until another factor becomes limiting or the photosynthetic machinery becomes saturated.',
        },
        {
            id: 'kw-t5-4',
            stem: 'Describe how temperature affects the rate of photosynthesis and explain why it has little effect on the light-dependent stage. [3 marks]',
            marks: 3,
            keywords: ['enzyme activity', 'Calvin cycle', 'RuBisCO', 'kinetic energy', 'denature', 'light energy'],
            modelAnswer: 'Temperature affects enzyme-controlled reactions in the Calvin cycle (such as RuBisCO activity). At low temperatures, low kinetic energy reduces collision rates. At high temperatures, enzymes denature. However, temperature has little effect on the light-dependent stage because this process is driven primarily by light energy rather than enzyme kinetics, so it does not rely heavily on molecular collisions.',
        },
        {
            id: 'kw-t5-5',
            stem: 'Describe the role of decomposers in the carbon cycle. [3 marks]',
            marks: 3,
            keywords: ['saprobiotic', 'bacteria', 'fungi', 'enzymes', 'digest', 'respiration', 'carbon dioxide'],
            modelAnswer: 'Decomposers (saprobiotic microorganisms such as bacteria and fungi) break down dead organic matter and waste products. They secrete enzymes to externally digest this material and absorb the products. During their own respiration, decomposers release carbon dioxide back into the atmosphere, returning carbon to the cycle and making nutrients available for producers.',
        },
        {
            id: 'kw-t5-6',
            stem: 'Explain how human activities have disrupted the balance of the carbon cycle. [3 marks]',
            marks: 3,
            keywords: ['deforestation', 'photosynthesis', 'combustion', 'fossil fuels', 'carbon dioxide', 'atmosphere'],
            modelAnswer: 'Human activities have imbalanced the carbon cycle through deforestation, which reduces the number of plants available to remove CO₂ via photosynthesis. Additionally, the combustion of fossil fuels releases large amounts of locked-up carbon back into the atmosphere as CO₂. These activities have led to a net increase in atmospheric CO₂ concentrations beyond natural levels.',
        },
        {
            id: 'kw-t5-7',
            stem: 'Describe how ice cores provide evidence for past climate conditions. [3 marks]',
            marks: 3,
            keywords: ['air bubbles', 'trapped', 'isotopic composition', 'oxygen', 'CO₂ concentration', 'temperature'],
            modelAnswer: 'Ice cores contain trapped air bubbles that preserve samples of the ancient atmosphere. Scientists analyze the isotopic composition of oxygen in the ice and the concentration of CO₂ in these bubbles. This reveals the atmospheric composition and temperature at the time the snow fell, providing climate records dating back up to 800,000 years.',
        },
        {
            id: 'kw-t5-8',
            stem: 'Explain how dendrochronology can be used as evidence for climate change. [2 marks]',
            marks: 2,
            keywords: ['tree rings', 'thickness', 'warmer', 'wetter', 'growth', 'climate conditions'],
            modelAnswer: 'Dendrochronology uses tree ring analysis to infer past climate conditions. Trees grow more in warmer, wetter years, producing thicker rings, whilst thinner rings indicate less favourable conditions. By measuring ring thickness in living and preserved wood, scientists can reconstruct temperature and precipitation patterns over thousands of years.',
        },
        {
            id: 'kw-t5-9',
            stem: 'Describe the process of primary succession from bare rock to climax community. [4 marks]',
            marks: 4,
            keywords: ['pioneer species', 'lichens', 'soil', 'humus', 'outcompete', 'biodiversity', 'climax community'],
            modelAnswer: 'Primary succession begins with pioneer species (such as lichens) colonising bare rock. These organisms are adapted to harsh conditions. When they die and decompose, they add humus to form a basic soil. This retained water and nutrients makes the environment less hostile. New species colonise and outcompete the pioneers. Biodiversity and biomass increase over time until a stable climax community (such as mature woodland) is established.',
        },
        {
            id: 'kw-t5-10',
            stem: 'Explain why secondary succession occurs faster than primary succession. [2 marks]',
            marks: 2,
            keywords: ['soil present', 'seeds', 'spores', 'already', 'faster'],
            modelAnswer: 'Secondary succession occurs on land that previously supported life and still has soil present. This soil already contains nutrients, organic matter, and often seeds or spores from previous vegetation. Because the soil ecosystem is already established, colonisation can proceed much faster than primary succession which must build soil from scratch.',
        },
        {
            id: 'kw-t5-11',
            stem: 'Explain the process of evolution by natural selection. [4 marks]',
            marks: 4,
            keywords: ['mutation', 'variation', 'selection pressure', 'advantageous allele', 'survive', 'reproduce', 'frequency'],
            modelAnswer: 'Random mutations introduce new alleles into a population, creating genetic variation. Environmental selection pressures create a struggle for survival. Individuals with advantageous alleles are better adapted and more likely to survive and reproduce. They pass these advantageous alleles to their offspring. Over many generations, the frequency of the advantageous allele increases in the population, leading to evolutionary change.',
        },
        {
            id: 'kw-t5-12',
            stem: 'Describe how geographical isolation can lead to allopatric speciation. [3 marks]',
            marks: 3,
            keywords: ['physical barrier', 'gene flow', 'different environments', 'selection pressures', 'allele frequencies', 'interbreed'],
            modelAnswer: 'A physical barrier (such as a mountain range or river) separates a single population into two groups, preventing gene flow between them. Each population experiences different environmental conditions and selection pressures. Different alleles become advantageous in each environment. Over many generations, natural selection causes allele frequencies to diverge. Eventually, the populations become so genetically different that they can no longer interbreed to produce fertile offspring, forming two distinct species.',
        },
    ],

    flashcards: [
        {
            id: 'fc-t5-1',
            front: 'What is the overall balanced equation for photosynthesis?',
            back: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nCarbon dioxide and water, using light energy, produce glucose and oxygen.',
            topic: 'Photosynthesis Overview',
        },
        {
            id: 'fc-t5-2',
            front: 'Where do the light-dependent and light-independent reactions occur in a chloroplast?',
            back: '• Light-dependent reactions: Thylakoid membranes\n• Light-independent reactions (Calvin cycle): Stroma\n\nThe thylakoids contain chlorophyll for light absorption; the stroma contains enzymes like RuBisCO.',
            topic: 'Photosynthesis Overview',
        },
        {
            id: 'fc-t5-3',
            front: 'What are the products of the light-dependent reactions?',
            back: '• ATP (via photophosphorylation)\n• Reduced NADP (NADPH)\n• Oxygen (as a waste product from photolysis)\n\nThese products are used in the Calvin cycle.',
            topic: 'Light-Dependent Reactions',
        },
        {
            id: 'fc-t5-4',
            front: 'What is photolysis and what does it produce?',
            back: 'Photolysis is the splitting of water molecules by light energy in Photosystem II.\n\nEquation: H₂O → 2H⁺ + 2e⁻ + ½O₂\n\nThe electrons replace those lost from chlorophyll; protons contribute to the proton gradient; oxygen is released as a waste product.',
            topic: 'Light-Dependent Reactions',
        },
        {
            id: 'fc-t5-5',
            front: 'What enzyme catalyses carbon fixation in the Calvin cycle?',
            back: 'RuBisCO (Ribulose Bisphosphate Carboxylase-Oxygenase)\n\nIt catalyses the reaction: CO₂ + RuBP → unstable 6C intermediate → 2 × GP (Glycerate 3-Phosphate)',
            topic: 'Calvin Cycle',
        },
        {
            id: 'fc-t5-6',
            front: 'How many turns of the Calvin cycle are needed to produce one glucose molecule?',
            back: '6 turns of the Calvin cycle.\n\nEach turn fixes 1 CO₂, so 6 turns fix 6 carbons. This produces 2 extra GALP molecules, which combine to form 1 glucose (C₆H₁₂O₆).',
            topic: 'Calvin Cycle',
        },
        {
            id: 'fc-t5-7',
            front: 'What is the Law of Limiting Factors?',
            back: 'The rate of a physiological process is limited by the factor nearest to its lowest value.\n\nIncreasing other factors will not increase the rate until the limiting factor is no longer limiting.\n\nMain factors: light intensity, CO₂ concentration, temperature.',
            topic: 'Limiting Factors',
        },
        {
            id: 'fc-t5-8',
            front: 'How do farmers optimise limiting factors in glasshouses?',
            back: '• Heaters/coolers: Regulate temperature\n• Artificial lamps: Provide light at night\n• Burning fossil fuels or pumping CO₂: Increase CO₂ concentration\n\nThis maximises photosynthesis rate and crop yield.',
            topic: 'Limiting Factors',
        },
        {
            id: 'fc-t5-9',
            front: 'What is the difference between an absorption spectrum and an action spectrum?',
            back: '• Absorption spectrum: Graph showing % of light absorbed by pigments at different wavelengths\n• Action spectrum: Graph showing rate of photosynthesis at different wavelengths\n\nThe two graphs correlate strongly—wavelengths absorbed most strongly produce the highest photosynthesis rates.',
            topic: 'Photosynthetic Pigments',
        },
        {
            id: 'fc-t5-10',
            front: 'How do you calculate the Rf value in chromatography?',
            back: 'Rf = distance moved by pigment ÷ distance moved by solvent front\n\nPigments separate based on solubility—more soluble pigments travel further and have higher Rf values.',
            topic: 'Photosynthetic Pigments',
        },
        {
            id: 'fc-t5-11',
            front: 'What is the equation for net primary productivity (NPP)?',
            back: 'NPP = GPP - R\n\nWhere:\n• GPP = Gross Primary Productivity (total chemical energy from photosynthesis)\n• R = Respiratory losses (energy used by plant for cellular respiration)\n\nNPP represents energy available for growth and to the next trophic level.',
            topic: 'GPP and NPP',
        },
        {
            id: 'fc-t5-12',
            front: 'Why do plants only convert a small percentage of incoming light energy into GPP?',
            back: '• Not all wavelengths are absorbed (green light is reflected)\n• Some light misses chloroplasts or passes through the leaf\n• Limiting factors (e.g., low CO₂) restrict maximum rate\n• Some energy is lost as heat during energy transfers',
            topic: 'GPP and NPP',
        },
        {
            id: 'fc-t5-13',
            front: 'What are the three components of an ATP molecule?',
            back: '1. Adenine (nitrogenous base)\n2. Ribose (pentose sugar)\n3. Three inorganic phosphate groups\n\nATP is a nucleotide derivative.',
            topic: 'ATP Structure and Function',
        },
        {
            id: 'fc-t5-14',
            front: 'Why is ATP a better immediate energy source than glucose?',
            back: '• Glucose contains too much energy—releasing it all at once would waste energy as heat\n• ATP releases small, manageable amounts in a single-step hydrolysis reaction\n• Energy is released immediately when needed\n• The phosphate released can phosphorylate other compounds',
            topic: 'ATP Structure and Function',
        },
        {
            id: 'fc-t5-15',
            front: 'What is photorespiration and why is it detrimental to plants?',
            back: 'Photorespiration occurs when RuBisCO binds O₂ instead of CO₂ (oxygenase activity).\n\nConsequences:\n• Produces a useless product that cannot be used in the Calvin cycle\n• Wastes ATP\n• Loses fixed carbon as CO₂\n• Significantly reduces photosynthetic efficiency',
            topic: 'RuBisCO and Photorespiration',
        },
        {
            id: 'fc-t5-16',
            front: 'Compare the products of non-cyclic and cyclic photophosphorylation.',
            back: 'Non-cyclic:\n• ATP, NADPH, and O₂\n• Uses both PSI and PSII\n• Involves photolysis of water\n\nCyclic:\n• ATP only\n• Uses only PSI\n• No photolysis, no O₂, no NADPH',
            topic: 'Photophosphorylation Types',
        },
        {
            id: 'fc-t5-17',
            front: 'What is the difference between a population and a community?',
            back: '• Population: All organisms of a single species living in the same area at the same time\n• Community: All populations of all interacting species living in the same area',
            topic: 'Ecosystems',
        },
        {
            id: 'fc-t5-18',
            front: 'What is the role of decomposers in an ecosystem?',
            back: 'Decomposers (saprobionts like fungi and bacteria):\n• Break down dead organic matter\n• Secrete enzymes to digest waste and dead organisms externally\n• Absorb the products\n• Release inorganic ions back into the soil for plant uptake',
            topic: 'Ecosystems',
        },
        {
            id: 'fc-t5-19',
            front: 'Why are food chains rarely longer than 4-5 trophic levels?',
            back: 'Around 90% of energy is lost at each trophic level through:\n• Heat from respiration\n• Excretion and egestion (urine, faeces)\n• Uneaten parts (bones, fur, roots)\n• Metabolic processes\n\nAfter 4-5 levels, insufficient energy remains to support another level.',
            topic: 'Energy Transfer',
        },
        {
            id: 'fc-t5-20',
            front: 'How do you calculate trophic efficiency?',
            back: 'Trophic Efficiency (%) = (Energy available after transfer ÷ Energy available before transfer) × 100\n\nTypically, only ~10% of energy is transferred between trophic levels.',
            topic: 'Energy Transfer',
        },
        {
            id: 'fc-t5-21',
            front: 'Which single biological process removes carbon dioxide from the atmosphere?',
            back: 'Photosynthesis.\n\nPlants convert CO₂ into organic molecules (glucose) using light energy:\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
            topic: 'Carbon Cycle',
        },
        {
            id: 'fc-t5-22',
            front: 'How have human activities imbalanced the carbon cycle?',
            back: '• Deforestation: Reduces photosynthesis, so less CO₂ is removed\n• Combustion of fossil fuels: Releases locked-up carbon as CO₂\n\nThese activities have increased atmospheric CO₂ levels, contributing to the enhanced greenhouse effect.',
            topic: 'Carbon Cycle',
        },
        {
            id: 'fc-t5-23',
            front: 'What is the difference between primary and secondary succession?',
            back: 'Primary succession:\n• Starts on bare ground with no soil (e.g., after volcanic eruption)\n• Pioneer species colonise first\n• Very slow process\n\nSecondary succession:\n• Starts on land with soil already present (e.g., after forest fire)\n• Soil and some seeds/spores remain\n• Much faster process',
            topic: 'Ecological Succession',
        },
        {
            id: 'fc-t5-24',
            front: 'What evidence do ice cores provide for past climates?',
            back: 'Ice cores trap air bubbles that reveal:\n• Atmospheric composition (CO₂ concentration) at the time snow fell\n• Temperature (from oxygen isotope ratios)\n\nData can extend back 800,000 years, showing clear correlations between CO₂ and temperature.',
            topic: 'Climate Change Evidence',
        },
        {
            id: 'fc-t5-25',
            front: 'Outline the five main steps of natural selection.',
            back: '1. Mutation: Random mutations create new alleles and genetic variation\n2. Selection pressure: Environmental factors create a struggle for survival\n3. Advantageous allele: Individuals with beneficial alleles survive better\n4. Inheritance: These individuals reproduce and pass on the allele\n5. Increasing frequency: Over generations, the advantageous allele becomes more common',
            topic: 'Natural Selection',
        },
        {
            id: 'fc-t5-26',
            front: 'Identify the three types of adaptations with one example of each.',
            back: '• Anatomical: Structural features (e.g., whale blubber for insulation)\n• Physiological: Body processes (e.g., bacteria producing antibiotics, hibernation)\n• Behavioural: Actions (e.g., possums playing dead, bird migration)',
            topic: 'Natural Selection',
        },
        {
            id: 'fc-t5-27',
            front: 'How does allopatric speciation occur?',
            back: '1. A geographical barrier separates a population\n2. Gene flow is prevented between the two groups\n3. Each group faces different environmental conditions and selection pressures\n4. Different alleles become advantageous in each population\n5. Over many generations, allele frequencies change\n6. Populations become genetically distinct and can no longer interbreed to produce fertile offspring',
            topic: 'Speciation',
        },
        {
            id: 'fc-t5-28',
            front: 'What is the difference between allopatric and sympatric speciation?',
            back: 'Allopatric speciation:\n• Caused by geographical isolation\n• Physical barrier separates populations\n\nSympatric speciation:\n• No geographical barrier\n• Occurs in the same area\n• Caused by mutations leading to reproductive isolation (e.g., polyploidy, different flowering times, behavioural changes)',
            topic: 'Speciation',
        },
        {
            id: 'fc-t5-29',
            front: 'What is the difference between conservation and preservation?',
            back: 'Conservation:\n• Active management of ecosystems\n• Human intervention to maintain biodiversity\n• Allows sustainable resource use (e.g., grazing, controlled burning)\n\nPreservation:\n• Protects habitats in natural state\n• Bans all human interference\n• Ecosystems left completely undisturbed',
            topic: 'Sustainability and Conservation',
        },
        {
            id: 'fc-t5-30',
            front: 'How does coppicing act as a sustainable resource management method?',
            back: 'Coppicing involves:\n• Cutting tree trunks to their base\n• New shoots grow rapidly from the stool (stump)\n• Provides continuous supply of wood without killing the tree\n• Trees regenerate, ensuring the resource is not depleted',
            topic: 'Sustainability and Conservation',
        },
    ],
};
