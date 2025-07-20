import React from 'react';
import { Scale, Clock } from 'lucide-react';
import WavyBackground from './WavyBackground';

const Judges: React.FC = () => {
  return (
    <section id="judges" className="py-20 bg-card/50 relative overflow-hidden">
      <WavyBackground variant="accent" opacity={0.08} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet Our Judges
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Industry experts and thought leaders who will evaluate and mentor the participating teams.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20 backdrop-blur-sm">
            <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Judges Panel</h3>
            <p className="text-xl text-text/80 font-semibold mb-6">
              To Be Announced
            </p>
            <p className="text-text/60 mb-8">
              We're curating an exceptional panel of judges from various industries and backgrounds 
              to ensure fair and comprehensive evaluation of all submissions.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-accent">
              <Clock className="w-5 h-5" />
              <span>Announcement coming soon!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;