/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 2
 * "Covalent bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.1
 */
export const note_chemistry_1_3_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Define covalent bonding. Draw dot-and-cross diagrams for covalent molecules including double bonds and dative covalent bonds. Understand lone pairs. Recognise exceptions to the octet rule: BF₃ (electron deficient), PCl₅ (expanded octet), NCl₅ (impossible — no 2d orbitals).' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Covalent Bonding', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Covalent Bond',
        text: 'A <strong>covalent bond</strong> is formed by the <strong>mutual sharing</strong> of one or more pairs of electrons between two non-metal atoms. The shared pair(s) are attracted to both nuclei simultaneously, holding the atoms together.<br/><br/>A <strong>single bond</strong> = one shared pair (2 electrons).<br/>A <strong>double bond</strong> = two shared pairs (4 electrons).<br/>A <strong>triple bond</strong> = three shared pairs (6 electrons).'
      },
      terms: ['Covalent bond', 'Lone pair', 'Bonding pair', 'Single bond', 'Double bond', 'Triple bond']
    },
    {
      id: 'list-covalent-key',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Covalent bonding occurs between <strong>two non-metal atoms</strong> (or hydrogen)',
          'Both atoms contribute one electron each to form one <strong>bonding pair</strong> (sigma bond in a single bond)',
          'The bonding electrons are simultaneously attracted to <strong>both nuclei</strong> — this electrostatic attraction holds the molecule together',
          'The number of covalent bonds an atom forms equals its number of <strong>unpaired outer electrons</strong> (valence electrons available for bonding)',
          'Covalent bonds are <strong>directional</strong> — they have a fixed bond angle, giving molecules a definite shape',
          '<strong>Lone pairs</strong> (non-bonding pairs) play no part in bonding but <em>do</em> affect molecular shape (VSEPR) and reactivity (Lewis base behaviour)',
          'The strength of a covalent bond increases and its length decreases as the bond order increases: triple > double > single'
        ]
      },
      terms: []
    },
    {
      id: 'table-bond-types',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of single, double, and triple covalent bonds',
        headers: ['Bond type', 'Shared electrons', 'Bond order', 'Relative length', 'Relative strength', 'Example'],
        rows: [
          ['Single (σ)', '2 (1 pair)', '1', 'Longest', 'Weakest', 'C–C in ethane (154 pm, 347 kJ mol⁻¹)'],
          ['Double (σ + π)', '4 (2 pairs)', '2', 'Shorter', 'Stronger', 'C=C in ethene (134 pm, 614 kJ mol⁻¹)'],
          ['Triple (σ + 2π)', '6 (3 pairs)', '3', 'Shortest', 'Strongest', 'C≡C in ethyne (120 pm, 839 kJ mol⁻¹)'],
          ['N≡N (reference)', '6', '3', '110 pm', '945 kJ mol⁻¹', 'Very strong — reason N₂ is unreactive']
        ]
      },
      terms: []
    },
    {
      id: 'h-dot-rules',
      type: 'heading',
      data: { text: 'Drawing Dot-and-Cross Diagrams for Covalent Molecules', level: 2 },
      terms: []
    },
    {
      id: 'list-dot',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Show <strong>only outer shell</strong> electrons (inner shells omitted for clarity)',
          'Use different symbols (dots • for one atom, crosses × for the other) so it is clear which atom each electron came from',
          'Shared pairs (bonding pairs) are drawn <em>between</em> the two atomic symbols in the overlap region',
          'Non-shared pairs (<strong>lone pairs</strong>) are drawn on the periphery of the atom they belong to, usually as a pair of dots',
          'Neutral molecules need <strong>no square brackets</strong>; ions (e.g. NH₄⁺, OH⁻) require square brackets and an overall charge label outside',
          'Count total valence electrons as a check: sum of all individual outer-shell electrons must equal the electrons drawn',
          'Period 2 elements (C, N, O, F) almost always satisfy the <strong>octet rule</strong> — 8 electrons around each atom (except H, which needs 2)',
          'For ions, add electrons to the count for each negative charge, remove for each positive charge'
        ]
      },
      terms: []
    },
    {
      id: 'svg-dot-simple',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagrams: H₂O (water), NH₃ (ammonia), CO₂ (carbon dioxide), and N₂ (nitrogen)',
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- === H₂O === -->
  <text x="75" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">H₂O</text>
  <!-- O circle -->
  <circle cx="75" cy="80" r="32" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="75" y="85" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">O</text>
  <!-- H left -->
  <circle cx="20" cy="80" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="20" y="85" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H</text>
  <!-- H right -->
  <circle cx="130" cy="80" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="130" y="85" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H</text>
  <!-- Shared electrons left (H–O bond) -->
  <text x="42" y="77" fill="#1e40af" font-size="10">•</text>
  <text x="48" y="77" fill="#dc2626" font-size="10">×</text>
  <!-- Shared electrons right (O–H bond) -->
  <text x="100" y="77" fill="#dc2626" font-size="10">•</text>
  <text x="106" y="77" fill="#1e40af" font-size="10">×</text>
  <!-- Lone pairs on O (top and bottom) -->
  <text x="62" y="55" fill="#ca8a04" font-size="10">× ×</text>
  <text x="62" y="108" fill="#ca8a04" font-size="10">• •</text>
  <!-- Labels -->
  <text x="75" y="130" text-anchor="middle" fill="#64748b" font-size="9">2 bonding pairs</text>
  <text x="75" y="142" text-anchor="middle" fill="#64748b" font-size="9">2 lone pairs on O</text>

  <!-- === NH₃ === -->
  <text x="225" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">NH₃</text>
  <!-- N circle -->
  <circle cx="225" cy="80" r="32" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="225" y="85" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">N</text>
  <!-- 3 H atoms at angles -->
  <circle cx="170" cy="110" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="170" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H</text>
  <circle cx="225" cy="130" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="225" y="135" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H</text>
  <circle cx="280" cy="110" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="280" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">H</text>
  <!-- Bonding pairs -->
  <text x="192" y="100" fill="#1e40af" font-size="10">•×</text>
  <text x="220" y="115" fill="#1e40af" font-size="10">•×</text>
  <text x="250" y="100" fill="#1e40af" font-size="10">•×</text>
  <!-- Lone pair on N (top) -->
  <text x="213" y="54" fill="#ca8a04" font-size="10">• •</text>
  <!-- Labels -->
  <text x="225" y="158" text-anchor="middle" fill="#64748b" font-size="9">3 bonding pairs</text>
  <text x="225" y="170" text-anchor="middle" fill="#64748b" font-size="9">1 lone pair on N</text>

  <!-- === CO₂ === -->
  <text x="390" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">CO₂</text>
  <!-- C -->
  <circle cx="390" cy="60" r="28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="390" y="65" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">C</text>
  <!-- O left -->
  <circle cx="315" cy="60" r="28" fill="#4a1040" stroke="#9d174d" stroke-width="1.5"/>
  <text x="315" y="65" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">O</text>
  <!-- O right -->
  <circle cx="465" cy="60" r="28" fill="#4a1040" stroke="#9d174d" stroke-width="1.5"/>
  <text x="465" y="65" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">O</text>
  <!-- Double bond left: 2 pairs -->
  <text x="343" y="53" fill="#1e40af" font-size="10">×•</text>
  <text x="343" y="67" fill="#dc2626" font-size="10">×•</text>
  <!-- Double bond right: 2 pairs -->
  <text x="422" y="53" fill="#1e40af" font-size="10">•×</text>
  <text x="422" y="67" fill="#dc2626" font-size="10">•×</text>
  <!-- Lone pairs on O left (outer side) -->
  <text x="282" y="53" fill="#ca8a04" font-size="10">× ×</text>
  <text x="282" y="74" fill="#ca8a04" font-size="10">• •</text>
  <!-- Lone pairs on O right (outer side) -->
  <text x="487" y="53" fill="#ca8a04" font-size="10">× ×</text>
  <text x="487" y="74" fill="#ca8a04" font-size="10">• •</text>
  <!-- Labels -->
  <text x="390" y="104" text-anchor="middle" fill="#64748b" font-size="9">2 double bonds (C=O)</text>
  <text x="390" y="116" text-anchor="middle" fill="#64748b" font-size="9">No lone pairs on C; 2 lone pairs on each O</text>

  <!-- === N₂ === -->
  <text x="540" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">N₂</text>
  <!-- N left -->
  <circle cx="510" cy="195" r="28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="510" y="200" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">N</text>
  <!-- N right -->
  <circle cx="570" cy="195" r="28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="570" y="200" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="13">N</text>
  <!-- Triple bond: 3 shared pairs stacked vertically -->
  <text x="534" y="189" fill="#1e40af" font-size="10">× •</text>
  <text x="534" y="199" fill="#dc2626" font-size="10">× •</text>
  <text x="534" y="209" fill="#1e40af" font-size="10">× •</text>
  <!-- Lone pairs on N left (outer) -->
  <text x="478" y="200" fill="#ca8a04" font-size="10">• •</text>
  <!-- Lone pairs on N right (outer) -->
  <text x="594" y="200" fill="#ca8a04" font-size="10">• •</text>
  <!-- Labels -->
  <text x="540" y="238" text-anchor="middle" fill="#64748b" font-size="9">Triple bond (3 shared pairs)</text>
  <text x="540" y="250" text-anchor="middle" fill="#64748b" font-size="9">1 lone pair on each N</text>

  <!-- Divider lines -->
  <line x1="155" y1="10" x2="155" y2="175" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="305" y1="10" x2="305" y2="175" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="500" y1="140" x2="500" y2="260" stroke="#e2e8f0" stroke-width="1"/>

  <!-- Key: electron symbols -->
  <rect x="10" y="190" width="285" height="50" rx="6" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
  <text x="152" y="207" text-anchor="middle" fill="#374151" font-weight="bold" font-size="10">Key</text>
  <text x="25" y="222" fill="#1e40af" font-size="11">•</text>
  <text x="32" y="222" fill="#374151" font-size="9">= electron from atom 1 (e.g. O, N, C)</text>
  <text x="25" y="235" fill="#dc2626" font-size="11">×</text>
  <text x="32" y="235" fill="#374151" font-size="9">= electron from atom 2 (e.g. H, O)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-examples',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step-by-step: drawing dot-and-cross diagrams',
        text: '<strong>Method:</strong><br/>1. Count total outer-shell electrons: sum the valence electrons of all atoms.<br/>2. Write the central atom symbol; surround with the outer atoms.<br/>3. Place shared pairs in the overlap between each pair of bonded atoms.<br/>4. Fill remaining electrons as lone pairs on outer atoms first, then central atom.<br/>5. Check: each atom (except H) should have 8 electrons around it (octet rule for Period 2).<br/><br/><strong>H₂O:</strong> O (6e⁻) + 2H (1e⁻ each) = 8 total. O forms 2 single bonds; 2 lone pairs remain on O.<br/><strong>NH₃:</strong> N (5e⁻) + 3H (1e⁻ each) = 8 total. N forms 3 single bonds; 1 lone pair on N.<br/><strong>CO₂:</strong> C (4e⁻) + 2O (6e⁻ each) = 16 total. C forms two double bonds; each O has 2 lone pairs.<br/><strong>N₂:</strong> 2N (5e⁻ each) = 10 total. Triple bond (3 pairs); 1 lone pair on each N.'
      },
      terms: []
    },
    {
      id: 'h-dative',
      type: 'heading',
      data: { text: 'Dative Covalent Bond (Co-ordinate Bond)', level: 2 },
      terms: []
    },
    {
      id: 'list-dative',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A <strong>dative covalent bond</strong> (co-ordinate bond) is a shared pair of electrons where <em>both electrons originate from the same atom</em>',
          'The atom donating the pair is called the <strong>donor</strong> (electron-pair donor = Lewis base); the receiving atom is the <strong>acceptor</strong> (Lewis acid)',
          'In a structural formula, the dative bond is shown with an arrow: <strong>N → H</strong>, pointing from donor to acceptor',
          'Once formed, a dative bond is <strong>identical in length and strength</strong> to an ordinary covalent bond — the distinction is only in how it was formed, not in its properties',
          'Dative bonds require: (a) a lone pair on the donor and (b) a vacant orbital or net positive charge on the acceptor'
        ]
      },
      terms: []
    },
    {
      id: 'callout-dative',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dative Covalent Bond',
        text: 'A <strong>dative covalent bond</strong> (also called a co-ordinate bond) is a covalent bond in which <em>both electrons in the shared pair come from the SAME atom</em>. This atom is called the <strong>donor</strong>; the atom accepting the pair is the <strong>acceptor</strong>.<br/><br/>Once formed, a dative bond is chemically identical to an ordinary covalent bond — it has the same length and strength. It is shown with an arrow (→) pointing from donor to acceptor.<br/><br/><strong>Examples:</strong><br/>• <strong>NH₄⁺ (ammonium ion):</strong> the N atom in NH₃ donates its lone pair to H⁺, e.g. NH₃ + HCl → NH₄⁺ + Cl⁻.<br/>• <strong>H₃O⁺ (hydroxonium ion):</strong> the O atom in H₂O donates its lone pair to H⁺, e.g. H₂O + HCl → H₃O⁺ + Cl⁻.<br/>• <strong>NH₃ + BF₃ adduct:</strong> N lone pair donated to empty orbital on B (BF₃ is electron-deficient).<br/>• <strong>Al₂Cl₆ (aluminium chloride dimer):</strong> Cl lone pairs bridge two Al atoms, each donating to an electron-deficient Al.'
      },
      terms: ['Dative covalent bond', 'Co-ordinate bond', 'Donor', 'Acceptor']
    },
    {
      id: 'svg-dative',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagrams showing dative bonds: NH₄⁺ (ammonium) and H₃O⁺ (hydroxonium)',
        svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- === NH4+ === -->
  <text x="140" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">NH₄⁺ (ammonium ion)</text>
  <!-- N at centre -->
  <circle cx="140" cy="110" r="30" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="140" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="14">N</text>
  <!-- 4 H atoms: top, bottom, left, right -->
  <circle cx="140" cy="55" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="140" y="60" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <circle cx="140" cy="165" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="140" y="170" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <circle cx="85" cy="110" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="85" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <circle cx="195" cy="110" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="195" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <!-- 3 normal bonding pairs (dots•crosses×) -->
  <text x="130" y="72" fill="#1e40af" font-size="10">•×</text>
  <text x="130" y="152" fill="#1e40af" font-size="10">•×</text>
  <text x="100" y="107" fill="#1e40af" font-size="10">•×</text>
  <!-- Dative bond arrow (N→H on right): arrow pointing right -->
  <line x1="173" y1="110" x2="178" y2="110" stroke="#16a34a" stroke-width="2"/>
  <polygon points="179,110 174,107 174,113" fill="#16a34a"/>
  <text x="165" y="107" fill="#16a34a" font-size="9">→</text>
  <text x="165" y="130" fill="#16a34a" font-size="8">dative</text>
  <!-- Ion charge square bracket -->
  <rect x="55" y="35" width="170" height="155" rx="6" fill="none" stroke="#374151" stroke-width="2"/>
  <text x="228" y="48" fill="#374151" font-weight="bold" font-size="14">⁺</text>
  <!-- Description -->
  <text x="140" y="215" text-anchor="middle" fill="#64748b" font-size="9">N donates lone pair to H⁺</text>
  <text x="140" y="228" text-anchor="middle" fill="#64748b" font-size="9">3 normal bonds + 1 dative bond</text>

  <!-- Divider -->
  <line x1="285" y1="20" x2="285" y2="240" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- === H3O+ === -->
  <text x="420" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">H₃O⁺ (hydroxonium ion)</text>
  <!-- O at centre -->
  <circle cx="420" cy="110" r="30" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="420" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="14">O</text>
  <!-- 3 H atoms: top, bottom-left, bottom-right -->
  <circle cx="420" cy="55" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="420" y="60" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <circle cx="365" cy="155" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="365" y="160" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <circle cx="475" cy="155" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="475" y="160" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">H</text>
  <!-- 2 normal bonding pairs -->
  <text x="407" y="72" fill="#1e40af" font-size="10">•×</text>
  <text x="384" y="138" fill="#1e40af" font-size="10">•×</text>
  <!-- Dative bond arrow (O→H bottom-right) -->
  <text x="447" y="138" fill="#16a34a" font-size="10">→</text>
  <text x="443" y="152" fill="#16a34a" font-size="8">dative</text>
  <!-- Lone pair on O (top-right) -->
  <text x="437" y="85" fill="#ca8a04" font-size="10">• •</text>
  <!-- Ion charge bracket -->
  <rect x="335" y="32" width="175" height="152" rx="6" fill="none" stroke="#374151" stroke-width="2"/>
  <text x="513" y="45" fill="#374151" font-weight="bold" font-size="14">⁺</text>
  <!-- Description -->
  <text x="420" y="215" text-anchor="middle" fill="#64748b" font-size="9">O donates lone pair to H⁺</text>
  <text x="420" y="228" text-anchor="middle" fill="#64748b" font-size="9">2 normal bonds + 1 dative bond; 1 lone pair on O</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-exceptions',
      type: 'heading',
      data: { text: 'Exceptions to the "Noble Gas (8-Electron)" Rule', level: 2 },
      terms: []
    },
    {
      id: 'callout-exceptions',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Not All Covalent Molecules Obey the Octet Rule',
        text: 'At GCSE, atoms were said to bond to achieve a noble gas (8-electron) structure. At A-level this is an <em>oversimplification</em> — there are important exceptions:<br/><br/><strong>1. Electron-deficient molecules (fewer than 8 electrons around the central atom):</strong><br/>• <strong>BF₃:</strong> Boron is in Group 3 — it can only form 3 bonds, leaving just 6 electrons around it. This is not a "problem"; boron simply has no suitable low-energy orbital to form a fourth bond under normal conditions. BF₃ instead readily accepts lone pairs (acts as a Lewis acid).<br/><br/><strong>2. Expanded octets (more than 8 electrons — Period 3+ elements only):</strong><br/>• <strong>PCl₅:</strong> Phosphorus is in Period 3 and has vacant 3d orbitals. One 3s electron is promoted into a 3d orbital, giving 5 unpaired electrons → 5 bonds. The energy released in forming 2 extra bonds outweighs the cost of promotion → energetically profitable.<br/>• <strong>SF₆:</strong> Sulfur forms 6 bonds (12 electrons around S) by using 3d orbitals similarly.<br/><br/><strong>3. Why NCl₅ cannot exist (contrast with PCl₅):</strong><br/>• Nitrogen is in Period 2 — it has <em>no 2d subshell</em>. The next orbital available (3s) is too far above the 2p in energy to be accessible. Therefore nitrogen is permanently limited to 8 electrons and cannot form more than 4 bonds (including dative).<br/><br/><strong>The real A-level rule:</strong> Atoms form as many covalent bonds as is <em>energetically profitable</em>. Bond formation releases energy; the question is whether enough energy is recovered from new bonds to justify the electron promotion cost.'
      },
      terms: ['Expanded octet', 'Electron deficient', 'Octet rule']
    },
    {
      id: 'list-exceptions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>BF₃</strong>: B is Group 3, Period 2 → only 3 bonds → 6 electrons around B (electron deficient; acts as <em>Lewis acid</em>)',
          '<strong>PCl₅</strong>: P is Period 3, has vacant 3d orbitals → <em>expanded octet</em> (10 electrons around P); NCl₅ is impossible (N is Period 2, no d-orbitals)',
          '<strong>SF₆</strong>: S is Period 3 → can accommodate 12 electrons (expanded octet using 3d orbitals)',
          '<strong>NO₂</strong>: odd-electron molecule — 17 valence electrons; N has 1 unpaired electron (free radical character)',
          '<strong>ClF₃</strong>: Cl is Period 3 → 10 electrons around Cl, 2 lone pairs on Cl give T-shaped geometry',
          'General rule: <strong>only Period 3+ elements</strong> can exceed 8 valence electrons around the central atom (due to available low-energy d orbitals)',
          'Period 2 elements (C, N, O, F) are <strong>strictly limited to max 8 electrons</strong> around the central atom'
        ]
      },
      terms: []
    },
    {
      id: 'svg-exceptions',
      type: 'svg',
      data: {
        caption: 'Dot-and-cross diagrams: BF₃ (electron deficient — 6e⁻ around B) and PCl₅ (expanded octet — 10e⁻ around P)',
        svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- === BF3 (electron deficient) === -->
  <text x="130" y="18" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="13">BF₃ — electron deficient (6e⁻ around B)</text>
  <!-- B at centre -->
  <circle cx="130" cy="110" r="28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="130" y="115" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="14">B</text>
  <!-- F top -->
  <circle cx="130" cy="48" r="26" fill="#4a1040" stroke="#9d174d" stroke-width="1.5"/>
  <text x="130" y="53" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">F</text>
  <!-- Lone pairs on F top -->
  <text x="110" y="33" fill="#ca8a04" font-size="9">× ×</text>
  <text x="148" y="33" fill="#ca8a04" font-size="9">• •</text>
  <text x="148" y="57" fill="#ca8a04" font-size="9">•</text>
  <text x="112" y="57" fill="#ca8a04" font-size="9">×</text>
  <!-- F bottom-left -->
  <circle cx="68" cy="162" r="26" fill="#4a1040" stroke="#9d174d" stroke-width="1.5"/>
  <text x="68" y="167" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">F</text>
  <text x="40" y="157" fill="#ca8a04" font-size="9">× ×</text>
  <text x="40" y="172" fill="#ca8a04" font-size="9">• •</text>
  <!-- F bottom-right -->
  <circle cx="192" cy="162" r="26" fill="#4a1040" stroke="#9d174d" stroke-width="1.5"/>
  <text x="192" y="167" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="12">F</text>
  <text x="208" y="157" fill="#ca8a04" font-size="9">× ×</text>
  <text x="208" y="172" fill="#ca8a04" font-size="9">• •</text>
  <!-- Bonding pairs B–F -->
  <text x="120" y="79" fill="#1e40af" font-size="10">•×</text>
  <text x="90" y="140" fill="#1e40af" font-size="10">•×</text>
  <text x="154" y="140" fill="#1e40af" font-size="10">•×</text>
  <!-- Warning: only 6e- around B -->
  <text x="130" y="218" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">Only 6 electrons around B!</text>
  <text x="130" y="231" text-anchor="middle" fill="#64748b" font-size="9">B is electron deficient → Lewis acid</text>

  <!-- Divider -->
  <line x1="285" y1="15" x2="285" y2="255" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- === PCl5 (expanded octet) === -->
  <text x="420" y="18" text-anchor="middle" fill="#059669" font-weight="bold" font-size="13">PCl₅ — expanded octet (10e⁻ around P)</text>
  <!-- P at centre -->
  <circle cx="420" cy="125" r="28" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="420" y="130" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="14">P</text>
  <!-- 5 Cl atoms: top, left, right, bottom-left, bottom-right -->
  <circle cx="420" cy="60" r="22" fill="#0c4a6e" stroke="#0369a1" stroke-width="1.5"/>
  <text x="420" y="65" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Cl</text>
  <circle cx="355" cy="100" r="22" fill="#0c4a6e" stroke="#0369a1" stroke-width="1.5"/>
  <text x="355" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Cl</text>
  <circle cx="485" cy="100" r="22" fill="#0c4a6e" stroke="#0369a1" stroke-width="1.5"/>
  <text x="485" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Cl</text>
  <circle cx="370" cy="180" r="22" fill="#0c4a6e" stroke="#0369a1" stroke-width="1.5"/>
  <text x="370" y="185" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Cl</text>
  <circle cx="470" cy="180" r="22" fill="#0c4a6e" stroke="#0369a1" stroke-width="1.5"/>
  <text x="470" y="185" text-anchor="middle" fill="#1e293b" font-weight="bold" font-size="11">Cl</text>
  <!-- Bonding pairs -->
  <text x="412" y="90" fill="#1e40af" font-size="10">•×</text>
  <text x="378" y="112" fill="#1e40af" font-size="10">•×</text>
  <text x="450" y="112" fill="#1e40af" font-size="10">•×</text>
  <text x="386" y="160" fill="#1e40af" font-size="10">•×</text>
  <text x="446" y="160" fill="#1e40af" font-size="10">•×</text>
  <!-- Note on P -->
  <text x="420" y="225" text-anchor="middle" fill="#059669" font-weight="bold" font-size="10">10 electrons around P (3d orbitals used)</text>
  <text x="420" y="238" text-anchor="middle" fill="#64748b" font-size="9">Period 3 only — impossible for N (Period 2)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'checklist-covalent',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define a covalent bond as mutual sharing of electrons between two non-metal atoms', checked: false },
          { text: 'State that a single bond = 2 electrons, double bond = 4 electrons, triple bond = 6 electrons', checked: false },
          { text: 'Describe trends: triple bond is shortest and strongest; single bond is longest and weakest', checked: false },
          { text: 'Draw dot-and-cross diagrams for H₂O (2 bp, 2 lp on O), NH₃ (3 bp, 1 lp on N), CO₂ (2 double bonds, 2 lp on each O), N₂ (triple bond, 1 lp on each N)', checked: false },
          { text: 'Count total valence electrons correctly before drawing any diagram (include charges for ions)', checked: false },
          { text: 'Draw ions (NH₄⁺, H₃O⁺, OH⁻) with square brackets and charge outside', checked: false },
          { text: 'Define a dative covalent bond: both electrons come from the same (donor) atom', checked: false },
          { text: 'State that once formed, a dative bond is identical in length and strength to a normal covalent bond', checked: false },
          { text: 'Draw and explain the dative bond in NH₄⁺ (N donates lone pair to H⁺)', checked: false },
          { text: 'Draw and explain the dative bond in H₃O⁺ (O donates lone pair to H⁺)', checked: false },
          { text: 'Identify the N→BF₃ dative bond in the NH₃·BF₃ adduct', checked: false },
          { text: 'Explain why BF₃ is electron deficient (only 6e⁻ around B — Group 3, Period 2, no vacant d orbitals at low energy)', checked: false },
          { text: 'Explain why PCl₅ can exist with 10e⁻ around P (P is Period 3, uses 3d orbitals — expanded octet)', checked: false },
          { text: 'Explain why NCl₅ cannot exist (N is Period 2 — no 2d orbitals; strictly limited to max 8e⁻)', checked: false },
          { text: 'State the general rule: only Period 3+ central atoms can have expanded octets', checked: false }
        ]
      }
    },
    {
      id: 'summary-covalent',
      type: 'summary',
      data: {
        text: 'Covalent bonds form by mutual sharing of electron pairs between non-metals; bond order increases from single→double→triple with decreasing length and increasing strength. Draw dot-and-cross diagrams by counting all valence electrons, placing shared pairs between atoms, and filling lone pairs on outer atoms first. Dative (co-ordinate) bonds supply both electrons from one atom (donor → acceptor); once formed, identical to normal covalent bonds. NH₄⁺ and H₃O⁺ contain one dative bond each. Exceptions to octet rule: BF₃ only has 6e⁻ around B (electron deficient, Lewis acid); PCl₅ and SF₆ use 3d orbitals (expanded octet, Period 3+ only); NCl₅ impossible (N has no 2d orbitals).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define a covalent bond. State the number of electrons in a single, double, and triple bond.' },
      { id: 'c2', blockId: 'table-bond-types', prompt: 'Compare single, double, and triple bonds in terms of bond length and bond strength. Which is shortest and strongest?' },
      { id: 'c3', blockId: 'svg-dot-simple', prompt: 'Draw dot-and-cross diagrams for H₂O and NH₃. State the number of bonding pairs and lone pairs in each.' },
      { id: 'c4', blockId: 'svg-dot-simple', prompt: 'Draw the dot-and-cross diagram for CO₂ showing the double bonds and all lone pairs.' },
      { id: 'c5', blockId: 'callout-dative', prompt: 'Define a dative covalent bond. Give two examples from ions, including NH₄⁺ and H₃O⁺, stating which atom donates the lone pair.' },
      { id: 'c6', blockId: 'callout-exceptions', prompt: 'Explain why BF₃ is electron deficient. Why can PCl₅ exist with 5 bonds but NCl₅ cannot?' },
      { id: 'c7', blockId: 'list-exceptions', prompt: 'State the general rule for which elements can form expanded octets. Give two examples and explain using orbital theory.' }
    ],
    summaryText: 'Covalent bonds form by mutual sharing of electron pairs between non-metals; bond order increases single→double→triple with decreasing length and increasing strength. Dot-and-cross: count valence electrons, place shared pairs between atoms, fill lone pairs on outer atoms first. Dative (co-ordinate) bonds supply both electrons from one atom (NH₄⁺: N donates; H₃O⁺: O donates). Exceptions: BF₃ only 6e⁻ around B (electron deficient, Lewis acid); PCl₅ uses 3d orbitals (expanded octet, Period 3+); NCl₅ impossible (N has no 2d orbitals).',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_3_2;