export const exercises_chemistry_4_14 = {

    // ─────────────────────────────────────────────────────────────────────────
    // MCQ (~32 questions across all 8 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    mcq: [
        // ── Subtopic 0: Brønsted-Lowry Acid-Base Model ──────────────────────
        {
            id: 'mcq-t14-1',
            stem: 'According to the Brønsted-Lowry model, an acid is defined as a substance that:',
            options: [
                'Produces OH⁻ ions in aqueous solution',
                'Donates a proton (H⁺) to another species',
                'Accepts an electron pair from another species',
                'Produces H⁺ ions only in aqueous solution',
            ],
            correctAnswer: 1,
            rationale: 'The Brønsted-Lowry model defines an acid as a proton (H⁺) donor. Option A describes a base (Arrhenius definition). Option C is the Lewis model. Option D is the Arrhenius model, which is more restricted.',
            topic: 'Brønsted-Lowry Acid-Base Model',
        },
        {
            id: 'mcq-t14-2',
            stem: 'Which limitation of the Arrhenius theory is overcome by the Brønsted-Lowry model?',
            options: [
                'The Arrhenius theory cannot explain why strong acids fully dissociate',
                'The Arrhenius theory cannot account for acid-base reactions in non-aqueous or gas-phase systems',
                'The Arrhenius theory cannot distinguish diprotic from monoprotic acids',
                'The Arrhenius theory requires temperature correction',
            ],
            correctAnswer: 1,
            rationale: 'The Arrhenius model requires water as the solvent (acids must produce H⁺ in water, bases must produce OH⁻). The Brønsted-Lowry model is more general — it describes proton transfer in any medium, including gas-phase reactions such as HCl(g) + NH₃(g) → NH₄Cl(s).',
            topic: 'Brønsted-Lowry Acid-Base Model',
        },
        {
            id: 'mcq-t14-3',
            stem: 'In the reaction HCl + H₂O → H₃O⁺ + Cl⁻, water is acting as:',
            options: [
                'An acid, because it produces OH⁻',
                'A base, because it accepts a proton from HCl',
                'An amphiprotic substance donating a proton',
                'A neutral species with no role in the reaction',
            ],
            correctAnswer: 1,
            rationale: 'Water accepts a proton (H⁺) from HCl, forming H₃O⁺. This makes water the Brønsted-Lowry base in this reaction. This also demonstrates that water can act as a base (amphoteric behaviour).',
            topic: 'Brønsted-Lowry Acid-Base Model',
        },
        {
            id: 'mcq-t14-4',
            stem: 'Which of the following is a monoprotic weak acid?',
            options: [
                'H₂SO₄ (sulfuric acid)',
                'H₃PO₄ (phosphoric acid)',
                'CH₃COOH (ethanoic acid)',
                'HCl (hydrochloric acid)',
            ],
            correctAnswer: 2,
            rationale: 'CH₃COOH is monoprotic (one ionisable H) and weak (partially dissociates, Ka ≈ 1.74 × 10⁻⁵). H₂SO₄ is diprotic and strong. H₃PO₄ is triprotic and weak. HCl is monoprotic but strong.',
            topic: 'Brønsted-Lowry Acid-Base Model',
        },

        // ── Subtopic 1: Conjugate Acid-Base Pairs ───────────────────────────
        {
            id: 'mcq-t14-5',
            stem: 'In the equation NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, which species is the conjugate acid of NH₃?',
            options: [
                'OH⁻',
                'H₂O',
                'NH₄⁺',
                'NH₃ itself',
            ],
            correctAnswer: 2,
            rationale: 'NH₃ accepts a proton from H₂O to form NH₄⁺. The conjugate acid is formed when the base gains H⁺, so NH₄⁺ is the conjugate acid of NH₃. The other conjugate pair is (H₂O, OH⁻).',
            topic: 'Conjugate Acid-Base Pairs',
        },
        {
            id: 'mcq-t14-6',
            stem: 'Which statement correctly describes the relationship between acid strength and the strength of its conjugate base?',
            options: [
                'A strong acid has a strong conjugate base',
                'A strong acid has a weak conjugate base',
                'A weak acid has a weak conjugate base',
                'There is no relationship between acid strength and conjugate base strength',
            ],
            correctAnswer: 1,
            rationale: 'Strong acids fully donate their protons, so their conjugate bases have virtually no tendency to accept protons back — they are very weak bases. Weak acids only partially donate protons, so their conjugate bases are relatively stronger. This inverse relationship reflects equilibrium principles.',
            topic: 'Conjugate Acid-Base Pairs',
        },
        {
            id: 'mcq-t14-7',
            stem: 'In HCl + H₂O → H₃O⁺ + Cl⁻, which species is the conjugate base of H₃O⁺?',
            options: [
                'HCl',
                'Cl⁻',
                'H₂O',
                'OH⁻',
            ],
            correctAnswer: 2,
            rationale: 'H₃O⁺ loses a proton to give H₂O, so H₂O is the conjugate base of H₃O⁺. The conjugate pair is (H₃O⁺, H₂O). Cl⁻ is the conjugate base of HCl.',
            topic: 'Conjugate Acid-Base Pairs',
        },
        {
            id: 'mcq-t14-8',
            stem: 'HSO₄⁻ is described as amphoteric. Which statement about HSO₄⁻ is correct?',
            options: [
                'It can only donate protons, not accept them',
                'It can only accept protons, not donate them',
                'It can both donate and accept protons depending on its reaction partner',
                'It does not participate in proton transfer reactions',
            ],
            correctAnswer: 2,
            rationale: 'HSO₄⁻ is the conjugate base of H₂SO₄ (first dissociation) and the conjugate acid of SO₄²⁻ (second dissociation). With a stronger acid it acts as a base; with a stronger base it acts as an acid. This amphiprotic behaviour makes it amphoteric.',
            topic: 'Conjugate Acid-Base Pairs',
        },

        // ── Subtopic 2: The pH Scale ─────────────────────────────────────────
        {
            id: 'mcq-t14-9',
            stem: 'A solution has [H⁺] = 2.5 × 10⁻³ mol dm⁻³. What is its pH?',
            options: [
                '2.60',
                '2.00',
                '3.40',
                '−2.60',
            ],
            correctAnswer: 0,
            rationale: 'pH = −log(2.5 × 10⁻³) = −(log 2.5 + log 10⁻³) = −(0.40 − 3) = 2.60. Option B would be if [H⁺] = 0.01. Option C is wrong direction. Option D is the negative of the correct answer (sign error).',
            topic: 'The pH Scale',
        },
        {
            id: 'mcq-t14-10',
            stem: 'At 40°C, Kw = 3.00 × 10⁻¹⁴ mol² dm⁻⁶. What is the pH of a neutral solution at this temperature?',
            options: [
                '7.00',
                '6.77',
                '7.23',
                '14.00',
            ],
            correctAnswer: 1,
            rationale: 'A neutral solution has [H⁺] = [OH⁻] = √Kw. √(3.00 × 10⁻¹⁴) = 1.73 × 10⁻⁷, so pH = −log(1.73 × 10⁻⁷) = 6.76 ≈ 6.77. A neutral solution is NOT always pH 7 — pH 7 is only neutral at 25°C.',
            topic: 'The pH Scale',
        },
        {
            id: 'mcq-t14-11',
            stem: 'A solution has pH = 11.50. What is [H⁺]?',
            options: [
                '3.16 × 10⁻¹² mol dm⁻³',
                '1.00 × 10⁻¹¹ mol dm⁻³',
                '3.16 × 10⁻² mol dm⁻³',
                '1.15 × 10⁻¹² mol dm⁻³',
            ],
            correctAnswer: 0,
            rationale: '[H⁺] = 10⁻ᵖᴴ = 10⁻¹¹·⁵ = 10⁻¹² × 10⁰·⁵ = 3.16 × 10⁻¹² mol dm⁻³. Remember: 10⁰·⁵ = √10 = 3.162.',
            topic: 'The pH Scale',
        },
        {
            id: 'mcq-t14-12',
            stem: 'As temperature increases, what happens to Kw and the pH of pure water?',
            options: [
                'Kw decreases; pH of pure water increases',
                'Kw increases; pH of pure water decreases',
                'Kw stays constant; pH of pure water stays constant',
                'Kw increases; the water becomes acidic',
            ],
            correctAnswer: 1,
            rationale: 'Water autoionisation is endothermic: H₂O ⇌ H⁺ + OH⁻. By Le Chatelier\'s principle, increasing temperature shifts equilibrium right, producing more H⁺ and OH⁻, so Kw increases. Since neutral pH = ½pKw and pKw decreases, the neutral pH decreases below 7. The water is still neutral — it is NOT acidic because [H⁺] still equals [OH⁻].',
            topic: 'The pH Scale',
        },

        // ── Subtopic 3: Strong vs Weak Acids ────────────────────────────────
        {
            id: 'mcq-t14-13',
            stem: '0.10 mol dm⁻³ ethanoic acid has a much higher pH than 0.10 mol dm⁻³ HCl. The best explanation is:',
            options: [
                'Ethanoic acid has a larger molar mass so fewer moles dissolve',
                'Ethanoic acid is a diprotic acid and releases fewer H⁺ per molecule',
                'Ethanoic acid only partially dissociates, producing far fewer H⁺ ions at the same concentration',
                'Ethanoic acid reacts with water to produce OH⁻ ions',
            ],
            correctAnswer: 2,
            rationale: 'Ethanoic acid is a weak acid — it partially dissociates (Ka ≈ 1.74 × 10⁻⁵). Only about 1.3% of CH₃COOH molecules ionise at 0.10 mol dm⁻³, giving [H⁺] ≈ 1.3 × 10⁻³ and pH ≈ 2.87. HCl fully dissociates giving [H⁺] = 0.10 and pH = 1.',
            topic: 'Strong vs Weak Acids: Key Differences',
        },
        {
            id: 'mcq-t14-14',
            stem: 'Which statement correctly distinguishes acid strength from acid concentration?',
            options: [
                'A strong acid is always more concentrated than a weak acid',
                'Acid strength refers to the proportion of molecules that ionise in water',
                'A dilute acid is always a weak acid',
                'Concentration determines whether an acid is strong or weak',
            ],
            correctAnswer: 1,
            rationale: 'Strength (strong/weak) describes the extent of dissociation (proportion ionised). Concentration (concentrated/dilute) describes total solute per unit volume. Glacial ethanoic acid (~17 mol dm⁻³) is a concentrated weak acid; 0.0001 mol dm⁻³ HCl is a dilute strong acid.',
            topic: 'Strong vs Weak Acids: Key Differences',
        },
        {
            id: 'mcq-t14-15',
            stem: 'A weak acid has a degree of dissociation α = 0.025 at concentration c = 0.10 mol dm⁻³. What is [H⁺]?',
            options: [
                '0.10 mol dm⁻³',
                '2.5 × 10⁻³ mol dm⁻³',
                '0.025 mol dm⁻³',
                '1.25 × 10⁻⁴ mol dm⁻³',
            ],
            correctAnswer: 1,
            rationale: '[H⁺] = α × c = 0.025 × 0.10 = 0.0025 = 2.5 × 10⁻³ mol dm⁻³. Option A assumes complete dissociation. Option C equates degree of dissociation with [H⁺] directly (incorrect units).',
            topic: 'Strong vs Weak Acids: Key Differences',
        },
        {
            id: 'mcq-t14-16',
            stem: 'When a weak acid is diluted, what happens to its degree of dissociation (α)?',
            options: [
                'It decreases because there is less acid present',
                'It remains constant as Ka is fixed at constant temperature',
                'It increases because dilution shifts the dissociation equilibrium to the right',
                'It depends only on temperature, not concentration',
            ],
            correctAnswer: 2,
            rationale: 'By Le Chatelier\'s principle, dilution reduces [HA] and shifts the equilibrium HA ⇌ H⁺ + A⁻ to the right, increasing the proportion dissociated. Ka itself stays constant at constant temperature, but α increases as concentration decreases.',
            topic: 'Strong vs Weak Acids: Key Differences',
        },

        // ── Subtopic 4: The Acid Dissociation Constant (Ka) ─────────────────
        {
            id: 'mcq-t14-17',
            stem: 'Which expression correctly gives Ka for the weak acid HA ⇌ H⁺ + A⁻?',
            options: [
                'Ka = [HA] / ([H⁺][A⁻])',
                'Ka = [H⁺][A⁻] / [HA]',
                'Ka = [H⁺] / [HA]',
                'Ka = [A⁻][HA] / [H⁺]',
            ],
            correctAnswer: 1,
            rationale: 'The equilibrium constant expression puts products over reactants. Ka = [H⁺][A⁻] / [HA]. Water is omitted because its concentration is essentially constant. Option A is the reciprocal (Kb-like). Options C and D are missing terms.',
            topic: 'The Acid Dissociation Constant (Ka)',
        },
        {
            id: 'mcq-t14-18',
            stem: 'An acid has pKa = 4.74. Which value of Ka is correct?',
            options: [
                '4.74 × 10⁻⁴ mol dm⁻³',
                '4.74 × 10⁻⁵ mol dm⁻³',
                '1.82 × 10⁻⁵ mol dm⁻³',
                '1.82 × 10⁻⁶ mol dm⁻³',
            ],
            correctAnswer: 2,
            rationale: 'Ka = 10⁻ᵖᴷᵃ = 10⁻⁴·⁷⁴ = 10⁻⁵ × 10⁰·²⁶ = 10⁻⁵ × 1.82 = 1.82 × 10⁻⁵ mol dm⁻³. This is the Ka of ethanoic acid (pKa = 4.74 → Ka = 1.74–1.82 × 10⁻⁵ depending on rounding).',
            topic: 'The Acid Dissociation Constant (Ka)',
        },
        {
            id: 'mcq-t14-19',
            stem: 'When using the approximation [H⁺] ≈ √(Ka × c), what key assumption is being made?',
            options: [
                'All H⁺ ions come from water autoionisation',
                'The weak acid is completely dissociated',
                'The amount of acid that dissociates is negligible compared to the initial concentration',
                'Ka is much greater than 1',
            ],
            correctAnswer: 2,
            rationale: 'The approximation replaces (c − x) with c in the Ka expression, where x = [H⁺]. This is valid when x << c (typically x < 5% of c), meaning the fraction dissociated is negligible. Always verify this by checking [H⁺]/c × 100 < 5%.',
            topic: 'The Acid Dissociation Constant (Ka)',
        },
        {
            id: 'mcq-t14-20',
            stem: 'What is the approximate [H⁺] for a 0.200 mol dm⁻³ solution of HCN (Ka = 4.9 × 10⁻¹⁰ mol dm⁻³)?',
            options: [
                '9.9 × 10⁻⁶ mol dm⁻³',
                '9.9 × 10⁻⁵ mol dm⁻³',
                '9.8 × 10⁻¹⁰ mol dm⁻³',
                '9.9 × 10⁻⁷ mol dm⁻³',
            ],
            correctAnswer: 0,
            rationale: '[H⁺] = √(Ka × c) = √(4.9 × 10⁻¹⁰ × 0.200) = √(9.8 × 10⁻¹¹) = √9.8 × 10⁻⁵·⁵ ≈ 3.13 × 3.16 × 10⁻⁶ ≈ 9.9 × 10⁻⁶ mol dm⁻³. Check: (9.9 × 10⁻⁶ / 0.200) × 100 = 0.005% — approximation valid.',
            topic: 'The Acid Dissociation Constant (Ka)',
        },

        // ── Subtopic 5: Buffer Solutions ─────────────────────────────────────
        {
            id: 'mcq-t14-21',
            stem: 'A buffer solution is best defined as a solution that:',
            options: [
                'Prevents any change in pH when acid or base is added',
                'Minimises significant changes in pH when small amounts of acid or base are added',
                'Has a fixed pH of 7 regardless of additions',
                'Contains equal concentrations of acid and base',
            ],
            correctAnswer: 1,
            rationale: 'The key exam word is "minimises", NOT "prevents". The pH does change slightly in a buffer — it just resists large changes. "Small amount" is also critical: a large addition will overwhelm the buffer. Equal concentrations makes pH = pKa but is not a requirement for buffer action.',
            topic: 'What is a Buffer Solution?',
        },
        {
            id: 'mcq-t14-22',
            stem: 'Which combination of substances would form an acidic buffer?',
            options: [
                'HCl + NaCl',
                'NaOH + NaCl',
                'CH₃COOH + CH₃COONa',
                'NH₃ + NaOH',
            ],
            correctAnswer: 2,
            rationale: 'An acidic buffer contains a weak acid and the salt of its conjugate base. CH₃COOH is the weak acid and CH₃COONa provides CH₃COO⁻ (the conjugate base). HCl/NaCl: HCl is strong, no equilibrium. NH₃/NaOH: both basic components.',
            topic: 'What is a Buffer Solution?',
        },
        {
            id: 'mcq-t14-23',
            stem: 'When a small amount of NaOH is added to an ethanoic acid/sodium ethanoate buffer, which reaction occurs to resist the pH rise?',
            options: [
                'CH₃COO⁻ + OH⁻ → CH₃COOH + O²⁻',
                'CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O',
                'CH₃COO⁻ + H₂O → CH₃COOH + OH⁻',
                'Na⁺ + OH⁻ → NaOH',
            ],
            correctAnswer: 1,
            rationale: 'When OH⁻ is added, the weak acid (CH₃COOH) reacts with it: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. This consumes the added base, preventing a large rise in pH. The large reservoir of weak acid provides H⁺ to neutralise the base.',
            topic: 'What is a Buffer Solution?',
        },
        {
            id: 'mcq-t14-24',
            stem: 'Using the Henderson-Hasselbalch expression pH = pKa + log([A⁻]/[HA]), what is the pH of a buffer when [CH₃COO⁻] = [CH₃COOH] and pKa = 4.74?',
            options: [
                '0',
                '4.74',
                '9.48',
                '2.37',
            ],
            correctAnswer: 1,
            rationale: 'When [A⁻] = [HA], the ratio [A⁻]/[HA] = 1, and log(1) = 0. Therefore pH = pKa + 0 = pKa = 4.74. This is also the half-equivalence point on a titration curve.',
            topic: 'What is a Buffer Solution?',
        },

        // ── Subtopic 6: Titration Curves ─────────────────────────────────────
        {
            id: 'mcq-t14-25',
            stem: 'At what pH does the equivalence point occur when HCl (strong acid) is titrated with NaOH (strong base)?',
            options: [
                'pH = 0',
                'pH = 7',
                'pH > 7',
                'pH < 7',
            ],
            correctAnswer: 1,
            rationale: 'At the equivalence point, only NaCl (a neutral salt) is present in solution. NaCl does not hydrolyse — Na⁺ is from a strong base and Cl⁻ is from a strong acid, so neither affects pH. The solution is neutral at pH = 7.',
            topic: 'Titration Curves: Overview',
        },
        {
            id: 'mcq-t14-26',
            stem: 'When ethanoic acid (weak acid) is titrated with NaOH (strong base), the equivalence point pH is:',
            options: [
                'pH = 7, because equal amounts of acid and base react',
                'pH < 7, because the salt formed is acidic',
                'pH > 7 (typically 8–9), because CH₃COO⁻ hydrolyses to give OH⁻',
                'pH = pKa at the equivalence point',
            ],
            correctAnswer: 2,
            rationale: 'At the equivalence point, all the acid has been converted to CH₃COO⁻ (sodium ethanoate). CH₃COO⁻ is the conjugate base of a weak acid, so it hydrolyses slightly: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, producing excess OH⁻ and giving pH > 7.',
            topic: 'Titration Curves: Overview',
        },
        {
            id: 'mcq-t14-27',
            stem: 'Which indicator is suitable for a weak acid / strong base titration?',
            options: [
                'Methyl orange only (pH 2.7–4.7)',
                'Phenolphthalein only (pH 8.3–10.0)',
                'Both methyl orange and phenolphthalein',
                'Neither — no indicator works in this system',
            ],
            correctAnswer: 1,
            rationale: 'In a weak acid / strong base titration, the equivalence point is at pH 8–9. The steep region of the curve spans roughly pH 7–11. Phenolphthalein (pH 8.3–10.0) falls within this steep region and changes colour correctly. Methyl orange (pH 2.7–4.7) changes colour in the buffer region, far below the equivalence point — it is NOT suitable.',
            topic: 'Titration Curves: Overview',
        },
        {
            id: 'mcq-t14-28',
            stem: 'At the half-equivalence point of a weak acid titrated with a strong base, pH = pKa. Why?',
            options: [
                'Half the indicator has changed colour at this point',
                '[HA] = [A⁻], so the log term in the Henderson-Hasselbalch equation equals zero',
                'The buffer capacity is maximised so pH equals Ka',
                'The pH is exactly half the pKw value',
            ],
            correctAnswer: 1,
            rationale: 'At the half-equivalence point, exactly half the weak acid has been neutralised, so [HA] = [A⁻]. Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0 = pKa. This is how CP11 determines Ka experimentally.',
            topic: 'Titration Curves: Overview',
        },

        // ── Subtopic 7: Core Practical 11 ────────────────────────────────────
        {
            id: 'mcq-t14-29',
            stem: 'In Core Practical 11, at which point in the titration is the pH measured to determine Ka?',
            options: [
                'At the equivalence point (when phenolphthalein turns pink)',
                'At the half-equivalence point (half the volume of NaOH to reach equivalence)',
                'At the start, before any NaOH is added',
                'After adding excess NaOH beyond the equivalence point',
            ],
            correctAnswer: 1,
            rationale: 'At the half-equivalence point, [HA] = [A⁻], so pH = pKa. Ka is then calculated: Ka = 10⁻ᵖᴴ. The equivalence point tells us the volume of NaOH needed; half that volume gives the half-equivalence point where pH is measured.',
            topic: 'Core Practical 11: Determination of Ka',
        },
        {
            id: 'mcq-t14-30',
            stem: 'In CP11, why is a data logger with pH probe preferred over automatic use of a colour indicator alone?',
            options: [
                'Colour indicators are too expensive for school use',
                'A pH probe provides continuous numerical data, enabling accurate identification of the half-equivalence point from the titration curve',
                'Colour indicators are not compatible with NaOH solutions',
                'Data loggers work at temperatures near absolute zero',
            ],
            correctAnswer: 1,
            rationale: 'A data logger records pH continuously throughout the titration. This generates a full titration curve from which both the equivalence point and the half-equivalence point can be accurately identified. A colour indicator alone only marks the endpoint (equivalence point); it cannot locate the half-equivalence point.',
            topic: 'Core Practical 11: Determination of Ka',
        },
        {
            id: 'mcq-t14-31',
            stem: 'In CP11, why is phenolphthalein used as the indicator to identify the equivalence point?',
            options: [
                'Its colour change occurs exactly at pH 7',
                'Its colour change range (pH 8.3–10.0) falls within the steep section of the weak acid/strong base titration curve',
                'It is more accurate than the pH probe for locating the equivalence point',
                'It changes colour at the half-equivalence point',
            ],
            correctAnswer: 1,
            rationale: 'In a weak acid / strong base titration, the equivalence point is at pH 8–9 and the steep region spans ~pH 7–11. Phenolphthalein (colourless → pink, pH 8.3–10.0) changes colour within this steep region, marking the equivalence point correctly.',
            topic: 'Core Practical 11: Determination of Ka',
        },
        {
            id: 'mcq-t14-32',
            stem: 'In CP11, after reaching the equivalence point, a further 25 cm³ of weak acid (same concentration) is added. What does the measured pH equal at this new mixture?',
            options: [
                '7.00, because the solution becomes neutral',
                'pKa of the weak acid',
                '14 − pKa',
                'Ka / 2',
            ],
            correctAnswer: 1,
            rationale: 'Adding an equal additional volume of the acid makes the total volume of weak acid used exactly double the original NaOH volume. This creates a situation where the moles of CH₃COOH remaining ≈ moles of CH₃COO⁻ formed, so [HA] ≈ [A⁻] and pH = pKa. Ka = [H⁺] = 10⁻ᵖᴴ.',
            topic: 'Core Practical 11: Determination of Ka',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FILL-BLANK (~16 questions)
    // ─────────────────────────────────────────────────────────────────────────
    fillblank: [
        {
            id: 'fb-t14-1',
            stem: 'Complete the Brønsted-Lowry definitions.',
            template: 'A Brønsted-Lowry acid is a proton __BLANK__, and a Brønsted-Lowry base is a proton __BLANK__.',
            blanks: [{ answer: 'donor' }, { answer: 'acceptor' }],
            rationale: 'The Brønsted-Lowry model defines acid as proton donor and base as proton acceptor, applicable in any solvent or gas phase.',
        },
        {
            id: 'fb-t14-2',
            stem: 'Complete the statement about acid dissociation.',
            template: 'Strong acids __BLANK__ dissociate in water, whereas weak acids only __BLANK__ dissociate, establishing an equilibrium.',
            blanks: [{ answer: 'completely' }, { answer: 'partially' }],
            rationale: 'Strong acids (e.g. HCl, HNO₃) are ~100% dissociated; weak acids (e.g. CH₃COOH) are typically 1–10% dissociated.',
        },
        {
            id: 'fb-t14-3',
            stem: 'Complete the pH definition.',
            template: 'pH = −log₁₀[__BLANK__], where the square brackets denote concentration in mol dm⁻³.',
            blanks: [{ answer: 'H+' }],
            rationale: 'pH is defined as the negative base-10 logarithm of the hydrogen ion (H⁺) concentration.',
        },
        {
            id: 'fb-t14-4',
            stem: 'Fill in the ionic product of water.',
            template: 'At 25°C, the ionic product of water Kw = [H⁺][OH⁻] = __BLANK__ mol² dm⁻⁶. Therefore pKw = __BLANK__.',
            blanks: [{ answer: '1.0 × 10⁻¹⁴' }, { answer: '14' }],
            rationale: 'Kw = 1.0 × 10⁻¹⁴ at 25°C. pKw = −log(1.0 × 10⁻¹⁴) = 14. At this temperature, neutral pH = 7.00.',
        },
        {
            id: 'fb-t14-5',
            stem: 'Fill in the conjugate pair relationship.',
            template: 'A conjugate acid-base pair consists of two species that differ by exactly one __BLANK__. The species that has the extra H⁺ is the __BLANK__.',
            blanks: [{ answer: 'proton' }, { answer: 'acid' }],
            rationale: 'Conjugate pairs differ by one H⁺. The species with the H⁺ is the acid; the one without is the base.',
        },
        {
            id: 'fb-t14-6',
            stem: 'Complete the Ka expression.',
            template: 'For the equilibrium HA ⇌ H⁺ + A⁻, the acid dissociation constant is Ka = [H⁺][A⁻] / [__BLANK__].',
            blanks: [{ answer: 'HA' }],
            rationale: 'Ka = [products] / [reactants] = [H⁺][A⁻] / [HA]. Water concentration is omitted as it is effectively constant.',
        },
        {
            id: 'fb-t14-7',
            stem: 'Complete the pKa definition and comparison.',
            template: 'pKa = −log₁₀(__BLANK__). A lower pKa means a __BLANK__ acid.',
            blanks: [{ answer: 'Ka' }, { answer: 'stronger' }],
            rationale: 'pKa = −log Ka. Lower pKa means larger Ka means a greater tendency to donate protons, i.e. a stronger acid.',
        },
        {
            id: 'fb-t14-8',
            stem: 'State the simplified formula for [H⁺] of a weak acid.',
            template: 'For a weak acid of initial concentration c and dissociation constant Ka, the approximate formula is [H⁺] ≈ √(__BLANK__ × __BLANK__).',
            blanks: [{ answer: 'Ka' }, { answer: 'c' }],
            rationale: '[H⁺] = √(Ka × c) is valid when the approximation (c − x) ≈ c holds (when degree of dissociation < 5%).',
        },
        {
            id: 'fb-t14-9',
            stem: 'Complete the buffer definition.',
            template: 'A buffer solution is one that __BLANK__ significant changes in pH when a __BLANK__ amount of acid or base is added.',
            blanks: [{ answer: 'minimises' }, { answer: 'small' }],
            rationale: 'Critical exam wording: "minimises" (not "prevents") and "small amount" (a large addition overwhelms the buffer).',
        },
        {
            id: 'fb-t14-10',
            stem: 'Complete the statement about acidic buffers.',
            template: 'An acidic buffer is made from a weak __BLANK__ and the __BLANK__ of its conjugate base.',
            blanks: [{ answer: 'acid' }, { answer: 'salt' }],
            rationale: 'Example: ethanoic acid (weak acid) + sodium ethanoate (salt of conjugate base CH₃COO⁻) forms an acidic buffer at pH ≈ pKa of the acid.',
        },
        {
            id: 'fb-t14-11',
            stem: 'Describe how a buffer resists pH change on addition of acid.',
            template: 'When H⁺ ions are added to an acidic buffer, the conjugate __BLANK__ (A⁻) reacts with H⁺ to form the weak __BLANK__, consuming the added H⁺.',
            blanks: [{ answer: 'base' }, { answer: 'acid' }],
            rationale: 'A⁻ + H⁺ → HA. The conjugate base reservoir removes added H⁺, minimising the fall in pH.',
        },
        {
            id: 'fb-t14-12',
            stem: 'Complete the titration curve equivalence point statement.',
            template: 'For a strong acid + strong base titration, the equivalence point occurs at pH = __BLANK__. For a weak acid + strong base, the equivalence point occurs at pH __BLANK__ 7.',
            blanks: [{ answer: '7' }, { answer: 'above' }],
            rationale: 'SA + SB: NaCl formed; neutral → pH 7. WA + SB: conjugate base (e.g. CH₃COO⁻) hydrolyses → basic solution, pH > 7.',
        },
        {
            id: 'fb-t14-13',
            stem: 'Complete the indicator selection rule.',
            template: 'For a weak acid + strong base titration, phenolphthalein (pH __BLANK__–10.0) is suitable, but methyl orange (pH 2.7–__BLANK__) is NOT suitable because it changes colour in the buffer region.',
            blanks: [{ answer: '8.3' }, { answer: '4.7' }],
            rationale: 'The equivalence point of WA + SB is at pH 8–9. Phenolphthalein\'s range (8.3–10.0) falls in the steep section. Methyl orange (2.7–4.7) changes far below the equivalence point.',
        },
        {
            id: 'fb-t14-14',
            stem: 'Complete the half-equivalence point relationship for CP11.',
            template: 'At the half-equivalence point of a weak acid titration, [HA] = [__BLANK__], so pH = __BLANK__.',
            blanks: [{ answer: 'A⁻' }, { answer: 'pKa' }],
            rationale: 'When [HA] = [A⁻], Henderson-Hasselbalch gives pH = pKa + log(1) = pKa. Therefore Ka = 10⁻ᵖᴴ at this point.',
        },
        {
            id: 'fb-t14-15',
            stem: 'Complete the statement about HCl pH at 25°C.',
            template: 'A 0.010 mol dm⁻³ solution of HCl has [H⁺] = __BLANK__ mol dm⁻³ and pH = __BLANK__.',
            blanks: [{ answer: '0.010' }, { answer: '2' }],
            rationale: 'HCl is a strong acid: fully dissociates. [H⁺] = [HCl] = 0.010 mol dm⁻³. pH = −log(0.010) = 2.',
        },
        {
            id: 'fb-t14-16',
            stem: 'Complete the statement about Ka units.',
            template: 'Ka has units of __BLANK__ dm⁻³. This is because the numerator has concentration __BLANK__ and the denominator has concentration¹.',
            blanks: [{ answer: 'mol' }, { answer: 'squared' }],
            rationale: 'Ka = [H⁺][A⁻]/[HA]: numerator is (mol dm⁻³)² and denominator is (mol dm⁻³)¹, giving net units of mol dm⁻³.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // DRAG-DROP (10 questions)
    // ─────────────────────────────────────────────────────────────────────────
    dragdrop: [
        {
            id: 'dd-t14-1',
            stem: 'Classify each species as a Strong Acid, Weak Acid, Strong Base, or Weak Base.',
            categories: ['Strong Acid', 'Weak Acid', 'Strong Base', 'Weak Base'],
            items: [
                { text: 'HCl', category: 'Strong Acid' },
                { text: 'CH₃COOH', category: 'Weak Acid' },
                { text: 'NaOH', category: 'Strong Base' },
                { text: 'NH₃', category: 'Weak Base' },
                { text: 'HNO₃', category: 'Strong Acid' },
                { text: 'HF', category: 'Weak Acid' },
                { text: 'KOH', category: 'Strong Base' },
                { text: 'CH₃CH₂COOH', category: 'Weak Acid' },
            ],
        },
        {
            id: 'dd-t14-2',
            stem: 'Match each acid-base combination to the pH of its equivalence point.',
            categories: ['pH = 7', 'pH > 7', 'pH < 7'],
            items: [
                { text: 'HCl + NaOH', category: 'pH = 7' },
                { text: 'CH₃COOH + NaOH', category: 'pH > 7' },
                { text: 'HCl + NH₃(aq)', category: 'pH < 7' },
                { text: 'HNO₃ + KOH', category: 'pH = 7' },
                { text: 'HCOOH + NaOH', category: 'pH > 7' },
                { text: 'H₂SO₄ + Ca(OH)₂', category: 'pH = 7' },
            ],
        },
        {
            id: 'dd-t14-3',
            stem: 'Sort each substance into the correct buffer category.',
            categories: ['Component of an acidic buffer', 'Component of a basic buffer', 'Not a buffer component'],
            items: [
                { text: 'CH₃COOH (ethanoic acid)', category: 'Component of an acidic buffer' },
                { text: 'CH₃COONa (sodium ethanoate)', category: 'Component of an acidic buffer' },
                { text: 'NH₃ (ammonia)', category: 'Component of a basic buffer' },
                { text: 'NH₄Cl (ammonium chloride)', category: 'Component of a basic buffer' },
                { text: 'HCl (hydrochloric acid)', category: 'Not a buffer component' },
                { text: 'NaCl (sodium chloride)', category: 'Not a buffer component' },
            ],
        },
        {
            id: 'dd-t14-4',
            stem: 'Match each titration type to the most suitable indicator.',
            categories: ['Use methyl orange', 'Use phenolphthalein', 'Use either indicator'],
            items: [
                { text: 'Strong acid + Strong base (e.g. HCl + NaOH)', category: 'Use either indicator' },
                { text: 'Weak acid + Strong base (e.g. CH₃COOH + NaOH)', category: 'Use phenolphthalein' },
                { text: 'Strong acid + Weak base (e.g. HCl + NH₃)', category: 'Use methyl orange' },
                { text: 'HNO₃ + NaOH', category: 'Use either indicator' },
                { text: 'HCOOH + NaOH', category: 'Use phenolphthalein' },
                { text: 'HCl + aqueous methylamine', category: 'Use methyl orange' },
            ],
        },
        {
            id: 'dd-t14-5',
            stem: 'Classify each acid by the number of protons it can donate.',
            categories: ['Monoprotic', 'Diprotic', 'Triprotic'],
            items: [
                { text: 'HCl', category: 'Monoprotic' },
                { text: 'H₂SO₄', category: 'Diprotic' },
                { text: 'H₃PO₄', category: 'Triprotic' },
                { text: 'CH₃COOH', category: 'Monoprotic' },
                { text: 'H₂CO₃', category: 'Diprotic' },
                { text: 'HNO₃', category: 'Monoprotic' },
                { text: 'H₂S', category: 'Diprotic' },
            ],
        },
        {
            id: 'dd-t14-6',
            stem: 'Classify each solution as acidic, neutral, or alkaline at 25°C.',
            categories: ['Acidic (pH < 7)', 'Neutral (pH = 7)', 'Alkaline (pH > 7)'],
            items: [
                { text: '0.01 mol dm⁻³ HCl (pH = 2)', category: 'Acidic (pH < 7)' },
                { text: 'Pure water at 25°C', category: 'Neutral (pH = 7)' },
                { text: '0.01 mol dm⁻³ NaOH', category: 'Alkaline (pH > 7)' },
                { text: 'CH₃COONa solution (sodium ethanoate)', category: 'Alkaline (pH > 7)' },
                { text: 'NH₄Cl solution (ammonium chloride)', category: 'Acidic (pH < 7)' },
                { text: 'NaCl solution (sodium chloride)', category: 'Neutral (pH = 7)' },
            ],
        },
        {
            id: 'dd-t14-7',
            stem: 'In the reaction CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺, sort each species into its role.',
            categories: ['Brønsted-Lowry Acid', 'Brønsted-Lowry Base', 'Conjugate Acid', 'Conjugate Base'],
            items: [
                { text: 'CH₃COOH', category: 'Brønsted-Lowry Acid' },
                { text: 'H₂O', category: 'Brønsted-Lowry Base' },
                { text: 'H₃O⁺', category: 'Conjugate Acid' },
                { text: 'CH₃COO⁻', category: 'Conjugate Base' },
            ],
        },
        {
            id: 'dd-t14-8',
            stem: 'Sort the following acid pKa values from strongest to weakest acid (drag into order: left = strongest).',
            categories: ['Strongest acid', 'Moderate acid', 'Weak acid', 'Very weak acid'],
            items: [
                { text: 'CCl₃COOH (pKa = 0.65)', category: 'Strongest acid' },
                { text: 'HCOOH (pKa = 3.77)', category: 'Moderate acid' },
                { text: 'CH₃COOH (pKa = 4.76)', category: 'Weak acid' },
                { text: 'HCN (pKa = 9.31)', category: 'Very weak acid' },
            ],
        },
        {
            id: 'dd-t14-9',
            stem: 'Sort each reaction into whether it shows the buffer resisting an acid addition or a base addition.',
            categories: ['Buffer resisting acid (H⁺ addition)', 'Buffer resisting base (OH⁻ addition)'],
            items: [
                { text: 'CH₃COO⁻ + H⁺ → CH₃COOH', category: 'Buffer resisting acid (H⁺ addition)' },
                { text: 'CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O', category: 'Buffer resisting base (OH⁻ addition)' },
                { text: 'NH₃ + H⁺ → NH₄⁺', category: 'Buffer resisting acid (H⁺ addition)' },
                { text: 'NH₄⁺ + OH⁻ → NH₃ + H₂O', category: 'Buffer resisting base (OH⁻ addition)' },
            ],
        },
        {
            id: 'dd-t14-10',
            stem: 'Sort each piece of CP11 apparatus or chemical into its correct role.',
            categories: ['Contains titrant (NaOH)', 'Contains analyte (weak acid)', 'Measures pH continuously'],
            items: [
                { text: 'Burette', category: 'Contains titrant (NaOH)' },
                { text: 'Conical flask', category: 'Contains analyte (weak acid)' },
                { text: 'Data logger + pH probe', category: 'Measures pH continuously' },
                { text: 'Standard NaOH solution', category: 'Contains titrant (NaOH)' },
                { text: 'Ethanoic acid solution', category: 'Contains analyte (weak acid)' },
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // SEQUENCE (8 questions)
    // ─────────────────────────────────────────────────────────────────────────
    sequence: [
        {
            id: 'seq-t14-1',
            stem: 'Put these steps in the correct order to calculate the pH of a strong acid (e.g. 0.050 mol dm⁻³ HCl):',
            steps: [
                'Write the full dissociation equation: HCl → H⁺ + Cl⁻',
                'State that [H⁺] = [HCl] = 0.050 mol dm⁻³ (complete dissociation)',
                'Apply pH = −log₁₀[H⁺]',
                'Calculate: pH = −log(0.050) = 1.30',
            ],
        },
        {
            id: 'seq-t14-2',
            stem: 'Put these steps in the correct order to calculate the pH of a weak acid using Ka:',
            steps: [
                'Write the equilibrium: HA ⇌ H⁺ + A⁻ and the Ka expression',
                'Apply the approximation: [H⁺] ≈ √(Ka × c)',
                'Calculate [H⁺] numerically',
                'Verify the approximation: check [H⁺]/c × 100% < 5%',
                'Calculate pH = −log₁₀[H⁺]',
            ],
        },
        {
            id: 'seq-t14-3',
            stem: 'Put these steps in the correct order to identify conjugate acid-base pairs in an equation:',
            steps: [
                'Write out the full equilibrium equation',
                'Identify the species that loses H⁺ (this is the acid)',
                'Identify the species that gains H⁺ (this is the base)',
                'The acid minus H⁺ gives its conjugate base',
                'The base plus H⁺ gives its conjugate acid',
                'State both conjugate pairs: (acid, conjugate base) and (base, conjugate acid)',
            ],
        },
        {
            id: 'seq-t14-4',
            stem: 'Put these steps in the correct order to prepare an acidic buffer by partial neutralisation of ethanoic acid with NaOH:',
            steps: [
                'Measure out an excess of weak acid (e.g. CH₃COOH) relative to NaOH',
                'Add the measured volume of NaOH to the acid — NaOH is the limiting reagent',
                'The reaction CH₃COOH + NaOH → CH₃COONa + H₂O goes to completion',
                'The resulting solution contains excess CH₃COOH (reservoir) and CH₃COO⁻ (reservoir)',
                'Confirm buffer action: the system can resist both acid and base additions',
            ],
        },
        {
            id: 'seq-t14-5',
            stem: 'Put these steps in the correct order to calculate the pH of an acidic buffer (direct mix method):',
            steps: [
                'Calculate moles of weak acid (HA) and moles of conjugate base salt (A⁻)',
                'Calculate [HA] and [A⁻] by dividing moles by total volume',
                'Use [H⁺] = Ka × [HA] / [A⁻]',
                'Calculate [H⁺] numerically',
                'Calculate pH = −log₁₀[H⁺]',
            ],
        },
        {
            id: 'seq-t14-6',
            stem: 'Put the CP11 method steps in the correct order:',
            steps: [
                'Calibrate the pH probe using standard buffer solutions',
                'Pipette 25 cm³ of ethanoic acid into the conical flask and add phenolphthalein',
                'Fill the burette with standard NaOH solution and record the start reading',
                'Titrate slowly while recording pH continuously on the data logger; stop at permanent pink (equivalence point)',
                'Identify the equivalence volume from the data and calculate half that volume',
                'Use the pH at the half-equivalence point: Ka = 10⁻ᵖᴴ',
            ],
        },
        {
            id: 'seq-t14-7',
            stem: 'Put these steps in the correct order to verify whether the weak acid approximation is valid:',
            steps: [
                'Calculate [H⁺] using [H⁺] = √(Ka × c)',
                'Divide [H⁺] by the initial concentration c',
                'Multiply by 100 to obtain the percentage dissociation',
                'If the result is less than 5%, the approximation is valid',
                'If the result is ≥ 5%, solve the quadratic equation Ka = x² / (c − x) instead',
            ],
        },
        {
            id: 'seq-t14-8',
            stem: 'Put these steps in the correct order to determine Ka from a titration curve (CP11 graphical method):',
            steps: [
                'Plot the full titration curve (pH vs. volume of NaOH added)',
                'Identify the equivalence point from the steepest part of the curve',
                'Determine the half-equivalence volume (exactly half the volume at equivalence)',
                'Read the pH at the half-equivalence point from the graph',
                'Calculate Ka: Ka = 10⁻ᵖᴴ (since pH = pKa at this point)',
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // KEYWORD CHECK (12 questions)
    // ─────────────────────────────────────────────────────────────────────────
    keyword: [
        {
            id: 'kw-t14-1',
            stem: 'Define a Brønsted-Lowry acid. [2 marks]',
            marks: 2,
            keywords: ['proton', 'donor', 'H+', 'donates'],
            modelAnswer: 'A Brønsted-Lowry acid is a proton (H⁺) donor — a species that donates a proton to another species in a chemical reaction.',
        },
        {
            id: 'kw-t14-2',
            stem: 'Explain what is meant by a conjugate acid-base pair. [2 marks]',
            marks: 2,
            keywords: ['differ', 'one', 'proton', 'H+', 'conjugate'],
            modelAnswer: 'A conjugate acid-base pair consists of two species that differ by exactly one proton (H⁺). The species with the extra H⁺ is the acid; the species formed after losing H⁺ is its conjugate base.',
        },
        {
            id: 'kw-t14-3',
            stem: 'Define pH. [1 mark]',
            marks: 1,
            keywords: ['log', 'H+', 'concentration', 'negative'],
            modelAnswer: 'pH = −log₁₀[H⁺], where [H⁺] is the concentration of hydrogen ions in mol dm⁻³.',
        },
        {
            id: 'kw-t14-4',
            stem: 'Explain why 0.10 mol dm⁻³ ethanoic acid has a higher pH than 0.10 mol dm⁻³ hydrochloric acid. [3 marks]',
            marks: 3,
            keywords: ['weak', 'partially', 'dissociates', 'equilibrium', 'fewer', 'H+', 'strong', 'completely'],
            modelAnswer: 'Ethanoic acid is a weak acid that only partially dissociates in water, establishing an equilibrium (CH₃COOH ⇌ H⁺ + CH₃COO⁻). This produces far fewer H⁺ ions than HCl, which is a strong acid that completely dissociates. The lower [H⁺] in the ethanoic acid solution means a higher pH.',
        },
        {
            id: 'kw-t14-5',
            stem: 'Write the expression for Ka for the weak acid HA, and state its units. [2 marks]',
            marks: 2,
            keywords: ['Ka', 'H+', 'A-', 'HA', 'mol', 'dm'],
            modelAnswer: 'Ka = [H⁺][A⁻] / [HA]. Ka has units of mol dm⁻³.',
        },
        {
            id: 'kw-t14-6',
            stem: 'State the two assumptions made when using the formula [H⁺] ≈ √(Ka × c) for a weak acid. [2 marks]',
            marks: 2,
            keywords: ['negligible', 'dissociates', 'initial', 'concentration', 'water', 'autoionisation', 'H+'],
            modelAnswer: 'Assumption 1: The amount of acid that dissociates (x) is negligible compared to the initial concentration c, so (c − x) ≈ c. Assumption 2: The contribution of H⁺ from water autoionisation is negligible compared to H⁺ from the weak acid.',
        },
        {
            id: 'kw-t14-7',
            stem: 'Define a buffer solution and describe how an acidic buffer resists pH change when a small amount of acid (H⁺) is added. [4 marks]',
            marks: 4,
            keywords: ['minimises', 'pH', 'small', 'acid', 'conjugate base', 'A-', 'H+', 'HA', 'equilibrium'],
            modelAnswer: 'A buffer solution minimises significant changes in pH when a small amount of acid or base is added. When H⁺ is added to an acidic buffer (containing HA and A⁻), the conjugate base A⁻ reacts with the added H⁺: A⁻ + H⁺ → HA. This reaction consumes the added H⁺, absorbing it into the weak acid reservoir, so the pH falls only slightly.',
        },
        {
            id: 'kw-t14-8',
            stem: 'State the pH at the equivalence point when ethanoic acid is titrated with aqueous NaOH, and explain why. [2 marks]',
            marks: 2,
            keywords: ['greater', 'above', 'alkaline', 'CH3COO-', 'hydrolyses', 'OH-', 'conjugate base'],
            modelAnswer: 'The equivalence point pH is greater than 7 (typically pH 8–9). At the equivalence point, all the ethanoic acid has been converted to sodium ethanoate (CH₃COO⁻). The ethanoate ion is the conjugate base of a weak acid and hydrolyses: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, producing excess OH⁻ ions.',
        },
        {
            id: 'kw-t14-9',
            stem: 'Explain why phenolphthalein, rather than methyl orange, should be used for a weak acid / strong base titration. [2 marks]',
            marks: 2,
            keywords: ['phenolphthalein', 'steep', 'equivalence', 'methyl orange', 'buffer', 'range'],
            modelAnswer: 'Phenolphthalein (pH 8.3–10.0) is suitable because its colour change range falls within the steep region of the titration curve, which spans approximately pH 7–11 around the equivalence point (pH ≈ 8–9). Methyl orange (pH 2.7–4.7) changes colour in the buffer region, far below the equivalence point, giving a large error.',
        },
        {
            id: 'kw-t14-10',
            stem: 'Describe how the half-equivalence point is used in CP11 to determine Ka of a weak acid. [3 marks]',
            marks: 3,
            keywords: ['half', 'equivalence', 'pH', 'pKa', 'Ka', '[H+]', 'equal', '[HA]', '[A-]'],
            modelAnswer: 'At the half-equivalence point, exactly half the weak acid has been neutralised, so [HA] = [A⁻]. By Henderson-Hasselbalch: pH = pKa + log(1) = pKa. Therefore pKa = pH (read from the data logger at half the equivalence volume). Ka is then calculated as Ka = 10⁻ᵖᴴ (or Ka = 10⁻ᵖᴷᵃ).',
        },
        {
            id: 'kw-t14-11',
            stem: 'Define an amphoteric substance and give one example. [2 marks]',
            marks: 2,
            keywords: ['acid', 'base', 'donate', 'accept', 'proton', 'water', 'amphoteric'],
            modelAnswer: 'An amphoteric substance can act as both a Brønsted-Lowry acid (proton donor) and a Brønsted-Lowry base (proton acceptor), depending on its reaction partner. Water (H₂O) is the classic example: it donates H⁺ to form OH⁻ or accepts H⁺ to form H₃O⁺.',
        },
        {
            id: 'kw-t14-12',
            stem: 'Explain the effect of increasing temperature on Kw and on the pH of pure water. Is pure water still neutral? [3 marks]',
            marks: 3,
            keywords: ['endothermic', 'Le Chatelier', 'Kw', 'increases', 'neutral', 'pH', 'equal', 'H+', 'OH-'],
            modelAnswer: 'The autoionisation of water (H₂O ⇌ H⁺ + OH⁻) is endothermic. By Le Chatelier\'s principle, increasing temperature shifts the equilibrium to the right, producing more H⁺ and OH⁻. Therefore Kw increases and the neutral pH decreases below 7. However, pure water remains neutral because [H⁺] = [OH⁻] at all temperatures — neutrality means equal ion concentrations, not pH = 7.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FLASHCARDS (26 cards across all 8 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    flashcards: [
        // ── Subtopic 0: Brønsted-Lowry ──────────────────────────────────────
        {
            id: 'fc-t14-1',
            front: 'Define a Brønsted-Lowry acid.',
            back: 'A proton (H⁺) donor — a species that transfers a proton to another species in a reaction.',
            topic: 'Brønsted-Lowry Model',
        },
        {
            id: 'fc-t14-2',
            front: 'Define a Brønsted-Lowry base.',
            back: 'A proton (H⁺) acceptor — a species that accepts a proton from another species. Must have a lone pair of electrons to receive H⁺.',
            topic: 'Brønsted-Lowry Model',
        },
        {
            id: 'fc-t14-3',
            front: 'What is an amphoteric substance? Give an example.',
            back: 'A substance that can act as both a proton donor (acid) and proton acceptor (base).\n• Water (H₂O): acts as a base with HCl; acts as an acid with NH₃\n• HSO₄⁻: conjugate base of H₂SO₄ and conjugate acid of SO₄²⁻',
            topic: 'Brønsted-Lowry Model',
        },
        // ── Subtopic 1: Conjugate Pairs ───────────────────────────────────────
        {
            id: 'fc-t14-4',
            front: 'What is a conjugate acid-base pair?',
            back: 'Two species that differ by exactly one proton (H⁺).\n• Acid → loses H⁺ → conjugate base\n• Base → gains H⁺ → conjugate acid\n\nExample: (HCl, Cl⁻) and (H₂O, H₃O⁺) in HCl + H₂O → H₃O⁺ + Cl⁻',
            topic: 'Conjugate Acid-Base Pairs',
        },
        {
            id: 'fc-t14-5',
            front: 'State the relationship between acid strength and conjugate base strength.',
            back: 'Inverse relationship:\n• Strong acid → very weak conjugate base (e.g. HCl → Cl⁻, essentially inert)\n• Weak acid → relatively stronger conjugate base (e.g. CH₃COOH → CH₃COO⁻)\n\nReason: if the acid readily donates H⁺, its conjugate base has little pull to get it back.',
            topic: 'Conjugate Acid-Base Pairs',
        },
        {
            id: 'fc-t14-6',
            front: 'List the strong acids you must know for A-Level.',
            back: '• HCl (hydrochloric)\n• HBr (hydrobromic)\n• HI (hydroiodic)\n• HNO₃ (nitric)\n• H₂SO₄ (sulfuric — first dissociation only)\n\nAll completely dissociate (~100%) in aqueous solution.',
            topic: 'Brønsted-Lowry Model',
        },
        // ── Subtopic 2: pH Scale ──────────────────────────────────────────────
        {
            id: 'fc-t14-7',
            front: 'State the pH formula and how to find [H⁺] from pH.',
            back: 'pH = −log₁₀[H⁺]\n[H⁺] = 10⁻ᵖᴴ\n\nEach 1 unit increase in pH = 10× decrease in [H⁺]',
            topic: 'The pH Scale',
        },
        {
            id: 'fc-t14-8',
            front: 'State the value of Kw at 25°C and the relationship between pH and pOH.',
            back: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25°C\npKw = 14 at 25°C\npH + pOH = pKw = 14 (at 25°C)\n\nNeutral solution: [H⁺] = [OH⁻] → pH = 7 ONLY at 25°C',
            topic: 'The pH Scale',
        },
        {
            id: 'fc-t14-9',
            front: 'Explain why pH 7 is not always neutral.',
            back: 'Neutral means [H⁺] = [OH⁻], not necessarily pH = 7.\nKw increases with temperature (autoionisation is endothermic).\n• At 0°C: neutral pH ≈ 7.47\n• At 25°C: neutral pH = 7.00\n• At 40°C: neutral pH ≈ 6.77\n\nPure water at 40°C has pH ≈ 6.77 but is still neutral.',
            topic: 'The pH Scale',
        },
        // ── Subtopic 3: Strong vs Weak Acids ─────────────────────────────────
        {
            id: 'fc-t14-10',
            front: 'What is the difference between acid strength and acid concentration?',
            back: 'Strength = proportion of molecules that ionise in water\n• Strong acid: ~100% dissociation (HCl, H₂SO₄)\n• Weak acid: partial dissociation (1–10%) (CH₃COOH, HF)\n\nConcentration = moles of acid per dm³ (concentrated vs dilute)\n\nYou can have a concentrated weak acid or a dilute strong acid.',
            topic: 'Strong vs Weak Acids',
        },
        {
            id: 'fc-t14-11',
            front: 'Define degree of dissociation (α) and state how it changes with dilution.',
            back: 'α = fraction of acid molecules dissociated at equilibrium (0 to 1; or 0% to 100%)\n[H⁺] = α × c\n\nAs concentration decreases (dilution), α increases — dilution shifts HA ⇌ H⁺ + A⁻ to the right (Le Chatelier).',
            topic: 'Strong vs Weak Acids',
        },
        // ── Subtopic 4: Ka ────────────────────────────────────────────────────
        {
            id: 'fc-t14-12',
            front: 'Write the Ka expression for HA ⇌ H⁺ + A⁻. State its units.',
            back: 'Ka = [H⁺][A⁻] / [HA]\n\nUnits: mol dm⁻³\n(numerator is concentration², denominator is concentration¹ → net mol dm⁻³)\n\nWater is omitted — its concentration is essentially constant.',
            topic: 'Ka and pKa',
        },
        {
            id: 'fc-t14-13',
            front: 'State the simplified formula for [H⁺] of a weak acid and the two assumptions.',
            back: '[H⁺] ≈ √(Ka × c)\n\nAssumption 1: (c − x) ≈ c → amount dissociated negligible vs initial conc.\nAssumption 2: [H⁺] from water autoionisation is negligible.\n\nVerify: [H⁺]/c × 100 < 5% for Assumption 1 to hold.',
            topic: 'Ka and pKa',
        },
        {
            id: 'fc-t14-14',
            front: 'Compare Ka and pKa for CH₃COOH, HCOOH, and HCN.',
            back: '• HCOOH (methanoic acid): Ka = 1.70 × 10⁻⁴, pKa = 3.77 — strongest of the three\n• CH₃COOH (ethanoic acid): Ka = 1.74 × 10⁻⁵, pKa = 4.76 — moderate\n• HCN (hydrogen cyanide): Ka = 4.9 × 10⁻¹⁰, pKa = 9.31 — very weak\n\nLower pKa = stronger acid.',
            topic: 'Ka and pKa',
        },
        // ── Subtopic 5: Buffers ───────────────────────────────────────────────
        {
            id: 'fc-t14-15',
            front: 'Define a buffer solution. What are the two ways to make an acidic buffer?',
            back: 'Buffer: solution that minimises significant pH changes when small amounts of acid or base are added.\n\nTwo ways to make an acidic buffer:\n1. Direct mix: weak acid + salt of conjugate base (e.g. CH₃COOH + CH₃COONa)\n2. Partial neutralisation: excess weak acid + strong alkali (e.g. excess CH₃COOH + limited NaOH)',
            topic: 'Buffer Solutions',
        },
        {
            id: 'fc-t14-16',
            front: 'Describe how an acidic buffer resists pH change when (a) acid is added, (b) base is added.',
            back: '(a) Add H⁺: conjugate base removes it\n   A⁻ + H⁺ → HA\n   Large A⁻ reservoir absorbs added H⁺.\n\n(b) Add OH⁻: weak acid removes it\n   HA + OH⁻ → A⁻ + H₂O\n   Large HA reservoir neutralises added OH⁻.\n\nIn both cases the pH changes only slightly.',
            topic: 'Buffer Solutions',
        },
        {
            id: 'fc-t14-17',
            front: 'State the formula used to calculate [H⁺] in a buffer, and what it simplifies to when [A⁻] = [HA].',
            back: '[H⁺] = Ka × [HA] / [A⁻]   (derived from Ka expression)\n\nHenderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])\n\nWhen [A⁻] = [HA]: log(1) = 0 → pH = pKa\n(This is also the half-equivalence point of a titration.)',
            topic: 'Buffer Solutions',
        },
        // ── Subtopic 6: Titration Curves ──────────────────────────────────────
        {
            id: 'fc-t14-18',
            front: 'State the equivalence point pH for each acid-base combination.',
            back: '• Strong acid + Strong base → pH = 7 (neutral salt formed)\n• Weak acid + Strong base → pH > 7 (conjugate base hydrolyses → OH⁻)\n• Strong acid + Weak base → pH < 7 (conjugate acid hydrolyses → H⁺)\n• Weak acid + Weak base → No sharp equivalence point',
            topic: 'Titration Curves',
        },
        {
            id: 'fc-t14-19',
            front: 'Which indicator is appropriate for each titration type? Explain why.',
            back: '• SA + SB → either methyl orange OR phenolphthalein (both lie in the steep pH 2–12 region)\n• WA + SB → phenolphthalein ONLY (equiv. point pH 8–9; MO changes too early in buffer region)\n• SA + WB → methyl orange ONLY (equiv. point pH 5–6; phenolphthalein changes too late)\n\nRule: indicator range must fall within the steep section of the curve.',
            topic: 'Titration Curves',
        },
        {
            id: 'fc-t14-20',
            front: 'What is the half-equivalence point and what can be measured there?',
            back: 'The half-equivalence point occurs when exactly half the acid has been neutralised.\n• At this point: [HA] = [A⁻]\n• Henderson-Hasselbalch: pH = pKa + log(1) = pKa\n\nTherefore: measuring pH at the half-equivalence point directly gives pKa (and Ka = 10⁻ᵖᴷᵃ).',
            topic: 'Titration Curves',
        },
        {
            id: 'fc-t14-21',
            front: 'Compare the shapes of the four types of titration curves.',
            back: '• SA + SB: starts very low pH (~1), gentle rise, very steep change at pH 7, levels off ~pH 13\n• WA + SB: starts moderate pH (~3), buffer plateau, steep rise at pH 8–9, levels off ~pH 13\n• SA + WB: starts low pH, steep drop around pH 5–6, buffer plateau, levels near pH 11\n• WA + WB: no steep region — no suitable indicator; pH changes gradually throughout',
            topic: 'Titration Curves',
        },
        // ── Subtopic 7: CP11 ────────────────────────────────────────────────
        {
            id: 'fc-t14-22',
            front: 'State the apparatus used in CP11 and the purpose of each key piece.',
            back: '• Burette: delivers measured volumes of standard NaOH\n• Pipette (25 cm³): transfers accurate volume of ethanoic acid\n• Conical flask: reaction vessel for acid + NaOH\n• pH probe + data logger: continuous, accurate pH measurement throughout\n• Phenolphthalein: identifies equivalence point (colourless → permanent pink)',
            topic: 'Core Practical 11',
        },
        {
            id: 'fc-t14-23',
            front: 'Describe the key safety precautions in CP11.',
            back: '• Wear eye protection throughout — NaOH is corrosive; ethanoic acid is irritant\n• Avoid skin contact; wash with water if contact occurs\n• Handle burette carefully — do not overtighten clamp (risk of cracking glass)\n• Ensure clamp stand is stable to prevent burette toppling',
            topic: 'Core Practical 11',
        },
        {
            id: 'fc-t14-24',
            front: 'Describe possible sources of error in CP11 and how to improve accuracy.',
            back: 'Sources of error:\n• Air bubbles in burette → incorrect volume reading\n• Misidentifying the exact equivalence point (human error with phenolphthalein)\n• pH probe not calibrated correctly\n• Parallax error when reading burette\n\nImprovements:\n• Use data logger for continuous pH recording\n• Calibrate pH probe with buffer solutions\n• Repeat titration and average results',
            topic: 'Core Practical 11',
        },
        {
            id: 'fc-t14-25',
            front: 'Why is a data logger with pH probe used in CP11 rather than relying solely on a colour indicator?',
            back: 'The data logger records pH continuously as NaOH is added, generating a complete titration curve.\nThis allows:\n• Accurate identification of the equivalence point (steepest gradient)\n• Accurate identification of the half-equivalence point (half the volume at equivalence)\n• Ka determination: Ka = 10⁻ᵖᴴ at half-equivalence\n\nA colour indicator alone can only mark the endpoint, not provide the titration curve.',
            topic: 'Core Practical 11',
        },
        {
            id: 'fc-t14-26',
            front: 'Summarise the key relationships between Ka, pKa, and acid strength.',
            back: '• Large Ka → strong(er) weak acid → small pKa\n• Small Ka → weak(er) weak acid → large pKa\n• pKa = −log Ka;   Ka = 10⁻ᵖᴷᵃ\n• Lower pKa = more acidic\n\nTypical weak acid range:\n  Ka: 10⁻³ to 10⁻¹⁰ mol dm⁻³\n  pKa: 3 to 10',
            topic: 'Ka and pKa',
        },
    ],
};
