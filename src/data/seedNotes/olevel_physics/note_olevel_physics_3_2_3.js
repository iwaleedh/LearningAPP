export const note_olevel_physics_3_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-4-lenses.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the action of converging and diverging lenses on parallel rays. Define principal focus, focal length and optical centre. Use the key terms correctly in diagrams.' },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Lenses', level: 2 },
    },
    {
      id: 'para-converging',
      type: 'paragraph',
      data: { text: 'A <strong>converging (convex) lens</strong> is thicker in the middle than at the edges. It refracts parallel rays so that they converge to a <strong>real principal focus (F)</strong> on the far side of the lens. Converging lenses can form real images and are used in cameras, projectors and magnifying glasses.' },
    },
    {
      id: 'para-diverging',
      type: 'paragraph',
      data: { text: 'A <strong>diverging (concave) lens</strong> is thinner in the middle than at the edges. It refracts parallel rays so that they appear to diverge from a <strong>virtual principal focus (F)</strong> on the same side as the incoming rays. Diverging lenses always form virtual, upright, diminished images and are used in spectacles for short-sightedness.' },
    },
    {
      id: 'h-terms',
      type: 'heading',
      data: { text: 'Key Lens Terminology', level: 2 },
    },
    {
      id: 'tbl-terms',
      type: 'comparisonTable',
      data: {
        caption: 'Lens terminology definitions',
        headers: ['Term', 'Definition'],
        rows: [
          ['Optical centre (O)', 'The central point of the lens; rays through O pass straight through without bending'],
          ['Principal axis', 'A line through the optical centre perpendicular to the lens'],
          ['Principal focus (F)', 'The point where rays parallel to the principal axis converge (converging) or appear to diverge from (diverging)'],
          ['Focal length (f)', 'Distance from the optical centre to the principal focus; shorter f = more powerful lens'],
          ['2F', 'Point at twice the focal length from the lens (important for ray diagram object positions)'],
        ],
      },
    },
    {
      id: 'svg-converging',
      type: 'svg',
      data: {
        caption: 'Converging lens focusing parallel rays to a real principal focus F',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 240" width="480" height="240">
  <defs>
    <marker id="ah23" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <line x1="30" y1="120" x2="450" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <text x="452" y="124" fill="#94a3b8" font-size="10">axis</text>
  <path d="M240,30 Q260,120 240,210" stroke="#0e7490" stroke-width="3.5" fill="none"/>
  <path d="M240,30 Q220,120 240,210" stroke="#0e7490" stroke-width="3.5" fill="none"/>
  <text x="245" y="220" fill="#0e7490" font-weight="bold">Converging</text>
  <text x="252" y="232" fill="#0e7490" font-weight="bold">lens</text>
  <line x1="35" y1="60" x2="240" y2="60" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <line x1="240" y1="60" x2="360" y2="120" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <line x1="35" y1="120" x2="240" y2="120" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <line x1="240" y1="120" x2="360" y2="120" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <line x1="35" y1="180" x2="240" y2="180" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <line x1="240" y1="180" x2="360" y2="120" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23)"/>
  <circle cx="360" cy="120" r="5" fill="#ef4444"/>
  <text x="353" y="112" fill="#ef4444" font-weight="bold">F</text>
  <line x1="360" y1="112" x2="360" y2="128" stroke="#ef4444" stroke-width="1.5"/>
  <text x="350" y="145" fill="#ef4444" font-size="10">real focus</text>
  <circle cx="120" cy="120" r="5" fill="#94a3b8"/>
  <text x="108" y="112" fill="#64748b">F</text>
  <line x1="240" y1="108" x2="240" y2="132" stroke="#64748b" stroke-width="1.5"/>
  <text x="220" y="106" fill="#64748b" font-size="10">O</text>
  <line x1="120" y1="108" x2="120" y2="132" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="120" y1="120" x2="360" y2="120" stroke="#374151" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="225" y="138" fill="#374151" font-size="10">f</text>
  <text x="305" y="138" fill="#374151" font-size="10">f</text>
</svg>`,
      },
    },
    {
      id: 'svg-diverging',
      type: 'svg',
      data: {
        caption: 'Diverging lens spreading parallel rays — virtual focus F is on the same side as the incoming rays',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" width="480" height="220">
  <defs>
    <marker id="ah23d" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
    <marker id="ad23" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#94a3b8"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <line x1="30" y1="110" x2="450" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <path d="M240,25 Q220,110 240,195" stroke="#0e7490" stroke-width="3.5" fill="none"/>
  <path d="M240,25 Q260,110 240,195" stroke="#0e7490" stroke-width="3.5" fill="none"/>
  <text x="245" y="210" fill="#0e7490" font-weight="bold">Diverging lens</text>
  <line x1="35" y1="55" x2="240" y2="55" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="240" y1="55" x2="430" y2="85" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="240" y1="55" x2="130" y2="110" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#ad23)"/>
  <line x1="35" y1="110" x2="240" y2="110" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="240" y1="110" x2="430" y2="110" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="35" y1="165" x2="240" y2="165" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="240" y1="165" x2="430" y2="135" stroke="#6366f1" stroke-width="2" marker-end="url(#ah23d)"/>
  <line x1="240" y1="165" x2="130" y2="110" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#ad23)"/>
  <circle cx="130" cy="110" r="5" fill="#ef4444"/>
  <text x="105" y="103" fill="#ef4444" font-weight="bold">F</text>
  <text x="96" y="127" fill="#ef4444" font-size="10">virtual focus</text>
</svg>`,
      },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Converging vs diverging lenses',
        headers: ['Property', 'Converging (convex)', 'Diverging (concave)'],
        rows: [
          ['Shape', 'Thicker in middle', 'Thinner in middle'],
          ['Effect on parallel rays', 'Bends toward axis → converge', 'Bends away from axis → diverge'],
          ['Principal focus', 'Real (on far side)', 'Virtual (on near side)'],
          ['Possible image types', 'Real (inverted) or virtual (upright)', 'Always virtual, upright, diminished'],
          ['Common use', 'Camera, projector, magnifying glass', 'Spectacles for short-sightedness'],
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A converging lens is NOT always a "magnifying glass". It only acts as a magnifier when the object is inside F. For objects beyond F, converging lenses form real, inverted images.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Converging (convex) lenses are thicker in the middle; they refract parallel rays to a real focus. Diverging (concave) lenses are thinner in the middle; parallel rays appear to diverge from a virtual focus. Key terms: optical centre (O), principal focus (F), focal length (f), principal axis.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Converging lens → parallel rays meet at real F. Diverging lens → parallel rays appear to come from virtual F. Focal length = O to F.',
    cues: [
      { id: 'cue-1', blockId: 'para-converging', prompt: 'What is a converging lens and what does it do to parallel rays?', answer: 'A converging (convex) lens is thicker in the middle. It refracts parallel rays so they converge to a real point called the principal focus F on the far side of the lens.' },
      { id: 'cue-2', blockId: 'tbl-terms', prompt: 'Define focal length and the principal axis.', answer: 'Focal length (f): distance from the optical centre to the principal focus. Principal axis: a straight line through the optical centre perpendicular to the lens.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What type of image does a diverging lens always produce?', answer: 'A diverging lens always produces a virtual, upright, and diminished image, regardless of where the object is placed.' },
      { id: 'cue-4', blockId: 'svg-converging', prompt: 'What is the difference between a real and virtual principal focus?', answer: 'A real focus is where rays actually converge (converging lens, on far side). A virtual focus is where diverging rays appear to come from — rays do not actually pass through it (diverging lens, on near side).' },
    ],
  },
  evidence: [],
  mentions: [],
};
