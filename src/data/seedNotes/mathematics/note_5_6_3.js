export const note_mathematics_5_6_3 = {
  pdfPath: '/notes/mathematics/moments/tilting.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Model and calculate limits in scenarios where a rod is on the point of tilting.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Tilting?', level: 2 }
    },
    {
      id: 'p-1',
      type: 'paragraph',
      data: { text: 'A rod will tilt (i.e., begin to rotate) about a pivot if the resultant moment about that specific pivot is non-zero. Common scenarios include a person walking along a plank to its edge or weights added to one end of a seesaw.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Logic of the "Point of Tilting"', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'When a rod is exactly on the point of tilting about a given support, the reaction forces at all other supports become strictly zero.' },
          { text: 'At this specific point, the rod is mechanically still considered in equilibrium (limiting equilibrium).' },
          { text: 'Taking moments strictly about the tilting pivot is essential as it entirely bypasses the need to find the reaction force at that pivot.' }
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hidden "Tilting" Phrases',
        text: 'Questions will not always use the exact word "tilting". Look out for:<br>- "How far along the plank is it safe to walk?" (Tilts if they step further.)<br>- "Find the maximum mass that could be hung from a rod while keeping it horizontal." (Rod tilts and ceases to be horizontal beyond this mass.)'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Apply Common Sense',
        text: 'Always visualize the system realistically. If a rod is supported by two distinct supports and a mass is strictly placed between them, the rod structurally can never tilt (even if it might break under sheer weight from bending!).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'When an object is on the point of tilting about a pivot, the normal reaction at any other support is zero. You can solve finding the maximum added mass or distance by taking moments about the tilting pivot while keeping the system in equilibrium.' }
    }
  ],
  recall: {
    enabled: true,
    summaryText: 'At the point of tilting, the reaction at any other support is zero. The system remains in limiting equilibrium so we take moments about the pivot of the tilt.',
    cues: [
      { id: 'cue-1', blockId: 'p-1', prompt: 'In rotational mechanics, what exactly causes a rod to tilt?' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What happens to the reaction forces at other supports when a rod is on the point of tilting?' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Why is it usually best to take moments directly about the tilting pivot?' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What phrasing might an examiner use to imply "tilting" without explicitly using the word?' }
    ],
    ready: true
  },
  evidence: [],
  mentions: []
};