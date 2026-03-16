export const note_olevel_physics_1_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-5-1-moment-of-a-force.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define the moment of a force; use the moment formula M = Fd; identify the pivot and perpendicular distance; calculate moments in practical contexts.' },
    },
    {
      id: 'h-moment',
      type: 'heading',
      data: { text: 'The Moment of a Force', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Moment (Turning Effect)',
        text: 'The <strong>moment of a force</strong> (or torque) about a pivot is the measure of its turning effect.<br><br><strong>M = F × d</strong><br>M = moment (N·m), F = force (N), d = <em>perpendicular</em> distance from pivot to line of action of force (m)',
      },
    },
    {
      id: 'eq-moment',
      type: 'equation',
      data: {
        html: 'M = F × d',
        caption: 'M = moment (N·m or N·cm), F = force (N), d = perpendicular distance from pivot (m or cm)',
      },
    },
    {
      id: 'para-perp',
      type: 'paragraph',
      data: { text: 'The <strong>perpendicular distance</strong> is the shortest (right-angle) distance from the pivot to the line of action of the force — not necessarily the length of a rod or lever arm. If the force is not at 90° to the lever, the perpendicular component must be used.' },
    },
    {
      id: 'svg-moment',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="200" fill="#fff7ed" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Moment of a Force About a Pivot</text>
  <!-- Lever beam -->
  <rect x="60" y="100" width="300" height="10" fill="#92400e" rx="3"/>
  <!-- Pivot -->
  <polygon points="140,110 125,140 155,140" fill="#374151"/>
  <rect x="110" y="140" width="60" height="8" fill="#374151" rx="2"/>
  <text x="140" y="155" text-anchor="middle" font-size="11" fill="#374151">Pivot</text>
  <!-- Force arrow (down) on right end -->
  <line x1="330" y1="110" x2="330" y2="70" stroke="#ef4444" stroke-width="3"/>
  <polygon points="330,70 326,80 334,80" fill="#ef4444"/>
  <text x="342" y="88" font-size="11" fill="#ef4444">F = 20 N</text>
  <!-- Distance label -->
  <line x1="140" y1="80" x2="330" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="140" y1="75" x2="140" y2="85" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="330" y1="75" x2="330" y2="85" stroke="#2563eb" stroke-width="1.5"/>
  <text x="235" y="74" text-anchor="middle" font-size="11" fill="#2563eb">d = 0.5 m (perpendicular)</text>
  <!-- Calculation -->
  <rect x="60" y="162" width="320" height="28" fill="#fef3c7" rx="6"/>
  <text x="220" y="180" text-anchor="middle" font-size="12" fill="#92400e">M = F × d = 20 × 0.5 = 10 N·m  (anticlockwise)</text>
  <!-- Clockwise and anticlockwise label -->
  <path d="M 100 100 A 30 30 0 0 1 140 75" fill="none" stroke="#16a34a" stroke-width="2"/>
  <polygon points="140,75 133,80 138,87" fill="#16a34a"/>
  <text x="65" y="88" font-size="10" fill="#16a34a">ACW</text>
</svg>`,
        caption: 'M = F × d. Perpendicular distance from pivot. Anticlockwise moment = 10 N·m here.',
      },
    },
    {
      id: 'h-direction',
      type: 'heading',
      data: { text: 'Clockwise and Anticlockwise Moments', level: 2 },
    },
    {
      id: 'para-direction',
      type: 'paragraph',
      data: { text: 'Moments have a rotational direction — <strong>clockwise (CW)</strong> or <strong>anticlockwise (ACW)</strong>. When working with a lever or beam, forces on the left of the pivot often create anticlockwise moments, and forces on the right create clockwise moments (or vice versa, depending on direction of force).' },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A spanner of effective length 0.3 m has a force of 60 N applied perpendicular to it. What moment does it exert on a bolt?<br><br>M = F × d = 60 × 0.3 = <strong>18 N·m</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: "Perpendicular" is Critical',
        text: 'The formula is M = F × <em>perpendicular</em> distance. If a force is applied at an angle to the lever, only the component perpendicular to the lever (or equivalently, the perpendicular distance to the line of action) is used.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Moment = force × perpendicular distance from pivot (M = Fd). Units: N·m. Moments can be clockwise (CW) or anticlockwise (ACW). The perpendicular distance is the shortest distance from the pivot to the line of action of the force.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'M = Fd; d must be perpendicular from pivot to line of action; units N·m.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the formula for the moment of a force, defining all symbols.', answer: 'M = F × d. M = moment (N·m), F = applied force (N), d = perpendicular distance from pivot to the line of action of force (m).' },
      { id: 'cue-2', blockId: 'eq-moment', prompt: 'A force of 50 N is applied at a perpendicular distance of 0.4 m from a pivot. Calculate the moment.', answer: 'M = F × d = 50 × 0.4 = 20 N·m.' },
      { id: 'cue-3', blockId: 'para-perp', prompt: 'Why must the distance used in M = Fd be perpendicular to the force?', answer: 'Only the perpendicular distance gives the true lever arm — the effective turning distance. Using a non-perpendicular distance gives an incorrectly large moment.' },
      { id: 'cue-4', blockId: 'call-worked', prompt: 'A door handle is 0.8 m from the hinges. A horizontal force of 15 N is applied perpendicular to the door. What moment opens the door?', answer: 'M = 15 × 0.8 = 12 N·m.' },
    ],
  },
  evidence: [],
  mentions: [],
};
