export const exercises_accounting_1_4 = {
    mcq: [
        // FIFO, LIFO and NRV methods
        {
            id: 'mcq-t4-1',
            stem: 'Under the FIFO (First-In-First-Out) inventory valuation method, which inventory is assumed to be sold first?',
            options: ['Most recently purchased inventory', 'Oldest inventory purchased', 'Inventory with lowest cost', 'Inventory with highest cost'],
            correctAnswer: 1,
            rationale: 'FIFO assumes that the oldest inventory items (first-in) are sold first (first-out). This matches the physical flow of goods for most businesses and results in ending inventory valued at the most recent purchase prices.',
            topic: 'FIFO, LIFO and NRV methods'
        },
        {
            id: 'mcq-t4-2',
            stem: 'During periods of rising prices, which inventory valuation method results in the highest reported gross profit?',
            options: ['FIFO', 'LIFO', 'Average Cost', 'All methods yield the same result'],
            correctAnswer: 0,
            rationale: 'When prices are rising, FIFO assigns the lowest (oldest) costs to cost of goods sold, which results in a higher gross profit. LIFO assigns the highest (most recent) costs to COGS, resulting in lower gross profit.',
            topic: 'FIFO, LIFO and NRV methods'
        },
        {
            id: 'mcq-t4-3',
            stem: 'Net Realisable Value (NRV) is defined as:',
            options: ['Historical cost of inventory', 'Estimated selling price less estimated costs to complete and sell', 'Replacement cost of inventory', 'Original purchase price'],
            correctAnswer: 1,
            rationale: 'NRV is the estimated selling price in the ordinary course of business, less any estimated costs of completion and selling expenses. Inventory should be valued at the lower of cost and NRV according to IAS 2.',
            topic: 'FIFO, LIFO and NRV methods'
        },

        // Perpetual vs periodic inventory valuation
        {
            id: 'mcq-t4-4',
            stem: 'Under the perpetual inventory system, the Cost of Goods Sold account is updated:',
            options: ['Only at the end of the accounting period', 'Every time a sale is made', 'Only when inventory is counted physically', 'Once per month regardless of sales'],
            correctAnswer: 1,
            rationale: 'In a perpetual inventory system, each sale triggers an immediate update to both inventory and COGS accounts. This provides real-time tracking of inventory levels and costs throughout the period.',
            topic: 'Perpetual vs periodic inventory valuation'
        },
        {
            id: 'mcq-t4-5',
            stem: 'The periodic inventory system requires which of the following?',
            options: ['Continuous tracking of each inventory item', 'Physical inventory count at period end', 'Real-time COGS calculation', 'Individual item cost tracking'],
            correctAnswer: 1,
            rationale: 'Periodic inventory does not track inventory continuously. Instead, it relies on a physical count at the end of the period to determine ending inventory, with COGS calculated as: Beginning Inventory + Purchases - Ending Inventory.',
            topic: 'Perpetual vs periodic inventory valuation'
        },
        {
            id: 'mcq-t4-6',
            stem: 'Which inventory system is more suitable for businesses with high-volume, low-value items?',
            options: ['Perpetual inventory system', 'Periodic inventory system', 'Both are equally suitable', 'Neither system is appropriate'],
            correctAnswer: 1,
            rationale: 'The periodic system is more cost-effective for businesses with many low-value items (e.g., small retail stores) because maintaining continuous records for each item would be excessively time-consuming and expensive.',
            topic: 'Perpetual vs periodic inventory valuation'
        },

        // Inventory valuation effects on profit
        {
            id: 'mcq-t4-7',
            stem: 'An error in ending inventory valuation will affect both the current period and the following period. Which statement is correct?',
            options: ['Overstating ending inventory overstates profit in both periods', 'Understating ending inventory understates profit in both periods', 'Overstating ending inventory overstates current profit but understates next period profit', 'Inventory errors have no effect on profit'],
            correctAnswer: 2,
            rationale: 'Overstating ending inventory understates COGS, which overstates current period profit. However, this overstatement becomes the next period beginning inventory, causing COGS to be overstated and profit to be understated in the following period (self-correcting error).',
            topic: 'Inventory valuation effects on profit'
        },
        {
            id: 'mcq-t4-8',
            stem: 'If inventory is written down to NRV due to damage, this results in:',
            options: ['Higher reported profit', 'Lower reported profit in current period only', 'Higher cost of goods sold', 'No effect on financial statements'],
            correctAnswer: 1,
            rationale: 'Writing inventory down to NRV recognizes an impairment loss, which reduces profit in the current period. The loss is typically included in cost of goods sold or shown separately as an inventory write-down expense.',
            topic: 'Inventory valuation effects on profit'
        },

        // Labour productivity
        {
            id: 'mcq-t4-9',
            stem: 'Labour productivity is best measured by:',
            options: ['Total wages paid', 'Number of hours worked', 'Output per labour hour or labour cost', 'Number of employees'],
            correctAnswer: 2,
            rationale: 'Productivity measures the efficiency of labour input, calculated as output quantity divided by labour input (either hours or cost). Higher ratios indicate greater efficiency and better utilization of labour resources.',
            topic: 'Labour productivity'
        },
        {
            id: 'mcq-t4-10',
            stem: 'Which of the following actions would most likely increase labour productivity?',
            options: ['Reducing training for workers', 'Increasing automation of repetitive tasks', 'Hiring more supervisors', 'Extending working hours'],
            correctAnswer: 1,
            rationale: 'Automation reduces the labour hours required to produce a given output, thereby increasing productivity. The same output can be achieved with fewer labour hours, or more output with the same labour input.',
            topic: 'Labour productivity'
        },

        // Remuneration methods
        {
            id: 'mcq-t4-11',
            stem: 'Under a piecework system, an employee is paid based on:',
            options: ['Hours worked', 'Number of units produced', 'Fixed monthly salary', 'Seniority and experience'],
            correctAnswer: 1,
            rationale: 'Piecework pays workers a fixed amount for each unit produced. This incentivizes higher output and directly ties compensation to productivity, though it may lead to quality issues if not properly managed.',
            topic: 'Remuneration methods'
        },
        {
            id: 'mcq-t4-12',
            stem: 'A premium rate system (piecework with guaranteed minimum) provides:',
            options: ['No guarantee of minimum earnings', 'Payment only for units above a standard quota', 'Guaranteed minimum wage plus bonus for extra output', 'Fixed salary regardless of output'],
            correctAnswer: 2,
            rationale: 'A guaranteed minimum ensures workers receive a base wage even if production is low. Additional output above a standard earns extra payment, providing both security and productivity incentives.',
            topic: 'Remuneration methods'
        },
        {
            id: 'mcq-t4-13',
            stem: 'Halsey premium bonus scheme shares the time saved between worker and employer in what proportion?',
            options: ['50:50', '60:40 in favour of worker', '40:60 in favour of worker', '75:25 in favour of worker'],
            correctAnswer: 0,
            rationale: 'The Halsey scheme splits time saved equally: 50% goes to the worker as bonus, 50% benefits the employer through lower labour cost. This provides incentive while giving the employer a share of efficiency gains.',
            topic: 'Remuneration methods'
        },

        // Employer cost vs employee earnings
        {
            id: 'mcq-t4-14',
            stem: 'Employers must pay additional costs beyond gross wages, including:',
            options: ['Employee benefits and contributions only', 'Gross wages only', 'Employee net pay', 'Gross wages plus employer contributions'],
            correctAnswer: 3,
            rationale: 'Labour cost to employer includes gross wages plus employer contributions (e.g., social security, pension, health insurance). Employee earnings are gross wages less employee deductions (taxes, employee share of benefits).',
            topic: 'Employer cost vs employee earnings'
        },
        {
            id: 'mcq-t4-15',
            stem: 'Gross wages of $5,000, employee tax deduction of $1,000, employee pension contribution of $200, and employer pension contribution of $300. What is the total labour cost to the employer?',
            options: ['$3,800', '$5,000', '$5,300', '$6,500'],
            correctAnswer: 2,
            rationale: 'Total labour cost = Gross wages + Employer contributions = $5,000 + $300 = $5,300. Employee deductions ($1,000 + $200 = $1,200) reduce net pay to $3,800 but are not costs to the employer.',
            topic: 'Employer cost vs employee earnings'
        },

        // Overhead classifications
        {
            id: 'mcq-t4-16',
            stem: 'Which of the following is an example of a production overhead?',
            options: ['Sales commission', 'Factory rent', 'Office supplies', 'Marketing expenses'],
            correctAnswer: 1,
            rationale: 'Production overheads are costs incurred in the manufacturing process that cannot be directly traced to specific units. Factory rent is a classic example. Sales commission and marketing are selling overheads; office supplies are administrative.',
            topic: 'Overhead classifications'
        },
        {
            id: 'mcq-t4-17',
            stem: 'Depreciation of production machinery is classified as:',
            options: ['Direct material cost', 'Direct labour cost', 'Production overhead', 'Selling overhead'],
            correctAnswer: 2,
            rationale: 'Depreciation of manufacturing equipment is a production overhead because it cannot be directly traced to individual units and is part of the manufacturing process. It must be allocated to products through an absorption rate.',
            topic: 'Overhead classifications'
        },
        {
            id: 'mcq-t4-18',
            stem: 'Fixed overheads are those that:',
            options: ['Vary directly with production volume', 'Remain constant per unit produced', 'Remain constant in total within relevant range', 'Always decrease as production increases'],
            correctAnswer: 2,
            rationale: 'Fixed overheads remain constant in total within the relevant production range, though the cost per unit decreases as production increases. Examples include factory rent, supervisors salaries, and depreciation.',
            topic: 'Overhead classifications'
        },

        // Overhead allocation and apportionment
        {
            id: 'mcq-t4-19',
            stem: 'The difference between allocation and apportionment is that allocation:',
            options: ['Estimates costs based on usage', 'Directly charges costs to cost centres', 'Shares costs between centres', 'Is used only for variable costs'],
            correctAnswer: 1,
            rationale: 'Allocation directly assigns costs to cost centres where they can be specifically identified (e.g., direct materials to a department). Apportionment divides shared costs between centres based on an appropriate basis (e.g., rent by floor area).',
            topic: 'Overhead allocation and apportionment'
        },
        {
            id: 'mcq-t4-20',
            stem: 'When apportioning electricity costs to production departments, which basis is most appropriate?',
            options: ['Number of employees', 'Floor area', 'Machine hours or power consumption', 'Value of assets'],
            correctAnswer: 2,
            rationale: 'Electricity consumption is best apportioned based on machine hours or measured power consumption, as these directly relate to usage. Floor area may be used if consumption is primarily lighting, but machine hours better reflect production-related electricity use.',
            topic: 'Overhead allocation and apportionment'
        },

        // Service-department reapportionment
        {
            id: 'mcq-t4-21',
            stem: 'Service departments provide services to production departments and:',
            options: ['Cannot receive services from each other', 'Only serve a single production department', 'Often provide services to each other', 'Have no overhead costs'],
            correctAnswer: 2,
            rationale: 'Service departments (e.g., maintenance, canteen, stores) often provide services to each other as well as production departments. This interdepartmental service complicates overhead reapportionment and requires specific methods to handle.',
            topic: 'Service-department reapportionment'
        },
        {
            id: 'mcq-t4-22',
            stem: 'The direct method of service department reapportionment:',
            options: ['Ignores interdepartmental services', 'Iteratively reapportions until service costs are zero', 'Applies a simultaneous equation approach', 'Is the most accurate method'],
            correctAnswer: 0,
            rationale: 'The direct method ignores services between service departments, reapportioning all service department costs directly to production departments. It is simple but less accurate than reciprocal or step-down methods.',
            topic: 'Service-department reapportionment'
        },

        // Machine and labour hour rates
        {
            id: 'mcq-t4-23',
            stem: 'The machine hour rate is calculated by dividing:',
            options: ['Total overheads by total labour hours', 'Budgeted overheads by budgeted machine hours', 'Total direct costs by machine hours', 'Fixed overheads only by machine hours'],
            correctAnswer: 1,
            rationale: 'Machine hour rate = Budgeted production overheads / Budgeted machine hours. This rate is used to absorb overheads in highly mechanized production environments where machine hours are the primary cost driver.',
            topic: 'Machine and labour hour rates'
        },
        {
            id: 'mcq-t4-24',
            stem: 'A department with high labour intensity and low mechanization should use which overhead absorption rate?',
            options: ['Machine hour rate', 'Labour hour rate', 'Material cost rate', 'Per unit rate'],
            correctAnswer: 1,
            rationale: 'Labour-intensive production should use labour hour rate as overhead absorption is more closely related to labour effort than machine use. The rate = Budgeted overheads / Budgeted labour hours.',
            topic: 'Machine and labour hour rates'
        },

        // Over- and under-absorbed overheads
        {
            id: 'mcq-t4-25',
            stem: 'Overhead over-absorption occurs when:',
            options: ['Actual overheads exceed absorbed overheads', 'Absorbed overheads exceed actual overheads', 'Production exceeds budget', 'Actual hours exceed budgeted hours'],
            correctAnswer: 1,
            rationale: 'Over-absorption means more overhead has been charged to production than was actually incurred. This happens when actual activity is higher than budgeted or when actual overheads are lower than expected. The difference is credited to profit.',
            topic: 'Over- and under-absorbed overheads'
        },
        {
            id: 'mcq-t4-26',
            stem: 'Under-absorbed overheads of $2,000 are treated as:',
            options: ['Additional income', 'Added to profit', 'Deducted from profit', 'Capitalized as an asset'],
            correctAnswer: 2,
            rationale: 'Under-absorption means insufficient overhead was charged to products. The uncharged cost is an expense and must be deducted from profit. Conversely, over-absorption is added to profit as excess charges.',
            topic: 'Over- and under-absorbed overheads'
        },

        // Job costing for batch and order work
        {
            id: 'mcq-t4-27',
            stem: 'Job costing is most appropriate for:',
            options: ['Mass production of identical products', 'Unique or customized orders', 'Continuous process manufacturing', 'Retail inventory'],
            correctAnswer: 1,
            rationale: 'Job costing tracks costs for individual units or batches that are distinct from each other (e.g., construction projects, custom machinery, specialized consulting). Process costing is used for homogeneous products.',
            topic: 'Job costing for batch and order work'
        },
        {
            id: 'mcq-t4-28',
            stem: 'In job costing, which document is used to accumulate all costs for a specific job?',
            options: ['Purchase order', 'Sales invoice', 'Job cost sheet', 'Timesheet'],
            correctAnswer: 2,
            rationale: 'A job cost sheet accumulates direct materials, direct labour, and allocated overhead for a specific job or order. It provides a detailed record of costs to determine profitability and for billing purposes.',
            topic: 'Job costing for batch and order work'
        },
        {
            id: 'mcq-t4-29',
            stem: 'Batch costing differs from job costing in that:',
            options: ['Costs cannot be allocated to batches', 'Units within a batch are identical', 'No overhead absorption is required', 'Batch costing is only for service industries'],
            correctAnswer: 1,
            rationale: 'Batch costing tracks costs for a group of identical units produced together. The batch is the cost object, and total batch cost is divided by the number of units to get unit cost. Units within a batch are homogeneous.',
            topic: 'Job costing for batch and order work'
        },
        {
            id: 'mcq-t4-30',
            stem: 'A profit of $5,000 on a job with materials $20,000, labour $15,000, and overheads $10,000 represents what profit margin?',
            options: ['10%', '12.5%', '14.3%', '20%'],
            correctAnswer: 1,
            rationale: 'Total cost = $20,000 + $15,000 + $10,000 = $45,000. Selling price = $45,000 + $5,000 = $50,000. Profit margin = Profit / Sales = $5,000 / $50,000 = 10%. Profit percentage on cost = $5,000 / $45,000 = 11.1%.',
            topic: 'Job costing for batch and order work'
        }
    ],

    fillblank: [
        {
            id: 'fb-t4-1',
            stem: 'Complete the inventory valuation statements.',
            template: '__BLANK__ assumes the oldest inventory is sold first, while __BLANK__ assumes the newest inventory is sold first.',
            blanks: [
                { answer: 'FIFO' },
                { answer: 'LIFO' }
            ],
            rationale: 'FIFO (First-In-First-Out) assumes inventory is sold in the order it was purchased. LIFO (Last-In-First-Out) assumes the most recently purchased inventory is sold first.'
        },
        {
            id: 'fb-t4-2',
            stem: 'Complete the NRV calculation.',
            template: 'Net Realisable Value equals estimated __BLANK__ price less estimated costs to __BLANK__ and sell.',
            blanks: [
                { answer: 'selling' },
                { answer: 'complete' }
            ],
            rationale: 'NRV = Estimated selling price - Estimated costs of completion - Estimated selling expenses. Inventory should be valued at the lower of cost and NRV.'
        },
        {
            id: 'fb-t4-3',
            stem: 'Complete the inventory system comparison.',
            template: 'The __BLANK__ system updates inventory continuously, while the __BLANK__ system updates inventory only after a physical count.',
            blanks: [
                { answer: 'perpetual' },
                { answer: 'periodic' }
            ],
            rationale: 'Perpetual inventory maintains continuous records. Periodic inventory relies on physical counts to determine inventory quantities and values.'
        },
        {
            id: 'fb-t4-4',
            stem: 'Complete the labour productivity formula.',
            template: 'Labour productivity equals __BLANK__ divided by labour hours or labour __BLANK__.',
            blanks: [
                { answer: 'output' },
                { answer: 'cost' }
            ],
            rationale: 'Productivity = Output / Input. For labour, this can be measured as units produced per labour hour or output value per labour cost incurred.'
        },
        {
            id: 'fb-t4-5',
            stem: 'Complete the piecework description.',
            template: 'Under a __BLANK__ system, workers are paid a fixed rate for each __BLANK__ produced.',
            blanks: [
                { answer: 'piecework' },
                { answer: 'unit' }
            ],
            rationale: 'Piecework pays workers per unit produced, directly linking compensation to productivity. This provides strong incentives but may affect quality.'
        },
        {
            id: 'fb-t4-6',
            stem: 'Complete the Halsey scheme description.',
            template: 'The Halsey bonus scheme shares __BLANK__ saved equally between worker and __BLANK__.',
            blanks: [
                { answer: 'time' },
                { answer: 'employer' }
            ],
            rationale: 'Halsey scheme: Bonus = 50% × (Standard time - Actual time) × Hourly rate. The saved time is split 50:50 between worker and employer.'
        },
        {
            id: 'fb-t4-7',
            stem: 'Complete the labour cost calculation.',
            template: 'Total labour cost to employer equals __BLANK__ wages plus employer __BLANK__.',
            blanks: [
                { answer: 'gross' },
                { answer: 'contributions' }
            ],
            rationale: 'Labour cost = Gross wages + Employer contributions (social security, pension, benefits). Employee deductions reduce net pay but are not employer costs.'
        },
        {
            id: 'fb-t4-8',
            stem: 'Complete the overhead classification.',
            template: 'Factory __BLANK__ is an example of a fixed production __BLANK__.',
            blanks: [
                { answer: 'rent' },
                { answer: 'overhead' }
            ],
            rationale: 'Factory rent is a fixed production overhead because it remains constant regardless of production volume and cannot be directly traced to individual units.'
        },
        {
            id: 'fb-t4-9',
            stem: 'Complete the allocation distinction.',
            template: '__BLANK__ directly charges costs to cost centres, while __BLANK__ shares costs between centres.',
            blanks: [
                { answer: 'Allocation' },
                { answer: 'apportionment' }
            ],
            rationale: 'Allocation assigns costs that can be specifically identified to a cost centre. Apportionment divides shared costs using an appropriate basis (e.g., floor area, labour hours).'
        },
        {
            id: 'fb-t4-10',
            stem: 'Complete the overhead absorption formula.',
            template: 'Overhead absorption rate equals budgeted __BLANK__ divided by budgeted __BLANK__.',
            blanks: [
                { answer: 'overheads' },
                { answer: 'activity' }
            ],
            rationale: 'Absorption rate = Budgeted overheads / Budgeted activity level. Activity can be labour hours, machine hours, units, or another appropriate base.'
        },
        {
            id: 'fb-t4-11',
            stem: 'Complete the over-absorption condition.',
            template: 'Over-absorption occurs when absorbed overheads __BLANK__ actual overheads.',
            blanks: [
                { answer: 'exceed' }
            ],
            rationale: 'Over-absorption = Absorbed overheads > Actual overheads. Under-absorption = Absorbed overheads < Actual overheads.'
        },
        {
            id: 'fb-t4-12',
            stem: 'Complete the job costing document.',
            template: 'A __BLANK__ __BLANK__ sheet accumulates all costs for a specific job.',
            blanks: [
                { answer: 'job' },
                { answer: 'cost' }
            ],
            rationale: 'A job cost sheet is the primary document in job costing, recording direct materials, direct labour, and allocated overhead for a specific job or order.'
        },
        {
            id: 'fb-t4-13',
            stem: 'Complete the machine hour rate.',
            template: 'Machine hour rate equals budgeted __BLANK__ divided by budgeted __BLANK__ hours.',
            blanks: [
                { answer: 'overheads' },
                { answer: 'machine' }
            ],
            rationale: 'Machine hour rate = Budgeted production overheads / Budgeted machine hours. Used in mechanized environments.'
        },
        {
            id: 'fb-t4-14',
            stem: 'Complete the error effect.',
            template: 'Overstating ending inventory __BLANK__ COGS, which __BLANK__ profit in the current period.',
            blanks: [
                { answer: 'understates' },
                { answer: 'overstates' }
            ],
            rationale: 'Ending inventory error effect: Overstate inventory → Understate COGS → Overstate profit (current period). The error reverses in the next period.'
        },
        {
            id: 'fb-t4-15',
            stem: 'Complete the service department method.',
            template: 'The __BLANK__ method ignores interdepartmental services when reapportioning service department __BLANK__.',
            blanks: [
                { answer: 'direct' },
                { answer: 'costs' }
            ],
            rationale: 'Direct method of reapportionment ignores services provided between service departments, allocating all costs directly to production departments. Simple but less accurate.'
        }
    ],

    dragdrop: [
        {
            id: 'dd-t4-1',
            stem: 'Sort the following inventory valuation methods.',
            categories: ['Assumes oldest sold first', 'Assumes newest sold first', 'Valuation principle'],
            items: [
                { text: 'FIFO', category: 'Assumes oldest sold first' },
                { text: 'LIFO', category: 'Assumes newest sold first' },
                { text: 'Lower of cost and NRV', category: 'Valuation principle' },
                { text: 'Average cost', category: 'Valuation principle' },
                { text: 'Weighted average', category: 'Valuation principle' },
                { text: 'Base stock', category: 'Valuation principle' },
                { text: 'Standard cost', category: 'Valuation principle' },
                { text: 'Replacement cost', category: 'Valuation principle' }
            ]
        },
        {
            id: 'dd-t4-2',
            stem: 'Classify the following inventory system characteristics.',
            categories: ['Perpetual system', 'Periodic system', 'Both systems'],
            items: [
                { text: 'Continuous record updating', category: 'Perpetual system' },
                { text: 'Physical count at period end', category: 'Periodic system' },
                { text: 'Requires physical verification', category: 'Both systems' },
                { text: 'COGS updated on each sale', category: 'Perpetual system' },
                { text: 'COGS calculated after count', category: 'Periodic system' },
                { text: 'More suitable for high-value items', category: 'Perpetual system' },
                { text: 'Lower administrative costs', category: 'Periodic system' },
                { text: 'Real-time inventory tracking', category: 'Perpetual system' }
            ]
        },
        {
            id: 'dd-t4-3',
            stem: 'Classify the following labour costs.',
            categories: ['Direct labour cost', 'Indirect labour cost', 'Employer-only cost'],
            items: [
                { text: 'Assembly worker wages', category: 'Direct labour cost' },
                { text: 'Factory supervisor salary', category: 'Indirect labour cost' },
                { text: 'Employer pension contribution', category: 'Employer-only cost' },
                { text: 'Machine operator wages', category: 'Direct labour cost' },
                { text: 'Maintenance staff wages', category: 'Indirect labour cost' },
                { text: 'Factory security guard wages', category: 'Indirect labour cost' },
                { text: 'Employer social security', category: 'Employer-only cost' },
                { text: 'Quality inspector wages', category: 'Indirect labour cost' }
            ]
        },
        {
            id: 'dd-t4-4',
            stem: 'Classify the following overheads.',
            categories: ['Production overhead', 'Selling overhead', 'Administrative overhead'],
            items: [
                { text: 'Factory rent', category: 'Production overhead' },
                { text: 'Sales commission', category: 'Selling overhead' },
                { text: 'Office rent', category: 'Administrative overhead' },
                { text: 'Production manager salary', category: 'Production overhead' },
                { text: 'Marketing expenses', category: 'Selling overhead' },
                { text: 'Accounting department costs', category: 'Administrative overhead' },
                { text: 'Depreciation of machinery', category: 'Production overhead' },
                { text: 'Delivery van expenses', category: 'Selling overhead' }
            ]
        },
        {
            id: 'dd-t4-5',
            stem: 'Match overhead types with their behavior.',
            categories: ['Fixed overhead', 'Variable overhead', 'Semi-variable overhead'],
            items: [
                { text: 'Factory rent', category: 'Fixed overhead' },
                { text: 'Indirect materials', category: 'Variable overhead' },
                { text: 'Electricity with minimum charge', category: 'Semi-variable overhead' },
                { text: 'Production manager salary', category: 'Fixed overhead' },
                { text: 'Machine lubricants', category: 'Variable overhead' },
                { text: 'Telephone with line rental', category: 'Semi-variable overhead' },
                { text: 'Depreciation (straight-line)', category: 'Fixed overhead' },
                { text: 'Overtime premium', category: 'Variable overhead' }
            ]
        },
        {
            id: 'dd-t4-6',
            stem: 'Classify the following reapportionment methods.',
            categories: ['Direct method', 'Step-down method', 'Reciprocal method'],
            items: [
                { text: 'Ignores interdepartmental services', category: 'Direct method' },
                { text: 'Considers one-way interdepartmental flows', category: 'Step-down method' },
                { text: 'Uses simultaneous equations', category: 'Reciprocal method' },
                { text: 'Simplest method', category: 'Direct method' },
                { text: 'Most accurate method', category: 'Reciprocal method' },
                { text: 'Service costs reapportioned sequentially', category: 'Step-down method' },
                { text: 'Least accurate', category: 'Direct method' },
                { text: 'Complex calculations required', category: 'Reciprocal method' }
            ]
        },
        {
            id: 'dd-t4-7',
            stem: 'Match cost objects with appropriate costing method.',
            categories: ['Job costing', 'Batch costing', 'Process costing'],
            items: [
                { text: 'Custom-built bridge', category: 'Job costing' },
                { text: 'Textbook printing run', category: 'Batch costing' },
                { text: 'Oil refining', category: 'Process costing' },
                { text: 'Specialized consulting project', category: 'Job costing' },
                { text: 'Uniform product batches', category: 'Batch costing' },
                { text: 'Chemical manufacturing', category: 'Process costing' },
                { text: 'Unique order for each customer', category: 'Job costing' },
                { text: 'Identical units in production run', category: 'Batch costing' }
            ]
        },
        {
            id: 'dd-t4-8',
            stem: 'Classify remuneration methods.',
            categories: ['Time-based', 'Output-based', 'Hybrid'],
            items: [
                { text: 'Hourly rate', category: 'Time-based' },
                { text: 'Piecework', category: 'Output-based' },
                { text: 'Halsey premium', category: 'Hybrid' },
                { text: 'Monthly salary', category: 'Time-based' },
                { text: 'Rowan premium', category: 'Hybrid' },
                { text: 'Guaranteed minimum plus bonus', category: 'Hybrid' },
                { text: 'Weekly wage', category: 'Time-based' },
                { text: 'Standard piece rate', category: 'Output-based' }
            ]
        },
        {
            id: 'dd-t4-9',
            stem: 'Match overhead absorption bases with appropriate situations.',
            categories: ['Labour hours', 'Machine hours', 'Material cost'],
            items: [
                { text: 'Labour-intensive production', category: 'Labour hours' },
                { text: 'Highly mechanized production', category: 'Machine hours' },
                { text: 'Material costs dominate total cost', category: 'Material cost' },
                { text: 'Manual assembly work', category: 'Labour hours' },
                { text: 'Automated manufacturing', category: 'Machine hours' },
                { text: 'Craft-based production', category: 'Labour hours' },
                { text: 'Heavy machinery use', category: 'Machine hours' },
                { text: 'Costly raw materials', category: 'Material cost' }
            ]
        },
        {
            id: 'dd-t4-10',
            stem: 'Classify inventory error effects.',
            categories: ['Overstates current profit', 'Understates current profit', 'No profit effect'],
            items: [
                { text: 'Overstate ending inventory', category: 'Overstates current profit' },
                { text: 'Understate ending inventory', category: 'Understates current profit' },
                { text: 'Error corrected next period', category: 'No profit effect' },
                { text: 'Overstate purchases', category: 'Understates current profit' },
                { text: 'Understate purchases', category: 'Overstates current profit' },
                { text: 'Error self-correcting over two periods', category: 'No profit effect' },
                { text: 'Overstate beginning inventory', category: 'Understates current profit' },
                { text: 'Understate beginning inventory', category: 'Overstates current profit' }
            ]
        }
    ],

    sequence: [
        {
            id: 'seq-t4-1',
            stem: 'Put the FIFO inventory valuation steps in correct order:',
            steps: [
                'Identify purchases made during the period (date and quantity)',
                'Record sales made during the period (date and quantity)',
                'Assume oldest inventory is sold first for each sale',
                'Calculate cost of goods sold using oldest available costs',
                'Calculate ending inventory using most recent purchase costs',
                'Calculate gross profit as sales minus COGS'
            ]
        },
        {
            id: 'seq-t4-2',
            stem: 'Put the periodic inventory calculation steps in correct order:',
            steps: [
                'Determine beginning inventory from previous records',
                'Record all purchases during the period',
                'Conduct physical inventory count at period end',
                'Determine ending inventory quantity and value',
                'Calculate COGS as Beginning Inventory + Purchases - Ending Inventory',
                'Prepare income statement with COGS figure'
            ]
        },
        {
            id: 'seq-t4-3',
            stem: 'Put the Halsey bonus scheme calculation steps in correct order:',
            steps: [
                'Determine the standard time allowed for the job',
                'Measure actual time taken to complete the job',
                'Calculate time saved (Standard time - Actual time)',
                'Apply 50% of time saved as bonus hours',
                'Multiply bonus hours by hourly rate to calculate bonus payment',
                'Calculate total wage as (Actual hours × Rate) + Bonus'
            ]
        },
        {
            id: 'seq-t4-4',
            stem: 'Put the overhead allocation and apportionment steps in correct order:',
            steps: [
                'Identify all production and service overheads',
                'Allocate overheads that can be directly traced to cost centres',
                'Identify appropriate apportionment bases for shared costs',
                'Apportion shared overheads to all cost centres using chosen bases',
                'Reapportion service department costs to production departments',
                'Calculate overhead absorption rates for production departments'
            ]
        },
        {
            id: 'seq-t4-5',
            stem: 'Put the step-down (sequential) reapportionment method steps in correct order:',
            steps: [
                'Identify which service department provides most services to others',
                'Reapportion first service department costs to all other departments',
                'Close first service department (balance now zero)',
                'Identify next service department for reapportionment',
                'Reapportion second service department to remaining departments',
                'Repeat until all service departments have zero balance'
            ]
        },
        {
            id: 'seq-t4-6',
            stem: 'Put the job costing process steps in correct order:',
            steps: [
                'Receive customer order and create job number',
                'Issue materials to the job from stores',
                'Record labour hours worked on the job',
                'Allocate production overhead to the job using absorption rate',
                'Accumulate all costs on job cost sheet',
                'Compare total cost to agreed selling price',
                'Calculate profit or loss on completed job'
            ]
        },
        {
            id: 'seq-t4-7',
            stem: 'Put the overhead absorption and variance analysis steps in correct order:',
            steps: [
                'Determine budgeted overheads for the period',
                'Determine budgeted activity level (e.g., labour hours)',
                'Calculate predetermined overhead absorption rate',
                'Apply overhead to production using actual activity',
                'Determine actual overheads incurred during the period',
                'Compare absorbed overheads to actual overheads',
                'Calculate over- or under-absorption and adjust profit'
            ]
        },
        {
            id: 'seq-t4-8',
            stem: 'Put the NRV impairment assessment steps in correct order:',
            steps: [
                'Determine the historical cost of inventory items',
                'Estimate the expected selling price',
                'Estimate costs to complete the inventory',
                'Estimate selling and distribution costs',
                'Calculate NRV (Selling price - Completion costs - Selling costs)',
                'Compare historical cost to NRV',
                'Value inventory at lower of cost and NRV',
                'Recognize impairment loss if NRV is lower than cost'
            ]
        }
    ],

    keyword: [
        {
            id: 'kw-t4-1',
            stem: 'Define FIFO and explain its effect on profit during periods of rising prices. [4 marks]',
            marks: 4,
            keywords: ['first-in-first-out', 'oldest', 'sold first', 'rising prices', 'higher', 'profit', 'lower', 'COGS'],
            modelAnswer: 'FIFO (First-In-First-Out) is an inventory valuation method that assumes the oldest inventory items are sold first. During periods of rising prices, FIFO results in lower cost of goods sold because the oldest (cheapest) inventory is assigned to sales. This leads to higher reported gross profit compared to other methods like LIFO.'
        },
        {
            id: 'kw-t4-2',
            stem: 'Explain the difference between perpetual and periodic inventory systems. [4 marks]',
            marks: 4,
            keywords: ['continuous', 'records', 'physical count', 'real-time', 'period', 'end', 'COGS', 'update'],
            modelAnswer: 'Perpetual inventory maintains continuous records of inventory quantities and values, updating COGS with each sale. Periodic inventory does not track continuously and relies on physical counts at period end to determine inventory levels and calculate COGS. Perpetual provides real-time information but is more costly to maintain.'
        },
        {
            id: 'kw-t4-3',
            stem: 'Explain how inventory valuation errors affect profit across two accounting periods. [4 marks]',
            marks: 4,
            keywords: ['overstate', 'understate', 'COGS', 'profit', 'reverse', 'self-correcting', 'current', 'next'],
            modelAnswer: 'Inventory valuation errors have opposite effects on two consecutive periods. Overstating ending inventory understates COGS and overstates current profit, but this overstatement becomes next period beginning inventory, causing COGS to be overstated and profit understated. The error self-corrects over the two periods, but both periods show incorrect profit.'
        },
        {
            id: 'kw-t4-4',
            stem: 'Define labour productivity and suggest three ways it can be improved. [5 marks]',
            marks: 5,
            keywords: ['output', 'labour input', 'efficiency', 'automation', 'training', 'better', 'equipment', 'technology'],
            modelAnswer: 'Labour productivity measures the efficiency of labour input, calculated as output quantity divided by labour hours or labour cost. Three ways to improve it: (1) Invest in automation and technology to reduce labour hours per unit, (2) Provide comprehensive training to improve worker skills and efficiency, (3) Improve equipment and tools to reduce downtime and increase output per hour.'
        },
        {
            id: 'kw-t4-5',
            stem: 'Explain the Halsey premium bonus scheme with a numerical example. [5 marks]',
            marks: 5,
            keywords: ['50%', 'time saved', 'standard', 'actual', 'bonus', 'hourly rate', 'shared', 'employer'],
            modelAnswer: 'The Halsey scheme shares time saved equally between worker and employer. Bonus = 50% × (Standard time - Actual time) × Hourly rate. Example: Standard time = 10 hours, Actual time = 8 hours, Hourly rate = $15. Time saved = 2 hours. Bonus = 50% × 2 × $15 = $15. Total wage = (8 × $15) + $15 = $135. Worker gets $15 bonus, employer saves $15.'
        },
        {
            id: 'kw-t4-6',
            stem: 'Distinguish between direct labour cost and indirect labour cost with examples. [4 marks]',
            marks: 4,
            keywords: ['directly', 'traceable', 'specific', 'units', 'cannot', 'manufacturing', 'support', 'production'],
            modelAnswer: 'Direct labour costs can be directly traced to specific units of production (e.g., assembly worker wages, machine operator wages). Indirect labour costs cannot be traced to specific units and are treated as overhead (e.g., factory supervisor salary, maintenance staff wages, quality inspector wages). Direct labour is a prime cost; indirect labour is a production overhead.'
        },
        {
            id: 'kw-t4-7',
            stem: 'Classify overheads into production, selling, and administrative categories with examples. [5 marks]',
            marks: 5,
            keywords: ['production', 'factory', 'manufacturing', 'selling', 'marketing', 'sales', 'administrative', 'office'],
            modelAnswer: 'Production overheads are incurred in the manufacturing process (e.g., factory rent, depreciation of machinery, production manager salary, indirect materials). Selling overheads relate to selling activities (e.g., sales commission, marketing expenses, delivery costs, showroom rent). Administrative overheads support general management (e.g., office rent, accounting costs, HR salaries, general management salaries).'
        },
        {
            id: 'kw-t4-8',
            stem: 'Explain the difference between allocation and apportionment of overheads. [3 marks]',
            marks: 3,
            keywords: ['directly', 'identified', 'specific', 'shared', 'basis', 'traceable', 'cannot', 'centre'],
            modelAnswer: 'Allocation directly assigns overhead costs to a specific cost centre where they can be individually identified (e.g., direct materials to a department). Apportionment divides shared or joint overhead costs between cost centres using an appropriate basis (e.g., apportioning rent by floor area, electricity by machine hours).'
        },
        {
            id: 'kw-t4-9',
            stem: 'Explain the step-down method of service department cost reapportionment. [4 marks]',
            marks: 4,
            keywords: ['sequential', 'one-way', 'service', 'production', 'close', 'first', 'order', 'department'],
            modelAnswer: 'The step-down method reapportions service department costs sequentially. One service department is selected (usually the one providing most services to others) and its costs are reapportioned to all other departments, including other service departments. This department is then closed. The process repeats with the next service department until all service departments have zero balance. It recognizes one-way interdepartmental services.'
        },
        {
            id: 'kw-t4-10',
            stem: 'Calculate and explain machine hour rate overhead absorption. [4 marks]',
            marks: 4,
            keywords: ['budgeted overheads', 'machine hours', 'divide', 'mechanized', 'rate', 'absorb', 'production'],
            modelAnswer: 'Machine hour rate = Budgeted production overheads / Budgeted machine hours. Example: Budgeted overheads = $100,000, Budgeted machine hours = 10,000. Rate = $100,000 / 10,000 = $10 per machine hour. Each product using 2 machine hours absorbs $20 of overhead. This method is appropriate for highly mechanized production where machine use drives overhead consumption.'
        },
        {
            id: 'kw-t4-11',
            stem: 'Explain over-absorption and under-absorption of overheads and how they are treated. [4 marks]',
            marks: 4,
            keywords: ['absorbed', 'exceeds', 'actual', 'over-absorption', 'under-absorption', 'profit', 'add', 'deduct'],
            modelAnswer: 'Over-absorption occurs when absorbed overheads exceed actual overheads, meaning too much overhead was charged to production. The difference is added to profit. Under-absorption occurs when actual overheads exceed absorbed overheads, meaning insufficient overhead was charged. The difference is deducted from profit. Both arise because predetermined absorption rates are based on estimates.'
        },
        {
            id: 'kw-t4-12',
            stem: 'Compare job costing and batch costing with examples. [4 marks]',
            marks: 4,
            keywords: ['unique', 'customized', 'individual', 'identical', 'group', 'similar', 'construction', 'printing'],
            modelAnswer: 'Job costing tracks costs for unique or customized orders where each unit or order is distinct (e.g., construction project, custom machinery, specialized consulting). Costs are accumulated per job. Batch costing tracks costs for a group of identical units produced together (e.g., textbook printing run, clothing batch). Total batch cost is divided by number of units to get unit cost. Both use similar principles but differ in cost object definition.'
        }
    ],

    flashcards: [
        // FIFO, LIFO and NRV methods
        {
            id: 'fc-t4-1',
            front: 'What does FIFO stand for in inventory valuation?',
            back: 'FIFO stands for First-In-First-Out. It assumes that the oldest inventory items purchased are sold first. This matches the physical flow of goods in most businesses.',
            topic: 'FIFO, LIFO and NRV methods'
        },
        {
            id: 'fc-t4-2',
            front: 'What does LIFO stand for in inventory valuation?',
            back: 'LIFO stands for Last-In-First-Out. It assumes that the most recently purchased inventory items are sold first. This method is not permitted under IAS 2 for financial reporting.',
            topic: 'FIFO, LIFO and NRV methods'
        },
        {
            id: 'fc-t4-3',
            front: 'Define Net Realisable Value (NRV).',
            back: 'NRV is the estimated selling price in the ordinary course of business, less estimated costs of completion and estimated selling expenses. Inventory must be valued at the lower of cost and NRV.',
            topic: 'FIFO, LIFO and NRV methods'
        },

        // Perpetual vs periodic inventory valuation
        {
            id: 'fc-t4-4',
            front: 'What is a perpetual inventory system?',
            back: 'A perpetual inventory system continuously updates inventory records with each purchase and sale. It provides real-time tracking of inventory quantities and values, updating COGS immediately upon each sale.',
            topic: 'Perpetual vs periodic inventory valuation'
        },
        {
            id: 'fc-t4-5',
            front: 'What is a periodic inventory system?',
            back: 'A periodic inventory system does not track inventory continuously. Inventory quantities are determined through physical counts at the end of each period, and COGS is calculated as: Beginning Inventory + Purchases - Ending Inventory.',
            topic: 'Perpetual vs periodic inventory valuation'
        },

        // Inventory valuation effects on profit
        {
            id: 'fc-t4-6',
            front: 'How does overstating ending inventory affect profit?',
            back: 'Overstating ending inventory understates COGS, which overstates profit in the current period. The error reverses in the next period when the overstated ending inventory becomes beginning inventory, causing COGS to be overstated and profit understated.',
            topic: 'Inventory valuation effects on profit'
        },

        // Labour productivity
        {
            id: 'fc-t4-7',
            front: 'How is labour productivity measured?',
            back: 'Labour productivity = Output quantity / Labour input. Input can be measured in hours or cost. Higher ratios indicate greater efficiency. Example: 100 units produced in 10 hours = 10 units per hour.',
            topic: 'Labour productivity'
        },

        // Remuneration methods
        {
            id: 'fc-t4-8',
            front: 'What is a piecework remuneration system?',
            back: 'Piecework pays workers a fixed amount for each unit produced. Pay = Units produced × Rate per unit. It directly links compensation to productivity and incentivizes higher output.',
            topic: 'Remuneration methods'
        },
        {
            id: 'fc-t4-9',
            front: 'What is the Halsey premium bonus scheme?',
            back: 'Halsey scheme pays workers a bonus for completing work in less than standard time. Bonus = 50% × (Standard time - Actual time) × Hourly rate. Time saved is shared equally between worker and employer.',
            topic: 'Remuneration methods'
        },
        {
            id: 'fc-t4-10',
            front: 'What is a guaranteed minimum wage in piecework?',
            back: 'A guaranteed minimum ensures workers receive a base wage even if production is low. Additional output above a standard quota earns extra payment. This provides both income security and productivity incentives.',
            topic: 'Remuneration methods'
        },

        // Employer cost vs employee earnings
        {
            id: 'fc-t4-11',
            front: 'What is included in total labour cost to employer?',
            back: 'Total labour cost = Gross wages + Employer contributions (social security, pension, health insurance, benefits). Employee deductions (taxes, employee pension share) reduce net pay but are not employer costs.',
            topic: 'Employer cost vs employee earnings'
        },

        // Overhead classifications
        {
            id: 'fc-t4-12',
            front: 'What are production overheads?',
            back: 'Production overheads are costs incurred in the manufacturing process that cannot be directly traced to specific units. Examples: factory rent, depreciation of machinery, production manager salary, indirect materials and labour.',
            topic: 'Overhead classifications'
        },
        {
            id: 'fc-t4-13',
            front: 'What is the difference between fixed and variable overheads?',
            back: 'Fixed overheads remain constant in total within the relevant production range (e.g., factory rent). Variable overheads change in direct proportion to production volume (e.g., indirect materials, machine lubricants).',
            topic: 'Overhead classifications'
        },

        // Overhead allocation and apportionment
        {
            id: 'fc-t4-14',
            front: 'What is overhead allocation?',
            back: 'Allocation directly assigns overhead costs to a specific cost centre where they can be individually identified. Example: direct materials specifically used by Department A are allocated to Department A.',
            topic: 'Overhead allocation and apportionment'
        },
        {
            id: 'fc-t4-15',
            front: 'What is overhead apportionment?',
            back: 'Apportionment divides shared overhead costs between cost centres using an appropriate basis. Example: rent apportioned by floor area, electricity by machine hours, supervision by number of employees.',
            topic: 'Overhead allocation and apportionment'
        },

        // Service-department reapportionment
        {
            id: 'fc-t4-16',
            front: 'What are service departments in overhead absorption?',
            back: 'Service departments provide support services to production departments and sometimes to each other. Examples: maintenance, canteen, stores, human resources, IT support. Their costs must be reapportioned to production departments.',
            topic: 'Service-department reapportionment'
        },
        {
            id: 'fc-t4-17',
            front: 'What is the direct method of reapportionment?',
            back: 'The direct method ignores interdepartmental services, reapportioning all service department costs directly to production departments. It is simple but less accurate because services between service departments are not recognized.',
            topic: 'Service-department reapportionment'
        },

        // Machine and labour hour rates
        {
            id: 'fc-t4-18',
            front: 'When is the machine hour rate used for overhead absorption?',
            back: 'Machine hour rate is used in highly mechanized production environments where machine time is the primary driver of overhead consumption. Rate = Budgeted overheads / Budgeted machine hours.',
            topic: 'Machine and labour hour rates'
        },
        {
            id: 'fc-t4-19',
            front: 'When is the labour hour rate used for overhead absorption?',
            back: 'Labour hour rate is used in labour-intensive production where manual effort is the primary driver. Rate = Budgeted overheads / Budgeted labour hours. Appropriate for craft-based or manual assembly operations.',
            topic: 'Machine and labour hour rates'
        },

        // Over- and under-absorbed overheads
        {
            id: 'fc-t4-20',
            front: 'What is over-absorption of overheads?',
            back: 'Over-absorption occurs when absorbed overheads exceed actual overheads incurred. It means too much overhead was charged to production. The difference is added to profit in the income statement.',
            topic: 'Over- and under-absorbed overheads'
        },
        {
            id: 'fc-t4-21',
            front: 'What is under-absorption of overheads?',
            back: 'Under-absorption occurs when actual overheads exceed absorbed overheads. It means insufficient overhead was charged to production. The difference is deducted from profit in the income statement.',
            topic: 'Over- and under-absorbed overheads'
        },

        // Job costing for batch and order work
        {
            id: 'fc-t4-22',
            front: 'What is job costing?',
            back: 'Job costing accumulates costs for individual units or batches that are distinct from each other. Used for customized or unique orders (e.g., construction projects, custom machinery, specialized consulting). Each job has its own cost sheet.',
            topic: 'Job costing for batch and order work'
        },
        {
            id: 'fc-t4-23',
            front: 'What is batch costing?',
            back: 'Batch costing tracks costs for a group of identical units produced together. Total batch cost is divided by the number of units to determine unit cost. Used when production occurs in batches of homogeneous products (e.g., textbook printing, clothing manufacturing).',
            topic: 'Job costing for batch and order work'
        },
        {
            id: 'fc-t4-24',
            front: 'What is a job cost sheet?',
            back: 'A job cost sheet is a document that accumulates all costs for a specific job: direct materials, direct labour, and allocated production overheads. It provides detailed cost tracking, profitability analysis, and billing information.',
            topic: 'Job costing for batch and order work'
        },

        // Additional flashcards for key concepts
        {
            id: 'fc-t4-25',
            front: 'What is the lower of cost and NRV rule?',
            back: 'According to IAS 2, inventory must be valued at the lower of historical cost or net realisable value. This prudence principle ensures inventory is not stated at more than its recoverable amount, preventing overstatement of assets.',
            topic: 'FIFO, LIFO and NRV methods'
        },
        {
            id: 'fc-t4-26',
            front: 'What is a predetermined overhead absorption rate?',
            back: 'A predetermined rate is calculated before the period begins using budgeted overheads and budgeted activity. It allows overhead to be absorbed as production occurs, avoiding delays until actual costs are known.',
            topic: 'Overhead allocation and apportionment'
        },
        {
            id: 'fc-t4-27',
            front: 'What causes over- or under-absorption?',
            back: 'Differences arise because predetermined rates are based on estimates. Causes: (1) Actual activity differs from budgeted, (2) Actual overhead costs differ from budgeted, (3) Both activity and costs differ from estimates.',
            topic: 'Over- and under-absorbed overheads'
        },
        {
            id: 'fc-t4-28',
            front: 'What is the Rowan premium bonus scheme?',
            back: 'Rowan scheme pays bonus based on time saved as a proportion of time taken. Bonus = (Time saved / Time taken) × Actual hours × Hourly rate. Unlike Halsey, the bonus amount depends on the proportion of time saved to actual time.',
            topic: 'Remuneration methods'
        },
        {
            id: 'fc-t4-29',
            front: 'What is prime cost?',
            back: 'Prime cost is the sum of direct materials and direct labour. It represents the direct costs that can be traced to specific units of production. Production overheads are then added to determine total production cost.',
            topic: 'Overhead classifications'
        },
        {
            id: 'fc-t4-30',
            front: 'What is the reciprocal method of reapportionment?',
            back: 'The reciprocal method (simultaneous equations) recognizes all interdepartmental services between service departments. It is the most accurate method but involves complex calculations using simultaneous equations or algebraic iteration.',
            topic: 'Service-department reapportionment'
        }
    ]
};
