/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 2
 * "Structural isomerism"
 */
export const note_chemistry_1_4_2 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Understand structural isomerism. Draw and name structural isomers. Distinguish between chain isomers, positional isomers, and functional group isomers.' } },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Check that two structures really are isomers",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Structural isomers have the same molecular formula but different connectivity: atoms are bonded in a different order. Chain isomerism changes the carbon skeleton; position isomerism changes the location of a functional group or substituent; functional-group isomerism changes the functional group. Rotating or flipping a drawing does not create a new structural isomer.<br/><br/>To enumerate alkane isomers, begin with the straight chain, then shorten the parent chain and add the remaining carbons as branches. Check whether each new drawing duplicates an earlier one after renumbering. Confirm the total atom count and that every carbon has four bonds."
  }
},
{ id: 'h-def', type: 'heading', data: { text: 'What is Structural Isomerism?', level: 2 } },
    { id: 'callout-def', type: 'callout', data: {
      style: 'key', title: 'Definition: Structural Isomers',
      text: '<strong>Structural isomers</strong> are compounds with the same <strong>molecular formula</strong> but different <strong>structural formulae</strong> — the atoms are connected in a different order or arrangement.<br/><br/>They have different IUPAC names, different physical properties (bp, mp, solubility), and may have different chemical properties.'
    }},
    { id: 'h-types', type: 'heading', data: { text: 'Three Types of Structural Isomerism', level: 2 } },
    { id: 'svg-isomer-types', type: 'svg', data: {
      caption: 'Three types of structural isomerism with structural formula examples',
      svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="185" height="230" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/><rect x="197" y="0" width="185" height="230" rx="6" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1.5"/><rect x="394" y="0" width="186" height="230" rx="6" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.5"/><text x="92" y="22" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="13">Chain Isomers</text><text x="290" y="22" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Positional Isomers</text><text x="487" y="22" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">Functional Group</text><text x="92" y="40" text-anchor="middle" fill="#374151" font-size="10">Different C skeleton</text><text x="290" y="40" text-anchor="middle" fill="#374151" font-size="10">Same chain; FG in different position</text><text x="487" y="40" text-anchor="middle" fill="#374151" font-size="10">Different functional group entirely</text><line x1="8" y1="50" x2="177" y2="50" stroke="#93c5fd" stroke-width="1"/><line x1="205" y1="50" x2="374" y2="50" stroke="#6ee7b7" stroke-width="1"/><line x1="402" y1="50" x2="572" y2="50" stroke="#fcd34d" stroke-width="1"/><text x="92" y="70" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="11">Same formula: C₄H₁₀</text><text x="10" y="92" font-family="monospace" fill="#1d4ed8" font-size="11">1. CH₃CH₂CH₂CH₃</text><text x="10" y="108" fill="#374151" font-size="10">   butane (straight chain)</text><text x="10" y="130" font-family="monospace" fill="#1d4ed8" font-size="11">2. CH₃CH(CH₃)CH₃</text><text x="10" y="146" fill="#374151" font-size="10">   2-methylpropane (branched)</text><text x="10" y="168" fill="#475569" font-size="10">bp: butane −1°C</text><text x="10" y="182" fill="#475569" font-size="10">     2-methylpropane −12°C</text><text x="10" y="200" fill="#475569" font-size="10">More branching → lower bp</text><text x="10" y="214" fill="#475569" font-size="10">due to weaker London forces</text><text x="205" y="70" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="11">Same formula: C₄H₈</text><text x="207" y="92" font-family="monospace" fill="#15803d" font-size="11">1. CH₂=CHCH₂CH₃</text><text x="207" y="108" fill="#374151" font-size="10">   but-1-ene (C=C at 1–2)</text><text x="207" y="130" font-family="monospace" fill="#15803d" font-size="11">2. CH₃CH=CHCH₃</text><text x="207" y="146" fill="#374151" font-size="10">   but-2-ene (C=C at 2–3)</text><text x="207" y="168" fill="#475569" font-size="10">Same FG (C=C) — only its</text><text x="207" y="182" fill="#475569" font-size="10">position in chain differs</text><text x="207" y="200" fill="#475569" font-size="10">Also: butan-1-ol vs</text><text x="207" y="214" fill="#475569" font-size="10">butan-2-ol (C₄H₉OH)</text><text x="402" y="70" text-anchor="middle" fill="#78350f" font-weight="bold" font-size="11">Same formula: C₂H₆O</text><text x="402" y="92" font-family="monospace" fill="#92400e" font-size="11">1. CH₃CH₂OH</text><text x="402" y="108" fill="#374151" font-size="10">   ethanol (alcohol, –OH)</text><text x="402" y="130" font-family="monospace" fill="#92400e" font-size="11">2. CH₃OCH₃</text><text x="402" y="146" fill="#374151" font-size="10">   methoxymethane (ether, –O–)</text><text x="402" y="168" fill="#475569" font-size="10">Completely different FGs!</text><text x="402" y="182" fill="#475569" font-size="10">Very different chemistry</text><text x="402" y="200" fill="#475569" font-size="10">e.g. ethanol reacts with Na;</text><text x="402" y="214" fill="#475569" font-size="10">methoxymethane does not</text></svg>`
    }},
    { id: 'callout-example-c5h12', type: 'callout', data: {
      style: 'worked', title: 'Worked: All structural isomers of C₅H₁₂',
      text: 'For C&#x2085;H&#x2081;&#x2082; there are <strong>3 chain isomers</strong>:<br/><br/>1. <strong>Pentane:</strong> CH&#x2083;CH&#x2082;CH&#x2082;CH&#x2082;CH&#x2083; (straight chain)<br/>2. <strong>2-Methylbutane:</strong> CH&#x2083;CH(CH&#x2083;)CH&#x2082;CH&#x2083;<br/>3. <strong>2,2-Dimethylpropane:</strong> C(CH&#x2083;)&#x2084;<br/><br/>Boiling points decrease with branching (less surface area &#x2192; weaker London forces):<br/>pentane (36&#xB0;C) &gt; 2-methylbutane (28&#xB0;C) &gt; 2,2-dimethylpropane (10&#xB0;C)'
    }},
    { id: 'callout-drawing-tips', type: 'callout', data: {
      style: 'tip', title: 'Tips for Drawing Isomers in Exams',
      text: '&#x2022; <strong>Avoid duplicates:</strong> A bent chain is still the same continuous main chain. Always check the IUPAC name — if it is the same, it is the same molecule.<br/>&#x2022; <strong>Combine isomer types:</strong> You aren&#x2019;t limited to just chain <em>or</em> positional isomers. Often a mix of both is needed.<br/>&#x2022; <strong>Consider rings and unusual functional groups:</strong> Cycloalkanes are isomeric with alkenes (both CₙH₂ₙ). Aldehydes and ketones share the same formula (CₙH₂ₙO).'
    }}
  ,
    {
      id: 'callout-exam-4-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Avoid Duplicate Isomers",
        text: "Students often draw the same isomer twice simply by bending the carbon chain. Always find the longest continuous chain and name the molecule to check if two drawn structures are actually identical."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "C₅H₁₂ has three structural isomers: <strong>pentane</strong>, <strong>2-methylbutane</strong> and <strong>2,2-dimethylpropane</strong>. “3-methylbutane” is the same connectivity as 2-methylbutane, seen from the opposite end. Butan-1-ol and butan-2-ol are position isomers; ethanol and methoxymethane are functional-group isomers with formula C₂H₆O."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Same empirical formula is insufficient: substances must have the same molecular formula to be structural isomers. Two conformations linked by rotation around a single bond are not different structural isomers."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Define structural isomerism.",
        "checked": false
      },
      {
        "text": "How many alkane structural isomers have formula C₅H₁₂?",
        "checked": false
      },
      {
        "text": "Why is 3-methylbutane not a fourth isomer?",
        "checked": false
      },
      {
        "text": "What type of isomerism relates ethanol and methoxymethane?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Structural isomers have the same molecular formula but different connectivity: atoms are bonded in a different order. Chain isomerism changes the carbon skeleton; position isomerism changes the location of a functional group or substituent; functional-group isomerism changes the functional group. Rotating or flipping a drawing does not create a new structural isomer."
  }
}
  ],
  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Define structural isomerism.",
      "answer": "The same molecular formula with different connectivity of atoms."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "How many alkane structural isomers have formula C₅H₁₂?",
      "answer": "Three: pentane, 2-methylbutane and 2,2-dimethylpropane."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why is 3-methylbutane not a fourth isomer?",
      "answer": "Renumbering from the opposite end gives 2-methylbutane; the connectivity has not changed."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What type of isomerism relates ethanol and methoxymethane?",
      "answer": "Functional-group isomerism: both are C₂H₆O, but one is an alcohol and the other an ether."
    }
  ],
  "summaryText": "Structural isomers have the same molecular formula but different connectivity: atoms are bonded in a different order. Chain isomerism changes the carbon skeleton; position isomerism changes the location of a functional group or substituent; functional-group isomerism changes the functional group. Rotating or flipping a drawing does not create a new structural isomer.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}], mentions: []
};
