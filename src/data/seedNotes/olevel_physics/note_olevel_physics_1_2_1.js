export const note_olevel_physics_1_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-2-2-acceleration.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define acceleration as change in velocity per unit time; calculate acceleration using a = (v − u) / t; understand deceleration as negative acceleration; state the acceleration of free fall g ≈ 10 m/s².' },
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What is Acceleration?', level: 2 },
    },
    {
      id: 'para-def',
      type: 'paragraph',
      data: { text: '<strong>Acceleration</strong> is the rate of change of velocity. It is a <em>vector</em> quantity — it has both magnitude and direction. An object accelerates when it speeds up, slows down, or <em>changes direction</em> (even if its speed stays constant).' },
    },
    {
      id: 'call-key-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Acceleration',
        text: 'Acceleration = change in velocity ÷ time taken<br>a = (v − u) / t<br>where <em>u</em> = initial velocity, <em>v</em> = final velocity, <em>t</em> = time taken.<br><strong>Unit:</strong> m/s² (metres per second squared)',
      },
    },
    {
      id: 'eq-accel',
      type: 'equation',
      data: {
        html: 'a = <span class="nb-frac"><span class="nb-num">v − u</span><span class="nb-den">t</span></span>',
        caption: 'a = acceleration (m/s²), v = final velocity (m/s), u = initial velocity (m/s), t = time (s)',
      },
    },
    {
      id: 'h-decel',
      type: 'heading',
      data: { text: 'Deceleration', level: 2 },
    },
    {
      id: 'para-decel',
      type: 'paragraph',
      data: { text: '<strong>Deceleration</strong> (or retardation) occurs when an object slows down. Numerically, it is a <em>negative acceleration</em> — the acceleration acts in the opposite direction to the velocity. For example, if a car decelerates from 20 m/s to rest in 5 s: a = (0 − 20) / 5 = −4 m/s².' },
    },
    {
      id: 'svg-accel',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="200" fill="#0a2e1a" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Acceleration vs Deceleration</text>
  <!-- Acceleration scenario -->
  <rect x="20" y="50" width="170" height="70" fill="#0a2e1a" rx="6" stroke="#16a34a" stroke-width="1.5"/>
  <text x="105" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">Acceleration</text>
  <line x1="40" y1="100" x2="80" y2="100" stroke="#374151" stroke-width="2"/>
  <polygon points="80,100 70,95 70,105" fill="#374151"/>
  <text x="60" y="116" text-anchor="middle" font-size="10" fill="#374151">u = 10 m/s</text>
  <line x1="110" y1="100" x2="170" y2="100" stroke="#16a34a" stroke-width="3"/>
  <polygon points="170,100 158,94 158,106" fill="#16a34a"/>
  <text x="142" y="116" text-anchor="middle" font-size="10" fill="#15803d">v = 25 m/s</text>
  <text x="105" y="135" text-anchor="middle" font-size="11" fill="#15803d">a = +ve (speeds up)</text>
  <!-- Deceleration scenario -->
  <rect x="230" y="50" width="170" height="70" fill="#3d1212" rx="6" stroke="#dc2626" stroke-width="1.5"/>
  <text x="315" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">Deceleration</text>
  <line x1="250" y1="100" x2="310" y2="100" stroke="#374151" stroke-width="3"/>
  <polygon points="310,100 298,94 298,106" fill="#374151"/>
  <text x="278" y="116" text-anchor="middle" font-size="10" fill="#374151">u = 25 m/s</text>
  <line x1="320" y1="100" x2="360" y2="100" stroke="#dc2626" stroke-width="2"/>
  <polygon points="360,100 350,95 350,105" fill="#dc2626"/>
  <text x="342" y="116" text-anchor="middle" font-size="10" fill="#b91c1c">v = 5 m/s</text>
  <text x="315" y="135" text-anchor="middle" font-size="11" fill="#b91c1c">a = −ve (slows down)</text>
  <!-- Bottom note -->
  <text x="210" y="180" text-anchor="middle" font-size="11" fill="#64748b">Both are acceleration — deceleration is just negative (−ve) acceleration</text>
</svg>`,
        caption: 'Acceleration (positive) speeds an object up; deceleration (negative acceleration) slows it down',
      },
    },
    {
      id: 'h-freefall',
      type: 'heading',
      data: { text: 'Acceleration Due to Gravity', level: 2 },
    },
    {
      id: 'para-g',
      type: 'paragraph',
      data: { text: 'Near the Earth\'s surface, all objects in <strong>free fall</strong> (ignoring air resistance) accelerate downward at the same rate. This is the <strong>acceleration due to gravity</strong>, g ≈ <strong>10 m/s²</strong>. Every second an object falls, its downward velocity increases by 10 m/s.' },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> A train accelerates from rest to 30 m/s in 15 s. Calculate the acceleration.<br><br><strong>Step 1:</strong> List: u = 0 m/s, v = 30 m/s, t = 15 s<br><strong>Step 2:</strong> a = (v − u) / t = (30 − 0) / 15<br><strong>Answer: a = 2 m/s²</strong>',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Signs',
        text: 'Deceleration problems often give u > v. Substitute carefully and you will get a negative answer — this shows deceleration. If the question asks for "the deceleration", give the positive magnitude and state it is deceleration.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acceleration = (v − u) / t in m/s². Positive a = speeding up; negative a = decelerating. Objects in free fall near Earth accelerate at g = 10 m/s² downward. Acceleration is a vector quantity.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acceleration a = (v−u)/t in m/s²; deceleration is negative acceleration; g = 10 m/s².',
    cues: [
      { id: 'cue-1', blockId: 'eq-accel', prompt: 'Write the equation for acceleration and define all symbols.', answer: 'a = (v − u) / t; a = acceleration (m/s²), v = final velocity, u = initial velocity, t = time (s).' },
      { id: 'cue-2', blockId: 'para-decel', prompt: 'A car slows from 20 m/s to rest in 5 s. Find the acceleration.', answer: 'a = (0 − 20) / 5 = −4 m/s². The negative sign indicates deceleration.' },
      { id: 'cue-3', blockId: 'para-g', prompt: 'What is the acceleration due to gravity near Earth\'s surface?', answer: 'g ≈ 10 m/s² directed downward (toward Earth\'s centre).' },
      { id: 'cue-4', blockId: 'para-def', prompt: 'A car goes around a bend at constant speed. Is it accelerating? Explain.', answer: 'Yes — its direction is changing, so its velocity is changing, which means it is accelerating (centripetal acceleration toward the centre of the bend).' },
    ],
  },
  evidence: [],
  mentions: [],
};
