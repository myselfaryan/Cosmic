import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl font-cinzel font-bold text-primary/20 animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow animate-float">
              <Icon name="Sparkles" size={32} color="#F59E0B" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-cinzel font-semibold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary font-poppins mb-8">
          The cosmic path you're looking for seems to have drifted into another dimension. Let us guide you back to the spiritual sanctuary.
        </p>

        {/* Action Button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105"
        >
          <Icon name="Home" size={20} />
          <span>Return Home</span>
        </button>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;