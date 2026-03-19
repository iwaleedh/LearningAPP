export const exercises_chemistry_5_18 = {
  mcq: [
    // =======================================================================
    // SUBTOPIC 0: Aromatic vs Aliphatic Compounds & Nomenclature
    // =======================================================================
    {
      id: 'mcq-t18-1',
      stem: 'Which of the following is an aromatic compound?',
      options: [
        'Butane',
        'Cyclohexane',
        'Benzene',
        'Ethanol',
        'Phenol',
        'Phenylethene (styrene)',
        'Nitrobenzene'
      ],
      correctAnswer: 2,
      rationale: 'Aromatic compounds contain a benzene ring in their structure. Examples include benzene (C₆H₆), phenol (C₆H₅OH), nitrobenzene (C₆H₅NO₂), and phenylethene. Cyclohexane is a ring but lacks the delocalised π electron system of benzene, making it aliphatic. Butane, ethanol, and phenylethene do not contain a benzene ring.',
      topic: 'Aromatic vs Aliphatic Compounds'
    },
    {
      id: 'mcq-t18-2',
      stem: 'What is the correct name for the compound C₆H₅COOH?',
      options: [
        'Benzene-1-carboxylic acid',
        'Phenyl carboxylic acid',
        'Benzoic acid',
        'Benzoyl acid',
        '1-hydroxybenzoic acid'
      ],
      correctAnswer: 2,
      rationale: 'Benzoic acid is the IUPAC name for C₆H₅COOH. The carboxyl group (–COOH) is attached to a benzene ring. Option B uses the "phenyl" prefix convention. Option A incorrectly uses "benzene" as part of the name, and options C and D are alternative naming conventions that are not standard IUPAC.',
      topic: 'Aromatic vs Aliphatic Compounds'
    },
    {
      id: 'mcq-t18-3',
      stem: 'What is the correct IUPAC name for CH₃–C₆H₅?',
      options: [
        'Toluene',
        'Methylbenzene',
        '1-methylbenzene',
        'Phenylmethane',
        '1-phenylethane'
      ],
      correctAnswer: 0,
      rationale: 'Toluene is the IUPAC name for methylbenzene (C₆H₅CH₃). When an –OH group would be the priority, the name would be phenylmethane, but for simple alkyl substituents, using the alkane name as a prefix (methyl-, ethyl-, etc.) is acceptable. Options B, C, and D are incorrect naming conventions.',
      topic: 'Aromatic vs Aliphatic Compounds'
    },
    {
      id: 'mcq-t18-4',
      stem: 'What is the melting point of pure benzene?',
      options: [
        '5.5°C',
        '40°C',
        '80°C',
        '95°C'
      ],
      correctAnswer: 2,
      rationale: 'Pure benzene melts at 5.5°C, not 40°C. The highly symmetrical, planar benzene molecules pack very tightly in a solid lattice, giving it a much higher melting point than similar-sized molecules. This is due to efficient packing of the planar hexagonal structure.',
      topic: 'Physical Properties of Arenes'
    },
    {
      id: 'mcq-t18-5',
      stem: 'Which factor primarily determines the boiling point of benzene (80°C) compared to methylbenzene (111°C)?',
      options: [
        'Molecular mass',
        'Surface area',
        'Dipole moment',
        'Intermolecular forces strength',
        'Hydrogen bonding ability'
      ],
      correctAnswer: 3,
      rationale: 'Boiling points depend on London dispersion forces, which increase with molecular mass and surface area. Methylbenzene (C₇H₈) has a larger molecular mass and more electrons than benzene (C₆H₆), creating stronger London dispersion forces. Both molecules are non-polar with no hydrogen bonding.',
      topic: 'Physical Properties of Arenes'
    },
    {
      id: 'mcq-t18-6',
      stem: 'What is the main product of catalytic reforming of hexane to produce benzene?',
      options: [
        'Methylbenzene',
        'Benzene',
        'Ethylene (ethene)',
        'Hydrogen gas',
        'Propane'
      ],
      correctAnswer: 1,
      rationale: 'Catalytic reforming of hexane (C₆H₁₄) produces benzene (C₆H₆) plus hydrogen gas (4H₂). The hexane undergoes dehydrocyclisation, forming the aromatic benzene ring. This process is a key industrial method for manufacturing arenes.',
      topic: 'Manufacturing Arenes'
    },
    {
      id: 'mcq-t18-7',
      stem: 'What process converts methylbenzene back to benzene industrially?',
      options: [
        'Catalytic hydrogenation',
        'Dehydrocyclisation',
        'Oxidation',
        'Catalytic cracking',
        'Steam reforming'
      ],
      correctAnswer: 2,
      rationale: 'Dealkylation is the process used to convert methylbenzene to benzene. It involves reacting methylbenzene with hydrogen gas over a silica/alumina catalyst at 550–650°C: C₆H₅CH₃ + H₂ → C₆H₆ + CH₄. This strips the methyl group to produce more valuable benzene.',
      topic: 'Manufacturing Arenes'
    },
    {
      id: 'mcq-t18-8',
      stem: 'Who discovered benzene and in what year?',
      options: [
        'Michael Faraday (1825)',
        'August Kekulé (1865)',
        'Friedrich Wöhler (1833)',
        'Robert Bunsen (1797)',
        'Joseph Priestley (1774)'
      ],
      correctAnswer: 0,
      rationale: 'Michael Faraday isolated benzene in 1825. August Kekulé proposed the incorrect alternating double-bond structure in 1865. The delocalised π electron model we use today was developed later to explain benzene\'s actual structure and properties.',
      topic: 'Manufacturing Arenes'
    },
    {
      id: 'mcq-t18-9',
      stem: 'What was Kekulé\'s proposed structure for benzene?',
      options: [
        'Three C=C double bonds and three C–C single bonds arranged alternately',
        'Six identical C–C bonds of intermediate length',
        'A hexagon with a circle representing delocalised electrons',
        'A benzene ring with alternating single and triple bonds'
      ],
      correctAnswer: 1,
      rationale: 'Kekulé proposed that benzene had three C=C double bonds and three C–C single bonds arranged alternately. This was incorrect — the correct structure is a hexagon with a circle representing delocalised π electrons (all six C–C bonds are identical, at ~139 pm).',
      topic: 'Aromatic vs Aliphatic Compounds'
    },

    // =======================================================================
    // SUBTOPIC 1: sp² Hybridisation in Benzene
    // =======================================================================
    {
      id: 'mcq-t18-10',
      stem: 'What is the hybridisation of each carbon atom in benzene?',
      options: [
        'sp³',
        'sp²',
        'sp',
        'sp³d'
      ],
      correctAnswer: 1,
      rationale: 'Each carbon in benzene is sp² hybridised. Three of its four valence electrons form three sp² hybrid orbitals arranged trigonally in the plane of the ring (120° bond angles). The remaining p orbital extends perpendicular to the ring plane.',
      topic: 'sp² Hybridisation in Benzene'
    },
    {
      id: 'mcq-t18-11',
      stem: 'How many bonding π molecular orbitals (MOs) does benzene have?',
      options: [
        '1 bonding MO',
        '2 bonding MOs',
        '3 bonding MOs',
        '4 bonding MOs',
        '6 bonding MOs'
      ],
      correctAnswer: 2,
      rationale: 'Benzene has 3 bonding π molecular orbitals (lower energy, filled) that accommodate all 6 π electrons. The 3 antibonding MOs are empty. Hückel\'s 4n+2 rule (n=1 gives 6 electrons) confirms benzene is aromatic.',
      topic: 'sp² Hybridisation in Benzene'
    },
    {
      id: 'mcq-t18-12',
      stem: 'What is the approximate stabilisation energy of benzene?',
      options: [
        '75 kJ/mol',
        '100 kJ/mol',
        '152 kJ/mol',
        '208 kJ/mol'
      ],
      correctAnswer: 2,
      rationale: 'The stabilisation energy (also called resonance energy) of benzene is approximately 152 kJ/mol. This is calculated from the difference between the measured enthalpy of hydrogenation (−208 kJ/mol) and the predicted value if benzene had three localised C=C double bonds (−360 kJ/mol). 152 = 360 − 208.',
      topic: 'sp² Hybridisation in Benzene'
    },
    {
      id: 'mcq-t18-13',
      stem: 'What does Hückel\'s 4n+2 rule predict about benzene?',
      options: [
        'Benzene is non-aromatic',
        'Benzene is anti-aromatic',
        'Benzene is aromatic with 6 π electrons',
        'Benzene is aromatic with 8 π electrons'
      ],
      correctAnswer: 2,
      rationale: 'Hückel\'s 4n+2 rule predicts that a compound is aromatic if it has 4n+2 π electrons. For benzene, n=1 (one ring), so 4(1)+2 = 6 π electrons, confirming benzene is aromatic.',
      topic: 'sp² Hybridisation in Benzene'
    },
    {
      id: 'mcq-t18-14',
      stem: 'In the delocalised π electron model, how are the π electrons distributed?',
      options: [
        'Localised between adjacent carbon pairs',
        'Above and below the ring plane only',
        'Over all 6 carbons of the ring equally',
        'In bonding MOs that extend over the ring'
      ],
      correctAnswer: 2,
      rationale: 'The π electrons are delocalised — they occupy molecular orbitals that extend over all 6 carbon atoms in the benzene ring, above and below the plane. They are not confined between specific adjacent carbons as in a localised C=C double bond.',
      topic: 'sp² Hybridisation in Benzene'
    },

    // =======================================================================
    // SUBTOPIC 2: Alkene Reactivity vs Benzene
    // =======================================================================
    {
      id: 'mcq-t18-15',
      stem: 'What happens when bromine water is added to ethene at room temperature?',
      options: [
        'No reaction occurs',
        'The bromine water is decolourised slowly',
        'A white precipitate forms',
        'The solution remains orange/brown',
        'Effervescence (bubbling) is observed'
      ],
      correctAnswer: 1,
      rationale: 'Ethene undergoes electrophilic addition with bromine water. The C=C double bond breaks, Br₂ is consumed, and the orange/brown colour of bromine water decolourises (or becomes pale yellow) as dibromoethane forms. No precipitate is produced in this reaction.',
      topic: 'Alkene Reactivity: Addition Reactions'
    },
    {
      id: 'mcq-t18-16',
      stem: 'What happens when bromine water is added to benzene at room temperature?',
      options: [
        'Benzene undergoes addition and decolourises bromine water',
        'A white precipitate of dibromobenzene forms',
        'Benzene undergoes substitution without colour change',
        'A catalyst is required for the reaction to occur',
        'Hydrogen bromide gas is evolved'
      ],
      correctAnswer: 2,
      rationale: 'Benzene does NOT decolourise bromine water because it undergoes electrophilic substitution, not addition. No white precipitate forms. A Lewis acid catalyst (AlBr₃ or FeBr₃) is required to activate Br₂, and HBr gas is produced as a byproduct.',
      topic: 'Alkene Reactivity: Substitution vs Addition'
    },
    {
      id: 'mcq-t18-17',
      stem: 'Why does benzene undergo electrophilic substitution instead of addition?',
      options: [
        'Benzene has only single C–C bonds',
        'The π electrons in benzene are localised between each pair of carbons',
        'Addition reactions are always more favourable than substitution',
        'Substitution preserves the aromatic ring and its stabilisation energy',
        'Benzene is less reactive than alkenes'
      ],
      correctAnswer: 2,
      rationale: 'Benzene prefers substitution because it preserves the aromatic ring (delocalised π system). Addition would destroy the aromaticity and lose ~152 kJ/mol of stabilisation energy. Electrophilic substitution temporarily disrupts the ring but regenerates it after proton loss, maintaining stability.',
      topic: 'Alkene Reactivity: Substitution vs Addition'
    },
    {
      id: 'mcq-t18-18',
      stem: 'What type of Lewis acid catalyst is commonly used for benzene bromination?',
      options: [
        'AlCl₃',
        'FeCl₃',
        'FeBr₃',
        'Al₂O₃',
        'Iron filings'
      ],
      correctAnswer: 2,
      rationale: 'FeBr₃ (iron(III) bromide) or AlBr₃ are the common Lewis acid catalysts. Iron filings react with Br₂ in situ to form FeBr₃. AlCl₃ and FeCl₃ are also effective for other halogenations. Al₂O₃ is less commonly used for bromination.',
      topic: 'Alkene Reactivity: Substitution vs Addition'
    },

    // =======================================================================
    // SUBTOPIC 3: EAS Reactions
    // =======================================================================
    {
      id: 'mcq-t18-19',
      stem: 'What is the electrophile formed during nitration of benzene?',
      options: [
        'NO₂⁺',
        'NO₃',
        'NO',
        'HNO₃⁺',
        'Br⁺'
      ],
      correctAnswer: 0,
      rationale: 'During nitration, concentrated HNO₃ and conc H₂SO₄ react to form the nitronium ion (NO₂⁺). The sulphuric acid acts as a catalyst and dehydrating agent. The actual electrophile that attacks the benzene ring is NO₂⁺.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-20',
      stem: 'What is the optimal temperature range for benzene nitration to avoid polynitration?',
      options: [
        '20–30°C',
        '40–50°C',
        '50–60°C',
        '60–80°C'
      ],
      correctAnswer: 1,
      rationale: 'The temperature is kept at 50–60°C, usually around 50°C, to produce predominantly nitrobenzene (monosubstitution). Higher temperatures (>60°C) can lead to dinitrobenzene or trinitrobenzene (polynitration) because once a nitro group is attached, it deactivates the ring, but further nitration is still possible at elevated temperatures.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-21',
      stem: 'What is the product of benzene bromination?',
      options: [
        'Bromobenzene',
        'Dibromobenzene',
        'Tribromobenzene',
        'C₆H₅Br',
        'C₆H₄Br₂'
      ],
      correctAnswer: 0,
      rationale: 'The product is bromobenzene (C₆H₅Br). One hydrogen atom is replaced by bromine. Polysubstitution can occur if excess bromine is used, but under controlled conditions with a Lewis acid catalyst and moderate temperatures, bromobenzene is the main product.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-22',
      stem: 'What is a key requirement for Friedel-Crafts reactions?',
      options: [
        'Aqueous conditions',
        'High pressure',
        'Elevated temperature',
        'Acidic conditions',
        'Anhydrous conditions'
      ],
      correctAnswer: 3,
      rationale: 'Friedel-Crafts reactions require strictly anhydrous conditions because Lewis acid catalysts (AlCl₃, AlBr₃, FeCl₃) react rapidly with water to form hydroxides and be destroyed: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl. This destroys the catalyst and stops the reaction.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-23',
      stem: 'In Friedel-Crafts acylation, what type of compound is produced?',
      options: [
        'Alkylbenzene',
        'Aryl halide',
        'Aryl ketone',
        'Carboxylic acid',
        'Aldehyde'
      ],
      correctAnswer: 2,
      rationale: 'Friedel-Crafts acylation produces an aryl ketone (also called an aromatic ketone). The acyl group (–COR) is transferred to the benzene ring, creating a ketone functional group (C₆H₅COR). For example, benzene + acetyl chloride (CH₃COCl) → acetophenone (C₆H₅COCH₃).',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-24',
      stem: 'What advantage does acylation have over alkylation in terms of polysubstitution?',
      options: [
        'Acylation is faster',
        'Acylation has higher yield',
        'Acylation produces only monosubstituted products',
        'Acyl groups are electron-withdrawing',
        'Alkylation is reversible'
      ],
      correctAnswer: 2,
      rationale: 'Acylation has several advantages: (1) The acyl group is electron-withdrawing due to the adjacent C=O bond, which deactivates the ring towards further substitution, preventing polyacylation. (2) The reaction is generally faster because the acyl chloride is more reactive than a haloalkane. (3) Only monosubstituted products form, avoiding mixtures. (4) Alkylation can be reversible, leading to isomerisation and poor yields.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-25',
      stem: 'What is the electrophile in sulphonation of benzene?',
      options: [
        'SO₃',
        'SO₄',
        'SO₂',
        'H₂SO₄'
      ],
      correctAnswer: 0,
      rationale: 'The electrophile in sulphonation is SO₃ (sulfur trioxide). It is generated from fuming sulphuric acid (oleum), which is SO₃ dissolved in concentrated H₂SO₄. The SO₃ attacks the benzene ring, replacing one hydrogen with –SO₃H to form benzene sulphonic acid (C₆H₅SO₃H). No separate Lewis acid catalyst is needed.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },
    {
      id: 'mcq-t18-26',
      stem: 'What happens when an alkyl side-chain on a benzene derivative is oxidised with alkaline KMnO₄ under reflux?',
      options: [
        'The entire side-chain is converted to an alcohol',
        'The side-chain is shortened by one carbon',
        'A carboxylic acid forms',
        'Only the carbon directly attached to the ring remains',
        'The benzene ring is destroyed'
      ],
      correctAnswer: 2,
      rationale: 'When alkylbenzenes are oxidised with alkaline KMnO₄ under reflux then acidified, the entire alkyl side-chain (no matter how long) is oxidised all the way down to a single carboxyl group (–COOH). The product is benzoic acid. Only the carbon atoms of the benzene ring remain unaffected.',
      topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
    },

    // =======================================================================
    // SUBTOPIC 4: Phenol Structure & Physical Properties
    // =======================================================================
    {
      id: 'mcq-t18-27',
      stem: 'What effect does delocalisation of an oxygen lone pair into the benzene ring have on phenol?',
      options: [
        'Increases ring electron density',
        'Decreases ring electron density',
        'Has no effect on electron density',
        'Strengthens the O–H bond',
        'Makes phenol less reactive'
      ],
      correctAnswer: 0,
      rationale: 'The oxygen lone pair on the –OH group delocalises into the benzene π ring, increasing electron density on the ring. This makes phenol much more reactive towards electrophiles than benzene. The oxygen\'s electronegativity also slightly weakens the O–H bond, making phenol a weak acid (able to donate H⁺).',
      topic: 'Structure of Phenol'
    },
    {
      id: 'mcq-t18-28',
      stem: 'Why does phenol have a significantly higher boiling point (182°C) compared to methylbenzene (111°C)?',
      options: [
        'Phenol has a higher molecular mass',
        'Phenol can form stronger intermolecular forces',
        'Methylbenzene has a symmetrical structure that packs more tightly',
        'Phenol has stronger London dispersion forces',
        'Methylbenzene has stronger hydrogen bonding'
      ],
      correctAnswer: 1,
      rationale: 'Phenol has a much higher boiling point because its –OH group allows for hydrogen bonding between molecules. Intermolecular hydrogen bonds are much stronger than London dispersion forces. Methylbenzene lacks hydrogen bonding, and although it has slightly stronger dispersion forces (due to larger size), this does not compensate for the absence of hydrogen bonding. The highly symmetrical methylbenzene also packs more efficiently as a solid, which would normally increase its boiling point, but the absence of hydrogen bonding in phenol is the dominant factor.',
      topic: 'Structure of Phenol'
    },
    {
      id: 'mcq-t18-29',
      stem: 'What is the solubility of phenol in water approximately?',
      options: [
        '8 g per 100 g of water',
        '84 g per 100 g of water',
        'Completely insoluble',
        'Highly soluble',
        'Form a separate aqueous layer'
      ],
      correctAnswer: 0,
      rationale: 'Phenol is moderately soluble in water at approximately 8 g per 100 g of water (about 8%). The –OH group can form hydrogen bonds with water molecules, but the large hydrophobic benzene ring limits overall solubility. If too much phenol is added, a two-layer system forms: a top aqueous phenol layer and a bottom layer of water dissolved in liquid phenol.',
      topic: 'Structure of Phenol'
    },
    {
      id: 'mcq-t18-30',
      stem: 'What is the physical appearance of pure phenol?',
      options: [
        'White crystalline solid',
        'Colourless liquid',
        'Pale pink crystals',
        'Yellow oil',
        'Colourless crystals'
      ],
      correctAnswer: 0,
      rationale: 'Pure phenol is a white crystalline solid at room temperature. It often appears slightly pink or discoloured due to slow oxidation in air. It has a characteristic disinfectant smell (historically called carbolic acid).',
      topic: 'Structure of Phenol'
    },

    // =======================================================================
    // SUBTOPIC 5: Phenol Reactivity (Acidity & Bromination)
    // =======================================================================
    {
      id: 'mcq-t18-31',
      stem: 'What type of directing group is the hydroxyl (–OH) group in phenol?',
      options: [
        'Ortho/para director',
        'Meta director',
        'Activating group',
        'Deactivating group',
        'Non-directing group'
      ],
      correctAnswer: 0,
      rationale: 'The –OH group in phenol is a strong ortho/para (2,4-directing) and activating group. It increases electron density at the ortho and para positions (2, 4, and 6) relative to the meta positions (3, 5), making electrophilic attack much more favourable at these positions.',
      topic: 'Phenol Reactivity'
    },
    {
      id: 'mcq-t18-32',
      stem: 'When phenol reacts with bromine water, what is the immediate observation?',
      options: [
        'The bromine water is decolourised',
        'A yellow/orange precipitate forms',
        'A white precipitate forms',
        'Gas bubbles are produced',
        'No visible change occurs'
      ],
      correctAnswer: 1,
      rationale: 'When bromine water is added to phenol, the orange/brown bromine water is immediately decolourised, and a white precipitate of 2,4,6-tribromophenol forms instantly. No gas is evolved in this reaction — the decolourisation and precipitation are the key observations.',
      topic: 'Phenol Reactivity'
    },
    {
      id: 'mcq-t18-33',
      stem: 'What product is formed when phenol reacts with dilute nitric acid at room temperature?',
      options: [
        '2-nitrophenol only',
        '4-nitrophenol only',
        'A mixture of 2- and 4-nitrophenol',
        '2,4,6-trinitrophenol (picric acid)',
        'Nitrobenzene'
      ],
      correctAnswer: 1,
      rationale: 'Phenol reacts with dilute nitric acid at room temperature to give a mixture of 2-nitrophenol and 4-nitrophenol. The –OH group activates the ring and directs to the 2 and 4 positions, so substitution occurs predominantly at these positions. Concentrated nitric acid and higher temperatures lead to 2,4,6-trinitrophenol (picric acid).',
      topic: 'Phenol Reactivity'
    },
    {
      id: 'mcq-t18-34',
      stem: 'Why is phenol more acidic than a typical aliphatic alcohol like ethanol?',
      options: [
        'Phenol has a pKa of ~10',
        'The phenoxide ion is stabilised by resonance',
        'Phenol can form hydrogen bonds with water',
        'Ethanol cannot lose a proton easily',
        'Phenol has a stronger O–H bond polarity'
      ],
      correctAnswer: 1,
      rationale: 'Phenol is more acidic (pKa ~10) than aliphatic alcohols (pKa ~16) because the phenoxide ion (C₆H₅O⁻) is stabilised by delocalisation of the negative charge into the benzene ring. This resonance stabilisation makes it easier for phenol to donate a proton and form the phenoxide ion.',
      topic: 'Acidity of Phenol'
    },

    // =======================================================================
    // SUBTOPIC 6: Introduction to Aryl Halides
    // =======================================================================
    {
      id: 'mcq-t18-35',
      stem: 'What is the effect of delocalising a halogen lone pair into the benzene ring?',
      options: [
        'Strengthens the carbon-halogen bond',
        'Weakens the carbon-halogen bond',
        'Has no effect on bond strength',
        'Makes the molecule more polar',
        'Reduces chemical reactivity'
      ],
      correctAnswer: 0,
      rationale: 'The delocalisation of a halogen lone pair into the benzene ring gives the carbon-halogen bond partial double-bond character, making it stronger than in a standard alkyl halide. This makes aryl halides resistant to nucleophilic substitution.',
      topic: 'Introduction to Aryl Halides'
    },
    {
      id: 'mcq-t18-36',
      stem: 'How does the boiling point trend change across Cl, Br, and I in aryl halides?',
      options: [
        'Increases with halogen size only',
        'Decreases with halogen size',
        'Follows the halogen periodic trend',
        'Increases then decreases',
        'No clear pattern'
      ],
      correctAnswer: 0,
      rationale: 'Boiling points increase from chlorobenzene (132°C) to bromobenzene (156°C) to iodobenzene (189°C). This trend follows the increase in London dispersion forces as the halogen atom gets larger (more electrons), creating stronger intermolecular attractions.',
      topic: 'Introduction to Aryl Halides'
    },
    {
      id: 'mcq-t18-37',
      stem: 'Why are simple aryl halides like chlorobenzene unreactive towards nucleophiles?',
      options: [
        'Strong C–X bond requires more energy to break',
        'The π cloud repels approaching nucleophiles',
        'The molecule is non-polar',
        'The reaction has a high activation energy',
        'All of the above are true'
      ],
      correctAnswer: 2,
      rationale: 'Aryl halides are unreactive to nucleophiles due to two main factors: (1) The carbon-halogen bond is strengthened by partial double-bond character from lone pair delocalisation, making it harder to break. (2) The delocalised π electron cloud above and below the ring repels approaching nucleophiles (which are often negatively charged). The molecule is also non-polar with no permanent dipole to attract nucleophiles.',
      topic: 'Introduction to Aryl Halides'
    },
    {
      id: 'mcq-t18-38',
      stem: 'What is the solubility of simple aryl halides like chlorobenzene in water?',
      options: [
        'Highly soluble',
        'Moderately soluble',
        'Slightly soluble',
        'Practically insoluble',
        'Form two liquid layers'
      ],
      correctAnswer: 3,
      rationale: 'Simple aryl halides are highly insoluble in water. They cannot form hydrogen bonds with water, and breaking water\'s hydrogen bonding network requires more energy than is released by the weak van der Waals dispersion forces that would form. A dense, oily layer typically separates from aqueous solution.',
      topic: 'Introduction to Aryl Halides'
    },
    {
      id: 'mcq-t18-39',
      stem: 'How is iodobenzene commonly prepared?',
      options: [
        'Direct electrophilic substitution of benzene',
        'Reaction of iodobenzene with chlorine',
        'Electrolysis of sodium iodide',
        'From iodoalkane via substitution',
        'Using benzenediazonium salt'
      ],
      correctAnswer: 3,
      rationale: 'Iodobenzene is commonly prepared by reacting ice-cold benzenediazonium chloride with potassium iodide (KI) solution. The diazonium ion (C₆H₅N₂⁺) reacts with iodide ion (I⁻) to form iodobenzene and nitrogen gas (N₂), which bubbles out (effervescence). This method avoids the challenges of direct electrophilic substitution with iodine.',
      topic: 'Introduction to Aryl Halides'
    },

    // =======================================================================
    // SUBTOPIC 7: Phenol Ring Reactions (Bromine Water & Nitration)
    // =======================================================================
    {
      id: 'mcq-t18-40',
      stem: 'Compared to benzene, why does phenol react with bromine water at room temperature without a catalyst?',
      options: [
        'Phenol has localised π electrons',
        'The –OH group makes phenol nucleophilic',
        'Bromine water is more reactive towards phenol',
        'The aromatic ring in phenol is less stable',
        'Phenol has a higher electron density'
      ],
      correctAnswer: 0,
      rationale: 'The –OH group in phenol donates electron density into the benzene ring via resonance, making it highly electron-rich and nucleophilic. This attracts the electrophilic bromine strongly, allowing the reaction to proceed at room temperature without a catalyst. Benzene lacks this activation and requires a Lewis acid catalyst to polarise and activate Br₂.',
      topic: 'Phenol Ring Reactions'
    },
    {
      id: 'mcq-t18-41',
      stem: 'When phenol reacts with concentrated nitric acid, what is the main organic product?',
      options: [
        '2-nitrophenol',
        '4-nitrophenol',
        '2,4,6-trinitrophenol (picric acid)',
        'Nitrobenzene',
        'Benzenediazonium salt'
      ],
      correctAnswer: 2,
      rationale: 'When phenol reacts with concentrated nitric acid (not diluted), the main product is 2,4,6-trinitrophenol, also known as picric acid. The three nitro groups replace hydrogen atoms at positions 2, 4, and 6 on the ring. This is a highly nitrated compound used in explosives.',
      topic: 'Phenol Ring Reactions'
    },

    // =======================================================================
    // SUBTOPIC 8: Acidity of Phenol
    // =======================================================================
    {
      id: 'mcq-t18-42',
      stem: 'What happens when phenol reacts with sodium carbonate (Na₂CO₃) solution?',
      options: [
        'Effervescence of CO₂ gas occurs',
        'A colourless solution is produced',
        'The phenol dissolves',
        'No reaction occurs',
        'A white precipitate forms'
      ],
      correctAnswer: 3,
      rationale: 'Phenol does NOT react with sodium carbonate (Na₂CO₃). Although phenol is weakly acidic, it is not acidic enough to displace CO₂ from carbonate. No effervescence (bubbling) is observed. Carboxylic acids would produce CO₂ gas with carbonate.',
      topic: 'Acidity of Phenol'
    },
    {
      id: 'mcq-t18-43',
      stem: 'What is the equation for the reaction of phenol with sodium hydroxide?',
      options: [
        'C₆H₅OH + NaOH → C₆H₅ONa + H₂O',
        'C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O',
        'C₆H₅OH + NaOH → Na⁺ + C₆H₅O⁻',
        'C₆H₅OH + NaOH → C₆H₅ONa + H⁺'
      ],
      correctAnswer: 0,
      rationale: 'Phenol reacts with sodium hydroxide (NaOH) to form sodium phenoxide and water: C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O. Sodium phenoxide is a salt where Na⁺ is the cation and C₆H₅O⁻ is the anion. The sodium ion (Na⁺) is shown as a spectator ion.',
      topic: 'Acidity of Phenol'
    },
    {
      id: 'mcq-t18-44',
      stem: 'What is the pH range of a dilute aqueous phenol solution?',
      options: [
        'pH 1–2',
        'pH 3–4',
        'pH 5–6',
        'pH 7–8',
        'pH 9–10'
      ],
      correctAnswer: 2,
      rationale: 'A dilute aqueous phenol solution has a pH in the range of 5–6. Phenol is a weak acid (pKa ≈ 10), so it partially dissociates in water to produce a slightly acidic solution. The exact pH depends on concentration.',
      topic: 'Acidity of Phenol'
    },

    // =======================================================================
    // SUBTOPIC 9: Phenol Other Reactions (Esterification & Iron Test)
    // =======================================================================
    {
      id: 'mcq-t18-45',
      stem: 'Why does phenol react slowly with carboxylic acids like ethanoic acid?',
      options: [
        'Phenol is less nucleophilic than alkoxide ions',
        'The –OH group deactivates the ring',
        'Carboxylic acids are weak electrophiles',
        'The reaction produces water as a byproduct',
        'Phenol has a high activation energy'
      ],
      correctAnswer: 0,
      rationale: 'Phenol reacts slowly with carboxylic acids because the –OH group deactivates the benzene ring toward electrophilic attack. To speed up the reaction, phenol is first converted to sodium phenoxide (C₆H₅O⁻Na⁺) using NaOH, which is a much stronger nucleophile than the carboxylic acid. The phenoxide ion then attacks the acylating agent rapidly.',
      topic: 'Phenol Other Reactions'
    },
    {
      id: 'mcq-t18-46',
      stem: 'What reagent and observation characterises a positive test for phenol?',
      options: [
        'Sodium carbonate (Na₂CO₃) and CO₂ gas',
        'Tollens\' reagent',
        'Ferric chloride (FeCl₃) and violet colour',
        'Iron(III) chloride (FeCl₃) and violet solution',
        'Bromine water and decolourisation'
      ],
      correctAnswer: 1,
      rationale: 'Iron(III) chloride (FeCl₃) solution is used as a chemical test for phenols. When added to phenol, it forms an intense violet/purple coloured complex due to coordination between Fe³⁺ ions and the oxygen lone pairs on the phenol –OH group. This is characteristic of compounds where an –OH group is directly attached to a benzene ring.',
      topic: 'Phenol Other Reactions'
    },

    // =======================================================================
    // SUBTOPIC 10: Methylbenzene Free Radical Substitution
    // =======================================================================
    {
      id: 'mcq-t18-47',
      stem: 'What condition is required for free radical substitution of the methyl group in methylbenzene?',
      options: [
        'Presence of a Lewis acid catalyst',
        'High temperature',
        'Aqueous conditions',
        'Absence of water',
        'Presence of oxygen'
      ],
      correctAnswer: 2,
      rationale: 'Free radical substitution of the methyl group in methylbenzene requires UV light (ultraviolet radiation). The reaction proceeds via a radical chain mechanism (initiation, propagation, termination). No Lewis acid catalyst should be present — if AlCl₃ were present, electrophilic substitution of the benzene ring would occur instead.',
      topic: 'Methylbenzene Free Radical Substitution'
    },
    {
      id: 'mcq-t18-48',
      stem: 'What is the main organic product when methylbenzene reacts with chlorine under UV light?',
      options: [
        'Chloromethylbenzene',
        '(Chloromethyl)benzene',
        'Dichloromethylbenzene',
        'Benzyl chloride',
        'Methyl chloride'
      ],
      correctAnswer: 0,
      rationale: 'The main product is (chloromethyl)benzene, where brackets indicate the chlorine is attached to the methyl group, not directly to the benzene ring. One hydrogen from the methyl group is replaced by a chlorine atom, forming –CH₂Cl side chain.',
      topic: 'Methylbenzene Free Radical Substitution'
    },
    {
      id: 'mcq-t18-49',
      stem: 'What distinguishes ring substitution from side-chain substitution in methylbenzene reactions with halogens?',
      options: [
        'The identity of the electrophile',
        'The presence or absence of light',
        'The reaction conditions (temperature, pressure)',
        'The type of catalyst used',
        'The position of the halogen atom in the product'
      ],
      correctAnswer: 1,
      rationale: 'Ring substitution occurs with a Lewis acid catalyst (e.g., AlCl₃, FeBr₃) in the dark, producing 2- and 4-halogenomethylbenzene (halogen attached to ring). Side-chain substitution occurs with UV light (no catalyst) at elevated temperature, producing (chloromethyl)benzene (halogen on side chain). The key distinctions are: ring vs side chain position, dark vs light, and presence vs absence of catalyst.',
      topic: 'Methylbenzene Free Radical Substitution'
    },
  ],

    // =======================================================================
    // FILL-IN-THE-BLANK EXERCISES
    // =======================================================================
    fillblank: [
      {
        id: 'fb-t18-1',
        stem: 'Complete the following statement about benzene nomenclature.',
        template: 'A benzene ring with two substituents is named as __BLANK__-dibromobenzene.',
        blanks: [{ answer: '1,2' }],
        rationale: 'When two identical substituents are on a benzene ring, the name uses the prefix "di-" to indicate this, followed by the positions. For example, 1,2-dibromobenzene has bromine atoms at positions 1 and 2.',
        topic: 'Aromatic vs Aliphatic Compounds'
      },
      {
        id: 'fb-t18-2',
        stem: 'Complete the statement about benzene representation.',
        template: 'Benzene is correctly represented as a hexagon with a circle, which shows __BLANK__ π electrons delocalised above and below the ring.',
        blanks: [{ answer: '6' }],
        rationale: 'The circle inside the hexagon represents the delocalised π electron system. Benzene has 6 π electrons (one from each carbon\'s p orbital), which are evenly distributed around the entire ring, both above and below the plane.',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fb-t18-3',
        stem: 'Fill in the missing bond length information.',
        template: 'All six C–C bonds in benzene have the same length of approximately __BLANK__ pm.',
        blanks: [{ answer: '139' }],
        rationale: 'X-ray diffraction studies show that all six carbon-carbon bonds in benzene have an identical length of approximately 139 pm. This is intermediate between the length of a C=C double bond (~134 pm) and a C–C single bond (~154 pm), confirming electron delocalisation.',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fb-t18-4',
        stem: 'Complete the equation for the hydrogenation of benzene.',
        template: 'C₆H₆ + __BLANK__H₂ → C₆H₁₂.  ΔH = __BLANK__ kJ mol⁻¹.',
        blanks: [{ answer: '3' }, { answer: '−208' }],
        rationale: 'The hydrogenation of benzene requires 3 moles of H₂: C₆H₆ + 3H₂ → C₆H₁₂ (cyclohexane). The measured enthalpy change is −208 kJ mol⁻¹, which is much less exothermic than predicted for three C=C double bonds (−360 kJ mol⁻¹).',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fb-t18-5',
        stem: 'Fill in the blank about stabilisation energy.',
        template: 'The stabilisation energy of benzene is approximately __BLANK__ kJ mol⁻¹.',
        blanks: [{ answer: '152' }],
        rationale: 'The difference between the predicted enthalpy of hydrogenation (−360 kJ/mol for three C=C bonds) and the measured value (−208 kJ/mol) is the stabilisation energy: 360 − 208 = 152 kJ/mol. This energy represents the extra stability benzene gains from delocalisation of its π electrons.',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fb-t18-6',
        stem: 'Complete the statement about aromaticity.',
        template: 'A compound is aromatic if it follows Hückel\'s __BLANK__ rule and has __BLANK__ π electrons.',
        blanks: [{ answer: '4n+2' }, { answer: '4n+2' }],
        rationale: 'Hückel\'s rule states that a monocyclic planar compound is aromatic if it has 4n+2 π electrons. For benzene with one ring (n=1): 4(1)+2 = 6 π electrons, confirming aromaticity. Some students incorrectly think it should be 4n (for a single ring).',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fb-t18-7',
        stem: 'Complete the definition of electrophilic aromatic substitution.',
        template: 'Electrophilic aromatic substitution is a reaction where an __BLANK__ attacks the benzene ring, displacing a __BLANK__.',
        blanks: [{ answer: 'electrophile' }, { answer: 'hydrogen' }],
        rationale: 'In electrophilic aromatic substitution (EAS), an electron-deficient species (electrophile) attacks the electron-rich benzene ring, displacing a hydrogen atom (as H⁺). The aromatic system is regenerated when the proton is lost.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fb-t18-8',
        stem: 'Fill in the conditions for benzene bromination.',
        template: 'Benzene + Br₂ + __BLANK__ catalyst (anhydrous, room temp) → C₆H₅Br + HBr.',
        blanks: [{ answer: 'AlBr₃ or FeBr₃' }],
        rationale: 'Benzene bromination requires a Lewis acid catalyst (halogen carrier) such as AlBr₃ or FeBr₃. Iron filings can also be used as they react with Br₂ to form FeBr₃ in situ. The reaction must be carried out under anhydrous conditions to prevent catalyst destruction.',
        topic: 'Alkene Reactivity: Substitution vs Addition'
      },
      {
        id: 'fb-t18-9',
        stem: 'Complete the nitration of benzene equation.',
        template: 'C₆H₆ + HNO₃ + H₂SO₄ → C₆H₅NO₂ + __BLANK__. Conditions: __BLANK__°C.',
        blanks: [{ answer: 'H₂O' }, { answer: '50–60' }],
        rationale: 'The product of benzene nitration is nitrobenzene (C₆H₅NO₂) and water is formed. The reaction uses concentrated nitric acid and concentrated sulphuric acid at 50–60°C. The sulphuric acid acts as a catalyst and dehydrating agent, producing water (H₂O).',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fb-t18-10',
        stem: 'Fill in the products of Friedel-Crafts reactions.',
        template: '__BLANK__ + RCl + AlCl₃ → C₆H₅R + HCl. Product: aryl __BLANK__.',
        blanks: [{ answer: 'RCl' }, { answer: 'alkane' }, { answer: 'ketone' }],
        rationale: 'In Friedel-Crafts alkylation, a haloalkane (RCl) reacts with benzene and AlCl₃ catalyst to produce an alkylbenzene (C₆H₅R) and HCl. In Friedel-Crafts acylation, an acyl chloride (RCOCl) reacts with benzene and AlCl₃ to produce an aryl ketone (C₆H₅COR) and HCl.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fb-t18-11',
        stem: 'Complete the sulphonation of benzene equation.',
        template: 'C₆H₆ + SO₃ → C₆H₅SO₃H. Reagent: __BLANK__ (oleum). Conditions: __BLANK__°C.',
        blanks: [{ answer: 'fuming H₂SO₄' }, { answer: '~40' }],
        rationale: 'Benzene sulphonation uses fuming sulphuric acid (oleum), which is SO₃ dissolved in concentrated H₂SO₄. The electrophile is SO₃ and the product is benzene sulphonic acid (C₆H₅SO₃H) at approximately 40°C.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fb-t18-12',
        stem: 'Complete the side-chain oxidation equation for an alkylbenzene.',
        template: 'C₆H₅R + alkaline __BLANK__/reflux → C₆H₅COOH + __BLANK__ precipitate. Then acidified with dilute H₂SO₄.',
        blanks: [{ answer: 'KMnO₄' }, { answer: 'MnO₂' }],
        rationale: 'When alkylbenzenes are oxidised with alkaline potassium manganate(VII) (KMnO₄) under reflux, the entire alkyl side-chain is converted to a carboxyl group, forming benzoic acid (C₆H₅COOH). The purple colour of MnO₄⁻ ions is replaced by a dark brown precipitate of manganese(IV) oxide (MnO₂).',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
    ],

    // =======================================================================
    // DRAG-AND-DROP EXERCISES
    // =======================================================================
    dragdrop: [
      {
        id: 'dd-t18-1',
        stem: 'Classify each compound as aromatic or aliphatic.',
        categories: ['Aromatic', 'Aliphatic'],
        items: [
          { text: 'Benzene', category: 'Aromatic' },
          { text: 'Phenol', category: 'Aromatic' },
          { text: 'Nitrobenzene', category: 'Aromatic' },
          { text: 'Toluene', category: 'Aromatic' },
          { text: 'Cyclohexane', category: 'Aliphatic' },
          { text: 'Butane', category: 'Aliphatic' },
          { text: 'Phenylethene', category: 'Aromatic' },
          { text: 'Ethanol', category: 'Aliphatic' },
          { text: 'Chlorobenzene', category: 'Aromatic' },
          { text: 'Hexane', category: 'Aliphatic' },
          { text: '1,2-Dichloroethene', category: 'Aliphatic' },
          { text: '2-Nitrophenol', category: 'Aromatic' },
          { text: 'Picric acid', category: 'Aromatic' }
        ]
      },
      {
        id: 'dd-t18-2',
        stem: 'Match each substituent to its directing effect on the benzene ring.',
        categories: ['Ortho/para director', 'Meta director', 'Deactivating group', 'Activating group'],
        items: [
          { text: '–OH (phenol)', category: 'Ortho/para director' },
          { text: '–CH₃ (methyl)', category: 'Ortho/para director' },
          { text: '–NH₂ (amino)', category: 'Ortho/para director' },
          { text: '–OR (alkoxy)', category: 'Ortho/para director' },
          { text: '–Cl (chloro)', category: 'Ortho/para director' },
          { text: '–NO₂ (nitro)', category: 'Meta director' },
          { text: '–CN (cyano)', category: 'Meta director' },
          { text: '–COOH (carboxyl)', category: 'Meta director' },
          { text: '–SO₃H (sulphonyl)', category: 'Ortho/para director' },
          { text: '–CHO (aldehyde)', category: 'Meta director' },
          { text: '–COR (acyl)', category: 'Deactivating group' }
        ]
      },
      {
        id: 'dd-t18-3',
        stem: 'Match each property to the correct type of structure or compound.',
        categories: ['Conducts electricity when molten', 'Does not conduct electricity when solid', 'Malleable and ductile', 'High melting point', 'Very low melting point', 'Conducts heat and electricity as solid', 'Insoluble in water'],
        items: [
          { text: 'Sodium chloride', category: 'Conducts electricity when molten' },
          { text: 'Phenol', category: 'Does not conduct electricity when solid' },
          { text: 'Benzene', category: 'High melting point' },
          { text: 'Iodobenzene', category: 'Very low melting point' },
          { text: 'Copper', category: 'Malleable and ductile' },
          { text: 'Aluminium', category: 'Conducts heat and electricity as solid' },
          { text: 'Magnesium oxide', category: 'Conducts electricity when molten' },
          { text: 'Diamond', category: 'Insoluble in water' },
          { text: 'Graphite', category: 'Conducts heat and electricity as solid' }
        ]
      },
      {
        id: 'dd-t18-4',
        stem: 'Drag each reaction condition to the appropriate benzene product.',
        categories: ['Bromination conditions', 'Nitration conditions', 'Friedel-Crafts conditions', 'Side-chain substitution conditions'],
        items: [
          { text: 'Br₂ + AlBr₃, room temp, anhydrous', category: 'Bromination conditions' },
          { text: 'Conc. HNO₃ + conc. H₂SO₄, 50°C', category: 'Nitration conditions' },
          { text: 'RCl + AlCl₃, anhydrous, mild heat', category: 'Friedel-Crafts conditions' },
          { text: 'Cl₂ + UV light, no catalyst, reflux', category: 'Side-chain substitution conditions' },
          { text: 'Cl₂ + AlCl₃, dark, anhydrous', category: 'Side-chain substitution conditions' }
        ]
      },
      {
        id: 'dd-t18-5',
        stem: 'Match each benzene derivative to its preparation method.',
        categories: ['Direct EAS', 'Via benzenediazonium', 'Catalytic reforming/dealkylation', 'Side-chain oxidation'],
        items: [
          { text: 'Nitrobenzene', category: 'Direct EAS' },
          { text: 'Iodobenzene', category: 'Via benzenediazonium' },
          { text: 'Benzene', category: 'Catalytic reforming/dealkylation' },
          { text: 'Benzoic acid', category: 'Side-chain oxidation' },
          { text: 'Bromobenzene', category: 'Direct EAS' },
          { text: 'Toluene', category: 'Catalytic reforming/dealkylation' },
          { text: '2-Nitrophenol', category: 'Direct EAS' },
          { text: 'Acetophenone', category: 'Direct EAS' },
          { text: '(Chloromethyl)benzene', category: 'Side-chain oxidation' }
        ]
      },
      {
        id: 'dd-t18-6',
        stem: 'Sort the reagents in order of increasing reactivity for EAS of methylbenzene.',
        categories: ['Low reactivity', 'Moderate reactivity', 'High reactivity'],
        items: [
          { text: 'Br₂ + AlBr₃ (for nitration)', category: 'Low reactivity' },
          { text: 'Cl₂ + FeCl₃ (for chlorination)', category: 'Moderate reactivity' },
          { text: 'Cl₂ + AlCl₃ (for ring substitution)', category: 'High reactivity' },
          { text: 'HNO₃ + H₂SO₄ (for sulphonation)', category: 'Moderate reactivity' },
          { text: 'Br₂ (for bromination)', category: 'High reactivity' }
        ]
      },
      {
        id: 'dd-t18-7',
        stem: 'Match each description to the correct arene/benzene isomer type.',
        categories: ['Monosubstituted benzene', 'Disubstituted benzene', 'Both are incorrect'],
        items: [
          { text: 'Only 3 isomers of 1,2-dibromobenzene exist (not 4 as Kekulé predicted)', category: 'Monosubstituted benzene' },
          { text: 'All C–C bonds in benzene are identical at 139 pm', category: 'Monosubstituted benzene' },
          { text: 'Benzene has alternating single and double bonds', category: 'Both are incorrect' },
          { text: 'Dibromobenzene has 4 positional isomers', category: 'Both are incorrect' },
          { text: 'Benzene IR spectrum has no C=C peak at 1650 cm⁻¹', category: 'Monosubstituted benzene' }
        ]
      }
    ],

    // =======================================================================
    // SEQUENCE EXERCISES
    // =======================================================================
    sequence: [
      {
        id: 'seq-t18-1',
        stem: 'Arrange the following in order of increasing melting point.',
        steps: [
          'Phenol',
          'Methylbenzene',
          'Benzene',
          'Chlorobenzene',
          'Bromobenzene',
          'Iodobenzene',
          'Ethanol',
          'Picric acid'
        ],
      },
      {
        id: 'seq-t18-2',
        stem: 'Arrange the following boiling points from lowest to highest.',
        steps: [
          'Nitrobenzene (210°C)',
          'Bromobenzene (156°C)',
          'Chlorobenzene (132°C)',
          'Iodobenzene (189°C)',
          'Toluene (111°C)',
          'Benzene (80°C)'
        ]
      },
      {
        id: 'seq-t18-3',
        stem: 'Put the following EAS reactions in order of typical reaction rate (slowest first).',
        steps: [
          'Benzene bromination (AlBr₃ catalyst)',
          'Methylbenzene chlorination (AlCl₃ catalyst)',
          'Methylbenzene bromination (UV light, side-chain)',
          'Nitrobenzene nitration (HNO₃/H₂SO₄)',
          'Toluene nitration (HNO₃/H₂SO₄)',
          'Phenol bromination (no catalyst, Br₂(aq))'
        ]
      },
      {
        id: 'seq-t18-4',
        stem: 'Arrange the following in order of decreasing reactivity for electrophilic aromatic substitution.',
        steps: [
          'Nitrobenzene',
          'Benzene',
          'Toluene',
          'Methylbenzene',
          'Phenol'
        ]
      },
      {
        id: 'seq-t18-5',
        stem: 'Put the following steps for free radical substitution of methylbenzene with Cl₂ in correct order.',
        steps: [
          'Initiation: Cl₂ → 2Cl• (UV light provides energy)',
          'Propagation 1: C₆H₅CH₃ + Cl• → C₆H₅CH₂• + HCl',
          'Propagation 2: C₆H₅CH₂• + Cl₂ → C₆H₅CH₂Cl + Cl•',
          'Termination: 2C₆H₅CH₂• → (chloromethyl)benzene'
        ]
      },
      {
        id: 'seq-t18-6',
        stem: 'Arrange the following in order of carbon-halogen bond strength (weakest first).',
        steps: [
          'C–I in iodobenzene (partial double bond, weakened by lone pair delocalisation)',
          'C–Cl in chlorobenzene (partial double bond, weakened by lone pair delocalisation)',
          'C–C in benzene (delocalised, equal length)',
          'C–Br in bromobenzene (partial double bond, weakened by lone pair delocalisation)',
          'C–C in methylbenzene (standard alkyl halide)'
        ]
      },
      {
        id: 'seq-t18-7',
        stem: 'Arrange the following in order of acidity (strongest acid first).',
        steps: [
          'Nitric acid (HNO₃)',
          'Sulphuric acid (H₂SO₄)',
          'Benzoic acid (C₆H₅COOH)',
          'Phenol (pKa ≈ 10)',
          'Ethanoic acid (CH₃COOH)',
          'Methanoic acid (HCOOH)'
        ]
      },
      {
        id: 'seq-t18-8',
        stem: 'Put the following substituents in order of activating strength (strongest activation first).',
        steps: [
          '–NH₂ (amino)',
          '–OH (hydroxyl)',
          '–CH₃ (methyl)',
          '–OR (alkoxy)',
          '–Cl (chloro)',
          '–Br (bromo)',
          '–NO₂ (nitro)'
        ]
      }
    ],

    // =======================================================================
    // KEYWORD CHECK EXERCISES
    // =======================================================================
    keyword: [
      {
        id: 'kw-t18-1',
        stem: 'Define the term "aromatic compound". [2 marks]',
        marks: 2,
        keywords: ['benzene ring', 'delocalised π electrons', 'stabilisation energy', 'Hückel 4n+2 rule'],
        modelAnswer: 'An aromatic compound contains a benzene ring in its structure. The benzene ring has a delocalised π electron system that provides extra stability (stabilisation energy ≈ 150 kJ/mol). Hückel\'s 4n+2 rule predicts aromaticity: a monocyclic planar compound with 4n+2 π electrons is aromatic (for benzene, n=1, so 4(1)+2=6 π electrons).'
      },
      {
        id: 'kw-t18-2',
        stem: 'Define the term "aliphatic compound". [2 marks]',
        marks: 2,
        keywords: ['no benzene ring', 'straight chains', 'branched chains', 'non-aromatic rings', 'acyclic compounds'],
        modelAnswer: 'An aliphatic compound does NOT contain a benzene ring. Aliphatic compounds include straight-chain alkanes, branched alkanes, alkenes, cycloalkanes (which are cyclic but not aromatic), and many other hydrocarbons. The key distinction is the absence of the delocalised π aromatic system.'
      },
      {
        id: 'kw-t18-3',
        stem: 'Explain why benzene does NOT decolourise bromine water at room temperature. [3 marks]',
        marks: 3,
        keywords: ['electrophilic substitution', 'no addition reaction', 'delocalised π system', 'stabilisation energy', 'Lewis acid catalyst'],
        modelAnswer: 'Benzene does not decolourise bromine water because it undergoes electrophilic substitution, not addition. Addition would destroy the aromatic delocalised π system (~150 kJ/mol stabilisation energy), which is energetically unfavourable. Instead, an electrophile (Br⁺ generated by Lewis acid catalyst like AlBr₃) attacks the ring, displacing a hydrogen atom. The aromatic system is regenerated after proton loss, preserving stability. A Lewis acid catalyst is required to activate Br₂.'
      },
      {
        id: 'kw-t18-4',
        stem: 'Compare the reactivity of benzene, methylbenzene, and phenol towards electrophilic aromatic substitution. [4 marks]',
        marks: 4,
        keywords: ['electron density', 'activating groups', 'deactivating groups', 'ortho/para directing', 'reactivity order'],
        modelAnswer: 'Reactivity increases with electron density on the benzene ring. Phenol (−OH) is most reactive due to strong electron donation from the oxygen lone pair into the ring, making it a 2,4-director. Methylbenzene (−CH₃) is also more reactive than benzene due to inductive electron donation and is also a 2,4-director. Benzene is least reactive. Nitrobenzene (−NO₂) is least reactive because the nitro group is electron-withdrawing and is a meta director. Reactivity order: phenol >> toluene >> benzene >> nitrobenzene.'
      },
      {
        id: 'kw-t18-5',
        stem: 'State the reagents, conditions, and product for Friedel-Crafts alkylation of benzene. [3 marks]',
        marks: 3,
        keywords: ['haloalkane', 'Lewis acid catalyst', 'anhydrous conditions', 'alkylbenzene', 'hydrogen chloride'],
        modelAnswer: 'Benzene alkylation: haloalkane (e.g., chloromethane, CH₃Cl) + AlCl₃ catalyst under anhydrous conditions → alkylbenzene (e.g., toluene) + HCl. The alkyl group is electron-donating, which activates the ring but can lead to polyalkylation if excess haloalkane is used. Reaction must be anhydrous to prevent catalyst destruction.'
      },
      {
        id: 'kw-t18-6',
        stem: 'State the reagents, conditions, and product for Friedel-Crafts acylation of benzene. [3 marks]',
        marks: 3,
        keywords: ['acyl chloride', 'acyl anhydride', 'Lewis acid catalyst', 'anhydrous conditions', 'aryl ketone'],
        modelAnswer: 'Benzene acylation: acyl chloride (e.g., acetyl chloride, CH₃COCl) + AlCl₃ catalyst under anhydrous conditions → aryl ketone (e.g., acetophenone, C₆H₅COCH₃) + HCl. The acyl group is electron-withdrawing, which deactivates the ring, preventing polyacylation and ensuring monosubstitution. Reaction must be anhydrous as AlCl₃ reacts with water.'
      },
      {
        id: 'kw-t18-7',
        stem: 'Explain why only 3 isomers of 1,2-dibromobenzene exist, not 4 as Kekulé predicted. [4 marks]',
        marks: 4,
        keywords: ['Kekulé structure', 'alternating double bonds', 'dibromobenzene isomers', 'identical C–C bonds', 'delocalised π system', 'adjacent carbons equivalent'],
        modelAnswer: 'Kekulé proposed benzene had alternating C=C double bonds and C–C single bonds, predicting 4 isomers for dibromobenzene. However, only 3 isomers exist (1,2-; 1,3-; 1,4-). This proves all C–C bonds in benzene are identical (due to delocalisation) and all adjacent carbons are equivalent. The delocalised π model (hexagon with circle) correctly explains benzene\'s structure.'
      },
      {
        id: 'kw-t18-8',
        stem: 'Explain what happens to the delocalised π system when benzene undergoes electrophilic substitution. [3 marks]',
        marks: 3,
        keywords: ['arenium ion', 'temporary disruption', 'aromaticity restored', 'proton loss', 'delocalised electrons'],
        modelAnswer: 'When an electrophile attacks the benzene ring, it forms an arenium ion intermediate where the positive charge is delocalised over 5 of the 6 ring carbons (temporarily disrupting aromaticity). The aromaticity is fully restored when a proton (H⁺) is lost from the sp³ carbon where the electrophile bonded, and the delocalised π system is re-established. This temporary disruption but final restoration is why substitution is favoured over addition.'
      },
      {
        id: 'kw-t18-9',
        stem: 'Describe the preparation of iodobenzene from benzenediazonium chloride. [3 marks]',
        marks: 3,
        keywords: ['benzenediazonium chloride', 'potassium iodide', 'effervescence', 'N₂ gas', 'ice-cold'],
        modelAnswer: 'Iodobenzene is prepared by adding potassium iodide (KI) solution to ice-cold benzenediazonium chloride. The diazonium ion (C₆H₅N₂⁺) reacts with iodide (I⁻) to form iodobenzene (C₆H₅I) and nitrogen gas (N₂). Observations include effervescence (bubbling of N₂) and formation of oily droplets of iodobenzene (dense, immiscible layer).'
      },
      {
        id: 'kw-t18-10',
        stem: 'State two differences between ring substitution and side-chain substitution in methylbenzene with halogens. [3 marks]',
        marks: 3,
        keywords: ['catalyst', 'dark', 'ring substitution', 'UV light', 'side-chain substitution', '2,4-directing'],
        modelAnswer: 'Ring substitution requires a Lewis acid catalyst (e.g., AlCl₃) in the dark, giving 2- and 4-halogenomethylbenzene (halogen on ring). Side-chain substitution requires UV light (no catalyst) at elevated temperature, giving (chloromethyl)benzene (halogen on methyl group). Key distinction: ring vs side-chain position, dark vs light, presence vs absence of catalyst. The methyl group is 2,4-directing for both types of substitution.'
      },
      {
        id: 'kw-t18-11',
        stem: 'State the reagents, equation, and observation for the oxidation of methylbenzene to benzoic acid. [4 marks]',
        marks: 4,
        keywords: ['alkaline KMnO₄', 'reflux', 'acidified with H₂SO₄', 'benzoic acid', 'brown precipitate of MnO₂'],
        modelAnswer: 'Methylbenzene + alkaline KMnO₄ under reflux → benzoic acid (C₆H₅COOH). The purple MnO₄⁻ ions are replaced by a dark brown precipitate of MnO₂. The solution is then acidified with dilute H₂SO₄ to precipitate the benzoic acid. The entire alkyl side-chain is oxidised to a single carboxyl group.'
      },
      {
        id: 'kw-t18-12',
        stem: 'State the reagents and observation for the iron(III) chloride test for phenol. [2 marks]',
        marks: 2,
        keywords: ['iron(III) chloride', 'FeCl₃', 'violet', 'purple', 'phenol', 'complex formation'],
        modelAnswer: 'When FeCl₃ solution is added to phenol, an intense violet/purple coloured complex forms immediately. This is due to coordination of Fe³⁺ ions with the oxygen lone pairs on the phenol –OH group. This test is characteristic of compounds where an –OH group is directly attached to a benzene ring.'
      },
      {
        id: 'kw-t18-13',
        stem: 'Explain why phenol burns with a smoky flame when combusted in air. [3 marks]',
        marks: 3,
        keywords: ['high carbon-to-hydrogen ratio', 'incomplete combustion', 'smoky flame', 'carbon particulates', 'soot', 'aromatic ring'],
        modelAnswer: 'Phenol has a very high carbon-to-hydrogen ratio (C₆H₅OH = 6:1 C:H). When burned, there is rarely enough oxygen for complete combustion, resulting in incomplete combustion with carbon particles forming soot and a very smoky flame. The benzene ring is highly stable but the high carbon content leads to inefficient burning.'
      },
      {
        id: 'kw-t18-14',
        stem: 'Explain why phenol does not form esters easily with carboxylic acids. [3 marks]',
        marks: 3,
        keywords: ['deactivating effect', 'phenoxide ion', 'sodium phenoxide', 'nucleophile', 'weak electrophile', 'acyl chloride'],
        modelAnswer: 'The –OH group in phenol deactivates the benzene ring towards electrophilic attack, making the reaction with carboxylic acids very slow. To increase the rate, phenol is first converted to sodium phenoxide (C₆H₅O⁻Na⁺) using NaOH, which is a much stronger nucleophile. The phenoxide ion then rapidly attacks the acylating agent (acyl chloride or acid anhydride).'
      }
    ],

    // =======================================================================
    // FLASHCARDS
    // =======================================================================
    flashcards: [
      // --- SUBTOPIC 0: Aromatic vs Aliphatic Compounds & Nomenclature ---
      {
        id: 'fc-t18-1',
        front: 'What is the definition of an aromatic compound?',
        back: 'A compound containing a benzene ring in its structure with a delocalised π electron system.',
        topic: 'Aromatic vs Aliphatic Compounds'
      },
      {
        id: 'fc-t18-2',
        front: 'What is the IUPAC name for C₆H₅COOH?',
        back: 'Benzoic acid. The benzene ring is the parent structure, and the –COOH carboxyl group is the functional group.',
        topic: 'Aromatic vs Aliphatic Compounds'
      },
      {
        id: 'fc-t18-3',
        front: 'What is the melting point of pure benzene?',
        back: '5.5°C. Pure benzene molecules pack very tightly in their solid lattice due to the planar hexagonal structure and delocalised π system.',
        topic: 'Physical Properties of Arenes'
      },
      {
        id: 'fc-t18-4',
        front: 'Why does benzene undergo electrophilic substitution rather than addition?',
        back: 'Substitution preserves the aromatic ring and its ~152 kJ/mol stabilisation energy. Addition would destroy the delocalised π system and require more energy to break.',
        topic: 'Alkene Reactivity: Substitution vs Addition'
      },
      {
        id: 'fc-t18-5',
        front: 'What was Kekulé\'s proposed structure for benzene?',
        back: 'Kekulé proposed benzene had three C=C double bonds and three C–C single bonds arranged alternately. This was incorrect — benzene has all six C–C bonds identical at ~139 pm (delocalised).',
        topic: 'Aromatic vs Aliphatic Compounds'
      },
      {
        id: 'fc-t18-6',
        front: 'What type of Lewis acid catalyst is commonly used for benzene bromination?',
        back: 'FeBr₃ (iron(III) bromide) or AlBr₃. Iron filings can also be used as they react with Br₂ to form FeBr₃ in situ.',
        topic: 'Alkene Reactivity: Substitution vs Addition'
      },
      {
        id: 'fc-t18-7',
        front: 'What is the electrophile formed during benzene nitration?',
        back: 'The nitronium ion (NO₂⁺). Concentrated HNO₃ and conc H₂SO₄ react to form NO₂⁺, which attacks the benzene ring.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-8',
        front: 'What is the optimal temperature for benzene nitration?',
        back: '50–60°C, kept around 50°C. Higher temperatures can lead to polynitration (dinitrobenzene, trinitrophenol).',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-9',
        front: 'What is the product of benzene bromination?',
        back: 'Bromobenzene (C₆H₅Br). One hydrogen is replaced by bromine. Polysubstitution can occur with excess bromine.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-10',
        front: 'What key requirement do all Friedel-Crafts reactions share?',
        back: 'Strictly anhydrous conditions. Lewis acid catalysts (AlCl₃, AlBr₃) react with water to form hydroxides, destroying the catalyst.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-11',
        front: 'In Friedel-Crafts acylation, what type of compound is produced?',
        back: 'An aryl ketone (aromatic ketone). The acyl group (–COR) is transferred to the benzene ring. Example: benzene + acetyl chloride → acetophenone (C₆H₅COCH₃).',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-12',
        front: 'What advantage does acylation have over alkylation?',
        back: 'Acylation prevents polyacylation. The acyl group (–COR) is electron-withdrawing and deactivates the ring towards further substitution. Also, the reaction is generally faster with acyl chlorides.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-13',
        front: 'What is the electrophile in sulphonation of benzene?',
        back: 'SO₃ (sulfur trioxide). Generated from fuming sulphuric acid (oleum = SO₃ dissolved in conc H₂SO₄). No separate Lewis acid catalyst needed.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-14',
        front: 'What happens when an alkyl side-chain on a benzene derivative is oxidised with alkaline KMnO₄ under reflux?',
        back: 'The entire alkyl side-chain is oxidised to a single carboxyl group (–COOH), forming benzoic acid. The benzene ring remains unchanged. A brown precipitate of MnO₂ forms as MnO₄⁻ is reduced.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      // --- SUBTOPIC 1: sp² Hybridisation in Benzene ---
      {
        id: 'fc-t18-15',
        front: 'What is the hybridisation of each carbon atom in benzene?',
        back: 'sp². Three sp² orbitals (trigonal planar, 120°) and one unhybridised p orbital perpendicular to the ring plane.',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fc-t18-16',
        front: 'What is Hückel\'s 4n+2 rule?',
        back: 'A compound is aromatic if it has 4n+2 π electrons. For benzene (n=1): 4(1)+2 = 6 π electrons, confirming aromaticity.',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fc-t18-17',
        front: 'What is the approximate stabilisation energy of benzene?',
        back: '~152 kJ/mol. Calculated from: measured ΔH (−208 kJ/mol) − predicted ΔH for triene (−360 kJ/mol).',
        topic: 'sp² Hybridisation in Benzene'
      },
      {
        id: 'fc-t18-18',
        front: 'In the delocalised π model, how are π electrons distributed?',
        back: 'Delocalised over all 6 carbons of the ring, above and below the plane. They occupy bonding MOs extending over the ring.',
        topic: 'sp² Hybridisation in Benzene'
      },
      // --- SUBTOPIC 2: Alkene Reactivity vs Benzene ---
      {
        id: 'fc-t18-19',
        front: 'What happens when bromine water is added to ethene at room temperature?',
        back: 'Addition occurs. C=C breaks, Br₂ is consumed, orange/brown colour decolourises. Dibromoethane forms (no precipitate).',
        topic: 'Alkene Reactivity: Addition Reactions'
      },
      {
        id: 'fc-t18-20',
        front: 'What happens when bromine water is added to benzene at room temperature?',
        back: 'No reaction occurs (substitution). No precipitate. A Lewis acid catalyst (AlBr₃/FeBr₃) is required to activate Br₂, producing HBr gas.',
        topic: 'Alkene Reactivity: Substitution vs Addition'
      },
      {
        id: 'fc-t18-21',
        front: 'Why does benzene undergo electrophilic substitution instead of addition?',
        back: 'Substitution preserves the aromatic ring and stabilisation energy. Addition would destroy the delocalised π system (~152 kJ/mol) and lose this stability.',
        topic: 'Alkene Reactivity: Substitution vs Addition'
      },
      // --- SUBTOPIC 3: EAS Reactions ---
      {
        id: 'fc-t18-22',
        front: 'What are the products of Friedel-Crafts alkylation of benzene?',
        back: 'Alkylbenzenes (e.g., toluene, ethylbenzene) and HCl. Polyalkylation can occur if excess haloalkane is used.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-23',
        front: 'In Friedel-Crafts acylation, what is formed?',
        back: 'Aryl ketones (e.g., acetophenone, propiophenone). The acyl group (–COR) is attached to the ring. Only monosubstitution occurs.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-24',
        front: 'What is the product of benzene sulphonation?',
        back: 'Benzene sulphonic acid (C₆H₅SO₃H). SO₃ is the electrophile. No separate Lewis acid needed.',
        topic: 'Electrophilic Aromatic Substitution (EAS) Reactions'
      },
      {
        id: 'fc-t18-25',
        front: 'What distinguishes ring from side-chain substitution?',
        back: 'Ring substitution: dark conditions + Lewis acid catalyst, halogen on ring. Side-chain: UV light, no catalyst, halogen on methyl group.',
        topic: 'Methylbenzene Free Radical Substitution'
      },
      // --- SUBTOPIC 4: Phenol Structure & Physical Properties ---
      {
        id: 'fc-t18-26',
        front: 'What effect does delocalisation of an oxygen lone pair have on phenol?',
        back: 'Increases ring electron density, making phenol more reactive towards electrophiles. Weakens O–H bond, making phenol a weak acid.',
        topic: 'Structure of Phenol'
      },
      {
        id: 'fc-t18-27',
        front: 'Why does phenol have a much higher boiling point (182°C) than methylbenzene (111°C)?',
        back: 'Phenol can form hydrogen bonds between molecules. H-bonds are stronger than London dispersion forces. Methylbenzene cannot H-bond.',
        topic: 'Structure of Phenol'
      },
      {
        id: 'fc-t18-28',
        front: 'What is the solubility of phenol in water?',
        back: 'Moderately soluble (~8 g per 100 g water). Forms H-bonds with water, but large benzene ring limits solubility. Excess phenol forms a separate aqueous layer.',
        topic: 'Structure of Phenol'
      },
      {
        id: 'fc-t18-29',
        front: 'What is the physical appearance of pure phenol?',
        back: 'White crystalline solid. Often appears pink/discoloured due to oxidation in air. Strong disinfectant smell.',
        topic: 'Structure of Phenol'
      },
      // --- SUBTOPIC 5: Phenol Reactivity (Acidity & Bromination) ---
      {
        id: 'fc-t18-30',
        front: 'What type of directing group is the hydroxyl (–OH) group in phenol?',
        back: 'Ortho/para (2,4) director. Activating group. Increases electron density at ortho and para positions, favouring electrophilic attack.',
        topic: 'Phenol Reactivity'
      },
      {
        id: 'fc-t18-31',
        front: 'What is observed when phenol reacts with bromine water?',
        back: 'Immediate decolourisation of Br₂(aq) and white precipitate of 2,4,6-tribromophenol. No gas evolution.',
        topic: 'Phenol Reactivity'
      },
      {
        id: 'fc-t18-32',
        front: 'What product is formed when phenol reacts with dilute nitric acid?',
        back: 'Mixture of 2-nitrophenol and 4-nitrophenol. –OH is 2,4-directing, so substitution at these positions.',
        topic: 'Phenol Reactivity'
      },
      {
        id: 'fc-t18-33',
        front: 'Why is phenol more acidic than aliphatic alcohols?',
        back: 'Phenoxide ion (C₆H₅O⁻) is stabilised by delocalisation of negative charge into benzene ring. This makes proton loss easier. Aliphatic alcohols lack this resonance stabilisation.',
        topic: 'Acidity of Phenol'
      },
      // --- SUBTOPIC 6: Introduction to Aryl Halides ---
      {
        id: 'fc-t18-34',
        front: 'What is the effect of delocalising a halogen lone pair into the benzene ring?',
        back: 'Strengthens C–X bond (partial double-bond character). Makes aryl halides resistant to nucleophilic substitution.',
        topic: 'Introduction to Aryl Halides'
      },
      {
        id: 'fc-t18-35',
        front: 'How does the boiling point trend change across Cl, Br, I in aryl halides?',
        back: 'Increases with halogen size: Cl (132°C) < Br (156°C) < I (189°C). More electrons = stronger London dispersion forces.',
        topic: 'Introduction to Aryl Halides'
      },
      {
        id: 'fc-t18-36',
        front: 'Why are simple aryl halides unreactive towards nucleophiles?',
        back: 'Strong C–X bond + electron-rich π cloud repels nucleophiles. Non-polar, no permanent dipole to attract nucleophiles.',
        topic: 'Introduction to Aryl Halides'
      },
      {
        id: 'fc-t18-37',
        front: 'What is the solubility of simple aryl halides in water?',
        back: 'Highly insoluble. Cannot H-bond with water; breaking water H-bonds requires more energy than van der Waals forces release.',
        topic: 'Introduction to Aryl Halides'
      },
      {
        id: 'fc-t18-38',
        front: 'How is iodobenzene commonly prepared?',
        back: 'From benzenediazonium chloride + KI. Observation: effervescence (N₂ gas) and oily droplets of iodobenzene.',
        topic: 'Introduction to Aryl Halides'
      },
      // --- SUBTOPIC 7: Phenol Ring Reactions ---
      {
        id: 'fc-t18-39',
        front: 'Why does phenol react with Br₂(aq) at room temp without catalyst?',
        back: '–OH donates electrons, making ring electron-rich and nucleophilic. Attracts Br₂ strongly. Benzene lacks this activation.',
        topic: 'Phenol Reactivity'
      },
      {
        id: 'fc-t18-40',
        front: 'What is the main product of phenol + concentrated HNO₃?',
        back: '2,4,6-trinitrophenol (picric acid). All three positions substituted due to high activation.',
        topic: 'Phenol Reactivity'
      },
      {
        id: 'fc-t18-41',
        front: 'What happens when phenol reacts with sodium carbonate (Na₂CO₃)?',
        back: 'No reaction. Phenol is not acidic enough to displace CO₂. Carboxylic acids would produce CO₂ gas with carbonate.',
        topic: 'Acidity of Phenol'
      },
      {
        id: 'fc-t18-42',
        front: 'What is the equation for phenol + NaOH?',
        back: 'C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O. Forms sodium phenoxide salt.',
        topic: 'Acidity of Phenol'
      },
      {
        id: 'fc-t18-43',
        front: 'What is the pH range of dilute aqueous phenol?',
        back: 'pH 5–6. Phenol is a weak acid (pKa ≈ 10), partially dissociates in water.',
        topic: 'Acidity of Phenol'
      },
      // --- SUBTOPIC 8: Acidity of Phenol ---
      {
        id: 'fc-t18-44',
        front: 'Why does phenol react slowly with carboxylic acids?',
        back: '–OH deactivates ring toward electrophiles. Convert phenol to phenoxide (C₆H₅O⁻Na⁺) first using NaOH. Phenoxide is stronger nucleophile.',
        topic: 'Acidity of Phenol'
      },
      {
        id: 'fc-t18-45',
        front: 'What reagent and observation characterises a positive test for phenol?',
        back: 'Iron(III) chloride (FeCl₃) solution. Observation: intense violet/purple complex forms. Characteristic of –OH directly attached to benzene ring.',
        topic: 'Phenol Other Reactions'
      },
      // --- SUBTOPIC 9: Phenol Other Reactions ---
      {
        id: 'fc-t18-46',
        front: 'Why does phenol burn with an exceptionally smoky flame?',
        back: 'High C:H ratio (6:1). Incomplete combustion produces soot. Benzene ring is stable but carbon-rich.',
        topic: 'Phenol Other Reactions'
      },
      {
        id: 'fc-t18-47',
        front: 'Why is phenol converted to phenoxide before reacting with acyl chloride?',
        back: 'Phenoxide ion (C₆H₅O⁻) is a much stronger nucleophile than phenol. Accelerates reaction significantly.',
        topic: 'Phenol Other Reactions'
      },
      // --- SUBTOPIC 10: Methylbenzene Free Radical Substitution ---
      {
        id: 'fc-t18-48',
        front: 'What condition is required for free radical substitution of methyl group?',
        back: 'UV light (ultraviolet radiation). No Lewis acid catalyst. Reaction proceeds via radical chain mechanism.',
        topic: 'Methylbenzene Free Radical Substitution'
      },
      {
        id: 'fc-t18-49',
        front: 'What is the main organic product when methylbenzene reacts with chlorine under UV light?',
        back: '(Chloromethyl)benzene. Brackets indicate chlorine on methyl group, not ring. One H from CH₃ replaced by Cl.',
        topic: 'Methylbenzene Free Radical Substitution'
      },
      {
        id: 'fc-t18-50',
        front: 'What distinguishes ring substitution from side-chain substitution?',
        back: 'Ring: dark + catalyst (AlCl₃/FeBr₃), halogen on ring → 2-/4-halogenomethylbenzene. Side-chain: UV light, no catalyst, halogen on methyl group.',
        topic: 'Methylbenzene Free Radical Substitution'
      }
    ]
};
