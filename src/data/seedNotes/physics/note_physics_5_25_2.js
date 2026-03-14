export const note_physics_5_25_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Kinetic Theory of Gases Equation" } },
    { id: 'head-1', type: 'heading', data: { text: "Kinetic Theory of Gases Equation", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Kinetic Theory of Gases Equation Kinetic Theory of Gases Equation Gases consist of atoms or molecules randomly moving around at high speeds The kinetic theory of gases models the thermodynamic behaviour of gases by" } },
    { id: 'para-3', type: 'paragraph', data: { text: "linking the microscopic properties of particles (mass and speed) to macroscopic properties of particles (pressure and volume) The theory is based on the following assumptions: Molecules of gas behave as identical, hard, perfectly elastic spheres" } },
    { id: 'para-4', type: 'paragraph', data: { text: "The volume of the molecules is negligible compared to the volume of the container The time of a collision is negligible compared to the time between collisions There are no forces of attraction or repulsion between the molecules The molecules are in continuous random motion" } },
    { id: 'para-5', type: 'paragraph', data: { text: "The number of molecules of gas in a container is very large, therefore the average behaviour (eg. speed) is usually considered Root-Mean-Square Speed The pressure of an ideal gas equation includes the mean square speed of the particles:" } },
    { id: 'para-6', type: 'paragraph', data: { text: "<c> Where c = average speed of the gas particles <c> has the units m  s" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Since particles travel in all directions in 3D space and velocity is a vector, some particles will have a negative direction and others a positive direction When there are a large number of particles, the total positive and negative velocity values will cancel out, giving a net zero value overall" } },
    { id: 'para-8', type: 'paragraph', data: { text: "In order to find the pressure of the gas, the velocities must be squared meaning that all the values end up positive To calculate the average speed of the particles in a gas, take the square root of the mean square speed:" } },
    { id: 'para-9', type: 'paragraph', data: { text: "<c2>=crms c  is known as the root-mean-square speed and still has the units of m s2 2 2-2 Deriving the Equation for Kinetic Theory" } },
    { id: 'para-10', type: 'paragraph', data: { text: "When molecules rebound from a wall in a container, the change in momentum gives rise to a force exerted by the particle on the wall Many molecules moving in random motion exert forces on the walls which create an average overall pressure, since pressure is the force per unit area" } },
    { id: 'para-11', type: 'paragraph', data: { text: "The Situation for the Derivation Picture a single molecule in a cube-shaped box with sides of equal length l The molecule has a mass m and moves with speed c, parallel to one side of the box It collides at regular intervals with the ends of the box, exerting a force and contributing" } },,
    {
      "id": "svg-gen-25-5-1",
      "type": "svg",
      "data": {
        "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f0edf6" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Ideal Gas Particles</text>
  <rect x="100" y="40" width="200" height="120" fill="none" stroke="#2c3e50" stroke-width="3"/>
  <circle cx="150" cy="80" r="6" fill="#e74c3c"/>
  <line x1="150" y1="80" x2="170" y2="90" stroke="#c0392b" stroke-width="2"/>
  <circle cx="250" cy="120" r="6" fill="#e74c3c"/>
  <line x1="250" y1="120" x2="220" y2="100" stroke="#c0392b" stroke-width="2"/>
  <circle cx="200" cy="60" r="6" fill="#e74c3c"/>
  <line x1="200" y1="60" x2="180" y2="45" stroke="#c0392b" stroke-width="2"/>
  <circle cx="120" cy="140" r="6" fill="#e74c3c"/>
  <line x1="120" y1="140" x2="150" y2="150" stroke="#c0392b" stroke-width="2"/>
  <circle cx="280" cy="70" r="6" fill="#e74c3c"/>
  <line x1="280" y1="70" x2="295" y2="60" stroke="#c0392b" stroke-width="2"/>
</svg>`,
        "caption": "Diagram demonstrating concepts in Topic 25"
      }
    },
    {
      "id": "svg-gen-25-5-2",
      "type": "svg",
      "data": {
        "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#fff9f0" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Maxwell-Boltzmann Distribution</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <path d="M 50 170 Q 100 40 150 100 T 300 165" fill="none" stroke="#2980b9" stroke-width="3"/>
  <path d="M 50 170 Q 150 20 200 110 T 350 168" fill="none" stroke="#e67e22" stroke-width="3"/>
  <text x="100" y="80" font-family="sans-serif" font-size="10" fill="#2980b9">Lower T</text>
  <text x="220" y="100" font-family="sans-serif" font-size="10" fill="#e67e22">Higher T</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Number of Molecules</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Kinetic Energy / Speed</text>
</svg>`,
        "caption": "Further illustration for Topic 25"
      }
    }
  

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Kinetic Theory of Gases Equation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
