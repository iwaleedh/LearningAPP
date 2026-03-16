export const note_physics_1_5_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define efficiency, calculate efficiency as a ratio of useful output energy to total input energy, and explain ways to improve efficiency" } },
    { id: 'head-1', type: 'heading', data: { text: "Efficiency", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Efficiency</strong> is a measure of how well a device or system converts input energy into useful output energy." },
      { text: "No real device is 100% efficient — some energy is always lost to the surroundings, typically as heat or sound." },
      { text: "<strong>Efficiency</strong> tells us what fraction (or percentage) of the input energy is actually useful." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "The <strong>efficiency</strong> of a device is defined as: <strong>efficiency</strong> = useful energy output / total energy input." },
      { text: "As a decimal this gives a value between 0 and 1; as a percentage it is multiplied by 100." },
      { text: "The equation can also be written in terms of <strong>power</strong>: <strong>efficiency</strong> = useful <strong>power</strong> output / total <strong>power</strong> input." },
      { text: "This is equivalent because <strong>power</strong> = energy / time, and the time cancels." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#f8f9fa"/><rect x="30" y="75" width="90" height="50" rx="6" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="75" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Input</text><text x="75" y="116" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Energy Ein</text><line x1="120" y1="100" x2="155" y2="100" stroke="#495057" stroke-width="2"/><polygon points="155,100 145,95 145,105" fill="#495057"/><rect x="155" y="70" width="90" height="60" rx="6" fill="#dee2e6" stroke="#868e96" stroke-width="2"/><text x="200" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#495057" text-anchor="middle">Device</text><text x="200" y="116" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">(e.g. motor)</text><line x1="245" y1="88" x2="330" y2="75" stroke="#40c057" stroke-width="2"/><polygon points="330,75 317,74 320,84" fill="#40c057"/><text x="355" y="72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Useful</text><text x="355" y="86" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">output</text><line x1="245" y1="115" x2="330" y2="140" stroke="#fa5252" stroke-width="2"/><polygon points="330,140 317,131 323,141" fill="#fa5252"/><text x="357" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a" text-anchor="middle">Wasted</text><text x="357" y="154" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">(heat, sound)</text><text x="200" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Energy Transfer through a Device</text><text x="200" y="180" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">Efficiency = Useful output / Total input</text></svg>', caption: 'Efficiency = useful energy output divided by total energy input' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Energy always obeys the law of conservation: total energy input = useful energy output + wasted energy." },
      { text: "Wasted energy is typically transferred to the thermal energy store of the surroundings." },
      { text: "<strong>Efficiency</strong> can therefore be written as: <strong>efficiency</strong> = (Ein - Ewasted) / Ein = 1 - (Ewasted / Ein)" },
      { text: "A higher <strong>efficiency</strong> means less energy is wasted." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Sankey Diagrams A Sankey diagram is a visual representation of energy transfers in a system." },
      { text: "The width of each arrow represents the amount of energy." },
      { text: "The input arrow enters from the left; useful output arrows flow to the right; wasted energy arrows (usually labelled heat or sound) flow downward." },
      { text: "In a 100% efficient device, there would be no downward arrows." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Sankey Diagram for a Light Bulb (10% efficient)</text><rect x="20" y="75" width="60" height="60" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="50" y="100" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">100 J</text><text x="50" y="116" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">input</text><rect x="80" y="95" width="160" height="20" fill="#495057"/><text x="160" y="110" font-family="sans-serif" font-size="10" fill="#f8f9fa" text-anchor="middle">Electrical Energy</text><rect x="240" y="95" width="40" height="10" fill="#fab005"/><text x="300" y="104" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700">10 J light</text><rect x="240" y="105" width="40" height="60" fill="#fa5252"/><line x1="260" y1="165" x2="260" y2="185" stroke="#fa5252" stroke-width="2"/><polygon points="260,185 254,175 266,175" fill="#fa5252"/><text x="310" y="158" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a">90 J heat</text><text x="200" y="195" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Thin arrow = useful (light); wide arrow = wasted (heat)</text></svg>', caption: 'Sankey diagram: arrow width represents energy amount; wasted energy flows downward' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example 1 A motor is supplied with 500 J of electrical energy." },
      { text: "It lifts a load, doing 350 J of useful mechanical work." },
      { text: "Calculate the <strong>efficiency</strong>." },
      { text: "<strong>Efficiency</strong> = 350 / 500 = 0.70, or 70%." },
      { text: "The remaining 30% (150 J) is wasted as heat in the motor windings." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example 2 A car engine has a <strong>power</strong> input of 40 kW and a useful mechanical <strong>power</strong> output of 14 kW." },
      { text: "Calculate the <strong>efficiency</strong>." },
      { text: "<strong>Efficiency</strong> = 14 / 40 = 0.35, or 35%." },
      { text: "This means 65% of the fuel energy is wasted, mainly as heat in the exhaust and engine block." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Improving <strong>Efficiency</strong> Energy losses in real devices arise mainly from: <strong>friction</strong> between moving parts (producing heat); electrical resistance heating; sound radiation; and air resistance." },
      { text: "<strong>Efficiency</strong> can be improved by: lubricating moving parts to reduce <strong>friction</strong>; using better electrical conductors to reduce resistance heating; adding insulation to reduce heat loss; and streamlining to reduce air resistance." },
      { text: "However, no device can ever be 100% efficient in practice." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Common Sources of Energy Loss</text><rect x="20" y="35" width="165" height="35" rx="6" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="103" y="57" font-family="sans-serif" font-size="12" fill="#c92a2a" text-anchor="middle">Friction &#8594; Heat</text><rect x="215" y="35" width="165" height="35" rx="6" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="298" y="57" font-family="sans-serif" font-size="12" fill="#c92a2a" text-anchor="middle">Resistance &#8594; Heat</text><rect x="20" y="85" width="165" height="35" rx="6" fill="#fff3bf" stroke="#fab005" stroke-width="2"/><text x="103" y="107" font-family="sans-serif" font-size="12" fill="#e67700" text-anchor="middle">Sound (vibration)</text><rect x="215" y="85" width="165" height="35" rx="6" fill="#fff3bf" stroke="#fab005" stroke-width="2"/><text x="298" y="107" font-family="sans-serif" font-size="12" fill="#e67700" text-anchor="middle">Air resistance</text><text x="200" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Reduce losses &#8594; Higher efficiency</text><text x="200" y="165" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Lubricate | Better conductors | Insulate | Streamline</text></svg>', caption: 'Common sources of energy loss and how to reduce them' } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Efficiency</strong> and the Environment More efficient devices use less input energy to perform the same task." },
      { text: "This has important environmental implications: using fuel more efficiently reduces carbon dioxide emissions and slows the depletion of fossil fuel reserves." },
      { text: "Energy labelling schemes (such as the EU energy label A to G) use <strong>efficiency</strong> ratings to help consumers choose more efficient appliances." }
    ] } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Write the equation for efficiency and calculate it as both a decimal and a percentage", checked: false },
      { text: "Identify useful output energy and wasted energy in a given scenario", checked: false },
      { text: "Interpret a Sankey diagram and describe what it shows about energy transfers", checked: false },
      { text: "Suggest two ways to improve the efficiency of a given device", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Efficiency</strong> = useful energy output / total energy input (multiply by 100 for a percentage). No device is 100% efficient — energy is always wasted as heat or sound. <strong>Efficiency</strong> can be improved by reducing <strong>friction</strong>, resistance, and other energy loss mechanisms. Higher <strong>efficiency</strong> means less environmental impact." } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Write the equation for efficiency in terms of energy and in terms of power' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'What does a Sankey diagram show? What does the width of each arrow represent?' },
    { id: 'cue-3', blockId: 'para-8', prompt: 'List four causes of energy loss in a device and a way to reduce each one' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
