import { useState, useRef, useEffect, useCallback } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import { X, Plus, Trash2, Camera } from 'lucide-react';
import { plotFunction } from '../../utils/mathExprParser.js';

Chart.register(...registerables);

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'];

/**
 * GraphWidget — floating graph plotter panel.
 *
 * Modes:
 *  - function: enter expressions, plot curves
 *  - data: enter x,y pairs, scatter / line plot
 *
 * Props:
 *  - onStampToCanvas(dataUrl): callback to stamp chart as image on Fabric canvas
 *  - onClose(): close panel
 */
export default function GraphWidget({ onStampToCanvas, onClose }) {
  const [mode, setMode] = useState('function');

  // Function mode state
  const [functions, setFunctions] = useState([{ id: 1, expr: 'x^2', color: COLORS[0] }]);
  const [xMin, setXMin] = useState(-10);
  const [xMax, setXMax] = useState(10);

  // Data mode state
  const [dataPoints, setDataPoints] = useState([
    { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 4 }, { x: 3, y: 9 },
  ]);
  const [chartType, setChartType] = useState('scatter'); // scatter | line | bar

  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const nextIdRef = useRef(2);

  // ── Chart rendering ─────────────────────────────────────────────────────────
  const renderChart = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    let datasets, options;

    if (mode === 'function') {
      datasets = functions.map((fn) => {
        const pts = plotFunction(fn.expr, Number(xMin), Number(xMax));
        return {
          label: `y = ${fn.expr}`,
          data: pts,
          borderColor: fn.color,
          backgroundColor: fn.color + '22',
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.1,
          fill: false,
        };
      });
      options = {
        responsive: true,
        maintainAspectRatio: false,
        parsing: { xAxisKey: 'x', yAxisKey: 'y' },
        scales: {
          x: { type: 'linear', title: { display: true, text: 'x' } },
          y: { title: { display: true, text: 'y' } },
        },
        plugins: { legend: { position: 'top' } },
      };
      chartRef.current = new Chart(ctx, { type: 'line', data: { datasets }, options });
    } else {
      const xLabels = dataPoints.map(p => p.x);
      const yValues = dataPoints.map(p => p.y);
      datasets = [
        {
          label: 'Data',
          data: chartType === 'scatter' ? dataPoints.map(p => ({ x: p.x, y: p.y })) : yValues,
          borderColor: COLORS[0],
          backgroundColor: COLORS[0] + '55',
          pointRadius: chartType === 'scatter' ? 5 : 3,
          borderWidth: 2,
        },
      ];
      const type = chartType === 'scatter' ? 'scatter' : chartType === 'bar' ? 'bar' : 'line';
      options = {
        responsive: true,
        maintainAspectRatio: false,
        ...(chartType !== 'scatter' && { scales: { x: { title: { display: true, text: 'x' } }, y: { title: { display: true, text: 'y' } } } }),
        ...(chartType === 'scatter' && {
          parsing: { xAxisKey: 'x', yAxisKey: 'y' },
          scales: {
            x: { type: 'linear', title: { display: true, text: 'x' } },
            y: { title: { display: true, text: 'y' } },
          },
        }),
        plugins: { legend: { display: false } },
      };
      const chartData = chartType === 'scatter'
        ? { datasets }
        : { labels: xLabels, datasets };
      chartRef.current = new Chart(ctx, { type, data: chartData, options });
    }
  }, [mode, functions, xMin, xMax, dataPoints, chartType]);

  useEffect(() => {
    renderChart();
    return () => { chartRef.current?.destroy(); chartRef.current = null; };
  }, [renderChart]);

  // ── Function mode handlers ──────────────────────────────────────────────────
  const addFunction = () => {
    const id = nextIdRef.current++;
    setFunctions(prev => [...prev, { id, expr: '', color: COLORS[prev.length % COLORS.length] }]);
  };

  const updateFunction = (id, expr) => {
    setFunctions(prev => prev.map(f => f.id === id ? { ...f, expr } : f));
  };

  const removeFunction = (id) => {
    setFunctions(prev => prev.filter(f => f.id !== id));
  };

  // ── Data mode handlers ──────────────────────────────────────────────────────
  const addDataRow = () => {
    setDataPoints(prev => [...prev, { x: prev.length, y: 0 }]);
  };

  const updateDataPoint = (idx, field, val) => {
    setDataPoints(prev => prev.map((p, i) => i === idx ? { ...p, [field]: Number(val) || 0 } : p));
  };

  const removeDataRow = (idx) => {
    setDataPoints(prev => prev.filter((_, i) => i !== idx));
  };

  // ── Stamp to canvas ────────────────────────────────────────────────────────
  const handleStamp = () => {
    if (!chartRef.current) return;
    const dataUrl = chartRef.current.toBase64Image();
    onStampToCanvas?.(dataUrl);
  };

  return (
    <div className="lc-graph-widget card">
      {/* Header */}
      <div className="lc-graph-header">
        <h4 className="lc-graph-title">Graph Plotter</h4>
        <div className="lc-graph-header-actions">
          <button className="btn btn-sm btn-primary" onClick={handleStamp} title="Stamp to board">
            <Camera size={14} /> Stamp
          </button>
          <button className="btn btn-sm btn-ghost" onClick={onClose}><X size={16} /></button>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="lc-graph-tabs">
        <button
          className={`lc-graph-tab ${mode === 'function' ? 'lc-graph-tab--active' : ''}`}
          onClick={() => setMode('function')}
        >Function</button>
        <button
          className={`lc-graph-tab ${mode === 'data' ? 'lc-graph-tab--active' : ''}`}
          onClick={() => setMode('data')}
        >Data</button>
      </div>

      {/* Chart */}
      <div className="lc-graph-chart">
        <canvas ref={canvasRef} />
      </div>

      {/* Controls */}
      <div className="lc-graph-controls">
        {mode === 'function' && (
          <>
            {/* X range */}
            <div className="lc-graph-range">
              <label>x min</label>
              <input type="number" value={xMin} onChange={e => setXMin(e.target.value)} />
              <label>x max</label>
              <input type="number" value={xMax} onChange={e => setXMax(e.target.value)} />
            </div>

            {/* Function inputs */}
            {functions.map((fn) => (
              <div key={fn.id} className="lc-graph-fn-row">
                <span className="lc-graph-fn-color" style={{ background: fn.color }} />
                <span className="lc-graph-fn-label">y =</span>
                <input
                  className="lc-graph-fn-input"
                  type="text"
                  value={fn.expr}
                  onChange={e => updateFunction(fn.id, e.target.value)}
                  placeholder="e.g. 2x^2 + 3"
                />
                {functions.length > 1 && (
                  <button className="btn btn-sm btn-ghost" onClick={() => removeFunction(fn.id)}>
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
            <button className="btn btn-sm btn-ghost" onClick={addFunction}>
              <Plus size={14} /> Add function
            </button>
          </>
        )}

        {mode === 'data' && (
          <>
            {/* Chart type picker */}
            <div className="lc-graph-charttype">
              {['scatter', 'line', 'bar'].map(t => (
                <button
                  key={t}
                  className={`lc-graph-tab ${chartType === t ? 'lc-graph-tab--active' : ''}`}
                  onClick={() => setChartType(t)}
                >{t[0].toUpperCase() + t.slice(1)}</button>
              ))}
            </div>

            {/* Data table */}
            <div className="lc-graph-datatable">
              <div className="lc-graph-datarow lc-graph-datarow--head">
                <span>x</span><span>y</span><span />
              </div>
              {dataPoints.map((p, i) => (
                <div key={i} className="lc-graph-datarow">
                  <input type="number" value={p.x} onChange={e => updateDataPoint(i, 'x', e.target.value)} />
                  <input type="number" value={p.y} onChange={e => updateDataPoint(i, 'y', e.target.value)} />
                  <button className="btn btn-sm btn-ghost" onClick={() => removeDataRow(i)}>
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
            <button className="btn btn-sm btn-ghost" onClick={addDataRow}>
              <Plus size={14} /> Add row
            </button>
          </>
        )}
      </div>
    </div>
  );
}
