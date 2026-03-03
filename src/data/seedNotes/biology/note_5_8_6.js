export const note_biology_5_8_6 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand eye structure and photoreception: retina structure; rod cells (scotopic vision, rhodopsin, bleached by light, low threshold, monochromatic, peripheral location); cone cells (photopic vision, 3 types iodopsin, high threshold, colour vision, fovea); visual transduction pathway: retinal + opsin → metarhodopsin → cGMP phosphodiesterase → Na⁺ channel closure → hyperpolarisation; convergence of rods.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Eye Structure and Photoreception', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'The retina is the light-sensitive tissue lining the back of the eye. It contains two types of photoreceptor cells: rods and cones. These cells detect light and convert it into electrical signals (phototransduction), initiating visual perception. The photoreceptors are arranged in layers with supporting cells and neurons that process visual information before it is sent to the brain via the optic nerve.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Rod Cells', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Rod cells are photoreceptors specialised for low-light (scotopic) vision. They contain the visual pigment rhodopsin, a protein complex consisting of the protein opsin and the light-sensitive molecule retinal (derived from vitamin A). Rods are extremely sensitive to light, with a threshold of just 1 photon per cell. They are monochromatic, detecting light but not distinguishing colours. Rods are located throughout the retina but are absent from the fovea (central pit of the retina).' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'When light strikes rod cells, it causes the retinal in rhodopsin to change shape (isomerisation from 11-cis-retinal to all-trans-retinal), triggering the visual transduction cascade. After light exposure, rhodopsin must be regenerated through a slow process (~30 minutes in darkness), which is why vision takes time to recover in dark environments.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rod and Cone Distribution',
        text: 'The retina contains ~120 million rods but only ~6 million cones. Rods are distributed peripherally for night vision and detecting movement. The fovea contains almost exclusively cones, specialised for high-acuity colour vision in bright light.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Cone Cells', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Cone cells are photoreceptors specialised for bright-light (photopic) vision and colour vision. They contain visual pigments called iodopsins, which are similar to rhodopsin but with different opsins. There are three types of cones, each sensitive to different wavelengths: S-cones (short wavelength, ~420 nm, blue), M-cones (medium wavelength, ~530 nm, green), L-cones (long wavelength, ~560 nm, red).' },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Cones have higher light thresholds (~100 photons) than rods, requiring brighter light for activation. They have faster response kinetics than rods, allowing better temporal resolution. Cones are concentrated in the fovea, the region of highest visual acuity, providing detailed colour vision in bright conditions. Colour vision results from the comparison of signals from different cone types.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Rod Cells', 'Cone Cells'],
        rows: [
          ['Visual pigment', 'Rhodopsin (opsin + retinal)', 'Iodopsin (opsin variant + retinal)'],
          ['Light sensitivity', 'Very high (1 photon threshold)', 'Lower (100 photons threshold)'],
          ['Best light condition', 'Low light (scotopic)', 'Bright light (photopic)'],
          ['Colour sensitivity', 'Monochromatic (no colour)', 'Trichromatic (3 cone types)'],
          ['Number in retina', '~120 million', '~6 million'],
          ['Location in retina', 'Throughout; absent from fovea', 'Concentrated in fovea'],
          ['Response speed', 'Slow', 'Fast'],
        ],
        caption: 'Comparison of rod and cone cells',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Visual Transduction Pathway', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'In the resting state (darkness), photoreceptor cells are depolarised (~−30 mV) and continuously release glutamate neurotransmitter. Light triggers a cascade of events that hyperpolarises the cell, reducing glutamate release. This paradoxical response (light hyperpolarises, darkness depolarises) is unique to photoreceptors.' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'Step 1: Light is absorbed by retinal in rhodopsin. Step 2: Retinal isomerises, causing rhodopsin to change conformation to metarhodopsin. Step 3: Metarhodopsin activates the G protein transducin. Step 4: Transducin activates the enzyme phosphodiesterase (PDE). Step 5: PDE catalyses the breakdown of cyclic GMP (cGMP) to GMP. Step 6: Decreased cGMP concentration causes cGMP-gated Na⁺ channels in the outer segment to close. Step 7: With fewer Na⁺ channels open, the cell hyperpolarises (becomes more negative).' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'Light → Retinal isomerisation → Metarhodopsin → Transducin → PDE → cGMP breakdown → Na<sup>+</sup> channels close → Hyperpolarisation',
        caption: 'Visual transduction cascade in photoreceptor cells',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Signal Amplification',
        text: 'One photon activates one rhodopsin. This single rhodopsin can activate hundreds of transducin molecules. Each transducin activates phosphodiesterase. This cascade amplifies the initial light signal ~1000-fold, making vision extremely sensitive.',
      },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Rod Convergence and Visual Acuity', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Multiple rod cells synapse onto a single bipolar cell, which then synapses onto a retinal ganglion cell. This convergence (many-to-one) increases sensitivity in low light: light detected by any rod in the group can activate the ganglion cell. However, convergence reduces spatial resolution (acuity). In bright light, individual cones connect with individual bipolar and ganglion cells (minimal convergence), preserving fine detail.' },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'This is why peripheral vision (rod-dominated) is sensitive but blurry; central vision (cone-dominated in fovea) is sharp but requires more light. During twilight, rod and cone vision overlap, producing transitional effects.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Rods (rhodopsin, low threshold, monochromatic, peripheral) mediate scotopic vision. Cones (iodopsin, 3 types, high threshold, fovea) mediate photopic colour vision. Light isomerises retinal → metarhodopsin → transducin → PDE → cGMP ↓ → Na⁺ channels close → hyperpolarisation.',
        apply: 'A photoreceptor is exposed to light. Predict: (a) changes to Na⁺ channel openness, (b) changes to membrane potential, (c) changes to glutamate release.',
        analyze: 'Why is the visual transduction pathway indirect (light → protein → enzyme → ion channels) rather than direct light-gated channels? What advantage does this provide?',
        evaluate: 'Red-green colour blindness involves loss of L-cones or M-cones. Explain why this impairs colour discrimination. Why is blue-yellow colour blindness much rarer?',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the structure and location of rod cells', checked: false },
          { text: 'Describe the structure and location of cone cells', checked: false },
          { text: 'Compare rod and cone cells in sensitivity, colour, location, and acuity', checked: false },
          { text: 'Explain the visual transduction cascade step-by-step', checked: false },
          { text: 'Describe rod convergence and its effect on sensitivity vs acuity', checked: false },
          { text: 'Explain why photoreceptors hyperpolarise in light', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Retina contains rods (rhodopsin, monochromatic, ~1 photon threshold, peripheral) for scotopic vision and cones (iodopsin, 3 types, ~100 photon threshold, fovea-concentrated) for photopic colour vision. Visual transduction: light isomerises retinal in rhodopsin → metarhodopsin → transducin → PDE → cGMP breakdown → Na⁺ channels close → hyperpolarisation. Rod convergence increases sensitivity but reduces acuity. Cone divergence preserves acuity in bright light.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'Describe rod cells and their role in vision.' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Describe cone cells and the three types.' },
      { id: 'cue-3', blockId: 'h4', prompt: 'Explain the visual transduction cascade from light to hyperpolarisation.' },
      { id: 'cue-4', blockId: 'h5', prompt: 'What is rod convergence and how does it affect visual sensitivity and acuity?' },
      { id: 'cue-5', blockId: 'p6', prompt: 'Why is the photoreceptor response paradoxical: light hyperpolarises, dark depolarises?' },
    ],
    summaryText: 'Rods (rhodopsin, monochromatic, 1 photon threshold, peripheral): scotopic vision. Cones (iodopsin, 3 types, 100 photon threshold, fovea): photopic colour vision. Transduction: light → retinal isomerisation → metarhodopsin → transducin → PDE → cGMP ↓ → Na⁺ channels close → hyperpolarisation. Rod convergence: many rods → one bipolar → sensitivity ↑, acuity ↓.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Visual transduction cascade', detail: 'G protein signalling cascade amplifies light signal ~1000-fold', year: '1980s', source: 'Molecular biology', tags: ['photoreception', 'signal amplification'] },
  ],
};
