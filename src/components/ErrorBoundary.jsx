import { Component } from 'react';
import '../pages/Pages.css';

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
        return this.props.children;
    }
}
