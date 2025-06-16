import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategoryCard = ({ category, isSelected, onClick, onWhatsAppClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'cosmic-glow transform scale-105' 
          : 'hover:cosmic-shadow-lg hover:transform hover:scale-102'
      }`}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-center">
          {/* Icon */}
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
            <Icon name={category.icon} size={24} color="white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-white/90 font-poppins text-sm mb-4 line-clamp-2">
            {category.description}
          </p>

          {/* Count Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            <Icon name="Gem" size={16} />
            <span>{category.count} Items</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isSelected
                  ? 'bg-white text-primary' :'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {isSelected ? 'Selected' : 'Explore'}
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onWhatsAppClick();
              }}
              className="p-2 bg-success/80 backdrop-blur-sm rounded-lg text-white hover:bg-success transition-colors duration-300"
              title="WhatsApp Inquiry"
            >
              <Icon name="MessageCircle" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <Icon name="Check" size={16} color="white" />
        </div>
      )}

      {/* 3D Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default CategoryCard;