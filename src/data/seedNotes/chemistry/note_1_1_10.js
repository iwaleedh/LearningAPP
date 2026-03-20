/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 10
 * "The Ideal Gas Equation"
 * Source: Pearson Edexcel IAL Chemistry — Section 1D.2
 */
export const note_chemistry_1_1_10 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use the ideal gas equation pV = nRT to find the amount of substance in moles or to calculate unknown state variables (pressure, volume, temperature).' },
            terms: []
        },
        {
            id: 'h-kt-states',
            type: 'heading',
            data: { text: 'Kinetic Theory: States of Matter', level: 2 },
            terms: []
        },
        {
            id: 'svg-particle-states',
            type: 'svg',
            data: {
                svg: '<svg viewBox="0 0 500 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><defs><marker id="arr-g" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#7c3aed"/></marker></defs><rect x="5" y="5" width="150" height="135" rx="6" fill="#1c3a64" stroke="#93c5fd" stroke-width="1.5"/><circle cx="29" cy="29" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="54" cy="29" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="79" cy="29" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="104" cy="29" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="129" cy="29" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="29" cy="55" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="54" cy="55" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="79" cy="55" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="104" cy="55" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="129" cy="55" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="29" cy="80" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="54" cy="80" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="79" cy="80" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="104" cy="80" r="11" fill="#3b82f6" opacity="0.85"/><circle cx="129" cy="80" r="11" fill="#3b82f6" opacity="0.85"/><text x="80" y="112" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="12">SOLID</text><text x="80" y="128" text-anchor="middle" fill="#6b7280" font-size="10">Regular lattice · vibrate only</text><rect x="175" y="5" width="150" height="135" rx="6" fill="#0a2e1a" stroke="#86efac" stroke-width="1.5"/><circle cx="207" cy="27" r="10" fill="#16a34a" opacity="0.8"/><circle cx="231" cy="22" r="10" fill="#16a34a" opacity="0.8"/><circle cx="255" cy="28" r="10" fill="#16a34a" opacity="0.8"/><circle cx="280" cy="24" r="10" fill="#16a34a" opacity="0.8"/><circle cx="200" cy="51" r="10" fill="#16a34a" opacity="0.8"/><circle cx="225" cy="49" r="10" fill="#16a34a" opacity="0.8"/><circle cx="250" cy="53" r="10" fill="#16a34a" opacity="0.8"/><circle cx="274" cy="47" r="10" fill="#16a34a" opacity="0.8"/><circle cx="212" cy="74" r="10" fill="#16a34a" opacity="0.8"/><circle cx="238" cy="72" r="10" fill="#16a34a" opacity="0.8"/><circle cx="262" cy="76" r="10" fill="#16a34a" opacity="0.8"/><circle cx="285" cy="68" r="10" fill="#16a34a" opacity="0.8"/><text x="250" y="112" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">LIQUID</text><text x="250" y="128" text-anchor="middle" fill="#6b7280" font-size="10">Close but random · flow freely</text><rect x="345" y="5" width="150" height="135" rx="6" fill="#2d1b69" stroke="#d8b4fe" stroke-width="1.5"/><circle cx="375" cy="30" r="10" fill="#7c3aed" opacity="0.8"/><line x1="383" y1="22" x2="402" y2="13" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-g)"/><circle cx="460" cy="40" r="10" fill="#7c3aed" opacity="0.8"/><line x1="452" y1="33" x2="435" y2="20" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-g)"/><circle cx="400" cy="72" r="10" fill="#7c3aed" opacity="0.8"/><line x1="408" y1="65" x2="425" y2="55" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-g)"/><circle cx="475" cy="78" r="10" fill="#7c3aed" opacity="0.8"/><line x1="467" y1="72" x2="456" y2="58" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-g)"/><circle cx="358" cy="85" r="10" fill="#7c3aed" opacity="0.8"/><line x1="358" y1="75" x2="353" y2="58" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-g)"/><text x="420" y="112" text-anchor="middle" fill="#6d28d9" font-weight="bold" font-size="12">GAS</text><text x="420" y="128" text-anchor="middle" fill="#6b7280" font-size="10">Far apart · rapid random motion</text></svg>',
                caption: 'Particle arrangements in the three states of matter. At atmospheric pressure, gas particles are approximately 10× further apart than their own diameter.'
            },
            terms: []
        },
        {
            id: 'list-states',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Solid</strong>: particles touching; held in fixed positions by strong forces (ionic, covalent, metallic, or van der Waals); may be crystalline (regular lattice) or amorphous (random); only vibrate — cannot change position',
                    '<strong>Liquid</strong>: particles mainly touching but with some gaps allowing movement; forces still act but insufficient to maintain fixed positions; particles arranged randomly and can flow; density slightly lower than solid (exception: ice floats — solid water is less dense than liquid water)',
                    '<strong>Gas</strong>: particles far apart (∼10× their own diameter at atmospheric pressure); attractive forces between particles entirely negligible; move continuously in random straight lines at high speed'
                ]
            },
            terms: []
        },
        {
            id: 'h-changes-state',
            type: 'heading',
            data: { text: 'Changes of State', level: 3 },
            terms: []
        },
        {
            id: 'list-changes-state',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Melting</strong> (solid → liquid): heat increases vibration until particles break free of fixed positions; <em>enthalpy of fusion</em> = energy to convert 1 mol solid → liquid at its melting point',
                    '<strong>Boiling</strong> (liquid → gas): further energy until ALL intermolecular attractions break; <em>enthalpy of vaporisation</em> = energy to convert 1 mol liquid → gas; bubbles form throughout the liquid',
                    '<strong>Evaporation</strong>: only surface particles with above-average kinetic energy escape at any temperature (unlike boiling); causes cooling as the highest-energy particles leave',
                    '<strong>Condensation</strong> (gas → liquid) and <strong>freezing</strong> (liquid → solid): forces form → energy released',
                    '<strong>Sublimation</strong>: solid passes directly to gas with no liquid stage (e.g. iodine, dry ice/CO₂ at atmospheric pressure)',
                    '<strong>Key rule</strong>: breaking bonds/intermolecular forces requires energy input; forming them releases energy'
                ]
            },
            terms: []
        },
        {
            id: 'callout-svp',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Saturated Vapour Pressure (SVP)',
                text: 'In a <strong>sealed container</strong>, evaporated vapour cannot escape and builds up above the liquid. Vapour molecules returning to the liquid surface cause condensation.<br/><br/>At <strong>dynamic equilibrium</strong>: rate of evaporation = rate of condensation → constant vapour pressure.<br/><br/>The pressure of the vapour at this equilibrium is the <em>saturated vapour pressure</em> (SVP). SVP increases with temperature because more particles have sufficient energy to escape.'
            },
            terms: []
        },
        {
            id: 'h-equation',
            type: 'heading',
            data: { text: 'The Ideal Gas Equation', level: 2 },
            terms: []
        },
        {
            id: 'list-equation-intro',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'The ideal gas equation <strong>pV = nRT</strong> relates pressure, volume, temperature, and amount of substance for any ideal gas.',
                    'It applies to gases and to <em>volatile liquids</em> above their boiling temperature.',
                    '<strong>SI units are mandatory</strong> — using non-SI units without converting will give a wrong answer.',
                    'R = 8.31 J mol⁻¹ K⁻¹ is the universal gas constant, given on the Edexcel data sheet; do not memorise the value.',
                    'All four variables (p, V, T, n) can be found if three are known by rearranging the equation.'
                ]
            },
            terms: ['Ideal gas']
        },
        {
            id: 'h-assumptions',
            type: 'heading',
            data: { text: 'Kinetic Theory Assumptions for an Ideal Gas', level: 2 },
            terms: []
        },
        {
            id: 'table-assumptions',
            type: 'comparisonTable',
            data: {
                caption: 'Assumptions of an Ideal Gas',
                headers: ['Assumption', 'Description'],
                rows: [
                    ['<strong>Constant random motion</strong>', 'Particles move continuously in random straight lines, changing direction only on collision.'],
                    ['<strong>Rigid spheres</strong>', 'Gas molecules behave as perfectly hard, rigid spheres — no deformation on collision.'],
                    ['<strong>Pressure from wall collisions</strong>', 'Gas pressure arises from the force exerted by particles colliding with the container walls.'],
                    ['<strong>Elastic collisions</strong>', 'All collisions are perfectly elastic — no net kinetic energy is lost when particles collide with each other or the walls.'],
                    ['<strong>Temperature ∝ average KE</strong>', 'The absolute temperature (in K) is directly proportional to the average kinetic energy of the gas molecules.'],
                    ['<strong>No intermolecular forces</strong>', 'Gas particles exert no attractive or repulsive forces on one another (intermolecular forces are entirely negligible).'],
                    ['<strong>Negligible molecular volume</strong>', 'The volume of the molecules is entirely negligible compared to the volume of the container.']
                ]
            },
            terms: ['Elastic collision']
        },
        {
            id: 'callout-real-gases',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'When do real gases deviate from ideal behaviour?',
                text: 'Real gases behave most ideally at <strong>high temperatures</strong> and <strong>low pressures</strong>.<br/><br/>They deviate from ideal behaviour at:<br/>• <strong>High Pressure:</strong> The particles are forced close together, so their actual volume is no longer negligible.<br/>• <strong>Low Temperature:</strong> Particles move slowly enough that intermolecular forces (attractions) become significant.'
            },
            terms: []
        },
        {
            id: 'callout-z-factor',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Compression Factor Z — Measuring Deviation from Ideal Behaviour',
                text: 'The <strong>compression factor</strong> Z = pV / nRT measures how far a real gas deviates from ideal:<br/><br/>• <strong>Ideal gas</strong>: Z = 1 at all conditions.<br/>• <strong>Z &lt; 1</strong> (low temperature, moderate pressure): intermolecular <em>attractions</em> pull molecules inward as they approach the wall → they strike the wall with less force → measured pressure is <strong>lower</strong> than the ideal prediction. Effect is worst when molecules are slow (low T) and close together (moderate P).<br/>• <strong>Z &gt; 1</strong> (very high pressure): molecules occupy significant real volume → free space is <em>less</em> than the total container volume → molecules are more crowded than the model assumes → Z calculated with total V is artificially high.<br/><br/>Most ideal gas: <strong>helium</strong> (smallest atom, weakest van der Waals forces), then hydrogen. Larger or polar molecules deviate most.'
            },
            terms: []
        },
        {
            id: 'callout-vdw',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Van der Waals Equation for Real Gases',
                text: '<strong>(P + an²/V²)(V − nb) = nRT</strong><br/><br/>• <strong>a</strong>: pressure correction — compensates for intermolecular attractions reducing the effective pressure (an²/V² is added back to the measured pressure).<br/>• <strong>b</strong>: volume correction — nb is the volume actually occupied by the molecules; V − nb gives the true free volume available for movement.<br/>• Constants a and b are unique to each gas → no universal values; the ideal gas equation is adequate for most gases at ordinary temperatures and pressures.'
            },
            terms: []
        },
        {
            id: 'table-real-molar-volumes',
            type: 'comparisonTable',
            data: {
                caption: 'Molar volumes of real gases at STP (0°C, 101 325 Pa) — ideal value = 22.4 dm³ mol⁻¹',
                headers: ['Gas', 'Molar volume (dm³ mol⁻¹)', 'Note'],
                rows: [
                    ['He', '22.4', 'Most ideal — weakest IMF'],
                    ['N₂', '22.4', 'Negligible deviation'],
                    ['O₂', '22.4', 'Negligible deviation'],
                    ['CH₄', '22.3', 'Very slight deviation'],
                    ['CO₂', '22.3', 'Very slight (larger, more polarisable)'],
                    ['C₂H₄', '22.2', 'Small deviation'],
                    ['NH₃', '22.1', 'Stronger H-bonding IMF'],
                    ['SO₂', '21.9', 'Largest — polar molecule, strong IMF']
                ]
            },
            terms: []
        },
        {
            id: 'callout-equation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Equation: pV = nRT',
                text: '• <strong>p</strong> = pressure in Pascals (Pa)<br/>• <strong>V</strong> = volume in cubic metres (m³)<br/>• <strong>n</strong> = amount of substance in moles (mol)<br/>• <strong>R</strong> = the gas constant (8.31 J mol⁻¹ K⁻¹)<br/>• <strong>T</strong> = temperature in Kelvin (K)'
            },
            terms: ['Pressure', 'Volume', 'Gas constant', 'Kelvin']
        },
        {
            id: 'callout-molar-volume',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Molar Volume of an Ideal Gas',
                text: 'Using pV = nRT with n = 1 mol:<br/><br/>• At <strong>STP</strong> (standard temperature and pressure: 0°C / 273 K, 1 atm / 101 325 Pa):<br/>&nbsp;&nbsp;V = (1 × 8.31 × 273) ÷ 101 325 = <strong>22.4 dm³ mol⁻¹</strong><br/><br/>• At <strong>RTP</strong> (room temperature and pressure: ~20°C / 293 K, 1 atm):<br/>&nbsp;&nbsp;V ≈ (1 × 8.31 × 293) ÷ 101 325 ≈ <strong>24.0 dm³ mol⁻¹</strong><br/><br/>These values apply exactly only for an ideal gas; real gases show small deviations (see table above).'
            },
            terms: []
        },
        {
            id: 'h-conversions',
            type: 'heading',
            data: { text: 'Crucial Unit Conversions', level: 2 },
            terms: []
        },
        {
            id: 'table-conversions',
            type: 'comparisonTable',
            data: {
                caption: 'Converting from common units to SI units for pV=nRT',
                headers: ['Variable', 'Given Unit', 'How to convert to SI unit'],
                rows: [
                    ['Pressure (p)', 'kilopascals (kPa)', 'Multiply by 1000 (× 10³) to get Pa'],
                    ['Volume (V)', 'cubic decimetres (dm³)', 'Divide by 1000 (× 10⁻³) to get m³'],
                    ['Volume (V)', 'cubic centimetres (cm³)', 'Divide by 1,000,000 (× 10⁻⁶) to get m³'],
                    ['Temperature (T)', 'degrees Celsius (°C)', 'Add 273 (+ 273) to get K']
                ]
            },
            terms: []
        },
        {
            id: 'callout-rearranging',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rearranging pV = nRT',
                text: 'Rearrange <strong>pV = nRT</strong> for any variable:<br/>• p = <span class="nb-frac"><span class="nb-num">nRT</span><span class="nb-den">V</span></span><br/>• V = <span class="nb-frac"><span class="nb-num">nRT</span><span class="nb-den">p</span></span><br/>• n = <span class="nb-frac"><span class="nb-num">pV</span><span class="nb-den">RT</span></span><br/>• T = <span class="nb-frac"><span class="nb-num">pV</span><span class="nb-den">nR</span></span>'
            },
            terms: []
        },
        {
            id: 'h-gas-laws',
            type: 'heading',
            data: { text: "Gas Laws: Boyle's, Charles' and Gay-Lussac's", level: 2 },
            terms: []
        },
        {
            id: 'table-gas-laws',
            type: 'comparisonTable',
            data: {
                caption: "Boyle's, Charles' and Gay-Lussac's Laws — all derived from pV = nRT",
                headers: ['Law', 'Statement', 'Mathematical form', 'Link to pV = nRT', 'Kinetic theory explanation'],
                rows: [
                    ["<strong>Boyle's Law</strong>", 'At constant temperature and fixed mass: volume is inversely proportional to pressure', 'pV = constant', 'pV = nRT; n, R, T all constant → pV = constant ✓', 'Halving the volume → particles hit the walls twice as often per second → pressure doubles'],
                    ["<strong>Charles' Law</strong>", 'At constant pressure and fixed mass: volume is directly proportional to kelvin temperature', 'V / T = constant (T in K)', 'Rearrange: V = (nR/p)T; n, R, p all constant → V ∝ T ✓', 'Heating → particles move faster → hit a moveable wall harder and more often → wall expands until pressure re-equalises with outside'],
                    ["<strong>Gay-Lussac's Law</strong>", 'At constant volume and fixed mass: pressure is directly proportional to kelvin temperature', 'p / T = constant (T in K)', 'Rearrange: p = (nR/V)T; n, R, V all constant → p ∝ T ✓', 'Heating → particles move faster → collide with the fixed walls more frequently and with greater force → pressure increases']
                ]
            },
            terms: []
        },
        {
            id: 'h-mr',
            type: 'heading',
            data: { text: 'Calculating Molar Mass (Mᵣ) from Gas Data', level: 2 },
            terms: []
        },
        {
            id: 'callout-mr-calc',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Finding the Molar Mass of a Volatile Liquid',
                text: 'Since n = m/Mᵣ, substitute into pV = nRT:<br/><br/>pV = <span class="nb-frac"><span class="nb-num">m × RT</span><span class="nb-den">Mᵣ</span></span><br/><br/>Rearranging for Mᵣ:<br/><br/><strong>Mᵣ = <span class="nb-frac"><span class="nb-num">m × RT</span><span class="nb-den">pV</span></span></strong><br/><br/><em>Method:</em> Convert all measurements to SI units (Pa, m³, K). Keep mass in grams. This formula is used to identify unknown gases or volatile liquids from gas-phase measurements.'
            },
            terms: []
        },
        {
            id: 'h-combined',
            type: 'heading',
            data: { text: 'The Combined Gas Law', level: 2 },
            terms: []
        },
        {
            id: 'callout-combined',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Changing Conditions at Constant Moles',
                text: 'When the <strong>amount of gas (n) stays constant</strong> but pressure, volume, and temperature change, n and R are both constant, giving the Combined Gas Law:<br/><br/><strong><span class="nb-frac"><span class="nb-num">p₁V₁</span><span class="nb-den">T₁</span></span> = <span class="nb-frac"><span class="nb-num">p₂V₂</span><span class="nb-den">T₂</span></span></strong><br/><br/>• <em>Units:</em> As long as the <strong>same units</strong> are used on both sides (e.g. both V in cm³, both p in kPa), SI units are not strictly required.<br/>• <strong>Temperature MUST always be in Kelvin</strong> — adding 273 to °C is mandatory no matter what.'
            },
            terms: ['Combined Gas Law']
        },
        {
            id: 'callout-mistakes',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes & Unit Conversion Checklist',
                text: 'Before substituting into <strong>pV = nRT</strong>, always verify:<br/>✓ Is <strong>T</strong> in <strong>Kelvin</strong>? (Add 273 to °C — most common error)<br/>✓ Is <strong>V</strong> in <strong>m³</strong>? (cm³ ÷ 10⁶; dm³ ÷ 10³)<br/>✓ Is <strong>p</strong> in <strong>Pa</strong>? (kPa × 10³)<br/>✓ Have you used R = 8.31 J mol⁻¹ K⁻¹ (NOT 8.314 or other values)?'
            },
            terms: []
        },
        {
            id: 'h-practice',
            type: 'heading',
            data: { text: 'Practice Questions', level: 2 },
            terms: []
        },
        {
            id: 'callout-worked-basic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q1: Basic Calculation',
                text: '<strong>Question:</strong> Find the volume in cm³ of 0.50 mol of CO₂ gas at 100 kPa and 25°C.<br/><br/><strong>Step 1 — Convert units:</strong><br/>p = 100 × 10³ = 100,000 Pa<br/>T = 25 + 273 = 298 K<br/>n = 0.50 mol<br/><br/><strong>Step 2 — Calculate:</strong><br/>V = <span class="nb-frac"><span class="nb-num">nRT</span><span class="nb-den">p</span></span> = <span class="nb-frac"><span class="nb-num">0.50 × 8.31 × 298</span><span class="nb-den">100,000</span></span> = 0.01238 m³<br/><br/><strong>Step 3 — Convert back to cm³:</strong><br/>V = 0.01238 × 10⁶ = <strong>12,380 cm³</strong>'
            },
            terms: []
        },
        {
            id: 'callout-worked-mr',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q2: Molar Mass Calculation',
                text: '<strong>Question:</strong> 0.200 g of an unknown gas occupies 80.0 cm³ at 100 kPa and 298 K. Calculate its Mᵣ.<br/><br/><strong>Step 1 — Convert units:</strong><br/>p = 100,000 Pa<br/>V = 80.0 ÷ 10⁶ = 8.00 × 10⁻⁵ m³<br/>T = 298 K<br/>m = 0.200 g<br/><br/><strong>Step 2 — Find moles:</strong><br/>n = <span class="nb-frac"><span class="nb-num">pV</span><span class="nb-den">RT</span></span> = <span class="nb-frac"><span class="nb-num">100,000 × 8.00 × 10⁻⁵</span><span class="nb-den">8.31 × 298</span></span> = <span class="nb-frac"><span class="nb-num">8.00</span><span class="nb-den">2476.4</span></span> = 3.23 × 10⁻³ mol<br/><br/><strong>Step 3 — Find Mᵣ:</strong><br/>Mᵣ = <span class="nb-frac"><span class="nb-num">m</span><span class="nb-den">n</span></span> = <span class="nb-frac"><span class="nb-num">0.200</span><span class="nb-den">3.23 × 10⁻³</span></span> = <strong>61.9 g mol⁻¹</strong>'
            },
            terms: []
        },
        {
            id: 'callout-worked-combined',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practice Q3: Combined Gas Law',
                text: '<strong>Question:</strong> A gas occupies 300 cm³ at 100 kPa and 27°C. What volume will it occupy at 150 kPa and 77°C?<br/><br/><strong>Step 1 — Convert temperatures to K:</strong><br/>T₁ = 27 + 273 = 300 K<br/>T₂ = 77 + 273 = 350 K<br/><br/><strong>Step 2 — Apply Combined Gas Law:</strong><br/><span class="nb-frac"><span class="nb-num">p₁V₁</span><span class="nb-den">T₁</span></span> = <span class="nb-frac"><span class="nb-num">p₂V₂</span><span class="nb-den">T₂</span></span><br/><br/><span class="nb-frac"><span class="nb-num">100 × 300</span><span class="nb-den">300</span></span> = <span class="nb-frac"><span class="nb-num">150 × V₂</span><span class="nb-den">350</span></span><br/><br/>100 = <span class="nb-frac"><span class="nb-num">150 × V₂</span><span class="nb-den">350</span></span><br/><br/>V₂ = <span class="nb-frac"><span class="nb-num">100 × 350</span><span class="nb-den">150</span></span> = <strong>233 cm³</strong>'
            },
            terms: []
        },
        {
            id: 'svg-gas-decision-tree',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><defs><marker id="gdt-arr" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><polygon points="0,0 8,3.5 0,7" fill="#2d2d72"/></marker></defs><text x="350" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">WHICH GAS VOLUME METHOD?</text><!-- Root question box --><rect x="220" y="44" width="260" height="52" rx="10" fill="rgba(99,102,241,0.25)" stroke="#818cf8" stroke-width="2"/><text x="350" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Need a gas volume?</text><text x="350" y="84" text-anchor="middle" font-size="10" fill="#2d2d72">Choose the right method below ↓</text><!-- Line from root down to diamond --><line x1="350" y1="96" x2="350" y2="128" stroke="#a5b4fc" stroke-width="1.5" marker-end="url(#gdt-arr)"/><!-- Diamond 1 --><polygon points="350,128 430,162 350,196 270,162" fill="rgba(251,146,60,0.2)" stroke="#fb923c" stroke-width="1.5"/><text x="350" y="157" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">At RTP?</text><text x="350" y="172" text-anchor="middle" font-size="9" fill="#532407">(~25°C, 101 kPa)</text><!-- YES branch LEFT --><line x1="270" y1="162" x2="140" y2="162" stroke="#34d399" stroke-width="1.5" marker-end="url(#gdt-arr)"/><text x="205" y="153" text-anchor="middle" font-size="9" fill="#34d399" font-weight="700">YES</text><!-- Branch 1 box --><rect x="18" y="136" width="122" height="108" rx="10" fill="rgba(16,185,129,0.18)" stroke="#34d399" stroke-width="1.5"/><text x="79" y="156" text-anchor="middle" font-size="9.5" fill="#065f46" font-weight="700">METHOD 1</text><text x="79" y="172" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">V = n × 24</text><text x="79" y="188" text-anchor="middle" font-size="8.5" fill="#065f46">dm³</text><text x="79" y="204" text-anchor="middle" font-size="8.5" fill="#065f46">or n × 24 000</text><text x="79" y="218" text-anchor="middle" font-size="8.5" fill="#065f46">cm³</text><text x="79" y="234" text-anchor="middle" font-size="7.5" fill="#065f46">Quick — no calculator</text><!-- NO branch RIGHT --><line x1="430" y1="162" x2="560" y2="162" stroke="#f87171" stroke-width="1.5" marker-end="url(#gdt-arr)"/><text x="495" y="153" text-anchor="middle" font-size="9" fill="#f87171" font-weight="700">NO</text><!-- Diamond 2 --><polygon points="560,162 634,196 560,228 486,196" fill="rgba(244,114,182,0.2)" stroke="#f472b6" stroke-width="1.5"/><text x="560" y="191" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">n fixed?</text><text x="560" y="206" text-anchor="middle" font-size="8" fill="#4a1040">(same amount of gas)</text><!-- YES from diamond 2 → branch 2 --><line x1="560" y1="228" x2="560" y2="276" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#gdt-arr)"/><text x="572" y="254" text-anchor="start" font-size="9" fill="#60a5fa" font-weight="700">YES</text><!-- Branch 2 box --><rect x="484" y="276" width="152" height="132" rx="10" fill="rgba(96,165,250,0.18)" stroke="#60a5fa" stroke-width="1.5"/><text x="560" y="296" text-anchor="middle" font-size="9.5" fill="#1250a0" font-weight="700">METHOD 2</text><text x="560" y="310" text-anchor="middle" font-size="10" font-weight="800" fill="#1e293b">p₁V₁/T₁ = p₂V₂/T₂</text><text x="560" y="325" text-anchor="middle" font-size="8.5" fill="#1250a0">Combined Gas Law</text><text x="560" y="342" text-anchor="middle" font-size="7.5" fill="#1e3a8a">T MUST be in Kelvin</text><text x="560" y="358" text-anchor="middle" font-size="7.5" fill="#1e3a8a">Units must match on both</text><text x="560" y="372" text-anchor="middle" font-size="7.5" fill="#1e3a8a">sides (no SI needed)</text><text x="560" y="390" text-anchor="middle" font-size="7.5" fill="#1e3a8a">Used when T or P changes</text><!-- NO from diamond 2 → branch 3 --><line x1="486" y1="196" x2="352" y2="280" stroke="#e879f9" stroke-width="1.5" marker-end="url(#gdt-arr)"/><text x="395" y="228" text-anchor="middle" font-size="9" fill="#e879f9" font-weight="700">NO (use pV=nRT)</text><!-- Branch 3 box --><rect x="170" y="280" width="176" height="136" rx="10" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1.5"/><text x="258" y="300" text-anchor="middle" font-size="9.5" fill="#4a1040" font-weight="700">METHOD 3</text><text x="258" y="316" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">pV = nRT</text><text x="258" y="332" text-anchor="middle" font-size="8" fill="#4a1040">Convert ALL to SI first:</text><text x="258" y="348" text-anchor="middle" font-size="8" fill="#4a1040">p → Pa (×1000 if kPa)</text><text x="258" y="364" text-anchor="middle" font-size="8" fill="#4a1040">V → m³ (÷10⁶ if cm³)</text><text x="258" y="380" text-anchor="middle" font-size="8" fill="#4a1040">T → K (+273 if °C)</text><text x="258" y="396" text-anchor="middle" font-size="8" fill="#4a1040">R = 8.31 J mol⁻¹ K⁻¹</text><text x="258" y="408" text-anchor="middle" font-size="7.5" fill="#2d1b69">Used for specific p,V,T data</text></svg>',
                caption: 'Gas Volume Decision Tree — 3 methods compared. Method 1 (RTP shortcut) is fastest. Method 2 (combined law) requires no SI conversions. Method 3 (pV=nRT) is the most general but needs all SI units.'
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-equation', prompt: 'State the ideal gas equation. What are the SI units for p, V, T and n?' },
            { id: 'c-assumptions', blockId: 'table-assumptions', prompt: 'State all seven kinetic theory assumptions for an ideal gas.' },
            { id: 'c-deviations', blockId: 'callout-z-factor', prompt: 'Define the compression factor Z. Why is Z < 1 at low temperatures and Z > 1 at very high pressures?' },
            { id: 'c-gas-laws', blockId: 'table-gas-laws', prompt: "State Boyle's Law and Charles' Law, including their mathematical forms and kinetic theory explanations." },
            { id: 'c-gaylussac', blockId: 'table-gas-laws', prompt: "State Gay-Lussac's Law. Write its mathematical form and explain using kinetic theory why pressure increases with temperature at constant volume." },
            { id: 'c-molar-vol', blockId: 'callout-molar-volume', prompt: 'What is the molar volume of an ideal gas at STP and at RTP? State the values and units.' },
            { id: 'c-mr', blockId: 'callout-mr-calc', prompt: 'State the formula used to calculate the molar mass (Mr) of an unknown gas from p, V, T, and mass data.' },
            { id: 'c-combined', blockId: 'callout-combined', prompt: 'State the Combined Gas Law equation. What temperature unit is required?' }
        ],
        summaryText: 'Ideal gas equation: pV = nRT with SI units (Pa, m³, K). Seven KT assumptions: constant random motion; rigid spheres; pressure from wall collisions; elastic collisions; T ∝ average KE; no IMF; negligible molecular volume. Real gases: Z = pV/nRT; Z < 1 at low T (IMF reduce effective pressure); Z > 1 at very high P (molecular volume significant). Van der Waals: (P + an²/V²)(V − nb) = nRT. Molar volume: 22.4 dm³ mol⁻¹ at STP (0°C, 1 atm); 24.0 dm³ mol⁻¹ at RTP (~20°C, 1 atm). Boyle\'s Law: pV = constant at fixed T and n. Charles\' Law: V ∝ T (K) at fixed p and n. Gay-Lussac\'s Law: p ∝ T (K) at fixed V and n. Mᵣ = (m × RT) / pV. Combined gas law: p₁V₁/T₁ = p₂V₂/T₂ (T must be in Kelvin). Conversions: +273 for °C→K; ×10³ for kPa→Pa; ÷10³ for dm³→m³; ÷10⁶ for cm³→m³.',
        ready: true
    },
    evidence: []
};
export default note_chemistry_1_1_10;
