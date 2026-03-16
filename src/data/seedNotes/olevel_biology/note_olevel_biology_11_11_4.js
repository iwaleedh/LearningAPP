export const note_olevel_biology_11_11_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/11 Gas Exchange In Humans/11-5-1-lung-disease-and-smoking.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the effects of smoking on the gas exchange system and explain how lung diseases develop.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Effects of Smoking on the Body', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Harmful Components of Cigarette Smoke',
        text: '<strong>Tar:</strong> Carcinogenic (cancer-causing) sticky substance. Coats cilia and airways; causes goblet cells to produce excess mucus; damages alveoli walls.<br/><br/><strong>Nicotine:</strong> Addictive substance; causes vasoconstriction (narrowing of blood vessels); raises heart rate and blood pressure; increases risk of heart disease.<br/><br/><strong>Carbon monoxide (CO):</strong> Toxic gas; binds irreversibly to haemoglobin (forming carboxyhaemoglobin); reduces oxygen-carrying capacity of blood.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Lung Diseases Caused by Smoking', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Smoking-related lung diseases — causes and effects',
        headers: ['Disease', 'Cause', 'Effect on Gas Exchange'],
        rows: [
          ['Chronic bronchitis', 'Tar destroys cilia; excess mucus produced by goblet cells', 'Mucus clogs airways; bacteria not swept away → persistent cough'],
          ['Emphysema', 'Tar and smoke destroy alveoli walls; air trapped in enlarged spaces', 'Reduced surface area for gas exchange → shortness of breath, low O₂'],
          ['Lung cancer', 'Carcinogens in tar cause mutations in lung cell DNA', 'Tumours block airways; reduce gas exchange capacity'],
          ['Coronary heart disease', 'Nicotine and CO increase plaque build-up; raise blood pressure', 'Reduced oxygen supply to heart muscle → heart attack risk']
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Emphysema in Detail', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'In <strong>emphysema</strong>, the walls between alveoli are broken down by enzymes released by white blood cells responding to irritants in cigarette smoke. The many small alveoli fuse into <strong>fewer, larger air sacs</strong>. This greatly <strong>reduces the total surface area</strong> available for gas exchange, meaning less oxygen reaches the blood. Sufferers experience severe breathlessness even at rest.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Asthma', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Asthma',
        text: '<strong>Asthma</strong> is a condition in which the airways become inflamed and narrowed, making breathing difficult.<br/><strong>Triggers:</strong> Pollen, dust mites, smoke, exercise, cold air, pet dander.<br/><strong>Symptoms:</strong> Wheezing, chest tightness, coughing, shortness of breath.<br/><strong>Treatment:</strong> Bronchodilator inhalers (relax smooth muscle in airways), steroid inhalers (reduce inflammation).'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Emphasise <strong>surface area reduction</strong> when explaining emphysema — this is the key reason gas exchange is impaired. For CO, always state it <strong>binds to haemoglobin</strong> reducing oxygen transport, not just that it is toxic.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Smoking damages gas exchange through tar (destroys cilia, causes mucus build-up, damages alveoli), nicotine (raises BP, addictive), and CO (reduces O₂-carrying capacity). Diseases include bronchitis, emphysema, and lung cancer.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Smoking: tar destroys cilia/alveoli, nicotine raises BP, CO binds haemoglobin. Diseases: bronchitis, emphysema (reduced surface area), lung cancer.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'How does carbon monoxide from cigarettes harm the body?', answer: 'CO binds irreversibly to haemoglobin, forming carboxyhaemoglobin, reducing the oxygen-carrying capacity of the blood.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Explain how emphysema reduces gas exchange.', answer: 'Tar destroys the walls between alveoli, merging them into larger spaces. This reduces the total surface area for gas exchange, so less oxygen diffuses into the blood.' },
      { id: 'cue-3', blockId: 'call-1', prompt: 'Why does smoking cause a persistent cough?', answer: 'Tar paralyses cilia and causes goblet cells to produce excess mucus. Without functioning cilia to sweep mucus away, it accumulates and triggers coughing.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_11_11_4;
