import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Home',
      path: '/homepage',
      icon: 'Home'
    },
    {
      label: 'Astrology',
      path: '/astrology-services',
      icon: 'Star'
    },
    {
      label: 'Gems',
      path: '/gems-category',
      icon: 'Gem'
    },
    {
      label: 'Rudraksha',
      path: '/rudraksha-category',
      icon: 'Circle'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
          <Icon name="Sparkles" size={20} color="#F59E0B" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-cinzel font-semibold text-xl text-text-primary">
          Gems & Rudraksha
        </span>
        <span className="font-poppins text-xs text-accent -mt-1">
          Guru
        </span>
      </div>
    </div>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled 
            ? 'glassmorphism cosmic-shadow-lg' 
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-4 lg:mx-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/homepage" className="flex-shrink-0">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActiveRoute(item.path)
                      ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                  }`}
                >
                  <Icon 
                    name={item.icon} 
                    size={18} 
                    className={`transition-colors duration-200 ${
                      isActiveRoute(item.path) ? 'text-primary' : 'group-hover:text-accent'
                    }`}
                  />
                  <span className="font-inter font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface/50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-200 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>
          <div className="relative bg-surface/95 backdrop-blur-md h-full w-full max-w-sm ml-auto cosmic-shadow-lg">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-600">
                <Logo />
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActiveRoute(item.path)
                          ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-text-primary hover:bg-surface-600/50'
                      }`}
                    >
                      <Icon 
                        name={item.icon} 
                        size={20} 
                        className={`${
                          isActiveRoute(item.path) ? 'text-primary' : 'text-accent'
                        }`}
                      />
                      <span className="font-inter font-medium text-lg">{item.label}</span>
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-surface-600">
                <button className="w-full px-6 py-3 bg-gradient-cosmic text-text-primary font-medium rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;