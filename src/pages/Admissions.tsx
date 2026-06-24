import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ClipboardList, UserCheck, CalendarCheck, ChevronDown, Check } from 'lucide-react';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import assets from '../utils/assets';
import '../styles/Subpages.css';

export const Admissions: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      icon: <ClipboardList size={22} />,
      title: "1. Inquiry Submission",
      desc: "Fill the online inquiry form below or visit the Pipra campus administration desk to collect a registration card."
    },
    {
      icon: <FileText size={22} />,
      title: "2. Entrance Evaluation",
      desc: "Prospective scholars (Grades 1-12) sit for a diagnostic entrance exam covering English, Science, and Mathematics."
    },
    {
      icon: <UserCheck size={22} />,
      title: "3. Interactive Meeting",
      desc: "An informal interaction between our academic coordinators, the student, and the parents to align learning expectations."
    },
    {
      icon: <CalendarCheck size={22} />,
      title: "4. Final Verification",
      desc: "Submit previous school transfers, certificates, and birth certificates, settle school fees, and complete uniform layouts."
    }
  ];

  const documents = [
    "Previous School's Original Transfer Certificate (LC)",
    "Copy of Previous Grade's Marksheet / Progress Report Card",
    "Copy of Student's Birth Certificate (National Registration)",
    "Three recent passport-sized color photographs of the student",
    "One passport-sized photograph of each parent/guardian",
    "Copy of Parent's Citizenship Card"
  ];

  const faqs = [
    {
      q: "What is the admissions timeline at Bright Public School?",
      a: "Admissions for Kindergarten (Play Group - UKG) and Grades 1-9 open in Falgun/Chaitra (February - March) for the academic year beginning in Baisakh (mid-April). For +2 Science and Management, registrations open immediately following the publication of SEE exam results (usually June)."
    },
    {
      q: "Does BPS provide school transport facilities?",
      a: "Yes, we run school bus routes covering most residential areas inside Birgunj, Pipra, Alau, Bahuari, Powerhouse, and surrounding suburbs. Transport routing information and fee matrices can be acquired from the administrative office."
    },
    {
      q: "Are hostel accommodations available?",
      a: "Yes, we provide separate hostel accommodations for girls and boys under the close supervision of resident wardens. Hostels are available for students in Grade 6 and above, including +2 Science and Management scholars."
    },
    {
      q: "Do you offer scholarships or financial aid?",
      a: "Yes, BPS offers academic scholarships based on entrance test performance and previous SEE/term results. We also award sports/extra-curricular scholarships for students with district or national records. Targeted financial aid is available for underprivileged backgrounds upon verification."
    },
    {
      q: "What is the fee structure for new admissions?",
      a: "Our fee structure is competitive and reflects the premium academic facilities we offer. Details regarding monthly tuition fees, admission charges, security deposits, and laboratory costs are provided at the school reception desk upon inquiry."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Admissions" 
        description="Learn about the admission process, required enrollment documentation, school fees, and frequently asked questions at Bright Public School."
      />

      {/* Hero Header */}
      <section className="subpage-hero">
        <div 
          className="subpage-hero-bg" 
          style={{ backgroundImage: `url(${assets.campus[0]})` }}
        />
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Admissions</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="active">Admissions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Join BPS</span>
            <h2>Our Admissions Process</h2>
            <p>We make enrollment smooth and transparent. Follow these structured steps to secure your child's placement.</p>
          </div>

          <div className="why-grid" style={{ marginTop: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="why-icon-wrapper">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)' }}>
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
                <span className="subtitle" style={{ color: 'var(--color-gold)' }}>Enrollment Requirements</span>
                <h2 style={{ color: 'var(--color-white)' }}>Required Documents</h2>
              </div>
              <p style={{ color: 'var(--color-ivory-dark)' }}>
                To complete the admission profile, the school registrar requires physical copies of these items. Please prepare them before the interactive meeting.
              </p>
            </motion.div>

            <div 
              style={{ 
                backgroundColor: 'rgba(250, 248, 245, 0.05)', 
                padding: 'var(--space-lg)', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(250, 248, 245, 0.1)'
              }}
            >
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {documents.map((doc, idx) => (
                  <motion.li 
                    key={idx} 
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--color-ivory-dark)' }}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(197, 160, 89, 0.2)', 
                        color: 'var(--color-gold-light)', 
                        flexShrink: 0,
                        marginTop: '3px'
                      }}
                    >
                      <Check size={12} />
                    </span>
                    <span>{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online Inquiry Form */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }} id="inquiry-form-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="subtitle">Online Registration</span>
            <h2>Submit An Admission Inquiry</h2>
            <p>Have questions or want to register? Fill out this secure, premium form, and our registrar will get back to you within 24 hours.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Common Questions</span>
            <h2>Admissions FAQ</h2>
            <p>Find answers to common questions about enrollment dates, transport, hostels, and scholastics.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-chevron" size={20} />
                </button>
                
                {activeFaq === idx && (
                  <motion.div 
                    className="faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-content-inner">
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
