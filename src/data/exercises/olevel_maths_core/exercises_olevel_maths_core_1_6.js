export const exercises_olevel_maths_core_1_6 = {

  mcq: [
    /* ── Simple Interest ── */
    { id: 'mcq-1', stem: 'What does the "P" stand for in the simple interest formula SI = PRT ÷ 100?', options: ['Percentage', 'Principal', 'Profit', 'Period'], correctAnswer: 1, rationale: 'P stands for the principal — the original amount of money invested or borrowed.', topic: 'Simple Interest' },
    { id: 'mcq-2', stem: 'Calculate the simple interest on $600 at 5% per year for 2 years.', options: ['$30', '$60', '$120', '$600'], correctAnswer: 1, rationale: 'SI = (600 × 5 × 2) ÷ 100 = 6000 ÷ 100 = $60.', topic: 'Simple Interest' },
    { id: 'mcq-3', stem: 'A bank pays simple interest. $400 is invested at 3% per year for 4 years. What is the total amount?', options: ['$412', '$448', '$452', '$464'], correctAnswer: 1, rationale: 'SI = (400 × 3 × 4) ÷ 100 = $48. Total = 400 + 48 = $448.', topic: 'Simple Interest' },
    { id: 'mcq-4', stem: '$1 200 earns $180 simple interest over 3 years. What is the annual rate?', options: ['3%', '4%', '5%', '6%'], correctAnswer: 2, rationale: 'R = (SI × 100) ÷ (P × T) = (180 × 100) ÷ (1200 × 3) = 18000 ÷ 3600 = 5%.', topic: 'Simple Interest' },
    { id: 'mcq-5', stem: 'How much simple interest does $800 earn at 6% per year for 9 months?', options: ['$36', '$48', '$72', '$144'], correctAnswer: 0, rationale: 'T = 9 ÷ 12 = 0.75 years. SI = (800 × 6 × 0.75) ÷ 100 = 3600 ÷ 100 = $36.', topic: 'Simple Interest' },
    { id: 'mcq-6', stem: 'Which statement is true about simple interest?', options: ['Interest is calculated on the growing balance', 'The interest earned increases each year', 'The same amount of interest is earned each period', 'It always gives more interest than compound interest'], correctAnswer: 2, rationale: 'Simple interest is calculated only on the original principal, so the same amount is earned every period.', topic: 'Simple Interest' },
    { id: 'mcq-7', stem: '$2 000 is invested at simple interest. After 5 years the total amount is $2 500. What is the rate?', options: ['4%', '5%', '6%', '10%'], correctAnswer: 1, rationale: 'SI = 2500 − 2000 = $500. R = (500 × 100) ÷ (2000 × 5) = 50000 ÷ 10000 = 5%.', topic: 'Simple Interest' },
    { id: 'mcq-8', stem: 'The simple interest on a sum of money at 8% per year for 2.5 years is $100. What is the principal?', options: ['$400', '$500', '$625', '$800'], correctAnswer: 1, rationale: 'P = (SI × 100) ÷ (R × T) = (100 × 100) ÷ (8 × 2.5) = 10000 ÷ 20 = $500.', topic: 'Simple Interest' },
    { id: 'mcq-9', stem: 'Convert 18 months to years for the simple interest formula.', options: ['0.18 years', '1.5 years', '1.8 years', '18 years'], correctAnswer: 1, rationale: '18 ÷ 12 = 1.5 years.', topic: 'Simple Interest' },
    { id: 'mcq-10', stem: 'Ali invests $350 at 4% simple interest per year for 6 years. How much interest does he earn?', options: ['$56', '$84', '$140', '$434'], correctAnswer: 1, rationale: 'SI = (350 × 4 × 6) ÷ 100 = 8400 ÷ 100 = $84.', topic: 'Simple Interest' },
    { id: 'mcq-11', stem: 'After how many years will $500 earn $150 simple interest at 10% per year?', options: ['1.5 years', '2 years', '3 years', '5 years'], correctAnswer: 2, rationale: 'T = (SI × 100) ÷ (P × R) = (150 × 100) ÷ (500 × 10) = 15000 ÷ 5000 = 3 years.', topic: 'Simple Interest' },
    { id: 'mcq-12', stem: 'What is the formula for finding the total amount using simple interest?', options: ['A = P − SI', 'A = P × SI', 'A = P + SI', 'A = SI ÷ P'], correctAnswer: 2, rationale: 'Total amount = Principal + Simple Interest earned.', topic: 'Simple Interest' },
    { id: 'mcq-13', stem: 'The simple interest on $750 at 8% per year for 6 months is:', options: ['$15', '$30', '$45', '$60'], correctAnswer: 1, rationale: 'T = 6 ÷ 12 = 0.5 years. SI = (750 × 8 × 0.5) ÷ 100 = 3000 ÷ 100 = $30.', topic: 'Simple Interest' },
    { id: 'mcq-14', stem: '$900 is borrowed at 7% simple interest per year for 4 years. What is the total to repay?', options: ['$963', '$1 152', '$1 260', '$1 440'], correctAnswer: 1, rationale: 'SI = (900 × 7 × 4) ÷ 100 = 25200 ÷ 100 = $252. Total = 900 + 252 = $1 152.', topic: 'Simple Interest' },

    /* ── Compound Interest ── */
    { id: 'mcq-15', stem: 'In compound interest, interest is calculated on:', options: ['The original principal only', 'The principal plus accumulated interest', 'Only the interest from the previous year', 'Half of the principal'], correctAnswer: 1, rationale: 'Compound interest is calculated on the principal plus all previously accumulated interest.', topic: 'Compound Interest' },
    { id: 'mcq-16', stem: 'What is the compound interest formula?', options: ['A = P + RT ÷ 100', 'A = P × (1 + r ÷ 100)ⁿ', 'A = P × R × T ÷ 100', 'A = P ÷ (1 + r)ⁿ'], correctAnswer: 1, rationale: 'The compound interest formula is A = P × (1 + r ÷ 100)ⁿ.', topic: 'Compound Interest' },
    { id: 'mcq-17', stem: '$1 000 is invested at 5% compound interest per year for 2 years. What is the total amount?', options: ['$1 050.00', '$1 100.00', '$1 102.50', '$1 105.00'], correctAnswer: 2, rationale: 'A = 1000 × (1.05)² = 1000 × 1.1025 = $1 102.50.', topic: 'Compound Interest' },
    { id: 'mcq-18', stem: 'What multiplier do you use for 8% compound interest per year?', options: ['0.08', '0.8', '1.08', '1.8'], correctAnswer: 2, rationale: 'The multiplier is 1 + 8 ÷ 100 = 1.08.', topic: 'Compound Interest' },
    { id: 'mcq-19', stem: '$2 000 is invested at 10% compound interest for 3 years. What is the compound interest earned?', options: ['$600.00', '$620.00', '$662.00', '$728.00'], correctAnswer: 2, rationale: 'A = 2000 × (1.10)³ = 2000 × 1.331 = $2 662. CI = 2662 − 2000 = $662.', topic: 'Compound Interest' },
    { id: 'mcq-20', stem: 'Which gives more interest over the same period and rate: simple or compound?', options: ['Simple interest', 'Compound interest', 'They are always the same', 'It depends on the principal'], correctAnswer: 1, rationale: 'Compound interest always gives more than simple interest for the same rate and period (beyond 1 year), because interest earns interest.', topic: 'Compound Interest' },
    { id: 'mcq-21', stem: '$500 is invested at 4% compound interest for 3 years. What is the total amount (to 2 d.p.)?', options: ['$560.00', '$562.43', '$624.32', '$580.00'], correctAnswer: 1, rationale: 'A = 500 × (1.04)³ = 500 × 1.124864 = $562.43.', topic: 'Compound Interest' },
    { id: 'mcq-22', stem: 'After 1 year, simple interest and compound interest on the same principal at the same rate give:', options: ['Different amounts', 'The same amount', 'Compound gives less', 'It depends on the rate'], correctAnswer: 1, rationale: 'After 1 year both give the same interest, since compound interest has not yet had a chance to compound.', topic: 'Compound Interest' },
    { id: 'mcq-23', stem: '$3 000 is invested at 6% compound interest. What is the balance after 2 years?', options: ['$3 360.00', '$3 370.80', '$3 374.60', '$3 600.00'], correctAnswer: 1, rationale: 'A = 3000 × (1.06)² = 3000 × 1.1236 = $3 370.80.', topic: 'Compound Interest' },
    { id: 'mcq-24', stem: 'Find the compound interest earned on $800 at 3% per year for 2 years.', options: ['$48.00', '$48.72', '$49.00', '$50.72'], correctAnswer: 1, rationale: 'A = 800 × (1.03)² = 800 × 1.0609 = $848.72. CI = 848.72 − 800 = $48.72.', topic: 'Compound Interest' },
    { id: 'mcq-25', stem: 'A car depreciates at 15% per year. Its value now is $20 000. What is its value after 1 year?', options: ['$3 000', '$15 000', '$17 000', '$18 500'], correctAnswer: 2, rationale: 'Value = 20000 × (1 − 0.15) = 20000 × 0.85 = $17 000. Depreciation uses the same compound structure with a decrease.', topic: 'Compound Interest' },
    { id: 'mcq-26', stem: 'What is the compound interest on $5 000 at 2% per year for 3 years (to 2 d.p.)?', options: ['$300.00', '$306.04', '$312.08', '$500.00'], correctAnswer: 1, rationale: 'A = 5000 × (1.02)³ = 5000 × 1.061208 = $5 306.04. CI = 5306.04 − 5000 = $306.04.', topic: 'Compound Interest' },
    { id: 'mcq-27', stem: '$1 500 is invested at 4% compound interest for 2 years. What is the interest earned in the second year only?', options: ['$60.00', '$62.40', '$120.00', '$122.40'], correctAnswer: 1, rationale: 'Year 1 balance: 1500 × 1.04 = $1 560. Year 2 interest: 1560 × 0.04 = $62.40.', topic: 'Compound Interest' },
    { id: 'mcq-28', stem: 'The total amount from compound interest is $1 157.63 on a principal of $1 000. What is the compound interest earned?', options: ['$115.76', '$150.00', '$157.63', '$1 000.00'], correctAnswer: 2, rationale: 'Compound interest = A − P = 1157.63 − 1000 = $157.63.', topic: 'Compound Interest' },
    { id: 'mcq-29', stem: 'Which correctly shows the calculation for $2 000 at 7% compound interest for 4 years?', options: ['2000 × 0.07 × 4', '2000 × (1 + 7)⁴', '2000 × (1.07)⁴', '2000 + 7% + 4'], correctAnswer: 2, rationale: 'Using A = P × (1 + r ÷ 100)ⁿ → A = 2000 × (1.07)⁴.', topic: 'Compound Interest' },
    { id: 'mcq-30', stem: '$4 000 simple interest at 5% for 3 years gives $600. $4 000 compound interest at 5% for 3 years gives $630.50. How much more does compound interest give?', options: ['$3.05', '$30.50', '$60.00', '$63.05'], correctAnswer: 1, rationale: 'Difference = $630.50 − $600 = $30.50.', topic: 'Compound Interest' }
  ],

  fillblank: [
    /* ── Simple Interest ── */
    { id: 'fb-1', stem: 'Complete the simple interest formula.', template: 'SI = P × R × T ÷ __BLANK__', blanks: [{ answer: '100' }], rationale: 'The formula is SI = PRT ÷ 100.' },
    { id: 'fb-2', stem: 'In the SI formula, T represents time measured in ____.', template: 'T represents time in __BLANK__', blanks: [{ answer: 'years' }], rationale: 'Time must always be converted to years before substituting.' },
    { id: 'fb-3', stem: 'The total amount after earning simple interest is found by adding the interest to the ____.', template: 'Total = __BLANK__ + SI', blanks: [{ answer: 'principal' }], rationale: 'Total amount = Principal + Simple Interest.' },
    { id: 'fb-4', stem: 'To convert 6 months to years, divide 6 by ____.', template: 'Divide 6 by __BLANK__', blanks: [{ answer: '12' }], rationale: 'There are 12 months in a year, so T = 6 ÷ 12 = 0.5 years.' },
    { id: 'fb-5', stem: 'Simple interest gives the ____ amount of interest every period.', template: 'Simple interest gives the __BLANK__ amount each period', blanks: [{ answer: 'same' }], rationale: 'With simple interest the interest is fixed each period because it is only calculated on the original principal.' },
    { id: 'fb-6', stem: 'Rearrange SI = PRT ÷ 100 to find P.', template: 'P = (SI × 100) ÷ (__BLANK__)', blanks: [{ answer: 'R × T' }], rationale: 'Rearranging: P = (SI × 100) ÷ (R × T).' },
    { id: 'fb-7', stem: 'SI on $1 000 at 5% for 2 years is $____.', template: 'SI = $__BLANK__', blanks: [{ answer: '100' }], rationale: 'SI = (1000 × 5 × 2) ÷ 100 = 10000 ÷ 100 = $100.' },

    /* ── Compound Interest ── */
    { id: 'fb-8', stem: 'Complete the compound interest formula.', template: 'A = P × (1 + r ÷ __BLANK__)ⁿ', blanks: [{ answer: '100' }], rationale: 'A = P × (1 + r ÷ 100)ⁿ.' },
    { id: 'fb-9', stem: 'The compound interest earned equals A minus the ____.', template: 'CI = A − __BLANK__', blanks: [{ answer: 'principal' }], rationale: 'Compound interest earned = Total amount − Principal.' },
    { id: 'fb-10', stem: 'For 5% compound interest, the annual multiplier is ____.', template: 'Multiplier = __BLANK__', blanks: [{ answer: '1.05' }], rationale: '1 + 5 ÷ 100 = 1.05.' },
    { id: 'fb-11', stem: 'Compound interest earns interest on interest — this is called ____.', template: 'This is called __BLANK__', blanks: [{ answer: 'compounding' }], rationale: 'The process of earning interest on accumulated interest is called compounding.' },
    { id: 'fb-12', stem: 'In the formula A = P(1 + r/100)ⁿ, the letter n represents the number of ____.', template: 'n represents the number of __BLANK__', blanks: [{ answer: 'years' }], rationale: 'n is the number of compounding periods, which is years when interest is compounded annually.' },
    { id: 'fb-13', stem: 'For 12% compound interest, the multiplier is ____.', template: 'Multiplier = __BLANK__', blanks: [{ answer: '1.12' }], rationale: '1 + 12 ÷ 100 = 1.12.' },
    { id: 'fb-14', stem: 'Compound interest always gives ____ interest than simple interest over more than one year.', template: 'Compound interest gives __BLANK__ interest', blanks: [{ answer: 'more' }], rationale: 'Because interest compounds on itself, compound interest exceeds simple interest for periods longer than one year.' },
    { id: 'fb-15', stem: '$1 000 at 5% compound interest for 1 year gives a total of $____.', template: 'Total = $__BLANK__', blanks: [{ answer: '1 050' }], rationale: 'A = 1000 × 1.05 = $1 050. (Same as simple interest for 1 year.)' }
  ],

  dragdrop: [
    { id: 'dd-1', stem: 'Sort each description into the correct type of interest.', categories: ['Simple Interest', 'Compound Interest'], items: [
      { text: 'Interest is calculated on the original principal only', category: 'Simple Interest' },
      { text: 'Interest earns interest', category: 'Compound Interest' },
      { text: 'The same amount of interest is earned each period', category: 'Simple Interest' },
      { text: 'Uses the formula A = P(1 + r/100)ⁿ', category: 'Compound Interest' },
      { text: 'Uses the formula SI = PRT ÷ 100', category: 'Simple Interest' },
      { text: 'The balance grows faster each year', category: 'Compound Interest' }
    ]},
    { id: 'dd-2', stem: 'Match each variable to what it represents in the SI formula.', categories: ['P', 'R', 'T'], items: [
      { text: 'Principal (original amount)', category: 'P' },
      { text: 'Annual rate as a percentage', category: 'R' },
      { text: 'Time in years', category: 'T' }
    ]},
    { id: 'dd-3', stem: 'Sort these into the correct formula.', categories: ['Simple Interest formula', 'Compound Interest formula'], items: [
      { text: 'SI = PRT ÷ 100', category: 'Simple Interest formula' },
      { text: 'A = P × (1.05)³', category: 'Compound Interest formula' },
      { text: 'Total = P + SI', category: 'Simple Interest formula' },
      { text: 'CI = A − P', category: 'Compound Interest formula' }
    ]},
    { id: 'dd-4', stem: 'Match each percentage rate to its compound interest multiplier.', categories: ['1.03', '1.05', '1.10', '1.08'], items: [
      { text: '3%', category: '1.03' },
      { text: '5%', category: '1.05' },
      { text: '10%', category: '1.10' },
      { text: '8%', category: '1.08' }
    ]},
    { id: 'dd-5', stem: 'Sort the time values: which are already in years and which need converting?', categories: ['Already in years', 'Needs converting'], items: [
      { text: '3 years', category: 'Already in years' },
      { text: '18 months', category: 'Needs converting' },
      { text: '0.5 years', category: 'Already in years' },
      { text: '6 months', category: 'Needs converting' },
      { text: '2 years', category: 'Already in years' },
      { text: '9 months', category: 'Needs converting' }
    ]},
    { id: 'dd-6', stem: 'Sort these facts about interest after more than one year at the same rate.', categories: ['Simple Interest', 'Compound Interest'], items: [
      { text: 'Total interest is always P × R × T ÷ 100', category: 'Simple Interest' },
      { text: 'Interest earned increases each year', category: 'Compound Interest' },
      { text: 'Uses a multiplier raised to a power', category: 'Compound Interest' },
      { text: 'Interest is the same each year', category: 'Simple Interest' }
    ]},
    { id: 'dd-7', stem: 'Match each rearranged simple interest formula to what it finds.', categories: ['Finds P', 'Finds R', 'Finds T'], items: [
      { text: '(SI × 100) ÷ (R × T)', category: 'Finds P' },
      { text: '(SI × 100) ÷ (P × T)', category: 'Finds R' },
      { text: '(SI × 100) ÷ (P × R)', category: 'Finds T' }
    ]},
    { id: 'dd-8', stem: 'Classify each scenario as simple or compound interest.', categories: ['Simple Interest', 'Compound Interest'], items: [
      { text: '$200 earns $10 every year for 5 years', category: 'Simple Interest' },
      { text: '$200 earns $10 in year 1, then $10.50 in year 2', category: 'Compound Interest' },
      { text: 'A savings account where interest is added to the balance each year', category: 'Compound Interest' },
      { text: 'A loan where the same fee is charged every month', category: 'Simple Interest' }
    ]},
    { id: 'dd-9', stem: 'Match each variable in the compound interest formula A = P(1 + r/100)ⁿ.', categories: ['A', 'P', 'r', 'n'], items: [
      { text: 'Total amount after n years', category: 'A' },
      { text: 'Original amount invested', category: 'P' },
      { text: 'Annual interest rate (%)', category: 'r' },
      { text: 'Number of years', category: 'n' }
    ]},
    { id: 'dd-10', stem: 'Sort these multipliers: which represent growth and which represent depreciation?', categories: ['Growth (increase)', 'Depreciation (decrease)'], items: [
      { text: '1.05', category: 'Growth (increase)' },
      { text: '0.85', category: 'Depreciation (decrease)' },
      { text: '1.12', category: 'Growth (increase)' },
      { text: '0.90', category: 'Depreciation (decrease)' }
    ]}
  ],

  sequence: [
    { id: 'seq-1', stem: 'Order the steps to calculate simple interest on $500 at 4% for 3 years.', steps: [
      'Identify P = $500, R = 4, T = 3',
      'Substitute into SI = PRT ÷ 100',
      'Calculate 500 × 4 × 3 = 6 000',
      'Divide by 100 to get SI = $60'
    ]},
    { id: 'seq-2', stem: 'Order the steps to find the total amount using simple interest.', steps: [
      'Identify the principal P',
      'Calculate SI using SI = PRT ÷ 100',
      'Add SI to the principal',
      'State the total amount A = P + SI'
    ]},
    { id: 'seq-3', stem: 'Order the steps to calculate compound interest on $1 000 at 5% for 3 years.', steps: [
      'Identify P = $1 000, r = 5, n = 3',
      'Write the multiplier as 1.05',
      'Calculate A = 1000 × (1.05)³',
      'Find CI = A − P = $1 157.63 − $1 000 = $157.63'
    ]},
    { id: 'seq-4', stem: 'Order the steps to convert months to years for the SI formula.', steps: [
      'Read the time given in months',
      'Divide the number of months by 12',
      'Write the result as T in years',
      'Substitute T into the SI formula'
    ]},
    { id: 'seq-5', stem: 'Order the year-by-year compound interest calculation for $1 000 at 5%.', steps: [
      'Year 1: 1000 × 1.05 = $1 050',
      'Year 2: 1050 × 1.05 = $1 102.50',
      'Year 3: 1102.50 × 1.05 = $1 157.63',
      'CI = $1 157.63 − $1 000 = $157.63'
    ]},
    { id: 'seq-6', stem: 'Order the steps to rearrange the SI formula to find the principal P.', steps: [
      'Start with SI = PRT ÷ 100',
      'Multiply both sides by 100: SI × 100 = PRT',
      'Divide both sides by R × T',
      'P = (SI × 100) ÷ (R × T)'
    ]},
    { id: 'seq-7', stem: 'Order the steps to find the annual rate from simple interest.', steps: [
      'Start with SI = PRT ÷ 100',
      'Multiply both sides by 100',
      'Divide both sides by P × T',
      'R = (SI × 100) ÷ (P × T)'
    ]},
    { id: 'seq-8', stem: 'Order the steps to compare simple and compound interest on $2 000 at 6% for 2 years.', steps: [
      'Calculate SI = (2000 × 6 × 2) ÷ 100 = $240',
      'Calculate CI: A = 2000 × (1.06)² = $2 247.20, CI = $247.20',
      'Compare: CI ($247.20) > SI ($240)',
      'State that compound interest gives $7.20 more'
    ]}
  ],

  keyword: [
    /* ── Simple Interest ── */
    { id: 'kw-1', stem: 'Define simple interest. [2 marks]', marks: 2, keywords: ['original principal', 'same interest'], modelAnswer: 'Simple interest is calculated on the original principal only, giving the same amount of interest each period.' },
    { id: 'kw-2', stem: 'State the simple interest formula and what each letter represents. [3 marks]', marks: 3, keywords: ['SI = PRT ÷ 100', 'principal', 'rate', 'time'], modelAnswer: 'SI = PRT ÷ 100, where P is the principal, R is the annual rate (%), and T is the time in years.' },
    { id: 'kw-3', stem: 'Explain how to convert months to years for the SI formula. [1 mark]', marks: 1, keywords: ['divide', '12'], modelAnswer: 'Divide the number of months by 12 to convert to years.' },
    { id: 'kw-4', stem: 'Explain how to find the total amount after simple interest has been earned. [2 marks]', marks: 2, keywords: ['total', 'principal', 'add', 'interest'], modelAnswer: 'Add the simple interest to the principal: Total amount = P + SI.' },
    { id: 'kw-5', stem: 'Explain how to rearrange the SI formula to find the rate R. [2 marks]', marks: 2, keywords: ['multiply', '100', 'divide', 'P × T'], modelAnswer: 'R = (SI × 100) ÷ (P × T). Multiply SI by 100, then divide by the product of principal and time.' },
    { id: 'kw-6', stem: 'Why does simple interest stay the same each year? [1 mark]', marks: 1, keywords: ['original principal', 'not added'], modelAnswer: 'Because interest is only calculated on the original principal — earned interest is not added to the balance.' },

    /* ── Compound Interest ── */
    { id: 'kw-7', stem: 'Define compound interest. [2 marks]', marks: 2, keywords: ['principal', 'accumulated interest', 'interest on interest'], modelAnswer: 'Compound interest is calculated on the principal plus accumulated interest, so interest earns interest.' },
    { id: 'kw-8', stem: 'State the compound interest formula and what each letter represents. [3 marks]', marks: 3, keywords: ['A = P(1 + r/100)ⁿ', 'total amount', 'principal', 'rate', 'years'], modelAnswer: 'A = P(1 + r/100)ⁿ, where A is the total amount, P is the principal, r is the annual rate (%), and n is the number of years.' },
    { id: 'kw-9', stem: 'Explain how to find the compound interest earned from the total amount. [1 mark]', marks: 1, keywords: ['subtract', 'principal'], modelAnswer: 'Compound interest = A − P. Subtract the original principal from the total amount.' },
    { id: 'kw-10', stem: 'Explain why compound interest gives more than simple interest over multiple years. [2 marks]', marks: 2, keywords: ['interest added', 'larger balance', 'grows'], modelAnswer: 'Each year, earned interest is added to the balance, making the balance larger. The next year\'s interest is calculated on this bigger amount, so it grows faster than simple interest.' },
    { id: 'kw-11', stem: 'What is the multiplier for 8% compound interest? Explain how you find it. [2 marks]', marks: 2, keywords: ['1.08', '1 + r/100'], modelAnswer: 'The multiplier is 1 + 8 ÷ 100 = 1.08. Add 1 to the rate expressed as a decimal.' },
    { id: 'kw-12', stem: 'After 1 year, simple and compound interest at the same rate give the same result. Explain why. [2 marks]', marks: 2, keywords: ['one year', 'no previous interest', 'same calculation'], modelAnswer: 'After only 1 year there is no previously accumulated interest, so both methods calculate interest on just the principal — giving the same result.' }
  ],

  flashcards: [
    /* ── Simple Interest ── */
    { id: 'fc-1', front: 'What is simple interest?', back: 'Interest calculated only on the original principal. The same fixed amount of interest is earned each period.', topic: 'Simple Interest' },
    { id: 'fc-2', front: 'State the simple interest formula.', back: 'SI = P × R × T ÷ 100', topic: 'Simple Interest' },
    { id: 'fc-3', front: 'What does P stand for in the SI formula?', back: 'Principal — the original amount of money invested or borrowed.', topic: 'Simple Interest' },
    { id: 'fc-4', front: 'What does R stand for in the SI formula?', back: 'Rate — the annual interest rate, written as a percentage.', topic: 'Simple Interest' },
    { id: 'fc-5', front: 'What does T stand for in the SI formula?', back: 'Time — measured in years.', topic: 'Simple Interest' },
    { id: 'fc-6', front: 'How do you find the total amount with simple interest?', back: 'Total amount = P + SI (principal plus simple interest).', topic: 'Simple Interest' },
    { id: 'fc-7', front: 'How do you convert months to years?', back: 'Divide the number of months by 12. E.g. 9 months = 9 ÷ 12 = 0.75 years.', topic: 'Simple Interest' },
    { id: 'fc-8', front: 'Rearrange SI = PRT ÷ 100 to find P.', back: 'P = (SI × 100) ÷ (R × T)', topic: 'Simple Interest' },
    { id: 'fc-9', front: 'Rearrange SI = PRT ÷ 100 to find R.', back: 'R = (SI × 100) ÷ (P × T)', topic: 'Simple Interest' },
    { id: 'fc-10', front: 'Rearrange SI = PRT ÷ 100 to find T.', back: 'T = (SI × 100) ÷ (P × R)', topic: 'Simple Interest' },
    { id: 'fc-11', front: 'SI on $500 at 4% for 3 years?', back: 'SI = (500 × 4 × 3) ÷ 100 = $60', topic: 'Simple Interest' },
    { id: 'fc-12', front: 'SI on $800 at 6% for 9 months?', back: 'T = 0.75 years. SI = (800 × 6 × 0.75) ÷ 100 = $36', topic: 'Simple Interest' },
    { id: 'fc-13', front: 'Why does simple interest stay the same every year?', back: 'Because interest is only ever calculated on the original principal — it does not compound.', topic: 'Simple Interest' },

    /* ── Compound Interest ── */
    { id: 'fc-14', front: 'What is compound interest?', back: 'Interest calculated on the principal plus all previously accumulated interest. Interest earns interest.', topic: 'Compound Interest' },
    { id: 'fc-15', front: 'State the compound interest formula.', back: 'A = P × (1 + r ÷ 100)ⁿ', topic: 'Compound Interest' },
    { id: 'fc-16', front: 'What does A represent in the CI formula?', back: 'The total amount after n years (principal + interest).', topic: 'Compound Interest' },
    { id: 'fc-17', front: 'What does n represent in the CI formula?', back: 'The number of years (compounding periods).', topic: 'Compound Interest' },
    { id: 'fc-18', front: 'How do you find the compound interest earned?', back: 'CI = A − P (total amount minus the principal).', topic: 'Compound Interest' },
    { id: 'fc-19', front: 'What multiplier is used for 5% compound interest?', back: '1.05 (calculated as 1 + 5 ÷ 100).', topic: 'Compound Interest' },
    { id: 'fc-20', front: 'What multiplier is used for 10% compound interest?', back: '1.10 (calculated as 1 + 10 ÷ 100).', topic: 'Compound Interest' },
    { id: 'fc-21', front: '$1 000 at 5% compound interest for 3 years?', back: 'A = 1000 × (1.05)³ = $1 157.63. CI = $157.63.', topic: 'Compound Interest' },
    { id: 'fc-22', front: 'Which gives more interest: simple or compound (same rate, more than 1 year)?', back: 'Compound interest always gives more, because interest earns interest.', topic: 'Compound Interest' },
    { id: 'fc-23', front: 'After exactly 1 year, do simple and compound interest give the same result?', back: 'Yes — after 1 year there is no accumulated interest to compound, so both methods give the same interest.', topic: 'Compound Interest' },
    { id: 'fc-24', front: 'How do you calculate compound interest year by year?', back: 'Multiply the balance by the multiplier each year. E.g. at 5%: Year 1 → × 1.05, Year 2 → × 1.05, etc.', topic: 'Compound Interest' },
    { id: 'fc-25', front: 'What is the key difference between simple and compound interest?', back: 'Simple: interest on original principal only (fixed). Compound: interest on principal + accumulated interest (growing).', topic: 'Compound Interest' }
  ]
};
