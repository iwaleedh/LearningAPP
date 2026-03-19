export const exercises_biology_4_6 = {
    mcq: [
        {
            id: 'mcq-t6-1',
            stem: 'Which aseptic technique involves passing the mouth of a culture tube through a Bunsen burner flame before and after transferring bacteria?',
            options: ['Sterilizing the inoculating loop', 'Flaming the tube opening', 'Taping the Petri dish lid', 'Incubating at 37°C'],
            correctAnswer: 1,
            rationale: 'Flaming the tube opening creates an upward convection current that prevents airborne contaminants from entering. Sterilizing the loop kills bacteria ON the loop, not in the tube. Taping dishes prevents accidental opening but doesn\'t protect during transfer. Incubation temperature affects growth rate, not contamination during transfer.',
            topic: 'Culturing Microorganisms',
        },
        {
            id: 'mcq-t6-2',
            stem: 'Why should Petri dish lids be taped closed but not completely sealed with tape after inoculation?',
            options: ['To prevent oxygen from reaching the bacteria', 'To allow gas exchange while preventing contamination', 'To maintain a constant temperature', 'To increase humidity inside the dish'],
            correctAnswer: 1,
            rationale: 'Partial taping allows oxygen in and CO₂ out, supporting aerobic respiration while preventing contaminants. Complete sealing would create anaerobic conditions, potentially allowing growth of dangerous anaerobes. Taping doesn\'t affect temperature or humidity significantly.',
            topic: 'Culturing Microorganisms',
        },
        {
            id: 'mcq-t6-3',
            stem: 'What is the purpose of a haemocytometer in microbiology?',
            options: ['Measuring the turbidity of a bacterial culture', 'Counting cells directly in a known volume', 'Determining the mass of bacterial cells', 'Separating live and dead cells'],
            correctAnswer: 1,
            rationale: 'A haemocytometer has a grid of known depth, allowing direct cell counting in a calibrated volume. Turbidity is measured by colorimeter, not haemocytometer. Mass requires drying and weighing. Haemocytometers count all cells, not distinguishing live from dead without staining.',
            topic: 'Measuring Growth',
        },
        {
            id: 'mcq-t6-4',
            stem: 'In serial dilution, if 1 cm³ of a 10⁻³ dilution is added to 9 cm³ of sterile water, what is the new dilution factor?',
            options: ['10⁻²', '10⁻⁴', '10⁻⁶', '10⁻¹²'],
            correctAnswer: 1,
            rationale: 'Each 1:10 dilution increases the negative exponent by 1. Starting at 10⁻³, adding to 9 cm³ water creates a 10⁻⁴ dilution. 10⁻² would be a concentration, not dilution. 10⁻⁶ would require three more dilutions. 10⁻¹² would require nine additional dilutions.',
            topic: 'Measuring Growth',
        },
        {
            id: 'mcq-t6-5',
            stem: 'During which phase of the bacterial growth curve are cells dividing at their maximum rate?',
            options: ['Lag phase', 'Log phase', 'Stationary phase', 'Death phase'],
            correctAnswer: 1,
            rationale: 'In log (exponential) phase, cells have adapted to conditions and divide binary fission at maximum rate. Lag phase involves adaptation without division. Stationary phase has equal division and death rates. Death phase has death rate exceeding division rate.',
            topic: 'Bacterial Growth Curve',
        },
        {
            id: 'mcq-t6-6',
            stem: 'Why is a logarithmic scale used when plotting bacterial growth curves?',
            options: ['To make the graph look more scientific', 'Because bacterial numbers increase exponentially', 'To hide the death phase', 'To convert bacteria into viruses'],
            correctAnswer: 1,
            rationale: 'Bacteria divide by binary fission, causing exponential population growth (2ⁿ). A log scale compresses this enormous range into a readable linear form. It doesn\'t hide any phases or change organism type. It\'s not about appearance but mathematical necessity.',
            topic: 'Bacterial Growth Curve',
        },
        {
            id: 'mcq-t6-7',
            stem: 'In Core Practical 13, what does increasing turbidity of a bacterial culture indicate when measured with a colorimeter?',
            options: ['The bacteria are dying', 'The solution is becoming clearer', 'The bacterial population is increasing', 'The nutrient broth is being depleted'],
            correctAnswer: 2,
            rationale: 'Turbidity (cloudiness) increases as more bacteria scatter light, indicating population growth. Dying bacteria might lyse and decrease turbidity. Increased turbidity means LESS light passes through (lower transmission). While nutrients deplete during growth, turbidity measures cells, not nutrients.',
            topic: 'Core Practical 13',
        },
        {
            id: 'mcq-t6-8',
            stem: 'Why is a colorimeter blank prepared with sterile nutrient broth before measuring bacterial turbidity?',
            options: ['To calibrate the instrument to 100% transmission with no bacteria', 'To kill any bacteria in the sample', 'To provide nutrients for the bacteria', 'To increase the growth rate'],
            correctAnswer: 0,
            rationale: 'The blank sets 100% transmission baseline, accounting for the broth\'s color and turbidity. It doesn\'t affect bacteria in samples. The blank is sterile, not providing for growth. It\'s used for calibration, not affecting growth rate.',
            topic: 'Core Practical 13',
        },
        {
            id: 'mcq-t6-9',
            stem: 'Which structure is found in bacterial cells but NOT in viruses?',
            options: ['Capsid', '70S ribosomes', 'Reverse transcriptase', 'Attachment proteins'],
            correctAnswer: 1,
            rationale: '70S ribosomes are prokaryotic protein-synthesis machinery absent in viruses (which hijack host ribosomes). Capsids, reverse transcriptase (in retroviruses), and attachment proteins are all viral structures or enzymes.',
            topic: 'Bacterial vs Viral Structure',
        },
        {
            id: 'mcq-t6-10',
            stem: 'What is the function of peptidoglycan in bacterial cell walls?',
            options: ['Storing genetic material', 'Providing structural strength and preventing osmotic lysis', 'Facilitating protein synthesis', 'Capturing light energy for photosynthesis'],
            correctAnswer: 1,
            rationale: 'Peptidoglycan forms a mesh-like layer that maintains cell shape and prevents bursting in hypotonic environments. DNA is stored in the nucleoid. Ribosomes synthesize proteins. Photosynthesis occurs in chloroplasts (eukaryotes) or chromatophores (some bacteria).',
            topic: 'Bacterial vs Viral Structure',
        },
        {
            id: 'mcq-t6-11',
            stem: 'Why does Mycobacterium tuberculosis survive inside macrophages?',
            options: ['It has a thick waxy cell wall resistant to lysosomal enzymes', 'It produces toxins that kill the macrophage immediately', 'It lacks a cell wall and is difficult to detect', 'It replicates faster than the macrophage can digest it'],
            correctAnswer: 0,
            rationale: 'M. tuberculosis has mycolic acid in its cell wall, making it resistant to digestion and allowing survival inside macrophages. It doesn\'t kill macrophages immediately (that would prevent its hiding place). It DOES have a cell wall. Survival isn\'t about replication speed.',
            topic: 'TB & HIV',
        },
        {
            id: 'mcq-t6-12',
            stem: 'Which enzyme enables HIV to convert its RNA genome into DNA for integration into the host genome?',
            options: ['DNA polymerase', 'Reverse transcriptase', 'RNA polymerase', 'Taq polymerase'],
            correctAnswer: 1,
            rationale: 'Reverse transcriptase synthesizes DNA from an RNA template, essential for HIV replication. DNA polymerase copies DNA to DNA. RNA polymerase transcribes DNA to RNA. Taq polymerase is used in PCR, not by HIV naturally.',
            topic: 'TB & HIV',
        },
        {
            id: 'mcq-t6-13',
            stem: 'Which physical barrier prevents pathogens from entering the respiratory tract?',
            options: ['Stomach acid', 'Mucus and ciliated epithelial cells', 'Lysozyme in tears', 'Sebum on skin'],
            correctAnswer: 1,
            rationale: 'Mucus traps pathogens and cilia sweep them upward to be swallowed or expelled. Stomach acid protects the digestive tract. Lysozyme in tears protects eyes. Sebum protects skin surfaces.',
            topic: 'Pathogen Entry Routes',
        },
        {
            id: 'mcq-t6-14',
            stem: 'Why are mucous membranes particularly vulnerable to pathogen entry?',
            options: ['They are dry and keratinized', 'They are thin, moist, and have a large surface area', 'They contain high concentrations of acid', 'They lack any immune cells'],
            correctAnswer: 1,
            rationale: 'Mucous membranes are thin, moist epithelia with large surface areas, facilitating pathogen adherence and penetration. They are NOT dry/keratinized like skin. They don\'t contain acid (stomach does). They DO contain immune cells like macrophages.',
            topic: 'Pathogen Entry Routes',
        },
        {
            id: 'mcq-t6-15',
            stem: 'What is the role of histamine in the non-specific immune response?',
            options: ['Directly killing bacteria', 'Causing vasodilation and increased capillary permeability', 'Producing antibodies', 'Stimulating T helper cell division'],
            correctAnswer: 1,
            rationale: 'Histamine causes vasodilation (redness/heat) and makes capillaries leaky (swelling), allowing immune cells and plasma to reach infected tissue. It doesn\'t kill bacteria directly. Antibodies are produced by B cells. T cell stimulation involves cytokines, not histamine.',
            topic: 'Non-Specific Immune Responses',
        },
        {
            id: 'mcq-t6-16',
            stem: 'What forms when a lysosome fuses with a phagosome containing engulfed bacteria?',
            options: ['Antigen-presenting cell', 'Phagolysosome', 'Plasma cell', 'Memory cell'],
            correctAnswer: 1,
            rationale: 'A phagolysosome forms when lysosomal enzymes mix with the phagosome contents for digestion. An APC is the whole cell that displays fragments, not the organelle. Plasma cells produce antibodies. Memory cells are lymphocytes from specific immunity.',
            topic: 'Non-Specific Immune Responses',
        },
        {
            id: 'mcq-t6-17',
            stem: 'Which cell type releases cytokines that stimulate clonal expansion of B and T cells?',
            options: ['T killer cell', 'T helper cell', 'Plasma cell', 'Phagocyte'],
            correctAnswer: 1,
            rationale: 'T helper cells release cytokines that activate and stimulate proliferation of other immune cells. T killer cells directly destroy infected cells. Plasma cells produce antibodies. Phagocytes are non-specific responders.',
            topic: 'Specific Immune Response',
        },
        {
            id: 'mcq-t6-18',
            stem: 'What is the primary function of B memory cells formed during a primary immune response?',
            options: ['Secreting large amounts of antibodies immediately', 'Remaining in the body to respond rapidly to future infections', 'Killing infected body cells', 'Producing cytokines'],
            correctAnswer: 1,
            rationale: 'B memory cells persist long-term and enable faster, stronger secondary responses upon re-exposure. Plasma cells (not memory cells) secrete antibodies. T killer cells kill infected cells. Cytokines come from T helper cells.',
            topic: 'Specific Immune Response',
        },
        {
            id: 'mcq-t6-19',
            stem: 'What is the function of perforin released by T killer cells?',
            options: ['To stimulate antibody production', 'To create pores in the target cell membrane', 'To neutralize free viruses', 'To promote phagocytosis'],
            correctAnswer: 1,
            rationale: 'Perforin creates pores in infected cell membranes, allowing granzymes to enter and trigger apoptosis. It doesn\'t affect antibody production. It doesn\'t neutralize viruses directly. Phagocytosis is performed by phagocytes, not triggered by perforin.',
            topic: 'T Killer Cells & Antibodies',
        },
        {
            id: 'mcq-t6-20',
            stem: 'The Y-shaped structure of an antibody is maintained by which type of bond?',
            options: ['Hydrogen bonds', 'Disulfide bridges', 'Ionic bonds', 'Peptide bonds'],
            correctAnswer: 1,
            rationale: 'Disulfide bridges between cysteine residues hold the heavy and light chains together and maintain the Y-shape. Hydrogen and ionic bonds contribute to protein folding but aren\'t the primary structural bonds. Peptide bonds form the polypeptide backbone.',
            topic: 'T Killer Cells & Antibodies',
        },
        {
            id: 'mcq-t6-21',
            stem: 'Which type of immunity results from receiving antibodies via breast milk or across the placenta?',
            options: ['Active natural immunity', 'Active artificial immunity', 'Passive natural immunity', 'Passive artificial immunity'],
            correctAnswer: 2,
            rationale: 'Passive natural immunity involves receiving pre-made antibodies naturally (placenta, breast milk). Active immunity requires the body to produce its own antibodies. Artificial immunity involves medical intervention like vaccines or antibody injections.',
            topic: 'Developing Immunity',
        },
        {
            id: 'mcq-t6-22',
            stem: 'Why does the secondary immune response produce antibodies more quickly than the primary response?',
            options: ['The pathogen is weaker the second time', 'Memory B cells can rapidly differentiate into plasma cells', 'More macrophages are available', 'The antibodies are more effective'],
            correctAnswer: 1,
            rationale: 'Memory B cells from the primary response recognize the antigen immediately and differentiate into plasma cells without needing full activation. The pathogen is not weaker. Macrophage numbers aren\'t the key factor. Antibody effectiveness is similar; speed is the difference.',
            topic: 'Developing Immunity',
        },
        {
            id: 'mcq-t6-23',
            stem: 'What is the difference between bactericidal and bacteriostatic antibiotics?',
            options: ['Bactericidal kills bacteria; bacteriostatic stops bacterial growth', 'Bacteriostatic kills bacteria; bactericidal stops bacterial growth', 'Both kill bacteria but at different rates', 'Bactericidal works on viruses; bacteriostatic works on bacteria'],
            correctAnswer: 0,
            rationale: 'Bactericidal antibiotics kill bacteria directly, while bacteriostatic antibiotics inhibit growth/division, allowing the immune system to eliminate them. The reverse is incorrect. They differ in mechanism, not just rate. Neither works on viruses.',
            topic: 'Antibiotics & Resistance',
        },
        {
            id: 'mcq-t6-24',
            stem: 'How does MRSA demonstrate antibiotic resistance?',
            options: ['It can digest penicillin', 'It has altered penicillin-binding proteins that prevent β-lactam attachment', 'It pumps antibiotics out of the cell faster', 'It hides inside host cells'],
            correctAnswer: 1,
            rationale: 'MRSA has modified penicillin-binding proteins that don\'t bind β-lactam antibiotics. It doesn\'t digest penicillin (β-lactamase producers do). Efflux pumps are a different resistance mechanism. Hiding in cells isn\'t the MRSA mechanism.',
            topic: 'Antibiotics & Resistance',
        },
        {
            id: 'mcq-t6-25',
            stem: 'Why are narrow-spectrum antibiotics preferred over broad-spectrum when possible?',
            options: ['They are cheaper to produce', 'They reduce disruption to normal microbiota and slow resistance development', 'They work faster', 'They can treat viral infections too'],
            correctAnswer: 1,
            rationale: 'Narrow-spectrum antibiotics target specific pathogens, preserving beneficial microbiota and reducing selection pressure for resistance. Cost varies. Speed isn\'t necessarily different. No antibiotic treats viral infections.',
            topic: 'Infection Control & HCAIs',
        },
        {
            id: 'mcq-t6-26',
            stem: 'Which practice is most effective at preventing Healthcare-Associated Infections (HCAIs)?',
            options: ['Prescribing broad-spectrum antibiotics', 'Proper hand hygiene with alcohol-based rubs or soap', 'Keeping patients in isolation indefinitely', 'Using older, less effective antibiotics'],
            correctAnswer: 1,
            rationale: 'Hand hygiene breaks the chain of transmission, preventing pathogen spread. Broad-spectrum antibiotics increase resistance risk. Indefinite isolation isn\'t practical. Older antibiotics may be less effective due to resistance.',
            topic: 'Infection Control & HCAIs',
        },
        {
            id: 'mcq-t6-27',
            stem: 'In disc diffusion (Core Practical 14), why are antibiotic discs placed on the agar AFTER the bacterial lawn has been inoculated?',
            options: ['To prevent the antibiotic from evaporating', 'To allow the antibiotic to diffuse and create a concentration gradient', 'To kill the bacteria before they grow', 'To make the zones easier to see'],
            correctAnswer: 1,
            rationale: 'The antibiotic diffuses outward from the disc, creating a concentration gradient that inhibits growth where concentration exceeds MIC. Evaporation isn\'t the main concern. The bacteria must grow for zones to be visible. Killing all bacteria would show no zones.',
            topic: 'Core Practical 14',
        },
        {
            id: 'mcq-t6-28',
            stem: 'Why is the area of a zone of inhibition calculated as πr² rather than just measuring the diameter?',
            options: ['Diameter is too difficult to measure', 'Area better represents the total antibiotic effect', 'The zone is always perfectly circular', 'It allows comparison between different antibiotics'],
            correctAnswer: 1,
            rationale: 'Area accounts for the total region where bacteria are inhibited, which relates to antibiotic effectiveness. Diameter can be measured but area is more meaningful. Zones aren\'t always perfectly circular. Area enables comparison but that\'s not WHY we use the formula.',
            topic: 'Core Practical 14',
        },
        {
            id: 'mcq-t6-29',
            stem: 'During decomposition, why do saprobionts secrete extracellular enzymes rather than digesting material internally?',
            options: ['They lack a digestive system', 'The food sources are too large to ingest', 'Extracellular digestion allows absorption of soluble products', 'Internal digestion would kill the saprobionts'],
            correctAnswer: 2,
            rationale: 'Saprobionts secrete enzymes onto dead organic matter, digesting it externally, then absorb the soluble breakdown products. It\'s about efficient nutrient acquisition, not lacking digestive systems. Some material IS ingestible. Internal digestion wouldn\'t kill them.',
            topic: 'Decomposition',
        },
        {
            id: 'mcq-t6-30',
            stem: 'What is the role of cellulases in decomposition?',
            options: ['Breaking down proteins into amino acids', 'Hydrolyzing cellulose in plant cell walls into glucose', 'Digesting lipids into fatty acids', 'Breaking down nucleic acids'],
            correctAnswer: 1,
            rationale: 'Cellulases hydrolyze β-1,4-glycosidic bonds in cellulose, releasing glucose. Proteases break down proteins. Lipases break down lipids. Nucleases break down nucleic acids.',
            topic: 'Decomposition',
        },
        {
            id: 'mcq-t6-31',
            stem: 'What causes rigor mortis after death?',
            options: ['Calcium ions leak out of cells', 'ATP depletion prevents myosin detachment from actin', 'Muscles contract voluntarily', 'Body temperature rises'],
            correctAnswer: 1,
            rationale: 'After death, ATP production stops. Without ATP, myosin heads cannot detach from actin filaments, causing muscles to remain contracted. Calcium leakage initiates but doesn\'t maintain rigor. Muscles don\'t contract voluntarily after death. Body temperature drops (algor mortis).',
            topic: 'Forensic Time of Death',
        },
        {
            id: 'mcq-t6-32',
            stem: 'Why can forensic entomology provide an accurate estimate of post-mortem interval?',
            options: ['Insects arrive at predictable stages of decomposition', 'All insects die at the same time as the body', 'Insects only colonize bodies in summer', 'Each insect species has a known developmental timeline at given temperatures'],
            correctAnswer: 3,
            rationale: 'Different insects colonize at different decomposition stages, and their life cycles have predictable durations at specific temperatures, allowing PMI estimation. Insects arrive at varying stages, not predictably. They don\'t die with the body. They colonize year-round in suitable conditions.',
            topic: 'Forensic Time of Death',
        },
        {
            id: 'mcq-t6-33',
            stem: 'During PCR, what happens at the 95°C denaturation step?',
            options: ['Primers bind to DNA', 'Taq polymerase extends the DNA strand', 'Hydrogen bonds break, separating DNA strands', 'DNA is transcribed into RNA'],
            correctAnswer: 2,
            rationale: 'At 95°C, hydrogen bonds between base pairs break, separating double-stranded DNA into single strands. Primers bind at 55°C (annealing). Extension occurs at 72°C. Transcription is not part of PCR.',
            topic: 'PCR & DNA Profiling',
        },
        {
            id: 'mcq-t6-34',
            stem: 'Why is Taq polymerase used in PCR instead of normal DNA polymerase?',
            options: ['It works faster', 'It is heat-stable and survives the denaturation temperature', 'It makes fewer errors', 'It can use RNA as a template'],
            correctAnswer: 1,
            rationale: 'Taq polymerase from Thermus aquaticus remains active at 95°C, eliminating the need to add fresh enzyme each cycle. Speed isn\'t the main advantage. It actually has higher error rates than some polymerases. It uses DNA, not RNA templates.',
            topic: 'PCR & DNA Profiling',
        },
    ],

    fillblank: [
        {
            id: 'fb-t6-1',
            stem: 'Complete the following about aseptic techniques.',
            template: 'When culturing bacteria, work near a __BLANK__ burner to create an upward air current that prevents contamination.',
            blanks: [
                { answer: 'Bunsen' },
            ],
            rationale: 'A Bunsen burner creates an upward convection current of warm air that draws airborne microbes away from the working area, reducing contamination risk.',
        },
        {
            id: 'fb-t6-2',
            stem: 'Complete the following about bacterial growth phases.',
            template: 'During the __BLANK__ phase, bacteria are adapting to their environment and are not dividing.',
            blanks: [
                { answer: 'lag' },
            ],
            rationale: 'The lag phase is an adaptation period where bacteria synthesise enzymes and molecules needed for growth. Cell division has not yet begun.',
        },
        {
            id: 'fb-t6-3',
            stem: 'Complete the following about measuring bacterial growth.',
            template: 'A __BLANK__ is a specialised counting chamber used to count cells directly under a microscope.',
            blanks: [
                { answer: 'haemocytometer' },
            ],
            rationale: 'A haemocytometer is a thick glass slide with a ruled grid that holds a known volume of liquid, allowing direct cell counting.',
        },
        {
            id: 'fb-t6-4',
            stem: 'Complete the following about bacterial structure.',
            template: 'Bacterial cell walls are made of __BLANK__, a polymer of sugars and amino acids.',
            blanks: [
                { answer: 'peptidoglycan' },
            ],
            rationale: 'Peptidoglycan (murein) forms a mesh-like layer outside the bacterial plasma membrane, providing structural support and protection.',
        },
        {
            id: 'fb-t6-5',
            stem: 'Complete the following about bacterial structure.',
            template: 'Bacteria have __BLANK__ ribosomes, which are smaller than the 80S ribosomes found in eukaryotes.',
            blanks: [
                { answer: '70S' },
            ],
            rationale: 'Bacterial ribosomes are 70S (composed of 50S and 30S subunits), making them a target for antibiotics that selectively inhibit bacterial protein synthesis.',
        },
        {
            id: 'fb-t6-6',
            stem: 'Complete the following about viral structure.',
            template: 'A virus consists of genetic material surrounded by a protein coat called a __BLANK__.',
            blanks: [
                { answer: 'capsid' },
            ],
            rationale: 'The capsid is a protein shell that protects the viral nucleic acid (DNA or RNA) and helps the virus attach to host cells.',
        },
        {
            id: 'fb-t6-7',
            stem: 'Complete the following about tuberculosis.',
            template: 'Mycobacterium tuberculosis has a __BLANK__ cell wall that makes it resistant to drying and disinfectants.',
            blanks: [
                { answer: 'waxy' },
            ],
            rationale: 'The waxy cell wall contains mycolic acids, which protect the bacterium from host defences and many antibiotics.',
        },
        {
            id: 'fb-t6-8',
            stem: 'Complete the following about HIV.',
            template: 'HIV infects __BLANK__ cells by binding to CD4 receptors on their surface.',
            blanks: [
                { answer: 'T helper' },
            ],
            rationale: 'HIV targets CD4+ T helper cells, which coordinate the immune response. Their destruction leads to immunodeficiency.',
        },
        {
            id: 'fb-t6-9',
            stem: 'Complete the following about HIV replication.',
            template: 'HIV uses the enzyme __BLANK__ to convert its RNA into DNA before integration into the host genome.',
            blanks: [
                { answer: 'reverse transcriptase' },
            ],
            rationale: 'Reverse transcriptase synthesises a DNA copy (cDNA) from the viral RNA genome, allowing integration into host DNA.',
        },
        {
            id: 'fb-t6-10',
            stem: 'Complete the following about physical barriers.',
            template: 'Tears and saliva contain __BLANK__, an enzyme that breaks down bacterial cell walls.',
            blanks: [
                { answer: 'lysozyme' },
            ],
            rationale: 'Lysozyme hydrolyses the peptidoglycan in bacterial cell walls, providing a non-specific defence against infection.',
        },
        {
            id: 'fb-t6-11',
            stem: 'Complete the following about the inflammatory response.',
            template: 'Mast cells release __BLANK__, which causes vasodilation and increases blood vessel permeability.',
            blanks: [
                { answer: 'histamine' },
            ],
            rationale: 'Histamine causes arterioles to dilate and capillaries to become more permeable, leading to redness, heat, swelling, and pain.',
        },
        {
            id: 'fb-t6-12',
            stem: 'Complete the following about phagocytosis.',
            template: 'A phagosome fuses with a lysosome to form a __BLANK__, where enzymes digest the pathogen.',
            blanks: [
                { answer: 'phagolysosome' },
            ],
            rationale: 'The phagolysosome is a digestive vacuole where hydrolytic enzymes from the lysosome break down the engulfed pathogen.',
        },
        {
            id: 'fb-t6-13',
            stem: 'Complete the following about T cells.',
            template: '__BLANK__ cells release perforin and granzymes to induce apoptosis in infected cells.',
            blanks: [
                { answer: 'T killer' },
            ],
            rationale: 'T killer (cytotoxic T) cells recognise infected cells presenting viral antigens on MHC I and destroy them via apoptosis.',
        },
        {
            id: 'fb-t6-14',
            stem: 'Complete the following about PCR.',
            template: 'In PCR, DNA is denatured at __BLANK__°C, separating the double helix into single strands.',
            blanks: [
                { answer: '95' },
            ],
            rationale: 'At 95°C, hydrogen bonds between base pairs break, separating DNA into single strands ready for primer annealing.',
        },
        {
            id: 'fb-t6-15',
            stem: 'Complete the following about PCR.',
            template: '__BLANK__ polymerase is used in PCR because it is thermostable and survives the high denaturation temperature.',
            blanks: [
                { answer: 'Taq' },
            ],
            rationale: 'Taq polymerase, isolated from Thermus aquaticus bacteria, remains active after repeated heating cycles, making PCR automation possible.',
        },
    ],

    dragdrop: [
        {
            id: 'dd-t6-1',
            stem: 'Categorize each feature as belonging to Bacteria, Viruses, or Both:',
            categories: ['Bacteria', 'Viruses', 'Both'],
            items: [
                { text: 'Cell wall made of peptidoglycan', category: 'Bacteria' },
                { text: 'Protein capsid surrounding genetic material', category: 'Viruses' },
                { text: 'Ribosomes for protein synthesis', category: 'Bacteria' },
                { text: 'Circular DNA genome', category: 'Bacteria' },
                { text: 'Plasmids carrying accessory genes', category: 'Bacteria' },
                { text: 'Attachment proteins for host cell binding', category: 'Viruses' },
                { text: 'Genetic material (DNA or RNA)', category: 'Both' },
                { text: 'Lack of membrane-bound organelles', category: 'Both' },
                { text: 'Envelope derived from host cell membrane', category: 'Viruses' },
            ],
        },
        {
            id: 'dd-t6-2',
            stem: 'Classify each immune response component as Non-specific (Innate) or Specific (Adaptive):',
            categories: ['Non-specific', 'Specific'],
            items: [
                { text: 'Phagocytosis by macrophages', category: 'Non-specific' },
                { text: 'Production of antibodies by plasma cells', category: 'Specific' },
                { text: 'Inflammatory response', category: 'Non-specific' },
                { text: 'T cell activation and clonal selection', category: 'Specific' },
                { text: 'Physical barrier of intact skin', category: 'Non-specific' },
                { text: 'Memory cell formation', category: 'Specific' },
                { text: 'Lysozyme enzyme in tears and saliva', category: 'Non-specific' },
                { text: 'B cell receptor recognition of antigens', category: 'Specific' },
            ],
        },
        {
            id: 'dd-t6-3',
            stem: 'Categorize each immunity example as Active or Passive immunity:',
            categories: ['Active Immunity', 'Passive Immunity'],
            items: [
                { text: 'Recovery from chickenpox infection', category: 'Active Immunity' },
                { text: 'Maternal antibodies crossing placenta', category: 'Passive Immunity' },
                { text: 'Vaccination with weakened pathogen', category: 'Active Immunity' },
                { text: 'Injection of antivenom for snake bite', category: 'Passive Immunity' },
                { text: 'Antibodies received through breast milk', category: 'Passive Immunity' },
                { text: 'Booster vaccination triggering memory cells', category: 'Active Immunity' },
                { text: 'Administration of monoclonal antibodies', category: 'Passive Immunity' },
                { text: 'Natural infection leading to immune memory', category: 'Active Immunity' },
            ],
        },
        {
            id: 'dd-t6-4',
            stem: 'Classify each immunity type as Natural or Artificial:',
            categories: ['Natural', 'Artificial'],
            items: [
                { text: 'Exposure to pathogen causing disease', category: 'Natural' },
                { text: 'Vaccination with inactivated pathogen', category: 'Artificial' },
                { text: 'Antibodies transferred via placenta', category: 'Natural' },
                { text: 'Injection of pre-formed antibodies', category: 'Artificial' },
                { text: 'Recovery from infection with immunity', category: 'Natural' },
                { text: 'Oral polio vaccine administration', category: 'Artificial' },
                { text: 'Colostrum providing maternal antibodies', category: 'Natural' },
                { text: 'Toxoid vaccine for tetanus', category: 'Artificial' },
            ],
        },
        {
            id: 'dd-t6-5',
            stem: 'Categorize each antibiotic as Bactericidal or Bacteriostatic based on its mechanism:',
            categories: ['Bactericidal', 'Bacteriostatic'],
            items: [
                { text: 'Penicillin (inhibits cell wall synthesis)', category: 'Bactericidal' },
                { text: 'Tetracycline (inhibits protein synthesis)', category: 'Bacteriostatic' },
                { text: 'Polymyxin (disrupts cell membrane)', category: 'Bactericidal' },
                { text: 'Erythromycin (blocks ribosome function)', category: 'Bacteriostatic' },
                { text: 'Cephalosporin (prevents peptidoglycan formation)', category: 'Bactericidal' },
                { text: 'Chloramphenicol (stops protein synthesis)', category: 'Bacteriostatic' },
                { text: 'Vancomycin (disrupts cell wall formation)', category: 'Bactericidal' },
                { text: 'Sulfonamides (inhibit folate synthesis)', category: 'Bacteriostatic' },
            ],
        },
        {
            id: 'dd-t6-6',
            stem: 'Compare Primary and Secondary immune response characteristics:',
            categories: ['Primary Response', 'Secondary Response'],
            items: [
                { text: 'Takes 10-17 days to reach peak antibody levels', category: 'Primary Response' },
                { text: 'Rapid response within 2-7 days', category: 'Secondary Response' },
                { text: 'IgM is the main antibody produced initially', category: 'Primary Response' },
                { text: 'IgG is the dominant antibody class', category: 'Secondary Response' },
                { text: 'Higher peak antibody concentration', category: 'Secondary Response' },
                { text: 'Involves naive B and T cells', category: 'Primary Response' },
                { text: 'Activated by memory B cells', category: 'Secondary Response' },
                { text: 'Lower initial antibody levels', category: 'Primary Response' },
                { text: 'Longer-lasting antibody production', category: 'Secondary Response' },
            ],
        },
        {
            id: 'dd-t6-7',
            stem: 'Match each T cell function to the correct T cell type:',
            categories: ['T Helper Cells', 'T Killer Cells'],
            items: [
                { text: 'Release cytokines to activate B cells', category: 'T Helper Cells' },
                { text: 'Destroy virus-infected host cells', category: 'T Killer Cells' },
                { text: 'Produce interleukins to stimulate macrophages', category: 'T Helper Cells' },
                { text: 'Release perforin to create pores in target cells', category: 'T Killer Cells' },
                { text: 'Have CD4 surface receptors', category: 'T Helper Cells' },
                { text: 'Have CD8 surface receptors', category: 'T Killer Cells' },
                { text: 'Bind to antigen-presenting cells via MHC II', category: 'T Helper Cells' },
                { text: 'Induce apoptosis in infected cells', category: 'T Killer Cells' },
            ],
        },
        {
            id: 'dd-t6-8',
            stem: 'Categorize the outcomes of B cell differentiation:',
            categories: ['Plasma Cells', 'Memory B Cells'],
            items: [
                { text: 'Produce and secrete large amounts of antibodies', category: 'Plasma Cells' },
                { text: 'Long-lived cells remaining in the body', category: 'Memory B Cells' },
                { text: 'Short lifespan of a few days', category: 'Plasma Cells' },
                { text: 'Enable rapid secondary immune response', category: 'Memory B Cells' },
                { text: 'Extensive rough ER for antibody production', category: 'Plasma Cells' },
                { text: 'Circulate in blood and lymph ready for reinfection', category: 'Memory B Cells' },
                { text: 'Differentiate upon antigen re-exposure', category: 'Memory B Cells' },
                { text: 'Release antibodies into blood plasma', category: 'Plasma Cells' },
            ],
        },
        {
            id: 'dd-t6-9',
            stem: 'Identify what happens at each temperature stage of PCR:',
            categories: ['95°C (Denaturation)', '55°C (Annealing)', '72°C (Extension)'],
            items: [
                { text: 'Hydrogen bonds between DNA strands break', category: '95°C (Denaturation)' },
                { text: 'Primers bind to complementary sequences', category: '55°C (Annealing)' },
                { text: 'Taq polymerase adds nucleotides to primers', category: '72°C (Extension)' },
                { text: 'Double helix separates into single strands', category: '95°C (Denaturation)' },
                { text: 'DNA polymerase extends new strand 5\' to 3\'', category: '72°C (Extension)' },
                { text: 'Target DNA sequence is doubled', category: '72°C (Extension)' },
                { text: 'Primers attach to start of target region', category: '55°C (Annealing)' },
                { text: 'Template strands become single-stranded', category: '95°C (Denaturation)' },
            ],
        },
        {
            id: 'dd-t6-10',
            stem: 'Classify each indicator by what it reveals about time of death:',
            categories: ['Algor Mortis', 'Rigor Mortis', 'Entomology'],
            items: [
                { text: 'Body temperature drops approximately 1.5°C per hour', category: 'Algor Mortis' },
                { text: 'Muscles stiffen due to ATP depletion', category: 'Rigor Mortis' },
                { text: 'Blowfly larvae (maggots) indicate days since death', category: 'Entomology' },
                { text: 'Stiffness begins in small muscles, spreads to larger ones', category: 'Rigor Mortis' },
                { text: 'Succession of insect species over time', category: 'Entomology' },
                { text: 'Liver temperature provides most accurate estimate', category: 'Algor Mortis' },
                { text: 'Peak stiffness occurs 12-36 hours after death', category: 'Rigor Mortis' },
                { text: 'Fly eggs laid in moist areas within hours of death', category: 'Entomology' },
                { text: 'Environmental temperature affects rate of cooling', category: 'Algor Mortis' },
            ],
        },
    ],

    sequence: [
        {
            id: 'seq-t6-1',
            stem: 'Put these phases of the bacterial growth curve in the correct order:',
            steps: [
                'Lag phase — bacteria adapt to the environment and prepare for division',
                'Log (exponential) phase — bacteria divide at their maximum rate',
                'Stationary phase — growth rate equals death rate as nutrients become limited',
                'Death phase — number of dying cells exceeds number of new cells',
            ],
        },
        {
            id: 'seq-t6-2',
            stem: 'Put these steps of phagocytosis in the correct order:',
            steps: [
                'Phagocyte recognizes and binds to pathogens using surface receptors',
                'Phagocyte engulfs the pathogen, forming a phagosome',
                'Lysosome fuses with the phagosome to form a phagolysosome',
                'Digestive enzymes break down the pathogen',
                'Antigens from the pathogen are displayed on the phagocyte surface (becomes APC)',
            ],
        },
        {
            id: 'seq-t6-3',
            stem: 'Put these steps of the humoral immune response in the correct order:',
            steps: [
                'B cell binds to specific antigen using its surface antibodies',
                'B cell internalizes the antigen and becomes an antigen-presenting cell (APC)',
                'T helper cell with complementary receptors binds to the APC',
                'T helper cell releases cytokines that activate the B cell',
                'Activated B cell undergoes clonal expansion by mitosis',
                'B cells differentiate into plasma cells and memory B cells',
            ],
        },
        {
            id: 'seq-t6-4',
            stem: 'Put these steps of the cell-mediated immune response in the correct order:',
            steps: [
                'Body cell becomes infected with a pathogen',
                'Infected cell presents antigens on its surface via MHC class I',
                'T killer cell with complementary receptors binds to the antigen-MHC complex',
                'T helper cells release cytokines that activate the T killer cell',
                'Activated T killer cell releases perforin, creating pores in the infected cell membrane',
                'Infected cell undergoes lysis (apoptosis)',
            ],
        },
        {
            id: 'seq-t6-5',
            stem: 'Put these steps of HIV replication in the correct order:',
            steps: [
                'HIV binds to CD4 receptors and co-receptors on the host cell',
                'Viral envelope fuses with the cell membrane and RNA enters the cell',
                'Reverse transcriptase converts viral RNA into DNA',
                'Viral DNA integrates into the host genome using integrase',
                'Viral proteins are synthesized using host ribosomes',
                'New viral particles are assembled at the cell membrane',
                'New viruses bud from the cell, taking host membrane as their envelope',
            ],
        },
        {
            id: 'seq-t6-6',
            stem: 'Put these steps of the PCR (polymerase chain reaction) cycle in the correct order:',
            steps: [
                'Denaturation — DNA sample is heated to 95°C to separate the strands',
                'Annealing — temperature is lowered to 50-65°C so primers can bind to target sequences',
                'Elongation — DNA polymerase extends the new strand at 72°C',
            ],
        },
        {
            id: 'seq-t6-7',
            stem: 'Put these steps of the disc diffusion method for testing antibiotic effectiveness in the correct order:',
            steps: [
                'Spread bacterial culture evenly over the agar plate (lawn plate)',
                'Place antibiotic-impregnated paper discs onto the agar surface',
                'Incubate the plate at an appropriate temperature for 24-48 hours',
                'Measure the diameter of the zones of inhibition around each disc',
            ],
        },
        {
            id: 'seq-t6-8',
            stem: 'Put these stages in estimating time of death from body changes in the correct order:',
            steps: [
                'Body temperature begins to drop (algor mortis onset)',
                'Muscles begin to stiffen (rigor mortis begins)',
                'Rigor mortis reaches maximum stiffness throughout the body',
                'Rigor mortis gradually fades as muscles decompose',
            ],
        },
    ],

    keyword: [
        {
            id: 'kw-t6-1',
            stem: 'Define aseptic technique and explain why it is important in microbiology. [3 marks]',
            marks: 3,
            keywords: ['prevent contamination', 'sterile conditions', 'pathogens', 'pure culture', 'autoclave', 'flame'],
            modelAnswer: 'Aseptic technique refers to procedures used to prevent contamination of cultures by unwanted microorganisms. It involves working under sterile conditions using equipment such as autoclaved media, flaming inoculating loops, and working near a Bunsen burner to create an updraft. This is essential to ensure pure cultures are maintained, to prevent the growth of pathogens that could pose health risks, and to obtain valid and reproducible experimental results.',
        },
        {
            id: 'kw-t6-2',
            stem: 'Explain what happens during the lag phase of bacterial growth. [2 marks]',
            marks: 2,
            keywords: ['no increase in cell number', 'synthesising enzymes', 'adapting to environment', 'metabolic activity'],
            modelAnswer: 'During the lag phase, bacteria are adapting to their new environment and there is no increase in cell number. The cells are metabolically active, synthesising enzymes and other molecules required for growth, and replicating their DNA in preparation for division.',
        },
        {
            id: 'kw-t6-3',
            stem: 'Compare the structure of bacteria and viruses. [4 marks]',
            marks: 4,
            keywords: ['prokaryotic', 'capsid', 'peptidoglycan cell wall', 'DNA or RNA', 'ribosomes', 'no organelles', 'nucleic acid'],
            modelAnswer: 'Bacteria are prokaryotic cells with a cell wall containing peptidoglycan, a cell membrane, cytoplasm containing ribosomes and free-floating DNA. Viruses are acellular and consist of genetic material (DNA or RNA) enclosed in a protein capsid, sometimes surrounded by a lipid envelope. Viruses lack ribosomes and other organelles, and cannot carry out metabolic processes independently, whereas bacteria can reproduce and metabolise on their own.',
        },
        {
            id: 'kw-t6-4',
            stem: 'Describe how phagocytes destroy pathogens by phagocytosis. [3 marks]',
            marks: 3,
            keywords: ['engulf', 'phagosome', 'lysosome fuse', 'digestive enzymes', 'hydrolyse', 'antigens presented'],
            modelAnswer: 'Phagocytes recognise and bind to pathogens using surface receptors, then engulf the pathogen by extending pseudopodia around it. The pathogen is enclosed in a phagosome, which fuses with lysosomes containing digestive enzymes. The hydrolytic enzymes break down the pathogen, and the resulting products are either released from the cell or antigens are presented on the cell surface to stimulate the specific immune response.',
        },
        {
            id: 'kw-t6-5',
            stem: 'Explain the role of T helper cells in the immune response. [3 marks]',
            marks: 3,
            keywords: ['CD4 receptors', 'bind antigen-presenting cells', 'cytokines', 'activate B cells', 'stimulate cytotoxic T cells', 'memory T cells'],
            modelAnswer: 'T helper cells have CD4 receptors that bind to antigens presented on MHC molecules of antigen-presenting cells such as macrophages. When activated, they release cytokines that stimulate B cells to divide and differentiate into plasma cells, activate cytotoxic T cells to destroy infected cells, and promote the formation of memory cells for long-term immunity.',
        },
        {
            id: 'kw-t6-6',
            stem: 'Describe the structure of an antibody and relate it to its function. [4 marks]',
            marks: 4,
            keywords: ['quaternary structure', 'two heavy chains', 'two light chains', 'variable region', 'constant region', 'antigen-binding site', 'disulfide bonds'],
            modelAnswer: 'Antibodies have a quaternary structure consisting of four polypeptide chains: two heavy chains and two light chains, held together by disulfide bonds. Each antibody has a variable region at the antigen-binding site, which is specific to a particular antigen, allowing highly selective binding. The constant region determines the antibody class and enables binding to receptors on phagocytes or complement proteins. The Y-shaped structure allows antibodies to bind two antigens simultaneously, promoting agglutination.',
        },
        {
            id: 'kw-t6-7',
            stem: 'Explain how vaccination provides immunity against a pathogen. [3 marks]',
            marks: 3,
            keywords: ['weakened or dead pathogen', 'antigens', 'primary immune response', 'memory cells', 'secondary response', 'antibodies produced rapidly'],
            modelAnswer: 'Vaccination introduces weakened, dead, or fragment forms of a pathogen containing antigens into the body. This triggers a primary immune response, producing antibodies and generating memory B cells and T cells. Upon subsequent exposure to the same pathogen, the memory cells enable a rapid and large-scale secondary immune response, producing high concentrations of antibodies before the pathogen can cause disease symptoms.',
        },
        {
            id: 'kw-t6-8',
            stem: 'Explain how antibiotic resistance develops in bacterial populations. [4 marks]',
            marks: 4,
            keywords: ['random mutation', 'resistant allele', 'selection pressure', 'survive and reproduce', 'vertical transmission', 'horizontal transmission', 'conjugation'],
            modelAnswer: 'Antibiotic resistance arises through random mutations in bacterial DNA that confer resistance. When antibiotics are used, they create a selection pressure: bacteria with the resistant allele survive while susceptible bacteria die. The resistant bacteria reproduce, passing the resistance gene to offspring through vertical transmission. Resistance can also spread between bacteria via horizontal transmission through conjugation, where plasmids carrying resistance genes are transferred, leading to multidrug-resistant strains.',
        },
        {
            id: 'kw-t6-9',
            stem: 'Describe how disc diffusion is used to test the effectiveness of antibiotics. [3 marks]',
            marks: 3,
            keywords: ['bacterial lawn', 'filter paper discs', 'zone of inhibition', 'diffuse into agar', 'diameter measured', 'larger zone more effective'],
            modelAnswer: 'In disc diffusion, a bacterial lawn is created by spreading bacteria evenly over an agar plate. Filter paper discs containing different antibiotics are placed on the agar. Antibiotics diffuse into the agar, and after incubation, clear zones of inhibition appear where bacterial growth has been prevented. The diameter of each zone is measured; larger zones indicate greater antibiotic effectiveness against that bacterial strain.',
        },
        {
            id: 'kw-t6-10',
            stem: 'Describe the role of decomposers in the carbon cycle. [3 marks]',
            marks: 3,
            keywords: ['saprobionts', 'break down dead organic matter', 'respiration', 'carbon dioxide released', 'enzymes', 'mineralisation'],
            modelAnswer: 'Decomposers, such as bacteria and fungi, are saprobionts that break down dead organic matter and waste products. They secrete extracellular enzymes to digest complex organic molecules externally, then absorb the products. During respiration, decomposers oxidise organic carbon compounds, releasing carbon dioxide back into the atmosphere. This process of mineralisation returns carbon to the atmosphere, making it available for photosynthesis by plants.',
        },
        {
            id: 'kw-t6-11',
            stem: 'Explain how forensic scientists estimate the time of death. [4 marks]',
            marks: 4,
            keywords: ['body temperature', 'algor mortis', 'rigor mortis', 'decomposition', 'insect succession', 'post-mortem interval', 'livor mortis'],
            modelAnswer: 'Time of death is estimated using multiple indicators. Algor mortis refers to the cooling of the body; temperature is compared to a standard cooling curve. Rigor mortis is the stiffening of muscles due to ATP depletion, appearing 2-4 hours after death and disappearing after 36-48 hours. Livor mortis, the pooling of blood, indicates body position. Insect succession on the corpse and the stage of decomposition also provide estimates of the post-mortem interval. Combining these factors improves accuracy.',
        },
        {
            id: 'kw-t6-12',
            stem: 'Describe the stages of the polymerase chain reaction (PCR). [4 marks]',
            marks: 4,
            keywords: ['denaturation', '95 degrees', 'primers anneal', '50-65 degrees', 'DNA polymerase', 'extension', 'Taq polymerase', 'exponential amplification'],
            modelAnswer: 'PCR involves three stages repeated in cycles. Denaturation occurs at approximately 95 degrees Celsius, where the DNA double helix separates into two strands. In the annealing stage, the temperature is lowered to 50-65 degrees Celsius, allowing primers to bind to complementary sequences at the start of the target region. During extension at 72 degrees Celsius, Taq DNA polymerase synthesises new DNA strands from the primers. These cycles repeat 20-40 times, resulting in exponential amplification of the target DNA sequence.',
        },
    ],

    flashcards: [
        {
            id: 'fc-t6-1',
            front: 'What is the purpose of aseptic technique?',
            back: 'To prevent contamination of cultures by unwanted microbes and protect the experimenter from pathogens.',
            topic: 'Culturing Microorganisms'
        },
        {
            id: 'fc-t6-2',
            front: 'What is the difference between a nutrient broth and nutrient agar?',
            back: '• Nutrient broth: liquid medium for growing bacteria in suspension\n• Nutrient agar: solid medium (broth + agar) for growing colonies on surface',
            topic: 'Culturing Microorganisms'
        },
        {
            id: 'fc-t6-3',
            front: 'List three aseptic techniques used when culturing bacteria.',
            back: '• Flame sterilize inoculating loop\n• Work near Bunsen burner (creates upward air current)\n• Lift lid of Petri dish at an angle\n• Wash hands before and after\n• Autoclave equipment at 121°C',
            topic: 'Culturing Microorganisms'
        },
        {
            id: 'fc-t6-4',
            front: 'How does a haemocytometer measure bacterial growth?',
            back: 'A specialized microscope slide with a grid of known volume. Cells are counted within the grid and multiplied by a factor to calculate cells per cm³. Measures total cell count (live + dead).',
            topic: 'Measuring Growth'
        },
        {
            id: 'fc-t6-5',
            front: 'What is the difference between viable count and total count?',
            back: '• Viable count: counts only living cells (e.g., dilution plating, CFU)\n• Total count: counts all cells including dead ones (e.g., haemocytometer)',
            topic: 'Measuring Growth'
        },
        {
            id: 'fc-t6-6',
            front: 'How does a colorimeter measure bacterial growth?',
            back: 'Measures turbidity (cloudiness) of the culture. More bacteria = more light absorbed = less light transmitted. Percentage transmission decreases as bacterial population increases.',
            topic: 'Measuring Growth'
        },
        {
            id: 'fc-t6-7',
            front: 'Name the four phases of the bacterial growth curve in order.',
            back: '1. Lag phase - adaptation, no division\n2. Log (exponential) phase - rapid division\n3. Stationary phase - growth rate = death rate\n4. Death (decline) phase - death exceeds growth',
            topic: 'Bacterial Growth Curve'
        },
        {
            id: 'fc-t6-8',
            front: 'What happens during the lag phase of bacterial growth?',
            back: 'Bacteria adapt to new conditions:\n• Synthesizing enzymes\n• Activating genes\n• No cell division occurs\n• Population remains constant',
            topic: 'Bacterial Growth Curve'
        },
        {
            id: 'fc-t6-9',
            front: 'Why does the stationary phase occur in bacterial growth?',
            back: '• Nutrients become depleted\n• Waste products accumulate\n• Space becomes limited\n• Growth rate = death rate\n• Population size remains constant',
            topic: 'Bacterial Growth Curve'
        },
        {
            id: 'fc-t6-10',
            front: 'Describe Core Practical 13: Effect of temperature on bacterial growth.',
            back: 'Method:\n1. Inoculate sterile nutrient broth with bacteria\n2. Incubate at different temperatures (e.g., 10°C, 25°C, 37°C, 50°C)\n3. Measure turbidity with colorimeter at intervals\n4. Plot growth curve for each temperature\nControl: sterile broth without inoculation',
            topic: 'Core Practical 13'
        },
        {
            id: 'fc-t6-11',
            front: 'What are the key structural differences between bacteria and viruses?',
            back: 'Bacteria:\n• Prokaryotic cells with organelles\n• DNA free in cytoplasm\n• 70S ribosomes\n• Cell wall (peptidoglycan)\n\nViruses:\n• Acellular (not cells)\n• DNA or RNA inside protein capsid\n• No ribosomes or metabolism\n• Require host cells to replicate',
            topic: 'Bacterial vs Viral Structure'
        },
        {
            id: 'fc-t6-12',
            front: 'Why is Mycobacterium tuberculosis difficult to treat?',
            back: '• Thick waxy cell wall (mycolic acid) resistant to antibiotics\n• Can survive inside macrophages\n• Dormant state resists immune attack\n• Requires 6-month antibiotic course\n• Easily develops resistance',
            topic: 'TB'
        },
        {
            id: 'fc-t6-13',
            front: 'What are tubercles and how do they form?',
            topic: 'TB',
            back: 'Granulomas formed when immune system walls off TB bacteria:\n• Macrophages surround bacteria\n• T cells release cytokines\n• Fibrous tissue forms around mass\n• Bacteria can remain dormant inside\n• May reactivate if immunity weakens'
        },
        {
            id: 'fc-t6-14',
            front: 'How does HIV infect and destroy the immune system?',
            back: '1. HIV binds to CD4 receptors on T helper cells\n2. Reverse transcriptase converts viral RNA to DNA\n3. Viral DNA integrates into host genome\n4. New viruses bud from cell, destroying it\n5. T helper cell count drops → AIDS develops',
            topic: 'HIV'
        },
        {
            id: 'fc-t6-15',
            front: 'What is reverse transcriptase and why is it a drug target?',
            back: 'Enzyme that converts viral RNA into DNA inside host cell. Target for antiretroviral drugs (e.g., AZT) which inhibit the enzyme, preventing viral replication.',
            topic: 'HIV'
        },
        {
            id: 'fc-t6-16',
            front: 'Name three physical barriers to pathogen entry.',
            back: '• Skin - waterproof keratinized layer\n• Mucous membranes - trap pathogens in sticky mucus\n• Cilia - sweep mucus to throat\n• Stomach acid - kills ingested microbes\n• Tears and saliva - contain lysozyme',
            topic: 'Pathogen Entry'
        },
        {
            id: 'fc-t6-17',
            front: 'What is the role of histamine in non-specific defense?',
            back: 'Released by mast cells and basophils:\n• Causes vasodilation (increases blood flow)\n• Increases capillary permeability\n• Allows more phagocytes to reach infection site\n• Causes inflammation, heat, redness, swelling',
            topic: 'Non-Specific Responses'
        },
        {
            id: 'fc-t6-18',
            front: 'Describe the stages of phagocytosis.',
            back: '1. Phagocyte recognizes and binds to pathogen (via opsonins)\n2. Pathogen engulfed forming phagosome\n3. Lysosome fuses with phagosome → phagolysosome\n4. Enzymes digest pathogen\n5. Antigens presented on MHC to T cells\n6. Waste products expelled',
            topic: 'Non-Specific Responses'
        },
        {
            id: 'fc-t6-19',
            front: 'What is the role of interferons in immune response?',
            back: 'Proteins released by virus-infected cells:\n• Warn neighboring cells of viral infection\n• Stimulate cells to produce antiviral proteins\n• Inhibit viral protein synthesis\n• Activate natural killer cells\n• Slow viral spread',
            topic: 'Non-Specific Responses'
        },
        {
            id: 'fc-t6-20',
            front: 'What is an antigen-presenting cell (APC)?',
            back: 'A cell (usually macrophage or dendritic cell) that:\n• Engulfs pathogen by phagocytosis\n• Processes pathogen antigens\n• Displays antigens on MHC molecules\n• Presents to T helper cells to initiate specific immune response',
            topic: 'Specific Immune Response'
        },
        {
            id: 'fc-t6-21',
            front: 'Describe the role of T helper cells in the immune response.',
            back: '• Bind to antigen-MHC complex on APC via CD4 receptors\n• Release cytokines that:\n  - Activate B cells to produce antibodies\n  - Stimulate T killer cell division\n  - Enhance phagocytosis\n  - Activate memory cell formation',
            topic: 'Specific Immune Response'
        },
        {
            id: 'fc-t6-22',
            front: 'How do T killer cells destroy infected cells?',
            back: '1. Recognize antigen-MHC complex on infected cell (CD8 receptors)\n2. Bind tightly to target cell\n3. Release perforin (forms pores in membrane)\n4. Release granzymes (enter pores, trigger apoptosis)\n5. Infected cell undergoes programmed cell death',
            topic: 'T Killer Cells & Antibodies'
        },
        {
            id: 'fc-t6-23',
            front: 'Describe the structure of an antibody.',
            back: 'Y-shaped glycoprotein:\n• Two heavy chains and two light chains\n• Variable region (antigen binding site) - unique to each antibody\n• Constant region - same within class\n• Disulfide bridges hold chains together\n• Hinge region allows flexibility',
            topic: 'T Killer Cells & Antibodies'
        },
        {
            id: 'fc-t6-24',
            front: 'Name four ways antibodies destroy pathogens.',
            back: '• Opsonization - coat pathogen for phagocytosis\n• Agglutination - clump pathogens together\n• Neutralization - block pathogen binding sites\n• Complement activation - triggers cell lysis\n• Preventing toxin binding to cells',
            topic: 'T Killer Cells & Antibodies'
        },
        {
            id: 'fc-t6-25',
            front: 'Compare active and passive immunity.',
            back: 'Active immunity:\n• Body produces own antibodies\n• Long-lasting (memory cells)\n• Natural: infection; Artificial: vaccination\n\nPassive immunity:\n• Antibodies received from another source\n• Temporary (no memory cells)\n• Natural: maternal antibodies; Artificial: antibody injections',
            topic: 'Developing Immunity'
        },
        {
            id: 'fc-t6-26',
            front: 'What is the difference between bactericidal and bacteriostatic antibiotics?',
            back: '• Bactericidal: kill bacteria (e.g., penicillin weakens cell wall)\n• Bacteriostatic: prevent bacterial growth/division (e.g., tetracycline inhibits protein synthesis)\n• Both allow immune system to clear infection',
            topic: 'Antibiotics & Resistance'
        },
        {
            id: 'fc-t6-27',
            front: 'How does antibiotic resistance develop?',
            back: '1. Random mutation produces resistant bacterium\n2. Antibiotic kills susceptible bacteria\n3. Resistant bacterium survives and reproduces\n4. Resistance gene spreads by vertical or horizontal transfer\n5. Overuse/misuse of antibiotics accelerates selection',
            topic: 'Antibiotics & Resistance'
        },
        {
            id: 'fc-t6-28',
            front: 'What is MRSA and why is it dangerous?',
            back: 'Methicillin-Resistant Staphylococcus aureus:\n• Resistant to beta-lactam antibiotics (including methicillin)\n• Common cause of hospital-acquired infections\n• Can cause wound infections, pneumonia, sepsis\n• Treatment requires last-resort antibiotics (vancomycin)',
            topic: 'Antibiotics & Resistance'
        },
        {
            id: 'fc-t6-29',
            front: 'What are HCAIs and how can they be prevented?',
            back: 'Healthcare-Associated Infections acquired in hospitals.\nPrevention:\n• Hand hygiene (most important)\n• Use of PPE\n• Aseptic technique during procedures\n• Isolation of infected patients\n• Thorough cleaning and disinfection\n• Antibiotic stewardship programs',
            topic: 'Infection Control'
        },
        {
            id: 'fc-t6-30',
            front: 'Describe the disc diffusion method (Core Practical 14).',
            back: '1. Spread bacterial lawn on agar plate\n2. Place antibiotic discs on surface\n3. Incubate (inverted) at appropriate temperature\n4. Measure zones of inhibition\n5. Larger zone = more effective antibiotic\nControl: disc without antibiotic',
            topic: 'Core Practical 14'
        },
        {
            id: 'fc-t6-31',
            front: 'How do decomposers contribute to the carbon cycle?',
            back: '• Saprotrophs (bacteria/fungi) secrete extracellular enzymes\n• Enzymes digest dead organic matter\n• Release CO₂ through respiration\n• Convert organic carbon to inorganic forms\n• Make nutrients available for plants',
            topic: 'Decomposition'
        },
        {
            id: 'fc-t6-32',
            front: 'List four factors affecting decomposition rate.',
            back: '• Temperature - enzymes work faster in warmth\n• Oxygen availability - needed for aerobic respiration\n• Moisture - needed for enzyme activity\n• Surface area - more exposure = faster breakdown\n• Presence of decomposers',
            topic: 'Decomposition'
        },
        {
            id: 'fc-t6-33',
            front: 'What is algor mortis and how is it used to estimate time of death?',
            back: 'Body cooling after death:\n• Body temperature drops toward ambient\n• Measured using rectal or liver probe\n• Drops ~1-1.5°C per hour initially\n• Affected by body size, clothing, environment\n• Used with Glaister equation for estimation',
            topic: 'Forensic Time of Death'
        },
        {
            id: 'fc-t6-34',
            front: 'Explain rigor mortis and its timeline.',
            back: 'Stiffening of muscles after death:\n• 0-4 hours: muscles relax\n• 4-24 hours: ATP depleted, actin-myosin locked\n• Muscles become rigid\n• 24-36 hours: enzymes break down proteins\n• Body relaxes again',
            topic: 'Forensic Time of Death'
        },
        {
            id: 'fc-t6-35',
            front: 'How is forensic entomology used to estimate time of death?',
            back: 'Studies insects on decomposing body:\n• Blowflies arrive within hours of death\n• Identify species and life stage (eggs, larvae, pupae)\n• Know development time for each species at given temperature\n• Work backward from oldest stage to estimate PMI\n• Can detect if body was moved',
            topic: 'Forensic Time of Death'
        },
        {
            id: 'fc-t6-36',
            front: 'Name the three stages of PCR and describe each.',
            back: '1. Denaturation (95°C) - DNA strands separate\n2. Annealing (50-65°C) - primers bind to target sequences\n3. Extension (72°C) - Taq polymerase builds new DNA strand\nRepeated 30+ cycles for exponential amplification',
            topic: 'PCR & DNA Profiling'
        },
        {
            id: 'fc-t6-37',
            front: 'Why is Taq polymerase used in PCR?',
            back: '• From Thermus aquaticus (hot spring bacterium)\n• Heat-stable enzyme - survives 95°C denaturation\n• Works at 72°C for extension\n• No need to add fresh enzyme each cycle\n• Allows automation of PCR',
            topic: 'PCR & DNA Profiling'
        },
        {
            id: 'fc-t6-38',
            front: 'How does gel electrophoresis separate DNA fragments?',
            back: '• DNA loaded into wells in agarose gel\n• Electric current applied (DNA negative → moves to positive)\n• Smaller fragments move faster and further\n• Fragments separate by size\n• Visualized with stain or UV after dyeing\n• Compared to DNA ladder for sizing',
            topic: 'PCR & DNA Profiling'
        },
        {
            id: 'fc-t6-39',
            front: 'What are STRs and why are they used in DNA profiling?',
            back: 'Short Tandem Repeats:\n• Non-coding DNA with repeating sequences (2-6 bases)\n• Number of repeats varies between individuals\n• Highly polymorphic (many alleles in population)\n• Inherited from parents\n• Multiple loci analyzed for unique profile\n• Probability of match calculated',
            topic: 'PCR & DNA Profiling'
        },
        {
            id: 'fc-t6-40',
            front: 'What is the purpose of primers in PCR?',
            back: '• Short single-stranded DNA sequences (18-30 bases)\n• Complementary to sequences flanking target region\n• Provide starting point for Taq polymerase\n• Two primers needed (forward and reverse)\n• Define specific region to be amplified\n• Ensure only target DNA is copied',
            topic: 'PCR & DNA Profiling'
        },
    ],
};
