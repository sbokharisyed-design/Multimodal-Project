import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Mitchell",
      role: "Former Content Writer",
      company: "Marketing Agency",
      image: "✍️",
      story: "After 8 years as a content writer, my entire team of 12 was reduced to 3. ChatGPT now handles 80% of what we used to do. I'm now learning UX design to stay relevant.",
      year: "2023"
    },
    {
      name: "David Chen",
      role: "Former Data Entry Specialist",
      company: "Insurance Corp",
      image: "📊",
      story: "AI automation eliminated my position after 15 years. The system processes in minutes what took me hours. I've since transitioned to AI training and validation.",
      year: "2024"
    },
    {
      name: "Maria Rodriguez",
      role: "Former Customer Service Rep",
      company: "E-commerce Giant",
      image: "📞",
      story: "Our call center went from 200 agents to 50. AI chatbots handle most inquiries now. I retrained as a customer experience analyst reviewing AI interactions.",
      year: "2023"
    },
    {
      name: "James Thompson",
      role: "Former Junior Accountant",
      company: "Financial Services",
      image: "💼",
      story: "Automated bookkeeping tools made my role obsolete. The firm kept senior staff but let go of all entry-level positions. Now studying to become a financial advisor.",
      year: "2024"
    },
    {
      name: "Emily Watson",
      role: "Former Translator",
      company: "Freelance",
      image: "🌍",
      story: "Machine translation improved so much that my rates dropped 60%. Clients prefer AI with light human editing. I now specialize in creative transcreation only.",
      year: "2023"
    },
    {
      name: "Robert Kim",
      role: "Former Paralegal",
      company: "Law Firm",
      image: "⚖️",
      story: "AI document review reduced our paralegal team by half. What took days now takes hours. I'm pursuing my law degree to move into roles AI can't easily replace.",
      year: "2024"
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const getVisibleStories = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentStoryIndex + i) % stories.length;
      visible.push({ ...stories[index], originalIndex: index });
    }
    return visible;
  };

  const stats = [
    { number: "300M", label: "Jobs potentially affected by AI globally", source: "Goldman Sachs" },
    { number: "85M", label: "Jobs displaced by 2025", source: "World Economic Forum" },
    { number: "97M", label: "New roles may emerge", source: "WEF Future of Jobs" },
    { number: "44%", label: "of workers' skills will be disrupted", source: "WEF 2023" }
  ];

  const impactedIndustries = [
    { name: "Customer Service", risk: 85, icon: "📞" },
    { name: "Data Entry", risk: 95, icon: "📊" },
    { name: "Manufacturing", risk: 70, icon: "🏭" },
    { name: "Transportation", risk: 65, icon: "🚗" },
    { name: "Retail", risk: 60, icon: "🛒" },
    { name: "Finance", risk: 55, icon: "💰" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            The Future of Work in the
            <span className="gradient-text"> Age of AI</span>
          </h1>
          <p className="hero-subtitle">
            Generative AI is transforming the workforce at an unprecedented pace. 
            Understand how automation might impact your career and prepare for the future.
          </p>
          <div className="hero-buttons">
            <Link to="/predictor" className="btn btn-primary">
              Check Your Job Risk
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-animation">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="robot-emoji">🤖</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">The Numbers Behind AI Disruption</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-source">Source: {stat.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <h2 className="section-title">Most Impacted Industries</h2>
        <p className="section-subtitle">
          These sectors face the highest automation potential based on current AI capabilities
        </p>
        <div className="industries-grid">
          {impactedIndustries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <div className="risk-bar-container">
                <div 
                  className="risk-bar" 
                  style={{ width: `${industry.risk}%` }}
                ></div>
              </div>
              <div className="risk-percentage">{industry.risk}% Automation Risk</div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="stories-section">
        <h2 className="section-title">Real Stories of AI Displacement</h2>
        <p className="section-subtitle">
          These are real accounts of workers whose careers have been transformed by AI automation
        </p>
        <div className="stories-carousel">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevStory}>
            ←
          </button>
          <div className="stories-track">
            {getVisibleStories().map((person, index) => (
              <div key={`${person.originalIndex}-${index}`} className="story-card">
                <div className="story-header">
                  <div className="story-avatar">{person.image}</div>
                  <div className="story-info">
                    <h3 className="story-name">{person.name}</h3>
                    <p className="story-role">{person.role}</p>
                    <p className="story-company">{person.company}</p>
                  </div>
                  <span className="story-year">{person.year}</span>
                </div>
                <p className="story-text">{person.story}</p>
              </div>
            ))}
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={nextStory}>
            →
          </button>
        </div>
        <div className="stories-cta">
          <Link to="/predictor" className="btn btn-primary btn-large">
            Check If Your Job Is At Risk
          </Link>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="section-title">AI Automation Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">2020</div>
            <div className="timeline-content">
              <h3>Early AI Adoption</h3>
              <p>Basic automation in customer service and data processing begins widespread adoption</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2023</div>
            <div className="timeline-content">
              <h3>Generative AI Boom</h3>
              <p>ChatGPT and similar tools revolutionize content creation, coding, and analysis</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2025</div>
            <div className="timeline-content">
              <h3>Mass Integration</h3>
              <p>AI becomes standard in most white-collar workflows, transforming productivity</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">2030</div>
            <div className="timeline-content">
              <h3>Workforce Transformation</h3>
              <p>Significant job displacement balanced by new AI-related roles and opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;