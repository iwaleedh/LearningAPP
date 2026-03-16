export const note_olevel_biology_5_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/5 Enzymes/5-2-1-factors-affecting-enzyme-activity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Describe and explain how temperature, pH, and substrate concentration affect the rate of enzyme-controlled reactions, and interpret rate graphs for each factor.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Effect of Temperature on Enzyme Activity', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Temperature affects enzyme activity in two opposing ways. As temperature increases from 0°C, the rate of reaction increases because molecules have more <strong>kinetic energy</strong>, so enzyme-substrate collisions are more frequent. However, above the enzyme\'s <strong>optimum temperature</strong>, the enzyme\'s active site begins to change shape and the enzyme becomes <strong>denatured</strong>. Most human enzymes have an optimum around <strong>37°C</strong> (body temperature).'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Temperature Summary',
        text: '• <strong>Below optimum:</strong> Low kinetic energy → fewer enzyme-substrate collisions → slower rate<br/>• <strong>At optimum (~37°C for human enzymes):</strong> Maximum rate of reaction<br/>• <strong>Above optimum:</strong> Active site changes shape permanently (denaturation) → substrate cannot bind → rate falls to zero<br/><br/>Note: at <strong>low temperatures</strong> enzymes are <strong>inactivated</strong> (not denatured) — cooling and rewarming restores activity.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Effect of pH on Enzyme Activity', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Each enzyme has an <strong>optimum pH</strong> at which it functions best. Changes in pH alter the charges on the amino acids at the active site, changing the active site\'s shape and therefore the enzyme\'s ability to bind its substrate. At extreme pH values (very acidic or very alkaline), the enzyme is <strong>denatured</strong>. Different enzymes have different optimum pH values: <strong>pepsin</strong> (stomach protease) works best at pH 2; <strong>amylase</strong> (salivary) works best at around pH 7; intestinal enzymes work best at pH 8.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'pH Summary',
        text: '• <strong>At optimum pH:</strong> Active site has the correct charge distribution for optimal substrate binding → maximum rate<br/>• <strong>Away from optimum pH:</strong> Altered charges change active site shape → substrate binds less effectively → rate decreases<br/>• <strong>Extreme pH:</strong> Active site permanently altered (denatured) → enzyme non-functional<br/><br/>Different enzymes have different optimum pH values depending on where they function in the body.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Effect of Substrate Concentration', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'As <strong>substrate concentration</strong> increases (with enzyme concentration fixed), the rate of reaction initially increases because more substrate molecules are available to collide with and bind to the enzyme\'s active site. However, once all active sites are occupied (enzymes are <strong>saturated</strong>), adding more substrate has no further effect — the rate reaches a <strong>maximum (plateau)</strong> and levels off. The rate is then limited by the number of enzyme molecules available.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Rate graphs showing the effect of temperature, pH, and substrate concentration on enzyme activity',
        svg: `<svg viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="10">
  <rect width="540" height="300" fill="#f8fafc" rx="12"/>
  <text x="270" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Factors Affecting Enzyme Activity</text>

  <!-- === Graph 1: Temperature === -->
  <text x="90" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">1. Temperature</text>
  <!-- Axes -->
  <line x1="30" y1="240" x2="165" y2="240" stroke="#374151" stroke-width="1.5"/>
  <line x1="30" y1="240" x2="30" y2="60" stroke="#374151" stroke-width="1.5"/>
  <text x="97" y="258" text-anchor="middle" font-size="9" fill="#374151">Temperature (°C)</text>
  <text x="12" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,12,155)">Rate of reaction</text>
  <!-- Temperature curve: rises then falls sharply -->
  <path d="M 30,235 C 50,230 60,190 85,100 C 95,75 100,65 105,65 C 110,65 115,80 125,130 C 135,185 145,235 160,240" stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <!-- Optimum marker -->
  <line x1="105" y1="65" x2="105" y2="240" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="105" y="252" text-anchor="middle" font-size="8" fill="#dc2626">~37°C</text>
  <text x="105" y="57" text-anchor="middle" font-size="8" fill="#dc2626">Optimum</text>
  <!-- Denaturation label -->
  <text x="140" y="170" font-size="8" fill="#dc2626">Dena-</text>
  <text x="140" y="181" font-size="8" fill="#dc2626">turation</text>

  <!-- === Graph 2: pH === -->
  <text x="275" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">2. pH</text>
  <!-- Axes -->
  <line x1="215" y1="240" x2="348" y2="240" stroke="#374151" stroke-width="1.5"/>
  <line x1="215" y1="240" x2="215" y2="60" stroke="#374151" stroke-width="1.5"/>
  <text x="282" y="258" text-anchor="middle" font-size="9" fill="#374151">pH</text>
  <text x="198" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,198,155)">Rate of reaction</text>
  <!-- pH curve (bell shape): 3 different enzymes -->
  <!-- Pepsin (optimum pH 2) -->
  <path d="M 215,235 C 225,220 230,100 240,70 C 245,60 248,65 252,85 C 260,130 270,235 285,238" stroke="#7c3aed" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
  <text x="237" y="55" font-size="7" fill="#7c3aed">Pepsin</text>
  <text x="237" y="64" font-size="7" fill="#7c3aed">(pH 2)</text>
  <!-- Amylase (optimum pH 7) -->
  <path d="M 245,237 C 258,220 265,140 275,80 C 280,60 285,60 290,80 C 300,140 307,215 320,238" stroke="#2563eb" stroke-width="2" fill="none"/>
  <text x="283" y="53" text-anchor="middle" font-size="7" fill="#2563eb">Amylase</text>
  <text x="283" y="62" text-anchor="middle" font-size="7" fill="#2563eb">(pH 7)</text>
  <!-- Intestinal enzyme (optimum pH 8) -->
  <path d="M 285,238 C 295,215 305,140 315,85 C 320,65 324,60 328,65 C 335,80 340,150 346,238" stroke="#16a34a" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
  <text x="330" y="55" font-size="7" fill="#16a34a">Intestinal</text>
  <text x="330" y="64" font-size="7" fill="#16a34a">(pH 8)</text>
  <!-- x-axis labels -->
  <text x="215" y="250" text-anchor="middle" font-size="8" fill="#374151">0</text>
  <text x="250" y="250" text-anchor="middle" font-size="8" fill="#374151">3</text>
  <text x="282" y="250" text-anchor="middle" font-size="8" fill="#374151">7</text>
  <text x="315" y="250" text-anchor="middle" font-size="8" fill="#374151">10</text>
  <text x="348" y="250" text-anchor="middle" font-size="8" fill="#374151">14</text>

  <!-- === Graph 3: Substrate Concentration === -->
  <text x="450" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">3. [Substrate]</text>
  <!-- Axes -->
  <line x1="390" y1="240" x2="530" y2="240" stroke="#374151" stroke-width="1.5"/>
  <line x1="390" y1="240" x2="390" y2="60" stroke="#374151" stroke-width="1.5"/>
  <text x="460" y="258" text-anchor="middle" font-size="9" fill="#374151">Substrate concentration</text>
  <text x="373" y="155" text-anchor="middle" font-size="9" fill="#374151" transform="rotate(-90,373,155)">Rate of reaction</text>
  <!-- Substrate concentration curve: rises then plateaus -->
  <path d="M 390,240 C 405,220 415,155 430,110 C 445,75 460,68 475,66 C 490,64 505,64 525,64" stroke="#15803d" stroke-width="2.5" fill="none"/>
  <!-- Plateau marker -->
  <line x1="390" y1="64" x2="525" y2="64" stroke="#15803d" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="450" y="57" text-anchor="middle" font-size="8" fill="#15803d">Maximum rate</text>
  <text x="450" y="49" text-anchor="middle" font-size="8" fill="#15803d">(enzymes saturated)</text>
  <!-- Annotation -->
  <text x="408" y="165" font-size="8" fill="#374151">Rate increases</text>
  <text x="408" y="176" font-size="8" fill="#374151">with [substrate]</text>
</svg>`
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of factors affecting enzyme activity',
        headers: ['Factor', 'Effect on rate when increased', 'Reason', 'Effect of extreme values'],
        rows: [
          ['Temperature', 'Increases up to optimum (~37°C for human enzymes)', 'More kinetic energy → more enzyme-substrate collisions per second', 'Above optimum: active site denatures permanently → rate falls to zero'],
          ['pH', 'Increases up to optimum (varies by enzyme)', 'Correct charge distribution on active site allows optimal substrate binding', 'Extreme pH: active site denatures → enzyme non-functional'],
          ['Substrate concentration', 'Increases then plateaus (maximum rate)', 'More substrate → more collisions with active sites', 'At saturation: all active sites occupied → further increase has no effect']
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• At <strong>low temperatures</strong>: enzymes are <strong>inactivated</strong>, not denatured. Activity returns if warmed up.<br/>• At <strong>high temperatures</strong>: enzymes are <strong>denatured</strong> — this is irreversible.<br/>• At substrate saturation, adding more substrate <strong>does not increase rate</strong> — more <strong>enzyme</strong> would be needed.<br/>• When describing the effect of temperature on rate: first say rate increases due to more kinetic energy/collisions, then say rate falls due to <strong>denaturation of active site</strong> — do not just say "enzyme is destroyed".'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When sketching a temperature-rate graph, the rise should be <strong>gradual</strong> (increasing collisions) and the fall after the optimum should be <strong>sharp</strong> (rapid denaturation). For substrate concentration, the curve should rise steeply at first then <strong>level off</strong> into a plateau — never show it decreasing.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Temperature: rate increases up to optimum (~37°C for human enzymes) due to greater kinetic energy; above optimum the active site denatures and rate falls to zero. pH: each enzyme has an optimum pH; deviation changes active site shape and reduces rate; extreme pH causes denaturation. Substrate concentration: rate increases as more substrate is available until all active sites are saturated; rate then plateaus at the maximum.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Temperature: optimum ~37°C, denaturation above. pH: optimum varies (pepsin pH 2, amylase pH 7). Substrate concentration: rate increases then plateaus at saturation.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'para-1',
        prompt: 'Explain why enzyme activity increases as temperature rises from 0°C to 37°C.',
        answer: 'As temperature increases, molecules have more kinetic energy, so enzyme-substrate collisions are more frequent. This increases the chance of the substrate entering the active site and forming an enzyme-substrate complex, so the rate of reaction increases.'
      },
      {
        id: 'cue-2',
        blockId: 'call-1',
        prompt: 'Why does enzyme activity fall sharply above the optimum temperature?',
        answer: 'Above the optimum temperature, the enzyme\'s active site changes shape permanently (denaturation). The substrate can no longer fit into the active site, so the enzyme cannot catalyse the reaction and the rate falls to zero.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'State the optimum pH of pepsin and explain why it functions at this pH.',
        answer: 'Pepsin has an optimum pH of about 2 (highly acidic) because it works in the stomach, which produces hydrochloric acid. At pH 2, the charge distribution on pepsin\'s active site is correct for binding its protein substrates. At higher pH, the active site shape changes and activity decreases.'
      },
      {
        id: 'cue-4',
        blockId: 'para-3',
        prompt: 'Why does the rate of an enzyme-controlled reaction plateau at high substrate concentrations?',
        answer: 'At high substrate concentrations, all of the enzyme\'s active sites are occupied (the enzyme is saturated). Adding more substrate cannot increase the rate because there are no free active sites available. The rate is now limited by the number of enzyme molecules.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_5_5_1;
