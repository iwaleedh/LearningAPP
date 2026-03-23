export const exercises_physics_1_1 = {
    mcq: [
        // 1.1.0 SI Units
        {
            id: 'mcq-1',
            stem: 'Which of the following is an SI base unit?',
            options: ['newton', 'joule', 'ampere', 'volt'],
            correctAnswer: 2,
            rationale: 'Ampere is the SI base unit for electric current. Newton, joule, and volt are all derived units.',
            topic: 'SI Units'
        },
        {
            id: 'mcq-2',
            stem: 'What is the base unit equivalent of the newton (N)?',
            options: ['kg m s⁻²', 'kg m² s⁻²', 'kg m s⁻¹', 'kg m⁻¹ s⁻²'],
            correctAnswer: 0,
            rationale: 'From F = ma, force has units of mass (kg) multiplied by acceleration (m s⁻²), giving kg m s⁻².',
            topic: 'SI Units'
        },
        {
            id: 'mcq-3',
            stem: 'How many coulombs (C) of charge are stored in a 2000 mAh battery?',
            options: ['2 C', '720 C', '7200 C', '72000 C'],
            correctAnswer: 2,
            rationale: 'First convert to SI units: 2000 mAh = 2000 × 10⁻³ A × 3600 s = 2 A × 3600 s = 7200 C.',
            topic: 'SI Units'
        },
        // 1.1.1 Practical Skills
        {
            id: 'mcq-4',
            stem: 'What is the absolute reading uncertainty of a single measurement using a standard school ruler with millimetre divisions?',
            options: ['± 0.1 mm', '± 0.5 mm', '± 1 mm', '± 2 mm'],
            correctAnswer: 1,
            rationale: 'The absolute reading uncertainty for a single reading is ± half the resolution. Since the resolution is 1 mm, the uncertainty is ± 0.5 mm.',
            topic: 'Practical Skills'
        },
        {
            id: 'mcq-5',
            stem: 'Which of the following is a characteristic of a digital scientific instrument compared to an analogue one?',
            options: ['Normally susceptible to parallax error', 'Has lower resolution', 'Outputs data in binary format', 'Cheaper to manufacture'],
            correctAnswer: 2,
            rationale: 'Digital instruments output binary data making them readable by computers. Analogue meters suffer from parallax error, usually have lower resolution, and are cheaper.',
            topic: 'Practical Skills'
        },
        {
            id: 'mcq-6',
            stem: 'How can the effect of random error be reduced in an experiment?',
            options: ['Recalibrating the instruments', 'Taking repeat readings and calculating a mean', 'Identifying and subtracting the zero error', 'Using an analogue instrument rather than digital'],
            correctAnswer: 1,
            rationale: 'Random errors are scattered. Taking repeats and calculating a mean reduces their effect. Recalibration fixes systematic errors.',
            topic: 'Practical Skills'
        },
        // 1.1.2 Estimating Physical Quantities
        {
            id: 'mcq-7',
            stem: 'What is the order of magnitude of the mass of a typical adult human?',
            options: ['10⁰ kg', '10¹ kg', '10² kg', '10³ kg'],
            correctAnswer: 1,
            rationale: 'An adult human is typically around 70 kg, which is an order of magnitude of 10¹ kg (according to typical physics textbook approximations).',
            topic: 'Estimating Physical Quantities'
        },
        {
            id: 'mcq-8',
            stem: 'What is the approximate order of magnitude for the radius of an atom?',
            options: ['10⁻¹⁰ m', '10⁻¹² m', '10⁻¹⁴ m', '10⁻¹⁵ m'],
            correctAnswer: 0,
            rationale: 'The radius of an atom is approximately 10⁻¹⁰ m. The nucleus is around 10⁻¹⁵ m.',
            topic: 'Estimating Physical Quantities'
        },
        {
            id: 'mcq-9',
            stem: 'Which of the following best estimates the mass of a typical family car?',
            options: ['10² kg', '10³ kg', '10⁴ kg', '10⁵ kg'],
            correctAnswer: 1,
            rationale: 'A typical family car has a mass between 1000 and 1500 kg, which is an order of magnitude of 10³ kg.',
            topic: 'Estimating Physical Quantities'
        },
        // 1.1.3 Limitations of Measurements
        {
            id: 'mcq-10',
            stem: 'Which term describes how close a set of repeated measurements are to each other?',
            options: ['Accuracy', 'Precision', 'Resolution', 'Uncertainty'],
            correctAnswer: 1,
            rationale: 'Precision is the reproducibility of a result. Accuracy refers to how close the result is to the true value.',
            topic: 'Limitations of Measurements'
        },
        {
            id: 'mcq-11',
            stem: 'If you are calculating the volume of a sphere (V = 4/3 π r³), and the radius r has a percentage uncertainty of 2%, what is the percentage uncertainty in V?',
            options: ['2%', '4%', '6%', '8%'],
            correctAnswer: 2,
            rationale: 'For powers, multiply the percentage uncertainty by the power index. %ΔV = 3 × %Δr = 3 × 2% = 6%.',
            topic: 'Limitations of Measurements'
        },
        {
            id: 'mcq-12',
            stem: 'A ruler has a systematic zero error of +1 mm. If you make a measurement and it reads 15 mm, what is the true length?',
            options: ['14 mm', '15 mm', '16 mm', 'It cannot be determined'],
            correctAnswer: 0,
            rationale: 'Systematic errors shift all readings consistently. If the ruler starts reading at +1 mm, you must subtract 1 mm from all readings to find the true value (15 - 1 = 14 mm).',
            topic: 'Limitations of Measurements'
        },
        // 1.1.4 Scientific Communication
        {
            id: 'mcq-13',
            stem: 'To how many significant figures should a final calculated answer typically be given in an exam?',
            options: ['The same as the most precise piece of data', 'The same as the least precise piece of data', 'Always 2 significant figures', 'Always 3 significant figures'],
            correctAnswer: 1,
            rationale: 'A result cannot be more precise than the raw data it is based on. Therefore, it MUST follow the least precise piece of data given in the question.',
            topic: 'Scientific Communication'
        },
        {
            id: 'mcq-14',
            stem: 'When calculating the gradient from a best-fit line on a graph, which points should you select?',
            options: ['The first and last data points', 'Any two data points', 'Two points on the best-fit line that are far apart', 'Two points on the best-fit line that are close together'],
            correctAnswer: 2,
            rationale: 'Always use points on the line (not raw data points) and choose them as far apart as possible to reduce the percentage uncertainty in reading the coordinates.',
            topic: 'Scientific Communication'
        },
        {
            id: 'mcq-15',
            stem: 'What is the correct way to label the axis for time measured in seconds?',
            options: ['t / s', 'Time (seconds)', 'Time, s', 't(s)'],
            correctAnswer: 0,
            rationale: 'The standard physics convention is "Quantity / Unit", such as "Time t / s" or strictly "t / s".',
            topic: 'Scientific Communication'
        },
        // 1.1.5 Applications of Science
        {
            id: 'mcq-16',
            stem: 'Why is MRI scanning generally safer for patients than CT scanning?',
            options: ['It takes less time', 'It uses non-ionising radiation', 'It does not use magnetic fields', 'It gives higher resolution images of bone'],
            correctAnswer: 1,
            rationale: 'MRI uses strong magnetic fields and radio waves, which are non-ionising. CT scans use X-rays, which are ionising and carry a cancer risk.',
            topic: 'Applications of Science'
        },
        {
            id: 'mcq-17',
            stem: 'Which physics principle is primarily utilised in fibre-optic cables for telecommunications?',
            options: ['The photoelectric effect', 'Total internal reflection', 'Electromagnetic induction', 'Nuclear fusion'],
            correctAnswer: 1,
            rationale: 'Fibre-optic communications transmit data via light pulses that travel through the fibre through total internal reflection.',
            topic: 'Applications of Science'
        },
        {
            id: 'mcq-18',
            stem: 'What energy conversion occurs in a wind turbine?',
            options: ['Electrical to kinetic using induction', 'Thermal to electrical using the photoelectric effect', 'Kinetic to electrical using electromagnetic induction', 'Chemical to electrical using combustion'],
            correctAnswer: 2,
            rationale: 'Wind turns the blades (kinetic energy) which spins a magnet inside a coil to generate electricity (electromagnetic induction).',
            topic: 'Applications of Science'
        },
        // 1.1.6 The Scientific Community
        {
            id: 'mcq-19',
            stem: 'What is the primary purpose of peer review in scientific publishing?',
            options: ['To ensure the paper is grammatically correct', 'To allow independent experts to critique methodology and conclusions before publication', 'To verify the identity of the authors', 'To guarantee that the conclusions are 100% correct'],
            correctAnswer: 1,
            rationale: 'Peer review acts as a quality control mechanism where independent experts assess the methodology, novelty, and conclusions, though it does not guarantee absolute correctness.',
            topic: 'The Scientific Community'
        },
        {
            id: 'mcq-20',
            stem: 'What does "reproducibility" mean in the context of scientific research?',
            options: ['A paper is easy to print', 'Other scientists can follow the same methods and obtain the same results', 'The researcher can do the experiment very quickly', 'The data can be easily converted into a graph'],
            correctAnswer: 1,
            rationale: 'Reproducibility means independent researchers can replicate the experiment using the same methods and find very similar results, validating the original conclusion.',
            topic: 'The Scientific Community'
        },
        {
            id: 'mcq-21',
            stem: 'Which of the following is a known limitation of the peer review process?',
            options: ['It takes almost no time to complete', 'It eliminates all possibility of scientific fraud', 'Reviewers may have biases or conflicts of interest', 'It automatically updates physics textbooks'],
            correctAnswer: 2,
            rationale: 'Reviewers are human and can have biases regarding novel results, or conflicts of interest with rival authors, which may impact the review process.',
            topic: 'The Scientific Community'
        },
        // 1.1.7 Science & Society
        {
            id: 'mcq-22',
            stem: 'What is the most likely outcome of a risk-benefit analysis for a new medical technology?',
            options: ['The technology is rejected if it has any risks at all', 'The technology is approved if the societal and health benefits strongly outweigh the risks', 'The technology is approved only if it costs no money to implement', 'The technology is hidden from the public to avoid panic'],
            correctAnswer: 1,
            rationale: 'All technologies carry some risk. A risk-benefit analysis approves a technology when the benefits are judged to outweigh those risks.',
            topic: 'Science & Society'
        },
        {
            id: 'mcq-23',
            stem: 'Why might fundamental "blue-sky" research struggle to get funding compared to applied research?',
            options: ['It uses too much electricity', 'It has no immediate commercial application or profit potential', 'It is physically impossible to conduct', 'Scientists find it boring'],
            correctAnswer: 1,
            rationale: 'Private companies prefer funding research that leads to profitable products. Blue-sky research explores unknown fundamentals without an immediate application in mind.',
            topic: 'Science & Society'
        },
        {
            id: 'mcq-24',
            stem: 'Which of the following describes an ethical responsibility of a scientist?',
            options: ['Only publishing results that agree with their hypothesis', 'Ignoring anomalous data if it ruins the best-fit line', 'Obtaining informed consent from participants in a study', 'Exaggerating claims to secure greater funding'],
            correctAnswer: 2,
            rationale: 'Ethical research requires honesty, transparency, not fabricating data, and protecting human and animal test subjects (such as obtaining informed consent).',
            topic: 'Science & Society'
        }
    ],
    fillblank: [
        {
            id: 'fb-1',
            stem: 'Complete the statement regarding SI units.',
            template: 'The SI base unit for temperature is the __BLANK__ and its symbol is __BLANK__.',
            blanks: [{ answer: 'kelvin' }, { answer: 'K' }],
            rationale: 'Temperature is one of the 7 base units; its SI base unit is kelvin (not Celsius) with the symbol K.'
        },
        {
            id: 'fb-2',
            stem: 'Complete the base unit derivation for energy.',
            template: 'Because kinetic energy is calculated using ½mv², the base units of the joule are __BLANK__ m² __BLANK__.',
            blanks: [{ answer: 'kg' }, { answer: 's⁻²' }],
            rationale: 'Mass is kg, velocity is m s⁻¹. Squaring velocity gives m² s⁻², so energy is kg m² s⁻².'
        },
        {
            id: 'fb-3',
            stem: 'Complete the sentence about uncertainties.',
            template: 'When two quantities are divided, you must combine them by adding their __BLANK__ uncertainties.',
            blanks: [{ answer: 'percentage' }],
            rationale: 'For multiplication and division, percentage uncertainties are added. Absolute uncertainties are added for sums and differences.'
        },
        {
            id: 'fb-4',
            stem: 'Identify the type of error from its description.',
            template: 'A __BLANK__ error causes all measurements to be shifted in the same direction, affecting the __BLANK__ of the result.',
            blanks: [{ answer: 'systematic' }, { answer: 'accuracy' }],
            rationale: 'Systematic errors shift all readings consistently (like a zero error), which biases the result, reducing accuracy.'
        },
        {
            id: 'fb-5',
            stem: 'Complete the sentence on measuring instruments.',
            template: 'The smallest change an instrument can detect is called its __BLANK__.',
            blanks: [{ answer: 'resolution' }],
            rationale: 'Resolution refers to the smallest scale division or change detectible by the measuring instrument.'
        },
        {
            id: 'fb-6',
            stem: 'Fill in the blanks regarding scientific consensus.',
            template: 'If a finding cannot be replicated by independent researchers, it fails the test of __BLANK__.',
            blanks: [{ answer: 'reproducibility' }],
            rationale: 'Reproducibility means other teams using the same methods find the same results.'
        },
        {
            id: 'fb-7',
            stem: 'Complete the statement regarding vectors.',
            template: 'To resolve a force vector F into its horizontal component adjacent to the angle θ, you multiply F by __BLANK__ θ.',
            blanks: [{ answer: 'cos' }],
            rationale: 'Adjacent components use cosine (F cos θ) and opposite components use sine (F sin θ).'
        },
        {
            id: 'fb-8',
            stem: 'Identify the imaging technique.',
            template: 'Pregnant women are scanned using __BLANK__ because it relies on non-ionising sound waves and poses no risk to the foetus.',
            blanks: [{ answer: 'ultrasound' }],
            rationale: 'Ultrasound uses high-frequency sound, completely avoiding the ionising radiation risks of X-rays.'
        }
    ],
    dragdrop: [
        {
            id: 'dd-1',
            stem: 'Sort these physical quantities into Base and Derived units.',
            categories: ['Base Quantity', 'Derived Quantity'],
            items: [
                { text: 'Mass', category: 'Base Quantity' },
                { text: 'Temperature', category: 'Base Quantity' },
                { text: 'Time', category: 'Base Quantity' },
                { text: 'Force', category: 'Derived Quantity' },
                { text: 'Pressure', category: 'Derived Quantity' },
                { text: 'Energy', category: 'Derived Quantity' },
                { text: 'Voltage', category: 'Derived Quantity' }
            ]
        },
        {
            id: 'dd-2',
            stem: 'Categorise these errors into Random or Systematic.',
            categories: ['Random Error', 'Systematic Error'],
            items: [
                { text: 'Fluctuation in human reaction time', category: 'Random Error' },
                { text: 'Reading a meniscus from slightly different angles', category: 'Random Error' },
                { text: 'A ruler starting at 1mm instead of 0mm', category: 'Systematic Error' },
                { text: 'An improperly calibrated electronic scale', category: 'Systematic Error' },
                { text: 'A constant background radiation offset', category: 'Systematic Error' }
            ]
        },
        {
            id: 'dd-3',
            stem: 'Match the technology to its primarily exploited physics principle.',
            categories: ['Electromagnetic Induction', 'Total Internal Reflection', 'High-Frequency Sound'],
            items: [
                { text: 'Wind turbine generator', category: 'Electromagnetic Induction' },
                { text: 'Dynamo on a bicycle wheel', category: 'Electromagnetic Induction' },
                { text: 'Fibre-optic cables', category: 'Total Internal Reflection' },
                { text: 'Endoscopes', category: 'Total Internal Reflection' },
                { text: 'Foetal scanning', category: 'High-Frequency Sound' },
                { text: 'Sonar pulse-echo depth finding', category: 'High-Frequency Sound' }
            ]
        },
        {
            id: 'dd-4',
            stem: 'Match the order-of-magnitude estimates to the correct physical quantity.',
            categories: ['~10⁻¹⁵ m', '~10⁻¹⁰ m', '~10⁸ m s⁻¹'],
            items: [
                { text: 'Radius of an atomic nucleus', category: '~10⁻¹⁵ m' },
                { text: 'Radius of an entire atom', category: '~10⁻¹⁰ m' },
                { text: 'Speed of light in a vacuum', category: '~10⁸ m s⁻¹' }
            ]
        }
    ],
    sequence: [
        {
            id: 'seq-1',
            stem: 'Arrange the four-step strategy for estimating an unfamiliar physical quantity into correct order.',
            steps: [
                'Identify the physical quantity to estimate',
                'Break the object down into simpler logical parts',
                'Assign reasonable values to each part based on everyday experience',
                'Combine the parts to reach a final total and check if reasonable'
            ]
        },
        {
            id: 'seq-2',
            stem: 'Order the steps for finding the uncertainty in a gradient using a graph.',
            steps: [
                'Draw horizontal and vertical error bars on all data points',
                'Draw a line of steepest slope and a line of shallowest slope passing through the error bars',
                'Calculate the gradients of both the steepest (max) and shallowest (min) lines',
                'Subtract the min gradient from the max gradient and divide by 2'
            ]
        },
        {
            id: 'seq-3',
            stem: 'Order the process of scientific progression from discovery to consensus.',
            steps: [
                'A scientist forms a hypothesis based on an observation',
                'The scientist designs an experiment and collects data',
                'The manuscript undergoes peer review by independent experts',
                'The paper is published in an academic journal',
                'Other independent teams successfully replicate the experiment',
                'A scientific consensus is formed around the finding'
            ]
        }
    ],
    keyword: [
        {
            id: 'kw-1',
            stem: 'Explain the difference between accuracy and precision in physical measurements. [2 marks]',
            marks: 2,
            keywords: ['accuracy', 'true value', 'precision', 'repeat', 'spread'],
            modelAnswer: 'Accuracy is how close a measured value is to the true (accepted) value. Precision refers to how close repeated readings are to each other (the spread of results).'
        },
        {
            id: 'kw-2',
            stem: 'Describe the peer review process for scientific journals. [3 marks]',
            marks: 3,
            keywords: ['independent experts', 'evaluate', 'methodology', 'conclusions', 'publish'],
            modelAnswer: 'Before publication, a manuscript is sent to independent experts (peers) in the field. These reviewers evaluate the methodology, validity of the data, and conclusions. Based on this, the paper is accepted, revised, or rejected.'
        },
        {
            id: 'kw-3',
            stem: 'Explain why random errors cannot be entirely eliminated but their effect can be reduced. [2 marks]',
            marks: 2,
            keywords: ['fluctuations', 'unpredictable', 'repeat', 'mean'],
            modelAnswer: 'Random errors are caused by unpredictable fluctuations (e.g., reaction time, noise). While they cannot be eliminated, their effect is reduced by taking repeat readings and calculating a mean.'
        },
        {
            id: 'kw-4',
            stem: 'A student plots a graph to find a relationship, but notices one data point lies far away from the trend. How should they handle this anomalous result? [2 marks]',
            marks: 2,
            keywords: ['circle', 'ignore', 'best-fit line', 'explain'],
            modelAnswer: 'The student should circle the anomalous point and ignore it when drawing the line of best-fit. They should then attempt to explain it as a measurement error.'
        }
    ],
    flashcards: [
        {
            id: 'fc-1',
            front: 'What are the 7 SI base units?',
            back: '• Length: metre (m)\n• Mass: kilogram (kg)\n• Time: second (s)\n• Electric current: ampere (A)\n• Temperature: kelvin (K)\n• Amount of substance: mole (mol)\n• Luminous intensity: candela (cd)',
            topic: 'SI Units'
        },
        {
            id: 'fc-2',
            front: 'What is the base unit equivalent of the joule (J)?',
            back: 'kg m² s⁻²\n(Derived from Work = Force × distance = kg m s⁻² × m)',
            topic: 'Derived Units'
        },
        {
            id: 'fc-3',
            front: 'Define "resolution" of a measuring instrument.',
            back: 'The smallest change in the quantity being measured that the instrument can detect (e.g., 1 mm on a school ruler).',
            topic: 'Limitations of Measurements'
        },
        {
            id: 'fc-4',
            front: 'How do you calculate the absolute reading uncertainty for a single analogue measurement?',
            back: 'Typically ± half the resolution of the instrument (e.g., ± 0.5 mm for a ruler).',
            topic: 'Limitations of Measurements'
        },
        {
            id: 'fc-5',
            front: 'State the rule for propagating uncertainties when multiplying two quantities.',
            back: 'Add the **percentage uncertainties** of the two quantities.',
            topic: 'Uncertainty Propagation'
        },
        {
            id: 'fc-6',
            front: 'State the rule for propagating uncertainty when raising a quantity to a power (n).',
            back: 'Multiply the **percentage uncertainty** of the quantity by the power (n).',
            topic: 'Uncertainty Propagation'
        },
        {
            id: 'fc-7',
            front: 'What is a "zero error"?',
            back: 'A systematic error where an instrument does not read true zero when it should (e.g., a micrometer reading 0.02 mm when closed). You must subtract this from all readings.',
            topic: 'Limitations of Measurements'
        },
        {
            id: 'fc-8',
            front: 'What is "parallax error"?',
            back: 'An error occurring when reading an analogue scale from an angle rather than directly perpendicular on. It is a systematic reading error.',
            topic: 'Practical Skills'
        },
        {
            id: 'fc-9',
            front: 'How do you find the uncertainty in the gradient of a graph?',
            back: 'Uncertainty = (Maximum gradient − Minimum gradient) / 2',
            topic: 'Scientific Communication'
        },
        {
            id: 'fc-10',
            front: 'Define "reproducibility" in science.',
            back: 'The ability for independent researchers to follow the same methodology and obtain the same (or very similar) results.',
            topic: 'The Scientific Community'
        },
        {
            id: 'fc-11',
            front: 'Give an example of a physics technology requiring a risk-benefit analysis.',
            back: '• X-rays: Benefit = accurate medical diagnosis. Risk = exposure to ionising radiation which can cause cancer.\n• Nuclear power: Benefit = low-carbon high-output energy. Risk = radioactive waste storage.',
            topic: 'Science & Society'
        },
        {
            id: 'fc-12',
            front: 'What is the "order of magnitude" of the mass of an electron?',
            back: '~ 10⁻³⁰ kg',
            topic: 'Orders of Magnitude'
        }
    ]
};
