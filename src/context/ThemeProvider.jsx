import { useState, useEffect, useMemo } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('lt-theme') || 'dark';
        } catch {
            return 'dark';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        try {
            localStorage.setItem('lt-theme', theme);
        } catch { /* storage unavailable */ }
    }, [theme]);

    const value = useMemo(() => ({
        theme,
        toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
    }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
