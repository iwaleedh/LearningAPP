export const exercises_chemistry_2_10 = {

    // ─────────────────────────────────────────────────────────────────────────
    // MCQ  (~30 questions, covering all 11 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    mcq: [

        // Subtopic 0 – General Principles: Reaction types and intermediate species
        {
            id: 'mcq-t10-1',
            stem: 'Which type of organic reaction involves two molecules joining to form a single product by breaking a C=C double bond?',
            options: [
                'Elimination',
                'Substitution',
                'Addition',
                'Hydrolysis',
            ],
            correctAnswer: 2,
            rationale: 'Addition reactions involve two molecules combining to form one product, always involving the breaking of a π (double) bond. Elimination is the reverse — it forms a double bond.',
            topic: 'General Principles: Reaction types and intermediate species',
        },
        {
            id: 'mcq-t10-2',
            stem: 'A nucleophile is best described as:',
            options: [
                'An electron pair acceptor that attacks areas of high electron density',
                'A species with an unpaired electron formed by homolytic fission',
                'An electron pair donor that attacks areas of positive charge (δ+)',
                'A species that gains oxygen or loses hydrogen during a reaction',
            ],
            correctAnswer: 2,
            rationale: 'Nucleophiles are electron pair DONORS. They attack electron-deficient (δ+) centres. Electron pair acceptors are electrophiles; species with unpaired electrons are free radicals.',
            topic: 'General Principles: Reaction types and intermediate species',
        },
        {
            id: 'mcq-t10-3',
            stem: 'Homolytic fission of a covalent bond produces:',
            options: [
                'Two ions with opposite charges',
                'Two free radicals, each carrying one electron from the broken bond',
                'A nucleophile and an electrophile',
                'One positive ion and one free radical',
            ],
            correctAnswer: 1,
            rationale: 'Homolytic fission splits the bonding electrons evenly — one electron goes to each atom, forming two neutral free radicals (shown by fish-hook curly arrows). Heterolytic fission gives ions.',
            topic: 'General Principles: Reaction types and intermediate species',
        },
        {
            id: 'mcq-t10-4',
            stem: 'Which reaction type involves splitting a molecule using water?',
            options: [
                'Oxidation',
                'Elimination',
                'Polymerisation',
                'Hydrolysis',
            ],
            correctAnswer: 3,
            rationale: 'Hydrolysis literally means "splitting with water". The water (or OH⁻) is a reactant. Elimination removes a small molecule to form a double bond; oxidation involves gaining oxygen/losing hydrogen.',
            topic: 'General Principles: Reaction types and intermediate species',
        },

        // Subtopic 1 – Halogenoalkanes Intro and Hydrolysis
        {
            id: 'mcq-t10-5',
            stem: '2-bromo-2-methylpropane is best classified as:',
            options: [
                'Primary halogenoalkane',
                'Secondary halogenoalkane',
                'Tertiary halogenoalkane',
                'Quaternary halogenoalkane',
            ],
            correctAnswer: 2,
            rationale: 'In 2-bromo-2-methylpropane, the C–Br carbon is bonded to THREE other carbon atoms (three methyl groups), making it tertiary. Primary has one alkyl group, secondary has two.',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },
        {
            id: 'mcq-t10-6',
            stem: 'Which of the following correctly explains why iodoalkanes react faster with nucleophiles than chloroalkanes?',
            options: [
                'The C–I bond is more polar than the C–Cl bond',
                'The C–I bond has a lower bond enthalpy and is therefore weaker and easier to break',
                'Iodine has a higher electronegativity than chlorine',
                'The C–I bond is shorter and breaks more easily',
            ],
            correctAnswer: 1,
            rationale: 'Reactivity is determined by bond enthalpy, NOT polarity. The C–I bond is the weakest (lowest bond enthalpy) and requires the least energy to break, so iodoalkanes react fastest. C–Cl is the strongest. Iodine is actually LESS electronegative than chlorine.',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },
        {
            id: 'mcq-t10-7',
            stem: 'What are the reagent and conditions required to hydrolyse a halogenoalkane to form an alcohol?',
            options: [
                'Conc. H₂SO₄, heat under reflux',
                'Aqueous KOH (KOH(aq)), heat under reflux',
                'Ethanolic KOH (KOH in ethanol), heat under reflux',
                'Aqueous HCl, room temperature',
            ],
            correctAnswer: 1,
            rationale: 'Hydrolysis uses aqueous KOH or NaOH (the aqueous solvent provides the OH⁻ nucleophile and water). Heating under reflux provides energy without losing volatile reactants. Ethanolic KOH causes elimination (forming an alkene), not hydrolysis.',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },
        {
            id: 'mcq-t10-8',
            stem: 'Why are halogenoalkanes insoluble in water despite having polar C–X bonds?',
            options: [
                'The C–X bonds are too weak to interact with water',
                'The energy required to break hydrogen bonds between water molecules is greater than the energy released forming new interactions with the halogenoalkane',
                'The halogen atoms repel water molecules',
                'Halogenoalkanes form only non-polar interactions with water',
            ],
            correctAnswer: 1,
            rationale: 'Water molecules are held strongly together by hydrogen bonds. Breaking these requires significant energy. The relatively weak interactions that could form between the polar halogenoalkane and water do not release enough energy to compensate, so the halogenoalkane remains insoluble.',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },

        // Subtopic 2 – Comparing rates of hydrolysis
        {
            id: 'mcq-t10-9',
            stem: 'In the silver nitrate experiment (CP5) to compare hydrolysis rates, why is ethanol used as the solvent?',
            options: [
                'Ethanol speeds up the hydrolysis reaction directly',
                'Ethanol dissolves both the halogenoalkane and aqueous AgNO₃ to form a homogeneous mixture',
                'Ethanol prevents the silver halide precipitate from dissolving',
                'Ethanol provides OH⁻ ions to carry out the hydrolysis',
            ],
            correctAnswer: 1,
            rationale: 'Halogenoalkanes are insoluble in water, so without ethanol the mixture would separate into two layers with minimal contact. Ethanol dissolves both the organic halogenoalkane and the aqueous AgNO₃, allowing the reaction to proceed in a single homogeneous layer.',
            topic: 'Comparing rates of hydrolysis',
        },
        {
            id: 'mcq-t10-10',
            stem: 'In the silver nitrate experiment, which observation indicates that hydrolysis of a halogenoalkane has occurred?',
            options: [
                'The solution changes from orange to green',
                'Bubbles of gas are produced',
                'A silver halide precipitate forms',
                'The mixture turns cloudy blue',
            ],
            correctAnswer: 2,
            rationale: 'As the C–X bond breaks, the halide ion (X⁻) is released into solution and immediately reacts with Ag⁺ from AgNO₃ to form an insoluble AgX precipitate. AgCl = white, AgBr = cream, AgI = yellow.',
            topic: 'Comparing rates of hydrolysis',
        },
        {
            id: 'mcq-t10-11',
            stem: 'Which of the following correctly ranks halogenoalkanes from fastest to slowest rate of hydrolysis?',
            options: [
                'Fluoroalkane > chloroalkane > bromoalkane > iodoalkane',
                'Iodoalkane > bromoalkane > chloroalkane > fluoroalkane',
                'Chloroalkane > bromoalkane > iodoalkane > fluoroalkane',
                'Bromoalkane > iodoalkane > chloroalkane > fluoroalkane',
            ],
            correctAnswer: 1,
            rationale: 'Rate of hydrolysis is determined by bond enthalpy. The C–I bond is weakest (easiest to break) so iodoalkanes react fastest. The C–F bond is strongest so fluoroalkanes react slowest. Bond polarity is irrelevant here.',
            topic: 'Comparing rates of hydrolysis',
        },

        // Subtopic 3 – Halogenoalkane Reactions and Mechanisms (SN1 & SN2)
        {
            id: 'mcq-t10-12',
            stem: 'What product forms when a halogenoalkane is heated under reflux with KCN in ethanol?',
            options: [
                'Alcohol, via nucleophilic substitution',
                'Alkene, via elimination',
                'Nitrile, via nucleophilic substitution',
                'Primary amine, via nucleophilic substitution',
            ],
            correctAnswer: 2,
            rationale: 'KCN in ethanol provides CN⁻ as the nucleophile. CN⁻ displaces the halide in nucleophilic substitution to give a nitrile. This also increases the carbon chain length by one. KOH(aq) gives an alcohol; ethanolic KOH gives an alkene; NH₃ in ethanol gives an amine.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'mcq-t10-13',
            stem: 'When 2-bromopropane is treated with ethanolic KOH (concentrated, heated under reflux), the MAIN product is:',
            options: [
                'Propan-2-ol, via SN2',
                'Propan-1-ol, via SN1',
                'Propene, via elimination',
                'Propylamine, via nucleophilic substitution',
            ],
            correctAnswer: 2,
            rationale: 'Ethanolic conditions (non-aqueous) with concentrated base and heat favour elimination. OH⁻ acts as a base, removing H⁺ from an adjacent carbon to give propene + H₂O + Br⁻. Aqueous conditions with dilute base would favour substitution to give the alcohol.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'mcq-t10-14',
            stem: 'Elimination of 2-bromobutane with ethanolic KOH can produce a maximum of how many different alkene products (including stereoisomers)?',
            options: [
                '1',
                '2',
                '3',
                '4',
            ],
            correctAnswer: 2,
            rationale: '2-Bromobutane has two different β-carbons: removal of H from C1 gives but-1-ene, and removal of H from C3 gives but-2-ene. But-2-ene shows E/Z isomerism, giving (E)-but-2-ene and (Z)-but-2-ene. Total = 3 alkene products.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'mcq-t10-15',
            stem: 'The rate equation for SN2 hydrolysis of 1-bromopropane with OH⁻ is rate = k[CH₃CH₂CH₂Br][OH⁻]. This is consistent with:',
            options: [
                'A two-step mechanism with an initial slow ionisation step',
                'A one-step (concerted) mechanism with back-attack by OH⁻',
                'A mechanism with a stable carbocation intermediate',
                'First-order kinetics with respect to the halogenoalkane only',
            ],
            correctAnswer: 1,
            rationale: 'SN2 is second order overall (first order in each reactant). It occurs in one concerted step where OH⁻ attacks from the back while the halide departs simultaneously — no carbocation intermediate. SN1 involves slow ionisation (first-order, carbocation intermediate).',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },

        // Subtopic 4 – Alcohols: Classification and reactions
        {
            id: 'mcq-t10-16',
            stem: 'Which reagent converts an alcohol to a chloroalkane and produces steamy fumes of HCl as a by-product?',
            options: [
                'KBr + conc. H₂SO₄',
                'PCl₅ (solid)',
                'Red phosphorus + Cl₂',
                'HCl(aq)',
            ],
            correctAnswer: 1,
            rationale: 'PCl₅ reacts vigorously with alcohols at room temperature: ROH + PCl₅ → RCl + POCl₃ + HCl. The HCl appears as steamy white fumes. This reaction is also used as a test for the –OH group.',
            topic: 'Alcohols: Classification and reactions',
        },
        {
            id: 'mcq-t10-17',
            stem: 'Ethanol reacts with metallic sodium to produce a gas. What is this gas and what is the other product?',
            options: [
                'Hydrogen gas and sodium ethoxide',
                'Oxygen gas and sodium carbonate',
                'Carbon dioxide and sodium hydroxide',
                'Hydrogen gas and sodium hydroxide',
            ],
            correctAnswer: 0,
            rationale: '2C₂H₅OH + 2Na → 2C₂H₅O⁻Na⁺ + H₂. The O–H bond is cleaved, releasing hydrogen gas (H₂) and leaving a sodium alkoxide (sodium ethoxide). This is similar to sodium + water but less vigorous.',
            topic: 'Alcohols: Classification and reactions',
        },
        {
            id: 'mcq-t10-18',
            stem: 'Under what conditions does ethanol undergo dehydration (elimination) to produce ethene?',
            options: [
                'Concentrated NaOH in ethanol, heat under reflux',
                'Excess concentrated H₂SO₄ or H₃PO₄ catalyst, heated to ~170°C',
                'Dilute H₂SO₄, room temperature',
                'PCl₅, room temperature',
            ],
            correctAnswer: 1,
            rationale: 'Acid-catalysed dehydration requires heating an alcohol with excess conc. H₂SO₄ (at ~170°C) or conc. H₃PO₄. The acid is a catalyst and is regenerated. The water molecule is removed as an elimination reaction, forming ethene.',
            topic: 'Alcohols: Classification and reactions',
        },
        {
            id: 'mcq-t10-19',
            stem: 'When propene reacts with steam (hydration) using a H₃PO₄ catalyst, the major product is:',
            options: [
                'Propan-1-ol',
                'Propan-2-ol',
                'Propan-1,2-diol',
                'Propanal',
            ],
            correctAnswer: 1,
            rationale: "Markovnikov's rule states that in addition across an unsymmetrical alkene, H adds to the carbon with more hydrogen atoms. In propene (CH₃CH=CH₂), the H atom adds to C3 (CH₂), giving propan-2-ol as the major product, not propan-1-ol.",
            topic: 'Alcohols: Classification and reactions',
        },

        // Subtopic 5 – Oxidation of alcohols
        {
            id: 'mcq-t10-20',
            stem: 'What is the colour change when acidified potassium dichromate(VI) successfully oxidises an alcohol?',
            options: [
                'Blue to colourless',
                'Purple to colourless',
                'Orange to green',
                'Yellow to red',
            ],
            correctAnswer: 2,
            rationale: 'Acidified K₂Cr₂O₇ contains the orange Cr₂O₇²⁻ ion. When it oxidises an alcohol, the dichromate is reduced to Cr³⁺, which is green. Orange → green indicates successful oxidation. If the solution stays orange, the alcohol was tertiary (no reaction).',
            topic: 'Oxidation of alcohols',
        },
        {
            id: 'mcq-t10-21',
            stem: 'To oxidise a primary alcohol to an aldehyde (and not further to a carboxylic acid), which experimental condition is essential?',
            options: [
                'Heating strongly under reflux with excess oxidant',
                'Using distillation apparatus so the aldehyde is removed as soon as it forms',
                'Using a larger quantity of K₂Cr₂O₇',
                'Keeping the temperature below 0°C',
            ],
            correctAnswer: 1,
            rationale: 'The aldehyde boils at a lower temperature than the alcohol and carboxylic acid. Using simple distillation apparatus removes the aldehyde from the reaction mixture as soon as it forms, preventing further oxidation to the carboxylic acid.',
            topic: 'Oxidation of alcohols',
        },
        {
            id: 'mcq-t10-22',
            stem: 'Which chemical test distinguishes an aldehyde from a ketone?',
            options: [
                'PCl₅ — gives steamy fumes with aldehydes only',
                "Tollens' reagent — gives a silver mirror with aldehydes only",
                'Acidified K₂Cr₂O₇ — turns green with aldehydes only',
                'Sodium metal — gives hydrogen gas with aldehydes only',
            ],
            correctAnswer: 1,
            rationale: "Tollens' reagent (ammoniacal silver nitrate) is reduced by aldehydes (which can be oxidised to carboxylic acids) to give a silver mirror. Ketones cannot be further oxidised and give no reaction. Acidified K₂Cr₂O₇ turns green with primary/secondary alcohols, not directly with aldehydes vs ketones.",
            topic: 'Oxidation of alcohols',
        },
        {
            id: 'mcq-t10-23',
            stem: 'Which of the following alcohols will give a pale yellow precipitate with iodine and sodium hydroxide (the iodoform test)?',
            options: [
                'Methanol (CH₃OH)',
                'Propan-1-ol (primary, 3 carbons)',
                'Propan-2-ol (secondary, CH₃CH(OH)CH₃)',
                'Propan-1-ol and propan-2-ol both give a yellow precipitate',
            ],
            correctAnswer: 2,
            rationale: 'The iodoform test is positive only for compounds with the CH₃CH(OH)– group (secondary alcohol where OH is on C2, plus the adjacent CH₃). Propan-2-ol has this group. The only primary alcohol that tests positive is ethanol; propan-1-ol does not.',
            topic: 'Oxidation of alcohols',
        },

        // Subtopic 6 – Purifying an organic liquid
        {
            id: 'mcq-t10-24',
            stem: 'In Core Practical 6 (preparation of 2-chloro-2-methylpropane), the reaction of 2-methylpropan-2-ol with conc. HCl is carried out in which piece of apparatus?',
            options: [
                'Round-bottomed flask with reflux condenser',
                'Separating funnel',
                'Distillation flask with thermometer',
                'Conical flask fitted with a stopper',
            ],
            correctAnswer: 1,
            rationale: 'The reaction is performed directly in a separating funnel by mixing the alcohol and conc. HCl, then shaking. Frequent venting (opening the tap) is essential to relieve CO₂ and HCl pressure. Products separate into two liquid layers for easy removal.',
            topic: 'Purifying an organic liquid',
        },
        {
            id: 'mcq-t10-25',
            stem: 'An organic liquid is washed with sodium hydrogencarbonate solution (NaHCO₃(aq)) in a separating funnel. What is the purpose of this step?',
            options: [
                'To dry the organic liquid by removing water',
                'To remove acidic impurities (e.g. unreacted HBr or HCl) from the organic layer',
                'To dissolve the organic product in the aqueous layer',
                'To separate two organic layers with different densities',
            ],
            correctAnswer: 1,
            rationale: 'NaHCO₃ is a mild base (HCO₃⁻). It neutralises acidic impurities such as HBr or H₂SO₄ remaining in the organic layer, converting them to water-soluble sodium salts that move into the aqueous layer. CO₂ gas is released — this is why venting is essential.',
            topic: 'Purifying an organic liquid',
        },

        // Subtopic 7 – Mass Spectrometry intro
        {
            id: 'mcq-t10-26',
            stem: 'The molecular ion peak (M⁺ peak) in a mass spectrum gives the:',
            options: [
                'Most abundant fragment ion in the spectrum',
                'Exact relative molecular mass of the intact molecule',
                'Number of carbon atoms in the molecule',
                'Type of functional group present',
            ],
            correctAnswer: 1,
            rationale: 'The M⁺ peak represents the intact molecule that has lost one electron. Its m/z value (with z = +1) equals the relative molecular mass of the compound. The tallest peak is the base peak (not necessarily M⁺).',
            topic: 'Mass Spectrometry intro',
        },
        {
            id: 'mcq-t10-27',
            stem: 'A mass spectrum shows two molecular ion peaks of approximately equal height, separated by 2 m/z units. This is most likely due to the presence of:',
            options: [
                'One chlorine atom (³⁵Cl : ³⁷Cl = 3 : 1)',
                'One bromine atom (⁷⁹Br : ⁸¹Br ≈ 1 : 1)',
                'Carbon-13 isotope',
                'Two fluorine atoms',
            ],
            correctAnswer: 1,
            rationale: 'Bromine has two almost equally abundant isotopes: ⁷⁹Br (~50%) and ⁸¹Br (~50%). A molecule with one Br atom shows M⁺ and M+2 peaks of equal height (1:1 ratio). Chlorine gives a 3:1 ratio. Fluorine has only one stable isotope.',
            topic: 'Mass Spectrometry intro',
        },
        {
            id: 'mcq-t10-28',
            stem: 'The tiny M+1 peak seen on a mass spectrum of an organic compound is caused by:',
            options: [
                'The presence of one oxygen atom in the molecule',
                'Loss of a hydrogen atom from the molecular ion',
                'The natural 1.1% abundance of ¹³C (carbon-13)',
                'A doubly charged molecular ion (M²⁺)',
            ],
            correctAnswer: 2,
            rationale: 'About 1.1% of all carbon atoms are ¹³C rather than ¹²C. For every ¹²C in a molecule, there is a ~1.1% chance it is ¹³C, giving a molecular ion 1 unit heavier. The more carbon atoms in the molecule, the taller the M+1 peak relative to M⁺.',
            topic: 'Mass Spectrometry intro',
        },

        // Subtopic 8 – Deducing structures from Mass Spec
        {
            id: 'mcq-t10-29',
            stem: 'In a mass spectrum, the base peak is defined as:',
            options: [
                'The peak with the highest m/z value in the spectrum',
                'The peak for the molecular ion (M⁺)',
                'The tallest peak in the spectrum, representing the most stable/common fragment',
                'The peak produced by the loss of one hydrogen atom',
            ],
            correctAnswer: 2,
            rationale: 'The base peak is simply the tallest peak in the entire spectrum, assigned 100% relative abundance. It corresponds to the most stable (and therefore most commonly formed) fragment ion. The M⁺ peak is not necessarily the tallest.',
            topic: 'Deducing structures from Mass Spec',
        },
        {
            id: 'mcq-t10-30',
            stem: 'A mass spectrum shows a large peak at m/z 57 as the base peak, with the molecular ion peak at m/z 86. Which fragment is most likely responsible for the m/z 57 peak?',
            options: [
                '[CH₃]⁺ — methyl cation',
                '[CH₃CH₂]⁺ — ethyl cation',
                '[CH₃CH₂CO]⁺ — propanoyl (acylium) cation',
                '[CH₃CO]⁺ — methyl ketone cation',
            ],
            correctAnswer: 2,
            rationale: 'M_r = 86; the fragment at 57 is 86 − 29 = loss of 29 ([C₂H₅]⁺ or [CHO]⁺ departs). The retained [CH₃CH₂CO]⁺ acylium ion at m/z 57 is very stable. This pattern is characteristic of pentan-3-one (CH₃CH₂COCH₂CH₃) where both halves produce the same acylium at 57.',
            topic: 'Deducing structures from Mass Spec',
        },

        // Subtopic 9 / 10 – Infrared Spectroscopy
        {
            id: 'mcq-t10-31',
            stem: 'On an infrared spectrum, absorption "peaks" point downwards because:',
            options: [
                'The y-axis plots Transmittance (%), which decreases when radiation is absorbed',
                'Infrared radiation has lower energy than visible light',
                'Wavenumber increases from right to left, inverting the peaks',
                'The detector records negative values for absorbed radiation',
            ],
            correctAnswer: 0,
            rationale: 'The y-axis is % Transmittance — the fraction of IR that passes through. When a bond absorbs strongly at a particular wavenumber, less radiation reaches the detector, so Transmittance drops, producing a downward dip/trough.',
            topic: 'Infrared Spectroscopy Introduction',
        },
        {
            id: 'mcq-t10-32',
            stem: 'Which IR absorption is described as a very broad, "rough/hairy" trough that overlays and obscures the C–H absorption region below 3000 cm⁻¹?',
            options: [
                'O–H stretch in an alcohol (~3300 cm⁻¹)',
                'C=O stretch in a ketone (~1715 cm⁻¹)',
                'O–H stretch in a carboxylic acid (2500–3300 cm⁻¹)',
                'N–H stretch in a primary amine (~3300–3500 cm⁻¹)',
            ],
            correctAnswer: 2,
            rationale: 'Carboxylic acid O–H stretching is extremely broad and "messy" due to strong hydrogen bonding. It spans 2500–3300 cm⁻¹, physically overlapping and swallowing the C–H region. Alcohol O–H is also broad but higher (~3230–3550 cm⁻¹) and cleaner.',
            topic: 'Using Infrared Spectra',
        },
        {
            id: 'mcq-t10-33',
            stem: 'What key IR feature distinguishes a carboxylic acid from a ketone?',
            options: [
                'Ketones show a C=O peak; carboxylic acids do not',
                'Carboxylic acids show a broad O–H absorption at 2500–3300 cm⁻¹ in addition to the C=O peak',
                'Carboxylic acids absorb at a higher wavenumber than ketones for C=O',
                'Ketones show an N–H double trough; carboxylic acids do not',
            ],
            correctAnswer: 1,
            rationale: 'Both carboxylic acids and ketones show a sharp C=O peak around 1700–1750 cm⁻¹. The carboxylic acid is identified by its additional broad, messy O–H absorption at 2500–3300 cm⁻¹. Ketones show only the C=O peak in that region.',
            topic: 'Using Infrared Spectra',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FILL-BLANK  (~15 questions)
    // ─────────────────────────────────────────────────────────────────────────
    fillblank: [

        {
            id: 'fb-t10-1',
            stem: 'Complete the sentence about bond fission.',
            template: '__BLANK__ fission breaks a covalent bond unevenly, so both electrons go to one atom, forming a positive and a negative __BLANK__.',
            blanks: [{ answer: 'heterolytic' }, { answer: 'ion' }],
            rationale: 'Heterolytic fission splits the electron pair unevenly → ions. Homolytic fission splits evenly → free radicals.',
        },
        {
            id: 'fb-t10-2',
            stem: 'Fill in the trend for halogenoalkane reactivity.',
            template: 'The order of reactivity of halogenoalkanes in nucleophilic substitution from fastest to slowest is: __BLANK__ > bromo > __BLANK__ > fluoro.',
            blanks: [{ answer: 'iodo' }, { answer: 'chloro' }],
            rationale: 'Determined by bond enthalpy: C–I is weakest (reacts fastest), C–F is strongest (reacts slowest).',
        },
        {
            id: 'fb-t10-3',
            stem: 'Complete the sentences about CP5 (hydrolysis rate experiment).',
            template: 'In CP5, a __BLANK__ bath at ~50°C is used instead of a Bunsen burner to avoid igniting the flammable __BLANK__.',
            blanks: [{ answer: 'water' }, { answer: 'ethanol' }],
            rationale: 'Ethanol and halogenoalkanes are highly flammable; a water bath provides gentle, controlled heating without a naked flame.',
        },
        {
            id: 'fb-t10-4',
            stem: 'Complete the statement about the ionic equation for hydrolysis.',
            template: 'The general ionic equation for the hydrolysis of a halogenoalkane R–Br with hydroxide ions is: R–Br + __BLANK__ → R–OH + __BLANK__.',
            blanks: [{ answer: 'OH⁻' }, { answer: 'Br⁻' }],
            rationale: 'OH⁻ is the nucleophile; it displaces the halide (Br⁻) in nucleophilic substitution to form the alcohol.',
        },
        {
            id: 'fb-t10-5',
            stem: 'Complete the sentence about the KCN reaction.',
            template: 'Reacting a halogenoalkane with KCN in ethanol under reflux produces a __BLANK__ and increases the carbon chain length by __BLANK__.',
            blanks: [{ answer: 'nitrile' }, { answer: 'one' }],
            rationale: 'CN⁻ adds one carbon as it displaces the halide. Bromoethane (2C) → propanenitrile (3C).',
        },
        {
            id: 'fb-t10-6',
            stem: 'Fill in the competing products of halogenoalkane reactions.',
            template: 'Using aqueous KOH (dilute, low temperature) favours __BLANK__, while using ethanolic KOH (concentrated, high temperature) favours __BLANK__.',
            blanks: [{ answer: 'substitution' }, { answer: 'elimination' }],
            rationale: 'Aqueous/dilute/low-temp conditions favour nucleophilic substitution (→ alcohol). Ethanolic/concentrated/high-temp conditions favour elimination (→ alkene).',
        },
        {
            id: 'fb-t10-7',
            stem: 'Complete the sentence about alcohol classification.',
            template: 'A __BLANK__ alcohol has the –OH group on a carbon bonded to two alkyl groups, while a __BLANK__ alcohol has it on a carbon bonded to three alkyl groups.',
            blanks: [{ answer: 'secondary' }, { answer: 'tertiary' }],
            rationale: 'Classification counts the number of alkyl groups on the carbon bearing –OH: 1 = primary, 2 = secondary, 3 = tertiary.',
        },
        {
            id: 'fb-t10-8',
            stem: 'Complete the sentence about alcohol oxidation.',
            template: 'When a secondary alcohol is heated under reflux with acidified K₂Cr₂O₇, the product is a __BLANK__, and the reagent changes colour from __BLANK__ to green.',
            blanks: [{ answer: 'ketone' }, { answer: 'orange' }],
            rationale: 'Secondary alcohols oxidise to ketones (not further). The Cr(VI) orange ion is reduced to green Cr(III).',
        },
        {
            id: 'fb-t10-9',
            stem: 'Fill in the iodoform test conditions and observation.',
            template: 'The triiodomethane (iodoform) test uses __BLANK__ and NaOH solution; a positive result is a __BLANK__ precipitate of CHI₃.',
            blanks: [{ answer: 'iodine' }, { answer: 'pale yellow' }],
            rationale: 'I₂ + NaOH with warming; positive result (CHI₃ precipitate) for ethanol and secondary alcohols containing the CH₃CH(OH)– group.',
        },
        {
            id: 'fb-t10-10',
            stem: 'Complete the sentence about purification.',
            template: 'To remove water from a crude organic liquid, an __BLANK__ salt (such as CaCl₂) is added; it absorbs water to become __BLANK__.',
            blanks: [{ answer: 'anhydrous' }, { answer: 'hydrated' }],
            rationale: 'Anhydrous drying agents absorb water and become their hydrated forms. Filter or decant to remove the solid before final distillation.',
        },
        {
            id: 'fb-t10-11',
            stem: 'Complete the sentence about testing purity.',
            template: 'A pure organic liquid boils at a single __BLANK__ temperature; the presence of impurities causes it to boil over a __BLANK__ range.',
            blanks: [{ answer: 'sharp' }, { answer: 'wider' }],
            rationale: 'Impurities disrupt intermolecular interactions, lowering the boiling point and broadening the boiling range. A pure substance has a sharp, narrow boiling point.',
        },
        {
            id: 'fb-t10-12',
            stem: 'Complete the sentence about the molecular ion peak.',
            template: 'The peak with the highest m/z ratio in a mass spectrum (ignoring M+1 isotope peaks) is the __BLANK__ peak, and its value equals the compound\'s __BLANK__ molecular mass.',
            blanks: [{ answer: 'molecular ion' }, { answer: 'relative' }],
            rationale: 'The M⁺ peak is the intact molecule minus one electron. Its m/z value (assuming z = +1) equals the relative molecular mass (M_r) of the compound.',
        },
        {
            id: 'fb-t10-13',
            stem: 'Complete the sentence about bromine isotopes.',
            template: 'A molecule containing one bromine atom shows two molecular ion peaks separated by __BLANK__ m/z units in a __BLANK__ : 1 ratio.',
            blanks: [{ answer: 'two' }, { answer: 'one' }],
            rationale: 'Bromine has ⁷⁹Br (~50%) and ⁸¹Br (~50%), so M⁺ and M+2 are approximately equal (1:1 ratio). The two isotopes differ by 2 mass units.',
        },
        {
            id: 'fb-t10-14',
            stem: 'Fill in the IR spectroscopy axes.',
            template: 'On an infrared spectrum, the x-axis shows __BLANK__ (cm⁻¹) and the y-axis shows __BLANK__ (%).',
            blanks: [{ answer: 'wavenumber' }, { answer: 'transmittance' }],
            rationale: 'Wavenumber is directly proportional to frequency and energy. Transmittance (%) measures how much IR radiation passes through — it drops at absorption frequencies.',
        },
        {
            id: 'fb-t10-15',
            stem: 'Complete the sentence about the fingerprint region.',
            template: 'The __BLANK__ region on an IR spectrum (below ~1500 cm⁻¹) is unique to each compound and can be compared to a __BLANK__ to positively identify a molecule.',
            blanks: [{ answer: 'fingerprint' }, { answer: 'database' }],
            rationale: 'The fingerprint region contains complex bending vibration patterns unique to each molecule — like a human fingerprint. Positive identification requires comparison to known spectra in a database.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // DRAG-DROP  (~10 questions)
    // ─────────────────────────────────────────────────────────────────────────
    dragdrop: [

        {
            id: 'dd-t10-1',
            stem: 'Classify each species as Nucleophile, Electrophile, or Free Radical.',
            categories: ['Nucleophile', 'Electrophile', 'Free Radical'],
            items: [
                { text: 'OH⁻', category: 'Nucleophile' },
                { text: 'CN⁻', category: 'Nucleophile' },
                { text: 'H⁺', category: 'Electrophile' },
                { text: 'NO₂⁺', category: 'Electrophile' },
                { text: 'Cl•', category: 'Free Radical' },
                { text: 'NH₃', category: 'Nucleophile' },
                { text: 'Br•', category: 'Free Radical' },
                { text: 'AlCl₃', category: 'Electrophile' },
            ],
        },
        {
            id: 'dd-t10-2',
            stem: 'Match each reaction to the correct organic reaction type.',
            categories: ['Substitution', 'Addition', 'Elimination', 'Hydrolysis'],
            items: [
                { text: 'Bromoethane + KOH(aq) → ethanol + KBr', category: 'Substitution' },
                { text: 'Ethene + HBr → bromoethane', category: 'Addition' },
                { text: 'Ethanol + conc. H₂SO₄ (170°C) → ethene + H₂O', category: 'Elimination' },
                { text: '1-bromopropane + H₂O → propan-1-ol + HBr', category: 'Hydrolysis' },
                { text: 'CH₂=CH₂ + H₂ → CH₃CH₃', category: 'Addition' },
                { text: '2-bromopropane + ethanolic KOH → propene', category: 'Elimination' },
            ],
        },
        {
            id: 'dd-t10-3',
            stem: 'Classify each halogenoalkane as Primary (1°), Secondary (2°), or Tertiary (3°).',
            categories: ['Primary (1°)', 'Secondary (2°)', 'Tertiary (3°)'],
            items: [
                { text: '1-bromopropane (CH₃CH₂CH₂Br)', category: 'Primary (1°)' },
                { text: '2-bromopropane ((CH₃)₂CHBr)', category: 'Secondary (2°)' },
                { text: '2-bromo-2-methylpropane ((CH₃)₃CBr)', category: 'Tertiary (3°)' },
                { text: 'Bromoethane (CH₃CH₂Br)', category: 'Primary (1°)' },
                { text: '3-bromopentane', category: 'Secondary (2°)' },
                { text: '2-bromo-2-methylbutane', category: 'Tertiary (3°)' },
                { text: 'Chloromethane (CH₃Cl)', category: 'Primary (1°)' },
            ],
        },
        {
            id: 'dd-t10-4',
            stem: 'Sort the silver halide precipitate colours produced in the CP5 hydrolysis experiment.',
            categories: ['White precipitate', 'Cream precipitate', 'Yellow precipitate'],
            items: [
                { text: 'AgCl (chloroalkane hydrolysed)', category: 'White precipitate' },
                { text: 'AgBr (bromoalkane hydrolysed)', category: 'Cream precipitate' },
                { text: 'AgI (iodoalkane hydrolysed)', category: 'Yellow precipitate' },
            ],
        },
        {
            id: 'dd-t10-5',
            stem: 'Classify each alcohol as Primary, Secondary, or Tertiary.',
            categories: ['Primary', 'Secondary', 'Tertiary'],
            items: [
                { text: 'Ethanol (CH₃CH₂OH)', category: 'Primary' },
                { text: 'Propan-2-ol ((CH₃)₂CHOH)', category: 'Secondary' },
                { text: '2-methylpropan-2-ol ((CH₃)₃COH)', category: 'Tertiary' },
                { text: 'Butan-1-ol', category: 'Primary' },
                { text: 'Butan-2-ol', category: 'Secondary' },
                { text: '2-methylbutan-2-ol', category: 'Tertiary' },
            ],
        },
        {
            id: 'dd-t10-6',
            stem: 'Match each alcohol to its product when oxidised with acidified K₂Cr₂O₇.',
            categories: ['Aldehyde (then carboxylic acid)', 'Ketone', 'No reaction'],
            items: [
                { text: 'Propan-1-ol (primary)', category: 'Aldehyde (then carboxylic acid)' },
                { text: 'Propan-2-ol (secondary)', category: 'Ketone' },
                { text: '2-methylpropan-2-ol (tertiary)', category: 'No reaction' },
                { text: 'Ethanol (primary)', category: 'Aldehyde (then carboxylic acid)' },
                { text: 'Butan-2-ol (secondary)', category: 'Ketone' },
                { text: '2-methyl-2-butanol (tertiary)', category: 'No reaction' },
            ],
        },
        {
            id: 'dd-t10-7',
            stem: 'Match each purification step to its purpose in making bromoethane.',
            categories: ['Remove acidic impurities', 'Remove water', 'Separate organic layer', 'Final purification'],
            items: [
                { text: 'Shake with Na₂CO₃(aq) in separating funnel', category: 'Remove acidic impurities' },
                { text: 'Add anhydrous CaCl₂ and filter', category: 'Remove water' },
                { text: 'Drain off lower (bromoethane) layer from separating funnel', category: 'Separate organic layer' },
                { text: 'Redistil and collect fraction boiling at 35–40°C', category: 'Final purification' },
            ],
        },
        {
            id: 'dd-t10-8',
            stem: 'Classify each IR absorption by the functional group it identifies.',
            categories: ['Alcohol O–H', 'Carboxylic acid O–H', 'C=O carbonyl', 'Primary amine N–H'],
            items: [
                { text: 'Broad smooth trough at ~3230–3550 cm⁻¹', category: 'Alcohol O–H' },
                { text: 'Broad, rough/messy trough at 2500–3300 cm⁻¹', category: 'Carboxylic acid O–H' },
                { text: 'Sharp, deep spike at ~1680–1750 cm⁻¹', category: 'C=O carbonyl' },
                { text: 'Double trough at ~3100–3500 cm⁻¹', category: 'Primary amine N–H' },
            ],
        },
        {
            id: 'dd-t10-9',
            stem: 'Sort the following into conditions that favour substitution vs elimination when a halogenoalkane reacts with KOH.',
            categories: ['Favours Substitution', 'Favours Elimination'],
            items: [
                { text: 'Aqueous KOH (dilute)', category: 'Favours Substitution' },
                { text: 'Ethanolic KOH (concentrated)', category: 'Favours Elimination' },
                { text: 'Lower temperature', category: 'Favours Substitution' },
                { text: 'Higher temperature', category: 'Favours Elimination' },
                { text: 'Primary halogenoalkane', category: 'Favours Substitution' },
                { text: 'Tertiary halogenoalkane', category: 'Favours Elimination' },
            ],
        },
        {
            id: 'dd-t10-10',
            stem: 'Match each fragment ion m/z value to its most likely identity.',
            categories: ['m/z 15', 'm/z 29', 'm/z 43', 'm/z 77'],
            items: [
                { text: '[CH₃]⁺ — methyl cation', category: 'm/z 15' },
                { text: '[CHO]⁺ — formyl cation', category: 'm/z 29' },
                { text: '[CH₃CO]⁺ — acetyl/acylium cation', category: 'm/z 43' },
                { text: '[C₆H₅]⁺ — phenyl cation', category: 'm/z 77' },
                { text: '[C₂H₅]⁺ — ethyl cation', category: 'm/z 29' },
                { text: '[C₃H₇]⁺ — propyl cation', category: 'm/z 43' },
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // SEQUENCE  (~8 questions)
    // ─────────────────────────────────────────────────────────────────────────
    sequence: [

        {
            id: 'seq-t10-1',
            stem: 'Arrange the steps of the CP5 silver nitrate hydrolysis experiment in the correct order.',
            steps: [
                'Add equal amounts of each halogenoalkane to separate test tubes',
                'Add ethanol and aqueous AgNO₃ to each tube',
                'Place all tubes in a water bath at ~50°C simultaneously',
                'Record the time for a silver halide precipitate to appear in each tube',
            ],
        },
        {
            id: 'seq-t10-2',
            stem: 'Arrange the following elimination mechanism steps (E2) for 2-bromopropane + OH⁻ in the correct order.',
            steps: [
                'OH⁻ lone pair approaches a hydrogen on the β-carbon (adjacent to C–Br)',
                'The O–H bond forms simultaneously as the C–H bond breaks',
                'The electron pair from the broken C–H bond begins forming the C=C π bond',
                'The C–Br bond breaks completely as Br⁻ departs, and propene is formed',
            ],
        },
        {
            id: 'seq-t10-3',
            stem: 'Arrange the purification steps for making bromoethane in the correct order.',
            steps: [
                'React ethanol with KBr and conc. H₂SO₄; collect crude bromoethane by distillation',
                'Wash with Na₂CO₃(aq) in separating funnel to remove acidic impurities (vent CO₂)',
                'Add anhydrous CaCl₂ and filter to dry the organic layer',
                'Redistil and collect the fraction boiling at 35–40°C',
            ],
        },
        {
            id: 'seq-t10-4',
            stem: 'Arrange the steps of CP7 (oxidation of propan-1-ol to propanal) in the correct order.',
            steps: [
                'Set up simple distillation apparatus with propan-1-ol and acidified K₂Cr₂O₄',
                'Heat the mixture gently so the mixture reacts',
                'Propanal, having a lower boiling point than propan-1-ol, distils off immediately',
                'Observe the colour change from orange to green, confirming oxidation',
            ],
        },
        {
            id: 'seq-t10-5',
            stem: 'Arrange these halogenoalkane reactions from the one that would give the fastest precipitate to the one that takes the longest in excess AgNO₃/ethanol at 50°C.',
            steps: [
                '1-iodobutane — gives precipitate almost immediately (weakest C–X bond)',
                '1-bromobutane — gives precipitate after a short time',
                '1-chlorobutane — gives precipitate much more slowly (stronger C–X bond)',
                '1-fluorobutane — barely reacts (strongest C–X bond)',
            ],
        },
        {
            id: 'seq-t10-6',
            stem: 'Arrange the steps for acid-catalysed dehydration of propan-2-ol to propene in the correct order.',
            steps: [
                'H⁺ from conc. H₂SO₄ protonates the –OH group, forming –OH₂⁺',
                'The protonated –OH₂⁺ leaves as water, generating a secondary carbocation',
                'A base (HSO₄⁻ or H₂O) removes a proton from an adjacent β-carbon',
                'The C–H electrons form the C=C π bond, giving propene; H⁺ is regenerated',
            ],
        },
        {
            id: 'seq-t10-7',
            stem: 'Arrange the steps for interpreting an unknown mass spectrum to identify a molecule.',
            steps: [
                'Read the m/z of the highest peak (ignoring isotope peaks) → this is M_r',
                'Check for M+2 peak: 3:1 ratio suggests Cl; 1:1 ratio suggests Br',
                'Identify the base peak and subtract its m/z from M_r to find the complementary fragment lost',
                'Look up common fragment masses (15, 29, 43, 57) to propose structural fragments',
            ],
        },
        {
            id: 'seq-t10-8',
            stem: 'Arrange the steps for confirming the identity of a purified organic liquid using boiling point.',
            steps: [
                'Add anti-bumping granules to the dried organic liquid in a distillation flask',
                'Heat the flask and monitor the thermometer reading at the still-head',
                'Collect the fraction that distils at a constant, narrow temperature range',
                'Compare the boiling point to the data book value for the target compound',
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // KEYWORD  (~12 questions)
    // ─────────────────────────────────────────────────────────────────────────
    keyword: [

        {
            id: 'kw-t10-1',
            stem: 'Define a nucleophile. [2 marks]',
            marks: 2,
            keywords: ['electron pair', 'donor', 'δ+', 'positive'],
            modelAnswer: 'A nucleophile is an electron pair donor that attacks electron-deficient (δ+) centres in organic molecules. Examples include OH⁻, CN⁻, and NH₃.',
        },
        {
            id: 'kw-t10-2',
            stem: 'Explain why the C–I bond is broken more easily than the C–Cl bond in nucleophilic substitution reactions. [2 marks]',
            marks: 2,
            keywords: ['bond enthalpy', 'weaker', 'C–I', 'lowest'],
            modelAnswer: 'Bond enthalpy (bond strength) determines reactivity, not bond polarity. The C–I bond has the lowest bond enthalpy of all carbon–halogen bonds, meaning it requires the least energy to break and is therefore most easily cleaved by the incoming nucleophile.',
        },
        {
            id: 'kw-t10-3',
            stem: 'Describe and explain the silver nitrate experiment (CP5) used to compare rates of hydrolysis of halogenoalkanes. [4 marks]',
            marks: 4,
            keywords: ['ethanol', 'AgNO₃', 'water bath', 'flammable', 'silver halide', 'precipitate', 'time'],
            modelAnswer: 'Each halogenoalkane is mixed with ethanol and aqueous silver nitrate solution, then heated in a water bath at ~50°C. Ethanol is used as a common solvent because halogenoalkanes are insoluble in water. A water bath is used because halogenoalkanes and ethanol are flammable (no naked flame). As hydrolysis occurs, a halide ion (X⁻) is released and reacts immediately with Ag⁺ to form an AgX precipitate. The faster the precipitate appears, the faster the hydrolysis.',
        },
        {
            id: 'kw-t10-4',
            stem: 'State the conditions that favour elimination over substitution when a secondary halogenoalkane reacts with hydroxide ions. [3 marks]',
            marks: 3,
            keywords: ['ethanolic', 'concentrated', 'high temperature', 'ethanol'],
            modelAnswer: 'Elimination is favoured by: concentrated KOH/NaOH, using ethanol (not water) as the solvent (ethanolic conditions), and heating to a higher temperature. Under these conditions, OH⁻ acts as a base, removing H⁺ from a β-carbon to give an alkene rather than substituting to give an alcohol.',
        },
        {
            id: 'kw-t10-5',
            stem: 'Explain why the solvent used in the reaction of halogenoalkanes with KOH must be a 50:50 ethanol/water mixture rather than pure water. [2 marks]',
            marks: 2,
            keywords: ['insoluble', 'water', 'ethanol', 'homogeneous', 'dissolves'],
            modelAnswer: 'Halogenoalkanes are insoluble in water, so using pure water would result in two separate layers with only minimal contact at the interface, virtually stopping the reaction. Ethanol dissolves both the halogenoalkane and the aqueous KOH, creating a homogeneous (single-phase) mixture where the reactants can freely interact.',
        },
        {
            id: 'kw-t10-6',
            stem: 'Explain why tertiary alcohols cannot be oxidised by acidified potassium dichromate(VI). [2 marks]',
            marks: 2,
            keywords: ['no hydrogen', 'α-carbon', 'C–H bond', 'tertiary'],
            modelAnswer: 'Oxidation of an alcohol requires breaking a C–H bond on the carbon bearing the –OH group (α-carbon). In a tertiary alcohol, the α-carbon has three alkyl groups attached and carries no hydrogen atom. Therefore, there is no C–H bond to break and oxidation cannot occur.',
        },
        {
            id: 'kw-t10-7',
            stem: 'Describe how you would carry out the triiodomethane (iodoform) test on a liquid organic compound and state the positive result. [3 marks]',
            marks: 3,
            keywords: ['iodine', 'sodium hydroxide', 'warm', 'pale yellow', 'CHI₃', 'precipitate'],
            modelAnswer: 'Add iodine solution (I₂) and aqueous sodium hydroxide (NaOH) to the compound and warm the mixture gently. A positive result is the formation of a pale yellow precipitate of triiodomethane (CHI₃), which has a characteristic antiseptic/medical smell. This indicates the presence of the CH₃CH(OH)– group.',
        },
        {
            id: 'kw-t10-8',
            stem: 'Describe how the purity of a prepared organic liquid is assessed, and explain what an impure sample would show. [3 marks]',
            marks: 3,
            keywords: ['boiling point', 'sharp', 'single', 'range', 'impurities', 'lower'],
            modelAnswer: 'The purity of an organic liquid is assessed by measuring its boiling point. A pure compound boils sharply at a single, narrow temperature that matches the data book value. An impure sample boils over a wider temperature range and will typically show a lower average boiling point than the pure compound due to the presence of dissolved impurities.',
        },
        {
            id: 'kw-t10-9',
            stem: 'Explain what information the molecular ion (M⁺) peak provides in a mass spectrum and how it is formed. [3 marks]',
            marks: 3,
            keywords: ['relative molecular mass', 'm/z', 'electron bombardment', 'M⁺', 'highest'],
            modelAnswer: 'The molecular ion peak is formed when a high-energy electron from the beam knocks one electron out of the molecule (M + e⁻ → M⁺• + 2e⁻). The peak with the highest m/z value (ignoring tiny M+1 isotope peaks) in the spectrum is the molecular ion peak. Its m/z value (assuming a charge of +1) gives the relative molecular mass (M_r) of the intact compound.',
        },
        {
            id: 'kw-t10-10',
            stem: 'Explain why a mass spectrum of a compound containing one chlorine atom shows two peaks in the molecular ion region separated by 2 m/z units in a ratio of approximately 3:1. [3 marks]',
            marks: 3,
            keywords: ['isotopes', '³⁵Cl', '³⁷Cl', '75%', '25%', 'ratio', '3:1'],
            modelAnswer: 'Chlorine has two naturally occurring isotopes: ³⁵Cl (relative abundance ~75%) and ³⁷Cl (~25%). A molecule containing one chlorine atom can therefore have a molecular mass of either M (with ³⁵Cl) or M+2 (with ³⁷Cl), producing two peaks 2 m/z units apart. Because ³⁵Cl is three times more abundant than ³⁷Cl, the M⁺ peak is approximately three times taller than the M+2 peak, giving a 3:1 ratio.',
        },
        {
            id: 'kw-t10-11',
            stem: 'Explain why a bond must cause a change in the polarity of a molecule in order to absorb infrared radiation. [2 marks]',
            marks: 2,
            keywords: ['dipole', 'change', 'polarity', 'interact', 'radiation', 'N₂'],
            modelAnswer: 'Infrared radiation is an electromagnetic wave with an oscillating electric field. A bond can only interact with (absorb) this radiation if its vibration creates a changing dipole moment — an oscillating change in charge distribution. Perfectly symmetrical, non-polar bonds (such as in N₂ or O₂) do not change their dipole during vibration and therefore cannot absorb IR.',
        },
        {
            id: 'kw-t10-12',
            stem: 'Explain the principle and use of the fingerprint region in infrared spectroscopy. [3 marks]',
            marks: 3,
            keywords: ['fingerprint', 'unique', 'below 1500', 'bending', 'database', 'identify'],
            modelAnswer: 'The fingerprint region is the part of the IR spectrum below approximately 1500 cm⁻¹. It contains a complex, characteristic pattern of overlapping absorption peaks due to C–C and C–O bending vibrations of the entire molecular skeleton. This pattern is unique to each compound (like a human fingerprint). By comparing the fingerprint region of an unknown sample to a reference database of known spectra, chemists can positively identify the exact compound.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FLASHCARDS  (~27 cards, covering all 11 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    flashcards: [

        // Subtopic 0
        {
            id: 'fc-t10-1',
            front: 'What are the two products of homolytic fission of a covalent bond?',
            back: 'Two free radicals — each atom receives ONE electron from the shared pair.\nShown by fish-hook (single-headed) curly arrows.',
            topic: 'General Principles: Reaction types and intermediate species',
        },
        {
            id: 'fc-t10-2',
            front: 'Distinguish between a nucleophile and an electrophile.',
            back: 'Nucleophile: electron pair DONOR → attacks δ+ centres (e.g. OH⁻, CN⁻, NH₃).\nElectrophile: electron pair ACCEPTOR → attacks electron-rich areas (e.g. H⁺, NO₂⁺).',
            topic: 'General Principles: Reaction types and intermediate species',
        },
        {
            id: 'fc-t10-3',
            front: 'What is an elimination reaction? Give one example.',
            back: 'A small molecule is removed from a larger one, forming a C=C double bond.\nExample: ethanol → ethene + H₂O (dehydration with conc. H₂SO₄ at 170°C).',
            topic: 'General Principles: Reaction types and intermediate species',
        },

        // Subtopic 1
        {
            id: 'fc-t10-4',
            front: 'Classify: 2-chloro-2-methylpropane. Explain the classification.',
            back: 'Tertiary (3°).\nThe C–Cl carbon is bonded to THREE other carbon atoms (three methyl groups).',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },
        {
            id: 'fc-t10-5',
            front: 'State the reagent, conditions, and product for the hydrolysis of a halogenoalkane.',
            back: 'Reagent: aqueous KOH or NaOH (KOH(aq)).\nConditions: heat under reflux.\nProduct: alcohol + halide ion (e.g. Br⁻).\nIonic equation: R–X + OH⁻ → R–OH + X⁻',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },
        {
            id: 'fc-t10-6',
            front: 'Why do iodoalkanes react faster than chloroalkanes in nucleophilic substitution?',
            back: 'Bond ENTHALPY (not polarity) determines reactivity.\nC–I bond has the lowest bond enthalpy — it is the weakest and easiest to break.\nC–Cl bond is stronger and much harder to break.\nOrder: I > Br > Cl > F (fastest to slowest).',
            topic: 'Halogenoalkanes Intro and Hydrolysis',
        },

        // Subtopic 2
        {
            id: 'fc-t10-7',
            front: 'In CP5 (hydrolysis rate experiment), what does the colour of the silver halide precipitate indicate?',
            back: 'AgCl = white (chloroalkane hydrolysed)\nAgBr = cream (bromoalkane hydrolysed)\nAgI = yellow (iodoalkane hydrolysed)\nFaster precipitate = faster hydrolysis rate.',
            topic: 'Comparing rates of hydrolysis',
        },
        {
            id: 'fc-t10-8',
            front: 'Why is a water bath (not a Bunsen burner) used in CP5?',
            back: 'Halogenoalkanes and ethanol are highly flammable.\nA naked flame could ignite the mixture.\nA water bath at ~50°C provides gentle, even, safe heating.',
            topic: 'Comparing rates of hydrolysis',
        },

        // Subtopic 3
        {
            id: 'fc-t10-9',
            front: 'State the reagents and product for the reaction of a halogenoalkane with ammonia (in ethanol, sealed tube).',
            back: 'Reagent: excess ammonia (NH₃) dissolved in ethanol.\nConditions: heat under pressure in a sealed tube.\nProduct: primary amine (e.g. CH₃CH₂Br + NH₃ → CH₃CH₂NH₂ + HBr)',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'fc-t10-10',
            front: 'What is produced when a halogenoalkane reacts with KCN in ethanol under reflux? Why is this reaction useful?',
            back: 'Product: nitrile (R–CN).\nIt is useful because it increases the carbon chain length by 1.\nExample: bromoethane (2C) → propanenitrile (3C).\n⚠ Use ethanol (not aqueous KCN) to avoid OH⁻ competing.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'fc-t10-11',
            front: 'State the conditions that favour substitution vs elimination when OH⁻ reacts with a halogenoalkane.',
            back: 'Substitution: aqueous KOH, dilute, lower temperature, primary RX.\nElimination: ethanolic KOH (KOH in ethanol), concentrated, higher temperature, tertiary RX.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },
        {
            id: 'fc-t10-12',
            front: 'How many alkene products can form from the elimination of 2-bromobutane? Name them.',
            back: '3 alkene products:\n1. but-1-ene (H removed from C1)\n2. (Z)-but-2-ene (cis geometry)\n3. (E)-but-2-ene (trans geometry)\nBut-2-ene shows E/Z geometric isomerism.',
            topic: 'Halogenoalkane Reactions and Mechanisms (SN1 & SN2)',
        },

        // Subtopic 4
        {
            id: 'fc-t10-13',
            front: 'State the reagents needed to convert a primary alcohol into a bromoalkane.',
            back: 'Method 1: KBr + conc. H₂SO₄ — forms HBr in situ, which reacts with the alcohol.\nMethod 2: Red phosphorus + bromine — forms PBr₃ in situ.\nGeneral: ROH + HBr → RBr + H₂O',
            topic: 'Alcohols: Classification and reactions',
        },
        {
            id: 'fc-t10-14',
            front: 'Compare the two industrial methods for making ethanol.',
            back: 'Hydration of ethene: 300°C, 60 atm, H₃PO₄ catalyst, continuous, finite resource (crude oil).\nFermentation: ~35°C, anaerobic, yeast, batch process, renewable resource (sugar/starch).',
            topic: 'Alcohols: Classification and reactions',
        },
        {
            id: 'fc-t10-15',
            front: 'What happens when an alcohol reacts with PCl₅? What observation confirms the reaction?',
            back: 'PCl₅ reacts at room temperature: ROH + PCl₅ → RCl + POCl₃ + HCl\nObservation: steamy fumes of HCl gas are produced.\nThis is also used as a test for the –OH group.',
            topic: 'Alcohols: Classification and reactions',
        },

        // Subtopic 5
        {
            id: 'fc-t10-16',
            front: 'What are the products of oxidising primary, secondary, and tertiary alcohols with acidified K₂Cr₂O₇?',
            back: 'Primary: aldehyde (distillation) → carboxylic acid (reflux).\nSecondary: ketone (under reflux).\nTertiary: NO REACTION (stays orange).\nColour change on success: orange → green.',
            topic: 'Oxidation of alcohols',
        },
        {
            id: 'fc-t10-17',
            front: "Describe Tollens' test for distinguishing aldehydes from ketones.",
            back: "Tollens' reagent = ammoniacal silver nitrate.\nAdd and warm gently.\nAldehydes: SILVER MIRROR forms on test tube wall (Ag⁺ reduced to Ag).\nKetones: NO reaction (solution remains colourless).",
            topic: 'Oxidation of alcohols',
        },
        {
            id: 'fc-t10-18',
            front: 'Which alcohols give a positive triiodomethane (iodoform) test? State the reagents and observation.',
            back: 'Positive: ethanol (only primary alcohol), AND secondary alcohols with CH₃CH(OH)– group (e.g. propan-2-ol, butan-2-ol).\nReagents: I₂ + NaOH(aq), warm.\nObservation: pale yellow precipitate of CHI₃ (antiseptic smell).',
            topic: 'Oxidation of alcohols',
        },

        // Subtopic 6
        {
            id: 'fc-t10-19',
            front: 'Why must you frequently open the tap when shaking a separating funnel with NaHCO₃ solution?',
            back: 'NaHCO₃ neutralises acidic impurities, producing CO₂ gas.\nCO₂ builds up pressure inside the sealed funnel, which could force the stopper out or cause spillage.\nVenting (inverting + opening tap) releases this pressure safely.',
            topic: 'Purifying an organic liquid',
        },
        {
            id: 'fc-t10-20',
            front: 'Name two anhydrous drying agents commonly used to dry organic liquids.',
            back: '1. Anhydrous calcium chloride (CaCl₂) — also absorbs ethanol, so useful for drying halogenoalkanes after ethanol washes.\n2. Anhydrous sodium sulfate (Na₂SO₄) — more versatile; can dry a wider range of organics.',
            topic: 'Purifying an organic liquid',
        },

        // Subtopic 7
        {
            id: 'fc-t10-21',
            front: 'What is the M+1 peak in a mass spectrum caused by?',
            back: 'Carbon-13 (¹³C) — a natural isotope with ~1.1% abundance.\nA molecule with n carbons has an ~n × 1.1% chance of containing one ¹³C, giving a molecular ion 1 mass unit heavier.\nFormula: n ≈ (100 / 1.1) × (M+1 height / M⁺ height)',
            topic: 'Mass Spectrometry intro',
        },
        {
            id: 'fc-t10-22',
            front: 'A mass spectrum shows two M⁺ peaks separated by 2 mass units in a 3:1 ratio. What element does the molecule contain?',
            back: 'Chlorine (Cl).\n³⁵Cl : ³⁷Cl natural abundance ≈ 75% : 25% = 3 : 1 ratio.\nThe two peaks differ by 2 because the isotopes differ by 2 mass units.',
            topic: 'Mass Spectrometry intro',
        },

        // Subtopic 8
        {
            id: 'fc-t10-23',
            front: 'What is the base peak in a mass spectrum?',
            back: 'The tallest peak in the spectrum, assigned 100% relative abundance.\nIt represents the most stable (and therefore most commonly formed) fragment ion.\nAll other peaks are measured relative to it.',
            topic: 'Deducing structures from Mass Spec',
        },
        {
            id: 'fc-t10-24',
            front: 'What common fragment ions are found at m/z 15, 29, and 43?',
            back: 'm/z 15: [CH₃]⁺ (methyl cation)\nm/z 29: [C₂H₅]⁺ (ethyl) or [CHO]⁺ (formyl)\nm/z 43: [CH₃CO]⁺ (acetyl/acylium) or [C₃H₇]⁺ (propyl)',
            topic: 'Deducing structures from Mass Spec',
        },

        // Subtopic 9
        {
            id: 'fc-t10-25',
            front: 'Why do N₂ molecules not absorb infrared radiation?',
            back: 'For a bond to absorb IR, its vibration must create a change in dipole moment.\nN₂ is a perfectly symmetrical, non-polar diatomic molecule — stretching does not change its dipole (it remains zero throughout).\nTherefore it cannot interact with IR radiation.',
            topic: 'Infrared Spectroscopy Introduction',
        },
        {
            id: 'fc-t10-26',
            front: 'What are the axes of an IR spectrum, and what does a downward "peak" mean?',
            back: 'X-axis: wavenumber (cm⁻¹) — proportional to energy; higher = more energetic.\nY-axis: transmittance (%) — how much IR passes through.\nDownward peak = strong absorption at that wavenumber by a specific bond type.',
            topic: 'Infrared Spectroscopy Introduction',
        },

        // Subtopic 10
        {
            id: 'fc-t10-27',
            front: 'How do you distinguish an alcohol O–H absorption from a carboxylic acid O–H absorption on an IR spectrum?',
            back: 'Alcohol O–H: broad but relatively smooth trough at ~3230–3550 cm⁻¹.\nCarboxylic acid O–H: extremely broad, "rough/hairy" trough at 2500–3300 cm⁻¹ that overlaps and swallows the C–H region.\nBoth have C=O for carboxylic acid; alcohol lacks the messy low-wavenumber O–H.',
            topic: 'Using Infrared Spectra',
        },
    ],
};
