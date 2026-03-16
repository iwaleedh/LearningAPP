export const note_business_1_5_1 = {
  pdfPath: '/notes/business/wbs11-1.pdf',
  blocks: [
    {
      id: 'obj-1.5.1-1',
      type: 'objective',
      data: {
        text: 'Understand the concept of intrapreneurship and how it benefits a business.'
      }
    },
    {
      id: 'h-1.5.1-1',
      type: 'heading',
      data: { text: 'What is Intrapreneurship?', level: 2 }
    },
    {
      id: 'p-1.5.1-1',
      type: 'paragraph',
      data: { text: 'Intrapreneurship refers to employees who use entrepreneurial skills to find and develop initiatives that will have financial benefits for their employer. Essentially, they act like an entrepreneur but within an established organization.' }
    },
    {
      id: 'call-1.5.1-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Concept: Intrapreneur',
        text: 'An employee who behaves like an entrepreneur inside a large organization, using its resources to innovate.'
      }
    },
    {
      id: 'tbl-1.5.1-1',
      type: 'comparisonTable',
      data: {
        caption: 'Entrepreneur vs Intrapreneur',
        headers: ['Feature', 'Entrepreneur', 'Intrapreneur'],
        rows: [
          ['Risk', 'Personal financial risk', 'Company takes the risk'],
          ['Reward', 'Keeps the profit', 'Salary/bonus, company keeps profit'],
          ['Resources', 'Has to raise capital', 'Uses company resources'],
          ['Decision Making', 'Complete autonomy', 'Subject to corporate approval']
        ]
      }
    },
    {
      id: 'call-1.5.1-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example',
        text: 'Google allowing employees 20% of their time to work on personal projects led to the creation of Gmail, a prime example of intrapreneurship.'
      }
    },
    {
      id: 'summary-1.5.1',
      type: 'summary',
      data: {
        text: 'Intrapreneurs are innovative employees who act like entrepreneurs within an existing business, driving growth without bearing personal financial risk.'
      }
    },
    {
      id: 'enr-t5a-1-benefits',
      type: 'paragraph',
      data: {
        text: 'Businesses that actively promote intrapreneurship tap into the creative potential of their workforce and generate new products, services, or processes that drive competitive advantage. It also creates a culture of ownership and engagement, which increases motivation and helps retain top talent. To encourage this, businesses may provide dedicated time, funding, or incentives for employee-led projects.'
      }
    },
    {
      id: 'enr-t5a-1-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Sony PlayStation: Engineers at Sony proposed a video game console in the early 1990s. Senior management initially rejected the idea, but the engineers persisted. Sony PlayStation launched in 1994 and became one of the most popular consoles of all time.' },
          { text: '3M Post-It Notes: 3M\'s "15% rule" allows employees to spend 15% of work time on personal projects. This led Spencer Silver and Art Fry to develop Post-It Notes — now generating billions in annual revenue for 3M.' }
        ]
      }
    },
    {
      id: 'enr-t5a-1-bezos',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Real World: Jeff Bezos & Amazon',
        text: 'Jeff Bezos built Amazon\'s culture around intrapreneur-style thinking — famously requiring employees to write 6-page narrative memos before pitching new ideas, holding teams to high standards of innovation. Internal initiatives like Amazon Web Services (AWS), originally an internal infrastructure project, became a standalone business generating over $90bn annually. Bezos fostered intrapreneurship at scale, making it a core driver of Amazon\'s diversification.'
      }
    },
    {
      id: 'enr-t5a-1-student',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Relatable Example: Student Podcast for School',
        text: 'A student who proposes and runs a school revision podcast as part of their sixth-form society is acting as an intrapreneur — using the school\'s resources (microphone, recording space, social media channels) to create something new, without bearing personal financial risk. If successful, it benefits the institution while the student gains experience and recognition.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Intrapreneurs are innovative employees who act like entrepreneurs within an existing business, driving growth without bearing personal financial risk.',
    cues: [
      { id: 'cue-1.5.1-1', blockId: 'p-1.5.1-1', prompt: 'Define intrapreneurship.', answer: 'Employees using entrepreneurial skills to develop initiatives within an established organization.' },
      { id: 'cue-1.5.1-2', blockId: 'tbl-1.5.1-1', prompt: 'Who carries the financial risk for an intrapreneur?', answer: 'The employing organization/company, not the individual.' },
      { id: 'cue-1.5.1-3', blockId: 'tbl-1.5.1-1', prompt: 'State one difference between entrepreneurs and intrapreneurs.', answer: 'Entrepreneurs take personal risk and keep profits, whereas intrapreneurs use company resources and receive a salary/bonus.' },
      { id: 'cue-1.5.1-4', blockId: 'call-1.5.1-1', prompt: 'Why might a business encourage intrapreneurship?', answer: 'It drives innovation, improves efficiency, and helps retain creative talent.' }
    ]
  },
  evidence: [],
  mentions: []
};
