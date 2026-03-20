#!/usr/bin/env python3
"""Topic 4 · Batch 3: notes 6, 7, 8"""
import os
BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/chemistry'
def w(fname, txt):
    with open(os.path.join(BASE, fname), 'w') as f: f.write(txt)
    print(f'Written: {fname} ({txt.count(chr(10))} lines)')

# ═══ note_1_4_6: Properties of alkanes ══════════════════════════════════════
w('note_1_4_6.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 6
 * "Properties of alkanes"
 */
export const note_chemistry_1_4_6 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Know and explain the physical properties of alkanes (state at room temperature, boiling points, solubility) in terms of intermolecular forces. Understand why alkanes are generally unreactive.' } },
    { id: 'h-structure', type: 'heading', data: { text: 'Structure and Bonding in Alkanes', level: 2 } },
    { id: 'svg-props', type: 'svg', data: {
      caption: 'Physical properties of the first six alkanes — boiling point rises with chain length',
      svg: `<svg viewBox="0 0 580 205" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="57" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Alkane</text><text x="157" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Formula</text><text x="233" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Mᵣ</text><text x="327" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Boiling point</text><text x="485" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">State at 25 °C</text><line x1="114" y1="0" x2="114" y2="205" stroke="#475569" stroke-width="1"/><line x1="200" y1="0" x2="200" y2="205" stroke="#475569" stroke-width="1"/><line x1="265" y1="0" x2="265" y2="205" stroke="#475569" stroke-width="1"/><line x1="390" y1="0" x2="390" y2="205" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="28" fill="#f0f9ff"/><text x="8" y="53" fill="#374151" font-size="11">Methane</text><text x="120" y="53" fill="#374151" font-size="11">CH₄</text><text x="210" y="53" fill="#374151" font-size="11">16</text><text x="270" y="53" fill="#2563eb" font-size="11">−162 °C</text><text x="398" y="53" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="62" width="580" height="28" fill="white"/><text x="8" y="81" fill="#374151" font-size="11">Ethane</text><text x="120" y="81" fill="#374151" font-size="11">C₂H₆</text><text x="210" y="81" fill="#374151" font-size="11">30</text><text x="270" y="81" fill="#2563eb" font-size="11">−89 °C</text><text x="398" y="81" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="90" width="580" height="28" fill="#f0f9ff"/><text x="8" y="109" fill="#374151" font-size="11">Propane</text><text x="120" y="109" fill="#374151" font-size="11">C₃H₈</text><text x="210" y="109" fill="#374151" font-size="11">44</text><text x="270" y="109" fill="#2563eb" font-size="11">−42 °C</text><text x="398" y="109" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="118" width="580" height="28" fill="white"/><text x="8" y="137" fill="#374151" font-size="11">Butane</text><text x="120" y="137" fill="#374151" font-size="11">C₄H₁₀</text><text x="210" y="137" fill="#374151" font-size="11">58</text><text x="270" y="137" fill="#2563eb" font-size="11">−1 °C</text><text x="398" y="137" fill="#2563eb" font-size="11">Gas</text><rect x="0" y="146" width="580" height="28" fill="#f0fdf4"/><text x="8" y="165" fill="#374151" font-size="11">Pentane</text><text x="120" y="165" fill="#374151" font-size="11">C₅H₁₂</text><text x="210" y="165" fill="#374151" font-size="11">72</text><text x="270" y="165" fill="#15803d" font-size="11">+36 °C</text><text x="398" y="165" fill="#15803d" font-weight="bold" font-size="11">Liquid</text><rect x="0" y="174" width="580" height="28" fill="white"/><text x="8" y="193" fill="#374151" font-size="11">Hexane</text><text x="120" y="193" fill="#374151" font-size="11">C₆H₁₄</text><text x="210" y="193" fill="#374151" font-size="11">86</text><text x="270" y="193" fill="#15803d" font-size="11">+69 °C</text><text x="398" y="193" fill="#15803d" font-weight="bold" font-size="11">Liquid</text><rect x="0" y="0" width="580" height="205" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-bp-trend', type: 'callout', data: {
      style: 'key', title: 'Why do boiling points increase with chain length?',
      text: 'Longer alkane chains have more electrons &#x2192; larger, more polarisable electron clouds &#x2192; stronger <strong>London dispersion forces</strong> between adjacent molecules. More energy is needed to overcome these forces, so the boiling point rises.'
    }},
    { id: 'callout-branching', type: 'callout', data: {
      style: 'key', title: 'Effect of branching on boiling point',
      text: 'Branched alkanes have a more <strong>compact/spherical shape</strong>, which reduces the surface area of contact between molecules. Fewer London forces act between them &#x2192; <strong>lower boiling point</strong> than the straight-chain isomer.<br/><br/>Example: pentane (bp 36&#xB0;C) &gt; 2-methylbutane (bp 28&#xB0;C) &gt; 2,2-dimethylpropane (bp 10&#xB0;C)'
    }},
    { id: 'h-sol-react', type: 'heading', data: { text: 'Solubility and Reactivity', level: 2 } },
    { id: 'svg-sol-react', type: 'svg', data: {
      caption: 'Alkane solubility and reactivity — reasons and key exceptions',
      svg: `<svg viewBox="0 0 580 155" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="2" y="2" width="276" height="151" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><rect x="302" y="2" width="276" height="151" rx="8" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><text x="140" y="22" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">Insoluble in Water</text><text x="440" y="22" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">Low Chemical Reactivity</text><text x="10" y="45" fill="#374151" font-size="11">Alkanes are <tspan font-weight="bold">non-polar</tspan>.</text><text x="10" y="62" fill="#374151" font-size="10">They cannot form hydrogen bonds with</text><text x="10" y="76" fill="#374151" font-size="10">water molecules or break its H-bond network.</text><text x="10" y="96" fill="#374151" font-size="10">&#x2022; Soluble in non-polar solvents (like dissolves</text><text x="10" y="110" fill="#374151" font-size="10"> like): e.g. hexane dissolves in CCl₄.</text><text x="10" y="128" fill="#374151" font-size="10">&#x2022; Short-chain alkanes are <tspan font-weight="bold">volatile</tspan>: low bp,</text><text x="10" y="142" fill="#374151" font-size="10"> evaporate easily at room temperature.</text><text x="310" y="45" fill="#374151" font-size="11">C&#x2013;C and C&#x2013;H bonds are <tspan font-weight="bold">non-polar</tspan>:</text><text x="310" y="62" fill="#374151" font-size="10">No &#x03B4;&#x207A;/&#x03B4;&#x207B; centres &#x2192; polar reagents and ions</text><text x="310" y="76" fill="#374151" font-size="10">do not attack alkane molecules.</text><text x="310" y="96" fill="#374151" font-size="10">C&#x2013;C and C&#x2013;H bonds are also <tspan font-weight="bold">strong</tspan>:</text><text x="310" y="110" fill="#374151" font-size="10">C&#x2013;H: 413 kJ mol&#x207B;&#xB9;; C&#x2013;C: 348 kJ mol&#x207B;&#xB9;</text><text x="310" y="128" fill="#374151" font-size="10">Exceptions: combust with O&#x2082;; react with</text><text x="310" y="142" fill="#374151" font-size="10">halogens under UV (free radical subst.)</text></svg>`
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'svg-props', prompt: 'Which alkanes are gases at room temperature? At what chain length do they become liquids?' },
      { id: 'c2', blockId: 'callout-bp-trend', prompt: 'Explain why butane has a higher boiling point than ethane.' },
      { id: 'c3', blockId: 'callout-branching', prompt: 'Explain why 2,2-dimethylpropane has a lower boiling point than pentane (both C₅H₁₂).' },
      { id: 'c4', blockId: 'svg-sol-react', prompt: 'Why are alkanes insoluble in water and generally unreactive with polar reagents?' }
    ],
    summaryText: 'Alkanes: CₙH₂ₙ₊₂, only C–H and C–C bonds, non-polar. IMFs = London forces only. bp increases with chain length (more e⁻ → stronger LF). Branching → lower bp (less surface area). Insoluble in water (non-polar, no H-bonds). Unreactive (non-polar, strong bonds). React with O₂ (combustion) and halogens/UV (FRS).',
    ready: false
  },
  evidence: [], mentions: []
};
""")

# ═══ note_1_4_7: Alkane and cycloalkane formulae ════════════════════════════
w('note_1_4_7.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 7
 * "Alkanes and cycloalkanes"
 */
export const note_chemistry_1_4_7 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Understand the formulae and structures of alkanes and cycloalkanes. Relate their physical properties and reactivity to their bonding and structure.' } },
    { id: 'h-alkanes', type: 'heading', data: { text: 'Alkanes', level: 2 } },
    { id: 'callout-alkane-formula', type: 'callout', data: {
      style: 'key', title: 'General Formula for Alkanes',
      text: 'Straight-chain and branched alkanes fit the general formula <strong>C<sub>n</sub>H<sub>2n+2</sub></strong>.'
    }},
    { id: 'h-cycloalkanes', type: 'heading', data: { text: 'Cycloalkanes', level: 2 } },
    { id: 'callout-cyclo-formula', type: 'callout', data: {
      style: 'key', title: 'General Formula and Shape of Cycloalkanes',
      text: 'The general formula for a cycloalkane is <strong>C<sub>n</sub>H<sub>2n</sub></strong>.<br/><br/>Cycloalkanes (from cyclopentane upwards) are not flat; they exist as &#x201C;puckered&#x201D; rings. For example, cyclohexane rapidly flips between &#x201C;chair&#x201D; and &#x201C;boat&#x201D; conformations to minimise strain.'
    }},
    { id: 'h-comparison', type: 'heading', data: { text: 'Alkanes vs Cycloalkanes — Comparison', level: 2 } },
    { id: 'svg-compare', type: 'svg', data: {
      caption: 'Alkane vs cycloalkane — formulae, examples and key structural difference',
      svg: `<svg viewBox="0 0 580 195" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="2" y="2" width="276" height="191" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><rect x="302" y="2" width="276" height="191" rx="8" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1.5"/><text x="140" y="22" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">ALKANES</text><text x="440" y="22" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">CYCLOALKANES</text><text x="140" y="41" text-anchor="middle" fill="#1d4ed8" font-size="12">General formula: CₙH₂ₙ₊₂</text><text x="440" y="41" text-anchor="middle" fill="#15803d" font-size="12">General formula: CₙH₂ₙ</text><text x="10" y="62" fill="#374151" font-size="10">Open chain (no ring)</text><text x="310" y="62" fill="#374151" font-size="10">Closed ring structure (ring of C atoms)</text><text x="10" y="80" fill="#374151" font-size="10">Only C–C and C–H single bonds</text><text x="310" y="80" fill="#374151" font-size="10">Only C–C and C–H single bonds</text><text x="10" y="98" fill="#374151" font-size="10">Saturated, non-polar</text><text x="310" y="98" fill="#374151" font-size="10">Saturated, non-polar</text><text x="140" y="117" text-anchor="middle" font-weight="bold" fill="#374151" font-size="11">Examples</text><text x="440" y="117" text-anchor="middle" font-weight="bold" fill="#374151" font-size="11">Examples</text><text x="10" y="134" fill="#374151" font-size="10">Methane CH₄ · Ethane C₂H₆</text><text x="310" y="134" fill="#374151" font-size="10">Cyclopropane C₃H₆ (3-membered ring)</text><text x="10" y="150" fill="#374151" font-size="10">Propane C₃H₈ · Butane C₄H₁₀</text><text x="310" y="150" fill="#374151" font-size="10">Cyclobutane C₄H₈ (4-membered ring)</text><text x="10" y="166" fill="#374151" font-size="10">Pentane C₅H₁₂ · Hexane C₆H₁₄</text><text x="310" y="166" fill="#374151" font-size="10">Cyclopentane C₅H₁₀ · Cyclohexane C₆H₁₂</text><text x="10" y="185" fill="#64748b" font-size="9">Gases (C₁–C₄) → liquids at higher n</text><text x="310" y="185" fill="#64748b" font-size="9">BP ~10–20 K higher than equivalent alkane</text></svg>`
    }},
    { id: 'h-boiling', type: 'heading', data: { text: 'Factors Affecting Boiling Points', level: 2 } },
    { id: 'svg-bp-factors', type: 'svg', data: {
      caption: 'How chain length, branching, and ring structure affect boiling points',
      svg: `<svg viewBox="0 0 580 165" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="105" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Factor</text><text x="270" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Effect on BP</text><text x="440" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Explanation</text><line x1="210" y1="0" x2="210" y2="165" stroke="#475569" stroke-width="1"/><line x1="330" y1="0" x2="330" y2="165" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="43" fill="#dbeafe"/><text x="10" y="54" font-weight="bold" fill="#1d4ed8" font-size="11">Chain length ↑</text><text x="10" y="70" fill="#374151" font-size="10">(more C atoms)</text><text x="218" y="58" fill="#15803d" font-weight="bold" font-size="12">Increases ↑</text><text x="338" y="50" fill="#374151" font-size="10">More electrons →</text><text x="338" y="64" fill="#374151" font-size="10">stronger London forces</text><text x="338" y="73" fill="#374151" font-size="9">need more energy to separate</text><rect x="0" y="77" width="580" height="43" fill="#fef9c3"/><text x="10" y="97" font-weight="bold" fill="#92400e" font-size="11">Branching ↑</text><text x="10" y="113" fill="#374151" font-size="10">(more branches)</text><text x="218" y="101" fill="#dc2626" font-weight="bold" font-size="12">Decreases ↓</text><text x="338" y="93" fill="#374151" font-size="10">Compact shape →</text><text x="338" y="107" fill="#374151" font-size="10">less surface area contact</text><text x="338" y="116" fill="#374151" font-size="9">→ weaker London forces</text><rect x="0" y="120" width="580" height="43" fill="#d1fae5"/><text x="10" y="140" font-weight="bold" fill="#15803d" font-size="11">Cyclic ring</text><text x="10" y="156" fill="#374151" font-size="10">(cycloalkane)</text><text x="218" y="144" fill="#15803d" font-weight="bold" font-size="11">~10–20 K higher</text><text x="218" y="158" fill="#15803d" font-size="10">than open chain isomer</text><text x="338" y="136" fill="#374151" font-size="10">Rigid ring packs more</text><text x="338" y="150" fill="#374151" font-size="10">closely → more LF contact</text><rect x="0" y="0" width="580" height="165" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'h-reactivity', type: 'heading', data: { text: 'Chemical Reactivity', level: 2 } },
    { id: 'svg-reactivity', type: 'svg', data: {
      caption: 'Why alkanes are unreactive — and the exception of cyclopropane',
      svg: `<svg viewBox="0 0 580 145" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="2" y="2" width="354" height="141" rx="8" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><rect x="368" y="2" width="210" height="141" rx="8" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5"/><text x="179" y="21" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="12">Why Alkanes Are Unreactive</text><text x="473" y="21" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="12">Exception: Cyclopropane</text><text x="10" y="42" fill="#374151" font-size="10">&#x2022; C&#x2013;H and C&#x2013;C bonds are <tspan font-weight="bold">non-polar</tspan>: similar</text><text x="10" y="56" fill="#374151" font-size="10"> electronegativities &#x2192; no &#x03B4;&#x207A;/&#x03B4;&#x207B; centres.</text><text x="10" y="74" fill="#374151" font-size="10">&#x2022; Bonds are <tspan font-weight="bold">strong</tspan>: C&#x2013;H = 413 kJ mol&#x207B;&#xB9;;</text><text x="10" y="88" fill="#374151" font-size="10"> C&#x2013;C = 348 kJ mol&#x207B;&#xB9; &#x2192; hard to break.</text><text x="10" y="106" fill="#374151" font-size="10">&#x2022; Main reactions: <tspan font-weight="bold">combustion</tspan> (+ O&#x2082;),</text><text x="10" y="120" fill="#374151" font-size="10"> <tspan font-weight="bold">free radical subst.</tspan> (+ halogen/UV),</text><text x="10" y="134" fill="#374151" font-size="10"> <tspan font-weight="bold">cracking</tspan> (high temp/catalyst).</text><text x="376" y="42" fill="#374151" font-size="10">C&#x2013;C&#x2013;C angle forced to 60°</text><text x="376" y="56" fill="#374151" font-size="10">(normal = 109.5° for sp&#xB3;)</text><text x="376" y="74" fill="#dc2626" font-size="10">&#x2192; ring strain: bonds</text><text x="376" y="88" fill="#dc2626" font-size="10">weaker &amp; easier to break</text><text x="376" y="106" fill="#374151" font-size="10">&#x2192; ring opens readily</text><text x="376" y="122" fill="#374151" font-size="10">&#x2192; MORE reactive than</text><text x="376" y="136" fill="#374151" font-size="10">other alkanes</text></svg>`
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-cyclo-formula', prompt: 'State the general formulae for alkanes and cycloalkanes. Why do cycloalkanes have two fewer H atoms than the corresponding alkane?' },
      { id: 'c2', blockId: 'svg-bp-factors', prompt: 'Explain why branched alkanes typically have lower boiling points than their straight-chain isomers.' },
      { id: 'c3', blockId: 'svg-bp-factors', prompt: 'Why do cycloalkanes generally have higher boiling points than the corresponding straight-chain alkane?' },
      { id: 'c4', blockId: 'svg-reactivity', prompt: 'Explain why cyclopropane is much more reactive than larger cycloalkanes or straight-chain alkanes.' }
    ],
    summaryText: 'Alkanes (CₙH₂ₙ₊₂) and cycloalkanes (CₙH₂ₙ) are saturated, non-polar hydrocarbons. BP increases with chain length (stronger London forces), decreases with branching (less surface contact). Cycloalkanes: ~10–20 K higher BP than open-chain isomers (better packing). Alkanes unreactive (non-polar, strong C–H/C–C bonds). Cyclopropane reactive (60° ring strain weakens bonds).',
    ready: false
  },
  evidence: [], mentions: []
};
""")

# ═══ note_1_4_8: Structural isomerism (Part 2) ══════════════════════════════
w('note_1_4_8.js', r"""/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 8
 * "Structural isomerism — types and systematic drawing"
 */
export const note_chemistry_1_4_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Define structural isomerism; draw and name all structural isomers for a given molecular formula up to C₆.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'What is Structural Isomerism?', level: 2 } },
    { id: 'callout-key-iso', type: 'callout', data: {
      style: 'key', title: 'Structural Isomers — Definition',
      text: 'Structural isomers (also called constitutional isomers) are compounds that have the same molecular formula but different structural formulae &#x2014; i.e. the atoms are connected in a different order or arrangement.'
    }},
    { id: 'h-types', type: 'heading', data: { text: 'Types of Structural Isomerism', level: 2 } },
    { id: 'svg-types', type: 'svg', data: {
      caption: 'Three types of structural isomerism — how they differ and example pairs',
      svg: `<svg viewBox="0 0 580 165" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="90" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Type</text><text x="275" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">What changes</text><text x="455" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Example</text><line x1="180" y1="0" x2="180" y2="165" stroke="#475569" stroke-width="1"/><line x1="370" y1="0" x2="370" y2="165" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="43" fill="#dbeafe"/><text x="8" y="53" font-weight="bold" fill="#1d4ed8" font-size="12">Chain isomerism</text><text x="188" y="48" fill="#374151" font-size="10">Arrangement of carbon skeleton:</text><text x="188" y="62" fill="#374151" font-size="10">straight chain vs branched chain</text><text x="378" y="48" fill="#374151" font-size="10">C₄H₁₀: butane vs</text><text x="378" y="62" fill="#374151" font-size="10">2-methylpropane</text><rect x="0" y="77" width="580" height="43" fill="#fef9c3"/><text x="8" y="96" font-weight="bold" fill="#92400e" font-size="12">Position isomerism</text><text x="188" y="91" fill="#374151" font-size="10">Same skeleton and functional group,</text><text x="188" y="105" fill="#374151" font-size="10">but group on a different carbon</text><text x="378" y="91" fill="#374151" font-size="10">C₄H₉Br: 1-bromobutane</text><text x="378" y="105" fill="#374151" font-size="10">vs 2-bromobutane</text><rect x="0" y="120" width="580" height="43" fill="#d1fae5"/><text x="8" y="137" font-weight="bold" fill="#15803d" font-size="11">Functional group</text><text x="8" y="150" font-weight="bold" fill="#15803d" font-size="11">isomerism</text><text x="188" y="134" fill="#374151" font-size="10">Same molecular formula but</text><text x="188" y="148" fill="#374151" font-size="10">different functional groups</text><text x="378" y="134" fill="#374151" font-size="10">C₂H₆O: ethanol (alcohol)</text><text x="378" y="148" fill="#374151" font-size="10">vs methoxymethane (ether)</text><rect x="0" y="0" width="580" height="165" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'h-chain', type: 'heading', data: { text: 'Chain Isomerism — Worked Examples', level: 2 } },
    { id: 'callout-we1', type: 'callout', data: {
      style: 'worked', title: 'C₄H₁₀ — Chain Isomers',
      text: 'Molecular formula: C&#x2084;H&#x2081;&#x2080; (butane &#x2014; general formula C&#x2099;H&#x2082;&#x2099;&#x208A;&#x2082;, n=4)<br/><br/>Isomer 1: Butane<br/>CH&#x2083;&#x2013;CH&#x2082;&#x2013;CH&#x2082;&#x2013;CH&#x2083; (straight chain, 4 carbons) &#x2014; b.p. = &#x2212;1 &#xB0;C<br/><br/>Isomer 2: 2-Methylpropane<br/>(CH&#x2083;)&#x2083;CH &#x2014; branched, longest chain = 3C with a methyl branch on C2 &#x2014; b.p. = &#x2212;12 &#xB0;C<br/><br/>Note: 2-methylpropane has a lower boiling point because its more compact shape gives a smaller surface area &#x2192; weaker London forces.'
    }},
    { id: 'callout-we2', type: 'callout', data: {
      style: 'worked', title: 'C₅H₁₂ — Chain Isomers (3 isomers)',
      text: 'Molecular formula: C&#x2085;H&#x2081;&#x2082;<br/><br/>Isomer 1: Pentane &#x2014; CH&#x2083;CH&#x2082;CH&#x2082;CH&#x2082;CH&#x2083; (b.p. +36 &#xB0;C)<br/><br/>Isomer 2: 2-Methylbutane &#x2014; CH&#x2083;CH(CH&#x2083;)CH&#x2082;CH&#x2083; (b.p. +28 &#xB0;C)<br/><br/>Isomer 3: 2,2-Dimethylpropane &#x2014; C(CH&#x2083;)&#x2084; (b.p. +10 &#xB0;C)<br/><br/>Highly branched &#x2192; most compact &#x2192; lowest boiling point.'
    }},
    { id: 'h-position', type: 'heading', data: { text: 'Position Isomerism — Worked Examples', level: 2 } },
    { id: 'callout-we3', type: 'callout', data: {
      style: 'worked', title: 'C₄H₉Br — Position Isomers',
      text: 'Molecular formula: C&#x2084;H&#x2089;Br (bromobutane)<br/><br/>1-Bromobutane: Br on C1 &#x2014; CH&#x2082;Br&#x2013;CH&#x2082;&#x2013;CH&#x2082;&#x2013;CH&#x2083;<br/>2-Bromobutane: Br on C2 &#x2014; CH&#x2083;&#x2013;CHBr&#x2013;CH&#x2082;&#x2013;CH&#x2083;<br/><br/>Both have the same skeleton (butane) and same functional group (&#x2013;Br), but Br is in a different position &#x2192; position isomers.'
    }},
    { id: 'h-functional', type: 'heading', data: { text: 'Functional Group Isomerism — Worked Examples', level: 2 } },
    { id: 'callout-we4', type: 'callout', data: {
      style: 'worked', title: 'C₃H₆O — Functional Group Isomers',
      text: 'Molecular formula: C&#x2083;H&#x2086;O<br/><br/>Isomer 1: Propanal (aldehyde) &#x2014; CH&#x2083;CH&#x2082;CHO<br/>Isomer 2: Propan-2-one / acetone (ketone) &#x2014; CH&#x2083;COCH&#x2083;<br/>Isomer 3: Allyl alcohol (unsaturated alcohol) &#x2014; CH&#x2082;=CHCH&#x2082;OH<br/><br/>All have C&#x2083;H&#x2086;O but completely different functional groups and very different chemistry.'
    }},
    { id: 'h-counting', type: 'heading', data: { text: 'Systematic Approach to Drawing Isomers', level: 2 } },
    { id: 'svg-systematic', type: 'svg', data: {
      caption: 'Six-step systematic method for drawing all structural isomers',
      svg: `<svg viewBox="0 0 580 205" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><text x="290" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b" font-size="13">Systematic Approach to Drawing Structural Isomers</text><rect x="2" y="24" width="276" height="54" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><rect x="302" y="24" width="276" height="54" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><rect x="2" y="88" width="276" height="54" rx="6" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1.5"/><rect x="302" y="88" width="276" height="54" rx="6" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1.5"/><rect x="2" y="152" width="276" height="50" rx="6" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><rect x="302" y="152" width="276" height="50" rx="6" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/><circle cx="18" cy="40" r="12" fill="#1d4ed8"/><text x="18" y="45" text-anchor="middle" fill="white" font-weight="bold" font-size="12">1</text><text x="36" y="38" font-weight="bold" fill="#1e293b" font-size="11">Draw the longest chain first</text><text x="36" y="53" fill="#374151" font-size="10">Write the straight-chain structure</text><text x="36" y="67" fill="#374151" font-size="10">(all carbons in a row)</text><circle cx="318" cy="40" r="12" fill="#1d4ed8"/><text x="318" y="45" text-anchor="middle" fill="white" font-weight="bold" font-size="12">2</text><text x="336" y="38" font-weight="bold" fill="#1e293b" font-size="11">Shorten chain; add branches</text><text x="336" y="53" fill="#374151" font-size="10">Remove one C from chain; place it as</text><text x="336" y="67" fill="#374151" font-size="10">methyl/ethyl branch in every possible position</text><circle cx="18" cy="104" r="12" fill="#15803d"/><text x="18" y="109" text-anchor="middle" fill="white" font-weight="bold" font-size="12">3</text><text x="36" y="102" font-weight="bold" fill="#1e293b" font-size="11">Continue shortening</text><text x="36" y="117" fill="#374151" font-size="10">Keep reducing chain length and adding</text><text x="36" y="131" fill="#374151" font-size="10">branches until no new structures possible</text><circle cx="318" cy="104" r="12" fill="#15803d"/><text x="318" y="109" text-anchor="middle" fill="white" font-weight="bold" font-size="12">4</text><text x="336" y="102" font-weight="bold" fill="#1e293b" font-size="11">Check position isomers</text><text x="336" y="117" fill="#374151" font-size="10">Move functional group to each carbon</text><text x="336" y="131" fill="#374151" font-size="10">position in turn (C1, C2, C3…)</text><circle cx="18" cy="168" r="12" fill="#92400e"/><text x="18" y="173" text-anchor="middle" fill="white" font-weight="bold" font-size="12">5</text><text x="36" y="164" font-weight="bold" fill="#1e293b" font-size="11">Functional group isomers</text><text x="36" y="179" fill="#374151" font-size="10">What other functional groups have</text><text x="36" y="193" fill="#374151" font-size="10">this molecular formula?</text><circle cx="318" cy="168" r="12" fill="#92400e"/><text x="318" y="173" text-anchor="middle" fill="white" font-weight="bold" font-size="12">6</text><text x="336" y="164" font-weight="bold" fill="#1e293b" font-size="11">Verify each is unique</text><text x="336" y="179" fill="#374151" font-size="10">Rotate/reflect structures — mirror</text><text x="336" y="193" fill="#374151" font-size="10">images of same structure are NOT isomers</text></svg>`
    }},
    { id: 'h-c6', type: 'heading', data: { text: 'C₆H₁₄ — All 5 Chain Isomers', level: 2 } },
    { id: 'svg-c6', type: 'svg', data: {
      caption: 'All five structural (chain) isomers of C₆H₁₄ with boiling points',
      svg: `<svg viewBox="0 0 580 210" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="120" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">IUPAC Name</text><text x="330" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">Structural Formula</text><text x="495" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="11">BP / &#xB0;C</text><line x1="230" y1="0" x2="230" y2="210" stroke="#475569" stroke-width="1"/><line x1="430" y1="0" x2="430" y2="210" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="34" fill="#f0f9ff"/><text x="8" y="56" fill="#374151" font-size="11">Hexane</text><text x="238" y="56" fill="#374151" font-size="11" font-family="monospace">CH₃(CH₂)₄CH₃</text><text x="438" y="56" fill="#374151" font-size="11">+69</text><rect x="0" y="68" width="580" height="34" fill="white"/><text x="8" y="90" fill="#374151" font-size="11">2-Methylpentane</text><text x="238" y="90" fill="#374151" font-size="11" font-family="monospace">CH₃CH(CH₃)(CH₂)₂CH₃</text><text x="438" y="90" fill="#374151" font-size="11">+60</text><rect x="0" y="102" width="580" height="34" fill="#f0f9ff"/><text x="8" y="124" fill="#374151" font-size="11">3-Methylpentane</text><text x="238" y="124" fill="#374151" font-size="11" font-family="monospace">CH₃CH₂CH(CH₃)CH₂CH₃</text><text x="438" y="124" fill="#374151" font-size="11">+63</text><rect x="0" y="136" width="580" height="34" fill="white"/><text x="8" y="158" fill="#374151" font-size="11">2,2-Dimethylbutane</text><text x="238" y="158" fill="#374151" font-size="11" font-family="monospace">(CH₃)₃CCH₂CH₃</text><text x="438" y="158" fill="#374151" font-size="11">+50</text><rect x="0" y="170" width="580" height="37" fill="#fef9c3"/><text x="8" y="191" fill="#374151" font-size="11">2,3-Dimethylbutane</text><text x="238" y="191" fill="#374151" font-size="11" font-family="monospace">CH₃CH(CH₃)CH(CH₃)CH₃</text><text x="438" y="186" fill="#dc2626" font-weight="bold" font-size="11">+58 (lowest ≠</text><text x="438" y="200" fill="#dc2626" font-size="9">most branched)</text><rect x="0" y="0" width="580" height="210" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-tip', type: 'callout', data: {
      style: 'tip', title: 'Exam Tips', text: '&#x2022; Always check that structural isomers have exactly the same molecular formula.<br/>&#x2022; Two structures that are mirror images of each other (enantiomers) are NOT structural isomers &#x2014; they are stereoisomers.<br/>&#x2022; When drawing isomers in an exam, work systematically (longest chain first, then branch) to avoid missing any.<br/>&#x2022; Branching always lowers boiling point relative to the straight-chain isomer (less surface area &#x2192; weaker London forces).'
    }},
    { id: 'callout-warning', type: 'callout', data: {
      style: 'warning', title: 'Common Mistakes', text: '&#x2022; Drawing the same structure twice in a different orientation and calling them isomers &#x2014; rotate mentally first.<br/>&#x2022; Forgetting position isomers &#x2014; moving a functional group from C1 to C2 gives a different compound.<br/>&#x2022; Confusing structural isomerism with stereoisomerism (E/Z, optical) &#x2014; stereoisomers have the same connectivity.'
    }}
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-key-iso', prompt: 'Define structural isomers. How do they differ from stereoisomers?' },
      { id: 'c2', blockId: 'svg-types', prompt: 'Name and describe the three types of structural isomerism.' },
      { id: 'c3', blockId: 'callout-we1', prompt: 'Draw and name the two structural isomers of C₄H₁₀. Which has the higher boiling point and why?' },
      { id: 'c4', blockId: 'svg-c6', prompt: 'How many chain isomers does C₆H₁₄ have? Name them all.' },
      { id: 'c5', blockId: 'svg-systematic', prompt: 'Describe the systematic method for drawing all structural isomers of a molecular formula.' }
    ],
    summaryText: 'Structural isomers: same molecular formula, different structural formula. Types: chain (different skeleton), position (group on different C), functional group (different group). C₄H₁₀ = 2 isomers; C₅H₁₂ = 3; C₆H₁₄ = 5. Branching → lower bp (less surface area → weaker London forces). Work systematically: longest chain first, then shorten and branch.',
    ready: false
  },
  evidence: [], mentions: []
};
""")

print('Batch 3 complete — notes 6, 7, 8.')
