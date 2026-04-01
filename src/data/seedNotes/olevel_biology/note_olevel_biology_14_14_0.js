export const note_olevel_biology_14_14_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/14 Coordination And Response/14-1-1-nervous-system-reflex-arc.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure of the nervous system (CNS and PNS); trace the sequence of a reflex arc from stimulus to response; explain the advantages of reflex actions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Nervous System — Overview', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The <strong>nervous system</strong> allows the body to detect changes in the environment (<strong>stimuli</strong>) and produce appropriate <strong>responses</strong>. It is composed of two divisions: the <strong>central nervous system (CNS)</strong>, which processes information, and the <strong>peripheral nervous system (PNS)</strong>, which carries signals to and from the CNS.' }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Divisions of the nervous system',
        headers: ['Division', 'Components', 'Function'],
        rows: [
          ['Central Nervous System (CNS)', 'Brain + Spinal cord', 'Processes and coordinates all nervous activity; makes decisions'],
          ['Peripheral Nervous System (PNS)', 'All nerves outside brain and spinal cord', 'Carries impulses between CNS and the rest of the body']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Reflex Arc', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'A <strong>reflex action</strong> is a rapid, automatic response to a stimulus that does <strong>not</strong> involve conscious thought. The pathway taken by a nerve impulse during a reflex action is called the <strong>reflex arc</strong>. Reflexes are coordinated in the <strong>spinal cord</strong> (or in the brain for cranial reflexes), bypassing conscious control in the brain.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Reflex Arc — Sequence',
        text: '<strong>Stimulus</strong> → <strong>Receptor</strong> → <strong>Sensory neurone</strong> → <strong>Relay neurone</strong> (in spinal cord) → <strong>Motor neurone</strong> → <strong>Effector</strong> (muscle or gland) → <strong>Response</strong><br/><br/><em>Example:</em> touching a hot object → pain receptors in skin → sensory neurone → relay neurone in spinal cord → motor neurone → bicep muscle contracts → hand pulled away.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Diagram of a spinal reflex arc',
        svg: `<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Spinal cord cross-section -->
  <ellipse cx="310" cy="150" rx="55" ry="70" fill="#532407" stroke="#c0902a" stroke-width="3"/>
  <text x="310" y="145" text-anchor="middle" font-weight="bold" fill="#7a3a00" font-size="11">SPINAL</text>
  <text x="310" y="160" text-anchor="middle" font-weight="bold" fill="#7a3a00" font-size="11">CORD</text>
  <!-- Grey matter (H-shape simplified) -->
  <ellipse cx="310" cy="150" rx="28" ry="42" fill="#532407" stroke="#c0902a" stroke-width="1.5"/>
  <!-- Relay neurone in grey matter -->
  <circle cx="310" cy="150" r="10" fill="#1d4ed8" opacity="0.8"/>
  <text x="310" y="207" text-anchor="middle" fill="#1d4ed8" font-size="10">Relay neurone</text>
  <line x1="310" y1="197" x2="310" y2="192" stroke="#1d4ed8" stroke-width="1"/>

  <!-- RECEPTOR (left, skin) -->
  <rect x="20" y="130" width="90" height="40" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="2"/>
  <text x="65" y="148" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="11">RECEPTOR</text>
  <text x="65" y="162" text-anchor="middle" fill="#991b1b" font-size="10">(skin / sense organ)</text>

  <!-- Sensory neurone — from receptor to spinal cord (dorsal root) -->
  <path d="M110 148 Q180 100 255 120" fill="none" stroke="#16a34a" stroke-width="3" marker-end="url(#arrGr)"/>
  <text x="170" y="95" fill="#16a34a" font-size="11" font-weight="bold">Sensory neurone</text>
  <!-- Dorsal root label -->
  <text x="240" y="110" fill="#16a34a" font-size="9">(dorsal root)</text>

  <!-- Motor neurone — from spinal cord to effector (ventral root) -->
  <path d="M255 178 Q180 210 110 170" fill="none" stroke="#dc2626" stroke-width="3" marker-end="url(#arrR)"/>
  <text x="155" y="225" fill="#dc2626" font-size="11" font-weight="bold">Motor neurone</text>
  <text x="225" y="195" fill="#dc2626" font-size="9">(ventral root)</text>

  <!-- EFFECTOR (left, muscle) -->
  <rect x="20" y="168" width="90" height="40" rx="6" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="2"/>
  <text x="65" y="186" text-anchor="middle" fill="#1e3a8a" font-weight="bold" font-size="11">EFFECTOR</text>
  <text x="65" y="200" text-anchor="middle" fill="#1e3a8a" font-size="10">(muscle or gland)</text>

  <!-- Stimulus label -->
  <text x="25" y="125" fill="#dc2626" font-size="11">STIMULUS</text>
  <line x1="40" y1="127" x2="40" y2="130" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrR)"/>

  <!-- Response label -->
  <text x="22" y="222" fill="#1d4ed8" font-size="11">RESPONSE</text>

  <!-- To brain — awareness -->
  <path d="M310 80 Q310 50 500 40" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arrGy)"/>
  <text x="400" y="32" fill="#64748b" font-size="10">To brain (conscious awareness</text>
  <text x="415" y="44" fill="#64748b" font-size="10">— arrives after the reflex)</text>

  <!-- Synapse dots -->
  <circle cx="270" cy="128" r="5" fill="#f59e0b"/>
  <circle cx="278" cy="165" r="5" fill="#f59e0b"/>
  <text x="235" y="250" fill="#f59e0b" font-size="10">● Synapses</text>

  <defs>
    <marker id="arrGr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#16a34a"/></marker>
    <marker id="arrR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/></marker>
    <marker id="arrGy" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#94a3b8"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Advantages of Reflex Actions', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Faster</strong> than voluntary responses — impulse does not have to travel all the way to the brain and back; relay neurone in spinal cord provides a shortcut' },
          { text: '<strong>Automatic</strong> — requires no conscious decision, freeing the brain to focus on other tasks' },
          { text: '<strong>Protective</strong> — many reflexes (e.g. withdrawing from pain, blinking) protect the body from damage' },
          { text: '<strong>Innate</strong> — present from birth, do not need to be learned' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Common Exam Error',
        text: 'Do NOT say the reflex arc bypasses the brain entirely. Nerve impulses do travel to the brain — but this happens <strong>after</strong> the response has already occurred. You feel pain after you have already pulled your hand away. The brain provides <strong>conscious awareness</strong>, not the response itself.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The nervous system has CNS (brain + spinal cord) and PNS. Reflex arc: stimulus → receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector → response. Reflexes are fast, automatic, protective, and require no conscious thought.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Reflex arc: stimulus → receptor → sensory → relay (spinal cord) → motor → effector → response. Fast and automatic.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'List the components of a reflex arc in the correct order.', answer: 'Stimulus → receptor → sensory neurone → relay neurone (in spinal cord) → motor neurone → effector → response.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What is the difference between the CNS and the PNS?', answer: 'CNS = brain + spinal cord (processes information); PNS = all nerves outside CNS (carries impulses to and from CNS).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'Give two advantages of reflex actions.', answer: 'They are faster than voluntary responses (no brain pathway required); they are automatic so no conscious decision is needed; they are protective (any two).' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Does the reflex arc bypass the brain completely?', answer: 'No — impulses do travel to the brain giving conscious awareness, but this happens after the response. The reflex response itself does not require a decision from the brain.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_14_14_0;
