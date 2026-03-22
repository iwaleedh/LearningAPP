/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 18
 * "Translations"
 */

export const note_mathematics_1_1_18 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/translations.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand and apply translation transformations of graphs: f(x) + a (vertical) and f(x + a) (horizontal); express translations using column vector notation.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Graph Translations', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'A <strong>translation</strong> moves every point on a graph the same distance in the same direction, without rotating, reflecting, or stretching it. Two types of translation can be applied to a function y = f(x): a change <em>outside</em> the function (vertical) and a change <em>inside</em> the function (horizontal).' },
            terms: []
        },
        {
            id: 'h-vertical',
            type: 'heading',
            data: { text: 'Vertical Translation: y = f(x) + a', level: 2 },
            terms: []
        },
        {
            id: 'p-vertical',
            type: 'paragraph',
            data: { text: 'Adding a constant <em>outside</em> the function — i.e. y = f(x) + a — translates the graph <strong>a units upward</strong> (positive a) or downward (negative a). Every point (x, y) on f(x) maps to (x, y + a). The shape and x-coordinates are unchanged; only the height changes.' },
            terms: []
        },
        {
            id: 'eq-vertical',
            type: 'equation',
            data: {
                html: 'f(x) + a &nbsp;&nbsp;→&nbsp;&nbsp; translation by vector &nbsp;<sup>⎛0⎞</sup><sub>⎝a⎠</sub>',
                caption: 'Vertical translation: a > 0 moves up; a < 0 moves down'
            },
            terms: []
        },
        {
            id: 'h-horizontal',
            type: 'heading',
            data: { text: 'Horizontal Translation: y = f(x + a)', level: 2 },
            terms: []
        },
        {
            id: 'p-horizontal',
            type: 'paragraph',
            data: { text: 'Replacing x with (x + a) inside the function — i.e. y = f(x + a) — translates the graph <strong>a units to the left</strong> (positive a) or to the right (negative a). This is the <em>counterintuitive</em> result: f(x + 2) moves the graph LEFT by 2, not right. Every point (x, y) on f(x) maps to (x − a, y).' },
            terms: []
        },
        {
            id: 'eq-horizontal',
            type: 'equation',
            data: {
                html: 'f(x + a) &nbsp;&nbsp;→&nbsp;&nbsp; translation by vector &nbsp;<sup>⎛−a⎞</sup><sub>⎝ 0 ⎠</sub>',
                caption: 'Horizontal translation: a > 0 moves LEFT; a < 0 moves RIGHT'
            },
            terms: []
        },
        {
            id: 'key-both',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Summary of Translation Rules',
                text: '<strong>y = f(x) + a</strong> → translate (0, a): up by a if a > 0; down by |a| if a < 0<br/><strong>y = f(x + a)</strong> → translate (−a, 0): left by a if a > 0; right by |a| if a < 0<br/><br/>Remember the mnemonic: changes <em>inside</em> the bracket go the <em>opposite</em> direction.'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Vertical Translation',
                text: 'Starting from y = x², describe and sketch y = x² − 3.<br/><br/>y = f(x) − 3 → translation by vector (0, −3) → graph moves DOWN 3 units.<br/>• Vertex moves from (0, 0) to (0, −3).<br/>• x-intercepts: x² − 3 = 0 → x = ±√3.<br/>All other features identical to y = x².'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Horizontal Translation',
                text: 'Starting from y = x², describe and sketch y = (x − 2)².<br/><br/>y = f(x − 2) → a = −2, translation by vector (2, 0) → graph moves RIGHT 2 units.<br/>• Vertex moves from (0, 0) to (2, 0).<br/>• y-intercept: (0 − 2)² = 4 → (0, 4).'
            },
            terms: []
        },
        {
            id: 'svg-translation',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 210" style="width:100%;max-width:380px;display:block;margin:0 auto;"><defs><marker id="ah18" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l18{font-family:sans-serif;font-size:10px;fill:#374151}.h18{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g18{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="130" x2="285" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah18)"/><line x1="150" y1="205" x2="150" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah18)"/><polyline points="90,195 100,175 110,155 120,140 130,133 140,131 150,130 160,131 170,133 180,140 190,155 200,175 210,195" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,3" stroke-linejoin="round"/><polyline points="90,180 100,160 110,143 120,130 130,122 140,120 150,119 160,120 170,122 180,130 190,143 200,160 210,180" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><polyline points="150,195 160,175 170,155 180,140 190,133 200,131 210,130 220,131 230,133 240,140 250,155 260,175 270,195" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linejoin="round"/><circle cx="150" cy="130" r="4" fill="#374151"/><circle cx="150" cy="119" r="4" fill="#10b981"/><circle cx="210" cy="130" r="4" fill="#4f46e5"/><text x="80" y="125" class="l18">y = x²</text><text x="48" y="112" class="g18">y = x² + 1</text><text x="188" y="125" class="h18">y = (x\u22122)²</text><text x="278" y="144" class="l18">x</text><text x="155" y="12" class="l18">y</text><text x="153" y="143" class="l18">O</text></svg>',
                caption: 'y = x² (dashed, vertex at origin); y = x²+1 (green, translated up 1); y = (x−2)² (indigo, translated right 2)'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Most Common Mistake',
                text: '<strong>Horizontal direction is opposite to the sign inside the bracket.</strong><br/>y = f(x + 3) moves LEFT by 3 (not right).<br/>y = f(x − 5) moves RIGHT by 5 (not left).<br/><br/>Think of it as: the function reaches its original value when x = −3 (for f(x+3)), so the graph appears shifted left.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always state the translation as a column vector: e.g. "translation by ( 0 \\ −3 )".<br/>• If combining a horizontal and vertical translation: y = f(x + a) + b → vector (−a, b).<br/>• Key points (intercepts, vertex) must be transformed correctly — label them on the sketch.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Translations of y = f(x): f(x) + a moves the graph a units up (a > 0) or down (a < 0), vector (0, a). f(x + a) moves the graph a units LEFT (a > 0) or right (a < 0), vector (−a, 0). Changes inside the bracket go opposite to their sign — this is the key rule.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        },
        {
            id: 'callout-tip-2',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-both', prompt: 'What translation does y = f(x + 3) perform?' },
            { id: 'cue-2', blockId: 'key-both', prompt: 'What translation does y = f(x) − 5 perform?' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Describe how y = (x − 2)² differs from y = x². Where is the vertex?' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why does f(x + 3) move the graph LEFT rather than right?' },
            { id: 'cue-5', blockId: 'callout-tip', prompt: 'How do you express a combined horizontal and vertical translation as a column vector?' }
        ],
        summaryText: 'f(x)+a → up a (vector (0,a)). f(x+a) → left a (vector (−a,0)). Inside bracket: opposite direction. Combine: f(x+a)+b → vector (−a,b).',
        ready: true
    },
    evidence: []
};
