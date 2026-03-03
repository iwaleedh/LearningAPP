export const note_biology_2_4_14 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-core-prac-7',
      data: {
        text: 'Describe methods for preparing and observing plant tissue sections, identifying tissues under microscope.',
      },
    },
    {
      type: 'heading',
      id: 'h-core-prac-7',
      data: { text: 'Core Practical 7: Plant Tissue Sections', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-7',
      data: {
        text: 'Core Practical 7 involves preparing transverse (cross) and longitudinal sections of plant tissues (typically stems and roots), staining to differentiate tissues, mounting on slides, and observing under a light microscope. The aims are: (1) prepare and stain plant tissue sections, (2) identify tissues (epidermis, cortex, vascular bundles, pith), (3) measure cell and tissue dimensions, (4) relate tissue structure to function.',
      },
    },
    {
      type: 'heading',
      id: 'h-method-7',
      data: { text: 'Method', level: 2 },
    },
    {
      type: 'list',
      id: 'list-method-7',
      data: {
        style: 'numbered',
        items: [
          'Fresh tissue preparation: obtain fresh stem or root samples; cut sections by hand with a clean, sharp razor blade or use a microtome (mechanical cutting device for uniform thickness). Hand-cut sections are often adequate for light microscopy, but microtome sections are thinner and more uniform',
          'Fixation and softening: soak sections in 50% ethanol or water for ~5 minutes to soften tissue and remove air',
          'Staining: place sections in stain solution (phloroglucinol, safranin, or toluidine blue) for 5–10 minutes. Phloroglucinol stains lignin (xylem, sclerenchyma) bright red/magenta; safranin stains lignin red/orange; toluidine blue stains nuclei and cell walls pale blue',
          'Rinsing: wash sections gently with distilled water to remove excess stain',
          'Mounting: place section on a glass slide with a drop of distilled water or mounting medium (glycerol or resin); carefully lower a coverslip to avoid air bubbles and cell damage',
          'Observation: examine under light microscope, starting at low magnification (×4 or ×10) to locate tissues, then switching to higher magnification (×40) for detail',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-identification-7',
      data: { text: 'Identifying Tissues in Sections', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-identify-7',
      data: {
        text: 'Stem transverse section: epidermis (thin layer, outer); cortex (parenchyma, several layers); vascular bundles in a ring (dicots) or scattered (monocots); pith (parenchyma, centre). Xylem appears deeply stained (red with phloroglucinol due to lignin); phloem appears lighter stained. Root transverse section is similar but has no pith; the centre is xylem. Identify tissues by: position (outer = epidermis), staining (red = lignin = xylem), cell morphology (large, thin-walled = parenchyma; thick-walled, narrow lumen = sclerenchyma or xylem).',
      },
    },
    {
      type: 'heading',
      id: 'h-measurements-7',
      data: { text: 'Measuring Tissues and Calculating Magnification', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-measurements',
      data: {
        text: 'Use an eyepiece graticule (a scale superimposed in the microscope eyepiece) to measure distances in the section. The graticule must be calibrated against a stage micrometer (a scale on a glass slide) at each magnification. Once calibrated, measure tissue dimensions (e.g. epidermis thickness, vascular bundle diameter, cell sizes) and calculate actual sizes using the magnification. Example: at ×400 magnification, if the epidermis measures 50 graticule units and one graticule unit = 0.01 mm, then epidermis thickness = 50 × 0.01 = 0.5 mm.',
      },
    },
    {
      type: 'callout',
      id: 'callout-worked-meas',
      data: {
        style: 'worked',
        title: 'Tissue Measurement Example',
        text: 'Stem section at ×40 (calibration: 1 graticule unit = 25 μm). Epidermis measures 10 graticule units → actual thickness = 10 × 25 = 250 μm = 0.25 mm. Vascular bundle diameter = 80 graticule units → actual = 80 × 25 = 2000 μm = 2 mm. Xylem vessel diameter = 4 graticule units → actual = 4 × 25 = 100 μm.',
      },
    },
    {
      type: 'heading',
      id: 'h-errors-7',
      data: { text: 'Sources of Error and Improvements', level: 2 },
    },
    {
      type: 'list',
      id: 'list-errors-7',
      data: {
        style: 'bullet',
        items: [
          'Uneven section thickness: hand-cut sections vary in thickness; solution: use microtome for uniform thickness',
          'Over-staining: tissue too dark to observe detail; solution: dilute stain or reduce staining time',
          'Air bubbles in mounting medium: disrupt view; solution: carefully lower coverslip at angle; use needle to remove bubbles',
          'Incomplete staining: regions remain colourless; solution: ensure adequate contact with stain; stain longer if needed',
          'Tissue damage during sectioning or mounting: cells torn, structure distorted; solution: use sharp blade, gentle handling, adequate softening',
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why is ex-situ conservation in zoos not a long-term solution to species extinction? Zoo populations are small, reducing genetic diversity through inbreeding. Animals may lose natural behaviours (foraging, predator avoidance). Reintroduction success requires suitable habitat — if habitat destruction continues, there is nowhere to release captive-bred animals.",
        apply: "A population of 50 Arabian oryx in a zoo has a generation time of 5 years. The effective population size (Ne) is 30. Using the formula for inbreeding rate (ΔF = 1/(2Ne) per generation), calculate the inbreeding coefficient after 5 generations. At what point would genetic diversity be critically compromised?",
        analyze: "Compare in-situ conservation (national parks, wildlife corridors) with ex-situ conservation (zoos, seed banks, captive breeding) in terms of: scale of protection, species covered, cost per species, genetic diversity maintenance, and success rate of reintroduction programmes.",
        evaluate: "Evaluate the Svalbard Global Seed Vault as a conservation strategy for plant genetic diversity. Consider what it protects against (crop failure, conflict, natural disaster), what it cannot protect (loss of traditional agricultural knowledge, wild relatives, habitat loss), and whether banking seeds substitutes for maintaining living populations in situ.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-prac-7',
      data: {
        items: [
          { text: 'Can prepare plant tissue sections by hand-cutting or microtome', checked: false },
          { text: 'Know phloroglucinol stains lignin (xylem) red/magenta', checked: false },
          { text: 'Can identify tissues in stem/root sections: epidermis, cortex, vascular bundle, pith', checked: false },
          { text: 'Can measure tissues using eyepiece graticule and calculate actual sizes', checked: false },
          { text: 'Understand sources of error: uneven thickness, over-staining, air bubbles, tissue damage', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-prac-7',
      data: {
        text: 'Core Practical 7: cut thin plant tissue sections (hand or microtome), soak in water/ethanol, stain with phloroglucinol (lignin→red, identifies xylem/sclerenchyma) or safranin/toluidine blue, rinse, mount with coverslip, observe ×40. Identify: epidermis (outer, thin), cortex (parenchyma, layers), vascular bundles (xylem inner/red, phloem outer/light), pith (parenchyma, centre). Root similar but no pith. Measure using eyepiece graticule (calibrated against stage micrometer at each magnification). Calculate actual size = graticule reading × calibration. Errors: uneven thickness (use microtome), over-staining (dilute), air bubbles (careful mounting), incomplete staining (longer time), tissue damage (sharp blade, gentle). Improvements: use microtome, multiple measurements, compare with EM images.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method-7',
        prompt: 'Describe the step-by-step method for preparing and staining a plant tissue section.',
      },
      {
        id: 'cue-2',
        blockId: 'p-identify-7',
        prompt: 'List the tissues visible in a stem transverse section, from outside to inside.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked-meas',
        prompt: 'If a tissue measures 20 graticule units and calibration is 1 unit = 50 μm, what is the actual tissue size?',
      },
      {
        id: 'cue-4',
        blockId: 'list-errors-7',
        prompt: 'Name three sources of error in plant tissue preparation.',
      },
    ],
    summaryText: 'Method: hand-cut or microtome sections, soak in water/ethanol (soften), stain (phloroglucinol lignin→red, safranin lignin→red/orange, toluidine blue nuclei→blue), rinse, mount with coverslip, observe ×40. Tissues in stem: epidermis (thin, outer), cortex (parenchyma, multiple layers), vascular bundles in ring (dicots) or scattered (monocots) with xylem (inner, red-stained) and phloem (outer, light), sclerenchyma (thick-walled, red), pith (parenchyma, centre). Root: epidermis, cortex, vascular bundles (xylem centre), no pith. Measure using eyepiece graticule (calibrated against stage micrometer: 1 unit = known distance in μm/mm). Calculate actual = graticule reading × calibration factor. Errors: uneven thickness (microtome better), over-staining (dilute), air bubbles (careful mounting), incomplete staining (longer), tissue damage (sharp blade). Improvements: microtome (uniform), multiple measurements (mean), compare with electron micrographs.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Plant Tissue Microscopy',
      detail: 'Light microscopy of stained plant tissue sections reveals hierarchical organisation: cells → tissues → organs; essential for understanding plant structure-function relationships.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['plant tissues', 'microscopy', 'practical skills'],
    },
  ],
};
