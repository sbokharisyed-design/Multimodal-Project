import { useState } from 'react';

const JobLossPredictor = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Job data with automation risk scores and details
  const jobsData = {
    "data-entry-clerk": {
      title: "Data Entry Clerk",
      category: "Administrative",
      riskScore: 95,
      riskLevel: "Very High",
      description: "Data entry tasks are highly susceptible to automation through OCR, AI data processing, and automated form filling systems.",
      tasksAtRisk: ["Manual data input", "Document digitization", "Form processing", "Database updates"],
      safeTasks: ["Quality assurance review", "Exception handling", "Complex decision making"],
      recommendations: [
        "Learn data analysis and visualization tools",
        "Develop expertise in database management",
        "Acquire programming basics (Python, SQL)",
        "Consider transitioning to data analyst roles"
      ],
      timeframe: "1-3 years",
      affectedWorkers: "2.5 million in US"
    },
    "customer-service-rep": {
      title: "Customer Service Representative",
      category: "Service",
      riskScore: 85,
      riskLevel: "High",
      description: "AI chatbots and virtual assistants are increasingly handling routine customer inquiries, though complex issues still require human intervention.",
      tasksAtRisk: ["Answering FAQs", "Order status inquiries", "Basic troubleshooting", "Appointment scheduling"],
      safeTasks: ["Complex problem resolution", "Emotional support", "Escalation handling", "Relationship building"],
      recommendations: [
        "Specialize in complex customer issues",
        "Develop emotional intelligence skills",
        "Learn to work alongside AI tools",
        "Consider roles in customer success management"
      ],
      timeframe: "2-5 years",
      affectedWorkers: "3 million in US"
    },
    "software-developer": {
      title: "Software Developer",
      category: "Technology",
      riskScore: 35,
      riskLevel: "Moderate",
      description: "While AI can assist with code generation and debugging, complex system design and creative problem-solving remain human domains.",
      tasksAtRisk: ["Boilerplate code writing", "Simple bug fixes", "Code documentation", "Basic testing"],
      safeTasks: ["System architecture", "Complex problem solving", "Code review", "Team collaboration", "Creative solutions"],
      recommendations: [
        "Focus on system design and architecture",
        "Learn to leverage AI coding assistants",
        "Develop soft skills and leadership",
        "Specialize in AI/ML development"
      ],
      timeframe: "5-10 years",
      affectedWorkers: "Enhanced rather than replaced"
    },
    "truck-driver": {
      title: "Truck Driver",
      category: "Transportation",
      riskScore: 65,
      riskLevel: "Moderate-High",
      description: "Autonomous vehicle technology is advancing, but regulatory, safety, and infrastructure challenges will slow widespread adoption.",
      tasksAtRisk: ["Highway driving", "Route navigation", "Basic vehicle monitoring"],
      safeTasks: ["Loading/unloading", "Customer interaction", "Complex urban navigation", "Emergency handling"],
      recommendations: [
        "Learn logistics and supply chain management",
        "Get certified in autonomous vehicle operation",
        "Consider last-mile delivery specialization",
        "Develop mechanical and technical skills"
      ],
      timeframe: "5-15 years",
      affectedWorkers: "3.5 million in US"
    },
    "accountant": {
      title: "Accountant",
      category: "Finance",
      riskScore: 55,
      riskLevel: "Moderate",
      description: "Routine bookkeeping is being automated, but complex tax planning, auditing, and advisory services require human judgment.",
      tasksAtRisk: ["Basic bookkeeping", "Invoice processing", "Expense tracking", "Simple tax preparation"],
      safeTasks: ["Tax strategy", "Auditing", "Financial advisory", "Regulatory compliance", "Client relationships"],
      recommendations: [
        "Specialize in complex tax planning",
        "Develop advisory and consulting skills",
        "Learn forensic accounting",
        "Get certifications (CPA, CFA)"
      ],
      timeframe: "3-7 years",
      affectedWorkers: "1.4 million in US"
    },
    "registered-nurse": {
      title: "Registered Nurse",
      category: "Healthcare",
      riskScore: 15,
      riskLevel: "Low",
      description: "Healthcare requires human empathy, complex decision-making, and physical care that AI cannot replicate. AI will augment rather than replace nurses.",
      tasksAtRisk: ["Documentation", "Scheduling", "Basic monitoring"],
      safeTasks: ["Patient care", "Medical procedures", "Emotional support", "Complex assessments", "Emergency response"],
      recommendations: [
        "Stay current with medical technology",
        "Learn to use AI diagnostic tools",
        "Specialize in complex care areas",
        "Develop leadership and management skills"
      ],
      timeframe: "10+ years",
      affectedWorkers: "Demand increasing"
    },
    "marketing-manager": {
      title: "Marketing Manager",
      category: "Business",
      riskScore: 40,
      riskLevel: "Moderate",
      description: "AI can automate content generation and data analysis, but strategic thinking, creativity, and brand management remain human-centric.",
      tasksAtRisk: ["Content scheduling", "Basic copywriting", "Data reporting", "A/B testing setup"],
      safeTasks: ["Strategy development", "Brand management", "Team leadership", "Creative direction", "Stakeholder relations"],
      recommendations: [
        "Master AI marketing tools",
        "Focus on strategy and leadership",
        "Develop data-driven decision making",
        "Build expertise in emerging platforms"
      ],
      timeframe: "5-8 years",
      affectedWorkers: "Role evolution expected"
    },
    "teacher": {
      title: "Teacher / Educator",
      category: "Education",
      riskScore: 20,
      riskLevel: "Low",
      description: "Education requires human connection, mentorship, and adaptive teaching that AI cannot fully replicate. AI will serve as a teaching assistant.",
      tasksAtRisk: ["Grading simple assignments", "Administrative tasks", "Basic content delivery"],
      safeTasks: ["Student mentorship", "Complex instruction", "Emotional support", "Curriculum development", "Classroom management"],
      recommendations: [
        "Integrate AI tools into teaching",
        "Focus on personalized learning",
        "Develop skills in educational technology",
        "Specialize in areas requiring human interaction"
      ],
      timeframe: "10+ years",
      affectedWorkers: "Role enhancement expected"
    },
    "graphic-designer": {
      title: "Graphic Designer",
      category: "Creative",
      riskScore: 50,
      riskLevel: "Moderate",
      description: "AI image generators are disrupting basic design work, but creative direction, brand consistency, and client collaboration remain valuable.",
      tasksAtRisk: ["Stock image selection", "Basic layouts", "Template-based designs", "Simple illustrations"],
      safeTasks: ["Brand strategy", "Creative direction", "Client collaboration", "Complex compositions", "User experience design"],
      recommendations: [
        "Master AI design tools (Midjourney, DALL-E)",
        "Focus on brand strategy and identity",
        "Develop UX/UI specialization",
        "Build strong client relationships"
      ],
      timeframe: "3-5 years",
      affectedWorkers: "Role transformation expected"
    },
    "lawyer": {
      title: "Lawyer / Attorney",
      category: "Legal",
      riskScore: 45,
      riskLevel: "Moderate",
      description: "AI can assist with document review and legal research, but courtroom advocacy, client counseling, and complex negotiations require human judgment.",
      tasksAtRisk: ["Document review", "Legal research", "Contract analysis", "Due diligence"],
      safeTasks: ["Courtroom advocacy", "Client counseling", "Negotiations", "Strategy development", "Complex litigation"],
      recommendations: [
        "Learn legal AI tools",
        "Specialize in complex litigation",
        "Develop negotiation and counseling skills",
        "Focus on areas requiring human judgment"
      ],
      timeframe: "5-10 years",
      affectedWorkers: "Junior roles most affected"
    }
  };

  const handleJobSelect = (e) => {
    setSelectedJob(e.target.value);
    setResult(null);
  };

  const analyzeJob = () => {
    if (!selectedJob) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setResult(jobsData[selectedJob]);
      setIsAnalyzing(false);
    }, 1500);
  };

  const getRiskColor = (score) => {
    if (score >= 80) return '#ef4444';
    if (score >= 60) return '#f97316';
    if (score >= 40) return '#eab308';
    if (score >= 20) return '#22c55e';
    return '#10b981';
  };

  return (
    <div className="predictor-page">
      <section className="predictor-hero">
        <h1>AI Job Loss Predictor</h1>
        <p className="predictor-subtitle">
          Discover how artificial intelligence might impact your occupation and learn how to prepare for the future
        </p>
      </section>

      <section className="predictor-tool">
        <div className="tool-container">
          <div className="input-section">
            <h2>Select Your Occupation</h2>
            <p>Choose your job category to see an AI automation risk assessment</p>
            
            <select 
              value={selectedJob} 
              onChange={handleJobSelect}
              className="job-select"
            >
              <option value="">-- Select an occupation --</option>
              <optgroup label="Administrative">
                <option value="data-entry-clerk">Data Entry Clerk</option>
              </optgroup>
              <optgroup label="Service">
                <option value="customer-service-rep">Customer Service Representative</option>
              </optgroup>
              <optgroup label="Technology">
                <option value="software-developer">Software Developer</option>
              </optgroup>
              <optgroup label="Transportation">
                <option value="truck-driver">Truck Driver</option>
              </optgroup>
              <optgroup label="Finance">
                <option value="accountant">Accountant</option>
              </optgroup>
              <optgroup label="Healthcare">
                <option value="registered-nurse">Registered Nurse</option>
              </optgroup>
              <optgroup label="Business">
                <option value="marketing-manager">Marketing Manager</option>
              </optgroup>
              <optgroup label="Education">
                <option value="teacher">Teacher / Educator</option>
              </optgroup>
              <optgroup label="Creative">
                <option value="graphic-designer">Graphic Designer</option>
              </optgroup>
              <optgroup label="Legal">
                <option value="lawyer">Lawyer / Attorney</option>
              </optgroup>
            </select>

            <button 
              className="analyze-btn"
              onClick={analyzeJob}
              disabled={!selectedJob || isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <span className="spinner"></span>
                  Analyzing...
                </>
              ) : (
                'Analyze Risk'
              )}
            </button>
          </div>

          {result && (
            <div className="results-section">
              <div className="result-header">
                <h2>{result.title}</h2>
                <span className="category-badge">{result.category}</span>
              </div>

              <div className="risk-meter">
                <div className="risk-label">
                  <span>Automation Risk Score</span>
                  <span 
                    className="risk-level"
                    style={{ color: getRiskColor(result.riskScore) }}
                  >
                    {result.riskLevel}
                  </span>
                </div>
                <div className="risk-bar-outer">
                  <div 
                    className="risk-bar-inner"
                    style={{ 
                      width: `${result.riskScore}%`,
                      backgroundColor: getRiskColor(result.riskScore)
                    }}
                  ></div>
                </div>
                <div className="risk-score">{result.riskScore}%</div>
              </div>

              <div className="result-description">
                <p>{result.description}</p>
              </div>

              <div className="result-details">
                <div className="detail-card tasks-at-risk">
                  <h3>⚠️ Tasks at Risk</h3>
                  <ul>
                    {result.tasksAtRisk.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-card safe-tasks">
                  <h3>✅ Tasks Likely Safe</h3>
                  <ul>
                    {result.safeTasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="recommendations-section">
                <h3>💡 Recommendations</h3>
                <ul className="recommendations-list">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              <div className="meta-info">
                <div className="meta-item">
                  <span className="meta-label">Estimated Timeframe</span>
                  <span className="meta-value">{result.timeframe}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Workers Affected (US)</span>
                  <span className="meta-value">{result.affectedWorkers}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="methodology-section">
        <h2>How We Calculate Risk</h2>
        <div className="methodology-grid">
          <div className="methodology-card">
            <div className="method-icon">📋</div>
            <h3>Task Analysis</h3>
            <p>We break down each occupation into its component tasks and assess which can be automated with current AI technology.</p>
          </div>
          <div className="methodology-card">
            <div className="method-icon">🤖</div>
            <h3>AI Capability Mapping</h3>
            <p>We map AI capabilities (language processing, image recognition, decision-making) to job requirements.</p>
          </div>
          <div className="methodology-card">
            <div className="method-icon">📊</div>
            <h3>Research Integration</h3>
            <p>Our scores incorporate findings from McKinsey, World Economic Forum, and academic research on AI impact.</p>
          </div>
          <div className="methodology-card">
            <div className="method-icon">⏱️</div>
            <h3>Timeline Estimation</h3>
            <p>We estimate when automation might significantly impact each role based on technology readiness and adoption patterns.</p>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>General Tips for AI-Proofing Your Career</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-number">1</span>
            <h3>Embrace AI Tools</h3>
            <p>Learn to work with AI rather than against it. Professionals who leverage AI will be more valuable than those who resist it.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">2</span>
            <h3>Develop Human Skills</h3>
            <p>Focus on skills AI struggles with: empathy, creativity, complex problem-solving, and interpersonal communication.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">3</span>
            <h3>Stay Adaptable</h3>
            <p>Cultivate a growth mindset and be prepared to continuously learn new skills throughout your career.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">4</span>
            <h3>Specialize Strategically</h3>
            <p>Develop expertise in areas that require human judgment, creativity, or physical presence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobLossPredictor;