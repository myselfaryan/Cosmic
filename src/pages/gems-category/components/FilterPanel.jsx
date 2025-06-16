import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterPanel = ({ filters, setFilters, filterOptions, resultCount, isMobile = false, onClose }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      planet: 'all',
      purpose: 'all',
      color: 'all',
      priceRange: 'all'
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all');

  const FilterSection = ({ title, options, filterKey, icon }) => (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Icon name={icon} size={18} className="text-accent" />
        <h4 className="font-cinzel font-semibold text-text-primary">{title}</h4>
      </div>
      <div className="space-y-2">
        {options.map(option => (
          <label
            key={option.value}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <input
              type="radio"
              name={filterKey}
              value={option.value}
              checked={filters[filterKey] === option.value}
              onChange={(e) => handleFilterChange(filterKey, e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              filters[filterKey] === option.value
                ? 'border-primary bg-primary' :'border-surface-400 group-hover:border-primary'
            }`}>
              {filters[filterKey] === option.value && (
                <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
              )}
            </div>
            <span className={`font-poppins transition-colors duration-200 ${
              filters[filterKey] === option.value
                ? 'text-text-primary' :'text-text-secondary group-hover:text-text-primary'
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={isMobile ? { opacity: 0 } : { opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? '' : 'sticky top-24'} bg-surface rounded-xl p-6 cosmic-shadow`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-cinzel font-semibold text-text-primary">
            Filter Gems
          </h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-accent hover:text-accent-400 font-poppins text-sm transition-colors duration-200"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center space-x-2">
          <Icon name="Search" size={16} className="text-primary" />
          <span className="text-primary font-poppins text-sm">
            {resultCount} gemstones found
          </span>
        </div>
      </div>

      {/* Filter Sections */}
      <FilterSection
        title="Ruling Planet"
        options={filterOptions.planets}
        filterKey="planet"
        icon="Star"
      />

      <FilterSection
        title="Spiritual Purpose"
        options={filterOptions.purposes}
        filterKey="purpose"
        icon="Heart"
      />

      <FilterSection
        title="Color"
        options={filterOptions.colors}
        filterKey="color"
        icon="Palette"
      />

      <FilterSection
        title="Price Range"
        options={filterOptions.priceRanges}
        filterKey="priceRange"
        icon="IndianRupee"
      />

      {/* Mobile Apply Button */}
      {isMobile && (
        <div className="mt-8 space-y-3">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300"
          >
            Apply Filters ({resultCount} results)
          </button>
          {hasActiveFilters && (
            <button
              onClick={() => {
                clearAllFilters();
                onClose();
              }}
              className="w-full px-6 py-3 bg-surface-600 text-text-secondary font-medium rounded-lg hover:bg-surface-500 hover:text-text-primary transition-all duration-300"
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-surface-600">
        <h4 className="font-cinzel font-semibold text-text-primary mb-4">
          Why Choose Our Gems?
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="text-text-secondary font-poppins text-sm">
              Certified Authentic
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-text-secondary font-poppins text-sm">
              Lab Tested Quality
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Truck" size={16} className="text-primary" />
            <span className="text-text-secondary font-poppins text-sm">
              Secure Delivery
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="RotateCcw" size={16} className="text-secondary" />
            <span className="text-text-secondary font-poppins text-sm">
              7-Day Return Policy
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterPanel;