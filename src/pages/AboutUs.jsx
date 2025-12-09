const AboutUs = () => {
  const sources = [
    {
      name: "McKinsey Global Institute",
      description: "Generative AI and the future of work in America",
      link: "https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america"
    },
    {
      name: "World Economic Forum",
      description: "The Future of Jobs Report 2025",
      link: "https://www.weforum.org/publications/the-future-of-jobs-report-2025"
    },
    {
      name: "AIOE Data Repository",
      description: "AI Occupational Exposure Database",
      link: "https://github.com/AIOE-Data/AIOE"
    },
    {
      name: "Bureau of Labor Statistics",
      description: "Occupational Employment and Wage Statistics",
      link: "https://www.bls.gov/oes/"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About AI Takeover</h1>
        <p className="about-subtitle">
          Understanding the impact of artificial intelligence on the workforce
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            AI Takeover is an educational platform dedicated to helping workers, 
            students, and professionals understand how artificial intelligence 
            and automation are reshaping the job market. We provide data-driven 
            insights and tools to help individuals prepare for the future of work.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2 className="section-title">What We Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Research & Analysis</h3>
            <p>
              We aggregate and analyze data from leading research institutions, 
              government agencies, and industry reports to provide accurate 
              information about AI's impact on various occupations.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Interactive Tools</h3>
            <p>
              Our Job Loss Predictor helps individuals assess their occupation's 
              automation risk based on task composition and AI capability research.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Education</h3>
            <p>
              We provide resources and recommendations for skills development 
              to help workers adapt and thrive in an AI-augmented economy.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Trend Tracking</h3>
            <p>
              We monitor the latest developments in AI technology and their 
              potential implications for different industries and job roles.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="sources-section">
        <h2 className="section-title">Our Data Sources</h2>
        <p className="section-subtitle">
          We rely on reputable research institutions and government data
        </p>
        <div className="sources-grid">
          {sources.map((source, index) => (
            <a 
              key={index} 
              href={source.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="source-card"
            >
              <h3>{source.name}</h3>
              <p>{source.description}</p>
              <span className="source-link">Visit Source →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section">
        <div className="disclaimer-content">
          <h2>⚠️ Disclaimer</h2>
          <p>
            This website was created for educational purposes as a school project. 
            The statistics and predictions are based on research from the sources listed above.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;