export const exercises_chemistry_2_9 = {

    // ─────────────────────────────────────────────────────────────────────────
    // MCQ  (~30 questions, covering all 8 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    mcq: [

        // Subtopic 0 – Rate of reaction and calculating from graphs
        {
            id: 'mcq-t9-1',
            stem: 'Which expression gives the units of rate of reaction when concentration is measured in mol dm⁻³ and time in seconds?',
            options: [
                'mol dm⁻³',
                'mol dm⁻³ s⁻¹',
                'dm³ mol⁻¹ s⁻¹',
                's⁻¹',
            ],
            correctAnswer: 1,
            rationale: 'Rate = Δ[concentration] / Δtime, so units = mol dm⁻³ / s = mol dm⁻³ s⁻¹. dm³ mol⁻¹ s⁻¹ are units for a second-order rate constant, not for rate itself. s⁻¹ is the unit for a first-order rate constant.',
            topic: 'Rate of reaction and calculating from graphs',
        },
        {
            id: 'mcq-t9-2',
            stem: 'On a concentration–time graph, the instantaneous rate of reaction at a particular moment is found by:',
            options: [
                'Dividing the total concentration change by the total time elapsed',
                'Drawing a tangent at that point and calculating its gradient',
                'Reading off the concentration at that time',
                'Calculating the area under the curve up to that time',
            ],
            correctAnswer: 1,
            rationale: 'The instantaneous rate equals the gradient of the tangent to the curve at that time (Δy/Δx of the tangent). Dividing total Δ[c]/total time gives the mean rate, not instantaneous. Area under the curve is not related to rate. Concentration alone is not a rate.',
            topic: 'Rate of reaction and calculating from graphs',
        },
        {
            id: 'mcq-t9-3',
            stem: 'Why is the rate of reaction fastest at the very beginning of a reaction?',
            options: [
                'Temperature is highest at the start',
                'The activation energy is lowest at the start',
                'Reactant concentration is highest, giving the most frequent collisions',
                'The catalyst is freshest and most active at the start',
            ],
            correctAnswer: 2,
            rationale: 'At the start, reactant concentration is at its maximum, so particles are most closely packed and collision frequency is highest, giving the greatest rate. Temperature and activation energy are essentially unchanged during the reaction. The question assumes no catalyst.',
            topic: 'Rate of reaction and calculating from graphs',
        },
        {
            id: 'mcq-t9-4',
            stem: 'On a volume-of-gas–time graph for a reaction that produces a gas, what does the graph look like when the limiting reactant is fully consumed?',
            options: [
                'The line continues rising steeply',
                'The line becomes horizontal (flat)',
                'The line begins to fall',
                'The line shows a sudden sharp peak',
            ],
            correctAnswer: 1,
            rationale: 'Once the limiting reactant is used up, no more gas can be produced, so the volume remains constant and the line becomes horizontal. The line cannot fall (gas does not disappear) and there is no peak.',
            topic: 'Rate of reaction and calculating from graphs',
        },

        // Subtopic 1 – Collision theory and activation energy
        {
            id: 'mcq-t9-5',
            stem: 'Which TWO conditions must be met for a collision between reactant particles to be successful?',
            options: [
                'Temperature above 25°C AND particles must be ions',
                'Energy equal to or greater than Ea AND correct collision geometry/orientation',
                'Energy equal to or greater than Ea AND concentration above 1 mol dm⁻³',
                'Correct collision geometry AND presence of a catalyst',
            ],
            correctAnswer: 1,
            rationale: 'Collision theory states a reaction occurs only if: (1) colliding particles possess kinetic energy ≥ activation energy AND (2) they collide with the correct orientation/geometry. Temperature, ion character, and catalyst are separate factors — not the two core collision requirements.',
            topic: 'Collision theory and activation energy',
        },
        {
            id: 'mcq-t9-6',
            stem: 'Activation energy is best defined as:',
            options: [
                'The total energy released when bonds form in the products',
                'The average kinetic energy of all molecules in a sample',
                'The minimum energy that colliding particles must possess for a reaction to occur',
                'The energy difference between reactants and products',
            ],
            correctAnswer: 2,
            rationale: 'Activation energy (Ea) is the minimum energy threshold required for a collision to result in a reaction. It is not the total bond-forming energy, nor the average kinetic energy, nor the enthalpy change (which is reactant–product energy difference).',
            topic: 'Collision theory and activation energy',
        },
        {
            id: 'mcq-t9-7',
            stem: 'Steric hindrance reduces reaction rate because:',
            options: [
                'It increases the activation energy of the reaction',
                'Bulky groups physically block the reactive site, increasing the proportion of non-reactive collisions',
                'It reduces the concentration of reactants near the active site',
                'It lowers the temperature of the system',
            ],
            correctAnswer: 1,
            rationale: 'Steric hindrance means bulky substituents near the reactive centre physically obstruct the approach of another reagent in the required orientation, so a greater proportion of collisions fail due to incorrect geometry. It does not change Ea, concentration, or temperature.',
            topic: 'Collision theory and activation energy',
        },

        // Subtopic 2 – Effect of concentration and pressure
        {
            id: 'mcq-t9-8',
            stem: 'Increasing the concentration of a dissolved reactant increases the rate of reaction mainly because:',
            options: [
                'The activation energy is lowered',
                'Particle energy increases significantly',
                'There are more particles per unit volume, so collision frequency increases',
                'The Maxwell–Boltzmann distribution shifts to the right',
            ],
            correctAnswer: 2,
            rationale: 'A higher concentration means more solute particles in the same volume, so particles are closer together and collide more often, increasing collision frequency. Activation energy is unchanged. Particle energy does not change at constant temperature. The M-B distribution only shifts with a temperature change.',
            topic: 'Effect of concentration and pressure',
        },
        {
            id: 'mcq-t9-9',
            stem: 'Why does increasing the pressure of a gaseous reaction increase the rate?',
            options: [
                'Pressure provides extra energy to particles above the activation energy',
                'Higher pressure compresses gas molecules into a smaller volume, increasing collision frequency',
                'Higher pressure increases the activation energy, selecting only energetic molecules',
                'Higher pressure decreases temperature, making the M-B distribution sharper',
            ],
            correctAnswer: 1,
            rationale: 'Increasing pressure forces the same number of gas molecules into a smaller volume, raising the number of molecules per unit volume (effectively increasing concentration). This raises collision frequency and therefore the rate. Pressure does not directly energise individual particles or alter Ea.',
            topic: 'Effect of concentration and pressure',
        },
        {
            id: 'mcq-t9-10',
            stem: 'A student grinds a large lump of calcium carbonate into a fine powder before adding it to excess hydrochloric acid. The effect this has on the rate of reaction is best explained by:',
            options: [
                'Powdering increases the kinetic energy of CaCO₃ particles',
                'Powdering exposes more surface area, giving more collision sites per second',
                'Powdering lowers the activation energy of the reaction',
                'Powdering increases the concentration of HCl',
            ],
            correctAnswer: 1,
            rationale: 'Reactions involving solids occur at the surface. Grinding creates many more smaller particles with a much greater total surface area, so more acid molecules can collide with the solid per second. Kinetic energy, activation energy, and HCl concentration are unaffected.',
            topic: 'Effect of concentration and pressure',
        },

        // Subtopic 3 – Maxwell-Boltzmann distribution and Temperature
        {
            id: 'mcq-t9-11',
            stem: 'Which feature of a Maxwell–Boltzmann energy distribution curve is correct?',
            options: [
                'The curve starts at a positive value on the y-axis',
                'The curve reaches a maximum and then falls back to zero at high energies',
                'The mean energy is to the left of the most probable energy',
                'The total area under the curve represents the total number of molecules',
            ],
            correctAnswer: 3,
            rationale: 'The total area under a M-B curve equals the total number of molecules. The curve starts at (0,0), not a positive y-intercept. The tail extends to infinity without touching zero at high energies. The mean energy is slightly to the RIGHT of the most probable (peak) energy because the tail skews the mean.',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'mcq-t9-12',
            stem: 'When temperature is increased, what happens to the Maxwell–Boltzmann distribution curve?',
            options: [
                'The peak shifts left and becomes taller; total area increases',
                'The peak shifts right and becomes lower (flatter); total area remains constant',
                'The peak stays in the same position but the tail to the right grows',
                'The entire curve shifts right without changing shape; total area decreases',
            ],
            correctAnswer: 1,
            rationale: 'At higher temperature the most probable energy (peak) shifts to higher energy values and the peak becomes lower (the curve flattens) because the same total number of molecules are spread over a wider energy range — hence total area is constant. The tail to the right extends and the area beyond Ea increases disproportionately.',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'mcq-t9-13',
            stem: 'The PRIMARY reason that increasing temperature greatly increases reaction rate is:',
            options: [
                'The activation energy decreases significantly',
                'A much larger proportion of molecules now possess energy ≥ Ea',
                'The collision frequency increases by a very large factor',
                'The Maxwell–Boltzmann distribution total area increases',
            ],
            correctAnswer: 1,
            rationale: 'The dominant effect is that the tail of the M-B distribution extends significantly beyond Ea, giving a disproportionately large increase in the fraction of molecules with E ≥ Ea. Activation energy is a property of the reaction pathway and does not change with temperature. The increase in collision frequency from a 10°C rise is only ~1.7%. Total area is constant (fixed number of molecules).',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'mcq-t9-14',
            stem: 'The approximate rule for the effect of temperature on reaction rate near room temperature states that:',
            options: [
                'Rate triples for every 10°C rise',
                'Rate halves for every 10°C rise',
                'Rate doubles for every 10°C rise',
                'Rate increases by 10% for every 10°C rise',
            ],
            correctAnswer: 2,
            rationale: 'A widely used rule of thumb is that for many reactions near room temperature, the rate approximately doubles for every 10°C increase. This is due to the exponential increase in the fraction of molecules exceeding Ea rather than a simple linear increase.',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },

        // Subtopic 4 – Effect of catalysts on rate
        {
            id: 'mcq-t9-15',
            stem: 'Which statement about a catalyst is correct?',
            options: [
                'A catalyst is consumed during the reaction and must be replenished',
                'A catalyst lowers the activation energy of the existing reaction pathway',
                'A catalyst provides an alternative reaction route with a lower activation energy',
                'A catalyst increases the enthalpy change (ΔH) of the reaction',
            ],
            correctAnswer: 2,
            rationale: 'A catalyst provides an alternative reaction mechanism with a lower activation energy; it is NOT consumed and remains chemically unchanged. You must NOT say it "lowers the activation energy" — it provides a new route. ΔH is unchanged because reactants and products are at the same energy levels.',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'mcq-t9-16',
            stem: 'On a Maxwell–Boltzmann diagram, the effect of adding a catalyst is shown by:',
            options: [
                'The M-B curve shifting to the right',
                'A new, lower Ea line being drawn further to the left on the energy axis',
                'The total area under the curve decreasing',
                'The peak of the M-B curve moving to a higher energy',
            ],
            correctAnswer: 1,
            rationale: 'A catalyst does not change the M-B distribution (no change to curve shape or area). Instead, a new Ea line is placed at a lower energy value (further left) representing the catalysed pathway. A larger fraction of the existing molecules now exceeds this lower Ea, so more reactions occur per second.',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'mcq-t9-17',
            stem: 'Which of the following correctly distinguishes a transition state from a reaction intermediate?',
            options: [
                'A transition state can sometimes be isolated; an intermediate cannot',
                'A transition state is at an energy minimum; an intermediate is at an energy maximum',
                'A transition state is at an energy maximum and cannot be isolated; an intermediate sits in an energy dip and may be detectable',
                'Both are equally stable; only their position in the reaction changes',
            ],
            correctAnswer: 2,
            rationale: 'The transition state sits at the top (energy maximum) of an energy profile and is entirely unstable — it cannot be isolated. A reaction intermediate sits in a dip (local energy minimum) between two peaks on the enthalpy profile and may sometimes be detected or isolated.',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'mcq-t9-18',
            stem: 'Which catalyst and process are correctly matched?',
            options: [
                'V₂O₅ — Haber process',
                'Fe — Contact process',
                'MnO₂ — decomposition of hydrogen peroxide',
                'Ni — hydration of ethene',
            ],
            correctAnswer: 2,
            rationale: 'MnO₂ is the heterogeneous catalyst for the decomposition of H₂O₂ into water and oxygen. Fe (with KOH promoter) is the catalyst for the Haber process. V₂O₅ is used in the Contact process (SO₂ → SO₃). Ni catalyses the hydrogenation of alkenes, not the hydration of ethene (which uses H₃PO₄ on SiO₂).',
            topic: 'Effect of catalysts on rate',
        },

        // Subtopic 5 – Reversible reactions and dynamic equilibrium
        {
            id: 'mcq-t9-19',
            stem: 'Which condition is essential for dynamic equilibrium to be established?',
            options: [
                'The concentrations of reactants and products must be equal',
                'The system must be open so gases can escape',
                'The system must be closed so no substances enter or leave',
                'The temperature must be above 100°C',
            ],
            correctAnswer: 2,
            rationale: 'Dynamic equilibrium requires a closed system — if products can escape, the reverse reaction cannot occur and the reaction goes to completion. Concentrations do not need to be equal; they are simply constant. An open system prevents equilibrium from being established.',
            topic: 'Reversible reactions and dynamic equilibrium',
        },
        {
            id: 'mcq-t9-20',
            stem: 'At dynamic equilibrium, which of the following is true?',
            options: [
                'The forward and reverse reactions have both stopped',
                'The forward reaction rate equals the reverse reaction rate, and concentrations remain constant',
                'The concentrations of all species are equal',
                'Only the forward reaction continues; the reverse rate has dropped to zero',
            ],
            correctAnswer: 1,
            rationale: 'At dynamic equilibrium both reactions continue at equal rates — it is "dynamic" because reactions are still happening at the molecular level. Concentrations are constant but not necessarily equal. Neither reaction has stopped.',
            topic: 'Reversible reactions and dynamic equilibrium',
        },
        {
            id: 'mcq-t9-21',
            stem: 'The symbol ⇌ in a chemical equation indicates:',
            options: [
                'The reaction is exothermic in both directions',
                'The reaction can proceed in both forward and reverse directions (is reversible)',
                'The reaction is at equilibrium and will not shift',
                'The forward reaction is faster than the reverse reaction',
            ],
            correctAnswer: 1,
            rationale: 'The double half-arrow ⇌ denotes a reversible reaction — one that can proceed both forwards (reactants → products) and backwards (products → reactants). It does not imply equal rates, equal concentrations, or information about enthalpy.',
            topic: 'Reversible reactions and dynamic equilibrium',
        },

        // Subtopic 6 – Le Chatelier's principle
        {
            id: 'mcq-t9-22',
            stem: 'According to Le Chatelier\'s principle, what happens to the position of equilibrium when the concentration of a reactant is increased?',
            options: [
                'Equilibrium shifts left to increase product removal',
                'Equilibrium shifts right to reduce the extra reactant by forming more products',
                'No shift occurs because Le Chatelier\'s principle only applies to temperature changes',
                'Equilibrium shifts right only if the reaction is exothermic',
            ],
            correctAnswer: 1,
            rationale: 'Le Chatelier\'s principle states the system opposes the change. Increasing reactant concentration is opposed by shifting right (toward products), consuming the extra reactant. The principle applies to concentration, pressure, and temperature. The direction is independent of whether the reaction is exothermic.',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'mcq-t9-23',
            stem: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing the pressure would shift the equilibrium:',
            options: [
                'To the left, towards N₂ and H₂, because there are more moles on the right',
                'To the right, towards NH₃, because there are fewer moles of gas on the right',
                'No shift, because all species are gases',
                'To the left, because increasing pressure always opposes the forward reaction',
            ],
            correctAnswer: 1,
            rationale: 'The left side has 1 + 3 = 4 moles of gas; the right has 2 moles. Increased pressure is opposed by a shift toward fewer gas moles — i.e. to the right toward NH₃. Le Chatelier\'s principle only considers gas moles for pressure changes, not all species equally.',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'mcq-t9-24',
            stem: 'Increasing the temperature shifts an equilibrium in the endothermic direction because:',
            options: [
                'Heat acts as a product in an exothermic reaction and shifts it left',
                'The system responds by absorbing the extra heat energy, opposing the temperature increase',
                'The activation energy decreases, favouring the endothermic step',
                'A catalyst is produced by the higher temperature',
            ],
            correctAnswer: 1,
            rationale: 'Le Chatelier\'s principle: the system opposes an increase in temperature by absorbing heat — that is, by shifting in the endothermic direction. This reduces the temperature increase. Activation energy is not changed by temperature. No catalyst is produced.',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'mcq-t9-25',
            stem: 'Adding a catalyst to a system at dynamic equilibrium will:',
            options: [
                'Shift the position of equilibrium to the right',
                'Increase the rate of the forward reaction only',
                'Not shift the equilibrium position; it only reduces the time taken to reach equilibrium',
                'Increase the equilibrium constant Kc',
            ],
            correctAnswer: 2,
            rationale: 'A catalyst speeds both the forward and reverse reactions by the same proportion (both via the same lower-energy alternative pathway), so the ratio of rates is unchanged and the equilibrium position does not shift. Kc depends only on temperature. The sole effect is that equilibrium is reached faster.',
            topic: 'Le Chatelier\'s principle',
        },

        // Subtopic 7 – Compromises in Industrial Processes
        {
            id: 'mcq-t9-26',
            stem: 'In the Haber process, 450°C is used as a compromise temperature because:',
            options: [
                'Below 450°C Fe catalyst is poisoned by NH₃',
                'Higher temperatures would decompose Fe catalyst',
                'A lower temperature gives a higher yield but an unacceptably slow rate; 450°C balances adequate rate with reasonable yield',
                'NH₃ is a liquid below 450°C and cannot be removed',
            ],
            correctAnswer: 2,
            rationale: 'The forward Haber reaction is exothermic, so lower temperatures favour a higher yield (Le Chatelier). However, a very low temperature gives an impractically slow rate. 450°C is a compromise: rate is acceptable and yield, while lower than at very low T, is still economically viable with continuous removal of NH₃.',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'mcq-t9-27',
            stem: 'In the Contact process for H₂SO₄ manufacture, only 1–2 atm pressure is used. Why is very high pressure not employed, unlike the Haber process?',
            options: [
                'High pressure would decompose the V₂O₅ catalyst',
                'The equilibrium conversion is already ~99.5% at low pressure, so the small gain from higher pressure does not justify the extra equipment cost',
                'High pressure shifts the equilibrium left because there are more moles of gas on the left',
                'SO₃ liquefies at high pressure, making separation impossible',
            ],
            correctAnswer: 1,
            rationale: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g) already achieves ~99.5% conversion at 1–2 atm with V₂O₅ at 450°C. The marginal yield gain from higher pressure is economically unjustifiable given the engineering cost of high-pressure vessels. High pressure would actually shift the equilibrium right (fewer gas moles on right: 2 vs 3).',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'mcq-t9-28',
            stem: 'In the industrial synthesis of methanol, CO(g) + 2H₂(g) ⇌ CH₃OH(g), unreacted gases are recycled. The main purpose of recycling is:',
            options: [
                'To cool the reaction mixture and increase yield from the exothermic reaction',
                'To increase the overall conversion yield toward 95–98% despite low single-pass conversion',
                'To increase the pressure, shifting equilibrium to the right',
                'To regenerate the Cu/ZnO/Al₂O₃ catalyst',
            ],
            correctAnswer: 1,
            rationale: 'Single-pass conversion is relatively low at the operating temperature. Recycling unreacted CO and H₂ back to the reactor increases the overall yield dramatically (approaching 95–98%) without needing to run the process at thermodynamically unfavourable conditions. It is not primarily for cooling, pressure control, or catalyst regeneration.',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'mcq-t9-29',
            stem: 'Why can the pressure not be increased indefinitely in the industrial production of ethanol (C₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g))?',
            options: [
                'Ethanol decomposes above 60 atm',
                'The H₃PO₄/SiO₂ catalyst is deactivated above 70 atm',
                'At very high pressures, ethene undergoes polymerisation rather than hydration',
                'Above 70 atm the equilibrium unexpectedly shifts left',
            ],
            correctAnswer: 2,
            rationale: 'At very high pressures, ethene tends to polymerise (forming poly(ethene)) rather than reacting with steam to form ethanol. This side reaction wastes feedstock and contaminates the product. The operating range is 60–70 atm as a practical upper limit.',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'mcq-t9-30',
            stem: 'The iron catalyst in the Haber process is described as heterogeneous. This means:',
            options: [
                'It contains more than one type of metal',
                'It is in a different physical state from the reacting gases',
                'It is dissolved in the same phase as the reactants',
                'It is regenerated after each reaction cycle by adding KOH',
            ],
            correctAnswer: 1,
            rationale: 'A heterogeneous catalyst is in a different phase from the reactants. In the Haber process the Fe catalyst is a solid while the reactants (N₂ and H₂) are gases. A homogeneous catalyst is in the same phase. KOH is a promoter that improves catalyst performance, not a regenerant.',
            topic: 'Compromises in Industrial Processes',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FILL-IN-THE-BLANK  (~15 questions)
    // ─────────────────────────────────────────────────────────────────────────
    fillblank: [

        {
            id: 'fb-t9-1',
            stem: 'Complete the sentence about rate of reaction.',
            template: 'The rate of reaction is defined as the change in __BLANK__ per unit time, and its SI units are mol dm⁻³ s⁻¹.',
            blanks: [{ answer: 'concentration' }],
            rationale: 'Rate = Δ[concentration]/Δtime. The units follow directly: mol dm⁻³ divided by seconds = mol dm⁻³ s⁻¹.',
        },
        {
            id: 'fb-t9-2',
            stem: 'Complete the sentence about instantaneous rate from a graph.',
            template: 'To find the instantaneous rate at a specific time on a concentration–time graph, you draw a __BLANK__ at that point and calculate its gradient.',
            blanks: [{ answer: 'tangent' }],
            rationale: 'The gradient of a tangent to the curve at a given time equals the instantaneous rate at that moment (Δy/Δx).',
        },
        {
            id: 'fb-t9-3',
            stem: 'Complete the definition of activation energy.',
            template: 'The activation energy is the __BLANK__ energy that colliding particles must possess for a reaction to occur.',
            blanks: [{ answer: 'minimum' }],
            rationale: 'Activation energy (Ea) is a threshold; particles need at least this energy — it is the minimum, not the average or maximum.',
        },
        {
            id: 'fb-t9-4',
            stem: 'Complete the sentence about collision geometry.',
            template: 'A collision can fail even if the particles have sufficient energy if the __BLANK__ of approach is incorrect.',
            blanks: [{ answer: 'orientation' }],
            rationale: 'Collision theory requires both sufficient energy AND correct orientation/geometry. Wrong orientation = unsuccessful collision.',
        },
        {
            id: 'fb-t9-5',
            stem: 'Complete the sentence about increasing surface area.',
            template: 'Grinding a solid reactant into a fine powder increases the __BLANK__ area, providing more sites for collisions and increasing the rate.',
            blanks: [{ answer: 'surface' }],
            rationale: 'Heterogeneous reactions involving solids occur at the surface. Greater surface area = more collisions per second = faster rate.',
        },
        {
            id: 'fb-t9-6',
            stem: 'Complete the description of the Maxwell–Boltzmann curve.',
            template: 'On a Maxwell–Boltzmann distribution, the total area under the curve represents the total __BLANK__ of molecules in the sample.',
            blanks: [{ answer: 'number' }],
            rationale: 'Each point on the x-axis represents an energy value; the area under the curve over any energy range gives the number of molecules with that range of energies. Total area = total molecule count.',
        },
        {
            id: 'fb-t9-7',
            stem: 'Complete the sentence about temperature and the M-B curve.',
            template: 'When temperature increases, the peak of the Maxwell–Boltzmann curve shifts to the __BLANK__ and becomes lower.',
            blanks: [{ answer: 'right' }],
            rationale: 'Higher temperature means higher average kinetic energy, so the most probable energy (peak) moves to higher energy values (right). The peak drops because the same total number of molecules is spread over a wider energy range.',
        },
        {
            id: 'fb-t9-8',
            stem: 'Complete the sentence about catalysts and the enthalpy profile.',
            template: 'A catalyst does not change the __BLANK__ of a reaction because the reactants and products remain at the same energy levels.',
            blanks: [{ answer: 'ΔH' }],
            rationale: 'ΔH (enthalpy change) depends only on the energy difference between reactants and products, which is unaffected by the catalyst. The catalyst only lowers the energy of the transition state on the new reaction route.',
        },
        {
            id: 'fb-t9-9',
            stem: 'Complete the sentence about dynamic equilibrium.',
            template: 'At dynamic equilibrium, the rate of the __BLANK__ reaction equals the rate of the reverse reaction, and concentrations remain constant.',
            blanks: [{ answer: 'forward' }],
            rationale: 'The defining feature of dynamic equilibrium is that both reactions occur simultaneously and at equal rates, so there is no net change in concentrations.',
        },
        {
            id: 'fb-t9-10',
            stem: 'Complete the statement about a closed system.',
            template: 'Dynamic equilibrium can only be established in a __BLANK__ system, where no substances can enter or leave.',
            blanks: [{ answer: 'closed' }],
            rationale: 'If the system is open, products can escape, preventing the reverse reaction from occurring, so equilibrium is never reached.',
        },
        {
            id: 'fb-t9-11',
            stem: 'Complete the statement of Le Chatelier\'s principle.',
            template: 'Le Chatelier\'s principle states that if a system at equilibrium is subjected to a change, the equilibrium position shifts to __BLANK__ that change.',
            blanks: [{ answer: 'oppose' }],
            rationale: 'Le Chatelier\'s principle is specifically about opposing (minimising) the imposed change — the system acts to counteract the disturbance.',
        },
        {
            id: 'fb-t9-12',
            stem: 'Complete the sentence about pressure and equilibrium.',
            template: 'Increasing pressure on a gaseous equilibrium shifts the position toward the side with __BLANK__ moles of gas.',
            blanks: [{ answer: 'fewer' }],
            rationale: 'A higher pressure is opposed by a shift that reduces the total number of gas molecules, i.e. toward the side with fewer moles of gas, to lower the pressure.',
        },
        {
            id: 'fb-t9-13',
            stem: 'Complete the sentence about the Haber process conditions.',
            template: 'In the Haber process, N₂ and H₂ are fed in a __BLANK__ : __BLANK__ molar ratio to match the stoichiometry of the equation N₂ + 3H₂ ⇌ 2NH₃.',
            blanks: [{ answer: '1' }, { answer: '3' }],
            rationale: 'The balanced equation shows 1 mole N₂ reacts with 3 moles H₂. Using a 1:3 ratio maximises catalyst surface utilisation; excess of either gas wastes resources.',
        },
        {
            id: 'fb-t9-14',
            stem: 'Complete the sentence about the Contact process yield.',
            template: 'The Contact process achieves approximately __BLANK__% conversion of SO₂ to SO₃ at just 1–2 atm, making very high pressure economically unjustifiable.',
            blanks: [{ answer: '99.5' }],
            rationale: '99.5% is the standard figure for SO₂ → SO₃ conversion in the Contact process at 450°C and 1–2 atm. This near-complete conversion makes high-pressure equipment unnecessary.',
        },
        {
            id: 'fb-t9-15',
            stem: 'Complete the sentence about catalyst type in the Haber process.',
            template: 'The iron catalyst in the Haber process is __BLANK__ because it is in a different physical state from the gaseous reactants.',
            blanks: [{ answer: 'heterogeneous' }],
            rationale: 'Heterogeneous = different phase. Solid Fe catalyst vs gaseous N₂ and H₂ = heterogeneous catalysis. Homogeneous catalysis would require the catalyst to be in the gas phase too.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // DRAG-AND-DROP  (~10 exercises)
    // ─────────────────────────────────────────────────────────────────────────
    dragdrop: [

        {
            id: 'dd-t9-1',
            stem: 'Classify each factor by whether it increases reaction rate by raising collision FREQUENCY, increasing the PROPORTION of molecules with E ≥ Ea, or BOTH.',
            categories: ['Increases collision frequency', 'Increases proportion with E ≥ Ea', 'Both effects'],
            items: [
                { text: 'Increasing concentration of a dissolved reactant', category: 'Increases collision frequency' },
                { text: 'Increasing temperature', category: 'Both effects' },
                { text: 'Increasing pressure of a gaseous reaction', category: 'Increases collision frequency' },
                { text: 'Grinding a solid into powder', category: 'Increases collision frequency' },
                { text: 'Adding a catalyst', category: 'Increases proportion with E ≥ Ea' },
                { text: 'Increasing temperature by 100°C (large rise)', category: 'Both effects' },
            ],
        },
        {
            id: 'dd-t9-2',
            stem: 'Match each industrial catalyst to its process.',
            categories: ['Haber process', 'Contact process', 'Decomposition of H₂O₂', 'Hydrogenation of alkenes', 'Hydration of ethene'],
            items: [
                { text: 'Iron (Fe) with KOH promoter', category: 'Haber process' },
                { text: 'Vanadium(V) oxide (V₂O₅)', category: 'Contact process' },
                { text: 'Manganese(IV) oxide (MnO₂)', category: 'Decomposition of H₂O₂' },
                { text: 'Nickel (Ni)', category: 'Hydrogenation of alkenes' },
                { text: 'Phosphoric acid (H₃PO₄) on SiO₂', category: 'Hydration of ethene' },
            ],
        },
        {
            id: 'dd-t9-3',
            stem: 'Sort these changes according to how they affect the position of the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ mol⁻¹.',
            categories: ['Shifts equilibrium RIGHT (more NH₃)', 'Shifts equilibrium LEFT (less NH₃)', 'No change in position'],
            items: [
                { text: 'Increase pressure', category: 'Shifts equilibrium RIGHT (more NH₃)' },
                { text: 'Increase temperature', category: 'Shifts equilibrium LEFT (less NH₃)' },
                { text: 'Add Fe catalyst', category: 'No change in position' },
                { text: 'Increase concentration of N₂', category: 'Shifts equilibrium RIGHT (more NH₃)' },
                { text: 'Remove NH₃ from the mixture', category: 'Shifts equilibrium RIGHT (more NH₃)' },
                { text: 'Decrease pressure', category: 'Shifts equilibrium LEFT (less NH₃)' },
                { text: 'Decrease temperature', category: 'Shifts equilibrium RIGHT (more NH₃)' },
            ],
        },
        {
            id: 'dd-t9-4',
            stem: 'Classify these descriptions as features of a TRANSITION STATE or a REACTION INTERMEDIATE.',
            categories: ['Transition state', 'Reaction intermediate'],
            items: [
                { text: 'Sits at the peak (energy maximum) of the reaction profile', category: 'Transition state' },
                { text: 'Entirely unstable; cannot be isolated', category: 'Transition state' },
                { text: 'Sits in a dip (energy minimum) between two peaks', category: 'Reaction intermediate' },
                { text: 'May sometimes be detected or isolated', category: 'Reaction intermediate' },
                { text: 'Has partially broken and partially formed bonds simultaneously', category: 'Transition state' },
                { text: 'Appears as the "camel hump" dip in a two-step catalysed profile', category: 'Reaction intermediate' },
            ],
        },
        {
            id: 'dd-t9-5',
            stem: 'Sort each statement as TRUE or FALSE for dynamic equilibrium.',
            categories: ['True for dynamic equilibrium', 'False for dynamic equilibrium'],
            items: [
                { text: 'Both forward and reverse reactions are occurring simultaneously', category: 'True for dynamic equilibrium' },
                { text: 'The concentrations of all species are equal', category: 'False for dynamic equilibrium' },
                { text: 'Net concentrations of all species remain constant over time', category: 'True for dynamic equilibrium' },
                { text: 'The forward reaction has stopped', category: 'False for dynamic equilibrium' },
                { text: 'The system must be closed', category: 'True for dynamic equilibrium' },
                { text: 'The reverse reaction rate is zero', category: 'False for dynamic equilibrium' },
            ],
        },
        {
            id: 'dd-t9-6',
            stem: 'Match each change in condition to the PRIMARY reason it increases the rate of a gas-phase reaction.',
            categories: ['Higher collision frequency', 'Lower activation energy pathway', 'Larger fraction of molecules with E ≥ Ea'],
            items: [
                { text: 'Raising the temperature', category: 'Larger fraction of molecules with E ≥ Ea' },
                { text: 'Increasing the pressure', category: 'Higher collision frequency' },
                { text: 'Adding a heterogeneous catalyst', category: 'Lower activation energy pathway' },
                { text: 'Increasing the concentration of a dissolved reactant', category: 'Higher collision frequency' },
                { text: 'Adding a homogeneous catalyst', category: 'Lower activation energy pathway' },
                { text: 'Raising the temperature by 10°C near room temperature', category: 'Larger fraction of molecules with E ≥ Ea' },
            ],
        },
        {
            id: 'dd-t9-7',
            stem: 'For the Contact process equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)  ΔH = −196 kJ mol⁻¹, sort each change.',
            categories: ['Increases SO₃ yield', 'Decreases SO₃ yield', 'No effect on equilibrium position'],
            items: [
                { text: 'Increase pressure', category: 'Increases SO₃ yield' },
                { text: 'Increase temperature', category: 'Decreases SO₃ yield' },
                { text: 'Remove SO₃ as it forms', category: 'Increases SO₃ yield' },
                { text: 'Add V₂O₅ catalyst', category: 'No effect on equilibrium position' },
                { text: 'Decrease temperature', category: 'Increases SO₃ yield' },
                { text: 'Decrease pressure', category: 'Decreases SO₃ yield' },
            ],
        },
        {
            id: 'dd-t9-8',
            stem: 'Classify each statement as something a catalyst DOES or DOES NOT do.',
            categories: ['A catalyst DOES this', 'A catalyst DOES NOT do this'],
            items: [
                { text: 'Provides an alternative reaction route with lower activation energy', category: 'A catalyst DOES this' },
                { text: 'Remains chemically unchanged at the end of the reaction', category: 'A catalyst DOES this' },
                { text: 'Change the overall enthalpy change (ΔH) of the reaction', category: 'A catalyst DOES NOT do this' },
                { text: 'Shift the position of equilibrium', category: 'A catalyst DOES NOT do this' },
                { text: 'Reduce the time needed to reach equilibrium', category: 'A catalyst DOES this' },
                { text: 'Alter the shape of the Maxwell–Boltzmann distribution curve', category: 'A catalyst DOES NOT do this' },
            ],
        },
        {
            id: 'dd-t9-9',
            stem: 'Sort the following features as belonging to the HABER process, the CONTACT process, or BOTH.',
            categories: ['Haber process only', 'Contact process only', 'Both processes'],
            items: [
                { text: 'Uses 450°C as a compromise temperature', category: 'Both processes' },
                { text: 'Uses an iron (Fe) catalyst', category: 'Haber process only' },
                { text: 'Uses a vanadium(V) oxide (V₂O₅) catalyst', category: 'Contact process only' },
                { text: 'Operates at very high pressure (200 atm)', category: 'Haber process only' },
                { text: 'Produces a product that is used in H₂SO₄ manufacture', category: 'Contact process only' },
                { text: 'Is an exothermic reaction', category: 'Both processes' },
                { text: 'Uses a heterogeneous catalyst', category: 'Both processes' },
            ],
        },
        {
            id: 'dd-t9-10',
            stem: 'Classify each factor as one that CHANGES the Maxwell–Boltzmann curve shape or one that DOES NOT change the curve shape.',
            categories: ['Changes M-B curve shape', 'Does NOT change M-B curve shape'],
            items: [
                { text: 'Increasing temperature', category: 'Changes M-B curve shape' },
                { text: 'Adding a catalyst', category: 'Does NOT change M-B curve shape' },
                { text: 'Increasing concentration', category: 'Does NOT change M-B curve shape' },
                { text: 'Increasing pressure (gas system, constant T)', category: 'Does NOT change M-B curve shape' },
                { text: 'Decreasing temperature significantly', category: 'Changes M-B curve shape' },
                { text: 'Adding an inert gas at constant volume', category: 'Does NOT change M-B curve shape' },
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // SEQUENCE  (~8 exercises)
    // ─────────────────────────────────────────────────────────────────────────
    sequence: [

        {
            id: 'seq-t9-1',
            stem: 'Put these steps for determining the instantaneous rate from a concentration–time graph in the correct order:',
            steps: [
                'Identify the specific time point on the x-axis where you need the rate',
                'Draw a tangent line that just touches the curve at that point without crossing it',
                'Select two widely spaced points on the tangent line and read off their coordinates',
                'Calculate gradient = Δy / Δx to obtain the instantaneous rate',
            ],
        },
        {
            id: 'seq-t9-2',
            stem: 'Arrange the following events in the order they occur as a reaction mixture initially at high concentration approaches and reaches dynamic equilibrium:',
            steps: [
                'Reactants are mixed; forward reaction rate is at its maximum',
                'Reactant concentration falls; forward rate decreases',
                'Products accumulate; reverse reaction rate begins to increase',
                'Forward rate equals reverse rate; dynamic equilibrium is established',
            ],
        },
        {
            id: 'seq-t9-3',
            stem: 'Place these steps describing heterogeneous catalysis (e.g. Fe in the Haber process) in the correct mechanistic order:',
            steps: [
                'Reactant molecules (N₂ and H₂) diffuse to and adsorb onto the catalyst surface',
                'Adsorption weakens intramolecular bonds, lowering the activation energy for bond breaking',
                'Surface reaction occurs; N and H atoms react to form NH₃ on the surface',
                'NH₃ molecules desorb from the surface, freeing active sites for further catalysis',
            ],
        },
        {
            id: 'seq-t9-4',
            stem: 'Arrange these events describing how increasing temperature increases the rate of a reaction, in the correct logical order:',
            steps: [
                'Temperature is raised, transferring kinetic energy to the molecules',
                'The Maxwell–Boltzmann distribution shifts right; the peak lowers',
                'A disproportionately larger fraction of molecules now has energy ≥ Ea',
                'More collisions per second are successful; rate increases significantly',
            ],
        },
        {
            id: 'seq-t9-5',
            stem: 'Put these stages of the Haber process in the correct operational order:',
            steps: [
                'Nitrogen and hydrogen are compressed to 200 atm and heated to 450°C',
                'The gas mixture passes over the iron catalyst bed',
                'About 15% of the gas mixture converts to NH₃ per pass',
                'The mixture is cooled; NH₃ liquefies and is removed',
                'Unreacted N₂ and H₂ are recycled back to the reactor',
            ],
        },
        {
            id: 'seq-t9-6',
            stem: 'Arrange these steps showing how Le Chatelier\'s principle applies when pressure is increased on N₂(g) + 3H₂(g) ⇌ 2NH₃(g):',
            steps: [
                'Pressure is increased by compressing the gas mixture',
                'The system opposes the increase by shifting to reduce the number of gas molecules',
                'Equilibrium shifts right: 4 moles of gas become 2 moles of NH₃',
                'A new equilibrium is established at higher NH₃ concentration and lower total gas pressure than immediately after compression',
            ],
        },
        {
            id: 'seq-t9-7',
            stem: 'Place these steps describing how a catalyst is represented on an enthalpy profile in the correct order:',
            steps: [
                'Draw the uncatalysed energy profile with a high activation energy hump between reactants and products',
                'Add the catalysed pathway as a new, lower hump (or camel-back profile) at reduced height',
                'Mark Ea(catalysed) as the distance from reactants to the lower hump peak',
                'Note that ΔH and the positions of reactants and products are unchanged',
            ],
        },
        {
            id: 'seq-t9-8',
            stem: 'Arrange these steps describing a collision between HCl and an alkene (e.g. electrophilic addition) to show the difference between a SUCCESSFUL and an UNSUCCESSFUL collision:',
            steps: [
                'HCl molecule approaches the C=C double bond of the alkene',
                'The H⁺ end of HCl must orient toward the electron-rich π bond for reaction to proceed',
                'If Cl end approaches instead, geometry is incorrect and collision is unsuccessful despite sufficient energy',
                'Correct H-first orientation with E ≥ Ea leads to bond breaking in HCl and bond formation with the alkene',
            ],
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // KEYWORD  (~12 questions)
    // ─────────────────────────────────────────────────────────────────────────
    keyword: [

        {
            id: 'kw-t9-1',
            stem: 'Define the term "rate of reaction". [2 marks]',
            marks: 2,
            keywords: ['concentration', 'unit time', 'mol dm⁻³ s⁻¹'],
            modelAnswer: 'The rate of reaction is the change in concentration of a reactant or product per unit time. Its units are mol dm⁻³ s⁻¹.',
        },
        {
            id: 'kw-t9-2',
            stem: 'Explain what is meant by "activation energy" (Ea). [2 marks]',
            marks: 2,
            keywords: ['minimum', 'energy', 'colliding particles', 'reaction to occur'],
            modelAnswer: 'Activation energy is the minimum energy that colliding particles must possess for a reaction to occur. Collisions with energy below Ea are unsuccessful.',
        },
        {
            id: 'kw-t9-3',
            stem: 'State the two conditions that must be satisfied for a collision to be successful. [2 marks]',
            marks: 2,
            keywords: ['activation energy', 'correct orientation', 'geometry', 'energy'],
            modelAnswer: 'A collision is successful only if: (1) the colliding particles possess kinetic energy equal to or greater than the activation energy (Ea), and (2) the particles collide with the correct orientation (geometry).',
        },
        {
            id: 'kw-t9-4',
            stem: 'Explain, using the Maxwell–Boltzmann distribution, why increasing temperature greatly increases the rate of a reaction. [3 marks]',
            marks: 3,
            keywords: ['Maxwell-Boltzmann', 'proportion', 'activation energy', 'disproportionate', 'tail'],
            modelAnswer: 'At higher temperature, the Maxwell–Boltzmann distribution shifts to higher energies and the peak lowers (same total molecules). The tail of the distribution extends further beyond the activation energy, so a much larger proportion of molecules now possesses energy equal to or greater than Ea. This disproportionate increase in the fraction of energetic molecules greatly increases the number of successful collisions per second.',
        },
        {
            id: 'kw-t9-5',
            stem: 'Explain how a catalyst increases the rate of a reaction without being consumed. [3 marks]',
            marks: 3,
            keywords: ['alternative route', 'lower activation energy', 'unchanged', 'chemically unchanged'],
            modelAnswer: 'A catalyst provides an alternative reaction route (mechanism) that has a lower activation energy than the uncatalysed pathway. This means a greater proportion of the molecules (using the existing Maxwell–Boltzmann distribution) possesses sufficient energy to react. The catalyst participates in the reaction but is regenerated at the end, so it remains chemically unchanged overall.',
        },
        {
            id: 'kw-t9-6',
            stem: 'State what is meant by "dynamic equilibrium". [3 marks]',
            marks: 3,
            keywords: ['closed system', 'forward rate', 'reverse rate', 'equal', 'concentrations constant'],
            modelAnswer: 'Dynamic equilibrium exists in a closed system when the rate of the forward reaction equals the rate of the reverse reaction, so the concentrations of all reactants and products remain constant over time. Both reactions continue to occur at the microscopic level.',
        },
        {
            id: 'kw-t9-7',
            stem: 'State Le Chatelier\'s principle. [2 marks]',
            marks: 2,
            keywords: ['equilibrium', 'change', 'oppose', 'minimise'],
            modelAnswer: 'Le Chatelier\'s principle states that if a system at dynamic equilibrium is subjected to a change in conditions, the position of equilibrium will shift in the direction that opposes (minimises) that change.',
        },
        {
            id: 'kw-t9-8',
            stem: 'Explain why adding a catalyst to a system already at equilibrium does not shift the position of equilibrium. [2 marks]',
            marks: 2,
            keywords: ['forward', 'reverse', 'equally', 'same proportion', 'position unchanged'],
            modelAnswer: 'A catalyst speeds up both the forward and reverse reactions by the same proportion (both via the same alternative lower-energy pathway). Because the ratio of forward to reverse rate is unchanged, the equilibrium position does not shift. The only effect is that equilibrium is reached in less time.',
        },
        {
            id: 'kw-t9-9',
            stem: 'Explain the compromise conditions of temperature and pressure used in the Haber process. [4 marks]',
            marks: 4,
            keywords: ['450°C', 'exothermic', 'yield', 'rate', '200 atm', 'cost', 'safety', 'compromise'],
            modelAnswer: 'The forward reaction is exothermic, so a lower temperature favours a higher yield (Le Chatelier). However, a very low temperature gives an unacceptably slow rate. 450°C is a compromise: it gives an adequate rate while the Fe catalyst compensates for the reduced yield. 200 atm is used: higher pressure favours more NH₃ (fewer gas moles on right) and increases rate. However, extreme pressures are costly to maintain and dangerous. 200 atm is a compromise between maximising yield/rate and minimising cost and safety risk.',
        },
        {
            id: 'kw-t9-10',
            stem: 'Explain why the rate of a reaction decreases as it progresses. [2 marks]',
            marks: 2,
            keywords: ['concentration', 'decreases', 'collision frequency', 'fewer molecules'],
            modelAnswer: 'As the reaction proceeds, reactant concentration decreases because reactant molecules are converted to products. Lower concentration means fewer particles per unit volume, so the frequency of collisions between reactant molecules decreases, leading to fewer successful collisions per second and a lower rate.',
        },
        {
            id: 'kw-t9-11',
            stem: 'Describe and explain the effect of increasing pressure on the position of equilibrium for the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). [3 marks]',
            marks: 3,
            keywords: ['shifts right', 'fewer moles', 'gas moles', 'Le Chatelier', 'SO₃'],
            modelAnswer: 'Increasing pressure shifts the equilibrium to the right (towards SO₃). This is because the right-hand side has 2 moles of gas while the left has 3 moles total. By Le Chatelier\'s principle, the system opposes the pressure increase by shifting to the side with fewer moles of gas (right), thereby reducing the total number of gas molecules and lowering the pressure.',
        },
        {
            id: 'kw-t9-12',
            stem: 'Explain how the enthalpy profile of a catalysed reaction differs from that of the uncatalysed reaction. [3 marks]',
            marks: 3,
            keywords: ['lower activation energy', 'alternative route', 'ΔH unchanged', 'reactants', 'products'],
            modelAnswer: 'The catalysed enthalpy profile shows the same energy levels for reactants and products, so ΔH is unchanged. However, the catalysed pathway has a lower activation energy hump than the uncatalysed profile. For a two-step catalytic mechanism, the profile may show two smaller peaks separated by a dip (representing an intermediate), both below the single uncatalysed peak.',
        },
    ],

    // ─────────────────────────────────────────────────────────────────────────
    // FLASHCARDS  (~25 cards, all 8 subtopics)
    // ─────────────────────────────────────────────────────────────────────────
    flashcards: [

        // Subtopic 0
        {
            id: 'fc-t9-1',
            front: 'What is the definition and unit of rate of reaction?',
            back: 'Rate of reaction = change in concentration per unit time.\nUnit: mol dm⁻³ s⁻¹',
            topic: 'Rate of reaction and calculating from graphs',
        },
        {
            id: 'fc-t9-2',
            front: 'How do you calculate the instantaneous rate at a specific time from a concentration–time graph?',
            back: '• Draw a tangent to the curve at that time point\n• Calculate gradient = Δy / Δx of the tangent\n• This equals the instantaneous rate at that moment',
            topic: 'Rate of reaction and calculating from graphs',
        },
        {
            id: 'fc-t9-3',
            front: 'Why is the rate of reaction greatest at the start of a reaction?',
            back: 'Reactant concentration is at its maximum at the start, giving the highest collision frequency and therefore the greatest number of successful collisions per second.',
            topic: 'Rate of reaction and calculating from graphs',
        },

        // Subtopic 1
        {
            id: 'fc-t9-4',
            front: 'What are the two requirements for a successful collision?',
            back: '1. Colliding particles must have energy ≥ activation energy (Ea)\n2. Particles must collide with correct orientation/geometry',
            topic: 'Collision theory and activation energy',
        },
        {
            id: 'fc-t9-5',
            front: 'What is activation energy (Ea)?',
            back: 'The minimum energy that colliding particles must possess for a reaction to occur.\nBond breaking requires energy input; Ea provides this initial energy to get the reaction started.',
            topic: 'Collision theory and activation energy',
        },
        {
            id: 'fc-t9-6',
            front: 'What is steric hindrance and how does it affect reaction rate?',
            back: 'Steric hindrance: bulky groups around a reactive site physically block the approach of another reagent in the correct orientation.\nEffect: increases proportion of unsuccessful collisions → decreases rate.',
            topic: 'Collision theory and activation energy',
        },

        // Subtopic 2
        {
            id: 'fc-t9-7',
            front: 'Explain how increasing concentration increases reaction rate.',
            back: 'More particles per unit volume → molecules are closer together → collision frequency increases → more successful collisions per second → faster rate.\n(Ea and M-B distribution are unchanged.)',
            topic: 'Effect of concentration and pressure',
        },
        {
            id: 'fc-t9-8',
            front: 'Why does increasing surface area increase the rate of a heterogeneous reaction?',
            back: 'Reactions involving solids occur only at the surface. Grinding into powder greatly increases total surface area, providing more collision sites per second for reactant molecules.',
            topic: 'Effect of concentration and pressure',
        },

        // Subtopic 3
        {
            id: 'fc-t9-9',
            front: 'Describe the key features of a Maxwell–Boltzmann energy distribution curve.',
            back: '• Starts at (0,0) — no molecules have zero energy\n• Rises to a peak (most probable energy)\n• Mean energy is slightly right of peak\n• Tail never reaches zero at high energies\n• Total area = total number of molecules',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'fc-t9-10',
            front: 'What changes to the Maxwell–Boltzmann curve when temperature increases?',
            back: '• Peak shifts to the RIGHT (higher energy)\n• Peak becomes LOWER (curve flattens)\n• Total area stays CONSTANT (same number of molecules)\n• Area to the right of Ea increases disproportionately',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'fc-t9-11',
            front: 'What is the "rough rule" for the effect of temperature on reaction rate?',
            back: 'Near room temperature, the rate approximately DOUBLES for every 10°C rise.\nThis is because the fraction of molecules with E ≥ Ea increases exponentially with temperature.',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },
        {
            id: 'fc-t9-12',
            front: 'Why is the increase in collision frequency a minor reason (not the main reason) for rate increase with temperature?',
            back: 'A 10°C temperature rise only increases collision frequency by approximately 1.7% (small).\nThe dominant effect is the disproportionately large increase in the fraction of molecules with E ≥ Ea.',
            topic: 'Maxwell-Boltzmann distribution and Temperature',
        },

        // Subtopic 4
        {
            id: 'fc-t9-13',
            front: 'What is the correct way to describe how a catalyst affects activation energy?',
            back: 'CORRECT: "A catalyst provides an alternative reaction route with a LOWER activation energy."\nINCORRECT: "A catalyst lowers the activation energy." (sounds like it changes the same route)',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'fc-t9-14',
            front: 'How does a catalyst affect the Maxwell–Boltzmann distribution and ΔH?',
            back: '• M-B curve shape: UNCHANGED\n• A new, lower Ea line is added to the left\n• Larger fraction of existing molecules can now react\n• ΔH: UNCHANGED (reactants and products at same energies)',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'fc-t9-15',
            front: 'Distinguish between a transition state and a reaction intermediate.',
            back: 'Transition state:\n• At energy MAXIMUM (peak)\n• Cannot be isolated\n• Bonds half-broken, half-formed\n\nIntermediate:\n• At energy MINIMUM (dip between peaks)\n• May be detected or isolated\n• Temporarily stable species',
            topic: 'Effect of catalysts on rate',
        },
        {
            id: 'fc-t9-16',
            front: 'Name five industrial heterogeneous catalysts and their processes.',
            back: '• Fe (+ KOH) → Haber process (NH₃)\n• V₂O₅ → Contact process (SO₃/H₂SO₄)\n• MnO₂ → decomposition of H₂O₂\n• Ni → hydrogenation of alkenes\n• H₃PO₄ on SiO₂ → hydration of ethene',
            topic: 'Effect of catalysts on rate',
        },

        // Subtopic 5
        {
            id: 'fc-t9-17',
            front: 'What conditions are required for dynamic equilibrium?',
            back: '1. CLOSED system (no substances entering or leaving)\n2. Forward rate = reverse rate\n3. Concentrations of all species remain constant (not necessarily equal)',
            topic: 'Reversible reactions and dynamic equilibrium',
        },
        {
            id: 'fc-t9-18',
            front: 'Why is equilibrium described as "dynamic"?',
            back: 'Because both the forward AND reverse reactions continue to occur simultaneously at the molecular level. "Dynamic" = still moving/reacting. The net macroscopic change is zero, but microscopic reactions never stop.',
            topic: 'Reversible reactions and dynamic equilibrium',
        },

        // Subtopic 6
        {
            id: 'fc-t9-19',
            front: 'State Le Chatelier\'s principle.',
            back: 'If a system at dynamic equilibrium is subjected to a change in conditions, the position of equilibrium shifts to OPPOSE (minimise) that change.',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'fc-t9-20',
            front: 'How does a change in temperature affect the position of equilibrium? (Le Chatelier)',
            back: '• Increase T → shifts in ENDOTHERMIC direction (absorbs extra heat)\n• Decrease T → shifts in EXOTHERMIC direction (generates heat)\n\nNote: temperature change ALSO changes the equilibrium constant Kc.',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'fc-t9-21',
            front: 'How does a change in pressure affect the position of a gaseous equilibrium?',
            back: '• Increase pressure → shifts toward FEWER moles of gas\n• Decrease pressure → shifts toward MORE moles of gas\n• No effect if gas moles are equal on both sides of the equation',
            topic: 'Le Chatelier\'s principle',
        },
        {
            id: 'fc-t9-22',
            front: 'In the methanol synthesis CO(g) + 2H₂(g) ⇌ CH₃OH(g), ΔH = −90 kJ mol⁻¹: state the conditions and explain the compromise.',
            back: 'Conditions: 250°C, 50–100 atm, Cu/ZnO/Al₂O₃ catalyst.\n• Low T preferred (exothermic, Le Chatelier) but too slow → 250°C compromise\n• High P preferred (3 mol gas → 1) but costly → 50–100 atm compromise\n• Unreacted gases recycled → overall ~95–98% yield',
            topic: 'Le Chatelier\'s principle',
        },

        // Subtopic 7
        {
            id: 'fc-t9-23',
            front: 'State the Haber process equation and explain the 450°C / 200 atm compromise.',
            back: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ mol⁻¹\n\n450°C: low T → high yield (exothermic) but too slow; high T → fast but poor yield. 450°C balances both with Fe catalyst.\n200 atm: high P → right (4 → 2 mol gas); cost/danger limits higher pressure.',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'fc-t9-24',
            front: 'State the Contact process equilibrium and explain why only 1–2 atm is used.',
            back: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)  ΔH = −196 kJ mol⁻¹\n\nConversion is already ~99.5% at 1–2 atm with V₂O₅ at 450°C. The marginal gain from higher pressure does not justify the engineering cost of high-pressure equipment.',
            topic: 'Compromises in Industrial Processes',
        },
        {
            id: 'fc-t9-25',
            front: 'Why is NH₃ removed as it forms in the Haber process, and what is the single-pass conversion rate?',
            back: '• NH₃ is liquefied and removed continuously\n• Removing a product shifts equilibrium RIGHT (Le Chatelier) → more NH₃ produced\n• Single-pass conversion: only ~15%\n• Unreacted N₂ and H₂ are recycled → overall conversion approaches 98%',
            topic: 'Compromises in Industrial Processes',
        },
    ],
};
