const fs = require('fs');
const path = require('path');

const notes = {
  0: {
    title: "Corporate culture types",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Understand the different types of corporate culture and how they influence business decisions." } },
      { id: "h-1", type: "heading", data: { text: "What is Corporate Culture?", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "Corporate culture refers to the shared values, beliefs, attitudes, and norms that influence the behaviour of employees within an organisation. It determines 'the way we do things around here' and heavily influences decision-making, employee motivation, and company performance." } },
      { id: "c-1", type: "callout", data: { style: "key", title: "Key Concept", text: "Charles Handy theorised four main types of organisational culture: Power, Role, Task, and Person cultures, which classify how authority, rules, and value are distributed." } },
      { id: "h-2", type: "heading", data: { text: "Handy’s Four Types of Culture", level: 3 } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Power Culture:</strong> Control radiates from a central figure or small group. Swift decision-making, but heavy reliance on the leader. Common in small, entrepreneurial businesses." },
        { text: "<strong>Role Culture:</strong> Bureaucratic, highly structured, with clear rules and procedures. Power comes from job title rather than the individual. Common in large public sector organisations." },
        { text: "<strong>Task Culture:</strong> Team-driven and project-focused. Power derives from expertise required to solve particular problems. Very adaptable and common in dynamic environments like advertising." },
        { text: "<strong>Person Culture:</strong> Individuals see themselves as superior to the organisation. Collection of professionals functioning together. Common in law firms or medical practices." }
      ] } },
      { id: "c-2", type: "callout", data: { style: "tip", title: "Exam Tip", text: "Be prepared to analyse which culture is most appropriate for a specific business context described in a case study. A task culture often suits businesses needing high innovation." } },
      { id: "h-3", type: "heading", data: { text: "Analysing Cultural Impact", level: 3 } },
      { id: "tbl-1", type: "comparisonTable", data: {
        caption: "Comparing Power and Role Cultures",
        headers: ["Feature", "Power Culture", "Role Culture"],
        rows: [
          ["Decision Making", "Fast, centralized", "Slow, methodical"],
          ["Flexibility", "High, depends on leader", "Low, bound by rules"],
          ["Employee Motivation", "Can be high if close to leader", "Provides security, but can feel restrictive"],
          ["Best Suited For", "Start-ups, aggressive scale-ups", "Stable, predictable environments"]
        ]
      } },
      { id: "sum-1", type: "summary", data: { text: "Corporate culture is the blueprint for employee behaviour and decision-making. Managers must identify whether their existing culture (power, role, task, or person) aligns with their strategic objectives." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Corporate culture defines shared values. Handy classifies it into power, role, task, and person cultures.",
      cues: [
        { id: "cue-1", blockId: "p-1", prompt: "What is corporate culture?", answer: "The shared values, norms, and beliefs that shape employee behaviour ('the way things are done')." },
        { id: "cue-2", blockId: "c-1", prompt: "What are Charles Handy's four cultural types?", answer: "Power, Role, Task, and Person cultures." },
        { id: "cue-3", blockId: "l-1", prompt: "Explain a 'task culture'.", answer: "A project-focused culture where power derives from expertise and teams are formed to solve specific problems." },
        { id: "cue-4", blockId: "tbl-1", prompt: "What are the advantages of a power culture?", answer: "Swift decision-making and strong leadership direction, often well-suited to entrepreneurial start-ups." }
      ]
    }`
  },
  1: {
    title: "Culture formation and change barriers",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Explore how corporate culture is formed and the barriers that exist when trying to change it." } },
      { id: "h-1", type: "heading", data: { text: "How is Corporate Culture Formed?", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "A company's culture is typically shaped by its founders and early leaders. Over time, it is reinforced by recruitment practices, the reward system, training, and the stories or 'myths' shared among employees." } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Leadership:</strong> The founder's vision and subsequent leadership styles set the tone." },
        { text: "<strong>Recruitment:</strong> Hiring individuals who 'fit' the existing culture reinforces it." },
        { text: "<strong>Reward Structures:</strong> Compensating specific behaviours encourages their repetition." },
        { text: "<strong>History and Traditions:</strong> Past successes, failures, and how they were handled become part of the company's folklore." }
      ] } },
      { id: "c-1", type: "callout", data: { style: "key", title: "Why Change Corporate Culture?", text: "Businesses may need to change culture due to declining performance, a new strategic direction, a merger/acquisition, or shifts in the external environment (e.g., changing consumer ethics)." } },
      { id: "h-2", type: "heading", data: { text: "Barriers to Cultural Change", level: 2 } },
      { id: "p-2", type: "paragraph", data: { text: "Culture is deeply ingrained, making it notoriously difficult to alter. Changing it requires altering human behaviour and long-held beliefs." } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Employee Resistance:</strong> Fear of the unknown, loss of status, or comfort with current habits." },
        { text: "<strong>Lack of Leadership Alignment:</strong> If senior management does not role-model the new culture, employees will not adopt it." },
        { text: "<strong>Inappropriate Reward Systems:</strong> Expecting teamwork but continuing to solely reward individual performance." },
        { text: "<strong>Deep-Rooted Traditions:</strong> 'We\\'ve always done it this way' mindset." }
      ] } },
      { id: "c-2", type: "callout", data: { style: "worked", title: "Real-World Context: Mergers", text: "When two companies merge, culture clashes are common. If an entrepreneurial 'power culture' company buys a highly bureaucratic 'role culture' firm, immense friction will occur unless a strategy is deployed to integrate them." } },
      { id: "sum-1", type: "summary", data: { text: "Culture is formed by leadership, history, and rewards. Changing it is a long, difficult process often blocked by employee resistance and misaligned leadership." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Culture forms through leadership and history, but is hard to change due to employee resistance and deep-rooted habits.",
      cues: [
        { id: "cue-1", blockId: "p-1", prompt: "State three factors that shape corporate culture.", answer: "The founders/leaders, recruitment practices, and reward systems." },
        { id: "cue-2", blockId: "c-1", prompt: "Why might a business attempt to change its culture?", answer: "Due to declining performance, new strategy, mergers, or changes in the external environment." },
        { id: "cue-3", blockId: "l-2", prompt: "What is a major barrier to changing corporate culture?", answer: "Employee resistance stemming from fear of the unknown or comfort with the status quo." },
        { id: "cue-4", blockId: "c-2", prompt: "Why are mergers often problematic regarding culture?", answer: "Because the merging companies may have fundamentally different cultures, leading to clashes and reduced productivity." }
      ]
    }`
  },
  2: {
    title: "Internal and external stakeholders",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Identify internal and external stakeholders and understand their varied interests in a business." } },
      { id: "h-1", type: "heading", data: { text: "Understanding Stakeholders", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "A stakeholder is any individual, group, or organisation that is affected by, or can affect, the operations and decisions of a business. They can be broadly categorised into internal and external stakeholders." } },
      { id: "c-1", type: "callout", data: { style: "key", title: "Definition", text: "<strong>Internal stakeholders</strong> operate within the organisation. <strong>External stakeholders</strong> exist outside the organisation but are still impacted by its actions." } },
      { id: "h-2", type: "heading", data: { text: "Internal Stakeholders", level: 3 } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Employees:</strong> Provide labour. Interested in job security, fair pay, good working conditions, and promotion opportunities." },
        { text: "<strong>Managers/Directors:</strong> Run the business. Interested in performance targets, bonuses, status, and company growth." },
        { text: "<strong>Shareholders (Owners):</strong> Provide capital. Interested in dividends, share price growth, and long-term financial stability." }
      ] } },
      { id: "h-3", type: "heading", data: { text: "External Stakeholders", level: 3 } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Customers:</strong> Purchase goods/services. Interested in high-quality products, fair prices, and reliable service." },
        { text: "<strong>Suppliers:</strong> Provide resources. Interested in prompt payments, regular orders, and fair treatment." },
        { text: "<strong>Local Community:</strong> Lives near operations. Interested in local job creation, minimal pollution, and positive community engagement." },
        { text: "<strong>Government:</strong> Regulates and taxes. Interested in legal compliance, job creation, and tax revenue." },
        { text: "<strong>Pressure Groups:</strong> Campaign on issues. Interested in ethical behaviour, environmental sustainability, and human rights." }
      ] } },
      { id: "c-2", type: "callout", data: { style: "tip", title: "Examiner Tip", text: "When evaluating a business decision, always consider its impact on at least two differing stakeholder groups (e.g., how closing a factory impacts both shareholders and the local community)." } },
      { id: "sum-1", type: "summary", data: { text: "Stakeholders are divided into internal (employees, managers, shareholders) and external (customers, suppliers, government, community) groups. Each has distinct interests connected to the business's operations." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Stakeholders are groups affected by a business, split into internal (employees, owners) and external (customers, government).",
      cues: [
        { id: "cue-1", blockId: "p-1", prompt: "Define what a stakeholder is.", answer: "Any individual or group that affects or is affected by a business's operations." },
        { id: "cue-2", blockId: "l-1", prompt: "Give three examples of internal stakeholders.", answer: "Employees, Managers/Directors, and Shareholders." },
        { id: "cue-3", blockId: "l-2", prompt: "What are the primary interests of suppliers as stakeholders?", answer: "Prompt payment, regular consistent orders, and fair treatment." },
        { id: "cue-4", blockId: "l-2", prompt: "Give an example of an external stakeholder and their main interest.", answer: "Customers: interested in high-quality, fairly priced, and safe products." }
      ]
    }`
  },
  3: {
    title: "Stakeholder objectives",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Analyse the differing objectives of various stakeholder groups and how they can lead to conflict." } },
      { id: "h-1", type: "heading", data: { text: "Differing Objectives", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "Because stakeholders have different relationships with a business, their objectives frequently diverge. Understanding these separate motives is crucial for business leaders aiming to navigate complex strategic environments." } },
      { id: "tbl-1", type: "comparisonTable", data: {
        caption: "Summary of Key Stakeholder Objectives",
        headers: ["Stakeholder Group", "Primary Objectives"],
        rows: [
          ["Shareholders", "Maximise profits, high dividends, rising share value"],
          ["Employees", "High wages, job security, good working conditions"],
          ["Customers", "Low prices, high quality, excellent customer service"],
          ["Local Community", "Job creation, low noise/pollution, local investment"],
          ["Government", "Tax revenue, legal compliance, employment levels"]
        ]
      } },
      { id: "h-2", type: "heading", data: { text: "Stakeholder Conflict", level: 2 } },
      { id: "p-2", type: "paragraph", data: { text: "Satisfying one stakeholder group often requires compromising the objectives of another. A classic business challenge is balancing these competing interests." } },
      { id: "c-1", type: "callout", data: { style: "warning", title: "Common Conflicts", text: "<strong>Shareholders vs. Employees:</strong> Shareholders want cost minimization for higher profits; employees want higher wages (which increase costs).\\n<strong>Customers vs. Shareholders:</strong> Customers want low prices; shareholders want high margins.\\n<strong>Community vs. Shareholders:</strong> Operations (like a 24/7 factory) maximize profits but create noise/pollution for the community." } },
      { id: "h-3", type: "heading", data: { text: "Managing Conflict", level: 3 } },
      { id: "p-3", type: "paragraph", data: { text: "Businesses must prioritise stakeholders based on power and influence. Good communication, negotiation, and compromise (e.g., offering performance bonuses to align employee and shareholder interests) are essential tools for conflict resolution." } },
      { id: "sum-1", type: "summary", data: { text: "Stakeholder objectives naturally conflict, especially regarding financial distribution. Effective management requires prioritizing groups and finding strategic compromises to maintain operational harmony." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Stakeholders have diverse objectives which often conflict, requiring businesses to negotiate and compromise.",
      cues: [
        { id: "cue-1", blockId: "c-1", prompt: "What is a primary conflict between shareholders and employees?", answer: "Shareholders want to minimize costs for higher profits, while employees want higher wages, which increases costs." },
        { id: "cue-2", blockId: "tbl-1", prompt: "What are the common objectives of the local community?", answer: "Job creation, minimal pollution, and positive local engagement." },
        { id: "cue-3", blockId: "p-3", prompt: "How might a business align management and shareholder objectives?", answer: "By linking executive pay or bonuses to profit targets or share price performance." },
        { id: "cue-4", blockId: "tbl-1", prompt: "What is the typical objective of a customer?", answer: "High-quality products at the lowest possible prices with good service." }
      ]
    }`
  },
  4: {
    title: "Stakeholder vs shareholder models",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Evaluate the shareholder approach versus the stakeholder approach to business strategy." } },
      { id: "h-1", type: "heading", data: { text: "The Shareholder Concept", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "The shareholder concept (or shareholder primacy) suggests that a business's sole responsibility is to its owners (shareholders). Pioneered by economist Milton Friedman, this view argues that maximizing profit and shareholder returns is the ultimate goal." } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Focus:</strong> Short-term profit maximization, high dividends, and share price growth." },
        { text: "<strong>Decision Making:</strong> Investments are judged strictly on financial return." },
        { text: "<strong>Criticism:</strong> Can lead to short-termism, exploitation of workers, and environmental damage." }
      ] } },
      { id: "h-2", type: "heading", data: { text: "The Stakeholder Concept", level: 2 } },
      { id: "p-2", type: "paragraph", data: { text: "The stakeholder model argues that businesses owe a responsibility to a wider range of groups, not just owners. It emphasizes long-term sustainability and ethical behaviour." } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Focus:</strong> Balancing the needs of employees, customers, the community, and shareholders." },
        { text: "<strong>Decision Making:</strong> Takes holistic social, environmental, and financial impacts into account." },
        { text: "<strong>Benefits:</strong> Builds better brand reputation, increases employee loyalty, and ensures long-term survival." }
      ] } },
      { id: "c-1", type: "callout", data: { style: "key", title: "A Shift in Modern Business", text: "While the shareholder model dominated the late 20th century, modern businesses are increasingly adopting the stakeholder model to maintain public trust and navigate a highly connected, socially conscious world." } },
      { id: "tbl-1", type: "comparisonTable", data: {
        caption: "Shareholder vs. Stakeholder Model",
        headers: ["Feature", "Shareholder Model", "Stakeholder Model"],
        rows: [
          ["Primary Goal", "Profit maximization", "Value creation for all"],
          ["Time Horizon", "Often Short-term", "Long-term"],
          ["View of Employees", "A cost to be minimized", "An asset to be developed"],
          ["Corporate Image", "Vulnerable to ethical criticism", "Often stronger and more resilient"]
        ]
      } },
      { id: "sum-1", type: "summary", data: { text: "The shareholder model focuses purely on profit and owner returns, while the stakeholder model seeks a balance among all affected parties. Businesses are increasingly moving toward the stakeholder model for long-term sustainability." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "The shareholder model focuses on profit maximization for owners, whereas the stakeholder model balances needs across all groups.",
      cues: [
        { id: "cue-1", blockId: "p-1", prompt: "What is the core principle of the shareholder model?", answer: "That a business's primary responsibility is to maximize profit and returns for its owners." },
        { id: "cue-2", blockId: "l-1", prompt: "What is a major criticism of the shareholder concept?", answer: "It can lead to 'short-termism', exploiting workers, or ignoring environmental issues for quick profits." },
        { id: "cue-3", blockId: "p-2", prompt: "Describe the stakeholder concept.", answer: "The view that businesses have responsibilities to a broad range of groups (employees, community, etc.), not just owners." },
        { id: "cue-4", blockId: "l-2", prompt: "Why might a firm voluntarily adopt a stakeholder approach?", answer: "To build long-term brand loyalty, improve employee motivation, and establish a sustainable business model." }
      ]
    }`
  },
  5: {
    title: "Profit and ethics trade-offs",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Explore the relationship between pursuing profit and acting ethically, including potential trade-offs." } },
      { id: "h-1", type: "heading", data: { text: "Business Ethics", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "Business ethics refers to the moral principles that guide how a company conducts its operations. Acting ethically often involves going beyond legal requirements to do what is 'right' (e.g., paying a living wage rather than just minimum wage, or refusing to source from unethical suppliers)." } },
      { id: "h-2", type: "heading", data: { text: "The Trade-off: Ethics vs. Profit", level: 2 } },
      { id: "p-2", type: "paragraph", data: { text: "A frequent dilemma in business is that ethical decisions often increase costs in the short term, thereby reducing immediate profit margins." } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Sourcing:</strong> Fairtrade materials cost more than standard materials." },
        { text: "<strong>Environment:</strong> Installing pollution controls or using renewable energy requires heavy capital investment." },
        { text: "<strong>Labour:</strong> Paying workers a living wage and providing superior working conditions increases the wage bill." }
      ] } },
      { id: "c-1", type: "callout", data: { style: "worked", title: "Ethical Trade-off Example", text: "A clothing retailer considers moving production from a low-wage, loosely regulated factory in Bangladesh to a closely monitored, higher-wage factory in Europe. The ethical benefit is improved worker welfare. The trade-off is significantly higher production costs, which may reduce profit margins or force price increases, potentially losing price-sensitive customers." } },
      { id: "h-3", type: "heading", data: { text: "Can Ethics Increase Profit?", level: 3 } },
      { id: "p-3", type: "paragraph", data: { text: "While there is a short-term trade-off, acting ethically can be highly profitable in the long term. Ethical behaviour can act as a Unique Selling Point (USP)." } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Brand Loyalty:</strong> Consumers increasingly prefer ethical brands and may pay premium prices." },
        { text: "<strong>Recruitment:</strong> High-quality staff prefer working for companies with good reputations." },
        { text: "<strong>Risk Mitigation:</strong> Ethical firms are less likely to face PR disasters, boycotts, or future government fines." }
      ] } },
      { id: "sum-1", type: "summary", data: { text: "In the short term, ethical practices usually increase costs and lower profits. However, in the long term, strong ethics can enhance reputation, create a USP, and build customer loyalty, potentially leading to higher profitability." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Ethical behaviour often increases short-term costs and reduces profit, but can build a long-term profitable USP through brand loyalty.",
      cues: [
        { id: "cue-1", blockId: "p-2", prompt: "How does acting ethically usually affect short-term profits?", answer: "It reduces short-term profits because ethical practices (like fair wages or green materials) typically increase costs." },
        { id: "cue-2", blockId: "p-3", prompt: "What is a potential long-term financial benefit of acting ethically?", answer: "It can create a USP, allowing the firm to charge premium prices and building strong customer loyalty." },
        { id: "cue-3", blockId: "l-1", prompt: "Give an example of an ethical trade-off in supply chains.", answer: "Choosing more expensive Fairtrade suppliers over cheaper standard suppliers, cutting margins to ensure fair farmer pay." },
        { id: "cue-4", blockId: "l-2", prompt: "How does ethical behaviour impact recruitment?", answer: "It helps attract and retain high-quality talent who prefer to work for responsible, reputable businesses." }
      ]
    }`
  },
  6: {
    title: "Corporate social responsibility",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Understand the concept of Corporate Social Responsibility (CSR) and its implications for business." } },
      { id: "h-1", type: "heading", data: { text: "What is Corporate Social Responsibility (CSR)?", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "CSR is the practice of integrating social and environmental concerns into a business's operations and its interactions with stakeholders. It involves taking responsibility for the firm's impacts on society beyond simply obeying the law." } },
      { id: "c-1", type: "callout", data: { style: "key", title: "Elements of CSR", text: "CSR policies typically focus on sustainability (carbon footprint, recycling), employee welfare, community investment (charity, local sponsorships), and ethical supply chain management." } },
      { id: "h-2", type: "heading", data: { text: "Advantages of Implementing CSR", level: 3 } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Enhanced Brand Image:</strong> Exceptional PR and appealing to conscious consumers." },
        { text: "<strong>Employee Retention:</strong> Staff turnover is often lower in firms that employees are proud of." },
        { text: "<strong>Investor Appeal:</strong> Ethically-minded investment funds will only invest in CSR-compliant firms." }
      ] } },
      { id: "h-3", type: "heading", data: { text: "Drawbacks and Criticisms of CSR", level: 3 } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Cost:</strong> Implementing robust CSR initiatives is expensive and diverts funds from shareholders or core R&D." },
        { text: "<strong>Consumer Disinterest:</strong> During economic downturns, consumers often prioritize low prices over ethical credibility." },
        { text: "<strong>'Greenwashing':</strong> Businesses may be accused of using superficial CSR claims merely as a marketing gimmick without making real operational changes." }
      ] } },
      { id: "c-2", type: "callout", data: { style: "warning", title: "Greenwashing", text: "Greenwashing occurs when a company spends more time and money marketing themselves as environmentally friendly than actually minimizing their environmental impact. This destroys trust when exposed." } },
      { id: "sum-1", type: "summary", data: { text: "CSR integrates societal and environmental welfare into business operations. While it boosts brand image and employee morale, it entails significant costs and risks accusations of superficial 'greenwashing' if not authentic." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "CSR involves taking responsibility for a firm's societal and environmental impacts. It boosts public image but is costly.",
      cues: [
        { id: "cue-1", blockId: "p-1", prompt: "Define Corporate Social Responsibility (CSR).", answer: "The integration of social and environmental concerns into business operations on a voluntary basis." },
        { id: "cue-2", blockId: "l-1", prompt: "List two benefits of a strong CSR policy.", answer: "Enhanced brand reputation and improved employee motivation/retention." },
        { id: "cue-3", blockId: "l-2", prompt: "What is a major financial drawback of CSR?", answer: "It can be highly expensive to implement, potentially reducing shareholder dividends or increasing product prices." },
        { id: "cue-4", blockId: "c-2", prompt: "What does the term 'greenwashing' mean?", answer: "Deceptively promoting a company as ethical or environmentally friendly to boost PR, without making substantial real-world changes." }
      ]
    }`
  },
  7: {
    title: "Executive pay and reward ethics",
    content: `[
      { id: "obj-1", type: "objective", data: { text: "Examine the ethical issues surrounding executive pay and the controversy over the widening pay gap." } },
      { id: "h-1", type: "heading", data: { text: "The Controversy of Executive Pay", level: 2 } },
      { id: "p-1", type: "paragraph", data: { text: "The remuneration of Chief Executive Officers (CEOs) and senior directors has become a major ethical flashpoint. Executive pay—comprising base salaries, bonuses, and stock options—has grown exponentially faster than the wages of ordinary workers." } },
      { id: "c-1", type: "callout", data: { style: "key", title: "The Ratio", text: "The ratio comparing CEO pay to the average worker's pay has skyrocketed in recent decades, sparking debates about fairness, income inequality, and the actual value added by senior leaders." } },
      { id: "h-2", type: "heading", data: { text: "Arguments Defending High Executive Pay", level: 3 } },
      { id: "l-1", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Market Forces:</strong> Top executive talent is rare; high pay is necessary to attract and retain the best leaders globally." },
        { text: "<strong>Responsibility:</strong> CEOs bear the ultimate responsibility for thousands of employees and millions in shareholder funds. Risk warrants reward." },
        { text: "<strong>Performance Linked:</strong> Much of executive pay is tied to performance (e.g., share options), meaning they only get rich if the shareholders get rich." }
      ] } },
      { id: "h-3", type: "heading", data: { text: "Ethical Criticisms of High Executive Pay", level: 3 } },
      { id: "l-2", type: "list", data: { style: "bullet", items: [
        { text: "<strong>Rewards Failure:</strong> Executives often receive massive 'golden parachute' payouts even if they fired thousands of workers or the company performed poorly." },
        { text: "<strong>Demotivating to Workforce:</strong> A massive disparity can demoralize ordinary workers, leading to 'them vs. us' cultures." },
        { text: "<strong>Short-termism:</strong> Tying bonuses to short-term share price metrics can encourage executives to make reckless decisions that harm long-term viability just to trigger a payout." }
      ] } },
      { id: "c-2", type: "callout", data: { style: "tip", title: "Exam Tip", text: "When discussing ethics in exams, executive pay is an excellent evaluative point. Contrast the need for competitive talent retention against the PR damage and employee demotivation it can cause." } },
      { id: "sum-1", type: "summary", data: { text: "The vast divide between executive pay and average worker wages presents an ethical dilemma. While high pay is defended as necessary to attract elite talent and is linked to performance, it is criticized for fueling inequality and rewarding short-term thinking." } }
    ]`,
    recall: `{
      enabled: true,
      ready: true,
      summaryText: "Massive executive pay is defended by market demand for talent but criticized for promoting inequality and short-termism.",
      cues: [
        { id: "cue-1", blockId: "l-1", prompt: "Why do companies argue that high CEO pay is necessary?", answer: "To attract and retain globally rare top talent capable of managing massive, complex organizations." },
        { id: "cue-2", blockId: "l-2", prompt: "Explain one ethical criticism of executive pay structures.", answer: "Executives are sometimes rewarded massively even when the company undergoes redundancies or performs poorly." },
        { id: "cue-3", blockId: "l-2", prompt: "How can high executive rewards cause 'short-termism'?", answer: "If bonuses are tied to short-term share prices, CEOs may make risky decisions for quick stock boosts, harming long-term stability." },
        { id: "cue-4", blockId: "l-2", prompt: "What impact can a large pay gap have on standard employees?", answer: "It can demoralize them, reducing motivation and creating a toxic 'them versus us' organizational culture." }
      ]
    }`
  }
};

for (let i = 0; i <= 7; i++) {
  const fileContent = "export const note_business_3_14_" + i + " = {\n" +
  "  pdfPath: '/notes/business/wbs13-14.pdf',\n" +
  "  blocks: " + notes[i].content + ",\n" +
  "  recall: " + notes[i].recall + ",\n" +
  "  evidence: [],\n" +
  "  mentions: []\n" +
  "};\n";

  const fp = path.join(__dirname, 'src', 'data', 'seedNotes', 'business', "note_3_14_" + i + ".js");
  fs.writeFileSync(fp, fileContent, 'utf8');
}
