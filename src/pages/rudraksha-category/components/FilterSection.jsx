import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterSection = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterOptions = {
    mukhiCount: [
      { value: 'all', label: 'All Mukhi' },
      { value: '1', label: '1 Mukhi' },
      { value: '2', label: '2 Mukhi' },
      { value: '3', label: '3 Mukhi' },
      { value: '4', label: '4 Mukhi' },
      { value: '5', label: '5 Mukhi' },
      { value: '6', label: '6 Mukhi' },
      { value: '7', label: '7 Mukhi' },
      { value: '8', label: '8 Mukhi' },
      { value: '9', label: '9 Mukhi' },
      { value: '10', label: '10 Mukhi' },
      { value: '11', label: '11 Mukhi' },
      { value: '12', label: '12 Mukhi' },
      { value: '13', label: '13 Mukhi' },
      { value: '14', label: '14 Mukhi' },
      { value: '15', label: '15 Mukhi' },
      { value: '16', label: '16 Mukhi' },
      { value: '17', label: '17 Mukhi' },
      { value: '18', label: '18 Mukhi' },
      { value: '19', label: '19 Mukhi' },
      { value: '20', label: '20 Mukhi' },
      { value: '21', label: '21 Mukhi' }
    ],
    size: [
      { value: 'all', label: 'All Sizes' },
      { value: 'Small', label: 'Small (12-15mm)' },
      { value: 'Medium', label: 'Medium (16-20mm)' },
      { value: 'Large', label: 'Large (21-25mm)' },
      { value: 'Extra Large', label: 'Extra Large (25mm+)' }
    ],
    origin: [
      { value: 'all', label: 'All Origins' },
      { value: 'Nepal', label: 'Nepal (Premium)' },
      { value: 'Indonesia', label: 'Indonesia' },
      { value: 'India', label: 'India' }
    ],
    purpose: [
      { value: 'all', label: 'All Purposes' },
      { value: 'Spiritual Growth', label: 'Spiritual Growth' },
      { value: 'Health', label: 'Health & Wellness' },
      { value: 'Wealth', label: 'Wealth & Prosperity' },
      { value: 'Relationships', label: 'Relationships' },
      { value: 'Protection', label: 'Protection' },
      { value: 'Knowledge', label: 'Knowledge & Wisdom' },
      { value: 'Peace', label: 'Peace & Meditation' },
      { value: 'Success', label: 'Success & Leadership' },
      { value: 'Energy', label: 'Energy & Vitality' },
      { value: 'Focus', label: 'Focus & Concentration' },
      { value: 'Attraction', label: 'Attraction & Charisma' },
      { value: 'Strength', label: 'Strength & Courage' },
      { value: 'Healing', label: 'Healing & Recovery' },
      { value: 'Liberation', label: 'Liberation & Moksha' },
      { value: 'Grounding', label: 'Grounding & Stability' },
      { value: 'Enlightenment', label: 'Enlightenment' },
      { value: 'Creation', label: 'Creation & Manifestation' },
      { value: 'Ultimate Prosperity', label: 'Ultimate Prosperity' }
    ]
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'all').length;

  const clearAllFilters = () => {
    Object.keys(filters).forEach(key => {
      onFilterChange(key, 'all');
    });
  };

  return (
    <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 cosmic-shadow border border-surface-600/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={16} color="#F59E0B" />
          </div>
          <h3 className="text-lg font-cinzel font-semibold text-text-primary">
            Filter Rudraksha
          </h3>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors duration-200"
            >
              Clear All
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
          isExpanded ? 'block' : 'hidden lg:grid'
        }`}
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 'auto',
          opacity: isExpanded ? 1 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Mukhi Count Filter */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-3">
            Mukhi Count
          </label>
          <select
            value={filters.mukhiCount}
            onChange={(e) => onFilterChange('mukhiCount', e.target.value)}
            className="w-full px-4 py-3 bg-surface-700 border border-surface-600 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          >
            {filterOptions.mukhiCount.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Size Filter */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-3">
            Size
          </label>
          <select
            value={filters.size}
            onChange={(e) => onFilterChange('size', e.target.value)}
            className="w-full px-4 py-3 bg-surface-700 border border-surface-600 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          >
            {filterOptions.size.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Origin Filter */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-3">
            Origin
          </label>
          <select
            value={filters.origin}
            onChange={(e) => onFilterChange('origin', e.target.value)}
            className="w-full px-4 py-3 bg-surface-700 border border-surface-600 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          >
            {filterOptions.origin.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Purpose Filter */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-3">
            Spiritual Purpose
          </label>
          <select
            value={filters.purpose}
            onChange={(e) => onFilterChange('purpose', e.target.value)}
            className="w-full px-4 py-3 bg-surface-700 border border-surface-600 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          >
            {filterOptions.purpose.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Quick Filter Tags */}
      <div className="mt-6 pt-6 border-t border-surface-600/30">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-text-tertiary mb-2 w-full">Quick Filters:</span>
          {[
            { label: 'Most Popular', mukhi: '5' },
            { label: 'For Wealth', mukhi: '7' },
            { label: 'For Success', mukhi: '8' },
            { label: 'For Protection', mukhi: '9' },
            { label: 'Rare Varieties', mukhi: '1' },
            { label: 'High Mukhi (13+)', mukhi: '13' },
            { label: 'Ultimate Prosperity', mukhi: '21' }
          ].map((tag, index) => (
            <button
              key={index}
              onClick={() => onFilterChange('mukhiCount', tag.mukhi)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                filters.mukhiCount === tag.mukhi
                  ? 'bg-primary/20 text-primary border border-primary/30' :'bg-surface-600/50 text-text-tertiary hover:text-text-primary hover:bg-surface-600'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rarity Information */}
      <div className="mt-6 pt-6 border-t border-surface-600/30">
        <h4 className="text-sm font-medium text-text-secondary mb-3">Rarity Guide:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-text-tertiary">Common (3-6 Mukhi)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-text-tertiary">Uncommon (7-8 Mukhi)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-text-tertiary">Rare (9-12 Mukhi)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <span className="text-text-tertiary">Extremely Rare (13-21 Mukhi)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;