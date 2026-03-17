export const note_olevel_maths_core_3_3_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use function notation f(x), evaluate functions for given inputs, find x when f(x) equals a given value, and apply composite functions fg(x).'
      }
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Function Notation', level: 2 }
    },
    {
      id: 'p-notation',
      type: 'paragraph',
      data: {
        text: 'A <strong>function</strong> is a rule that takes an input and produces exactly one output. We write functions using the notation <strong>f(x)</strong>, where f is the <em>name</em> of the function and x is the <em>input</em>.'
      }
    },
    {
      id: 'callout-key-fn',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Function Notation — f(x)',
        text: 'f(x) = 2x + 3 means: "the function f, which, when given input x, outputs 2x + 3".<br><br>• <strong>f(4)</strong> means "the output when x = 4"<br>• Read "f(x)" as "f of x"<br>• Other letters like g, h are also used for function names'
      }
    },
    {
      id: 'h-evaluate',
      type: 'heading',
      data: { text: 'Evaluating Functions', level: 2 }
    },
    {
      id: 'p-evaluate',
      type: 'paragraph',
      data: {
        text: 'To evaluate a function, <strong>substitute</strong> the given value everywhere x appears in the expression. Replace every x with the input number (in brackets if negative) and calculate.'
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Evaluating f(x)',
        text: 'Given f(x) = 3x² − 2x + 1, find f(2) and f(−1).<br><br><strong>f(2):</strong> replace x with 2:<br>f(2) = 3(2)² − 2(2) + 1 = 3(4) − 4 + 1 = 12 − 4 + 1 = <strong>9</strong><br><br><strong>f(−1):</strong> replace x with −1:<br>f(−1) = 3(−1)² − 2(−1) + 1 = 3(1) + 2 + 1 = <strong>6</strong>'
      }
    },
    {
      id: 'h-solve',
      type: 'heading',
      data: { text: 'Finding x when f(x) = k', level: 2 }
    },
    {
      id: 'p-solve',
      type: 'paragraph',
      data: {
        text: 'Sometimes you are told the <em>output</em> and need to find the <em>input</em>. Set up an equation by writing the function equal to the given value, then solve for x.'
      }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Solving f(x) = k',
        text: 'Given g(x) = 4x − 7, find x when g(x) = 13.<br><br>Set the function equal to 13:<br>4x − 7 = 13<br>4x = 20<br>x = <strong>5</strong><br><br>Check: g(5) = 4(5) − 7 = 20 − 7 = 13 ✓'
      }
    },
    {
      id: 'h-composite',
      type: 'heading',
      data: { text: 'Composite Functions', level: 2 }
    },
    {
      id: 'p-composite',
      type: 'paragraph',
      data: {
        text: 'A <strong>composite function</strong> applies two functions one after the other. The notation <strong>fg(x)</strong> means: <em>first apply g, then apply f to the result</em>.'
      }
    },
    {
      id: 'callout-key-comp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Composite Function fg(x)',
        text: 'fg(x) = f(g(x))<br><br><strong>Steps:</strong><br>1. Calculate g(x) first (the inner function)<br>2. Use that result as the input to f<br><br><em>Important:</em> fg(x) ≠ gf(x) in general — the order matters!'
      }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Composite Functions',
        text: 'Let f(x) = 2x + 1 and g(x) = x² − 3. Find fg(4).<br><br><strong>Step 1: Evaluate g(4) first</strong><br>g(4) = (4)² − 3 = 16 − 3 = 13<br><br><strong>Step 2: Use the result as input to f</strong><br>f(13) = 2(13) + 1 = 26 + 1 = <strong>27</strong><br><br>∴ fg(4) = 27'
      }
    },
    {
      id: 'callout-worked4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Finding fg(x) as a Formula',
        text: 'Let f(x) = 2x + 1 and g(x) = x² − 3. Find fg(x).<br><br>fg(x) = f(g(x)) = f(x² − 3)<br>= 2(x² − 3) + 1<br>= 2x² − 6 + 1<br>= <strong>2x² − 5</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• <strong>Order in composite functions</strong>: fg(x) does NOT mean f(x) × g(x). It means f applied to g(x).<br>• <strong>Negative inputs</strong>: always use brackets: f(−2) not f-2. Write 3(−2)² not 3−2².<br>• <strong>fg vs gf</strong>: fg(4) and gf(4) give different answers — always check which is asked.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'f(x) notation means "input x, output f(x)". Evaluate by substituting the number for x. Solve f(x) = k by setting the expression equal to k and solving. Composite fg(x) = f(g(x)): apply g first, then apply f to the result.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'f(x): substitute x to evaluate. Solve f(x)=k by algebra. Composite fg(x): apply g first, then f.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-key-fn',
        prompt: 'What does f(x) = 2x + 3 mean in words?',
        answer: 'It describes a function called f that takes an input x and outputs 2x + 3 (doubles the input and adds 3).'
      },
      {
        id: 'cue-2',
        blockId: 'callout-worked1',
        prompt: 'Given f(x) = 3x² − 2x + 1, find f(2).',
        answer: 'f(2) = 3(4) − 4 + 1 = 12 − 4 + 1 = 9.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-worked2',
        prompt: 'Given g(x) = 4x − 7, find x when g(x) = 13.',
        answer: '4x − 7 = 13 → 4x = 20 → x = 5.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-key-comp',
        prompt: 'In the composite function fg(x), which function is applied first?',
        answer: 'g is applied first, then f is applied to the result: fg(x) = f(g(x)).'
      },
      {
        id: 'cue-5',
        blockId: 'callout-worked3',
        prompt: 'Let f(x) = 2x + 1 and g(x) = x² − 3. Find fg(4).',
        answer: 'g(4) = 13, then f(13) = 27. So fg(4) = 27.'
      }
    ]
  },
  evidence: []
};
