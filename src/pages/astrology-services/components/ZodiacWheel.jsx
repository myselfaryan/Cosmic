import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ZodiacWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredSign, setHoveredSign] = useState(null);

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', icon: 'Zap', color: '#FF6B6B', element: 'Fire' },
    { name: 'Taurus', symbol: '♉', icon: 'Mountain', color: '#4ECDC4', element: 'Earth' },
    { name: 'Gemini', symbol: '♊', icon: 'Users', color: '#45B7D1', element: 'Air' },
    { name: 'Cancer', symbol: '♋', icon: 'Shield', color: '#96CEB4', element: 'Water' },
    { name: 'Leo', symbol: '♌', icon: 'Sun', color: '#FFEAA7', element: 'Fire' },
    { name: 'Virgo', symbol: '♍', icon: 'Leaf', color: '#DDA0DD', element: 'Earth' },
    { name: 'Libra', symbol: '♎', icon: 'Scale', color: '#FFB6C1', element: 'Air' },
    { name: 'Scorpio', symbol: '♏', icon: 'Zap', color: '#FF7675', element: 'Water' },
    { name: 'Sagittarius', symbol: '♐', icon: 'Target', color: '#6C5CE7', element: 'Fire' },
    { name: 'Capricorn', symbol: '♑', icon: 'Mountain', color: '#A29BFE', element: 'Earth' },
    { name: 'Aquarius', symbol: '♒', icon: 'Waves', color: '#74B9FF', element: 'Air' },
    { name: 'Pisces', symbol: '♓', icon: 'Fish', color: '#81ECEC', element: 'Water' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{ rotate: rotation }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        {/* Zodiac Signs */}
        {zodiacSigns.map((sign, index) => {
          const angle = (index * 30) - 90; // 30 degrees apart, starting from top
          const radius = 140; // Distance from center
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;

          return (
            <motion.div
              key={sign.name}
              className="absolute w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                backgroundColor: hoveredSign === sign.name ? sign.color : 'transparent',
                border: `2px solid ${sign.color}`,
                boxShadow: hoveredSign === sign.name ? `0 0 20px ${sign.color}40` : 'none'
              }}
              onMouseEnter={() => setHoveredSign(sign.name)}
              onMouseLeave={() => setHoveredSign(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span 
                className="text-2xl font-bold"
                style={{ color: hoveredSign === sign.name ? '#fff' : sign.color }}
              >
                {sign.symbol}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inner Circle */}
      <div className="absolute inset-8 rounded-full bg-gradient-cosmic flex items-center justify-center cosmic-glow">
        <div className="text-center">
          <Icon name="Star" size={48} className="text-accent mb-2 mx-auto" />
          <div className="text-text-primary font-cinzel font-bold text-lg">
            Cosmic
          </div>
          <div className="text-accent font-poppins text-sm">
            Guidance
          </div>
        </div>
      </div>

      {/* Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {/* Connecting lines between zodiac signs */}
        {zodiacSigns.map((_, index) => {
          const angle1 = (index * 30) - 90;
          const angle2 = ((index + 1) * 30) - 90;
          const radius = 140;
          const x1 = Math.cos(angle1 * Math.PI / 180) * radius + 192;
          const y1 = Math.sin(angle1 * Math.PI / 180) * radius + 192;
          const x2 = Math.cos(angle2 * Math.PI / 180) * radius + 192;
          const y2 = Math.sin(angle2 * Math.PI / 180) * radius + 192;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#starGradient)"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Hover Information */}
      {hoveredSign && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-surface-800 px-4 py-2 rounded-lg cosmic-shadow"
        >
          <div className="text-center">
            <div className="text-text-primary font-cinzel font-semibold">
              {hoveredSign}
            </div>
            <div className="text-accent text-sm font-poppins">
              {zodiacSigns.find(sign => sign.name === hoveredSign)?.element} Sign
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + i * 8}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ZodiacWheel;