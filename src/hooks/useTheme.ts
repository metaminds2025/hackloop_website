import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('hackloop-theme') as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Set dark as default if no saved theme
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hackloop-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'neon'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return { theme, toggleTheme };
};