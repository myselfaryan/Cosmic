import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import WhatsAppButton from '../../components/ui/WhatsAppButton';


import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import TestimonialsSection from './components/TestimonialsSection';
import CertificationSection from './components/CertificationSection';
import EducationalSection from './components/EducationalSection';
import Footer from './components/Footer';

const Homepage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate progressive loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Cosmic Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary-900/20 to-background"></div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + (i % 4)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <HeroSection />

        {/* Service Cards Section */}
        <ServiceCards />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Certification Section */}
        <CertificationSection />

        {/* Educational Section */}
        <EducationalSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Homepage;