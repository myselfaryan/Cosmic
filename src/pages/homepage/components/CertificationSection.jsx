import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationSection = () => {
  const certifications = [
    {
      id: 1,
      name: "Gemological Institute Certified",
      description: "All gemstones certified by internationally recognized gemological institutes",
      icon: "Award",
      color: "text-accent"
    },
    {
      id: 2,
      name: "Authentic Origin Verified",
      description: "Direct sourcing from authentic origins with proper documentation",
      icon: "MapPin",
      color: "text-success"
    },
    {
      id: 3,
      name: "Lab Tested Quality",
      description: "Comprehensive lab testing for purity, clarity, and authenticity",
      icon: "Search",
      color: "text-primary"
    },
    {
      id: 4,
      name: "Vedic Astrology Approved",
      description: "Recommended by certified Vedic astrologers for spiritual benefits",
      icon: "Star",
      color: "text-error"
    }
  ];

  const trustBadges = [
    {
      id: 1,
      name: "ISO Certified",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop",
      description: "Quality Management System"
    },
    {
      id: 2,
      name: "GIA Certified",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=80&fit=crop",
      description: "Gemological Institute of America"
    },
    {
      id: 3,
      name: "SSL Secured",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=80&fit=crop",
      description: "Secure Online Transactions"
    },
    {
      id: 4,
      name: "Trusted Seller",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=120&h=80&fit=crop",
      description: "15+ Years in Business"
    }
  ];

  const guarantees = [
    {
      icon: "Shield",
      title: "Authenticity Guarantee",
      description: "100% authentic products with money-back guarantee if proven otherwise"
    },
    {
      icon: "RotateCcw",
      title: "Easy Returns",
      description: "30-day return policy with full refund for unopened products"
    },
    {
      icon: "Truck",
      title: "Secure Delivery",
      description: "Insured shipping with tracking and signature confirmation"
    },
    {
      icon: "Headphones",
      title: "Expert Support",
      description: "24/7 customer support from certified astrology and gemstone experts"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Trust & Authenticity
          </h2>
          <p className="font-poppins text-lg text-text-secondary max-w-3xl mx-auto">
            Your spiritual journey deserves authentic products. We ensure every gemstone and rudraksha meets the highest standards of quality and authenticity.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
            <Icon name="Shield" size={16} className="text-success" />
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group p-6 glassmorphism rounded-xl cosmic-shadow hover:cosmic-shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <Icon name={cert.icon} size={24} className={cert.color} />
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-text-primary mb-3">
                  {cert.name}
                </h3>
                <p className="font-poppins text-sm text-text-secondary leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mb-16">
          <h3 className="font-cinzel text-2xl font-semibold text-text-primary text-center mb-8">
            Certified & Trusted By
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.id}
                className="group p-4 glassmorphism rounded-lg text-center hover:bg-surface/30 transition-all duration-300"
              >
                <div className="w-20 h-16 mx-auto mb-3 rounded-lg overflow-hidden cosmic-shadow">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-poppins font-semibold text-text-primary text-sm mb-1">
                  {badge.name}
                </h4>
                <p className="font-poppins text-xs text-text-tertiary">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="glassmorphism rounded-2xl p-8 lg:p-12 cosmic-shadow-lg">
          <h3 className="font-cinzel text-2xl font-semibold text-text-primary text-center mb-8">
            Our Guarantees to You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={guarantee.icon} size={20} className="text-text-primary" />
                </div>
                <h4 className="font-poppins font-semibold text-text-primary mb-3">
                  {guarantee.title}
                </h4>
                <p className="font-poppins text-sm text-text-secondary leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 p-6 glassmorphism rounded-xl cosmic-shadow">
            <Icon name="Shield" size={32} className="text-success" />
            <div className="text-left">
              <h4 className="font-cinzel text-lg font-semibold text-text-primary mb-1">
                100% Authenticity Promise
              </h4>
              <p className="font-poppins text-sm text-text-secondary">
                Every product comes with authenticity certificate and our guarantee
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;