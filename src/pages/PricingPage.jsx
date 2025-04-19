import '../styles/pricing.css';

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <h1>💸 OmniReach Pricing</h1>
      <p className="subtitle">Choose the plan that scales with your campaigns</p>

      <div className="pricing-tiers">
        <div className="pricing-card">
          <h2>Individual</h2>
          <p className="price">$499/month</p>
          <ul>
            <li>3 Active Campaign</li>
            <li>250 Creator Matches</li>
            <li>Email Support</li>
            <li>500 Active Persona Insights</li>
          </ul>
        </div>

        <div className="pricing-card highlight">
          <h2>Small Business</h2>
          <p className="price">$10,000/month</p>
          <ul>
            <li>10 Active Campaigns</li>
            <li>Unlimited Creator Matches</li>
            <li>Priority Support</li>
            <li>2,000 Active Persona Insights</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p className="price">$20,000k/month</p>
          <ul>
            <li>Unlimited Campaigns</li>
            <li>Unlimited Creator Matches</li>
            <li>Priority Support</li>
            <li>Unlimited Active Persona Insights</li>
            <li>Dedicated Success Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
