import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GemCard = ({ gem, viewMode, index, onWhatsAppClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleProductClick = () => {
    // Pass the gem ID and name as URL parameters so the individual page knows which gem to display
    const params = new URLSearchParams({
      id: gem.id,
      name: gem.name.toLowerCase().replace(/\s+/g, '-')
    });
    window.location.href = `/individual-gem-product?${params.toString()}`;
  };

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const message = `Hi! I'm interested in the ${gem.name} priced at ${formatPrice(gem.price)}. Can you provide more details about its authenticity, spiritual significance, and proper wearing methods?`;
    const phoneNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-surface rounded-xl p-6 cosmic-shadow hover:cosmic-shadow-lg transition-all duration-300 cursor-pointer"
        onClick={handleProductClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-6">
          {/* Image */}
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={gem.image}
              alt={gem.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {gem.isNew && (
              <div className="absolute top-2 left-2 px-2 py-1 bg-accent text-white text-xs font-medium rounded">
                New
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                  {gem.name}
                </h3>
                <p className="text-text-secondary font-poppins text-sm mb-3">
                  {gem.significance}
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {gem.benefits.slice(0, 2).map((benefit, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < Math.floor(gem.rating) ? 'text-accent' : 'text-surface-400'}
                      />
                    ))}
                  </div>
                  <span className="text-text-tertiary font-poppins text-sm">
                    {gem.rating} ({gem.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="text-right">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-text-primary">
                    {formatPrice(gem.price)}
                  </div>
                  {gem.originalPrice > gem.price && (
                    <div className="text-text-tertiary line-through text-sm">
                      {formatPrice(gem.originalPrice)}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="p-2 bg-success text-white rounded-lg hover:bg-success-600 transition-colors duration-200"
                    title="WhatsApp Inquiry"
                  >
                    <Icon name="MessageCircle" size={16} />
                  </button>
                  
                  <button className="px-4 py-2 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-surface rounded-xl overflow-hidden cosmic-shadow hover:cosmic-shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-102"
      onClick={handleProductClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={gem.image}
          alt={gem.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Sparkles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {gem.isNew && (
            <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded">
              New
            </span>
          )}
          {gem.isCertified && (
            <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded flex items-center space-x-1">
              <Icon name="Shield" size={12} />
              <span>Certified</span>
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWhatsAppClick}
            className="p-2 bg-success/90 backdrop-blur-sm text-white rounded-lg hover:bg-success transition-colors duration-200"
            title="WhatsApp Inquiry"
          >
            <Icon name="MessageCircle" size={16} />
          </button>
        </div>

        {/* 3D Rotation Effect */}
        <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Rating */}
        <div className="mb-3">
          <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
            {gem.name}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={i < Math.floor(gem.rating) ? 'text-accent' : 'text-surface-400'}
                />
              ))}
            </div>
            <span className="text-text-tertiary font-poppins text-xs">
              ({gem.reviews})
            </span>
          </div>
        </div>

        {/* Significance */}
        <p className="text-text-secondary font-poppins text-sm mb-4 line-clamp-2">
          {gem.significance}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1 mb-4">
          {gem.benefits.slice(0, 2).map((benefit, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xl font-bold text-text-primary">
              {formatPrice(gem.price)}
            </div>
            {gem.originalPrice > gem.price && (
              <div className="text-text-tertiary line-through text-sm">
                {formatPrice(gem.originalPrice)}
              </div>
            )}
          </div>
          
          {gem.originalPrice > gem.price && (
            <div className="px-2 py-1 bg-success/20 text-success text-xs font-medium rounded">
              {Math.round(((gem.originalPrice - gem.price) / gem.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
          View Details & Buy
        </button>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-cosmic opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default GemCard;