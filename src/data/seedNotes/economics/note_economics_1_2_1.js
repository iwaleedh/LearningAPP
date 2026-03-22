export const note_economics_1_2_1 = {
  pdfPath: '',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify key behavioural biases that cause consumers to deviate from rational choice, understand bounded rationality, and evaluate the policy implications of behavioural economics including nudge theory.' },
      terms: []
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Behavioural Economics: Beyond Rationality', level: 2 },
      terms: []
    },
    { id: 'para-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Behavioural economics</strong> studies how psychological, social, and cognitive factors cause real decision-making to deviate systematically from the predictions of rational choice theory. Research by Daniel Kahneman, Amos Tversky, and Richard Thaler has shown that consumers are often <strong>predictably irrational</strong> — they make systematic errors, not random ones.' }] } },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Behavioural Biases', level: 2 },
      terms: []
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Key Behavioural Biases in Consumer Decision-Making',
        headers: ['Bias', 'Definition', 'Real-World Example'],
        rows: [
          ['<strong>Bounded Rationality</strong>', 'Consumers have limited time, information, and cognitive capacity — they use mental shortcuts (heuristics) rather than computing the optimal outcome', 'Choosing the first product on a supermarket shelf rather than comparing all options; accepting default pension scheme without evaluating alternatives'],
          ['<strong>Anchoring</strong>', 'People rely too heavily on the first piece of information encountered (the "anchor") when making decisions', 'A jacket reduced from £200 to £100 seems cheap — the original price anchors perception of value, even if £100 is still above the true value'],
          ['<strong>Loss Aversion</strong>', 'People feel the pain of a loss more strongly than the pleasure of an equivalent gain (Kahneman and Tversky: losses feel about twice as significant as gains)', 'Consumers hold on to falling stocks too long (to avoid realising a loss); firms struggle to cut wages even when necessary'],
          ['<strong>Status Quo Bias</strong>', 'People disproportionately favour the current state of affairs and resist change, even when change would benefit them', 'Most workers stay in the default pension contribution rate even if a higher rate would maximise their retirement income'],
          ['<strong>Herd Behaviour</strong>', 'Individuals follow the behaviour of a larger group rather than making independent assessments', 'Bank runs (everyone withdraws because others are withdrawing); asset price bubbles (buying shares because "everyone else is")'],
          ['<strong>Present Bias</strong>', 'Individuals over-value immediate rewards relative to future rewards, leading to under-saving and over-consumption', 'Choosing to eat junk food now rather than sticking to a diet for long-term health; payday loan usage despite high interest rates']
        ]
      },
      terms: []
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Nudge Theory and Policy Implications', level: 2 },
      terms: []
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nudge Theory (Thaler and Sunstein)',
        text: '<strong>Nudge theory</strong> argues that the way choices are presented (the "choice architecture") significantly influences decisions without restricting freedom of choice. By redesigning the choice environment to exploit known biases, governments can <strong>steer behaviour towards better outcomes</strong> — without bans or taxes.'
      },
      terms: []
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Automatic enrolment in pensions (UK):</strong> Workers are enrolled by default — exploiting status quo bias. Participation rose from 61% to over 90% after 2012 reforms.' },
          { text: '<strong>Opt-out organ donation (Wales):</strong> Changing the default from opt-in to opt-out dramatically increased donor rates — exploiting status quo bias.' },
          { text: '<strong>Placing healthy food at eye level:</strong> Supermarkets and school canteens use this to encourage healthier choices without banning unhealthy options.' },
          { text: '<strong>Showing social norms:</strong> Energy bills showing that neighbours use less energy than you reduces consumption by 2–3% (exploiting social influence/herd behaviour).' }
        ]
      },
      terms: []
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Evaluation: Limits of Nudges',
        text: '<strong>Nudges are not always effective:</strong><br/>— Effects can be small or temporary — people may revert to old habits once aware of the nudge.<br/>— Nudges can be used manipulatively by firms (e.g. dark patterns in online subscriptions that exploit anchoring and status quo bias to extract money).<br/>— They do not address the root causes of market failure — structural interventions (taxes, regulation) may still be needed for serious problems like climate change.'
      },
      terms: []
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Behavioural economics questions often ask you to <strong>apply a specific bias to a given scenario</strong>. Practise identifying which bias best explains the described behaviour, then link it to a policy implication (e.g. status quo bias → default enrolment nudge). Always evaluate — nudges work but have limits.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Behavioural economics questions often ask you to apply a specific bias to a given scenario. Practise identifying which bias best explains the described behaviour, then link it to a policy implication (e.g. status quo bias \u2192 default enrolment nudge). Always evaluate \u2014 nudges work but have limits."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Behavioural economics often appears in 10 or 14-mark evaluate questions. Be ready to explain specific concepts like computation weakness, herd behaviour, or habitual behaviour using an example from the case study extract."
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Behavioural economics identifies systematic biases — bounded rationality, anchoring, loss aversion, status quo bias, herd behaviour, and present bias — that cause consumers to deviate from rational choice. Nudge theory uses these insights to design better policy.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Define loss aversion and give a real-world example.', answer: 'The pain of a loss feels about twice as strong as the pleasure of an equivalent gain. Example: investors hold falling stocks too long to avoid "locking in" a loss.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What is anchoring bias? Give an example from retail.', answer: 'Relying too heavily on the first piece of information encountered. Example: a jacket "reduced" from £200 to £100 seems cheap because the £200 price anchors perceived value.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'How does automatic pension enrolment use behavioural economics?', answer: 'It exploits status quo bias — workers are enrolled by default and tend not to opt out even if they might have chosen differently when actively deciding.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'Give two limitations of nudge theory as a policy tool.', answer: 'Effects may be small/temporary; nudges can be misused by firms (dark patterns); they do not address root structural causes of market failure so stronger intervention may still be needed.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_economics_1_2_1;
