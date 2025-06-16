import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedGemsCarousel = ({ currentGem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock related gems data
  const relatedGems = [
    {
      id: 2,
      name: "Natural Emerald",
      sanskritName: "Panna",
      rulingPlanet: "Mercury",
      price: 95000,
      originalPrice: 110000,
      weight: "4.15 Carats",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop",
      rating: 4.7,
      inStock: true
    },
    {
      id: 3,
      name: "Blue Sapphire",
      sanskritName: "Neelam",
      rulingPlanet: "Saturn",
      price: 180000,
      originalPrice: 200000,
      weight: "3.85 Carats",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: "Yellow Sapphire",
      sanskritName: "Pukhraj",
      rulingPlanet: "Jupiter",
      price: 75000,
      originalPrice: 85000,
      weight: "5.25 Carats",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "Natural Pearl",
      sanskritName: "Moti",
      rulingPlanet: "Moon",
      price: 45000,
      originalPrice: 55000,
      weight: "6.50 Carats",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.5,
      inStock: false
    },
    {
      id: 6,
      name: "Red Coral",
      sanskritName: "Moonga",
      rulingPlanet: "Mars",
      price: 35000,
      originalPrice: 40000,
      weight: "7.20 Carats",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop",
      rating: 4.4,
      inStock: true
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView.desktop >= relatedGems.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, relatedGems.length - itemsPerView.desktop) : prev - 1
    );
  };

  const handleGemClick = (gem) => {
    // In a real app, this would navigate to the gem's individual page
    window.location.href = `/individual-gem-product?gem=${gem.id}`;
  };

  const handleWhatsAppInquiry = (gem, e) => {
    e.stopPropagation();
    const message = `Hi! I'm interested in the ${gem.name} (${gem.weight}) priced at ₹${gem.price.toLocaleString('en-IN')}. Can you provide more details?`;
    const phoneNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center">
            <Icon name="Gem" size={20} color="#F59E0B" />
          </div>
          <div>
            <h2 className="text-2xl font-cinzel font-bold text-text-primary">
              Related Gemstones
            </h2>
            <p className="text-text-secondary">
              Discover gems with similar astrological benefits
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-surface/50 hover:bg-surface border border-surface-600 hover:border-primary/30 rounded-lg transition-all duration-200"
            disabled={currentIndex === 0}
          >
            <Icon name="ChevronLeft" size={20} className="text-text-secondary" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-surface/50 hover:bg-surface border border-surface-600 hover:border-primary/30 rounded-lg transition-all duration-200"
            disabled={currentIndex + itemsPerView.desktop >= relatedGems.length}
          >
            <Icon name="ChevronRight" size={20} className="text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * (100 / itemsPerView.desktop)}%`
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {relatedGems.map((gem) => (
            <motion.div
              key={gem.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 cursor-pointer group"
              onClick={() => handleGemClick(gem)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-surface/30 rounded-xl overflow-hidden border border-surface-600 hover:border-primary/30 transition-all duration-300 cosmic-shadow hover:cosmic-glow">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Stock Status */}
                  <div className="absolute top-3 left-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      gem.inStock 
                        ? 'bg-success/20 text-success border border-success/30' :'bg-error/20 text-error border border-error/30'
                    }`}>
                      {gem.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleWhatsAppInquiry(gem, e)}
                      className="p-2 bg-success hover:bg-success-600 text-white rounded-full cosmic-shadow-lg transition-all duration-200 transform hover:scale-110"
                    >
                      <Icon name="MessageCircle" size={16} />
                    </button>
                  </div>

                  {/* Floating Sparkles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full"
                        style={{
                          left: `${20 + i * 25}%`,
                          top: `${15 + i * 20}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="font-cinzel font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 mb-1">
                      {gem.name}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {gem.sanskritName} • {gem.weight}
                    </p>
                  </div>

                  {/* Planet & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Sun" size={14} className="text-accent" />
                      <span className="text-xs text-text-secondary">{gem.rulingPlanet}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-accent fill-current" />
                      <span className="text-xs text-text-secondary">{gem.rating}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-text-primary">
                          ₹{gem.price.toLocaleString('en-IN')}
                        </span>
                        {gem.originalPrice > gem.price && (
                          <span className="text-sm text-text-tertiary line-through">
                            ₹{gem.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                      {gem.originalPrice > gem.price && (
                        <div className="text-xs text-success font-medium">
                          Save ₹{(gem.originalPrice - gem.price).toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(relatedGems.length / itemsPerView.mobile) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView.mobile) === index
                  ? 'bg-primary w-6' :'bg-surface-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <a
          href="/gems-category"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="Gem" size={20} />
          <span>View All Gemstones</span>
          <Icon name="ArrowRight" size={16} />
        </a>
      </div>
    </div>
  );
};

export default RelatedGemsCarousel;