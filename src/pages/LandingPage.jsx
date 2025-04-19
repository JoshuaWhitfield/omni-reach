import '../styles/landing.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <main className="hero-section">
        <h1 className="headline">Expand Your Reach with AI-Powered Ad Campaigns</h1>
        <p className="subtext">
          Leverage the power of AI to maximize your advertising impact. Our platform simplifies campaign configuration,
          content selection, and analytics to drive better results.
        </p>
        <Link to="/config">
          <button className="cta-button">Get Started</button>
        </Link>
      </main>
    </div>
  );
}
