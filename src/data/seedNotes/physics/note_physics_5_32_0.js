export const note_physics_5_32_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Conditions for Simple Harmonic Motion" } },
    { id: 'head-1', type: 'heading', data: { text: "Conditions for Simple Harmonic Motion", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Conditions for Simple Harmonic Motion Conditions for Simple Harmonic Motion Simple harmonic motion (SHM) is a specific type of oscillation An oscillation is said to be SHM when:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The acceleration is proportional to the displacement The acceleration is in the opposite direction to the displacement Examples of oscillators that undergo SHM are: The pendulum of a clock" } },
    { id: 'para-4', type: 'paragraph', data: { text: "A mass on a spring Guitar strings Time period, T: The objects swings are periodic, meaning they are repeated in regular intervals" } },
    { id: 'para-5', type: 'paragraph', data: { text: "according to their frequency or time period If an object swings freely it always takes the same time to complete one swing Restoring force When an object is moving in SHM a force, called the restoring force, F, is always trying to" } },
    { id: 'para-6', type: 'paragraph', data: { text: "return the object back to its equilibrium position." } },
    { id: 'para-7', type: 'paragraph', data: { text: "The force is proportional to the displacement, x, from that equilibrium position F = -kx Where: F  is the restoring force" } },
    { id: 'para-8', type: 'paragraph', data: { text: "x is the displacement of the object from the equilibrium position k is a constant depending on the system the negative sign shows that the acceleration will always be towards the centre of oscillation" } },
    { id: 'para-9', type: 'paragraph', data: { text: "Force, acceleration and displacement of a pendulum in SHM This is why a person jumping on a trampoline is not an example of simple harmonic motion: The restoring force on the person is not proportional to their distance from the" } },
    { id: 'para-10', type: 'paragraph', data: { text: "equilibrium position When the person is not in contact with the trampoline, the restoring force is equal to their weight, which is constant This does not change, even if they jump higher" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Worked Example A 200g toy robot is attached to a pole by a spring, with a spring constant of 90 N m , and made to oscillate horizontally." } },
    {
      "id": "svg-shm-definition",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><text x=\"150\" y=\"80\" text-anchor=\"middle\" font-size=\"24\" fill=\"#334155\" font-style=\"italic\">a ∝ -x</text><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"#64748B\">Acceleration is proportional to negative displacement</text></svg>",
        "caption": "SHM Definition"
      }
    },
    {
      "id": "svg-shm-pendulum",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 300 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"100\" y1=\"50\" x2=\"200\" y2=\"50\" stroke=\"#334155\" stroke-width=\"4\"/><line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"200\" stroke=\"#94A3B8\" stroke-dasharray=\"4,4\"/><line x1=\"150\" y1=\"50\" x2=\"220\" y2=\"180\" stroke=\"#64748B\" stroke-width=\"2\"/><circle cx=\"220\" cy=\"180\" r=\"15\" fill=\"#EF4444\"/><path d=\"M 150 100 A 50 50 0 0 0 170 95\" fill=\"none\" stroke=\"#3B82F6\"/><text x=\"155\" y=\"120\" fill=\"#3B82F6\">θ</text></svg>",
        "caption": "Simple Pendulum"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Conditions for Simple Harmonic Motion' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
