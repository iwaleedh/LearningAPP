/** Mathematics stencils — axes, vectors, angle symbols, markers */
const mathematicsStencils = [
  {
    id: 'math-xy-axes',
    subject: 'mathematics',
    category: 'Axes',
    label: 'x–y Axes',
    svg: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="85" x2="95" y2="85" stroke="#1f2937" stroke-width="2.5"/><polygon points="95,85 87,81 87,89" fill="#1f2937"/><line x1="15" y1="90" x2="15" y2="5" stroke="#1f2937" stroke-width="2.5"/><polygon points="15,5 11,13 19,13" fill="#1f2937"/><text x="92" y="97" font-size="11" fill="#1f2937" font-style="italic">x</text><text x="3" y="12" font-size="11" fill="#1f2937" font-style="italic">y</text><text x="8" y="97" font-size="9" fill="#1f2937">O</text></svg>',
    defaultWidth: 100,
    defaultHeight: 100,
  },
  {
    id: 'math-vector-arrow',
    subject: 'mathematics',
    category: 'Vectors',
    label: 'Vector Arrow',
    svg: '<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="10" x2="65" y2="10" stroke="#3b82f6" stroke-width="2.5"/><polygon points="75,10 63,4 63,16" fill="#3b82f6"/></svg>',
    defaultWidth: 80,
    defaultHeight: 20,
  },
  {
    id: 'math-angle-arc',
    subject: 'mathematics',
    category: 'Geometry',
    label: 'Angle Arc',
    svg: '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="55" x2="55" y2="55" stroke="#1f2937" stroke-width="2"/><line x1="5" y1="55" x2="35" y2="10" stroke="#1f2937" stroke-width="2"/><path d="M25 55 A20 20 0 0 1 18 35" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="24" y="46" font-size="10" fill="#3b82f6" font-style="italic">θ</text></svg>',
    defaultWidth: 60,
    defaultHeight: 60,
  },
  {
    id: 'math-right-angle',
    subject: 'mathematics',
    category: 'Geometry',
    label: 'Right Angle Box',
    svg: '<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="30" x2="30" y2="30" stroke="#1f2937" stroke-width="2"/><line x1="0" y1="30" x2="0" y2="0" stroke="#1f2937" stroke-width="2"/><rect x="0" y="18" width="12" height="12" fill="none" stroke="#3b82f6" stroke-width="1.5"/></svg>',
    defaultWidth: 30,
    defaultHeight: 30,
  },
  {
    id: 'math-parallel-markers',
    subject: 'mathematics',
    category: 'Geometry',
    label: 'Parallel Markers',
    svg: '<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="10" x2="55" y2="10" stroke="#1f2937" stroke-width="2"/><line x1="5" y1="30" x2="55" y2="30" stroke="#1f2937" stroke-width="2"/><polygon points="28,7 30,10 32,7" fill="#3b82f6"/><polygon points="33,7 35,10 37,7" fill="#3b82f6"/><polygon points="28,27 30,30 32,27" fill="#3b82f6"/><polygon points="33,27 35,30 37,27" fill="#3b82f6"/></svg>',
    defaultWidth: 60,
    defaultHeight: 40,
  },
  {
    id: 'math-tangent-line',
    subject: 'mathematics',
    category: 'Calculus',
    label: 'Tangent Line',
    svg: '<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><path d="M5 70 Q30 65, 50 40 Q70 15, 95 10" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="15" y1="68" x2="85" y2="12" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 3"/><circle cx="50" cy="40" r="3" fill="#ef4444"/></svg>',
    defaultWidth: 100,
    defaultHeight: 80,
  },
];

export default mathematicsStencils;
