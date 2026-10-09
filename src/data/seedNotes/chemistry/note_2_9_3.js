/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 3
 * "Maxwell-Boltzmann distribution and Temperature"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.3
 */
export const note_chemistry_2_9_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand qualitatively, in terms of the Maxwell-Boltzmann distribution of molecular energies, how changes in temperature affect the rate of a reaction.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Read areas on a Maxwell–Boltzmann distribution",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "The horizontal axis is molecular energy and the vertical axis represents the number or fraction of molecules in an energy interval. The total area represents the total number or fraction of molecules, so it is unchanged when comparing the same sample at different temperatures. The curve begins at the origin and approaches, but does not cross, the energy axis at high energies.<br/><br/>At higher temperature, the peak becomes lower and shifts towards higher energy; the distribution spreads out. The area beyond the fixed activation energy becomes larger, so a greater fraction of collisions can react. A catalyst leaves the distribution unchanged at a given temperature and moves the activation-energy threshold to a lower value."
  }
},
{
            id: 'h-maxwell',
            type: 'heading',
            data: { text: 'The Maxwell-Boltzmann Distribution', level: 2 },
            terms: []
        },
        {
            id: 'p-maxwell',
            type: 'paragraph',
            data: { text: 'In any gas or liquid, particles are moving at different speeds and thus have different kinetic energies. A <strong>Maxwell-Boltzmann distribution curve</strong> plots the number of molecules (or fraction of molecules) against their kinetic energy.' },
            terms: ['Maxwell-Boltzmann distribution']
        },
        {
            id: 'list-features',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'The curve starts at the origin (0,0) because no molecules have zero energy.',
                    'The peak represents the <strong>most probable energy</strong>.',
                    'The average (mean) energy is slightly to the right of the peak.',
                    'The curve never touches the x-axis at high energies; there is no maximum limit to the energy a particle can have.',
                    'The total area under the curve represents the total number of molecules.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-activation',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Activation Energy on the Curve',
                text: 'We can mark the activation energy (E_a) as a vertical line on the x-axis. Only the area under the curve to the <strong>right</strong> of E_a belongs to molecules that have enough energy to react when they collide.'
            },
            terms: []
        },
        {
            id: 'svg-maxwell-boltzmann',
            type: 'svg',
            data: {
                caption: 'Maxwell-Boltzmann Distribution with Activation Energy',
                svg: `<svg viewBox="0 0 413 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="260" x2="380" y2="260" stroke="#333" stroke-width="2" />
  <line x1="40" y1="260" x2="40" y2="20" stroke="#333" stroke-width="2" />
  <text x="15" y="150" font-family="Arial" font-size="14" transform="rotate(-90 15,150)" fill="#777">Number of particles</text>
  <text x="210" y="280" font-family="Arial" font-size="14" fill="#777">Energy</text>

  <path d="M 40 260 Q 80 50 140 150 T 360 255" stroke="var(--color-primary)" stroke-width="3" fill="none" />

  <line x1="260" y1="260" x2="260" y2="100" stroke="var(--color-text)" stroke-width="2" stroke-dasharray="4" />
  <text x="265" y="90" font-family="Arial" font-size="14" fill="var(--color-text)">Activation Energy (Ea)</text>

  <path d="M 260 215 Q 310 240 360 255 L 360 260 L 260 260 Z" fill="rgba(8, 145, 178, 0.4)" />
  <text x="270" y="240" font-family="Arial" font-size="12" fill="var(--color-text)">Particles with</text>
  <text x="270" y="255" font-family="Arial" font-size="12" fill="var(--color-text)">enough energy</text>
</svg>`
            },
            terms: []
        },
        {
            id: 'h-temperature',
            type: 'heading',
            data: { text: 'Effect of Changing Temperature', level: 2 },
            terms: []
        },
        {
            id: 'list-temperature-effect',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'As a rough approximation, for many reactions near room temperature, the <strong>rate of reaction doubles for every 10&deg;C rise</strong> in temperature.',
                    'Heating a substance makes particles move faster, which increases the overall <strong>collision frequency</strong>.',
                    'However, this effect is negligible (e.g., a 10&deg;C rise only increases collision frequency by about 1.7%).',
                    'The <em>primary</em> reason rates increase is the <strong>key importance of activation energy</strong>.',
                    'When temperature increases, the peak of the Maxwell-Boltzmann curve moves to the <strong>right</strong> and becomes <strong>lower and flatter</strong> (while total area remains constant).',
                    'This causes a <strong>disproportionately large increase</strong> in the area under the curve to the right of the Activation Energy (E_a).',
                    'A significantly larger <strong>proportion of particles</strong> now possess energy greater than or equal to E_a.',
                    'This directly results in a massive increase in the <strong>frequency of successful collisions</strong>.'
                ]
            },
            terms: ['Proportion of molecules']
        },
        {
            id: 'svg-maxwell-temperature',
            type: 'svg',
            data: {
                svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Axes -->
  <line x1="60" y1="300" x2="550" y2="300" stroke="#333" stroke-width="2" />
  <line x1="60" y1="300" x2="60" y2="40" stroke="#333" stroke-width="2" />

  <text x="-220" y="30" font-family="-apple-system, sans-serif" font-size="14" transform="rotate(-90)" fill="#64748b">Number of particles</text>
  <text x="290" y="340" font-family="-apple-system, sans-serif" font-size="14" fill="#64748b">Energy</text>

  <!-- Activation Energy Line -->
  <line x1="380" y1="300" x2="380" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" />
  <text x="360" y="50" font-family="-apple-system, sans-serif" font-size="14" fill="#ef4444" font-weight="bold">Activation Energy (Ea)</text>

  <!-- Shaded Area for Temperature T (Original) -->
  <path d="M 380 238 Q 440 270 520 295 L 520 300 L 380 300 Z" fill="#3b82f6" fill-opacity="0.5" />
  <!-- Additional Shaded Area for Temperature T+t (Higher) -->
  <path d="M 380 185 Q 460 230 540 280 L 540 300 L 380 300 Z" fill="#f59e0b" fill-opacity="0.6" />

  <!-- Curve T (Original Temperature) -->
  <!-- Starts at origin, peaks high and early, tails off fast -->
  <path d="M 60 300 Q 110 50 170 120 T 380 238 Q 440 270 520 295" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="200" y="110" font-family="-apple-system, sans-serif" font-size="16" fill="#2563eb" font-weight="bold">Temperature T</text>

  <!-- Curve T+t (Higher Temperature) -->
  <!-- Peak moves right and down, flatter tail, crosses T curve -->
  <path d="M 60 300 Q 160 80 230 160 T 380 185 Q 460 230 540 280" fill="none" stroke="#d97706" stroke-width="3" />
  <text x="260" y="160" font-family="-apple-system, sans-serif" font-size="16" fill="#d97706" font-weight="bold">Temperature T + t</text>

  <!-- Labels for shaded areas -->
  <rect x="390" y="120" width="180" height="40" fill="#1e293b" fill-opacity="0.9" rx="4"/>
  <text x="400" y="135" font-family="-apple-system, sans-serif" font-size="12" fill="#f8fafc" style="fill:#f8fafc">Yellow area represents the</text>
  <text x="400" y="150" font-family="-apple-system, sans-serif" font-size="12" fill="#f8fafc" style="fill:#f8fafc">proportional increase in</text>
  <text x="400" y="165" font-family="-apple-system, sans-serif" font-size="12" fill="#ef4444">capable particles at higher T</text>
  <path d="M 430 170 L 415 200" stroke="#ef4444" stroke-width="1.5" />
  <polygon points="410,195 415,200 420,195" fill="#ef4444" />
</svg>`,
                caption: 'At higher temperatures, the curve broadens and the peak shifts right. The area under the curve beyond the activation energy increases hugely, significantly increasing the reaction rate.'
            },
            terms: []
        }  ,
    {
      "id": "callout-injected-0",
      "type": "callout",
      "data": {
        "style": "warning",
        "title": "Drawing Maxwell-Boltzmann",
        "text": "Your Maxwell-Boltzmann curve must start exactly at the origin (0,0) - because no particles have zero energy. It should never touch the x-axis again at higher energies as there is no maximum energy limit."
      }
    }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "On two equal-area curves, draw the same Eₐ line for a temperature comparison. Shade the area to its right. The hotter curve has the larger shaded fraction. For a catalyst comparison, keep one distribution and draw a second Eₐ line to the left; more molecules now exceed the lower barrier."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "The curve’s peak is not the activation energy. A catalyst does not “give molecules more energy”, and temperature does not make the total area grow for a fixed number of molecules."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What does the total area under the curve represent?",
        "checked": false
      },
      {
        "text": "What changes when temperature rises?",
        "checked": false
      },
      {
        "text": "What changes when a catalyst is added at fixed temperature?",
        "checked": false
      },
      {
        "text": "Why is the area beyond Eₐ important?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "The horizontal axis is molecular energy and the vertical axis represents the number or fraction of molecules in an energy interval. The total area represents the total number or fraction of molecules, so it is unchanged when comparing the same sample at different temperatures. The curve begins at the origin and approaches, but does not cross, the energy axis at high energies."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What does the total area under the curve represent?",
      "answer": "The total number of molecules, or total fraction when normalised."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "What changes when temperature rises?",
      "answer": "The peak becomes lower and shifts right; the high-energy tail and fraction above Eₐ increase."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "What changes when a catalyst is added at fixed temperature?",
      "answer": "The energy distribution stays the same, but the alternative pathway has a lower Eₐ threshold."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why is the area beyond Eₐ important?",
      "answer": "It represents molecules with sufficient energy for successful collisions on that pathway."
    }
  ],
  "summaryText": "The horizontal axis is molecular energy and the vertical axis represents the number or fraction of molecules in an energy interval. The total area represents the total number or fraction of molecules, so it is unchanged when comparing the same sample at different temperatures. The curve begins at the origin and approaches, but does not cross, the energy axis at high energies.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_9_3;
