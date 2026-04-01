export const note_chemistry_5_17_4 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-shapes',
      data: {
        text: 'Determine coordination number and predict complex ion shapes; understand cis-trans isomerism in square planar and octahedral complexes; identify optical isomerism in octahedral complexes with bidentate ligands.'
      }
    },
    {
      type: 'heading',
      id: 'h-coordination-number',
      data: { text: 'Coordination Number and Shape Determination', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-coord-number-def',
      data: {
        text: 'The <strong>coordination number</strong> of a metal ion is the total number of coordinate bonds formed between the metal and its surrounding ligands. The coordination number determines the three-dimensional geometry of the complex ion. Transition metals most commonly form complexes with coordination numbers of 4 or 6. The coordination number depends on:<br/>' +
        '• The size of the metal ion<br/>' +
        '• The size of the ligands<br/>' +
        '• The charge on the metal ion<br/>' +
        '• Electronic factors favouring certain geometries'
      }
    },
    {
      type: 'callout',
      id: 'callout-coordination-numbers',
      data: {
        style: 'key',
        title: 'Common Coordination Numbers',
        text: 'Coordination number 6: Octahedral shape (90° bond angles) — most common for transition metals<br/>Coordination number 4: Tetrahedral (109.5° angles) or Square planar (90° angles, typically for d⁸ and d⁹ metals)'
      }
    },
    {
      type: 'heading',
      id: 'h-octahedral-geometry',
      data: { text: 'Octahedral Complexes (Coordination Number 6)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-octahedral-def',
      data: {
        text: 'An <strong>octahedral complex</strong> has six ligands arranged around the central metal ion at the vertices of a regular octahedron. The six donor atoms form an arrangement with 90° bond angles between adjacent ligands. All bond lengths and angles are equivalent in a symmetrical octahedral complex. Octahedral geometry is the most common for transition metal complexes, particularly for first-row transition metals like Fe³⁺, Co²⁺, Co³⁺, and Ni²⁺.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-octahedral-examples',
      data: {
        text: '<strong>Common octahedral complexes:</strong><br/>' +
        '• [Cu(H₂O)₆]²⁺ — six water ligands, pale blue colour<br/>' +
        '• [Fe(H₂O)₆]²⁺ — pale green colour<br/>' +
        '• [Fe(H₂O)₆]³⁺ — brown/yellow colour<br/>' +
        '• [Fe(CN)₆]⁴⁻ — hexacyanoferrate(II), yellow<br/>' +
        '• [Co(H₂O)₆]²⁺ — pink colour<br/>' +
        '• [Ni(NH₃)₆]²⁺ — blue colour'
      }
    },
    {
      type: 'heading',
      id: 'h-tetrahedral-geometry',
      data: { text: 'Tetrahedral Complexes (Coordination Number 4)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-tetrahedral-def',
      data: {
        text: 'A <strong>tetrahedral complex</strong> has four ligands arranged around the central metal ion at the vertices of a regular tetrahedron. The bond angles in a tetrahedral geometry are 109.5°. Tetrahedral complexes are less common than octahedral but are important in certain cases, particularly with bulky ligands or with certain metal ions. The geometry is favoured when ligands are large or when steric considerations dominate.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-tetrahedral-examples',
      data: {
        text: '<strong>Common tetrahedral complexes:</strong><br/>' +
        '• [CuCl₄]²⁻ — yellow/green colour (preferred over octahedral when chloride is the ligand)<br/>' +
        '• [CoCl₄]²⁻ — dark blue colour<br/>' +
        '• [ZnCl₄]²⁻ — colourless (d¹⁰, no colour)<br/>' +
        '• [MnO₄]⁻ — tetrahedral, purple colour, strong oxidising agent'
      }
    },
    {
      type: 'callout',
      id: 'callout-tetrahedral-size',
      data: {
        style: 'key',
        title: 'Why Cl⁻ Gives Tetrahedral, Not Octahedral, Complexes',
        text: 'Cl⁻ ions are significantly larger than H₂O molecules. Around a central transition metal ion, only 4 Cl⁻ ions can fit — not 6. This steric restriction forces tetrahedral (CN=4) rather than octahedral (CN=6) geometry.\n• [CuCl₄]²⁻: CN = 4, tetrahedral, yellow/olive green\n• [CoCl₄]²⁻: CN = 4, tetrahedral, dark blue\n\nWith smaller ligands (H₂O, NH₃), 6 fit → CN = 6 → octahedral geometry. This is why adding excess water reverses [CoCl₄]²⁻ (blue) back to [Co(H₂O)₆]²⁺ (pink).'
      }
    },
    {
      type: 'svg',
      id: 'svg-complex-shapes',
      data: {
        svg: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;font-size:11px">
  <text x="75" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b">Octahedral (CN=6)</text>
  <circle cx="75" cy="100" r="13" fill="#3b82f6"/>
  <text x="75" y="104" text-anchor="middle" font-size="9" fill="#1e293b">M</text>
  <line x1="75" y1="100" x2="32" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="24" cy="100" r="9" fill="#2d2f72" stroke="#3b82f6"/>
  <text x="24" y="103" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <line x1="75" y1="100" x2="118" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="126" cy="100" r="9" fill="#2d2f72" stroke="#3b82f6"/>
  <text x="126" y="103" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <line x1="75" y1="100" x2="75" y2="57" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="75" cy="49" r="9" fill="#2d2f72" stroke="#3b82f6"/>
  <text x="75" y="52" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <line x1="75" y1="100" x2="75" y2="143" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="75" cy="151" r="9" fill="#2d2f72" stroke="#3b82f6"/>
  <text x="75" y="154" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <polygon points="75,100 46,132 41,125" fill="#94a3b8"/>
  <circle cx="37" cy="138" r="9" fill="#2d2f72" stroke="#3b82f6"/>
  <text x="37" y="141" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <line x1="75" y1="100" x2="105" y2="66" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2"/>
  <circle cx="112" cy="59" r="9" fill="#2d2f72" stroke="#3b82f6" stroke-dasharray="4,2"/>
  <text x="112" y="62" text-anchor="middle" font-size="8" fill="#3730a3">L</text>
  <text x="75" y="182" text-anchor="middle" fill="#64748b">6 ligands · 90° angles</text>
  <line x1="160" y1="25" x2="160" y2="175" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="270" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b">Tetrahedral (CN=4)</text>
  <circle cx="270" cy="100" r="13" fill="#3b82f6"/>
  <text x="270" y="104" text-anchor="middle" font-size="9" fill="#1e293b">M</text>
  <line x1="270" y1="100" x2="228" y2="72" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="220" cy="67" r="9" fill="#44370a" stroke="#ca8a04"/>
  <text x="220" y="70" text-anchor="middle" font-size="8" fill="#92400e">L</text>
  <line x1="270" y1="100" x2="312" y2="72" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="320" cy="67" r="9" fill="#44370a" stroke="#ca8a04"/>
  <text x="320" y="70" text-anchor="middle" font-size="8" fill="#92400e">L</text>
  <line x1="270" y1="100" x2="240" y2="138" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2"/>
  <circle cx="232" cy="146" r="9" fill="#44370a" stroke="#ca8a04" stroke-dasharray="4,2"/>
  <text x="232" y="149" text-anchor="middle" font-size="8" fill="#92400e">L</text>
  <polygon points="270,100 302,136 296,140" fill="#94a3b8"/>
  <circle cx="304" cy="144" r="9" fill="#44370a" stroke="#ca8a04"/>
  <text x="304" y="147" text-anchor="middle" font-size="8" fill="#92400e">L</text>
  <text x="270" y="182" text-anchor="middle" fill="#64748b">4 ligands · 109.5° angles</text>
  <line x1="355" y1="25" x2="355" y2="175" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="410" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b">Square Planar (CN=4)</text>
  <circle cx="410" cy="100" r="13" fill="#3b82f6"/>
  <text x="410" y="104" text-anchor="middle" font-size="9" fill="#1e293b">M</text>
  <line x1="410" y1="100" x2="372" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="364" cy="100" r="9" fill="#0a2e1a" stroke="#16a34a"/>
  <text x="364" y="103" text-anchor="middle" font-size="8" fill="#15803d">L</text>
  <line x1="410" y1="100" x2="448" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="456" cy="100" r="9" fill="#0a2e1a" stroke="#16a34a"/>
  <text x="456" y="103" text-anchor="middle" font-size="8" fill="#15803d">L</text>
  <line x1="410" y1="100" x2="410" y2="62" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="410" cy="54" r="9" fill="#0a2e1a" stroke="#16a34a"/>
  <text x="410" y="57" text-anchor="middle" font-size="8" fill="#15803d">L</text>
  <line x1="410" y1="100" x2="410" y2="138" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="410" cy="146" r="9" fill="#0a2e1a" stroke="#16a34a"/>
  <text x="410" y="149" text-anchor="middle" font-size="8" fill="#15803d">L</text>
  <text x="410" y="182" text-anchor="middle" fill="#64748b">4 ligands · 90° · same plane</text>
</svg>`,
        caption: 'Three common complex ion geometries. Octahedral (CN=6, 90° bond angles, most common); tetrahedral (CN=4, 109.5°, typical with large ligands like Cl⁻); square planar (CN=4, 90°, all ligands in one plane, typical of Pt²⁺, Pd²⁺).'
      }
    },
    {
      type: 'heading',
      id: 'h-square-planar-geometry',
      data: { text: 'Square Planar Complexes (Coordination Number 4)', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-square-planar-def',
      data: {
        text: 'A <strong>square planar complex</strong> has four ligands arranged around the central metal ion in a single plane, with 90° bond angles between adjacent ligands. The four ligands and metal ion all lie in the same plane. Square planar geometry is preferred by certain metal ions, particularly d⁸ and d⁹ systems (such as Cu²⁺, Pt²⁺, and Pd²⁺), where crystal field effects strongly favour this arrangement over tetrahedral.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-square-planar-examples',
      data: {
        text: '<strong>Common square planar complexes:</strong><br/>' +
        '• [Pt(NH₃)₂Cl₂] — platinum(II), can exist as cis and trans isomers<br/>' +
        '• [Pd(NH₃)₂Cl₂] — palladium(II)<br/>' +
        '• [Ni(CN)₄]²⁻ — square planar geometry'
      }
    },
    {
      type: 'heading',
      id: 'h-cis-trans-isomerism',
      data: { text: 'Cis-Trans Isomerism in Square Planar and Octahedral Complexes', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-cis-trans-def',
      data: {
        text: '<strong>Cis-trans isomerism</strong> (also called geometric isomerism) occurs when a complex contains two or more different ligands that can be arranged in different spatial positions around the metal ion. The two isomers are:<br/>' +
        '• <strong>cis-isomer:</strong> Identical ligands occupy adjacent positions (90° apart)<br/>' +
        '• <strong>trans-isomer:</strong> Identical ligands occupy opposite positions (180° apart)<br/>' +
        'The two isomers are different compounds with different physical and chemical properties.'
      }
    },
    {
      type: 'callout',
      id: 'callout-cisplatin',
      data: {
        style: 'key',
        title: 'Cisplatin: A Medical Application',
        text: 'Cisplatin [Pt(NH₃)₂Cl₂] (cis-isomer) is a powerful anti-cancer drug. The trans-isomer is inactive. This difference in biological activity arises from the different geometries—only the cis-isomer can bind effectively to DNA. This is a real-world example of how isomerism affects function.'
      }
    },
    {
      type: 'heading',
      id: 'h-octahedral-cis-trans',
      data: { text: 'Cis-Trans Isomerism in Octahedral Complexes', level: 3 }
    },
    {
      type: 'paragraph',
      id: 'p-octahedral-isomerism',
      data: {
        text: '<strong>Octahedral complexes with composition [MA₄B₂]:</strong><br/>' +
        'Consider [Cu(NH₃)₄(H₂O)₂]²⁺:<br/>' +
        '• <strong>cis-isomer:</strong> The two H₂O ligands occupy adjacent positions (90° apart)<br/>' +
        '• <strong>trans-isomer:</strong> The two H₂O ligands occupy opposite positions (180° apart)<br/>' +
        'These are distinct isomers. The difference arises purely from spatial arrangement—no bonds are broken or formed in converting one to the other, making them geometric isomers.'
      }
    },
    {
      type: 'svg',
      id: 'svg-cis-trans-pt',
      data: {
        svg: `<svg viewBox="0 0 340 205" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;font-size:11px">
  <text x="170" y="16" text-anchor="middle" font-weight="bold" fill="#1e293b">Geometric Isomers of Pt(NH₃)₂Cl₂ (Square Planar)</text>
  <text x="85" y="38" text-anchor="middle" font-size="11" fill="#16a34a" font-weight="bold">cis-isomer</text>
  <text x="85" y="52" text-anchor="middle" font-size="9" fill="#475569">identical groups adjacent (90°)</text>
  <circle cx="85" cy="115" r="12" fill="#3b82f6"/>
  <text x="85" y="119" text-anchor="middle" font-size="9" fill="#1e293b">Pt</text>
  <line x1="85" y1="103" x2="85" y2="74" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="85" cy="65" r="10" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="85" y="68" text-anchor="middle" font-size="8" fill="#92400e">Cl</text>
  <line x1="73" y1="115" x2="47" y2="115" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="38" cy="115" r="10" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="38" y="118" text-anchor="middle" font-size="8" fill="#92400e">Cl</text>
  <line x1="85" y1="127" x2="85" y2="156" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="85" cy="165" r="10" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="85" y="168" text-anchor="middle" font-size="8" fill="#15803d">NH₃</text>
  <line x1="97" y1="115" x2="123" y2="115" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="132" cy="115" r="10" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="132" y="118" text-anchor="middle" font-size="8" fill="#15803d">NH₃</text>
  <text x="85" y="194" text-anchor="middle" font-size="9" fill="#16a34a">active anticancer drug</text>
  <line x1="170" y1="32" x2="170" y2="185" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="255" y="38" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">trans-isomer</text>
  <text x="255" y="52" text-anchor="middle" font-size="9" fill="#475569">identical groups opposite (180°)</text>
  <circle cx="255" cy="115" r="12" fill="#3b82f6"/>
  <text x="255" y="119" text-anchor="middle" font-size="9" fill="#1e293b">Pt</text>
  <line x1="255" y1="103" x2="255" y2="74" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="255" cy="65" r="10" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="255" y="68" text-anchor="middle" font-size="8" fill="#92400e">Cl</text>
  <line x1="255" y1="127" x2="255" y2="156" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="255" cy="165" r="10" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="255" y="168" text-anchor="middle" font-size="8" fill="#92400e">Cl</text>
  <line x1="243" y1="115" x2="214" y2="115" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="205" cy="115" r="10" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="205" y="118" text-anchor="middle" font-size="8" fill="#15803d">NH₃</text>
  <line x1="267" y1="115" x2="296" y2="115" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="305" cy="115" r="10" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="305" y="118" text-anchor="middle" font-size="8" fill="#15803d">NH₃</text>
  <text x="255" y="194" text-anchor="middle" font-size="9" fill="#dc2626">biologically inactive</text>
</svg>`,
        caption: 'Cis and trans isomers of Pt(NH₃)₂Cl₂. In the cis form two identical groups are adjacent; in trans they are opposite. Only the cis-isomer (cisplatin) is an effective anticancer drug — geometry controls biological function.'
      }
    },
    {
      type: 'heading',
      id: 'h-optical-isomerism',
      data: { text: 'Optical Isomerism in Octahedral Complexes', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-optical-isomerism-def',
      data: {
        text: '<strong>Optical isomerism</strong> (also called enantiomerism) occurs when a complex can exist in two forms that are non-superimposable mirror images of each other. These are called <strong>enantiomers</strong>. Enantiomers cannot be distinguished by simple cis-trans isomerism; instead, they differ in how they rotate plane-polarised light.<br/>' +
        '• <strong>d-enantiomer (dextrorotatory):</strong> Rotates plane-polarised light to the right (+)<br/>' +
        '• <strong>l-enantiomer (levorotatory):</strong> Rotates plane-polarised light to the left (−)'
      }
    },
    {
      type: 'paragraph',
      id: 'p-optical-conditions',
      data: {
        text: 'Octahedral complexes exhibit optical isomerism when they contain <strong>bidentate ligands</strong> and lack a plane of symmetry. A classic example is [Co(en)₃]³⁺, where three bidentate ethane-1,2-diamine ligands wrap around the cobalt(III) ion. The asymmetric arrangement of the three chelate rings creates a complex with no plane of symmetry, resulting in d and l enantiomers.'
      }
    },
    {
      type: 'callout',
      id: 'callout-optical-isomerism',
      data: {
        style: 'worked',
        title: 'Why [Co(en)₃]³⁺ Shows Optical Isomerism',
        text: 'Three bidentate en ligands coordinate to Co³⁺, each wrapping around the metal. The arrangement of the three chelate rings creates a three-dimensional structure with a right-handed (d) or left-handed (l) twist. The molecule lacks a plane of symmetry, so mirror images cannot be superimposed, creating enantiomers. Solutions of the two enantiomers rotate plane-polarised light in opposite directions.'
      }
    },
    {
      type: 'checklist',
      id: 'checklist-isomerism',
      data: {
        items: [
          { text: 'Coordination number 6 typically gives octahedral shape (90° angles)', checked: false },
          { text: 'Coordination number 4 can give tetrahedral (109.5°) or square planar (90°)', checked: false },
          { text: 'cis-trans isomerism: identical ligands adjacent (cis) or opposite (trans)', checked: false },
          { text: 'Cisplatin is the biologically active cis-isomer; trans-isomer is inactive', checked: false },
          { text: 'Optical isomerism in octahedral complexes with bidentate ligands lacking plane of symmetry', checked: false }
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
        text: 'Understand: Coordination number determines shape: 6 = octahedral, 4 = tetrahedral or square planar, 2 = linear. Cis-trans and optical isomerism occur in octahedral complexes.\n\nApply: Draw the cis and trans isomers of [CoCl₂(NH₃)₄]⁺. Which shows optical isomerism?\n\nAnalyze: Why do square planar complexes show cis-trans isomerism but tetrahedral ones do not?\n\nEvaluate: Cisplatin (cis-[PtCl₂(NH₃)₂]) is an anticancer drug but the trans isomer is inactive. Discuss why geometry matters.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-shapes-isomerism',
      data: {
        text: 'Coordination number determines complex shape: 6 → octahedral (90° angles, most common); 4 → tetrahedral (109.5°) or square planar (90°). Cis-trans isomerism arises when different ligands occupy different positions. Octahedral [MA₄B₂] and square planar [MA₂B₂] complexes show cis-trans isomerism. Optical isomerism occurs in octahedral complexes with bidentate ligands lacking plane of symmetry, producing d and l enantiomers that rotate plane-polarised light oppositely. Cisplatin exemplifies how geometric isomerism affects biological activity.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Bonding in Complexes",
        text: "Metal-ligand bonds have significant covalent character despite being notated as coordinate. In coordination complexes, the metal d-orbitals split into higher and lower energy groups when ligands approach (crystal field theory), causing d-d transitions that produce color when visible light is absorbed."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'h-coordination-number',
        prompt: 'What is coordination number and what are the common coordination numbers for transition metals?'
      },
      {
        id: 'cue-2',
        blockId: 'h-octahedral-geometry',
        prompt: 'Describe the geometry of an octahedral complex and give three examples.'
      },
      {
        id: 'cue-3',
        blockId: 'h-square-planar-geometry',
        prompt: 'What is square planar geometry and which metal ions favour this shape?'
      },
      {
        id: 'cue-4',
        blockId: 'p-cis-trans-def',
        prompt: 'Explain cis-trans isomerism with an example.'
      },
      {
        id: 'cue-5',
        blockId: 'p-optical-conditions',
        prompt: 'When does an octahedral complex exhibit optical isomerism?'
      }
    ],
    summaryText: 'Coordination number 6: octahedral (90° angles). Coordination number 4: tetrahedral (109.5°) or square planar (90°). Cis-trans isomerism: identical ligands adjacent (cis) or opposite (trans). Optical isomerism: enantiomers from bidentate ligands in octahedral complexes lacking plane of symmetry. Cisplatin (cis) is active; trans-isomer is inactive.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Complex Ion Geometry and Medical Chemistry',
      detail: 'The difference between cisplatin (active) and its trans-isomer (inactive) demonstrates how geometric isomerism directly impacts biological function in chemotherapy.',
      year: '2023',
      source: 'A-Level Chemistry and Medicinal Chemistry',
      tags: ['complex-geometry', 'isomerism', 'cisplatin']
    }
  ]
};
