import { useEffect, useMemo } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.colorScheme = 'dark';
        localStorage.removeItem('lt-theme');
    }, []);

    const value = useMemo(() => ({
        theme: 'dark',
        toggleTheme: () => { },
    }), []);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
