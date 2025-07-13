import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Industry-Expert Instructors",
      description: "Learn from professionals who've built AI systems at Google, Microsoft, OpenAI, and leading tech companies.",
      stats: "15+ years avg. experience"
    },
    {
      icon: "🛠️",
      title: "Hands-on Project Experience",
      description: "Build real-world AI applications and create a portfolio that showcases your skills to employers.",
      stats: "20+ projects per course"
    },
    {
      icon: "🎯",
      title: "Career Support Services",
      description: "Dedicated career coaching, resume reviews, interview prep, and direct connections to hiring partners.",
      stats: "95% job placement rate"
    },
    {
      icon: "🏆",
      title: "Industry Recognition",
      description: "Our certificates are recognized by top tech companies and our graduates work at leading AI organizations.",
      stats: "500+ hiring partners"
    },
    {
      icon: "🔄",
      title: "Lifetime Learning Access",
      description: "Get lifetime access to course materials, updates, and our exclusive alumni network and community.",
      stats: "Forever access"
    },
    {
      icon: "⚡",
      title: "Cutting-edge Curriculum",
      description: "Stay ahead with courses updated quarterly to include the latest AI breakthroughs and industry trends.",
      stats: "Updated every 3 months"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "Students Graduated",
      description: "Successfully trained professionals worldwide"
    },
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "Within 6 months of graduation"
    },
    {
      number: "$85K",
      label: "Average Salary Increase",
      description: "For our career transition students"
    },
    {
      number: "4.9/5",
      label: "Student Satisfaction",
      description: "Based on 2,000+ reviews"
    }
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">AI Academy</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We're not just another online course platform. We're your partner in building 
            a successful AI career with proven methods and industry connections.
          </p>
        </div>

        <div className="features-grid mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-stats">{feature.stats}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <div className="achievements-header text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Track Record Speaks</h3>
            <p className="text-lg text-secondary">
              Real results from real students who transformed their careers with us
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`achievement-card fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="methodology-section mt-12">
          <div className="methodology-content">
            <div className="methodology-text">
              <h3 className="text-3xl font-bold mb-4">Our Proven Learning Methodology</h3>
              <div className="methodology-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Theory Foundation</h4>
                    <p>Solid theoretical understanding of AI concepts and mathematics</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Hands-on Practice</h4>
                    <p>Immediate application through coding exercises and mini-projects</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Real-world Projects</h4>
                    <p>Build portfolio-worthy applications solving actual business problems</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Career Transition</h4>
                    <p>Dedicated support to land your dream AI role</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="methodology-visual">
              <div className="learning-cycle">
                <div className="cycle-element theory">Theory</div>
                <div className="cycle-element practice">Practice</div>
                <div className="cycle-element project">Project</div>
                <div className="cycle-element career">Career</div>
                <div className="cycle-center">
                  <span>🎯</span>
                  <div>Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          display: flex;
          gap: 1.5rem;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .feature-icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: var(--gradient-primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .feature-stats {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
        }

        .achievements-section {
          background: var(--gradient-primary);
          border-radius: 2rem;
          padding: 4rem 3rem;
          color: white;
          text-align: center;
        }

        .achievements-header h3 {
          color: white;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }

        .achievement-card {
          text-align: center;
        }

        .achievement-number {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .achievement-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .achievement-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .methodology-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .methodology-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .step-content p {
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .methodology-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .learning-cycle {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px dashed var(--primary-color);
        }

        .cycle-element {
          position: absolute;
          width: 80px;
          height: 80px;
          background: white;
          border: 3px solid var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--primary-color);
          text-align: center;
          box-shadow: var(--shadow-md);
        }

        .theory { top: -40px; left: 50%; transform: translateX(-50%); }
        .practice { top: 50%; right: -40px; transform: translateY(-50%); }
        .project { bottom: -40px; left: 50%; transform: translateX(-50%); }
        .career { top: 50%; left: -40px; transform: translateY(-50%); }

        .cycle-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          box-shadow: var(--shadow-lg);
        }

        .cycle-center span {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            flex-direction: column;
            text-align: center;
          }

          .achievements-section {
            padding: 3rem 2rem;
          }

          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .methodology-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .learning-cycle {
            width: 250px;
            height: 250px;
          }

          .cycle-element {
            width: 60px;
            height: 60px;
            font-size: 0.75rem;
          }

          .cycle-center {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 480px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .achievement-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;