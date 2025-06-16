import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const contextMessages = {
    '/homepage': 'Hi! I\'m interested in learning more about your spiritual services and products.',
    '/astrology-services': 'Hi! I\'d like to book an astrology consultation. Can you help me with the process?',
    '/gems-category': 'Hi! I\'m looking for authentic gemstones. Can you guide me with recommendations?',
    '/individual-gem-product': 'Hi! I\'m interested in this gemstone. Can you provide more details about authenticity and benefits?',
    '/rudraksha-category': 'Hi! I\'m looking for genuine Rudraksha beads. Can you help me choose the right one?',
    '/individual-rudraksha-product': 'Hi! I\'m interested in this Rudraksha. Can you tell me more about its spiritual significance?'
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling 20% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show immediately on certain pages
    const immediateShowPages = ['/astrology-services', '/individual-gem-product', '/individual-rudraksha-product'];
    if (immediateShowPages.includes(location.pathname)) {
      setIsVisible(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getWhatsAppMessage = () => {
    return contextMessages[location.pathname] || contextMessages['/homepage'];
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(getWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-150">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group relative flex items-center justify-center w-14 h-14 
          bg-success hover:bg-success-600 text-white rounded-full 
          cosmic-shadow-lg hover:cosmic-glow transition-all duration-300 
          transform hover:scale-110 animate-bounce-gentle
          ${isHovered ? 'pr-32' : ''}
        `}
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <div className="flex items-center justify-center">
          <Icon 
            name="MessageCircle" 
            size={24} 
            className="text-white" 
          />
        </div>

        {/* Hover Text */}
        <div 
          className={`
            absolute right-14 top-1/2 transform -translate-y-1/2
            bg-surface-800 text-text-primary px-4 py-2 rounded-lg
            font-poppins text-sm whitespace-nowrap cosmic-shadow
            transition-all duration-300 pointer-events-none
            ${isHovered 
              ? 'opacity-100 translate-x-0' :'opacity-0 translate-x-4'
            }
          `}
        >
          Chat with us
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-surface-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-success animate-ping opacity-20"></div>
        
        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse">
          <div className="w-full h-full bg-accent rounded-full animate-ping opacity-60"></div>
        </div>
      </button>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 bg-success rounded-full opacity-30
              animate-float
            `}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppButton;