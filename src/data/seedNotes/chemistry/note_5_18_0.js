export const note_chemistry_5_18_0 = {
  blocks: [
    {
      id: 'obj-benzene-structure',
      type: 'objective',
      data: {
        text: 'Explain the structure of benzene using evidence from bond length, enthalpy of hydrogenation, and the delocalised π electron model; understand why Kekulé\'s alternating structure is inadequate'
      }
    },
    {
      id: 'h-aromatic-aliphatic',
      type: 'heading',
      data: { text: 'Aromatic vs Aliphatic Compounds', level: 2 }
    },
    {
      id: 'list-aromatic-def',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Aliphatic compound: carbons joined in straight chains, branched chains, or non-aromatic rings — e.g. butane, butene, carboxylic acids, esters' },
          { text: 'Aromatic compound: contains a benzene ring in its structure — e.g. benzene, phenol, toluene, nitrobenzene' },
          { text: 'Important: cyclic structures are NOT automatically aromatic — cyclohexane is a ring but is aliphatic' },
          { text: 'Benzene (C₆H₆): colourless liquid, b.p. 80°C, obtained from crude oil by fractional distillation; highly carcinogenic — only used under strictly controlled conditions' }
        ]
      }
    },
    {
      id: 'callout-benzene-discovery',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Benzene: Discovery & Formula',
        text: 'Isolated in 1825 by Michael Faraday. Molecular formula C₆H₆ — this suggested many C=C double bonds (highly unsaturated). However, the chemical reactions of benzene did not match the behaviour expected of such a highly unsaturated molecule, making its structural formula a puzzle.'
      }
    },
    {
      id: 'h-kekule-problem',
      type: 'heading',
      data: { text: 'Kekulé Structure and Its Problems', level: 2 }
    },
    {
      id: 'p-kekule-1',
      type: 'paragraph',
      data: {
        text: 'In 1865, the German chemist Friedrich August Kekulé proposed that benzene (C₆H₆) contains alternating single and double C=C bonds in a hexagonal ring. This structure has three C=C double bonds and three C−C single bonds arranged alternately. However, five key pieces of experimental evidence reveal fundamental flaws with this model.'
      }
    },
    {
      id: 'h-evidence-problems',
      type: 'heading',
      data: { text: 'Five Experimental Evidence Points Against Kekulé', level: 3 }
    },
    {
      id: 'table-kekule-evidence',
      type: 'comparisonTable',
      data: {
        headers: ['Evidence', 'Kekulé Prediction', 'Actual Observation', 'Conclusion'],
        rows: [
          ['Bromine water test', 'Addition reaction → Br₂ decolourised', 'No reaction with Br₂(aq); substitution, not addition', 'No C=C double bonds present'],
          ['Isomers of dibromobenzene', '4 possible isomers (Kekulé)', 'Only 3 isomers found', 'All C−C bonds are equivalent'],
          ['X-ray diffraction (bond lengths)', 'Two lengths: ~134 pm (C=C) and ~154 pm (C−C)', 'All 6 bonds identical at ~140 pm', 'Bonds are intermediate — delocalised'],
          ['Enthalpy of hydrogenation', '≈ −360 kJ/mol (3 × double-bond value)', 'Only −208 kJ/mol measured', 'Extra stability of ~152 kJ/mol (delocalisation)'],
          ['IR spectroscopy', 'Peak at 1650 cm⁻¹ (C=C stretch)', 'No peak at 1650 cm⁻¹; peaks at 1450, 1500, 1580 cm⁻¹ (aromatic C−C)', 'No isolated C=C bonds; an aromatic system']
        ],
        caption: 'Five pieces of evidence contradicting the Kekulé structure'
      }
    },
    {
      id: 'h-evidence-1',
      type: 'heading',
      data: { text: '1. Bromine Water Test', level: 3 }
    },
    {
      id: 'p-bromine-water',
      type: 'paragraph',
      data: {
        text: 'Testing for unsaturation with bromine water: if the Kekulé structure were correct, benzene should undergo an addition reaction with Br₂, decolourising the orange bromine water. However, benzene does NOT decolourise bromine water. Instead, it undergoes a substitution reaction — meaning there are no true C=C double bonds available for addition.'
      }
    },
    {
      id: 'callout-bromine-test',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Problem 1: No Addition with Br₂',
        text: 'Kekulé predicts: benzene + Br₂ → addition product (decolourised). Actual: benzene does NOT decolourise bromine water. Benzene undergoes substitution, not addition. → Suggests no isolated C=C double bonds.'
      }
    },
    {
      id: 'h-evidence-2',
      type: 'heading',
      data: { text: '2. Number of Isomers', level: 3 }
    },
    {
      id: 'p-isomers',
      type: 'paragraph',
      data: {
        text: 'If the Kekulé structure were correct, with alternating single and double bonds, 1,2-dibromobenzene could exist in two forms: one where the two bromines are on a double-bond carbon pair, and one where they are on a single-bond carbon pair. This gives 4 possible isomers for dibromobenzene. However, in practice only 3 isomers are found (1,2-; 1,3-; and 1,4-dibromobenzene). This means all adjacent carbons are equivalent — as expected with a delocalised structure.'
      }
    },
    {
      id: 'callout-isomers',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Problem 2: Only 3 Dibromobenzene Isomers',
        text: 'Kekulé predicts 4 isomers for 1,2-dibromobenzene (double-bond pair vs single-bond pair). Actual: only 3 isomers found. → All adjacent C−C bonds must be identical — consistent with delocalisation.'
      }
    },
    {
      id: 'h-evidence-3',
      type: 'heading',
      data: { text: '3. X-ray Diffraction — Bond Lengths', level: 3 }
    },
    {
      id: 'p-bond-length',
      type: 'paragraph',
      data: {
        text: 'If benzene had the Kekulé structure with alternating single and double bonds, we would expect two different bond lengths. C=C double bonds are shorter (~134 pm) than C−C single bonds (~154 pm). However, X-ray crystallography shows that ALL six C−C bonds in benzene have the SAME length of approximately 139 pm — intermediate between a single and double bond, consistent with delocalisation.'
      }
    },
    {
      id: 'callout-bond-lengths',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Problem 3: All C−C Bonds Are Equal',
        text: 'All 6 C−C bonds = 139 pm (between C−C 154 pm and C=C 134 pm). Kekulé predicts two different lengths. X-ray diffraction proves all are identical. → Delocalisation spreads bond character equally around the ring.'
      }
    },
    {
      id: 'h-hydrogenation-evidence',
      type: 'heading',
      data: { text: '4. Enthalpy of Hydrogenation', level: 3 }
    },
    {
      id: 'p-hydrogenation-1',
      type: 'paragraph',
      data: {
        text: 'If benzene had three C=C double bonds (Kekulé structure), we would expect ΔH ≈ −360 kJ/mol (three double bonds × ~120 kJ/mol per C=C). Cyclohexene has one C=C and ΔH = −120 kJ/mol. However, the measured enthalpy of hydrogenation of benzene to cyclohexane is only −208 kJ/mol — approximately 152 kJ/mol less exothermic than predicted. This represents the delocalisation/stabilisation energy of benzene.'
      }
    },
    {
      id: 'eq-hydrogenation',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + 3H<sub>2</sub> → C<sub>6</sub>H<sub>12</sub><br />ΔH (actual) = −208 kJ mol<sup>−1</sup><br />ΔH (Kekulé prediction) = −360 kJ mol<sup>−1</sup><br />Stabilisation energy = 360 − 208 ≈ 152 kJ mol<sup>−1</sup>'
      }
    },
    {
      id: 'p-hydrogenation-2',
      type: 'paragraph',
      data: {
        text: 'The ~152 kJ/mol difference is called the stabilisation energy (or resonance energy). It shows benzene is significantly MORE stable than a Kekulé cyclohexatriene would be. The aromatic system lowers the molecule\'s energy, making it harder to break apart and react.'
      }
    },
    {
      id: 'h-ir-evidence',
      type: 'heading',
      data: { text: '5. IR Spectroscopy', level: 3 }
    },
    {
      id: 'p-ir-1',
      type: 'paragraph',
      data: {
        text: 'Alkenes show a characteristic C=C stretch absorption at around 1650 cm⁻¹ in their IR spectra. If benzene contained three localised C=C double bonds (as Kekulé proposed), we would expect this peak. However, benzene shows no absorption at 1650 cm⁻¹. Instead, it shows peaks at 1450, 1500, and 1580 cm⁻¹, which are C−C stretches specific to aromatic compounds. This confirms benzene has no isolated C=C double bonds.'
      }
    },
    {
      id: 'callout-ir-evidence',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Problem 5: IR Spectra — No C=C Peak at 1650 cm⁻¹',
        text: 'Alkenes: absorption at ~1650 cm⁻¹ (C=C stretch). Benzene: NO peak at 1650 cm⁻¹. Instead, aromatic C−C peaks at 1450, 1500 and 1580 cm⁻¹ only. → Confirms there are no isolated C=C double bonds in benzene.'
      }
    },
    {
      id: 'h-delocalised-model',
      type: 'heading',
      data: { text: 'The Delocalised π Electron Model', level: 2 }
    },
    {
      id: 'p-delocalised-1',
      type: 'paragraph',
      data: {
        text: 'Modern bonding theory explains benzene using a delocalised π electron model. Each carbon atom is sp² hybridised, with three sp² hybrid orbitals in the plane of the ring forming σ bonds (bond angles 120°). The remaining unhybridised p orbital on each carbon points perpendicular to the ring plane.'
      }
    },
    {
      id: 'p-delocalised-2',
      type: 'paragraph',
      data: {
        text: 'Each of the 6 carbons contributes one unpaired p-orbital electron — giving 6 electrons in total. These six p orbitals overlap sideways to form a continuous π electron system that extends above and below the hexagonal ring in a donut-like shape. The electrons are not localised between specific pairs of carbons but are delocalised over all six atoms, creating equal bond character in every C−C bond and extra stability (stabilisation energy ≈ 152 kJ/mol).'
      }
    },
    {
      id: 'svg-benzene-structure',
      type: 'svg',
      data: {
        caption: 'Benzene structure: 6 C−C σ bonds in a ring, with delocalised π electrons above and below (shown as shaded clouds). The hexagon-with-circle symbol represents the delocalised ring.',
        svg: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Title -->
  <text x="170" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Benzene — Delocalised π Model</text>

  <!-- LEFT: Kekulé (incorrect) -->
  <text x="75" y="38" text-anchor="middle" font-size="11" fill="#dc2626">Kekulé (incorrect)</text>
  <!-- Hexagon with alternating bonds -->
  <line x1="75" y1="50" x2="105" y2="68" stroke="#374151" stroke-width="2.5"/>
  <line x1="105" y1="68" x2="105" y2="104" stroke="#374151" stroke-width="2.5"/>
  <line x1="105" y1="104" x2="75" y2="122" stroke="#374151" stroke-width="2.5"/>
  <line x1="75" y1="122" x2="45" y2="104" stroke="#374151" stroke-width="2.5"/>
  <line x1="45" y1="104" x2="45" y2="68" stroke="#374151" stroke-width="2.5"/>
  <line x1="45" y1="68" x2="75" y2="50" stroke="#374151" stroke-width="2.5"/>
  <!-- Double bond inner lines -->
  <line x1="77" y1="51" x2="103" y2="66" stroke="#374151" stroke-width="2.5" stroke-dasharray="0"/>
  <line x1="77" y1="53" x2="102" y2="67" stroke="#374151" stroke-width="2.5"/>
  <line x1="47" y1="69" x2="47" y2="103" stroke="#374151" stroke-width="2.5"/>
  <line x1="49" y1="69" x2="49" y2="103" stroke="#374151" stroke-width="2.5"/>
  <line x1="77" y1="120" x2="103" y2="105" stroke="#374151" stroke-width="2.5"/>
  <line x1="78" y1="122" x2="102" y2="107" stroke="#374151" stroke-width="2.5"/>
  <!-- H atoms Kekulé -->
  <text x="75" y="46" text-anchor="middle" font-size="10" fill="#6b7280">H</text>
  <text x="115" y="64" text-anchor="start" font-size="10" fill="#6b7280">H</text>
  <text x="115" y="110" text-anchor="start" font-size="10" fill="#6b7280">H</text>
  <text x="75" y="136" text-anchor="middle" font-size="10" fill="#6b7280">H</text>
  <text x="30" y="110" text-anchor="end" font-size="10" fill="#6b7280">H</text>
  <text x="30" y="64" text-anchor="end" font-size="10" fill="#6b7280">H</text>

  <!-- Divider -->
  <line x1="150" y1="35" x2="150" y2="190" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="170" y="185" text-anchor="middle" font-size="10" fill="#9ca3af">vs</text>

  <!-- RIGHT: Modern delocalised model -->
  <text x="255" y="38" text-anchor="middle" font-size="11" fill="#16a34a">Delocalised Model (correct)</text>
  <!-- Hexagon σ bonds -->
  <polygon points="255,52 285,69 285,104 255,121 225,104 225,69" fill="none" stroke="#374151" stroke-width="2.5"/>
  <!-- Delocalised pi cloud above (ellipse) -->
  <ellipse cx="255" cy="60" rx="28" ry="13" fill="#818cf8" fill-opacity="0.35" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="255" y="58" text-anchor="middle" font-size="9" fill="#3730a3">π above</text>
  <!-- Delocalised pi cloud below (ellipse) -->
  <ellipse cx="255" cy="113" rx="28" ry="13" fill="#818cf8" fill-opacity="0.35" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="255" y="116" text-anchor="middle" font-size="9" fill="#3730a3">π below</text>
  <!-- Circle in centre representing delocalization symbol -->
  <circle cx="255" cy="87" r="20" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-dasharray="4,2"/>
  <!-- H atoms delocalised -->
  <text x="255" y="48" text-anchor="middle" font-size="10" fill="#6b7280">H</text>
  <text x="295" y="66" text-anchor="start" font-size="10" fill="#6b7280">H</text>
  <text x="295" y="108" text-anchor="start" font-size="10" fill="#6b7280">H</text>
  <text x="255" y="135" text-anchor="middle" font-size="10" fill="#6b7280">H</text>
  <text x="212" y="108" text-anchor="end" font-size="10" fill="#6b7280">H</text>
  <text x="212" y="66" text-anchor="end" font-size="10" fill="#6b7280">H</text>

  <!-- Bond length annotation box -->
  <rect x="10" y="148" width="155" height="38" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="88" y="162" text-anchor="middle" font-size="9.5" fill="#dc2626" font-weight="bold">Kekulé: 2 bond lengths</text>
  <text x="88" y="178" text-anchor="middle" font-size="9" fill="#374151">C=C 134 pm | C−C 154 pm</text>

  <rect x="175" y="148" width="155" height="38" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="253" y="162" text-anchor="middle" font-size="9.5" fill="#16a34a" font-weight="bold">Actual: 1 bond length</text>
  <text x="253" y="178" text-anchor="middle" font-size="9" fill="#374151">All C−C = 139 pm (equal)</text>
</svg>`
      }
    },
    {
      id: 'callout-representation',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Representing Benzene Correctly',
        text: 'A hexagon with a CIRCLE inside represents benzene. The hexagon = σ bond skeleton; the circle = delocalised π electrons above and below the ring. NEVER draw alternating single and double bonds — this is the incorrect Kekulé model. The two representations of the Kekulé structure (flipping single/double) are considered the same, not two different isomers.'
      }
    },
    {
      id: 'checklist-evidence',
      type: 'checklist',
      data: {
        items: [
          { text: 'Benzene does NOT decolourise bromine water (substitution, not addition)', checked: false },
          { text: 'Dibromobenzene has 3 isomers (not 4 as Kekulé predicts)', checked: false },
          { text: 'All 6 C−C bonds in benzene are 139 pm (equal; between single and double)', checked: false },
          { text: 'Enthalpy of hydrogenation = −208 kJ/mol (not −360 kJ/mol predicted)', checked: false },
          { text: 'IR spectrum: no peak at 1650 cm⁻¹; aromatic C−C peaks at 1450, 1500, 1580 cm⁻¹', checked: false },
          { text: 'Stabilisation energy ≈ 152 kJ/mol confirms delocalised π system', checked: false },
          { text: 'Hexagon with circle is the correct representation of benzene', checked: false }
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
        text: 'Understand: Benzene has equal C–C bond lengths (140 pm) and a lower-than-expected enthalpy of hydrogenation, proving it is NOT three alternating double bonds but a delocalised π system.\n\nApply: Calculate the expected ΔH_hydrogenation for cyclohexatriene vs measured ΔH for benzene. What does the difference represent?\n\nAnalyze: How does X-ray crystallography providing equal bond lengths disprove Kekulé\'s structure?\n\nEvaluate: Was Kekulé wrong, or was his model a useful stepping stone? Discuss the evolution of scientific models.'
      },
      terms: []
    },
    {
      id: 'summary-structure',
      type: 'summary',
      data: {
        text: 'Benzene (C₆H₆) is an aromatic compound, unlike aliphatic compounds which lack the benzene ring. The Kekulé structure (alternating C=C and C−C) is disproved by five pieces of evidence: (1) benzene does not decolourise Br₂(aq) — it undergoes substitution, not addition; (2) only 3 isomers of dibromobenzene exist (not 4); (3) X-ray diffraction shows all C−C bonds are equal at 139 pm; (4) enthalpy of hydrogenation is −208 kJ/mol (not −360 kJ/mol); (5) IR spectrum shows no C=C peak at 1650 cm⁻¹. The modern model: 6 p orbitals overlap to form a delocalised π system above and below the ring, stabilising benzene by ~152 kJ/mol. Represented as a hexagon with a circle.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-bromine-test', prompt: 'Why does benzene NOT decolourise bromine water? What does this tell us about the Kekulé structure?' },
      { id: 'cue-2', blockId: 'p-isomers', prompt: 'How do the isomers of dibromobenzene disprove the Kekulé structure?' },
      { id: 'cue-3', blockId: 'eq-hydrogenation', prompt: 'What is the measured ΔH of hydrogenation for benzene? How does it compare to the Kekulé prediction and what is the stabilisation energy?' },
      { id: 'cue-4', blockId: 'p-ir-1', prompt: 'What does the IR spectrum of benzene show, and why does this disprove the Kekulé structure?' },
      { id: 'cue-5', blockId: 'p-delocalised-2', prompt: 'Explain how the delocalised π electron model accounts for all five pieces of evidence against Kekulé.' }
    ],
    summaryText: 'Benzene is aromatic (contains benzene ring); benzene ≠ aliphatic. Five evidence points disprove Kekulé: (1) no addition with Br₂; (2) only 3 dibromobenzene isomers; (3) all C−C bonds equal at 139 pm; (4) ΔH(hydrogenation) = −208 not −360 kJ/mol; (5) no IR peak at 1650 cm⁻¹. Modern model: 6 p orbitals → delocalised π system, stabilisation energy ≈ 152 kJ/mol.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Benzene structure and bonding',
      detail: 'X-ray crystallography confirms equal C−C bond lengths; enthalpy of hydrogenation via calorimetry',
      year: '2023',
      source: 'chemguide.co.uk — benzene structure and bonding',
      tags: ['structure', 'bonding', 'delocalisation']
    }
  ]
};
