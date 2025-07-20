import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import WavyBackground from './WavyBackground';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Innovate. Solve. Repeat.';

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsTyping(false);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentText, isTyping, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Wavy Animated Background */}
      <WavyBackground variant="primary" opacity={0.15} />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 py-8">
        {/* MASSIVE Brand Name - Hackloop */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black bg-gradient-to-r from-primary via-accent via-secondary to-primary bg-clip-text text-transparent drop-shadow-2xl animate-gradient mb-4 sm:mb-6 leading-none tracking-tight">
            HACKLOOP
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-text/70 font-bold tracking-widest uppercase">
              HACKLOOP
            </p>
            <div className="h-1 w-8 sm:w-16 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* MASSIVE Animated Logo */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center transform hover:scale-110 transition-all duration-700 ease-out">
          <Logo size="mega" animated={true} />
        </div>

        {/* Typewriter Effect - Bigger and More Dramatic */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-12 text-primary drop-shadow-2xl leading-tight">
          {currentText}
          <span className="animate-pulse text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">|</span>
        </h2>

        {/* Description - Enhanced for mobile */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-text/80 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-up font-medium px-4">
          An open-for-all hybrid hackathon to turn real-world problems into working solutions 
          through innovation, teamwork, and creativity.
        </p>

        {/* Enhanced CTA Button */}
        <a 
          href="https://unstop.com/o/KOUJ5pV?lb=53gZa87j&utm_medium=Share&utm_source=shortUrl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-primary/50 animate-bounce-gentle border-4 border-white/30 backdrop-blur-sm relative overflow-hidden group"
        >
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary drop-shadow-lg animate-pulse" />
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;