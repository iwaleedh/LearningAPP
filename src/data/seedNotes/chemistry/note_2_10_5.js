/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 5
 * "Oxidation of alcohols"
 * Source: Pearson Edexcel IAL Chemistry — Section 10C.2
 */
export const note_chemistry_2_10_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the oxidation reactions of primary, secondary, and tertiary alcohols using acidified potassium dichromate(VI), and use the triiodomethane (iodoform) reaction to identify the CH₃CH(OH)– group.' },
            terms: []
        },
        {
            id: 'h-reagent',
            type: 'heading',
            data: { text: 'The Oxidising Agent', level: 2 },
            terms: []
        },
        {
            id: 'callout-reagent',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Acidified Potassium Dichromate(VI)',
                text: 'The standard oxidising agent for alcohols is <strong>acidified potassium dichromate(VI)</strong> (K₂Cr₂O₇ + dilute H₂SO₄).<br/>When it oxidises an alcohol, the dichromate(VI) ion (Cr₂O₇²⁻) is reduced to the chromium(III) ion (Cr³⁺).<br/><br/><strong>Colour change:</strong> ORANGE to GREEN.'
            },
            terms: ['Potassium dichromate(VI)']
        },
        {
            id: 'callout-cp7',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Core Practical 7: Oxidation of Propan-1-ol',
                text: '<strong>To produce Propanal (Aldehyde):</strong> Gently heat propan-1-ol with acidified K₂Cr₂O₇ using <strong>simple distillation</strong> apparatus. The propanal boils off as soon as it forms, preventing further oxidation.<br/><strong>To produce Propanoic Acid (Carboxylic Acid):</strong> Heat propan-1-ol with excess acidified K₂Cr₂O₇ under <strong>reflux</strong> for a prolonged period, then distil the product.<br/><br/>In both cases, the orange Cr(VI) ions are reduced to green Cr³⁺ ions as the alcohol is oxidised.'
            },
            terms: []
        },
        {
            id: 'svg-apparatus',
            type: 'svg',
            data: {
                title: 'Distillation vs Reflux Apparatus',
                svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="flask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="product" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--color-success)" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="var(--color-success)" stop-opacity="0.4"/>
    </linearGradient>
    <marker id="arrow-sv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
    </marker>
    <marker id="arrow-sv-down" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-success)" />
    </marker>
  </defs>
  <g transform="translate(30, 40)">
    <text x="100" y="-10" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">Distillation (Partial)</text>
    <path d="M 40 180 Q 40 220 70 220 Q 100 220 100 180 L 80 130 L 60 130 Z" fill="url(#flask)" stroke="var(--color-text)" stroke-width="2" />
    <rect x="65" y="100" width="10" height="30" fill="none" stroke="var(--color-text)" stroke-width="2" />
    <path d="M 75 100 L 75 70 L 120 70 L 120 90 L 85 90 L 85 100 Z" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="70" y1="70" x2="70" y2="40" stroke="var(--color-text-secondary)" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(120, 70) rotate(20)">
      <rect x="0" y="0" width="120" height="20" fill="none" stroke="var(--color-primary)" stroke-width="2" />
      <rect x="10" y="-5" width="100" height="30" fill="#ccf" opacity="0.3" stroke="var(--color-primary)" stroke-width="1" />
      <text x="60" y="14" font-family="Inter, sans-serif" font-size="10" fill="var(--color-primary)" text-anchor="middle">Water in/out</text>
    </g>
    <path d="M 230 180 Q 230 220 260 220 Q 290 220 290 180 L 270 140 L 250 140 Z" fill="url(#product)" stroke="var(--color-text)" stroke-width="2" />
    <text x="260" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-success)" text-anchor="middle">Aldehyde</text>
    <text x="70" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-accent)" text-anchor="middle">1° Alcohol + [O]</text>
  </g>
  <line x1="330" y1="20" x2="330" y2="280" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4" />
  <g transform="translate(370, 40)">
    <text x="100" y="-10" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">Reflux (Full)</text>
    <path d="M 70 180 Q 70 220 100 220 Q 130 220 130 180 L 110 130 L 90 130 Z" fill="url(#flask)" stroke="var(--color-text)" stroke-width="2" />
    <text x="100" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-accent)" text-anchor="middle">1° Alcohol + Excess [O]</text>
    <text x="100" y="260" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-text)" text-anchor="middle">→ Carboxylic Acid</text>
    <rect x="90" y="20" width="20" height="110" fill="none" stroke="var(--color-primary)" stroke-width="2" />
    <rect x="85" y="30" width="30" height="90" fill="#ccf" opacity="0.3" stroke="var(--color-primary)" stroke-width="1" />
    <path d="M 95 120 L 95 40" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#arrow-sv)" />
    <path d="M 105 40 L 105 120" stroke="var(--color-success)" stroke-width="2" marker-end="url(#arrow-sv-down)" />
    <text x="145" y="80" font-family="Inter, sans-serif" font-size="12" fill="var(--color-text-secondary)">Vapors rise &amp;</text>
    <text x="145" y="100" font-family="Inter, sans-serif" font-size="12" fill="var(--color-text-secondary)">condense down</text>
  </g>
</svg>`,
                caption: 'Distillation allows the volatile aldehyde to escape before it oxidises further. Heating under reflux traps all vapours, forcing the reaction to go to completion to form a carboxylic acid.'
            }
        },
        {
            id: 'h-oxidation',
            type: 'heading',
            data: { text: 'Oxidation Products', level: 2 },
            terms: []
        },
        {
            id: 'table-oxidation',
            type: 'comparisonTable',
            data: {
                caption: 'Products of Alcohol Oxidation',
                headers: ['Alcohol Type', 'Reaction Conditions', 'Product', 'Observation'],
                rows: [
                    ['Primary (1°)', 'Gentle heating with DISTILLATION equipment', '<strong>Aldehyde</strong>', 'Orange to Green'],
                    ['Primary (1°)', 'Heating strongly under REFLUX with excess oxidant', '<strong>Carboxylic Acid</strong>', 'Orange to Green'],
                    ['Secondary (2°)', 'Heating under REFLUX', '<strong>Ketone</strong>', 'Orange to Green'],
                    ['Tertiary (3°)', 'Any conditions', 'NO REACTION', 'Reaction mixture stays ORANGE (they cannot be oxidised because there is no C-H bond to break on the alpha-carbon)']
                ]
            },
            terms: ['Aldehyde', 'Ketone', 'Carboxylic acid']
        },
        {
            id: 'callout-benedicts',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Testing between Aldehydes and Ketones',
                text: 'Only <strong>aldehydes</strong> can be further oxidised to carboxylic acids. Ketones cannot. Two distinct chemical tests exploit this:<br/>1. <strong>Benedict\'s/Fehling\'s Solution:</strong> Add and heat. Aldehydes turn the blue solution into a <strong>brick-red precipitate</strong>. Ketones remain blue.<br/>2. <strong>Tollens\' Reagent:</strong> Add and warm. Aldehydes create a <strong>silver mirror</strong> on the wall of the test tube. Ketones do nothing.'
            },
            terms: ['Benedict\'s solution', 'Fehling\'s solution', 'Tollens\' reagent']
        },
        {
            id: 'h-iodoform',
            type: 'heading',
            data: { text: 'The Triiodomethane (Iodoform) Reaction', level: 2 },
            terms: []
        },
        {
            id: 'callout-iodoform',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Testing for the CH₃CH(OH)– Group',
                text: 'The triiodomethane (or iodoform) reaction is a specific test used to identify the presence of a <strong>CH₃CH(OH)–</strong> group in an alcohol.<br/><br/><strong>Reagents:</strong> Iodine (I₂) and sodium hydroxide (NaOH), warmed gently.<br/><strong>Positive Result:</strong> A <strong>pale yellow precipitate</strong> of triiodomethane (CHI₃), which has a distinct "medical" or antiseptic smell.'
            },
            terms: ['Triiodomethane', 'Iodoform']
        },
        {
            id: 'list-iodoform-alcohols',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Primary alcohols:</strong> Only <strong>ethanol</strong> (CH₃CH₂OH) gives a positive result.',
                    '<strong>Secondary alcohols:</strong> Any secondary alcohol where the -OH group is on the second carbon gives a positive result (e.g., propan-2-ol, butan-2-ol).',
                    '<strong>Tertiary alcohols:</strong> <strong>No</strong> tertiary alcohols give a positive result.',
                    '<strong>The Mechanism:</strong> The iodine and sodium hydroxide first act as an oxidising agent, converting the alcohol into a methyl ketone CH₃CO– (or ethanal). This carbonyl then reacts further to form CHI₃.'
                ]
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-reagent', prompt: 'State the reagent used to oxidise alcohols, and the expected colour change if oxidation is successful.' },
            { id: 'c-cp7', blockId: 'callout-cp7', prompt: 'In Core Practical 7, what apparatus setup is used to oxidise propan-1-ol to propanal, and why?' },
            { id: 'c-cp7-2', blockId: 'callout-cp7', prompt: 'In Core Practical 7, what apparatus setup is used to oxidise propan-1-ol fully to propanoic acid?' },
            { id: 'c2', blockId: 'table-oxidation', prompt: 'If you want to produce an aldehyde from a primary alcohol, what specific experimental conditions must you use, and why?' },
            { id: 'c3', blockId: 'table-oxidation', prompt: 'What is the product when a secondary alcohol is heated under reflux with acidified potassium dichromate(VI)?' },
            { id: 'c4', blockId: 'table-oxidation', prompt: 'Explain structurally why tertiary alcohols cannot be oxidised by acidified potassium dichromate(VI).' },
            { id: 'c5', blockId: 'callout-benedicts', prompt: 'Describe a chemical test to distinguish between propanal (an aldehyde) and propanone (a ketone), stating the reagent and observations.' },
            { id: 'c-iodoform-1', blockId: 'callout-iodoform', prompt: 'What specific functional group does the triiodomethane (iodoform) reaction test for in alcohols? State the reagents and positive observation.' },
            { id: 'c-iodoform-2', blockId: 'list-iodoform-alcohols', prompt: 'Ethanol is the only primary alcohol to give a positive iodoform test. Which tyoe of secondary alcohols give a positive result?' }
        ],
        summaryText: "Core Practical 7: Oxidation of propan-1-ol. Alcohols are oxidised using acidified potassium dichromate(VI), changing colour from ORANGE (Cr VI) to GREEN (Cr III). Primary alcohols oxidise to aldehydes (using distillation to boil it off immediately) or to carboxylic acids (heating under reflux with excess). Secondary alcohols oxidise to ketones (under reflux). Tertiary alcohols do NOT oxidise. Aldehydes can be distinguished from ketones using Benedict's (blue to brick-red ppt) or Tollens' reagent (silver mirror). The triiodomethane (iodoform) reaction (I₂ + NaOH) produces a pale yellow ppt of CHI₃ with ethanol and secondary alcohols with a methyl group.",
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_5;
