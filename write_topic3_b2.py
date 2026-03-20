#!/usr/bin/env python3
"""Write Chemistry Topic 3 seed notes batch 2: notes 1_3_2, 1_3_3, 1_3_4."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'src/data/seedNotes/chemistry')

# ─────────────────────────── note_1_3_2 ────────────────────────────
NOTE_1_3_2 = '''/**
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
        text: 'A <strong>dative covalent bond</strong> is where <em>both</em> electrons in the shared pair come from the same atom.<br/>Example: NH₃ + H⁺ → NH₄⁺ — nitrogen\'s lone pair donated to the empty orbital on H⁺.<br/><br/>Once formed, a dative bond is identical to a normal covalent bond. Only the origin of the electrons differs.'
      },
      terms: ['Dative covalent bond', 'Coordinate bond']
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
'''

# ─────────────────────────── note_1_3_3 ────────────────────────────
NOTE_1_3_3 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 3
 * "Metallic bonding and properties of metals"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.1
 */
export const note_chemistry_1_3_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe metallic bonding as electrostatic attraction between a lattice of positive metal ions and a delocalised sea of electrons. Explain the physical properties of metals (electrical conductivity, thermal conductivity, malleability, high melting point) in terms of metallic bonding.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'The Metallic Bond Model', level: 2 },
      terms: []
    },
    {
      id: 'svg-model',
      type: 'svg',
      data: {
        caption: 'Metallic bonding: outermost electrons leave their atoms and become delocalised throughout the lattice. Residual positive ions arranged in a regular close-packed structure. Electrostatic attraction between the electron sea and the cations = metallic bond.',
        svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Background -->
  <rect x="5" y="10" width="390" height="220" rx="10" fill="#fef9ee" stroke="#d97706" stroke-width="1.5"/>
  <text x="205" y="30" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">Metallic Bond Model</text>

  <!-- Positive ion lattice - 3×3 grid -->
  <circle cx="75"  cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="75"  y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="155" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="155" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="235" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="235" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="315" cy="80"  r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="315" y="84"  text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>

  <circle cx="75"  cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="75"  y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="155" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="155" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="235" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="235" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>
  <circle cx="315" cy="155" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="315" y="159" text-anchor="middle" fill="#b45309" font-weight="bold">M⁺</text>

  <!-- Delocalised electrons drifting -->
  <circle cx="105" cy="110" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="185" cy="52"  r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="260" cy="120" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="50"  cy="130" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="290" cy="55"  r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="115" cy="200" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="200" cy="205" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="330" cy="200" r="5" fill="#dc2626" opacity="0.9"/>
  <circle cx="350" cy="120" r="5" fill="#dc2626" opacity="0.9"/>
  <!-- Electron motion arrows -->
  <line x1="108" y1="107" x2="138" y2="95" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="138,95 131,103 142,106" fill="#dc2626"/>
  <line x1="263" y1="117" x2="293" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="293,100 286,108 297,111" fill="#dc2626"/>

  <text x="10" y="225" fill="#374151" font-size="9.5">⁻ = delocalised electrons (not bound to any single ion)</text>

  <!-- Legend -->
  <text x="205" y="245" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Metallic bond = attraction between M⁺ lattice and e⁻ sea</text>

  <!-- Properties panel -->
  <rect x="410" y="10" width="265" height="240" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="543" y="30" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="13">Properties Explained</text>

  <!-- Conductor -->
  <rect x="420" y="38" width="245" height="42" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="543" y="56" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">⚡ Electrical Conductor</text>
  <text x="543" y="71" text-anchor="middle" fill="#374151" font-size="10">Free e⁻ move under applied voltage.</text>

  <!-- Thermal -->
  <rect x="420" y="88" width="245" height="42" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="543" y="106" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">🌡 Thermal Conductor</text>
  <text x="543" y="121" text-anchor="middle" fill="#374151" font-size="10">Energetic e⁻ transfer KE rapidly across lattice.</text>

  <!-- Malleable -->
  <rect x="420" y="138" width="245" height="48" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="543" y="156" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">🔨 Malleable &amp; Ductile</text>
  <text x="543" y="171" text-anchor="middle" fill="#374151" font-size="10">Ion layers slide; e⁻ sea rearranges →</text>
  <text x="543" y="183" text-anchor="middle" fill="#374151" font-size="10">no repulsion, no fracture.</text>

  <!-- High mp -->
  <rect x="420" y="195" width="245" height="42" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
  <text x="543" y="213" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="11">🌡 High Melting Point</text>
  <text x="543" y="228" text-anchor="middle" fill="#374151" font-size="10">Many strong e⁻—ion⁺ attractions must be broken.</text>
  <text x="543" y="243" text-anchor="middle" fill="#374151" font-size="10">Higher charge density M → higher m.p.</text>
</svg>`
      },
      terms: ['Metallic bond', 'Delocalised electrons', 'Malleable', 'Ductile']
    },
    {
      id: 'svg-trend',
      type: 'svg',
      data: {
        caption: 'Melting point trend across Period 3 metals reflects metallic bond strength: more valence electrons and smaller ionic radius → stronger bonding → higher m.p.',
        svg: `<svg viewBox="0 0 680 135" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Bar chart Period 3 metals -->
  <text x="340" y="16" text-anchor="middle" fill="#374151" font-weight="bold" font-size="13">Period 3 Metal Melting Points &amp; Valence Electrons</text>
  <!-- Y-axis label -->
  <text x="18" y="80" text-anchor="middle" fill="#64748b" font-size="9" transform="rotate(-90,18,80)">Melting point / °C</text>
  <!-- Axis -->
  <line x1="40" y1="20" x2="40" y2="115" stroke="#374151" stroke-width="1.5"/>
  <line x1="40" y1="115" x2="670" y2="115" stroke="#374151" stroke-width="1.5"/>

  <!-- Bars: Na(98°C), Mg(650°C), Al(660°C) — relative heights -->
  <!-- Scale: max 660, height 90px → each °C ≈ 0.136px -->
  <!-- Na: 98°C → h≈13 -->
  <rect x="60"  y="102" width="50" height="13" fill="#3b82f6"/>
  <text x="85"  y="130" text-anchor="middle" fill="#374151" font-size="10">Na</text>
  <text x="85"  y="98"  text-anchor="middle" fill="#1d4ed8" font-size="9">98°C</text>
  <text x="85"  y="110"  text-anchor="middle" fill="white" font-size="8">1e⁻</text>

  <!-- Mg: 650°C → h≈88 -->
  <rect x="160" y="27" width="50" height="88" fill="#10b981"/>
  <text x="185" y="130" text-anchor="middle" fill="#374151" font-size="10">Mg</text>
  <text x="185" y="22"  text-anchor="middle" fill="#065f46" font-size="9">650°C</text>
  <text x="185" y="76"  text-anchor="middle" fill="white" font-size="8">2e⁻</text>

  <!-- Al: 660°C → h≈89.8 ≈ 90 -->
  <rect x="260" y="25" width="50" height="90" fill="#6366f1"/>
  <text x="285" y="130" text-anchor="middle" fill="#374151" font-size="10">Al</text>
  <text x="285" y="20"  text-anchor="middle" fill="#4338ca" font-size="9">660°C</text>
  <text x="285" y="75"  text-anchor="middle" fill="white" font-size="8">3e⁻</text>

  <!-- Notes -->
  <rect x="360" y="22" width="300" height="90" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
  <text x="510" y="42" text-anchor="middle" fill="#334155" font-weight="bold" font-size="11">Trend: Na → Mg → Al</text>
  <text x="370" y="60" fill="#374151" font-size="10">▸ More delocalised e⁻ per atom</text>
  <text x="370" y="76" fill="#374151" font-size="10">▸ Higher charge on metal cation</text>
  <text x="370" y="92" fill="#374151" font-size="10">▸ Smaller ionic radius</text>
  <text x="370" y="108" fill="#374151" font-size="10">→ Stronger metallic bond → higher m.p.</text>
</svg>`
      },
      terms: ['Charge density']
    },
    {
      id: 'warn-metallic',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: "Sharing" vs "Sea of Electrons"',
        text: 'Metallic bonding is NOT the same as covalent bonding. The electrons are <strong>delocalised</strong> — they are not shared between two specific atoms. They are free to move throughout the entire lattice.<br/><br/>Also: metals are <em>not</em> described as "ionic". The positively charged ions in a metal are not formed by transfer to a non-metal — they arise from the loss of valence electrons into the delocalised sea.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Metallic bond = electrostatic attraction between lattice of positive metal ions and a sea of delocalised electrons. Properties: good conductor (free e⁻), malleable (layers slide, e⁻ rearrange), high m.p. (many strong forces to break). Trend Na < Mg < Al: more valence e⁻, higher cation charge, smaller radius → stronger bonding.',
    cues: [
      { id: 'c1', blockId: 'svg-model', prompt: 'Define metallic bonding. What specifically forms the "sea of electrons" and where do these electrons come from?' },
      { id: 'c2', blockId: 'svg-model', prompt: 'Explain why metals are good electrical conductors but ionic compounds in the solid state are not.' },
      { id: 'c3', blockId: 'svg-model', prompt: 'Why are metals malleable but ionic compounds are brittle? Refer to the structure of each.' },
      { id: 'c4', blockId: 'svg-trend', prompt: 'Why does the melting point increase from Na to Mg to Al? Give three reasons.' },
      { id: 'c5', blockId: 'warn-metallic', prompt: 'Distinguish between metallic bonding and covalent bonding. Why is "sharing" the wrong word for metallic bonding?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_4 ────────────────────────────
NOTE_1_3_4 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 4
 * "Shapes of molecules — VSEPR theory"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.2
 */
export const note_chemistry_1_3_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Apply VSEPR theory to predict the shapes and bond angles of molecules and ions. Explain how lone pairs of electrons cause deviations from ideal bond angles.' },
      terms: []
    },
    {
      id: 'key-vsepr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'VSEPR Rules',
        text: '<strong>V</strong>alence <strong>S</strong>hell <strong>E</strong>lectron <strong>P</strong>air <strong>R</strong>epulsion theory:<br/>1. Electron pairs (bonding + lone) around a central atom <strong>repel</strong> each other and arrange as far apart as possible.<br/>2. Repulsion order: <strong>LP–LP &gt; LP–BP &gt; BP–BP</strong><br/>3. Each lone pair reduces the bond angle by ~2.5°.<br/>4. Double/triple bonds count as <em>one</em> electron domain (one region of high electron density).'
      },
      terms: ['VSEPR', 'Lone pair', 'Bonding pair', 'Electron domain']
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Molecular Shapes Reference', level: 2 },
      terms: []
    },
    {
      id: 'svg-shapes',
      type: 'svg',
      data: {
        caption: 'Six common molecular geometries. BP = bonding pairs, LP = lone pairs. Bond angle decreases as lone pairs replace bonding pairs.',
        svg: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="10">
  <!-- Row 1: linear, trigonal planar, tetrahedral -->
  <!-- LINEAR BeCl2 / CO2 -->
  <rect x="5"  y="5" width="210" height="165" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="110" y="22" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="12">Linear</text>
  <text x="110" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. BeCl₂, CO₂, HCN</text>
  <!-- diagram -->
  <circle cx="110" cy="90" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="110" y="94" text-anchor="middle" fill="white" font-size="9">Be</text>
  <line x1="44" y1="90" x2="96" y2="90" stroke="#475569" stroke-width="2.5"/>
  <circle cx="44" cy="90" r="12" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="44" y="94" text-anchor="middle" fill="white" font-size="9">Cl</text>
  <line x1="124" y1="90" x2="176" y2="90" stroke="#475569" stroke-width="2.5"/>
  <circle cx="176" cy="90" r="12" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="176" y="94" text-anchor="middle" fill="white" font-size="9">Cl</text>
  <text x="110" y="126" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">180°</tspan></text>
  <text x="110" y="142" text-anchor="middle" fill="#374151">BP: 2  |  LP: 0</text>
  <text x="110" y="158" text-anchor="middle" fill="#64748b" font-size="9">No lone pairs → no distortion</text>

  <!-- TRIG PLANAR BF3 -->
  <rect x="230" y="5" width="210" height="165" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="335" y="22" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">Trigonal Planar</text>
  <text x="335" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. BF₃, BCl₃, AlCl₃</text>
  <circle cx="335" cy="90" r="14" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
  <text x="335" y="94" text-anchor="middle" fill="white" font-size="9">B</text>
  <line x1="335" y1="40" x2="335" y2="76" stroke="#475569" stroke-width="2.5"/>
  <circle cx="335" cy="40" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="335" y="44" text-anchor="middle" fill="white" font-size="9">F</text>
  <line x1="285" y1="110" x2="321" y2="100" stroke="#475569" stroke-width="2.5"/>
  <circle cx="275" cy="116" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="275" y="120" text-anchor="middle" fill="white" font-size="9">F</text>
  <line x1="385" y1="110" x2="349" y2="100" stroke="#475569" stroke-width="2.5"/>
  <circle cx="395" cy="116" r="11" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="395" y="120" text-anchor="middle" fill="white" font-size="9">F</text>
  <text x="335" y="142" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">120°</tspan></text>
  <text x="335" y="158" text-anchor="middle" fill="#374151">BP: 3  |  LP: 0</text>

  <!-- TETRAHEDRAL CH4 -->
  <rect x="460" y="5" width="235" height="165" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="578" y="22" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="12">Tetrahedral</text>
  <text x="578" y="36" text-anchor="middle" fill="#64748b" font-size="9">e.g. CH₄, CCl₄, NH₄⁺, SiCl₄</text>
  <circle cx="578" cy="90" r="14" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
  <text x="578" y="94" text-anchor="middle" fill="white" font-size="9">C</text>
  <line x1="535" y1="65" x2="564" y2="81" stroke="#475569" stroke-width="2.5"/>
  <circle cx="528" cy="62" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="528" y="66" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="621" y1="65" x2="592" y2="81" stroke="#475569" stroke-width="2.5"/>
  <circle cx="628" cy="62" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="628" y="66" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="560" y1="113" x2="523" y2="133" stroke="#475569" stroke-width="2.5" stroke-dasharray="5,3"/>
  <circle cx="515" cy="137" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="515" y="141" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="596" y1="113" x2="633" y2="133" stroke="#475569" stroke-width="2.5"/>
  <circle cx="641" cy="137" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="641" y="141" text-anchor="middle" fill="white" font-size="9">H</text>
  <text x="578" y="160" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">109.5°</tspan>  BP: 4 LP: 0</text>

  <!-- Row 2: pyramidal, bent (2LP), linear with lone pairs -->
  <!-- PYRAMIDAL NH3 -->
  <rect x="5"  y="185" width="210" height="170" rx="8" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="110" y="202" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">Trigonal Pyramidal</text>
  <text x="110" y="216" text-anchor="middle" fill="#64748b" font-size="9">e.g. NH₃, PCl₃, NCl₃</text>
  <circle cx="110" cy="270" r="14" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="110" y="274" text-anchor="middle" fill="white" font-size="9">N</text>
  <!-- LP above -->
  <ellipse cx="110" cy="248" rx="10" ry="6" fill="#fdf4ff" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="110" y="244" text-anchor="middle" fill="#7c3aed" font-size="8">LP</text>
  <line x1="75"  y1="296" x2="100" y2="281" stroke="#475569" stroke-width="2.5"/>
  <circle cx="69" cy="304" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="69" y="308" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="110" y1="290" x2="110" y2="316" stroke="#475569" stroke-width="2.5"/>
  <circle cx="110" cy="323" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="110" y="327" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="145" y1="296" x2="124" y2="281" stroke="#475569" stroke-width="2.5"/>
  <circle cx="151" cy="304" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="151" y="308" text-anchor="middle" fill="white" font-size="9">H</text>
  <text x="110" y="348" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">107°</tspan></text>
  <text x="110" y="363" text-anchor="middle" fill="#374151">BP: 3  |  LP: 1  (↓ from 109.5°)</text>

  <!-- BENT H2O -->
  <rect x="230" y="185" width="210" height="170" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="335" y="202" text-anchor="middle" fill="#b91c1c" font-weight="bold" font-size="12">Bent (Non-linear)</text>
  <text x="335" y="216" text-anchor="middle" fill="#64748b" font-size="9">e.g. H₂O, H₂S, SO₂</text>
  <circle cx="335" cy="270" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="335" y="274" text-anchor="middle" fill="white" font-size="9">O</text>
  <!-- 2 LPs -->
  <ellipse cx="320" cy="252" rx="9" ry="5" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,2"/>
  <ellipse cx="350" cy="252" rx="9" ry="5" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="310" y="245" fill="#b91c1c" font-size="8">LP LP</text>
  <line x1="295" y1="296" x2="321" y2="280" stroke="#475569" stroke-width="2.5"/>
  <circle cx="286" cy="305" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="286" y="309" text-anchor="middle" fill="white" font-size="9">H</text>
  <line x1="375" y1="296" x2="349" y2="280" stroke="#475569" stroke-width="2.5"/>
  <circle cx="384" cy="305" r="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
  <text x="384" y="309" text-anchor="middle" fill="white" font-size="9">H</text>
  <text x="335" y="345" text-anchor="middle" fill="#374151">Bond angle: <tspan font-weight="bold">104.5°</tspan></text>
  <text x="335" y="360" text-anchor="middle" fill="#374151">BP: 2  |  LP: 2  (↓↓ from 109.5°)</text>

  <!-- Summary panel -->
  <rect x="460" y="185" width="235" height="170" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="578" y="203" text-anchor="middle" fill="#334155" font-weight="bold" font-size="12">Bond Angle Summary</text>
  <text x="470" y="223" fill="#374151" font-size="10">4 domains total:</text>
  <text x="470" y="240" fill="#374151" font-size="10">0 LP → Tetrahedral    <tspan font-weight="bold">109.5°</tspan></text>
  <text x="470" y="256" fill="#374151" font-size="10">1 LP → Pyramidal      <tspan font-weight="bold">107°</tspan></text>
  <text x="470" y="272" fill="#374151" font-size="10">2 LP → Bent           <tspan font-weight="bold">104.5°</tspan></text>
  <line x1="470" y1="282" x2="685" y2="282" stroke="#e2e8f0" stroke-width="1"/>
  <text x="470" y="298" fill="#374151" font-size="10">3 domains total:</text>
  <text x="470" y="314" fill="#374151" font-size="10">0 LP → Trigonal planar <tspan font-weight="bold">120°</tspan></text>
  <text x="470" y="330" fill="#374151" font-size="10">1 LP → Bent           <tspan font-weight="bold">~117°</tspan></text>
  <line x1="470" y1="340" x2="685" y2="340" stroke="#e2e8f0" stroke-width="1"/>
  <text x="470" y="352" fill="#374151" font-size="10">2 domains → Linear    <tspan font-weight="bold">180°</tspan></text>
</svg>`
      },
      terms: ['Bond angle', 'Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent']
    },
    {
      id: 'tip-ions',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Polyatomic Ions: Apply VSEPR Too',
        text: 'Count the total electron pairs <em>including the charge</em>:<br/>• NH₄⁺: N has 4 BP, 0 LP → <strong>tetrahedral</strong>, 109.5°<br/>• SO₄²⁻: S has 4 BP (treat each S=O as 1 domain), 0 LP → <strong>tetrahedral</strong>, ~109.5°<br/>• NO₂⁻: N has 2 BP, 1 LP → <strong>bent</strong>, ~115°<br/><br/>Also: double bonds count as ONE electron domain in VSEPR (BF₃ with resonance is still trigonal planar, 120°).'
      },
      terms: ['Polyatomic ion']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'VSEPR: electron pairs repel, arrange as far apart as possible. Lone pairs repel more than bonding pairs (LP–LP > LP–BP > BP–BP). 4 domains: 0LP → tetrahedral 109.5°; 1LP → pyramidal 107°; 2LP → bent 104.5°. 3 domains: trigonal planar 120°. 2 domains: linear 180°.',
    cues: [
      { id: 'c1', blockId: 'key-vsepr', prompt: 'State the VSEPR rules. What is the order of repulsion between lone pairs and bonding pairs?' },
      { id: 'c2', blockId: 'svg-shapes', prompt: 'Give the shape and bond angle of: BeCl₂, BF₃, CH₄, NH₃, H₂O. How many bonding pairs and lone pairs does each central atom have?' },
      { id: 'c3', blockId: 'svg-shapes', prompt: 'Explain why the bond angle decreases from CH₄ (109.5°) to NH₃ (107°) to H₂O (104.5°).' },
      { id: 'c4', blockId: 'tip-ions', prompt: 'Determine the shape and bond angle of NH₄⁺ and NO₂⁻ using VSEPR.' },
      { id: 'c5', blockId: 'svg-shapes', prompt: 'CO₂ has two double bonds. What shape is it? Explain why double bonds are treated as one electron domain.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

files = {
    'note_1_3_2.js': NOTE_1_3_2,
    'note_1_3_3.js': NOTE_1_3_3,
    'note_1_3_4.js': NOTE_1_3_4,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {filename} ({len(content.splitlines())} lines)')

print('Batch 2 complete.')
