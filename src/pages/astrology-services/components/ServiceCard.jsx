import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceCard = ({ service, index, isSelected, onSelect, onWhatsAppBooking }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer transition-all duration-300 ${
        isSelected ? 'transform scale-105' : ''
      }`}
      onClick={onSelect}
    >
      <div className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        isSelected 
          ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 cosmic-glow' :'bg-surface/50 border-surface-600 hover:border-primary/30 hover:bg-surface/70'
      }`}>
        {/* Service Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isSelected 
              ? 'bg-gradient-cosmic cosmic-glow' :'bg-primary/20 group-hover:bg-primary/30'
          }`}>
            <Icon 
              name={service.icon} 
              size={28} 
              className={isSelected ? 'text-text-primary' : 'text-primary'} 
            />
          </div>
          <div className="text-right">
            <div className="text-text-secondary text-sm font-poppins">Duration</div>
            <div className="text-accent font-semibold">{service.duration}</div>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-text-secondary font-poppins mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="text-text-primary font-semibold mb-3 font-inter">
            What's Included:
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <Icon 
                  name="Check" 
                  size={16} 
                  className="text-success flex-shrink-0" 
                />
                <span className="text-text-secondary text-sm font-poppins">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm font-poppins mb-2">
            <span className="text-text-tertiary">Basic</span>
            <span className="text-text-secondary">₹{service.price.basic.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-poppins mb-2">
            <span className="text-text-tertiary">Premium</span>
            <span className="text-accent font-semibold">₹{service.price.premium.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-poppins">
            <span className="text-text-tertiary">Comprehensive</span>
            <span className="text-text-secondary">₹{service.price.comprehensive.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWhatsAppBooking(service, 'premium');
            }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Book Premium Session</span>
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onWhatsAppBooking(service, 'basic');
              }}
              className="flex-1 px-4 py-2 border border-surface-600 text-text-secondary hover:text-text-primary hover:border-primary/30 rounded-lg transition-all duration-200 text-sm font-poppins"
            >
              Basic
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onWhatsAppBooking(service, 'comprehensive');
              }}
              className="flex-1 px-4 py-2 border border-surface-600 text-text-secondary hover:text-text-primary hover:border-primary/30 rounded-lg transition-all duration-200 text-sm font-poppins"
            >
              Comprehensive
            </button>
          </div>
        </div>

        {/* Expand Indicator */}
        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon 
              name="ChevronDown" 
              size={20} 
              className="text-text-tertiary" 
            />
          </motion.div>
        </div>

        {/* Cosmic Particles */}
        {isSelected && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;