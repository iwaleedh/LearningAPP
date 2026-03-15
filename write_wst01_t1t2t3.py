import os

base = 'src/data/seedNotes/mathematics'
os.makedirs(base, exist_ok=True)

files = {}

# ── note_6_1_0.js ── Statistical modelling process
files['note_6_1_0.js'] = r"""export const note_mathematics_6_1_0 = {
  blocks: [
    {
      id: 'obj-6-1-0',
      type: 'objective',
      data: { text: 'Understand the statistical modelling cycle and the properties of a good statistical model.' }
    },
    {
      id: 'h-model-intro',
      type: 'heading',
      data: { text: 'What is a Statistical Model?', level: 2 }
    },
    {
      id: 'p-model-def',
      type: 'paragraph',
      data: { text: 'A statistical model is a simplification of reality. It uses mathematics to describe a real-world situation so that predictions can be made and tested.' }
    },
    {
      id: 'callout-model-purpose',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Idea',
        text: 'A model is not perfect — it simplifies. The goal is to make it useful enough to explain patterns and make predictions, while being simple enough to work with.'
      }
    },
    {
      id: 'h-cycle',
      type: 'heading',
      data: { text: 'The Statistical Modelling Cycle', level: 2 }
    },
    {
      id: 'list-cycle',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the real-world problem to investigate.' },
          { text: 'Make assumptions and devise a mathematical/statistical model.' },
          { text: 'Collect data (by experiment or survey).' },
          { text: 'Use the model to make predictions.' },
          { text: 'Compare predictions against observed data.' },
          { text: 'Refine or accept the model; if poor fit, return to step 2.' }
        ]
      }
    },
    {
      id: 'p-cycle-note',
      type: 'paragraph',
      data: { text: 'This cycle is iterative. A model is refined until it gives an acceptable fit to observed data. In practice, models are never exact representations of reality.' }
    },
    {
      id: 'h-good-model',
      type: 'heading',
      data: { text: 'Properties of a Good Model', level: 2 }
    },
    {
      id: 'list-good-model',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Simple — uses as few assumptions as possible.' },
          { text: 'Accurate — predictions match observed data well.' },
          { text: 'Consistent — gives stable results for similar inputs.' },
          { text: 'Generalisable — can be applied beyond the original data set.' }
        ]
      }
    },
    {
      id: 'callout-exam-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Questions may ask you to "criticise" or "improve" a model. Common answers: the model does not account for all variables; the sample size is too small; the model assumes a relationship that may not hold for all values.'
      }
    },
    {
      id: 'sum-6-1-0',
      type: 'summary',
      data: { text: 'A statistical model simplifies reality. The 6-step modelling cycle involves: identify \u2192 model \u2192 collect data \u2192 predict \u2192 compare \u2192 refine. A good model is simple, accurate, consistent and generalisable.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-cycle', prompt: 'List the 6 steps of the statistical modelling cycle in order.' },
      { id: 'cue-2', blockId: 'callout-model-purpose', prompt: 'Why is a statistical model always a simplification? What does this mean in practice?' },
      { id: 'cue-3', blockId: 'list-good-model', prompt: 'Name four properties of a good statistical model.' }
    ],
    summaryText: 'Statistical modelling cycle: identify \u2192 model \u2192 collect data \u2192 predict \u2192 compare \u2192 refine. Models are simplifications; a good model is simple, accurate, consistent and generalisable.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_1_1.js ── Data classification
files['note_6_1_1.js'] = r"""export const note_mathematics_6_1_1 = {
  blocks: [
    {
      id: 'obj-6-1-1',
      type: 'objective',
      data: { text: 'Classify data as qualitative or quantitative (discrete or continuous), and distinguish between primary and secondary data.' }
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Types of Data', level: 2 }
    },
    {
      id: 'table-data-types',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Definition', 'Examples'],
        rows: [
          ['Qualitative', 'Non-numerical (categorical)', 'Eye colour, favourite subject, grade'],
          ['Quantitative \u2014 Discrete', 'Numerically countable; takes exact values', 'Number of children, shoe size, goals scored'],
          ['Quantitative \u2014 Continuous', 'Measured on a continuous scale; any value in a range', 'Height, mass, time, temperature']
        ],
        caption: 'Data classification summary'
      }
    },
    {
      id: 'p-discrete-note',
      type: 'paragraph',
      data: { text: 'Discrete data can only take specific values (often whole numbers). Continuous data can take any value within an interval and is limited only by measurement precision.' }
    },
    {
      id: 'callout-key-distinction',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction',
        text: 'Shoe size is discrete (you cannot have size 6.37). Height is continuous (you can measure height to any number of decimal places given precise enough equipment).'
      }
    },
    {
      id: 'h-primary-secondary',
      type: 'heading',
      data: { text: 'Primary vs Secondary Data', level: 2 }
    },
    {
      id: 'table-primary-secondary',
      type: 'comparisonTable',
      data: {
        headers: ['Type', 'Definition', 'Advantages', 'Disadvantages'],
        rows: [
          ['Primary', 'Data collected directly by the investigator for the purpose of the study', 'Tailored to exact needs; researcher controls quality', 'Time-consuming and costly to collect'],
          ['Secondary', 'Data already collected by someone else (e.g. government statistics, databases)', 'Quick and cheap to access', 'May not perfectly suit the study; quality uncertain']
        ],
        caption: 'Primary vs secondary data'
      }
    },
    {
      id: 'h-pop-sample',
      type: 'heading',
      data: { text: 'Population and Sample', level: 2 }
    },
    {
      id: 'list-pop-sample',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Population: the entire set of individuals or items under study.' },
          { text: 'Sample: a subset of the population used to draw conclusions about the whole.' },
          { text: 'Census: data collected from the entire population (expensive; only feasible for small populations).' },
          { text: 'Random sampling ensures each member has an equal chance of selection, reducing bias.' }
        ]
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Be ready to "give one advantage of using a sample rather than a census": faster, cheaper, sometimes necessary (destructive testing). And "give one disadvantage": may not be representative; introduces sampling error.'
      }
    },
    {
      id: 'sum-6-1-1',
      type: 'summary',
      data: { text: 'Data is qualitative (categorical) or quantitative (discrete = countable; continuous = measurable). Primary data is collected by the researcher; secondary data is already available. A sample is used to infer about a population.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-data-types', prompt: 'What is the difference between discrete and continuous quantitative data? Give an example of each.' },
      { id: 'cue-2', blockId: 'table-primary-secondary', prompt: 'State one advantage and one disadvantage of using secondary data.' },
      { id: 'cue-3', blockId: 'list-pop-sample', prompt: 'Define population and sample. Why is a census not always used?' }
    ],
    summaryText: 'Qualitative: categorical. Quantitative: discrete (countable) or continuous (measured). Primary: own data; secondary: someone else\u2019s. Sample \u2286 population.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_2_0.js ── Frequency distributions and histograms
files['note_6_2_0.js'] = r"""export const note_mathematics_6_2_0 = {
  blocks: [
    {
      id: 'obj-6-2-0',
      type: 'objective',
      data: { text: 'Construct and interpret frequency distributions, histograms with unequal class widths, and stem-and-leaf diagrams.' }
    },
    {
      id: 'h-freq-dist',
      type: 'heading',
      data: { text: 'Frequency Distributions', level: 2 }
    },
    {
      id: 'p-freq-dist',
      type: 'paragraph',
      data: { text: 'A frequency distribution table groups raw data into classes and records how often values fall in each class. For continuous data, classes are written as intervals, e.g. 10 \u2264 x < 20.' }
    },
    {
      id: 'h-histogram',
      type: 'heading',
      data: { text: 'Histograms', level: 2 }
    },
    {
      id: 'p-histogram-def',
      type: 'paragraph',
      data: { text: 'A histogram represents continuous grouped data. Unlike a bar chart, the bars touch and the y-axis shows frequency density, not frequency.' }
    },
    {
      id: 'callout-fd-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Frequency Density Formula',
        text: 'Frequency density = Frequency \u00f7 Class width\n\nArea of bar = Frequency (since area = fd \u00d7 class width)\n\nFrequency = Frequency density \u00d7 Class width'
      }
    },
    {
      id: 'callout-worked-hist',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Unequal Class Widths',
        text: 'Class 10\u201320 (width 10): frequency 30 \u2192 fd = 30/10 = 3.0\nClass 20\u201325 (width 5): frequency 15 \u2192 fd = 15/5 = 3.0\nClass 25\u201340 (width 15): frequency 45 \u2192 fd = 45/15 = 3.0\n\nAll bars have the same height here but different widths \u2014 the areas correctly represent the frequencies.'
      }
    },
    {
      id: 'p-read-hist',
      type: 'paragraph',
      data: { text: 'To read a frequency from a histogram: identify the class width, then multiply frequency density by class width. To find total frequency N = \u03a3(fd \u00d7 class width).' }
    },
    {
      id: 'h-stem-leaf',
      type: 'heading',
      data: { text: 'Stem-and-Leaf Diagrams', level: 2 }
    },
    {
      id: 'p-stem-leaf',
      type: 'paragraph',
      data: { text: 'A stem-and-leaf diagram displays individual data values in order. The stem represents the leading digit(s); the leaf represents the final digit. A back-to-back diagram compares two data sets.' }
    },
    {
      id: 'list-stem-leaf-props',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Preserves original data values (unlike a histogram).' },
          { text: 'Easy to find median and quartiles from an ordered diagram.' },
          { text: 'Only practical for small to medium data sets.' }
        ]
      }
    },
    {
      id: 'callout-tip-hist',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always use frequency density on the y-axis of a histogram, never frequency. When class widths are equal the shape is the same, but for unequal widths you must calculate fd.'
      }
    },
    {
      id: 'sum-6-2-0',
      type: 'summary',
      data: { text: 'Frequency density = frequency \u00f7 class width. Area of histogram bar = frequency. Stem-and-leaf diagrams show individual values in order and allow easy calculation of median and quartiles.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-fd-formula', prompt: 'State the formula for frequency density and explain why area \u2192 frequency in a histogram.' },
      { id: 'cue-2', blockId: 'callout-worked-hist', prompt: 'A class 20\u201330 has frequency density 4.5. What is the frequency?' },
      { id: 'cue-3', blockId: 'list-stem-leaf-props', prompt: 'State two advantages of a stem-and-leaf diagram over a frequency table.' }
    ],
    summaryText: 'fd = f/class width; area = frequency. Histograms show continuous grouped data. Stem-and-leaf preserves individual values.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_2_1.js ── Measures of location
files['note_6_2_1.js'] = r"""export const note_mathematics_6_2_1 = {
  blocks: [
    {
      id: 'obj-6-2-1',
      type: 'objective',
      data: { text: 'Calculate the mean, median, and mode for grouped and ungrouped data, and choose the appropriate measure of location.' }
    },
    {
      id: 'h-mean',
      type: 'heading',
      data: { text: 'Mean', level: 2 }
    },
    {
      id: 'callout-mean-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mean Formulas',
        text: 'Ungrouped: x\u0305 = \u03a3x / n\n\nGrouped (use midpoints): x\u0305 = \u03a3fx / \u03a3f\n\nCoded mean: if y = (x \u2212 a)/b, then x\u0305 = b\u0233 + a'
      }
    },
    {
      id: 'callout-mean-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Grouped Mean',
        text: 'Classes: 0\u20134 (f=2, mid=2), 5\u20139 (f=5, mid=7), 10\u201314 (f=3, mid=12)\n\u03a3fx = 2\u00d72 + 5\u00d77 + 3\u00d712 = 4 + 35 + 36 = 75\n\u03a3f = 10\nMean = 75/10 = 7.5'
      }
    },
    {
      id: 'h-median',
      type: 'heading',
      data: { text: 'Median', level: 2 }
    },
    {
      id: 'p-median',
      type: 'paragraph',
      data: { text: 'The median is the middle value when data are ordered. For n values, it is the \u00bd(n+1)th value. For grouped data, use linear interpolation.' }
    },
    {
      id: 'callout-median-interp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Median by Interpolation',
        text: 'Median = L + [(n/2 \u2212 F) / f] \u00d7 h\n\nwhere L = lower class boundary, F = cumulative frequency before the median class, f = frequency of median class, h = class width'
      }
    },
    {
      id: 'callout-median-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Median Interpolation',
        text: 'n = 40, so median is at position 20.\nCumulative frequencies: 0\u201310: 8, 10\u201320: 18, 20\u201330: 30 \u2190 median class\nL=20, F=18, f=12, h=10\nMedian = 20 + [(20\u221218)/12]\u00d710 = 20 + (2/12)\u00d710 = 20 + 1.67 = 21.7'
      }
    },
    {
      id: 'h-mode',
      type: 'heading',
      data: { text: 'Mode', level: 2 }
    },
    {
      id: 'p-mode',
      type: 'paragraph',
      data: { text: 'The mode is the value (or class) with the highest frequency. For grouped continuous data, the modal class is the class with the highest frequency density.' }
    },
    {
      id: 'h-comparison',
      type: 'heading',
      data: { text: 'Choosing the Right Measure', level: 2 }
    },
    {
      id: 'table-location',
      type: 'comparisonTable',
      data: {
        headers: ['Measure', 'Best used when\u2026', 'Affected by outliers?'],
        rows: [
          ['Mean', 'Data is roughly symmetric; all values matter', 'Yes \u2014 pulled towards extreme values'],
          ['Median', 'Data is skewed; outliers present', 'No \u2014 depends only on the middle value(s)'],
          ['Mode', 'Categorical data; most common value needed', 'No']
        ],
        caption: 'When to use each measure of location'
      }
    },
    {
      id: 'callout-skew-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Skewness and Average',
        text: 'Positive skew (tail to right): mean > median > mode\nNegative skew (tail to left): mean < median < mode\nSymmetric (normal): mean = median = mode'
      }
    },
    {
      id: 'sum-6-2-1',
      type: 'summary',
      data: { text: 'Mean = \u03a3fx/\u03a3f (use midpoints for grouped data). Median by interpolation: L + [(n/2 \u2212 F)/f]\u00d7h. Use median when data is skewed or has outliers. Positive skew: mean > median > mode.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-median-interp', prompt: 'Write down the formula for median by interpolation and define each variable.' },
      { id: 'cue-2', blockId: 'table-location', prompt: 'When should the median be preferred over the mean? Why?' },
      { id: 'cue-3', blockId: 'callout-skew-tip', prompt: 'For a positively skewed distribution, state the ordering of mean, median, and mode.' },
      { id: 'cue-4', blockId: 'callout-mean-formula', prompt: 'State the grouped mean formula. What values are used for x?' }
    ],
    summaryText: 'x\u0305 = \u03a3fx/\u03a3f. Median interpolation: L+[(n/2\u2212F)/f]\u00d7h. Positive skew: mean>median>mode. Use median for skewed/outlier data.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_2_2.js ── Measures of dispersion
files['note_6_2_2.js'] = r"""export const note_mathematics_6_2_2 = {
  blocks: [
    {
      id: 'obj-6-2-2',
      type: 'objective',
      data: { text: 'Calculate and interpret variance, standard deviation, and interquartile range; apply coding rules; identify outliers.' }
    },
    {
      id: 'h-variance',
      type: 'heading',
      data: { text: 'Variance and Standard Deviation', level: 2 }
    },
    {
      id: 'callout-variance-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Variance and Standard Deviation',
        text: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2\n\n\u03c3 = \u221a(\u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2)\n\nAlso useful: S\u2093\u2093 = \u03a3x\u00b2 \u2212 (\u03a3x)\u00b2/n\n\nFor grouped data use midpoints for x.'
      }
    },
    {
      id: 'callout-variance-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Variance',
        text: 'Data: 2, 4, 4, 4, 5, 5, 7, 9   (n = 8)\n\u03a3x = 40,  x\u0305 = 5\n\u03a3x\u00b2 = 4+16+16+16+25+25+49+81 = 232\n\u03c3\u00b2 = 232/8 \u2212 5\u00b2 = 29 \u2212 25 = 4\n\u03c3 = \u221a4 = 2'
      }
    },
    {
      id: 'h-coding',
      type: 'heading',
      data: { text: 'Coding', level: 2 }
    },
    {
      id: 'p-coding',
      type: 'paragraph',
      data: { text: 'Coding simplifies calculations. If y = (x \u2212 a)/b, then:' }
    },
    {
      id: 'callout-coding-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Coding Rules',
        text: 'x\u0305 = b\u0233 + a  (position shifts by a, scales by b)\n\n\u03c3_x = b \u00d7 \u03c3_y  (standard deviation scales by b only; shift has no effect)\n\nvar_x = b\u00b2 \u00d7 var_y'
      }
    },
    {
      id: 'h-iqr',
      type: 'heading',
      data: { text: 'Interquartile Range (IQR)', level: 2 }
    },
    {
      id: 'p-quartiles',
      type: 'paragraph',
      data: { text: 'Quartiles split ordered data into quarters. Q\u2081 is the lower quartile (25th percentile), Q\u2082 is the median (50th), Q\u2083 is the upper quartile (75th).' }
    },
    {
      id: 'callout-iqr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'IQR and Outlier Rule',
        text: 'IQR = Q\u2083 \u2212 Q\u2081\n\nOutlier if: x < Q\u2081 \u2212 1.5 \u00d7 IQR  OR  x > Q\u2083 + 1.5 \u00d7 IQR'
      }
    },
    {
      id: 'callout-iqr-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Outlier Detection',
        text: 'Q\u2081 = 12,  Q\u2083 = 20,  IQR = 8\nLower fence: 12 \u2212 1.5\u00d78 = 12 \u2212 12 = 0\nUpper fence: 20 + 1.5\u00d78 = 20 + 12 = 32\nA value of 35 is an outlier. A value of 3 is not.'
      }
    },
    {
      id: 'h-compare-dispersion',
      type: 'heading',
      data: { text: 'Comparing Measures of Dispersion', level: 2 }
    },
    {
      id: 'table-dispersion',
      type: 'comparisonTable',
      data: {
        headers: ['Measure', 'Based on', 'Affected by outliers?'],
        rows: [
          ['Standard deviation (\u03c3)', 'All data values', 'Yes \u2014 sensitive to extreme values'],
          ['IQR', 'Middle 50% of data', 'No \u2014 robust to outliers'],
          ['Range', 'Max \u2212 min', 'Yes \u2014 very sensitive']
        ],
        caption: 'Measures of dispersion comparison'
      }
    },
    {
      id: 'callout-tip-disp',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Use IQR (with median) when data is skewed or has outliers. Use standard deviation (with mean) for symmetric data. The standard deviation and mean are used together; IQR and median are used together.'
      }
    },
    {
      id: 'sum-6-2-2',
      type: 'summary',
      data: { text: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2. Coding: \u03c3_x = b\u03c3_y. IQR = Q\u2083 \u2212 Q\u2081; outlier if outside Q\u2081\u22121.5\u00d7IQR or Q\u2083+1.5\u00d7IQR. Use IQR+median for skewed data; \u03c3+mean for symmetric data.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-variance-formula', prompt: 'State the formula for variance in terms of \u03a3fx\u00b2, \u03a3f, and x\u0305.' },
      { id: 'cue-2', blockId: 'callout-coding-rules', prompt: 'If y = (x\u2212a)/b, how does the standard deviation of x relate to the standard deviation of y?' },
      { id: 'cue-3', blockId: 'callout-iqr', prompt: 'State the outlier rule using IQR.' },
      { id: 'cue-4', blockId: 'table-dispersion', prompt: 'Why is IQR preferred over standard deviation when data has outliers?' }
    ],
    summaryText: '\u03c3\u00b2 = \u03a3fx\u00b2/\u03a3f \u2212 x\u0305\u00b2. Coding: \u03c3_x = b\u03c3_y. Outlier: outside Q\u2081\u22121.5IQR or Q\u2083+1.5IQR. IQR robust to outliers.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_3_0.js ── Venn diagrams and mutually exclusive events
files['note_6_3_0.js'] = r"""export const note_mathematics_6_3_0 = {
  blocks: [
    {
      id: 'obj-6-3-0',
      type: 'objective',
      data: { text: 'Use Venn diagrams to find probabilities; apply the addition rule and identify mutually exclusive events.' }
    },
    {
      id: 'h-basic-prob',
      type: 'heading',
      data: { text: 'Basic Probability', level: 2 }
    },
    {
      id: 'callout-basic-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Probability Axioms',
        text: '0 \u2264 P(A) \u2264 1 for any event A\n\nP(sample space) = 1\n\nP(A\u2019) = 1 \u2212 P(A)  [complement rule]'
      }
    },
    {
      id: 'h-addition',
      type: 'heading',
      data: { text: 'Addition Rule', level: 2 }
    },
    {
      id: 'callout-addition',
      type: 'callout',
      data: {
        style: 'key',
        title: 'General Addition Rule',
        text: 'P(A \u222a B) = P(A) + P(B) \u2212 P(A \u2229 B)\n\nFor mutually exclusive events (A \u2229 B = \u2205):\nP(A \u222a B) = P(A) + P(B)'
      }
    },
    {
      id: 'callout-addition-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Addition Rule',
        text: 'P(A) = 0.4,  P(B) = 0.3,  P(A \u2229 B) = 0.1\nP(A \u222a B) = 0.4 + 0.3 \u2212 0.1 = 0.6\nP(A\u2019 \u2229 B\u2019) = 1 \u2212 P(A \u222a B) = 1 \u2212 0.6 = 0.4'
      }
    },
    {
      id: 'h-mutual-excl',
      type: 'heading',
      data: { text: 'Mutually Exclusive Events', level: 2 }
    },
    {
      id: 'p-mutual',
      type: 'paragraph',
      data: { text: 'Two events are mutually exclusive if they cannot both occur at the same time: P(A \u2229 B) = 0. On a Venn diagram, the circles do not overlap.' }
    },
    {
      id: 'callout-mutual-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Mutually exclusive \u2260 independent. Mutually exclusive events (P(A\u2229B)=0) cannot both happen, so knowing A occurred makes B impossible \u2014 this means they are dependent, not independent!'
      }
    },
    {
      id: 'h-venn',
      type: 'heading',
      data: { text: 'Venn Diagram Strategy', level: 2 }
    },
    {
      id: 'list-venn-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Start with P(A \u2229 B) and fill in the intersection first.' },
          { text: 'Use P(A only) = P(A) \u2212 P(A \u2229 B).' },
          { text: 'Use P(B only) = P(B) \u2212 P(A \u2229 B).' },
          { text: 'Find the outside region: P(neither) = 1 \u2212 P(A \u222a B).' }
        ]
      }
    },
    {
      id: 'callout-venn-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Venn Diagram',
        text: 'In a class of 30: 15 study Maths (M), 12 study Physics (P), 5 study both.\nP(M only) = 15\u22125 = 10\nP(P only) = 12\u22125 = 7\nP(neither) = 30\u221210\u22125\u22127 = 8\nP(M|P) = 5/12 (conditional \u2014 covered in next note)'
      }
    },
    {
      id: 'sum-6-3-0',
      type: 'summary',
      data: { text: 'P(A \u222a B) = P(A)+P(B)\u2212P(A\u2229B). Mutually exclusive: P(A\u2229B)=0. P(A\u2019)=1\u2212P(A). Venn diagram: fill intersection first, then individual regions, then outside.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-addition', prompt: 'State the general addition rule. Under what condition does it simplify?' },
      { id: 'cue-2', blockId: 'callout-mutual-warning', prompt: 'Explain why mutually exclusive events are NOT independent.' },
      { id: 'cue-3', blockId: 'list-venn-strategy', prompt: 'Describe the 4-step strategy for filling in a Venn diagram.' }
    ],
    summaryText: 'P(A\u222aB)=P(A)+P(B)\u2212P(A\u2229B). ME: P(A\u2229B)=0. Venn: intersection first. ME \u2260 independent.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_3_1.js ── Independent events and conditional probability
files['note_6_3_1.js'] = r"""export const note_mathematics_6_3_1 = {
  blocks: [
    {
      id: 'obj-6-3-1',
      type: 'objective',
      data: { text: 'Apply the conditional probability formula, identify independent events, and use the multiplication rule.' }
    },
    {
      id: 'h-conditional',
      type: 'heading',
      data: { text: 'Conditional Probability', level: 2 }
    },
    {
      id: 'callout-cond-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditional Probability Formula',
        text: 'P(A|B) = P(A \u2229 B) / P(B)\n\n"The probability of A given B has occurred."\n\nRearranged: P(A \u2229 B) = P(B) \u00d7 P(A|B)'
      }
    },
    {
      id: 'callout-cond-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Conditional Probability',
        text: 'P(A) = 0.5, P(B) = 0.4, P(A \u2229 B) = 0.2\n\nP(A|B) = 0.2/0.4 = 0.5\nP(B|A) = 0.2/0.5 = 0.4\n\nNote: P(A|B) = P(A) here, which means A and B are independent.'
      }
    },
    {
      id: 'h-independence',
      type: 'heading',
      data: { text: 'Independent Events', level: 2 }
    },
    {
      id: 'callout-independence',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Independence Conditions',
        text: 'A and B are independent if any of the following hold (they are equivalent):\n\nP(A \u2229 B) = P(A) \u00d7 P(B)\nP(A|B) = P(A)\nP(B|A) = P(B)'
      }
    },
    {
      id: 'p-independence-note',
      type: 'paragraph',
      data: { text: 'Independent events do not affect each other. Knowing B occurred gives no information about whether A will occur. This is different from mutually exclusive events where knowing B occurred means A cannot occur.' }
    },
    {
      id: 'h-mult-rule',
      type: 'heading',
      data: { text: 'Multiplication Rule', level: 2 }
    },
    {
      id: 'callout-mult-rule',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Multiplication Rule',
        text: 'General: P(A \u2229 B) = P(A) \u00d7 P(B|A)\n\nFor independent events: P(A \u2229 B) = P(A) \u00d7 P(B)'
      }
    },
    {
      id: 'callout-mult-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Multiplication Rule',
        text: 'A bag has 4 red and 6 blue balls. Two drawn without replacement.\nP(1st red) = 4/10\nP(2nd red | 1st red) = 3/9\nP(both red) = (4/10) \u00d7 (3/9) = 12/90 = 2/15'
      }
    },
    {
      id: 'callout-tip-indep',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To show independence: calculate P(A)\u00d7P(B) and P(A\u2229B) separately. If equal, they are independent. With replacement \u2192 often independent. Without replacement \u2192 often dependent.'
      }
    },
    {
      id: 'sum-6-3-1',
      type: 'summary',
      data: { text: 'P(A|B) = P(A\u2229B)/P(B). Independent: P(A\u2229B)=P(A)\u00d7P(B). Multiplication rule: P(A\u2229B)=P(A)\u00d7P(B|A). With replacement \u2192 independent; without replacement \u2192 dependent.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-cond-formula', prompt: 'State the formula for P(A|B) and rearrange it to find P(A\u2229B).' },
      { id: 'cue-2', blockId: 'callout-independence', prompt: 'State the three equivalent conditions for A and B to be independent.' },
      { id: 'cue-3', blockId: 'callout-mult-worked', prompt: 'Two cards drawn without replacement from a standard deck. Are draws independent? Why?' }
    ],
    summaryText: 'P(A|B)=P(A\u2229B)/P(B). Independence: P(A\u2229B)=P(A)\u00d7P(B). Without replacement \u2192 dependent.',
    ready: true
  },
  evidence: []
};
"""

# ── note_6_3_2.js ── Tree diagrams
files['note_6_3_2.js'] = r"""export const note_mathematics_6_3_2 = {
  blocks: [
    {
      id: 'obj-6-3-2',
      type: 'objective',
      data: { text: 'Construct and use tree diagrams to calculate probabilities of combined events, with and without replacement.' }
    },
    {
      id: 'h-tree-intro',
      type: 'heading',
      data: { text: 'Tree Diagrams', level: 2 }
    },
    {
      id: 'p-tree-intro',
      type: 'paragraph',
      data: { text: 'A tree diagram shows all possible outcomes of a sequence of events. Each branch represents one outcome, with its probability written on the branch.' }
    },
    {
      id: 'callout-tree-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Tree Diagram Rules',
        text: 'Multiply along branches (AND): P(A and B) = P(A) \u00d7 P(B|A)\n\nAdd across branches (OR): P(same outcome by different paths) = sum of branch products.\n\nAll branches from one node must sum to 1.'
      }
    },
    {
      id: 'callout-tree-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Without Replacement',
        text: 'Bag: 3 red (R), 2 blue (B). Draw 2 without replacement.\n\nP(R then R) = 3/5 \u00d7 2/4 = 6/20 = 3/10\nP(R then B) = 3/5 \u00d7 2/4 = 6/20 = 3/10\nP(B then R) = 2/5 \u00d7 3/4 = 6/20 = 3/10\nP(B then B) = 2/5 \u00d7 1/4 = 2/20 = 1/10\n\nCheck: 3/10+3/10+3/10+1/10 = 10/10 \u2713\nP(exactly 1 red) = P(RB)+P(BR) = 3/10+3/10 = 3/5'
      }
    },
    {
      id: 'h-at-least-one',
      type: 'heading',
      data: { text: 'At Least One', level: 2 }
    },
    {
      id: 'callout-at-least',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Complement for At Least One',
        text: 'P(at least one A) = 1 \u2212 P(no A)\n\nThis is usually much quicker than adding all the ways to get at least one.'
      }
    },
    {
      id: 'callout-at-least-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: At Least One Red',
        text: 'Bag: 3 red, 2 blue. Draw 2 without replacement.\n\nP(no red) = P(BB) = 2/5 \u00d7 1/4 = 2/20 = 1/10\nP(at least 1 red) = 1 \u2212 1/10 = 9/10'
      }
    },
    {
      id: 'callout-tip-tree',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: 'Always check: probabilities on branches from each node sum to 1.\nFor "without replacement", the denominators decrease by 1 after each draw.\nFor "at least one", use the complement to avoid long calculations.'
      }
    },
    {
      id: 'sum-6-3-2',
      type: 'summary',
      data: { text: 'Tree diagrams: multiply along branches (AND), add across (OR). All branches from a node sum to 1. P(at least one) = 1 \u2212 P(none). Without replacement: denominator decreases by 1 each draw.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-tree-rules', prompt: 'Explain the multiply-along-branches and add-across-branches rules for tree diagrams.' },
      { id: 'cue-2', blockId: 'callout-at-least', prompt: 'How do you use the complement to find P(at least one A)? Why is this easier?' },
      { id: 'cue-3', blockId: 'callout-tree-worked1', prompt: 'A bag has 3 red and 2 blue. Find P(exactly one red) drawing 2 without replacement.' }
    ],
    summaryText: 'Multiply along branches (AND); add rows (OR). P(at least 1) = 1\u2212P(none). Branches from each node sum to 1.',
    ready: true
  },
  evidence: []
};
"""

# Write all files
for filename, content in files.items():
    path = os.path.join(base, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Written: {path}')

print('Done. 8 files written for WST01 Topics 1-3.')
