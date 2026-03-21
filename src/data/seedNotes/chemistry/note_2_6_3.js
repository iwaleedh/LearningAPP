/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 3
 * "Standard enthalpy changes: reaction, formation, combustion, neutralization"
 * Source: Pearson Edexcel IAL Chemistry — Section 6A.4
 */
export const note_chemistry_2_6_3 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define standard enthalpy of reaction, formation, combustion, and neutralization. Write equations representing these enthalpy changes including state symbols.' },
            terms: []
        },
        {
            id: 'h-reaction',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Reaction', level: 2 },
            terms: []
        },
        {
            id: 'callout-reaction',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Reaction (ΔᵣH⦵)',
                text: 'The enthalpy change when the reaction occurs in the molar quantities shown in the chemical equation, under standard conditions, with all reactants and products in their standard states.<br/><br/>Example: N₂(g) + 3H₂(g) → 2NH₃(g)   ΔᵣH⦵ = –92 kJ mol⁻¹<br/>This value is specifically for 1 mole of N₂ reacting with 3 moles of H₂.'
            },
            terms: ['Standard enthalpy of reaction']
        },
        {
            id: 'h-formation',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Formation', level: 2 },
            terms: []
        },
        {
            id: 'callout-formation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Formation (ΔfH⦵)',
                text: 'The enthalpy change when <strong>one mole of a compound</strong> is formed from its <strong>elements</strong>, under standard conditions, with all reactants and products in their standard states.<br/><br/><strong>Key point:</strong> The standard enthalpy of formation of any element in its standard state is defined as zero — this is a definition, not merely a convention.<br/><br/>Equation example (formation of ethanol):<br/>2C(s, graphite) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)<br/>Fractional coefficients are allowed because the equation MUST produce exactly 1 mole of the compound.<br/><br/><strong>ΔfH⦵ can be positive</strong> — for example, benzene: 6C(s) + 3H₂(g) → C₆H₆(l)    ΔfH⦵ = +49 kJ mol⁻¹<br/>This means benzene is less thermodynamically stable than its elements. The value can still be defined even though benzene cannot be made directly from carbon and hydrogen.'
            },
            terms: ['Standard enthalpy of formation']
        },
        {
            id: 'h-combustion',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Combustion', level: 2 },
            terms: []
        },
        {
            id: 'callout-combustion',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Combustion (ΔcH⦵)',
                text: 'The enthalpy change when <strong>one mole of a substance</strong> reacts <strong>completely with oxygen</strong>, under standard conditions, with all reactants and products in their standard states.<br/><br/>Equation example (combustion of methane):<br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)<br/>(Note: H₂O must be (l) because liquid is its standard state at 298 K, even though flame is hot!)'
            },
            terms: ['Standard enthalpy of combustion']
        },
        {
            id: 'h-neutralization',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Neutralization', level: 2 },
            terms: []
        },
        {
            id: 'callout-neut',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Neutralization (ΔneutH⦵)',
                text: 'The enthalpy change when an acid and an alkali react to form <strong>one mole of water</strong>, under standard conditions. Always negative.<br/><br/>Equation example:<br/>H⁺(aq) + OH⁻(aq) → H₂O(l)   ΔneutH⦵ ≈ −57 kJ mol⁻¹<br/><br/><strong>Why strong acid + strong alkali ≈ −57 kJ mol⁻¹ every time:</strong> Strong acids and alkalis are fully dissociated in solution. Regardless of which strong acid or alkali is used, the actual reaction is always:<br/>H⁺(aq) + OH⁻(aq) → H₂O(l)<br/>The spectator ions (e.g. Na⁺, Cl⁻) take no part in the reaction, so the enthalpy is approximately the same for all strong acid/base combinations.<br/><br/><strong>Why weak acids or weak alkalis give a less negative value:</strong><br/>A weak acid or base is only partially ionised in solution. Before neutralisation can occur, energy is needed to ionise the weak species first. This extra energy requirement makes the overall reaction less exothermic.<br/>• NaOH + ethanoic acid (weak acid): ΔH ≈ −56 kJ mol⁻¹<br/>• HCN + KOH (very weak acid): ΔH ≈ −12 kJ mol⁻¹'
            },
            terms: ['Standard enthalpy of neutralization']
        },
        {
            id: 'h-atomization',
            type: 'heading',
            data: { text: 'Standard Enthalpy of Atomization', level: 2 },
            terms: []
        },
        {
            id: 'callout-atom',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Enthalpy of Atomization (ΔatH⦵)',
                text: 'The enthalpy change when <strong>one mole of gaseous atoms</strong> is formed from its element in its standard state, under standard conditions.<br/><br/>Equation examples:<br/>Na(s) → Na(g)<br/>½ Cl₂(g) → Cl(g)<br/>(Note: We use ½ Cl₂ because we must form exactly 1 mole of atoms, not a molecule!)'
            },
            terms: ['Standard enthalpy of atomization']
        },
        {
            id: "h-qmc",
            type: "heading",
            data: { "text": "Calculating Heat Energy: q = mcΔT", "level": 2 },
            terms: []
        },
        {
            id: "callout-qmc",
            type: "callout",
            data: {
                style: "key",
                title: "The Heat Energy Equation",
                text: "<strong>q = mcΔT</strong><br/>Where:<br/>• <strong>q</strong> = heat energy transferred (in Joules, J).<br/>• <strong>m</strong> = mass of the substance heated/cooled (usually water, in grams, g). Assume 1 cm³ of aqueous solution = 1 g.<br/>• <strong>c</strong> = specific heat capacity (for water: 4.18 J g⁻¹ K⁻¹).<br/>• <strong>ΔT</strong> = temperature change (in K or °C)."
            },
            terms: []
        },
        {
            id: "callout-enth-calc",
            type: "callout",
            data: {
                style: "worked",
                title: "Worked Example: Standard Enthalpy of Reaction",
                text: "<strong>50.0 cm³ of 1.0 mol dm⁻³ HCl reacts with 50.0 cm³ of 1.0 mol dm⁻³ NaOH. The temperature rises from 21.0 °C to 27.5 °C. Calculate ΔH per mole of water formed.</strong><br/><br/><em>Step 1: Calculate q.</em><br/>m = total mass of liquid = 50.0 + 50.0 = 100.0 g.<br/>ΔT = 27.5 - 21.0 = 6.5 °C.<br/>q = 100.0 × 4.18 × 6.5 = 2717 J = <strong>2.717 kJ</strong>.<br/><br/><em>Step 2: Calculate moles (n).</em><br/>Moles of HCl = 50.0/1000 × 1.0 = 0.050 mol. Since the ratio is 1:1, 0.050 mol of water is formed.<br/><br/><em>Step 3: Calculate ΔH (ΔH = -q / n).</em><br/>Since temperature rose, the reaction is exothermic, so ΔH is negative.<br/>ΔH = -(2.717) / 0.050 = <strong>-54.3 kJ mol⁻¹</strong>."
            },
            terms: []
        },
        {
            id: "h-cooling",
            type: "heading",
            data: { "text": "Improving Accuracy: Cooling Curve Extrapolation", "level": 2 },
            terms: []
        },
        {
            id: "p-cooling",
            type: "paragraph",
            data: { "text": "In a simple coffee-cup calorimeter, heat is constantly lost to the surroundings while the reaction is occurring. Therefore, the highest temperature recorded on the thermometer is <em>lower</em> than the true maximum temperature if no heat was lost.<br/><br/>To find the true ΔT, we plot a <strong>Temperature vs Time</strong> graph and extrapolate the cooling curve back to the point of mixing." },
            terms: []
        },
        {
            id: "list-cooling",
            type: "list",
            data: {
                style: "numbered",
                items: [
                    "Measure the temperature of the initial solution(s) every minute for 3 minutes to establish a stable baseline.",
                    "Mix the reactants exactly at minute 4. <strong>Do not record a temperature at minute 4.</strong>",
                    "Measure the temperature every minute from minute 5 onwards, for about 10 minutes, as the solution cools.",
                    "Plot the points. Draw a line of best fit through the initial points, and another line of best fit through the cooling points (from min 5 onwards).",
                    "<strong>Extrapolate (extend)</strong> both lines to exactly minute 4 (the mixing point).",
                    "The vertical distance between the two lines at minute 4 is the true, theoretical <strong>ΔT</strong>."
                ]
            },
            terms: []
        },
        {
            id: 'svg-cooling-curve',
            type: 'svg',
            data: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 400" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Background Grid -->
    <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" stroke-width="0.5"/>
        </pattern>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#1e40af" />
        </marker>
    </defs>
    <rect x="50" y="20" width="600" height="330" fill="url(#grid)" />
    
    <!-- Axes -->
    <line x1="50" y1="350" x2="670" y2="350" stroke="#111827" stroke-width="2" marker-end="url(#arrow)" />
    <line x1="50" y1="350" x2="50" y2="10" stroke="#111827" stroke-width="2" marker-end="url(#arrow)" />
    
    <!-- Axis Labels -->
    <text x="350" y="385" font-size="14" font-weight="bold" text-anchor="middle" fill="#111827">Time (minutes)</text>
    <text x="25" y="180" font-size="14" font-weight="bold" text-anchor="middle" fill="#111827" transform="rotate(-90 25,180)">Temperature (°C)</text>
    
    <!-- Ticks & Values (X) -->
    <g font-size="12" fill="#4b5563" text-anchor="middle">
        <text x="50" y="365">0</text>
        <text x="110" y="365">1</text>
        <text x="170" y="365">2</text>
        <text x="230" y="365">3</text>
        <text x="290" y="365">4 (Mix)</text>
        <text x="350" y="365">5</text>
        <text x="410" y="365">6</text>
        <text x="470" y="365">7</text>
        <text x="530" y="365">8</text>
        <text x="590" y="365">9</text>
        <text x="650" y="365">10</text>
    </g>
    
    <!-- Mixing vertical line -->
    <line x1="290" y1="20" x2="290" y2="350" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,5" />
    
    <!-- Initial Stable Line (solid back to t=0, extrapolated to t=4 in dash) -->
    <line x1="50" y1="280" x2="230" y2="280" stroke="#047857" stroke-width="2.5" />
    <line x1="230" y1="280" x2="290" y2="280" stroke="#047857" stroke-width="2.5" stroke-dasharray="5,4" />
    
    <!-- Cooling Line (solid from t=5, extrapolated back to t=4 in dash) -->
    <!-- Extrapolated to exactly Min 4 at y=40 -->
    <!-- Cools through (350, 80), (410, 120), (470, 160) -->
    <line x1="350" y1="80" x2="650" y2="280" stroke="#b91c1c" stroke-width="2.5" />
    <line x1="290" y1="40" x2="350" y2="80" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="5,4" />
    
    <!-- Initial Temperature points -->
    <g fill="#10b981" stroke="#064e3b" stroke-width="1">
        <circle cx="50" cy="280" r="4" />
        <circle cx="110" cy="280" r="4" />
        <circle cx="170" cy="280" r="4" />
        <circle cx="230" cy="280" r="4" />
    </g>
    
    <!-- Cooling points -->
    <g fill="#ef4444" stroke="#7f1d1d" stroke-width="1">
        <circle cx="350" cy="80" r="4" />
        <circle cx="410" cy="120" r="4" />
        <circle cx="470" cy="160" r="4" />
        <circle cx="530" cy="200" r="4" />
        <circle cx="590" cy="240" r="4" />
        <circle cx="650" cy="280" r="4" />
    </g>
    
    <!-- Extrapolated Points at t=4 -->
    <circle cx="290" cy="280" r="4" fill="none" stroke="#047857" stroke-width="2" />
    <circle cx="290" cy="40" r="4" fill="none" stroke="#b91c1c" stroke-width="2" />
    
    <!-- True Delta T Arrow -->
    <line x1="290" y1="280" x2="290" y2="40" stroke="#2563eb" stroke-width="2.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    
    <!-- Labels & Callouts -->
    <rect x="75" y="300" width="145" height="35" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="147.5" y="322" font-size="12" fill="#065f46" text-anchor="middle">Initial stable temp</text>
    
    <rect x="420" y="45" width="160" height="35" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
    <text x="500" y="67" font-size="12" fill="#991b1b" text-anchor="middle">Cooling due to heat loss</text>

    <rect x="80" y="25" width="180" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
    <text x="170" y="43" font-size="12" fill="#1e40af" text-anchor="middle">Theoretical max temp if</text>
    <text x="170" y="58" font-size="12" fill="#1e40af" text-anchor="middle">no heat was lost instantly</text>
    <line x1="260" y1="40" x2="280" y2="40" stroke="#3b82f6" stroke-width="1" />

    <text x="310" y="165" font-size="20" font-weight="bold" fill="#1e40af">True ΔT</text>
</svg>`,
                caption: 'Cooling curve extrapolation graph to find the true temperature change (ΔT) by accounting for heat loss.'
            }
        },
        {
            id: 'svg-cooling-curve',
            type: 'svg',
            data: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 400" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Background Grid -->
    <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" stroke-width="0.5"/>
        </pattern>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#1e40af" />
        </marker>
    </defs>
    <rect x="50" y="20" width="600" height="330" fill="url(#grid)" />
    
    <!-- Axes -->
    <line x1="50" y1="350" x2="670" y2="350" stroke="#111827" stroke-width="2" marker-end="url(#arrow)" />
    <line x1="50" y1="350" x2="50" y2="10" stroke="#111827" stroke-width="2" marker-end="url(#arrow)" />
    
    <!-- Axis Labels -->
    <text x="350" y="385" font-size="14" font-weight="bold" text-anchor="middle" fill="#111827">Time (minutes)</text>
    <text x="25" y="180" font-size="14" font-weight="bold" text-anchor="middle" fill="#111827" transform="rotate(-90 25,180)">Temperature (°C)</text>
    
    <!-- Ticks & Values (X) -->
    <g font-size="12" fill="#4b5563" text-anchor="middle">
        <text x="50" y="365">0</text>
        <text x="110" y="365">1</text>
        <text x="170" y="365">2</text>
        <text x="230" y="365">3</text>
        <text x="290" y="365">4 (Mix)</text>
        <text x="350" y="365">5</text>
        <text x="410" y="365">6</text>
        <text x="470" y="365">7</text>
        <text x="530" y="365">8</text>
        <text x="590" y="365">9</text>
        <text x="650" y="365">10</text>
    </g>
    
    <!-- Mixing vertical line -->
    <line x1="290" y1="20" x2="290" y2="350" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5,5" />
    
    <!-- Initial Stable Line (solid back to t=0, extrapolated to t=4 in dash) -->
    <line x1="50" y1="280" x2="230" y2="280" stroke="#047857" stroke-width="2.5" />
    <line x1="230" y1="280" x2="290" y2="280" stroke="#047857" stroke-width="2.5" stroke-dasharray="5,4" />
    
    <!-- Cooling Line (solid from t=5, extrapolated back to t=4 in dash) -->
    <!-- Extrapolated to exactly Min 4 at y=40 -->
    <!-- Cools through (350, 80), (410, 120), (470, 160) -->
    <line x1="350" y1="80" x2="650" y2="280" stroke="#b91c1c" stroke-width="2.5" />
    <line x1="290" y1="40" x2="350" y2="80" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="5,4" />
    
    <!-- Initial Temperature points -->
    <g fill="#10b981" stroke="#064e3b" stroke-width="1">
        <circle cx="50" cy="280" r="4" />
        <circle cx="110" cy="280" r="4" />
        <circle cx="170" cy="280" r="4" />
        <circle cx="230" cy="280" r="4" />
    </g>
    
    <!-- Cooling points -->
    <g fill="#ef4444" stroke="#7f1d1d" stroke-width="1">
        <circle cx="350" cy="80" r="4" />
        <circle cx="410" cy="120" r="4" />
        <circle cx="470" cy="160" r="4" />
        <circle cx="530" cy="200" r="4" />
        <circle cx="590" cy="240" r="4" />
        <circle cx="650" cy="280" r="4" />
    </g>
    
    <!-- Extrapolated Points at t=4 -->
    <circle cx="290" cy="280" r="4" fill="none" stroke="#047857" stroke-width="2" />
    <circle cx="290" cy="40" r="4" fill="none" stroke="#b91c1c" stroke-width="2" />
    
    <!-- True Delta T Arrow -->
    <line x1="290" y1="280" x2="290" y2="40" stroke="#2563eb" stroke-width="2.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    
    <!-- Labels & Callouts -->
    <rect x="75" y="300" width="145" height="35" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1"/>
    <text x="147.5" y="322" font-size="12" fill="#065f46" text-anchor="middle">Initial stable temp</text>
    
    <rect x="420" y="45" width="160" height="35" rx="4" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
    <text x="500" y="67" font-size="12" fill="#991b1b" text-anchor="middle">Cooling due to heat loss</text>

    <rect x="80" y="25" width="180" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
    <text x="170" y="43" font-size="12" fill="#1e40af" text-anchor="middle">Theoretical max temp if</text>
    <text x="170" y="58" font-size="12" fill="#1e40af" text-anchor="middle">no heat was lost instantly</text>
    <line x1="260" y1="40" x2="280" y2="40" stroke="#3b82f6" stroke-width="1" />

    <text x="310" y="165" font-size="20" font-weight="bold" fill="#1e40af">True ΔT</text>
</svg>`,
                caption: 'Cooling curve extrapolation graph to find the true temperature change (ΔT) by accounting for heat loss.'
            }
        },

    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-formation', prompt: 'Define standard enthalpy of formation (ΔfH⦵). What is the value for an element in its standard state?' },
            { id: 'c2', blockId: 'callout-formation', prompt: 'Write the equation, with state symbols, for the standard enthalpy of formation of methanol (CH₃OH(l)).' },
            { id: 'c3', blockId: 'callout-combustion', prompt: 'Define standard enthalpy of combustion (ΔcH⦵). Write the equation for the standard combustion of carbon.' },
            { id: 'c4', blockId: 'callout-neut', prompt: 'Define standard enthalpy of neutralization. Why is the value roughly the same (–57 kJ/mol) for any strong acid reacting with any strong alkali?' },
            { id: 'c5', blockId: 'callout-atom', prompt: 'Define standard enthalpy of atomization. Write the equation for atomizing chlorine.' },
            { id: 'c6', blockId: 'callout-qmc', prompt: 'State the equation for calculating heat energy transferred (q). What does the m represent when reacting two aqueous solutions?' },
            { id: 'c7', blockId: 'list-cooling', prompt: 'Why do we extrapolate a cooling curve graph back to the point of mixing, instead of just taking the highest temperature reached?' }
        ],
        summaryText: 'Standard enthalpy definitions specify 1 mole. Formation: 1 mole compound from elements. Combustion: 1 mole substance burned in O₂. Neutralization: formation of 1 mole H₂O. Atomization: formation of 1 mole gaseous atoms. q=mcΔT calculates heat energy (J). Extrapolating a Temperature-Time graph to the mixing point accounts for heat lost to surroundings.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_6_3;
