#!/usr/bin/env python3
"""Write Chemistry Topic 3 seed notes with SVG infographics."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'src/data/seedNotes/chemistry')

# ─────────────────────────── note_1_3_0 ────────────────────────────
NOTE_1_3_0 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 0
 * "Evidence for ionic species; ionic bonding and dot-and-cross diagrams"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.1–3A.2
 */
export const note_chemistry_1_3_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe ionic bonding as electrostatic attraction between oppositely charged ions. Draw dot-and-cross diagrams for ionic compounds. State five experimental evidences for ionic species.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Ion Formation & Electron Transfer', level: 2 },
      terms: []
    },
    {
      id: 'svg-transfer',
      type: 'svg',
      data: {
        caption: 'Electron transfer from Na to Cl: Na loses its outer electron → Na⁺ [2,8]; Cl gains an electron → Cl⁻ [2,8,8]. Both achieve noble-gas configurations.',
        svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif">
  <!-- Na atom -->
  <circle cx="100" cy="100" r="62" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="100" r="40" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="100" cy="100" r="20" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
  <text x="100" y="97" text-anchor="middle" fill="white" font-size="9" font-weight="bold">11p 12n</text>
  <!-- shell 1: 2e -->
  <circle cx="100" cy="80" r="3.5" fill="#1d4ed8"/><circle cx="100" cy="120" r="3.5" fill="#1d4ed8"/>
  <!-- shell 2: 8e -->
  <circle cx="60" cy="100" r="3.5" fill="#1d4ed8"/><circle cx="140" cy="100" r="3.5" fill="#1d4ed8"/>
  <circle cx="72" cy="72" r="3.5" fill="#1d4ed8"/><circle cx="128" cy="72" r="3.5" fill="#1d4ed8"/>
  <circle cx="72" cy="128" r="3.5" fill="#1d4ed8"/><circle cx="128" cy="128" r="3.5" fill="#1d4ed8"/>
  <circle cx="84" cy="62" r="3.5" fill="#1d4ed8"/><circle cx="116" cy="62" r="3.5" fill="#1d4ed8"/>
  <!-- shell 3: 1 outer electron -->
  <circle cx="100" cy="38" r="5" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
  <text x="100" y="25" text-anchor="middle" fill="#ea580c" font-size="10" font-weight="bold">1 outer e⁻</text>
  <text x="100" y="175" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="13">Na</text>
  <text x="100" y="190" text-anchor="middle" fill="#64748b" font-size="10">[2, 8, 1]</text>

  <!-- Arrow -->
  <line x1="175" y1="100" x2="285" y2="100" stroke="#f97316" stroke-width="3"/>
  <polygon points="285,93 300,100 285,107" fill="#f97316"/>
  <text x="237" y="88" text-anchor="middle" fill="#ea580c" font-size="11" font-weight="bold">transfers 1e⁻</text>

  <!-- Na+ -->
  <circle cx="360" cy="100" r="40" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="360" cy="100" r="20" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
  <text x="360" y="97" text-anchor="middle" fill="white" font-size="9" font-weight="bold">11p 12n</text>
  <circle cx="360" cy="80" r="3.5" fill="#1d4ed8"/><circle cx="360" cy="120" r="3.5" fill="#1d4ed8"/>
  <circle cx="320" cy="100" r="3.5" fill="#1d4ed8"/><circle cx="400" cy="100" r="3.5" fill="#1d4ed8"/>
  <circle cx="332" cy="72" r="3.5" fill="#1d4ed8"/><circle cx="388" cy="72" r="3.5" fill="#1d4ed8"/>
  <circle cx="332" cy="128" r="3.5" fill="#1d4ed8"/><circle cx="388" cy="128" r="3.5" fill="#1d4ed8"/>
  <circle cx="344" cy="62" r="3.5" fill="#1d4ed8"/><circle cx="376" cy="62" r="3.5" fill="#1d4ed8"/>
  <text x="360" y="175" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="13">Na⁺</text>
  <text x="360" y="190" text-anchor="middle" fill="#16a34a" font-size="10">[2, 8] ✓ neon config</text>

  <text x="430" y="106" text-anchor="middle" fill="#374151" font-size="24">+</text>

  <!-- Cl- -->
  <circle cx="560" cy="100" r="62" fill="none" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="560" cy="100" r="40" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="560" cy="100" r="20" fill="#7c3aed" stroke="#5b21b6" stroke-width="2"/>
  <text x="560" y="97" text-anchor="middle" fill="white" font-size="9" font-weight="bold">17p 18n</text>
  <!-- shell 1: 2e -->
  <circle cx="560" cy="80" r="3.5" fill="#1d4ed8"/><circle cx="560" cy="120" r="3.5" fill="#1d4ed8"/>
  <!-- shell 2: 8e -->
  <circle cx="520" cy="100" r="3.5" fill="#1d4ed8"/><circle cx="600" cy="100" r="3.5" fill="#1d4ed8"/>
  <circle cx="532" cy="72" r="3.5" fill="#1d4ed8"/><circle cx="588" cy="72" r="3.5" fill="#1d4ed8"/>
  <circle cx="532" cy="128" r="3.5" fill="#1d4ed8"/><circle cx="588" cy="128" r="3.5" fill="#1d4ed8"/>
  <circle cx="544" cy="62" r="3.5" fill="#1d4ed8"/><circle cx="576" cy="62" r="3.5" fill="#1d4ed8"/>
  <!-- shell 3: 7 original + 1 gained = 8 -->
  <circle cx="498" cy="82" r="3.5" fill="#1d4ed8"/><circle cx="498" cy="118" r="3.5" fill="#1d4ed8"/>
  <circle cx="514" cy="60" r="3.5" fill="#1d4ed8"/><circle cx="560" cy="38" r="3.5" fill="#1d4ed8"/>
  <circle cx="606" cy="60" r="3.5" fill="#1d4ed8"/><circle cx="622" cy="100" r="3.5" fill="#1d4ed8"/>
  <circle cx="606" cy="140" r="3.5" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
  <text x="560" y="175" text-anchor="middle" fill="#6d28d9" font-weight="bold" font-size="13">Cl⁻</text>
  <text x="560" y="190" text-anchor="middle" fill="#16a34a" font-size="10">[2, 8, 8] ✓ argon config</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Ionic Bonding',
        text: '<strong>Ionic bonding</strong> is the strong electrostatic attraction between oppositely charged ions in a giant ionic lattice. It acts in all directions (non-directional).<br/><br/>Metal → <strong>loses</strong> electrons → cation (positive). Non-metal → <strong>gains</strong> electrons → anion (negative).'
      },
      terms: ['Ionic bonding', 'Giant ionic lattice', 'Cation', 'Anion']
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
        caption: 'Dot-and-cross diagrams for NaCl and MgCl₂. Outer shell electrons only. Square brackets surround each ion with charge outside. Dots (•) = electrons from one atom; crosses (×) = electrons from the other.',
        svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="12">
  <!-- NaCl title -->
  <text x="170" y="20" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="14">NaCl — sodium chloride</text>

  <!-- Na+ in bracket box -->
  <rect x="60" y="40" width="60" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="90" y="78" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="20">Na</text>
  <text x="122" y="44" fill="#1e40af" font-size="14">+</text>
  <!-- no electrons (all transferred) -->
  <text x="90" y="115" text-anchor="middle" fill="#64748b" font-size="10">Na⁺ — 0 outer e⁻</text>

  <text x="150" y="76" text-anchor="middle" fill="#374151" font-size="18">+</text>

  <!-- Cl- in bracket box -->
  <rect x="165" y="30" width="80" height="80" rx="6" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
  <text x="205" y="78" text-anchor="middle" fill="#be185d" font-weight="bold" font-size="20">Cl</text>
  <!-- 8 outer electrons: 7 x, 1 dot -->
  <text x="188" y="42" fill="#be185d" font-size="11">× ×</text>
  <text x="166" y="60" fill="#be185d" font-size="11">×</text>
  <text x="225" y="60" fill="#be185d" font-size="11">×</text>
  <text x="166" y="98" fill="#be185d" font-size="11">×</text>
  <text x="225" y="98" fill="#be185d" font-size="11">×</text>
  <text x="193" y="105" fill="#be185d" font-size="11">× •</text>
  <text x="246" y="35" fill="#be185d" font-size="14">−</text>
  <text x="205" y="125" text-anchor="middle" fill="#64748b" font-size="10">Cl⁻ — 8 outer e⁻ [2,8,8]</text>

  <!-- Rules box -->
  <rect x="20" y="145" width="300" height="80" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
  <text x="170" y="162" text-anchor="middle" fill="#334155" font-weight="bold" font-size="11">Dot-and-Cross Rules</text>
  <text x="30" y="178" fill="#334155" font-size="10">1. Show outer-shell electrons only</text>
  <text x="30" y="192" fill="#334155" font-size="10">2. Dots (•) from one atom, crosses (×) from the other</text>
  <text x="30" y="206" fill="#334155" font-size="10">3. Square brackets + charge outside for each ion</text>
  <text x="30" y="220" fill="#334155" font-size="10">4. Cation: show lost electrons removed. Anion: show gained electrons added.</text>

  <!-- Divider -->
  <line x1="345" y1="15" x2="345" y2="235" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- MgCl2 title -->
  <text x="510" y="20" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="14">MgCl₂ — magnesium chloride</text>

  <!-- Mg2+ box -->
  <rect x="455" y="80" width="60" height="60" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
  <text x="485" y="118" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="20">Mg</text>
  <text x="516" y="84" fill="#065f46" font-size="12">2+</text>
  <text x="485" y="155" text-anchor="middle" fill="#64748b" font-size="10">Mg²⁺ — 0 outer e⁻</text>
  <text x="485" y="167" text-anchor="middle" fill="#64748b" font-size="10">loses 2e⁻</text>

  <!-- Arrow to Cl- left -->
  <line x1="460" y1="95" x2="416" y2="65" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2"/>
  <polygon points="416,65 420,55 428,66" fill="#f97316"/>

  <!-- Arrow to Cl- right -->
  <line x1="510" y1="95" x2="555" y2="65" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,2"/>
  <polygon points="555,65 548,55 560,65" fill="#f97316"/>

  <!-- Cl- left box -->
  <rect x="368" y="25" width="66" height="66" rx="6" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
  <text x="401" y="63" text-anchor="middle" fill="#be185d" font-weight="bold" font-size="18">Cl</text>
  <text x="383" y="37" fill="#be185d" font-size="10">× ×</text>
  <text x="370" y="52" fill="#be185d" font-size="10">×</text><text x="424" y="52" fill="#be185d" font-size="10">×</text>
  <text x="370" y="82" fill="#be185d" font-size="10">×</text><text x="424" y="82" fill="#be185d" font-size="10">×</text>
  <text x="388" y="88" fill="#be185d" font-size="10">× •</text>
  <text x="434" y="29" fill="#be185d" font-size="12">−</text>

  <!-- Cl- right box -->
  <rect x="542" y="25" width="66" height="66" rx="6" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
  <text x="575" y="63" text-anchor="middle" fill="#be185d" font-weight="bold" font-size="18">Cl</text>
  <text x="557" y="37" fill="#be185d" font-size="10">× ×</text>
  <text x="544" y="52" fill="#be185d" font-size="10">×</text><text x="598" y="52" fill="#be185d" font-size="10">×</text>
  <text x="544" y="82" fill="#be185d" font-size="10">×</text><text x="598" y="82" fill="#be185d" font-size="10">×</text>
  <text x="562" y="88" fill="#be185d" font-size="10">× •</text>
  <text x="608" y="29" fill="#be185d" font-size="12">−</text>

  <text x="510" y="195" text-anchor="middle" fill="#374151" font-size="11">1 Mg²⁺  :  2 Cl⁻  →  formula MgCl₂</text>
  <text x="510" y="212" text-anchor="middle" fill="#64748b" font-size="10">Mg gives 1 e⁻ to each Cl atom</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Evidence for Ionic Species', level: 2 },
      terms: []
    },
    {
      id: 'svg-evidence',
      type: 'svg',
      data: {
        caption: 'Five experimental evidences confirming ionic compounds contain discrete charged ions',
        svg: `<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- 5 panels -->
  <rect x="5"   y="8" width="128" height="204" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="140" y="8" width="128" height="204" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <rect x="275" y="8" width="128" height="204" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="410" y="8" width="128" height="204" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <rect x="545" y="8" width="148" height="204" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>

  <!-- Headers -->
  <text x="69"  y="28" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">⚡ Electrolysis</text>
  <text x="204" y="28" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="12">🔋 Conductivity</text>
  <text x="339" y="28" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">💔 Brittleness</text>
  <text x="474" y="28" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="12">🌡 High M.P.</text>
  <text x="619" y="28" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="12">🔬 X-Ray</text>

  <!-- Electrolysis -->
  <text x="69" y="50" text-anchor="middle" fill="#374151" font-size="10">Cu²⁺ (blue) + CrO₄²⁻ (yellow)</text>
  <text x="69" y="63" text-anchor="middle" fill="#374151" font-size="10">= green solution</text>
  <text x="69" y="82" text-anchor="middle" fill="#1d4ed8" font-size="10">Blue → cathode (−)</text>
  <text x="69" y="96" text-anchor="middle" fill="#ca8a04" font-size="10">Yellow → anode (+)</text>
  <line x1="20" y1="108" x2="118" y2="108" stroke="#93c5fd" stroke-width="1"/>
  <text x="69" y="122" text-anchor="middle" fill="#374151" font-size="9.5">Opposite-charge ions</text>
  <text x="69" y="135" text-anchor="middle" fill="#374151" font-size="9.5">migrate independently</text>
  <text x="69" y="155" text-anchor="middle" fill="#1e40af" font-size="9" font-weight="bold">Proves: separate</text>
  <text x="69" y="167" text-anchor="middle" fill="#1e40af" font-size="9" font-weight="bold">charged ions exist</text>

  <!-- Conductivity -->
  <text x="204" y="50" text-anchor="middle" fill="#374151" font-size="10">State → Conducts?</text>
  <text x="175" y="67" fill="#374151" font-size="10">Solid</text>  <text x="232" y="67" fill="#dc2626" font-size="11">✗</text>
  <text x="175" y="83" fill="#374151" font-size="10">Molten</text> <text x="232" y="83" fill="#16a34a" font-size="11">✓</text>
  <text x="175" y="99" fill="#374151" font-size="10">Aqueous</text><text x="232" y="99" fill="#16a34a" font-size="11">✓</text>
  <line x1="155" y1="110" x2="253" y2="110" stroke="#6ee7b7" stroke-width="1"/>
  <text x="204" y="124" text-anchor="middle" fill="#374151" font-size="9.5">Solid: ions fixed. Cannot move.</text>
  <text x="204" y="138" text-anchor="middle" fill="#374151" font-size="9.5">Molten/aq: ions free to move.</text>
  <text x="204" y="155" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold">Proves: compound</text>
  <text x="204" y="167" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold">contains mobile ions</text>

  <!-- Brittleness -->
  <text x="339" y="50" text-anchor="middle" fill="#374151" font-size="10">Apply a shear force:</text>
  <text x="339" y="65" text-anchor="middle" fill="#374151" font-size="10">+ − + − +    layer shifts</text>
  <text x="339" y="80" text-anchor="middle" fill="#374151" font-size="10">− + − + −  ────────→</text>
  <text x="339" y="95" text-anchor="middle" fill="#dc2626" font-size="10">+ aligns with +: REPULSION</text>
  <line x1="290" y1="108" x2="388" y2="108" stroke="#fde68a" stroke-width="1"/>
  <text x="339" y="122" text-anchor="middle" fill="#374151" font-size="9.5">No give — lattice shatters</text>
  <text x="339" y="136" text-anchor="middle" fill="#374151" font-size="9.5">Metals: layers slide (sea</text>
  <text x="339" y="149" text-anchor="middle" fill="#374151" font-size="9.5">of electrons rearranges)</text>
  <text x="339" y="165" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold">Proves: oppositely</text>
  <text x="339" y="177" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold">charged layers</text>

  <!-- High M.P. -->
  <text x="474" y="50" text-anchor="middle" fill="#374151" font-size="10">Melting points:</text>
  <text x="440" y="68" fill="#374151" font-size="10">NaCl (1+/1−)</text><text x="525" y="68" text-anchor="end" fill="#dc2626" font-size="10">801°C</text>
  <text x="440" y="84" fill="#374151" font-size="10">MgCl₂ (2+/1−)</text><text x="525" y="84" text-anchor="end" fill="#dc2626" font-size="10">714°C</text>
  <text x="440" y="100" fill="#374151" font-size="10">MgO (2+/2−)</text><text x="525" y="100" text-anchor="end" fill="#dc2626" font-size="10">2852°C</text>
  <line x1="425" y1="110" x2="523" y2="110" stroke="#fbcfe8" stroke-width="1"/>
  <text x="474" y="124" text-anchor="middle" fill="#374151" font-size="9.5">Higher charge → stronger</text>
  <text x="474" y="137" text-anchor="middle" fill="#374151" font-size="9.5">electrostatic attraction →</text>
  <text x="474" y="150" text-anchor="middle" fill="#374151" font-size="9.5">more energy to melt</text>
  <text x="474" y="167" text-anchor="middle" fill="#9d174d" font-size="9" font-weight="bold">Proves: strong ionic</text>
  <text x="474" y="179" text-anchor="middle" fill="#9d174d" font-size="9" font-weight="bold">forces throughout lattice</text>

  <!-- X-ray -->
  <text x="619" y="50" text-anchor="middle" fill="#374151" font-size="10">NaCl X-ray diffraction:</text>
  <text x="619" y="66" text-anchor="middle" fill="#374151" font-size="9.5">▸ Discrete spherical</text>
  <text x="619" y="79" text-anchor="middle" fill="#374151" font-size="9.5">  electron-density peaks</text>
  <text x="619" y="95" text-anchor="middle" fill="#374151" font-size="9.5">▸ 6:6 coordination</text>
  <text x="619" y="108" text-anchor="middle" fill="#374151" font-size="9.5">  r(Na⁺)=102 pm</text>
  <text x="619" y="121" text-anchor="middle" fill="#374151" font-size="9.5">  r(Cl⁻)=181 pm</text>
  <line x1="556" y1="132" x2="688" y2="132" stroke="#c4b5fd" stroke-width="1"/>
  <text x="619" y="148" text-anchor="middle" fill="#374151" font-size="9.5">Electron density dips</text>
  <text x="619" y="161" text-anchor="middle" fill="#374151" font-size="9.5">between ion centres</text>
  <text x="619" y="177" text-anchor="middle" fill="#4c1d95" font-size="9" font-weight="bold">Proves: distinct ions</text>
  <text x="619" y="189" text-anchor="middle" fill="#4c1d95" font-size="9" font-weight="bold">in a regular lattice</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'warn-noble',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Not All Ions Achieve Noble-Gas Configurations',
        text: 'Groups 1, 2 and Al do achieve noble-gas configs. Transition-metal ions do NOT:<br/>• Fe³⁺: [Ar]3d⁵ &nbsp;• Cu²⁺: [Ar]3d⁹ &nbsp;• Zn²⁺: [Ar]3d¹⁰<br/><br/>Ion charge is determined by the <em>overall energetics</em> of the ionic lattice (lattice enthalpy vs sum of ionisation energies), not the 8-electron rule alone.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Ionic bond = electrostatic attraction between oppositely charged ions in a giant lattice. Metal loses e⁻ → cation; non-metal gains e⁻ → anion. Evidence: electrolysis (Cu²⁺/CrO₄²⁻ separate at electrodes), conductivity only when molten/aqueous, brittleness (layer shift → like charges repel), high m.p. (NaCl 801°C, MgO 2852°C), X-ray (6:6 lattice, spherical ions).',
    cues: [
      { id: 'c1', blockId: 'svg-transfer', prompt: 'Describe the electron transfer when Na reacts with Cl. What configurations do Na⁺ and Cl⁻ achieve?' },
      { id: 'c2', blockId: 'key-def', prompt: 'Give the precise definition of ionic bonding. What does "non-directional" mean in this context?' },
      { id: 'c3', blockId: 'svg-dotcross', prompt: 'State four rules for drawing dot-and-cross diagrams for ionic compounds. How does MgCl₂ differ from NaCl?' },
      { id: 'c4', blockId: 'svg-evidence', prompt: 'State five pieces of evidence for ionic species and explain what each proves.' },
      { id: 'c5', blockId: 'warn-noble', prompt: 'Why do transition-metal ions NOT achieve noble-gas configurations? Which factor actually determines ion charge?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_1 ────────────────────────────
NOTE_1_3_1 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 1
 * "Ionic lattice structure and physical properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3A.2
 */
export const note_chemistry_1_3_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe the giant ionic lattice structure of NaCl and CsCl. Explain the physical properties of ionic compounds — high melting point, brittleness, and electrical conductivity — in terms of structure and bonding.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'The Giant Ionic Lattice', level: 2 },
      terms: []
    },
    {
      id: 'svg-lattice',
      type: 'svg',
      data: {
        caption: 'NaCl lattice (left): 6:6 coordination — each Na⁺ surrounded by 6 Cl⁻ and vice versa. CsCl lattice (right): 8:8 coordination — Cs⁺ at centre of cube of 8 Cl⁻.',
        svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- NaCl side header -->
  <text x="170" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">NaCl — Rock Salt Structure (6:6)</text>

  <!-- NaCl lattice grid 4×4 alternating -->
  <!-- Row 0: Na Cl Na Cl -->
  <circle cx="60"  cy="55" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60"  y="59" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="120" cy="55" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="59" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="180" cy="55" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="59" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="240" cy="55" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="240" y="59" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <!-- Row 1: Cl Na Cl Na -->
  <circle cx="60"  cy="120" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="60"  y="124" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="120" cy="120" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="124" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="180" cy="120" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="180" y="124" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="240" cy="120" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="240" y="124" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <!-- Row 2: Na Cl Na Cl -->
  <circle cx="60"  cy="185" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60"  y="189" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="120" cy="185" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="189" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="180" cy="185" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="189" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="240" cy="185" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="240" y="189" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <!-- Bond lines vertical -->
  <line x1="60" y1="74" x2="60" y2="101" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="74" x2="120" y2="105" stroke="#94a3b8" stroke-width="1"/>
  <line x1="180" y1="74" x2="180" y2="101" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="74" x2="240" y2="105" stroke="#94a3b8" stroke-width="1"/>
  <line x1="60" y1="139" x2="60" y2="166" stroke="#94a3b8" stroke-width="1"/>
  <line x1="120" y1="135" x2="120" y2="166" stroke="#94a3b8" stroke-width="1"/>
  <line x1="180" y1="139" x2="180" y2="166" stroke="#94a3b8" stroke-width="1"/>
  <line x1="240" y1="135" x2="240" y2="166" stroke="#94a3b8" stroke-width="1"/>
  <!-- Bond lines horizontal -->
  <line x1="75" y1="55" x2="101" y2="55" stroke="#94a3b8" stroke-width="1"/>
  <line x1="139" y1="55" x2="165" y2="55" stroke="#94a3b8" stroke-width="1"/>
  <line x1="199" y1="55" x2="221" y2="55" stroke="#94a3b8" stroke-width="1"/>
  <line x1="79" y1="120" x2="105" y2="120" stroke="#94a3b8" stroke-width="1"/>
  <line x1="135" y1="120" x2="161" y2="120" stroke="#94a3b8" stroke-width="1"/>
  <line x1="195" y1="120" x2="225" y2="120" stroke="#94a3b8" stroke-width="1"/>
  <line x1="75" y1="185" x2="101" y2="185" stroke="#94a3b8" stroke-width="1"/>
  <line x1="139" y1="185" x2="165" y2="185" stroke="#94a3b8" stroke-width="1"/>
  <line x1="199" y1="185" x2="221" y2="185" stroke="#94a3b8" stroke-width="1"/>
  <!-- Legend NaCl -->
  <circle cx="30" cy="255" r="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="42" y="259" fill="#1e40af" font-size="10">Na⁺ (smaller, r=102 pm)</text>
  <circle cx="30" cy="275" r="10" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="44" y="279" fill="#991b1b" font-size="10">Cl⁻ (larger, r=181 pm)</text>
  <text x="150" y="258" text-anchor="middle" fill="#374151" font-size="10">Co-ord number = 6</text>
  <text x="150" y="272" text-anchor="middle" fill="#374151" font-size="10">Empirical formula NaCl (1:1 ratio)</text>

  <!-- Divider -->
  <line x1="310" y1="10" x2="310" y2="295" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- CsCl side header -->
  <text x="500" y="18" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="13">CsCl — Caesium Chloride Structure (8:8)</text>

  <!-- Cube edges -->
  <line x1="355" y1="80" x2="445" y2="80" stroke="#64748b" stroke-width="1.5"/>
  <line x1="355" y1="80" x2="355" y2="190" stroke="#64748b" stroke-width="1.5"/>
  <line x1="445" y1="80" x2="445" y2="190" stroke="#64748b" stroke-width="1.5"/>
  <line x1="355" y1="190" x2="445" y2="190" stroke="#64748b" stroke-width="1.5"/>
  <line x1="355" y1="80" x2="395" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="445" y1="80" x2="485" y2="50" stroke="#64748b" stroke-width="1.5"/>
  <line x1="445" y1="190" x2="485" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="355" y1="190" x2="395" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="395" y1="50" x2="485" y2="50" stroke="#64748b" stroke-width="1.5"/>
  <line x1="395" y1="50" x2="395" y2="160" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="485" y1="50" x2="485" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <line x1="395" y1="160" x2="485" y2="160" stroke="#64748b" stroke-width="1.5"/>
  <!-- 8 Cl- at corners -->
  <circle cx="355" cy="80"  r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.8"/>
  <text x="355" cy="84" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="445" cy="80"  r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="445" y="84" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="355" cy="190" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="355" y="194" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="445" cy="190" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="445" y="194" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="395" cy="50"  r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.8"/>
  <text x="395" y="54" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="485" cy="50"  r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="485" y="54" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="395" cy="160" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.8"/>
  <text x="395" y="164" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="485" cy="160" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="485" y="164" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <!-- Cs+ at centre -->
  <circle cx="420" cy="135" r="18" fill="#15803d" stroke="#166534" stroke-width="2"/>
  <text x="420" y="139" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Cs⁺</text>
  <!-- Notes -->
  <text x="500" y="240" text-anchor="middle" fill="#374151" font-size="10">r(Cs⁺)=167 pm, r(Cl⁻)=181 pm</text>
  <text x="500" y="255" text-anchor="middle" fill="#374151" font-size="10">Radius ratio ≈ 92% → 8:8 coord</text>
  <text x="500" y="275" text-anchor="middle" fill="#374151" font-size="10">Body-centred cubic arrangement</text>
</svg>`
      },
      terms: ['Giant ionic lattice', 'Co-ordination number', 'Rock salt structure']
    },
    {
      id: 'key-nacl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'NaCl vs CsCl — Why Different Co-ordination Numbers?',
        text: 'The co-ordination number depends on the <strong>radius ratio</strong> (r_cation / r_anion):<br/>• NaCl: ratio ≈ 56% → <strong>6:6</strong> (rock salt). Each Na⁺ fits 6 Cl⁻ without them touching.<br/>• CsCl: ratio ≈ 92% → <strong>8:8</strong> (Cs⁺ is nearly as large as Cl⁻, so 8 fit around it).<br/><br/>Higher co-ordination → more ion pairs → more simultaneous attractions → higher lattice energy.'
      },
      terms: ['Radius ratio', 'Co-ordination number', 'Lattice energy']
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Physical Properties Explained', level: 2 },
      terms: []
    },
    {
      id: 'svg-props',
      type: 'svg',
      data: {
        caption: 'Three key physical properties of ionic compounds, explained in terms of the lattice structure',
        svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- 3 panels -->
  <rect x="5"   y="5" width="210" height="188" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <rect x="235" y="5" width="210" height="188" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <rect x="465" y="5" width="210" height="188" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>

  <!-- High M.P. -->
  <text x="110" y="26" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">🌡 High Melting Point</text>
  <text x="110" y="45" text-anchor="middle" fill="#374151" font-size="10">Many strong electrostatic</text>
  <text x="110" y="58" text-anchor="middle" fill="#374151" font-size="10">attractions throughout the</text>
  <text x="110" y="71" text-anchor="middle" fill="#374151" font-size="10">entire 3D lattice must all</text>
  <text x="110" y="84" text-anchor="middle" fill="#374151" font-size="10">be overcome to melt.</text>
  <line x1="20" y1="96" x2="200" y2="96" stroke="#fde68a" stroke-width="1"/>
  <text x="110" y="112" text-anchor="middle" fill="#374151" font-size="10">Higher ion charge → larger</text>
  <text x="110" y="125" text-anchor="middle" fill="#374151" font-size="10">attraction → higher m.p.</text>
  <text x="110" y="145" text-anchor="middle" fill="#374151" font-size="10">NaCl: 801°C (1+/1−)</text>
  <text x="110" y="160" text-anchor="middle" fill="#374151" font-size="10">MgO: 2852°C (2+/2−)</text>
  <text x="110" y="180" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold">High charge density → stronger forces</text>

  <!-- Brittle -->
  <text x="340" y="26" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="13">💔 Brittle</text>
  <text x="340" y="45" text-anchor="middle" fill="#374151" font-size="10">Force causes layer to shift.</text>
  <text x="340" y="60" text-anchor="middle" fill="#374151" font-size="10">Like-charged ions suddenly</text>
  <text x="340" y="75" text-anchor="middle" fill="#374151" font-size="10">align → repulsion → fracture.</text>
  <text x="340" y="92" text-anchor="middle" fill="#374151" font-size="10">+ − + − +  →  after shift:</text>
  <text x="340" y="107" text-anchor="middle" fill="#dc2626" font-size="10">+ − + + −   (+ adj to +)</text>
  <line x1="250" y1="118" x2="430" y2="118" stroke="#fbcfe8" stroke-width="1"/>
  <text x="340" y="134" text-anchor="middle" fill="#374151" font-size="10">Contrast: metals are malleable.</text>
  <text x="340" y="149" text-anchor="middle" fill="#374151" font-size="10">Metallic e⁻ sea rearranges when</text>
  <text x="340" y="164" text-anchor="middle" fill="#374151" font-size="10">layers slide → no repulsion.</text>
  <text x="340" y="183" text-anchor="middle" fill="#9d174d" font-size="9" font-weight="bold">Ionic layers cannot slide</text>

  <!-- Conductivity -->
  <text x="570" y="26" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="13">🔋 Electrical Conductivity</text>
  <text x="570" y="45" text-anchor="middle" fill="#374151" font-size="10">Solid: ions in FIXED positions.</text>
  <text x="570" y="60" text-anchor="middle" fill="#374151" font-size="10">Cannot carry charge. ✗</text>
  <text x="570" y="78" text-anchor="middle" fill="#374151" font-size="10">Molten: ions now FREE to</text>
  <text x="570" y="93" text-anchor="middle" fill="#374151" font-size="10">move. Conducts. ✓</text>
  <text x="570" y="111" text-anchor="middle" fill="#374151" font-size="10">Dissolved in water: ions</text>
  <text x="570" y="126" text-anchor="middle" fill="#374151" font-size="10">dissociate and are free to</text>
  <text x="570" y="141" text-anchor="middle" fill="#374151" font-size="10">move. Conducts. ✓</text>
  <line x1="480" y1="152" x2="660" y2="152" stroke="#6ee7b7" stroke-width="1"/>
  <text x="570" y="168" text-anchor="middle" fill="#374151" font-size="10">Covalent molecular solids: never</text>
  <text x="570" y="183" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold">conduct (no ions present)</text>
</svg>`
      },
      terms: ['Brittle', 'Malleable']
    },
    {
      id: 'tip-charge',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Comparing Ionic Compounds: Charge Density Matters',
        text: 'Melting point <strong>increases</strong> with higher ionic charge and smaller ionic radius (greater charge density):<br/>NaCl (1+/1−) &lt; MgCl₂ (2+/1−) &lt; MgO (2+/2−)<br/>Higher charge → stronger electrostatic force → needs more energy to overcome.'
      },
      terms: ['Charge density']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Giant ionic lattice: 3D array of alternating cations and anions. NaCl: 6:6 coordination (rock salt). CsCl: 8:8 coordination (radius ratio 92%). Properties: high m.p. (many strong forces), brittle (layer shift → like charges adjacent → repulsion), conducts only when molten/dissolved (ions must be free). Higher charge → higher m.p. (MgO 2852°C vs NaCl 801°C).',
    cues: [
      { id: 'c1', blockId: 'svg-lattice', prompt: 'Distinguish between the NaCl and CsCl structures. What co-ordination number does each have, and why are they different?' },
      { id: 'c2', blockId: 'key-nacl', prompt: 'How does radius ratio determine co-ordination number? Why does NaCl have 6:6 while CsCl has 8:8?' },
      { id: 'c3', blockId: 'svg-props', prompt: 'Explain brittleness and high melting point of ionic compounds in terms of lattice structure.' },
      { id: 'c4', blockId: 'svg-props', prompt: 'Why does NaCl not conduct electricity as a solid but does when molten or dissolved?' },
      { id: 'c5', blockId: 'tip-charge', prompt: 'Why does MgO have a much higher melting point than NaCl? What two factors determine ionic bond strength?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

files = {
    'note_1_3_0.js': NOTE_1_3_0,
    'note_1_3_1.js': NOTE_1_3_1,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {filename} ({len(content.splitlines())} lines)')

print('Batch 1 complete.')
