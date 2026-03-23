import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div
            className="animate-fade-in"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                gap: 'var(--space-4)',
            }}
        >
            <div style={{ fontSize: '4rem' }}>🔍</div>
            <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 0 }}>404 — Page Not Found</h1>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px' }}>
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Go to Dashboard
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </div>
    );
}
