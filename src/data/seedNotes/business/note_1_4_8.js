export const note_business_1_4_8 = {
  pdfPath: '/notes/business/wbs11-4.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and evaluate the four key motivation theories on the Edexcel IAL Business specification: <b>Taylor</b> (Scientific Management), <b>Maslow</b> (Hierarchy of Needs), <b>Herzberg</b> (Two-Factor Theory), and <b>McGregor</b> (Theory X and Theory Y). Apply each theory to business decision-making.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Why Motivation Theories Matter', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<b>Motivation</b> is the internal desire to act and the willingness to exert effort towards a goal. In a business context, motivated employees are more productive, produce better quality work, have lower absenteeism, and are less likely to leave. Understanding what drives worker behaviour allows managers to design effective incentive systems and work environments.' }
    },
    {
      id: 'h-taylor',
      type: 'heading',
      data: { text: 'F. W. Taylor — Scientific Management (1911)', level: 2 }
    },
    {
      id: 'p-taylor',
      type: 'paragraph',
      data: { text: 'Frederick Winslow Taylor argued that workers are primarily motivated by <b>money</b>. He developed <b>Scientific Management</b> — a systematic approach to maximising worker productivity through time-and-motion studies, task specialisation, and piece-rate pay linked directly to output.' }
    },
    {
      id: 'list-taylor',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<b>Core idea:</b> Workers are rational economic beings — they will work harder if paid more per unit.' },
          { text: '<b>Method:</b> Study each task scientifically (time-and-motion studies); find the "one best way" to do a job; train workers to follow it; pay piece-rate to reward output.' },
          { text: '<b>Implications:</b> Specialisation of labour; close management control; financial incentives (piece-rate) are the primary motivator.' },
          { text: '<b>Criticism:</b> Ignores social and psychological needs; treats workers as machines; piece-rate can lead to quality sacrificed for quantity; leads to worker alienation and high turnover; trade unions resisted it.' },
          { text: '<b>Modern relevance:</b> Still visible in warehouses (timed picking rates), call centres (call-per-hour targets), and manufacturing.' }
        ]
      }
    },
    {
      id: 'callout-taylor-eg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Taylor in Practice — Amazon Warehouses',
        text: 'Amazon tracks warehouse workers\' productivity in real-time: number of items picked per hour, time between tasks, etc. Workers who consistently fall below productivity targets are warned automatically. Pay is hourly + performance bonus. This is classic Taylorist management — standardised methods, close monitoring, and financial incentives. Critics argue it drives stress and high turnover (40%+ annually in some facilities).'
      }
    },
    {
      id: 'h-maslow',
      type: 'heading',
      data: { text: 'Abraham Maslow — Hierarchy of Needs (1943)', level: 2 }
    },
    {
      id: 'p-maslow',
      type: 'paragraph',
      data: { text: 'Maslow proposed that human needs exist in a <b>hierarchy of five levels</b>. People are motivated to fulfil lower-level needs before they become motivated by higher-level ones. Once a need is met, it no longer motivates. Businesses must understand which level their employees are at and provide rewards accordingly.' }
    },
    {
      id: 'list-maslow',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<b>Physiological needs</b> — basic survival: food, water, shelter, warmth, sleep. Workplace equivalent: adequate pay to cover living costs, safe working conditions and breaks.' },
          { text: '<b>Safety needs</b> — security, stability, freedom from fear. Workplace: job security, employment contracts, pension, H&S compliance.' },
          { text: '<b>Social (love/belonging) needs</b> — relationships, belonging to a group, social interaction. Workplace: team working, social events, a positive collegial culture.' },
          { text: '<b>Esteem needs</b> — respect, achievement, recognition, status. Workplace: praise, job title, performance awards, responsibility.' },
          { text: '<b>Self-actualisation</b> — reaching full personal potential; creativity, challenge, mastery. Workplace: stretch assignments, autonomy, opportunities for personal growth.' }
        ]
      }
    },
    {
      id: 'callout-maslow-crit',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Criticisms of Maslow',
        text: '1. Research has not consistently validated the strict hierarchy — people can be motivated by esteem or self-actualisation even when safety needs are not fully met. 2. Individual differences: what satisfies esteem for one person differs from another. 3. It is difficult to know which level an employee is at in practice. Despite this, the framework is widely used to design reward packages that address multiple needs simultaneously.'
      }
    },
    {
      id: 'h-herzberg',
      type: 'heading',
      data: { text: 'Frederick Herzberg — Two-Factor Theory (1959)', level: 2 }
    },
    {
      id: 'p-herzberg',
      type: 'paragraph',
      data: { text: 'Herzberg interviewed 200 engineers and accountants asking: "What made you feel good at work? What made you feel bad?" He found that the factors causing <b>satisfaction (and motivation)</b> were <i>different</i> from those causing <b>dissatisfaction (and demotivation)</b>. He called them <b>motivators</b> and <b>hygiene factors</b> (also called maintenance factors).' }
    },
    {
      id: 'tbl-herzberg',
      type: 'comparisonTable',
      data: {
        caption: 'Herzberg\'s Two-Factor Theory',
        headers: ['Factor Type', 'What They Are', 'Effect', 'Examples'],
        rows: [
          ['Hygiene factors', 'Factors related to the work environment/conditions', 'If absent/poor → dissatisfaction and demotivation. If present → no dissatisfaction, but NOT positive motivation.', 'Pay, job security, working conditions, supervision quality, company policy, interpersonal relationships'],
          ['Motivators', 'Factors intrinsic to the work itself', 'If present → positive motivation and job satisfaction. If absent → no motivation, but NOT dissatisfaction.', 'Achievement, recognition, the work itself, responsibility, advancement, personal growth'],
        ]
      }
    },
    {
      id: 'p-herzberg-2',
      type: 'paragraph',
      data: { text: '<b>Key implication:</b> Simply improving hygiene factors (e.g. raising pay) removes dissatisfaction but does NOT motivate workers. To truly motivate, managers must enrich the job itself — give more responsibility, challenge, autonomy. This is the basis of <b>job enrichment</b>.' }
    },
    {
      id: 'callout-herzberg-eg',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Herzberg in Practice',
        text: 'A contact centre pays its agents £12/hour (market rate) and provides a clean, air-conditioned office with regular breaks — these are hygiene factors. Staff are not dissatisfied, but they are not motivated either. The manager introduces: (1) a "customer hero award" (recognition), (2) agents mentoring new starters (responsibility), (3) a skills pathway to team leader (advancement). These are motivators. Absenteeism falls 20% over 6 months.'
      }
    },
    {
      id: 'h-mcgregor',
      type: 'heading',
      data: { text: 'Douglas McGregor — Theory X and Theory Y (1960)', level: 2 }
    },
    {
      id: 'p-mcgregor',
      type: 'paragraph',
      data: { text: 'McGregor argued that managers hold one of two opposing sets of assumptions about workers, and these assumptions shape their management style and the organisational structures they create.' }
    },
    {
      id: 'tbl-mcgregor',
      type: 'comparisonTable',
      data: {
        caption: 'McGregor\'s Theory X vs Theory Y',
        headers: ['Assumption', 'Theory X', 'Theory Y'],
        rows: [
          ['Workers\' attitude to work', 'Dislike work; will avoid it if possible', 'View work as natural — a source of satisfaction'],
          ['Motivation driver', 'Primarily money; fear of punishment', 'Achievement, responsibility, recognition'],
          ['Ambition', 'Prefer to be directed; avoid responsibility', 'Seek and accept responsibility; can be creative'],
          ['Management style needed', 'Autocratic; close supervision; tight control', 'Democratic/delegative; trust; empowerment'],
          ['HR approach', 'Hard HRM — monitor, control, directive', 'Soft HRM — develop, empower, motivate'],
          ['Links to other theories', 'Taylor (financial motivation)', 'Maslow (higher needs), Herzberg (motivators)'],
        ]
      }
    },
    {
      id: 'callout-mcgregor-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Self-Fulfilling Prophecy',
        text: 'McGregor argued that Theory X management creates Theory X workers — if you treat people as lazy and untrustworthy, they behave that way. Theory Y management, by giving autonomy and trust, encourages workers to live up to those expectations. This is the <b>self-fulfilling prophecy</b> — the manager\'s belief shapes the reality.'
      }
    },
    {
      id: 'h-big-comparison',
      type: 'heading',
      data: { text: 'Comparing All Four Theories', level: 2 }
    },
    {
      id: 'tbl-big',
      type: 'comparisonTable',
      data: {
        caption: 'Four Motivation Theories — Summary Comparison',
        headers: ['Theory', 'Key Message', 'Primary Motivator', 'Practical Tools Implied', 'Main Criticism'],
        rows: [
          ['Taylor (1911)', 'Workers want money; find the best method and pay for output', 'Money / financial incentive', 'Piece-rate pay; time-and-motion studies; specialisation', 'Dehumanising; ignores social/psychological needs; quality risk'],
          ['Maslow (1943)', 'Workers have a hierarchy of needs; unmet needs motivate', 'Highest unmet need in the hierarchy', 'Reward packages addressing multiple needs; career progression (esteem/self-actualisation)', 'Hierarchy not always followed in practice; hard to identify which level an employee is at'],
          ['Herzberg (1959)', 'Hygiene factors prevent dissatisfaction; only motivators motivate', 'Intrinsic motivators (achievement, responsibility, growth)', 'Job enrichment; delegation; recognition awards; advancement paths', 'Based on a small, non-representative sample; satisfaction ≠ productivity'],
          ['McGregor (1960)', 'Manager assumptions about workers shape management style', 'Depends on Theory X/Y assumption: fear of punishment (X) or intrinsic satisfaction (Y)', 'Theory Y → democratic leadership; delegation; autonomy; empowerment', 'A simplistic binary; most workers combine X and Y traits depending on context'],
        ]
      }
    },
    {
      id: 'callout-eval',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Evaluation',
        text: 'No single theory is complete. In evaluation: (1) Taylor is most relevant for repetitive low-skill work; least relevant where creativity or quality matters. (2) Maslow is useful for designing reward packages but is difficult to operationalise (how do you know what level an employee is at?). (3) Herzberg\'s greatest insight is that pay alone does not motivate — a vital point for businesses over-relying on financial rewards. (4) McGregor\'s contribution is linking management style to assumptions — but reality is more nuanced than a binary X/Y.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '<b>Taylor:</b> Money motivates; use piece-rate and scientific methods. <b>Maslow:</b> 5-level hierarchy of needs — lower needs must be met before higher ones motivate. <b>Herzberg:</b> hygiene factors (pay, conditions) prevent dissatisfaction only; motivators (responsibility, achievement) are needed for true motivation → job enrichment. <b>McGregor:</b> Theory X (workers are lazy; control them) vs Theory Y (workers are self-motivated; empower them) → links to leadership style and HRM approach.' }
    },
    {
      "id": "enr-t4b-p-herzberg-two-factor",
      "type": "paragraph",
      "data": {
        "text": "Herzberg's Two-Factor Theory (1959) is most useful when evaluating pay decisions. <b>Hygiene factors</b> — pay, job security, working conditions, company policy, and supervision — can only <i>prevent</i> dissatisfaction. If absent, workers are dissatisfied; if present, workers are merely not dissatisfied (neutral). <b>Motivators</b> — achievement, recognition, the work itself, responsibility, and advancement — are the only factors that create genuine, lasting job satisfaction and motivation. The practical implication is clear: businesses that increase pay without improving job design will reduce dissatisfaction but will not motivate workers."
      }
    },
    {
      "id": "enr-t4b-list-taylor-steps",
      "type": "list",
      "data": {
        "style": "numbered",
        "items": [
          { "text": "<b>Study and analyse</b> — observe workers; use time-and-motion studies to break the job into its smallest steps" },
          { "text": "<b>Standardise</b> — design the 'one best way' procedure that every worker follows identically" },
          { "text": "<b>Select and train</b> — match workers to tasks based on ability; train them to the standard method only" },
          { "text": "<b>Incentivise</b> — apply piece-rate pay so wages vary directly with output" }
        ]
      }
    },
    {
      "id": "enr-t4b-callout-amazon-google",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Real World: Amazon (Theory X) vs Google (Theory Y)",
        "text": "<b>Amazon warehouse managers</b> apply Theory X: workers are monitored by wristbands tracking every movement, given strict picking-rate targets, and receive automated warnings if productivity falls below thresholds. Pay is performance-linked via bonuses. Throughput is high but staff turnover exceeds 150% annually in some facilities.<br><br><b>Google</b> operates on Theory Y: engineers manage their own time, are trusted with '20% time' for self-directed projects, and are evaluated on outcomes not hours worked. This autonomy generated Gmail, Google Maps, and Google News — demonstrating that Theory Y environments can produce breakthrough innovation worth billions."
      }
    },
    {
      "id": "enr-t4b-callout-student-8",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Student Perspective: Extrinsic vs Intrinsic Revision",
        "text": "Think about your own revision. If you revise mainly because exams are coming and your parents are pressuring you, that's <b>extrinsic motivation</b> — matching Taylor's view that external rewards/threats drive behaviour. If you revise because you find the subject genuinely interesting and want to understand it, that's <b>intrinsic motivation</b> — matching Herzberg's motivators (the work itself). Herzberg would argue that intrinsic motivation produces deeper, longer-lasting learning than cramming for grades alone."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner's Tip",
        text: "The Edexcel spec requires all four theories. Examiners test application: Taylor (money) \u2192 factory line, Maslow (hierarchy) \u2192 creative agency needs autonomy, Herzberg (hygiene vs motivation) \u2192 identify what actually drives your sector, McGregor (X vs Y) \u2192 management style choice. Answer: 'which theory applies here?' not 'which is best?'"
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Don't mix Taylor with Maslow \u2014 they're fundamentally incompatible. Taylor assumes money alone motivates; Maslow says money only matters until basic needs are met, then esteem and self-actualisation drive. Similarly, don't assume all workers are Theory Y (self-motivated); some genuinely prefer Theory X (clear direction). Show contextual application."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Taylor: money motivates; piece-rate; Scientific Management. Maslow: 5-level hierarchy (physiological→safety→social→esteem→self-actualisation). Herzberg: hygiene factors (remove dissatisfaction) ≠ motivators (create motivation) → job enrichment. McGregor: Theory X (lazy; control) vs Theory Y (self-motivated; empower). Y links to Soft HRM, X to Hard HRM.',
    cues: [
      { id: 'cue-1', blockId: 'list-taylor', prompt: 'What did Taylor argue motivates workers, and what are TWO criticisms of Scientific Management?', answer: 'Taylor argued money is the primary motivator. He used piece-rate pay and time-and-motion studies. Criticisms: (1) dehumanising — treats workers as machines, causing alienation/high turnover; (2) piece-rate sacrifices quality for quantity; (3) ignores social and psychological needs.' },
      { id: 'cue-2', blockId: 'list-maslow', prompt: 'Name Maslow\'s five levels of need in order (lowest to highest) and give a workplace example at each level.', answer: '1. Physiological — adequate pay for food/shelter. 2. Safety — job security, pension, H&S. 3. Social — team working, social events. 4. Esteem — recognition, job title, responsibility. 5. Self-actualisation — challenging/creative work, autonomy.' },
      { id: 'cue-3', blockId: 'tbl-herzberg', prompt: 'Distinguish between Herzberg\'s hygiene factors and motivators. Give TWO examples of each.', answer: 'Hygiene factors (e.g. pay, job security, working conditions): if absent → dissatisfaction; if present → no dissatisfaction but NO motivation. Motivators (e.g. achievement, recognition, responsibility, advancement): if present → genuine motivation and satisfaction.' },
      { id: 'cue-4', blockId: 'tbl-mcgregor', prompt: 'What are the assumptions of McGregor\'s Theory X and Theory Y, and what management style does each produce?', answer: 'Theory X: workers dislike work, need close supervision and financial incentives. → Autocratic, directive management (Hard HRM). Theory Y: workers are self-motivated, creative, and seek responsibility. → Democratic/empowering management (Soft HRM).' },
      { id: 'cue-5', blockId: 'callout-mcgregor-key', prompt: 'What is the self-fulfilling prophecy in McGregor\'s theory?', answer: 'If a manager assumes Theory X (workers are lazy), they closely control and distrust workers — the workers respond by becoming disengaged and dependent (confirming the assumption). Theory Y management — trusting, empowering, autonomous — generates motivated, responsible behaviour. The belief creates the reality.' },
      { id: 'cue-6', blockId: 'tbl-big', prompt: 'Which motivation theory is most useful for a business deciding whether to raise wages, and what does it say?', answer: 'Herzberg is most relevant here. Raising pay is a hygiene factor — it removes dissatisfaction if pay was too low, but it does NOT create motivation. Spending money on pay increases without improving the work itself will not lead to more motivated workers. Businesses must also invest in motivators (enrichment, recognition, responsibility).' }
    ]
  },
  evidence: [],
  mentions: []
};
