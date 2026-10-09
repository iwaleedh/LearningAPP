/**
 * NoteBlockRenderer
 * Renders structured seed note blocks: paragraph, heading, list, checklist,
 * equation, comparisonTable, objective, summary, callout, svg, quote, code.
 */

import { useState, useMemo, useId } from 'react';
import DOMPurify from 'dompurify';
import { Target, Square, SquareCheck, NotebookPen, Lightbulb, PencilLine, MessageCircle, TriangleAlert, Search, Cog, Microscope, Scale, Brain } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import './NoteBlockRenderer.css';
import { prepareSvgMarkup } from './svgMarkup.js';

// Sanitize HTML strings before rendering — defence-in-depth against XSS
const safe = (html) => DOMPurify.sanitize(html ?? '');
function stripHtml(value) {
    return (value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// ── Individual block renderers ─────────────────────────────────────────────

function ObjectiveBlock({ data }) {
    return (
        <div className="nb-objective">
            <span className="nb-objective-label"><Target size={14} aria-hidden="true" /> Learning objective</span>
            <p dangerouslySetInnerHTML={{ __html: safe(data.text) }} />
        </div>
    );
}

function HeadingBlock({ data, blockId }) {
    const level = data.level || 2;
    const Tag = `h${Math.min(Math.max(level, 1), 6)}`;
    return <Tag className={`nb-heading nb-h${level}`} data-block-id={blockId} dangerouslySetInnerHTML={{ __html: safe(data.text) }} />;
}

function ParagraphBlock({ data }) {
    return <p className="nb-paragraph" dangerouslySetInnerHTML={{ __html: safe(data.text) }} />;
}

function ListBlock({ data }) {
    const items = data.items || [];
    const style = data.style || 'bullet';
    if (style === 'numbered' || style === 'ordered') {
        return (
            <ol className="nb-list nb-list-ordered">
                {items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: safe(typeof item === 'object' ? item.text : item) }} />
                ))}
            </ol>
        );
    }
    return (
        <ul className="nb-list nb-list-bullet">
            {items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: safe(typeof item === 'object' ? item.text : item) }} />
            ))}
        </ul>
    );
}

function ChecklistBlock({ data }) {
    const items = data.items || [];
    const [checked, setChecked] = useState(() => items.map((item) => item.checked || false));

    const toggle = (i) => setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
    const onKeyDown = (event, index) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        toggle(index);
    };

    return (
        <ul className="nb-checklist">
            {items.map((item, i) => (
                <li
                    key={i}
                    className={`nb-checklist-item ${checked[i] ? 'checked' : ''}`}
                    onClick={() => toggle(i)}
                    onKeyDown={(event) => onKeyDown(event, i)}
                    role="checkbox"
                    aria-checked={checked[i]}
                    tabIndex={0}
                >
                    <span className="nb-checkbox" aria-hidden="true">{checked[i] ? <SquareCheck size={20} /> : <Square size={20} />}</span>
                    <span dangerouslySetInnerHTML={{ __html: safe(typeof item === 'object' ? item.text : item) }} />
                </li>
            ))}
        </ul>
    );
}

function EquationBlock({ data }) {
    const caption = data.caption || '';
    // Prefer direct html field; fall back to latex field processed by latexToHtml
    const html = data.html
        ? data.html
        : latexToHtml(data.latex || data.content || '');
    return (
        <div className="nb-equation">
            <div
                className="nb-equation-content"
                dangerouslySetInnerHTML={{ __html: safe(html) }}
            />
            {caption && <p className="nb-equation-caption">{caption}</p>}
        </div>
    );
}

/**
 * Robust LaTeX → HTML converter.
 * Handles nested braces by working iteratively from the innermost group outward.
 */
function latexToHtml(raw) {
    let s = raw;

    // Step 1: Replace all \text{...}, \mathrm{...}, \mathbf{...} etc.
    // Use iterative passes so nested calls resolve correctly.
    const textLike = ['\\\\text', '\\\\mathrm', '\\\\mathbf', '\\\\mathit', '\\\\textrm', '\\\\textbf', '\\\\mbox'];
    for (let pass = 0; pass < 5; pass++) {
        textLike.forEach(cmd => {
            s = s.replace(new RegExp(cmd + '\\{([^{}]*)\\}', 'g'), '$1');
        });
    }

    // Step 2: \tfrac, \dfrac, \frac — iterative to handle nested fracs
    for (let pass = 0; pass < 6; pass++) {
        s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g,
            '<span class="nb-frac"><span class="nb-num">$1</span><span class="nb-den">$2</span></span>');
    }

    // Step 3: Superscripts ^{...} — iterative for nested
    for (let pass = 0; pass < 4; pass++) {
        s = s.replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>');
    }
    s = s.replace(/\^([a-zA-Z0-9\-+])/g, '<sup>$1</sup>');

    // Step 4: Subscripts _{...} — iterative for nested
    for (let pass = 0; pass < 4; pass++) {
        s = s.replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>');
    }
    s = s.replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>');

    // Step 5: Strip any remaining plain brace groups {content} → content
    for (let pass = 0; pass < 4; pass++) {
        s = s.replace(/\{([^{}]*)\}/g, '$1');
    }

    // Step 6: Symbols
    s = s.replace(/\\times/g, '×');
    s = s.replace(/\\div/g, '÷');
    s = s.replace(/\\pm/g, '±');
    s = s.replace(/\\cdot/g, '·');
    s = s.replace(/\\sum/g, '∑');
    s = s.replace(/\\infty/g, '∞');
    s = s.replace(/\\alpha/g, 'α');
    s = s.replace(/\\beta/g, 'β');
    s = s.replace(/\\gamma/g, 'γ');
    s = s.replace(/\\delta/g, 'δ');
    s = s.replace(/\\Delta/g, 'Δ');
    s = s.replace(/\\theta/g, 'θ');
    s = s.replace(/\\lambda/g, 'λ');
    s = s.replace(/\\mu/g, 'μ');
    s = s.replace(/\\sigma/g, 'σ');
    s = s.replace(/\\pi/g, 'π');
    s = s.replace(/\\Omega/g, 'Ω');

    // Step 7: Arrows
    s = s.replace(/\\rightarrow/g, ' → ');
    s = s.replace(/\\leftarrow/g, ' ← ');
    s = s.replace(/\\Rightarrow/g, ' ⇒ ');
    s = s.replace(/\\Leftarrow/g, ' ⇐ ');
    s = s.replace(/\\leftrightarrow/g, ' ⇌ ');
    s = s.replace(/\\longrightarrow/g, ' ⟶ ');

    // Step 8: Spacing
    s = s.replace(/\\qquad/g, '\u2003\u2003');
    s = s.replace(/\\quad/g, '\u2003');
    s = s.replace(/\\;/g, '\u2009');
    s = s.replace(/\\,/g, '\u2009');
    s = s.replace(/\\ /g, '\u00a0');
    s = s.replace(/\\!/g, '');

    // Step 9: Misc
    s = s.replace(/\\%/g, '%');
    s = s.replace(/\\\\\s*/g, '<br/>');

    // Step 10: Remove any unmatched LaTeX commands
    s = s.replace(/\\[a-zA-Z]+\*/g, '');
    s = s.replace(/\\[a-zA-Z]+/g, '');

    // Step 11: Clean up any leftover bare braces
    s = s.replace(/[{}]/g, '');

    return s;
}

function LatexDisplay({ latex }) {
    const html = latexToHtml(latex);
    return <span className="nb-latex" dangerouslySetInnerHTML={{ __html: safe(html) }} />;
}

function ComparisonTableBlock({ data }) {
    const headers = data.headers || [];
    const rows = data.rows || [];
    const caption = data.caption || '';
    return (
        <div className="nb-table-wrap">
            {caption && <p className="nb-table-caption">{caption}</p>}
            <div className="nb-table-scroll">
                <table className="nb-table">
                    <thead>
                        <tr>{headers.map((h, i) => <th key={i} dangerouslySetInnerHTML={{ __html: safe(h) }} />)}</tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                {(Array.isArray(row) ? row : Object.values(row)).map((cell, j) => (
                                    <td key={j} dangerouslySetInnerHTML={{ __html: safe(cell) }} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function SummaryBlock({ data }) {
    return (
        <div className="nb-summary">
            <span className="nb-summary-label"><NotebookPen size={14} aria-hidden="true" /> Summary</span>
            <p dangerouslySetInnerHTML={{ __html: safe(data.text) }} />
        </div>
    );
}

function CalloutBlock({ data }) {
    const style = data.style || 'key';
    const styleMap = {
        key: { Icon: Lightbulb, cls: 'nb-callout-key' },
        worked: { Icon: PencilLine, cls: 'nb-callout-worked' },
        tip: { Icon: MessageCircle, cls: 'nb-callout-tip' },
        warning: { Icon: TriangleAlert, cls: 'nb-callout-warning' },
    };
    const { Icon, cls } = styleMap[style] || styleMap.key;
    // Runs of spaces mean the author lined figures up in columns (e.g. accounts layouts).
    const isAligned = style === 'worked' && / {3,}\S/.test(data.text || '');
    // Render body as HTML so that <strong>, <em>, <br/> etc. are parsed correctly
    const bodyHtml = (data.text || '').replace(/\n/g, '<br/>');
    return (
        <div className={`nb-callout ${cls}${isAligned ? ' nb-callout--aligned' : ''}`}>
            {data.title && (
                <div className="nb-callout-title">
                    <Icon size={16} aria-hidden="true" className="nb-callout-icon" /> {data.title}
                </div>
            )}
            <div
                className="nb-callout-body"
                dangerouslySetInnerHTML={{ __html: safe(bodyHtml) }}
            />
        </div>
    );
}

function SvgBlock({ data }) {
    const instanceId = useId();
    const [enlarged, setEnlarged] = useState(false);
    const accessibleLabel = stripHtml(data.caption) || 'Diagram';
    const diagram = useMemo(
        () => prepareSvgMarkup(data.svg || '', accessibleLabel, instanceId),
        [data.svg, accessibleLabel, instanceId],
    );
    const svgStyle = diagram.minWidth ? { '--nb-svg-min-width': `${diagram.minWidth}px` } : undefined;
    return (
        <figure className="nb-svg-figure" aria-label={accessibleLabel}>
            {diagram.minWidth > 0 && (
                <div className="nb-svg-controls">
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm nb-svg-size-toggle"
                        aria-pressed={enlarged}
                        onClick={() => setEnlarged(value => !value)}
                    >
                        {enlarged ? 'Fit diagram to screen' : 'Enlarge diagram'}
                    </button>
                </div>
            )}
            <div
                className={`nb-svg-container${enlarged ? ' nb-svg-container--enlarged' : ''}`}
                style={svgStyle}
                tabIndex={0}
                role="region"
                aria-label={`${accessibleLabel}.${enlarged ? ' Scroll horizontally to see the full diagram.' : ' Fitted to screen.'}`}
                dangerouslySetInnerHTML={{ __html: diagram.markup }}
            />
            {data.caption && <figcaption className="nb-svg-caption">{data.caption}</figcaption>}
        </figure>
    );
}

function QuoteBlock({ data }) {
    return (
        <blockquote className="nb-quote">
            <p>{data.text}</p>
            {data.source && <cite>— {data.source}</cite>}
        </blockquote>
    );
}

function CodeBlock({ data }) {
    return (
        <pre className="nb-code">
            <code>{data.code || data.text}</code>
        </pre>
    );
}

function DeeperBlock({ data }) {
    const levels = [
        { key: 'understand', label: 'Understand', icon: <Search size={14} aria-hidden="true" />, cls: 'nb-deeper-understand' },
        { key: 'apply', label: 'Apply', icon: <Cog size={14} aria-hidden="true" />, cls: 'nb-deeper-apply' },
        { key: 'analyze', label: 'Analyse', icon: <Microscope size={14} aria-hidden="true" />, cls: 'nb-deeper-analyze' },
        { key: 'evaluate', label: 'Evaluate', icon: <Scale size={14} aria-hidden="true" />, cls: 'nb-deeper-evaluate' },
    ];
    return (
        <div className="nb-deeper">
            <div className="nb-deeper-header">
                <Brain size={18} aria-hidden="true" className="nb-deeper-icon" />
                <span className="nb-deeper-title">Deeper Understanding</span>
            </div>
            <div className="nb-deeper-grid">
                {levels.map(({ key, label, icon, cls }) =>
                    data[key] ? (
                        <div key={key} className={`nb-deeper-card ${cls}`}>
                            <div className="nb-deeper-card-label">
                                {icon} {label}
                            </div>
                            <p className="nb-deeper-card-text">{data[key]}</p>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}

// ── Main renderer ──────────────────────────────────────────────────────────

export default function NoteBlockRenderer({ blocks = [] }) {
    return (
        <div className="nb-root">
            {blocks.map((block, i) => {
                const key = block.id || `block-${i}`;
                return (
                    <ErrorBoundary key={key} name={`block:${block.type}:${key}`} inline resetKeys={[key]}>
                        {(() => {
                            switch (block.type) {
                                case 'objective': return <ObjectiveBlock data={block.data || {}} />;
                                case 'heading': return <HeadingBlock data={block.data || {}} blockId={key} />;
                                case 'paragraph': return <ParagraphBlock data={block.data || {}} />;
                                case 'list': return <ListBlock data={block.data || {}} />;
                                case 'checklist': return <ChecklistBlock data={block.data || {}} />;
                                case 'equation': return <EquationBlock data={block.data || {}} />;
                                case 'comparisonTable': return <ComparisonTableBlock data={block.data || {}} />;
                                case 'summary': return <SummaryBlock data={block.data || {}} />;
                                case 'callout': return <CalloutBlock data={block.data || {}} />;
                                case 'svg': return <SvgBlock data={block.data || {}} />;
                                case 'quote': return <QuoteBlock data={block.data || {}} />;
                                case 'code': return <CodeBlock data={block.data || {}} />;
                                case 'deeper': return <DeeperBlock data={block.data || {}} />;
                                default: return null;
                            }
                        })()}
                    </ErrorBoundary>
                );
            })}
        </div>
    );
}
