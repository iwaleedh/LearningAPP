// AL Chemistry — Unit 6, Topic 6A: Practical Skills II
// Covers all 6 subtopics: Unit 4 and 5 practical methods, Advanced planning and controls,
// Qualitative tests for ions and gases, Organic functional-group tests,
// Data handling and uncertainty, Practical reasoning in new contexts

export const exercises_chemistry_6_6A = {

  // ─── MCQ (~30 questions) ────────────────────────────────────────────────────
  mcq: [
    // Unit 4 and 5 practical methods (5 questions)
    {
      id: 'mcq-t6A-1',
      stem: 'In a redox titration, which indicator is most commonly used for the reaction between potassium manganate(VII) and iron(II) ions?',
      options: ['Phenolphthalein', 'Methyl orange', 'No indicator needed', 'Bromothymol blue'],
      correctAnswer: 2,
      rationale: 'No indicator is needed for KMnO₄ titrations because the purple permanganate ion acts as its own indicator. It is reduced from purple MnO₄⁻ to colourless Mn²⁺, so the endpoint is when the purple colour persists.',
      topic: 'Unit 4 and 5 Practical Methods',
    },
    {
      id: 'mcq-t6A-2',
      stem: 'What is the purpose of adding a few drops of concentrated sulfuric acid during a preparation of an organic compound by distillation?',
      options: ['To act as a catalyst', 'To remove water and drive equilibrium forward', 'To increase boiling point', 'To neutralise the product'],
      correctAnswer: 1,
      rationale: 'Concentrated H₂SO₄ is hygroscopic and removes water from the reaction mixture. According to Le Chatelier\'s principle, removing a product (water) shifts the equilibrium to the right, increasing yield of the desired organic product.',
      topic: 'Unit 4 and 5 Practical Methods',
    },
    {
      id: 'mcq-t6A-3',
      stem: 'When measuring the rate of a reaction by collecting gas, which apparatus is most suitable for measuring gas volume at room temperature and pressure?',
      options: ['Gas syringe', 'Measuring cylinder inverted over water', 'Eudiometer tube', 'Burette'],
      correctAnswer: 0,
      rationale: 'A gas syringe is the most suitable apparatus because it gives direct volume readings with good accuracy, avoids issues with gas solubility in water, and allows continuous monitoring of gas production.',
      topic: 'Unit 4 and 5 Practical Methods',
    },
    {
      id: 'mcq-t6A-4',
      stem: 'In a calorimetry experiment to determine enthalpy of neutralisation, which procedure minimises heat loss?',
      options: ['Use a beaker without lid', 'Add water to acid quickly', 'Use a polystyrene cup with lid and stirrer', 'Perform the reaction in a glass beaker'],
      correctAnswer: 2,
      rationale: 'A polystyrene cup with lid acts as a good insulator (low thermal conductivity) and prevents heat loss to surroundings. The lid also prevents heat loss by evaporation. A stirrer ensures uniform temperature.',
      topic: 'Unit 4 and 5 Practical Methods',
    },
    {
      id: 'mcq-t6A-5',
      stem: 'When determining the activation energy of a reaction, which data must be collected at multiple temperatures?',
      options: ['Mass of products formed', 'Initial rate of reaction', 'Final equilibrium position', 'Colour change time'],
      correctAnswer: 1,
      rationale: 'To determine activation energy using the Arrhenius equation (k = Ae^(-Ea/RT)), you need rate constants (k) at different temperatures. The rate constant can be found from the initial rate of reaction, typically using concentration-time or volume-time data.',
      topic: 'Unit 4 and 5 Practical Methods',
    },

    // Advanced planning and controls (5 questions)
    {
      id: 'mcq-t6A-6',
      stem: 'When planning an experiment to determine the order of reaction with respect to a reactant, which variable must be kept constant?',
      options: ['The concentration of the reactant being investigated', 'The concentration of all other reactants', 'The reaction time', 'The order of reaction'],
      correctAnswer: 1,
      rationale: 'To determine the order with respect to one reactant, the concentrations of all other reactants must be kept constant (in large excess). This ensures any change in rate is solely due to changes in the concentration of the reactant being studied.',
      topic: 'Advanced Planning and Controls',
    },
    {
      id: 'mcq-t6A-7',
      stem: 'What is the purpose of a control variable in an experiment?',
      options: ['To ensure the experiment produces expected results', 'To keep conditions unchanged so that the effect of the independent variable can be measured', 'To provide a reference point for comparison', 'To eliminate all sources of error'],
      correctAnswer: 1,
      rationale: 'Control variables are kept constant throughout the experiment so that any observed effect on the dependent variable can be attributed to changes in the independent variable alone. This ensures the validity of the experimental conclusions.',
      topic: 'Advanced Planning and Controls',
    },
    {
      id: 'mcq-t6A-8',
      stem: 'In an experiment to determine the rate equation, which method gives the most accurate initial rate?',
      options: ['Tangent method at t = 0', 'Clock method with starch-iodine indicator', 'Measuring volume after 30 seconds', 'Taking concentration after 10 seconds'],
      correctAnswer: 0,
      rationale: 'Drawing a tangent to the concentration-time graph at t = 0 gives the instantaneous initial rate, which is most accurate for determining rate orders. The clock method gives an average rate over a time interval, which may include side reactions.',
      topic: 'Advanced Planning and Controls',
    },
    {
      id: 'mcq-t6A-9',
      stem: 'Why should a reaction mixture be stirred continuously in a calorimetry experiment?',
      options: ['To increase the reaction rate', 'To ensure uniform temperature distribution', 'To prevent formation of a precipitate', 'To increase heat transfer to surroundings'],
      correctAnswer: 1,
      rationale: 'Continuous stirring ensures uniform temperature throughout the reaction mixture. Without stirring, hot spots may form locally, and the thermometer may not record the true average temperature of the solution, leading to inaccurate enthalpy calculations.',
      topic: 'Advanced Planning and Controls',
    },
    {
      id: 'mcq-t6A-10',
      stem: 'When investigating the effect of temperature on reaction rate, which piece of equipment is essential for accurate temperature control?',
      options: ['Measuring cylinder', 'Thermostated water bath', 'Stopwatch', 'Conical flask'],
      correctAnswer: 1,
      rationale: 'A thermostated water bath maintains a constant temperature throughout the experiment, ensuring that the reaction mixture remains at the desired temperature. This is crucial because reaction rates are highly temperature-dependent (Arrhenius equation).',
      topic: 'Advanced Planning and Controls',
    },

    // Qualitative tests for ions and gases (6 questions)
    {
      id: 'mcq-t6A-11',
      stem: 'What is the result of adding aqueous silver nitrate followed by dilute ammonia to a solution containing chloride ions?',
      options: ['White precipitate, soluble in dilute ammonia', 'Cream precipitate, insoluble in dilute ammonia', 'Yellow precipitate, soluble in dilute ammonia', 'No precipitate forms'],
      correctAnswer: 0,
      rationale: 'Silver chloride (AgCl) forms a white precipitate with AgNO₃. Unlike AgBr and AgI, AgCl is soluble in dilute ammonia due to formation of [Ag(NH₃)₂]⁺ complex. This distinguishes chloride from bromide and iodide.',
      topic: 'Qualitative Tests for Ions and Gases',
    },
    {
      id: 'mcq-t6A-12',
      stem: 'Which test is used to identify sulphate ions (SO₄²⁻) in aqueous solution?',
      options: ['Add silver nitrate', 'Add barium chloride in acidified solution', 'Add sodium hydroxide', 'Add lead(II) nitrate'],
      correctAnswer: 1,
      rationale: 'Barium chloride (BaCl₂) added to an acidified solution containing SO₄²⁻ produces a white precipitate of barium sulphate (BaSO₄). The solution is acidified (with dilute HCl) to prevent precipitation of barium carbonate or barium phosphate which also form white precipitates.',
      topic: 'Qualitative Tests for Ions and Gases',
    },
    {
      id: 'mcq-t6A-13',
      stem: 'What gas is produced when a carbonate reacts with dilute hydrochloric acid, and how is it identified?',
      options: ['Hydrogen - squeaky pop test', 'Oxygen - glowing splint relights', 'Carbon dioxide - turns limewater cloudy', 'Sulfur dioxide - smell of burning matches'],
      correctAnswer: 2,
      rationale: 'Carbonates react with dilute acid to produce carbon dioxide (CO₂): CO₃²⁻ + 2H⁺ → CO₂ + H₂O. The CO₂ is confirmed by passing it through limewater (Ca(OH)₂), which turns milky/cloudy due to formation of CaCO₃ precipitate.',
      topic: 'Qualitative Tests for Ions and Gases',
    },
    {
      id: 'mcq-t6A-14',
      stem: 'Which flame colour is characteristic of potassium ions (K⁺)?',
      options: ['Crimson red', 'Lilac', 'Green', 'Yellow-orange'],
      correctAnswer: 1,
      rationale: 'Potassium ions produce a lilac flame. Calcium produces brick red, copper(II) produces green, and sodium produces intense yellow-orange. Cobalt glass may be used to filter out the yellow sodium interference.',
      topic: 'Qualitative Tests for Ions and Gases',
    },
    {
      id: 'mcq-t6A-15',
      stem: 'How can you distinguish between solutions containing Cu²⁺ and Fe²⁺ ions using sodium hydroxide?',
      options: ['Both give blue precipitates', 'Cu²⁺ gives blue precipitate, Fe²⁺ gives green precipitate', 'Cu²⁺ gives green precipitate, Fe²⁺ gives brown precipitate', 'Both give brown precipitates'],
      correctAnswer: 1,
      rationale: 'Cu²⁺ ions with NaOH give a blue precipitate of Cu(OH)₂. Fe²⁺ ions with NaOH give a green precipitate of Fe(OH)₂, which oxidises to brown Fe(OH)₃ on standing. The different colours allow the ions to be distinguished.',
      topic: 'Qualitative Tests for Ions and Gases',
    },
    {
      id: 'mcq-t6A-16',
      stem: 'What is observed when ammonium ions (NH₄⁺) are heated with sodium hydroxide solution?',
      options: ['White precipitate', 'Pungent gas that turns moist red litmus blue', 'Brown gas', 'Colourless gas with no effect on litmus'],
      correctAnswer: 1,
      rationale: 'NH₄⁺ + OH⁻ → NH₃ + H₂O. Ammonia gas is produced, which has a characteristic pungent smell and turns moist red litmus paper blue (indicating it is a base). This test distinguishes ammonium ions from other cations.',
      topic: 'Qualitative Tests for Ions and Gases',
    },

    // Organic functional-group tests (6 questions)
    {
      id: 'mcq-t6A-17',
      stem: 'What is the result of adding 2,4-dinitrophenylhydrazine (2,4-DNPH) to a solution containing an aldehyde?',
      options: ['Blue colour develops', 'Orange-yellow precipitate forms', 'Gas is evolved', 'Solution becomes colourless'],
      correctAnswer: 1,
      rationale: '2,4-DNPH reacts with carbonyl compounds (aldehydes and ketones) to form orange-yellow crystalline precipitates (hydrazones). This test identifies the presence of a carbonyl group (C=O) but does not distinguish between aldehydes and ketones.',
      topic: 'Organic Functional-Group Tests',
    },
    {
      id: 'mcq-t6A-18',
      stem: 'Which reagent is used to distinguish between aldehydes and ketones, and what is the positive result for an aldehyde?',
      options: ['2,4-DNPH - orange precipitate', 'Tollens\' reagent - silver mirror', 'Bromine water - decolourisation', 'Sodium hydroxide - effervescence'],
      correctAnswer: 1,
      rationale: 'Tollens\' reagent (ammoniacal silver nitrate) is reduced by aldehydes to metallic silver, forming a silver mirror on the test tube. Ketones do not react. This distinguishes aldehydes from ketones (both give positive 2,4-DNPH test).',
      topic: 'Organic Functional-Group Tests',
    },
    {
      id: 'mcq-t6A-19',
      stem: 'What happens when bromine water is added to an alkene?',
      options: ['Orange colour persists - no reaction', 'Orange colour decolourises - addition reaction', 'White precipitate forms', 'Green colour develops'],
      correctAnswer: 1,
      rationale: 'Bromine water is decolourised by alkenes due to electrophilic addition across the C=C double bond, forming a colourless dibromoalkane. This test distinguishes alkenes (unsaturated) from alkanes (saturated), which do not decolourise bromine water.',
      topic: 'Organic Functional-Group Tests',
    },
    {
      id: 'mcq-t6A-20',
      stem: 'How can you distinguish between a primary alcohol and a tertiary alcohol using acidified potassium dichromate(VI)?',
      options: ['Both turn orange to green', 'Primary turns orange to green, tertiary no change', 'Primary no change, tertiary turns orange to green', 'Both turn green to orange'],
      correctAnswer: 1,
      rationale: 'Acidified K₂Cr₂O₇ is an oxidising agent that turns orange to green when reduced. Primary alcohols are oxidised (via aldehydes) to carboxylic acids, causing the colour change. Tertiary alcohols cannot be oxidised, so no colour change occurs.',
      topic: 'Organic Functional-Group Tests',
    },
    {
      id: 'mcq-t6A-21',
      stem: 'Which test identifies the presence of a carboxylic acid functional group?',
      options: ['Bromine water test', 'Carbonate test - effervescence with CO₂', 'Tollens\' test - silver mirror', '2,4-DNPH - orange precipitate'],
      correctAnswer: 1,
      rationale: 'Carboxylic acids react with carbonates (e.g., Na₂CO₃) to produce carbon dioxide gas: RCOOH + CO₃²⁻ → RCOO⁻ + CO₂ + H₂O. The effervescence of CO₂ (tested with limewater) confirms the presence of a carboxylic acid group.',
      topic: 'Organic Functional-Group Tests',
    },
    {
      id: 'mcq-t6A-22',
      stem: 'What is observed when aqueous bromine is added to phenol?',
      options: ['No reaction', 'White precipitate of 2,4,6-tribromophenol forms', 'Orange colour persists', 'Gas evolved'],
      correctAnswer: 1,
      rationale: 'Phenol reacts rapidly with bromine water to form a white precipitate of 2,4,6-tribromophenol. This reaction occurs without a catalyst because the -OH group activates the benzene ring towards electrophilic substitution. The bromine water is decolourised.',
      topic: 'Organic Functional-Group Tests',
    },

    // Data handling and uncertainty (5 questions)
    {
      id: 'mcq-t6A-23',
      stem: 'A burette reading is recorded as 24.50 cm³. What is the absolute uncertainty in this reading?',
      options: ['±0.05 cm³', '±0.10 cm³', '±0.50 cm³', '±0.01 cm³'],
      correctAnswer: 0,
      rationale: 'A burette can be read to the nearest 0.05 cm³ (half of the smallest division, which is 0.1 cm³). Therefore, the absolute uncertainty is ±0.05 cm³. This is because the final digit (0 in 24.50) is an estimate.',
      topic: 'Data Handling and Uncertainty',
    },
    {
      id: 'mcq-t6A-24',
      stem: 'When calculating the percentage uncertainty of a result obtained by subtracting two values, how should the uncertainties be combined?',
      options: ['Add the absolute uncertainties', 'Add the percentage uncertainties', 'Multiply the absolute uncertainties', 'Ignore the smaller uncertainty'],
      correctAnswer: 0,
      rationale: 'For addition or subtraction, absolute uncertainties are added. If A = 25.0 ± 0.1 and B = 20.0 ± 0.1, then (A - B) = 5.0 ± (0.1 + 0.1) = 5.0 ± 0.2. Only for multiplication/division do percentage uncertainties add.',
      topic: 'Data Handling and Uncertainty',
    },
    {
      id: 'mcq-t6A-25',
      stem: 'A student measures a mass three times: 2.35 g, 2.38 g, 2.32 g. What is the mean value and how should it be expressed with the correct uncertainty?',
      options: ['2.35 ± 0.03 g', '2.35 ± 0.06 g', '2.35 ± 0.01 g', '2.35 ± 0.30 g'],
      correctAnswer: 0,
      rationale: 'Mean = (2.35 + 2.38 + 2.32) ÷ 3 = 2.35 g. The range is 2.38 - 2.32 = 0.06 g. Uncertainty = range ÷ 2 = 0.03 g. Result: 2.35 ± 0.03 g. This shows the spread of the repeated measurements.',
      topic: 'Data Handling and Uncertainty',
    },
    {
      id: 'mcq-t6A-26',
      stem: 'When plotting a graph, the independent variable should be plotted on which axis?',
      options: ['Always on the y-axis', 'Always on the x-axis', 'Either axis', 'On the axis with the larger scale'],
      correctAnswer: 1,
      rationale: 'The independent variable (the one you control or change) is plotted on the x-axis. The dependent variable (the one you measure) is plotted on the y-axis. This convention allows for consistent interpretation of gradients and relationships.',
      topic: 'Data Handling and Uncertainty',
    },
    {
      id: 'mcq-t6A-27',
      stem: 'What is the purpose of drawing a line of best fit on a scatter graph?',
      options: ['To connect all data points', 'To show the general trend and minimise systematic error', 'To eliminate outliers', 'To calculate the mean of y-values'],
      correctAnswer: 1,
      rationale: 'A line of best fit shows the overall relationship between variables and helps identify the trend. It should be drawn to pass through the maximum number of points with equal numbers on either side, minimising random error. Outliers can be identified as points far from the line.',
      topic: 'Data Handling and Uncertainty',
    },

    // Practical reasoning in new contexts (3 questions)
    {
      id: 'mcq-t6A-28',
      stem: 'In an investigation of the rate of reaction between sodium thiosulphate and hydrochloric acid, the time for the cross to disappear is measured. If the concentration of thiosulphate is doubled, what happens to the time?',
      options: ['Time is halved (rate doubles)', 'Time doubles (rate halves)', 'Time decreases fourfold', 'Time remains the same'],
      correctAnswer: 0,
      rationale: 'If the reaction is first order with respect to thiosulphate, doubling concentration doubles the rate. Since rate ∝ 1/time, if rate doubles, time is halved. The time for the precipitate of sulphur to obscure the cross decreases.',
      topic: 'Practical Reasoning in New Contexts',
    },
    {
      id: 'mcq-t6A-29',
      stem: 'A student measures the enthalpy change of neutralisation but obtains a value less exothermic than the literature value. What is the most likely reason?',
      options: ['Systematic error - heat loss to surroundings', 'Random error - parallax error in burette reading', 'Using a thermometer with wrong range', 'Adding acid to base instead of base to acid'],
      correctAnswer: 0,
      rationale: 'Heat loss to the surroundings is the main systematic error in calorimetry experiments. Even with insulation, some heat escapes, making the measured enthalpy change less exothermic than the true value. This is a systematic error, not random.',
      topic: 'Practical Reasoning in New Contexts',
    },
    {
      id: 'mcq-t6A-30',
      stem: 'When using a colorimeter to measure the concentration of a coloured solution, why is it necessary to use a blank?',
      options: ['To calibrate the zero absorbance reading', 'To increase the colour intensity', 'To remove air bubbles', 'To ensure the cuvette is clean'],
      correctAnswer: 0,
      rationale: 'A blank (usually the solvent without the coloured species) is used to zero the colorimeter. This accounts for absorbance due to the solvent and cuvette, ensuring that measured absorbance is due only to the coloured species being investigated.',
      topic: 'Practical Reasoning in New Contexts',
    },
  ],

  // ─── Fill-Blank (~15 questions) ──────────────────────────────────────────────
  fillblank: [
    // Unit 4 and 5 practical methods
    {
      id: 'fb-t6A-1',
      stem: 'Complete the sentence about redox titrations.',
      template: 'In a redox titration between potassium manganate(VII) and iron(II) ions, the purple MnO₄⁻ ion is reduced to __BLANK__ ions.',
      blanks: [
        { answer: 'colourless Mn²⁺' },
      ],
      rationale: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. The purple permanganate is reduced to colourless manganese(II) ions, which is why no indicator is needed - the purple colour disappearing marks the endpoint.',
    },
    {
      id: 'fb-t6A-2',
      stem: 'Complete the sentence about calorimetry.',
      template: 'The equation for calculating enthalpy change in a calorimetry experiment is q = __BLANK__.',
      blanks: [
        { answer: 'mcΔT' },
      ],
      rationale: 'q = mcΔT, where q is heat energy transferred, m is mass of solution, c is specific heat capacity (4.18 J g⁻¹ K⁻¹ for water), and ΔT is temperature change. This assumes all heat is absorbed by the solution.',
    },
    // Advanced planning and controls
    {
      id: 'fb-t6A-3',
      stem: 'Complete the sentence about rate determination.',
      template: 'To determine the order of reaction with respect to one reactant, the __BLANK__ must be kept in large excess.',
      blanks: [
        { answer: 'other reactants' },
      ],
      rationale: 'Keeping other reactants in large excess ensures their concentrations remain effectively constant during the reaction. Any change in rate is then solely due to changes in the reactant whose order is being investigated.',
    },
    {
      id: 'fb-t6A-4',
      stem: 'Complete the sentence about temperature control.',
      template: 'A __BLANK__ is used to maintain constant temperature when investigating the effect of temperature on reaction rate.',
      blanks: [
        { answer: 'thermostated water bath' },
      ],
      rationale: 'A thermostated water bath maintains a constant temperature throughout the experiment, essential for accurate rate measurements since reaction rates are highly temperature-sensitive.',
    },
    // Qualitative tests for ions and gases
    {
      id: 'fb-t6A-5',
      stem: 'Complete the sentence about carbonate testing.',
      template: 'When a carbonate reacts with dilute acid, the gas produced turns __BLANK__ cloudy.',
      blanks: [
        { answer: 'limewater' },
      ],
      rationale: 'Carbon dioxide produced reacts with calcium hydroxide (limewater) to form a white precipitate of calcium carbonate: CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. This confirms CO₂ presence.',
    },
    {
      id: 'fb-t6A-6',
      stem: 'Complete the sentence about sulphate testing.',
      template: 'Sulphate ions produce a __BLANK__ precipitate with barium chloride in acidified solution.',
      blanks: [
        { answer: 'white' },
      ],
      rationale: 'Ba²⁺ + SO₄²⁻ → BaSO₄(s). Barium sulphate forms a white precipitate that is insoluble in dilute acids. The solution is acidified to prevent precipitation of carbonates and phosphates.',
    },
    {
      id: 'fb-t6A-7',
      stem: 'Complete the sentence about halide testing.',
      template: 'Bromide ions with silver nitrate give a __BLANK__ precipitate that is insoluble in dilute ammonia.',
      blanks: [
        { answer: 'cream' },
      ],
      rationale: 'AgBr is cream-coloured and insoluble in dilute ammonia (unlike AgCl which dissolves). This helps distinguish bromide from chloride and iodide (yellow AgI, insoluble in ammonia).',
    },
    // Organic functional-group tests
    {
      id: 'fb-t6A-8',
      stem: 'Complete the sentence about carbonyl testing.',
      template: '2,4-Dinitrophenylhydrazine produces an __BLANK__ precipitate with aldehydes and ketones.',
      blanks: [
        { answer: 'orange-yellow' },
      ],
      rationale: 'The 2,4-DNPH reagent reacts with the C=O group to form a hydrazone derivative. These crystalline orange-yellow precipitates confirm the presence of a carbonyl functional group.',
    },
    {
      id: 'fb-t6A-9',
      stem: 'Complete the sentence about Tollens\' test.',
      template: 'Aldehydes reduce Tollens\' reagent to produce a __BLANK__ on the test tube.',
      blanks: [
        { answer: 'silver mirror' },
      ],
      rationale: 'Tollens\' reagent contains [Ag(NH₃)₂]⁺. Aldehydes reduce Ag⁺ to metallic silver which deposits as a shiny mirror on the glass. Ketones do not react.',
    },
    {
      id: 'fb-t6A-10',
      stem: 'Complete the sentence about alkene testing.',
      template: 'Alkenes decolourise __BLANK__ due to electrophilic addition.',
      blanks: [
        { answer: 'bromine water' },
      ],
      rationale: 'The C=C double bond undergoes electrophilic addition with Br₂, converting the orange Br₂ to colourless dibromoalkane. Saturated compounds (alkanes) do not react.',
    },
    // Data handling and uncertainty
    {
      id: 'fb-t6A-11',
      stem: 'Complete the sentence about burette readings.',
      template: 'A burette can be read to the nearest __BLANK__.',
      blanks: [
        { answer: '0.05 cm³' },
      ],
      rationale: 'Burettes have 0.1 cm³ divisions, so readings are estimated to half a division (0.05 cm³). This is the absolute uncertainty in a single burette reading.',
    },
    {
      id: 'fb-t6A-12',
      stem: 'Complete the sentence about uncertainty addition.',
      blanks: [
        { answer: 'absolute' },
      ],
      rationale: 'For addition and subtraction operations, absolute uncertainties are added: (A ± a) ± (B ± b) = (A ± B) ± (a + b). Only for multiplication/division do we add percentage uncertainties.',
    },
    {
      id: 'fb-t6A-13',
      stem: 'Complete the sentence about percentage uncertainty.',
      template: 'Percentage uncertainty is calculated as (absolute uncertainty ÷ __BLANK__) × 100%.',
      blanks: [
        { answer: 'measured value' },
      ],
      rationale: '% uncertainty = (uncertainty / value) × 100. For example, 25.0 ± 0.1 has % uncertainty = (0.1/25.0) × 100 = 0.4%. This allows comparison of uncertainties across different scales.',
    },
    // Practical reasoning
    {
      id: 'fb-t6A-14',
      stem: 'Complete the sentence about heat loss.',
      template: 'The main systematic error in calorimetry experiments is __BLANK__ to the surroundings.',
      blanks: [
        { answer: 'heat loss' },
      ],
      rationale: 'Despite insulation, heat is lost to the surroundings during calorimetry. This makes measured enthalpy changes less exothermic (or less endothermic) than the true values. Using a polystyrene cup with lid minimises this.',
    },
    {
      id: 'fb-t6A-15',
      stem: 'Complete the sentence about colorimetry.',
      template: 'A colorimeter measures the __BLANK__ of light passing through a coloured solution.',
      blanks: [
        { answer: 'absorbance' },
      ],
      rationale: 'The colorimeter measures absorbance (A) which is related to concentration by Beer-Lambert Law (A = εcl). A blank is used to zero the instrument before measurements.',
    },
  ],

  // ─── Drag-Drop (~10 questions) ────────────────────────────────────────────────
  dragdrop: [
    // Qualitative tests - halide ions
    {
      id: 'dd-t6A-1',
      stem: 'Sort the silver halide precipitates by their colour and solubility in dilute ammonia.',
      categories: ['White precipitate, soluble', 'Cream precipitate, insoluble', 'Yellow precipitate, insoluble'],
      items: [
        { text: 'AgCl (silver chloride)', category: 'White precipitate, soluble' },
        { text: 'AgBr (silver bromide)', category: 'Cream precipitate, insoluble' },
        { text: 'AgI (silver iodide)', category: 'Yellow precipitate, insoluble' },
      ],
    },
    // Flame test colours
    {
      id: 'dd-t6A-2',
      stem: 'Match each metal ion with its characteristic flame colour.',
      categories: ['Crimson red', 'Lilac', 'Green', 'Yellow-orange', 'Brick red'],
      items: [
        { text: 'Lithium (Li⁺)', category: 'Crimson red' },
        { text: 'Potassium (K⁺)', category: 'Lilac' },
        { text: 'Copper(II) (Cu²⁺)', category: 'Green' },
        { text: 'Sodium (Na⁺)', category: 'Yellow-orange' },
        { text: 'Calcium (Ca²⁺)', category: 'Brick red' },
      ],
    },
    // Oxidation states and reagents
    {
      id: 'dd-t6A-3',
      stem: 'Sort the oxidation state changes in redox titrations.',
      categories: ['Reduction (gain electrons)', 'Oxidation (lose electrons)'],
      items: [
        { text: 'MnO₄⁻ → Mn²⁺', category: 'Reduction (gain electrons)' },
        { text: 'Cr₂O₇²⁻ → Cr³⁺', category: 'Reduction (gain electrons)' },
        { text: 'Fe²⁺ → Fe³⁺', category: 'Oxidation (lose electrons)' },
        { text: 'I⁻ → I₂', category: 'Oxidation (lose electrons)' },
        { text: 'S₂O₃²⁻ → S₄O₆²⁻', category: 'Oxidation (lose electrons)' },
      ],
    },
    // Organic reagents and observations
    {
      id: 'dd-t6A-4',
      stem: 'Match each reagent with its positive test result.',
      categories: ['Orange-yellow precipitate', 'Silver mirror', 'White precipitate', 'Decolourisation', 'Effervescence'],
      items: [
        { text: '2,4-DNPH reagent', category: 'Orange-yellow precipitate' },
        { text: 'Tollens\' reagent (with aldehyde)', category: 'Silver mirror' },
        { text: 'BaCl₂ with SO₄²⁻ (acidified)', category: 'White precipitate' },
        { text: 'Bromine water with alkene', category: 'Decolourisation' },
        { text: 'Na₂CO₃ with carboxylic acid', category: 'Effervescence' },
      ],
    },
    // Alcohol classification and oxidation
    {
      id: 'dd-t6A-5',
      stem: 'Sort the alcohols by their reaction with acidified K₂Cr₂O₇.',
      categories: ['Turns orange to green (oxidised)', 'No colour change (not oxidised)'],
      items: [
        { text: 'Primary alcohol', category: 'Turns orange to green (oxidised)' },
        { text: 'Secondary alcohol', category: 'Turns orange to green (oxidised)' },
        { text: 'Tertiary alcohol', category: 'No colour change (not oxidised)' },
        { text: 'Aldehyde', category: 'Turns orange to green (oxidised)' },
        { text: 'Ketone', category: 'No colour change (not oxidised)' },
      ],
    },
    // Common laboratory glassware
    {
      id: 'dd-t6A-6',
      stem: 'Sort the glassware by its primary use in analytical chemistry.',
      categories: ['Volume measurement', 'Titration endpoint', 'Heating/mixing', 'Separation'],
      items: [
        { text: 'Burette', category: 'Volume measurement' },
        { text: 'Pipette', category: 'Volume measurement' },
        { text: 'Volumetric flask', category: 'Volume measurement' },
        { text: 'Conical flask', category: 'Titration endpoint' },
        { text: 'Round-bottom flask', category: 'Heating/mixing' },
        { text: 'Separating funnel', category: 'Separation' },
      ],
    },
    // Gas tests
    {
      id: 'dd-t6A-7',
      stem: 'Match each gas with its identification test.',
      categories: ['Turns limewater cloudy', 'Relights glowing splint', 'Pops/squeaky pop', 'Bleaches damp litmus', 'Turns acidified K₂Cr₂O₇ green'],
      items: [
        { text: 'Carbon dioxide (CO₂)', category: 'Turns limewater cloudy' },
        { text: 'Oxygen (O₂)', category: 'Relights glowing splint' },
        { text: 'Hydrogen (H₂)', category: 'Pops/squeaky pop' },
        { text: 'Chlorine (Cl₂)', category: 'Bleaches damp litmus' },
        { text: 'Sulfur dioxide (SO₂)', category: 'Turns acidified K₂Cr₂O₇ green' },
      ],
    },
    // Ion identification - anions
    {
      id: 'dd-t6A-8',
      stem: 'Sort the anions by their precipitation with AgNO₃.',
      categories: ['White precipitate', 'Cream precipitate', 'Yellow precipitate', 'No precipitate'],
      items: [
        { text: 'Chloride (Cl⁻)', category: 'White precipitate' },
        { text: 'Bromide (Br⁻)', category: 'Cream precipitate' },
        { text: 'Iodide (I⁻)', category: 'Yellow precipitate' },
        { text: 'Nitrate (NO₃⁻)', category: 'No precipitate' },
        { text: 'Sulphate (SO₄²⁻)', category: 'No precipitate' },
      ],
    },
    // Cation tests with NaOH
    {
      id: 'dd-t6A-9',
      stem: 'Match each cation with its NaOH precipitate colour and solubility in excess NaOH.',
      categories: ['White precipitate, dissolves in excess', 'Blue precipitate, insoluble', 'Green precipitate, insoluble', 'Reddish-brown precipitate, insoluble'],
      items: [
        { text: 'Aluminium (Al³⁺)', category: 'White precipitate, dissolves in excess' },
        { text: 'Zinc (Zn²⁺)', category: 'White precipitate, dissolves in excess' },
        { text: 'Copper(II) (Cu²⁺)', category: 'Blue precipitate, insoluble' },
        { text: 'Iron(II) (Fe²⁺)', category: 'Green precipitate, insoluble' },
        { text: 'Iron(III) (Fe³⁺)', category: 'Reddish-brown precipitate, insoluble' },
      ],
    },
    // Organic classification
    {
      id: 'dd-t6A-10',
      stem: 'Sort organic compounds by their reactivity with bromine water.',
      categories: ['Decolourises bromine water', 'No reaction with bromine water'],
      items: [
        { text: 'Alkene', category: 'Decolourises bromine water' },
        { text: 'Phenol', category: 'Decolourises bromine water' },
        { text: 'Alkane', category: 'No reaction with bromine water' },
        { text: 'Alcohol', category: 'No reaction with bromine water' },
        { text: 'Carboxylic acid', category: 'No reaction with bromine water' },
        { text: 'Aldehyde', category: 'No reaction with bromine water' },
      ],
    },
  ],

  // ─── Sequence (~8 questions) ───────────────────────────────────────────────────
  sequence: [
    {
      id: 'seq-t6A-1',
      stem: 'Put the steps for a redox titration using potassium manganate(VII) in the correct order:',
      steps: [
        'Rinse the burette with potassium manganate(VII) solution and fill it',
        'Record the initial burette reading',
        'Pipette a known volume of the reducing agent into the conical flask',
        'Add dilute sulfuric acid to acidify the solution in the conical flask',
        'Run the manganate(VII) solution into the flask while swirling',
        'Stop when the first permanent pink colour appears and record the final reading',
        'Repeat the titration until concordant results are obtained',
      ],
    },
    {
      id: 'seq-t6A-2',
      stem: 'Put the steps for testing for a halide ion in the correct order:',
      steps: [
        'Dissolve the unknown solid in dilute nitric acid',
        'Add a few drops of silver nitrate solution',
        'Observe the colour of the precipitate formed',
        'Add dilute ammonia solution dropwise',
        'Observe whether the precipitate dissolves',
        'Identify the halide based on colour and solubility',
      ],
    },
    {
      id: 'seq-t6A-3',
      stem: 'Put the steps for performing a flame test in the correct order:',
      steps: [
        'Clean the platinum or nichrome wire in concentrated hydrochloric acid',
        'Hold the wire in a Bunsen flame until no colour is observed',
        'Dip the wire in the unknown sample solution',
        'Place the wire in the edge of the Bunsen flame',
        'Observe and record the colour of the flame',
      ],
    },
    {
      id: 'seq-t6A-4',
      stem: 'Put the steps for a calorimetry experiment to determine enthalpy of neutralisation in order:',
      steps: [
        'Measure a known volume of acid into the polystyrene cup and record the initial temperature',
        'Measure an equal volume of alkali in a separate container',
        'Add the alkali to the acid and stir continuously with the thermometer',
        'Record the maximum temperature reached',
        'Calculate the temperature change ΔT',
        'Use q = mcΔT to calculate the enthalpy change',
      ],
    },
    {
      id: 'seq-t6A-5',
      stem: 'Put the steps for identifying an organic unknown in the correct order:',
      steps: [
        'Carry out physical examination (state, colour, odour)',
        'Perform solubility tests in water and organic solvents',
        'Test with 2,4-DNPH to check for carbonyl group',
        'If positive, use Tollens\' reagent to distinguish aldehyde from ketone',
        'Test with bromine water to check for C=C double bond or phenol',
        'Test with acidified K₂Cr₂O₇ to check for oxidisable groups',
        'Combine all observations to identify the functional group',
      ],
    },
    {
      id: 'seq-t6A-6',
      stem: 'Put the steps for using a colorimeter in the correct order:',
      steps: [
        'Select an appropriate wavelength (complementary colour to solution)',
        'Fill a cuvette with blank solution and place in the colorimeter',
        'Zero the instrument (set absorbance to zero)',
        'Fill a clean cuvette with the test solution',
        'Place the test cuvette in the colorimeter and record absorbance',
        'Repeat for different concentrations to plot a calibration curve',
      ],
    },
    {
      id: 'seq-t6A-7',
      stem: 'Put the steps for a distillation setup in the correct order:',
      steps: [
        'Set up the distillation flask, condenser, and receiving flask',
        'Add anti-bumping granules to the distillation flask',
        'Heat the flask using a Bunsen burner or heating mantle',
        'Collect the distillate at the boiling point of the desired component',
        'Monitor the thermometer to track the temperature',
        'Stop heating when the temperature rises above the desired boiling point',
      ],
    },
    {
      id: 'seq-t6A-8',
      stem: 'Put the steps for determining the rate equation from initial rates in order:',
      steps: [
        'Measure the initial rate at different concentrations of reactant A',
        'Plot a graph of initial rate against concentration of A',
        'Determine the order with respect to A from the graph shape',
        'Repeat with different concentrations of reactant B (keeping A constant)',
        'Determine the order with respect to B from the second set of data',
        'Combine orders and find the rate constant from experimental data',
      ],
    },
  ],

  // ─── Keyword Check (~12 questions) ────────────────────────────────────────────
  keyword: [
    // Qualitative tests
    {
      id: 'kw-t6A-1',
      stem: 'Describe the test and observation that confirms the presence of carbonate ions in an unknown solid. [2 marks]',
      marks: 2,
      keywords: ['acid', 'effervescence', 'carbon dioxide', 'limewater', 'cloudy', 'bubbles'],
      modelAnswer: 'Add dilute hydrochloric acid to the solid. Carbonate ions react to produce carbon dioxide gas, observed as effervescence (bubbles). The gas turns limewater cloudy, confirming CO₂ is produced: CO₃²⁻ + 2H⁺ → CO₂ + H₂O.',
    },
    {
      id: 'kw-t6A-2',
      stem: 'Explain how you would distinguish between samples containing chloride ions and bromide ions. [3 marks]',
      marks: 3,
      keywords: ['silver nitrate', 'white', 'cream', 'precipitate', 'ammonia', 'soluble', 'insoluble'],
      modelAnswer: 'Add aqueous silver nitrate to both samples. Chloride produces a white precipitate of AgCl which is soluble in dilute ammonia. Bromide produces a cream precipitate of AgBr which is insoluble in dilute ammonia. The colour and solubility differences allow distinction.',
    },
    {
      id: 'kw-t6A-3',
      stem: 'Describe the test for sulphate ions in solution. [2 marks]',
      marks: 2,
      keywords: ['barium chloride', 'white precipitate', 'acidified', 'dilute acid', 'insoluble'],
      modelAnswer: 'Add barium chloride solution to the acidified sample. A white precipitate of barium sulphate forms if sulphate ions are present: Ba²⁺ + SO₄²⁻ → BaSO₄(s). The solution is acidified to prevent precipitation of carbonates and phosphates which also give white precipitates.',
    },
    // Organic tests
    {
      id: 'kw-t6A-4',
      stem: 'Describe a chemical test that would distinguish between an aldehyde and a ketone. [3 marks]',
      marks: 3,
      keywords: ['tollens', 'silver mirror', 'reducing', 'ammoniacal silver nitrate', 'no reaction', 'oxidised'],
      modelAnswer: 'Use Tollens\' reagent (ammoniacal silver nitrate). The aldehyde will reduce Ag⁺ to metallic silver, producing a silver mirror on the test tube. The ketone shows no reaction as it cannot be oxidised. Alternatively, Fehling\'s solution turns brick red with aldehydes but remains blue with ketones.',
    },
    {
      id: 'kw-t6A-5',
      stem: 'Explain how you would confirm the presence of a C=C double bond in an unknown organic compound. [2 marks]',
      marks: 2,
      keywords: ['bromine water', 'decolourises', 'orange', 'colourless', 'addition', 'alkene'],
      modelAnswer: 'Add bromine water (orange solution) to the compound. If a C=C bond is present, the bromine adds across the double bond and the solution becomes colourless (decolourises). This electrophilic addition reaction distinguishes alkenes from saturated compounds.',
    },
    {
      id: 'kw-t6A-6',
      stem: 'Describe how you would test for the presence of a carboxylic acid group in an organic compound. [2 marks]',
      marks: 2,
      keywords: ['carbonate', 'effervescence', 'carbon dioxide', 'sodium carbonate', 'bubbles'],
      modelAnswer: 'Add sodium carbonate solution to the compound. Effervescence (bubbling) is observed as carboxylic acids react to produce carbon dioxide gas: RCOOH + CO₃²⁻ → RCOO⁻ + CO₂ + H₂O. The gas can be confirmed with limewater turning cloudy.',
    },
    {
      id: 'kw-t6A-7',
      stem: 'Describe the test for phenol and explain why it reacts differently from benzene. [3 marks]',
      marks: 3,
      keywords: ['bromine water', 'white precipitate', 'no catalyst', 'activates', 'hydroxyl', 'electrophilic'],
      modelAnswer: 'Add bromine water to phenol. A white precipitate of 2,4,6-tribromophenol forms immediately and the bromine water is decolourised. This occurs without a catalyst because the -OH group activates the benzene ring towards electrophilic substitution. Benzene requires a FeBr₃ catalyst for bromination.',
    },
    // Rate and kinetics
    {
      id: 'kw-t6A-8',
      stem: 'Explain how you would determine the order of reaction with respect to a reactant using the initial rate method. [3 marks]',
      marks: 3,
      keywords: ['concentration', 'initial rate', 'graph', 'tangent', 'keep constant', 'excess'],
      modelAnswer: 'Vary the concentration of the reactant while keeping all other reactants in large excess. Measure the initial rate of reaction for each concentration (using tangent to concentration-time graph or clock method). Plot initial rate against concentration: straight line = first order, curve passing through origin = second order, constant rate = zero order.',
    },
    {
      id: 'kw-t6A-9',
      stem: 'Describe a method for measuring the rate of a gas-producing reaction. [2 marks]',
      marks: 2,
      keywords: ['gas syringe', 'volume', 'time', 'mass loss', 'inverted measuring cylinder'],
      modelAnswer: 'Use a gas syringe connected to the reaction vessel to measure the volume of gas produced at regular time intervals. Alternatively, measure the mass loss of the reaction mixture as gas escapes, or collect gas over water in an inverted measuring cylinder and record the volume displaced.',
    },
    // Calorimetry
    {
      id: 'kw-t6A-10',
      stem: 'Describe the procedure for determining the enthalpy of neutralisation using a simple calorimeter. [3 marks]',
      marks: 3,
      keywords: ['polystyrene cup', 'lid', 'temperature', 'stirrer', 'equal volumes', 'q = mcΔT', 'initial', 'maximum'],
      modelAnswer: 'Measure equal volumes of acid and alkali into separate containers. Record the initial temperature of the acid. Add the alkali to the acid in a polystyrene cup with lid and stirrer. Record the maximum temperature reached. Calculate ΔT and use q = mcΔT to find the enthalpy change per mole of water formed.',
    },
    // Uncertainty
    {
      id: 'kw-t6A-11',
      stem: 'A student measures the mass of a substance three times and gets 2.45 g, 2.48 g, and 2.42 g. Calculate the mean and the absolute uncertainty. [3 marks]',
      marks: 3,
      keywords: ['mean', '2.45', 'uncertainty', 'range', '0.06', '±0.03'],
      modelAnswer: 'Mean = (2.45 + 2.48 + 2.42) ÷ 3 = 2.45 g. Range = 2.48 - 2.42 = 0.06 g. Absolute uncertainty = range ÷ 2 = 0.03 g. Result: 2.45 ± 0.03 g.',
    },
    {
      id: 'kw-t6A-12',
      stem: 'Explain how to combine uncertainties when multiplying or dividing measured quantities. [2 marks]',
      marks: 2,
      keywords: ['percentage', 'add', 'fractional', 'uncertainties', 'multiply', 'divide'],
      modelAnswer: 'When multiplying or dividing, add the percentage uncertainties of all quantities. For example, if (25.0 ± 0.1) × (4.0 ± 0.1), the percentage uncertainties are 0.4% and 2.5%, so the result has uncertainty of 0.4% + 2.5% = 2.9%.',
    },
  ],

  // ─── Flashcards (~25 questions) ──────────────────────────────────────────────────
  flashcards: [
    // Unit 4 and 5 practical methods
    {
      id: 'fc-t6A-1',
      front: 'Why is no indicator needed for potassium manganate(VII) titrations?',
      back: 'The purple MnO₄⁻ ion is reduced to colourless Mn²⁺. The first permanent pink colour marks the endpoint, so the solution itself acts as its own indicator.',
      topic: 'Redox Titrations',
    },
    {
      id: 'fc-t6A-2',
      front: 'What is the purpose of adding dilute sulfuric acid before a redox titration?',
      back: 'To acidify the solution. MnO₄⁻ requires acidic conditions to be reduced to Mn²⁺, and the reaction produces Mn²⁺ + H₂O. Without acid, different products form.',
      topic: 'Redox Titrations',
    },
    {
      id: 'fc-t6A-3',
      front: 'What is the equation for calculating heat energy in calorimetry?',
      back: 'q = mcΔT\n• q = heat energy (J)\n• m = mass of solution (g)\n• c = specific heat capacity (4.18 J g⁻¹ K⁻¹ for water)\n• ΔT = temperature change (K)',
      topic: 'Calorimetry',
    },
    {
      id: 'fc-t6A-4',
      front: 'What equipment minimises heat loss in calorimetry experiments?',
      back: 'A polystyrene cup with lid and stirrer. Polystyrene is a good insulator, the lid prevents evaporation losses, and stirring ensures uniform temperature.',
      topic: 'Calorimetry',
    },
    // Qualitative tests - anions
    {
      id: 'fc-t6A-5',
      front: 'How do you test for carbonate ions?',
      back: 'Add dilute acid (HCl). Effervescence occurs as CO₂ gas is produced. Confirm by passing gas through limewater - it turns cloudy: CO₂ + Ca(OH)₂ → CaCO₃(s).',
      topic: 'Anion Tests',
    },
    {
      id: 'fc-t6A-6',
      front: 'Describe the test for sulphate ions.',
      back: 'Add barium chloride to acidified solution. White precipitate of BaSO₄ forms. Acidification prevents carbonate/phosphate interference: Ba²⁺ + SO₄²⁻ → BaSO₄(s).',
      topic: 'Anion Tests',
    },
    {
      id: 'fc-t6A-7',
      front: 'What are the three silver halide precipitates and their properties?',
      back: '• AgCl - white, soluble in dilute ammonia\n• AgBr - cream, insoluble in dilute ammonia\n• AgI - yellow, insoluble in dilute ammonia',
      topic: 'Halide Tests',
    },
    {
      id: 'fc-t6A-8',
      front: 'How do you test for ammonium ions?',
      back: 'Heat with sodium hydroxide solution. Pungent gas (ammonia, NH₃) is produced. It turns moist red litmus blue: NH₄⁺ + OH⁻ → NH₃ + H₂O.',
      topic: 'Cation Tests',
    },
    // Flame tests
    {
      id: 'fc-t6A-9',
      front: 'What are the flame test colours for Li⁺, Na⁺, K⁺, Ca²⁺, and Cu²⁺?',
      back: '• Li⁺ - Crimson red\n• Na⁺ - Yellow-orange\n• K⁺ - Lilac\n• Ca²⁺ - Brick red\n• Cu²⁺ - Green',
      topic: 'Flame Tests',
    },
    // Organic tests
    {
      id: 'fc-t6A-10',
      front: 'What does 2,4-DNPH test for and what is the result?',
      back: 'Tests for carbonyl group (C=O). Orange-yellow precipitate forms with both aldehydes and ketones (hydrazone derivative). Does not distinguish between them.',
      topic: 'Organic Tests',
    },
    {
      id: 'fc-t6A-11',
      front: 'How does Tollens\' reagent distinguish aldehydes from ketones?',
      back: 'Aldehydes reduce [Ag(NH₃)₂]⁺ to metallic silver, forming a silver mirror. Ketones do not react as they cannot be oxidised further.',
      topic: 'Organic Tests',
    },
    {
      id: 'fc-t6A-12',
      front: 'What is the bromine water test for alkenes?',
      back: 'Bromine water (orange) is decolourised by alkenes. Addition occurs across C=C: R-CH=CH-R + Br₂ → R-CHBr-CHBr-R (colourless).',
      topic: 'Organic Tests',
    },
    {
      id: 'fc-t6A-13',
      front: 'How do you distinguish primary, secondary, and tertiary alcohols?',
      back: 'Use acidified K₂Cr₂O₇ (orange → green). Primary and secondary alcohols are oxidised (colour change). Tertiary alcohols are NOT oxidised (no colour change).',
      topic: 'Alcohol Tests',
    },
    {
      id: 'fc-t6A-14',
      front: 'What is the test for carboxylic acids?',
      back: 'Add sodium carbonate. Effervescence occurs as CO₂ is produced: RCOOH + CO₃²⁻ → RCOO⁻ + CO₂ + H₂O. Gas turns limewater cloudy.',
      topic: 'Organic Tests',
    },
    {
      id: 'fc-t6A-15',
      front: 'How does phenol react with bromine water?',
      back: 'Phenol reacts rapidly without catalyst. White precipitate of 2,4,6-tribromophenol forms and bromine water is decolourised. The -OH group activates the ring.',
      topic: 'Organic Tests',
    },
    // Rate determination
    {
      id: 'fc-t6A-16',
      front: 'How do you keep other reactants constant in rate experiments?',
      back: 'Use them in large excess (at least 10× the reactant being studied). Their concentration changes negligibly during the reaction, so rate changes are due only to the reactant of interest.',
      topic: 'Rate Determination',
    },
    {
      id: 'fc-t6A-17',
      front: 'What is the initial rate method for determining reaction order?',
      back: 'Measure initial rate at different concentrations using tangent at t=0 or clock method. Plot rate vs concentration: straight line = 1st order, curved through origin = 2nd order, constant = 0 order.',
      topic: 'Rate Determination',
    },
    {
      id: 'fc-t6A-18',
      front: 'How can you measure the rate of a gas-producing reaction?',
      back: '• Gas syringe - measure volume vs time\n• Mass loss - measure mass decrease as gas escapes\n• Inverted cylinder - collect gas over water',
      topic: 'Rate Measurement',
    },
    // Data handling
    {
      id: 'fc-t6A-19',
      front: 'What is the absolute uncertainty in a burette reading?',
      back: '±0.05 cm³. Burette has 0.1 cm³ divisions, so reading is estimated to half a division.',
      topic: 'Uncertainty',
    },
    {
      id: 'fc-t6A-20',
      front: 'How do you combine uncertainties for addition/subtraction?',
      back: 'Add the absolute uncertainties. If A ± a and B ± b, then (A ± a) ± (B ± b) = (A ± B) ± (a + b).',
      topic: 'Uncertainty',
    },
    {
      id: 'fc-t6A-21',
      front: 'How do you combine uncertainties for multiplication/division?',
      back: 'Add the percentage uncertainties. Convert to percentages, add them, then convert back to absolute if needed.',
      topic: 'Uncertainty',
    },
    {
      id: 'fc-t6A-22',
      front: 'What is the purpose of a line of best fit on a scatter graph?',
      back: 'To show the general trend and relationship between variables. It should minimise the distance to all points and pass through the origin if theoretically justified.',
      topic: 'Data Handling',
    },
    // Practical reasoning
    {
      id: 'fc-t6A-23',
      front: 'Why is a blank used in colorimetry?',
      back: 'To zero the absorbance reading. The blank (solvent without analyte) accounts for absorbance by the solvent and cuvette, ensuring readings are due only to the coloured species.',
      topic: 'Colorimetry',
    },
    {
      id: 'fc-t6A-24',
      front: 'What is the main systematic error in calorimetry experiments?',
      back: 'Heat loss to the surroundings. Even with insulation, some heat escapes, making measured enthalpy changes less exothermic/endothermic than true values.',
      topic: 'Calorimetry Errors',
    },
    {
      id: 'fc-t6A-25',
      front: 'What is the purpose of anti-bumping granules in distillation?',
      back: 'To provide nucleation sites for bubble formation, preventing sudden violent boiling (bumping) that could cause the liquid to splash into the condenser.',
      topic: 'Distillation',
    },
  ],
};
