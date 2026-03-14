export const note_physics_4_18_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Electric Field due to a Point Charge" } },
    { id: 'head-1', type: 'heading', data: { text: "Electric Field due to a Point Charge", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Electric Field due to a Point Charge Electric Field due to a Point Charge The electric field strength describes how strong or weak an electric field is at that point A point charge produces a radial field" } },
    { id: 'para-3', type: 'paragraph', data: { text: "A charge sphere also acts like a point charge The electric field strength E at a distance r due to a point charge Q in free space is defined by: Where:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Q = the point charge producing the radial electric field (C) r = distance from the centre of the charge (m) ε = permittivity of free space (F m ) This equation shows:" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Electric field strength in a radial field is not constant As the distance from the charge r increases, E decreases by a factor of 1/r This is an inverse square law relationship with distance This means the field strength E decreases by a factor of four when the distance r is" } },
    { id: 'para-6', type: 'paragraph', data: { text: "doubled Note: this equation is only for the field strength around a point charge since it produces a radial field 0-1" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Positive and negative point charges and the direction of the electric field lines The electric field strength is a vector Its direction is the same as the electric field lines If the charge is negative, the E field strength is negative and points towards the centre of the charge" } },
    { id: 'para-8', type: 'paragraph', data: { text: "If the charge is positive, the E field strength is positive and points away from the centre of the charge This equation is analogous to the gravitational field strength around a point mass The only difference is, gravitational field lines are always towards the mass, whilst" } },
    { id: 'para-9', type: 'paragraph', data: { text: "electric field lines can be towards or away from the point charge The graph of E against r for a charge is: The electric field strength E has a 1/r relationship The key features of this graph are:" } },
    { id: 'para-10', type: 'paragraph', data: { text: "The values for E are all positive As r increases, E against r follows a 1/r relation (inverse square law) The area under this graph is the change in electric potential ΔV The graph has a steep decline as r increases2" } },
    { id: 'para-11', type: 'paragraph', data: { text: "Worked Example Calculate the strength of the electric field at a distance of 2 m away from an electron, and state its direction." } },

  
    {
      id: 'svg-physics_4_18_3-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <rect x="80" y="40" width="240" height="60" fill="#e0e7ff" rx="8" stroke="#3b82f6" stroke-width="2"/>
  <text x="200" y="75" font-family="Arial" font-size="20" fill="#1d4ed8" font-weight="bold" text-anchor="middle">E = k Q / r²</text>
  <path d="M 60 180 L 200 180" stroke="#334155" stroke-width="2"/>
  <path d="M 60 180 L 60 120" stroke="#334155" stroke-width="2"/>
  <path d="M 70 120 Q 90 170 190 175" stroke="#ef4444" stroke-width="2" fill="none"/>
  <text x="200" y="195" font-family="Arial" font-size="12" fill="#334155" text-anchor="middle">Distance r</text>
  <text x="40" y="150" font-family="Arial" font-size="12" fill="#334155" transform="rotate(-90 40 150)" text-anchor="middle">E field</text>
  <text x="260" y="150" font-family="Arial" font-size="14" fill="#ef4444" font-weight="bold">Inverse square graph</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 18_3'
      }
    },
    {
      id: 'svg-physics_4_18_3-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="220" fill="#f8fafc" rx="8"/>
  <circle cx="200" cy="110" r="15" fill="#ef4444"/>
  <text x="200" y="115" font-family="Arial" font-size="16" fill="white" font-weight="bold" text-anchor="middle">+</text>
  <circle cx="200" cy="110" r="50" fill="none" stroke="#94a3b8" stroke-dasharray="4,4"/>
  <circle cx="200" cy="110" r="80" fill="none" stroke="#94a3b8" stroke-dasharray="4,4"/>
  <text x="220" y="100" font-family="Arial" font-size="12" fill="#1d4ed8">Strong Field</text>
  <text x="285" y="100" font-family="Arial" font-size="12" fill="#1d4ed8">Weaker Field</text>
  <text x="200" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Radial Field lines further apart = Weaker</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 18_3'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Electric Field due to a Point Charge' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
