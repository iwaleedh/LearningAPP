const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'data', 'seedNotes', 'business');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const notes = [
  {
    topic: 'Demand determinants',
    summary: 'Demand represents the quantity of a product consumers are willing and able to buy at various prices. Key determinants include price, income, prices of substitutes and complements, fashion and tastes, advertising, and demographics.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the concept of demand and explain its main determinants.' } },
      { id: 'h-1', type: 'heading', data: { text: 'What is Demand?', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'In economics and business, <strong>demand</strong> is the quantity of a good or service that consumers are willing and able to buy at a given price, in a given time period.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Effective Demand', text: 'Demand must be effective, meaning it is backed by the financial ability to pay. Desire without purchasing power does not constitute economic demand.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Determinants of Demand (Factors shifting the demand curve)', level: 2 } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Price:</strong> A change in price causes a movement along the demand curve, not a shift. Lower prices generally increase quantity demanded.' },
        { text: '<strong>Incomes:</strong> As incomes rise, demand for normal goods increases. Demand for inferior goods (like value brands) may fall as consumers switch to higher-quality substitutes.' },
        { text: '<strong>Prices of related goods:</strong> Price of substitutes (competing products) and complements (products used together).' },
        { text: '<strong>Changes in Tastes and Fashions:</strong> Consumer preferences driven by trends, media, or health awareness can drastically shift demand.' },
        { text: '<strong>Demographic Changes:</strong> An aging population or population growth affects demand for specific types of goods.' },
        { text: '<strong>Advertising and Branding:</strong> Successful marketing campaigns can increase brand loyalty and demand.' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'warning', title: 'Common Misconception', text: 'Do not confuse a change in price (causes a <strong>movement</strong> along the demand curve) with a change in other determinants (causes a <strong>shift</strong> of the entire demand curve).' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'Substitutes vs Complements',
        headers: ['Type of Good', 'Definition', 'Example effect on Demand'],
        rows: [
          ['Substitute', 'An alternative product', 'If price of Coca-Cola rises, demand for Pepsi increases.'],
          ['Complement', 'A product used alongside another', 'If price of printers falls, demand for ink cartridges increases.']
        ]
      }},
      { id: 's-1', type: 'summary', data: { text: 'Demand is determined by various factors beyond just price, including income, related goods, fashion, demographics, and advertising. Understanding these helps businesses forecast sales and plan strategies.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'c-1', prompt: 'Define effective demand.', answer: 'The willingness to buy a product backed by the <strong>ability to pay</strong> for it.' },
      { id: 'cue_2', blockId: 'h-2', prompt: 'Name 4 non-price determinants of demand.', answer: 'Income, prices of substitutes/complements, fashion/tastes, advertising, demographics.' },
      { id: 'cue_3', blockId: 't-1', prompt: 'How does a rise in the price of a substitute affect demand for a good?', answer: 'It causes an <strong>increase</strong> (outward shift) in the demand for the good.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'What is an inferior good?', answer: 'A good whose demand falls when consumer incomes rise (e.g., store-brand basics).' }
    ]`
  },
  {
    topic: 'Supply determinants',
    summary: 'Supply is the quantity of a product that producers are willing and able to offer at different prices. It is determined by costs of production, new technology, subsidies, taxes, external shocks, and the price of related goods.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the concept of supply and outline factors that cause supply curves to shift.' } },
      { id: 'h-1', type: 'heading', data: { text: 'What is Supply?', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Supply</strong> is the quantity of a good or service that a producer is willing and able to provide to the market at a given price, over a specific period.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Law of Supply', text: 'As price rises, the quantity supplied generally increases. This is because higher prices provide higher potential profit margins, incentivizing production.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Determinants of Supply', level: 2 } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Costs of Production:</strong> Increased costs (e.g., wage increases, raw material prices) reduce supply as profitability drops.' },
        { text: '<strong>New Technology:</strong> Technological advancements increase efficiency and lower unit costs, shifting supply outwards (to the right).' },
        { text: '<strong>Subsidies:</strong> Government grants to producers lower production costs, encouraging greater supply.' },
        { text: '<strong>Taxes (Indirect):</strong> Taxes like VAT increase production costs, leading to a decrease in supply (shift to the left).' },
        { text: '<strong>External Shocks:</strong> Uncontrollable events like natural disasters, extreme weather, or pandemics can severely restrict supply (especially agricultural goods).' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'worked', title: 'Example: Introduction of a Subsidy', text: 'If the government gives electric vehicle (EV) manufacturers a subsidy of £2,000 per car, the cost of producing each car falls. The supply curve for EVs will shift to the right, meaning more EVs are supplied at any given price.' } },
      { id: 's-1', type: 'summary', data: { text: 'Supply is mostly influenced by costs, taxation, and technology. Anything that makes production cheaper or more profitable will increase supply, whereas rising costs or negative external shocks will limit supply.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'c-1', prompt: 'State the Law of Supply.', answer: 'As price increases, the quantity supplied increases, ceteris paribus, due to higher profit incentives.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'How does a rise in indirect taxes affect supply?', answer: 'It increases production costs, thereby decreasing supply (shifting the curve to the left).' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'Why does new technology increase supply?', answer: 'It improves efficiency and lowers average costs of production, making it more profitable to produce more.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'Give an example of an external shock affecting supply.', answer: 'A severe drought destroying crop yields, or a factory fire.' }
    ]`
  },
  {
    topic: 'Demand and supply interaction',
    summary: 'The price of a product in a free market is established through the interaction of demand and supply, leading to a market equilibrium where quantity demanded equals quantity supplied.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Explain how demand and supply interact to determine the equilibrium price and quantity.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Market Equilibrium', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'In a free market, prices are determined by the interaction of millions of buyers (demand) and sellers (supply). The market achieves balance at a specific point known as <strong>market equilibrium</strong>.' } },
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Equilibrium Price (Market Clearing Price)', text: 'The point where the Demand curve and Supply curve intersect. At this price, the exact quantity consumers want to buy is equal to the quantity producers want to sell. There is no excess demand or excess supply.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Disequilibrium', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'When prices are not at the equilibrium level, market forces will naturally push the price back towards equilibrium.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Excess Supply (Surplus):</strong> Occurs when the current price is strictly above the equilibrium price. Sellers cannot sell all their goods, so they must drop prices to attract buyers.' },
        { text: '<strong>Excess Demand (Shortage):</strong> Occurs when the current price is below equilibrium. Consumers demand more than is available, leading to queues. Sellers realize they can raise prices.' }
      ]}},
      { id: 'c-2', type: 'callout', data: { style: 'tip', title: 'Invisible Hand', text: 'You can refer to Adam Smiths invisible hand: the self-regulating nature of the marketplace automatically clears gluts and shortages through price mechanism signals.' } },
      { id: 's-1', type: 'summary', data: { text: 'Prices are the result of supply and demand balancing. When there is a surplus, prices fall; when there is a shortage, prices rise, constantly steering the market towards equilibrium.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'c-1', prompt: 'What is equilibrium price?', answer: 'The price at which quantity demanded exactly equals quantity supplied, clearing the market.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'What happens in a market when price is set excessively high?', answer: 'Excess supply (a surplus) occurs, putting downward pressure on prices.' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'Define excess demand.', answer: 'When the quantity demanded exceeds the quantity supplied because the price is below equilibrium, leading to an eventual price rise.' },
      { id: 'cue_4', blockId: 'c-2', prompt: 'What mechanism clears excess supply in a free market?', answer: 'The price mechanism: producers lower prices to get rid of unsold stock, which simultaneously increases quantity demanded until equilibrium is restored.' }
    ]`
  },
  {
    topic: 'Market equilibrium changes',
    summary: 'Changes in the non-price determinants of either demand or supply will shift the curves, resulting in a newly established market equilibrium point with a different price and quantity.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Analyse the impacts of shifts in supply and demand on equilibrium price and quantity.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Shifting the Equilibrium', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'Whenever there is a shift in either the demand or supply curve, the old equilibrium is destroyed. A temporary state of disequilibrium occurs until a new equilibrium price and quantity are established.' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'Summary of Shifts',
        headers: ['Curve Shift', 'Effect on Price', 'Effect on Quantity'],
        rows: [
          ['Demand increases (shifts right)', 'Rises', 'Rises'],
          ['Demand decreases (shifts left)', 'Falls', 'Falls'],
          ['Supply increases (shifts right)', 'Falls', 'Rises'],
          ['Supply decreases (shifts left)', 'Rises', 'Falls']
        ]
      }},
      { id: 'h-2', type: 'heading', data: { text: 'Simultaneous Shifts', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Sometimes both supply and demand shift at the same time. The final effect on price or quantity depends on the relative magnitude of the shifts.' } },
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Scenario: Coffee Market', text: 'Demand for coffee rises due to a new health study (Demand shifts Right). At the same time, poor weather destroys coffee crops (Supply shifts Left). \\nResult: Price definitely drastically RISES. However, the final Quantity traded depends on which shift was larger (indeterminate without more data).' } },
      { id: 's-1', type: 'summary', data: { text: 'Understanding how external shocks and changing habits alter equilibrium allows businesses to foresee price changes and adjust their production and pricing strategies accordingly.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 't-1', prompt: 'If supply decreases (shifts left) while demand is constant, what happens to price and quantity?', answer: 'Price rises, Quantity falls.' },
      { id: 'cue_2', blockId: 't-1', prompt: 'If demand increases (shifts right) while supply is constant, what happens to price and quantity?', answer: 'Price rises, Quantity rises.' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'Why is the effect on quantity indeterminate if both supply and demand increase simultaneously?', answer: 'Because increased demand pushes quantity up, and increased supply pushes quantity up; without knowing exact shift sizes, price change is ambiguous, but quantity definitely rises.' },
      { id: 'cue_4', blockId: 's-1', prompt: 'If governments grant a subsidy to farmers, what is the effect on market equilibrium food prices?', answer: 'Supply shifts right; equilibrium price falls and equilibrium quantity rises.' }
    ]`
  },
  {
    topic: 'Demand-supply diagram analysis',
    summary: 'Visualizing markets using supply and demand diagrams is crucial for illustrating theoretical changes in equilibrium to formulate business strategy.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Interpret and utilize supply and demand diagrams to illustrate market dynamics.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Drawing Market Diagrams', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'Being able to correctly draw and interpret diagrams is a core skill in Economics and Business. A standard diagram requires clearly labeled axes: Price (P) on the y-axis, and Quantity (Q) on the x-axis.' } },
      { id: 'l-1', type: 'list', data: { style: 'numbered', items: [
        { text: 'Draw axes: P (vertical), Q (horizontal).' },
        { text: 'Draw a downward sloping Demand (D) curve and an upward sloping Supply (S) curve.' },
        { text: 'Mark the initial equilibrium intersection as E1, drawing dashed lines to P1 and Q1.' },
        { text: 'Draw the shift (e.g., a new demand curve D2 to the right).' },
        { text: 'Mark the new intersection E2, drawing dashed lines to P2 and Q2.' },
        { text: 'Use arrows to show the direction of shifts and movements in P and Q.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'warning', title: 'Diagram Check', text: 'Always ensure your labels are precise. Failing to label the original and new curves (e.g., D1 and D2) or the axes will result in lost marks in an exam.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Movements vs. Shifts', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'A shift in one curve causes a movement along the other. For instance, if Supply shifts outward, the supply curve moves right, but the old demand curve stays put—consumers merely move down along the demand curve to a new lower-price equilibrium.' } },
      { id: 's-1', type: 'summary', data: { text: 'Diagrams are powerful tools for visualizing market adjustments. They act as graphical summaries of the invisible hand at work coordinating consumer wants with producer costs.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'l-1', prompt: 'Which axis represents Price and which represents Quantity?', answer: 'Price is vertical (y-axis) and Quantity is horizontal (x-axis).' },
      { id: 'cue_2', blockId: 'p-2', prompt: 'If the demand curve shifts to the right, what happens along the supply curve?', answer: 'There is an upward movement along the existing supply curve.' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'Why is it important to use arrows and distinct labels in diagrams?', answer: 'To clearly indicate the direction of the market change and ensure full credit in analytical answers.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'Why does the demand curve slope downwards?', answer: 'Because at lower prices, more consumers are willing and able to purchase the product (inverse relationship).' }
    ]`
  },
  {
    topic: 'Price elasticity of demand',
    summary: 'Price Elasticity of Demand (PED) measures the responsiveness of quantity demanded to a change in price, helping businesses determine optimal pricing strategies.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Calculate Price Elasticity of Demand (PED) and understand its determinants.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Defining PED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Price Elasticity of Demand (PED)</strong> measures how sensitive the quantity demanded of a product is to a change in its price.' } },
      { id: 'eq-1', type: 'equation', data: { html: "PED = <span class='nb-frac'><span class='nb-num'>% change in Quantity Demanded</span><span class='nb-den'>% change in Price</span></span>", caption: 'Formula for PED' } },
      { id: 'h-2', type: 'heading', data: { text: 'Interpreting the PED Value', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Because price and quantity move in opposite directions, PED is normally a negative number. However, businesses usually look at the absolute value.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Price Inelastic (0 to -1):</strong> Demand changes by a smaller percentage than price. The product is a necessity or has strong brand loyalty.' },
        { text: '<strong>Price Elastic (< -1):</strong> Demand changes by a larger percentage than price. The product is non-essential and sensitive to price changes.' },
        { text: '<strong>Unitary Elastic (-1):</strong> The percentage change in demand is exactly equal to the percentage change in price.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'key', title: 'Determinants of PED', text: '1. Number of close substitutes (more = elastic) \\n2. Necessity vs Luxury (necessity = inelastic) \\n3. Proportion of income spent (high % = elastic) \\n4. Time period (long run = more elastic as people find alternatives).' } },
      { id: 's-1', type: 'summary', data: { text: 'Knowing PED is crucial. If demand is inelastic, a firm can raise prices to boost revenue. If it is elastic, a price cut might be needed to win enough sales volume to raise revenue.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'eq-1', prompt: 'What is the formula for calculating PED?', answer: 'PED = % change in Quantity Demanded / % change in Price' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'If a product has a PED of -0.4, is it elastic or inelastic?', answer: 'Price inelastic (between 0 and -1).' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'How does the availability of substitutes affect PED?', answer: 'More close substitutes make demand more price elastic, as consumers can easily switch to rivals if the price rises.' },
      { id: 'cue_4', blockId: 'c-1', prompt: 'Give an example of a good with highly inelastic demand.', answer: 'Basic food staples, electricity, or addictive goods like cigarettes or medication.' },
      { id: 'cue_5', blockId: 'c-1', prompt: 'Why does demand usually become more elastic over time?', answer: 'Because consumers have more time to search for cheaper alternatives or change their habits.' }
    ]`
  },
  {
    topic: 'Income elasticity of demand',
    summary: 'Income elasticity of demand (YED) measures the responsiveness of quantity demanded to changes in consumer real incomes, categorizing goods as normal, luxury, or inferior.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Calculate Income Elasticity of Demand (YED) and distinguish normal, luxury, and inferior goods.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Defining YED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Income Elasticity of Demand (YED)</strong> gauges the sensitivity of demand to changes in consumers incomes.' } },
      { id: 'eq-1', type: 'equation', data: { html: "YED = <span class='nb-frac'><span class='nb-num'>% change in Quantity Demanded</span><span class='nb-den'>% change in Income</span></span>", caption: 'Formula for YED' } },
      { id: 'h-2', type: 'heading', data: { text: 'Classifying Goods by YED', level: 2 } },
      { id: 'p-2', type: 'paragraph', data: { text: 'Unlike PED, the sign (+ or -) of YED is critically important, as it determines the nature of the good.' } },
      { id: 't-1', type: 'comparisonTable', data: { 
        caption: 'YED Categories',
        headers: ['Value of YED', 'Type of Good', 'Example'],
        rows: [
          ['Positive (+), between 0 and 1', 'Normal Good (Necessity)', 'Fresh vegetables, basic clothing. Demand rises steadily with income.'],
          ['Positive (+), > 1', 'Luxury Good', 'Designer clothes, overseas holidays. Demand rises rapidly with income.'],
          ['Negative (-)', 'Inferior Good', 'Store-brand beans, cheap bus travel. Demand falls as income rises.']
        ]
      }},
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Example Calculation', text: 'Average incomes rise by 5%. Consequently, sales of a budget smartphone decline by 10%. \\nYED = -10% / +5% = -2.0. This negative figure proves the good is inferior.' } },
      { id: 's-1', type: 'summary', data: { text: 'YED is vital for business planning. During economic booms, firms selling luxury goods will thrive. During recessions, firms selling inferior goods will experience a surge in demand.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'eq-1', prompt: 'What is the formula for calculating YED?', answer: 'YED = % change in Quantity Demanded / % change in Income' },
      { id: 'cue_2', blockId: 't-1', prompt: 'What does a positive YED value signify?', answer: 'That the product is a normal or luxury good (demand increases as income increases).' },
      { id: 'cue_3', blockId: 'c-1', prompt: 'If YED is -1.5, what kind of good is it?', answer: 'An inferior good.' },
      { id: 'cue_4', blockId: 't-1', prompt: 'What defines a luxury good in terms of YED?', answer: 'It has an income elastic demand (YED > +1), meaning demand grows proportionately faster than income.' },
      { id: 'cue_5', blockId: 's-1', prompt: 'Which type of businesses benefit most during an economic recession?', answer: 'Businesses selling inferior goods, as falling average incomes shift consumer preferences to budget options.' }
    ]`
  },
  {
    topic: 'Elasticity and total revenue',
    summary: 'The relationship between price elasticity of demand (PED) and total revenue helps an organization predict how a change in selling price will impact its overall sales income.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Understand the relationship between price changes, demand elasticity, and total revenue.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Total Revenue and PED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: '<strong>Total Revenue (TR)</strong> is calculated by multiplying selling price by quantity sold (TR = Price × Quantity).' } },
      { id: 'p-2', type: 'paragraph', data: { text: 'When a firm changes its price, two opposing forces act on Total Revenue. If price rises, the firm earns more per unit sold, but sells fewer units. Whether TR ultimately rises or falls dictates the firms optimal pricing strategy, relying entirely on PED.' } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>When Demand is INELASTIC:</strong> Quantity drops by a smaller percentage than the price increase. The higher price outweighs lost volume -> <strong>Raising prices INCREASES Total Revenue</strong>.' },
        { text: '<strong>When Demand is ELASTIC:</strong> Quantity drops by a larger percentage than the price increase. The lost volume outweighs the higher price -> <strong>Raising prices DECREASES Total Revenue</strong>.' },
        { text: '<strong>Lowering Prices:</strong> If inelastic, cutting price lowers TR. If elastic, cutting price boosts TR.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'worked', title: 'Inelastic Revenue Example', text: 'Price rises by 10%. PED is -0.5 (inelastic). Sales volume will drop by only 5%. \\nSince the 10% gain in price compensates for a mere 5% loss in customers, Total Revenue rises.' } },
      { id: 's-1', type: 'summary', data: { text: 'For firms with price-inelastic products (heavy branding, monopolies, necessities), price skimming or consistent price hikes maximize revenue. Firms with elastic products must focus on competitive, lower pricing to gain necessary volume.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'p-1', prompt: 'What is the formula for Total Revenue?', answer: 'Total Revenue = Selling Price × Quantity Sold.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'If a business sells an inelastic product, should they raise or lower prices to maximize revenue?', answer: 'They should raise prices, as the percentage drop in quantity will be smaller than the percentage increase in price.' },
      { id: 'cue_3', blockId: 'l-1', prompt: 'If demand is elastic, what happens to revenue when price increases?', answer: 'Total Revenue falls, because consumers substantially cut back on purchases.' },
      { id: 'cue_4', blockId: 'l-1', prompt: 'When does cutting prices increase Total Revenue?', answer: 'When demand is price elastic (PED < -1).' }
    ]`
  },
  {
    topic: 'Elasticity implications for pricing',
    summary: 'PED and YED provide actionable data for businesses, allowing them to segment markets, adjust to economic cycles, and shape their product portfolios to mitigate risk.',
    blocks: `[
      { id: 'obj-1', type: 'objective', data: { text: 'Evaluate how firms use elasticity concepts to inform strategic pricing and business decisions.' } },
      { id: 'h-1', type: 'heading', data: { text: 'Strategic Pricing and PED', level: 2 } },
      { id: 'p-1', type: 'paragraph', data: { text: 'Firms can utilize PED to execute <strong>Price Discrimination</strong>. If an airline knows business travelers have inelastic demand (they must travel on specific dates regardless of cost), while tourists have elastic demand (they are highly sensitive to price), the airline will charge business flyers higher premium prices, whilst offering discounts to vacationers.' } },
      { id: 'h-2', type: 'heading', data: { text: 'Product Portfolios and YED', level: 2 } },
      { id: 'l-1', type: 'list', data: { style: 'bullet', items: [
        { text: '<strong>Economic Resilience:</strong> A diverse product portfolio should contain both normal/luxury goods and value (inferior) goods. E.g., Tesco offering Tesco Finest (Luxury, high YED) and Tesco Everyday Value (Inferior, negative YED).' },
        { text: '<strong>Strategic Expansion:</strong> In rapidly developing economies where middle-class incomes are surging, firms should pivot focus towards luxury, highly income-elastic product lines to capitalize on growing wealth.' }
      ]}},
      { id: 'c-1', type: 'callout', data: { style: 'tip', title: 'Limitations of Elasticity Data', text: 'In an exam, remember to point out that calculating exact elasticity is very difficult. It relies on historical data which may quickly become obsolete due to sudden changes in consumer tastes or competitor actions.' } },
      { id: 's-1', type: 'summary', data: { text: 'Elasticity holds immense practical value. It dictates optimal pricing, reveals target demographics, identifies optimal responses to macroeconomic factors (like GDP growth), and underscores the need for deep market research.' } }
    ]`,
    cues: `[
      { id: 'cue_1', blockId: 'p-1', prompt: 'What is Price Discrimination?', answer: 'Charging different prices to different consumer groups based on their differing Price Elasticities of Demand.' },
      { id: 'cue_2', blockId: 'l-1', prompt: 'How can YED assist in building a product portfolio?', answer: 'By offering goods with varying YEDs (some normal/luxury, some inferior), a firm can ensure stable sales during both economic booms and recessions.' },
      { id: 'cue_3', blockId: 'p-1', prompt: 'Why do airlines charge more for tickets bought a day before the flight?', answer: 'Because last-minute buyers (usually business travelers) have a highly inelastic PED, allowing the airline to maximize revenue.' },
      { id: 'cue_4', blockId: 'c-1', prompt: 'What is a limitation of a business relying rigidly on PED calculations?', answer: 'Calculations rely on historical, estimated data which can be inaccurate or suddenly shift due to changing trends, making it an imperfect predictor.' }
    ]`
  }
];

function generateDateString() {
  return new Date().toISOString();
}

notes.forEach((note, i) => {
  const filename = \`note_1_2_\${i}.js\`;
  const exportName = \`note_business_1_2_\${i}\`;
  const noteId = \`note:business:1:2:\${i}\`;

  const content = \`import { buildNoteId } from '../../../services/notes/noteContext.js';

export const \${exportName} = {
  noteId: '\${noteId}',
  subject: 'business',
  unitCode: 'WBS11',
  unitId: 1,
  topicId: 2,
  subtopicIndex: \${i},
  title: '\${note.topic}',
  pdfPath: '/notes/business/wbs11-2.pdf',
  blocks: \${note.blocks},
  recall: {
    enabled: true,
    summaryText: "\${note.summary.replace(/"/g, '\\\\"')}",
    cues: \${note.cues},
    ready: true
  },
  evidence: [],
  mentions: [],
  createdAt: '\${generateDateString()}',
  lastEditedAt: '\${generateDateString()}'
};
\`;

  fs.writeFileSync(path.join(dir, filename), content);
  console.log(\`Generated \${filename}\`);
});
