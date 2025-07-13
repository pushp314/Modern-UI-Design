import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        goals: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const ctaOptions = [
    {
      icon: '📞',
      title: 'Free Consultation',
      description: 'Get personalized advice on your AI career path',
      action: 'Book Now',
      highlight: true
    },
    {
      icon: '🎓',
      title: 'Course Enrollment',
      description: 'Start your AI journey with our comprehensive courses',
      action: 'Enroll Today',
      highlight: false
    },
    {
      icon: '📧',
      title: 'Newsletter',
      description: 'Stay updated with the latest AI trends and opportunities',
      action: 'Subscribe',
      highlight: false
    }
  ];

  const benefits = [
    'Personalized learning path recommendation',
    'Career transition strategy session',
    'Industry insights and salary expectations',
    'Access to exclusive resources and community',
    'No obligation - completely free consultation'
  ];

  return (
    <section id="contact" className="section bg-dark">
      <div className="container">
        <div className="cta-content">
          <div className="cta-header text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Career with <span className="text-gradient">AI?</span>
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              Take the first step towards your AI career. Book a free consultation with our experts 
              and discover how our programs can help you achieve your goals.
            </p>
          </div>

          <div className="cta-main">
            <div className="consultation-form">
              <div className="form-header">
                <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Consultation</h3>
                <p className="text-light mb-6">
                  Get personalized guidance from our AI career experts. No sales pressure, just valuable insights.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="consultation-form-fields">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="experience">Current Experience Level</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your level</option>
                        <option value="beginner">Complete Beginner</option>
                        <option value="some-programming">Some Programming Experience</option>
                        <option value="data-science">Data Science Background</option>
                        <option value="ml-experience">Some ML Experience</option>
                        <option value="advanced">Advanced Practitioner</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goals">What are your AI career goals?</label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Tell us about your career aspirations, what you hope to achieve with AI..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Consultation Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-btn">
                    Book Free Consultation
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="form-note">
                    By submitting this form, you agree to receive communications from AI Academy. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>Thank You!</h3>
                  <p>
                    Your consultation request has been submitted successfully. 
                    Our team will contact you within 24 hours to schedule your free session.
                  </p>
                  <div className="next-steps">
                    <h4>What happens next?</h4>
                    <ul>
                      <li>We'll review your information and goals</li>
                      <li>A career advisor will contact you to schedule</li>
                      <li>You'll receive a calendar invite for your consultation</li>
                      <li>Get ready to explore your AI career possibilities!</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="cta-benefits">
              <div className="benefits-card">
                <h4 className="text-xl font-bold text-white mb-4">What You'll Get in Your Free Consultation</h4>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="quick-actions">
                <h4 className="text-lg font-bold text-white mb-4">Other Ways to Get Started</h4>
                <div className="action-buttons">
                  {ctaOptions.slice(1).map((option, index) => (
                    <button key={index} className="action-btn">
                      <span className="action-icon">{option.icon}</span>
                      <div className="action-content">
                        <div className="action-title">{option.title}</div>
                        <div className="action-description">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="contact-info">
                <h4 className="text-lg font-bold text-white mb-4">Need Immediate Help?</h4>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="contact-icon">📞</span>
                    <div>
                      <div className="contact-label">Call Us</div>
                      <div className="contact-value">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="contact-method">
                    <span className="contact-icon">📧</span>
                    <div>
                      <div className="contact-label">Email Us</div>
                      <div className="contact-value">hello@aiacademy.com</div>
                    </div>
                  </div>
                  <div className="contact-method">
                    <span className="contact-icon">💬</span>
                    <div>
                      <div className="contact-label">Live Chat</div>
                      <div className="contact-value">Available 9 AM - 6 PM EST</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-main {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .consultation-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-header h3 {
          color: white;
        }

        .consultation-form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.15);
        }

        .form-group select option {
          background: var(--bg-dark);
          color: white;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .form-note {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-top: 1rem;
          line-height: 1.5;
        }

        .success-message {
          text-align: center;
          color: white;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .success-message h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .success-message p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .next-steps {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: left;
        }

        .next-steps h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .next-steps ul {
          list-style: none;
          padding: 0;
        }

        .next-steps li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .next-steps li::before {
          content: '→';
          color: var(--primary-color);
          font-weight: 600;
        }

        .cta-benefits {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .benefits-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .benefits-list {
          list-style: none;
          padding: 0;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .benefit-check {
          color: var(--success-color);
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .quick-actions {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
        }

        .action-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .action-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .action-description {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .contact-value {
          color: white;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .cta-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .consultation-form {
            padding: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .cta-benefits {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .consultation-form {
            padding: 1.5rem;
          }

          .benefits-card,
          .quick-actions,
          .contact-info {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;