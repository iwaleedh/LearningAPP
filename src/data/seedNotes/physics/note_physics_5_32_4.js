export const note_physics_5_32_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Velocity-Time Graph for an Oscillator" } },
    { id: 'head-1', type: 'heading', data: { text: "Velocity-Time Graph for an Oscillator", level: 2 } },
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
      "id": "svg-damping-graph",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"100\" x2=\"350\" y2=\"100\" stroke=\"#64748B\"/><path d=\"M 50 20 Q 75 160 100 100 T 150 100 T 200 100 T 250 100 T 300 100\" stroke=\"#8B5CF6\" fill=\"none\" stroke-width=\"2\"/><path d=\"M 50 20 Q 200 90 350 95\" stroke=\"#EF4444\" fill=\"none\" stroke-dasharray=\"4,4\"/></svg>",
        "caption": "Damped Oscillation"
      }
    },
    {
      "id": "svg-damping-types",
      "type": "svg",
      "data": {
        "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto\"><line x1=\"50\" y1=\"150\" x2=\"350\" y2=\"150\" stroke=\"#64748B\"/><path d=\"M 50 50 Q 100 200 150 150 T 250 150\" stroke=\"#3B82F6\" fill=\"none\"/><path d=\"M 50 50 Q 100 150 250 150\" stroke=\"#10B981\" fill=\"none\"/><path d=\"M 50 50 Q 250 100 350 140\" stroke=\"#EF4444\" fill=\"none\"/><text x=\"200\" y=\"40\" fill=\"#10B981\">Critical</text><text x=\"300\" y=\"60\" fill=\"#EF4444\">Over-damped</text><text x=\"260\" y=\"120\" fill=\"#3B82F6\">Under-damped</text></svg>",
        "caption": "Types of Damping"
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Velocity-Time Graph for an Oscillator' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
