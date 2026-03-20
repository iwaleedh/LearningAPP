export const note_business_3_16_5 = {
  pdfPath: '/notes/business/wbs13-16.pdf',
  blocks: [
    { type: 'objective', data: { text: 'Understand the purpose and structure of a business continuity plan (BCP).' } },
    { type: 'heading', data: { text: 'What is Business Continuity Planning?', level: 2 } },
    { type: 'paragraph', data: { text: 'A Business Continuity Plan (BCP) outlines how a business intends to continue operating during an unplanned disruption in service. Unlike contingency planning, which deals with specific isolated events, BCP is comprehensive and focuses on maintaining core business functions across a wide array of potential disasters.' } },
    { type: 'heading', data: { text: 'Key Components of a BCP', level: 3 } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Business Impact Analysis (BIA):</b> Identifying critical business functions and the impact of a disruption to those functions (e.g., revenue loss, reputation damage).' },
      { text: '<b>Recovery Strategies:</b> Documenting the methods required to restore critical functions within acceptable minimum timeframes.' },
      { text: '<b>Plan Development:</b> Creating an actionable, step-by-step framework for managing the crisis (who does what, when, and how/where).' },
      { text: '<b>Testing & Training:</b> Running disaster drills (e.g., massive IT failure simulations) to ensure staff know the procedures and the plan works.' }
    ]}},
    { type: 'callout', data: { style: 'worked', title: 'Example: Bank BCP', text: 'If a bank\'s headquarters catches fire, the BCP activates: critical traders are shifted to a pre-equipped backup site outside the city, IT reroutes immediately to cloud servers in another country, and PR teams send pre-drafted communications to reassure investors.' } },
    { type: 'heading', data: { text: 'Benefits vs Drawbacks', level: 3 } },
    { type: 'list', data: { style: 'bullet', items: [
      { text: '<b>Pros:</b> Minimises downtime, protects revenue, saves the brand\'s reputation during crises, and may lower insurance premiums.' },
      { text: '<b>Cons:</b> Extremely expensive to formulate, requires constant updating, and involves significant time diverted from regular operations for testing.' }
    ]}},
    { type: 'callout', data: { style: 'tip', title: 'BCP vs Crisis Management', text: 'Crisis management deals with the immediate aftermath of an event (putting the fire out). BCP deals with how the business keeps generating money while the building is burning.' } },
    { type: 'summary', data: { text: 'A Business Continuity Plan is an essential, comprehensive framework that ensures core business functions continue operating during major disruptions, though creating and maintaining such plans requires significant investment.' } },
    { id: 'enr-svg-bcp-cycle', type: 'svg', data: { caption: 'The Business Continuity Planning Cycle', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><marker id="arr-16-5" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#64748b"/></marker></defs><rect width="400" height="400" fill="#0f172a" rx="6"/><line x1="226" y1="89" x2="298" y2="141" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr-16-5)"/><line x1="314" y1="190" x2="286" y2="275" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr-16-5)"/><line x1="244" y1="305" x2="156" y2="305" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr-16-5)"/><line x1="114" y1="275" x2="86" y2="190" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr-16-5)"/><line x1="102" y1="141" x2="174" y2="89" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr-16-5)"/><circle cx="200" cy="70" r="32" fill="#3b82f6"/><text x="200" y="66" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">1. Identify</text><text x="200" y="79" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">Risks</text><circle cx="324" cy="160" r="32" fill="#8b5cf6"/><text x="324" y="156" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">2. Assess</text><text x="324" y="169" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">Impact</text><circle cx="276" cy="305" r="32" fill="#10b981"/><text x="276" y="301" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">3. Plan</text><text x="276" y="314" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">Response</text><circle cx="124" cy="305" r="32" fill="#f59e0b"/><text x="124" y="301" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">4. Test</text><text x="124" y="314" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">the Plan</text><circle cx="76" cy="160" r="32" fill="#06b6d4"/><text x="76" y="156" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">5. Review</text><text x="76" y="169" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#1e293b">&amp; Update</text><text x="200" y="193" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#374151">Business</text><text x="200" y="209" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#374151">Continuity</text><text x="200" y="225" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#374151">Cycle</text></svg>' } },
    { id: 'enr-callout-amazon', type: 'callout', data: { style: 'worked', title: 'Amazon AWS: Built-In Business Continuity', text: 'Amazon\'s AWS runs across 33 geographic regions with 105 availability zones. Each zone is an independent data centre. If one fails, traffic is rerouted instantly. This multi-zone architecture IS the business continuity plan — it makes single-point-of-failure scenarios virtually impossible.' } },
    { id: 'enr-callout-covid', type: 'callout', data: { style: 'warning', title: 'COVID-19: The Cost of No BCP', text: 'Businesses that had no remote-work continuity plan in March 2020 (COVID-19 lockdown) faced permanent closure. A Johns Hopkins study found 40% of UK hospitality businesses had no written BCP before COVID. Many never reopened.' } }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A BCP ensures operations continue during severe disruption, relying on Business Impact Analysis, recovery strategies, and extensive testing.',
    cues: [
      { id: 'c1', prompt: 'Define a Business Continuity Plan (BCP).', answer: 'A comprehensive plan detailing how a business will maintain its core operations during and after an unplanned disruption.' },
      { id: 'c2', prompt: 'What is the role of a Business Impact Analysis (BIA)?', answer: 'To identify critical business functions and quantify the consequences of a disruption to those functions.' },
      { id: 'c3', prompt: 'Why is testing essential to a BCP?', answer: 'To reveal flaws in the plan before a real crisis hits and to ensure staff understand their roles during a disaster.' },
      { id: 'c4', prompt: 'Give one major drawback of business continuity planning.', answer: 'It is highly expensive and time-consuming to create, maintain, and test.' }
    ]
  },
  evidence: [],
  mentions: []
};