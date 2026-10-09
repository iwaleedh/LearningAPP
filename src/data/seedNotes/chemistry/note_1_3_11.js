/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 11
 * "Core Practical 2: Enthalpy change by calorimetry"
 * Source: Pearson Edexcel IAL Chemistry — Core Practical 2
 */
export const note_chemistry_1_3_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Describe calorimetry as preparation for Unit 2 Core Practical 2 (Hess’s law). Calculate enthalpy change using q = mcΔT and ΔH = −q/n. Identify sources of error and suggest improvements. Apply sign conventions for exothermic and endothermic reactions.' },
      terms: []
    },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Calorimetry: sign, amount and experimental error",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Calorimetry measures heat transferred to a solution or calorimeter. For a dilute aqueous mixture, q(solution) = mcΔT, using the total mass of solution and its measured temperature change. The reaction heat is opposite in sign: q(reaction) ≈ −q(solution). Divide by the amount reacting on the basis of the balanced equation, then convert J to kJ.<br/><br/>This is a useful calorimetry foundation. The Pearson IAL <strong>Core Practical 2 uses calorimetry together with Hess’s law</strong>; it is covered in the Unit 2 Hess’s law note. Neutralisation alone should not be labelled as the complete core practical. If the cup’s heat capacity is included, heat absorbed by the cup must be <em>added</em> to the heat absorbed by the solution before calculating reaction heat."
  }
},
{
      id: 'h1',
      type: 'heading',
      data: { text: 'Calorimetry Apparatus & Method', level: 2 },
      terms: []
    },
    {
      id: 'svg-apparatus',
      type: 'svg',
      data: {
        caption: 'Polystyrene cup calorimeter: minimises heat loss. Thermometer records ΔT. Lid (cardboard) reduces heat loss through top. Measured volumes of solutions added; temperature recorded every 30 s before and after mixing.',
        svg: `<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- Apparatus diagram (left) -->
  <rect x="5" y="5" width="310" height="258" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
  <text x="160" y="23" text-anchor="middle" fill="#0369a1" font-weight="bold" font-size="13">Calorimetry Apparatus</text>

  <!-- Polystyrene cup cross-section -->
  <!-- Outer cup -->
  <path d="M 70 220 L 55 100 L 265 100 L 250 220 Z" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <!-- Inner wall (double cup insulation) -->
  <path d="M 78 218 L 64 108 L 256 108 L 242 218 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
  <!-- Liquid in cup -->
  <path d="M 80 216 L 68 140 L 250 140 L 238 216 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1" opacity="0.8"/>
  <text x="160" y="185" text-anchor="middle" fill="#0369a1" font-size="10">reaction mixture</text>
  <text x="160" y="200" text-anchor="middle" fill="#0369a1" font-size="10">(measured vol. of solution)</text>

  <!-- Cardboard lid -->
  <rect x="50" y="88" width="220" height="15" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="160" y="100" text-anchor="middle" fill="#854d0e" font-size="9">cardboard lid (reduces heat loss)</text>

  <!-- Thermometer -->
  <rect x="153" y="30" width="14" height="80" rx="3" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5"/>
  <rect x="155" y="90" width="10" height="30" rx="2" fill="#f87171"/>
  <text x="188" y="52" fill="#be123c" font-size="9.5">thermometer</text>
  <line x1="167" y1="52" x2="185" y2="52" stroke="#be123c" stroke-width="1"/>

  <!-- Glass rod -->
  <rect x="98" y="35" width="8" height="95" rx="2" fill="#d1d5db" stroke="#6b7280" stroke-width="1"/>
  <text x="58" y="55" fill="#374151" font-size="9.5">glass rod</text>
  <line x1="97" y1="55" x2="82" y2="58" stroke="#374151" stroke-width="1"/>

  <!-- Labels -->
  <text x="35" y="115" fill="#0369a1" font-size="9.5">polystyrene</text>
  <text x="35" y="128" fill="#0369a1" font-size="9.5">cup</text>
  <line x1="63" y1="125" x2="74" y2="128" stroke="#0369a1" stroke-width="1"/>

  <!-- ΔT annotation -->
  <line x1="270" y1="138" x2="290" y2="120" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="270" y1="216" x2="290" y2="216" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="290" y1="120" x2="290" y2="216" stroke="#dc2626" stroke-width="2"/>
  <polygon points="283,120 290,105 297,120" fill="#dc2626"/>
  <polygon points="283,216 290,231 297,216" fill="#dc2626"/>
  <text x="295" y="170" fill="#dc2626" font-weight="bold" font-size="12">ΔT</text>

  <!-- Method steps -->
  <rect x="5" y="225" width="310" height="35" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <text x="160" y="239" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="10">Method Summary</text>
  <text x="160" y="254" text-anchor="middle" fill="#374151" font-size="9">Measure volumes → record T every 30 s → mix → record T until constant</text>

  <!-- Formula Card (right panel) -->
  <rect x="328" y="5" width="345" height="258" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="500" y="24" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="13">Calculation Formula Card</text>

  <!-- q = mcΔT box -->
  <rect x="338" y="35" width="325" height="60" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="500" y="55" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="18">q = m c ΔT</text>
  <text x="338+12" y="75" fill="#374151" font-size="10">q = heat energy (J)    m = mass of solution (g)    c = 4.18 J g⁻¹ K⁻¹    ΔT = T_final − T_initial</text>

  <!-- ΔH box -->
  <rect x="338" y="105" width="325" height="50" rx="6" fill="#fde68a" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="500" y="126" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="16">ΔH = −q / n</text>
  <text x="500" y="146" text-anchor="middle" fill="#374151" font-size="10">n = moles of limiting reagent   ΔH in kJ mol⁻¹ (divide q by 1000)</text>

  <!-- Sign convention -->
  <rect x="338" y="165" width="325" height="55" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="500" y="183" text-anchor="middle" fill="#166534" font-weight="bold" font-size="11">Sign Convention</text>
  <text x="345" y="200" fill="#374151" font-size="10">• Temperature RISES → exothermic → q &gt; 0 → ΔH &lt; 0 (negative)</text>
  <text x="345" y="215" fill="#374151" font-size="10">• Temperature FALLS → endothermic → q &lt; 0 → ΔH &gt; 0 (positive)</text>

  <!-- Errors & improvements -->
  <rect x="338" y="228" width="325" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
  <text x="500" y="243" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="10">Key Error Sources</text>
  <text x="500" y="257" text-anchor="middle" fill="#374151" font-size="9">Heat loss to surroundings • Inaccurate temp. reading • Not accounting for heat capacity of cup</text>
</svg>`
      },
      terms: ['Calorimetry', 'Enthalpy change', 'Specific heat capacity']
    },
    {
      id: 'worked-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Enthalpy of Neutralisation',
        text: '<strong>Experiment:</strong> 25.0 cm³ of 1.00 mol dm⁻³ HCl added to 25.0 cm³ of 1.00 mol dm⁻³ NaOH. Temperature rises from 21.5°C to 28.4°C.<br/><br/><strong>Step 1: Calculate q</strong><br/>m = (25.0 + 25.0) g = 50.0 g (assume density 1.00 g cm⁻³)<br/>ΔT = 28.4 − 21.5 = 6.9 K<br/>q = 50.0 × 4.18 × 6.9 = <strong>1442 J = 1.442 kJ</strong><br/><br/><strong>Step 2: Calculate moles of limiting reagent</strong><br/>n(HCl) = c × V = 1.00 × 0.0250 = 0.0250 mol (equal moles NaOH — either is limiting)<br/><br/><strong>Step 3: Calculate ΔH</strong><br/>ΔH = −q/n = −1.442/0.0250 = <strong>−57.7 kJ mol⁻¹</strong><br/><br/>Negative sign → exothermic ✓ (temperature rose). Literature value: −57.3 kJ mol⁻¹.'
      },
      terms: ['Enthalpy of neutralisation', 'Moles']
    },
    {
      id: 'key-errors',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Sources of Error & Improvements',
        text: '<strong>Error 1: Heat loss to surroundings</strong><br/>→ Improvement: Use a lid; use polystyrene (low heat capacity) rather than glass beaker; plot temperature-time graph and extrapolate back to mixing time.<br/><br/><strong>Error 2: Heat capacity of calorimeter ignored</strong><br/>→ Improvement: Calibrate the calorimeter; include heat absorbed by the cup in the total heat transferred.<br/><br/><strong>Error 3: Assuming density = 1.00 g cm⁻³ and c = 4.18 J g⁻¹ K⁻¹</strong><br/>→ These are valid assumptions for dilute aqueous solutions; state them explicitly in the write-up.<br/><br/><strong>Error 4: Temperature not read at the exact mixing time</strong><br/>→ Improvement: Record temperature every 30 s for 2 min before mixing, then continue; extrapolate the cooling curve back to t = 0 (mixing time) to get ΔT_max.'
      },
      terms: ['Systematic error', 'Extrapolation']
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Mix 25.0 cm³ of 1.00 mol dm⁻³ acid with 25.0 cm³ of 1.00 mol dm⁻³ alkali. Assuming density 1.00 g cm⁻³ gives m = 50.0 g. A 6.9 K rise gives q(solution) = 50.0 × 4.18 × 6.9 = 1442 J. For 0.0250 mol of water formed, ΔH = −1.442/0.0250 = <strong>−57.7 kJ mol⁻¹</strong>. If the apparatus also absorbs heat, the measured solution-only value is usually less negative than the true exothermic value."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Use the combined solution mass, not just one portion. For an exothermic reaction, heat loss gives a smaller temperature rise and an enthalpy magnitude that is too small. Extrapolating a cooling curve corrects heat exchange approximately, not every experimental error."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Why is ΔH negative when the solution temperature rises?",
        "checked": false
      },
      {
        "text": "Which mass is used in q = mcΔT for two mixed solutions?",
        "checked": false
      },
      {
        "text": "How should heat absorbed by the cup be included?",
        "checked": false
      },
      {
        "text": "What extra principle is central to IAL Core Practical 2?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Calorimetry measures heat transferred to a solution or calorimeter. For a dilute aqueous mixture, q(solution) = mcΔT, using the total mass of solution and its measured temperature change. The reaction heat is opposite in sign: q(reaction) ≈ −q(solution). Divide by the amount reacting on the basis of the balanced equation, then convert J to kJ."
  }
}
  ],

  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Why is ΔH negative when the solution temperature rises?",
      "answer": "The reaction releases energy; the solution gains that energy, so reaction heat is the negative of solution heat."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Which mass is used in q = mcΔT for two mixed solutions?",
      "answer": "The total mass of the mixed solution, estimated from total volume and density when appropriate."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "How should heat absorbed by the cup be included?",
      "answer": "Add cup heat to solution heat to estimate total heat released by the reaction, then change sign and divide by the reacting amount."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What extra principle is central to IAL Core Practical 2?",
      "answer": "Hess’s law: combine enthalpy changes for alternative routes with the same initial and final states."
    }
  ],
  "summaryText": "Calorimetry measures heat transferred to a solution or calorimeter. For a dilute aqueous mixture, q(solution) = mcΔT, using the total mass of solution and its measured temperature change. The reaction heat is opposite in sign: q(reaction) ≈ −q(solution). Divide by the amount reacting on the basis of the balanced equation, then convert J to kJ.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}],
  mentions: []
};
