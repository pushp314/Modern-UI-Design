import React from 'react';

const CourseOfferings = () => {
  const courses = [
    {
      id: 1,
      title: "Generative AI Mastery",
      description: "Master the latest in AI content generation, from GPT models to image synthesis and beyond.",
      duration: "12 weeks",
      level: "Intermediate",
      prerequisites: "Basic Python knowledge",
      outcomes: [
        "Build and deploy GPT-based applications",
        "Create AI-powered content generation tools",
        "Understand transformer architectures",
        "Work with DALL-E, Midjourney, and Stable Diffusion"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "OpenAI API"],
      icon: "🎨",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description: "Comprehensive foundation in ML algorithms, data preprocessing, and model deployment.",
      duration: "16 weeks",
      level: "Beginner",
      prerequisites: "High school mathematics",
      outcomes: [
        "Implement ML algorithms from scratch",
        "Master data preprocessing techniques",
        "Build predictive models",
        "Deploy models to production"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      icon: "📊",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      description: "Advanced neural networks, computer vision, NLP, and cutting-edge deep learning techniques.",
      duration: "20 weeks",
      level: "Advanced",
      prerequisites: "ML Fundamentals or equivalent",
      outcomes: [
        "Design complex neural architectures",
        "Build computer vision applications",
        "Create NLP solutions",
        "Implement reinforcement learning"
      ],
      technologies: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "NLTK"],
      icon: "🧠",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "AI Ethics & Governance",
      description: "Understanding responsible AI development, bias mitigation, and ethical considerations.",
      duration: "8 weeks",
      level: "All Levels",
      prerequisites: "None",
      outcomes: [
        "Identify and mitigate AI bias",
        "Implement ethical AI frameworks",
        "Understand regulatory compliance",
        "Design inclusive AI systems"
      ],
      technologies: ["Fairness Tools", "Explainable AI", "Privacy Tools"],
      icon: "⚖️",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  return (
    <section id="courses" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">AI Curriculum</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            From fundamentals to cutting-edge applications, our courses are designed 
            to take you from beginner to AI expert with hands-on, industry-relevant training.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className={`course-card fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="course-header">
                <div 
                  className="course-icon"
                  style={{ background: course.gradient }}
                >
                  <span>{course.icon}</span>
                </div>
                <div className="course-meta">
                  <div className="course-badges">
                    <span className={`badge ${course.level === 'Beginner' ? 'badge-success' : course.level === 'Intermediate' ? 'badge-warning' : 'badge-primary'}`}>
                      {course.level}
                    </span>
                    <span className="badge badge-primary">{course.duration}</span>
                  </div>
                </div>
              </div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-details">
                <div className="detail-section">
                  <h4>Prerequisites</h4>
                  <p>{course.prerequisites}</p>
                </div>

                <div className="detail-section">
                  <h4>Key Learning Outcomes</h4>
                  <ul className="outcomes-list">
                    {course.outcomes.map((outcome, idx) => (
                      <li key={idx}>
                        <span className="outcome-check">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h4>Technologies Covered</h4>
                  <div className="tech-tags">
                    {course.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="course-actions">
                <a href="#pricing" className="btn btn-primary">
                  Enroll Now
                </a>
                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-path text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Recommended Learning Path</h3>
          <div className="path-flow">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>ML Fundamentals</h4>
                <p>Build your foundation</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Deep Learning</h4>
                <p>Advanced techniques</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Generative AI</h4>
                <p>Cutting-edge applications</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>AI Ethics</h4>
                <p>Responsible development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .course-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .course-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .course-icon {
          width: 60px;
          height: 60px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          box-shadow: var(--shadow-md);
        }

        .course-badges {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .course-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .course-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .course-details {
          margin-bottom: 2rem;
        }

        .detail-section {
          margin-bottom: 1.5rem;
        }

        .detail-section h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .detail-section p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .outcomes-list {
          list-style: none;
          padding: 0;
        }

        .outcomes-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .outcome-check {
          color: var(--success-color);
          font-weight: 600;
          flex-shrink: 0;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .course-actions {
          display: flex;
          gap: 1rem;
        }

        .course-actions .btn {
          flex: 1;
          justify-content: center;
        }

        .learning-path {
          background: white;
          border-radius: 1.5rem;
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }

        .path-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .path-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 150px;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          box-shadow: var(--shadow-md);
        }

        .step-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .step-content p {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .path-arrow {
          font-size: 1.5rem;
          color: var(--primary-color);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .course-card {
            padding: 1.5rem;
          }

          .course-actions {
            flex-direction: column;
          }

          .path-flow {
            flex-direction: column;
            gap: 1rem;
          }

          .path-arrow {
            transform: rotate(90deg);
          }

          .learning-path {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CourseOfferings;