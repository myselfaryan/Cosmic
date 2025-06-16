import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServiceCards = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'astrology',
      title: 'Astrology Consultations',
      subtitle: 'Expert Vedic Guidance',
      description: 'Unlock your cosmic potential with personalized birth chart readings, compatibility analysis, career guidance, and remedial solutions from certified Vedic astrologers.',
      icon: 'Star',
      iconColor: 'text-accent',
      bgGradient: 'from-accent/20 to-primary/20',
      features: [
        'Birth Chart Analysis',
        'Career & Finance Guidance',
        'Relationship Compatibility',
        'Remedial Solutions'
      ],
      route: '/astrology-services',
      cta: 'Book Consultation'
    },
    {
      id: 'gems',
      title: 'Authentic Gemstones',
      subtitle: 'Certified Spiritual Gems',
      description: 'Discover the power of authentic gemstones with detailed astrological significance, healing properties, and lab-certified quality for spiritual transformation.',
      icon: 'Gem',
      iconColor: 'text-success',
      bgGradient: 'from-success/20 to-primary/20',
      features: [
        'Lab Certified Quality',
        'Astrological Significance',
        'Healing Properties',
        '360° 3D Preview'
      ],
      route: '/gems-category',
      cta: 'Explore Gems'
    },
    {
      id: 'rudraksha',
      title: 'Sacred Rudraksha',
      subtitle: 'Divine Spiritual Beads',
      description: 'Experience divine blessings with authentic rudraksha beads from 1 to 21 Mukhi, each with detailed spiritual significance and proper wearing instructions.',
      icon: 'Circle',
      iconColor: 'text-error',
      bgGradient: 'from-error/20 to-primary/20',
      features: [
        'Authentic Origin Certified',
        'Complete Spiritual Guide',
        'Proper Wearing Methods',
        'Mantra Recommendations'
      ],
      route: '/rudraksha-category',
      cta: 'View Collection'
    }
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  const handleWhatsAppInquiry = (serviceType) => {
    const messages = {
      astrology: "Hi! I\'m interested in booking an astrology consultation. Can you help me understand the process and pricing?",
      gems: "Hi! I\'d like to know more about your authentic gemstones and their astrological benefits. Can you guide me?",
      rudraksha: "Hi! I\'m looking for authentic rudraksha beads. Can you help me choose the right one for my spiritual needs?"
    };
    
    const message = encodeURIComponent(messages[serviceType]);
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 lg:px-6 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          Our Sacred Services
        </h2>
        <p className="font-poppins text-lg text-text-secondary max-w-2xl mx-auto">
          Embark on your spiritual journey with our comprehensive range of authentic services and products
        </p>
        <div className="flex items-center justify-center space-x-2 mt-6">
          <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
          <Icon name="Sparkles" size={16} className="text-accent" />
          <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative p-8 glassmorphism rounded-2xl cosmic-shadow hover:cosmic-shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hoveredCard === service.id ? 'animate-breathing' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.route)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow group-hover:animate-pulse`}>
                    <Icon 
                      name={service.icon} 
                      size={28} 
                      className={service.iconColor}
                    />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="font-cinzel text-xl font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-sm text-accent font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-inter text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                        <span className="font-poppins text-sm text-text-tertiary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(service.route);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <span>{service.cta}</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppInquiry(service.id);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-2 border border-success/50 text-success font-medium rounded-lg hover:bg-success/10 hover:border-success transition-all duration-300"
                  >
                    <Icon name="MessageCircle" size={16} />
                    <span>Quick Inquiry</span>
                  </button>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 ${service.iconColor.replace('text-', 'bg-')} rounded-full opacity-20 animate-float group-hover:opacity-40 transition-opacity duration-500`}
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${15 + i * 20}%`,
                      animationDelay: `${i * 0.5 + index * 0.2}s`,
                      animationDuration: `${4 + i}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="font-poppins text-text-tertiary mb-6">
          Need personalized guidance? Our experts are here to help you choose the right path.
        </p>
        <button
          onClick={() => handleWhatsAppInquiry('general')}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-success hover:bg-success-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cosmic-shadow"
        >
          <Icon name="MessageCircle" size={20} />
          <span>Chat with Expert</span>
          <Icon name="ExternalLink" size={16} />
        </button>
      </div>
    </section>
  );
};

export default ServiceCards;