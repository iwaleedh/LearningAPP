export const note_cae_1_1_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Reading & Use of English Part 3: Word formation.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 3: Word Formation', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>What you do</strong>: Read a text with 8 gaps. At the end of each gapped line, a <strong>prompt word</strong> is given. Change the form of the prompt word to complete the gap correctly.<br/><br/><strong>Marks</strong>: 8 (1 per correct answer).<br/><strong>Focus</strong>: Vocabulary — knowledge of prefixes, suffixes, and word families.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Common Word Formation Patterns', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Key affixes for word formation', headers: ['Change', 'Common Affixes', 'Examples'], rows: [['Verb → Noun', '-tion, -sion, -ment, -ance/-ence, -al, -er/-or, -ity', 'decide → decision, achieve → achievement, perform → performance'], ['Adjective → Noun', '-ness, -ity, -ence/-ance, -dom', 'happy → happiness, creative → creativity, free → freedom'], ['Noun → Adjective', '-ful, -less, -ous, -al, -ive, -able/-ible', 'beauty → beautiful, danger → dangerous, reason → reasonable'], ['Adjective → Adverb', '-ly', 'careful → carefully, fortunate → fortunately'], ['Negative prefixes', 'un-, in-/im-/il-/ir-, dis-, mis-, non-', 'happy → unhappy, possible → impossible, agree → disagree'], ['Other prefixes', 'over-, under-, re-, pre-, out-', 'estimate → overestimate, do → redo, perform → outperform']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Read the whole sentence</strong> — determine what part of speech the gap needs (noun, verb, adjective, adverb).' }, { text: '<strong>Check if negative</strong> — does the meaning require a negative prefix (un-, dis-, im-)?' }, { text: '<strong>Check if plural</strong> — nouns may need to be plural.' }, { text: '<strong>Apply the correct affix</strong> — sometimes two changes are needed (e.g. "rely" → "unreliable" = prefix + suffix).' }, { text: '<strong>Check spelling</strong> — you must spell the answer correctly. Common traps: "arguement" (wrong) → "argument" (correct).' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '• Forgetting to make the word <strong>negative</strong> when the context requires it.<br/>• Forgetting <strong>plural</strong> forms for nouns.<br/>• <strong>Spelling errors</strong> — even if the right word, a misspelling scores zero.<br/>• Not changing the word enough — sometimes you need <em>two</em> changes (prefix AND suffix).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 3: Word formation — change a prompt word using prefixes/suffixes to fit the gap. 8 questions, 1 mark each. Determine part of speech needed, check for negatives and plurals, and spell carefully.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 3: 8 word-formation gaps. Given a prompt word, change its form (noun/verb/adj/adverb; positive/negative; singular/plural). Key affixes: -tion, -ment, -ness, -ful, -less, -ous, un-, dis-, im-. Spelling must be exact.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What are the most common prefix and suffix patterns tested in CAE word formation?', answer: 'Suffixes: -tion/-sion (verb→noun), -ment, -ness, -ity (adj→noun), -ful/-less/-ous/-ive/-able (noun→adj), -ly (adj→adverb). Negative prefixes: un-, in-/im-/il-/ir-, dis-, mis-. Other prefixes: over-, under-, re-, pre-, out-. Sometimes two changes are needed (e.g. rely → unreliable).' },
    ]
  },
  evidence: [], mentions: []
};
