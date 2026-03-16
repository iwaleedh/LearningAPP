export const note_cpe_1_1_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 3: Word formation at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 3: Word Formation', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'A text with <strong>8 gaps</strong>. A stem word is given in CAPITALS at the end of each line. You must change the form of the stem to fit the gap. At C2, multiple changes are often needed (e.g. prefix + suffix, or negative prefix + different part of speech).' } },
    { id: 'h-2', type: 'heading', data: { text: 'C2-Level Transformations', level: 2 } },
    { id: 'table-trans', type: 'comparisonTable', data: { caption: 'Complex word formation patterns', headers: ['Stem', 'Possible Forms', 'Trap'], rows: [['PERCEIVE', 'perception, perceptive, perceptible, imperceptible, perceptibly', 'Double change: im- + -ible'], ['ECONOMY', 'economic, economical, economically, uneconomical, economist', '"economic" (relating to economy) vs "economical" (cost-effective)'], ['COMPARE', 'comparable, comparably, incomparable, comparison, comparative', 'Negative prefix: in- not un-'], ['EXCEED', 'exceedingly, excessive, excessively, excess', 'Adjective vs adverb choice'], ['HAND', 'handful, handily, singlehandedly, heavy-handed, underhand', 'Compound forms tested at C2']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Identify the <strong>part of speech</strong> needed (noun, verb, adjective, adverb?).' }, { text: 'Check if the meaning requires a <strong>negative prefix</strong> (un-, in-, im-, ir-, il-, dis-, mis-).' }, { text: 'Check if the context is <strong>positive or negative</strong> — the sentence meaning determines the prefix.' }, { text: 'Consider <strong>plural nouns</strong> and <strong>verb forms</strong> (past participle as adjective).' }, { text: 'Read the completed sentence — does it make sense grammatically AND semantically?' }, { text: 'Watch for <strong>double transformations</strong>: stem → adjective → negative adjective → adverb.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Spelling Matters', text: 'Misspelt answers score <strong>zero</strong>. Common C2 spelling traps: "accommodate" (double c, double m), "conscientious", "unprecedented", "indispensable" (not -ible). Practice writing — don\'t just recognise words.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 3: 8 word formation gaps from stem words. C2 demands multiple transformations (prefix + suffix), negative prefixes, compound forms, and precise part-of-speech identification. Spelling must be perfect. Always check if the context requires a negative or positive form.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 3: 8 word formation gaps. Identify part of speech needed, check for negative prefixes, consider double transformations (prefix + suffix), and spell perfectly.',
    cues: [
      { id: 'cue-1', blockId: 'list-strat', prompt: 'What six steps should you follow for CPE word formation?', answer: '1. Identify part of speech needed. 2. Check if negative prefix required. 3. Check if context is positive/negative. 4. Consider plural nouns and past participle adjectives. 5. Read completed sentence for grammar and meaning. 6. Watch for double transformations (e.g. stem → adjective → negative → adverb).' },
    ]
  },
  evidence: [], mentions: []
};
