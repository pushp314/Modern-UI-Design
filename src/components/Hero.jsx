import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge badge-primary">🚀 New Generative AI Course Available</span>
          </div>
          
          <h1 className="hero-title fade-in fade-in-delay">
            Master the Future of
            <span className="text-gradient"> Artificial Intelligence</span>
          </h1>
          
          <p className="hero-subtitle fade-in fade-in-delay-2">
            Transform your career with our comprehensive AI & Machine Learning Academy. 
            Learn from industry experts, work on real-world projects, and join the AI revolution.
          </p>
          
          <div className="hero-stats fade-in fade-in-delay-2">
            <div className="stat">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Job Placement Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
          </div>
          
          <div className="hero-actions fade-in fade-in-delay-2">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start Learning Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#courses" className="btn btn-secondary btn-lg">
              Explore Courses
            </a>
          </div>
          
          <div className="hero-features fade-in fade-in-delay-2">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Industry-Expert Instructors</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Hands-on Projects</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Career Support</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual fade-in fade-in-delay">
          <div className="visual-container">
            <div className="ai-brain">
              <div className="brain-node node-1 pulse"></div>
              <div className="brain-node node-2 pulse"></div>
              <div className="brain-node node-3 pulse"></div>
              <div className="brain-node node-4 pulse"></div>
              <div className="brain-connection connection-1"></div>
              <div className="brain-connection connection-2"></div>
              <div className="brain-connection connection-3"></div>
            </div>
            <div className="floating-elements">
              <div className="element element-1">🤖</div>
              <div className="element element-2">⚡</div>
              <div className="element element-3">🧠</div>
              <div className="element element-4">📊</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .hero-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-badge {
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .hero-actions .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .feature-icon {
          color: var(--success-color);
          font-weight: 600;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .ai-brain {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--gradient-primary);
          opacity: 0.1;
        }

        .brain-node {
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }

        .node-1 { top: 20%; left: 30%; }
        .node-2 { top: 30%; right: 25%; }
        .node-3 { bottom: 30%; left: 25%; }
        .node-4 { bottom: 20%; right: 30%; }

        .brain-connection {
          position: absolute;
          height: 2px;
          background: var(--gradient-primary);
          opacity: 0.6;
        }

        .connection-1 {
          top: 25%;
          left: 35%;
          width: 30%;
          transform: rotate(15deg);
        }

        .connection-2 {
          top: 45%;
          left: 30%;
          width: 40%;
          transform: rotate(-20deg);
        }

        .connection-3 {
          bottom: 35%;
          left: 30%;
          width: 35%;
          transform: rotate(45deg);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .element {
          position: absolute;
          font-size: 2rem;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          top: 20%;
          right: 10%;
          animation-delay: 1.5s;
        }

        .element-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 3s;
        }

        .element-4 {
          bottom: 10%;
          right: 15%;
          animation-delay: 4.5s;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-features {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 0 auto;
          }

          .visual-container {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-stats {
            gap: 1.5rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;