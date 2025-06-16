import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EducationalSection = () => {
  const [activeTab, setActiveTab] = useState('astrology');
  const [hoveredZodiac, setHoveredZodiac] = useState(null);

  const tabs = [
    { id: 'astrology', label: 'Vedic Astrology', icon: 'Star' },
    { id: 'gems', label: 'Gemstone Power', icon: 'Gem' },
    { id: 'rudraksha', label: 'Sacred Rudraksha', icon: 'Circle' }
  ];

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', element: 'Fire', planet: 'Mars', dates: 'Mar 21 - Apr 19', color: 'text-red-400' },
    { name: 'Taurus', symbol: '♉', element: 'Earth', planet: 'Venus', dates: 'Apr 20 - May 20', color: 'text-green-400' },
    { name: 'Gemini', symbol: '♊', element: 'Air', planet: 'Mercury', dates: 'May 21 - Jun 20', color: 'text-yellow-400' },
    { name: 'Cancer', symbol: '♋', element: 'Water', planet: 'Moon', dates: 'Jun 21 - Jul 22', color: 'text-blue-400' },
    { name: 'Leo', symbol: '♌', element: 'Fire', planet: 'Sun', dates: 'Jul 23 - Aug 22', color: 'text-orange-400' },
    { name: 'Virgo', symbol: '♍', element: 'Earth', planet: 'Mercury', dates: 'Aug 23 - Sep 22', color: 'text-green-500' },
    { name: 'Libra', symbol: '♎', element: 'Air', planet: 'Venus', dates: 'Sep 23 - Oct 22', color: 'text-pink-400' },
    { name: 'Scorpio', symbol: '♏', element: 'Water', planet: 'Mars', dates: 'Oct 23 - Nov 21', color: 'text-red-500' },
    { name: 'Sagittarius', symbol: '♐', element: 'Fire', planet: 'Jupiter', dates: 'Nov 22 - Dec 21', color: 'text-purple-400' },
    { name: 'Capricorn', symbol: '♑', element: 'Earth', planet: 'Saturn', dates: 'Dec 22 - Jan 19', color: 'text-gray-400' },
    { name: 'Aquarius', symbol: '♒', element: 'Air', planet: 'Saturn', dates: 'Jan 20 - Feb 18', color: 'text-cyan-400' },
    { name: 'Pisces', symbol: '♓', element: 'Water', planet: 'Jupiter', dates: 'Feb 19 - Mar 20', color: 'text-blue-500' }
  ];

  const educationalContent = {
    astrology: {
      title: "Understanding Vedic Astrology",
      description: "Discover the ancient wisdom of Vedic astrology and how celestial bodies influence your life path, personality, and destiny.",
      points: [
        "Birth chart analysis reveals your karmic patterns and life purpose",
        "Planetary positions at birth determine personality traits and tendencies",
        "Dasha periods indicate favorable and challenging life phases",
        "Remedial measures can help balance negative planetary influences",
        "Compatibility analysis ensures harmonious relationships"
      ]
    },
    gems: {
      title: "The Power of Gemstones",
      description: "Learn how authentic gemstones can enhance positive planetary influences and provide protection from negative energies.",
      points: [
        "Each gemstone resonates with specific planetary energies",
        "Proper wearing methods maximize gemstone benefits",
        "Quality and authenticity determine effectiveness",
        "Astrological consultation ensures right gemstone selection",
        "Regular cleansing maintains gemstone potency"
      ]
    },
    rudraksha: {
      title: "Sacred Rudraksha Beads",
      description: "Explore the spiritual significance of rudraksha beads and their role in meditation, healing, and spiritual growth.",
      points: [
        "Different mukhi (faces) offer specific spiritual benefits",
        "Natural electromagnetic properties promote healing",
        "Regular wearing enhances meditation and focus",
        "Authentic rudraksha provides divine protection",
        "Proper mantras amplify rudraksha power"
      ]
    }
  };

  const currentContent = educationalContent[activeTab];

  return (
    <section className="py-20 px-4 lg:px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Spiritual Wisdom & Knowledge
          </h2>
          <p className="font-poppins text-lg text-text-secondary max-w-3xl mx-auto">
            Deepen your understanding of ancient spiritual sciences and make informed decisions on your spiritual journey
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
            <Icon name="BookOpen" size={16} className="text-accent" />
            <div className="w-16 h-0.5 bg-gradient-cosmic"></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex space-x-2 p-2 glassmorphism rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-cosmic text-text-primary cosmic-shadow'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/30'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <div className="glassmorphism rounded-2xl p-8 cosmic-shadow-lg">
            <h3 className="font-cinzel text-2xl font-semibold text-text-primary mb-4">
              {currentContent.title}
            </h3>
            <p className="font-poppins text-text-secondary mb-6 leading-relaxed">
              {currentContent.description}
            </p>
            
            <div className="space-y-4">
              {currentContent.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-cosmic rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-text-primary" />
                  </div>
                  <p className="font-poppins text-text-secondary leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-surface-600">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/20 text-primary font-semibold rounded-lg hover:bg-primary/30 transition-all duration-300">
                <Icon name="BookOpen" size={18} />
                <span>Learn More</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Zodiac Wheel */}
          <div className="relative">
            <div className="glassmorphism rounded-2xl p-8 cosmic-shadow-lg">
              <h3 className="font-cinzel text-2xl font-semibold text-text-primary mb-6 text-center">
                Interactive Zodiac Wheel
              </h3>
              
              {/* Zodiac Wheel */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
                    <Icon name="Sparkles" size={32} className="text-accent animate-pulse" />
                  </div>
                </div>

                {/* Zodiac Signs */}
                {zodiacSigns.map((sign, index) => {
                  const angle = (index * 30) - 90; // Start from top
                  const radius = 120;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;

                  return (
                    <div
                      key={sign.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                      }}
                      onMouseEnter={() => setHoveredZodiac(sign)}
                      onMouseLeave={() => setHoveredZodiac(null)}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredZodiac?.name === sign.name
                          ? 'bg-gradient-cosmic cosmic-glow scale-125' :'bg-surface/50 hover:bg-surface/70'
                      }`}>
                        <span className={`text-xl ${sign.color} group-hover:animate-pulse`}>
                          {sign.symbol}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="120"
                    fill="none"
                    stroke="rgba(107, 70, 193, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-spin"
                    style={{ animationDuration: '60s' }}
                  />
                </svg>
              </div>

              {/* Hovered Sign Info */}
              {hoveredZodiac && (
                <div className="mt-6 p-4 bg-surface/30 rounded-lg text-center animate-fade-in">
                  <h4 className={`font-cinzel text-lg font-semibold ${hoveredZodiac.color} mb-2`}>
                    {hoveredZodiac.name}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-poppins text-text-tertiary">Element:</span>
                      <span className="font-poppins text-text-primary ml-2">{hoveredZodiac.element}</span>
                    </div>
                    <div>
                      <span className="font-poppins text-text-tertiary">Planet:</span>
                      <span className="font-poppins text-text-primary ml-2">{hoveredZodiac.planet}</span>
                    </div>
                  </div>
                  <p className="font-poppins text-text-secondary text-sm mt-2">
                    {hoveredZodiac.dates}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-xl p-8 cosmic-shadow">
            <h3 className="font-cinzel text-xl font-semibold text-text-primary mb-4">
              Ready to Begin Your Spiritual Journey?
            </h3>
            <p className="font-poppins text-text-secondary mb-6 max-w-2xl mx-auto">
              Get personalized guidance from our expert astrologers and discover the perfect spiritual products for your unique path.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
                <Icon name="Calendar" size={18} />
                <span>Book Consultation</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <Icon name="ShoppingBag" size={18} />
                <span>Browse Products</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;