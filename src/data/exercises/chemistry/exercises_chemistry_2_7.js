export const exercises_chemistry_2_7 = {

    // ─────────────────────────────────────────────────────────────────────────
    // MCQ  (~30 questions, covering all 10 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    mcq: [
        // Subtopic 0 – London Forces
        {
            id: 'mcq-t7-1',
            stem: 'Which type of intermolecular force is present in ALL molecular substances?',
            options: [
                'Hydrogen bonding',
                'Permanent dipole–dipole forces',
                'London (dispersion) forces',
                'Ionic attraction',
            ],
            correctAnswer: 2,
            rationale: 'London (dispersion) forces arise from instantaneous and induced dipoles and exist in every molecule, polar or non-polar. Hydrogen bonding requires H bonded to N, O, or F. Permanent dipole–dipole forces require a permanent dipole. Ionic attraction is not an intermolecular force.',
            topic: 'London Forces',
        },
        {
            id: 'mcq-t7-2',
            stem: 'London forces increase in strength as the number of electrons in a molecule increases because:',
            options: [
                'More electrons create a permanent dipole',
                'More electrons make instantaneous dipoles larger and more polarisable',
                'More electrons increase the boiling point logarithmically',
                'More electrons reduce the distance between molecules',
            ],
            correctAnswer: 1,
            rationale: 'A larger electron cloud is more easily distorted (more polarisable), creating larger instantaneous dipoles and inducing stronger dipoles in neighbouring molecules. This is not about permanent dipoles, does not follow a logarithmic relationship, and does not change inter-molecular distances.',
            topic: 'London Forces',
        },
        {
            id: 'mcq-t7-3',
            stem: 'Two alkane isomers have the same molecular formula C₅H₁₂. One is straight-chain pentane; the other is 2,2-dimethylpropane (neopentane). Which statement correctly explains why pentane has the higher boiling point?',
            options: [
                'Pentane has stronger hydrogen bonds',
                'Pentane has a greater surface area, giving stronger London forces',
                'Neopentane has more electrons so stronger London forces',
                'Pentane has a permanent dipole but neopentane does not',
            ],
            correctAnswer: 1,
            rationale: 'Both isomers have the same molecular formula and therefore the same number of electrons. The straight-chain pentane molecule has a larger surface area and more contact points between neighbouring molecules, increasing London-force strength. Neither molecule can hydrogen bond, and neither has a significant permanent dipole.',
            topic: 'London Forces',
        },

        // Subtopic 1 – Hydrogen Bonding
        {
            id: 'mcq-t7-4',
            stem: 'Which of the following correctly describes the conditions necessary for hydrogen bonding to occur?',
            options: [
                'H bonded to any electronegative atom, with a lone pair on any atom of the other molecule',
                'H bonded to N, O, or F in one molecule, interacting with a lone pair on N, O, or F of another',
                'H bonded to a carbon atom, with a lone pair on oxygen of the other molecule',
                'Any hydrogen atom interacting with an electronegative atom',
            ],
            correctAnswer: 1,
            rationale: 'Hydrogen bonding specifically requires H covalently bonded to the strongly electronegative atoms N, O, or F. The lone pair acceptor must also be N, O, or F. H bonded to carbon is insufficiently polarised. Not every H can form H-bonds regardless of electronegativity alone.',
            topic: 'Hydrogen Bonding',
        },
        {
            id: 'mcq-t7-5',
            stem: 'In a diagram showing hydrogen bonding in water, the hydrogen bond is conventionally represented by:',
            options: [
                'A solid bold line',
                'A double line (=)',
                'A dashed line (- - -)',
                'A wavy line (~)',
            ],
            correctAnswer: 2,
            rationale: 'By convention, hydrogen bonds are represented by dashed lines to distinguish them from covalent bonds (solid lines). This notation reflects their electrostatic, non-covalent nature.',
            topic: 'Hydrogen Bonding',
        },
        {
            id: 'mcq-t7-6',
            stem: 'How many hydrogen bonds can one water molecule form simultaneously?',
            options: ['1', '2', '4', '6'],
            correctAnswer: 2,
            rationale: 'Each H₂O molecule has two O–H bonds (each H can donate one H-bond) and two lone pairs on the oxygen (each can accept one H-bond), giving a maximum of 4 hydrogen bonds. This tetrahedral H-bonding network is responsible for many of water\'s anomalous properties.',
            topic: 'Hydrogen Bonding',
        },
        {
            id: 'mcq-t7-7',
            stem: 'Compared to H₂O, NH₃ forms fewer hydrogen bonds per molecule because:',
            options: [
                'Nitrogen is less electronegative than oxygen',
                'NH₃ has only one lone pair available to accept hydrogen bonds',
                'NH₃ molecules are smaller and cannot make contact',
                'NH₃ has no N–H bonds',
            ],
            correctAnswer: 1,
            rationale: 'NH₃ has three N–H bond donors but only one lone pair on nitrogen, limiting it to roughly one accepted H-bond per molecule (compared to water\'s four). Nitrogen is indeed less electronegative than oxygen, but the primary limiting factor for H-bond count is the single lone pair.',
            topic: 'Hydrogen Bonding',
        },

        // Subtopic 2 – Anomalous Properties of Water
        {
            id: 'mcq-t7-8',
            stem: 'Ice is less dense than liquid water because:',
            options: [
                'Water molecules move faster in ice',
                'Ice has an open tetrahedral lattice held by hydrogen bonds that keeps molecules further apart',
                'Hydrogen bonds are longer in ice than in liquid water',
                'Liquid water has stronger hydrogen bonds which pull molecules apart',
            ],
            correctAnswer: 1,
            rationale: 'In ice, each water molecule forms four hydrogen bonds in a rigid, open tetrahedral lattice, spacing molecules further apart than in liquid water. When ice melts, some H-bonds break, molecules pack more closely, and density increases. Molecules do not move faster in ice; they are locked in place.',
            topic: 'Anomalous Properties of Water',
        },
        {
            id: 'mcq-t7-9',
            stem: 'Water has an unusually high boiling point of 100 °C compared to H₂S (−60 °C) and H₂Se (−41 °C). The best explanation is:',
            options: [
                'Water molecules have a higher molar mass',
                'Water is a linear molecule allowing closer packing',
                'Extensive hydrogen bonding requires significantly more energy to overcome',
                'Water has stronger London forces than H₂S',
            ],
            correctAnswer: 2,
            rationale: 'Despite having a lower molar mass than H₂S or H₂Se (and therefore weaker London forces), water has a much higher boiling point because of extensive intermolecular hydrogen bonding. This requires considerably more energy to break during vaporisation. The shape of water is bent, not linear.',
            topic: 'Anomalous Properties of Water',
        },
        {
            id: 'mcq-t7-10',
            stem: 'Which of the following is a biological consequence of ice being less dense than liquid water?',
            options: [
                'Ice sinks to the bottom of ponds, freezing aquatic life',
                'Ice floats, insulating water below and allowing aquatic life to survive winter',
                'Water freezes at a lower temperature in the presence of solutes',
                'Water expands on freezing, preventing dehydration in cells',
            ],
            correctAnswer: 1,
            rationale: 'Because ice is less dense than water, it floats on the surface. This floating ice layer acts as an insulator, slowing further freezing of the water below and allowing aquatic organisms to survive. If ice were denser, ponds would freeze solid from the bottom up, killing aquatic life.',
            topic: 'Anomalous Properties of Water',
        },

        // Subtopic 3 – Melting/Boiling Trends in Organic Substances
        {
            id: 'mcq-t7-11',
            stem: 'Which of the following correctly orders these compounds from lowest to highest boiling point?',
            options: [
                'Alcohol < Ketone < Alkane < Carboxylic acid',
                'Alkane < Ketone < Alcohol < Carboxylic acid',
                'Ketone < Alkane < Alcohol < Carboxylic acid',
                'Alkane < Alcohol < Ketone < Carboxylic acid',
            ],
            correctAnswer: 1,
            rationale: 'Alkanes (London forces only) have the lowest boiling points. Ketones have permanent dipole–dipole interactions plus London forces. Alcohols can hydrogen bond (higher bp than ketones). Carboxylic acids form dimers via two hydrogen bonds giving the highest boiling points among these classes.',
            topic: 'Melting/Boiling Trends in Organic Substances',
        },
        {
            id: 'mcq-t7-12',
            stem: 'In the Group 7 hydrides, HF has an anomalously high boiling point. Moving down from HCl to HI, boiling points increase. The best explanation for the HCl→HI trend is:',
            options: [
                'Hydrogen bonding increases from HCl to HI',
                'Permanent dipole–dipole forces increase from HCl to HI',
                'London forces increase as electron count and molecular size increase',
                'Ionic character increases from HCl to HI',
            ],
            correctAnswer: 2,
            rationale: 'From HCl to HI, the number of electrons increases significantly (HCl: 18e, HBr: 36e, HI: 54e). Larger electron clouds produce stronger London (dispersion) forces. HCl, HBr, and HI do not form hydrogen bonds. Although they are polar, dipole strength decreases down the group, so permanent dipole–dipole forces cannot explain the rising trend.',
            topic: 'Melting/Boiling Trends in Organic Substances',
        },
        {
            id: 'mcq-t7-13',
            stem: 'Why does increasing the chain length of an alkane increase its boiling point?',
            options: [
                'Longer chains can form hydrogen bonds',
                'Longer chains have more electrons and greater surface area, strengthening London forces',
                'Longer chains have stronger permanent dipole–dipole interactions',
                'Longer chains are more polar',
            ],
            correctAnswer: 1,
            rationale: 'Increasing carbon chain length increases the number of electrons and the surface area available for contact between molecules, resulting in stronger London (dispersion) forces. Alkanes are non-polar and cannot form hydrogen bonds or significant permanent dipoles.',
            topic: 'Melting/Boiling Trends in Organic Substances',
        },

        // Subtopic 4 – Solubility Patterns
        {
            id: 'mcq-t7-14',
            stem: '"Like dissolves like" means:',
            options: [
                'Solutes and solvents must have the same molar mass',
                'Polar solutes dissolve in polar solvents and non-polar solutes dissolve in non-polar solvents',
                'Solutes always dissolve in solvents of the same temperature',
                'Ionic compounds dissolve only in ionic solvents',
            ],
            correctAnswer: 1,
            rationale: '"Like dissolves like" refers to polarity: polar (or ionic) solutes dissolve in polar solvents (e.g. water) because the solvent–solute interactions replace solute–solute interactions. Non-polar solutes dissolve in non-polar solvents. Molar mass and temperature are not what "like" refers to.',
            topic: 'Solubility Patterns',
        },
        {
            id: 'mcq-t7-15',
            stem: 'As the length of the hydrocarbon chain in an alcohol increases, solubility in water:',
            options: [
                'Increases because longer chains form more hydrogen bonds',
                'Stays constant because the –OH group always allows dissolution',
                'Decreases because the non-polar chain dominates and disrupts the water structure',
                'Increases because larger molecules have stronger London forces with water',
            ],
            correctAnswer: 2,
            rationale: 'Short-chain alcohols dissolve in water because the –OH group hydrogen bonds with water. As the carbon chain grows, the non-polar region becomes dominant, disrupting the hydrogen-bond network of water and reducing solubility. The –OH group alone cannot compensate for a large hydrophobic chain.',
            topic: 'Solubility Patterns',
        },
        {
            id: 'mcq-t7-16',
            stem: 'Why do ionic compounds such as NaCl dissolve in water?',
            options: [
                'NaCl forms covalent bonds with water molecules',
                'Water molecules are non-polar and surround the ions without interaction',
                'The polar water molecules are attracted to the ions, and the energy released by hydration is sufficient to break the ionic lattice',
                'NaCl has the same lattice energy as the energy of hydrogen bonds in water',
            ],
            correctAnswer: 2,
            rationale: 'Water molecules use their dipole (δ⁻ oxygen toward cations, δ⁺ hydrogens toward anions) to surround and stabilise ions — a process called hydration. If the enthalpy of hydration exceeds (or closely matches) the lattice energy, the ionic solid dissolves. No covalent bonds are formed.',
            topic: 'Solubility Patterns',
        },

        // Subtopic 5 – Choosing Solvents
        {
            id: 'mcq-t7-17',
            stem: 'Iodine (I₂) dissolves readily in hexane to give a purple solution but is almost insoluble in water. This is best explained by:',
            options: [
                'I₂ is ionic and hexane is ionic',
                'I₂ is non-polar and hexane is non-polar, so London forces between them are sufficient for dissolution; water\'s H-bonds are too strong to be disrupted by the non-polar I₂',
                'I₂ reacts chemically with water',
                'Hexane is a polar solvent that can solvate non-polar molecules',
            ],
            correctAnswer: 1,
            rationale: 'I₂ is a non-polar molecule (London forces). Hexane is also non-polar. The London forces between I₂ and hexane are sufficient to cause mixing. In water, the strong H-bonding network would be disrupted without equivalent compensation, so dissolution is unfavourable. Hexane is non-polar, not polar. I₂ does not react significantly with water.',
            topic: 'Choosing Solvents',
        },
        {
            id: 'mcq-t7-18',
            stem: 'HCl dissolved in water ionises completely to H⁺ and Cl⁻, but when dissolved in methylbenzene it remains as HCl molecules. This is because:',
            options: [
                'Methylbenzene is a stronger acid than HCl',
                'Water is a polar, protic solvent that can stabilise ions; methylbenzene is non-polar and cannot stabilise charged species',
                'HCl is insoluble in methylbenzene',
                'Methylbenzene reacts with Cl⁻ ions preventing ionisation',
            ],
            correctAnswer: 1,
            rationale: 'Water is polar and protic; it strongly solvates H⁺ and Cl⁻ ions, providing the energy needed for ionisation. Methylbenzene is non-polar and cannot stabilise ions, so HCl remains as discrete molecules. Solubility of HCl in methylbenzene is finite, and no reaction with Cl⁻ occurs.',
            topic: 'Choosing Solvents',
        },

        // Subtopic 6 – Water of Crystallisation
        {
            id: 'mcq-t7-19',
            stem: 'Anhydrous copper(II) sulfate turns blue when exposed to water. This reaction is used as a test for water because:',
            options: [
                'CuSO₄ undergoes a redox reaction with water',
                'Anhydrous CuSO₄ is white and absorbs water molecules to form the blue hydrated salt CuSO₄·5H₂O',
                'Water causes CuSO₄ to decompose and release SO₃',
                'The blue colour indicates the reduction of Cu²⁺ to Cu⁺',
            ],
            correctAnswer: 1,
            rationale: 'Anhydrous CuSO₄ is white. When water is present, it forms the hydrated salt CuSO₄·5H₂O which is blue. This visible colour change is a reliable qualitative test for the presence of water. No redox reaction or decomposition is involved.',
            topic: 'Water of Crystallisation',
        },
        {
            id: 'mcq-t7-20',
            stem: 'In CuSO₄·5H₂O, what is meant by the term "water of crystallisation"?',
            options: [
                'Water molecules trapped in cracks in the crystal',
                'Water produced when the crystal dissolves',
                'A definite number of water molecules bonded within the crystal structure in a fixed ratio',
                'Surface water adsorbed on the outside of the crystal',
            ],
            correctAnswer: 2,
            rationale: 'Water of crystallisation refers to water molecules that are incorporated into the crystal lattice in a definite stoichiometric ratio (here 5 molecules per formula unit). They are not surface water or water produced on dissolution; they form an integral part of the crystal structure.',
            topic: 'Water of Crystallisation',
        },

        // Subtopic 7 – Saturated Vapour Pressure
        {
            id: 'mcq-t7-21',
            stem: 'Saturated vapour pressure (SVP) depends on:',
            options: [
                'The volume of the container only',
                'The amount of liquid present only',
                'Temperature only',
                'Both temperature and container volume',
            ],
            correctAnswer: 2,
            rationale: 'SVP is the pressure exerted by a vapour in dynamic equilibrium with its liquid at a given temperature. It depends only on temperature (and the identity of the liquid), not on the volume of the container or the amount of liquid, provided some liquid is present.',
            topic: 'Saturated Vapour Pressure',
        },
        {
            id: 'mcq-t7-22',
            stem: 'A liquid boils when:',
            options: [
                'Its SVP equals the pressure of water vapour in the atmosphere',
                'Its SVP equals the external (atmospheric) pressure',
                'Its temperature reaches exactly 100 °C regardless of pressure',
                'Its molecules gain enough energy to break all intermolecular forces simultaneously',
            ],
            correctAnswer: 1,
            rationale: 'Boiling occurs when the saturated vapour pressure of the liquid equals the external pressure, allowing bubbles to form throughout the liquid. At sea level this is ~101 kPa, giving 100 °C for water. At altitude, lower external pressure means a lower boiling point.',
            topic: 'Saturated Vapour Pressure',
        },
        {
            id: 'mcq-t7-23',
            stem: 'Increasing temperature increases the saturated vapour pressure of a liquid because:',
            options: [
                'More molecules are converted to gas permanently',
                'More molecules have sufficient kinetic energy to escape the liquid phase, shifting the liquid–vapour equilibrium toward the vapour',
                'Temperature decreases the intermolecular forces permanently',
                'The liquid expands and molecules are forced out',
            ],
            correctAnswer: 1,
            rationale: 'Higher temperature increases the average kinetic energy of molecules, so a greater proportion can overcome intermolecular forces and enter the vapour phase. The equilibrium shifts towards vapour, raising SVP. The process is reversible (dynamic equilibrium); intermolecular forces are not permanently destroyed.',
            topic: 'Saturated Vapour Pressure',
        },

        // Subtopic 8 – Phase Diagrams
        {
            id: 'mcq-t7-24',
            stem: 'The triple point on a phase diagram is:',
            options: [
                'The temperature and pressure at which all three phases are in equilibrium simultaneously',
                'The highest temperature at which a gas can be liquefied',
                'The point at which solid converts directly to gas',
                'The normal melting point at 1 atm pressure',
            ],
            correctAnswer: 0,
            rationale: 'The triple point is the unique combination of temperature and pressure at which solid, liquid, and gas coexist in equilibrium. The critical point is the maximum temperature for liquefaction. Sublimation occurs below the triple point pressure. The normal melting point is at 1 atm.',
            topic: 'Phase Diagrams',
        },
        {
            id: 'mcq-t7-25',
            stem: 'CO₂ sublimes at atmospheric pressure (1 atm) rather than melting because:',
            options: [
                'CO₂ does not have a liquid phase',
                'The triple point of CO₂ is at 5.11 atm, which is above atmospheric pressure, so the liquid phase is inaccessible at 1 atm',
                'CO₂ is too heavy to remain liquid at room temperature',
                'The critical temperature of CO₂ is below room temperature',
            ],
            correctAnswer: 1,
            rationale: 'CO₂\'s triple point is at 5.11 atm and −56.6 °C. At atmospheric pressure (1 atm), which is below the triple point pressure, there is no stable liquid phase. Solid CO₂ therefore sublimes directly to gas. The critical temperature of CO₂ is 31 °C, above room temperature, so CO₂ can be liquefied under pressure.',
            topic: 'Phase Diagrams',
        },
        {
            id: 'mcq-t7-26',
            stem: 'For water, the solid–liquid boundary on a phase diagram has a slight negative slope (leans to the left). This means:',
            options: [
                'Increasing pressure at constant temperature converts liquid water to ice',
                'Increasing pressure lowers the melting point of ice',
                'Water cannot be melted at any pressure above 1 atm',
                'Ice always sublimes at high pressures',
            ],
            correctAnswer: 1,
            rationale: 'Because ice is less dense than liquid water, applying pressure favours the denser liquid phase, lowering the melting point. This is reflected in the negative slope of the solid–liquid boundary. This is anomalous; for most substances (where solid is denser) the slope is positive.',
            topic: 'Phase Diagrams',
        },

        // Subtopic 9 – Raoult's Law
        {
            id: 'mcq-t7-27',
            stem: 'According to Raoult\'s Law, adding a non-volatile solute to a solvent:',
            options: [
                'Increases the saturated vapour pressure of the solution',
                'Has no effect on the saturated vapour pressure',
                'Decreases the saturated vapour pressure in proportion to the mole fraction of solute',
                'Decreases the saturated vapour pressure in proportion to the mass of solute',
            ],
            correctAnswer: 2,
            rationale: 'Raoult\'s Law: P = P° × x_solvent. The SVP of the solution is proportional to the mole fraction of solvent. Adding solute reduces the mole fraction of solvent, decreasing SVP. The relationship involves mole fractions, not masses.',
            topic: "Raoult's Law",
        },
        {
            id: 'mcq-t7-28',
            stem: 'A solution is prepared from 1 mol of glucose dissolved in 9 mol of water. The SVP of pure water at 25 °C is 3.17 kPa. What is the SVP of the solution?',
            options: ['3.17 kPa', '2.85 kPa', '3.52 kPa', '0.317 kPa'],
            correctAnswer: 1,
            rationale: 'Mole fraction of water x = 9 ÷ (9 + 1) = 0.9. P = P° × x = 3.17 × 0.9 = 2.85 kPa. Option A ignores the solute. Option C is incorrect (SVP decreases, not increases). Option D divides by 10 instead of multiplying by 0.9.',
            topic: "Raoult's Law",
        },
        {
            id: 'mcq-t7-29',
            stem: 'An ionic solute such as NaCl has a greater effect on SVP depression than a covalent solute of the same mole amount because:',
            options: [
                'Ionic solutes are more soluble',
                'Ionic solutes dissociate into separate ions, increasing the total number of solute particles and further reducing the mole fraction of solvent',
                'NaCl has a higher molar mass',
                'Ionic solutes have stronger London forces with water',
            ],
            correctAnswer: 1,
            rationale: 'NaCl dissociates into Na⁺ and Cl⁻, effectively doubling the number of solute particles per formula unit. This lowers the mole fraction of water more than an equivalent amount of non-dissociating solute, causing greater SVP depression (and greater boiling point elevation and freezing point depression).',
            topic: "Raoult's Law",
        },
        {
            id: 'mcq-t7-30',
            stem: 'Which of the following is a consequence of SVP reduction by a dissolved solute?',
            options: [
                'Freezing point depression only',
                'Boiling point elevation only',
                'Both boiling point elevation and freezing point depression',
                'Neither; SVP changes do not affect phase transition temperatures',
            ],
            correctAnswer: 2,
            rationale: 'Lowering SVP shifts the phase diagram downward. The liquid–vapour line crosses the atmospheric pressure line at a higher temperature (boiling point elevation). The solid–liquid line shifts so the solution freezes at a lower temperature (freezing point depression). Both effects follow from the reduced SVP.',
            topic: "Raoult's Law",
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FILL-BLANK  (~15 questions)
    // ─────────────────────────────────────────────────────────────────────────
    fillblank: [
        {
            id: 'fb-t7-1',
            stem: 'Complete the sentence about London forces.',
            template: 'London forces arise from __BLANK__ dipoles on one molecule inducing dipoles on neighbouring molecules.',
            blanks: [{ answer: 'instantaneous' }],
            rationale: 'London (dispersion) forces originate when electrons temporarily accumulate on one side of a molecule, creating an instantaneous dipole that induces a corresponding dipole in an adjacent molecule.',
        },
        {
            id: 'fb-t7-2',
            stem: 'Complete the sentence about London force strength.',
            template: 'London forces increase in strength as the number of __BLANK__ in a molecule increases, because the electron cloud becomes more polarisable.',
            blanks: [{ answer: 'electrons' }],
            rationale: 'A molecule with more electrons has a larger, more diffuse electron cloud that can be distorted more easily, producing larger instantaneous dipoles and stronger London forces.',
        },
        {
            id: 'fb-t7-3',
            stem: 'Complete the sentence about hydrogen bond requirements.',
            template: 'For hydrogen bonding to form, hydrogen must be covalently bonded to __BLANK__, __BLANK__, or __BLANK__.',
            blanks: [{ answer: 'nitrogen' }, { answer: 'oxygen' }, { answer: 'fluorine' }],
            rationale: 'Only N, O, and F are electronegative enough to polarise the H sufficiently for hydrogen bonding. Hydrogen bonded to, say, carbon does not form H-bonds.',
        },
        {
            id: 'fb-t7-4',
            stem: 'Complete the sentence about water\'s hydrogen bonding.',
            template: 'Each water molecule can form up to __BLANK__ hydrogen bonds because it has two O–H bond donors and two lone pairs on oxygen.',
            blanks: [{ answer: 'four' }],
            rationale: 'The two O–H groups each donate one hydrogen bond, and the two lone pairs on oxygen each accept one hydrogen bond, giving a maximum of four hydrogen bonds per water molecule.',
        },
        {
            id: 'fb-t7-5',
            stem: 'Complete the sentence about ice density.',
            template: 'Ice is __BLANK__ dense than liquid water because the hydrogen bonds in ice form an open __BLANK__ lattice that holds molecules further apart.',
            blanks: [{ answer: 'less' }, { answer: 'tetrahedral' }],
            rationale: 'In ice, rigid tetrahedral hydrogen-bond geometry prevents close packing. When ice melts, some H-bonds break and molecules pack more closely, increasing density.',
        },
        {
            id: 'fb-t7-6',
            stem: 'Complete the sentence about boiling point trends in alkanes.',
            template: 'As the carbon chain length of an alkane increases, its boiling point __BLANK__ because London forces become __BLANK__.',
            blanks: [{ answer: 'increases' }, { answer: 'stronger' }],
            rationale: 'Longer chains have more electrons and more surface area for intermolecular contact, increasing London force strength and therefore the energy required to vaporise the compound.',
        },
        {
            id: 'fb-t7-7',
            stem: 'Complete the sentence about HF.',
            template: 'Among the Group 7 hydrides, HF has an anomalously high boiling point because it can form __BLANK__ bonds between molecules.',
            blanks: [{ answer: 'hydrogen' }],
            rationale: 'HF contains H bonded to F (the most electronegative element), enabling strong hydrogen bonds. HCl, HBr, and HI cannot form hydrogen bonds, so their boiling points follow the London force trend and are much lower than expected for HF.',
        },
        {
            id: 'fb-t7-8',
            stem: 'Complete the sentence about solubility.',
            template: 'The principle "__BLANK__ dissolves like" states that polar solutes dissolve in polar solvents and non-polar solutes dissolve in non-polar solvents.',
            blanks: [{ answer: 'like' }],
            rationale: '"Like dissolves like" describes the general rule that dissolution is favourable when solute–solvent interactions are similar in nature (both polar, or both non-polar) to the original solute–solute and solvent–solvent interactions.',
        },
        {
            id: 'fb-t7-9',
            stem: 'Complete the sentence about I₂ solubility.',
            template: 'Iodine is almost insoluble in water but dissolves in hexane, giving a __BLANK__ solution, because both I₂ and hexane are __BLANK__.',
            blanks: [{ answer: 'purple' }, { answer: 'non-polar' }],
            rationale: 'Non-polar I₂ dissolves in non-polar hexane through compatible London forces. The solution appears purple (violet). Water cannot dissolve I₂ because its H-bond network would be disrupted without equivalent compensation.',
        },
        {
            id: 'fb-t7-10',
            stem: 'Complete the sentence about anhydrous CuSO₄.',
            template: 'Anhydrous copper(II) sulfate is __BLANK__ in colour. When water is added it forms CuSO₄·5H₂O and turns __BLANK__.',
            blanks: [{ answer: 'white' }, { answer: 'blue' }],
            rationale: 'The colour change from white (anhydrous) to blue (hydrated) is a well-known qualitative test for the presence of water. The five water molecules coordinate around the Cu²⁺ ion, changing its electronic environment.',
        },
        {
            id: 'fb-t7-11',
            stem: 'Complete the sentence about saturated vapour pressure.',
            template: 'SVP depends only on __BLANK__; it does not change with the volume of the container, provided __BLANK__ liquid is present.',
            blanks: [{ answer: 'temperature' }, { answer: 'some' }],
            rationale: 'SVP is an equilibrium property governed by temperature. As long as liquid remains, the vapour phase reaches the same equilibrium pressure regardless of container size.',
        },
        {
            id: 'fb-t7-12',
            stem: 'Complete the sentence about the triple point.',
            template: 'The __BLANK__ point on a phase diagram is the unique temperature and pressure at which solid, liquid, and vapour coexist in equilibrium.',
            blanks: [{ answer: 'triple' }],
            rationale: 'At the triple point, and only at the triple point, all three phases are simultaneously in equilibrium. For water this occurs at 0.006 atm and 0.01 °C.',
        },
        {
            id: 'fb-t7-13',
            stem: 'Complete the sentence about Raoult\'s Law.',
            template: 'Raoult\'s Law states that the SVP of a solution equals the SVP of the pure solvent multiplied by the __BLANK__ fraction of the solvent.',
            blanks: [{ answer: 'mole' }],
            rationale: 'Raoult\'s Law: P = P° × x_solvent. The mole fraction of solvent (x_solvent = mol solvent ÷ total mol) is always less than 1 when a solute is present, so SVP is always reduced.',
        },
        {
            id: 'fb-t7-14',
            stem: 'Complete the sentence about ionic solutes and Raoult\'s Law.',
            template: 'NaCl is more effective at depressing SVP than glucose at the same mole amount because NaCl __BLANK__ into two ions, doubling the number of solute __BLANK__.',
            blanks: [{ answer: 'dissociates' }, { answer: 'particles' }],
            rationale: 'NaCl → Na⁺ + Cl⁻. Each mole of NaCl gives 2 moles of particles, decreasing the mole fraction of solvent twice as much as 1 mole of non-dissociating glucose.',
        },
        {
            id: 'fb-t7-15',
            stem: 'Complete the sentence about boiling point elevation.',
            template: 'Adding a non-volatile solute to a liquid __BLANK__ its SVP and therefore __BLANK__ its boiling point.',
            blanks: [{ answer: 'decreases' }, { answer: 'increases' }],
            rationale: 'Lower SVP means the liquid must be heated to a higher temperature before its SVP equals atmospheric pressure, so the boiling point is elevated. This is a colligative property.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // DRAG-DROP  (~10 questions)
    // ─────────────────────────────────────────────────────────────────────────
    dragdrop: [
        {
            id: 'dd-t7-1',
            stem: 'Classify each substance by the strongest type of intermolecular force present.',
            categories: ['London Forces Only', 'Permanent Dipole–Dipole', 'Hydrogen Bonding'],
            items: [
                { text: 'CH₄', category: 'London Forces Only' },
                { text: 'HCl', category: 'Permanent Dipole–Dipole' },
                { text: 'H₂O', category: 'Hydrogen Bonding' },
                { text: 'Br₂', category: 'London Forces Only' },
                { text: 'NH₃', category: 'Hydrogen Bonding' },
                { text: 'HBr', category: 'Permanent Dipole–Dipole' },
                { text: 'CH₃CH₂OH', category: 'Hydrogen Bonding' },
                { text: 'I₂', category: 'London Forces Only' },
            ],
        },
        {
            id: 'dd-t7-2',
            stem: 'Sort the following organic compound classes by their typical boiling point order.',
            categories: ['Lowest bp', 'Medium bp', 'Highest bp'],
            items: [
                { text: 'Alkane (C₄)', category: 'Lowest bp' },
                { text: 'Ketone (C₄)', category: 'Medium bp' },
                { text: 'Carboxylic acid (C₄)', category: 'Highest bp' },
                { text: 'Alcohol (C₄)', category: 'Medium bp' },
                { text: 'Alkane (C₆)', category: 'Lowest bp' },
                { text: 'Carboxylic acid (C₂)', category: 'Highest bp' },
            ],
        },
        {
            id: 'dd-t7-3',
            stem: 'Classify these substances as soluble or insoluble in water.',
            categories: ['Soluble in Water', 'Insoluble in Water'],
            items: [
                { text: 'NaCl', category: 'Soluble in Water' },
                { text: 'I₂', category: 'Insoluble in Water' },
                { text: 'Methanol (CH₃OH)', category: 'Soluble in Water' },
                { text: 'Hexane', category: 'Insoluble in Water' },
                { text: 'HCl(g)', category: 'Soluble in Water' },
                { text: 'Octane', category: 'Insoluble in Water' },
                { text: 'Ethanol (CH₃CH₂OH)', category: 'Soluble in Water' },
            ],
        },
        {
            id: 'dd-t7-4',
            stem: 'Sort these properties of water as "Due to H-bonding" or "Would be expected without H-bonding".',
            categories: ['Due to H-Bonding', 'Would Exist Without H-Bonding'],
            items: [
                { text: 'Unusually high boiling point (100 °C)', category: 'Due to H-Bonding' },
                { text: 'Ice less dense than liquid water', category: 'Due to H-Bonding' },
                { text: 'Water is a liquid at room temperature', category: 'Due to H-Bonding' },
                { text: 'Water has a bent molecular shape', category: 'Would Exist Without H-Bonding' },
                { text: 'High surface tension of water', category: 'Due to H-Bonding' },
                { text: 'Water molecule has two O–H bonds', category: 'Would Exist Without H-Bonding' },
            ],
        },
        {
            id: 'dd-t7-5',
            stem: 'Classify each region or point on a phase diagram.',
            categories: ['Region/Boundary Feature', 'Phase Present'],
            items: [
                { text: 'Above critical temperature and pressure', category: 'Region/Boundary Feature' },
                { text: 'Triple point', category: 'Region/Boundary Feature' },
                { text: 'Below the solid–vapour line', category: 'Phase Present' },
                { text: 'Between solid–liquid and liquid–vapour lines', category: 'Phase Present' },
                { text: 'Critical point', category: 'Region/Boundary Feature' },
                { text: 'Below the solid–liquid line (low temp, high pressure)', category: 'Phase Present' },
            ],
        },
        {
            id: 'dd-t7-6',
            stem: 'Sort the following Group 7 hydrides into their boiling-point trend categories.',
            categories: ['Anomalously High bp (H-bonding)', 'Low bp increasing with electron count'],
            items: [
                { text: 'HF', category: 'Anomalously High bp (H-bonding)' },
                { text: 'HCl', category: 'Low bp increasing with electron count' },
                { text: 'HBr', category: 'Low bp increasing with electron count' },
                { text: 'HI', category: 'Low bp increasing with electron count' },
            ],
        },
        {
            id: 'dd-t7-7',
            stem: 'Classify these salts as hydrated or anhydrous.',
            categories: ['Hydrated Salt', 'Anhydrous Salt'],
            items: [
                { text: 'CuSO₄·5H₂O', category: 'Hydrated Salt' },
                { text: 'White CuSO₄', category: 'Anhydrous Salt' },
                { text: 'Na₂CO₃·10H₂O (washing soda)', category: 'Hydrated Salt' },
                { text: 'MgSO₄ (after strong heating)', category: 'Anhydrous Salt' },
                { text: 'MgSO₄·7H₂O (Epsom salt)', category: 'Hydrated Salt' },
                { text: 'CaCl₂ (desiccant)', category: 'Anhydrous Salt' },
            ],
        },
        {
            id: 'dd-t7-8',
            stem: 'Sort the following statements about Raoult\'s Law as TRUE or FALSE.',
            categories: ['True', 'False'],
            items: [
                { text: 'Adding a non-volatile solute decreases SVP', category: 'True' },
                { text: 'SVP of solution = P° × mole fraction of solute', category: 'False' },
                { text: 'Ionic solutes count as multiple particles when dissociated', category: 'True' },
                { text: 'Dissolving a solute increases the boiling point', category: 'True' },
                { text: 'SVP depends on the volume of the container', category: 'False' },
                { text: 'Dissolving a solute decreases the freezing point', category: 'True' },
            ],
        },
        {
            id: 'dd-t7-9',
            stem: 'Match each intermolecular force to the factor that most affects its strength.',
            categories: ['London Forces', 'Hydrogen Bonding', 'Permanent Dipole–Dipole'],
            items: [
                { text: 'Number of electrons and surface area', category: 'London Forces' },
                { text: 'Electronegativity of N, O, or F and lone pair availability', category: 'Hydrogen Bonding' },
                { text: 'Magnitude of δ+ and δ− charges on the molecule', category: 'Permanent Dipole–Dipole' },
                { text: 'Molecular shape (branched vs. straight chain)', category: 'London Forces' },
                { text: 'H bonded to an electronegative atom', category: 'Hydrogen Bonding' },
                { text: 'Polarity of bond (electronegativity difference)', category: 'Permanent Dipole–Dipole' },
            ],
        },
        {
            id: 'dd-t7-10',
            stem: 'Classify the following changes when a solid dissolves in water.',
            categories: ['Energy Released', 'Energy Required'],
            items: [
                { text: 'Breaking ionic lattice (lattice enthalpy)', category: 'Energy Required' },
                { text: 'Hydration of cations by water dipoles', category: 'Energy Released' },
                { text: 'Hydration of anions by water dipoles', category: 'Energy Released' },
                { text: 'Breaking some water–water H-bonds to accommodate ions', category: 'Energy Required' },
                { text: 'Formation of ion–dipole attractions', category: 'Energy Released' },
                { text: 'Separating solute ions from each other', category: 'Energy Required' },
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // SEQUENCE  (~8 questions)
    // ─────────────────────────────────────────────────────────────────────────
    sequence: [
        {
            id: 'seq-t7-1',
            stem: 'Put these steps in the correct order to explain how London forces arise between two non-polar molecules:',
            steps: [
                'Electrons in molecule A fluctuate, creating an instantaneous dipole (δ+ and δ−)',
                'The instantaneous dipole of A distorts the electron cloud of molecule B',
                'Molecule B develops an induced dipole aligned with A\'s dipole',
                'Electrostatic attraction between the δ+ of one end and δ− of the other holds the molecules together momentarily',
            ],
        },
        {
            id: 'seq-t7-2',
            stem: 'Put these steps in the correct order to describe the formation of a hydrogen bond between two water molecules:',
            steps: [
                'The O–H bond in one water molecule is highly polarised: δ+ on H, δ− on O',
                'The δ+ hydrogen is attracted to the lone pair on the oxygen of a neighbouring water molecule',
                'A dashed-line hydrogen bond forms between H and the lone pair',
                'The bond has a partial electrostatic character, much weaker than a covalent bond',
            ],
        },
        {
            id: 'seq-t7-3',
            stem: 'Put these steps in the correct order to explain why ice floats on liquid water:',
            steps: [
                'Each H₂O in ice forms four hydrogen bonds in a tetrahedral arrangement',
                'This open tetrahedral lattice holds molecules further apart than in liquid water',
                'Ice therefore has a lower density than liquid water',
                'Ice floats on the surface of liquid water, insulating the water below',
            ],
        },
        {
            id: 'seq-t7-4',
            stem: 'Put these steps in the correct order to describe what happens as temperature is raised and a liquid approaches its boiling point:',
            steps: [
                'Temperature increases; molecules gain kinetic energy',
                'More molecules have enough energy to escape the liquid surface into the vapour phase',
                'Saturated vapour pressure increases as more molecules enter the vapour',
                'When SVP equals external (atmospheric) pressure, the liquid boils',
            ],
        },
        {
            id: 'seq-t7-5',
            stem: 'Put the following steps in order when using anhydrous CuSO₄ to test for water:',
            steps: [
                'Obtain a sample of white anhydrous copper(II) sulfate',
                'Add a few drops of the liquid under test to the white powder',
                'Observe any colour change — a blue colour indicates water is present',
                'Confirm result: blue colour confirms formation of CuSO₄·5H₂O',
            ],
        },
        {
            id: 'seq-t7-6',
            stem: 'Arrange the following Group 16 hydrides in order from lowest to highest boiling point:',
            steps: [
                'H₂S (bp −60 °C) — London forces only, fewest electrons',
                'H₂Se (bp −41 °C) — London forces only, more electrons than H₂S',
                'H₂Te (bp −2 °C) — London forces only, most electrons',
                'H₂O (bp 100 °C) — hydrogen bonding, anomalously high',
            ],
        },
        {
            id: 'seq-t7-7',
            stem: 'Put these steps in the correct order to apply Raoult\'s Law and calculate SVP depression:',
            steps: [
                'Determine moles of solvent and moles of solute',
                'Calculate the mole fraction of the solvent: x = mol solvent ÷ (mol solvent + mol solute)',
                'Multiply the mole fraction by the SVP of the pure solvent: P = P° × x',
                'State the SVP depression: ΔP = P° − P',
            ],
        },
        {
            id: 'seq-t7-8',
            stem: 'Arrange these steps in order to read a phase diagram for a pure substance and determine its state at a given T and P:',
            steps: [
                'Locate the given temperature on the horizontal axis',
                'Locate the given pressure on the vertical axis',
                'Find the point at the intersection of T and P on the diagram',
                'Identify which region (solid, liquid, or gas) the point lies in, or whether it is on a boundary',
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // KEYWORD CHECK  (~12 questions)
    // ─────────────────────────────────────────────────────────────────────────
    keyword: [
        {
            id: 'kw-t7-1',
            stem: 'Describe how London (dispersion) forces arise between molecules. [2 marks]',
            marks: 2,
            keywords: ['instantaneous dipole', 'induced dipole', 'electron cloud', 'electrostatic'],
            modelAnswer: 'London forces arise when the movement of electrons in a molecule creates a temporary instantaneous dipole. This instantaneous dipole distorts the electron cloud of a neighbouring molecule, inducing a dipole in it. The resulting electrostatic attraction between the two dipoles constitutes the London force.',
        },
        {
            id: 'kw-t7-2',
            stem: 'State the conditions required for hydrogen bonding to occur between two molecules. [2 marks]',
            marks: 2,
            keywords: ['hydrogen', 'nitrogen', 'oxygen', 'fluorine', 'lone pair', 'electronegative'],
            modelAnswer: 'Hydrogen bonding requires a hydrogen atom covalently bonded to a highly electronegative atom (nitrogen, oxygen, or fluorine) in one molecule, interacting with a lone pair on a nitrogen, oxygen, or fluorine atom of another (or the same) molecule.',
        },
        {
            id: 'kw-t7-3',
            stem: 'Explain why water has an unusually high boiling point compared to other Group 16 hydrides. [3 marks]',
            marks: 3,
            keywords: ['hydrogen bonding', 'lone pair', 'O–H', 'more energy', 'high boiling point', 'intermolecular'],
            modelAnswer: 'Water molecules form extensive hydrogen bonds between the δ+ hydrogen of one O–H bond and a lone pair on the oxygen of an adjacent molecule. Each water molecule can form up to four hydrogen bonds. These additional intermolecular forces require considerably more energy to overcome than the London forces present in H₂S, H₂Se, and H₂Te, resulting in water\'s anomalously high boiling point of 100 °C.',
        },
        {
            id: 'kw-t7-4',
            stem: 'Explain why ice is less dense than liquid water. [3 marks]',
            marks: 3,
            keywords: ['hydrogen bonds', 'tetrahedral', 'open lattice', 'further apart', 'lower density', 'melts'],
            modelAnswer: 'In ice, each water molecule forms four hydrogen bonds in a rigid, open tetrahedral lattice arrangement. This structure holds molecules further apart than in liquid water, giving ice a lower density. When ice melts, some hydrogen bonds break and molecules can pack more closely together, increasing the density of liquid water above that of ice.',
        },
        {
            id: 'kw-t7-5',
            stem: 'Explain the trend in boiling points of the Group 7 hydrides HCl, HBr, and HI (ignoring HF). [2 marks]',
            marks: 2,
            keywords: ['London forces', 'electrons', 'polarisable', 'increases', 'boiling point'],
            modelAnswer: 'From HCl to HI, the number of electrons increases significantly. Larger electron clouds are more polarisable, generating stronger instantaneous and induced dipoles (London forces). Therefore the London forces increase from HCl to HBr to HI, and boiling point increases in the same order.',
        },
        {
            id: 'kw-t7-6',
            stem: 'Explain why short-chain alcohols are miscible with water but long-chain alcohols are not. [3 marks]',
            marks: 3,
            keywords: ['hydrogen bond', 'OH group', 'non-polar chain', 'disrupts', 'water structure', 'solubility decreases'],
            modelAnswer: 'Short-chain alcohols have a polar –OH group that forms hydrogen bonds with water molecules, enabling dissolution. As the hydrocarbon chain lengthens, the non-polar region becomes dominant. Dissolving the long-chain alcohol would require breaking the hydrogen-bond network of water without sufficient compensation from solute–solvent interactions, so dissolution becomes increasingly unfavourable and solubility decreases.',
        },
        {
            id: 'kw-t7-7',
            stem: 'Explain why I₂ dissolves in hexane but not in water. [3 marks]',
            marks: 3,
            keywords: ['non-polar', 'London forces', 'hexane', 'hydrogen bond', 'water network', 'like dissolves like'],
            modelAnswer: 'I₂ is a non-polar molecule and interacts with other molecules only through London forces. Hexane is also non-polar; the London forces between I₂ and hexane are comparable in strength to hexane–hexane and I₂–I₂ interactions, allowing mixing. In water, dissolution would require breaking the strong hydrogen-bond network. The energy released by London forces between I₂ and water is insufficient to compensate, so I₂ is insoluble in water (like dissolves like).',
        },
        {
            id: 'kw-t7-8',
            stem: 'Describe the use of anhydrous copper(II) sulfate as a test for water. Include the observation and equation. [2 marks]',
            marks: 2,
            keywords: ['white', 'blue', 'CuSO₄·5H₂O', 'anhydrous', 'hydrated', 'water'],
            modelAnswer: 'Anhydrous copper(II) sulfate (CuSO₄) is white. When water is added, it absorbs the water to form the blue hydrated salt: CuSO₄ + 5H₂O → CuSO₄·5H₂O. The colour change from white to blue is a positive test for the presence of water.',
        },
        {
            id: 'kw-t7-9',
            stem: 'Define saturated vapour pressure and state the conditions under which a liquid boils. [3 marks]',
            marks: 3,
            keywords: ['dynamic equilibrium', 'vapour pressure', 'temperature', 'boiling', 'equals external pressure', 'closed container'],
            modelAnswer: 'Saturated vapour pressure is the pressure exerted by a vapour in dynamic equilibrium with its liquid in a closed container at a given temperature. It depends only on temperature. A liquid boils when its saturated vapour pressure equals the external (atmospheric) pressure, allowing bubbles to form throughout the liquid.',
        },
        {
            id: 'kw-t7-10',
            stem: 'Explain what is meant by the triple point on a phase diagram. [2 marks]',
            marks: 2,
            keywords: ['triple point', 'solid', 'liquid', 'vapour', 'equilibrium', 'unique'],
            modelAnswer: 'The triple point is the unique temperature and pressure at which solid, liquid, and vapour phases coexist in equilibrium simultaneously. It is a single point on the phase diagram; there is only one triple point for a given pure substance.',
        },
        {
            id: 'kw-t7-11',
            stem: 'State Raoult\'s Law and explain why adding a non-volatile solute reduces the SVP of a solvent. [3 marks]',
            marks: 3,
            keywords: ['mole fraction', 'SVP', 'non-volatile', 'surface', 'solute particles', 'reduces'],
            modelAnswer: 'Raoult\'s Law states that the SVP of a solution equals the SVP of the pure solvent multiplied by the mole fraction of the solvent (P = P° × x_solvent). Adding a non-volatile solute reduces the mole fraction of solvent. Solute particles occupy the liquid surface, reducing the proportion of solvent molecules that can escape into the vapour phase, thereby lowering the SVP.',
        },
        {
            id: 'kw-t7-12',
            stem: 'Explain why CO₂ sublimes at atmospheric pressure rather than melting. [2 marks]',
            marks: 2,
            keywords: ['triple point', '5.11 atm', 'atmospheric', 'below', 'sublimes', 'liquid phase'],
            modelAnswer: 'The triple point of CO₂ is at 5.11 atm and −56.6 °C. Because atmospheric pressure (1 atm) is below the triple point pressure, the liquid phase of CO₂ is inaccessible at 1 atm. Solid CO₂ therefore undergoes sublimation — converting directly from solid to gas — without passing through a liquid phase.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FLASHCARDS  (~25 cards, covering all 10 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    flashcards: [
        // Subtopic 0 – London Forces
        {
            id: 'fc-t7-1',
            front: 'What are London (dispersion) forces and what causes them?',
            back: 'London forces are weak intermolecular attractions present in all molecules.\nThey arise from instantaneous dipoles (random electron fluctuations) in one molecule inducing temporary dipoles in neighbouring molecules.\nThe resulting electrostatic attraction holds molecules together.',
            topic: 'London Forces',
        },
        {
            id: 'fc-t7-2',
            front: 'How does molecular size affect the strength of London forces?',
            back: 'Larger molecules with more electrons have more polarisable electron clouds.\n• More electrons → larger instantaneous dipoles → stronger induced dipoles\n• Greater surface area → more contact points between molecules\nBoth factors increase London force strength and raise boiling/melting points.',
            topic: 'London Forces',
        },
        {
            id: 'fc-t7-3',
            front: 'Why does branching in alkanes reduce the boiling point compared to straight-chain isomers?',
            back: 'Branched molecules are more compact and spherical, reducing the surface area available for contact with neighbouring molecules.\nFewer contact points → weaker London forces → less energy needed to vaporise → lower boiling point.',
            topic: 'London Forces',
        },

        // Subtopic 1 – Hydrogen Bonding
        {
            id: 'fc-t7-4',
            front: 'State the two conditions required for hydrogen bonding.',
            back: '1. H must be covalently bonded to N, O, or F (highly electronegative atoms).\n2. There must be a lone pair on N, O, or F of an adjacent molecule (or the same molecule) to act as the acceptor.\nThe H-bond is represented by a dashed line.',
            topic: 'Hydrogen Bonding',
        },
        {
            id: 'fc-t7-5',
            front: 'How many hydrogen bonds can one water molecule form, and why?',
            back: 'Up to 4 hydrogen bonds:\n• 2 as a donor (via the two O–H bonds, each H is δ+)\n• 2 as an acceptor (via the two lone pairs on oxygen)\nThis tetrahedral H-bond network gives water many of its unusual properties.',
            topic: 'Hydrogen Bonding',
        },
        {
            id: 'fc-t7-6',
            front: 'Why can NH₃ form fewer hydrogen bonds per molecule than H₂O?',
            back: 'NH₃ has three N–H bonds (three potential donor H atoms) but only one lone pair on nitrogen.\nThis means NH₃ can donate up to 3 H-bonds but can only accept one.\nIn practice, each NH₃ forms fewer H-bonds than H₂O (which can both donate and accept 2 each).',
            topic: 'Hydrogen Bonding',
        },

        // Subtopic 2 – Anomalous Properties of Water
        {
            id: 'fc-t7-7',
            front: 'Why is water a liquid at room temperature when similar-sized molecules (e.g. H₂S) are gases?',
            back: 'Water forms extensive intermolecular hydrogen bonds, requiring much more energy to overcome than the London forces in H₂S.\nAs a result, water\'s boiling point (100 °C) is far above room temperature, whereas H₂S boils at −60 °C.',
            topic: 'Anomalous Properties of Water',
        },
        {
            id: 'fc-t7-8',
            front: 'Explain why ice floats on water and state the biological significance.',
            back: 'Ice is less dense than liquid water because its tetrahedral H-bond lattice holds molecules further apart than in liquid water.\nBiological significance: Ice floats and forms an insulating layer on ponds/lakes in winter, allowing aquatic organisms to survive beneath the ice layer.',
            topic: 'Anomalous Properties of Water',
        },

        // Subtopic 3 – Melting/Boiling Trends in Organic Substances
        {
            id: 'fc-t7-9',
            front: 'State the boiling point order for: alkane, ketone, alcohol, carboxylic acid (all same carbon number).',
            back: 'Alkane < Ketone < Alcohol < Carboxylic acid\n• Alkane: London forces only\n• Ketone: permanent dipole–dipole + London forces\n• Alcohol: hydrogen bonding (one –OH)\n• Carboxylic acid: two hydrogen bonds per dimer (very strong), highest bp',
            topic: 'Melting/Boiling Trends in Organic Substances',
        },
        {
            id: 'fc-t7-10',
            front: 'Why does HF have an anomalously high boiling point compared to HCl, HBr, and HI?',
            back: 'HF can form hydrogen bonds (H bonded to F, the most electronegative element).\nHCl, HBr, and HI cannot form H-bonds; their boiling points follow the London force trend (increasing from HCl to HI).\nHF\'s H-bonds are stronger than London forces in HCl, giving HF an unexpectedly high boiling point.',
            topic: 'Melting/Boiling Trends in Organic Substances',
        },

        // Subtopic 4 – Solubility Patterns
        {
            id: 'fc-t7-11',
            front: 'State the "like dissolves like" rule and give one example.',
            back: 'Polar solvents dissolve polar (and ionic) solutes; non-polar solvents dissolve non-polar solutes.\nExample: NaCl (ionic/polar) dissolves in water (polar) but not in hexane (non-polar).\nI₂ (non-polar) dissolves in hexane (non-polar) but not in water.',
            topic: 'Solubility Patterns',
        },
        {
            id: 'fc-t7-12',
            front: 'How does increasing chain length affect the solubility of alcohols in water?',
            back: 'Solubility in water decreases as chain length increases.\nShort-chain alcohols: –OH group H-bonds with water, enabling dissolution.\nLong-chain alcohols: the large non-polar hydrocarbon chain dominates, disrupting water\'s H-bond network without sufficient compensation, reducing solubility.',
            topic: 'Solubility Patterns',
        },

        // Subtopic 5 – Choosing Solvents
        {
            id: 'fc-t7-13',
            front: 'What colour does iodine give in (a) hexane and (b) water?',
            back: '(a) In hexane: purple/violet solution — I₂ dissolves readily (both non-polar).\n(b) In water: very slightly soluble; gives a very pale yellow-brown colour.\nThe purple colour in hexane is used to identify iodine in solvent extraction experiments.',
            topic: 'Choosing Solvents',
        },
        {
            id: 'fc-t7-14',
            front: 'HCl ionises in water but not in methylbenzene. Explain why.',
            back: 'Water is a polar, protic solvent that stabilises H⁺ and Cl⁻ ions through strong ion–dipole interactions and hydrogen bonding.\nMethylbenzene is non-polar and cannot stabilise ions.\nIn methylbenzene, HCl remains as discrete molecules; in water, ionisation is energetically favourable.',
            topic: 'Choosing Solvents',
        },

        // Subtopic 6 – Water of Crystallisation
        {
            id: 'fc-t7-15',
            front: 'What is water of crystallisation?',
            back: 'Water of crystallisation refers to water molecules incorporated into the crystal lattice of a salt in a definite, fixed stoichiometric ratio.\nExample: CuSO₄·5H₂O has five water molecules per formula unit.\nSalts containing water of crystallisation are called hydrated salts.',
            topic: 'Water of Crystallisation',
        },
        {
            id: 'fc-t7-16',
            front: 'Describe the test for water using anhydrous copper(II) sulfate.',
            back: 'Anhydrous CuSO₄ is WHITE.\nAdd the substance to be tested:\n• If water is present → turns BLUE (forms CuSO₄·5H₂O)\n• No colour change → no water present.\nEquation: CuSO₄ + 5H₂O → CuSO₄·5H₂O',
            topic: 'Water of Crystallisation',
        },

        // Subtopic 7 – Saturated Vapour Pressure
        {
            id: 'fc-t7-17',
            front: 'Define saturated vapour pressure (SVP).',
            back: 'SVP is the pressure exerted by a vapour that is in dynamic equilibrium with its liquid in a closed container at a constant temperature.\nKey features:\n• Depends only on temperature (not container volume or amount of liquid)\n• Increases with increasing temperature\n• Boiling occurs when SVP = external pressure',
            topic: 'Saturated Vapour Pressure',
        },
        {
            id: 'fc-t7-18',
            front: 'What is sublimation and under what conditions does it occur?',
            back: 'Sublimation is the direct conversion of solid to vapour (gas) without passing through the liquid phase.\nIt occurs when the external pressure is below the triple point pressure, so no stable liquid phase exists.\nExample: CO₂ sublimes at 1 atm because its triple point is at 5.11 atm.',
            topic: 'Saturated Vapour Pressure',
        },

        // Subtopic 8 – Phase Diagrams
        {
            id: 'fc-t7-19',
            front: 'What is the triple point on a phase diagram?',
            back: 'The triple point is the unique temperature and pressure at which solid, liquid, and vapour phases are all in equilibrium simultaneously.\nFor water: ~0.006 atm and 0.01 °C.\nIt is a single, fixed point for any pure substance.',
            topic: 'Phase Diagrams',
        },
        {
            id: 'fc-t7-20',
            front: 'What is the critical point and what happens above the critical temperature?',
            back: 'The critical point is the temperature and pressure above which a gas cannot be liquefied by pressure alone.\nAbove the critical temperature, the substance exists as a supercritical fluid — it cannot be distinguished as liquid or gas.\nFor CO₂: critical temperature = 31 °C, critical pressure = 73 atm.',
            topic: 'Phase Diagrams',
        },
        {
            id: 'fc-t7-21',
            front: 'Why does the solid–liquid boundary for water slope to the left (negative slope) on a phase diagram?',
            back: 'For water, ice is less dense than liquid water.\nApplying pressure favours the denser liquid phase, lowering the melting point of ice.\nThis is anomalous; for most substances (solid denser than liquid), the boundary slopes to the right (positive slope), and pressure increases the melting point.',
            topic: 'Phase Diagrams',
        },

        // Subtopic 9 – Raoult's Law
        {
            id: 'fc-t7-22',
            front: 'State Raoult\'s Law in words and as an equation.',
            back: 'The SVP of a solution is equal to the SVP of the pure solvent multiplied by the mole fraction of the solvent.\nEquation: P = P° × x_solvent\nwhere x_solvent = mol solvent ÷ (mol solvent + mol solute)\nAdding solute always reduces P below P°.',
            topic: "Raoult's Law",
        },
        {
            id: 'fc-t7-23',
            front: 'Why do ionic solutes (e.g. NaCl) depress SVP more than the same moles of a covalent solute?',
            back: 'NaCl dissociates: Na⁺ + Cl⁻\nEach mole of NaCl gives 2 moles of particles in solution.\nMore solute particles → lower mole fraction of solvent → greater SVP depression.\nThis also means greater boiling point elevation and freezing point depression per mole than a non-dissociating solute.',
            topic: "Raoult's Law",
        },
        {
            id: 'fc-t7-24',
            front: 'State two colligative properties that result from lowering SVP with a dissolved solute.',
            back: '1. Boiling point elevation — lower SVP means a higher temperature is required for SVP to equal atmospheric pressure.\n2. Freezing point depression — the solid–liquid equilibrium shifts to lower temperatures.\nBoth effects are colligative: they depend on the number of solute particles, not their identity.',
            topic: "Raoult's Law",
        },
        {
            id: 'fc-t7-25',
            front: 'A solution contains 2 mol of solute and 8 mol of solvent. The pure solvent SVP is 40 kPa. What is the SVP of the solution?',
            back: 'x_solvent = 8 ÷ (8 + 2) = 8 ÷ 10 = 0.8\nP = P° × x_solvent = 40 × 0.8 = 32 kPa\nSVP depression = 40 − 32 = 8 kPa',
            topic: "Raoult's Law",
        },
    ],
};
