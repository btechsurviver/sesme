import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Image as ImageIcon } from 'lucide-react';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import assets from '../utils/assets';
import '../styles/Subpages.css';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'All',
    'Campus',
    'Classrooms',
    'Students',
    'Teachers',
    'Sports',
    'Events',
    'Library'
  ];

  // Map files into typed categories
  const allImages: GalleryItem[] = [
    // Campus
    ...assets.campus.map((src, i) => ({
      src,
      alt: `Bright Public School Campus Block ${i + 1}`,
      category: 'Campus',
      title: `Campus Layout ${i + 1}`
    })),
    // Classrooms
    ...assets.classrooms.map((src, i) => ({
      src,
      alt: `Modern Classrooms at BPS ${i + 1}`,
      category: 'Classrooms',
      title: `Smart Classroom ${i + 1}`
    })),
    // Students
    ...assets.students.map((src, i) => ({
      src,
      alt: `BPS Student activities and classroom engagement ${i + 1}`,
      category: 'Students',
      title: `Student Engagement ${i + 1}`
    })),
    // Teachers
    ...assets.teachers.map((src, i) => ({
      src,
      alt: `Bright Public School Teachers and Educators ${i + 1}`,
      category: 'Teachers',
      title: `Faculty Board Member ${i + 1}`
    })),
    // Sports
    ...assets.sports.map((src, i) => ({
      src,
      alt: `Sports events and basketball activities ${i + 1}`,
      category: 'Sports',
      title: `Sports Achievement ${i + 1}`
    })),
    // Events
    ...assets.events.map((src, i) => ({
      src,
      alt: `BPS Annual Day and Cultural Exhibition ${i + 1}`,
      category: 'Events',
      title: `Annual Event Highlight ${i + 1}`
    })),
    // Library
    ...assets.library.map((src, i) => ({
      src,
      alt: `BPS Academic Library resources and reading centers ${i + 1}`,
      category: 'Library',
      title: `Central Library ${i + 1}`
    }))
  ];

  const filteredImages = activeFilter === 'All'
    ? allImages
    : allImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO 
        title="Gallery" 
        description="Browse the photo gallery of Bright Public School, Birgunj. Highlights of campus life, classrooms, faculty, sports competitions, and annual day celebrations."
      />

      {/* Hero Header */}
      <section className="subpage-hero">
        <div 
          className="subpage-hero-bg" 
          style={{ backgroundImage: `url(${assets.gallery[2]})` }}
        />
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Photo Gallery</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="active">Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">School Chronicles</span>
            <h2>Moments & Highlights</h2>
            <p>Use the filters below to browse various categories of school infrastructure, sports meets, events, and classroom activities.</p>
          </div>

          {/* Category Filter Buttons */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setLightboxIndex(0); // Reset index on filter change
                }}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Masonry Grid */}
          <motion.div 
            className="gallery-masonry-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  className="gallery-masonry-item"
                  key={`${img.category}-${index}-${img.src}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-masonry-overlay">
                    <div style={{ textAlign: 'center' }}>
                      <Eye size={28} style={{ color: 'var(--color-white)', marginBottom: '8px' }} />
                      <div style={{ fontSize: '0.9rem', color: 'var(--color-white)', fontWeight: 600 }}>{img.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{img.category}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--color-charcoal-muted)' }}>
              <ImageIcon size={48} style={{ opacity: 0.4, marginBottom: '10px' }} />
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </>
  );
};

export default Gallery;
