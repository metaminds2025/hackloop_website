import React from 'react';
import { Mail, Linkedin, ExternalLink, Instagram } from 'lucide-react';
import { Organizer } from '../types';
import WavyBackground from './WavyBackground';

const Organizers: React.FC = () => {
  const organizers: Organizer[] = [
    {
      name: 'Neetesh Sharma',
      designation: 'Microsoft Learn Student Ambassador',
      company: 'Microsoft',
      email: 'neeteshk1104@gmail.com',
      linkedin: 'https://linkedin.com/in/neetesh-kumar-846616287',
      instagram: 'https://www.instagram.com/neetesh_sharma____?igsh=MTRxZjBxYnMxZ2I4ag==',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFhbL0h6trHvg/profile-displayphoto-shrink_400_400/B56ZXiboP9GsAg-/0/1743260649838?e=1756944000&v=beta&t=dV9tc0jXTcq1bsoVRnanpXpsYHAfigAQIhPmd4Mg1PA',
    },
    {
      name: 'Vanshika Agrawal',
      designation: 'Microsoft Learn Student Ambassador',
      company: 'Microsoft',
      email: 'vanshikaagrawal1616@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vanshika-agrawal-1259a6243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxgjow9IYSZGlvHdKFOwSYw%3D%3D',
      instagram: 'https://www.instagram.com/__im_theonly__1',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHtpgbV-TYaow/profile-displayphoto-scale_400_400/B56Zeg6PPXG0Ao-/0/1750751312477?e=1756944000&v=beta&t=CMlnV2zlaf2KY4a9jcVPzxmLhj3TuTRH_mw6XFgi_Ms',
    },
  ];

  return (
    <section id="organizers" className="py-20 bg-card/50 relative overflow-hidden">
      <WavyBackground variant="primary" opacity={0.08} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet the Organizers
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            The passionate team behind Hackloop, dedicated to creating an amazing experience for all participants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="group bg-background/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 backdrop-blur-sm"
            >
              {/* Profile Picture */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full hidden items-center justify-center text-white text-4xl font-bold">
                  {organizer.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">{organizer.name}</h3>
                
                {/* Designation and Company */}
                {organizer.designation && (
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-accent mb-1">{organizer.designation}</p>
                    {organizer.company && (
                      <p className="text-sm text-text/70 font-medium">at {organizer.company}</p>
                    )}
                  </div>
                )}
                
                <div className="space-y-3">
                  <a
                    href={`mailto:${organizer.email}`}
                    className="flex items-center justify-center space-x-2 text-text/80 hover:text-primary transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{organizer.email}</span>
                  </a>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={organizer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-text/80 hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    {organizer.instagram && (
                      <a
                        href={organizer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-text/80 hover:text-primary transition-colors duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;