export const note_physics_4_21_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Induced E.M.F between Linked Coils" } },
    { id: 'head-1', type: 'heading', data: { text: "Induced E.M.F between Linked Coils", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Induced E.M.F between Linked Coils Induced E.M.F between Linked Coils An e.m.f can be induced in a coil when there is a change of current in another coil linked with this coil" } },
    { id: 'para-3', type: 'paragraph', data: { text: "This is what happens in a transformer Transformers A transformer is adevice that works by the principles of electromagnetic induction It changes high alternating voltages at low current to low alternating voltage at high" } },
    { id: 'para-4', type: 'paragraph', data: { text: "current, and vice versa A transformer is made up of: A primary coil A secondary coil" } },
    { id: 'para-5', type: 'paragraph', data: { text: "An iron core The primary and secondary coils are wound around the soft iron core The soft iron core is necessary because it creates flux linkage between the primary and secondary coils" } },
    { id: 'para-6', type: 'paragraph', data: { text: "Soft iron is used because it can easily be magnetised and demagnetised Coils are magnetically linked, through their combined magnetic flux linkage, using a soft iron core In the primary coil, an alternating current producing an alternating voltage is applied" } },
    { id: 'para-7', type: 'paragraph', data: { text: "This creates an alternating magnetic field inside the iron core and therefore a changing magnetic flux linkage A changing magnetic field passes through to the secondary coil through the iron core This results in a changing magnetic flux linkage in the secondary coil and from" } },
    { id: 'para-8', type: 'paragraph', data: { text: "Faraday's Law, an e.m.f is induced An e.m.f produces an alternating output voltage from the secondary coil The output alternating voltage is at the same frequency as the input voltage Worked Example" } },
    { id: 'para-9', type: 'paragraph', data: { text: "When connected to a DC power supply, the primary coil of a transformer becomes an electromagnet." } },
    { id: 'para-10', type: 'paragraph', data: { text: "Describe the changes which take place inside the secondary coil of a transformer when DC current in the primary coil is: a) Switched on b) Remains on" } },
    { id: 'para-11', type: 'paragraph', data: { text: "c) Switched off Answer: Part (a) Step 1: Describe the creation of an electromagnet" } },
    {
      id: 'svg-flux-linkage',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="30" width="80" height="120" fill="none" stroke="#D97706" stroke-width="4"/><rect x="105" y="35" width="70" height="110" fill="none" stroke="#D97706" stroke-width="4"/><rect x="110" y="40" width="60" height="100" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 50 90 L 250 90" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><path d="M 50 110 L 250 110" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><text x="210" y="70" font-family="Arial" font-size="14" fill="#D97706">N turns</text><defs><marker id="arrow-fl" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3B82F6"/></marker></defs></svg>',
        caption: 'Magnetic Flux Linkage'
      }
    },
    {
      id: 'svg-faradays-law',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="140" fill="#FEF2F2" rx="10"/><text x="180" y="60" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#991B1B">&epsilon; = &#8722; N (&Delta;&Phi; / &Delta;t)</text><text x="180" y="95" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Induced EMF &propto; Rate of change of flux linkage</text><text x="180" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="#B91C1C">Negative sign denotes Lenz\'s Law</text></svg>',
        caption: 'Faraday\'s Law Formula'
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Induced E.M.F between Linked Coils' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
