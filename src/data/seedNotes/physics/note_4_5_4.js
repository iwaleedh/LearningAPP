export const note_physics_4_5_4 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Derive and apply expressions for centripetal acceleration and centripetal force; identify the source of centripetal force.' }, terms: ['centripetal acceleration', 'centripetal force'] },
    { id: 'h-cent', type: 'heading', data: { text: 'Centripetal Acceleration and Force', level: 2 }, terms: [] },
    { id: 'eq-ac', type: 'equation', data: { html: 'a = v\u00b2/r = r\u03c9\u00b2', caption: 'Centripetal acceleration (towards centre)' }, terms: [] },
    { id: 'eq-fc', type: 'equation', data: { html: 'F = mv\u00b2/r = mr\u03c9\u00b2', caption: 'Centripetal force (towards centre)' }, terms: [] },
    { id: 'p-cent', type: 'paragraph', data: { text: 'An object in circular motion constantly changes direction, so it accelerates towards the centre. This requires a centripetal force. The force does no work (perpendicular to velocity) so speed stays constant.' }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Sources of Centripetal Force', text: '\u2022 Gravity: orbiting planets/satellites\n\u2022 Tension: conical pendulum, ball on string\n\u2022 Friction: car on curved road\n\u2022 Normal force: wall of death, banked track' }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can calculate centripetal acceleration and force', checked: false }, { text: 'I can identify the source of centripetal force', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding', text: 'Understand: Centripetal force is not a new type of force \u2014 it is provided by an existing force (gravity, tension, friction).\n\nApply: A 1500 kg car rounds a 50 m curve at 15 m/s. Find the centripetal force and identify its source.\n\nAnalyze: At the top of a vertical circle, weight and tension both act downward. Write F=ma for this point.\n\nEvaluate: Centrifugal force is called a fictitious force. Explain what this means for a passenger in a turning car.' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'a=v\u00b2/r=r\u03c9\u00b2. F=mv\u00b2/r. Always towards centre. Centripetal force provided by existing forces. No work done (\u22a5 to v).' }, terms: [] },
  ],
  recall: { enabled: true, cues: [{ id: 'cue-1', blockId: 'eq-ac', prompt: 'State the centripetal acceleration equations.' }, { id: 'cue-2', blockId: 'callout-key', prompt: 'Give four examples of centripetal force sources.' }], summaryText: 'a=v\u00b2/r. F=mv\u00b2/r. Towards centre. Sources: gravity, tension, friction, normal.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 Topic 5', detail: 'Centripetal force', year: '2021', source: 'Pearson Edexcel', tags: ['centripetal'] }],
};
