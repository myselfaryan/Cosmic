import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const EducationalSidebar = () => {
  const [activeSection, setActiveSection] = useState('properties');

  const educationalContent = {
    properties: {
      title: 'Gem Properties',
      icon: 'Gem',
      content: [
        {
          title: 'Hardness Scale',
          description: 'Gemstones are rated on the Mohs scale from 1-10, with diamond being the hardest at 10.',
          tips: ['Ruby & Sapphire: 9', 'Emerald: 7.5-8', 'Amethyst: 7']
        },
        {
          title: 'Clarity Grades',
          description: 'The presence of inclusions affects a gemstone\'s value and beauty.',
          tips: ['FL: Flawless', 'VVS: Very Very Slight', 'VS: Very Slight']
        },
        {
          title: 'Cut Quality',
          description: 'Proper cutting enhances brilliance and maximizes the stone\'s natural beauty.',
          tips: ['Excellent: Maximum brilliance', 'Good: Great value', 'Fair: Budget option']
        }
      ]
    },
    astrology: {
      title: 'Astrological Significance',
      icon: 'Star',
      content: [
        {
          title: 'Planetary Connections',
          description: 'Each gemstone is associated with specific planets and their energies.',
          tips: ['Sun: Ruby, Red Coral', 'Moon: Pearl, Moonstone', 'Mars: Red Coral, Carnelian']
        },
        {
          title: 'Chakra Alignment',
          description: 'Gemstones help balance and activate different chakras in the body.',
          tips: ['Root: Red stones', 'Heart: Green stones', 'Throat: Blue stones']
        },
        {
          title: 'Wearing Guidelines',
          description: 'Proper timing and methods for wearing gemstones for maximum benefit.',
          tips: ['Morning hours preferred', 'Clean before wearing', 'Right hand for positive energy']
        }
      ]
    },
    care: {
      title: 'Care & Maintenance',
      icon: 'Shield',
      content: [
        {
          title: 'Cleaning Methods',
          description: 'Different gemstones require specific cleaning approaches to maintain their luster.',
          tips: ['Soft brush with mild soap', 'Ultrasonic for hard stones', 'Avoid harsh chemicals']
        },
        {
          title: 'Storage Tips',
          description: 'Proper storage prevents scratches and maintains gemstone quality.',
          tips: ['Separate compartments', 'Soft cloth wrapping', 'Away from direct sunlight']
        },
        {
          title: 'Energetic Cleansing',
          description: 'Regular energetic cleansing maintains the spiritual properties of gemstones.',
          tips: ['Moonlight exposure', 'Running water cleanse', 'Sage smoke purification']
        }
      ]
    }
  };

  const sections = Object.keys(educationalContent);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-24 bg-surface rounded-xl p-6 cosmic-shadow"
    >
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BookOpen" size={20} className="text-accent" />
        <h3 className="text-lg font-cinzel font-semibold text-text-primary">
          Gemstone Guide
        </h3>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-col space-y-2 mb-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
              activeSection === section
                ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-text-primary hover:bg-surface-600/50'
            }`}
          >
            <Icon 
              name={educationalContent[section].icon} 
              size={18} 
              className={activeSection === section ? 'text-primary' : 'text-accent'}
            />
            <span className="font-poppins font-medium">
              {educationalContent[section].title}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {educationalContent[activeSection].content.map((item, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-cinzel font-semibold text-text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-text-secondary font-poppins text-sm mb-3">
                {item.description}
              </p>
              <ul className="space-y-1">
                {item.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <Icon name="ChevronRight" size={12} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-tertiary font-poppins text-xs">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <div className="mt-8 pt-6 border-t border-surface-600">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageCircle" size={20} color="white" />
          </div>
          <h4 className="font-cinzel font-semibold text-text-primary mb-2">
            Need Expert Guidance?
          </h4>
          <p className="text-text-secondary font-poppins text-sm mb-4">
            Our gemstone experts are here to help you choose the perfect stone for your needs.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+919876543210';
              const message = encodeURIComponent('Hi! I need expert guidance in choosing the right gemstone. Can you help me?');
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className="w-full px-4 py-3 bg-success text-white font-medium rounded-lg hover:bg-success-600 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Chat with Expert</span>
          </button>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Lightbulb" size={16} className="text-accent" />
          <span className="font-cinzel font-semibold text-accent text-sm">
            Quick Tip
          </span>
        </div>
        <p className="text-text-secondary font-poppins text-xs">
          Always buy certified gemstones from trusted sources. Look for lab certificates and ask about the stone's origin and treatment history.
        </p>
      </div>
    </motion.div>
  );
};

export default EducationalSidebar;