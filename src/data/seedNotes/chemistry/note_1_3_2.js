/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 2
 * "Covalent bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.1
 */
export const note_chemistry_1_3_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe covalent bonding as electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms. Draw dot-and-cross diagrams for simple covalent molecules, including single, double and triple bonds.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Covalent Bond Formation', level: 2 },
      terms: []
    },
    {
      id: 'key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Covalent Bonding',
        text: 'A <strong>covalent bond</strong> is the strong electrostatic attraction between a <em>shared pair of electrons</em> and the positively charged nuclei of the bonded atoms.<br/><br/>▸ <strong>Bond order:</strong> single (1 shared pair), double (2 shared pairs), triple (3 shared pairs).<br/>▸ <strong>Lone pair:</strong> non-bonding pair of electrons on an atom. Contributes to shape (VSEPR).<br/>▸ Number of electrons each atom contributes: H = 1; C = 4; N = 3; O = 2; F/Cl = 1.'
      },
      terms: ['Covalent bond', 'Lone pair', 'Bonding pair', 'Bond order']
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Dot-and-Cross Diagrams', level: 2 },
      terms: []
    },
    {
      id: 'svg-dotcross',
      type: 'svg',
      data: {
        caption: 'Outer-shell dot-and-cross diagrams for seven key molecules. Each shared pair = 1 covalent bond. Lone pairs shown as paired dots. Colour key: dots (•) from one atom, crosses (×) from the other.',
        svg: `<svg viewBox="0 0 700 370" xmlns="http://www.w3.org/2000/svg" font-family="'Courier New',monospace" font-size="11">
  <style>
    .lbl { font-family: Inter,Arial,sans-serif; font-size: 11px; fill: #374151; }
    .hd  { font-family: Inter,Arial,sans-serif; font-size: 12px; font-weight: bold; }
  </style>

  <!-- Row 1: H2, Cl2, O2 -->
  <!-- H2 -->
  <text x="85" y="18" text-anchor="middle" class="hd" fill="#1e40af">H₂</text>
  <circle cx="60" cy="50" r="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="110" cy="50" r="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="85" y="54" text-anchor="middle" font-size="13" fill="#1d4ed8">• ×</text>
  <text x="85" y="72" text-anchor="middle" class="lbl">H—H (single bond)</text>
  <text x="85" y="85" text-anchor="middle" class="lbl">1 shared pair</text>

  <!-- Cl2 -->
  <text x="255" y="18" text-anchor="middle" class="hd" fill="#166534">Cl₂</text>
  <circle cx="220" cy="50" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="290" cy="50" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <!-- lone pairs on left Cl -->
  <text x="192" y="35" font-size="12" fill="#15803d">:: </text>
  <text x="186" y="55" font-size="12" fill="#15803d">:: </text>
  <text x="192" y="75" font-size="12" fill="#15803d">:: </text>
  <!-- shared -->
  <text x="250" y="54" text-anchor="middle" font-size="13" fill="#166534">• ×</text>
  <!-- lone pairs on right Cl -->
  <text x="303" y="35" font-size="12" fill="#15803d">::</text>
  <text x="308" y="55" font-size="12" fill="#15803d">::</text>
  <text x="303" y="75" font-size="12" fill="#15803d">::</text>
  <text x="255" y="99" text-anchor="middle" class="lbl">Cl—Cl: 1 bond, 3 lone pairs each</text>

  <!-- O2 -->
  <text x="435" y="18" text-anchor="middle" class="hd" fill="#9d174d">O₂</text>
  <circle cx="403" cy="50" r="30" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <circle cx="467" cy="50" r="30" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <text x="385" y="38" font-size="12" fill="#be185d">::</text>
  <text x="385" y="68" font-size="12" fill="#be185d">::</text>
  <text x="435" y="47" text-anchor="middle" font-size="13" fill="#be185d">• ×</text>
  <text x="435" y="60" text-anchor="middle" font-size="13" fill="#be185d">• ×</text>
  <text x="466" y="38" font-size="12" fill="#be185d">::</text>
  <text x="466" y="68" font-size="12" fill="#be185d">::</text>
  <text x="435" y="99" text-anchor="middle" class="lbl">O=O: 2 shared pairs (double bond)</text>
  <text x="435" y="112" text-anchor="middle" class="lbl">2 lone pairs on each O</text>

  <!-- N2 -->
  <text x="615" y="18" text-anchor="middle" class="hd" fill="#7c3aed">N₂</text>
  <circle cx="585" cy="50" r="30" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="645" cy="50" r="30" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="560" y="54" font-size="12" fill="#6d28d9">::</text>
  <text x="615" y="44" text-anchor="middle" font-size="12" fill="#6d28d9">• ×</text>
  <text x="615" y="57" text-anchor="middle" font-size="12" fill="#6d28d9">• ×</text>
  <text x="615" y="70" text-anchor="middle" font-size="12" fill="#6d28d9">• ×</text>
  <text x="660" y="54" font-size="12" fill="#6d28d9">::</text>
  <text x="615" y="99" text-anchor="middle" class="lbl">N≡N: 3 shared pairs (triple bond)</text>
  <text x="615" y="112" text-anchor="middle" class="lbl">1 lone pair per N</text>

  <!-- Row divider -->
  <line x1="10" y1="125" x2="690" y2="125" stroke="#e2e8f0" stroke-width="1"/>

  <!-- Row 2: H2O, NH3, CO2 -->
  <!-- H2O -->
  <text x="115" y="145" text-anchor="middle" class="hd" fill="#0369a1">H₂O</text>
  <circle cx="115" cy="200" r="32" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="70"  cy="235" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="160" cy="235" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <!-- lone pairs on O -->
  <text x="115" y="175" text-anchor="middle" font-size="12" fill="#0369a1">:: ::</text>
  <!-- bonds -->
  <text x="88"  y="222" text-anchor="middle" font-size="12" fill="#0369a1">• ×</text>
  <text x="142" y="222" text-anchor="middle" font-size="12" fill="#0369a1">• ×</text>
  <text x="115" y="275" text-anchor="middle" class="lbl">2 bonds, 2 lone pairs on O</text>
  <text x="115" y="290" text-anchor="middle" class="lbl">Bond angle ≈ 104.5°</text>

  <!-- NH3 -->
  <text x="350" y="145" text-anchor="middle" class="hd" fill="#92400e">NH₃</text>
  <circle cx="350" cy="195" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="310" cy="238" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="350" cy="252" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="390" cy="238" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <!-- 1 lone pair on N -->
  <text x="350" y="173" text-anchor="middle" font-size="12" fill="#b45309">::</text>
  <!-- bonds -->
  <text x="326" y="220" text-anchor="middle" font-size="12" fill="#b45309">• ×</text>
  <text x="350" y="228" text-anchor="middle" font-size="12" fill="#b45309">• ×</text>
  <text x="374" y="220" text-anchor="middle" font-size="12" fill="#b45309">• ×</text>
  <text x="350" y="285" text-anchor="middle" class="lbl">3 bonds, 1 lone pair on N</text>
  <text x="350" y="300" text-anchor="middle" class="lbl">Bond angle ≈ 107°</text>

  <!-- CO2 linear -->
  <text x="570" y="145" text-anchor="middle" class="hd" fill="#374151">CO₂</text>
  <circle cx="500" cy="195" r="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="570" cy="195" r="30" fill="#f3f4f6" stroke="#6b7280" stroke-width="2"/>
  <circle cx="640" cy="195" r="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- lone pairs on O-left -->
  <text x="475" y="183" font-size="11" fill="#374151">::</text>
  <text x="475" y="207" font-size="11" fill="#374151">::</text>
  <!-- double bonds left -->
  <text x="531" y="191" text-anchor="middle" font-size="12" fill="#374151">• ×</text>
  <text x="531" y="204" text-anchor="middle" font-size="12" fill="#374151">• ×</text>
  <!-- double bonds right -->
  <text x="609" y="191" text-anchor="middle" font-size="12" fill="#374151">• ×</text>
  <text x="609" y="204" text-anchor="middle" font-size="12" fill="#374151">• ×</text>
  <!-- lone pairs right O -->
  <text x="652" y="183" font-size="11" fill="#374151">::</text>
  <text x="652" y="207" font-size="11" fill="#374151">::</text>
  <text x="570" y="240" text-anchor="middle" class="lbl">Linear molecule: O=C=O</text>
  <text x="570" y="255" text-anchor="middle" class="lbl">2 double bonds. Bond angle 180°</text>

  <!-- Row divider -->
  <line x1="10" y1="315" x2="690" y2="315" stroke="#e2e8f0" stroke-width="1"/>

  <!-- Bond order summary row -->
  <text x="10" y="335" class="lbl" font-weight="bold" fill="#374151">Bond order summary:</text>
  <rect x="10" y="340" width="200" height="28" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <text x="110" y="359" text-anchor="middle" class="lbl">Single bond  (1 shared pair):  H—H, Cl—Cl</text>
  <rect x="225" y="340" width="220" height="28" rx="5" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
  <text x="335" y="359" text-anchor="middle" class="lbl">Double bond  (2 pairs):  O=O, C=O in CO₂</text>
  <rect x="460" y="340" width="230" height="28" rx="5" fill="#ede9fe" stroke="#7c3aed" stroke-width="1"/>
  <text x="575" y="359" text-anchor="middle" class="lbl">Triple bond  (3 pairs):  N≡N</text>
</svg>`
      },
      terms: ['Covalent bond', 'Bond order', 'Lone pair', 'Bonding pair']
    },
    {
      id: 'svg-bondtypes',
      type: 'svg',
      data: {
        caption: 'Single, double and triple bonds compared: more shared pairs → shorter bond length, higher bond enthalpy, less rotation freedom.',
        svg: `<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Headers -->
  <rect x="10"  y="5" width="200" height="150" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="240" y="5" width="200" height="150" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <rect x="470" y="5" width="200" height="150" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>

  <text x="110" y="24" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">Single Bond (H—H)</text>
  <text x="340" y="24" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="13">Double Bond (O=O)</text>
  <text x="570" y="24" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="13">Triple Bond (N≡N)</text>

  <text x="110" y="46" text-anchor="middle" fill="#374151">1 shared electron pair</text>
  <text x="340" y="46" text-anchor="middle" fill="#374151">2 shared electron pairs</text>
  <text x="570" y="46" text-anchor="middle" fill="#374151">3 shared electron pairs</text>

  <line x1="40" y1="66" x2="180" y2="66" stroke="#1e40af" stroke-width="3"/>
  <line x1="270" y1="60" x2="410" y2="60" stroke="#9d174d" stroke-width="3"/>
  <line x1="270" y1="74" x2="410" y2="74" stroke="#9d174d" stroke-width="3"/>
  <line x1="500" y1="56" x2="640" y2="56" stroke="#4c1d95" stroke-width="3"/>
  <line x1="500" y1="68" x2="640" y2="68" stroke="#4c1d95" stroke-width="3"/>
  <line x1="500" y1="80" x2="640" y2="80" stroke="#4c1d95" stroke-width="3"/>

  <text x="110" y="105" text-anchor="middle" fill="#374151">Bond length: <tspan font-weight="bold">longest</tspan></text>
  <text x="340" y="105" text-anchor="middle" fill="#374151">Bond length: <tspan font-weight="bold">shorter</tspan></text>
  <text x="570" y="105" text-anchor="middle" fill="#374151">Bond length: <tspan font-weight="bold">shortest</tspan></text>

  <text x="110" y="122" text-anchor="middle" fill="#374151">Enthalpy: <tspan fill="#1e40af">~346 kJ mol⁻¹</tspan></text>
  <text x="340" y="122" text-anchor="middle" fill="#374151">Enthalpy: <tspan fill="#9d174d">~498 kJ mol⁻¹</tspan></text>
  <text x="570" y="122" text-anchor="middle" fill="#374151">Enthalpy: <tspan fill="#4c1d95">~945 kJ mol⁻¹</tspan></text>

  <text x="110" y="143" text-anchor="middle" fill="#374151">Free rotation ✓</text>
  <text x="340" y="143" text-anchor="middle" fill="#374151">Restricted rotation (π bond)</text>
  <text x="570" y="143" text-anchor="middle" fill="#374151">No rotation (linear)</text>
</svg>`
      },
      terms: ['Bond enthalpy', 'Bond length', 'Pi bond']
    },
    {
      id: 'tip-dative',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Dative (Coordinate) Bonds',
        text: 'A <strong>dative covalent bond</strong> is where <em>both</em> electrons in the shared pair come from the same atom.<br/>Example: NH&#x2083; + H&#x207A; &rarr; NH&#x2084;&#x207A; &#x2014; nitrogen&#x2019;s lone pair donated to the empty orbital on H&#x207A;.<br/><br/>Once formed, a dative bond is identical to a normal covalent bond. Only the origin of the electrons differs.'
      },
      terms: ['Dative covalent bond', 'Coordinate bond']
    }
  ],
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Covalent Bonding',
      subtitle: 'WCH11 — Chemistry Topic 3.2',
      elements: [
        { delay: 0, colSpan: 1, icon: '🤝', title: 'Covalent Bond', html: 'A <strong>shared pair of electrons</strong> between two atoms.<br/>Both nuclei attract the shared electrons.<br/>Occurs between non-metal atoms.' },
        { delay: 1, colSpan: 1, icon: '🔢', title: 'Bond Types', html: '<strong>Single:</strong> 1 shared pair (e.g. H–H, Cl–Cl).<br/><strong>Double:</strong> 2 shared pairs (e.g. O=O, C=O).<br/><strong>Triple:</strong> 3 shared pairs (e.g. N≡N, C≡C).' },
        { delay: 2, colSpan: 1, icon: '➡️', title: 'Dative (Coordinate) Bond', html: 'Both electrons in the shared pair come from the <strong>same atom</strong>.<br/>Shown by an arrow (→) from donor to acceptor.<br/>e.g. NH₄⁺: N donates lone pair to H⁺; also in Al₂Cl₆, CO.' },
        { delay: 3, colSpan: 2, icon: '✏️', title: 'Dot-Cross Diagram Rules', html: '• Show outer-shell electrons only.<br/>• Dots from one atom, crosses from another.<br/>• Shared pairs in overlapping region between atoms.<br/>• Lone pairs on the atom (not shared).<br/>e.g. H₂O: 2 bonding pairs + 2 lone pairs on O.' },
      ]
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Covalent bond = electrostatic attraction of shared e⁻ pair to both nuclei. Single (1 pair), double (2 pairs), triple (3 pairs). More pairs → shorter, stronger bond. H₂O: 2 bonds + 2 lone pairs; NH₃: 3 bonds + 1 lone pair; CO₂: 2 double bonds, linear. Dative bond: both electrons from one atom.',
    cues: [
      { id: 'c1', blockId: 'key-def', prompt: 'Define a covalent bond precisely. How does bond order (1, 2, 3) affect bond length and bond enthalpy?' },
      { id: 'c2', blockId: 'svg-dotcross', prompt: 'How many bonding pairs and lone pairs does each atom have in: H₂O, NH₃, CO₂, N₂?' },
      { id: 'c3', blockId: 'svg-dotcross', prompt: 'Describe the difference between O₂ (double bond) and N₂ (triple bond) in a dot-and-cross diagram.' },
      { id: 'c4', blockId: 'svg-bondtypes', prompt: 'Compare single, double and triple bonds in terms of length, bond enthalpy and rotation.' },
      { id: 'c5', blockId: 'tip-dative', prompt: 'What is a dative covalent bond? Give one example and explain which atom donates both electrons.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
