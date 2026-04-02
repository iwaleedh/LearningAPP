import { useEffect, useState } from 'react';
import { subscribeToActivityUpdates } from '../services/activityStore.js';

export function useActivityRefresh() {
    const [version, setVersion] = useState(0);

    useEffect(() => {
        return subscribeToActivityUpdates(() => {
            setVersion((current) => current + 1);
        });
    }, []);

    return version;
}
