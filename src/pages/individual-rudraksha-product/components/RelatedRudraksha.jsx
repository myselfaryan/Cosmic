import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedRudraksha = ({ relatedRudraksha }) => {
  const handleProductClick = (productId) => {
    // In a real app, this would navigate to the specific product
    window.location.href = `/individual-rudraksha-product?id=${productId}`;
  };

  const handleWhatsAppInquiry = (product) => {
    const message = `Hi! I'm interested in the ${product.name} priced at ₹${product.price.toLocaleString('en-IN')}. Can you provide more details about its spiritual benefits?`;
    const phoneNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
          Related Rudraksha
        </h2>
        <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
          Discover other powerful Rudraksha beads that complement your spiritual journey
        </p>
      </div>

      {/* Related Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedRudraksha.map((product, index) => (
          <div
            key={product.id}
            className="bg-surface/20 rounded-xl overflow-hidden cosmic-shadow hover:cosmic-glow transition-all duration-300 group"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Floating Animation Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quick Action Buttons */}
              <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleProductClick(product.id)}
                  className="w-10 h-10 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon name="Eye" size={16} className="text-text-primary" />
                </button>
                <button
                  onClick={() => handleWhatsAppInquiry(product)}
                  className="w-10 h-10 bg-success/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-success transition-colors duration-200"
                >
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </button>
              </div>

              {/* Spiritual Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Crown" size={14} className="text-accent" />
                  <span className="text-text-secondary text-sm">{product.deity}</span>
                </div>
                
                <p className="text-text-secondary text-sm font-poppins">
                  {product.benefits}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-cinzel font-bold text-accent">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < 4 ? 'text-accent' : 'text-surface-600'}
                    />
                  ))}
                  <span className="text-text-tertiary text-xs ml-1">(4.8)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleProductClick(product.id)}
                  className="flex-1 px-4 py-2 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleWhatsAppInquiry(product)}
                  className="px-4 py-2 bg-success hover:bg-success-600 text-white rounded-lg transition-colors duration-200 text-sm"
                >
                  <Icon name="MessageCircle" size={16} />
                </button>
              </div>
            </div>

            {/* Spiritual Energy Indicator */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <a
          href="/rudraksha-category"
          className="inline-flex items-center space-x-2 px-8 py-3 bg-surface/30 hover:bg-surface/50 text-text-primary font-medium rounded-lg border border-surface-600 hover:border-primary/30 transition-all duration-300 group"
        >
          <span>Explore All Rudraksha</span>
          <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      {/* Spiritual Guidance */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center">
        <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 cosmic-glow animate-float">
          <Icon name="Lightbulb" size={24} color="#F59E0B" />
        </div>
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-3">
          Need Spiritual Guidance?
        </h3>
        <p className="text-text-secondary font-poppins mb-4 max-w-2xl mx-auto">
          Not sure which Rudraksha is right for you? Our spiritual experts can guide you based on your birth chart, spiritual goals, and personal needs.
        </p>
        <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
          <Icon name="Phone" size={16} />
          <span>Book Free Consultation</span>
        </button>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RelatedRudraksha;