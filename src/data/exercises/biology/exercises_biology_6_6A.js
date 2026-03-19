export const exercises_biology_6_6A = {
    mcq: [
        // Subtopic 0: IA2 Practical Methods (5 questions)
        {
            id: 'mcq-t6A-1',
            stem: 'Which practical technique uses quadrats and transects to investigate plant distribution changes over time?',
            options: [
                'Core Practical 10: Succession',
                'Core Practical 11: Hill Reaction',
                'Core Practical 13: Daphnia Heart Rate',
                'Core Practical 15: Antibiotic Sensitivity',
            ],
            correctAnswer: 0,
            rationale: 'Core Practical 10 (Succession) uses quadrats and transects to monitor how plant species distribution changes across environmental gradients over time, demonstrating ecological succession patterns.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'mcq-t6A-2',
            stem: 'In the Hill Reaction (Core Practical 11), which redox indicator substitutes for NADP to measure the rate of light-dependent photosynthesis?',
            options: [
                'Methylene Blue',
                'DCPIP (2,6-dichlorophenolindophenol)',
                'Iodine Solution',
                'Potassium Permanganate',
            ],
            correctAnswer: 1,
            rationale: 'DCPIP is used in the Hill Reaction because it acts as a hydrogen acceptor like NADP, changing from blue (oxidised) to colourless (reduced) as electrons are passed from chloroplasts.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'mcq-t6A-3',
            stem: 'Which Core Practical is used to investigate the effect of temperature on enzyme activity and Q10 coefficient?',
            options: [
                'Core Practical 14: Gel Electrophoresis',
                'Core Practical 12: Temperature & Enzyme',
                'Core Practical 16: Respirometers',
                'Core Practical 18: Snail Habituation',
            ],
            correctAnswer: 1,
            rationale: 'Core Practical 12 investigates how temperature affects enzyme-catalysed reactions, allowing calculation of Q10 (the rate change for every 10°C temperature rise), demonstrating thermal effects on protein structure.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'mcq-t6A-4',
            stem: 'Which equipment is used to measure tidal volume and calculate Minute Ventilation in Core Practical 17?',
            options: [
                'Respirometer',
                'Manometer',
                'Spirometer',
                'Sphygmomanometer',
            ],
            correctAnswer: 2,
            rationale: 'A spirometer measures tidal volume (air moved in one breath) and allows calculation of Minute Ventilation (tidal volume × breathing rate), which reflects respiratory efficiency during exercise.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'mcq-t6A-5',
            stem: 'What is being measured when observing zones of inhibition in Core Practical 14 (Antibiotic Sensitivity)?',
            options: [
                'Antibiotic concentration in the agar',
                'Bacterial growth rate on the plate',
                'Effectiveness of antibiotics at stopping bacterial growth',
                'Diffusion rate of antibiotics through agar',
            ],
            correctAnswer: 2,
            rationale: 'Zones of inhibition indicate areas where bacterial growth is prevented by antibiotics. Larger zones suggest greater antibiotic effectiveness against that bacterial strain.',
            topic: 'IA2 Practical Methods',
        },

        // Subtopic 1: Experiment Planning (5 questions)
        {
            id: 'mcq-t6A-6',
            stem: 'How many different intervals of the independent variable are typically expected for a reliable trend?',
            options: [
                'At least 3 intervals',
                'At least 5 intervals',
                'Exactly 10 intervals',
                'Only 2 intervals are needed',
            ],
            correctAnswer: 1,
            rationale: 'Using at least 5 different values of the independent variable allows you to establish a clear trend, identify optimum/peak points, and ensure data points are not coincidental.',
            topic: 'Experiment Planning',
        },
        {
            id: 'mcq-t6A-7',
            stem: 'When planning an experiment, what is the minimum number of repeats recommended at each interval to ensure reliability?',
            options: [
                '1 repeat (total 2 measurements)',
                '2 repeats (total 3 measurements)',
                '3 repeats (total 4 measurements)',
                '5 repeats (total 6 measurements)',
            ],
            correctAnswer: 1,
            rationale: 'Repeating measurements at least 3 times allows calculation of a trustworthy mean and identification of anomalous results that deviate significantly from the pattern.',
            topic: 'Experiment Planning',
        },
        {
            id: 'mcq-t6A-8',
            stem: 'Which component of an experimental plan describes WHAT you are measuring and HOW you measure it?',
            options: [
                'Independent Variable',
                'Dependent Variable',
                'Control Variable',
                'Hazard Assessment',
            ],
            correctAnswer: 1,
            rationale: 'The Dependent Variable is what you measure (e.g. rate of reaction, height of plant) and must specify the exact equipment (e.g. colorimeter, ruler) and measurement timeframe.',
            topic: 'Experiment Planning',
        },
        {
            id: 'mcq-t6A-9',
            stem: 'In an experiment to test the effect of temperature on enzyme activity, which statement correctly describes a control variable?',
            options: [
                'Temperature at 10, 20, 30, 40, 50°C',
                'pH kept constant using a buffer solution',
                'Time taken for reaction to complete',
                'Enzyme concentration varied to see effect',
            ],
            correctAnswer: 1,
            rationale: 'A control variable must be kept constant. Using a buffer solution to maintain pH constant while temperature is varied is a correct control. Temperature is the independent variable, not a control.',
            topic: 'Experiment Planning',
        },
        {
            id: 'mcq-t6A-10',
            stem: 'What information must be included in a risk assessment for an experiment?',
            options: [
                'Hazard only',
                'Risk only',
                'Hazard, risk posed, and control measure',
                'Just the name of chemicals used',
            ],
            correctAnswer: 2,
            rationale: 'A complete risk assessment identifies the specific hazard (e.g. hot water, bacteria), the risk it poses (e.g. burns, infection), and the control measure (e.g. use tongs, aseptic technique).',
            topic: 'Experiment Planning',
        },

        // Subtopic 2: Data Processing (5 questions)
        {
            id: 'mcq-t6A-11',
            stem: 'If an experiment measures the time (t) for a reaction to complete, how do you calculate the rate of reaction?',
            options: [
                'Rate = t',
                'Rate = t × 100',
                'Rate = 1/t',
                'Rate = t²',
            ],
            correctAnswer: 2,
            rationale: 'Rate is inversely proportional to time. Converting time to 1/t gives the rate of reaction with appropriate units (e.g. s⁻¹), allowing comparison across different time measurements.',
            topic: 'Data Processing',
        },
        {
            id: 'mcq-t6A-12',
            stem: 'In the magnification formula I = A × M, what does each variable represent?',
            options: [
                'I = Image Size, A = Actual Size, M = Magnification',
                'I = Actual Size, A = Image Size, M = Magnification',
                'I = Magnification, A = Actual Size, M = Image Size',
                'I = Actual Size, A = Magnification, M = Image Size',
            ],
            correctAnswer: 0,
            rationale: 'The formula I = A × M means Image Size = Actual Size × Magnification. Always ensure units match before calculation (usually converting to micrometers).',
            topic: 'Data Processing',
        },
        {
            id: 'mcq-t6A-13',
            stem: 'What does it mean if standard deviation error bars overlap on a bar chart comparing two means?',
            options: [
                'The difference between the means is statistically significant',
                'The difference between the means is NOT statistically significant',
                'The experiment was unreliable',
                'The sample size was too small',
            ],
            correctAnswer: 1,
            rationale: 'Overlapping error bars indicate that the ranges of the two data sets overlap, meaning the difference between means could be due to random chance and is NOT statistically significant.',
            topic: 'Data Processing',
        },
        {
            id: 'mcq-t6A-14',
            stem: 'Which variable is always plotted on the X-axis of a graph?',
            options: [
                'Dependent variable',
                'Independent variable',
                'Control variable',
                'The variable with smaller values',
            ],
            correctAnswer: 1,
            rationale: 'The independent variable (what you change) is always plotted on the X-axis (horizontal). The dependent variable (what you measure) is plotted on the Y-axis (vertical).',
            topic: 'Data Processing',
        },
        {
            id: 'mcq-t6A-15',
            stem: 'What is an important rule for graph scale selection?',
            options: [
                'Use exactly 1 square = 1 unit',
                'Use at least 50% of the provided grid in both directions',
                'Make the scale as large as possible to exaggerate differences',
                'Always start the Y-axis from zero',
            ],
            correctAnswer: 1,
            rationale: 'Using at least 50% of the graph paper in both directions makes data points clearly visible and readable. Awkward scales like 1 square = 3 units should be avoided.',
            topic: 'Data Processing',
        },

        // Subtopic 3: Reliability and Validity (5 questions)
        {
            id: 'mcq-t6A-16',
            stem: 'What is the key difference between reliability and validity?',
            options: [
                'Reliability tests controls; validity tests repeats',
                'Reliability measures consistency; validity measures accuracy to hypothesis',
                'Validity is about equipment precision; reliability is about sample size',
                'There is no difference between them',
            ],
            correctAnswer: 1,
            rationale: 'Reliability refers to whether results can be consistently reproduced (improved by repeats). Validity refers to whether the experiment actually measures what it claims to test (improved by controlling variables).',
            topic: 'Reliability and Validity',
        },
        {
            id: 'mcq-t6A-17',
            stem: 'Which action is a valid improvement for controlling temperature more precisely?',
            options: [
                'Use a Bunsen burner to heat water',
                'Use a beaker of hot water that cools during experiment',
                'Use a thermostatically controlled electric water bath',
                'Record temperature every 10 minutes',
            ],
            correctAnswer: 2,
            rationale: 'An electric water bath maintains a constant set temperature via thermostat, unlike a beaker which constantly cools. This improves validity by keeping the temperature control variable stable.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'mcq-t6A-18',
            stem: 'Which piece of equipment removes subjective human error when judging colour changes in titrations or enzyme assays?',
            options: [
                'Measuring cylinder',
                'Pipette',
                'Colorimeter',
                'Stopwatch',
            ],
            correctAnswer: 2,
            rationale: 'A colorimeter measures light absorption through a solution objectively, giving a numerical reading instead of relying on subjective visual judgement of colour endpoints.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'mcq-t6A-19',
            stem: 'How is reliability improved in an experiment?',
            options: [
                'By identifying more control variables',
                'By conducting more repeats and calculating means',
                'By using more expensive equipment',
                'By reducing the range of the independent variable',
            ],
            correctAnswer: 1,
            rationale: 'Reliability is improved by repeating measurements (at least 3 times per interval) and calculating means. High standard deviation indicates low reliability, which requires more repeats.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'mcq-t6A-20',
            stem: 'What happens to experimental validity if control variables are not properly identified and controlled?',
            options: [
                'Results become unreliable but remain valid',
                'Results become invalid regardless of number of repeats',
                'Results improve because fewer variables are measured',
                'Results are unaffected as long as repeats are done',
            ],
            correctAnswer: 1,
            rationale: 'Without proper control of variables, the experiment does not test the intended hypothesis. Results are INVALID even if many repeats are done. Validity requires tight control of all relevant variables.',
            topic: 'Reliability and Validity',
        },

        // Subtopic 4: Uncertainty (5 questions)
        {
            id: 'mcq-t6A-21',
            stem: 'What is the formula for calculating percentage error?',
            options: [
                '% Error = (Measured Value / Absolute Uncertainty) × 100',
                '% Error = (Absolute Uncertainty / Measured Value) × 100',
                '% Error = Absolute Uncertainty × 100',
                '% Error = Measured Value - Absolute Uncertainty',
            ],
            correctAnswer: 1,
            rationale: 'Percentage error = (Absolute Uncertainty ÷ Measured Value) × 100. This gives the proportional error as a percentage, allowing comparison of measurements with different magnitudes.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'mcq-t6A-22',
            stem: 'When finding a change in mass (final - initial) using a balance, why must the absolute uncertainty be multiplied by 2?',
            options: [
                'Because the balance is twice as sensitive for two readings',
                'Because two separate measurements are taken, each with its own margin of error',
                'Because the mass doubles during the experiment',
                'Because this is a standard rule for all calculations',
            ],
            correctAnswer: 1,
            rationale: 'Finding a difference requires two readings (initial AND final). Each reading has the equipment uncertainty, so total uncertainty = 1 + 1 = 2× equipment uncertainty.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'mcq-t6A-23',
            stem: 'How can you reduce percentage error without buying a more precise balance?',
            options: [
                'Measure smaller masses only',
                'Take only one measurement to avoid combining errors',
                'Measure larger quantities (higher mass values)',
                'Use a balance with fewer decimal places',
            ],
            correctAnswer: 2,
            rationale: 'Percentage error decreases when the measured value is larger (uncertainty ÷ larger number). Measuring 50g has a much smaller % error than measuring 5g on the same balance.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'mcq-t6A-24',
            stem: 'What is the typical absolute uncertainty of analogue measuring equipment?',
            options: [
                'Zero - analogue equipment is perfectly precise',
                'The smallest graduation mark',
                'Half of the smallest graduation mark',
                'Twice the smallest graduation mark',
            ],
            correctAnswer: 2,
            rationale: 'Analogue equipment typically has an absolute uncertainty equal to half the smallest division, as you can estimate between marks but not with perfect precision.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'mcq-t6A-25',
            stem: 'Which of the following is an example of a qualitative error (limitation)?',
            options: [
                'A balance with ±0.01g uncertainty',
                'Difficulty judging the exact endpoint of a colour change',
                'Measuring temperature with a thermometer marked in 0.5°C intervals',
                'Using a pipette with ±0.05mL precision',
            ],
            correctAnswer: 1,
            rationale: 'Qualitative errors cannot be numerically quantified. Judging a colour endpoint by eye is subjective and varies between individuals, creating a qualitative limitation.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },

        // Subtopic 5: Statistical Tests (5 questions)
        {
            id: 'mcq-t6A-26',
            stem: 'Which statistical test is used to compare the means of two different, continuous data sets?',
            options: [
                'Chi-squared test',
                "Spearman's Rank Correlation",
                "Student's t-test",
                'Standard deviation calculation',
            ],
            correctAnswer: 2,
            rationale: 'The Student\'s t-test compares two means from different data sets to determine if the difference between them is statistically significant or due to random chance.',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'mcq-t6A-27',
            stem: 'Which statistical test determines if there is a significant correlation between two variables?',
            options: [
                'Student\'s t-test',
                'Chi-squared test',
                "Spearman's Rank Correlation",
                'Mean calculation',
            ],
            correctAnswer: 2,
            rationale: 'Spearman\'s Rank Correlation tests whether there is a mathematical relationship (correlation) between two variables, giving a correlation coefficient from -1 (perfect negative) to +1 (perfect positive).',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'mcq-t6A-28',
            stem: 'When should the Chi-squared test be used?',
            options: [
                'To compare means of two data sets',
                'To test for correlation between two continuous variables',
                'To compare expected vs observed frequencies in categorical data',
                'To measure the spread of data around a mean',
            ],
            correctAnswer: 2,
            rationale: 'The Chi-squared test is used for categorical (discrete) data where you compare observed frequencies against expected frequencies to see if the difference is significant.',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'mcq-t6A-29',
            stem: 'What does a p-value of 0.05 indicate in statistical testing?',
            options: [
                'Results are 5% correct',
                'There is a 5% probability that results occurred by random chance alone',
                'Results are 95% wrong',
                'There is a 5% chance the null hypothesis is true',
            ],
            correctAnswer: 1,
            rationale: 'p < 0.05 means there is less than a 5% probability that the observed results occurred by random chance alone. If your calculated statistic exceeds the critical value at p=0.05, the result is significant.',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'mcq-t6A-30',
            stem: 'If your calculated t-value is greater than the critical value at p=0.05, what should you do with the null hypothesis?',
            options: [
                'Accept the null hypothesis',
                'Reject the null hypothesis',
                'Modify the null hypothesis',
                'Ignore the null hypothesis',
            ],
            correctAnswer: 1,
            rationale: 'When calculated value > critical value at p=0.05, the result is statistically significant. You REJECT the null hypothesis (that there is no significant difference) as there is <5% probability the trend occurred by chance.',
            topic: 'Statistical Tests and Implications',
        },
    ],

    fillblank: [
        // Subtopic 0: IA2 Practical Methods (3 questions)
        {
            id: 'fb-t6A-1',
            stem: 'Complete the following about Core Practical 10.',
            template: 'Core Practical 10 investigates ecological __BLANK__ using quadrats and transects to monitor plant distribution changes across environmental __BLANK__ over time.',
            blanks: [
                { answer: 'succession' },
                { answer: 'gradients' },
            ],
            rationale: 'Succession is the process of change in species composition in an ecosystem over time. Quadrats and transects are used to sample plant distribution at different positions across environmental gradients.',
        },
        {
            id: 'fb-t6A-2',
            stem: 'Complete the description of the Hill Reaction.',
            template: 'In the Hill Reaction, __BLANK__ is used as a redox indicator that substitutes for NADP. It changes from blue (oxidised) to __BLANK__ (reduced) as electrons are passed from chloroplasts.',
            blanks: [
                { answer: 'DCPIP' },
                { answer: 'colourless' },
            ],
            rationale: 'DCPIP accepts hydrogen/electrons in place of NADP. When reduced (gains electrons), it loses its blue colour, allowing measurement of light-dependent photosynthesis rate.',
        },
        {
            id: 'fb-t6A-3',
            stem: 'Complete about antibiotic sensitivity testing.',
            template: 'In Core Practical 14, the effectiveness of antibiotics is measured by observing __BLANK__ of __BLANK__ on agar plates, where larger zones indicate greater antibiotic effectiveness.',
            blanks: [
                { answer: 'zones' },
                { answer: 'inhibition' },
            ],
            rationale: 'Antibiotic disks are placed on agar inoculated with bacteria. Clear areas (zones of inhibition) where bacteria cannot grow indicate antibiotic effectiveness. Larger zones = more effective antibiotic.',
        },

        // Subtopic 1: Experiment Planning (3 questions)
        {
            id: 'fb-t6A-4',
            stem: 'Complete the experiment planning framework.',
            template: 'In experimental planning, the __BLANK__ variable is what you change (with at least 5 values), while the __BLANK__ variable is what you measure.',
            blanks: [
                { answer: 'independent' },
                { answer: 'dependent' },
            ],
            rationale: 'Independent variable (IV) is manipulated by the experimenter. Dependent variable (DV) is the outcome that is measured and recorded.',
        },
        {
            id: 'fb-t6A-5',
            stem: 'Complete about control variables.',
            template: 'Control variables must be kept __BLANK__ throughout the experiment. When planning, you should name at least __BLANK__ control variables and explain how you will maintain them.',
            blanks: [
                { answer: 'constant' },
                { answer: 'two' },
            ],
            rationale: 'Control variables must not change during the experiment. Stating at least 2 with specific control methods (e.g., "thermostatically controlled water bath") demonstrates good experimental planning.',
        },
        {
            id: 'fb-t6A-6',
            stem: 'Complete about reliability.',
            template: 'To ensure reliability, measurements should be repeated at least __BLANK__ times at each interval to calculate a trustworthy __BLANK__.',
            blanks: [
                { answer: 'three' },
                { answer: 'mean' },
            ],
            rationale: 'Three repeats allow calculation of a mean value and identification of anomalous results that deviate from the expected pattern, improving data reliability.',
        },

        // Subtopic 2: Data Processing (2 questions)
        {
            id: 'fb-t6A-7',
            stem: 'Complete the data processing rules.',
            template: 'When the dependent variable is time (t), convert it to a rate using the formula __BLANK__, and ensure you include standard units such as __BLANK__ for rate.',
            blanks: [
                { answer: '1/t' },
                { answer: 's-1' },
            ],
            rationale: 'Rate is the reciprocal of time. Writing 1/t with units of s⁻¹ (per second) makes rates comparable across different experimental conditions.',
        },
        {
            id: 'fb-t6A-8',
            stem: 'Complete about graph drawing.',
            template: 'When drawing graphs, place the __BLANK__ variable on the X-axis and label both axes with the quantity name and __BLANK__ in brackets.',
            blanks: [
                { answer: 'independent' },
                { answer: 'units' },
            ],
            rationale: 'Independent variable (what you change) always goes on X-axis. Both axes must be fully labelled with quantity and units (e.g., Temperature / °C).',
        },

        // Subtopic 3: Reliability and Validity (2 questions)
        {
            id: 'fb-t6A-9',
            stem: 'Complete about validity improvements.',
            template: 'Using a colorimeter instead of naked eye removes __BLANK__ human error when judging colour changes, improving the __BLANK__ of the experiment.',
            blanks: [
                { answer: 'subjective' },
                { answer: 'validity' },
            ],
            rationale: 'Visual colour judgement varies between people and even for the same person at different times. A colorimeter provides objective, numerical measurements, improving validity.',
        },
        {
            id: 'fb-t6A-10',
            stem: 'Complete about reliability.',
            template: 'Reliability is improved by conducting more __BLANK__ and calculating means. A high standard deviation indicates __BLANK__ reliability.',
            blanks: [
                { answer: 'repeats' },
                { answer: 'low' },
            ],
            rationale: 'More repeats produce more consistent mean values. Large spread (high SD) means data points vary widely from the mean, indicating low reliability.',
        },

        // Subtopic 4: Uncertainty (3 questions)
        {
            id: 'fb-t6A-11',
            stem: 'Complete the percentage error formula.',
            template: 'The percentage error is calculated as: __BLANK__ divided by the __BLANK__, then multiplied by 100.',
            blanks: [
                { answer: 'uncertainty' },
                { answer: 'value' },
            ],
            rationale: '% Error = (Absolute Uncertainty ÷ Measured Value) × 100. This expresses the error as a proportion of the measurement.',
        },
        {
            id: 'fb-t6A-12',
            stem: 'Complete about double readings.',
            template: 'When finding a change (e.g. final mass - initial mass), you take two readings, so you must multiply the absolute equipment uncertainty by __BLANK__ before calculating percentage error.',
            blanks: [
                { answer: 'two' },
            ],
            rationale: 'Each reading carries the equipment uncertainty. Two readings = 2 × uncertainty. This must be included when calculating the percentage error of the change.',
        },
        {
            id: 'fb-t6A-13',
            stem: 'Complete about reducing error.',
            template: 'Percentage error becomes smaller when the __BLANK__ is larger. This is why weighing 50g on a balance gives a smaller percentage error than weighing __BLANK__.',
            blanks: [
                { answer: 'measured value' },
                { answer: '5g' },
            ],
            rationale: 'Same absolute uncertainty ÷ larger number = smaller percentage. Using larger sample masses reduces proportional error without changing equipment.',
        },

        // Subtopic 5: Statistical Tests (2 questions)
        {
            id: 'fb-t6A-14',
            stem: 'Complete about statistical significance.',
            template: 'If your calculated test statistic is greater than the critical value at p=__BLANK__, the result is considered statistically significant and you __BLANK__ the null hypothesis.',
            blanks: [
                { answer: '0.05' },
                { answer: 'reject' },
            ],
            rationale: 'p=0.05 is the standard threshold for biological significance. Greater than critical = reject null (result not due to chance).',
        },
        {
            id: 'fb-t6A-15',
            stem: 'Complete about choosing statistical tests.',
            template: 'Use the __BLANK__ test to compare means of two data sets, and use Chi-squared for comparing expected vs observed __BLANK__ in categorical data.',
            blanks: [
                { answer: 't-test' },
                { answer: 'frequencies' },
            ],
            rationale: 'T-test compares continuous variable means. Chi-squared compares counts (frequencies) of discrete categories against expected values.',
        },
    ],

    dragdrop: [
        // Subtopic 0: IA2 Practical Methods (2 questions)
        {
            id: 'dd-t6A-1',
            stem: 'Sort the following Core Practicals by the biological process they investigate.',
            categories: ['Ecology', 'Photosynthesis', 'Respiration', 'Microbiology'],
            items: [
                { text: 'Core Practical 10: Quadrats and transects', category: 'Ecology' },
                { text: 'Core Practical 11: Hill Reaction with DCPIP', category: 'Photosynthesis' },
                { text: 'Core Practical 16: Respirometers with yeast', category: 'Respiration' },
                { text: 'Core Practical 14: Gel Electrophoresis', category: 'Microbiology' },
                { text: 'Core Practical 15: Antibiotic zones of inhibition', category: 'Microbiology' },
                { text: 'Core Practical 17: Spirometer for ventilation', category: 'Respiration' },
                { text: 'Core Practical 12: Temperature and enzyme activity', category: 'Photosynthesis' },
                { text: 'Core Practical 11: Hill Reaction rate measurement', category: 'Photosynthesis' },
            ],
        },
        {
            id: 'dd-t6A-2',
            stem: 'Categorise the following by the type of measurement they produce.',
            categories: ['Continuous Data', 'Categorical Data', 'Rate Measurement', 'Structural Data'],
            items: [
                { text: 'Tidal volume (mL)', category: 'Continuous Data' },
                { text: 'Presence/absence of species in quadrat', category: 'Categorical Data' },
                { text: '1/time for reaction completion', category: 'Rate Measurement' },
                { text: 'Daphnia heart rate (beats/min)', category: 'Continuous Data' },
                { text: 'DNA fragment sizes (base pairs)', category: 'Structural Data' },
                { text: 'Zone of inhibition diameter (mm)', category: 'Continuous Data' },
                { text: 'Colour change endpoint', category: 'Categorical Data' },
                { text: 'Snail response time (seconds)', category: 'Continuous Data' },
            ],
        },

        // Subtopic 1: Experiment Planning (2 questions)
        {
            id: 'dd-t6A-3',
            stem: 'Classify the following as Independent, Dependent, or Control variables.',
            categories: ['Independent Variable', 'Dependent Variable', 'Control Variable'],
            items: [
                { text: 'Temperature (10, 20, 30, 40, 50°C)', category: 'Independent Variable' },
                { text: 'Rate of reaction (1/time)', category: 'Dependent Variable' },
                { text: 'pH maintained with buffer', category: 'Control Variable' },
                { text: 'Enzyme concentration', category: 'Control Variable' },
                { text: 'Light intensity (lux)', category: 'Independent Variable' },
                { text: 'Oxygen bubbles per minute', category: 'Dependent Variable' },
                { text: 'Volume of substrate', category: 'Control Variable' },
                { text: 'Time taken for colour change', category: 'Dependent Variable' },
            ],
        },
        {
            id: 'dd-t6A-4',
            stem: 'Match the risk assessment component with its definition.',
            categories: ['Hazard', 'Risk', 'Control Measure'],
            items: [
                { text: 'Hot water bath at 80°C', category: 'Hazard' },
                { text: 'Scalds and burns', category: 'Risk' },
                { text: 'Use heat-resistant gloves and tongs', category: 'Control Measure' },
                { text: 'Pathogenic bacteria (E. coli)', category: 'Hazard' },
                { text: 'Infection and illness', category: 'Risk' },
                { text: 'Use aseptic technique and disinfectant', category: 'Control Measure' },
            ],
        },

        // Subtopic 2: Data Processing (2 questions)
        {
            id: 'dd-t6A-5',
            stem: 'Categorise the graph rules by what they specify.',
            categories: ['Axis Assignment', 'Scale Selection', 'Data Representation', 'Line Drawing'],
            items: [
                { text: 'Independent variable on X-axis', category: 'Axis Assignment' },
                { text: 'Dependent variable on Y-axis', category: 'Axis Assignment' },
                { text: 'Use at least 50% of graph grid', category: 'Scale Selection' },
                { text: 'Avoid awkward scales (1 square = 3 units)', category: 'Scale Selection' },
                { text: 'Plot points as neat crosses (×)', category: 'Data Representation' },
                { text: 'Smooth line of best fit for continuous trends', category: 'Line Drawing' },
                { text: 'Point-to-point line with ruler', category: 'Line Drawing' },
                { text: 'Label axes with quantity and units', category: 'Data Representation' },
            ],
        },
        {
            id: 'dd-t6A-6',
            stem: 'Categorise the data processing operations by their purpose.',
            categories: ['Rate Conversion', 'Magnification Calculation', 'Statistical Analysis', 'Unit Conversion'],
            items: [
                { text: 'Calculate 1/time when data is seconds', category: 'Rate Conversion' },
                { text: 'I = A × M for image measurements', category: 'Magnification Calculation' },
                { text: 'Calculate standard deviation', category: 'Statistical Analysis' },
                { text: 'Convert mm to μm for microscopy', category: 'Unit Conversion' },
                { text: 'Rate = (final - initial)/time', category: 'Rate Conversion' },
                { text: 'Compare means using t-test', category: 'Statistical Analysis' },
                { text: 'Convert cm to m before calculation', category: 'Unit Conversion' },
                { text: 'Calculate actual size from image', category: 'Magnification Calculation' },
            ],
        },

        // Subtopic 3: Reliability and Validity (1 question)
        {
            id: 'dd-t6A-7',
            stem: 'Sort the actions by whether they improve Reliability or Validity.',
            categories: ['Improves Reliability', 'Improves Validity'],
            items: [
                { text: 'Conduct 3+ repeats at each interval', category: 'Improves Reliability' },
                { text: 'Identify and control additional variables', category: 'Improves Validity' },
                { text: 'Calculate mean from repeated measurements', category: 'Improves Reliability' },
                { text: 'Use colorimeter instead of eye judgement', category: 'Improves Validity' },
                { text: 'Use electric water bath instead of beaker', category: 'Improves Validity' },
                { text: 'Remove anomalous results and re-measure', category: 'Improves Reliability' },
            ],
        },

        // Subtopic 4: Uncertainty (2 questions)
        {
            id: 'dd-t6A-8',
            stem: 'Categorise the following as Quantitative or Qualitative errors/uncertainties.',
            categories: ['Quantitative (Can be calculated)', 'Qualitative (Cannot be calculated)'],
            items: [
                { text: 'Balance precision ±0.01g', category: 'Quantitative (Can be calculated)' },
                { text: 'Difficulty judging exact endpoint of colour change', category: 'Qualitative (Cannot be calculated)' },
                { text: 'Thermometer marked in 0.5°C divisions', category: 'Quantitative (Can be calculated)' },
                { text: 'Biological variation in wild leaf samples', category: 'Qualitative (Cannot be calculated)' },
                { text: 'Pipette precision ±0.05mL', category: 'Quantitative (Can be calculated)' },
                { text: 'Fluctuating room temperature during experiment', category: 'Qualitative (Cannot be calculated)' },
            ],
        },
        {
            id: 'dd-t6A-9',
            stem: 'Categorise the actions by their effect on percentage error.',
            categories: ['Reduces Percentage Error', 'Increases Percentage Error', 'No Effect on Error'],
            items: [
                { text: 'Weigh 50g instead of 5g on same balance', category: 'Reduces Percentage Error' },
                { text: 'Take single reading instead of two for change', category: 'Reduces Percentage Error' },
                { text: 'Use balance with larger absolute uncertainty', category: 'Increases Percentage Error' },
                { text: 'Take double reading for change (×2 uncertainty)', category: 'Increases Percentage Error' },
                { text: 'Calculate correctly with given values', category: 'No Effect on Error' },
            ],
        },

        // Subtopic 5: Statistical Tests (1 question)
        {
            id: 'dd-t6A-10',
            stem: 'Sort the statistical tests by their primary use.',
            categories: ['Compare Means', 'Test Correlation', 'Compare Frequencies', 'Measure Spread'],
            items: [
                { text: "Student's t-test", category: 'Compare Means' },
                { text: "Spearman's Rank Correlation", category: 'Test Correlation' },
                { text: 'Chi-squared test', category: 'Compare Frequencies' },
                { text: 'Standard deviation calculation', category: 'Measure Spread' },
                { text: 'Comparing boys vs girls height', category: 'Compare Means' },
                { text: 'Testing leaf length vs tree height relationship', category: 'Test Correlation' },
                { text: 'Comparing observed vs expected phenotype ratios', category: 'Compare Frequencies' },
                { text: 'Evaluating data spread around mean', category: 'Measure Spread' },
            ],
        },
    ],

    sequence: [
        // Subtopic 0: IA2 Practical Methods (1 question)
        {
            id: 'seq-t6A-1',
            stem: 'Put the steps of setting up a Hill Reaction experiment in the correct order:',
            steps: [
                'Prepare chloroplast suspension by grinding spinach leaves and filtering',
                'Set up light source at fixed distance from cuvette',
                'Add chloroplast suspension to DCPIP solution in cuvette',
                'Place cuvette in colorimeter and record absorbance at time zero',
                'Expose cuvette to light and record absorbance at regular intervals',
                'Plot absorbance against time to determine reaction rate',
            ],
        },

        // Subtopic 1: Experiment Planning (1 question)
        {
            id: 'seq-t6A-2',
            stem: 'Put the experiment planning components in the correct logical order:',
            steps: [
                'Identify the independent variable and state at least 5 values',
                'Identify the dependent variable and how to measure it',
                'Identify control variables and explain how to maintain them',
                'Specify the number of repeats for reliability (minimum 3)',
                'Identify hazards, risks, and control measures for safety',
                'Write a clear prediction based on biological theory',
            ],
        },

        // Subtopic 2: Data Processing (2 questions)
        {
            id: 'seq-t6A-3',
            stem: 'Put the graph drawing steps in the correct order:',
            steps: [
                'Identify which variable is independent and which is dependent',
                'Draw X and Y axes using at least 50% of graph grid',
                'Choose appropriate scale (avoid awkward ratios)',
                'Label axes with quantity and units',
                'Plot data points as neat crosses (×)',
                'Draw appropriate line: point-to-point or smooth best fit',
            ],
        },
        {
            id: 'seq-t6A-4',
            stem: 'Put the data processing steps in the correct order for calculating a rate from time measurements:',
            steps: [
                'Record time taken for reaction to complete',
                'Repeat measurement at least 3 times',
                'Calculate mean of time measurements',
                'Convert time to rate using 1/t',
                'Apply appropriate units (e.g. s⁻¹)',
                'Plot rate against independent variable on graph',
            ],
        },

        // Subtopic 3: Reliability and Validity (1 question)
        {
            id: 'seq-t6A-5',
            stem: 'Put the steps for improving an experiment in the correct order:',
            steps: [
                'Identify which variables were not properly controlled',
                'Suggest specific methods to better control those variables',
                'Propose equipment that reduces subjective error (e.g., colorimeter)',
                'Increase number of repeats to improve reliability',
                'Extend range of independent variable to identify optimum',
                'Re-evaluate whether experiment now tests the intended hypothesis',
            ],
        },

        // Subtopic 4: Uncertainty (2 questions)
        {
            id: 'seq-t6A-6',
            stem: 'Put the steps for calculating percentage error of a single measurement in the correct order:',
            steps: [
                'Identify the absolute uncertainty of the measuring equipment',
                'Record the measured value from the experiment',
                'Divide absolute uncertainty by the measured value',
                'Multiply the result by 100',
                'Express as percentage (%) with appropriate significant figures',
            ],
        },
        {
            id: 'seq-t6A-7',
            stem: 'Put the steps for calculating percentage error of a change (e.g., mass loss) in the correct order:',
            steps: [
                'Take initial reading with equipment',
                'Take final reading with equipment',
                'Calculate the change (final - initial)',
                'Identify the absolute equipment uncertainty',
                'Multiply absolute uncertainty by 2 (for two readings)',
                'Divide by the measured change value and multiply by 100',
            ],
        },

        // Subtopic 5: Statistical Tests (1 question)
        {
            id: 'seq-t6A-8',
            stem: 'Put the statistical testing steps in the correct order:',
            steps: [
                'Identify the type of data (continuous, categorical, correlation)',
                'Select appropriate statistical test (t-test, chi-squared, Spearman\'s)',
                'Calculate the test statistic from the data',
                'Look up the critical value at p=0.05 for appropriate degrees of freedom',
                'Compare calculated value to critical value',
                'Accept or reject null hypothesis based on comparison',
                'State the biological implication of the statistical conclusion',
            ],
        },
    ],

    keyword: [
        // Subtopic 0: IA2 Practical Methods (2 questions)
        {
            id: 'kw-t6A-1',
            stem: 'Describe how you would use quadrats and transects to investigate ecological succession. [4 marks]',
            marks: 4,
            keywords: ['quadrat', 'transect', 'sample', 'species', 'distribution', 'abundance', 'frequency', 'percentage cover', 'systematic', 'random', 'environmental gradient'],
            modelAnswer: 'Place quadrats at regular intervals along a transect line crossing different environmental conditions (e.g., distance from water). In each quadrat, record plant species present and either count individuals, estimate percentage cover, or record frequency. Repeat at multiple locations to obtain representative data showing how species composition changes across the environmental gradient.',
        },
        {
            id: 'kw-t6A-2',
            stem: 'Explain how DCPIP is used to measure the rate of the Hill Reaction. [3 marks]',
            marks: 3,
            keywords: ['DCPIP', 'blue', 'colourless', 'redox', 'indicator', 'NADP', 'electrons', 'absorbance', 'colorimeter', 'rate'],
            modelAnswer: 'DCPIP acts as a redox indicator that substitutes for NADP in the light-dependent reaction. It is blue when oxidised and becomes colourless when reduced by accepting electrons from chloroplasts. The rate of colour change (measured by colorimeter) indicates the rate of electron transfer and thus photosynthetic activity.',
        },

        // Subtopic 1: Experiment Planning (2 questions)
        {
            id: 'kw-t6A-3',
            stem: 'You are investigating the effect of temperature on enzyme activity. Write a method describing how you will control variables. [4 marks]',
            marks: 4,
            keywords: ['control', 'variable', 'constant', 'buffer', 'pH', 'thermostatically', 'water bath', 'temperature', 'volume', 'concentration', 'substrate', 'enzyme'],
            modelAnswer: 'Control variables include: pH maintained using a buffer solution of fixed concentration; enzyme concentration kept constant by using the same stock solution volume; substrate concentration identical in all tubes; reaction time measured with a stopwatch from the moment of mixing. Temperature is the independent variable, not a control. All controls are maintained precisely throughout the experiment.',
        },
        {
            id: 'kw-t6A-4',
            stem: 'Describe the components of a complete risk assessment for a biology practical. [3 marks]',
            marks: 3,
            keywords: ['hazard', 'risk', 'control', 'measure', 'precaution', 'safety', 'protection', 'aseptic', 'technique', 'gloves', 'goggles'],
            modelAnswer: 'A complete risk assessment identifies the specific hazard (e.g., hot water, pathogenic bacteria, sharp scalpel), describes the risk it poses (e.g., burns, infection, cuts), and states the control measure to minimise danger (e.g., use heat-resistant gloves, employ aseptic technique, cut away from body).',
        },

        // Subtopic 2: Data Processing (2 questions)
        {
            id: 'kw-t6A-5',
            stem: 'Explain how you would construct a graph from experimental data. [4 marks]',
            marks: 4,
            keywords: ['X-axis', 'Y-axis', 'independent', 'dependent', 'scale', '50%', 'grid', 'label', 'units', 'crosses', 'line', 'best fit', 'extrapolate'],
            modelAnswer: 'Plot the independent variable on the X-axis and dependent variable on the Y-axis. Choose scales that use at least 50% of the grid in both directions and avoid awkward ratios. Label both axes with the quantity name and units in brackets. Plot data points as neat crosses. Draw either a point-to-point line with a ruler or a smooth curve of best fit. Do not extrapolate beyond the data range.',
        },
        {
            id: 'kw-t6A-6',
            stem: 'What does it mean if standard deviation error bars overlap on a graph? Explain fully. [3 marks]',
            marks: 3,
            keywords: ['standard deviation', 'overlap', 'significant', 'difference', 'means', 'chance', 'not', 'random', 'statistical'],
            modelAnswer: 'If standard deviation error bars overlap, the ranges of the two data sets overlap. This means the difference between the two means is NOT statistically significant. The observed difference could be due to random chance rather than a real effect of the independent variable.',
        },

        // Subtopic 3: Reliability and Validity (2 questions)
        {
            id: 'kw-t6A-7',
            stem: 'Distinguish between reliability and validity in experimental science. [3 marks]',
            marks: 3,
            keywords: ['reliability', 'validity', 'consistent', 'reproduce', 'repeat', 'measure', 'hypothesis', 'control', 'variable'],
            modelAnswer: 'Reliability refers to whether results can be consistently reproduced when the experiment is repeated. It is improved by conducting more repeats and calculating means. Validity refers to whether the experiment actually measures what it claims to test. It is improved by identifying and controlling all relevant variables.',
        },
        {
            id: 'kw-t6A-8',
            stem: 'Suggest two improvements to make a titration experiment more reliable and valid. [4 marks]',
            marks: 4,
            keywords: ['colorimeter', 'objective', 'subjective', 'water bath', 'thermostatically', 'controlled', 'electric', 'pipette', 'graduated', 'repeat', 'mean'],
            modelAnswer: 'Use a colorimeter instead of visual observation to objectively determine the endpoint, eliminating subjective human error and improving validity. Use a thermostatically controlled electric water bath instead of a beaker of hot water to maintain precise constant temperature, improving control of variables and thus validity.',
        },

        // Subtopic 4: Uncertainty (2 questions)
        {
            id: 'kw-t6A-9',
            stem: 'Explain why you must multiply equipment uncertainty by 2 when finding a change in mass. [3 marks]',
            marks: 3,
            keywords: ['two', 'readings', 'initial', 'final', 'uncertainty', 'add', 'error', 'margin', 'absolute'],
            modelAnswer: 'Finding a change requires two separate measurements: the initial reading AND the final reading. Each measurement carries the same absolute uncertainty (margin of error) from the equipment. Since two readings are taken, the total uncertainty is the sum of both, meaning you multiply the single reading uncertainty by 2.',
        },
        {
            id: 'kw-t6A-10',
            stem: 'Describe two qualitative errors that cannot be numerically quantified in biology experiments. [3 marks]',
            marks: 3,
            keywords: ['qualitative', 'subjective', 'endpoint', 'colour', 'visual', 'biological', 'variation', 'fluctuating', 'temperature', 'judging'],
            modelAnswer: 'Qualitative errors include difficulty judging the exact endpoint of a colour change by eye, which varies between individuals. Biological variation within a genetically diverse sample (e.g., wild leaves of different ages) creates uncontrolled variation that cannot be numerically quantified. Fluctuating room temperature during the experiment is another qualitative limitation.',
        },

        // Subtopic 5: Statistical Tests (2 questions)
        {
            id: 'kw-t6A-11',
            stem: 'State which statistical test you would use and explain your choice for comparing boys\' and girls\' heights. [4 marks]',
            marks: 4,
            keywords: ['t-test', 'Student\'s', 'means', 'continuous', 'data', 'compare', 'significant', 'difference', 'two', 'sets'],
            modelAnswer: 'Use the Student\'s t-test because it compares the means of two different, continuous data sets (boys\' heights and girls\' heights). The test will determine if the difference between the mean heights is statistically significant or if it could be due to random chance.',
        },
        {
            id: 'kw-t6A-12',
            stem: 'Explain what a p-value of 0.05 means in the context of a biological experiment. [3 marks]',
            marks: 3,
            keywords: ['probability', 'chance', 'random', 'significant', 'critical', 'value', '0.05', '5%', 'null', 'hypothesis', 'reject'],
            modelAnswer: 'A p-value of 0.05 means there is a 5% probability (1 in 20) that the observed results occurred by random chance alone. If your calculated test statistic exceeds the critical value at p=0.05, the result is considered statistically significant and you reject the null hypothesis that there is no real difference.',
        },
    ],

    flashcards: [
        // Subtopic 0: IA2 Practical Methods (4 cards)
        {
            id: 'fc-t6A-1',
            front: 'What does Core Practical 10 investigate?',
            back: 'Ecological succession using quadrats and transects to monitor plant distribution changes across environmental gradients over time.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'fc-t6A-2',
            front: 'Which redox indicator substitutes for NADP in the Hill Reaction?',
            back: 'DCPIP (2,6-dichlorophenolindophenol) - blue when oxidised, colourless when reduced.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'fc-t6A-3',
            front: 'What does a zone of inhibition indicate in antibiotic testing?',
            back: 'An area where bacterial growth is prevented by antibiotics. Larger zones indicate greater antibiotic effectiveness against that bacterial strain.',
            topic: 'IA2 Practical Methods',
        },
        {
            id: 'fc-t6A-4',
            front: 'What equipment measures tidal volume and minute ventilation?',
            back: 'A spirometer measures air moved in one breath (tidal volume) and allows calculation of Minute Ventilation = tidal volume × breathing rate.',
            topic: 'IA2 Practical Methods',
        },

        // Subtopic 1: Experiment Planning (4 cards)
        {
            id: 'fc-t6A-5',
            front: 'What is the independent variable in an experiment?',
            back: 'The variable that you change or manipulate. You should test at least 5 different values to establish a reliable trend.',
            topic: 'Experiment Planning',
        },
        {
            id: 'fc-t6A-6',
            front: 'What is the dependent variable in an experiment?',
            back: 'The variable that you measure and record. Must specify exact equipment and measurement timeframe.',
            topic: 'Experiment Planning',
        },
        {
            id: 'fc-t6A-7',
            front: 'How many repeats are recommended for reliability?',
            back: 'At least 3 repeats at each interval to calculate a trustworthy mean and identify anomalous results.',
            topic: 'Experiment Planning',
        },
        {
            id: 'fc-t6A-8',
            front: 'What three components must be included in a risk assessment?',
            back: '1) The hazard (what could cause harm) • 2) The risk (what could happen) • 3) The control measure (how to minimise danger)',
            topic: 'Experiment Planning',
        },

        // Subtopic 2: Data Processing (4 cards)
        {
            id: 'fc-t6A-9',
            front: 'How do you calculate rate from time measurements?',
            back: 'Rate = 1/t (the reciprocal of time). Always include appropriate units such as s⁻¹.',
            topic: 'Data Processing',
        },
        {
            id: 'fc-t6A-10',
            front: 'What does I = A × M represent?',
            back: 'Image Size = Actual Size × Magnification. Always ensure units match (usually convert to micrometers) before calculating.',
            topic: 'Data Processing',
        },
        {
            id: 'fc-t6A-11',
            front: 'Which variable goes on the X-axis of a graph?',
            back: 'The independent variable (what you change) always goes on the X-axis (horizontal).',
            topic: 'Data Processing',
        },
        {
            id: 'fc-t6A-12',
            front: 'What does overlapping standard deviation error bars indicate?',
            back: 'The difference between means is NOT statistically significant. The ranges overlap, so the difference could be due to random chance.',
            topic: 'Data Processing',
        },

        // Subtopic 3: Reliability and Validity (5 cards)
        {
            id: 'fc-t6A-13',
            front: 'What is reliability in experiments?',
            back: 'Whether results can be consistently reproduced. Improved by conducting more repeats, calculating means, and removing anomalies. High standard deviation = low reliability.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'fc-t6A-14',
            front: 'What is validity in experiments?',
            back: 'Whether the experiment actually measures what it claims to test. Improved by identifying and controlling all relevant variables. Without proper controls, results are invalid regardless of repeats.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'fc-t6A-15',
            front: 'How does a colorimeter improve an experiment?',
            back: 'Provides objective numerical measurement of colour change instead of subjective visual judgement, removing human bias and improving validity.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'fc-t6A-16',
            front: 'How does an electric water bath improve temperature control?',
            back: 'Maintains constant set temperature via thermostat, unlike a beaker which constantly cools. This improves validity by keeping the temperature control variable stable.',
            topic: 'Reliability and Validity',
        },
        {
            id: 'fc-t6A-17',
            front: 'Why use a graduated pipette instead of a measuring cylinder?',
            back: 'Higher precision (more graduation marks) gives more accurate volume measurement, improving validity by reducing systematic error.',
            topic: 'Reliability and Validity',
        },

        // Subtopic 4: Uncertainty (4 cards)
        {
            id: 'fc-t6A-18',
            front: 'What is the percentage error formula?',
            back: '% Error = (Absolute Uncertainty ÷ Measured Value) × 100',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'fc-t6A-19',
            front: 'Why multiply uncertainty by 2 for a change measurement?',
            back: 'Finding a change requires two readings (initial AND final). Each has equipment uncertainty, so total = 2 × equipment uncertainty.',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'fc-t6A-20',
            front: 'How can you reduce percentage error without better equipment?',
            back: 'Measure larger quantities. Same absolute uncertainty ÷ larger number = smaller percentage error. (e.g., 50g has smaller % error than 5g on same balance)',
            topic: 'Quantitative and Qualitative Uncertainty',
        },
        {
            id: 'fc-t6A-21',
            front: 'What is the typical absolute uncertainty of analogue equipment?',
            back: 'Half of the smallest graduation mark (since you can estimate between marks but not with perfect precision).',
            topic: 'Quantitative and Qualitative Uncertainty',
        },

        // Subtopic 5: Statistical Tests (4 cards)
        {
            id: 'fc-t6A-22',
            front: 'What does Student\'s t-test compare?',
            back: 'The means of two different, continuous data sets to determine if the difference is statistically significant.',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'fc-t6A-23',
            front: 'What does Spearman\'s Rank Correlation test?',
            back: 'Whether there is a mathematically significant correlation (relationship) between two variables. Gives coefficient from -1 (perfect negative) to +1 (perfect positive).',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'fc-t6A-24',
            front: 'When should the Chi-squared test be used?',
            back: 'For categorical (discrete) data to compare observed frequencies against expected frequencies.',
            topic: 'Statistical Tests and Implications',
        },
        {
            id: 'fc-t6A-25',
            front: 'What does p < 0.05 mean in statistics?',
            back: 'There is less than 5% probability that results occurred by random chance alone. If calculated value > critical value, reject null hypothesis.',
            topic: 'Statistical Tests and Implications',
        },
    ],
};
