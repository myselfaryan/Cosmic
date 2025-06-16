import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import Icon from '../../components/AppIcon';

import ZodiacWheel from './components/ZodiacWheel';
import ServiceCard from './components/ServiceCard';
import PricingTier from './components/PricingTier';
import ConsultationProcess from './components/ConsultationProcess';
import EducationalContent from './components/EducationalContent';
import FAQSection from './components/FAQSection';

const AstrologyServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      id: 'birth-chart',
      title: 'Birth Chart Reading',
      icon: 'Star',
      description: `Comprehensive analysis of your birth chart revealing personality traits, life patterns, and karmic influences. Our expert astrologers decode planetary positions at your birth time to provide deep insights into your life's journey and spiritual path.`,duration: '60-90 minutes',
      features: [
        'Complete natal chart analysis','Personality assessment','Life purpose guidance','Karmic patterns identification','Detailed written report'
      ],
      price: {
        basic: 2500,
        premium: 4500,
        comprehensive: 7500
      },
      whatsappMessage: "Hi! I\'m interested in Birth Chart Reading consultation. Can you help me book a session?"
    },
    {
      id: 'compatibility',title: 'Compatibility Analysis',icon: 'Heart',
      description: `Detailed relationship compatibility analysis using Vedic astrology principles. Understand relationship dynamics, potential challenges, and harmonious aspects between partners for lasting happiness and mutual growth.`,
      duration: '45-60 minutes',
      features: [
        'Synastry chart analysis','Compatibility scoring','Relationship strengths & challenges','Marriage timing guidance','Remedial suggestions'
      ],
      price: {
        basic: 3000,
        premium: 5000,
        comprehensive: 8000
      },
      whatsappMessage: "Hi! I\'d like to book a Compatibility Analysis session. Can you guide me through the process?"
    },
    {
      id: 'career-guidance',title: 'Career Guidance',icon: 'Briefcase',
      description: `Professional astrology consultation focusing on career path, business ventures, and financial growth. Discover your natural talents, ideal career timing, and strategic decisions for professional success.`,
      duration: '60 minutes',
      features: [
        'Career aptitude analysis','Business timing guidance','Financial prospects','Professional growth periods','Success strategies'
      ],
      price: {
        basic: 2800,
        premium: 4800,
        comprehensive: 7800
      },
      whatsappMessage: "Hi! I need Career Guidance consultation. Can you help me understand the booking process?"
    },
    {
      id: 'remedial-solutions',title: 'Remedial Solutions',icon: 'Shield',
      description: `Personalized remedial measures including gemstone recommendations, mantra guidance, and ritual suggestions. Address planetary afflictions and enhance positive influences for overall life improvement and spiritual growth.`,
      duration: '75 minutes',
      features: [
        'Planetary affliction analysis','Gemstone recommendations','Mantra prescriptions','Ritual guidance','Follow-up support'
      ],
      price: {
        basic: 3500,
        premium: 5500,
        comprehensive: 8500
      },
      whatsappMessage: "Hi! I\'m looking for Remedial Solutions consultation. Can you provide more details about the process?"
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      description: 'Essential consultation with core insights',
      features: [
        'Basic chart analysis',
        '45-60 minute session',
        'Audio recording',
        'Email summary',
        '7-day follow-up support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      description: 'Comprehensive analysis with detailed guidance',
      features: [
        'Detailed chart analysis',
        '60-90 minute session',
        'Video recording',
        'Detailed written report',
        'Remedial suggestions',
        '15-day follow-up support'
      ],
      popular: true
    },
    {
      name: 'Comprehensive',
      description: 'Complete spiritual guidance package',
      features: [
        'In-depth chart analysis',
        '90+ minute session',
        'HD video recording',
        'Comprehensive written report',
        'Personalized remedies',
        'Gemstone recommendations',
        '30-day follow-up support',
        'Priority booking'
      ],
      popular: false
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: 'Book Consultation',
      description: 'Choose your service and preferred time slot',
      icon: 'Calendar'
    },
    {
      step: 2,
      title: 'Provide Birth Details',
      description: 'Share accurate birth date, time, and location',
      icon: 'Clock'
    },
    {
      step: 3,
      title: 'Expert Analysis',
      description: 'Our astrologer prepares your personalized reading',
      icon: 'Star'
    },
    {
      step: 4,
      title: 'Live Consultation',
      description: 'Interactive session with detailed explanations',
      icon: 'Video'
    },
    {
      step: 5,
      title: 'Receive Report',
      description: 'Get comprehensive written report and recording',
      icon: 'FileText'
    }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  const handleWhatsAppBooking = (service, tier = 'premium') => {
    const message = `${service.whatsappMessage}

Service: ${service.title}
Tier: ${tier.charAt(0).toUpperCase() + tier.slice(1)}
Price: ₹${service.price[tier].toLocaleString('en-IN')}

Please provide available time slots.`;
    
    const phoneNumber = '+919876543210';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <Breadcrumb />
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl lg:text-6xl font-cinzel font-bold text-text-primary mb-6">
                Vedic Astrology
                <span className="block text-accent">Consultations</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto font-poppins">
                Discover your cosmic blueprint through authentic Vedic astrology. Our expert astrologers provide personalized guidance for life's most important decisions and spiritual growth.
              </p>
            </motion.div>

            {/* 3D Zodiac Wheel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <ZodiacWheel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-surface/80 backdrop-blur-md border-b border-surface-600">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-center space-x-8 py-4">
            {[
              { id: 'services', label: 'Services', icon: 'Star' },
              { id: 'pricing', label: 'Pricing', icon: 'DollarSign' },
              { id: 'process', label: 'Process', icon: 'ArrowRight' },
              { id: 'education', label: 'Learn', icon: 'BookOpen' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span className="font-inter font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
                Our Astrology Services
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto font-poppins">
                Choose from our comprehensive range of Vedic astrology consultations, each designed to provide deep insights and practical guidance for your life journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isSelected={selectedService === service.id}
                  onSelect={() => handleServiceSelect(service.id)}
                  onWhatsAppBooking={handleWhatsAppBooking}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {activeTab === 'pricing' && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
                Transparent Pricing
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto font-poppins">
                Choose the consultation tier that best fits your needs. All sessions include expert guidance and detailed insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <PricingTier
                  key={tier.name}
                  tier={tier}
                  services={services}
                  index={index}
                  onWhatsAppBooking={handleWhatsAppBooking}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {activeTab === 'process' && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <ConsultationProcess steps={consultationSteps} />
          </div>
        </section>
      )}

      {/* Educational Content */}
      {activeTab === 'education' && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <EducationalContent />
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-4 lg:px-6">
          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-6">
              Ready to Discover Your Cosmic Blueprint?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto font-poppins">
              Book your personalized Vedic astrology consultation today and unlock the wisdom of the stars for your life's journey.
            </p>
            <button
              onClick={() => {
                const message = "Hi! I'm interested in booking an astrology consultation. Can you help me choose the right service and schedule a session?";
                const phoneNumber = '+919876543210';
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="MessageCircle" size={24} />
              <span>Book Consultation Now</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AstrologyServices;