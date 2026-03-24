import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        if (import.meta.env.DEV) {
            console.error('ErrorBoundary caught:', error, info);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '60vh',
                        textAlign: 'center',
                        gap: 'var(--space-4)',
                        padding: 'var(--space-8)',
                    }}
                >
                    <div style={{ fontSize: '3rem' }}>⚠️</div>
                    <h2 style={{ marginBottom: 0 }}>Something went wrong</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px' }}>
                        An unexpected error occurred. Please refresh the page or try again.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            this.setState({ hasError: false, error: null });
                            window.location.href = import.meta.env.BASE_URL || '/';
                        }}
                    >
                        Return to Dashboard
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
