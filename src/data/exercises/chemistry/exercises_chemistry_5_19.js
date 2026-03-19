export const exercises_chemistry_5_19 = {
  // ─────────────────────────────────────────────────────────────────────
  // MCQ (~30 questions)
  // ─────────────────────────────────────────────────────────────────────
  mcq: [
    // ── Subtopic 0: Amine Nomenclature ─────────────────────────────────────
    {
      id: 'mcq-t19-1',
      stem: 'Which classification correctly describes CH₃CH₂NH₂?',
      options: ['Primary amine', 'Secondary amine', 'Tertiary amine', 'Quaternary ammonium salt'],
      correctAnswer: 0,
      rationale: 'CH₃CH₂NH₂ (ethanamine) has one alkyl group (the ethyl group) bonded to nitrogen, with two H atoms remaining on N. This makes it a primary amine (1°). A secondary amine has two C groups on N; a tertiary has three; a quaternary ammonium salt has four with a positive charge.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'mcq-t19-2',
      stem: 'What is the IUPAC name for CH₃CH₂NHCH₃?',
      options: ['N-methylethanamine', 'Dimethylamine', 'Ethanamine', 'N-ethylmethanamine'],
      correctAnswer: 0,
      rationale: 'CH₃CH₂NHCH₃ is a secondary amine with two methyl groups attached to the nitrogen. According to IUPAC rules for amides, the two methyl groups attached to the nitrogen are named as "N,N-dimethyl". The parent chain is "ethan-" indicating the two-carbon chain including the carbonyl carbon.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'mcq-t19-3',
      stem: 'What is the IUPAC name for CH₃CONHCH₃?',
      options: ['N-Methylmethanamide', 'N,N-Dimethanamide', 'N,N-Dimethylmethanamide', 'Methylmethylamine'],
      correctAnswer: 1,
      rationale: 'CH₃CONHCH₃ is a secondary amide. According to IUPAC rules for amides, the two methyl groups attached to the nitrogen are named as "N,N-dimethyl". The parent chain is "ethan-" indicating the two-carbon chain including the carbonyl carbon.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'mcq-t19-4',
      stem: 'Why do tertiary amines have lower boiling points than primary amines of similar molecular mass?',
      options: ['Tertiary amines have no N-H bonds and cannot form intermolecular hydrogen bonds', 'Tertiary amines are more branched and have fewer London forces', 'Tertiary amines have stronger dipole-dipole interactions that prevent hydrogen bonding', 'Tertiary amines react with water and lose their N-H bonds'],
      correctAnswer: 0,
      rationale: 'Hydrogen bonding requires N-H (or O-H or F-H) bonds. Primary amines (RNH₂) and secondary amines (R₂NH) have N-H bonds and can form intermolecular hydrogen bonds with each other. Tertiary amines (R₃N) lack N-H bonds, so they cannot form intermolecular N-H···N hydrogen bonds. Without this extra intermolecular force, less energy is needed to overcome London dispersion forces, giving lower boiling points.',
      topic: 'Physical Properties of Amines'
    },
    {
      id: 'mcq-t19-5',
      stem: 'What is the approximate pKb value for phenylamine (C₆H₅NH₂)?',
      options: ['3.4', '4.7', '9.3', '12.1'],
      correctAnswer: 2,
      rationale: 'Phenylamine has a pKb value of approximately 9.3. This is significantly higher than water (pKb = 7), meaning phenylamine is actually a weaker base than water. The high pKb value is due to delocalisation of the nitrogen lone pair into the benzene ring.',
      topic: 'Base Strength and pKb Values'
    },
    {
      id: 'mcq-t19-6',
      stem: 'Why is methylamine a stronger base than ammonia?',
      options: ['Methyl groups are electron-withdrawing', 'Methyl groups donate electrons inductively', 'Methyl groups increase molecular size', 'Methylamine has a higher pKb than ammonia'],
      correctAnswer: 1,
      rationale: 'Methyl groups are electron-donating through the inductive effect. This increases electron density on the nitrogen lone pair, making it more readily available to accept a proton. Therefore, methylamine (pKb ≈ 3.4) is a stronger base than ammonia (pKb ≈ 4.7).',
      topic: 'Alkylamines: Stronger Bases Than Ammonia'
    },
    {
      id: 'mcq-t19-7',
      stem: 'Why is phenylamine a weaker base than ammonia?',
      options: ['Phenylamine has lower molar mass', 'The benzene ring withdraws electrons from nitrogen', 'The lone pair on nitrogen is delocalised into the benzene ring', 'Phenylamine forms fewer hydrogen bonds'],
      correctAnswer: 2,
      rationale: 'In phenylamine, the nitrogen lone pair is delocalised into the benzene ring through resonance. This means the lone pair electrons are spread out over the π system and are less available to accept a proton. A protonated phenylamine cation is destabilised because resonance is lost upon protonation, making the process unfavourable.',
      topic: 'Arylamines: Weaker Bases Than Ammonia'
    },
    {
      id: 'mcq-t19-8',
      stem: 'What is the product when a primary amine reacts with hydrochloric acid?',
      options: ['A neutral amine molecule', 'A quaternary ammonium salt', 'A tertiary amine hydrochloride', 'An amide and water'],
      correctAnswer: 1,
      rationale: 'Amines react with acids to form ammonium salts. The nitrogen lone pair accepts a proton (H⁺) from the acid, forming a positively charged ammonium ion. For a primary amine like methylamine, the product is a primary alkylammonium chloride (e.g., CH₃NH₃⁺Cl⁻), which is a quaternary ammonium salt.',
      topic: 'Reaction with Water: Alkaline Solutions'
    },
    {
      id: 'mcq-t19-9',
      stem: 'What product is formed when ethanoyl chloride (CH₃COCl) reacts with excess ammonia?',
      options: ['Ethanamide and ammonium chloride', 'Ethanoic acid and ammonium chloride', 'Ethanamide only', 'N,N-Dimethanamide and ammonium chloride'],
      correctAnswer: 0,
      rationale: 'Ethanoyl chloride reacts with ammonia via nucleophilic acyl substitution. The nitrogen lone pair attacks the electrophilic carbonyl carbon, the chlorine leaves, and an amide forms. With excess ammonia (2NH₃), the HCl released reacts to form ammonium chloride (NH₄⁺Cl⁻). The overall equation is: CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl.',
      topic: 'Amide Formation from Acyl Chlorides'
    },
    {
      id: 'mcq-t19-10',
      stem: 'What is observed when an amide is hydrolysed with sodium hydroxide under heat?',
      options: ['Hydrogen gas is evolved', 'A white precipitate forms', 'Ammonia gas is released (pungent smell, turns damp red litmus blue)', 'Carbon dioxide gas is evolved'],
      correctAnswer: 2,
      rationale: 'When an amide is hydrolysed under alkaline conditions (NaOH), the peptide bond is broken and ammonia gas is released. The ammonia can be detected by its pungent smell and by turning damp red litmus paper blue. This is a standard chemical test for identifying amides. Note that ammonium salts also release NH₃ with NaOH, but they do so immediately in the cold, whereas amides require heating.',
      topic: 'Amide Hydrolysis'
    },
    {
      id: 'mcq-t19-11',
      stem: 'What monomers are used to make nylon-6,6?',
      options: ['Hexanedioic acid and 1,6-diaminohexane', 'Hexane-1,6-diol and adipic acid', 'Hexanedioic acid and 1,6-diaminopropane', 'Adipic acid and hexane-1,6-diamine'],
      correctAnswer: 0,
      rationale: 'Nylon-6,6 is a condensation polymer formed from hexanedioic acid (adipic acid, HOOC-(CH₂)₄-COOH) and 1,6-diaminohexane (H₂N-(CH₂)₆-NH₂). The "6,6" in the name indicates that each monomer has 6 carbons. The polymerisation produces polyamide chains with repeating amide linkages and eliminates water molecules.',
      topic: 'Condensation Polymerisation: Polyamides (Nylon)'
    },
    {
      id: 'mcq-t19-12',
      stem: 'What is the key structural difference between nylon and Kevlar?',
      options: ['Kevlar uses dicarboxylic acid while nylon uses acyl chloride', 'Kevlar has benzene rings while nylon has alkyl chains', 'Kevlar uses aromatic monomers while nylon uses aliphatic monomers', 'Kevlar has weaker hydrogen bonding than nylon'],
      correctAnswer: 2,
      rationale: 'Kevlar is an aromatic polyamide (aramid), meaning it contains benzene rings in its backbone. Nylon-6,6 is an aliphatic polyamide with alkyl (straight-chain) segments between amide groups. The presence of aromatic rings in Kevlar gives it greater rigidity, strength, and heat resistance compared to nylon, making it suitable for bulletproof vests.',
      topic: 'Kevlar: Aromatic Polyamide'
    },
    {
      id: 'mcq-t19-13',
      stem: 'What happens to benzenediazonium chloride if the temperature rises above 5°C?',
      options: ['It forms a stable azo compound', 'It decomposes to phenol and nitrogen gas', 'It reacts to form aniline', 'It forms 2,4-dinitrochlorobenzene'],
      correctAnswer: 1,
      rationale: 'Diazonium ions are thermally unstable. If the temperature rises above approximately 5°C, the diazonium ion decomposes to form phenol (C₆H₅OH) and nitrogen gas (N₂) is released. This is why temperature control using an ice bath is critical during diazotisation reactions.',
      topic: 'Diazotisation: Formation of Diazonium Ions'
    },
    {
      id: 'mcq-t19-14',
      stem: 'What type of polymer is poly(propenamide)?',
      options: ['A condensation polymer', 'An addition polymer', 'A thermosetting polymer', 'An elastomeric polymer'],
      correctAnswer: 1,
      rationale: 'Poly(propenamide) is an addition polymer because it is formed by the polymerisation of propenamide (CH₂=CH-CONH₂). Only the carbon-carbon double bond reacts during polymerisation; the amide group (-CONH₂) does NOT participate in the reaction. This distinguishes it from condensation polymers like nylon, which involve the loss of water molecules when monomers join.',
      topic: 'Poly(propenamide): Addition Polymer from an Amide Monomer'
    },
    {
      id: 'mcq-t19-15',
      stem: 'What colour does an amino acid produce with ninhydrin on a chromatography paper?',
      options: ['Green', 'Yellow', 'Blue or purple (Ruhemann\'s purple)', 'Brown'],
      correctAnswer: 2,
      rationale: 'Ninhydrin reacts with the amino group (-NH₂) of an amino acid to produce a characteristic purple colour known as Ruhemann\'s purple. This reaction forms the basis of the ninhydrin test used to identify amino acids after chromatography separation. Note that some primary amines may give a yellow colour rather than purple.',
      topic: 'Identifying Amino Acids by Paper Chromatography'
    },
    {
      id: 'mcq-t19-16',
      stem: 'What is a zwitterion?',
      options: ['A molecule with both positive and negative charges in separate locations', 'A molecule that can act as both an acid and a base', 'A molecule with no net charge but separated positive and negative regions', 'An ionic compound with delocalised electrons'],
      correctAnswer: 2,
      rationale: 'A zwitterion (or dipolar ion) is a molecule that contains both a positively charged region and a negatively charged region, giving it no net charge overall. In amino acids at neutral pH, the carboxyl group donates a proton to the amino group, forming ⁺H₃N-CHR-COO⁻. The positive charge is on the nitrogen (as -NH₃⁺) and the negative charge is on the carboxyl group (as -COO⁻).',
      topic: 'Amino Acid Structure and Zwitterion Formation'
    },
    {
      id: 'mcq-t19-17',
      stem: 'What is the isoelectric point (pI) of an amino acid?',
      options: ['The pH at which the amino acid has maximum positive charge', 'The pH at which the amino acid has maximum negative charge', 'The pH at which the amino acid has no net electrical charge', 'The pH at which the amino acid forms a zwitterion'],
      correctAnswer: 2,
      rationale: 'The isoelectric point (pI) is the pH at which an amino acid has no net electrical charge. At the pI, the molecule exists primarily as a zwitterion (⁺H₃N-CHR-COO⁻) with equal numbers of positive and negative charges. Below the pI, the amino acid has a net positive charge; above the pI, it has a net negative charge.',
      topic: 'Isoelectric Point (pI)'
    },
    {
      id: 'mcq-t19-18',
      stem: 'What is observed when an amino acid is below its isoelectric point during electrophoresis?',
      options: ['It moves towards the positive electrode', 'It does not move', 'It moves towards the negative electrode', 'It moves randomly in both directions'],
      correctAnswer: 0,
      rationale: 'When the pH is below the isoelectric point, the amino acid has a net positive charge. Positively charged molecules are attracted to the negative electrode (cathode) and move towards it during electrophoresis. The ammonium group (-NH₃⁺) dominates over the carboxylate group (-COO⁻) at these pH values.',
      topic: 'Amino Acids in Electrophoresis'
    },
    {
      id: 'mcq-t19-19',
      stem: 'Which of the following amino acids is NOT chiral?',
      options: ['Alanine', 'Valine', 'Glycine', 'Leucine'],
      correctAnswer: 2,
      rationale: 'Glycine is the only standard amino acid that is not chiral. This is because its α-carbon is bonded to two hydrogen atoms (from the -NH₂ group), giving it only three different groups (-NH₃⁺, -COO⁻, -H, and -H). A chiral centre requires a carbon bonded to four different groups, which glycine lacks. All other standard amino acids have a chiral α-carbon.',
      topic: 'Chirality and Optical Activity of Amino Acids'
    },
    {
      id: 'mcq-t19-20',
      stem: 'What is formed when two different amino acids condense to form a dipeptide?',
      options: ['Two identical molecules', 'Two different dipeptides are possible', 'A tripeptide and water', 'A single dipeptide and ammonium chloride'],
      correctAnswer: 1,
      rationale: 'When two different amino acids (e.g., alanine and glycine) condense, two different dipeptides are possible. For Ala-Gly, alanine\'s carboxyl group bonds to glycine\'s amino group; for Gly-Ala, glycine\'s carboxyl group bonds to alanine\'s amino group. These two products are different molecules with different sequences.',
      topic: 'Dipeptides: Order Matters'
    },
    {
      id: 'mcq-t19-21',
      stem: 'What type of bond links amino acids in a protein chain?',
      options: ['Hydrogen bond between side chains', 'Disulfide bond between cysteine residues', 'Ionic interaction between charged side chains', 'Peptide bond (C=O from -CO- to N of -NH-)'],
      correctAnswer: 3,
      rationale: 'The peptide bond (also called an amide bond) is the covalent bond that links amino acids in a protein chain. It forms between the carboxyl group (-COOH) of one amino acid and the amino group (-NH₂) of another, resulting in a -CO-NH- linkage with the elimination of water. This bond is crucial for protein structure and can be broken by hydrolysis.',
      topic: 'Peptide Bond Formation'
    },
    {
      id: 'mcq-t19-22',
      stem: 'What stabilises the tertiary structure of a protein?',
      options: ['Covalent bonds between side chains', 'Hydrogen bonds between backbone N-H and C=O groups', 'Ionic interactions between amino acids', 'Disulfide bonds between cysteine residues'],
      correctAnswer: 1,
      rationale: 'Secondary structure in proteins is stabilised by hydrogen bonds that form between the N-H hydrogen of one peptide bond and the C=O oxygen of another peptide bond in the backbone. These regular patterns create α-helices (coiled spirals) and β-pleated sheets (strands lying alongside each other). The hydrogen bonds provide stability but are weaker than covalent bonds.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'mcq-t19-23',
      stem: 'What happens to an enzyme at temperatures significantly above its optimum?',
      options: ['The reaction rate increases', 'The enzyme becomes more specific', 'The enzyme is denatured (loses its shape and activity)', 'The activation energy is decreased'],
      correctAnswer: 2,
      rationale: 'At temperatures significantly above the optimum, an enzyme becomes denatured. The tertiary structure of the protein begins to unfold as the relatively weak bonds holding it together (hydrogen bonds, van der Waals forces, ionic interactions) are broken. This causes the active site to lose its specific shape, and the enzyme can no longer bind its substrate effectively.',
      topic: 'Factors Affecting Enzyme Activity'
    },
    {
      id: 'mcq-t19-24',
      stem: 'What is the effect of a competitive inhibitor on an enzyme-catalysed reaction?',
      options: ['It permanently denatures the enzyme', 'It increases the activation energy', 'It blocks the active site but can be overcome by excess substrate', 'It increases the rate of reaction'],
      correctAnswer: 2,
      rationale: 'A competitive inhibitor has a similar shape to the normal substrate and binds directly to the active site. It temporarily blocks the site but does not react further. Increasing the concentration of substrate will out-compete the inhibitor for the active site and restore the reaction rate. This is different from non-competitive inhibitors, which bind elsewhere and permanently alter the enzyme\'s shape.',
      topic: 'Enzyme Inhibitors'
    },
    {
      id: 'mcq-t19-25',
      stem: 'How is RF value calculated in paper chromatography?',
      options: ['Distance moved by solvent divided by distance moved by spot', 'Distance moved by spot divided by total length of paper', 'Distance from baseline to spot divided by distance moved by solvent front', 'Distance from origin to baseline divided by distance moved by solvent front'],
      correctAnswer: 2,
      rationale: 'The Rf (retention factor) value is calculated as the distance moved by the compound (from the baseline to the centre of the spot) divided by the distance moved by the solvent front. Importantly, the Rf value must always be less than 1 because the spot cannot travel further than the solvent front. If Rf > 1, a calculation error has been made.',
      topic: 'Identifying Amino Acids by Paper Chromatography'
    },
    {
      id: 'mcq-t19-26',
      stem: 'What test result indicates the presence of a carboxylic acid?',
      options: ['Red litmus turns blue', 'Vigorous effervescence with sodium carbonate and CO₂ gas', 'Blue/purple colour with ninhydrin', 'Dissolves in HCl to form a salt'],
      correctAnswer: 1,
      rationale: 'Carboxylic acids react with sodium carbonate (Na₂CO₃) to produce carbon dioxide gas with vigorous effervescence (bubbling). The CO₂ gas can be detected by testing with a burning splint held above the reaction mixture - the gas extinguishes the flame with a characteristic "pop" sound, confirming the presence of a carboxylic acid.',
      topic: 'Core Practical 15: Unknown Organic Analysis'
    },
    {
      id: 'mcq-t19-27',
      stem: 'What is the product when an amide is heated with sodium hydroxide?',
      options: ['Ammonia gas and carboxylate ion', 'A carboxylic acid and amine', 'Ammonium salt and water', 'Nitrogen gas and alcohol'],
      correctAnswer: 0,
      rationale: 'When an amide is hydrolysed with sodium hydroxide (NaOH) under heat, the peptide bond is broken. The products are a carboxylate ion (RCOO⁻) and ammonia gas (NH₃). The ammonia is released as a gas (can be detected by its pungent smell and turning damp red litmus blue). This is the alkaline hydrolysis of an amide, distinguishing it from the acid hydrolysis which produces a carboxylic acid (RCOOH) and ammonium ion (NH₄⁺).',
      topic: 'Test 5: NaOH and Heat (Detection of Amides)'
    },
    {
      id: 'mcq-t19-28',
      stem: 'What is the significance of the isoelectric point in protein separation techniques?',
      options: ['It indicates the pH of maximum enzyme activity', 'It is the pH at which the protein has no net charge and does not move in electrophoresis', 'It is the pH at which the protein precipitates', 'It indicates the temperature at which protein folding occurs'],
      correctAnswer: 1,
      rationale: 'The isoelectric point (pI) is significant in protein purification techniques like isoelectric focusing. At the pI, a protein has no net charge and does not move during electrophoresis. This allows proteins to be separated or held in place while other charged proteins continue moving. This technique is particularly useful for purifying complex protein mixtures.',
      topic: 'Isoelectric Point (pI)'
    },
    {
      id: 'mcq-t19-29',
      stem: 'What is observed when a primary aliphatic amine reacts with nitrous acid?',
      options: ['A stable diazonium ion forms', 'A yellow nitrosamine oil forms (carcinogenic)', 'A white precipitate appears', 'Effervescence of nitrogen gas occurs immediately'],
      correctAnswer: 3,
      rationale: 'Unlike aromatic amines like phenylamine which form stable diazonium ions at low temperature, primary aliphatic amines react differently with nitrous acid. The unstable diazonium ion formed decomposes immediately, releasing a burst of colourless, odourless nitrogen gas. Secondary aliphatic amines produce a yellow oil known as a nitrosamine (which is carcinogenic), while tertiary aliphatic amines simply form a colourless salt solution.',
      topic: 'Reactions of Aliphatic Amines with Nitrous Acid'
    },
    {
      id: 'mcq-t19-30',
      stem: 'Why do azo compounds have intense colours?',
      options: ['They contain heavy metal ions', 'They have extended conjugated π systems that absorb visible light', 'They form strong hydrogen bonds', 'They contain aromatic rings that scatter light'],
      correctAnswer: 1,
      rationale: 'Azo compounds contain the -N=N- chromophore (chromophore = colour-bearing group) that creates an extended conjugated system of alternating single and double bonds. This delocalisation lowers the energy gap between electronic states, allowing the molecule to absorb visible light (longer wavelength, lower energy) rather than just UV light. The extensive conjugation through both benzene rings and the N=N bridge gives azo compounds their characteristic orange, red, or yellow colours.',
      topic: 'Azo Dye Uses'
    },
    {
      id: 'mcq-t19-31',
      stem: 'What is the structural formula of a zwitterion formed from alanine at neutral pH?',
      options: ['CH₃CH(NH₃)⁺COOH', '⁺H₃N-CH(CH₃)-COO⁻', 'H₂N-CH(CH₃)-COOH', 'H₂N-CH(CH₃)⁺COO⁻'],
      correctAnswer: 1,
      rationale: 'At neutral pH (approximately pH 7), alanine exists predominantly as a zwitterion. The carboxyl group donates a proton to the amino group, forming ⁺H₃N-CH(CH₃)-COO⁻. The positive charge is on the nitrogen atom (shown as -NH₃⁺) and the negative charge is on the carboxyl oxygen (shown as -COO⁻). The molecule has no net charge overall.',
      topic: 'Amino Acid Structure and Zwitterion Formation'
    },
    {
      id: 'mcq-t19-32',
      stem: 'How does a non-competitive inhibitor affect enzyme activity?',
      options: ['It binds to the active site temporarily', 'It increases substrate binding affinity', 'It decreases the activation energy', 'It increases the Vmax of the reaction'],
      correctAnswer: 0,
      rationale: 'A non-competitive inhibitor binds to the enzyme at a site other than the active site. Its binding alters the overall tertiary structure of the enzyme, which in turn changes the shape of the active site so that the true substrate can no longer fit. Importantly, increasing the concentration of substrate has NO effect on overcoming a non-competitive inhibitor because it does not compete for the same binding site.',
      topic: 'Enzyme Inhibitors'
    },
    {
      id: 'mcq-t19-33',
      stem: 'What is produced when an amine reacts with an acyl chloride?',
      options: ['An ammonium salt only', 'An amide and hydrogen chloride', 'An amide and ammonium chloride', 'An ammonium salt and alcohol'],
      correctAnswer: 2,
      rationale: 'When an amine reacts with an acyl chloride (RCOCl), a nucleophilic acyl substitution occurs. The nitrogen lone pair attacks the electrophilic carbonyl carbon, the chloride leaves as HCl, and an amide (RCONHR) forms. The HCl released can then react with excess amine to form an ammonium chloride salt. Therefore, both amide and ammonium chloride are produced.',
      topic: 'Amide Formation from Acyl Chlorides'
    },
    {
      id: 'mcq-t19-34',
      stem: 'Why are short-chain primary amines very soluble in water?',
      options: ['They form ionic bonds with water molecules', 'They form hydrogen bonds with water', 'They have low molecular mass', 'They have no London dispersion forces'],
      correctAnswer: 1,
      rationale: 'Short-chain primary amines (methyl, ethyl, propyl) are very soluble in water because they can form hydrogen bonds with water molecules. The nitrogen atom has a lone pair that can act as a hydrogen bond acceptor, and the N-H bonds in the amine can act as hydrogen bond donors. These intermolecular hydrogen bonds provide enough energy to overcome the London dispersion forces between amine molecules, allowing them to dissolve freely.',
      topic: 'Solubility of Amines in Water'
    },
    {
      id: 'mcq-t19-35',
      stem: 'What is the product of nitrile reduction with H₂/Ni catalyst?',
      options: ['A primary amine with the same number of carbons as the nitrile', 'A primary amine with one fewer carbon than the nitrile', 'A secondary amine', 'An amide'],
      correctAnswer: 0,
      rationale: 'When a nitrile (R-C≡N) is reduced with hydrogen gas and a metal catalyst (such as Ni), the triple bond between carbon and nitrogen is broken and the molecule gains hydrogen atoms to form a primary amine: R-CH₂-NH₂. Importantly, the product has ONE MORE carbon than the original nitrile starting material because the nitrile carbon becomes the α-carbon of the new amine.',
      topic: 'Reduction of Nitriles to Primary Amines'
    },
    {
      id: 'mcq-t19-36',
      stem: 'What type of bond is formed between two cysteine residues in a protein?',
      options: ['Hydrogen bond', 'Disulfide bond (S-S covalent bond)', 'Peptide bond', 'Ionic interaction'],
      correctAnswer: 1,
      rationale: 'A disulfide bond is a strong covalent bond (S-S) formed between two cysteine residues in a protein. This bond forms when two cysteine thiol (-SH) groups react, oxidising and releasing two electrons and two protons. Disulfide bonds are particularly important in extracellular proteins as they provide additional stability, helping proteins resist denaturation and maintain their structure in harsh environments.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'mcq-t19-37',
      stem: 'What indicates that a compound is an amine in the litmus test?',
      options: ['Red litmus remains red', 'Red litmus turns blue', 'Blue litmus turns red', 'No colour change occurs'],
      correctAnswer: 1,
      rationale: 'Amines are basic due to the lone pair on the nitrogen atom. When an amine is added to moist red litmus paper, the nitrogen lone pair accepts a proton from water molecules in the paper, forming the ammonium ion. This increases the pH, causing the red litmus to turn blue. The colour change indicates the presence of a basic functional group.',
      topic: 'Test 1: Litmus Test (Detection of Amines)'
    },
    {
      id: 'mcq-t19-38',
      stem: 'What is observed when benzenediazonium chloride reacts with potassium iodide?',
      options: ['A yellow azo compound forms', 'Iodobenzene is formed and nitrogen gas is released', 'A white precipitate of 2,4,6-tribromophenol appears', 'Phenol is produced and nitrogen gas is evolved'],
      correctAnswer: 1,
      rationale: 'When benzenediazonium chloride (C₆H₅N₂⁺Cl⁻) reacts with potassium iodide (KI) under cold conditions, a substitution reaction occurs. The -N₂⁺ group is replaced by iodine to form iodobenzene (C₆H₅I) and nitrogen gas (N₂) is released. This is a useful reaction for introducing iodine substituents onto benzene rings that are otherwise difficult to attach directly.',
      topic: 'Substitution Reactions of Diazonium Ions'
    },
    {
      id: 'mcq-t19-39',
      stem: 'What is the relationship between pKb and base strength?',
      options: ['Higher pKb means stronger base', 'Lower pKb means stronger base', 'pKb and base strength are not related', 'pKb < 7 indicates the compound is more basic than water'],
      correctAnswer: 1,
      rationale: 'pKb is the negative logarithm of the base dissociation constant (Kb): pKb = -log(Kb). A higher Kb value (which means a weaker acid in the equilibrium expression for bases) corresponds to a lower pKb. Therefore, a lower pKb value indicates a stronger base because the equilibrium lies further towards the deprotonated form. For example, methylamine (pKb ≈ 3.4) is stronger than ammonia (pKb ≈ 4.7).',
      topic: 'Base Strength and pKb Values'
    },
    {
      id: 'mcq-t19-40',
      stem: 'What colour change indicates the presence of an amino acid in the ninhydrin test?',
      options: ['Yellow colour (primary amine)', 'Blue or purple (Ruhemann\'s purple)', 'Green colour', 'Orange colour'],
      correctAnswer: 1,
      rationale: 'Amino acids produce a characteristic blue or purple colour known as Ruhemann\'s purple when reacted with ninhydrin. The reaction involves the amino group (-NH₂) of the amino acid and the carbonyl groups of ninhydrin, producing a coloured product. While some primary amines may give a yellow colour with ninhydrin, the intense purple is distinctive for amino acids.',
      topic: 'Test 3: Ninhydrin Test (Detection of Amino Acids and Amines)'
    },
    {
      id: 'mcq-t19-41',
      stem: 'Why does glycine have a high melting point despite its small size?',
      options: ['It forms stronger hydrogen bonds than other amino acids', 'It exists as a zwitterion in the solid lattice with strong ionic attractions', 'It has a larger molar mass than expected', 'It contains additional polar side chains'],
      correctAnswer: 1,
      rationale: 'Amino acids in the solid state exist as zwitterions (⁺H₃N-CHR-COO⁻). The strong ionic attractions between these zwitterions in the crystal lattice require significant energy to overcome, resulting in surprisingly high melting points (typically 200-300°C). This explains why small amino acids like glycine melt at much higher temperatures than expected based on molecular size alone.',
      topic: 'Physical Properties of Amino Acids'
    },
    {
      id: 'mcq-t19-42',
      stem: 'What is the product when phenylamine is reduced with tin and concentrated HCl?',
      options: ['Phenylammonium chloride only', 'Aniline and tin chloride', 'Phenylamine and ammonium chloride', 'A zwitterion of phenylamine'],
      correctAnswer: 0,
      rationale: 'When phenylamine (C₆H₅NH₂) is reduced with tin and concentrated hydrochloric acid, the nitro group (-NO₂) is converted to an amino group (-NH₂). In the acidic conditions, the phenylamine is immediately protonated to form phenylammonium chloride (C₆H₅NH₃⁺Cl⁻) as a salt. Addition of sodium hydroxide is then required to liberate free phenylamine base.',
      topic: 'Reduction of Nitrobenzene to Phenylamine'
    },
    {
      id: 'mcq-t19-43',
      stem: 'What structural feature allows azo compounds to be permanent dyes that do not fade?',
      options: ['The presence of heavy metal ions', 'Extensive conjugation creating a thermodynamically stable π system', 'Strong hydrogen bonding between molecules', 'The presence of aromatic rings that scatter UV light'],
      correctAnswer: 1,
      rationale: 'Azo compounds have an extensively conjugated π system through both benzene rings and the -N=N- bridge. This delocalisation creates a thermodynamically stable structure where excited electrons can return to the same ground state without the molecule breaking down. When visible light is absorbed, the π→π* transitions occur, but the conjugated system is not degraded, allowing the dye to maintain its colour permanently without fading.',
      topic: 'Azo Dye Uses'
    },
    {
      id: 'mcq-t19-44',
      stem: 'What is the difference between addition and condensation polymerisation?',
      options: ['Addition polymers eliminate water, condensation polymers eliminate nothing', 'Addition polymers use monomers with C=C bonds, condensation polymers eliminate small molecules', 'Addition polymers are always saturated, condensation polymers are always unsaturated'],
      correctAnswer: 2,
      rationale: 'The key difference is that condensation polymerisation involves the elimination of a small molecule (typically water) when monomers join. For example, nylon formation from diamine and diacid produces H₂O molecules. Addition polymerisation involves C=C double bonds breaking and reforming without elimination of any byproduct. Condensation polymers can be unsaturated (like polyamides) while addition polymers can be unsaturated or saturated depending on monomer structure.',
      topic: 'Polyamide Properties and Uses'
    },
    {
      id: 'mcq-t19-45',
      stem: 'What determines the chirality of an amino acid?',
      options: ['Four different groups attached to α-carbon (chiral centre)', 'Two identical groups at α-carbon', 'Three different groups at α-carbon', 'The presence of a double bond in the molecule'],
      correctAnswer: 0,
      rationale: 'The chirality of an amino acid is determined by the α-carbon (the carbon attached to both -NH₂ and -COOH groups). If this α-carbon is bonded to four different groups, it is a chiral centre and the molecule is optically active. Glycine is the exception because its α-carbon has only three different groups (two hydrogens), so it has no chiral centre and is optically inactive. The presence of a double bond elsewhere in the molecule does not create chirality.',
      topic: 'Chirality and Optical Activity of Amino Acids'
    },
    {
      id: 'mcq-t19-46',
      stem: 'What is the relationship between pKb and base strength?',
      options: ['Higher pKb means stronger base', 'Lower pKb means stronger base', 'pKb and base strength are not related', 'pKb < 7 indicates the compound is more basic than water'],
      correctAnswer: 1,
      rationale: 'pKb is the negative logarithm of the base dissociation constant (Kb): pKb = -log(Kb). A higher Kb value (which means a weaker acid in the equilibrium expression for bases) corresponds to a lower pKb. Therefore, a lower pKb value indicates a stronger base because the equilibrium lies further towards the deprotonated form. For example, methylamine (pKb ≈ 3.4) is stronger than ammonia (pKb ≈ 4.7).',
      topic: 'Base Strength and pKb Values'
    },
    {
      id: 'mcq-t19-47',
      stem: 'What test result indicates the presence of a carboxylic acid?',
      options: ['Red litmus turns blue', 'Vigorous effervescence with sodium carbonate and CO₂ gas', 'Blue/purple colour with ninhydrin', 'Dissolves in HCl to form a salt'],
      correctAnswer: 1,
      rationale: 'Carboxylic acids react with sodium carbonate (Na₂CO₃) to produce carbon dioxide gas with vigorous effervescence (bubbling). The CO₂ gas can be detected by testing with a burning splint held above the reaction mixture - the gas extinguishes the flame with a characteristic "pop" sound, confirming the presence of a carboxylic acid.',
      topic: 'Core Practical 15: Unknown Organic Analysis'
    },
    {
      id: 'mcq-t19-48',
      stem: 'What is the poly(ethenol)/PVA two-stage production?',
      options: ['Stage 1: addition polymerisation of ethenyl ethanoate', 'Stage 2: transesterification with ethanol', 'Stage 1: addition polymerisation of ethenyl ethanoate then hydrolysis', 'Stage 1: addition polymerisation of ethene then esterification'],
      correctAnswer: 0,
      rationale: 'Poly(ethenol)/PVA is produced in two stages. Stage 1 involves addition polymerisation of ethenyl ethanoate (vinyl acetate, CH₂=CH-OOCCH₃) where only the C=C double bond reacts. Stage 2 involves transesterification with methanol, which replaces the -OOCCH₃ ester side groups with -OH groups, forming poly(ethenol). Ethenol cannot be used directly because it tautomerises to ethanal.',
      topic: 'Poly(ethenol)/PVA: Two-Stage Production'
    },
    {
      id: 'mcq-t19-49',
      stem: 'What is the significance of isoelectric point in protein separation techniques?',
      options: ['It indicates the pH of maximum enzyme activity', 'It is the pH at which the protein has no net charge and does not move in electrophoresis', 'It is the pH at which the protein precipitates', 'It indicates the temperature at which protein folding occurs'],
      correctAnswer: 1,
      rationale: 'The isoelectric point (pI) is significant in protein purification techniques like isoelectric focusing. At the pI, a protein has no net charge and does not move during electrophoresis. This allows proteins to be separated or held in place while other charged proteins continue moving. This technique is particularly useful for purifying complex protein mixtures.',
      topic: 'Isoelectric Point (pI)'
    }
  ],
  // ─────────────────────────────────────────────────────────────────────
  // FILL-IN-THE-BLANK (~15 questions)
  // ─────────────────────────────────────────────────────────────────────
  fillblank: [
    // ── Subtopic 0: Amine Nomenclature ─────────────────────────────────────
    {
      id: 'fb-t19-1',
      stem: 'The general formula for amines is __BLANK__, where R represents the alkyl group.',
      blanks: [
        { answer: 'RNH₂' }
      ],
      rationale: 'The general formula for amines is RNH₂ for primary amines, R₂NH for secondary amines, and R₃N for tertiary amines. The R represents the alkyl group(s) attached to the nitrogen atom. Primary amines have one alkyl group, secondary have two, and tertiary have three.'
    },
    {
      id: 'fb-t19-2',
      stem: 'The IUPAC name for CH₃CH₂NHCH₃ is __BLANK__.',
      blanks: [
        { answer: 'N-methylethanamine' }
      ],
      rationale: 'CH₃CH₂NHCH₃ is a secondary amine with two methyl groups attached to the nitrogen. According to IUPAC nomenclature, the nitrogen substituents are named as "N,N-dimethyl". The parent chain is "ethan-" indicating the two-carbon chain including the carbonyl carbon.'
    },
    {
      id: 'fb-t19-3',
      stem: 'The lone pair on nitrogen makes amines __BLANK__, allowing them to accept protons from acids.',
      blanks: [
        { answer: 'basic' }
      ],
      rationale: 'Amines are bases because the nitrogen atom has a lone pair of electrons. This lone pair can form a dative bond with a proton (H⁺) from an acid, forming a positively charged ammonium ion (RNH₃⁺). The ability to accept protons quantifies the basicity of the amine.'
    },
    {
      id: 'fb-t19-4',
      stem: 'Alkylamines are __BLANK__ bases than ammonia because alkyl groups donate electrons inductively.',
      blanks: [
        { answer: 'stronger' }
      ],
      rationale: 'Alkyl groups push electron density towards the nitrogen atom through the inductive effect. This increases electron density on the nitrogen lone pair, making it more readily available to accept a proton. Therefore, alkylamines have higher Kb values (lower pKb) than ammonia, making them stronger bases.'
    },
    {
      id: 'fb-t19-5',
      stem: 'Phenylamine is a __BLANK__ base than ammonia because the lone pair on nitrogen is delocalised into the benzene ring.',
      blanks: [
        { answer: 'weaker' }
      ],
      rationale: 'In phenylamine, the nitrogen lone pair is delocalised into the benzene ring through resonance. This reduces electron density on the nitrogen, making the lone pair less available to accept a proton. A protonated phenylamine cation is destabilised because resonance is lost upon protonation, making the process unfavourable.'
    },
    {
      id: 'fb-t19-6',
      stem: 'The equation for amide formation from acyl chloride and ammonia is: R-COCl + __BLANK__ NH₃ → R-CONH₂ + NH₄Cl.',
      blanks: [
        { answer: '2' }
      ],
      rationale: 'When an acyl chloride reacts with ammonia, one molecule of ammonia provides the nitrogen for the amide, while a second molecule of ammonia reacts with the HCl produced to form ammonium chloride. The overall reaction uses two molecules of ammonia (2NH₃) to give one amide molecule and one molecule of ammonium chloride (NH₄Cl).'
    },
    {
      id: 'fb-t19-7',
      stem: 'Diazonium salts are formed at temperatures __BLANK__ 5°C because they are unstable above this temperature.',
      blanks: [
        { answer: 'below' }
      ],
      rationale: 'Diazonium ions are thermally unstable and decompose if the temperature rises above approximately 5°C. Below this temperature, diazonium salts are relatively stable, but above 5°C they rapidly decompose to form phenol and nitrogen gas. This is why careful temperature control with an ice bath is essential during diazotisation reactions.'
    },
    {
      id: 'fb-t19-8',
      stem: 'Azo compounds contain the __BLANK__ chromophore, which gives them intense colours due to extended conjugation.',
      blanks: [
        { answer: '-N=N-' }
      ],
      rationale: 'The -N=N- (azo) group is the chromophore (colour-bearing group) in azo compounds. This group creates an extended conjugated system of alternating single and double bonds. The extensive conjugation lowers the energy gap between electronic states, allowing absorption of visible light and producing characteristic orange, red, or yellow colours.'
    },
    {
      id: 'fb-t19-9',
      stem: 'In a zwitterion, the nitrogen atom carries a __BLANK__ charge, while the carboxyl group carries a negative charge.',
      blanks: [
        { answer: 'positive' }
      ],
      rationale: 'A zwitterion (dipolar ion) is a molecule that contains both positively and negatively charged regions with no net charge. In amino acids at neutral pH, the carboxyl group donates a proton to the amino group. The nitrogen gains a proton and becomes positively charged (-NH₃⁺) while the carboxyl oxygen becomes negatively charged (-COO⁻).'
    },
    {
      id: 'fb-t19-10',
      stem: 'The isoelectric point (pI) is the pH at which an amino acid has __BLANK__ electrical charge.',
      blanks: [
        { answer: 'no net' }
      ],
      rationale: 'The isoelectric point (pI) is the pH at which an amino acid has no net electrical charge. At this pH, the molecule exists predominantly as a zwitterion with equal positive and negative charges that cancel each other out. Below the pI, the molecule has a net positive charge; above the pI, it has a net negative charge.'
    },
    {
      id: 'fb-t19-11',
      stem: 'Nylon-6,6 is formed by condensation of hexanedioic acid and __BLANK__, producing water as a byproduct.',
      blanks: [
        { answer: '1,6-diaminohexane' }
      ],
      rationale: 'Nylon-6,6 is a condensation polymer formed from two monomers: hexanedioic acid (HOOC-(CH₂)₄-COOH) and 1,6-diaminohexane (H₂N-(CH₂)₆-NH₂). When these monomers react, amide linkages form and water molecules are eliminated in the condensation polymerisation. The "6,6" in the name indicates that each monomer has 6 carbon atoms.'
    },
    {
      id: 'fb-t19-12',
      stem: 'Proteins are hydrolysed by heating with concentrated __BLANK__ for 24 hours at 110°C.',
      blanks: [
        { answer: 'HCl' }
      ],
      rationale: 'Proteins can be hydrolysed (broken down) into their constituent amino acids by heating with concentrated hydrochloric acid (6 mol dm⁻³) for approximately 24 hours at 110°C. The acidic conditions break all the peptide bonds in the protein, releasing individual amino acids. This is the traditional method, though modern microwave techniques can complete hydrolysis in minutes.'
    },
    {
      id: 'fb-t19-13',
      stem: 'The peptide bond linking amino acids is a __BLANK__ bond formed by condensation with loss of water.',
      blanks: [
        { answer: 'covalent' }
      ],
      rationale: 'The peptide bond (also called an amide bond) is a covalent bond that forms between the carboxyl group (-COOH) of one amino acid and the amino group (-NH₂) of another. The reaction eliminates a water molecule when the bond forms. This covalent linkage is the primary structural connection in proteins and can be broken by hydrolysis.'
    },
    {
      id: 'fb-t19-14',
      stem: 'Secondary protein structure is stabilised by __BLANK__ bonds between N-H and C=O groups in the backbone.',
      blanks: [
        { answer: 'hydrogen' }
      ],
      rationale: 'Secondary structure in proteins is stabilised by hydrogen bonds that form regularly between the N-H hydrogen of one peptide bond and the C=O oxygen of another peptide bond. These hydrogen bonds create patterns like α-helices (coiled spirals) and β-pleated sheets (strands lying alongside each other). The hydrogen bonds provide structural stability but are weaker than covalent bonds.'
    },
    {
      id: 'fb-t19-15',
      stem: 'When the pH is below the isoelectric point, amino acids move towards the __BLANK__ electrode during electrophoresis.',
      blanks: [
        { answer: 'negative' }
      ],
      rationale: 'Below the isoelectric point (pI), the amino acid has a net positive charge. The ammonium group (-NH₃⁺) dominates over the carboxylate group (-COO⁻), giving the molecule a net positive charge. Positively charged molecules are attracted to the negative electrode (cathode) and move towards it during electrophoresis.'
    }
  ],
  // ─────────────────────────────────────────────────────────────────────
  // DRAG-DROP (~10 questions)
  // ─────────────────────────────────────────────────────────────────────
  dragdrop: [
    // ── Subtopic 0: Amine Nomenclature ─────────────────────────────────────
    {
      id: 'dd-t19-1',
      stem: 'Sort the following compounds by amine classification.',
      categories: ['Primary Amines', 'Secondary Amines', 'Tertiary Amines', 'Quaternary Ammonium Salts'],
      items: [
        { text: 'CH₃NH₂ (Methylamine)', category: 'Primary Amines' },
        { text: '(CH₃)₂NH (Dimethylamine)', category: 'Secondary Amines' },
        { text: 'CH₃CH₂NHCH₃ (Ethylmethylamine)', category: 'Primary Amines' },
        { text: '(CH₃)₃N (Trimethylamine)', category: 'Tertiary Amines' },
        { text: '(CH₃)₄N⁺Cl⁻ (Tetramethylammonium chloride)', category: 'Quaternary Ammonium Salts' }
      ]
    },
    // ── Subtopic 1: Amines as Bases ─────────────────────────────────────
    {
      id: 'dd-t19-2',
      stem: 'Sort the following compounds by relative base strength (strongest to weakest).',
      categories: ['Strongest (pKb < 4)', 'Moderate (pKb 4-7)', 'Weak (pKb 7-9)', 'Very Weak (pKb > 9)'],
      items: [
        { text: 'Dimethylamine (pKb ≈ 3.27)', category: 'Moderate (pKb 4-7)' },
        { text: 'Methylamine (pKb ≈ 3.36)', category: 'Moderate (pKb 4-7)' },
        { text: 'Ammonia (pKb ≈ 4.74)', category: 'Moderate (pKb 4-7)' },
        { text: 'Phenylamine (pKb ≈ 9.3)', category: 'Weak (pKb 7-9)' },
        { text: 'Pyridine', category: 'Very Weak (pKb > 9)' }
      ]
    },
    // ── Subtopic 4: Amide Formation ─────────────────────────────────────
    {
      id: 'dd-t19-5',
      stem: 'Categorise the following compounds by type.',
      categories: ['Amines', 'Amides', 'Amino Acids', 'Azo Compounds'],
      items: [
        { text: 'CH₃NH₂ (Methylamine)', category: 'Amines' },
        { text: 'CH₃CONH₂ (Ethanamide)', category: 'Amides' },
        { text: 'H₂N-CH(CH₃)-COOH (Alanine)', category: 'Amino Acids' },
        { text: 'C₆H₅-N=N-C₆H₅ (Azo benzene)', category: 'Azo Compounds' },
        { text: '(CH₃)₃N⁺Cl⁻ (Tetramethylammonium chloride)', category: 'Amines' },
        { text: 'C₆H₅-N₂⁺Cl⁻ (Benzenediazonium chloride)', category: 'Azo Compounds' },
        { text: 'H₂N-CH₂-COOOH (Glycine)', category: 'Amino Acids' }
      ]
    },
    // ── Subtopic 6: Peptide Bond Formation & Protein Structure ─────────────────────────────
    {
      id: 'dd-t19-6',
      stem: 'Sort the following protein structural levels.',
      categories: ['Primary Structure', 'Secondary Structure', 'Tertiary Structure', 'Quaternary Structure'],
      items: [
        { text: 'Linear sequence of amino acids (N→C terminal)', category: 'Primary Structure' },
        { text: 'α-helix (coiled spiral with H-bonds)', category: 'Secondary Structure' },
        { text: 'β-pleated sheet (strands with H-bonds)', category: 'Secondary Structure' },
        { text: '3D folded conformation from side chain interactions', category: 'Tertiary Structure' },
        { text: 'Arrangement of multiple polypeptide subunits', category: 'Quaternary Structure' },
        { text: 'Disulfide bonds (S-S linkages between cysteine residues)', category: 'Primary Structure' }
      ]
    },
    {
      id: 'dd-t19-7',
      stem: 'Sort the following amino acids by isoelectric point.',
      categories: ['Low pI (pI < 6, acidic character)', 'Intermediate pI (pI 6-7, neutral)', 'High pI (pI > 7, basic character)'],
      items: [
        { text: 'Aspartate (pI ≈ 3.0)', category: 'Low pI (pI < 6, acidic character)' },
        { text: 'Glutamate (pI ≈ 3.2)', category: 'Low pI (pI < 6, acidic character)' },
        { text: 'Alanine (pI ≈ 6.0)', category: 'Intermediate pI (pI 6-7, neutral)' },
        { text: 'Glycine (pI ≈ 6.0)', category: 'Intermediate pI (pI 6-7, neutral)' },
        { text: 'Valine (pI ≈ 6.0)', category: 'Intermediate pI (pI 6-7, neutral)' },
        { text: 'Lysine (pI ≈ 10.5)', category: 'High pI (pI > 7, basic character)' },
        { text: 'Arginine (pI ≈ 10.8)', category: 'High pI (pI > 7, basic character)' }
      ]
    },
    {
      id: 'dd-t19-8',
      stem: 'Classify the enzyme inhibitors by mechanism.',
      categories: ['Competitive Inhibitors', 'Non-competitive Inhibitors'],
      items: [
        { text: 'Substance with similar shape to substrate', category: 'Competitive Inhibitors' },
        { text: 'Binds to active site directly', category: 'Competitive Inhibitors' },
        { text: 'Can be overcome by excess substrate', category: 'Competitive Inhibitors' },
        { text: 'Binds to enzyme away from active site', category: 'Non-competitive Inhibitors' },
        { text: 'Alters overall enzyme structure', category: 'Non-competitive Inhibitors' },
        { text: 'Permanent binding', category: 'Non-competitive Inhibitors' },
        { text: 'Not affected by substrate concentration', category: 'Non-competitive Inhibitors' }
      ]
    },
    {
      id: 'dd-t19-9',
      stem: 'Sort the following polymer types.',
      categories: ['Addition Polymers', 'Condensation Polymers', 'Both Types Possible'],
      items: [
        { text: 'Poly(propenamide) (from CH₂=CH-CONH₂)', category: 'Addition Polymers' },
        { text: 'Poly(ethene) (from ethene)', category: 'Addition Polymers' },
        { text: 'Nylon-6,6 (from diamine + diacid)', category: 'Condensation Polymers' },
        { text: 'Kevlar (aromatic polyamide)', category: 'Condensation Polymers' },
        { text: 'Poly(ethenol)/PVA (2-stage: addition + transesterification)', category: 'Both Types Possible' }
      ]
    },
    {
      id: 'dd-t19-10',
      stem: 'Categorise the following compounds by test result.',
      categories: ['Turns red litmus blue (positive)', 'No litmus colour change', 'Produces NH₃ with ninhydrin/heat', 'Releases CO₂ with Na₂CO₃'],
      items: [
        { text: 'Methylamine (CH₃NH₂)', category: 'Turns red litmus blue (positive)' },
        { text: 'Phenylamine (C₆H₅NH₂)', category: 'Turns red litmus blue (positive)' },
        { text: 'Ethanamide (CH₃CONH₂)', category: 'No litmus colour change' },
        { text: 'Glycine (amino acid)', category: 'Produces NH₃ with ninhydrin/heat' },
        { text: 'Ethanoyl chloride (acyl chloride)', category: 'No litmus colour change' },
        { text: 'Ethanoic acid (CH₃COOH)', category: 'Releases CO₂ with Na₂CO₃' }
      ]
    }
  ],
  // ─────────────────────────────────────────────────────────────────────────────
  // SEQUENCE (~8 questions)
  // ─────────────────────────────────────────────────────────────────────
  sequence: [
    // ── Subtopic 2: Preparation ─────────────────────────────────────
    {
      id: 'seq-t19-1',
      stem: 'Put the steps of nitrile reduction in the correct order.',
      steps: [
        'Nitrile (R-C≡N) is reacted with hydrogen gas',
        'Metal catalyst (e.g., nickel or palladium) is added',
        'Hydrogen adds across the C≡N triple bond to form R-CH₂-NH₂',
        'The product is a primary amine with one extra carbon compared to nitrile'
      ]
    },
    {
      id: 'seq-t19-2',
      stem: 'Put the steps of diazotisation in the correct order.',
      steps: [
        'Dissolve phenylamine in excess hydrochloric acid to form phenylammonium chloride',
        'Cool both solutions in ice bath to ≤5°C',
        'Add sodium nitrite solution slowly to phenylammonium chloride',
        'Nitrous acid (HNO₂) forms in situ from NaNO₂ + HCl',
        'Benzenediazonium chloride (C₆H₅N₂⁺Cl⁻) forms as product',
        'Must use immediately due to thermal instability'
      ]
    },
    {
      id: 'seq-t19-3',
      stem: 'Put the steps of azo coupling in the correct order.',
      steps: [
        'Prepare benzenediazonium chloride by diazotisation at 0-5°C',
        'Dissolve coupling partner (phenol or amine) in alkaline solution (NaOH or Na₂CO₃)',
        'Phenol is converted to phenoxide ion (C₆H₅O⁻) in alkaline conditions',
        'Mix cold diazonium solution with coupling partner solution',
        'Electrophilic diazonium ion attacks electron-rich aromatic ring',
        'Azo compound with -N=N- chromophore forms (orange/red/yellow coloured)'
      ]
    },
    {
      id: 'seq-t19-4',
      stem: 'Put the steps of polyamide synthesis (nylon-6,6) in the correct order.',
      steps: [
        'Hexanedioic acid (HOOC-(CH₂)₄-COOH) and 1,6-diaminohexane (H₂N-(CH₂)₆-NH₂) are the monomers',
        'Monomers react in a condensation polymerisation reaction',
        'Amide linkages (-CO-NH-) form repeatedly between monomers',
        'Water molecules (H₂O) are eliminated as byproduct',
        'Polyamide chains form with extensive hydrogen bonding between chains',
        'The "6,6" name indicates each monomer has 6 carbon atoms'
      ]
    },
    {
      id: 'seq-t19-5',
      stem: 'Put the steps of amide formation from acyl chloride in the correct order.',
      steps: [
        'Acyl chloride (R-COCl) provides electrophilic carbonyl carbon',
        'Ammonia (NH₃) acts as nucleophile with lone pair on nitrogen',
        'N lone pair attacks δ+ carbonyl carbon (both O and Cl make C electron-deficient)',
        'Chloride (Cl⁻) leaves as HCl (misty white fumes observed)',
        'Amide (R-CONH₂) forms via nucleophilic acyl substitution',
        'Excess ammonia reacts with HCl to form ammonium chloride (NH₄⁺Cl⁻)'
      ]
    },
    {
      id: 'seq-t19-6',
      stem: 'Put the steps of protein hydrolysis (acidic) in the correct order.',
      steps: [
        'Protein sample is heated under reflux with 6 mol dm⁻³ hydrochloric acid',
        'Reflux at 110°C for approximately 24 hours',
        'All peptide bonds in the protein are broken by hydrolysis',
        'Individual amino acids are released as products',
        'Resulting amino acids are positively charged (as ammonium ions, -NH₃⁺)'
      ]
    },
    {
      id: 'seq-t19-7',
      stem: 'Put the steps of amino acid identification by chromatography in the correct order.',
      steps: [
        'Hydrolyse protein with concentrated HCl to produce amino acid mixture',
        'Spot hydrolysate onto baseline of chromatography paper',
        'Place paper in developing chamber with solvent',
        'Allow solvent front to move up the paper (do not let solvent run off)',
        'Remove paper and dry thoroughly',
        'Spray paper with ninhydrin solution',
        'Heat gently to develop purple/blue spots',
        'Calculate Rf = distance moved by spot ÷ distance moved by solvent front'
      ]
    },
    {
      id: 'seq-t19-8',
      stem: 'Put the steps of alkylation of amines in the correct order.',
      steps: [
        'Primary amine (RNH₂) reacts with haloalkane (R-X)',
        'Nitrogen lone pair attacks δ+ carbon of haloalkane',
        'Halide (X⁻) is displaced',
        'Secondary amine (R₂NH) is formed with hydrogen halide (HX) as byproduct',
        'Secondary amine can react again with haloalkane',
        'Tertiary amine (R₃N) forms from further reaction',
        'Excess haloalkane reacts with tertiary amine to form quaternary ammonium salt (R₄N⁺X⁻)'
      ]
    }
  ],
  // ─────────────────────────────────────────────────────────────────────────────
  // KEYWORD (~12 questions)
  // ─────────────────────────────────────────────────────────────────────
  keyword: [
    // ── Subtopic 1: Amines as Bases ─────────────────────────────────────
    {
      id: 'kw-t19-1',
      stem: 'Explain why alkylamines are stronger bases than ammonia. [3 marks]',
      marks: 3,
      keywords: ['alkyl groups', 'electron donating', 'inductive effect', 'lone pair', 'electron density', 'proton acceptance'],
      modelAnswer: 'Alkylamines are stronger bases than ammonia because alkyl groups are electron-donating through the inductive effect. The alkyl groups push electron density towards the nitrogen atom, increasing the electron density on the nitrogen lone pair. This makes the lone pair more readily available to accept a proton (H⁺) from an acid. Consequently, alkylamines have higher Kb values (lower pKb) than ammonia, meaning they are more basic.'
    },
    // ── Subtopic 1: Amines as Bases (continued) ────────────────────────────
    {
      id: 'kw-t19-2',
      stem: 'Explain why phenylamine is a weaker base than ammonia. [2 marks]',
      marks: 2,
      keywords: ['resonance', 'delocalisation', 'benzene ring', 'lone pair', 'less available'],
      modelAnswer: 'Phenylamine is a weaker base than ammonia because the nitrogen lone pair is delocalised into the benzene ring through resonance. This delocalisation spreads the lone pair electrons over the π system of the aromatic ring, reducing electron density on the nitrogen atom. The lone pair is therefore less available to accept a proton. Additionally, the phenylammonium cation formed upon protonation is destabilised because resonance with the ring is lost, making protonation unfavourable.'
    },
    // ── Subtopic 4: Amide Formation ─────────────────────────────────────
    {
      id: 'kw-t19-3',
      stem: 'Describe the formation of a zwitterion in an amino acid. [3 marks]',
      marks: 3,
      keywords: ['carboxyl group', 'amino group', 'proton transfer', 'internal', 'positive charge', 'negative charge', 'no net charge'],
      modelAnswer: 'In neutral solution (pH ≈ 7), amino acids exist as zwitterions due to an internal proton transfer. The carboxyl group (-COOH) donates a proton to the amino group (-NH₂), forming a dipolar ion with structure ⁺H₃N-CHR-COO⁻. The nitrogen atom gains a positive charge (-NH₃⁺) while the carboxyl oxygen becomes negatively charged (-COO⁻). The molecule has no net charge overall, with equal positive and negative charges cancelling each other out.'
    },
    // ── Subtopic 3: Diazotisation ─────────────────────────────────────
    {
      id: 'kw-t19-4',
      stem: 'Explain the purpose of temperature control during diazotisation. [2 marks]',
      marks: 2,
      keywords: ['temperature', '5°C', 'unstable', 'decomposes', 'phenol', 'nitrogen gas'],
      modelAnswer: 'Temperature must be kept below 5°C during diazotisation because diazonium ions are thermally unstable above this temperature. If the temperature rises above 5°C, the diazonium ion decomposes to form phenol and nitrogen gas instead of the desired diazonium salt. This decomposition is rapid and irreversible, so careful ice bath cooling is essential to maintain the low temperature.'
    },
    // ── Subtopic 3: Diazotisation (continued) ────────────────────────────────────
    {
      id: 'kw-t19-5',
      stem: 'Describe the mechanism of azo coupling. [3 marks]',
      marks: 3,
      keywords: ['diazonium ion', 'electrophile', 'phenoxide', 'alkaline', 'electron rich', 'azo compound', 'chromophore'],
      modelAnswer: 'In azo coupling, a benzenediazonium ion acts as an electrophile. In alkaline conditions, phenol is converted to the phenoxide ion (C₆H₅O⁻), which is more electron-rich. The diazonium ion attacks the electron-rich benzene ring at the para position, forming a new C-N bond and creating an azo compound with the -N=N- chromophore linking two aromatic rings. The extensive conjugation through both rings and the N=N bridge gives the product intense colour.'
    },
    // ── Subtopic 5: Amino Acids & Zwitterions ────────────────────────────────
    {
      id: 'kw-t19-6',
      stem: 'Compare the physical properties of nylon and Kevlar. [2 marks]',
      marks: 2,
      keywords: ['aliphatic', 'aromatic', 'rigidity', 'strength', 'heat resistance', 'benzene rings'],
      modelAnswer: 'Nylon is an aliphatic polyamide with straight-chain alkyl segments between amide groups. Kevlar is an aromatic polyamide containing benzene rings in its backbone. The presence of aromatic rings makes Kevlar much more rigid and stronger, with higher tensile strength and heat resistance than nylon. Kevlar\'s rigid aromatic chains make it suitable for applications requiring extreme strength like bulletproof vests, while nylon\'s flexible aliphatic chains make it suitable for fibres and textiles.'
    },
    {
      id: 'kw-t19-7',
      stem: 'Explain why short-chain amines are soluble in water but solubility decreases with chain length. [3 marks]',
      marks: 3,
      keywords: ['hydrogen bonding', 'lone pair', 'N-H donor', 'hydrogen bond acceptor', 'London forces', 'longer chains', 'energy required'],
      modelAnswer: 'Short-chain amines (methyl, ethyl, propyl) are very soluble in water because they can form hydrogen bonds with water molecules. The nitrogen lone pair acts as a hydrogen bond acceptor, and the N-H bonds in the amine can act as hydrogen bond donors. As the hydrocarbon chain gets longer, the number of electrons increases, making London dispersion forces between amine molecules stronger. More energy is required to overcome these London forces than can be provided by hydrogen bonding with water, so solubility decreases.'
    },
    // ── Subtopic 6: Peptide Bond Formation & Protein Structure ─────────────────────────────
    {
      id: 'kw-t19-8',
      stem: 'Describe the structure of primary, secondary, and tertiary protein structure. [3 marks]',
      marks: 3,
      keywords: ['primary', 'sequence', 'amino acid', 'peptide bonds', 'secondary', 'hydrogen bonds', 'tertiary', '3D shape', 'folding', 'side chains'],
      modelAnswer: 'Primary structure is the exact linear sequence of amino acids joined by peptide bonds. Secondary structure refers to regular folding patterns stabilised by hydrogen bonds between backbone N-H and C=O groups, creating α-helices or β-pleated sheets. Tertiary structure describes the overall 3D shape formed by folding of secondary structures, determined by interactions between side chains including hydrogen bonds, ionic interactions, van der Waals forces, and disulfide bonds.'
    },
    {
      id: 'kw-t19-9',
      stem: 'Explain the effect of pH on amino acid charge and electrophoresis. [3 marks]',
      marks: 3,
      keywords: ['isoelectric point', 'pI', 'net charge', 'positive', 'negative', 'zwitterion', 'electrophoresis', 'cathode', 'anode'],
      modelAnswer: 'The charge of an amino acid varies with pH. Below the isoelectric point (pI), the amino acid has a net positive charge (NH₃⁺ dominates) and moves towards the negative electrode (cathode) during electrophoresis. At the pI, the molecule exists as a zwitterion with no net charge and does not move. Above the pI, the amino acid has a net negative charge (COO⁻ dominates) and moves towards the positive electrode (anode).'
    },
    // ── Subtopic 7: Enzymes & Core Practical 15 ────────────────────────────────
    {
      id: 'kw-t19-10',
      stem: 'Describe the difference between competitive and non-competitive enzyme inhibitors. [4 marks]',
      marks: 4,
      keywords: ['competitive inhibitor', 'active site', 'substrate', 'out-compete', 'non-competitive', 'structural change', 'permanent'],
      modelAnswer: 'Competitive inhibitors have a similar shape to the normal substrate and bind directly to the active site, temporarily blocking it. They can be overcome by increasing substrate concentration, which out-competes the inhibitor. Non-competitive inhibitors bind to the enzyme at a site other than the active site, altering the overall protein structure and changing the active site shape permanently. Increasing substrate concentration has no effect on non-competitive inhibitors because they do not compete for the same binding site.'
    },
    {
      id: 'kw-t19-11',
      stem: 'Explain why glycine is not chiral. [2 marks]',
      marks: 2,
      keywords: ['chiral centre', 'four different groups', 'glycine', 'two hydrogens', 'not chiral', 'optically inactive', 'enantiomers'],
      modelAnswer: 'Glycine is not chiral because its α-carbon is bonded to two hydrogen atoms (from the -NH₂ group), giving it only three different groups. A chiral centre requires a carbon bonded to four different groups. The four groups attached to glycine\'s α-carbon are -NH₃⁺, -COO⁻, -H, and -H (the second hydrogen is identical to the first). Therefore, glycine has no chiral centre and is optically inactive. All other standard amino acids are chiral with two enantiomers.'
    },
    {
      id: 'kw-t19-12',
      stem: 'Describe the ninhydrin test for amino acids. [3 marks]',
      marks: 3,
      keywords: ['ninhydrin', 'amino acid', 'blue/purple', 'Ruhemann\'s purple', 'developing agent', 'heating', 'chromatography'],
      modelAnswer: 'Ninhydrin is a developing agent used to identify amino acids on chromatography paper. When an amino acid is heated with ninhydrin, a characteristic blue or purple colour (Ruhemann\'s purple) develops. The reaction involves the amino group (-NH₂) and the carbonyl groups of ninhydrin, producing a coloured product. While some primary amines may give a yellow colour rather than purple, the intense purple is distinctive for amino acids.'
    }
  ],
  // ─────────────────────────────────────────────────────────────────────────────
  // FLASHCARDS (~50 questions)
  // ─────────────────────────────────────────────────────────────────────
  flashcards: [
    // ── Subtopic 0: Amine Nomenclature ─────────────────────────────────────
    {
      id: 'fc-t19-1',
      front: 'What is the general formula for a primary amine?',
      back: 'RNH₂, where R is the alkyl group.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'fc-t19-2',
      front: 'What is a secondary amine?',
      back: 'R₂NH - nitrogen bonded to two alkyl groups and one hydrogen.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'fc-t19-3',
      front: 'What is a tertiary amine?',
      back: 'R₃N - nitrogen bonded to three alkyl groups, no hydrogens.',
      topic: 'Amine Nomenclature'
    },
    {
      id: 'fc-t19-4',
      front: 'Why are alkylamines stronger bases than ammonia?',
      back: 'Alkyl groups are electron-donating through inductive effect, increasing electron density on nitrogen lone pair → more available to accept protons.',
      topic: 'Alkylamines: Stronger Bases Than Ammonia'
    },
    {
      id: 'fc-t19-5',
      front: 'Why is phenylamine a weaker base than ammonia?',
      back: 'Nitrogen lone pair is delocalised into benzene ring → less available for protonation. Protonated phenylamine cation is destabilised (resonance lost).',
      topic: 'Arylamines: Weaker Bases Than Ammonia'
    },
    {
      id: 'fc-t19-6',
      front: 'What is a quaternary ammonium salt?',
      back: 'R₄N⁺X⁻ - four alkyl groups on nitrogen with permanent positive charge and halide counterion.',
      topic: 'Reactions of Amines with Haloalkanes'
    },
    {
      id: 'fc-t19-7',
      front: 'What product forms when acyl chloride reacts with excess ammonia?',
      back: 'Amide (RCONH₂) + ammonium chloride (NH₄⁺Cl⁻) from HCl reacting with excess NH₃.',
      topic: 'Amide Formation from Acyl Chlorides'
    },
    {
      id: 'fc-t19-8',
      front: 'What is the hydrolysis reaction for an amide with NaOH?',
      back: 'RCONH₂ + H₂O + NaOH → RCOO⁻ + NH₃ (ammonia gas released).',
      topic: 'Amide Hydrolysis'
    },
    {
      id: 'fc-t19-9',
      front: 'What monomers form nylon-6,6?',
      back: 'Hexanedioic acid (HOOC-(CH₂)₄-COOH) and 1,6-diaminohexane (H₂N-(CH₂)₆-NH₂).',
      topic: 'Condensation Polymerisation: Polyamides (Nylon)'
    },
    {
      id: 'fc-t19-10',
      front: 'How does Kevlar differ from nylon?',
      back: 'Kevlar contains aromatic benzene rings (rigid, extremely strong) while nylon has aliphatic alkyl chains (flexible).',
      topic: 'Kevlar: Aromatic Polyamide'
    },
    // ── Subtopic 3: Diazotisation ─────────────────────────────────────
    {
      id: 'fc-t19-11',
      front: 'What is diazotisation?',
      back: 'Phenylamine + NaNO₂ + HCl at 0-5°C → benzenediazonium chloride (C₆H₅N₂⁺Cl⁻). Nitrous acid forms in situ from NaNO₂ + HCl.',
      topic: 'Diazotisation: Formation of Diazonium Ions'
    },
    {
      id: 'fc-t19-12',
      front: 'What happens if diazonium temperature exceeds 5°C?',
      back: 'Decomposes to phenol (C₆H₅OH) + nitrogen gas (N₂).',
      topic: 'Diazotisation: Formation of Diazonium Ions'
    },
    {
      id: 'fc-t19-13',
      front: 'What is azo coupling?',
      back: 'Diazonium ion + phenol/amine (alkaline) → azo compound with -N=N- chromophore. Intensely coloured (orange/red/yellow) due to extended conjugation.',
      topic: 'Azo Coupling: Formation of Azo Compounds'
    },
    // ── Subtopic 5: Amino Acids & Zwitterions ────────────────────────────────
    {
      id: 'fc-t19-14',
      front: 'What is a zwitterion?',
      back: 'A molecule with both +NH₃⁺ and -COO⁻ regions but no net charge. Forms at neutral pH (≈7).',
      topic: 'Amino Acid Structure and Zwitterion Formation'
    },
    {
      id: 'fc-t19-15',
      front: 'What is the isoelectric point (pI)?',
      back: 'The pH at which an amino acid has no net charge and exists as a zwitterion. Below pI: net + charge; above pI: net - charge.',
      topic: 'Isoelectric Point (pI)'
    },
    {
      id: 'fc-t19-16',
      front: 'What happens to amino acid below pI during electrophoresis?',
      back: 'Net positive charge → moves towards cathode (negative electrode). NH₃⁺ dominates over COO⁻.',
      topic: 'Amino Acids in Electrophoresis'
    },
    {
      id: 'fc-t19-17',
      front: 'Which amino acid is NOT chiral?',
      back: 'Glycine (R=H) - α-carbon has only 3 different groups (two H atoms). No enantiomers.',
      topic: 'Chirality and Optical Activity of Amino Acids'
    },
    {
      id: 'fc-t19-18',
      front: 'What is a peptide bond?',
      back: 'Covalent bond -CO-NH- formed by condensation with loss of H₂O. Links amino acids in protein chain.',
      topic: 'Peptide Bond Formation'
    },
    {
      id: 'fc-t19-19',
      front: 'What stabilises secondary protein structure?',
      back: 'Hydrogen bonds between backbone N-H and C=O groups. Creates α-helices and β-pleated sheets.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-20',
      front: 'What describes tertiary protein structure?',
      back: 'Overall 3D shape from folding secondary structures. Determined by side chain interactions (H-bonds, ionic, van der Waals, disulfide bonds).',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-21',
      front: 'What causes enzyme denaturation?',
      back: 'High temperature or extreme pH breaks weak bonds (H-bonds, ionic, van der Waals) → enzyme loses shape and activity.',
      topic: 'Factors Affecting Enzyme Activity'
    },
    {
      id: 'fc-t19-22',
      front: 'What is a competitive inhibitor?',
      back: 'Similar shape to substrate, binds active site directly. Can be overcome by excess substrate.',
      topic: 'Enzyme Inhibitors'
    },
    {
      id: 'fc-t19-23',
      front: 'What is a non-competitive inhibitor?',
      back: 'Binds to enzyme away from active site, alters enzyme structure permanently. Not affected by substrate concentration.',
      topic: 'Enzyme Inhibitors'
    },
    {
      id: 'fc-t19-24',
      front: 'What test detects carboxylic acids?',
      back: 'Na₂CO₃ test - vigorous effervescence, CO₂ gas with "pop" sound from burning splint.',
      topic: 'Core Practical 15: Unknown Organic Analysis'
    },
    {
      id: 'fc-t19-25',
      front: 'What test distinguishes amines?',
      back: 'Litmus test - red litmus turns blue (basic). Amides do not turn litmus blue.',
      topic: 'Test 1: Litmus Test (Detection of Amines)'
    },
    {
      id: 'fc-t19-26',
      front: 'What is poly(propenamide)?',
      back: 'Addition polymer from CH₂=CH-CONH₂ - only C=C reacts; amide group unchanged. Cross-linked form absorbs water → hydrogel.',
      topic: 'Poly(propenamide): Addition Polymer from an Amide Monomer'
    },
    {
      id: 'fc-t19-27',
      front: 'What is the Rf value in chromatography?',
      back: 'Rf = distance moved by compound ÷ distance moved by solvent front. Always < 1.',
      topic: 'Identifying Amino Acids by Paper Chromatography'
    },
    {
      id: 'fc-t19-28',
      front: 'What stabilises tertiary structure?',
      back: 'Side chain interactions (ionic, H-bonds, van der Waals) + disulfide bonds (S-S between cysteine residues). Hydrophobic residues cluster inside.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-29',
      front: 'Why are azo compounds intensely coloured?',
      back: 'Extended conjugation through -N=N- chromophore and both aromatic rings lowers energy gap for π→π* transitions, absorbing visible light.',
      topic: 'Azo Dye Uses'
    },
    {
      id: 'fc-t19-30',
      front: 'What is the structure of Kevlar?',
      back: 'Aromatic polyamide from 1,4-diaminobenzene + benzene-1,4-diacyl chloride. Strong rigid chains, used in bulletproof vests.',
      topic: 'Kevlar: Aromatic Polyamide'
    },
    {
      id: 'fc-t19-31',
      front: 'What is the product of nitrile reduction?',
      back: 'Primary amine with one extra carbon: R-CH₂-NH₂ (product has MORE carbons than R-C≡N starting material).',
      topic: 'Reduction of Nitriles to Primary Amines'
    },
    {
      id: 'fc-t19-32',
      front: 'What is the disulfide bond?',
      back: 'Strong covalent S-S bond formed between two cysteine residues. Important for protein stability, especially extracellular.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-33',
      front: 'What determines the chirality of an amino acid?',
      back: 'Four different groups attached to α-carbon (chiral centre). Glycine (R=H) is exception - only 3 different groups.',
      topic: 'Chirality and Optical Activity of Amino Acids'
    },
    {
      id: 'fc-t19-34',
      front: 'What is quaternary structure?',
      back: 'Arrangement of multiple polypeptide subunits (e.g., haemoglobin = 4 subunits) held together by non-covalent interactions.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-35',
      front: 'What distinguishes primary amines from ammonium salts?',
      back: 'Amines turn red litmus blue (basic). Ammonium salts already ionic and give no colour change with litmus.',
      topic: 'Test 1: Litmus Test (Detection of Amines)'
    },
    {
      id: 'fc-t19-36',
      front: 'What is protein hydrolysis?',
      back: 'Breaking peptide bonds with acid/heat to release individual amino acids. Traditional: 6M HCl, 110°C, 24h. Modern: microwave, sealed tube, 200°C, minutes.',
      topic: 'Protein Hydrolysis'
    },
    {
      id: 'fc-t19-37',
      front: 'What is the relationship between pKb and base strength?',
      back: 'pKb = -log(Kb). Lower pKb = higher Kb = stronger base. Higher pKb = weaker base.',
      topic: 'Base Strength and pKb Values'
    },
    {
      id: 'fc-t19-38',
      front: 'What is the significance of isoelectric point?',
      back: 'pH where molecule has no net charge (zwitterion form). Used in protein separation (isoelectric focusing). Below pI: + charge (cathode); above pI: - charge (anode).',
      topic: 'Isoelectric Point (pI)'
    },
    {
      id: 'fc-t19-39',
      front: 'What is the ninhydrin reaction with amino acids?',
      back: 'Amino acid (-NH₂) + ninhydrin + heat → blue/purple colour (Ruhemann\'s purple). Not for amides (N not available) or zwitterions.',
      topic: 'Test 3: Ninhydrin Test (Detection of Amino Acids and Amines)'
    },
    {
      id: 'fc-t19-40',
      front: 'What is the hydrolysis of amides?',
      back: 'Acidic: RCONH₂ + H₂O + HCl → RCOOH + NH₄⁺. Basic: RCONH₂ + H₂O + NaOH → RCOO⁻ + NH₃. Ammonia is released in both cases.',
      topic: 'Amide Hydrolysis'
    },
    {
      id: 'fc-t19-41',
      front: 'What are the two types of enzyme inhibitors?',
      back: 'Competitive: similar shape to substrate, binds active site, overcome by excess substrate. Non-competitive: binds elsewhere, alters structure permanently, unaffected by [substrate].',
      topic: 'Enzyme Inhibitors'
    },
    {
      id: 'fc-t19-42',
      front: 'What is the poly(ethenol)/PVA two-stage production?',
      back: 'Stage 1: addition polymerisation of ethenyl ethanoate. Stage 2: transesterification with methanol replaces -OOCCH₃ with -OH groups.',
      topic: 'Poly(ethenol)/PVA: Two-Stage Production'
    },
    {
      id: 'fc-t19-43',
      front: 'What is the effect of temperature on enzyme activity?',
      back: 'Rate increases up to optimum (more successful collisions). Above optimum: enzyme denatures (bonds break, active site loses shape).',
      topic: 'Factors Affecting Enzyme Activity'
    },
    {
      id: 'fc-t19-44',
      front: 'What is the mechanism of nitrile reduction?',
      back: 'H₂ + metal catalyst (Ni, Pd, Pt) breaks C≡N triple bond → R-CH₂-NH₂. Alternative: LiAlH₄ in dry ether + dilute acid.',
      topic: 'Reduction of Nitriles to Primary Amines'
    },
    {
      id: 'fc-t19-45',
      front: 'What is the monomer structure for nylon-6,6?',
      back: 'Diacid: HOOC-(CH₂)₄-COOH (6 carbons). Diamine: H₂N-(CH₂)₆-NH₂ (6 carbons). Condensation eliminates H₂O.',
      topic: 'Condensation Polymerisation: Polyamides (Nylon)'
    },
    {
      id: 'fc-t19-46',
      front: 'What is the diazonium ion?',
      back: 'C₆H₅N₂⁺ (electrophilic). Formed from phenylamine + NaNO₂ + HCl at 0-5°C. Unstable above 5°C → decomposes to phenol + N₂. Used in azo coupling.',
      topic: 'Diazotisation: Formation of Diazonium Ions'
    },
    {
      id: 'fc-t19-47',
      front: 'What is the ninhydrin reaction with amino acids?',
      back: 'Amino acid (-NH₂) + ninhydrin + heat → blue/purple colour (Ruhemann\'s purple). Not for amides (N not available) or zwitterions.',
      topic: 'Test 3: Ninhydrin Test (Detection of Amino Acids and Amines)'
    },
    {
      id: 'fc-t19-48',
      front: 'What indicates the presence of an amide?',
      back: 'NaOH + heat releases NH₃ (ammonia gas, pungent smell, turns damp red litmus blue).',
      topic: 'Test 5: NaOH and Heat (Detection of Amides)'
    },
    {
      id: 'fc-t19-49',
      front: 'What is the disulfide bond?',
      back: 'Strong covalent S-S bond formed between two cysteine residues. Important for protein stability, especially extracellular.',
      topic: 'Protein Structure: Primary, Secondary, Tertiary'
    },
    {
      id: 'fc-t19-50',
      front: 'What determines the chirality of an amino acid?',
      back: 'Four different groups attached to α-carbon (chiral centre). Glycine (R=H) is exception - only 3 different groups.',
      topic: 'Chirality and Optical Activity of Amino Acids'
    }
  ]
};
