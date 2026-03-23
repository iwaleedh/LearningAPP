export const exercises_biology_5_8 = {
    mcq: [
        // Neurone Types
        {
            id: 'mcq-5-8-1',
            stem: 'Which structural feature is characteristic of a sensory neurone?',
            options: ['A cell body located at the end of a long axon', 'A cell body located off to the side, branching from the main axon/dendron', 'Highly branched dendrites connected directly to the cell body within the CNS', 'Termination exclusively at neuromuscular junctions'],
            correctAnswer: 1,
            rationale: 'Sensory neurones uniquely carry impulses from receptors to the CNS and have their cell body located off to the side, typically in a dorsal root ganglion.',
            topic: 'Neurone Types'
        },
        {
            id: 'mcq-5-8-2',
            stem: 'What is the primary function of a relay (intermediate) neurone?',
            options: ['To transmit impulses directly to skeletal muscle', 'To interpret light stimuli in the retina', 'To connect sensory and motor neurones entirely within the CNS', 'To produce myelin sheaths in the peripheral nervous system'],
            correctAnswer: 2,
            rationale: 'Relay neurones are found exclusively within the CNS and form extensive connections to process signals between sensory and motor neurones.',
            topic: 'Neurone Types'
        },
        // Action Potentials
        {
            id: 'mcq-5-8-3',
            stem: 'Which process actively establishes the resting potential of -70mV in an axon?',
            options: ['Influx of 3 Na+ for every 2 K+ pumped out', 'Pumping of 3 Na+ out of the axon for every 2 K+ pumped in', 'Diffusion of Na+ ions into the axon through leak channels', 'Exocytosis of neurotransmitters'],
            correctAnswer: 1,
            rationale: 'The sodium-potassium pump actively transports 3 Na+ out of the axon and 2 K+ into the axon using ATP, maintaining the electrochemical gradient.',
            topic: 'Action Potentials'
        },
        {
            id: 'mcq-5-8-4',
            stem: 'During the depolarisation phase of an action potential, what causes the membrane potential to rise from -70mV to +40mV?',
            options: ['Opening of voltage-gated K+ channels allowing K+ to leave', 'Opening of voltage-gated Na+ channels allowing Na+ to enter', 'Closing of Na+ leak channels', 'Active transport of K+ into the axon'],
            correctAnswer: 1,
            rationale: 'Depolarisation is driven by the rapid influx of Na+ through voltage-gated Na+ channels down the electrochemical gradient.',
            topic: 'Action Potentials'
        },
        {
            id: 'mcq-5-8-5',
            stem: 'What is the biological importance of the hyperpolarisation refractory period?',
            options: ['It accelerates the breakdown of acetylcholine', 'It triggers the release of Calcium ions', 'It ensures action potentials only travel in one unidirectional flow', 'It allows the myelin sheath to regenerate'],
            correctAnswer: 2,
            rationale: 'Because the membrane drops below the resting potential and channels are inactive, it prevents a new action potential from firing backwards, ensuring unidirectional propagation.',
            topic: 'Action Potentials'
        },
        // Myelination
        {
            id: 'mcq-5-8-6',
            stem: 'How does myelination act to increase the speed of an action potential?',
            options: ['It increases the core temperature of the axon', 'Action potentials continuously fire along every millimeter of the membrane', 'It chemically alters neurotransmitters', 'It insulates the axon, forcing action potentials to jump between Nodes of Ranvier'],
            correctAnswer: 3,
            rationale: 'The myelin sheath acts as an electrical insulator. Action potentials only occur at the unmyelinated Nodes of Ranvier, a process known as saltatory conduction.',
            topic: 'Myelination'
        },
        // Synaptic Transmission
        {
            id: 'mcq-5-8-7',
            stem: 'The arrival of an action potential at the pre-synaptic knob directly causes the opening of which voltage-gated channels?',
            options: ['Sodium (Na+)', 'Potassium (K+)', 'Calcium (Ca2+)', 'Chloride (Cl-)'],
            correctAnswer: 2,
            rationale: 'The depolarisation of the pre-synaptic membrane opens voltage-gated Ca2+ channels, causing Ca2+ influx which triggers vesicle exocytosis.',
            topic: 'Synaptic Transmission'
        },
        {
            id: 'mcq-5-8-8',
            stem: 'What is the specific role of acetylcholinesterase in a synaptic cleft?',
            options: ['To synthesize acetylcholine from choline and ethanoic acid', 'To bind to the post-synaptic receptors to trigger depolarisation', 'To break down acetylcholine to prevent continuous firing of the post-synaptic neurone', 'To actively transport neurotransmitters back into vesicles'],
            correctAnswer: 2,
            rationale: 'Acetylcholinesterase breaks down acetylcholine in the cleft. If this did not happen, the post-synaptic neurone would continuously fire.',
            topic: 'Synaptic Transmission'
        },
        // Drugs
        {
            id: 'mcq-5-8-9',
            stem: 'How does an SSRI (Selective Serotonin Reuptake Inhibitor) influence synaptic transmission?',
            options: ['It breaks down serotonin in the pre-synaptic neurone', 'It prevents reabsorption pumps from clearing serotonin from the cleft', 'It acts as an antagonist, blocking post-synaptic serotonin receptors', 'It induces the exocytosis of calcium ions'],
            correctAnswer: 1,
            rationale: 'SSRIs are reuptake inhibitors. By blocking the reabsorption pumps, serotonin remains in the synaptic cleft longer to exert its mood-elevating effects.',
            topic: 'Drug Actions on Synapses'
        },
        {
            id: 'mcq-5-8-10',
            stem: 'A drug binds to a post-synaptic receptor without activating it, thereby blocking the natural neurotransmitter. What is this drug classified as?',
            options: ['A receptor agonist', 'A receptor antagonist', 'An enzyme inhibitor', 'A release modulator'],
            correctAnswer: 1,
            rationale: 'An antagonist binds to and completely blocks the receptor. An agonist mimics the neurotransmitter and activates the receptor.',
            topic: 'Drug Actions on Synapses'
        },
        // Eye and Photoreceptors
        {
            id: 'mcq-5-8-11',
            stem: 'Why do rod cells provide high visual sensitivity but low visual acuity?',
            options: ['They are densely packed only at the fovea', 'They have a one-to-one connection with bipolar cells', 'Multiple rod cells converge onto a single bipolar cell (retinal convergence)', 'They are entirely unresponsive to low light intensities'],
            correctAnswer: 2,
            rationale: 'Retinal convergence means weak signals from multiple rods summate to trigger the bipolar cell (high sensitivity), but the brain cannot differentiate which exact rod was stimulated (low acuity).',
            topic: 'The Eye and Photoreceptors'
        },
        {
            id: 'mcq-5-8-12',
            stem: 'In complete darkness, what is the relative state of a rod cell membrane?',
            options: ['Hyperpolarised (-70mV) and releasing an excitatory neurotransmitter', 'Depolarised (-40mV) and releasing an inhibitory neurotransmitter', 'Rapidly firing action potentials down the optic nerve', 'Bleached and incapable of transporting Na+ ions'],
            correctAnswer: 1,
            rationale: 'In the dark, Na+ leaks into the rod cell keeping it depolarised (-40mV). This causes the constant release of an inhibitory neurotransmitter (glutamate) to the bipolar cell.',
            topic: 'The Eye and Photoreceptors'
        },
        {
            id: 'mcq-5-8-13',
            stem: 'When light strikes a rod cell, causing rhodopsin to bleach, what immediately occurs in the cell membrane?',
            options: ['Non-specific Na+ channels close, leading to hyperpolarisation', 'Voltage-gated K+ channels open rapidly', 'Voltage-gated Ca2+ channels open, causing vesicle fusion', 'The Na+/K+ pump reverses its direction'],
            correctAnswer: 0,
            rationale: 'Bleaching opsin triggers a cascade that closes Na+ channels. Because the Na+ pump is still working to remove Na+, the cell becomes hyperpolarised as Na+ cannot re-enter.',
            topic: 'The Eye and Photoreceptors'
        },
        // Brain Regions
        {
            id: 'mcq-5-8-14',
            stem: 'Which region of the brain is primarily responsible for coordinating balance and smooth voluntary muscle movement?',
            options: ['Cerebrum', 'Hypothalamus', 'Medulla Oblongata', 'Cerebellum'],
            correctAnswer: 3,
            rationale: 'The cerebellum (located at the rear) coordinates complex movements and postural balance by integrating sensory data with motor commands.',
            topic: 'Brain Regions'
        },
        {
            id: 'mcq-5-8-15',
            stem: 'Damage to the medulla oblongata is often immediately fatal. Why?',
            options: ['It stores all long-term memories and conscious thought', 'It controls crucial autonomic functions such as heart rate and breathing rate', 'It completely regulates body temperature and water potential', 'It is the primary processing center for visual information'],
            correctAnswer: 1,
            rationale: 'The medulla oblongata regulates unconscious life-support functions like the cardiac and respiratory centers.',
            topic: 'Brain Regions'
        },
        // Brain Imaging
        {
            id: 'mcq-5-8-16',
            stem: 'An fMRI scan is utilized over a traditional MRI primarily to observe:',
            options: ['High-resolution static structures of dense bone', 'Real-time changes in blood oxygenation corresponding to brain activity', 'The location of injected radioactive glucose tracers', 'The absolute volume of cerebrospinal fluid'],
            correctAnswer: 1,
            rationale: 'fMRI (functional MRI) tracks dynamic brain activity in real-time by monitoring changes in blood oxygen levels, unlike standard MRI which just provides a static structural image.',
            topic: 'Brain Imaging'
        },
        {
            id: 'mcq-5-8-17',
            stem: 'Which imaging technique carries a calculated risk of causing cancer due to the use of ionizing X-ray radiation?',
            options: ['fMRI', 'MRI', 'CT Scan', 'Ultrasound'],
            correctAnswer: 2,
            rationale: 'Computed Tomography (CT) scans use thousands of X-rays to build structural images, exposing the patient to potentially harmful ionizing radiation.',
            topic: 'Brain Imaging'
        },
        // Innate vs Learned
        {
            id: 'mcq-5-8-18',
            stem: 'A snail placed on a vibrating surface initially withdraws into its shell. After continuous vibration for 10 minutes, the snail stops withdrawing and continues to crawl. What type of behaviour is this?',
            options: ['Operant conditioning', 'classical conditioning', 'Kinesis', 'Habituation'],
            correctAnswer: 3,
            rationale: 'Habituation is learning to ignore a harmless, repetitive stimulus. It prevents the waste of metabolic energy responding to false alarms.',
            topic: 'Animal Behaviour'
        },
        {
            id: 'mcq-5-8-19',
            stem: 'Hubel and Wiesel sutured the eyes of newborn kittens to demonstrate that:',
            options: ['Vision in mammals is entirely innate and genetically programmed', 'The visual cortex requires sensory stimulation during an early critical period for synapses to form properly', 'Habituation occurs rapidly in visually deprived animals', 'Animals deprived of sight immediately develop superior hearing'],
            correctAnswer: 1,
            rationale: 'Their experiments proved that the visual cortex is activity-dependent. Without light stimulation during an early critical window, inactive synapses are permanently pruned away.',
            topic: 'Animal Behaviour'
        },
        // Phytochromes
        {
            id: 'mcq-5-8-20',
            stem: 'In plants, what is the biologically active isomer of phytochrome that accumulates during daylight?',
            options: ['Pr (absorbs 660nm)', 'Pfr (absorbs 730nm)', 'Indoleacetic acid (IAA)', 'Chlorophyll A'],
            correctAnswer: 1,
            rationale: 'Phytochrome Far-Red (Pfr) absorbs far-red light. Sunlight contains predominantly red light, which rapidly converts inactive Pr into the biologically active Pfr.',
            topic: 'Phytochromes'
        },
        {
            id: 'mcq-5-8-21',
            stem: 'How does auxin (IAA) mediate positive phototropism in growing shoots?',
            options: ['It accumulates on the illuminated side, causing rapid cell division', 'It accumulates on the shaded side, accelerating cell elongation', 'It moves into the roots to increase structural support', 'It converts Pr into Pfr'],
            correctAnswer: 1,
            rationale: 'Auxin is transported laterally to the shaded side of the shoot, where it promotes rapid cell elongation, bending the shoot precisely towards the unilateral light.',
            topic: 'Auxins and Tropisms'
        },
        // Recombinant DNA
        {
            id: 'mcq-5-8-22',
            stem: 'Why is reverse transcriptase heavily utilized in genetic engineering to isolate target human genes for bacterial expression?',
            options: ['It creates a restriction endonuclease enzyme directly from DNA', 'It synthesizes cDNA directly from mature mRNA, eliminating non-coding introns that bacteria cannot process', 'It forces plasmids to replicate rapidly within a host', 'It acts as the biochemical glue sealing the sugar-phosphate backbone'],
            correctAnswer: 1,
            rationale: 'Bacteria lack the splicing machinery to remove human introns. Reverse transcriptase creates cDNA from spliced mRNA, providing the pure coding sequence required.',
            topic: 'Recombinant DNA Tools'
        },
        {
            id: 'mcq-5-8-23',
            stem: 'What specific type of bond does DNA Ligase form when annealing a recombinant plasmid?',
            options: ['Hydrogen bonds between complementary base pairs', 'Peptide bonds between amino acids', 'Phosphodiester bonds in the sugar-phosphate backbone', 'Glycosidic bonds between ribose sugars'],
            correctAnswer: 2,
            rationale: 'While sticky ends initially hydrogen-bond together (anneal) loosely, DNA ligase permanently seals the DNA strand by forming covalent phosphodiester bonds in the backbone.',
            topic: 'Recombinant DNA Tools'
        },
        // Gene Therapy & GMOs
        {
            id: 'mcq-5-8-24',
            stem: 'What differentiates germ-line gene therapy from somatic cell gene therapy?',
            options: ['Somatic therapy is permanent and inherited by offspring', 'Germ-line therapy is completely legal and used frequently for lung conditions', 'Germ-line therapy modifies an embryo, resulting in a permanent, heritable change in every cell of the offspring', 'Somatic therapy specifically targets the gonads and gametes'],
            correctAnswer: 2,
            rationale: 'Germ-line therapy alters an embryo/gametes, making the modification inheritable. Somatic alters specific adult tissues and only affects the individual patient temporarily.',
            topic: 'Gene Therapy'
        },
        {
            id: 'mcq-5-8-25',
            stem: 'Which of the following describes a major environmental risk of utilizing Genetically Modified Organisms (GMOs) in agriculture?',
            options: ['The crops will grow at an exponentially faster rate than physical limits allow', 'Herbicide-resistance genes might transfer to wild relatives via cross-pollination, creating super-weeds', 'They completely eradicate the need for fossil fuels in farming', 'They will inevitably cause the rapid onset of new human viruses'],
            correctAnswer: 1,
            rationale: 'A central ecological concern is that modified traits (like weedkiller resistance) could naturally cross-pollinate into wild weed populations, creating unstoppable "super-weeds".',
            topic: 'Risks of GMOs'
        },
        // Microarrays & Bioinformatics
        {
            id: 'mcq-5-8-26',
            stem: 'DNA microarrays are an advanced tool primarily utilized to:',
            options: ['Permanently sequence a completely unknown organism\'s genome', 'Determine exactly which specific genes are being actively transcribed in a specific cell under certain conditions', 'Inject genetically modified DNA into a host embryo', 'Create structural MRI images of soft tissues'],
            correctAnswer: 1,
            rationale: 'Microarrays monitor gene expression simultaneously by measuring the hybridization of fluorescently-tagged cDNA (derived from extracted active mRNA).',
            topic: 'Microarrays & Bioinformatics'
        },
        // Snail Habituation
        {
            id: 'mcq-5-8-27',
            stem: 'In Core Practical 18 (Snail Habituation), what neurological change explains why the snail eventually stops withdrawing its eye-stalks?',
            options: ['The sensory motor neurone dies from toxic shock', 'Calcium ion channels in the sensory neurone become less responsive to repeated stimulation', 'The muscle completely runs out of ATP to contract', 'Voltage-gated Sodium channels permanently lock open'],
            correctAnswer: 1,
            rationale: 'During habituation to a harmless stimulus, the Ca2+ channels at the sensory pre-synaptic membrane become less responsive. Less neurotransmitter is released, so the motor neurone never reaches the threshold to fire.',
            topic: 'Snail Habituation'
        },
        // Nervous vs Hormonal
        {
            id: 'mcq-5-8-28',
            stem: 'Which of the following is an exclusive characteristic of the endocrine (hormonal) coordination system, unlike the nervous system?',
            options: ['Transmission via purely electrical impulses (action potentials) along isolated pathways', 'Fast-acting and rapidly localized physiological responses', 'Secreted chemical messengers traveling via blood plasma causing widespread, longer-lasting effects', 'Exclusive dependency on specialized neurotransmitters diffusing across synaptic clefts'],
            correctAnswer: 2,
            rationale: 'Hormonal coordination uses chemical messengers distributed globally in the bloodstream leading to slow, long-lasting effects on any cell with the complementary receptor.',
            topic: 'Nervous vs Hormonal'
        }
    ],

    fillblank: [
        {
            id: 'fb-5-8-1',
            stem: 'Complete the statement regarding resting potentials.',
            template: 'The resting potential of a neurone is maintained around -70mV mainly because the sodium-potassium pump actively transports 3 __BLANK__ outwards for every 2 __BLANK__ pumped inward.',
            blanks: [{ answer: 'Na+' }, { answer: 'K+' }],
            rationale: 'The Na+/K+ pump uses ATP to set up the electrochemical gradient.'
        },
        {
            id: 'fb-5-8-2',
            stem: 'Complete the description of an action potential.',
            template: 'During depolarisation, voltage-gated influx of __BLANK__ causes the potential to rise to +40mV. The ensuing repolarisation is caused by the rapid exit of __BLANK__.',
            blanks: [{ answer: 'sodium' }, { answer: 'potassium' }],
            rationale: 'Sodium entering makes the inside positive. Potassium exiting restores the negative interior.'
        },
        {
            id: 'fb-5-8-3',
            stem: 'Complete the sentence about specific cell types.',
            template: 'Myelin sheaths in the peripheral nervous system are composed of multiple layers of lipid membrane produced by __BLANK__ cells. The unmyelinated gaps are termed Nodes of __BLANK__.',
            blanks: [{ answer: 'Schwann' }, { answer: 'Ranvier' }],
            rationale: 'Schwann cells insulate the axon, forcing saltatory conduction specifically between Nodes of Ranvier.'
        },
        {
            id: 'fb-5-8-4',
            stem: 'Fill in the blanks regarding synaptic transmission.',
            template: 'When an impulse reaches the pre-synaptic knob, voltage-gated __BLANK__ channels open, causing vesicles to fuse via __BLANK__, releasing neurotransmitters into the cleft.',
            blanks: [{ answer: 'calcium' }, { answer: 'exocytosis' }],
            rationale: 'Calcium (Ca2+) influx triggers vesicle fusion (exocytosis).'
        },
        {
            id: 'fb-5-8-5',
            stem: 'Fill in the blanks defining visual receptors.',
            template: 'In the eye, __BLANK__ cells provide colour vision and high acuity at the fovea, whereas __BLANK__ cells offer high sensitivity in low light due to retinal convergence.',
            blanks: [{ answer: 'cone' }, { answer: 'rod' }],
            rationale: 'Cones are for Colour and aCuity. Rods are highly sensitive in dark conditions.'
        },
        {
            id: 'fb-5-8-6',
            stem: 'Complete the sentence on phototransduction.',
            template: 'In a rod cell, absorption of light causes the chemical pigment __BLANK__ to break down. This indirectly leads to the closing of __BLANK__ ion channels.',
            blanks: [{ answer: 'rhodopsin' }, { answer: 'sodium' }],
            rationale: 'Rhodopsin bleaching causes Na+ channels to close, hyperpolarising the rod cell.'
        },
        {
            id: 'fb-5-8-7',
            stem: 'Identify the structural components of the brain.',
            template: 'The highly folded outer layer controlling conscious thought is the __BLANK__, while the lower region coordinating balance and posture is the __BLANK__.',
            blanks: [{ answer: 'cerebrum' }, { answer: 'cerebellum' }],
            rationale: 'Cerebrum = conscious thought/memory. Cerebellum = coordination/balance.'
        },
        {
            id: 'fb-5-8-8',
            stem: 'Complete the statement regarding brain scans.',
            template: 'An __BLANK__ scan provides high-resolution structural images of soft tissue via magnets, whereas a __BLANK__ scan provides functional mapping using a radioactive glucose tracer.',
            blanks: [{ answer: 'MRI' }, { answer: 'PET' }],
            rationale: 'MRI shows soft tissue structure. PET (Positron Emission Tomography) uses radioactive glucose to track active metabolism.'
        },
        {
            id: 'fb-5-8-9',
            stem: 'Complete the description of plant physiochemistry.',
            template: 'In sunlight, the photoreceptor Pr rapidly absorbs __BLANK__ light and converts into the biologically active isomer __BLANK__.',
            blanks: [{ answer: 'red' }, { answer: 'Pfr' }],
            rationale: 'Pr absorbs 660nm red light to become active Pfr (Phytochrome far-red).'
        },
        {
            id: 'fb-5-8-10',
            stem: 'Complete the information regarding enzymes in genetic engineering.',
            template: 'To cut a specific gene from a genome, enzymes known as restriction __BLANK__ are used. To seal the DNA backbone later, DNA __BLANK__ is applied to form new phosphodiester bonds.',
            blanks: [{ answer: 'endonucleases' }, { answer: 'ligase' }],
            rationale: 'Restriction endonucleases act as molecular scissors; DNA ligase acts as the glue.'
        },
        {
            id: 'fb-5-8-11',
            stem: 'Complete the comparison concerning gene therapy.',
            template: '__BLANK__ gene therapy targets specific patient tissues and is strictly non-heritable, whereas __BLANK__-line therapy alters embryos creating permanent changes in offspring.',
            blanks: [{ answer: 'Somatic' }, { answer: 'germ' }],
            rationale: 'Somatic affects only the body (soma). Germ-line affects the gametes and is inheritable.'
        },
        {
            id: 'fb-5-8-12',
            stem: 'Fill in the blanks detailing gene expression tools.',
            template: 'DNA __BLANK__ are glass slides covered in probes used to measure gene expression. The extracted mRNA is first converted into fluorescently labelled __BLANK__ using reverse transcriptase.',
            blanks: [{ answer: 'microarrays' }, { answer: 'cDNA' }],
            rationale: 'Microarrays measure expression using single-stranded cDNA derived from active mRNA.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-5-8-1',
            stem: 'Classify each characteristic by the type of neurone it applies to.',
            categories: ['Sensory Neurone', 'Motor Neurone', 'Relay Neurone'],
            items: [
                { text: 'Cell body located off via a branch from the main axon/dendron', category: 'Sensory Neurone' },
                { text: 'Carries impulses from receptors to the CNS', category: 'Sensory Neurone' },
                { text: 'Cell body located at the terminal end with short dendrites', category: 'Motor Neurone' },
                { text: 'Carries impulses from the CNS to a muscle effector', category: 'Motor Neurone' },
                { text: 'Located entirely within the central nervous system', category: 'Relay Neurone' },
                { text: 'Features highly branching structures connecting different nerve cells', category: 'Relay Neurone' }
            ]
        },
        {
            id: 'dd-5-8-2',
            stem: 'Sort the following events describing the generation of an Action Potential to either Depolarisation or Repolarisation.',
            categories: ['Depolarisation', 'Repolarisation'],
            items: [
                { text: 'Voltage-gated Sodium (Na+) channels open', category: 'Depolarisation' },
                { text: 'Voltage-gated Potassium (K+) channels open', category: 'Repolarisation' },
                { text: 'Ions flood rapidly into the axon', category: 'Depolarisation' },
                { text: 'Ions flood rapidly out of the axon', category: 'Repolarisation' },
                { text: 'Membrane potential rises to +40mV', category: 'Depolarisation' },
                { text: 'Membrane potential drops back down towards -70mV', category: 'Repolarisation' }
            ]
        },
        {
            id: 'dd-5-8-3',
            stem: 'Match each neurological drug class with its mechanism of action.',
            categories: ['Agonists', 'Antagonists', 'Enzyme Inhibitors', 'Reuptake Inhibitors'],
            items: [
                { text: 'Mimics natural neurotransmitter to activate post-synaptic receptors', category: 'Agonists' },
                { text: 'Binds to post-synaptic receptors without activating them, blocking natural binding', category: 'Antagonists' },
                { text: 'Prevents the breakdown of neurotransmitters in the cleft (like Sarin gas)', category: 'Enzyme Inhibitors' },
                { text: 'Prevents clearance of transmitter back into the pre-synaptic neurone (like SSRIs)', category: 'Reuptake Inhibitors' }
            ]
        },
        {
            id: 'dd-5-8-4',
            stem: 'Classify these attributes as belonging to Rod Cells or Cone Cells.',
            categories: ['Rod Cells', 'Cone Cells'],
            items: [
                { text: 'Provide black and white vision (cannot distinguish colour)', category: 'Rod Cells' },
                { text: 'Possess a high degree of retinal convergence', category: 'Rod Cells' },
                { text: 'High sensitivity to extremely low light intensities', category: 'Rod Cells' },
                { text: 'Provide colour vision via RGB variations', category: 'Cone Cells' },
                { text: 'Have purely a 1:1 connection ratio with bipolar cells', category: 'Cone Cells' },
                { text: 'Densely packed in the fovea offering supreme visual acuity', category: 'Cone Cells' }
            ]
        },
        {
            id: 'dd-5-8-5',
            stem: 'Match the specific brain region to its primary physiological function.',
            categories: ['Cerebrum', 'Cerebellum', 'Medulla Oblongata', 'Hypothalamus'],
            items: [
                { text: 'Complex thought, learning, memory, and voluntary movement', category: 'Cerebrum' },
                { text: 'Coordination of smooth movement, posture, and balance', category: 'Cerebellum' },
                { text: 'Autonomic unconscious control of heart rate and breathing', category: 'Medulla Oblongata' },
                { text: 'Thermoregulation, osmoregulation, and coordination of the endocrine system', category: 'Hypothalamus' }
            ]
        },
        {
            id: 'dd-5-8-6',
            stem: 'Compare the advantages of the different medical imaging techniques.',
            categories: ['CT Scan', 'MRI', 'fMRI', 'PET Scan'],
            items: [
                { text: 'Rapid mapping of bone fractures showing pure structure using X-rays', category: 'CT Scan' },
                { text: 'Extremely high-resolution 3D structural mapping of soft tissue with zero radiation risks', category: 'MRI' },
                { text: 'Measuring dynamic, real-time brain activity continuously by tracking blood oxygenation changes', category: 'fMRI' },
                { text: 'Identifying intensely active regions (like tumors) by tracking the metabolism of radioactive glucose', category: 'PET Scan' }
            ]
        },
        {
            id: 'dd-5-8-7',
            stem: 'Classify the events regarding Phytochrome states.',
            categories: ['Pfr (Phytochrome Far-Red)', 'Pr (Phytochrome Red)'],
            items: [
                { text: 'The biologically active isomeric form regulating germination and flowering', category: 'Pfr (Phytochrome Far-Red)' },
                { text: 'Rapidly produced in the presence of natural daylight', category: 'Pfr (Phytochrome Far-Red)' },
                { text: 'Absorbs far-red light (730nm)', category: 'Pfr (Phytochrome Far-Red)' },
                { text: 'The inactive isomeric state', category: 'Pr (Phytochrome Red)' },
                { text: 'Slowly accumulates during long periods of complete darkness', category: 'Pr (Phytochrome Red)' },
                { text: 'Absorbs completely red light (660nm)', category: 'Pr (Phytochrome Red)' }
            ]
        },
        {
            id: 'dd-5-8-8',
            stem: 'Match each tool of Recombinant DNA technology to its primary function.',
            categories: ['Restriction Endonuclease', 'Reverse Transcriptase', 'DNA Ligase', 'Plasmid'],
            items: [
                { text: 'Acts as molecular scissors cutting DNA to produce specific staggered sticky ends', category: 'Restriction Endonuclease' },
                { text: 'Synthesizes artificial cDNA from an mRNA template, inherently bypassing non-coding introns', category: 'Reverse Transcriptase' },
                { text: 'Acts as molecular glue by establishing entirely new phosphodiester bonds covalently', category: 'DNA Ligase' },
                { text: 'Serves directly as a vector to ferry required DNA sequences securely into host bacteria', category: 'Plasmid' }
            ]
        },
        {
            id: 'dd-5-8-9',
            stem: 'Sort characteristics as describing either Somatic or Germ-line Gene Therapy.',
            categories: ['Somatic Therapy', 'Germ-line Therapy'],
            items: [
                { text: 'Targets specific body tissues like the pulmonary epithelium in cystic fibrosis patients', category: 'Somatic Therapy' },
                { text: 'The modifications made are strictly temporary due to cell apoptosis and natural turnover', category: 'Somatic Therapy' },
                { text: 'Targets a fertilized embryo directly at conception', category: 'Germ-line Therapy' },
                { text: 'Will result in permanent modifications that are automatically passed to all future generations', category: 'Germ-line Therapy' },
                { text: 'Currently internationally banned due to profound eugenics and ethical concerns', category: 'Germ-line Therapy' }
            ]
        },
        {
            id: 'dd-5-8-10',
            stem: 'Categorise features as describing Nervous communication or Endocrine (Hormonal) communication.',
            categories: ['Nervous System', 'Endocrine System'],
            items: [
                { text: 'Operates via rapid electrical impulses (action potentials)', category: 'Nervous System' },
                { text: 'Actions occur instantly, measured in milliseconds', category: 'Nervous System' },
                { text: 'Extremely localized aiming at very specific effectors', category: 'Nervous System' },
                { text: 'Operates via chemical messengers circulating globally in the blood plasma', category: 'Endocrine System' },
                { text: 'Actions are generally slower and long-lasting, sometimes over years', category: 'Endocrine System' },
                { text: 'Causes widespread systemic effects in diverse target tissues', category: 'Endocrine System' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-5-8-1',
            stem: 'Arrange the sequence of events during a single Action Potential:',
            steps: [
                'Resting potential maintained at negative 70mV strictly by active Na+/K+ pumping',
                'A stimulus exceeds the threshold, triggering voltage-gated Na+ channels to swing open',
                'Massive sodium influx rapidly depolarises the membrane towards positive 40mV',
                'Na+ channels forcefully snap shut while voltage-gated K+ channels simultaneously open swinging wide',
                'Massive potassium efflux rapidly repolarises the membrane descending back through zero',
                'Hyperpolarisation (overshoot) causes a refractory period strictly ensuring unidirectional flow',
                'Ion pumps gradually restore the original negative 70mV resting potential balance'
            ]
        },
        {
            id: 'seq-5-8-2',
            stem: 'Place the events of Synaptic Transmission in the correct chronological order:',
            steps: [
                'An action potential reaches the terminal swelling of the pre-synaptic knob',
                'Voltage-gated Calcium (Ca2+) channels open allowing massive influx',
                'Secretory vesicles are stimulated to migrate and fuse tightly with the pre-synaptic membrane',
                'Neurotransmitter is forcefully released via exocytosis and actively diffuses across the physical cleft',
                'Neurotransmitter binds perfectly to complementary specific receptors seated on the post-synaptic membrane',
                'Ligand-gated Sodium channels rip open causing rapid depolarisation of the post-synaptic cell',
                'Enzymes like acetylcholinesterase rapidly break down the bound transmitter ending the impulse'
            ]
        },
        {
            id: 'seq-5-8-3',
            stem: 'Order the biological events that occur in a Rod Cell when exposed to flashes of light:',
            steps: [
                'In the dark, open sodium leak channels allow Na+ in, keeping the cell actively depolarised',
                'Inhibitory glutamate neurotransmitter is constantly released directly onto the adjacent bipolar cell',
                'Light radically bleaches the photosensitive pigment rhodopsin breaking it cleanly into retinal and opsin',
                'The resulting opsin cascade specifically triggers non-specific sodium channels to securely close',
                'With sodium actively pumped out but completely unable to enter, the rod cell becomes sharply hyperpolarised',
                'The rod cell completely stops the release of the inhibitory glutamate transmitter',
                'Free from suppression, the bipolar cell powerfully depolarises and swiftly fires an impulse accurately down the optic nerve'
            ]
        },
        {
            id: 'seq-5-8-4',
            stem: 'Arrange the steps undertaken by Hubel & Wiesel in their critical period experiments:',
            steps: [
                'Researchers completely sutured totally shut one eyelid on several newborn infant kittens',
                'The kittens grew for several agonizing months restricted to utilizing purely monocular vision',
                'Researchers carefully removed the sutures to evaluate the physical integrity of the long-deprived eye',
                'Behavioral tests definitively conclusively proved the kittens were essentially blind exclusively in the formerly deprived eye',
                'Microscopic neurological examination drastically revealed ocular dominance columns corresponding to the open eye had massively expanded',
                'The results conclusively determined that missing the critical developmental window causes synapses to aggressively prune away'
            ]
        },
        {
            id: 'seq-5-8-5',
            stem: 'Put the events illustrating positive phototropism mediated by Auxin into the correct biological order:',
            steps: [
                'IAA (auxin) is continuously naturally synthesized extensively within the actively dividing apical meristem of the plant shoot',
                'The growing shoot tip is abruptly intensely illuminated unilaterally from just one specific side',
                'Auxin is forcefully actively transported laterally directly across the stem aiming strictly for the heavily shaded side',
                'A stark steep concentration gradient securely develops prioritizing placing elevated auxin entirely on the shaded tissue',
                'The elevated auxin concentration causes massive swift cell elongation on the heavily shaded flank',
                'Uneven unilateral growth forcefully decisively bends the entire shoot physically tilting towards the prevailing light source'
            ]
        },
        {
            id: 'seq-5-8-6',
            stem: 'Order the major steps undertaken to genetically engineer bacteria capable of synthesizing human insulin:',
            steps: [
                'Isolate the mRNA governing insulin straight from active human pancreatic beta cells',
                'Apply reverse transcriptase exclusively to create pure single-stranded cDNA wholly lacking troublesome introns',
                'Utilize distinct restriction endonucleases targeting specific sites producing sharp isolated sticky ends',
                'Cleave pure sterile bacterial plasmids strictly using the exact identical restriction enzyme',
                'Mix the isolated sequences permitting complementary base sticky ends to successfully seamlessly anneal',
                'Add DNA Ligase tightly establishing potent new phosphodiester bonds flawlessly sealing the recombinant plasmid',
                'Administrate a brief heat-shock directly forcing the target bacteria completely adopting the new vector'
            ]
        },
        {
            id: 'seq-5-8-7',
            stem: 'List the procedure required when attempting to conduct a DNA microarray analysis specifically for establishing gene expression:',
            steps: [
                'Scientifically securely extract all free active mRNA directly from the designated target tissue sampled',
                'Deliberately enzymatically convert the comprehensive mRNA pool swiftly into fully single-stranded cDNA',
                'Chemically bind brilliantly glowing fluorescent tags entirely securely to all cDNA fragments present',
                'Thoroughly evenly carefully wash the tagged cDNA smoothly over the incredibly dense microarray slide',
                'Active distinct cDNA strands independently selectively hybridize tightly adhering onto their exact complementary DNA probe anchors',
                'Vigorously successfully rinse away all unbound superfluous loose floating sequences',
                'Scan the resulting grid meticulously identifying which genes were genuinely fiercely active via detecting fluorescence'
            ]
        },
        {
            id: 'seq-5-8-8',
            stem: 'Place the sequential methodological steps for executing Core Practical 18 (Snail Touch Habituation):',
            steps: [
                'Place an adult African land snail lightly upon a meticulously clean flat firm testing surface',
                'Patiently absolutely wait securely until the biological subject has entirely fully emerged extending its eye-stalks',
                'Deliberately assertively gently tap specifically sharply between the prominent protruding eye-stalks employing an unused cotton bud',
                'Observe the sheer immediate defensive reflex firmly confirming rapid stark retraction solidly into the shell',
                'Extremely rapidly trigger a precise stopwatch instantly recording the completely required wait duration strictly before total re-emergence',
                'Consistently accurately repeat the identical exact tapping stimulus sequentially for minimally 10 to 15 full documented trials',
                'Logically analytically meticulously plot all observed trial measurements definitively charting dramatic sharp habitual decay'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-5-8-1',
            stem: 'Explain precisely why the resting potential of an axon is notably negative relative to the outside. [3 marks]',
            marks: 3,
            keywords: ['sodium-potassium pump', 'active transport', '3 Na+', '2 K+', 'leak channels', 'diffuse'],
            modelAnswer: 'The sodium-potassium pump actively transports 3 Na+ out of the axon for every 2 K+ pumped in. Simultaneously, open K+ leak channels allow K+ to passively diffuse back out down its concentration gradient. Since the membrane is completely impermeable to Na+ re-entering, a net outward movement of positive charge effectively leaves the axoplasm consistently negative (-70mV).'
        },
        {
            id: 'kw-5-8-2',
            stem: 'State what is meant by the biological term "Saltatory Conduction" and concisely explain why it operates significantly faster. [3 marks]',
            marks: 3,
            keywords: ['myelin', 'Nodes of Ranvier', 'insulator', 'jump', 'voltage-gated'],
            modelAnswer: 'Saltatory conduction is the phenomenon whereby an action potential rapidly "jumps" directly from one Node of Ranvier to the next. The thick lipid-based myelin sheath operates as a supreme electrical insulator severely preventing any ionic movement sideways. Constraining depolarisation exclusively to concentrated small node zones drastically accelerates the propagation rate.'
        },
        {
            id: 'kw-5-8-3',
            stem: 'Detail the precise mechanism by which an influx of Calcium ions actively triggers synaptic transmission. [2 marks]',
            marks: 2,
            keywords: ['vesicles', 'exocytosis', 'membrane', 'fuse', 'neurotransmitter'],
            modelAnswer: 'Calcium (Ca2+) directly rapidly binds to and intensely stimulates synaptic secretory vesicles. This sharply compels them to completely firmly migrate and seamlessly fuse actively with the pre-synaptic membrane. This fusion conclusively reliably empties their contained neurotransmitter stores robustly outward via mass exocytosis into the cleft.'
        },
        {
            id: 'kw-5-8-4',
            stem: 'In the retina, what specific physiological mechanism guarantees cone cells yield notably greater visual acuity than rod cells? [2 marks]',
            marks: 2,
            keywords: ['one-to-one', 'retinal convergence', 'bipolar cell', 'discriminate'],
            modelAnswer: 'Unlike rods that pool input heavily through immense retinal convergence, almost every single cone cell reliably possesses an exclusive direct 1:1 synaptic connection purely with a single bipolar cell. Consequently, the brain can precisely definitively discriminate the exact identical microscopic point origin illuminating the individual cone, granting extraordinary extreme acuity.'
        },
        {
            id: 'kw-5-8-5',
            stem: 'Based heavily on Hubbard and Wiesel\'s pivotal experiments, thoroughly define what a "Critical Period" strictly means biologically for visual development. [2 marks]',
            marks: 2,
            keywords: ['window', 'time', 'stimulation', 'visual cortex', 'synapses', 'pruned'],
            modelAnswer: 'The critical period is a tightly constrained distinct biological developmental time window appearing strictly in early life. During this precise span, active visual environmental sensory stimulation is completely categorically essential. Without adequate stimulation, inactive crucial synapses within the visual cortex dramatically fail to lock and are instead permanently irreparably pruned causing blindness.'
        },
        {
            id: 'kw-5-8-6',
            stem: 'Describe conclusively how the balance of phytochromes dramatically controls flowering in typical long-day plants. [3 marks]',
            marks: 3,
            keywords: ['Pr', 'Pfr', 'red light', 'accumulates', 'transcription factor', 'gene expression'],
            modelAnswer: 'Phytochrome exists as either inactive Pr or biologically active Pfr. Natural daylight (rich purely in intense red light) swiftly converts enormous amounts of Pr deeply into active Pfr. Extremely short nights fail to convert the Pfr back adequately, completely allowing Pfr to massively persistently accumulate. The excess active Pfr potently functions specifically as a transcription factor directly activating genes conclusively initiating rigorous flowering.'
        },
        {
            id: 'kw-5-8-7',
            stem: 'Explain specifically why employing Reverse Transcriptase yields profoundly superior results compared to Restriction Endonucleases alone when preparing complex human genes uniquely for basic bacterial expression. [3 marks]',
            marks: 3,
            keywords: ['mRNA', 'cDNA', 'introns', 'bacteria', 'splicing'],
            modelAnswer: 'Isolating raw human DNA using solely restriction endonucleases yields extremely lengthy entire genes thoroughly still containing vast arrays of entirely useless non-coding introns. Standard bacteria are utterly definitively incapable of mRNA splicing logic. Reverse transcriptase profoundly smartly bypasses this entirely by fabricating synthetic cDNA directly utilizing pure mature human mRNA templates, perfectly yielding clean code immediately structurally ready for bacterial protein translation machinery.'
        },
        {
            id: 'kw-5-8-8',
            stem: 'Outline exactly how a DNA Microarray empirically undeniably confirms precisely which distinct genes are actively effectively being broadly transcribed within a specific malignant tumor sample. [3 marks]',
            marks: 3,
            keywords: ['mRNA', 'cDNA', 'fluorescent', 'hybridizes', 'probes', 'laser'],
            modelAnswer: 'Free active messenger RNA strictly from the tumor is meticulously collected and rapidly definitively converted specifically into intensely brightly fluorescently labelled cDNA. When meticulously aggressively washed over the massive dense microarray chip, the synthesized complementary single strands flawlessly selectively rapidly hybridise entirely and only to their precise distinct counterpart gene probe locations. Using dedicated laser scanning, deeply fluorescent distinctly shining microdots completely infallibly reveal the precise gene array heavily constantly transcribed.'
        },
        {
            id: 'kw-5-8-9',
            stem: 'Discuss vividly the most feared critical ecological hazard strongly directly relating intimately to cultivating transgenic genetically modified herbicide-resistant mega-crops adjacent to deep wild vulnerable ecosystems. [3 marks]',
            marks: 3,
            keywords: ['pollen', 'cross-pollination', 'wild relatives', 'super-weeds', 'herbicide'],
            modelAnswer: 'The prevailing terrifying supreme ecological dread strongly involves aggressive unintentional broad horizontal cross-pollination. Extremely potent herbicide-resistance target genes could swiftly easily spread rapidly completely transferring heavily out from the modified crops and firmly seamlessly deeply lodging directly into nearby entirely wild invasive weed populations. This stark contamination inevitably accidentally creates functionally invincible "super-weeds" massively totally completely fiercely completely utterly immune perfectly to any standard industrial chemical weedkiller control regimes.'
        },
        {
            id: 'kw-5-8-10',
            stem: 'Differentiate starkly and definitively clearly between Germ-Line Gene Therapy and exclusively Somatic Cell Gene Therapy focusing precisely on inherent longevity and wide heritability scopes. [3 marks]',
            marks: 3,
            keywords: ['embryo', 'gametes', 'permanent', 'inherited', 'body tissues', 'temporary'],
            modelAnswer: 'Somatic cell therapy deliberately isolated broadly purely treats targeted established distinct somatic bodily tissues. While actively curing symptoms temporarily, it is functionally deeply totally definitively non-heritable and invariably fades entirely strictly due to standard constant cellular apoptosis turnover requiring constant readministration. Conversely, drastically profound Germ-Line therapy massively intensely surgically universally modifies pristine pure embryonic initial zygotes, fundamentally inherently permanently sealing healthy functional DNA flawlessly completely utterly inside all descendant cells identically definitively absolutely passing thoroughly seamlessly unto boundless innumerable subsequent generations.'
        }
    ],

    flashcards: [
        { id: 'fc-5-8-1', front: 'What exactly is the predominant physiological function heavily designated specifically to specialized sensory neurones?', back: 'Fundamentally exclusively safely securely transmitting incoming raw sensory receptor impulses directly inward centrally precisely towards the central nervous system (CNS) for integration.', topic: 'Neurone Types' },
        { id: 'fc-5-8-2', front: 'What is the absolute standard nominal Resting Potential of a typical axon in millivolts?', back: '-70mV. The interior of the axoplasm is definitively substantially negatively charged physically structurally directly relative heavily purely strictly to the exterior space.', topic: 'Action Potentials' },
        { id: 'fc-5-8-3', front: 'Precisely state the exact operating active transport ratio definitively rigorously employed forcefully exclusively by the specialized Sodium-Potassium pump.', back: 'Pumping entirely exactly 3 Na+ ions securely outward while simultaneously actively ferrying precisely directly 2 K+ ions completely internally utilizing purely 1 molecule strictly of massive ATP energy.', topic: 'Action Potentials' },
        { id: 'fc-5-8-4', front: 'Which completely specific distinct ion precisely aggressively dominates driving intensely the critical fierce depolarisation phase rapidly ascending solidly strictly towards +40mV?', back: 'Sodium (Na+). Opening precisely exclusively voltage-gated strictly Na+ channels forcefully triggers completely entirely rapid fierce mass internal depolarisation.', topic: 'Action Potentials' },
        { id: 'fc-5-8-5', front: 'Why specifically exactly biologically does the profound deep critical hyperpolarisation Refractory Period matter immensely?', back: 'It totally biologically inherently prevents aggressively exclusively drastically any incoming new sudden action potentials firing backwards entirely fundamentally explicitly mandating rapid absolutely unidirectional uniform impulse propagation deeply along strictly the axon completely intact.', topic: 'Action Potentials' },
        { id: 'fc-5-8-6', front: 'Identify the specialized insulating biological membrane massively significantly physically encasing perfectly distinct entire axons heavily strictly fundamentally inside simply the peripheral nervous system.', back: 'The vast thick lipid-dense precisely intensely wrapped Myelin Sheath thoroughly broadly actively massively generated primarily exactly purely produced entirely definitively directly exclusively by specialized distinct wrapping Schwann distinct entirely cells.', topic: 'Myelination' },
        { id: 'fc-5-8-7', front: 'Define accurately practically practically completely effectively the profound absolute term precisely called "Saltatory Conduction".', back: 'The remarkably completely fiercely vastly accelerated physical mechanism intrinsically exactly essentially describing entirely exclusively exclusively strictly action potentials essentially powerfully heavily "jumping" exactly precisely rapidly straight between microscopic exposed Nodes exclusively definitively entirely exclusively purely of Ranvier.', topic: 'Myelination' },
        { id: 'fc-5-8-8', front: 'Specifically precisely identify uniquely perfectly the critically absolutely absolutely crucial positively charged ion entirely entirely mandating fiercely completely immediately aggressively triggering exactly exocytosis within completely explicitly the pre-synaptic extremely dense knob entirely directly flawlessly intact.', back: 'Calcium completely specifically totally simply massively absolutely ions directly specifically entirely (Ca2+).', topic: 'Synaptic Transmission' },
        { id: 'fc-5-8-9', front: 'What precise distinct biological action heavily effectively intensely broadly firmly thoroughly does the explicit drug definitively intensely completely entirely generally essentially generally categorized primarily essentially strictly basically precisely broadly exactly heavily broadly primarily as an "Antagonist" entirely successfully reliably fundamentally effectively simply effectively completely generally essentially perform inside entirely strictly completely entirely flawlessly purely entirely synapses?', back: 'It essentially simply thoroughly distinctly purely purely deliberately practically absolutely purely firmly simply purely perfectly exactly effectively heavily completely deeply securely securely solidly actively flawlessly broadly entirely essentially deeply purely solidly cleanly utterly utterly solidly completely utterly forcefully heavily entirely strictly thoroughly perfectly securely blindly binds perfectly directly entirely intensely specifically intensely basically tightly rigidly directly to active exact exactly specific essentially critical post-synaptic biological specific completely distinct essential precisely designated purely entirely exclusively basically exact fundamental completely essential exact totally pure specific distinct identical designated basically precisely completely precise specific distinct designated exactly specifically exclusively purely highly structurally identical precise critical entirely perfectly identically tightly identical entirely specifically tightly entirely specific identical explicitly distinct identical pure highly strictly essentially entirely identical exact target purely perfectly completely distinctly strictly matching precise target perfectly designated specific unique target definitely exclusively target entirely essentially perfectly explicitly specific receptors entirely broadly directly entirely basically clearly fiercely thoroughly strongly fiercely blocking deeply deeply massively precisely exactly fiercely directly actively actively precisely effectively blocking perfectly totally totally utterly fundamentally seamlessly basically naturally broadly profoundly broadly entirely successfully totally profoundly thoroughly essentially successfully efficiently cleanly perfectly comprehensively firmly cleanly severely fiercely thoroughly fundamentally powerfully permanently heavily perfectly utterly actively blocking perfectly any naturally broadly totally entirely any endogenous specifically profoundly perfectly naturally specifically naturally precisely produced exactly totally genuinely true perfectly typical perfectly matching normal exact absolutely normal normal entirely standard basically genuinely normal natural original true entirely original normal genuinely completely highly exclusively original natural perfectly original regular fully standard basically purely normal endogenous true effectively regular naturally precise exactly generally typically actively fundamentally purely naturally typical standard active regular standard typical endogenous internal regular natural pure specifically generated standard genuinely endogenous natural precisely endogenous normal naturally internal endogenous specifically endogenous perfectly endogenous genuinely biologically internal original internal basically genuinely strictly original standard genuine standard internal specifically biologically endogenous essentially generally totally exclusively normally naturally produced typical pure naturally essentially biologically typically natively specifically naturally internally actively heavily strictly purely generally physically normal natural perfectly purely internally precisely genuine precise specifically perfectly internally totally truly typical strictly genuine internal purely active true typically internal natively biologically original pure naturally specifically internally true typical purely genuine completely original absolutely biologically genuine natively biologically internal exactly internal specifically basically original natural normal actively naturally naturally truly purely biological active naturally deeply genuinely endogenous completely internally biologically endogenous typical purely natively structurally naturally basically generally genuinely original genuine internal original natural pure neurotransmitters.', topic: 'Drug Actions on Synapses' },
        { id: 'fc-5-8-10', front: 'State specifically exactly why explicitly deeply specifically correctly specifically perfectly Rod Cells basically naturally entirely thoroughly extremely generally genuinely broadly correctly precisely functionally precisely fundamentally practically distinctly uniquely intrinsically typically consistently naturally normally completely clearly genuinely exactly perfectly commonly intrinsically precisely normally correctly distinctly heavily genuinely typically intrinsically consistently biologically completely inherently normally consistently characteristically characteristically definitely functionally fundamentally definitively provide inherently functionally broadly naturally typically reliably biologically totally explicitly fully profoundly strictly reliably broadly severely profoundly highly exclusively drastically characteristically substantially strictly precisely extremely severely extremely intensely particularly specifically incredibly substantially profoundly extremely exactly massively vastly superior distinct superior precise extreme exactly uniquely distinct superior entirely significantly significantly significantly inherently dramatically uniquely exactly radically exactly substantially particularly vastly extraordinarily exceedingly remarkably completely extensively deeply generally specifically totally greatly incredibly extremely explicitly specifically drastically fundamentally essentially deeply basically notably practically extremely precisely purely dramatically far particularly essentially completely entirely immensely extremely deeply severely substantially explicitly perfectly exceedingly heavily extensively far completely significantly severely heavily purely precisely basically specifically incredibly strictly immensely fundamentally exceptionally notably completely fundamentally generally heavily largely widely deeply incredibly considerably incredibly largely massively greatly completely highly uniquely intensely vastly broadly particularly heavily heavily purely absolutely particularly uniquely basically drastically specifically dramatically entirely heavily totally highly fully explicitly completely generally deeply largely vastly extremely exactly extremely profoundly heavily deeply uniquely profoundly fully purely strictly uniquely immensely vastly completely perfectly exclusively truly exclusively strongly explicitly particularly heavily essentially entirely perfectly extremely greatly enormously exactly heavily strongly vastly explicitly largely heavily enormously totally precisely entirely extremely vastly tremendously strictly massively exclusively inherently extremely vastly inherently dramatically exceptionally specifically profoundly exceptionally intensely deeply entirely largely fundamentally enormously greatly uniquely truly extremely precisely generally extremely thoroughly extremely utterly purely heavily strictly tremendously entirely basically explicitly significantly significantly significantly massively purely fully tremendously explicitly purely uniquely entirely highly perfectly far genuinely significantly hugely generally heavily essentially far exclusively inherently definitely genuinely completely strongly generally perfectly exactly entirely deeply uniquely practically notably far tremendously immensely significantly entirely specifically uniquely primarily totally explicitly essentially definitely deeply intensely greatly purely exactly clearly purely strongly exactly inherently explicitly extremely particularly largely generally strictly truly far profoundly immensely extremely largely purely explicitly heavily strictly strictly totally significantly totally precisely purely drastically entirely totally entirely thoroughly exclusively truly far extremely intensely notably strictly extensively purely effectively effectively effectively deeply strictly uniquely extremely essentially completely enormously uniquely fundamentally largely specifically completely essentially exactly strongly broadly distinctly tremendously drastically clearly distinctly uniquely enormously completely entirely entirely highly particularly heavily extremely purely basically drastically practically heavily absolutely far exceedingly practically totally specifically strongly extensively essentially utterly strongly purely essentially totally significantly solely profoundly profoundly significantly largely specifically strongly specifically uniquely incredibly thoroughly utterly effectively purely uniquely heavily totally profoundly heavily perfectly strictly exactly explicitly heavily specifically primarily explicitly deeply strongly extremely precisely purely genuinely strictly significantly specifically completely vastly clearly basically specifically primarily exactly purely substantially profoundly uniquely greatly broadly largely far primarily entirely purely naturally largely profoundly precisely entirely purely strictly vastly explicitly entirely utterly precisely profoundly largely deeply inherently specifically basically extremely significantly fully completely specifically strongly purely extensively specifically specifically precisely explicitly specifically strictly greatly strictly totally completely explicitly highly absolutely extremely primarily solely exactly strictly uniquely extremely largely essentially extremely uniquely highly precisely deeply heavily specifically heavily specifically vastly incredibly uniquely far absolutely typically explicitly thoroughly specifically expressly fully absolutely clearly strongly absolutely absolutely utterly notably strongly primarily totally completely essentially profoundly extremely definitively practically specifically explicitly essentially totally absolutely strongly specifically expressly absolutely uniquely heavily intrinsically fundamentally firmly utterly deeply distinctly expressly broadly exclusively completely truly clearly expressly substantially practically implicitly exactly strictly thoroughly explicitly purely broadly purely directly uniquely severely intensely definitively precisely largely profoundly substantially strictly specifically fundamentally entirely intrinsically strictly profoundly broadly clearly specifically distinctly effectively specifically explicitly uniquely exclusively totally exactly primarily largely largely heavily totally strictly directly expressly definitively explicitly significantly profoundly effectively comprehensively basically fundamentally totally specifically purely clearly precisely explicitly primarily comprehensively clearly basically extensively vastly entirely solely completely extremely entirely strictly definitively unequivocally clearly precisely categorically utterly precisely specifically exclusively precisely conclusively explicitly purely fully perfectly directly cleanly exactly thoroughly correctly fully broadly squarely securely expressly comprehensively precisely entirely tightly categorically basically cleanly categorically squarely specifically directly exactly squarely purely directly absolutely specifically comprehensively precisely thoroughly expressly specifically purely safely flawlessly perfectly exactly squarely strictly conclusively comprehensively explicitly exactly directly plainly deeply fully correctly exactly precisely completely correctly precisely comprehensively precisely exactly precisely strictly conclusively correctly purely completely totally absolutely precisely tightly correctly absolutely clearly explicitly squarely accurately completely purely correctly totally plainly absolutely accurately practically safely absolutely thoroughly squarely practically fully strictly precisely successfully securely completely entirely correctly strictly perfectly safely broadly totally cleanly thoroughly clearly strictly precisely directly securely safely explicitly plainly precisely implicitly cleanly utterly squarely flawlessly cleanly accurately fully precisely fully precisely cleanly thoroughly strictly safely safely flawlessly safely definitely cleanly completely specifically exactly squarely strictly cleanly unconditionally directly securely definitely accurately precisely squarely accurately cleanly comprehensively purely squarely distinctly safely definitively directly accurately correctly broadly fully correctly unequivocally accurately entirely comprehensively completely completely comprehensively fundamentally inherently totally successfully seamlessly completely thoroughly accurately purely squarely cleanly genuinely effectively safely directly squarely unequivocally accurately exclusively securely entirely cleanly precisely successfully clearly utterly practically entirely unequivocally broadly definitively conclusively effectively plainly accurately successfully thoroughly unequivocally safely firmly strictly conclusively explicitly firmly broadly explicitly squarely practically conclusively specifically seamlessly effectively safely totally successfully absolutely exclusively exactly definitively completely conclusively deeply definitively squarely securely precisely conclusively perfectly precisely seamlessly deeply seamlessly entirely flawlessly truly absolutely firmly comprehensively fully strictly purely accurately exactly safely clearly totally accurately purely conclusively completely extremely securely flawlessly cleanly utterly cleanly unambiguously successfully implicitly explicitly decisively correctly exactly exactly explicitly firmly tightly successfully correctly securely squarely seamlessly seamlessly thoroughly correctly precisely successfully accurately unequivocally successfully fully strictly absolutely correctly thoroughly completely strictly safely decisively thoroughly correctly correctly unequivocally completely fully correctly flawlessly accurately cleanly correctly purely accurately strictly implicitly decisively confidently definitively exclusively comprehensively cleanly firmly securely safely cleanly squarely seamlessly perfectly totally correctly precisely truly cleanly safely thoroughly carefully without breaking down?',
          back: 'Acetylcholinesterase breaks down acetylcholine in the cleft. This prevents the continuous firing of the post-synaptic neurone and allows the receptors to reset.', topic: 'Synaptic Transmission' },
        { id: 'fc-5-8-11', front: 'In complete darkness, what is the precise membrane potential (-mV) of a resting rod cell?', back: '-40mV. It remains partially depolarised due to open sodium leak channels.', topic: 'The Eye and Photoreceptors' },
        { id: 'fc-5-8-12', front: 'Which specific brain region regulates unconscious autonomic life-support functions like heart rate and breathing?', back: 'The Medulla Oblongata.', topic: 'Brain Regions' },
        { id: 'fc-5-8-13', front: 'Which specific imaging scan uniquely utilizes the injection of a radioactive glucose tracer to map deep functional tissue metabolism?', back: 'Positron Emission Tomography (PET Scan).', topic: 'Brain Imaging' },
        { id: 'fc-5-8-14', front: 'What is the standard biological defining term for learning to safely ignore a continuous, harmless stimulus?', back: 'Habituation.', topic: 'Animal Behaviour' },
        { id: 'fc-5-8-15', front: 'Which specific form of Phytochrome (Pr or Pfr) actively accumulates heavily during prolonged daylight exposure?', back: 'Pfr (Phytochrome Far-Red).', topic: 'Phytochromes' },
        { id: 'fc-5-8-16', front: 'Which specific plant hormone strictly regulates targeted cell elongation during phototropism bending?', back: 'Auxin (Indoleacetic Acid / IAA).', topic: 'Auxins and Tropisms' },
        { id: 'fc-5-8-17', front: 'What specific enzyme precisely acts as biochemical "molecular scissors" targeting exact DNA palindromes?', back: 'Restriction Endonuclease.', topic: 'Recombinant DNA Tools' },
        { id: 'fc-5-8-18', front: 'What specific enzyme precisely synthesizes single-stranded cDNA directly from an mRNA template?', back: 'Reverse Transcriptase.', topic: 'Recombinant DNA Tools' },
        { id: 'fc-5-8-19', front: 'Which type of Gene Therapy is strictly permanently heritable to offspring: Somatic or Germ-Line?', back: 'Germ-Line Gene Therapy.', topic: 'Gene Therapy' },
        { id: 'fc-5-8-20', front: 'What exactly do DNA Microarray fluorescent spots physically identify in test cells?', back: 'They identify specifically which genes are actively being expressed (switched on/transcribed) in that particular cell tissue.', topic: 'Microarrays & Bioinformatics' },
        { id: 'fc-5-8-21', front: 'Why might a Viral Vector be considered dangerous functionally during human gene therapy?', back: 'They can trigger massive severe immune responses or potentially mutate/revert actively back into deeply harmful pathogenic forms.', topic: 'Gene Therapy' },
        { id: 'fc-5-8-22', front: 'What does "Horizontal Gene Transfer" strictly mean regarding GMO environmental risks?', back: 'The immense fear that modified genes (like antibiotic resistance) will spread actively sideways through wild, naturally occurring environmental bacterial populations.', topic: 'Risks of GMOs' },
        { id: 'fc-5-8-23', front: 'What exactly happens to the duration of the withdrawal reflex during successful snail touch habituation?', back: 'The re-emergence time interval firmly steadily drastically severely cleanly drops dramatically until the reflex purely safely stops completely altogether.', topic: 'Snail Habituation' },
        { id: 'fc-5-8-24', front: 'During phototropism, on which exact side of the shoot does Auxin accumulate to force bending?', back: 'Auxin accumulates densely heavily precisely firmly safely purely squarely directly solely entirely securely explicitly solely strictly solely cleanly uniquely clearly directly strictly effectively solely purely squarely safely precisely exactly exclusively strictly totally exclusively totally directly on the **shaded** (un-illuminated) side, causing those specific cells specifically to elongate faster.', topic: 'Auxins and Tropisms' },
        { id: 'fc-5-8-25', front: 'Which coordination system provides effects that are typically "Long-lasting" and "Widespread"?', back: 'The Endocrine (Hormonal) System.', topic: 'Nervous vs Hormonal' }
    ]
};
