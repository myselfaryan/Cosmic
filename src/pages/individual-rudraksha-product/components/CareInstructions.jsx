import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareInstructions = ({ rudrakshaData }) => {
  const [activeCategory, setActiveCategory] = useState('daily');

  const careCategories = [
    {
      id: 'daily',
      title: 'Daily Care',
      icon: 'Sun',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      id: 'weekly',
      title: 'Weekly Maintenance',
      icon: 'Calendar',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      id: 'monthly',
      title: 'Monthly Purification',
      icon: 'Droplets',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    },
    {
      id: 'storage',
      title: 'Storage Guidelines',
      icon: 'Archive',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20'
    }
  ];

  const careInstructions = {
    daily: [
      {
        instruction: 'Wear after morning bath and prayers',
        description: 'Always put on your Rudraksha after taking a bath and completing your morning prayers for maximum spiritual benefit.',
        icon: 'Sunrise'
      },
      {
        instruction: 'Avoid contact with soap and chemicals',
        description: 'Remove before bathing, swimming, or using cleaning products to prevent damage to the natural surface.',
        icon: 'AlertTriangle'
      },
      {
        instruction: 'Keep away from negative environments',
        description: 'Remove during visits to hospitals, funeral grounds, or places with negative energy.',
        icon: 'Shield'
      },
      {
        instruction: 'Handle with clean hands',
        description: 'Always touch your Rudraksha with clean hands and pure intentions.',
        icon: 'Hand'
      }
    ],
    weekly: [
      {
        instruction: 'Gentle cleaning with soft brush',
        description: 'Use a soft toothbrush with clean water to gently remove dirt from the mukhi lines.',
        icon: 'Brush'
      },
      {
        instruction: 'Check thread condition',
        description: 'Inspect the threading for wear and tear. Replace if showing signs of weakness.',
        icon: 'Link'
      },
      {
        instruction: 'Oil treatment for luster',
        description: 'Apply a tiny drop of mustard oil or coconut oil to maintain natural shine.',
        icon: 'Droplet'
      },
      {
        instruction: 'Energize with mantras',
        description: 'Chant your Rudraksha mantra 108 times while holding it to maintain spiritual charge.',
        icon: 'Volume2'
      }
    ],
    monthly: [
      {
        instruction: 'Deep purification ritual',
        description: 'Soak in Ganga water or clean water mixed with rock salt for 24 hours on full moon day.',
        icon: 'Moon'
      },
      {
        instruction: 'Sunlight energization',
        description: 'Place in morning sunlight for 2-3 hours to recharge natural energies.',
        icon: 'Sun'
      },
      {
        instruction: 'Incense purification',
        description: 'Pass through sacred smoke of sandalwood or camphor incense.',
        icon: 'Flame'
      },
      {
        instruction: 'Blessing from spiritual guide',
        description: 'Have it blessed by a knowledgeable priest or spiritual teacher if possible.',
        icon: 'Crown'
      }
    ],
    storage: [
      {
        instruction: 'Sacred storage space',
        description: 'Keep in a clean, dedicated space like your prayer room or altar when not wearing.',
        icon: 'Home'
      },
      {
        instruction: 'Avoid direct sunlight storage',
        description: 'Store away from prolonged direct sunlight which can cause cracking over time.',
        icon: 'EyeOff'
      },
      {
        instruction: 'Separate from other jewelry',
        description: 'Store separately from metal jewelry to prevent scratching or energy interference.',
        icon: 'Divide'
      },
      {
        instruction: 'Proper wrapping',
        description: 'Wrap in clean silk or cotton cloth to protect from dust and negative energies.',
        icon: 'Package'
      }
    ]
  };

  const dosDonts = {
    dos: [
      'Wear with devotion and respect',
      'Keep your body and mind pure',
      'Chant mantras regularly',
      'Share knowledge about Rudraksha benefits',
      'Replace thread every 6 months',
      'Store in sacred space'
    ],
    donts: [
      'Never let others touch your energized Rudraksha',
      'Avoid wearing during impure activities',
      'Don\'t wear while sleeping',
      'Never use harsh chemicals for cleaning',
      'Avoid wearing during eclipse periods',
      'Don\'t ignore signs of damage'
    ]
  };

  const troubleshooting = [
    {
      problem: 'Rudraksha turning dark',
      solution: 'Natural aging process. Clean gently and apply light oil treatment.',
      icon: 'AlertCircle'
    },
    {
      problem: 'Thread breaking frequently',
      solution: 'Use stronger thread like silk or cotton. Avoid synthetic materials.',
      icon: 'Link'
    },
    {
      problem: 'Losing spiritual connection',
      solution: 'Re-energize with proper mantras and purification rituals.',
      icon: 'Zap'
    },
    {
      problem: 'Surface becoming rough',
      solution: 'Apply mustard oil treatment and avoid harsh handling.',
      icon: 'Texture'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 cosmic-glow animate-float">
          <Icon name="Heart" size={32} color="#F59E0B" />
        </div>
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
          Care & Maintenance Guide
        </h2>
        <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
          Proper care ensures your Rudraksha maintains its spiritual potency and physical beauty for generations
        </p>
      </div>

      {/* Care Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {careCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? `${category.bgColor} ${category.color} ${category.borderColor} border`
                : 'text-text-secondary hover:text-text-primary hover:bg-surface/30'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span className="hidden sm:inline">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Care Instructions */}
      <div className="space-y-4">
        {careInstructions[activeCategory].map((care, index) => (
          <div
            key={index}
            className="bg-surface/20 rounded-xl p-6 cosmic-shadow hover:cosmic-glow transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                <Icon name={care.icon} size={20} color="#F59E0B" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-2">
                  {care.instruction}
                </h3>
                <p className="text-text-secondary font-poppins leading-relaxed">
                  {care.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Do's and Don'ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-success/10 rounded-xl p-6 border border-success/20">
          <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Check" size={20} className="text-success" />
            <span>Do's</span>
          </h3>
          <div className="space-y-3">
            {dosDonts.dos.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                <span className="text-text-secondary font-poppins text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-error/10 rounded-xl p-6 border border-error/20">
          <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="X" size={20} className="text-error" />
            <span>Don'ts</span>
          </h3>
          <div className="space-y-3">
            {dosDonts.donts.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="XCircle" size={16} className="text-error mt-0.5" />
                <span className="text-text-secondary font-poppins text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Tool" size={20} className="text-accent" />
          <span>Common Issues & Solutions</span>
        </h3>

        <div className="grid gap-4">
          {troubleshooting.map((item, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={16} className="text-warning" />
                </div>
                <div className="flex-1">
                  <h4 className="font-cinzel font-semibold text-text-primary mb-1">
                    {item.problem}
                  </h4>
                  <p className="text-text-secondary font-poppins text-sm">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Care Instructions */}
      <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4">
          Complete Care Instructions
        </h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-text-secondary font-poppins leading-relaxed">
            {rudrakshaData.careInstructions}
          </p>
        </div>
      </div>

      {/* Emergency Care */}
      <div className="bg-gradient-to-r from-warning/10 to-error/10 rounded-xl p-6 border border-warning/20">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="AlertTriangle" size={20} className="text-warning" />
          <span>Emergency Care</span>
        </h3>
        <p className="text-text-secondary font-poppins mb-4">
          If your Rudraksha gets damaged or loses its spiritual charge, follow these immediate steps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-cinzel font-semibold text-text-primary">Physical Damage:</h4>
            <ul className="space-y-1">
              <li className="text-text-secondary text-sm">• Stop wearing immediately</li>
              <li className="text-text-secondary text-sm">• Consult a Rudraksha expert</li>
              <li className="text-text-secondary text-sm">• Consider replacement if severely damaged</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-cinzel font-semibold text-text-primary">Spiritual Cleansing:</h4>
            <ul className="space-y-1">
              <li className="text-text-secondary text-sm">• Perform immediate purification</li>
              <li className="text-text-secondary text-sm">• Re-energize with mantras</li>
              <li className="text-text-secondary text-sm">• Seek blessing from spiritual guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareInstructions;