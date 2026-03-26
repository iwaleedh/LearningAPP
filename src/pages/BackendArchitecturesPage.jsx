import { useState } from 'react';
import './BackendArchitecturesPage.css';

/* ─────────────────────────────────────────────
   DATA – one entry per architecture
───────────────────────────────────────────── */
const ARCHITECTURES = [
  {
    id: 'pubsub',
    label: 'Pub / Sub',
    icon: '📡',
    gradient: 'grad-pubsub',
    tagline: 'Decoupled, event-driven fan-out',
    description:
      'Publishers emit events to a message broker without knowing who listens. Subscribers independently consume messages by topic, enabling fan-out: one event triggers many independent actions.',
    pros: ['Complete publisher–subscriber decoupling', 'Fan-out: 1 message → N actions', 'Easy to add new consumers without touching producers'],
    cons: ['Harder to trace end-to-end flow', 'Eventual consistency adds complexity', 'Broker is a single point of failure if not replicated'],
    flowSteps: ['publisher', 'broker', 'subscribers'],
    nodes: [
      { id: 'pub1', label: 'Publisher A', role: 'source', col: 0 },
      { id: 'pub2', label: 'Publisher B', role: 'source', col: 0 },
      { id: 'broker', label: 'Message\nBroker', role: 'middle', col: 1 },
      { id: 'sub1', label: 'Sub: Email', role: 'target', col: 2 },
      { id: 'sub2', label: 'Sub: Audit', role: 'target', col: 2 },
      { id: 'sub3', label: 'Sub: Cache', role: 'target', col: 2 },
    ],
    edges: [
      { from: 'pub1', to: 'broker' },
      { from: 'pub2', to: 'broker' },
      { from: 'broker', to: 'sub1' },
      { from: 'broker', to: 'sub2' },
      { from: 'broker', to: 'sub3' },
    ],
  },
  {
    id: 'loadbalancer',
    label: 'Load Balancer',
    icon: '⚖️',
    gradient: 'grad-lb',
    tagline: 'Distribute traffic, eliminate hotspots',
    description:
      'A load balancer sits in front of a pool of identical instances, distributing each incoming request using round-robin, least-connections, or IP-hash algorithms. This prevents any single instance from becoming a bottleneck and masks individual failures from users.',
    pros: ['Even traffic distribution prevents overload', 'Improved availability & fault tolerance', 'Horizontal scaling by adding instances'],
    cons: ['Balancer itself can become a bottleneck', 'Session stickiness adds complexity', 'Health-check tuning required'],
    nodes: [
      { id: 'users', label: 'Users', role: 'source', col: 0 },
      { id: 'lb', label: 'Load\nBalancer', role: 'middle', col: 1 },
      { id: 'inst1', label: 'Instance A', role: 'target', col: 2 },
      { id: 'inst2', label: 'Instance B', role: 'target', col: 2 },
      { id: 'inst3', label: 'Instance C', role: 'target', col: 2 },
    ],
    edges: [
      { from: 'users', to: 'lb' },
      { from: 'lb', to: 'inst1' },
      { from: 'lb', to: 'inst2' },
      { from: 'lb', to: 'inst3' },
    ],
  },
  {
    id: 'logger',
    label: 'Centralized Logger',
    icon: '📊',
    gradient: 'grad-logger',
    tagline: 'Single source of truth for observability',
    description:
      'Log agents co-located with each service buffer and batch log records locally before shipping them to a central store (e.g. Elasticsearch, Loki). A visualization layer (Kibana, Grafana) queries the store for dashboards and alerts, giving operators a unified view.',
    pros: ['Single pane of glass for all services', 'Buffering agents absorb spikes without data loss', 'Enables cross-service correlation and tracing'],
    cons: ['Central store becomes a critical dependency', 'High-volume logs can be expensive to retain', 'Agent misconfiguration can silently drop logs'],
    nodes: [
      { id: 'src1', label: 'API Server', role: 'source', col: 0 },
      { id: 'src2', label: 'DB Server', role: 'source', col: 0 },
      { id: 'src3', label: 'Worker', role: 'source', col: 0 },
      { id: 'agent', label: 'Log\nAgents', role: 'middle', col: 1 },
      { id: 'store', label: 'Central\nStore', role: 'middle', col: 2 },
      { id: 'viz', label: 'Dashboards\n& Alerts', role: 'target', col: 3 },
    ],
    edges: [
      { from: 'src1', to: 'agent' },
      { from: 'src2', to: 'agent' },
      { from: 'src3', to: 'agent' },
      { from: 'agent', to: 'store' },
      { from: 'store', to: 'viz' },
    ],
  },
  {
    id: 'microservice',
    label: 'Microservices',
    icon: '🧩',
    gradient: 'grad-micro',
    tagline: 'Small, independent, deployable services',
    description:
      'The API Gateway is the single entry point. It routes each request to the responsible microservice. Services own their own databases (polyglot persistence) and communicate via APIs or messaging. Teams can release and scale each service independently.',
    pros: ['Independent deployments per team', 'Polyglot persistence (right DB for each service)', 'Fine-grained horizontal scaling'],
    cons: ['Distributed system complexity', 'Cross-service transactions are hard', 'Network latency and failure modes multiply'],
    nodes: [
      { id: 'clients', label: 'Clients', role: 'source', col: 0 },
      { id: 'gateway', label: 'API\nGateway', role: 'middle', col: 1 },
      { id: 'orders', label: '📦 Order\nService', role: 'target', col: 2 },
      { id: 'users', label: '👤 User\nService', role: 'target', col: 2 },
      { id: 'products', label: '🛍 Product\nService', role: 'target', col: 2 },
    ],
    edges: [
      { from: 'clients', to: 'gateway' },
      { from: 'gateway', to: 'orders' },
      { from: 'gateway', to: 'users' },
      { from: 'gateway', to: 'products' },
    ],
  },
  {
    id: 'monolith',
    label: 'Monolithic',
    icon: '🏛️',
    gradient: 'grad-mono',
    tagline: 'All modules in a single deployable unit',
    description:
      'All application modules (Users, Orders, Payments) are packaged and deployed together as one process. They share a single database. Simple to develop and test in early stages, but tight coupling makes independent scaling and deployment impossible.',
    pros: ['Simple local development & testing', 'No network latency between modules', 'Easy transactional consistency'],
    cons: ['Hard to scale individual modules', 'Large codebase becomes increasingly complex', 'One deploy affects all modules'],
    nodes: [
      { id: 'client', label: 'Client', role: 'source', col: 0 },
      { id: 'mono', label: '🏛️ Monolith\n(Users | Orders | Payments)', role: 'middle', col: 1 },
      { id: 'db', label: 'Shared DB', role: 'target', col: 2 },
    ],
    edges: [
      { from: 'client', to: 'mono' },
      { from: 'mono', to: 'db' },
    ],
  },
  {
    id: 'serverless',
    label: 'Serverless',
    icon: '⚡',
    gradient: 'grad-serverless',
    tagline: 'Event-driven, auto-scaling, pay-per-use',
    description:
      'Triggers (HTTP requests, queue events, cron jobs) invoke ephemeral compute functions that spin up and tear down automatically. Functions delegate persistence and messaging to managed services. Scales to zero during idle periods, eliminating fixed infrastructure costs.',
    pros: ['Auto-scales instantly to demand spikes', 'Scale-to-zero eliminates idle costs', 'No server provisioning or patching'],
    cons: ['Cold-start latency on first invocation', 'Difficult to run long-running workloads', 'Vendor lock-in risk'],
    nodes: [
      { id: 'http', label: 'HTTP\nTrigger', role: 'source', col: 0 },
      { id: 'queue', label: 'Queue\nEvent', role: 'source', col: 0 },
      { id: 'cron', label: 'Cron\nTrigger', role: 'source', col: 0 },
      { id: 'fn', label: '⚡ Ephemeral\nFunctions', role: 'middle', col: 1 },
      { id: 'svc1', label: 'Object\nStorage', role: 'target', col: 2 },
      { id: 'svc2', label: 'Managed\nDB', role: 'target', col: 2 },
      { id: 'svc3', label: 'Message\nQueue', role: 'target', col: 2 },
    ],
    edges: [
      { from: 'http', to: 'fn' },
      { from: 'queue', to: 'fn' },
      { from: 'cron', to: 'fn' },
      { from: 'fn', to: 'svc1' },
      { from: 'fn', to: 'svc2' },
      { from: 'fn', to: 'svc3' },
    ],
  },
];

/* ─────────────────────────────────────────────
   FLOW DIAGRAM
───────────────────────────────────────────── */
function FlowDiagram({ arch, active }) {
  const colGroups = {};
  arch.nodes.forEach((n) => {
    if (!colGroups[n.col]) colGroups[n.col] = [];
    colGroups[n.col].push(n);
  });
  const cols = Object.keys(colGroups).map(Number).sort((a, b) => a - b);

  return (
    <div className={`flow-diagram ${active ? 'flow-active' : ''}`}>
      {cols.map((col) => (
        <div key={col} className="flow-col">
          {colGroups[col].map((node) => (
            <div key={node.id} className={`flow-node flow-node--${node.role}`}>
              <span className="flow-node-label">{node.label}</span>
            </div>
          ))}
        </div>
      ))}

      {/* animated arrows between cols */}
      {cols.slice(0, -1).map((col) => (
        <div key={`arrow-${col}`} className="flow-arrow-col">
          <div className="flow-arrow-track">
            <div className="flow-arrow-pulse" />
            <span className="flow-arrow-icon">→</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function ArchCard({ arch, isActive, onClick }) {
  return (
    <div
      className={`arch-card ${arch.gradient} ${isActive ? 'arch-card--active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="arch-card-header">
        <span className="arch-icon">{arch.icon}</span>
        <div>
          <h3 className="arch-title">{arch.label}</h3>
          <p className="arch-tagline">{arch.tagline}</p>
        </div>
        <span className={`arch-expand-icon ${isActive ? 'rotated' : ''}`}>▼</span>
      </div>

      {isActive && (
        <div className="arch-card-body">
          <FlowDiagram arch={arch} active={isActive} />

          <p className="arch-description">{arch.description}</p>

          <div className="arch-pros-cons">
            <div className="pros-col">
              <h4>✅ Advantages</h4>
              <ul>
                {arch.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div className="cons-col">
              <h4>⚠️ Trade-offs</h4>
              <ul>
                {arch.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function BackendArchitecturesPage() {
  const [activeId, setActiveId] = useState('pubsub');

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div className="ba-page">
      <div className="ba-hero">
        <h1 className="ba-hero-title">
          <span className="ba-hero-accent">Backend</span> Architecture Patterns
        </h1>
        <p className="ba-hero-sub">
          Click any pattern to explore its flow diagram, strengths, and trade-offs.
        </p>
      </div>

      <div className="ba-grid">
        {ARCHITECTURES.map((arch) => (
          <ArchCard
            key={arch.id}
            arch={arch}
            isActive={activeId === arch.id}
            onClick={() => toggle(arch.id)}
          />
        ))}
      </div>
    </div>
  );
}
