import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "ML Engineer at Google",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The AI Academy completely transformed my career. I went from a traditional software developer to landing my dream job as an ML Engineer at Google. The hands-on projects and industry connections were invaluable.",
      beforeRole: "Software Developer",
      afterRole: "ML Engineer at Google",
      salaryIncrease: "$45K increase",
      timeframe: "8 months",
      course: "Deep Learning Specialization"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "AI Research Scientist at OpenAI",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The Generative AI course was exactly what I needed to break into the cutting-edge AI research field. The instructors are world-class, and the curriculum is always up-to-date with the latest breakthroughs.",
      beforeRole: "Data Analyst",
      afterRole: "AI Research Scientist",
      salaryIncrease: "$65K increase",
      timeframe: "10 months",
      course: "Generative AI Mastery"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Head of AI at Startup",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Not only did I learn the technical skills, but the career support helped me negotiate a leadership position. The network of alumni and industry connections opened doors I never thought possible.",
      beforeRole: "Business Analyst",
      afterRole: "Head of AI",
      salaryIncrease: "$80K increase",
      timeframe: "12 months",
      course: "ML Fundamentals + Deep Learning"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Data Scientist at Microsoft",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The practical approach and real-world projects gave me the confidence to tackle complex AI challenges. The instructors' industry experience really shows in how they structure the learning.",
      beforeRole: "Junior Developer",
      afterRole: "Senior Data Scientist",
      salaryIncrease: "$55K increase",
      timeframe: "9 months",
      course: "Complete AI Track"
    }
  ];

  const successMetrics = [
    { label: "Average Salary Increase", value: "$61K", icon: "💰" },
    { label: "Career Transition Time", value: "9.8 months", icon: "⏱️" },
    { label: "Job Placement Rate", value: "95%", icon: "🎯" },
    { label: "Student Satisfaction", value: "4.9/5", icon: "⭐" }
  ];

  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Success Stories from Our <span className="text-gradient">Alumni</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real career transformations from students who took the leap and mastered AI. 
            Their success could be your success story next.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-main">
            <div className="testimonial-content">
              <div className="testimonial-header">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonials[activeTestimonial].name}</h3>
                  <p className="testimonial-role">{testimonials[activeTestimonial].role}</p>
                  <span className="testimonial-course">{testimonials[activeTestimonial].course}</span>
                </div>
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              <div className="transformation-details">
                <div className="transformation-item">
                  <span className="label">Before:</span>
                  <span className="value">{testimonials[activeTestimonial].beforeRole}</span>
                </div>
                <div className="transformation-arrow">→</div>
                <div className="transformation-item">
                  <span className="label">After:</span>
                  <span className="value">{testimonials[activeTestimonial].afterRole}</span>
                </div>
              </div>

              <div className="success-metrics-inline">
                <div className="metric">
                  <span className="metric-icon">💰</span>
                  <span className="metric-value">{testimonials[activeTestimonial].salaryIncrease}</span>
                </div>
                <div className="metric">
                  <span className="metric-icon">⏱️</span>
                  <span className="metric-value">{testimonials[activeTestimonial].timeframe}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`nav-item ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="nav-info">
                  <div className="nav-name">{testimonial.name}</div>
                  <div className="nav-role">{testimonial.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="success-metrics-section mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Students' Success by the Numbers</h3>
          <div className="metrics-grid">
            {successMetrics.map((metric, index) => (
              <div key={index} className="metric-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="metric-icon-large">{metric.icon}</div>
                <div className="metric-value-large">{metric.value}</div>
                <div className="metric-label-large">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="video-testimonials mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Watch Their Journey</h3>
          <div className="video-grid">
            <div className="video-placeholder">
              <div className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="video-info">
                <h4>Sarah's Journey to Google</h4>
                <p>From bootcamp graduate to ML Engineer</p>
              </div>
            </div>
            <div className="video-placeholder">
              <div className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="video-info">
                <h4>Marcus at OpenAI</h4>
                <p>Breaking into AI research</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .testimonial-main {
          background: white;
          border-radius: 1.5rem;
          padding: 3rem;
          box-shadow: var(--shadow-lg);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .testimonial-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--primary-color);
        }

        .testimonial-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .testimonial-role {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .testimonial-course {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .testimonial-quote {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-style: italic;
          margin-bottom: 2rem;
          position: relative;
        }

        .testimonial-quote::before {
          content: '"';
          font-size: 4rem;
          color: var(--primary-color);
          position: absolute;
          top: -1rem;
          left: -1rem;
          opacity: 0.3;
        }

        .transformation-details {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
        }

        .transformation-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .transformation-item .label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
        }

        .transformation-item .value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .transformation-arrow {
          font-size: 1.5rem;
          color: var(--primary-color);
          font-weight: 600;
        }

        .success-metrics-inline {
          display: flex;
          gap: 2rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .metric-icon {
          font-size: 1.25rem;
        }

        .metric-value {
          font-weight: 600;
          color: var(--success-color);
        }

        .testimonial-navigation {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border: 2px solid var(--border-color);
          border-radius: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .nav-item:hover {
          border-color: var(--primary-color);
          transform: translateX(4px);
        }

        .nav-item.active {
          border-color: var(--primary-color);
          background: rgba(99, 102, 241, 0.05);
        }

        .nav-item img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .nav-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .nav-role {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .metric-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .metric-icon-large {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .metric-value-large {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .metric-label-large {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .video-placeholder {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          padding: 3rem 2rem;
          text-align: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .video-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop') center/cover;
          opacity: 0.3;
        }

        .video-placeholder:hover {
          transform: scale(1.02);
        }

        .play-button {
          position: relative;
          z-index: 1;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .video-placeholder:hover .play-button {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .video-info {
          position: relative;
          z-index: 1;
        }

        .video-info h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .video-info p {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .testimonial-main {
            padding: 2rem;
          }

          .testimonial-header {
            flex-direction: column;
            text-align: center;
          }

          .transformation-details {
            flex-direction: column;
            text-align: center;
          }

          .transformation-arrow {
            transform: rotate(90deg);
          }

          .success-metrics-inline {
            justify-content: center;
          }

          .nav-item {
            flex-direction: column;
            text-align: center;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .video-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;