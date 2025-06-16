import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificateGallery = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center">
          <Icon name="Shield" size={20} color="#F59E0B" />
        </div>
        <div>
          <h2 className="text-2xl font-cinzel font-bold text-text-primary">
            Authenticity Certificates
          </h2>
          <p className="text-text-secondary">
            Verified by certified gemological institutes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-surface/30 rounded-xl p-6 border border-surface-600 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            onClick={() => openCertificate(certificate)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-24 bg-surface-600 rounded-lg overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={certificate.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
                  {certificate.type}
                </h3>
                <p className="text-sm text-accent font-mono mb-2">
                  {certificate.number}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {certificate.details}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-text-tertiary group-hover:text-primary transition-colors duration-200" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-200 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeCertificate}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden cosmic-shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-600">
                <div>
                  <h3 className="text-xl font-cinzel font-bold text-text-primary">
                    {selectedCertificate.type}
                  </h3>
                  <p className="text-accent font-mono text-sm">
                    {selectedCertificate.number}
                  </p>
                </div>
                <button
                  onClick={closeCertificate}
                  className="p-2 hover:bg-surface-600 rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-text-secondary" />
                </button>
              </div>
              
              {/* Certificate Image */}
              <div className="p-6">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.type}
                    className="w-full h-auto"
                  />
                  
                  {/* Zoom Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Icon name="ZoomIn" size={16} color="white" />
                    </div>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="mt-6 p-4 bg-surface/30 rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-2">Certificate Details</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {selectedCertificate.details}
                  </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="Shield" size={16} />
                    <span className="text-sm font-medium">Verified Authentic</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors duration-200">
                    <Icon name="Download" size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificateGallery;