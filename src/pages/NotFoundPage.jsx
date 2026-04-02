import { useNavigate } from 'react-router-dom';
import './Pages.css';

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className="fallback-screen animate-fade-in">
            <div className="fallback-screen-icon fallback-screen-icon--large">🔍</div>
            <h1 className="fallback-screen-title fallback-screen-title--large">404 — Page Not Found</h1>
            <p className="fallback-screen-copy">
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <div className="fallback-screen-actions">
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
