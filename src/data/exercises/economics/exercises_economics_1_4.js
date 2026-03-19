export const exercises_economics_1_4 = {
    mcq: [
        {
            id: 'mcq-t4-1',
            stem: 'Market equilibrium occurs where:',
            options: [
                'Quantity demanded exceeds quantity supplied',
                'Quantity supplied exceeds quantity demanded',
                'Quantity demanded equals quantity supplied',
                'Price is at its maximum possible level'
            ],
    correctAnswer: 2,
            rationale: 'Equilibrium occurs at the price where Qd = Qs. At this point, there is no tendency for price to change — the market clears.',
            topic: 'Market equilibrium price and output'
        },
        {
            id: 'mcq-t4-2',
            stem: 'At a price above equilibrium, there is:',
            options: [
                'Excess demand (shortage)',
                'Excess supply (surplus)',
                'Market clearing',
                'No tendency for price to change'
            ],
    correctAnswer: 1,
            rationale: 'Above equilibrium, Qs > Qd, creating a surplus. Producers cannot sell all output at this price, so they lower prices to compete for buyers, moving price down toward equilibrium.',
            topic: 'Excess demand and excess supply adjustment'
        },
        {
            id: 'mcq-t4-3',
            stem: 'Consumer surplus is:',
            options: [
                'The difference between price consumers pay and the price they are willing to pay',
                'The difference between price producers receive and their costs',
                'Total revenue earned by firms',
                'The deadweight loss in a market'
            ],
    correctAnswer: 0,
            rationale: 'Consumer surplus is the benefit consumers receive — the difference between the maximum price they are willing to pay and the market price they actually pay, summed across all units purchased.',
            topic: 'Consumer and producer surplus'
        },
        {
            id: 'mcq-t4-4',
            stem: 'Producer surplus is:',
            options: [
                'The difference between price consumers pay and willingness to pay',
                'The difference between price received and minimum acceptable price',
                'Total profit of all firms',
                'The area above the supply curve'
            ],
    correctAnswer: 1,
            rationale: 'Producer surplus is the benefit producers receive — the difference between the market price and the minimum price they would accept (reflected in the supply curve), summed across all units sold.',
            topic: 'Consumer and producer surplus'
        },
        {
            id: 'mcq-t4-5',
            stem: 'The price mechanism performs all of the following functions EXCEPT:',
            options: [
                'Rationing scarce goods',
                'Signalling where resources are needed',
                'Providing incentives for producers',
                'Ensuring equal distribution of income'
            ],
    correctAnswer: 3,
            rationale: 'The price mechanism rations goods, signals resource allocation, and provides incentives. It does not ensure equal income distribution — this is a normative outcome of market forces.',
            topic: 'Price mechanism functions'
        },
        {
            id: 'mcq-t4-6',
            stem: 'If a tax is imposed on producers, the supply curve shifts:',
            options: [
                'To the right',
                'To the left',
                'Does not shift',
                'Becomes vertical'
            ],
    correctAnswer: 1,
            rationale: 'A tax on producers increases their costs, reducing the quantity they are willing to supply at each price. This shifts supply leftward. The tax creates a wedge between what consumers pay and producers receive.',
            topic: 'Indirect tax incidence'
        }
    ],
    fillblank: [
        {
            id: 'fb-t4-1',
            stem: 'Market equilibrium occurs where quantity demanded __BLANK__ quantity supplied.',
            blanks: [
                { answer: 'equals' }
            ],
            rationale: 'At equilibrium, Qd = Qs. The market clears with no surplus or shortage, creating a stable price.'
        },
        {
            id: 'fb-t4-2',
            stem: 'At a price below equilibrium, there is excess __BLANK__ (shortage).',
            blanks: [
                { answer: 'demand' }
            ],
            rationale: 'Below equilibrium, Qd > Qs. Consumers want to buy more than producers supply, causing prices to be bid up toward equilibrium.'
        },
        {
            id: 'fb-t4-3',
            stem: 'Consumer surplus is the area below the demand curve and __BLANK__ the equilibrium price.',
            blanks: [
                { answer: 'above' }
            ],
            rationale: 'Consumer surplus is shown on diagrams as the triangular area above the equilibrium price line and below the demand curve.',
            },
        {
            id: 'fb-t4-4',
            stem: 'Producer surplus is the area below the equilibrium price and __BLANK__ the supply curve.',
            blanks: [
                { answer: 'above' }
            ],
            rationale: 'Producer surplus is shown on diagrams as the triangular area above the supply curve and below the equilibrium price line.'
        },
        {
            id: 'fb-t4-5',
            stem: 'The price mechanism __BLANK__ scarce goods to those willing and able to pay.',
            blanks: [
                { answer: 'allocates' }
            ],
            rationale: 'Through price, scarce goods are allocated to consumers who value them most highly and can afford them, without direct government direction.'
        }
    ],
    dragdrop: [
        {
            id: 'dd-t4-1',
            stem: 'Match the shift to its effect on equilibrium.',
            categories: ['Demand Increases', 'Demand Decreases', 'Supply Increases', 'Supply Decreases'],
            items: [
                { text: 'Both P* and Q* rise', category: 'Demand Increases' },
                { text: 'Both P* and Q* fall', category: 'Demand Decreases' },
                { text: 'P* falls, Q* rises', category: 'Supply Increases' },
                { text: 'P* rises, Q* falls', category: 'Supply Decreases' }
            ]
        },
        {
            id: 'dd-t4-2',
            stem: 'Classify these as functions of the price mechanism.',
            categories: ['Rationing Function', 'Signalling Function', 'Incentive Function'],
            items: [
                { text: 'Allocates goods to those willing and able to pay', category: 'Rationing Function' },
                { text: 'Indicates where resources should flow', category: 'Signalling Function' },
                { text: 'Rewards efficient production', category: 'Incentive Function' },
                { text: 'High prices signal shortage', category: 'Signalling Function' },
                { text: 'Profit motivates production', category: 'Incentive Function' },
                { text: 'Prices clear markets', category: 'Rationing Function' }
            ]
        },
        {
            id: 'dd-t4-3',
            stem: 'Match the tax incidence description.',
            categories: ['Elastic Demand (Consumers pay more)', 'Inelastic Demand (Producers pay more)'],
            items: [
                { text: 'Consumers bear most of the tax burden', category: 'Elastic Demand (Consumers pay more)' },
                { text: 'Quantity falls significantly', category: 'Elastic Demand (Consumers pay more)' },
                { text: 'Producers bear most of the tax burden', category: 'Inelastic Demand (Producers pay more)' },
                { text: 'Quantity falls relatively little', category: 'Inelastic Demand (Producers pay more)' }
            ]
        }
    ],
    sequence: [
        {
            id: 'seq-t4-1',
            stem: 'Order the process of reaching equilibrium from a surplus:',
            steps: [
                'Price is above equilibrium',
                'Quantity supplied exceeds quantity demanded (surplus)',
                'Producers have unsold stock',
                'Producers compete by lowering prices',
                'Price falls toward equilibrium',
                'Quantity demanded increases'
            ]
        },
        {
            id: 'seq-t4-2',
            stem: 'Put the effects of a demand increase in order:',
            steps: [
                'Demand curve shifts rightward',
                'At original price, excess demand (shortage)',
                'Consumers bid up prices',
                'Price rises to new equilibrium',
                'Quantity supplied increases (movement along supply)',
                'New equilibrium P* and Q* are higher'
            ]
        }
    ],
    keyword: [
        {
            id: 'kw-t4-1',
            stem: 'Define market equilibrium. [2 marks]',
            marks: 2,
            keywords: ['quantity demanded', 'quantity supplied', 'equal', 'clear', 'stable'],
            modelAnswer: 'Market equilibrium occurs at the price where quantity demanded equals quantity supplied (Qd = Qs). At this price, the market clears with no tendency for price to change.'
        },
        {
            id: 'kw-t4-2',
            stem: 'Explain consumer surplus with reference to the demand curve. [3 marks]',
            marks: 3,
            keywords: ['willingness to pay', 'market price', 'below demand curve', 'above price', 'benefit'],
            modelAnswer: 'Consumer surplus is the benefit consumers receive from paying less than the maximum they are willing to pay. On a diagram, it is the area below the demand curve and above the equilibrium price line. It represents the difference between what consumers would pay and what they actually pay.'
        },
        {
            id: 'kw-t4-3',
            stem: 'Explain how the price mechanism rations scarce goods. [3 marks]',
            marks: 3,
            keywords: ['price', 'allocation', 'willing', 'able to pay', 'scarce'],
            modelAnswer: 'The price mechanism rations scarce goods through prices. Those willing and able to pay the price can purchase the good, while those who cannot or will not pay are excluded from consumption. This allocates goods without direct government intervention or queues.'
        },
        {
            id: 'kw-t4-4',
            stem: 'Explain tax incidence and how it depends on elasticity of demand. [4 marks]',
            marks: 4,
            keywords: ['burden', 'elastic', 'inelastic', 'consumers', 'producers', 'pass on'],
            modelAnswer: 'Tax incidence refers to who bears the economic burden of a tax. When demand is elastic, consumers are sensitive to price and reduce purchases significantly, so producers bear most of the tax burden. When demand is inelastic, consumers continue buying despite price rises, so they bear most of the tax burden.'
        }
    ],
    flashcards: [
        {
            id: 'fc-t4-1',
            front: 'What is market equilibrium?',
            back: 'The price at which quantity demanded equals quantity supplied (Qd = Qs). At this point, the market clears with no surplus or shortage.',
            topic: 'Market equilibrium price and output'
        },
        {
            id: 'fc-t4-2',
            front: 'What happens at a price above equilibrium?',
            back: 'There is excess supply (surplus) because Qs > Qd. Producers lower prices to sell stock, causing price to fall toward equilibrium.',
            topic: 'Excess demand and excess supply adjustment'
        },
        {
            id: 'fc-t4-3',
            front: 'What happens at a price below equilibrium?',
            back: 'There is excess demand (shortage) because Qd > Qs. Consumers compete for limited goods, bidding prices up toward equilibrium.',
            topic: 'Excess demand and excess supply adjustment'
        },
        {
            id: 'fc-t4-4',
            front: 'What is consumer surplus?',
            back: 'The benefit consumers receive — the difference between the maximum price they are willing to pay and the market price they actually pay, shown as the area below demand and above price.',
            topic: 'Consumer and producer surplus'
        },
        {
            id: 'fc-t4-5',
            front: 'What is producer surplus?',
            back: 'The benefit producers receive — the difference between the market price and the minimum price they would accept, shown as the area below price and above supply.',
            topic: 'Consumer and producer surplus'
        },
        {
            id: 'fc-t4-6',
            front: 'What are the three main functions of the price mechanism?',
            back: '1) Rationing function — allocates scarce goods. 2) Signalling function — indicates where resources should flow. 3) Incentive function — rewards efficient production and innovation.',
            topic: 'Price mechanism functions'
        },
        {
            id: 'fc-t4-7',
            front: 'What is tax incidence?',
            back: 'How the economic burden of a tax is divided between consumers and producers. The division depends on relative elasticities of demand and supply.',
            topic: 'Indirect tax incidence'
        },
        {
            id: 'fc-t4-8',
            front: 'When do consumers bear most of the tax burden?',
            back: 'When demand is inelastic — consumers are relatively unresponsive to price changes, so they continue buying despite price increases, bearing most of the tax.',
            topic: 'Indirect tax incidence'
        },
        {
            id: 'fc-t4-9',
            front: 'When do producers bear most of the tax burden?',
            back: 'When demand is elastic — consumers are sensitive to price and reduce purchases significantly if prices rise, forcing producers to absorb most of the tax.',
            topic: 'Indirect tax incidence'
        },
        {
            id: 'fc-t4-10',
            front: 'What is the effect of a subsidy on supply?',
            back: 'A subsidy lowers producers costs, shifting supply rightward. This increases quantity and lowers price for consumers. The benefit is shared between consumers and producers.',
            topic: 'Subsidy incidence'
        }
    ]
};

export default exercises_economics_1_4;
