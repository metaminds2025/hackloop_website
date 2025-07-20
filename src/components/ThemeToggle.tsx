import React from 'react';
import { Sun, Moon, Zap } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'neon':
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;