export const note_physics_5_33_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Free & Forced Oscillations" } },
    { id: 'head-1', type: 'heading', data: { text: "Free & Forced Oscillations", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Free & Forced Oscillations Free & Forced Oscillations Free Oscillations Free oscillations occur when there is no transfer of energy to or from the surroundings" } },
    { id: 'para-3', type: 'paragraph', data: { text: "This happens when an oscillating system is displaced and then left to oscillate In practice, this only happens in a vacuum. However, anything vibrating in air is still considered a free vibration as long as there are no external forces acting upon it Therefore, a free oscillation is defined as:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "An oscillation where there are only internal forces (and no external forces) acting and there is no energy input A free vibration always oscillates at its resonant frequency Forced Oscillations" } },
    { id: 'para-5', type: 'paragraph', data: { text: "In order to sustain oscillations in a simple harmonic system, a periodic force must be applied to replace the energy lost in damping This periodic force does work against the resistive force responsible for decreasing the oscillations" } },
    { id: 'para-6', type: 'paragraph', data: { text: "It is sometimes known as an external driving force These are known as forced oscillations (or vibrations), and are defined as: Oscillations acted on by a periodic external force where energy is given in order to sustain oscillations" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Forced oscillations are made to oscillate at the same frequency as the oscillator creating the external, periodic driving force For example, when a child is on a swing, they will be pushed at one end after each cycle in order to keep swinging and prevent air resistance from damping the oscillations" } },
    { id: 'para-8', type: 'paragraph', data: { text: "These extra pushes are the forced oscillations, without them, the child will eventually Worked Example State whether the following are free or forced oscillations: (i) Striking a tuning fork" } },
    { id: 'para-9', type: 'paragraph', data: { text: "(ii) Breaking a glass from a high pitched sound (iii) The interior of a car vibrating when travelling at a high speed (iv) Playing the clarinet Answer:" } },
    { id: 'para-10', type: 'paragraph', data: { text: "(i) Striking a tuning fork This is a free vibration. When a tuning fork is struck, it will vibrate at its natural frequency and there are no other external forces (ii) Breaking a glass from a high pitched sound" } },
    { id: 'para-11', type: 'paragraph', data: { text: "This is a forced vibration. The glass is forced to vibrate at the same frequency as the sound until it breaks. The frequency of the high-pitched sound is the external driving frequency (iii) The interior of a car vibrating when travelling at a particular speed" } },
    {
      "id": "svg-damping-resonance",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"200\" x2=\"350\" y2=\"200\" stroke=\"#64748B\"/><path d=\"M 50 190 Q 200 190 200 50 Q 200 190 350 190\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"2\"/><path d=\"M 50 190 Q 195 190 195 100 Q 195 190 350 190\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"2\"/><path d=\"M 50 190 Q 180 190 180 150 Q 180 190 350 190\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"2\"/><text x=\"240\" y=\"70\" fill=\"#EF4444\">Light damping</text><text x=\"240\" y=\"120\" fill=\"#F59E0B\">Medium</text><text x=\"240\" y=\"160\" fill=\"#3B82F6\">Heavy damping</text></svg>",
        "caption": "Effect of Damping on Resonance"
      }
    },
    {
      "id": "svg-peak-shift",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"180\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/><line x1=\"180\" y1=\"100\" x2=\"180\" y2=\"180\" stroke=\"#94A3B8\" stroke-dasharray=\"2,2\"/><path d=\"M 180 100 L 200 50\" stroke=\"#10B981\" marker-end=\"url(#arrow)\"/><text x=\"120\" y=\"80\" fill=\"#10B981\">Peak shifts left</text></svg>",
        "caption": "Resonance Peak Shift"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Free & Forced Oscillations' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
