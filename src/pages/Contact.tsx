import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';
import InquiryForm from '../components/InquiryForm';
import assets from '../utils/assets';
import '../styles/Subpages.css';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin size={20} />,
      title: "School Address",
      details: "Pipra, Birgunj-14, Parsa, Nepal"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone Numbers",
      details: "+977-51-522000, +977-51-523456"
    },
    {
      icon: <Mail size={20} />,
      title: "Email Addresses",
      details: "info@brightpublicschool.edu.np, admissions@brightpublicschool.edu.np"
    },
    {
      icon: <Clock size={20} />,
      title: "Visiting Hours",
      details: "Sunday - Friday: 9:00 AM - 4:00 PM"
    }
  ];

  const emergencyContacts = [
    { label: "Administration Reception", tel: "+977-51-522000" },
    { label: "Principal's Secretary", tel: "+977-51-522001" },
    { label: "Accounts & Billing Desk", tel: "+977-51-522002" },
    { label: "Student Healthcare Clinic", tel: "+977-51-522003" },
    { label: "Security & Guard Post", tel: "+977-51-522004" }
  ];

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Bright Public School, Birgunj. View our physical address, phone registry, administrative email, emergency contact numbers, and school location map."
      />

      {/* Hero Header */}
      <section className="subpage-hero">
        <div 
          className="subpage-hero-bg" 
          style={{ backgroundImage: `url(${assets.campus[3]})` }}
        />
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Contact Us</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="active">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ marginBottom: 'var(--space-xl)' }}>
          <div className="section-header">
            <span className="subtitle">Get In Touch</span>
            <h2>We Are Here To Assist You</h2>
            <p>Reach out to us for admission details, student performance consultations, or official partnerships.</p>
          </div>

          <div className="contact-grid">
            {/* Information Panel */}
            <div className="contact-info-panel">
              <div className="contact-details-box">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="contact-detail-row">
                    <div className="contact-detail-icon">{detail.icon}</div>
                    <div className="contact-detail-row-content">
                      <h3 style={{ fontSize: '0.8rem', color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                        {detail.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-navy)', fontWeight: 500 }}>{detail.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contacts Box */}
              <div className="emergency-contact-box">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <ShieldAlert size={24} style={{ color: 'var(--color-gold)' }} />
                  <h3 style={{ margin: 0 }}>Emergency Call List</h3>
                </div>
                <p>For immediate assistance or security/medical alerts, please call the corresponding office lines directly.</p>
                <div className="emergency-list">
                  {emergencyContacts.map((contact, idx) => (
                    <div key={idx} className="emergency-item">
                      <span>{contact.label}</span>
                      <strong>
                        <a href={`tel:${contact.tel.replace(/-/g, '')}`} style={{ color: 'var(--color-gold-light)' }}>
                          {contact.tel}
                        </a>
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form Card */}
            <div>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '5px' }}>
                  Send A Message
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>
                  Use this form to send general queries or administrative messages directly to our email registry.
                </p>
              </div>
              <InquiryForm />
            </div>
          </div>
        </div>

        {/* EDGE TO EDGE FULL WIDTH MAP */}
        <div className="full-bleed-map-wrapper" style={{ marginTop: 'var(--space-xl)' }}>
          <iframe 
            title="Bright Public School Google Map Location Page"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4379361738734!2d84.8872589!3d27.016335199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935451fa19fd31%3A0x6342817cc399bc9!2sBright%20Public%20School%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1719234567890!5m2!1sen!2snp" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
