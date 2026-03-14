export const note_physics_2_12_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Phase & Path Difference" } },
    { id: 'head-1', type: 'heading', data: { text: "Phase & Path Difference", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Phase & Path Difference Phase & Path Difference Waves are said to be coherent if they have: The same frequency" } },
    { id: 'para-3', type: 'paragraph', data: { text: "A constant phase difference Phase Difference Two points on a wave, or on different waves, are in phase when they are the same point in their wave cycle" } },
    { id: 'para-4', type: 'paragraph', data: { text: "The angle between their wave cycles is the phase difference Path Difference The type of interference occurring at a given point (i.e. constructive or destructive) depends on the path difference of the overlapping waves" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Path difference is defined as: The difference in distance travelled by two waves from their sources to the point where they meet Path difference is generally expressed in multiples of wavelength" } },
    { id: 'para-6', type: 'paragraph', data: { text: "At point P the waves have a path difference of a whole number of wavelengths resulting in constructive interference. At point P the waves have a path difference of an odd number of half wavelengths resulting in destructive interference In the diagram above, the number of wavelengths between:" } },
    { id: 'para-7', type: 'paragraph', data: { text: "S ➜ P = 6 λ S ➜ P = 6.5 λ S ➜ P = 7 λ S ➜ P = 6 λ" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The path difference at point P is 6.5 λ  – 6 λ  = λ / 2 The path difference at point P is 7 λ  – 6 λ  = λ In general: The condition for constructive interference is a path difference of n λ" } },
    { id: 'para-9', type: 'paragraph', data: { text: "The condition for destructive interference is a path difference of (n + ½) λ In this case, n is an integer i.e. 0, 1, 2, 3..." } },
    { id: 'para-10', type: 'paragraph', data: { text: "Hence: Destructive interference occurs at point P Constructive interference occurs at point P 2" } },
    { id: 'para-11', type: 'paragraph', data: { text: "1 1 1 2 1 1 2" } },

  
    {
      id: "svg-diagram-auto",
      type: "svg",
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f;border-radius:8px;font-family:sans-serif;">
  <line x1="50" y1="160" x2="350" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <line x1="50" y1="40" x2="50" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <path d="M50 160 L200 60 Q 250 50 350 100" fill="none" stroke="#a78bfa" stroke-width="4"/>
  <text x="200" y="40" fill="#f8fafc" font-size="18" text-anchor="middle" font-weight="bold">Force-Extension Graph</text>
  <circle cx="200" cy="60" r="5" fill="#facc15"/>
  <text x="200" y="80" fill="#facc15" font-size="12" text-anchor="middle">Limit of Proportionality</text>
</svg>`,
        caption: "Physics Diagram"
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Phase & Path Difference' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
