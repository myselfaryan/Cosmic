import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentZodiac, setCurrentZodiac] = useState(0);

  const zodiacSigns = [
    { name: 'Aries', icon: 'Zap', color: 'text-red-400' },
    { name: 'Taurus', icon: 'Mountain', color: 'text-green-400' },
    { name: 'Gemini', icon: 'Users', color: 'text-yellow-400' },
    { name: 'Cancer', icon: 'Moon', color: 'text-blue-400' },
    { name: 'Leo', icon: 'Sun', color: 'text-orange-400' },
    { name: 'Virgo', icon: 'Leaf', color: 'text-green-500' },
    { name: 'Libra', icon: 'Scale', color: 'text-pink-400' },
    { name: 'Scorpio', icon: 'Zap', color: 'text-red-500' },
    { name: 'Sagittarius', icon: 'Target', color: 'text-purple-400' },
    { name: 'Capricorn', icon: 'Mountain', color: 'text-gray-400' },
    { name: 'Aquarius', icon: 'Waves', color: 'text-cyan-400' },
    { name: 'Pisces', icon: 'Fish', color: 'text-blue-500' }
  ];

  const floatingGems = [
    { name: 'Ruby', color: 'bg-red-500', size: 'w-4 h-4', position: 'top-20 left-10' },
    { name: 'Emerald', color: 'bg-green-500', size: 'w-3 h-3', position: 'top-32 right-20' },
    { name: 'Sapphire', color: 'bg-blue-500', size: 'w-5 h-5', position: 'top-40 left-1/4' },
    { name: 'Diamond', color: 'bg-white', size: 'w-3 h-3', position: 'top-60 right-1/3' },
    { name: 'Pearl', color: 'bg-gray-200', size: 'w-4 h-4', position: 'top-80 left-1/3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentZodiac((prev) => (prev + 1) % zodiacSigns.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleConsultationClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a premium Vedic astrology consultation. Can you guide me through the process?");
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  const handleExploreClick = () => {
    navigate('/astrology-services');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 lg:px-6">
      {/* 3D Cosmic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-breathing"></div>
        
        {/* Floating Gemstones */}
        {floatingGems.map((gem, index) => (
          <div
            key={gem.name}
            className={`absolute ${gem.position} ${gem.size} ${gem.color} rounded-full opacity-60 animate-float cosmic-glow`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + index}s`
            }}
          ></div>
        ))}

        {/* Zodiac Symbols */}
        <div className="absolute top-1/4 right-10 lg:right-20">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40">
            {zodiacSigns.map((sign, index) => (
              <div
                key={sign.name}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  index === currentZodiac ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                }`}
                style={{
                  transform: `rotate(${index * 30}deg) translateY(-60px) rotate(-${index * 30}deg)`
                }}
              >
                <Icon 
                  name={sign.icon} 
                  size={24} 
                  className={`${sign.color} ${index === currentZodiac ? 'animate-pulse' : ''}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="font-cinzel text-4xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-4 leading-tight">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Gems & Rudraksha Guru
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-cosmic"></div>
            <Icon name="Sparkles" size={20} className="text-accent animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-cosmic"></div>
          </div>
          <p className="font-poppins text-xl lg:text-2xl text-text-secondary mb-2">
            Premium Vedic Astrology & Authentic Spiritual Products
          </p>
          <p className="font-inter text-lg text-text-tertiary max-w-2xl mx-auto">
            Discover your cosmic destiny through expert consultations and embrace spiritual transformation with certified gemstones and authentic rudraksha beads.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center justify-center space-x-3 p-4 glassmorphism rounded-lg">
            <Icon name="Shield" size={24} className="text-success" />
            <span className="font-poppins text-text-primary">Certified Authentic</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 glassmorphism rounded-lg">
            <Icon name="Star" size={24} className="text-accent" />
            <span className="font-poppins text-text-primary">Expert Astrologers</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 glassmorphism rounded-lg">
            <Icon name="Gem" size={24} className="text-primary" />
            <span className="font-poppins text-text-primary">Premium Quality</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={handleConsultationClick}
            className="group flex items-center space-x-3 px-8 py-4 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105 animate-bounce-gentle"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Book Consultation</span>
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button
            onClick={handleExploreClick}
            className="group flex items-center space-x-3 px-8 py-4 border-2 border-primary/50 text-text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <Icon name="Compass" size={20} />
            <span>Explore Services</span>
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center space-x-8 text-text-tertiary font-poppins text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} />
            <span>10,000+ Happy Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} />
            <span>100% Authentic Products</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-text-tertiary" />
      </div>
    </section>
  );
};

export default HeroSection;