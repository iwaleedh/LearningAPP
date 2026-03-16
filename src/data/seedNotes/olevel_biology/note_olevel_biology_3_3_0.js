export const note_olevel_biology_3_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/3 Movement Into And Out Of Cells/3-1-1-diffusion-in-biology.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define diffusion, describe the factors that affect its rate, and apply diffusion to biological examples such as gas exchange in the lungs and nutrient absorption in the intestine.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Diffusion?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Diffusion',
        text: '<strong>Diffusion</strong> is the net movement of particles (molecules or ions) from a region of <strong>higher concentration</strong> to a region of <strong>lower concentration</strong> (down a concentration gradient), until equilibrium is reached.<br/><br/>Diffusion is a <strong>passive process</strong> — it requires <strong>no energy</strong> (no ATP). Particles move due to their own random kinetic energy.'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Diffusion occurs across <strong>partially permeable membranes</strong> (such as cell membranes) and in gases and liquids. The steeper the concentration gradient (greater the difference in concentration), the faster the rate of diffusion.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Diffusion — particles moving from high to low concentration across a membrane',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="500" height="240" fill="#f0f9ff" rx="12"/>
  <!-- Title -->
  <text x="250" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Diffusion Across a Membrane</text>
  <!-- Membrane -->
  <rect x="230" y="36" width="18" height="180" fill="#94a3b8" rx="3"/>
  <text x="239" y="228" text-anchor="middle" font-size="9" fill="#475569">Partially permeable membrane</text>
  <!-- HIGH concentration side -->
  <text x="115" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">HIGH concentration</text>
  <!-- Many dots on left -->
  <circle cx="60" cy="80" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="100" cy="70" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="80" cy="105" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="140" cy="85" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="55" cy="130" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="120" cy="120" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="170" cy="110" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="90" cy="150" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="150" cy="155" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="65" cy="170" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="110" cy="175" r="8" fill="#3b82f6" opacity="0.8"/>
  <circle cx="175" cy="160" r="8" fill="#3b82f6" opacity="0.8"/>
  <!-- LOW concentration side -->
  <text x="375" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">LOW concentration</text>
  <!-- Few dots on right -->
  <circle cx="290" cy="85" r="8" fill="#3b82f6" opacity="0.5"/>
  <circle cx="360" cy="130" r="8" fill="#3b82f6" opacity="0.5"/>
  <circle cx="420" cy="90" r="8" fill="#3b82f6" opacity="0.5"/>
  <!-- Arrows showing net movement -->
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
  </defs>
  <line x1="200" y1="100" x2="248" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow)"/>
  <line x1="200" y1="130" x2="248" y2="130" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow)"/>
  <line x1="200" y1="160" x2="248" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow)"/>
  <text x="190" y="195" text-anchor="middle" font-size="10" fill="#dc2626">Net movement →</text>
  <text x="190" y="208" text-anchor="middle" font-size="10" fill="#dc2626">(down concentration gradient)</text>
  <!-- No energy label -->
  <rect x="290" y="185" width="170" height="28" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="375" y="203" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">No energy (ATP) required</text>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Factors Affecting the Rate of Diffusion', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Factors affecting diffusion rate and their effects',
        headers: ['Factor', 'Effect on Diffusion Rate', 'Explanation'],
        rows: [
          ['Concentration gradient', 'Greater gradient → faster rate', 'More particles available to move; greater difference drives faster net movement'],
          ['Distance (diffusion path length)', 'Shorter distance → faster rate', 'Particles have less far to travel; thin membranes allow faster diffusion'],
          ['Surface area', 'Larger surface area → faster rate', 'More membrane available for particles to cross simultaneously'],
          ['Temperature', 'Higher temperature → faster rate', 'Particles have more kinetic energy and move faster'],
          ['Size of molecule', 'Smaller molecule → faster rate', 'Smaller particles can move through the membrane more easily']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Biological Examples of Diffusion', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Gas exchange in alveoli:</strong> O₂ diffuses from alveoli (high O₂) into blood (low O₂); CO₂ diffuses from blood (high CO₂) into alveoli (low CO₂) — both move down their concentration gradients.' },
          { text: '<strong>Glucose absorption in small intestine:</strong> Glucose diffuses from the intestine lumen (high concentration after digestion) into the blood (lower concentration).' },
          { text: '<strong>CO₂ exchange in leaves:</strong> CO₂ diffuses from the air through stomata into leaf cells during photosynthesis; O₂ diffuses out.' },
          { text: '<strong>Oxygen delivery to cells:</strong> O₂ diffuses from capillaries (high O₂) into respiring cells (low O₂, constantly consuming O₂).' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not say particles move "to an area of low concentration". The correct phrasing is: particles move <strong>FROM a region of high concentration TO a region of low concentration</strong> (down the concentration gradient). Also, diffusion requires <strong>no energy</strong> — do not say it requires ATP.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If asked to explain why diffusion is fast in a particular organ (e.g. alveoli or villi), use these keywords: <strong>large surface area</strong>, <strong>thin membrane</strong> (short diffusion distance), <strong>steep concentration gradient</strong> (maintained by blood flow).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Diffusion is the net movement of particles from high to low concentration (down the concentration gradient) without energy. Rate is increased by a steeper gradient, larger surface area, shorter distance, higher temperature, and smaller molecules. Examples: O₂/CO₂ exchange in lungs; glucose absorption in small intestine.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Diffusion: net movement of particles from high to low concentration, no energy needed. Rate increases with steeper gradient, larger surface area, shorter distance, higher temperature.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define diffusion.',
        answer: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration (down a concentration gradient), requiring no energy.'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-1',
        prompt: 'State THREE factors that increase the rate of diffusion.',
        answer: 'Steeper concentration gradient, larger surface area, and shorter diffusion distance (also: higher temperature, smaller molecule size).'
      },
      {
        id: 'cue-3',
        blockId: 'list-1',
        prompt: 'Explain how O₂ moves from alveoli into the blood by diffusion.',
        answer: 'O₂ concentration in alveoli is high; O₂ concentration in the blood is low (used up by respiration). O₂ diffuses down its concentration gradient from alveoli into blood, through the thin alveolar and capillary walls.'
      },
      {
        id: 'cue-4',
        blockId: 'call-2',
        prompt: 'Does diffusion require energy? Explain.',
        answer: 'No. Diffusion is a passive process — particles move using their own random kinetic energy, down the concentration gradient. No ATP is needed.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_3_3_0;
