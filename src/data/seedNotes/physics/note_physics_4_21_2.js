export const note_physics_4_21_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Lenz\'s Law" } },
    { id: 'head-1', type: 'heading', data: { text: "Lenz\'s Law", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Lenz's Law Lenz's Law Lenz's Law is used to predict the direction of an induced e.m.f in a coil or wire Lenz's Law is summarised below:" } },
    { id: 'para-3', type: 'paragraph', data: { text: "The induced e.m.f is set up in a direction to produce effects that oppose the change causing it Experimental Evidence for Lenz's Law To verify Lenz's Law, the only apparatus needed is:" } },
    { id: 'para-4', type: 'paragraph', data: { text: "A bar magnet A coil of wire A sensitive ammeter Note, a cell is not required" } },
    { id: 'para-5', type: 'paragraph', data: { text: "Lenz's law can be verified using a coil connected in series with a sensitive ammeter and a bar magnet A known pole (either north or south) of a bar magnet is pushed into the coil This induces an e.m.f in the coil" } },
    { id: 'para-6', type: 'paragraph', data: { text: "The induced e.m.f drives a current (because it is a complete circuit) Lenz's Law dictates: The direction of the e.m.f, and hence the current, must be set up to oppose the incoming magnet" } },
    { id: 'para-7', type: 'paragraph', data: { text: "Since a north pole approaches the coil face, the e.m.f must be set up to create an induced north pole This is because two north poles will repel each other The direction of the current is therefore as shown in the image above" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The direction of current can be verified using the right hand grip rule Fingers curl around the coil in the direction of current and the thumb points along the direction of the flux lines, from north to south Therefore, the current flows in an anti-clockwise direction in the image shown, in" } },
    { id: 'para-9', type: 'paragraph', data: { text: "order to induce a north pole opposing the incoming magnet Reversing the magnet direction would give an opposite deflection on the voltmeter Lenz's Law now predicts a south pole induced at the coil entrance This would attract the north pole attempting to leave" } },
    { id: 'para-10', type: 'paragraph', data: { text: "Therefore, the induced e.m.f always produces effects to oppose the changes causing it Lenz's Law is a direct consequence of the principle of conservation of energy Electromagnetic effects will not create electrical energy out of nothing" } },
    { id: 'para-11', type: 'paragraph', data: { text: "In order to induce and sustain an e.m.f, for instance, work must be done in order to overcome the repulsive effect due to Lenz's Law Examiner Tips and Tricks A typical exam question may ask you to explain the presence of the negative sign in" } },
    {
      id: 'svg-lenzs-law',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="20" width="40" height="80" fill="#9CA3AF"/><rect x="120" y="20" width="40" height="40" fill="#EF4444"/><text x="140" y="45" font-family="Arial" font-size="16" fill="#FFF" text-anchor="middle">N</text><text x="140" y="85" font-family="Arial" font-size="16" fill="#FFF" text-anchor="middle">S</text><path d="M 140 110 L 140 140" stroke="#000" stroke-width="3" marker-end="url(#arrow-move)"/><rect x="100" y="160" width="80" height="20" fill="none" stroke="#D97706" stroke-width="4"/><text x="70" y="175" font-family="Arial" font-size="14" fill="#B45309">Coil</text><text x="210" y="175" font-family="Arial" font-size="14" fill="#065F46">Induced N pole</text><text x="210" y="190" font-family="Arial" font-size="12" fill="#047857">repels magnet</text><defs><marker id="arrow-move" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#000"/></marker></defs></svg>',
        caption: 'Lenz\'s Law in Action'
      }
    },
    {
      id: 'svg-flemings-right-hand',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="120" x2="150" y2="40" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrow-bluer)"/><text x="160" y="60" font-family="Arial" font-size="14" fill="#1E3A8A">Motion (Thumb)</text><line x1="150" y1="120" x2="70" y2="120" stroke="#10B981" stroke-width="4" marker-end="url(#arrow-greenr)"/><text x="60" y="100" font-family="Arial" font-size="14" fill="#065F46">Field (First Finger)</text><line x1="150" y1="120" x2="210" y2="180" stroke="#EF4444" stroke-width="4" marker-end="url(#arrow-redr)"/><text x="140" y="195" font-family="Arial" font-size="14" fill="#991B1B">Induced Current (Second Finger)</text><defs><marker id="arrow-bluer" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3B82F6"/></marker><marker id="arrow-greenr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10B981"/></marker><marker id="arrow-redr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#EF4444"/></marker></defs></svg>',
        caption: 'Fleming\'s Right Hand Rule'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Lenz\'s Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
