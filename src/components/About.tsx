import React from 'react';
import { Target, Users, Lightbulb, Zap } from 'lucide-react';
import WavyBackground from './WavyBackground';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Focus on real-world challenges that need innovative solutions',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Work with diverse teams to create impactful solutions',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Push boundaries and explore cutting-edge technologies',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Impact',
      description: 'Create solutions that make a difference in the world',
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50 relative overflow-hidden">
      <WavyBackground variant="secondary" opacity={0.08} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Hackloop
          </h2>
          <p className="text-lg text-text/80 max-w-3xl mx-auto">
            Hackloop is more than just a hackathon – it's a community of innovators, problem-solvers, 
            and changemakers who believe in the power of technology to create a better world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">{feature.title}</h3>
              <p className="text-text/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              To create a platform where innovation meets impact, where diverse minds come together 
              to solve pressing challenges, and where the next generation of world-changing solutions are born.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;