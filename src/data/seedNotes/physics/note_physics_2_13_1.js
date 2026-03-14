export const note_physics_2_13_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Refraction & Refractive Index" } },
    { id: 'head-1', type: 'heading', data: { text: "Refraction & Refractive Index", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Refraction & Refractive Index Refraction & Refractive Index Refraction occurs when light passes a boundary between two different transparent media" } },
    { id: 'para-3', type: 'paragraph', data: { text: "At the boundary, the rays of light undergo a change in direction and a change in speed The change in direction is caused by the change in speed Entering a more dense medium slows the light down and it bends towards the normal" } },
    { id: 'para-4', type: 'paragraph', data: { text: "In the denser medium there are more particles closer together providing more friction to the passing of the light through the material Entering a less dense medium speeds the light up and it bends away from the normal" } },
    { id: 'para-5', type: 'paragraph', data: { text: "When passing along the normal (perpendicular) the light does not direction Its speed does still change, as it is passing through a medium with a different refractive index Refraction of light through a glass block" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Calculating Refractive Index The refractive index, n, is a property of a material which measures how much light slows down when passing through it Where:" } },
    { id: 'para-7', type: 'paragraph', data: { text: "c = the speed of light in a vacuum (m s) v = the speed of light in a substance (m s) Light travels at different speeds within different substances depending on their refractive index" } },
    { id: 'para-8', type: 'paragraph', data: { text: "A material with a high refractive index is called optically dense, such material causes light to travel slower Since the speed of light in a substance will always be less than the speed of light in a vacuum, the value of the n is always greater than 1" } },
    { id: 'para-9', type: 'paragraph', data: { text: "In calculations, the refractive index of air can be taken to be approximately 1 This is because light does not slow down significantly when travelling through air (as opposed to travelling through a vacuum) Snell's Law" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Snell's law relates the angle of incidence to the angle of refraction, it is given by: n sin θ = n sin θ Where: n = the refractive index of material 1" } },
    { id: 'para-11', type: 'paragraph', data: { text: "n = the refractive index of material 2 θ = the angle of incidence of the ray in material 1 (°) θ = the angle of refraction of the ray in material 2 (°) –1" } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <line x1="50" y1="100" x2="60" y2="100" stroke="#a78bfa" stroke-width="20"/>
  <line x1="70" y1="100" x2="100" y2="100" stroke="#a78bfa" stroke-width="20"/>
  <line x1="120" y1="100" x2="180" y2="100" stroke="#a78bfa" stroke-width="20"/>
  <line x1="210" y1="100" x2="240" y2="100" stroke="#a78bfa" stroke-width="20"/>
  <line x1="260" y1="100" x2="270" y2="100" stroke="#a78bfa" stroke-width="20"/>
  <text x="200" y="160" fill="#f8fafc" font-size="16" text-anchor="middle">Longitudinal Wave (Compressions)</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Refraction & Refractive Index' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
