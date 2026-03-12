export const note_biology_1_2_12 = {
  blocks: [
    {
      id: 'obj-replication',
      type: 'objective',
      data: { text: 'Describe the process of semi-conservative DNA replication, including the roles of DNA helicase and DNA polymerase, and explain the evidence from the Meselson-Stahl experiment.' },
    },
    {
      id: 'h-semi',
      type: 'heading',
      data: { text: 'Semi-Conservative Replication', level: 2 },
    },
    {
      id: 'p-semi',
      type: 'paragraph',
      data: { text: 'DNA replication produces two new identical DNA molecules from one original molecule. Each new molecule contains one original (parental) strand and one newly synthesised strand. This is called <strong>semi-conservative replication</strong> because half of each new molecule is conserved from the original.' },
    },
    {
      id: 'callout-definition',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Semi-Conservative?',
        text: '"Semi" = half. Each new DNA molecule keeps one original strand (conserved) and builds one new complementary strand. Two molecules are produced from one, both identical to the original.',
      },
    },
    {
      id: 'h-stages',
      type: 'heading',
      data: { text: 'Stages of DNA Replication', level: 2 },
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '<strong>Unwinding:</strong> The enzyme <strong>DNA helicase</strong> moves along the DNA molecule, breaking the hydrogen bonds between complementary base pairs. This unwinds the double helix, forming a Y-shaped <strong>replication fork</strong> with two exposed single-stranded template strands.',
          '<strong>Base pairing:</strong> Free DNA nucleotides (present in the nucleus, with A, T, C, or G bases) move to the exposed template strands and form hydrogen bonds with their complementary bases by <strong>complementary base pairing</strong> (A with T, C with G).',
          '<strong>Phosphodiester bond formation:</strong> <strong>DNA polymerase</strong> catalyses the formation of phosphodiester bonds between adjacent nucleotides on the new strand, joining them into a continuous chain. DNA polymerase can only add nucleotides to the 3′\u2212OH end of a growing strand (reads template 3′\u21925′, builds new strand 5′\u21923′).',
          '<strong>Result:</strong> Two new identical DNA double helices are formed, each consisting of one old (template) strand and one new strand.',
        ],
      },
    },
    {
      id: 'svg-replication',
      type: 'svg',
      data: {
        caption: 'Semi-conservative DNA replication: DNA helicase unwinds the helix; free nucleotides pair with template strands; DNA polymerase joins them. Two identical daughter molecules result.',
        svg: '<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="580" height="280" fill="#f8f9ff" rx="8"/><text x="145" y="15" fill="#666" font-size="11" text-anchor="middle">Original DNA</text><g stroke="#3498db" stroke-width="2.5" fill="none"><path d="M100,25 C80,40 120,55 100,70 C80,85 120,100 100,115"/><path d="M190,25 C210,40 170,55 190,70 C210,85 170,100 190,115"/></g><g font-size="10" text-anchor="middle"><rect x="110" y="32" width="18" height="13" rx="2" fill="#e74c3c"/><text x="119" y="42" fill="white">A</text><rect x="162" y="32" width="18" height="13" rx="2" fill="#f39c12"/><text x="171" y="42" fill="white">T</text><line x1="128" y1="38" x2="162" y2="38" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/><rect x="108" y="52" width="18" height="13" rx="2" fill="#27ae60"/><text x="117" y="62" fill="white">C</text><rect x="164" y="52" width="18" height="13" rx="2" fill="#8e44ad"/><text x="173" y="62" fill="white">G</text><line x1="126" y1="58" x2="164" y2="58" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/><rect x="106" y="72" width="18" height="13" rx="2" fill="#f39c12"/><text x="115" y="82" fill="white">T</text><rect x="166" y="72" width="18" height="13" rx="2" fill="#e74c3c"/><text x="175" y="82" fill="white">A</text><line x1="124" y1="78" x2="166" y2="78" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/><rect x="106" y="92" width="18" height="13" rx="2" fill="#8e44ad"/><text x="115" y="102" fill="white">G</text><rect x="164" y="92" width="18" height="13" rx="2" fill="#27ae60"/><text x="173" y="102" fill="white">C</text><line x1="124" y1="98" x2="164" y2="98" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/></g><text x="145" y="140" fill="#e74c3c" font-size="11" text-anchor="middle">DNA helicase unwinds</text><line x1="145" y1="148" x2="145" y2="158" stroke="#e74c3c" stroke-width="1.5"/><polygon points="145,158 140,150 150,150" fill="#e74c3c"/><g stroke="#3498db" stroke-width="2.5" fill="none"><path d="M60,168 C40,183 80,198 60,213"/><path d="M108,168 C128,183 88,198 108,213"/></g><g stroke="#e67e22" stroke-width="2" stroke-dasharray="4,2" fill="none"><path d="M60,168 C40,183 80,198 60,213"/></g><g font-size="10" text-anchor="middle"><rect x="66" y="174" width="16" height="12" rx="2" fill="#e74c3c"/><text x="74" y="183" fill="white">A</text><rect x="90" y="174" width="16" height="12" rx="2" fill="#f39c12"/><text x="98" y="183" fill="white">T</text><line x1="82" y1="180" x2="90" y2="180" stroke="#aaa" stroke-width="1" stroke-dasharray="2,2"/><rect x="63" y="192" width="16" height="12" rx="2" fill="#27ae60"/><text x="71" y="201" fill="white">C</text><rect x="91" y="192" width="16" height="12" rx="2" fill="#8e44ad"/><text x="99" y="201" fill="white">G</text><line x1="79" y1="198" x2="91" y2="198" stroke="#aaa" stroke-width="1" stroke-dasharray="2,2"/></g><text x="84" y="230" fill="#666" font-size="10" text-anchor="middle">New bases</text><text x="84" y="241" fill="#666" font-size="10" text-anchor="middle">pair up</text><g stroke="#3498db" stroke-width="2.5" fill="none"><path d="M260,168 C280,183 240,198 260,213"/><path d="M308,168 C288,183 328,198 308,213"/></g><g font-size="10" text-anchor="middle"><rect x="266" y="174" width="16" height="12" rx="2" fill="#e74c3c"/><text x="274" y="183" fill="white">A</text><rect x="290" y="174" width="16" height="12" rx="2" fill="#f39c12"/><text x="298" y="183" fill="white">T</text><line x1="282" y1="180" x2="290" y2="180" stroke="#aaa" stroke-width="1" stroke-dasharray="2,2"/></g><text x="284" y="230" fill="#27ae60" font-size="10" text-anchor="middle">DNA polymerase</text><text x="284" y="241" fill="#27ae60" font-size="10" text-anchor="middle">joins new strand</text><text x="440" y="15" fill="#666" font-size="11" text-anchor="middle">Two daughter molecules</text><g stroke="#3498db" stroke-width="2" fill="none"><path d="M400,25 C385,40 415,55 400,70 C385,85 415,100 400,115 C385,130 415,145 400,160 C385,175 415,190 400,205"/><path d="M430,25 C445,40 415,55 430,70 C445,85 415,100 430,115 C445,130 415,145 430,160 C445,175 415,190 430,205"/></g><g stroke="#e67e22" stroke-width="2" fill="none"><path d="M475,25 C460,40 490,55 475,70 C460,85 490,100 475,115 C460,130 490,145 475,160 C460,175 490,190 475,205"/></g><g stroke="#3498db" stroke-width="2" fill="none"><path d="M505,25 C520,40 490,55 505,70 C520,85 490,100 505,115 C520,130 490,145 505,160 C520,175 490,190 505,205"/></g><text x="415" y="225" fill="#3498db" font-size="10" text-anchor="middle">Old + New</text><text x="490" y="225" fill="#3498db" font-size="10" text-anchor="middle">Old + New</text><text x="415" y="237" fill="#888" font-size="9" text-anchor="middle">(identical to original)</text><text x="490" y="237" fill="#888" font-size="9" text-anchor="middle">(identical to original)</text></svg>',
      },
    },
    {
      id: 'callout-enzymes',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Enzymes',
        text: '<strong>DNA helicase</strong> \u2014 unwinds the double helix by breaking hydrogen bonds between base pairs. Creates the replication fork.\n<strong>DNA polymerase</strong> \u2014 joins free nucleotides together by forming phosphodiester bonds along the template strand. Works in the 5′\u21923′ direction only.',
      },
    },
    {
      id: 'h-leading-lagging',
      type: 'heading',
      data: { text: 'Continuous and Discontinuous Synthesis', level: 2 },
    },
    {
      id: 'list-leading-lagging',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Because DNA polymerase can only add nucleotides in the 5′\u21923′ direction, the two new strands are made differently.',
          '<strong>Leading strand</strong>: synthesised continuously in the same direction as the unwinding replication fork (5′\u21923′ towards the fork).',
          '<strong>Lagging strand</strong>: synthesised discontinuously in short fragments (Okazaki fragments) in the opposite direction, each starting from a new RNA primer. Fragments are later joined together.',
          'Both strands end up as complete complementary copies of their respective template strands.',
        ],
      },
    },
    {
      id: 'h-meselson',
      type: 'heading',
      data: { text: 'Meselson-Stahl Experiment (1958)', level: 2 },
    },
    {
      id: 'p-meselson',
      type: 'paragraph',
      data: { text: 'Meselson and Stahl provided experimental evidence that DNA replication is semi-conservative, using nitrogen isotope labelling.' },
    },
    {
      id: 'list-meselson',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Bacteria grown in a medium containing only heavy nitrogen (<sup>15</sup>N) \u2014 all DNA becomes heavy (<sup>15</sup>N/<sup>15</sup>N).',
          'Bacteria transferred to a medium containing only light nitrogen (<sup>14</sup>N) and allowed to replicate once.',
          '<strong>After one round of replication</strong>: ALL DNA molecules were of intermediate density (<sup>14</sup>N/<sup>15</sup>N hybrid). This ruled out conservative replication (which would give half heavy, half light).',
          'Bacteria allowed to replicate a second time.',
          '<strong>After two rounds</strong>: HALF the DNA was intermediate density (<sup>14</sup>N/<sup>15</sup>N) and HALF was light (<sup>14</sup>N/<sup>14</sup>N). This matched the prediction of semi-conservative replication exactly.',
        ],
      },
    },
    {
      id: 'callout-meselson-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Meselson-Stahl Predictions',
        text: 'Three models were proposed before the experiment: conservative (old double helix intact; new double helix completely new), semi-conservative (each new molecule = 1 old + 1 new strand), and dispersive (old and new DNA mixed randomly throughout). The result after one generation (ALL hybrid density) ruled out conservative. The result after two generations (50% hybrid, 50% light) confirmed semi-conservative.',
      },
    },
    {
      id: 'checklist-replication',
      type: 'checklist',
      data: {
        items: [
          { text: 'Explain what semi-conservative replication means', checked: false },
          { text: 'Describe the role of DNA helicase in replication', checked: false },
          { text: 'Describe the role of DNA polymerase in replication', checked: false },
          { text: 'Explain why one strand is made continuously and the other discontinuously', checked: false },
          { text: 'Describe the Meselson-Stahl experiment and explain how the results support semi-conservative replication', checked: false },
        ],
      },
    },
    {
      id: 'summary-replication',
      type: 'summary',
      data: { text: 'Semi-conservative DNA replication: DNA helicase unwinds the helix (breaks H-bonds at replication fork). Free nucleotides pair with complementary bases on each template strand. DNA polymerase forms phosphodiester bonds (5′\u21923′ direction only): leading strand synthesised continuously; lagging strand discontinuously (Okazaki fragments). Two identical daughter molecules, each with one original and one new strand. Meselson-Stahl (1958): <sup>15</sup>N/<sup>14</sup>N experiment showed ALL hybrid DNA after 1st generation and 50% hybrid / 50% light after 2nd generation \u2014 confirmed semi-conservative.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-semi', prompt: 'What does semi-conservative mean in the context of DNA replication?' },
      { id: 'cue-2', blockId: 'list-stages', prompt: 'Name two enzymes involved in DNA replication and describe the role of each.' },
      { id: 'cue-3', blockId: 'list-leading-lagging', prompt: 'Why is one new strand synthesised continuously and the other discontinuously?' },
      { id: 'cue-4', blockId: 'h-meselson', prompt: 'Describe the Meselson-Stahl experiment. What did the results after one and two generations show?' },
      { id: 'cue-5', blockId: 'callout-meselson-tip', prompt: 'How did Meselson and Stahl rule out conservative replication?' },
    ],
    summaryText: 'Semi-conservative: each daughter DNA = 1 old + 1 new strand. Stages: 1. DNA helicase unwinds (breaks H-bonds) \u2192 2. Free nucleotides pair by complementary base pairing \u2192 3. DNA polymerase forms phosphodiester bonds (5\u21923\ direction). Leading strand: continuous; lagging strand: discontinuous (Okazaki fragments). Meselson-Stahl: \u00b9\u2075N/\u00b9\u2074N labels; after 1 generation: all hybrid; after 2: half hybrid + half light \u2192 confirms semi-conservative.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Meselson-Stahl semi-conservative replication (1958)', detail: 'Classic experiment using \u00b9\u2074N/\u00b9\u2075N CsCl density-gradient centrifugation. Results unambiguously supported semi-conservative replication.', year: '1958', source: 'AQA A Level Biology Student Book 1, Chapter 4, pp82-85', tags: ['DNA-replication', 'Meselson-Stahl', 'molecular-biology'] },
  ],
};
