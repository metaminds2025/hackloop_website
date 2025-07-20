import React from 'react';

interface WavyBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent';
  opacity?: number;
  className?: string;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ 
  variant = 'primary', 
  opacity = 0.1, 
  className = '' 
}) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'primary':
        return 'from-primary/30 via-accent/20 to-secondary/30';
      case 'secondary':
        return 'from-secondary/30 via-primary/20 to-accent/30';
      case 'accent':
        return 'from-accent/30 via-secondary/20 to-primary/30';
      default:
        return 'from-primary/30 via-accent/20 to-secondary/30';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Enhanced Animated wavy background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          style={{ opacity }}
        >
          <defs>
            <linearGradient id={`gradient-${variant}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id={`gradient-${variant}-2`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id={`gradient-${variant}-3`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Slow and large */}
          <path
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            fill={`url(#gradient-${variant}-1)`}
            className="animate-wave-slow"
          />
          
          {/* Wave 2 - Medium speed */}
          <path
            d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
            fill={`url(#gradient-${variant}-2)`}
            className="animate-wave-medium"
            style={{ opacity: 0.8 }}
          />
          
          {/* Wave 3 - Fast and small */}
          <path
            d="M0,600 C200,400 900,800 1200,500 L1200,800 L0,800 Z"
            fill={`url(#gradient-${variant}-3)`}
            className="animate-wave-fast"
            style={{ opacity: 0.6 }}
          />

          {/* Additional wave layers for more depth */}
          <path
            d="M0,350 C150,150 450,550 1200,250 L1200,800 L0,800 Z"
            fill={`url(#gradient-${variant}-1)`}
            className="animate-wave-slow"
            style={{ opacity: 0.4, animationDirection: 'reverse' }}
          />
        </svg>
      </div>

      {/* Enhanced circuit pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Cpath d='M40,0 L40,80 M0,40 L80,40'/%3E%3Cpath d='M20,20 L60,20 L60,60 L20,60 Z' fill='none' stroke='%23ffffff' stroke-opacity='0.02'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"
        style={{ opacity: opacity * 0.3 }}
      />

      {/* Enhanced floating particles with better mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10" />
    </div>
  );
};

export default WavyBackground;