import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthenticitySection = ({ rudrakshaData }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(0);

  const certificates = [
    {
      id: 'lab-report',
      title: 'Laboratory Analysis Report',
      issuer: 'Gemological Institute of India',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=600&h=400&fit=crop',
      details: [
        'X-Ray Crystallography Analysis',
        'Mukhi Pattern Verification',
        'Density and Hardness Testing',
        'Origin Authentication'
      ]
    },
    {
      id: 'spiritual-certificate',
      title: 'Spiritual Authenticity Certificate',
      issuer: 'Vedic Research Foundation',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg?w=600&h=400&fit=crop',
      details: [
        'Vedic Compliance Verification',
        'Spiritual Energy Assessment',
        'Ritual Purification Confirmation',
        'Mantra Energization Record'
      ]
    },
    {
      id: 'origin-certificate',
      title: 'Origin & Source Certificate',
      issuer: 'Nepal Rudraksha Association',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?w=600&h=400&fit=crop',
      details: [
        'Harvest Location Documentation',
        'Tree Age Verification',
        'Seasonal Collection Record',
        'Export Authorization'
      ]
    }
  ];

  const authenticityFeatures = [
    {
      feature: 'Natural Mukhi Lines',
      description: 'Clear, naturally formed vertical lines from top to bottom',
      verification: 'Microscopic examination reveals organic formation patterns',
      icon: 'Eye'
    },
    {
      feature: 'Proper Density',
      description: 'Authentic Rudraksha sinks in water due to natural density',
      verification: 'Water test confirms genuine density of 1.05-1.25 g/cm³',
      icon: 'Droplets'
    },
    {
      feature: 'Surface Texture',
      description: 'Natural rough texture with visible pores and irregularities',
      verification: 'Surface analysis shows organic cellular structure',
      icon: 'Texture'
    },
    {
      feature: 'Hole Formation',
      description: 'Natural hole formed by insect or natural decay process',
      verification: 'Hole examination shows organic formation, not artificial drilling',
      icon: 'Circle'
    }
  ];

  const verificationTests = [
    {
      test: 'Water Test',
      procedure: 'Place Rudraksha in a glass of water',
      result: 'Genuine Rudraksha will sink within 30 seconds',
      icon: 'Droplet',
      status: 'Passed'
    },
    {
      test: 'Copper Coin Test',
      procedure: 'Place between two copper coins and rotate',
      result: 'Authentic Rudraksha will rotate the coin',
      icon: 'RotateCw',
      status: 'Passed'
    },
    {
      test: 'Boiling Test',
      procedure: 'Boil in water for 30 minutes',
      result: 'Color and texture remain unchanged',
      icon: 'Flame',
      status: 'Passed'
    },
    {
      test: 'Magnification Test',
      procedure: 'Examine under 10x magnification',
      result: 'Clear mukhi lines and natural surface visible',
      icon: 'Search',
      status: 'Passed'
    }
  ];

  const qualityGrades = [
    {
      grade: 'Collector Grade',
      description: 'Museum quality with perfect mukhi definition',
      features: ['Perfect symmetry', 'Clear mukhi lines', 'Rare size', 'Premium origin'],
      rarity: '1 in 1000',
      color: 'text-accent'
    },
    {
      grade: 'Premium Grade',
      description: 'High quality with excellent spiritual properties',
      features: ['Good symmetry', 'Clear definition', 'Standard size', 'Verified origin'],
      rarity: '1 in 100',
      color: 'text-primary'
    },
    {
      grade: 'Standard Grade',
      description: 'Good quality suitable for regular spiritual practice',
      features: ['Visible mukhi', 'Natural surface', 'Common size', 'Authentic origin'],
      rarity: '1 in 10',
      color: 'text-success'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 cosmic-glow animate-float">
          <Icon name="Shield" size={32} color="#F59E0B" />
        </div>
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
          Authenticity & Certification
        </h2>
        <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
          Every Rudraksha comes with comprehensive authentication and quality verification
        </p>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Award" size={20} className="text-accent" />
          <span>Certification Documents</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCertificate(index)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                selectedCertificate === index
                  ? 'bg-primary/10 border-primary/30 cosmic-shadow'
                  : 'bg-surface/20 border-surface-600 hover:bg-surface/30'
              }`}
            >
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className={`font-cinzel font-semibold mb-2 ${
                selectedCertificate === index ? 'text-primary' : 'text-text-primary'
              }`}>
                {cert.title}
              </h4>
              <p className="text-text-secondary text-sm">{cert.issuer}</p>
              <p className="text-text-tertiary text-xs mt-1">{cert.date}</p>
            </button>
          ))}
        </div>

        {/* Selected Certificate Details */}
        <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="FileText" size={20} className="text-accent" />
            <h4 className="text-lg font-cinzel font-semibold text-text-primary">
              {certificates[selectedCertificate].title}
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-cinzel font-semibold text-text-primary mb-3">Certificate Details:</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Issuing Authority:</span>
                  <span className="text-text-primary">{certificates[selectedCertificate].issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Issue Date:</span>
                  <span className="text-text-primary">{certificates[selectedCertificate].date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Certificate ID:</span>
                  <span className="text-text-primary">RUD-{rudrakshaData.id.toUpperCase()}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-cinzel font-semibold text-text-primary mb-3">Verification Points:</h5>
              <div className="space-y-2">
                {certificates[selectedCertificate].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={12} className="text-success" />
                    <span className="text-text-secondary text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authenticity Features */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Search" size={20} className="text-accent" />
          <span>Authenticity Features</span>
        </h3>

        <div className="grid gap-6">
          {authenticityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow hover:cosmic-glow transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                  <Icon name={feature.icon} size={20} color="#F59E0B" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-cinzel font-semibold text-text-primary mb-2">
                    {feature.feature}
                  </h4>
                  <p className="text-text-secondary font-poppins mb-3">
                    {feature.description}
                  </p>
                  <div className="bg-success/10 rounded-lg p-3 border border-success/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="CheckCircle" size={14} className="text-success" />
                      <span className="text-success font-medium text-sm">Verified</span>
                    </div>
                    <p className="text-text-secondary text-sm">{feature.verification}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Tests */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="TestTube" size={20} className="text-accent" />
          <span>Verification Tests Performed</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verificationTests.map((test, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center">
                  <Icon name={test.icon} size={16} color="#F59E0B" />
                </div>
                <div>
                  <h4 className="font-cinzel font-semibold text-text-primary">{test.test}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <Icon name="CheckCircle" size={12} className="text-success" />
                    <span className="text-success text-sm font-medium">{test.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="text-text-secondary text-sm font-medium">Procedure:</span>
                  <p className="text-text-secondary text-sm">{test.procedure}</p>
                </div>
                <div>
                  <span className="text-text-secondary text-sm font-medium">Result:</span>
                  <p className="text-text-secondary text-sm">{test.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Grades */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-accent" />
          <span>Quality Grading System</span>
        </h3>

        <div className="grid gap-4">
          {qualityGrades.map((grade, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className={`text-lg font-cinzel font-semibold ${grade.color}`}>
                    {grade.grade}
                  </h4>
                  <p className="text-text-secondary font-poppins">{grade.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-text-tertiary text-sm">Rarity:</span>
                  <p className={`font-medium ${grade.color}`}>{grade.rarity}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {grade.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-surface/50 rounded-full text-text-secondary text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-xl p-6 border border-success/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4 cosmic-glow">
            <Icon name="ShieldCheck" size={24} color="#F59E0B" />
          </div>
          <h3 className="text-xl font-cinzel font-bold text-text-primary mb-3">
            100% Authenticity Guarantee
          </h3>
          <p className="text-text-secondary font-poppins mb-4 max-w-2xl mx-auto">
            We guarantee the authenticity of every Rudraksha with comprehensive testing and certification. 
            If you're not satisfied with the authenticity, we offer a full refund within 30 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-success" />
              <span className="text-text-secondary text-sm">Certified Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="RefreshCw" size={16} className="text-success" />
              <span className="text-text-secondary text-sm">30-Day Return</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-text-secondary text-sm">Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticitySection;