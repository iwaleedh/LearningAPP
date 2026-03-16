export const note_cae_3_8_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for following extended speech and lectures in CAE Listening Part 2.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Following Extended Speech and Lectures', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'The Challenge', text: 'CAE Listening Parts 2 and 3 feature <strong>extended speech</strong> — monologues or conversations lasting 3–4 minutes. At C1 level, you must follow complex arguments, track topic shifts, and extract specific information from longer audio.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Skills', level: 2 } },
    { id: 'list-skills', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Sustained concentration</strong>: Don\'t let your attention drift. If you miss something, move on — don\'t dwell on it.' }, { text: '<strong>Signpost recognition</strong>: Speakers use phrases to structure their talk — "Firstly", "Moving on to", "The key point here is", "What I\'d like to emphasise".' }, { text: '<strong>Topic tracking</strong>: Notice when the speaker changes topic. This often corresponds to a new question.' }, { text: '<strong>Note-taking</strong>: Write key words only — don\'t try to transcribe. A single word can trigger recall.' }, { text: '<strong>Prediction</strong>: Use the question sentences to predict what the speaker will discuss next.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Common Signpost Language', level: 2 } },
    { id: 'table-sign', type: 'comparisonTable', data: { caption: 'Discourse markers in spoken English', headers: ['Function', 'Signpost Phrases'], rows: [['Introducing', 'What I want to talk about is… / Today I\'m going to focus on…'], ['Sequencing', 'To begin with… / Next… / Finally…'], ['Emphasising', 'The important thing is… / What really matters is… / I\'d like to stress that…'], ['Contrasting', 'On the other hand… / Having said that… / Although…'], ['Concluding', 'So, in summary… / To sum up… / The main takeaway is…']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Practice Tip', text: 'Listen to TED Talks (15–20 minutes) and pause every 3 minutes to summarise what was said. This builds your ability to follow extended speech and retain key information — exactly what Part 2 requires.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Extended speech skills: sustained concentration (move on if you miss something), signpost recognition, topic tracking, brief note-taking, prediction from questions. Practice with TED Talks — pause and summarise every 3 minutes.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Extended speech: sustain concentration, recognise signposts (Moving on to…, The key point is…), track topic changes, take brief notes, predict from questions. Practice with long talks.',
    cues: [
      { id: 'cue-1', blockId: 'list-skills', prompt: 'What five skills are needed to follow extended speech in the Listening exam?', answer: 'Sustained concentration (don\'t dwell on missed bits). Signpost recognition (firstly, moving on, the key point). Topic tracking (notice when speaker changes subject). Note-taking (key words only). Prediction (use question sentences to anticipate content).' },
    ]
  },
  evidence: [], mentions: []
};
