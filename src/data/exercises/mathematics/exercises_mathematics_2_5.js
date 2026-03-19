/**
 * Exercises: Mathematics · WMA12 · Topic 5: Exponentials & Logarithms
 * Subtopics:
 *   0: Exponential functions
 *   1: Logarithmic functions
 *   2: Laws of logarithms
 *   3: Exponential equations
 *   4: Exponential growth and decay
 *   5: Modelling (logarithmic models)
 *   6: Further logarithmic equations
 */

export const exercises_mathematics_2_5 = {
  subject: 'mathematics',
  unitId: 2,
  topicId: 5,
  topicName: 'Exponentials & Logarithms',

  mcq: [
    {
      id: 'mcq-2t5-1',
      question: 'What is the approximate value of e to 3 significant figures?',
      options: ['2.71', '2.72', '3.14', '2.18'],
      correctAnswer: 0,
      rationale: 'e = 2.71828182845... ≈ 2.71 (3 s.f.)',
      topic: 'Exponential functions'
    },
    {
      id: 'mcq-2t5-2',
      question: 'What is the range of the function y = eˣ?',
      options: ['All real numbers', 'y > 0', 'y ≥ 0', 'x > 0'],
      correctAnswer: 1,
      rationale: 'The range of y = eˣ is all positive real numbers (y > 0). The graph never touches or goes below the x-axis.',
      topic: 'Exponential functions'
    },
    {
      id: 'mcq-2t5-3',
      question: 'What is the derivative of y = eˣ?',
      options: ['x·e^{x-1}', 'eˣ', '1/x', 'ln(x)'],
      correctAnswer: 1,
      rationale: 'The derivative of eˣ is eˣ — the function is its own derivative. This is the unique property that makes e special.',
      topic: 'Exponential functions'
    },
    {
      id: 'mcq-2t5-4',
      question: 'The graph of y = eˣ has a horizontal asymptote at:',
      options: ['x = 0', 'y = 0', 'y = 1', 'No asymptote'],
      correctAnswer: 1,
      rationale: 'y = eˣ approaches y = 0 as x → -∞, so y = 0 is the horizontal asymptote (the x-axis).',
      topic: 'Exponential functions'
    },
    {
      id: 'mcq-2t5-5',
      question: 'What is the domain of the function y = ln(x)?',
      options: ['All real numbers', 'x ≥ 0', 'x > 0', 'y > 0'],
      correctAnswer: 2,
      rationale: 'The domain of ln(x) is x > 0 (strictly positive). Logarithms are only defined for positive arguments.',
      topic: 'Logarithmic functions'
    },
    {
      id: 'mcq-2t5-6',
      question: 'Which point lies on the graph of y = ln(x)?',
      options: ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'],
      correctAnswer: 2,
      rationale: 'ln(1) = 0 since e⁰ = 1, so the point (1, 0) lies on the graph.',
      topic: 'Logarithmic functions'
    },
    {
      id: 'mcq-2t5-7',
      question: 'What is ln(e³)?',
      options: ['3', 'e³', '0', '1'],
      correctAnswer: 0,
      rationale: 'ln(e³) = 3 because ln and e are inverse functions. ln(eˣ) = x for any real x.',
      topic: 'Logarithmic functions'
    },
    {
      id: 'mcq-2t5-8',
      question: 'The graph of y = ln(x) has a vertical asymptote at:',
      options: ['x = 0', 'y = 0', 'x = 1', 'y = -∞'],
      correctAnswer: 0,
      rationale: 'y = ln(x) has a vertical asymptote at x = 0 (the y-axis). As x → 0⁺, y → -∞.',
      topic: 'Logarithmic functions'
    },
    {
      id: 'mcq-2t5-9',
      question: 'Which of these simplifies ln(9) + ln(4)?',
      options: ['ln(36)', 'ln(13)', 'ln(5)', 'ln(9/4)'],
      correctAnswer: 0,
      rationale: 'Using the multiplication rule: ln(M) + ln(N) = ln(MN). So ln(9) + ln(4) = ln(9×4) = ln(36).',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-10',
      question: 'What is ln(16) − ln(4)?',
      options: ['ln(12)', 'ln(20)', 'ln(4)', 'ln(64)'],
      correctAnswer: 2,
      rationale: 'Using the division rule: ln(M) − ln(N) = ln(M/N). So ln(16) − ln(4) = ln(16/4) = ln(4).',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-11',
      question: 'What is 3·ln(5) equal to?',
      options: ['ln(8)', 'ln(15)', 'ln(125)', 'ln(5³)'],
      correctAnswer: 3,
      rationale: 'Using the power rule: k·ln(M) = ln(Mᵏ). So 3·ln(5) = ln(5³) = ln(125).',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-12',
      question: 'Which of the following is NOT a valid logarithm law?',
      options: ['ln(A) + ln(B) = ln(AB)', 'ln(A) − ln(B) = ln(A/B)', 'ln(A) + ln(B) = ln(A+B)', 'ln(A²) = 2·ln(A)'],
      correctAnswer: 2,
      rationale: 'ln(A) + ln(B) = ln(A+B) is FALSE. The sum of logs equals the log of a PRODUCT, not a SUM. There is no simple rule for ln(A+B).',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-13',
      question: 'What is the value of ln(1)?',
      options: ['1', '0', 'e', 'undefined'],
      correctAnswer: 1,
      rationale: 'ln(1) = 0 because e⁰ = 1. This is true for any logarithm: log_a(1) = 0.',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-14',
      question: 'What is ln(e)?',
      options: ['0', '1', 'e', 'undefined'],
      correctAnswer: 1,
      rationale: 'ln(e) = 1 because e¹ = e. This is true for any logarithm: log_a(a) = 1.',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-15',
      question: 'Using the change of base formula, what is log₅(25)?',
      options: ['2', '1', '5', '25'],
      correctAnswer: 0,
      rationale: 'log₅(25) = 2 because 5² = 25. You could also use ln(25)/ln(5) = 2.',
      topic: 'Laws of logarithms'
    },
    {
      id: 'mcq-2t5-16',
      question: 'To solve 2ˣ = 10, you would:',
      options: ['Take ln of both sides', 'Take e of both sides', 'Divide both sides by 2', 'Multiply both sides by x'],
      correctAnswer: 0,
      rationale: 'When the unknown is in the exponent, take ln of both sides: ln(2ˣ) = ln(10), then x·ln(2) = ln(10), so x = ln(10)/ln(2).',
      topic: 'Exponential equations'
    },
    {
      id: 'mcq-2t5-17',
      question: 'What is the solution to 3ˣ = 27?',
      options: ['3', '9', 'ln(27)/ln(3)', 'Both a and c'],
      correctAnswer: 3,
      rationale: '3³ = 27, so x = 3. Using logs: x = ln(27)/ln(3) = 3. Both methods give the same answer.',
      topic: 'Exponential equations'
    },
    {
      id: 'mcq-2t5-18',
      question: 'To solve eˣ = 5, you would:',
      options: ['Take ln of both sides', 'Take e of both sides', 'Square both sides', 'Take ln of both sides and divide'],
      correctAnswer: 0,
      rationale: 'eˣ = 5 → take ln of both sides: x = ln(5). This is because ln is the inverse of eˣ.',
      topic: 'Exponential equations'
    },
    {
      id: 'mcq-2t5-19',
      question: 'To solve ln(x) = 2, you would:',
      options: ['Take ln of both sides', 'Take e of both sides', 'Square both sides', 'Add 1 to both sides'],
      correctAnswer: 1,
      rationale: 'ln(x) = 2 → apply e to both sides: x = e². This is because e is the inverse of ln.',
      topic: 'Exponential equations'
    },
    {
      id: 'mcq-2t5-20',
      question: 'The equation e^{2x} − 4eˣ + 3 = 0 can be solved by substituting:',
      options: ['u = x²', 'u = 2x', 'u = eˣ', 'u = 2eˣ'],
      correctAnswer: 2,
      rationale: 'Substitute u = eˣ, giving u² − 4u + 3 = 0, which is a quadratic equation.',
      topic: 'Exponential equations'
    },
    {
      id: 'mcq-2t5-21',
      question: 'In the growth/decay model y = Ae^{kt}, what does A represent?',
      options: ['The rate constant', 'The initial value when t = 0', 'The final value', 'The time at which growth stops'],
      correctAnswer: 1,
      rationale: 'A is the initial value — the value of y when t = 0 (since e⁰ = 1).',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'mcq-2t5-22',
      question: 'In the model y = 50e^{0.03t}, is this exponential growth or decay?',
      options: ['Growth', 'Decay', 'Neither', 'Both'],
      correctAnswer: 0,
      rationale: 'Since k = 0.03 > 0, this is exponential growth. The quantity increases over time.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'mcq-2t5-23',
      question: 'In the model y = 200e^{-0.05t}, what happens as t increases?',
      options: ['y increases', 'y decreases', 'y stays constant', 'y oscillates'],
      correctAnswer: 1,
      rationale: 'Since k = -0.05 < 0, this is exponential decay. The quantity decreases over time.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'mcq-2t5-24',
      question: 'To find when a population P = 100e^{0.02t} reaches 200, you solve:',
      options: ['100e^{0.02t} = 200', '200e^{0.02t} = 100', '0.02t = ln(100)', 't = 0.02×ln(200)'],
      correctAnswer: 0,
      rationale: 'Set the model equal to the target: 100e^{0.02t} = 200, then solve for t.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'mcq-2t5-25',
      question: 'If y = Ae^{kt} and you plot ln(y) against t, the gradient equals:',
      options: ['A', 'k', 'ln(A)', 'eᵏ'],
      correctAnswer: 1,
      rationale: 'ln(y) = ln(A) + kt, which is of the form y = mx + c with gradient m = k.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'mcq-2t5-26',
      question: 'To linearise the model y = axⁿ, you would plot:',
      options: ['y against x', 'ln(y) against x', 'log y against log x', 'y against log x'],
      correctAnswer: 2,
      rationale: 'Taking log of both sides: log y = log a + n log x. Plotting log y against log x gives a straight line with gradient n.',
      topic: 'Modelling'
    },
    {
      id: 'mcq-2t5-27',
      question: 'To linearise the model y = abˣ, you would plot:',
      options: ['y against x', 'log y against x', 'ln(y) against ln(x)', 'y against log x'],
      correctAnswer: 1,
      rationale: 'Taking log of both sides: log y = log a + x log b. Plotting log y against x gives a straight line with gradient log b.',
      topic: 'Modelling'
    },
    {
      id: 'mcq-2t5-28',
      question: 'When plotting log y against log x for y = axⁿ, what does the gradient represent?',
      options: ['a', 'log a', 'n', 'log n'],
      correctAnswer: 2,
      rationale: 'log y = n log x + log a, so the gradient is n (the power).',
      topic: 'Modelling'
    },
    {
      id: 'mcq-2t5-29',
      question: 'What is log₂(8)?',
      options: ['3', '4', '8', '1/3'],
      correctAnswer: 0,
      rationale: 'log₂(8) = 3 because 2³ = 8. You could also use change of base: ln(8)/ln(2) = 3.',
      topic: 'Further logarithmic equations'
    },
    {
      id: 'mcq-2t5-30',
      question: 'The equation [ln(x)]² − 2ln(x) + 1 = 0 can be solved by substituting:',
      options: ['u = x²', 'u = ln(x)', 'u = x', 'u = eˣ'],
      correctAnswer: 1,
      rationale: 'Substitute u = ln(x) to get u² − 2u + 1 = 0, a quadratic in u.',
      topic: 'Further logarithmic equations'
    }
  ],

  fillBlank: [
    {
      id: 'fb-2t5-1',
      template: 'The natural number e has an approximate value of __BLANK__ to 3 significant figures.',
      blanks: ['2.71'],
      topic: 'Exponential functions'
    },
    {
      id: 'fb-2t5-2',
      template: 'The graph of y = eˣ passes through the point __BLANK__.',
      blanks: ['(0, 1)'],
      topic: 'Exponential functions'
    },
    {
      id: 'fb-2t5-3',
      template: 'The derivative of y = eˣ is __BLANK__.',
      blanks: ['e^x'],
      topic: 'Exponential functions'
    },
    {
      id: 'fb-2t5-4',
      template: 'The function y = ln(x) has a domain of __BLANK__.',
      blanks: ['x > 0'],
      topic: 'Logarithmic functions'
    },
    {
      id: 'fb-2t5-5',
      template: 'The graph of y = ln(x) passes through the point __BLANK__.',
      blanks: ['(1, 0)'],
      topic: 'Logarithmic functions'
    },
    {
      id: 'fb-2t5-6',
      template: 'ln(e⁵) = __BLANK__.',
      blanks: ['5'],
      topic: 'Logarithmic functions'
    },
    {
      id: 'fb-2t5-7',
      template: 'e^{ln 7} = __BLANK__.',
      blanks: ['7'],
      topic: 'Logarithmic functions'
    },
    {
      id: 'fb-2t5-8',
      template: 'ln(2) + ln(5) = ln(__BLANK__).',
      blanks: ['10'],
      topic: 'Laws of logarithms'
    },
    {
      id: 'fb-2t5-9',
      template: 'ln(100) - ln(10) = ln(__BLANK__).',
      blanks: ['10'],
      topic: 'Laws of logarithms'
    },
    {
      id: 'fb-2t5-10',
      template: '3 · ln(4) = ln(__BLANK__).',
      blanks: ['64'],
      topic: 'Laws of logarithms'
    },
    {
      id: 'fb-2t5-11',
      template: 'ln(1) = __BLANK__.',
      blanks: ['0'],
      topic: 'Laws of logarithms'
    },
    {
      id: 'fb-2t5-12',
      template: 'To solve 2ˣ = 16, you would take __BLANK__ of both sides.',
      blanks: ['ln'],
      topic: 'Exponential equations'
    },
    {
      id: 'fb-2t5-13',
      template: 'In the model y = 50e^{0.1t}, the value of A is __BLANK__.',
      blanks: ['50'],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'fb-2t5-14',
      template: 'If y = 100e^{-0.02t}, this represents exponential __BLANK__.',
      blanks: ['decay'],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'fb-2t5-15',
      template: 'To linearise y = axⁿ, plot __BLANK__ against log x.',
      blanks: ['log y'],
      topic: 'Modelling'
    }
  ],

  dragDrop: [
    {
      id: 'dd-2t5-1',
      categories: ['Growth (k > 0)', 'Decay (k < 0)'],
      items: [
        { text: 'y = 100e^{0.05t}', category: 'Growth (k > 0)' },
        { text: 'y = 50e^{-0.03t}', category: 'Decay (k < 0)' },
        { text: 'y = 200e^{0.1t}', category: 'Growth (k > 0)' },
        { text: 'y = 75e^{-0.08t}', category: 'Decay (k < 0)' },
        { text: 'y = 25e^{2t}', category: 'Growth (k > 0)' }
      ],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'dd-2t5-2',
      categories: ['True', 'False'],
      items: [
        { text: 'ln(A + B) = ln(A) + ln(B)', category: 'False' },
        { text: 'ln(AB) = ln(A) + ln(B)', category: 'True' },
        { text: 'ln(A/B) = ln(A) - ln(B)', category: 'True' },
        { text: 'ln(A) · ln(B) = ln(AB)', category: 'False' },
        { text: 'ln(eˣ) = x', category: 'True' }
      ],
      topic: 'Laws of logarithms'
    },
    {
      id: 'dd-2t5-3',
      categories: ['y = eˣ properties', 'y = ln(x) properties'],
      items: [
        { text: 'Domain: all real numbers', category: 'y = eˣ properties' },
        { text: 'Domain: x > 0', category: 'y = ln(x) properties' },
        { text: 'Range: y > 0', category: 'y = eˣ properties' },
        { text: 'Range: all real numbers', category: 'y = ln(x) properties' },
        { text: 'Passes through (0, 1)', category: 'y = eˣ properties' },
        { text: 'Passes through (1, 0)', category: 'y = ln(x) properties' }
      ],
      topic: 'Exponential and logarithmic functions'
    },
    {
      id: 'dd-2t5-4',
      categories: ['Plot for y = axⁿ', 'Plot for y = abˣ'],
      items: [
        { text: 'log y against log x', category: 'Plot for y = axⁿ' },
        { text: 'log y against x', category: 'Plot for y = abˣ' },
        { text: 'Gradient = n', category: 'Plot for y = axⁿ' },
        { text: 'Gradient = log b', category: 'Plot for y = abˣ' }
      ],
      topic: 'Modelling'
    },
    {
      id: 'dd-2t5-5',
      categories: ['Transformations of eˣ', 'Effect on graph'],
      items: [
        { text: 'y = eˣ + 2', category: 'Transformations of eˣ' },
        { text: 'Translate 2 units up', category: 'Effect on graph' },
        { text: 'y = eˣ⁻²', category: 'Transformations of eˣ' },
        { text: 'Translate 2 units right', category: 'Effect on graph' },
        { text: 'y = 3eˣ', category: 'Transformations of eˣ' },
        { text: 'Stretch by factor 3 in y-direction', category: 'Effect on graph' },
        { text: 'y = e⁻ˣ', category: 'Transformations of eˣ' },
        { text: 'Reflect in y-axis', category: 'Effect on graph' }
      ],
      topic: 'Exponential functions'
    },
    {
      id: 'dd-2t5-6',
      categories: ['Valid step', 'Invalid step'],
      items: [
        { text: 'From 2log(x) = log(x²)', category: 'Valid step' },
        { text: 'From ln(x+1) + ln(x-1) = ln(2x)', category: 'Invalid step' },
        { text: 'From log₁₀(100) = 2', category: 'Valid step' },
        { text: 'From ln(e+e) = ln(e²)', category: 'Invalid step' },
        { text: 'From 3ln(x) = ln(x³)', category: 'Valid step' }
      ],
      topic: 'Further logarithmic equations'
    },
    {
      id: 'dd-2t5-7',
      categories: ['Linearisation: y = axⁿ', 'Linearisation: y = abˣ'],
      items: [
        { text: 'Plot: log y vs log x', category: 'Linearisation: y = axⁿ' },
        { text: 'Plot: log y vs x', category: 'Linearisation: y = abˣ' },
        { text: 'Equation: log y = n log x + log a', category: 'Linearisation: y = axⁿ' },
        { text: 'Equation: log y = log a + x log b', category: 'Linearisation: y = abˣ' }
      ],
      topic: 'Modelling'
    },
    {
      id: 'dd-2t5-8',
      categories: ['Disguised quadratic form', 'Substitution'],
      items: [
        { text: 'e^{2x} - 5eˣ + 6 = 0', category: 'Disguised quadratic form' },
        { text: 'u = eˣ', category: 'Substitution' },
        { text: '[ln(x)]² - 3ln(x) + 2 = 0', category: 'Disguised quadratic form' },
        { text: 'u = ln(x)', category: 'Substitution' }
      ],
      topic: 'Exponential equations'
    },
    {
      id: 'dd-2t5-9',
      categories: ['Growth', 'Decay'],
      items: [
        { text: 'Population increase', category: 'Growth' },
        { text: 'Radioactive decay', category: 'Decay' },
        { text: 'Compound interest', category: 'Growth' },
        { text: 'Drug concentration in body', category: 'Decay' }
      ],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'dd-2t5-10',
      categories: ['Solve by taking ln', 'Solve by taking e'],
      items: [
        { text: 'eˣ = 7', category: 'Solve by taking ln' },
        { text: 'ln(x) = 5', category: 'Solve by taking e' },
        { text: 'e^{3x-1} = 10', category: 'Solve by taking ln' },
        { text: 'ln(2x+1) = 3', category: 'Solve by taking e' }
      ],
      topic: 'Exponential equations'
    }
  ],

  sequence: [
    {
      id: 'seq-2t5-1',
      steps: [
        'Start with equation: 3ˣ = 20',
        'Take ln of both sides: ln(3ˣ) = ln(20)',
        'Apply power rule: x · ln(3) = ln(20)',
        'Divide by ln(3): x = ln(20)/ln(3)',
        'Calculate: x ≈ 2.73 (3 s.f.)'
      ],
      topic: 'Exponential equations'
    },
    {
      id: 'seq-2t5-2',
      steps: [
        'Start with equation: 2ln(3) + ln(4) − ln(6)',
        'Apply power rule: 2ln(3) = ln(3²) = ln(9)',
        'Combine logs: ln(9) + ln(4) = ln(36)',
        'Apply division rule: ln(36) − ln(6) = ln(36/6)',
        'Simplify: ln(6)'
      ],
      topic: 'Laws of logarithms'
    },
    {
      id: 'seq-2t5-3',
      steps: [
        'Start with equation: ln(x+3) + ln(x−1) = 5',
        'Combine logs: ln[(x+3)(x−1)] = 5',
        'Apply inverse: (x+3)(x−1) = e⁵',
        'Expand: x² + 2x − 3 = e⁵',
        'Solve quadratic and check domain: x must be > 1'
      ],
      topic: 'Laws of logarithms'
    },
    {
      id: 'seq-2t5-4',
      steps: [
        'Start with equation: e^{2x} − 5eˣ + 6 = 0',
        'Substitute u = eˣ (remember u > 0)',
        'Form quadratic: u² − 5u + 6 = 0',
        'Factorise: (u−2)(u−3) = 0',
        'Back-substitute: eˣ = 2 or eˣ = 3',
        'Solve: x = ln(2) or x = ln(3)'
      ],
      topic: 'Exponential equations'
    },
    {
      id: 'seq-2t5-5',
      steps: [
        'Start with model: P = 5e^{0.02t}',
        'Find initial: t = 0 → P = 5e⁰ = 5',
        'Find P when t = 10: P = 5e^{0.2}',
        'Calculate: P ≈ 6.11 (3 s.f.)',
        'Set P = 8 and solve: 5e^{0.02t} = 8',
        'Take ln: 0.02t = ln(1.6)',
        'Solve: t = ln(1.6)/0.02 ≈ 23.5 years'
      ],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'seq-2t5-6',
      steps: [
        'Start with model: M = 100e^{kt}, M = 75 when t = 3',
        'Substitute: 75 = 100e^{3k}',
        'Divide: e^{3k} = 0.75',
        'Take ln: 3k = ln(0.75)',
        'Solve: k = ln(0.75)/3 ≈ -0.0959',
        'Find half-life: set M = 50',
        '50 = 100e^{kt}, solve: t ≈ 7.22 hours'
      ],
      topic: 'Exponential growth and decay'
    },
    {
      id: 'seq-2t5-7',
      steps: [
        'Start with: [ln(x)]² − 3ln(x) + 2 = 0',
        'Substitute u = ln(x)',
        'Form quadratic: u² − 3u + 2 = 0',
        'Factorise: (u−1)(u−2) = 0',
        'Solve: u = 1 or u = 2',
        'Back-substitute: ln(x) = 1 or ln(x) = 2',
        'Apply e: x = e¹ = e or x = e²'
      ],
      topic: 'Further logarithmic equations'
    },
    {
      id: 'seq-2t5-8',
      steps: [
        'Start with model y = axⁿ',
        'Take log of both sides: log y = log a + n log x',
        'Let Y = log y and X = log x',
        'Linear form: Y = nX + log a',
        'Plot log y against log x',
        'Read gradient = n (the power)',
        'Read y-intercept = log a, so a = 10^{intercept}'
      ],
      topic: 'Modelling'
    }
  ],

  keyword: [
    {
      id: 'kw-2t5-1',
      stem: 'State the approximate value of e and explain why it is special in calculus. (4 marks)',
      marks: 4,
      keywords: ['2.718', 'derivative', 'e^x', 'itself', 'd/dx(e^x) = e^x'],
      modelAnswer: 'e ≈ 2.718. It is the unique base where the derivative of eˣ equals the function itself: d/dx(eˣ) = eˣ.',
      topic: 'Exponential functions'
    },
    {
      id: 'kw-2t5-2',
      stem: 'Describe the key properties of the graph of y = eˣ. (4 marks)',
      marks: 4,
      keywords: ['domain', 'all real', 'range', 'positive', '(0,1)', 'asymptote', 'y=0', 'increasing'],
      modelAnswer: 'Domain: all real numbers. Range: y > 0 (always positive). Passes through (0,1). Horizontal asymptote y = 0 as x → -∞. Always increasing.',
      topic: 'Exponential functions'
    },
    {
      id: 'kw-2t5-3',
      stem: 'Explain the relationship between y = eˣ and y = ln(x). (3 marks)',
      marks: 3,
      keywords: ['inverse', 'functions', 'ln(e^x) = x', 'e^{ln x} = x', 'reflection', 'y=x'],
      modelAnswer: 'They are inverse functions. ln(eˣ) = x for all x, and e^{ln x} = x for x > 0. Their graphs are reflections in the line y = x.',
      topic: 'Logarithmic functions'
    },
    {
      id: 'kw-2t5-4',
      stem: 'State and explain the three main laws of logarithms. (6 marks)',
      marks: 6,
      keywords: ['product', 'ln(MN) = ln M + ln N', 'quotient', 'ln(M/N) = ln M - ln N', 'power', 'ln(M^k) = k ln M'],
      modelAnswer: 'Multiplication: ln(MN) = ln M + ln N — log of product equals sum of logs. Division: ln(M/N) = ln M − ln N — log of quotient equals difference of logs. Power: ln(Mᵏ) = k·ln M — power becomes a multiplier.',
      topic: 'Laws of logarithms'
    },
    {
      id: 'kw-2t5-5',
      stem: 'Solve the equation 4ˣ = 100, giving your answer to 3 significant figures. (3 marks)',
      marks: 3,
      keywords: ['ln', 'ln(4^x) = ln(100)', 'x ln 4 = ln 100', 'x = ln 100 / ln 4', '3.32'],
      modelAnswer: 'Take ln of both sides: ln(4ˣ) = ln(100). x·ln(4) = ln(100). x = ln(100)/ln(4) ≈ 3.32 (3 s.f.)',
      topic: 'Exponential equations'
    },
    {
      id: 'kw-2t5-6',
      stem: 'Solve e^{2x} − 7eˣ + 12 = 0. (4 marks)',
      marks: 4,
      keywords: ['substitute', 'u = e^x', 'quadratic', 'u^2 - 7u + 12 = 0', 'factorise', '3 and 4', 'x = ln 3', 'x = ln 4'],
      modelAnswer: 'Substitute u = eˣ: u² − 7u + 12 = 0. Factorise: (u−3)(u−4) = 0. u = 3 or u = 4. eˣ = 3 → x = ln 3. eˣ = 4 → x = ln 4.',
      topic: 'Exponential equations'
    },
    {
      id: 'kw-2t5-7',
      stem: 'In the model P = 200e^{0.04t}, explain what the constants 200 and 0.04 represent. (3 marks)',
      marks: 3,
      keywords: ['200', 'initial', 'population', 't=0', '0.04', 'growth', 'rate', 'k'],
      modelAnswer: '200 is the initial value (when t = 0). 0.04 is the growth rate constant k, and since k > 0, this is exponential growth.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'kw-2t5-8',
      stem: 'Explain how you would linearise data from the model y = axⁿ to find constants a and n. (5 marks)',
      marks: 5,
      keywords: ['log', 'log y = log a + n log x', 'plot', 'log y', 'log x', 'gradient', 'n', 'intercept', 'log a', 'a = 10^{intercept}'],
      modelAnswer: 'Take log of both sides: log y = log a + n log x. Plot log y against log x. The gradient equals n. The y-intercept equals log a, so a = 10^{y-intercept}.',
      topic: 'Modelling'
    },
    {
      id: 'kw-2t5-9',
      stem: 'A radioactive sample has mass M = 80e^{kt}. After 4 hours, M = 40 g. Find k and state what it represents. (5 marks)',
      marks: 5,
      keywords: ['substitute', '40 = 80e^{4k}', 'e^{4k} = 0.5', '4k = ln 0.5', 'k = -0.173', 'decay', 'negative', 'half-life'],
      modelAnswer: '40 = 80e^{4k}. e^{4k} = 0.5. 4k = ln(0.5). k = ln(0.5)/4 ≈ -0.173. k is the decay rate constant; it is negative, showing exponential decay.',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'kw-2t5-10',
      stem: 'Solve 2log₃(x) − log₃(x−2) = 2. (5 marks)',
      marks: 5,
      keywords: ['power', 'log3(x^2)', 'subtract', 'log3(x^2/(x-2))', 'equals 2', 'inverse', 'x^2/(x-2) = 9', 'quadratic', 'x = 6', 'check domain'],
      modelAnswer: '2log₃(x) = log₃(x²). log₃(x²) − log₃(x−2) = 2. log₃[x²/(x−2)] = 2. x²/(x−2) = 9. x² = 9x − 18. x² − 9x + 18 = 0. (x−3)(x−6) = 0. Check domain: x > 2, so x = 6 only.',
      topic: 'Further logarithmic equations'
    },
    {
      id: 'kw-2t5-11',
      stem: 'State the change of base formula and explain its purpose. (3 marks)',
      marks: 3,
      keywords: ['log_a(b)', 'ln(b)/ln(a)', 'calculator', 'evaluate', 'different base'],
      modelAnswer: 'logₐ(b) = ln(b)/ln(a). This allows evaluation of logarithms with any base using a calculator which typically only has log₁₀ and ln buttons.',
      topic: 'Further logarithmic equations'
    },
    {
      id: 'kw-2t5-12',
      stem: 'Find the points of intersection of y = eˣ and y = 3 − eˣ. (4 marks)',
      marks: 4,
      keywords: ['equal', 'e^x = 3 - e^x', '2e^x = 3', 'e^x = 1.5', 'ln', 'x = ln(1.5)', 'y = 1.5'],
      modelAnswer: 'Set equal: eˣ = 3 − eˣ. 2eˣ = 3. eˣ = 1.5. x = ln(1.5) ≈ 0.405. y = e^{ln(1.5)} = 1.5. Intersection point: (ln 1.5, 1.5).',
      topic: 'Further logarithmic equations'
    }
  ],

  flashcards: [
    {
      id: 'fc-2t5-1',
      front: 'What is the approximate value of e?',
      back: 'e ≈ 2.71828182845...',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-2',
      front: 'What is the derivative of y = eˣ?',
      back: 'd/dx(eˣ) = eˣ — the function is its own derivative',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-3',
      front: 'What is the domain of y = eˣ?',
      back: 'All real numbers (-∞ < x < ∞)',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-4',
      front: 'What is the range of y = eˣ?',
      back: 'y > 0 (always positive)',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-5',
      front: 'What point does y = eˣ always pass through?',
      back: '(0, 1) because e⁰ = 1',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-6',
      front: 'What is the horizontal asymptote of y = eˣ?',
      back: 'y = 0 (the x-axis) as x → -∞',
      topic: 'Exponential functions'
    },
    {
      id: 'fc-2t5-7',
      front: 'What is ln(x)?',
      back: 'ln(x) = logₑ(x) — the natural logarithm, inverse of eˣ',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-8',
      front: 'What is the domain of y = ln(x)?',
      back: 'x > 0 (logarithms only defined for positive arguments)',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-9',
      front: 'What is the range of y = ln(x)?',
      back: 'All real numbers (-∞ < y < ∞)',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-10',
      front: 'What point does y = ln(x) always pass through?',
      back: '(1, 0) because ln(1) = 0',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-11',
      front: 'Simplify ln(e⁵)',
      back: 'ln(e⁵) = 5',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-12',
      front: 'Simplify e^{ln 7}',
      back: 'e^{ln 7} = 7',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-13',
      front: 'What is the multiplication rule for logarithms?',
      back: 'ln(MN) = ln(M) + ln(N) — log of product = sum of logs',
      topic: 'Laws of logarithms'
    },
    {
      id: 'fc-2t5-14',
      front: 'What is the division rule for logarithms?',
      back: 'ln(M/N) = ln(M) − ln(N) — log of quotient = difference of logs',
      topic: 'Laws of logarithms'
    },
    {
      id: 'fc-2t5-15',
      front: 'What is the power rule for logarithms?',
      back: 'ln(Mᵏ) = k·ln(M) — the power becomes a multiplier',
      topic: 'Laws of logarithms'
    },
    {
      id: 'fc-2t5-16',
      front: 'What is ln(1)?',
      back: 'ln(1) = 0 because e⁰ = 1',
      topic: 'Laws of logarithms'
    },
    {
      id: 'fc-2t5-17',
      front: 'What is ln(e)?',
      back: 'ln(e) = 1 because e¹ = e',
      topic: 'Laws of logarithms'
    },
    {
      id: 'fc-2t5-18',
      front: 'How do you solve aˣ = b?',
      back: 'Take ln of both sides: ln(aˣ) = ln(b), then x·ln(a) = ln(b), so x = ln(b)/ln(a)',
      topic: 'Exponential equations'
    },
    {
      id: 'fc-2t5-19',
      front: 'How do you solve eˣ = k?',
      back: 'Take ln of both sides: x = ln(k)',
      topic: 'Exponential equations'
    },
    {
      id: 'fc-2t5-20',
      front: 'How do you solve ln(x) = k?',
      back: 'Apply e to both sides: x = eᵏ',
      topic: 'Exponential equations'
    },
    {
      id: 'fc-2t5-21',
      front: 'What substitution converts e^{2x} − 5eˣ + 6 = 0 into a quadratic?',
      back: 'Substitute u = eˣ (with u > 0)',
      topic: 'Exponential equations'
    },
    {
      id: 'fc-2t5-22',
      front: 'In the model y = Ae^{kt}, what does A represent?',
      back: 'A is the initial value (when t = 0)',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'fc-2t5-23',
      front: 'In the model y = Ae^{kt}, what does k represent?',
      back: 'k is the rate constant: k > 0 for growth, k < 0 for decay',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'fc-2t5-24',
      front: 'To linearise y = Ae^{kt}, what do you plot?',
      back: 'Plot ln(y) against t. The gradient is k and the y-intercept is ln(A)',
      topic: 'Exponential growth and decay'
    },
    {
      id: 'fc-2t5-25',
      front: 'To linearise y = axⁿ, what do you plot?',
      back: 'Plot log(y) against log(x). The gradient is n and the y-intercept is log(a)',
      topic: 'Modelling'
    },
    {
      id: 'fc-2t5-26',
      front: 'To linearise y = abˣ, what do you plot?',
      back: 'Plot log(y) against x. The gradient is log(b) and the y-intercept is log(a)',
      topic: 'Modelling'
    },
    {
      id: 'fc-2t5-27',
      front: 'What is the change of base formula?',
      back: 'logₐ(b) = ln(b)/ln(a) = log(b)/log(a)',
      topic: 'Further logarithmic equations'
    },
    {
      id: 'fc-2t5-28',
      front: 'What substitution converts [ln(x)]² − 3ln(x) + 2 = 0 into a quadratic?',
      back: 'Substitute u = ln(x)',
      topic: 'Further logarithmic equations'
    },
    {
      id: 'fc-2t5-29',
      front: 'What is the vertical asymptote of y = ln(x)?',
      back: 'x = 0 (the y-axis)',
      topic: 'Logarithmic functions'
    },
    {
      id: 'fc-2t5-30',
      front: 'How do you transform y = eˣ to y = eˣ + 3?',
      back: 'Translate 3 units up; asymptote moves to y = 3',
      topic: 'Exponential functions'
    }
  ]
};
