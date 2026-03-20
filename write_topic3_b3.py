#!/usr/bin/env python3
"""Write Chemistry Topic 3 batch 3: notes 1_3_5, 1_3_6, 1_3_7."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'src/data/seedNotes/chemistry')

# ─────────────────────────── note_1_3_5 ────────────────────────────
NOTE_1_3_5 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 5
 * "Bond polarity and electronegativity"
 * Source: Pearson Edexcel IAL Chemistry — Section 3C.3
 */
export const note_chemistry_1_3_5 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Define electronegativity and explain how it determines bond polarity. Distinguish polar covalent bonds from non-polar bonds. Determine whether a molecule is overall polar by considering both bond polarity and molecular symmetry.' },
      terms: []
    },
    {
      id: 'key-en',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Electronegativity',
        text: '<strong>Electronegativity</strong> is the ability of an atom in a covalent bond to attract the shared pair of electrons towards itself.<br/><br/>• Measured on the <strong>Pauling scale</strong> (F = 4.0, O = 3.5, N = 3.0, Cl = 3.2, C = 2.5, H = 2.2)<br/>• If Δ(EN) &gt; 0.5: <strong>polar covalent</strong> (δ+ / δ− partial charges appear)<br/>• If Δ(EN) ≈ 0: <strong>non-polar covalent</strong> bond<br/>• If Δ(EN) &gt; ~1.7: effectively <strong>ionic</strong>'
      },
      terms: ['Electronegativity', 'Pauling scale', 'Polar covalent bond', 'Dipole']
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Electronegativity Trends', level: 2 },
      terms: []
    },
    {
      id: 'svg-en-trend',
      type: 'svg',
      data: {
        caption: 'Electronegativity increases across a period (nuclear charge ↑) and decreases down a group (shielding ↑, atomic radius ↑). F (top-right) is the most electronegative element.',
        svg: `<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="10">
  <!-- Periodic table mini grid: periods 2-3, groups 1-8 -->
  <!-- Title -->
  <text x="340" y="16" text-anchor="middle" fill="#374151" font-weight="bold" font-size="13">Electronegativity Trend (Pauling Scale)</text>

  <!-- Gradient legend -->
  <defs>
    <linearGradient id="enGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#dbeafe"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect x="50" y="25" width="580" height="14" rx="3" fill="url(#enGrad)" stroke="#9ca3af" stroke-width="0.5"/>
  <text x="50"  y="50" fill="#1e40af" font-size="9">Low EN (metals) →</text>
  <text x="565" y="50" fill="#dc2626" font-size="9">→ High EN (non-metals)</text>

  <!-- Period 2 element boxes -->
  <!-- Li=0.98, Be=1.57, B=2.04, C=2.55, N=3.04, O=3.44, F=3.98 -->
  <!-- x positions: 50, 130, 210, 290, 370, 450, 530 -->
  <rect x="50"  y="58" width="70" height="42" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
  <text x="85"  y="76" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Li</text>
  <text x="85"  y="92" text-anchor="middle" fill="#374151">0.98</text>

  <rect x="130" y="58" width="70" height="42" rx="4" fill="#93c5fd" stroke="#3b82f6" stroke-width="1"/>
  <text x="165" y="76" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Be</text>
  <text x="165" y="92" text-anchor="middle" fill="#374151">1.57</text>

  <rect x="210" y="58" width="70" height="42" rx="4" fill="#6ee7b7" stroke="#10b981" stroke-width="1"/>
  <text x="245" y="76" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="12">B</text>
  <text x="245" y="92" text-anchor="middle" fill="#374151">2.04</text>

  <rect x="290" y="58" width="70" height="42" rx="4" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="325" y="76" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">C</text>
  <text x="325" y="92" text-anchor="middle" fill="#374151">2.55</text>

  <rect x="370" y="58" width="70" height="42" rx="4" fill="#fdba74" stroke="#f97316" stroke-width="1"/>
  <text x="405" y="76" text-anchor="middle" fill="#9a3412" font-weight="bold" font-size="12">N</text>
  <text x="405" y="92" text-anchor="middle" fill="#374151">3.04</text>

  <rect x="450" y="58" width="70" height="42" rx="4" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
  <text x="485" y="76" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="12">O</text>
  <text x="485" y="92" text-anchor="middle" fill="#374151">3.44</text>

  <rect x="530" y="58" width="70" height="42" rx="4" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
  <text x="565" y="76" text-anchor="middle" fill="white" font-weight="bold" font-size="12">F</text>
  <text x="565" y="92" text-anchor="middle" fill="white" font-weight="bold">3.98 🠕</text>

  <!-- Period 3 -->
  <!-- Na=0.93, Mg=1.31, Al=1.61, Si=1.90, P=2.19, S=2.58, Cl=3.16 -->
  <rect x="50"  y="108" width="70" height="42" rx="4" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
  <text x="85"  y="126" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Na</text>
  <text x="85"  y="142" text-anchor="middle" fill="#374151">0.93</text>

  <rect x="130" y="108" width="70" height="42" rx="4" fill="#93c5fd" stroke="#3b82f6" stroke-width="1"/>
  <text x="165" y="126" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Mg</text>
  <text x="165" y="142" text-anchor="middle" fill="#374151">1.31</text>

  <rect x="210" y="108" width="70" height="42" rx="4" fill="#6ee7b7" stroke="#10b981" stroke-width="1"/>
  <text x="245" y="126" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="12">Al</text>
  <text x="245" y="142" text-anchor="middle" fill="#374151">1.61</text>

  <rect x="290" y="108" width="70" height="42" rx="4" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="325" y="126" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">Si</text>
  <text x="325" y="142" text-anchor="middle" fill="#374151">1.90</text>

  <rect x="370" y="108" width="70" height="42" rx="4" fill="#fdba74" stroke="#f97316" stroke-width="1"/>
  <text x="405" y="126" text-anchor="middle" fill="#9a3412" font-weight="bold" font-size="12">P</text>
  <text x="405" y="142" text-anchor="middle" fill="#374151">2.19</text>

  <rect x="450" y="108" width="70" height="42" rx="4" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
  <text x="485" y="126" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="12">S</text>
  <text x="485" y="142" text-anchor="middle" fill="#374151">2.58</text>

  <rect x="530" y="108" width="70" height="42" rx="4" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
  <text x="565" y="126" text-anchor="middle" fill="white" font-weight="bold" font-size="12">Cl</text>
  <text x="565" y="142" text-anchor="middle" fill="white" font-weight="bold">3.16</text>

  <!-- Period labels -->
  <text x="15" y="84"  fill="#374151" font-size="9.5" font-weight="bold">Period 2</text>
  <text x="15" y="134" fill="#374151" font-size="9.5" font-weight="bold">Period 3</text>

  <!-- Arrows -->
  <line x1="50" y1="165" x2="600" y2="165" stroke="#10b981" stroke-width="2"/>
  <polygon points="600,160 615,165 600,170" fill="#10b981"/>
  <text x="330" y="181" text-anchor="middle" fill="#065f46" font-size="10" font-weight="bold">→ Across period: EN increases (nuclear charge ↑, atomic radius ↓)</text>

  <line x1="632" y1="58" x2="632" y2="150" stroke="#dc2626" stroke-width="2"/>
  <polygon points="627,150 632,165 637,150" fill="#dc2626"/>
  <text x="648" y="80"  fill="#b91c1c" font-size="9" font-weight="bold">↓</text>
  <text x="648" y="96"  fill="#b91c1c" font-size="9">Down</text>
  <text x="648" y="110" fill="#b91c1c" font-size="9">group:</text>
  <text x="648" y="124" fill="#b91c1c" font-size="9">EN ↓</text>
  <text x="648" y="138" fill="#b91c1c" font-size="9">(radius↑</text>
  <text x="648" y="152" fill="#b91c1c" font-size="9">shield↑)</text>
</svg>`
      },
      terms: ['Electronegativity']
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Polar vs Non-Polar Molecules', level: 2 },
      terms: []
    },
    {
      id: 'svg-polarity',
      type: 'svg',
      data: {
        caption: 'Molecular polarity depends on BOTH individual bond polarity AND the overall symmetry of the molecule. Symmetric molecules (CO₂, CCl₄) have bond dipoles that cancel → non-polar overall.',
        svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- 4 panels: HCl (polar), CO2 (non-polar), H2O (polar), CCl4 (non-polar) -->
  <rect x="5"   y="5" width="158" height="228" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <rect x="175" y="5" width="158" height="228" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="345" y="5" width="158" height="228" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <rect x="515" y="5" width="160" height="228" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>

  <!-- HCl — POLAR -->
  <text x="84"  y="24" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="12">HCl — POLAR</text>
  <circle cx="55"  cy="100" r="16" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55"  y="104" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <line x1="71" y1="100" x2="105" y2="100" stroke="#475569" stroke-width="2.5"/>
  <circle cx="121" cy="100" r="20" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
  <text x="121" y="104" text-anchor="middle" fill="white" font-size="10">Cl</text>
  <text x="55"  y="85" text-anchor="middle" fill="#1e40af" font-size="9">δ+</text>
  <text x="121" y="85" text-anchor="middle" fill="#dc2626" font-size="9">δ−</text>
  <!-- dipole arrow -->
  <line x1="58" y1="128" x2="110" y2="128" stroke="#f97316" stroke-width="2"/>
  <polygon points="110,122 124,128 110,134" fill="#f97316"/>
  <text x="84" y="148" text-anchor="middle" fill="#c2410c" font-size="9.5">Net dipole →</text>
  <text x="84" y="165" text-anchor="middle" fill="#374151" font-size="9">Δ(EN) = 3.16 − 2.2 = 0.96</text>
  <text x="84" y="180" text-anchor="middle" fill="#374151" font-size="9">Polar bond → linear →</text>
  <text x="84" y="193" text-anchor="middle" fill="#374151" font-size="9">asymmetric → net dipole</text>
  <rect x="18" y="205" width="133" height="22" rx="4" fill="#fee2e2" stroke="#f97316" stroke-width="1"/>
  <text x="84" y="221" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="10">μ ≠ 0 (has dipole moment)</text>

  <!-- CO2 — NON-POLAR -->
  <text x="254" y="24" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">CO₂ — NON-POLAR</text>
  <!-- O=C=O linear with opposing dipoles -->
  <circle cx="200" cy="100" r="16" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="104" text-anchor="middle" fill="#991b1b" font-size="9">O</text>
  <line x1="216" y1="100" x2="240" y2="100" stroke="#475569" stroke-width="2.5"/>
  <line x1="216" y1="106" x2="240" y2="106" stroke="#475569" stroke-width="2.5"/>
  <circle cx="256" cy="103" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="256" y="107" text-anchor="middle" fill="#065f46" font-size="9">C</text>
  <line x1="272" y1="100" x2="296" y2="100" stroke="#475569" stroke-width="2.5"/>
  <line x1="272" y1="106" x2="296" y2="106" stroke="#475569" stroke-width="2.5"/>
  <circle cx="312" cy="100" r="16" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="312" y="104" text-anchor="middle" fill="#991b1b" font-size="9">O</text>
  <text x="200" y="85" text-anchor="middle" fill="#dc2626" font-size="9">δ−</text>
  <text x="256" y="82" text-anchor="middle" fill="#065f46" font-size="9">δ+</text>
  <text x="312" y="85" text-anchor="middle" fill="#dc2626" font-size="9">δ−</text>
  <!-- two arrows pointing inward, canceling -->
  <line x1="230" y1="128" x2="248" y2="128" stroke="#f97316" stroke-width="1.5"/>
  <polygon points="248,122 258,128 248,134" fill="#f97316"/>
  <line x1="282" y1="128" x2="264" y2="128" stroke="#10b981" stroke-width="1.5"/>
  <polygon points="264,122 254,128 264,134" fill="#10b981"/>
  <text x="256" y="150" text-anchor="middle" fill="#374151" font-size="10">Dipoles cancel (linear/symmetric)</text>
  <text x="256" y="168" text-anchor="middle" fill="#374151" font-size="9">Both C=O bonds polar individually</text>
  <text x="256" y="183" text-anchor="middle" fill="#374151" font-size="9">but point in opposite directions</text>
  <rect x="187" y="205" width="133" height="22" rx="4" fill="#d1fae5" stroke="#22c55e" stroke-width="1"/>
  <text x="254" y="221" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="10">μ = 0 (no net dipole)</text>

  <!-- H2O — POLAR -->
  <text x="424" y="24" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="12">H₂O — POLAR</text>
  <!-- bent structure -->
  <circle cx="424" cy="90" r="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="424" y="94" text-anchor="middle" fill="#991b1b" font-size="10">O</text>
  <line x1="408" y1="102" x2="388" y2="128" stroke="#475569" stroke-width="2.5"/>
  <circle cx="380" cy="137" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="380" y="141" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <line x1="440" y1="102" x2="460" y2="128" stroke="#475569" stroke-width="2.5"/>
  <circle cx="468" cy="137" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="468" y="141" text-anchor="middle" fill="#1e40af" font-size="9">H</text>
  <!-- net dipole arrow upward -->
  <line x1="424" y1="160" x2="424" y2="130" stroke="#f97316" stroke-width="2.5"/>
  <polygon points="418,130 424,115 430,130" fill="#f97316"/>
  <text x="424" y="178" text-anchor="middle" fill="#c2410c" font-size="9.5">Net dipole (O side)</text>
  <text x="424" y="192" text-anchor="middle" fill="#374151" font-size="9">Bent shape → vectors</text>
  <text x="424" y="205" text-anchor="middle" fill="#374151" font-size="9">do NOT fully cancel</text>
  <rect x="358" y="210" width="133" height="22" rx="4" fill="#fee2e2" stroke="#f97316" stroke-width="1"/>
  <text x="424" y="226" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="10">μ ≠ 0 (polar molecule)</text>

  <!-- CCl4 — NON-POLAR -->
  <text x="595" y="24" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">CCl₄ — NON-POLAR</text>
  <!-- tetrahedral, all 4 C-Cl bonds polar but cancel by symmetry -->
  <circle cx="595" cy="95" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="595" y="99" text-anchor="middle" fill="#065f46" font-size="10">C</text>
  <line x1="556" y1="72" x2="579" y2="84" stroke="#475569" stroke-width="2"/>
  <circle cx="548" cy="68" r="14" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="548" y="72" text-anchor="middle" fill="#3730a3" font-size="9">Cl</text>
  <line x1="634" y1="72" x2="611" y2="84" stroke="#475569" stroke-width="2"/>
  <circle cx="642" cy="68" r="14" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="642" y="72" text-anchor="middle" fill="#3730a3" font-size="9">Cl</text>
  <line x1="556" y1="120" x2="579" y2="107" stroke="#475569" stroke-width="2" stroke-dasharray="5,2"/>
  <circle cx="548" cy="128" r="14" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="548" y="132" text-anchor="middle" fill="#3730a3" font-size="9">Cl</text>
  <line x1="634" y1="120" x2="611" y2="107" stroke="#475569" stroke-width="2"/>
  <circle cx="642" cy="128" r="14" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="642" y="132" text-anchor="middle" fill="#3730a3" font-size="9">Cl</text>
  <text x="595" y="160" text-anchor="middle" fill="#374151" font-size="9">4 polar C–Cl bonds but</text>
  <text x="595" y="174" text-anchor="middle" fill="#374151" font-size="9">arranged tetrahedrally →</text>
  <text x="595" y="188" text-anchor="middle" fill="#374151" font-size="9">4 dipoles cancel perfectly</text>
  <rect x="528" y="205" width="135" height="22" rx="4" fill="#d1fae5" stroke="#22c55e" stroke-width="1"/>
  <text x="595" y="221" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="10">μ = 0 (no net dipole)</text>
</svg>`
      },
      terms: ['Dipole moment', 'Polar molecule', 'Non-polar molecule']
    },
    {
      id: 'tip-symmetry',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Trick: Symmetry Test for Molecular Polarity',
        text: 'Steps to determine if a molecule is polar overall:<br/>1. Are any bonds polar? (Check Δ EN for each bond)<br/>2. If all bonds non-polar → molecule non-polar ✓<br/>3. If bonds are polar: does the shape have symmetry that makes the dipole vectors cancel?<br/>&nbsp;&nbsp;&nbsp;• Linear (both sides same) → non-polar (CO₂)<br/>&nbsp;&nbsp;&nbsp;• Trigonal planar (all same) → non-polar (BF₃)<br/>&nbsp;&nbsp;&nbsp;• Tetrahedral (all same) → non-polar (CCl₄)<br/>&nbsp;&nbsp;&nbsp;• Bent, pyramidal → polar (asymmetric)<br/><br/>H₂O: bent + 2 lone pairs → asymmetric → <strong>polar</strong>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Electronegativity: ability to attract shared electrons. F most EN (3.98); increases across period, decreases down group. Polar bond: Δ(EN) > 0.5. Molecule polar if bonds are polar AND shape is asymmetric. H₂O and HCl = polar; CO₂ and CCl₄ = non-polar (bonds cancel by symmetry).',
    cues: [
      { id: 'c1', blockId: 'key-en', prompt: 'Define electronegativity. How does it vary across a period and down a group? What values does fluorine and oxygen have on the Pauling scale?' },
      { id: 'c2', blockId: 'svg-en-trend', prompt: 'Explain why electronegativity increases across Period 3 from Na to Cl.' },
      { id: 'c3', blockId: 'svg-polarity', prompt: 'Why is CO₂ a non-polar molecule even though each C=O bond is polar?' },
      { id: 'c4', blockId: 'svg-polarity', prompt: 'Compare H₂O and CCl₄: why is H₂O polar but CCl₄ non-polar? What role does molecular shape play?' },
      { id: 'c5', blockId: 'tip-symmetry', prompt: 'Give the systematic steps to determine if a molecule has a net dipole moment. Apply them to BF₃ and NH₃.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_6 ────────────────────────────
NOTE_1_3_6 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 6
 * "Simple molecular substances and their properties"
 * Source: Pearson Edexcel IAL Chemistry — Section 3D.1
 */
export const note_chemistry_1_3_6 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Explain the physical properties of simple molecular substances (low melting/boiling points, non-conductors) in terms of weak intermolecular forces. Distinguish between breaking intermolecular forces (melting/boiling) and breaking covalent bonds.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Simple Molecular Structure', level: 2 },
      terms: []
    },
    {
      id: 'svg-structure',
      type: 'svg',
      data: {
        caption: 'Simple molecular substances consist of discrete molecules with strong covalent bonds within (intramolecular) and weak intermolecular forces between molecules. When the solid melts or boils, ONLY the weak intermolecular forces are broken — the covalent bonds remain intact.',
        svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Structure diagram on left -->
  <rect x="5" y="8" width="310" height="244" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="160" y="26" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">Cl₂ Molecular Solid (schematic)</text>

  <!-- Cl2 molecule 1 -->
  <circle cx="65"  cy="75"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="65"  y="79"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="81" y1="75" x2="99" y2="75" stroke="#1e40af" stroke-width="3"/>
  <circle cx="115" cy="75"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="115" y="79"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 2 -->
  <circle cx="175" cy="80"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="175" y="84"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="191" y1="80" x2="209" y2="80" stroke="#1e40af" stroke-width="3"/>
  <circle cx="225" cy="80"  r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="84"  text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 3 -->
  <circle cx="60"  cy="155" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="60"  y="159" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="76" y1="155" x2="94" y2="155" stroke="#1e40af" stroke-width="3"/>
  <circle cx="110" cy="155" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="110" y="159" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Cl2 molecule 4 -->
  <circle cx="180" cy="160" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="180" y="164" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>
  <line x1="196" y1="160" x2="214" y2="160" stroke="#1e40af" stroke-width="3"/>
  <circle cx="230" cy="160" r="16" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="230" y="164" text-anchor="middle" fill="#065f46" font-size="10">Cl</text>

  <!-- Weak IMF arrows (dashed) between molecules -->
  <line x1="131" y1="72" x2="159" y2="76" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="120" y1="88" x2="175" y2="95" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
  <line x1="100" y1="118" x2="90" y2="139" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="228" y1="96" x2="200" y2="144" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Labels -->
  <line x1="15" y1="75" x2="48" y2="75" stroke="#1e40af" stroke-width="2"/>
  <text x="12" y="78" text-anchor="end" fill="#1e40af" font-size="9.5">strong</text>
  <text x="12" y="90" text-anchor="end" fill="#1e40af" font-size="9.5">cov. bond</text>
  <text x="255" y="125" fill="#f97316" font-size="9.5">weak</text>
  <text x="255" y="138" fill="#f97316" font-size="9.5">London</text>
  <text x="255" y="151" fill="#f97316" font-size="9.5">forces</text>

  <text x="160" y="220" text-anchor="middle" fill="#374151" font-size="10">Covalent bonds within molecule: ~200–900 kJ mol⁻¹</text>
  <text x="160" y="238" text-anchor="middle" fill="#374151" font-size="10">London forces between molecules: ~1–40 kJ mol⁻¹</text>

  <!-- Properties panel -->
  <rect x="328" y="8" width="345" height="244" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="500" y="27" text-anchor="middle" fill="#334155" font-weight="bold" font-size="13">Physical Properties</text>

  <rect x="340" y="35" width="321" height="46" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="55" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">🌡 Low Melting &amp; Boiling Points</text>
  <text x="500" y="73" text-anchor="middle" fill="#374151" font-size="10">Only weak IMF break on melting. Covalent bonds stay intact.</text>

  <rect x="340" y="90" width="321" height="46" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="1"/>
  <text x="500" y="110" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="11">⚡ Non-conductors (usually)</text>
  <text x="500" y="128" text-anchor="middle" fill="#374151" font-size="10">No ions or free electrons. Cannot carry charge.</text>

  <rect x="340" y="145" width="321" height="46" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
  <text x="500" y="165" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">💧 Solubility: "Like dissolves like"</text>
  <text x="500" y="183" text-anchor="middle" fill="#374151" font-size="10">Polar molecules dissolve in polar solvents (water).</text>

  <rect x="340" y="200" width="321" height="44" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1"/>
  <text x="500" y="220" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="11">📊 M.P. rises with molecular size</text>
  <text x="500" y="238" text-anchor="middle" fill="#374151" font-size="10">More electrons → stronger London forces → higher m.p.</text>
</svg>`
      },
      terms: ['Intermolecular force', 'London dispersion force', 'Covalent bond']
    },
    {
      id: 'key-distinction',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Critical Distinction: Intermolecular vs Intramolecular',
        text: '<strong>Intramolecular:</strong> forces within a molecule → strong covalent bonds (100–900 kJ mol⁻¹)<br/><strong>Intermolecular:</strong> forces between molecules → weak London/dipole-dipole/H-bonds (1–50 kJ mol⁻¹)<br/><br/>When a simple molecular substance <em>melts or boils</em>, only intermolecular forces are overcome. The molecules themselves remain intact — you still have H₂O molecules in steam, not individual H and O atoms.'
      },
      terms: ['Intramolecular', 'Intermolecular force']
    },
    {
      id: 'tip-mp-trend',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Trend: M.P. Down Group 7 (Halogens)',
        text: 'F₂ (−219°C)  &lt;  Cl₂ (−101°C)  &lt;  Br₂ (+7°C)  &lt;  I₂ (+114°C)<br/><br/>As molar mass increases, the number of electrons increases → larger instantaneous dipoles → stronger London (van der Waals) forces → higher melting point.<br/><br/>This trend is a common exam question — always explain through electron number, not "size" alone.'
      },
      terms: ['London dispersion force', 'Instantaneous dipole']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Simple molecular substances: discrete molecules with strong covalent bonds inside, weak IMF between. Properties: low m.p./b.p. (only IMF broken), non-conductors (no ions/free e⁻), "like dissolves like". Melting / boiling ≠ breaking covalent bonds. Trend: larger molecules → more electrons → stronger London forces → higher m.p. (F₂ < Cl₂ < Br₂ < I₂).',
    cues: [
      { id: 'c1', blockId: 'svg-structure', prompt: 'Explain why simple molecular substances have low melting points. Which forces are broken when Cl₂ melts?' },
      { id: 'c2', blockId: 'key-distinction', prompt: 'Distinguish between intramolecular and intermolecular forces. Give typical energy ranges for each.' },
      { id: 'c3', blockId: 'svg-structure', prompt: 'Why are simple molecular substances (like I₂) usually non-conductors? Under what conditions might they conduct?' },
      { id: 'c4', blockId: 'tip-mp-trend', prompt: 'Why does melting point increase from F₂ to I₂? Explain in terms of electrons and London forces.' },
      { id: 'c5', blockId: 'key-distinction', prompt: 'Steam consists of H₂O molecules. What bonds are broken when steam condenses to water and when water is decomposed by electrolysis? Identify each type.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_7 ────────────────────────────
NOTE_1_3_7 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 7
 * "Giant covalent substances (macromolecular structures)"
 * Source: Pearson Edexcel IAL Chemistry — Section 3D.2
 */
export const note_chemistry_1_3_7 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe the giant covalent (macromolecular) structures of diamond, graphite and silicon dioxide. Explain their physical properties in terms of strong covalent bonds throughout the lattice. Identify graphite as a conductor.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Diamond — Giant Covalent Network', level: 2 },
      terms: []
    },
    {
      id: 'svg-diamond',
      type: 'svg',
      data: {
        caption: 'Diamond structure: each carbon forms 4 covalent bonds to neighbouring C atoms in a tetrahedral arrangement (bond angle 109.5°). Forms a 3D lattice — not a repeating molecular unit. Compare: graphite (right) with hexagonal layers held by van der Waals forces.',
        svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Diamond panel -->
  <rect x="5" y="5" width="320" height="270" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="165" y="24" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">Diamond</text>
  <text x="165" y="39" text-anchor="middle" fill="#64748b" font-size="10">Each C: 4 bonds, tetrahedral (109.5°)</text>

  <!-- Diamond tetrahedral unit: central C + 4 neighbours -->
  <circle cx="165" cy="135" r="16" fill="#1e40af" stroke="#1e3a8a" stroke-width="2"/>
  <text x="165" y="139" text-anchor="middle" fill="white" font-size="10" font-weight="bold">C</text>
  <!-- 4 bond lines to corner C atoms -->
  <line x1="105" y1="90" x2="150" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="105" y1="90" x2="150" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="225" y1="90" x2="180" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="115" y1="190" x2="150" y2="148" stroke="#374151" stroke-width="2.5"/>
  <line x1="215" y1="190" x2="180" y2="148" stroke="#374151" stroke-width="2.5"/>
  <!-- A 5th C above (3D illusion) -->
  <line x1="165" y1="118" x2="165" y2="68" stroke="#374151" stroke-width="2.5" stroke-dasharray="5,3"/>
  <!-- 4 corner C atoms -->
  <circle cx="105" cy="82" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="105" y="86" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="225" cy="82" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="225" y="86" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="105" cy="196" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="105" y="200" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="225" cy="196" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="225" y="200" text-anchor="middle" fill="white" font-size="10">C</text>
  <circle cx="165" cy="58" r="14" fill="#3b82f6" stroke="#1e40af" stroke-width="1.5"/>
  <text x="165" y="62" text-anchor="middle" fill="white" font-size="10">C</text>
  <!-- Bond angle label -->
  <path d="M 155 120 A 20 20 0 0 1 152 107" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="128" y="112" fill="#dc2626" font-size="9">109.5°</text>

  <!-- Diamond properties -->
  <rect x="15" y="218" width="300" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <text x="165" y="237" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Properties</text>
  <text x="25" y="253" fill="#374151" font-size="10">• Hardest natural substance (all 4 bonds must break to deform)</text>
  <text x="25" y="266" fill="#374151" font-size="10">• Very high m.p. ~3550°C  •  Non-conductor (no free e⁻ or ions)</text>

  <!-- Graphite panel -->
  <rect x="342" y="5" width="333" height="270" rx="10" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5"/>
  <text x="508" y="24" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="13">Graphite</text>
  <text x="508" y="39" text-anchor="middle" fill="#64748b" font-size="10">Each C: 3 bonds, hexagonal layers (120°)</text>

  <!-- Hexagonal layer 1: 6-membered ring -->
  <!-- Centre ~(475,130), radius ~45 -->
  <!-- Vertices of hexagon: angle 0,60,120,180,240,300 -->
  <!-- Points: (520,130),(497.5,86.95),(452.5,86.95),(430,130),(452.5,173),(497.5,173) -->
  <polygon points="520,130 497,88 453,88 430,130 453,172 497,172" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <!-- C atoms at vertices -->
  <circle cx="520" cy="130" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="520" cy="134" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="497" cy="88" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="497" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="88" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="453" y="92" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="430" cy="130" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="430" y="134" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="453" cy="172" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="453" y="176" text-anchor="middle" fill="white" font-size="9">C</text>
  <circle cx="497" cy="172" r="12" fill="#a855f7" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="497" y="176" text-anchor="middle" fill="white" font-size="9">C</text>

  <!-- Delocalised e- shown as orange dots -->
  <circle cx="475" cy="118" r="4" fill="#f97316"/>
  <circle cx="470" cy="134" r="4" fill="#f97316"/>
  <circle cx="480" cy="148" r="4" fill="#f97316"/>
  <text x="540" y="130" fill="#f97316" font-size="9.5">π e⁻</text>
  <text x="540" y="143" fill="#f97316" font-size="9.5">(delocalised)</text>

  <!-- Layer spacing arrow -->
  <line x1="355" y1="130" x2="355" y2="195" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="358" y="165" fill="#64748b" font-size="9">335 pm</text>
  <text x="358" y="178" fill="#64748b" font-size="9">weak vdW</text>

  <!-- Graphite properties -->
  <rect x="352" y="204" width="313" height="64" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1"/>
  <text x="508" y="221" text-anchor="middle" fill="#4c1d95" font-weight="bold" font-size="11">Properties</text>
  <text x="360" y="237" fill="#374151" font-size="10">• High m.p. ~3600°C (strong cov. bonds in layers)</text>
  <text x="360" y="252" fill="#374151" font-size="10">• Electrical conductor (delocalised π e⁻ move between layers)</text>
  <text x="360" y="265" fill="#374151" font-size="10">• Slippery/lubricant (layers slide over weak vdW forces)</text>
</svg>`
      },
      terms: ['Giant covalent structure', 'Diamond', 'Graphite', 'Delocalised electrons']
    },
    {
      id: 'key-sio2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Silicon Dioxide (SiO₂) — Third Giant Covalent',
        text: 'Structure: each Si forms <strong>4 covalent bonds</strong> to O, and each O bridges between 2 Si atoms. Forms a 3D tetrahedral network like diamond but with Si–O bonds.<br/><br/>• Formula SiO₂: empirical formula (not discrete molecules)<br/>• Very high m.p. ~1700°C (many strong Si–O bonds, ~466 kJ mol⁻¹)<br/>• Hard but brittle<br/>• Non-conductor (no free electrons or ions)'
      },
      terms: ['Silicon dioxide', 'Empirical formula']
    },
    {
      id: 'tip-graphite',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why Graphite Conducts — and Diamond Does Not',
        text: 'In graphite, each C forms only <strong>3 σ bonds</strong> within the layer. The 4th valence electron enters a delocalised π system above and below each hexagonal layer → free to move → electrical conductor.<br/><br/>In diamond, each C forms <strong>4 σ bonds</strong> → all valence electrons are localised in bonds → no free electrons → non-conductor.<br/><br/>Graphite is also a lubricant because the weak van der Waals forces between layers allow them to <em>slide</em> easily.'
      },
      terms: ['Delocalised electrons', 'Sigma bond', 'Pi bond']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Diamond: each C with 4 cov. bonds, tetrahedral (109.5°), hardest substance, non-conductor, very high m.p. Graphite: each C with 3 cov. bonds (120°), layered hexagons, delocalised π e⁻ → conductor, layers slide → lubricant. SiO₂: 3D network Si–O bonds, empirical formula, high m.p. All giant covalent structures: high m.p., non-conductors (except graphite).',
    cues: [
      { id: 'c1', blockId: 'svg-diamond', prompt: 'Describe the bonding and structure of diamond. Why is it the hardest natural substance?' },
      { id: 'c2', blockId: 'svg-diamond', prompt: 'Why does graphite have a much lower density and can act as a lubricant, unlike diamond?' },
      { id: 'c3', blockId: 'tip-graphite', prompt: 'Explain precisely why graphite conducts electricity but diamond does not. Reference the number of bonds each carbon forms.' },
      { id: 'c4', blockId: 'key-sio2', prompt: 'Describe the structure of SiO₂. Why does it have a much higher melting point than CO₂, despite both containing only C or Si with oxygen?' },
      { id: 'c5', blockId: 'svg-diamond', prompt: 'State two physical properties shared by diamond, graphite and SiO₂, and one property where graphite is unique.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

files = {
    'note_1_3_5.js': NOTE_1_3_5,
    'note_1_3_6.js': NOTE_1_3_6,
    'note_1_3_7.js': NOTE_1_3_7,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {filename} ({len(content.splitlines())} lines)')

print('Batch 3 complete.')
