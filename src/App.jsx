import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import JobLossPredictor from './pages/JobLossPredictor';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/predictor" element={<JobLossPredictor />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>AI Takeover - Multimodal Project</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
