import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">AI Academy</span>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-outline">
              Free Consultation
            </a>
            <a href="#pricing" className="btn btn-primary">
              Enroll Now
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-actions {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;