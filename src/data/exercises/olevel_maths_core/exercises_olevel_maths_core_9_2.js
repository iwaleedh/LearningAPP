export const exercises_olevel_maths_core_9_2 = {

  mcq: [
    // ── Mean ──
    { id: 'mcq-1', stem: 'Find the mean of: 3, 7, 5, 9, 6.', options: ['5', '6', '7', '6.5'], correctAnswer: 1, rationale: 'Sum = 3 + 7 + 5 + 9 + 6 = 30. Mean = 30 ÷ 5 = 6.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-2', stem: 'The mean of four numbers is 8. What is their total?', options: ['24', '32', '16', '20'], correctAnswer: 1, rationale: 'Mean = total ÷ number of values. So total = mean × number = 8 × 4 = 32.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-3', stem: 'The mean of 5, 10, 8, x, 7 is 8. What is the value of x?', options: ['8', '10', '12', '6'], correctAnswer: 1, rationale: 'Total must be 8 × 5 = 40. 5 + 10 + 8 + 7 = 30. So x = 40 − 30 = 10.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-4', stem: 'Which average uses every value in the data set in its calculation?', options: ['Mode', 'Median', 'Mean', 'Range'], correctAnswer: 2, rationale: 'The mean uses every value because it is calculated as sum of all values ÷ number of values.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-5', stem: 'Find the mean of: 12, 15, 18, 21, 14.', options: ['15', '16', '18', '14'], correctAnswer: 1, rationale: 'Sum = 12 + 15 + 18 + 21 + 14 = 80. Mean = 80 ÷ 5 = 16.', topic: 'Mean, median, mode and range' },

    // ── Median ──
    { id: 'mcq-6', stem: 'Find the median of: 4, 8, 1, 6, 3.', options: ['4', '6', '3', '8'], correctAnswer: 0, rationale: 'Order: 1, 3, 4, 6, 8. There are 5 values, so the median is the 3rd value = 4.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-7', stem: 'Find the median of: 2, 9, 5, 7, 3, 6.', options: ['5', '5.5', '6', '7'], correctAnswer: 1, rationale: 'Order: 2, 3, 5, 6, 7, 9. Even count (6), so median = (5 + 6) ÷ 2 = 5.5.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-8', stem: 'There are 15 values in a data set listed in order. What position is the median?', options: ['7th', '7.5th', '8th', '15th'], correctAnswer: 2, rationale: 'Position = (n + 1) ÷ 2 = (15 + 1) ÷ 2 = 8. The median is the 8th value.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-9', stem: 'Which average is NOT affected by outliers?', options: ['Mean', 'Median', 'Range', 'Sum'], correctAnswer: 1, rationale: 'The median only depends on the middle value(s), so outliers do not change it.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-10', stem: 'Find the median of: 10, 3, 7, 5, 12, 8, 6.', options: ['5', '7', '6', '8'], correctAnswer: 1, rationale: 'Order: 3, 5, 6, 7, 8, 10, 12. n = 7. Median is the 4th value = 7.', topic: 'Mean, median, mode and range' },

    // ── Mode ──
    { id: 'mcq-11', stem: 'Find the mode of: 3, 5, 7, 5, 9, 3, 5.', options: ['3', '5', '7', '9'], correctAnswer: 1, rationale: '5 appears 3 times, more than any other value. Mode = 5.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-12', stem: 'The data set 2, 4, 6, 8, 10 has:', options: ['Mode = 6', 'Mode = 2', 'No mode', 'Mode = 10'], correctAnswer: 2, rationale: 'Every value appears once. When no value appears more than the others, there is no mode.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-13', stem: 'A shoe shop records sizes sold: 6, 7, 8, 7, 9, 7, 6, 8, 7, 8. Which average is most useful for deciding stock?', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 2, rationale: 'The mode (size 7, appearing 4 times) shows the most popular size — best for stocking decisions.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-14', stem: 'The data set 1, 2, 2, 3, 3, 4 is described as:', options: ['No mode', 'Unimodal', 'Bimodal', 'Trimodal'], correctAnswer: 2, rationale: 'Both 2 and 3 appear twice (more than 1 and 4). The data is bimodal.', topic: 'Mean, median, mode and range' },

    // ── Range ──
    { id: 'mcq-15', stem: 'Find the range of: 12, 18, 9, 15, 20, 14, 11, 17.', options: ['9', '11', '20', '8'], correctAnswer: 1, rationale: 'Range = largest − smallest = 20 − 9 = 11.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-16', stem: 'Class A has range 5 and Class B has range 12. Which class has more consistent results?', options: ['Class A', 'Class B', 'They are equally consistent', 'Cannot tell'], correctAnswer: 0, rationale: 'A smaller range means the data is more consistent. Class A (range 5) is more consistent than Class B (range 12).', topic: 'Mean, median, mode and range' },
    { id: 'mcq-17', stem: 'Data: 50, 52, 51, 53, 49, 52, 98. What is the range?', options: ['4', '49', '48', '98'], correctAnswer: 1, rationale: 'Range = 98 − 49 = 49. The outlier (98) makes the range very large.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-18', stem: 'Why is the range considered a limited measure of spread?', options: ['It uses all data values', 'It only uses two values and is affected by outliers', 'It is difficult to calculate', 'It ignores the largest value'], correctAnswer: 1, rationale: 'The range only uses the largest and smallest values, so one outlier can make it misleadingly large.', topic: 'Mean, median, mode and range' },

    // ── Choosing the appropriate average ──
    { id: 'mcq-19', stem: 'Salaries (£): 20 000, 22 000, 21 000, 19 000, 95 000. Which average best represents a "typical" salary?', options: ['Mean', 'Median', 'Mode', 'Range'], correctAnswer: 1, rationale: 'The outlier (£95 000) inflates the mean. The median (£21 000) is not affected and better represents a typical salary.', topic: 'Mean, median, mode and range' },
    { id: 'mcq-20', stem: 'When comparing two data sets, you should compare:', options: ['Only the mean', 'Only the range', 'Both an average and the range', 'Only the mode'], correctAnswer: 2, rationale: 'A complete comparison requires both a measure of centre (average) and a measure of spread (range).', topic: 'Mean, median, mode and range' },

    // ── Averages from frequency tables ──
    { id: 'mcq-21', stem: 'A frequency table shows: Score 1 (freq 3), Score 2 (freq 5), Score 3 (freq 2). What is the total frequency?', options: ['6', '10', '3', '15'], correctAnswer: 1, rationale: 'Total frequency = 3 + 5 + 2 = 10.', topic: 'Averages from frequency tables' },
    { id: 'mcq-22', stem: 'In a frequency table, the mean is found by calculating:', options: ['Σf ÷ n', 'Σ(f × x) ÷ Σf', 'Σx ÷ n', 'Σf × Σx'], correctAnswer: 1, rationale: 'Mean = Σ(f × x) ÷ Σf, where f is frequency and x is the data value.', topic: 'Averages from frequency tables' },
    { id: 'mcq-23', stem: 'Score: 1(f=4), 2(f=6), 3(f=8), 4(f=2). Find the mean.', options: ['2.2', '2.4', '2.5', '2.0'], correctAnswer: 1, rationale: 'Σ(fx) = 1×4 + 2×6 + 3×8 + 4×2 = 4 + 12 + 24 + 8 = 48. Σf = 20. Mean = 48 ÷ 20 = 2.4.', topic: 'Averages from frequency tables' },
    { id: 'mcq-24', stem: 'Score: 0(f=2), 1(f=5), 2(f=8), 3(f=5). What is the mode?', options: ['0', '1', '2', '3'], correctAnswer: 2, rationale: 'The score with the highest frequency is 2 (frequency 8). Mode = 2.', topic: 'Averages from frequency tables' },
    { id: 'mcq-25', stem: 'Goals per match: 0(f=3), 1(f=7), 2(f=5), 3(f=4), 4(f=1). What is the total number of matches?', options: ['15', '20', '10', '4'], correctAnswer: 1, rationale: 'Total matches = Σf = 3 + 7 + 5 + 4 + 1 = 20.', topic: 'Averages from frequency tables' },
    { id: 'mcq-26', stem: 'Goals per match: 0(f=3), 1(f=7), 2(f=5), 3(f=4), 4(f=1). Find the mean goals per match.', options: ['1.55', '1.65', '2', '1.75'], correctAnswer: 1, rationale: 'Σ(fx) = 0×3 + 1×7 + 2×5 + 3×4 + 4×1 = 0 + 7 + 10 + 12 + 4 = 33. Mean = 33 ÷ 20 = 1.65.', topic: 'Averages from frequency tables' },
    { id: 'mcq-27', stem: 'In a frequency table with total frequency 25, the median is the ___ value.', options: ['12th', '12.5th', '13th', '25th'], correctAnswer: 2, rationale: 'Median position = (25 + 1) ÷ 2 = 13. The median is the 13th value.', topic: 'Averages from frequency tables' },
    { id: 'mcq-28', stem: 'Number of pets: 0(f=6), 1(f=10), 2(f=7), 3(f=2). Find the median.', options: ['0', '1', '1.5', '2'], correctAnswer: 1, rationale: 'Σf = 25. Median position = 13th value. Cumulative: 0→6, 1→16. The 13th value falls in score 1. Median = 1.', topic: 'Averages from frequency tables' },
    { id: 'mcq-29', stem: 'A frequency table has Σ(fx) = 156 and Σf = 24. What is the mean?', options: ['6', '6.5', '7', '5.5'], correctAnswer: 1, rationale: 'Mean = Σ(fx) ÷ Σf = 156 ÷ 24 = 6.5.', topic: 'Averages from frequency tables' },
    { id: 'mcq-30', stem: 'From a frequency table, the range is found by:', options: ['Largest frequency − smallest frequency', 'Largest data value − smallest data value', 'Mean − mode', 'Total frequency ÷ 2'], correctAnswer: 1, rationale: 'Range = largest data value − smallest data value, not the frequencies.', topic: 'Averages from frequency tables' },
  ],

  fillblank: [
    { id: 'fb-1', stem: 'Mean = sum of all values ÷ ___.', template: 'Mean = sum of all values ÷ __BLANK__', blanks: [{ answer: 'number of values' }], rationale: 'The mean is calculated by dividing the total by the count of values.' },
    { id: 'fb-2', stem: 'The median is the ___ value when data is arranged in order.', template: 'The median is the __BLANK__ value when ordered', blanks: [{ answer: 'middle' }], rationale: 'The median is the central value in an ordered data set.' },
    { id: 'fb-3', stem: 'The mode is the value that appears most ___.', template: 'The mode is the most __BLANK__ value', blanks: [{ answer: 'frequently' }], rationale: 'The mode is the value with the highest frequency.' },
    { id: 'fb-4', stem: 'Range = largest value − ___.', template: 'Range = largest value − __BLANK__', blanks: [{ answer: 'smallest value' }], rationale: 'Range = maximum − minimum.' },
    { id: 'fb-5', stem: 'For 11 ordered values, the median is the ___th value.', template: 'For 11 values, the median is the __BLANK__th value', blanks: [{ answer: '6' }], rationale: 'Position = (11 + 1) ÷ 2 = 6.' },
    { id: 'fb-6', stem: 'The mean is greatly affected by extreme values called ___.', template: 'Extreme values are called __BLANK__', blanks: [{ answer: 'outliers' }], rationale: 'Outliers are extreme values that pull the mean towards them.' },
    { id: 'fb-7', stem: 'A data set with two modes is called ___.', template: 'Two modes means the data is __BLANK__', blanks: [{ answer: 'bimodal' }], rationale: 'Bimodal means the data has two modes.' },
    { id: 'fb-8', stem: 'A small range means the data is ___.', template: 'A small range means data is __BLANK__', blanks: [{ answer: 'consistent' }], rationale: 'A small range indicates the values are close together (consistent).' },
    { id: 'fb-9', stem: 'For 20 ordered values, the median is halfway between the ___th and 11th values.', template: 'Median is between the __BLANK__th and 11th values', blanks: [{ answer: '10' }], rationale: 'Position = (20 + 1) ÷ 2 = 10.5, so average of 10th and 11th values.' },
    { id: 'fb-10', stem: 'In a frequency table, mean = Σ(fx) ÷ ___.', template: 'Mean from a frequency table = Σ(fx) ÷ __BLANK__', blanks: [{ answer: 'Σf' }], rationale: 'Divide the sum of (frequency × value) by the total frequency.' },
    { id: 'fb-11', stem: 'To find the median from a frequency table, use a ___ frequency column.', template: 'Use a __BLANK__ frequency column', blanks: [{ answer: 'cumulative' }], rationale: 'Cumulative frequency helps locate the position of the median.' },
    { id: 'fb-12', stem: 'The mode from a frequency table is the value with the highest ___.', template: 'The mode has the highest __BLANK__', blanks: [{ answer: 'frequency' }], rationale: 'The mode is the data value that appears most often, i.e. has the greatest frequency.' },
    { id: 'fb-13', stem: 'When data has outliers, the ___ is more reliable than the mean.', template: 'The __BLANK__ is more reliable with outliers', blanks: [{ answer: 'median' }], rationale: 'The median is not affected by extreme values.' },
    { id: 'fb-14', stem: 'The mean of 4, 6, 8, 10, 12 is ___.', template: 'The mean is __BLANK__', blanks: [{ answer: '8' }], rationale: 'Sum = 40. Mean = 40 ÷ 5 = 8.' },
    { id: 'fb-15', stem: 'When comparing two data sets, compare both an average and the ___.', template: 'Compare an average and the __BLANK__', blanks: [{ answer: 'range' }], rationale: 'A full comparison needs a measure of centre (average) and a measure of spread (range).' },
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Sort each statement into the correct average type.',
      categories: ['Mean', 'Median', 'Mode'],
      items: [
        { text: 'Uses every value in its calculation', category: 'Mean' },
        { text: 'The middle value when ordered', category: 'Median' },
        { text: 'The most frequent value', category: 'Mode' },
        { text: 'Affected by outliers', category: 'Mean' },
        { text: 'Found using (n + 1) ÷ 2 position', category: 'Median' },
        { text: 'Best for qualitative data', category: 'Mode' },
      ],
    },
    {
      id: 'dd-2',
      stem: 'Sort each scenario by the most appropriate average to use.',
      categories: ['Mean', 'Median', 'Mode'],
      items: [
        { text: 'Test scores with no outliers', category: 'Mean' },
        { text: 'House prices in a city', category: 'Median' },
        { text: 'Most popular shoe size to stock', category: 'Mode' },
        { text: 'Salaries in a company with one very high earner', category: 'Median' },
        { text: 'Favourite colour voted by students', category: 'Mode' },
        { text: 'Average height of students (evenly spread)', category: 'Mean' },
      ],
    },
    {
      id: 'dd-3',
      stem: 'Classify each description as a property of Range or Mean.',
      categories: ['Range', 'Mean'],
      items: [
        { text: 'Measures spread', category: 'Range' },
        { text: 'Measures centre', category: 'Mean' },
        { text: 'Largest − smallest', category: 'Range' },
        { text: 'Sum ÷ count', category: 'Mean' },
        { text: 'Uses only two values', category: 'Range' },
        { text: 'Uses all values', category: 'Mean' },
      ],
    },
    {
      id: 'dd-4',
      stem: 'Sort these weaknesses to the correct measure.',
      categories: ['Mean', 'Mode', 'Range'],
      items: [
        { text: 'Greatly affected by outliers', category: 'Mean' },
        { text: 'May not exist or may have more than one', category: 'Mode' },
        { text: 'One extreme value makes it misleading', category: 'Range' },
        { text: 'Ignores actual values of most data', category: 'Mode' },
      ],
    },
    {
      id: 'dd-5',
      stem: 'Match each data set to its correct range.',
      categories: ['Range = 7', 'Range = 10', 'Range = 15', 'Range = 20'],
      items: [
        { text: '3, 5, 8, 10', category: 'Range = 7' },
        { text: '5, 10, 12, 15', category: 'Range = 10' },
        { text: '20, 25, 30, 35', category: 'Range = 15' },
        { text: '10, 15, 20, 30', category: 'Range = 20' },
      ],
    },
    {
      id: 'dd-6',
      stem: 'Sort these terms into "Measure of centre" or "Measure of spread".',
      categories: ['Measure of centre', 'Measure of spread'],
      items: [
        { text: 'Mean', category: 'Measure of centre' },
        { text: 'Median', category: 'Measure of centre' },
        { text: 'Mode', category: 'Measure of centre' },
        { text: 'Range', category: 'Measure of spread' },
      ],
    },
    {
      id: 'dd-7',
      stem: 'Match each frequency table calculation to its formula.',
      categories: ['Σ(f × x) ÷ Σf', 'Value with highest f', '(n + 1) ÷ 2 position', 'Largest x − smallest x'],
      items: [
        { text: 'Mean from a frequency table', category: 'Σ(f × x) ÷ Σf' },
        { text: 'Mode from a frequency table', category: 'Value with highest f' },
        { text: 'Median position', category: '(n + 1) ÷ 2 position' },
        { text: 'Range from a frequency table', category: 'Largest x − smallest x' },
      ],
    },
    {
      id: 'dd-8',
      stem: 'Sort these data-comparison statements as describing "Centre" or "Spread".',
      categories: ['Centre', 'Spread'],
      items: [
        { text: 'On average, Class A scored higher', category: 'Centre' },
        { text: 'Class B results are more consistent', category: 'Spread' },
        { text: 'The mean of Group X is 14.2', category: 'Centre' },
        { text: 'The range of Group Y is 8', category: 'Spread' },
      ],
    },
    {
      id: 'dd-9',
      stem: 'Sort each data set by whether it has "No mode", "One mode", or "Two modes".',
      categories: ['No mode', 'One mode', 'Two modes'],
      items: [
        { text: '1, 2, 3, 4, 5', category: 'No mode' },
        { text: '3, 5, 5, 7, 9', category: 'One mode' },
        { text: '2, 2, 4, 6, 6', category: 'Two modes' },
        { text: '1, 3, 5, 7, 9', category: 'No mode' },
        { text: '4, 4, 4, 8, 9', category: 'One mode' },
      ],
    },
    {
      id: 'dd-10',
      stem: 'Classify each statement as "True" or "False".',
      categories: ['True', 'False'],
      items: [
        { text: 'The range uses every data value', category: 'False' },
        { text: 'The median is not affected by outliers', category: 'True' },
        { text: 'A data set can have no mode', category: 'True' },
        { text: 'The mean is always a value in the data set', category: 'False' },
        { text: 'You must order data before finding the median', category: 'True' },
      ],
    },
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Put the steps for finding the mean in order.',
      steps: [
        'Add up all the data values',
        'Count the number of values',
        'Divide the total by the count',
        'State the mean',
      ],
    },
    {
      id: 'seq-2',
      stem: 'Put the steps for finding the median in order.',
      steps: [
        'Arrange all data values in ascending order',
        'Count the number of values (n)',
        'Find the median position using (n + 1) ÷ 2',
        'Read off the value at that position (or average the two middle values)',
      ],
    },
    {
      id: 'seq-3',
      stem: 'Put the steps for finding the range in order.',
      steps: [
        'Identify the largest value in the data set',
        'Identify the smallest value in the data set',
        'Subtract the smallest from the largest',
        'State the range',
      ],
    },
    {
      id: 'seq-4',
      stem: 'Order the steps for finding the mean from a frequency table.',
      steps: [
        'Multiply each value (x) by its frequency (f) to get fx',
        'Find the total Σ(fx)',
        'Find the total frequency Σf',
        'Divide Σ(fx) by Σf',
      ],
    },
    {
      id: 'seq-5',
      stem: 'Order the steps for finding the median from a frequency table.',
      steps: [
        'Find the total frequency Σf',
        'Calculate the median position: (Σf + 1) ÷ 2',
        'Add a cumulative frequency column',
        'Use cumulative frequencies to find which value the median position falls in',
      ],
    },
    {
      id: 'seq-6',
      stem: 'Put the steps for comparing two data sets in order.',
      steps: [
        'Calculate an average (mean or median) for each data set',
        'Calculate the range for each data set',
        'Compare the averages and state which group performed better on average',
        'Compare the ranges and state which group is more consistent',
      ],
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to find the median of: 8, 3, 6, 1, 5, 9, 4.',
      steps: [
        'Arrange in order: 1, 3, 4, 5, 6, 8, 9',
        'Count: n = 7',
        'Median position = (7 + 1) ÷ 2 = 4th value',
        'The 4th value is 5, so median = 5',
      ],
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to find the mean of: 10, 15, 20, 25.',
      steps: [
        'Add: 10 + 15 + 20 + 25 = 70',
        'Count: 4 values',
        'Divide: 70 ÷ 4 = 17.5',
        'Mean = 17.5',
      ],
    },
  ],

  keyword: [
    { id: 'kw-1', stem: 'Define the mean. [2 marks]', marks: 2, keywords: ['sum', 'number of values'], modelAnswer: 'The mean is the sum of all values divided by the number of values.' },
    { id: 'kw-2', stem: 'Explain how to find the median of an even number of values. [2 marks]', marks: 2, keywords: ['order', 'two middle values'], modelAnswer: 'Order the data, then find the mean of the two middle values.' },
    { id: 'kw-3', stem: 'What is the mode? [1 mark]', marks: 1, keywords: ['most frequent'], modelAnswer: 'The mode is the value that appears most frequently in a data set.' },
    { id: 'kw-4', stem: 'State the formula for the range. [1 mark]', marks: 1, keywords: ['largest', 'smallest'], modelAnswer: 'Range = largest value − smallest value.' },
    { id: 'kw-5', stem: 'Explain why the median is preferred over the mean when outliers are present. [2 marks]', marks: 2, keywords: ['outliers', 'not affected'], modelAnswer: 'The median is not affected by outliers, whereas the mean is pulled towards extreme values, making it unrepresentative.' },
    { id: 'kw-6', stem: 'State one limitation of the range as a measure of spread. [1 mark]', marks: 1, keywords: ['outlier', 'extreme'], modelAnswer: 'The range is heavily affected by a single outlier or extreme value.' },
    { id: 'kw-7', stem: 'Explain how to find the mean from a frequency table. [2 marks]', marks: 2, keywords: ['f × x', 'total frequency'], modelAnswer: 'Multiply each value by its frequency (f × x), sum the results Σ(fx), then divide by the total frequency Σf.' },
    { id: 'kw-8', stem: 'Explain how to find the mode from a frequency table. [1 mark]', marks: 1, keywords: ['highest frequency'], modelAnswer: 'The mode is the value that has the highest frequency in the table.' },
    { id: 'kw-9', stem: 'Why should you use both an average and the range when comparing two data sets? [2 marks]', marks: 2, keywords: ['centre', 'spread'], modelAnswer: 'An average compares the centre of the data sets, while the range compares how spread out (consistent) the data is. Both are needed for a complete comparison.' },
    { id: 'kw-10', stem: 'Two classes have the same mean score but different ranges. What does this tell you? [2 marks]', marks: 2, keywords: ['same average', 'consistency'], modelAnswer: 'They performed the same on average, but the class with the smaller range has more consistent results. The class with the larger range has greater variation in scores.' },
    { id: 'kw-11', stem: 'What does it mean if a data set is "bimodal"? [1 mark]', marks: 1, keywords: ['two modes'], modelAnswer: 'Bimodal means the data set has two modes — two values that both appear with the highest frequency.' },
    { id: 'kw-12', stem: 'Explain how to find the median from a frequency table. [2 marks]', marks: 2, keywords: ['cumulative frequency', 'position'], modelAnswer: 'Find the total frequency, calculate the median position using (n + 1) ÷ 2, then use cumulative frequencies to identify which data value that position falls within.' },
  ],

  flashcards: [
    { id: 'fc-1', front: 'What is the formula for the mean?', back: 'Mean = sum of all values ÷ number of values', topic: 'Mean, median, mode and range' },
    { id: 'fc-2', front: 'What is the median?', back: 'The middle value when all data is arranged in order.', topic: 'Mean, median, mode and range' },
    { id: 'fc-3', front: 'What is the mode?', back: 'The value that appears most frequently in a data set.', topic: 'Mean, median, mode and range' },
    { id: 'fc-4', front: 'What is the range?', back: 'Range = largest value − smallest value. It measures how spread out the data is.', topic: 'Mean, median, mode and range' },
    { id: 'fc-5', front: 'How do you find the median position?', back: 'Use the formula (n + 1) ÷ 2, where n is the number of values.', topic: 'Mean, median, mode and range' },
    { id: 'fc-6', front: 'Median when n is even?', back: 'Find the mean of the two middle values (the (n/2)th and (n/2 + 1)th values).', topic: 'Mean, median, mode and range' },
    { id: 'fc-7', front: 'Which average is affected by outliers?', back: 'The mean. Outliers pull the mean towards the extreme value.', topic: 'Mean, median, mode and range' },
    { id: 'fc-8', front: 'Which average is best for qualitative data (e.g. favourite colour)?', back: 'The mode — it identifies the most popular category.', topic: 'Mean, median, mode and range' },
    { id: 'fc-9', front: 'When should you use the median instead of the mean?', back: 'When the data has outliers or is skewed (e.g. house prices, salaries).', topic: 'Mean, median, mode and range' },
    { id: 'fc-10', front: 'What does a small range tell you?', back: 'The data is consistent — the values are clustered close together.', topic: 'Mean, median, mode and range' },
    { id: 'fc-11', front: 'What does a large range tell you?', back: 'The data is spread out — there is more variability between values.', topic: 'Mean, median, mode and range' },
    { id: 'fc-12', front: 'What is a limitation of the range?', back: 'It is heavily influenced by outliers. A single extreme value can make the range very large.', topic: 'Mean, median, mode and range' },
    { id: 'fc-13', front: 'Can a data set have no mode?', back: 'Yes — if all values appear the same number of times, there is no mode.', topic: 'Mean, median, mode and range' },
    { id: 'fc-14', front: 'What does "bimodal" mean?', back: 'The data set has two modes (two values that share the highest frequency).', topic: 'Mean, median, mode and range' },
    { id: 'fc-15', front: 'What two things should you always compare when comparing data sets?', back: 'An average (mean or median) to compare centre, and the range to compare spread/consistency.', topic: 'Mean, median, mode and range' },
    { id: 'fc-16', front: 'What must you always do before finding the median?', back: 'Order the data from smallest to largest (or largest to smallest).', topic: 'Mean, median, mode and range' },
    { id: 'fc-17', front: 'How do you find the mean from a frequency table?', back: 'Mean = Σ(f × x) ÷ Σf. Multiply each value by its frequency, sum the products, divide by total frequency.', topic: 'Averages from frequency tables' },
    { id: 'fc-18', front: 'How do you find the mode from a frequency table?', back: 'The mode is the data value with the highest frequency.', topic: 'Averages from frequency tables' },
    { id: 'fc-19', front: 'How do you find the median from a frequency table?', back: 'Find the median position ((n + 1) ÷ 2), then use cumulative frequencies to locate which value the position falls in.', topic: 'Averages from frequency tables' },
    { id: 'fc-20', front: 'What is Σf in a frequency table?', back: 'Σf is the total frequency — the sum of all the frequencies (total number of data values).', topic: 'Averages from frequency tables' },
    { id: 'fc-21', front: 'What is Σ(fx) in a frequency table?', back: 'Σ(fx) is the sum of each value multiplied by its frequency. It gives the grand total of all data values.', topic: 'Averages from frequency tables' },
    { id: 'fc-22', front: 'How do you find the range from a frequency table?', back: 'Range = largest data value − smallest data value (use the data values, not the frequencies).', topic: 'Averages from frequency tables' },
    { id: 'fc-23', front: 'What is cumulative frequency?', back: 'A running total of the frequencies. Each entry is the sum of all frequencies up to and including that value.', topic: 'Averages from frequency tables' },
    { id: 'fc-24', front: 'If the mean of 5 numbers is 12, what is their total?', back: 'Total = mean × count = 12 × 5 = 60.', topic: 'Mean, median, mode and range' },
    { id: 'fc-25', front: 'Salaries: £18k, £20k, £21k, £22k, £19k, £95k. Why is the median better here?', back: 'The outlier (£95k) inflates the mean to £32 500. The median (£20 500) better represents a typical salary.', topic: 'Mean, median, mode and range' },
  ],

};
