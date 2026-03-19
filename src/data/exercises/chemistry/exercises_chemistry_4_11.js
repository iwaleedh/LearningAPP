/**
 * Exercises: Chemistry · Unit 4 (WCH14) · Topic 11
 * "Kinetics"
 * Subtopics 0–8: rate equations and order, half-life analysis,
 * experimental methods, initial-rate / clock reactions, deducing order from data,
 * rate constants and units, mechanisms and RDS, Arrhenius equation,
 * Core Practicals 9a / 9b / 10.
 */
export const exercises_chemistry_4_11 = {

  // ══════════════════════════════════════════════════════════════
  // MCQ  (~30 questions)
  // ══════════════════════════════════════════════════════════════
  mcq: [
    // ── Subtopic 0: Rate equations and order ──────────────────
    {
      id: 'mcq-t11-1',
      stem: 'The rate equation for a reaction is Rate = k[A]²[B]. What are the units of k when concentrations are measured in mol dm⁻³ and time in seconds?',
      options: [
        'mol⁻² dm⁶ s⁻¹',
        'mol⁻¹ dm³ s⁻¹',
        'dm⁶ mol⁻² s⁻¹',
        'mol dm⁻³ s⁻¹'
      ],
      correctAnswer: 2,
      rationale: 'Overall order = 3. Units of k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = dm⁶ mol⁻² s⁻¹. Option A uses incorrect notation order; option B is for second order; option D is for zero order.',
      topic: 'Rate equations and order'
    },
    {
      id: 'mcq-t11-2',
      stem: 'In an experiment, tripling the concentration of reactant X leaves the rate unchanged. What is the order of reaction with respect to X?',
      options: ['Zero order', 'First order', 'Second order', 'Third order'],
      correctAnswer: 0,
      rationale: 'Zero order: rate = k[X]⁰ = k. Changing [X] has no effect on rate. First order would triple the rate; second order would give ×9; third order ×27.',
      topic: 'Rate equations and order'
    },
    {
      id: 'mcq-t11-3',
      stem: 'A rate equation is determined to be Rate = k[P][Q]². When [P] is doubled and [Q] is halved, the rate will:',
      options: [
        'Stay the same',
        'Double',
        'Halve',
        'Be quartered'
      ],
      correctAnswer: 2,
      rationale: 'New rate = k(2[P])([Q]/2)² = k × 2[P] × [Q]²/4 = k[P][Q]²/2. The rate halves. Doubling [P] gives ×2 but halving [Q] gives ×(1/4), net factor = 2 × 1/4 = 1/2.',
      topic: 'Rate equations and order'
    },
    {
      id: 'mcq-t11-4',
      stem: 'Which of the following statements about the rate constant k is correct?',
      options: [
        'k increases when the concentration of reactants increases',
        'k decreases when a catalyst is added',
        'k only changes when the temperature or catalyst is changed',
        'k has the same units for all reaction orders'
      ],
      correctAnswer: 2,
      rationale: 'k is independent of concentration but changes with temperature (Arrhenius) and when a catalyst is added (lowers Eₐ, increases k). Concentration does not alter k. Units of k depend on overall order.',
      topic: 'Rate equations and order'
    },
    {
      id: 'mcq-t11-5',
      stem: 'On a graph of rate against concentration [A], a second-order reaction would produce which shape?',
      options: [
        'A horizontal straight line',
        'A straight line through the origin',
        'An upward-curving parabola through the origin',
        'A downward exponential curve'
      ],
      correctAnswer: 2,
      rationale: 'Rate ∝ [A]² gives a parabolic curve through the origin. A horizontal line = zero order; straight line through origin = first order; downward exponential is a concentration-time graph, not rate vs concentration.',
      topic: 'Rate equations and order'
    },
    {
      id: 'mcq-t11-6',
      stem: 'In a kinetics experiment, the following data were obtained:\nExp 1: [A] = 0.10 mol dm⁻³, rate = 2.0 × 10⁻³ mol dm⁻³ s⁻¹\nExp 2: [A] = 0.20 mol dm⁻³, rate = 8.0 × 10⁻³ mol dm⁻³ s⁻¹\nWhat is the order of reaction with respect to A?',
      options: ['Zero order', 'First order', 'Second order', 'Third order'],
      correctAnswer: 2,
      rationale: '[A] doubles → rate increases by factor 4 (= 2²). This is second order. First order would give factor 2; zero order factor 1; third order factor 8.',
      topic: 'Rate equations and order'
    },

    // ── Subtopic 1: Half-life analysis ────────────────────────
    {
      id: 'mcq-t11-7',
      stem: 'For a first-order reaction with a half-life of 150 s, what is the rate constant k?',
      options: [
        '1.50 × 10⁻² s⁻¹',
        '4.62 × 10⁻³ s⁻¹',
        '2.16 × 10⁻³ s⁻¹',
        '0.693 s⁻¹'
      ],
      correctAnswer: 1,
      rationale: 'k = ln(2)/t½ = 0.693/150 = 4.62 × 10⁻³ s⁻¹. This formula only applies to first-order reactions. 0.693 s⁻¹ would require t½ = 1 s; other distractors use incorrect calculations.',
      topic: 'Half-life analysis'
    },
    {
      id: 'mcq-t11-8',
      stem: 'A concentration-time graph shows measured half-lives of 40 s, 40 s, and 41 s at successive intervals. What can be concluded?',
      options: [
        'The reaction is zero order',
        'The reaction is first order',
        'The reaction is second order',
        'The order cannot be determined from this data'
      ],
      correctAnswer: 1,
      rationale: 'A constant half-life is the hallmark of a first-order reaction. Zero order has decreasing t½; second order has increasing t½. Two or more consistent half-lives confirm first order.',
      topic: 'Half-life analysis'
    },
    {
      id: 'mcq-t11-9',
      stem: 'How does the half-life of a zero-order reaction change as the reaction proceeds?',
      options: [
        'It remains constant throughout',
        'It increases as concentration decreases',
        'It decreases as concentration decreases',
        'It is undefined for zero-order reactions'
      ],
      correctAnswer: 2,
      rationale: 'For zero order, t½ = [A]₀ / 2k — proportional to concentration. As [A] falls, t½ decreases. First order has constant t½; second order has increasing t½.',
      topic: 'Half-life analysis'
    },

    // ── Subtopic 2: Experimental methods ──────────────────────
    {
      id: 'mcq-t11-10',
      stem: 'Which experimental technique is most appropriate for monitoring the rate of a reaction that produces a coloured product?',
      options: [
        'Measuring gas volume with a gas syringe',
        'Colorimetry using a calibration curve',
        'Measuring mass loss on a balance',
        'Quenching and titrating samples at intervals'
      ],
      correctAnswer: 1,
      rationale: 'Colorimetry measures absorbance which links to concentration of a coloured species via a calibration curve. Gas syringe requires gas production; mass loss requires gas escape; quenching/titration is for non-coloured reactants.',
      topic: 'Rate-data experimental methods'
    },
    {
      id: 'mcq-t11-11',
      stem: 'In a quenching experiment, a 10 cm³ sample is removed and placed in ice-cold water. What is the primary purpose of the ice-cold water?',
      options: [
        'To allow the titration to proceed accurately',
        'To dilute the sample so it does not corrode the burette',
        'To stop the reaction by lowering temperature and diluting the mixture',
        'To provide a solvent for the indicator'
      ],
      correctAnswer: 2,
      rationale: 'Ice-cold water both cools the sample (reducing k dramatically) and dilutes it, effectively stopping the reaction so the concentration at that moment is preserved for analysis.',
      topic: 'Rate-data experimental methods'
    },
    {
      id: 'mcq-t11-12',
      stem: 'Why is a mass-loss method (top-pan balance) unsuitable for monitoring a reaction that produces hydrogen gas?',
      options: [
        'Hydrogen is too reactive to measure safely',
        'The balance cannot detect small changes in mass',
        'Hydrogen has very low molar mass so mass loss is negligibly small',
        'Hydrogen dissolves in the reaction mixture'
      ],
      correctAnswer: 2,
      rationale: 'H₂ has molar mass 2 g mol⁻¹. Even millimoles produced give milligrams of mass loss — below the precision of most balances. CO₂ (44 g mol⁻¹) is the gas suited for mass-loss methods.',
      topic: 'Rate-data experimental methods'
    },

    // ── Subtopic 3: Initial-rate and clock reactions ───────────
    {
      id: 'mcq-t11-13',
      stem: 'In the thiosulfate–HCl clock reaction, what is used as the visual endpoint?',
      options: [
        'The solution turning blue-black with starch',
        'A cross drawn on paper becoming invisible through the flask',
        'The solution becoming colourless',
        'A precipitate turning from white to yellow'
      ],
      correctAnswer: 1,
      rationale: 'Sulfur precipitate (S) forms in the reaction mixture, making it opaque. The time measured is until the cross marked on paper beneath the flask can no longer be seen. Starch turning blue-black is for iodine clock.',
      topic: 'Initial-rate and clock reactions'
    },
    {
      id: 'mcq-t11-14',
      stem: 'In the iodine clock experiment, the solution suddenly turns blue-black. What event triggers this change?',
      options: [
        'The iodide ions are completely consumed',
        'All the thiosulfate ions are consumed and free I₂ accumulates',
        'The hydrogen peroxide concentration exceeds a threshold',
        'The starch is consumed and releases iodine'
      ],
      correctAnswer: 1,
      rationale: 'While thiosulfate (S₂O₃²⁻) is present, any I₂ formed is immediately reduced back to I⁻. Once all S₂O₃²⁻ is consumed, I₂ accumulates and reacts with starch to produce the sudden blue-black colour.',
      topic: 'Initial-rate and clock reactions'
    },
    {
      id: 'mcq-t11-15',
      stem: 'Why must the initial-rate method use the rate measured at t = 0?',
      options: [
        'The reaction is fastest at t = 0 so it is easier to measure',
        'Concentrations are exactly the prepared values, so orders can be reliably compared',
        'Temperature is always lowest at t = 0',
        'The rate constant k is larger at t = 0'
      ],
      correctAnswer: 1,
      rationale: 'At t = 0 the concentrations are precisely known (the prepared values). As reaction proceeds, concentrations change and are unknown. k does not change with time; temperature is controlled throughout.',
      topic: 'Initial-rate and clock reactions'
    },

    // ── Subtopic 4: Deducing order from data ──────────────────
    {
      id: 'mcq-t11-16',
      stem: 'In a series of experiments, [B] is kept constant while [A] is tripled. The rate increases by a factor of 9. What is the order with respect to A?',
      options: ['Zero', 'First', 'Second', 'Third'],
      correctAnswer: 2,
      rationale: '[A] ×3 → rate ×9 = 3². Order = 2 (second). For first order, rate would increase ×3; for zero order ×1; for third order ×27.',
      topic: 'Deducing order from data'
    },
    {
      id: 'mcq-t11-17',
      stem: 'Two experiments give: Exp A: [X]=0.10, [Y]=0.10, rate=5.0×10⁻⁴; Exp B: [X]=0.10, [Y]=0.30, rate=5.0×10⁻⁴ (all mol dm⁻³ s⁻¹). What is the order with respect to Y?',
      options: ['Zero', 'First', 'Second', 'Cannot be determined'],
      correctAnswer: 0,
      rationale: '[Y] triples but rate is unchanged → zero order with respect to Y. For any non-zero order the rate would have changed when [Y] changed (keeping [X] constant).',
      topic: 'Deducing order from data'
    },
    {
      id: 'mcq-t11-18',
      stem: 'What is the correct approach when no pair of experiments in a data table has exactly one concentration held constant?',
      options: [
        'Ignore the data and add more experiments',
        'Calculate the rate change expected from one reactant, then attribute the remaining change to the other',
        'Assume all orders are first order',
        'Use the average of all rate values'
      ],
      correctAnswer: 1,
      rationale: 'When two concentrations change simultaneously, you calculate what factor one reactant would cause (using a trial order), then attribute the residual factor change to the other reactant to find its order.',
      topic: 'Deducing order from data'
    },

    // ── Subtopic 5: Rate constants and units ──────────────────
    {
      id: 'mcq-t11-19',
      stem: 'A reaction is first order overall. What are the units of k?',
      options: ['mol dm⁻³ s⁻¹', 's⁻¹', 'dm³ mol⁻¹ s⁻¹', 'dm⁶ mol⁻² s⁻¹'],
      correctAnswer: 1,
      rationale: 'For first order: k = rate/[A] = (mol dm⁻³ s⁻¹)/(mol dm⁻³) = s⁻¹. Zero order k has units mol dm⁻³ s⁻¹; second order dm³ mol⁻¹ s⁻¹; third order dm⁶ mol⁻² s⁻¹.',
      topic: 'Rate constants and units'
    },
    {
      id: 'mcq-t11-20',
      stem: 'Given rate = k[A][B]² with rate = 4.0 × 10⁻² mol dm⁻³ s⁻¹, [A] = 0.10 mol dm⁻³, [B] = 0.20 mol dm⁻³, what is k?',
      options: [
        '10 dm⁶ mol⁻² s⁻¹',
        '1.0 × 10³ dm³ mol⁻¹ s⁻¹',
        '100 dm³ mol⁻¹ s⁻¹',
        '10 dm³ mol⁻¹ s⁻¹'
      ],
      correctAnswer: 0,
      rationale: 'k = rate / ([A][B]²) = (4.0 × 10⁻²) / (0.10 × 0.04) = (4.0 × 10⁻²) / (4.0 × 10⁻³) = 10. Units: (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = dm⁶ mol⁻² s⁻¹.',
      topic: 'Rate constants and units'
    },

    // ── Subtopic 6: Mechanisms and RDS ────────────────────────
    {
      id: 'mcq-t11-21',
      stem: 'The rate equation for a reaction is Rate = k[R-Br]. Which mechanism is consistent with this rate equation for a halogenoalkane hydrolysis?',
      options: [
        'SN2 — simultaneous bond breaking and forming in a single step',
        'SN1 — slow ionisation of C–Br bond followed by fast attack of OH⁻',
        'SN2 — OH⁻ attacks before C–Br breaks',
        'SN1 — fast ionisation followed by slow attack of OH⁻'
      ],
      correctAnswer: 1,
      rationale: 'SN1: the RDS is unimolecular ionisation of C–Br to give a carbocation. OH⁻ is not involved in or before the RDS so it does not appear in the rate equation. Rate = k[R-Br]. SN2 would give Rate = k[R-Br][OH⁻].',
      topic: 'Rate equations and mechanisms'
    },
    {
      id: 'mcq-t11-22',
      stem: 'A proposed mechanism has two steps:\nStep 1 (slow): 2NO → N₂O₂\nStep 2 (fast): N₂O₂ + O₂ → 2NO₂\nWhat rate equation does this mechanism predict?',
      options: [
        'Rate = k[NO][O₂]',
        'Rate = k[NO]²',
        'Rate = k[NO]²[O₂]',
        'Rate = k[N₂O₂][O₂]'
      ],
      correctAnswer: 1,
      rationale: 'The RDS (Step 1) involves 2NO molecules. The rate equation includes only species in/before the RDS: Rate = k[NO]². O₂ enters after the RDS (Step 2 is fast) so it does not appear. Option C would require O₂ to be in/before the RDS.',
      topic: 'Rate equations and mechanisms'
    },
    {
      id: 'mcq-t11-23',
      stem: 'A reactant is zero order in the overall rate equation. Which statement about this reactant is correct?',
      options: [
        'It is not present in the reaction at all',
        'It is involved in a step that occurs after the rate-determining step',
        'It is the only reactant in the rate-determining step',
        'Its concentration is constant throughout the reaction'
      ],
      correctAnswer: 1,
      rationale: 'Zero order means the species joins the mechanism only after the RDS; it does not influence the rate. It is present in the reaction (just not in the RDS). Its concentration does change; the rate is just insensitive to it.',
      topic: 'Rate equations and mechanisms'
    },

    // ── Subtopic 7: Arrhenius and activation energy ────────────
    {
      id: 'mcq-t11-24',
      stem: 'In the Arrhenius equation k = A·e^(−Eₐ/RT), what does the pre-exponential factor A represent?',
      options: [
        'The activation energy in joules',
        'The gas constant R',
        'A constant related to collision frequency and the correct geometric orientation',
        'The equilibrium constant for the reaction'
      ],
      correctAnswer: 2,
      rationale: 'A (the frequency factor or pre-exponential factor) accounts for the frequency of collisions and the probability that those collisions have the correct orientation for reaction. It is not the activation energy, gas constant, or equilibrium constant.',
      topic: 'Arrhenius and activation energy'
    },
    {
      id: 'mcq-t11-25',
      stem: 'A plot of ln(k) against 1/T (in K⁻¹) gives a straight line. What does the gradient of this line equal?',
      options: ['Eₐ/R', '−Eₐ/R', 'ln(A)', '−R/Eₐ'],
      correctAnswer: 1,
      rationale: 'Rearranging the Arrhenius equation: ln(k) = (−Eₐ/R)(1/T) + ln(A). This matches y = mx + c, so gradient = −Eₐ/R (always negative). The y-intercept = ln(A).',
      topic: 'Arrhenius and activation energy'
    },
    {
      id: 'mcq-t11-26',
      stem: 'The gradient of an Arrhenius plot (ln k vs 1/T) is found to be −6000 K. What is the activation energy in kJ mol⁻¹? (R = 8.31 J K⁻¹ mol⁻¹)',
      options: ['49.9 kJ mol⁻¹', '722 kJ mol⁻¹', '6000 kJ mol⁻¹', '0.72 kJ mol⁻¹'],
      correctAnswer: 0,
      rationale: 'Eₐ = −gradient × R = 6000 × 8.31 = 49,860 J mol⁻¹ = 49.9 kJ mol⁻¹. Note: gradient is −6000 K, so −gradient = +6000. Option B incorrectly converts units; option C forgets to multiply by R.',
      topic: 'Arrhenius and activation energy'
    },
    {
      id: 'mcq-t11-27',
      stem: 'Adding a catalyst to a reaction increases the rate constant k. According to the Arrhenius equation, the best explanation is:',
      options: [
        'A increases because more molecules are now colliding',
        'T increases because the catalyst generates heat',
        'Eₐ decreases because an alternative pathway with lower activation energy is provided',
        'R decreases when a catalyst is present'
      ],
      correctAnswer: 2,
      rationale: 'A catalyst provides an alternative mechanism with lower Eₐ. A lower Eₐ means e^(−Eₐ/RT) is larger, so k increases. The catalyst does not change T or R, and A is largely unaffected.',
      topic: 'Arrhenius and activation energy'
    },

    // ── Subtopic 8: Core Practicals 9a, 9b, 10 ───────────────
    {
      id: 'mcq-t11-28',
      stem: 'In Core Practical 9a (iodine–propanone), excess NaHCO₃ is used to quench each sample. What is its function?',
      options: [
        'To provide a buffer to keep pH constant',
        'To neutralise the H₂SO₄ catalyst and stop the reaction',
        'To precipitate the iodine so it can be filtered',
        'To reduce I₂ back to I⁻ before titration'
      ],
      correctAnswer: 1,
      rationale: 'NaHCO₃ (sodium hydrogencarbonate) is a mild base that neutralises the H₂SO₄ acid catalyst. Without the catalyst the reaction stops — this is the quenching step. It does not precipitate or reduce I₂ before titration.',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'mcq-t11-29',
      stem: 'In Core Practical 9b (iodine clock), distilled water is added when the volume of KI solution is decreased. Why?',
      options: [
        'To increase the concentration of thiosulfate',
        'To maintain a constant total reaction volume so concentration comparisons are valid',
        'To reduce the temperature of the reaction',
        'To increase the ionic strength of the solution'
      ],
      correctAnswer: 1,
      rationale: 'If total volume changes between runs, concentrations of all other species change too, confounding the effect of the variable being investigated. Distilled water keeps total volume constant at 25 cm³.',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'mcq-t11-30',
      stem: 'In Core Practical 10 (activation energy), both solutions are equilibrated at the target temperature before mixing. Why?',
      options: [
        'To ensure both solutions have the same pH',
        'To ensure the reaction starts at exactly the target temperature and the measurement is reliable',
        'To allow any dissolved gases to escape before mixing',
        'To allow the indicator to equilibrate with the solution'
      ],
      correctAnswer: 1,
      rationale: 'If one solution is cooler than the target temperature, the reaction begins below the intended temperature, giving an incorrect rate measurement. Pre-equilibration ensures the reaction occurs at exactly the measured temperature.',
      topic: 'Core Practicals 9a, 9b and 10'
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // FILL BLANK  (~15 questions)
  // ══════════════════════════════════════════════════════════════
  fillBlank: [
    // ── Subtopic 0 ──
    {
      id: 'fb-t11-1',
      stem: 'Complete the statement about reaction order.',
      template: 'The orders of reaction with respect to each reactant can only be determined by __BLANK__, not from the balanced chemical equation.',
      blanks: [{ answer: 'experiment' }],
      rationale: 'Reaction orders are empirical — they must be found by experiment. The balanced equation gives stoichiometry, not kinetic orders.'
    },
    {
      id: 'fb-t11-2',
      stem: 'Complete the statement about the rate constant.',
      template: 'The rate constant k changes when the __BLANK__ is changed, but is unaffected by changes in concentration.',
      blanks: [{ answer: 'temperature' }],
      rationale: 'k depends on temperature (and catalyst) via the Arrhenius equation. Concentration changes alter the rate but not k itself.'
    },
    {
      id: 'fb-t11-3',
      stem: 'Complete the statement about second-order reactions.',
      template: 'If the concentration of A is doubled and the rate increases by a factor of __BLANK__, the reaction is second order with respect to A.',
      blanks: [{ answer: 'four' }],
      rationale: 'Second order: rate ∝ [A]². Doubling [A] gives 2² = 4 times the rate.'
    },
    // ── Subtopic 1 ──
    {
      id: 'fb-t11-4',
      stem: 'Complete the relationship for a first-order reaction.',
      template: 'For a first-order reaction, k = __BLANK__ / t½, where ln 2 ≈ 0.693.',
      blanks: [{ answer: 'ln 2' }],
      rationale: 'The half-life equation for first order is k = ln(2)/t½ = 0.693/t½. This equation only applies to first-order reactions.'
    },
    {
      id: 'fb-t11-5',
      stem: 'Complete the statement about half-life and reaction order.',
      template: 'A reaction in which the half-life __BLANK__ as the reaction proceeds is second order.',
      blanks: [{ answer: 'increases' }],
      rationale: 'Second order: t½ = 1/(k[A]₀). As [A] falls, t½ rises. Zero order has decreasing t½; first order has constant t½.'
    },
    // ── Subtopic 2 ──
    {
      id: 'fb-t11-6',
      stem: 'Complete the statement about colorimetry.',
      template: 'In colorimetry, the filter chosen must transmit the __BLANK__ colour to that absorbed by the solution, to give maximum sensitivity.',
      blanks: [{ answer: 'complementary' }],
      rationale: 'The filter passes the complementary colour (opposite on the colour wheel). This maximises the change in absorbance with concentration, giving the most sensitive measurement.'
    },
    {
      id: 'fb-t11-7',
      stem: 'Complete the statement about quenching.',
      template: 'Quenching a reaction sample is necessary so that the concentration of reactants does not __BLANK__ during the time required for chemical analysis.',
      blanks: [{ answer: 'change' }],
      rationale: 'Quenching arrests the reaction, preserving the concentration at the moment of sampling. Without quenching, further reaction would alter the concentration before titration is complete.'
    },
    // ── Subtopic 3 ──
    {
      id: 'fb-t11-8',
      stem: 'Complete the initial-rate approximation.',
      template: 'In a clock reaction, the initial rate is approximated as __BLANK__, where t is the time for the colour change to occur.',
      blanks: [{ answer: '1/t' }],
      rationale: 'Rate ≈ 1/t because a fixed, small amount of product must form before the colour change, so a shorter time means a faster rate.'
    },
    {
      id: 'fb-t11-9',
      stem: 'Complete the statement about the log-log method.',
      template: 'When log(Rate) is plotted against log[A], the gradient of the straight line equals the __BLANK__ of reaction with respect to A.',
      blanks: [{ answer: 'order' }],
      rationale: 'log(Rate) = n·log[A] + log(k). The gradient n gives the order directly. This method is useful when the order is not an integer.'
    },
    // ── Subtopic 5 ──
    {
      id: 'fb-t11-10',
      stem: 'Complete the statement about units of k.',
      template: 'For a zero-order reaction, the units of the rate constant k are __BLANK__.',
      blanks: [{ answer: 'mol dm⁻³ s⁻¹' }],
      rationale: 'Zero order: Rate = k. So k must have units of rate = mol dm⁻³ s⁻¹.'
    },
    {
      id: 'fb-t11-11',
      stem: 'Complete the statement about units of k for second order.',
      template: 'For a second-order reaction, the units of k are __BLANK__.',
      blanks: [{ answer: 'dm³ mol⁻¹ s⁻¹' }],
      rationale: 'k = rate/[A]² = (mol dm⁻³ s⁻¹)/(mol dm⁻³)² = mol⁻¹ dm³ s⁻¹ = dm³ mol⁻¹ s⁻¹.'
    },
    // ── Subtopic 6 ──
    {
      id: 'fb-t11-12',
      stem: 'Complete the statement about the rate-determining step.',
      template: 'The rate-determining step is the __BLANK__ step in a multi-step reaction mechanism.',
      blanks: [{ answer: 'slowest' }],
      rationale: 'The RDS is the bottleneck — the slowest step — and its molecularity determines the rate equation for the overall reaction.'
    },
    // ── Subtopic 7 ──
    {
      id: 'fb-t11-13',
      stem: 'Complete the Arrhenius equation.',
      template: 'The Arrhenius equation is k = A · e^(−Eₐ / __BLANK__), where T is the temperature in kelvin.',
      blanks: [{ answer: 'RT' }],
      rationale: 'The exponent is −Eₐ/(RT) where R = 8.31 J K⁻¹ mol⁻¹ and T is in kelvin. Using T in °C gives a completely wrong answer.'
    },
    {
      id: 'fb-t11-14',
      stem: 'Complete the linearised Arrhenius expression.',
      template: 'When ln(k) is plotted against 1/T, the y-intercept of the straight line equals __BLANK__.',
      blanks: [{ answer: 'ln A' }],
      rationale: 'ln(k) = (−Eₐ/R)(1/T) + ln(A). The y-intercept is ln(A), the natural log of the pre-exponential factor.'
    },
    // ── Subtopic 8 ──
    {
      id: 'fb-t11-15',
      stem: 'Complete the statement about Core Practical 9a.',
      template: 'In Core Practical 9a, plotting [I₂] against time gives a straight line with a negative gradient, showing that the reaction is __BLANK__ order with respect to I₂.',
      blanks: [{ answer: 'zero' }],
      rationale: 'A straight line on a [conc] vs time graph (with non-zero negative gradient) indicates zero order. The rate is constant and independent of [I₂].'
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // DRAG-DROP  (~10 questions)
  // ══════════════════════════════════════════════════════════════
  dragDrop: [
    {
      id: 'dd-t11-1',
      stem: 'Classify each graph shape by the order of reaction it represents (Rate vs [A] graphs):',
      categories: ['Zero order', 'First order', 'Second order'],
      items: [
        { text: 'Horizontal straight line at a constant rate value', category: 'Zero order' },
        { text: 'Straight line passing through the origin', category: 'First order' },
        { text: 'Upward-curving parabola through the origin', category: 'Second order' },
        { text: 'Gradient = 0 at all concentrations', category: 'Zero order' },
        { text: 'Rate doubles when [A] doubles', category: 'First order' },
        { text: 'Rate quadruples when [A] doubles', category: 'Second order' },
      ]
    },
    {
      id: 'dd-t11-2',
      stem: 'Classify each half-life behaviour by reaction order:',
      categories: ['Zero order', 'First order', 'Second order'],
      items: [
        { text: 't½ is constant throughout the reaction', category: 'First order' },
        { text: 't½ decreases as the reaction proceeds', category: 'Zero order' },
        { text: 't½ increases as the reaction proceeds', category: 'Second order' },
        { text: 'k = 0.693 / t½', category: 'First order' },
        { text: 't½ = [A]₀ / 2k', category: 'Zero order' },
        { text: 'Successive half-lives get longer', category: 'Second order' },
      ]
    },
    {
      id: 'dd-t11-3',
      stem: 'Match each experimental method to the reaction property it directly monitors:',
      categories: ['Gas volume method', 'Mass loss method', 'Colorimetry', 'Quenching + titration'],
      items: [
        { text: 'Volume of O₂ collected in a gas syringe every 30 s', category: 'Gas volume method' },
        { text: 'Decrease in mass as CO₂ escapes from an open flask', category: 'Mass loss method' },
        { text: 'Absorbance of a coloured species linked to concentration via calibration curve', category: 'Colorimetry' },
        { text: 'Sample removed and quenched, then I₂ titrated with Na₂S₂O₃', category: 'Quenching + titration' },
        { text: 'Reactions producing gas bubbles measured with inverted graduated tube', category: 'Gas volume method' },
        { text: 'Reaction producing coloured manganate(VII) losing colour monitored spectrophotometrically', category: 'Colorimetry' },
      ]
    },
    {
      id: 'dd-t11-4',
      stem: 'Classify each rate constant k unit by the overall order of the reaction:',
      categories: ['Zero order', 'First order', 'Second order', 'Third order'],
      items: [
        { text: 'mol dm⁻³ s⁻¹', category: 'Zero order' },
        { text: 's⁻¹', category: 'First order' },
        { text: 'dm³ mol⁻¹ s⁻¹', category: 'Second order' },
        { text: 'dm⁶ mol⁻² s⁻¹', category: 'Third order' },
        { text: 'k has no concentration unit (only time⁻¹)', category: 'First order' },
        { text: 'k has the same units as rate itself', category: 'Zero order' },
      ]
    },
    {
      id: 'dd-t11-5',
      stem: 'Assign each statement to the SN1 or SN2 mechanism for halogenoalkane hydrolysis:',
      categories: ['SN1', 'SN2'],
      items: [
        { text: 'Rate = k[R-Br] only; OH⁻ concentration does not affect rate', category: 'SN1' },
        { text: 'Rate = k[R-Br][OH⁻]; both species in the rate equation', category: 'SN2' },
        { text: 'Proceeds through a carbocation intermediate', category: 'SN1' },
        { text: 'Bond breaking and bond forming occur simultaneously in one step', category: 'SN2' },
        { text: 'Favoured by tertiary halogenoalkanes', category: 'SN1' },
        { text: 'Favoured by primary halogenoalkanes', category: 'SN2' },
        { text: 'Two-step mechanism; the first step is the RDS', category: 'SN1' },
        { text: 'One-step mechanism with a single transition state', category: 'SN2' },
      ]
    },
    {
      id: 'dd-t11-6',
      stem: 'Classify each Arrhenius plot feature correctly:',
      categories: ['Gradient', 'Y-intercept', 'Effect of catalyst', 'Effect of higher T'],
      items: [
        { text: '−Eₐ / R', category: 'Gradient' },
        { text: 'ln(A)', category: 'Y-intercept' },
        { text: 'Steeper gradient (more negative) on ln(k) vs 1/T plot', category: 'Effect of catalyst' },
        { text: 'Points shift to lower 1/T values and higher ln(k)', category: 'Effect of higher T' },
        { text: 'Always negative for any activated reaction', category: 'Gradient' },
        { text: 'Lower Eₐ gives less negative gradient on Arrhenius plot', category: 'Effect of catalyst' },
      ]
    },
    {
      id: 'dd-t11-7',
      stem: 'Classify each step as occurring in Core Practical 9a or Core Practical 9b:',
      categories: ['Core Practical 9a', 'Core Practical 9b'],
      items: [
        { text: 'Withdraw 10 cm³ sample every 5 minutes and quench with excess NaHCO₃', category: 'Core Practical 9a' },
        { text: 'Add distilled water to maintain constant total volume of 25 cm³', category: 'Core Practical 9b' },
        { text: 'Titrate with Na₂S₂O₃ using starch indicator, endpoint pale yellow to colourless', category: 'Core Practical 9a' },
        { text: 'Measure time for sudden blue-black colour to appear (rate ≈ 1/t)', category: 'Core Practical 9b' },
        { text: 'Plot [I₂] vs time and confirm straight-line (zero order w.r.t. I₂)', category: 'Core Practical 9a' },
        { text: 'Plot 1/t vs [reactant] to determine order by graph shape', category: 'Core Practical 9b' },
      ]
    },
    {
      id: 'dd-t11-8',
      stem: 'Assign each reactant involvement to its order in the rate equation:',
      categories: ['Zero order in rate equation', 'First order in rate equation', 'Second order in rate equation'],
      items: [
        { text: 'Species joins the mechanism only after the RDS', category: 'Zero order in rate equation' },
        { text: 'ONE molecule of this species appears in or before the RDS', category: 'First order in rate equation' },
        { text: 'TWO molecules of this species appear in or before the RDS', category: 'Second order in rate equation' },
        { text: 'Doubling its concentration has no effect on rate', category: 'Zero order in rate equation' },
        { text: 'Doubling its concentration doubles the rate', category: 'First order in rate equation' },
        { text: 'Doubling its concentration quadruples the rate', category: 'Second order in rate equation' },
      ]
    },
    {
      id: 'dd-t11-9',
      stem: 'Match each source of error to the relevant Core Practical:',
      categories: ['CP 9b error', 'CP 10 error'],
      items: [
        { text: 'Not maintaining constant total volume changes all other concentrations', category: 'CP 9b error' },
        { text: 'Solutions not at the same temperature before mixing introduces temperature error', category: 'CP 10 error' },
        { text: 'Subjective colour endpoint (methyl red decolourisation) introduces observer error', category: 'CP 10 error' },
        { text: 'Failing to thermostat the water bath causes temperature to drift between runs', category: 'CP 9b error' },
        { text: 'Poor temperature control between runs makes 1/T values inaccurate', category: 'CP 10 error' },
        { text: 'Using different total volumes in different runs makes rate comparisons invalid', category: 'CP 9b error' },
      ]
    },
    {
      id: 'dd-t11-10',
      stem: 'Classify each statement as applying to the initial-rate method or the continuous-monitoring method:',
      categories: ['Initial-rate method', 'Continuous monitoring'],
      items: [
        { text: 'Rate measured at t = 0 when concentrations are precisely known', category: 'Initial-rate method' },
        { text: 'Concentration measured at many time points throughout the reaction', category: 'Continuous monitoring' },
        { text: 'Rate ≈ 1/t from clock reaction timing', category: 'Initial-rate method' },
        { text: 'Tangents drawn on [conc] vs time curves to obtain rate at each point', category: 'Continuous monitoring' },
        { text: 'Each experiment uses fresh solutions; many repeats required', category: 'Initial-rate method' },
        { text: 'Single reaction run can give all rate data needed', category: 'Continuous monitoring' },
      ]
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // SEQUENCE  (~8 questions)
  // ══════════════════════════════════════════════════════════════
  sequence: [
    {
      id: 'seq-t11-1',
      stem: 'Put the steps to deduce order from a concentration–time table in the correct order:',
      steps: [
        'Select two experiments where only ONE reactant concentration changes between them',
        'Calculate the factor by which that concentration changed',
        'Calculate the factor by which the rate changed between those experiments',
        'Apply the rule: if [A]×x gives rate×xⁿ, then n is the order with respect to A',
        'Repeat for each reactant to find all individual orders, then sum to get overall order'
      ]
    },
    {
      id: 'seq-t11-2',
      stem: 'Put the steps to calculate the rate constant k from experimental data in the correct order:',
      steps: [
        'Write out the full rate equation (e.g. Rate = k[A][B]²)',
        'Select any experimental row with known [A], [B], and measured rate',
        'Substitute the concentration values and the measured rate into the equation',
        'Rearrange to give k = rate / ([A][B]²)',
        'Determine the units of k by substituting the units of rate and concentration and simplifying'
      ]
    },
    {
      id: 'seq-t11-3',
      stem: 'Put the steps of the Core Practical 9a procedure in the correct order:',
      steps: [
        'Prepare reaction mixture of propanone, sulfuric acid, and iodine in a large beaker',
        'Start the timer and withdraw a 10 cm³ sample every 5 minutes',
        'Transfer each sample into excess NaHCO₃ solution to quench the reaction',
        'Titrate the quenched sample with standard Na₂S₂O₃ solution using starch indicator',
        'Calculate [I₂] remaining at each time point and plot [I₂] vs time'
      ]
    },
    {
      id: 'seq-t11-4',
      stem: 'Put the steps to determine activation energy from an Arrhenius plot in the correct order:',
      steps: [
        'Measure the rate constant k at several different temperatures (in kelvin)',
        'Calculate ln(k) and 1/T for each data point',
        'Plot ln(k) on the y-axis against 1/T on the x-axis',
        'Draw the best-fit straight line and measure the gradient',
        'Calculate Eₐ = −gradient × R (where R = 8.31 J K⁻¹ mol⁻¹), then convert to kJ mol⁻¹'
      ]
    },
    {
      id: 'seq-t11-5',
      stem: 'Put the steps of the iodine clock (CP9b) experiment for one run in the correct order:',
      steps: [
        'Measure out the required volumes of KI, H₂O₂, starch, Na₂S₂O₃, and distilled water to give 25 cm³ total',
        'Thermostat all solutions at the target temperature in a water bath',
        'Mix all reagents simultaneously and start the stopwatch',
        'Wait for the sudden blue-black colour change and stop the stopwatch',
        'Record time t and calculate rate ≈ 1/t for that reactant concentration'
      ]
    },
    {
      id: 'seq-t11-6',
      stem: 'Put the steps for proving a reaction is first order from a concentration–time graph in the correct order:',
      steps: [
        'Draw the experimental concentration–time curve',
        'Measure the first half-life: time for [A] to fall from [A]₀ to [A]₀/2',
        'Measure the second half-life: time for [A] to fall from [A]₀/2 to [A]₀/4',
        'Compare the two half-life values — if they are equal (within experimental error), the reaction is first order',
        'State conclusion: constant t½ confirms first-order kinetics'
      ]
    },
    {
      id: 'seq-t11-7',
      stem: 'Put the steps to verify a proposed mechanism is consistent with the observed rate equation in the correct order:',
      steps: [
        'Write down the proposed multi-step mechanism with each step labelled slow or fast',
        'Identify which step is the rate-determining step (RDS)',
        'Write the rate equation implied by the RDS: include all species in/before the RDS',
        'Compare the implied rate equation with the experimentally determined rate equation',
        'Accept the mechanism if they match; reject or modify it if they do not'
      ]
    },
    {
      id: 'seq-t11-8',
      stem: 'Put the steps to determine order from a log(Rate) vs log[A] plot in the correct order:',
      steps: [
        'Measure initial rates at several different concentrations of A (keeping other concentrations constant)',
        'Take the logarithm (base 10 or natural) of each rate and each [A] value',
        'Plot log(Rate) on the y-axis against log[A] on the x-axis',
        'Draw the best-fit straight line through the data points',
        'Read off the gradient — this equals the order of reaction with respect to A'
      ]
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // KEYWORD  (~12 questions)
  // ══════════════════════════════════════════════════════════════
  keyword: [
    {
      id: 'kw-t11-1',
      stem: 'Define the term "order of reaction" with respect to a reactant. [2 marks]',
      marks: 2,
      keywords: ['exponent', 'power', 'rate equation', 'concentration', 'experiment'],
      modelAnswer: 'The order of reaction with respect to a reactant is the power (exponent) to which the concentration of that reactant is raised in the rate equation. It can only be determined by experiment, not from the balanced equation.'
    },
    {
      id: 'kw-t11-2',
      stem: 'Define the rate constant k and state two factors that affect its value. [3 marks]',
      marks: 3,
      keywords: ['proportionality', 'constant', 'temperature', 'catalyst', 'activation energy'],
      modelAnswer: 'The rate constant k is the proportionality constant in the rate equation (Rate = k[A]ᵃ[B]ᵇ). Its value increases when temperature increases (because more molecules have energy ≥ Eₐ) and when a catalyst is added (because the catalyst lowers the activation energy).'
    },
    {
      id: 'kw-t11-3',
      stem: 'Explain how a constant half-life provides evidence for a first-order reaction. [2 marks]',
      marks: 2,
      keywords: ['constant', 'half-life', 'first order', 'exponential', 'independent of concentration'],
      modelAnswer: 'For a first-order reaction, k = ln(2)/t½, so t½ = ln(2)/k. Since k is constant at fixed temperature, t½ is constant regardless of concentration. Measuring at least two successive half-lives and showing they are equal (within error) confirms first-order kinetics.'
    },
    {
      id: 'kw-t11-4',
      stem: 'Define the rate-determining step in a reaction mechanism. [2 marks]',
      marks: 2,
      keywords: ['slowest', 'step', 'mechanism', 'rate', 'bottleneck'],
      modelAnswer: 'The rate-determining step (RDS) is the slowest elementary step in a multi-step reaction mechanism. It acts as a bottleneck, controlling the overall rate of the reaction. Only species involved in or before the RDS appear in the rate equation.'
    },
    {
      id: 'kw-t11-5',
      stem: 'State what is meant by quenching a reaction sample in a kinetics experiment. [2 marks]',
      marks: 2,
      keywords: ['stop', 'reaction', 'concentration', 'preserved', 'analysis'],
      modelAnswer: 'Quenching is the process of stopping the reaction in a sample so that the concentrations of reactants and products are preserved at the values they had at the moment of sampling, allowing accurate chemical analysis to be carried out.'
    },
    {
      id: 'kw-t11-6',
      stem: 'State the Arrhenius equation and identify each term. [3 marks]',
      marks: 3,
      keywords: ['k', 'A', 'Ea', 'R', 'T', 'exponential', 'kelvin'],
      modelAnswer: 'k = A · e^(−Eₐ/RT), where k is the rate constant, A is the pre-exponential (frequency) factor accounting for collision frequency and geometry, Eₐ is the activation energy (J mol⁻¹), R is the gas constant (8.31 J K⁻¹ mol⁻¹), and T is the absolute temperature in kelvin.'
    },
    {
      id: 'kw-t11-7',
      stem: 'Explain how the gradient and intercept of an ln(k) vs 1/T (Arrhenius) plot are used to find Eₐ and A. [3 marks]',
      marks: 3,
      keywords: ['gradient', 'intercept', 'Ea/R', 'ln A', 'multiply', 'R'],
      modelAnswer: 'Rearranging the Arrhenius equation: ln(k) = (−Eₐ/R)(1/T) + ln(A). The gradient of the ln(k) vs 1/T line equals −Eₐ/R; therefore Eₐ = −gradient × R. The y-intercept equals ln(A); therefore A = e^(y-intercept).'
    },
    {
      id: 'kw-t11-8',
      stem: 'Describe how the iodine clock experiment (CP9b) is used to find the order of reaction with respect to iodide ions. [3 marks]',
      marks: 3,
      keywords: ['initial rate', '1/t', 'concentration', 'constant volume', 'graph', 'order'],
      modelAnswer: 'Prepare a series of reactions with varying [I⁻] but constant [H₂O₂], [H⁺], [S₂O₃²⁻], and constant total volume (25 cm³, topped up with water). Time each reaction until the blue-black colour appears; initial rate ≈ 1/t. Plot 1/t against [I⁻]: a straight line through the origin = first order; a horizontal line = zero order; an upward curve = second order.'
    },
    {
      id: 'kw-t11-9',
      stem: 'Explain why the total volume must be kept constant in the iodine clock experiment when varying the concentration of one reactant. [2 marks]',
      marks: 2,
      keywords: ['concentration', 'constant', 'volume', 'valid', 'comparison'],
      modelAnswer: 'If the total volume is not kept constant, the concentrations of all other reagents (including thiosulfate and H₂O₂) change between runs as well. This means you cannot isolate the effect of just one variable, making comparisons of rate invalid.'
    },
    {
      id: 'kw-t11-10',
      stem: 'Explain what the pre-exponential factor A represents in the Arrhenius equation. [2 marks]',
      marks: 2,
      keywords: ['collision frequency', 'orientation', 'geometry', 'steric factor', 'successful'],
      modelAnswer: 'The pre-exponential factor A (also called the frequency factor) represents the total rate of collisions between reactant molecules multiplied by the steric factor — the probability that colliding molecules have the correct geometric orientation to react. It sets an upper limit on k at infinite temperature.'
    },
    {
      id: 'kw-t11-11',
      stem: 'Describe how a catalyst affects the rate constant k according to the Arrhenius equation. [2 marks]',
      marks: 2,
      keywords: ['lowers', 'activation energy', 'Ea', 'increases', 'k', 'exponential'],
      modelAnswer: 'A catalyst lowers the activation energy Eₐ for the reaction by providing an alternative mechanism. A smaller Eₐ makes the exponential term e^(−Eₐ/RT) larger, so k increases. This means a greater fraction of collisions have sufficient energy to react.'
    },
    {
      id: 'kw-t11-12',
      stem: 'State two potential sources of error in Core Practical 10 (activation energy determination) and explain how each could be minimised. [4 marks]',
      marks: 4,
      keywords: ['temperature', 'equilibrate', 'endpoint', 'subjective', 'thermostat', 'repeat'],
      modelAnswer: 'Error 1: Solutions not equilibrated at the target temperature before mixing — minimise by placing both solutions in the water bath for ≥ 5 min before mixing to ensure both are at the same temperature. Error 2: Subjective colour endpoint (methyl red decolourisation) — minimise by having the same person judge the endpoint in all runs and by taking repeat readings to average out variability.'
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // FLASHCARDS  (~25 cards)
  // ══════════════════════════════════════════════════════════════
  flashcards: [
    // ── Subtopic 0 ──
    {
      id: 'fc-t11-1',
      front: 'What does the rate equation Rate = k[A]ᵃ[B]ᵇ tell us about the orders a and b?',
      back: '• a = order w.r.t. A; b = order w.r.t. B\n• Both are determined ONLY by experiment\n• They cannot be deduced from the balanced equation\n• Overall order = a + b',
      topic: 'Rate equations and order'
    },
    {
      id: 'fc-t11-2',
      front: 'How do you identify zero, first, and second order from a Rate vs [A] graph?',
      back: '• Zero order → horizontal line (rate constant)\n• First order → straight line through the origin\n• Second order → upward-curving parabola through the origin',
      topic: 'Rate equations and order'
    },
    {
      id: 'fc-t11-3',
      front: 'What happens to the rate constant k when (a) temperature increases and (b) concentration increases?',
      back: '(a) Temperature increases → k increases (Arrhenius: larger e^(−Eₐ/RT))\n(b) Concentration increases → k is UNCHANGED\n\nConcentration changes the rate but NOT k.',
      topic: 'Rate equations and order'
    },
    {
      id: 'fc-t11-4',
      front: 'The factor rule for deducing reaction order: if [A] increases by factor x and rate increases by factor xⁿ, what is n?',
      back: '• n = order with respect to A\n• [A]×2, rate×1 → n = 0 (zero order)\n• [A]×2, rate×2 → n = 1 (first order)\n• [A]×2, rate×4 → n = 2 (second order)\n• [A]×3, rate×9 → n = 2 (since 3² = 9)',
      topic: 'Rate equations and order'
    },
    // ── Subtopic 1 ──
    {
      id: 'fc-t11-5',
      front: 'State the half-life formula for a first-order reaction and give its units.',
      back: 'k = ln(2) / t½   or equivalently   t½ = 0.693 / k\n\nUnits of k for first order: s⁻¹\n\nThis relationship ONLY holds for first-order reactions.',
      topic: 'Half-life analysis'
    },
    {
      id: 'fc-t11-6',
      front: 'How does half-life change for zero, first, and second order reactions as the reaction proceeds?',
      back: '• Zero order: t½ DECREASES (t½ = [A]₀/2k)\n• First order: t½ CONSTANT (t½ = 0.693/k)\n• Second order: t½ INCREASES (t½ = 1/k[A])\n\nMinimum two measured half-lives needed to prove first order.',
      topic: 'Half-life analysis'
    },
    // ── Subtopic 2 ──
    {
      id: 'fc-t11-7',
      front: 'What is "quenching" and name two methods used in kinetics experiments?',
      back: 'Quenching: stopping the reaction to preserve concentrations at the sampling moment.\n\nMethods:\n• Ice-cold water (dilution + cooling reduces k to ≈ 0)\n• Neutralising the acid catalyst with NaHCO₃ (e.g. CP9a)\n• Adding a large excess of one reactant (back-titration)',
      topic: 'Rate-data experimental methods'
    },
    {
      id: 'fc-t11-8',
      front: 'Why must colorimetry use a filter with the complementary colour to the solution?',
      back: 'The filter passes the complementary colour = the wavelength most strongly absorbed by the solution.\n\nThis maximises the change in transmitted light as concentration changes → greatest sensitivity and most accurate calibration curve.',
      topic: 'Rate-data experimental methods'
    },
    // ── Subtopic 3 ──
    {
      id: 'fc-t11-9',
      front: 'Describe the thiosulfate–HCl clock reaction and identify the visual endpoint.',
      back: 'Reaction: Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl + SO₂ + S(s) + H₂O\n\nSulfur precipitate (S) clouds the solution.\nEndpoint: cross drawn on paper beneath flask becomes invisible.\nTime t measured → rate ≈ 1/t.',
      topic: 'Initial-rate and clock reactions'
    },
    {
      id: 'fc-t11-10',
      front: 'Describe the iodine clock mechanism and explain why the blue-black colour appears suddenly.',
      back: 'Step 1 (slow, RDS): H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O\nStep 2 (fast): I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻\n\nWhile S₂O₃²⁻ present → I₂ immediately removed.\nOnce all S₂O₃²⁻ consumed → free I₂ + starch → sudden blue-black colour.\nRate ≈ 1/t (fixed amount of S₂O₃²⁻ consumed each run).',
      topic: 'Initial-rate and clock reactions'
    },
    // ── Subtopic 4 ──
    {
      id: 'fc-t11-11',
      front: 'What is the log-log method and what does it give?',
      back: 'Plot log(Rate) vs log[A] using initial rate data.\n\nGradient = n (the order with respect to A)\nBased on: log(Rate) = n·log[A] + log(k)\n\nUseful when the order is not a whole number or when the factor method is ambiguous.',
      topic: 'Deducing order from data'
    },
    // ── Subtopic 5 ──
    {
      id: 'fc-t11-12',
      front: 'Give the units of k for zero, first, second, and third order reactions.',
      back: '• Zero order:   mol dm⁻³ s⁻¹\n• First order:  s⁻¹\n• Second order: dm³ mol⁻¹ s⁻¹\n• Third order:  dm⁶ mol⁻² s⁻¹\n\nMethod: substitute units of rate and concentration into k = rate/[concentration]^n and cancel.',
      topic: 'Rate constants and units'
    },
    {
      id: 'fc-t11-13',
      front: 'How do you calculate k from experimental data?',
      back: '1. Write the rate equation (e.g. Rate = k[A]²[B])\n2. Choose any experimental row with known [A], [B], rate\n3. Substitute: k = Rate / ([A]²[B])\n4. Calculate numerical value\n5. Determine units by substituting mol dm⁻³ for each [conc] and simplifying',
      topic: 'Rate constants and units'
    },
    // ── Subtopic 6 ──
    {
      id: 'fc-t11-14',
      front: 'State the golden rule linking reaction order to mechanism.',
      back: 'Order w.r.t. a reactant = number of molecules of that reactant involved IN or BEFORE the rate-determining step (RDS).\n\n• 0 molecules in/before RDS → zero order\n• 1 molecule → first order\n• 2 molecules → second order',
      topic: 'Rate equations and mechanisms'
    },
    {
      id: 'fc-t11-15',
      front: 'Compare SN1 and SN2 mechanisms: steps, rate equations, and substrate preference.',
      back: 'SN1 (tertiary):\n• Step 1 slow: R-Br → carbocation + Br⁻ (RDS)\n• Step 2 fast: carbocation + OH⁻ → product\n• Rate = k[R-Br]\n\nSN2 (primary):\n• One step: OH⁻ attacks as Br⁻ leaves\n• Rate = k[R-Br][OH⁻]',
      topic: 'Rate equations and mechanisms'
    },
    {
      id: 'fc-t11-16',
      front: 'A proposed mechanism gives RDS: 2NO + O₂ → 2NO₂. What rate equation does this predict?',
      back: 'Rate = k[NO]²[O₂]\n\nBecause 2 molecules of NO and 1 molecule of O₂ are involved in the (single-step) RDS.\nOverall order = 3 (second order in NO, first order in O₂).',
      topic: 'Rate equations and mechanisms'
    },
    // ── Subtopic 7 ──
    {
      id: 'fc-t11-17',
      front: 'State the Arrhenius equation and its linearised form.',
      back: 'k = A · e^(−Eₐ/RT)\n\nLinearised: ln(k) = −(Eₐ/R) · (1/T) + ln(A)\n\n• Plot ln(k) vs 1/T\n• Gradient = −Eₐ/R  (always negative)\n• y-intercept = ln(A)\n• Eₐ (J mol⁻¹) = −gradient × 8.31',
      topic: 'Arrhenius and activation energy'
    },
    {
      id: 'fc-t11-18',
      front: 'In an Arrhenius plot, the gradient is found to be −8500 K. Calculate Eₐ in kJ mol⁻¹.',
      back: 'Eₐ = −gradient × R\n   = −(−8500) × 8.31\n   = 8500 × 8.31\n   = 70 635 J mol⁻¹\n   = 70.6 kJ mol⁻¹\n\n(Remember: gradient has units of K, Eₐ in J mol⁻¹ before ÷ 1000 to get kJ)',
      topic: 'Arrhenius and activation energy'
    },
    {
      id: 'fc-t11-19',
      front: 'Why must temperature be in kelvin in the Arrhenius equation?',
      back: 'The Arrhenius equation uses T in the exponent −Eₐ/RT.\n\nT must be in kelvin because:\n• 0 K is absolute zero (no thermal energy)\n• Using °C would give a negative T for temperatures below 0°C, making the exponent meaningless\n• The equation is derived from thermodynamics where T is always absolute temperature',
      topic: 'Arrhenius and activation energy'
    },
    // ── Subtopic 8 ──
    {
      id: 'fc-t11-20',
      front: 'Describe Core Practical 9a and state what graph proves zero order w.r.t. I₂.',
      back: 'Reaction: propanone + I₂ (H₂SO₄ catalyst)\n\nMethod:\n• Withdraw 10 cm³ every 5 min, quench with excess NaHCO₃\n• Titrate I₂ with Na₂S₂O₃ (starch indicator)\n• Calculate [I₂] at each time\n\nProof of zero order: [I₂] vs time gives a straight line with constant negative gradient.',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'fc-t11-21',
      front: 'What is the mole ratio of Na₂S₂O₃ to I₂ in CP9a titrations and what is the starch endpoint?',
      back: 'Mole ratio: 2 Na₂S₂O₃ : 1 I₂\n\nEndpoint procedure:\n• Titrate until solution turns pale yellow\n• Add starch indicator → solution turns blue-black\n• Continue titrating until blue-black turns COLOURLESS = endpoint',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'fc-t11-22',
      front: 'Explain why distilled water is added in CP9b when the volume of KI is reduced.',
      back: 'To keep the TOTAL volume constant at 25 cm³ throughout all runs.\n\nWithout this:\n• Concentrations of H₂O₂, S₂O₃²⁻, and H⁺ would also change\n• You could not isolate the effect of [I⁻] alone\n• Rate comparisons between runs would be invalid',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'fc-t11-23',
      front: 'Describe Core Practical 10 and how Eₐ is calculated from the results.',
      back: 'Phenol + amine with methyl red indicator.\nBoth solutions equilibrated at target T before mixing.\nMeasure time t until colour disappears; rate ≈ 1/t.\n\nRepeat at 5–6 different temperatures.\nPlot ln(1/t) vs 1/T (K).\nGradient = −Eₐ/R\nEₐ = −gradient × 8.314 J mol⁻¹',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'fc-t11-24',
      front: 'Give the full rate equation for the propanone–iodine reaction and explain the absence of I₂.',
      back: 'Rate = k[CH₃COCH₃][H⁺]\n\nI₂ is absent because:\n• The mechanism shows I₂ reacting AFTER the rate-determining step\n• The RDS involves enolisation of propanone (catalysed by H⁺)\n• I₂ is zero order → does not appear in the rate equation',
      topic: 'Core Practicals 9a, 9b and 10'
    },
    {
      id: 'fc-t11-25',
      front: 'What graph shapes on a 1/t vs [reactant] plot indicate zero, first, and second order?',
      back: '• Zero order → horizontal line (1/t constant as [reactant] changes)\n• First order → straight line through the origin\n• Second order → upward-curving line (re-plot 1/t vs [reactant]² to linearise)\n\nRemember: 1/t ≈ rate, so this is equivalent to a Rate vs [conc] graph.',
      topic: 'Core Practicals 9a, 9b and 10'
    },
  ],

};
