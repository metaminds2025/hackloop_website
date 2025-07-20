import React from 'react';
import { Calendar, Globe, Users, Trophy, MapPin } from 'lucide-react';
import WavyBackground from './WavyBackground';

const Timeline: React.FC = () => {
  const rounds = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Round 1: Idea Submission',
      description: 'Submit your innovative ideas and solutions',
      format: 'Online',
      date: '18 Aug 2025',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Round 2: PPT + Elaboration',
      description: 'Present your ideas with detailed presentations',
      format: 'Online',
      date: '19-20 Aug 2025',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Final Round: Prototype + Fun Activities',
      description: 'Build working prototypes and showcase your solutions',
      format: 'Offline',
      date: '6 Sep 2025',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <WavyBackground variant="accent" opacity={0.1} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Competition Timeline
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Our hackathon consists of three exciting rounds designed to bring out the best in every participant.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Only visible on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent rounded-full hidden lg:block" />

          <div className="space-y-16">
            {rounds.map((round, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Timeline Dot - Centered on large screens */}
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 z-20 flex justify-center mb-8 lg:mb-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${round.color} flex items-center justify-center text-white shadow-2xl border-4 border-background`}>
                    {round.icon}
                  </div>
                </div>

                {/* Content Container */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Content (odd rounds) / Right Content (even rounds) */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="bg-card/50 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-sm transform hover:scale-105">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{round.title}</h3>
                      <p className="text-text/80 mb-6 text-lg leading-relaxed">{round.description}</p>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r ${round.color} text-white shadow-lg`}>
                          {round.format}
                        </span>
                        <span className="inline-block px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-accent to-secondary text-white shadow-lg">
                          {round.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                    {/* Empty space for timeline balance */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date & Venue Announcement */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Date Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">Date</h3>
            <p className="text-lg text-text/80 font-semibold text-center mb-2">
              Round 1: 18 Aug 2025
            </p>
            <p className="text-lg text-text/80 font-semibold text-center mb-2">
              Round 2: 19-20 Aug 2025
            </p>
            <p className="text-lg text-text/80 font-semibold text-center mb-4">
              Final Round: 6 Sep 2025
            </p>
            <p className="text-text/60 text-center">
              Mark your calendars!
            </p>
          </div>

          {/* Venue Section */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20 backdrop-blur-sm">
            <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-secondary text-center">Venue</h3>
            <p className="text-xl text-text/80 font-semibold text-center mb-4">
              To Be Decided
            </p>
            <p className="text-text/60 text-center">
              Venue details will be announced soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;