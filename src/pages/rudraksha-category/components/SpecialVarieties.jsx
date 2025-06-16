import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SpecialVarieties = ({ specialVarieties }) => {
  const handleWhatsAppInquiry = (variety) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${variety.name}. This is an extremely rare variety and I'd like to know more about its availability, authenticity certificates, and spiritual significance. Can you provide detailed information?`
    );
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
              <Icon name="Crown" size={24} color="#F59E0B" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary">
              Sacred Special Varieties
            </h2>
          </div>
          <p className="text-xl text-text-secondary font-poppins max-w-3xl mx-auto">
            Discover the rarest and most powerful Rudraksha varieties, naturally formed by divine grace. 
            These extraordinary beads carry immense spiritual significance and are treasured by devotees worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {specialVarieties.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden cosmic-shadow hover:cosmic-shadow-lg transition-all duration-500 border border-surface-600/30 hover:border-primary/30"
            >
              {/* Rarity Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-error/20 text-error border border-error/30">
                  {variety.rarity}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent"></div>
                
                {/* Floating Animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
                    <Icon name="Sparkles" size={24} color="#F59E0B" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {variety.name}
                </h3>
                
                <p className="text-text-secondary font-poppins text-sm mb-4 line-clamp-4">
                  {variety.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <Icon name="Sparkles" size={16} color="#10B981" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-poppins">
                      {variety.benefits}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-600/30">
                  <div>
                    <span className="text-sm text-text-tertiary">Starting from</span>
                    <div className="text-2xl font-bold text-text-primary">
                      ₹{variety.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <Icon name="Crown" size={24} color="#F59E0B" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(variety)}
                    className="w-full px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Icon name="MessageCircle" size={18} />
                    <span>Inquire About Availability</span>
                  </button>
                  
                  <div className="flex items-center justify-center space-x-2 text-xs text-text-tertiary">
                    <Icon name="Shield" size={14} color="#10B981" />
                    <span>Authenticity Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -50, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3 + i,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-8 cosmic-shadow border border-surface-600/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Icon name="Info" size={24} color="#F59E0B" />
              <h3 className="text-xl font-cinzel font-semibold text-text-primary">
                About Special Varieties
              </h3>
            </div>
            <p className="text-text-secondary font-poppins leading-relaxed">
              These special Rudraksha varieties are extremely rare natural formations that occur once in thousands of beads. 
              Each piece is unique and carries extraordinary spiritual power. Due to their rarity, availability is limited and 
              authentication is crucial. Our experts personally verify each special variety with detailed certificates and 
              spiritual guidance for proper usage and care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialVarieties;