import { Wifi, Printer, CloudOff, Download, Database, Zap } from 'lucide-react';
import { AIGrading, DraftAutoSave, PhotoUpload } from '../components/advanced/AdvancedFeatures';
import { getClient, callMutation, callQuery, api } from '../convex-client.js';
import usePwaStatus from '../hooks/usePwaStatus';
import './Pages.css';

function StatusDot({ tone = 'neutral', children }) {
    return <span className={`status-dot status-${tone}`}>{children}</span>;
}

export default function AdvancedPage() {
    const pwa = usePwaStatus();

    const serviceWorkerLabel = pwa.swState === 'active'
        ? 'Active'
        : pwa.swState === 'waiting'
            ? 'Update Ready'
            : pwa.swState === 'installing'
                ? 'Installing'
                : pwa.swState === 'registering'
                    ? 'Registering'
                    : pwa.swState === 'unsupported'
                        ? 'Unsupported'
                        : pwa.swState === 'error'
                            ? 'Error'
                            : 'Idle';

    const swTone = pwa.swState === 'active'
        ? 'good'
        : pwa.swState === 'waiting'
            ? 'warn'
            : pwa.swState === 'error' || pwa.swState === 'unsupported'
                ? 'bad'
                : 'neutral';

    return (
        <div className="advanced-hub animate-fade-in">
            <div className="advanced-page-header avoid-break">
                <div className="advanced-title-group">
                    <div className="advanced-subject-icon">
                        <Zap size={32} />
                    </div>
                    <div>
                        <h1 className="advanced-page-title">Advanced Features</h1>
                        <p className="advanced-page-qual">AI grading, resilient draft auto-save, validated uploads, and PWA readiness checks.</p>
                    </div>
                </div>
            </div>

            <div className="advanced-card advanced-card--primary card avoid-break">
                <div className="advanced-card-header">
                    <Database size={20} className="advanced-card-icon" />
                    <h3>Convex Test</h3>
                </div>
                <button
                    className="btn btn-primary no-print"
                    id="test-convex-btn"
                    onClick={async () => {
                        if (import.meta.env.DEV) console.log('Testing Convex...');
                        try {
                            const client = getClient();
                            if (!client) throw new Error("Convex client not initialized yet.");

                            await callMutation(api.notes.upsertNote, {
                                noteId: 'test:123',
                                subject: 'physics',
                                title: 'Test Title',
                                subtopicTitle: 'Test Subtopic',
                                breadcrumbs: '[]',
                                contentJson: '{"blocks": [{"data": "Hello World!"}]}',
                                confidenceScore: 4,
                                estimatedReadMinutes: 1
                            });
                            const note = await callQuery(api.notes.getNote, { noteId: 'test:123' });
                            if (import.meta.env.DEV) console.log('Note in DB:', note);
                            
                            const resultEl = document.getElementById('convex-result');
                            if (resultEl) {
                                resultEl.innerText = note
                                    ? `Success! Found note: ${note.title}`
                                    : 'Upsert succeeded but note not found on query.';
                            }
                        } catch (e) {
                            if (import.meta.env.DEV) console.error(e);
                            const resultEl = document.getElementById('convex-result');
                            if (resultEl) resultEl.innerText = 'Error: ' + e.message;
                        }
                    }}
                >
                    Run Database Test
                </button>
                <div id="convex-result" className="advanced-note"></div>
            </div>

            <div className="advanced-card card avoid-break">
                <div className="advanced-card-header">
                    <Wifi size={20} className="advanced-card-icon" />
                    <h3>PWA Status</h3>
                </div>
                <div className="advanced-card-body advanced-card-body--status">
                    <div>
                        <strong>Service Worker:</strong>{' '}
                        <StatusDot tone={swTone}>{serviceWorkerLabel}</StatusDot>
                    </div>
                    <div>
                        <strong>Installable:</strong>{' '}
                        <StatusDot tone={pwa.installable ? 'good' : 'neutral'}>{pwa.installable ? 'Yes' : 'No prompt yet'}</StatusDot>
                    </div>
                    <div>
                        <strong>Connection:</strong>{' '}
                        <StatusDot tone={pwa.online ? 'good' : 'warn'}>{pwa.online ? 'Online' : 'Offline'}</StatusDot>
                    </div>
                </div>

                {pwa.message && (
                    <p className="advanced-note">
                        {pwa.message}
                    </p>
                )}

                {pwa.error && (
                    <p className="advanced-error" role="alert">
                        {pwa.error}
                    </p>
                )}

                {!pwa.online && (
                    <div className="offline-tip advanced-note">
                        <CloudOff size={14} />
                        <span>Offline mode active. Cached pages remain available.</span>
                    </div>
                )}
            </div>

            <div className="advanced-card card avoid-break">
                <div className="advanced-card-header">
                    <Printer size={20} className="advanced-card-icon" />
                    <h3>Print Mode</h3>
                </div>
                <div className="advanced-card-body">
                    <p className="advanced-qa-desc">
                        Use <kbd className="advanced-kbd">⌘P</kbd> to print any page.
                        Navigation and interactive controls are hidden automatically in print mode.
                    </p>
                    <button className="btn btn-ghost no-print" onClick={() => window.print()}>
                        <Printer size={16} className="advanced-print-btn-icon" /> Print This Page
                    </button>
                </div>
            </div>

            <div className="advanced-section avoid-break">
                <AIGrading />
            </div>

            <div className="advanced-section avoid-break">
                <DraftAutoSave />
            </div>

            <div className="advanced-section avoid-break">
                <PhotoUpload />
            </div>

            <div className="advanced-qa-card card no-print">
                <div className="advanced-qa-header">
                    <Download size={16} className="advanced-card-icon" />
                    <h4 className="advanced-qa-title">Manual QA Checklist</h4>
                </div>
                <p className="advanced-qa-desc">
                    Verify offline navigation, print preview readability, upload keyboard access, and draft recovery after refresh.
                </p>
            </div>

            <div className="advanced-print-note print-only">
                <strong>Print Notes:</strong> PWA status reflects runtime conditions and may differ when printed offline.
            </div>
        </div>
    );
}
