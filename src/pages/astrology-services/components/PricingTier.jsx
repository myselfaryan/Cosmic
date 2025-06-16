import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PricingTier = ({ tier, services, index, onWhatsAppBooking }) => {
  const getAveragePrice = (tierName) => {
    const tierKey = tierName.toLowerCase();
    const prices = services.map(service => service.price[tierKey]);
    return Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length);
  };

  const averagePrice = getAveragePrice(tier.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${tier.popular ? 'transform scale-105' : ''}`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-cosmic px-4 py-1 rounded-full text-text-primary text-sm font-semibold cosmic-glow">
            Most Popular
          </div>
        </div>
      )}

      <div className={`relative p-8 rounded-2xl border transition-all duration-300 h-full ${
        tier.popular 
          ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 cosmic-glow' :'bg-surface/50 border-surface-600 hover:border-primary/30 hover:bg-surface/70'
      }`}>
        {/* Tier Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-cinzel font-bold text-text-primary mb-2">
            {tier.name}
          </h3>
          <p className="text-text-secondary font-poppins text-sm mb-4">
            {tier.description}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-bold text-accent">
              ₹{averagePrice.toLocaleString('en-IN')}
            </span>
            <div className="text-text-tertiary text-sm">
              <div>avg. price</div>
              <div>per session</div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <ul className="space-y-3">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <Icon 
                  name="Check" 
                  size={16} 
                  className="text-success flex-shrink-0 mt-1" 
                />
                <span className="text-text-secondary font-poppins text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Prices */}
        <div className="mb-8">
          <h4 className="text-text-primary font-semibold mb-4 font-inter">
            Service Pricing:
          </h4>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.id} className="flex items-center justify-between text-sm">
                <span className="text-text-tertiary font-poppins">
                  {service.title}
                </span>
                <span className="text-text-secondary font-semibold">
                  ₹{service.price[tier.name.toLowerCase()].toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            const message = `Hi! I'm interested in ${tier.name} tier consultations. Can you help me book a session?

Tier: ${tier.name}
Average Price: ₹${averagePrice.toLocaleString('en-IN')}

Please provide available services and time slots.`;
            
            const phoneNumber = '+919876543210';
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
          }}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            tier.popular
              ? 'bg-gradient-cosmic text-text-primary hover:cosmic-glow' :'border border-primary text-primary hover:bg-primary/10'
          }`}
        >
          <Icon name="MessageCircle" size={20} />
          <span>Choose {tier.name}</span>
        </button>

        {/* Cosmic Effects for Popular Tier */}
        {tier.popular && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PricingTier;