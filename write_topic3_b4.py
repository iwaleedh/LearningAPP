#!/usr/bin/env python3
"""Write Chemistry Topic 3 batch 4: notes 1_3_8, 1_3_9, 1_3_10."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'src/data/seedNotes/chemistry')

# ─────────────────────────── note_1_3_8 ────────────────────────────
NOTE_1_3_8 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 8
 * "Bond length and bond strength"
 * Source: Pearson Edexcel IAL Chemistry — Section 3E
 */
export const note_chemistry_1_3_8 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Explain the relationship between bond order, bond length and bond enthalpy. Use data to compare single, double and triple bonds. Explain trends in terms of the number of shared electron pairs.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Bond Order, Length and Enthalpy', level: 2 },
      terms: []
    },
    {
      id: 'svg-bond-data',
      type: 'svg',
      data: {
        caption: 'As bond order increases (single → double → triple), bond length decreases and bond enthalpy increases. More shared electron pairs → stronger attraction between nuclei → shorter, harder-to-break bond.',
        svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- LEFT: Bond length bar chart (shorter = longer bar for inverse) -->
  <rect x="5" y="5" width="320" height="270" rx="10" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
  <text x="165" y="23" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="13">Bond Length (pm) — shorter is stronger</text>

  <!-- axis -->
  <line x1="120" y1="40" x2="120" y2="225" stroke="#374151" stroke-width="1.5"/>
  <line x1="120" y1="225" x2="305" y2="225" stroke="#374151" stroke-width="1.5"/>

  <!-- C–C  single: 154 pm -->
  <rect x="120" y="75" width="154" height="32" rx="3" fill="#34d399" stroke="#10b981" stroke-width="1"/>
  <text x="115" y="96" text-anchor="end" fill="#065f46" font-size="10">C–C</text>
  <text x="280" y="96" fill="#065f46" font-weight="bold" font-size="10">154 pm</text>

  <!-- C=C  double: 134 pm -->
  <rect x="120" y="123" width="134" height="32" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1"/>
  <text x="115" y="144" text-anchor="end" fill="#1e40af" font-size="10">C=C</text>
  <text x="260" y="144" fill="#1e40af" font-weight="bold" font-size="10">134 pm</text>

  <!-- C≡C  triple: 120 pm -->
  <rect x="120" y="171" width="120" height="32" rx="3" fill="#a855f7" stroke="#7c3aed" stroke-width="1"/>
  <text x="115" y="192" text-anchor="end" fill="#7c3aed" font-size="10">C≡C</text>
  <text x="246" y="192" fill="#7c3aed" font-weight="bold" font-size="10">120 pm</text>

  <!-- scale marks -->
  <text x="120" y="240" text-anchor="middle" fill="#374151" font-size="9">0</text>
  <text x="220" y="240" text-anchor="middle" fill="#374151" font-size="9">100</text>
  <text x="274" y="240" text-anchor="middle" fill="#374151" font-size="9">154 pm</text>
  <text x="165" y="258" text-anchor="middle" fill="#374151" font-size="10">← Shorter bond = stronger bond</text>

  <!-- RIGHT: Bond enthalpy bar chart -->
  <rect x="340" y="5" width="335" height="270" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="507" y="23" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">Bond Enthalpy (kJ mol⁻¹)</text>

  <!-- axis -->
  <line x1="405" y1="40" x2="405" y2="225" stroke="#374151" stroke-width="1.5"/>
  <line x1="405" y1="225" x2="660" y2="225" stroke="#374151" stroke-width="1.5"/>

  <!-- C–C single: 347 kJ/mol → scaled to ~100px -->
  <rect x="405" y="75" width="100" height="32" rx="3" fill="#34d399" stroke="#10b981" stroke-width="1"/>
  <text x="400" y="96" text-anchor="end" fill="#065f46" font-size="10">C–C</text>
  <text x="510" y="96" fill="#065f46" font-weight="bold" font-size="10">347 kJ mol⁻¹</text>

  <!-- C=C double: 614 kJ/mol → ~178px -->
  <rect x="405" y="123" width="178" height="32" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1"/>
  <text x="400" y="144" text-anchor="end" fill="#1e40af" font-size="10">C=C</text>
  <text x="588" y="144" fill="#1e40af" font-weight="bold" font-size="10">614 kJ mol⁻¹</text>

  <!-- C≡C triple: 839 kJ/mol → ~243px -->
  <rect x="405" y="171" width="243" height="32" rx="3" fill="#a855f7" stroke="#7c3aed" stroke-width="1"/>
  <text x="400" y="192" text-anchor="end" fill="#7c3aed" font-size="10">C≡C</text>
  <text x="653" y="192" fill="#7c3aed" font-weight="bold" font-size="10">839 kJ mol⁻¹</text>

  <!-- scale marks -->
  <text x="405" y="240" text-anchor="middle" fill="#374151" font-size="9">0</text>
  <text x="505" y="240" text-anchor="middle" fill="#374151" font-size="9">347</text>
  <text x="583" y="240" text-anchor="middle" fill="#374151" font-size="9">614</text>
  <text x="507" y="258" text-anchor="middle" fill="#374151" font-size="10">Higher enthalpy = more energy to break = stronger bond</text>
</svg>`
      },
      terms: ['Bond enthalpy', 'Bond length', 'Bond order']
    },
    {
      id: 'key-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bond Order Trend',
        text: '<strong>More shared electron pairs → more electron density between nuclei → stronger nuclear attraction → shorter, stronger bond.</strong><br/><br/><table style="border-collapse:collapse;width:100%;font-size:12px"><tr style="background:#fde68a"><th style="padding:4px 8px;text-align:left;border:1px solid #f59e0b">Bond</th><th style="padding:4px 8px;border:1px solid #f59e0b">Shared pairs</th><th style="padding:4px 8px;border:1px solid #f59e0b">Length (pm)</th><th style="padding:4px 8px;border:1px solid #f59e0b">Enthalpy (kJ mol⁻¹)</th></tr><tr><td style="padding:4px 8px;border:1px solid #fcd34d">C–C (single)</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">1</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">154</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">347</td></tr><tr style="background:#fef9e7"><td style="padding:4px 8px;border:1px solid #fcd34d">C=C (double)</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">2</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">134</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">614</td></tr><tr><td style="padding:4px 8px;border:1px solid #fcd34d">C≡C (triple)</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">3</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">120</td><td style="padding:4px 8px;border:1px solid #fcd34d;text-align:center">839</td></tr></table>'
      },
      terms: ['Bond order', 'Bond enthalpy', 'Bond length']
    },
    {
      id: 'tip-average',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips on Bond Enthalpy',
        text: '• Bond enthalpies are <strong>mean (average)</strong> values — the C–H bond enthalpy in CH₄ (412 kJ mol⁻¹) is slightly different from C–H in C₂H₆ due to the different molecular environments.<br/>• Bond breaking is <strong>endothermic</strong> (+ΔH); bond forming is <strong>exothermic</strong> (−ΔH).<br/>• Use: ΔH°rxn ≈ Σ(bonds broken) − Σ(bonds formed) — gives an estimate, not an exact value (because mean values are used).'
      },
      terms: ['Mean bond enthalpy', 'Endothermic', 'Exothermic']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Bond order: single < double < triple. As bond order increases: length decreases (154→134→120 pm), enthalpy increases (347→614→839 kJ mol⁻¹). Reason: more shared pairs → stronger e⁻ attraction → shorter, stronger bond. Bond enthalpy values are mean values. Bond breaking = endothermic; formation = exothermic.',
    cues: [
      { id: 'c1', blockId: 'svg-bond-data', prompt: 'State the bond lengths and enthalpies for C–C, C=C and C≡C. What trend do you observe?' },
      { id: 'c2', blockId: 'key-trend', prompt: 'Explain why a C≡C bond is shorter and stronger than a C–C bond.' },
      { id: 'c3', blockId: 'tip-average', prompt: 'Why are bond enthalpy values described as "mean" values? When would comparing C–H in different molecules give slightly different results?' },
      { id: 'c4', blockId: 'tip-average', prompt: 'State the sign convention for bond enthalpy in bond breaking vs bond forming, and write the equation to estimate ΔH°rxn from mean bond enthalpies.' },
      { id: 'c5', blockId: 'key-trend', prompt: 'Using bond data, predict whether C=O or C–O would be shorter. Justify with reference to shared electron pairs.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_9 ────────────────────────────
NOTE_1_3_9 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 9
 * "Comparing types of structure"
 * Source: Pearson Edexcel IAL Chemistry — Section 3F
 */
export const note_chemistry_1_3_9 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Compare and contrast the four major structure types — ionic, metallic, giant covalent (macromolecular) and simple molecular — in terms of their bonding, melting points, electrical conductivity and solubility.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'The Four Structure Types', level: 2 },
      terms: []
    },
    {
      id: 'svg-comparison',
      type: 'svg',
      data: {
        caption: 'Four-panel infographic comparing structure types. Use the bonding type and structure to explain all physical properties. Melting/boiling points all depend on how many and how strong the bonds/interactions that must be broken.',
        svg: `<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Panel 1: Ionic -->
  <rect x="5"   y="5"   width="158" height="368" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
  <rect x="5"   y="5"   width="158" height="36" rx="8" fill="#f97316"/>
  <text x="84"  y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">⊕ IONIC</text>
  <!-- mini lattice -->
  <circle cx="52"  cy="88"  r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="52"  y="92"  text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <circle cx="84"  cy="60"  r="12" fill="#a5f3fc" stroke="#0891b2" stroke-width="1.5"/>
  <text x="84"  y="64"  text-anchor="middle" fill="#1e3a8a" font-size="9">Cl⁻</text>
  <circle cx="116" cy="88"  r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="116" y="92"  text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <circle cx="84"  cy="116" r="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
  <text x="84"  y="120" text-anchor="middle" fill="#991b1b" font-size="9">Na⁺</text>
  <line x1="64"  y1="96"  x2="72"  y2="108" stroke="#94a3b8" stroke-width="1"/>
  <line x1="96"  y1="96"  x2="104" y2="108" stroke="#94a3b8" stroke-width="1"/>
  <line x1="64"  y1="82"  x2="72"  y2="70"  stroke="#94a3b8" stroke-width="1"/>
  <!-- properties -->
  <rect x="10" y="135" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="150" text-anchor="middle" fill="#92400e" font-size="9.5">🌡 High m.p. (lattice)</text>
  <rect x="10" y="163" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="178" text-anchor="middle" fill="#92400e" font-size="9.5">⚡ Solid: none</text>
  <rect x="10" y="191" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="206" text-anchor="middle" fill="#92400e" font-size="9.5">⚡ Molten/solution: yes</text>
  <rect x="10" y="219" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="234" text-anchor="middle" fill="#92400e" font-size="9.5">💧 Polar solvents: soluble</text>
  <rect x="10" y="247" width="148" height="22" rx="4" fill="#fde68a"/>
  <text x="84" y="262" text-anchor="middle" fill="#92400e" font-size="9.5">⚠ Brittle (ions shift)</text>
  <text x="84" y="295" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="84" y="310" text-anchor="middle" fill="#374151" font-size="9">Electrostatic attraction</text>
  <text x="84" y="323" text-anchor="middle" fill="#374151" font-size="9">between + and − ions</text>
  <text x="84" y="338" text-anchor="middle" fill="#374151" font-size="9">E.g. NaCl, MgO, CaCl₂</text>
  <text x="84" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. ~800°C+</text>

  <!-- Panel 2: Metallic -->
  <rect x="175" y="5"   width="158" height="368" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <rect x="175" y="5"   width="158" height="36" rx="8" fill="#16a34a"/>
  <text x="254" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">⚛ METALLIC</text>
  <!-- sea of electrons -->
  <rect x="183" y="48" width="142" height="90" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
  <circle cx="214" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="214" cy="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="253" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="253" y="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="292" cy="73"  r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="292" y="77" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="214" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="214" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="253" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="253" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <circle cx="292" cy="112" r="11" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="292" y="116" text-anchor="middle" fill="#14532d" font-size="9">M⁺</text>
  <!-- free electrons -->
  <circle cx="233" cy="93"  r="4" fill="#fbbf24"/>
  <circle cx="272" cy="93"  r="4" fill="#fbbf24"/>
  <circle cx="233" cy="128" r="4" fill="#fbbf24" opacity="0.6"/>
  <!-- properties -->
  <rect x="180" y="148" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="163" text-anchor="middle" fill="#166534" font-size="9.5">🌡 High m.p. (usually)</text>
  <rect x="180" y="176" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="191" text-anchor="middle" fill="#166534" font-size="9.5">⚡ Always conducts</text>
  <rect x="180" y="204" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="219" text-anchor="middle" fill="#166534" font-size="9.5">🔨 Malleable &amp; ductile</text>
  <rect x="180" y="232" width="148" height="22" rx="4" fill="#dcfce7"/>
  <text x="254" y="247" text-anchor="middle" fill="#166534" font-size="9.5">💥 Insoluble in water</text>
  <text x="254" y="291" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="254" y="306" text-anchor="middle" fill="#374151" font-size="9">Cation + delocalised e⁻ sea</text>
  <text x="254" y="319" text-anchor="middle" fill="#374151" font-size="9">E.g. Na, Mg, Al, Fe</text>
  <text x="254" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. varies (Na 98°C → W 3422°C)</text>

  <!-- Panel 3: Giant Covalent -->
  <rect x="345" y="5"   width="158" height="368" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
  <rect x="345" y="5"   width="158" height="36" rx="8" fill="#7c3aed"/>
  <text x="424" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">💎 GIANT COVALENT</text>
  <!-- Diamond tetrahedral mini -->
  <circle cx="424" cy="90"  r="12" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="424" cy="94" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <line x1="415" y1="80" x2="393" y2="64" stroke="#374151" stroke-width="2"/>
  <line x1="433" y1="80" x2="455" y2="64" stroke="#374151" stroke-width="2"/>
  <line x1="415" y1="100" x2="393" y2="120" stroke="#374151" stroke-width="2"/>
  <line x1="433" y1="100" x2="455" y2="120" stroke="#374151" stroke-width="2"/>
  <circle cx="386" cy="58"  r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="386" cy="62" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="462" cy="58"  r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="462" y="62" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="386" cy="127" r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="386" y="131" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <circle cx="462" cy="127" r="10" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1"/>
  <text x="462" y="131" text-anchor="middle" fill="#4c1d95" font-size="9">C</text>
  <!-- properties -->
  <rect x="350" y="145" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="160" text-anchor="middle" fill="#4c1d95" font-size="9.5">🌡 Very high m.p.</text>
  <rect x="350" y="173" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="188" text-anchor="middle" fill="#4c1d95" font-size="9.5">⚡ Non-conductor*</text>
  <rect x="350" y="201" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="216" text-anchor="middle" fill="#4c1d95" font-size="9.5">💎 Very hard</text>
  <rect x="350" y="229" width="148" height="22" rx="4" fill="#ede9fe"/>
  <text x="424" y="244" text-anchor="middle" fill="#4c1d95" font-size="9.5">💧 Insoluble</text>
  <text x="424" y="285" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="424" y="300" text-anchor="middle" fill="#374151" font-size="9">Network of cov. bonds</text>
  <text x="424" y="313" text-anchor="middle" fill="#374151" font-size="9">E.g. Diamond, Graphite*, SiO₂</text>
  <text x="424" y="328" text-anchor="middle" fill="#374151" font-size="8.5">(*Graphite IS a conductor)</text>
  <text x="424" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. 1700–3600°C</text>

  <!-- Panel 4: Simple Molecular -->
  <rect x="515" y="5"   width="160" height="368" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
  <rect x="515" y="5"   width="160" height="36" rx="8" fill="#f43f5e"/>
  <text x="595" y="28"  text-anchor="middle" fill="white" font-weight="bold" font-size="12">🔵 SIMPLE MOLECULAR</text>
  <!-- discrete molecules with weak IMF -->
  <circle cx="563" cy="74"  r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <line x1="574" y1="74" x2="590" y2="74" stroke="#374151" stroke-width="2"/>
  <circle cx="601" cy="74"  r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <circle cx="557" cy="122" r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <line x1="568" y1="122" x2="584" y2="122" stroke="#374151" stroke-width="2"/>
  <circle cx="595" cy="122" r="11" fill="#fecdd3" stroke="#f43f5e" stroke-width="1.5"/>
  <!-- weak IMF -->
  <line x1="602" y1="82" x2="590" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="568" y1="82" x2="562" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="633" y="99" fill="#94a3b8" font-size="9">weak</text>
  <text x="633" y="112" fill="#94a3b8" font-size="9">IMF</text>
  <!-- properties -->
  <rect x="520" y="145" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="160" text-anchor="middle" fill="#9d174d" font-size="9.5">🌡 Low m.p./b.p.</text>
  <rect x="520" y="173" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="188" text-anchor="middle" fill="#9d174d" font-size="9.5">⚡ Non-conductor</text>
  <rect x="520" y="201" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="216" text-anchor="middle" fill="#9d174d" font-size="9.5">💧 Varies (like/like)</text>
  <rect x="520" y="229" width="150" height="22" rx="4" fill="#fce7f3"/>
  <text x="595" y="244" text-anchor="middle" fill="#9d174d" font-size="9.5">📏 Many are gases/liq.</text>
  <text x="595" y="285" text-anchor="middle" fill="#7c3aed" font-size="9">Bonding:</text>
  <text x="595" y="300" text-anchor="middle" fill="#374151" font-size="9">Strong cov. bonds within;</text>
  <text x="595" y="313" text-anchor="middle" fill="#374151" font-size="9">weak IMF between</text>
  <text x="595" y="326" text-anchor="middle" fill="#374151" font-size="9">E.g. Cl₂, HCl, H₂O, CO₂</text>
  <text x="595" y="360" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="10">m.p. often below 0°C</text>
</svg>`
      },
      terms: ['Ionic structure', 'Metallic structure', 'Giant covalent structure', 'Simple molecular structure']
    },
    {
      id: 'key-giant',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Giant vs Simple: Key Distinction',
        text: '<strong>Giant structures</strong> (ionic, metallic, giant covalent) have no discrete formula units — the formula (NaCl, Fe, SiO₂) is an <em>empirical/ratio formula</em> describing the repeating pattern throughout the entire lattice.<br/><br/><strong>Simple molecular structures</strong> have discrete molecules. The formula (CO₂, H₂O) represents one actual molecule with a fixed number of atoms.<br/><br/>A quick test: if the substance has a very high melting point AND doesn\'t conduct when liquid — it\'s likely giant covalent (e.g. SiO₂, diamond).'
      },
      terms: ['Giant structure', 'Simple molecular structure', 'Empirical formula']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Four structure types: Ionic (high m.p., conducts molten, brittle, polar-soluble); Metallic (variable m.p., always conducts, malleable); Giant Covalent (very high m.p., non-conductor except graphite, insoluble); Simple Molecular (low m.p., non-conductor, like-dissolves-like). Giant structures: empirical formulas. Simple molecular: discrete molecules.',
    cues: [
      { id: 'c1', blockId: 'svg-comparison', prompt: 'Compare ionic and giant covalent structures: melting points, electrical conductivity, and solubility.' },
      { id: 'c2', blockId: 'svg-comparison', prompt: 'Why does a metal always conduct electricity in both solid and liquid state, whereas an ionic compound only conducts when molten or dissolved?' },
      { id: 'c3', blockId: 'key-giant', prompt: 'Distinguish giant structures from simple molecular structures. Give an example of each and explain how to decide which type a substance is from its properties.' },
      { id: 'c4', blockId: 'svg-comparison', prompt: 'A solid X has a very high melting point, does not conduct electricity in any state, and is insoluble in water. Identify the likely structure type and give an example.' },
      { id: 'c5', blockId: 'svg-comparison', prompt: 'List the four structure types from highest to lowest melting point (typical). Justify the ordering.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

# ─────────────────────────── note_1_3_10 ────────────────────────────
NOTE_1_3_10 = '''/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 10
 * "Intermolecular forces"
 * Source: Pearson Edexcel IAL Chemistry — Section 3G
 */
export const note_chemistry_1_3_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe and explain three types of intermolecular force: London (dispersion) forces, permanent dipole-dipole interactions, and hydrogen bonds. State the conditions required for hydrogen bonding. Compare their relative strengths.' },
      terms: []
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'London (Dispersion) Forces', level: 2 },
      terms: []
    },
    {
      id: 'svg-london',
      type: 'svg',
      data: {
        caption: 'London forces arise from instantaneous and induced dipoles. Even non-polar molecules/noble gas atoms have a temporary uneven electron distribution → momentary δ+/δ− → induces a dipole in a neighbouring atom. These weak attractive forces exist in ALL substances.',
        svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- Step 1: Non-polar atom -->
  <rect x="5" y="10" width="200" height="178" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="105" y="28" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="12">Step 1: Neutral atom</text>
  <circle cx="105" cy="110" r="50" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <!-- uniform electron cloud shown as small circles -->
  <circle cx="80"  cy="100" r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="120" cy="90"  r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="115" cy="125" r="5" fill="#3b82f6" opacity="0.5"/>
  <circle cx="85"  cy="130" r="5" fill="#3b82f6" opacity="0.5"/>
  <text x="105" cy="114" text-anchor="middle" fill="#1e40af" font-size="9">nucleus</text>
  <text x="105" y="175" text-anchor="middle" fill="#374151" font-size="10">Electrons spread evenly</text>

  <!-- Step 2: Instantaneous dipole -->
  <rect x="218" y="10" width="200" height="178" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="318" y="28" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">Step 2: Instantaneous dipole</text>
  <circle cx="318" cy="110" r="50" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <!-- electron cloud shifted left (more e- on left) -->
  <circle cx="290" cy="100" r="7" fill="#f59e0b" opacity="0.7"/>
  <circle cx="285" cy="120" r="7" fill="#f59e0b" opacity="0.7"/>
  <circle cx="295" cy="90"  r="6" fill="#f59e0b" opacity="0.7"/>
  <!-- sparse on right -->
  <circle cx="345" cy="115" r="3" fill="#f59e0b" opacity="0.3"/>
  <text x="292" y="75"  text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold">δ−</text>
  <text x="350" y="108" text-anchor="middle" fill="#1d4ed8" font-size="11" font-weight="bold">δ+</text>
  <text x="318" y="175" text-anchor="middle" fill="#374151" font-size="10">Random fluctuation creates δ+/δ−</text>

  <!-- Step 3: Induced dipole in neighbour -->
  <rect x="432" y="10" width="242" height="178" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
  <text x="553" y="28" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="12">Step 3: Induced dipole attracts</text>
  <!-- first atom with shift -->
  <circle cx="490" cy="110" r="42" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="466" cy="100" r="6" fill="#f59e0b" opacity="0.7"/>
  <circle cx="462" cy="118" r="6" fill="#f59e0b" opacity="0.7"/>
  <text x="458" y="96"  fill="#dc2626" font-size="10" font-weight="bold">δ−</text>
  <text x="512" y="106" fill="#1d4ed8" font-size="10" font-weight="bold">δ+</text>
  <!-- attraction arrow -->
  <line x1="535" y1="110" x2="560" y2="110" stroke="#10b981" stroke-width="2.5"/>
  <polygon points="560,104 574,110 560,116" fill="#10b981"/>
  <!-- neighbour atom: e- attracted toward first atom -->
  <circle cx="605" cy="110" r="42" fill="#bbf7d0" stroke="#10b981" stroke-width="2"/>
  <circle cx="585" cy="108" r="6" fill="#10b981" opacity="0.7"/>
  <circle cx="583" cy="122" r="6" fill="#10b981" opacity="0.7"/>
  <text x="580" y="96"  fill="#dc2626" font-size="10" font-weight="bold">δ−</text>
  <text x="625" y="108" fill="#1d4ed8" font-size="10" font-weight="bold">δ+</text>
  <text x="553" y="168" text-anchor="middle" fill="#065f46" font-size="10">δ+ of atom A attracts e⁻ in atom B → induced dipole → attraction</text>
</svg>`
      },
      terms: ['London dispersion force', 'Instantaneous dipole', 'Induced dipole']
    },
    {
      id: 'key-london',
      type: 'callout',
      data: {
        style: 'key',
        title: 'London Force Strength Depends On…',
        text: '<strong>Number of electrons (polarisability):</strong> More electrons → larger, more diffuse cloud → larger temporary dipoles → stronger London forces.<br/><br/>Examples: F₂ (18e⁻) → weak; Cl₂ (34e⁻) → stronger; Br₂ (70e⁻) → stronger still; I₂ (106e⁻) → strongest. Explains solid I₂ but gas F₂ at room temperature.<br/><br/>London forces act between <strong>all</strong> molecules — even those with other types of IMF.'
      },
      terms: ['London dispersion force', 'Polarisability']
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Hydrogen Bonding', level: 2 },
      terms: []
    },
    {
      id: 'svg-hbond',
      type: 'svg',
      data: {
        caption: 'Hydrogen bonding: a particularly strong dipole-dipole force between an H atom bonded to N, O or F (δ+) and a lone pair on another N, O or F atom. Water: each molecule can form up to 4 H-bonds (2 as donor, 2 as acceptor).',
        svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- H₂O dimer panel -->
  <rect x="5" y="5" width="310" height="210" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="160" y="23" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">H₂O — Hydrogen Bonding</text>

  <!-- Molecule 1 (top-left) -->
  <circle cx="80" cy="90"  r="22" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="80" y="94" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="bold">O</text>
  <!-- lone pairs -->
  <text x="60" y="77" fill="#374151" font-size="14">:</text>
  <text x="88" y="66" fill="#374151" font-size="14">:</text>
  <!-- H atoms -->
  <line x1="62" y1="100" x2="44" y2="122" stroke="#475569" stroke-width="2.5"/>
  <circle cx="38" cy="130" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="38" y="134" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="52" y="108" fill="#1e40af" font-size="9">δ+</text>
  <line x1="98" y1="100" x2="116" y2="122" stroke="#475569" stroke-width="2.5"/>
  <circle cx="122" cy="130" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="122" y="134" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="120" y="108" fill="#1e40af" font-size="9">δ+</text>
  <text x="68" y="80" fill="#dc2626" font-size="9">δ−</text>

  <!-- H-bond (dashed) between H of mol1 and O of mol2 -->
  <line x1="122" y1="118" x2="185" y2="100" stroke="#f97316" stroke-width="2.5" stroke-dasharray="6,4"/>
  <!-- label -->
  <text x="155" y="104" fill="#c2410c" font-size="9" font-weight="bold">H-bond</text>

  <!-- Molecule 2 (right) -->
  <circle cx="210" cy="80"  r="22" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
  <text x="210" y="84" text-anchor="middle" fill="#991b1b" font-size="12" font-weight="bold">O</text>
  <text x="190" y="67" fill="#374151" font-size="14">:</text>
  <text x="218" y="58" fill="#374151" font-size="14">:</text>
  <line x1="192" y1="90" x2="174" y2="112" stroke="#475569" stroke-width="2.5"/>
  <circle cx="168" cy="120" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="168" y="124" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <line x1="228" y1="90" x2="246" y2="112" stroke="#475569" stroke-width="2.5"/>
  <circle cx="252" cy="120" r="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="252" y="124" text-anchor="middle" fill="#1e40af" font-size="10">H</text>
  <text x="208" y="66" fill="#dc2626" font-size="9">δ−</text>

  <!-- Lone pair labels -->
  <text x="60" y="185" fill="#374151" font-size="10">Lone pair on O acts as</text>
  <text x="60" y="199" fill="#374151" font-size="10">H-bond acceptor (attracts δ+H)</text>

  <!-- Conditions panel -->
  <rect x="328" y="5" width="345" height="210" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="500" y="24" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="13">Conditions for H-bonding</text>

  <rect x="338" y="35" width="325" height="50" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="52" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">DONOR molecule must have:</text>
  <text x="500" y="70" text-anchor="middle" fill="#374151" font-size="10">H directly bonded to N, O or F (small, very electronegative)</text>

  <rect x="338" y="95" width="325" height="50" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1"/>
  <text x="500" y="112" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="11">ACCEPTOR molecule must have:</text>
  <text x="500" y="130" text-anchor="middle" fill="#374151" font-size="10">Lone pair on N, O or F to accept the δ+ H</text>

  <rect x="338" y="155" width="325" height="50" rx="6" fill="#fee2e2" stroke="#f87171" stroke-width="1"/>
  <text x="500" y="172" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">Strength comparison (approximate):</text>
  <text x="500" y="190" text-anchor="middle" fill="#374151" font-size="10">London forces &lt; dipole-dipole &lt; H-bonds &lt; ionic / cov. bonds</text>
  <text x="500" y="205" text-anchor="middle" fill="#374151" font-size="9">(~1–5 kJ mol⁻¹) (&lt;10 kJ mol⁻¹)  (~10–40 kJ mol⁻¹) (~200–900 kJ mol⁻¹)</text>
</svg>`
      },
      terms: ['Hydrogen bond', 'H-bond donor', 'H-bond acceptor', 'Dipole-dipole force']
    },
    {
      id: 'tip-hbond-anomalies',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Anomalous Properties Caused by H-bonding',
        text: 'Water\'s H-bonding explains its unusually high m.p./b.p. compared with H₂S, H₂Se, H₂Te: those lack H-bond donors because S/Se/Te are not electronegative enough.<br/><br/>Ice is LESS DENSE than liquid water because H-bonds force an open hexagonal lattice in ice, with larger average spacing between molecules than in liquid water.<br/><br/>HF has a similarly high b.p. compared with HCl due to H-bonding (even though HF can only donate one H-bond per molecule vs two in H₂O).'
      },
      terms: ['Hydrogen bond', 'Anomalous boiling point', 'Ice density']
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'Three IMF types: (1) London forces — instantaneous/induced dipoles, present in ALL substances, increase with electron count; (2) Permanent dipole-dipole — between polar molecules; (3) Hydrogen bonds — requires H directly on N/O/F, lone pair on N/O/F, strongest IMF (~10-40 kJ/mol). H-bonding explains water\'s high b.p. and ice density anomaly.',
    cues: [
      { id: 'c1', blockId: 'svg-london', prompt: 'Explain the origin of London dispersion forces. Why do larger molecules (e.g. I₂ vs F₂) have stronger London forces?' },
      { id: 'c2', blockId: 'key-london', prompt: 'List the boiling points trend F₂ < Cl₂ < Br₂ < I₂ and explain it using London force strength.' },
      { id: 'c3', blockId: 'svg-hbond', prompt: 'State the two conditions that must be met for a hydrogen bond to form. Identify donor and acceptor in an H₂O dimer.' },
      { id: 'c4', blockId: 'tip-hbond-anomalies', prompt: 'Why is the boiling point of H₂O much higher than H₂S? Why is ice less dense than liquid water?' },
      { id: 'c5', blockId: 'svg-hbond', prompt: 'Rank these interactions from weakest to strongest: covalent bonds, London forces, hydrogen bonds, ionic bonds. Give typical energy ranges.' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};
'''

files = {
    'note_1_3_8.js':  NOTE_1_3_8,
    'note_1_3_9.js':  NOTE_1_3_9,
    'note_1_3_10.js': NOTE_1_3_10,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {filename} ({len(content.splitlines())} lines)')

print('Batch 4 complete.')
