export const exercises_economics_1_5 = {
    mcq: [
        {
            id: 'mcq-t5-1',
            stem: 'Market failure occurs when:',
            options: [
                'Resources are perfectly allocated',
                'Free markets fail to allocate resources efficiently',
                'Government intervenes in markets',
                'Prices are always rising'
            ],
    correctAnswer: 1,
            rationale: 'Market failure means the free market outcome is not efficient — resources are misallocated, causing either overproduction or underproduction of goods relative to the social optimum.',
            topic: 'Sources of market failure'
        },
        {
            id: 'mcq-t5-2',
            stem: 'Negative externalities occur when:',
            options: [
                'Production creates benefits for third parties',
                'Production creates costs for third parties',
                'Consumers pay too much for goods',
                'Producers earn excessive profits'
            ],
    correctAnswer: 1,
            rationale: 'Negative externalities (external costs) occur when the production or consumption of a good imposes costs on third parties not involved in the transaction. These costs are not reflected in market price, leading to overproduction.',
            topic: 'Social vs private costs and benefits'
        },
        {
            id: 'mcq-t5-3',
            stem: 'Which of the following is a public good?',
            options: [
                'A private car',
                'A chocolate bar',
                'National defence',
                'A cinema ticket'
            ],
    correctAnswer: 2,
            rationale: 'Public goods are non-excludable and non-rival. National defence cannot exclude people who do not pay (non-excludable) and one person\'s consumption does not reduce availability to others (non-rival).',
            topic: 'Public vs private goods'
        },
        {
            id: 'mcq-t5-4',
            stem: 'The free-rider problem occurs because:',
            options: [
                'People ride bikes for free',
                'People can benefit from a public good without paying',
                'Consumers avoid paying taxes',
                'Firms give away free samples'
            ],
    correctAnswer: 1,
            rationale: 'The free-rider problem arises with public goods because individuals can benefit from them without paying (cannot be excluded). This leads to underprovision as markets cannot charge beneficiaries.',
            topic: 'Public vs private goods'
        },
        {
            id: 'mcq-t5-5',
            stem: 'Information asymmetry occurs when:',
            options: [
                'Everyone has perfect information',
                'All parties have equal information',
                'One party has more information than another',
                'Information is always accurate'
            ],
    correctAnswer: 2,
            rationale: 'Information asymmetry means one party in a transaction has more or better information than the other (e.g. sellers know more about product quality than buyers). This leads to market failure through adverse selection and moral hazard.',
            topic: 'Symmetric vs asymmetric information'
        },
        {
            id: 'mcq-t5-6',
            stem: 'Moral hazard is a problem associated with:',
            options: [
                'Public goods',
                'Positive externalities',
                'Information asymmetry after a transaction',
                'Government regulation'
            ],
    correctAnswer: 2,
            rationale: 'Moral hazard occurs when one party takes risks because another party bears the costs, typically due to information asymmetry after a transaction. Example: insured drivers take more risks because insurance company bears accident costs.',
            topic: 'Symmetric vs asymmetric information'
        }
    ],
    fillblank: [
        {
            id: 'fb-t5-1',
            stem: 'Market failure occurs when free markets fail to allocate resources __BLANK__.',
            blanks: [
                { answer: 'efficiently' }
            ],
            rationale: 'Efficient allocation means producing the socially optimal quantity of each good. Market failure causes deviation from this optimum.'
        },
        {
            id: 'fb-t5-2',
            stem: 'Negative externalities lead to __BLANK__ because external costs are not priced in.',
            blanks: [
                { answer: 'overproduction' }
            ],
            rationale: 'When external costs are not reflected in market price, the good is too cheap relative to its true social cost, leading to overproduction relative to the social optimum.'
        },
        {
            id: 'fb-t5-3',
            stem: 'Positive externalities lead to __BLANK__ because external benefits are not rewarded.',
            blanks: [
                { answer: 'underproduction' }
            ],
            rationale: 'When external benefits are not reflected in market price, producers receive less than the true social benefit, leading to underproduction relative to the social optimum.'
        },
        {
            id: 'fb-t5-4',
            stem: 'Public goods are __BLANK__ and __BLANK__.',
            blanks: [
                { answer: 'non-excludable' },
                { answer: 'non-rival' }
            ],
            rationale: 'Non-excludable means people cannot be prevented from using the good. Non-rival means one person\'s consumption does not reduce availability to others.'
        },
        {
            id: 'fb-t5-5',
            stem: 'The free-rider problem leads to __BLANK__ of public goods by markets.',
            blanks: [
                { answer: 'underprovision' }
            ],
            rationale: 'Since people can benefit from public goods without paying, private firms have insufficient incentive to provide them, leading to underprovision or zero provision.'
        }
    ],
    dragdrop: [
        {
            id: 'dd-t5-1',
            stem: 'Classify these as examples of market failure.',
            categories: ['Negative Externality', 'Positive Externality', 'Public Good', 'Information Failure'],
            items: [
                { text: 'Air pollution from factories', category: 'Negative Externality' },
                { text: 'Vaccination programmes', category: 'Positive Externality' },
                { text: 'National defence', category: 'Public Good' },
                { text: 'Second-hand car market (asymmetric info)', category: 'Information Failure' },
                { text: 'Traffic congestion', category: 'Negative Externality' },
                { text: 'Education and training', category: 'Positive Externality' },
                { text: 'Street lighting', category: 'Public Good' },
                { text: 'Insurance markets', category: 'Information Failure' }
            ]
        },
        {
            id: 'dd-t5-2',
            stem: 'Categorise these goods.',
            categories: ['Public Goods', 'Private Goods', 'Merit Goods', 'Demerit Goods'],
            items: [
                { text: 'National defence', category: 'Public Goods' },
                { text: 'Lighthouse', category: 'Public Goods' },
                { text: 'Smartphone', category: 'Private Goods' },
                { text: 'Restaurant meal', category: 'Private Goods' },
                { text: 'Education', category: 'Merit Goods' },
                { text: 'Healthcare', category: 'Merit Goods' },
                { text: 'Cigarettes', category: 'Demerit Goods' },
                { text: 'Alcohol', category: 'Demerit Goods' }
            ]
        },
        {
            id: 'dd-t5-3',
            stem: 'Match the information problem to its characteristic.',
            categories: ['Adverse Selection', 'Moral Hazard', 'Symmetric Information'],
            items: [
                { text: 'Occurs before transaction', category: 'Adverse Selection' },
                { text: 'Occurs after transaction', category: 'Moral Hazard' },
                { text: 'Buyers and sellers have equal knowledge', category: 'Symmetric Information' },
                { text: 'High-risk individuals more likely to buy insurance', category: 'Adverse Selection' },
                { text: 'Insured take more risks', category: 'Moral Hazard' }
            ]
        }
    ],
    sequence: [
        {
            id: 'seq-t5-1',
            stem: 'Order the consequences of a negative externality:',
            steps: [
                'Production creates external costs',
                'External costs are not reflected in market price',
                'Market price is below social cost',
                'Consumers buy more than socially optimal quantity',
                'Overproduction and welfare loss occur'
            ]
        },
        {
            id: 'seq-t5-2',
            stem: 'Put the process of market failure due to information asymmetry in order:',
            steps: [
                'One party has superior information',
                'Information cannot be easily verified',
                'Other party cannot make fully informed decision',
                'Market outcome becomes inefficient',
                'Adverse selection or moral hazard may occur'
            ]
        }
    ],
    keyword: [
        {
            id: 'kw-t5-1',
            stem: 'Define market failure and explain why it occurs. [4 marks]',
            marks: 4,
            keywords: ['efficient', 'allocation', 'free market', 'resources', 'Pareto', 'optimal'],
            modelAnswer: 'Market failure occurs when the free market fails to allocate resources efficiently, resulting in an outcome that is not Pareto optimal. This happens because the market outcome diverges from the social optimum, typically due to externalities, public goods, information failure, or market power.'
        },
        {
            id: 'kw-t5-2',
            stem: 'Distinguish between negative and positive externalities with examples. [4 marks]',
            marks: 4,
            keywords: ['external costs', 'overproduction', 'external benefits', 'underproduction', 'third party'],
            modelAnswer: 'Negative externalities occur when production or consumption imposes costs on third parties not involved in the transaction (e.g. pollution, congestion). These cause overproduction because external costs are not priced in. Positive externalities create benefits for third parties (e.g. education, vaccination), causing underproduction because external benefits are not rewarded.'
        },
        {
            id: 'kw-t5-3',
            stem: 'Explain what is meant by non-excludable and non-rival in relation to public goods. [4 marks]',
            marks: 4,
            keywords: ['cannot prevent', 'non-excludable', 'consumption', 'does not reduce', 'non-rival', 'free rider'],
            modelAnswer: 'Non-excludable means it is not possible (or very costly) to prevent people from consuming the good, even if they do not pay. Non-rival means one person\'s consumption does not reduce the amount available to others. These characteristics create the free-rider problem, leading to underprovision by markets.'
        },
        {
            id: 'kw-t5-4',
            stem: 'Explain the difference between adverse selection and moral hazard. [4 marks]',
            marks: 4,
            keywords: ['before transaction', 'adverse selection', 'after transaction', 'moral hazard', 'information asymmetry', 'risk'],
            modelAnswer: 'Adverse selection occurs before a transaction when one party has private information — typically, high-risk individuals are more likely to seek insurance or enter markets. Moral hazard occurs after a transaction when one party can take risks because another party bears the costs — e.g., an insured driver taking more risks because the insurer pays accident costs.'
        }
    ],
    flashcards: [
        {
            id: 'fc-t5-1',
            front: 'What is market failure?',
            back: 'When free markets fail to allocate resources efficiently, resulting in overproduction or underproduction relative to the social optimum. Causes include externalities, public goods, information failure, and market power.',
            topic: 'Sources of market failure'
        },
        {
            id: 'fc-t5-2',
            front: 'What is a negative externality?',
            back: 'An external cost imposed on third parties not involved in a transaction. Example: pollution from factory production. Leads to overproduction as costs are not reflected in price.',
            topic: 'Social vs private costs and benefits'
        },
        {
            id: 'fc-t5-3',
            front: 'What is a positive externality?',
            back: 'An external benefit received by third parties not involved in a transaction. Example: vaccination benefits community. Leads to underproduction as benefits are not reflected in price.',
            topic: 'Social vs private costs and benefits'
        },
        {
            id: 'fc-t5-4',
            front: 'What is a public good?',
            back: 'A good that is non-excludable (cannot prevent free consumption) and non-rival (one person\'s use does not reduce availability). Examples: national defence, street lighting, lighthouses.',
            topic: 'Public vs private goods'
        },
        {
            id: 'fc-t5-5',
            front: 'What is the free-rider problem?',
            back: 'When individuals can benefit from a public good without paying, because they cannot be excluded. This leads to underprovision as markets cannot capture payment from all beneficiaries.',
            topic: 'Public vs private goods'
        },
        {
            id: 'fc-t5-6',
            front: 'What is asymmetric information?',
            back: 'When one party in a transaction has more or better information than the other. Leads to adverse selection (before transaction) and moral hazard (after).',
            topic: 'Symmetric vs asymmetric information'
        },
        {
            id: 'fc-t5-7',
            front: 'What is adverse selection?',
            back: 'Occurs before a transaction when one party has private information. Example: high-risk individuals are more likely to buy insurance, leading to average premiums and market inefficiency.',
            topic: 'Symmetric vs asymmetric information'
        },
        {
            id: 'fc-t5-8',
            front: 'What is moral hazard?',
            back: 'Occurs after a transaction when one party takes risks because another party bears the costs. Example: insured drivers taking more risks because insurer pays accident costs.',
            topic: 'Symmetric vs asymmetric information'
        },
        {
            id: 'fc-t5-9',
            front: 'What is a merit good?',
            back: 'A good with positive externalities that is underconsumed relative to the social optimum. Examples: education, healthcare, vaccination. Society benefits from individual consumption.',
            topic: 'Public vs private goods'
        },
        {
            id: 'fc-t5-10',
            front: 'What is a demerit good?',
            back: 'A good with negative externalities that is overconsumed relative to the social optimum. Examples: alcohol, tobacco, gambling. Society bears costs of individual consumption.',
            topic: 'Public vs private goods'
        }
    ]
};

export default exercises_economics_1_5;
