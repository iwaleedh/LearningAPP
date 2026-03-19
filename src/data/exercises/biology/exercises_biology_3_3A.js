export const exercises_biology_3_3A = {
    mcq: [
        // Subtopic 0: Core Practicals Overview (5 questions)
        {
            id: 'mcq-t3A-1',
            stem: 'Which test is used to detect the presence of reducing sugars in a biological sample?',
            options: [
                'Iodine test',
                'Benedict\'s test',
                'Biuret test',
                'Sudan III test',
            ],
            correctAnswer: 1,
            rationale: 'Benedict\'s test produces an orange-red precipitate when heated with reducing sugars (monosaccharides and some disaccharides). Iodine tests for starch, Biuret for proteins, and Sudan III for lipids.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'mcq-t3A-2',
            stem: 'In an enzyme activity experiment, what is the role of a positive control?',
            options: [
                'To show no reaction occurs without the independent variable',
                'To confirm the method works by producing an expected result',
                'To increase the number of replicates',
                'To identify any contamination in the samples',
            ],
            correctAnswer: 1,
            rationale: 'A positive control contains all components needed to produce a known positive result. It confirms the experimental method is working correctly. A negative control (no active component) shows the baseline without treatment.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'mcq-t3A-3',
            stem: 'Which Core Practical uses iodine solution to detect the presence of starch?',
            options: [
                'Core Practical 1: Benedict\'s sugar test',
                'Core Practical 3: Protein structure denaturation',
                'Core Practical 2: Starch test with iodine',
                'Core Practical 9: Plant antimicrobial assay',
            ],
            correctAnswer: 2,
            rationale: 'Core Practical 2 uses iodine solution, which turns blue-black in the presence of starch due to the formation of an iodine-starch complex. Benedict\'s tests for sugars, not starch.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'mcq-t3A-4',
            stem: 'What does a good hypothesis must be?',
            options: [
                'Complex and detailed to cover all possibilities',
                'Testable, falsifiable, based on scientific reasoning, specific and measurable',
                'Vague enough to avoid being disproven',
                'Always proven to be true before starting the experiment',
            ],
            correctAnswer: 1,
            rationale: 'A hypothesis must be testable (can be experimentally tested), falsifiable (can be disproven), based on existing scientific reasoning, and specific/measurable. Complex or vague hypotheses cannot be properly tested.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'mcq-t3A-5',
            stem: 'In a risk assessment, what is the formula for calculating risk?',
            options: [
                'Risk = Hazard × Control Measure',
                'Risk = Hazard × Likelihood + Severity',
                'Risk = Hazard × Likelihood × Severity',
                'Risk = (Hazard + Likelihood + Severity) ÷ 3',
            ],
            correctAnswer: 2,
            rationale: 'Risk is calculated as Hazard × Likelihood × Severity, with each factor typically scored 1-5. This helps prioritise which hazards require the most urgent attention and control measures.',
            topic: 'Core Practicals 1-9 Overview',
        },

        // Subtopic 1: Experimental Design (5 questions)
        {
            id: 'mcq-t3A-6',
            stem: 'What is the independent variable in an experiment?',
            options: [
                'The factor that is measured and recorded as the outcome',
                'The factor that is deliberately changed by the experimenter',
                'A factor that must be kept constant throughout',
                'The control with no active treatment',
            ],
            correctAnswer: 1,
            rationale: 'The independent variable (IV) is the factor deliberately changed by the experimenter to observe its effect. The dependent variable is what is measured, and control variables are kept constant.',
            topic: 'Experimental Design',
        },
        {
            id: 'mcq-t3A-7',
            stem: 'What is the minimum number of replicates recommended for each treatment in a biology experiment?',
            options: [
                '1 replicate (single measurement)',
                '2 replicates',
                '3 replicates',
                '10 replicates',
            ],
            correctAnswer: 2,
            rationale: 'At least 3 replicates per treatment are recommended to allow calculation of a mean and identification of anomalous results. Five or more replicates are preferred for robust statistical analysis.',
            topic: 'Experimental Design',
        },
        {
            id: 'mcq-t3A-8',
            stem: 'Which action helps reduce selection bias in an experiment?',
            options: [
                'Using the same observer for all measurements',
                'Randomly assigning organisms or samples to treatment groups',
                'Choosing the largest specimens for testing',
                'Increasing the number of dependent variable measurements',
            ],
            correctAnswer: 1,
            rationale: 'Randomisation assigns samples to treatments without bias, ensuring each group has equal chance of receiving any treatment. This prevents selection bias where certain characteristics are systematically overrepresented.',
            topic: 'Experimental Design',
        },
        {
            id: 'mcq-t3A-9',
            stem: 'What is the difference between validity and reliability?',
            options: [
                'Validity is about precision; reliability is about accuracy',
                'Validity means results can be reproduced; reliability means the experiment tests what it claims',
                'Validity means the experiment measures what it claims; reliability means results can be reproduced',
                'Validity and reliability are the same thing',
            ],
            correctAnswer: 2,
            rationale: 'Validity refers to whether the experiment actually measures what it claims to test (controlled variables, correct DV). Reliability refers to whether results can be consistently reproduced (repeats give similar outcomes).',
            topic: 'Experimental Design',
        },
        {
            id: 'mcq-t3A-10',
            stem: 'What is the purpose of a negative control in an experiment?',
            options: [
                'To confirm that the method produces an expected result',
                'To show that no reaction occurs without the independent variable being present',
                'To increase the statistical power of the experiment',
                'To test multiple hypotheses simultaneously',
            ],
            correctAnswer: 1,
            rationale: 'A negative control contains all components except the active independent variable. It shows the baseline response when no treatment is applied, confirming that any observed effect requires the independent variable.',
            topic: 'Experimental Design',
        },

        // Subtopic 2: Measurement and Data (5 questions)
        {
            id: 'mcq-t3A-11',
            stem: 'What is the difference between accuracy and precision?',
            options: [
                'Accuracy means consistent measurements; precision means close to true value',
                'Accuracy means close to true value; precision means consistent measurements',
                'Accuracy and precision are identical terms',
                'Accuracy refers to equipment quality; precision refers to technique',
            ],
            correctAnswer: 1,
            rationale: 'Accuracy is how close a measurement is to the true value. Precision is how consistent repeated measurements are (small range). Measurements can be precise but inaccurate (consistent bias) or accurate but imprecise (wide spread).',
            topic: 'Measurement and Data',
        },
        {
            id: 'mcq-t3A-12',
            stem: 'Which type of error consistently biases results in one direction?',
            options: [
                'Random error',
                'Systematic error',
                'Both random and systematic errors',
                'Neither random nor systematic error',
            ],
            correctAnswer: 1,
            rationale: 'Systematic error causes consistent bias in one direction (e.g., uncalibrated scale always reading too high). It cannot be eliminated by averaging and must be identified and corrected. Random error varies unpredictably.',
            topic: 'Measurement and Data',
        },
        {
            id: 'mcq-t3A-13',
            stem: 'How many significant figures should be reported when measuring length with a ruler marked in 1mm divisions?',
            options: [
                '2 significant figures',
                '3 significant figures (e.g., 12.3cm)',
                '4 significant figures (e.g., 12.34cm)',
                'Unlimited - use all possible decimal places',
            ],
            correctAnswer: 1,
            rationale: 'Significant figures must reflect measurement precision. A 1mm ruler can measure to 0.1mm precision, so results should be reported to 3 significant figures (e.g., 12.3cm), not 4 sig figs which implies unattainable precision.',
            topic: 'Measurement and Data',
        },
        {
            id: 'mcq-t3A-14',
            stem: 'What is the main advantage of using data loggers compared to manual recording?',
            options: [
                'Data loggers are always cheaper than manual methods',
                'Data loggers require no calibration',
                'Data loggers record automatically, reducing human error and enabling rapid sampling',
                'Data loggers cannot measure pH or temperature',
            ],
            correctAnswer: 2,
            rationale: 'Data loggers (electronic sensors) record measurements automatically at set intervals, reducing human error in timing and enabling rapid, high-frequency sampling. They require calibration and have higher initial cost.',
            topic: 'Measurement and Data',
        },
        {
            id: 'mcq-t3A-15',
            stem: 'Why must a pH probe be calibrated before use?',
            options: [
                'To increase the measurement range',
                'To correct systematic errors by checking against known standards',
                'To make the probe more sensitive',
                'Calibration is only necessary for colorimeters',
            ],
            correctAnswer: 1,
            rationale: 'Calibration checks the instrument against known standards (e.g., pH 4, 7, 10 buffer solutions) to identify and correct systematic errors. Without calibration, readings may be consistently biased.',
            topic: 'Measurement and Data',
        },

        // Subtopic 3: Graphing and Data Analysis (5 questions)
        {
            id: 'mcq-t3A-16',
            stem: 'Which graph type is most appropriate for displaying categorical data with continuous measurements?',
            options: [
                'Scatter plot',
                'Line graph',
                'Bar graph',
                'Histogram',
            ],
            correctAnswer: 2,
            rationale: 'Bar graphs are used for categorical variables (distinct categories) with continuous measurements as the bar height. Scatter plots show relationships between two continuous variables. Line graphs show continuous change over time.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'mcq-t3A-17',
            stem: 'What does the gradient (slope) of a line of best fit represent?',
            options: [
                'The variability of the data points',
                'The rate of change of the dependent variable with respect to the independent variable',
                'The intercept value when the independent variable is zero',
                'The total area under the curve',
            ],
            correctAnswer: 1,
            rationale: 'The gradient (Δy/Δx) represents the rate of change: how much the dependent variable changes for each unit change in the independent variable. A steeper gradient indicates a faster rate of change.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'mcq-t3A-18',
            stem: 'What do error bars typically represent on a graph?',
            options: [
                'The range of the independent variable',
                'The total number of measurements',
                'Standard deviation (sample variability) or standard error (precision of mean)',
                'The expected value of the dependent variable',
            ],
            correctAnswer: 2,
            rationale: 'Error bars represent uncertainty: standard deviation (SD) shows spread within a sample, or standard error (SE) shows precision of the mean. Larger error bars indicate greater uncertainty.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'mcq-t3A-19',
            stem: 'When should a data point be considered anomalous?',
            options: [
                'When it is the first measurement recorded',
                'When it is inconsistent with the established trend and cannot be explained',
                'When it is the highest value in the data set',
                'When it is measured by a different person',
            ],
            correctAnswer: 1,
            rationale: 'Anomalous results are inconsistent with the overall trend. Possible causes include measurement error, apparatus malfunction, or true biological variation. They should be investigated, noted, and potentially excluded if confirmed as error.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'mcq-t3A-20',
            stem: 'What does a correlation coefficient of 0 indicate?',
            options: [
                'Perfect positive correlation',
                'Perfect negative correlation',
                'No correlation between the variables',
                'Strong positive correlation',
            ],
            correctAnswer: 2,
            rationale: 'Correlation coefficient (r) ranges from -1 (perfect inverse) to +1 (perfect positive). r = 0 indicates no correlation - the variables do not change together in any pattern.',
            topic: 'Graphing and Data Analysis',
        },

        // Subtopic 4: Uncertainty and Error (5 questions)
        {
            id: 'mcq-t3A-21',
            stem: 'How is absolute uncertainty determined for an analogue measuring instrument?',
            options: [
                'Equal to the smallest division mark',
                'Equal to half the smallest division mark',
                'Equal to twice the smallest division mark',
                'Determined by the manufacturer only',
            ],
            correctAnswer: 1,
            rationale: 'Analogue equipment absolute uncertainty is typically half the smallest graduation mark, as you can estimate between marks but not with perfect precision. Example: 1mm ruler has ±0.5mm uncertainty.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'mcq-t3A-22',
            stem: 'When combining uncertainties for multiplication or division, which rule applies?',
            options: [
                'Add absolute uncertainties',
                'Add percentage uncertainties',
                'Multiply absolute uncertainties',
                'Subtract percentage uncertainties',
            ],
            correctAnswer: 1,
            rationale: 'For multiplication and division, you add the percentage uncertainties. For example, area = length × width, so % uncertainty in area = % uncertainty in length + % uncertainty in width.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'mcq-t3A-23',
            stem: 'Which type of error source refers to natural variation among organisms?',
            options: [
                'Instrumental error',
                'Environmental error',
                'Biological error',
                'Procedural error',
            ],
            correctAnswer: 2,
            rationale: 'Biological error refers to natural variation among organisms (e.g., wild leaves of different ages, genetic differences). This cannot be controlled like instrumental or procedural errors.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'mcq-t3A-24',
            stem: 'Which improvement best addresses the largest source of error if temperature fluctuation is the main problem?',
            options: [
                'Use a more precise stopwatch',
                'Increase the number of replicates',
                'Use a thermostatically controlled water bath instead of a beaker',
                'Measure volume more carefully',
            ],
            correctAnswer: 2,
            rationale: 'Improvements should target the largest error source. If temperature fluctuation is the main cause of error, using an electric water bath with thermostat control directly addresses this problem rather than addressing smaller error sources.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'mcq-t3A-25',
            stem: 'What is the effect of increasing the number of replicates on reliability?',
            options: [
                'Reliability decreases because more data creates confusion',
                'Reliability improves because random errors are averaged out',
                'Reliability is unaffected by number of replicates',
                'Reliability improves only if the sample size is doubled',
            ],
            correctAnswer: 1,
            rationale: 'More replicates reduce the effect of random errors by averaging them out, giving a more precise estimate of the true mean. This improves reliability and enables better statistical analysis.',
            topic: 'Uncertainty and Error',
        },

        // Subtopic 5: Safety and Ethics (5 questions)
        {
            id: 'mcq-t3A-26',
            stem: 'What does COSHH stand for?',
            options: [
                'Committee of Safety for Hazardous Chemicals',
                'Control of Substances Hazardous to Health',
                'Code of Safe Handling Hazards',
                'Chemical Operations Safety Health Handbook',
            ],
            correctAnswer: 1,
            rationale: 'COSHH (Control of Substances Hazardous to Health) is UK law requiring identification and control of hazardous substances in laboratories and workplaces.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'mcq-t3A-27',
            stem: 'Which biosafety level describes organisms that are non-pathogenic and pose minimal risk to healthy individuals?',
            options: [
                'BSL2',
                'BSL1',
                'BSL3',
                'BSL4',
            ],
            correctAnswer: 1,
            rationale: 'BSL1 organisms are non-pathogenic species that pose minimal risk to healthy individuals. These include E. coli K12 (lab strain), Bacillus subtilis, and baker\'s yeast. They are safe for school use.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'mcq-t3A-28',
            stem: 'What is the correct disposal method for biological waste containing microorganisms?',
            options: [
                'Pour down the drain with plenty of water',
                'Place in regular dustbin',
                'Autoclave at 121°C for 15 minutes at 1 atm pressure',
                'Leave in a sealed container for 24 hours',
            ],
            correctAnswer: 2,
            rationale: 'Biological waste must be autoclaved (121°C, 15 min, 1 atm) to kill all organisms including spores before disposal. This renders the waste non-infectious. Chemical waste requires licensed specialist disposal.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'mcq-t3A-29',
            stem: 'When using human cheek cells in a practical, what ethical consideration is required?',
            options: [
                'No special consideration is needed for cheek cells',
                'Informed consent, anonymisation, and confidentiality',
                'Only parental consent is required',
                'No consent needed as cells are not genetic material',
            ],
            correctAnswer: 1,
            rationale: 'Using human samples (cheek cells, blood) requires informed consent from the donor, anonymisation of samples to protect privacy, and confidentiality of any results.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'mcq-t3A-30',
            stem: 'Why should school biology experiments incubate at 25°C rather than 37°C?',
            options: [
                '37°C is too hot for most school equipment',
                'To avoid selecting for human pathogens that grow at body temperature',
                'Most biological reactions occur optimally at room temperature',
                'Energy costs are lower at 25°C',
            ],
            correctAnswer: 1,
            rationale: 'Incubating at 25°C (not human body temperature 37°C) avoids selecting for human pathogens. This is an important safety and biosafety consideration in microbiology practicals.',
            topic: 'Safety and Ethics',
        },
    ],

    fillblank: [
        // Subtopic 0: Core Practicals Overview (3 questions)
        {
            id: 'fb-t3A-1',
            stem: 'Complete about Core Practicals.',
            template: 'Core Practical 1 uses __BLANK__ test to detect reducing sugars, while Core Practical 2 uses iodine to detect the presence of __BLANK__.',
            blanks: [
                { answer: 'Benedict' },
                { answer: 'starch' },
            ],
            rationale: 'Benedict\'s test produces orange-red precipitate with reducing sugars. Iodine solution turns blue-black in the presence of starch.',
        },
        {
            id: 'fb-t3A-2',
            stem: 'Complete about hypothesis characteristics.',
            template: 'A good hypothesis must be testable, __BLANK__, based on scientific reasoning, and specific and __BLANK__.',
            blanks: [
                { answer: 'falsifiable' },
                { answer: 'measurable' },
            ],
            rationale: 'A hypothesis must be testable (can be experimentally tested), falsifiable (can be disproven), based on evidence, and specific/measurable.',
        },
        {
            id: 'fb-t3A-3',
            stem: 'Complete about risk assessment.',
            template: 'Risk is calculated as Hazard × __BLANK__ × Severity. Each factor is typically scored from __BLANK__ to 5.',
            blanks: [
                { answer: 'Likelihood' },
                { answer: '1' },
            ],
            rationale: 'Risk = Hazard × Likelihood × Severity. Each factor is scored 1-5 to help prioritise hazards and appropriate control measures.',
        },

        // Subtopic 1: Experimental Design (2 questions)
        {
            id: 'fb-t3A-4',
            stem: 'Complete about independent and dependent variables.',
            template: 'The __BLANK__ variable is what you change in an experiment, while the __BLANK__ variable is what you measure as the result.',
            blanks: [
                { answer: 'independent' },
                { answer: 'dependent' },
            ],
            rationale: 'Independent variable (IV) is manipulated by the experimenter. Dependent variable (DV) is the measured outcome that responds to changes in the IV.',
        },
        {
            id: 'fb-t3A-5',
            stem: 'Complete about replication.',
            template: 'At least __BLANK__ replicates per treatment are recommended to allow calculation of a mean and identification of __BLANK__ results.',
            blanks: [
                { answer: 'three' },
                { answer: 'anomalous' },
            ],
            rationale: 'Three or more replicates allow calculation of mean and identification of anomalous (inconsistent) results for exclusion or investigation.',
        },

        // Subtopic 2: Measurement and Data (2 questions)
        {
            id: 'fb-t3A-6',
            stem: 'Complete about accuracy and precision.',
            template: '__BLANK__ is how close a measurement is to the true value, while __BLANK__ is how consistent repeated measurements are.',
            blanks: [
                { answer: 'Accuracy' },
                { answer: 'precision' },
            ],
            rationale: 'Accuracy = closeness to true value. Precision = consistency of repeated measurements (small range). Both are needed for good quality data.',
        },
        {
            id: 'fb-t3A-7',
            stem: 'Complete about systematic vs random errors.',
            template: '__BLANK__ error consistently biases results in one direction and cannot be eliminated by averaging. __BLANK__ error varies unpredictably and is reduced by averaging multiple measurements.',
            blanks: [
                { answer: 'Systematic' },
                { answer: 'Random' },
            ],
            rationale: 'Systematic error (e.g., uncalibrated scale) causes consistent bias. Random error varies; averaging multiple measurements reduces its effect.',
        },

        // Subtopic 3: Graphing and Data Analysis (3 questions)
        {
            id: 'fb-t3A-8',
            stem: 'Complete about gradient calculation.',
            template: 'The gradient (slope) of a line of best fit is calculated as __BLANK__ divided by __BLANK__, representing the rate of change.',
            blanks: [
                { answer: 'Δy' },
                { answer: 'Δx' },
            ],
            rationale: 'Gradient = change in y (dependent variable) ÷ change in x (independent variable). This represents the rate: how much y changes per unit of x.',
        },
        {
            id: 'fb-t3A-9',
            stem: 'Complete about correlation coefficient.',
            template: 'The correlation coefficient (r) ranges from __BLANK__ (perfect negative correlation) to +1 (perfect positive correlation), with 0 indicating no __BLANK__.',
            blanks: [
                { answer: '-1' },
                { answer: 'correlation' },
            ],
            rationale: 'Correlation coefficient r: -1 = perfect inverse, +1 = perfect positive, 0 = no correlation. Remember: correlation ≠ causation.',
        },
        {
            id: 'fb-t3A-10',
            stem: 'Complete about graph types.',
            template: '__BLANK__ plots show relationships between two continuous variables, while __BLANK__ graphs are used for categorical data with continuous measurements.',
            blanks: [
                { answer: 'Scatter' },
                { answer: 'bar' },
            ],
            rationale: 'Scatter plots: two continuous variables (e.g., enzyme activity vs temperature). Bar graphs: categorical data (e.g., height of different species) with continuous bar heights.',
        },

        // Subtopic 4: Uncertainty and Error (2 questions)
        {
            id: 'fb-t3A-11',
            stem: 'Complete about percentage uncertainty.',
            template: 'Percentage uncertainty is calculated as (__BLANK__ uncertainty divided by measured value) multiplied by __BLANK__.',
            blanks: [
                { answer: 'absolute' },
                { answer: '100' },
            ],
            rationale: '% uncertainty = (absolute uncertainty ÷ measured value) × 100. This expresses error as a proportion of the measurement.',
        },
        {
            id: 'fb-t3A-12',
            stem: 'Complete about combining uncertainties.',
            template: 'For multiplication or division, add __BLANK__ uncertainties. For addition or subtraction, add __BLANK__ uncertainties.',
            blanks: [
                { answer: 'percentage' },
                { answer: 'absolute' },
            ],
            rationale: 'Multiplication/division: add % uncertainties (e.g., area = length × width). Addition/subtraction: add absolute uncertainties (e.g., change = final - initial).',
        },

        // Subtopic 5: Safety and Ethics (3 questions)
        {
            id: 'fb-t3A-13',
            stem: 'Complete about biosafety levels.',
            template: '__BLANK__ organisms are non-pathogenic and safe for school use, while BSL2-4 require specialist containment and are __BLANK__ for schools.',
            blanks: [
                { answer: 'BSL1' },
                { answer: 'unsuitable' },
            ],
            rationale: 'BSL1 organisms (E. coli K12, yeast, B. subtilis) are safe for schools. BSL2-4 pathogens (MRSA, HIV, tuberculosis) require specialist facilities.',
        },
        {
            id: 'fb-t3A-14',
            stem: 'Complete about biological waste disposal.',
            template: 'Biological waste must be __BLANK__ at 121°C for 15 minutes before disposal to kill all organisms including __BLANK__.',
            blanks: [
                { answer: 'autoclaved' },
                { answer: 'spores' },
            ],
            rationale: 'Autoclaving (121°C, 15 min, 1 atm) kills all living organisms and spores, rendering waste non-infectious before disposal.',
        },
        {
            id: 'fb-t3A-15',
            stem: 'Complete about ethical requirements for human samples.',
            template: 'Using human tissue requires __BLANK__ consent, __BLANK__ of samples, and confidentiality of results.',
            blanks: [
                { answer: 'informed' },
                { answer: 'anonymisation' },
            ],
            rationale: 'Human samples (cheek cells, blood) require donor consent, samples must be anonymised for privacy, and results kept confidential.',
        },
    ],

    dragdrop: [
        // Subtopic 0: Core Practicals Overview (1 question)
        {
            id: 'dd-t3A-1',
            stem: 'Categorise the Core Practicals by the type of test or procedure.',
            categories: ['Biochemical Tests', 'Enzyme Experiments', 'Microscopy/Cell Biology', 'Antimicrobial Assay'],
            items: [
                { text: 'Core Practical 1: Benedict\'s test for reducing sugars', category: 'Biochemical Tests' },
                { text: 'Core Practical 2: Iodine test for starch', category: 'Biochemical Tests' },
                { text: 'Core Practical 3: Protein structure denaturation', category: 'Biochemical Tests' },
                { text: 'Core Practical 4: Enzyme activity (temperature/pH)', category: 'Enzyme Experiments' },
                { text: 'Core Practical 5: Animal cell microscopy', category: 'Microscopy/Cell Biology' },
                { text: 'Core Practical 6: Root tip mitosis', category: 'Microscopy/Cell Biology' },
                { text: 'Core Practical 7: Plant tissue sections', category: 'Microscopy/Cell Biology' },
                { text: 'Core Practical 9: Plant antimicrobial assay', category: 'Antimicrobial Assay' },
            ],
        },

        // Subtopic 1: Experimental Design (2 questions)
        {
            id: 'dd-t3A-2',
            stem: 'Classify the following as Independent, Dependent, or Control variables.',
            categories: ['Independent Variable', 'Dependent Variable', 'Control Variable'],
            items: [
                { text: 'Temperature (10, 20, 30, 40, 50°C)', category: 'Independent Variable' },
                { text: 'Rate of oxygen production (cm³/min)', category: 'Dependent Variable' },
                { text: 'pH kept constant at 7.0', category: 'Control Variable' },
                { text: 'Enzyme concentration', category: 'Control Variable' },
                { text: 'Substrate concentration (0-10 mM)', category: 'Independent Variable' },
                { text: 'Time taken for reaction (seconds)', category: 'Dependent Variable' },
                { text: 'Volume of reaction mixture', category: 'Control Variable' },
            ],
        },
        {
            id: 'dd-t3A-3',
            stem: 'Sort the actions by whether they reduce bias or improve reliability.',
            categories: ['Reduces Bias', 'Improves Reliability'],
            items: [
                { text: 'Random assignment of samples to treatment groups', category: 'Reduces Bias' },
                { text: 'Blind procedure (observer does not know treatment)', category: 'Reduces Bias' },
                { text: 'Multiple observers for consistency', category: 'Reduces Bias' },
                { text: 'Standardised written protocol', category: 'Reduces Bias' },
                { text: 'Conducting 3+ replicates per treatment', category: 'Improves Reliability' },
                { text: 'Calculating mean from repeated measurements', category: 'Improves Reliability' },
                { text: 'Identifying and excluding anomalous results', category: 'Improves Reliability' },
            ],
        },

        // Subtopic 2: Measurement and Data (2 questions)
        {
            id: 'dd-t3A-4',
            stem: 'Categorise the following as Systematic or Random error.',
            categories: ['Systematic Error', 'Random Error'],
            items: [
                { text: 'Uncalibrated scale reading consistently too high', category: 'Systematic Error' },
                { text: 'Slight variations in reaction time between measurements', category: 'Random Error' },
                { text: 'Temperature fluctuations during experiment', category: 'Random Error' },
                { text: 'Parallax error from reading at wrong angle', category: 'Systematic Error' },
                { text: 'Natural biological variation between organisms', category: 'Random Error' },
            ],
        },
        {
            id: 'dd-t3A-5',
            stem: 'Categorise the data measurement methods.',
            categories: ['Data Logger/Sensor', 'Manual Recording', 'Requires Calibration'],
            items: [
                { text: 'pH probe measuring H⁺ concentration', category: 'Data Logger/Sensor' },
                { text: 'Colorimeter measuring light absorbance', category: 'Data Logger/Sensor' },
                { text: 'Oxygen sensor measuring dissolved O₂', category: 'Data Logger/Sensor' },
                { text: 'Temperature sensor recording at intervals', category: 'Data Logger/Sensor' },
                { text: 'Recording volume with measuring cylinder', category: 'Manual Recording' },
                { text: 'Timing with stopwatch', category: 'Manual Recording' },
                { text: 'pH probe (needs buffer calibration)', category: 'Requires Calibration' },
                { text: 'Colorimeter (needs blank calibration)', category: 'Requires Calibration' },
            ],
        },

        // Subtopic 3: Graphing and Data Analysis (2 questions)
        {
            id: 'dd-t3A-6',
            stem: 'Categorise the graph types by when they should be used.',
            categories: ['Continuous vs Continuous', 'Categorical Data', 'Time Series Data', 'Frequency Distribution'],
            items: [
                { text: 'Scatter plot', category: 'Continuous vs Continuous' },
                { text: 'Line graph', category: 'Time Series Data' },
                { text: 'Bar graph', category: 'Categorical Data' },
                { text: 'Histogram', category: 'Frequency Distribution' },
                { text: 'Growth rate vs day', category: 'Time Series Data' },
                { text: 'Height of different plant species', category: 'Categorical Data' },
                { text: 'Enzyme activity vs temperature', category: 'Continuous vs Continuous' },
                { text: 'Seed mass distribution', category: 'Frequency Distribution' },
            ],
        },
        {
            id: 'dd-t3A-7',
            stem: 'Categorise the following by what they show or represent on graphs.',
            categories: ['Represents Uncertainty', 'Represents Trend', 'Represents Rate of Change', 'Represents Frequency'],
            items: [
                { text: 'Line of best fit', category: 'Represents Trend' },
                { text: 'Gradient (slope) of line', category: 'Represents Rate of Change' },
                { text: 'Error bars (SD or SE)', category: 'Represents Uncertainty' },
                { text: 'Histogram bars', category: 'Represents Frequency' },
                { text: 'Correlation coefficient (r)', category: 'Represents Trend' },
                { text: 'Tangent at a point on curve', category: 'Represents Rate of Change' },
                { text: 'Area under curve', category: 'Represents Rate of Change' },
            ],
        },

        // Subtopic 4: Uncertainty and Error (1 question)
        {
            id: 'dd-t3A-8',
            stem: 'Categorise the error sources by type.',
            categories: ['Instrumental Error', 'Environmental Error', 'Biological Error', 'Procedural Error'],
            items: [
                { text: 'Scale precision (smallest division)', category: 'Instrumental Error' },
                { text: 'Thermometer calibration', category: 'Instrumental Error' },
                { text: 'Temperature fluctuations in lab', category: 'Environmental Error' },
                { text: 'Humidity changes during experiment', category: 'Environmental Error' },
                { text: 'Natural variation between wild organisms', category: 'Biological Error' },
                { text: 'Genetic differences between samples', category: 'Biological Error' },
                { text: 'Inconsistent timing between repeats', category: 'Procedural Error' },
                { text: 'Variation in measurement technique', category: 'Procedural Error' },
            ],
        },

        // Subtopic 5: Safety and Ethics (2 questions)
        {
            id: 'dd-t3A-9',
            stem: 'Categorise the biosafety levels by their description.',
            categories: ['BSL1: Minimal Risk', 'BSL2: Moderate Risk', 'BSL3: High Risk', 'BSL4: Extreme Risk'],
            items: [
                { text: 'E. coli K12 (lab strain)', category: 'BSL1: Minimal Risk' },
                { text: 'Bacillus subtilis (soil bacterium)', category: 'BSL1: Minimal Risk' },
                { text: 'Saccharomyces cerevisiae (baker\'s yeast)', category: 'BSL1: Minimal Risk' },
                { text: 'Salmonella species', category: 'BSL2: Moderate Risk' },
                { text: 'MRSA', category: 'BSL2: Moderate Risk' },
                { text: 'Mycobacterium tuberculosis', category: 'BSL3: High Risk' },
                { text: 'HIV', category: 'BSL3: High Risk' },
                { text: 'Ebola virus', category: 'BSL4: Extreme Risk' },
                { text: 'Smallpox virus', category: 'BSL4: Extreme Risk' },
            ],
        },
        {
            id: 'dd-t3A-10',
            stem: 'Categorise the safety and ethical requirements.',
            categories: ['Chemical Safety', 'Biosafety', 'Human Sample Ethics', 'Waste Disposal'],
            items: [
                { text: 'COSHH risk assessment', category: 'Chemical Safety' },
                { text: 'Using fume hoods for volatile chemicals', category: 'Chemical Safety' },
                { text: 'Wearing PPE (gloves, goggles)', category: 'Chemical Safety' },
                { text: 'Using only BSL1 organisms', category: 'Biosafety' },
                { text: 'Aseptic technique (flaming loops)', category: 'Biosafety' },
                { text: 'Incubating at 25°C not 37°C', category: 'Biosafety' },
                { text: 'Informed consent for human samples', category: 'Human Sample Ethics' },
                { text: 'Anonymisation of human tissue data', category: 'Human Sample Ethics' },
                { text: 'Autoclaving biological waste', category: 'Waste Disposal' },
                { text: 'Licensed chemical waste disposal', category: 'Waste Disposal' },
            ],
        },
    ],

    sequence: [
        // Subtopic 0: Core Practicals Overview (1 question)
        {
            id: 'seq-t3A-1',
            stem: 'Put the steps of a Benedict\'s test for reducing sugars in the correct order:',
            steps: [
                'Add Benedict\'s solution to the sample in a test tube',
                'Heat the mixture in a water bath for 5 minutes',
                'Observe the colour change from blue to green/yellow/orange/red',
                'Note the colour of precipitate formed',
                'Interpret the result: blue = no reducing sugars, orange-red = reducing sugars present',
            ],
        },

        // Subtopic 1: Experimental Design (1 question)
        {
            id: 'seq-t3A-2',
            stem: 'Put the experimental design steps in the correct order:',
            steps: [
                'State a clear, testable hypothesis based on scientific reasoning',
                'Identify the independent variable and specify at least 5 values',
                'Identify the dependent variable and how to measure it',
                'Identify control variables and explain how to maintain them constant',
                'Include appropriate positive and negative controls',
                'Specify the minimum number of replicates (3 or more)',
                'Conduct a full risk assessment for the experiment',
            ],
        },

        // Subtopic 2: Measurement and Data (2 questions)
        {
            id: 'seq-t3A-3',
            stem: 'Put the steps for calibrating a pH probe in the correct order:',
            steps: [
                'Prepare standard buffer solutions (pH 4, 7, and 10)',
                'Rinse the pH probe with distilled water',
                'Immerse the probe in the pH 7 buffer solution',
                'Adjust the probe calibration to read 7.0',
                'Verify calibration with pH 4 and pH 10 buffers',
                'Record calibration and begin measurements',
            ],
        },
        {
            id: 'seq-t3A-4',
            stem: 'Put the data quality assessment steps in the correct order:',
            steps: [
                'Take multiple measurements (at least 3 replicates)',
                'Identify any anomalous results inconsistent with trend',
                'Investigate potential causes of anomalies',
                'Exclude confirmed errors from mean calculation',
                'Calculate mean of remaining measurements',
                'Calculate standard deviation to show data spread',
                'Assess overall reliability and validity of results',
            ],
        },

        // Subtopic 3: Graphing and Data Analysis (1 question)
        {
            id: 'seq-t3A-5',
            stem: 'Put the graph drawing steps in the correct order:',
            steps: [
                'Identify which variable is independent and which is dependent',
                'Choose appropriate graph type for the data',
                'Draw X and Y axes using at least 50% of graph grid',
                'Select scales that avoid awkward ratios (like 1 square = 3 units)',
                'Label both axes with quantity and units in brackets',
                'Plot data points as neat crosses (×)',
                'Draw appropriate line: point-to-point or smooth curve of best fit',
                'Add error bars representing standard deviation or standard error',
                'Do not extrapolate beyond the last data point',
            ],
        },

        // Subtopic 4: Uncertainty and Error (1 question)
        {
            id: 'seq-t3A-6',
            stem: 'Put the steps for calculating percentage uncertainty in the correct order:',
            steps: [
                'Identify the smallest division mark on the measuring instrument',
                'Determine absolute uncertainty as half the smallest division',
                'Record the measured value from the experiment',
                'Divide absolute uncertainty by the measured value',
                'Multiply the result by 100 to get percentage uncertainty',
                'Express result with appropriate significant figures',
            ],
        },

        // Subtopic 5: Safety and Ethics (2 questions)
        {
            id: 'seq-t3A-7',
            stem: 'Put the risk assessment steps in the correct order:',
            steps: [
                'Identify all hazards in the experiment (chemical, biological, physical)',
                'Identify who is at risk from each hazard',
                'Assess the likelihood of each hazard occurring (score 1-5)',
                'Assess the severity of harm if hazard occurs (score 1-5)',
                'Calculate risk score as Hazard × Likelihood × Severity',
                'List specific control measures to eliminate, reduce likelihood, or reduce severity',
                'Record and review the risk assessment',
                'Implement all control measures and monitor during experiment',
            ],
        },
        {
            id: 'seq-t3A-8',
            stem: 'Put the biological waste disposal steps in the correct order:',
            steps: [
                'Collect all biological waste in labelled autoclave bags',
                'Ensure bags are sealed and properly labelled',
                'Load waste into autoclave',
                'Set autoclave to 121°C and 1 atmosphere pressure',
                'Run autoclave for minimum 15 minutes',
                'Verify temperature and pressure reached during cycle',
                'Allow bags to cool before handling',
                'Dispose of autoclaved (non-infectious) waste via appropriate route',
            ],
        },
    ],

    keyword: [
        // Subtopic 0: Core Practicals Overview (2 questions)
        {
            id: 'kw-t3A-1',
            stem: 'Describe the characteristics of a good scientific hypothesis. [4 marks]',
            marks: 4,
            keywords: ['testable', 'falsifiable', 'evidence', 'scientific', 'specific', 'measurable', 'prediction'],
            modelAnswer: 'A good hypothesis must be testable (can be investigated experimentally), falsifiable (can be disproven by evidence), based on existing scientific knowledge or reasoning, and specific with measurable outcomes. For example: "If enzyme temperature increases, reaction rate will increase up to the optimum, because enzyme activity depends on molecular kinetic energy."',
        },
        {
            id: 'kw-t3A-2',
            stem: 'Explain the difference between a positive control and a negative control in an experiment. [3 marks]',
            marks: 3,
            keywords: ['positive', 'negative', 'control', 'confirm', 'method', 'baseline', 'expected', 'result', 'treatment'],
            modelAnswer: 'A positive control contains all components needed to produce an expected result, confirming the experimental method works correctly. A negative control contains all components except the active treatment, showing the baseline response when no treatment is applied. Together, controls enable valid comparison against experimental groups.',
        },

        // Subtopic 1: Experimental Design (2 questions)
        {
            id: 'kw-t3A-3',
            stem: 'Distinguish between validity and reliability in experimental science. [4 marks]',
            marks: 4,
            keywords: ['validity', 'reliability', 'reproducible', 'consistent', 'measure', 'hypothesis', 'controlled', 'variables', 'confounding'],
            modelAnswer: 'Validity refers to whether the experiment actually measures what it claims to test. It requires proper control of variables so the hypothesis is addressed. Reliability refers to whether results can be consistently reproduced when the experiment is repeated. An experiment can be reliable but invalid (consistently measuring wrong thing) or valid but unreliable (correct design but inconsistent results). Both are needed for strong conclusions.',
        },
        {
            id: 'kw-t3A-4',
            stem: 'Describe three sources of bias in experiments and explain how each can be reduced. [4 marks]',
            marks: 4,
            keywords: ['bias', 'observer', 'selection', 'procedural', 'randomisation', 'blind', 'standardised', 'double-blind'],
            modelAnswer: 'Observer bias occurs when the experimenter unconsciously influences measurements to fit expectations. Reduced by blind or double-blind procedures where the observer does not know which treatment is being measured. Selection bias occurs when samples are not representative of the population. Reduced by randomisation of treatment assignment. Procedural bias occurs when methods are applied inconsistently. Reduced by standardised written protocols and using the same equipment and operator where possible.',
        },

        // Subtopic 2: Measurement and Data (2 questions)
        {
            id: 'kw-t3A-5',
            stem: 'Explain the difference between systematic and random errors with examples. [4 marks]',
            marks: 4,
            keywords: ['systematic', 'random', 'bias', 'consistent', 'direction', 'unpredictable', 'average', 'calibrate', 'replicate'],
            modelAnswer: 'Systematic error consistently biases results in one direction and cannot be eliminated by averaging. Example: an uncalibrated scale that always reads 1g too high. Must be identified and corrected (e.g., calibrate scale). Random error varies unpredictably and is reduced by averaging multiple measurements and increasing replication. Example: slight variations in reaction time or temperature fluctuations during the experiment.',
        },
        {
            id: 'kw-t3A-6',
            stem: 'Explain why significant figures are important when reporting biological measurements. [3 marks]',
            marks: 3,
            keywords: ['significant', 'figures', 'precision', 'measurement', 'reflect', 'ruler', 'division', 'calculate', 'result'],
            modelAnswer: 'Significant figures reflect the actual precision of a measurement. Reporting too many sig figs implies precision that was not achieved (e.g., 12.34cm from a 1mm ruler). Too few sig figs loses information. When calculating, the final answer should match the least precise measurement. This ensures reported results honestly represent what was actually measured.',
        },

        // Subtopic 3: Graphing and Data Analysis (2 questions)
        {
            id: 'kw-t3A-7',
            stem: 'Explain why correlation does not necessarily imply causation. [3 marks]',
            marks: 3,
            keywords: ['correlation', 'causation', 'confounding', 'variable', 'explains', 'relationship', 'change'],
            modelAnswer: 'Correlation means two variables change together, but this does not prove that one causes the other. A confounding (third) variable may explain the correlation. Example: children\'s height and shoe size both increase with age, but age (not height) causes larger shoe size. Without controlling for age, height and shoe size appear correlated when height does not cause larger feet.',
        },
        {
            id: 'kw-t3A-8',
            stem: 'Describe how you would identify and handle an anomalous result in a practical experiment. [3 marks]',
            marks: 3,
            keywords: ['anomalous', 'inconsistent', 'trend', 'investigate', 'measurement', 'error', 'experimental', 'biological', 'variation', 'exclude', 'include', 'report'],
            modelAnswer: 'First, identify if a result is inconsistent with the overall trend established by other data points. Then investigate possible causes: measurement error (wrong number recorded), experimental error (apparatus malfunction), or true biological variation in that sample. If confirmed as error, exclude from mean calculation and note in report. If due to biological variation, keep the result and explain as expected variation.',
        },

        // Subtopic 4: Uncertainty and Error (2 questions)
        {
            id: 'kw-t3A-9',
            stem: 'Explain how to combine uncertainties when calculating area from length and width measurements. [3 marks]',
            marks: 3,
            keywords: ['percentage', 'uncertainty', 'combine', 'add', 'multiply', 'divide', 'length', 'width', 'area'],
            modelAnswer: 'When calculating area = length × width, you must add the percentage uncertainties. First calculate % uncertainty for length and % uncertainty for width separately. Then add the two percentages together to get the total % uncertainty in the area. For example, if length has 5% uncertainty and width has 10% uncertainty, the area has 15% uncertainty.',
        },
        {
            id: 'kw-t3A-10',
            stem: 'Describe how you would identify and improve the largest source of error in an experiment. [4 marks]',
            marks: 4,
            keywords: ['largest', 'error', 'source', 'rank', 'magnitude', 'improvement', 'target', 'instrumental', 'environmental', 'biological', 'procedural'],
            modelAnswer: 'First, list all error sources: instrumental (scale precision), environmental (temperature, humidity), biological (organism variation), and procedural (timing consistency). Estimate the magnitude of each as absolute or percentage uncertainty. Rank them by size—the largest source dominates overall uncertainty. Then target improvements specifically at the largest error source: for example, if temperature fluctuation is the main problem, use a thermostatically controlled water bath rather than just improving the stopwatch precision.',
        },

        // Subtopic 5: Safety and Ethics (2 questions)
        {
            id: 'kw-t3A-11',
            stem: 'Explain the difference between BSL1 organisms and higher biosafety levels. [3 marks]',
            marks: 3,
            keywords: ['BSL1', 'BSL2', 'BSL3', 'BSL4', 'pathogenic', 'minimal', 'moderate', 'high', 'extreme', 'containment', 'school', 'specialist'],
            modelAnswer: 'BSL1 organisms are non-pathogenic and pose minimal risk to healthy individuals, making them safe for school use. Examples include E. coli K12 (lab strain), Bacillus subtilis, and baker\'s yeast. BSL2 organisms have moderate risk (e.g., Salmonella, MRSA) and require limited access and biological safety cabinets. BSL3-4 organisms (tuberculosis, HIV, Ebola) pose high to extreme risk and require specialist containment facilities not available in schools.',
        },
        {
            id: 'kw-t3A-12',
            stem: 'Describe the ethical considerations when using human tissue in biology practicals. [4 marks]',
            marks: 4,
            keywords: ['informed', 'consent', 'anonymisation', 'confidentiality', 'privacy', 'cheek', 'blood', 'standard', 'precautions', 'sharps', 'disposal'],
            modelAnswer: 'Using human samples (cheek cells, blood) requires informed consent from the donor—participants must understand what is being done and agree voluntarily. Samples must be anonymised so individual donors cannot be identified, protecting genetic privacy. All results must be kept confidential. Additionally, all samples should be treated as potentially infectious using standard precautions (gloves) and safe sharps disposal.',
        },
    ],

    flashcards: [
        // Subtopic 0: Core Practicals Overview (4 cards)
        {
            id: 'fc-t3A-1',
            front: 'What does Benedict\'s test detect?',
            back: 'Reducing sugars (monosaccharides and some disaccharides) — produces orange-red precipitate when heated.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'fc-t3A-2',
            front: 'What does the iodine test detect?',
            back: 'Starch — iodine turns blue-black in the presence of starch due to iodine-starch complex formation.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'fc-t3A-3',
            front: 'What is the role of a positive control?',
            back: 'Contains all components needed to produce an expected result, confirming the experimental method works correctly.',
            topic: 'Core Practicals 1-9 Overview',
        },
        {
            id: 'fc-t3A-4',
            front: 'What makes a hypothesis testable?',
            back: 'A hypothesis is testable if it can be investigated experimentally—there must be a way to gather evidence that could support or disprove it.',
            topic: 'Core Practicals 1-9 Overview',
        },

        // Subtopic 1: Experimental Design (4 cards)
        {
            id: 'fc-t3A-5',
            front: 'What is the independent variable?',
            back: 'The factor deliberately changed by the experimenter. Should test at least 5 different values to establish a reliable trend.',
            topic: 'Experimental Design',
        },
        {
            id: 'fc-t3A-6',
            front: 'What is the dependent variable?',
            back: 'The factor that is measured and recorded as the outcome/response to the independent variable.',
            topic: 'Experimental Design',
        },
        {
            id: 'fc-t3A-7',
            front: 'What is the minimum number of replicates recommended?',
            back: 'At least 3 replicates per treatment to calculate a mean and identify anomalous results. 5+ replicates are preferred for robust statistics.',
            topic: 'Experimental Design',
        },
        {
            id: 'fc-t3A-8',
            front: 'What does randomisation reduce?',
            back: 'Randomisation reduces selection bias by randomly assigning samples to treatment groups, ensuring each group has equal chance of receiving any treatment.',
            topic: 'Experimental Design',
        },

        // Subtopic 2: Measurement and Data (4 cards)
        {
            id: 'fc-t3A-9',
            front: 'What is accuracy?',
            back: 'How close a measurement is to the true value. Affected by systematic errors.',
            topic: 'Measurement and Data',
        },
        {
            id: 'fc-t3A-10',
            front: 'What is precision?',
            back: 'How consistent repeated measurements are (small range). Affected by random errors. High precision = small spread between repeats.',
            topic: 'Measurement and Data',
        },
        {
            id: 'fc-t3A-11',
            front: 'What is systematic error?',
            back: 'Error that consistently biases results in one direction (e.g., uncalibrated scale always reading too high). Cannot be eliminated by averaging; must be identified and corrected.',
            topic: 'Measurement and Data',
        },
        {
            id: 'fc-t3A-12',
            front: 'What is random error?',
            back: 'Error that varies unpredictably (e.g., slight variations in reaction time, temperature fluctuations). Reduced by averaging multiple measurements and increasing replication.',
            topic: 'Measurement and Data',
        },

        // Subtopic 3: Graphing and Data Analysis (5 cards)
        {
            id: 'fc-t3A-13',
            front: 'When would you use a scatter plot?',
            back: 'When showing the relationship between two continuous variables (e.g., enzyme activity vs temperature).',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'fc-t3A-14',
            front: 'When would you use a bar graph?',
            back: 'For categorical data (distinct categories) with continuous measurements as the bar height (e.g., height of different plant species).',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'fc-t3A-15',
            front: 'What does the gradient (Δy/Δx) represent?',
            back: 'The rate of change of the dependent variable with respect to the independent variable. Steeper gradient = faster rate of change.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'fc-t3A-16',
            front: 'What do error bars represent?',
            back: 'Uncertainty: either standard deviation (sample variability) or standard error (precision of the mean). Larger error bars = greater uncertainty.',
            topic: 'Graphing and Data Analysis',
        },
        {
            id: 'fc-t3A-17',
            front: 'What is a correlation coefficient (r) of +1?',
            back: 'Perfect positive correlation—as one variable increases, the other increases in perfect proportion.',
            topic: 'Graphing and Data Analysis',
        },

        // Subtopic 4: Uncertainty and Error (4 cards)
        {
            id: 'fc-t3A-18',
            front: 'What is absolute uncertainty for analogue equipment?',
            back: 'Half of the smallest division mark (e.g., 1mm ruler has ±0.5mm uncertainty).',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'fc-t3A-19',
            front: 'How do you combine uncertainties for multiplication/division?',
            back: 'Add the percentage uncertainties. Example: area = length × width, so % uncertainty in area = % length + % width.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'fc-t3A-20',
            front: 'What is biological error?',
            back: 'Natural variation among organisms (e.g., wild leaves of different ages, genetic differences). Cannot be controlled like instrumental or procedural errors.',
            topic: 'Uncertainty and Error',
        },
        {
            id: 'fc-t3A-21',
            front: 'What should improvements target?',
            back: 'The largest source of error identified. Rank error sources by magnitude and address the biggest one first for greatest impact on reliability.',
            topic: 'Uncertainty and Error',
        },

        // Subtopic 5: Safety and Ethics (4 cards)
        {
            id: 'fc-t3A-22',
            front: 'What does COSHH stand for?',
            back: 'Control of Substances Hazardous to Health — UK law requiring identification and control of hazardous substances.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'fc-t3A-23',
            front: 'What is a BSL1 organism?',
            back: 'Non-pathogenic organism posing minimal risk to healthy individuals. Examples: E. coli K12, Bacillus subtilis, baker\'s yeast. Safe for school use.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'fc-t3A-24',
            front: 'How must biological waste be disposed of?',
            back: 'Autoclaved at 121°C for 15 minutes at 1 atm pressure before disposal to kill all organisms including spores.',
            topic: 'Safety and Ethics',
        },
        {
            id: 'fc-t3A-25',
            front: 'What is required when using human cheek cells?',
            back: 'Informed consent from donor, anonymisation of samples (privacy protection), and confidentiality of all results.',
            topic: 'Safety and Ethics',
        },
    ],
};
