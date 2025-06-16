import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const EducationalContent = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const educationalTabs = [
    { id: 'basics', label: 'Vedic Basics', icon: 'BookOpen' },
    { id: 'planets', label: 'Planetary Influences', icon: 'Globe' },
    { id: 'houses', label: 'House System', icon: 'Home' },
    { id: 'remedies', label: 'Remedial Measures', icon: 'Shield' }
  ];

  const educationalContent = {
    basics: {
      title: 'Understanding Vedic Astrology',
      content: [
        {
          subtitle: 'What is Vedic Astrology?',
          text: `Vedic astrology, also known as Jyotish, is an ancient Indian system of astrology that has been practiced for over 5,000 years. Unlike Western astrology, Vedic astrology uses the sidereal zodiac, which accounts for the precession of the equinoxes, providing more accurate planetary positions.

The word "Jyotish" means "science of light" and represents the divine light that illuminates our path through life. This sacred knowledge helps us understand our karma, dharma, and the cosmic influences that shape our destiny.`
        },
        {
          subtitle: 'Key Principles',
          text: `Vedic astrology is based on several fundamental principles:

• Karma and Reincarnation: Your birth chart reflects your past life karma and indicates the lessons you need to learn in this lifetime.

• Dharma and Life Purpose: The chart reveals your soul's purpose and the path you should follow for spiritual growth.

• Cosmic Timing: Planetary periods (dashas) show when different life themes will be activated.

• Remedial Measures: Specific practices can help mitigate negative influences and enhance positive ones.`
        }
      ]
    },
    planets: {
      title: 'Planetary Influences in Your Life',
      content: [
        {
          subtitle: 'The Nine Planets (Navagrahas)',
          text: `In Vedic astrology, nine celestial bodies influence human life:

• Sun (Surya): Soul, ego, father, authority, health, vitality
• Moon (Chandra): Mind, emotions, mother, intuition, mental peace
• Mars (Mangal): Energy, courage, siblings, property, conflicts
• Mercury (Budh): Intelligence, communication, business, learning
• Jupiter (Guru): Wisdom, spirituality, children, teachers, fortune
• Venus (Shukra): Love, beauty, relationships, luxury, creativity
• Saturn (Shani): Discipline, hard work, delays, lessons, longevity
• Rahu (North Node): Desires, illusions, foreign connections, technology
• Ketu (South Node): Spirituality, detachment, past life karma, moksha`
        },
        {
          subtitle: 'Planetary Periods (Dashas)',
          text: `The Vimshottari Dasha system divides your life into planetary periods, each lasting different durations:

• Sun: 6 years - Focus on leadership, authority, and self-expression
• Moon: 10 years - Emotional development, family matters, intuition
• Mars: 7 years - Action, courage, property, and relationship challenges
• Mercury: 17 years - Learning, communication, business ventures
• Jupiter: 16 years - Wisdom, spirituality, children, and good fortune
• Venus: 20 years - Relationships, creativity, luxury, and pleasure
• Saturn: 19 years - Hard work, discipline, and life lessons
• Rahu: 18 years - Material desires, foreign connections, confusion
• Ketu: 7 years - Spiritual growth, detachment, and inner wisdom`
        }
      ]
    },
    houses: {
      title: 'The Twelve Houses of Life',
      content: [
        {
          subtitle: 'Understanding Life Areas',
          text: `The birth chart is divided into twelve houses, each representing different life areas:

1st House (Ascendant): Self, personality, physical appearance, health
2nd House: Wealth, family, speech, food, values
3rd House: Siblings, courage, communication, short travels
4th House: Mother, home, property, emotional foundation
5th House: Children, creativity, education, romance, speculation
6th House: Health, enemies, debts, service, daily routine
7th House: Marriage, partnerships, business, public relations
8th House: Transformation, occult, inheritance, longevity
9th House: Father, guru, religion, higher learning, long travels
10th House: Career, reputation, authority, social status
11th House: Gains, friends, elder siblings, hopes, aspirations
12th House: Spirituality, foreign lands, expenses, liberation`
        },
        {
          subtitle: 'House Strength and Significance',
          text: `The strength of planets in different houses determines their influence:

• Angular Houses (1st, 4th, 7th, 10th): Most powerful, immediate results
• Succedent Houses (2nd, 5th, 8th, 11th): Moderate strength, gradual results
• Cadent Houses (3rd, 6th, 9th, 12th): Variable strength, supporting roles

The lord of each house and planets placed in houses create specific combinations (yogas) that determine various life outcomes. Understanding these combinations helps in making informed decisions and timing important life events.`
        }
      ]
    },
    remedies: {
      title: 'Remedial Measures for Planetary Harmony',
      content: [
        {
          subtitle: 'Types of Remedies',
          text: `Vedic astrology offers various remedial measures to balance planetary influences:

• Gemstone Therapy: Wearing specific gemstones to strengthen beneficial planets
• Mantra Chanting: Reciting planetary mantras to appease malefic influences
• Yantra Worship: Using sacred geometric patterns for planetary harmony
• Charity and Donations: Giving specific items on particular days
• Fasting and Vratas: Observing fasts on planetary days
• Temple Visits: Worshipping specific deities associated with planets
• Color Therapy: Wearing colors that enhance planetary energies
• Rudraksha Beads: Using sacred beads for spiritual protection and growth`
        },
        {
          subtitle: 'Choosing the Right Remedy',
          text: `The selection of remedies depends on several factors:

• Planetary Strength: Weak planets need strengthening, strong malefic planets need pacification
• Dasha Periods: Current planetary period influences remedy selection
• Individual Capacity: Remedies should match your lifestyle and beliefs
• Specific Problems: Different issues require different approaches
• Spiritual Inclination: Some prefer devotional practices, others prefer gemstones

A qualified astrologer analyzes your chart to recommend the most suitable remedies. The key is consistency and faith in the chosen remedy. Remember, remedies work gradually and require patience and dedication.`
        }
      ]
    }
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
          Learn Vedic Astrology
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto font-poppins">
          Deepen your understanding of this ancient wisdom and discover how cosmic influences shape your life journey.
        </p>
      </div>

      {/* Educational Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {educationalTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-cosmic text-text-primary cosmic-glow' :'bg-surface/50 text-text-secondary hover:text-text-primary hover:bg-surface/70'
            }`}
          >
            <Icon name={tab.icon} size={20} />
            <span className="font-inter font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Educational Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-surface/30 rounded-2xl border border-surface-600 p-8">
          <h3 className="text-2xl font-cinzel font-bold text-text-primary mb-8 text-center">
            {educationalContent[activeTab].title}
          </h3>

          <div className="space-y-8">
            {educationalContent[activeTab].content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-accent pl-6"
              >
                <h4 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                  {section.subtitle}
                </h4>
                <div className="text-text-secondary font-poppins leading-relaxed whitespace-pre-line">
                  {section.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Elements */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: 'Star',
            title: 'Birth Chart',
            description: 'Your cosmic blueprint at birth',
            color: '#6B46C1'
          },
          {
            icon: 'Clock',
            title: 'Planetary Periods',
            description: 'Timing of life events',
            color: '#F59E0B'
          },
          {
            icon: 'Gem',
            title: 'Gemstone Therapy',
            description: 'Healing through crystals',
            color: '#10B981'
          },
          {
            icon: 'Circle',
            title: 'Sacred Mantras',
            description: 'Sound vibrations for harmony',
            color: '#EF4444'
          }
        ].map((element, index) => (
          <motion.div
            key={element.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 bg-surface/50 rounded-xl border border-surface-600 hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: `${element.color}20` }}
            >
              <Icon 
                name={element.icon} 
                size={24} 
                style={{ color: element.color }}
              />
            </div>
            <h4 className="text-lg font-cinzel font-semibold text-text-primary mb-2">
              {element.title}
            </h4>
            <p className="text-text-secondary font-poppins text-sm">
              {element.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationalContent;