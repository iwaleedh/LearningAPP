export const note_chemistry_5_17_7 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-catalysis',
      data: {
        text: 'Understand heterogeneous and homogeneous catalysis by transition metals; use the HARD mnemonic for heterogeneous catalysis steps; explain Contact Process conditions (V₂O₅, ~725 K, ~2 atm) and catalytic converters (Pt/Rh); compare Fe²⁺ and Fe³⁺ catalytic mechanisms for S₂O₈²⁻/I⁻; explain autocatalysis with Mn²⁺.'
      }
    },
    {
      type: 'heading',
      id: 'h-catalysis-intro',
      data: { text: 'Transition Metal Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-catalysis-def',
      data: {
        text: 'A <strong>catalyst</strong> is a substance that increases the rate of a reaction without being permanently chemically changed. Catalysts work by providing an alternative reaction pathway with a lower activation energy. Transition metals are exceptionally good catalysts because of their <strong>variable oxidation states</strong>. The ability to easily shift between different oxidation states allows transition metals to accept electrons from reactants, activate them, and then transfer the electrons to products—a process that would be very slow or impossible without the catalyst.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-catalytic-cycle',
      data: {
        text: 'The transition metal participates in a <strong>catalytic cycle</strong>: the metal is oxidised (accepts electrons) in one step, then reduced (loses electrons) in a subsequent step, returning to its original oxidation state. Over many cycles, the metal catalyst facilitates the conversion of reactants to products without being consumed. The variable oxidation states are the key—they allow the metal to form intermediate complexes with both reactants and products, lowering the overall activation energy.'
      }
    },
    {
      type: 'heading',
      id: 'h-heterogeneous-catalysis',
      data: { text: 'Heterogeneous Catalysis', level: 2 }
    },
    { type: 'callout', id: 'callout-hard-mnemonic', data: { style: 'tip', title: 'HARD Mnemonic — Heterogeneous Catalysis Steps', text: 'H — Heterogeneous (catalyst is solid; reactants are gas or liquid). A — Adsorption (reactant molecules adsorb onto catalyst surface; surface bonds weaken reactant bonds). R — Reaction (bond breaking and forming at the surface; new species form). D — Desorption (product molecules leave the surface; catalyst is regenerated). Remember: Without adsorption, the catalyst cannot lower Eₐ — the surface interaction is essential.' } },
    {
      type: 'paragraph',
      id: 'p-heterogeneous-def',
      data: {
        text: '<strong>Heterogeneous catalysis</strong> occurs when the catalyst is in a different physical state from the reactants. Typically, the catalyst is a solid metal or metal oxide, while reactants are gases or liquids. The reaction occurs on the surface of the catalyst. Reactant molecules adsorb (stick) to the catalyst surface, undergo reaction, and then desorb as products. This process lowers the activation energy compared to the uncatalysed gas-phase reaction.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-heterogeneous-mechanism',
      data: {
        text: '<strong>Heterogeneous catalytic mechanism (general):</strong><br/>' +
        '1. <strong>Adsorption:</strong> Reactants adsorb onto the catalyst surface, forming weak bonds or donor-acceptor interactions<br/>' +
        '2. <strong>Activation:</strong> The bonds in reactants are stretched and weakened by interaction with the catalyst surface<br/>' +
        '3. <strong>Reaction:</strong> Reaction occurs on the surface (e.g., breaking of bonds, rearrangement)<br/>' +
        '4. <strong>Desorption:</strong> Products desorb (leave the surface), regenerating the catalyst<br/>' +
        'The key advantage: the reaction occurs on the surface where reactant concentration is high, and the transition metal\'s variable oxidation states stabilise intermediate complexes.'
      }
    },
    {
      type: 'callout',
      id: 'callout-adsorb-vs-absorb',
      data: {
        style: 'warning',
        title: 'Exam Warning — Adsorption vs Absorption',
        text: 'Always use the term <strong>adsorb</strong> (with a "d") in heterogeneous catalysis. It means sticking to a surface. <strong>Absorption</strong> (with a "b") means being taken up fully inside the bulk structure of another substance. Also, note that heterogeneous means the catalyst is in a different <strong>phase</strong> from the reactants (phase is slightly more specific than physical state, though they usually overlap).'
      }
    },
    {
      type: 'callout',
      id: 'callout-good-catalysts',
      data: {
        style: 'tip',
        title: 'What makes a good heterogeneous catalyst?',
        text: 'A good catalyst must adsorb molecules strongly enough to weaken reactant bonds, but not so strongly that products cannot easily desorb. <strong>Silver</strong> is poor because it adsorbs too weakly. <strong>Tungsten</strong> is poor because it adsorbs too strongly (the molecules never leave). Metals like <strong>Platinum</strong> and <strong>Nickel</strong> offer the "Goldilocks" balance representing excellent catalytic properties.'
      }
    },
    {
      type: 'svg',
      id: 'svg-surface-adsorption',
      data: {
        caption: 'Surface adsorption mechanism in heterogeneous catalysis',
        svg: `<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <!-- Background -->
  <rect width="520" height="170" fill="#0f172a" rx="8"/>
  <!-- Step labels -->
  <text x="80" y="18" text-anchor="middle" font-weight="bold" fill="#5c35cc" font-size="12">Adsorption</text>
  <text x="260" y="18" text-anchor="middle" font-weight="bold" fill="#2e7d32" font-size="12">Reaction</text>
  <text x="435" y="18" text-anchor="middle" font-weight="bold" fill="#c0392b" font-size="12">Desorption</text>
  <!-- Metal surface - all three panels -->
  <rect x="10" y="120" width="155" height="20" fill="#9e9e9e" rx="3"/>
  <rect x="180" y="120" width="155" height="20" fill="#9e9e9e" rx="3"/>
  <rect x="350" y="120" width="155" height="20" fill="#9e9e9e" rx="3"/>
  <text x="87" y="133" text-anchor="middle" fill="#1e293b" font-size="10">Metal surface (solid)</text>
  <text x="257" y="133" text-anchor="middle" fill="#1e293b" font-size="10">Metal surface (solid)</text>
  <text x="427" y="133" text-anchor="middle" fill="#1e293b" font-size="10">Metal surface (solid)</text>
  <!-- Panel 1: Adsorption — A and B molecules adsorbing -->
  <circle cx="55" cy="90" r="13" fill="#90caf9" stroke="#1976d2" stroke-width="1.5"/>
  <text x="55" y="95" text-anchor="middle" fill="#1976d2" font-weight="bold">A</text>
  <circle cx="100" cy="90" r="13" fill="#44370a" stroke="#f57c00" stroke-width="1.5"/>
  <text x="100" y="95" text-anchor="middle" fill="#f57c00" font-weight="bold">B</text>
  <!-- dashed bond lines to surface -->
  <line x1="55" y1="103" x2="55" y2="120" stroke="#1976d2" stroke-dasharray="3,2" stroke-width="1.5"/>
  <line x1="100" y1="103" x2="100" y2="120" stroke="#f57c00" stroke-dasharray="3,2" stroke-width="1.5"/>
  <text x="75" y="113" text-anchor="middle" fill="#555" font-size="9">weak surface bonds</text>
  <!-- Panel 2: Reaction — A-B bond weakens, new bond forms -->
  <circle cx="225" cy="88" r="13" fill="#90caf9" stroke="#1976d2" stroke-width="1.5"/>
  <text x="225" y="93" text-anchor="middle" fill="#1976d2" font-weight="bold">A</text>
  <circle cx="270" cy="88" r="13" fill="#44370a" stroke="#f57c00" stroke-width="1.5"/>
  <text x="270" y="93" text-anchor="middle" fill="#f57c00" font-weight="bold">B</text>
  <line x1="237" y1="88" x2="258" y2="88" stroke="#c0392b" stroke-width="2"/>
  <text x="248" y="82" fill="#c0392b" font-size="9" text-anchor="middle">bond forms</text>
  <line x1="225" y1="101" x2="225" y2="120" stroke="#1976d2" stroke-dasharray="3,2" stroke-width="1.5"/>
  <line x1="270" y1="101" x2="270" y2="120" stroke="#f57c00" stroke-dasharray="3,2" stroke-width="1.5"/>
  <!-- Panel 3: Desorption — AB product leaves -->
  <ellipse cx="427" cy="70" rx="28" ry="16" fill="#0a2e1a" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="427" y="75" text-anchor="middle" fill="#2e7d32" font-weight="bold">AB</text>
  <line x1="427" y1="86" x2="427" y2="105" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="452" y="98" fill="#555" font-size="9">product</text>
  <text x="452" y="108" fill="#555" font-size="9">desorbs</text>
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#2e7d32"/></marker></defs>
  <!-- Arrows between panels -->
  <text x="166" y="95" font-size="18" fill="#777">→</text>
  <text x="338" y="95" font-size="18" fill="#777">→</text>
</svg>`
      }
    },
    {
      type: 'heading',
      id: 'h-haber-process',
      data: { text: 'Example 1: Haber Process — Iron Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-haber-intro',
      data: {
        text: 'The <strong>Haber process</strong> synthesises ammonia from nitrogen and hydrogen: N₂ + 3H₂ ⇌ 2NH₃. This reaction is thermodynamically favourable but kinetically very slow because the N≡N triple bond is extremely strong. Iron metal (with iron(II) and iron(III) oxides as promoters) is used as the catalyst.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-haber-mechanism',
      data: {
        text: '<strong>Catalytic cycle in the Haber process:</strong><br/>' +
        '1. N₂ and H₂ adsorb onto Fe surface<br/>' +
        '2. Fe accepts electrons from H₂: H₂ + Fe → 2H—Fe (with Fe in mixed oxidation states)<br/>' +
        '3. The weakened N≡N bond breaks: N₂ + Fe → N≡Fe and N≡Fe (activation)<br/>' +
        '4. Hydrogen atoms attack nitrogen: N≡Fe + H—Fe → NH₂—Fe and NH—Fe<br/>' +
        '5. NH₃ forms and desorbs from the surface<br/>' +
        '6. Fe is regenerated and ready for the next cycle<br/>' +
        '<strong>Key role of Fe:</strong> Variable oxidation state (0, +2, +3) allows stabilisation of intermediate complexes with N₂ and H radicals.'
      }
    },
    {
      type: 'heading',
      id: 'h-contact-process',
      data: { text: 'Example 2: Contact Process — Vanadium(V) Oxide Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-contact-intro',
      data: {
        text: 'The <strong>Contact Process</strong> oxidises sulfur dioxide to sulfur trioxide: 2SO₂ + O₂ ⇌ 2SO₃. Vanadium(V) oxide (V₂O₅) is the catalyst. <strong>Conditions: ~725 K (450°C), ~2 atm.</strong> These represent a compromise — higher temperature favours rate but lowers equilibrium yield; lower pressure reduces cost since conversion is already &gt;98% at 2 atm.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-contact-mechanism',
      data: {
        text: '<strong>Catalytic cycle in the Contact Process:</strong><br/>' +
        '<strong>Forward step:</strong> SO₂ + V⁵⁺ (in V₂O₅) → SO₃ + V⁴⁺ (reduction of vanadium)<br/>' +
        '<strong>Regeneration step:</strong> V⁴⁺ + ½O₂ → V⁵⁺ (oxidation of vanadium back to +5)<br/>' +
        '<strong>Overall:</strong> 2SO₂ + O₂ → 2SO₃<br/>' +
        '<strong>Key role of V₂O₅:</strong> Variable oxidation state (+4/+5) allows the oxide to oxidise SO₂ in the first step and then be re-oxidised by O₂ in the second step. Without the variable oxidation state, this cycle could not occur.'
      }
    },
    {
      type: 'callout',
      id: 'callout-contact-process',
      data: {
        style: 'worked',
        title: 'V₂O₅ as a True Catalyst',
        text: 'V₂O₅ is produced at the end of the catalytic cycle in the same form as it started. It is not consumed or changed—it simply facilitates electron transfer between SO₂ and O₂. This is the hallmark of true catalysis.'
      }
    },
    {
      type: 'heading',
      id: 'h-hydrogenation',
      data: { text: 'Example 3: Hydrogenation of Alkenes — Nickel Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-hydrogenation-intro',
      data: {
        text: 'Nickel is used as a heterogeneous catalyst to add hydrogen across C=C double bonds. This reaction is widely used in the food industry to convert unsaturated liquid vegetable oils into solid saturated fats (margarine manufacture). The alkene and hydrogen gases adsorb onto the solid nickel surface (typically at 150°C), where the reaction occurs before the saturated alkane product desorbs.'
      }
    },
    {
      type: 'list',
      id: 'list-hydrogenation-steps',
      data: {
        style: 'numbered',
        items: [
          'Ethene molecules are <strong>adsorbed</strong> on the surface of the nickel. The double bond between carbon atoms breaks in half, using those electrons to bond the carbon atoms directly to the nickel surface.',
          'Hydrogen molecules ($H_2$) are also adsorbed. When they bind to the nickel, the H–H bond breaks completely, leaving individual hydrogen atoms moving freely on the metal surface.',
          'When a hydrogen atom diffuses close to a bonded carbon atom, a C–H bond is formed, detaching that carbon from the nickel surface.',
          'Once the second carbon atom bonds with another available hydrogen, the new ethane molecule is fully formed and <strong>desorbs</strong> (breaks away) from the catalyst.'
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-catalytic-converters',
      data: { text: 'Example 4: Catalytic Converters — Pt and Rh', level: 2 }
    },
    {
      type: 'list',
      id: 'list-converter',
      data: { style: 'bullet', items: [
        'Catalyst: platinum (Pt) oxidises CO and hydrocarbons; rhodium (Rh) reduces NOₓ',
        'Reactants are in the gas phase; catalyst is solid — heterogeneous catalysis',
        'Combined equation for CO and NO: 2CO + 2NO → 2CO₂ + N₂ (key exam equation)',
        'Separate oxidation: 2CO + O₂ → 2CO₂ (Pt)',
        'Separate reduction: NOₓ + reducing agent → N₂ (Rh)',
        'Gases adsorb onto the Pt/Rh surface (HARD mechanism), bonds weaken, react, products desorb',
        'Catalytic converters require warm-up — ineffective when engine is cold (adsorption less effective at low T)',
        'Lead (from leaded petrol) poisons the catalyst — that is why unleaded fuel must be used'
      ] }
    },
    {
      type: 'callout',
      id: 'callout-catalyst-poisoning',
      data: {
        style: 'warning',
        title: 'Concept Check: Catalyst Poisoning',
        text: '<strong>Catalyst poisoning</strong> occurs when a substance which isn\'t a part of the reaction gets very strongly, permanently adsorbed onto the active sites of the catalyst. This physically blocks the intended reactants from reaching the surface. Historically, Lead (added to older petrol / gasoline) would coat the platinum honeycomb inside converters, destroying their catalytic ability.'
      }
    },
    {
      type: 'heading',
      id: 'h-nitric-acid-manufacture',
      data: { text: 'Example 5: Manufacture of Nitric Acid from Ammonia — Pt/Rh Catalyst', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-nitric-acid-intro',
      data: {
        text: 'The manufacture of nitric acid from ammonia (the Ostwald Process) relies on heterogeneous catalysis involving a <strong>platinum-rhodium</strong> catalyst, typically shaped into large sheets of metal gauze to maximise surface area and minimise cost.'
      }
    },
    {
      type: 'list',
      id: 'list-nitric-acid-steps',
      data: {
        style: 'numbered',
        items: [
          '<strong>Oxidation of Ammonia</strong>: Ammonia (from the Haber process) is oxidised by oxygen in the air at around 900°C over the Pt/Rh catalyst. The reaction is highly exothermic, so the high temperature is maintained by the heat evolved.',
          'The equation is: <code>4NH₃(g) + 5O₂(g) ⇌ 4NO(g) + 6H₂O(g)</code>',
          'The resulting nitrogen monoxide (NO) is cooled, and then further oxidised (without a catalyst) in excess air: <code>2NO(g) + O₂(g) → 2NO₂(g)</code>',
          'The nitrogen dioxide (NO₂) is then absorbed in water (with excess air) to form concentrated nitric acid: <code>4NO₂(g) + 2H₂O(l) + O₂(g) → 4HNO₃(aq)</code>'
        ]
      }
    },
    {
      type: 'callout',
      id: 'callout-catalyst-reversible',
      data: {
        style: 'tip',
        title: 'Reversible Reactions and Catalysts',
        text: 'Notice that both the Haber Process and the first step of nitric acid manufacture are reversible reactions (⇌). It is important to remember that the catalyst makes absolutely <strong>no difference to the equilibrium position</strong>. It simply speeds up both the forward and reverse reactions by the exact same amount.'
      }
    },
    {
      type: 'heading',
      id: 'h-homogeneous-catalysis',
      data: { text: 'Homogeneous Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-homogeneous-def',
      data: {
        text: '<strong>Homogeneous catalysis</strong> occurs when the catalyst is in the same physical state as the reactants. In homogeneous systems, the catalyst is dissolved in the same solvent as the reactants, forming a single phase. The catalyst forms intermediate complexes with reactants, activates them, and releases products—all in solution.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-homogeneous-mechanism',
      data: {
        text: '<strong>Homogeneous catalytic mechanism (general):</strong><br/>' +
        '1. <strong>Complex formation:</strong> Catalyst M forms a complex with reactant R: M + R → MR<br/>' +
        '2. <strong>Activation:</strong> The complex activates R (stretches/weakens bonds): MR (activated)<br/>' +
        '3. <strong>Reaction:</strong> R is transformed (via electron transfer or bond rearrangement)<br/>' +
        '4. <strong>Product release:</strong> Product P is released: MP → M + P<br/>' +
        '5. <strong>Catalyst regeneration:</strong> M is available for the next cycle<br/>' +
        'Advantage over heterogeneous: higher surface area (entire solution) and easy mixing. Disadvantage: catalyst recovery can be difficult.'
      }
    },
    {
      type: 'heading',
      id: 'h-homogeneous-examples',
      data: { text: 'Examples of Homogeneous Catalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-mn-permanganate',
      data: {
        text: '<strong>Example 1: Mn²⁺ catalysing permanganate reactions</strong><br/>' +
        'Permanganate (MnO₄⁻, Mn in +7 oxidation state) can oxidise organic compounds in acidic solution. Mn²⁺ (manganese in +2 oxidation state) acts as a homogeneous catalyst, forming complexes with organic reactants and facilitating electron transfer. The Mn²⁺ cycles between +2 and +3 oxidation states, activating substrates that would react very slowly with permanganate alone.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-fe-s2o8',
      data: {
        text: '<strong>Example 2: Fe²⁺/Fe³⁺ catalysing S₂O₈²⁻/I⁻ reaction</strong><br/>' +
        'Reaction: S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂<br/>' +
        'This reaction is very slow in the absence of catalyst. Fe²⁺ (or Fe³⁺) acts as a homogeneous catalyst:<br/>' +
        '<strong>Step 1:</strong> 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻ (Fe²⁺ is oxidised)<br/>' +
        '<strong>Step 2:</strong> 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (Fe³⁺ is reduced)<br/>' +
        '<strong>Overall:</strong> S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂<br/>' +
        '<strong>Catalysis:</strong> Fe²⁺ is oxidised in step 1 and regenerated in step 2. The variable oxidation states (+2/+3) enable the catalytic cycle. Without the catalyst, the reaction is kinetically slow; with catalyst, it is fast.'
      }
    },
    { type: 'callout', id: 'callout-fe3-mechanism', data: { style: 'worked', title: 'Fe³⁺ as Alternative Catalyst (S₂O₈²⁻ + I⁻)', text: 'If Fe³⁺ is the starting catalyst (instead of Fe²⁺), the two steps run in reverse order but the overall effect is identical. Step 1: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (Fe³⁺ is reduced). Step 2: 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻ (Fe²⁺ is re-oxidised). Overall: S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂. Iron is regenerated in either route — variable oxidation states (+2/+3) are the key. Exam note: both Fe²⁺ and Fe³⁺ are valid answers when asked which iron species can act as catalyst.' } },
    { type: 'callout', id: 'callout-why-tm-catalyst', data: { style: 'key', title: 'Exam MCQ — Why Are Transition Metals Good Catalysts?', text: 'The correct exam answer is: "a relatively small amount of energy is required to change the oxidation state of the transition metal." This means the activation energy for the redox steps in the catalytic cycle is low — the metal can switch oxidation states easily, forming intermediates rapidly. Do NOT say "they have variable oxidation states" alone without explaining why this helps kinetically.' } },
    {
      type: 'heading',
      id: 'h-autocatalysis',
      data: { text: 'Autocatalysis', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-autocatalysis-def',
      data: {
        text: '<strong>Autocatalysis</strong> is a special case where a product of the reaction acts as a catalyst for the reaction. The Mn²⁺-catalysed permanganate oxidations are classic examples of autocatalysis: the Mn²⁺ produced during the reaction catalyses further reaction, causing the reaction rate to increase as the reaction proceeds (until one reactant is depleted).'
      }
    },
    {
      type: 'equation',
      id: 'eq-autocatalysis-manganate',
      data: {
        html: '2MnO<sub>4</sub><sup>−</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 16H<sup>+</sup> → 2Mn<sup>2+</sup> + 10CO<sub>2</sub> + 8H<sub>2</sub>O',
        caption: 'The oxidation of ethanedioate ions by manganate(VII) ions. The Mn²⁺ product acts as an auto-catalyst.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-autocatalysis-pattern',
      data: {
        text: '<strong>Autocatalytic rate pattern:</strong><br/>' +
        '• Initial phase (t = 0 to early): Reaction is slow (uncatalysed) because no Mn²⁺ is present yet.<br/>' +
        '• Middle phase: Reaction accelerates (Mn²⁺ accumulates rapidly, providing alternative lower $E_a$ route).<br/>' +
        '• Late phase: Reaction slows again (reactant concentration depletion dominates over the abundance of catalyst).'
      }
    },
    {
      type: 'svg',
      id: 'svg-autocatalysis-curve',
      data: {
        caption: 'Rate curve for an autocatalytic reaction against time (S-shape).',
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Grid/Axes -->
  <line x1="50" y1="20" x2="50" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="50" y1="200" x2="380" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="25" y="120" transform="rotate(-90 25 120)" text-anchor="middle" font-size="12">Concentration of Reactant</text>
  <text x="215" y="235" text-anchor="middle" font-size="12">Time</text>
  <!-- Normal curve (faded/dashed) -->
  <path d="M 50 40 Q 150 40, 360 190" fill="none" stroke="#999" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="310" y="160" fill="#999" font-size="10">Normal Reaction</text>
  <!-- Autocatalysis curve -->
  <path d="M 50 40 C 200 40, 150 190, 360 190" fill="none" stroke="#e91e63" stroke-width="3"/>
  <text x="240" y="110" fill="#e91e63" font-size="12" font-weight="bold">Autocatalysis</text>
  <!-- Labels -->
  <text x="110" y="30" font-size="10" fill="#1976d2">Slow start</text>
  <text x="180" y="120" font-size="10" fill="#d32f2f">Rapid acceleration</text>
  <text x="280" y="215" font-size="10" fill="#f57c00">Reactants run out</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      type: 'checklist',
      id: 'checklist-catalysis',
      data: {
        items: [
          { text: 'Catalyst lowers activation energy without being permanently changed', checked: false },
          { text: 'HARD mnemonic: Heterogeneous→ Adsorption → Reaction → Desorption', checked: false },
          { text: 'Haber process: Fe catalyst, N₂ + 3H₂ ⇌ 2NH₃', checked: false },
          { text: 'Contact process: V₂O₅ catalyst, ~725 K, ~2 atm; V⁵⁺ ↔ V⁴⁺ cycle', checked: false },
          { text: 'Catalytic converter: Pt (oxidises CO/hydrocarbons) + Rh (reduces NOₓ); 2CO + 2NO → 2CO₂ + N₂', checked: false },
          { text: 'Nitric acid manufacture: ~900°C over Pt/Rh gauze; 4NH₃ + 5O₂ ⇌ 4NO + 6H₂O', checked: false },
          { text: 'Fe²⁺ catalyses S₂O₈²⁻/I⁻: Step 1: 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻; Step 2: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂', checked: false },
          { text: 'Fe³⁺ catalyses S₂O₈²⁻/I⁻ via same steps in reverse order — both are valid', checked: false },
          { text: 'Autocatalysis: Mn²⁺ product accelerates KMnO₄ + ethanedioate reaction; S-shaped rate curve', checked: false },
          { text: 'Why TMs are good catalysts: small energy required to change oxidation state (exam MCQ answer)', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Catalysts lower Eₐ; transition metals do this via variable oxidation states (small energy change between OS) and via surface adsorption (HARD: Heterogeneous-Adsorption-Reaction-Desorption). Apply: Write the two-step Fe²⁺ mechanism for S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂, and then the Fe³⁺ mechanism. Analyse: Why does the rate of KMnO₄ + ethanedioate increase over time (autocatalysis — Mn²⁺ product)? Evaluate: Why must unleaded petrol be used with catalytic converters?'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-catalysis',
      data: {
        text: 'Transition metals catalyse reactions because their variable oxidation states facilitate electron transfer. Heterogeneous catalysis (solid catalyst, gas/liquid reactants): Haber process (Fe, N₂ + 3H₂ → 2NH₃), Contact process (V₂O₅, SO₂ + ½O₂ → SO₃), catalytic converters (Pt/Pd). Homogeneous catalysis (dissolved catalyst): Mn²⁺ in permanganate oxidations, Fe²⁺/Fe³⁺ in S₂O₈²⁻/I⁻ reaction. The catalyst cycles through different oxidation states, forming intermediates with reactants and activating them. Autocatalysis: product (e.g., Mn²⁺) catalyses the reaction, causing acceleration as reaction proceeds. All examples rely on the flexible oxidation states of transition metals.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-catalysis-intro',
        prompt: 'Define a catalyst and explain why transition metals are good catalysts.'
      },
      {
        id: 'cue-2',
        blockId: 'p-catalytic-cycle',
        prompt: 'Describe a catalytic cycle. How do variable oxidation states enable catalysis?'
      },
      {
        id: 'cue-3',
        blockId: 'p-haber-mechanism',
        prompt: 'Describe the catalytic cycle in the Haber process. What is the role of iron?'
      },
      {
        id: 'cue-4',
        blockId: 'p-contact-mechanism',
        prompt: 'Explain how V₂O₅ catalyses the oxidation of SO₂ to SO₃.'
      },
      {
        id: 'cue-nitric',
        blockId: 'list-nitric-acid-steps',
        prompt: 'Write the primary catalytic equation for the manufacture of nitric acid from ammonia. What catalyst is used?'
      },
      {
        id: 'cue-reversible',
        blockId: 'callout-catalyst-reversible',
        prompt: 'What effect does a catalyst have on the equilibrium position of a reversible reaction (e.g. Haber process)?'
      },
      {
        id: 'cue-5',
        blockId: 'p-fe-s2o8',
        prompt: 'Show the Fe²⁺-catalysed mechanism for S₂O₈²⁻ + 2I⁻ reaction.'
      },
      {
        id: 'cue-6',
        blockId: 'callout-adsorb-vs-absorb',
        prompt: 'What is the operational difference between the terms "adsorb" and "absorb"? Why is "adsorb" the correct term for heterogeneous catalysis?'
      },
      {
        id: 'cue-7',
        blockId: 'callout-catalyst-poisoning',
        prompt: 'What is catalyst poisoning? Explain using the historical example of leaded petrol in catalytic converters.'
      },
      {
        id: 'cue-8',
        blockId: 'svg-autocatalysis-curve',
        prompt: 'Describe the shape of the concentration-time curve for an autocatalytic reaction. Why does it start slowly before rapidly accelerating?'
      }
    ],
    summaryText: 'TMs catalyse reactions because small energy change needed to alter oxidation state. HARD: Adsorption → Reaction at surface → Desorption. Haber: Fe, N₂ + 3H₂ ⇌ 2NH₃. Contact: V₂O₅, ~725 K, ~2 atm. Nitric Acid: Pt/Rh, 4NH₃ + 5O₂ ⇌ 4NO + 6H₂O. Catalysts speed up forward/reverse reactions equally. Converters: Pt/Rh; 2CO + 2NO → 2CO₂ + N₂. Homogeneous Fe²⁺: 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻; 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂. Autocatalysis: Mn²⁺ product catalyses KMnO₄ reactions.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Industrial Catalysis by Transition Metals',
      detail: 'The Haber process, Contact process, Nitric Acid manufacture, and catalytic converters are industrial-scale applications of transition metal catalysis.',
      year: '2023',
      source: 'Industrial Chemistry and A-Level Chemistry',
      tags: ['catalysis', 'haber', 'contact-process', 'homogeneous', 'heterogeneous']
    }
  ]
};
