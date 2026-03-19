/**
 * Exercises: Chemistry · Unit 2 · Topic 8
 * "Redox & Groups 1, 2, 7"
 * Subtopics 0–11: redox definitions, oxidation numbers, half-equations, disproportionation,
 * Group 1, Group 2, flame tests, Group 7, halides with H₂SO₄, silver nitrate test,
 * HF anomaly, chlorine manufacture, volumetric analysis, Period 3 oxides/hydroxides.
 */
export const exercises_chemistry_2_8 = {

  // ══════════════════════════════════════════════════════════════
  // MCQ  (~30 questions)
  // ══════════════════════════════════════════════════════════════
  multipleChoice: [
    // ── Subtopic 0: Redox Basics ──────────────────────────────
    {
      id: 'mcq-t8-1',
      stem: 'Which statement correctly summarises the mnemonic OIL RIG?',
      options: [
        'Oxidation Is Loss of electrons; Reduction Is Gain of electrons',
        'Oxidation Is Gain of electrons; Reduction Is Loss of electrons',
        'Oxygen Is Lost; Reduction Involves Gain of hydrogen',
        'Oxidation Increases charge; Reduction Involves a drop in charge'
      ],
      correctAnswer: 0,
      rationale: 'OIL RIG = Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons).',
      topic: 'Redox Basics'
    },
    {
      id: 'mcq-t8-2',
      stem: 'In the reaction Fe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g), which species is the oxidising agent?',
      options: ['CO', 'Fe', 'Fe₂O₃', 'CO₂'],
      correctAnswer: 2,
      rationale: 'Fe₂O₃ provides oxygen to CO (oxidising CO). Fe₂O₃ is itself reduced (gains reducing power from CO), making it the oxidising agent.',
      topic: 'Redox Basics'
    },
    {
      id: 'mcq-t8-3',
      stem: 'The conversion of ethanol to ethanal involves which type of redox process?',
      options: [
        'Reduction via gain of oxygen',
        'Oxidation via loss of hydrogen',
        'Reduction via gain of electrons',
        'Oxidation via gain of oxygen and gain of hydrogen'
      ],
      correctAnswer: 1,
      rationale: 'Ethanol → ethanal involves loss of hydrogen from the CH₂OH group — this is oxidation by the hydrogen-transfer definition.',
      topic: 'Redox Basics'
    },

    // ── Subtopic 1: Oxidation numbers ─────────────────────────
    {
      id: 'mcq-t8-4',
      stem: 'What is the oxidation number of sulfur in H₂SO₄?',
      options: ['+2', '+4', '+6', '+8'],
      correctAnswer: 2,
      rationale: 'H = +1 (×2 = +2); O = −2 (×4 = −8). Sum must equal 0: +2 + S − 8 = 0, so S = +6.',
      topic: 'Oxidation Numbers'
    },
    {
      id: 'mcq-t8-5',
      stem: 'In the peroxide ion O₂²⁻, what is the oxidation number of each oxygen atom?',
      options: ['−2', '−1', '0', '+1'],
      correctAnswer: 1,
      rationale: 'In peroxides the total charge is −2 with two O atoms, so each O = −1. The usual rule (O = −2) does not apply to peroxides.',
      topic: 'Oxidation Numbers'
    },
    {
      id: 'mcq-t8-6',
      stem: 'Which of the following correctly names the compound FeCl₃ using IUPAC Roman-numeral convention?',
      options: ['Iron(II) chloride', 'Iron(III) chloride', 'Ferrous chloride', 'Iron chloride(III)'],
      correctAnswer: 1,
      rationale: 'Each Cl⁻ has charge −1; three Cl⁻ give −3 total. For the compound to be neutral Fe must be +3, so the name is iron(III) chloride.',
      topic: 'Oxidation Numbers'
    },
    {
      id: 'mcq-t8-7',
      stem: 'In which reaction do the oxidation numbers of none of the elements change?',
      options: [
        'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)',
        'NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)',
        'Cl₂(g) + 2KBr(aq) → 2KCl(aq) + Br₂(aq)',
        'Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)'
      ],
      correctAnswer: 1,
      rationale: 'Acid–base neutralisation does not change any oxidation numbers — it is not a redox reaction.',
      topic: 'Oxidation Numbers'
    },

    // ── Subtopic 2: Half-equations & disproportionation ───────
    {
      id: 'mcq-t8-8',
      stem: 'What is the overall ionic equation when the half-equations Cl₂ + 2e⁻ → 2Cl⁻ and 2Fe²⁺ → 2Fe³⁺ + 2e⁻ are combined?',
      options: [
        'Cl₂ + Fe²⁺ → 2Cl⁻ + Fe³⁺',
        'Cl₂ + 2Fe²⁺ → 2Cl⁻ + 2Fe³⁺',
        'Cl₂ + 2e⁻ + 2Fe²⁺ → 2Cl⁻ + 2Fe³⁺ + 2e⁻',
        '2Cl⁻ + 2Fe³⁺ → Cl₂ + 2Fe²⁺'
      ],
      correctAnswer: 1,
      rationale: 'Adding the two half-equations and cancelling 2e⁻ from each side: Cl₂ + 2Fe²⁺ → 2Cl⁻ + 2Fe³⁺.',
      topic: 'Half-Equations'
    },
    {
      id: 'mcq-t8-9',
      stem: 'Which term best describes a reaction where the same element is simultaneously oxidised and reduced?',
      options: ['Displacement', 'Disproportionation', 'Comproportionation', 'Precipitation'],
      correctAnswer: 1,
      rationale: 'Disproportionation is when one element is both oxidised and reduced in the same reaction (e.g. Cl₂ + H₂O → HCl + HClO).',
      topic: 'Half-Equations'
    },
    {
      id: 'mcq-t8-10',
      stem: 'In writing a half-equation in acidic aqueous solution, which species are you allowed to add to balance the equation?',
      options: [
        'O₂, H₂O, and H⁺',
        'H₂O, H⁺, and e⁻',
        'OH⁻, H₂O, and e⁻',
        'H₂, H₂O, and e⁻'
      ],
      correctAnswer: 1,
      rationale: 'In acid conditions you may only add H₂O (to balance O), H⁺ (to balance H), and e⁻ (to balance charge). You may not add O₂ or H₂.',
      topic: 'Half-Equations'
    },

    // ── Subtopic 3: Group 1 ────────────────────────────────────
    {
      id: 'mcq-t8-11',
      stem: 'What is observed when potassium is added to water?',
      options: [
        'Floats and fizzes gently; colourless solution produced',
        'Sinks immediately and explodes',
        'Floats, melts into a ball, fizzes and burns with a lilac flame',
        'Dashes around with an orange flame and dissolves slowly'
      ],
      correctAnswer: 2,
      rationale: 'Potassium reacts more vigorously than sodium; the hydrogen ignites and burns with a lilac flame characteristic of K⁺. It floats (density < 1 g cm⁻³) and melts slightly.',
      topic: 'Group 1'
    },
    {
      id: 'mcq-t8-12',
      stem: 'Which Group 1 metal is unique in undergoing thermal decomposition of its carbonate?',
      options: ['Sodium', 'Potassium', 'Lithium', 'Caesium'],
      correctAnswer: 2,
      rationale: 'Li₂CO₃ decomposes on heating (like Group 2 carbonates). All other Group 1 carbonates are thermally stable because the larger ions cannot polarise CO₃²⁻ sufficiently. Li⁺ is very small and has a diagonal relationship with Mg.',
      topic: 'Group 1'
    },
    {
      id: 'mcq-t8-13',
      stem: 'Reactivity of Group 1 metals increases down the group. What is the main reason for this?',
      options: [
        'Increasing nuclear charge makes the outer electron harder to lose',
        'Increasing atomic radius and shielding makes the outer electron progressively easier to lose',
        'Decreasing melting point means the metal is easier to melt',
        'Increasing electronegativity means bonds form more readily'
      ],
      correctAnswer: 1,
      rationale: 'Down Group 1, the outer s-electron is in a larger shell and is more effectively shielded from the nucleus. First ionisation energy decreases, making it much easier to donate the electron → greater reactivity.',
      topic: 'Group 1'
    },

    // ── Subtopic 4: Group 2 ────────────────────────────────────
    {
      id: 'mcq-t8-14',
      stem: 'Which Group 2 metal reacts least vigorously with cold water?',
      options: ['Calcium', 'Barium', 'Magnesium', 'Strontium'],
      correctAnswer: 2,
      rationale: 'Mg reacts very slowly with cold water (a Mg(OH)₂ film inhibits the reaction). Reactivity with water increases down the group: Mg < Ca < Sr < Ba.',
      topic: 'Group 2'
    },
    {
      id: 'mcq-t8-15',
      stem: 'What is the trend in solubility of Group 2 hydroxides down the group?',
      options: [
        'Decreases (Be(OH)₂ most soluble)',
        'Increases (Ba(OH)₂ most soluble)',
        'No trend — solubility is similar across the group',
        'Increases then decreases (Mg(OH)₂ most soluble)'
      ],
      correctAnswer: 1,
      rationale: 'Hydroxide solubility increases down Group 2: Mg(OH)₂ is sparingly soluble; Ca(OH)₂ slightly soluble ("limewater"); Ba(OH)₂ soluble enough to give a strongly alkaline solution.',
      topic: 'Group 2'
    },
    {
      id: 'mcq-t8-16',
      stem: 'Why do only strontium and barium form peroxides (XO₂) on burning in oxygen, while Be, Mg, and Ca only form simple oxides (XO)?',
      options: [
        'Sr and Ba have lower melting points so they decompose at lower temperatures',
        'Be²⁺, Mg²⁺, Ca²⁺ have higher charge density and polarise O₂²⁻ enough to break the O–O bond',
        'Sr and Ba have larger ionisation energies so they can donate more electrons',
        'Be, Mg, and Ca do not react with oxygen sufficiently'
      ],
      correctAnswer: 1,
      rationale: 'Smaller, more highly charged Be²⁺, Mg²⁺, Ca²⁺ strongly polarise the peroxide ion O₂²⁻, breaking the O–O bond. Larger Sr²⁺ and Ba²⁺ have lower charge density and cannot do this, so O₂²⁻ remains intact as a peroxide.',
      topic: 'Group 2'
    },

    // ── Subtopic 5: Flame tests ────────────────────────────────
    {
      id: 'mcq-t8-17',
      stem: 'A student performs a flame test on an unknown salt and sees a brick-red colour. Which cation is most likely present?',
      options: ['Lithium (Li⁺)', 'Potassium (K⁺)', 'Strontium (Sr²⁺)', 'Calcium (Ca²⁺)'],
      correctAnswer: 3,
      rationale: 'Ca²⁺ gives a brick-red flame. Sr²⁺ gives crimson-red, Li⁺ gives red, and K⁺ gives lilac.',
      topic: 'Flame Tests'
    },
    {
      id: 'mcq-t8-18',
      stem: 'Why does magnesium not produce a visible flame colour in a flame test?',
      options: [
        'Magnesium does not have outer electrons that can be excited',
        'The energy emitted from excited Mg²⁺ electrons falls in the ultraviolet region, outside the visible spectrum',
        'Magnesium does not react with the Bunsen flame',
        'Mg²⁺ ions are too small to absorb heat energy'
      ],
      correctAnswer: 1,
      rationale: 'The energy gap between excited and ground state for Mg²⁺ corresponds to UV radiation (wavelength < 400 nm), which is invisible to the human eye.',
      topic: 'Flame Tests'
    },

    // ── Subtopic 6: Group 7 ────────────────────────────────────
    {
      id: 'mcq-t8-19',
      stem: 'A solution of chlorine water is added to a solution of potassium iodide (KI). What would you observe?',
      options: [
        'No visible change',
        'White precipitate forms',
        'Solution turns brown as iodine is displaced',
        'A pale yellow gas is produced'
      ],
      correctAnswer: 2,
      rationale: 'Cl₂ is a stronger oxidising agent than I₂. It oxidises I⁻ to I₂: Cl₂(aq) + 2KI(aq) → 2KCl(aq) + I₂(aq). I₂ produces a brown/orange solution.',
      topic: 'Group 7'
    },
    {
      id: 'mcq-t8-20',
      stem: 'Boiling points of the halogens increase from F₂ to I₂. What type of intermolecular force is primarily responsible for this trend?',
      options: [
        'Permanent dipole–dipole forces',
        'Hydrogen bonds',
        'London (dispersion) forces',
        'Ionic attractions'
      ],
      correctAnswer: 2,
      rationale: 'Halogens are non-polar diatomic molecules. As molecular mass increases, more electrons are present, producing stronger instantaneous dipole–induced dipole (London dispersion) forces → higher boiling points.',
      topic: 'Group 7'
    },
    {
      id: 'mcq-t8-21',
      stem: 'Why is the F–F bond (bond enthalpy ~158 kJ mol⁻¹) anomalously weaker than the Cl–Cl bond (~243 kJ mol⁻¹)?',
      options: [
        'F has a smaller nuclear charge so it cannot form as strong a bond',
        'Intense lone-pair–lone-pair repulsion in the compact F₂ molecule weakens the bond',
        'Fluorine atoms are too electronegative to form a strong covalent bond between themselves',
        'F–F bonds are longer than Cl–Cl bonds so they are weaker'
      ],
      correctAnswer: 1,
      rationale: 'Both F atoms has three lone pairs at the compact 2-level. The crowded lone pairs on adjacent F atoms repel each other strongly, significantly reducing the bond strength — despite the smaller atomic size normally being associated with stronger bonds.',
      topic: 'Group 7'
    },

    // ── Subtopic 7: Halides & silver nitrate test ──────────────
    {
      id: 'mcq-t8-22',
      stem: 'When solid potassium iodide is treated with concentrated sulfuric acid, which products are observed?',
      options: [
        'HI gas only (colourless fumes)',
        'HI gas and purple/dark I₂ vapour together with SO₂, sulfur and H₂S',
        'Iodine only — no HI produced',
        'HI gas and white SO₃ fumes'
      ],
      correctAnswer: 1,
      rationale: 'I⁻ is a strong enough reducing agent to reduce S(+6) all the way to H₂S (S at −2), with intermediate SO₂ and S also formed. HI fumes, brown/purple I₂, yellow S solid, choking SO₂, and rotten-egg H₂S are all observed.',
      topic: 'Halide Tests'
    },
    {
      id: 'mcq-t8-23',
      stem: 'In the silver nitrate test for halide ions, dilute nitric acid is added first. Why?',
      options: [
        'To increase the solubility of the silver halide precipitate',
        'To remove interfering ions (CO₃²⁻, SO₃²⁻, OH⁻) that would produce false positives with Ag⁺',
        'To acidify the solution so AgNO₃ dissociates fully',
        'To convert all halide ions to their free halogen forms'
      ],
      correctAnswer: 1,
      rationale: 'Carbonate, sulfite, and hydroxide ions also form precipitates with Ag⁺. Dilute HNO₃ reacts with these interfering ions and removes them without reacting with halide ions.',
      topic: 'Halide Tests'
    },
    {
      id: 'mcq-t8-24',
      stem: 'Which silver halide precipitate is cream-coloured and insoluble in dilute ammonia but dissolves in concentrated ammonia?',
      options: ['AgCl', 'AgBr', 'AgI', 'AgF'],
      correctAnswer: 1,
      rationale: 'AgBr is a very pale cream precipitate. It is insoluble in dilute NH₃ but dissolves in concentrated NH₃ because the lower [Ag⁺] produced by the complex [Ag(NH₃)₂]⁺ eventually falls below the Ksp of AgBr.',
      topic: 'Halide Tests'
    },
    {
      id: 'mcq-t8-25',
      stem: 'HF is a weak acid in water, whereas HCl, HBr, and HI are all strong acids. The best explanation for this anomaly is:',
      options: [
        'The H–F bond is too strong to break in water',
        'F⁻ has a very low hydration enthalpy',
        'Ionisation of HF does occur, but the resulting F⁻ and H₃O⁺ stay tightly ion-paired, reducing the concentration of free H₃O⁺',
        'HF cannot form hydrogen bonds with water molecules'
      ],
      correctAnswer: 2,
      rationale: 'The ion-pair model: HF ionises readily, but F⁻ is so small and densely charged that it forms a stable H₃O⁺·F⁻ ion-pair; free H₃O⁺ ions are scarce → weak acid behaviour.',
      topic: 'HF Anomaly'
    },

    // ── Subtopic 8: Volumetric Analysis ───────────────────────
    {
      id: 'mcq-t8-26',
      stem: 'Which of the following is NOT a requirement for a substance to be used as a primary standard?',
      options: [
        'High purity (≥99.9%)',
        'Non-hygroscopic',
        'Low molar mass to reduce the amount needed',
        'Stable in air and does not decompose'
      ],
      correctAnswer: 2,
      rationale: 'A primary standard should have a HIGH molar mass (large Mr) to reduce the percentage error in weighing. Low molar mass would mean a small mass is needed, increasing relative weighing error.',
      topic: 'Volumetric Analysis'
    },
    {
      id: 'mcq-t8-27',
      stem: 'A burette has a single-reading uncertainty of ±0.05 cm³. A titre of 24.40 cm³ requires two readings. What is the percentage uncertainty in this titre?',
      options: ['0.21%', '0.41%', '0.10%', '0.82%'],
      correctAnswer: 1,
      rationale: 'Total uncertainty = 2 × 0.05 = 0.10 cm³. % uncertainty = (0.10 / 24.40) × 100 ≈ 0.41%.',
      topic: 'Volumetric Analysis'
    },

    // ── Subtopic 9–10: Period 3 Oxides ────────────────────────
    {
      id: 'mcq-t8-28',
      stem: 'Which Period 3 oxide has the highest melting point, and why?',
      options: [
        'Na₂O — it is the most ionic oxide',
        'MgO — exceptionally strong 2+/2− ionic lattice with a high charge density',
        'SiO₂ — giant covalent structure with many Si–O bonds',
        'Al₂O₃ — three-dimensional ionic lattice with Al³⁺'
      ],
      correctAnswer: 1,
      rationale: 'MgO has a melting point of ~2852°C (higher than even SiO₂ at ~1700°C and Al₂O₃ at ~2054°C) due to its extremely strong 2+/2− ionic lattice: compact Mg²⁺ and O²⁻ ions have very high charge density.',
      topic: 'Period 3 Oxides'
    },
    {
      id: 'mcq-t8-29',
      stem: 'Sulfur trioxide (SO₃) dissolves in water to form which acid?',
      options: ['Sulfurous acid (H₂SO₃)', 'Sulfuric acid (H₂SO₄)', 'Sulfamic acid (H₂NSO₃H)', 'Thiosulfuric acid (H₂S₂O₃)'],
      correctAnswer: 1,
      rationale: 'SO₃(g) + H₂O(l) → H₂SO₄(aq). This produces strongly acidic sulfuric acid.',
      topic: 'Period 3 Oxides'
    },
    {
      id: 'mcq-t8-30',
      stem: 'Al₂O₃ is described as amphoteric. Which pair of reactions correctly shows both its acidic and basic behaviour?',
      options: [
        'Reacts with HCl and with H₂O only',
        'Reacts with HCl (as a base) and with NaOH (as an acid)',
        'Reacts with NaOH (as a base) and with Na (as an acid)',
        'Dissolves in water on its own to give both H⁺ and OH⁻'
      ],
      correctAnswer: 1,
      rationale: 'As a base: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O. As an acid: Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄. This amphoteric nature distinguishes it from purely basic MgO and purely acidic SiO₂.',
      topic: 'Period 3 Oxides'
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // FILL-BLANK  (~15 questions)
  // ══════════════════════════════════════════════════════════════
  fillBlank: [
    {
      id: 'fb-t8-1',
      stem: 'Complete the sentence: In a redox reaction, the species that loses electrons is _____ and the species that gains electrons is _____.',
      template: 'In a redox reaction, the species that loses electrons is __BLANK__ and the species that gains electrons is __BLANK__.',
      blanks: [{ answer: 'oxidised' }, { answer: 'reduced' }],
      rationale: 'OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).',
    },
    {
      id: 'fb-t8-2',
      stem: 'State the oxidation number of chlorine in the chlorate(V) ion ClO₃⁻.',
      template: 'The oxidation number of Cl in ClO₃⁻ is __BLANK__.',
      blanks: [{ answer: '+5' }],
      rationale: 'Oxygen = −2 × 3 = −6. Total charge = −1. Cl + (−6) = −1, so Cl = +5.',
    },
    {
      id: 'fb-t8-3',
      stem: 'Fill in the blank: The step that balances oxygen atoms in the 4-step half-equation method is to add _____ to the side that is deficient in oxygen.',
      template: 'Add __BLANK__ to the oxygen-deficient side.',
      blanks: [{ answer: 'water' }],
      rationale: 'Step 2 of the method: balance O by adding H₂O molecules. Then balance the resulting H atoms with H⁺ in step 3.',
    },
    {
      id: 'fb-t8-4',
      stem: 'The general equation for Group 1 metals reacting with water is: 2X(s) + 2H₂O(l) → 2XOH(aq) + _____.',
      template: '2X(s) + 2H₂O(l) → 2XOH(aq) + __BLANK__.',
      blanks: [{ answer: 'H₂' }],
      rationale: 'Water is reduced by the Group 1 metal; hydrogen gas (H₂) is produced along with the metal hydroxide.',
    },
    {
      id: 'fb-t8-5',
      stem: 'Lithium is unique among the Group 1 metals because its carbonate undergoes _____ on heating, unlike the other Group 1 carbonates.',
      template: 'Li₂CO₃ undergoes _____ on heating.',
      blanks: [{ answer: 'thermal decomposition' }],
      rationale: 'Li₂CO₃ → Li₂O + CO₂. Other Group 1 carbonates are thermally stable. Li is anomalous due to its diagonal relationship with Mg.',
    },
    {
      id: 'fb-t8-6',
      stem: 'In the flame test for Group 2 metals, barium salts produce an _____ flame colour, while strontium salts produce a _____ flame colour.',
      template: 'Ba²⁺ = __BLANK__ flame; Sr²⁺ = __BLANK__ flame.',
      blanks: [{ answer: 'apple-green' }, { answer: 'crimson' }],
      rationale: 'Barium → apple-green (a distinctive green). Strontium → crimson-red (a deep red distinct from the brick-red of Ca²⁺).',
    },
    {
      id: 'fb-t8-7',
      stem: 'For testing the ammonium ion (NH₄⁺), warm NaOH solution is added. The gas produced turns damp red litmus paper _____.',
      template: 'NH₃ gas turns damp red litmus paper __BLANK__.',
      blanks: [{ answer: 'blue' }],
      rationale: 'NH₃ is alkaline. It dissolves in water on the moist litmus to give NH₄OH, raising pH — turning red litmus blue.',
    },
    {
      id: 'fb-t8-8',
      stem: 'Iodide ions are stronger reducing agents than chloride ions because the lattice enthalpy of sodium iodide is _____ than that of sodium chloride.',
      template: 'Lattice enthalpy of NaI is __BLANK__ than that of NaCl.',
      blanks: [{ answer: 'lower' }],
      rationale: 'Smaller lattice enthalpy means less energy is required to break the lattice and liberate the halide ions, making it easier to oxidise them → stronger reducing agent.',
    },
    {
      id: 'fb-t8-9',
      stem: 'In the silver nitrate test, a cream precipitate of AgBr that dissolves in concentrated ammonia but not dilute ammonia tells us the halide is _____.',
      template: 'The halide present is __BLANK__.',
      blanks: [{ answer: 'bromide' }],
      rationale: 'AgBr (cream): insoluble in dilute NH₃, dissolves in concentrated NH₃. This distinguishes Br⁻ from Cl⁻ (dissolves in dilute NH₃) and I⁻ (insoluble in any concentration).',
    },
    {
      id: 'fb-t8-10',
      stem: 'In preparing a standard solution, after pouring the dissolved solid into the volumetric flask, you must _____ the beaker and funnel with distilled water to ensure all solute is transferred.',
      template: 'You must __BLANK__ the beaker and funnel with distilled water.',
      blanks: [{ answer: 'rinse' }],
      rationale: 'Rinsing transfers any residual solute from the beaker into the flask, ensuring all dissolved material is included and the concentration is correct.',
    },
    {
      id: 'fb-t8-11',
      stem: 'Concordant titration results are typically those that agree within _____ cm³ of each other.',
      template: 'Concordant results agree within __BLANK__ cm³.',
      blanks: [{ answer: '0.10' }],
      rationale: 'Standard practice requires two (or more) repeat titres within 0.10 cm³ (or sometimes 0.20 cm³) to be considered concordant and used to calculate the mean titre.',
    },
    {
      id: 'fb-t8-12',
      stem: 'SiO₂ has a very high melting point (~1700°C) because it has a _____ covalent structure.',
      template: 'SiO₂ has a __BLANK__ covalent structure.',
      blanks: [{ answer: 'giant' }],
      rationale: 'SiO₂ is a giant 3D covalent network where every Si is bonded to 4 O atoms and every O bridges 2 Si atoms. Many strong Si–O bonds must be broken → very high melting point.',
    },
    {
      id: 'fb-t8-13',
      stem: 'Al(OH)₃ is described as _____ because it reacts with both acids and strong alkalis.',
      template: 'Al(OH)₃ is __BLANK__.',
      blanks: [{ answer: 'amphoteric' }],
      rationale: 'Amphoteric means a compound can act as both a base (react with acids) and an acid (react with alkalis). Al(OH)₃ does both.',
    },
    {
      id: 'fb-t8-14',
      stem: 'HF has an anomalously _____ boiling point compared to HCl, HBr, and HI because of exceptionally strong _____ between HF molecules.',
      template: 'HF has an anomalously __BLANK__ bp due to __BLANK__ bonds.',
      blanks: [{ answer: 'high' }, { answer: 'hydrogen' }],
      rationale: 'F is the most electronegative element; its concentrated lone pairs form very strong intermolecular hydrogen bonds. HF bp = 293 K, far higher than HCl (188 K).',
    },
    {
      id: 'fb-t8-15',
      stem: 'In the electrolysis of brine, chlorine is produced at the _____ (anode/cathode) and hydrogen is produced at the _____.',
      template: 'Cl₂ at the __BLANK__; H₂ at the __BLANK__.',
      blanks: [{ answer: 'anode' }, { answer: 'cathode' }],
      rationale: 'Oxidation occurs at the anode: 2Cl⁻ → Cl₂ + 2e⁻. Reduction occurs at the cathode: 2H⁺ + 2e⁻ → H₂.',
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // DRAG-DROP  (~10 questions)
  // ══════════════════════════════════════════════════════════════
  dragDrop: [
    {
      id: 'dd-t8-1',
      stem: 'Classify each half-equation as OXIDATION or REDUCTION.',
      categories: ['Oxidation (loss of e⁻)', 'Reduction (gain of e⁻)'],
      items: [
        { text: 'Fe²⁺ → Fe³⁺ + e⁻', category: 'Oxidation (loss of e⁻)' },
        { text: 'Cl₂ + 2e⁻ → 2Cl⁻', category: 'Reduction (gain of e⁻)' },
        { text: 'Zn → Zn²⁺ + 2e⁻', category: 'Oxidation (loss of e⁻)' },
        { text: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O', category: 'Reduction (gain of e⁻)' },
        { text: 'I₂ + 2e⁻ → 2I⁻', category: 'Reduction (gain of e⁻)' },
        { text: '2Br⁻ → Br₂ + 2e⁻', category: 'Oxidation (loss of e⁻)' },
      ],
    },
    {
      id: 'dd-t8-2',
      stem: 'Sort each species according to whether it is the OXIDISING AGENT or the REDUCING AGENT in the reaction described.',
      categories: ['Oxidising Agent', 'Reducing Agent'],
      items: [
        { text: 'Fe₂O₃ in: Fe₂O₃ + 3CO → 2Fe + 3CO₂', category: 'Oxidising Agent' },
        { text: 'CO in: Fe₂O₃ + 3CO → 2Fe + 3CO₂', category: 'Reducing Agent' },
        { text: 'Cl₂ in: Cl₂ + 2KBr → 2KCl + Br₂', category: 'Oxidising Agent' },
        { text: 'KBr in: Cl₂ + 2KBr → 2KCl + Br₂', category: 'Reducing Agent' },
        { text: 'Br₂ in: Br₂ + 2KI → 2KBr + I₂', category: 'Oxidising Agent' },
        { text: 'KI in: Br₂ + 2KI → 2KBr + I₂', category: 'Reducing Agent' },
      ],
    },
    {
      id: 'dd-t8-3',
      stem: 'Match each Group 1 or Group 2 metal cation to its FLAME TEST COLOUR.',
      categories: ['Red / Brick-red', 'Lilac / Mauve', 'Yellow / Orange', 'Apple-green'],
      items: [
        { text: 'Li⁺', category: 'Red / Brick-red' },
        { text: 'K⁺', category: 'Lilac / Mauve' },
        { text: 'Na⁺', category: 'Yellow / Orange' },
        { text: 'Ba²⁺', category: 'Apple-green' },
        { text: 'Ca²⁺', category: 'Red / Brick-red' },
      ],
    },
    {
      id: 'dd-t8-4',
      stem: 'Classify each property trend as INCREASING DOWN the group or DECREASING DOWN the group for Group 7 (halogens).',
      categories: ['Increases down Group 7', 'Decreases down Group 7'],
      items: [
        { text: 'Boiling point', category: 'Increases down Group 7' },
        { text: 'Electronegativity', category: 'Decreases down Group 7' },
        { text: 'Atomic radius', category: 'Increases down Group 7' },
        { text: 'Oxidising ability', category: 'Decreases down Group 7' },
        { text: 'Reducing ability of X⁻', category: 'Increases down Group 7' },
        { text: 'Reactivity of X₂ with metals', category: 'Decreases down Group 7' },
      ],
    },
    {
      id: 'dd-t8-5',
      stem: 'Assign each silver halide precipitate to its CORRECT COLOUR in the silver nitrate test.',
      categories: ['White', 'Very pale cream', 'Very pale yellow', 'No precipitate'],
      items: [
        { text: 'AgCl', category: 'White' },
        { text: 'AgBr', category: 'Very pale cream' },
        { text: 'AgI', category: 'Very pale yellow' },
        { text: 'AgF', category: 'No precipitate' },
      ],
    },
    {
      id: 'dd-t8-6',
      stem: 'Classify each of the following statements as either a MISTAKE or a SYSTEMATIC ERROR.',
      categories: ['Mistake', 'Systematic Error'],
      items: [
        { text: 'Spilling some solution when transferring into the conical flask', category: 'Mistake' },
        { text: 'Using a balance that consistently reads 0.02 g too high', category: 'Systematic Error' },
        { text: 'Misreading the burette scale (parallax error in one reading)', category: 'Mistake' },
        { text: 'A pipette that delivers 24.85 cm³ instead of 25.00 cm³ every time', category: 'Systematic Error' },
        { text: 'Adding indicator drops to the wrong flask by accident', category: 'Mistake' },
      ],
    },
    {
      id: 'dd-t8-7',
      stem: 'Classify each Period 3 oxide by its ACID–BASE CHARACTER.',
      categories: ['Basic', 'Amphoteric', 'Acidic'],
      items: [
        { text: 'Na₂O', category: 'Basic' },
        { text: 'MgO', category: 'Basic' },
        { text: 'Al₂O₃', category: 'Amphoteric' },
        { text: 'SiO₂', category: 'Acidic' },
        { text: 'P₄O₁₀', category: 'Acidic' },
        { text: 'SO₃', category: 'Acidic' },
      ],
    },
    {
      id: 'dd-t8-8',
      stem: 'Identify the STRUCTURE TYPE for each Period 3 oxide.',
      categories: ['Giant Ionic', 'Giant Covalent', 'Molecular (simple)'],
      items: [
        { text: 'Na₂O', category: 'Giant Ionic' },
        { text: 'MgO', category: 'Giant Ionic' },
        { text: 'SiO₂', category: 'Giant Covalent' },
        { text: 'SO₃', category: 'Molecular (simple)' },
        { text: 'P₄O₁₀', category: 'Molecular (simple)' },
        { text: 'Al₂O₃', category: 'Giant Ionic' },
      ],
    },
    {
      id: 'dd-t8-9',
      stem: 'Classify each reaction of a Group 2 compound as showing BASIC or AMPHOTERIC behaviour (for Al) or is an ACID reaction.',
      categories: ['Basic oxide / hydroxide', 'Amphoteric (acts as acid)', 'Acid reaction with base'],
      items: [
        { text: 'MgO + 2HCl → MgCl₂ + H₂O', category: 'Basic oxide / hydroxide' },
        { text: 'Al(OH)₃ + NaOH → NaAl(OH)₄', category: 'Amphoteric (acts as acid)' },
        { text: 'Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O', category: 'Basic oxide / hydroxide' },
        { text: 'Ca(OH)₂ + H₂SO₄ → CaSO₄ + 2H₂O', category: 'Basic oxide / hydroxide' },
        { text: 'Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄', category: 'Acid reaction with base' },
      ],
    },
    {
      id: 'dd-t8-10',
      stem: 'Classify each Period 3 hydroxide / oxyacid by its ACID STRENGTH in water.',
      categories: ['Strong base', 'Weak base / sparingly soluble', 'Weak acid', 'Strong acid'],
      items: [
        { text: 'NaOH', category: 'Strong base' },
        { text: 'Mg(OH)₂', category: 'Weak base / sparingly soluble' },
        { text: 'H₃PO₄', category: 'Weak acid' },
        { text: 'H₂SO₄', category: 'Strong acid' },
        { text: 'Si(OH)₄ (silicic acid)', category: 'Weak acid' },
        { text: 'HClO₄', category: 'Strong acid' },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // SEQUENCE  (~8 questions)
  // ══════════════════════════════════════════════════════════════
  sequence: [
    {
      id: 'seq-t8-1',
      stem: 'Place the 4 steps for writing a half-equation (in acid conditions) in the correct order.',
      steps: [
        'Balance all atoms except O and H',
        'Balance O atoms by adding H₂O',
        'Balance H atoms by adding H⁺',
        'Balance overall charge by adding e⁻',
      ],
    },
    {
      id: 'seq-t8-2',
      stem: 'Order the steps for carrying out a flame test correctly.',
      steps: [
        'Dip a clean nichrome wire into concentrated HCl',
        'Pick up a small sample of the solid with the moistened wire',
        'Hold the wire in the non-luminous (blue) part of the Bunsen flame',
        'Observe and record the characteristic flame colour',
      ],
    },
    {
      id: 'seq-t8-3',
      stem: 'Place the steps for making a standard solution from a solid into the correct order.',
      steps: [
        'Accurately weigh the required mass of solid',
        'Dissolve the solid in a beaker with a small amount of distilled water',
        'Transfer the solution via a funnel into a 250 cm³ volumetric flask, rinsing the beaker',
        'Make the volume up to the graduation mark with distilled water, stopper and invert',
      ],
    },
    {
      id: 'seq-t8-4',
      stem: 'Arrange the halogens in order of INCREASING boiling point (lowest first).',
      steps: [
        'F₂ (−188°C)',
        'Cl₂ (−34°C)',
        'Br₂ (+59°C)',
        'I₂ (+184°C)',
      ],
    },
    {
      id: 'seq-t8-5',
      stem: 'Order the following Group 1 elements from LEAST reactive to MOST reactive with water.',
      steps: [
        'Lithium (Li) — reacts slowly, floats and fizzes gently',
        'Sodium (Na) — floats, moves rapidly, may briefly ignite',
        'Potassium (K) — hydrogen ignites, burns with lilac flame',
        'Caesium (Cs) — explosive reaction on contact with water',
      ],
    },
    {
      id: 'seq-t8-6',
      stem: 'Arrange the Period 3 elements in order of their highest oxide\'s acid–base character from MOST BASIC to MOST ACIDIC.',
      steps: [
        'Na₂O (strongly basic)',
        'MgO (basic)',
        'Al₂O₃ (amphoteric)',
        'SiO₂ (weakly acidic)',
        'P₄O₁₀ (acidic)',
        'SO₃ / Cl₂O₇ (strongly acidic)',
      ],
    },
    {
      id: 'seq-t8-7',
      stem: 'Place the stages in electrolysis of brine (membrane cell) in the correct order.',
      steps: [
        'Pure saturated brine pumped into the anode compartment',
        'Cl₂ produced at the titanium anode by oxidation of Cl⁻',
        'Na⁺ ions migrate through the ion-exchange membrane to the cathode side',
        'H₂ produced at the nickel cathode by reduction of H₂O / H⁺; NaOH builds up',
      ],
    },
    {
      id: 'seq-t8-8',
      stem: 'Arrange these steps for carrying out a titration in the correct experimental order.',
      steps: [
        'Pipette exactly 25.0 cm³ of analyte into a conical flask, add 2–3 drops of indicator',
        'Perform a rough titre to find the approximate end-point',
        'Perform accurate titrations, adding titrant drop-wise near the end-point',
        'Record concordant titres and calculate the mean titre',
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // KEYWORD  (~12 questions)
  // ══════════════════════════════════════════════════════════════
  keyword: [
    {
      id: 'kw-t8-1',
      stem: 'Define "oxidising agent" in terms of electron transfer. [2 marks]',
      marks: 2,
      keywords: ['electron', 'accepts', 'gains', 'reduced'],
      modelAnswer: 'An oxidising agent accepts (gains) electrons from another species. In doing so, the oxidising agent is itself reduced.',
    },
    {
      id: 'kw-t8-2',
      stem: 'Explain what is meant by "disproportionation". Give an example. [3 marks]',
      marks: 3,
      keywords: ['oxidised', 'reduced', 'same element', 'simultaneously'],
      modelAnswer: 'Disproportionation is a reaction in which the same element is simultaneously oxidised and reduced. Example: Cl₂ + H₂O → HCl + HClO — chlorine is both oxidised (0 → +1 in HClO) and reduced (0 → −1 in HCl).',
    },
    {
      id: 'kw-t8-3',
      stem: 'State two rules used to assign oxidation numbers and give an example of each. [4 marks]',
      marks: 4,
      keywords: ['uncombined', 'zero', 'sum', 'charge', 'hydrogen', 'oxygen'],
      modelAnswer: 'Rule 1: Uncombined elements have oxidation number 0 (e.g. O₂, each O = 0). Rule 2: The sum of oxidation numbers in a neutral compound equals 0 (e.g. in H₂O: 2(+1) + (−2) = 0). Rule 3 (accept): Oxygen is usually −2; hydrogen is usually +1.',
    },
    {
      id: 'kw-t8-4',
      stem: 'Explain why the reactivity of Group 1 metals with water increases down the group. [3 marks]',
      marks: 3,
      keywords: ['atomic radius', 'shielding', 'ionisation energy', 'electron', 'easier'],
      modelAnswer: 'Down the group, atomic radius increases and there is greater electron shielding. The outer s-electron is further from the nucleus and more effectively shielded, so the first ionisation energy decreases. It becomes progressively easier to lose the outer electron → greater reactivity.',
    },
    {
      id: 'kw-t8-5',
      stem: 'Explain why Ba(OH)₂ is more soluble in water than Mg(OH)₂. [3 marks]',
      marks: 3,
      keywords: ['lattice', 'enthalpy', 'hydration', 'ionic radius', 'soluble'],
      modelAnswer: 'Down Group 2, the lattice enthalpy of the hydroxide decreases (larger ion → weaker ionic attractions). The hydration enthalpy of M²⁺ also decreases but falls less steeply. The net change (decrease in lattice enthalpy outweighs decrease in hydration enthalpy) becomes more exothermic → greater solubility for Ba(OH)₂ compared to Mg(OH)₂.',
    },
    {
      id: 'kw-t8-6',
      stem: 'Describe the flame test colours for Na⁺, K⁺, Ca²⁺, and Ba²⁺. [2 marks]',
      marks: 2,
      keywords: ['yellow', 'lilac', 'brick-red', 'green'],
      modelAnswer: 'Na⁺ = yellow/orange; K⁺ = lilac; Ca²⁺ = brick-red; Ba²⁺ = apple-green.',
    },
    {
      id: 'kw-t8-7',
      stem: 'Explain why iodide ions (I⁻) are better reducing agents than chloride ions (Cl⁻). [3 marks]',
      marks: 3,
      keywords: ['lattice', 'enthalpy', 'electron', 'easier', 'oxidised', 'reducing'],
      modelAnswer: 'Iodide ions have a lower lattice enthalpy than chloride ions (larger ion → weaker ionic interactions). Less energy is needed to liberate I⁻ from its ionic lattice. The I⁻ ion has a larger atomic radius and it is easier to remove the extra electron from a larger, more polarisable ion → I⁻ is more readily oxidised → stronger reducing agent.',
    },
    {
      id: 'kw-t8-8',
      stem: 'Describe the procedure for using silver nitrate solution to test for halide ions in solution. Include one safety precaution. [4 marks]',
      marks: 4,
      keywords: ['nitric acid', 'silver nitrate', 'precipitate', 'ammonia', 'safety'],
      modelAnswer: 'Acidify the solution with dilute nitric acid (to remove interfering ions). Add aqueous silver nitrate solution — observe colour of any precipitate (white = Cl⁻, cream = Br⁻, yellow = I⁻). Confirm by adding dilute then concentrated NH₃ (AgCl dissolves in dilute; AgBr in concentrated; AgI insoluble). Safety: wear eye protection / avoid skin contact with AgNO₃ (stains skin black).',
    },
    {
      id: 'kw-t8-9',
      stem: 'Explain why HF is a weak acid while HCl is a strong acid. [3 marks]',
      marks: 3,
      keywords: ['ion pair', 'F⁻', 'H₃O⁺', 'associated', 'small', 'charge density'],
      modelAnswer: 'HF does ionise in water, but F⁻ is so small and densely charged that it remains tightly ion-paired with H₃O⁺. The equilibrium H₃O⁺·F⁻ ⇌ H₃O⁺(free) + F⁻(free) lies to the left. Few free H₃O⁺ ions are released → pH is higher than expected → HF behaves as a weak acid.',
    },
    {
      id: 'kw-t8-10',
      stem: 'State what is meant by a "primary standard" and give two examples of chemicals that are suitable primary standards. [3 marks]',
      marks: 3,
      keywords: ['pure', 'stable', 'soluble', 'non-hygroscopic', 'molar mass', 'Na₂CO₃', 'KHP'],
      modelAnswer: 'A primary standard is a substance of reliably known purity that can be used to prepare a standard solution directly. It must be: highly pure, stable in air, soluble in water, have a high molar mass, and be non-hygroscopic. Examples: sodium carbonate (Na₂CO₃), potassium hydrogen phthalate (KHP).',
    },
    {
      id: 'kw-t8-11',
      stem: 'Explain why the melting point of Period 3 oxides generally increases from Na₂O to SiO₂ and then decreases sharply for P₄O₁₀ to Cl₂O₇. [4 marks]',
      marks: 4,
      keywords: ['ionic', 'lattice', 'covalent', 'molecular', 'van der Waals', 'giant'],
      modelAnswer: 'Na₂O, MgO, Al₂O₃ are giant ionic lattices with strong electrostatic attractions — high melting points increasing with ionic charge (Na⁺ < Mg²⁺ < Al³⁺). SiO₂ is a giant covalent network — all strong Si–O bonds must be broken → very high melting point. P₄O₁₀, SO₃, Cl₂O₇ are simple molecular oxides — only weak van der Waals forces between small molecules must be overcome → low melting/boiling points.',
    },
    {
      id: 'kw-t8-12',
      stem: 'Explain why Al(OH)₃ is amphoteric, whereas NaOH and Mg(OH)₂ are only basic. [3 marks]',
      marks: 3,
      keywords: ['amphoteric', 'acid', 'base', 'covalent', 'Al³⁺', 'electronegativity'],
      modelAnswer: 'NaOH and Mg(OH)₂ contain fully ionic OH⁻ with no tendency to accept OH⁻ from an alkali. Al³⁺ is a borderline ion of high electronegativity; its Al–O bonds have significant covalent character. Al can act as a Lewis acid (accept OH⁻) and form Al(OH)₄⁻ in alkali, or donate OH⁻ to act as a base in acid. This dual behaviour makes Al(OH)₃ amphoteric.',
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // FLASHCARDS  (~25 questions)
  // ══════════════════════════════════════════════════════════════
  flashcards: [
    {
      id: 'fc-t8-1',
      front: 'What does OIL RIG stand for?',
      back: 'Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).',
      topic: 'Redox Basics',
    },
    {
      id: 'fc-t8-2',
      front: 'State the three definitions of oxidation.',
      back: '1. Gain of oxygen\n2. Loss of hydrogen\n3. Loss of electrons',
      topic: 'Redox Basics',
    },
    {
      id: 'fc-t8-3',
      front: 'What is the oxidation number of oxygen in a peroxide (e.g. H₂O₂)?',
      back: '−1 (not the usual −2). The O–O bond in peroxides means each oxygen shares the "extra" electron differently.',
      topic: 'Oxidation Numbers',
    },
    {
      id: 'fc-t8-4',
      front: 'What is the oxidation number of hydrogen in sodium hydride (NaH)?',
      back: '−1 (exception to the usual +1 rule). In metal hydrides, hydrogen accepts the electron from the metal → H⁻.',
      topic: 'Oxidation Numbers',
    },
    {
      id: 'fc-t8-5',
      front: 'Write the 4-step method for writing a half-equation in acid conditions.',
      back: '1. Balance all atoms except O and H\n2. Add H₂O to balance O\n3. Add H⁺ to balance H\n4. Add e⁻ to balance charge',
      topic: 'Half-Equations',
    },
    {
      id: 'fc-t8-6',
      front: 'Define disproportionation.',
      back: 'A reaction in which the same element is simultaneously oxidised (oxidation number increases) and reduced (oxidation number decreases).',
      topic: 'Half-Equations',
    },
    {
      id: 'fc-t8-7',
      front: 'What is produced when any Group 1 metal reacts with water?',
      back: 'The metal hydroxide (MOH(aq)) and hydrogen gas (H₂(g)).\nGeneral equation: 2X + 2H₂O → 2XOH + H₂',
      topic: 'Group 1',
    },
    {
      id: 'fc-t8-8',
      front: 'How does reactivity of Group 1 metals change down the group, and why?',
      back: 'Reactivity increases down the group. Atomic radius increases and shielding increases → first ionisation energy decreases → the outer s-electron is progressively easier to lose.',
      topic: 'Group 1',
    },
    {
      id: 'fc-t8-9',
      front: 'State the unique behaviour of lithium compared to the rest of Group 1.',
      back: '• Li₂CO₃ decomposes on heating (others do not)\n• Li reacts with N₂ to form Li₃N\n• Li forms only Li₂O (not peroxide/superoxide)\n• Diagonal relationship with Mg',
      topic: 'Group 1',
    },
    {
      id: 'fc-t8-10',
      front: 'State the trend in solubility of Group 2 hydroxides down the group.',
      back: 'Solubility increases down the group: Be(OH)₂ and Mg(OH)₂ are insoluble/sparingly soluble; Ca(OH)₂ slightly soluble (limewater); Ba(OH)₂ soluble (strongly alkaline solution).',
      topic: 'Group 2',
    },
    {
      id: 'fc-t8-11',
      front: 'Why do Group 2 metals (and not Group 1) react with nitrogen on heating?',
      back: 'Group 2 form M²⁺ + N³⁻ → M₃N₂. The high lattice energy (from the higher charge ions) compensates for the energy cost of ionisation. Group 1 ions (M⁺) give insufficient lattice energy (except Li⁺ which is anomalous).',
      topic: 'Group 2',
    },
    {
      id: 'fc-t8-12',
      front: 'State the flame test colours for Li⁺, Na⁺, K⁺, Ca²⁺, Sr²⁺, and Ba²⁺.',
      back: 'Li⁺ = red\nNa⁺ = yellow/orange\nK⁺ = lilac\nCa²⁺ = brick-red\nSr²⁺ = crimson-red\nBa²⁺ = apple-green',
      topic: 'Flame Tests',
    },
    {
      id: 'fc-t8-13',
      front: 'Describe the test for NH₄⁺ ions.',
      back: 'Add warm NaOH(aq): NH₄⁺ + OH⁻ → NH₃ + H₂O. The NH₃ gas produced turns damp red litmus paper blue.',
      topic: 'Flame Tests',
    },
    {
      id: 'fc-t8-14',
      front: 'State the trend in oxidising ability across the halogens and explain it briefly.',
      back: 'Oxidising ability decreases: F₂ ≫ Cl₂ > Br₂ > I₂. Larger atoms have lower effective nuclear charge attraction for an incoming electron; hydration enthalpy of X⁻ also decreases. The overall energy released from ½X₂ → X⁻(aq) decreases down the group.',
      topic: 'Group 7',
    },
    {
      id: 'fc-t8-15',
      front: 'Why is the F–F bond anomalously weak compared to Cl–Cl?',
      back: 'Each F atom has 3 lone pairs in the compact 2-level. In F₂, the 6 lone pairs are very close together and repel each other strongly, significantly weakening the F–F bond (~158 kJ mol⁻¹ vs ~243 kJ mol⁻¹ for Cl–Cl).',
      topic: 'Group 7',
    },
    {
      id: 'fc-t8-16',
      front: 'What products form when solid NaCl and concentrated H₂SO₄ react, and what about NaI + conc. H₂SO₄?',
      back: 'NaCl + H₂SO₄: only HCl(g) (steamy fumes). No redox — Cl⁻ cannot reduce H₂SO₄.\nNaI + H₂SO₄: HI(g) + I₂ + SO₂ + S + H₂S — I⁻ reduces S all the way from +6 to −2.',
      topic: 'Halide Tests',
    },
    {
      id: 'fc-t8-17',
      front: 'Why must HBr and HI be prepared using H₃PO₄ rather than H₂SO₄?',
      back: 'H₂SO₄ is a strong enough oxidising agent to oxidise Br⁻ and I⁻, producing Br₂ and I₂ instead of the desired HBr/HI gas. H₃PO₄ is a non-oxidising acid that protonates all four halide ions cleanly.',
      topic: 'Halide Tests',
    },
    {
      id: 'fc-t8-18',
      front: 'In the silver nitrate test, how do you distinguish AgCl from AgBr from AgI using ammonia?',
      back: 'AgCl (white): dissolves in dilute NH₃\nAgBr (cream): insoluble in dilute NH₃; dissolves in concentrated NH₃\nAgI (yellow): insoluble in both dilute and concentrated NH₃',
      topic: 'Halide Tests',
    },
    {
      id: 'fc-t8-19',
      front: 'Why is HF a weak acid but HCl a strong acid?',
      back: 'Ion-pair model: HF ionises to give H₃O⁺ and F⁻, but these remain tightly paired as H₃O⁺·F⁻ (F⁻ is very small and high charge density). Few free H₃O⁺ ions → weak acid. HCl ion pairs do not associate — free H₃O⁺ → strong acid.',
      topic: 'HF Anomaly',
    },
    {
      id: 'fc-t8-20',
      front: 'State 4 requirements for a primary standard.',
      back: '1. High purity (≥ 99.9%)\n2. Non-hygroscopic\n3. Chemically stable (does not decompose or react with air)\n4. High molar mass (to reduce weighing error)\n5. Soluble in water',
      topic: 'Volumetric Analysis',
    },
    {
      id: 'fc-t8-21',
      front: 'Distinguish between accuracy and precision in experimental measurements.',
      back: 'Accuracy: how close a measurement is to the true / accepted value.\nPrecision: how close repeated measurements are to each other (reproducibility), regardless of whether they are accurate.',
      topic: 'Volumetric Analysis',
    },
    {
      id: 'fc-t8-22',
      front: 'Why must the conical flask be rinsed ONLY with distilled water, not with the analyte?',
      back: 'Rinsing with analyte adds extra, unmeasured moles to the flask. This would make the calculated concentration of the titrant incorrectly high or low. Rinsing with distilled water does not affect the number of moles of analyte since you are adding a fixed volume from the pipette.',
      topic: 'Volumetric Analysis',
    },
    {
      id: 'fc-t8-23',
      front: 'State the acid–base trend of the highest Period 3 oxides from Na to Cl.',
      back: 'Na₂O (strongly basic) → MgO (basic) → Al₂O₃ (amphoteric) → SiO₂ (weakly acidic) → P₄O₁₀ (acidic) → SO₃ (strongly acidic) → Cl₂O₇ (very strongly acidic)',
      topic: 'Period 3 Oxides',
    },
    {
      id: 'fc-t8-24',
      front: 'What are the products of the reaction of SO₃ with water, and what is the oxide\'s character?',
      back: 'SO₃(g) + H₂O(l) → H₂SO₄(aq). SO₃ is an acidic oxide — it dissolves in water to produce strongly acidic sulfuric acid.',
      topic: 'Period 3 Oxides',
    },
    {
      id: 'fc-t8-25',
      front: 'What is the reaction of Al(OH)₃ with (a) HCl and (b) NaOH?',
      back: '(a) Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (Al(OH)₃ acts as a base)\n(b) Al(OH)₃ + NaOH → NaAl(OH)₄ (Al(OH)₃ acts as an acid — amphoteric behaviour)',
      topic: 'Period 3 Hydroxides',
    },
    {
      id: 'fc-t8-26',
      front: 'Why does acid strength of the Period 3 oxyacids increase from H₃PO₄ to H₂SO₄ to HClO₄?',
      back: 'More P=O (or S=O, Cl=O) bonds → greater delocalisation of negative charge in the conjugate anion → the anion is more stable → proton more readily donated → stronger acid. HClO₃ has 3 Cl=O bonds and is a very strong acid.',
      topic: 'Period 3 Hydroxides',
    },
    {
      id: 'fc-t8-27',
      front: 'What are the three products of the industrial electrolysis of brine?',
      back: '1. Chlorine gas (Cl₂) — at the anode\n2. Hydrogen gas (H₂) — at the cathode\n3. Sodium hydroxide solution (NaOH) — builds up in the cathode compartment',
      topic: 'Chlorine Manufacture',
    },
  ],
};
