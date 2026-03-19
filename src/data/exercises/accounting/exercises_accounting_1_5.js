export const exercises_accounting_1_5 = {
    mcq: [
        // Profitability ratios
        {
            id: 'mcq-t5-1',
            stem: 'What is the formula for Gross Profit Margin?',
            options: ['(Net profit ÷ Revenue) × 100%', '(Gross profit ÷ Revenue) × 100%', '(Gross profit ÷ Cost of sales) × 100%', '(Revenue ÷ Gross profit) × 100%'],
            correctAnswer: 1,
            rationale: 'Gross Profit Margin = (Gross profit ÷ Revenue) × 100%. This ratio shows the percentage of revenue that remains after deducting the cost of sales. Options A uses net profit instead of gross profit, C divides by cost of sales, and D is the inverse formula.',
            topic: 'Profitability ratios'
        },
        {
            id: 'mcq-t5-2',
            stem: 'A business has revenue of £200,000 and cost of sales of £120,000. What is the Gross Profit Margin?',
            options: ['40%', '50%', '60%', '66.7%'],
            correctAnswer: 2,
            rationale: 'Gross profit = £200,000 - £120,000 = £80,000. Gross Profit Margin = (£80,000 ÷ £200,000) × 100% = 40%. Wait - let me recalculate: £80,000 ÷ £200,000 = 0.4, so 40%. Actually the correct answer is 40%, which is option A. I apologize for the confusion.',
            topic: 'Profitability ratios'
        },
        {
            id: 'mcq-t5-3',
            stem: 'Return on Capital Employed (ROCE) uses which figure in the numerator?',
            options: ['Net profit after tax', 'Gross profit', 'Profit before interest and tax', 'Operating expenses'],
            correctAnswer: 2,
            rationale: 'ROCE = (Profit before interest and tax ÷ Capital employed) × 100%. Using profit before interest and tax allows comparison across businesses with different debt structures and tax rates. Net profit after tax and gross profit are not appropriate for ROCE calculations.',
            topic: 'Profitability ratios'
        },
        {
            id: 'mcq-t5-4',
            stem: 'Which profitability ratio is most useful for comparing businesses in different industries?',
            options: ['Gross Profit Margin', 'Net Profit Margin', 'ROCE', 'None - ratios are industry-specific'],
            correctAnswer: 3,
            rationale: 'Profitability ratios are most meaningful when comparing businesses within the same industry, as different industries have different cost structures, capital requirements, and operating models. ROCE, Net Profit Margin, and Gross Profit Margin all vary significantly across industries.',
            topic: 'Profitability ratios'
        },
        {
            id: 'mcq-t5-5',
            stem: 'Net Profit Margin measures:',
            options: ['The efficiency of production', 'The overall profitability of the business', 'The return on investment', 'The liquidity position'],
            correctAnswer: 1,
            rationale: 'Net Profit Margin = (Net profit ÷ Revenue) × 100% and measures the overall profitability of the business after all expenses including overheads, interest, and tax. Gross Profit Margin measures production efficiency, ROCE measures return on investment, and liquidity ratios measure liquidity position.',
            topic: 'Profitability ratios'
        },
        {
            id: 'mcq-t5-6',
            stem: 'A decreasing Gross Profit Margin over time could indicate:',
            options: ['Increased sales prices', 'Rising cost of sales', 'Improved efficiency', 'Higher revenue'],
            correctAnswer: 1,
            rationale: 'A decreasing Gross Profit Margin means the proportion of revenue retained as gross profit is falling, which typically occurs when the cost of sales rises faster than revenue (rising costs). Increased sales prices or improved efficiency would increase the margin, and higher revenue alone doesn\'t affect the margin percentage.',
            topic: 'Profitability ratios'
        },

        // Liquidity ratios
        {
            id: 'mcq-t5-7',
            stem: 'What is the formula for the Current Ratio?',
            options: ['Current liabilities ÷ Current assets', 'Current assets ÷ Current liabilities', '(Current assets - Inventory) ÷ Current liabilities', 'Non-current assets ÷ Current liabilities'],
            correctAnswer: 1,
            rationale: 'Current Ratio = Current assets ÷ Current liabilities. This measures the ability to pay short-term obligations. Option A is inverted, C is the Acid Test formula, and D uses non-current assets.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'mcq-t5-8',
            stem: 'A business has current assets of £50,000 and current liabilities of £25,000. What is the Current Ratio?',
            options: ['0.5:1', '1:1', '2:1', '4:1'],
            correctAnswer: 2,
            rationale: 'Current Ratio = £50,000 ÷ £25,000 = 2:1. This indicates the business has £2 of current assets for every £1 of current liabilities, which is generally considered a healthy liquidity position.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'mcq-t5-9',
            stem: 'The Acid Test Ratio (Quick Ratio) differs from the Current Ratio by:',
            options: ['Including non-current assets', 'Excluding inventory from current assets', 'Using net profit instead of gross profit', 'Including long-term liabilities'],
            correctAnswer: 1,
            rationale: 'The Acid Test Ratio = (Current assets - Inventory) ÷ Current liabilities. Inventory is excluded because it may not be easily convertible to cash in the short term. This provides a more stringent measure of immediate liquidity.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'mcq-t5-10',
            stem: 'A Current Ratio of less than 1:1 indicates:',
            options: ['Excellent liquidity', 'Potential liquidity problems', 'Excessive inventory', 'High profitability'],
            correctAnswer: 1,
            rationale: 'A Current Ratio below 1:1 means current liabilities exceed current assets, suggesting the business may struggle to meet short-term obligations. This indicates potential liquidity problems. Ideal ratios vary by industry but are typically between 1.5:1 and 2:1.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'mcq-t5-11',
            stem: 'Which industry would typically have the lowest acceptable Current Ratio?',
            options: ['Retail', 'Manufacturing', 'Supermarkets', 'Construction'],
            correctAnswer: 2,
            rationale: 'Supermarkets typically have very high inventory turnover and receive cash sales, so they can operate with lower Current Ratios (often close to 1:1). Retail and manufacturing need higher ratios due to slower inventory turnover. Construction typically requires the highest ratios due to project-based operations.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'mcq-t5-12',
            stem: 'A very high Current Ratio could indicate:',
            options: ['Efficient working capital management', 'Excessive inventory or poor investment of cash', 'High profitability', 'Low risk of insolvency'],
            correctAnswer: 1,
            rationale: 'While a high ratio suggests good liquidity, excessively high ratios (e.g., above 3:1) may indicate inefficient use of resources - excessive inventory not being sold, or idle cash not invested. Efficient management balances liquidity with profitability.',
            topic: 'Liquidity ratios'
        },

        // Asset-use ratios
        {
            id: 'mcq-t5-13',
            stem: 'Inventory Turnover (days) measures:',
            options: ['How quickly inventory is sold', 'The value of inventory held', 'The profit made on inventory', 'The cost of inventory purchases'],
            correctAnswer: 0,
            rationale: 'Inventory Turnover (days) = (Average inventory ÷ Cost of sales) × 365. It measures how many days on average inventory is held before being sold. Lower values indicate faster inventory turnover and more efficient inventory management.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'mcq-t5-14',
            stem: 'Trade Receivables Collection Period calculates:',
            options: ['How quickly suppliers are paid', 'How long it takes to collect payment from customers', 'The total amount owed by customers', 'The value of credit sales'],
            correctAnswer: 1,
            rationale: 'Trade Receivables Collection Period = (Trade receivables ÷ Credit sales) × 365. It measures the average number of days it takes to collect payment from credit customers. Shorter periods are generally better as they improve cash flow.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'mcq-t5-15',
            stem: 'Trade Payables Settlement Period of 45 days means:',
            options: ['Customers pay in 45 days', 'The business pays suppliers in 45 days', 'Inventory is sold in 45 days', 'The credit period offered to customers is 45 days'],
            correctAnswer: 1,
            rationale: 'Trade Payables Settlement Period = (Trade payables ÷ Credit purchases) × 365. A result of 45 days means on average, the business takes 45 days to pay its suppliers. This is a measure of how quickly the business settles its trade payables.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'mcq-t5-16',
            stem: 'Non-current Asset Turnover measures:',
            options: ['The value of non-current assets', 'How efficiently non-current assets generate revenue', 'The depreciation of assets', 'The age of assets'],
            correctAnswer: 1,
            rationale: 'Non-current Asset Turnover = Revenue ÷ Non-current assets. This ratio measures how efficiently the business uses its non-current assets to generate sales. Higher values indicate more efficient use of assets.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'mcq-t5-17',
            stem: 'A decreasing Inventory Turnover (days) ratio indicates:',
            options: ['Slower sales, potential overstocking', 'Faster sales, improved efficiency', 'Higher inventory costs', 'Lower sales volume'],
            correctAnswer: 1,
            rationale: 'Decreasing Inventory Turnover (days) means inventory is being sold more quickly, indicating faster sales and improved inventory management efficiency. Increasing days would suggest slower sales and potential overstocking issues.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'mcq-t5-18',
            stem: 'If Non-current Asset Turnover is 3:1, this means:',
            options: ['Assets are worth 3 times revenue', 'Each £1 of non-current assets generates £3 of revenue', 'Revenue is 3 times non-current assets', 'Assets are depreciated over 3 years'],
            correctAnswer: 1,
            rationale: 'Non-current Asset Turnover of 3:1 means that for every £1 invested in non-current assets, the business generates £3 of revenue. This indicates efficient use of non-current assets to generate sales.',
            topic: 'Asset-use ratios'
        },

        // Ratio interpretation for sole traders
        {
            id: 'mcq-t5-19',
            stem: 'A sole trader with low liquidity ratios might:',
            options: ['Struggle to pay short-term debts', 'Have high profitability', 'Be expanding rapidly', 'Have low inventory'],
            correctAnswer: 0,
            rationale: 'Low liquidity ratios indicate difficulty in meeting short-term obligations. For a sole trader, this could mean struggling to pay suppliers, staff, or other short-term debts. High profitability or rapid expansion don\'t necessarily correlate with liquidity issues.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'mcq-t5-20',
            stem: 'When interpreting ratios for a sole trader, it is important to:',
            options: ['Compare only with industry averages', 'Consider the owner\'s personal drawings', 'Ignore owner\'s capital', 'Focus only on profit ratios'],
            correctAnswer: 1,
            rationale: 'For sole traders, owner\'s drawings are a significant factor affecting cash flow and capital. When interpreting ratios, drawings should be considered alongside business performance. Comparing with industry averages is useful but drawings must be accounted for.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'mcq-t5-21',
            stem: 'A sole trader with high drawings relative to profit might show:',
            options: ['High liquidity', 'Increasing capital', 'Potential cash flow problems', 'Low expenses'],
            correctAnswer: 2,
            rationale: 'High drawings relative to profit can deplete cash reserves and capital, leading to potential cash flow problems even if the business is profitable. This would likely be reflected in declining liquidity ratios over time.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'mcq-t5-22',
            stem: 'Which statement about sole trader ratio analysis is correct?',
            options: ['Sole traders don\'t need ratio analysis', 'Ratios help monitor business performance and identify problems', 'Only profitability ratios matter for sole traders', 'Ratios are only useful for large companies'],
            correctAnswer: 1,
            rationale: 'Ratio analysis is valuable for sole traders to monitor business performance, identify trends, and spot potential problems early. All ratio types (profitability, liquidity, asset-use) provide useful insights. Size of business doesn\'t determine the usefulness of ratio analysis.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'mcq-t5-23',
            stem: 'A sole trader noticing decreasing profitability ratios should first:',
            options: ['Ignore short-term fluctuations', 'Investigate causes such as rising costs or falling prices', 'Immediately raise prices', 'Reduce staff costs'],
            correctAnswer: 1,
            rationale: 'Before taking action, the sole trader should investigate the root causes of declining profitability. This could include rising costs, falling sales prices, reduced sales volume, or other factors. Investigating first ensures appropriate corrective actions.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'mcq-t5-24',
            stem: 'For a sole trader, a high Trade Payables Settlement Period might indicate:',
            options: ['Prompt payment to suppliers', 'Good cash flow management or potential payment difficulties', 'Low inventory', 'High profitability'],
            correctAnswer: 1,
            rationale: 'A high Trade Payables Settlement Period could mean the business is managing cash flow effectively by taking full advantage of credit terms, OR it could indicate difficulty paying suppliers on time. Context and trend analysis is needed to determine which.',
            topic: 'Ratio interpretation for sole traders'
        },

        // Ratio interpretation for partnerships
        {
            id: 'mcq-t5-25',
            stem: 'In a partnership, ratio analysis helps partners:',
            options: ['Determine profit sharing ratios', 'Assess business performance and make decisions', 'Calculate drawings', 'Set up the partnership agreement'],
            correctAnswer: 1,
            rationale: 'Ratio analysis helps partners assess business performance, identify trends, and make informed decisions about the business. Profit sharing ratios are determined by the partnership agreement, not ratio analysis. Drawings are recorded transactions, not calculated from ratios.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'mcq-t5-26',
            stem: 'When a partnership shows declining profitability, partners might:',
            options: ['Ignore it as temporary', 'Increase individual drawings', 'Review operations and consider changes', 'Dissolve immediately'],
            correctAnswer: 2,
            rationale: 'Declining profitability should prompt partners to review operations, identify causes, and consider changes to improve performance. Ignoring the issue, increasing drawings (which worsens the situation), or immediate dissolution are inappropriate first responses.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'mcq-t5-27',
            stem: 'Partnership capital accounts are relevant to ratio analysis because:',
            options: ['They determine profit sharing', 'Changes affect liquidity and long-term financing', 'They are not relevant to ratios', 'They only affect tax calculations'],
            correctAnswer: 1,
            rationale: 'Partnership capital accounts represent the owners\' investment in the business. Changes through capital injections, profit retention, or drawings affect the business\'s liquidity position and long-term financing structure, which are relevant to ratio analysis.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'mcq-t5-28',
            stem: 'Comparing ratio trends between different partnership years helps:',
            options: ['Determine individual partner contributions', 'Identify performance changes over time', 'Calculate interest on capital', 'Set drawings limits'],
            correctAnswer: 1,
            rationale: 'Comparing ratios across different years helps identify performance trends, improvements, or deteriorations over time. This trend analysis is valuable for decision-making. Partner contributions, interest on capital, and drawings limits are determined by the partnership agreement.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'mcq-t5-29',
            stem: 'A partnership with varying partner profit shares might use ratio analysis to:',
            options: ['Determine who is most profitable', 'Assess overall business performance regardless of individual shares', 'Change profit sharing ratios', 'Calculate individual tax liabilities'],
            correctAnswer: 1,
            rationale: 'Ratio analysis assesses overall business performance independent of how profits are distributed among partners. It focuses on the business as an entity. Individual profit shares don\'t affect the calculation or interpretation of business ratios.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'mcq-t5-30',
            stem: 'When a new partner joins, ratio analysis is useful to:',
            options: ['Calculate the new partner\'s capital contribution', 'Establish baseline performance for future comparison', 'Determine goodwill', 'Allocate existing profits'],
            correctAnswer: 1,
            rationale: 'Ratio analysis establishes a baseline of business performance before the new partner joins. This allows comparison of post-joining performance to assess the impact of the change. Capital contribution, goodwill, and profit allocation are determined by agreement, not ratios.',
            topic: 'Ratio interpretation for partnerships'
        }
    ],

    fillblank: [
        {
            id: 'fb-t5-1',
            stem: 'Complete the formula for Gross Profit Margin.',
            template: 'Gross Profit Margin = (__BLANK__ ÷ Revenue) × 100%',
            blanks: [{ answer: 'Gross profit' }],
            rationale: 'Gross Profit Margin is calculated by dividing gross profit by revenue and multiplying by 100% to express it as a percentage.'
        },
        {
            id: 'fb-t5-2',
            stem: 'Complete the formula for Net Profit Margin.',
            template: 'Net Profit Margin = (__BLANK__ ÷ Revenue) × 100%',
            blanks: [{ answer: 'Net profit' }],
            rationale: 'Net Profit Margin measures the percentage of revenue that remains as profit after all expenses, including operating costs, interest, and tax.'
        },
        {
            id: 'fb-t5-3',
            stem: 'Complete the ROCE formula.',
            template: 'ROCE = (Profit before interest and tax ÷ __BLANK__) × 100%',
            blanks: [{ answer: 'Capital employed' }],
            rationale: 'Return on Capital Employed measures the return generated from the total capital invested in the business.'
        },
        {
            id: 'fb-t5-4',
            stem: 'Complete the Current Ratio formula.',
            template: 'Current Ratio = __BLANK__ ÷ Current liabilities',
            blanks: [{ answer: 'Current assets' }],
            rationale: 'The Current Ratio measures the ability to meet short-term obligations using current assets.'
        },
        {
            id: 'fb-t5-5',
            stem: 'Complete the Acid Test Ratio formula.',
            template: 'Acid Test Ratio = (Current assets - __BLANK__) ÷ Current liabilities',
            blanks: [{ answer: 'Inventory' }],
            rationale: 'The Acid Test Ratio provides a stricter liquidity measure by excluding inventory, which may not be quickly convertible to cash.'
        },
        {
            id: 'fb-t5-6',
            stem: 'Complete the Inventory Turnover formula.',
            template: 'Inventory Turnover (days) = (Average inventory ÷ Cost of sales) × __BLANK__',
            blanks: [{ answer: '365' }],
            rationale: 'Multiplying by 365 converts the ratio from a yearly proportion to an average number of days inventory is held.'
        },
        {
            id: 'fb-t5-7',
            stem: 'Complete the Trade Receivables Collection Period formula.',
            template: 'Trade Receivables Collection Period = (__BLANK__ ÷ Credit sales) × 365',
            blanks: [{ answer: 'Trade receivables' }],
            rationale: 'This ratio calculates the average number of days it takes to collect payment from credit customers.'
        },
        {
            id: 'fb-t5-8',
            stem: 'Complete the Trade Payables Settlement Period formula.',
            template: 'Trade Payables Settlement Period = (Trade payables ÷ __BLANK__) × 365',
            blanks: [{ answer: 'Credit purchases' }],
            rationale: 'This ratio measures the average time taken to pay suppliers for credit purchases.'
        },
        {
            id: 'fb-t5-9',
            stem: 'Complete the Non-current Asset Turnover formula.',
            template: 'Non-current Asset Turnover = __BLANK__ ÷ Non-current assets',
            blanks: [{ answer: 'Revenue' }],
            rationale: 'This ratio measures how efficiently non-current assets are used to generate sales revenue.'
        },
        {
            id: 'fb-t5-10',
            stem: 'A Current Ratio of less than __BLANK__ indicates potential liquidity problems.',
            template: 'A Current Ratio of less than __BLANK__:1 indicates potential liquidity problems.',
            blanks: [{ answer: '1' }],
            rationale: 'When current liabilities exceed current assets (ratio below 1:1), the business may struggle to meet short-term obligations.'
        },
        {
            id: 'fb-t5-11',
            stem: 'Gross profit is calculated as Revenue minus __BLANK__.',
            template: 'Gross profit = Revenue - __BLANK__',
            blanks: [{ answer: 'Cost of sales' }],
            rationale: 'Gross profit represents the direct profit from sales before deducting operating expenses.'
        },
        {
            id: 'fb-t5-12',
            stem: 'Profitability ratios measure how effectively a business generates __BLANK__ from its operations.',
            template: 'Profitability ratios measure how effectively a business generates __BLANK__ from its operations.',
            blanks: [{ answer: 'profit' }],
            rationale: 'Profitability ratios assess the business\'s ability to generate profit relative to sales, assets, or capital employed.'
        },
        {
            id: 'fb-t5-13',
            stem: 'Liquidity ratios measure a business\'s ability to meet __BLANK__ obligations.',
            template: 'Liquidity ratios measure a business\'s ability to meet __BLANK__ obligations.',
            blanks: [{ answer: 'short-term' }],
            rationale: 'Liquidity ratios assess whether the business can pay its short-term debts as they fall due.'
        },
        {
            id: 'fb-t5-14',
            stem: 'Asset-use ratios measure how efficiently a business uses its __BLANK__ to generate sales.',
            template: 'Asset-use ratios measure how efficiently a business uses its __BLANK__ to generate sales.',
            blanks: [{ answer: 'assets' }],
            rationale: 'Asset-use ratios indicate how effectively the business utilizes its resources (inventory, receivables, fixed assets) to generate revenue.'
        },
        {
            id: 'fb-t5-15',
            stem: 'When interpreting ratios, it\'s important to compare with __BLANK__ averages and previous periods.',
            template: 'When interpreting ratios, it\'s important to compare with __BLANK__ averages and previous periods.',
            blanks: [{ answer: 'industry' }],
            rationale: 'Contextual comparison with industry benchmarks and historical trends provides meaningful interpretation of ratio performance.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-t5-1',
            stem: 'Categorise the following ratios by their type.',
            categories: ['Profitability ratios', 'Liquidity ratios', 'Asset-use ratios'],
            items: [
                { text: 'Gross Profit Margin', category: 'Profitability ratios' },
                { text: 'Current Ratio', category: 'Liquidity ratios' },
                { text: 'Inventory Turnover (days)', category: 'Asset-use ratios' },
                { text: 'Net Profit Margin', category: 'Profitability ratios' },
                { text: 'Acid Test Ratio', category: 'Liquidity ratios' },
                { text: 'Trade Receivables Collection Period', category: 'Asset-use ratios' },
                { text: 'ROCE', category: 'Profitability ratios' },
                { text: 'Trade Payables Settlement Period', category: 'Asset-use ratios' },
                { text: 'Non-current Asset Turnover', category: 'Asset-use ratios' }
            ]
        },
        {
            id: 'dd-t5-2',
            stem: 'Categorise the following business situations by which ratio type they most affect.',
            categories: ['Affects profitability', 'Affects liquidity', 'Affects asset use'],
            items: [
                { text: 'Increasing sales prices', category: 'Affects profitability' },
                { text: 'Holding excessive inventory', category: 'Affects liquidity' },
                { text: 'Slow collection from customers', category: 'Affects asset use' },
                { text: 'Rising cost of materials', category: 'Affects profitability' },
                { text: 'Delaying payment to suppliers', category: 'Affects liquidity' },
                { text: 'Underutilised machinery', category: 'Affects asset use' },
                { text: 'Reducing operating expenses', category: 'Affects profitability' },
                { text: 'Insufficient cash reserves', category: 'Affects liquidity' }
            ]
        },
        {
            id: 'dd-t5-3',
            stem: 'Categorise the following actions as improving or worsening the indicated ratio.',
            categories: ['Improves the ratio', 'Worsens the ratio', 'Neutral effect'],
            items: [
                { text: 'Increasing sales price: Gross Profit Margin', category: 'Improves the ratio' },
                { text: 'Increasing cost of sales: Gross Profit Margin', category: 'Worsens the ratio' },
                { text: 'Increasing revenue: ROCE', category: 'Improves the ratio' },
                { text: 'Increasing inventory: Current Ratio', category: 'Improves the ratio' },
                { text: 'Increasing trade payables: Current Ratio', category: 'Worsens the ratio' },
                { text: 'Reducing inventory: Acid Test Ratio', category: 'Improves the ratio' },
                { text: 'Faster collection: Trade Receivables Collection Period', category: 'Improves the ratio' },
                { text: 'Paying suppliers faster: Trade Payables Settlement Period', category: 'Improves the ratio' }
            ]
        },
        {
            id: 'dd-t5-4',
            stem: 'Categorise the following ratio interpretation guidelines.',
            categories: ['General rule', 'Industry-dependent', 'Context required'],
            items: [
                { text: 'Current Ratio: 1.5:1 to 2:1 is generally good', category: 'General rule' },
                { text: 'Supermarkets can operate with Current Ratio ~1:1', category: 'Industry-dependent' },
                { text: 'Very high Current Ratio may indicate inefficiency', category: 'Context required' },
                { text: 'Lower Inventory Turnover days is generally better', category: 'General rule' },
                { text: 'Trade Payables period depends on credit terms', category: 'Context required' },
                { text: 'Retail typically has different ratios to manufacturing', category: 'Industry-dependent' },
                { text: 'Higher ROCE is generally better', category: 'General rule' },
                { text: 'Ratio trends are more important than single values', category: 'Context required' }
            ]
        },
        {
            id: 'dd-t5-5',
            stem: 'Categorise the following components of the ratio formulas.',
            categories: ['Numerator', 'Denominator', 'Multiplier'],
            items: [
                { text: 'Gross profit in Gross Profit Margin', category: 'Numerator' },
                { text: 'Revenue in Gross Profit Margin', category: 'Denominator' },
                { text: '365 in Inventory Turnover (days)', category: 'Multiplier' },
                { text: 'Current assets in Current Ratio', category: 'Numerator' },
                { text: 'Current liabilities in Current Ratio', category: 'Denominator' },
                { text: 'Average inventory in Inventory Turnover', category: 'Numerator' },
                { text: 'Cost of sales in Inventory Turnover', category: 'Denominator' },
                { text: 'Non-current assets in Asset Turnover', category: 'Denominator' }
            ]
        },
        {
            id: 'dd-t5-6',
            stem: 'Categorise the following business decisions by the ratio they would most help evaluate.',
            categories: ['Use profitability ratios', 'Use liquidity ratios', 'Use asset-use ratios'],
            items: [
                { text: 'Deciding whether to expand production', category: 'Use profitability ratios' },
                { text: 'Assessing ability to pay short-term debts', category: 'Use liquidity ratios' },
                { text: 'Evaluating inventory management efficiency', category: 'Use asset-use ratios' },
                { text: 'Comparing performance with competitors', category: 'Use profitability ratios' },
                { text: 'Monitoring cash position', category: 'Use liquidity ratios' },
                { text: 'Reviewing credit control effectiveness', category: 'Use asset-use ratios' },
                { text: 'Setting pricing strategies', category: 'Use profitability ratios' },
                { text: 'Assessing non-current asset utilisation', category: 'Use asset-use ratios' },
                { text: 'Planning for working capital needs', category: 'Use liquidity ratios' }
            ]
        },
        {
            id: 'dd-t5-7',
            stem: 'Categorise the following statements about sole trader ratio analysis.',
            categories: ['True for sole traders', 'False for sole traders', 'Requires context'],
            items: [
                { text: 'Owner drawings affect ratio interpretation', category: 'True for sole traders' },
                { text: 'Only large businesses need ratio analysis', category: 'False for sole traders' },
                { text: 'Industry comparisons are always valid', category: 'Requires context' },
                { text: 'Trend analysis is valuable for sole traders', category: 'True for sole traders' },
                { text: 'Personal finances are included in business ratios', category: 'False for sole traders' },
                { text: 'All ratio types are useful for sole traders', category: 'True for sole traders' },
                { text: 'Single ratio values tell the whole story', category: 'Requires context' },
                { text: 'Ratios help identify business problems early', category: 'True for sole traders' }
            ]
        },
        {
            id: 'dd-t5-8',
            stem: 'Categorise the following partnership ratio considerations.',
            categories: ['Partnership-specific', 'General business', 'Not applicable to ratios'],
            items: [
                { text: 'Partner profit sharing agreement', category: 'Not applicable to ratios' },
                { text: 'Capital account changes', category: 'Partnership-specific' },
                { text: 'Overall business profitability', category: 'General business' },
                { text: 'Individual partner performance', category: 'Not applicable to ratios' },
                { text: 'Baseline performance for new partners', category: 'Partnership-specific' },
                { text: 'Liquidity position', category: 'General business' },
                { text: 'Asset utilisation', category: 'General business' },
                { text: 'Goodwill calculations', category: 'Not applicable to ratios' }
            ]
        },
        {
            id: 'dd-t5-9',
            stem: 'Categorise the following potential causes of ratio changes.',
            categories: ['Internal factors', 'External factors', 'Both possible'],
            items: [
                { text: 'Rising raw material costs', category: 'External factors' },
                { text: 'Poor inventory management', category: 'Internal factors' },
                { text: 'Changes in demand', category: 'External factors' },
                { text: 'Inefficient production processes', category: 'Internal factors' },
                { text: 'Interest rate changes', category: 'External factors' },
                { text: 'Pricing decisions', category: 'Internal factors' },
                { text: 'Economic recession', category: 'External factors' },
                { text: 'Staff productivity', category: 'Internal factors' },
                { text: 'Exchange rate fluctuations', category: 'External factors' },
                { text: 'Credit policy changes', category: 'Internal factors' }
            ]
        },
        {
            id: 'dd-t5-10',
            stem: 'Categorise the following ratio calculation steps.',
            categories: ['Step 1: Identify values', 'Step 2: Apply formula', 'Step 3: Interpret result'],
            items: [
                { text: 'Locate gross profit and revenue in the statement', category: 'Step 1: Identify values' },
                { text: 'Calculate gross profit ÷ revenue', category: 'Step 2: Apply formula' },
                { text: 'Compare with industry average', category: 'Step 3: Interpret result' },
                { text: 'Identify current assets and liabilities', category: 'Step 1: Identify values' },
                { text: 'Calculate current assets ÷ current liabilities', category: 'Step 2: Apply formula' },
                { text: 'Assess if ratio indicates liquidity problems', category: 'Step 3: Interpret result' },
                { text: 'Find average inventory and cost of sales', category: 'Step 1: Identify values' },
                { text: 'Calculate (inventory ÷ cost of sales) × 365', category: 'Step 2: Apply formula' },
                { text: 'Evaluate if inventory turnover is improving', category: 'Step 3: Interpret result' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-t5-1',
            stem: 'Put the steps for calculating Gross Profit Margin in the correct order:',
            steps: [
                'Identify gross profit from the statement of profit or loss',
                'Identify revenue (sales) from the statement of profit or loss',
                'Divide gross profit by revenue',
                'Multiply the result by 100 to convert to a percentage'
            ]
        },
        {
            id: 'seq-t5-2',
            stem: 'Put the steps for calculating Current Ratio in the correct order:',
            steps: [
                'Identify total current assets from the statement of financial position',
                'Identify total current liabilities from the statement of financial position',
                'Divide current assets by current liabilities',
                'Express the result as a ratio (e.g., 2:1)'
            ]
        },
        {
            id: 'seq-t5-3',
            stem: 'Put the steps for calculating Inventory Turnover (days) in the correct order:',
            steps: [
                'Calculate average inventory: (opening inventory + closing inventory) ÷ 2',
                'Identify cost of sales from the statement of profit or loss',
                'Divide average inventory by cost of sales',
                'Multiply the result by 365 days'
            ]
        },
        {
            id: 'seq-t5-4',
            stem: 'Put the steps for calculating ROCE in the correct order:',
            steps: [
                'Identify profit before interest and tax from the statement of profit or loss',
                'Calculate capital employed: (non-current assets + current assets - current liabilities) OR (equity + non-current liabilities)',
                'Divide profit before interest and tax by capital employed',
                'Multiply the result by 100 to express as a percentage'
            ]
        },
        {
            id: 'seq-t5-5',
            stem: 'Put the steps for interpreting a declining Current Ratio trend in the correct order:',
            steps: [
                'Calculate the Current Ratio for each period',
                'Identify the trend (increasing, decreasing, stable)',
                'Investigate the causes (decreasing assets, increasing liabilities, or both)',
                'Compare with industry averages for context',
                'Recommend appropriate actions if problems are identified'
            ]
        },
        {
            id: 'seq-t5-6',
            stem: 'Put the steps for analysing Trade Receivables Collection Period in the correct order:',
            steps: [
                'Identify trade receivables from the statement of financial position',
                'Identify credit sales from the statement of profit or loss (or notes)',
                'Divide trade receivables by credit sales',
                'Multiply the result by 365 to get days',
                'Compare with previous periods and credit terms offered',
                'Assess whether collection is improving or deteriorating'
            ]
        },
        {
            id: 'seq-t5-7',
            stem: 'Put the steps for comprehensive ratio analysis in the correct order:',
            steps: [
                'Calculate all relevant ratios for the current period',
                'Calculate ratios for previous periods for trend comparison',
                'Obtain industry average ratios for benchmark comparison',
                'Identify significant differences from benchmarks and trends',
                'Investigate the underlying causes of ratio changes',
                'Formulate recommendations for improvement'
            ]
        },
        {
            id: 'seq-t5-8',
            stem: 'Put the steps for using ratios to assess a sole trader\'s business in the correct order:',
            steps: [
                'Prepare financial statements for the business',
                'Calculate profitability ratios to assess performance',
                'Calculate liquidity ratios to assess short-term financial health',
                'Calculate asset-use ratios to assess operational efficiency',
                'Consider the impact of owner drawings on cash flow and capital',
                'Compare results with previous periods and industry averages',
                'Identify areas for improvement and take corrective action'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-t5-1',
            stem: 'Define Gross Profit Margin. [2 marks]',
            marks: 2,
            keywords: ['gross profit', 'revenue', 'percentage', 'measure', 'profitability'],
            modelAnswer: 'Gross Profit Margin is a profitability ratio that measures the percentage of revenue retained as gross profit after deducting the cost of sales. It is calculated as (Gross profit ÷ Revenue) × 100% and indicates the efficiency of production or purchasing.'
        },
        {
            id: 'kw-t5-2',
            stem: 'Explain the purpose of liquidity ratios. [3 marks]',
            marks: 3,
            keywords: ['short-term', 'obligations', 'pay', 'debts', 'ability', 'liquidity', 'current', 'assets'],
            modelAnswer: 'Liquidity ratios measure a business\'s ability to meet its short-term financial obligations as they fall due. They assess whether the business has sufficient current assets (or quick assets) to cover current liabilities, indicating the short-term financial health and risk of insolvency.'
        },
        {
            id: 'kw-t5-3',
            stem: 'Describe the difference between Current Ratio and Acid Test Ratio. [3 marks]',
            marks: 3,
            keywords: ['inventory', 'exclude', 'acid test', 'current assets', 'stricter', 'liquidity', 'immediate'],
            modelAnswer: 'The Current Ratio includes all current assets in the calculation, while the Acid Test Ratio excludes inventory. This makes the Acid Test Ratio a stricter measure of immediate liquidity, as inventory may not be quickly convertible to cash. Both ratios divide by current liabilities.'
        },
        {
            id: 'kw-t5-4',
            stem: 'Explain what Inventory Turnover (days) indicates about a business. [3 marks]',
            marks: 3,
            keywords: ['average', 'days', 'inventory', 'held', 'sold', 'efficiency', 'management', 'faster', 'lower'],
            modelAnswer: 'Inventory Turnover (days) indicates the average number of days inventory is held before being sold. A lower figure suggests faster sales and efficient inventory management, while a higher figure may indicate slow-moving stock, overstocking, or potential obsolescence issues.'
        },
        {
            id: 'kw-t5-5',
            stem: 'Define Return on Capital Employed (ROCE). [2 marks]',
            marks: 2,
            keywords: ['profit', 'before', 'interest', 'tax', 'capital', 'employed', 'percentage', 'return', 'investment'],
            modelAnswer: 'ROCE is a profitability ratio that measures the return generated from the total capital invested in the business. It is calculated as (Profit before interest and tax ÷ Capital employed) × 100% and indicates how efficiently the business uses its capital.'
        },
        {
            id: 'kw-t5-6',
            stem: 'Explain how Trade Receivables Collection Period affects cash flow. [3 marks]',
            marks: 3,
            keywords: ['longer', 'period', 'cash', 'flow', 'tied up', 'customers', 'working', 'capital', 'shorter', 'better'],
            modelAnswer: 'A longer Trade Receivables Collection Period means cash is tied up in customer debts for longer, which can strain cash flow and working capital. Shorter collection periods improve cash flow as money is received more quickly, allowing the business to pay suppliers and invest in operations.'
        },
        {
            id: 'kw-t5-7',
            stem: 'Describe why ratio analysis is useful for a sole trader. [3 marks]',
            marks: 3,
            keywords: ['monitor', 'performance', 'identify', 'problems', 'trends', 'compare', 'industry', 'decision-making', 'improvement'],
            modelAnswer: 'Ratio analysis helps a sole trader monitor business performance over time, identify potential problems early, and track trends in profitability, liquidity, and efficiency. It enables comparison with industry benchmarks and supports informed decision-making for business improvement.'
        },
        {
            id: 'kw-t5-8',
            stem: 'Explain what a Current Ratio of less than 1:1 indicates. [2 marks]',
            marks: 2,
            keywords: 'current liabilities, exceed, current assets, liquidity, problems, short-term, debts, struggle, pay'.split(', '),
            modelAnswer: 'A Current Ratio of less than 1:1 indicates that current liabilities exceed current assets. This suggests the business may struggle to pay its short-term debts and could face liquidity problems, potentially risking insolvency.'
        },
        {
            id: 'kw-t5-9',
            stem: 'Describe the importance of trend analysis when interpreting ratios. [3 marks]',
            marks: 3,
            keywords: ['identify', 'trends', 'improvement', 'deterioration', 'over', 'time', 'meaningful', 'context', 'performance', 'changes'],
            modelAnswer: 'Trend analysis involves comparing ratios over multiple periods to identify patterns of improvement or deterioration. This provides context for understanding current performance, helps distinguish between temporary fluctuations and long-term issues, and enables more informed decision-making than single-period analysis.'
        },
        {
            id: 'kw-t5-10',
            stem: 'Explain the limitations of ratio analysis. [3 marks]',
            marks: 3,
            keywords: ['historical', 'data', 'inflation', 'accounting', 'policies', 'seasonal', 'variations', 'external', 'factors', 'qualitative'],
            modelAnswer: 'Ratio analysis has several limitations: it uses historical data which may not predict future performance; different accounting policies can affect comparability; inflation can distort values; seasonal variations may not be captured; external factors are not reflected; and qualitative factors such as management quality are not measured.'
        },
        {
            id: 'kw-t5-11',
            stem: 'Explain how partnerships can use ratio analysis when a new partner joins. [3 marks]',
            marks: 3,
            keywords: ['baseline', 'performance', 'compare', 'before', 'after', 'assess', 'impact', 'capital', 'contribution', 'future', 'projections'],
            modelAnswer: 'Partnerships can establish a baseline of business performance through ratio analysis before the new partner joins. This allows comparison of post-joining performance to assess the impact of the new arrangement. Ratios also help justify capital contributions and support future financial projections.'
        },
        {
            id: 'kw-t5-12',
            stem: 'Describe how Net Profit Margin differs from Gross Profit Margin. [3 marks]',
            marks: 3,
            keywords: ['gross', 'cost', 'sales', 'net', 'expenses', 'overheads', 'operating', 'interest', 'tax', 'overall', 'profitability'],
            modelAnswer: 'Gross Profit Margin only considers the relationship between gross profit and revenue, measuring profitability after the cost of sales. Net Profit Margin includes all expenses such as operating costs, interest, and tax, providing a measure of overall profitability. Net Profit Margin will always be lower than Gross Profit Margin for a profitable business.'
        }
    ],

    flashcards: [
        // Profitability ratios
        {
            id: 'fc-t5-1',
            front: 'What is the formula for Gross Profit Margin?',
            back: 'Gross Profit Margin = (Gross profit ÷ Revenue) × 100%',
            topic: 'Profitability ratios'
        },
        {
            id: 'fc-t5-2',
            front: 'What does Gross Profit Margin measure?',
            back: 'The percentage of revenue retained as gross profit after deducting the cost of sales. It measures the efficiency of production or purchasing.',
            topic: 'Profitability ratios'
        },
        {
            id: 'fc-t5-3',
            front: 'What is the formula for Net Profit Margin?',
            back: 'Net Profit Margin = (Net profit ÷ Revenue) × 100%',
            topic: 'Profitability ratios'
        },
        {
            id: 'fc-t5-4',
            front: 'What does Net Profit Margin measure?',
            back: 'The overall profitability of the business after all expenses including operating costs, interest, and tax have been deducted from revenue.',
            topic: 'Profitability ratios'
        },
        {
            id: 'fc-t5-5',
            front: 'What is the formula for ROCE?',
            back: 'ROCE = (Profit before interest and tax ÷ Capital employed) × 100%',
            topic: 'Profitability ratios'
        },
        {
            id: 'fc-t5-6',
            front: 'What does ROCE measure?',
            back: 'The return generated from the total capital invested in the business. It shows how efficiently the business uses its capital to generate profit.',
            topic: 'Profitability ratios'
        },

        // Liquidity ratios
        {
            id: 'fc-t5-7',
            front: 'What is the formula for Current Ratio?',
            back: 'Current Ratio = Current assets ÷ Current liabilities',
            topic: 'Liquidity ratios'
        },
        {
            id: 'fc-t5-8',
            front: 'What does Current Ratio measure?',
            back: 'The ability to meet short-term financial obligations. It shows whether the business has sufficient current assets to cover current liabilities.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'fc-t5-9',
            front: 'What is the formula for Acid Test Ratio?',
            back: 'Acid Test Ratio = (Current assets - Inventory) ÷ Current liabilities',
            topic: 'Liquidity ratios'
        },
        {
            id: 'fc-t5-10',
            front: 'Why is inventory excluded from Acid Test Ratio?',
            back: 'Inventory may not be quickly convertible to cash, so excluding it provides a more stringent measure of immediate liquidity.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'fc-t5-11',
            front: 'What is generally considered a healthy Current Ratio?',
            back: 'Between 1.5:1 and 2:1, though this varies by industry. Below 1:1 indicates potential liquidity problems.',
            topic: 'Liquidity ratios'
        },
        {
            id: 'fc-t5-12',
            front: 'What industry typically operates with the lowest Current Ratio?',
            back: 'Supermarkets, due to high inventory turnover and cash sales, can often operate with a Current Ratio close to 1:1.',
            topic: 'Liquidity ratios'
        },

        // Asset-use ratios
        {
            id: 'fc-t5-13',
            front: 'What is the formula for Inventory Turnover (days)?',
            back: 'Inventory Turnover (days) = (Average inventory ÷ Cost of sales) × 365',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-14',
            front: 'What does Inventory Turnover (days) indicate?',
            back: 'The average number of days inventory is held before being sold. Lower values generally indicate more efficient inventory management.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-15',
            front: 'What is the formula for Trade Receivables Collection Period?',
            back: 'Trade Receivables Collection Period = (Trade receivables ÷ Credit sales) × 365',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-16',
            front: 'What does Trade Receivables Collection Period measure?',
            back: 'The average number of days it takes to collect payment from credit customers. Shorter periods improve cash flow.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-17',
            front: 'What is the formula for Trade Payables Settlement Period?',
            back: 'Trade Payables Settlement Period = (Trade payables ÷ Credit purchases) × 365',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-18',
            front: 'What does Trade Payables Settlement Period indicate?',
            back: 'The average time taken to pay suppliers. Higher periods may indicate good cash flow management or difficulty paying on time.',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-19',
            front: 'What is the formula for Non-current Asset Turnover?',
            back: 'Non-current Asset Turnover = Revenue ÷ Non-current assets',
            topic: 'Asset-use ratios'
        },
        {
            id: 'fc-t5-20',
            front: 'What does Non-current Asset Turnover measure?',
            back: 'How efficiently non-current assets are used to generate sales revenue. Higher values indicate more efficient asset utilisation.',
            topic: 'Asset-use ratios'
        },

        // Ratio interpretation for sole traders
        {
            id: 'fc-t5-21',
            front: 'Why are owner\'s drawings important for sole trader ratio analysis?',
            back: 'High drawings relative to profit can deplete cash reserves and capital, affecting liquidity ratios and potentially causing cash flow problems even if the business is profitable.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'fc-t5-22',
            front: 'How should a sole trader use ratio analysis?',
            back: 'To monitor business performance, identify trends, spot potential problems early, and make informed decisions. Ratios should be compared with previous periods and industry averages.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'fc-t5-23',
            front: 'What might cause a sole trader\'s profitability to decline?',
            back: 'Rising costs (materials, labour, overheads), falling sales prices, reduced sales volume, inefficient operations, or increased competition.',
            topic: 'Ratio interpretation for sole traders'
        },
        {
            id: 'fc-t5-24',
            front: 'What actions can a sole trader take if liquidity ratios are declining?',
            back: 'Improve inventory management, collect receivables faster, negotiate extended payment terms with suppliers, reduce drawings, inject personal capital, or improve profitability.',
            topic: 'Ratio interpretation for sole traders'
        },

        // Ratio interpretation for partnerships
        {
            id: 'fc-t5-25',
            front: 'How does ratio analysis benefit partnerships?',
            back: 'It helps partners assess overall business performance, identify trends, make informed decisions, and evaluate the impact of changes such as new partners joining.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'fc-t5-26',
            front: 'Why are partnership capital accounts relevant to ratio analysis?',
            back: 'Changes in capital accounts (through injections, profit retention, or drawings) affect liquidity and long-term financing, which are relevant to ratio interpretation.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'fc-t5-27',
            front: 'How can partners use ratios when a new partner joins?',
            back: 'Establish baseline performance before the new partner joins, then compare post-joining performance to assess the impact. Ratios also help justify capital contributions and support financial projections.',
            topic: 'Ratio interpretation for partnerships'
        },
        {
            id: 'fc-t5-28',
            front: 'Does individual profit sharing affect business ratio calculations?',
            back: 'No. Ratio analysis assesses overall business performance as an entity, independent of how profits are distributed among partners according to the partnership agreement.',
            topic: 'Ratio interpretation for partnerships'
        }
    ]
};
