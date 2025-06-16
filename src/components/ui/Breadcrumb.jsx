import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();

  const pathMappings = {
    '/homepage': { label: 'Home', icon: 'Home' },
    '/astrology-services': { label: 'Astrology Services', icon: 'Star' },
    '/gems-category': { label: 'Gems', icon: 'Gem' },
    '/individual-gem-product': { label: 'Gem Details', icon: 'Gem' },
    '/rudraksha-category': { label: 'Rudraksha', icon: 'Circle' },
    '/individual-rudraksha-product': { label: 'Rudraksha Details', icon: 'Circle' }
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage', icon: 'Home' }];

    if (location.pathname === '/homepage') {
      return breadcrumbs;
    }

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const mapping = pathMappings[currentPath];
      
      if (mapping) {
        breadcrumbs.push({
          label: mapping.label,
          path: currentPath,
          icon: mapping.icon,
          isLast: index === pathSegments.length - 1
        });
      }
    });

    // Handle specific product detail pages
    if (location.pathname.includes('/individual-gem-product')) {
      if (breadcrumbs.length === 1) {
        breadcrumbs.push({ label: 'Gems', path: '/gems-category', icon: 'Gem' });
      }
      breadcrumbs.push({ 
        label: 'Gem Details', 
        path: location.pathname, 
        icon: 'Gem', 
        isLast: true 
      });
    } else if (location.pathname.includes('/individual-rudraksha-product')) {
      if (breadcrumbs.length === 1) {
        breadcrumbs.push({ label: 'Rudraksha', path: '/rudraksha-category', icon: 'Circle' });
      }
      breadcrumbs.push({ 
        label: 'Rudraksha Details', 
        path: location.pathname, 
        icon: 'Circle', 
        isLast: true 
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="flex items-center space-x-2 text-sm font-poppins mb-6"
      aria-label="Breadcrumb navigation"
    >
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          {index > 0 && (
            <Icon 
              name="ChevronRight" 
              size={16} 
              className="text-text-tertiary" 
            />
          )}
          
          {crumb.isLast ? (
            <span className="flex items-center space-x-2 text-text-secondary">
              <Icon 
                name={crumb.icon} 
                size={16} 
                className="text-accent" 
              />
              <span>{crumb.label}</span>
            </span>
          ) : (
            <a
              href={crumb.path}
              className="flex items-center space-x-2 text-text-tertiary hover:text-text-primary transition-colors duration-200 group"
            >
              <Icon 
                name={crumb.icon} 
                size={16} 
                className="group-hover:text-accent transition-colors duration-200" 
              />
              <span className="hover:underline">{crumb.label}</span>
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;