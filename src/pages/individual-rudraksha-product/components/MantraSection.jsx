import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MantraSection = ({ rudrakshaData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMantra, setSelectedMantra] = useState(0);

  const mantras = [
    {
      sanskrit: rudrakshaData.mantra,
      transliteration: 'Om Hreem Namah',
      meaning: 'I bow to the divine energy that removes obstacles and grants wisdom',
      benefits: 'Activates the Rudraksha and connects with divine consciousness',
      repetitions: 108,
      timing: 'Daily during meditation'
    },
    {
      sanskrit: 'ॐ नमः शिवाय',
      transliteration: 'Om Namah Shivaya',
      meaning: 'I bow to Lord Shiva, the auspicious one',
      benefits: 'Universal Shiva mantra for spiritual purification',
      repetitions: 108,
      timing: 'Anytime for general worship'
    },
    {
      sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्',
      transliteration: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam',
      meaning: 'We worship the three-eyed Lord Shiva who nourishes all beings',
      benefits: 'Maha Mrityunjaya mantra for health and longevity',
      repetitions: 21,
      timing: 'During illness or for protection'
    }
  ];

  const chantingGuidelines = [
    {
      title: 'Proper Posture',
      icon: 'User',
      description: 'Sit in a comfortable meditation posture with spine straight',
      details: [
        'Face east or north direction',
        'Sit on a clean mat or cloth',
        'Keep the Rudraksha in your right hand',
        'Close your eyes and focus on the heart center'
      ]
    },
    {
      title: 'Breathing Technique',
      icon: 'Wind',
      description: 'Coordinate mantra chanting with natural breath rhythm',
      details: [
        'Take deep, slow breaths',
        'Chant on exhalation',
        'Pause naturally between repetitions',
        'Maintain steady rhythm throughout'
      ]
    },
    {
      title: 'Mental Focus',
      icon: 'Eye',
      description: 'Concentrate mind on the meaning and vibration of mantras',
      details: [
        'Visualize Lord Shiva or chosen deity',
        'Feel the vibration in your heart',
        'Let go of worldly thoughts',
        'Surrender to the divine energy'
      ]
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control audio playback
  };

  return (
    <div className="space-y-8">
      {/* Main Mantra Display */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 cosmic-glow animate-float">
          <Icon name="Volume2" size={32} color="#F59E0B" />
        </div>
        <h2 className="text-2xl font-cinzel font-bold text-text-primary mb-4">
          Sacred Mantras & Prayers
        </h2>
        <p className="text-text-secondary font-poppins max-w-2xl mx-auto">
          Enhance the spiritual power of your Rudraksha through proper mantra chanting and meditation practices
        </p>
      </div>

      {/* Mantra Selection */}
      <div className="space-y-4">
        {mantras.map((mantra, index) => (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 cursor-pointer ${
              selectedMantra === index
                ? 'bg-primary/10 border-primary/30 cosmic-shadow'
                : 'bg-surface/20 border-surface-600 hover:bg-surface/30'
            }`}
            onClick={() => setSelectedMantra(index)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-cinzel font-semibold ${
                  selectedMantra === index ? 'text-primary' : 'text-text-primary'
                }`}>
                  {index === 0 ? 'Primary Mantra' : index === 1 ? 'Universal Mantra' : 'Healing Mantra'}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPause();
                    }}
                    className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center hover:cosmic-glow transition-all duration-300"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={16} color="#F59E0B" />
                  </button>
                  <Icon 
                    name={selectedMantra === index ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-text-tertiary" 
                  />
                </div>
              </div>

              {/* Sanskrit Text */}
              <div className="text-center mb-4">
                <div className="text-2xl font-cinzel font-bold text-accent mb-2">
                  {mantra.sanskrit}
                </div>
                <div className="text-lg text-text-secondary font-poppins italic">
                  {mantra.transliteration}
                </div>
              </div>

              {selectedMantra === index && (
                <div className="space-y-4 mt-6">
                  {/* Meaning */}
                  <div className="bg-surface/30 rounded-lg p-4">
                    <h4 className="font-cinzel font-semibold text-text-primary mb-2">Meaning:</h4>
                    <p className="text-text-secondary font-poppins">{mantra.meaning}</p>
                  </div>

                  {/* Benefits */}
                  <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                    <h4 className="font-cinzel font-semibold text-text-primary mb-2">Benefits:</h4>
                    <p className="text-text-secondary font-poppins">{mantra.benefits}</p>
                  </div>

                  {/* Practice Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="RotateCw" size={16} className="text-accent" />
                        <h4 className="font-cinzel font-semibold text-text-primary">Repetitions</h4>
                      </div>
                      <p className="text-text-secondary font-poppins">{mantra.repetitions} times daily</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <h4 className="font-cinzel font-semibold text-text-primary">Best Time</h4>
                      </div>
                      <p className="text-text-secondary font-poppins">{mantra.timing}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chanting Guidelines */}
      <div>
        <h3 className="text-xl font-cinzel font-semibold text-text-primary mb-6 flex items-center space-x-2">
          <Icon name="BookOpen" size={20} className="text-accent" />
          <span>Chanting Guidelines</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chantingGuidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-surface/20 rounded-xl p-6 cosmic-shadow hover:cosmic-glow transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-3 animate-float">
                  <Icon name={guideline.icon} size={24} color="#F59E0B" />
                </div>
                <h4 className="text-lg font-cinzel font-semibold text-text-primary">
                  {guideline.title}
                </h4>
                <p className="text-text-secondary text-sm font-poppins mt-2">
                  {guideline.description}
                </p>
              </div>

              <div className="space-y-2">
                {guideline.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-2">
                    <Icon name="Check" size={12} className="text-success mt-1" />
                    <span className="text-text-secondary text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meditation Practice */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Brain" size={20} className="text-accent" />
          <span>Meditation Practice with Rudraksha</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-3">Preparation</h4>
            <ul className="space-y-2">
              {[
                'Choose a quiet, clean space for meditation',
                'Sit facing east or north direction',
                'Hold Rudraksha in right hand or wear it',
                'Light incense and offer prayers'
              ].map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="Dot" size={12} className="text-accent mt-1" />
                  <span className="text-text-secondary text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-cinzel font-semibold text-text-primary mb-3">Practice</h4>
            <ul className="space-y-2">
              {[
                'Begin with deep breathing exercises',
                'Chant chosen mantra with full concentration',
                'Feel the vibration of Rudraksha on your body',
                'End with gratitude and surrender'
              ].map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="Dot" size={12} className="text-accent mt-1" />
                  <span className="text-text-secondary text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Audio Pronunciation Guide */}
      <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Headphones" size={20} className="text-accent" />
          <span>Audio Pronunciation Guide</span>
        </h3>
        
        <div className="text-center">
          <p className="text-text-secondary font-poppins mb-4">
            Listen to the correct pronunciation of mantras for effective chanting
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
              <Icon name="Play" size={20} />
              <span>Play Primary Mantra</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-surface/50 hover:bg-surface/70 text-text-secondary hover:text-text-primary font-medium rounded-lg transition-all duration-300">
              <Icon name="Download" size={20} />
              <span>Download Audio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantraSection;