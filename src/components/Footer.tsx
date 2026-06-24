import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo/logo.png';
import '../styles/Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand and Motto */}
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src={logo} alt="Bright Public School Logo" className="footer-logo" />
              <div>
                <span className="footer-school-name">Bright Public School</span>
                <div className="footer-school-location">Birgunj, Nepal</div>
              </div>
            </div>
            <div className="footer-motto">"Ignite. Innovate. Inspire."</div>
            <p className="footer-brand-desc">
              Empowering students to unlock their full potential. Combining deep academic traditions with modern learning and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <ArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <ArrowRight size={14} /> About BPS
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="footer-link">
                  <ArrowRight size={14} /> Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  <ArrowRight size={14} /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <ArrowRight size={14} /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="footer-title">Academic Programs</h4>
            <ul className="footer-links">
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> Play Group
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> Primary Level
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> Secondary Level
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> +2 Science
                </Link>
              </li>
              <li>
                <Link to="/academics" className="footer-link">
                  <ArrowRight size={14} /> +2 Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>Pipra, Birgunj-14, Parsa, Nepal</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <a href="tel:+97751522000" className="footer-link">+977 51 522000</a>
                  <br />
                  <a href="tel:+97751523456" className="footer-link">+977 51 523456</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@brightpublicschool.edu.np" className="footer-link">
                  info@brightpublicschool.edu.np
                </a>
              </li>
            </ul>

            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            &copy; {currentYear} Bright Public School. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/about" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
