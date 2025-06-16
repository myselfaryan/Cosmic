import React from 'react';
import Icon from '../../../components/AppIcon';

const PricingOptions = ({ 
  sizes, 
  qualities, 
  selectedSize, 
  selectedQuality, 
  onSizeChange, 
  onQualityChange, 
  currentPrice 
}) => {
  return (
    <div className="space-y-6">
      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Ruler" size={18} className="text-accent" />
          <span>Select Size</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size.id)}
              className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                selectedSize === size.id
                  ? 'bg-primary/20 border-primary text-primary' :'bg-surface/20 border-surface-600 text-text-secondary hover:bg-surface/30 hover:border-surface-500'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{size.name}</h4>
                <span className="font-bold">₹{size.price.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-sm opacity-80">{size.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Quality Selection */}
      <div>
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Star" size={18} className="text-accent" />
          <span>Select Quality</span>
        </h3>
        
        <div className="space-y-3">
          {qualities.map((quality) => (
            <button
              key={quality.id}
              onClick={() => onQualityChange(quality.id)}
              className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                selectedQuality === quality.id
                  ? 'bg-primary/20 border-primary' :'bg-surface/20 border-surface-600 hover:bg-surface/30 hover:border-surface-500'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className={`font-medium ${
                    selectedQuality === quality.id ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {quality.name}
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">{quality.description}</p>
                </div>
                <span className={`font-bold ${
                  selectedQuality === quality.id ? 'text-primary' : 'text-text-primary'
                }`}>
                  {quality.price > 0 ? `+₹${quality.price.toLocaleString('en-IN')}` : 'Base Price'}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {quality.features.map((feature, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs ${
                      selectedQuality === quality.id
                        ? 'bg-primary/20 text-primary' :'bg-surface/50 text-text-tertiary'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-cinzel font-semibold text-text-primary">
            Total Price
          </h3>
          <div className="text-right">
            <div className="text-2xl font-cinzel font-bold text-accent">
              ₹{currentPrice.toLocaleString('en-IN')}
            </div>
            <p className="text-text-secondary text-sm">Including all taxes</p>
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">
              Size: {sizes.find(s => s.id === selectedSize)?.name}
            </span>
            <span className="text-text-primary">
              ₹{sizes.find(s => s.id === selectedSize)?.price.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">
              Quality: {qualities.find(q => q.id === selectedQuality)?.name}
            </span>
            <span className="text-text-primary">
              {qualities.find(q => q.id === selectedQuality)?.price > 0 
                ? `+₹${qualities.find(q => q.id === selectedQuality)?.price.toLocaleString('en-IN')}`
                : 'Included'
              }
            </span>
          </div>
          <hr className="border-surface-600 my-2" />
          <div className="flex justify-between font-medium">
            <span className="text-text-primary">Total Amount</span>
            <span className="text-accent">₹{currentPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-surface/20 rounded-lg">
          <Icon name="Shield" size={24} className="text-success mx-auto mb-2" />
          <p className="text-text-primary font-medium text-sm">Authenticity Guaranteed</p>
        </div>
        <div className="text-center p-4 bg-surface/20 rounded-lg">
          <Icon name="Truck" size={24} className="text-primary mx-auto mb-2" />
          <p className="text-text-primary font-medium text-sm">Free Shipping</p>
        </div>
        <div className="text-center p-4 bg-surface/20 rounded-lg">
          <Icon name="RefreshCw" size={24} className="text-accent mx-auto mb-2" />
          <p className="text-text-primary font-medium text-sm">30-Day Return</p>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;