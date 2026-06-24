import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, Users, BookOpen, Trophy, 
  MapPin, Phone, Mail,
  Sparkles, ShieldCheck, UserCheck, GraduationCap, Eye
} from 'lucide-react';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import assets from '../utils/assets';
import '../styles/Home.css';

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ 
  value, 
  suffix = '', 
  duration = 2 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Testimonials Data
  const testimonials = [
    {
      quote: "Bright Public School provides an unparalleled academic foundation. The emphasis on innovation and critical thinking prepared me for my higher education journey at top international universities. BPS is truly a benchmark of excellence.",
      author: "Aayush Shrestha",
      desc: "Alumnus (Software Engineer, Tech Lead)"
    },
    {
      quote: "As a parent, I've seen my children flourish not just academically, but as confident, responsible individuals. The qualified faculty, state-of-the-art facilities, and disciplined environment make BPS the best decision for any parent.",
      author: "Dr. Sunita Agrawal",
      desc: "Parent (Senior Consultant Pediatrician)"
    },
    {
      quote: "At BPS, we do not simply follow a syllabus; we ignite curiosity, innovate our pedagogical practices, and inspire the leaders of tomorrow. Our school community thrives on collaboration and creative leadership.",
      author: "Prof. Ram Prasad Chaudhary",
      desc: "Academic Advisory Board Member"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Gallery Source Mapping
  const galleryImages = assets.gallery.map((src, index) => ({
    src,
    alt: `Campus Event and Student Highlights ${index + 1}`,
    category: index % 3 === 0 ? 'Campus' : index % 3 === 1 ? 'Sports' : 'Events',
    title: `Highlight Moment ${index + 1}`
  }));

  const displayedGallery = showAllGallery ? galleryImages : galleryImages.slice(0, 8);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO 
        title="Ignite. Innovate. Inspire." 
        description="Welcome to Bright Public School, Birgunj, Nepal. A premium institution dedicated to nurturing academic excellence, student development, and modern learning."
      />

      {/* --- 1. HERO SECTION (Cinematic Viewport height) --- */}
      <section className="hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url(${assets.campus[0]})` }}
        />
        <div className="hero-overlay" />
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="hero-motto-badge">Ignite • Innovate • Inspire</span>
            <h1 className="hero-title">
              <span>Bright Public School</span>
              Nurturing The Innovators<br />Of Tomorrow.
            </h1>
            <p className="hero-description">
              A premium academic institution in Birgunj, Nepal. Empowering students with modern technologies, scientific curiosity, and a solid moral foundation to excel globally.
            </p>
            <div className="hero-actions">
              <button onClick={() => navigate('/contact')} className="btn btn-primary">
                Admission Inquiry <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/about')} className="btn btn-outline-white">
                Explore Campus
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          >
            <div className="hero-floating-card">
              <img src={assets.campus[1]} alt="Bright Public School Campus Layout" />
              <div className="hero-floating-badge badge-top-left">
                <Sparkles size={14} className="text-gold" />
                <span className="badge-label">Estd.</span>
                <span className="badge-value">2058 B.S.</span>
              </div>
              <div className="hero-floating-badge badge-bottom-right">
                <GraduationCap size={16} className="text-gold" />
                <span className="badge-label">Excellence</span>
                <span className="badge-value">Top Tier</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. SCHOOL OVERVIEW (Split Layout + Stats) --- */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <motion.div 
              className="overview-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-md) 0', maxWidth: '100%' }}>
                <span className="subtitle">School Overview</span>
                <h2>Pioneering Academic Distinction In Birgunj</h2>
              </div>
              <p>
                Established with a vision to revolutionize the education landscape, Bright Public School has stood as a beacon of academic rigor and holism for over two decades. We combine national curricular benchmarks with globally validated inquiry models.
              </p>
              <p>
                From Play Group up to Higher Secondary (+2) in Science and Management, we provide student-centered infrastructure that fosters creative problem-solving, athletic mastery, and digital proficiency.
              </p>
              <button onClick={() => navigate('/about')} className="btn btn-outline" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                Learn More About Us
              </button>
            </motion.div>

            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter value={5} suffix="+" />
                </div>
                <div className="stat-label">Programs Offered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter value={1200} suffix="+" />
                </div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter value={75} suffix="+" />
                </div>
                <div className="stat-label">Qualified Faculty</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter value={40} suffix="+" />
                </div>
                <div className="stat-label">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WHY CHOOSE BPS --- */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">The BPS Advantage</span>
            <h2>Why Choose Bright Public School?</h2>
            <p>Our commitment to comprehensive development and modern academic facilities defines who we are.</p>
          </div>

          <div className="why-grid">
            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="why-icon-wrapper">
                <GraduationCap size={24} />
              </div>
              <h3>Academic Excellence</h3>
              <p>Consistent board results and national rankings driven by rigorous scholarship and tailored teaching methods.</p>
            </motion.div>

            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="why-icon-wrapper">
                <UserCheck size={24} />
              </div>
              <h3>Student Development</h3>
              <p>Nurturing emotional intelligence, debate skills, artistic voice, and ethical reasoning in every student.</p>
            </motion.div>

            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="why-icon-wrapper">
                <Trophy size={24} />
              </div>
              <h3>Sports & Activities</h3>
              <p>Comprehensive athletic complexes supporting football, basketball, table tennis, martial arts, and music blocks.</p>
            </motion.div>

            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="why-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <h3>Modern Learning</h3>
              <p>Smart classrooms, advanced computer layouts, high-end science labs, and fully automated learning resource libraries.</p>
            </motion.div>

            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="why-icon-wrapper">
                <Users size={24} />
              </div>
              <h3>Qualified Faculty</h3>
              <p>Our educators are subject matter specialists, mentors, and innovators trained in proactive pedagogy.</p>
            </motion.div>

            <motion.div 
              className="why-card"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="why-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3>Safe Environment</h3>
              <p>A secure 24/7 guarded campus with continuous CCTV systems and full-time professional first-aid healthcare staff.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. PRINCIPAL MESSAGE --- */}
      <section className="section">
        <div className="container">
          <div className="principal-grid">
            <motion.div 
              className="principal-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="principal-photo-card">
                <img src={assets.principal} alt="Bright Public School Principal" />
                <div className="principal-accent-border" />
              </div>
            </motion.div>

            <motion.div 
              className="principal-message-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="principal-quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </span>
              <h3 className="principal-quote-text">
                "We cultivate an academic sanctuary where students are inspired to challenge assumptions, innovate solutions, and ignite positive global change."
              </h3>
              <p className="principal-body-text">
                Welcome to Bright Public School. Our education philosophy centers on creating critical thinkers, fluent communicators, and compassionate citizens. In the heart of Birgunj, BPS offers a rigorous yet deeply encouraging educational experience designed to help every individual find their unique pathway to success.
              </p>
              <p className="principal-body-text">
                We believe that modern education must evolve. That is why we actively integrate advanced methodologies, science lab research, and technological creativity into our curriculum, preparing students for tomorrow's dynamic challenges.
              </p>
              <div className="principal-signature">
                <div className="principal-name">Principal Name</div>
                <div className="principal-title">Principal, Bright Public School</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 5. ACADEMIC PROGRAMS --- */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-ivory)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle" style={{ color: 'var(--color-gold)' }}>Our Programs</span>
            <h2 style={{ color: 'var(--color-white)' }}>Structured Pathways To Success</h2>
            <p style={{ color: 'var(--color-ivory-dark)' }}>From early steps to higher secondary qualifications, we tailor our education to every developmental milestone.</p>
          </div>

          <div className="programs-grid">
            <div className="program-card" onClick={() => navigate('/academics')}>
              <span className="program-badge">Play Group</span>
              <h3>Kindergarten</h3>
              <p>Nurturing young minds through sensory learning, play-based exploration, and fine motor skills development.</p>
            </div>

            <div className="program-card" onClick={() => navigate('/academics')}>
              <span className="program-badge">Grade 1 - 5</span>
              <h3>Primary Level</h3>
              <p>A comprehensive grounding in literacy, numeracy, environmental sciences, and foundational coding concepts.</p>
            </div>

            <div className="program-card" onClick={() => navigate('/academics')}>
              <span className="program-badge">Grade 6 - 10</span>
              <h3>Secondary Level</h3>
              <p>Rigorous preparations for the national exams, with focus on physics, chemistry, advanced mathematics, and writing.</p>
            </div>

            <div className="program-card" onClick={() => navigate('/academics')}>
              <span className="program-badge">Grade 11 - 12</span>
              <h3>+2 Science</h3>
              <p>Pre-engineering and medical paths featuring state-of-the-art laboratory experimentation and national board rigor.</p>
            </div>

            <div className="program-card" onClick={() => navigate('/academics')}>
              <span className="program-badge">Grade 11 - 12</span>
              <h3>+2 Management</h3>
              <p>Fostering business acumen, accounting depth, computer applications, and economics theory for tomorrow's entrepreneurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. CAMPUS LIFE --- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Campus Experiences</span>
            <h2>Vibrant Life At Bright Public School</h2>
            <p>Our campus is an immersive sanctuary of exploration, competitive sports, research, and collaborative arts.</p>
          </div>

          <div className="campus-grid">
            {/* Sports - Large Column */}
            <div className="campus-item campus-col-2 h-300">
              <img src={assets.sports[0]} alt="Sports Arena BPS" loading="lazy" />
              <div className="campus-overlay">
                <h3>Athletic Mastery</h3>
                <p>Nurturing discipline and teamwork through multiple sports programs.</p>
              </div>
            </div>

            {/* Library - High Row */}
            <div className="campus-item campus-row-2 h-620">
              <img src={assets.library[0]} alt="Library BPS" loading="lazy" />
              <div className="campus-overlay">
                <h3>The Central Library</h3>
                <p>Over 10,000 volumes, digital research stations, and quiet reading areas.</p>
              </div>
            </div>

            {/* Classrooms */}
            <div className="campus-item h-300">
              <img src={assets.classrooms[0]} alt="Smart Classrooms BPS" loading="lazy" />
              <div className="campus-overlay">
                <h3>Interactive Classrooms</h3>
                <p>Advanced teaching boards and clean, open desks.</p>
              </div>
            </div>

            {/* Events */}
            <div className="campus-item h-300">
              <img src={assets.events[0]} alt="School Events BPS" loading="lazy" />
              <div className="campus-overlay">
                <h3>Annual Events</h3>
                <p>Celebrating arts, cultural values, and scientific exhibitions.</p>
              </div>
            </div>

            {/* Student Activities */}
            <div className="campus-item campus-col-2 h-300">
              <img src={assets.students[0]} alt="Student Activities BPS" loading="lazy" />
              <div className="campus-overlay">
                <h3>Co-Curricular Exploration</h3>
                <p>Robotics clubs, science leagues, and debate tournaments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FEATURED GALLERY --- */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Visual Gallery</span>
            <h2>Moments Worth Remembering</h2>
            <p>Take a photographic look at the events, science fairs, sports competitions, and daily activities of BPS.</p>
          </div>

          <div className="gallery-grid">
            {displayedGallery.map((img, index) => (
              <motion.div 
                className="gallery-thumbnail"
                key={index}
                onClick={() => openLightbox(index)}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-thumb-overlay">
                  <Eye size={24} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="gallery-more-container">
            <button 
              onClick={() => setShowAllGallery(!showAllGallery)} 
              className="btn btn-outline"
            >
              {showAllGallery ? 'Show Less' : 'View More Images'}
            </button>
          </div>
        </div>
      </section>

      {/* --- 8. FACILITIES SECTION --- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Campus Infrastructure</span>
            <h2>World Class Facilities For Growth</h2>
            <p>We provide standard facilities designed to give students rich hands-on knowledge and high comfort.</p>
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.library[1]} alt="Modern School Library" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Modern Library</h3>
                <p>Fully automated cataloging system containing physical books, scientific journals, and access to digital study materials.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.classrooms[1]} alt="Physics and Chemistry Science Lab" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Science Lab</h3>
                <p>Advanced equipment for physics, chemistry, and biology research allowing students to conduct experiments practically.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.classrooms[2]} alt="Computer Coding Laboratory" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Computer Lab</h3>
                <p>High-speed internet connections and high-performance desktops designed for computing instruction and robotics training.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.sports[1]} alt="Sports Facilities and Playground" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Sports Complex</h3>
                <p>Basketball court, table-tennis hall, martial arts room, and a spacious playground for soccer and fitness drills.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.events[1]} alt="School Auditorium and Seminar Hall" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Activity Programs</h3>
                <p>Vocal and instrumental music studios, classical dance training rooms, fine arts spaces, and speech/debate clubs.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-image-wrapper">
                <img src={assets.campus[2]} alt="Safe School Security Facility" loading="lazy" />
              </div>
              <div className="facility-card-content">
                <h3>Safe & Secure Campus</h3>
                <p>Comprehensive security personnel, CCTV coverage across campus boundaries, and emergency healthcare response systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. TESTIMONIALS (Carousel) --- */}
      <section className="section testimonials">
        <div className="container">
          <div className="testimonials-container">
            <span className="testimonial-quote-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </span>
            
            <div style={{ minHeight: '160px', display: 'flex', alignItems: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="testimonial-text">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="testimonial-author">
                    <span className="testimonial-author-name">{testimonials[currentTestimonial].author}</span>
                    <span className="testimonial-author-desc">{testimonials[currentTestimonial].desc}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`testimonial-dot ${currentTestimonial === index ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 10. ADMISSION CTA --- */}
      <section className="section admission-cta">
        <div className="container">
          <div className="admission-cta-content">
            <h2>Admissions Are Open for the Academic Year</h2>
            <p>Give your child the foundation of quality, innovative learning. Join the Bright Public School family today.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => navigate('/contact')} className="btn btn-primary">
                Inquire Now
              </button>
              <button onClick={() => navigate('/admissions')} className="btn btn-outline-white">
                Admission Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 11. CONTACT + FULL WIDTH MAP --- */}
      <section className="contact-preview-section">
        <div className="container contact-preview-container">
          <div className="section-header">
            <span className="subtitle">Reach BPS</span>
            <h2>Our Contact Information</h2>
            <p>Get in touch with our administrative office for any queries, visits, or document submissions.</p>
          </div>

          <div className="contact-info-strip">
            <div className="contact-card-mini">
              <div className="contact-card-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-card-content">
                <h3>Our Location</h3>
                <p>Pipra, Birgunj-14, Parsa, Nepal</p>
              </div>
            </div>

            <div className="contact-card-mini">
              <div className="contact-card-icon">
                <Phone size={20} />
              </div>
              <div className="contact-card-content">
                <h3>Call Registry</h3>
                <p>
                  <a href="tel:+97751522000">+977-51-522000</a> / <a href="tel:+97751523456">523456</a>
                </p>
              </div>
            </div>

            <div className="contact-card-mini">
              <div className="contact-card-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-content">
                <h3>Administrative Email</h3>
                <p>
                  <a href="mailto:info@brightpublicschool.edu.np">info@brightpublicschool.edu.np</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EDGE TO EDGE FULL WIDTH MAP */}
        <div className="full-bleed-map-wrapper">
          <iframe 
            title="Bright Public School Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4379361738734!2d84.8872589!3d27.016335199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935451fa19fd31%3A0x6342817cc399bc9!2sBright%20Public%20School%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1719234567890!5m2!1sen!2snp" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Premium Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </>
  );
};

export default Home;
