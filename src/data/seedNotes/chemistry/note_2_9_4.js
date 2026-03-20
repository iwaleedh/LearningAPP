/**
 * Seed note: Chemistry · Unit 2 · Topic 9 · Subtopic 4
 * "Effect of catalysts on rate"
 * Source: Pearson Edexcel IAL Chemistry — Section 9A.4
 */
export const note_chemistry_2_9_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the role of catalysts in providing an alternative reaction route with a lower activation energy, and interpret this using Maxwell-Boltzmann distributions and enthalpy level diagrams.' },
            terms: []
        },
        {
            id: 'h-catalysts',
            type: 'heading',
            data: { text: 'Catalysts', level: 2 },
            terms: []
        },
        {
            id: 'list-catalyst-concept',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'A <strong>catalyst</strong> is a substance that increases the rate of completely unchanged at the end of the reaction.',
                    'It works by providing an <strong>alternative reaction route</strong> with a <em>lower activation energy</em> ($E_a$).',
                    'By providing this easier route, a much larger proportion of the particles have enough energy to react when they collide.'
                ]
            },
            terms: ['Catalyst', 'Alternative reaction route']
        },
        {
            id: 'callout-analogy',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Exam phrasing: The "Tunnel" Analogy',
                text: 'Never write that a catalyst "lowers the activation energy". This is incorrect!<br/><br/>Imagine a mountain between two valleys. To get across, you must climb over it (uncatalysed route). If someone digs a tunnel through the mountain, more people can cross easily. The tunnel provides an <strong>alternative route with a lower barrier</strong>. You did not lower the mountain itself!<br/><br/>Always state: <em>"A catalyst provides an alternative route with a lower activation energy."</em>'
            },
            terms: []
        },
        {
            id: 'h-mb-curve',
            type: 'heading',
            data: { text: 'Catalysts on a Maxwell-Boltzmann Curve', level: 2 },
            terms: []
        },
        {
            id: 'svg-mb-catalyst',
            type: 'svg',
            data: {
                caption: 'The effect of a catalyst on the Maxwell-Boltzmann distribution of molecular energies.',
                svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
    <rect width="600" height="350" fill="var(--color-surface)" />
    
    <!-- Area under curve right of Ec -->
    <path d="M 320 236 Q 400 90, 500 15 L 500 280 L 320 280 Z" fill="#0c4a6e" />
    
    <!-- Area under curve right of Ea (darker blue) -->
    <path d="M 400 134 Q 450 40, 500 15 L 500 280 L 400 280 Z" fill="#1e3a8a" />
    
    <!-- Axes -->
    <line x1="50" y1="280" x2="550" y2="280" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
    <line x1="50" y1="280" x2="50" y2="30" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
    
    <!-- Labels -->
    <text x="300" y="320" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">Energy, E</text>
    <text x="30" y="160" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90, 30, 160)">Number of molecules</text>

    <!-- Maxwell-Boltzmann Curve -->
    <path d="M 50 280 Q 80 280, 100 200 Q 130 50, 200 50 Q 280 50, 400 134 Q 460 171, 530 250" fill="none" stroke="var(--color-primary)" stroke-width="3" />
    
    <!-- Uncatalysed Ea -->
    <line x1="400" y1="280" x2="400" y2="134" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="5,5" />
    <text x="400" y="300" font-family="sans-serif" font-size="16" fill="var(--color-text)">Eₐ (uncatalysed)</text>
    
    <!-- Catalysed Ec -->
    <line x1="320" y1="280" x2="320" y2="236" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="5,5" />
    <text x="320" y="300" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="end">Eₐ (catalysed)</text>
    
    <!-- Legend -->
    <rect x="350" y="50" width="20" height="20" fill="#1e3a8a" />
    <text x="380" y="65" font-family="sans-serif" font-size="12" fill="var(--color-text)">Molecules reacting without catalyst</text>
    <rect x="350" y="80" width="20" height="20" fill="#0c4a6e" stroke="#93C5FD" stroke-width="1"/>
    <text x="380" y="95" font-family="sans-serif" font-size="12" fill="var(--color-text)">Extra molecules reacting with catalyst</text>

    <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-text)" />
        </marker>
    </defs>
</svg>`
            },
            terms: []
        },
        {
            id: 'list-mb-catalyst',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Adding a catalyst does <strong>not change the shape</strong> of the curve at all.',
                    'Instead, it places a new, lower $E_a$ vertical line to the <em>left</em> of the uncatalysed line.',
                    'The area under the curve to the right of this new lower $E_a$ is much larger.',
                    'Therefore, a much greater <strong>proportion of molecules</strong> has energy greater than or equal to the catalysed activation energy ($E \ge E_{cat}$).',
                    'This leads to a dramatically higher frequency of successful collisions.'
                ]
            },
            terms: ['Proportion of molecules']
        },
        {
            id: 'h-reaction-profile',
            type: 'heading',
            data: { text: 'Catalysts on an Enthalpy Level Diagram', level: 2 },
            terms: []
        },
        {
            id: 'svg-enthalpy-profile',
            type: 'svg',
            data: {
                caption: 'Enthalpy level diagram showing uncatalysed and catalysed pathways.',
                svg: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
    <rect width="600" height="350" fill="var(--color-surface)" />
    
    <!-- Axes -->
    <line x1="50" y1="300" x2="550" y2="300" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
    <line x1="50" y1="300" x2="50" y2="30" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
    
    <!-- Labels -->
    <text x="300" y="340" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">Progress of reaction</text>
    <text x="30" y="165" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90, 30, 165)">Enthalpy, H</text>

    <!-- Reactants and Products Lines -->
    <line x1="80" y1="220" x2="180" y2="220" stroke="var(--color-text)" stroke-width="3" />
    <text x="130" y="240" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">Reactants</text>

    <line x1="420" y1="280" x2="520" y2="280" stroke="var(--color-text)" stroke-width="3" />
    <text x="470" y="300" font-family="sans-serif" font-size="16" fill="var(--color-text)" text-anchor="middle">Products</text>

    <!-- Uncatalysed Path (single large hump) -->
    <path d="M 180 220 Q 300 -50, 420 280" fill="none" stroke="var(--color-text-secondary)" stroke-width="2" stroke-dasharray="5,5" />
    
    <!-- Catalysed Path (two smaller humps with intermediate) -->
    <path d="M 180 220 Q 230 40, 300 160 Q 370 60, 420 280" fill="none" stroke="#10B981" stroke-width="3" />

    <!-- Ea indicators -->
    <line x1="285" y1="220" x2="285" y2="40" stroke="var(--color-text-secondary)" stroke-width="1" stroke-dasharray="3,3" />
    <path d="M 285 220 L 285 40" fill="none" stroke="var(--color-text-secondary)" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow-start)" />
    <text x="280" y="130" font-family="sans-serif" font-size="14" fill="var(--color-text-secondary)" text-anchor="end">Eₐ (uncatalysed)</text>

    <line x1="230" y1="220" x2="230" y2="95" stroke="#10B981" stroke-width="1" stroke-dasharray="3,3" />
    <path d="M 230 220 L 230 95" fill="none" stroke="#10B981" stroke-width="2" marker-end="url(#arrow-green)" marker-start="url(#arrow-start-green)" />
    <text x="235" y="145" font-family="sans-serif" font-size="14" fill="#10B981">Eₐ (catalysed)</text>

    <!-- Overall Enthalpy Change -->
    <line x1="180" y1="220" x2="285" y2="220" stroke="var(--color-text)" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 450 220 L 450 280" fill="none" stroke="var(--color-primary)" stroke-width="2" marker-end="url(#arrow-primary)" marker-start="url(#arrow-start-primary)" />
    <text x="460" y="255" font-family="sans-serif" font-size="16" fill="var(--color-primary)">ΔH</text>

    <text x="310" y="185" font-family="sans-serif" font-size="13" fill="#10B981">Intermediate</text>

    <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-text)" />
        </marker>
        <marker id="arrow-start" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto-start-reverse">
            <path d="M 10 0 L 0 5 L 10 10 z" fill="var(--color-text)" />
        </marker>
        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
        </marker>
        <marker id="arrow-start-green" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto-start-reverse">
            <path d="M 10 0 L 0 5 L 10 10 z" fill="#10B981" />
        </marker>
        <marker id="arrow-primary" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" />
        </marker>
        <marker id="arrow-start-primary" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto-start-reverse">
            <path d="M 10 0 L 0 5 L 10 10 z" fill="var(--color-primary)" />
        </marker>
    </defs>
</svg>`
            },
            terms: []
        },
        {
            id: 'list-profiles',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'The starting enthalpy of reactants and the final enthalpy of products remain exactly the same.',
                    'Therefore, a catalyst <strong>does not change the overall enthalpy change (ΔH)</strong>.',
                    'It only lowers the "hump" (activation energy barrier) between them.',
                    'Many catalysed reactions proceed via an <strong>intermediate</strong> species. On a profile, this looks like a camel\'s back with two smaller activation energy humps and a dip in the middle (the intermediate).',
                    'The highest peak of the alternative humps is still lower than the single uncatalysed hump.'
                ]
            },
            terms: ['Enthalpy level diagram', 'Enthalpy change', 'Reaction intermediate']
        },
        {
            id: 'h-industry',
            type: 'heading',
            data: { text: 'Catalysts in Industry', level: 2 },
            terms: []
        },
        {
            id: 'list-industry',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Faster production:</strong> They increase the rate of reaction, forming the desired product more quickly.',
                    '<strong>Lower temperatures:</strong> By providing a lower $E_a$ route, the reaction can be carried out at lower temperatures, saving huge amounts of money on energy costs.',
                    '<strong>Atom economy:</strong> They can sometimes be used to purposefully direct the reaction towards a specific product, increasing atom economy.',
                    '<strong>Durable:</strong> Most industrial catalysts are transition metals (which have variable oxidation states to form intermediates). They are chemically unchanged after the reaction.'
                ]
            },
            terms: []
        },
        {
            id: 'table-catalyst-examples',
            type: 'comparisonTable',
            data: {
                caption: 'Required Common Industrial Catalysts (Edexcel/A-Level)',
                headers: ['Reaction / Process', 'Catalyst Used', 'Phase / Type'],
                rows: [
                    ['Decomposition of hydrogen peroxide', 'Manganese(IV) oxide (MnO₂)', 'Solid (Heterogeneous)'],
                    ['Nitration of benzene', 'Concentrated Sulfuric Acid (H₂SO₄)', 'Liquid (Homogeneous)'],
                    ['Haber Process (Ammonia NH₃)', 'Iron (Fe)', 'Solid (Heterogeneous)'],
                    ['Contact Process (Sulfuric acid - SO₂ → SO₃)', 'Vanadium(V) oxide (V₂O₅)', 'Solid (Heterogeneous)'],
                    ['Hydrogenation of C=C double bonds (Margarine)', 'Nickel (Ni)', 'Solid (Heterogeneous)']
                ]
            },
            terms: ['Heterogeneous catalyst', 'Haber process', 'Contact process']
        },
        {
            id: 'h-transition-states',
            type: 'heading',
            data: { text: 'Transition States vs Intermediates', level: 2 },
            terms: []
        },
        {
            id: 'list-profile-features',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Many reactions do not just have a simple, single-hump energy profile.',
                    'The shape depends on whether the reaction mechanism proceeds via a <strong>single transition state</strong> (one step) or an <strong>intermediate</strong> (multiple steps).'
                ]
            },
            terms: []
        },
        {
            id: 'callout-transition-intermediate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definitions',
                text: '<strong>Transition State:</strong> The arrangement of atoms at the exact top of the activation energy barrier. Bonds are half-broken and half-formed. It is entirely unstable and cannot be isolated.<br><br><strong>Intermediate:</strong> A chemical species formed during a multi-step reaction that has a real, albeit temporary, existence. It corresponds to a "dip" between two peaks on an energy profile.'
            },
            terms: []
        },
        {
            id: 'table-ts-vs-intermediate',
            type: 'comparisonTable',
            data: {
                caption: 'Comparing Transition States and Intermediates',
                headers: ['Feature', 'Transition State', 'Intermediate'],
                rows: [
                    ['<strong>Energy Profile Position</strong>', 'At a maximum (peak top)', 'At a local minimum (dip between peaks)'],
                    ['<strong>Stability</strong>', 'Entirely unstable', 'Temporarily stable (though highly reactive)'],
                    ['<strong>Detection</strong>', 'Cannot be isolated or detected', 'Can sometimes be detected or briefly isolated'],
                    ['<strong>Reaction Example</strong>', 'S<sub>N</sub>2 nucleophilic substitution', 'S<sub>N</sub>1 nucleophilic substitution']
                ]
            },
            terms: []
        },
        {
            id: 'callout-intermediate-peaks',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Interpreting Multi-Peak Profiles',
                text: 'In a reaction with an intermediate (e.g. an S<sub>N</sub>1 pathway), the energy profile will have two peaks. The highest peak represents the <strong>Rate Determining Step</strong> (the slowest step), requiring the most activation energy.'
            },
            terms: []
        },
        {
            id: 'h-acid-catalysis',
            type: 'heading',
            data: { text: 'Acid Catalysis in Organic Chemistry', level: 2 },
            terms: []
        },
        {
            id: 'table-acid-catalysts',
            type: 'comparisonTable',
            data: {
                caption: 'Important Examples of Acid Catalysts in Organic Reactions',
                headers: ['Reaction', 'Reactants', 'Catalyst & Conditions', 'Phase / Type'],
                rows: [
                    ['Nitration of benzene', 'Benzene + Conc. Nitric acid ($HNO_3$)', 'Conc. sulfuric acid ($H_2SO_4$), < 50 °C', 'Homogeneous'],
                    ['Hydration of ethene', 'Ethene + Steam ($H_2O$)', 'Solid silicon dioxide ($SiO_2$) coated with phosphoric(V) acid ($H_3PO_4$), 300 °C, 60-70 atm', 'Heterogeneous'],
                    ['Esterification', 'Carboxylic acid + Alcohol', 'Conc. sulfuric acid ($H_2SO_4$) + Heat', 'Homogeneous'],
                    ['Acid hydrolysis of esters', 'Ester + Water', 'Dilute acid (HCl or $H_2SO_4$) + Reflux', 'Homogeneous']
                ]
            },
            terms: ['Esterification', 'Hydration', 'Nitration']
        },
        {
            id: 'h-other-organic-catalysts',
            type: 'heading',
            data: { text: 'Other Catalysts in Organic Chemistry', level: 2 },
            terms: []
        },
        {
            id: 'table-other-organic-catalysts',
            type: 'comparisonTable',
            data: {
                caption: 'Further Examples of Catalysis in Organic Reactions',
                headers: ['Reaction / Process', 'Reactants', 'Catalyst & Conditions', 'Phase / Type'],
                rows: [
                    ['Manufacture of epoxyethane', 'Ethene + Oxygen ($O_2$)', 'Solid silver (Ag) catalyst, 250-300 °C, < 15 atm', 'Heterogeneous (solid with gas)'],
                    ['Halogenation of benzene', 'Benzene + $Cl_2$ / $Br_2$', 'Aluminium chloride ($AlCl_3$) or Iron (Fe) forming $FeX_3$', 'Homogeneous'],
                    ['Friedel-Crafts alkylation', 'Benzene + Chloroalkane', 'Aluminium chloride ($AlCl_3$)', 'Homogeneous'],
                    ['Friedel-Crafts acylation', 'Benzene + Acyl chloride', 'Aluminium chloride ($AlCl_3$)', 'Homogeneous']
                ]
            },
            terms: ['Epoxyethane', 'Friedel-Crafts', 'Halogenation']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-catalyst-concept', prompt: 'Define a catalyst and state precisely how it works.' },
            { id: 'c2', blockId: 'callout-analogy', prompt: 'True or False: A catalyst increases the kinetic energy of the reactant particles. Explain.' },
            { id: 'c3', blockId: 'list-mb-catalyst', prompt: 'Explain, using the Maxwell-Boltzmann distribution, how a catalyst increases the rate of reaction.' },
            { id: 'c4', blockId: 'list-profiles', prompt: 'How does a catalyst affect the overall enthalpy change (ΔH) of a reaction?' },
            { id: 'c5', blockId: 'list-industry', prompt: 'Explain two economic advantages of using catalysts in large-scale industrial processes.' },
            { id: 'c6', blockId: 'table-catalyst-examples', prompt: 'Define the term "heterogeneous catalyst" and name the solid catalyst used in the Haber process.' },
            { id: 'c7', blockId: 'table-ts-vs-intermediate', prompt: 'Distinguish between a transition state and a reaction intermediate in terms of stability and isolation.' },
            { id: 'c8', blockId: 'table-acid-catalysts', prompt: 'Name the catalyst and conditions used for the hydration of ethene.' },
            { id: 'c9', blockId: 'table-acid-catalysts', prompt: 'What acid catalyst is used for the esterification of carboxylic acids and alcohols, and is it homogeneous or heterogeneous?' },
            { id: 'c10', blockId: 'table-other-organic-catalysts', prompt: 'State the catalyst, temperatures, and pressure used for the manufacture of epoxyethane.' },
            { id: 'c11', blockId: 'table-other-organic-catalysts', prompt: 'What catalyst is typically used in the halogenation, alkylation, and acylation of benzene?' }
        ],
        summaryText: 'Catalyst: increases rate without being used up by providing an alternative reaction route with a lower activation energy. It does not change the kinetic energy of particles or the overall ΔH. On a Maxwell-Boltzmann curve, the catalyst shifts the E_a line left, exponentially increasing the proportion of molecules with E ≥ E_a, yielding a higher frequency of successful collisions. In industry, they save money by allowing faster production at lower temperatures. Examples include Iron in the Haber process and V₂O₅ in the Contact process (both heterogeneous). The energy profile shape depends on mechanism: a single transition state (unstable top of peak) vs an intermediate (temporary stable dip between peaks).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_9_4;
