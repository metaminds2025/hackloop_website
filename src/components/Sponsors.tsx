import React from 'react';
import { Building, Star } from 'lucide-react';
import WavyBackground from './WavyBackground';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <WavyBackground variant="secondary" opacity={0.08} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            We're actively seeking amazing sponsors to support our community and make this event possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20 backdrop-blur-sm">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-primary">Sponsors</h3>
            <p className="text-xl text-text/80 font-semibold mb-6">
              To Be Decided
            </p>
            <p className="text-text/60 mb-8">
              Interested in sponsoring Hackloop? Get in touch with our organizing team to explore partnership opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-accent">
                <Star className="w-5 h-5" />
                <span>Brand Visibility</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <Star className="w-5 h-5" />
                <span>Talent Access</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <Star className="w-5 h-5" />
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;