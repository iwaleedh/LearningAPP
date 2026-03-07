/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 3
 * "Electron configuration (shells and subshells)"
 * Source: Pearson Edexcel IAL Chemistry — Sections 2A.3–2A.4
 */
export const note_chemistry_1_2_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the electron configurations of the first 36 elements. Understand quantum shells, subshells (s, p, d) and orbitals. Relate the Periodic Table to electron configuration.' },
      terms: []
    },
    {
      id: 'h-shells',
      type: 'heading',
      data: { text: 'Quantum Shells and Subshells', level: 2 },
      terms: []
    },
    {
      id: 'p-shells',
      type: 'paragraph',
      data: { text: 'Electrons occupy <strong>quantum shells</strong> (numbered n = 1, 2, 3, …) around the nucleus. Higher shell numbers = further from nucleus = more energy. Each shell is divided into <strong>subshells</strong> labelled s, p, d and f.' },
      terms: ['Quantum shell', 'Subshell']
    },
    {
      id: 'table-subshells',
      type: 'comparisonTable',
      data: {
        caption: 'Subshell capacity and orbits',
        headers: ['Subshell', 'Number of Orbitals', 'Max Electrons'],
        rows: [
          ['<strong>s</strong>', '1', '2'],
          ['<strong>p</strong>', '3', '6'],
          ['<strong>d</strong>', '5', '10'],
          ['<strong>f</strong>', '7', '14']
        ]
      },
      terms: ['Orbital', 's orbital', 'p orbital', 'd orbital']
    },
    {
      id: 'callout-filling',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Filling Order (Aufbau Principle)',
        text: 'Electrons fill subshells in order of increasing energy:<br/>1s → 2s → 2p → 3s → 3p → <strong>4s → 3d</strong> → 4p → 5s → 4d → 5p<br/><br/>Note: 4s fills <strong>before</strong> 3d! (3d is slightly higher energy than 4s)<br/><br/>Within a subshell, electrons occupy separate orbitals first (one each) before pairing up — this is <strong>Hund\'s rule</strong>.'
      },
      terms: ['Aufbau principle', "Hund's rule"]
    },
    {
      id: 'h-configs',
      type: 'heading',
      data: { text: 'Writing Electron Configurations', level: 2 },
      terms: []
    },
    {
      id: 'table-configs',
      type: 'comparisonTable',
      data: {
        caption: 'Electron configurations of selected elements',
        headers: ['Element', 'Z', 'Full Configuration'],
        rows: [
          ['Hydrogen (H)', '1', '1s¹'],
          ['Carbon (C)', '6', '1s² 2s² 2p²'],
          ['Sodium (Na)', '11', '1s² 2s² 2p⁶ 3s¹'],
          ['Chlorine (Cl)', '17', '1s² 2s² 2p⁶ 3s² 3p⁵'],
          ['Calcium (Ca)', '20', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²'],
          ['Chromium (Cr)*', '24', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹'],
          ['Copper (Cu)*', '29', '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹']
        ]
      },
      terms: []
    },
    {
      id: 'callout-exceptions',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠ Exceptions: Cr and Cu',
        text: 'Chromium and Copper are famous exceptions to the Aufbau filling order.<br/>Cr: expected [Ar] 3d⁴ 4s² but actual is [Ar] <strong>3d⁵ 4s¹</strong><br/>Cu: expected [Ar] 3d⁹ 4s² but actual is [Ar] <strong>3d¹⁰ 4s¹</strong><br/><br/>Reason: extra stability of a <em>half-filled</em> (d⁵) or <em>fully-filled</em> (d¹⁰) d subshell. An electron moves from 4s to 3d.'
      },
      terms: []
    },
    {
      id: 'callout-pt',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Periodic Table and Electron Configuration',
        text: '• <strong>Group number</strong> = number of electrons in the outer shell (for main group elements).<br/>• <strong>Period number</strong> = highest quantum shell number occupied.<br/>• <strong>s-block</strong> (Groups 1 & 2): filling s subshell.<br/>• <strong>p-block</strong> (Groups 3–8/18): filling p subshell.<br/>• <strong>d-block</strong> (Transition metals, Groups 3–12): filling d subshell.'
      },
      terms: []
    },
    {
      id: 'h-practice-ec',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-ec1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Zinc (Z = 30) — Full spdf Configuration (Past Paper)',
        text: '<strong>Question:</strong> Write the full electron configuration of zinc (Z = 30) in spdf notation.<br/><br/><strong>Step 1 — Start at lowest energy and fill in order:</strong><br/>1s² → 2s² → 2p⁶ → 3s² → 3p⁶ — that\'s 18 electrons<br/><br/><strong>Step 2 — Apply the 4s before 3d exception:</strong><br/>Fill 4s² next (not 3d!) → now 20 electrons placed<br/><br/><strong>Step 3 — Fill 3d:</strong><br/>3d can hold 10 electrons; Zn needs 10 more → 3d¹⁰<br/><br/><strong>Full config: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰</strong><br/>(often written as: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² — both orders accepted)<br/><br/><em>Note: Zn is NOT a transition metal because its 3d subshell is completely full — it cannot form ions with a partially filled d subshell.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-ec2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Chromium (Z = 24) — Anomalous Configuration',
        text: '<strong>Question:</strong> Write the full electron configuration of chromium (Z = 24) and explain why it is anomalous.<br/><br/><strong>Expected (if Aufbau applied strictly):</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴ ← WRONG<br/><br/><strong>Actual configuration:</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶ <strong>4s¹ 3d⁵</strong><br/><br/><strong>Reason:</strong><br/>A half-filled 3d subshell (3d⁵) gives extra stability due to minimised electron-electron repulsion (one electron in each orbital, all same-spin). To achieve this, one electron is promoted from the 4s to the 3d.<br/><br/>This is a commonly tested exam question — always write 4s¹ 3d⁵ for Cr, NOT 4s² 3d⁴.'
      },
      terms: []
    },
    {
      id: 'callout-pq-ec3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Iron (Z = 26)',
        text: '<strong>Question:</strong> Write the full electron configuration of iron (Z = 26).<br/><br/><strong>Step 1 — Fill up to Ar core (Z=18):</strong><br/>1s² 2s² 2p⁶ 3s² 3p⁶<br/><br/><strong>Step 2 — Fill 4s before 3d:</strong><br/>...4s²<br/><br/><strong>Step 3 — Fill 3d for remaining 6 electrons:</strong><br/>...3d⁶<br/><br/><strong>Full config: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</strong><br/><br/><em>Iron is NOT an exception (unlike Cr and Cu). Does not have a half-filled or full d, so Aufbau applies normally.</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-subshells', prompt: 'How many orbitals are in a p subshell? What is the maximum number of electrons it can hold?' },
      { id: 'c2', blockId: 'callout-filling', prompt: 'State the electron filling order up to 4p. Which fills first: 4s or 3d?' },
      { id: 'c3', blockId: 'callout-exceptions', prompt: 'Write the full electronic configuration of chromium (Z = 24) and explain why it is anomalous.' },
      { id: 'c4', blockId: 'callout-pq-ec1', prompt: 'Write the full spdf configuration of zinc (Z = 30), showing why 4s fills before 3d.' },
      { id: 'c5', blockId: 'callout-pq-ec3', prompt: 'Write the full configuration of Fe (Z = 26). Is it an exception to Aufbau? Explain.' }
    ],
    summaryText: 'Shells n=1,2,3… contain subshells (s×1, p×3, d×5, f×7 orbitals). Filling: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p. Hund\'s rule: fill each orbital singly before pairing. Exceptions: Cr ([Ar]3d⁵4s¹) and Cu ([Ar]3d¹⁰4s¹) for extra stability from half-filled/full-d subshell.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_3;