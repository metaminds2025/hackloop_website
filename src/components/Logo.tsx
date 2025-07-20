import React from 'react';
import { Code, Zap, Cpu, Hexagon, Circle } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'mega';
  animated?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', animated = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    xxl: 'w-32 h-32',
    mega: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64',
  };

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    xxl: 'w-16 h-16',
    mega: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32',
  };

  const smallIconSize = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-6 h-6',
    xxl: 'w-8 h-8',
    mega: 'w-10 h-10 sm:w-12 sm:h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Enhanced Logo Symbol - Multi-layered Tech Design */}
      <div className="relative">
        <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
          {/* Outer Rotating Ring */}
          {animated && (
            <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-primary/30 rounded-full animate-spin-slow`} />
          )}
          
          {/* Main Hexagonal Background */}
          <div className={`absolute inset-2 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl transform ${animated ? 'animate-pulse' : ''} shadow-2xl`} />
          
          {/* Inner Hexagon */}
          <div className={`absolute inset-4 bg-gradient-to-tr from-secondary via-primary to-accent rounded-xl transform rotate-45 ${animated ? 'animate-spin-slow' : ''} opacity-80`} />
          
          {/* Central Tech Symbol */}
          <div className="relative z-20 flex items-center justify-center">
            <Cpu className={`${iconSize[size]} text-white ${animated ? 'animate-pulse' : ''} drop-shadow-lg`} />
          </div>
          
          {/* Floating Tech Elements */}
          {animated && (
            <>
              {/* Corner Elements */}
              <Code className={`absolute -top-2 -right-2 ${smallIconSize[size]} text-accent animate-bounce shadow-lg`} style={{ animationDelay: '0.5s' }} />
              <Zap className={`absolute -bottom-2 -left-2 ${smallIconSize[size]} text-secondary animate-bounce shadow-lg`} style={{ animationDelay: '1s' }} />
              <Hexagon className={`absolute -top-2 -left-2 ${smallIconSize[size]} text-primary animate-bounce shadow-lg`} style={{ animationDelay: '1.5s' }} />
              <Circle className={`absolute -bottom-2 -right-2 ${smallIconSize[size]} text-accent animate-bounce shadow-lg`} style={{ animationDelay: '2s' }} />
              
              {/* Pulsing Aura */}
              <div className={`absolute inset-0 ${sizeClasses[size]} bg-primary/20 rounded-full animate-ping`} />
              <div className={`absolute inset-0 ${sizeClasses[size]} bg-accent/10 rounded-full animate-ping`} style={{ animationDelay: '1s' }} />
              
              {/* Orbiting Elements */}
              <div className={`absolute inset-0 ${sizeClasses[size]} animate-spin-slow`}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;