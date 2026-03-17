export const note_olevel_maths_core_1_11_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/compound-measures.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use formulae for compound measures — speed, density, and pressure — including the triangle method and correct units.' }
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What Are Compound Measures?', level: 2 }
    },
    {
      id: 'p-what',
      type: 'paragraph',
      data: { text: 'A <strong>compound measure</strong> is formed by combining two or more base measures. The three most important compound measures at IGCSE are <strong>speed</strong>, <strong>density</strong>, and <strong>pressure</strong>.' }
    },
    {
      id: 'h-speed',
      type: 'heading',
      data: { text: 'Speed', level: 2 }
    },
    {
      id: 'eq-speed',
      type: 'equation',
      data: {
        html: 'Speed = <span class="nb-frac"><span class="nb-num">Distance</span><span class="nb-den">Time</span></span>',
        caption: 'Units: m/s, km/h, or cm/s'
      }
    },
    {
      id: 'callout-worked-speed',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Speed',
        text: 'A car travels 150 km in 2.5 hours. Find its average speed.<br>Speed = Distance ÷ Time = 150 ÷ 2.5 = <strong>60 km/h</strong>'
      }
    },
    {
      id: 'h-density',
      type: 'heading',
      data: { text: 'Density', level: 2 }
    },
    {
      id: 'eq-density',
      type: 'equation',
      data: {
        html: 'Density = <span class="nb-frac"><span class="nb-num">Mass</span><span class="nb-den">Volume</span></span>',
        caption: 'Units: g/cm³ or kg/m³'
      }
    },
    {
      id: 'callout-worked-density',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Density',
        text: 'A block of metal has mass 540 g and volume 200 cm³. Find its density.<br>Density = 540 ÷ 200 = <strong>2.7 g/cm³</strong>'
      }
    },
    {
      id: 'h-pressure',
      type: 'heading',
      data: { text: 'Pressure', level: 2 }
    },
    {
      id: 'eq-pressure',
      type: 'equation',
      data: {
        html: 'Pressure = <span class="nb-frac"><span class="nb-num">Force</span><span class="nb-den">Area</span></span>',
        caption: 'Units: N/m² (Pascals, Pa) or N/cm²'
      }
    },
    {
      id: 'callout-worked-pressure',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Pressure',
        text: 'A force of 60 N acts on an area of 12 cm². Find the pressure.<br>Pressure = 60 ÷ 12 = <strong>5 N/cm²</strong>'
      }
    },
    {
      id: 'callout-key-triangles',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Triangle Method',
        text: '<strong>Speed triangle:</strong> D on top, S × T below. Cover what you want: D = S × T, S = D/T, T = D/S<br><br><strong>Density triangle:</strong> M on top, D × V below. M = D × V, D = M/V, V = M/D<br><br><strong>Pressure triangle:</strong> F on top, P × A below. F = P × A, P = F/A, A = F/P'
      }
    },
    {
      id: 'callout-tip-units',
      type: 'callout',
      data: { style: 'tip', title: 'Units Tip', text: 'Always check units match the formula. If speed is in km/h but time is given in minutes, convert time to hours first. State your units clearly in the answer.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Three key compound measures: Speed = D/T, Density = M/V, Pressure = F/A. Use the triangle method to rearrange. Always check units are consistent.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-speed', prompt: 'State the formula for speed. What units is speed measured in?' },
      { id: 'cue-2', blockId: 'callout-worked-speed', prompt: 'A car travels 150 km in 2.5 hours. Calculate its average speed.' },
      { id: 'cue-3', blockId: 'h-density', prompt: 'State the formula for density. If mass = 540 g and volume = 200 cm³, find the density.' },
      { id: 'cue-4', blockId: 'h-pressure', prompt: 'State the formula for pressure. What units is pressure measured in?' },
      { id: 'cue-5', blockId: 'callout-key-triangles', prompt: 'Describe the triangle method for Speed. How do you use it to find distance?' }
    ],
    summaryText: 'Speed = D/T (km/h or m/s). Density = M/V (g/cm³). Pressure = F/A (N/m² or Pa). Use triangles to rearrange.',
    ready: true
  },
  evidence: []
};
