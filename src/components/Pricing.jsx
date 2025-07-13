import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Foundation',
      description: 'Perfect for beginners starting their AI journey',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Machine Learning Fundamentals course',
        'Basic Python for AI',
        'Community forum access',
        'Email support',
        'Certificate of completion',
        'Lifetime access to course materials',
        'Basic project templates'
      ],
      popular: false,
      cta: 'Start Learning',
      color: 'blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Most popular choice for career changers',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: [
        'All Foundation features',
        'Deep Learning Specialization',
        'Generative AI Mastery',
        'AI Ethics & Governance',
        '1-on-1 mentor sessions (4 hours)',
        'Career coaching & resume review',
        'Priority support',
        'Advanced project portfolio',
        'Job placement assistance',
        'Alumni network access'
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For teams and organizations',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'All Professional features',
        'Custom curriculum design',
        'Dedicated account manager',
        'Team progress tracking',
        'White-label certificates',
        'On-site training options',
        'Custom project development',
        'Priority instructor access',
        'Advanced analytics dashboard',
        'Bulk licensing discounts'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'green'
    }
  ];

  const paymentOptions = [
    {
      icon: '💳',
      title: 'Flexible Payment Plans',
      description: 'Split your payment into 3, 6, or 12 monthly installments'
    },
    {
      icon: '🎓',
      title: 'Student Discounts',
      description: '25% off for students and recent graduates'
    },
    {
      icon: '🏢',
      title: 'Corporate Training',
      description: 'Custom pricing for teams of 10+ employees'
    },
    {
      icon: '🔄',
      title: '30-Day Money Back',
      description: 'Full refund if not satisfied within 30 days'
    }
  ];

  const faqItems = [
    {
      question: 'What if I need more time to complete the course?',
      answer: 'You get lifetime access to all course materials, so you can learn at your own pace. There are no deadlines or time limits.'
    },
    {
      question: 'Do you offer job placement guarantees?',
      answer: 'While we cannot guarantee job placement, 95% of our Professional and Enterprise students find AI-related roles within 6 months of graduation.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes! You can upgrade at any time and only pay the difference. Your progress and access will be maintained.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include community forum access. Professional and Enterprise plans include priority support and 1-on-1 mentoring sessions.'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <section id="pricing" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Invest in Your <span className="text-gradient">AI Future</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            Choose the plan that fits your goals. All plans include lifetime access, 
            industry-recognized certification, and our proven curriculum.
          </p>

          <div className="billing-toggle">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="savings-badge">Save up to $2,000</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>🔥 Most Popular</span>
                </div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                
                <div className="price-container">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{getPrice(plan)}</span>
                    <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="savings">
                      Save ${getSavings(plan)} per year
                    </div>
                  )}
                </div>
              </div>

              <div className="plan-features">
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-action">
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-lg plan-cta`}>
                  {plan.cta}
                </button>
                {plan.id === 'enterprise' && (
                  <p className="contact-note">Custom pricing available</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="payment-options mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Flexible Payment Options</h3>
          <div className="options-grid">
            {paymentOptions.map((option, index) => (
              <div key={index} className="option-card">
                <div className="option-icon">{option.icon}</div>
                <h4 className="option-title">{option.title}</h4>
                <p className="option-description">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="guarantee-section mt-12">
          <div className="guarantee-card">
            <div className="guarantee-content">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-text">
                <h3>30-Day Money-Back Guarantee</h3>
                <p>
                  We're confident you'll love our courses. If you're not completely satisfied 
                  within the first 30 days, we'll refund your money, no questions asked.
                </p>
              </div>
            </div>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="feature-icon">✓</span>
                <span>Full refund within 30 days</span>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">✓</span>
                <span>No questions asked policy</span>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">✓</span>
                <span>Keep all downloaded materials</span>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{item.question}</h4>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .billing-toggle {
          display: flex;
          background: white;
          border-radius: 0.75rem;
          padding: 0.5rem;
          box-shadow: var(--shadow-md);
          max-width: 400px;
          margin: 0 auto;
        }

        .toggle-btn {
          flex: 1;
          padding: 0.75rem 1.5rem;
          background: none;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .toggle-btn.active {
          background: var(--gradient-primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }

        .savings-badge {
          background: var(--accent-color);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .pricing-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .pricing-card.popular {
          border-color: var(--primary-color);
          transform: scale(1.05);
        }

        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gradient-primary);
          color: white;
          padding: 0.5rem 2rem;
          border-radius: 0 0 1rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-top: ${pricingPlans.some(p => p.popular) ? '1rem' : '0'};
        }

        .plan-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .plan-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .price-container {
          margin-bottom: 2rem;
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .amount {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .period {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .savings {
          font-size: 0.875rem;
          color: var(--success-color);
          font-weight: 600;
        }

        .plan-features {
          margin-bottom: 2rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .feature-check {
          color: var(--success-color);
          font-weight: 600;
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .plan-action {
          text-align: center;
        }

        .plan-cta {
          width: 100%;
          margin-bottom: 1rem;
        }

        .contact-note {
          font-size: 0.875rem;
          color: var(--text-light);
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .option-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        .option-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .option-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .option-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .option-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .guarantee-card {
          background: var(--gradient-primary);
          border-radius: 1.5rem;
          padding: 3rem;
          color: white;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .guarantee-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .guarantee-icon {
          font-size: 4rem;
          flex-shrink: 0;
        }

        .guarantee-text h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .guarantee-text p {
          font-size: 1.125rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .guarantee-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .guarantee-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
        }

        .guarantee-feature .feature-icon {
          color: white;
          font-weight: 600;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .faq-answer {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.popular {
            transform: none;
          }

          .pricing-card.popular:hover {
            transform: translateY(-8px);
          }

          .guarantee-card {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .guarantee-content {
            flex-direction: column;
            text-align: center;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .billing-toggle {
            max-width: 100%;
          }

          .toggle-btn {
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;