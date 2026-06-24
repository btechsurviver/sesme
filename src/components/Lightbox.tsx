import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Lightbox.css';

interface LightboxImage {
  src: string;
  alt: string;
  category?: string;
  title?: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button
            className="lightbox-btn lightbox-close"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              className="lightbox-btn lightbox-nav lightbox-prev"
              onClick={onPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <motion.div
            className="lightbox-image-container"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <img
              src={currentImg.src}
              alt={currentImg.alt}
              className="lightbox-img"
            />
          </motion.div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              className="lightbox-btn lightbox-nav lightbox-next"
              onClick={onNext}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Info details */}
          <div className="lightbox-info">
            <h4 className="lightbox-title">
              {currentImg.title || currentImg.alt || `Gallery Image`}
            </h4>
            {currentImg.category && (
              <span className="lightbox-meta">{currentImg.category}</span>
            )}
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
