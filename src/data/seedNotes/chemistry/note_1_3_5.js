/**
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
  presentationSlides: [
    {
      layout: 'bento',
      title: 'Bond Polarity & Electronegativity',
      subtitle: 'WCH11 — Chemistry Topic 3.5',
      elements: [
        { delay: 0, colSpan: 1, icon: '🧲', title: 'Electronegativity', html: 'Ability of an atom to <strong>attract bonding electrons</strong> towards itself in a covalent bond.<br/>Pauling scale: F = 4.0 (highest); Cs/Fr ≈0.7 (lowest).<br/>Increases across period; decreases down group.' },
        { delay: 1, colSpan: 1, icon: '🔄', title: 'Polar Bonds', html: 'Different electronegativities → unequal electron sharing.<br/>More electronegative atom gets partial negative charge <strong>δ−</strong>; the other gets <strong>δ+</strong>.<br/>e.g. Hδ+–Fδ− bond in HF.' },
        { delay: 2, colSpan: 1, icon: '🔀', title: 'Polar vs Non-Polar Molecules', html: '<strong>Non-polar:</strong> symmetrical — dipoles cancel (CO₂, CCl₄, BF₃).<br/><strong>Polar:</strong> asymmetrical — net dipole moment (H₂O, HCl, NH₃, SO₂).' },
        { delay: 3, colSpan: 2, icon: '💡', title: 'Dipole Moments & Symmetry', html: 'A <strong>dipole moment (μ)</strong> indicates overall polarity.<br/>Molecules with polar bonds can still be <em>non-polar</em> if geometry causes dipoles to cancel.<br/>e.g. BF₃: 3 polar B–F bonds, trigonal planar → dipoles cancel exactly → non-polar.' },
      ]
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
