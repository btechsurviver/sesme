import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, HeartHandshake, History, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import assets from '../utils/assets';
import '../styles/Subpages.css';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Award size={24} />,
      title: "Academic Excellence",
      desc: "Striving for the highest levels of scholarship, critical analysis, and intellectual curiosity across all grades."
    },
    {
      icon: <Compass size={24} />,
      title: "Continuous Innovation",
      desc: "Pioneering interactive tech, advanced science experimentation, and coding programs in Birgunj."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Integrity & Honor",
      desc: "Nurturing ethical compasses, truthfulness, and strong character development to build reliable citizens."
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Social Compassion",
      desc: "Encouraging community service, empathy, respect, and mutual support in our diverse student community."
    }
  ];

  const milestones = [
    {
      year: "2058 B.S.",
      title: "Founding & Early Days",
      desc: "Bright Public School was established in Pipra, Birgunj, Parsa, with a vision to provide student-centric quality primary education."
    },
    {
      year: "2065 B.S.",
      title: "Secondary Expansion",
      desc: "Upgraded to full secondary status (up to Grade 10). Graduated the first batch of board students with outstanding regional scores."
    },
    {
      year: "2072 B.S.",
      title: "Higher Secondary Launch (+2)",
      desc: "Inaugurated the Higher Secondary wing (+2 Science and +2 Management) to support students with advanced laboratory setups."
    },
    {
      year: "2078 B.S.",
      title: "Digital Classroom Era",
      desc: "Integrated smart boards, automated libraries, and dedicated computer laboratories with robotics classes."
    },
    {
      year: "2082 B.S.",
      title: "Infrastructure Landmark",
      desc: "Completed our state-of-the-art sports complex, a spacious central seminar hall, and a renovated biology lab block."
    }
  ];

  const leadership = [
    {
      name: "Mr. Ramesh K. Verma",
      role: "Dean of Academics",
      image: assets.teachers[0]
    },
    {
      name: "Mrs. Shanti Chaudhary",
      role: "Vice Principal",
      image: assets.teachers[1]
    },
    {
      name: "Mr. Bikram Adhikari",
      role: "Head of Science Department",
      image: assets.teachers[2]
    },
    {
      name: "Mrs. Anjali Keshri",
      role: "Management Coordinator",
      image: assets.teachers[3]
    }
  ];

  return (
    <>
      <SEO 
        title="About BPS" 
        description="Learn about the history, vision, core values, leadership board, and infrastructure of Bright Public School, Birgunj, Nepal."
      />

      {/* Hero Header */}
      <section className="subpage-hero">
        <div 
          className="subpage-hero-bg" 
          style={{ backgroundImage: `url(${assets.campus[1]})` }}
        />
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>About Our School</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="active">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overview-text"
            >
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-md) 0' }}>
                <span className="subtitle">Our Vision</span>
                <h2>To Shape Globally Competent Thinkers</h2>
              </div>
              <p>
                Our core vision is to build an educational ecosystem that nurtures curiosity and analytical thinking. We aspire to empower BPS students with values, skills, and knowledge that translate into constructive contributions on a global stage.
              </p>
              <p>
                By blending scientific curiosity with ethical leadership, we prepare our scholars to tackle complex, modern world challenges and pioneer solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overview-text"
              style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}
            >
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-md) 0' }}>
                <span className="subtitle" style={{ color: 'var(--color-gold)' }}>Our Mission</span>
                <h2 style={{ color: 'var(--color-white)' }}>Provide Innovative, Balanced Learning</h2>
              </div>
              <p style={{ color: 'var(--color-ivory-dark)' }}>
                We are on a mission to offer comprehensive, high-standard schooling. We provide:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', color: 'var(--color-ivory-dark)', listStyle: 'disc', paddingLeft: '1.2rem' }}>
                <li>Dedicated research guidance and analytical project-based studies.</li>
                <li>Qualified subject teachers with high pedagogical expertise.</li>
                <li>A vibrant environment for extracurricular activities (sports, debates, arts).</li>
                <li>Safe, inclusive, and well-designed school infrastructure.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">The Foundations</span>
            <h2>Our Core Values</h2>
            <p>These values serve as the guiding principles that govern our interactions, curriculum, and leadership decisions.</p>
          </div>

          <div className="why-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="why-icon-wrapper">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History (Timeline) */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Journey</span>
            <h2>Our Legacy & Milestones</h2>
            <p>From a modest local school to a leading private academy in Parsa District, discover how BPS has grown.</p>
          </div>

          <div style={{ position: 'relative', marginTop: '3rem' }}>
            <div className="timeline-line" />
            
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-badge" />
                <div className="timeline-date">{m.year}</div>
                <div className="timeline-content-card">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle" style={{ color: 'var(--color-gold)' }}>The Pillars</span>
            <h2 style={{ color: 'var(--color-white)' }}>Academic Leadership</h2>
            <p style={{ color: 'var(--color-ivory-dark)' }}>Meet the key officers and advisory guides driving the pedagogical excellence at Bright Public School.</p>
          </div>

          <div className="leaders-grid">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                className="leader-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="leader-photo-wrapper">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Infrastructure</span>
            <h2>Our Modern Campus Setup</h2>
            <p>We believe learning environments shape thinking. BPS campus is engineered to support deep analytical studies and high physical development.</p>
          </div>

          <div className="overview-grid">
            <div className="overview-text">
              <p>
                Bright Public School operates on a spacious, secure campus designed to separate academic blocks from athletic arenas. This minimizes noise distraction and guarantees structured layouts for various age groups.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                  <Building2 size={24} className="text-orange" />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Advanced Laboratory Block</h4>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Independent labs for chemistry, physics, and computer instruction.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                  <History size={24} className="text-orange" />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Modern Seminar Space</h4>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Fully air-conditioned multipurpose hall with sound systems for assemblies.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
            >
              <img src={assets.campus[2]} alt="BPS Infrastructure Building" style={{ borderRadius: 'var(--radius-md)', height: '200px', width: '100%', objectFit: 'cover' }} loading="lazy" />
              <img src={assets.campus[3]} alt="BPS Infrastructure Playground" style={{ borderRadius: 'var(--radius-md)', height: '200px', width: '100%', objectFit: 'cover', marginTop: '20px' }} loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
