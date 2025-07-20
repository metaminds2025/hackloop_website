import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-xl border-b border-primary/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced mobile sizing */}
          <div className="flex items-center space-x-2">
            <Logo size="md" animated={true} />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block">
              Hackloop
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-text hover:text-primary transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base py-2 px-3 rounded-lg hover:bg-primary/10"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Registration Button */}
            <a
              href="https://unstop.com/o/KOUJ5pV?lb=53gZa87j&utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 text-sm"
            >
              Register Now
            </a>
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-primary/20 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-text hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg font-medium touch-manipulation"
                  >
                    {item.name}
                  </button>
                ))}
                {/* Mobile Registration Button */}
                <a
                  href="https://unstop.com/o/KOUJ5pV?lb=53gZa87j&utm_medium=Share&utm_source=shortUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 touch-manipulation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;