// WBI12 — Topic 3: The Voice of the Genome
// AL Biology — MCQ (30) + Drag & Drop (10) exercises
// Unit 2, Topic 3 — Cell structure, cell cycle, meiosis, stem cells, epigenetics, cloning
// 14 subtopics: eukaryotic/prokaryotic cells, fractionation, microscopy, mitosis, meiosis, fertilisation, stem cells, gene expression, epigenetics, differentiation, cloning, practicals 5-6

export const exercises_biology_2_3 = {
    subject: 'biology',
    unitId: 2,
    unitCode: 'WBI12',
    unitTitle: 'Cells, Development, Biodiversity and Conservation',
    topicId: 3,
    topicTitle: 'The Voice of the Genome',

    // ─────────────────────────────────────────────
    // DRAG & DROP — 10 questions
    // ─────────────────────────────────────────────
    dragdrop: [
        // 1. Eukaryotic organelles - sort by function
        {
            id: 'dd-t3-1',
            stem: 'Sort each organelle or structure by its primary function category.',
            categories: ['Protein Synthesis', 'Energy Production', 'Packaging & Transport', 'Digestion & Waste'],
            items: [
                { text: 'Ribosome', category: 'Protein Synthesis' },
                { text: 'Rough Endoplasmic Reticulum', category: 'Protein Synthesis' },
                { text: 'Mitochondrion', category: 'Energy Production' },
                { text: 'Golgi Apparatus', category: 'Packaging & Transport' },
                { text: 'Smooth Endoplasmic Reticulum', category: 'Packaging & Transport' },
                { text: 'Lysosome', category: 'Digestion & Waste' },
                { text: 'Vesicles', category: 'Packaging & Transport' },
                { text: 'ATP synthase (in mitochondria)', category: 'Energy Production' },
                { text: '80S ribosome (eukaryotic)', category: 'Protein Synthesis' },
            ],
        },

        // 2. Prokaryote vs Eukaryote features
        {
            id: 'dd-t3-2',
            stem: 'Classify each cellular feature as typical of Prokaryotes, Eukaryotes, or Both.',
            categories: ['Prokaryote Only', 'Eukaryote Only', 'Both Prokaryotes and Eukaryotes'],
            items: [
                { text: 'Circular DNA', category: 'Prokaryote Only' },
                { text: 'Linear DNA with histones', category: 'Eukaryote Only' },
                { text: '70S ribosomes', category: 'Prokaryote Only' },
                { text: '80S ribosomes', category: 'Eukaryote Only' },
                { text: 'Cell membrane (plasma membrane)', category: 'Both Prokaryotes and Eukaryotes' },
                { text: 'Membrane-bound nucleus', category: 'Eukaryote Only' },
                { text: 'Plasmids', category: 'Prokaryote Only' },
                { text: 'Ribosomes for protein synthesis', category: 'Both Prokaryotes and Eukaryotes' },
                { text: 'Peptidoglycan cell wall', category: 'Prokaryote Only' },
                { text: 'Mitochondria', category: 'Eukaryote Only' },
            ],
        },

        // 3. Cell fractionation order - organelles by sedimentation
        {
            id: 'dd-t3-3',
            stem: 'During differential centrifugation, organelles separate based on mass and density. Sort these by when they pellet (heaviest/largest first to lightest/smallest last).',
            categories: ['Pellets First (Lowest Speed)', 'Pellets Second', 'Pellets Third', 'Pellets Last (Highest Speed)'],
            items: [
                { text: 'Nuclei', category: 'Pellets First (Lowest Speed)' },
                { text: 'Whole cells/debris', category: 'Pellets First (Lowest Speed)' },
                { text: 'Mitochondria', category: 'Pellets Second' },
                { text: 'Lysosomes', category: 'Pellets Second' },
                { text: 'Rough Endoplasmic Reticulum', category: 'Pellets Third' },
                { text: 'Smooth Endoplasmic Reticulum', category: 'Pellets Third' },
                { text: 'Ribosomes', category: 'Pellets Last (Highest Speed)' },
                { text: 'Supernatant (cytosol, enzymes)', category: 'Pellets Last (Highest Speed)' },
            ],
        },

        // 4. Microscopy comparison
        {
            id: 'dd-t3-4',
            stem: 'Match each characteristic to the type of microscopy: Light Microscope (LM), Transmission Electron Microscope (TEM), or Scanning Electron Microscope (SEM).',
            categories: ['Light Microscope (LM)', 'Transmission EM (TEM)', 'Scanning EM (SEM)'],
            items: [
                { text: 'Uses light waves; resolution ~200 nm', category: 'Light Microscope (LM)' },
                { text: 'Uses electron beam transmitted through specimen', category: 'Transmission EM (TEM)' },
                { text: 'Produces 3D surface images', category: 'Scanning EM (SEM)' },
                { text: 'Resolution ~0.5 nm; highest magnification', category: 'Transmission EM (TEM)' },
                { text: 'Resolution ~3–10 nm; surface detail', category: 'Scanning EM (SEM)' },
                { text: 'Can view living specimens', category: 'Light Microscope (LM)' },
                { text: 'Requires vacuum; specimens must be dead', category: 'Transmission EM (TEM)' },
                { text: 'Specimens often coated in gold', category: 'Scanning EM (SEM)' },
                { text: 'Thin sections required; shows internal detail', category: 'Transmission EM (TEM)' },
                { text: 'Lower magnification but portable and affordable', category: 'Light Microscope (LM)' },
            ],
        },

        // 5. Cell cycle phases in order
        {
            id: 'dd-t3-5',
            stem: 'Sort the cell cycle phases and events in the correct chronological order, starting from a newly formed cell.',
            categories: ['Phase 1 (First)', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5 (Last)'],
            items: [
                { text: 'G1 Phase — cell grows, organelles duplicated', category: 'Phase 1 (First)' },
                { text: 'S Phase — DNA replication occurs', category: 'Phase 2' },
                { text: 'G2 Phase — cell prepares for division, checks DNA', category: 'Phase 3' },
                { text: 'Mitosis — nuclear division (PMAT)', category: 'Phase 4' },
                { text: 'Cytokinesis — cytoplasm divides, two cells form', category: 'Phase 5 (Last)' },
                { text: 'Interphase (G1 + S + G2 combined)', category: 'Phase 1 (First)' },
                { text: 'Checkpoint before S phase checks cell size', category: 'Phase 1 (First)' },
                { text: 'Spindle assembly checkpoint in metaphase', category: 'Phase 4' },
            ],
        },

        // 6. Mitosis stages - events categorization
        {
            id: 'dd-t3-6',
            stem: 'Sort each event to the correct stage of mitosis: Prophase, Metaphase, Anaphase, or Telophase.',
            categories: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            items: [
                { text: 'Chromatin condenses into visible chromosomes', category: 'Prophase' },
                { text: 'Nuclear envelope breaks down', category: 'Prophase' },
                { text: 'Centrioles move to opposite poles', category: 'Prophase' },
                { text: 'Chromosomes line up at the cell equator', category: 'Metaphase' },
                { text: 'Spindle fibres attach to kinetochores', category: 'Metaphase' },
                { text: 'Sister chromatids separate at centromere', category: 'Anaphase' },
                { text: 'Chromatids pulled to opposite poles by spindle', category: 'Anaphase' },
                { text: 'Nuclear envelope reforms around each set', category: 'Telophase' },
                { text: 'Chromosomes decondense back to chromatin', category: 'Telophase' },
                { text: 'Spindle fibres disassemble', category: 'Telophase' },
            ],
        },

        // 7. Meiosis vs Mitosis comparison
        {
            id: 'dd-t3-7',
            stem: 'Classify each characteristic as typical of Mitosis, Meiosis, or Both.',
            categories: ['Mitosis Only', 'Meiosis Only', 'Both Mitosis and Meiosis'],
            items: [
                { text: 'Produces two genetically identical daughter cells', category: 'Mitosis Only' },
                { text: 'Produces four genetically different gametes', category: 'Meiosis Only' },
                { text: 'Involves DNA replication before division', category: 'Both Mitosis and Meiosis' },
                { text: 'Involves two successive nuclear divisions', category: 'Meiosis Only' },
                { text: 'Results in diploid (2n) daughter cells', category: 'Mitosis Only' },
                { text: 'Results in haploid (n) daughter cells', category: 'Meiosis Only' },
                { text: 'Homologous chromosomes pair up (synapsis)', category: 'Meiosis Only' },
                { text: 'Crossing over occurs between homologues', category: 'Meiosis Only' },
                { text: 'Used for growth and tissue repair', category: 'Mitosis Only' },
                { text: 'Used for gamete formation in sexual reproduction', category: 'Meiosis Only' },
            ],
        },

        // 8. Stem cell types - potency levels
        {
            id: 'dd-t3-8',
            stem: 'Sort each stem cell characteristic by the type of potency: Totipotent, Pluripotent, Multipotent, or Unipotent.',
            categories: ['Totipotent', 'Pluripotent', 'Multipotent', 'Unipotent'],
            items: [
                { text: 'Can form any cell type including placenta', category: 'Totipotent' },
                { text: 'Can form all body cell types except placenta', category: 'Pluripotent' },
                { text: 'Can form a limited range of related cell types', category: 'Multipotent' },
                { text: 'Can only differentiate into one cell type', category: 'Unipotent' },
                { text: 'Found in the zygote and early embryo (up to 16 cells)', category: 'Totipotent' },
                { text: 'Found in embryonic stem cells (blastocyst inner cell mass)', category: 'Pluripotent' },
                { text: 'Found in adult bone marrow stem cells', category: 'Multipotent' },
                { text: 'Found in skin basal cells', category: 'Unipotent' },
                { text: 'Example: fertilised egg (zygote)', category: 'Totipotent' },
                { text: 'Example: hematopoietic stem cells forming blood cells', category: 'Multipotent' },
            ],
        },

        // 9. Epigenetic effects - methylation vs acetylation
        {
            id: 'dd-t3-9',
            stem: 'Classify each epigenetic mechanism and its effect on gene expression.',
            categories: ['DNA Methylation', 'Histone Acetylation', 'Both Epigenetic Mechanisms'],
            items: [
                { text: 'Adds methyl groups to cytosine bases at CpG islands', category: 'DNA Methylation' },
                { text: 'Adds acetyl groups to histone tails', category: 'Histone Acetylation' },
                { text: 'Generally silences gene expression', category: 'DNA Methylation' },
                { text: 'Generally promotes gene transcription', category: 'Histone Acetylation' },
                { text: 'Prevents transcription factors from binding', category: 'DNA Methylation' },
                { text: 'Loosens chromatin structure, allowing access', category: 'Histone Acetylation' },
                { text: 'Makes chromatin more condensed (heterochromatin)', category: 'DNA Methylation' },
                { text: 'Makes chromatin more open (euchromatin)', category: 'Histone Acetylation' },
                { text: 'Can be inherited through cell division', category: 'Both Epigenetic Mechanisms' },
                { text: 'Can be reversed by environmental factors', category: 'Both Epigenetic Mechanisms' },
            ],
        },

        // 10. Cloning methods - plant tissue culture vs SCNT
        {
            id: 'dd-t3-10',
            stem: 'Classify each step or characteristic by the cloning method: Plant Tissue Culture (Micropropagation) or Somatic Cell Nuclear Transfer (SCNT).',
            categories: ['Plant Tissue Culture', 'SCNT (Animal Cloning)', 'Both Methods'],
            items: [
                { text: 'Uses explants (small pieces of plant tissue)', category: 'Plant Tissue Culture' },
                { text: 'Uses enucleated egg cell as recipient', category: 'SCNT (Animal Cloning)' },
                { text: 'Requires sterile technique to prevent contamination', category: 'Both Methods' },
                { text: 'Donor nucleus inserted into egg cell', category: 'SCNT (Animal Cloning)' },
                { text: 'Uses plant growth hormones (auxin and cytokinin)', category: 'Plant Tissue Culture' },
                { text: 'Electric shock stimulates cell division', category: 'SCNT (Animal Cloning)' },
                { text: 'Callus forms before differentiation', category: 'Plant Tissue Culture' },
                { text: 'Embryo implanted into surrogate mother', category: 'SCNT (Animal Cloning)' },
                { text: 'Produces genetically identical offspring', category: 'Both Methods' },
                { text: 'Used commercially for orchids and bananas', category: 'Plant Tissue Culture' },
            ],
        },
    ],

    // ─────────────────────────────────────────────
    // FILL-IN-THE-BLANK — 15 questions
    // ─────────────────────────────────────────────
    fillblank: [
        // 1. Eukaryotic organelles - mitochondria
        {
            id: 'fb-t3-1',
            stem: 'Complete the sentence about eukaryotic cell organelles.',
            template: 'The __BLANK__ is the site of aerobic respiration and has an inner membrane folded into __BLANK__.',
            blanks: [
                { answer: 'mitochondrion' },
                { answer: 'cristae' },
            ],
            rationale: 'Mitochondria are the powerhouses of the cell, producing ATP through aerobic respiration. The inner membrane is highly folded into cristae to increase surface area for the electron transport chain.',
        },

        // 2. Eukaryotic organelles - Golgi apparatus
        {
            id: 'fb-t3-2',
            stem: 'Complete the sentence about protein processing.',
            template: 'The __BLANK__ apparatus modifies proteins and packages them into vesicles for secretion.',
            blanks: [
                { answer: 'Golgi' },
            ],
            rationale: 'The Golgi apparatus (or Golgi body) receives proteins from the RER, modifies them (e.g., adding carbohydrate groups), and packages them into vesicles for transport to the cell membrane or elsewhere.',
        },

        // 3. Prokaryotic features - ribosomes and cell wall
        {
            id: 'fb-t3-3',
            stem: 'Complete the sentence about prokaryotic cell structure.',
            template: 'Prokaryotic cells have __BLANK__ ribosomes and a cell wall made of __BLANK__.',
            blanks: [
                { answer: '70S' },
                { answer: 'peptidoglycan' },
            ],
            rationale: 'Prokaryotes (bacteria) have smaller 70S ribosomes compared to eukaryotic 80S ribosomes. Their cell wall is made of peptidoglycan (also called murein), which prevents osmotic lysis.',
        },

        // 4. Prokaryotic features - plasmids
        {
            id: 'fb-t3-4',
            stem: 'Complete the sentence about extra DNA in bacteria.',
            template: 'Small circular DNA molecules called __BLANK__ can carry genes for antibiotic resistance.',
            blanks: [
                { answer: 'plasmids' },
            ],
            rationale: 'Plasmids are small, circular, extra-chromosomal DNA molecules found in bacteria. They often carry non-essential genes such as antibiotic resistance genes and can be transferred between bacteria.',
        },

        // 5. Cell fractionation - buffer conditions
        {
            id: 'fb-t3-5',
            stem: 'Complete the sentence about the cell fractionation buffer.',
            template: 'During cell fractionation, the solution must be __BLANK__ to prevent enzyme activity, isotonic to prevent osmotic damage, and __BLANK__ to maintain constant pH.',
            blanks: [
                { answer: 'cold' },
                { answer: 'buffered' },
            ],
            rationale: 'The homogenisation solution must be: cold (ice-cold) to reduce enzyme activity and prevent organelle damage; isotonic (same water potential) to prevent cells bursting or shrinking; buffered to maintain pH and prevent protein denaturation.',
        },

        // 6. Cell fractionation - ultracentrifugation
        {
            id: 'fb-t3-6',
            stem: 'Complete the sentence about ultracentrifugation.',
            template: 'During ultracentrifugation, the heaviest organelles form a __BLANK__ at the bottom, while lighter organelles remain in the __BLANK__.',
            blanks: [
                { answer: 'pellet' },
                { answer: 'supernatant' },
            ],
            rationale: 'In differential centrifugation, heavier organelles (like nuclei) sediment first to form a pellet at the tube bottom. The liquid above (supernatant) contains lighter organelles and is spun again at higher speeds.',
        },

        // 7. Microscopy - magnification vs resolution
        {
            id: 'fb-t3-7',
            stem: 'Complete the sentence about microscopy terms.',
            template: '__BLANK__ is how much larger an image appears compared to the actual object, while __BLANK__ is the ability to distinguish two close points as separate.',
            blanks: [
                { answer: 'magnification' },
                { answer: 'resolution' },
            ],
            rationale: 'Magnification is the ratio of image size to actual size (Image/Actual). Resolution is the minimum distance at which two distinct points can be distinguished as separate - electron microscopes have much higher resolution than light microscopes.',
        },

        // 8. Cell cycle - S phase and chromatids
        {
            id: 'fb-t3-8',
            stem: 'Complete the sentence about the cell cycle.',
            template: 'During the __BLANK__ phase of interphase, DNA is replicated so each chromosome consists of two sister __BLANK__.',
            blanks: [
                { answer: 'S' },
                { answer: 'chromatids' },
            ],
            rationale: 'The S phase (Synthesis phase) is when DNA replication occurs. After replication, each chromosome consists of two identical sister chromatids joined at the centromere.',
        },

        // 9. Mitosis - metaphase
        {
            id: 'fb-t3-9',
            stem: 'Complete the sentence about mitosis stages.',
            template: 'During __BLANK__, chromosomes line up at the cell equator and spindle fibres attach to their __BLANK__.',
            blanks: [
                { answer: 'metaphase' },
                { answer: 'centromeres' },
            ],
            rationale: 'In metaphase, chromosomes align at the metaphase plate (equator) of the cell. Spindle fibres from opposite poles attach to the kinetochores at the centromeres, preparing for chromosome separation.',
        },

        // 10. Meiosis - crossing over
        {
            id: 'fb-t3-10',
            stem: 'Complete the sentence about meiosis and genetic variation.',
            template: 'During prophase I, __BLANK__ over exchanges alleles between non-sister chromatids at points called __BLANK__.',
            blanks: [
                { answer: 'crossing' },
                { answer: 'chiasmata' },
            ],
            rationale: 'Crossing over occurs during prophase I when homologous chromosomes pair up. Non-sister chromatids exchange segments at chiasmata (singular: chiasma), creating new combinations of alleles - a key source of genetic variation.',
        },

        // 11. Fertilisation - acrosome and cortical reactions
        {
            id: 'fb-t3-11',
            stem: 'Complete the sentence about fertilisation.',
            template: 'The __BLANK__ reaction releases enzymes that digest the zona pellucida, while the __BLANK__ reaction hardens it to prevent polyspermy.',
            blanks: [
                { answer: 'acrosome' },
                { answer: 'cortical' },
            ],
            rationale: 'The acrosome reaction occurs when the sperm binds to the zona pellucida - digestive enzymes from the acrosome digest a path through. After sperm entry, the cortical reaction releases enzymes from cortical granules that harden the zona pellucida, blocking additional sperm.',
        },

        // 12. Stem cells - totipotent vs pluripotent
        {
            id: 'fb-t3-12',
            stem: 'Complete the sentence about stem cell potency.',
            template: '__BLANK__ stem cells can differentiate into any cell type including placental tissues, while __BLANK__ stem cells can form almost all body cells but not extra-embryonic tissues.',
            blanks: [
                { answer: 'totipotent' },
                { answer: 'pluripotent' },
            ],
            rationale: 'Totipotent cells (found in early embryos up to ~16 cells) can form any cell including the placenta. Pluripotent cells (inner cell mass of blastocyst) can form all body tissues but not extra-embryonic structures. Multipotent cells are even more restricted.',
        },

        // 13. Gene regulation - transcription factors
        {
            id: 'fb-t3-13',
            stem: 'Complete the sentence about transcription factors.',
            template: '__BLANK__ are proteins that bind to promoter regions and increase transcription by helping __BLANK__ polymerase bind to DNA.',
            blanks: [
                { answer: 'activators' },
                { answer: 'RNA' },
            ],
            rationale: 'Transcription factors are regulatory proteins. Activators stimulate transcription by helping RNA polymerase bind to the promoter. Repressors inhibit transcription by blocking RNA polymerase binding.',
        },

        // 14. Epigenetics - methylation and acetylation
        {
            id: 'fb-t3-14',
            stem: 'Complete the sentence about epigenetic modifications.',
            template: 'Increased DNA __BLANK__ at promoter regions switches genes off, while increased histone __BLANK__ loosens chromatin and switches genes on.',
            blanks: [
                { answer: 'methylation' },
                { answer: 'acetylation' },
            ],
            rationale: 'DNA methylation adds methyl groups to cytosine bases, blocking transcription factor binding and silencing genes. Histone acetylation adds acetyl groups to histone tails, reducing their positive charge and loosening chromatin structure, allowing transcription.',
        },

        // 15. Cloning - plant tissue culture
        {
            id: 'fb-t3-15',
            stem: 'Complete the sentence about plant tissue culture.',
            template: 'In plant tissue culture, totipotent cells divide to form an undifferentiated mass called a __BLANK__, which can then be stimulated to differentiate into plantlets using __BLANK__ hormones.',
            blanks: [
                { answer: 'callus' },
                { answer: 'auxin' },
            ],
            rationale: 'In micropropagation, explants are sterilised and placed on agar with nutrients and hormones. They divide to form a callus (undifferentiated cell mass). The callus is subdivided and treated with auxin and cytokinin ratios to stimulate root and shoot formation, producing genetically identical clones.',
        },
    ],

    // ─────────────────────────────────────────────
    // MCQ — 30 questions (subtopics 0-13)
    // correctAnswer is the 0-based index of the correct option
    // ID format: mcq-t3-X
    // ─────────────────────────────────────────────
    mcq: [
        // ─────────────────────────────────────────────
        // Subtopic 0 — Eukaryotic Ultrastructure (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-1',
            stem: 'Which organelle is the site of aerobic respiration and contains a double membrane with cristae?',
            options: [
                'Rough Endoplasmic Reticulum',
                'Golgi Apparatus',
                'Mitochondrion',
                'Lysosome',
            ],
            correctAnswer: 2,
            rationale: 'Mitochondria are the site of aerobic respiration, producing ATP. They have a double membrane where the inner membrane is folded into cristae to increase surface area for respiration. RER synthesises proteins, Golgi packages proteins, and lysosomes contain hydrolytic enzymes.',
            topic: 'Eukaryotic Ultrastructure',
        },
        {
            id: 'mcq-t3-2',
            stem: 'What is the primary function of the rough endoplasmic reticulum (RER)?',
            options: [
                'Synthesising and processing lipids',
                'Modifying and folding proteins made on ribosomes',
                'Producing ATP through aerobic respiration',
                'Breaking down waste materials using enzymes',
            ],
            correctAnswer: 1,
            rationale: 'The RER is studded with ribosomes and is responsible for modifying and folding proteins made on those ribosomes. Lipid synthesis is the role of the SER, ATP production occurs in mitochondria, and waste breakdown occurs in lysosomes.',
            topic: 'Eukaryotic Ultrastructure',
        },

        // ─────────────────────────────────────────────
        // Subtopic 1 — Prokaryotic Cell Structure (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-3',
            stem: 'What is the composition of the prokaryotic cell wall?',
            options: [
                'Cellulose',
                'Chitin',
                'Peptidoglycan (murein)',
                'Phospholipid bilayer',
            ],
            correctAnswer: 2,
            rationale: 'Prokaryotic cell walls are made of peptidoglycan (murein), which prevents lysis and gives the cell its shape. Cellulose is found in plant cell walls, chitin in fungal cell walls, and phospholipid bilayers form cell membranes, not walls.',
            topic: 'Prokaryotic Cell Structure',
        },
        {
            id: 'mcq-t3-4',
            stem: 'Which feature distinguishes prokaryotic ribosomes from eukaryotic ribosomes?',
            options: [
                'Prokaryotic ribosomes are 80S, eukaryotic are 70S',
                'Prokaryotic ribosomes are 70S, eukaryotic are 80S',
                'Prokaryotic ribosomes are membrane-bound, eukaryotic are free-floating',
                'Prokaryotic ribosomes synthesise lipids, eukaryotic synthesise proteins',
            ],
            correctAnswer: 1,
            rationale: 'Prokaryotic cells have smaller 70S ribosomes while eukaryotic cells have larger 80S ribosomes. Neither type is membrane-bound, and both are sites of protein synthesis, not lipid synthesis.',
            topic: 'Prokaryotic Cell Structure',
        },

        // ─────────────────────────────────────────────
        // Subtopic 2 — Cell Fractionation (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-5',
            stem: 'Why must the solution used in cell fractionation be isotonic?',
            options: [
                'To maintain a constant pH and prevent enzyme denaturation',
                'To reduce enzyme activity and preserve organelles',
                'To prevent osmotic damage (bursting or shrinking of organelles)',
                'To increase the density of the solution for centrifugation',
            ],
            correctAnswer: 2,
            rationale: 'An isotonic solution has the same water potential as the cell contents, preventing osmosis that would cause organelles to burst (in hypotonic) or shrink (in hypertonic). Cold temperature reduces enzyme activity, and buffering maintains pH.',
            topic: 'Cell Fractionation',
        },
        {
            id: 'mcq-t3-6',
            stem: 'In differential ultracentrifugation, which organelle forms the pellet at the LOWEST speed?',
            options: [
                'Ribosomes',
                'Mitochondria',
                'Nuclei',
                'Lysosomes',
            ],
            correctAnswer: 2,
            rationale: 'Nuclei are the heaviest organelles and form the pellet at the lowest centrifugation speed. The order is: nuclei (lowest speed) → mitochondria → lysosomes/ER → ribosomes (highest speed).',
            topic: 'Cell Fractionation',
        },

        // ─────────────────────────────────────────────
        // Subtopic 3 — Microscopy (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-7',
            stem: 'What is the resolution of a typical light microscope?',
            options: [
                '0.1 nm',
                '20 nm',
                '200 nm',
                '500 nm',
            ],
            correctAnswer: 2,
            rationale: 'Light microscopes have a resolution of approximately 200 nm because light has a relatively long wavelength. Electron microscopes achieve much higher resolution (0.1 nm for TEM, 20 nm for SEM) due to the shorter wavelength of electrons.',
            topic: 'Microscopy',
        },
        {
            id: 'mcq-t3-8',
            stem: 'Which type of electron microscope produces 3D images of specimen surfaces?',
            options: [
                'Transmission Electron Microscope (TEM)',
                'Scanning Electron Microscope (SEM)',
                'Compound Light Microscope',
                'Phase Contrast Microscope',
            ],
            correctAnswer: 1,
            rationale: 'The SEM scans a beam of electrons across the specimen surface, producing 3D images showing surface detail. TEM passes electrons through thin sections to produce 2D images of internal structures. Light microscopes cannot match the resolution of electron microscopes.',
            topic: 'Microscopy',
        },

        // ─────────────────────────────────────────────
        // Subtopic 4 — Cell Cycle and Mitosis (×3)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-9',
            stem: 'During which phase of the cell cycle does DNA replication occur?',
            options: [
                'G1 phase',
                'S phase',
                'G2 phase',
                'M phase',
            ],
            correctAnswer: 1,
            rationale: 'DNA replication occurs during the S (Synthesis) phase of interphase. G1 is for cell growth, G2 prepares the cell for division, and M phase is when mitosis occurs.',
            topic: 'Cell Cycle and Mitosis',
        },
        {
            id: 'mcq-t3-10',
            stem: 'In which stage of mitosis do chromosomes line up along the equator of the cell?',
            options: [
                'Prophase',
                'Metaphase',
                'Anaphase',
                'Telophase',
            ],
            correctAnswer: 1,
            rationale: 'During metaphase, chromosomes align along the equator (equatorial plate) of the cell, with spindle fibres attached to their centromeres. Prophase involves chromosome condensation, anaphase involves chromatid separation, and telophase involves nuclear envelope reformation.',
            topic: 'Cell Cycle and Mitosis',
        },
        {
            id: 'mcq-t3-11',
            stem: 'What happens to the centromeres during anaphase of mitosis?',
            options: [
                'They replicate to form new centromeres',
                'They divide, allowing sister chromatids to separate',
                'They attach to the nuclear envelope',
                'They disappear as chromosomes decondense',
            ],
            correctAnswer: 1,
            rationale: 'During anaphase, centromeres divide, allowing spindle fibres to pull sister chromatids apart to opposite poles. Centromere division is essential for equal chromosome distribution to daughter cells.',
            topic: 'Cell Cycle and Mitosis',
        },

        // ─────────────────────────────────────────────
        // Subtopic 5 — Meiosis (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-12',
            stem: 'What is the end product of meiosis in animals?',
            options: [
                'Two genetically identical diploid cells',
                'Four genetically identical diploid cells',
                'Two genetically different haploid cells',
                'Four genetically different haploid gametes',
            ],
            correctAnswer: 3,
            rationale: 'Meiosis produces four genetically different haploid gametes from one diploid parent cell. This differs from mitosis, which produces two genetically identical diploid cells.',
            topic: 'Meiosis',
        },
        {
            id: 'mcq-t3-13',
            stem: 'During which stage of meiosis does crossing over occur?',
            options: [
                'Prophase II',
                'Metaphase I',
                'Prophase I',
                'Anaphase I',
            ],
            correctAnswer: 2,
            rationale: 'Crossing over occurs during Prophase I when homologous chromosomes pair up to form bivalents and exchange alleles at chiasmata. This creates new combinations of alleles and contributes to genetic variation.',
            topic: 'Meiosis',
        },

        // ─────────────────────────────────────────────
        // Subtopic 6 — Fertilisation (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-14',
            stem: 'What is the function of the acrosome reaction during fertilisation?',
            options: [
                'To prevent polyspermy by hardening the zona pellucida',
                'To release enzymes that digest a pathway through the zona pellucida',
                'To fuse the sperm nucleus with the egg nucleus',
                'To trigger the cortical reaction',
            ],
            correctAnswer: 1,
            rationale: 'The acrosome reaction involves the release of digestive enzymes from the acrosome (a lysosome in the sperm head) to digest a pathway through the zona pellucida, allowing the sperm to reach the egg membrane.',
            topic: 'Fertilisation',
        },
        {
            id: 'mcq-t3-15',
            stem: 'What is the purpose of the cortical reaction after sperm entry?',
            options: [
                'To attract more sperm to the egg',
                'To digest the zona pellucida completely',
                'To harden the zona pellucida and prevent polyspermy',
                'To initiate DNA replication in the zygote',
            ],
            correctAnswer: 2,
            rationale: 'The cortical reaction releases enzymes from cortical granules into the zona pellucida, causing it to harden. This prevents polyspermy (entry of additional sperm), ensuring only one sperm fertilises the egg.',
            topic: 'Fertilisation',
        },

        // ─────────────────────────────────────────────
        // Subtopic 7 — Stem Cells (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-16',
            stem: 'Which type of stem cell can differentiate into ANY cell type, including extra-embryonic tissues like the placenta?',
            options: [
                'Pluripotent',
                'Multipotent',
                'Totipotent',
                'Unipotent',
            ],
            correctAnswer: 2,
            rationale: 'Totipotent stem cells can differentiate into any cell type including extra-embryonic tissues (placenta). Pluripotent cells form almost any body cell but not extra-embryonic tissues. Multipotent cells form limited cell types, and unipotent cells form only one type.',
            topic: 'Stem Cells',
        },
        {
            id: 'mcq-t3-17',
            stem: 'Where are pluripotent stem cells found in mammals?',
            options: [
                'Adult bone marrow',
                'The inner cell mass of the blastocyst',
                'Skin epidermis',
                'Liver tissue',
            ],
            correctAnswer: 1,
            rationale: 'Pluripotent stem cells are found in the inner cell mass of the blastocyst (early embryo). Adult bone marrow contains multipotent haematopoietic stem cells, and adult tissues like skin contain unipotent stem cells.',
            topic: 'Stem Cells',
        },

        // ─────────────────────────────────────────────
        // Subtopic 8 — Gene Expression Regulation (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-18',
            stem: 'What is the role of an activator transcription factor?',
            options: [
                'To prevent RNA polymerase from binding to the promoter',
                'To stimulate transcription by helping RNA polymerase bind to the promoter',
                'To degrade mRNA after transcription',
                'To methylate DNA and silence genes',
            ],
            correctAnswer: 1,
            rationale: 'Activator transcription factors bind to promoter regions and stimulate transcription by helping RNA polymerase bind. Repressors prevent RNA polymerase binding. Methylation is an epigenetic mechanism, not a transcription factor function.',
            topic: 'Gene Expression Regulation',
        },
        {
            id: 'mcq-t3-19',
            stem: 'In the lac operon, what happens when lactose is present?',
            options: [
                'The repressor binds more tightly to the operator',
                'Lactose binds to the repressor, causing it to detach from the operator',
                'RNA polymerase is blocked from transcribing the lactase gene',
                'The operon is permanently switched off',
            ],
            correctAnswer: 1,
            rationale: 'When lactose is present, it binds to the repressor protein, changing its shape so it detaches from the operator region. This allows RNA polymerase to transcribe the lactase gene, enabling lactose metabolism.',
            topic: 'Gene Expression Regulation',
        },

        // ─────────────────────────────────────────────
        // Subtopic 9 — Epigenetics (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-20',
            stem: 'What effect does increased DNA methylation have on gene expression?',
            options: [
                'It increases gene transcription',
                'It has no effect on gene expression',
                'It switches the gene off (represses transcription)',
                'It causes mutations in the DNA sequence',
            ],
            correctAnswer: 2,
            rationale: 'Increased DNA methylation adds methyl groups to DNA (usually at CpG sites), preventing transcription factors and RNA polymerase from binding. This switches the gene off without changing the DNA base sequence itself.',
            topic: 'Epigenetics',
        },
        {
            id: 'mcq-t3-21',
            stem: 'How does increased histone acetylation affect chromatin structure?',
            options: [
                'It causes chromatin to become tightly packed, switching genes off',
                'It causes chromatin to become less tightly packed, making genes more accessible',
                'It has no effect on chromatin structure',
                'It causes DNA to be degraded',
            ],
            correctAnswer: 1,
            rationale: 'Increased histone acetylation adds acetyl groups to histone tails, causing chromatin to become less tightly packed (more open). This makes it easier for transcription factors and RNA polymerase to bind, increasing gene expression.',
            topic: 'Epigenetics',
        },

        // ─────────────────────────────────────────────
        // Subtopic 10 — Differentiation and Development (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-22',
            stem: 'Do differentiated cells in a multicellular organism have different genomes?',
            options: [
                'Yes, each cell type loses genes it does not need',
                'Yes, different cells have completely different DNA sequences',
                'No, all cells contain the same genome but express different genes',
                'No, only stem cells have a complete genome',
            ],
            correctAnswer: 2,
            rationale: 'All cells in a multicellular organism derived from a single zygote contain the exact same genome. Differentiation occurs because different genes are switched on or off in different cell types, not because the genome differs.',
            topic: 'Differentiation and Development',
        },
        {
            id: 'mcq-t3-23',
            stem: 'What is the correct hierarchy of cellular organisation in multicellular organisms?',
            options: [
                'Organ → Tissue → Cell → Organ System',
                'Cell → Tissue → Organ → Organ System',
                'Tissue → Cell → Organ → Organ System',
                'Cell → Organ → Tissue → Organ System',
            ],
            correctAnswer: 1,
            rationale: 'The correct hierarchy is: Cells → Tissues (groups of similar cells) → Organs (groups of tissues) → Organ Systems (groups of organs working together).',
            topic: 'Differentiation and Development',
        },

        // ─────────────────────────────────────────────
        // Subtopic 11 — Cloning (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-24',
            stem: 'In plant tissue culture, what is a callus?',
            options: [
                'A single differentiated cell used to start the culture',
                'A mass of undifferentiated cells formed by mitosis from an explant',
                'A hormone used to stimulate root growth',
                'A type of agar medium for growing plants',
            ],
            correctAnswer: 1,
            rationale: 'A callus is a mass of undifferentiated cells that forms when totipotent stem cells (explants) divide by mitosis on an agar medium. The callus can then be subdivided and treated with hormones to grow into complete plants.',
            topic: 'Cloning',
        },
        {
            id: 'mcq-t3-25',
            stem: 'What does SCNT stand for in mammalian cloning?',
            options: [
                'Somatic Cell Nuclear Transfer',
                'Stem Cell Nuclear Transcription',
                'Somatic Chromosome Nuclear Translation',
                'Single Cell Nuclear Transplant',
            ],
            correctAnswer: 0,
            rationale: 'SCNT stands for Somatic Cell Nuclear Transfer. This technique involves inserting a diploid nucleus from a somatic (body) cell into an enucleated egg cell, then applying an electric shock to stimulate division and create a clone.',
            topic: 'Cloning',
        },

        // ─────────────────────────────────────────────
        // Subtopic 12 — Core Practical 5: Animal Cell Microscopy (×2)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-26',
            stem: 'Why should a coverslip be lowered at an angle when preparing a microscope slide?',
            options: [
                'To create a thinner sample layer',
                'To prevent trapping air bubbles that would obscure the view',
                'To increase the magnification of the specimen',
                'To ensure the stain spreads evenly',
            ],
            correctAnswer: 1,
            rationale: 'Lowering the coverslip at an angle using a mounted needle pushes air to the side, preventing air bubbles. Air bubbles appear as large thick-ringed structures that obscure the specimen and ruin the image.',
            topic: 'Core Practical 5: Microscopy',
        },
        {
            id: 'mcq-t3-27',
            stem: 'Which stain is used for animal cells to make nuclei visible?',
            options: [
                'Iodine',
                'Methylene blue',
                'Toluidine blue',
                'Orcein',
            ],
            correctAnswer: 1,
            rationale: 'Methylene blue is used for animal cells and stains nuclei dark blue. Iodine is used for plant cells (stains starch), while Toluidine blue and Orcein are DNA-binding stains used in root tip squashes to visualise chromosomes.',
            topic: 'Core Practical 5: Microscopy',
        },

        // ─────────────────────────────────────────────
        // Subtopic 13 — Core Practical 6: Root Tip Mitosis (×3)
        // ─────────────────────────────────────────────
        {
            id: 'mcq-t3-28',
            stem: 'What is the purpose of using hydrochloric acid in the root tip squash practical?',
            options: [
                'To stain the chromosomes and make them visible',
                'To kill the cells and stop all metabolic activity',
                'To break down the middle lamella and separate the cells',
                'To increase the rate of mitosis in the meristem',
            ],
            correctAnswer: 2,
            rationale: 'Hydrochloric acid (HCl) at 60°C breaks down the middle lamella (pectin layer between cells), fully macerating and separating the cells. This creates a single layer of cells suitable for microscopy. Stains like Toluidine blue make chromosomes visible.',
            topic: 'Core Practical 6: Root Tip Mitosis',
        },
        {
            id: 'mcq-t3-29',
            stem: 'What does a high mitotic index indicate about a tissue?',
            options: [
                'The tissue is dying and being replaced',
                'The tissue has stopped growing',
                'The tissue is undergoing rapid growth or could be cancerous',
                'The tissue contains only differentiated cells',
            ],
            correctAnswer: 2,
            rationale: 'Mitotic Index = (Cells in mitosis / Total cells). A high mitotic index indicates rapid cell division, which occurs in growing tissues or in cancerous tumours where cell division is uncontrolled.',
            topic: 'Core Practical 6: Root Tip Mitosis',
        },
        {
            id: 'mcq-t3-30',
            stem: 'Why must you push down VERTICALLY (not sideways) when creating a root tip squash?',
            options: [
                'To increase the magnification of the cells',
                'To avoid rolling and breaking the chromosomes',
                'To make the cells divide faster',
                'To remove excess stain from the slide',
            ],
            correctAnswer: 1,
            rationale: 'Pushing down vertically with your thumb (wrapped in paper towel) spreads the cells into a single layer without rolling them sideways. Smearing sideways would roll and break the chromosomes, making them impossible to identify.',
            topic: 'Core Practical 6: Root Tip Mitosis',
        },
    ],

    // Placeholder arrays for other exercise types (not yet created)
    sequence: [],
    keyword: [],

    // ─────────────────────────────────────────────
    // FLASHCARDS — 28 cards covering subtopics 0-13
    // ─────────────────────────────────────────────
    flashcards: [
        // Subtopic 0: Eukaryotic ultrastructure (2 cards)
        {
            id: 'fc-t3-1',
            front: 'What is the function of the nucleolus?',
            back: 'The nucleolus is a dense region within the nucleus where ribosomes are synthesised. It assembles ribosomal RNA (rRNA) with proteins to form ribosomal subunits, which then exit the nucleus through nuclear pores.',
            topic: 'Eukaryotic ultrastructure',
        },
        {
            id: 'fc-t3-2',
            front: 'Compare the structure and function of rough ER (RER) and smooth ER (SER).',
            back: 'RER: Studded with ribosomes; modifies and folds proteins synthesised on the attached ribosomes.\nSER: No ribosomes; synthesises and processes lipids and carbohydrates.\nBoth are systems of membranes forming flattened sacs called cisternae.',
            topic: 'Eukaryotic ultrastructure',
        },

        // Subtopic 1: Prokaryotic cell structure (2 cards)
        {
            id: 'fc-t3-3',
            front: 'Compare 70S and 80S ribosomes.',
            back: '70S ribosomes: Found in prokaryotes (bacteria) and mitochondria/chloroplasts; smaller and less dense.\n80S ribosomes: Found in eukaryotic cytoplasm; larger and more dense.\nThe "S" refers to Svedberg units (sedimentation rate during centrifugation).',
            topic: 'Prokaryotic cell structure',
        },
        {
            id: 'fc-t3-4',
            front: 'What is the prokaryotic cell wall made of, and what is its function?',
            back: 'The prokaryotic cell wall is made of peptidoglycan (also called murein) — a polymer of sugars and amino acids.\nFunction: Prevents osmotic lysis (bursting) and gives the cell its shape.',
            topic: 'Prokaryotic cell structure',
        },

        // Subtopic 2: Cell fractionation (2 cards)
        {
            id: 'fc-t3-5',
            front: 'Why must homogenisation solution be cold, isotonic, and buffered?',
            back: '• Cold: Reduces enzyme activity to prevent digestion of organelles.\n• Isotonic: Prevents osmotic damage (cells bursting or shrinking) by matching water potential.\n• Buffered: Maintains constant pH so proteins and enzymes do not denature.',
            topic: 'Cell fractionation',
        },
        {
            id: 'fc-t3-6',
            front: 'During ultracentrifugation, in what order do organelles form pellets?',
            back: 'From lowest to highest speed:\n1. Nuclei (heaviest, lowest speed)\n2. Mitochondria and chloroplasts (medium speed)\n3. Lysosomes and endoplasmic reticulum (higher speed)\n4. Ribosomes (lightest, highest speed)',
            topic: 'Cell fractionation',
        },

        // Subtopic 3: Microscopy (2 cards)
        {
            id: 'fc-t3-7',
            front: 'Define resolution vs magnification.',
            back: 'Magnification: How many times larger the image is compared to the actual object (Image Size / Actual Size).\nResolution: The ability to distinguish between two separate points that are very close together — the minimum distance at which two points can still be seen as distinct.',
            topic: 'Microscopy',
        },
        {
            id: 'fc-t3-8',
            front: 'Compare light microscopes, TEM, and SEM in terms of resolution and image type.',
            back: 'Light microscope: Resolution ~200nm; 2D colour images; can view living specimens.\nTEM (Transmission Electron Microscope): Resolution ~0.1nm; 2D black-and-white images of internal structures; specimen must be dead (vacuum).\nSEM (Scanning Electron Microscope): Resolution ~20nm; 3D images showing surface detail; specimen must be dead (vacuum).',
            topic: 'Microscopy',
        },

        // Subtopic 4: Cell cycle and mitosis (3 cards)
        {
            id: 'fc-t3-9',
            front: 'List the stages of mitosis in order (PMAT) and describe each briefly.',
            back: '1. Prophase: Chromosomes condense and become visible; nuclear envelope breaks down; spindle fibres form.\n2. Metaphase: Chromosomes line up at the equator; spindle fibres attach to centromeres.\n3. Anaphase: Centromeres divide; sister chromatids are pulled to opposite poles.\n4. Telophase: Chromosomes uncoil; nuclear envelopes reform around each set.',
            topic: 'Cell cycle and mitosis',
        },
        {
            id: 'fc-t3-10',
            front: 'What happens during interphase? Name the three sub-phases.',
            back: 'Interphase is the longest phase of the cell cycle. It consists of:\n• G1 (Gap 1): Cell grows and organelles replicate.\n• S (Synthesis): DNA replicates; each chromosome becomes two sister chromatids.\n• G2 (Gap 2): Cell continues growing and prepares for mitosis.',
            topic: 'Cell cycle and mitosis',
        },
        {
            id: 'fc-t3-11',
            front: 'Why is mitosis important for multicellular organisms?',
            back: 'Mitosis produces genetically identical diploid cells. It is essential for:\n• Growth: Increasing cell number during development.\n• Repair: Replacing damaged or dead cells.\n• Asexual reproduction: Producing clones in some organisms.',
            topic: 'Cell cycle and mitosis',
        },

        // Subtopic 5: Meiosis (2 cards)
        {
            id: 'fc-t3-12',
            front: 'What is crossing over and when does it occur?',
            back: 'Crossing over occurs during Prophase I of meiosis. Homologous chromosomes pair up to form bivalents. Chromatids twist at chiasmata, and equal lengths of non-sister chromatids break and rejoin, exchanging alleles. This creates new combinations of alleles (genetic variation).',
            topic: 'Meiosis',
        },
        {
            id: 'fc-t3-13',
            front: 'What is independent assortment and how does it increase genetic variation?',
            back: 'Independent assortment occurs during Metaphase I of meiosis. Homologous chromosome pairs line up randomly at the equator — the maternal/paternal chromosome of each pair can face either pole. This random alignment means gametes receive random combinations of maternal/paternal chromosomes, producing 2^n possible combinations (where n = haploid number).',
            topic: 'Meiosis',
        },

        // Subtopic 6: Fertilisation (2 cards)
        {
            id: 'fc-t3-14',
            front: 'What is the acrosome reaction?',
            back: 'When a sperm reaches the egg, it binds to receptors on the zona pellucida. The acrosome (a large lysosome in the sperm head) swells and fuses with the sperm membrane, releasing digestive enzymes by exocytosis. These enzymes digest a pathway through the zona pellucida, allowing the sperm to reach the egg membrane.',
            topic: 'Fertilisation',
        },
        {
            id: 'fc-t3-15',
            front: 'How does the cortical reaction prevent polyspermy?',
            back: 'Once the sperm nucleus enters the egg, cortical granules within the egg move to and fuse with the egg membrane. They release enzymes into the zona pellucida by exocytosis, causing it to harden. This hardened zona pellucida acts as a barrier, preventing additional sperm from entering (polyspermy).',
            topic: 'Fertilisation',
        },

        // Subtopic 7: Stem cells (2 cards)
        {
            id: 'fc-t3-16',
            front: 'Distinguish totipotent, pluripotent, multipotent, and unipotent stem cells.',
            back: '• Totipotent: Can differentiate into ANY cell type including extra-embryonic tissues (placenta). Found in early embryos (first few divisions).\n• Pluripotent: Can form almost any body cell, but not extra-embryonic tissues. Found in inner cell mass of blastocyst.\n• Multipotent: Can differentiate into a limited range of related cell types (e.g., blood cells from haematopoietic stem cells). Found in adult tissues.\n• Unipotent: Can only form one cell type (e.g., skin stem cells).',
            topic: 'Stem cells',
        },
        {
            id: 'fc-t3-17',
            front: 'What are the medical uses and ethical concerns of embryonic stem cells?',
            back: 'Uses: Treating leukaemia (bone marrow transplants), Parkinson\'s disease, Type 1 Diabetes (replacing beta cells), growing replacement organs.\nEthical concerns: Extracting pluripotent stem cells from a blastocyst destroys the embryo, raising questions about when life begins and whether embryos have rights.',
            topic: 'Stem cells',
        },

        // Subtopic 8: Gene expression regulation (2 cards)
        {
            id: 'fc-t3-18',
            front: 'How do transcription factors work?',
            back: 'Transcription factors are proteins that bind to specific DNA sequences (promoter regions) near target genes.\n• Activators: Stimulate transcription by helping RNA polymerase bind to the promoter.\n• Repressors: Inhibit transcription by blocking RNA polymerase binding.',
            topic: 'Gene expression regulation',
        },
        {
            id: 'fc-t3-19',
            front: 'Explain how the lac operon is regulated in E. coli.',
            back: 'When lactose is ABSENT: A repressor protein binds to the operator region, blocking RNA polymerase and preventing transcription of the lactase gene.\nWhen lactose is PRESENT: Lactose binds to the repressor, changing its shape so it detaches from the operator. RNA polymerase can then transcribe the lactase gene. This is an example of inducible gene expression.',
            topic: 'Gene expression regulation',
        },

        // Subtopic 9: Epigenetics (2 cards)
        {
            id: 'fc-t3-20',
            front: 'What effect does DNA methylation have on gene expression?',
            back: 'Increased DNA methylation involves adding methyl groups (-CH3) to DNA, usually at CpG sites. This changes the DNA structure so that transcription factors and RNA polymerase cannot bind to the promoter region. Therefore, the gene is SWITCHED OFF (silenced/repressed).',
            topic: 'Epigenetics',
        },
        {
            id: 'fc-t3-21',
            front: 'How does histone acetylation affect gene expression?',
            back: 'Increased acetylation: Acetyl groups added to histone tails cause chromatin to become less tightly packed (euchromatin). This makes it easier for transcription factors and RNA polymerase to bind — gene is SWITCHED ON.\nDecreased acetylation: Chromatin packs tightly (heterochromatin), preventing access — gene is SWITCHED OFF.',
            topic: 'Epigenetics',
        },

        // Subtopic 10: Differentiation and development (2 cards)
        {
            id: 'fc-t3-22',
            front: 'Do differentiated cells have the same genome? How do they become specialised?',
            back: 'Yes — all cells in a multicellular organism contain the same DNA (same genome). Differentiation occurs because specific genes are switched "on" or "off" by transcription factors. Only genes needed for that cell\'s function are expressed, producing specific proteins that determine the cell\'s structure and function.',
            topic: 'Differentiation and development',
        },
        {
            id: 'fc-t3-23',
            front: 'Describe the hierarchy of cellular organisation in multicellular organisms.',
            back: 'Specialised cells → Tissues (groups of similar cells performing one function, e.g., muscular tissue) → Organs (structures composed of multiple tissues, e.g., heart) → Organ Systems (organs working together, e.g., circulatory system).',
            topic: 'Differentiation and development',
        },

        // Subtopic 11: Cloning (2 cards)
        {
            id: 'fc-t3-24',
            front: 'What is SCNT (Somatic Cell Nuclear Transfer)? List the key steps.',
            back: 'SCNT is the technique used to clone Dolly the sheep.\nSteps:\n1. Remove the diploid nucleus from a somatic (body) cell of the animal to be cloned.\n2. Enucleate an egg cell (remove its haploid nucleus).\n3. Insert the somatic nucleus into the enucleated egg.\n4. Apply an electric shock to fuse them and stimulate cell division.\n5. Implant the embryo into a surrogate mother to develop.',
            topic: 'Cloning',
        },
        {
            id: 'fc-t3-25',
            front: 'What is a callus in plant tissue culture, and how are clones produced from it?',
            back: 'A callus is a mass of undifferentiated totipotent cells formed when plant explants divide by mitosis on agar medium containing nutrients and plant hormones (auxin/cytokinin). The callus is subdivided and treated with different hormone ratios to stimulate root/shoot development, eventually growing into complete plantlets that are clones of the original plant.',
            topic: 'Cloning',
        },

        // Subtopic 12: Core Practical 5 - Animal cell microscopy (1 card)
        {
            id: 'fc-t3-26',
            front: 'Why are different stains used for plant and animal cells in light microscopy?',
            back: 'Stains add contrast to make cell structures visible.\n• Iodine: Used for plant cells — stains starch in cell walls yellow/brown.\n• Methylene blue: Used for animal cells — stains nuclei dark blue.\nWithout stain, cells are too transparent to see clearly under a light microscope.',
            topic: 'Core Practical 5: Animal cell microscopy',
        },

        // Subtopic 13: Core Practical 6 - Root tip mitosis (2 cards)
        {
            id: 'fc-t3-27',
            front: 'What is the mitotic index formula and what does it indicate?',
            back: 'Mitotic Index = (Number of cells with visible chromosomes) / (Total number of cells observed)\nA high mitotic index indicates rapid tissue growth. An abnormally high mitotic index may indicate a cancerous tumour (uncontrolled cell division).',
            topic: 'Core Practical 6: Root tip mitosis',
        },
        {
            id: 'fc-t3-28',
            front: 'In the root tip squash practical, what is the purpose of hydrochloric acid and why must you press vertically?',
            back: 'Hydrochloric acid (HCl) at 60C: Breaks down the middle lamella, separating (macerating) the cells so they spread out in a single layer.\nPressing vertically (not sideways): Spreads cells without rolling or breaking the chromosomes. Smearing sideways would damage chromosome structure and make them harder to identify.',
            topic: 'Core Practical 6: Root tip mitosis',
        },
    ],
};
