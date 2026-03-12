export const note_biology_1_2_6 = {
  blocks: [
    {
      id: 'obj-wp',
      type: 'objective',
      data: { text: 'Define water potential and explain how solutes and pressure affect it; predict the direction of osmosis between solutions of different water potential; describe the effects of osmosis on plant and animal cells.' },
    },
    {
      id: 'h-wp-def',
      type: 'heading',
      data: { text: 'Water Potential (\u03c8)', level: 2 },
    },
    {
      id: 'p-wp-def',
      type: 'paragraph',
      data: { text: 'Water potential (\u03c8) is a measure of the tendency of water molecules to move from one region to another. It represents the pressure exerted by freely moving water molecules on a surrounding membrane or surface. Water potential is measured in kilopascals (kPa).' },
    },
    {
      id: 'callout-wp-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts About Water Potential',
        text: '\u2022 Pure water has the highest possible water potential: \u03c8 = 0 kPa.\n\u2022 All aqueous solutions have a <em>lower</em> (more negative) water potential than pure water.\n\u2022 As solute concentration increases, water potential decreases (becomes more negative).\n\u2022 Water moves by osmosis from higher water potential (less negative) to lower water potential (more negative).',
      },
    },
    {
      id: 'h-components',
      type: 'heading',
      data: { text: 'Components of Water Potential', level: 2 },
    },
    {
      id: 'p-wp-eq',
      type: 'paragraph',
      data: { text: 'Water potential has two main components:' },
    },
    {
      id: 'eq-wp',
      type: 'equation',
      data: {
        html: '\u03c8 = \u03c8<sub>s</sub> + \u03c8<sub>p</sub>',
        caption: 'Water potential = solute potential + pressure potential',
      },
    },
    {
      id: 'list-wp-components',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Solute potential (\u03c8<sub>s</sub>)</strong> \u2014 the effect of dissolved solutes on water potential. Always negative or zero. More solute \u2192 more negative \u03c8<sub>s</sub>.',
          '<strong>Pressure potential (\u03c8<sub>p</sub>)</strong> \u2014 the effect of pressure on water potential. Positive in turgid plant cells (the cell wall pushes inward). Zero in a flaccid cell or solution in an open container. Can be negative in rare circumstances (e.g. water in xylem under tension).',
          'In a flaccid cell or open solution: \u03c8<sub>p</sub> = 0, so \u03c8 = \u03c8<sub>s</sub> (negative).',
          'In a turgid plant cell: \u03c8<sub>p</sub> is positive, raising \u03c8 back towards 0. At full turgor, \u03c8 = 0 (no net water entry).',
        ],
      },
    },
    {
      id: 'h-osmosis-direction',
      type: 'heading',
      data: { text: 'Direction of Osmosis', level: 2 },
    },
    {
      id: 'p-osmosis-direction',
      type: 'paragraph',
      data: { text: 'Water moves by osmosis from the region of <strong>higher water potential</strong> to the region of <strong>lower (more negative) water potential</strong>, through a selectively permeable membrane, until the water potentials equalise.' },
    },
    {
      id: 'callout-osmosis-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition of Osmosis',
        text: 'Osmosis is the net movement of water molecules from a solution with a higher water potential to a solution with a lower water potential through a selectively permeable membrane.',
      },
    },
    {
      id: 'h-cells',
      type: 'heading',
      data: { text: 'Effects of Osmosis on Cells', level: 2 },
    },
    {
      id: 'table-cells',
      type: 'comparisonTable',
      data: {
        caption: 'Effects of different solutions on plant and animal cells.',
        headers: ['Solution type', 'Water potential of solution', 'Plant cell result', 'Animal cell result'],
        rows: [
          ['Hypotonic (dilute / distilled water)', 'Higher than cell (\u03c8 closer to 0)', 'Water enters \u2192 turgid (rigid, firm); cell wall prevents bursting', 'Water enters \u2192 cell swells and <strong>lyses</strong> (bursts)'],
          ['Isotonic (same concentration)', 'Equal to cell \u03c8', 'No net water movement; cell remains flaccid', 'No net water movement; normal shape'],
          ['Hypertonic (concentrated)', 'Lower than cell (more negative \u03c8)', 'Water leaves \u2192 <strong>plasmolysis</strong> (membrane pulls away from cell wall)', 'Water leaves \u2192 cell shrinks (<strong>crenation</strong>)'],
        ],
      },
    },
    {
      id: 'svg-cells',
      type: 'svg',
      data: {
        caption: 'From left to right: turgid plant cell (dilute solution), normal plant cell (isotonic), plasmolysed cell (concentrated solution).',
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="540" height="180" fill="#f8f9ff" rx="8"/><rect x="20" y="30" width="120" height="120" rx="8" fill="#d5e8d4" stroke="#82b366" stroke-width="3"/><ellipse cx="80" cy="90" rx="52" ry="52" fill="#a9d18e" stroke="#6aaa52" stroke-width="2"/><text x="80" y="155" fill="#2d6a4f" font-size="10" text-anchor="middle">Turgid</text><text x="80" y="167" fill="#2d6a4f" font-size="10" text-anchor="middle">(hypotonic solution)</text><rect x="200" y="30" width="120" height="120" rx="8" fill="#d5e8d4" stroke="#82b366" stroke-width="3"/><ellipse cx="260" cy="90" rx="42" ry="42" fill="#a9d18e" stroke="#6aaa52" stroke-width="2"/><text x="260" y="155" fill="#666" font-size="10" text-anchor="middle">Normal / Flaccid</text><text x="260" y="167" fill="#666" font-size="10" text-anchor="middle">(isotonic solution)</text><rect x="380" y="30" width="120" height="120" rx="8" fill="#d5e8d4" stroke="#82b366" stroke-width="3"/><ellipse cx="440" cy="90" rx="28" ry="28" fill="#a9d18e" stroke="#6aaa52" stroke-width="2"/><text x="440" y="155" fill="#c0392b" font-size="10" text-anchor="middle">Plasmolysed</text><text x="440" y="167" fill="#c0392b" font-size="10" text-anchor="middle">(hypertonic solution)</text></svg>',
      },
    },
    {
      id: 'h-practical',
      type: 'heading',
      data: { text: 'Measuring Water Potential of Plant Tissue', level: 2 },
    },
    {
      id: 'list-practical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Prepare a <strong>dilution series</strong> of sucrose solution (e.g. 0, 0.1, 0.2, 0.4, 0.6 mol dm\u207b\u00b3).',
          'Cut potato/plant tissue discs of known mass, place in each solution for ~30 minutes.',
          'Remove, blot dry, and re-weigh each disc.',
          'Calculate <strong>% change in mass</strong> = [(final mass \u2212 initial mass) \u00f7 initial mass] \u00d7 100.',
          'Plot % change in mass against sucrose concentration.',
          'The sucrose concentration where % change in mass = 0% is the concentration at which the tissue water potential equals the solution water potential (no net osmosis).',
          'This value can be converted to water potential using known \u03c8 values for sucrose solutions.',
        ],
      },
    },
    {
      id: 'callout-wp-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Water Potential Directions',
        text: 'Remember: water potential values are always \u2264 0 for solutions. A value of \u221260 kPa is LOWER than \u221220 kPa (more negative = lower water potential = more concentrated solution). Water moves from \u221220 kPa towards \u221260 kPa.',
      },
    },
    {
      id: 'checklist-wp',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define water potential and state its units and the value for pure water', checked: false },
          { text: 'Explain how adding solutes lowers water potential', checked: false },
          { text: 'Use the equation \u03c8 = \u03c8s + \u03c8p to calculate water potential', checked: false },
          { text: 'Predict direction of osmosis given two water potential values', checked: false },
          { text: 'Explain the terms turgid, flaccid, plasmolysed (plant) and crenated, lysed (animal)', checked: false },
          { text: 'Describe the sucrose dilution series method for measuring tissue water potential', checked: false },
        ],
      },
    },
    {
      id: 'summary-wp',
      type: 'summary',
      data: { text: 'Water potential (\u03c8) measures the tendency of water to move. Pure water \u03c8 = 0 kPa (maximum). Adding solutes lowers \u03c8 (more negative). \u03c8 = \u03c8s + \u03c8p; solute potential is always negative; pressure potential is positive in turgid cells. Osmosis: net water movement from higher \u03c8 to lower \u03c8 through selectively permeable membrane. Plant cells in dilute solution become turgid (water in, wall resists); in concentrated solution become plasmolysed (water out, membrane pulls from wall). Animal cells lyse in dilute (no wall) or crenate in concentrated. Tissue water potential measured by sucrose dilution series \u2192 find concentration where % change in mass = 0.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-wp-key', prompt: 'What is the water potential of pure water? How does adding solutes change it?' },
      { id: 'cue-2', blockId: 'h-components', prompt: 'What are the two components of water potential? Write the equation.' },
      { id: 'cue-3', blockId: 'callout-osmosis-def', prompt: "Define osmosis using the term 'water potential'." },
      { id: 'cue-4', blockId: 'table-cells', prompt: 'What happens to a plant cell and an animal cell when placed in a hypertonic solution? Why do the outcomes differ?' },
      { id: 'cue-5', blockId: 'h-practical', prompt: 'Outline the method used to measure the water potential of plant tissue using a dilution series.' },
    ],
    summaryText: 'Water potential \u03c8: pure water = 0 kPa (maximum); solutions always negative. \u03c8 = \u03c8s + \u03c8p. Osmosis: water moves from higher \u03c8 to lower \u03c8 through selectively permeable membrane. Plant: turgid (dilute \u2014 water in, wall resists) or plasmolysed (concentrated \u2014 water out). Animal: lyse (dilute) or crenate (concentrated). Tissue \u03c8 measured by sucrose dilution series \u2192 find concentration where % mass change = 0.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Water potential and osmosis in plant and animal cells', detail: 'AQA textbook defines water potential (kPa, pure water = 0) and describes osmosis directed by water potential gradients. Plant cell turgor and plasmolysis explained in context of cell walls.', year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 3, pp55-57', tags: ['water-potential', 'osmosis', 'plant-cells'] },
  ],
};
