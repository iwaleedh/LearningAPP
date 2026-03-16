export const note_olevel_biology_11_11_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/11 Gas Exchange In Humans/11-1-3-gas-exchange-in-the-lungs.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how oxygen and carbon dioxide are exchanged across the alveolar surface; explain the role of concentration gradients maintained by ventilation and blood flow; compare the composition of inhaled and exhaled air.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Structure of an Alveolus', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Alveolus — Adapted for Gas Exchange',
        text: 'Each <strong>alveolus</strong> (plural: alveoli) is a tiny air sac (~200 µm in diameter) at the end of a bronchiole. Adaptations for gas exchange:<br/>• <strong>Thin wall</strong> — one cell thick (squamous epithelium) → short diffusion distance (~0.2 µm total to capillary)<br/>• <strong>Large number</strong> — ~700 million alveoli → total surface area ~70 m²<br/>• <strong>Moist lining</strong> — gases dissolve in moisture before diffusing through the membrane<br/>• <strong>Dense capillary network</strong> — every alveolus is surrounded by pulmonary capillaries (also one cell thick) → O₂ quickly enters blood, CO₂ quickly leaves'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Cross-section of an alveolus and surrounding capillary showing gas exchange by diffusion',
        svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="640" height="340" fill="#f8fafc" rx="12"/>
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Gas Exchange at an Alveolus</text>
  <!-- Alveolus -->
  <ellipse cx="230" cy="175" rx="110" ry="110" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="230" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Alveolus</text>
  <text x="230" y="162" text-anchor="middle" font-size="10" fill="#1d4ed8">(air space)</text>
  <!-- O2 in alveolus -->
  <circle cx="188" cy="190" r="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="188" y="194" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">O₂</text>
  <circle cx="215" cy="202" r="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="215" y="206" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">O₂</text>
  <circle cx="245" cy="196" r="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="245" y="200" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">O₂</text>
  <!-- CO2 in alveolus (lower) -->
  <circle cx="210" cy="218" r="7" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="210" y="222" text-anchor="middle" font-size="7" font-weight="bold" fill="#4338ca">CO₂</text>
  <!-- Alveolar wall (thin line) -->
  <ellipse cx="230" cy="175" rx="110" ry="110" fill="none" stroke="#93c5fd" stroke-width="6"/>
  <text x="108" y="155" text-anchor="end" font-size="9" fill="#1d4ed8">Alveolar</text>
  <text x="108" y="166" text-anchor="end" font-size="9" fill="#1d4ed8">wall (1 cell</text>
  <text x="108" y="177" text-anchor="end" font-size="9" fill="#1d4ed8">thick)</text>
  <line x1="120" y1="168" x2="120" y2="168"/>
  <!-- Capillary -->
  <path d="M340 100 Q370 130 380 175 Q370 220 340 250" stroke="#ef4444" stroke-width="24" fill="none" stroke-linecap="round" opacity="0.25"/>
  <path d="M340 100 Q370 130 380 175 Q370 220 340 250" stroke="#ef4444" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="410" y="168" text-anchor="start" font-size="11" font-weight="bold" fill="#991b1b">Pulmonary</text>
  <text x="410" y="182" text-anchor="start" font-size="11" font-weight="bold" fill="#991b1b">Capillary</text>
  <text x="410" y="196" text-anchor="start" font-size="9" fill="#64748b">(one cell thick)</text>
  <!-- Deoxygenated blood arrow in -->
  <line x1="380" y1="98" x2="380" y2="118" stroke="#b91c1c" stroke-width="2" marker-end="url(#down)"/>
  <text x="400" y="110" font-size="9" fill="#b91c1c">Deoxygenated blood</text>
  <text x="400" y="122" font-size="9" fill="#b91c1c">(low O₂, high CO₂)</text>
  <!-- Oxygenated blood arrow out -->
  <line x1="355" y1="240" x2="355" y2="260" stroke="#dc2626" stroke-width="2" marker-end="url(#down)"/>
  <text x="373" y="252" font-size="9" fill="#dc2626">Oxygenated blood</text>
  <text x="373" y="264" font-size="9" fill="#dc2626">(high O₂, low CO₂)</text>
  <!-- Diffusion arrows: O2 from alveolus to capillary -->
  <line x1="340" y1="185" x2="362" y2="175" stroke="#16a34a" stroke-width="2.5" marker-end="url(#ox)"/>
  <line x1="340" y1="195" x2="362" y2="188" stroke="#16a34a" stroke-width="2.5" marker-end="url(#ox)"/>
  <text x="347" y="162" text-anchor="middle" font-size="9" fill="#15803d" font-weight="bold">O₂ diffuses in</text>
  <!-- Diffusion arrows: CO2 from capillary to alveolus -->
  <line x1="362" y1="210" x2="342" y2="216" stroke="#6366f1" stroke-width="2.5" marker-end="url(#co2)"/>
  <text x="358" y="235" text-anchor="middle" font-size="9" fill="#4338ca" font-weight="bold">CO₂ diffuses out</text>
  <!-- Moisture label -->
  <text x="230" y="295" text-anchor="middle" font-size="9" fill="#0369a1" font-style="italic">Moist surface — gases dissolve before diffusing</text>
  <!-- Thin wall label -->
  <text x="310" y="170" font-size="8" fill="#64748b">~0.2 µm</text>
  <text x="305" y="181" font-size="8" fill="#64748b">diffusion</text>
  <text x="308" y="192" font-size="8" fill="#64748b">distance</text>
  <defs>
    <marker id="down" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#b91c1c"/></marker>
    <marker id="ox" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#16a34a"/></marker>
    <marker id="co2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#6366f1"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Direction of Gas Exchange', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Gas exchange by diffusion always occurs down a <strong>concentration gradient</strong> — from a region of higher concentration to a region of lower concentration. No energy (ATP) is used; it is a passive process.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Oxygen (O₂):</strong> High concentration in alveolar air → low concentration in blood entering capillaries (blood has used O₂ for respiration in body tissues). O₂ diffuses from alveolus into blood.' },
          { text: '<strong>Carbon dioxide (CO₂):</strong> High concentration in blood arriving from body tissues (CO₂ is a waste product of aerobic respiration) → low concentration in alveolar air. CO₂ diffuses from blood into alveolus, then is exhaled.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Maintaining Concentration Gradients', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'info',
        title: 'How Gradients Are Maintained',
        text: 'For efficient gas exchange, the concentration gradients must be maintained — otherwise diffusion would slow and stop when concentrations equalise on both sides.<br/><br/><strong>Ventilation (breathing)</strong> continuously replaces alveolar air: O₂ is replenished and CO₂ is expelled, keeping O₂ concentration high and CO₂ concentration low in the alveoli.<br/><br/><strong>Blood flow</strong> continuously carries oxygenated blood away from alveoli and brings deoxygenated blood in, keeping O₂ concentration low and CO₂ concentration high in the blood at the gas exchange surface.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Composition of Inhaled vs Exhaled Air', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Approximate composition of inhaled (atmospheric) and exhaled air',
        headers: ['Gas', 'Inhaled air (%)', 'Exhaled air (%)', 'Explanation'],
        rows: [
          ['Oxygen (O₂)', '21%', '16%', 'Some O₂ is absorbed into the blood for aerobic respiration in cells'],
          ['Carbon dioxide (CO₂)', '0.04%', '4%', 'CO₂ produced by cellular respiration passes from blood into exhaled air'],
          ['Nitrogen (N₂)', '79%', '79%', 'Not involved in metabolism; passes through unchanged'],
          ['Water vapour (H₂O)', 'Variable (low)', 'High (~saturation)', 'Water evaporates from moist alveolar and airway walls; exhaled air is nearly saturated'],
          ['Temperature', 'Ambient', 'Higher (~37°C)', 'Air is warmed to body temperature as it passes through airways']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Key Numbers to Remember',
        text: 'Examiners frequently test: inhaled O₂ ≈ <strong>21%</strong>, exhaled O₂ ≈ <strong>16%</strong>. Inhaled CO₂ ≈ <strong>0.04%</strong>, exhaled CO₂ ≈ <strong>4%</strong>. Nitrogen stays at <strong>79%</strong> in both. Exhaled air is always <strong>warmer</strong> and <strong>more humid</strong> than inhaled air.'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Exhaled Air Still Contains Oxygen',
        text: 'Exhaled air is <strong>not pure CO₂</strong>. It still contains ~16% O₂ — only 5% less than inhaled air. This is why mouth-to-mouth resuscitation works: there is still sufficient oxygen in exhaled breath to supply the casualty\'s blood. Never say "we breathe out only CO₂" — this is incorrect.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Gas exchange in the alveoli: O₂ diffuses from alveoli (high concentration) → blood (low concentration); CO₂ diffuses from blood (high concentration) → alveoli (low concentration). Both are passive diffusion. Gradients are maintained by ventilation (refreshes alveolar air) and blood flow. Exhaled air has less O₂ (~16%), much more CO₂ (~4%), and more water vapour than inhaled air.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'O₂: alveoli → blood (diffusion). CO₂: blood → alveoli (diffusion). Gradients maintained by breathing + blood flow. Exhaled: 16% O₂, 4% CO₂, high humidity.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'List four structural features of an alveolus that make it efficient for gas exchange.', answer: 'Thin wall (one cell thick) for short diffusion distance; large number (~700 million) giving large total surface area (~70 m²); moist lining so gases dissolve; dense surrounding capillary network to maintain concentration gradients and transport gases.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'In which direction do oxygen and carbon dioxide diffuse at the alveolus? Explain why.', answer: 'O₂ diffuses from alveolus into blood — O₂ concentration is higher in alveolar air than in deoxygenated blood arriving. CO₂ diffuses from blood into alveolus — CO₂ concentration is higher in blood (from cellular respiration) than in alveolar air.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'How do ventilation and blood flow maintain concentration gradients for gas exchange?', answer: 'Ventilation continuously replenishes O₂ and removes CO₂ from alveolar air, keeping O₂ high and CO₂ low there. Blood flow continuously brings deoxygenated blood (low O₂, high CO₂) and removes oxygenated blood, keeping O₂ low and CO₂ high in blood at the exchange surface.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Give the approximate % of O₂ and CO₂ in inhaled and exhaled air and explain the differences.', answer: 'Inhaled: O₂ ~21%, CO₂ ~0.04%. Exhaled: O₂ ~16%, CO₂ ~4%. O₂ decreases because it is absorbed into the blood for respiration. CO₂ increases because it is a waste product of cellular respiration that diffuses from blood into alveolar air.' },
      { id: 'cue-5', blockId: 'call-4', prompt: 'Why does exhaled air still contain oxygen? What is the practical importance of this?', answer: 'Not all O₂ in inhaled air is absorbed — ~16% remains in exhaled air. This is important because it means expired air can be used in mouth-to-mouth resuscitation; the recipient still receives enough O₂ to sustain life.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_11_11_2;
