/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#6B46C1', // Deep cosmic purple - violet-700
        'primary-50': '#F3F0FF', // Light purple tint - violet-50
        'primary-100': '#E9E5FF', // Lighter purple - violet-100
        'primary-200': '#D6CCFF', // Light purple - violet-200
        'primary-300': '#B8A3FF', // Medium light purple - violet-300
        'primary-400': '#9B7AFF', // Medium purple - violet-400
        'primary-500': '#8B5CF6', // Standard purple - violet-500
        'primary-600': '#7C3AED', // Medium dark purple - violet-600
        'primary-700': '#6B46C1', // Deep cosmic purple - violet-700
        'primary-800': '#5B21B6', // Darker purple - violet-800
        'primary-900': '#4C1D95', // Darkest purple - violet-900

        // Secondary Colors
        'secondary': '#1E1B4B', // Rich midnight blue - indigo-900
        'secondary-50': '#EEF2FF', // Light indigo tint - indigo-50
        'secondary-100': '#E0E7FF', // Lighter indigo - indigo-100
        'secondary-200': '#C7D2FE', // Light indigo - indigo-200
        'secondary-300': '#A5B4FC', // Medium light indigo - indigo-300
        'secondary-400': '#818CF8', // Medium indigo - indigo-400
        'secondary-500': '#6366F1', // Standard indigo - indigo-500
        'secondary-600': '#4F46E5', // Medium dark indigo - indigo-600
        'secondary-700': '#4338CA', // Dark indigo - indigo-700
        'secondary-800': '#3730A3', // Darker indigo - indigo-800
        'secondary-900': '#1E1B4B', // Rich midnight blue - indigo-900

        // Accent Colors
        'accent': '#F59E0B', // Warm amber gold - amber-500
        'accent-50': '#FFFBEB', // Light amber tint - amber-50
        'accent-100': '#FEF3C7', // Lighter amber - amber-100
        'accent-200': '#FDE68A', // Light amber - amber-200
        'accent-300': '#FCD34D', // Medium light amber - amber-300
        'accent-400': '#FBBF24', // Medium amber - amber-400
        'accent-500': '#F59E0B', // Warm amber gold - amber-500
        'accent-600': '#D97706', // Medium dark amber - amber-600
        'accent-700': '#B45309', // Dark amber - amber-700
        'accent-800': '#92400E', // Darker amber - amber-800
        'accent-900': '#78350F', // Darkest amber - amber-900

        // Background Colors
        'background': '#0F0F23', // Deep space navy - slate-900
        'background-50': '#F8FAFC', // Light background - slate-50
        'background-100': '#F1F5F9', // Lighter background - slate-100
        'background-200': '#E2E8F0', // Light background - slate-200
        'background-300': '#CBD5E1', // Medium light background - slate-300
        'background-400': '#94A3B8', // Medium background - slate-400
        'background-500': '#64748B', // Standard background - slate-500
        'background-600': '#475569', // Medium dark background - slate-600
        'background-700': '#334155', // Dark background - slate-700
        'background-800': '#1E293B', // Darker background - slate-800
        'background-900': '#0F0F23', // Deep space navy - slate-900

        // Surface Colors
        'surface': '#1A1B3A', // Elevated surface tone - slate-800
        'surface-50': '#F8FAFC', // Light surface - slate-50
        'surface-100': '#F1F5F9', // Lighter surface - slate-100
        'surface-200': '#E2E8F0', // Light surface - slate-200
        'surface-300': '#CBD5E1', // Medium light surface - slate-300
        'surface-400': '#94A3B8', // Medium surface - slate-400
        'surface-500': '#64748B', // Standard surface - slate-500
        'surface-600': '#475569', // Medium dark surface - slate-600
        'surface-700': '#334155', // Dark surface - slate-700
        'surface-800': '#1A1B3A', // Elevated surface tone - slate-800
        'surface-900': '#0F172A', // Darkest surface - slate-900

        // Text Colors
        'text-primary': '#F8FAFC', // Pure white - slate-50
        'text-secondary': '#CBD5E1', // Soft gray - slate-300
        'text-tertiary': '#94A3B8', // Medium gray - slate-400
        'text-quaternary': '#64748B', // Dark gray - slate-500

        // Status Colors
        'success': '#10B981', // Emerald green - emerald-500
        'success-50': '#ECFDF5', // Light success tint - emerald-50
        'success-100': '#D1FAE5', // Lighter success - emerald-100
        'success-200': '#A7F3D0', // Light success - emerald-200
        'success-300': '#6EE7B7', // Medium light success - emerald-300
        'success-400': '#34D399', // Medium success - emerald-400
        'success-500': '#10B981', // Emerald green - emerald-500
        'success-600': '#059669', // Medium dark success - emerald-600
        'success-700': '#047857', // Dark success - emerald-700
        'success-800': '#065F46', // Darker success - emerald-800
        'success-900': '#064E3B', // Darkest success - emerald-900

        'warning': '#F59E0B', // Warm amber gold - amber-500
        'warning-50': '#FFFBEB', // Light warning tint - amber-50
        'warning-100': '#FEF3C7', // Lighter warning - amber-100
        'warning-200': '#FDE68A', // Light warning - amber-200
        'warning-300': '#FCD34D', // Medium light warning - amber-300
        'warning-400': '#FBBF24', // Medium warning - amber-400
        'warning-500': '#F59E0B', // Warm amber gold - amber-500
        'warning-600': '#D97706', // Medium dark warning - amber-600
        'warning-700': '#B45309', // Dark warning - amber-700
        'warning-800': '#92400E', // Darker warning - amber-800
        'warning-900': '#78350F', // Darkest warning - amber-900

        'error': '#EF4444', // Clear red - red-500
        'error-50': '#FEF2F2', // Light error tint - red-50
        'error-100': '#FEE2E2', // Lighter error - red-100
        'error-200': '#FECACA', // Light error - red-200
        'error-300': '#FCA5A5', // Medium light error - red-300
        'error-400': '#F87171', // Medium error - red-400
        'error-500': '#EF4444', // Clear red - red-500
        'error-600': '#DC2626', // Medium dark error - red-600
        'error-700': '#B91C1C', // Dark error - red-700
        'error-800': '#991B1B', // Darker error - red-800
        'error-900': '#7F1D1D', // Darkest error - red-900
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'breathing': 'breathing 4s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': {
            transform: 'scale(0.98)',
          },
          '50%': {
            transform: 'scale(1.02)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-200% 0',
          },
          '100%': {
            'background-position': '200% 0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'cosmic': '0 4px 20px rgba(107, 70, 193, 0.15)',
        'cosmic-lg': '0 8px 32px rgba(107, 70, 193, 0.2)',
        'cosmic-glow': '0 0 20px rgba(107, 70, 193, 0.3)',
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #6B46C1 0%, #1E1B4B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '150': '150',
        '200': '200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}