/**
 * FlowchartTool — Fabric.js helpers for creating and connecting flowchart nodes/edges.
 *
 * Nodes are Fabric.js Groups (shape + IText label).
 * Edges are Fabric.js Lines connecting node anchor points, redrawn on node move.
 */
import {
  Group, Rect, Circle, Polygon, IText, Line, Triangle,
} from 'fabric';

// ── Constants ──────────────────────────────────────────────────────────────────
const GRID = 20;
const NODE_W = 140;
const NODE_H = 60;
const LABEL_DEFAULTS = {
  fontSize: 14,
  fontFamily: 'Inter, sans-serif',
  fill: '#1f2937',
  textAlign: 'center',
  originX: 'center',
  originY: 'center',
  editable: true,
};
const COLORS = {
  process: '#3b82f6',
  decision: '#f59e0b',
  terminal: '#10b981',
};

/**
 * Snap a value to the nearest grid point.
 */
export function snapToGrid(val) {
  return Math.round(val / GRID) * GRID;
}

// ── Node creators ──────────────────────────────────────────────────────────────

function makeId() {
  return 'fc_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
}

/**
 * Create a "Process" node — plain rectangle with label.
 */
export function createProcessNode(x, y, label = 'Process', strokeColor) {
  const col = strokeColor || COLORS.process;
  const shape = new Rect({
    width: NODE_W,
    height: NODE_H,
    fill: col + '18',
    stroke: col,
    strokeWidth: 2,
    rx: 4,
    ry: 4,
    originX: 'center',
    originY: 'center',
  });
  const text = new IText(label, {
    ...LABEL_DEFAULTS,
    left: 0,
    top: 0,
  });
  const group = new Group([shape, text], {
    left: snapToGrid(x),
    top: snapToGrid(y),
    subTargetCheck: true,
  });
  group.data = { fcNodeId: makeId(), fcType: 'process', strokeClientId: 'fc_stroke_' + Date.now() };
  return group;
}

/**
 * Create a "Decision" node — diamond shape with label.
 */
export function createDecisionNode(x, y, label = 'Decision', strokeColor) {
  const col = strokeColor || COLORS.decision;
  const hw = NODE_W / 2;
  const hh = (NODE_H * 0.8) / 2;
  const points = [
    { x: 0, y: -hh },
    { x: hw, y: 0 },
    { x: 0, y: hh },
    { x: -hw, y: 0 },
  ];
  const shape = new Polygon(points, {
    fill: col + '18',
    stroke: col,
    strokeWidth: 2,
    originX: 'center',
    originY: 'center',
  });
  const text = new IText(label, {
    ...LABEL_DEFAULTS,
    left: 0,
    top: 0,
    fontSize: 13,
  });
  const group = new Group([shape, text], {
    left: snapToGrid(x),
    top: snapToGrid(y),
    subTargetCheck: true,
  });
  group.data = { fcNodeId: makeId(), fcType: 'decision', strokeClientId: 'fc_stroke_' + Date.now() };
  return group;
}

/**
 * Create a "Terminal" node — rounded rectangle for Start/End.
 */
export function createTerminalNode(x, y, label = 'Start', strokeColor) {
  const col = strokeColor || COLORS.terminal;
  const shape = new Rect({
    width: NODE_W,
    height: NODE_H,
    fill: col + '18',
    stroke: col,
    strokeWidth: 2,
    rx: NODE_H / 2,
    ry: NODE_H / 2,
    originX: 'center',
    originY: 'center',
  });
  const text = new IText(label, {
    ...LABEL_DEFAULTS,
    left: 0,
    top: 0,
  });
  const group = new Group([shape, text], {
    left: snapToGrid(x),
    top: snapToGrid(y),
    subTargetCheck: true,
  });
  group.data = { fcNodeId: makeId(), fcType: 'terminal', strokeClientId: 'fc_stroke_' + Date.now() };
  return group;
}

// ── Node helpers ───────────────────────────────────────────────────────────────

/**
 * Get the centre point of a node group in canvas coordinates.
 */
export function getNodeCenter(node) {
  const bound = node.getBoundingRect();
  return {
    x: bound.left + bound.width / 2,
    y: bound.top + bound.height / 2,
  };
}

/**
 * Get anchor points (top, bottom, left, right) of a node.
 */
export function getNodeAnchors(node) {
  const b = node.getBoundingRect();
  const cx = b.left + b.width / 2;
  const cy = b.top + b.height / 2;
  return {
    top: { x: cx, y: b.top },
    bottom: { x: cx, y: b.top + b.height },
    left: { x: b.left, y: cy },
    right: { x: b.left + b.width, y: cy },
  };
}

/**
 * Determine the best pair of anchors to connect two nodes (shortest distance).
 */
function bestAnchors(nodeA, nodeB) {
  const aa = getNodeAnchors(nodeA);
  const ba = getNodeAnchors(nodeB);
  let best = null;
  let bestDist = Infinity;
  for (const [ka, pa] of Object.entries(aa)) {
    for (const [kb, pb] of Object.entries(ba)) {
      const d = Math.hypot(pb.x - pa.x, pb.y - pa.y);
      if (d < bestDist) {
        bestDist = d;
        best = { fromAnchor: ka, toAnchor: kb, from: pa, to: pb };
      }
    }
  }
  return best;
}

// ── Edge creators ──────────────────────────────────────────────────────────────

/**
 * Create an edge (line + small arrowhead triangle) connecting two nodes.
 * Returns an array [line, arrowHead] — both added to canvas.
 */
export function createEdge(nodeA, nodeB, edgeColor = '#6b7280') {
  const anchors = bestAnchors(nodeA, nodeB);
  if (!anchors) return null;

  const { from, to } = anchors;
  const edgeId = makeId();

  const line = new Line([from.x, from.y, to.x, to.y], {
    stroke: edgeColor,
    strokeWidth: 2,
    selectable: true,
    evented: true,
    hasControls: false,
    hasBorders: false,
  });
  line.data = {
    fcEdgeId: edgeId,
    fcFromNode: nodeA.data.fcNodeId,
    fcToNode: nodeB.data.fcNodeId,
    strokeClientId: 'fc_edge_' + Date.now(),
  };

  // Arrowhead — small triangle at the destination end
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
  const arrow = new Triangle({
    left: to.x,
    top: to.y,
    width: 12,
    height: 10,
    fill: edgeColor,
    angle: angle + 90,
    originX: 'center',
    originY: 'center',
    selectable: false,
    evented: false,
  });
  arrow.data = { fcArrowForEdge: edgeId };

  return { line, arrow, edgeId };
}

/**
 * Update all edges on the canvas that connect to a given node.
 * Call this on node `object:moving`.
 */
export function updateEdgesForNode(canvas, movedNode) {
  if (!movedNode?.data?.fcNodeId) return;
  const nodeId = movedNode.data.fcNodeId;

  // Find all nodes on canvas (to look up the other end of each edge)
  const allNodes = canvas.getObjects().filter(o => o.data?.fcNodeId);
  const nodeMap = {};
  allNodes.forEach(n => { nodeMap[n.data.fcNodeId] = n; });

  // Find edge lines and arrows
  const edgeLines = canvas.getObjects().filter(o => o.data?.fcEdgeId &&
    (o.data.fcFromNode === nodeId || o.data.fcToNode === nodeId));

  edgeLines.forEach(line => {
    const fromNode = nodeMap[line.data.fcFromNode];
    const toNode = nodeMap[line.data.fcToNode];
    if (!fromNode || !toNode) return;

    const anchors = bestAnchors(fromNode, toNode);
    if (!anchors) return;

    line.set({ x1: anchors.from.x, y1: anchors.from.y, x2: anchors.to.x, y2: anchors.to.y });

    // Update arrowhead
    const arrowObj = canvas.getObjects().find(o => o.data?.fcArrowForEdge === line.data.fcEdgeId);
    if (arrowObj) {
      const angle = Math.atan2(anchors.to.y - anchors.from.y, anchors.to.x - anchors.from.x) * (180 / Math.PI);
      arrowObj.set({ left: anchors.to.x, top: anchors.to.y, angle: angle + 90 });
    }
  });

  canvas.requestRenderAll();
}

/**
 * Check if a Fabric.js object is a flowchart node.
 */
export function isFlowchartNode(obj) {
  return !!(obj?.data?.fcNodeId);
}

/**
 * Apply snap-to-grid on a node's current position.
 */
export function snapNodeToGrid(node) {
  node.set({
    left: snapToGrid(node.left),
    top: snapToGrid(node.top),
  });
  node.setCoords();
}
