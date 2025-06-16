import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PricingSection = ({ gemData }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedQuality, setSelectedQuality] = useState('premium');

  // Mock pricing options
  const sizeOptions = [
    {
      id: 'small',
      label: 'Small',
      weight: '2.5-3.0 Carats',
      price: 85000,
      originalPrice: 95000,
      description: 'Perfect for daily wear'
    },
    {
      id: 'medium',
      label: 'Medium',
      weight: '3.0-3.5 Carats',
      price: 125000,
      originalPrice: 150000,
      description: 'Ideal astrological benefits',
      popular: true
    },
    {
      id: 'large',
      label: 'Large',
      weight: '3.5-4.0 Carats',
      price: 165000,
      originalPrice: 185000,
      description: 'Maximum spiritual impact'
    }
  ];

  const qualityOptions = [
    {
      id: 'good',
      label: 'Good Quality',
      clarity: 'SI1-SI2',
      price: 0, // Base price
      description: 'Natural inclusions, good color'
    },
    {
      id: 'premium',
      label: 'Premium Quality',
      clarity: 'VS1-VS2',
      price: 25000, // Additional cost
      description: 'Excellent clarity and color',
      popular: true
    },
    {
      id: 'luxury',
      label: 'Luxury Quality',
      clarity: 'VVS1-VVS2',
      price: 50000, // Additional cost
      description: 'Museum grade, flawless'
    }
  ];

  const getCurrentPrice = () => {
    const sizeOption = sizeOptions.find(option => option.id === selectedSize);
    const qualityOption = qualityOptions.find(option => option.id === selectedQuality);
    return sizeOption.price + qualityOption.price;
  };

  const getCurrentOriginalPrice = () => {
    const sizeOption = sizeOptions.find(option => option.id === selectedSize);
    const qualityOption = qualityOptions.find(option => option.id === selectedQuality);
    return sizeOption.originalPrice + qualityOption.price;
  };

  const getSavings = () => {
    return getCurrentOriginalPrice() - getCurrentPrice();
  };

  const getDiscountPercentage = () => {
    return Math.round((getSavings() / getCurrentOriginalPrice()) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="font-semibold text-text-primary mb-3">Select Size</h3>
        <div className="grid grid-cols-1 gap-3">
          {sizeOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setSelectedSize(option.id)}
              className={`relative p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedSize === option.id
                  ? 'border-primary bg-primary/10' :'border-surface-600 hover:border-surface-500 bg-surface/20'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.popular && (
                <div className="absolute -top-2 left-4 px-2 py-1 bg-accent text-background text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">{option.label}</div>
                  <div className="text-sm text-text-secondary">{option.weight}</div>
                  <div className="text-xs text-text-tertiary mt-1">{option.description}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-text-primary">
                    ₹{option.price.toLocaleString('en-IN')}
                  </div>
                  {option.originalPrice > option.price && (
                    <div className="text-sm text-text-tertiary line-through">
                      ₹{option.originalPrice.toLocaleString('en-IN')}
                    </div>
                  )}
                </div>
              </div>
              
              {selectedSize === option.id && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quality Selection */}
      <div>
        <h3 className="font-semibold text-text-primary mb-3">Select Quality Grade</h3>
        <div className="grid grid-cols-1 gap-3">
          {qualityOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setSelectedQuality(option.id)}
              className={`relative p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedQuality === option.id
                  ? 'border-primary bg-primary/10' :'border-surface-600 hover:border-surface-500 bg-surface/20'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.popular && (
                <div className="absolute -top-2 left-4 px-2 py-1 bg-accent text-background text-xs font-medium rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">{option.label}</div>
                  <div className="text-sm text-text-secondary">{option.clarity}</div>
                  <div className="text-xs text-text-tertiary mt-1">{option.description}</div>
                </div>
                <div className="text-right">
                  {option.price > 0 ? (
                    <div className="font-bold text-text-primary">
                      +₹{option.price.toLocaleString('en-IN')}
                    </div>
                  ) : (
                    <div className="font-bold text-success">Base Price</div>
                  )}
                </div>
              </div>
              
              {selectedQuality === option.id && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-gradient-to-r from-surface/30 to-surface/50 rounded-xl p-6 border border-surface-600">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Selected Configuration:</span>
            <span className="text-text-primary font-medium">
              {sizeOptions.find(o => o.id === selectedSize)?.label} • {qualityOptions.find(o => o.id === selectedQuality)?.label}
            </span>
          </div>
          
          <div className="border-t border-surface-600 pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-text-primary">Total Price:</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  ₹{getCurrentPrice().toLocaleString('en-IN')}
                </div>
                {getSavings() > 0 && (
                  <div className="text-sm text-text-tertiary line-through">
                    ₹{getCurrentOriginalPrice().toLocaleString('en-IN')}
                  </div>
                )}
              </div>
            </div>
            
            {getSavings() > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-success font-medium">You Save:</span>
                <div className="text-right">
                  <span className="text-success font-bold">
                    ₹{getSavings().toLocaleString('en-IN')} ({getDiscountPercentage()}% OFF)
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {/* Payment Options */}
          <div className="border-t border-surface-600 pt-4">
            <div className="text-sm text-text-secondary mb-2">Payment Options:</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} className="text-accent" />
                <span className="text-xs text-text-secondary">Card/UPI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Banknote" size={16} className="text-accent" />
                <span className="text-xs text-text-secondary">EMI Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Wallet" size={16} className="text-accent" />
                <span className="text-xs text-text-secondary">Wallet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Building" size={16} className="text-accent" />
                <span className="text-xs text-text-secondary">Net Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;