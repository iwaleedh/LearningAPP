import { Wifi, Printer, CloudOff, Download, Database } from 'lucide-react';
import { AIGrading, DraftAutoSave, PhotoUpload } from '../components/advanced/AdvancedFeatures';
import { getClient } from '../spacetime.js';
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
        <div className="animate-fade-in" style={{ maxWidth: '960px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }} className="avoid-break">Advanced Features</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)' }}>
                AI grading, resilient draft auto-save, validated uploads, and PWA readiness checks.
            </p>

            <div className="card avoid-break" style={{ marginBottom: 'var(--space-5)', border: '2px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Database size={18} style={{ color: 'var(--color-primary)' }} />
                    <h3 style={{ margin: 0 }}>SpacetimeDB Test</h3>
                </div>
                <button
                    className="btn btn-primary no-print"
                    id="test-spacetime-btn"
                    onClick={() => {
                        console.log('Testing SpacetimeDB...');
                        try {
                            const client = getClient();
                            if (!client) throw new Error("SpacetimeDB client not initialized yet.");

                            client.reducers.upsertNote(
                                'test:123',
                                'physics',
                                'Test Title',
                                'Test Subtopic',
                                '[]',
                                '{"blocks": [{"data": "Hello World!"}]}',
                                4,
                                1
                            );
                            setTimeout(() => {
                                const notes = Array.from(client.db.note.iter());
                                console.log('Notes in DB:', notes);
                                document.getElementById('spacetime-result').innerText = `Success! Found ${notes.length} note(s). Content: ${notes[0]?.title}`;
                            }, 500);
                        } catch (e) {
                            console.error(e);
                            document.getElementById('spacetime-result').innerText = 'Error: ' + e.message;
                        }
                    }}
                >
                    Run Database Test
                </button>
                <div id="spacetime-result" style={{ marginTop: '10px', fontWeight: 'bold' }}></div>
            </div>

            <div className="card avoid-break" style={{ marginBottom: 'var(--space-5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Wifi size={18} style={{ color: 'var(--color-primary)' }} />
                    <h3 style={{ margin: 0 }}>PWA Status</h3>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-5)', fontSize: 'var(--font-size-sm)', flexWrap: 'wrap' }}>
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
                    <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                        {pwa.message}
                    </p>
                )}

                {pwa.error && (
                    <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: '#ef4444' }} role="alert">
                        {pwa.error}
                    </p>
                )}

                {!pwa.online && (
                    <div className="offline-tip" style={{ marginTop: 'var(--space-3)' }}>
                        <CloudOff size={14} />
                        <span>Offline mode active. Cached pages remain available.</span>
                    </div>
                )}
            </div>

            <div className="card avoid-break" style={{ marginBottom: 'var(--space-5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Printer size={18} style={{ color: 'var(--color-primary)' }} />
                    <h3 style={{ margin: 0 }}>Print Mode</h3>
                </div>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                    Use <kbd style={{ background: 'var(--color-bg-tertiary)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>⌘P</kbd> to print any page.
                    Navigation and interactive controls are hidden automatically in print mode.
                </p>
                <button className="btn btn-ghost no-print" onClick={() => window.print()}>
                    <Printer size={14} /> Print This Page
                </button>
            </div>

            <div style={{ marginBottom: 'var(--space-5)' }} className="avoid-break">
                <AIGrading />
            </div>

            <div style={{ marginBottom: 'var(--space-5)' }} className="avoid-break">
                <DraftAutoSave />
            </div>

            <div style={{ marginBottom: 'var(--space-5)' }} className="avoid-break">
                <PhotoUpload />
            </div>

            <div className="card no-print" style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <Download size={16} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ margin: 0 }}>Manual QA Checklist</h4>
                </div>
                <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    Verify offline navigation, print preview readability, upload keyboard access, and draft recovery after refresh.
                </p>
            </div>

            <div className="print-only" style={{ fontSize: '11pt', color: '#111827' }}>
                <strong>Print Notes:</strong> PWA status reflects runtime conditions and may differ when printed offline.
            </div>
        </div>
    );
}
