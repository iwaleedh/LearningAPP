export const note_physics_2_13_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Refraction</strong> & Refractive Index" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Refraction</strong> & Refractive Index", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Refraction</strong> & Refractive Index <strong>Refraction</strong> & Refractive Index <strong>Refraction</strong> occurs when light passes a boundary between two different transparent media" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "At the boundary, the rays of light undergo a change in direction and a change in speed The change in direction is caused by the change in speed Entering a more dense medium slows the light down and it bends towards the normal" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "In the denser medium there are more particles closer together providing more friction to the passing of the light through the material Entering a less dense medium speeds the light up and it bends away from the normal" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "When passing along the normal (perpendicular) the light does not direction Its speed does still change, as it is passing through a medium with a different refractive index <strong>Refraction</strong> of light through a glass block" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "Calculating Refractive Index The refractive index, n, is a property of a material which measures how much light slows down when passing through it Where:" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "c = the speed of light in a vacuum (m s) v = the speed of light in a substance (m s) Light travels at different speeds within different substances depending on their refractive index" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "A material with a high refractive index is called optically dense, such material causes light to travel slower Since the speed of light in a substance will always be less than the speed of light in a vacuum, the value of the n is always greater than 1" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "In calculations, the refractive index of air can be taken to be approximately 1 This is because light does not slow down significantly when travelling through air (as opposed to travelling through a vacuum) Snell's Law" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Snell's law relates the angle of incidence to the angle of <strong>refraction</strong>, it is given by: n sin θ = n sin θ Where: n = the refractive index of material 1" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "n = the refractive index of material 2 θ = the angle of incidence of the ray in material 1 (°) θ = the angle of <strong>refraction</strong> of the ray in material 2 (°) –1" }] } },

  
    {
      id: "svg-101",
      type: "svg",
      data: {
        caption: "Refraction of light at an air-glass boundary: light bends toward the normal when entering a denser medium",
        svg: "<svg viewBox='0 0 400 170' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='170' fill='#0f172a' rx='8'/><text x='200' y='14' font-family='sans-serif' font-size='11' font-weight='bold' fill='#1e293b' text-anchor='middle'>Refraction at Air-Glass Boundary</text><!-- Boundary --><line x1='0' y1='88' x2='400' y2='88' stroke='#64748b' stroke-width='2'/><!-- Medium labels --><text x='30' y='70' font-family='sans-serif' font-size='11' fill='#475569'>Air (n=1.0)</text><rect x='0' y='88' width='400' height='82' fill='#1e3a8a' opacity='0.4'/><text x='30' y='115' font-family='sans-serif' font-size='11' fill='#1d4ed8'>Glass (n=1.5)</text><!-- Normal (dashed) --><line x1='200' y1='10' x2='200' y2='165' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='5,3'/><text x='208' y='18' font-family='sans-serif' font-size='9' fill='#64748b'>Normal</text><!-- Incident ray --><line x1='120' y1='20' x2='200' y2='88' stroke='#f59e0b' stroke-width='2.5' marker-end='url(#ref-arr)'/><defs><marker id='ref-arr' markerWidth='6' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#f59e0b'/></marker><marker id='ref-arr2' markerWidth='6' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#22c55e'/></marker><marker id='ref-arr3' markerWidth='6' markerHeight='6' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#f59e0b'/></marker></defs><!-- Refracted ray (steeper) --><line x1='200' y1='88' x2='250' y2='160' stroke='#22c55e' stroke-width='2.5' marker-end='url(#ref-arr2)'/><!-- Partial reflection --><line x1='200' y1='88' x2='280' y2='20' stroke='#f59e0b' stroke-width='1' stroke-dasharray='4' opacity='0.5' marker-end='url(#ref-arr3)'/><!-- Angle arcs and labels --><path d='M200,88 m0,-30 a30,30 0 0,0 -24,18' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='166' y='67' font-family='sans-serif' font-size='11' fill='#f59e0b'>&#952;&#8321;</text><path d='M200,88 m0,25 a25,25 0 0,1 16,18' fill='none' stroke='#22c55e' stroke-width='1.5'/><text x='214' y='125' font-family='sans-serif' font-size='11' fill='#22c55e'>&#952;&#8322;</text><!-- Formula --><rect x='290' y='32' width='100' height='48' fill='#1e293b' rx='5' stroke='#3b82f6' stroke-width='1.5'/><text x='340' y='50' font-family='sans-serif' font-size='10' fill='#1e40af' text-anchor='middle' font-weight='bold'>n&#8321;sin&#952;&#8321;=n&#8322;sin&#952;&#8322;</text><text x='340' y='65' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>Snell's Law</text><text x='340' y='76' font-family='sans-serif' font-size='9' fill='#475569' text-anchor='middle'>&#952;&#8322; &lt; &#952;&#8321; (denser)</text></svg>"
      },
      terms: []
    },
    {
      id: "enr-svg-refraction",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:8px;font-family:sans-serif;">
  <defs>
    <marker id="snell-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0 0 L0 6 L8 3 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect x="0" y="148" width="440" height="152" fill="#1e3a5f"/>
  <line x1="0" y1="148" x2="440" y2="148" stroke="#64748b" stroke-width="2"/>
  <line x1="220" y1="10" x2="220" y2="290" stroke="#475569" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="228" y="22" fill="#94a3b8" font-size="11">Normal</text>
  <line x1="115" y1="35" x2="217" y2="146" stroke="#facc15" stroke-width="2.5" marker-end="url(#snell-arr)"/>
  <line x1="222" y1="150" x2="296" y2="278" stroke="#34d399" stroke-width="2.5" marker-end="url(#snell-arr)"/>
  <line x1="220" y1="148" x2="325" y2="35" stroke="#facc15" stroke-width="1" stroke-dasharray="3 3" opacity="0.4"/>
  <text x="186" y="115" fill="#532407" font-size="14">θ₁</text>
  <text x="237" y="218" fill="#34d399" font-size="14">θ₂</text>
  <text x="16" y="95" fill="#1e293b" font-size="13">Air  n₁ = 1.0</text>
  <text x="16" y="215" fill="#1250a0" font-size="13">Glass  n₂ = 1.5</text>
  <text x="358" y="75" fill="#0f172a" font-size="12" text-anchor="middle">n₁sinθ₁ = n₂sinθ₂</text>
  <text x="358" y="95" fill="#94a3b8" font-size="11" text-anchor="middle">Snell's Law</text>
</svg>`,
        caption: "Snell's Law: light bends toward normal when entering denser medium"
      }
    },
    {
      id: "enr-worked-snell",
      type: "callout",
      data: {
        style: "worked",
        title: "Worked Example: Snell's Law",
        text: "Glass (n=1.5): light strikes surface at θ₁=40°. sinθ₂=n₁sinθ₁/n₂=1.0×sin40°/1.5=0.643/1.5=0.429. θ₂=25.4°. Angle decreases → bends toward normal when entering denser medium. Swimming pool looks shallower because light bends at water–air boundary — real depth 2.5 m appears as apparent depth 2.5/1.33=1.88 m."
      }
    },
    {
      id: "enr-tip-snell",
      type: "callout",
      data: {
        style: "tip",
        title: "Exam Tip: Snell's Law",
        text: "Snell's Law: n₁sinθ₁=n₂sinθ₂. Light bends TOWARD normal when entering denser medium (n increases). Light bends AWAY from normal when entering less dense medium. Angles always measured from the NORMAL, not the surface."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Angles Measured from Normal, NOT from Surface",
        text: "Critical error: Students measure angles from the surface instead of from the normal. Snell's law states: n\u2081 sin \u03b8\u2081 = n\u2082 sin \u03b8\u2082, where \u03b8 is always measured perpendicular to the boundary. Measuring from the surface gives sin(90\u00b0 \u2212 \u03b8) and produces completely wrong answers."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Refractive Index Sign Convention",
        text: "When light enters a denser medium, it bends toward the normal (\u03b8 decreases). Memorise: denser \u2192 bend toward normal, less dense \u2192 bend away. This visual check helps catch calculation errors in exam work."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Refraction</strong> & Refractive Index' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
