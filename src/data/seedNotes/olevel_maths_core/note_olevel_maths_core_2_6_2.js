export const note_olevel_maths_core_2_6_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/equations-with-unknowns-on-both-sides.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve linear equations where the unknown appears on both sides, by collecting all variable terms on one side and all constant terms on the other.' }
    },
    {
      id: 'h-concept',
      type: 'heading',
      data: { text: 'Unknowns on Both Sides', level: 2 }
    },
    {
      id: 'p-concept',
      type: 'paragraph',
      data: { text: 'Some equations have the variable (x) on <strong>both sides</strong>, such as 5x − 3 = 2x + 9. The strategy is to collect all x-terms onto one side and all constant terms onto the other, then solve.' }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Strategy',
        text: '1. Choose which side you want x to end up on (choose the side with the larger x coefficient to avoid negative x).<br>2. Add or subtract the smaller x-term from both sides to remove x from that side.<br>3. Move the constants to the opposite side.<br>4. Solve the resulting one-step equation.'
      }
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Solving Step by Step', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Basic — Unknowns Both Sides',
        text: '<strong>(a)</strong> 5x − 3 = 2x + 9<br>Subtract 2x from both sides: 3x − 3 = 9<br>Add 3 to both sides: 3x = 12<br>Divide by 3: x = <strong>4</strong><br>Check: LHS = 5(4) − 3 = 17; RHS = 2(4) + 9 = 17 ✓<br><br><strong>(b)</strong> 7x + 2 = 3x + 18<br>Subtract 3x: 4x + 2 = 18<br>Subtract 2: 4x = 16<br>Divide by 4: x = <strong>4</strong>'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: With Negatives',
        text: '<strong>(a)</strong> 8 − 3x = 2x − 7<br>Add 3x to both sides: 8 = 5x − 7<br>Add 7: 15 = 5x<br>Divide by 5: x = <strong>3</strong><br>Check: LHS = 8 − 9 = −1; RHS = 6 − 7 = −1 ✓<br><br><strong>(b)</strong> 10 − x = 4 + 2x<br>Add x to both sides: 10 = 4 + 3x<br>Subtract 4: 6 = 3x<br>Divide by 3: x = <strong>2</strong>'
      }
    },
    {
      id: 'h-brackets',
      type: 'heading',
      data: { text: 'With Brackets on Both Sides', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Expand Then Collect',
        text: 'Solve 3(x + 5) = 2(x + 8)<br><br>Step 1 — Expand both sides:<br>3x + 15 = 2x + 16<br><br>Step 2 — Collect x-terms: subtract 2x from both sides:<br>x + 15 = 16<br><br>Step 3 — Subtract 15:<br>x = <strong>1</strong><br><br>Check: LHS = 3(6) = 18; RHS = 2(9) = 18 ✓<br><br><strong>Another example:</strong> 5(2x − 3) = 4(3x − 1)<br>Expand: 10x − 15 = 12x − 4<br>Subtract 10x: −15 = 2x − 4<br>Add 4: −11 = 2x<br>x = <strong>−5.5</strong>'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Keep x Positive',
        text: 'When collecting x-terms, try to move the <em>smaller</em> coefficient across, so the resulting x coefficient is <strong>positive</strong>. This avoids dividing by a negative, which is a common source of sign errors.<br><br>E.g. 2x + 5 = 5x − 1 → subtract 2x (not 5x): 5 = 3x − 1 → cleaner to work with.'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Check BOTH Sides!',
        text: 'Always substitute your answer into BOTH sides of the original equation separately, then confirm they are equal.<br><br>For 5x − 3 = 2x + 9 with x = 4:<br>LHS: 5(4) − 3 = 20 − 3 = 17<br>RHS: 2(4) + 9 = 8 + 9 = 17<br>17 = 17 ✓'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I collect all x-terms to one side by adding/subtracting the smaller x coefficient', checked: false },
          { text: 'I move all constants to the opposite side', checked: false },
          { text: 'For bracket equations, I expand first then collect', checked: false },
          { text: 'I check my answer in BOTH sides of the original equation', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'When x appears on both sides, collect all variable terms onto one side (subtract the smaller x coefficient), and all constants to the other, then solve. If brackets are present, expand them first. Always check by substituting into both sides of the original equation.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the 4-step strategy for solving equations with unknowns on both sides?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Solve 5x − 3 = 2x + 9. Show all steps and the check.' },
      { id: 'cue-3', blockId: 'callout-worked2', prompt: 'Solve 8 − 3x = 2x − 7. Why is it helpful to add 3x to both sides?' },
      { id: 'cue-4', blockId: 'callout-worked3', prompt: 'Solve 3(x + 5) = 2(x + 8). What do you do before collecting terms?' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'In 2x + 5 = 5x − 1, why should you subtract 2x (not 5x) first?' },
    ],
    summaryText: 'Collect variable terms to one side and constants to the other; expand brackets first if present; always check both sides of the original equation.',
    ready: true,
  },
  evidence: [],
};
