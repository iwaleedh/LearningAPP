import { useState, useMemo } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import './Notes.css';

export default function CodePlayground({ title, variables = [], formula, unit = '' }) {
    const [values, setValues] = useState(() => {
        const initial = {};
        variables.forEach(v => { initial[v.name] = v.default; });
        return initial;
    });

    const result = useMemo(() => {
        try {
            return formula(values);
        } catch {
            return 'Error';
        }
    }, [values, formula]);

    const handleChange = (name, raw) => {
        const num = parseFloat(raw);
        if (!isNaN(num)) {
            setValues(prev => ({ ...prev, [name]: num }));
        }
    };

    const handleReset = () => {
        const initial = {};
        variables.forEach(v => { initial[v.name] = v.default; });
        setValues(initial);
    };

    return (
        <div className="code-playground card">
            <div className="playground-header">
                <div className="playground-title">
                    <Play size={16} />
                    <span>{title}</span>
                </div>
                <button className="btn btn-ghost btn-sm" onClick={handleReset}>
                    <RotateCcw size={14} />
                    Reset
                </button>
            </div>

            <div className="playground-variables">
                {variables.map(v => (
                    <div key={v.name} className="playground-var">
                        <label htmlFor={`var-${v.name}`}>{v.label}</label>
                        <div className="playground-input-group">
                            <input
                                id={`var-${v.name}`}
                                type="range"
                                min={v.min}
                                max={v.max}
                                step={v.step || 1}
                                value={values[v.name]}
                                onChange={e => handleChange(v.name, e.target.value)}
                            />
                            <span className="playground-value">
                                {values[v.name]}{v.unit || ''}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="playground-result">
                <span className="playground-result-label">Result</span>
                <span className="playground-result-value">
                    {typeof result === 'number' ? result.toFixed(2) : result}
                    {unit && <span className="playground-result-unit"> {unit}</span>}
                </span>
            </div>
        </div>
    );
}
