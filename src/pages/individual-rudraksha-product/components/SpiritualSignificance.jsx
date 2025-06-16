import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SpiritualSignificance = ({ rudrakshaData }) => {
  const [expandedSection, setExpandedSection] = useState('spiritual');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const benefitSections = [
    {
      id: 'spiritual',
      title: 'Spiritual Benefits',
      icon: 'Star',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      benefits: rudrakshaData.spiritualBenefits
    },
    {
      id: 'health',
      title: 'Health Benefits',
      icon: 'Heart',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      benefits: rudrakshaData.healthBenefits
    },
    {
      id: 'wealth',
      title: 'Wealth Benefits',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      benefits: rudrakshaData.wealthBenefits
    }
  ];

  return (
    <div className="space-y-8">
      {/* Deity Information */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 cosmic-glow animate-float">
          <Icon name="Crown" size={32} color="#F59E0B" />
        </div>
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-2">
          Sacred to {rudrakshaData.deity}
        </h2>
        <p className="text-text-secondary font-poppins">
          Ruled by {rudrakshaData.planet} • Activates {rudrakshaData.chakra}
        </p>
      </div>

      {/* Mantra Display */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-3">
          Sacred Mantra
        </h3>
        <div className="text-2xl font-cinzel font-bold text-accent mb-2">
          {rudrakshaData.mantra}
        </div>
        <p className="text-text-secondary text-sm font-poppins">
          Chant 108 times daily for maximum spiritual benefits
        </p>
      </div>

      {/* Benefits Sections */}
      <div className="space-y-4">
        {benefitSections.map((section) => (
          <div
            key={section.id}
            className={`rounded-xl border transition-all duration-300 ${
              expandedSection === section.id
                ? `${section.bgColor} ${section.borderColor} cosmic-shadow`
                : 'bg-surface/20 border-surface-600 hover:bg-surface/30'
            }`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  expandedSection === section.id ? section.bgColor : 'bg-surface/50'
                }`}>
                  <Icon 
                    name={section.icon} 
                    size={20} 
                    className={expandedSection === section.id ? section.color : 'text-text-tertiary'} 
                  />
                </div>
                <div>
                  <h3 className={`text-lg font-cinzel font-semibold ${
                    expandedSection === section.id ? section.color : 'text-text-primary'
                  }`}>
                    {section.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {section.benefits.length} key benefits
                  </p>
                </div>
              </div>
              <Icon 
                name={expandedSection === section.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-text-tertiary" 
              />
            </button>

            {expandedSection === section.id && (
              <div className="px-6 pb-6">
                <div className="grid gap-3">
                  {section.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-surface/30 rounded-lg"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${section.bgColor}`}>
                        <Icon name="Check" size={12} className={section.color} />
                      </div>
                      <p className="text-text-secondary font-poppins leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Spiritual Significance Description */}
      <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="BookOpen" size={20} className="text-accent" />
          <span>Ancient Wisdom</span>
        </h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-text-secondary font-poppins leading-relaxed mb-4">
            {rudrakshaData.description}
          </p>
        </div>
      </div>

      {/* Astrological Significance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Globe" size={24} className="text-primary" />
            <h4 className="text-lg font-cinzel font-semibold text-text-primary">
              Planetary Influence
            </h4>
          </div>
          <p className="text-text-secondary font-poppins">
            Governed by <span className="text-primary font-medium">{rudrakshaData.planet}</span>, 
            this Rudraksha enhances wisdom, knowledge, and spiritual growth while providing 
            protection from negative planetary influences.
          </p>
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Zap" size={24} className="text-accent" />
            <h4 className="text-lg font-cinzel font-semibold text-text-primary">
              Chakra Activation
            </h4>
          </div>
          <p className="text-text-secondary font-poppins">
            Resonates with the <span className="text-accent font-medium">{rudrakshaData.chakra}</span>, 
            promoting clear communication, self-expression, and spiritual awakening through 
            enhanced energy flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpiritualSignificance;