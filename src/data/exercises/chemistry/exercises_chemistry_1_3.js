export const exercises_chemistry_1_3 = {
  mcq: [
    // --- Subtopic 0: Evidence for ionic species; ionic bonding ---
    {
      id: 'mcq-t3-1',
      stem: 'Which of the following best defines an ionic bond?',
      options: [
        'Strong electrostatic attraction between oppositely charged ions',
        'Shared pair of electrons between two atoms',
        'Attraction between a positive metal ion lattice and delocalised electrons',
        'Weak attraction between instantaneous and induced dipoles',
      ],
      correctAnswer: 0,
      rationale: 'An ionic bond is the strong electrostatic attraction between oppositely charged ions. Option B defines a covalent bond, option C defines metallic bonding, and option D describes London (dispersion) forces.',
      topic: 'Evidence for ionic species; ionic bonding and dot-and-cross diagrams',
    },
    {
      id: 'mcq-t3-2',
      stem: 'A dot-and-cross diagram of MgO is drawn. How many electrons does each oxygen ion have in its outer shell?',
      options: ['6', '7', '8', '10'],
      correctAnswer: 2,
      rationale: 'Oxygen forms O²⁻ by gaining 2 electrons, giving it the configuration of neon: 2,8. So the outer shell has 8 electrons. Option A is the original outer-shell count; B is after gaining 1 electron; D counts all electrons.',
      topic: 'Evidence for ionic species; ionic bonding and dot-and-cross diagrams',
    },
    {
      id: 'mcq-t3-3',
      stem: 'What provides the best experimental evidence that sodium chloride contains ions?',
      options: [
        'It dissolves readily in water',
        'It is a white crystalline solid',
        'It conducts electricity when molten but not when solid',
        'It has a high melting point',
      ],
      correctAnswer: 2,
      rationale: 'Conducting when molten (but not as a solid) shows that charged particles (ions) are present but fixed in the solid lattice and free to move in the liquid state. Solubility (A) and high mp (D) are consistent with ionic character but not definitive evidence for ions; colour (B) is not relevant.',
      topic: 'Evidence for ionic species; ionic bonding and dot-and-cross diagrams',
    },

    // --- Subtopic 1: Ionic lattice structure and physical properties ---
    {
      id: 'mcq-t3-4',
      stem: 'In the NaCl lattice, what is the coordination number of each Na⁺ ion?',
      options: ['4', '6', '8', '12'],
      correctAnswer: 1,
      rationale: 'In the NaCl giant ionic lattice, each Na⁺ ion is surrounded by 6 Cl⁻ ions (and vice versa), giving a coordination number of 6. The 4-coordinate arrangement is found in ZnS; 8-coordinate in CsCl; 12-coordinate in metallic close-packing.',
      topic: 'Ionic lattice structure and physical properties',
    },
    {
      id: 'mcq-t3-5',
      stem: 'Why does MgO have a higher melting point than NaCl?',
      options: [
        'MgO has a larger lattice with more ions',
        'Mg²⁺ and O²⁻ carry higher charges, creating a stronger electrostatic attraction',
        'MgO contains covalent bonds in addition to ionic bonds',
        'Mg²⁺ is larger than Na⁺, so it attracts Cl⁻ more strongly',
      ],
      correctAnswer: 1,
      rationale: 'Lattice energy (and thus melting point) increases with greater ionic charge. Mg²⁺/O²⁻ both carry 2+ or 2− charge compared to Na⁺/Cl⁻ (1+/1−), so the electrostatic attraction in MgO is much stronger. The ionic radii comparison in option D is also incorrect.',
      topic: 'Ionic lattice structure and physical properties',
    },
    {
      id: 'mcq-t3-6',
      stem: 'Why are ionic crystals brittle?',
      options: [
        'The ions are too small to stay in place under stress',
        'Covalent bonds between ions break easily',
        'When layers shift, ions of like charge become adjacent and repel each other',
        'The lattice has no delocalised electrons to redistribute charge',
      ],
      correctAnswer: 2,
      rationale: 'When a shear force shifts one layer of the ionic lattice, same-sign ions come into alignment, creating strong repulsion that causes the crystal to shatter. Options A, B, and D do not describe the correct mechanism; lack of delocalised electrons (D) explains non-conductance in the solid state, not brittleness.',
      topic: 'Ionic lattice structure and physical properties',
    },

    // --- Subtopic 2: Covalent bonding and dot-and-cross diagrams ---
    {
      id: 'mcq-t3-7',
      stem: 'How many bonding pairs and lone pairs of electrons does a nitrogen molecule (N₂) contain?',
      options: [
        '2 bonding pairs, 2 lone pairs',
        '3 bonding pairs, 1 lone pair',
        '3 bonding pairs, 2 lone pairs',
        '1 bonding pair, 3 lone pairs',
      ],
      correctAnswer: 2,
      rationale: 'N₂ has a triple bond (3 shared pairs) and each N atom has 1 lone pair, giving 2 lone pairs in total. Option A implies a double bond; option B misses one lone pair; option D would give each N only 2 outer electrons.',
      topic: 'Covalent bonding and dot-and-cross diagrams',
    },
    {
      id: 'mcq-t3-8',
      stem: 'Which bond is the shortest?',
      options: ['C−C', 'C=C', 'C≡C', 'C−N'],
      correctAnswer: 2,
      rationale: 'Bond length decreases as bond order increases. The C≡C triple bond (bond order 3) is shorter than C=C (double, order 2), which is shorter than C−C (single, order 1). C−N is a single bond of similar length to C−C, not shorter than a triple bond.',
      topic: 'Covalent bonding and dot-and-cross diagrams',
    },

    // --- Subtopic 3: Metallic bonding and properties of metals ---
    {
      id: 'mcq-t3-9',
      stem: 'Which of the following correctly defines metallic bonding?',
      options: [
        'Covalent sharing of electrons between metal atoms',
        'Electrostatic attraction between positive metal ions and a sea of delocalised electrons',
        'Transfer of electrons from metal to non-metal atoms',
        'London dispersion forces between close-packed metal atoms',
      ],
      correctAnswer: 1,
      rationale: 'Metallic bonding is the strong electrostatic attraction between a regular lattice of positive metal ions and the surrounding "sea" of delocalised (free) electrons. Option A describes covalent bonding; option C describes ionic bond formation; option D describes intermolecular forces.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'mcq-t3-10',
      stem: 'Which sequence correctly shows melting points in increasing order?',
      options: ['Al < Mg < Na', 'Mg < Na < Al', 'Na < Mg < Al', 'Al < Na < Mg'],
      correctAnswer: 2,
      rationale: 'Melting points: Na ≈ 98 °C, Mg ≈ 650 °C, Al ≈ 660 °C. Metallic bond strength increases from Group 1 to Group 3 due to increasing ionic charge, more delocalised electrons per atom, and smaller atomic radius. So the order is Na < Mg < Al.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'mcq-t3-11',
      stem: 'Why are metals malleable?',
      options: [
        'Metal ions are small enough to move through the lattice without repulsion',
        'Delocalised electrons move with the layers as they slide, maintaining attraction',
        'Covalent bonds in metals can reform after breaking',
        'Metal ions carry no charge, so there is no repulsion when layers shift',
      ],
      correctAnswer: 1,
      rationale: 'When a stress is applied, layers of metal ions slide past each other. The sea of delocalised electrons moves with them and maintains the electrostatic attraction throughout the deformation — unlike ionic crystals where like charges align and repel. Options C and D are factually incorrect.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'mcq-t3-12',
      stem: 'What is the coordination number of a metal atom in a close-packed (face-centred cubic) structure?',
      options: ['6', '8', '10', '12'],
      correctAnswer: 3,
      rationale: 'In a close-packed arrangement (e.g., Mg, Al, Cu), each atom has 12 nearest neighbours: 6 in the same layer, 3 in the layer above, and 3 in the layer below. Body-centred cubic (Group 1 metals like Na) gives coordination number 8.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'mcq-t3-13',
      stem: 'An alloy is harder than the pure metal it is based on. What is the best explanation?',
      options: [
        'Alloying increases the number of delocalised electrons',
        'Foreign atoms of different size disrupt the regular lattice, preventing layer sliding',
        'The alloy has stronger covalent bonds than the pure metal',
        'Alloying reduces the coordination number of each metal atom',
      ],
      correctAnswer: 1,
      rationale: 'Atoms of different sizes distort the regular lattice, making it harder for planes of ions to slide over one another. This explains why alloys (e.g., steel, brass, bronze) are harder than the component pure metals. Alloying does not significantly change electron count (A) or coordination number (D), and metals do not contain covalent bonds (C).',
      topic: 'Metallic bonding and properties of metals',
    },

    // --- Subtopic 4: Shapes of molecules — VSEPR theory ---
    {
      id: 'mcq-t3-14',
      stem: 'What is the shape and bond angle of a water molecule (H₂O)?',
      options: [
        'Linear, 180°',
        'Trigonal planar, 120°',
        'V-shaped (bent), 104.5°',
        'Trigonal pyramidal, 107°',
      ],
      correctAnswer: 2,
      rationale: 'H₂O has 4 electron pairs around oxygen (2 bonding, 2 lone pairs), giving an electron arrangement of tetrahedral. The 2 lone pairs repel the bonding pairs more strongly, compressing the H−O−H angle to 104.5° and giving a V-shaped (bent) molecular shape. NH₃ is pyramidal with 107° (one lone pair).',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    {
      id: 'mcq-t3-15',
      stem: 'What is the shape of the ammonium ion, NH₄⁺?',
      options: [
        'Trigonal pyramidal',
        'Tetrahedral',
        'Trigonal planar',
        'V-shaped',
      ],
      correctAnswer: 1,
      rationale: 'NH₄⁺ has 4 bonding pairs and no lone pairs, so it adopts a regular tetrahedral shape with bond angles of 109.5°. It is isoelectronic with CH₄. NH₃ is pyramidal (one lone pair); lone pairs are absent in NH₄⁺.',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    {
      id: 'mcq-t3-16',
      stem: 'Which molecule is trigonal bipyramidal in shape?',
      options: ['SF₄', 'PCl₅', 'XeF₄', 'ClF₃'],
      correctAnswer: 1,
      rationale: 'PCl₅ has 5 bonding pairs and 0 lone pairs, giving a trigonal bipyramidal shape with bond angles of 90° and 120°. SF₄ has 1 lone pair (see-saw). XeF₄ has 2 lone pairs (square planar). ClF₃ has 2 lone pairs (T-shaped).',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    {
      id: 'mcq-t3-17',
      stem: 'Which order of electron-pair repulsion is correct, from greatest to least?',
      options: [
        'BP−BP > LP−BP > LP−LP',
        'LP−LP > LP−BP > BP−BP',
        'LP−BP > LP−LP > BP−BP',
        'BP−BP > LP−LP > LP−BP',
      ],
      correctAnswer: 1,
      rationale: 'Lone pairs occupy more space than bonding pairs because they are not constrained between two nuclei. The repulsion order is: lone pair–lone pair > lone pair–bonding pair > bonding pair–bonding pair. This explains why bond angles decrease as lone pairs are added.',
      topic: 'Shapes of molecules — VSEPR theory',
    },

    // --- Subtopic 5: Bond polarity and electronegativity ---
    {
      id: 'mcq-t3-18',
      stem: 'Which molecule has polar bonds but is overall non-polar?',
      options: ['H₂O', 'HCl', 'CO₂', 'NH₃'],
      correctAnswer: 2,
      rationale: 'CO₂ has two polar C=O bonds, but because the molecule is linear and symmetric, the bond dipoles point in exactly opposite directions and cancel out, making the molecule non-polar overall. H₂O, HCl, and NH₃ all have net dipole moments.',
      topic: 'Bond polarity and electronegativity',
    },
    {
      id: 'mcq-t3-19',
      stem: 'Which of the following best describes electronegativity?',
      options: [
        'The energy released when a gaseous atom gains an electron',
        'The energy required to remove an electron from a gaseous atom',
        'The ability of an atom in a covalent bond to attract the shared electron pair towards itself',
        'The charge density on an ion in an ionic lattice',
      ],
      correctAnswer: 2,
      rationale: 'Electronegativity is specifically the ability of an atom within a covalent bond to attract the shared electron pair towards itself (Pauling scale). Option A is electron affinity; option B is ionisation energy; option D describes a property of ions, not electronegativity.',
      topic: 'Bond polarity and electronegativity',
    },
    {
      id: 'mcq-t3-20',
      stem: 'A bond between two atoms has a ΔEN of 2.1. What type of bond is this most likely to be?',
      options: [
        'Pure (non-polar) covalent',
        'Polar covalent',
        'Ionic',
        'Metallic',
      ],
      correctAnswer: 2,
      rationale: 'On the bonding continuum, ΔEN > 1.8 is generally classified as ionic. ΔEN between 0.5 and 1.8 indicates a polar covalent bond; ΔEN ≈ 0 is pure covalent. Metallic bonding is not characterised by ΔEN.',
      topic: 'Bond polarity and electronegativity',
    },

    // --- Subtopic 6: Simple molecular substances ---
    {
      id: 'mcq-t3-21',
      stem: 'Why do simple molecular substances like iodine have low melting points?',
      options: [
        'Their covalent bonds are weak and easily broken',
        'Only weak intermolecular (London) forces need to be overcome on melting',
        'They contain ionic bonds which dissociate in heat',
        'Their molecules have low molar masses so lattice energy is small',
      ],
      correctAnswer: 1,
      rationale: 'On melting, the molecules separate from each other; only the intermolecular forces (London dispersion forces in the case of iodine) need to be broken, not the covalent bonds. These forces are weak relative to ionic or covalent bonds, so melting points are low. Option A is incorrect — the covalent bonds remain intact on melting.',
      topic: 'Simple molecular substances and their properties',
    },
    {
      id: 'mcq-t3-22',
      stem: 'The boiling point of ethanol (C₂H₅OH, 78.5 °C) is much higher than that of methoxymethane (CH₃OCH₃, −24.8 °C), despite both having the same molecular formula C₂H₆O. Why?',
      options: [
        'Ethanol has a larger molar mass',
        'Ethanol has stronger London forces because of its longer chain',
        'Ethanol molecules form hydrogen bonds with each other; methoxymethane cannot',
        'Methoxymethane has a lower dipole moment',
      ],
      correctAnswer: 2,
      rationale: 'Ethanol has an O−H group, so its molecules can form hydrogen bonds (H bonded to O, with lone pairs on the O acting as acceptors). Methoxymethane has no O−H bond, so it cannot form hydrogen bonds, only weaker permanent dipole–dipole and London forces. Both molecules have the same molar mass (A is wrong).',
      topic: 'Simple molecular substances and their properties',
    },
    {
      id: 'mcq-t3-23',
      stem: 'Why is ice less dense than liquid water?',
      options: [
        'Ice molecules vibrate more than liquid water molecules',
        'Hydrogen bonds in ice form an open hexagonal network that spaces molecules further apart',
        'The covalent O−H bonds are longer in ice than in liquid water',
        'Liquid water contains fewer hydrogen bonds per molecule than ice',
      ],
      correctAnswer: 1,
      rationale: 'In ice, each H₂O molecule forms 4 hydrogen bonds arranged tetrahedrally, creating an open hexagonal lattice with large empty spaces. This makes ice less dense than liquid water. On melting, some H-bonds break, the structure partially collapses, and molecules pack more closely. Options C and D are factually incorrect.',
      topic: 'Simple molecular substances and their properties',
    },

    // --- Subtopic 7: Giant covalent substances ---
    {
      id: 'mcq-t3-24',
      stem: 'Which property of graphite makes it useful as a lubricant?',
      options: [
        'Very high melting point',
        'Ability to conduct electricity',
        'Layers held by weak forces that slide easily over each other',
        'Each carbon atom forming 4 covalent bonds',
      ],
      correctAnswer: 2,
      rationale: 'In graphite, layers of carbon atoms are held together only by weak London (van der Waals) forces, so they can slide over one another easily, making graphite slippery and useful as a lubricant or in pencils. The electrical conductivity (B) is a separate useful property, not related to lubrication. Diamond (not graphite) has 4 covalent bonds per carbon (D).',
      topic: 'Giant covalent substances (macromolecular structures)',
    },
    {
      id: 'mcq-t3-25',
      stem: 'What is the ratio of Si to O atoms in silicon dioxide, SiO₂?',
      options: ['1:1', '1:2', '2:1', '1:4'],
      correctAnswer: 1,
      rationale: 'In SiO₂, each Si atom is covalently bonded to 4 oxygen atoms, but each oxygen bridges two Si atoms. So the ratio Si:O = 1:2, giving the empirical formula SiO₂. Option A (1:1) would be SiO; option D (1:4) would give SiO₄, which only applies to the silicate ion.',
      topic: 'Giant covalent substances (macromolecular structures)',
    },

    // --- Subtopic 8: Bond length and bond strength ---
    {
      id: 'mcq-t3-26',
      stem: 'Which of the following statements about bond order is correct?',
      options: [
        'A double bond is longer and stronger than a single bond',
        'A triple bond is shorter and stronger than a double bond',
        'A single bond is shorter but weaker than a double bond',
        'Bond length and bond strength increase together as bond order increases',
      ],
      correctAnswer: 1,
      rationale: 'As bond order increases, more electron density is shared between the nuclei, pulling them closer together (shorter bond) and holding them more tightly (stronger bond). So a triple bond is shorter AND stronger than a double bond, which is shorter AND stronger than a single bond. Option D inverts the length trend.',
      topic: 'Bond length and bond strength',
    },

    // --- Subtopic 9: Comparing types of structure ---
    {
      id: 'mcq-t3-27',
      stem: 'Which substance conducts electricity both as a solid and when molten?',
      options: ['NaCl', 'Diamond', 'Graphite', 'SiO₂'],
      correctAnswer: 2,
      rationale: 'Graphite conducts electricity in the solid state because each carbon atom contributes one delocalised electron to a π-system that can carry charge within the layers. NaCl only conducts when molten or dissolved. Diamond and SiO₂ do not conduct under normal conditions because all electrons are fixed in covalent bonds.',
      topic: 'Comparing types of structure',
    },
    {
      id: 'mcq-t3-28',
      stem: 'A solid substance has a very high melting point, does not conduct electricity in any state, and is insoluble in water. What type of structure is it most likely to have?',
      options: [
        'Giant ionic',
        'Simple molecular',
        'Metallic',
        'Giant covalent (macromolecular)',
      ],
      correctAnswer: 3,
      rationale: 'Giant covalent structures (e.g., diamond, SiO₂) have very high melting points (strong covalent bonds throughout), do not conduct electricity (no free charges), and are insoluble in water. Giant ionic conducts when molten; simple molecular has low mp; metallic conducts electricity.',
      topic: 'Comparing types of structure',
    },

    // --- Subtopic 10: Intermolecular forces ---
    {
      id: 'mcq-t3-29',
      stem: 'Which type of intermolecular force is present in ALL molecular substances?',
      options: [
        'Permanent dipole–dipole forces',
        'Hydrogen bonds',
        'London (dispersion) forces',
        'Ion–dipole forces',
      ],
      correctAnswer: 2,
      rationale: 'London forces arise from instantaneous and induced dipoles and are present in all molecules regardless of polarity. Permanent dipole–dipole forces only occur in polar molecules; hydrogen bonds only form when H is directly bonded to F, O, or N; ion–dipole forces involve ions.',
      topic: 'Intermolecular forces',
    },
    {
      id: 'mcq-t3-30',
      stem: 'Which of the following correctly explains why NH₃ has an unexpectedly high boiling point compared to PH₃, AsH₃, and SbH₃?',
      options: [
        'NH₃ has a larger molar mass than PH₃',
        'NH₃ molecules form hydrogen bonds with each other',
        'NH₃ has stronger London forces than the other hydrides',
        'The N−H bond is more polar than P−H, so London forces are stronger',
      ],
      correctAnswer: 1,
      rationale: 'N is highly electronegative and its H atoms can hydrogen-bond to lone pairs on N atoms of neighbouring molecules (H bonded directly to N, with the N lone pair as acceptor). This additional intermolecular force raises the boiling point significantly above the trend for PH₃, AsH₃, SbH₃. NH₃ actually has the smallest molar mass in the series (A is wrong).',
      topic: 'Intermolecular forces',
    },

    // --- Subtopic 11: Core Practical 2 ---
    {
      id: 'mcq-t3-31',
      stem: 'In a calorimetry experiment, 50.0 cm³ of 1.00 mol dm⁻³ HCl reacts with 50.0 cm³ of 1.00 mol dm⁻³ NaOH. The temperature rises by 6.8 °C. What is q? [c = 4.18 J g⁻¹ K⁻¹; assume density = 1.00 g cm⁻³]',
      options: ['284 J', '568 J', '1420 J', '2840 J'],
      correctAnswer: 3,
      rationale: 'Total mass of solution = 50.0 + 50.0 = 100.0 g. q = mcΔT = 100.0 × 4.18 × 6.8 = 2842 J ≈ 2840 J. Options A and B use only one portion (50 g); option C uses c = 1 instead of 4.18.',
      topic: 'Core Practical 2: enthalpy change by calorimetry',
    },
    {
      id: 'mcq-t3-32',
      stem: 'What is the main source of error in a simple polystyrene cup calorimetry experiment, and how is it minimised?',
      options: [
        'Inaccurate timing; use a digital stopwatch',
        'Heat loss to surroundings; use insulated cup and extrapolate cooling curve',
        'Incorrect molar mass; use a balance accurate to 0.001 g',
        'Variable specific heat capacity; cool the solution before mixing',
      ],
      correctAnswer: 1,
      rationale: 'The dominant error in simple calorimetry is heat loss to the surroundings, which causes ΔT to be underestimated. This is minimised by using an insulated polystyrene cup with a lid, and by extrapolating the temperature–time graph back to the mixing point. Options A, C, and D address minor or irrelevant sources of error.',
      topic: 'Core Practical 2: enthalpy change by calorimetry',
    },
  ],

  fillblank: [
    // Subtopic 0 & 1: Ionic bonding
    {
      id: 'fb-t3-1',
      stem: 'Complete the following statement about ionic bonding.',
      template: 'An ionic bond is the strong __BLANK__ attraction between __BLANK__ charged ions.',
      blanks: [{ answer: 'electrostatic' }, { answer: 'oppositely' }],
      rationale: 'Ionic bonds are electrostatic in nature — they arise from the Coulombic attraction between ions of opposite charge.',
    },
    {
      id: 'fb-t3-2',
      stem: 'Fill in the missing coordination number.',
      template: 'In the NaCl lattice, each Na⁺ ion is surrounded by __BLANK__ Cl⁻ ions.',
      blanks: [{ answer: '6' }],
      rationale: 'The NaCl structure is a face-centred cubic lattice. Each ion is surrounded by 6 ions of the opposite charge (coordination number = 6).',
    },
    {
      id: 'fb-t3-3',
      stem: 'Complete the sentence comparing MgO and NaCl.',
      template: 'MgO has a higher melting point than NaCl because Mg²⁺ and O²⁻ ions have a __BLANK__ charge, creating a __BLANK__ electrostatic attraction.',
      blanks: [{ answer: 'higher' }, { answer: 'stronger' }],
      rationale: 'Lattice energy is proportional to the product of ionic charges; 2+ × 2− gives a much stronger force than 1+ × 1−.',
    },

    // Subtopic 2: Covalent bonding
    {
      id: 'fb-t3-4',
      stem: 'Complete the definition of a covalent bond.',
      template: 'A covalent bond is a __BLANK__ pair of electrons shared between two __BLANK__ atoms.',
      blanks: [{ answer: 'bonding' }, { answer: 'non-metal' }],
      rationale: 'A covalent bond is defined by the sharing of an electron pair (bonding pair) between non-metal atoms.',
    },
    {
      id: 'fb-t3-5',
      stem: 'Complete the statement about bond order.',
      template: 'As bond order increases from single to triple, bond length __BLANK__ and bond strength __BLANK__.',
      blanks: [{ answer: 'decreases' }, { answer: 'increases' }],
      rationale: 'More shared electron pairs pull the bonded nuclei closer (shorter bond) and hold them more tightly (higher bond enthalpy).',
    },

    // Subtopic 3: Metallic bonding
    {
      id: 'fb-t3-6',
      stem: 'Complete the definition of metallic bonding.',
      template: 'Metallic bonding is the strong electrostatic attraction between a lattice of positive __BLANK__ ions and a sea of __BLANK__ electrons.',
      blanks: [{ answer: 'metal' }, { answer: 'delocalised' }],
      rationale: 'Metal atoms lose their outer electrons to form a lattice of cations; the released electrons are free to move throughout the lattice (delocalised).',
    },
    {
      id: 'fb-t3-7',
      stem: 'Fill in the blanks about alloys.',
      template: 'Alloys are harder than pure metals because atoms of __BLANK__ size distort the __BLANK__, preventing layers from sliding.',
      blanks: [{ answer: 'different' }, { answer: 'lattice' }],
      rationale: 'The introduction of differently-sized atoms disrupts the regular lattice arrangement, creating obstacles to layer sliding and thus increasing hardness.',
    },

    // Subtopic 4: VSEPR
    {
      id: 'fb-t3-8',
      stem: 'Complete the statement about VSEPR theory.',
      template: 'In VSEPR theory, lone pairs repel __BLANK__ than bonding pairs; each lone pair reduces the bond angle by approximately __BLANK__ °.',
      blanks: [{ answer: 'more' }, { answer: '2.5' }],
      rationale: 'Lone pairs occupy more space because they are attracted by only one nucleus. The empirical reduction per lone pair is ~2.5°, e.g., tetrahedral 109.5° → pyramidal ~107° (1 LP) → V-shaped ~104.5° (2 LP).',
    },

    // Subtopic 5: Bond polarity
    {
      id: 'fb-t3-9',
      stem: 'Complete the statement about electronegativity trends.',
      template: 'Electronegativity __BLANK__ across a period (left to right) and __BLANK__ up a group.',
      blanks: [{ answer: 'increases' }, { answer: 'increases' }],
      rationale: 'Across a period, nuclear charge increases while shielding stays roughly constant, so the atom pulls electron pairs more strongly. Up a group, fewer electron shells mean the bonding electrons are closer to the nucleus.',
    },

    // Subtopic 6: Simple molecular
    {
      id: 'fb-t3-10',
      stem: 'Fill in the blank about simple molecular substances.',
      template: 'Simple molecular substances have __BLANK__ melting points because only __BLANK__ intermolecular forces need to be broken on melting, not the covalent bonds.',
      blanks: [{ answer: 'low' }, { answer: 'weak' }],
      rationale: 'The energy required to separate molecules is much less than that needed to break covalent bonds. Only intermolecular forces (London forces, dipole–dipole, H-bonds) are overcome on melting.',
    },
    {
      id: 'fb-t3-11',
      stem: 'Complete the sentence about the boiling point trend of halogens.',
      template: 'The boiling points of the halogens increase from F₂ to I₂ because the molecules become __BLANK__, giving __BLANK__ London forces.',
      blanks: [{ answer: 'larger' }, { answer: 'stronger' }],
      rationale: 'Larger molecules have more electrons and a greater surface area, increasing the magnitude of instantaneous and induced dipoles (London forces). This raises boiling point across F₂ < Cl₂ < Br₂ < I₂.',
    },

    // Subtopic 7: Giant covalent
    {
      id: 'fb-t3-12',
      stem: 'Complete the sentence about diamond.',
      template: 'Diamond does not conduct electricity because all four outer electrons of each carbon atom are used in __BLANK__ bonds, leaving no __BLANK__ electrons.',
      blanks: [{ answer: 'covalent' }, { answer: 'delocalised' }],
      rationale: 'Every carbon in diamond forms four σ bonds; there are no free electrons to carry charge, unlike graphite where one electron per carbon is delocalised.',
    },

    // Subtopic 10: Intermolecular forces
    {
      id: 'fb-t3-13',
      stem: 'Complete the definition of a hydrogen bond.',
      template: 'A hydrogen bond forms between a hydrogen atom bonded to __BLANK__, __BLANK__ or __BLANK__, and a lone pair on one of those electronegative atoms in a neighbouring molecule.',
      blanks: [{ answer: 'F' }, { answer: 'O' }, { answer: 'N' }],
      rationale: 'Hydrogen bonding requires H to be covalently bonded to a very electronegative atom (F, O, or N) AND a lone pair donor (also F, O, or N) from another molecule.',
    },
    {
      id: 'fb-t3-14',
      stem: 'Complete the sentence about hydrogen bonding in water.',
      template: 'Each H₂O molecule can form up to __BLANK__ hydrogen bonds because it has __BLANK__ hydrogen bond donors and __BLANK__ hydrogen bond acceptors.',
      blanks: [{ answer: '4' }, { answer: '2' }, { answer: '2' }],
      rationale: 'Each O−H group is a donor (2 donors in H₂O) and the oxygen has 2 lone pairs as acceptors. This 2+2 balance makes water exceptional at hydrogen bonding, giving rise to its high boiling point and other anomalous properties.',
    },

    // Subtopic 11: Core Practical 2
    {
      id: 'fb-t3-15',
      stem: 'Complete the calorimetry equation.',
      template: 'The heat transferred is calculated using q = __BLANK__ × __BLANK__ × ΔT, where m is the mass of solution and c is the __BLANK__ heat capacity.',
      blanks: [{ answer: 'm' }, { answer: 'c' }, { answer: 'specific' }],
      rationale: 'q = mcΔT is the fundamental calorimetry equation. m is in grams, c for dilute aqueous solutions ≈ 4.18 J g⁻¹ K⁻¹ (specific heat capacity of water), and ΔT in K or °C.',
    },
  ],

  dragdrop: [
    {
      id: 'dd-t3-1',
      stem: 'Classify each substance according to its type of bonding/structure.',
      categories: ['Giant ionic', 'Simple molecular', 'Giant covalent', 'Metallic'],
      items: [
        { text: 'NaCl', category: 'Giant ionic' },
        { text: 'Diamond (C)', category: 'Giant covalent' },
        { text: 'I₂', category: 'Simple molecular' },
        { text: 'Aluminium (Al)', category: 'Metallic' },
        { text: 'MgO', category: 'Giant ionic' },
        { text: 'SiO₂', category: 'Giant covalent' },
        { text: 'H₂O', category: 'Simple molecular' },
        { text: 'Copper (Cu)', category: 'Metallic' },
      ],
    },
    {
      id: 'dd-t3-2',
      stem: 'Drag each property to the correct structural type. (A property may apply to only one type.)',
      categories: ['Ionic', 'Metallic', 'Simple molecular', 'Giant covalent'],
      items: [
        { text: 'Conducts when molten, not solid', category: 'Ionic' },
        { text: 'Malleable and ductile', category: 'Metallic' },
        { text: 'Very low melting point', category: 'Simple molecular' },
        { text: 'Does not conduct in any state (no free electrons)', category: 'Giant covalent' },
        { text: 'Brittle; shatters when struck', category: 'Ionic' },
        { text: 'Conducts heat and electricity as solid', category: 'Metallic' },
        { text: 'Very high melting point, all bonds covalent', category: 'Giant covalent' },
        { text: 'Dissolves in polar solvents to give a conducting solution', category: 'Ionic' },
      ],
    },
    {
      id: 'dd-t3-3',
      stem: 'Match each molecule to its VSEPR shape.',
      categories: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'V-shaped'],
      items: [
        { text: 'CO₂', category: 'Linear' },
        { text: 'BF₃', category: 'Trigonal planar' },
        { text: 'CH₄', category: 'Tetrahedral' },
        { text: 'NH₃', category: 'Trigonal pyramidal' },
        { text: 'H₂O', category: 'V-shaped' },
        { text: 'BeH₂', category: 'Linear' },
        { text: 'NH₄⁺', category: 'Tetrahedral' },
        { text: 'H₂S', category: 'V-shaped' },
      ],
    },
    {
      id: 'dd-t3-4',
      stem: 'Sort each intermolecular force type to describe which substances experience it.',
      categories: ['All molecules', 'Polar molecules only', 'Molecules with H bonded to F, O, or N'],
      items: [
        { text: 'London dispersion forces', category: 'All molecules' },
        { text: 'Permanent dipole–dipole forces', category: 'Polar molecules only' },
        { text: 'Hydrogen bonds', category: 'Molecules with H bonded to F, O, or N' },
        { text: 'Forces between H₂ molecules', category: 'All molecules' },
        { text: 'Forces between HCl molecules', category: 'Polar molecules only' },
        { text: 'Forces between HF molecules', category: 'Molecules with H bonded to F, O, or N' },
        { text: 'Forces between I₂ molecules', category: 'All molecules' },
        { text: 'Forces between NH₃ molecules', category: 'Molecules with H bonded to F, O, or N' },
      ],
    },
    {
      id: 'dd-t3-5',
      stem: 'Drag each statement to whether it describes graphite or diamond.',
      categories: ['Diamond', 'Graphite', 'Both'],
      items: [
        { text: 'Conducts electricity', category: 'Graphite' },
        { text: 'Hardest natural material', category: 'Diamond' },
        { text: 'Each C bonded to 3 others in layers', category: 'Graphite' },
        { text: 'Each C bonded to 4 others tetrahedrally', category: 'Diamond' },
        { text: 'Allotrope of carbon', category: 'Both' },
        { text: 'Soft and slippery', category: 'Graphite' },
        { text: 'Bond angle 109.5°', category: 'Diamond' },
        { text: 'Used as a lubricant', category: 'Graphite' },
      ],
    },
    {
      id: 'dd-t3-6',
      stem: 'Classify each factor as one that increases or decreases metallic bond strength.',
      categories: ['Increases bond strength', 'Decreases bond strength'],
      items: [
        { text: 'Greater ionic charge on the metal cation', category: 'Increases bond strength' },
        { text: 'Smaller ionic radius', category: 'Increases bond strength' },
        { text: 'More delocalised electrons per atom (Group 3 vs Group 1)', category: 'Increases bond strength' },
        { text: 'Larger ionic radius', category: 'Decreases bond strength' },
        { text: 'Fewer valence electrons (Group 1 metal)', category: 'Decreases bond strength' },
        { text: 'Higher coordination number', category: 'Increases bond strength' },
      ],
    },
    {
      id: 'dd-t3-7',
      stem: 'Sort each molecule into "polar molecule" or "non-polar molecule".',
      categories: ['Polar molecule', 'Non-polar molecule'],
      items: [
        { text: 'H₂O', category: 'Polar molecule' },
        { text: 'CO₂', category: 'Non-polar molecule' },
        { text: 'HCl', category: 'Polar molecule' },
        { text: 'CCl₄', category: 'Non-polar molecule' },
        { text: 'NH₃', category: 'Polar molecule' },
        { text: 'BF₃', category: 'Non-polar molecule' },
        { text: 'CHCl₃', category: 'Polar molecule' },
        { text: 'N₂', category: 'Non-polar molecule' },
      ],
    },
    {
      id: 'dd-t3-8',
      stem: 'Classify each observation about sodium chloride according to which property it demonstrates.',
      categories: ['Evidence for ionic bonding', 'Evidence for giant lattice', 'Limitation of ionic model'],
      items: [
        { text: 'Conducts electricity when dissolved in water', category: 'Evidence for ionic bonding' },
        { text: 'Very high melting point (801 °C)', category: 'Evidence for giant lattice' },
        { text: 'Shatters when struck rather than deforming', category: 'Evidence for giant lattice' },
        { text: 'Forms crystals with regular cubic geometry', category: 'Evidence for giant lattice' },
        { text: 'Some covalent character in NaCl bonds', category: 'Limitation of ionic model' },
        { text: 'Does not conduct as a solid (ions fixed)', category: 'Evidence for ionic bonding' },
      ],
    },
    {
      id: 'dd-t3-9',
      stem: 'Match each alloy to its component metals.',
      categories: ['Steel', 'Brass', 'Bronze'],
      items: [
        { text: 'Iron + carbon', category: 'Steel' },
        { text: 'Copper + zinc', category: 'Brass' },
        { text: 'Copper + tin', category: 'Bronze' },
        { text: 'Fe + C (small %)', category: 'Steel' },
        { text: 'Cu + Zn', category: 'Brass' },
        { text: 'Cu + Sn', category: 'Bronze' },
      ],
    },
    {
      id: 'dd-t3-10',
      stem: 'Classify each step in a calorimetry calculation.',
      categories: ['Measurement step', 'Calculation step', 'Error-reduction step'],
      items: [
        { text: 'Record initial and final temperatures with a thermometer', category: 'Measurement step' },
        { text: 'Calculate q = mcΔT', category: 'Calculation step' },
        { text: 'Use a polystyrene cup and lid', category: 'Error-reduction step' },
        { text: 'Measure volume of solution with a pipette', category: 'Measurement step' },
        { text: 'Extrapolate the cooling curve to find true ΔT', category: 'Error-reduction step' },
        { text: 'Divide q by moles to find ΔH per mole', category: 'Calculation step' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-t3-1',
      stem: 'Put the following steps for determining the shape of a molecule using VSEPR theory in the correct order:',
      steps: [
        'Write the molecular formula of the species and identify the central atom',
        'Count the total number of outer-shell electron pairs (bonding + lone) around the central atom',
        'Arrange electron pairs to minimise repulsion (most repelling pairs furthest apart)',
        'Identify lone pairs and apply the LP–LP > LP–BP > BP–BP repulsion hierarchy',
        'State the molecular shape based on the positions of the atoms (not lone pairs)',
        'Quote the bond angle, reducing by ~2.5° per lone pair if applicable',
      ],
    },
    {
      id: 'seq-t3-2',
      stem: 'Put these steps for calculating the enthalpy change of a neutralisation reaction (calorimetry) in the correct order:',
      steps: [
        'Measure fixed volumes of acid and alkali using a pipette and record the initial temperature',
        'Mix the solutions in a polystyrene cup and record the maximum temperature reached',
        'Calculate ΔT = T_final − T_initial',
        'Calculate q = mcΔT (where m is total solution mass)',
        'Calculate the moles of limiting reactant (n)',
        'Calculate ΔH = −q/n and express in kJ mol⁻¹ with correct sign',
      ],
    },
    {
      id: 'seq-t3-3',
      stem: 'Order the following hydrides by increasing boiling point (lowest first):',
      steps: [
        'SiH₄ (bp −112 °C) — simple London forces, small molecule',
        'GeH₄ (bp −88 °C) — London forces, slightly larger',
        'SnH₄ (bp −52 °C) — London forces, larger still',
        'NH₃ (bp −33 °C) — hydrogen bonding despite small size',
      ],
    },
    {
      id: 'seq-t3-4',
      stem: 'Put these steps for drawing a dot-and-cross diagram of an ionic compound (e.g. MgO) in the correct order:',
      steps: [
        'Write the electron configurations of the neutral atoms (Mg: 2,8,2; O: 2,6)',
        'Determine the number of electrons transferred to achieve noble-gas configurations',
        'Draw the cation with electrons removed (Mg²⁺: 2,8) using dots or crosses',
        'Draw the anion with electrons gained (O²⁻: 2,8) using the opposite symbol',
        'Enclose each ion in a square bracket and write the ionic charge outside',
      ],
    },
    {
      id: 'seq-t3-5',
      stem: 'Arrange the following carbon allotropes / structures from lowest to highest melting point:',
      steps: [
        'Buckminsterfullerene C₆₀ (simple molecular, mp ~280 °C — only London forces between cages)',
        'Graphite (layer structure, mp ~3600 °C — strong covalent bonds within layers)',
        'Diamond (3D giant covalent, mp ~3550 °C — every bond is a strong covalent bond)',
      ],
    },
    {
      id: 'seq-t3-6',
      stem: 'Arrange the following metals in order of increasing melting point (lowest first), based on metallic bond strength:',
      steps: [
        'Na (98 °C) — Group 1, 1 delocalised electron, large ionic radius',
        'Mg (650 °C) — Group 2, 2 delocalised electrons, smaller radius',
        'Al (660 °C) — Group 3, 3 delocalised electrons, smallest radius of the three',
      ],
    },
    {
      id: 'seq-t3-7',
      stem: 'Put the following events in the order they occur when an ionic solid dissolves in water:',
      steps: [
        'The ionic lattice is exposed to polar water molecules',
        'Water molecules orient with δ+ H towards anions and δ− O towards cations (ion–dipole interactions)',
        'Electrostatic attractions between water and surface ions overcome lattice forces',
        'Surface ions are pulled away from the lattice one by one (lattice energy overcome)',
        'Ions become fully surrounded (hydrated) by shells of water molecules',
        'Ions disperse through solution — solution conducts electricity',
      ],
    },
    {
      id: 'seq-t3-8',
      stem: 'Arrange the following bond types in order of increasing bond strength (weakest first):',
      steps: [
        'London (dispersion) forces (~1–10 kJ mol⁻¹)',
        'Permanent dipole–dipole interactions (~2–25 kJ mol⁻¹)',
        'Hydrogen bonds (~10–40 kJ mol⁻¹)',
        'Metallic bond (100–400 kJ mol⁻¹)',
        'Single covalent bond, e.g. H−H (~436 kJ mol⁻¹)',
        'Triple covalent bond, e.g. N≡N (~945 kJ mol⁻¹)',
      ],
    },
  ],

  keyword: [
    {
      id: 'kw-t3-1',
      stem: 'Define the term "ionic bond". [2 marks]',
      marks: 2,
      keywords: ['electrostatic', 'attraction', 'oppositely charged', 'ions'],
      modelAnswer: 'An ionic bond is the strong electrostatic attraction between oppositely charged ions. It results from the transfer of one or more electrons from a metal atom to a non-metal atom.',
    },
    {
      id: 'kw-t3-2',
      stem: 'State two physical properties of ionic compounds and explain each in terms of structure and bonding. [4 marks]',
      marks: 4,
      keywords: ['high melting point', 'electrostatic', 'brittle', 'conducts', 'molten', 'ions free'],
      modelAnswer: 'Ionic compounds have high melting points because there are strong electrostatic attractions throughout the giant ionic lattice that require a large amount of energy to break. They are brittle because when a stress is applied, layers of ions shift so that like charges become adjacent, causing strong repulsion and the lattice to shatter. They conduct electricity when molten or dissolved because the ions are free to move and carry charge, but not in the solid state where ions are fixed in the lattice.',
    },
    {
      id: 'kw-t3-3',
      stem: 'Define the term "metallic bond". [2 marks]',
      marks: 2,
      keywords: ['electrostatic attraction', 'positive ions', 'delocalised electrons', 'lattice'],
      modelAnswer: 'A metallic bond is the strong electrostatic attraction between the regular lattice of positive metal ions (cations) and the sea of delocalised (free) electrons surrounding them.',
    },
    {
      id: 'kw-t3-4',
      stem: 'Explain why aluminium has a higher melting point than sodium. [3 marks]',
      marks: 3,
      keywords: ['delocalised electrons', 'charge', 'stronger', 'electrostatic', 'smaller'],
      modelAnswer: 'Aluminium atoms contribute 3 delocalised electrons per atom compared to 1 for sodium, so the sea of delocalised electrons is denser. The Al³⁺ ions also carry a greater charge than Na⁺ and have a smaller ionic radius. Both factors mean the electrostatic attraction between the positive ions and the delocalised electrons is much stronger in aluminium, so more energy is needed to overcome the metallic bonds.',
    },
    {
      id: 'kw-t3-5',
      stem: 'Define electronegativity. [1 mark]',
      marks: 1,
      keywords: ['ability', 'attract', 'electron pair', 'covalent bond'],
      modelAnswer: 'Electronegativity is the ability of an atom, within a covalent bond, to attract the shared pair of electrons towards itself.',
    },
    {
      id: 'kw-t3-6',
      stem: 'Explain why CO₂ is a non-polar molecule despite having polar C=O bonds. [2 marks]',
      marks: 2,
      keywords: ['linear', 'symmetric', 'cancel', 'dipoles', 'net'],
      modelAnswer: 'Although each C=O bond is polar (C is δ+ and O is δ−), the CO₂ molecule is linear and symmetric. The two bond dipoles point in exactly opposite directions and are of equal magnitude, so they cancel out, resulting in no net dipole moment for the molecule.',
    },
    {
      id: 'kw-t3-7',
      stem: 'State the VSEPR rule used to predict molecular shapes. [2 marks]',
      marks: 2,
      keywords: ['electron pairs', 'repel', 'far apart', 'lone pair'],
      modelAnswer: 'Electron pairs around a central atom repel each other and arrange themselves as far apart as possible to minimise repulsion. Lone pairs exert a greater repulsion than bonding pairs, so they occupy positions that compress bond angles.',
    },
    {
      id: 'kw-t3-8',
      stem: 'Explain why graphite can conduct electricity but diamond cannot. [3 marks]',
      marks: 3,
      keywords: ['delocalised', 'electrons', 'free to move', '3 bonds', '4 bonds'],
      modelAnswer: 'In graphite, each carbon atom forms 3 covalent bonds within a layer, leaving one outer electron per carbon atom that is delocalised across the layer. These delocalised electrons are free to move and carry charge. In diamond, each carbon forms 4 covalent bonds and all outer electrons are used in bonding, so there are no free electrons to conduct electricity.',
    },
    {
      id: 'kw-t3-9',
      stem: 'Explain what is meant by a hydrogen bond, giving the conditions required for its formation. [3 marks]',
      marks: 3,
      keywords: ['F', 'O', 'N', 'lone pair', 'acceptor', 'donor', 'electronegative'],
      modelAnswer: 'A hydrogen bond is an intermolecular force formed when a hydrogen atom is covalently bonded directly to a highly electronegative atom (F, O, or N) — this is the hydrogen bond donor. A lone pair on another electronegative atom (F, O, or N) in a nearby molecule acts as the acceptor. The partially positive H (δ+) is attracted to the lone pair, forming the hydrogen bond. Hydrogen bonds are approximately 1/10 the strength of a covalent bond.',
    },
    {
      id: 'kw-t3-10',
      stem: 'Explain why ice is less dense than liquid water. [3 marks]',
      marks: 3,
      keywords: ['hydrogen bonds', 'open', 'hexagonal', 'network', 'space', 'collapse'],
      modelAnswer: 'In ice, each water molecule forms 4 hydrogen bonds arranged tetrahedrally, creating an open hexagonal network with large empty spaces between the molecules. This means the molecules are further apart than in liquid water, giving ice a lower density. When ice melts, some hydrogen bonds break, the open network partially collapses, and the molecules pack more closely, so liquid water is denser.',
    },
    {
      id: 'kw-t3-11',
      stem: 'State what is meant by the term "giant covalent structure" and give two properties common to such structures. [3 marks]',
      marks: 3,
      keywords: ['covalent bonds', 'throughout', 'high melting point', 'does not conduct', 'insoluble'],
      modelAnswer: 'A giant covalent (macromolecular) structure is one in which atoms are linked throughout the whole structure by strong covalent bonds, forming an extended 3D network (e.g., diamond, SiO₂). Two common properties are: very high melting points (large amounts of energy required to break the many strong covalent bonds), and inability to conduct electricity (no free electrons or ions), unless delocalised electrons are present as in graphite.',
    },
    {
      id: 'kw-t3-12',
      stem: 'In a calorimetry experiment, describe how you would minimise heat loss and calculate the enthalpy change of a reaction. [4 marks]',
      marks: 4,
      keywords: ['polystyrene', 'lid', 'extrapolate', 'cooling curve', 'q = mcΔT', 'moles', 'ΔH = −q/n'],
      modelAnswer: 'To minimise heat loss, use an insulated polystyrene cup with a lid, and extrapolate the cooling curve back to the time of mixing to find the true maximum temperature change (ΔT). To calculate ΔH: first calculate q = mcΔT, where m is the total mass of solution in grams, c = 4.18 J g⁻¹ K⁻¹, and ΔT is in K or °C. Then calculate the moles of limiting reactant (n). Finally, ΔH = −q/n (in J mol⁻¹, convert to kJ mol⁻¹ by dividing by 1000). An exothermic reaction gives a positive ΔT and a negative ΔH.',
    },
  ],

  flashcards: [
    // Subtopic 0: Ionic bonding
    {
      id: 'fc-t3-1',
      front: 'What is an ionic bond?',
      back: 'A strong electrostatic attraction between oppositely charged ions, formed by the transfer of one or more electrons from a metal to a non-metal atom.',
      topic: 'Evidence for ionic species; ionic bonding and dot-and-cross diagrams',
    },
    {
      id: 'fc-t3-2',
      front: 'Why does sodium chloride conduct electricity when molten but not when solid?',
      back: 'In the solid state, Na⁺ and Cl⁻ ions are fixed in the giant ionic lattice and cannot move. When molten, the lattice breaks down and the ions are free to move and carry charge.',
      topic: 'Ionic lattice structure and physical properties',
    },
    // Subtopic 1: Ionic lattice
    {
      id: 'fc-t3-3',
      front: 'What is the coordination number of each ion in the NaCl lattice?',
      back: 'Each Na⁺ is surrounded by 6 Cl⁻, and each Cl⁻ is surrounded by 6 Na⁺. The coordination number is 6.',
      topic: 'Ionic lattice structure and physical properties',
    },
    {
      id: 'fc-t3-4',
      front: 'Why does MgO have a higher melting point than NaCl?',
      back: 'Mg²⁺ and O²⁻ carry charges of 2+ and 2−, whereas Na⁺ and Cl⁻ carry charges of 1+ and 1−. The greater charges produce a stronger electrostatic attraction in MgO, requiring more energy to break.',
      topic: 'Ionic lattice structure and physical properties',
    },
    // Subtopic 2: Covalent bonding
    {
      id: 'fc-t3-5',
      front: 'How does bond order affect bond length and bond strength?',
      back: 'As bond order increases (single → double → triple), bond length decreases and bond strength (bond enthalpy) increases. More shared electron density holds the nuclei closer and more firmly together.',
      topic: 'Covalent bonding and dot-and-cross diagrams',
    },
    // Subtopic 3: Metallic bonding
    {
      id: 'fc-t3-6',
      front: 'What is the definition of metallic bonding?',
      back: 'The strong electrostatic attraction between a regular lattice of positive metal ions and the surrounding sea of delocalised (free) electrons.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'fc-t3-7',
      front: 'Why are metals malleable and ductile?',
      back: 'When a force is applied, layers of metal ions slide past each other. The sea of delocalised electrons rearranges to maintain the electrostatic attraction throughout, so the metal deforms rather than shattering.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'fc-t3-8',
      front: 'Why are alloys harder than pure metals?',
      back: 'Atoms of different sizes in an alloy disrupt the regular lattice. This prevents layers of atoms from sliding over one another easily, making the alloy harder and stronger than the pure metal.',
      topic: 'Metallic bonding and properties of metals',
    },
    {
      id: 'fc-t3-9',
      front: 'What is the coordination number in (a) close-packed metals and (b) body-centred cubic metals?',
      back: '(a) Close-packed (e.g., Mg, Al, Cu): coordination number = 12 (6 in same layer, 3 above, 3 below). (b) Body-centred cubic (e.g., Na, K): coordination number = 8.',
      topic: 'Metallic bonding and properties of metals',
    },
    // Subtopic 4: VSEPR
    {
      id: 'fc-t3-10',
      front: 'State the shapes and bond angles of CH₄, NH₃, and H₂O.',
      back: 'CH₄: tetrahedral, 109.5° (no lone pairs). NH₃: trigonal pyramidal, 107° (1 lone pair). H₂O: V-shaped (bent), 104.5° (2 lone pairs). Each lone pair reduces the bond angle by ~2.5°.',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    {
      id: 'fc-t3-11',
      front: 'What is the shape of XeF₄, and how many lone pairs does the central atom have?',
      back: 'XeF₄ is square planar. Xe has 6 electron pairs (4 bonding, 2 lone pairs). The 2 lone pairs sit opposite each other (axial positions), giving a square planar molecular shape with bond angles of 90°.',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    {
      id: 'fc-t3-12',
      front: 'What does "isoelectronic" mean? Give one example pair.',
      back: 'Isoelectronic species have the same number of electrons and the same electronic structure. Example: NH₄⁺ and CH₄ (both have 10 electrons and a tetrahedral shape); H₃O⁺ and NH₃ (both trigonal pyramidal).',
      topic: 'Shapes of molecules — VSEPR theory',
    },
    // Subtopic 5: Bond polarity
    {
      id: 'fc-t3-13',
      front: 'What is electronegativity, and which element has the highest value?',
      back: 'Electronegativity is the ability of an atom in a covalent bond to attract the shared electron pair towards itself. Fluorine has the highest electronegativity (Pauling value ≈ 4.0).',
      topic: 'Bond polarity and electronegativity',
    },
    {
      id: 'fc-t3-14',
      front: 'Describe the bonding continuum in terms of ΔEN.',
      back: 'ΔEN ≈ 0: pure (non-polar) covalent. ΔEN 0.5–1.8: polar covalent. ΔEN > 1.8: ionic character dominates. These boundaries are approximate and bonding is a continuum.',
      topic: 'Bond polarity and electronegativity',
    },
    // Subtopic 6: Simple molecular
    {
      id: 'fc-t3-15',
      front: 'Why do simple molecular substances have low melting points?',
      back: 'On melting, only the weak intermolecular forces (London forces, dipole–dipole, or hydrogen bonds) between molecules are broken. The covalent bonds within molecules remain intact and are not involved in the melting process.',
      topic: 'Simple molecular substances and their properties',
    },
    {
      id: 'fc-t3-16',
      front: 'Why is ice less dense than liquid water?',
      back: 'In ice, each H₂O molecule forms 4 hydrogen bonds in an open hexagonal network, spacing molecules further apart than in liquid water. When ice melts, some H-bonds break, the network partially collapses, and the molecules pack more closely, making liquid water denser. Water reaches maximum density at 4 °C.',
      topic: 'Simple molecular substances and their properties',
    },
    // Subtopic 7: Giant covalent
    {
      id: 'fc-t3-17',
      front: 'Compare the structures of diamond and graphite.',
      back: 'Diamond: each C bonded to 4 others (tetrahedral, 109.5°), 3D lattice, no free electrons → does not conduct, very hard. Graphite: each C bonded to 3 others (120°), layered structure, 1 delocalised electron per C → conducts within layers, layers slide easily (weak London forces between layers) → soft/lubricant.',
      topic: 'Giant covalent substances (macromolecular structures)',
    },
    {
      id: 'fc-t3-18',
      front: 'Describe the structure of SiO₂ and explain why it has a very high melting point.',
      back: 'SiO₂ has a giant covalent structure. Each Si is covalently bonded to 4 O atoms; each O bridges 2 Si atoms (Si:O = 1:2). The entire structure consists of Si−O covalent bonds throughout. A very large amount of energy is required to break these many strong covalent bonds, giving a melting point of ~1700 °C.',
      topic: 'Giant covalent substances (macromolecular structures)',
    },
    // Subtopic 8: Bond length and strength
    {
      id: 'fc-t3-19',
      front: 'How does increasing bond order affect bond length and bond enthalpy?',
      back: 'Increasing bond order (1 → 2 → 3) decreases bond length (bonds become shorter) and increases bond enthalpy (bonds become stronger/harder to break). This is because more electron density is located between the nuclei, pulling them closer and holding them more firmly.',
      topic: 'Bond length and bond strength',
    },
    // Subtopic 10: Intermolecular forces
    {
      id: 'fc-t3-20',
      front: 'What are the three types of intermolecular force, in order of increasing strength?',
      back: '1. London (dispersion) forces — weakest; present in ALL molecules; arise from instantaneous/induced dipoles. 2. Permanent dipole–dipole forces — in polar molecules; additive with London forces. 3. Hydrogen bonds — strongest intermolecular force; H bonded to F, O, or N; ~1/10 strength of a covalent bond.',
      topic: 'Intermolecular forces',
    },
    {
      id: 'fc-t3-21',
      front: 'Explain the anomalously high boiling point of water (100 °C) compared with H₂S (−60 °C).',
      back: 'Water molecules form strong hydrogen bonds (H bonded to highly electronegative O, with 2 donors and 2 lone-pair acceptors per molecule, giving up to 4 H-bonds per H₂O). H₂S cannot form hydrogen bonds (S is not electronegative enough) and only has London forces, so its boiling point is much lower.',
      topic: 'Intermolecular forces',
    },
    {
      id: 'fc-t3-22',
      front: 'Why does branching in alkanes lower the boiling point?',
      back: 'Branching makes molecules more spherical, reducing the surface area of contact between neighbouring molecules. This decreases the strength of London (dispersion) forces between molecules, requiring less energy to separate them, so the boiling point is lower. Example: butane (bp −1 °C) vs 2-methylpropane (bp −12 °C).',
      topic: 'Simple molecular substances and their properties',
    },
    // Subtopic 11: Core Practical 2
    {
      id: 'fc-t3-23',
      front: 'State the equation used to calculate the heat transferred (q) in a calorimetry experiment.',
      back: 'q = mcΔT, where: m = mass of solution in grams; c = specific heat capacity of water = 4.18 J g⁻¹ K⁻¹; ΔT = temperature change in K (or °C). q is in joules. For ΔH in kJ mol⁻¹: ΔH = −q/n (÷ 1000 to convert J → kJ).',
      topic: 'Core Practical 2: enthalpy change by calorimetry',
    },
    {
      id: 'fc-t3-24',
      front: 'Why is the sign of ΔH negative for an exothermic calorimetry reaction?',
      back: 'An exothermic reaction releases heat to the surroundings, causing the temperature of the solution to rise (positive ΔT, so q > 0). Since ΔH = −q/n and q is positive, ΔH is negative. A negative ΔH indicates that energy is released by the system to the surroundings.',
      topic: 'Core Practical 2: enthalpy change by calorimetry',
    },
    {
      id: 'fc-t3-25',
      front: 'Name two sources of error in a polystyrene cup calorimetry experiment and a method to reduce each.',
      back: '1. Heat loss to surroundings → use insulated polystyrene cup + lid; extrapolate the cooling curve to find the true ΔT. 2. Inaccurate volume measurement → use a calibrated pipette instead of a measuring cylinder. (Also: assuming c = 4.18 J g⁻¹ K⁻¹ may be slightly inaccurate for non-dilute solutions.)',
      topic: 'Core Practical 2: enthalpy change by calorimetry',
    },
  ],
};
