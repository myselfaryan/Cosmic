import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RudrakshaCard = ({ rudraksha }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${rudraksha.name}. Can you provide more details about its spiritual significance, authenticity, and pricing? I'd also like to know about the proper wearing methods and mantras.`
    );
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewDetails = () => {
    // Pass the mukhi count as a URL parameter so the individual page knows which Rudraksha to display
    window.location.href = `/individual-rudraksha-product?mukhi=${rudraksha.mukhiCount}`;
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Extremely Rare': return 'text-error';
      case 'Very Rare': return 'text-warning';
      case 'Rare': return 'text-accent';
      case 'Uncommon': return 'text-primary';
      default: return 'text-success';
    }
  };

  return (
    <motion.div
      className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl p-6 cosmic-shadow hover:cosmic-shadow-lg transition-all duration-500 border border-surface-600/30 hover:border-primary/30"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Rarity Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm ${getRarityColor(rudraksha.rarity)}`}>
          {rudraksha.rarity}
        </span>
      </div>

      {/* 3D Model Container */}
      <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-surface-700 to-surface-800">
        <motion.div
          className="w-full h-full flex items-center justify-center"
          animate={{
            rotateY: isHovered ? 360 : 0,
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: isHovered ? Infinity : 0,
          }}
        >
          <Image
            src={rudraksha.image}
            alt={rudraksha.name}
            className="w-32 h-32 object-cover rounded-full cosmic-shadow-lg"
          />
        </motion.div>

        {/* Swaying Animation Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Mukhi Pattern Highlight */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-accent rounded-full"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-accent font-bold text-sm">{rudraksha.mukhiCount}</span>
            </div>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
            {rudraksha.name}
          </h3>
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Crown" size={16} color="#F59E0B" />
            <span className="text-sm text-accent font-medium">{rudraksha.deity}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <Icon name="Sparkles" size={16} color="#10B981" className="mt-0.5 flex-shrink-0" />
            <p className="text-sm text-text-secondary font-poppins line-clamp-2">
              {rudraksha.benefits}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} color="#6B46C1" />
            <span className="text-sm text-text-tertiary">{rudraksha.origin}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-600/30">
          <div>
            <span className="text-sm text-text-tertiary">Starting from</span>
            <div className="text-xl font-bold text-text-primary">
              ₹{rudraksha.startingPrice.toLocaleString('en-IN')}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-text-tertiary mb-1">Size</div>
            <span className="text-sm font-medium text-text-secondary">{rudraksha.size}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleViewDetails}
            className="flex-1 px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-all duration-300 font-medium text-sm"
          >
            View Details
          </button>
          <button
            onClick={handleWhatsAppInquiry}
            className="px-4 py-2 bg-success hover:bg-success-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
            aria-label="WhatsApp Inquiry"
          >
            <Icon name="MessageCircle" size={16} />
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {isHovered && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              y: [null, '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RudrakshaCard;