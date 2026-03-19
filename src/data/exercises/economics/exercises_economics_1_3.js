export const exercises_economics_1_3 = {
    mcq: [
        {
            id: 'mcq-t3-1',
            stem: 'The law of supply states that:',
            options: [
                'As price rises, quantity supplied falls',
                'As price rises, quantity supplied rises',
                'Quantity supplied is constant',
                'Supply is unrelated to price'
            ],
    correctAnswer: 1,
            rationale: 'The law of supply states that as the price of a good rises, the quantity supplied increases (ceteris paribus). This produces an upward-sloping supply curve as higher prices incentivise producers to supply more.',
            topic: 'Supply curve movements vs shifts'
        },
        {
            id: 'mcq-t3-2',
            stem: 'A movement along the supply curve occurs when:',
            options: [
                'Technology improves',
                'The price of the good changes',
                'Input costs change',
                'Number of producers changes'
            ],
    correctAnswer: 1,
            rationale: 'A movement along the supply curve occurs only when the price of the good itself changes. Changes in any other factor cause a shift of the entire supply curve.',
            topic: 'Supply curve movements vs shifts'
        },
        {
            id: 'mcq-t3-3',
            stem: 'Which of the following would shift the supply curve to the right?',
            options: [
                'Increase in input costs',
                'Introduction of a new tax',
                'Improvement in technology',
                'Exit of firms from the market'
            ],
    correctAnswer: 2,
            rationale: 'Improved technology increases productivity, meaning firms can produce more at any given price. This shifts supply to the right. The other options would decrease supply (leftward shift).',
            topic: 'Supply determinants'
        },
        {
            id: 'mcq-t3-4',
            stem: 'Price Elasticity of Supply (PES) measures:',
            options: [
                'The responsiveness of quantity supplied to price changes',
                'The responsiveness of demand to price changes',
                'The change in production costs',
                'The relationship between supply and demand'
            ],
    correctAnswer: 0,
            rationale: 'PES measures how responsive quantity supplied is to changes in price. It is calculated as % change in quantity supplied divided by % change in price.',
            topic: 'Price elasticity of supply'
        },
        {
            id: 'mcq-t3-5',
            stem: 'Supply is typically more elastic in the:',
            options: [
                'Short run',
                'Long run',
                'Very short term',
                'Immediate period'
            ],
    correctAnswer: 1,
            rationale: 'Supply is more elastic in the long run because firms have time to adjust all inputs, expand capacity, and enter or exit the market. In the short run, at least one factor is fixed.',
            topic: 'Short run vs long run'
        }
    ],
    fillblank: [
        {
            id: 'fb-t3-1',
            stem: 'A __BLANK__ along the supply curve occurs when the price of the good itself changes.',
            blanks: [
                { answer: 'movement' }
            ],
            rationale: 'Price changes cause movements along the supply curve (extension at higher prices, contraction at lower prices). Other factors cause shifts of the entire curve.'
        },
        {
            id: 'fb-t3-2',
            stem: 'A __BLANK__ shift of the supply curve means more is supplied at every price.',
            blanks: [
                { answer: 'rightward' }
            ],
            rationale: 'A rightward shift represents an increase in supply. At any given price, producers are willing and able to supply more of the good.'
        },
        {
            id: 'fb-t3-3',
            stem: 'PES is calculated as percentage change in quantity supplied divided by percentage change in __BLANK__.',
            blanks: [
                { answer: 'price' }
            ],
            rationale: 'Price Elasticity of Supply = (% change in Qs) / (% change in P). It measures how sensitive supply is to price changes.'
        },
        {
            id: 'fb-t3-4',
            stem: 'In the __BLANK__, at least one factor of production is fixed.',
            blanks: [
                { answer: 'short run' }
            ],
            rationale: 'The short run is defined as a period where at least one factor of production (usually capital) is fixed. Firms can only vary variable inputs like labour and raw materials.'
        },
        {
            id: 'fb-t3-5',
            stem: 'In the __BLANK__, all factors of production can be varied.',
            blanks: [
                { answer: 'long run' }
            ],
            rationale: 'The long run is a period where all factors of production are variable. Firms can adjust plant size, enter new markets, or exit industries.'
        }
    ],
    dragdrop: [
        {
            id: 'dd-t3-1',
            stem: 'Categorise these factors by their effect on supply.',
            categories: ['Increase Supply (Shift Right)', 'Decrease Supply (Shift Left)'],
            items: [
                { text: 'Fall in input costs', category: 'Increase Supply (Shift Right)' },
                { text: 'New tax on producers', category: 'Decrease Supply (Shift Left)' },
                { text: 'Improved technology', category: 'Increase Supply (Shift Right)' },
                { text: 'Rise in wages', category: 'Decrease Supply (Shift Left)' },
                { text: 'More firms enter market', category: 'Increase Supply (Shift Right)' },
                { text: 'Government subsidy', category: 'Increase Supply (Shift Right)' }
            ]
        },
        {
            id: 'dd-t3-2',
            stem: 'Classify these supply characteristics.',
            categories: ['Short Run', 'Long Run'],
            items: [
                { text: 'At least one factor is fixed', category: 'Short Run' },
                { text: 'All factors are variable', category: 'Long Run' },
                { text: 'Less elastic supply', category: 'Short Run' },
                { text: 'More elastic supply', category: 'Long Run' },
                { text: 'Firms cannot change plant size', category: 'Short Run' },
                { text: 'Firms can enter or exit market', category: 'Long Run' }
            ]
        },
        {
            id: 'dd-t3-3',
            stem: 'Match the PES value to the description.',
            categories: ['PES < 1 (Inelastic)', 'PES = 1 (Unit Elastic)', 'PES > 1 (Elastic)'],
            items: [
                { text: 'Quantity supplied changes less than proportionally to price', category: 'PES < 1 (Inelastic)' },
                { text: 'Quantity supplied changes proportionally to price', category: 'PES = 1 (Unit Elastic)' },
                { text: 'Quantity supplied changes more than proportionally to price', category: 'PES > 1 (Elastic)' },
                { text: 'Steeper supply curve', category: 'PES < 1 (Inelastic)' },
                { text: 'Flatter supply curve', category: 'PES > 1 (Elastic)' },
                { text: '45-degree line from origin', category: 'PES = 1 (Unit Elastic)' }
            ]
        }
    ],
    sequence: [
        {
            id: 'seq-t3-1',
            stem: 'Order the supply response to a price increase:',
            steps: [
                'Price of the good rises',
                'Producers receive higher revenue per unit',
                'Incentive to increase production',
                'Quantity supplied increases (movement along curve)',
                'Movement to new point on supply curve'
            ]
        },
        {
            id: 'seq-t3-2',
            stem: 'Put the adjustment process from short run to long run in order:',
            steps: [
                'Increase in demand causes price to rise',
                'Firms respond by increasing variable inputs (labour)',
                'Diminishing returns occur in short run',
                'Time passes allowing adjustment of fixed factors',
                'All factors become variable in long run'
            ]
        }
    ],
    keyword: [
        {
            id: 'kw-t3-1',
            stem: 'Distinguish between a movement along and a shift of the supply curve. [4 marks]',
            marks: 4,
            keywords: ['price', 'movement', 'non-price', 'shift', 'extension', 'contraction'],
            modelAnswer: 'A movement along the supply curve (extension or contraction) occurs when the price of the good itself changes — producers supply more at higher prices and less at lower prices. A shift of the entire supply curve occurs when a non-price factor changes, such as input costs, technology, or number of producers, affecting supply at every price.'
        },
        {
            id: 'kw-t3-2',
            stem: 'Explain why supply is typically more elastic in the long run than the short run. [4 marks]',
            marks: 4,
            keywords: ['time', 'fixed', 'variable', 'adjust', 'capacity', 'entry', 'exit'],
            modelAnswer: 'In the short run, at least one factor of production is fixed (usually capital), limiting the ability to increase output. In the long run, all factors are variable, giving firms time to expand capacity, adopt new technology, or new firms can enter the market, making supply more responsive to price changes.'
        },
        {
            id: 'kw-t3-3',
            stem: 'Explain three factors that would increase supply (shift right). [4 marks]',
            marks: 4,
            keywords: ['costs', 'technology', 'subsidy', 'producers', 'inputs', 'productivity'],
            modelAnswer: 'Factors increasing supply include: (1) fall in production costs (cheaper raw materials, lower wages), (2) improved technology that raises productivity, (3) government subsidies that reduce costs, and (4) more firms entering the market. Each causes more output at every price, shifting supply rightward.'
        }
    ],
    flashcards: [
        {
            id: 'fc-t3-1',
            front: 'What is the law of supply?',
            back: 'As the price of a good rises, the quantity supplied rises (ceteris paribus). Higher prices incentivise producers to supply more. This produces an upward-sloping supply curve.',
            topic: 'Supply curve movements vs shifts'
        },
        {
            id: 'fc-t3-2',
            front: 'What causes a movement along the supply curve?',
            back: 'A change in the price of the good itself. Higher price causes extension (more supplied); lower price causes contraction (less supplied).',
            topic: 'Supply curve movements vs shifts'
        },
        {
            id: 'fc-t3-3',
            front: 'What causes a shift of the supply curve?',
            back: 'Changes in non-price factors such as production costs, technology, taxes/subsidies, number of producers, expectations, or natural events.',
            topic: 'Supply determinants'
        },
        {
            id: 'fc-t3-4',
            front: 'How is Price Elasticity of Supply (PES) calculated?',
            back: 'PES = (% change in quantity supplied) / (% change in price). It measures how responsive supply is to price changes.',
            topic: 'Price elasticity of supply'
        },
        {
            id: 'fc-t3-5',
            front: 'What is the difference between short run and long run?',
            back: 'In the short run, at least one factor of production is fixed (usually capital). In the long run, all factors are variable, allowing full adjustment.',
            topic: 'Short run vs long run'
        },
        {
            id: 'fc-t3-6',
            front: 'Why is supply typically inelastic in agriculture?',
            back: 'Time constraints and stock — crops take time to grow and cannot be stored indefinitely. Weather and biological factors also limit immediate response to price changes.',
            topic: 'Time and stock constraints'
        },
        {
            id: 'fc-t3-7',
            front: 'What causes a rightward shift of supply?',
            back: 'Lower production costs, improved technology, government subsidies, more firms entering the market, favourable expectations, or beneficial natural events.',
            topic: 'Supply determinants'
        },
        {
            id: 'fc-t3-8',
            front: 'What causes a leftward shift of supply?',
            back: 'Higher production costs, new taxes, reduction in subsidies, firms exiting the market, unfavourable expectations, or adverse natural events.',
            topic: 'Supply determinants'
        },
        {
            id: 'fc-t3-9',
            front: 'What does inelastic supply (PES < 1) mean?',
            back: 'Quantity supplied changes less than proportionally to price changes. Supply curve is relatively steep. Common in agriculture and perishable goods.',
            topic: 'Price elasticity of supply'
        },
        {
            id: 'fc-t3-10',
            front: 'What does elastic supply (PES > 1) mean?',
            back: 'Quantity supplied changes more than proportionally to price changes. Supply curve is relatively flat. Common where firms can easily adjust output or new firms can enter quickly.',
            topic: 'Price elasticity of supply'
        }
    ]
};

export default exercises_economics_1_3;
