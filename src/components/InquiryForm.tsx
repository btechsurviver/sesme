import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/InquiryForm.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  program?: string;
  message?: string;
}

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.program) tempErrors.program = 'Please select a program of interest.';
    if (!formData.message.trim()) tempErrors.message = 'Please enter your message.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        message: '',
      });
    }, 1800);
  };

  return (
    <div className="inquiry-card">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="inquiry-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inquiry-form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`form-control ${errors.fullName ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={`form-control ${errors.email ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+977 9800000000"
                  className={`form-control ${errors.phone ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Program of Interest */}
              <div className="form-group">
                <label htmlFor="program" className="form-label">Program of Interest</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`form-control ${errors.program ? 'error' : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a Program</option>
                  <option value="playgroup">Play Group / Kindergarten</option>
                  <option value="primary">Primary (Grade 1 - 5)</option>
                  <option value="secondary">Secondary (Grade 6 - 10)</option>
                  <option value="science">+2 Science (Grade 11 - 12)</option>
                  <option value="management">+2 Management (Grade 11 - 12)</option>
                </select>
                {errors.program && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.program}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="form-group inquiry-full-width">
                <label htmlFor="message" className="form-label">Inquiry Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter details about your inquiry (e.g. previous schooling, academic interests, admissions timeline)..."
                  className={`form-control ${errors.message ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
              </div>

              <div className="inquiry-full-width">
                <button
                  type="submit"
                  className="btn submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Processing Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            className="success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="success-icon-wrapper">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="success-title">Inquiry Submitted</h3>
            <p className="success-text">
              Thank you for your interest in Bright Public School. Our admissions officer will review your inquiry and contact you shortly at the email/phone provided.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="btn btn-outline"
              style={{ marginTop: '1.5rem' }}
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
