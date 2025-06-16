import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Astrology Consultation",
      content: `The birth chart reading was incredibly accurate and insightful. The astrologer provided detailed guidance about my career transition and the remedial solutions have brought positive changes in my life. Highly recommended for anyone seeking authentic Vedic astrology guidance.`,
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Blue Sapphire Purchase",
      content: `Purchased a certified blue sapphire for Saturn remedies. The quality is exceptional and came with proper lab certification. The 3D preview feature helped me examine the gem thoroughly before purchase. Noticed positive effects within weeks of wearing it.`,
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "5 Mukhi Rudraksha",
      content: `The 5 Mukhi Rudraksha I received is absolutely authentic with clear natural lines. The spiritual significance guide and proper wearing instructions were very helpful. I feel more peaceful and focused since wearing it. Excellent customer service and fast delivery.`,
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      location: "Jaipur, Rajasthan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Marriage Compatibility",
      content: `The compatibility analysis for my daughter's marriage was thorough and accurate. The astrologer explained the planetary positions clearly and suggested the right muhurat. The consultation helped us make an informed decision. Professional and trustworthy service.`,
      date: "1 week ago",
      verified: true
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Emerald Gemstone",
      content: `Beautiful emerald with perfect clarity and color. The astrological benefits mentioned are genuine - I've experienced improved communication and financial growth. The packaging was secure and the authenticity certificate gives complete confidence in the purchase.`,
      date: "2 months ago",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-accent fill-current' : 'text-text-tertiary'}
      />
    ));
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4 lg:px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface/30 to-transparent rounded-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="font-poppins text-lg text-text-secondary max-w-2xl mx-auto">
            Discover the transformative experiences of thousands who found their spiritual path with us
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
            <Icon name="Heart" size={16} className="text-accent" />
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="glassmorphism rounded-2xl p-8 lg:p-12 cosmic-shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center opacity-20">
              <Icon name="Quote" size={24} className="text-text-primary" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-4">
                  <Image
                    src={currentTestimonialData.avatar}
                    alt={currentTestimonialData.name}
                    className="w-20 h-20 rounded-full object-cover cosmic-shadow"
                  />
                  {currentTestimonialData.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  )}
                </div>
                
                <h4 className="font-cinzel text-xl font-semibold text-text-primary mb-1">
                  {currentTestimonialData.name}
                </h4>
                <p className="font-poppins text-sm text-text-tertiary mb-3">
                  {currentTestimonialData.location}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3">
                  {renderStars(currentTestimonialData.rating)}
                </div>
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/20 rounded-full">
                  <Icon name="ShoppingBag" size={12} className="text-primary" />
                  <span className="font-poppins text-xs text-primary font-medium">
                    {currentTestimonialData.service}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="font-inter text-lg text-text-secondary leading-relaxed mb-6">
                  "{currentTestimonialData.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-text-tertiary">
                    <Icon name="Clock" size={14} />
                    <span className="font-poppins text-sm">{currentTestimonialData.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="Shield" size={14} />
                    <span className="font-poppins text-sm font-medium">Verified Purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-surface transition-all duration-300 cosmic-shadow"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-surface transition-all duration-300 cosmic-shadow"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-accent scale-125' :'bg-text-tertiary hover:bg-text-secondary'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: 'Users', value: '10,000+', label: 'Happy Clients' },
            { icon: 'Star', value: '4.9/5', label: 'Average Rating' },
            { icon: 'Award', value: '15+', label: 'Years Experience' },
            { icon: 'Shield', value: '100%', label: 'Authentic Products' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 glassmorphism rounded-lg">
              <Icon name={stat.icon} size={24} className="text-accent mx-auto mb-2" />
              <div className="font-cinzel text-2xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-poppins text-sm text-text-tertiary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;