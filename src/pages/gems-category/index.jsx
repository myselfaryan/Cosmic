import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import Icon from '../../components/AppIcon';

import CategoryCard from './components/CategoryCard';
import FilterPanel from './components/FilterPanel';
import GemCard from './components/GemCard';
import EducationalSidebar from './components/EducationalSidebar';

const GemsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    planet: 'all',
    purpose: 'all',
    color: 'all',
    priceRange: 'all'
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);

  const gemCategories = [
    {
      id: 'birth-stones',
      name: 'Birth Stones',
      description: 'Traditional birthstones for each month with astrological significance',
      icon: 'Calendar',
      count: 18,
      color: 'from-primary-500 to-primary-700',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop'
    },
    {
      id: 'exclusive-collection',
      name: 'Exclusive Collection',
      description: 'Premium quality gemstones from renowned origins worldwide',
      icon: 'Crown',
      count: 14,
      color: 'from-accent-500 to-accent-700',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: 'vedic-gems',
      name: 'Vedic Gems',
      description: 'Sacred stones mentioned in ancient Vedic texts for spiritual healing',
      icon: 'Star',
      count: 9,
      color: 'from-secondary-500 to-secondary-700',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
    },
    {
      id: 'precious',
      name: 'Precious Stones',
      description: 'The four traditional precious gemstones: Diamond, Ruby, Sapphire, Emerald',
      icon: 'Diamond',
      count: 12,
      color: 'from-success-500 to-success-700',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    }
  ];

  const allGemstones = [
    // Birth Stones
    {
      id: 'alexandrite',
      name: 'Alexandrite',
      category: 'birth-stones',
      price: 85000,
      originalPrice: 95000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Color-changing gemstone for transformation and balance',
      benefits: ['Enhances intuition', 'Promotes balance', 'Aids transformation']
    },
    {
      id: 'blue-sapphire',
      name: 'Blue Sapphire',
      category: 'birth-stones',
      price: 45000,
      originalPrice: 50000,
      planet: 'saturn',
      purpose: 'wisdom',
      color: 'blue',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Brings wisdom and spiritual growth',
      benefits: ['Enhances wisdom', 'Spiritual growth', 'Mental clarity']
    },
    {
      id: 'emerald',
      name: 'Emerald',
      category: 'birth-stones',
      price: 35000,
      originalPrice: 40000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Improves communication and intellect',
      benefits: ['Better communication', 'Enhanced intellect', 'Business success']
    },
    {
      id: 'gomed',
      name: 'Gomed (Hessonite)',
      category: 'birth-stones',
      price: 12000,
      originalPrice: 15000,
      planet: 'rahu',
      purpose: 'protection',
      color: 'orange',
      rating: 4.5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Protects from Rahu\'s negative effects',
      benefits: ['Rahu remedies', 'Mental peace', 'Spiritual protection']
    },
    {
      id: 'lehsunia',
      name: 'Lehsunia (Cat\'s Eye)',
      category: 'birth-stones',
      price: 28000,
      originalPrice: 32000,
      planet: 'ketu',
      purpose: 'spirituality',
      color: 'yellow',
      rating: 4.6,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances spiritual awareness and intuition',
      benefits: ['Ketu remedies', 'Spiritual growth', 'Intuition']
    },
    {
      id: 'manik',
      name: 'Manik (Ruby)',
      category: 'birth-stones',
      price: 125000,
      originalPrice: 150000,
      planet: 'sun',
      purpose: 'leadership',
      color: 'red',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Enhances leadership and confidence',
      benefits: ['Boosts confidence', 'Improves leadership', 'Attracts success']
    },
    {
      id: 'moonga',
      name: 'Moonga (Red Coral)',
      category: 'birth-stones',
      price: 8500,
      originalPrice: 10000,
      planet: 'mars',
      purpose: 'energy',
      color: 'red',
      rating: 4.4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Boosts energy and courage',
      benefits: ['Increases energy', 'Enhances courage', 'Mars remedies']
    },
    {
      id: 'opal',
      name: 'Opal',
      category: 'birth-stones',
      price: 15000,
      originalPrice: 18000,
      planet: 'venus',
      purpose: 'love',
      color: 'white',
      rating: 4.3,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances creativity and emotional expression',
      benefits: ['Boosts creativity', 'Emotional healing', 'Artistic abilities']
    },
    {
      id: 'padparadscha',
      name: 'Padparadscha Sapphire',
      category: 'birth-stones',
      price: 95000,
      originalPrice: 110000,
      planet: 'jupiter',
      purpose: 'wisdom',
      color: 'pink',
      rating: 4.9,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Rare lotus-colored sapphire for spiritual wisdom',
      benefits: ['Spiritual wisdom', 'Divine connection', 'Inner peace']
    },
    {
      id: 'pearl',
      name: 'Pearl (Moti)',
      category: 'birth-stones',
      price: 6500,
      originalPrice: 8000,
      planet: 'moon',
      purpose: 'peace',
      color: 'white',
      rating: 4.5,
      reviews: 187,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Brings mental peace and emotional stability',
      benefits: ['Mental peace', 'Emotional balance', 'Moon remedies']
    },
    {
      id: 'pink-sapphire',
      name: 'Pink Sapphire',
      category: 'birth-stones',
      price: 55000,
      originalPrice: 65000,
      planet: 'venus',
      purpose: 'love',
      color: 'pink',
      rating: 4.7,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances love and compassion',
      benefits: ['Attracts love', 'Enhances compassion', 'Heart healing']
    },
    {
      id: 'pitambari',
      name: 'Pitambari Neelam',
      category: 'birth-stones',
      price: 75000,
      originalPrice: 85000,
      planet: 'saturn',
      purpose: 'wisdom',
      color: 'yellow',
      rating: 4.8,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Rare yellow-blue sapphire for dual planetary benefits',
      benefits: ['Saturn-Jupiter benefits', 'Wisdom', 'Prosperity']
    },
    {
      id: 'purple-sapphire',
      name: 'Purple Sapphire',
      category: 'birth-stones',
      price: 48000,
      originalPrice: 55000,
      planet: 'saturn',
      purpose: 'spirituality',
      color: 'purple',
      rating: 4.6,
      reviews: 43,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances spiritual awareness and meditation',
      benefits: ['Spiritual growth', 'Meditation aid', 'Psychic abilities']
    },
    {
      id: 'spinel',
      name: 'Spinel',
      category: 'birth-stones',
      price: 32000,
      originalPrice: 38000,
      planet: 'sun',
      purpose: 'energy',
      color: 'red',
      rating: 4.5,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Revitalizes energy and enhances passion',
      benefits: ['Boosts energy', 'Enhances passion', 'Vitality']
    },
    {
      id: 'white-coral',
      name: 'White Coral',
      category: 'birth-stones',
      price: 5500,
      originalPrice: 7000,
      planet: 'mars',
      purpose: 'peace',
      color: 'white',
      rating: 4.3,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Brings peace while maintaining Mars energy',
      benefits: ['Peaceful energy', 'Mars balance', 'Emotional stability']
    },
    {
      id: 'white-sapphire',
      name: 'White Sapphire',
      category: 'birth-stones',
      price: 25000,
      originalPrice: 30000,
      planet: 'venus',
      purpose: 'prosperity',
      color: 'white',
      rating: 4.4,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Diamond substitute for Venus benefits',
      benefits: ['Venus remedies', 'Prosperity', 'Luxury']
    },
    {
      id: 'yellow-sapphire',
      name: 'Yellow Sapphire (Pukhraj)',
      category: 'birth-stones',
      price: 42000,
      originalPrice: 48000,
      planet: 'jupiter',
      purpose: 'prosperity',
      color: 'yellow',
      rating: 4.7,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Brings prosperity and good fortune',
      benefits: ['Financial growth', 'Good fortune', 'Jupiter blessings']
    },
    {
      id: 'zircon',
      name: 'Zircon',
      category: 'birth-stones',
      price: 18000,
      originalPrice: 22000,
      planet: 'venus',
      purpose: 'prosperity',
      color: 'blue',
      rating: 4.2,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Diamond substitute with Venus benefits',
      benefits: ['Venus remedies', 'Prosperity', 'Beauty enhancement']
    },

    // Exclusive Collection
    {
      id: 'basra',
      name: 'Basra Pearl',
      category: 'exclusive-collection',
      price: 150000,
      originalPrice: 180000,
      planet: 'moon',
      purpose: 'peace',
      color: 'white',
      rating: 4.9,
      reviews: 23,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Rare natural pearl from Persian Gulf',
      benefits: ['Supreme moon benefits', 'Mental peace', 'Emotional healing']
    },
    {
      id: 'bicolor',
      name: 'Bicolor Tourmaline',
      category: 'exclusive-collection',
      price: 35000,
      originalPrice: 42000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.6,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Balances dual energies and enhances communication',
      benefits: ['Balance', 'Communication', 'Harmony']
    },
    {
      id: 'burma',
      name: 'Burma Ruby',
      category: 'exclusive-collection',
      price: 185000,
      originalPrice: 220000,
      planet: 'sun',
      purpose: 'leadership',
      color: 'red',
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Finest quality ruby from Myanmar',
      benefits: ['Supreme leadership', 'Royal power', 'Success']
    },
    {
      id: 'columbian',
      name: 'Colombian Emerald',
      category: 'exclusive-collection',
      price: 95000,
      originalPrice: 115000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Premium emerald from Colombian mines',
      benefits: ['Superior communication', 'Business success', 'Intellect']
    },
    {
      id: 'kashmir',
      name: 'Kashmir Sapphire',
      category: 'exclusive-collection',
      price: 250000,
      originalPrice: 300000,
      planet: 'saturn',
      purpose: 'wisdom',
      color: 'blue',
      rating: 5.0,
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'World\'s finest sapphire from Kashmir',
      benefits: ['Supreme wisdom', 'Spiritual elevation', 'Divine blessings']
    },
    {
      id: 'monga-premium',
      name: 'Premium Monga',
      category: 'exclusive-collection',
      price: 15000,
      originalPrice: 18000,
      planet: 'mars',
      purpose: 'energy',
      color: 'red',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-grade red coral for Mars energy',
      benefits: ['Enhanced courage', 'Physical strength', 'Mars power']
    },
    {
      id: 'moonstone',
      name: 'Rainbow Moonstone',
      category: 'exclusive-collection',
      price: 8500,
      originalPrice: 12000,
      planet: 'moon',
      purpose: 'peace',
      color: 'white',
      rating: 4.5,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances intuition and feminine energy',
      benefits: ['Intuition', 'Emotional balance', 'Feminine power']
    },
    {
      id: 'moti-premium',
      name: 'Premium Moti',
      category: 'exclusive-collection',
      price: 25000,
      originalPrice: 30000,
      planet: 'moon',
      purpose: 'peace',
      color: 'white',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-quality natural pearl for moon benefits',
      benefits: ['Mental peace', 'Emotional stability', 'Moon power']
    },
    {
      id: 'neelam-premium',
      name: 'Premium Neelam',
      category: 'exclusive-collection',
      price: 85000,
      originalPrice: 100000,
      planet: 'saturn',
      purpose: 'wisdom',
      color: 'blue',
      rating: 4.8,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-grade blue sapphire for Saturn',
      benefits: ['Wisdom', 'Discipline', 'Saturn blessings']
    },
    {
      id: 'panna-premium',
      name: 'Premium Panna',
      category: 'exclusive-collection',
      price: 65000,
      originalPrice: 75000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-quality emerald for Mercury',
      benefits: ['Communication', 'Business success', 'Mercury power']
    },
    {
      id: 'pukhraj-premium',
      name: 'Premium Pukhraj',
      category: 'exclusive-collection',
      price: 75000,
      originalPrice: 85000,
      planet: 'jupiter',
      purpose: 'prosperity',
      color: 'yellow',
      rating: 4.8,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-grade yellow sapphire for Jupiter',
      benefits: ['Prosperity', 'Wisdom', 'Jupiter blessings']
    },
    {
      id: 'ruby-premium',
      name: 'Premium Ruby',
      category: 'exclusive-collection',
      price: 165000,
      originalPrice: 195000,
      planet: 'sun',
      purpose: 'leadership',
      color: 'red',
      rating: 4.9,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
      isNew: true,
      isCertified: true,
      significance: 'Premium quality ruby for Sun energy',
      benefits: ['Leadership', 'Confidence', 'Sun power']
    },
    {
      id: 'sulemani',
      name: 'Sulemani Hakik',
      category: 'exclusive-collection',
      price: 3500,
      originalPrice: 5000,
      planet: 'saturn',
      purpose: 'protection',
      color: 'black',
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Protective black agate for spiritual shield',
      benefits: ['Protection', 'Grounding', 'Negative energy removal']
    },
    {
      id: 'zambian',
      name: 'Zambian Emerald',
      category: 'exclusive-collection',
      price: 45000,
      originalPrice: 55000,
      planet: 'mercury',
      purpose: 'communication',
      color: 'green',
      rating: 4.6,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'High-quality emerald from Zambian mines',
      benefits: ['Communication', 'Clarity', 'Mercury benefits']
    },

    // Vedic Gems
    {
      id: 'amethyst',
      name: 'Amethyst',
      category: 'vedic-gems',
      price: 8000,
      originalPrice: 10000,
      planet: 'jupiter',
      purpose: 'spirituality',
      color: 'purple',
      rating: 4.6,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances spiritual awareness',
      benefits: ['Spiritual growth', 'Peace of mind', 'Meditation aid']
    },
    {
      id: 'black-hakik',
      name: 'Black Hakik',
      category: 'vedic-gems',
      price: 2500,
      originalPrice: 3500,
      planet: 'saturn',
      purpose: 'protection',
      color: 'black',
      rating: 4.3,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Provides protection from negative energies',
      benefits: ['Protection', 'Grounding', 'Stability']
    },
    {
      id: 'blue-topaz',
      name: 'Blue Topaz',
      category: 'vedic-gems',
      price: 12000,
      originalPrice: 15000,
      planet: 'jupiter',
      purpose: 'communication',
      color: 'blue',
      rating: 4.5,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances communication and truth',
      benefits: ['Clear communication', 'Truth', 'Mental clarity']
    },
    {
      id: 'citrine',
      name: 'Citrine',
      category: 'vedic-gems',
      price: 6500,
      originalPrice: 8000,
      planet: 'jupiter',
      purpose: 'prosperity',
      color: 'yellow',
      rating: 4.4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Attracts wealth and abundance',
      benefits: ['Wealth attraction', 'Abundance', 'Positive energy']
    },
    {
      id: 'iolite',
      name: 'Iolite',
      category: 'vedic-gems',
      price: 8500,
      originalPrice: 11000,
      planet: 'saturn',
      purpose: 'spirituality',
      color: 'blue',
      rating: 4.3,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Enhances spiritual vision and intuition',
      benefits: ['Spiritual vision', 'Intuition', 'Inner guidance']
    },
    {
      id: 'moon-topaz',
      name: 'Moon Topaz',
      category: 'vedic-gems',
      price: 15000,
      originalPrice: 18000,
      planet: 'moon',
      purpose: 'peace',
      color: 'white',
      rating: 4.5,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Brings emotional balance and peace',
      benefits: ['Emotional balance', 'Peace', 'Moon energy']
    },
    {
      id: 'peridot',
      name: 'Peridot',
      category: 'vedic-gems',
      price: 9500,
      originalPrice: 12000,
      planet: 'mercury',
      purpose: 'healing',
      color: 'green',
      rating: 4.4,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Promotes healing and renewal',
      benefits: ['Healing', 'Renewal', 'Heart chakra']
    },
    {
      id: 'red-hakik',
      name: 'Red Hakik',
      category: 'vedic-gems',
      price: 3500,
      originalPrice: 4500,
      planet: 'mars',
      purpose: 'energy',
      color: 'red',
      rating: 4.2,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Boosts energy and courage',
      benefits: ['Energy boost', 'Courage', 'Vitality']
    },
    {
      id: 'turquoise',
      name: 'Turquoise',
      category: 'vedic-gems',
      price: 7500,
      originalPrice: 9500,
      planet: 'jupiter',
      purpose: 'protection',
      color: 'blue',
      rating: 4.3,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      isNew: false,
      isCertified: true,
      significance: 'Provides protection and wisdom',
      benefits: ['Protection', 'Wisdom', 'Communication']
    }
  ];

  const filterOptions = {
    planets: [
      { value: 'all', label: 'All Planets' },
      { value: 'sun', label: 'Sun (Surya)' },
      { value: 'moon', label: 'Moon (Chandra)' },
      { value: 'mars', label: 'Mars (Mangal)' },
      { value: 'mercury', label: 'Mercury (Budh)' },
      { value: 'jupiter', label: 'Jupiter (Guru)' },
      { value: 'venus', label: 'Venus (Shukra)' },
      { value: 'saturn', label: 'Saturn (Shani)' },
      { value: 'rahu', label: 'Rahu' },
      { value: 'ketu', label: 'Ketu' }
    ],
    purposes: [
      { value: 'all', label: 'All Purposes' },
      { value: 'leadership', label: 'Leadership' },
      { value: 'wisdom', label: 'Wisdom' },
      { value: 'communication', label: 'Communication' },
      { value: 'spirituality', label: 'Spirituality' },
      { value: 'love', label: 'Love & Relationships' },
      { value: 'prosperity', label: 'Prosperity' },
      { value: 'health', label: 'Health & Healing' },
      { value: 'protection', label: 'Protection' },
      { value: 'energy', label: 'Energy & Vitality' },
      { value: 'peace', label: 'Peace & Harmony' }
    ],
    colors: [
      { value: 'all', label: 'All Colors' },
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'purple', label: 'Purple' },
      { value: 'pink', label: 'Pink' },
      { value: 'white', label: 'White' },
      { value: 'black', label: 'Black' },
      { value: 'orange', label: 'Orange' }
    ],
    priceRanges: [
      { value: 'all', label: 'All Prices' },
      { value: '0-10000', label: 'Under ₹10,000' },
      { value: '10000-25000', label: '₹10,000 - ₹25,000' },
      { value: '25000-50000', label: '₹25,000 - ₹50,000' },
      { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
      { value: '100000+', label: 'Above ₹1,00,000' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredGems = allGemstones.filter(gem => {
    if (selectedCategory !== 'all' && gem.category !== selectedCategory) return false;
    if (filters.planet !== 'all' && gem.planet !== filters.planet) return false;
    if (filters.purpose !== 'all' && gem.purpose !== filters.purpose) return false;
    if (filters.color !== 'all' && gem.color !== filters.color) return false;
    
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(p => parseInt(p) || Infinity);
      if (gem.price < min || (max !== Infinity && gem.price > max)) return false;
    }
    
    return true;
  });

  const sortedGems = [...filteredGems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return b.reviews - a.reviews;
    }
  });

  const handleWhatsAppInquiry = (category = 'general') => {
    const messages = {
      general: 'Hi! I\'m interested in exploring your authentic gemstone collection. Can you guide me with recommendations?',
      'birth-stones': 'Hi! I\'m looking for birth stones. Can you help me choose the right one based on my birth month and astrological requirements?',
      'exclusive-collection': 'Hi! I\'m interested in your exclusive gemstone collection. Can you provide guidance on premium quality stones?',
      'vedic-gems': 'Hi! I\'m looking for Vedic gemstones for spiritual healing. Can you guide me with the selection?',
      precious: 'Hi! I\'m interested in precious gemstones. Can you help with proper recommendations and authenticity?'
    };
    
    const phoneNumber = '+919876543210';
    const message = encodeURIComponent(messages[category] || messages.general);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow animate-spin mx-auto mb-4">
              <Icon name="Gem" size={32} color="#F59E0B" />
            </div>
            <p className="text-text-secondary font-poppins">Loading authentic gemstones...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
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
          
          <div className="relative mx-4 lg:mx-6">
            <Breadcrumb />
            
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl lg:text-6xl font-cinzel font-bold text-text-primary mb-6">
                  Authentic
                  <span className="bg-gradient-cosmic bg-clip-text text-transparent"> Gemstones</span>
                </h1>
                <p className="text-lg lg:text-xl text-text-secondary font-poppins max-w-2xl mx-auto">
                  Discover our complete collection of certified gemstones including Birth Stones, Exclusive Collection, and Vedic Gems with astrological significance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-lg">
                  <Icon name="Shield" size={20} className="text-success" />
                  <span className="text-text-secondary font-poppins">Certified Authentic</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-lg">
                  <Icon name="Star" size={20} className="text-accent" />
                  <span className="text-text-secondary font-poppins">Astrologically Significant</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 rounded-lg">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <span className="text-text-secondary font-poppins">Secure Delivery</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-16 mx-4 lg:mx-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-4">
                Explore Categories
              </h2>
              <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
                Choose from our carefully curated collection of authentic gemstones, each with unique spiritual properties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {gemCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  onWhatsAppClick={() => handleWhatsAppInquiry(category.id)}
                  index={index}
                />
              ))}
            </div>

            {/* Show All Button */}
            <div className="text-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all' ?'bg-gradient-cosmic text-text-primary cosmic-glow' :'bg-surface text-text-secondary hover:bg-surface-600 hover:text-text-primary'
                }`}
              >
                View All Gemstones
              </button>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-16 mx-4 lg:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Desktop Filter Panel */}
              <div className="hidden lg:block lg:w-80 flex-shrink-0">
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  filterOptions={filterOptions}
                  resultCount={sortedGems.length}
                />
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Mobile Filter Button & Sort */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-surface rounded-lg text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="Filter" size={20} />
                    <span>Filters</span>
                    {Object.values(filters).some(f => f !== 'all') && (
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    )}
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-text-tertiary font-poppins text-sm">Sort by:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-surface border border-surface-600 rounded-lg px-3 py-2 text-text-secondary focus:outline-none focus:border-primary"
                      >
                        <option value="popularity">Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="newest">Newest First</option>
                      </select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          viewMode === 'grid' ? 'bg-primary text-text-primary' : 'text-text-tertiary hover:text-text-primary'
                        }`}
                      >
                        <Icon name="Grid3X3" size={20} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          viewMode === 'list' ? 'bg-primary text-text-primary' : 'text-text-tertiary hover:text-text-primary'
                        }`}
                      >
                        <Icon name="List" size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-text-secondary font-poppins">
                    Showing {sortedGems.length} of {allGemstones.length} gemstones
                    {selectedCategory !== 'all' && (
                      <span className="ml-2 px-2 py-1 bg-primary/20 text-primary rounded text-sm">
                        {gemCategories.find(c => c.id === selectedCategory)?.name}
                      </span>
                    )}
                  </p>
                </div>

                {/* Products Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
                }`}>
                  <AnimatePresence>
                    {sortedGems.map((gem, index) => (
                      <GemCard
                        key={gem.id}
                        gem={gem}
                        viewMode={viewMode}
                        index={index}
                        onWhatsAppClick={() => handleWhatsAppInquiry('general')}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {sortedGems.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-text-tertiary" />
                    </div>
                    <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-2">
                      No gemstones found
                    </h3>
                    <p className="text-text-secondary font-poppins mb-6">
                      Try adjusting your filters to see more results
                    </p>
                    <button
                      onClick={() => {
                        setFilters({
                          planet: 'all',
                          purpose: 'all',
                          color: 'all',
                          priceRange: 'all'
                        });
                        setSelectedCategory('all');
                      }}
                      className="px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop Educational Sidebar */}
              <div className="hidden xl:block xl:w-80 flex-shrink-0">
                <EducationalSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
            ></div>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-surface cosmic-shadow-lg overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary">
                    Filter Gemstones
                  </h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
                
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  filterOptions={filterOptions}
                  resultCount={sortedGems.length}
                  isMobile={true}
                  onClose={() => setIsMobileFilterOpen(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GemsCategory;