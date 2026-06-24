import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop, Compass, ClipboardCheck, Microscope } from 'lucide-react';
import SEO from '../components/SEO';
import assets from '../utils/assets';
import '../styles/Subpages.css';

export const Academics: React.FC = () => {
  const levels = [
    {
      title: "Kindergarten (Play Group - UKG)",
      subtitle: "Foundational Steps",
      desc: "An inquiry-based play curriculum focused on building language foundations, sensory coordination, basic mathematical awareness, and social camaraderie in safe classroom setups.",
      details: ["Ages: 2.5 - 5 Years", "Activity-driven learning", "Specially designed toy and game corners", "Caring helper staff"]
    },
    {
      title: "Primary School (Grade 1 - 5)",
      subtitle: "Basic Competencies",
      desc: "Strengthens literacy and numerical reasoning. Introduces elementary sciences, computer operations, social studies, and English/Nepali language fluency.",
      details: ["Continuous assessment", "Basics of computer programming", "Physical education & arts", "Spelling bees and public speech drills"]
    },
    {
      title: "Secondary School (Grade 6 - 10)",
      subtitle: "Academic Rigor",
      desc: "Rigorous scholarly preparations aligning with the National Examinations Board curriculum. High focus on advanced science laboratory investigations, algebra, literature study, and computer operations.",
      details: ["Preparation for SEE (Grade 10)", "Weekly science experiments", "Extensive computer coding blocks", "Debate & speech championships"]
    },
    {
      title: "+2 Higher Secondary Science",
      subtitle: "Grade 11 - 12 (NEB)",
      desc: "Highly specialized path for students targeting medical, engineering, or computing careers. Modern laboratory layouts for Physics, Chemistry, and Zoology/Botany experiments.",
      details: ["Physics & Chemistry lab practicals", "Pre-engineering mentorship", "Entrance prep supports", "Experienced guest lecturers"]
    },
    {
      title: "+2 Higher Secondary Management",
      subtitle: "Grade 11 - 12 (NEB)",
      desc: "Prepares prospective entrepreneurs and business professionals. Focuses on accountancy depth, business mathematics, computer science theory, marketing, and economics.",
      details: ["Business layout projects", "Interactive accounting seminars", "Basics of digital economics", "Industry expert interactions"]
    }
  ];

  const methods = [
    {
      icon: <Microscope size={24} />,
      title: "Practical Science & Laboratory Inquiry",
      desc: "We believe physics and chemistry are learned in laboratories, not just in textbooks. Students perform research-based experiments regularly."
    },
    {
      icon: <Laptop size={24} />,
      title: "Smart AV & Digitized Instruction",
      desc: "Our educators utilize interactive smart boards and digital slideshows to illustrate complex scientific processes and historical events visually."
    },
    {
      icon: <Compass size={24} />,
      title: "Interactive Team Challenges",
      desc: "Encouraging collaborative skills through engineering assemblies, mathematical matches, and group business pitch presentations."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Regular Academic Mentoring",
      desc: "Continuous counselor counseling to support students, guiding them through psychological developmental phases and career paths."
    }
  ];

  return (
    <>
      <SEO 
        title="Academics" 
        description="Explore the academic levels, innovative teaching methodologies, learning environments, and assessment structures at Bright Public School."
      />

      {/* Hero Header */}
      <section className="subpage-hero">
        <div 
          className="subpage-hero-bg" 
          style={{ backgroundImage: `url(${assets.campus[2]})` }}
        />
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Academic Programs</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="active">Academics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Structured Curriculum</span>
            <h2>Our Educational Tiers</h2>
            <p>From pre-primary steps up to higher secondary boards, discover the structured levels we offer at Bright Public School.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginTop: '2rem' }}>
            {levels.map((level, i) => (
              <motion.div
                key={i}
                className="overview-grid"
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-ivory-dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-lg)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="overview-text">
                  <span className="subtitle" style={{ fontSize: '0.75rem', color: 'var(--color-orange)' }}>
                    {level.subtitle}
                  </span>
                  <h3 style={{ fontSize: '1.65rem', marginBottom: 'var(--space-xs)' }}>{level.title}</h3>
                  <p>{level.desc}</p>
                </div>

                <div 
                  style={{ 
                    backgroundColor: 'var(--color-ivory)', 
                    padding: 'var(--space-md)', 
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--color-gold)'
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-navy)', marginBottom: 'var(--space-xs)' }}>
                    Key Highlights
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                    {level.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-orange)', borderRadius: '50%' }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle" style={{ color: 'var(--color-gold)' }}>Pedagogical Model</span>
            <h2 style={{ color: 'var(--color-white)' }}>Teaching Methodology</h2>
            <p style={{ color: 'var(--color-ivory-dark)' }}>We move away from rote learning, focusing on cognitive understanding and practical skills application.</p>
          </div>

          <div className="why-grid">
            {methods.map((method, i) => (
              <motion.div
                key={i}
                className="why-card"
                style={{ backgroundColor: 'rgba(250, 248, 245, 0.03)', border: '1px solid rgba(250, 248, 245, 0.08)' }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="why-icon-wrapper" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-gold-light)' }}>
                  {method.icon}
                </div>
                <h3 style={{ color: 'var(--color-white)' }}>{method.title}</h3>
                <p style={{ color: 'var(--color-ivory-dark)', fontSize: '0.92rem' }}>{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment & Assessment */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            {/* Learning Environment */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overview-text"
            >
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-md) 0' }}>
                <span className="subtitle">Nurturing Environment</span>
                <h2>Learning Environment</h2>
              </div>
              <p>
                Our campus features spacious classrooms equipped with ergonomic seating. By keeping classroom sizes small (maximum of 30 students per section), we guarantee that every student gets direct attention from our instructors.
              </p>
              <p>
                We enforce a strict zero-tolerance code on bullying or exclusion. A dedicated health care setup is available for medical emergencies, and counselor panels support student mental wellness.
              </p>
            </motion.div>

            {/* Assessment Approach */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="overview-text"
              style={{ backgroundColor: 'var(--color-ivory-dark)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)' }}
            >
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-md) 0' }}>
                <span className="subtitle">Progress Evaluation</span>
                <h2>Assessment Approach</h2>
              </div>
              <p>
                We employ continuous diagnostic testing alongside traditional term boards to evaluate progress:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span className="text-orange" style={{ fontWeight: 'bold' }}>•</span>
                  <span><strong>Weekly Tests:</strong> Quick reviews to address learning gaps immediately.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span className="text-orange" style={{ fontWeight: 'bold' }}>•</span>
                  <span><strong>Practical Term Marks:</strong> Up to 30% of marks are reserved for laboratory performance and project file reviews.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span className="text-orange" style={{ fontWeight: 'bold' }}>•</span>
                  <span><strong>Portfolio Reviews:</strong> Evaluating speaking fluency, athletic development, and co-curricular projects.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academics;
