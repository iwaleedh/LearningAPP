export const note_olevel_maths_core_1_9_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/problem-solving-with-ratios.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply ratio skills to multi-step real-world problems involving scaling, mixing, maps, and combining ratios.' }
    },
    {
      id: 'h-map-scale',
      type: 'heading',
      data: { text: 'Map Scales and Scale Drawings', level: 2 }
    },
    {
      id: 'p-map-scale',
      type: 'paragraph',
      data: { text: 'A scale of 1 : n means 1 unit on the drawing represents n units in reality. Use the ratio to convert between map and actual distances.' }
    },
    {
      id: 'callout-worked-map',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Map Scale Problem',
        text: 'A map has scale 1 : 50 000. Two cities are 6 cm apart on the map. Find the real distance.<br><br>Real distance = 6 × 50 000 = 300 000 cm = 3 000 m = <strong>3 km</strong>'
      }
    },
    {
      id: 'h-recipe-scaling',
      type: 'heading',
      data: { text: 'Scaling Recipes and Mixtures', level: 2 }
    },
    {
      id: 'callout-worked-recipe',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Scaling a Recipe',
        text: 'A recipe for 4 people uses flour : sugar = 300 g : 120 g.<br>Ratio = 300 : 120 = 5 : 2<br><br>For 10 people (multiply quantities by 10/4 = 2.5):<br>Flour = 300 × 2.5 = <strong>750 g</strong><br>Sugar = 120 × 2.5 = <strong>300 g</strong>'
      }
    },
    {
      id: 'h-combining',
      type: 'heading',
      data: { text: 'Combining Two Ratios', level: 2 }
    },
    {
      id: 'p-combining',
      type: 'paragraph',
      data: { text: 'To combine A : B and B : C into A : B : C, make the B parts equal (find LCM of the B values).' }
    },
    {
      id: 'callout-worked-combine',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Combining Ratios',
        text: 'A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.<br><br>Make B equal: LCM(3, 4) = 12<br>A : B = 8 : 12 (×4)<br>B : C = 12 : 15 (×3)<br><br>A : B : C = <strong>8 : 12 : 15</strong>'
      }
    },
    {
      id: 'callout-key-ratio-prob',
      type: 'callout',
      data: { style: 'key', title: 'Key Approach', text: 'Identify what type of ratio problem it is:<br>• Map/scale: multiply/divide by the scale factor.<br>• Sharing: find 1 part, multiply.<br>• Scaling: find the multiplier, apply it.<br>• Combining: use LCM to link ratios.' }
    },
    {
      id: 'callout-tip-ratio-prob',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'For map questions, track the unit conversion carefully (cm → m → km). For combining ratios, write out the matched versions clearly before reading off A : B : C.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Ratio problems: maps (multiply by scale), recipes (scale by people ratio), combining (match middle term using LCM). Always check units and order in final answer.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-worked-map', prompt: 'A map has scale 1 : 50 000. Two cities are 6 cm apart. Find the real distance in km.' },
      { id: 'cue-2', blockId: 'callout-worked-recipe', prompt: 'A recipe for 4 uses 300 g flour. How much flour for 10 people?' },
      { id: 'cue-3', blockId: 'callout-worked-combine', prompt: 'A : B = 2 : 3 and B : C = 4 : 5. Find A : B : C.' },
      { id: 'cue-4', blockId: 'h-combining', prompt: 'Explain the method for combining two ratios that share a term.' },
      { id: 'cue-5', blockId: 'callout-tip-ratio-prob', prompt: 'What common mistake should you watch out for in map scale questions?' }
    ],
    summaryText: 'Ratio applications: scale (maps), share (divide quantities), scaling (multiply), combine (use LCM on shared term). Check units throughout.',
    ready: true
  },
  evidence: []
};
