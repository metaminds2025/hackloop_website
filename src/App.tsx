import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import Judges from './components/Judges';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text">
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Hero />
      <About />
      <Timeline />
      <Organizers />
      <Sponsors />
      <Judges />
      <Footer />
    </div>
  );
}

export default App;