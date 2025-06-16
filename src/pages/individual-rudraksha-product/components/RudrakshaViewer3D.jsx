import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RudrakshaViewer3D = ({ rudrakshaData, selectedSize, selectedQuality }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const viewerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isZoomed) {
        setRotation(prev => (prev + 1) % 360);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isDragging, isZoomed]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      setRotation(prev => prev + deltaX * 0.5);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStart.x;
      setRotation(prev => prev + deltaX * 0.5);
      setDragStart({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const sizeComparisons = [
    { name: 'Coin', size: '24mm', icon: 'Circle' },
    { name: 'Grape', size: '16mm', icon: 'Circle' },
    { name: 'Marble', size: '20mm', icon: 'Circle' }
  ];

  return (
    <div className="space-y-6">
      {/* Main 3D Viewer */}
      <div className="relative bg-gradient-to-br from-surface/30 to-surface/10 rounded-2xl p-8 cosmic-shadow-lg overflow-hidden">
        {/* Cosmic Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-8 w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        </div>

        <div 
          ref={viewerRef}
          className="relative aspect-square max-w-md mx-auto cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 3D Rudraksha Model Simulation */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            <div className="relative">
              <Image
                src={rudrakshaData.images[currentImageIndex]}
                alt={`${rudrakshaData.name} - View ${currentImageIndex + 1}`}
                className={`w-64 h-64 object-cover rounded-full cosmic-shadow-lg transition-all duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
              
              {/* Mukhi Pattern Overlay */}
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse"></div>
              
              {/* Spiritual Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent/20 via-transparent to-transparent animate-breathing"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center space-x-2 px-4 py-2 bg-surface/50 hover:bg-surface/70 text-text-secondary hover:text-text-primary rounded-lg transition-all duration-200"
          >
            <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
            <span className="text-sm">{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
          </button>
          
          <button
            onClick={() => setRotation(0)}
            className="flex items-center space-x-2 px-4 py-2 bg-surface/50 hover:bg-surface/70 text-text-secondary hover:text-text-primary rounded-lg transition-all duration-200"
          >
            <Icon name="RotateCcw" size={16} />
            <span className="text-sm">Reset</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-4">
        {rudrakshaData.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
              currentImageIndex === index
                ? 'ring-2 ring-primary cosmic-glow' :'hover:ring-2 hover:ring-accent/50'
            }`}
          >
            <Image
              src={image}
              alt={`${rudrakshaData.name} - View ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {currentImageIndex === index && (
              <div className="absolute inset-0 bg-primary/20"></div>
            )}
          </button>
        ))}
      </div>

      {/* Size Comparison */}
      <div className="bg-surface/20 rounded-xl p-6 cosmic-shadow">
        <h3 className="text-lg font-cinzel font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Ruler" size={20} className="text-accent" />
          <span>Size Comparison</span>
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          {sizeComparisons.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-2 cosmic-glow">
                <Icon name={item.icon} size={20} color="#F59E0B" />
              </div>
              <p className="text-sm text-text-secondary font-poppins">{item.name}</p>
              <p className="text-xs text-text-tertiary">{item.size}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-text-secondary font-poppins text-center">
            Selected size: <span className="text-accent font-medium">
              {rudrakshaData.sizes.find(s => s.id === selectedSize)?.name}
            </span>
          </p>
        </div>
      </div>

      {/* 360° Interaction Guide */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center animate-float">
            <Icon name="RotateCw" size={20} color="#F59E0B" />
          </div>
          <div>
            <p className="text-text-primary font-medium">Interactive 3D View</p>
            <p className="text-text-secondary text-sm">Drag to rotate • Tap zoom to examine mukhi patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RudrakshaViewer3D;