/**
 * AL Accounting Unit 1 Topic 2: Control Procedures
 * Covers trial balance, control accounts, error correction, and suspense accounts
 */

export const exercises_accounting_1_2 = {
  topic: 'Control Procedures',
  subject: 'accounting',
  unitId: 1,
  topicId: 2,

  mcq: [
    // Trial balance purpose
    {
      id: 'mcq-1-2-1',
      question: 'What is the PRIMARY purpose of preparing a trial balance?',
      options: [
        'To calculate net profit',
        'To check the arithmetic accuracy of double-entry bookkeeping',
        'To prepare financial statements',
        'To calculate depreciation'
      ],
      correctAnswer: 1,
      topic: 'Trial balance purpose',
      rationale: 'The trial balance is primarily used to verify that total debits equal total credits, checking the arithmetic accuracy of double-entry entries.'
    },
    {
      id: 'mcq-1-2-2',
      question: 'A trial balance lists which types of account balances?',
      options: [
        'Only asset accounts',
        'Only liability accounts',
        'All ledger account balances (assets, liabilities, equity, income, expenses)',
        'Only revenue and expense accounts'
      ],
      correctAnswer: 2,
      topic: 'Trial balance purpose',
      rationale: 'A trial balance includes ALL ledger account balances: assets, liabilities, equity, income, and expenses.'
    },
    {
      id: 'mcq-1-2-3',
      question: 'When should a trial balance be prepared?',
      options: [
        'Only at the end of the financial year',
        'Before preparing financial statements',
        'After the statement of financial position is prepared',
        'Only when errors are discovered'
      ],
      correctAnswer: 1,
      topic: 'Trial balance purpose',
      rationale: 'Trial balances are typically prepared at regular intervals (monthly, quarterly) and must be prepared BEFORE financial statements to ensure accuracy.'
    },
    {
      id: 'mcq-1-2-4',
      question: 'What does a balanced trial balance indicate?',
      options: [
        'All transactions have been correctly recorded',
        'The business is profitable',
        'Double-entry arithmetic is accurate (but may still contain errors)',
        'No errors exist in the ledger'
      ],
      correctAnswer: 2,
      topic: 'Trial balance purpose',
      rationale: 'A balanced trial balance shows arithmetic accuracy but does NOT prove all transactions are correct - certain errors will still balance.'
    },

    // Trial balance limitations
    {
      id: 'mcq-1-2-5',
      question: 'Which type of error will NOT be detected by a trial balance?',
      options: [
        'A debit entry recorded as £500 instead of £50',
        'A complete reversal of entries',
        'A transaction recorded only in the debit column',
        'A transposition error in a debit entry'
      ],
      correctAnswer: 1,
      topic: 'Trial balance limitations',
      rationale: 'Complete reversal errors affect both sides equally, so the trial balance still balances.'
    },
    {
      id: 'mcq-1-2-6',
      question: 'What is a compensating error?',
      options: [
        'An error caused by incorrect mathematical calculation',
        'Two or more errors that cancel each other out',
        'An error discovered during an audit',
        'An error that affects only one account'
      ],
      correctAnswer: 1,
      topic: 'Trial balance limitations',
      rationale: 'Compensating errors are multiple errors that happen to offset each other, keeping debits and credits equal despite the errors.'
    },
    {
      id: 'mcq-1-2-7',
      question: 'Which error is an "error of principle"?',
      options: [
        'Recording £100 as £10',
        'Recording a motor vehicle purchase as repairs expense',
        'Omitting a transaction entirely',
        'Entering a debit in both the debit and credit columns'
      ],
      correctAnswer: 1,
      topic: 'Trial balance limitations',
      rationale: 'Error of principle occurs when a transaction is recorded in the wrong type of account (capital expense vs revenue expense).'
    },
    {
      id: 'mcq-1-2-8',
      question: 'What is an "error of commission"?',
      options: [
        'An error that affects profit calculation',
        'Recording to the wrong account of the same type',
        'A mathematical error in totaling',
        'An error that only affects the balance sheet'
      ],
      correctAnswer: 1,
      topic: 'Trial balance limitations',
      rationale: 'Error of commission occurs when a transaction is posted to the wrong individual account but within the correct account type.'
    },

    // Receivables and payables control accounts
    {
      id: 'mcq-1-2-9',
      question: 'What is the main purpose of a receivables control account?',
      options: [
        'To record sales revenue',
        'To verify the accuracy of the individual receivables ledger accounts',
        'To calculate bad debts',
        'To record cash receipts from customers'
      ],
      correctAnswer: 1,
      topic: 'Receivables and payables control accounts',
      rationale: 'Control accounts provide a check on the accuracy of personal ledgers by aggregating all transactions affecting receivables.'
    },
    {
      id: 'mcq-1-2-10',
      question: 'In a receivables control account, what is the opening balance?',
      options: [
        'Credit balance',
        'Debit balance',
        'Nil balance',
        'Either debit or credit depending on the business'
      ],
      correctAnswer: 1,
      topic: 'Receivables and payables control accounts',
      rationale: 'Receivables control account has a debit opening balance as receivables are assets.'
    },
    {
      id: 'mcq-1-2-11',
      question: 'Which entry would appear on the DEBIT side of a receivables control account?',
      options: [
        'Sales on credit',
        'Cash received from customers',
        'Returns inwards',
        'Discounts allowed'
      ],
      correctAnswer: 0,
      topic: 'Receivables and payables control accounts',
      rationale: 'Credit sales increase receivables, so they appear on the debit side of the receivables control account.'
    },
    {
      id: 'mcq-1-2-12',
      question: 'What does a payables control account primarily help to verify?',
      options: [
        'The accuracy of purchases ledger',
        'The amount of cash paid to suppliers',
        'The value of inventory',
        'The total purchases for the period'
      ],
      correctAnswer: 0,
      topic: 'Receivables and payables control accounts',
      rationale: 'The payables control account is used to verify the accuracy of the individual suppliers (purchases ledger) accounts.'
    },
    {
      id: 'mcq-1-2-13',
      question: 'In a payables control account, what is the normal opening balance?',
      options: [
        'Debit balance',
        'Credit balance',
        'Nil balance',
        'Either debit or credit'
      ],
      correctAnswer: 1,
      topic: 'Receivables and payables control accounts',
      rationale: 'Payables are liabilities, so the control account has a credit opening balance.'
    },
    {
      id: 'mcq-1-2-14',
      question: 'Which items are posted to the CREDIT side of a payables control account?',
      options: [
        'Purchases on credit',
        'Cash paid to suppliers',
        'Returns outwards to suppliers',
        'Discounts received'
      ],
      correctAnswer: 0,
      topic: 'Receivables and payables control accounts',
      rationale: 'Credit purchases increase payables, so they appear on the credit side of the payables control account.'
    },

    // Errors affecting TB agreement
    {
      id: 'mcq-1-2-15',
      question: 'A transposition error occurs when:',
      options: [
        'A transaction is recorded only once',
        'Figures are reversed in position (e.g., £52 recorded as £25)',
        'An entry is made on the wrong side',
        'A complete reversal of debit and credit entries occurs'
      ],
      correctAnswer: 1,
      topic: 'Errors affecting trial-balance agreement',
      rationale: 'Transposition errors involve digits being swapped, creating a difference divisible by 9.'
    },
    {
      id: 'mcq-1-2-16',
      question: 'A one-sided entry error will cause the trial balance to:',
      options: [
        'Still balance',
        'Not balance',
        'Show twice the correct amount',
        'Show zero balances'
      ],
      correctAnswer: 1,
      topic: 'Errors affecting trial-balance agreement',
      rationale: 'One-sided entries affect only one side of the ledger, causing the trial balance to be out of balance.'
    },
    {
      id: 'mcq-1-2-17',
      question: 'What is the mathematical characteristic of a transposition error?',
      options: [
        'Always ends in zero',
        'Divisible by 9',
        'Always an even number',
        'Always a prime number'
      ],
      correctAnswer: 1,
      topic: 'Errors affecting trial-balance agreement',
      rationale: 'Transposition errors create a difference that is always divisible by 9 (e.g., 52-25=27, which is 9×3).'
    },
    {
      id: 'mcq-1-2-18',
      question: 'If a debit entry of £500 is recorded as £5,000, what type of error is this?',
      options: [
        'Transposition error',
        'Error of commission',
        'Wrong figure error',
        'Compensating error'
      ],
      correctAnswer: 2,
      topic: 'Errors affecting trial-balance agreement',
      rationale: 'Wrong figure errors occur when an incorrect amount is entered but the double-entry principle is still followed.'
    },

    // Errors NOT affecting TB agreement
    {
      id: 'mcq-1-2-19',
      question: 'An "error of original entry" occurs when:',
      options: [
        'The wrong amount is recorded in both debit and credit',
        'A transaction is posted to the wrong side',
        'A transaction is omitted entirely',
        'The debit and credit are swapped'
      ],
      correctAnswer: 0,
      topic: 'Errors not affecting trial-balance agreement',
      rationale: 'Error of original entry means the wrong amount is entered but in the correct accounts, so debits still equal credits.'
    },
    {
      id: 'mcq-1-2-20',
      question: 'A complete reversal error means:',
      options: [
        'One entry is omitted',
        'The transaction is recorded correctly but with wrong amount',
        'Debits are entered as credits and vice versa',
        'Entry made to wrong account type'
      ],
      correctAnswer: 2,
      topic: 'Errors not affecting trial-balance agreement',
      rationale: 'Complete reversal swaps debit and credit entries, but the amounts remain equal, so the trial balance still balances.'
    },
    {
      id: 'mcq-1-2-21',
      question: 'Recording a motor vehicle purchase as "motor expenses" is:',
      options: [
        'Error of original entry',
        'Error of principle',
        'Error of commission',
        'Transposition error'
      ],
      correctAnswer: 1,
      topic: 'Errors not affecting trial-balance agreement',
      rationale: 'Error of principle - capital expenditure wrongly recorded as revenue expenditure.'
    },
    {
      id: 'mcq-1-2-22',
      question: 'Posting to the wrong customer account (but still a receivables account) is:',
      options: [
        'Error of principle',
        'Error of commission',
        'Compensating error',
        'One-sided error'
      ],
      correctAnswer: 1,
      topic: 'Errors not affecting trial-balance agreement',
      rationale: 'Error of commission - correct type of account but wrong specific account within that type.'
    },

    // Error correction journal entries
    {
      id: 'mcq-1-2-23',
      question: 'To correct an error where a purchase of equipment (£1,000) was wrongly recorded as repairs expense, the journal entry would:',
      options: [
        'Debit Equipment £1,000, Credit Repairs £1,000',
        'Debit Repairs £1,000, Credit Equipment £1,000',
        'Debit Equipment £2,000, Credit Repairs £2,000',
        'No journal entry needed'
      ],
      correctAnswer: 0,
      topic: 'Error-correction journal entries',
      rationale: 'The equipment account needs debiting (should have been), and repairs needs crediting (wrongly debited).'
    },
    {
      id: 'mcq-1-2-24',
      question: 'When correcting an error through journal entries, what must always be included?',
      options: [
        'A detailed explanation',
        'Only the debit entry',
        'Both debit and credit entries for equal amounts',
        'Reference to the suspense account'
      ],
      correctAnswer: 2,
      topic: 'Error-correction journal entries',
      rationale: 'Journal entries must maintain double-entry - equal debits and credits.'
    },
    {
      id: 'mcq-1-2-25',
      question: 'If a £500 purchase was recorded as £50 (error of original entry), the correction journal should:',
      options: [
        'Debit Purchases £450, Credit Supplier £450',
        'Debit Supplier £450, Credit Purchases £450',
        'Debit Purchases £500, Credit Supplier £500',
        'No journal entry needed'
      ],
      correctAnswer: 0,
      topic: 'Error-correction journal entries',
      rationale: 'The difference (£500-£50=£450) must be added to purchases and supplier accounts.'
    },
    {
      id: 'mcq-1-2-26',
      question: 'A correcting entry to record omitted depreciation (£200) would be:',
      options: [
        'Debit Accumulated Depreciation, Credit Depreciation Expense',
        'Debit Depreciation Expense, Credit Accumulated Depreciation',
        'Debit Depreciation Expense, Credit Suspense Account',
        'No entry needed - depreciation is estimated'
      ],
      correctAnswer: 1,
      topic: 'Error-correction journal entries',
      rationale: 'Depreciation expense should have been debited; accumulated depreciation should have been credited.'
    },

    // Suspense accounts
    {
      id: 'mcq-1-2-27',
      question: 'What is the primary purpose of a suspense account?',
      options: [
        'To record doubtful debts',
        'To balance the trial balance while errors are being investigated',
        'To record transactions that need further authorization',
        'To calculate profits'
      ],
      correctAnswer: 1,
      topic: 'Suspense accounts',
      rationale: 'Suspense accounts are temporary accounts used to make the trial balance balance while errors are being found and corrected.'
    },
    {
      id: 'mcq-1-2-28',
      question: 'If the debit total of a trial balance is £5,000 less than the credit total, the suspense account would be:',
      options: [
        'Debited £5,000',
        'Credited £5,000',
        'No entry in suspense account',
        'Both debited and credited £5,000'
      ],
      correctAnswer: 0,
      topic: 'Suspense accounts',
      rationale: 'To increase the debit total and balance the trial balance, debit suspense £5,000.'
    },
    {
      id: 'mcq-1-2-29',
      question: 'When an error that caused a suspense account balance is corrected, the suspense account is:',
      options: [
        'Always debited',
        'Always credited',
        'Debited or credited to clear the original entry',
        'Deleted entirely'
      ],
      correctAnswer: 2,
      topic: 'Suspense accounts',
      rationale: 'The correction reverses the original suspense entry to clear the account.'
    },
    {
      id: 'mcq-1-2-30',
      question: 'What happens to a suspense account when all errors have been corrected?',
      options: [
        'It shows a permanent balance',
        'It should have a zero balance',
        'It becomes a permanent account in the ledger',
        'It is transferred to profit or loss'
      ],
      correctAnswer: 1,
      topic: 'Suspense accounts',
      rationale: 'Suspense is a temporary account - when all errors are corrected, its balance should be zero.'
    },

    // Revised profit statements
    {
      id: 'mcq-1-2-31',
      question: 'Which of the following errors would affect the profit calculation?',
      options: [
        'Error of commission in a customer account',
        'Complete reversal of entries',
        'Error of principle (capital vs revenue)',
        'Compensating error'
      ],
      correctAnswer: 2,
      topic: 'Revised profit statements',
      rationale: 'Errors of principle affect profit because capital expenditure wrongly recorded as revenue expense affects expenses.'
    },
    {
      id: 'mcq-1-2-32',
      question: 'If depreciation was omitted from the accounts, what effect would correcting this error have?',
      options: [
        'Increase profit',
        'Decrease profit',
        'No effect on profit',
        'Increase expenses but no profit effect'
      ],
      correctAnswer: 1,
      topic: 'Revised profit statements',
      rationale: 'Depreciation is an expense - recording omitted depreciation will increase expenses and decrease profit.'
    },
    {
      id: 'mcq-1-2-33',
      question: 'When preparing a revised profit statement, how are errors treated?',
      options: [
        'Only revenue account errors are corrected',
        'Only expense account errors are corrected',
        'All errors affecting revenue and expense accounts are adjusted',
        'Errors are disclosed but not corrected'
      ],
      correctAnswer: 2,
      topic: 'Revised profit statements',
      rationale: 'Revised profit statements adjust for all errors affecting revenue and expense accounts.'
    },

    // Control-account corrections
    {
      id: 'mcq-1-2-34',
      question: 'If a cash receipt of £200 was recorded in the receivables control account as £20, the correction would:',
      options: [
        'Credit receivables control account £180',
        'Debit receivables control account £180',
        'Credit bank account £180',
        'No correction needed'
      ],
      correctAnswer: 0,
      topic: 'Control-account corrections',
      rationale: 'Only £20 was credited to reduce receivables, but £200 should have been credited - need additional £180 credit.'
    },
    {
      id: 'mcq-1-2-35',
      question: 'What is used to reconcile control accounts?',
      options: [
        'The statement of financial position',
        'The personal ledgers and subsidiary records',
        'The cash book',
        'The sales ledger'
      ],
      correctAnswer: 1,
      topic: 'Control-account corrections',
      rationale: 'Control accounts are reconciled against the total balances from personal ledgers and supporting documents.'
    }
  ],

  fillBlank: [
    {
      id: 'fb-1-2-1',
      question: 'A trial balance is prepared to check the ________ accuracy of double-entry bookkeeping.',
      answer: 'arithmetic',
      alternatives: ['mathematical']
    },
    {
      id: 'fb-1-2-2',
      question: 'When the debit and credit totals of a trial balance do not agree, a ________ account is used to balance it.',
      answer: 'suspense',
      alternatives: []
    },
    {
      id: 'fb-1-2-3',
      question: 'A(n) ________ error occurs when two or more errors cancel each other out.',
      answer: 'compensating',
      alternatives: []
    },
    {
      id: 'fb-1-2-4',
      question: 'Recording a motor vehicle purchase as repairs is a(n) ________ error.',
      answer: 'principle',
      alternatives: ['error of principle']
    },
    {
      id: 'fb-1-2-5',
      question: 'A transposition error creates a difference that is always divisible by ________.',
      answer: '9',
      alternatives: ['nine']
    },
    {
      id: 'fb-1-2-6',
      question: 'Control accounts are used to verify the accuracy of ________ ledgers.',
      answer: 'personal',
      alternatives: ['individual', 'subsidiary']
    },
    {
      id: 'fb-1-2-7',
      question: 'A(n) ________ entry error occurs when a transaction is recorded on only one side of the ledger.',
      answer: 'one-sided',
      alternatives: ['one sided']
    },
    {
      id: 'fb-1-2-8',
      question: 'In a complete reversal error, debits are recorded as ________ and vice versa.',
      answer: 'credits',
      alternatives: ['credit']
    },
    {
      id: 'fb-1-2-9',
      question: 'A receivables control account normally has a ________ balance.',
      answer: 'debit',
      alternatives: []
    },
    {
      id: 'fb-1-2-10',
      question: 'Posting to the wrong customer account is a(n) ________ of commission.',
      answer: 'error',
      alternatives: ['mistake']
    },
    {
      id: 'fb-1-2-11',
      question: 'A payables control account normally has a ________ balance.',
      answer: 'credit',
      alternatives: []
    },
    {
      id: 'fb-1-2-12',
      question: 'Error correction entries are made through the ________ book.',
      answer: 'journal',
      alternatives: ['general journal']
    },
    {
      id: 'fb-1-2-13',
      question: 'When all errors are corrected, the suspense account balance should be ________.',
      answer: 'zero',
      alternatives: ['nil', '0']
    },
    {
      id: 'fb-1-2-14',
      question: 'Recording the wrong amount in both debit and credit accounts is a(n) ________ of original entry.',
      answer: 'error',
      alternatives: ['mistake']
    },
    {
      id: 'fb-1-2-15',
      question: 'If depreciation is omitted, correcting it will ________ profit.',
      answer: 'decrease',
      alternatives: ['reduce', 'lower']
    }
  ],

  dragDrop: [
    {
      id: 'dd-1-2-1',
      question: 'Categorize each error type based on whether it affects the trial balance agreement.',
      items: [
        'One-sided entry',
        'Complete reversal',
        'Compensating error',
        'Error of principle',
        'Error of commission',
        'Error of original entry',
        'Transposition error',
        'Wrong figure error (double-entry maintained)',
        'Double entry on same side'
      ],
      categories: {
        'Affects Trial Balance': ['One-sided entry', 'Transposition error', 'Double entry on same side', 'Wrong figure error (one-sided)'],
        'Does NOT Affect Trial Balance': ['Complete reversal', 'Compensating error', 'Error of principle', 'Error of commission', 'Error of original entry', 'Wrong figure error (double-entry maintained)']
      }
    },
    {
      id: 'dd-1-2-2',
      question: 'Match each entry to its correct side in a receivables control account.',
      items: [
        'Credit sales',
        'Cash received from customers',
        'Returns inwards',
        'Discounts allowed',
        'Bad debts written off',
        'Opening balance'
      ],
      categories: {
        'Debit Side': ['Credit sales', 'Opening balance'],
        'Credit Side': ['Cash received from customers', 'Returns inwards', 'Discounts allowed', 'Bad debts written off']
      }
    },
    {
      id: 'dd-1-2-3',
      question: 'Categorize accounts based on whether they normally have debit or credit balances.',
      items: [
        'Receivables control account',
        'Payables control account',
        'Accumulated depreciation',
        'Prepaid expenses',
        'Accrued expenses',
        'Inventory',
        'Capital'
      ],
      categories: {
        'Normally Debit Balance': ['Receivables control account', 'Prepaid expenses', 'Inventory'],
        'Normally Credit Balance': ['Payables control account', 'Accumulated depreciation', 'Accrued expenses', 'Capital']
      }
    },
    {
      id: 'dd-1-2-4',
      question: 'Classify each item as a capital expenditure or revenue expenditure.',
      items: [
        'Purchase of motor vehicle',
        'Motor vehicle repairs',
        'Installation of new machinery',
        'Routine maintenance',
        'Office furniture purchase',
        'Office cleaning costs',
        'Building extension',
        'Painting of office walls'
      ],
      categories: {
        'Capital Expenditure': ['Purchase of motor vehicle', 'Installation of new machinery', 'Office furniture purchase', 'Building extension'],
        'Revenue Expenditure': ['Motor vehicle repairs', 'Routine maintenance', 'Office cleaning costs', 'Painting of office walls']
      }
    },
    {
      id: 'dd-1-2-5',
      question: 'Match each error correction action with the suspense account entry needed.',
      items: [
        'Debit total lower than credit total by £1,000',
        'Debit total higher than credit total by £500',
        'Error corrected by debiting suspense £200',
        'Error corrected by crediting suspense £300'
      ],
      categories: {
        'Suspense Debit': ['Debit total lower than credit total by £1,000', 'Error corrected by crediting suspense £300'],
        'Suspense Credit': ['Debit total higher than credit total by £500', 'Error corrected by debiting suspense £200']
      }
    },
    {
      id: 'dd-1-2-6',
      question: 'Categorize errors based on whether they affect profit.',
      items: [
        'Error of principle (capital vs revenue)',
        'Error of commission in customer account',
        'Omitted depreciation',
        'Transposition error in asset account',
        'Error of original entry in expense',
        'One-sided entry in revenue account'
      ],
      categories: {
        'Affects Profit': ['Error of principle (capital vs revenue)', 'Omitted depreciation', 'Error of original entry in expense', 'One-sided entry in revenue account'],
        'Does NOT Affect Profit': ['Error of commission in customer account', 'Transposition error in asset account']
      }
    },
    {
      id: 'dd-1-2-7',
      question: 'Match each document to its role in control account reconciliation.',
      items: [
        'Individual customer accounts',
        'Individual supplier accounts',
        'Receivables ledger',
        'Payables ledger',
        'Sales invoices',
        'Purchase invoices'
      ],
      categories: {
        'Used for Receivables Control Account': ['Individual customer accounts', 'Receivables ledger', 'Sales invoices'],
        'Used for Payables Control Account': ['Individual supplier accounts', 'Payables ledger', 'Purchase invoices']
      }
    },
    {
      id: 'dd-1-2-8',
      question: 'Categorize journal entries based on the type of correction needed.',
      items: [
        'Equipment recorded as repairs (error of principle)',
        'Wrong amount recorded in both accounts (error of original entry)',
        'Complete reversal of entries',
        'One-sided entry recorded',
        'Transaction omitted entirely'
      ],
      categories: {
        'Requires Journal Entry with Suspense': ['One-sided entry recorded', 'Transaction omitted entirely'],
        'Requires Journal Entry without Suspense': ['Equipment recorded as repairs (error of principle)', 'Wrong amount recorded in both accounts (error of original entry)', 'Complete reversal of entries']
      }
    }
  ],

  sequence: [
    {
      id: 'seq-1-2-1',
      question: 'Put the steps for correcting an error using a suspense account in the correct order.',
      steps: [
        'Prepare trial balance and discover it does not balance',
        'Calculate the difference between debit and credit totals',
        'Open suspense account with the difference to balance trial balance',
        'Investigate to find the cause of the error',
        'Make journal entry to correct the original error',
        'Clear the suspense account through the correction entry'
      ]
    },
    {
      id: 'seq-1-2-2',
      question: 'Sequence the steps for preparing a revised profit statement.',
      steps: [
        'Identify all errors affecting revenue and expense accounts',
        'Calculate the effect of each error on profit (increase/decrease)',
        'Adjust the original profit figure for each error',
        'Calculate the revised profit or loss',
        'Prepare statement showing original and revised profit'
      ]
    },
    {
      id: 'seq-1-2-3',
      question: 'Order the steps for correcting an error of principle (equipment recorded as repairs).',
      steps: [
        'Identify the error: equipment wrongly debited to repairs',
        'Determine correction: equipment should be debited, repairs should be credited',
        'Prepare journal entry: debit equipment, credit repairs',
        'Post journal entry to ledger accounts',
        'Recalculate depreciation (if applicable)',
        'Prepare revised profit statement'
      ]
    },
    {
      id: 'seq-1-2-4',
      question: 'Sequence the steps for reconciling a receivables control account.',
      steps: [
        'List all individual customer balances from sales ledger',
        'Sum the total balance from the sales ledger',
        'Prepare receivables control account with all transactions',
        'Calculate closing balance of control account',
        'Compare control account balance with total from sales ledger',
        'Investigate and correct any differences'
      ]
    },
    {
      id: 'seq-1-2-5',
      question: 'Order the steps for identifying and correcting a transposition error.',
      steps: [
        'Calculate the trial balance difference',
        'Check if difference is divisible by 9',
        'Divide by 9 to identify potential transposition amount',
        'Review accounts with figures containing those digits',
        'Identify the incorrect entry',
        'Make correcting journal entry'
      ]
    },
    {
      id: 'seq-1-2-6',
      question: 'Sequence the process for correcting an error of original entry.',
      steps: [
        'Identify that the wrong amount was recorded in both accounts',
        'Calculate the difference between correct and recorded amounts',
        'Determine whether to debit or credit each account',
        'Prepare journal entry for the difference amount',
        'Post to affected ledger accounts',
        'Verify trial balance still balances'
      ]
    },
    {
      id: 'seq-1-2-7',
      question: 'Put the steps for clearing a suspense account in order.',
      steps: [
        'Identify the error that created the suspense balance',
        'Prepare correcting journal entry including suspense account',
        'Reverse the original suspense entry in the correction',
        'Post journal to suspense account',
        'Verify suspense account balance is now zero',
        'Close suspense account'
      ]
    },
    {
      id: 'seq-1-2-8',
      question: 'Sequence the steps for preparing a control account.',
      steps: [
        'Identify opening balance from previous period',
        'List all credit sales (debit side)',
        'List all cash receipts from customers (credit side)',
        'List returns inwards (credit side)',
        'List discounts allowed (credit side)',
        'List bad debts written off (credit side)',
        'Calculate closing balance'
      ]
    }
  ],

  keyword: [
    {
      id: 'kw-1-2-1',
      question: 'Explain the purpose of a trial balance. [2 marks]',
      keywords: ['arithmetic', 'accuracy', 'double-entry', 'equal', 'debits', 'credits', 'check', 'verify'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-2',
      question: 'State TWO types of errors that will NOT be detected by a trial balance. [2 marks]',
      keywords: ['compensating', 'complete reversal', 'error of principle', 'error of commission', 'error of original entry', 'omission'],
      minKeywords: 2
    },
    {
      id: 'kw-1-2-3',
      question: 'Explain what is meant by a compensating error. [3 marks]',
      keywords: ['two', 'errors', 'cancel', 'offset', 'equal', 'opposite', 'debits', 'credits', 'balance'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-4',
      question: 'Distinguish between an error of principle and an error of commission. [3 marks]',
      keywords: ['principle', 'wrong type', 'capital', 'revenue', 'commission', 'same type', 'wrong account', 'different'],
      minKeywords: 4
    },
    {
      id: 'kw-1-2-5',
      question: 'Explain the purpose of a suspense account. [2 marks]',
      keywords: ['balance', 'trial balance', 'temporary', 'investigate', 'errors', 'difference', 'debits', 'credits'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-6',
      question: 'State the characteristics of a transposition error. [2 marks]',
      keywords: ['digits', 'swapped', 'reversed', 'divisible', '9', 'nine', 'difference'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-7',
      question: 'Explain the purpose of control accounts. [3 marks]',
      keywords: ['verify', 'accuracy', 'personal', 'ledger', 'individual', 'accounts', 'check', 'detect', 'errors', 'fraud'],
      minKeywords: 4
    },
    {
      id: 'kw-1-2-8',
      question: 'A trial balance shows debit total £15,000 and credit total £15,600. Explain how this would be recorded in a suspense account. [2 marks]',
      keywords: ['credit', '600', 'six hundred', 'difference', 'balance', 'suspense', 'debited', 'credited'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-9',
      question: 'Explain how an error of principle affects the profit calculation. [3 marks]',
      keywords: ['capital', 'expenditure', 'revenue', 'expense', 'profit', 'understated', 'overstated', 'assets', 'expenses'],
      minKeywords: 4
    },
    {
      id: 'kw-1-2-10',
      question: 'Describe the process of reconciling a receivables control account. [3 marks]',
      keywords: ['compare', 'control', 'account', 'sales', 'ledger', 'individual', 'balances', 'differences', 'correct'],
      minKeywords: 4
    },
    {
      id: 'kw-1-2-11',
      question: 'Explain what is meant by an error of original entry. [2 marks]',
      keywords: ['wrong amount', 'correct accounts', 'both', 'sides', 'recorded', 'double entry', 'maintained'],
      minKeywords: 3
    },
    {
      id: 'kw-1-2-12',
      question: 'State how a revised profit statement is prepared when errors are discovered. [3 marks]',
      keywords: ['original', 'profit', 'adjust', 'errors', 'revenue', 'expenses', 'calculate', 'revised', 'increase', 'decrease'],
      minKeywords: 4
    }
  ],

  flashcards: [
    // Trial balance purpose
    {
      id: 'fc-1-2-1',
      front: 'What is the primary purpose of a trial balance?',
      back: 'To check the arithmetic accuracy of double-entry bookkeeping by verifying that total debits equal total credits.'
    },
    {
      id: 'fc-1-2-2',
      front: 'What accounts are included in a trial balance?',
      back: 'All ledger account balances including assets, liabilities, equity, income, and expenses.'
    },
    {
      id: 'fc-1-2-3',
      front: 'When should a trial balance be prepared?',
      back: 'Before preparing financial statements, typically at regular intervals (monthly, quarterly, annually).'
    },

    // Trial balance limitations
    {
      id: 'fc-1-2-4',
      front: 'Does a balanced trial balance prove all transactions are correct?',
      back: 'No. A balanced trial balance only shows arithmetic accuracy. Certain errors (compensating, complete reversal, error of principle, error of commission, error of original entry) will still balance.'
    },
    {
      id: 'fc-1-2-5',
      front: 'What is a compensating error?',
      back: 'Two or more errors that happen to cancel each other out, keeping debits and credits equal despite the errors.'
    },
    {
      id: 'fc-1-2-6',
      front: 'What is an error of principle?',
      back: 'A transaction recorded in the wrong TYPE of account (e.g., capital expenditure recorded as revenue expense).'
    },
    {
      id: 'fc-1-2-7',
      front: 'What is an error of commission?',
      back: 'A transaction recorded in the wrong specific account but within the correct type (e.g., wrong customer account in receivables).'
    },
    {
      id: 'fc-1-2-8',
      front: 'What is an error of original entry?',
      back: 'The wrong amount is recorded in BOTH debit and credit accounts, but the double-entry principle is maintained.'
    },
    {
      id: 'fc-1-2-9',
      front: 'What is a complete reversal error?',
      back: 'Debits are recorded as credits and credits as debits, but the amounts are equal, so the trial balance still balances.'
    },
    {
      id: 'fc-1-2-10',
      front: 'What is a transposition error?',
      back: 'Digits are swapped in a number (e.g., £52 recorded as £25), creating a difference divisible by 9.'
    },

    // Receivables and payables control accounts
    {
      id: 'fc-1-2-11',
      front: 'What is the purpose of control accounts?',
      back: 'To verify the accuracy of personal (subsidiary) ledger accounts by aggregating all transactions affecting receivables or payables.'
    },
    {
      id: 'fc-1-2-12',
      front: 'What is the normal balance of a receivables control account?',
      back: 'Debit balance - receivables are assets owed to the business.'
    },
    {
      id: 'fc-1-2-13',
      front: 'What is the normal balance of a payables control account?',
      back: 'Credit balance - payables are liabilities owed by the business.'
    },
    {
      id: 'fc-1-2-14',
      front: 'What entries appear on the debit side of a receivables control account?',
      back: 'Opening balance, credit sales, and anything that increases receivables.'
    },
    {
      id: 'fc-1-2-15',
      front: 'What entries appear on the credit side of a receivables control account?',
      back: 'Cash receipts, returns inwards, discounts allowed, bad debts written off - anything that reduces receivables.'
    },
    {
      id: 'fc-1-2-16',
      front: 'What entries appear on the credit side of a payables control account?',
      back: 'Opening balance, credit purchases, and anything that increases payables.'
    },
    {
      id: 'fc-1-2-17',
      front: 'What entries appear on the debit side of a payables control account?',
      back: 'Cash payments, returns outwards, discounts received - anything that reduces payables.'
    },

    // Errors affecting TB agreement
    {
      id: 'fc-1-2-18',
      front: 'What is a one-sided entry error?',
      back: 'A transaction recorded only on one side of the ledger (only debit or only credit), causing the trial balance to be out of balance.'
    },
    {
      id: 'fc-1-2-19',
      front: 'What is double entry on the same side?',
      back: 'A transaction recorded twice on the same side (e.g., both debits), causing the trial balance to be out of balance.'
    },
    {
      id: 'fc-1-2-20',
      front: 'What is a wrong figure error affecting the trial balance?',
      back: 'An incorrect amount entered on only one side, creating an imbalance between debits and credits.'
    },
    {
      id: 'fc-1-2-21',
      front: 'What is an omission error?',
      back: 'A transaction completely omitted from the ledger, affecting the trial balance if only one side was meant to be recorded.'
    },

    // Error correction
    {
      id: 'fc-1-2-22',
      front: 'How are errors corrected?',
      back: 'Through journal entries that maintain double-entry bookkeeping, with equal debits and credits.'
    },
    {
      id: 'fc-1-2-23',
      front: 'How do you correct an error of principle (e.g., equipment recorded as repairs)?',
      back: 'Debit the correct account (equipment) and credit the wrong account (repairs).'
    },
    {
      id: 'fc-1-2-24',
      front: 'How do you correct an error of original entry?',
      back: 'Calculate the difference between correct and recorded amounts, then debit or credit the difference to each account.'
    },
    {
      id: 'fc-1-2-25',
      front: 'How do you correct a complete reversal?',
      back: 'Repeat the entry (debit what should be debited, credit what should be credited) to reverse the incorrect entry.'
    },

    // Suspense accounts
    {
      id: 'fc-1-2-26',
      front: 'What is a suspense account?',
      back: 'A temporary account used to balance the trial balance while errors are being investigated and corrected.'
    },
    {
      id: 'fc-1-2-27',
      front: 'When do you open a suspense account?',
      back: 'When the trial balance does not balance - the difference is entered in suspense to make debits equal credits.'
    },
    {
      id: 'fc-1-2-28',
      front: 'If debit total is less than credit total, how is suspense recorded?',
      back: 'Debit the suspense account for the difference to increase the debit total.'
    },
    {
      id: 'fc-1-2-29',
      front: 'If debit total is more than credit total, how is suspense recorded?',
      back: 'Credit the suspense account for the difference to increase the credit total.'
    },
    {
      id: 'fc-1-2-30',
      front: 'What happens to the suspense account when errors are corrected?',
      back: 'The suspense account is cleared (debited or credited) to reverse the original entry, resulting in a zero balance.'
    },

    // Revised profit statements
    {
      id: 'fc-1-2-31',
      front: 'Which errors affect profit calculation?',
      back: 'Errors affecting revenue and expense accounts: error of principle (capital vs revenue), error of original entry in expenses/revenue, one-sided entries in revenue/expenses.'
    },
    {
      id: 'fc-1-2-32',
      front: 'How does omitted depreciation affect profit?',
      back: 'Depreciation is an expense. Omitting it overstates profit; correcting it reduces profit.'
    },
    {
      id: 'fc-1-2-33',
      front: 'How does recording capital expenditure as revenue expense affect profit?',
      back: 'Profit is understated because an asset purchase is incorrectly treated as an expense.'
    },
    {
      id: 'fc-1-2-34',
      front: 'How is a revised profit statement prepared?',
      back: 'Start with original profit, adjust for each error affecting revenue/expenses, calculate revised profit.'
    },

    // Control-account corrections
    {
      id: 'fc-1-2-35',
      front: 'What documents are used to reconcile control accounts?',
      back: 'Individual personal ledger accounts, supporting documents (invoices, receipts), and detailed transaction records.'
    },
    {
      id: 'fc-1-2-36',
      front: 'What is the purpose of reconciling control accounts?',
      back: 'To detect errors in personal ledgers, prevent fraud, and ensure the accuracy of receivables and payables balances.'
    },
    {
      id: 'fc-1-2-37',
      front: 'How do you correct an error in a control account?',
      back: 'Identify the discrepancy, determine the correction needed, make a journal entry, and post to the control account.'
    },
    {
      id: 'fc-1-2-38',
      front: 'What is the relationship between control accounts and personal ledgers?',
      back: 'Control accounts summarize the total of personal ledger accounts. The balance of the control account should equal the sum of individual personal ledger balances.'
    }
  ]
};
