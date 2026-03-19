/** Business stencils — process icons, people, flow symbols */
const businessStencils = [
  {
    id: 'biz-person',
    subject: 'business',
    category: 'People',
    label: 'Person Icon',
    svg: '<svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="14" r="10" fill="none" stroke="#1f2937" stroke-width="2.5"/><path d="M5 55 Q5 35, 20 32 Q35 35, 35 55" fill="none" stroke="#1f2937" stroke-width="2.5"/></svg>',
    defaultWidth: 40,
    defaultHeight: 60,
  },
  {
    id: 'biz-factory',
    subject: 'business',
    category: 'Buildings',
    label: 'Factory',
    svg: '<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="25" width="70" height="30" fill="none" stroke="#1f2937" stroke-width="2.5"/><polygon points="5,25 20,10 20,25" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="20,25 35,10 35,25" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="35,25 50,10 50,25" fill="none" stroke="#1f2937" stroke-width="2"/><rect x="55" y="5" width="10" height="20" fill="none" stroke="#1f2937" stroke-width="2"/><rect x="15" y="38" width="12" height="17" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="40" y="38" width="12" height="17" fill="none" stroke="#1f2937" stroke-width="1.5"/></svg>',
    defaultWidth: 80,
    defaultHeight: 60,
  },
  {
    id: 'biz-money',
    subject: 'business',
    category: 'Finance',
    label: 'Money Symbol',
    svg: '<svg viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="25" r="18" fill="none" stroke="#10b981" stroke-width="2.5"/><text x="20" y="32" font-size="24" font-weight="bold" text-anchor="middle" fill="#10b981">$</text></svg>',
    defaultWidth: 40,
    defaultHeight: 50,
  },
  {
    id: 'biz-flow-arrow',
    subject: 'business',
    category: 'Flowchart',
    label: 'Flow Arrow',
    svg: '<svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="15" x2="60" y2="15" stroke="#1f2937" stroke-width="3"/><polygon points="75,15 60,6 60,24" fill="#1f2937"/></svg>',
    defaultWidth: 80,
    defaultHeight: 30,
  },
  {
    id: 'biz-decision-diamond',
    subject: 'business',
    category: 'Flowchart',
    label: 'Decision Diamond',
    svg: '<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><polygon points="35,5 65,35 35,65 5,35" fill="none" stroke="#1f2937" stroke-width="2.5"/><text x="35" y="38" font-size="10" text-anchor="middle" fill="#6b7280">?</text></svg>',
    defaultWidth: 70,
    defaultHeight: 70,
  },
  {
    id: 'biz-document',
    subject: 'business',
    category: 'Flowchart',
    label: 'Document Shape',
    svg: '<svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L55 5 L55 55 Q40 48, 30 55 Q20 62, 5 55 Z" fill="none" stroke="#1f2937" stroke-width="2.5"/><line x1="12" y1="18" x2="48" y2="18" stroke="#1f2937" stroke-width="1.2"/><line x1="12" y1="28" x2="48" y2="28" stroke="#1f2937" stroke-width="1.2"/><line x1="12" y1="38" x2="38" y2="38" stroke="#1f2937" stroke-width="1.2"/></svg>',
    defaultWidth: 60,
    defaultHeight: 70,
  },
];

export default businessStencils;
