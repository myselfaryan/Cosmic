import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-surface/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
              <Icon name="HelpCircle" size={24} color="#F59E0B" />
            </div>
            <h2 className="text-3xl font-cinzel font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
            Get answers to common questions about Rudraksha selection, wearing methods, and spiritual significance.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface/50 backdrop-blur-sm rounded-2xl cosmic-shadow border border-surface-600/30 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-surface/30 transition-all duration-300 group"
              >
                <h3 className="text-lg font-cinzel font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`transition-colors duration-300 ${
                      openIndex === index ? 'text-primary' : 'text-text-tertiary'
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-surface-600/30">
                      <div className="pt-4">
                        <p className="text-text-secondary font-poppins leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 via-surface/30 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 cosmic-shadow border border-surface-600/30">
            <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 cosmic-glow">
              <Icon name="MessageCircle" size={32} color="#F59E0B" />
            </div>
            <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary font-poppins mb-6 max-w-2xl mx-auto">
              Our spiritual advisors and Rudraksha experts are here to help you choose the perfect bead for your spiritual journey. 
              Get personalized guidance based on your specific needs and astrological requirements.
            </p>
            <button className="px-8 py-4 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <Icon name="Phone" size={18} />
              <span>Get Expert Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;