import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Astrology Consultation", href: "/astrology-services" },
        { name: "Birth Chart Reading", href: "/astrology-services" },
        { name: "Compatibility Analysis", href: "/astrology-services" },
        { name: "Career Guidance", href: "/astrology-services" },
        { name: "Remedial Solutions", href: "/astrology-services" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Precious Gemstones", href: "/gems-category" },
        { name: "Semi-Precious Stones", href: "/gems-category" },
        { name: "Planetary Gems", href: "/gems-category" },
        { name: "Healing Crystals", href: "/gems-category" },
        { name: "Sacred Rudraksha", href: "/rudraksha-category" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#faq" },
        { name: "Shipping Info", href: "#shipping" },
        { name: "Return Policy", href: "#returns" },
        { name: "Authenticity Guarantee", href: "#authenticity" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Experts", href: "#experts" },
        { name: "Certifications", href: "#certifications" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#facebook" },
    { name: "Instagram", icon: "Instagram", href: "#instagram" },
    { name: "Twitter", icon: "Twitter", href: "#twitter" },
    { name: "YouTube", icon: "Youtube", href: "#youtube" },
    { name: "WhatsApp", icon: "MessageCircle", href: "https://wa.me/+919876543210" }
  ];

  const contactInfo = [
    {
      icon: "Phone",
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: "Mail",
      label: "Email",
      value: "info@gemsrudrakshaGuru.com",
      href: "mailto:info@gemsrudrakshaGuru.com"
    },
    {
      icon: "MapPin",
      label: "Address",
      value: "123 Spiritual Street, Mumbai, Maharashtra 400001",
      href: "#location"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about your services and products. Can you help me?");
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  return (
    <footer className="relative bg-surface/50 backdrop-blur-sm border-t border-surface-600">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary-900/10 to-background"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center cosmic-glow">
                    <Icon name="Sparkles" size={24} color="#F59E0B" />
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
              
              <p className="font-poppins text-text-secondary text-sm leading-relaxed mb-6">
                Your trusted partner in spiritual growth through authentic Vedic astrology and premium spiritual products.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-text-tertiary hover:text-text-primary transition-colors duration-200 group"
                  >
                    <Icon name={contact.icon} size={16} className="group-hover:text-accent transition-colors duration-200" />
                    <span className="font-poppins text-sm">{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="font-cinzel text-lg font-semibold text-text-primary mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="font-poppins text-sm text-text-tertiary hover:text-text-primary transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-12 pt-8 border-t border-surface-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cinzel text-xl font-semibold text-text-primary mb-2">
                  Stay Connected with Cosmic Wisdom
                </h3>
                <p className="font-poppins text-text-secondary text-sm">
                  Get weekly insights, astrological updates, and exclusive offers delivered to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-surface/50 border border-surface-600 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                />
                <button className="px-6 py-3 bg-gradient-cosmic text-text-primary font-semibold rounded-lg hover:cosmic-glow transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-surface-600 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-4">
                <p className="font-poppins text-sm text-text-tertiary">
                  © {currentYear} Gems & Rudraksha Guru. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} className="text-success" />
                  <span className="font-poppins text-xs text-success">SSL Secured</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="font-poppins text-sm text-text-tertiary">Follow us:</span>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      onClick={social.name === 'WhatsApp' ? (e) => { e.preventDefault(); handleWhatsAppClick(); } : undefined}
                      className="w-8 h-8 bg-surface/50 rounded-full flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-primary/20 transition-all duration-200 group"
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size={16} className="group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 pt-6 border-t border-surface-600">
              <div className="flex items-center space-x-2 text-text-tertiary">
                <Icon name="Award" size={14} />
                <span className="font-poppins text-xs">15+ Years Trusted</span>
              </div>
              <div className="flex items-center space-x-2 text-text-tertiary">
                <Icon name="Users" size={14} />
                <span className="font-poppins text-xs">10,000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-text-tertiary">
                <Icon name="Shield" size={14} />
                <span className="font-poppins text-xs">100% Authentic</span>
              </div>
              <div className="flex items-center space-x-2 text-text-tertiary">
                <Icon name="Truck" size={14} />
                <span className="font-poppins text-xs">Secure Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;