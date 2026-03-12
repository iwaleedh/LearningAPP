export const note_biology_1_2_2 = {
  blocks: [
    {
      id: 'obj-lung-disease',
      type: 'objective',
      data: {
        text: 'Describe the effects of smoking on the gas exchange system and lungs. Explain the scientific evidence linking smoking to lung cancer and disease. Understand the difference between correlation and causation in health studies.',
      },
    },
    {
      id: 'h-smoke-components',
      type: 'heading',
      data: { text: 'Harmful Components of Tobacco Smoke', level: 2 },
    },
    {
      id: 'p-smoke-intro',
      type: 'paragraph',
      data: {
        text: 'Tobacco smoke is a complex mixture of over 4000 organic compounds. Different components cause different kinds of damage to the gas exchange system and to the rest of the body.',
      },
    },
    {
      id: 'table-smoke-components',
      type: 'comparisonTable',
      data: {
        caption: 'Key harmful components of tobacco smoke and their effects',
        headers: ['Component', 'Nature', 'Effect on body'],
        rows: [
          ['Nicotine', 'Addictive stimulant drug', 'Stimulates release of adrenaline; raises heart rate and blood pressure; highly addictive — makes it very difficult to quit smoking'],
          ['Carbon monoxide (CO)', 'Toxic gas', 'Binds to haemoglobin with much greater affinity than O₂ → forms carboxyhaemoglobin → reduces blood\'s O₂-carrying capacity; deprives tissues of oxygen'],
          ['Tar', 'Sticky mixture of 4000+ organic compounds; ≥60 known carcinogens', 'Accumulates in lungs; carcinogens cause DNA mutations leading to uncontrolled cell division (cancer); also coats and disables cilia in airways'],
          ['Particulates / irritants', 'Dust and particles in smoke', 'Irritate the lining of airways; trigger excess mucus production; cause chronic cough'],
        ],
      },
    },
    {
      id: 'h-airways-damage',
      type: 'heading',
      data: { text: 'Damage to the Airways', level: 2 },
    },
    {
      id: 'p-cilia-damage',
      type: 'paragraph',
      data: {
        text: 'The airways are normally lined with ciliated epithelium and goblet cells. Cilia beat rhythmically to sweep mucus (trapped with bacteria and dust) upward toward the throat where it is swallowed. Tobacco smoke damages and eventually destroys these cilia.',
      },
    },
    {
      id: 'list-airway-damage-sequence',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Smoke irritates goblet cells → excess mucus is secreted',
          'Tar in smoke paralyses and then destroys cilia → mucus cannot be swept out',
          'Mucus accumulates in the airways, trapping bacteria and dust',
          'Bacteria multiply → repeated lung infections (chronic bronchitis)',
          'Persistent cough as the body tries to expel the mucus (smoker\'s cough)',
        ],
      },
    },
    {
      id: 'callout-bronchitis',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chronic Bronchitis',
        text: 'Long-term inflammation and infection of the bronchi and bronchioles caused by bacteria being trapped in the mucus that smokers cannot clear. Symptoms: persistent cough, excess mucus (sputum), breathlessness. The airways become narrowed and inflamed, increasing airway resistance.',
      },
    },
    {
      id: 'h-emphysema',
      type: 'heading',
      data: { text: 'Emphysema', level: 2 },
    },
    {
      id: 'p-emphysema',
      type: 'paragraph',
      data: {
        text: 'Emphysema is a progressive lung disease caused by the destruction of alveolar walls. The immune response to irritants in tobacco smoke releases enzymes (proteases) that break down the elastic and protein fibres in alveolar walls.',
      },
    },
    {
      id: 'list-emphysema-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Alveolar walls are destroyed and merge into larger air spaces',
          'Total surface area for gas exchange is greatly reduced',
          'Diffusion distance may increase as walls thicken with inflammation',
          'Concentration gradient is less well maintained (air movement less efficient)',
          'Severe breathlessness, especially during exercise',
          'Condition is irreversible — dead lung tissue cannot be regenerated',
        ],
      },
    },
    {
      id: 'svg-emphysema',
      type: 'svg',
      data: {
        caption: 'Comparison of healthy alveoli and emphysematous alveoli showing reduction in surface area',
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif" font-size="11">
  <rect width="440" height="200" fill="#f8f9ff" rx="8"/>
  <!-- HEALTHY side -->
  <text x="110" y="18" text-anchor="middle" fill="#2c5a3a" font-weight="bold">Healthy Alveoli</text>
  <!-- many small alveoli -->
  <circle cx="60" cy="55" r="22" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="104" cy="50" r="20" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="145" cy="55" r="22" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="62" cy="98" r="20" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="104" cy="94" r="22" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="147" cy="98" r="20" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="60" cy="142" r="21" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="104" cy="140" r="20" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <circle cx="146" cy="142" r="21" fill="#c8e6c9" stroke="#5a9a6a" stroke-width="1.5"/>
  <text x="110" y="185" text-anchor="middle" fill="#2c5a3a" font-size="10">Large total surface area</text>
  <!-- Divider -->
  <line x1="220" y1="10" x2="220" y2="190" stroke="#ccc" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- EMPHYSEMA side -->
  <text x="330" y="18" text-anchor="middle" fill="#b03020" font-weight="bold">Emphysematous Alveoli</text>
  <!-- few large merged spaces -->
  <circle cx="290" cy="75" r="52" fill="#ffe0d0" stroke="#b03020" stroke-width="1.5"/>
  <circle cx="370" cy="80" r="50" fill="#ffe0d0" stroke="#b03020" stroke-width="1.5"/>
  <circle cx="330" cy="148" r="35" fill="#ffe0d0" stroke="#b03020" stroke-width="1.5"/>
  <text x="330" y="185" text-anchor="middle" fill="#b03020" font-size="10">Reduced total surface area</text>
</svg>`,
      },
    },
    {
      id: 'h-lung-cancer',
      type: 'heading',
      data: { text: 'Lung Cancer', level: 2 },
    },
    {
      id: 'p-lung-cancer',
      type: 'paragraph',
      data: {
        text: 'Lung cancer is caused by mutations in cell DNA. Carcinogens in tar enter cells lining the airways and alveoli and cause mutations in genes controlling the cell cycle. Cells begin to divide uncontrollably, forming a tumour. Cancerous (malignant) tumours can invade surrounding tissue and spread via the blood or lymph to other organs (metastasis).',
      },
    },
    {
      id: 'list-cancer-sequence',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Carcinogens in tar absorbed by cells of the airway lining',
          'Carcinogens alter the base sequence of DNA, particularly in genes controlling cell division (tumour suppressor genes or proto-oncogenes)',
          'Mutations accumulate over years → cells no longer respond to normal growth control signals',
          'Uncontrolled cell division → tumour forms in the lung or bronchus',
          'Metastasis: cells may break away and spread to lymph nodes or other organs',
        ],
      },
    },
    {
      id: 'callout-co',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Carbon Monoxide and Oxygen Transport',
        text: 'CO binds irreversibly to the haem group of haemoglobin with an affinity ~240 times greater than O₂, forming carboxyhaemoglobin (HbCO). This reduces the blood\'s O₂-carrying capacity — tissues receive less oxygen. In pregnant women who smoke, the fetus also receives less oxygen, restricting foetal growth.',
      },
    },
    {
      id: 'h-evidence',
      type: 'heading',
      data: { text: 'Evidence Linking Smoking to Lung Cancer: Doll and Hill', level: 2 },
    },
    {
      id: 'p-doll-hill',
      type: 'paragraph',
      data: {
        text: 'In 1951, Richard Doll and Austin Bradford Hill set up a landmark prospective study to investigate whether smoking caused lung cancer. They recruited over 34,000 British doctors and monitored their smoking habits and health for 50 years (the study ended in 2001). Doctors were chosen because they were considered reliable at recording their own smoking habits and were tracked via the General Medical Council register.',
      },
    },
    {
      id: 'list-doll-hill-findings',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Smokers had a significantly higher death rate from lung cancer than non-smokers',
          'The risk of dying from lung cancer increased with the number of cigarettes smoked per day',
          'Doctors who stopped smoking reduced their risk compared to those who continued',
          'Survival curves showed non-smokers lived significantly longer on average than cigarette smokers',
          'By the end of the study, evidence was considered causal — smoking causes lung cancer',
        ],
      },
    },
    {
      id: 'h-study-types',
      type: 'heading',
      data: { text: 'Types of Study and Statistical Concepts', level: 2 },
    },
    {
      id: 'table-studies',
      type: 'comparisonTable',
      data: {
        caption: 'Prospective vs retrospective studies',
        headers: ['Type', 'Method', 'Advantages', 'Disadvantages'],
        rows: [
          ['Prospective', 'Select healthy subjects → monitor over years → record who develops disease', 'Can track changes in habits over time; can record wider range of variables', 'Takes a very long time to get results; expensive; subjects may drop out'],
          ['Retrospective', 'Look back at records of people who already have the disease', 'Faster — results available immediately; cheaper', 'Relies on recalled data (less accurate); harder to control for confounding variables'],
        ],
      },
    },
    {
      id: 'callout-correlation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Correlation vs Causation',
        text: 'A correlation is an association between two variables (e.g. number of cigarettes smoked and incidence of lung cancer both increase together — a positive correlation). A correlation does NOT by itself prove causation. For example, there could be a correlation between baldness and wearing hats, but that does not mean hats cause baldness. For causation to be established, the mechanism must be explained (e.g. carcinogens in tar cause DNA mutations) AND alternative explanations must be ruled out.',
      },
    },
    {
      id: 'callout-stat-sig',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Statistical Significance',
        text: 'For a result to be accepted as real (not due to chance), it must be statistically significant. This means the probability that the result occurred by chance is very low (typically p < 0.05, i.e. less than 5% probability it is a coincidence). The larger and more carefully controlled the study, the more likely a genuine result will be statistically significant.',
      },
    },
    {
      id: 'checklist-lung-disease',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the three main harmful components of tobacco smoke and link each to a specific harm', checked: false },
          { text: 'Describe how tar damages cilia, leading to mucus accumulation and chronic bronchitis', checked: false },
          { text: 'Explain how emphysema reduces gas exchange efficiency using Fick\'s Law', checked: false },
          { text: 'Describe the sequence of events from carcinogen exposure to lung cancer', checked: false },
          { text: 'Explain why CO reduces blood O₂-carrying capacity', checked: false },
          { text: 'Describe the design and main findings of the Doll and Hill study', checked: false },
          { text: 'Distinguish between a prospective and a retrospective study', checked: false },
          { text: 'Explain the difference between correlation and causation with an example', checked: false },
        ],
      },
    },
    {
      id: 'summary-lung-disease',
      type: 'summary',
      data: {
        text: 'Tobacco smoke contains nicotine (addictive), carbon monoxide (binds Hb, reduces O₂ transport), and tar (60+ carcinogens in 4000+ compounds). Tar paralyses cilia → mucus accumulates → chronic bronchitis. Carcinogens in tar cause DNA mutations → uncontrolled cell division → lung cancer. Immune response to irritants destroys alveolar walls → emphysema → reduced surface area for gas exchange (irreversible). Doll and Hill\'s 50-year prospective study of 34,000 doctors provided strong evidence that smoking causes lung cancer. Correlation ≠ causation; causation requires a known mechanism (DNA mutations by carcinogens) and ruling out confounders.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-smoke-components', prompt: 'Name three harmful components of tobacco smoke and state one specific effect of each on the body.' },
      { id: 'cue-2', blockId: 'list-airway-damage-sequence', prompt: 'Describe the sequence of events by which smoking leads to chronic bronchitis, starting with the effect of tar on cilia.' },
      { id: 'cue-3', blockId: 'p-emphysema', prompt: 'Explain how emphysema reduces the rate of gas exchange. Refer to Fick\'s Law in your answer.' },
      { id: 'cue-4', blockId: 'p-doll-hill', prompt: 'Describe the design of the Doll and Hill study and state two of its main findings.' },
      { id: 'cue-5', blockId: 'callout-correlation', prompt: 'What is the difference between a correlation and a causal relationship? Give an example of each.' },
    ],
    summaryText: 'Tobacco smoke harms: CO reduces O₂ transport by binding Hb; tar destroys cilia → mucus build-up → chronic bronchitis; carcinogens mutate DNA → lung cancer; irritants → emphysema (alveolar wall destruction, reduced SA). Doll and Hill (1951–2001): 34,000 doctors, prospective study, showed smoking causes lung cancer. Correlation ≠ causation — need mechanism and controlled study.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Doll and Hill (1951-2001)', detail: 'Prospective cohort study of 34,000 British doctors over 50 years. Provided definitive evidence that cigarette smoking causes lung cancer and reduces life expectancy. Doctors who stopped smoking reduced their risk.', year: '2004', source: 'Doll R, Peto R, et al. BMJ', tags: ['epidemiology', 'lung cancer', 'smoking'] },
    { id: 'ev-2', title: 'WHO global cancer statistics', detail: 'Lung cancer is the leading cause of cancer death worldwide; approximately 85% of cases are attributable to tobacco smoking. Most cases are small-cell or non-small-cell lung carcinoma originating in bronchial epithelium.', year: '2020', source: 'WHO IARC Global Cancer Observatory', tags: ['lung cancer', 'global health'] },
  ],
};
