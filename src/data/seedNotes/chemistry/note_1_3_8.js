/**
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
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Interpret bond length and bond enthalpy carefully",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Bond length is the equilibrium distance between the nuclei of two bonded atoms. Bond enthalpy is the enthalpy needed to break one mole of a specified covalent bond in the gas phase by homolytic fission. Breaking bonds is endothermic; making the same bonds releases energy.<br/><br/>For bonds between the same pair of elements, a higher bond order normally means a shorter and stronger bond: C≡C is shorter and stronger than C=C, which is shorter and stronger than C–C. For a related series such as C–Cl, C–Br and C–I, larger halogen atoms generally give longer, weaker bonds. Mean bond enthalpies are averages over different compounds, so calculated reaction enthalpies are estimates. Rate also depends on mechanism and activation energy; it is not determined by one bond enthalpy alone."
  }
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
        svg: `<svg viewBox="0 0 718 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

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
  <rect x="120" y="171" width="120" height="32" rx="3" fill="#a855f7" stroke="#1d4ed8" stroke-width="1"/>
  <text x="115" y="192" text-anchor="end" fill="#1d4ed8" font-size="10">C≡C</text>
  <text x="246" y="192" fill="#1d4ed8" font-weight="bold" font-size="10">120 pm</text>

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
  <rect x="405" y="171" width="243" height="32" rx="3" fill="#a855f7" stroke="#1d4ed8" stroke-width="1"/>
  <text x="400" y="192" text-anchor="end" fill="#1d4ed8" font-size="10">C≡C</text>
  <text x="653" y="192" fill="#1d4ed8" font-weight="bold" font-size="10">839 kJ mol⁻¹</text>

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
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "For H₂(g) + Cl₂(g) → 2HCl(g), use illustrative bond enthalpies H–H = 436, Cl–Cl = 243 and H–Cl = 432 kJ mol⁻¹. Bonds broken: 436 + 243 = 679. Bonds formed: 2 × 432 = 864. Thus ΔH ≈ 679 − 864 = <strong>−185 kJ mol⁻¹</strong> for the equation as written. The factor of two is essential."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not reverse “broken minus formed”. Bond breaking absorbs energy and bond formation releases it. Use gas-phase bond data and account for every bond in the balanced equation."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is bond breaking endothermic?",
        "checked": false
      },
      {
        "text": "State the bond-enthalpy calculation rule.",
        "checked": false
      },
      {
        "text": "How does bond order affect C–C bond length?",
        "checked": false
      },
      {
        "text": "Why is a result using mean bond enthalpies only approximate?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Bond length is the equilibrium distance between the nuclei of two bonded atoms. Bond enthalpy is the enthalpy needed to break one mole of a specified covalent bond in the gas phase by homolytic fission. Breaking bonds is endothermic; making the same bonds releases energy."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is bond breaking endothermic?",
      "answer": "Energy must be supplied to overcome the attraction holding the bonded atoms together."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "State the bond-enthalpy calculation rule.",
      "answer": "Approximate reaction enthalpy = sum of bond enthalpies for bonds broken minus sum for bonds formed."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "How does bond order affect C–C bond length?",
      "answer": "For the same two elements, higher bond order generally gives a shorter bond: triple shorter than double shorter than single."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why is a result using mean bond enthalpies only approximate?",
      "answer": "Mean values average a bond over different molecular environments; actual bond enthalpies depend on the compound."
    }
  ],
  "summaryText": "Bond length is the equilibrium distance between the nuclei of two bonded atoms. Bond enthalpy is the enthalpy needed to break one mole of a specified covalent bond in the gas phase by homolytic fission. Breaking bonds is endothermic; making the same bonds releases energy.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}],
  mentions: []
};
