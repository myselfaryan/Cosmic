import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What information do I need to provide for an accurate reading?',
      answer: `For the most accurate astrological reading, please provide:

• Exact birth date (day, month, year)
• Precise birth time (hour and minute) - this is crucial for accurate house calculations
• Birth location (city, state, country)
• Specific questions or areas of concern you'd like to focus on

If you don't know your exact birth time, we can work with approximate times, though the reading may be less precise. We can also help you with birth time rectification services if needed.`
    },
    {
      id: 2,
      question: 'How is Vedic astrology different from Western astrology?',
      answer: `Vedic astrology differs from Western astrology in several key ways:

• Zodiac System: Vedic uses the sidereal zodiac (fixed star positions), while Western uses tropical zodiac (seasonal positions)
• Calculation Method: Vedic accounts for precession of equinoxes, providing more astronomically accurate planetary positions
• Predictive Focus: Vedic emphasizes karma, dharma, and life timing through dasha systems
• Remedial Measures: Vedic offers specific remedies like gemstones, mantras, and rituals
• Spiritual Approach: Vedic astrology is deeply rooted in spiritual philosophy and self-realization

Both systems have their merits, but Vedic astrology is particularly effective for life timing and spiritual guidance.`
    },
    {
      id: 3,
      question: 'How long does a consultation session last?',
      answer: `Consultation duration varies by service type and tier:

• Basic Tier: 45-60 minutes - Essential insights and core guidance
• Premium Tier: 60-90 minutes - Comprehensive analysis with detailed explanations
• Comprehensive Tier: 90+ minutes - In-depth exploration with remedial guidance

The session includes:
- Chart analysis and explanation
- Discussion of your specific questions
- Remedial suggestions
- Time for clarifications
- Recording of the session (Premium and Comprehensive tiers)

We ensure you have sufficient time to understand your chart and get answers to all your questions.`
    },
    {
      id: 4,
      question: 'Can astrology predict exact future events?',
      answer: `Astrology reveals tendencies, timing, and potential outcomes rather than exact predetermined events. Here's what to expect:

• Timing Indicators: Planetary periods show when certain themes will be prominent in your life
• Probability Patterns: Charts indicate likely scenarios based on karmic patterns
• Choice and Free Will: Your decisions and actions influence how planetary energies manifest
• Spiritual Growth: Challenges are opportunities for learning and evolution

Astrology is best used as a guidance tool to help you:
- Make informed decisions
- Understand life patterns
- Prepare for upcoming opportunities and challenges
- Align with your highest potential

Remember, you are the co-creator of your destiny along with cosmic influences.`
    },
    {
      id: 5,
      question: 'What are remedial measures and how do they work?',
      answer: `Remedial measures are prescribed practices to balance planetary influences and enhance positive energies:

Types of Remedies:
• Gemstone Therapy: Wearing specific stones to strengthen beneficial planets
• Mantra Chanting: Sound vibrations to harmonize planetary energies
• Charity and Donations: Giving specific items to balance karmic debts
• Fasting and Rituals: Spiritual practices for planetary appeasement
• Yantra Worship: Sacred geometry for energy alignment

How They Work:
- Remedies work on subtle energy levels to create positive vibrations
- Consistent practice gradually shifts your energy field
- They help mitigate negative influences and enhance positive ones
- Results depend on faith, consistency, and proper implementation

We provide personalized remedy recommendations based on your specific chart and current planetary periods.`
    },
    {
      id: 6,
      question: 'How often should I have astrological consultations?',
      answer: `The frequency of consultations depends on your needs and life circumstances:

Regular Schedule:
• Annual Consultation: Review yearly planetary influences and plan ahead
• Major Life Transitions: Before important decisions like marriage, career changes, or investments
• Dasha Changes: When entering new planetary periods (every few years)
• Specific Challenges: During difficult periods for guidance and remedies

Follow-up Sessions:
• 3-6 months after initial consultation to track progress
• When implementing new remedial measures
• For ongoing spiritual guidance and growth

Emergency Consultations:
• During sudden life crises or major decisions
• Health or relationship emergencies
• Important timing questions

Most clients benefit from annual consultations with follow-ups as needed. We also offer ongoing support packages for regular guidance.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto font-poppins">
          Get answers to common questions about our Vedic astrology consultations and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/50 rounded-xl border border-surface-600 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/70 transition-colors duration-200"
              >
                <h3 className="text-lg font-cinzel font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className="text-text-tertiary" 
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-surface-600">
                      <div className="pt-4 text-text-secondary font-poppins leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary font-poppins mb-6">
            Our expert astrologers are here to help you understand how Vedic astrology can guide your life journey.
          </p>
          <button
            onClick={() => {
              const message = "Hi! I have some questions about your astrology services. Can you help me understand more about the consultation process?";
              const phoneNumber = '+919876543210';
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Ask Your Question</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;