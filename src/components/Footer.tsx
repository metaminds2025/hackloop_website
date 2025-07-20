import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react';
import Logo from './Logo';
import WavyBackground from './WavyBackground';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6" />, 
      href: 'https://www.instagram.com/hackloooop?igsh=emltMWw2NWo0bnp5' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/company/hackloop' 
    },
    { 
      name: 'Discord', 
      icon: <MessageCircle className="w-6 h-6" />, 
      href: '#' 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-6 h-6" />, 
      href: 'mailto:teamhackloop@gmail.com' 
    },
  ];

  return (
    <footer id="contact" className="bg-background/50 border-t border-primary/20 py-16 relative overflow-hidden">
      <WavyBackground variant="primary" opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="lg" animated={true} />
          </div>
          <p className="text-text/80 max-w-2xl mx-auto">
            Join our community of innovators and stay updated with the latest announcements, 
            tips, and opportunities in the world of hackathons and technology.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label={link.name}
            >
              <div className="text-primary group-hover:text-accent transition-colors duration-300">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text/60 mb-4">
            &copy; {new Date().getFullYear()} Hackloop. All rights reserved.
          </p>
          <p className="text-text/60">
            Built with ❤️ by <span className="text-primary font-semibold">Neetesh Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;