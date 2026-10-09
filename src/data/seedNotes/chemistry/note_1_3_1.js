/**
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
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Explain each ionic property from the lattice",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Ionic compounds have a regular three-dimensional arrangement of positive and negative ions. Many strong electrostatic attractions must be overcome to melt the lattice, so melting temperatures are usually high. A solid does not conduct because its ions are held in fixed positions. When molten, or dissolved in water if soluble, ions move and carry charge.<br/><br/>Ionic crystals are brittle: a displaced layer can place like charges beside one another, causing repulsion and the crystal to fracture. Dissolving is different from melting. Polar water molecules can surround ions and form ion–dipole attractions, but the balance of lattice disruption, hydration and entropy determines solubility. Some ionic substances, including AgCl and BaSO₄, are poorly soluble in water."
  }
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
        svg: `<svg viewBox="0 -16 680 336" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">
  <!-- NaCl side header -->
  <text x="170" y="18" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">NaCl — Rock Salt Structure (6:6)</text>

  <!-- NaCl lattice grid 4×4 alternating -->
  <!-- Row 0: Na Cl Na Cl -->
  <circle cx="60" cy="55" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="59" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="120" cy="55" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="59" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="180" cy="55" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="59" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="240" cy="55" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="240" y="59" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <!-- Row 1: Cl Na Cl Na -->
  <circle cx="60" cy="120" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="60" y="124" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="120" cy="120" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="124" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <circle cx="180" cy="120" r="19" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="180" y="124" text-anchor="middle" fill="white" font-size="9">Cl⁻</text>
  <circle cx="240" cy="120" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="240" y="124" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
  <!-- Row 2: Na Cl Na Cl -->
  <circle cx="60" cy="185" r="15" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="189" text-anchor="middle" fill="white" font-size="9">Na⁺</text>
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
  <text x="150" y="295" text-anchor="middle" fill="#374151" font-size="10">Co-ord number = 6</text>
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
  <circle cx="355" cy="80" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.8"/>
  <text x="355" cy="84" text-anchor="middle" fill="#0f172a" font-size="8" style="fill:#0f172a">Cl⁻</text>
  <circle cx="445" cy="80" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="445" y="84" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="355" cy="190" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="355" y="194" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="445" cy="190" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="445" y="194" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="395" cy="50" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5" opacity="0.8"/>
  <text x="395" y="54" text-anchor="middle" fill="white" font-size="8">Cl⁻</text>
  <circle cx="485" cy="50" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
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
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Compare NaCl(s), NaCl(l) and NaCl(aq). The solid contains ions but they cannot move, so it does not conduct. The molten salt conducts by movement of Na⁺ and Cl⁻. Aqueous NaCl also conducts because hydrated Na⁺ and Cl⁻ ions move through the solution. Melting changes mobility, not the existence of ions."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not say an ionic solid has no charged particles, or that every ionic compound dissolves in water. Both statements are false."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is the melting point of an ionic compound usually high?",
        "checked": false
      },
      {
        "text": "Why does solid NaCl not conduct?",
        "checked": false
      },
      {
        "text": "Why are ionic crystals brittle?",
        "checked": false
      },
      {
        "text": "Does ionic bonding guarantee water solubility?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Ionic compounds have a regular three-dimensional arrangement of positive and negative ions. Many strong electrostatic attractions must be overcome to melt the lattice, so melting temperatures are usually high. A solid does not conduct because its ions are held in fixed positions. When molten, or dissolved in water if soluble, ions move and carry charge."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is the melting point of an ionic compound usually high?",
      "answer": "A large amount of energy is needed to overcome strong electrostatic attractions between oppositely charged ions throughout the lattice."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why does solid NaCl not conduct?",
      "answer": "Its charged ions are fixed in lattice positions and cannot move to carry current."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why are ionic crystals brittle?",
      "answer": "When layers shift, like charges can become adjacent; repulsion causes the crystal to split."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Does ionic bonding guarantee water solubility?",
      "answer": "No. Solubility depends on the balance of lattice disruption, hydration and entropy; AgCl and BaSO₄ are poorly soluble."
    }
  ],
  "summaryText": "Ionic compounds have a regular three-dimensional arrangement of positive and negative ions. Many strong electrostatic attractions must be overcome to melt the lattice, so melting temperatures are usually high. A solid does not conduct because its ions are held in fixed positions. When molten, or dissolved in water if soluble, ions move and carry charge.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}],
  mentions: []
};
