import { Component } from 'react';
import '../pages/Pages.css';

/**
 * ErrorBoundary — composable error boundary.
 *
 * Props:
 *   name {string}        Human-readable label for the failing section.
 *   fallback {ReactNode|function}  Custom fallback. If a function, receives { error, reset }.
 *   resetKeys {any[]}    Boundary resets automatically when any value changes.
 *   inline {boolean}     Render compact inline fallback instead of full-screen (default: false).
 *   onError {function}   Optional (error, info) callback for external telemetry.
 */
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
        this.reset = this.reset.bind(this);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        const { name = 'unknown', onError } = this.props;
        if (import.meta.env.DEV) {
            console.error(`[ErrorBoundary:${name}]`, error, info);
        }
        onError?.(error, info);
        // Ship to logger without creating a circular import at module load time.
        import('../services/logger/logger.js')
            .then(({ logger }) => {
                logger.error('ErrorBoundary caught', {
                    boundary: name,
                    message: error?.message,
                    stack: error?.stack?.slice(0, 500),
                    componentStack: info?.componentStack?.slice(0, 500),
                });
            })
            .catch(() => { /* logger unavailable — console.error above is sufficient */ });
    }

    // Declarative reset when resetKeys change (mirrors react-error-boundary pattern).
    componentDidUpdate(prevProps) {
        const { resetKeys } = this.props;
        if (
            this.state.hasError &&
            resetKeys &&
            resetKeys.some((key, i) => key !== (prevProps.resetKeys ?? [])[i])
        ) {
            this.reset();
        }
    }

    reset() {
        this.setState({ hasError: false, error: null });
    }

    render() {
        const { hasError, error } = this.state;
        const { children, fallback, inline = false, name } = this.props;

        if (!hasError) return children;

        if (typeof fallback === 'function') {
            return fallback({ error, reset: this.reset });
        }
        if (fallback) return fallback;

        if (inline) {
            return (
                <div className="eb-inline" role="alert">
                    <span className="eb-inline-icon">⚠️</span>
                    <span className="eb-inline-msg">
                        {name ? `${name} failed to load` : 'This section failed to load'}
                    </span>
                    <button className="btn btn-sm btn-ghost eb-inline-retry" onClick={this.reset}>
                        Retry
                    </button>
                    {import.meta.env.DEV && error && (
                        <details className="eb-inline-details">
                            <summary>Details</summary>
                            <pre>{error.message}</pre>
                        </details>
                    )}
                </div>
            );
        }

        return (
            <div className="fallback-screen">
                <div className="fallback-screen-icon">⚠️</div>
                <h2 className="fallback-screen-title">Something went wrong</h2>
                <p className="fallback-screen-copy">
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
}
