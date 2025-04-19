import { useState } from 'react';
import CampaignDashboard from './CampaignDashboard';
import VideosTab from './CampaignTabs/VideosTab';
import PaymentTab from './CampaignTabs/PaymentTab';
import PersonaTab from './CampaignTabs/PersonaTab';
import '../styles/campaign.css';

export default function CampaignPage() {
  const [tab, setTab] = useState('dashboard');

  const renderTab = () => {
    switch (tab) {
      case 'videos': return <VideosTab />;
      case 'payment': return <PaymentTab />;
      case 'persona': return <PersonaTab />;
      default: return <CampaignDashboard />;
    }
  };

  return (
    <div className="campaign-page">
      <aside className="sidebar">
        <h2>Campaign</h2>
        <ul>
          <li onClick={() => setTab('dashboard')}>Dashboard</li>
          <li onClick={() => setTab('videos')}>Videos</li>
          <li onClick={() => setTab('payment')}>Payment</li>
          <li onClick={() => setTab('persona')}>Persona</li>
        </ul>
      </aside>

      <main className="main-content">
        {renderTab()}
      </main>
    </div>
  );
}
