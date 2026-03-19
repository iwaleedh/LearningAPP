/**
 * Exercise set: Chemistry · Unit 3 · Topic 3A · Practical Skills I
 * Source: WCH13 specification, core practicals from WCH11/WCH12
 */

export const exercises_chemistry_3_3A = {
    mcq: [
        // Subtopic 1: Unit 1 and 2 practical methods
        {
            id: 'mcq-t3A-1',
            stem: 'What is the aim of Core Practical 1?',
            options: ['To measure the molar volume of a gas at room temperature and pressure', 'To determine the enthalpy of neutralisation', 'To prepare a standard solution', 'To identify an unknown ion by flame test'],
            correctAnswer: 0,
            rationale: 'Core Practical 1 uses Mg + HCl to produce H₂ gas. The volume of H₂ is measured with a gas syringe, then used to calculate molar volume at r.t.p. (room temperature and pressure).',
            topic: 'Unit 1 and 2 practical methods'
        },
        {
            id: 'mcq-t3A-2',
            stem: 'In Core Practical 1 (Mg + HCl → H₂), why must HCl be in excess?',
            options: ['To ensure the reaction goes to completion', 'To reduce the volume of gas produced', 'To prevent gas escape from the apparatus', 'To increase the reaction rate'],
            correctAnswer: 0,
            rationale: 'Using excess HCl ensures all magnesium reacts completely. If HCl were limiting, some Mg would remain unreacted and the gas volume would be lower than expected, leading to incorrect molar volume.',
            topic: 'Unit 1 and 2 practical methods'
        },
        {
            id: 'mcq-t3A-3',
            stem: 'What is the precision of a standard 50 cm³ burette per reading?',
            options: ['±0.01 cm³', '±0.05 cm³', '±0.10 cm³', '±0.50 cm³'],
            correctAnswer: 1,
            rationale: 'A 50 cm³ burette has a precision of ±0.05 cm³ per reading. Since a titre requires TWO readings (initial + final), the total absolute uncertainty is ±0.10 cm³.',
            topic: 'Unit 1 and 2 practical methods'
        },
        {
            id: 'mcq-t3A-4',
            stem: 'Which piece of apparatus should be used to accurately measure 25.0 cm³ of a solution in a titration?',
            options: ['Measuring cylinder (100 cm³)', 'Burette (50 cm³)', 'Pipette (25 cm³)', 'Volumetric flask (250 cm³)'],
            correctAnswer: 2,
            rationale: 'A 25 cm³ pipette is designed for accurate fixed volume transfer, with precision of ±0.06 cm³. Measuring cylinders (±0.5 cm³) are much less precise. Burettes and volumetric flasks serve different purposes.',
            topic: 'Unit 1 and 2 practical methods'
        },
        {
            id: 'mcq-t3A-5',
            stem: 'What is the purpose of using a water bath in organic chemistry?',
            options: ['To increase reaction rate', 'To provide controlled heating without naked flames', 'To evaporate the solvent', 'To cool the reaction mixture'],
            correctAnswer: 1,
            rationale: 'Water baths allow controlled heating of flammable organic solvents without using direct flame or hot plates. This reduces fire risk and provides even temperature distribution.',
            topic: 'Unit 1 and 2 practical methods'
        },
        // Subtopic 2: Practical planning and risk control
        {
            id: 'mcq-t3A-6',
            stem: 'In a practical plan, what is the independent variable?',
            options: ['The variable you measure in response', 'The variable you deliberately change', 'The variables you keep constant', 'The variable you cannot control'],
            correctAnswer: 1,
            rationale: 'The independent variable is the one you deliberately change to observe its effect. The dependent variable is what you measure. Control variables are kept constant to ensure a fair test.',
            topic: 'Practical planning and risk control'
        },
        {
            id: 'mcq-t3A-7',
            stem: 'When preparing a standard solution in a 250 cm³ volumetric flask, what is the final step after making up to the graduation mark?',
            options: ['Filter the solution', 'Stopper and invert 10-15 times', 'Add more distilled water', 'Heat the solution'],
            correctAnswer: 1,
            rationale: 'After making up to the mark with distilled water, you must stopper and invert the flask 10-15 times to ensure thorough mixing. This produces a homogeneous solution of uniform concentration.',
            topic: 'Practical planning and risk control'
        },
        {
            id: 'mcq-t3A-8',
            stem: 'What is the correct risk control for concentrated HCl (2 mol dm⁻³)?',
            options: ['Wear safety glasses only', 'Wear nitrile gloves, safety goggles, and use in a fume cupboard', 'No special precautions needed', 'Wear lab coat only'],
            correctAnswer: 1,
            rationale: 'Concentrated HCl is corrosive and produces irritant fumes. Full protection includes nitrile gloves (for skin), safety goggles (for eyes), and fume cupboard use (for fumes). Lab coat alone is insufficient.',
            topic: 'Practical planning and risk control'
        },
        {
            id: 'mcq-t3A-9',
            stem: 'What is meant by a "fair test" in practical work?',
            options: ['Using the correct equipment', 'Changing only one variable at a time', 'Repeating the experiment once', 'Using accurate measurements'],
            correctAnswer: 1,
            rationale: 'A fair test means only changing the independent variable while keeping all other variables constant. This ensures that any observed effect is due to the variable being investigated, not uncontrolled factors.',
            topic: 'Practical planning and risk control'
        },
        {
            id: 'mcq-t3A-10',
            stem: 'In a titration to find the concentration of an unknown acid, which is a control variable?',
            options: ['Volume of alkali required', 'Concentration of acid', 'Volume of acid being titrated', 'Colour of indicator'],
            correctAnswer: 2,
            rationale: 'The volume of acid being titrated (e.g., 25.0 cm³) must be kept constant in each titration. The volume of alkali (dependent variable) changes as you approach neutralisation. Indicator choice is a controlled method detail, not a variable in the data sense.',
            topic: 'Practical planning and risk control'
        },
        // Subtopic 3: Observation and data recording
        {
            id: 'mcq-t3A-11',
            stem: 'What gas test result is described as "squeaky pop"?',
            options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Chlorine'],
            correctAnswer: 1,
            rationale: 'A squeaky pop is the positive test for hydrogen (H₂) when a lit splint is held at the mouth of the test tube. Oxygen causes a glowing splint to relight, while CO₂ turns limewater milky.',
            topic: 'Observation and data recording'
        },
        {
            id: 'mcq-t3A-12',
            stem: 'What should you include in a results table column heading?',
            options: ['The quantity only', 'The unit only', 'Both the quantity and the unit', 'The quantity, unit and apparatus used'],
            correctAnswer: 2,
            rationale: 'Column headings must include both the quantity and its unit, separated by "/" or in brackets (e.g., "Volume of NaOH / cm³"). Units should NOT appear in the body of the table.',
            topic: 'Observation and data recording'
        },
        {
            id: 'mcq-t3A-13',
            stem: 'What is the correct way to record a burette reading?',
            options: ['To 1 decimal place (e.g., 24.1 cm³)', 'To 2 decimal places (e.g., 24.10 cm³)', 'To 3 decimal places (e.g., 24.100 cm³)', 'To the nearest whole number (e.g., 24 cm³)'],
            correctAnswer: 1,
            rationale: 'Burette readings must always be recorded to 2 decimal places, even if the second decimal is zero (e.g., 24.10, not 24.1). This reflects the ±0.05 cm³ precision of the burette.',
            topic: 'Observation and data recording'
        },
        {
            id: 'mcq-t3A-14',
            stem: 'What is a "concordant titre" in a titration?',
            options: ['Two results that differ by more than 0.10 cm³', 'Two or more results that agree within 0.10 cm³', 'The first and last titres', 'The titre closest to the expected value'],
            correctAnswer: 1,
            rationale: 'Concordant titres are those that agree within 0.10 cm³ of each other. At least two concordant titres are needed to calculate a reliable mean and exclude anomalies.',
            topic: 'Observation and data recording'
        },
        {
            id: 'mcq-t3A-15',
            stem: 'When describing a colour change in an observation, what should you always state?',
            options: ['The final colour only', 'The initial and final colours', 'The colour halfway through the change', 'The name of the indicator used'],
            correctAnswer: 1,
            rationale: 'Precise observations must describe both the initial AND final state. Write "colourless → pink" or "blue → colourless", not just "it went pink". This shows exactly what change occurred.',
            topic: 'Observation and data recording'
        },
        // Subtopic 4: Graphing and significant figures
        {
            id: 'mcq-t3A-16',
            stem: 'In a graph of a rate experiment, which variable should be plotted on the x-axis?',
            options: ['The volume of gas produced', 'The rate of reaction', 'The time elapsed', 'The concentration of reactant'],
            correctAnswer: 2,
            rationale: 'The independent variable (time, in a rate vs time experiment) is always plotted on the x-axis. The dependent variable (volume of gas, rate, etc.) is plotted on the y-axis.',
            topic: 'Graphing and significant figures'
        },
        {
            id: 'mcq-t3A-17',
            stem: 'How many significant figures are there in the number 0.00340?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            rationale: 'In 0.00340, the leading zeros (before the 3) are NOT significant. The significant digits are 3, 4, and the trailing zero after the decimal. That gives 3 significant figures.',
            topic: 'Graphing and significant figures'
        },
        {
            id: 'mcq-t3A-18',
            stem: 'When multiplying 2.5 (2 s.f.) by 4.35 (3 s.f.), how many significant figures should the answer have?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 0,
            rationale: 'In multiplication and division, the answer should have the same number of significant figures as the measurement with the FEWEST significant figures. Since 2.5 has only 2 s.f., the answer must be given to 2 s.f.',
            topic: 'Graphing and significant figures'
        },
        {
            id: 'mcq-t3A-19',
            stem: 'Convert 25.0 cm³ to dm³.',
            options: ['0.0250 dm³', '0.250 dm³', '2.50 dm³', '25000 dm³'],
            correctAnswer: 1,
            rationale: 'To convert cm³ to dm³, divide by 1000. 25.0 ÷ 1000 = 0.0250 dm³. Note that the trailing zero is preserved, giving 4 significant figures as in the original value.',
            topic: 'Graphing and significant figures'
        },
        {
            id: 'mcq-t3A-20',
            stem: 'What is the correct standard form for 24000?',
            options: ['24 × 10³', '2.4 × 10⁴', '2.40 × 10⁴', '0.24 × 10⁵'],
            correctAnswer: 1,
            rationale: 'Standard form is A × 10ⁿ where 1 ≤ A < 10. For 24000, we write 2.4 × 10⁴. The value 2.40 × 10⁴ would imply 3 significant figures, which 24000 does not have.',
            topic: 'Graphing and significant figures'
        },
        // Subtopic 5: Method evaluation and uncertainty
        {
            id: 'mcq-t3A-21',
            stem: 'What is the main difference between random and systematic errors?',
            options: ['Random errors affect accuracy; systematic errors affect precision', 'Random errors are predictable; systematic errors are unpredictable', 'Random errors cause scatter in data; systematic errors cause consistent offset', 'Random errors can be eliminated by calibration'],
            correctAnswer: 2,
            rationale: 'Random errors are unpredictable and cause scatter (reduced precision), while systematic errors are consistent in one direction and affect accuracy. Repeating measurements reduces random errors but NOT systematic errors.',
            topic: 'Method evaluation and uncertainty'
        },
        {
            id: 'mcq-t3A-22',
            stem: 'If a burette is not rinsed with the titrant before use, what is the effect on the titre volume?',
            options: ['Titre volume too low', 'Titre volume too high', 'No effect on titre volume', 'Titre becomes more precise'],
            correctAnswer: 1,
            rationale: 'If the burette contains water from rinsing, the titrant is diluted. More diluted solution is needed to reach the endpoint, so the recorded titre volume will be higher than the true value. This is a systematic error.',
            topic: 'Method evaluation and uncertainty'
        },
        {
            id: 'mcq-t3A-23',
            stem: 'What is the percentage uncertainty of a 25.00 cm³ titre measured with a burette (±0.05 cm³ per reading)?',
            options: ['0.2%', '0.4%', '1.0%', '2.0%'],
            correctAnswer: 1,
            rationale: 'A titre requires two readings, so total absolute uncertainty = 2 × 0.05 = 0.10 cm³. % Uncertainty = (0.10 / 25.00) × 100 = 0.4%. This shows why larger titres have lower percentage uncertainty.',
            topic: 'Method evaluation and uncertainty'
        },
        {
            id: 'mcq-t3A-24',
            stem: 'What is the definition of "accuracy" in experimental work?',
            options: ['How close repeated measurements are to each other', 'How close a result is to the true value', 'Whether the experiment is repeatable', 'Whether the experiment measures what it claims to measure'],
            correctAnswer: 1,
            rationale: 'Accuracy is how close a measurement is to the true or accepted value. Precision (not accuracy) is how close repeated measurements are to each other. Reliability refers to consistency when repeated.',
            topic: 'Method evaluation and uncertainty'
        },
        {
            id: 'mcq-t3A-25',
            stem: 'What happens to percentage uncertainty when you increase the size of a measurement using the same instrument?',
            options: ['Percentage uncertainty increases', 'Percentage uncertainty decreases', 'Percentage uncertainty stays the same', 'Percentage uncertainty cannot be determined'],
            correctAnswer: 1,
            rationale: 'Since % uncertainty = (absolute uncertainty / measured value) × 100, increasing the measured value (denominator) decreases the percentage. This is why larger masses and titres give more reliable results.',
            topic: 'Method evaluation and uncertainty'
        },
        // Subtopic 6: Practical reasoning in new contexts
        {
            id: 'mcq-t3A-26',
            stem: 'What must a valid conclusion be based on?',
            options: ['Your prediction before the experiment', 'Data collected during the experiment', 'Textbook theory', 'Other students\' results'],
            correctAnswer: 1,
            rationale: 'A valid conclusion must be supported by the data collected. It should reference specific numerical values or trends from your results. Conclusions should not extend beyond what the data allows.',
            topic: 'Practical reasoning in new contexts'
        },
        {
            id: 'mcq-t3A-27',
            stem: 'When explaining an unexpected result, what should you check first?',
            options: ['Whether the data points are on the best-fit line', 'For systematic errors (apparatus calibration, consistent offsets)', 'Whether the result matches the textbook value', 'If the calculation is correct'],
            correctAnswer: 1,
            rationale: 'When results are unexpected, check first for systematic errors: was apparatus calibrated? Is there a consistent offset in one direction? Was the method valid (did it measure what was intended)? Then consider uncontrolled variables.',
            topic: 'Practical reasoning in new contexts'
        },
        {
            id: 'mcq-t3A-28',
            stem: 'What is a good reason to suggest extending the range of the independent variable in further investigations?',
            options: ['To get more data points for graphing', 'To improve reliability of the identified trend', 'To reduce the experimental time', 'To use up more chemicals'],
            correctAnswer: 1,
            rationale: 'Extending the range gives more data points across a wider span, which improves the reliability of any trend identified. A single narrow range may not accurately represent the full relationship.',
            topic: 'Practical reasoning in new contexts'
        },
        {
            id: 'mcq-t3A-29',
            stem: 'In a back titration to find CaCO₃ in an antacid tablet, what familiar skill is being transferred?',
            options: ['Gas collection method', 'Same c = n/V calculation principle', 'Calorimetry calculation', 'Pipette technique'],
            correctAnswer: 1,
            rationale: 'Back titration transfers the standard titration skill: concentration = moles / volume. You calculate moles of excess acid added, subtract moles reacted, then find moles of analyte. The c = n/V principle is identical to regular titrations.',
            topic: 'Practical reasoning in new contexts'
        },
        {
            id: 'mcq-t3A-30',
            stem: 'What is the key principle being tested when asked to determine purity of a sample by titration?',
            options: ['Identifying the substance by flame test', 'Measuring mass directly', 'Using mole calculations to find percentage purity', 'Comparing colour changes'],
            correctAnswer: 2,
            rationale: 'Purity by titration uses moles of reactant that reacted (from titre) to calculate theoretical mass of pure substance. Purity % = (experimental moles / theoretical moles) × 100. This transfers the moles-titration relationship.',
            topic: 'Practical reasoning in new contexts'
        },
    ],

    fillblank: [
        // Subtopic 1: Unit 1 and 2 practical methods
        {
            id: 'fb-t3A-1',
            stem: 'In Core Practical 1, magnesium reacts with hydrochloric acid to produce __BLANK__ gas.',
            blanks: [
                { answer: 'hydrogen' },
            ],
            rationale: 'The reaction Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) produces hydrogen gas, which is collected in a gas syringe to measure its volume.',
        },
        {
            id: 'fb-t3A-2',
            stem: 'The molar volume of a gas at room temperature and pressure is approximately __BLANK__ dm³ mol⁻¹.',
            blanks: [
                { answer: '24' },
            ],
            rationale: 'The accepted molar volume of any gas at r.t.p. is 24 dm³ mol⁻¹ (or 24,000 cm³ mol⁻¹). Core Practical 1 compares the experimental value to this accepted value.',
        },
        {
            id: 'fb-t3A-3',
            stem: 'An analytical balance typically has a precision of __BLANK__ g.',
            blanks: [
                { answer: '0.001' },
            ],
            rationale: 'Analytical balances used in A-level chemistry typically read to ±0.001 g (3 decimal places). This precision is essential for accurate mass measurements in mole calculations.',
        },
        {
            id: 'fb-t3A-4',
            stem: 'A reflux condenser is used to heat an organic reaction without losing __BLANK__ reactants.',
            blanks: [
                { answer: 'volatile' },
            ],
            rationale: 'Water flowing through the outer jacket condenses vapour and returns it to the flask. This prevents loss of volatile reactants and products during heating.',
        },
        // Subtopic 2: Practical planning and risk control
        {
            id: 'fb-t3A-5',
            stem: 'In a practical plan, the variable you measure is called the __BLANK__ variable.',
            blanks: [
                { answer: 'dependent' },
            ],
            rationale: 'The dependent variable is what you observe or measure as a result of changing the independent variable. Its changes are recorded as your data.',
        },
        {
            id: 'fb-t3A-6',
            stem: 'Variables that must be kept constant to ensure a fair test are called __BLANK__ variables.',
            blanks: [
                { answer: 'control' },
            ],
            rationale: 'Control variables are kept unchanged throughout the experiment. This ensures that only the independent variable affects the dependent variable, giving a valid test.',
        },
        {
            id: 'fb-t3A-7',
            stem: 'When preparing a standard solution, after dissolving the solute, you should make the solution up to the graduation mark using a __BLANK__ pipette.',
            blanks: [
                { answer: 'dropping' },
            ],
            rationale: 'Near the graduation mark, use a dropping pipette to add distilled water dropwise. This prevents overshooting the mark, which would make the concentration too low.',
        },
        {
            id: 'fb-t3A-8',
            stem: 'For flammable liquids like ethanol, heating should be done using a water bath or __BLANK__ rather than a naked flame.',
            blanks: [
                { answer: 'oil bath' },
            ],
            rationale: 'Water baths or oil baths provide controlled heating without direct flame. This is essential for flammable organic solvents to reduce fire risk.',
        },
        // Subtopic 3: Observation and data recording
        {
            id: 'fb-t3A-9',
            stem: 'When testing for carbon dioxide gas, bubble it through limewater which turns __BLANK__ or cloudy.',
            blanks: [
                { answer: 'milky' },
            ],
            rationale: 'CO₂ reacts with Ca(OH)₂(aq) in limewater to form insoluble CaCO₃, causing the solution to turn milky or cloudy. This is the positive test for carbon dioxide.',
        },
        {
            id: 'fb-t3A-10',
            stem: 'In a titration results table, the rough titre should be __BLANK__ from the mean calculation.',
            blanks: [
                { answer: 'excluded' },
            ],
            rationale: 'The rough titre is used to approximate the endpoint and identify when to add alkali dropwise. It is not included in the mean because it is intentionally less precise.',
        },
        {
            id: 'fb-t3A-11',
            stem: 'A data point that lies significantly outside the pattern of other results is called an __BLANK__ result.',
            blanks: [
                { answer: 'anomalous' },
            ],
            rationale: 'Anomalous results (or outliers) differ noticeably from other data. They should be identified, circled on graphs or flagged in tables, and excluded from mean calculations.',
        },
        {
            id: 'fb-t3A-12',
            stem: 'A pipette with ±0.06 cm³ precision should record volumes to __BLANK__ decimal place.',
            blanks: [
                { answer: '1' },
            ],
            rationale: 'Pipettes deliver a fixed volume and have precision of ±0.06 cm³. Volumes are recorded to 1 decimal place (e.g., 25.0 cm³), reflecting this precision.',
        },
        // Subtopic 4: Graphing and significant figures
        {
            id: 'fb-t3A-13',
            stem: 'The gradient of a straight-line graph is calculated as __BLANK__ divided by __BLANK__.',
            blanks: [
                { answer: 'change in y' },
                { answer: 'change in x' },
            ],
            rationale: 'Gradient = Δy / Δx = (y₂ − y₁) / (x₂ − x₁). Always use points READ FROM the best-fit line, not individual data points.',
        },
        {
            id: 'fb-t3A-14',
            stem: 'When adding or subtracting measurements, the answer should have the same number of __BLANK__ places as the least precise measurement.',
            blanks: [
                { answer: 'decimal' },
            ],
            rationale: 'For addition and subtraction, match decimal places to the measurement with fewest. For example: 25.1 + 1.23 = 26.3 (1 d.p., matching 25.1).',
        },
        {
            id: 'fb-t3A-15',
            stem: 'In standard form notation, the number before the power of ten must be greater than or equal to __BLANK__ and less than 10.',
            blanks: [
                { answer: '1' },
            ],
            rationale: 'Standard form is A × 10ⁿ where 1 ≤ A < 10. For example: 2.5 × 10³ is correct, but 0.25 × 10⁴ or 15 × 10² are not.',
        },
    ],

    dragdrop: [
        {
            id: 'dd-t3A-1',
            stem: 'Categorise the following pieces of apparatus by their typical precision.',
            categories: ['±0.001 g', '±0.05-0.10 cm³', '±0.5 cm³ or °C', '±0.30 cm³'],
            items: [
                { text: 'Analytical balance', category: '±0.001 g' },
                { text: '50 cm³ burette', category: '±0.05-0.10 cm³' },
                { text: '25 cm³ pipette', category: '±0.05-0.10 cm³' },
                { text: '100 cm³ measuring cylinder', category: '±0.5 cm³ or °C' },
                { text: 'Gas syringe (100 cm³)', category: '±0.5 cm³ or °C' },
                { text: 'Mercury/alcohol thermometer', category: '±0.5 cm³ or °C' },
                { text: '250 cm³ volumetric flask', category: '±0.30 cm³' },
                { text: 'Digital thermometer (±0.1 °C)', category: '±0.5 cm³ or °C' },
            ],
        },
        {
            id: 'dd-t3A-2',
            stem: 'Classify the following errors as random or systematic.',
            categories: ['Random Error', 'Systematic Error'],
            items: [
                { text: 'Parallax error reading burette slightly differently each time', category: 'Random Error' },
                { text: 'Balance reads 0.02 g too high consistently', category: 'Systematic Error' },
                { text: 'Different reaction times when stopping a stopwatch', category: 'Random Error' },
                { text: 'Heat loss to surroundings in calorimetry', category: 'Systematic Error' },
                { text: 'Air bubble in burette jet releases during titration', category: 'Random Error' },
                { text: 'Not rinsing burette with titrant', category: 'Systematic Error' },
            ],
        },
        {
            id: 'dd-t3A-3',
            stem: 'Sort the following gas tests by their positive result.',
            categories: ['Squeaky pop', 'Relights glowing splint', 'Milky/cloudy limewater', 'Bleaches litmus'],
            items: [
                { text: 'Hydrogen (H₂)', category: 'Squeaky pop' },
                { text: 'Oxygen (O₂)', category: 'Relights glowing splint' },
                { text: 'Carbon dioxide (CO₂)', category: 'Milky/cloudy limewater' },
                { text: 'Chlorine (Cl₂)', category: 'Bleaches litmus' },
                { text: 'Ammonia (NH₃)', category: 'Bleaches litmus' },
                { text: 'Sulfur dioxide (SO₂)', category: 'Bleaches litmus' },
            ],
        },
        {
            id: 'dd-t3A-4',
            stem: 'Categorise these improvements for reducing experimental error.',
            categories: ['Reduces Random Error', 'Reduces Systematic Error', 'Reduces Heat Loss', 'Reduces Measurement Error'],
            items: [
                { text: 'Repeat measurements and calculate a mean', category: 'Reduces Random Error' },
                { text: 'Calibrate balance before use', category: 'Reduces Systematic Error' },
                { text: 'Use polystyrene cup with lid for calorimetry', category: 'Reduces Heat Loss' },
                { text: 'Use larger mass of solid', category: 'Reduces Measurement Error' },
                { text: 'Use larger titre volume', category: 'Reduces Measurement Error' },
                { text: 'Rinse burette with titrant', category: 'Reduces Systematic Error' },
            ],
        },
        {
            id: 'dd-t3A-5',
            stem: 'Sort these risk control measures by the hazard they address.',
            categories: ['Corrosive substances', 'Flammable liquids', 'Toxic gases', 'Hot equipment'],
            items: [
                { text: 'Wear nitrile gloves and safety goggles', category: 'Corrosive substances' },
                { text: 'Use in fume cupboard', category: 'Toxic gases' },
                { text: 'No naked flames', category: 'Flammable liquids' },
                { text: 'Use heat-resistant mat or tongs', category: 'Hot equipment' },
                { text: 'Use water bath for heating', category: 'Flammable liquids' },
                { text: 'Allow equipment to cool before handling', category: 'Hot equipment' },
            ],
        },
    ],

    sequence: [
        {
            id: 'seq-t3A-1',
            stem: 'Put these steps for preparing a standard solution in the correct order:',
            steps: [
                'Calculate the mass of solute needed using mass = c × V × Mr',
                'Weigh the solid accurately on an analytical balance',
                'Dissolve the solid in a small volume of distilled water in a beaker',
                'Transfer the solution quantitatively to a volumetric flask',
                'Make up to the graduation mark with distilled water using a dropping pipette',
                'Stopper and invert the flask 10-15 times to mix thoroughly',
            ],
        },
        {
            id: 'seq-t3A-2',
            stem: 'Put these titration steps in the correct order:',
            steps: [
                'Rinse and fill the burette with the titrant solution',
                'Record the initial burette reading',
                'Pipette a known volume of analyte into a conical flask',
                'Add a few drops of suitable indicator',
                'Add titrant slowly while swirling the flask continuously',
                'Slow down to dropwise addition near the expected endpoint',
                'Record the final burette reading when the colour change is permanent',
                'Calculate the titre volume (final - initial)',
                'Repeat until two titres agree within 0.10 cm³',
            ],
        },
        {
            id: 'seq-t3A-3',
            stem: 'Put these steps for Core Practical 1 (molar volume of H₂) in the correct order:',
            steps: [
                'Weigh a strip of magnesium ribbon accurately',
                'Set up a conical flask with bung and gas syringe connected',
                'Add excess dilute HCl to the flask',
                'Quickly insert the magnesium ribbon and seal with the bung',
                'Record the volume of gas when the reaction is complete',
                'Record the room temperature and pressure',
                'Calculate moles of Mg using mass / Mr',
                'Calculate molar volume = volume of H₂ / moles of H₂',
            ],
        },
        {
            id: 'seq-t3A-4',
            stem: 'Put these steps for calorimetry (enthalpy change) in the correct order:',
            steps: [
                'Measure a known volume of first solution into a polystyrene cup',
                'Record the initial temperature of both solutions',
                'Add the second reagent and stir continuously',
                'Record the maximum temperature reached',
                'Calculate the temperature change (ΔT = T_final - T_initial)',
                'Calculate heat energy using q = mcΔT',
                'Calculate moles of the limiting reagent',
                'Calculate enthalpy change ΔH = -q / moles (in kJ mol⁻¹)',
            ],
        },
        {
            id: 'seq-t3A-5',
            stem: 'Put these steps in drawing and using a best-fit line correctly:',
            steps: [
                'Label both axes with quantity and unit',
                'Choose appropriate scales using more than half the grid',
                'Plot data points accurately as small crosses',
                'Identify and circle any anomalous points',
                'Draw a smooth straight line or curve through the data',
                'Do not force the line through the origin unless justified',
                'Draw a large triangle on the best-fit line to find gradient',
                'Read coordinates from the line (not from data points)',
            ],
        },
    ],

    keyword: [
        {
            id: 'kw-t3A-1',
            stem: 'Define the term "independent variable" in the context of a practical investigation. [2 marks]',
            marks: 2,
            keywords: ['change', 'variable', 'deliberately', 'manipulate'],
            modelAnswer: 'The independent variable is the variable that the experimenter deliberately changes or manipulates during the investigation to observe its effect on the dependent variable.',
        },
        {
            id: 'kw-t3A-2',
            stem: 'Explain why using a larger mass of solid reduces percentage uncertainty in a measurement. [2 marks]',
            marks: 2,
            keywords: ['percentage uncertainty', 'decreases', 'denominator', 'larger', 'mass'],
            modelAnswer: 'Percentage uncertainty = (absolute uncertainty / measured value) × 100. As the measured value (mass) increases in the denominator, the percentage uncertainty decreases for the same absolute uncertainty of the balance.',
        },
        {
            id: 'kw-t3A-3',
            stem: 'State three pieces of information that must be included in a column heading of a results table. [3 marks]',
            marks: 3,
            keywords: ['quantity', 'unit', 'separated', 'heading'],
            modelAnswer: 'The column heading must include: (1) the quantity being measured, (2) its unit, and (3) these should be separated by a slash "/" or shown in brackets. Example: "Volume of NaOH / cm³".',
        },
        {
            id: 'kw-t3A-4',
            stem: 'Explain the difference between accuracy and precision in experimental measurements. [3 marks]',
            marks: 3,
            keywords: ['true value', 'closeness', 'repeatability', 'scatter', 'spread'],
            modelAnswer: 'Accuracy is how close a measured value is to the true or accepted value. Precision is how close repeated measurements are to each other, indicated by small scatter or spread in the data. A result can be precise but not accurate if all repeats are similarly wrong.',
        },
        {
            id: 'kw-t3A-5',
            stem: 'Describe how you would prepare 250 cm³ of a 0.100 mol dm⁻³ standard solution of sodium carbonate. [4 marks]',
            marks: 4,
            keywords: ['calculate mass', 'weigh', 'dissolve', 'volumetric flask', 'make up', 'mark', 'invert', 'mix'],
            modelAnswer: 'Calculate mass = c × V × Mr = 0.100 × 0.250 × 106.0 = 2.65 g. Weigh 2.65 g of Na₂CO₃ accurately on an analytical balance. Dissolve in a small volume of distilled water in a beaker. Transfer quantitatively to a 250 cm³ volumetric flask, rinsing the beaker three times. Make up to the graduation mark with distilled water using a dropping pipette. Stopper and invert 10-15 times to mix thoroughly.',
        },
        {
            id: 'kw-t3A-6',
            stem: 'A titration gives titre volumes of 24.30, 24.25, 27.15 and 24.20 cm³. Identify the anomalous result and calculate the mean titre. [3 marks]',
            marks: 3,
            keywords: ['anomalous', 'exclude', '27.15', '24.25', 'mean', '24.25'],
            modelAnswer: 'The result 27.15 cm³ is anomalous as it differs significantly from the other values (not within 0.10 cm³). Excluding this, the concordant titres are 24.30, 24.25 and 24.20 cm³. The mean titre is (24.30 + 24.25 + 24.20) ÷ 3 = 24.25 cm³.',
        },
        {
            id: 'kw-t3A-7',
            stem: 'State two sources of error in Core Practical 1 (molar volume of H₂) and suggest one improvement for each. [4 marks]',
            marks: 4,
            keywords: ['gas escape', 'oxide layer', 'syringe friction', 'seal', 'sandpaper', 'excess HCl'],
            modelAnswer: '1. Gas may escape before the bung is sealed → molar volume too low. Improvement: Pre-weigh Mg, then seal flask before adding acid. 2. Mg ribbon has oxide layer (MgO) → less Mg reacts → volume too low. Improvement: Clean ribbon with sandpaper before weighing.',
        },
        {
            id: 'kw-t3A-8',
            stem: 'Calculate the percentage error if a student determines the enthalpy change as -52.0 kJ mol⁻¹ when the accepted value is -57.0 kJ mol⁻¹. [2 marks]',
            marks: 2,
            keywords: ['percentage error', 'absolute', 'accepted', 'subtract', 'divide', 'multiply', '8.77'],
            modelAnswer: '% Error = |experimental - accepted| / accepted × 100 = |-52.0 - (-57.0)| ÷ |-57.0| × 100 = 5.0 ÷ 57.0 × 100 = 8.77%.',
        },
        {
            id: 'kw-t3A-9',
            stem: 'Explain why heat loss to surroundings is a systematic error in calorimetry experiments. [2 marks]',
            marks: 2,
            keywords: ['systematic', 'always', 'direction', 'temperature change', 'lower', 'enthalpy'],
            modelAnswer: 'Heat loss to surroundings occurs in every trial and always causes the measured temperature change to be lower than the true value. Since it consistently affects results in the same direction (lower ΔT), it is a systematic error that reduces the calculated enthalpy change magnitude.',
        },
        {
            id: 'kw-t3A-10',
            stem: 'A burette has an uncertainty of ±0.05 cm³ per reading. Calculate the percentage uncertainty for a titre of (a) 10.00 cm³ and (b) 25.00 cm³. [4 marks]',
            marks: 4,
            keywords: ['two readings', '0.10', 'divide', '1.0', '0.4', 'larger', 'lower'],
            modelAnswer: 'A titre requires two readings, so total uncertainty = 2 × 0.05 = 0.10 cm³.\n(a) % uncertainty = (0.10 ÷ 10.00) × 100 = 1.0%\n(b) % uncertainty = (0.10 ÷ 25.00) × 100 = 0.4%\nLarger measurements have lower percentage uncertainty.',
        },
        {
            id: 'kw-t3A-11',
            stem: 'Describe what a valid conclusion must include when analysing experimental data. [3 marks]',
            marks: 3,
            keywords: ['supported', 'data', 'numerical values', 'trends', 'limitations', 'acknowledge'],
            modelAnswer: 'A valid conclusion must be supported by the data collected during the experiment. It should reference specific numerical values or trends from the results. The conclusion should acknowledge limitations of the data and uncertainties. It should not over-generalise beyond what the data allows.',
        },
        {
            id: 'kw-t3A-12',
            stem: 'Suggest two improvements to reduce uncertainty in a titration experiment. [4 marks]',
            marks: 4,
            keywords: ['larger titre', 'more precise', 'burette', 'repeat', 'concordant', 'calibrate'],
            modelAnswer: '1. Use a larger titre volume (e.g., use 25 cm³ pipette instead of 10 cm³) to reduce percentage uncertainty from the burette. 2. Repeat the titration until at least three results are concordant (within 0.10 cm³) and calculate a mean to reduce random error.',
        },
    ],

    flashcards: [
        // Subtopic 1: Unit 1 and 2 practical methods
        {
            id: 'fc-t3A-1',
            front: 'What is Core Practical 1?',
            back: 'Core Practical 1 measures the molar volume of a gas at room temperature and pressure. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g). The H₂ volume is measured using a gas syringe, then molar volume is calculated. Expected value ≈ 24 dm³ mol⁻¹.',
            topic: 'Core Practical 1'
        },
        {
            id: 'fc-t3A-2',
            front: 'What is Core Practical 2?',
            back: 'Core Practical 2 measures enthalpy change by calorimetry. The temperature change (ΔT) when an acid reacts with a base or metal with salt solution is measured. Heat energy is calculated using q = mcΔT, then ΔH = -q / moles.',
            topic: 'Core Practical 2'
        },
        {
            id: 'fc-t3A-3',
            front: 'What is the precision of a 50 cm³ burette per reading?',
            back: '±0.05 cm³ per reading. Since a titre requires an initial AND final reading, the total absolute uncertainty is ±0.10 cm³. Always record burette readings to 2 decimal places.',
            topic: 'Apparatus precision'
        },
        {
            id: 'fc-t3A-4',
            front: 'What is the precision of a 25 cm³ pipette?',
            back: '±0.06 cm³. Pipettes deliver a fixed, accurate volume. Record to 1 decimal place (e.g., 25.0 cm³). Always rinse with the solution being measured and fill to the bottom of the meniscus.',
            topic: 'Apparatus precision'
        },
        {
            id: 'fc-t3A-5',
            front: 'What is the precision of an analytical balance?',
            back: '±0.001 g (3 decimal places). Used for accurate mass measurements of solids in mole calculations. Weighing by difference (weighing bottle+solid before and after) gives more accurate transferred mass.',
            topic: 'Apparatus precision'
        },
        {
            id: 'fc-t3A-6',
            front: 'What is the purpose of a reflux condenser?',
            back: 'To heat an organic reaction without losing volatile reactants or products. Water flows through the outer jacket, condensing vapour which returns to the flask. Allows prolonged heating at boiling point.',
            topic: 'Key techniques'
        },
        {
            id: 'fc-t3A-7',
            front: 'What is the purpose of a water bath?',
            back: 'To provide controlled heating without naked flames. Essential for flammable organic solvents (ethanol, diethyl ether). Reduces fire risk and provides even temperature distribution.',
            topic: 'Key techniques'
        },
        // Subtopic 2: Practical planning and risk control
        {
            id: 'fc-t3A-8',
            front: 'Define the three types of variables in a practical investigation.',
            back: '• Independent: The variable you deliberately change\n• Dependent: The variable you measure in response\n• Control: Variables you keep constant to ensure a fair test\n\nOnly changing the independent variable ensures any effect on the dependent variable is valid.',
            topic: 'Variables'
        },
        {
            id: 'fc-t3A-9',
            front: 'What are the 8 components of a detailed practical plan?',
            back: '1. Aim (what you are determining)\n2. Hypothesis/prediction (what you expect)\n3. Variables (independent, dependent, control)\n4. Apparatus and materials (list with quantities and precision)\n5. Method (numbered, step-by-step procedure)\n6. Risk assessment (hazard, risk, control measure)\n7. Data collection table (correct headings)\n8. Repeats (state 3+ for reliability)',
            topic: 'Practical planning'
        },
        {
            id: 'fc-t3A-10',
            front: 'What must a risk assessment include for full marks?',
            back: '• Specific hazard identified (e.g., corrosive, flammable, toxic)\n• Risk level stated (severity × likelihood)\n• Specific control measure linked to each hazard (e.g., nitrile gloves, fume cupboard)\n• Avoid vague answers like "be careful" without specific measures.',
            topic: 'Risk assessment'
        },
        {
            id: 'fc-t3A-11',
            front: 'How do you ensure a fair test in practical work?',
            back: '• Change only ONE variable (the independent variable)\n• Keep all other variables constant (control variables)\n• Use the same apparatus throughout\n• Calibrate instruments before use\n• Perform at least 3 repeats\n• Calculate a mean and identify anomalous results',
            topic: 'Fair test'
        },
        {
            id: 'fc-t3A-12',
            front: 'Describe the steps to prepare a standard solution accurately.',
            back: '1. Calculate mass needed: mass = c × V × Mr\n2. Weigh solid accurately on analytical balance\n3. Dissolve in small volume of distilled water in beaker\n4. Transfer quantitatively to volumetric flask (rinse beaker 3×)\n5. Make up to graduation mark with distilled water (dropping pipette near mark)\n6. Stopper and invert 10-15 times to mix\n7. Label with concentration, solute, date',
            topic: 'Standard solution'
        },
        // Subtopic 3: Observation and data recording
        {
            id: 'fc-t3A-13',
            front: 'What makes a qualitative observation precise?',
            back: '• Describe initial AND final state\n• Use correct chemical language\n• Be specific (e.g., "colourless → orange-brown" not "goes orange")\n• Include rate information (e.g., "rapidly evolved")\n• For "no change", explicitly state this',
            topic: 'Qualitative observations'
        },
        {
            id: 'fc-t3A-14',
            front: 'List the gas tests and their positive results.',
            back: '• H₂ (hydrogen): squeaky pop with lit splint\n• O₂ (oxygen): glowing splint relights\n• CO₂ (carbon dioxide): limewater turns milky/cloudy\n• Cl₂ (chlorine): damp litmus turns red then bleaches white\n• NH₃ (ammonia): damp red litmus turns blue\n• SO₂ (sulfur dioxide): acidified K₂Cr₂O₇ turns orange to green',
            topic: 'Gas tests'
        },
        {
            id: 'fc-t3A-15',
            front: 'What are the rules for setting up a results table?',
            back: '• Column headings: quantity / unit (never units in body)\n• Independent variable in first column, dependent in others\n• Include columns for repeats AND a mean\n• All values in a column have same decimal places\n• Draw ruled lines with a ruler',
            topic: 'Results tables'
        },
        {
            id: 'fc-t3A-16',
            front: 'What is an anomalous result and what should you do with it?',
            back: 'An anomalous result (outlier) lies significantly outside the pattern of other data. It should be:\n• Identified (circled on graph, flagged in table)\n• Excluded from mean calculation\n• A possible cause suggested\n• Repeated if time allows\n\nCommon cause: misreading, spillage, contamination',
            topic: 'Anomalous results'
        },
        {
            id: 'fc-t3A-17',
            front: 'To how many decimal places should you record different instruments?',
            back: '• Burette: always 2 d.p. (e.g., 24.10)\n• Pipette: 1 d.p. (e.g., 25.0)\n• Measuring cylinder: 0 or 1 d.p. (e.g., 25 cm³)\n• Analytical balance: 3 d.p. (e.g., 1.234 g)\n• Thermometer (±0.5 °C): 1 d.p. (e.g., 23.5 °C)',
            topic: 'Decimal places'
        },
        // Subtopic 4: Graphing and significant figures
        {
            id: 'fc-t3A-18',
            front: 'What are the rules for plotting a graph correctly?',
            back: '1. Label axes with quantity AND unit\n2. Independent variable on x-axis, dependent on y-axis\n3. Scale uses >½ grid, linear and easy to read\n4. Plot points as small crosses (×), not blobs\n5. Draw smooth best-fit line (not point-to-point zigzag)\n6. Circle anomalous points, exclude from line\n7. Only include (0,0) if valid data point',
            topic: 'Graphing rules'
        },
        {
            id: 'fc-t3A-19',
            front: 'How do you calculate the gradient of a best-fit line?',
            back: 'Gradient = Δy / Δx = (y₂ - y₁) / (x₂ - x₁)\n\nKey points:\n• Use coordinates READ FROM THE BEST-FIT LINE\n• Draw a large triangle (≥½ line length)\n• Larger triangle = smaller reading error\n• Units = unit of y ÷ unit of x',
            topic: 'Gradient calculation'
        },
        {
            id: 'fc-t3A-20',
            front: 'What are the significant figure rules?',
            back: '1. All non-zero digits are significant\n2. Zeros BETWEEN non-zero digits are significant\n3. Leading zeros are NOT significant\n4. Trailing zeros after decimal ARE significant\n5. Ambiguous trailing zeros in whole numbers—use standard form\n\nCalculation rules:\n• × and ÷: match FEWEST s.f.\n• + and -: match FEWEST decimal places\n• Round only FINAL answer',
            topic: 'Significant figures'
        },
        {
            id: 'fc-t3A-21',
            front: 'What is the correct format for standard form?',
            back: 'A × 10ⁿ where 1 ≤ A < 10 and n is an integer.\n\nExamples:\n• 6.02 × 10²³ (Avogadro constant)\n• 2.35 × 10⁻³ (0.00235)\n• 2.4 × 10⁴ (24000)',
            topic: 'Standard form'
        },
        {
            id: 'fc-t3A-22',
            front: 'What are the essential unit conversions for A-level chemistry?',
            back: '• cm³ → dm³: divide by 1000\n• dm³ → cm³: multiply by 1000\n• °C → K: add 273\n• K → °C: subtract 273\n• kJ → J: multiply by 1000\n• J → kJ: divide by 1000\n• g → kg: divide by 1000\n• atm → Pa: multiply by 101325\n• kPa → Pa: multiply by 1000',
            topic: 'Unit conversions'
        },
        // Subtopic 5: Method evaluation and uncertainty
        {
            id: 'fc-t3A-23',
            front: 'What is the difference between random and systematic errors?',
            back: 'Random error:\n• Unpredictable scatter in data\n• Reduces precision\n• Reduced by repeating and averaging\n\nSystematic error:\n• Consistent offset in one direction\n• Reduces accuracy\n• NOT reduced by repeating\n• Fixed by calibration or method change',
            topic: 'Error types'
        },
        {
            id: 'fc-t3A-24',
            front: 'What are accuracy, precision, reliability and validity?',
            back: 'Accuracy: closeness to TRUE value\nPrecision: closeness of REPEATS to each other (small spread)\nReliability: consistency when repeated (by same or different person)\nValidity: experiment measures what it claims to measure (correct variables controlled)',
            topic: 'Key terms'
        },
        {
            id: 'fc-t3A-25',
            front: 'What is the formula for percentage error?',
            back: '% error = (|experimental value - accepted value| ÷ accepted value) × 100\n\nMeasures accuracy (closeness to true value). Negative results are converted to positive using absolute value. A smaller % error indicates a more accurate result.',
            topic: 'Percentage error'
        },
        {
            id: 'fc-t3A-26',
            front: 'What is the formula for percentage uncertainty?',
            back: '% uncertainty = (absolute uncertainty ÷ measured value) × 100\n\nQuantifies significance of instrument error relative to reading size.\n\nFor burette: total uncertainty = 2 × 0.05 cm³ = 0.10 cm³\nLarger measurements = lower % uncertainty.',
            topic: 'Percentage uncertainty'
        },
        {
            id: 'fc-t3A-27',
            front: 'What are common titration errors and their effects?',
            back: '• Air bubble in jet releases → titre too HIGH (random/systematic)\n• Not rinsing burette with titrant → titre too HIGH (systematic)\n• Overshooting endpoint → titre too HIGH (random)\n• Wrong indicator chosen → endpoint ≠ equivalence (systematic)\n• Reading above meniscus → inaccurate (random)',
            topic: 'Titration errors'
        },
        {
            id: 'fc-t3A-28',
            front: 'What strategies reduce experimental uncertainty?',
            back: '1. Use more PRECISE equipment (3 d.p. balance vs 2 d.p.)\n2. Increase measurement SIZE (larger mass, larger titre)\n3. Repeat measurements and calculate mean\n4. Calibrate equipment before use\n5. Improve method (e.g., lid on calorimeter)\n\nTotal % uncertainty = sum of all individual % uncertainties',
            topic: 'Reducing uncertainty'
        },
        // Subtopic 6: Practical reasoning in new contexts
        {
            id: 'fc-t3A-29',
            front: 'What makes a conclusion valid?',
            back: 'A valid conclusion:\n• Is SUPPORTED by the data collected\n• References specific numerical values or trends\n• Acknowledges limitations and uncertainties\n• Distinguishes correlation from causation\n• States whether hypothesis is supported or refuted\n• Does NOT over-generalise beyond data',
            topic: 'Valid conclusions'
        },
        {
            id: 'fc-t3A-30',
            front: 'How do you explain unexpected results in exams?',
            back: '1. Check for SYSTEMATIC errors first:\n   - Was apparatus calibrated?\n   - Is there a consistent offset?\n2. Check if METHOD was valid (did it measure intended quantity?)\n3. Look for UNCONTROLLED variables\n4. Check ASSUMPTIONS (reaction complete? gas ideal? equilibrium reached?)\n5. Consider if "expected" value is reliable\n\nAlways suggest a specific cause.',
            topic: 'Unexpected results'
        },
        {
            id: 'fc-t3A-31',
            front: 'What should you consider when suggesting further investigations?',
            back: '• Extend RANGE of independent variable\n• Use MORE values to improve trend reliability\n• Investigate a RELATED variable (keep others constant)\n• Test at different T, concentration, or catalyst\n• Use more PRECISE method to reduce uncertainty\n• Always explain WHY—what question would it answer?',
            topic: 'Further investigations'
        },
        {
            id: 'fc-t3A-32',
            front: 'Give an example of transferring titration skills to an unfamiliar context.',
            back: 'Back titration to find CaCO₃ in antacid:\n• Same principle: c = n/V\n• Add EXCESS known acid to antacid\n• Titrate UNREACTED acid with standard alkali\n• Subtract reacted moles from initial moles\n• Find moles of CaCO₃, then mass\n• Calculates % purity\n\nSame titration skill, new context.',
            topic: 'Skill transfer'
        },
    ],
};
