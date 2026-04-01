export const note_olevel_biology_11_11_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/11 Gas Exchange In Humans/11-1-4-ventilation-and-breathing-mechanisms.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the mechanisms of inspiration and expiration; explain how rib and diaphragm movements change thoracic volume and pressure to move air in and out of the lungs.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What Is Ventilation?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ventilation vs Gas Exchange',
        text: '<strong>Ventilation</strong> (breathing) is the mechanical process of moving air <em>into</em> and <em>out of</em> the lungs — it is not the same as gas exchange.<br/><strong>Gas exchange</strong> is the diffusion of O₂ and CO₂ between alveolar air and blood.<br/><br/>Ventilation <em>maintains the concentration gradients</em> needed for gas exchange by continuously refreshing the air in the alveoli.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Physical Principle', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Air movement in and out of the lungs depends on pressure differences. Air moves from <strong>high pressure to low pressure</strong>. The lungs cannot move by themselves — they are moved passively by changes in thoracic (chest) volume caused by muscles.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Volume ↑ → Pressure ↓ → Air flows in</strong> (inspiration)' },
          { text: '<strong>Volume ↓ → Pressure ↑ → Air flows out</strong> (expiration)' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Inspiration (Breathing In)', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mechanism of Inspiration',
        text: '1. <strong>Diaphragm contracts</strong> → flattens downward → increases vertical dimension of thorax<br/>2. <strong>External intercostal muscles contract</strong> → pull ribs upward and outward → increases horizontal dimension of thorax<br/>3. <strong>Volume of thoracic cavity increases</strong><br/>4. <strong>Pressure inside lungs drops below atmospheric pressure</strong><br/>5. <strong>Air rushes into lungs</strong> down the pressure gradient (high outside → low inside)<br/><br/>This is an <strong>active process</strong> — requires muscular contraction and energy (ATP).'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Expiration (Breathing Out)', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mechanism of Expiration',
        text: '1. <strong>Diaphragm relaxes</strong> → returns to dome shape → decreases vertical dimension of thorax<br/>2. <strong>External intercostal muscles relax</strong> (gravity pulls ribs downward and inward) → decreases horizontal dimension of thorax<br/>3. <strong>Volume of thoracic cavity decreases</strong><br/>4. <strong>Pressure inside lungs rises above atmospheric pressure</strong><br/>5. <strong>Air is pushed out of lungs</strong> down the pressure gradient (high inside → low outside)<br/><br/>This is largely a <strong>passive process</strong> (at rest) — muscles relax and elastic recoil of lungs helps push air out. During <em>forced</em> expiration (e.g. exercising), internal intercostal muscles actively contract to further lower ribs.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary: changes during inspiration and expiration',
        headers: ['Feature', 'Inspiration (breathing in)', 'Expiration (breathing out)'],
        rows: [
          ['Diaphragm', 'Contracts → flattens', 'Relaxes → domes upward'],
          ['External intercostal muscles', 'Contract', 'Relax'],
          ['Internal intercostal muscles', 'Relax', 'Relax (or contract in forced expiration)'],
          ['Rib movement', 'Move upward and outward', 'Move downward and inward'],
          ['Thoracic volume', 'Increases', 'Decreases'],
          ['Pressure inside lungs', 'Decreases (below atmospheric)', 'Increases (above atmospheric)'],
          ['Air movement', 'Into lungs', 'Out of lungs'],
          ['Active or passive?', 'Active (muscles contract)', 'Largely passive at rest; active in forced expiration']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Rib and diaphragm movements during inspiration and expiration',
        svg: `<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="680" height="340" fill="#0f172a" rx="12"/>
  <text x="340" y="26" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Breathing Mechanics — Inspiration vs Expiration</text>
  <!-- INSPIRATION panel -->
  <rect x="15" y="38" width="310" height="280" rx="10" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="170" y="58" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">INSPIRATION</text>
  <!-- Rib cage inspiration (wider) -->
  <!-- Spine -->
  <rect x="160" y="75" width="12" height="170" rx="3" fill="#94a3b8"/>
  <!-- Ribs (angled upward/outward) -->
  <path d="M168 90 Q110 100 90 130" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M168 110 Q108 122 88 154" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M168 130 Q106 144 86 178" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M168 150 Q104 166 84 202" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M168 170 Q102 188 82 226" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Sternum -->
  <path d="M90 130 L84 226" stroke="#94a3b8" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Diaphragm flat -->
  <path d="M82 240 Q125 248 166 245 Q207 248 248 240" stroke="#1d4ed8" stroke-width="3" fill="none"/>
  <text x="170" y="263" text-anchor="middle" font-size="9" fill="#1d4ed8">Diaphragm flat (contracted)</text>
  <!-- Lung outline (tall) -->
  <ellipse cx="132" cy="185" rx="44" ry="72" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5" opacity="0.7"/>
  <!-- Arrows: ribs out and up -->
  <line x1="88" y1="158" x2="62" y2="140" stroke="#16a34a" stroke-width="2" marker-end="url(#insp)"/>
  <text x="36" y="138" text-anchor="middle" font-size="8" fill="#16a34a">Up &amp;</text>
  <text x="36" y="149" text-anchor="middle" font-size="8" fill="#16a34a">out</text>
  <!-- Arrow: diaphragm down -->
  <line x1="167" y1="252" x2="167" y2="268" stroke="#1d4ed8" stroke-width="2" marker-end="url(#purp)"/>
  <text x="195" y="274" text-anchor="start" font-size="8" fill="#1d4ed8">Diaphragm</text>
  <text x="195" y="285" text-anchor="start" font-size="8" fill="#1d4ed8">moves down</text>
  <!-- Volume up label -->
  <rect x="200" y="120" width="108" height="50" rx="6" fill="#1c3a64" stroke="#93c5fd" stroke-width="1"/>
  <text x="254" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Volume ↑</text>
  <text x="254" y="154" text-anchor="middle" font-size="9" fill="#1d4ed8">Pressure ↓</text>
  <text x="254" y="166" text-anchor="middle" font-size="9" fill="#1d4ed8">Air flows IN →</text>
  <!-- EXPIRATION panel -->
  <rect x="355" y="38" width="310" height="280" rx="10" fill="#4a1040" stroke="#db2777" stroke-width="1.5"/>
  <text x="510" y="58" text-anchor="middle" font-size="13" font-weight="bold" fill="#831843">EXPIRATION</text>
  <!-- Spine -->
  <rect x="500" y="75" width="12" height="170" rx="3" fill="#94a3b8"/>
  <!-- Ribs (angled downward/inward) -->
  <path d="M502 90 Q454 96 438 118" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M502 110 Q452 118 436 142" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M502 130 Q450 140 434 166" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M502 150 Q448 162 432 190" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M502 170 Q446 184 430 214" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Sternum -->
  <path d="M436 118 L430 214" stroke="#94a3b8" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Diaphragm domed up -->
  <path d="M428 228 Q472 208 506 214 Q540 208 576 228" stroke="#1d4ed8" stroke-width="3" fill="none"/>
  <text x="508" y="248" text-anchor="middle" font-size="9" fill="#1d4ed8">Diaphragm domed (relaxed)</text>
  <!-- Lung outline (shorter) -->
  <ellipse cx="472" cy="175" rx="38" ry="60" fill="#4a1040" stroke="#db2777" stroke-width="1.5" opacity="0.7"/>
  <!-- Arrow: ribs down and in -->
  <line x1="432" y1="165" x2="408" y2="182" stroke="#dc2626" stroke-width="2" marker-end="url(#exp)"/>
  <text x="376" y="176" text-anchor="middle" font-size="8" fill="#dc2626">Down</text>
  <text x="376" y="187" text-anchor="middle" font-size="8" fill="#dc2626">&amp; in</text>
  <!-- Arrow: diaphragm up -->
  <line x1="507" y1="222" x2="507" y2="208" stroke="#1d4ed8" stroke-width="2" marker-end="url(#purp2)"/>
  <!-- Volume down label -->
  <rect x="540" y="120" width="108" height="50" rx="6" fill="#4a1040" stroke="#f9a8d4" stroke-width="1"/>
  <text x="594" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#831843">Volume ↓</text>
  <text x="594" y="154" text-anchor="middle" font-size="9" fill="#831843">Pressure ↑</text>
  <text x="594" y="166" text-anchor="middle" font-size="9" fill="#831843">Air flows OUT ←</text>
  <defs>
    <marker id="insp" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#16a34a"/></marker>
    <marker id="purp" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#1d4ed8"/></marker>
    <marker id="exp" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker>
    <marker id="purp2" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#1d4ed8"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Measuring Breathing', level: 2 }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'info',
        title: 'Lung Volumes — Key Terms',
        text: '<strong>Tidal volume:</strong> Volume of air inhaled or exhaled in one normal breath at rest (~0.5 L).<br/><strong>Breathing rate:</strong> Number of breaths per minute (normal at rest ~12–16 breaths/min).<br/><strong>Vital capacity:</strong> Maximum volume of air that can be inhaled then exhaled in one breath (~4–5 L).<br/><strong>Residual volume:</strong> Air remaining in lungs after maximum exhalation (~1.5 L) — prevents alveoli from collapsing.<br/><br/>During exercise: tidal volume and breathing rate both increase to deliver more O₂ to muscles and remove more CO₂.'
      }
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Muscle Actions',
        text: 'A common exam question: "Which muscles contract during inspiration?" Answer: <strong>diaphragm + external intercostal muscles</strong>. For quiet expiration at rest: <strong>both relax</strong> (passive). For forced expiration: <strong>internal intercostal muscles contract</strong>. Emphasise that the lungs themselves contain no muscle — they expand and recoil passively.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Inspiration: diaphragm contracts (flattens) + external intercostals contract (ribs up and out) → thoracic volume increases → pressure decreases → air enters. Expiration (at rest): diaphragm and intercostals relax → thoracic volume decreases → pressure increases → air exits. Air moves from high to low pressure. Ventilation maintains concentration gradients for gas exchange in the alveoli.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Inspiration: diaphragm + external intercostals contract → volume ↑ → pressure ↓ → air in. Expiration (rest): muscles relax → volume ↓ → pressure ↑ → air out.',
    cues: [
      { id: 'cue-1', blockId: 'call-2', prompt: 'Describe the sequence of events that causes air to enter the lungs during inspiration.', answer: '1. Diaphragm contracts and flattens. 2. External intercostal muscles contract, pulling ribs upward and outward. 3. Thoracic volume increases. 4. Pressure inside lungs falls below atmospheric pressure. 5. Air rushes in down the pressure gradient.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Compare the movements of the diaphragm and ribs during inspiration and expiration.', answer: 'Inspiration: diaphragm contracts/flattens; ribs move up and out. Expiration: diaphragm relaxes/domes up; ribs move down and in. Both changes increase (inspiration) or decrease (expiration) thoracic volume.' },
      { id: 'cue-3', blockId: 'call-3', prompt: 'Why is quiet expiration described as passive but forced expiration as active?', answer: 'In quiet expiration, the diaphragm and external intercostals simply relax — no contraction is needed; the elastic recoil of the lungs and gravity lower the ribs. In forced expiration (exercise), internal intercostal muscles actively contract to further lower the ribs and push more air out quickly.' },
      { id: 'cue-4', blockId: 'call-4', prompt: 'Why does a person never fully empty their lungs? What is the term for air that always remains?', answer: 'The residual volume (~1.5 L) always remains in the lungs even after maximum exhalation. This prevents the alveoli from completely collapsing (which would make re-inflation very difficult and damage alveolar walls).' },
      { id: 'cue-5', blockId: 'call-1', prompt: 'Distinguish between ventilation and gas exchange. How does ventilation support gas exchange?', answer: 'Ventilation is the mechanical movement of air in and out of the lungs (breathing). Gas exchange is the diffusion of O₂ and CO₂ between alveolar air and blood. Ventilation supports gas exchange by continuously refreshing alveolar air — replenishing O₂ and removing CO₂ — maintaining the steep concentration gradients needed for rapid diffusion.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_11_11_3;
