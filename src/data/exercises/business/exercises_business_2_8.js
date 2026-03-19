// WBS12 — Topic 8: Managing Finance
// AL Business — 6 exercise types, sourced from seed notes 2_8_0 through 2_8_7

export const exercises_business_2_8 = {
    subject: 'business',
    unitId: 2,
    unitCode: 'WBS12',
    unitTitle: 'Managing Business Activities',
    topicId: 8,
    topicTitle: 'Managing Finance',

    // ─────────────────────────────────────────────
    // MCQ — 30 questions (subtopics 0–7)
    // correctAnswer is 0-based index of correct option
    // ─────────────────────────────────────────────
    mcq: [
        // Subtopic 0 — Gross, operating and net profit (×4)
        {
            id: 'mcq-t8-1',
            stem: 'What is the formula for calculating gross profit?',
            options: [
                'Revenue - Operating Expenses',
                'Revenue - Cost of Sales',
                'Operating Profit - Interest - Tax',
                'Gross Profit - Operating Expenses',
            ],
            correctAnswer: 1,
            rationale: 'Gross Profit = Revenue - Cost of Sales. Cost of sales includes only direct production costs (materials, direct labour, production overheads).',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'mcq-t8-2',
            stem: 'Which profit figure is best suited for comparing operational efficiency between firms?',
            options: [
                'Gross profit',
                'Operating profit',
                'Net profit',
                'Retained profit',
            ],
            correctAnswer: 1,
            rationale: 'Operating profit (EBIT) excludes interest and tax, which depend on financing decisions rather than operations. This allows fair comparison of operational performance between firms with different capital structures.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'mcq-t8-3',
            stem: 'What does operating profit exclude that is included in the calculation of net profit?',
            options: [
                'Operating expenses',
                'Cost of sales',
                'Finance costs (interest)',
                'Administrative expenses',
            ],
            correctAnswer: 2,
            rationale: 'Operating profit excludes finance costs (interest) and tax. These are deducted to arrive at net profit. Operating profit reflects earnings from core business operations only.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'mcq-t8-4',
            stem: 'A business has revenue of £500,000, cost of sales of £300,000, operating expenses of £120,000, interest of £20,000 and tax of £32,000. What is its net profit?',
            options: [
                '£80,000',
                '£180,000',
                '£128,000',
                '£200,000',
            ],
            correctAnswer: 1,
            rationale: 'Gross Profit = £500,000 - £300,000 = £200,000. Operating Profit = £200,000 - £120,000 = £80,000. Net Profit = £80,000 - £20,000 - £32,000 = £28,000.',
            topic: 'Gross, operating and net profit',
        },
        // Subtopic 1 — Profitability ratios (×4)
        {
            id: 'mcq-t8-5',
            stem: 'What is the formula for Gross Profit Margin (GPM)?',
            options: [
                '(Gross Profit ÷ Cost of Sales) × 100',
                '(Gross Profit ÷ Revenue) × 100',
                '(Revenue ÷ Gross Profit) × 100',
                '(Operating Profit ÷ Revenue) × 100',
            ],
            correctAnswer: 1,
            rationale: 'GPM = (Gross Profit ÷ Revenue) × 100. This shows what percentage of revenue is retained after direct production costs, indicating pricing and production efficiency.',
            topic: 'Profitability ratios',
        },
        {
            id: 'mcq-t8-6',
            stem: 'A firm has revenue of £2,000,000 and operating profit of £400,000. What is its operating profit margin?',
            options: [
                '20%',
                '25%',
                '40%',
                '15%',
            ],
            correctAnswer: 0,
            rationale: 'OPM = (£400,000 ÷ £2,000,000) × 100 = 20%. This means the business retains 20p of every £1 of revenue after all operating costs.',
            topic: 'Profitability ratios',
        },
        {
            id: 'mcq-t8-7',
            stem: 'If gross profit margin is falling but operating profit margin is stable, what does this indicate?',
            options: [
                'Operating expenses have fallen',
                'Cost of sales has risen disproportionately',
                'Tax rates have increased',
                'Interest payments have increased',
            ],
            correctAnswer: 1,
            rationale: 'Falling GPM with stable OPM indicates that operating expenses (overheads) have remained controlled, but cost of sales (direct costs) has risen, reducing production efficiency.',
            topic: 'Profitability ratios',
        },
        {
            id: 'mcq-t8-8',
            stem: 'Which profitability ratio is also known as EBIT margin?',
            options: [
                'Gross profit margin',
                'Operating profit margin',
                'Net profit margin',
                'Return on Capital Employed',
            ],
            correctAnswer: 1,
            rationale: 'EBIT = Earnings Before Interest and Tax. Operating profit margin is EBIT ÷ Revenue × 100, showing earnings from operations before financing costs.',
            topic: 'Profitability ratios',
        },
        // Subtopic 2 — Methods to improve profit (×4)
        {
            id: 'mcq-t8-9',
            stem: 'Under what condition is raising price the most effective method to improve profit?',
            options: [
                'When demand is price elastic',
                'When demand is price inelastic',
                'When competitors are lowering prices',
                'When the product is in the decline stage of its life cycle',
            ],
            correctAnswer: 1,
            rationale: 'Price increases work best when demand is price inelastic — customers are relatively unresponsive to price changes. Revenue rises with minimal fall in sales volume.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'mcq-t8-10',
            stem: 'Which strategy improves profit by shifting sales toward higher-margin products?',
            options: [
                'Increasing advertising spend',
                'Changing the product mix',
                'Reducing production quality',
                'Extending supplier payment terms',
            ],
            correctAnswer: 1,
            rationale: 'Product mix strategy involves redirecting marketing and production toward products with higher profit margins. This improves average margin per sale without changing total revenue.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'mcq-t8-11',
            stem: 'What is a major risk of cutting costs by switching to cheaper suppliers?',
            options: [
                'Profit margins will increase',
                'Sales volume may decrease',
                'Product quality may suffer, damaging brand reputation',
                'Operating expenses will rise',
            ],
            correctAnswer: 2,
            rationale: 'Cheaper suppliers may deliver lower-quality inputs, which can reduce product quality and damage brand reputation. This may ultimately lose customers despite lower costs.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'mcq-t8-12',
            stem: 'How can economies of scale help improve profit?',
            options: [
                'By selling products at higher prices',
                'By reducing average unit cost as production volume increases',
                'By increasing tax deductions',
                'By reducing interest payments on loans',
            ],
            correctAnswer: 1,
            rationale: 'Economies of scale mean that as production volume increases, fixed costs are spread over more units and bulk purchasing discounts become available, reducing average cost per unit.',
            topic: 'Methods to improve profit',
        },
        // Subtopic 3 — Profit vs cash distinction (×4)
        {
            id: 'mcq-t8-13',
            stem: 'What is the key reason profit and cash can differ?',
            options: [
                'Cash flow is always higher than profit',
                'Profit uses accruals basis; cash is recorded when money actually changes hands',
                'Profit and cash are always equal',
                'Cash flow is calculated using depreciation',
            ],
            correctAnswer: 1,
            rationale: 'Under accruals accounting, revenue is recognised when a sale is made, not when cash is received. This timing difference means a profitable business can have cash flow problems.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'mcq-t8-14',
            stem: 'What is overtrading?',
            options: [
                'Trading losses for several years',
                'Expanding sales too rapidly without sufficient working capital to fund growth',
                'Having too many competitors in the market',
                'Operating below breakeven point',
            ],
            correctAnswer: 1,
            rationale: 'Overtrading occurs when a business grows faster than its working capital can support. It must purchase inventory and hire staff before cash from sales arrives, creating a liquidity squeeze.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'mcq-t8-15',
            stem: 'A firm sells £200,000 on 90-day credit terms and pays costs immediately. What is its likely cash flow situation?',
            options: [
                'Positive cash flow of £200,000',
                'Negative cash flow due to timing gap between sales and payment',
                'Cash flow equals profit exactly',
                'Cannot determine without more information',
            ],
            correctAnswer: 1,
            rationale: 'Revenue is recorded immediately (profit), but cash will not arrive for 90 days. During this gap, the business must pay costs from other sources or face a cash shortfall.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'mcq-t8-16',
            stem: 'Why might a profitable business become insolvent?',
            options: [
                'Because its gross profit is too low',
                'Because it cannot generate sufficient cash to pay debts as they fall due',
                'Because its net profit margin is falling',
                'Because it has too much inventory',
            ],
            correctAnswer: 1,
            rationale: 'Insolvency occurs when a business cannot pay its debts when due. A firm can be profitable (income statement shows profit) but run out of cash if debtors are slow to pay or inventory ties up cash.',
            topic: 'Profit vs cash distinction',
        },
        // Subtopic 4 — Liquidity ratios (×4)
        {
            id: 'mcq-t8-17',
            stem: 'What is the ideal range for the current ratio?',
            options: [
                '0.5:1 to 1:1',
                '1.5:1 to 2:1',
                '3:1 to 4:1',
                'Below 0.5:1',
            ],
            correctAnswer: 1,
            rationale: 'A current ratio between 1.5:1 and 2:1 indicates adequate liquidity without excessive idle assets. Below 1:1 suggests difficulty meeting short-term obligations.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'mcq-t8-18',
            stem: 'What makes the acid test ratio more stringent than the current ratio?',
            options: [
                'It includes inventory in the calculation',
                'It excludes inventory from current assets',
                'It uses net profit instead of gross profit',
                'It includes fixed assets',
            ],
            correctAnswer: 1,
            rationale: 'The acid test ratio (Current Assets - Inventory) ÷ Current Liabilities excludes inventory because stock may not be quickly convertible to cash. This provides a more conservative liquidity measure.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'mcq-t8-19',
            stem: 'A firm has current assets of £600,000 (including inventory of £200,000) and current liabilities of £400,000. What is its acid test ratio?',
            options: [
                '1.5:1',
                '1.0:1',
                '0.5:1',
                '2.0:1',
            ],
            correctAnswer: 1,
            rationale: 'Acid Test = (£600,000 - £200,000) ÷ £400,000 = £400,000 ÷ £400,000 = 1.0:1. This is at the lower end of acceptable range.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'mcq-t8-20',
            stem: 'Why might a supermarket operate safely with an acid test ratio below 1:1?',
            options: [
                'Because it has high cash reserves',
                'Because it receives cash from customers before paying suppliers (negative cash conversion cycle)',
                'Because it has very low inventory levels',
                'Because its suppliers allow extended payment terms',
            ],
            correctAnswer: 1,
            rationale: 'Supermarkets receive cash at point of sale but pay suppliers on 30-60 day credit. This negative CCC means they use supplier credit as free working capital, so low acid test ratios are normal.',
            topic: 'Liquidity ratios',
        },
        // Subtopic 5 — Working capital management (×4)
        {
            id: 'mcq-t8-21',
            stem: 'What is the formula for working capital?',
            options: [
                'Fixed Assets - Current Liabilities',
                'Current Assets - Current Liabilities',
                'Current Liabilities - Current Assets',
                'Non-Current Assets + Current Assets',
            ],
            correctAnswer: 1,
            rationale: 'Working Capital = Current Assets - Current Liabilities. Positive working capital indicates the business can cover short-term obligations. Negative working capital is a liquidity concern.',
            topic: 'Working capital management',
        },
        {
            id: 'mcq-t8-22',
            stem: 'What is the cash conversion cycle (CCC)?',
            options: [
                'Inventory Days + Receivables Days + Payables Days',
                'Inventory Days + Receivables Days - Payables Days',
                'Receivables Days - Inventory Days - Payables Days',
                'Current Assets ÷ Current Liabilities',
            ],
            correctAnswer: 1,
            rationale: 'CCC = Inventory Days + Receivables Days - Payables Days. It measures the average number of days cash is tied up before being recovered from sales.',
            topic: 'Working capital management',
        },
        {
            id: 'mcq-t8-23',
            stem: 'How can a business reduce its debtor (receivables) days?',
            options: [
                'Extend credit terms to customers',
                'Offer early payment discounts',
                'Hold more inventory',
                'Delay payments to suppliers',
            ],
            correctAnswer: 1,
            rationale: 'Offering early payment discounts (e.g. 2% for payment within 10 days) encourages customers to pay sooner, reducing the average time cash is tied up in receivables.',
            topic: 'Working capital management',
        },
        {
            id: 'mcq-t8-24',
            stem: 'What is factoring?',
            options: [
                'Delaying payments to suppliers to improve cash flow',
                'Selling trade receivables to a specialist company at a discount for immediate cash',
                'Buying inventory on extended credit terms',
                'Leasing assets instead of buying them',
            ],
            correctAnswer: 1,
            rationale: 'Factoring involves selling invoices (debtors) to a finance company (factor) at a discount. The business receives immediate cash (minus the factor\'s fee), improving liquidity.',
            topic: 'Working capital management',
        },
        // Subtopic 6 — Internal causes of business failure (×3)
        {
            id: 'mcq-t8-25',
            stem: 'Which is an example of poor cash flow management?',
            options: [
                'Maintaining a cash flow forecast',
                'Allowing customers to take too long to pay',
                'Offering early payment discounts',
                'Using invoice factoring',
            ],
            correctAnswer: 1,
            rationale: 'Allowing excessive debtor days means cash arrives late from sales. During this gap, the business must still pay wages, suppliers and loan repayments, creating a cash shortfall.',
            topic: 'Internal causes of business failure',
        },
        {
            id: 'mcq-t8-26',
            stem: 'What is overtrading paradoxically most common in?',
            options: [
                'Businesses with declining sales',
                'Fast-growing businesses',
                'Mature, stable businesses',
                'Businesses with high profit margins',
            ],
            correctAnswer: 1,
            rationale: 'Overtrading is paradoxically most common in fast-growing businesses. Rapid expansion requires spending cash (inventory, staff, credit) before revenue from new sales arrives, straining working capital.',
            topic: 'Internal causes of business failure',
        },
        {
            id: 'mcq-t8-27',
            stem: 'How can excessive debt lead to business failure?',
            options: [
                'By increasing gross profit margin',
                'By creating large unavoidable interest payments that drain cash flow',
                'By reducing inventory levels',
                'By improving current ratio',
            ],
            correctAnswer: 1,
            rationale: 'High debt levels create large interest payments that must be paid regardless of revenue. If cash flow is insufficient to service debt, covenants may be breached and lenders may demand repayment, leading to insolvency.',
            topic: 'Internal causes of business failure',
        },
        // Subtopic 7 — External causes of business failure (×3)
        {
            id: 'mcq-t8-28',
            stem: 'What is a recession defined as?',
            options: [
                'One quarter of negative GDP growth',
                'Two consecutive quarters of negative GDP growth',
                'Three consecutive quarters of declining profits',
                'Six months of falling sales',
            ],
            correctAnswer: 1,
            rationale: 'A recession is defined as two consecutive quarters (six months) of negative GDP growth. During recessions, consumer confidence and spending fall, reducing business revenues.',
            topic: 'External causes of business failure',
        },
        {
            id: 'mcq-t8-29',
            stem: 'How can increased competition threaten a business?',
            options: [
                'By raising its profit margins',
                'By forcing price reductions that compress margins and eroding market share',
                'By reducing its operating expenses',
                'By improving its liquidity ratios',
            ],
            correctAnswer: 1,
            rationale: 'Intense competition can force businesses to cut prices to remain competitive. Price wars compress profit margins and, if customers switch to rivals, market share is lost.',
            topic: 'External causes of business failure',
        },
        {
            id: 'mcq-t8-30',
            stem: 'Which external factor is analysed using the PESTLE framework?',
            options: [
                'Internal management decisions',
                'Economic, Social, Technological, Legal, Environmental factors',
                'Only financial ratios',
                'Only marketing campaigns',
            ],
            correctAnswer: 1,
            rationale: 'PESTLE stands for Political, Economic, Social, Technological, Legal and Environmental. It is a framework for analysing external threats and opportunities affecting a business.',
            topic: 'External causes of business failure',
        },
    ],

    // ─────────────────────────────────────────────
    // FILL-BLANK — 15 questions (subtopics 0–7)
    // use __BLANK__ placeholders in template; blanks[] contains correct answers
    // ─────────────────────────────────────────────
    fillBlank: [
        // Subtopic 0 — Gross, operating and net profit (×2)
        {
            id: 'fb-t8-1',
            stem: 'Complete the income statement calculations:',
            template: 'Revenue: £1,000,000. Cost of Sales: £600,000. __BLANK__ Profit = £400,000. Operating Expenses: £150,000. __BLANK__ Profit = £250,000. Interest: £30,000. Tax: £44,000. __BLANK__ Profit = £176,000.',
            blanks: [
                { answer: 'Gross' },
                { answer: 'Operating' },
                { answer: 'Net' },
            ],
            rationale: 'Gross Profit = Revenue - Cost of Sales = £400,000. Operating Profit = Gross Profit - Operating Expenses = £250,000. Net Profit = Operating Profit - Interest - Tax = £176,000.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'fb-t8-2',
            stem: 'Complete the profit calculation formulas:',
            template: '__BLANK__ Profit = Revenue - Cost of Sales. It shows profit from core trading before overheads. __BLANK__ Profit = Gross Profit - Operating Expenses. It excludes financing costs. __BLANK__ Profit = Operating Profit - Interest - Tax. It is the "bottom line" available to owners.',
            blanks: [
                { answer: 'Gross' },
                { answer: 'Operating' },
                { answer: 'Net' },
            ],
            rationale: 'The three profit levels are calculated progressively: Gross (trading efficiency), Operating (operational efficiency excluding financing), and Net (returns to owners after all costs).',
            topic: 'Gross, operating and net profit',
        },
        // Subtopic 1 — Profitability ratios (×2)
        {
            id: 'fb-t8-3',
            stem: 'Complete the profitability ratio calculations:',
            template: 'Gross Profit Margin = (Gross Profit ÷ __BLANK__) × 100. It measures production and pricing efficiency. Operating Profit Margin = (Operating Profit ÷ __BLANK__) × 100. It measures overall operational efficiency.',
            blanks: [
                { answer: 'Revenue' },
                { answer: 'Revenue' },
            ],
            rationale: 'Both margins express profit as a percentage of revenue. GPM shows how much revenue remains after direct costs; OPM shows what remains after all operating expenses.',
            topic: 'Profitability ratios',
        },
        {
            id: 'fb-t8-4',
            stem: 'Interpret the ratio changes:',
            template: 'If GPM falls but OPM is stable, this indicates __BLANK__ costs have risen. If OPM falls but GPM is stable, this indicates __BLANK__ expenses have increased.',
            blanks: [
                { answer: 'direct' },
                { answer: 'overhead' },
            ],
            rationale: 'Analysing which margin has fallen reveals where cost pressures lie. Falling GPM = rising cost of sales; falling OPM = rising operating expenses.',
            topic: 'Profitability ratios',
        },
        // Subtopic 2 — Methods to improve profit (×2)
        {
            id: 'fb-t8-5',
            stem: 'Complete the methods to improve profit:',
            template: 'Profit can be increased by raising __BLANK__ (if demand is inelastic), increasing sales __BLANK__ through marketing, or reducing costs. Shifting the product __BLANK__ toward higher-margin products also improves overall profitability.',
            blanks: [
                { answer: 'price' },
                { answer: 'volume' },
                { answer: 'mix' },
            ],
            rationale: 'Three broad approaches: increase price (when feasible), increase volume through promotion, or change product mix to favour more profitable lines.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'fb-t8-6',
            stem: 'Complete the cost reduction strategies:',
            template: 'Variable costs can be cut by renegotiating supplier contracts or improving labour __BLANK__. Fixed costs can be reduced by downsizing or moving to cheaper __BLANK__. However, cost-cutting risks quality or morale if done too aggressively.',
            blanks: [
                { answer: 'productivity' },
                { answer: 'premises' },
            ],
            rationale: 'Cost reduction must balance savings against operational risks. Improving productivity (automation, training) reduces variable costs sustainably. Premises costs are a major fixed cost.',
            topic: 'Methods to improve profit',
        },
        // Subtopic 3 — Profit vs cash distinction (×2)
        {
            id: 'fb-t8-7',
            stem: 'Explain the profit-cash timing difference:',
            template: 'Under the __BLANK__ principle, revenue is recognised when a sale is made, not when cash is received. A business selling on 60-day credit records profit immediately but must wait __BLANK__ days for cash to arrive. During this gap, it must still pay its own __BLANK__.',
            blanks: [
                { answer: 'accruals' },
                { answer: '60' },
                { answer: 'suppliers' },
            ],
            rationale: 'The accruals basis creates a timing gap. Revenue is recorded now, cash arrives later, but expenses must be paid now. This is why profitable businesses can face cash crises.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'fb-t8-8',
            stem: 'Complete the description of overtrading:',
            template: 'Overtrading is growing faster than __BLANK__ capital can support. The business must purchase inventory and hire __BLANK__ before cash from sales is collected. Working capital becomes stretched and the firm faces a __BLANK__ crisis.',
            blanks: [
                { answer: 'working' },
                { answer: 'staff' },
                { answer: 'liquidity' },
            ],
            rationale: 'Fast growth can be fatal without adequate working capital. Cash is spent (inventory, wages) before cash is received, creating a shortage despite profitable trading.',
            topic: 'Profit vs cash distinction',
        },
        // Subtopic 4 — Liquidity ratios (×2)
        {
            id: 'fb-t8-9',
            stem: 'Complete the liquidity ratio formulas and interpretation:',
            template: 'Current Ratio = Current Assets ÷ __BLANK__ Liabilities. Ideal: 1.5:1 to 2:1. Acid Test Ratio = (Current Assets - __BLANK__) ÷ Current Liabilities. Ideal: approximately 1:1.',
            blanks: [
                { answer: 'Current' },
                { answer: 'Inventory' },
            ],
            rationale: 'Current ratio measures overall short-term liquidity. Acid test is more conservative, excluding inventory which may not be quickly convertible to cash.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'fb-t8-10',
            stem: 'Interpret liquidity positions:',
            template: 'A current ratio below 1:1 indicates current liabilities exceed current assets — a serious __BLANK__ risk. A current ratio above 2:1 may indicate poor asset __BLANK__ with excessive cash or stock sitting idle.',
            blanks: [
                { answer: 'insolvency' },
                { answer: 'management' },
            ],
            rationale: 'Ratios below ideal suggest liquidity problems; ratios above ideal may indicate inefficient use of assets. Context matters — supermarkets operate safely with lower ratios.',
            topic: 'Liquidity ratios',
        },
        // Subtopic 5 — Working capital management (×2)
        {
            id: 'fb-t8-11',
            stem: 'Complete the cash conversion cycle calculation:',
            template: 'Inventory Days = (Inventory ÷ __BLANK__) × 365. Receivables Days = (Trade Receivables ÷ __BLANK__) × 365. Payables Days = (Trade Payables ÷ Cost of Sales) × 365.',
            blanks: [
                { answer: 'Cost of Sales' },
                { answer: 'Revenue' },
            ],
            rationale: 'The CCC components measure how long cash is tied up in each stage: inventory holding, debtor collection, and creditor payment. Lower figures improve cash flow.',
            topic: 'Working capital management',
        },
        {
            id: 'fb-t8-12',
            stem: 'Complete the working capital management strategies:',
            template: 'To improve working capital: reduce __BLANK__ days by offering early payment discounts; extend __BLANK__ days by negotiating longer supplier terms; reduce inventory days through JIT or better __BLANK__.',
            blanks: [
                { answer: 'receivables' },
                { answer: 'payables' },
                { answer: 'forecasting' },
            ],
            rationale: 'Effective working capital management shortens the cash conversion cycle. The goal is to collect cash faster from customers and delay payments to suppliers without damaging relationships.',
            topic: 'Working capital management',
        },
        // Subtopics 6 & 7 — Business failure causes (×1)
        {
            id: 'fb-t8-13',
            stem: 'Complete the internal vs external causes comparison:',
            template: '__BLANK__ causes of failure originate within the firm and are theoretically within management\'s control (e.g. poor cash flow management, overtrading). __BLANK__ causes are outside direct control (e.g. recession, increased competition, legislation changes). Most failures involve both.',
            blanks: [
                { answer: 'Internal' },
                { answer: 'External' },
            ],
            rationale: 'Internal causes can be prevented through better planning and controls. External causes cannot be prevented but can be mitigated through diversification and financial reserves.',
            topic: 'Causes of business failure',
        },
        {
            id: 'fb-t8-14',
            stem: 'Complete the business failure spiral stages:',
            template: 'Stage 1: Overconfidence — management assumes growth will continue. Stage 2: Rapid __BLANK__ — working capital is stretched. Stage 3: Cash shortage — revenue slows but overheads are fixed. Stage 4: __BLANK__ — cannot pay obligations as they fall due.',
            blanks: [
                { answer: 'expansion' },
                { answer: 'Insolvency' },
            ],
            rationale: 'Business failure typically follows a recognisable spiral. Early intervention at stages 1 or 2 can prevent collapse; by stage 4 it may be too late.',
            topic: 'Causes of business failure',
        },
        {
            id: 'fb-t8-15',
            stem: 'Complete the mitigation strategies:',
            template: 'To mitigate external threats: maintain __BLANK__ reserves for financial shocks; diversify across markets and products; use __BLANK__ planning for multiple scenarios; keep fixed costs lean through outsourcing and flexible staffing.',
            blanks: [
                { answer: 'cash' },
                { answer: 'scenario' },
            ],
            rationale: 'External threats cannot be eliminated but can be managed. Cash reserves provide a buffer; diversification reduces dependence; scenario planning enables faster response.',
            topic: 'Causes of business failure',
        },
    ],

    // ─────────────────────────────────────────────
    // DRAG-DROP — 10 questions (subtopics 0–7)
    // categories[] define where each item belongs; items[] can belong to multiple categories
    // ─────────────────────────────────────────────
    dragDrop: [
        // Subtopic 0 — Income statement structure
        {
            id: 'dd-t8-1',
            stem: 'Classify these items as either deducted to calculate GROSS PROFIT or NET PROFIT:',
            categories: ['Deducted for Gross Profit', 'Deducted for Net Profit'],
            items: [
                { text: 'Cost of Sales', category: 'Deducted for Gross Profit' },
                { text: 'Operating Expenses', category: 'Deducted for Net Profit' },
                { text: 'Revenue (added, not deducted)', category: 'Deducted for Gross Profit' },
                { text: 'Finance Costs (Interest)', category: 'Deducted for Net Profit' },
                { text: 'Taxation', category: 'Deducted for Net Profit' },
                { text: 'Distribution Costs', category: 'Deducted for Net Profit' },
            ],
            rationale: 'Gross profit = Revenue - Cost of Sales (direct costs only). Net profit = Gross profit - Operating expenses - Interest - Tax (all costs).',
            topic: 'Gross, operating and net profit',
        },
        // Subtopic 1 — Margin interpretation scenarios
        {
            id: 'dd-t8-2',
            stem: 'Match each scenario to its likely cause based on margin changes:',
            categories: ['GPM falls, OPM stable', 'GPM stable, OPM falls', 'Both margins fall', 'Both margins rise'],
            items: [
                { text: 'Rising raw material costs', category: 'GPM falls, OPM stable' },
                { text: 'Increasing overheads (rent, admin)', category: 'GPM stable, OPM falls' },
                { text: 'Operational efficiency improvements', category: 'Both margins rise' },
                { text: 'Broad cost pressures and falling revenue', category: 'Both margins fall' },
                { text: 'Discounting to boost sales volume', category: 'GPM falls, OPM stable' },
                { text: 'Better cost control procedures', category: 'Both margins rise' },
                { text: 'Higher interest payments', category: 'GPM stable, OPM falls' },
                { text: 'Renewed supplier contracts at higher prices', category: 'GPM falls, OPM stable' },
            ],
            rationale: 'Analysing which margin changes reveals the source of cost pressures. Falling GPM indicates direct cost issues; falling OPM indicates overhead or financing problems.',
            topic: 'Profitability ratios',
        },
        // Subtopic 2 — Profit improvement methods
        {
            id: 'dd-t8-3',
            stem: 'Classify each action as primarily INCREASING REVENUE or REDUCING COSTS:',
            categories: ['Increases Revenue', 'Reduces Costs'],
            items: [
                { text: 'Raise selling price (if demand inelastic)', category: 'Increases Revenue' },
                { text: 'Increase sales volume through advertising', category: 'Increases Revenue' },
                { text: 'Renegotiate cheaper supplier contracts', category: 'Reduces Costs' },
                { text: 'Downsize premises', category: 'Reduces Costs' },
                { text: 'Launch new products', category: 'Increases Revenue' },
                { text: 'Improve labour productivity through automation', category: 'Reduces Costs' },
                { text: 'Enter new geographic markets', category: 'Increases Revenue' },
                { text: 'Outsource non-core activities', category: 'Reduces Costs' },
            ],
            rationale: 'Profit = Revenue - Costs. Improving profit involves either increasing the numerator (revenue strategies) or decreasing the denominator (cost reduction strategies).',
            topic: 'Methods to improve profit',
        },
        // Subtopic 3 — Profit vs cash gap scenarios
        {
            id: 'dd-t8-4',
            stem: 'Classify each situation as creating a PROFIT-CASH GAP (cash later) or NO GAP:',
            categories: ['Creates Profit-Cash Gap', 'No Gap'],
            items: [
                { text: 'Selling on 90-day credit terms', category: 'Creates Profit-Cash Gap' },
                { text: 'Customers paying immediately (cash sales)', category: 'No Gap' },
                { text: 'Large capital expenditure (machinery purchase)', category: 'Creates Profit-Cash Gap' },
                { text: 'Paying for inventory on delivery', category: 'Creates Profit-Cash Gap' },
                { text: 'Leasing assets (spreads payments)', category: 'No Gap' },
                { text: 'Slow debtor collection (60+ days)', category: 'Creates Profit-Cash Gap' },
            ],
            rationale: 'Timing gaps between profit recognition and cash receipt create liquidity risk. The wider the gap, the more working capital is needed to bridge it.',
            topic: 'Profit vs cash distinction',
        },
        // Subtopic 4 — Liquidity ratio interpretation
        {
            id: 'dd-t8-5',
            stem: 'Categorise these current ratio values as LIQUIDITY POSITION:',
            categories: ['Strong Liquidity', 'Adequate Liquidity', 'Tight Liquidity', 'Poor/Problematic Liquidity'],
            items: [
                { text: 'Current ratio of 0.6:1', category: 'Poor/Problematic Liquidity' },
                { text: 'Current ratio of 1.2:1', category: 'Tight Liquidity' },
                { text: 'Current ratio of 1.8:1', category: 'Adequate Liquidity' },
                { text: 'Current ratio of 2.5:1', category: 'Strong Liquidity' },
                { text: 'Current ratio of 0.9:1', category: 'Poor/Problematic Liquidity' },
                { text: 'Current ratio of 1.5:1', category: 'Adequate Liquidity' },
                { text: 'Current ratio of 3.0:1', category: 'Strong Liquidity' },
            ],
            rationale: 'Current ratio interpretation: below 1:1 = serious concern; 1-1.5:1 = tight; 1.5-2:1 = adequate; above 2:1 = possibly excessive idle assets.',
            topic: 'Liquidity ratios',
        },
        // Subtopic 5 — Working capital components
        {
            id: 'dd-t8-6',
            stem: 'Classify each item as a CURRENT ASSET (inflow) or CURRENT LIABILITY (outflow):',
            categories: ['Current Asset (Cash Inflow)', 'Current Liability (Cash Outflow)'],
            items: [
                { text: 'Cash and cash equivalents', category: 'Current Asset (Cash Inflow)' },
                { text: 'Trade receivables (debtors)', category: 'Current Asset (Cash Inflow)' },
                { text: 'Inventories (stock)', category: 'Current Asset (Cash Inflow)' },
                { text: 'Trade payables (creditors)', category: 'Current Liability (Cash Outflow)' },
                { text: 'Bank overdraft', category: 'Current Liability (Cash Outflow)' },
                { text: 'Tax payable', category: 'Current Liability (Cash Outflow)' },
                { text: 'Short-term loans', category: 'Current Liability (Cash Outflow)' },
                { text: 'Prepaid expenses', category: 'Current Asset (Cash Inflow)' },
            ],
            rationale: 'Working capital = Current Assets (inflows or convertible to cash within 12 months) - Current Liabilities (payable within 12 months).',
            topic: 'Working capital management',
        },
        // Subtopic 6 — Internal failure causes
        {
            id: 'dd-t8-7',
            stem: 'Classify each as an INTERNAL or EXTERNAL cause of business failure:',
            categories: ['Internal Cause', 'External Cause'],
            items: [
                { text: 'Poor cash flow management', category: 'Internal Cause' },
                { text: 'Overtrading', category: 'Internal Cause' },
                { text: 'Poor management decisions', category: 'Internal Cause' },
                { text: 'Excessive debt', category: 'Internal Cause' },
                { text: 'Recession', category: 'External Cause' },
                { text: 'Increased competition', category: 'External Cause' },
                { text: 'Legislative changes', category: 'External Cause' },
                { text: 'Rising input costs', category: 'External Cause' },
            ],
            rationale: 'Internal causes are within management control; external causes cannot be controlled but can be mitigated. Most failures involve both internal weaknesses and external pressures.',
            topic: 'Internal causes of business failure',
        },
        // Subtopic 7 — External failure causes
        {
            id: 'dd-t8-8',
            stem: 'Match each external threat to its PESTLE category:',
            categories: ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental'],
            items: [
                { text: 'Trade tariffs on imported materials', category: 'Political' },
                { text: 'Recession reducing consumer spending', category: 'Economic' },
                { text: 'Shift towards healthier eating habits', category: 'Social' },
                { text: 'Online competitors disrupting retail', category: 'Technological' },
                { text: 'New minimum wage legislation', category: 'Legal' },
                { text: 'Carbon emissions regulations', category: 'Environmental' },
                { text: 'Brexit uncertainty', category: 'Political' },
                { text: 'Interest rate rises', category: 'Economic' },
                { text: 'Changing consumer preferences', category: 'Social' },
                { text: 'Digital platform business models', category: 'Technological' },
                { text: 'Corporation tax increases', category: 'Legal' },
            ],
            rationale: 'PESTLE framework helps systematically identify external threats. Each category requires different management responses — lobbying, diversification, innovation, or compliance.',
            topic: 'External causes of business failure',
        },
        // Subtopic 2 — Short-run vs long-run trade-offs
        {
            id: 'dd-t8-9',
            stem: 'Classify each profit improvement action as SHORT-RUN GAIN or LONG-RUN GAIN:',
            categories: ['Short-Run Gain (but long-run risk)', 'Long-Run Gain (may need short-run investment)'],
            items: [
                { text: 'Cutting marketing spend', category: 'Short-Run Gain (but long-run risk)' },
                { text: 'Reducing R&D investment', category: 'Short-Run Gain (but long-run risk)' },
                { text: 'Automation (capital expenditure)', category: 'Long-Run Gain (may need short-run investment)' },
                { text: 'Discounting prices', category: 'Short-Run Gain (but long-run risk)' },
                { text: 'Staff redundancies', category: 'Short-Run Gain (but long-run risk)' },
                { text: 'New product development', category: 'Long-Run Gain (may need short-run investment)' },
            ],
            rationale: 'Some actions boost profit immediately but damage long-term prospects (e.g. cutting marketing erodes brand). Others require investment but deliver sustained growth.',
            topic: 'Methods to improve profit',
        },
        // Subtopic 5 — CCC management strategies
        {
            id: 'dd-t8-10',
            stem: 'Classify each strategy as REDUCING, INCREASING, or NEUTRAL on the Cash Conversion Cycle:',
            categories: ['Reduces CCC (good)', 'Increases CCC (bad)', 'Neutral/Context-dependent'],
            items: [
                { text: 'Offer early payment discounts to debtors', category: 'Reduces CCC (good)' },
                { text: 'Extend creditor payment terms', category: 'Reduces CCC (good)' },
                { text: 'Hold excess safety stock', category: 'Increases CCC (bad)' },
                { text: 'Use just-in-time (JIT) ordering', category: 'Reduces CCC (good)' },
                { text: 'Poor demand forecasting', category: 'Increases CCC (bad)' },
                { text: 'Strict credit control on customers', category: 'Reduces CCC (good)' },
            ],
            rationale: 'Reducing CCC improves liquidity and reduces working capital requirements. Every day shaved off the cycle frees cash that was previously tied up.',
            topic: 'Working capital management',
        },
    ],

    // ─────────────────────────────────────────────
    // SEQUENCE — 8 questions (subtopics 0–7)
    // steps[] are in CORRECT ORDER; component shuffles them for student
    // ─────────────────────────────────────────────
    sequence: [
        // Subtopic 0 — Income statement calculation order
        {
            id: 'seq-t8-1',
            stem: 'Arrange the income statement items in the correct order (top to bottom):',
            steps: [
                'Revenue (Turnover) — total sales income for the period',
                'Less: Cost of Sales — direct costs of producing goods sold',
                '= Gross Profit — revenue minus cost of sales',
                'Less: Operating Expenses — distribution, admin, rent, salaries',
                '= Operating Profit (EBIT) — gross profit minus overheads',
                'Less: Finance Costs (Interest) — interest payable on loans/bonds',
                'Less: Taxation — corporation tax payable',
                '= Net Profit (Profit for the Year) — earnings available for owners',
            ],
        },
        // Subtopic 1 — Analysing profitability ratios
        {
            id: 'seq-t8-2',
            stem: 'Arrange the steps for interpreting a falling gross profit margin:',
            steps: [
                'Calculate GPM using formula: (Gross Profit ÷ Revenue) × 100',
                'Compare GPM to previous periods (trend analysis)',
                'Identify if GPM has fallen or improved over time',
                'If fallen, identify likely cause: rising raw material costs, discounting, or unfavourable product mix',
                'Recommend corrective action: renegotiate suppliers, review pricing, or shift product mix',
                'Monitor subsequent periods to evaluate effectiveness of action taken',
            ],
        },
        // Subtopic 2 — Profit improvement decision process
        {
            id: 'seq-t8-3',
            stem: 'Arrange the decision-making process for choosing how to improve profit:',
            steps: [
                'Analyse current profit margins and identify cost structure',
                'Assess market conditions: demand elasticity and competitive environment',
                'Evaluate pricing power: can price be raised without losing volume?',
                'If inelastic demand: consider price increase as primary strategy',
                'If elastic demand: focus on volume growth through marketing',
                'Review cost reduction opportunities: supplier renegotiation, productivity improvements',
                'Assess product mix: which lines have highest margins?',
                'Select and implement strategy, monitoring short-run vs long-run trade-offs',
            ],
        },
        // Subtopic 3 — Managing profit-cash gap
        {
            id: 'seq-t8-4',
            stem: 'Arrange the steps to address a profit-cash gap caused by slow debtors:',
            steps: [
                'Identify the problem: calculate debtor days and compare to industry average',
                'Review credit terms currently offered to customers',
                'Implement stricter credit control: credit checks on new customers',
                'Offer early payment discounts (e.g. 2% for payment within 10 days)',
                'Invoice promptly and chase overdue payments systematically',
                'Consider invoice factoring if cash needs are urgent',
                'Monitor debtor days monthly to assess improvement',
            ],
        },
        // Subtopic 4 — Liquidity ratio interpretation workflow
        {
            id: 'seq-t8-5',
            stem: 'Arrange the steps for interpreting a poor current ratio (below 1.5:1):',
            steps: [
                'Calculate current ratio: Current Assets ÷ Current Liabilities',
                'Compare result to ideal benchmark (1.5:1 to 2:1)',
                'Identify if ratio is below, within, or above ideal range',
                'Analyse components: are current assets too low or liabilities too high?',
                'Review debtor collection: are receivables days excessive?',
                'Review inventory: is excessive stock tying up cash?',
                'Review creditor terms: are payables being paid too quickly?',
                'Implement appropriate strategy: chase debtors, reduce stock, or extend supplier terms',
            ],
        },
        // Subtopic 5 — Working capital optimisation
        {
            id: 'seq-t8-6',
            stem: 'Arrange the process for optimising the cash conversion cycle:',
            steps: [
                'Calculate current CCC: Inventory Days + Receivables Days - Payables Days',
                'Break down into three components to identify the bottleneck',
                'If inventory days are high: review forecasting, implement JIT ordering',
                'If receivables days are high: offer early payment discounts, tighten credit control',
                'If payables days are short: negotiate extended terms with suppliers',
                'Re-calculate CCC after implementing changes',
                'Compare to industry benchmark and monitor trend over time',
            ],
        },
        // Subtopic 6 — Business failure prevention
        {
            id: 'seq-t8-7',
            stem: 'Arrange the stages of the business failure spiral in order:',
            steps: [
                'Stage 1: Overconfidence — early success leads to complacency',
                'Management ignores warning signs and makes ambitious expansion plans',
                'Stage 2: Rapid expansion — acquire premises, hire staff, extend credit',
                'Working capital is stretched as cash is spent before revenue arrives',
                'Stage 3: Cash shortage — revenue growth slows but overheads are fixed',
                'Overdraft limits reached, suppliers demand earlier payment',
                'Stage 4: Insolvency — cannot pay obligations as they fall due',
                'Creditors apply for winding-up orders; administrators are called in',
            ],
        },
        // Subtopic 7 — External threat response
        {
            id: 'seq-t8-8',
            stem: 'Arrange the steps for responding to an economic recession:',
            steps: [
                'Monitor economic indicators: GDP growth, consumer confidence indices',
                'Prepare financial forecasts for recession scenarios (reduced revenue)',
                'Review cost structure: identify where expenses can be cut',
                'Build or reinforce cash reserves to bridge revenue shortfalls',
                'Diversify product range into recession-resistant categories',
                'Consider targeting value-conscious market segments',
                'Reduce or defer non-essential capital expenditure',
                'Communicate with lenders early if difficulties are anticipated',
                'Review strategy post-recession for recovery opportunities',
            ],
        },
    ],

    // ─────────────────────────────────────────────
    // KEYWORD — 12 questions (subtopics 0–7)
    // checks[] list terms to find in answer; all must be present
    // ─────────────────────────────────────────────
    keyword: [
        // Subtopic 0 — Income statement terms
        {
            id: 'kw-t8-1',
            stem: 'Explain the difference between gross profit, operating profit and net profit. Use terms: REVENUE, COST OF SALES, OPERATING EXPENSES, INTEREST, TAX.',
            checks: ['revenue', 'cost of sales', 'operating expenses', 'interest', 'tax'],
            rationale: 'Gross profit = revenue - cost of sales. Operating profit = gross profit - operating expenses. Net profit = operating profit - interest - tax.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'kw-t8-2',
            stem: 'Describe what each profit figure indicates about business performance. Use terms: TRADING EFFICIENCY, OPERATIONAL EFFICIENCY, RETURNS TO OWNERS, EBIT.',
            checks: ['trading efficiency', 'operational efficiency', 'returns to owners', 'ebit'],
            rationale: 'Gross profit measures trading efficiency (production/pricing). Operating profit (EBIT) measures operational efficiency. Net profit shows returns to owners after all costs.',
            topic: 'Gross, operating and net profit',
        },
        // Subtopic 1 — Profitability ratios
        {
            id: 'kw-t8-3',
            stem: 'Explain how to calculate and interpret gross profit margin. Use terms: FORMULA, PERCENTAGE, PRODUCTION EFFICIENCY, TREND ANALYSIS.',
            checks: ['formula', 'percentage', 'production efficiency', 'trend analysis'],
            rationale: 'GPM formula: (Gross Profit ÷ Revenue) × 100. It shows production efficiency as a percentage. Compare over time (trend analysis) and to competitors.',
            topic: 'Profitability ratios',
        },
        {
            id: 'kw-t8-4',
            stem: 'Compare operating profit margin and net profit margin. Use terms: INTERMEDIATE COSTS, FINANCING DECISIONS, OPERATIONAL CONTROL, CAPITAL STRUCTURE.',
            checks: ['intermediate costs', 'financing decisions', 'operational control', 'capital structure'],
            rationale: 'OPM excludes interest and tax, reflecting operational control. NPM includes financing costs, affected by capital structure decisions. The gap shows financing impact.',
            topic: 'Profitability ratios',
        },
        // Subtopic 2 — Profit improvement
        {
            id: 'kw-t8-5',
            stem: 'Discuss three methods to increase revenue and improve profit. Use terms: PRICE INELASTICITY, SALES VOLUME, NEW MARKETS, PRODUCT DEVELOPMENT.',
            checks: ['price inelasticity', 'sales volume', 'new markets', 'product development'],
            rationale: 'Revenue can increase by: raising price (if demand inelastic), increasing volume through marketing, entering new markets, or launching new products. Each has trade-offs.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'kw-t8-6',
            stem: 'Explain cost reduction methods and their risks. Use terms: VARIABLE COSTS, FIXED COSTS, QUALITY, SUPPLIER RELATIONSHIPS, ECONOMIES OF SCALE.',
            checks: ['variable costs', 'fixed costs', 'quality', 'supplier relationships', 'economies of scale'],
            rationale: 'Variable costs: renegotiate suppliers, improve productivity. Fixed costs: downsize, move premises. Risks: quality may suffer, supplier relationships damaged. Economies of scale reduce unit cost.',
            topic: 'Methods to improve profit',
        },
        // Subtopic 3 — Profit vs cash
        {
            id: 'kw-t8-7',
            stem: 'Explain why a profitable business might fail due to cash flow problems. Use terms: ACCRUALS BASIS, TRADE CREDIT, OVERTRADING, INSOLVENCY, WORKING CAPITAL.',
            checks: ['accruals basis', 'trade credit', 'overtrading', 'insolvency', 'working capital'],
            rationale: 'Under accruals, profit is recorded before cash arrives. Trade credit delays cash. Overtrading strains working capital. Without cash, a firm becomes insolvent even if profitable.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'kw-t8-8',
            stem: 'Describe strategies to close the profit-cash gap. Use terms: DEBTOR DAYS, EARLY PAYMENT DISCOUNTS, FACTORING, OVERDRAFT, CASH FLOW FORECAST.',
            checks: ['debtor days', 'early payment discounts', 'factoring', 'overdraft', 'cash flow forecast'],
            rationale: 'Reduce debtor days with discounts, credit control, or factoring. Arrange overdraft facility for shortfalls. Use cash flow forecasting to anticipate gaps.',
            topic: 'Profit vs cash distinction',
        },
        // Subtopic 4 — Liquidity
        {
            id: 'kw-t8-9',
            stem: 'Explain the importance of liquidity ratios and their limitations. Use terms: CURRENT RATIO, ACID TEST, IDEAL VALUES, INDUSTRY CONTEXT, SNAPSHOT.',
            checks: ['current ratio', 'acid test', 'ideal values', 'industry context', 'snapshot'],
            rationale: 'Current ratio (1.5-2:1 ideal) and acid test (~1:1 ideal) measure short-term liquidity. Ideal values vary by industry context. Ratios are a snapshot, can change rapidly.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'kw-t8-10',
            stem: 'Describe how to improve liquidity when ratios are poor. Use terms: INCREASE CURRENT ASSETS, REDUCE CURRENT LIABILITIES, SELL ASSETS, LEASEBACK.',
            checks: ['increase current assets', 'reduce current liabilities', 'sell assets', 'leaseback'],
            rationale: 'Improve by: increasing current assets (chase debtors), reducing liabilities (extend creditor terms), selling surplus assets, or sale and leaseback to raise cash.',
            topic: 'Liquidity ratios',
        },
        // Subtopics 5, 6, 7 — Working capital and failure
        {
            id: 'kw-t8-11',
            stem: 'Explain working capital management and its importance. Use terms: CURRENT ASSETS, CURRENT LIABILITIES, CASH CONVERSION CYCLE, CCC, INVENTORY, RECEIVABLES, PAYABLES.',
            checks: ['current assets', 'current liabilities', 'cash conversion cycle', 'ccc', 'inventory', 'receivables', 'payables'],
            rationale: 'Working capital = current assets - current liabilities. Manage by controlling inventory, receivables and payables. CCC = days cash tied up. Lower CCC improves liquidity.',
            topic: 'Working capital management',
        },
        {
            id: 'kw-t8-12',
            stem: 'Discuss internal and external causes of business failure. Use terms: POOR MANAGEMENT, OVERTRADING, EXCESSIVE DEBT, RECESSION, COMPETITION, LEGISLATION, PESTLE.',
            checks: ['poor management', 'overtrading', 'excessive debt', 'recession', 'competition', 'legislation', 'pestle'],
            rationale: 'Internal: poor management, overtrading, excessive debt. External: recession, competition, legislation. Use PESTLE framework to analyse external threats. Most failures involve both.',
            topic: 'Causes of business failure',
        },
    ],

    // ─────────────────────────────────────────────
    // FLASHCARDS — 30 cards (subtopics 0–7)
    // front/back format for spaced repetition learning
    // ─────────────────────────────────────────────
    flashcards: [
        // Subtopic 0 — Gross, operating and net profit (×4)
        {
            id: 'fc-t8-1',
            front: 'What is the formula for Gross Profit?',
            back: 'Gross Profit = Revenue - Cost of Sales. It shows profit from core trading activity before overhead expenses are deducted.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'fc-t8-2',
            front: 'What is the formula for Operating Profit?',
            back: 'Operating Profit = Gross Profit - Operating Expenses. Also called EBIT (Earnings Before Interest and Tax). Best for comparing operational efficiency.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'fc-t8-3',
            front: 'What is the formula for Net Profit?',
            back: 'Net Profit = Operating Profit - Interest - Tax. Also called "profit for the year" or "profit after tax". Represents earnings available to owners.',
            topic: 'Gross, operating and net profit',
        },
        {
            id: 'fc-t8-4',
            front: 'What items are included in Cost of Sales?',
            back: 'Direct costs only: raw materials, direct labour wages, and factory-level production overheads. Excludes overheads like rent and admin.',
            topic: 'Gross, operating and net profit',
        },
        // Subtopic 1 — Profitability ratios (×4)
        {
            id: 'fc-t8-5',
            front: 'What is Gross Profit Margin (GPM) and how is it calculated?',
            back: 'GPM = (Gross Profit ÷ Revenue) × 100. Shows what percentage of revenue is retained after direct production costs. Indicates pricing and production efficiency.',
            topic: 'Profitability ratios',
        },
        {
            id: 'fc-t8-6',
            front: 'What is Operating Profit Margin (OPM) and why is it useful?',
            back: 'OPM = (Operating Profit ÷ Revenue) × 100. Useful for inter-firm comparison because it excludes interest and tax, focusing purely on operational performance.',
            topic: 'Profitability ratios',
        },
        {
            id: 'fc-t8-7',
            front: 'What is Net Profit Margin (NPM)?',
            back: 'NPM = (Net Profit ÷ Revenue) × 100. Most comprehensive profitability ratio, showing returns to owners after all costs including financing and tax.',
            topic: 'Profitability ratios',
        },
        {
            id: 'fc-t8-8',
            front: 'What does a falling GPM with stable OPM indicate?',
            back: 'Rising direct production costs (raw materials, direct labour). Operating expenses are controlled, but cost of sales has risen, reducing trading efficiency.',
            topic: 'Profitability ratios',
        },
        // Subtopic 2 — Methods to improve profit (×4)
        {
            id: 'fc-t8-9',
            front: 'When is raising price the most effective way to improve profit?',
            back: 'When demand is price inelastic — customers are relatively unresponsive to price changes. Revenue rises with minimal fall in sales volume, boosting profit.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'fc-t8-10',
            front: 'What is the product mix strategy for improving profit?',
            back: 'Shift sales towards higher-margin products and away from low-margin or loss-making lines. Improves average margin per sale without changing total revenue.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'fc-t8-11',
            front: 'What are economies of scale?',
            back: 'Cost advantages that increase with production volume. Larger firms benefit from bulk purchasing discounts, spreading fixed costs over more units, and specialised processes that reduce average unit cost.',
            topic: 'Methods to improve profit',
        },
        {
            id: 'fc-t8-12',
            front: 'What is a major risk of aggressive cost-cutting?',
            back: 'Quality may suffer if cheaper suppliers are used, staff morale damaged by redundancies, or brand weakened by cutting marketing. Short-term gain may create long-term damage.',
            topic: 'Methods to improve profit',
        },
        // Subtopic 3 — Profit vs cash distinction (×4)
        {
            id: 'fc-t8-13',
            front: 'Why can profit and cash differ under accruals accounting?',
            back: 'Revenue is recognised when a sale is made (accruals basis), but cash is only received when customer pays. This timing gap means a profitable firm can have cash flow problems.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'fc-t8-14',
            front: 'What is overtrading and why is it dangerous?',
            back: 'Expanding sales faster than working capital can support. Business must purchase inventory and hire staff before cash from sales arrives, creating liquidity crisis despite profitability.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'fc-t8-15',
            front: 'Why does capital expenditure cause a profit-cash gap?',
            back: 'Machinery/vehicles are paid in full immediately (large cash outflow), but cost is spread over years as depreciation. Profit falls gradually, but cash drops sharply now.',
            topic: 'Profit vs cash distinction',
        },
        {
            id: 'fc-t8-16',
            front: 'What is insolvency?',
            back: 'Inability to pay debts as they fall due. A business can be profitable (showing profit on income statement) but become insolvent if it lacks sufficient cash to meet obligations.',
            topic: 'Profit vs cash distinction',
        },
        // Subtopic 4 — Liquidity ratios (×4)
        {
            id: 'fc-t8-17',
            front: 'What is the formula and ideal range for Current Ratio?',
            back: 'Current Ratio = Current Assets ÷ Current Liabilities. Ideal range: 1.5:1 to 2:1. Below 1:1 indicates difficulty meeting short-term obligations.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'fc-t8-18',
            front: 'What is the Acid Test Ratio and why is inventory excluded?',
            back: 'Acid Test = (Current Assets - Inventory) ÷ Current Liabilities. Inventory is excluded because stock may not be quickly convertible to cash. Provides more conservative liquidity measure.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'fc-t8-19',
            front: 'Why might a supermarket have a low acid test ratio (<1:1)?',
            back: 'Customers pay cash immediately at point of sale, but supermarket pays suppliers on 30-60 day credit. Negative cash conversion cycle means cash is collected before it is paid out — normal for the industry.',
            topic: 'Liquidity ratios',
        },
        {
            id: 'fc-t8-20',
            front: 'What does a current ratio above 2:1 suggest?',
            back: 'Possibly poor asset management with excessive idle cash or inventory. Assets could be invested more productively (e.g. in marketing, R&D, or new equipment) rather than sitting idle.',
            topic: 'Liquidity ratios',
        },
        // Subtopic 5 — Working capital management (×4)
        {
            id: 'fc-t8-21',
            front: 'What is working capital and its formula?',
            back: 'Working Capital = Current Assets - Current Liabilities. Capital available for day-to-day operations. Positive = adequate liquidity; Negative = serious concern.',
            topic: 'Working capital management',
        },
        {
            id: 'fc-t8-22',
            front: 'What is the Cash Conversion Cycle (CCC) formula?',
            back: 'CCC = Inventory Days + Receivables Days - Payables Days. Measures average days cash is tied up before being recovered from sales. Lower CCC is better.',
            topic: 'Working capital management',
        },
        {
            id: 'fc-t8-23',
            front: 'What is factoring and how does it help working capital?',
            back: 'Selling trade receivables to a specialist company at a discount. Business receives immediate cash (minus fee) instead of waiting for customers to pay, improving liquidity.',
            topic: 'Working capital management',
        },
        {
            id: 'fc-t8-24',
            front: 'What is just-in-time (JIT) ordering?',
            back: 'Ordering materials only when needed for production. Minimises inventory holding costs and cash tied up in stock. Requires reliable suppliers and accurate demand forecasting.',
            topic: 'Working capital management',
        },
        // Subtopic 6 — Internal causes of business failure (×3)
        {
            id: 'fc-t8-25',
            front: 'What are three main internal causes of business failure?',
            back: '1) Poor cash flow management — failing to forecast or collect payments. 2) Overtrading — growing faster than working capital allows. 3) Poor management decisions — strategic errors or inadequate controls.',
            topic: 'Internal causes of business failure',
        },
        {
            id: 'fc-t8-26',
            front: 'What are warning signs of overtrading?',
            back: 'Rapidly rising revenue with consistently negative cash flow; falling current and acid test ratios; growing reliance on overdraft; inability to fulfil orders on time; suppliers demanding earlier payment.',
            topic: 'Internal causes of business failure',
        },
        {
            id: 'fc-t8-27',
            front: 'How does excessive debt lead to business failure?',
            back: 'High debt levels create large interest payments that drain cash flow. If cash insufficient to service debt, covenants breached, lenders demand repayment, leading to insolvency.',
            topic: 'Internal causes of business failure',
        },
        // Subtopic 7 — External causes of business failure (×3)
        {
            id: 'fc-t8-28',
            front: 'What are three main external causes of business failure?',
            back: '1) Economic recession — reduced consumer spending and business investment. 2) Increased competition — erodes market share and margins. 3) Legislative changes — increase costs or restrict operations.',
            topic: 'External causes of business failure',
        },
        {
            id: 'fc-t8-29',
            front: 'What is the PESTLE framework used for?',
            back: 'Analysing external threats: Political, Economic, Social, Technological, Legal, Environmental. Helps identify risks outside direct management control and plan appropriate responses.',
            topic: 'External causes of business failure',
        },
        {
            id: 'fc-t8-30',
            front: 'How can businesses mitigate external threats?',
            back: 'Diversification across markets/products; maintaining cash reserves; scenario planning for multiple futures; continuous PESTLE monitoring; building strategic flexibility with lean fixed costs.',
            topic: 'External causes of business failure',
        },
    ],
};
