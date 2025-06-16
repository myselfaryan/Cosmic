import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import GemViewer3D from './components/GemViewer3D';
import CertificateGallery from './components/CertificateGallery';
import RelatedGemsCarousel from './components/RelatedGemsCarousel';
import PricingSection from './components/PricingSection';

const IndividualGemProduct = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [gemData, setGemData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Complete gem database
  const allGemstones = {
    'alexandrite': {
      id: 'alexandrite',
      name: 'Alexandrite',
      sanskritName: 'Vaidurya',
      category: 'Semi-Precious Stone',
      rulingPlanet: 'Mercury (Budh)',
      chakra: 'Heart Chakra',
      zodiacSigns: ['Gemini', 'Virgo'],
      weight: '3.25 Carats',
      origin: 'Russia',
      treatment: 'Natural',
      clarity: 'VS1',
      cut: 'Oval',
      color: 'Color-changing Green to Red',
      certification: 'GIA Certified',
      price: 85000,
      originalPrice: 95000,
      discount: 11,
      rating: 4.8,
      reviews: 89,
      inStock: true,
      stockCount: 2,
      images: [
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop'
      ],
      description: `This magnificent Alexandrite represents one of nature's most extraordinary phenomena - a gemstone that changes color from green in daylight to red under incandescent light. Known as the "emerald by day, ruby by night," this rare chrysoberyl variety was first discovered in Russia's Ural Mountains and named after Czar Alexander II.

This exceptional specimen showcases the coveted color-change effect that makes Alexandrite one of the world's most prized gemstones. The transformation from vibrant green to purplish-red creates a mesmerizing display that has captivated gem enthusiasts for over 150 years.`,
      
      astrologicalSignificance: `Alexandrite is associated with Mercury (Budh) in Vedic astrology, representing transformation, adaptability, and balance. It strengthens Mercury's positive influences in one's horoscope, bringing:

• Enhanced adaptability and flexibility in life situations
• Improved communication and intellectual abilities
• Balance between logic and intuition
• Success in fields requiring quick thinking and adaptability
• Protection during times of change and transformation
• Increased creativity and artistic expression`,

      spiritualBenefits: `The color-changing properties of Alexandrite symbolize spiritual transformation and growth:

• Facilitates spiritual transformation and evolution
• Enhances intuition and psychic abilities
• Promotes balance between physical and spiritual realms
• Aids in meditation and spiritual practices
• Encourages self-discovery and personal growth
• Provides protection during spiritual journeys`,

      healingProperties: `Traditional healing systems attribute numerous therapeutic benefits to Alexandrite:

• Supports nervous system health and function
• Aids in recovery from chronic fatigue
• Promotes emotional balance and stability
• Enhances creativity and mental flexibility
• Supports liver and pancreas function
• Helps with stress-related disorders`,

      wearingInstructions: `For maximum astrological and spiritual benefits, follow these traditional guidelines:

**Best Day to Wear:** Wednesday (Mercury's day)
**Best Time:** Early morning during sunrise
**Finger:** Little finger of right hand
**Metal:** White gold, platinum, or silver
**Weight:** Minimum 2 carats for astrological effects
**Mantra:** "Om Budhaya Namaha" (108 times before wearing)

**Purification Ritual:**
1. Soak in clean water with rock salt overnight
2. Rinse with fresh water and milk
3. Dry with clean cloth
4. Energize under natural light for 2-3 hours`,

      careGuidelines: `Proper care ensures your Alexandrite maintains its beauty and energy:

**Daily Care:**
• Remove before heavy physical activity or sports
• Store separately in soft cloth or jewelry box
• Avoid exposure to harsh chemicals and extreme heat

**Cleaning:**
• Clean weekly with soft brush and mild soap solution
• Rinse thoroughly with clean water
• Dry completely before storing
• Professional cleaning recommended monthly

**Energetic Maintenance:**
• Recharge under natural light weekly
• Cleanse with sage smoke or incense monthly
• Re-energize with mantras during new moon`,

      mythology: `Alexandrite holds a fascinating place in gemstone history and royal traditions:

Discovered in 1830 in Russia's Ural Mountains, Alexandrite was named after the future Czar Alexander II. The gemstone's red and green colors matched the Russian imperial colors, making it a symbol of imperial Russia.

Legend tells that Alexandrite brings good fortune to its wearer, especially during times of change. Russian nobility believed the stone could predict the future - if it appeared more green, peaceful times lay ahead; if more red, turbulent times were coming.

The rarity of fine Alexandrite has made it more valuable than diamonds in many cases. The phrase "Alexandrite is rarer than diamonds" reflects its extraordinary scarcity and the difficulty in finding specimens with strong color change.`,

      certificates: [
        {
          id: 1,
          type: 'GIA Certificate',
          number: 'GIA-2185749632',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=800&fit=crop',
          details: 'Gemological Institute of America certification confirming natural origin and color-change properties'
        },
        {
          id: 2,
          type: 'Authenticity Certificate',
          number: 'AUTH-ALX-2024-001',
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop',
          details: 'Certificate of authenticity from certified gemologist with detailed color-change analysis'
        }
      ]
    },
    'blue-sapphire': {
      id: 'blue-sapphire',
      name: 'Blue Sapphire',
      sanskritName: 'Neelam',
      category: 'Precious Stone',
      rulingPlanet: 'Saturn (Shani)',
      chakra: 'Throat Chakra',
      zodiacSigns: ['Capricorn', 'Aquarius'],
      weight: '4.15 Carats',
      origin: 'Kashmir',
      treatment: 'Heat Treated',
      clarity: 'VVS1',
      cut: 'Cushion',
      color: 'Royal Blue',
      certification: 'GIA Certified',
      price: 180000,
      originalPrice: 200000,
      discount: 10,
      rating: 4.9,
      reviews: 203,
      inStock: true,
      stockCount: 1,
      images: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800&h=800&fit=crop'
      ],
      description: `This magnificent Blue Sapphire represents the pinnacle of corundum perfection, sourced from the legendary mines of Kashmir. Known as "Neelam" in Sanskrit, this royal blue gemstone has been revered for millennia as the stone of wisdom, divine favor, and spiritual enlightenment.

The deep, velvety blue color of this Kashmir sapphire exhibits the coveted "cornflower blue" hue that has made Kashmir sapphires the most sought-after in the world. This exceptional specimen showcases the perfect balance of color saturation and clarity that defines the finest sapphires.`,
      
      astrologicalSignificance: `Blue Sapphire is the gemstone of Saturn (Shani) in Vedic astrology, representing discipline, wisdom, and spiritual growth. It strengthens Saturn's positive influences while mitigating negative effects:

• Enhanced wisdom and spiritual understanding
• Improved discipline and focus in life
• Protection from Saturn's malefic effects
• Success in careers requiring patience and perseverance
• Increased intuition and psychic abilities
• Recognition and respect from authority figures`,

      spiritualBenefits: `The Blue Sapphire's spiritual properties have been revered across cultures:

• Activates and balances the Throat Chakra
• Enhances meditation and spiritual practices
• Promotes truth and honest communication
• Provides protection during spiritual journeys
• Increases devotion and connection to divine wisdom
• Facilitates deep spiritual transformation`,

      healingProperties: `Traditional healing systems attribute numerous therapeutic benefits to Blue Sapphire:

• Improves mental clarity and focus
• Supports nervous system health
• Aids in treating depression and anxiety
• Enhances overall vitality and energy
• Supports thyroid and throat health
• Promotes restful sleep and peaceful dreams`,

      wearingInstructions: `For maximum astrological and spiritual benefits:

**Best Day to Wear:** Saturday (Saturn's day)
**Best Time:** Evening during sunset
**Finger:** Middle finger of right hand
**Metal:** Silver or white gold
**Weight:** Minimum 3 carats for astrological effects
**Mantra:** "Om Shanaye Namaha" (108 times before wearing)

**Purification Ritual:**
1. Soak in Ganga water or clean water overnight
2. Clean gently with soft brush
3. Energize under moonlight for one night
4. Wear after proper prayers to Saturn`,

      careGuidelines: `Blue Sapphire care instructions:

**Daily Care:**
• Remove during heavy physical work
• Store in separate compartment
• Avoid contact with chemicals

**Cleaning:**
• Clean with soft brush and mild soap
• Rinse with clean water
• Professional cleaning monthly

**Energetic Maintenance:**
• Recharge under moonlight weekly
• Cleanse with incense monthly
• Re-energize with Saturn mantras`,

      mythology: `Blue Sapphire holds sacred significance in ancient traditions:

In Hindu scriptures, Blue Sapphire is one of the Navaratna (nine sacred gems) representing Saturn's divine energy. Ancient texts describe it as a fragment of the cosmic blue that brings divine blessings and protection.

Persian rulers believed sapphires made the sky blue by reflecting their color. The stone was thought to attract divine favor and protect against envy and harm.

In medieval times, clergy wore sapphires to symbolize Heaven. The stone was believed to bring spiritual enlightenment and divine wisdom to its wearer.`,

      certificates: [
        {
          id: 1,
          type: 'GIA Certificate',
          number: 'GIA-5185749632',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=800&fit=crop',
          details: 'Gemological Institute of America certification confirming Kashmir origin and natural formation'
        },
        {
          id: 2,
          type: 'Kashmir Origin Certificate',
          number: 'KAS-BS-2024-001',
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop',
          details: 'Certificate confirming Kashmir origin with detailed geological analysis'
        }
      ]
    },
    'emerald': {
      id: 'emerald',
      name: 'Emerald',
      sanskritName: 'Panna',
      category: 'Precious Stone',
      rulingPlanet: 'Mercury (Budh)',
      chakra: 'Heart Chakra',
      zodiacSigns: ['Gemini', 'Virgo'],
      weight: '3.85 Carats',
      origin: 'Colombia',
      treatment: 'Oil Treated',
      clarity: 'VS2',
      cut: 'Emerald Cut',
      color: 'Vivid Green',
      certification: 'GIA Certified',
      price: 95000,
      originalPrice: 110000,
      discount: 14,
      rating: 4.7,
      reviews: 156,
      inStock: true,
      stockCount: 3,
      images: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop'
      ],
      description: `This exquisite Colombian Emerald represents the finest expression of beryl's green variety, sourced from the legendary mines of Colombia. Known as "Panna" in Sanskrit, this vibrant green gemstone has been treasured for over 4,000 years as the stone of wisdom, growth, and divine love.

The vivid green color of this Colombian emerald exhibits the coveted "grass green" hue with exceptional clarity and brilliance. This specimen showcases the perfect balance of color intensity and transparency that defines the world's finest emeralds.`,
      
      astrologicalSignificance: `Emerald is the gemstone of Mercury (Budh) in Vedic astrology, representing intelligence, communication, and business acumen:

• Enhanced communication and speaking abilities
• Improved memory and learning capacity
• Success in business and trade
• Better relationships and social connections
• Increased creativity and artistic expression
• Protection from Mercury's negative influences`,

      spiritualBenefits: `Emerald's spiritual properties promote growth and wisdom:

• Activates and balances the Heart Chakra
• Enhances love and compassion
• Promotes emotional healing and growth
• Increases intuition and psychic abilities
• Facilitates connection with nature spirits
• Supports spiritual evolution and wisdom`,

      healingProperties: `Traditional healing benefits of Emerald:

• Improves eyesight and vision
• Supports heart and circulatory system
• Aids in recovery from illness
• Enhances memory and mental clarity
• Supports liver and kidney function
• Promotes overall vitality and well-being`,

      wearingInstructions: `For maximum benefits:

**Best Day to Wear:** Wednesday (Mercury's day)
**Best Time:** Morning after sunrise
**Finger:** Little finger of right hand
**Metal:** Gold or Panchdhatu
**Weight:** Minimum 3 carats
**Mantra:** "Om Budhaya Namaha" (108 times)

**Purification:**
1. Soak in clean water overnight
2. Clean with soft brush
3. Energize under morning sunlight
4. Wear after Mercury prayers`,

      careGuidelines: `Emerald requires special care due to its natural inclusions:

**Daily Care:**
• Handle gently due to natural fractures
• Remove before physical activities
• Store separately from harder gems

**Cleaning:**
• Use only mild soap and soft brush
• Avoid ultrasonic cleaners
• Professional cleaning recommended

**Energetic Care:**
• Recharge under gentle sunlight
• Cleanse with sage smoke
• Re-energize with Mercury mantras`,

      mythology: `Emerald's rich history spans ancient civilizations:

Cleopatra was famous for her love of emeralds and claimed ownership of all emerald mines in Egypt. She often wore emeralds as symbols of eternal youth and beauty.

Ancient Incas and Aztecs considered emeralds sacred, believing they were tears of the gods. They used emeralds in religious ceremonies and buried them with the dead.

In Hindu tradition, emerald is mentioned in ancient texts as a stone that brings prosperity and protects against evil. It was believed to enhance the wearer's intelligence and memory.`,

      certificates: [
        {
          id: 1,
          type: 'GIA Certificate',
          number: 'GIA-3185749632',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=800&fit=crop',
          details: 'Gemological Institute of America certification confirming Colombian origin and natural formation'
        },
        {
          id: 2,
          type: 'Colombian Origin Certificate',
          number: 'COL-EM-2024-001',
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop',
          details: 'Certificate confirming Colombian origin with detailed treatment analysis'
        }
      ]
    },
    'natural-ruby': {
      id: 'natural-ruby',
      name: 'Natural Ruby',
      sanskritName: 'Manikya',
      category: 'Precious Stone',
      rulingPlanet: 'Sun (Surya)',
      chakra: 'Heart Chakra',
      zodiacSigns: ['Leo', 'Aries', 'Sagittarius'],
      weight: '3.25 Carats',
      origin: 'Burma (Myanmar)',
      treatment: 'Heat Treated',
      clarity: 'VS1',
      cut: 'Oval',
      color: 'Pigeon Blood Red',
      certification: 'GIA Certified',
      price: 125000,
      originalPrice: 150000,
      discount: 17,
      rating: 4.8,
      reviews: 156,
      inStock: true,
      stockCount: 3,
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop'
      ],
      description: `This exquisite Natural Ruby represents the pinnacle of gemstone perfection, sourced from the legendary mines of Burma. Known as the "King of Gems," this ruby exhibits the coveted pigeon blood red color that has captivated royalty and spiritual seekers for millennia.

The ruby's intense red hue symbolizes passion, protection, and prosperity. In Vedic astrology, it is the primary gemstone for the Sun, enhancing leadership qualities, confidence, and spiritual power. This particular specimen showcases exceptional clarity and brilliance, making it ideal for both astrological purposes and fine jewelry.`,
      
      astrologicalSignificance: `Ruby is the gemstone of the Sun (Surya) in Vedic astrology, representing authority, leadership, and divine power. It strengthens the Sun's positive influences in one's horoscope, bringing:

• Enhanced leadership abilities and confidence
• Protection from negative energies and evil eye
• Improved relationships with authority figures
• Increased vitality and life force energy
• Success in government and administrative roles
• Recognition and fame in chosen field`,

      spiritualBenefits: `The ruby's spiritual properties have been revered across cultures for thousands of years:

• Activates and balances the Heart Chakra
• Enhances meditation and spiritual awareness
• Provides protection during spiritual practices
• Increases devotion and connection to divine energy
• Promotes courage in spiritual growth
• Amplifies positive intentions and manifestations`,

      healingProperties: `Traditional healing systems attribute numerous therapeutic benefits to ruby:

• Improves blood circulation and heart health
• Enhances vitality and physical strength
• Supports recovery from chronic fatigue
• Balances blood pressure naturally
• Strengthens immune system function
• Promotes healthy sleep patterns`,

      wearingInstructions: `For maximum astrological and spiritual benefits, follow these traditional guidelines:

**Best Day to Wear:** Sunday (Sun's day)
**Best Time:** Early morning during sunrise
**Finger:** Ring finger of right hand
**Metal:** Gold or Panchdhatu (five-metal alloy)
**Weight:** Minimum 3 carats for astrological effects
**Mantra:** "Om Suryaya Namaha" (108 times before wearing)

**Purification Ritual:**
1. Soak in Ganga water or clean water with rock salt overnight
2. Rinse with fresh water and milk
3. Dry with clean cloth
4. Energize under sunlight for 2-3 hours`,

      careGuidelines: `Proper care ensures your ruby maintains its beauty and energy:

**Daily Care:**
• Remove before bathing, swimming, or heavy physical activity
• Store separately in soft cloth or jewelry box
• Avoid contact with chemicals, perfumes, and cosmetics

**Cleaning:**
• Clean weekly with soft brush and mild soap solution
• Rinse thoroughly with clean water
• Dry completely before storing
• Professional cleaning recommended monthly

**Energetic Maintenance:**
• Recharge under sunlight weekly
• Cleanse with sage smoke or incense monthly
• Re-energize with mantras during full moon`,

      mythology: `Ruby holds a sacred place in ancient texts and royal traditions:

In Hindu scriptures, ruby is mentioned as one of the nine sacred gems (Navaratna) representing the Sun's divine energy. Ancient Sanskrit texts describe ruby as a fragment of the cosmic fire that brings divine blessings to its wearer.

Burmese legends tell of warriors who embedded rubies in their skin for invincibility in battle. The gem was believed to warn its owner of impending danger by changing color.

In medieval Europe, ruby was considered the most precious of all gems, often valued higher than diamonds. Kings and queens wore rubies as symbols of divine right and protection.`,

      certificates: [
        {
          id: 1,
          type: 'GIA Certificate',
          number: 'GIA-2185749632',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=800&fit=crop',
          details: 'Gemological Institute of America certification confirming natural origin and treatment details'
        },
        {
          id: 2,
          type: 'Authenticity Certificate',
          number: 'AUTH-RB-2024-001',
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop',
          details: 'Certificate of authenticity from certified gemologist with detailed specifications'
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'astrological', label: 'Astrological', icon: 'Star' },
    { id: 'spiritual', label: 'Spiritual', icon: 'Sparkles' },
    { id: 'healing', label: 'Healing', icon: 'Heart' },
    { id: 'wearing', label: 'How to Wear', icon: 'User' },
    { id: 'care', label: 'Care Guide', icon: 'Shield' },
    { id: 'mythology', label: 'Mythology', icon: 'Book' }
  ];

  useEffect(() => {
    // Get gem ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gemId = urlParams.get('id');
    const gemName = urlParams.get('name');
    
    // Find the gem data based on ID or name
    let selectedGem = null;
    
    if (gemId && allGemstones[gemId]) {
      selectedGem = allGemstones[gemId];
    } else if (gemName) {
      // Try to find by name if ID doesn't match
      const nameKey = gemName.toLowerCase().replace(/\s+/g, '-');
      selectedGem = allGemstones[nameKey] || Object.values(allGemstones).find(gem => 
        gem.name.toLowerCase().replace(/\s+/g, '-') === nameKey
      );
    }
    
    // Default to Natural Ruby if no specific gem found
    if (!selectedGem) {
      selectedGem = allGemstones['natural-ruby'];
    }
    
    setGemData(selectedGem);
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppInquiry = () => {
    if (!gemData) return;
    
    const message = `Hi! I'm interested in the ${gemData.name} (${gemData.weight}) priced at ₹${gemData.price.toLocaleString('en-IN')}. Can you provide more details about authenticity, shipping, and astrological consultation?`;
    const phoneNumber = '+919876543210';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (loading || !gemData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow animate-spin mx-auto mb-4">
              <Icon name="Gem" size={32} color="#F59E0B" />
            </div>
            <p className="text-text-secondary font-poppins">Loading gemstone details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
          
          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* 3D Viewer & Images */}
            <div className="space-y-6">
              <div className="relative">
                <GemViewer3D gemData={gemData} />
                
                {/* Stock Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    gemData.inStock 
                      ? 'bg-success/20 text-success border border-success/30' :'bg-error/20 text-error border border-error/30'
                  }`}>
                    {gemData.inStock ? `In Stock (${gemData.stockCount} left)` : 'Out of Stock'}
                  </div>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={toggleWishlist}
                  className="absolute top-4 right-4 z-10 p-2 bg-surface/80 backdrop-blur-sm rounded-full hover:bg-surface transition-colors duration-200"
                >
                  <Icon 
                    name={isWishlisted ? 'Heart' : 'Heart'} 
                    size={20} 
                    className={isWishlisted ? 'text-error fill-current' : 'text-text-secondary'} 
                  />
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {gemData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-primary cosmic-glow' :'border-surface-600 hover:border-surface-500'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${gemData.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Title & Rating */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-cinzel font-bold text-text-primary mb-2">
                  {gemData.name}
                </h1>
                <p className="text-lg text-accent font-medium mb-4">
                  {gemData.sanskritName} • {gemData.category}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(gemData.rating) ? 'text-accent fill-current' : 'text-surface-400'}
                      />
                    ))}
                    <span className="text-sm text-text-secondary ml-2">
                      {gemData.rating} ({gemData.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Properties */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Sun" size={18} className="text-accent" />
                    <span className="text-sm text-text-secondary">Ruling Planet</span>
                  </div>
                  <p className="font-medium text-text-primary">{gemData.rulingPlanet}</p>
                </div>
                
                <div className="bg-surface/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Circle" size={18} className="text-accent" />
                    <span className="text-sm text-text-secondary">Chakra</span>
                  </div>
                  <p className="font-medium text-text-primary">{gemData.chakra}</p>
                </div>
                
                <div className="bg-surface/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Scale" size={18} className="text-accent" />
                    <span className="text-sm text-text-secondary">Weight</span>
                  </div>
                  <p className="font-medium text-text-primary">{gemData.weight}</p>
                </div>
                
                <div className="bg-surface/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={18} className="text-accent" />
                    <span className="text-sm text-text-secondary">Origin</span>
                  </div>
                  <p className="font-medium text-text-primary">{gemData.origin}</p>
                </div>
              </div>

              {/* Pricing */}
              <PricingSection gemData={gemData} />

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-success hover:bg-success-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 cosmic-shadow-lg"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Inquire on WhatsApp</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
                  <Icon name="ShoppingCart" size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-surface-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Certified Authentic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="RotateCcw" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">7-Day Return</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="mb-12">
            {/* Tab Navigation */}
            <div className="border-b border-surface-600 mb-8">
              <div className="flex space-x-0 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:border-surface-500'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                      About This {gemData.name}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {gemData.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface/30 rounded-lg p-6">
                      <h4 className="font-semibold text-text-primary mb-4">Physical Properties</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Clarity:</span>
                          <span className="text-text-primary font-medium">{gemData.clarity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Cut:</span>
                          <span className="text-text-primary font-medium">{gemData.cut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Color:</span>
                          <span className="text-text-primary font-medium">{gemData.color}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Treatment:</span>
                          <span className="text-text-primary font-medium">{gemData.treatment}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-surface/30 rounded-lg p-6">
                      <h4 className="font-semibold text-text-primary mb-4">Astrological Details</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="text-text-secondary">Zodiac Signs:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {gemData.zodiacSigns.map((sign) => (
                              <span key={sign} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                                {sign}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Certification:</span>
                          <span className="text-text-primary font-medium">{gemData.certification}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'astrological' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    Astrological Significance
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.astrologicalSignificance}
                  </div>
                </div>
              )}

              {activeTab === 'spiritual' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    Spiritual Benefits
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.spiritualBenefits}
                  </div>
                </div>
              )}

              {activeTab === 'healing' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    Healing Properties
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.healingProperties}
                  </div>
                </div>
              )}

              {activeTab === 'wearing' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    How to Wear
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.wearingInstructions}
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    Care Guidelines
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.careGuidelines}
                  </div>
                </div>
              )}

              {activeTab === 'mythology' && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-4">
                    Mythology & History
                  </h3>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {gemData.mythology}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Certificates */}
          <CertificateGallery certificates={gemData.certificates} />

          {/* Related Gems */}
          <RelatedGemsCarousel currentGem={gemData} />
        </div>
      </main>
    </div>
  );
};

export default IndividualGemProduct;