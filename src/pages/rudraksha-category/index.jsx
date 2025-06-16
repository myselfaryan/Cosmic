import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import RudrakshaCard from './components/RudrakshaCard';
import FilterSection from './components/FilterSection';
import SpecialVarieties from './components/SpecialVarieties';
import FAQSection from './components/FAQSection';

const RudrakshaCategory = () => {
  const [filteredRudraksha, setFilteredRudraksha] = useState([]);
  const [filters, setFilters] = useState({
    mukhiCount: 'all',
    size: 'all',
    origin: 'all',
    purpose: 'all'
  });
  const [isLoading, setIsLoading] = useState(true);

  const rudrakshaData = [
    {
      id: 1,
      name: "1 Mukhi Rudraksha",
      mukhiCount: 1,
      deity: "Lord Shiva",
      planet: "Sun",
      chakra: "Sahasrara (Crown Chakra)",
      benefits: "Self-realization, Leadership, Spiritual awakening, Supreme consciousness",
      startingPrice: 25000,
      image: "/rudraksha/1-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Spiritual Growth",
      rarity: "Extremely Rare",
      description: `The 1 Mukhi Rudraksha is the most powerful and rare bead, representing Lord Shiva himself. It brings supreme consciousness and helps in achieving moksha (liberation). This sacred bead removes all sins and grants the wearer divine blessings. It enhances leadership qualities and brings clarity of thought.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Attainment of supreme consciousness",
        "Direct connection with Lord Shiva",
        "Liberation from cycle of birth and death",
        "Enhanced spiritual awareness",
        "Removal of all negative karma"
      ],
      healthBenefits: [
        "Improves concentration and focus",
        "Reduces stress and anxiety",
        "Enhances mental clarity",
        "Balances nervous system",
        "Improves overall vitality"
      ],
      wealthBenefits: [
        "Attracts abundance and prosperity",
        "Enhances leadership in business",
        "Brings success in all endeavors",
        "Removes financial obstacles",
        "Increases decision-making power"
      ]
    },
    {
      id: 2,
      name: "2 Mukhi Rudraksha",
      mukhiCount: 2,
      deity: "Ardhanarishvara (Shiva-Parvati)",
      planet: "Moon",
      chakra: "Swadhisthana (Sacral Chakra)",
      benefits: "Unity, Relationships, Emotional balance, Harmony between opposites",
      startingPrice: 1200,
      image: "/rudraksha/2-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Relationships",
      rarity: "Rare",
      description: `The 2 Mukhi Rudraksha represents the unity of Shiva and Parvati (Ardhanarishvara). It enhances relationships and brings harmony between couples. This bead is excellent for emotional stability and mental peace. It helps in balancing masculine and feminine energies within.`,
      mantra: "Om Namah",
      spiritualBenefits: [
        "Balances dual nature of existence",
        "Enhances emotional stability",
        "Promotes harmony in relationships",
        "Develops compassion and understanding",
        "Connects with divine feminine energy"
      ],
      healthBenefits: [
        "Regulates hormonal balance",
        "Improves reproductive health",
        "Reduces emotional stress",
        "Enhances kidney function",
        "Balances water element in body"
      ],
      wealthBenefits: [
        "Brings stability in partnerships",
        "Enhances cooperation in business",
        "Attracts supportive relationships",
        "Improves team dynamics",
        "Creates harmonious work environment"
      ]
    },
    {
      id: 3,
      name: "3 Mukhi Rudraksha",
      mukhiCount: 3,
      deity: "Lord Agni (Fire God)",
      planet: "Mars",
      chakra: "Manipura (Solar Plexus Chakra)",
      benefits: "Confidence, Past karma cleansing, Energy boost, Self-esteem",
      startingPrice: 800,
      image: "/rudraksha/3-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Energy",
      rarity: "Common",
      description: `The 3 Mukhi Rudraksha is blessed by Lord Agni (Fire God). It burns past negative karma and boosts self-confidence. This bead helps overcome depression and inferiority complex. It ignites the inner fire and enhances personal power and courage.`,
      mantra: "Om Kleem Namah",
      spiritualBenefits: [
        "Burns negative karma from past lives",
        "Enhances self-confidence and courage",
        "Removes guilt and shame",
        "Ignites spiritual fire within",
        "Promotes self-acceptance"
      ],
      healthBenefits: [
        "Improves digestive system",
        "Boosts metabolism",
        "Enhances liver function",
        "Reduces stomach ailments",
        "Increases energy levels"
      ],
      wealthBenefits: [
        "Removes obstacles in career",
        "Enhances personal magnetism",
        "Attracts recognition and fame",
        "Improves leadership qualities",
        "Brings success in competitive fields"
      ]
    },
    {
      id: 4,
      name: "4 Mukhi Rudraksha",
      mukhiCount: 4,
      deity: "Lord Brahma (Creator)",
      planet: "Mercury",
      chakra: "Anahata (Heart Chakra)",
      benefits: "Knowledge, Creativity, Communication skills, Wisdom",
      startingPrice: 600,
      image: "/rudraksha/4-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Knowledge",
      rarity: "Common",
      description: `The 4 Mukhi Rudraksha is blessed by Lord Brahma, the creator. It enhances knowledge, creativity, and communication abilities. This bead is perfect for students and creative professionals. It improves memory, concentration, and learning capacity.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Enhances creative expression",
        "Improves communication with divine",
        "Develops wisdom and knowledge",
        "Promotes artistic abilities",
        "Connects with cosmic consciousness"
      ],
      healthBenefits: [
        "Improves memory and concentration",
        "Enhances brain function",
        "Reduces mental fatigue",
        "Improves speech and voice",
        "Balances thyroid function"
      ],
      wealthBenefits: [
        "Success in education and learning",
        "Enhances professional skills",
        "Attracts opportunities in creative fields",
        "Improves business communication",
        "Brings recognition for talents"
      ]
    },
    {
      id: 5,
      name: "5 Mukhi Rudraksha",
      mukhiCount: 5,
      deity: "Lord Kalagni Rudra",
      planet: "Jupiter",
      chakra: "Vishuddha (Throat Chakra)",
      benefits: "Health, Peace, General well-being, Mental clarity",
      startingPrice: 300,
      image: "/rudraksha/5-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Health",
      rarity: "Very Common",
      description: `The 5 Mukhi Rudraksha is the most common and beneficial bead. It represents Lord Kalagni and brings overall well-being. This bead is suitable for everyone and has no negative effects. It promotes good health, peace of mind, and spiritual growth.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Promotes overall spiritual well-being",
        "Enhances meditation practice",
        "Brings mental peace and clarity",
        "Removes negative energies",
        "Suitable for all spiritual practices"
      ],
      healthBenefits: [
        "Improves overall health",
        "Regulates blood pressure",
        "Enhances respiratory system",
        "Boosts immune system",
        "Reduces stress and anxiety"
      ],
      wealthBenefits: [
        "Brings general prosperity",
        "Removes financial obstacles",
        "Enhances earning capacity",
        "Attracts opportunities",
        "Promotes steady growth"
      ]
    },
    {
      id: 6,
      name: "6 Mukhi Rudraksha",
      mukhiCount: 6,
      deity: "Lord Kartikeya (Murugan)",
      planet: "Venus",
      chakra: "Swadhisthana (Sacral Chakra)",
      benefits: "Willpower, Focus, Grounding energy, Emotional stability",
      startingPrice: 800,
      image: "/rudraksha/6-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Focus",
      rarity: "Common",
      description: `The 6 Mukhi Rudraksha is blessed by Lord Kartikeya (Murugan). It enhances willpower, focus, and determination. This bead helps in overcoming laziness and procrastination. It provides grounding energy and emotional stability.`,
      mantra: "Om Hreem Hum Namah",
      spiritualBenefits: [
        "Enhances willpower and determination",
        "Improves focus in meditation",
        "Develops emotional maturity",
        "Connects with warrior energy",
        "Promotes spiritual discipline"
      ],
      healthBenefits: [
        "Improves reproductive health",
        "Enhances sexual vitality",
        "Balances hormones",
        "Reduces urinary problems",
        "Improves kidney function"
      ],
      wealthBenefits: [
        "Enhances property and land dealings",
        "Improves real estate investments",
        "Brings stability in income",
        "Attracts luxury and comfort",
        "Promotes material prosperity"
      ]
    },
    {
      id: 7,
      name: "7 Mukhi Rudraksha",
      mukhiCount: 7,
      deity: "Goddess Lakshmi",
      planet: "Saturn",
      chakra: "Manipura (Solar Plexus Chakra)",
      benefits: "Wealth, Prosperity, Good fortune, Financial stability",
      startingPrice: 1500,
      image: "/rudraksha/7-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Wealth",
      rarity: "Uncommon",
      description: `The 7 Mukhi Rudraksha is blessed by Goddess Lakshmi. It brings wealth, prosperity, and good fortune to the wearer. This bead removes financial obstacles and attracts abundance. It is especially beneficial for business and career growth.`,
      mantra: "Om Hum Namah",
      spiritualBenefits: [
        "Attracts divine blessings of Lakshmi",
        "Removes poverty consciousness",
        "Enhances gratitude and abundance mindset",
        "Promotes spiritual wealth",
        "Connects with prosperity consciousness"
      ],
      healthBenefits: [
        "Improves overall vitality",
        "Enhances bone health",
        "Reduces joint problems",
        "Improves muscle strength",
        "Balances Saturn's negative effects"
      ],
      wealthBenefits: [
        "Attracts wealth and prosperity",
        "Removes financial obstacles",
        "Enhances business growth",
        "Brings good fortune in investments",
        "Promotes steady income flow"
      ]
    },
    {
      id: 8,
      name: "8 Mukhi Rudraksha",
      mukhiCount: 8,
      deity: "Lord Ganesha",
      planet: "Rahu",
      chakra: "Muladhara (Root Chakra)",
      benefits: "Obstacle removal, New beginnings, Success, Wisdom",
      startingPrice: 2000,
      image: "/rudraksha/8-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Success",
      rarity: "Uncommon",
      description: `The 8 Mukhi Rudraksha is blessed by Lord Ganesha. It removes obstacles and ensures success in new ventures. This bead brings wisdom and helps in making right decisions. It is excellent for starting new projects and businesses.`,
      mantra: "Om Gam Ganapataye Namah",
      spiritualBenefits: [
        "Removes spiritual obstacles",
        "Enhances wisdom and intelligence",
        "Promotes new spiritual beginnings",
        "Connects with Ganesha's blessings",
        "Develops problem-solving abilities"
      ],
      healthBenefits: [
        "Improves nervous system",
        "Enhances brain function",
        "Reduces anxiety and fear",
        "Improves coordination",
        "Balances Rahu's effects"
      ],
      wealthBenefits: [
        "Removes obstacles in business",
        "Ensures success in new ventures",
        "Attracts opportunities",
        "Enhances analytical abilities",
        "Brings wisdom in financial decisions"
      ]
    },
    {
      id: 9,
      name: "9 Mukhi Rudraksha",
      mukhiCount: 9,
      deity: "Goddess Durga",
      planet: "Ketu",
      chakra: "Ajna (Third Eye Chakra)",
      benefits: "Protection, Courage, Divine feminine energy, Fearlessness",
      startingPrice: 2500,
      image: "/rudraksha/9-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Protection",
      rarity: "Rare",
      description: `The 9 Mukhi Rudraksha is blessed by Goddess Durga. It provides divine protection and enhances courage. This bead awakens the divine feminine energy within and removes fear. It is powerful for spiritual protection and inner strength.`,
      mantra: "Om Hreem Hum Namah",
      spiritualBenefits: [
        "Provides divine protection",
        "Awakens inner strength and courage",
        "Connects with divine feminine power",
        "Removes fear and negativity",
        "Enhances spiritual warrior qualities"
      ],
      healthBenefits: [
        "Boosts immune system",
        "Improves overall energy",
        "Reduces chronic fatigue",
        "Enhances physical strength",
        "Balances Ketu's effects"
      ],
      wealthBenefits: [
        "Protects from financial losses",
        "Brings courage in business decisions",
        "Attracts powerful allies",
        "Enhances leadership qualities",
        "Promotes fearless action"
      ]
    },
    {
      id: 10,
      name: "10 Mukhi Rudraksha",
      mukhiCount: 10,
      deity: "Lord Vishnu",
      planet: "All Planets",
      chakra: "All Chakras",
      benefits: "Peace, Protection from negative energies, Divine grace",
      startingPrice: 3000,
      image: "/rudraksha/10-mukhi.jpg",
      origin: "Nepal",
      size: "Medium",
      purpose: "Peace",
      rarity: "Rare",
      description: `The 10 Mukhi Rudraksha is blessed by Lord Vishnu. It brings peace and protects from all negative energies. This bead ensures overall protection and divine grace. It harmonizes all planetary influences and brings balance to life.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Provides complete spiritual protection",
        "Harmonizes all energies",
        "Connects with Vishnu's preserving power",
        "Brings divine grace and blessings",
        "Promotes universal peace"
      ],
      healthBenefits: [
        "Provides overall health protection",
        "Balances all body systems",
        "Reduces chronic ailments",
        "Enhances longevity",
        "Promotes general well-being"
      ],
      wealthBenefits: [
        "Protects from all financial troubles",
        "Brings stability and security",
        "Attracts divine support",
        "Ensures steady progress",
        "Promotes long-term prosperity"
      ]
    },
    {
      id: 11,
      name: "11 Mukhi Rudraksha",
      mukhiCount: 11,
      deity: "Eleven Rudras",
      planet: "All Planets",
      chakra: "Sahasrara (Crown Chakra)",
      benefits: "Meditation, Spiritual powers, Divine consciousness, Intuition",
      startingPrice: 4000,
      image: "/rudraksha/11-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Meditation",
      rarity: "Very Rare",
      description: `The 11 Mukhi Rudraksha is blessed by the Eleven Rudras. It enhances meditation and awakens spiritual powers. This bead helps in achieving higher states of consciousness and develops intuitive abilities. It is powerful for advanced spiritual practices.`,
      mantra: "Om Hreem Hum Namah",
      spiritualBenefits: [
        "Enhances meditation and concentration",
        "Awakens psychic abilities",
        "Develops higher consciousness",
        "Connects with cosmic energies",
        "Promotes spiritual transformation"
      ],
      healthBenefits: [
        "Improves nervous system",
        "Enhances brain function",
        "Reduces mental disorders",
        "Improves memory and focus",
        "Balances neurological functions"
      ],
      wealthBenefits: [
        "Attracts abundance through intuition",
        "Enhances decision-making abilities",
        "Brings success through spiritual means",
        "Promotes ethical wealth creation",
        "Attracts divine support in endeavors"
      ]
    },
    {
      id: 12,
      name: "12 Mukhi Rudraksha",
      mukhiCount: 12,
      deity: "Lord Surya (Sun God)",
      planet: "Sun",
      chakra: "Anahata (Heart Chakra)",
      benefits: "Leadership, Administrative skills, Vitality, Authority",
      startingPrice: 4500,
      image: "/rudraksha/12-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Leadership",
      rarity: "Very Rare",
      description: `The 12 Mukhi Rudraksha is blessed by Lord Surya (Sun God). It enhances leadership qualities and administrative skills. This bead brings vitality, confidence, and royal qualities. It is excellent for those in positions of authority and leadership.`,
      mantra: "Om Kraum Sraum Raum Namah",
      spiritualBenefits: [
        "Enhances spiritual leadership",
        "Develops divine authority",
        "Connects with solar consciousness",
        "Promotes righteous action",
        "Awakens inner radiance"
      ],
      healthBenefits: [
        "Improves heart health",
        "Enhances circulation",
        "Boosts vitality and energy",
        "Improves eyesight",
        "Strengthens immune system"
      ],
      wealthBenefits: [
        "Attracts positions of authority",
        "Enhances earning through leadership",
        "Brings recognition and fame",
        "Promotes government favor",
        "Attracts royal treatment"
      ]
    },
    {
      id: 13,
      name: "13 Mukhi Rudraksha",
      mukhiCount: 13,
      deity: "Lord Indra & Kamadeva",
      planet: "Venus",
      chakra: "Anahata (Heart Chakra)",
      benefits: "Attraction, Charisma, Fulfillment of desires, Love",
      startingPrice: 5000,
      image: "/rudraksha/13-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Attraction",
      rarity: "Very Rare",
      description: `The 13 Mukhi Rudraksha is blessed by Lord Indra and Kamadeva. It enhances attraction, charisma, and fulfills desires. This bead is powerful for attracting love, success, and material pleasures. It brings charm and magnetic personality.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Fulfills spiritual desires",
        "Enhances divine love",
        "Develops magnetic personality",
        "Attracts spiritual teachers",
        "Promotes divine union"
      ],
      healthBenefits: [
        "Improves reproductive health",
        "Enhances sexual vitality",
        "Balances hormones",
        "Improves skin and beauty",
        "Enhances overall attractiveness"
      ],
      wealthBenefits: [
        "Attracts wealth through charm",
        "Enhances business relationships",
        "Brings luxury and comfort",
        "Attracts beneficial partnerships",
        "Promotes success in entertainment"
      ]
    },
    {
      id: 14,
      name: "14 Mukhi Rudraksha",
      mukhiCount: 14,
      deity: "Lord Hanuman",
      planet: "Saturn",
      chakra: "Ajna (Third Eye Chakra)",
      benefits: "Courage, Strength, Protection, Devotion",
      startingPrice: 6000,
      image: "/rudraksha/14-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Strength",
      rarity: "Extremely Rare",
      description: `The 14 Mukhi Rudraksha is blessed by Lord Hanuman. It provides immense courage, strength, and protection. This bead enhances devotion and removes fear. It is powerful for overcoming obstacles and developing unwavering faith.`,
      mantra: "Om Namah",
      spiritualBenefits: [
        "Enhances devotion and faith",
        "Provides spiritual strength",
        "Removes fear and doubt",
        "Connects with Hanuman's power",
        "Promotes selfless service"
      ],
      healthBenefits: [
        "Improves physical strength",
        "Enhances muscle power",
        "Boosts stamina and endurance",
        "Improves bone health",
        "Reduces chronic pain"
      ],
      wealthBenefits: [
        "Removes obstacles to prosperity",
        "Brings strength in adversity",
        "Attracts powerful protection",
        "Enhances courage in business",
        "Promotes steady progress"
      ]
    },
    {
      id: 15,
      name: "15 Mukhi Rudraksha",
      mukhiCount: 15,
      deity: "Lord Pashupatinath",
      planet: "All Planets",
      chakra: "Anahata (Heart Chakra)",
      benefits: "Healing, Compassion, Universal love, Spiritual growth",
      startingPrice: 7000,
      image: "/rudraksha/15-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Healing",
      rarity: "Extremely Rare",
      description: `The 15 Mukhi Rudraksha is blessed by Lord Pashupatinath. It enhances healing abilities and develops compassion. This bead promotes universal love and spiritual growth. It is powerful for healers and those in service professions.`,
      mantra: "Om Namah",
      spiritualBenefits: [
        "Develops healing abilities",
        "Enhances compassion and love",
        "Promotes spiritual service",
        "Connects with universal consciousness",
        "Awakens divine healing powers"
      ],
      healthBenefits: [
        "Provides powerful healing energy",
        "Improves overall health",
        "Enhances recovery from illness",
        "Balances all body systems",
        "Promotes longevity"
      ],
      wealthBenefits: [
        "Attracts wealth through service",
        "Enhances healing professions",
        "Brings abundance through compassion",
        "Promotes ethical earning",
        "Attracts divine support"
      ]
    },
    {
      id: 16,
      name: "16 Mukhi Rudraksha",
      mukhiCount: 16,
      deity: "Lord Mahamrityunjaya",
      planet: "All Planets",
      chakra: "All Chakras",
      benefits: "Protection from death, Healing, Longevity, Victory over enemies",
      startingPrice: 8000,
      image: "/rudraksha/16-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Protection",
      rarity: "Extremely Rare",
      description: `The 16 Mukhi Rudraksha is blessed by Lord Mahamrityunjaya. It provides protection from untimely death and serious illnesses. This bead enhances longevity and provides victory over enemies. It is one of the most powerful protective beads.`,
      mantra: "Om Hreem Hum Namah",
      spiritualBenefits: [
        "Provides ultimate protection",
        "Conquers fear of death",
        "Enhances spiritual immortality",
        "Connects with Mahamrityunjaya energy",
        "Promotes fearless living"
      ],
      healthBenefits: [
        "Protects from serious diseases",
        "Enhances longevity",
        "Improves overall immunity",
        "Provides healing from chronic ailments",
        "Protects from accidents"
      ],
      wealthBenefits: [
        "Protects from financial ruin",
        "Provides victory in legal matters",
        "Attracts powerful protection",
        "Ensures long-term security",
        "Brings triumph over competitors"
      ]
    },
    {
      id: 17,
      name: "17 Mukhi Rudraksha",
      mukhiCount: 17,
      deity: "Goddess Katyayani",
      planet: "All Planets",
      chakra: "Sahasrara (Crown Chakra)",
      benefits: "Spiritual power, Divine feminine energy, Moksha, Liberation",
      startingPrice: 10000,
      image: "/rudraksha/17-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Liberation",
      rarity: "Extremely Rare",
      description: `The 17 Mukhi Rudraksha is blessed by Goddess Katyayani. It provides immense spiritual power and divine feminine energy. This bead is powerful for achieving moksha (liberation) and spiritual enlightenment. It awakens the highest spiritual consciousness.`,
      mantra: "Om Hreem Hum Namah",
      spiritualBenefits: [
        "Awakens highest spiritual consciousness",
        "Provides path to liberation",
        "Enhances divine feminine power",
        "Promotes spiritual enlightenment",
        "Connects with cosmic mother energy"
      ],
      healthBenefits: [
        "Provides complete healing",
        "Balances all energies",
        "Enhances spiritual health",
        "Promotes overall well-being",
        "Awakens healing powers"
      ],
      wealthBenefits: [
        "Attracts spiritual wealth",
        "Brings abundance through divine grace",
        "Promotes detachment from materialism",
        "Attracts divine support",
        "Ensures spiritual prosperity"
      ]
    },
    {
      id: 18,
      name: "18 Mukhi Rudraksha",
      mukhiCount: 18,
      deity: "Goddess Bhumi (Mother Earth)",
      planet: "Earth",
      chakra: "Muladhara (Root Chakra)",
      benefits: "Grounding, Stability, Material prosperity, Earth connection",
      startingPrice: 12000,
      image: "/rudraksha/18-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Grounding",
      rarity: "Extremely Rare",
      description: `The 18 Mukhi Rudraksha is blessed by Goddess Bhumi (Mother Earth). It provides strong grounding and stability. This bead enhances connection with earth energies and brings material prosperity. It is powerful for real estate and land-related matters.`,
      mantra: "Om Shreem Hreem Namah",
      spiritualBenefits: [
        "Connects with Mother Earth energy",
        "Provides spiritual grounding",
        "Enhances environmental consciousness",
        "Promotes earth healing",
        "Develops ecological awareness"
      ],
      healthBenefits: [
        "Provides strong grounding energy",
        "Improves bone and muscle health",
        "Enhances physical stability",
        "Improves connection with nature",
        "Balances earth element"
      ],
      wealthBenefits: [
        "Attracts property and land",
        "Enhances real estate investments",
        "Brings material stability",
        "Promotes agricultural success",
        "Attracts earth-based wealth"
      ]
    },
    {
      id: 19,
      name: "19 Mukhi Rudraksha",
      mukhiCount: 19,
      deity: "Lord Narayana (Vishnu)",
      planet: "All Planets",
      chakra: "All Chakras",
      benefits: "Divine grace, Spiritual evolution, Universal consciousness, Enlightenment",
      startingPrice: 15000,
      image: "/rudraksha/19-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Enlightenment",
      rarity: "Extremely Rare",
      description: `The 19 Mukhi Rudraksha is blessed by Lord Narayana (Vishnu). It provides divine grace and promotes spiritual evolution. This bead awakens universal consciousness and leads to enlightenment. It is one of the most spiritually powerful beads.`,
      mantra: "Om Vam Namah",
      spiritualBenefits: [
        "Awakens universal consciousness",
        "Provides divine grace and blessings",
        "Promotes spiritual evolution",
        "Connects with Vishnu's cosmic energy",
        "Leads to enlightenment"
      ],
      healthBenefits: [
        "Provides complete healing",
        "Balances all body systems",
        "Enhances overall vitality",
        "Promotes longevity",
        "Awakens healing consciousness"
      ],
      wealthBenefits: [
        "Attracts divine abundance",
        "Brings wealth through spiritual means",
        "Promotes ethical prosperity",
        "Attracts cosmic support",
        "Ensures divine provision"
      ]
    },
    {
      id: 20,
      name: "20 Mukhi Rudraksha",
      mukhiCount: 20,
      deity: "Lord Brahma (Creator)",
      planet: "All Planets",
      chakra: "Sahasrara (Crown Chakra)",
      benefits: "Creation, Manifestation, Divine knowledge, Cosmic consciousness",
      startingPrice: 18000,
      image: "/rudraksha/20-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Creation",
      rarity: "Extremely Rare",
      description: `The 20 Mukhi Rudraksha is blessed by Lord Brahma (Creator). It enhances creative powers and manifestation abilities. This bead provides divine knowledge and cosmic consciousness. It is powerful for creators, artists, and spiritual teachers.`,
      mantra: "Om Hreem Namah",
      spiritualBenefits: [
        "Enhances creative consciousness",
        "Develops manifestation powers",
        "Connects with cosmic creation",
        "Provides divine knowledge",
        "Awakens creator consciousness"
      ],
      healthBenefits: [
        "Enhances creative faculties",
        "Improves brain function",
        "Balances all energies",
        "Promotes overall health",
        "Awakens healing abilities"
      ],
      wealthBenefits: [
        "Attracts wealth through creativity",
        "Enhances artistic success",
        "Brings abundance through innovation",
        "Promotes intellectual property",
        "Attracts divine inspiration"
      ]
    },
    {
      id: 21,
      name: "21 Mukhi Rudraksha",
      mukhiCount: 21,
      deity: "Lord Kubera",
      planet: "All Planets",
      chakra: "All Chakras",
      benefits: "Ultimate wealth, Prosperity, Abundance, Material fulfillment",
      startingPrice: 25000,
      image: "/rudraksha/21-mukhi.jpg",
      origin: "Nepal",
      size: "Large",
      purpose: "Ultimate Prosperity",
      rarity: "Extremely Rare",
      description: `The 21 Mukhi Rudraksha is blessed by Lord Kubera, the treasurer of gods. It provides ultimate wealth and prosperity. This bead attracts abundance and material fulfillment. It is the most powerful bead for wealth and prosperity.`,
      mantra: "Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye Dhanadhanyasamriddhim Me Dehi Dapaya Svaha",
      spiritualBenefits: [
        "Connects with cosmic abundance",
        "Provides spiritual wealth",
        "Enhances gratitude consciousness",
        "Promotes generous spirit",
        "Attracts divine prosperity"
      ],
      healthBenefits: [
        "Provides ultimate health protection",
        "Enhances overall vitality",
        "Promotes longevity",
        "Balances all energies",
        "Ensures complete well-being"
      ],
      wealthBenefits: [
        "Attracts ultimate wealth and prosperity",
        "Brings abundance in all forms",
        "Ensures material fulfillment",
        "Attracts treasure and riches",
        "Provides financial security for life"
      ]
    }
  ];

  const specialVarieties = [
    {
      id: 'gauri-shankar',
      name: "Gauri Shankar Rudraksha",
      description: `Two naturally joined Rudraksha beads representing the union of Lord Shiva and Goddess Parvati. Perfect for couples seeking harmony and understanding in their relationship. This rare bead brings marital bliss and strengthens the bond between partners.`,
      benefits: "Marital harmony, Unity, Divine love",
      price: 35000,
      image: "/rudraksha/gauri-shankar.jpg",
      rarity: "Extremely Rare"
    },
    {
      id: 'trijuti',
      name: "Trijuti Rudraksha",
      description: `Three naturally joined Rudraksha beads representing the Trinity - Brahma, Vishnu, and Mahesh. This sacred combination brings the blessings of all three supreme deities. Extremely rare and powerful for spiritual advancement and divine protection.`,
      benefits: "Trinity blessings, Spiritual growth, Divine protection",
      price: 65000,
      image: "/rudraksha/trijuti.jpg",
      rarity: "Extremely Rare"
    },
    {
      id: 'garbh-gauri',
      name: "Garbh Gauri Rudraksha",
      description: `A unique Rudraksha with a smaller bead naturally formed inside a larger one. Represents the divine mother and child, bringing fertility and protection. Especially beneficial for women seeking motherhood and child protection.`,
      benefits: "Fertility, Child protection, Maternal blessings",
      price: 45000,
      image: "/rudraksha/garbh-gauri.jpg",
      rarity: "Extremely Rare"
    },
    {
      id: 'sawar',
      name: "Sawar Rudraksha",
      description: `A naturally formed Rudraksha with a trunk-like projection, representing Lord Ganesha's trunk. This rare variety is extremely powerful for removing obstacles and bringing success. It provides the direct blessings of Lord Ganesha.`,
      benefits: "Obstacle removal, Success, Ganesha's blessings",
      price: 55000,
      image: "/rudraksha/sawar.jpg",
      rarity: "Extremely Rare"
    }
  ];

  const faqData = [
    {
      question: "How do I choose the right Rudraksha for me?",
      answer: `The choice of Rudraksha depends on your specific needs and spiritual goals. For general well-being, 5 Mukhi is recommended for everyone. For specific purposes like wealth (7 Mukhi), relationships (2 Mukhi), or spiritual growth (1 Mukhi), choose accordingly. Higher Mukhi beads (13-21) are extremely rare and powerful for advanced spiritual practices. Consult our astrologers for personalized recommendations based on your birth chart and spiritual goals.`
    },
    {
      question: "What is the difference between Nepal and Indonesian Rudraksha?",
      answer: `Nepal Rudraksha are considered superior due to their natural formation in the Himalayan region. They have deeper mukhi lines, better defined faces, and stronger spiritual vibrations. Indonesian Rudraksha are more commonly available but have lighter mukhi lines. Nepal Rudraksha are preferred for serious spiritual practice and astrological remedies due to their higher potency and authenticity.`
    },
    {
      question: "How should I wear Rudraksha beads?",
      answer: `Rudraksha should be worn after proper energization and purification. Wear it on Monday morning after taking a bath. It can be worn as a pendant, bracelet, or mala. Always wear it with devotion and maintain its sanctity. Remove during impure activities and keep it clean. For higher Mukhi beads (above 12), special care and proper guidance is recommended.`
    },
    {
      question: "What mantras should I chant with different Mukhi Rudraksha?",
      answer: `Each Mukhi has specific mantras for maximum benefits. Generally, "Om Namah Shivaya" works for all Rudraksha. Specific mantras include: 1 Mukhi - "Om Hreem Namah", 5 Mukhi - "Om Hreem Namah", 8 Mukhi - "Om Gam Ganapataye Namah", 21 Mukhi - "Om Yakshaya Kuberaya..." (full Kubera mantra). Chant at least 108 times daily for maximum benefits.`
    },
    {
      question: "How can I verify the authenticity of rare Mukhi Rudraksha?",
      answer: `Authentic high Mukhi Rudraksha (13-21) are extremely rare and expensive. Verification includes: X-ray testing to confirm natural mukhi formation, density test (should sink in water), microscopic examination of mukhi lines, and certificates from recognized gemological institutes. We provide comprehensive authentication for all rare varieties with detailed reports and spiritual guidance.`
    },
    {
      question: "What is the significance of wearing multiple Mukhi together?",
      answer: `Wearing multiple Mukhi Rudraksha can enhance overall benefits, but should be done with proper guidance. Common combinations include: 1+12+19 Mukhi for spiritual leadership, 5+7+9 Mukhi for general prosperity and protection, 2+6+13 Mukhi for relationships and attraction. Higher combinations with rare Mukhi should only be worn after consultation with spiritual experts.`
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFilteredRudraksha(rudrakshaData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = rudrakshaData;

    if (filters.mukhiCount !== 'all') {
      filtered = filtered.filter(item => item.mukhiCount.toString() === filters.mukhiCount);
    }
    if (filters.size !== 'all') {
      filtered = filtered.filter(item => item.size === filters.size);
    }
    if (filters.origin !== 'all') {
      filtered = filtered.filter(item => item.origin === filters.origin);
    }
    if (filters.purpose !== 'all') {
      filtered = filtered.filter(item => item.purpose === filters.purpose);
    }

    setFilteredRudraksha(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
                <Icon name="Circle" size={24} color="#F59E0B" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-cinzel font-bold text-text-primary">
                Sacred Rudraksha
              </h1>
            </div>
            
            <p className="text-xl text-text-secondary font-poppins max-w-3xl mx-auto mb-8">
              Discover authentic Rudraksha beads from 1 Mukhi to 21 Mukhi, blessed by divine energies. 
              Each bead carries the power to transform your spiritual journey and bring divine blessings.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-poppins">
              <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-full">
                <Icon name="Shield" size={16} color="#10B981" />
                <span className="text-text-tertiary">Certified Authentic</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-full">
                <Icon name="MapPin" size={16} color="#10B981" />
                <span className="text-text-tertiary">Nepal Origin</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-full">
                <Icon name="Sparkles" size={16} color="#10B981" />
                <span className="text-text-tertiary">Energized & Blessed</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-full">
                <Icon name="Crown" size={16} color="#10B981" />
                <span className="text-text-tertiary">Complete 1-21 Mukhi Collection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-cinzel font-bold text-text-primary mb-6">
                The Sacred Science of Rudraksha
              </h2>
              <div className="space-y-4 text-text-secondary font-poppins">
                <p>
                  Rudraksha beads are sacred seeds from the Elaeocarpus ganitrus tree, primarily found in Nepal and Indonesia. 
                  In Sanskrit, "Rudraksha" means "tears of Rudra (Lord Shiva)," making these beads deeply revered in Hindu tradition.
                </p>
                <p>
                  Each Rudraksha bead has natural segments called "Mukhi" (faces), ranging from 1 to 21. The number of Mukhi 
                  determines the bead's spiritual properties and the specific deity it represents, offering unique benefits for 
                  health, wealth, relationships, and spiritual growth.
                </p>
                <p>
                  Higher Mukhi beads (13-21) are extremely rare and powerful, often taking decades to find authentic specimens. 
                  These rare varieties carry immense spiritual significance and are treasured by advanced practitioners and collectors worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden cosmic-shadow-lg">
                <Image
                  src="/rudraksha/rudraksha-tree.jpg"
                  alt="Sacred Rudraksha Tree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow animate-float">
                <Icon name="Sparkles" size={32} color="#F59E0B" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterSection filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* Rudraksha Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-cinzel font-bold text-text-primary mb-4">
              Complete Mukhi Collection (1-21)
            </h2>
            <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
              Explore our comprehensive collection of authentic Rudraksha beads from 1 Mukhi to 21 Mukhi, 
              each carrying unique spiritual significance and divine blessings.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(21)].map((_, i) => (
                <div key={i} className="bg-surface/50 rounded-2xl p-6 animate-pulse">
                  <div className="aspect-square bg-surface-600 rounded-xl mb-4"></div>
                  <div className="h-4 bg-surface-600 rounded mb-2"></div>
                  <div className="h-3 bg-surface-600 rounded mb-4 w-3/4"></div>
                  <div className="h-8 bg-surface-600 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredRudraksha.map((rudraksha, index) => (
                <motion.div
                  key={rudraksha.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RudrakshaCard rudraksha={rudraksha} />
                </motion.div>
              ))}
            </div>
          )}

          {filteredRudraksha.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-surface/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} color="#94A3B8" />
              </div>
              <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-2">
                No Rudraksha Found
              </h3>
              <p className="text-text-secondary font-poppins mb-6">
                Try adjusting your filters to find the perfect Rudraksha for your spiritual journey.
              </p>
              <button
                onClick={() => setFilters({ mukhiCount: 'all', size: 'all', origin: 'all', purpose: 'all' })}
                className="px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Special Varieties */}
      <SpecialVarieties specialVarieties={specialVarieties} />

      {/* FAQ Section */}
      <FAQSection faqData={faqData} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 cosmic-glow">
              <Icon name="MessageCircle" size={32} color="#F59E0B" />
            </div>
            <h2 className="text-3xl font-cinzel font-bold text-text-primary mb-4">
              Need Guidance Choosing Your Rudraksha?
            </h2>
            <p className="text-xl text-text-secondary font-poppins mb-8">
              Our expert astrologers can help you select the perfect Rudraksha from our complete 1-21 Mukhi collection 
              based on your birth chart, spiritual goals, and specific requirements.
            </p>
            <button className="px-8 py-4 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
              Get Personalized Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RudrakshaCategory;