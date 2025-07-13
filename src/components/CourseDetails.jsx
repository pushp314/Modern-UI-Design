import React, { useState } from 'react';

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  const curriculumData = {
    'Generative AI Mastery': {
      modules: [
        {
          title: "Foundation of Generative AI",
          duration: "Week 1-2",
          topics: ["Introduction to Generative Models", "Probability and Statistics Review", "Neural Network Fundamentals", "Autoencoder Architectures"]
        },
        {
          title: "Transformer Architecture",
          duration: "Week 3-4",
          topics: ["Attention Mechanisms", "Self-Attention", "Multi-Head Attention", "Positional Encoding", "BERT and GPT Architecture"]
        },
        {
          title: "Large Language Models",
          duration: "Week 5-7",
          topics: ["GPT Family Models", "Fine-tuning Techniques", "Prompt Engineering", "In-Context Learning", "Chain-of-Thought Prompting"]
        },
        {
          title: "Image Generation",
          duration: "Week 8-10",
          topics: ["GANs and VAEs", "Diffusion Models", "DALL-E and Midjourney", "Stable Diffusion", "ControlNet and LoRA"]
        },
        {
          title: "Multimodal AI",
          duration: "Week 11-12",
          topics: ["Vision-Language Models", "CLIP and ALIGN", "GPT-4V", "Video Generation", "Audio Synthesis"]
        }
      ]
    },
    'Machine Learning Fundamentals': {
      modules: [
        {
          title: "ML Foundations",
          duration: "Week 1-3",
          topics: ["Statistics and Probability", "Linear Algebra", "Python for ML", "Data Preprocessing", "Feature Engineering"]
        },
        {
          title: "Supervised Learning",
          duration: "Week 4-8",
          topics: ["Linear/Logistic Regression", "Decision Trees", "Random Forest", "SVM", "Naive Bayes", "Model Evaluation"]
        },
        {
          title: "Unsupervised Learning",
          duration: "Week 9-12",
          topics: ["K-Means Clustering", "Hierarchical Clustering", "PCA", "t-SNE", "Association Rules"]
        },
        {
          title: "Advanced Topics",
          duration: "Week 13-16",
          topics: ["Ensemble Methods", "Time Series Analysis", "Recommendation Systems", "Model Deployment", "MLOps Basics"]
        }
      ]
    }
  };

  const methodologySteps = [
    {
      title: "Interactive Video Lectures",
      description: "Engaging video content with real-time coding examples and visual explanations",
      icon: "🎥"
    },
    {
      title: "Hands-on Coding Labs",
      description: "Immediate practice with guided coding exercises and instant feedback",
      icon: "💻"
    },
    {
      title: "Real-world Projects",
      description: "Build portfolio-worthy applications solving actual industry problems",
      icon: "🚀"
    },
    {
      title: "Peer Collaboration",
      description: "Work with fellow students on group projects and code reviews",
      icon: "👥"
    },
    {
      title: "Mentor Support",
      description: "1-on-1 guidance from industry experts and personalized feedback",
      icon: "🎯"
    },
    {
      title: "Assessment & Certification",
      description: "Regular quizzes, projects, and final certification upon completion",
      icon: "🏆"
    }
  ];

  const tools = [
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "TensorFlow", category: "Deep Learning", icon: "🧠" },
    { name: "PyTorch", category: "Deep Learning", icon: "🔥" },
    { name: "Scikit-learn", category: "Machine Learning", icon: "📊" },
    { name: "Jupyter", category: "Development", icon: "📓" },
    { name: "Git", category: "Version Control", icon: "🔧" },
    { name: "Docker", category: "Deployment", icon: "🐳" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Hugging Face", category: "NLP", icon: "🤗" },
    { name: "OpenAI API", category: "AI Services", icon: "🤖" }
  ];

  const certificationFeatures = [
    "Industry-recognized certificate",
    "Blockchain-verified credentials",
    "LinkedIn profile integration",
    "Portfolio project showcase",
    "Continuing education credits",
    "Alumni network access"
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">Course Details</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Dive deep into our meticulously crafted curriculum designed by industry experts 
            to give you practical, job-ready skills in AI and machine learning.
          </p>
        </div>

        <div className="details-container">
          <div className="tabs-navigation">
            <button 
              className={`tab-button ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              📚 Curriculum
            </button>
            <button 
              className={`tab-button ${activeTab === 'methodology' ? 'active' : ''}`}
              onClick={() => setActiveTab('methodology')}
            >
              🎯 Methodology
            </button>
            <button 
              className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              🛠️ Tools & Tech
            </button>
            <button 
              className={`tab-button ${activeTab === 'certification' ? 'active' : ''}`}
              onClick={() => setActiveTab('certification')}
            >
              🏆 Certification
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <div className="curriculum-selector">
                  <h3 className="text-2xl font-bold mb-6">Course Curriculum</h3>
                  <div className="course-tabs">
                    <div className="course-curriculum">
                      <h4 className="text-xl font-semibold mb-4 text-primary">Generative AI Mastery - Sample Curriculum</h4>
                      <div className="modules-grid">
                        {curriculumData['Generative AI Mastery'].modules.map((module, index) => (
                          <div key={index} className="module-card">
                            <div className="module-header">
                              <h5 className="module-title">{module.title}</h5>
                              <span className="module-duration">{module.duration}</span>
                            </div>
                            <ul className="topics-list">
                              {module.topics.map((topic, idx) => (
                                <li key={idx} className="topic-item">
                                  <span className="topic-check">✓</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="curriculum-features">
                  <div className="feature-grid">
                    <div className="feature-item">
                      <div className="feature-icon">📹</div>
                      <h4>40+ Hours of Video Content</h4>
                      <p>Comprehensive video lectures with real-world examples</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💻</div>
                      <h4>20+ Hands-on Projects</h4>
                      <p>Build real applications for your portfolio</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">📝</div>
                      <h4>Weekly Assignments</h4>
                      <p>Regular practice to reinforce learning</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🎯</div>
                      <h4>Capstone Project</h4>
                      <p>End-to-end AI application development</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="methodology-content">
                <h3 className="text-2xl font-bold mb-6">Our Learning Methodology</h3>
                <p className="text-lg text-secondary mb-8">
                  We use a proven blend of theoretical knowledge and practical application 
                  to ensure you not only understand AI concepts but can implement them effectively.
                </p>
                
                <div className="methodology-grid">
                  {methodologySteps.map((step, index) => (
                    <div key={index} className="methodology-card">
                      <div className="methodology-icon">{step.icon}</div>
                      <h4 className="methodology-title">{step.title}</h4>
                      <p className="methodology-description">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="learning-stats">
                  <div className="stat-item">
                    <div className="stat-number">70%</div>
                    <div className="stat-label">Hands-on Practice</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">20%</div>
                    <div className="stat-label">Theory & Concepts</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10%</div>
                    <div className="stat-label">Assessment</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="tools-content">
                <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
                <p className="text-lg text-secondary mb-8">
                  Master the industry-standard tools and frameworks used by top AI companies worldwide.
                </p>

                <div className="tools-grid">
                  {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                      <div className="tool-icon">{tool.icon}</div>
                      <div className="tool-info">
                        <h4 className="tool-name">{tool.name}</h4>
                        <span className="tool-category">{tool.category}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="development-environment">
                  <h4 className="text-xl font-semibold mb-4">Development Environment</h4>
                  <div className="environment-features">
                    <div className="env-feature">
                      <span className="env-icon">☁️</span>
                      <div>
                        <h5>Cloud-based Labs</h5>
                        <p>No setup required - start coding immediately</p>
                      </div>
                    </div>
                    <div className="env-feature">
                      <span className="env-icon">🔧</span>
                      <div>
                        <h5>Pre-configured Environment</h5>
                        <p>All tools and libraries ready to use</p>
                      </div>
                    </div>
                    <div className="env-feature">
                      <span className="env-icon">💾</span>
                      <div>
                        <h5>Auto-save & Backup</h5>
                        <p>Never lose your work with automatic saving</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'certification' && (
              <div className="certification-content">
                <h3 className="text-2xl font-bold mb-6">Industry-Recognized Certification</h3>
                
                <div className="certification-overview">
                  <div className="cert-visual">
                    <div className="certificate-preview">
                      <div className="cert-header">
                        <div className="cert-logo">🤖</div>
                        <h4>AI Academy</h4>
                      </div>
                      <div className="cert-title">Certificate of Completion</div>
                      <div className="cert-course">Generative AI Mastery</div>
                      <div className="cert-name">[Your Name]</div>
                      <div className="cert-date">Completed: [Date]</div>
                      <div className="cert-signature">
                        <div className="signature-line"></div>
                        <div>Director of Education</div>
                      </div>
                    </div>
                  </div>

                  <div className="cert-features">
                    <h4 className="text-xl font-semibold mb-4">Certification Features</h4>
                    <ul className="features-list">
                      {certificationFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="certification-value">
                  <h4 className="text-xl font-semibold mb-4">Why Our Certification Matters</h4>
                  <div className="value-grid">
                    <div className="value-item">
                      <div className="value-icon">🏢</div>
                      <h5>Industry Recognition</h5>
                      <p>Recognized by 500+ companies including Google, Microsoft, and Amazon</p>
                    </div>
                    <div className="value-item">
                      <div className="value-icon">🔗</div>
                      <h5>Blockchain Verified</h5>
                      <p>Tamper-proof credentials that employers can instantly verify</p>
                    </div>
                    <div className="value-item">
                      <div className="value-icon">📈</div>
                      <h5>Career Impact</h5>
                      <p>Average 65% salary increase for certified graduates</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .details-container {
          background: white;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .tabs-navigation {
          display: flex;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .tab-button {
          flex: 1;
          padding: 1.5rem;
          background: none;
          border: none;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }

        .tab-button:hover {
          background: white;
          color: var(--text-primary);
        }

        .tab-button.active {
          background: white;
          color: var(--primary-color);
          border-bottom-color: var(--primary-color);
        }

        .tab-content {
          padding: 3rem;
        }

        .modules-grid {
          display: grid;
          gap: 2rem;
        }

        .module-card {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
        }

        .module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .module-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .module-duration {
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .topics-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.75rem;
        }

        .topic-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .topic-check {
          color: var(--success-color);
          font-weight: 600;
        }

        .curriculum-features {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-color);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .feature-item p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .methodology-card {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .methodology-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .methodology-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .methodology-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .methodology-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .learning-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          padding: 2rem;
          background: var(--gradient-primary);
          border-radius: 1rem;
          color: white;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .tool-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .tool-icon {
          font-size: 2rem;
        }

        .tool-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .tool-category {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .development-environment {
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
        }

        .environment-features {
          display: grid;
          gap: 1.5rem;
        }

        .env-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .env-icon {
          font-size: 1.5rem;
          margin-top: 0.25rem;
        }

        .env-feature h5 {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .env-feature p {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .certification-overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .certificate-preview {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .certificate-preview::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
          background-size: 20px 20px;
        }

        .cert-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .cert-logo {
          font-size: 2rem;
        }

        .cert-header h4 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .cert-title {
          position: relative;
          z-index: 1;
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 1rem;
        }

        .cert-course {
          position: relative;
          z-index: 1;
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .cert-name {
          position: relative;
          z-index: 1;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          padding-bottom: 0.5rem;
          display: inline-block;
        }

        .cert-date {
          position: relative;
          z-index: 1;
          font-size: 0.875rem;
          opacity: 0.8;
          margin-bottom: 2rem;
        }

        .cert-signature {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .signature-line {
          width: 150px;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 auto 0.5rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .feature-check {
          color: var(--success-color);
          font-weight: 600;
          font-size: 1.125rem;
        }

        .value-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-item {
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .value-item h5 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .value-item p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .tabs-navigation {
            flex-direction: column;
          }

          .tab-content {
            padding: 2rem;
          }

          .certification-overview {
            grid-template-columns: 1fr;
          }

          .learning-stats {
            flex-direction: column;
            gap: 2rem;
          }

          .topics-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CourseDetails;