import React from 'react';

const Footer = () => {
  const footerLinks = {
    courses: [
      { name: 'Machine Learning Fundamentals', href: '#courses' },
      { name: 'Deep Learning Specialization', href: '#courses' },
      { name: 'Generative AI Mastery', href: '#courses' },
      { name: 'AI Ethics & Governance', href: '#courses' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Instructors', href: '#instructors' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Community Forum', href: '#community' },
      { name: 'Student Resources', href: '#resources' },
      { name: 'Technical Requirements', href: '#requirements' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refunds' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'Discord', href: '#', icon: '💬' },
    { name: 'GitHub', href: '#', icon: '👨‍💻' }
  ];

  const achievements = [
    { number: '10,000+', label: 'Students Trained' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '500+', label: 'Hiring Partners' },
    { number: '4.9/5', label: 'Student Rating' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-icon">🤖</span>
              <span className="logo-text">AI Academy</span>
            </div>
            <p className="brand-description">
              Transforming careers through comprehensive AI and Machine Learning education. 
              Join thousands of professionals who've successfully transitioned into AI roles.
            </p>
            
            <div className="achievements-mini">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-mini">
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className="social-link" title={social.name}>
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Courses</h4>
              <ul>
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated with AI Trends</h3>
            <p>Get weekly insights, course updates, and career tips delivered to your inbox.</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="btn btn-primary newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 AI Academy. All rights reserved.</p>
              <p>Empowering the next generation of AI professionals.</p>
            </div>
            
            <div className="footer-badges">
              <div className="badge-item">
                <span className="badge-icon">🏆</span>
                <span>Top Rated AI Course</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🔒</span>
                <span>Secure & Trusted</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✅</span>
                <span>Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-dark);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          max-width: 400px;
        }

        .achievements-mini {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .achievement-mini {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .achievement-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.25rem;
        }

        .achievement-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .social-links h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.25rem;
        }

        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .link-group h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .link-group ul {
          list-style: none;
          padding: 0;
        }

        .link-group li {
          margin-bottom: 0.75rem;
        }

        .link-group a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .link-group a:hover {
          color: var(--primary-color);
        }

        .footer-newsletter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }

        .newsletter-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          min-width: 400px;
        }

        .newsletter-input {
          flex: 1;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-btn {
          white-space: nowrap;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .footer-badges {
          display: flex;
          gap: 2rem;
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .badge-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .achievements-mini {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }

          .footer-newsletter {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .newsletter-form {
            min-width: auto;
            width: 100%;
            max-width: 400px;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .footer-badges {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }

          .achievements-mini {
            grid-template-columns: repeat(2, 1fr);
          }

          .newsletter-form {
            flex-direction: column;
          }

          .footer-badges {
            flex-direction: column;
            gap: 1rem;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;