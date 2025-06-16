import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ConsultationProcess = ({ steps }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
          Consultation Process
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto font-poppins">
          Our streamlined process ensures you receive the most accurate and insightful astrological guidance tailored to your unique cosmic blueprint.
        </p>
      </div>

      {/* Desktop Process Flow */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow relative z-10">
                    <Icon 
                      name={step.icon} 
                      size={32} 
                      className="text-text-primary" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-cinzel font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-poppins text-sm">
                  {step.description}
                </p>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 15}%`
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Process Flow */}
      <div className="lg:hidden">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start space-x-6"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-accent opacity-30"></div>
              )}

              {/* Step Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
                  <Icon 
                    name={step.icon} 
                    size={28} 
                    className="text-text-primary" 
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-background font-bold text-sm">
                  {step.step}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-cinzel font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-poppins">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-surface/30 rounded-2xl border border-surface-600"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
            Why Our Process Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Shield',
              title: 'Authentic Guidance',
              description: 'Traditional Vedic astrology principles combined with modern consultation techniques'
            },
            {
              icon: 'Clock',
              title: 'Thorough Analysis',
              description: 'Comprehensive chart preparation ensures accurate and detailed insights'
            },
            {
              icon: 'Heart',
              title: 'Personalized Care',
              description: 'Each consultation is tailored to your unique cosmic blueprint and life situation'
            }
          ].map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon 
                  name={benefit.icon} 
                  size={24} 
                  className="text-primary" 
                />
              </div>
              <h4 className="text-lg font-cinzel font-semibold text-text-primary mb-2">
                {benefit.title}
              </h4>
              <p className="text-text-secondary font-poppins text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationProcess;