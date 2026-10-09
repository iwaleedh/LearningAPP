import { Navigate } from 'react-router-dom';
import { useFeatureFlags } from '../../hooks/useFeatureFlags.js';
import { AUTH_GATING_HALTED } from './accessControl.js';

export default function RequireFeature({ featureKey, children }) {
    const { isLoading, isEnabled } = useFeatureFlags();

    if (AUTH_GATING_HALTED) {
        return children;
    }

    if (isLoading) {
        return <div className="card animate-fade-in">Loading feature availability...</div>;
    }

    if (!isEnabled(featureKey)) {
        return <Navigate to="/" replace />;
    }

    return children;
}