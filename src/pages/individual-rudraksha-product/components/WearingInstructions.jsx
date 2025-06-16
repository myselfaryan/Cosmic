import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WearingInstructions = ({ rudrakshaData }) => {
  const [activeStep, setActiveStep] = useState(0);

  const wearingSteps = [
    {
      title: 'Purification Ritual',
      icon: 'Droplets',
      description: 'Cleanse the Rudraksha with Ganga water or clean water mixed with rock salt',
      details: [
        'Soak the Rudraksha in clean water for 24 hours',
        'Gently clean with a soft brush to remove any dirt',
        'Rinse with Ganga water or blessed water if available',
        'Pat dry with a clean cloth'
      ],
      timing: 'Before first wear'
    },
    {
      title: 'Energization Process',
      icon: 'Zap',
      description: 'Activate the spiritual energies through proper mantras and prayers',
      details: [
        'Hold the Rudraksha in your right hand',
        'Chant "Om Hreem Namah" 108 times',
        'Meditate on Lord Shiva for 5-10 minutes',
        'Offer prayers with incense and flowers'
      ],
      timing: 'During Brahma Muhurta (4-6 AM)'
    },
    {
      title: 'Threading & Wearing',
      icon: 'Link',
      description: 'Properly thread and wear the Rudraksha for maximum benefits',
      details: [
        'Use red, yellow thread or gold/silver chain',
        'Thread through the natural hole carefully',
        'Wear as pendant, bracelet, or mala',
        'Keep close to skin for better energy transfer'
      ],
      timing: 'After morning prayers'
    },
    {
      title: 'Daily Practices',
      icon: 'Sun',
      description: 'Maintain spiritual discipline while wearing the Rudraksha',
      details: [
        'Chant the mantra daily during meditation',
        'Keep body and mind pure',
        'Avoid non-vegetarian food and alcohol',
        'Practice regular meditation and prayers'
      ],
      timing: 'Throughout the day'
    }
  ];

  const wearingMethods = [
    {
      method: 'Pendant',
      icon: 'Circle',
      description: 'Wear close to heart chakra for emotional balance',
      benefits: ['Direct heart chakra activation', 'Emotional stability', 'Spiritual protection']
    },
    {
      method: 'Bracelet',
      icon: 'Watch',
      description: 'Wear on right wrist for receiving divine energies',
      benefits: ['Continuous energy flow', 'Easy daily wear', 'Subtle spiritual influence']
    },
    {
      method: 'Mala',
      icon: 'Beads',
      description: 'Use for meditation and japa (chanting)',
      benefits: ['Enhanced meditation', 'Mantra counting', 'Deep spiritual practice']
    }
  ];

  const auspiciousTimes = [
    { time: 'Monday', description: 'Most auspicious day for Lord Shiva', icon: 'Calendar' },
    { time: 'Brahma Muhurta', description: '4:00 AM - 6:00 AM', icon: 'Sunrise' },
    { time: 'Pradosh Kaal', description: 'Evening twilight time', icon: 'Sunset' },
    { time: 'Shivratri', description: 'Most powerful day for activation', icon: 'Star' }
  ];

  return (
    <div className="space-y-8">
      {/* Step-by-Step Instructions */}
      <div>
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="BookOpen" size={24} className="text-accent" />
          <span>Sacred Wearing Process</span>
        </h2>

        <div className="space-y-4">
          {wearingSteps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                activeStep === index
                  ? 'bg-primary/10 border-primary/30 cosmic-shadow'
                  : 'bg-surface/20 border-surface-600 hover:bg-surface/30'
              }`}
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStep === index ? 'bg-primary/20' : 'bg-surface/50'
                  }`}>
                    <Icon 
                      name={step.icon} 
                      size={20} 
                      className={activeStep === index ? 'text-primary' : 'text-text-tertiary'} 
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg font-cinzel font-semibold ${
                      activeStep === index ? 'text-primary' : 'text-text-primary'
                    }`}>
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Icon name="Clock" size={12} className="text-accent" />
                      <span className="text-xs text-accent">{step.timing}</span>
                    </div>
                  </div>
                </div>
                <Icon 
                  name={activeStep === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-tertiary" 
                />
              </div>

              {activeStep === index && (
                <div className="px-6 pb-6">
                  <div className="grid gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start space-x-3 p-3 bg-surface/30 rounded-lg"
                      >
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-xs text-primary font-bold">{detailIndex + 1}</span>
                        </div>
                        <p className="text-text-secondary font-poppins leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wearing Methods */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Settings" size={20} className="text-accent" />
          <span>Wearing Methods</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wearingMethods.map((method, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow hover:cosmic-glow transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-3 animate-float">
                  <Icon name={method.icon} size={24} color="#F59E0B" />
                </div>
                <h4 className="text-lg font-cinzel font-semibold text-text-primary">
                  {method.method}
                </h4>
                <p className="text-text-secondary text-sm font-poppins mt-2">
                  {method.description}
                </p>
              </div>

              <div className="space-y-2">
                {method.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auspicious Times */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Clock" size={20} className="text-accent" />
          <span>Auspicious Times</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {auspiciousTimes.map((time, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20"
            >
              <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center">
                <Icon name={time.icon} size={16} color="#F59E0B" />
              </div>
              <div>
                <h4 className="font-cinzel font-semibold text-text-primary">{time.time}</h4>
                <p className="text-text-secondary text-sm">{time.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Guidelines */}
      <div className="bg-gradient-to-r from-error/10 to-warning/10 rounded-xl p-6 border border-warning/20">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="AlertTriangle" size={20} className="text-warning" />
          <span>Important Guidelines</span>
        </h3>
        
        <div className="grid gap-3">
          {[
            'Remove before sleeping, bathing, or during impure activities',
            'Maintain celibacy and pure thoughts while wearing',
            'Avoid wearing during eclipse periods',
            'Store in a clean, sacred place when not wearing',
            'Never let others touch your energized Rudraksha',
            'Replace the thread every 6 months or when it shows wear'
          ].map((guideline, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="AlertCircle" size={16} className="text-warning mt-0.5" />
              <p className="text-text-secondary font-poppins text-sm">{guideline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Instructions */}
      <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4">
          Complete Wearing Instructions
        </h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-text-secondary font-poppins leading-relaxed">
            {rudrakshaData.wearingMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WearingInstructions;