export const note_cpe_4_9_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Speaking Part 2: Collaborative task (discussing visual prompts).' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 2: Collaborative Task', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You and your partner receive <strong>visual prompts</strong> (usually a diagram with a central question and several concepts/images). You discuss the prompts together for about <strong>4 minutes</strong>, then have <strong>1 minute</strong> to reach a decision or conclusion. This is a genuine collaboration, not two monologues.' } },
    { id: 'h-2', type: 'heading', data: { text: 'CPE vs CAE Part 2', level: 2 } },
    { id: 'list-diff', type: 'list', data: { style: 'bullet', items: [{ text: 'CPE Part 2 is the collaborative task (like CAE Part 3) — NOT the long turn.' }, { text: 'The discussion is <strong>longer</strong> (4 min vs 3 min) and requires <strong>deeper engagement</strong> with abstract ideas.' }, { text: 'You must <strong>negotiate, evaluate, and reach a conclusion</strong> — not just list ideas.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategies', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Start by framing</strong>: "Shall we start by looking at…?", "There are several angles we could take here."' }, { text: '<strong>Develop each point</strong>: Don\'t just name ideas. Explore pros, cons, and implications.' }, { text: '<strong>Engage with your partner</strong>: "That\'s a valid point. Building on that…", "I hadn\'t considered that — good point."' }, { text: '<strong>Manage time</strong>: Discuss most prompts, then shift to decision phase: "So, if we had to choose…"' }, { text: '<strong>Reach a conclusion</strong>: You don\'t have to agree, but you must discuss and decide: "On balance, I think we\'d both lean towards…"' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '<strong>Listing without depth</strong>: "This is important, and this is important too" — examiners want analysis, not lists.<br/><strong>Dominating</strong>: Share the floor. Ask for and respond to your partner\'s views.<br/><strong>Not reaching a decision</strong>: In the final minute, you MUST try to agree or explain disagreement.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 2: 4 min collaborative discussion + 1 min decision on visual prompts. Frame the discussion, develop points with depth, engage with partner, manage time, and reach a conclusion. Analyse, don\'t list.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 2: 4 min discussion + 1 min decision on visual prompts. Collaborate genuinely, develop points with depth, engage with partner, reach a conclusion.',
    cues: [
      { id: 'cue-1', blockId: 'list-strat', prompt: 'What are the five key strategies for CPE Speaking Part 2?', answer: '1. Frame the discussion ("Shall we start by…"). 2. Develop each point with depth (pros, cons, implications). 3. Engage with partner ("That\'s a valid point, building on that…"). 4. Manage time (cover most prompts, shift to decision). 5. Reach a conclusion ("On balance, we\'d lean towards…").' },
    ]
  },
  evidence: [], mentions: []
};
