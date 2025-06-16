// src/pages/individual-gem-product/components/GemViewer3D.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GemViewer3D = ({ gemData }) => {
  const [isRotating, setIsRotating] = useState(true);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [lightingAngle, setLightingAngle] = useState(45);
  const [isDragging, setIsDragging] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const containerRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;
    if (isRotating && !isDragging) {
      const animate = () => {
        setRotationY(prev => (prev + 0.5) % 360);
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isRotating, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsRotating(false);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-45, Math.min(45, prev - deltaY * 0.5)));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsRotating(false);
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.current.x;
    const deltaY = touch.clientY - lastMousePos.current.y;
    
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-45, Math.min(45, prev - deltaY * 0.5)));
    
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setRotationX(0);
    setRotationY(0);
    setZoom(1);
    setLightingAngle(45);
    setIsRotating(true);
  };

  const toggleAutoRotation = () => {
    setIsRotating(!isRotating);
  };

  // Combined handler for mouse leave event
  const handleMouseLeave = () => {
    handleMouseUp();
    setShowControls(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-surface/20 to-surface/40 rounded-2xl overflow-hidden cosmic-shadow-lg">
      {/* 3D Viewer Container */}
      <div
        ref={containerRef}
        className="relative aspect-square cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setShowControls(true)}
      >
        {/* Gem Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            style={{
              transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${zoom})`,
              filter: `brightness(${1 + lightingAngle / 100}) contrast(${1.1 + lightingAngle / 200})`
            }}
            animate={{
              filter: `brightness(${1 + lightingAngle / 100}) contrast(${1.1 + lightingAngle / 200}) drop-shadow(0 0 ${20 + lightingAngle / 2}px rgba(239, 68, 68, 0.3))`
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src={gemData?.images[0]}
                alt={gemData?.name}
                className="w-full h-full object-cover rounded-full cosmic-glow"
              />
              
              {/* Sparkle Effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-accent rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${15 + i * 12}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
              
              {/* Reflection Effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: `linear-gradient(${lightingAngle}deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* 3D Controls Overlay */}
        <motion.div
          className="absolute top-4 right-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={toggleAutoRotation}
            className={`p-2 rounded-lg backdrop-blur-sm transition-all duration-200 ${
              isRotating 
                ? 'bg-primary/20 text-primary border border-primary/30' :'bg-surface/80 text-text-secondary hover:text-text-primary'
            }`}
            title={isRotating ? 'Stop Auto Rotation' : 'Start Auto Rotation'}
          >
            <Icon name={isRotating ? 'Pause' : 'Play'} size={16} />
          </button>
          
          <button
            onClick={resetView}
            className="p-2 bg-surface/80 backdrop-blur-sm text-text-secondary hover:text-text-primary rounded-lg transition-colors duration-200"
            title="Reset View"
          >
            <Icon name="RotateCcw" size={16} />
          </button>
        </motion.div>

        {/* Interaction Hint */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-3 text-center">
            <p className="text-xs text-text-secondary">
              <Icon name="Hand" size={14} className="inline mr-1" />
              Drag to rotate • Scroll to zoom • Touch gestures supported
            </p>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="p-4 bg-surface/30 border-t border-surface-600">
        <div className="space-y-4">
          {/* Zoom Control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary">Zoom</label>
              <span className="text-xs text-text-tertiary">{Math.round(zoom * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full h-2 bg-surface-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Lighting Control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary">Lighting</label>
              <span className="text-xs text-text-tertiary">{lightingAngle}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              step="5"
              value={lightingAngle}
              onChange={(e) => setLightingAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-surface-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-surface-600">
            <button
              onClick={() => setZoom(2)}
              className="flex items-center space-x-1 px-3 py-1 bg-surface-600 hover:bg-surface-500 text-text-secondary hover:text-text-primary rounded-md text-xs transition-colors duration-200"
            >
              <Icon name="ZoomIn" size={12} />
              <span>Close-up</span>
            </button>
            
            <button
              onClick={() => {
                setZoom(1);
                setLightingAngle(45);
              }}
              className="flex items-center space-x-1 px-3 py-1 bg-surface-600 hover:bg-surface-500 text-text-secondary hover:text-text-primary rounded-md text-xs transition-colors duration-200"
            >
              <Icon name="Eye" size={12} />
              <span>Best View</span>
            </button>
            
            <button
              onClick={() => setLightingAngle(90)}
              className="flex items-center space-x-1 px-3 py-1 bg-surface-600 hover:bg-surface-500 text-text-secondary hover:text-text-primary rounded-md text-xs transition-colors duration-200"
            >
              <Icon name="Sun" size={12} />
              <span>Bright</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemViewer3D;