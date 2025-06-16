import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import Icon from '../../components/AppIcon';

import RudrakshaViewer3D from './components/RudrakshaViewer3D';
import SpiritualSignificance from './components/SpiritualSignificance';
import WearingInstructions from './components/WearingInstructions';
import MantraSection from './components/MantraSection';
import CareInstructions from './components/CareInstructions';
import AuthenticitySection from './components/AuthenticitySection';
import PricingOptions from './components/PricingOptions';
import RelatedRudraksha from './components/RelatedRudraksha';

const IndividualRudrakshaProduct = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedQuality, setSelectedQuality] = useState('premium');
  const [activeTab, setActiveTab] = useState('significance');
  const [isLoading, setIsLoading] = useState(true);

  // Get Mukhi count from URL params or default to 5
  const urlParams = new URLSearchParams(window.location.search);
  const mukhiCount = parseInt(urlParams.get('mukhi')) || 5;

  // Comprehensive data for all 21 Mukhi Rudraksha
  const rudrakshaDatabase = {
    1: {
      id: 'rudraksha-1-mukhi',
      name: '1 Mukhi Rudraksha',
      sanskritName: 'Ek Mukhi Rudraksha',
      deity: 'Lord Shiva',
      planet: 'Sun (Surya)',
      chakra: 'Sahasrara (Crown Chakra)',
      mantra: 'Om Hreem Namah',
      description: `The 1 Mukhi Rudraksha is the most powerful and rare bead, representing Lord Shiva himself. It brings supreme consciousness and helps in achieving moksha (liberation). This sacred bead removes all sins and grants the wearer divine blessings. It enhances leadership qualities and brings clarity of thought.`,
      spiritualBenefits: [
        'Attainment of supreme consciousness and self-realization',
        'Direct connection with Lord Shiva\'s divine energy',
        'Liberation from the cycle of birth and death (moksha)',
        'Enhanced spiritual awareness and enlightenment',
        'Removal of all negative karma and past life sins',
        'Development of divine leadership qualities'
      ],
      healthBenefits: [
        'Improves concentration and mental focus significantly',
        'Reduces stress, anxiety, and mental disorders',
        'Enhances mental clarity and decision-making abilities',
        'Balances the nervous system and brain function',
        'Improves overall vitality and life force energy',
        'Helps in treating headaches and migraines'
      ],
      wealthBenefits: [
        'Attracts abundance and supreme prosperity',
        'Enhances leadership abilities in business and career',
        'Brings success in all endeavors and ventures',
        'Removes all financial obstacles and limitations',
        'Increases decision-making power and authority',
        'Attracts recognition, fame, and high positions'
      ],
      wearingMethod: `The 1 Mukhi Rudraksha should be worn with utmost reverence and proper preparation. Begin by purifying the bead in Ganga water or clean water mixed with rock salt for 24 hours. Energize it on a Monday during Brahma Muhurta (4-6 AM) by chanting "Om Hreem Namah" 108 times. Thread it in gold or silver chain, or red/yellow thread. Wear it as a pendant close to the heart or on the right arm. This sacred bead should be worn continuously except during impure activities.`,
      careInstructions: `Handle the 1 Mukhi Rudraksha with extreme care and devotion. Clean it weekly with clean water and a soft brush, avoiding harsh chemicals. Apply a drop of mustard oil monthly to maintain its natural luster. Store in a sacred place when not wearing, preferably in your prayer room. Perform monthly purification by soaking in Ganga water on full moon nights. If the bead breaks, it should be immersed in flowing water with gratitude, as it has absorbed negative energies.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (20-22mm)', price: 25000, description: 'Premium size for maximum spiritual impact' },
        { id: 'extra-large', name: 'Extra Large (23-25mm)', price: 35000, description: 'Rare collector grade with exceptional power' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'Authentic Nepal origin with clear single line',
          features: ['Clear single mukhi line', 'Perfect round shape', 'Lab certification', 'Spiritual energization']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 15000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless single line', 'Perfect symmetry', 'Premium certification', 'Blessed by saints', 'Rare origin documentation']
        }
      ]
    },
    2: {
      id: 'rudraksha-2-mukhi',
      name: '2 Mukhi Rudraksha',
      sanskritName: 'Do Mukhi Rudraksha',
      deity: 'Ardhanarishvara (Shiva-Parvati)',
      planet: 'Moon (Chandra)',
      chakra: 'Swadhisthana (Sacral Chakra)',
      mantra: 'Om Namah',
      description: `The 2 Mukhi Rudraksha represents the unity of Shiva and Parvati (Ardhanarishvara). It enhances relationships and brings harmony between couples. This bead is excellent for emotional stability and mental peace. It helps in balancing masculine and feminine energies within.`,
      spiritualBenefits: [
        'Balances dual nature of existence and inner harmony',
        'Enhances emotional stability and mental peace',
        'Promotes harmony in all relationships',
        'Develops compassion and understanding',
        'Connects with divine feminine energy',
        'Helps in achieving unity consciousness'
      ],
      healthBenefits: [
        'Regulates hormonal balance in the body',
        'Improves reproductive health and fertility',
        'Reduces emotional stress and anxiety',
        'Enhances kidney and bladder function',
        'Balances water element in the body',
        'Improves sleep quality and reduces insomnia'
      ],
      wealthBenefits: [
        'Brings stability in business partnerships',
        'Enhances cooperation and teamwork',
        'Attracts supportive relationships for growth',
        'Improves team dynamics and collaboration',
        'Creates harmonious work environment',
        'Attracts beneficial alliances and joint ventures'
      ],
      wearingMethod: `Purify the 2 Mukhi Rudraksha in clean water overnight. Energize on Monday morning by chanting "Om Namah" 108 times. It can be worn by both men and women, especially beneficial for couples. Thread in silver or white thread. Wear as pendant or bracelet. Couples can wear matching 2 Mukhi beads for enhanced harmony.`,
      careInstructions: `Clean gently with water and soft cloth weekly. Apply coconut oil monthly for luster. Store in a clean, peaceful place. Avoid wearing during conflicts or negative situations. If worn by couples, both should maintain purity and positive thoughts for maximum benefits.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (16-18mm)', price: 1200, description: 'Perfect for daily wear and relationships' },
        { id: 'large', name: 'Large (19-21mm)', price: 1800, description: 'Enhanced benefits for couples' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear two mukhi lines',
          features: ['Clear two mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 500, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    3: {
      id: 'rudraksha-3-mukhi',
      name: '3 Mukhi Rudraksha',
      sanskritName: 'Teen Mukhi Rudraksha',
      deity: 'Lord Agni (Fire God)',
      planet: 'Mars (Mangal)',
      chakra: 'Manipura (Solar Plexus Chakra)',
      mantra: 'Om Kleem Namah',
      description: `The 3 Mukhi Rudraksha is blessed by Lord Agni (Fire God). It burns past negative karma and boosts self-confidence. This bead helps overcome depression and inferiority complex. It ignites the inner fire and enhances personal power and courage.`,
      spiritualBenefits: [
        'Burns negative karma from past lives',
        'Enhances self-confidence and courage',
        'Removes guilt and shame',
        'Ignites spiritual fire within',
        'Promotes self-acceptance and inner strength'
      ],
      healthBenefits: [
        'Improves digestive system and metabolism',
        'Boosts energy levels and vitality',
        'Enhances liver function',
        'Reduces stomach ailments',
        'Increases physical strength'
      ],
      wealthBenefits: [
        'Removes obstacles in career progression',
        'Enhances personal magnetism',
        'Attracts recognition and fame',
        'Improves leadership qualities',
        'Brings success in competitive fields'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize on Tuesday (Mars day) by chanting "Om Kleem Namah" 108 times. Wear on right hand or as pendant. Best worn by those lacking confidence or facing career obstacles.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in red cloth when not wearing. Avoid wearing during anger or negative emotions as it amplifies energy.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 800, description: 'Standard size for confidence boost' },
        { id: 'large', name: 'Large (18-20mm)', price: 1200, description: 'Enhanced power and energy' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear three mukhi lines',
          features: ['Clear three mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 300, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    4: {
      id: 'rudraksha-4-mukhi',
      name: '4 Mukhi Rudraksha',
      sanskritName: 'Char Mukhi Rudraksha',
      deity: 'Lord Brahma (Creator)',
      planet: 'Mercury (Budh)',
      chakra: 'Anahata (Heart Chakra)',
      mantra: 'Om Hreem Namah',
      description: `The 4 Mukhi Rudraksha is blessed by Lord Brahma, the creator. It enhances knowledge, creativity, and communication abilities. This bead is perfect for students and creative professionals. It improves memory, concentration, and learning capacity.`,
      spiritualBenefits: [
        'Enhances creative expression and artistic abilities',
        'Improves communication with divine',
        'Develops wisdom and knowledge',
        'Promotes innovative thinking',
        'Connects with cosmic consciousness'
      ],
      healthBenefits: [
        'Improves memory and concentration',
        'Enhances brain function and neural activity',
        'Reduces mental fatigue',
        'Improves speech and voice quality',
        'Balances thyroid function'
      ],
      wealthBenefits: [
        'Success in education and learning',
        'Enhances professional skills',
        'Attracts opportunities in creative fields',
        'Improves business communication',
        'Brings recognition for talents'
      ],
      wearingMethod: `Purify in clean water overnight. Energize on Wednesday (Mercury day) by chanting "Om Hreem Namah" 108 times. Ideal for students, teachers, writers, and creative professionals. Wear as pendant or on right wrist.`,
      careInstructions: `Clean weekly with soft brush and water. Apply coconut oil monthly. Store in yellow cloth. Especially beneficial when worn during study or creative work.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 600, description: 'Perfect for students and professionals' },
        { id: 'large', name: 'Large (18-20mm)', price: 900, description: 'Enhanced creativity and communication' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear four mukhi lines',
          features: ['Clear four mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 250, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    5: {
      id: 'rudraksha-5-mukhi',
      name: '5 Mukhi Rudraksha',
      sanskritName: 'Panch Mukhi Rudraksha',
      deity: 'Lord Kalagni Rudra',
      planet: 'Jupiter (Brihaspati)',
      chakra: 'Vishuddha (Throat Chakra)',
      mantra: 'Om Hreem Namah',
      description: `The 5 Mukhi Rudraksha is the most common and beneficial bead representing Lord Kalagni Rudra, a form of Lord Shiva. This sacred bead is blessed with the energy of Jupiter and helps in enhancing wisdom, knowledge, and spiritual growth. Known for its ability to calm the mind and bring peace, the 5 Mukhi Rudraksha is ideal for meditation and spiritual practices.`,
      spiritualBenefits: [
        'Enhances spiritual awareness and consciousness',
        'Improves meditation and concentration abilities',
        'Brings mental peace and emotional stability',
        'Removes negative karma and past life sins',
        'Awakens inner wisdom and intuition',
        'Promotes overall spiritual well-being'
      ],
      healthBenefits: [
        'Regulates blood pressure and heart rate',
        'Improves respiratory system functioning',
        'Enhances memory and brain function',
        'Reduces stress and anxiety levels significantly',
        'Strengthens immune system naturally',
        'Improves overall health and vitality'
      ],
      wealthBenefits: [
        'Attracts abundance and general prosperity',
        'Improves decision-making abilities in business',
        'Enhances earning capacity and opportunities',
        'Brings stability in financial matters',
        'Opens new avenues for growth and success',
        'Removes obstacles to prosperity'
      ],
      wearingMethod: `The 5 Mukhi Rudraksha should be worn after proper purification and energization. It can be worn as a pendant, bracelet, or mala. The best time to wear is during Brahma Muhurta (early morning) after taking a bath and performing prayers. Thread the bead in red or yellow thread, or gold/silver chain. While wearing, chant the mantra "Om Hreem Namah" 108 times to activate its divine energies.`,
      careInstructions: `Clean the Rudraksha weekly with clean water and a soft brush. Apply a few drops of mustard oil monthly to maintain its natural luster. Store in a clean, sacred place when not wearing. For purification, soak in Ganga water or clean water mixed with rock salt for 24 hours every full moon. Avoid wearing during impure activities and remove before sleeping.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'small', name: 'Small (12-14mm)', price: 300, description: 'Perfect for children and daily wear' },
        { id: 'medium', name: 'Medium (15-17mm)', price: 500, description: 'Most popular size for adults' },
        { id: 'large', name: 'Large (18-20mm)', price: 800, description: 'Enhanced benefits and spiritual impact' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural Rudraksha with clear mukhi lines',
          features: ['Natural surface', 'Clear mukhi definition', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 200, 
          description: 'High-grade Rudraksha with perfect mukhi formation',
          features: ['Perfect mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 500, 
          description: 'Museum-quality Rudraksha',
          features: ['Exceptional clarity', 'Perfect symmetry', 'Premium certification', 'Rare origin', 'Blessed by saints']
        }
      ]
    },
    6: {
      id: 'rudraksha-6-mukhi',
      name: '6 Mukhi Rudraksha',
      sanskritName: 'Chhe Mukhi Rudraksha',
      deity: 'Lord Kartikeya (Murugan)',
      planet: 'Venus (Shukra)',
      chakra: 'Swadhisthana (Sacral Chakra)',
      mantra: 'Om Hreem Hum Namah',
      description: `The 6 Mukhi Rudraksha is blessed by Lord Kartikeya (Murugan). It enhances willpower, focus, and determination. This bead helps in overcoming laziness and procrastination. It provides grounding energy and emotional stability.`,
      spiritualBenefits: [
        'Enhances willpower and determination',
        'Improves focus in meditation',
        'Develops emotional maturity',
        'Connects with warrior energy',
        'Promotes spiritual discipline'
      ],
      healthBenefits: [
        'Improves reproductive health',
        'Enhances sexual vitality',
        'Balances hormones',
        'Reduces urinary problems',
        'Improves kidney function'
      ],
      wealthBenefits: [
        'Enhances property and land dealings',
        'Improves real estate investments',
        'Brings stability in income',
        'Attracts luxury and comfort',
        'Promotes material prosperity'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize on Friday (Venus day) by chanting "Om Hreem Hum Namah" 108 times. Wear as pendant or on right arm. Beneficial for those lacking focus or willpower.`,
      careInstructions: `Clean weekly with water and soft cloth. Apply sesame oil monthly. Store in white cloth. Especially powerful when worn during challenging tasks requiring focus.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 800, description: 'Standard size for focus and willpower' },
        { id: 'large', name: 'Large (18-20mm)', price: 1200, description: 'Enhanced grounding and stability' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear six mukhi lines',
          features: ['Clear six mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 300, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    7: {
      id: 'rudraksha-7-mukhi',
      name: '7 Mukhi Rudraksha',
      sanskritName: 'Saat Mukhi Rudraksha',
      deity: 'Goddess Lakshmi',
      planet: 'Saturn (Shani)',
      chakra: 'Manipura (Solar Plexus Chakra)',
      mantra: 'Om Hum Namah',
      description: `The 7 Mukhi Rudraksha is blessed by Goddess Lakshmi. It brings wealth, prosperity, and good fortune to the wearer. This bead removes financial obstacles and attracts abundance. It is especially beneficial for business and career growth.`,
      spiritualBenefits: [
        'Attracts divine blessings of Lakshmi',
        'Removes poverty consciousness',
        'Enhances gratitude and abundance mindset',
        'Promotes spiritual wealth',
        'Connects with prosperity consciousness'
      ],
      healthBenefits: [
        'Improves overall vitality',
        'Enhances bone health',
        'Reduces joint problems',
        'Improves muscle strength',
        'Balances Saturn\'s negative effects'
      ],
      wealthBenefits: [
        'Attracts wealth and prosperity',
        'Removes financial obstacles',
        'Enhances business growth',
        'Brings good fortune in investments',
        'Promotes steady income flow'
      ],
      wearingMethod: `Purify in clean water mixed with rock salt for 24 hours. Energize on Saturday (Saturn day) by chanting "Om Hum Namah" 108 times. Wear as pendant or on right wrist. Ideal for business owners and those seeking financial growth.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in yellow cloth. Keep in cash box or safe for enhanced wealth attraction.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 1500, description: 'Perfect for wealth attraction' },
        { id: 'large', name: 'Large (18-20mm)', price: 2200, description: 'Enhanced prosperity and abundance' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear seven mukhi lines',
          features: ['Clear seven mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 500, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    8: {
      id: 'rudraksha-8-mukhi',
      name: '8 Mukhi Rudraksha',
      sanskritName: 'Aath Mukhi Rudraksha',
      deity: 'Lord Ganesha',
      planet: 'Rahu',
      chakra: 'Muladhara (Root Chakra)',
      mantra: 'Om Gam Ganapataye Namah',
      description: `The 8 Mukhi Rudraksha is blessed by Lord Ganesha. It removes obstacles and ensures success in new ventures. This bead brings wisdom and helps in making right decisions. It is excellent for starting new projects and businesses.`,
      spiritualBenefits: [
        'Removes spiritual obstacles',
        'Enhances wisdom and intelligence',
        'Promotes new spiritual beginnings',
        'Connects with Ganesha\'s blessings',
        'Develops problem-solving abilities'
      ],
      healthBenefits: [
        'Improves nervous system',
        'Enhances brain function',
        'Reduces anxiety and fear',
        'Improves coordination',
        'Balances Rahu\'s effects'
      ],
      wealthBenefits: [
        'Removes obstacles in business',
        'Ensures success in new ventures',
        'Attracts opportunities',
        'Enhances analytical abilities',
        'Brings wisdom in financial decisions'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize by chanting "Om Gam Ganapataye Namah" 108 times. Best worn on Wednesday. Ideal for entrepreneurs and those starting new ventures.`,
      careInstructions: `Clean weekly with water. Apply coconut oil monthly. Store in red cloth. Especially powerful when starting new projects or facing obstacles.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 2000, description: 'Perfect for obstacle removal' },
        { id: 'large', name: 'Large (18-20mm)', price: 2800, description: 'Enhanced success and wisdom' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear eight mukhi lines',
          features: ['Clear eight mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 600, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    9: {
      id: 'rudraksha-9-mukhi',
      name: '9 Mukhi Rudraksha',
      sanskritName: 'Nau Mukhi Rudraksha',
      deity: 'Goddess Durga',
      planet: 'Ketu',
      chakra: 'Ajna (Third Eye Chakra)',
      mantra: 'Om Hreem Hum Namah',
      description: `The 9 Mukhi Rudraksha is blessed by Goddess Durga. It provides divine protection and enhances courage. This bead awakens the divine feminine energy within and removes fear. It is powerful for spiritual protection and inner strength.`,
      spiritualBenefits: [
        'Provides divine protection',
        'Awakens inner strength and courage',
        'Connects with divine feminine power',
        'Removes fear and negativity',
        'Enhances spiritual warrior qualities'
      ],
      healthBenefits: [
        'Boosts immune system',
        'Improves overall energy',
        'Reduces chronic fatigue',
        'Enhances physical strength',
        'Balances Ketu\'s effects'
      ],
      wealthBenefits: [
        'Protects from financial losses',
        'Brings courage in business decisions',
        'Attracts powerful allies',
        'Enhances leadership qualities',
        'Promotes fearless action'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize by chanting "Om Hreem Hum Namah" 108 times. Best worn on Tuesday. Ideal for those needing protection and courage.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in red cloth. Especially powerful during challenging times requiring courage.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (15-17mm)', price: 2500, description: 'Perfect for protection and courage' },
        { id: 'large', name: 'Large (18-20mm)', price: 3500, description: 'Enhanced divine protection' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear nine mukhi lines',
          features: ['Clear nine mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 700, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    10: {
      id: 'rudraksha-10-mukhi',
      name: '10 Mukhi Rudraksha',
      sanskritName: 'Das Mukhi Rudraksha',
      deity: 'Lord Vishnu',
      planet: 'All Planets',
      chakra: 'All Chakras',
      mantra: 'Om Hreem Namah',
      description: `The 10 Mukhi Rudraksha is blessed by Lord Vishnu. It brings peace and protects from all negative energies. This bead ensures overall protection and divine grace. It harmonizes all planetary influences and brings balance to life.`,
      spiritualBenefits: [
        'Provides complete spiritual protection',
        'Harmonizes all energies',
        'Connects with Vishnu\'s preserving power',
        'Brings divine grace and blessings',
        'Promotes universal peace'
      ],
      healthBenefits: [
        'Provides overall health protection',
        'Balances all body systems',
        'Reduces chronic ailments',
        'Enhances longevity',
        'Promotes general well-being'
      ],
      wealthBenefits: [
        'Protects from all financial troubles',
        'Brings stability and security',
        'Attracts divine support',
        'Ensures steady progress',
        'Promotes long-term prosperity'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Hreem Namah" 108 times. Can be worn any day. Provides universal protection and balance.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood oil monthly. Store in white cloth. Provides continuous protection when worn regularly.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'medium', name: 'Medium (16-18mm)', price: 3000, description: 'Universal protection and peace' },
        { id: 'large', name: 'Large (19-21mm)', price: 4200, description: 'Enhanced divine grace' }
      ],
      qualities: [
        { 
          id: 'standard', 
          name: 'Standard Quality', 
          price: 0, 
          description: 'Natural with clear ten mukhi lines',
          features: ['Clear ten mukhi lines', 'Natural surface', 'Basic certification']
        },
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 800, 
          description: 'High-grade with perfect formation',
          features: ['Perfect mukhi definition', 'Superior finish', 'Lab certification', 'Energized by priests']
        }
      ]
    },
    11: {
      id: 'rudraksha-11-mukhi',
      name: '11 Mukhi Rudraksha',
      sanskritName: 'Gyarah Mukhi Rudraksha',
      deity: 'Eleven Rudras',
      planet: 'All Planets',
      chakra: 'Sahasrara (Crown Chakra)',
      mantra: 'Om Hreem Hum Namah',
      description: `The 11 Mukhi Rudraksha is blessed by the Eleven Rudras. It enhances meditation and awakens spiritual powers. This bead helps in achieving higher states of consciousness and develops intuitive abilities. It is powerful for advanced spiritual practices.`,
      spiritualBenefits: [
        'Enhances meditation and concentration',
        'Awakens psychic abilities',
        'Develops higher consciousness',
        'Connects with cosmic energies',
        'Promotes spiritual transformation'
      ],
      healthBenefits: [
        'Improves nervous system',
        'Enhances brain function',
        'Reduces mental disorders',
        'Improves memory and focus',
        'Balances neurological functions'
      ],
      wealthBenefits: [
        'Attracts abundance through intuition',
        'Enhances decision-making abilities',
        'Brings success through spiritual means',
        'Promotes ethical wealth creation',
        'Attracts divine support in endeavors'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Hreem Hum Namah" 108 times. Best worn during meditation. Ideal for spiritual practitioners and meditators.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in meditation room. Most powerful when used during spiritual practices.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 4000, description: 'Enhanced meditation and spiritual powers' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 5500, description: 'Maximum spiritual transformation' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear eleven mukhi lines',
          features: ['Clear eleven mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 1500, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    12: {
      id: 'rudraksha-12-mukhi',
      name: '12 Mukhi Rudraksha',
      sanskritName: 'Barah Mukhi Rudraksha',
      deity: 'Lord Surya (Sun God)',
      planet: 'Sun (Surya)',
      chakra: 'Anahata (Heart Chakra)',
      mantra: 'Om Kraum Sraum Raum Namah',
      description: `The 12 Mukhi Rudraksha is blessed by Lord Surya (Sun God). It enhances leadership qualities and administrative skills. This bead brings vitality, confidence, and royal qualities. It is excellent for those in positions of authority and leadership.`,
      spiritualBenefits: [
        'Enhances spiritual leadership',
        'Develops divine authority',
        'Connects with solar consciousness',
        'Promotes righteous action',
        'Awakens inner radiance'
      ],
      healthBenefits: [
        'Improves heart health',
        'Enhances circulation',
        'Boosts vitality and energy',
        'Improves eyesight',
        'Strengthens immune system'
      ],
      wealthBenefits: [
        'Attracts positions of authority',
        'Enhances earning through leadership',
        'Brings recognition and fame',
        'Promotes government favor',
        'Attracts royal treatment'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize on Sunday by chanting "Om Kraum Sraum Raum Namah" 108 times. Ideal for leaders, administrators, and those in authority positions.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in golden cloth. Most powerful when worn by those in leadership roles.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 4500, description: 'Enhanced leadership and authority' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 6200, description: 'Maximum royal qualities' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear twelve mukhi lines',
          features: ['Clear twelve mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 1800, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    13: {
      id: 'rudraksha-13-mukhi',
      name: '13 Mukhi Rudraksha',
      sanskritName: 'Terah Mukhi Rudraksha',
      deity: 'Lord Indra & Kamadeva',
      planet: 'Venus (Shukra)',
      chakra: 'Anahata (Heart Chakra)',
      mantra: 'Om Hreem Namah',
      description: `The 13 Mukhi Rudraksha is blessed by Lord Indra and Kamadeva. It enhances attraction, charisma, and fulfills desires. This bead is powerful for attracting love, success, and material pleasures. It brings charm and magnetic personality.`,
      spiritualBenefits: [
        'Fulfills spiritual desires',
        'Enhances divine love',
        'Develops magnetic personality',
        'Attracts spiritual teachers',
        'Promotes divine union'
      ],
      healthBenefits: [
        'Improves reproductive health',
        'Enhances sexual vitality',
        'Balances hormones',
        'Improves skin and beauty',
        'Enhances overall attractiveness'
      ],
      wealthBenefits: [
        'Attracts wealth through charm',
        'Enhances business relationships',
        'Brings luxury and comfort',
        'Attracts beneficial partnerships',
        'Promotes success in entertainment'
      ],
      wearingMethod: `Purify in rose water for 24 hours. Energize on Friday by chanting "Om Hreem Namah" 108 times. Ideal for those seeking attraction, love, and charisma.`,
      careInstructions: `Clean weekly with rose water. Apply sandalwood oil monthly. Store in pink cloth. Most powerful for enhancing personal magnetism.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 5000, description: 'Enhanced attraction and charisma' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 7000, description: 'Maximum magnetic personality' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear thirteen mukhi lines',
          features: ['Clear thirteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 2000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    14: {
      id: 'rudraksha-14-mukhi',
      name: '14 Mukhi Rudraksha',
      sanskritName: 'Chaudah Mukhi Rudraksha',
      deity: 'Lord Hanuman',
      planet: 'Saturn (Shani)',
      chakra: 'Ajna (Third Eye Chakra)',
      mantra: 'Om Namah',
      description: `The 14 Mukhi Rudraksha is blessed by Lord Hanuman. It provides immense courage, strength, and protection. This bead enhances devotion and removes fear. It is powerful for overcoming obstacles and developing unwavering faith.`,
      spiritualBenefits: [
        'Enhances devotion and faith',
        'Provides spiritual strength',
        'Removes fear and doubt',
        'Connects with Hanuman\'s power',
        'Promotes selfless service'
      ],
      healthBenefits: [
        'Improves physical strength',
        'Enhances muscle power',
        'Boosts stamina and endurance',
        'Improves bone health',
        'Reduces chronic pain'
      ],
      wealthBenefits: [
        'Removes obstacles to prosperity',
        'Brings strength in adversity',
        'Attracts powerful protection',
        'Enhances courage in business',
        'Promotes steady progress'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize on Tuesday by chanting "Om Namah" 108 times. Ideal for those needing courage, strength, and protection.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in red cloth. Most powerful during challenging times requiring strength.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 6000, description: 'Enhanced courage and strength' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 8500, description: 'Maximum divine protection' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear fourteen mukhi lines',
          features: ['Clear fourteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 2500, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    15: {
      id: 'rudraksha-15-mukhi',
      name: '15 Mukhi Rudraksha',
      sanskritName: 'Pandrah Mukhi Rudraksha',
      deity: 'Lord Pashupatinath',
      planet: 'All Planets',
      chakra: 'Anahata (Heart Chakra)',
      mantra: 'Om Namah',
      description: `The 15 Mukhi Rudraksha is blessed by Lord Pashupatinath. It enhances healing abilities and develops compassion. This bead promotes universal love and spiritual growth. It is powerful for healers and those in service professions.`,
      spiritualBenefits: [
        'Develops healing abilities',
        'Enhances compassion and love',
        'Promotes spiritual service',
        'Connects with universal consciousness',
        'Awakens divine healing powers'
      ],
      healthBenefits: [
        'Provides powerful healing energy',
        'Improves overall health',
        'Enhances recovery from illness',
        'Balances all body systems',
        'Promotes longevity'
      ],
      wealthBenefits: [
        'Attracts wealth through service',
        'Enhances healing professions',
        'Brings abundance through compassion',
        'Promotes ethical earning',
        'Attracts divine support'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Namah" 108 times. Ideal for healers, doctors, and those in service professions.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in white cloth. Most powerful when used for healing others.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 7000, description: 'Enhanced healing and compassion' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 9500, description: 'Maximum healing powers' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear fifteen mukhi lines',
          features: ['Clear fifteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 3000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    16: {
      id: 'rudraksha-16-mukhi',
      name: '16 Mukhi Rudraksha',
      sanskritName: 'Solah Mukhi Rudraksha',
      deity: 'Lord Mahamrityunjaya',
      planet: 'All Planets',
      chakra: 'All Chakras',
      mantra: 'Om Hreem Hum Namah',
      description: `The 16 Mukhi Rudraksha is blessed by Lord Mahamrityunjaya. It provides protection from untimely death and serious illnesses. This bead enhances longevity and provides victory over enemies. It is one of the most powerful protective beads.`,
      spiritualBenefits: [
        'Provides ultimate protection',
        'Conquers fear of death',
        'Enhances spiritual immortality',
        'Connects with Mahamrityunjaya energy',
        'Promotes fearless living'
      ],
      healthBenefits: [
        'Protects from serious diseases',
        'Enhances longevity',
        'Improves overall immunity',
        'Provides healing from chronic ailments',
        'Protects from accidents'
      ],
      wealthBenefits: [
        'Protects from financial ruin',
        'Provides victory in legal matters',
        'Attracts powerful protection',
        'Ensures long-term security',
        'Brings triumph over competitors'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Hreem Hum Namah" 108 times. Can be worn any day. Provides ultimate protection from all dangers.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in sacred place. Provides continuous protection when worn regularly.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 8000, description: 'Ultimate protection and longevity' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 11000, description: 'Maximum divine protection' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear sixteen mukhi lines',
          features: ['Clear sixteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 3500, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    17: {
      id: 'rudraksha-17-mukhi',
      name: '17 Mukhi Rudraksha',
      sanskritName: 'Satrah Mukhi Rudraksha',
      deity: 'Goddess Katyayani',
      planet: 'All Planets',
      chakra: 'Sahasrara (Crown Chakra)',
      mantra: 'Om Hreem Hum Namah',
      description: `The 17 Mukhi Rudraksha is blessed by Goddess Katyayani. It provides immense spiritual power and divine feminine energy. This bead is powerful for achieving moksha (liberation) and spiritual enlightenment. It awakens the highest spiritual consciousness.`,
      spiritualBenefits: [
        'Awakens highest spiritual consciousness',
        'Provides path to liberation',
        'Enhances divine feminine power',
        'Promotes spiritual enlightenment',
        'Connects with cosmic mother energy'
      ],
      healthBenefits: [
        'Provides complete healing',
        'Balances all energies',
        'Enhances spiritual health',
        'Promotes overall well-being',
        'Awakens healing powers'
      ],
      wealthBenefits: [
        'Attracts spiritual wealth',
        'Brings abundance through divine grace',
        'Promotes detachment from materialism',
        'Attracts divine support',
        'Ensures spiritual prosperity'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Hreem Hum Namah" 108 times. Ideal for advanced spiritual practitioners seeking liberation.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in meditation room. Most powerful for spiritual enlightenment.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 10000, description: 'Enhanced spiritual power and liberation' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 14000, description: 'Maximum spiritual enlightenment' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear seventeen mukhi lines',
          features: ['Clear seventeen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 4000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    18: {
      id: 'rudraksha-18-mukhi',
      name: '18 Mukhi Rudraksha',
      sanskritName: 'Atharah Mukhi Rudraksha',
      deity: 'Goddess Bhumi (Mother Earth)',
      planet: 'Earth',
      chakra: 'Muladhara (Root Chakra)',
      mantra: 'Om Shreem Hreem Namah',
      description: `The 18 Mukhi Rudraksha is blessed by Goddess Bhumi (Mother Earth). It provides strong grounding and stability. This bead enhances connection with earth energies and brings material prosperity. It is powerful for real estate and land-related matters.`,
      spiritualBenefits: [
        'Connects with Mother Earth energy',
        'Provides spiritual grounding',
        'Enhances environmental consciousness',
        'Promotes earth healing',
        'Develops ecological awareness'
      ],
      healthBenefits: [
        'Provides strong grounding energy',
        'Improves bone and muscle health',
        'Enhances physical stability',
        'Improves connection with nature',
        'Balances earth element'
      ],
      wealthBenefits: [
        'Attracts property and land',
        'Enhances real estate investments',
        'Brings material stability',
        'Promotes agricultural success',
        'Attracts earth-based wealth'
      ],
      wearingMethod: `Purify in clean water for 24 hours. Energize by chanting "Om Shreem Hreem Namah" 108 times. Ideal for those in real estate, agriculture, and earth-related businesses.`,
      careInstructions: `Clean weekly with water. Apply mustard oil monthly. Store in brown cloth. Most powerful for grounding and material prosperity.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 12000, description: 'Enhanced grounding and material prosperity' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 16000, description: 'Maximum earth connection' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear eighteen mukhi lines',
          features: ['Clear eighteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 4500, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    19: {
      id: 'rudraksha-19-mukhi',
      name: '19 Mukhi Rudraksha',
      sanskritName: 'Unnis Mukhi Rudraksha',
      deity: 'Lord Narayana (Vishnu)',
      planet: 'All Planets',
      chakra: 'All Chakras',
      mantra: 'Om Vam Namah',
      description: `The 19 Mukhi Rudraksha is blessed by Lord Narayana (Vishnu). It provides divine grace and promotes spiritual evolution. This bead awakens universal consciousness and leads to enlightenment. It is one of the most spiritually powerful beads.`,
      spiritualBenefits: [
        'Awakens universal consciousness',
        'Provides divine grace and blessings',
        'Promotes spiritual evolution',
        'Connects with Vishnu\'s cosmic energy',
        'Leads to enlightenment'
      ],
      healthBenefits: [
        'Provides complete healing',
        'Balances all body systems',
        'Enhances overall vitality',
        'Promotes longevity',
        'Awakens healing consciousness'
      ],
      wealthBenefits: [
        'Attracts divine abundance',
        'Brings wealth through spiritual means',
        'Promotes ethical prosperity',
        'Attracts cosmic support',
        'Ensures divine provision'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Vam Namah" 108 times. Ideal for advanced spiritual practitioners seeking enlightenment.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in sacred place. Most powerful for spiritual evolution.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 15000, description: 'Enhanced spiritual evolution and enlightenment' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 20000, description: 'Maximum universal consciousness' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear nineteen mukhi lines',
          features: ['Clear nineteen mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 5000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    20: {
      id: 'rudraksha-20-mukhi',
      name: '20 Mukhi Rudraksha',
      sanskritName: 'Bees Mukhi Rudraksha',
      deity: 'Lord Brahma (Creator)',
      planet: 'All Planets',
      chakra: 'Sahasrara (Crown Chakra)',
      mantra: 'Om Hreem Namah',
      description: `The 20 Mukhi Rudraksha is blessed by Lord Brahma (Creator). It enhances creative powers and manifestation abilities. This bead provides divine knowledge and cosmic consciousness. It is powerful for creators, artists, and spiritual teachers.`,
      spiritualBenefits: [
        'Enhances creative consciousness',
        'Develops manifestation powers',
        'Connects with cosmic creation',
        'Provides divine knowledge',
        'Awakens creator consciousness'
      ],
      healthBenefits: [
        'Enhances creative faculties',
        'Improves brain function',
        'Balances all energies',
        'Promotes overall health',
        'Awakens healing abilities'
      ],
      wealthBenefits: [
        'Attracts wealth through creativity',
        'Enhances artistic success',
        'Brings abundance through innovation',
        'Promotes intellectual property',
        'Attracts divine inspiration'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting "Om Hreem Namah" 108 times. Ideal for creators, artists, and spiritual teachers.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in meditation room. Most powerful for creative manifestation.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 18000, description: 'Enhanced creative powers and manifestation' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 24000, description: 'Maximum creator consciousness' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear twenty mukhi lines',
          features: ['Clear twenty mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 6000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    },
    21: {
      id: 'rudraksha-21-mukhi',
      name: '21 Mukhi Rudraksha',
      sanskritName: 'Ikkees Mukhi Rudraksha',
      deity: 'Lord Kubera',
      planet: 'All Planets',
      chakra: 'All Chakras',
      mantra: 'Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye Dhanadhanyasamriddhim Me Dehi Dapaya Svaha',
      description: `The 21 Mukhi Rudraksha is blessed by Lord Kubera, the treasurer of gods. It provides ultimate wealth and prosperity. This bead attracts abundance and material fulfillment. It is the most powerful bead for wealth and prosperity.`,
      spiritualBenefits: [
        'Connects with cosmic abundance',
        'Provides spiritual wealth',
        'Enhances gratitude consciousness',
        'Promotes generous spirit',
        'Attracts divine prosperity'
      ],
      healthBenefits: [
        'Provides ultimate health protection',
        'Enhances overall vitality',
        'Promotes longevity',
        'Balances all energies',
        'Ensures complete well-being'
      ],
      wealthBenefits: [
        'Attracts ultimate wealth and prosperity',
        'Brings abundance in all forms',
        'Ensures material fulfillment',
        'Attracts treasure and riches',
        'Provides financial security for life'
      ],
      wearingMethod: `Purify in Ganga water for 24 hours. Energize by chanting the full Kubera mantra 108 times. Ideal for those seeking ultimate wealth and prosperity.`,
      careInstructions: `Clean weekly with pure water. Apply sandalwood paste monthly. Store in golden cloth. Most powerful for ultimate prosperity.`,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
      ],
      sizes: [
        { id: 'large', name: 'Large (18-20mm)', price: 25000, description: 'Ultimate wealth and prosperity' },
        { id: 'extra-large', name: 'Extra Large (21-23mm)', price: 35000, description: 'Maximum divine abundance' }
      ],
      qualities: [
        { 
          id: 'premium', 
          name: 'Premium Quality', 
          price: 0, 
          description: 'High-grade with clear twenty-one mukhi lines',
          features: ['Clear twenty-one mukhi lines', 'Superior finish', 'Lab certification', 'Energized by priests']
        },
        { 
          id: 'collector', 
          name: 'Collector Grade', 
          price: 10000, 
          description: 'Museum quality with perfect formation',
          features: ['Flawless mukhi definition', 'Perfect symmetry', 'Premium certification', 'Blessed by saints']
        }
      ]
    }
  };

  // Get current Rudraksha data or default to 5 Mukhi
  const rudrakshaData = rudrakshaDatabase[mukhiCount] || rudrakshaDatabase[5];

  const relatedRudraksha = [
    {
      id: 'rudraksha-1-mukhi',
      name: '1 Mukhi Rudraksha',
      deity: 'Lord Shiva',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop',
      benefits: 'Ultimate spiritual awakening and self-realization'
    },
    {
      id: 'rudraksha-6-mukhi',
      name: '6 Mukhi Rudraksha',
      deity: 'Lord Kartikeya',
      price: 800,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
      benefits: 'Enhances willpower, focus and determination'
    },
    {
      id: 'rudraksha-7-mukhi',
      name: '7 Mukhi Rudraksha',
      deity: 'Goddess Lakshmi',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      benefits: 'Attracts wealth, prosperity and good fortune'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getCurrentPrice = () => {
    const sizePrice = rudrakshaData.sizes.find(s => s.id === selectedSize)?.price || 0;
    const qualityPrice = rudrakshaData.qualities.find(q => q.id === selectedQuality)?.price || 0;
    return sizePrice + qualityPrice;
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the ${rudrakshaData.name} (${selectedSize} size, ${selectedQuality} quality) priced at ₹${getCurrentPrice().toLocaleString('en-IN')}. Can you provide more details about its spiritual significance, authenticity certificates, and proper wearing methods?`;
    const phoneNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow animate-float mb-4 mx-auto">
            <Icon name="Circle" size={32} color="#F59E0B" />
          </div>
          <p className="text-text-secondary font-poppins">Loading sacred Rudraksha details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <Breadcrumb />
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* 3D Viewer */}
            <div className="order-1 lg:order-1">
              <RudrakshaViewer3D 
                rudrakshaData={rudrakshaData}
                selectedSize={selectedSize}
                selectedQuality={selectedQuality}
              />
            </div>
            
            {/* Product Info */}
            <div className="order-2 lg:order-2 space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-2">
                  {rudrakshaData.name}
                </h1>
                <p className="text-xl text-accent font-poppins mb-4">
                  {rudrakshaData.sanskritName}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2 bg-surface/50 px-3 py-2 rounded-lg">
                    <Icon name="Star" size={16} className="text-accent" />
                    <span className="text-text-secondary text-sm">{rudrakshaData.deity}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-surface/50 px-3 py-2 rounded-lg">
                    <Icon name="Globe" size={16} className="text-accent" />
                    <span className="text-text-secondary text-sm">{rudrakshaData.planet}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-surface/50 px-3 py-2 rounded-lg">
                    <Icon name="Zap" size={16} className="text-accent" />
                    <span className="text-text-secondary text-sm">{rudrakshaData.chakra}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface/30 p-6 rounded-xl cosmic-shadow">
                <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-3">
                  Sacred Description
                </h3>
                <p className="text-text-secondary font-poppins leading-relaxed">
                  {rudrakshaData.description}
                </p>
              </div>
              
              {/* Pricing Section */}
              <PricingOptions 
                sizes={rudrakshaData.sizes}
                qualities={rudrakshaData.qualities}
                selectedSize={selectedSize}
                selectedQuality={selectedQuality}
                onSizeChange={setSelectedSize}
                onQualityChange={setSelectedQuality}
                currentPrice={getCurrentPrice()}
              />
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-success hover:bg-success-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 cosmic-shadow"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Inquire on WhatsApp</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
                  <Icon name="Phone" size={20} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Detailed Information Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-surface-600">
              {[
                { id: 'significance', label: 'Spiritual Significance', icon: 'Star' },
                { id: 'wearing', label: 'Wearing Instructions', icon: 'User' },
                { id: 'mantras', label: 'Mantras & Prayers', icon: 'Volume2' },
                { id: 'care', label: 'Care Instructions', icon: 'Heart' },
                { id: 'authenticity', label: 'Authenticity', icon: 'Shield' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary/20 text-primary border-b-2 border-primary' :'text-text-secondary hover:text-text-primary hover:bg-surface/30'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className="bg-surface/20 rounded-xl p-6 lg:p-8 cosmic-shadow">
              {activeTab === 'significance' && (
                <SpiritualSignificance rudrakshaData={rudrakshaData} />
              )}
              {activeTab === 'wearing' && (
                <WearingInstructions rudrakshaData={rudrakshaData} />
              )}
              {activeTab === 'mantras' && (
                <MantraSection rudrakshaData={rudrakshaData} />
              )}
              {activeTab === 'care' && (
                <CareInstructions rudrakshaData={rudrakshaData} />
              )}
              {activeTab === 'authenticity' && (
                <AuthenticitySection rudrakshaData={rudrakshaData} />
              )}
            </div>
          </div>
          
          {/* Related Rudraksha */}
          <RelatedRudraksha relatedRudraksha={relatedRudraksha} />
        </div>
      </main>
    </div>
  );
};

export default IndividualRudrakshaProduct;